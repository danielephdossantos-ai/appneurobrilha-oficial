import { useEffect, useRef, useState } from "react";

/**
 * Canvas de desenho simples para Arte 2º Ano.
 * - Dedo (touch), mouse ou stylus
 * - Paleta de cores atelier kawaii
 * - Pincel fino / médio / grosso
 * - Borracha, limpar
 * - Botão exporta PNG e chama onExportar(blob, dataUrl)
 */

const CORES = [
  { nome: "Preto", hex: "#2a1a10" },
  { nome: "Vermelho", hex: "#e53e3e" },
  { nome: "Rosa", hex: "#f472b6" },
  { nome: "Laranja", hex: "#fb923c" },
  { nome: "Amarelo", hex: "#fbbf24" },
  { nome: "Verde", hex: "#22c55e" },
  { nome: "Azul", hex: "#3b82f6" },
  { nome: "Roxo", hex: "#a855f7" },
  { nome: "Marrom", hex: "#8b5a2b" },
  { nome: "Pele clara", hex: "#f4d1ae" },
  { nome: "Pele média", hex: "#c99172" },
  { nome: "Pele escura", hex: "#6b4423" },
];

const ESPESSURAS = [
  { nome: "Fino", valor: 3 },
  { nome: "Médio", valor: 8 },
  { nome: "Grosso", valor: 18 },
];

type Props = {
  altura?: number;
  fundo?: string;
  textoBotao?: string;
  onExportar?: (blob: Blob, dataUrl: string) => void | Promise<void>;
  ocultarExportar?: boolean;
};

export function DrawingCanvas({
  altura = 380,
  fundo = "#fffdf7",
  textoBotao = "💾 Salvar meu desenho",
  onExportar,
  ocultarExportar = false,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const desenhandoRef = useRef(false);
  const ultimoRef = useRef<{ x: number; y: number } | null>(null);
  const [cor, setCor] = useState(CORES[0].hex);
  const [espessura, setEspessura] = useState(ESPESSURAS[1].valor);
  const [borracha, setBorracha] = useState(false);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.fillStyle = fundo;
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, [fundo]);

  function ponto(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function iniciar(e: React.PointerEvent<HTMLCanvasElement>) {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    desenhandoRef.current = true;
    ultimoRef.current = ponto(e);
    // ponto único
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.beginPath();
    ctx.fillStyle = borracha ? fundo : cor;
    ctx.arc(ultimoRef.current.x, ultimoRef.current.y, espessura / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  function mover(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!desenhandoRef.current) return;
    e.preventDefault();
    const ctx = canvasRef.current!.getContext("2d")!;
    const atual = ponto(e);
    const anterior = ultimoRef.current ?? atual;
    ctx.strokeStyle = borracha ? fundo : cor;
    ctx.lineWidth = espessura;
    ctx.beginPath();
    ctx.moveTo(anterior.x, anterior.y);
    ctx.lineTo(atual.x, atual.y);
    ctx.stroke();
    ultimoRef.current = atual;
  }

  function finalizar() {
    desenhandoRef.current = false;
    ultimoRef.current = null;
  }

  function limpar() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = fundo;
    ctx.fillRect(0, 0, rect.width, rect.height);
  }

  async function exportar() {
    const canvas = canvasRef.current;
    if (!canvas || !onExportar) return;
    setSalvando(true);
    try {
      const dataUrl = canvas.toDataURL("image/png");
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((b) => resolve(b), "image/png"),
      );
      if (blob) await onExportar(blob, dataUrl);
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div className="rounded-2xl border-2 border-rose-200 bg-white p-3 shadow-sm">
      {/* Paleta */}
      <div className="flex flex-wrap gap-2 mb-2">
        {CORES.map((c) => (
          <button
            key={c.hex}
            type="button"
            onClick={() => {
              setCor(c.hex);
              setBorracha(false);
            }}
            title={c.nome}
            className={`w-8 h-8 rounded-full border-2 transition ${
              !borracha && cor === c.hex
                ? "border-rose-500 scale-110 shadow"
                : "border-white/70 shadow-sm"
            }`}
            style={{ background: c.hex }}
          />
        ))}
      </div>
      {/* Controles */}
      <div className="flex flex-wrap gap-2 mb-2 items-center text-xs">
        <span className="text-stone-500 font-semibold">Pincel:</span>
        {ESPESSURAS.map((es) => (
          <button
            key={es.valor}
            type="button"
            onClick={() => setEspessura(es.valor)}
            className={`px-2.5 py-1 rounded-full font-bold ${
              espessura === es.valor
                ? "bg-rose-500 text-white"
                : "bg-rose-50 text-rose-700 hover:bg-rose-100"
            }`}
          >
            {es.nome}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setBorracha((b) => !b)}
          className={`px-2.5 py-1 rounded-full font-bold ${
            borracha
              ? "bg-amber-500 text-white"
              : "bg-amber-50 text-amber-700 hover:bg-amber-100"
          }`}
        >
          🧽 Borracha
        </button>
        <button
          type="button"
          onClick={limpar}
          className="px-2.5 py-1 rounded-full font-bold bg-stone-100 text-stone-700 hover:bg-stone-200"
        >
          🗑️ Limpar
        </button>
      </div>

      {/* Canvas */}
      <div
        className="rounded-xl overflow-hidden border border-rose-100 bg-white touch-none"
        style={{ height: altura }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-crosshair touch-none"
          onPointerDown={iniciar}
          onPointerMove={mover}
          onPointerUp={finalizar}
          onPointerCancel={finalizar}
          onPointerLeave={finalizar}
        />
      </div>

      {!ocultarExportar && onExportar && (
        <button
          type="button"
          onClick={exportar}
          disabled={salvando}
          className="mt-3 w-full py-3 rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 text-white font-black text-base shadow active:scale-95 disabled:opacity-60"
        >
          {salvando ? "⏳ Salvando…" : textoBotao}
        </button>
      )}
    </div>
  );
}
