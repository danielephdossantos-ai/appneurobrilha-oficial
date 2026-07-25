/**
 * Visuais matemáticos padrão mundial — 3º ano em diante.
 *
 * Cada tipo tem sua representação visual PRÓPRIA. Nunca cair no default
 * de casas de valor quando o conteúdo é geometria, estatística, medidas
 * ou probabilidade.
 */
import type { CSSProperties } from "react";

// ============================ Tipos =================================

export type VisualMat =
  | FiguraPlanaV
  | SolidoV
  | SimetriaV
  | MapaGradeV
  | GraficoBarrasV
  | TabelaV
  | EscalaProbV
  | RetaNumericaV;

export type FiguraPlanaV = {
  tipo: "figuraPlana";
  forma:
    | "quadrado"
    | "retangulo"
    | "triangulo"
    | "pentagono"
    | "hexagono"
    | "octogono"
    | "circulo";
  legenda?: string;
  /** Mostrar vértices A, B, C, D…  Padrão: true (exceto círculo). */
  mostrarVertices?: boolean;
  /** Marcar ângulos retos em quadrado/retângulo. */
  mostrarAngulos?: boolean;
  /** Rotula lados (ex.: ["5 cm","3 cm","5 cm","3 cm"]). */
  medidasLados?: string[];
};

export type SolidoV = {
  tipo: "solido";
  forma: "cubo" | "esfera" | "cone" | "cilindro" | "piramide";
  legenda?: string;
  /** Contagem de faces / vértices / arestas — se omitido usa padrão. */
  faces?: number;
  vertices?: number;
  arestas?: number;
};

export type SimetriaV = {
  tipo: "simetria";
  forma: "quadrado" | "retangulo" | "triangulo" | "circulo" | "borboleta" | "coracao" | "letra";
  letra?: string;
  /** Quais eixos desenhar. */
  eixos: Array<"vertical" | "horizontal" | "diagonal1" | "diagonal2">;
  legenda?: string;
};

export type MapaGradeV = {
  tipo: "mapaGrade";
  linhas: number;
  colunas: number;
  pinos: Array<{ linha: number; coluna: number; rotulo: string; cor?: string }>;
  destaque?: { linha: number; coluna: number };
  legenda?: string;
};

export type GraficoBarrasV = {
  tipo: "graficoBarras";
  titulo?: string;
  unidade?: string;
  barras: Array<{ rotulo: string; valor: number; cor?: string }>;
  /** Destaca a barra de maior valor. Padrão: true. */
  destaqueMaior?: boolean;
};

export type TabelaV = {
  tipo: "tabela";
  titulo?: string;
  cabecalhos: string[];
  linhas: Array<{ rotulo: string; valores: Array<number | string> }>;
  destacar?: { linha?: number; coluna?: number };
};

export type EscalaProbV = {
  tipo: "escalaProb";
  itens: Array<{ evento: string; nivel: "impossivel" | "pouco" | "provavel" | "muito" | "certo" }>;
};

// =========================== Renderer ===============================

export function RenderVisualMat({ v }: { v: VisualMat }) {
  switch (v.tipo) {
    case "figuraPlana":
      return <FiguraPlana v={v} />;
    case "solido":
      return <Solido v={v} />;
    case "simetria":
      return <Simetria v={v} />;
    case "mapaGrade":
      return <MapaGrade v={v} />;
    case "graficoBarras":
      return <GraficoBarras v={v} />;
    case "tabela":
      return <Tabela v={v} />;
    case "escalaProb":
      return <EscalaProb v={v} />;
  }
}

// -------------------- Figuras planas (2D) ----------------------------

const LETRAS = ["A", "B", "C", "D", "E", "F", "G", "H"];

