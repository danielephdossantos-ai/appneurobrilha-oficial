import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["system", "user", "assistant"]),
  content: z.string().min(1).max(8000),
});

const InputSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(40),
  modulo: z.enum([
    "escola-brilha",
    "reforco-brilha",
    "jornada-365",
    "missao-prova",
    "missao-trabalho",
  ]),
  contexto: z.string().max(2000).optional(),
  crianca: z
    .object({
      nome: z.string().max(60).optional(),
      idade: z.number().int().min(2).max(18).optional(),
      serie: z.string().max(40).optional(),
      perfil: z.string().max(200).optional(),
    })
    .optional(),
});

const MODULE_PERSONA: Record<string, string> = {
  "escola-brilha":
    "Você está ajudando dentro do módulo Escola Brilha (aulas BNCC). Explique a habilidade em frases curtas, use exemplos visuais e proponha 1 desafio prático.",
  "reforco-brilha":
    "Você está no Reforço Brilho. Identifique a dificuldade da criança, reforce o conceito com analogia simples e ofereça 2-3 exercícios graduais.",
  "jornada-365":
    "Você está na Jornada 365 (rotina diária neurodivergente). Ajude com a tarefa do dia em passos curtíssimos, celebrando cada conquista.",
  "missao-prova":
    "Você está em Missão Prova. Aja como tutor de revisão: faça perguntas tipo prova, dê feedback imediato e dica de memorização.",
  "missao-trabalho":
    "Você está em Missão Trabalho. Ajude a planejar o trabalho escolar em etapas (pesquisa, esboço, escrita, revisão) sem fazer pela criança.",
};

function buildSystemPrompt(input: z.infer<typeof InputSchema>) {
  const persona = MODULE_PERSONA[input.modulo];
  const c = input.crianca;
  const childLine = c
    ? `Aluno: ${c.nome ?? "criança"}${c.idade ? `, ${c.idade} anos` : ""}${c.serie ? `, ${c.serie}` : ""}${c.perfil ? ` — perfil: ${c.perfil}` : ""}.`
    : "Aluno: criança brasileira em idade escolar.";
  const ctx = input.contexto ? `\nContexto da tela atual: ${input.contexto}` : "";
  return `Você é o Professor Brilho, tutor virtual do app Neuro Brilha Kids para crianças neurodivergentes (TDAH, TEA, dislexia, etc.).

REGRAS:
- Fale em português do Brasil, tom acolhedor, frases curtas (máx. 2 linhas por parágrafo).
- Sem jargão. Use emojis com moderação (1-2 por resposta).
- Nunca diga "não posso ajudar". Reformule em linguagem infantil.
- Se a pergunta sair do escopo escolar, traga gentilmente de volta.
- Acessibilidade: evite ironia, metáforas obscuras e textos longos.

${childLine}
${persona}${ctx}`;
}

type GroqMsg = { role: "system" | "user" | "assistant"; content: string };

export const askProfessorBrilho = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return {
        ok: false as const,
        error:
          "GROQ_API_KEY ausente. Adicione a chave nas Secrets do projeto.",
        reply: null as string | null,
      };
    }

    const messages: GroqMsg[] = [
      { role: "system", content: buildSystemPrompt(data) },
      ...data.messages,
    ];

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages,
            temperature: 0.6,
            max_tokens: 600,
            top_p: 0.9,
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq] HTTP", res.status, errText.slice(0, 400));
        return {
          ok: false as const,
          error: `Groq ${res.status}: ${errText.slice(0, 160)}`,
          reply: null,
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const reply = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!reply) {
        return { ok: false as const, error: "Resposta vazia", reply: null };
      }
      return { ok: true as const, reply, error: null };
    } catch (e) {
      console.error("[groq] fetch", e);
      return {
        ok: false as const,
        error: "Falha de rede ao chamar Groq",
        reply: null,
      };
    }
  });

// ============================================================
// PROFESSOR CONSTRUTOR DE AULAS — Escola Brilha (1º ao 9º ano)
// Gera JSON estruturado para as 9 telas do app a partir de BNCC.
// ============================================================

