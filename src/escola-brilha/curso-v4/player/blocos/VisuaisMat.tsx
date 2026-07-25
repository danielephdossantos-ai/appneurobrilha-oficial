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
  | RetaNumericaV
  | DizimaGeratrizV
  | SomaFracoesV
  | NotacaoCientificaV;

// ------------------ Dízima periódica → fração geratriz ---------------
export type DizimaGeratrizV = {
  tipo: "dizimaGeratriz";
  /** Dízima com reticências, ex.: "0,212121..." ou "0,04777..." */
  dizima: string;
  /** Algarismos do período (repetem), ex.: "21" ou "7". */
  periodo: string;
  /** Parte não-periódica após a vírgula (dízima composta), ex.: "04". Opcional. */
  parteNaoPeriodica?: string;
  /** Fração final já simplificada, ex.: "7/33". */
  resultado: string;
  /** Fração antes de simplificar, opcional, ex.: "21/99". */
  resultadoBruto?: string;
  legenda?: string;
};

// ------------------ Soma/subtração de frações ------------------------
export type SomaFracoesV = {
  tipo: "somaFracoes";
  operacao: "+" | "-";
  a: { num: number; den: number };
  b: { num: number; den: number };
  /** Se true, mostra a linha de simplificação final. Padrão: true. */
  simplificar?: boolean;
  legenda?: string;
};

// ------------------ Notação científica -------------------------------
export type NotacaoCientificaV = {
  tipo: "notacaoCientifica";
  /** Número original, ex.: "230000000" ou "0,00000034". */
  numero: string;
  /** Coeficiente 1 ≤ N < 10, ex.: "2,3". */
  coeficiente: string;
  /** Expoente inteiro (positivo p/ grandes, negativo p/ pequenos). */
  expoente: number;
  legenda?: string;
};

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

/**
 * Reta numérica horizontal — 6º ano em diante.
 * Suporta negativos, positivos e zero. Padrão internacional:
 * setas nas duas pontas, tick central marcado como 0, ticks em passo constante.
 */
