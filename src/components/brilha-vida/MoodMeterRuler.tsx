import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { useMoodRecorder } from "./shared/moodLog";

/**
 * Mood Meter (Marc Brackett / Yale Center for Emotional Intelligence — RULER)
 * Plano cartesiano de emoções: eixo X = agradável/desagradável,
 * eixo Y = energia alta/baixa. Vocabulário emocional expandido
 * (25 emoções por cor+quadrante) para superar o limite dos "6 básicos".
 *
 * Método RULER: Recognizing → Understanding → Labeling → Expressing → Regulating.
 */

type Quadrante = "vermelho" | "amarelo" | "azul" | "verde";

interface Emocao {
  nome: string;
  x: number; // 0-100 desagradável→agradável
  y: number; // 0-100 baixa energia→alta energia
  quadrante: Quadrante;
}

const EMOCOES: Emocao[] = [
  // Vermelho: alta energia + desagradável
  { nome: "Furioso(a)", x: 10, y: 92, quadrante: "vermelho" },
  { nome: "Aterrorizado(a)", x: 8, y: 85, quadrante: "vermelho" },
  { nome: "Ansioso(a)", x: 22, y: 78, quadrante: "vermelho" },
  { nome: "Frustrado(a)", x: 25, y: 70, quadrante: "vermelho" },
  { nome: "Preocupado(a)", x: 30, y: 62, quadrante: "vermelho" },
  { nome: "Nervoso(a)", x: 18, y: 88, quadrante: "vermelho" },
  { nome: "Estressado(a)", x: 15, y: 72, quadrante: "vermelho" },
  // Amarelo: alta energia + agradável
  { nome: "Animado(a)", x: 80, y: 88, quadrante: "amarelo" },
  { nome: "Feliz", x: 88, y: 75, quadrante: "amarelo" },
  { nome: "Alegre", x: 92, y: 82, quadrante: "amarelo" },
  { nome: "Empolgado(a)", x: 75, y: 92, quadrante: "amarelo" },
  { nome: "Orgulhoso(a)", x: 85, y: 68, quadrante: "amarelo" },
  { nome: "Confiante", x: 78, y: 62, quadrante: "amarelo" },
  { nome: "Curioso(a)", x: 70, y: 78, quadrante: "amarelo" },
  // Azul: baixa energia + desagradável
  { nome: "Triste", x: 22, y: 25, quadrante: "azul" },
  { nome: "Desanimado(a)", x: 25, y: 18, quadrante: "azul" },
  { nome: "Sozinho(a)", x: 18, y: 28, quadrante: "azul" },
  { nome: "Cansado(a)", x: 32, y: 12, quadrante: "azul" },
  { nome: "Entediado(a)", x: 35, y: 22, quadrante: "azul" },
  { nome: "Decepcionado(a)", x: 28, y: 32, quadrante: "azul" },
  // Verde: baixa energia + agradável
  { nome: "Calmo(a)", x: 78, y: 25, quadrante: "verde" },
  { nome: "Tranquilo(a)", x: 82, y: 18, quadrante: "verde" },
  { nome: "Grato(a)", x: 88, y: 32, quadrante: "verde" },
  { nome: "Seguro(a)", x: 75, y: 28, quadrante: "verde" },
  { nome: "Amado(a)", x: 90, y: 35, quadrante: "verde" },
  { nome: "Sereno(a)", x: 85, y: 15, quadrante: "verde" },
  { nome: "Satisfeito(a)", x: 80, y: 38, quadrante: "verde" },
];

const CORES: Record<Quadrante, { fill: string; bg: string; label: string }> = {
  vermelho: { fill: "#ef4444", bg: "from-red-100 to-red-200", label: "Alta energia · desagradável" },
  amarelo: { fill: "#eab308", bg: "from-yellow-100 to-yellow-200", label: "Alta energia · agradável" },
  azul: { fill: "#3b82f6", bg: "from-blue-100 to-blue-200", label: "Baixa energia · desagradável" },
  verde: { fill: "#22c55e", bg: "from-emerald-100 to-emerald-200", label: "Baixa energia · agradável" },
};

// RULER: cada emoção ganha causa provável + estratégia
const CONTEXTO: Record<Quadrante, { causa: string; regular: string }> = {
  vermelho: {
    causa: "Algo importante foi bloqueado, ameaçou ou passou dos limites.",
    regular: "Corpo em alerta → precisa DESCARREGAR: respirar longo, apertar almofada, sair do estímulo.",
  },
  amarelo: {
    causa: "Você conquistou, recebeu ou está prestes a viver algo bom.",
    regular: "Corpo com muita energia boa → aproveite, mas cuide para não superestimular. Momento ótimo para criar.",
  },
  azul: {
    causa: "Você perdeu algo, se cansou ou algo não saiu como esperava.",
    regular: "Corpo devagar → precisa ATIVAR: mover, hidratar, buscar contato afetivo. Não force felicidade.",
  },
  verde: {
    causa: "Suas necessidades estão atendidas: descanso, afeto, segurança.",
    regular: "Ideal para aprender, se conectar e ajudar. Preserve esse estado escolhendo bem o próximo passo.",
  },
};

