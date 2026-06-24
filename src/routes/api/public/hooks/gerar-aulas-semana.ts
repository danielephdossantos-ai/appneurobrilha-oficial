/**
 * Cron hook: regenera as aulas da semana para todas as crianças
 * com anamnese completa. Chamado por pg_cron todo domingo 23h.
 *
 * Rota pública (/api/public/*) — autenticação via apikey (anon key).
 */
import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import {
  planWeek,
  getSegundaDaSemana,
  type PerfilNeuro,
} from "@/modules/escola-brilha/engine/weekly-planner";
import type { Database } from "@/integrations/supabase/types";

function inferPerfil(responses: unknown): PerfilNeuro {
  const raw = JSON.stringify(responses || {}).toLowerCase();
  if (raw.includes("tea") || raw.includes("autis")) return "TEA";
  if (raw.includes("tdah") || raw.includes("dficit")) return "TDAH";
  if (raw.includes("dislex")) return "Dislexia";
  return "Neurotipico";
}

export const Route = createFileRoute("/api/public/hooks/gerar-aulas-semana")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const expected = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY;
        const apikey = request.headers.get("apikey");
        if (!expected || apikey !== expected) {
          return new Response("Unauthorized", { status: 401 });
        }

        const supabaseAdmin = createClient<Database>(
          process.env.SUPABASE_URL!,
          process.env.SUPABASE_SERVICE_ROLE_KEY!,
          { auth: { persistSession: false, autoRefreshToken: false } },
        );

        const semanaInicio = getSegundaDaSemana();
        // próxima semana se rodando no domingo
        const dow = new Date().getDay();
        if (dow === 0) semanaInicio.setDate(semanaInicio.getDate() + 7);

        const { data: criancas, error: cErr } = await supabaseAdmin
          .from("children")
          .select("id, user_id, serie, idade")
          .eq("anamnese_completa", true);
        if (cErr) return Response.json({ ok: false, error: cErr.message }, { status: 500 });

        let total = 0;
        const erros: Array<{ childId: string; error: string }> = [];

        for (const child of criancas || []) {
          try {
            const { data: anam } = await supabaseAdmin
              .from("anamnese_v2")
              .select("responses")
              .eq("child_id", child.id)
              .maybeSingle();
            const perfil = inferPerfil(anam?.responses);
            const serie = child.serie || "1º Ano";

            const { data: habs } = await supabaseAdmin
              .from("bncc_habilidades")
              .select("codigo_bncc, disciplina, titulo, objetivo, ano")
              .eq("ano", serie)
              .limit(30);
            let habRows = habs || [];
            if (habRows.length === 0) {
              const { data: fb } = await supabaseAdmin
                .from("bncc_habilidades")
                .select("codigo_bncc, disciplina, titulo, objetivo, ano")
                .limit(10);
              habRows = fb || [];
            }
            if (habRows.length === 0) continue;

            const habilidades = habRows.map((h) => ({
              codigo: h.codigo_bncc,
              disciplina: h.disciplina || "Geral",
              descricao: h.titulo || h.objetivo || h.codigo_bncc,
              ano: h.ano,
            }));

            const { data: matrizRaw } = await supabaseAdmin
              .from("pedagogical_activities_base")
              .select("id, serie, materia, estrategia_pedagogica, titulo, objetivo_pedagogico, habilidade_bncc")
              .or(`serie.eq.${serie},serie.is.null`)
              .limit(200);
            const matriz = (matrizRaw || []).map((m) => ({
              id: m.id,
              serie: m.serie,
              materia: m.materia,
              tecnica: m.estrategia_pedagogica,
              formato: null,
              codigo_bncc: m.habilidade_bncc,
              titulo: m.titulo,
              descricao: m.objetivo_pedagogico,
            }));

            const { data: midias } = await supabaseAdmin
              .from("rb_midias")
              .select("id, url, tipo, tags, titulo")
              .limit(100);

            const { data: progresso } = await supabaseAdmin
              .from("progresso_aluno")
              .select("codigo_bncc, dominio")
              .eq("aluno_id", child.id);
            const jaDominadas = new Set<string>(
              (progresso || [])
                .filter((p) => (p.dominio ?? 0) >= 0.8 && p.codigo_bncc)
                .map((p) => p.codigo_bncc as string),
            );

            const plano = planWeek({
              childId: child.id,
              userId: child.user_id,
              perfil,
              serie,
              semanaInicio: new Date(semanaInicio),
              habilidades,
              matriz: matriz as never,
              midias: (midias || []) as never,
              jaDominadas,
            });

            if (plano.length === 0) continue;

            const { error: upErr } = await supabaseAdmin
              .from("aulas_semana")
              .upsert(plano as never, { onConflict: "child_id,data" });
            if (upErr) {
              erros.push({ childId: child.id, error: upErr.message });
              continue;
            }
            total += plano.length;
          } catch (e) {
            erros.push({ childId: child.id, error: (e as Error).message });
          }
        }

        return Response.json({
          ok: true,
          criancas: (criancas || []).length,
          aulas_criadas: total,
          erros,
        });
      },
    },
  },
});
