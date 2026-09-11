import { useEffect, useState, type ReactNode } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/database/supabase/client";

const FAMILY_PRIVATE_PREFIXES = [
  "/painel-pais",
  "/anamnese",
  "/relatorio",
  "/progressao",
  "/terapeuta-brilha",
  "/agenda",
  "/perfil-aluno",
  "/curadoria-aulas",
  "/auditoria-pedagogica",
  "/conectar",
];

function isUnder(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

export function isFamilyPrivateRoute(pathname: string) {
  return FAMILY_PRIVATE_PREFIXES.some((prefix) => isUnder(pathname, prefix));
}

export function isProfileProtectedRoute(pathname: string) {
  return isUnder(pathname, "/admin") || isUnder(pathname, "/area-professor") || isFamilyPrivateRoute(pathname);
}

export function ProfileAccessGuard({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [checkedPath, setCheckedPath] = useState<string | null>(null);
  const [allowed, setAllowed] = useState(true);

  useEffect(() => {
    const pathname = location.pathname;
    if (!isProfileProtectedRoute(pathname)) {
      setCheckedPath(pathname);
      setAllowed(true);
      return;
    }

    let active = true;
    setCheckedPath(null);
    void (async () => {
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) {
        if (active) {
          setAllowed(false);
          setCheckedPath(pathname);
        }
        return;
      }

      const [{ data: adminRole, error: adminError }, { data: teacherProfile, error: teacherError }] = await Promise.all([
        supabase.from("user_roles").select("role").eq("user_id", authData.user.id).eq("role", "admin").maybeSingle(),
        (supabase as any).from("teacher_profiles").select("user_id").eq("user_id", authData.user.id).maybeSingle(),
      ]);

      const isAdmin = !adminError && Boolean(adminRole);
      const isTeacher = !teacherError && Boolean(teacherProfile);
      const isAdminRoute = isUnder(pathname, "/admin");
      const isTeacherRoute = isUnder(pathname, "/area-professor");
      const canStartTeacherActivation = pathname === "/area-professor" && authData.user.user_metadata?.account_type === "teacher";
      const denied = (isAdminRoute && !isAdmin) || (isTeacherRoute && !isAdmin && !isTeacher && !canStartTeacherActivation) || (isFamilyPrivateRoute(pathname) && !isAdmin && isTeacher);

      if (!active) return;
      setAllowed(!denied);
      setCheckedPath(pathname);
      if (denied) {
        const destination = isAdminRoute || isFamilyPrivateRoute(pathname) ? (isTeacher && !isAdmin ? "/area-professor" : "/") : "/";
        toast.error(isAdminRoute ? "Sua conta não possui acesso de administradora." : isTeacherRoute ? "Ative o acesso docente para abrir esta área." : "Esta área é exclusiva da família responsável.");
        navigate({ href: destination, replace: true });
      }
    })();

    return () => {
      active = false;
    };
  }, [location.pathname, navigate]);

  if (!isProfileProtectedRoute(location.pathname)) return <>{children}</>;
  if (checkedPath !== location.pathname) {
    return <div className="min-h-screen grid place-items-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }
  if (!allowed) return null;
  return <>{children}</>;
}
