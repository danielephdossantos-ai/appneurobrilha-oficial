import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Plus, Minus } from "lucide-react";
import { speakChunked } from "@/lib/native-tts";

type Props = {
  operacao: "soma" | "subtracao";
  imagemUrl: string;
  itemPlural: string;
  a: number;
  b: number;
  cor?: string;
  autoPlay?: boolean;
  legenda?: string;
};

/**
 * Ensina + e − visualmente separando os dois grupos com o sinal no meio,
 * e conta cada item UM POR UM em voz alta durante a explicação.
 */
export function OperacaoVisual({
  operacao,
  imagemUrl,
  itemPlural,
  a,
  b,
  cor = "#60A5FA",
  autoPlay = false,
  legenda,
}: Props) {
  // fase: 0 = parado / 1 = contando grupo A / 2 = mostra sinal / 3 = contando grupo B (soma) ou tirando (subtração) / 4 = contando total / 5 = resultado final
  const [fase, setFase] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  const [contadoA, setContadoA] = useState(0);
  const [contadoB, setContadoB] = useState(0);
  const [contadoTotal, setContadoTotal] = useState(0);
  const [removidos, setRemovidos] = useState(0); // para subtração
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const resultado = operacao === "soma" ? a + b : Math.max(0, a - b);
  const nomesPT = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"];
  const nome = (n: number) => nomesPT[n] ?? String(n);

  function limpar() {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  }
  const add = (fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  useEffect(() => () => limpar(), []);

  useEffect(() => {
    if (!autoPlay) return;
    add(() => rodar(), 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay]);

  function rodar() {
    limpar();
    setFase(1);
    setContadoA(0);
    setContadoB(0);
    setContadoTotal(0);
    setRemovidos(0);

    // Introdução
    const intro =
      operacao === "soma"
        ? `Vamos contar. Primeiro grupo, ${a} ${itemPlural}.`
        : `Vamos ver. Temos ${a} ${itemPlural}.`;
    speakChunked(intro, { rate: 0.9 });

    let t = 1400;
    const passo = 850;

    // Conta grupo A um por um
    for (let i = 1; i <= a; i++) {
      add(() => {
        setContadoA(i);
        speakChunked(nome(i), { rate: 0.85 });
      }, t);
      t += passo;
    }

    // Sinal e grupo B
    add(() => {
      setFase(2);
      speakChunked(
        operacao === "soma" ? `Agora, mais ${b}.` : `Agora vamos tirar ${b}.`,
        { rate: 0.9 },
      );
    }, t);
    t += 1400;

    if (operacao === "soma") {
      for (let i = 1; i <= b; i++) {
        add(() => {
          setContadoB(i);
          speakChunked(nome(i), { rate: 0.85 });
        }, t);
        t += passo;
      }
      // Junta e conta total
      add(() => {
        setFase(4);
        speakChunked(`Juntando tudo, vamos contar de novo.`, { rate: 0.9 });
      }, t);
      t += 1600;
      for (let i = 1; i <= resultado; i++) {
        add(() => {
          setContadoTotal(i);
          speakChunked(nome(i), { rate: 0.8 });
        }, t);
        t += passo;
      }
    } else {
      // Subtração: remove um por um
      for (let i = 1; i <= b; i++) {
        add(() => {
          setRemovidos(i);
          speakChunked(`tirou ${nome(i)}`, { rate: 0.85 });
        }, t);
        t += passo + 100;
      }
      add(() => {
        setFase(4);
        speakChunked(`Sobrou. Vamos contar.`, { rate: 0.9 });
      }, t);
      t += 1400;
      for (let i = 1; i <= resultado; i++) {
        add(() => {
          setContadoTotal(i);
          speakChunked(nome(i), { rate: 0.8 });
        }, t);
        t += passo;
      }
    }

    add(() => {
      setFase(5);
      speakChunked(
        operacao === "soma"
          ? `${a} mais ${b} é igual a ${resultado}!`
          : `${a} menos ${b} é igual a ${resultado}!`,
        { rate: 0.9 },
      );
    }, t);
  }

  function reiniciar() {
    limpar();
    setFase(0);
    setContadoA(0);
    setContadoB(0);
    setContadoTotal(0);
    setRemovidos(0);
  }

  const Icone = operacao === "soma" ? Plus : Minus;

  // Renderiza um grupo de imagens; destaca as já contadas
  const Grupo = ({
    total,
    contados,
    riscados = 0,
  }: {
    total: number;
    contados: number;
    riscados?: number;
  }) => (
    <div className="flex flex-wrap gap-1.5 items-center justify-center max-w-[160px]">
      <AnimatePresence>
        {Array.from({ length: total }).map((_, i) => {
          const foiContado = i < contados;
          const foiRiscado = i >= total - riscados;
          return (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: foiContado ? 1.15 : 1,
                opacity: foiRiscado ? 0.25 : 1,
              }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <img
                src={imagemUrl}
                alt=""
                className="h-11 w-11 sm:h-12 sm:w-12 object-contain drop-shadow"
                style={{
                  filter: foiContado
                    ? `drop-shadow(0 0 6px ${cor})`
                    : undefined,
                }}
              />
              {foiRiscado && (
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-black text-[#EF4444]">
                  ✕
                </span>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );

  return (
    <div
      className="rounded-3xl border-4 p-3"
      style={{ borderColor: cor, background: `${cor}18` }}
    >
      {legenda && (
        <div className="text-[11px] font-black uppercase tracking-widest text-white/80 text-center mb-2">
          {legenda}
        </div>
      )}

      {/* Conta escrita no topo */}
      <div className="text-center font-black text-2xl mb-3 flex items-center justify-center gap-2">
        <span style={{ color: cor }}>{a}</span>
        <Icone className="h-5 w-5" style={{ color: cor }} />
        <span style={{ color: cor }}>{b}</span>
        <span>=</span>
        <span
          className={`transition-all ${
            fase === 5 ? "scale-125 text-[#22C55E]" : "opacity-30"
          }`}
        >
          {fase >= 4 ? contadoTotal || "?" : "?"}
          {fase === 5 ? "" : ""}
        </span>
      </div>

      {/* Área visual: grupo A + sinal + grupo B, OU total juntado */}
      <div className="min-h-[130px] bg-white/60 rounded-2xl p-3">
        {fase < 4 ? (
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex flex-col items-center gap-1">
              <Grupo total={a} contados={contadoA} />
              <span className="text-xs font-black" style={{ color: cor }}>
                {contadoA > 0 ? contadoA : a}
              </span>
            </div>
            <Icone
              className="h-8 w-8 shrink-0"
              style={{
                color: cor,
                opacity: fase >= 2 ? 1 : 0.25,
                transform: fase >= 2 ? "scale(1.2)" : "scale(1)",
                transition: "all .3s",
              }}
            />
            <div className="flex flex-col items-center gap-1">
              {operacao === "soma" ? (
                <>
                  <Grupo total={b} contados={contadoB} />
                  <span className="text-xs font-black" style={{ color: cor }}>
                    {contadoB > 0 ? contadoB : b}
                  </span>
                </>
              ) : (
                <>
                  {/* na subtração o "b" é o que vai ser retirado do A - mostramos um placeholder */}
                  <div className="flex flex-wrap gap-1.5 items-center justify-center max-w-[90px]">
                    {Array.from({ length: b }).map((_, i) => (
                      <img
                        key={i}
                        src={imagemUrl}
                        alt=""
                        className="h-9 w-9 object-contain opacity-70"
                        style={{ filter: "grayscale(0.3)" }}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-black" style={{ color: cor }}>
                    tirar {b}
                  </span>
                </>
              )}
            </div>
          </div>
        ) : (
          // Fase 4/5: mostra o total juntado, contando um por um
          <div className="flex flex-col items-center gap-2">
            <Grupo
              total={operacao === "soma" ? a + b : a}
              contados={contadoTotal}
              riscados={operacao === "subtracao" ? b : 0}
            />
            <span
              className="text-lg font-black"
              style={{ color: fase === 5 ? "#22C55E" : cor }}
            >
              {contadoTotal || 0}
            </span>
          </div>
        )}
      </div>

      <p className="text-center text-[11px] font-black uppercase tracking-widest text-white/70 mt-2 min-h-[16px]">
        {fase === 0 && "Toque em Mostrar"}
        {fase === 1 && `Contando... ${contadoA}`}
        {fase === 2 && (operacao === "soma" ? `Agora mais ${b}` : `Vamos tirar ${b}`)}
        {fase === 3 && (operacao === "soma" ? `Contando... ${contadoB}` : `Tirando... ${removidos}`)}
        {fase === 4 && `Juntando: ${contadoTotal}`}
        {fase === 5 && `Total: ${resultado} ${itemPlural}!`}
      </p>

      <div className="flex justify-center gap-2 mt-2">
        <button
          type="button"
          onClick={rodar}
          className="inline-flex items-center gap-1 px-3 py-2 rounded-xl font-black text-sm text-white"
          style={{ background: cor }}
        >
          <Play className="h-4 w-4" /> {fase === 0 ? "Mostrar" : "De novo"}
        </button>
        {fase !== 0 && (
          <button
            type="button"
            onClick={reiniciar}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl font-black text-sm bg-white text-[#0d1f55]"
          >
            <RotateCcw className="h-4 w-4" /> Reiniciar
          </button>
        )}
      </div>
    </div>
  );
}
