import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Sparkles, ArrowRight, CheckCircle2, XCircle, HeartHandshake } from "lucide-react";
import type { Aula, QuizItem } from "../types";

/**
 * Painel Adaptativo — aparece quando a criança apresenta dificuldade
 * detectada em `personalizacao.ts`. Fluxo obrigatório em 3 etapas
 * antes de devolver o controle ao conteúdo principal:
 *
 *  1) Nova explicação — usa o próximo nível de `explicacoesNiveis` (ou
 *     o texto principal se não houver) reformulado com linguagem mais
 *     simples.
 *  2) Outro exemplo — mostra o exemploResolvido em passos ou o nivel2
 *     das explicações (novo exemplo do cotidiano).
 *  3) Atividade mais simples — uma questão fácil (do próprio nível
 *     fácil da aula) com dica visível; ao acertar, libera "voltar".
 *
 * Nenhuma criança é forçada a avançar — o painel só fecha depois de
 * concluir as três etapas OU se ela optar por "quero tentar de novo".
 */
export function PainelAdaptativo({
  aula,
  motivo,
  onFechar,
}: {
  aula: Aula;
  motivo?: string;
  onFechar: () => void;
}) {
  const [etapa, setEtapa] = useState<0 | 1 | 2>(0);

  // Escolhe uma explicação mais simples que exista e seja diferente
  const explicacoes = useMemo(() => {
    const src = aula.explicacoesNiveis ?? {};
    const lista = [src.nivel1, aula.explicacao, src.nivel2, src.nivel3, src.nivel4]
      .filter((s): s is string => !!s && s.trim().length > 0);
    // remove duplicados preservando ordem
    return Array.from(new Set(lista));
  }, [aula]);

  const novaExplicacao = explicacoes[Math.min(1, explicacoes.length - 1)] ?? aula.explicacao;
  const outroExemplo =
    aula.explicacoesNiveis?.nivel2 ??
    aula.exemploResolvido?.enunciado ??
    "Vamos ver de novo com um exemplo do dia a dia.";

  const questaoSimples: QuizItem | null =
    aula.niveis?.facil?.[0] ??
    (aula.quiz?.length ? aula.quiz[0] : null);

  const mensagemMotivo =
    motivo === "erros_seguidos"
      ? "Percebi que os últimos ficaram difíceis — vamos com calma."
      : motivo === "tempo_alto"
        ? "Sem pressa! Vamos revisar de um jeito mais leve."
        : motivo === "muitas_tentativas"
          ? "Vamos tentar de outro jeito, do começo, bem devagar."
          : "Vamos revisar juntos, no seu ritmo.";

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-end sm:items-center justify-center p-3">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#1a2870] to-[#0d1f55] border-2 border-white/20 shadow-2xl p-4 text-white"
      >
        <div className="flex items-center gap-2 mb-2">
          <HeartHandshake className="h-5 w-5 text-[#FFC93C]" />
          <div className="text-[10px] uppercase tracking-widest font-black text-white/70">
            Ensino personalizado
          </div>
        </div>
        <div className="text-sm text-white/80 mb-3">{mensagemMotivo}</div>

        {/* trilha das 3 etapas */}
        <div className="flex items-center gap-1 mb-4">
          {[0, 1, 2].map((n) => (
            <div
              key={n}
              className={`h-1.5 flex-1 rounded-full ${
                n <= etapa ? "bg-[#FFC93C]" : "bg-white/15"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {etapa === 0 && (
            <motion.section
              key="e0"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              className="rounded-2xl bg-white/10 border border-white/15 p-3"
            >
              <div className="flex items-center gap-2 mb-2 text-[#FFC93C] font-black">
                <Lightbulb className="h-4 w-4" /> Nova explicação
              </div>
              <p className="text-sm leading-relaxed">{novaExplicacao}</p>
              <button
                onClick={() => setEtapa(1)}
                className="mt-3 w-full h-10 rounded-xl bg-white text-[#0d1f55] font-black flex items-center justify-center gap-2"
              >
                Entendi <ArrowRight className="h-4 w-4" />
              </button>
            </motion.section>
          )}

          {etapa === 1 && (
            <motion.section
              key="e1"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              className="rounded-2xl bg-white/10 border border-white/15 p-3"
            >
              <div className="flex items-center gap-2 mb-2 text-[#4C9EFF] font-black">
                <Sparkles className="h-4 w-4" /> Outro exemplo
              </div>
              <p className="text-sm leading-relaxed">{outroExemplo}</p>
              {aula.exemploResolvido?.passos?.length ? (
                <ol className="mt-2 space-y-1 text-sm list-decimal list-inside text-white/85">
                  {aula.exemploResolvido.passos.slice(0, 3).map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ol>
              ) : null}
              <button
                onClick={() => setEtapa(2)}
                className="mt-3 w-full h-10 rounded-xl bg-white text-[#0d1f55] font-black flex items-center justify-center gap-2"
              >
                Vamos praticar <ArrowRight className="h-4 w-4" />
              </button>
            </motion.section>
          )}

          {etapa === 2 && (
            <AtividadeSimples
              key="e2"
              questao={questaoSimples}
              onConcluir={onFechar}
            />
          )}
        </AnimatePresence>

        <button
          onClick={onFechar}
          className="mt-3 w-full text-[11px] text-white/60 underline"
        >
          Pular apoio e voltar
        </button>
      </motion.div>
    </div>
  );
}

function AtividadeSimples({
  questao,
  onConcluir,
}: {
  questao: QuizItem | null;
  onConcluir: () => void;
}) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const [mostrarDica, setMostrarDica] = useState(false);

  if (!questao) {
    return (
      <motion.section
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        className="rounded-2xl bg-white/10 border border-white/15 p-3"
      >
        <p className="text-sm">Você já pode voltar ao conteúdo — no seu ritmo.</p>
        <button
          onClick={onConcluir}
          className="mt-3 w-full h-10 rounded-xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black"
        >
          Voltar à aula
        </button>
      </motion.section>
    );
  }

  const acertou = escolha !== null && escolha === questao.correta;

  return (
    <motion.section
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-2xl bg-white/10 border border-white/15 p-3"
    >
      <div className="flex items-center gap-2 mb-2 text-[#34D399] font-black">
        <CheckCircle2 className="h-4 w-4" /> Atividade mais simples
      </div>
      <p className="font-black mb-2">{questao.pergunta}</p>
      <div className="space-y-2">
        {questao.opcoes.map((op, k) => {
          const revelado = escolha !== null;
          const certa = k === questao.correta;
          const sel = escolha === k;
          return (
            <button
              key={k}
              disabled={revelado}
              onClick={() => setEscolha(k)}
              className={`w-full text-left px-3 py-2 rounded-xl font-black flex items-center justify-between ${
                revelado
                  ? certa
                    ? "bg-[#22C55E] text-[#0d1f55]"
                    : sel
                      ? "bg-[#EF4444] text-white"
                      : "bg-white/15 text-white/70"
                  : "bg-white text-[#0d1f55]"
              }`}
            >
              <span>{op}</span>
              {revelado && certa && <CheckCircle2 className="h-4 w-4" />}
              {revelado && sel && !certa && <XCircle className="h-4 w-4" />}
            </button>
          );
        })}
      </div>

      {escolha !== null && (
        <div className="mt-2 text-sm rounded-xl bg-white/10 p-2 border border-white/15">
          {questao.explicacao}
        </div>
      )}

      {!mostrarDica && escolha === null && (
        <button
          onClick={() => setMostrarDica(true)}
          className="mt-2 text-[11px] text-[#FFC93C] font-black underline"
        >
          Quero uma dica
        </button>
      )}
      {mostrarDica && escolha === null && (
        <div className="mt-2 text-xs rounded-xl bg-[#FFC93C]/15 border border-[#FFC93C]/30 p-2">
          Lembre da explicação: leia com calma e escolha a opção que parece
          mais próxima do exemplo que acabamos de ver.
        </div>
      )}

      {escolha !== null && (
        <button
          onClick={onConcluir}
          className="mt-3 w-full h-10 rounded-xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black"
        >
          {acertou ? "Boa! Voltar à aula" : "Voltar e tentar de novo"}
        </button>
      )}
    </motion.section>
  );
}
