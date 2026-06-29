import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { LessonDraftPayloadSchema } from "./seed-lessons.schema";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.3-70b-versatile";

/** Garante que o caller é admin (has_role + 'admin'). */
async function assertAdmin(ctx: {
  supabase: any;
  userId: string;
}): Promise<void> {
  const { data, error } = await ctx.supabase.rpc("has_role", {
    _user_id: ctx.userId,
    _role: "admin",
  });
  if (error || !data) {
    throw new Error("FORBIDDEN: apenas administradores podem usar este recurso.");
  }
}

// =============================================================
// Prompt builder — específico para 1º Ano (6 anos)
// =============================================================

function buildSystemPrompt(serie: string, disciplina: string) {
  const baseRules = `Você é um Designer Pedagógico do Brasil, especialista em Ensino Fundamental I.

Sua tarefa: transformar UMA habilidade BNCC em uma AULA COMPLETA, viva e prática, pronta para uma criança neurodivergente (TDAH, TEA, dislexia).

REGRAS DE LINGUAGEM (NÃO PODE QUEBRAR):
- Linguagem para criança de 6 anos: frases curtas (máx. 12 palavras), tom acolhedor.
- Português do Brasil. Sem jargão acadêmico. Sem citar "BNCC" no texto da criança.
- Use exemplos concretos do cotidiano (brinquedo, fruta, bicho, família).
- Sem ironia, sem metáforas obscuras.
- Cada parágrafo cabe em uma tela de celular (máx. 2 linhas).
`;

  const disciplinaRules =
    disciplina.toLowerCase().includes("matem")
      ? `\nMATEMÁTICA 1º ANO:
- Contagem concreta. Se a habilidade é inicial, NÃO use números > 20.
- Exemplos com objetos visíveis (3 maçãs, 5 carrinhos).
- Passo a passo numerado: "Primeiro... Depois... Por último...".`
      : `\nLÍNGUA PORTUGUESA 1º ANO:
- Pré-alfabetização: trabalhe SOM, SÍLABA e LETRA, não leitura corrida.
- Use rimas, palavras curtas (até 4 sílabas) e nomes comuns.
- Atividades devem permitir resposta oral OU visual, nunca exigir escrita longa.`;

  return `${baseRules}${disciplinaRules}

FORMATO DE RESPOSTA: RETORNE APENAS UM JSON VÁLIDO (sem markdown, sem comentários, sem \`\`\`).
O JSON deve ter EXATAMENTE estas chaves:

{
  "titulo": "string curto",
  "objetivo": "o que a criança vai aprender, em 1 frase",
  "introducao": "abertura lúdica com metáfora do cotidiano",
  "explicacao": "explicação principal em 2-4 frases curtas",
  "contextualizacao": "onde isso aparece no dia a dia",
  "resumo": "fechamento em 1-2 frases",
  "palavras_chave": ["3 a 6 palavras"],
  "atividade_guiada": [{ "enunciado": "...", "resposta": "...", "dica": "..." }],
  "atividade_pratica": [{ "enunciado": "...", "resposta": "...", "dica": "..." }],
  "desafio_resumo": { "titulo": "...", "enunciado": "...", "resposta": "..." },
  "quiz_resumo": [
    { "enunciado": "...", "alternativas": [{ "texto": "...", "correta": true, "comentario": "" }], "comentario_resposta": "" }
  ],
  "respostas": ["resposta da atividade 1", "..."],
  "tempo_estimado": 15,

  "exemplos": [
    { "titulo": "...", "contexto": "...", "enunciado": "...", "resolucao": "passo a passo", "resposta": "...", "explicacao": "por que" }
  ],
  "curiosidades": [{ "titulo": "...", "conteudo": "...", "fonte": "" }],
  "quiz": {
    "titulo": "Quiz da aula",
    "descricao": "Vamos brincar de perguntinhas!",
    "questoes": [
      { "enunciado": "...", "alternativas": [
          { "texto": "...", "correta": true, "comentario": "Boa!" },
          { "texto": "...", "correta": false, "comentario": "Quase!" },
          { "texto": "...", "correta": false, "comentario": "Tente de novo!" }
        ], "comentario_resposta": "" }
    ]
  },
  "desafios": [
    { "titulo": "...", "objetivo": "...", "descricao": "...", "resposta": "...", "explicacao": "...", "pontuacao": 10, "nivel": "facil" }
  ],
  "avaliacao": {
    "tipo": "formativa",
    "titulo": "Checagem da aula",
    "descricao": "",
    "questoes": [ /* mesmo formato de quiz.questoes, 3-5 itens */ ]
  },
  "adaptacoes": [
    { "perfil": "tdah", "objetivo": "...", "estrategias": ["...","..."], "recursos": [], "ajustes_atividade": [], "orientacoes_familia": "", "observacoes": "" },
    { "perfil": "tea", "objetivo": "...", "estrategias": ["...","..."], "recursos": [], "ajustes_atividade": [], "orientacoes_familia": "", "observacoes": "" },
    { "perfil": "dislexia", "objetivo": "...", "estrategias": ["...","..."], "recursos": [], "ajustes_atividade": [], "orientacoes_familia": "", "observacoes": "" }
  ],
  "explicacoes_extra": [
    { "titulo": "Explicação visual", "conteudo": "..." },
    { "titulo": "Explicação com história", "conteudo": "..." }
  ],
  "revisao": {
    "resumo_curto": "1 frase",
    "resumo_completo": "3-4 frases",
    "mapa_mental": { "centro": "...", "ramos": ["...","..."] },
    "palavras_chave": ["..."],
    "erros_comuns": [{ "erro": "...", "como_corrigir": "..." }],
    "dicas": [{ "dica": "..." }]
  }
}

Série: ${serie}. Disciplina: ${disciplina}.`;
}

