import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Módulo de Orquestração de Conteúdo Contínuo
 * Responsável por decidir se uma aula deve ser buscada no cache ou gerada.
 */

export const buscarOuAgendarGeracaoAula = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    codigoBNCC: z.string(),
    childId: z.string(),
    perfilNeuro: z.string().optional()
  }).parse(data))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    
    // 1. Verificar na biblioteca de aulas geradas aprovadas (Cache Global)
    const { data: existente } = await supabase
      .from("aulas_geradas")
      .select("*")
      .eq("codigo_bncc", data.codigoBNCC)
      .eq("status", "approved")
      .maybeSingle();

    if (existente) {
      return { 
        status: "pronta", 
        aulaId: existente.id, 
        titulo: existente.titulo,
        origem: "biblioteca_ia",
        conteudo: existente
      };
    }

    // 2. Se não existe, retornar que precisa de geração
    return { 
      status: "necessita_geracao", 
      codigoBNCC: data.codigoBNCC,
      motivo: "Nenhum conteúdo aprovado encontrado na biblioteca permanente."
    };
  });

export const salvarAulaGerada = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    titulo: z.string(),
    serie: z.string(),
    disciplina: z.string(),
    codigoBNCC: z.string(),
    conteudo: z.any(),
    modeloIA: z.string(),
    objetivo: z.string().optional(),
    nivel: z.number().optional()
  }).parse(data))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    
    // Verificação de duplicidade antes de salvar
    const { data: duplicada } = await supabase
      .from("aulas_geradas")
      .select("id")
      .eq("serie", data.serie)
      .eq("disciplina", data.disciplina)
      .eq("codigo_bncc", data.codigoBNCC)
      .eq("nivel", data.nivel || 1)
      .eq("status", "approved")
      .maybeSingle();

    if (duplicada) {
      return { status: "duplicada", id: duplicada.id };
    }

    const { data: novaAula, error } = await supabase
      .from("aulas_geradas")
      .insert({
        titulo: data.titulo,
        serie: data.serie,
        disciplina: data.disciplina,
        codigo_bncc: data.codigoBNCC,
        conteudo: data.conteudo,
        modelo_ia: data.modeloIA,
        objetivo_pedagogico: data.objetivo,
        nivel: data.nivel || 1,
        status: 'draft' // Inicialmente como rascunho para validação
      })
      .select()
      .single();

    if (error) throw error;
    return { status: "salva", aula: novaAula };
  });
