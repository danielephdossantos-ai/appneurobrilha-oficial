import type { User } from "@supabase/supabase-js";
import { supabase } from "@/database/supabase/client";

export type AccountType = "family" | "teacher";

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

function isFamilyPrivateRoute(pathname: string) {
  return FAMILY_PRIVATE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export async function saveAccountType(accountType: AccountType) {
  const { error } = await supabase.auth.updateUser({ data: { account_type: accountType } });
  if (error) throw error;
}

export async function resolveAccountDestination(
  user: User,
  preferred?: AccountType | null,
  requestedNext?: string,
) {
  const [{ data: adminRole }, { data: teacherProfile }] = await Promise.all([
    supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle(),
    (supabase as any).from("teacher_profiles").select("user_id").eq("user_id", user.id).maybeSingle(),
  ]);

  const storedType = user.user_metadata?.account_type;
  const accountType = preferred ?? (storedType === "teacher" || storedType === "family" ? storedType : null);

  // A conta proprietária/admin pode escolher qual experiência abrir no login.
  if (adminRole) {
    if (accountType === "teacher") return "/area-professor";
    if (accountType === "family") return requestedNext && !requestedNext.startsWith("/area-professor")
      ? requestedNext
      : "/";
    return "/admin";
  }

  if (requestedNext && !requestedNext.startsWith("/admin") && !isFamilyPrivateRoute(requestedNext)) {
    return requestedNext;
  }

  if (teacherProfile || accountType === "teacher") return "/area-professor";
  return "/";
}
