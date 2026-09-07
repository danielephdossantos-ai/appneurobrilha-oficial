import type { User } from "@supabase/supabase-js";
import { supabase } from "@/database/supabase/client";

export type AccountType = "family" | "teacher";

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

  if (adminRole) return "/admin";

  const storedType = user.user_metadata?.account_type;
  const accountType = preferred ?? (storedType === "teacher" || storedType === "family" ? storedType : null);
  if (teacherProfile || accountType === "teacher") return "/area-professor";

  if (requestedNext && !requestedNext.startsWith("/area-professor") && !requestedNext.startsWith("/admin")) {
    return requestedNext;
  }
  return "/";
}
