/**
 * Gerador de aulas (Groq) → grava em lesson_drafts (status='pending').
 * Só admin pode chamar. Player só lê depois de aprovado via approve_lesson_draft.
 */
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

// ---------- Schema do payload da aula ----------
const Questao = z.object({
  enunciado: z.string().min(2),
  alternativas: z
    .array(
      z.object({
        texto: z.string().min(1),
        correta: z.boolean(),
        comentario: z.string().default(""),
      }),
    )
    .min(2)
    .max(5),
  comentario_resposta: z.string().default(""),
});

const Exemplo = z.object({
  titulo: z.string(),
  contexto: z.string(),
  enunciado: z.string(),
  resolucao: z.string(),
  resposta: z.string(),
  explicacao: z.string(),
});

const Curiosidade = z.object({
  titulo: z.string(),
  conteudo: z.string(),
  fonte: z.string().default(""),
});

const Desafio = z.object({
  titulo: z.string(),
  objetivo: z.string(),
  descricao: z.string(),
  resposta: z.string(),
  explicacao: z.string(),
  pontuacao: z.number().int().default(10),
  nivel: z.enum(["facil", "medio", "dificil"]).default("medio"),
});

const Adaptacao = z.object({
  perfil: z.enum([
    "tdah",
    "tea",
    "dislexia",
    "deficiencia_intelectual",
    "altas_habilidades",
  ]),
  objetivo: z.string(),
  estrategias: z.array(z.string()).min(2),
  recursos: z.array(z.string()).min(1),
  ajustes_atividade: z.array(z.string()).min(1),
  orientacoes_familia: z.string(),
  observacoes: z.string().default(""),
});

export const LessonPayloadSchema = z.object({
  titulo: z.string().min(2).max(160),
  objetivo: z.string().min(5),
  introducao: z.string().min(5),
  explicacao: z.string().min(20),
  contextualizacao: z.string().min(5),
  resumo: z.string().min(5),
  palavras_chave: z.array(z.string()).min(3).max(10),
  conhecimentos_previos: z.string().default(""),
  atividade_guiada: z
    .array(
      z.object({
        instrucao: z.string(),
        passos: z.array(z.string()).min(2),
        dica: z.string().default(""),
      }),
    )
    .min(1),
  exemplos: z.array(Exemplo).min(2).max(4),
  curiosidades: z.array(Curiosidade).min(2).max(4),
  quiz: z.object({
    titulo: z.string(),
    descricao: z.string().default(""),
    questoes: z.array(Questao).min(3).max(6),
  }),
  desafios: z.array(Desafio).min(1).max(2),
  avaliacao: z.object({
    tipo: z.enum(["diagnostica", "formativa", "final"]).default("formativa"),
    titulo: z.string(),
    descricao: z.string().default(""),
    questoes: z.array(Questao).min(3).max(6),
  }),
  revisao: z.object({
    resumo_curto: z.string(),
    resumo_completo: z.string(),
    palavras_chave: z.array(z.string()).min(3),
    erros_comuns: z.array(z.string()).min(1),
    dicas: z.array(z.string()).min(1),
  }),
  adaptacoes: z.array(Adaptacao).min(3).max(5),
});

export type LessonPayload = z.infer<typeof LessonPayloadSchema>;

// ---------- Prompt ----------
const SYSTEM_PROMPT = `Você é um professor especialista em BNCC, autor de aulas para crianças brasileiras do Ensino Fundamental, incluindo crianças neurodivergentes (TDAH, TEA, dislexia, deficiência intelectual e altas habilidades).

Sua tarefa: gerar uma aula COMPLETA e fiel à habilidade BNCC informada.

REGRAS:
- Português do Brasil. Frases curtas, vocabulário compatível com a idade.
- Nunca cite "BNCC" para a criança; o objetivo deve estar em linguagem do aluno.
- Todas as questões precisam ter UMA alternativa correta (correta=true) e comentário pedagógico em cada alternativa explicando por que é certa ou errada.
- Adaptações: gere para os 5 perfis (tdah, tea, dislexia, deficiencia_intelectual, altas_habilidades), todas concretas e aplicáveis.
- Exemplos do cotidiano brasileiro (família, escola, brincadeira, supermercado).
- Responda ESTRITAMENTE em JSON válido, sem markdown, sem crase, sem texto antes ou depois.`;

