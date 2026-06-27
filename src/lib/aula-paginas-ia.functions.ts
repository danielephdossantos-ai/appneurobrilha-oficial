import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  aulaId: z.string().uuid(),
  force: z.boolean().optional(),
});

const PaginaSchema = z.object({
  tipo: z.enum([
    "objetivo",
    "explicacao",
    "demonstracao",
    "exemplo",
    "pratica_guiada",
    "exercicio",
    "desafio",
    "revisao",
  ]),
  titulo: z.string().min(1).max(80),
  conteudo: z
    .object({
      texto: z.string().min(20).max(900),
      destaque: z.string().max(220).optional(),
      bullets: z.array(z.string().max(180)).max(6).optional(),
      passos: z.array(z.string().max(180)).max(6).optional(),
      exemplos: z
        .array(z.object({ silaba: z.string().max(20), palavra: z.string().max(40) }))
        .max(6)
        .optional(),
      perguntas: z
        .array(z.object({
          pergunta: z.string().max(220),
          resposta: z.string().max(220),
          explicacao: z.string().max(320).optional(),
          opcoes: z.array(z.string().max(80)).max(4).optional(),
        }))
        .max(6)
        .optional(),
    })
    .passthrough(),
});

const AulaSchema = z.object({
  paginas: z.array(PaginaSchema).length(8),
});

const SYSTEM = `Você é "Brilha", uma professora especialista em alfabetização, matemática e dificuldades de aprendizagem.
Você escreve AULAS DE VERDADE para a criança aprender, não resumos genéricos.

NUNCA gere texto genérico como "Compreender e praticar X", "use objetos do cotidiano", "pratique mais" ou "vamos aprender de forma divertida".
Toda página DEVE ensinar um conteúdo concreto, com exemplos reais, correção explicada e atividade que a criança consegue fazer AGORA.

Se o tema vier amplo (ex: "dificuldade em matemática"), escolha uma micro-habilidade inicial concreta adequada à idade (ex: contar, juntar/decompor, tabuada, interpretação de problema) e ensine essa micro-habilidade profundamente.

ESTRUTURA OBRIGATÓRIA (8 páginas, nesta ordem):
1) tipo "objetivo"        — diga exatamente a micro-habilidade de hoje. Inclua "destaque" com a promessa concreta.
2) tipo "explicacao"      — ensine o conceito com 4-6 frases claras. Use "bullets" com 3 regras que a criança pode seguir.
3) tipo "demonstracao"    — faça uma demonstração na lousa: use "passos" com 4-6 etapas. Em matemática, mostre conta/resolução. Em português, mostre som/letra/palavra/frase.
4) tipo "exemplo"         — mostre 4 exemplos CONCRETOS. Para alfabetização use exemplos silaba/palavra. Para matemática, exemplos com números reais no texto e passos.
5) tipo "pratica_guiada"  — a Brilha faz junto: "passos" com 5 ações curtas. Não dependa dos pais.
6) tipo "exercicio"       — 4 exercícios com "perguntas" contendo pergunta, opcoes (quando couber), resposta e explicacao do porquê.
7) tipo "desafio"         — 2 desafios um pouco mais difíceis, com resposta e explicação. Não use placeholders.
8) tipo "revisao"         — recapitulando 3 coisas aprendidas e 1 missão curta para treinar depois.

REGRAS DE LINGUAGEM:
- Fale DIRETO com a criança (você/a gente), nunca com os pais.
- Linguagem viva, fofa, com pequenas brincadeiras ("ihhh, essa foi quase!").
- Português do Brasil. Sem markdown. Sem emojis dentro dos textos (os emojis do título já vêm no app).
 - ZERO frases vagas. Se o tema for "tabuada do 3", os exemplos são "3 x 1 = 3", "3 x 2 = 6"... Se for leitura, use palavras reais. Se for interpretação, use um mini-texto real de 3 linhas.
 - Toda resposta errada deve ter explicação pedagógica curta no campo "explicacao".

FORMATO (responda APENAS este JSON, sem markdown):
{
  "paginas": [
    { "tipo": "objetivo",       "titulo": "...", "conteudo": { "texto": "...", "destaque": "..." } },
    { "tipo": "explicacao",     "titulo": "...", "conteudo": { "texto": "...", "bullets": ["...","...","..."] } },
    { "tipo": "demonstracao",   "titulo": "...", "conteudo": { "texto": "...", "passos": ["...","...","...","..."] } },
    { "tipo": "exemplo",        "titulo": "...", "conteudo": { "texto": "...", "exemplos": [{"silaba":"...","palavra":"..."}, ...], "passos": ["..."] } },
    { "tipo": "pratica_guiada", "titulo": "...", "conteudo": { "texto": "...", "passos": ["...","...","...","..."], "destaque": "..." } },
    { "tipo": "exercicio",      "titulo": "...", "conteudo": { "texto": "...", "perguntas": [{"pergunta":"...","opcoes":["..."],"resposta":"...","explicacao":"..."}, ...] } },
    { "tipo": "desafio",        "titulo": "...", "conteudo": { "texto": "...", "perguntas": [{"pergunta":"...","resposta":"...","explicacao":"..."}, ...] } },
    { "tipo": "revisao",        "titulo": "...", "conteudo": { "texto": "...", "bullets": ["...","...","..."], "destaque": "..." } }
  ]
}`;

