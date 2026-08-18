import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { TERMO_CIENCIA_VERSAO, TERMO_CIENCIA_COMPLETO } from "@/modules/legal/termo-ciencia";
import { Loader2, FileText, ChevronDown, ChevronUp, History } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface AcceptRecord {
  id: string;
  version: string;
  accepted_at: string;
  child_id: string;
  children: {
    nome: string;
  };
}

export function TermosHistorico() {
  const [history, setHistory] = useState<AcceptRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("parental_science_accepts")
        .select(`
          id, 
          version, 
          accepted_at, 
          child_id,
          children:child_id ( nome )
        `)
        .order("accepted_at", { ascending: false });

      if (!error && data) {
        setHistory(data as unknown as AcceptRecord[]);
      }
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <Loader2 className="animate-spin mx-auto" />;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <History className="w-5 h-5 text-primary" />
        <h3 className="font-black text-lg">Histórico de Termos Aceitos</h3>
      </div>

      {history.length === 0 ? (
        <p className="text-sm text-muted-foreground italic">Nenhum termo registrado ainda.</p>
      ) : (
        <div className="space-y-3">
          {history.map((record) => (
            <div key={record.id} className="border rounded-2xl overflow-hidden bg-card shadow-sm">
              <button
                onClick={() => setExpanded(expanded === record.id ? null : record.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm">Termo de Ciência v{record.version}</div>
                    <div className="text-[10px] text-muted-foreground uppercase font-black">
                      {record.children?.nome} · {new Date(record.accepted_at).toLocaleString('pt-BR')}
                    </div>
                  </div>
                </div>
                {expanded === record.id ? <ChevronUp /> : <ChevronDown />}
              </button>

              {expanded === record.id && (
                <div className="p-6 bg-muted/20 border-t">
                  <div className="prose prose-sm dark:prose-invert max-w-none bg-background p-6 rounded-xl border shadow-inner max-h-60 overflow-y-auto">
                    <ReactMarkdown>{TERMO_CIENCIA_COMPLETO}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
