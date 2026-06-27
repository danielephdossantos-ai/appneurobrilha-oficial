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
    "exemplo",
    "pratica_guiada",
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
        .array(z.object({ pergunta: z.string().max(180), resposta: z.string().max(180) }))
        .max(5)
        .optional(),
    })
    .passthrough(),
});

const AulaSchema = z.object({
  paginas: z.array(PaginaSchema).length(6),
});

const SYSTEM = `Você é "Brilha", uma professora carinhosa que escreve apostilas REAIS, ricas e divertidas para crianças.

NUNCA gere texto genérico como "Compreender e praticar X" ou "Use objetos do cotidiano". Toda página DEVE ter conteúdo concreto, com exemplos REAIS, falas da Brilha, perguntas pensáveis pela criança, e mini-atividades praticáveis no celular ou no caderno.

ESTRUTURA OBRIGATÓRIA (6 páginas, nesta ordem):
1) tipo "objetivo"        — diga, em 1ª pessoa para a criança, o que ela vai aprender HOJE de jeitinho concreto. Inclua "destaque" com a frase-promessa ("No fim, você vai conseguir ____ sozinha!").
2) tipo "explicacao"      — explique o conceito com analogia do mundo da criança (animal, brinquedo, comida). 3-5 frases. Use "bullets" com 3 pontos-chave.
3) tipo "exemplo"         — mostre 3 a 5 exemplos CONCRETOS no array "exemplos" (silaba/palavra) OU no campo "texto" com exemplos numerados de verdade (números reais, palavras reais, situações reais). Nada de "use objetos do cotidiano".
4) tipo "pratica_guiada"  — array "passos" com 4-6 passos clarinhos que a criança faz AGORA junto com a Brilha. Cada passo começa com verbo na 2ª pessoa ("Pegue", "Repita comigo", "Aponte"). Inclua "destaque" curtinho de incentivo.
5) tipo "desafio"         — array "perguntas" com 3 perguntas/desafios curtos com resposta REAL. Não use placeholders.
6) tipo "revisao"         — recapitula 3 coisas que a criança aprendeu (bullets), e dá 1 missão para fazer depois do app ("Conte para alguém da casa...").

REGRAS DE LINGUAGEM:
- Fale DIRETO com a criança (você/a gente), nunca com os pais.
- Linguagem viva, fofa, com pequenas brincadeiras ("ihhh, essa foi quase!").
- Português do Brasil. Sem markdown. Sem emojis dentro dos textos (os emojis do título já vêm no app).
- ZERO frases vagas. Se o tema for "tabuada do 3", os exemplos são "3 x 1 = 3", "3 x 2 = 6"... Se for "pinça e preensão", os exemplos são "pegar o feijão com 2 dedinhos", "fazer bolinha de papel", etc.

FORMATO (responda APENAS este JSON, sem markdown):
{
  "paginas": [
    { "tipo": "objetivo",       "titulo": "...", "conteudo": { "texto": "...", "destaque": "..." } },
    { "tipo": "explicacao",     "titulo": "...", "conteudo": { "texto": "...", "bullets": ["...","...","..."] } },
    { "tipo": "exemplo",        "titulo": "...", "conteudo": { "texto": "...", "exemplos": [{"silaba":"...","palavra":"..."}, ...] } },
    { "tipo": "pratica_guiada", "titulo": "...", "conteudo": { "texto": "...", "passos": ["...","...","...","..."], "destaque": "..." } },
    { "tipo": "desafio",        "titulo": "...", "conteudo": { "texto": "...", "perguntas": [{"pergunta":"...","resposta":"..."}, ...] } },
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
