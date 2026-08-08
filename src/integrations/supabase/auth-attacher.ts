import { createMiddleware } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";

export const attachSupabaseAuth = createMiddleware().client(
  async ({ next }) => {
    const { data: { session } } = await supabase.auth.getSession();
    const token = session?.access_token;
    
    return next({
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  },
);
