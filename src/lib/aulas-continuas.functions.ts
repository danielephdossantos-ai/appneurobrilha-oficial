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
    
    // 1. Verificar se já existe aula gerada aprovada para este código BNCC
    // Reutilizando a tabela bncc_conteudo para armazenar as aulas geradas globalmente
    const { data: existente } = await supabase
      .from("bncc_conteudo")
      .select("id, titulo, aula_ilustrada")
      .eq("codigo", data.codigoBNCC)
      .maybeSingle();

    if (existente) {
      return { 
        status: "pronta", 
        aulaId: existente.id, 
        titulo: existente.titulo,
        origem: "ia_cache"
      };
    }

    // 2. Se não existe, retornar que precisa de geração
    // (A implementação do Gemini será feita na próxima etapa)
    return { 
      status: "necessita_geracao", 
      codigoBNCC: data.codigoBNCC,
      motivo: "Acervo oficial concluído e sem cache de IA disponível."
    };
  });
