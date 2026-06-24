import { createFileRoute, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { AnamneseWizard } from "@/modules/anamnese/components/AnamneseWizard";
import { supabase } from "@/database/supabase/client";
import { toast } from "sonner";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const Route = createFileRoute("/anamnese/$childId")({
  component: AnamneseRoute,
});

function AnamneseRoute() {
  const { childId } = Route.useParams();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (UUID_RE.test(childId)) return;
    // childId is "nova" or invalid → create a child first
    let cancelled = false;
    (async () => {
      setCreating(true);
      try {
        const { data: auth } = await supabase.auth.getUser();
        const userId = auth?.user?.id;
        if (!userId) {
          toast.error("Faça login para iniciar a anamnese.");
          navigate({ to: "/auth", replace: true });
          return;
        }
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
        const { data, error } = await supabase
          .from("children")
          .insert({ user_id: userId, nome: "Nova criança" })
          .select("id")
          .single();
        if (error) throw error;
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
      {pathname === `/anamnese/${childId}` ? <AnamneseWizard childId={childId} /> : <Outlet />}
    </div>
  );
}