export type RetaNumericaV = {
  tipo: "retaNumerica";
  min: number;
  max: number;
  /** Espaçamento entre ticks marcados (padrão = 1). */
  passo?: number;
  /** Números com bolinha destacada. */
  destacar?: Array<{ valor: number; cor?: string; rotulo?: string }>;
  /** Intervalos coloridos entre dois valores (ex.: −3 a 3). */
  intervalos?: Array<{ de: number; ate: number; cor?: string; rotulo?: string }>;
  legenda?: string;
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
    case "retaNumerica":
      return <RetaNumerica v={v} />;
    case "dizimaGeratriz":
      return <DizimaGeratriz v={v} />;
    case "somaFracoes":
      return <SomaFracoes v={v} />;
    case "notacaoCientifica":
      return <NotacaoCientifica v={v} />;
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

// -------------------- Reta numérica (com negativos) ------------------

function RetaNumerica({ v }: { v: RetaNumericaV }) {
  const passo = v.passo ?? 1;
  const min = v.min;
  const max = v.max;
  const total = max - min;
  if (total <= 0) return null;

  // Layout
  const W = 640, H = 140;
  const padX = 40;
  const y = 70;
  const usable = W - padX * 2;
  const scale = (val: number) => padX + ((val - min) / total) * usable;

  const ticks: number[] = [];
  for (let n = Math.ceil(min / passo) * passo; n <= max; n += passo) ticks.push(n);

  return (
    <div className="inline-block w-full max-w-[640px]" data-no-tts>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
        {/* intervalos coloridos */}
        {v.intervalos?.map((iv, i) => {
          const x1 = scale(Math.min(iv.de, iv.ate));
          const x2 = scale(Math.max(iv.de, iv.ate));
          return (
            <g key={`iv-${i}`}>
              <rect x={x1} y={y - 14} width={x2 - x1} height={28} fill={iv.cor ?? "#38bdf8"} opacity={0.25} rx={4} />
              {iv.rotulo && (
                <text x={(x1 + x2) / 2} y={y - 20} textAnchor="middle" fontSize={12} fill="#0ea5e9" fontWeight={600}>
                  {iv.rotulo}
                </text>
              )}
            </g>
          );
        })}

        {/* linha principal com setas */}
        <defs>
          <marker id="rn-arrow-l" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M10,0 L0,5 L10,10 z" fill="currentColor" />
          </marker>
          <marker id="rn-arrow-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>
        <line
          x1={padX - 20} y1={y} x2={W - padX + 20} y2={y}
          stroke="currentColor" strokeWidth={2}
          markerStart="url(#rn-arrow-l)" markerEnd="url(#rn-arrow-r)"
        />

        {/* ticks */}
        {ticks.map((n) => {
          const x = scale(n);
          const isZero = n === 0;
          return (
            <g key={`t-${n}`}>
              <line x1={x} y1={y - (isZero ? 12 : 8)} x2={x} y2={y + (isZero ? 12 : 8)} stroke="currentColor" strokeWidth={isZero ? 2.5 : 1.5} />
              <text
                x={x}
                y={y + 28}
                textAnchor="middle"
                fontSize={isZero ? 16 : 13}
                fontWeight={isZero ? 700 : 500}
                fill={n < 0 ? "#f97316" : n > 0 ? "#0ea5e9" : "currentColor"}
              >
                {n}
              </text>
            </g>
          );
        })}

        {/* destaques */}
        {v.destacar?.map((d, i) => {
          const x = scale(d.valor);
          const cor = d.cor ?? (d.valor < 0 ? "#f97316" : d.valor > 0 ? "#0ea5e9" : "#fbbf24");
          return (
            <g key={`d-${i}`}>
              <circle cx={x} cy={y} r={9} fill={cor} stroke="white" strokeWidth={2} />
              {d.rotulo && (
                <text x={x} y={y - 20} textAnchor="middle" fontSize={13} fontWeight={700} fill={cor}>
                  {d.rotulo}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      {v.legenda && <div className="text-center text-sm text-white/70 mt-1">{v.legenda}</div>}
    </div>
  );
}

// ============================================================================
// Dízima periódica → fração geratriz
// ============================================================================
function DizimaGeratriz({ v }: { v: DizimaGeratrizV }) {
  const { dizima, periodo, parteNaoPeriodica, resultado, resultadoBruto, legenda } = v;
  const nPeriodo = periodo.length;
  const nNaoPer = parteNaoPeriodica?.length ?? 0;
  // fator1: 10^(nNaoPer + nPeriodo)  fator2: 10^nNaoPer
  const fator1 = Math.pow(10, nNaoPer + nPeriodo);
  const fator2 = Math.pow(10, nNaoPer);
  const isComposta = nNaoPer > 0;

  // parte inteira dos deslocados
  const inteiroPeriodo = parseInt(periodo, 10);
  const inteiroNaoPer = parseInt(parteNaoPeriodica || "0", 10);
  const numeradorBruto = isComposta
    ? inteiroNaoPer * Math.pow(10, nPeriodo) + inteiroPeriodo - inteiroNaoPer
    : inteiroPeriodo;
  const denominadorBruto = "9".repeat(nPeriodo) + "0".repeat(nNaoPer);

  // parte decimal repetida com destaque colorido
  const renderDizima = () => {
    const [intPart, decPart = ""] = dizima.replace("...", "").split(",");
    return (
      <span>
        {intPart},
        {parteNaoPeriodica && (
          <span className="text-slate-500">{parteNaoPeriodica}</span>
        )}
        <span className="text-red-600 font-black">
          {decPart.slice(nNaoPer, nNaoPer + nPeriodo)}
          {decPart.slice(nNaoPer + nPeriodo, nNaoPer + nPeriodo * 2) && (
            <span className="text-red-600">{decPart.slice(nNaoPer + nPeriodo, nNaoPer + nPeriodo * 2)}</span>
          )}
        </span>
        <span className="text-slate-400">…</span>
      </span>
    );
  };

  return (
    <div className="my-4 rounded-2xl bg-white/95 text-[#0d1f55] p-5 border-2 border-sky-300/60 max-w-md mx-auto">
      {legenda && (
        <div className="text-xs font-black uppercase tracking-widest text-sky-600 text-center mb-3">
          {legenda}
        </div>
      )}

      <div className="text-center text-2xl font-bold mb-4">
        {renderDizima()}
      </div>

      {/* Sistema de equações com chave */}
      <div className="relative pl-6 py-2 mb-3">
        <div className="absolute left-1 top-2 bottom-2 w-3 border-y-2 border-l-2 border-sky-500 rounded-l-md" />
        <div className="space-y-1 font-mono text-lg">
          {isComposta && (
            <div>
              <span className="text-slate-500">{fator2}</span>x = {(inteiroNaoPer + inteiroPeriodo / Math.pow(10, nPeriodo)).toString().replace(".", ",")}
              <span className="text-red-600">{periodo}</span>
              <span className="text-slate-400">…</span>
            </div>
          )}
          <div>
            <span className="text-slate-500">{fator1}</span>x = {(isComposta ? inteiroNaoPer : "") + periodo},
            <span className="text-red-600">{periodo}</span>
            <span className="text-slate-400">…</span>
          </div>
          <div>
            <span className="text-slate-500">{isComposta ? fator2 : 1}</span>x = {isComposta ? `${inteiroNaoPer},` : "0,"}
            {parteNaoPeriodica ?? ""}
            <span className="text-red-600">{periodo}</span>
            <span className="text-slate-400">…</span>
          </div>
        </div>
      </div>

      <div className="text-center text-slate-400 font-black mb-1">−</div>
      <div className="border-t-2 border-slate-700 mb-3" />

      {/* Resultado da subtração */}
      <div className="text-center font-mono text-xl font-bold text-emerald-700 mb-3">
        {fator1 - fator2}x = {numeradorBruto}
      </div>

      {/* Isolar x */}
      <div className="text-center font-mono text-lg mb-2">
        x = <span className="inline-flex flex-col items-center align-middle mx-1">
          <span className="border-b-2 border-[#0d1f55] px-2">{numeradorBruto}</span>
          <span className="px-2">{denominadorBruto}</span>
        </span>
      </div>

      {/* Simplificação */}
      {resultadoBruto && resultadoBruto !== resultado && (
        <div className="text-center font-mono text-lg text-slate-500 mb-1">
          = <span className="inline-flex flex-col items-center align-middle mx-1 text-slate-500 line-through">
            <span className="border-b-2 border-slate-400 px-2">{resultadoBruto.split("/")[0]}</span>
            <span className="px-2">{resultadoBruto.split("/")[1]}</span>
          </span>
        </div>
      )}

      <div className="text-center mt-2 bg-emerald-100 rounded-xl py-2 px-3 border-2 border-emerald-500">
        <span className="font-bold text-emerald-900">x = </span>
        <span className="inline-flex flex-col items-center align-middle mx-1 text-emerald-800 font-black text-2xl">
          <span className="border-b-2 border-emerald-800 px-3">{resultado.split("/")[0]}</span>
          <span className="px-3">{resultado.split("/")[1]}</span>
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// Soma / subtração de frações com cruzamento visual
// ============================================================================
function gcd(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a || 1;
}

function SomaFracoes({ v }: { v: SomaFracoesV }) {
  const { operacao, a, b, simplificar = true, legenda } = v;
  const denComum = a.den * b.den;
  const numA = a.num * b.den;
  const numB = b.num * a.den;
  const numFinal = operacao === "+" ? numA + numB : numA - numB;
  const g = gcd(numFinal, denComum);
  const numSimp = numFinal / g;
  const denSimp = denComum / g;
  const podeSimplificar = simplificar && g > 1;

  const Frac = ({
    num, den, numColor, denColor,
  }: { num: React.ReactNode; den: React.ReactNode; numColor?: string; denColor?: string }) => (
    <span className="inline-flex flex-col items-center align-middle mx-1">
      <span className={`border-b-2 border-[#0d1f55] px-2 font-bold ${numColor ?? ""}`}>{num}</span>
      <span className={`px-2 font-bold ${denColor ?? ""}`}>{den}</span>
    </span>
  );

  return (
    <div className="my-4 rounded-2xl bg-white/95 text-[#0d1f55] p-5 border-2 border-fuchsia-300/60 max-w-md mx-auto">
      {legenda && (
        <div className="text-xs font-black uppercase tracking-widest text-fuchsia-600 text-center mb-3">
          {legenda}
        </div>
      )}

      {/* Linha 1: as duas frações com denominadores circulados */}
      <div className="flex items-center justify-center text-2xl mb-4">
        <span className="relative">
          <Frac num={a.num} den={a.den} numColor="text-sky-700" denColor="text-red-600" />
          <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-red-500" />
        </span>
        <span className="mx-2 font-black">{operacao}</span>
        <span className="relative">
          <Frac num={b.num} den={b.den} numColor="text-sky-700" denColor="text-red-600" />
          <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-red-500" />
        </span>
        <span className="mx-2 font-black">=</span>
      </div>

      {/* Linha 2: numerador desenvolvido */}
      <div className="flex items-center justify-center text-xl mb-3">
        <span className="text-slate-600 mr-2">Denominador comum:</span>
        <Frac
          num={<span><span className="text-sky-700">{a.num}·{b.den}</span> {operacao} <span className="text-emerald-700">{b.num}·{a.den}</span></span>}
          den={<span className="text-red-600">{a.den}·{b.den}</span>}
        />
      </div>

      {/* Linha 3: cálculo */}
      <div className="flex items-center justify-center text-2xl mb-3">
        <Frac
          num={<span><span className="text-sky-700">{numA}</span> {operacao} <span className="text-emerald-700">{numB}</span></span>}
          den={<span className="text-red-600">{denComum}</span>}
        />
        <span className="mx-2 font-black">=</span>
        <Frac num={numFinal} den={denComum} />
      </div>

      {/* Simplificação */}
      {podeSimplificar && (
        <div className="flex items-center justify-center text-xl mb-2 text-slate-500">
          <span className="mr-1">=</span>
          <span className="inline-flex flex-col items-center align-middle mx-1 line-through">
            <span className="border-b-2 border-slate-400 px-2">{numFinal}</span>
            <span className="px-2">{denComum}</span>
          </span>
          <span className="text-slate-400 mx-2">÷{g}</span>
        </div>
      )}

      {/* Resultado final */}
      <div className="flex items-center justify-center bg-emerald-100 rounded-xl py-2 px-3 border-2 border-emerald-500">
        <span className="font-bold text-emerald-900 mr-2">=</span>
        <span className="inline-flex flex-col items-center align-middle mx-1 text-emerald-800 font-black text-2xl">
          <span className="border-b-2 border-emerald-800 px-3">{numSimp}</span>
          <span className="px-3">{denSimp}</span>
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// Notação científica — deslocamento da vírgula
// ============================================================================
function NotacaoCientifica({ v }: { v: NotacaoCientificaV }) {
  const { numero, coeficiente, expoente, legenda } = v;
  const casas = Math.abs(expoente);
  const direcao = expoente > 0 ? "esquerda" : "direita";

  return (
    <div className="my-4 rounded-2xl bg-white/95 text-[#0d1f55] p-5 border-2 border-amber-300/60 max-w-md mx-auto">
      {legenda && (
        <div className="text-xs font-black uppercase tracking-widest text-amber-600 text-center mb-3">
          {legenda}
        </div>
      )}

      <div className="text-center text-3xl font-black mb-1 tracking-wider">
        {numero}
      </div>
      <div className="text-center text-amber-600 text-2xl -my-1">↓</div>
      <div className="text-center text-sm text-slate-600 mb-2">
        vírgula andou <span className="font-black text-amber-700">{casas}</span> {casas === 1 ? "casa" : "casas"} para a {direcao}
      </div>

      <div className="text-center text-3xl font-black text-emerald-700 my-3">
        <span className="text-sky-700">{coeficiente}</span>
        <span className="mx-1">·</span>
        <span>10</span>
        <sup className={`text-xl ml-0.5 ${expoente < 0 ? "text-red-600" : "text-emerald-700"}`}>{expoente}</sup>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs mt-3">
        <div className="bg-sky-50 border-2 border-sky-300 rounded-lg p-2 text-center">
          <div className="font-black text-sky-700 uppercase text-[10px]">Coeficiente</div>
          <div className="text-slate-600 mt-1">1 ≤ N &lt; 10</div>
        </div>
        <div className={`${expoente < 0 ? "bg-red-50 border-red-300" : "bg-emerald-50 border-emerald-300"} border-2 rounded-lg p-2 text-center`}>
          <div className={`font-black uppercase text-[10px] ${expoente < 0 ? "text-red-700" : "text-emerald-700"}`}>
            Expoente
          </div>
          <div className="text-slate-600 mt-1">
            {expoente < 0 ? "número pequeno" : "número grande"}
          </div>
        </div>
      </div>
    </div>
  );
}
