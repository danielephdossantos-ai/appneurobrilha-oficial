import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import type { QuizItem, Aula } from "../../types";

type Resultado = "dominio" | "parcial" | "revisao";

export function Diagnostico({
  aula,
  onFinish,
}: {
  aula: Aula;
  onFinish: (r: { acertos: number; total: number; resultado: Resultado }) => void;
}) {
  const perguntas: QuizItem[] = aula.diagnostico ?? [];
  const [iniciado, setIniciado] = useState(false);
  const [idx, setIdx] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [respondeu, setRespondeu] = useState(false);
  const [terminou, setTerminou] = useState(false);

  const total = perguntas.length;

  function responder(i: number) {
    if (respondeu) return;
    const acertou = i === perguntas[idx].correta;
    setEscolha(i);
    setRespondeu(true);
    if (acertou) setAcertos((n) => n + 1);
  }

  function proxima() {
    if (idx < total - 1) {
      setIdx(idx + 1);
      setEscolha(null);
      setRespondeu(false);
    } else {
      setTerminou(true);
    }
  }

  function classificar(a: number): Resultado {
    const pct = total > 0 ? a / total : 1;
    if (pct >= 0.8) return "dominio";
    if (pct >= 0.5) return "parcial";
    return "revisao";
  }

  // Tela inicial
  if (!iniciado) {
    return (
      <div className="space-y-4">
        <div className="rounded-3xl bg-white/10 border-2 border-white/15 p-5">
          <div className="flex items-center gap-2 text-[#FFC93C] mb-2">
            <Sparkles className="h-5 w-5" />
            <div className="text-[11px] font-black uppercase tracking-widest">
              Diagnóstico Rápido
            </div>
          </div>
          <h2 className="text-xl font-black leading-tight mb-2">
            Vamos ver o que você já sabe?
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Antes de começar a aula, {total} perguntinha{total > 1 ? "s" : ""} rápida
            {total > 1 ? "s" : ""} pra medir seus superpoderes. Se você já dominar, pode
            avançar direto. Se não, a gente faz uma revisão rápida junto.
          </p>
        </div>

        {aula.conhecimentosPrevios && aula.conhecimentosPrevios.length > 0 && (
          <div className="rounded-2xl bg-[#0d1f55] border-2 border-white/10 p-4">
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-2">
              O que já é bom saber
            </div>
            <ul className="space-y-1.5 text-sm text-white/90">
              {aula.conhecimentosPrevios.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#FFC93C]">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => setIniciado(true)}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black text-base flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          Começar diagnóstico <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    );
  }

  // Resultado + revisão automática se necessário
  if (terminou) {
    const resultado = classificar(acertos);
    const passou = resultado === "dominio";
    const parcial = resultado === "parcial";

    return (
      <div className="space-y-4">
        <div
          className={`rounded-3xl border-2 p-5 ${
            passou
              ? "bg-emerald-500/15 border-emerald-400/40"
              : parcial
                ? "bg-amber-500/15 border-amber-400/40"
                : "bg-rose-500/15 border-rose-400/40"
          }`}
        >
          <div className="text-[11px] font-black uppercase tracking-widest opacity-70 mb-1">
            Resultado
          </div>
          <div className="text-2xl font-black mb-1">
            {acertos} de {total} acertos
          </div>
          <p className="text-sm opacity-90 leading-relaxed">
            {passou
              ? "Show! Você já domina o essencial. Bora avançar direto pra aula."
              : parcial
                ? "Você já sabe uma parte. Vamos dar uma olhada rápida no que falta antes de começar."
                : "Tudo bem! A gente vai revisar juntos antes de começar — assim a aula fica bem mais fácil."}
          </p>
        </div>

        {!passou && (
          <div className="rounded-2xl bg-white/10 border-2 border-white/15 p-4">
            <div className="flex items-center gap-2 mb-2 text-[#FFC93C]">
              <BookOpen className="h-4 w-4" />
              <div className="text-[10px] font-black uppercase tracking-widest">
                Revisão automática
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/90">
              {aula.conhecimentosPrevios?.map((c, i) => (
                <div key={`c-${i}`} className="flex gap-2">
                  <span className="text-[#FFC93C]">•</span>
                  <span>{c}</span>
                </div>
              ))}
              {aula.revisao.pontos.slice(0, 3).map((p, i) => (
                <div key={`p-${i}`} className="flex gap-2">
                  <span className="text-[#FFC93C]">✓</span>
                  <span>{p}</span>
                </div>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10 text-white/80 italic">
                Dica: {aula.revisao.dica}
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => onFinish({ acertos, total, resultado })}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black text-base flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          {passou ? "Avançar pra aula" : "Começar a aula"} <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    );
  }

  // Pergunta atual
  const q = perguntas[idx];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/60">
        <span>Pergunta {idx + 1} de {total}</span>
        <span>Acertos: {acertos}</span>
      </div>

      <div className="rounded-3xl bg-white/10 border-2 border-white/15 p-5">
        <h3 className="text-lg font-black leading-snug mb-4">{q.pergunta}</h3>
        <div className="space-y-2">
          {q.opcoes.map((op, i) => {
            const certa = i === q.correta;
            const escolhida = i === escolha;
            const cor = !respondeu
              ? "bg-white/10 border-white/15"
              : certa
                ? "bg-emerald-500/25 border-emerald-400/60"
                : escolhida
                  ? "bg-rose-500/25 border-rose-400/60"
                  : "bg-white/5 border-white/10 opacity-60";
            return (
              <motion.button
                key={i}
                whileTap={{ scale: 0.98 }}
                onClick={() => responder(i)}
                disabled={respondeu}
                className={`w-full text-left px-4 py-3 rounded-2xl border-2 font-bold text-sm flex items-center gap-3 ${cor}`}
              >
                <span className="flex-1">{op}</span>
                {respondeu && certa && <CheckCircle2 className="h-5 w-5 text-emerald-300" />}
                {respondeu && escolhida && !certa && (
                  <XCircle className="h-5 w-5 text-rose-300" />
                )}
              </motion.button>
            );
          })}
        </div>
        {respondeu && (
          <div className="mt-3 text-sm text-white/85 bg-[#0d1f55] rounded-xl p-3 border border-white/10">
            {q.explicacao}
          </div>
        )}
      </div>

      {respondeu && (
        <button
          onClick={proxima}
          className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          {idx < total - 1 ? "Próxima" : "Ver resultado"} <ArrowRight className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
