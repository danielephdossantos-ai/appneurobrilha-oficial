import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { SensoryMode } from "@/engines/regulation-engine/sensory-engine";
import { ChildProfileService } from "@/modules/child-profile/services/ChildProfileService";
import type { ChildProfile } from "@/modules/child-profile/types";
import { supabase } from "@/database/supabase/client";
import type { Json } from "@/integrations/supabase/types";

export type Diagnostico =
  | "tdah"
  | "tea"
  | "dislexia"
  | "tod"
  | "deficiencia_intelectual"
  | "altas_habilidades"
  | "neurotipico"
  | "discalculia"
  | "multiplo"
  | "nenhum";
export type Hiperfoco =
  | "animais"
  | "dinossauros"
  | "espaco"
  | "veiculos"
  | "princesas"
  | "super-herois"
  | "robos"
  | "musica"
  | "minecraft"
  | "carros"
  | "trens"
  | "arte"
  | "fazendinha"
  | "bailarinas"
  | "sereias"
  | "outros";

export interface Child {
  id: string;
  user_id: string;
  nome: string;
  idade: number;
  serie: string;
  hiperfoco: Hiperfoco;
  has_hyperfocus: boolean;
  hyperfocus_list: Hiperfoco[];
  diagnostico: Diagnostico;
  avatar: string; // emoji
  anamnese_completa: boolean;
  anamnesis_id?: string;
  anamnesis_edit_count?: number;
  sensory_mode: SensoryMode;
  coins: number;
  earned_today: number;
  total_earned: number;
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

const DEFAULT_CHILD_PROFILE: Pick<
  Child,
  | "hiperfoco"
  | "has_hyperfocus"
  | "hyperfocus_list"
  | "diagnostico"
  | "avatar"
  | "anamnese_completa"
  | "sensory_mode"
  | "coins"
  | "earned_today"
  | "total_earned"
  | "perfil"
  | "niveis"
  | "tempo_atencao_min"
  | "flags"
  | "observacoes"
> = {
  hiperfoco: "animais",
  has_hyperfocus: true,
  hyperfocus_list: [],
  diagnostico: "nenhum",
  avatar: "🧒",
  anamnese_completa: false,
  sensory_mode: "foco",
  coins: 0,
  earned_today: 0,
  total_earned: 0,
  perfil: {
    leitura: 50,
    escrita: 50,
    matematica: 50,
    atencao: 50,
    linguagem: 50,
    autonomia: 50,
    emocional: 50,
    social: 50,
  },
  niveis: {
    geral: 2,
    portugues: 2,
    matematica: 2,
    ciencias: 2,
    historia: 2,
    geografia: 2,
  },
  tempo_atencao_min: 15,
  flags: {
    apoioVisual: true,
    passoAPasso: true,
    preferAudio: false,
    contaNosDedos: false,
    trocaLetras: false,
    palavrasLongas: false,
  },
  observacoes: "",
};

function normalizeChild(
  row: Partial<Child> & { id: string; user_id: string; nome: string },
): Child {
  return {
    ...DEFAULT_CHILD_PROFILE,
    ...row,
    hiperfoco: row.hiperfoco ?? DEFAULT_CHILD_PROFILE.hiperfoco,
    diagnostico: row.diagnostico ?? DEFAULT_CHILD_PROFILE.diagnostico,
    avatar: row.avatar ?? DEFAULT_CHILD_PROFILE.avatar,
    sensory_mode: row.sensory_mode ?? DEFAULT_CHILD_PROFILE.sensory_mode,
    coins: row.coins ?? DEFAULT_CHILD_PROFILE.coins,
    earned_today: row.earned_today ?? DEFAULT_CHILD_PROFILE.earned_today,
    total_earned: row.total_earned ?? DEFAULT_CHILD_PROFILE.total_earned,
    tempo_atencao_min: row.tempo_atencao_min ?? DEFAULT_CHILD_PROFILE.tempo_atencao_min,
    observacoes: row.observacoes ?? DEFAULT_CHILD_PROFILE.observacoes,
    idade: row.idade ?? 6,
    serie: row.serie ?? "1º ano",
    anamnese_completa: row.anamnese_completa ?? false,
    has_hyperfocus: row.has_hyperfocus ?? DEFAULT_CHILD_PROFILE.has_hyperfocus,
    hyperfocus_list: Array.isArray(row.hyperfocus_list)
      ? row.hyperfocus_list
      : DEFAULT_CHILD_PROFILE.hyperfocus_list,
    perfil: { ...DEFAULT_CHILD_PROFILE.perfil, ...(row.perfil ?? {}) },
    niveis: { ...DEFAULT_CHILD_PROFILE.niveis, ...(row.niveis ?? {}) },
    flags: { ...DEFAULT_CHILD_PROFILE.flags, ...(row.flags ?? {}) },
  };
}

function isDraftPlaceholderChild(child: Child) {
  return child.nome.trim().toLowerCase() === "nova criança" && !child.anamnese_completa;
}

function getPreferredChild(children: Child[]) {
  return (
    children.find((child) => child.anamnese_completa && !isDraftPlaceholderChild(child)) ??
    children.find((child) => !isDraftPlaceholderChild(child)) ??
    children[0] ??
    null
  );
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
  internal_profile: Json;
  edit_count: number;
}

const ACTIVE_CHILD_LEGACY_KEY = "neurobrilha:activeChildId";
const ACTIVE_CHILD_KEY_PREFIX = "neurobrilha:activeChildId:";

const activeChildStorageKey = (userId: string) => `${ACTIVE_CHILD_KEY_PREFIX}${userId}`;

const isAuthExpiredError = (error: unknown) => {
  const possibleError = error as { message?: unknown; status?: unknown };
  return (
    (typeof possibleError.message === "string" && possibleError.message.includes("JWT")) ||
    possibleError.status === 401
  );
};

export function useAppState() {
  const queryClient = useQueryClient();
  const [activeChildId, setActiveChildId] = useState<string | null>(null);

  const { data: authUserId = null, isLoading: isAuthLoading } = useQuery({
    queryKey: ["auth-user-id"],
    queryFn: async () => {
      const { data } = await supabase.auth.getUser();
      return data.user?.id ?? null;
    },
    staleTime: 1000 * 30,
  });

  const { data: children = [], isLoading: isChildrenLoading } = useQuery({
    queryKey: ["children", authUserId],
    enabled: !!authUserId,
    queryFn: async () => {
      if (!authUserId) return [];
      const profiles = await ChildProfileService.getAllByUserId(authUserId);
      const normalized = profiles.map((child) =>
        normalizeChild(child as unknown as Partial<Child> & { id: string; user_id: string; nome: string }),
      );
      const hasRealChild = normalized.some((child) => !isDraftPlaceholderChild(child));
      return hasRealChild ? normalized.filter((child) => !isDraftPlaceholderChild(child)) : normalized;
    },
  });

  useEffect(() => {
    if (!authUserId || typeof window === "undefined") {
      setActiveChildId(null);
      return;
    }

    localStorage.removeItem(ACTIVE_CHILD_LEGACY_KEY);
    const key = activeChildStorageKey(authUserId);
    const stored = localStorage.getItem(key);
    const storedChild = stored ? children.find((child) => child.id === stored) : null;
    const preferredChild = getPreferredChild(children);
    const shouldReplaceStoredDraft =
      !!storedChild &&
      isDraftPlaceholderChild(storedChild) &&
      !!preferredChild &&
      preferredChild.id !== storedChild.id &&
      !isDraftPlaceholderChild(preferredChild);

    if (storedChild && !shouldReplaceStoredDraft) {
      setActiveChildId(stored);
      return;
    }

    const firstChildId = preferredChild?.id ?? null;
    setActiveChildId(firstChildId);
    if (firstChildId) {
      localStorage.setItem(key, firstChildId);
    } else {
      localStorage.removeItem(key);
    }
  }, [authUserId, children]);

  const addChildMutation = useMutation({
    mutationFn: async (newChild: Omit<Child, "id" | "user_id">) => {
      const { data: auth } = await supabase.auth.getUser();
      const uid = auth?.user?.id;
      if (!uid) throw new Error("NOT_AUTHENTICATED");
      const existing = await ChildProfileService.getAllByUserId(uid);
      if (existing.length >= 2) {
        throw new Error("LIMIT_REACHED");
      }
      const created = await ChildProfileService.create({
        ...newChild,
        user_id: uid,
      } as unknown as Omit<ChildProfile, "id">);
      return normalizeChild(created as unknown as Partial<Child> & { id: string; user_id: string; nome: string });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["children"] });
      setActiveChildId(data.id);
      if (authUserId) localStorage.setItem(activeChildStorageKey(authUserId), data.id);
      toast.success("Criança cadastrada com sucesso!");
    },
    onError: (error: unknown) => {
      const msg = (error as { message?: string })?.message;
      if (msg === "LIMIT_REACHED") {
        toast.error("Limite atingido: o app permite no máximo 2 crianças cadastradas.");
      } else if (isAuthExpiredError(error)) {
        toast.error("Erro de autenticação. Por favor, atualize a página.");
      } else {
        toast.error("Erro ao cadastrar criança");
      }
    },
  });

  const updateChildMutation = useMutation({
    mutationFn: async ({ id, patch }: { id: string; patch: Partial<Child> }) => {
      await ChildProfileService.update(id, patch as unknown as Partial<ChildProfile>);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["children"] });
      toast.success("Dados atualizados!");
    },
    onError: (error: unknown) => {
      if (isAuthExpiredError(error)) {
        toast.error("Erro de autenticação. Por favor, atualize a página.");
      } else {
        toast.error("Erro ao atualizar dados");
      }
    },
  });

  const addCoinsMutation = useMutation({
    mutationFn: async ({ childId, amount }: { childId: string; amount: number }) => {
      const { error } = await supabase.rpc("add_brilhocoins", {
        child_id: childId,
        amount: amount,
      });
      if (error) throw error;
      // Também dá XP ao mascote ativo (Pip/Pipa) — desbloqueia evolução.
      try {
        await supabase.rpc("gain_active_mascot_xp" as any, { p_amount: amount });
      } catch (e) {
        console.error("Falha ao dar XP ao mascote", e);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["children"] });
      queryClient.invalidateQueries({ queryKey: ["mascots"] });
    },
  });

  const selectedChild = children.find((c) => c.id === activeChildId) ?? null;
  const preferredChild = getPreferredChild(children);
  const activeChild =
    selectedChild &&
    !(
      isDraftPlaceholderChild(selectedChild) &&
      preferredChild &&
      preferredChild.id !== selectedChild.id &&
      !isDraftPlaceholderChild(preferredChild)
    )
      ? selectedChild
      : preferredChild;

  const { data: sessionData } = useQuery({
    queryKey: ["auth-session"],
    queryFn: async () => {
      const { data } = await supabase.auth.getSession();
      return data.session;
    },
    staleTime: 1000 * 60,
  });

  const logout = async () => {
    await queryClient.cancelQueries();
    if (authUserId) localStorage.removeItem(activeChildStorageKey(authUserId));
    localStorage.removeItem(ACTIVE_CHILD_LEGACY_KEY);
    await supabase.auth.signOut();
    queryClient.clear();
    window.location.href = "/auth";
  };

  return {
    children,
    activeChild,
    isLoading: isAuthLoading || isChildrenLoading,
    session: sessionData ?? null,
    logout,
    setActiveChild: (id: string) => {
      setActiveChildId(id);
      if (authUserId) localStorage.setItem(activeChildStorageKey(authUserId), id);
    },
    addChild: addChildMutation.mutate,
    updateChild: (id: string, patch: Partial<Child>) => updateChildMutation.mutate({ id, patch }),
    addCoins: (amount: number) => {
      if (activeChild) addCoinsMutation.mutate({ childId: activeChild.id, amount });
    },
    saveAnamnesis: async (anamnesis: Omit<AnamnesisData, "id" | "edit_count">) => {
      const { data: existing } = await supabase
        .from("child_anamnesis")
        .select("id, edit_count")
        .eq("child_id", anamnesis.child_id)
        .maybeSingle();

      if (existing) {
        const count = existing.edit_count ?? 0;
        if (count >= 3) {
          throw new Error("Limite de 3 edições atingido para esta anamnese.");
        }
        const { error } = await supabase
          .from("child_anamnesis")
          .update({
            responses: anamnesis.responses,
            internal_profile: anamnesis.internal_profile,
            edit_count: count + 1,
          })
          .eq("id", existing.id);
        if (error) throw error;

        await supabase
          .from("children")
          .update({ anamnesis_edit_count: count + 1 })
          .eq("id", anamnesis.child_id);
      } else {
        const { data, error } = await supabase
          .from("child_anamnesis")
          .insert([{ ...anamnesis, edit_count: 1 }])
          .select()
          .single();
        if (error) throw error;

        await supabase
          .from("children")
          .update({
            anamnesis_id: data.id,
            anamnesis_edit_count: 1,
            anamnese_completa: true,
          })
          .eq("id", anamnesis.child_id);
      }
      queryClient.invalidateQueries({ queryKey: ["children"] });
    },
  };
}

export const NIVEL_DESC: Record<1 | 2 | 3 | 4, { titulo: string; desc: string }> = {
  1: { titulo: "Concreto total", desc: "Manipula objetos, sem letras ou números abstratos" },
  2: { titulo: "Visual guiado", desc: "Desenhos, ícones e narração em cada passo" },
  3: { titulo: "Semi-abstrato", desc: "Símbolos com apoio visual ocasional" },
  4: { titulo: "Abstrato", desc: "Texto e número puros, raciocínio sem apoio" },
};