const AulaInputSchema = z.object({
  bnccCode: z.string().min(3).max(20),
  descricao: z.string().min(5).max(1200),
  idade: z.number().int().min(5).max(16),
  serie: z.string().max(20).optional(),
  componente: z.string().max(60).optional(),
});

const AULA_SYSTEM_PROMPT = `Você é um Designer Pedagógico e Professor especialista em Ensino Fundamental alinhado à BNCC. Sua missão é transformar um código de habilidade abstrato em uma aula viva, interativa e extremamente prática para crianças.

Você recebe [Código BNCC], [Descrição da Habilidade] e [Idade do Aluno] e gera a aula seguindo RIGIDAMENTE estas 4 partes:

1. INTRODUÇÃO VISUAL E LÚDICA: comece com uma metáfora do mundo real da criança (frações → fatias de pizza; história → máquina do tempo). Nunca teoria seca.
2. PASSO A PASSO da montagem do conceito/conta: visual e literal, em micro-passos numerados ("Primeiro coloque o número maior em cima...").
3. EXEMPLO PRÁTICO do dia a dia: um problema real e divertido onde a habilidade aparece.
4. DESAFIO DE FIXAÇÃO: 1 pergunta interativa baseada no exemplo, com 3 opções e a correta indicada.

REGRAS DE FORMATAÇÃO OBRIGATÓRIAS:
- Linguagem acolhedora, divertida, clara, adaptada à idade.
- Sem blocos gigantes de texto. Parágrafos curtos para tela de celular (máx. 2 linhas cada).
- Português do Brasil. Sem jargão acadêmico.
- Responda ESTRITAMENTE em JSON válido (sem markdown, sem \`\`\`), com este schema exato para preencher as 9 telas do app:

{
  "titulo": "string curto",
  "metafora": "string (1-2 frases ligando o conceito a algo do mundo real)",
  "telas": {
    "missao": { "titulo": "string", "texto": "string curto" },
    "exploracao": { "titulo": "string", "texto": "string", "imagemSugestao": "string" },
    "explicacao": { "titulo": "string", "paragrafos": ["string", "string", "string"] },
    "passoAPasso": { "titulo": "string", "passos": ["passo 1", "passo 2", "passo 3", "passo 4"] },
    "exemploAplicado": { "titulo": "string", "enunciado": "string", "resolucao": ["string", "string"] },
    "atividadeGuiada": { "titulo": "string", "pergunta": "string", "dica": "string" },
    "desafio": {
      "titulo": "string",
      "enunciado": "string",
      "opcoes": ["A) ...", "B) ...", "C) ..."],
      "respostaCorreta": "A" | "B" | "C",
      "explicacaoResposta": "string"
    },
    "revisao": { "titulo": "string", "pontosChave": ["string", "string", "string"] },
    "conclusao": { "titulo": "string", "mensagemFinal": "string" }
  }
}

Não inclua nenhum texto fora do JSON. Não use crase nem markdown.`;

const s = (min = 1, max = 600) => z.string().trim().min(min).max(max);

export const AulaSchema = z.object({
  titulo: s(2, 120),
  metafora: s(5, 400),
  telas: z.object({
    missao: z.object({ titulo: s(2, 80), texto: s(2, 400) }),
    exploracao: z.object({
      titulo: s(2, 80),
      texto: s(2, 600),
      imagemSugestao: s(2, 200),
    }),
    explicacao: z.object({
      titulo: s(2, 80),
      paragrafos: z.array(s(2, 400)).min(2).max(6),
    }),
    passoAPasso: z.object({
      titulo: s(2, 80),
      passos: z.array(s(2, 300)).min(2).max(8),
    }),
    exemploAplicado: z.object({
      titulo: s(2, 80),
      enunciado: s(2, 500),
      resolucao: z.array(s(2, 400)).min(1).max(6),
    }),
    atividadeGuiada: z.object({
      titulo: s(2, 80),
      pergunta: s(2, 400),
      dica: s(2, 300),
    }),
    desafio: z.object({
      titulo: s(2, 80),
      enunciado: s(2, 500),
      opcoes: z.array(s(1, 200)).length(3),
      respostaCorreta: z.enum(["A", "B", "C"]),
      explicacaoResposta: s(2, 400),
    }),
    revisao: z.object({
      titulo: s(2, 80),
      pontosChave: z.array(s(2, 300)).min(2).max(6),
    }),
    conclusao: z.object({
      titulo: s(2, 80),
      mensagemFinal: s(2, 400),
    }),
  }),
});

