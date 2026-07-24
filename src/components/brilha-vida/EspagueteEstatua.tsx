import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw } from "lucide-react";
import { VozGuia } from "./shared/VozGuia";
import { DemoAnimado } from "./shared/DemoAnimado";

/**
 * Relaxamento Muscular Progressivo Infantil — versão "Espaguete e Estátua"
 * Adaptação lúdica de Koeppen (1974) do PMR de Jacobson.
 * Contrai (estátua) por 5s, solta (espaguete) por 10s, subindo pelo corpo.
 */

type Grupo = {
  nome: string;
  parte: string;
  instrucaoTensao: string;
  instrucaoSolta: string;
  emoji: string;
};

const GRUPOS: Grupo[] = [
  {
    nome: "Pés",
    parte: "os pés",
    instrucaoTensao: "Aperte os dedos dos pés como se estivesse pisando na areia com força",
    instrucaoSolta: "Agora solte tudo. Sinta os pés moles, como espaguete cozido",
    emoji: "🦶",
  },
  {
    nome: "Pernas",
    parte: "as pernas",
    instrucaoTensao: "Estique as pernas e endureça como se fossem duas estátuas",
    instrucaoSolta: "Deixa cair, bem molinho. As pernas viraram espaguete",
    emoji: "🦵",
  },
  {
    nome: "Barriga",
    parte: "a barriga",
    instrucaoTensao: "Aperte a barriga com força, como se um elefantinho fosse pisar",
    instrucaoSolta: "Solte a barriga. Ela desincha, fica bem leve",
    emoji: "🫃",
  },
  {
    nome: "Mãos",
    parte: "as mãos",
    instrucaoTensao: "Feche as mãos com força, apertando um limão imaginário",
    instrucaoSolta: "Abre as mãos devagarinho. Deixa os dedinhos moles",
    emoji: "✊",
  },
  {
    nome: "Ombros",
    parte: "os ombros",
    instrucaoTensao: "Suba os ombros até as orelhas como uma tartaruguinha assustada",
    instrucaoSolta: "Deixa os ombros caírem, bem baixinho. Espaguete!",
    emoji: "🐢",
  },
  {
    nome: "Rosto",
    parte: "o rosto",
    instrucaoTensao: "Faça uma careta bem feia: aperte os olhos, franza o nariz, aperte a boca",
    instrucaoSolta: "Solte o rosto. Boca aberta, olhos leves. Bem tranquilo",
    emoji: "😤",
  },
];

const TENSAO_S = 5;
const SOLTA_S = 10;

type Fase = "intro" | "tensao" | "solta";

export function EspagueteEstatua({ onClose }: { onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const [fase, setFase] = useState<Fase>("intro");
  const [segundos, setSegundos] = useState(TENSAO_S);
  const [concluido, setConcluido] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const grupo = GRUPOS[idx];

  useEffect(() => {
    if (fase === "intro" || concluido) return;
    timerRef.current = setInterval(() => {
      setSegundos((s) => {
        if (s > 1) return s - 1;
        // avança
        if (fase === "tensao") {
          setFase("solta");
          return SOLTA_S;
        } else {
          // próximo grupo
          if (idx < GRUPOS.length - 1) {
            setIdx(idx + 1);
            setFase("tensao");
            return TENSAO_S;
          } else {
            setConcluido(true);
            return 0;
          }
        }
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [fase, idx, concluido]);

  const iniciar = () => {
    setFase("tensao");
    setSegundos(TENSAO_S);
  };

  const reiniciar = () => {
    setIdx(0);
    setFase("intro");
    setSegundos(TENSAO_S);
    setConcluido(false);
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-amber-50 via-white to-emerald/5 rounded-[2rem] overflow-hidden">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive transition-colors z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Espaguete e Estátua</h2>
      <p className="text-sm text-slate-500 mb-4 font-medium text-center max-w-xs">
        Vamos apertar e soltar cada parte do corpo. Aperta = estátua. Solta = espaguete molinho.
      </p>

      {fase === "intro" && !concluido && (
        <div className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-lg max-w-sm text-center">
          <div className="text-6xl mb-3">🍝</div>
          <p className="text-slate-700 mb-2 font-medium">
            Deite ou sente confortável. Feche os olhos se quiser.
          </p>
          <p className="text-sm text-slate-500 mb-5">
            Vamos passar por 6 partes do corpo, subindo dos pés até o rosto.
          </p>
          <button
            onClick={iniciar}
            className="w-full py-3 bg-primary text-white rounded-2xl font-bold shadow-glow"
          >
            Começar
          </button>
        </div>
      )}

      {fase !== "intro" && !concluido && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${idx}-${fase}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-md"
          >
            <div
              className={`relative rounded-3xl p-6 text-white shadow-xl mb-4 ${
                fase === "tensao"
                  ? "bg-gradient-to-br from-red-400 to-red-600"
                  : "bg-gradient-to-br from-emerald-300 to-emerald-500"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-black uppercase tracking-widest bg-white/20 px-2 py-1 rounded-full">
                  {fase === "tensao" ? "🗿 Estátua — aperte" : "🍝 Espaguete — solte"}
                </div>
                <div className="text-4xl">{grupo.emoji}</div>
              </div>
              <div className="text-xl font-black mb-1">{grupo.nome}</div>
              <p className="text-base font-medium leading-tight mb-3">
                {fase === "tensao" ? grupo.instrucaoTensao : grupo.instrucaoSolta}
              </p>
              <div className="flex items-center gap-3 mb-3 bg-white/20 rounded-2xl p-2">
                <DemoAnimado tipo={fase === "tensao" ? "pmr-aperta" : "pmr-solta"} size={110} />
                <VozGuia
                  texto={fase === "tensao" ? grupo.instrucaoTensao : grupo.instrucaoSolta}
                />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <motion.div
                  animate={fase === "tensao" ? { scale: [1, 0.85, 1] } : { scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-16 h-16 rounded-full bg-white/25 flex items-center justify-center text-3xl"
                >
                  {fase === "tensao" ? "💪" : "😌"}
                </motion.div>
                <div className="text-6xl font-black tabular-nums drop-shadow">{segundos}</div>
              </div>
            </div>


            <div className="flex items-center justify-center gap-1 text-xs text-slate-500 font-bold">
              Parte {idx + 1} de {GRUPOS.length}
              <div className="flex gap-1 ml-2">
                {GRUPOS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-6 rounded-full ${
                      i < idx ? "bg-emerald-400" : i === idx ? "bg-primary" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {concluido && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white rounded-3xl p-8 border-2 border-emerald/20 shadow-xl max-w-sm"
        >
          <div className="text-6xl mb-3">🍝✨</div>
          <div className="text-2xl font-black text-slate-800 mb-2">Corpo bem molinho</div>
          <p className="text-sm text-slate-600 mb-5">
            Seu corpo relaxou dos pés até o rosto. Repare como está mais leve agora.
          </p>
          <div className="flex gap-2">
            <button
              onClick={reiniciar}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow"
            >
              <RotateCcw size={16} /> De novo
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold"
            >
              Sair
            </button>
          </div>
        </motion.div>
      )}

      <p className="mt-6 text-[10px] text-slate-400 text-center max-w-xs">
        Base clínica: Relaxamento Muscular Progressivo (Jacobson) — versão infantil de Koeppen.
      </p>
    </div>
  );
}
