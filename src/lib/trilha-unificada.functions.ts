import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { NodeTrilha, Aula } from "./trilha-unificada";

export const getTrilhaPipeline = createServerFn({ method: "GET" })
  .inputValidator((data) => z.object({ childId: z.string() }).parse(data))
  .handler(async ({ data: { childId } }) => {
    // 1. Buscar progresso da criança
    const { data: progresso } = await supabase
      .from('escola_progresso')
      .select('codigo_bncc, concluida')
      .eq('child_id', childId)
      .eq('concluida', true);

    const concluidasBNCC = new Set(progresso?.map(p => p.codigo_bncc) || []);

    // 2. Mock da trilha linear para 30 dias
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const trilha: NodeTrilha[] = Array.from({ length: 30 }, (_, i) => {
      const dataLiberacao = new Date(hoje);
      // Dia 1 foi anteontem, Dia 2 ontem, Dia 3 hoje
      dataLiberacao.setDate(hoje.getDate() - 2 + i); 
      
      const diaId = `dia-${i + 1}`;
      
      // Lógica de status simplificada para o MVP da trilha
      // i < 2: concluído (simulado)
      // i === 2: disponível (hoje)
      // i > 2: bloqueado
      let status: NodeTrilha['status'] = 'bloqueado';
      if (i < 2) status = 'concluido';
      else if (i === 2) status = 'disponivel';

      return {
        id: diaId,
        diaNumero: i + 1,
        dataLiberacao: dataLiberacao.toISOString(),
        status,
        aulasDoDia: [
          {
            id: `aula-nt-${i}`,
            titulo: i === 2 ? "Desafio de Foco" : "Treino Cerebral",
            tipo: "neuro-treino",
            path: "/neuro-treino/memoria-visual",
            concluida: i < 2
          },
          {
            id: `aula-eb-${i}`,
            titulo: i === 2 ? "Aventura das Letras" : "Lição do Dia",
            tipo: "alfabetizacao",
            path: "/escola-brilha",
            concluida: i < 2
          }
        ]
      };
    });

    return trilha;
  });

export const salvarConclusaoDia = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ childId: z.string(), diaId: z.string() }).parse(data))
  .handler(async ({ data: { childId, diaId } }) => {
    // Implementar log de conclusão se necessário futuramente
    return { success: true };
  });
