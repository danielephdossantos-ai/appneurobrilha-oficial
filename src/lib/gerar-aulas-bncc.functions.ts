import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  codes: z.array(z.string().regex(/^EF06[A-Z]{2}\d{2}$/)).min(1).max(10),
  description_by_code: z.record(z.string(), z.string().min(5).max(500)),
  force: z.boolean().optional(),
});

type CodeResult =
  | { code: string; ok: true; aulaId: string; titulo: string }
  | { code: string; ok: false; motivo: string };

const DISCIPLINA_BY_PREFIX: Record<string, { disciplina: string; area: string }> = {
  LP: { disciplina: "Português", area: "linguagens" },
  MA: { disciplina: "Matemática", area: "matematica" },
  CI: { disciplina: "Ciências", area: "ciencias_natureza" },
  HI: { disciplina: "História", area: "ciencias_humanas" },
  GE: { disciplina: "Geografia", area: "ciencias_humanas" },
};

function discFor(code: string) {
  const prefix = code.slice(4, 6);
  return DISCIPLINA_BY_PREFIX[prefix] ?? { disciplina: "Outros", area: "linguagens" };
}

const SYSTEM_PROMPT = `Você é um(a) professor(a) experiente da BNCC criando uma AULA COMPLETA E REAL para um(a) aluno(a) do 6º Ano. NÃO use o código BNCC como conteúdo — use-o apenas como referência. A aula deve ensinar o TEMA de verdade, com fatos, exemplos concretos e linguagem de criança de 11 anos.

Responda SOMENTE com um JSON válido no formato exato abaixo (sem markdown, sem comentários):

{
  "titulo": "Nome curto e atrativo da aula (3-6 palavras, sem o código BNCC)",
  "missao": {
    "intro": "1 frase convidando: 'Hoje vamos descobrir...'",
    "context_emoji": "1 emoji do tema",
    "context_text": "2-3 frases explicando por que esse tema é interessante e onde aparece na vida real",
    "objectives": ["objetivo 1 específico", "objetivo 2 específico", "objetivo 3 específico"]
  },
  "exploracao": {
    "instruction": "Vamos explorar:",
    "texto": "Explicação real do conteúdo em 4-6 frases. Use exemplos concretos. NÃO repita a descrição BNCC literal. Mínimo 200 caracteres.",
    "pontos_destaque": [
      {"emoji": "💡", "text": "Fato/conceito específico do tema (1 frase)"},
      {"emoji": "🔎", "text": "Outro fato/dica específica do tema (1 frase)"},
      {"emoji": "✨", "text": "Curiosidade real sobre o tema (1 frase)"}
    ],
    "mascot_tip": "Dica curta de estudo (1 frase)"
  },
  "pontos_chave": {
    "intro": "Pontos importantes da aula:",
    "points": [
      {"icon": "📌", "title": "Conceito-chave 1 (palavra-tema, NÃO código)", "text": "Explicação curta do conceito"},
      {"icon": "🧠", "title": "Conceito-chave 2", "text": "Explicação curta"},
      {"icon": "🎯", "title": "Conceito-chave 3", "text": "Explicação curta"}
    ]
  },
  "exemplo_aplicado": {
    "title": "Exemplo na prática",
    "scenario_emoji": "1 emoji",
    "scenario": "História/situação real de 2-3 frases onde o conceito aparece",
    "analysis": ["passo 1 da análise", "passo 2", "passo 3"],
    "conclusion": "Conclusão de 1 frase ligando o exemplo ao conceito"
  },
  "desafio": {
    "question": "Pergunta específica sobre o TEMA (não sobre o código BNCC), clara para criança de 11 anos",
    "context": "Contexto opcional de 1 frase",
    "options": [
      {"letter": "A", "text": "alternativa plausível", "isCorrect": true},
      {"letter": "B", "text": "distrator coerente", "isCorrect": false},
      {"letter": "C", "text": "distrator coerente", "isCorrect": false},
      {"letter": "D", "text": "distrator coerente", "isCorrect": false}
    ],
    "explanation": "Por que A está correta e por que as outras não — 1-2 frases"
  }
}

REGRAS DE QUALIDADE:
- NUNCA use o código BNCC (ex.: EF06MA11) no campo "title", "text" ou "question". Use o tema (ex.: "Decimais").
- Cada texto deve ser específico do tema — proibido frases genéricas como "Aplicar a ideia principal" ou "Esta habilidade faz parte de...".
- "pontos_chave.points[0].title" NUNCA pode ser o código BNCC.
- "exploracao.texto" precisa ter pelo menos 200 caracteres explicando o conteúdo de verdade.
- Use vocabulário de criança de 11 anos, frases curtas, exemplos do dia a dia.`;

