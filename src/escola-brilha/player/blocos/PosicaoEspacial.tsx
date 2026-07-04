import { useState } from "react";
import { MapPin, CheckCircle2, RefreshCw } from "lucide-react";
import { Secao } from "./Secao";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";
import {
  CenaDuplaView,
  CenaEntreView,
  type CenaDuplaSpec,
  type CenaEntreSpec,
  type PosicaoTipo,
} from "./CenaPosicao";

export type { PosicaoTipo } from "./CenaPosicao";

export interface CenaDupla extends CenaDuplaSpec {
  modo: "dupla";
  pergunta: string;
  opcoes: string[];
  correta: number;
  acerto?: string;
  erro?: string;
}

export interface CenaEntre extends CenaEntreSpec {
  modo: "entre";
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

      <div className="mb-4">
        {cena.modo === "dupla" ? (
          <CenaDuplaView spec={cena} />
        ) : (
          <CenaEntreView spec={cena} />
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