function verticesDe(forma: FiguraPlanaV["forma"]): Array<[number, number]> {
  // Coord SVG em viewbox 200x200, centro (100,100)
  const cx = 100, cy = 105, r = 70;
  switch (forma) {
    case "quadrado":
      return [
        [40, 40], [160, 40], [160, 160], [40, 160],
      ];
    case "retangulo":
      return [
        [25, 60], [175, 60], [175, 150], [25, 150],
      ];
    case "triangulo":
      return [
        [100, 30], [175, 165], [25, 165],
      ];
    case "pentagono":
    case "hexagono":
    case "octogono": {
      const n = forma === "pentagono" ? 5 : forma === "hexagono" ? 6 : 8;
      const pts: Array<[number, number]> = [];
      for (let i = 0; i < n; i++) {
        const ang = (-Math.PI / 2) + (2 * Math.PI * i) / n;
        pts.push([cx + r * Math.cos(ang), cy + r * Math.sin(ang)]);
      }
      return pts;
    }
    case "circulo":
      return [];
  }
}

function FiguraPlana({ v }: { v: FiguraPlanaV }) {
  const { forma, mostrarVertices = forma !== "circulo", mostrarAngulos, medidasLados, legenda } = v;
  const pts = verticesDe(forma);
  return (
    <div className="my-3 rounded-2xl bg-white/95 text-[#0d1f55] p-4 border-2 border-amber-300/50 max-w-xs mx-auto">
      {legenda && (
        <div className="text-xs font-black uppercase tracking-widest text-amber-600 text-center mb-2">
          {legenda}
        </div>
      )}
      <svg viewBox="0 0 200 200" className="w-full h-auto">
        {forma === "circulo" ? (
          <>
            <circle cx="100" cy="100" r="70" fill="#fde68a" stroke="#0d1f55" strokeWidth="3" />
            <circle cx="100" cy="100" r="2" fill="#0d1f55" />
            <text x="105" y="105" fontSize="10" fill="#0d1f55" fontWeight="bold">O</text>
          </>
        ) : (
          <>
            <polygon
              points={pts.map((p) => p.join(",")).join(" ")}
              fill="#fde68a"
              stroke="#0d1f55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {/* Ângulos retos: quadrado/retângulo */}
            {mostrarAngulos && (forma === "quadrado" || forma === "retangulo") && pts.map((p, i) => {
              const [x, y] = p;
              // desenha pequeno quadradinho interno
              const dx = x < 100 ? 10 : -10;
              const dy = y < 100 ? 10 : -10;
              return (
                <path
                  key={`ang-${i}`}
                  d={`M ${x + dx} ${y} L ${x + dx} ${y + dy} L ${x} ${y + dy}`}
                  fill="none"
                  stroke="#0d1f55"
                  strokeWidth="2"
                />
              );
            })}
            {/* Vértices A, B, C, D... */}
            {mostrarVertices && pts.map((p, i) => {
              const [x, y] = p;
              const ox = x < 100 ? -14 : x > 100 ? 14 : 0;
              const oy = y < 100 ? -8 : y > 100 ? 18 : -10;
              return (
                <g key={`v-${i}`}>
                  <circle cx={x} cy={y} r="4" fill="#dc2626" />
                  <text
                    x={x + ox}
                    y={y + oy}
                    fontSize="14"
                    fontWeight="bold"
                    fill="#0d1f55"
                    textAnchor="middle"
                  >
                    {LETRAS[i]}
                  </text>
                </g>
              );
            })}
            {/* Medidas dos lados */}
            {medidasLados && pts.map((p, i) => {
              const q = pts[(i + 1) % pts.length];
              const mx = (p[0] + q[0]) / 2;
              const my = (p[1] + q[1]) / 2;
              const nx = my < 100 ? -12 : 12;
              return (
                <text
                  key={`m-${i}`}
                  x={mx}
                  y={my + nx}
                  fontSize="11"
                  fill="#059669"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {medidasLados[i] ?? ""}
                </text>
              );
            })}
          </>
        )}
      </svg>
      <div className="mt-2 text-center text-sm font-bold">
        {forma === "circulo" ? "Círculo — sem vértices" : `${pts.length} lados · ${pts.length} vértices`}
      </div>
    </div>
  );
}

// ------------------------- Sólidos 3D --------------------------------

