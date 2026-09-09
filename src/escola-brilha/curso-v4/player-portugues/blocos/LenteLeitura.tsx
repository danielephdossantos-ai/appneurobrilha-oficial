import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { url as lupaImg } from "@/assets/geografia-3ano/lupa.png.asset.json";
import { BotaoOuvirEnunciado } from "./BotaoOuvirEnunciado";

/**
 * "Lente da Leitura" — mesma mecânica da mesa do cartógrafo (Geografia):
 * a névoa cobre a cena e a criança arrasta a lupa para revelar a imagem.
 * Só depois de explorar é que o texto da motivação aparece.
 *
 * Usado apenas no skin "expedição" (Português 3º ano). O conteúdo da aula
 * é exatamente o mesmo — muda só a forma de apresentar.
 */
export function LenteLeitura({
  titulo,
  historia,
  imagemUrl,
}: {
  titulo: string;
  historia: string;
  imagemUrl?: string;
}) {
  const areaRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [revelado, setRevelado] = useState<Array<{ x: number; y: number }>>([
    { x: 50, y: 50 },
  ]);
  const [descoberto, setDescoberto] = useState(!imagemUrl);

  const R = 76;

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
      const next = [...prev, { x: cx, y: cy }];
      if (next.length > 28 && !descoberto) setDescoberto(true);
      return next;
    });
  };

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
            className="absolute inset-0 w-full h-full object-contain"
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
          continue explorando para liberar o texto
        </div>
      )}
    </div>
  );
}
