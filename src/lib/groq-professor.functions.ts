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
  label: s(1, 80),
  termoBusca: s(2, 80),
  explicacao: s(2, 360),
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
      texto: s(2, 800),
      termoBusca: s(2, 80),
      interativos: z.array(InteractiveItemSchema).min(2).max(5),
    }),
    explicacao: z.object({
      titulo: s(2, 80),
      paragrafos: z.array(s(2, 600)).min(2).max(6),
      termoBusca: s(2, 80),
    }),
    passoAPasso: z.object({
      titulo: s(2, 80),
      passos: z.array(s(2, 450)).min(2).max(8),
      termoBusca: s(2, 80),
    }),
    exemploAplicado: z.object({
      titulo: s(2, 80),
      enunciado: s(2, 500),
      resolucao: z.array(s(2, 400)).min(1).max(6),
      termoBusca: s(2, 80),
    }),
    atividadeGuiada: z.object({
      titulo: s(2, 80),
      pergunta: s(2, 500),
      dica: s(2, 300),
      opcoes: z.array(s(1, 200)).length(3),
      respostaCorreta: z.enum(["A", "B", "C"]),
      explicacaoResposta: s(2, 400),
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
    revisao: z.object({
      titulo: s(2, 80),
      pontosChave: z.array(s(2, 300)).min(3).max(6),
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
- A aula precisa ENSINAR de verdade: nada de repetir só a habilidade BNCC. Traga conceito, exemplo resolvido, prática guiada, desafio e revisão.
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
    "atividadeGuiada": { "titulo": "string", "pergunta": "string", "dica": "string", "opcoes": ["A) ...","B) ...","C) ..."], "respostaCorreta": "A", "explicacaoResposta": "string", "termoBusca": "english search" },
    "desafio": { "titulo": "string", "enunciado": "string", "opcoes": ["A) ...","B) ...","C) ..."], "respostaCorreta": "A", "explicacaoResposta": "string", "termoBusca": "english search" },
    "revisao": { "titulo": "string", "pontosChave": ["...","...","..."], "termoBusca": "english search" },
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

function shortTopic(text: string) {
  const clean = text.replace(/\s+/g, " ").trim();
  const first = clean.split(/[.!?]/)[0]?.trim() || clean;
  return first.length > 86 ? `${first.slice(0, 83).trim()}...` : first;
}

function fallbackImageTerm(componente?: string, descricao?: string) {
  const raw = `${componente ?? ""} ${descricao ?? ""}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (raw.includes("medic") || raw.includes("sintet")) return "medicine laboratory";
  if (raw.includes("celula")) return "microscope cells";
  if (raw.includes("clima") || raw.includes("oceano")) return "ocean climate";
  if (raw.includes("fra") || raw.includes("porcent") || raw.includes("equac")) return "math notebook";
  if (raw.includes("hist")) return "history museum";
  if (raw.includes("geo")) return "earth map";
  if (raw.includes("arte")) return "art classroom";
  return "students science classroom";
}

function buildFallbackAulaDinamica(data: z.infer<typeof AulaDinamicaInputSchema>): AulaDinamica {
  const topic = shortTopic(data.descricao);
  const term = fallbackImageTerm(data.componente, data.descricao);
  const disciplina = data.componente ?? "componente curricular";

  return {
    titulo: `Aula real: ${topic}`.slice(0, 120),
    metafora: `Vamos estudar ${topic} como um investigador: observar, entender, aplicar e testar com calma.`,
    telas: {
      missao: {
        titulo: "Missão do dia",
        texto: `Entender ${topic} com exemplo do cotidiano, imagem real e uma atividade curta.`,
        termoBusca: term,
      },
      exploracao: {
        titulo: "Observe antes de responder",
        texto: `Olhe a situação real. Em ${disciplina}, aprender começa quando percebemos detalhes e fazemos boas perguntas.`,
        termoBusca: term,
        interativos: [
          { label: "Observar", termoBusca: term, explicacao: "Veja detalhes: formas, nomes, relações e mudanças." },
          { label: "Comparar", termoBusca: "student comparing notes", explicacao: "Compare o que aparece na imagem com o que você já conhece." },
          { label: "Explicar", termoBusca: "teacher explaining board", explicacao: "Diga com suas palavras o que está acontecendo." },
        ],
      },
      explicacao: {
        titulo: "Explicação clara",
        paragrafos: [
          `${topic} é uma ideia da BNCC que ajuda a entender situações reais, não apenas decorar palavras.`,
          "Primeiro identificamos o assunto principal. Depois ligamos esse assunto a um exemplo concreto.",
          "Quando a criança vê, compara e explica, o conteúdo fica mais fácil de lembrar e usar.",
        ],
        termoBusca: term,
      },
      passoAPasso: {
        titulo: "Como pensar passo a passo",
        passos: [
          `Leia a pergunta e destaque: ${topic}.`,
          "Procure uma pista visual ou uma palavra importante no exemplo.",
          "Explique a relação entre a pista e o conceito estudado.",
          "Confira se sua resposta combina com a situação real apresentada.",
        ],
        termoBusca: "step by step learning",
      },
      exemploAplicado: {
        titulo: "Exemplo aplicado",
        enunciado: `Imagine uma aula sobre ${topic}. O professor mostra uma imagem real e pergunta: qual detalhe ajuda a entender o conceito?`,
        resolucao: [
          "1. Identifico o tema principal da habilidade.",
          "2. Observo a imagem e encontro uma pista concreta.",
          "3. Relaciono a pista com a explicação.",
          "Resposta: o detalhe importante é aquele que mostra o conceito funcionando na prática.",
        ],
        termoBusca: term,
      },
      atividadeGuiada: {
        titulo: "Prática guiada",
        pergunta: `Qual é o primeiro passo para estudar ${topic} com segurança?`,
        dica: "Comece pelo que você consegue ver ou localizar no exemplo.",
        opcoes: [
          "A) Observar o exemplo e procurar pistas importantes.",
          "B) Chutar uma resposta sem ler a situação.",
          "C) Decorar uma frase sem entender o sentido.",
        ],
        respostaCorreta: "A",
        explicacaoResposta: "Observar primeiro ajuda o cérebro a organizar a informação antes de responder.",
        termoBusca: "student observing lesson",
      },
      desafio: {
        titulo: "Desafio rápido",
        enunciado: `Depois de observar e explicar ${topic}, o que mostra que você realmente aprendeu?`,
        opcoes: [
          "A) Usar a ideia em um novo exemplo.",
          "B) Repetir palavras sem saber o que significam.",
          "C) Ignorar as pistas da atividade.",
        ],
        respostaCorreta: "A",
        explicacaoResposta: "Aprender de verdade é conseguir aplicar a ideia em outra situação.",
        termoBusca: "student solving challenge",
      },
      revisao: {
        titulo: "Revisão em 3 ideias",
        pontosChave: [
          `O tema central da aula é ${topic}.`,
          "Usamos imagem real, exemplo e prática para aprender melhor.",
          "A melhor resposta sempre liga observação, conceito e aplicação.",
        ],
        termoBusca: "student reviewing notes",
      },
      conclusao: {
        titulo: "Conclusão",
        mensagemFinal: "Você concluiu uma aula com observação, explicação, exemplo e desafio. Agora pode avançar para a próxima habilidade.",
        termoBusca: "happy student classroom",
      },
    },
  };
}

export const gerarAulaDinamica = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AulaDinamicaInputSchema.parse(input))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const supabaseUrl = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ??
      process.env.SUPABASE_PUBLISHABLE_KEY ??
      process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    if (!supabaseUrl || !supabaseKey) {
      return {
        ok: false as const,
        cached: false,
        error: "Configuração do backend ausente",
        aula: null,
      };
    }

    const supabaseServer = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const saveCache = async (aula: AulaDinamica, modelo: string) => {
      const { error: upErr } = await supabaseServer
        .from("aulas_geradas_ia")
        .upsert(
          {
            codigo_bncc: data.bnccCode,
            titulo: aula.titulo,
            screens: aula as unknown as Record<string, unknown>,
            modelo,
            disciplina: data.componente ?? null,
            ano: data.serie ?? `${data.idade ?? 9} anos`,
            aprovada: false,
            gerada_em: new Date().toISOString(),
          },
          { onConflict: "codigo_bncc" },
        );
      if (upErr) console.error("[groq:dinamica] upsert", upErr.message);
    };


    // 1) Cache lookup
    if (!data.force) {
      const { data: cached } = await supabaseServer
        .from("aulas_geradas_ia")
        .select("codigo_bncc, titulo, screens, modelo, versao, gerada_em")
        .eq("codigo_bncc", data.bnccCode)
        .maybeSingle();
      if (cached?.screens) {
        const cachedParsed = AulaDinamicaSchema.safeParse(cached.screens);
        if (cachedParsed.success) {
          return {
            ok: true as const,
            cached: true,
            aula: cachedParsed.data,
            error: null,
          };
        }
      }
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      const aula = buildFallbackAulaDinamica(data);
      await saveCache(aula, "fallback-sem-groq");
      return {
        ok: true as const,
        cached: false,
        error: null,
        aula,
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
            max_tokens: 4096,
            top_p: 0.9,
            response_format: { type: "json_object" },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:dinamica] HTTP", res.status, errText.slice(0, 400));
        throw new Error(`Groq ${res.status}: ${errText.slice(0, 160)}`);
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!raw) {
        throw new Error("Resposta vazia");
      }

      const aula = parseAulaDinamica(raw);

      // 2) Save cache (upsert by codigo_bncc)
      await saveCache(aula, "llama-3.1-8b-instant");

      return { ok: true as const, cached: false, aula, error: null };
    } catch (e) {
      console.error("[groq:dinamica]", e);
      const aula = buildFallbackAulaDinamica(data);
      await saveCache(aula, "fallback-pos-erro-groq");
      return {
        ok: true as const,
        cached: false,
        error: null,
        aula,
      };
    }
  });
