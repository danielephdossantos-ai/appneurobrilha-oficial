import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * Contexto de navegação para garantir que o usuário retorne exatamente
 * para onde começou uma atividade ou aula.
 */

export interface NavigationContext {
  originRoute: string;
  originParams?: Record<string, string>;
  originSearch?: Record<string, any>;
  originModule: string; // "neuro-treino" | "escola-brilha" | "reforco-brilha" | "brilha-vida" | "alfabetizacao"
  originCategory?: string;
  activityId?: string;
  timestamp: number;
}

interface NavigationStore {
  context: NavigationContext | null;
  setContext: (context: NavigationContext | null) => void;
  clearContext: () => void;
}

export const useNavigationStore = create<NavigationStore>()(
  persist(
    (set) => ({
      context: null,
      setContext: (context) => set({ context }),
      clearContext: () => set({ context: null }),
    }),
    {
      name: "nb-navigation-context",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

/**
 * Hook utilitário para disparar a navegação de retorno baseada no contexto salvo.
 */
export function useBackNavigation() {
  const { context, clearContext } = useNavigationStore();
  
  const getFallbackRoute = (module?: string) => {
    switch (module) {
      case "neuro-treino": return "/neuro-treino";
      case "escola-brilha": return "/escola-brilha";
      case "reforco-brilha": return "/reforco-brilha";
      case "brilha-vida": return "/brilha-vida";
      case "alfabetizacao": return "/alfabetizacao";
      default: return "/";
    }
  };

  const handleBack = (navigate: any) => {
    if (context?.originRoute) {
      const { originRoute, originParams, originSearch } = context;
      // Navega para a rota de origem
      navigate({
        to: originRoute,
        params: originParams,
        search: originSearch,
      });
      clearContext();
      return true;
    }
    
    // Fallback por módulo se o contexto estiver incompleto mas o módulo for conhecido
    if (context?.originModule) {
      navigate({ to: getFallbackRoute(context.originModule) });
      clearContext();
      return true;
    }

    return false; // Não conseguiu tratar
  };

  return { handleBack, context };
}