function userPrompt(aula: { titulo: string; objetivo: string | null; faixa_etaria: string | null; habilidade: string | null; area: string | null }) {
  return `Crie a apostila completa em JSON.

Aula: ${aula.titulo}
Objetivo do banco: ${aula.objetivo ?? "(não informado)"}
Habilidade: ${aula.habilidade ?? "(não informado)"}
Área: ${aula.area ?? "(não informado)"}
Faixa etária: ${aula.faixa_etaria ?? "6 a 10 anos"}

Gere AGORA, com exemplos reais e específicos do tema acima. Nada de texto genérico.`;
}

function parseJson(raw: string): unknown {
  let txt = raw.trim();
  if (txt.startsWith("```")) txt = txt.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  return JSON.parse(txt);
}

export const gerarPaginasAula = createServerFn({ method: "POST" })
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

    // Load aula + habilidade
    const { data: aula, error: aulaErr } = await admin
      .from("rb_aulas")
      .select("id,titulo,objetivo,faixa_etaria,habilidade_id")
      .eq("id", data.aulaId)
      .maybeSingle();
    if (aulaErr || !aula) return { ok: false as const, error: "Aula não encontrada" };

    let habilidadeNome: string | null = null;
    let areaNome: string | null = null;
    if (aula.habilidade_id) {
      const { data: hab } = await admin
        .from("rb_habilidades")
        .select("nome,area")
        .eq("id", aula.habilidade_id)
        .maybeSingle();
      habilidadeNome = hab?.nome ?? null;
      areaNome = hab?.area ?? null;
    }

    // If not forcing, skip if pages already look rich enough
    if (!data.force) {
      const { data: existentes } = await admin
        .from("rb_paginas_aula")
        .select("conteudo")
        .eq("aula_id", data.aulaId);
      const totalChars = (existentes ?? []).reduce(
        (acc: number, p: any) => acc + JSON.stringify(p.conteudo ?? {}).length,
        0,
      );
      if (totalChars > 1200) {
        return { ok: true as const, regenerated: false, totalChars };
      }
    }

    // Call Groq
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM },
          {
            role: "user",
            content: userPrompt({
              titulo: aula.titulo,
              objetivo: aula.objetivo,
              faixa_etaria: aula.faixa_etaria,
              habilidade: habilidadeNome,
              area: areaNome,
            }),
          },
        ],
        temperature: 0.8,
        max_tokens: 3200,
        response_format: { type: "json_object" },
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.error("[gerarPaginasAula] groq", res.status, t.slice(0, 300));
      return { ok: false as const, error: `Groq ${res.status}` };
    }
    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
    if (!raw) return { ok: false as const, error: "Resposta vazia" };

    let parsed: z.infer<typeof AulaSchema>;
    try {
      parsed = AulaSchema.parse(parseJson(raw));
    } catch (e) {
      console.error("[gerarPaginasAula] parse", e, raw.slice(0, 400));
      return { ok: false as const, error: "JSON inválido" };
    }

    // Replace pages
    await admin.from("rb_paginas_aula").delete().eq("aula_id", data.aulaId);
    const rows = parsed.paginas.map((p, i) => ({
      aula_id: data.aulaId,
      ordem: i + 1,
      tipo: p.tipo,
      titulo: p.titulo,
      conteudo: p.conteudo,
    }));
    const { error: insErr } = await admin.from("rb_paginas_aula").insert(rows);
    if (insErr) {
      console.error("[gerarPaginasAula] insert", insErr);
      return { ok: false as const, error: insErr.message };
    }
    return { ok: true as const, regenerated: true, paginas: rows.length };
  });
