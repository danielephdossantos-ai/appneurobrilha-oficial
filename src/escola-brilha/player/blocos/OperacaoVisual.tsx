import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Plus, Minus } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

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
  const [replayKey, setReplayKey] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const autoPlayStarted = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const runId = useRef(0);

  const resultado = operacao === "soma" ? a + b : Math.max(0, a - b);
  const nomesPT = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"];
  const nome = (n: number) => nomesPT[n] ?? String(n);

  function limpar() {
    runId.current += 1;
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
    stopSpeaking();
  }
  const add = (fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  useEffect(() => () => limpar(), []);

  useEffect(() => {
    if (!autoPlay) return;
    const start = () => {
      if (autoPlayStarted.current) return;
      autoPlayStarted.current = true;
      add(() => rodar(), 400);
    };
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      start();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay]);

  function rodar() {
    setReplayKey((k) => k + 1);
    if (operacao === "subtracao") {
      void rodarSubtracao();
    } else {
      void rodarSoma();
    }
  }

  async function rodarSoma() {
    limpar();
    const id = runId.current;
    const vivo = () => id === runId.current;
    const pausa = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const falar = async (texto: string, rate = 0.72) => {
      if (!vivo()) return;
      await speakChunked(texto, { rate });
    };

    setFase(1);
    setContadoA(0);
    setContadoB(0);
    setContadoTotal(0);
    setRemovidos(0);

    await falar(`Vamos contar. Primeiro grupo, ${nome(a)} ${itemPlural}.`, 0.72);
    await pausa(500);
    if (!vivo()) return;

    // Conta grupo A um por um — imagem aparece JUNTO com o número falado
    for (let i = 1; i <= a; i++) {
      setContadoA(i);
      await falar(nome(i), 0.62);
      await pausa(600);
      if (!vivo()) return;
    }

    await pausa(700);
    if (!vivo()) return;
    setFase(2);
    await falar(`Agora, mais ${nome(b)}.`, 0.72);
    await pausa(600);
    if (!vivo()) return;

    // Conta grupo B um por um
    setFase(3);
    for (let i = 1; i <= b; i++) {
      setContadoB(i);
      await falar(nome(i), 0.62);
      await pausa(600);
      if (!vivo()) return;
    }

    await pausa(700);
    if (!vivo()) return;
    setFase(4);
    await falar(`Agora vamos juntar tudo e contar de novo, bem devagar.`, 0.72);
    await pausa(600);
    if (!vivo()) return;

    // Conta o total um por um
    for (let i = 1; i <= resultado; i++) {
      setContadoTotal(i);
      await falar(nome(i), 0.6);
      await pausa(700);
      if (!vivo()) return;
    }

    await pausa(500);
    if (!vivo()) return;
    setFase(5);
    await falar(`${a} mais ${b} é igual a ${resultado}!`, 0.75);
  }

  async function rodarSubtracao() {
    limpar();
    const id = runId.current;
    const vivo = () => id === runId.current;
    const pausa = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    const falar = async (texto: string, rate = 0.68) => {
      if (!vivo()) return;
      await speakChunked(texto, { rate });
    };

    setFase(1);
    setContadoA(0);
    setContadoB(0);
    setContadoTotal(0);
    setRemovidos(0);

    await falar(`Vamos ver. Temos ${a} ${itemPlural}.`, 0.7);
    await pausa(600);
    if (!vivo()) return;

    for (let i = 1; i <= a; i++) {
      setContadoA(i);
      await falar(nome(i), 0.62);
      await pausa(1000);
      if (!vivo()) return;
    }

    await pausa(1000);
    if (!vivo()) return;
    setFase(2);
    setContadoA(a);
    await falar(`Temos ${nome(a)} ${itemPlural}.`, 0.66);
    await pausa(700);
    if (!vivo()) return;
    await falar(
      `Vou separar em dois grupos: ${nome(resultado)} ${itemPlural} ficaram no baú, e ${nome(b)} ${itemPlural} saíram.`,
      0.66,
    );
    await pausa(900);
    if (!vivo()) return;
    await falar(`Agora vamos tirar ${nome(b)}, uma por uma, bem devagar.`, 0.66);
    await pausa(1200);
    if (!vivo()) return;

    for (let i = 1; i <= b; i++) {
      const sobram = a - i;
      await falar(`Agora vou tirar a moeda ${nome(i)}.`, 0.64);
      await pausa(450);
      if (!vivo()) return;
      setFase(3);
      setRemovidos(i);
      await pausa(750);
      if (!vivo()) return;
      await falar(`Tirou ${nome(i)}. Sobraram ${nome(sobram)}.`, 0.64);
      await pausa(1300);
      if (!vivo()) return;
    }

    setFase(4);
    setRemovidos(b);
    await falar(`Agora vamos contar só as moedas que ficaram.`, 0.66);
    await pausa(800);
    if (!vivo()) return;

    for (let i = 1; i <= resultado; i++) {
      setContadoTotal(i);
      await falar(nome(i), 0.62);
      await pausa(1000);
      if (!vivo()) return;
    }

    await pausa(1000);
    if (!vivo()) return;
    setFase(5);
    await falar(`${a} menos ${b} é igual a ${resultado}. Ficaram ${nome(resultado)} ${itemPlural}.`, 0.68);
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
  // Renderiza APENAS as imagens já reveladas (aparecem uma por uma).
  const Grupo = ({
    mostrar,
    riscados = 0,
    total,
    compacto = false,
    numerar = false,
  }: {
    mostrar: number;
    riscados?: number;
    total: number;
    compacto?: boolean;
    numerar?: boolean;
  }) => {
    void total;
    return (
      <div
        className={`flex flex-wrap items-center justify-center ${compacto ? "gap-1" : "gap-1.5"} max-w-full`}
      >
        {Array.from({ length: mostrar }).map((_, i) => {
          const foiRiscado = i >= mostrar - riscados && riscados > 0;
          return (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0, y: -12 }}
              animate={{ scale: 1, opacity: foiRiscado ? 0.3 : 1, y: 0 }}
              transition={{ duration: 0.35, ease: "backOut" }}
              className="relative"
            >
              <img
                src={imagemUrl}
                alt=""
                className={`${compacto ? "h-8 w-8 sm:h-10 sm:w-10" : "h-10 w-10 sm:h-12 sm:w-12"} object-contain drop-shadow`}
              />
              {numerar && !foiRiscado && (
                <span className="absolute -top-1 -right-1 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#22C55E] text-white grid place-items-center text-[10px] sm:text-xs font-black shadow border-2 border-white">
                  {i + 1}
                </span>
              )}
              {foiRiscado && (
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-black text-[#EF4444]">
                  ✕
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    );
  };


  return (
    <div
      ref={rootRef}
      className="rounded-3xl border-4 p-3 cursor-pointer"
      style={{ borderColor: cor, background: `${cor}18` }}
      onClick={rodar}
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

      {/* Área visual */}
      <div key={replayKey} className="min-h-[130px] bg-white/60 rounded-2xl p-3">
        {operacao === "subtracao" ? (
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-white/80 px-3 py-1 text-xs font-black text-[#0d1f55]">
              Total no baú: {fase === 1 ? `${contadoA}/${a}` : a}
            </div>

            <div className="grid w-full grid-cols-2 items-stretch gap-2 sm:gap-3">
              <div className="flex min-h-[126px] flex-col items-center justify-between gap-1 rounded-xl p-2 bg-[#DCFCE7] border-2 border-[#22C55E]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#166534]">
                  Ficaram
                </span>
                <Grupo total={resultado} mostrar={resultado} compacto />
                <span className="text-lg font-black text-[#22C55E]">
                  {resultado}
                </span>
              </div>

              <div className="flex min-h-[126px] flex-col items-center justify-between gap-1 rounded-xl p-2 bg-[#FEE2E2] border-2 border-[#EF4444]">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#991B1B]">
                  Saíram
                </span>
                <Grupo
                  total={b}
                  mostrar={b}
                  riscados={fase >= 4 ? b : fase >= 3 ? removidos : 0}
                  compacto
                />
                <span className="text-lg font-black text-[#EF4444]">
                  {b}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm font-black text-[#0d1f55]">
              <span>{resultado}</span>
              <span>ficaram</span>
              <Minus className="h-4 w-4" style={{ color: cor }} />
              <span>{b}</span>
              <span>saíram</span>
            </div>
          </div>
        ) : fase < 4 ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <div className="flex flex-col items-center gap-1 w-full sm:w-auto rounded-xl bg-white/70 p-2">
              <Grupo total={a} mostrar={fase === 0 || fase >= 2 ? a : contadoA} numerar />
              <span className="text-sm font-black" style={{ color: cor }}>
                {fase === 1 ? contadoA : a}
              </span>
            </div>
            <Icone
              className="h-8 w-8 shrink-0"
              style={{
                color: cor,
                opacity: fase >= 2 ? 1 : 0.4,
                transform: fase >= 2 ? "scale(1.2)" : "scale(1)",
                transition: "all .3s",
              }}
            />
            <div className="flex flex-col items-center gap-1 w-full sm:w-auto rounded-xl bg-white/70 p-2">
              <Grupo total={b} mostrar={fase === 0 ? b : contadoB} numerar />
              <span className="text-sm font-black" style={{ color: cor }}>
                {fase === 3 ? contadoB : b}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Grupo total={a + b} mostrar={fase === 5 ? a + b : contadoTotal || 0} numerar />
            <span
              className="text-2xl font-black"
              style={{ color: fase === 5 ? "#22C55E" : cor }}
            >
              {contadoTotal || "…"}
            </span>
          </div>
        )}
      </div>


      <p className="text-center text-[11px] font-black uppercase tracking-widest text-white/70 mt-2 min-h-[16px]">
        {fase === 0 && "Toque na conta ou em Mostrar para começar"}
        {fase === 1 && `A explicação começou: primeiro vemos as ${a} ${itemPlural}. Contando... ${contadoA}`}
        {fase === 2 && (operacao === "soma" ? `Agora mais ${b}` : `Vamos tirar ${b}`)}
        {fase === 3 && (operacao === "soma" ? `Contando... ${contadoB}` : `Tirou ${removidos} de ${b}`)}
        {fase === 4 && `Contando o que sobrou: ${contadoTotal}`}
        {fase === 5 && `Resultado: ${resultado} ${itemPlural}!`}
      </p>


      <div className="flex justify-center gap-2 mt-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            rodar();
          }}
          className="inline-flex items-center gap-1 px-3 py-2 rounded-xl font-black text-sm text-white"
          style={{ background: cor }}
        >
          <Play className="h-4 w-4" /> {fase === 0 ? "Mostrar" : "De novo"}
        </button>
        {fase !== 0 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              reiniciar();
            }}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl font-black text-sm bg-white text-[#0d1f55]"
          >
            <RotateCcw className="h-4 w-4" /> Reiniciar
          </button>
        )}
      </div>
    </div>
  );
}
