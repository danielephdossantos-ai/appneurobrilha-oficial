import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { AnamneseWizard } from "@/modules/anamnese/components/AnamneseWizard";
import { supabase } from "@/database/supabase/client";
import { toast } from "sonner";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function ensureUserProfile(user: { id: string; email?: string | null; user_metadata?: Record<string, unknown> }) {
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) throw profileError;
  if (profile) return;

  const displayName =
    typeof user.user_metadata?.full_name === "string"
      ? user.user_metadata.full_name
      : user.email?.split("@")[0] ?? null;
  const avatarUrl =
    typeof user.user_metadata?.avatar_url === "string" ? user.user_metadata.avatar_url : null;

  const { error } = await supabase.from("profiles").insert({
    id: user.id,
    display_name: displayName,
    avatar_url: avatarUrl,
  });

  if (error) throw error;
}

async function createPlaceholderChild(userId: string) {
  return supabase
    .from("children")
    .insert({ user_id: userId, nome: "Nova criança" })
    .select("id")
    .single();
}

export const Route = createFileRoute("/anamnese/$childId")({
  component: AnamneseRoute,
});

function AnamneseRoute() {
  const { childId } = Route.useParams();
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (UUID_RE.test(childId)) return;
    // childId is "nova" or invalid → create a child first
    let cancelled = false;
    (async () => {
      setCreating(true);
      try {
        const { data: auth, error: authErr } = await supabase.auth.getUser();
        const user = auth?.user;
        const userId = user?.id;
        if (authErr || !userId || !user) {
          await supabase.auth.signOut().catch(() => {});
          toast.error("Sessão expirada. Faça login novamente.");
          navigate({ to: "/auth", replace: true });
          return;
        }
        await ensureUserProfile(user);
        const { data: existing, error: listErr } = await supabase
          .from("children")
          .select("id")
          .eq("user_id", userId);
        if (listErr) throw listErr;
        if ((existing?.length ?? 0) >= 2) {
          toast.error("Limite atingido: o app permite no máximo 2 crianças cadastradas.");
          navigate({ to: "/painel-pais", replace: true });
          return;
        }
        let { data, error } = await createPlaceholderChild(userId);
        if (error && ((error as any).code === "23503" || /foreign key/i.test(error.message))) {
          await ensureUserProfile(user);
          const retry = await createPlaceholderChild(userId);
          data = retry.data;
          error = retry.error;
        }
        if (error) {
          throw error;
        }
        if (!cancelled && data?.id) {
          navigate({
            to: "/anamnese/$childId",
            params: { childId: data.id },
            replace: true,
          });
        }
      } catch (e: any) {
        toast.error(e?.message ?? "Não foi possível iniciar a anamnese.");
        navigate({ to: "/", replace: true });
      } finally {
        if (!cancelled) setCreating(false);
      }

    })();
    return () => {
      cancelled = true;
    };
  }, [childId, navigate]);

  if (!UUID_RE.test(childId) || creating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          Preparando a anamnese…
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AnamneseWizard childId={childId} />
    </div>
  );
}
