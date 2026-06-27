import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const OptionSchema = z.object({
  text: z.string().min(1).max(160),
  isCorrect: z.boolean(),
  reason: z.string().min(8).max(320),
});

const LessonContentSchema = z.object({
  title: z.string().min(3).max(160),
  missao: z.object({
    studentObjective: z.string().min(20).max(260),
    contextEmoji: z.string().min(1).max(8),
    contextLine: z.string().min(15).max(220),
    whatYouWillDo: z.array(z.string().min(8).max(160)).min(3).max(5),
  }),
  exploracao: z.object({
    provokingQuestion: z.string().min(15).max(220),
    observation: z.string().min(30).max(520),
    pairs: z.array(z.object({ left: z.string().max(80), right: z.string().max(180) })).min(3).max(6),
  }),
  explicacao: z.object({
    conceito: z.string().min(120).max(900),
    passoAPasso: z.array(z.object({ step: z.string().max(110), detail: z.string().max(260) })).min(4).max(6),
    exemplo: z.string().min(60).max(420),
    aplicacao: z.string().min(40).max(260),
    resumo: z.string().min(35).max(240),
  }),
  exemplo: z.object({
    question: z.string().min(10).max(240),
    resolution: z.array(z.object({ line: z.string().min(8).max(240), note: z.string().max(24).optional() })).min(4).max(7),
    answer: z.string().min(1).max(220),
    why: z.string().min(20).max(360),
  }),
  guiada: z.object({
    prompt: z.string().min(10).max(260),
    options: z.array(OptionSchema).min(3).max(4),
    hint: z.string().min(15).max(260),
  }),
  atividade: z.object({
    items: z.array(z.object({ question: z.string().min(10).max(260), options: z.array(OptionSchema).min(3).max(4) })).min(2).max(4),
  }),
  desafio: z.object({
    contextualScenario: z.string().min(20).max(260),
    question: z.string().min(10).max(260),
    options: z.array(OptionSchema).min(3).max(4),
  }),
  resumo: z.object({
    format: z.enum(["mindmap", "table", "flow", "list", "timeline", "diagram"]),
    title: z.string().min(3).max(120),
    nodes: z.array(z.object({ label: z.string().max(80), detail: z.string().max(180).optional() })).min(3).max(7),
    takeaways: z.array(z.string().min(8).max(180)).min(3).max(5),
  }),
  dominio: z.object({
    recommendation: z.string().min(20).max(260),
  }),
});

const InputSchema = z.object({
  bnccCode: z.string().min(4).max(20),
  titulo: z.string().min(2).max(180),
  bnccObjective: z.string().max(1200).optional(),
  force: z.boolean().optional(),
});

type SubjectKey = "CI" | "MA" | "LP" | "HI" | "GE" | "LI" | "AR" | "EF" | "ER";

const SUBJECT_NAME: Record<SubjectKey, string> = {
  CI: "Ciências",
  MA: "Matemática",
  LP: "Língua Portuguesa",
  HI: "História",
  GE: "Geografia",
  LI: "Língua Inglesa",
  AR: "Arte",
  EF: "Educação Física",
  ER: "Ensino Religioso",
};

function subjectFromCode(code: string): SubjectKey {
  return (code.match(/^EF\d{2}(CI|MA|LP|HI|GE|LI|AR|EF|ER)/i)?.[1]?.toUpperCase() as SubjectKey) ?? "LP";
}

function gradeFromCode(code: string) {
  const m = code.match(/^EF0?([1-9])/i);
  return m ? `${m[1]}º Ano` : "Ensino Fundamental";
}

const SYSTEM = `Você é Professor Brilho, especialista em didática infantil e Fundamental I/II.

Gere uma AULA REAL de 9 telas no formato LessonV2. A BNCC é só objetivo oculto; a criança precisa receber ensino concreto.

PROIBIDO:
- texto genérico: "compreender", "praticar", "use no cotidiano", "vamos aprender de forma divertida";
- repetir o texto oficial da BNCC como explicação;
- perguntas sem resposta explicada;
- placeholders.

OBRIGATÓRIO:
- micro-habilidade concreta adequada ao título/código;
- explicação de professor, com passo a passo;
- exemplo resolvido completamente;
- atividade e desafio com opções, alternativa correta e razão de cada opção;
- matemática com números reais e cálculo; português com palavra/frase/texto real; humanas/ciências com caso real e comparação concreta.

Responda APENAS JSON válido com os campos: title, missao, exploracao, explicacao, exemplo, guiada, atividade, desafio, resumo, dominio.`;

