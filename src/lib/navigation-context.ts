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
  sessionActivities?: string[]; // Slugs da sessão atual
  sessionPlanItemIds?: string[]; // IDs legados dos itens do plano correspondentes à sessão
  sessionPremiumItemIds?: string[]; // IDs canônicos do Plano Premium
  sessionPlanTypes?: Array<"literacy" | "school" | "support">; // Tipo de cada item da fila
  sessionRoutes?: string[]; // Rotas executáveis da fila diária Premium
  sessionIndex?: number;
  timestamp: number;
  
  // Novos campos para controle de planos (Requisito 9)
  planId?: string;
  premiumItemId?: string;
  planType?: "literacy" | "school" | "support";
  week?: number;
  day?: number;
  lessonId?: string;
  position?: number;
  returnPath?: string;
  isPlanFlow?: boolean; 
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
      case "reforco-brilha": return "/apoio-escolar";
      case "brilha-vida": return "/brilha-vida";
      case "alfabetizacao": return "/alfabetizacao";
      default: return "/";
    }
  };

  const handleBack = (navigate: any) => {
    // Contextos antigos não podem sequestrar uma navegação nova.
    const expired = !!context?.timestamp && Date.now() - context.timestamp > 6 * 60 * 60 * 1000;
    if (expired) {
      clearContext();
      return false;
    }
    if (context?.returnPath) {
      navigate({ to: context.returnPath });
      clearContext();
      return true;
    }

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
