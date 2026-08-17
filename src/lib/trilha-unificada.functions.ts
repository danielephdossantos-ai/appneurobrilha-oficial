import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export const getTrilhaPipeline = createServerFn({ method: "GET" })
  .inputValidator((data) => z.object({ childId: z.string() }).parse(data))
  .handler(async ({ data: { childId } }) => {
    // 1. Buscar progresso da criança (aulas concluídas)
    const { data: progresso } = await supabase
      .from('progress_v4')
      .select('lesson_id')
      .eq('child_id', childId)
      .eq('concluida', true);

    const concluídas = new Set(progresso?.map(p => p.lesson_id) || []);

    // 2. Buscar aulas geradas aprovadas
    const { data: aulasGeradas } = await supabase
      .from('aulas_geradas')
      .select('*')
      .eq('status', 'approved')
      .order('created_at', { ascending: true });

    // 3. TODO: Integrar com a biblioteca oficial e ordenar por idade/série
    // Por enquanto, vamos retornar uma estrutura mock baseada na data atual para demonstrar a trilha linear
    const hoje = new Date();
    const trilha = Array.from({ length: 30 }, (_, i) => {
      const dataLiberacao = new Date(hoje);
      dataLiberacao.setDate(hoje.getDate() - 2 + i); // 2 dias atrás até 28 dias à frente
      
      const status = i < 2 ? 'concluido' : (i === 2 ? 'disponivel' : 'bloqueado');
      
      return {
        id: `dia-${i + 1}`,
        diaNumero: i + 1,
        dataLiberacao: dataLiberacao.toISOString(),
        status,
        aulasDoDia: [
          {
            id: `aula-neuro-${i}`,
            titulo: "Desafio de Memória",
            tipo: "neuro-treino",
            path: "/neuro-treino/memoria-visual",
            concluida: i < 2
          },
          {
            id: `aula-alfabetizacao-${i}`,
            titulo: "Aprendendo a letra A",
            tipo: "alfabetizacao",
            path: "/primeiros-anos",
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
    // Lógica para registrar que o "nó" da trilha foi concluído
    // Isso pode ser uma nova tabela ou um campo no profile
    return { success: true };
  });
