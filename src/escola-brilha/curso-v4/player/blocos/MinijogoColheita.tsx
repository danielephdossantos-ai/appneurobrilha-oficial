import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

type Props = {
  imagemUrl: string;
  itemPlural: string;
  alvoInicial: number;
  chegaramMais: number;
  duracaoSeg?: number;
  feedbackAcerto: string;
  feedbackErro: string;
};

type Fruta = {
  id: number;
  x: number;   // 0..1 (fração da largura)
  y: number;   // px absoluto
  vy: number;  // px/s
  colhida?: boolean;
};

const NOME: Record<number, string> = {
  1: "um", 2: "dois", 3: "três", 4: "quatro", 5: "cinco",
  6: "seis", 7: "sete", 8: "oito", 9: "nove", 10: "dez",
  11: "onze", 12: "doze", 13: "treze", 14: "quatorze", 15: "quinze",
  16: "dezesseis", 17: "dezessete", 18: "dezoito", 19: "dezenove", 20: "vinte",
};
const num = (n: number) => NOME[n] ?? String(n);

const CANVAS_H = 420;
const CESTA_W = 110;
const CESTA_H = 60;
const FRUTA_TAM = 42;

export function MinijogoColheita({
  imagemUrl,
  itemPlural,
  alvoInicial,
  chegaramMais,
  duracaoSeg = 90,
  feedbackAcerto,
  feedbackErro,
}: Props) {
  const totalFinal = alvoInicial + chegaramMais;

  // Fases: intro → rodando(fase1) → transicao → rodando(fase2) → pergunta → resultado
  const [fase, setFase] = useState<
    "intro" | "rodando1" | "transicao" | "rodando2" | "pergunta" | "resultado"
  >("intro");
  const [colhidas, setColhidas] = useState(0);
  const [tempo, setTempo] = useState(duracaoSeg);
  const [resposta, setResposta] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [larguraPx, setLarguraPx] = useState(600);
  const cestaXRef = useRef(0.5); // fração da largura
  const [, forceRender] = useState(0);
  const frutasRef = useRef<Fruta[]>([]);
  const proxIdRef = useRef(1);
  const proxSpawnRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const ultimoTsRef = useRef(0);

  // resize
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setLarguraPx(el.clientWidth);
    });
    ro.observe(el);
    setLarguraPx(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // teardown
  useEffect(
    () => () => {
      stopSpeaking();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  // controle da cesta (mouse/touch/seta)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const move = (clientX: number) => {
      const rect = el.getBoundingClientRect();
      const frac = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      cestaXRef.current = frac;
      forceRender((n) => n + 1);
    };
    const onMouse = (e: MouseEvent) => move(e.clientX);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) move(e.touches[0].clientX);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        cestaXRef.current = Math.max(0, cestaXRef.current - 0.05);
        forceRender((n) => n + 1);
      } else if (e.key === "ArrowRight") {
        cestaXRef.current = Math.min(1, cestaXRef.current + 0.05);
        forceRender((n) => n + 1);
      }
    };
    el.addEventListener("mousemove", onMouse);
    el.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      el.removeEventListener("mousemove", onMouse);
      el.removeEventListener("touchmove", onTouch);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // loop principal + timer
  useEffect(() => {
    const rodando = fase === "rodando1" || fase === "rodando2";
    if (!rodando) return;

    ultimoTsRef.current = performance.now();
    proxSpawnRef.current = 0;

    const tick = (ts: number) => {
      const dt = Math.min(0.05, (ts - ultimoTsRef.current) / 1000);
      ultimoTsRef.current = ts;

      // spawn de frutas — mais rápido nos primeiros segundos
      proxSpawnRef.current -= dt;
      if (proxSpawnRef.current <= 0) {
        frutasRef.current.push({
          id: proxIdRef.current++,
          x: 0.08 + Math.random() * 0.84,
          y: -FRUTA_TAM,
          vy: 90 + Math.random() * 60,
        });
        proxSpawnRef.current = 0.55 + Math.random() * 0.45;
      }

      const gravidade = 260; // px/s²
      const cestaPx = cestaXRef.current * larguraPx;
      const cestaTop = CANVAS_H - CESTA_H - 8;
      const cestaEsq = cestaPx - CESTA_W / 2;
      const cestaDir = cestaPx + CESTA_W / 2;

      let novasColhidas = 0;
      const restantes: Fruta[] = [];
      for (const f of frutasRef.current) {
        if (f.colhida) continue;
        const nvy = f.vy + gravidade * dt;
        const ny = f.y + nvy * dt;
        const fxPx = f.x * larguraPx;
        // colisão com a cesta
        const dentroX = fxPx >= cestaEsq && fxPx <= cestaDir;
        const tocouCesta =
          ny + FRUTA_TAM / 2 >= cestaTop && ny + FRUTA_TAM / 2 <= cestaTop + CESTA_H;
        if (dentroX && tocouCesta) {
          novasColhidas++;
          continue;
        }
        // caiu no chão
        if (ny > CANVAS_H) continue;
        restantes.push({ ...f, y: ny, vy: nvy });
      }
      frutasRef.current = restantes;

      if (novasColhidas > 0) {
        setColhidas((c) => {
          const proximo = c + novasColhidas;
          const alvo = fase === "rodando1" ? alvoInicial : totalFinal;
          // fala número por número, sem atropelar
          for (let n = c + 1; n <= Math.min(proximo, alvo); n++) {
            speakChunked(
              n === alvo ? `${num(n)}! Colheita completa.` : num(n),
              { rate: 0.9, pitch: 1.1 },
            );
          }
          return Math.min(proximo, alvo);
        });
      }
      forceRender((n) => n + 1);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [fase, larguraPx, alvoInicial, totalFinal]);

  // timer
  useEffect(() => {
    if (fase !== "rodando1" && fase !== "rodando2") return;
    if (tempo <= 0) return;
    const id = setInterval(() => setTempo((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [fase, tempo]);

  // transições automáticas
  useEffect(() => {
    if (fase === "rodando1" && colhidas >= alvoInicial) {
      setFase("transicao");
      speakChunked(
        `Boa! Você colheu ${num(alvoInicial)} ${itemPlural}. Agora chegaram mais ${num(
          chegaramMais,
        )}.`,
        { rate: 0.95 },
      );
      // limpa frutas na tela
      frutasRef.current = [];
      setTimeout(() => setFase("rodando2"), 2500);
    }
    if (fase === "rodando2" && colhidas >= totalFinal) {
      frutasRef.current = [];
      setFase("pergunta");
      speakChunked(
        `Quantas ${itemPlural} ficaram na cesta ao todo?`,
        { rate: 0.95 },
      );
    }
    if ((fase === "rodando1" || fase === "rodando2") && tempo === 0) {
      setFase("resultado");
    }
  }, [colhidas, fase, tempo, alvoInicial, totalFinal, itemPlural, chegaramMais]);

  const iniciar = () => {
    setColhidas(0);
    setTempo(duracaoSeg);
    setResposta(null);
    frutasRef.current = [];
    setFase("rodando1");
    speakChunked(
      `Colheita relâmpago! Pegue ${num(alvoInicial)} ${itemPlural}.`,
      { rate: 0.95 },
    );
  };

  const reiniciar = () => {
    stopSpeaking();
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setColhidas(0);
    setTempo(duracaoSeg);
    setResposta(null);
    frutasRef.current = [];
    setFase("intro");
  };

  const acertouPergunta = resposta === totalFinal;

  const alvoAtual = fase === "rodando1" ? alvoInicial : totalFinal;
  const opcoesQuiz = [totalFinal - 1, totalFinal, totalFinal + 1].sort((a, b) => a - b);

  return (
    <div className="mt-3 rounded-2xl bg-white/95 text-[#0d1f55] p-3 border-2 border-amber-300/50">
      {/* HUD */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex-1 rounded-lg bg-[#0d1f55] text-white p-2 text-center">
          <div className="text-[9px] font-black uppercase tracking-widest text-amber-300">
            Alvo
          </div>
          <div className="text-xl font-black tabular-nums">
            {colhidas} <span className="text-white/40">/ {alvoAtual}</span>
          </div>
        </div>
        <div className="flex-1 rounded-lg bg-[#0d1f55] text-white p-2 text-center">
          <div className="text-[9px] font-black uppercase tracking-widest text-amber-300">
            Tempo
          </div>
          <div className="text-xl font-black tabular-nums">{tempo}s</div>
        </div>
        <button
          onClick={reiniciar}
          className="h-11 w-11 rounded-lg bg-white border-2 border-[#0d1f55]/20 grid place-items-center active:scale-95"
          aria-label="Reiniciar"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      {/* Campo do jogo */}
      <div
        ref={containerRef}
        className="relative w-full rounded-xl overflow-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-200 border-2 border-emerald-500/40 cursor-none touch-none select-none"
        style={{ height: CANVAS_H }}
      >
        {/* árvores decorativas */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-emerald-500/40 to-transparent" />
        <div className="absolute top-2 left-4 text-4xl">🌳</div>
        <div className="absolute top-2 left-1/3 text-4xl">🌳</div>
        <div className="absolute top-2 right-1/4 text-4xl">🌳</div>
        <div className="absolute top-2 right-4 text-4xl">🌳</div>

        {/* frutas caindo */}
        {frutasRef.current.map((f) => (
          <img
            key={f.id}
            src={imagemUrl}
            alt=""
            className="absolute pointer-events-none drop-shadow"
            style={{
              width: FRUTA_TAM,
              height: FRUTA_TAM,
              left: f.x * larguraPx - FRUTA_TAM / 2,
              top: f.y,
            }}
            draggable={false}
          />
        ))}

        {/* cesta */}
        <div
          className="absolute rounded-b-3xl rounded-t-lg bg-gradient-to-b from-amber-700 to-amber-900 border-4 border-amber-800 pointer-events-none shadow-2xl"
          style={{
            left: cestaXRef.current * larguraPx - CESTA_W / 2,
            top: CANVAS_H - CESTA_H - 8,
            width: CESTA_W,
            height: CESTA_H,
          }}
        >
          <div className="absolute inset-x-2 top-1 h-3 rounded-full bg-amber-950/40" />
          <div className="absolute inset-x-3 bottom-2 flex justify-center items-end gap-0.5">
            {Array.from({ length: Math.min(colhidas, 5) }).map((_, k) => (
              <img
                key={k}
                src={imagemUrl}
                alt=""
                className="w-4 h-4 object-contain -mb-1"
              />
            ))}
          </div>
        </div>

        {/* overlays por fase */}
        <AnimatePresence>
          {fase === "intro" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0d1f55]/80 text-white grid place-items-center p-4"
            >
              <div className="text-center max-w-sm space-y-3">
                <div className="text-3xl font-black text-amber-300">
                  🍏 Colheita Relâmpago
                </div>
                <div className="text-sm">
                  Mova a cesta com o dedo, mouse ou setas ← →.<br />
                  Pegue exatamente <b>{alvoInicial}</b> {itemPlural} antes do tempo acabar.<br />
                  Depois chegam mais <b>{chegaramMais}</b> — quantas ficaram?
                </div>
                <button
                  onClick={iniciar}
                  className="px-6 py-3 rounded-xl bg-amber-400 text-[#0d1f55] font-black flex items-center gap-2 mx-auto active:scale-95"
                >
                  <Play className="h-5 w-5" /> Começar
                </button>
              </div>
            </motion.div>
          )}
          {fase === "transicao" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0d1f55]/80 text-white grid place-items-center p-4"
            >
              <div className="text-center space-y-2">
                <div className="text-2xl font-black text-amber-300">
                  Você pegou {alvoInicial}!
                </div>
                <div className="text-lg">
                  Agora chegam mais <b>{chegaramMais}</b> {itemPlural}...
                </div>
              </div>
            </motion.div>
          )}
          {fase === "pergunta" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-[#0d1f55]/90 text-white grid place-items-center p-4"
            >
              <div className="text-center max-w-sm space-y-4">
                <div className="text-xl font-black text-amber-300">
                  {alvoInicial} + {chegaramMais} = ?
                </div>
                <div className="text-base">
                  Quantas {itemPlural} ficaram na cesta ao todo?
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {opcoesQuiz.map((n) => (
                    <button
                      key={n}
                      onClick={() => {
                        setResposta(n);
                        setFase("resultado");
                        speakChunked(
                          n === totalFinal
                            ? feedbackAcerto
                            : feedbackErro,
                          { rate: 0.95 },
                        );
                      }}
                      className="py-3 rounded-xl bg-amber-400 text-[#0d1f55] font-black text-2xl active:scale-95"
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          {fase === "resultado" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-[#0d1f55]/90 text-white grid place-items-center p-4"
            >
              <div className="text-center max-w-sm space-y-3">
                {resposta !== null ? (
                  <>
                    <div
                      className={`text-3xl font-black ${
                        acertouPergunta ? "text-emerald-400" : "text-amber-300"
                      }`}
                    >
                      {acertouPergunta ? "🎉 Isso mesmo!" : "Quase!"}
                    </div>
                    <div className="text-sm">
                      {acertouPergunta ? feedbackAcerto : feedbackErro}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl font-black text-amber-300">
                      ⏰ Tempo!
                    </div>
                    <div className="text-sm">
                      Você colheu {colhidas} {itemPlural}. Tente de novo!
                    </div>
                  </>
                )}
                <button
                  onClick={reiniciar}
                  className="px-5 py-2 rounded-xl bg-amber-400 text-[#0d1f55] font-black active:scale-95"
                >
                  Jogar de novo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-2 text-center text-xs text-[#0d1f55]/70">
        🖱️ Mouse · 👆 Toque · ⌨️ Setas ← →
      </div>
    </div>
  );
}
