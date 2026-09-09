import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { routeTree } from "./routeTree.gen";
import { persister } from "./utils/persistence";

export const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 1, // Reduzido de 24h para 1h para evitar cache persistente de dados antigos
        staleTime: 0, // Garantir que o app busque dados novos ao invés de usar cache "podre"
      },
    },
  });

  // Only persist on the client side
  if (typeof window !== "undefined") {
    persistQueryClient({
      queryClient,
      persister,
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    });
  }

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
