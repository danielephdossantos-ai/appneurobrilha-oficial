import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, XCircle, Loader2, Sparkles } from "lucide-react";
import {
  gerarQuizMissaoProva,
  type QuizQuestion,
} from "@/lib/groq-professor.functions";
import { ProfessorBrilhaErroExplainer } from "./ProfessorBrilhaErroExplainer";

interface Props {
  topico: string;
  materia: string;
  idade?: number;
  bnccCode?: string;
  onTodasRespondidas?: (acertos: number, total: number) => void;
}

/**
 * Mini-simulado da Missão Prova. O Professor Brilho só
 * aparece quando a criança erra uma questão.
 */
export function MissaoProvaQuiz({
  topico,
  materia,
  idade,
  bnccCode,
  onTodasRespondidas,
}: Props) {
  const gerarFn = useServerFn(gerarQuizMissaoProva);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [questoes, setQuestoes] = useState<QuizQuestion[]>([]);
  // por questão: índice escolhido (ou null)
  const [escolhas, setEscolhas] = useState<Array<number | null>>([]);

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    setErro(null);
    setQuestoes([]);
    setEscolhas([]);
    gerarFn({ data: { topico, materia, idade, bnccCode } })
      .then(async (r) => {
        if (cancel) return;
        if (r.ok && r.quiz) {
          setQuestoes(r.quiz.questoes);
          setEscolhas(new Array(r.quiz.questoes.length).fill(null));
        } else {
          setErro(r.error ?? "Não consegui montar o quiz agora.");
          const motivo = (r.error === "creditos" || r.error === "limite") ? r.error : "erro";
          const { notificarErroIA } = await import("@/lib/notify-ai-error");
          notificarErroIA(motivo, "Missão Prova");
        }
      })
      .catch(() => !cancel && setErro("Falha ao chamar o Professor."))
      .finally(() => !cancel && setLoading(false));
    return () => {
      cancel = true;
    };
  }, [topico, materia, idade, bnccCode]);

  useEffect(() => {
    if (!questoes.length) return;
    if (escolhas.every((e) => e !== null)) {
      const acertos = escolhas.reduce(
        (acc, esc, i) => acc + (esc === questoes[i].correta ? 1 : 0),
        0,
      );
      onTodasRespondidas?.(acertos, questoes.length);
    }
  }, [escolhas, questoes, onTodasRespondidas]);

  if (loading) {
    return (
      <div className="rounded-2xl border-2 border-indigo-100 bg-indigo-50/40 p-6 flex items-center gap-3 text-indigo-700">
        <Loader2 className="h-5 w-5 animate-spin" />
        <span className="font-bold text-sm">
          O Professor Brilho está montando seu simulado…
        </span>
      </div>
    );
  }

  if (erro || !questoes.length) {
    return (
      <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        Não consegui gerar o quiz agora. Continue revisando o material e tente
        de novo em alguns segundos.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-indigo-600" />
        <h4 className="font-black text-indigo-700 text-sm uppercase tracking-wider">
          Quiz Relâmpago — teste o que estudou
        </h4>
      </div>

      {questoes.map((q, qi) => {
        const escolha = escolhas[qi];
        const respondeu = escolha !== null;
        const acertou = respondeu && escolha === q.correta;

        return (
          <div
            key={qi}
            className="rounded-2xl border-2 border-slate-100 bg-white p-5 shadow-soft"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="h-7 w-7 rounded-full bg-indigo-600 text-white grid place-items-center font-black text-xs shrink-0">
                {qi + 1}
              </div>
              <p className="font-bold text-slate-800 leading-snug">
                {q.pergunta}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {q.alternativas.map((alt, ai) => {
                const ehEscolha = escolha === ai;
                const ehCorreta = ai === q.correta;
                let cls =
                  "text-left p-3 rounded-xl border-2 font-semibold text-sm transition-all";
                if (!respondeu) {
                  cls +=
                    " border-slate-200 hover:border-indigo-300 hover:bg-indigo-50";
                } else if (ehCorreta) {
                  cls += " border-emerald-400 bg-emerald-50 text-emerald-800";
                } else if (ehEscolha) {
                  cls += " border-rose-400 bg-rose-50 text-rose-800";
                } else {
                  cls += " border-slate-100 bg-slate-50 text-slate-500";
                }
                return (
                  <button
                    key={ai}
                    type="button"
                    disabled={respondeu}
                    onClick={() =>
                      setEscolhas((prev) => {
                        if (prev[qi] !== null) return prev;
                        const next = [...prev];
                        next[qi] = ai;
                        return next;
                      })
                    }
                    className={cls}
                  >
                    <span className="inline-flex items-center gap-2">
                      {respondeu && ehCorreta && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      )}
                      {respondeu && ehEscolha && !ehCorreta && (
                        <XCircle className="h-4 w-4 text-rose-600" />
                      )}
                      {alt}
                    </span>
                  </button>
                );
              })}
            </div>

            {respondeu && !acertou && (
              <ProfessorBrilhaErroExplainer
                modulo="missao-prova"
                pergunta={q.pergunta}
                gabarito={q.alternativas[q.correta]}
                respostaErrada={q.alternativas[escolha!]}
                bnccCode={bnccCode}
                idade={idade}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
