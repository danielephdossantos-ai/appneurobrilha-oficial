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
