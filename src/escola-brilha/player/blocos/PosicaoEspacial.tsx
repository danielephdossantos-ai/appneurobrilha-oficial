import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, RefreshCw } from "lucide-react";
import { Secao } from "./Secao";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";

export type PosicaoTipo =
  | "cima"
  | "baixo"
  | "dentro"
  | "fora"
  | "direita"
  | "esquerda"
  | "atras"
  | "frente"
  | "aoLado";

export interface CenaDupla {
  modo: "dupla";
  referenciaImg: string;
  referenciaLabel?: string;
  sujeitoImg: string;
  sujeitoLabel?: string;
  posicao: PosicaoTipo;
  pergunta: string;
  opcoes: string[];
  correta: number;
  acerto?: string;
  erro?: string;
}

export interface CenaEntre {
  modo: "entre";
  fila: Array<{ img: string; label: string }>;
  pergunta: string;
  opcoes: string[];
  correta: number;
  acerto?: string;
  erro?: string;
}

export type CenaEspacial = CenaDupla | CenaEntre;

interface Props {
  titulo: string;
  instrucao?: string;
  cenas: CenaEspacial[];
}

/**
 * Renderiza cenas em que a posição do sujeito em relação à referência é
 * MOSTRADA visualmente (em cima, embaixo, dentro, fora, direita, esquerda,
 * atrás, frente, ao lado, entre) — o suficiente pra criança de 6 anos
 * responder olhando a cena, sem depender de texto.
 */
export function PosicaoEspacial({ titulo, instrucao, cenas }: Props) {
  const [idx, setIdx] = useState(0);
  const [resp, setResp] = useState<number | null>(null);
  const { speak } = useDeviceTTS();
  const cena = cenas[idx];

  function escolher(i: number) {
    if (resp !== null) return;
    setResp(i);
    const acertou = i === cena.correta;
    const msg = acertou
      ? cena.acerto ?? "Muito bem!"
      : cena.erro ?? "Vamos olhar de novo.";
    speak(msg);
  }

  function proxima() {
    setResp(null);
    setIdx((v) => (v + 1) % cenas.length);
  }

  const acertou = resp !== null && resp === cena.correta;
  const errou = resp !== null && resp !== cena.correta;

  return (
    <Secao icon={MapPin} rotulo="Posição no espaço" cor="#F97316">
      <p className="font-black text-lg mb-1">{titulo}</p>
      {instrucao && <p className="text-base text-white/80 mb-3">{instrucao}</p>}

      <div className="text-xs text-white/60 mb-2 font-black">
        Cena {idx + 1} de {cenas.length}
      </div>

      <div className="rounded-3xl bg-gradient-to-b from-sky-100 to-emerald-100 border-4 border-white/40 shadow-inner p-4 sm:p-6 mb-4">
        {cena.modo === "dupla" ? (
          <CenaDuplaView cena={cena} />
        ) : (
          <CenaEntreView cena={cena} />
        )}
      </div>

      <p className="font-black text-white mb-2">{cena.pergunta}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
        {cena.opcoes.map((op, i) => {
          const isCorreta = i === cena.correta;
          const isEscolha = resp === i;
          const showState = resp !== null;
          const bg = showState
            ? isCorreta
              ? "bg-emerald-500 text-white"
              : isEscolha
                ? "bg-rose-500 text-white"
                : "bg-white/10 text-white/60"
            : "bg-white text-[#0d1f55] hover:bg-white/90";
          return (
            <button
              key={i}
              type="button"
              onClick={() => escolher(i)}
              disabled={resp !== null}
              className={`px-4 py-3 rounded-2xl font-black text-base shadow transition-colors ${bg}`}
            >
              {op}
            </button>
          );
        })}
      </div>

      {acertou && (
        <div className="mt-2 flex items-center gap-2 rounded-xl p-2 border bg-[#22C55E]/15 border-[#22C55E]/30 text-[#86EFAC]">
          <CheckCircle2 className="h-4 w-4" />
          <span className="text-sm font-black">
            {cena.acerto ?? "Muito bem! 🎉"}
          </span>
        </div>
      )}
      {errou && (
        <div className="mt-2 flex items-center gap-2 rounded-xl p-2 border bg-[#EF4444]/15 border-[#EF4444]/30 text-[#FCA5A5]">
          <RefreshCw className="h-4 w-4" />
          <span className="text-sm font-black">
            {cena.erro ?? "Olhe a cena de novo!"}
          </span>
        </div>
      )}

      {resp !== null && idx < cenas.length - 1 && (
        <button
          type="button"
          onClick={proxima}
          className="mt-3 px-4 py-2 rounded-full bg-amber-400 text-[#0d1f55] font-black shadow hover:bg-amber-300"
        >
          Próxima cena →
        </button>
      )}
    </Secao>
  );
}

/* ============ Cena dupla (referência + sujeito posicionado) ============ */

