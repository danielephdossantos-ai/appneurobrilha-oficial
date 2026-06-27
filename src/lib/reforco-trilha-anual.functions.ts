import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

// ============================================================
// Trilha Anual do Reforço Brilha
// - seedTrilhaAnual: lê anamnese premium + habilidades BNCC da
//   série e cria 1 linha por habilidade (pendente).
// - gerarAulasHabilidade: para 1 trilha (1 habilidade), gera 15
//   aulas adaptadas via Groq. Cliente chama em loop com progresso.
// - listarTrilhaAnual: lê trilha agrupada por componente.
// REGRAS: nunca mostrar código BNCC pro usuário final.
// ============================================================

const SeedInput = z.object({ childId: z.string().uuid() });
const GerarInput = z.object({ trilhaId: z.string().uuid() });
const ListInput = z.object({ childId: z.string().uuid() });

const AulaSchema = z.object({
  titulo: z.string().min(3).max(120),
  objetivo: z.string().min(5).max(280),
  tipo_atividade: z.string().min(3).max(40),
  passos: z.array(z.string().min(2).max(400)).min(3).max(8),
  pergunta_chave: z.string().min(3).max(280).optional(),
  reforco_positivo: z.string().min(3).max(200),
  dica_erro: z.string().min(3).max(240),
});
const AulasArraySchema = z.object({ aulas: z.array(AulaSchema).min(10).max(20) });

export const seedTrilhaAnual = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => SeedInput.parse(i))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: child, error: childErr } = await supabase
      .from("children")
      .select("id, nome, idade, serie, anamnese_completa, perfil, niveis, flags")
      .eq("id", data.childId)
      .eq("user_id", userId)
      .maybeSingle();

    if (childErr || !child) {
      return { ok: false as const, error: "Criança não encontrada" };
    }
    if (!child.anamnese_completa) {
      return { ok: false as const, error: "ANAMNESE_INCOMPLETA" };
    }

    // série -> ano numérico
    const ano = parseAno(child.serie ?? "", child.idade ?? 7);
    if (!ano) {
      return { ok: false as const, error: "Série inválida na anamnese" };
    }

    // habilidades já registradas?
    const { count: existing } = await supabase
      .from("rb_trilha_anual")
      .select("id", { count: "exact", head: true })
      .eq("child_id", child.id);

    if ((existing ?? 0) > 0) {
      return { ok: true as const, ano, inseridas: 0, jaExistia: true };
    }

    // busca habilidades da série (todas as áreas)
    const { data: habs, error: habErr } = await supabase
      .from("bncc_biblioteca")
      .select("codigo, habilidade, componente, unidade_tematica, objeto_conhecimento, ordem")
      .eq("ano", ano)
      .eq("ativo", true)
      .order("componente", { ascending: true })
      .order("ordem", { ascending: true });

    if (habErr || !habs?.length) {
      return { ok: false as const, error: "Nenhuma habilidade BNCC encontrada para a série" };
    }

    const rows = habs.map((h, i) => ({
      child_id: child.id,
      ano,
      componente: h.componente,
      bimestre: 1 + Math.floor((i % 8)),
      ordem: i,
      habilidade_codigo: h.codigo,
      habilidade_descricao: h.habilidade,
      unidade_tematica: h.unidade_tematica,
      objeto_conhecimento: h.objeto_conhecimento,
      status: "pendente",
      aulas_geradas: false,
    }));

    const { error: insErr } = await supabase.from("rb_trilha_anual").insert(rows);
    if (insErr) {
      return { ok: false as const, error: insErr.message };
    }

    return { ok: true as const, ano, inseridas: rows.length, jaExistia: false };
  });

export const listarTrilhaAnual = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => ListInput.parse(i))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: child } = await supabase
      .from("children")
      .select("id, nome, serie, idade")
      .eq("id", data.childId)
      .eq("user_id", userId)
      .maybeSingle();
    if (!child) return { ok: false as const, error: "Criança não encontrada" };

    const { data: trilha } = await supabase
      .from("rb_trilha_anual")
      .select(
        "id, componente, bimestre, ordem, habilidade_descricao, unidade_tematica, aulas_geradas, status",
      )
      .eq("child_id", child.id)
      .order("componente", { ascending: true })
      .order("ordem", { ascending: true });

    const total = trilha?.length ?? 0;
    const prontas = trilha?.filter((t) => t.aulas_geradas).length ?? 0;
    return { ok: true as const, child, trilha: trilha ?? [], total, prontas };
  });

export const obterAulasTrilha = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => GerarInput.parse(i))
  .handler(async ({ data, context }) => {
    const { supabase } = context;
    const { data: row } = await supabase
      .from("rb_trilha_anual")
      .select("id, habilidade_descricao, componente, aulas, aulas_geradas")
      .eq("id", data.trilhaId)
      .maybeSingle();
    if (!row) return { ok: false as const, error: "Trilha não encontrada" };
    return { ok: true as const, trilha: row };
  });

