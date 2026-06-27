import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  codigo: z.string().min(4).max(20),
  force: z.boolean().optional(),
  regenerarExercicios: z.boolean().optional(),
  regenerarExplicacao: z.boolean().optional(),
});

const ExercicioSchema = z.object({
  enunciado: z.string().min(5).max(400),
  alternativas: z.array(z.string().max(160)).min(2).max(5).optional(),
  resposta: z.string().max(200).optional(),
});

const ConteudoSchema = z.object({
  titulo: z.string().min(3).max(160),
  explicacao: z.string().min(80).max(2200),
  objetivos: z.array(z.string().max(220)).min(2).max(6),
  exemplos: z
    .array(
      z.object({
        enunciado: z.string().max(300),
        resolucao: z.string().max(600),
      }),
    )
    .min(2)
    .max(5),
  exercicios_faceis: z.array(ExercicioSchema).min(3).max(5),
  exercicios_medios: z.array(ExercicioSchema).min(3).max(5),
  exercicios_dificeis: z.array(ExercicioSchema).min(2).max(4),
  gabarito: z.array(z.string().max(300)).min(3).max(20),
  criterios_avaliacao: z.array(z.string().max(220)).min(2).max(5),
  habilidades_relacionadas: z.array(z.string().max(20)).max(6).optional(),
});

const SYSTEM = `Você é "Brilha", professora brasileira que escreve aulas REAIS para crianças seguindo a BNCC.

NUNCA produza texto genérico ("compreender e praticar", "use objetos do cotidiano"). Toda saída precisa ser específica do código BNCC fornecido, com NÚMEROS REAIS, EXEMPLOS REAIS e ENUNCIADOS RESOLVÍVEIS.

REGRAS:
- Português do Brasil, linguagem clara para a faixa etária da habilidade.
- Fale com a criança ("você", "vamos") na explicação.
- Exemplos resolvidos com passo a passo numérico.
- Exercícios de múltipla escolha com 4 alternativas quando fizer sentido; senão deixe "alternativas" fora e use "resposta".
- Gabarito alinhado em ordem: primeiro fáceis, depois médios, depois difíceis.
- Critérios de avaliação concretos e observáveis.
- Sem markdown, sem emojis, sem placeholders.

FORMATO (responda APENAS este JSON):
{
  "titulo": "...",
  "explicacao": "...",
  "objetivos": ["..."],
  "exemplos": [{"enunciado":"...","resolucao":"..."}],
  "exercicios_faceis": [{"enunciado":"...","alternativas":["..."],"resposta":"..."}],
  "exercicios_medios": [...],
  "exercicios_dificeis": [...],
  "gabarito": ["..."],
  "criterios_avaliacao": ["..."],
  "habilidades_relacionadas": ["EFxxYYzz"]
}`;

function userPrompt(meta: {
  codigo: string;
  ano: number | null;
  componente: string | null;
  habilidade: string | null;
}) {
  return `Gere a aula completa em JSON para a habilidade BNCC:

Código: ${meta.codigo}
Ano: ${meta.ano ?? "(não informado)"}
Componente: ${meta.componente ?? "(não informado)"}
Habilidade (texto oficial): ${meta.habilidade ?? "(usar conhecimento do código BNCC)"}

Use exemplos numéricos reais ligados a esta habilidade. Nada de texto genérico.`;
}

function parseJson(raw: string): unknown {
  let txt = raw.trim();
  if (txt.startsWith("```")) txt = txt.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  return JSON.parse(txt);
}

export const gerarConteudoBncc = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) return { ok: false as const, error: "GROQ_API_KEY ausente" };

    const { createClient } = await import("@supabase/supabase-js");
    const admin = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

    const { data: meta, error: metaErr } = await admin
      .from("bncc_biblioteca")
      .select("codigo,ano,componente,habilidade")
      .eq("codigo", data.codigo)
      .maybeSingle();
    if (metaErr || !meta) return { ok: false as const, error: "Código BNCC não encontrado" };

    const { data: existente } = await admin
      .from("bncc_conteudo")
      .select("*")
      .eq("codigo", data.codigo)
      .maybeSingle();

    // Skip if rich enough and not forced
    if (!data.force && !data.regenerarExercicios && !data.regenerarExplicacao && existente) {
      const rico =
        (existente.explicacao?.length ?? 0) > 200 &&
        Array.isArray(existente.exercicios_faceis) &&
        (existente.exercicios_faceis as unknown[]).length >= 2;
      if (rico) return { ok: true as const, regenerated: false };
    }

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: userPrompt(meta as { codigo: string; ano: number | null; componente: string | null; habilidade: string | null }) },
        ],
        temperature: 0.6,
        max_tokens: 4096,
        response_format: { type: "json_object" },
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.error("[gerarConteudoBncc] groq", res.status, t.slice(0, 300));
      return { ok: false as const, error: `Groq ${res.status}` };
    }
    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
    if (!raw) return { ok: false as const, error: "Resposta vazia" };

    let parsed: z.infer<typeof ConteudoSchema>;
    try {
      parsed = ConteudoSchema.parse(parseJson(raw));
    } catch (e) {
      console.error("[gerarConteudoBncc] parse", e, raw.slice(0, 400));
      return { ok: false as const, error: "JSON inválido" };
    }

    // Partial regeneration: keep existing fields when requested
    const payload: Record<string, unknown> = {
      codigo: data.codigo,
      titulo: parsed.titulo,
      explicacao: parsed.explicacao,
      objetivos: parsed.objetivos,
      exemplos: parsed.exemplos,
      exercicios_faceis: parsed.exercicios_faceis,
      exercicios_medios: parsed.exercicios_medios,
      exercicios_dificeis: parsed.exercicios_dificeis,
      gabarito: parsed.gabarito,
      criterios_avaliacao: parsed.criterios_avaliacao,
      habilidades_relacionadas: parsed.habilidades_relacionadas ?? [],
    };

    if (data.regenerarExercicios && existente) {
      // só sobrescreve exercícios + gabarito
      Object.assign(payload, {
        titulo: existente.titulo ?? parsed.titulo,
        explicacao: existente.explicacao ?? parsed.explicacao,
        objetivos: existente.objetivos ?? parsed.objetivos,
        exemplos: existente.exemplos ?? parsed.exemplos,
        criterios_avaliacao: existente.criterios_avaliacao ?? parsed.criterios_avaliacao,
        habilidades_relacionadas: existente.habilidades_relacionadas ?? parsed.habilidades_relacionadas ?? [],
      });
    }
    if (data.regenerarExplicacao && existente) {
      Object.assign(payload, {
        exercicios_faceis: existente.exercicios_faceis ?? parsed.exercicios_faceis,
        exercicios_medios: existente.exercicios_medios ?? parsed.exercicios_medios,
        exercicios_dificeis: existente.exercicios_dificeis ?? parsed.exercicios_dificeis,
        gabarito: existente.gabarito ?? parsed.gabarito,
      });
    }

    const { error: upErr } = await admin
      .from("bncc_conteudo")
      .upsert(payload, { onConflict: "codigo" });
    if (upErr) {
      console.error("[gerarConteudoBncc] upsert", upErr);
      return { ok: false as const, error: upErr.message };
    }
    return { ok: true as const, regenerated: true };
  });
