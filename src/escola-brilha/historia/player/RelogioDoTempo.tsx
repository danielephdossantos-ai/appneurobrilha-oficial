/**
 * Relógio do Tempo — mostra as 7 engrenagens da unidade.
 * Engrenagens já conquistadas aparecem em bronze brilhante; as pendentes ficam apagadas.
 * Se `destacar` é passado, essa engrenagem pulsa (usado na tela de recompensa).
 */
interface Props {
  totalUnidades?: number; // default 7
  conquistadas: number[]; // ex.: [1,2] = engrenagens das unidades 1 e 2 já ganhas
  destacar?: number; // índice 1..7 pra animar (encaixando)
  tamanho?: number; // px, default 220
}

export function RelogioDoTempo({ totalUnidades = 7, conquistadas, destacar, tamanho = 220 }: Props) {
  const raio = tamanho / 2;
  const raioEng = raio * 0.72;
  const engSize = tamanho * 0.18;

  return (
    <div
      className="relative select-none"
      style={{ width: tamanho, height: tamanho }}
      role="img"
      aria-label={`Relógio do Tempo: ${conquistadas.length} de ${totalUnidades} engrenagens conquistadas`}
    >
      {/* Face do relógio */}
      <div
        className="absolute inset-0 rounded-full border-[6px] border-amber-900/70 bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 shadow-[inset_0_0_30px_rgba(120,53,15,0.25)]"
      />
      {/* Ponteiros decorativos */}
      <div className="absolute left-1/2 top-1/2 h-[3px] w-[35%] -translate-y-1/2 origin-left rounded bg-amber-900" style={{ transform: "translateY(-50%) rotate(-40deg)" }} />
      <div className="absolute left-1/2 top-1/2 h-[3px] w-[28%] -translate-y-1/2 origin-left rounded bg-amber-800" style={{ transform: "translateY(-50%) rotate(70deg)" }} />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-900" />

      {/* Engrenagens em círculo */}
      {Array.from({ length: totalUnidades }).map((_, i) => {
        const num = i + 1;
        const angle = (i / totalUnidades) * 2 * Math.PI - Math.PI / 2;
        const cx = raio + raioEng * Math.cos(angle) - engSize / 2;
        const cy = raio + raioEng * Math.sin(angle) - engSize / 2;
        const ativa = conquistadas.includes(num);
        const destaque = destacar === num;
        return (
          <div
            key={num}
            className={[
              "absolute flex items-center justify-center rounded-full border-2 text-xs font-black transition-all",
              ativa
                ? "border-amber-900 bg-gradient-to-br from-amber-400 to-amber-700 text-amber-950 shadow-lg"
                : "border-amber-900/40 bg-amber-900/20 text-amber-900/50",
              destaque ? "animate-[pulse_1s_ease-in-out_infinite] ring-4 ring-yellow-400" : "",
            ].join(" ")}
            style={{ left: cx, top: cy, width: engSize, height: engSize }}
            title={`Unidade ${num}${ativa ? " — conquistada" : ""}`}
          >
            {/* Dentes da engrenagem */}
            <div
              className={[
                "absolute inset-0 rounded-full",
                ativa ? "opacity-100" : "opacity-30",
              ].join(" ")}
              style={{
                background: ativa
                  ? "conic-gradient(from 0deg, #b45309 0deg 30deg, transparent 30deg 60deg, #b45309 60deg 90deg, transparent 90deg 120deg, #b45309 120deg 150deg, transparent 150deg 180deg, #b45309 180deg 210deg, transparent 210deg 240deg, #b45309 240deg 270deg, transparent 270deg 300deg, #b45309 300deg 330deg, transparent 330deg 360deg)"
                  : undefined,
                mask: "radial-gradient(circle, transparent 55%, black 56%)",
                WebkitMask: "radial-gradient(circle, transparent 55%, black 56%)",
              }}
            />
            <span className="relative z-10">{num}</span>
          </div>
        );
      })}
    </div>
  );
}