export type Aula = z.infer<typeof AulaSchema>;

function extractJson(raw: string): unknown {
  let cleaned = raw.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();
  const start = cleaned.search(/[{[]/);
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("JSON não encontrado");
  cleaned = cleaned.substring(start, end + 1);
  try {
    return JSON.parse(cleaned);
  } catch {
    cleaned = cleaned
      .replace(/,\s*}/g, "}")
      .replace(/,\s*]/g, "]")
      .replace(/[\x00-\x1F\x7F]/g, "");
    return JSON.parse(cleaned);
  }
}

function parseAndValidateAula(raw: string): Aula {
  const parsed = extractJson(raw);
  const result = AulaSchema.safeParse(parsed);
  if (!result.success) {
    const issues = result.error.issues
      .slice(0, 3)
      .map((i) => `${i.path.join(".")}: ${i.message}`)
      .join(" | ");
    throw new Error(`Schema inválido: ${issues}`);
  }
  return result.data;
}


export const gerarAulaGroq = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AulaInputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", aulaJson: null };
    }

    const userPrompt = `Código BNCC: ${data.bnccCode}
Descrição da Habilidade: ${data.descricao}
Idade do Aluno: ${data.idade} anos${data.serie ? `\nSérie: ${data.serie}` : ""}${data.componente ? `\nComponente: ${data.componente}` : ""}

Gere a aula completa em JSON conforme o schema definido.`;

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: AULA_SYSTEM_PROMPT },
              { role: "user", content: userPrompt },
            ],
            temperature: 0.7,
            max_tokens: 2400,
            top_p: 0.9,
            response_format: { type: "json_object" },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:aula] HTTP", res.status, errText.slice(0, 400));
        return {
          ok: false as const,
          error: `Groq ${res.status}: ${errText.slice(0, 160)}`,
          aulaJson: null,
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!raw) {
        return { ok: false as const, error: "Resposta vazia", aulaJson: null };
      }

      const aula = parseAndValidateAula(raw);
      return { ok: true as const, aulaJson: JSON.stringify(aula), error: null };
    } catch (e) {
      console.error("[groq:aula]", e);
      return {
        ok: false as const,
        error: e instanceof Error ? e.message : "Falha ao gerar aula",
        aulaJson: null,
      };
    }
  });

// ============================================================
// AULA DINÂMICA — Groq llama-3.1-8b-instant + cache Supabase
// Gera aula a partir de um código BNCC, com termos de busca de
// imagens por tela e elementos interativos. Cacheia em
// public.aulas_geradas_ia para não regenerar de graça.
// ============================================================

const AulaDinamicaInputSchema = z.object({
  bnccCode: z.string().trim().min(3).max(20),
  descricao: z.string().trim().min(5).max(1200),
  idade: z.number().int().min(5).max(16).optional(),
  serie: z.string().max(20).optional(),
  componente: z.string().max(60).optional(),
  force: z.boolean().optional(),
});

const InteractiveItemSchema = z.object({
  label: s(1, 40),
  termoBusca: s(2, 80),
  explicacao: s(2, 240),
});

