import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export type Diagnostico = "tdah" | "tea" | "dislexia" | "discalculia" | "multiplo" | "nenhum";
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
    onError: () => toast.error("Erro ao cadastrar criança"),
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
    onError: () => toast.error("Erro ao atualizar dados"),
  });

  const activeChild = children.find((c) => c.id === activeChildId) || children[0] || null;

  return {
    children,
    activeChild,
    isLoading,
    session,
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
