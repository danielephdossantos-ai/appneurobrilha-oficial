import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { url as lupaImg } from "@/assets/geografia-3ano/lupa.png.asset.json";
import { BotaoOuvirEnunciado } from "./BotaoOuvirEnunciado";
import { speakChunked } from "@/lib/native-tts";
import type { DescobertaLente } from "../../types";

/**
 * "Lente da Leitura" — a névoa cobre a cena e a criança arrasta a lupa
 * para revelar a imagem.
 *
 * Quando a aula traz `descobertas`, a cena vira uma CAÇA ÀS PISTAS: cada
 * achado escondido só aparece quando a lupa passa por cima dele, com uma
 * curiosidade lida em voz alta. Nada de mascote — a curiosidade é o convite.
 * O texto da motivação só libera depois de explorar.
 */
export function LenteLeitura({
  titulo,
  historia,
  imagemUrl,
  descobertas,
}: {
  titulo: string;
  historia: string;
  imagemUrl?: string;
  descobertas?: DescobertaLente[];
}) {
  const areaRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [revelado, setRevelado] = useState<Array<{ x: number; y: number }>>([
    { x: 50, y: 50 },
  ]);
  const [movimentos, setMovimentos] = useState(0);
  const [achados, setAchados] = useState<number[]>([]);
  const [balao, setBalao] = useState<number | null>(null);
  const achadosRef = useRef<number[]>([]);

  const temCaca = !!(descobertas && descobertas.length > 0);
  const total = descobertas?.length ?? 0;
  const descoberto = !imagemUrl
    ? true
    : temCaca
      ? achados.length >= total
      : movimentos > 28;

  const R = 76;

  useEffect(() => {
    if (balao === null) return;
    const t = setTimeout(() => setBalao(null), 5200);
    return () => clearTimeout(t);
  }, [balao]);

  const mover = (clientX: number, clientY: number) => {
    const el = areaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const cy = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
    setPos({ x: cx, y: cy });
    setRevelado((prev) => {
      const last = prev[prev.length - 1];
      if (Math.hypot(last.x - cx, last.y - cy) < 3) return prev;
      setMovimentos((m) => m + 1);
      return [...prev, { x: cx, y: cy }];
    });

    if (!descobertas) return;
    descobertas.forEach((d, i) => {
      if (achadosRef.current.includes(i)) return;
      if (Math.hypot(d.x - cx, (d.y - cy) * 0.75) > 9) return;
      achadosRef.current = [...achadosRef.current, i];
      setAchados(achadosRef.current);
      setBalao(i);
      void speakChunked(`${d.titulo}. ${d.texto}`, { rate: 0.82 });
    });
  };

  const achadoAtual = balao !== null && descobertas ? descobertas[balao] : null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-300">
            Lente da leitura
          </div>
          <h3 className="text-lg md:text-xl font-extrabold text-white truncate">
            {titulo}
          </h3>
        </div>
        <BotaoOuvirEnunciado texto={[titulo, historia]} rotulo="Ouvir" />
      </div>

      {imagemUrl && (
        <>
          {temCaca && (
            <div className="flex items-center justify-between gap-3 rounded-xl border border-cyan-500/25 bg-slate-900/60 px-3 py-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-200">
                Ache {total} pistas na mesa
              </span>
              <div className="flex items-center gap-1.5">
                {descobertas!.map((d, i) => (
                  <span
                    key={i}
                    className={
                      achados.includes(i)
                        ? "grid h-7 w-7 place-items-center rounded-full bg-cyan-400/20 ring-1 ring-cyan-300/60 text-sm"
                        : "grid h-7 w-7 place-items-center rounded-full bg-white/5 ring-1 ring-white/15 text-sm text-slate-500"
                    }
                  >
                    {achados.includes(i) ? d.icone : "?"}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div
            ref={areaRef}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden touch-none cursor-none ring-1 ring-cyan-500/25 bg-slate-950 select-none"
            onMouseMove={(e) => mover(e.clientX, e.clientY)}
            onTouchStart={(e) => {
              const t = e.touches[0];
              if (t) mover(t.clientX, t.clientY);
            }}
            onTouchMove={(e) => {
              const t = e.touches[0];
              if (t) mover(t.clientX, t.clientY);
            }}
          >
            <img
              src={imagemUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <mask id="lente-leitura-mask">
                  <rect x="0" y="0" width="100" height="100" fill="white" />
                  {revelado.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r={12} fill="black" />
                  ))}
                </mask>
              </defs>
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="#0b1220"
                opacity="0.92"
                mask="url(#lente-leitura-mask)"
              />
            </svg>

            {/* marcas dos achados já encontrados */}
            {descobertas?.map((d, i) =>
              achados.includes(i) ? (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-cyan-400/90 text-base shadow-lg pointer-events-none"
                  style={{ left: `${d.x}%`, top: `${d.y}%` }}
                >
                  {d.icone}
                </motion.span>
              ) : null,
            )}

            <motion.img
              src={lupaImg}
              alt=""
              aria-hidden
              className="absolute pointer-events-none drop-shadow-2xl"
              style={{
                width: R * 2,
                height: R * 2,
                left: `calc(${pos.x}% - ${R}px)`,
                top: `calc(${pos.y}% - ${R}px)`,
              }}
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {!descoberto && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
                arraste a lupa pela cena
              </div>
            )}
          </div>

          <AnimatePresence>
            {achadoAtual && (
              <motion.div
                key={balao}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6 }}
                className="rounded-2xl border border-cyan-400/40 bg-cyan-950/70 px-4 py-3"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl leading-none">{achadoAtual.icone}</span>
                  <div className="min-w-0">
                    <div className="text-cyan-200 font-extrabold text-sm">
                      {achadoAtual.titulo}
                    </div>
                    <p className="text-[13px] leading-relaxed text-slate-100">
                      {achadoAtual.texto}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {descoberto ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-cyan-500/25 bg-slate-900/70 px-4 py-4"
        >
          <div className="text-cyan-300 text-[10px] font-mono uppercase tracking-widest mb-2">
            Contexto da missão
          </div>
          <p className="text-sm md:text-base leading-relaxed text-slate-100">
            {historia}
          </p>
        </motion.div>
      ) : (
        <div className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-[13px] text-slate-400 text-center font-mono uppercase tracking-widest">
          {temCaca
            ? `faltam ${total - achados.length} pistas para liberar o texto`
            : "continue explorando para liberar o texto"}
        </div>
      )}
    </div>
  );
}
