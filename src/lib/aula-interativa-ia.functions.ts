import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  area: z.string().min(1).max(40),
  semanaNumero: z.number().int().min(1).max(60),
  semanaTema: z.string().min(1).max(120),
  semanaDescricao: z.string().max(400).optional(),
  habilidadeNome: z.string().max(120).optional(),
  idade: z.number().int().min(3).max(18).optional(),
  serie: z.string().max(40).optional(),
  variacao: z.number().int().min(0).max(10).optional(),
});

const TelaSchema = z.object({
  tipo: z.enum(["exemplo", "pergunta", "completar", "arrasta"]),
  titulo: z.string().min(1).max(80),
  conteudo: z.string().min(1).max(140),
  emoji: z.string().max(4).optional(),
  alternativas: z.array(z.string().max(40)).max(4).optional(),
  resposta: z.string().max(60).optional(),
  dica: z.string().max(120).optional(),
});

const AulaSchema = z.object({
  titulo: z.string().min(1).max(80),
  telas: z.array(TelaSchema).min(3).max(6),
});

export type AulaInterativa = z.infer<typeof AulaSchema>;
export type TelaInterativa = z.infer<typeof TelaSchema>;

const SYSTEM = `Você é "Brilha", uma professora carinhosa que cria MICRO-AULAS interativas para crianças.

REGRAS ABSOLUTAS:
- POUCO TEXTO. Cada tela tem no máximo 1 frase curta de até 14 palavras.
- Use EXEMPLOS PRÁTICOS (palavras, objetos do dia a dia, emojis). NUNCA explicações longas.
- Gere de 4 a 6 telas, sempre nesta ordem: 1 "exemplo" curto → telas alternando "pergunta"/"completar"/"arrasta" → última tela "pergunta" de fechamento.
- Em "pergunta": forneça "alternativas" (2 a 4) e "resposta" exatamente igual a uma delas.
- Em "completar": "conteudo" tem _____ marcando a lacuna; "resposta" é só a palavra/sílaba que entra.
- Em "arrasta": "alternativas" são as opções para arrastar; "resposta" é a correta.
- "exemplo" não precisa de alternativas nem resposta.
- Use emojis no campo "emoji" (1 emoji por tela). Linguagem de criança da idade indicada.
- RESPONDA APENAS JSON VÁLIDO no formato: {"titulo":"...","telas":[...]}. Sem markdown, sem comentários.`;

function userPrompt(d: z.infer<typeof InputSchema>) {
  const idade = d.idade ? `${d.idade} anos` : "6-8 anos";
  const serie = d.serie ? ` (${d.serie})` : "";
  const hab = d.habilidadeNome ? `\nHabilidade do banco: ${d.habilidadeNome}` : "";
  const desc = d.semanaDescricao ? `\nFoco da semana: ${d.semanaDescricao}` : "";
  const variacao = d.variacao && d.variacao > 0
    ? `\nGere uma VARIAÇÃO ${d.variacao} desta aula com exemplos DIFERENTES dos anteriores.`
    : "";
  return `Área: ${d.area}
Semana ${d.semanaNumero} — Tema: ${d.semanaTema}${desc}${hab}
Aluno: ${idade}${serie}${variacao}

Gere a micro-aula interativa em JSON.`;
}

function parseAula(raw: string): AulaInterativa {
  let txt = raw.trim();
  if (txt.startsWith("```")) txt = txt.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  const parsed = JSON.parse(txt);
  return AulaSchema.parse(parsed);
}

export const gerarAulaInterativa = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", aula: null };
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
            { role: "user", content: userPrompt(data) },
          ],
          temperature: 0.8,
          max_tokens: 1200,
          response_format: { type: "json_object" },
        }),
      });
      if (!res.ok) {
        const errText = await res.text();
        console.error("[aula-interativa] HTTP", res.status, errText.slice(0, 300));
        return { ok: false as const, error: `Groq ${res.status}`, aula: null };
      }
      const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
      const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!raw) return { ok: false as const, error: "Resposta vazia", aula: null };
      const aula = parseAula(raw);
      return { ok: true as const, aula, error: null };
    } catch (e) {
      console.error("[aula-interativa]", e);
      return {
        ok: false as const,
        error: e instanceof Error ? e.message : "Falha ao gerar aula",
        aula: null,
      };
    }
  });
