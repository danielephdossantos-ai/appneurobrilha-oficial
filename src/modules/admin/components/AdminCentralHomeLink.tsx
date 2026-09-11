import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { supabase } from "@/database/supabase/client";

export function AdminCentralHomeLink() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let active = true;
    void (async () => {
      const { data: authData } = await supabase.auth.getUser();
      if (!authData.user) return;
      const { data: role } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", authData.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (active) setIsAdmin(Boolean(role));
    })();

    return () => {
      active = false;
    };
  }, []);

  if (!isAdmin) return null;

  return (
    <Link
      to="/admin"
      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl border-2 border-indigo-200 bg-white px-4 py-3 text-center font-black text-indigo-800 shadow-sm transition hover:border-indigo-500 hover:bg-indigo-50 sm:w-auto"
    >
      <ShieldCheck className="h-5 w-5" />
      Central Administrativa
    </Link>
  );
}