const SOLIDO_PADRAO: Record<SolidoV["forma"], { f: number; v: number; a: number }> = {
  cubo: { f: 6, v: 8, a: 12 },
  esfera: { f: 0, v: 0, a: 0 },
  cone: { f: 2, v: 1, a: 1 },
  cilindro: { f: 3, v: 0, a: 2 },
  piramide: { f: 5, v: 5, a: 8 },
};

function Solido({ v }: { v: SolidoV }) {
  const { forma, legenda } = v;
  const p = SOLIDO_PADRAO[forma];
  const faces = v.faces ?? p.f;
  const vert = v.vertices ?? p.v;
  const arestas = v.arestas ?? p.a;
  return (
    <div className="my-3 rounded-2xl bg-white/95 text-[#0d1f55] p-4 border-2 border-amber-300/50 max-w-xs mx-auto">
      {legenda && (
        <div className="text-xs font-black uppercase tracking-widest text-amber-600 text-center mb-2">
          {legenda}
        </div>
      )}
      <svg viewBox="0 0 200 180" className="w-full h-auto">
        {forma === "cubo" && (
          <g fill="#fde68a" stroke="#0d1f55" strokeWidth="2.5" strokeLinejoin="round">
            <polygon points="50,60 130,60 130,140 50,140" />
            <polygon points="50,60 90,30 170,30 130,60" fill="#fbbf24" />
            <polygon points="130,60 170,30 170,110 130,140" fill="#f59e0b" />
            <line x1="90" y1="30" x2="90" y2="110" strokeDasharray="3 3" />
            <line x1="90" y1="110" x2="50" y2="140" strokeDasharray="3 3" />
            <line x1="90" y1="110" x2="170" y2="110" strokeDasharray="3 3" />
          </g>
        )}
        {forma === "esfera" && (
          <g>
            <circle cx="100" cy="90" r="60" fill="#fde68a" stroke="#0d1f55" strokeWidth="2.5" />
            <ellipse cx="100" cy="90" rx="60" ry="18" fill="none" stroke="#0d1f55" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 40 90 Q 100 60 160 90" fill="none" stroke="#0d1f55" strokeWidth="1.5" />
          </g>
        )}
        {forma === "cone" && (
          <g fill="#fde68a" stroke="#0d1f55" strokeWidth="2.5">
            <ellipse cx="100" cy="140" rx="55" ry="16" fill="#fbbf24" />
            <path d="M 45 140 L 100 30 L 155 140" fill="#fde68a" />
            <path d="M 45 140 Q 100 156 155 140" fill="none" />
            <path d="M 45 140 Q 100 124 155 140" fill="none" strokeDasharray="3 3" />
          </g>
        )}
        {forma === "cilindro" && (
          <g fill="#fde68a" stroke="#0d1f55" strokeWidth="2.5">
            <rect x="45" y="45" width="110" height="90" fill="#fbbf24" />
            <ellipse cx="100" cy="45" rx="55" ry="14" fill="#fde68a" />
            <ellipse cx="100" cy="135" rx="55" ry="14" fill="#f59e0b" />
            <path d="M 45 45 L 45 135" />
            <path d="M 155 45 L 155 135" />
          </g>
        )}
        {forma === "piramide" && (
          <g fill="#fde68a" stroke="#0d1f55" strokeWidth="2.5" strokeLinejoin="round">
            <polygon points="30,140 170,140 130,110 70,110" fill="#f59e0b" />
            <polygon points="30,140 100,20 70,110" fill="#fde68a" />
            <polygon points="170,140 100,20 130,110" fill="#fbbf24" />
            <line x1="30" y1="140" x2="100" y2="20" />
            <line x1="170" y1="140" x2="100" y2="20" />
          </g>
        )}
      </svg>
      <div className="mt-2 grid grid-cols-3 gap-1 text-center text-xs font-bold">
        <div className="bg-amber-100 rounded p-1"><div className="text-lg text-amber-700">{faces}</div>faces</div>
        <div className="bg-amber-100 rounded p-1"><div className="text-lg text-amber-700">{vert}</div>vértices</div>
        <div className="bg-amber-100 rounded p-1"><div className="text-lg text-amber-700">{arestas}</div>arestas</div>
      </div>
    </div>
  );
}

