import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Motor de Unificação da Jornada
 * Responsável por intercalar Alfabetização, Escola Brilha e Plano Neuro.
 */

export const getJornadaDoDia = createServerFn({ method: "GET" })
  .validator((d: unknown) => z.object({
    childId: z.string(),
    dia: z.number().default(1)
  }).parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    
    // 1. Buscar perfil da criança
    const { data: profile } = await supabase
      .from("children_profiles")
      .select("*, anamnese_v2:anamnese_v2(*)")
      .eq("id", data.childId)
      .maybeSingle();

    if (!profile) throw new Error("Perfil não encontrado");

    const idade = profile.birth_date ? 
      new Date().getFullYear() - new Date(profile.birth_date).getFullYear() : 7;
    
    // 2. Definir as missões para o dia unificado
    // Regra: Neuro (Cognitivo) -> Alfabetização (Principal) -> Escola Brilha (Geral)
    const missoes = [];

    // Missão 1: Neuro (Se idade < 8)
    if (idade < 8) {
      missoes.push({
        ordem: 1,
        tipo: "neuro",
        categoria: "Despertar Cognitivo",
        codigo: "NT_COORD_01",
        titulo: "Despertar do Cérebro",
        icon: "Brain"
      });
    }

    // Missão 2: Alfabetização (1º Ano)
    missoes.push({
      ordem: 2,
      tipo: "alfabetizacao",
      categoria: "Leitura e Escrita",
      codigo: "EF01LP01",
      titulo: "Mundo das Letras",
      icon: "BookOpen"
    });

    // Missão 3: Escola Brilha (1º Ano Geral)
    missoes.push({
      ordem: 3,
      tipo: "escola-brilha",
      categoria: "Matemática",
      codigo: "EF01MA01",
      titulo: "Contando Estrelas",
      icon: "Calculator"
    });

    // 3. Verificar estado de conclusão no escola_progresso
    const { data: progresso } = await supabase
      .from("escola_progresso")
      .select("codigo_bncc, concluida")
      .eq("child_id", data.childId)
      .in("codigo_bncc", missoes.map(m => m.codigo));

    const concluidas = new Set(
      (progresso || [])
        .filter(p => p.concluida)
        .map(p => p.codigo_bncc)
    );

    return {
      dia: data.dia,
      childId: data.childId,
      status: concluidas.size === missoes.length ? "concluido" : "pendente",
      missoes: missoes.map(m => ({
        ...m,
        concluida: concluidas.has(m.codigo)
      }))
    };
  });
