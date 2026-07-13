import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { GraduationCap, Loader2 } from "lucide-react";
import { explicarErroAtividade } from "@/lib/groq-professor.functions";

type Modulo =
  | "reforco-brilha"
  | "jornada-365"
  | "missao-prova"
  | "missao-trabalho";

interface Props {
  pergunta: string;
  gabarito: string;
  respostaErrada: string;
  bnccCode?: string;
  idade?: number;
  modulo?: Modulo;
}

/**
 * Só renderiza quando há erro. Chama o Professor Brilho (Groq)
 * para gerar uma explicação curta e pedagógica para a dificuldade.
 */
export function ProfessorBrilhaErroExplainer(props: Props) {
  const explicarFn = useServerFn(explicarErroAtividade);
  const [reply, setReply] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setReply(null);
    setError(null);
    explicarFn({ data: props })
      .then(async (r) => {
        if (cancelled) return;
        if (r.ok) setReply(r.reply);
        else {
          setError(r.error ?? "Não consegui pensar agora.");
          const motivo = (r.error === "creditos" || r.error === "limite") ? r.error : "erro";
          const { notificarErroIA } = await import("@/lib/notify-ai-error");
          notificarErroIA(motivo, "Professor");
        }
      })
      .catch(() => !cancelled && setError("Falha ao chamar o Professor."))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.pergunta, props.gabarito, props.respostaErrada]);

  return (
    <div className="mt-3 rounded-2xl border-2 border-amber-200 bg-amber-50 p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-8 w-8 rounded-full bg-amber-500 text-white grid place-items-center">
          <GraduationCap className="h-4 w-4" />
        </div>
        <span className="font-black text-amber-800 text-sm">
          Professor Brilho
        </span>
      </div>
      {loading && (
        <div className="flex items-center gap-2 text-amber-700 text-sm">
          <Loader2 className="h-4 w-4 animate-spin" /> Pensando numa dica para você…
        </div>
      )}
      {error && !loading && (
        <p className="text-sm text-amber-800">
          Não consegui pensar numa dica agora. Tente de novo, você consegue! 💪
        </p>
      )}
      {reply && !loading && (
        <p className="text-sm text-amber-900 leading-relaxed whitespace-pre-wrap">
          {reply}
        </p>
      )}
    </div>
  );
}