export const AulaDinamicaSchema = z.object({
  titulo: s(2, 120),
  metafora: s(5, 400),
  telas: z.object({
    missao: z.object({
      titulo: s(2, 80),
      texto: s(2, 400),
      termoBusca: s(2, 80),
    }),
    exploracao: z.object({
      titulo: s(2, 80),
      texto: s(2, 600),
      termoBusca: s(2, 80),
      interativos: z.array(InteractiveItemSchema).min(2).max(5),
    }),
    explicacao: z.object({
      titulo: s(2, 80),
      paragrafos: z.array(s(2, 400)).min(2).max(6),
      termoBusca: s(2, 80),
    }),
    passoAPasso: z.object({
      titulo: s(2, 80),
      passos: z.array(s(2, 300)).min(2).max(8),
      termoBusca: s(2, 80),
    }),
    exemploAplicado: z.object({
      titulo: s(2, 80),
      enunciado: s(2, 500),
      resolucao: z.array(s(2, 400)).min(1).max(6),
      termoBusca: s(2, 80),
    }),
    desafio: z.object({
      titulo: s(2, 80),
      enunciado: s(2, 500),
      opcoes: z.array(s(1, 200)).length(3),
      respostaCorreta: z.enum(["A", "B", "C"]),
      explicacaoResposta: s(2, 400),
      termoBusca: s(2, 80),
    }),
    conclusao: z.object({
      titulo: s(2, 80),
      mensagemFinal: s(2, 400),
      termoBusca: s(2, 80),
    }),
  }),
});

export type AulaDinamica = z.infer<typeof AulaDinamicaSchema>;

const AULA_DINAMICA_PROMPT = `Você é Designer Pedagógico BNCC. Recebe [Código BNCC], [Descrição da Habilidade] e [Idade]. Gere uma aula viva para crianças neurodivergentes brasileiras.

REGRAS:
- Linguagem PT-BR acolhedora, frases curtas (máx 2 linhas).
- Metáfora do mundo real (frações = pizza, etc.).
- Cada tela traz um "termoBusca" em INGLÊS simples (1-4 palavras) para buscar imagem ilustrativa (ex.: "red apple", "pizza slices", "ancient egypt").
- "interativos" da tela exploracao: 2 a 5 elementos clicáveis. Cada um com label PT-BR (palavra curta), termoBusca em inglês simples (objeto único), e explicação curta que aparece ao clicar.
- Desafio: 3 opções (A/B/C), respostaCorreta sendo "A", "B" ou "C".
- Responda ESTRITAMENTE JSON válido (sem markdown, sem crase) com este schema:

{
  "titulo": "string",
  "metafora": "string",
  "telas": {
    "missao": { "titulo": "string", "texto": "string", "termoBusca": "english search" },
    "exploracao": {
      "titulo": "string", "texto": "string", "termoBusca": "english search",
      "interativos": [
        { "label": "Maçã", "termoBusca": "red apple", "explicacao": "..." }
      ]
    },
    "explicacao": { "titulo": "string", "paragrafos": ["...","..."], "termoBusca": "english search" },
    "passoAPasso": { "titulo": "string", "passos": ["...","..."], "termoBusca": "english search" },
    "exemploAplicado": { "titulo": "string", "enunciado": "string", "resolucao": ["...","..."], "termoBusca": "english search" },
    "desafio": { "titulo": "string", "enunciado": "string", "opcoes": ["A) ...","B) ...","C) ..."], "respostaCorreta": "A", "explicacaoResposta": "string", "termoBusca": "english search" },
    "conclusao": { "titulo": "string", "mensagemFinal": "string", "termoBusca": "english search" }
  }
}`;

function parseAulaDinamica(raw: string): AulaDinamica {
  const parsed = extractJson(raw);
  const r = AulaDinamicaSchema.safeParse(parsed);
  if (!r.success) {
    const issues = r.error.issues
      .slice(0, 3)
      .map((i) => `${i.path.join(".")}: ${i.message}`)
      .join(" | ");
    throw new Error(`Schema inválido: ${issues}`);
  }
  return r.data;
}