// -------------------------- Simetria ---------------------------------

function Simetria({ v }: { v: SimetriaV }) {
  const { forma, letra, eixos, legenda } = v;
  return (
    <div className="my-3 rounded-2xl bg-white/95 text-[#0d1f55] p-4 border-2 border-amber-300/50 max-w-xs mx-auto">
      {legenda && (
        <div className="text-xs font-black uppercase tracking-widest text-amber-600 text-center mb-2">
          {legenda}
        </div>
      )}
      <svg viewBox="0 0 200 200" className="w-full h-auto">
        {/* Figura */}
        {forma === "quadrado" && (
          <polygon points="40,40 160,40 160,160 40,160" fill="#fde68a" stroke="#0d1f55" strokeWidth="2.5" />
        )}
        {forma === "retangulo" && (
          <polygon points="25,60 175,60 175,140 25,140" fill="#fde68a" stroke="#0d1f55" strokeWidth="2.5" />
        )}
        {forma === "triangulo" && (
          <polygon points="100,30 175,165 25,165" fill="#fde68a" stroke="#0d1f55" strokeWidth="2.5" />
        )}
        {forma === "circulo" && (
          <circle cx="100" cy="100" r="70" fill="#fde68a" stroke="#0d1f55" strokeWidth="2.5" />
        )}
        {forma === "borboleta" && (
          <path
            d="M 100 100 Q 40 40 30 90 Q 30 140 100 110 Q 170 140 170 90 Q 160 40 100 100 Z"
            fill="#fde68a"
            stroke="#0d1f55"
            strokeWidth="2.5"
          />
        )}
        {forma === "coracao" && (
          <path
            d="M 100 170 Q 30 120 30 80 Q 30 40 65 40 Q 90 40 100 70 Q 110 40 135 40 Q 170 40 170 80 Q 170 120 100 170 Z"
            fill="#fecaca"
            stroke="#0d1f55"
            strokeWidth="2.5"
          />
        )}
        {forma === "letra" && letra && (
          <text x="100" y="140" fontSize="120" fontWeight="900" textAnchor="middle" fill="#fde68a" stroke="#0d1f55" strokeWidth="2">
            {letra}
          </text>
        )}
        {/* Eixos */}
        {eixos.includes("vertical") && (
          <line x1="100" y1="10" x2="100" y2="190" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 4" />
        )}
        {eixos.includes("horizontal") && (
          <line x1="10" y1="100" x2="190" y2="100" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 4" />
        )}
        {eixos.includes("diagonal1") && (
          <line x1="20" y1="20" x2="180" y2="180" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 4" />
        )}
        {eixos.includes("diagonal2") && (
          <line x1="180" y1="20" x2="20" y2="180" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 4" />
        )}
      </svg>
      <div className="mt-2 text-center text-sm font-bold">
        {eixos.length === 0 ? "Sem eixo de simetria" : `${eixos.length} eixo${eixos.length > 1 ? "s" : ""} de simetria`}
      </div>
    </div>
  );
}

// ------------------------- Mapa em grade -----------------------------

