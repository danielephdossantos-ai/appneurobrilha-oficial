import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/database/supabase/client";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: auth } = await supabase.auth.getUser();
      const uid = auth?.user?.id;
      if (!uid) { if (active) setIsAdmin(false); return; }
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      if (active) setIsAdmin(!!data);
    })();
    return () => { active = false; };
  }, []);

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