export const gerarAulaDinamica = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AulaDinamicaInputSchema.parse(input))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );


    // 1) Cache lookup
    if (!data.force) {
      const { data: cached } = await supabaseAdmin
        .from("aulas_geradas_ia")
        .select("codigo_bncc, titulo, screens, modelo, versao, gerada_em")
        .eq("codigo_bncc", data.bnccCode)
        .maybeSingle();
      if (cached?.screens) {
        return {
          ok: true as const,
          cached: true,
          aula: cached.screens as unknown as AulaDinamica,
          error: null,
        };
      }
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return {
        ok: false as const,
        cached: false,
        error: "GROQ_API_KEY ausente",
        aula: null,
      };
    }

    const userPrompt = `Código BNCC: ${data.bnccCode}
Descrição: ${data.descricao}
Idade: ${data.idade ?? 9} anos${data.serie ? `\nSérie: ${data.serie}` : ""}${data.componente ? `\nComponente: ${data.componente}` : ""}

Gere a aula JSON completa.`;

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              { role: "system", content: AULA_DINAMICA_PROMPT },
              { role: "user", content: userPrompt },
            ],
            temperature: 0.7,
            max_tokens: 2400,
            top_p: 0.9,
            response_format: { type: "json_object" },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:dinamica] HTTP", res.status, errText.slice(0, 400));
        return {
          ok: false as const,
          cached: false,
          error: `Groq ${res.status}: ${errText.slice(0, 160)}`,
          aula: null,
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!raw) {
        return {
          ok: false as const,
          cached: false,
          error: "Resposta vazia",
          aula: null,
        };
      }

      const aula = parseAulaDinamica(raw);

      // 2) Save cache (upsert by codigo_bncc)
      const { error: upErr } = await supabaseAdmin
        .from("aulas_geradas_ia")
        .upsert(
          {
            codigo_bncc: data.bnccCode,
            titulo: aula.titulo,
            screens: aula as unknown as Record<string, unknown>,
            modelo: "llama-3.1-8b-instant",
            disciplina: data.componente ?? null,
            ano: data.serie ?? null,
            aprovada: false,
            gerada_em: new Date().toISOString(),
          },
          { onConflict: "codigo_bncc" },
        );
      if (upErr) console.error("[groq:dinamica] upsert", upErr.message);

      return { ok: true as const, cached: false, aula, error: null };
    } catch (e) {
      console.error("[groq:dinamica]", e);
      return {
        ok: false as const,
        cached: false,
        error: e instanceof Error ? e.message : "Falha ao gerar aula",
        aula: null,
      };
    }
  });

// ============================================================
// EXPLICAR ERRO — Professor Brilho dentro das atividades.
// Só roda quando a criança erra. Gera explicação curta,
// fofa e pedagógica, sem entregar a resposta de bandeja.
// ============================================================

const ExplicarErroSchema = z.object({
  pergunta: z.string().trim().min(2).max(800),
  gabarito: z.string().trim().min(1).max(400),
  respostaErrada: z.string().trim().min(1).max(400),
  bnccCode: z.string().max(20).optional(),
  idade: z.number().int().min(5).max(16).optional(),
  modulo: z
    .enum([
      "escola-brilha",
      "reforco-brilha",
      "jornada-365",
      "missao-prova",
      "missao-trabalho",
    ])
    .optional(),
});

const EXPLICAR_ERRO_SYSTEM = `Você é o Professor Brilho, tutor virtual para crianças neurodivergentes no app Neuro Brilha Kids.

Sua única função aqui: a criança ERROU uma questão. Você deve explicar por que a resposta dela está incorreta, de forma fofa e pedagógica.

REGRAS RÍGIDAS:
- NUNCA entregue a resposta certa de bandeja. Dê DICAS para a criança raciocinar e chegar sozinha à conclusão.
- Máximo 3 frases. Português do Brasil, tom acolhedor, frases curtas.
- Comece reconhecendo o esforço ("Boa tentativa!", "Quase lá!").
- Explique de forma simples o equívoco no raciocínio dela.
- Termine com 1 dica de estudo concreta para revisar o conceito.
- 1 emoji no máximo. Sem markdown, sem listas.`;

export const explicarErroAtividade = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ExplicarErroSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", reply: null };
    }

    const userPrompt = `A questão era: ${data.pergunta}
A resposta certa era: ${data.gabarito}
O aluno marcou: ${data.respostaErrada}${data.bnccCode ? `\nHabilidade BNCC: ${data.bnccCode}` : ""}${data.idade ? `\nIdade do aluno: ${data.idade} anos` : ""}

Explique de forma fofa e pedagógica por que a resposta dele está incorreta e dê uma dica de estudo. Lembre: não entregue o gabarito de bandeja, guie o raciocínio.`;

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: EXPLICAR_ERRO_SYSTEM },
              { role: "user", content: userPrompt },
            ],
            temperature: 0.6,
            max_tokens: 240,
            top_p: 0.9,
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:erro] HTTP", res.status, errText.slice(0, 300));
        return {
          ok: false as const,
          error: `Groq ${res.status}`,
          reply: null,
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const reply = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!reply) {
        return { ok: false as const, error: "Resposta vazia", reply: null };
      }
      return { ok: true as const, reply, error: null };
    } catch (e) {
      console.error("[groq:erro]", e);
      return {
        ok: false as const,
        error: "Falha de rede ao chamar Groq",
        reply: null,
      };
    }
  });