export const gerarAulasHabilidade = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => GerarInput.parse(i))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: row } = await supabase
      .from("rb_trilha_anual")
      .select(
        "id, child_id, habilidade_descricao, componente, unidade_tematica, objeto_conhecimento, ano, aulas_geradas",
      )
      .eq("id", data.trilhaId)
      .maybeSingle();
    if (!row) return { ok: false as const, error: "Trilha não encontrada" };
    if (row.aulas_geradas) return { ok: true as const, jaGerado: true };

    const { data: child } = await supabase
      .from("children")
      .select("id, nome, idade, serie, perfil, niveis, flags")
      .eq("id", row.child_id)
      .eq("user_id", userId)
      .maybeSingle();
    if (!child) return { ok: false as const, error: "Criança não encontrada" };

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) return { ok: false as const, error: "GROQ_API_KEY ausente" };

    const perfilTxt = resumirPerfil(child);
    const system = `Você é um educador especialista em crianças neurodivergentes. Gere 15 aulas DISTINTAS para a MESMA competência pedagógica.
REGRAS OBRIGATÓRIAS:
- Nunca cite códigos BNCC ou jargão técnico no texto visível (titulo, objetivo, passos…). A habilidade é apenas referência interna.
- Cada aula deve ter um tipo_atividade DIFERENTE (ex: jogo, leitura guiada, desafio rápido, história, vídeo curto, atividade prática, quiz, desenho, dramatização, experimento, música, caça-objetos, sequência lógica, par memória, construção).
- Linguagem infantil, frases curtas, tom acolhedor em português do Brasil.
- Passos: 3 a 6 micro-instruções claras.
- reforco_positivo: 1 frase celebratória.
- dica_erro: 1 sugestão gentil de como retomar.
- Adapte ao perfil da criança: ${perfilTxt}.
Retorne EXCLUSIVAMENTE JSON: { "aulas": [ {titulo, objetivo, tipo_atividade, passos:[], pergunta_chave?, reforco_positivo, dica_erro} ... 15 itens ] }`;

    const user = `Idade: ${child.idade ?? "—"} | Série: ${child.serie ?? "—"} | Componente: ${row.componente}
Unidade temática: ${row.unidade_tematica ?? "—"}
Objeto de conhecimento: ${row.objeto_conhecimento ?? "—"}
Competência alvo (referência interna, NÃO mostrar no texto):
"${row.habilidade_descricao}"

Gere 15 aulas variadas para trabalhar essa competência.`;

    let aulas: z.infer<typeof AulasArraySchema>["aulas"] | null = null;
    let lastErr = "";
    for (let attempt = 0; attempt < 2 && !aulas; attempt++) {
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
              { role: "system", content: system },
              { role: "user", content: user },
            ],
            temperature: 0.85,
            max_tokens: 6000,
            response_format: { type: "json_object" },
          }),
        });
        if (!res.ok) {
          lastErr = `Groq ${res.status}: ${(await res.text()).slice(0, 160)}`;
          continue;
        }
        const json = (await res.json()) as {
          choices?: Array<{ message?: { content?: string } }>;
        };
        const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
        const parsed = JSON.parse(stripFences(raw));
        const ok = AulasArraySchema.safeParse(parsed);
        if (ok.success) {
          aulas = ok.data.aulas;
        } else {
          lastErr = ok.error.issues
            .slice(0, 3)
            .map((i) => `${i.path.join(".")}: ${i.message}`)
            .join(" | ");
        }
      } catch (e) {
        lastErr = e instanceof Error ? e.message : "Falha desconhecida";
      }
    }

    if (!aulas) {
      await supabase
        .from("rb_trilha_anual")
        .update({ status: `erro: ${lastErr.slice(0, 120)}` })
        .eq("id", row.id);
      return { ok: false as const, error: lastErr || "Falha ao gerar aulas" };
    }

    await supabase
      .from("rb_trilha_anual")
      .update({ aulas, aulas_geradas: true, status: "pronto" })
      .eq("id", row.id);

    return { ok: true as const, jaGerado: false, total: aulas.length };
  });

// helpers

function stripFences(s: string) {
  return s
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();
}

function parseAno(serie: string, idade: number): number | null {
  const s = serie.toLowerCase();
  const m = s.match(/(\d)\s*º?\s*ano/);
  if (m) {
    const n = Number(m[1]);
    if (n >= 1 && n <= 9) return n;
  }
  if (s.includes("infantil") || s.includes("pré") || s.includes("pre")) return 1; // fallback
  if (idade >= 6 && idade <= 14) return Math.min(9, Math.max(1, idade - 5));
  return null;
}

function resumirPerfil(child: {
  perfil?: string | null;
  niveis?: unknown;
  flags?: unknown;
}): string {
  const parts: string[] = [];
  if (child.perfil) parts.push(`Perfil: ${String(child.perfil).slice(0, 200)}`);
  if (child.niveis && typeof child.niveis === "object") {
    const entries = Object.entries(child.niveis as Record<string, unknown>)
      .slice(0, 6)
      .map(([k, v]) => `${k}=${String(v).slice(0, 20)}`)
      .join(", ");
    if (entries) parts.push(`Níveis: ${entries}`);
  }
  if (Array.isArray(child.flags) && child.flags.length) {
    parts.push(`Flags: ${(child.flags as string[]).slice(0, 6).join(", ")}`);
  }
  return parts.join(" | ") || "criança neurodivergente em idade escolar";
}
