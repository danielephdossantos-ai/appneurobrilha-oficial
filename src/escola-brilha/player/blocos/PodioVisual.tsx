import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, CheckCircle2, XCircle } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

type Participante = {
  nome: string;
  imagemUrl: string;
  posicao: 1 | 2 | 3;
};

type Props = {
  pergunta: string;
  participantes: Participante[];
  respostaCerta: string;
  explicacao: string;
};

const MEDALHA_COR: Record<1 | 2 | 3, string> = {
  1: "#FBBF24", // ouro
  2: "#CBD5E1", // prata
  3: "#F59E0B", // bronze (tom quente)
};
const MEDALHA_LABEL: Record<1 | 2 | 3, string> = {
  1: "1º",
  2: "2º",
  3: "3º",
};
const MEDALHA_EMOJI: Record<1 | 2 | 3, string> = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

/**
 * Pódio visual (1º Ano). Mostra os participantes com imagens grandes do
 * Banco de Mídias e medalhas GIGANTES. A criança toca em quem chegou em
 * primeiro; o app confirma acerto ou explica o erro com voz.
 */
export function PodioVisual({
  pergunta,
  participantes,
  respostaCerta,
  explicacao,
}: Props) {
  const [escolhido, setEscolhido] = useState<string | null>(null);
  const acertou = escolhido === respostaCerta;

  // Ordena pelo pódio: 2º (esq), 1º (centro), 3º (dir) — pódio clássico.
  const ordemPodio: (1 | 2 | 3)[] = [2, 1, 3];
  const porPosicao = ordemPodio
    .map((pos) => participantes.find((p) => p.posicao === pos))
    .filter(Boolean) as Participante[];

  useEffect(() => () => stopSpeaking(), []);

  const falarPergunta = () => {
    stopSpeaking();
    speakChunked(pergunta, { rate: 0.95 });
  };

  const tocar = (p: Participante) => {
    if (escolhido) return;
    setEscolhido(p.nome);
    if (p.nome === respostaCerta) {
      speakChunked(
        `Isso mesmo! ${p.nome} chegou em primeiro lugar.`,
        { rate: 0.95 },
      );
    } else {
      speakChunked(
        `${p.nome} chegou em ${MEDALHA_LABEL[p.posicao]} lugar. Tente de novo!`,
        { rate: 0.95 },
      );
      // libera nova tentativa após 1.5s
      setTimeout(() => setEscolhido(null), 1500);
    }
  };

  return (
    <div className="rounded-3xl bg-white/95 text-[#0d1f55] p-4 sm:p-6 border-2 border-[#34D399]/40 shadow-inner">
      {/* Pergunta grande + voz */}
      <div className="flex items-start gap-3 mb-4">
        <button
          onClick={falarPergunta}
          aria-label="Ouvir a pergunta"
          className="h-12 w-12 shrink-0 rounded-2xl bg-[#34D399] text-white grid place-items-center active:scale-95 shadow"
        >
          <Volume2 className="h-6 w-6" />
        </button>
        <p className="text-2xl sm:text-3xl font-black leading-tight">{pergunta}</p>
      </div>

      {/* Pódio */}
      <div className="rounded-2xl bg-gradient-to-b from-[#E0F2FE] to-[#FEF3C7] border-2 border-[#0d1f55]/10 p-4 sm:p-6">
        <div className="flex items-end justify-center gap-3 sm:gap-6">
          {porPosicao.map((p) => {
            const alturaPodio =
              p.posicao === 1 ? "h-24 sm:h-32" : p.posicao === 2 ? "h-16 sm:h-24" : "h-12 sm:h-16";
            const foiEscolhido = escolhido === p.nome;
            const eCerto = foiEscolhido && p.nome === respostaCerta;
            const eErrado = foiEscolhido && p.nome !== respostaCerta;
            return (
              <div
                key={p.nome}
                className="flex flex-col items-center gap-2 flex-1 max-w-[160px]"
              >
                <motion.button
                  onClick={() => tocar(p)}
                  whileTap={{ scale: 0.92 }}
                  animate={
                    eCerto
                      ? { scale: [1, 1.15, 1], rotate: [0, -4, 4, 0] }
                      : eErrado
                        ? { x: [-6, 6, -6, 6, 0] }
                        : { scale: 1 }
                  }
                  transition={{ duration: 0.5 }}
                  className={`relative w-full aspect-square rounded-3xl bg-white p-2 shadow-lg border-4 active:scale-95 ${
                    eCerto
                      ? "border-[#22C55E]"
                      : eErrado
                        ? "border-[#EF4444]"
                        : "border-transparent"
                  }`}
                  aria-label={`${p.nome} — ${MEDALHA_LABEL[p.posicao]} lugar`}
                >
                  <img
                    src={p.imagemUrl}
                    alt={p.nome}
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                  {/* Medalha GIGANTE */}
                  <div
                    className="absolute -top-4 -right-4 h-16 w-16 sm:h-20 sm:w-20 rounded-full grid place-items-center text-4xl sm:text-5xl shadow-xl border-4 border-white"
                    style={{ background: MEDALHA_COR[p.posicao] }}
                    aria-hidden
                  >
                    {MEDALHA_EMOJI[p.posicao]}
                  </div>
                  {/* Número da posição */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0d1f55] text-white text-lg sm:text-xl font-black shadow-lg">
                    {MEDALHA_LABEL[p.posicao]}
                  </div>
                </motion.button>
                <div className="text-lg sm:text-2xl font-black mt-2">{p.nome}</div>
                <div
                  className={`w-full ${alturaPodio} rounded-t-xl shadow-inner grid place-items-center text-3xl sm:text-4xl font-black text-[#0d1f55]/70`}
                  style={{ background: MEDALHA_COR[p.posicao] }}
                >
                  {MEDALHA_LABEL[p.posicao]}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {acertou && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#22C55E] text-white p-4 mt-4 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-1">
              <CheckCircle2 className="h-7 w-7 shrink-0" />
              <div className="text-xl sm:text-2xl font-black">
                Muito bem! {respostaCerta} chegou em 1º lugar!
              </div>
            </div>
            <div className="text-sm sm:text-base pl-10 opacity-95">{explicacao}</div>
          </motion.div>
        )}
        {escolhido && !acertou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl bg-[#FEE2E2] text-[#B91C1C] p-3 mt-4 flex items-center gap-2 font-bold"
          >
            <XCircle className="h-5 w-5" />
            Ops! Tente de novo — quem está com a medalha de ouro?
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
