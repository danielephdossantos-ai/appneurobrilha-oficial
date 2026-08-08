import { createMiddleware } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";

/**
 * Middleware para anexar o token de autenticação do Supabase a todas as chamadas de Server Functions.
 * Isso permite que o backend identifique o usuário e aplique as políticas de RLS corretamente.
 */
export const attachSupabaseAuth = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      
      return next({
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
    } catch (err) {
      console.error("Auth attacher error:", err);
      return next();
    }
  }
);