function MapaGrade({ v }: { v: MapaGradeV }) {
  const { linhas, colunas, pinos, destaque, legenda } = v;
  const cellSize = 36;
  const w = colunas * cellSize + 30;
  const h = linhas * cellSize + 30;
  const colLabel = (c: number) => String.fromCharCode("A".charCodeAt(0) + c - 1);
  return (
    <div className="my-3 rounded-2xl bg-white/95 text-[#0d1f55] p-4 border-2 border-amber-300/50 max-w-md mx-auto">
      {legenda && (
        <div className="text-xs font-black uppercase tracking-widest text-amber-600 text-center mb-2">
          {legenda}
        </div>
      )}
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
        {/* Cabeçalho colunas */}
        {Array.from({ length: colunas }).map((_, c) => (
          <text
            key={`col-${c}`}
            x={30 + c * cellSize + cellSize / 2}
            y={20}
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
            fill="#0d1f55"
          >
            {colLabel(c + 1)}
          </text>
        ))}
        {/* Linhas rótulos (de baixo pra cima: 1 embaixo) */}
        {Array.from({ length: linhas }).map((_, r) => (
          <text
            key={`lin-${r}`}
            x={15}
            y={30 + (linhas - 1 - r) * cellSize + cellSize / 2 + 4}
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
            fill="#0d1f55"
          >
            {r + 1}
          </text>
        ))}
        {/* Células */}
        {Array.from({ length: linhas }).map((_, r) =>
          Array.from({ length: colunas }).map((_, c) => {
            const eDest = destaque && destaque.linha === linhas - r && destaque.coluna === c + 1;
            return (
              <rect
                key={`cel-${r}-${c}`}
                x={30 + c * cellSize}
                y={30 + r * cellSize}
                width={cellSize}
                height={cellSize}
                fill={eDest ? "#fde68a" : "white"}
                stroke="#0d1f55"
                strokeWidth="1"
              />
            );
          })
        )}
        {/* Pinos */}
        {pinos.map((p, i) => (
          <g key={`pin-${i}`}>
            <circle
              cx={30 + (p.coluna - 1) * cellSize + cellSize / 2}
              cy={30 + (linhas - p.linha) * cellSize + cellSize / 2}
              r={12}
              fill={p.cor ?? "#dc2626"}
              stroke="#0d1f55"
              strokeWidth="1.5"
            />
            <text
              x={30 + (p.coluna - 1) * cellSize + cellSize / 2}
              y={30 + (linhas - p.linha) * cellSize + cellSize / 2 + 4}
              fontSize="11"
              fontWeight="bold"
              textAnchor="middle"
              fill="white"
            >
              {p.rotulo}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ----------------------- Gráfico de barras ---------------------------

function GraficoBarras({ v }: { v: GraficoBarrasV }) {
  const { titulo, unidade, barras, destaqueMaior = true } = v;
  const max = Math.max(...barras.map((b) => b.valor), 1);
  const alturaMax = 140;
  const larguraBarra = 40;
  const gap = 16;
  const w = barras.length * (larguraBarra + gap) + 60;
  const h = alturaMax + 70;
  const maiorValor = Math.max(...barras.map((b) => b.valor));
  const CORES = ["#3b82f6", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6", "#ec4899"];
  return (
    <div className="my-3 rounded-2xl bg-white/95 text-[#0d1f55] p-4 border-2 border-amber-300/50 max-w-md mx-auto">
      {titulo && (
        <div className="text-sm font-black text-center mb-2">{titulo}</div>
      )}
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
        {/* Escala */}
        {[0, 0.25, 0.5, 0.75, 1].map((f, i) => {
          const y = 20 + alturaMax - f * alturaMax;
          const val = Math.round(f * max);
          return (
            <g key={`e-${i}`}>
              <line x1={40} y1={y} x2={w - 10} y2={y} stroke="#e5e7eb" strokeWidth="1" />
              <text x={35} y={y + 4} fontSize="10" textAnchor="end" fill="#0d1f55">{val}</text>
            </g>
          );
        })}
        {/* Eixos */}
        <line x1={40} y1={20} x2={40} y2={20 + alturaMax} stroke="#0d1f55" strokeWidth="2" />
        <line x1={40} y1={20 + alturaMax} x2={w - 10} y2={20 + alturaMax} stroke="#0d1f55" strokeWidth="2" />
        {/* Barras */}
        {barras.map((b, i) => {
          const altura = (b.valor / max) * alturaMax;
          const x = 50 + i * (larguraBarra + gap);
          const y = 20 + alturaMax - altura;
          const eMaior = destaqueMaior && b.valor === maiorValor;
          const cor = b.cor ?? CORES[i % CORES.length];
          return (
            <g key={`b-${i}`}>
              <rect
                x={x}
                y={y}
                width={larguraBarra}
                height={altura}
                fill={cor}
                stroke={eMaior ? "#dc2626" : "#0d1f55"}
                strokeWidth={eMaior ? 3 : 1}
                rx={4}
              />
              <text x={x + larguraBarra / 2} y={y - 4} fontSize="12" fontWeight="bold" textAnchor="middle" fill="#0d1f55">
                {b.valor}
              </text>
              <text x={x + larguraBarra / 2} y={20 + alturaMax + 14} fontSize="10" fontWeight="bold" textAnchor="middle" fill="#0d1f55">
                {b.rotulo}
              </text>
            </g>
          );
        })}
        {unidade && (
          <text x={15} y={15} fontSize="10" fill="#0d1f55" fontWeight="bold">{unidade}</text>
        )}
      </svg>
    </div>
  );
}

// ---------------------------- Tabela --------------------------------

function Tabela({ v }: { v: TabelaV }) {
  const { titulo, cabecalhos, linhas, destacar } = v;
  const cellStyle: CSSProperties = { borderColor: "#0d1f55" };
  return (
    <div className="my-3 rounded-2xl bg-white/95 text-[#0d1f55] p-4 border-2 border-amber-300/50 max-w-md mx-auto overflow-x-auto">
      {titulo && <div className="text-sm font-black text-center mb-2">{titulo}</div>}
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th className="border-2 p-2 bg-amber-100 font-black" style={cellStyle}></th>
            {cabecalhos.map((c, i) => (
              <th
                key={i}
                className={`border-2 p-2 font-black ${destacar?.coluna === i + 1 ? "bg-amber-300" : "bg-amber-100"}`}
                style={cellStyle}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((l, i) => (
            <tr key={i}>
              <td
                className={`border-2 p-2 font-black ${destacar?.linha === i + 1 ? "bg-amber-300" : "bg-amber-100"}`}
                style={cellStyle}
              >
                {l.rotulo}
              </td>
              {l.valores.map((val, j) => {
                const eDest = destacar?.linha === i + 1 && destacar?.coluna === j + 1;
                return (
                  <td
                    key={j}
                    className={`border-2 p-2 text-center font-bold tabular-nums ${eDest ? "bg-amber-300" : ""}`}
                    style={cellStyle}
                  >
                    {val}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --------------------- Escala de probabilidade ----------------------

const NIVEL_POS: Record<EscalaProbV["itens"][number]["nivel"], { pct: number; cor: string; label: string }> = {
  impossivel: { pct: 0, cor: "#dc2626", label: "Impossível" },
  pouco: { pct: 25, cor: "#f97316", label: "Pouco provável" },
  provavel: { pct: 50, cor: "#eab308", label: "50/50" },
  muito: { pct: 75, cor: "#84cc16", label: "Muito provável" },
  certo: { pct: 100, cor: "#16a34a", label: "Certo" },
};

function EscalaProb({ v }: { v: EscalaProbV }) {
  return (
    <div className="my-3 rounded-2xl bg-white/95 text-[#0d1f55] p-4 border-2 border-amber-300/50 max-w-md mx-auto">
      {/* Barra da escala */}
      <div className="relative h-6 rounded-full overflow-hidden mb-1"
        style={{ background: "linear-gradient(90deg, #dc2626 0%, #f97316 25%, #eab308 50%, #84cc16 75%, #16a34a 100%)" }}
      />
      <div className="flex justify-between text-[10px] font-black mb-4">
        <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
      </div>
      <div className="flex justify-between text-[10px] font-bold text-[#0d1f55]/70 mb-3">
        <span>Impossível</span><span>Pouco</span><span>50/50</span><span>Muito</span><span>Certo</span>
      </div>
      <div className="space-y-2">
        {v.itens.map((it, i) => {
          const n = NIVEL_POS[it.nivel];
          return (
            <div key={i} className="flex items-center gap-3">
              <div className="flex-1 text-sm font-bold">{it.evento}</div>
              <div
                className="text-[10px] font-black text-white px-2 py-1 rounded-full"
                style={{ background: n.cor }}
              >
                {n.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
