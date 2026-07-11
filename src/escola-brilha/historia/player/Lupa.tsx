import { useRef, useState } from "react";

/**
 * Lupa do Historiador — ferramenta ativa.
 * A criança move o dedo/mouse sobre a imagem e vê um círculo com zoom real do trecho.
 */
interface Props {
  src: string;
  alt: string;
  legenda?: string;
  tamanhoLupa?: number; // px, default 140
  zoom?: number; // default 2.2
}

export function Lupa({ src, alt, legenda, tamanhoLupa = 140, zoom = 2.2 }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const point = "touches" in e ? e.touches[0] : e;
    const x = point.clientX - rect.left;
    const y = point.clientY - rect.top;
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      setPos(null);
      return;
    }
    setDims({ w: rect.width, h: rect.height });
    setPos({ x, y });
  };

  return (
    <figure className="relative mx-auto max-w-md">
      <div
        className="relative overflow-hidden rounded-xl border-4 border-amber-800/70 shadow-lg cursor-crosshair touch-none"
        onMouseMove={handleMove}
        onMouseLeave={() => setPos(null)}
        onTouchStart={handleMove}
        onTouchMove={handleMove}
        onTouchEnd={() => setPos(null)}
      >
        <img ref={imgRef} src={src} alt={alt} className="block h-auto w-full select-none" draggable={false} />
        {pos && dims.w > 0 && (
          <div
            className="pointer-events-none absolute rounded-full border-4 border-amber-900 shadow-[0_0_0_3px_rgba(255,255,255,0.9),0_10px_20px_rgba(0,0,0,0.4)]"
            style={{
              width: tamanhoLupa,
              height: tamanhoLupa,
              left: pos.x - tamanhoLupa / 2,
              top: pos.y - tamanhoLupa / 2,
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${dims.w * zoom}px ${dims.h * zoom}px`,
              backgroundPosition: `${-pos.x * zoom + tamanhoLupa / 2}px ${-pos.y * zoom + tamanhoLupa / 2}px`,
            }}
          />
        )}
        {!pos && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10">
            <span className="rounded-full bg-amber-900/90 px-4 py-2 text-sm font-bold text-amber-50 shadow-md">
              Passe o dedo pra usar a Lupa
            </span>
          </div>
        )}
      </div>
      {legenda && <figcaption className="mt-2 text-center text-sm italic text-amber-900/80">{legenda}</figcaption>}
    </figure>
  );
}