function CenaDuplaView({ cena }: { cena: CenaDupla }) {
  const {
    referenciaImg,
    referenciaLabel,
    sujeitoImg,
    sujeitoLabel,
    posicao,
  } = cena;

  // Cada layout posiciona o sujeito de VERDADE em relação à referência.
  return (
    <div className="relative mx-auto w-full max-w-md h-64 sm:h-72">
      {/* Chão */}
      <div className="absolute bottom-0 left-0 right-0 h-3 rounded-b-3xl bg-emerald-600/40" />

      {renderLayout(posicao, sujeitoImg, sujeitoLabel, referenciaImg, referenciaLabel)}
    </div>
  );
}

function Piece({
  src,
  label,
  size = "md",
  className = "",
  style,
}: {
  src: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}) {
  const dims =
    size === "lg" ? "h-32 w-32 sm:h-40 sm:w-40"
    : size === "sm" ? "h-16 w-16 sm:h-20 sm:w-20"
    : "h-24 w-24 sm:h-28 sm:w-28";
  return (
    <div className={`flex flex-col items-center ${className}`} style={style}>
      <motion.img
        src={src}
        alt=""
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className={`${dims} object-contain drop-shadow-xl`}
        loading="lazy"
      />
      {label && (
        <span className="mt-1 px-2 py-0.5 rounded-full bg-white/95 text-[#0d1f55] text-[11px] font-black shadow">
          {label}
        </span>
      )}
    </div>
  );
}

function renderLayout(
  pos: PosicaoTipo,
  suj: string,
  sujLabel: string | undefined,
  ref: string,
  refLabel: string | undefined,
) {
  switch (pos) {
    case "cima":
      return (
        <>
          <Piece src={suj} label={sujLabel} size="md"
            className="absolute left-1/2 -translate-x-1/2 top-2" />
          <Piece src={ref} label={refLabel} size="lg"
            className="absolute left-1/2 -translate-x-1/2 bottom-4" />
        </>
      );
    case "baixo":
      return (
        <>
          <Piece src={ref} label={refLabel} size="lg"
            className="absolute left-1/2 -translate-x-1/2 top-2" />
          <Piece src={suj} label={sujLabel} size="md"
            className="absolute left-1/2 -translate-x-1/2 bottom-4" />
        </>
      );
    case "dentro":
      // Sujeito menor sobreposto ao centro da referência.
      return (
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="relative">
            <Piece src={ref} label={refLabel} size="lg" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Piece src={suj} label={sujLabel} size="sm" />
            </div>
          </div>
        </div>
      );
    case "fora":
      // Referência centrada + sujeito visivelmente afastado no chão.
      return (
        <>
          <Piece src={ref} label={refLabel} size="lg"
            className="absolute left-6 bottom-4" />
          <Piece src={suj} label={sujLabel} size="md"
            className="absolute right-6 bottom-4" />
        </>
      );
    case "direita":
      return (
        <>
          <Piece src={ref} label={refLabel} size="lg"
            className="absolute left-6 bottom-4" />
          <Piece src={suj} label={sujLabel} size="md"
            className="absolute right-6 bottom-4" />
          <div className="absolute top-2 right-4 text-3xl">➡️</div>
        </>
      );
    case "esquerda":
      return (
        <>
          <Piece src={ref} label={refLabel} size="lg"
            className="absolute right-6 bottom-4" />
          <Piece src={suj} label={sujLabel} size="md"
            className="absolute left-6 bottom-4" />
          <div className="absolute top-2 left-4 text-3xl">⬅️</div>
        </>
      );
    case "atras":
      // Sujeito parcialmente atrás da referência.
      return (
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-70">
              <Piece src={suj} label={sujLabel} size="sm" />
            </div>
            <Piece src={ref} label={refLabel} size="lg" />
          </div>
        </div>
      );
    case "frente":
      return (
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="relative">
            <Piece src={ref} label={refLabel} size="lg" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <Piece src={suj} label={sujLabel} size="sm" />
            </div>
          </div>
        </div>
      );
    case "aoLado":
      return (
        <div className="absolute inset-0 flex items-end justify-center gap-2">
          <Piece src={ref} label={refLabel} size="lg" />
          <Piece src={suj} label={sujLabel} size="md" />
        </div>
      );
  }
}

/* ============ Cena "entre" — três itens em linha ============ */

function CenaEntreView({ cena }: { cena: CenaEntre }) {
  return (
    <div className="relative mx-auto w-full max-w-md h-56 sm:h-64">
      <div className="absolute bottom-0 left-0 right-0 h-3 rounded-b-3xl bg-emerald-600/40" />
      <div className="absolute inset-0 flex items-end justify-center gap-3 sm:gap-6 pb-4">
        {cena.fila.map((it, i) => (
          <div key={i} className="flex flex-col items-center">
            <Piece src={it.img} label={it.label} size="md" />
            {i === 1 && (
              <span className="mt-1 px-2 py-0.5 rounded-full bg-amber-400 text-[#0d1f55] text-[10px] font-black shadow">
                ENTRE
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
