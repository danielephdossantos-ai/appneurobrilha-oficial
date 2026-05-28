import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { SensoryMode } from "@/core/sensory/engine";

export type Diagnostico = "tdah" | "tea" | "dislexia" | "tod" | "deficiencia_intelectual" | "altas_habilidades" | "neurotipico" | "discalculia" | "multiplo" | "nenhum";
export type Hiperfoco =
  | "animais" | "dinossauros" | "espaco" | "veiculos"
  | "princesas" | "super-herois" | "robos" | "musica";

export interface Child {
  id: string;
  user_id: string;
  nome: string;
  idade: number;
  serie: string;
  hiperfoco: Hiperfoco;
  diagnostico: Diagnostico;
  avatar: string; // emoji
  anamnese_completa: boolean;
  anamnesis_id?: string;
  anamnesis_edit_count?: number;
  sensory_mode: SensoryMode;
  perfil: {
    leitura: number;
    escrita: number;
    matematica: number;
    atencao: number;
    linguagem: number;
    autonomia: number;
    emocional: number;
    social: number;
  };
  niveis: {
    geral: 1 | 2 | 3 | 4;
    portugues: 1 | 2 | 3 | 4;
    matematica: 1 | 2 | 3 | 4;
    ciencias: 1 | 2 | 3 | 4;
    historia: 1 | 2 | 3 | 4;
    geografia: 1 | 2 | 3 | 4;
  };
  tempo_atencao_min: number;
  flags: {
    apoioVisual: boolean;
    passoAPasso: boolean;
    preferAudio: boolean;
    contaNosDedos: boolean;
    trocaLetras: boolean;
    palavrasLongas: boolean;
  };
  observacoes: string;
}

export interface AnamnesisData {
  id?: string;
  child_id: string;
  responses: {
    dados_crianca: {
      nome: string;
      idade: number;
      sexo?: string;
    };
    desenvolvimento: {
      fala: "nao_fala" | "fala_pouco" | "fala_bem";
      leitura: "nao_sabe_ler" | "aprendendo" | "ja_le";
    };
    comportamento: {
      dificuldade_atencao: boolean;
      distrai_facil: boolean;
      frustrado_facil: boolean;
    };
    comunicacao: {
      aponta_quer: boolean;
      usa_gestos: boolean;
      usa_palavras: boolean;
    };
    aprendizagem: {
      dificuldade_letras: boolean;
      dificuldade_numeros: boolean;
    };
    diagnostico_profissional: {
      possui: boolean;
      quais?: string;
      profissional?: string;
    };
    preferencias: {
      musica: boolean;
      desenho: boolean;
      jogos: boolean;
      historias: boolean;
    };
    rotina: {
      periodo_estudo: string;
      tem_terapia: boolean;
    };
  };
  internal_profile: any;
  edit_count: number;
}

const ACTIVE_CHILD_KEY = "neurobrilha:activeChildId";

export function useAppState() {
  const queryClient = useQueryClient();
  const [activeChildId, setActiveChildId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(ACTIVE_CHILD_KEY);
    }
    return null;
  });

  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data } = await supabase.auth.getSession();
      return data.session;
    },
  });

  const { data: children = [], isLoading } = useQuery({
    queryKey: ["children"],
    queryFn: async () => {
      if (!session?.user) return [];
      const { data, error } = await supabase
        .from("children")
        .select("*")
        .order("created_at", { ascending: true });
      
      if (error) throw error;
      return data as unknown as Child[];
    },
    enabled: !!session?.user,
  });

  const addChildMutation = useMutation({
    mutationFn: async (newChild: Omit<Child, "id" | "user_id">) => {
      if (!session?.user) throw new Error("Não autenticado");
      const { data, error } = await supabase
        .from("children")
        .insert([{ ...newChild, user_id: session.user.id }])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["children"] });
      setActiveChildId(data.id);
      localStorage.setItem(ACTIVE_CHILD_KEY, data.id);
      toast.success("Criança cadastrada com sucesso!");
    },
    onError: (error: any) => {
      if (error?.message?.includes("JWT") || error?.status === 401) {
        supabase.auth.signOut();
        toast.error("Sua sessão expirou. Por favor, entre novamente.");
      } else {
        toast.error("Erro ao cadastrar criança");
      }
    },
  });

  const updateChildMutation = useMutation({
    mutationFn: async ({ id, patch }: { id: string; patch: Partial<Child> }) => {
      const { error } = await supabase
        .from("children")
        .update(patch)
        .eq("id", id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["children"] });
      toast.success("Dados atualizados!");
    },
    onError: (error: any) => {
      if (error?.message?.includes("JWT") || error?.status === 401) {
        supabase.auth.signOut();
        toast.error("Sua sessão expirou. Por favor, entre novamente.");
      } else {
        toast.error("Erro ao atualizar dados");
      }
    },
  });

  const activeChild = children.find((c) => c.id === activeChildId) || children[0] || null;

  const logout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem(ACTIVE_CHILD_KEY);
    queryClient.clear();
    toast.info("Sessão encerrada");
  };

  return {
    children,
    activeChild,
    isLoading,
    session,
    logout,
    setActiveChild: (id: string) => {
      setActiveChildId(id);
      localStorage.setItem(ACTIVE_CHILD_KEY, id);
    },
    addChild: addChildMutation.mutate,
    updateChild: (id: string, patch: Partial<Child>) => updateChildMutation.mutate({ id, patch }),
  };
}

export const NIVEL_DESC: Record<1 | 2 | 3 | 4, { titulo: string; desc: string }> = {
  1: { titulo: "Concreto total", desc: "Manipula objetos, sem letras ou números abstratos" },
  2: { titulo: "Visual guiado", desc: "Desenhos, ícones e narração em cada passo" },
  3: { titulo: "Semi-abstrato", desc: "Símbolos com apoio visual ocasional" },
  4: { titulo: "Abstrato", desc: "Texto e número puros, raciocínio sem apoio" },
};
