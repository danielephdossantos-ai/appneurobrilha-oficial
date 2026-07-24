import { useState } from "react";
import { X, ArrowRight, RotateCcw, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { VozGuia } from "./shared/VozGuia";

/**
 * Guia de Crise / Meltdown — passo a passo para o cuidador durante um pico
 * emocional (birra x meltdown x shutdown). Baseado em:
 * - Ross Greene (CPS — Collaborative & Proactive Solutions)
 * - Dan Siegel ("connect before you correct")
 * - Porges (corregulação polivagal)
 */
type Passo = {
  titulo: string;
  fala: string;
  detalhe: string;
  evitar: string;
};

const PASSOS: Passo[] = [
  {
    titulo: "1. Você primeiro",
    fala: "Respire fundo. Você não pode acalmar o que você não consegue conter.",
    detalhe:
      "Respire 4-7-8 uma vez. Solte os ombros. Fale mais baixo do que a criança está gritando.",
    evitar: "❌ Não grite de volta. Cérebro em luta não escuta lógica.",
  },
  {
    titulo: "2. Segurança física",
    fala: "Afaste objetos duros, tire público e ofereça um espaço com menos estímulo.",
    detalhe:
      "Se houver risco físico, contenha com o corpo lateralmente (nunca de frente/prensando peito).",
    evitar: "❌ Não isole trancando em quarto. Fique por perto, em silêncio se preciso.",
  },
  {
    titulo: "3. Conecte antes de corrigir",
    fala: "Abaixe até a altura dos olhos e valide: 'Eu vejo que você está muito bravo. Estou aqui.'",
    detalhe:
      "Poucas palavras. Tom baixo. Sem 'por quê' ou 'já falei'. O córtex frontal está offline.",
    evitar: "❌ Não faça perguntas complexas. Não ameace ('vai perder o tablet').",
  },
  {
    titulo: "4. Regulação sensorial",
    fala: "Ofereça pressão profunda, água gelada, ou um lugar escuro/silencioso.",
    detalhe:
      "Abraço apertado (se aceita toque), colete pesado, fone abafador, banho morno — o que já funcionou antes.",
    evitar: "❌ Não force toque se ela empurra. Meltdown ≠ birra, ela não escolheu isso.",
  },
  {
    titulo: "5. Espere a onda passar",
    fala: "Fique em silêncio ao lado. A média de um pico é 10–20 minutos.",
    detalhe: "Não tente ensinar nada agora. Aguarde a respiração normalizar e o corpo relaxar.",
    evitar: "❌ Não dê sermão logo depois. O aprendizado vem quando estiver calma.",
  },
  {
    titulo: "6. Reparação (depois)",
    fala: "Já calma, converse: 'O que foi tão difícil? Como a gente pode fazer diferente?'",
    detalhe:
      "Use o Plano B do CPS: identifique o gatilho, valide o sentimento, resolva junto o problema.",
    evitar: "❌ Não pule direto para castigo. Meltdown quer ser entendido, não punido.",
  },
];

export function GuiaCrise({ onClose }: { onClose: () => void }) {
  const [passo, setPasso] = useState(0);
  const [feito, setFeito] = useState<boolean[]>(Array(PASSOS.length).fill(false));

  const marcar = () => {
    const novo = [...feito];
    novo[passo] = true;
    setFeito(novo);
    if (passo < PASSOS.length - 1) setPasso(passo + 1);
  };

  const reiniciar = () => {
    setPasso(0);
    setFeito(Array(PASSOS.length).fill(false));
  };

  const p = PASSOS[passo];
  const tudoFeito = feito.every(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-black tracking-wider text-rose-600">GUIA DE EMERGÊNCIA</p>
            <h1 className="text-2xl font-black text-slate-800">Guia de Crise</h1>
            <p className="text-sm text-slate-500">Passo a passo durante um meltdown</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-white shadow" aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-1">
            {PASSOS.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded-full ${
                  feito[i] ? "bg-emerald-500" : i === passo ? "bg-rose-500" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
          <VozGuia texto={`${p.titulo}. ${p.fala}`} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={passo}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="bg-white rounded-3xl border-2 border-rose-100 shadow-lg p-6"
          >
            <h2 className="text-2xl font-black text-slate-800 mb-2">{p.titulo}</h2>
            <p className="text-lg font-bold text-rose-700 leading-snug mb-4">"{p.fala}"</p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-xl mb-3">
              <p className="text-sm text-amber-900">
                <b>Como fazer:</b> {p.detalhe}
              </p>
            </div>
            <div className="bg-rose-50 border-l-4 border-rose-400 p-3 rounded-r-xl">
              <p className="text-sm text-rose-900">{p.evitar}</p>
            </div>

            <div className="mt-6 flex gap-2">
              {tudoFeito ? (
                <button
                  onClick={reiniciar}
                  className="flex-1 py-3 rounded-2xl bg-slate-800 text-white font-black inline-flex items-center justify-center gap-2"
                >
                  <RotateCcw size={16} /> Recomeçar
                </button>
              ) : (
                <button
                  onClick={marcar}
                  className="flex-1 py-3 rounded-2xl bg-rose-600 text-white font-black inline-flex items-center justify-center gap-2"
                >
                  {passo === PASSOS.length - 1 ? (
                    <>
                      <CheckCircle2 size={18} /> Finalizar
                    </>
                  ) : (
                    <>
                      Fiz este passo <ArrowRight size={18} />
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {tudoFeito && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 rounded-2xl bg-emerald-500 text-white text-center font-bold shadow-lg"
          >
            💚 Você fez um trabalho enorme. Cuide de você agora — Kit do Cuidador.
          </motion.div>
        )}

        <p className="mt-6 text-center text-xs text-slate-400">
          Base: Ross Greene (CPS), Dan Siegel, Stephen Porges
        </p>
      </div>
    </div>
  );
}
