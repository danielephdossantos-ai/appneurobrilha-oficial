import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { CURRENT_CONSENT_VERSION } from "@/lib/legal/consent";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, ShieldCheck } from "lucide-react";

type Status = "checking" | "ok" | "needs_consent" | "error";

/**
 * Bloqueia o conteúdo até o responsável aceitar a versão atual do termo LGPD.
 * Aceite é registrado em `parental_consents` com data, IP, user-agent e versão.
 */
export function ConsentGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("checking");
  const [accepted1, setAccepted1] = useState(false);
  const [accepted2, setAccepted2] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function check() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      // Sem usuário: deixa o gate de auth da rota redirecionar.
      setStatus("ok");
      return;
    }
    const { data, error } = await supabase
      .from("parental_consents")
      .select("id, revoked_at")
      .eq("user_id", user.id)
      .eq("version", CURRENT_CONSENT_VERSION)
      .is("revoked_at", null)
      .maybeSingle();
    if (error) {
      setErrorMsg(error.message);
      setStatus("error");
      return;
    }
    setStatus(data ? "ok" : "needs_consent");
  }

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleAccept() {
    setSubmitting(true);
    setErrorMsg(null);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Sessão expirada. Faça login novamente.");
      // IP é capturado server-side pelo Supabase (não dá pra obter no browser sem terceiro);
      // gravamos o que conseguimos: user_agent + versão + timestamp.
      const { error } = await supabase.from("parental_consents").insert({
        user_id: user.id,
        version: CURRENT_CONSENT_VERSION,
        user_agent: navigator.userAgent,
      });
      if (error) throw error;
      setStatus("ok");
    } catch (e: any) {
      setErrorMsg(e?.message ?? "Falha ao registrar consentimento.");
    } finally {
      setSubmitting(false);
    }
  }

  if (status === "checking") {
    return (
      <div className="flex items-center justify-center py-20 text-muted-foreground">
        <Loader2 className="w-5 h-5 animate-spin mr-2" /> Carregando…
      </div>
    );
  }

  if (status === "ok") return <>{children}</>;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border max-h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold">Antes de continuar: consentimento dos pais</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          O Neuro Brilha Kids trata dados de crianças e adolescentes. Pela{" "}
          <strong>LGPD (Lei 13.709/2018, art. 14)</strong>, precisamos do seu consentimento
          específico, como responsável legal, antes de liberar o painel.
        </p>

        <div className="text-sm bg-muted/40 rounded-lg p-3 space-y-1">
          <p>📄 Leia antes de aceitar:</p>
          <ul className="pl-4 list-disc">
            <li>
              <Link to="/termos" target="_blank" className="underline text-primary">
                Termo de Consentimento Parental (v{CURRENT_CONSENT_VERSION})
              </Link>
            </li>
            <li>
              <Link to="/privacidade" target="_blank" className="underline text-primary">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        <label className="flex items-start gap-2 text-sm cursor-pointer">
          <Checkbox
            checked={accepted1}
            onCheckedChange={(v) => setAccepted1(v === true)}
            className="mt-0.5"
          />
          <span>
            Declaro ser pai, mãe ou responsável legal pela(s) criança(s) cadastrada(s) nesta conta.
          </span>
        </label>

        <label className="flex items-start gap-2 text-sm cursor-pointer">
          <Checkbox
            checked={accepted2}
            onCheckedChange={(v) => setAccepted2(v === true)}
            className="mt-0.5"
          />
          <span>
            Li e concordo com o Termo de Consentimento Parental e a Política de Privacidade, e
            autorizo o tratamento dos dados da criança nas finalidades descritas. Posso revogar
            este consentimento a qualquer momento.
          </span>
        </label>

        {errorMsg && (
          <p className="text-sm text-destructive">{errorMsg}</p>
        )}

        <div className="flex flex-col gap-2 pt-2">
          <Button
            onClick={handleAccept}
            disabled={!accepted1 || !accepted2 || submitting}
            className="w-full"
          >
            {submitting ? (
              <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Registrando…</>
            ) : (
              "Aceitar e continuar"
            )}
          </Button>
          <Button
            variant="ghost"
            onClick={() => supabase.auth.signOut()}
            className="w-full text-muted-foreground"
          >
            Não aceito — sair
          </Button>
        </div>
      </div>
    </div>
  );
}