function userPrompt(args: {
  codigo: string;
  titulo: string;
  descricao: string;
  ano: string;
  disciplina: string;
}) {
  return `Gere a aula para a habilidade BNCC ${args.codigo}.

Ano: ${args.ano}
Disciplina: ${args.disciplina}
Título: ${args.titulo}
Descrição da habilidade: ${args.descricao}

Devolva JSON com EXATAMENTE este schema (todas as chaves obrigatórias):
{
  "titulo": string,
  "objetivo": string (em linguagem da criança),
  "introducao": string (1-2 parágrafos curtos, abrindo a aula),
  "explicacao": string (3-5 parágrafos curtos, ensinando o conceito),
  "contextualizacao": string (onde isso aparece no dia a dia),
  "resumo": string (2-3 frases),
  "palavras_chave": string[] (3 a 8),
  "conhecimentos_previos": string,
  "atividade_guiada": [{ "instrucao": string, "passos": string[] (mín 2), "dica": string }],
  "exemplos": [{ "titulo": string, "contexto": string, "enunciado": string, "resolucao": string, "resposta": string, "explicacao": string }] (2 a 4),
  "curiosidades": [{ "titulo": string, "conteudo": string, "fonte": string }] (2 a 4),
  "quiz": { "titulo": string, "descricao": string, "questoes": Questao[] (3 a 6) },
  "desafios": [{ "titulo": string, "objetivo": string, "descricao": string, "resposta": string, "explicacao": string, "pontuacao": number, "nivel": "facil"|"medio"|"dificil" }] (1 a 2),
  "avaliacao": { "tipo": "formativa", "titulo": string, "descricao": string, "questoes": Questao[] (3 a 6) },
  "revisao": { "resumo_curto": string, "resumo_completo": string, "palavras_chave": string[], "erros_comuns": string[], "dicas": string[] },
  "adaptacoes": [{ "perfil": "tdah"|"tea"|"dislexia"|"deficiencia_intelectual"|"altas_habilidades", "objetivo": string, "estrategias": string[] (mín 2), "recursos": string[], "ajustes_atividade": string[], "orientacoes_familia": string, "observacoes": string }] (5 itens, um por perfil)
}

Onde Questao = { "enunciado": string, "alternativas": [{ "texto": string, "correta": boolean, "comentario": string }] (2 a 5, EXATAMENTE UMA correta), "comentario_resposta": string }`;
}

function extractJson(raw: string): unknown {
  let s = raw.replace(/```json/gi, "").replace(/```/g, "").trim();
  const start = s.indexOf("{");
  const end = s.lastIndexOf("}");
  if (start < 0 || end < 0) throw new Error("JSON não encontrado na resposta");
  s = s.slice(start, end + 1);
  try {
    return JSON.parse(s);
  } catch {
    s = s.replace(/,\s*}/g, "}").replace(/,\s*]/g, "]");
    return JSON.parse(s);
  }
}