// =============================================================
// Chamada Groq com retry e JSON mode
// =============================================================

async function callGroq(
  systemPrompt: string,
  userPrompt: string,
): Promise<{ json: any; tokens: number; latencyMs: number } | null> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("GROQ_API_KEY ausente");

  for (let attempt = 1; attempt <= 2; attempt++) {
    const start = Date.now();
    const res = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.3,
        max_tokens: 6000,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content:
              attempt === 1
                ? userPrompt
                : `${userPrompt}\n\nRESPONDA SOMENTE COM O JSON. Sem texto antes nem depois.`,
          },
        ],
      }),
    });
    const latencyMs = Date.now() - start;
    if (!res.ok) {
      const t = await res.text();
      console.error("[seed-lessons] groq", res.status, t.slice(0, 300));
      if (attempt === 2) return null;
      continue;
    }
    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
      usage?: { total_tokens?: number };
    };
    const raw = data.choices?.[0]?.message?.content ?? "";
    try {
      const json = JSON.parse(raw);
      return { json, tokens: data.usage?.total_tokens ?? 0, latencyMs };
    } catch (e) {
      console.error("[seed-lessons] JSON parse fail", e);
      if (attempt === 2) return null;
    }
  }
  return null;
}

// =============================================================
// Server functions
// =============================================================

const GenerateOneInput = z.object({
  codigoBncc: z.string().trim().min(3).max(20),
});

export const generateLessonDraft = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => GenerateOneInput.parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context as any);
    const sb = (context as any).supabase;
    const code = data.codigoBncc.toUpperCase();

    // Pula se já tem conteúdo aprovado
    const { data: existing } = await sb
      .from("lesson_content")
      .select("id")
      .eq("codigo_bncc", code)
      .maybeSingle();
    if (existing) {
      return { ok: false, skipped: "already_in_lesson_content", code };
    }
    // Pula se já tem draft pending
    const { data: pending } = await sb
      .from("lesson_drafts")
      .select("id")
      .eq("codigo_bncc", code)
      .eq("status", "pending")
      .maybeSingle();
    if (pending) {
      return { ok: false, skipped: "already_pending", code, draftId: pending.id };
    }

    // Busca habilidade
    const { data: aula, error: aulaErr } = await sb
      .from("aulas_bncc")
      .select("codigo_bncc, serie, disciplina, titulo, descricao")
      .eq("codigo_bncc", code)
      .maybeSingle();
    if (aulaErr || !aula) {
      return { ok: false, error: "aula nao encontrada em aulas_bncc", code };
    }

    const system = buildSystemPrompt(aula.serie, aula.disciplina);
    const user = `Habilidade BNCC: ${aula.codigo_bncc}\nTítulo: ${aula.titulo}\nDescrição oficial: ${aula.descricao}\n\nGere a aula completa em JSON.`;

    const result = await callGroq(system, user);
    if (!result) {
      return { ok: false, error: "Groq falhou após 2 tentativas", code };
    }

    const parsed = LessonDraftPayloadSchema.safeParse(result.json);
    if (!parsed.success) {
      console.error(
        "[seed-lessons] schema invalido",
        parsed.error.issues.slice(0, 5),
      );
      return {
        ok: false,
        error: "payload invalido: " + parsed.error.issues[0]?.message,
        code,
      };
    }

    const { data: inserted, error: insErr } = await sb
      .from("lesson_drafts")
      .insert({
        codigo_bncc: code,
        ano: aula.serie,
        disciplina: aula.disciplina,
        titulo: parsed.data.titulo,
        payload: parsed.data,
        status: "pending",
        model: MODEL,
        tokens_used: result.tokens,
        generated_by: (context as any).userId,
      })
      .select("id")
      .single();
    if (insErr) {
      return { ok: false, error: "insert falhou: " + insErr.message, code };
    }
    return {
      ok: true,
      code,
      draftId: inserted.id,
      tokens: result.tokens,
      latencyMs: result.latencyMs,
    };
  });

const BatchInput = z.object({
  serie: z.string().min(1).max(40),
  disciplina: z.string().min(1).max(80),
  limit: z.number().int().min(1).max(10).default(5),
});

