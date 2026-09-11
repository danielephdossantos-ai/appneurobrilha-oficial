import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/database/supabase/client";

/**
 * Fonte única de autenticação do aplicativo.
 *
 * A versão anterior ainda consultava cabeçalhos do Replit. Em Lovable/Vercel
 * esses cabeçalhos não existem, então partes do app (como os mascotes) sempre
 * recebiam `user = null`, mesmo depois de um login Supabase válido.
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    void supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return;
      setUser(data.user ?? null);
      setIsLoading(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      mounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated: Boolean(user),
    loginUrl: "/auth",
    logoutUrl: "/auth",
  };
}
