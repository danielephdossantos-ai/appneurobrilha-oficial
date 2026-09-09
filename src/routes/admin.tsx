import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAppState } from "@/core/store";
import { supabase } from "@/database/supabase/client";
import { VERIFIED_ADMIN_SESSION_KEY } from "@/lib/account-routing";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const { session } = useAppState();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(() => {
    if (typeof window === "undefined") return null;
    const verifiedUserId = window.sessionStorage.getItem(VERIFIED_ADMIN_SESSION_KEY);
    return verifiedUserId && verifiedUserId === session?.user?.id ? true : null;
  });

  useEffect(() => {
    let active = true;
    (async () => {
      const uid = session?.user?.id;
      if (!uid) { if (active) setIsAdmin(false); return; }
      if (window.sessionStorage.getItem(VERIFIED_ADMIN_SESSION_KEY) === uid) {
        if (active) setIsAdmin(true);
        return;
      }
      try {
        const roleRequest = supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", uid)
          .eq("role", "admin")
          .maybeSingle();
        const timeout = new Promise<never>((_, reject) => {
          window.setTimeout(() => reject(new Error("Tempo de verificação excedido")), 8_000);
        });
        const { data, error } = await Promise.race([roleRequest, timeout]);
        if (error) throw error;
        if (data) window.sessionStorage.setItem(VERIFIED_ADMIN_SESSION_KEY, uid);
        if (active) setIsAdmin(!!data);
      } catch (error) {
        console.error("Falha ao verificar acesso administrativo", error);
        if (active) setIsAdmin(false);
      }
    })();
    return () => { active = false; };
  }, [session?.user?.id]);

  if (isAdmin === null) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Carregando...</div>;
  }
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Página não encontrada</h1>
          <Link to="/" className="text-primary underline text-sm">Voltar para o início</Link>
        </div>
      </div>
    );
  }
  return <Outlet />;
}
