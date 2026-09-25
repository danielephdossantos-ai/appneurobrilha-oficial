import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { supabase } from "@/database/supabase/client";

/**
 * Login como professor: mostra botão na área da criança para voltar à Área do Professor.
 * Login como família: bloqueia a Área do Professor (redireciona para o início).
 */
export function TeacherAccessBridge() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [acesso, setAcesso] = useState<"carregando" | "professor" | "familia">("carregando");

  useEffect(() => {
    let vivo = true;
    const verificar = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user) return vivo && setAcesso("familia");
      if (user.user_metadata?.account_type === "teacher") return vivo && setAcesso("professor");
      const { data: admin } = await supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle();
      if (vivo) setAcesso(admin ? "professor" : "familia");
    };
    verificar();
    const { data: sub } = supabase.auth.onAuthStateChange(() => verificar());
    return () => { vivo = false; sub.subscription.unsubscribe(); };
  }, []);

  const naAreaProfessor = pathname.startsWith("/area-professor");

  useEffect(() => {
    if (acesso === "familia" && naAreaProfessor) navigate({ to: "/", replace: true });
  }, [acesso, naAreaProfessor, navigate]);

  if (acesso !== "professor" || pathname !== "/") return null;
  return (
    <button
      type="button"
      onClick={() => navigate({ to: "/area-professor" })}
      className="fixed left-3 top-3 z-50 inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-3 text-sm font-bold text-white shadow-lg"
    >
      <GraduationCap className="h-4 w-4" />Área do Professor
    </button>
  );
}
