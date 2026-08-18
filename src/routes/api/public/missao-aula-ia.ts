import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { aiOrchestrator } from '@/lib/ai-orchestrator.server'
import { chamarProfessorMentor } from '@/lib/professor-mentor-engine.server'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/integrations/supabase/types'

// Usamos uma função auxiliar para obter o cliente admin para evitar problemas de escopo/injeção
const getSupabaseAdmin = () => {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
     console.error("[API_MISSÃO_AULA] Credenciais Supabase ausentes no ambiente!");
     throw new Error("Erro de configuração do servidor");
  }
  return createClient<Database>(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
};

// Função utilitária para registrar log técnico de IA no Supabase
async function logAuditIA(provedor: string, modelo: string, status: string, erro?: string) {
  try {
    console.log(`[ADMIN_IA_AUDIT_API] Provedor: ${provedor} | Modelo: ${modelo} | Status: ${status} ${erro ? `| Erro: ${erro}` : ''}`);
  } catch (e) {
    console.warn("Falha ao registrar log de auditoria IA:", e);
  }
}

function extrairJSON(text: string): string {
  const clean = text.trim();
  const match = clean.match(/```json\s*([\s\S]*?)\s*```/);
  if (match?.[1]) return match[1].trim();
  const firstBrace = clean.indexOf('{');
  const lastBrace = clean.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    const result = clean.slice(firstBrace, lastBrace + 1).trim();
    try {
      JSON.parse(result);
      return result;
    } catch (e) {
      const ultraClean = result.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
      try {
        JSON.parse(ultraClean);
        return ultraClean;
      } catch (e2) {}
    }
  }
  return clean;
}

export const Route = createFileRoute('/api/public/missao-aula-ia')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json()
          const { missaoId, sessionId, topico, materia, criancaId, tipo } = body

          const supabase = getSupabaseAdmin();
          
          // 1. Buscar contexto da criança
          const { data: child } = await supabase
            .from("children")
            .select("nome, idade, serie, diagnostico, hiperfoco")
            .eq("id", criancaId)
            .maybeSingle();

          const hiperfoco = child?.hiperfoco || "Interesses gerais";
          const idade = child?.idade || 8;
          const diagnostico = child?.diagnostico || "Não informado";

          // 2. BUSCA PEDAGÓGICA (REUTILIZAÇÃO)
          const { data: aulaExistente } = await supabase
            .from("rb_aulas")
            .select("id, usage_count")
            .eq("titulo", `Missão: ${topico}`)
            .eq("faixa_etaria", `${idade} anos`)
            .maybeSingle();

          if (aulaExistente) {
            await supabase
              .from("rb_aulas")
              .update({ usage_count: (aulaExistente.usage_count || 0) + 1 } as any)
              .eq("id", aulaExistente.id);
            if (sessionId) {
              await supabase
                .from("exam_study_plans")
                .update({ aula_id: aulaExistente.id } as any)
                .eq("id", sessionId);
            }
            return new Response(JSON.stringify({ aulaId: aulaExistente.id, recemGerada: false }), {
              headers: { 'Content-Type': 'application/json' }
            });
          }

          // 3. Chamada ao NÚCLEO PEDAGÓGICO CENTRAL (Professor Mentor)
          let aulaIA;
          try {
            aulaIA = await chamarProfessorMentor(
              tipo === "prova" ? "MISSAO_PROVA" : "MISSAO_TRABALHO",
              topico,
              materia,
              {
                nome: child?.nome || "Criança",
                idade: idade,
                serie: child?.serie || undefined,
                diagnostico: child?.diagnostico || undefined,
                hiperfoco: child?.hiperfoco || undefined
              }
            );
          } catch (e: any) {
            console.error("[API_MISSÃO_AULA] Falha no Professor Mentor:", e);
            await logAuditIA("professor-mentor", "logic-fail", "fail", e.message);
            return new Response(JSON.stringify({ aulaId: '', recemGerada: false, erro: e.message || "Erro no Professor Mentor" }), {
              headers: { 'Content-Type': 'application/json' }
            });
          }

          // 4. PERSISTIR
          const { data: cat } = await supabase.from("rb_categorias").select("id").eq("nome", "Pedagógico").maybeSingle();
          const catId = cat?.id || (await supabase.from("rb_categorias").insert({ nome: "Pedagógico", ordem: 99 }).select().single()).data?.id;

          const { data: hab } = await supabase.from("rb_habilidades").select("id").eq("nome", "Missões de Estudo IA").maybeSingle();
          const habId = hab?.id || (await supabase.from("rb_habilidades").insert({
            categoria_id: catId!,
            nome: "Missões de Estudo IA",
            descricao: "Aulas geradas automaticamente"
          }).select().single()).data?.id;

          const { data: aula, error: aulaError } = await supabase.from("rb_aulas").insert({
            habilidade_id: habId,
            titulo: `Missão: ${topico}`,
            objetivo: aulaIA.objetivo || "Revisão personalizada",
            nivel: "basico",
            faixa_etaria: `${idade} anos`,
            ordem: 0
          } as any).select().single();

          if (aulaError) {
            console.error("[API_MISSÃO_AULA] Erro ao inserir aula:", aulaError);
            throw new Error(`Erro DB Aulas: ${aulaError.message}`);
          }
          if (!aula) throw new Error("Erro DB Aulas: Falha ao criar registro");

          const paginas = aulaIA.paginas.map((p: any, idx: number) => ({
            aula_id: aula.id,
            ordem: p.ordem || idx + 1,
            tipo: p.tipo || "explicacao",
            titulo: p.titulo || `Etapa ${idx + 1}`,
            conteudo: p.conteudo || {}
          }));

          await supabase.from("rb_paginas_aula").insert(paginas);
          if (sessionId) {
            await supabase.from("exam_study_plans").update({ aula_id: aula.id } as any).eq("id", sessionId);
          }

          return new Response(JSON.stringify({ aulaId: aula.id, recemGerada: true, fonte: aiResult.fonte }), {
            headers: { 'Content-Type': 'application/json' }
          });
        } catch (error: any) {
          console.error('[API_MISSÃO_AULA] Erro:', error);
          return new Response(JSON.stringify({ aulaId: '', recemGerada: false, erro: error.message || 'Erro interno' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }
    }
  }
})
