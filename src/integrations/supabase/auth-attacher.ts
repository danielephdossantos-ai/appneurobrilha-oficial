import { createMiddleware } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";

/**
 * Middleware para anexar o token de autenticação do Supabase a todas as chamadas de Server Functions.
 * Isso permite que o backend identifique o usuário e aplique as políticas de RLS corretamente.
 */
export const attachSupabaseAuth = createMiddleware().server(
  async ({ next }: any) => {
    // Note: Em versões recentes do TanStack Start, middlewares podem ser executados no cliente.
    // Usamos supabase.auth.getSession() para pegar o token atual do navegador.
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token;
    
    return next({
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  }
);