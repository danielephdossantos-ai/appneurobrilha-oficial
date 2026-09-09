import { supabase } from "@/database/supabase/client";
import { PedagogicalActivity, NivelDificuldade } from "./types";

export class PedagogyService {
  private static mapFromDb(item: any): PedagogicalActivity {
    return {
      id: item.id,
      titulo: item.titulo,
      serie: item.serie || undefined,
      faixaEtaria: item.faixa_etaria || undefined,
      materia: item.materia,
      habilidadeBNCC: item.habilidade_bncc || undefined,
      microHabilidade: item.micro_habilidade || undefined,
      nivelDificuldade: (item.nivel_dificuldade as NivelDificuldade) || "simples",
      neuroPerfil: Array.isArray(item.neuro_perfil) ? item.neuro_perfil : [],
      tipoSensorial: Array.isArray(item.tipo_sensorial) ? item.tipo_sensorial : [],
      tempoMedio: item.tempo_medio || undefined,
      objetivoPedagogico: item.objetivo_pedagogico || undefined,
      estrategiaPedagogica: item.estrategia_pedagogica || undefined,
      preRequisitos: item.pre_requisitos || [],
      nivelCognitivo: item.nivel_cognitivo || undefined,
      reforcoPositivo: item.reforco_positivo || undefined,
      reforcoErro: item.reforco_erro || undefined,
      variacoes: Array.isArray(item.variacoes) ? item.variacoes : [],
      tipoResposta: item.tipo_resposta || undefined,
      adaptacoes: item.adaptacoes || {},
      tags: item.tags || [],
      created_at: item.created_at || undefined,
      updated_at: item.updated_at || undefined,
    };
  }

  static async getActivities(filters?: {
    materia?: string;
    nivelDificuldade?: string;
    serie?: string;
  }): Promise<PedagogicalActivity[]> {
    let query = supabase.from("pedagogical_activities_base").select("*");

    if (filters?.materia) {
      query = query.eq("materia", filters.materia);
    }
    if (filters?.nivelDificuldade) {
      query = query.eq("nivel_dificuldade", filters.nivelDificuldade);
    }
    if (filters?.serie) {
      query = query.eq("serie", filters.serie);
    }

    const { data, error } = await query;
    if (error) throw error;

    return (data || []).map((item) => this.mapFromDb(item));
  }

  static async getActivityById(id: string): Promise<PedagogicalActivity | null> {
    const { data, error } = await supabase
      .from("pedagogical_activities_base")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error || !data) return null;

    return this.mapFromDb(data);
  }
}