// ============================================================
// QUIZ MISSÃO PROVA — gera mini-simulado (3 questões objetivas)
// sobre o tópico que a criança acabou de estudar. Usado pelo
// componente MissaoProvaQuiz; o feedback de erro fica a cargo
// do ProfessorBrilhaErroExplainer.
// ============================================================

const QuizInputSchema = z.object({
  topico: z.string().trim().min(2).max(300),
  materia: z.string().trim().min(2).max(80),
  idade: z.number().int().min(5).max(16).optional(),
  bnccCode: z.string().max(20).optional(),
});

const QuizQuestionSchema = z.object({
  pergunta: z.string().min(3).max(400),
  alternativas: z.array(z.string().min(1).max(200)).min(3).max(4),
  correta: z.number().int().min(0).max(3),
});

const QuizSchema = z.object({
  questoes: z.array(QuizQuestionSchema).min(2).max(4),
});

export type QuizQuestion = z.infer<typeof QuizQuestionSchema>;

const QUIZ_SYSTEM = `Você gera mini-simulados curtos para crianças neurodivergentes em revisão de prova.

REGRAS:
- Sempre responda APENAS com JSON válido no formato:
  {"questoes":[{"pergunta":"...","alternativas":["A","B","C","D"],"correta":0}, ...]}
- Exatamente 3 questões objetivas, 4 alternativas cada.
- Português do Brasil, frases curtas, vocabulário adequado à idade.
- Cada questão deve ter UMA única alternativa correta clara.
- Não inclua explicações, markdown, comentários — só o JSON.`;

function tryExtractJson(raw: string): unknown {
  const cleaned = raw
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/i, "")
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const m = cleaned.match(/\{[\s\S]*\}/);
    if (m) {
      try {
        return JSON.parse(m[0]);
      } catch {
        return null;
      }
    }
    return null;
  }
}

export const gerarQuizMissaoProva = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => QuizInputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", quiz: null };
    }

    const userPrompt = `Tópico: ${data.topico}
Matéria: ${data.materia}${data.idade ? `\nIdade do aluno: ${data.idade} anos` : ""}${data.bnccCode ? `\nHabilidade BNCC: ${data.bnccCode}` : ""}

Gere 3 questões objetivas de revisão (4 alternativas, 1 correta).`;

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: QUIZ_SYSTEM },
              { role: "user", content: userPrompt },
            ],
            temperature: 0.4,
            max_tokens: 900,
            response_format: { type: "json_object" },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:quiz] HTTP", res.status, errText.slice(0, 300));
        return { ok: false as const, error: `Groq ${res.status}`, quiz: null };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const raw = json.choices?.[0]?.message?.content ?? "";
      const parsed = tryExtractJson(raw);
      const safe = QuizSchema.safeParse(parsed);
      if (!safe.success) {
        console.error("[groq:quiz] JSON inválido", safe.error.message);
        return { ok: false as const, error: "JSON inválido", quiz: null };
      }
      return { ok: true as const, quiz: safe.data, error: null };
    } catch (e) {
      console.error("[groq:quiz]", e);
      return { ok: false as const, error: "Falha de rede", quiz: null };
    }
  });

// ============================================================
// PLANO DE ESTUDOS MISSÃO PROVA — gera sessões diárias até a
// data da prova. Aceita opcionalmente uma FOTO do material
// escolar (caderno, livro, lista) para personalizar o plano.
// ============================================================

