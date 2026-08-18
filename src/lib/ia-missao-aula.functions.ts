import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/database/supabase/client";
import { chamarProfessorMentor } from "./professor-mentor-engine.server";

// Função utilitária para registrar log técnico de IA no Supabase
async function logAuditIA(provedor: string, modelo: string, tokens: number, status: string, erro?: string) {
  try {
    // Tenta inserir na tabela de logs se existir, senão só loga no console
    console.log(`[ADMIN_IA_AUDIT] Provedor: ${provedor} | Modelo: ${modelo} | Status: ${status} ${erro ? `| Erro: ${erro}` : ''}`);
  } catch (e) {
    console.warn("Falha ao registrar log de auditoria IA:", e);
  }
}

/**
 * Motor de IA para Missão Prova e Trabalho.
 * Gera aulas persistentes com explicações, exemplos e blocos de Lousa Interativa.
 * Agora com Orquestrador Único e Fallback.
 */

// Tipo serializável para o retorno da função
type GerarAulaResult = {
  aulaId: string;
  recemGerada: boolean;
  fonte?: string;
  erro?: string;
};

export const gerarAulaMissaoIA = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    missaoId: z.string(),
    sessionId: z.string().optional(), // ID do tópico no plano de estudo
    topico: z.string(),
    materia: z.string(),
    criancaId: z.string(),
    tipo: z.enum(["prova", "trabalho"])
  }).parse(data))
  .handler(async ({ data }): Promise<GerarAulaResult> => {
    const { missaoId, sessionId, topico, materia, criancaId, tipo } = data;
    
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
    // Procuramos por disciplina, tópico (similar), ano e nível
    const { data: aulaExistente } = await supabase
      .from("rb_aulas")
      .select("id, usage_count")
      .eq("titulo", `Missão: ${topico}`)
      .eq("faixa_etaria", `${idade} anos`)
      .maybeSingle();

    if (aulaExistente) {
      console.log(`[Reuso] Aula encontrada! Reutilizando ID: ${aulaExistente.id}`);
      // Incrementar contador de uso
      await supabase
        .from("rb_aulas")
        .update({ usage_count: (aulaExistente.usage_count || 0) + 1 } as any)
        .eq("id", aulaExistente.id);
        
      // Vincular se houver sessionId
      if (sessionId) {
        await supabase
          .from("exam_study_plans")
          .update({ aula_id: aulaExistente.id } as any)
          .eq("id", sessionId);
      }
        
      return { aulaId: aulaExistente.id, recemGerada: false };
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
          diagnostico: diagnostico,
          hiperfoco: hiperfoco
        }
      );
    } catch (e: any) {
      console.error(`[ADMIN_IA_AUDIT] Erro no Professor Mentor: ${e.message}`);
      return { aulaId: "", recemGerada: false, erro: e.message || "Falha na geração do Professor Mentor" };
    }

    // 5. VALIDAR E PERSISTIR
    let { data: cat } = await supabase.from("rb_categorias").select("id").eq("nome", "Pedagógico").maybeSingle();
    if (!cat) {
       const { data: newCat } = await supabase.from("rb_categorias").insert({ nome: "Pedagógico", ordem: 99 }).select().single();
       cat = newCat;
    }

    let { data: hab } = await supabase.from("rb_habilidades").select("id").eq("nome", "Missões de Estudo IA").maybeSingle();
    if (!hab) {
       const { data: newHab } = await supabase.from("rb_habilidades").insert({
         categoria_id: cat!.id,
         nome: "Missões de Estudo IA",
         descricao: "Aulas geradas automaticamente"
       }).select().single();
       hab = newHab;
    }

    const { data: aula, error: aulaError } = await supabase.from("rb_aulas").insert({
      habilidade_id: hab!.id,
      titulo: `Missão: ${topico}`,
      objetivo: aulaIA.objetivo || "Revisão personalizada",
      nivel: "basico",
      faixa_etaria: `${idade} anos`,
      ordem: 0
    } as any).select().single();

    if (aulaError || !aula) {
       console.error("Erro ao salvar rb_aulas:", aulaError);
       return { aulaId: "", recemGerada: false, erro: "Falha ao salvar cabeçalho da aula" };
    }

    const paginas = aulaIA.paginas.map((p: any, idx: number) => ({
      aula_id: aula.id,
      ordem: p.ordem || idx + 1,
      tipo: p.tipo || "explicacao",
      titulo: p.titulo || `Etapa ${idx + 1}`,
      conteudo: p.conteudo || {}
    }));

    await supabase.from("rb_paginas_aula").insert(paginas);
    
    // VINCULAR À MISSÃO/SESSÃO
    if (sessionId) {
      console.log(`[Persistência] Vinculando aula ${aula.id} à sessão ${sessionId}`);
      const { error: linkError } = await supabase
        .from("exam_study_plans")
        .update({ aula_id: aula.id } as any)
        .eq("id", sessionId);
        
      if (linkError) {
        console.error("Erro ao vincular aula ao plano de estudo:", linkError);
      }
    }
    
    return { aulaId: aula.id, recemGerada: true };
  });