export const gerarAulasBncc = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<{ ok: true; results: CodeResult[] } | { ok: false; motivo: string }> => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) return { ok: false, motivo: "LOVABLE_API_KEY ausente" };

    const { supabaseAdmin: db } = await import("@/integrations/supabase/client.server");
    const { sql } = await import("drizzle-orm");
    const results: CodeResult[] = [];

    for (const code of data.codes) {
      const desc = data.description_by_code[code];
      if (!desc) {
        results.push({ code, ok: false, motivo: "descrição BNCC ausente" });
        continue;
      }

      // Se já existe aula ATIVA real para esse código, pula (a não ser force)
      if (!data.force) {
        const { data: existing } = await supabaseAdmin
          .from("aulas_bncc")
          .select("id, payload")
          .eq("codigo_bncc", code)
          .eq("ativo", true)
          .limit(1);
        if (existing && existing.length > 0) {
          const pts = (existing[0] as any)?.payload?.screens?.pontos_chave?.points;
          const firstTitle = pts?.[0]?.title;
          if (Array.isArray(pts) && pts.length >= 3 && firstTitle && firstTitle !== code) {
            results.push({ code, ok: true, aulaId: (existing[0] as any).id, titulo: "(já existia)" });
            continue;
          }
        }
      }

      const userPrompt = `Código BNCC (referência apenas): ${code}\nDescrição oficial: ${desc}\n\nGere a aula completa em JSON.`;

      try {
        const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            "Lovable-API-Key": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              { role: "user", content: userPrompt },
            ],
            response_format: { type: "json_object" },
            temperature: 0.7,
            max_tokens: 2200,
          }),
        });

        if (res.status === 402) return { ok: false, motivo: "Créditos esgotados (402)" };
        if (res.status === 429) {
          results.push({ code, ok: false, motivo: "rate limit (429)" });
          await new Promise((r) => setTimeout(r, 2000));
          continue;
        }
        if (!res.ok) {
          const t = await res.text();
          results.push({ code, ok: false, motivo: `HTTP ${res.status}: ${t.slice(0, 120)}` });
          continue;
        }

        const json = (await res.json()) as any;
        const raw = json?.choices?.[0]?.message?.content as string | undefined;
        if (!raw) {
          results.push({ code, ok: false, motivo: "resposta vazia" });
          continue;
        }

        let parsed: any;
        try {
          parsed = JSON.parse(raw);
        } catch {
          results.push({ code, ok: false, motivo: "JSON inválido" });
          continue;
        }

        const titulo: string = parsed.titulo || `Aula ${code}`;
        // Validação anti-stub mínima
        const exp = parsed.exploracao?.texto || "";
        const p0 = parsed.pontos_chave?.points?.[0]?.title || "";
        const q = parsed.desafio?.question || "";
        if (exp.length < 150 || p0 === code || titulo.includes(code) || !q) {
          results.push({ code, ok: false, motivo: "aula gerada não passou no controle de qualidade" });
          continue;
        }

        const meta = discFor(code);
        const payload = {
          id: code.toLowerCase(),
          title: titulo,
          subject: meta.disciplina,
          area: meta.area,
          grade: "6º Ano",
          bncc_code: code,
          bncc_description: desc,
          xp: 200,
          screens: {
            missao: parsed.missao,
            exploracao: parsed.exploracao,
            pontos_chave: parsed.pontos_chave,
            exemplo_aplicado: parsed.exemplo_aplicado,
            desafio: parsed.desafio,
          },
        };

        const { data: ins, error: insErr } = await supabaseAdmin
          .from("aulas_bncc")
          .insert({
            codigo_bncc: code,
            etapa: "fundamental2",
            serie: "6º Ano",
            disciplina: meta.disciplina,
            titulo,
            descricao: desc,
            tipo_player: "c",
            payload,
            xp: 200,
            ordem: 1,
            ativo: true,
            pre_requisitos: [],
          })
          .select("id")
          .maybeSingle();

        if (insErr || !ins) {
          results.push({ code, ok: false, motivo: `insert: ${insErr?.message ?? "sem id"}` });
          continue;
        }
        results.push({ code, ok: true, aulaId: ins.id, titulo });
      } catch (e: any) {
        results.push({ code, ok: false, motivo: e?.message || "exceção" });
      }
    }

    return { ok: true, results };
  });
