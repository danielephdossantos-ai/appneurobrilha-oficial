import { useEffect, useState } from "react";
import { X, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { VozGuia } from "./shared/VozGuia";

/**
 * Kit do Cuidador — respiração 4-7-8 (Dr. Andrew Weil) para o adulto se regular
 * ANTES de atender a criança em crise. Corregulação: só um cuidador calmo
 * consegue oferecer segurança e coregular o sistema nervoso da criança
 * (Porges — Teoria Polivagal).
 */
const FASES = [
  { nome: "Inspirar pelo nariz", duracao: 4, cor: "from-sky-400 to-sky-600", escala: 1.6 },
  { nome: "Segurar o ar", duracao: 7, cor: "from-violet-400 to-violet-600", escala: 1.6 },
  { nome: "Soltar pela boca", duracao: 8, cor: "from-emerald-400 to-emerald-600", escala: 1 },
] as const;

export function KitCuidador({ onClose }: { onClose: () => void }) {
  const [rodando, setRodando] = useState(false);
  const [ciclo, setCiclo] = useState(0);
  const [fase, setFase] = useState(0);
  const [contador, setContador] = useState(FASES[0].duracao);

  useEffect(() => {
    if (!rodando) return;
    if (contador > 0) {
      const t = setTimeout(() => setContador((c) => c - 1), 1000);
      return () => clearTimeout(t);
    }
    const prox = (fase + 1) % FASES.length;
    if (prox === 0) setCiclo((c) => c + 1);
    setFase(prox);
    setContador(FASES[prox].duracao);
  }, [contador, rodando, fase]);

  const iniciar = () => {
    setRodando(true);
    setCiclo(0);
    setFase(0);
    setContador(FASES[0].duracao);
  };

  const parar = () => {
    setRodando(false);
    setCiclo(0);
    setFase(0);
    setContador(FASES[0].duracao);
  };

  const atual = FASES[fase];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-black tracking-wider text-emerald-300">PARA VOCÊ, CUIDADOR</p>
            <h1 className="text-2xl font-black">Respire 4-7-8</h1>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-6 flex justify-end">
          <VozGuia
            texto="Antes de acalmar a criança, respire com a gente. Inspire por 4 segundos, segure por 7 e solte devagar por 8. Só um adulto calmo acalma."
          />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center min-h-[420px] justify-center">
          <motion.div
            animate={{ scale: rodando ? atual.escala : 1 }}
            transition={{ duration: atual.duracao, ease: "easeInOut" }}
            className={`w-52 h-52 rounded-full bg-gradient-to-br ${atual.cor} shadow-2xl flex items-center justify-center`}
          >
            <div className="text-center">
              <div className="text-6xl font-black tabular-nums">{contador}</div>
              <div className="text-xs uppercase tracking-widest opacity-90 mt-1">segundos</div>
            </div>
          </motion.div>

          <p className="mt-6 text-xl font-bold">{rodando ? atual.nome : "Pronto para começar?"}</p>
          <p className="text-sm opacity-70 mt-1">Ciclo {ciclo + 1} de 4 recomendados</p>

          <div className="flex gap-3 mt-6">
            {!rodando ? (
              <button
                onClick={iniciar}
                className="px-6 py-3 rounded-2xl bg-emerald-500 font-bold shadow-lg hover:bg-emerald-400"
              >
                Começar
              </button>
            ) : (
              <button
                onClick={parar}
                className="px-6 py-3 rounded-2xl bg-white/10 font-bold hover:bg-white/20 inline-flex items-center gap-2"
              >
                <RotateCcw size={16} /> Parar
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 text-sm leading-relaxed">
          <p className="font-bold text-emerald-200 mb-1">Por que funciona?</p>
          <p className="opacity-90">
            A expiração longa ativa o nervo vago (parassimpático), reduzindo o cortisol em minutos.
            Depois de 4 ciclos, você volta pra criança em modo <em>corregulação</em>, não em
            reatividade.
          </p>
        </div>

        <p className="mt-4 text-center text-xs opacity-60">
          Base: Weil (4-7-8), Porges (Teoria Polivagal), Siegel (parentalidade consciente)
        </p>
      </div>
    </div>
  );
}
