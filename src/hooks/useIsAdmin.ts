import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Acesso = { admin: boolean; professor: boolean; pronto: boolean };
let cache: Acesso | null = null;

/** Posição da série: Infantil = 0, 1º ano = 1 … 9º ano = 9. */
export function rankSerie(serie: string | null | undefined): number {
  const s = String(serie ?? "").toLowerCase();
  if (!s) return -1;
  if (/infantil|pr[eé]|maternal|creche|^ei/.test(s)) return 0;
  const m = s.match(/(\d)/);
  return m ? Number(m[1]) : -1;
}

/** Admin real (tabela de papéis) ou professor logado como professor: nada bloqueado. */
export function useAcessoTotal() {
  const [acesso, setAcesso] = useState<Acesso>(cache ?? { admin: false, professor: false, pronto: false });
  useEffect(() => {
    if (cache) return;
    let vivo = true;
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { cache = { admin: false, professor: false, pronto: true }; }
      else {
        const [{ data: a }, { data: t }] = await Promise.all([
          supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle(),
          (supabase as any).from("teacher_profiles").select("user_id").eq("user_id", user.id).maybeSingle(),
        ]);
        const tipo = user.user_metadata?.account_type;
        cache = { admin: !!a, professor: tipo === "teacher" || (!!t && tipo !== "family"), pronto: true };
      }
      if (vivo) setAcesso(cache);
    })().catch(() => { cache = { admin: false, professor: false, pronto: true }; if (vivo) setAcesso(cache); });
    return () => { vivo = false; };
  }, []);
  return { ...acesso, liberado: acesso.admin || acesso.professor };
}

supabase.auth.onAuthStateChange((e) => { if (e === "SIGNED_IN" || e === "SIGNED_OUT" || e === "USER_UPDATED") cache = null; });

export function useIsAdmin() {
  return useAcessoTotal().liberado;
}