const PlanoEstudosInputSchema = z.object({
  materia: z.string().trim().min(2).max(80),
  dataProva: z.string().trim().min(8).max(12), // YYYY-MM-DD
  diasAteProva: z.number().int().min(1).max(60),
  conteudos: z.array(z.string().min(1).max(160)).max(20).optional(),
  observacoes: z.string().max(800).optional(),
  idade: z.number().int().min(5).max(16).optional(),
  serie: z.string().max(20).optional(),
  fotoBase64: z.string().max(8_000_000).optional(), // data URL ou base64 puro
});

const SessaoSchema = z.object({
  scheduled_date: z.string().min(8).max(12),
  title: z.string().min(2).max(120),
  description: z.string().min(2).max(800),
});

const PlanoSchema = z.object({
  resumoMaterial: z.string().max(600).optional(),
  sessoes: z.array(SessaoSchema).min(1).max(20),
});

export type SessaoEstudo = z.infer<typeof SessaoSchema>;

const PLANO_SYSTEM = `Você é um tutor pedagógico especialista em crianças neurodivergentes brasileiras. Sua missão: gerar um plano de estudos diário e realista até a data da prova.

REGRAS:
- Distribua o conteúdo em sessões curtas (20-40 min cada), uma por dia, começando AMANHÃ até o dia ANTERIOR à prova.
- Sempre responda APENAS com JSON válido neste schema EXATO:
  {"resumoMaterial":"...","sessoes":[{"scheduled_date":"YYYY-MM-DD","title":"...","description":"..."}]}
- Se receber uma FOTO de caderno/livro/lista, leia o conteúdo da imagem e use ESSES tópicos para montar o plano (citando o que viu).
- title curto (ex: "Estudo: Frações - parte 1"). description com 1-3 frases: o que revisar + uma dica prática (mapa mental, flashcard, exemplo do dia a dia).
- Português do Brasil, vocabulário adequado à idade.
- Não inclua markdown, comentários ou texto fora do JSON.`;

export const gerarPlanoEstudosMissaoProva = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => PlanoEstudosInputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", plano: null };
    }

    const hasImage = !!data.fotoBase64;
    const imageUrl = hasImage
      ? data.fotoBase64!.startsWith("data:")
        ? data.fotoBase64!
        : `data:image/jpeg;base64,${data.fotoBase64}`
      : null;

    const textPrompt = `Matéria: ${data.materia}
Data da prova: ${data.dataProva}
Dias disponíveis até a prova: ${data.diasAteProva}${data.idade ? `\nIdade do aluno: ${data.idade} anos` : ""}${data.serie ? `\nSérie: ${data.serie}` : ""}
Conteúdos informados pela família: ${data.conteudos?.length ? data.conteudos.join(", ") : "(não informados — extraia da foto ou da matéria)"}
Observações: ${data.observacoes || "(nenhuma)"}

${hasImage ? "Leia a FOTO do material escolar anexada e use o conteúdo que aparece nela para montar o plano." : ""}
Gere o plano de estudos JSON (uma sessão por dia, até a véspera da prova).`;

    const userContent: unknown = hasImage
      ? [
          { type: "text", text: textPrompt },
          { type: "image_url", image_url: { url: imageUrl } },
        ]
      : textPrompt;

    const model = hasImage
      ? "meta-llama/llama-4-scout-17b-16e-instruct"
      : "llama-3.3-70b-versatile";

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: PLANO_SYSTEM },
              { role: "user", content: userContent },
            ],
            temperature: 0.4,
            max_tokens: 1800,
            response_format: { type: "json_object" },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:plano] HTTP", res.status, errText.slice(0, 400));
        return {
          ok: false as const,
          error: `Groq ${res.status}: ${errText.slice(0, 160)}`,
          plano: null,
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const raw = json.choices?.[0]?.message?.content ?? "";
      const parsed = tryExtractJson(raw);
      const safe = PlanoSchema.safeParse(parsed);
      if (!safe.success) {
        console.error("[groq:plano] JSON inválido", safe.error.message);
        return { ok: false as const, error: "JSON inválido da IA", plano: null };
      }
      return { ok: true as const, plano: safe.data, error: null };
    } catch (e) {
      console.error("[groq:plano]", e);
      return {
        ok: false as const,
        error: e instanceof Error ? e.message : "Falha de rede",
        plano: null,
      };
    }
  });