async function callGroq(
  apiKey: string,
  codigo: string,
  titulo: string,
  descricao: string,
  ano: string,
  disciplina: string,
): Promise<{ payload: LessonPayload; tokens: number; model: string }> {
  const model = "llama-3.3-70b-versatile";
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      response_format: { type: "json_object" },
      temperature: 0.4,
      max_tokens: 8000,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: userPrompt({ codigo, titulo, descricao, ano, disciplina }),
        },
      ],
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Groq ${res.status}: ${t.slice(0, 200)}`);
  }
  const json = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
    usage?: { total_tokens?: number };
  };
  const content = json.choices?.[0]?.message?.content ?? "";
  const parsed = extractJson(content);
  const result = LessonPayloadSchema.safeParse(parsed);
  if (!result.success) {
    throw new Error(
      "Schema inválido: " +
        result.error.issues
          .slice(0, 4)
          .map((i) => `${i.path.join(".")}=${i.message}`)
          .join(" | "),
    );
  }
  return {
    payload: result.data,
    tokens: json.usage?.total_tokens ?? 0,
    model,
  };
}

async function getAdminClient() {
  const { createClient } = await import("@supabase/supabase-js");
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}

async function ensureAdmin(userId: string, sb: any) {
  const { data, error } = await sb.rpc("has_role", {
    _user_id: userId,
    _role: "admin",
  });
  if (error || !data) throw new Error("FORBIDDEN");
}

// ---------- generateLessonDraft ----------
const GenInput = z.object({ codigo_bncc: z.string().min(3).max(30) });

export const generateLessonDraft = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => GenInput.parse(i))
  .handler(async ({ data, context }) => {
    const sb = await getAdminClient(); await ensureAdmin(context.userId, sb);
    const key = process.env.GROQ_API_KEY;
    if (!key) throw new Error("GROQ_API_KEY ausente");

    const { data: aula, error: aErr } = await sb
      .from("aulas_bncc")
      .select("codigo_bncc, titulo, descricao, serie, disciplina")
      .eq("codigo_bncc", data.codigo_bncc)
      .maybeSingle();
    if (aErr || !aula) throw new Error("Habilidade BNCC não encontrada");

    const { payload, tokens, model } = await callGroq(
      key,
      aula.codigo_bncc,
      aula.titulo ?? aula.codigo_bncc,
      aula.descricao ?? "",
      aula.serie ?? "",
      aula.disciplina ?? "",
    );

    const { data: ins, error: insErr } = await sb
      .from("lesson_drafts")
      .insert({
        codigo_bncc: aula.codigo_bncc,
        ano: aula.serie,
        disciplina: aula.disciplina,
        titulo: payload.titulo,
        payload,
        status: "pending",
        model,
        tokens_used: tokens,
        generated_by: context.userId,
      })
      .select("id")
      .single();
    if (insErr) throw new Error(insErr.message);

    return { ok: true as const, draftId: ins.id as string, tokens };
  });

// ---------- generateBatch1Ano ----------
const BatchInput = z.object({
  limit: z.number().int().min(1).max(80).default(80),
});

export const generateBatch1Ano = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => BatchInput.parse(i))
  .handler(async ({ data, context }) => {
    const sb = await getAdminClient(); await ensureAdmin(context.userId, sb);
    const key = process.env.GROQ_API_KEY;
    if (!key) throw new Error("GROQ_API_KEY ausente");

    const { data: aulas, error } = await sb
      .from("aulas_bncc")
      .select("codigo_bncc, titulo, descricao, serie, disciplina")
      .eq("serie", "1º Ano")
      .in("disciplina", ["Matemática", "Língua Portuguesa", "Português"])
      .limit(data.limit);
    if (error) throw new Error(error.message);

    // pula códigos já com draft/aprovado
    const codigos = (aulas ?? []).map((a: any) => a.codigo_bncc);
    const { data: existentes } = await sb
      .from("lesson_drafts")
      .select("codigo_bncc")
      .in("codigo_bncc", codigos)
      .in("status", ["pending", "approved"]);
    const skip = new Set((existentes ?? []).map((r: any) => r.codigo_bncc));
    const fila = (aulas ?? []).filter((a: any) => !skip.has(a.codigo_bncc));

    const results: Array<{
      codigo: string;
      ok: boolean;
      tokens: number;
      error?: string;
    }> = [];
    let totalTokens = 0;

    for (const a of fila) {
      try {
        const { payload, tokens, model } = await callGroq(
          key,
          a.codigo_bncc,
          a.titulo ?? a.codigo_bncc,
          a.descricao ?? "",
          a.serie ?? "",
          a.disciplina ?? "",
        );
        await sb.from("lesson_drafts").insert({
          codigo_bncc: a.codigo_bncc,
          ano: a.serie,
          disciplina: a.disciplina,
          titulo: payload.titulo,
          payload,
          status: "pending",
          model,
          tokens_used: tokens,
          generated_by: context.userId,
        });
        totalTokens += tokens;
        results.push({ codigo: a.codigo_bncc, ok: true, tokens });
      } catch (e: any) {
        results.push({
          codigo: a.codigo_bncc,
          ok: false,
          tokens: 0,
          error: String(e?.message ?? e).slice(0, 200),
        });
      }
      // pequena pausa para evitar rate limit
      await new Promise((r) => setTimeout(r, 600));
    }

    return {
      ok: true as const,
      total: fila.length,
      sucesso: results.filter((r) => r.ok).length,
      falha: results.filter((r) => !r.ok).length,
      tokensUsados: totalTokens,
      results,
    };
  });

// ---------- approveDraft (chama RPC) ----------
const ApproveInput = z.object({ draftId: z.string().uuid() });

export const approveDraft = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => ApproveInput.parse(i))
  .handler(async ({ data, context }) => {
    const sb = await getAdminClient(); await ensureAdmin(context.userId, sb);
    const { data: lessonId, error } = await sb.rpc(
      "approve_lesson_draft",
      { _draft_id: data.draftId },
    );
    if (error) throw new Error(error.message);
    return { ok: true as const, lessonId: lessonId as string };
  });

// ---------- rejectDraft ----------
const RejectInput = z.object({
  draftId: z.string().uuid(),
  notes: z.string().max(2000).default(""),
});

export const rejectDraft = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => RejectInput.parse(i))
  .handler(async ({ data, context }) => {
    const sb = await getAdminClient(); await ensureAdmin(context.userId, sb);
    const { error } = await sb
      .from("lesson_drafts")
      .update({
        status: "rejected",
        notes: data.notes,
        reviewed_by: context.userId,
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", data.draftId);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

// ---------- listDrafts ----------
const ListInput = z.object({
  status: z.enum(["pending", "approved", "rejected", "all"]).default("pending"),
  ano: z.string().optional(),
  disciplina: z.string().optional(),
});

export const listDrafts = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => ListInput.parse(i))
  .handler(async ({ data, context }) => {
    const sb = await getAdminClient(); await ensureAdmin(context.userId, sb);
    let q = sb
      .from("lesson_drafts")
      .select(
        "id, codigo_bncc, ano, disciplina, titulo, status, model, tokens_used, created_at, reviewed_at, notes",
      )
      .order("created_at", { ascending: false })
      .limit(200);
    if (data.status !== "all") q = q.eq("status", data.status);
    if (data.ano) q = q.eq("ano", data.ano);
    if (data.disciplina) q = q.eq("disciplina", data.disciplina);
    const { data: rows, error } = await q;
    if (error) throw new Error(error.message);
    return { ok: true as const, drafts: rows ?? [] };
  });

// ---------- getDraft (com payload) ----------
const GetInput = z.object({ draftId: z.string().uuid() });

export const getDraft = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => GetInput.parse(i))
  .handler(async ({ data, context }) => {
    const sb = await getAdminClient(); await ensureAdmin(context.userId, sb);
    const { data: row, error } = await sb
      .from("lesson_drafts")
      .select("*")
      .eq("id", data.draftId)
      .maybeSingle();
    if (error || !row) throw new Error("Draft não encontrado");
    return { ok: true as const, draft: row };
  });
