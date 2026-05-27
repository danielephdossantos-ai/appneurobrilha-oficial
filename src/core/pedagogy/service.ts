
import { supabase } from "@/integrations/supabase/client";
import { PedagogicalActivity } from "./types";

export class PedagogyService {
  static async getActivities(filters?: {
    materia?: string;
    nivelDificuldade?: string;
    serie?: string;
  }): Promise<PedagogicalActivity[]> {
    let query = supabase
      .from('pedagogical_activities_base')
      .select('*');

    if (filters?.materia) {
      query = query.eq('materia', filters.materia);
    }
    if (filters?.nivelDificuldade) {
      query = query.eq('nivel_dificuldade', filters.nivelDificuldade);
    }
    if (filters?.serie) {
      query = query.eq('serie', filters.serie);
    }

    const { data, error } = await query;
    if (error) throw error;
    
    // Map snake_case from DB to camelCase for the app
    return (data || []).map((item: any) => ({
      id: item.id,
      titulo: item.titulo,
      serie: item.serie,
      faixaEtaria: item.faixa_etaria,
      materia: item.materia,
      habilidadeBNCC: item.habilidade_bncc,
      microHabilidade: item.micro_habilidade,
      nivelDificuldade: item.nivel_dificuldade,
      neuroPerfil: item.neuro_perfil,
      tipoSensorial: item.tipo_sensorial,
      tempoMedio: item.tempo_medio,
      objetivoPedagogico: item.objetivo_pedagogico,
      estrategiaPedagogica: item.estrategia_pedagogica,
      preRequisitos: item.pre_requisitos,
      nivelCognitivo: item.nivel_cognitivo,
      reforcoPositivo: item.reforco_positivo,
      reforcoErro: item.reforco_erro,
      variacoes: item.variacoes,
      tipoResposta: item.tipo_resposta,
      adaptacoes: item.adaptacoes,
      tags: item.tags,
      created_at: item.created_at,
      updated_at: item.updated_at
    }));
  }

  static async getActivityById(id: string): Promise<PedagogicalActivity | null> {
    const { data, error } = await supabase
      .from('pedagogical_activities_base')
      .select('*')
      .eq('id', id)
      .single();

    if (error) return null;

    return {
      id: data.id,
      titulo: data.titulo,
      serie: data.serie,
      faixaEtaria: data.faixa_etaria,
      materia: data.materia,
      habilidadeBNCC: data.habilidade_bncc,
      microHabilidade: data.micro_habilidade,
      nivelDificuldade: data.nivel_dificuldade,
      neuroPerfil: data.neuro_perfil,
      tipoSensorial: data.tipo_sensorial,
      tempoMedio: data.tempo_medio,
      objetivoPedagogico: data.objetivo_pedagogico,
      estrategiaPedagogica: data.estrategia_pedagogica,
      preRequisitos: data.pre_requisitos,
      nivelCognitivo: data.nivel_cognitivo,
      reforcoPositivo: data.reforco_positivo,
      reforcoErro: data.reforco_erro,
      variacoes: data.variacoes,
      tipoResposta: data.tipo_resposta,
      adaptacoes: data.adaptacoes,
      tags: data.tags,
      created_at: data.created_at,
      updated_at: data.updated_at
    };
  }
}
