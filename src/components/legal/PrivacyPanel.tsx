import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { CURRENT_CONSENT_VERSION } from "@/lib/legal/consent";
import { Link } from "@tanstack/react-router";
import { Loader2, ShieldOff, ShieldCheck } from "lucide-react";

type Consent = {
  id: string;
  version: string;
  accepted_at: string;
  revoked_at: string | null;
  revocation_reason: string | null;
};

/**
 * Painel de privacidade do responsável: lista consentimentos e permite revogar.
 * Após revogar, o ConsentGate volta a bloquear o acesso no próximo carregamento.
 */
export function PrivacyPanel() {
  const [consents, setConsents] = useState<Consent[]>([]);
  const [loading, setLoading] = useState(true);
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("parental_consents")
      .select("id, version, accepted_at, revoked_at, revocation_reason")
      .order("accepted_at", { ascending: false });
    if (!error && data) setConsents(data as Consent[]);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function revoke(id: string) {
    setSubmitting(true);
    setMsg(null);
    const { error } = await supabase
      .from("parental_consents")
      .update({ revoked_at: new Date().toISOString(), revocation_reason: reason || null })
      .eq("id", id);
    setSubmitting(false);
    if (error) { setMsg("Erro: " + error.message); return; }
    setMsg("Consentimento revogado. O acesso ao painel será bloqueado no próximo carregamento.");
    setReason("");
    load();
  }

  const active = consents.find(c => c.version === CURRENT_CONSENT_VERSION && !c.revoked_at);

  return (
    <div className="space-y-4 p-4 border rounded-2xl bg-card">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-primary" />
        <h3 className="font-bold">Privacidade e consentimento (LGPD)</h3>
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" /> Carregando…
        </p>
      ) : (
        <>
          {active ? (
            <p className="text-sm">
              ✅ Consentimento ativo · versão {active.version} · aceito em{" "}
              {new Date(active.accepted_at).toLocaleDateString("pt-BR")}.
            </p>
          ) : (
            <p className="text-sm text-amber-700">⚠️ Sem consentimento ativo na versão atual.</p>
          )}

          <div className="text-xs text-muted-foreground space-y-1">
            <p>Documentos:</p>
            <Link to="/termos" className="underline block">Termo de Consentimento Parental</Link>
            <Link to="/privacidade" className="underline block">Política de Privacidade</Link>
          </div>

          {active && (
            <div className="space-y-2 pt-2 border-t">
              <p className="text-sm font-semibold flex items-center gap-1">
                <ShieldOff className="w-4 h-4" /> Revogar consentimento
              </p>
              <textarea
                value={reason}
                onChange={e => setReason(e.target.value)}
                placeholder="Motivo (opcional)"
                className="w-full text-sm rounded border p-2 min-h-16"
              />
              <Button
                variant="destructive"
                size="sm"
                disabled={submitting}
                onClick={() => revoke(active.id)}
              >
                {submitting ? "Revogando…" : "Revogar e bloquear acesso"}
              </Button>
              <p className="text-xs text-muted-foreground">
                Para excluir os dados da criança, escreva também ao DPO (ver Política de Privacidade).
              </p>
            </div>
          )}

          {msg && <p className="text-sm">{msg}</p>}

          {consents.length > 1 && (
            <details className="text-xs text-muted-foreground">
              <summary className="cursor-pointer">Histórico de consentimentos ({consents.length})</summary>
              <ul className="mt-2 space-y-1">
                {consents.map(c => (
                  <li key={c.id}>
                    v{c.version} · {new Date(c.accepted_at).toLocaleString("pt-BR")}
                    {c.revoked_at && <> · revogado em {new Date(c.revoked_at).toLocaleDateString("pt-BR")}</>}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </>
      )}
    </div>
  );
}
