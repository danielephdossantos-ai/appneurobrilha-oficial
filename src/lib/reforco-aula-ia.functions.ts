import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  topic: z.string().trim().min(2).max(140),
  idade: z.number().int().min(3).max(18).optional(),
  serie: z.string().max(40).optional(),
});

const StepSchema = z.object({
  type: z.enum(["explanation", "example", "exercise", "tip", "premium_tip"]),
  text: z.string().min(12).max(700),
  difficulty: z.enum(["basic", "intermediate", "advanced"]).optional(),
  content: z
    .object({
      question: z.string().max(260).optional(),
      options: z.array(z.string().max(90)).max(4).optional(),
      answer: z.union([z.string(), z.number()]).optional(),
      explanation: z.string().max(420).optional(),
    })
    .optional(),
});

const ReforcoLessonSchema = z.object({
  title: z.string().min(3).max(120),
  topic: z.string().min(2).max(140),
  category: z.string().min(2).max(60),
  explanation: z.string().min(30).max(700),
  levels: z.object({
    basic: z.array(StepSchema).min(5).max(8),
    intermediate: z.array(StepSchema).min(5).max(8),
    advanced: z.array(StepSchema).min(4).max(8),
  }),
  premiumTips: z.array(z.string().min(10).max(260)).min(3).max(6),
  activityId: z.string().optional(),
});

const SYSTEM = `Você é Professor Brilho, um tutor pedagógico infantil.

Sua missão é gerar UMA AULA DE REFORÇO DE VERDADE, não texto genérico.

REGRAS ABSOLUTAS:
- Fale diretamente com a criança, não com pais.
- Explique passo a passo, como professor na lousa.
- Use exemplos reais do tema informado: contas reais, palavras reais, mini-textos reais, perguntas reais.
- Proibido escrever frases vagas: "vamos aprender", "use objetos do cotidiano", "pratique bastante", "conceitos fundamentais".
- Cada nível precisa ter: explicação concreta, exemplo resolvido, prática guiada, exercício com resposta, correção explicada.
- Em matemática: mostre cálculo e por que funciona.
- Em leitura/português: mostre letra/som/sílaba/palavra/frase ou mini-texto, conforme o tema.
- Em atenção/memória: transforme em exercício escolar concreto, não conselho.

FORMATO OBRIGATÓRIO: responda APENAS JSON válido com:
{
  "title": "...",
  "topic": "...",
  "category": "Matemática|Português|Alfabetização|Atenção|Geral",
  "explanation": "resumo concreto da aula",
  "levels": {
    "basic": [
      {"type":"explanation","text":"..."},
      {"type":"example","text":"..."},
      {"type":"exercise","text":"...","content":{"question":"...","options":["..."],"answer":"...","explanation":"..."}}
    ],
    "intermediate": [...],
    "advanced": [...]
  },
  "premiumTips": ["dica para a criança fazer agora", "..."]
}`;

function prompt(data: z.infer<typeof InputSchema>) {
  return `Tema pedido: ${data.topic}
Idade: ${data.idade ?? "não informada"}
Série: ${data.serie ?? "não informada"}

Gere a aula completa com conteúdo específico e atividades corrigidas.`;
}

function extractJson(raw: string) {
  let txt = raw.trim();
  if (txt.startsWith("```")) txt = txt.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
  const first = txt.indexOf("{");
  const last = txt.lastIndexOf("}");
  if (first >= 0 && last > first) txt = txt.slice(first, last + 1);
  return JSON.parse(txt);
}

export const gerarAulaReforco = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", lesson: null };
    }

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: SYSTEM },
            { role: "user", content: prompt(data) },
          ],
          temperature: 0.55,
          max_tokens: 4200,
          response_format: { type: "json_object" },
        }),
      });

      if (!res.ok) {
        const t = await res.text();
        console.error("[gerarAulaReforco] groq", res.status, t.slice(0, 300));
        return { ok: false as const, error: `Groq ${res.status}`, lesson: null };
      }

      const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
      const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!raw) return { ok: false as const, error: "Resposta vazia", lesson: null };
      const lesson = ReforcoLessonSchema.parse(extractJson(raw));
      return { ok: true as const, lesson, error: null };
    } catch (e) {
      console.error("[gerarAulaReforco]", e);
      return {
        ok: false as const,
        error: e instanceof Error ? e.message : "Falha ao gerar aula",
        lesson: null,
      };
    }
  });