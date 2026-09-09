import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(4000),
});

const ContextoSchema = z.object({
  cursoSlug: z.string().min(1).max(120),
  aulaSlug: z.string().min(1).max(120),
  aulaTitulo: z.string().max(200).optional(),
  serie: z.string().max(40).optional(), // ex "1º", "6º"
  unitLabel: z.string().max(200).optional(),
  vocab: z.array(z.string().max(80)).max(40).optional(),
});

const InputSchema = z.object({
  contexto: ContextoSchema,
  mensagem: z.string().min(1).max(1500),
  historico: z.array(MessageSchema).max(40).optional(),
});

type ProfIngResult =
  | { ok: true; resposta: string; traducao?: string }
  | { ok: false; motivo: "creditos" | "limite" | "erro"; mensagem: string };

function inferGrade(serie?: string): number {
  if (!serie) return 3;
  const m = serie.match(/(\d+)/);
  if (!m) return 3;
  return Math.min(9, Math.max(1, parseInt(m[1], 10)));
}

function levelProfile(grade: number): {
  cefr: string;
  ratio: string;
  sentenceRule: string;
  tone: string;
} {
  if (grade <= 2) {
    return {
      cefr: "Pre-A1",
      ratio: "70% Portuguese, 30% very simple English",
      sentenceRule: "Use 3-5 word English phrases only. Repeat key words. Always translate right after.",
      tone: "warm, playful, big smile in your words, like talking to a 6-7 year old",
    };
  }
  if (grade <= 5) {
    return {
      cefr: "A1",
      ratio: "40% Portuguese scaffolding, 60% simple English",
      sentenceRule: "Short English sentences (max 8 words). Give a Portuguese hint in parentheses when a word may be new.",
      tone: "friendly, encouraging, like a kind teacher of a 9-10 year old",
    };
  }
  if (grade <= 7) {
    return {
      cefr: "A2",
      ratio: "80% English, Portuguese only for clarifying hard bits",
      sentenceRule: "Everyday English. Break long ideas in two. Translate new words in parentheses.",
      tone: "cool but caring teen mentor",
    };
  }
  return {
    cefr: "B1",
    ratio: "95% English",
    sentenceRule: "Natural English. Use Portuguese only if the student clearly doesn't understand, or if they write in Portuguese first.",
    tone: "conversational, respectful, like a real B1 conversation partner",
  };
}

function systemPrompt(ctx: z.infer<typeof ContextoSchema>): string {
  const grade = inferGrade(ctx.serie);
  const lv = levelProfile(grade);
  const vocab = ctx.vocab?.length ? ctx.vocab.slice(0, 20).join(", ") : "";
  return `You are "Teacher Brilha", a real English teacher inside the Escola Brilha app.
You are talking LIVE with a Brazilian student. Your #1 job: make them ACTUALLY SPEAK and understand English, not just read explanations.

CURRENT LESSON:
- Grade: ${ctx.serie ?? "unknown"} (target CEFR: ${lv.cefr})
- Unit: ${ctx.unitLabel ?? ctx.aulaTitulo ?? ctx.aulaSlug}
${vocab ? `- Key vocabulary being practiced: ${vocab}` : ""}

LEVEL RULES (obey strictly):
- Language mix: ${lv.ratio}
- Sentences: ${lv.sentenceRule}
- Tone: ${lv.tone}

TEACHING BEHAVIOR:
1. ALWAYS keep the conversation going. Ask ONE small question at the end of every reply so the student has to answer in English.
2. If the student writes in Portuguese, gently show how to say the same thing in English, then ask them to repeat in English.
3. If the student makes a mistake, DO NOT just say "wrong". Show the correct version like this:
   ✅ "I like pizza." (not "I likes pizza")
   Then explain WHY in one short line (in Portuguese if grade ≤ 5, in English otherwise).
4. When you introduce a new English word or phrase, put a short Portuguese translation in parentheses on the SAME line — e.g. "How are you? (Como você está?)".
5. Never give the answer to a lesson activity for free. Guide with hints and examples.
6. Keep replies SHORT: 2-4 sentences max. If more is needed, ask a follow-up question instead.
7. Emojis: at most 1 per reply. No markdown headings, no bullet lists longer than 3 items.
8. If the student says "translate X" or "o que significa X" or "como se diz X", answer directly and then ask them to use it in a sentence.

Respond ONLY as plain text of what the teacher says out loud. No JSON, no stage directions.`;
}

export const professorInglesChat = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<ProfIngResult> => {
    if (!process.env.GROQ_API_KEY && !process.env.LOVABLE_API_KEY) {
      return {
        ok: false,
        motivo: "erro",
        mensagem: "Teacher Brilha isn't configured yet. Tell a grown-up.",
      };
    }

    const { contexto, mensagem, historico } = data;
    const system = systemPrompt(contexto);
    const historicoCurto = (historico ?? []).slice(-20);
    const messages = [
      { role: "system" as const, content: system },
      ...historicoCurto,
      { role: "user" as const, content: mensagem },
    ];

    const { chatCompletionFallback } = await import("./ai-chat-fallback");
    const result = await chatCompletionFallback({
      messages,
      max_tokens: 400,
      temperature: 0.7,
      label: "professor-ingles",
    });

    if (!result.ok) {
      if (result.motivo === "creditos") {
        return {
          ok: false,
          motivo: "creditos",
          mensagem:
            "My English credits are gone for today 🌙 Tell a grown-up. Keep practicing in the lesson!",
        };
      }
      if (result.motivo === "limite") {
        return {
          ok: false,
          motivo: "limite",
          mensagem: "Too many questions at once 😅 Wait a minute and ask me again!",
        };
      }
      return {
        ok: false,
        motivo: "erro",
        mensagem: "Oops, I froze for a second. Try again!",
      };
    }

    return { ok: true, resposta: result.text };
  });

const TranslateSchema = z.object({
  texto: z.string().min(1).max(2000),
  para: z.enum(["pt", "en"]).default("pt"),
});

export const traduzirProfessorIngles = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => TranslateSchema.parse(input))
  .handler(async ({ data }) => {
    if (!process.env.GROQ_API_KEY && !process.env.LOVABLE_API_KEY) {
      return { ok: false as const, texto: "" };
    }
    const alvo = data.para === "pt" ? "Portuguese (pt-BR)" : "English";
    const { chatCompletionFallback } = await import("./ai-chat-fallback");
    const r = await chatCompletionFallback({
      messages: [
        {
          role: "system",
          content: `Translate the user's message to ${alvo}. Return ONLY the translation, no quotes, no notes.`,
        },
        { role: "user", content: data.texto },
      ],
      max_tokens: 400,
      temperature: 0.2,
      label: "professor-ingles-translate",
    });
    if (!r.ok) return { ok: false as const, texto: "" };
    return { ok: true as const, texto: r.text.trim() };
  });