export function MoodMeterRuler({ onClose }: { onClose: () => void }) {
  const [selecionada, setSelecionada] = useState<Emocao | null>(null);
  const [etapa, setEtapa] = useState<"reconhecer" | "entender" | "expressar">("reconhecer");
  const [nota, setNota] = useState("");
  const recordMood = useMoodRecorder();

  const quadranteBg = selecionada ? CORES[selecionada.quadrante].bg : "from-slate-50 to-white";

  const legendaEixos = useMemo(
    () => (
      <>
        <div className="absolute left-1/2 -translate-x-1/2 -top-5 text-[10px] font-black text-slate-500 uppercase">
          ↑ Muita energia
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 text-[10px] font-black text-slate-500 uppercase">
          Pouca energia ↓
        </div>
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-black text-slate-500 uppercase">
          ← Desagradável
        </div>
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-black text-slate-500 uppercase">
          Agradável →
        </div>
      </>
    ),
    []
  );

  return (
    <div
      className={`relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden transition-colors duration-500 bg-gradient-to-b ${quadranteBg}`}
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Medidor de Emoções</h2>
      <p className="text-sm text-slate-600 font-medium mb-4 text-center max-w-md">
        {etapa === "reconhecer" && "Toque no ponto que combina com como você está agora."}
        {etapa === "entender" && "Vamos entender essa emoção."}
        {etapa === "expressar" && "Escreva com suas palavras (ou fale com um adulto)."}
      </p>

      {etapa === "reconhecer" && (
        <div className="relative w-full max-w-md aspect-square my-6">
          {legendaEixos}
          {/* Quadrantes */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <div className="bg-red-400/70" />
            <div className="bg-yellow-400/70" />
            <div className="bg-blue-400/70" />
            <div className="bg-emerald-400/70" />
          </div>
          {/* Emoções */}
          {EMOCOES.map((e) => (
            <button
              key={e.nome}
              onClick={() => {
                setSelecionada(e);
                setEtapa("entender");
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-[10px] font-black bg-white/90 hover:bg-white text-slate-800 px-2 py-1 rounded-full shadow-md border-2 border-white hover:scale-110 transition-transform"
              style={{
                left: `${e.x}%`,
                top: `${100 - e.y}%`, // y invertido (topo = alta energia)
              }}
            >
              {e.nome}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {etapa === "entender" && selecionada && (
          <motion.div
            key="entender"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-md bg-white rounded-3xl p-5 shadow-lg border-4"
            style={{ borderColor: CORES[selecionada.quadrante].fill }}
          >
            <div className="text-center mb-4">
              <div
                className="inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full text-white mb-2"
                style={{ background: CORES[selecionada.quadrante].fill }}
              >
                {CORES[selecionada.quadrante].label}
              </div>
              <div className="font-black text-3xl text-slate-800">{selecionada.nome}</div>
            </div>

            <div className="mb-3">
              <div className="text-xs font-bold text-slate-500 uppercase mb-1">Por que isso pode estar acontecendo:</div>
              <p className="text-sm text-slate-700 font-medium">{CONTEXTO[selecionada.quadrante].causa}</p>
            </div>

            <div className="mb-4 p-3 bg-slate-50 rounded-2xl">
              <div className="text-xs font-bold text-slate-500 uppercase mb-1">Como se regular:</div>
              <p className="text-sm text-slate-700 font-medium">{CONTEXTO[selecionada.quadrante].regular}</p>
            </div>

            <button
              onClick={() => setEtapa("expressar")}
              className="w-full py-3 rounded-2xl font-black text-white shadow-lg"
              style={{ background: CORES[selecionada.quadrante].fill }}
            >
              Expressar com minhas palavras →
            </button>
          </motion.div>
        )}

        {etapa === "expressar" && selecionada && (
          <motion.div
            key="expressar"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-md bg-white rounded-3xl p-5 shadow-lg border-4"
            style={{ borderColor: CORES[selecionada.quadrante].fill }}
          >
            <div className="text-center mb-4 font-black text-slate-800 text-xl">
              Eu me sinto <span style={{ color: CORES[selecionada.quadrante].fill }}>{selecionada.nome.toLowerCase()}</span> porque…
            </div>
            <textarea
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              rows={5}
              placeholder="Escreva ou peça pra um adulto escrever com você."
              className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-primary focus:outline-none font-medium text-slate-800 resize-none"
            />
            <p className="text-xs text-slate-500 font-medium mt-2 text-center">
              Nomear a emoção diminui a intensidade dela em até 40% (Lieberman et al., 2007).
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3 flex-wrap justify-center">
        {selecionada && (
          <button
            onClick={() => {
              setSelecionada(null);
              setEtapa("reconhecer");
              setNota("");
            }}
            className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
          >
            <ArrowLeft size={16} /> Escolher outra
          </button>
        )}
        <button
          onClick={onClose}
          className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
        >
          Pronto
        </button>
      </div>

      <div className="mt-4 text-[10px] text-slate-500 font-medium text-center max-w-md">
        Base clínica: Mood Meter · RULER Approach (Marc Brackett, Yale Center for
        Emotional Intelligence). Vocabulário emocional expandido baseado no modelo
        circumplexo de Russell (1980).
      </div>
    </div>
  );
}
