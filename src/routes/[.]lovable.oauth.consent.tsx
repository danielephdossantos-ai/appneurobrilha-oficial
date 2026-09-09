import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/database/supabase/client";

type OAuthDetails = {
  client?: { name?: string } | null;
  redirect_url?: string;
  redirect_to?: string;
};

type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: OAuthDetails | null; error: any }>;
  approveAuthorization: (id: string) => Promise<{ data: OAuthDetails | null; error: any }>;
  denyAuthorization: (id: string) => Promise<{ data: OAuthDetails | null; error: any }>;
};

const oauth = () => (supabase.auth as unknown as { oauth: OAuthApi }).oauth;

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Falta authorization_id");
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      const next = location.pathname + location.searchStr;
      throw redirect({ to: "/auth", search: { next } });
    }
  },
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id")!;
    const { data, error } = await oauth().getAuthorizationDetails(authorizationId);
    if (error) throw error;
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return data;
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <main className="min-h-screen grid place-items-center p-6 text-center">
      <p className="text-sm font-bold text-muted-foreground">
        Não foi possível carregar este pedido de autorização:{" "}
        {String((error as Error)?.message ?? error)}
      </p>
    </main>
  ),
});

function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const nome = details?.client?.name ?? "um aplicativo";

  async function decidir(aprovar: boolean) {
    setBusy(true);
    setErro(null);
    const { data, error } = aprovar
      ? await oauth().approveAuthorization(authorization_id)
      : await oauth().denyAuthorization(authorization_id);
    if (error) {
      setBusy(false);
      setErro(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setErro("O servidor de autorização não devolveu um endereço de retorno.");
      return;
    }
    window.location.href = target;
  }

  return (
    <main className="min-h-screen bg-sidebar grid place-items-center p-4">
      <div className="w-full max-w-sm bg-background/95 rounded-3xl border-2 border-white/30 p-6 shadow-xl flex flex-col gap-4">
        <h1 className="text-xl font-black text-foreground text-center">
          Conectar {nome} à sua conta
        </h1>
        <p className="text-sm text-muted-foreground text-center">
          Isso permite que {nome} use o NeuroBrilha Kids como você. Você pode negar agora e nada
          será compartilhado.
        </p>
        {erro && (
          <p role="alert" className="text-xs font-bold text-destructive text-center">
            {erro}
          </p>
        )}
        <button
          type="button"
          disabled={busy}
          onClick={() => decidir(true)}
          className="rounded-xl bg-primary text-primary-foreground font-black py-3 text-sm uppercase tracking-wider disabled:opacity-60"
        >
          Permitir
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => decidir(false)}
          className="rounded-xl border-2 border-input bg-background text-foreground font-bold py-3 text-sm disabled:opacity-60"
        >
          Negar
        </button>
      </div>
    </main>
  );
}