function userPrompt(data: z.infer<typeof InputSchema>) {
  const subject = SUBJECT_NAME[subjectFromCode(data.bnccCode)];
  return `Código: ${data.bnccCode}
Série: ${gradeFromCode(data.bnccCode)}
Disciplina: ${subject}
Título da aula: ${data.titulo}
Objetivo oficial/base: ${data.bnccObjective || "não informado"}

Faça a aula completa ensinando um conteúdo específico, com exemplos resolvidos e exercícios corrigidos.`;
}

function extractJson(raw: string) {
  let txt = raw.trim();
  if (txt.startsWith("```")) txt = txt.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
  const first = txt.indexOf("{");
  const last = txt.lastIndexOf("}");
  if (first >= 0 && last > first) txt = txt.slice(first, last + 1);
  return JSON.parse(txt);
}

export const gerarLessonV2Escola = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) return { ok: false as const, error: "GROQ_API_KEY ausente", lesson: null };

    try {
      const subject = subjectFromCode(data.bnccCode);
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: SYSTEM },
            { role: "user", content: userPrompt(data) },
          ],
          temperature: 0.55,
          max_tokens: 5200,
          response_format: { type: "json_object" },
        }),
      });

      if (!res.ok) {
        const t = await res.text();
        console.error("[gerarLessonV2Escola] groq", res.status, t.slice(0, 300));
        return { ok: false as const, error: `Groq ${res.status}`, lesson: null };
      }

      const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
      const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!raw) return { ok: false as const, error: "Resposta vazia", lesson: null };

      const c = LessonContentSchema.parse(extractJson(raw));
      const lesson = {
        id: `ai:${data.bnccCode}`,
        title: c.title,
        discipline: SUBJECT_NAME[subject],
        grade: gradeFromCode(data.bnccCode),
        bnccCode: data.bnccCode,
        bnccObjective: data.bnccObjective || `Habilidade ${data.bnccCode}`,
        xp: 40,
        templateMeta: {
          slug: "groq-real-lesson",
          name: "Aula real gerada pelo Professor Brilho",
          disciplina: SUBJECT_NAME[subject],
          steps: [
            "Missão", "Exploração", "Explicação", "Exemplo", "Prática", "Treino", "Desafio", "Resumo", "Domínio",
          ].map((label, idx) => ({ n: idx + 1, label, applied: true, source: "groq" })),
        },
        screens: {
          missao: c.missao,
          exploracao: c.exploracao,
          explicacao: c.explicacao,
          exemplo: c.exemplo,
          guiada: c.guiada,
          atividade: c.atividade,
          desafio: c.desafio,
          resumo: c.resumo,
          dominio: {
            bnccCode: data.bnccCode,
            bnccObjective: data.bnccObjective || `Habilidade ${data.bnccCode}`,
            recommendation: c.dominio.recommendation,
          },
        },
      };

      try {
        const { createClient } = await import("@supabase/supabase-js");
        const admin = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
          auth: { persistSession: false, autoRefreshToken: false },
        });
        const { data: map } = await admin
          .from("bncc_template_map")
          .select("template_id")
          .eq("bncc_code", data.bnccCode)
          .order("priority", { ascending: false })
          .limit(1)
          .maybeSingle();
        if (map?.template_id) {
          await admin.from("pedagogical_lessons_cache").upsert(
            { bncc_code: data.bnccCode, template_id: map.template_id, version: 99, lesson },
            { onConflict: "bncc_code,template_id,version" },
          );
        }
      } catch (e) {
        console.warn("[gerarLessonV2Escola] cache skipped", e);
      }

      return { ok: true as const, error: null, lesson };
    } catch (e) {
      console.error("[gerarLessonV2Escola]", e);
      return { ok: false as const, error: e instanceof Error ? e.message : "Falha ao gerar aula", lesson: null };
    }
  });