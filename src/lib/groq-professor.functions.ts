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

export const gerarAulaGroq = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AulaInputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", aula: null };
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
          aula: null,
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!raw) {
        return { ok: false as const, error: "Resposta vazia", aula: null };
      }

      const aula = extractJson(raw) as Record<string, unknown>;
      return { ok: true as const, aula, error: null };
    } catch (e) {
      console.error("[groq:aula]", e);
      return {
        ok: false as const,
        error: e instanceof Error ? e.message : "Falha ao gerar aula",
        aula: null,
      };
    }
  });
