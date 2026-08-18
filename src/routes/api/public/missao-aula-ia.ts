import { createFileRoute } from "@tanstack/react-router";
import { chamarProfessorMentor } from "@/lib/professor-mentor-engine.server";
import { buscarAulaMentorExistente, persistirAulaMentor } from "@/lib/professor-mentor-persistence.server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

const getSupabaseAdmin = () => {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Configuração do Supabase ausente no servidor");
  return createClient<Database>(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
};

export const Route = createFileRoute("/api/public/missao-aula-ia")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { missaoId, sessionId, topico, materia, criancaId, tipo, forceNew } = body;
          if (!topico || !materia || !criancaId || !["prova", "trabalho"].includes(tipo)) {
            return new Response(JSON.stringify({ erro: "Dados insuficientes para gerar a aula" }), { status: 400 });
          }

          const supabase = getSupabaseAdmin();
          const { data: child } = await supabase
            .from("children")
            .select("nome, idade, serie, diagnostico, hiperfoco")
            .eq("id", criancaId)
            .maybeSingle();
          if (!child) throw new Error("Criança não encontrada");

          const modulo = tipo === "prova" ? "MISSAO_PROVA" : "MISSAO_TRABALHO";
          const idade = child.idade || 8;
          const serie = child.serie || undefined;

          if (!forceNew) {
            const existente = await buscarAulaMentorExistente({
              supabase,
              modulo,
              tema: topico,
              materia,
              idade,
              serie,
            });
            if (existente) {
              const { data: paginas } = await supabase
                .from("rb_paginas_aula")
                .select("id")
                .eq("aula_id", existente.aulaId)
                .limit(1);
              if (paginas?.length) {
                if (sessionId && sessionId !== "new") {
                  await supabase.from("exam_study_plans").update({ aula_id: existente.aulaId } as any).eq("id", sessionId);
                }
                if (tipo === "trabalho" && missaoId && missaoId !== "new") {
                  await supabase.from("rb_trabalhos").update({ last_aula_id: existente.aulaId } as any).eq("id", missaoId);
                }
                return new Response(JSON.stringify({ aulaId: existente.aulaId, recemGerada: false, fonte: "biblioteca" }), { headers: { "Content-Type": "application/json" } });
              }
            }
          }

          const aula = await chamarProfessorMentor(modulo, topico, materia, {
            nome: child.nome || "Criança",
            idade,
            serie,
            diagnostico: child.diagnostico || undefined,
            hiperfoco: child.hiperfoco || undefined,
          });

          const salvo = await persistirAulaMentor({
            supabase,
            modulo,
            tema: topico,
            materia,
            idade,
            serie,
            aula,
            forceNew: Boolean(forceNew),
          });

          if (sessionId && sessionId !== "new") {
            await supabase.from("exam_study_plans").update({ aula_id: salvo.aulaId } as any).eq("id", sessionId);
          }
          if (tipo === "trabalho" && missaoId && missaoId !== "new") {
            await supabase.from("rb_trabalhos").update({ last_aula_id: salvo.aulaId } as any).eq("id", missaoId);
          }

          return new Response(JSON.stringify({ aulaId: salvo.aulaId, recemGerada: salvo.recemGerada, fonte: "professor-mentor" }), { headers: { "Content-Type": "application/json" } });
        } catch (error: any) {
          console.error("[API_MISSAO_AULA]", error);
          return new Response(JSON.stringify({ aulaId: "", recemGerada: false, erro: error?.message || "Não foi possível preparar a aula" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
