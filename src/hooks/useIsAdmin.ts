import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

let cache: boolean | null = null;

/** Administrador real (tabela de papéis). Admin nunca vê nada bloqueado. */
export function useIsAdmin() {
  const [isAdmin, setIsAdmin] = useState<boolean>(cache ?? false);
  useEffect(() => {
    let vivo = true;
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { cache = false; if (vivo) setIsAdmin(false); return; }
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle();
      cache = !!data;
      if (vivo) setIsAdmin(cache);
    })().catch(() => {});
    return () => { vivo = false; };
  }, []);
  return isAdmin;
}