export const generateLessonBatch = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => BatchInput.parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context as any);
    const sb = (context as any).supabase;

    const { data: targets, error } = await sb
      .from("aulas_bncc")
      .select("codigo_bncc")
      .eq("serie", data.serie)
      .eq("disciplina", data.disciplina)
      .limit(50);
    if (error || !targets) {
      return { ok: false, error: error?.message ?? "sem alvos", results: [] };
    }

    const codes: string[] = targets.map((t: any) => t.codigo_bncc.toUpperCase());
    if (codes.length === 0) return { ok: true, results: [] };

    const { data: existingContent } = await sb
      .from("lesson_content")
      .select("codigo_bncc")
      .in("codigo_bncc", codes);
    const { data: existingDrafts } = await sb
      .from("lesson_drafts")
      .select("codigo_bncc")
      .eq("status", "pending")
      .in("codigo_bncc", codes);
    const skip = new Set<string>([
      ...(existingContent ?? []).map((r: any) => r.codigo_bncc.toUpperCase()),
      ...(existingDrafts ?? []).map((r: any) => r.codigo_bncc.toUpperCase()),
    ]);
    const pendingCodes = codes.filter((c) => !skip.has(c)).slice(0, data.limit);

    const results: Array<Awaited<ReturnType<typeof runOne>>> = [];
    for (const c of pendingCodes) {
      const r = await runOne(context, c);
      results.push(r);
      await new Promise((r) => setTimeout(r, 1200)); // rate-limit Groq
    }
    return { ok: true, results, total: pendingCodes.length };
  });

// Reaproveita a lógica do generateOne dentro do batch sem disparar RPC
async function runOne(context: any, code: string) {
  const sb = context.supabase;
  const { data: aula } = await sb
    .from("aulas_bncc")
    .select("codigo_bncc, serie, disciplina, titulo, descricao")
    .eq("codigo_bncc", code)
    .maybeSingle();
  if (!aula) return { ok: false, code, error: "nao encontrado" };

  const system = buildSystemPrompt(aula.serie, aula.disciplina);
  const user = `Habilidade BNCC: ${aula.codigo_bncc}\nTítulo: ${aula.titulo}\nDescrição oficial: ${aula.descricao}\n\nGere a aula completa em JSON.`;
  const result = await callGroq(system, user);
  if (!result) return { ok: false, code, error: "groq falhou" };

  const parsed = LessonDraftPayloadSchema.safeParse(result.json);
  if (!parsed.success) {
    return {
      ok: false,
      code,
      error: "schema invalido: " + parsed.error.issues[0]?.message,
    };
  }

  const { data: inserted, error: insErr } = await sb
    .from("lesson_drafts")
    .insert({
      codigo_bncc: code,
      ano: aula.serie,
      disciplina: aula.disciplina,
      titulo: parsed.data.titulo,
      payload: parsed.data,
      status: "pending",
      model: MODEL,
      tokens_used: result.tokens,
      generated_by: context.userId,
    })
    .select("id")
    .single();
  if (insErr) return { ok: false, code, error: insErr.message };
  return { ok: true, code, draftId: inserted.id, tokens: result.tokens };
}

// =============================================================
// Listar / aprovar drafts
// =============================================================

const ListInput = z.object({
  serie: z.string().min(1).max(40),
  disciplina: z.string().min(1).max(80).optional(),
});

export const listSeedTargets = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => ListInput.parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context as any);
    const sb = (context as any).supabase;

    let q = sb
      .from("aulas_bncc")
      .select("codigo_bncc, serie, disciplina, titulo")
      .eq("serie", data.serie);
    if (data.disciplina) q = q.eq("disciplina", data.disciplina);
    const { data: aulas, error } = await q.order("codigo_bncc");
    if (error || !aulas) return { ok: false, error: error?.message, items: [] };

    const codes = aulas.map((a: any) => a.codigo_bncc.toUpperCase());
    const { data: content } = await sb
      .from("lesson_content")
      .select("codigo_bncc")
      .in("codigo_bncc", codes);
    const { data: drafts } = await sb
      .from("lesson_drafts")
      .select("codigo_bncc, status, id")
      .in("codigo_bncc", codes);
    const hasContent = new Set(
      (content ?? []).map((r: any) => r.codigo_bncc.toUpperCase()),
    );
    const draftMap = new Map<string, { id: string; status: string }>();
    for (const d of drafts ?? []) {
      draftMap.set(d.codigo_bncc.toUpperCase(), { id: d.id, status: d.status });
    }

    const items = aulas.map((a: any) => {
      const code = a.codigo_bncc.toUpperCase();
      const draft = draftMap.get(code);
      let status: "approved" | "draft_pending" | "rejected" | "missing" = "missing";
      if (hasContent.has(code)) status = "approved";
      else if (draft?.status === "pending") status = "draft_pending";
      else if (draft?.status === "rejected") status = "rejected";
      return {
        codigo_bncc: code,
        serie: a.serie,
        disciplina: a.disciplina,
        titulo: a.titulo,
        status,
        draftId: draft?.id ?? null,
      };
    });
    return { ok: true, items };
  });

const ApproveInput = z.object({ draftId: z.string().uuid() });

export const approveLessonDraft = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => ApproveInput.parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context as any);
    const sb = (context as any).supabase;
    const { data: lessonId, error } = await sb.rpc("approve_lesson_draft", {
      _draft_id: data.draftId,
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true, lessonId };
  });
