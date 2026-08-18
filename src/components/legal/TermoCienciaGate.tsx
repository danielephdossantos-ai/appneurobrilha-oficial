import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  TERMO_CIENCIA_VERSAO, 
  TERMO_CIENCIA_RESUMO, 
  TERMO_CIENCIA_COMPLETO 
} from "@/modules/legal/termo-ciencia";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, ShieldCheck, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

type Status = "checking" | "ok" | "needs_science" | "error";

interface Props {
  children: React.ReactNode;
  childId?: string;
}

export function TermoCienciaGate({ children, childId }: Props) {
  const [status, setStatus] = useState<Status>("checking");
  const [accepted, setAccepted] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function check() {
    if (!childId || childId === "nova") {
      setStatus("ok");
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setStatus("ok");
      return;
    }

    const { data, error } = await supabase
      .from("parental_science_accepts")
      .select("id")
      .eq("user_id", user.id)
      .eq("child_id", childId)
      .eq("version", TERMO_CIENCIA_VERSAO)
      .eq("status", "accepted")
      .maybeSingle();

    if (error) {
      console.error("Erro ao verificar termo de ciência:", error);
      setStatus("ok"); // Fallback para não bloquear em caso de erro de rede
      return;
    }

    setStatus(data ? "ok" : "needs_science");
  }

  useEffect(() => {
    check();
  }, [childId]);

  async function handleAccept() {
    if (!childId) return;
    setSubmitting(true);
    setErrorMsg(null);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Sessão expirada.");

      const { error } = await supabase.from("parental_science_accepts").insert({
        user_id: user.id,
        child_id: childId,
        version: TERMO_CIENCIA_VERSAO,
        metadata: {
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString()
        }
      });

      if (error) throw error;
      setStatus("ok");
    } catch (e: any) {
      setErrorMsg(e?.message ?? "Falha ao registrar aceite.");
    } finally {
      setSubmitting(false);
    }
  }

  if (status === "checking") {
    return (
      <div className="flex items-center justify-center py-20 text-muted-foreground">
        <Loader2 className="w-5 h-5 animate-spin mr-2" /> Carregando segurança…
      </div>
    );
  }

  if (status === "ok") return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-background rounded-[2rem] max-w-xl w-full p-8 space-y-6 shadow-2xl border-4 border-primary/20 max-h-[90vh] overflow-y-auto relative"
      >
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-black text-foreground">Termo de Ciência e Uso</h2>
          <p className="text-xs font-bold text-primary uppercase tracking-widest">
            NeuroBrilha Kids · Versão {TERMO_CIENCIA_VERSAO}
          </p>
        </div>

        <div className="bg-muted/50 rounded-2xl p-5 border-2 border-dashed border-muted-foreground/20">
          <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground font-medium leading-relaxed">
            <ReactMarkdown>{TERMO_CIENCIA_RESUMO}</ReactMarkdown>
          </div>
          
          <button 
            onClick={() => setShowFull(true)}
            className="mt-4 flex items-center gap-2 text-primary font-bold text-sm hover:underline"
          >
            <FileText className="w-4 h-4" />
            Ler termo completo e detalhado
          </button>
        </div>

        <div className="space-y-4">
          <label className="flex items-start gap-3 text-sm font-bold cursor-pointer group">
            <Checkbox
              checked={accepted}
              onCheckedChange={(v) => setAccepted(v === true)}
              className="mt-1 border-2 data-[state=checked]:bg-primary"
            />
            <span className="text-foreground/80 group-hover:text-foreground transition-colors">
              Li, compreendi e estou de acordo com este Termo de Ciência e Uso do NeuroBrilha Kids.
            </span>
          </label>

          {errorMsg && (
            <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-xl font-bold">
              ⚠️ {errorMsg}
            </p>
          )}

          <div className="flex flex-col gap-3 pt-2">
            <Button
              onClick={handleAccept}
              disabled={!accepted || submitting}
              className="w-full h-14 rounded-2xl text-lg font-black shadow-lg shadow-primary/20"
            >
              {submitting ? (
                <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Registrando aceite…</>
              ) : (
                "ACEITAR E CONTINUAR"
              )}
            </Button>
            
            <p className="text-[10px] text-center text-muted-foreground uppercase font-black tracking-widest">
              O ACEITE É OBRIGATÓRIO PARA GARANTIR A SEGURANÇA PEDAGÓGICA
            </p>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showFull && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4 md:p-10"
          >
            <motion.div 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="bg-background rounded-[2rem] w-full max-w-4xl h-full flex flex-col shadow-2xl border overflow-hidden"
            >
              <div className="p-6 border-b flex items-center justify-between bg-muted/30">
                <h3 className="text-xl font-black">Termo Completo</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowFull(false)} className="rounded-full">
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-8 md:p-12">
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <ReactMarkdown>{TERMO_CIENCIA_COMPLETO}</ReactMarkdown>
                </div>
              </div>
              <div className="p-6 border-t bg-muted/30 flex justify-center">
                <Button 
                  onClick={() => setShowFull(false)}
                  className="px-10 rounded-xl font-black"
                >
                  FECHAR E VOLTAR
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
