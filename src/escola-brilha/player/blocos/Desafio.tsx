import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Eye, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { Secao } from "./Secao";
import { CenaDuplaView, CenaEntreView } from "./CenaPosicao";
import type { Aula, QuizItem } from "../../types";

const CORES = ["#34D399", "#FB923C", "#F472B6", "#60A5FA", "#A78BFA", "#FBBF24"];

export function Desafio({ dados }: { dados: Aula["desafio"] }) {
  const [revelar, setRevelar] = useState(false);
  const visual = dados.visual;

  if (visual) {
    return (
      <Secao icon={Trophy} rotulo="Desafio" cor="#F97316">
        <p className="font-black mb-3">{dados.enunciado}</p>
        <QuizSequencial perguntas={visual.perguntas} cena={visual.cena} />
      </Secao>
    );
  }


  return (
    <Secao icon={Trophy} rotulo="Desafio" cor="#F97316">
      <p className="font-black mb-3">{dados.enunciado}</p>
      {!revelar ? (
        <button
          onClick={() => setRevelar(true)}
          className="w-full h-12 rounded-2xl bg-[#F97316] text-white font-black flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          <Eye className="h-4 w-4" /> Ver resposta
        </button>
      ) : (
        <div className="rounded-2xl bg-[#22C55E]/15 border-2 border-[#22C55E]/30 p-3">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#22C55E] mb-1">
            Resposta
          </div>
          <div className="font-black">{dados.resposta}</div>
        </div>
      )}
    </Secao>
  );
}

type CenaItem = NonNullable<NonNullable<Aula["desafio"]["visual"]>["cena"]>[number];

function QuizSequencial({ perguntas, cena }: { perguntas: QuizItem[]; cena?: CenaItem[] }) {
  const lista = perguntas;
  const [i, setI] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);
  const q = lista[i];

  function escolher(k: number) {
    if (escolha !== null) return;
    setEscolha(k);
    if (k === q.correta) setAcertos((n) => n + 1);
  }
  function avancar() {
    if (i + 1 < lista.length) {
      setI(i + 1);
      setEscolha(null);
    } else {
      setFim(true);
    }
  }
  function reiniciar() {
    setI(0);
    setEscolha(null);
    setAcertos(0);
    setFim(false);
  }

  if (fim) {
    const pct = Math.round((acertos / lista.length) * 100);
    return (
      <div className="rounded-2xl bg-white/10 p-4 text-center border-2 border-white/20">
        <div className="text-4xl mb-1">{pct >= 70 ? "🏆" : "💪"}</div>
        <div className="font-black text-lg mb-1">
          {acertos} / {lista.length} corretas ({pct}%)
        </div>
        <button
          onClick={reiniciar}
          className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0d1f55] font-black"
        >
          Tentar de novo
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/10 border-2 border-white/20 p-3">
      <div className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-2">
        Pergunta {i + 1} de {lista.length}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          <p className="font-black mb-3">{q.pergunta}</p>
          {q.visual && <PerguntaVisual visual={q.visual} />}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {q.opcoes.map((op, k) => {
              const revelado = escolha !== null;
              const certa = k === q.correta;
              const sel = escolha === k;
              // Extrai o primeiro emoji do texto (pra criança que não lê)
              const emojiMatch = op.match(/^\s*(\p{Extended_Pictographic}(?:\uFE0F)?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F)?)*)/u);
              const emoji = emojiMatch ? emojiMatch[1] : "";
              const texto = emoji ? op.replace(emojiMatch![0], "").trim() : op;
              return (
                <button
                  key={k}
                  onClick={() => escolher(k)}
                  disabled={revelado}
                  aria-label={op}
                  className={`w-full rounded-2xl p-3 font-black flex flex-col items-center justify-center gap-1 min-h-[110px] border-4 transition-transform active:scale-[0.97] ${
                    revelado
                      ? certa
                        ? "bg-[#22C55E] text-[#0d1f55] border-[#16A34A]"
                        : sel
                          ? "bg-[#EF4444] text-white border-[#B91C1C]"
                          : "bg-white/15 text-white/70 border-white/20"
                      : "bg-white text-[#0d1f55] border-white hover:border-[#FFC93C]"
                  }`}
                >
                  {emoji && (
                    <span className="text-5xl leading-none" aria-hidden="true">
                      {emoji}
                    </span>
                  )}
                  {texto && <span className="text-sm text-center">{texto}</span>}
                  {revelado && certa && <CheckCircle2 className="h-5 w-5" />}
                  {revelado && sel && !certa && <XCircle className="h-5 w-5" />}
                </button>
              );
            })}
          </div>
          {escolha !== null && (
            <div className="mt-3 rounded-xl bg-white/10 p-2 text-sm border border-white/15 flex gap-2 items-start">
              <Sparkles className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{q.explicacao}</span>
            </div>
          )}
          {escolha !== null && (
            <button
              onClick={avancar}
              className="mt-3 w-full h-10 rounded-xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black"
            >
              {i + 1 < lista.length ? "Próxima" : "Ver resultado"}
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function PerguntaVisual({ visual }: { visual: NonNullable<QuizItem["visual"]> }) {
  if (visual.tipo === "cena") {
    return (
      <div className="mb-3">
        <CenaDuplaView spec={visual} compact />
      </div>
    );
  }
  if (visual.tipo === "cenaEntre") {
    return (
      <div className="mb-3">
        <CenaEntreView spec={visual} compact />
      </div>
    );
  }
  if (visual.tipo === "itens") {
    return (
      <div className="mb-3 flex flex-wrap justify-center gap-2 rounded-2xl bg-white/10 border border-white/15 p-3">
        {Array.from({ length: visual.quantidade }).map((_, i) => (
          <img key={i} src={visual.imagemUrl} alt="" className="h-10 w-10 object-contain drop-shadow" />
        ))}
      </div>
    );
  }
  if (visual.tipo === "grupos") {
    return (
      <div className="mb-3 grid gap-2 grid-cols-2 sm:grid-cols-3">
        {visual.grupos.map((g, i) => (
          <div
            key={i}
            className="rounded-2xl p-2 border-2 bg-white/10"
            style={{ borderColor: g.cor ?? "#4C9EFF" }}
          >
            {g.rotulo && (
              <p className="text-center text-[10px] font-black uppercase tracking-wide text-white mb-1">
                {g.rotulo}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-1">
              {Array.from({ length: g.quantidade }).map((_, k) => (
                <img key={k} src={g.imagemUrl} alt="" className="h-8 w-8 object-contain" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  // comparar
  return (
    <div className="mb-3 grid gap-2 grid-cols-2">
      {visual.lados.map((l, i) => (
        <div
          key={i}
          className="rounded-2xl p-2 border-2 bg-white/10"
          style={{ borderColor: l.cor ?? "#4C9EFF" }}
        >
          <p className="text-center text-[10px] font-black uppercase tracking-wide text-white mb-1">
            {l.rotulo}
          </p>
          <div className="flex flex-wrap justify-center gap-1">
            {Array.from({ length: l.quantidade }).map((_, k) => (
              <img key={k} src={l.imagemUrl} alt="" className="h-8 w-8 object-contain" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

