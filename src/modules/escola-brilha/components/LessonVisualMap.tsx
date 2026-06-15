import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ════════════════════════════════════
   BIOMAS BRASILEIROS  (EF06GE08)
   ════════════════════════════════════ */
export const BiomasBrasilMap: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const biomes = [
    {
      id: "amazonia",
      name: "Amazônia",
      pct: "49%",
      bg: "bg-green-600",
      light: "bg-green-50",
      border: "border-green-300",
      label: "AMZ",
      animals: "onça, arara, macaco",
      desc: "Maior floresta tropical do mundo",
    },
    {
      id: "cerrado",
      name: "Cerrado",
      pct: "22%",
      bg: "bg-yellow-600",
      light: "bg-yellow-50",
      border: "border-yellow-300",
      label: "CER",
      animals: "lobo, ema, veado",
      desc: "Savana mais biodiversa do planeta",
    },
    {
      id: "caatinga",
      name: "Caatinga",
      pct: "10%",
      bg: "bg-orange-500",
      light: "bg-orange-50",
      border: "border-orange-300",
      label: "CAA",
      animals: "lagartixa, canguru-rato",
      desc: "Único bioma exclusivamente brasileiro",
    },
    {
      id: "mata",
      name: "Mata Atlântica",
      pct: "13%",
      bg: "bg-emerald-600",
      light: "bg-emerald-50",
      border: "border-emerald-300",
      label: "MA",
      animals: "sapo, borboleta, perereca",
      desc: "Hotspot de biodiversidade global",
    },
    {
      id: "pantanal",
      name: "Pantanal",
      pct: "2%",
      bg: "bg-blue-500",
      light: "bg-blue-50",
      border: "border-blue-300",
      label: "PAN",
      animals: "jacaré, garça, lontra",
      desc: "Maior área úmida do mundo",
    },
    {
      id: "pampa",
      name: "Pampa",
      pct: "2%",
      bg: "bg-lime-500",
      light: "bg-lime-50",
      border: "border-lime-300",
      label: "PAM",
      animals: "cavalo, avestruz, capivara",
      desc: "Campos do Sul do Brasil",
    },
  ];

  const active = biomes.find((b) => b.id === hovered);

  return (
    <div className="space-y-3">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-center">
        Mapa dos Biomas
      </p>

      {/* Bar chart representing area % */}
      <div className="bg-white rounded-2xl border border-slate-100 p-3 shadow-sm">
        <div className="flex h-14 gap-1 rounded-xl overflow-hidden mb-2">
          {biomes.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
              style={{ flexGrow: parseFloat(b.pct) }}
              onMouseEnter={() => setHovered(b.id)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(b.id)}
              className={`${b.bg} flex flex-col items-center justify-end cursor-pointer transition-opacity
                ${hovered && hovered !== b.id ? "opacity-50" : "opacity-100"}`}
            >
              <span className="text-white text-[10px] font-black pb-1">{b.pct}</span>
            </motion.div>
          ))}
        </div>
        {/* Detail card on hover */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`${active.light} ${active.border} border rounded-xl p-2 flex items-center gap-2`}
            >
              <div
                className={`${active.bg} text-white text-[10px] font-black w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}
              >
                {active.label}
              </div>
              <div>
                <p className="font-black text-slate-800 text-sm">
                  {active.name} — {active.pct}
                </p>
                <p className="text-slate-500 text-xs">{active.desc}</p>
                <p className="text-[10px] text-slate-400 mt-0.5 italic">{active.animals}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Grid of biome cards */}
      <div className="grid grid-cols-2 gap-2">
        {biomes.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className={`${b.light} ${b.border} border rounded-xl p-2.5 flex items-center gap-2`}
          >
            <div className={`${b.bg} w-8 h-8 rounded-lg flex items-center justify-center shrink-0`}>
              <span className="text-white text-[9px] font-black">{b.label}</span>
            </div>
            <div>
              <p className="font-black text-slate-800 text-xs leading-tight">{b.name}</p>
              <p className="text-slate-500 text-[10px]">{b.pct} do Brasil</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ════════════════════════════════════
   OCEANOS E CLIMA  (EF06CI04)
   ════════════════════════════════════ */
export const OceanosMap: React.FC = () => {
  const zones = [
    {
      name: "Zona de Luz",
      depth: "0 – 200m",
      color: "bg-sky-400",
      label: "SOL",
      text: "Luz solar penetra. Algas e peixes coloridos.",
    },
    {
      name: "Zona Crepuscular",
      depth: "200 – 1000m",
      color: "bg-blue-600",
      label: "CRE",
      text: "Pouca luz. Lulas e tubarões vivem aqui.",
    },
    {
      name: "Zona Meia-noite",
      depth: "1000 – 4000m",
      color: "bg-indigo-800",
      label: "NOI",
      text: "Escuridão total. Criaturas bioluminescentes.",
    },
    {
      name: "Zona Abissal",
      depth: "4000 – 6000m",
      color: "bg-slate-900",
      label: "ABI",
      text: "Pressão enorme. Temperatura perto do 0°C.",
    },
    {
      name: "Zona Hadal",
      depth: "> 6000m",
      color: "bg-black",
      label: "HAD",
      text: "Fossos oceânicos. Maior profundidade = 11km.",
    },
  ];
  const [revealed, setRevealed] = useState<number[]>([]);
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const go = async () => {
      for (let i = 0; i < zones.length; i++) {
        await new Promise((r) => setTimeout(r, 300 + i * 400));
        setRevealed((p) => [...p, i]);
      }
    };
    go();
  }, []);

  return (
    <div className="space-y-2">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-center mb-2">
        Zonas do Oceano
      </p>
      {zones.map((z, i) => (
        <AnimatePresence key={z.name}>
          {revealed.includes(i) && (
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="flex items-center gap-2 rounded-xl overflow-hidden border border-slate-200 shadow-sm"
            >
              <div className={`${z.color} w-12 h-12 flex items-center justify-center shrink-0`}>
                <span className="text-white text-[9px] font-black">{z.label}</span>
              </div>
              <div className="flex-1 py-2 pr-2">
                <p className="font-black text-slate-800 text-xs">{z.name}</p>
                <p className="text-slate-400 text-[10px] font-mono">{z.depth}</p>
                <p className="text-slate-600 text-[11px] font-medium leading-tight mt-0.5">
                  {z.text}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
};

/* ════════════════════════════════════
   CÉLULA  (EF07CI10)
   ════════════════════════════════════ */
export const CelulaDiagram: React.FC = () => {
  const parts = [
    {
      name: "Membrana Plasmática",
      label: "MEM",
      dot: "bg-violet-500",
      color: "bg-violet-100 border-violet-300",
      text: "Controla entrada e saída de substâncias.",
    },
    {
      name: "Citoplasma",
      label: "CIT",
      dot: "bg-blue-500",
      color: "bg-blue-100 border-blue-300",
      text: "Meio líquido onde ficam as organelas.",
    },
    {
      name: "Núcleo",
      label: "NÚC",
      dot: "bg-pink-500",
      color: "bg-pink-100 border-pink-300",
      text: "Contém o DNA — centro de controle.",
    },
    {
      name: "Mitocôndria",
      label: "MIT",
      dot: "bg-yellow-500",
      color: "bg-yellow-100 border-yellow-300",
      text: "Produz energia (ATP) para a célula.",
    },
    {
      name: "Ribossomo",
      label: "RIB",
      dot: "bg-green-500",
      color: "bg-green-100 border-green-300",
      text: "Fabrica proteínas necessárias.",
    },
    {
      name: "Retículo Endoplasmático",
      label: "RET",
      dot: "bg-orange-500",
      color: "bg-orange-100 border-orange-300",
      text: "Transporte interno de substâncias.",
    },
  ];
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-center mb-1">
        Estrutura da Célula Eucarionte
      </p>

      {/* Simplified cell diagram */}
      <div className="bg-violet-50 border-2 border-violet-200 rounded-2xl p-4 relative flex items-center justify-center min-h-[120px]">
        <div className="w-32 h-20 bg-violet-200/60 rounded-full border-2 border-violet-400 relative flex items-center justify-center">
          <div className="w-12 h-10 bg-pink-300 rounded-full border-2 border-pink-500 flex items-center justify-center text-xs font-black text-pink-700">
            DNA
          </div>
          <div className="absolute -top-2 -right-2 bg-yellow-400 text-white text-[8px] font-black rounded-full w-6 h-6 flex items-center justify-center">
            ATP
          </div>
          <div className="absolute -bottom-2 -left-3 bg-green-500 text-white text-[8px] font-black rounded-full w-6 h-6 flex items-center justify-center">
            PRO
          </div>
        </div>
        <div className="absolute top-2 right-3 text-[10px] font-bold text-violet-600">
          Toque nas partes →
        </div>
      </div>

      {/* Parts list */}
      <div className="grid grid-cols-1 gap-1.5">
        {parts.map((p, i) => (
          <motion.button
            key={p.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setActive(active === p.name ? null : p.name)}
            className={`${p.color} border rounded-xl p-2.5 flex items-center gap-2 text-left transition-all`}
          >
            <div
              className={`${p.dot} text-white text-[9px] font-black w-8 h-8 rounded-lg flex items-center justify-center shrink-0`}
            >
              {p.label}
            </div>
            <div className="flex-1">
              <p className="font-black text-slate-800 text-xs">{p.name}</p>
              <AnimatePresence>
                {active === p.name && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-slate-600 text-[11px] mt-0.5 font-medium overflow-hidden"
                  >
                    {p.text}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

/* ════════════════════════════════════
   EQUAÇÕES  (EF07MA18) — Passo a passo
   ════════════════════════════════════ */
export const EquacaoSteps: React.FC = () => {
  const [step, setStep] = useState(0);
  const steps = [
    {
      expr: "2x + 4 = 12",
      color: "bg-blue-50   border-blue-400   text-blue-800",
      label: "Equação original",
    },
    {
      expr: "2x = 12 − 4",
      color: "bg-orange-50 border-orange-400 text-orange-800",
      label: "Subtrair 4 dos dois lados",
    },
    {
      expr: "2x = 8",
      color: "bg-amber-50  border-amber-400  text-amber-800",
      label: "Resultado intermediário",
    },
    {
      expr: "x = 8 ÷ 2",
      color: "bg-teal-50   border-teal-400   text-teal-800",
      label: "Dividir os dois lados por 2",
    },
    {
      expr: "x = 4",
      color: "bg-green-50  border-green-400  text-green-800",
      label: "Solução encontrada!",
      highlight: true,
    },
    {
      expr: "2(4) + 4 = 12",
      color: "bg-violet-50 border-violet-400 text-violet-800",
      label: "Verificação",
    },
  ];

  return (
    <div className="space-y-3">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-center">
        Resolução Passo a Passo
      </p>
      <div className="space-y-2">
        {steps.slice(0, step + 1).map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className={`border-2 rounded-xl px-4 py-2.5 ${s.color} ${(s as any).highlight ? "ring-4 ring-yellow-300 shadow-md" : ""}`}
          >
            <p className="text-[10px] font-bold uppercase opacity-60 tracking-wider">{s.label}</p>
            <p className="font-black text-xl text-center mt-0.5">{s.expr}</p>
          </motion.div>
        ))}
      </div>
      {step < steps.length - 1 ? (
        <button
          onClick={() => setStep((p) => p + 1)}
          className="w-full bg-amber-500 text-white font-black py-2.5 rounded-xl shadow-md hover:bg-amber-600 transition active:scale-95"
        >
          Próximo passo →
        </button>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-green-500 text-white rounded-xl py-2 text-center font-black shadow-md"
        >
          Equação resolvida!
        </motion.div>
      )}
    </div>
  );
};

/* ════════════════════════════════════
   SISTEMA NERVOSO  (EF08CI08)
   ════════════════════════════════════ */
export const SistemaNervosoDiagram: React.FC = () => {
  const parts = [
    {
      name: "Cérebro",
      label: "CER",
      size: "text-base",
      bg: "bg-indigo-500",
      desc: "Pensamento, memória, emoções, consciência.",
    },
    {
      name: "Cerebelo",
      label: "CBL",
      size: "text-sm",
      bg: "bg-blue-500",
      desc: "Equilíbrio, postura e coordenação motora.",
    },
    {
      name: "Bulbo",
      label: "BUL",
      size: "text-sm",
      bg: "bg-violet-500",
      desc: "Controla respiração e batimentos cardíacos.",
    },
    {
      name: "Medula Espinhal",
      label: "MED",
      size: "text-sm",
      bg: "bg-cyan-500",
      desc: "Conduz impulsos e controla reflexos.",
    },
    {
      name: "Neurônios",
      label: "NEU",
      size: "text-sm",
      bg: "bg-teal-500",
      desc: "Células que transmitem impulsos elétricos.",
    },
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-center">
        Sistema Nervoso Central
      </p>

      {/* Visual diagram */}
      <div className="bg-indigo-950 rounded-2xl p-4 flex flex-col items-center gap-1">
        <div className="bg-indigo-500 text-white text-[10px] font-black px-3 py-2 rounded-2xl mb-1">
          CÉREBRO
        </div>
        <div className="w-0.5 h-4 bg-indigo-400" />
        <div className="bg-blue-500 text-white text-[10px] font-black px-2 py-1.5 rounded-xl">
          CEREBELO
        </div>
        <div className="bg-violet-500 text-white text-[10px] font-black px-2 py-1.5 rounded-xl">
          BULBO
        </div>
        <div className="w-0.5 h-8 bg-indigo-400" />
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-1">
            <div className="bg-cyan-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">
              MED.
            </div>
            <div className="text-[10px] text-indigo-300 font-bold text-center">
              Medula
              <br />
              Espinhal
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="bg-teal-500 text-white text-[9px] font-black px-2 py-1 rounded-lg">
              NEU.
            </div>
            <div className="text-[10px] text-indigo-300 font-bold text-center">
              Nervos
              <br />
              Periféricos
            </div>
          </div>
        </div>
      </div>

      {/* Clickable parts */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {parts.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setActive(i)}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl border-2 transition shrink-0
              ${active === i ? `${p.bg} border-transparent text-white` : "bg-white border-slate-200 text-slate-600"}`}
          >
            <span className="text-xs font-black">{p.label}</span>
            <span className="text-[10px] font-black whitespace-nowrap">{p.name}</span>
          </button>
        ))}
      </div>
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3">
        <p className="font-black text-indigo-800 text-sm">{parts[active].name}</p>
        <p className="text-slate-600 text-xs font-medium mt-0.5">{parts[active].desc}</p>
      </div>
    </div>
  );
};

/* ════════════════════════════════════
   REVOLUÇÃO INDUSTRIAL  (EF08HI13)
   ════════════════════════════════════ */
export const RevolucaoTimeline: React.FC = () => {
  const events = [
    { year: "1769", event: "Máquina a vapor aperfeiçoada por James Watt.", color: "bg-stone-500" },
    { year: "1785", event: "Tear mecânico revoluciona a produção têxtil.", color: "bg-stone-600" },
    {
      year: "1804",
      event: "Primeira locomotiva a vapor de Richard Trevithick.",
      color: "bg-stone-700",
    },
    {
      year: "1830",
      event: "Primeira ferrovia comercial Liverpool-Manchester.",
      color: "bg-stone-700",
    },
    {
      year: "1837",
      event: "Telégrafo elétrico — comunicação a longa distância.",
      color: "bg-stone-800",
    },
    {
      year: "1870",
      event: "2ª Revolução Industrial: aço, petróleo, eletricidade.",
      color: "bg-zinc-800",
    },
  ];
  const [revealed, setRevealed] = useState<number[]>([]);
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const go = async () => {
      for (let i = 0; i < events.length; i++) {
        await new Promise((r) => setTimeout(r, 300 + i * 350));
        setRevealed((p) => [...p, i]);
      }
    };
    go();
  }, []);

  return (
    <div className="space-y-2">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-center mb-2">
        Linha do Tempo
      </p>
      {events.map((ev, i) => (
        <AnimatePresence key={ev.year}>
          {revealed.includes(i) && (
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="flex items-start gap-3"
            >
              <div
                className={`${ev.color} text-white text-xs font-black px-2 py-1 rounded-lg shrink-0 min-w-[48px] text-center`}
              >
                {ev.year}
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-xl p-2.5 shadow-sm">
                <p className="text-slate-700 font-medium text-xs leading-snug">{ev.event}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
};

/* ════════════════════════════════════
   GENÉTICA — Quadrado de Punnett  (EF09CI08)
   ════════════════════════════════════ */
export const PunnettSquare: React.FC = () => {
  const [step, setStep] = useState(0);
  const cells = ["PP", "Pp", "Pp", "pp"];
  const cellColors = ["bg-violet-500", "bg-violet-300", "bg-violet-300", "bg-gray-300"];
  const results = [
    { ratio: "25%", genotype: "PP", phenotype: "Roxa", color: "bg-violet-600" },
    { ratio: "50%", genotype: "Pp", phenotype: "Roxa", color: "bg-violet-400" },
    { ratio: "25%", genotype: "pp", phenotype: "Branca", color: "bg-gray-300 text-slate-700" },
  ];

  return (
    <div className="space-y-4">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-center">
        Quadrado de Punnett
      </p>
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
        <p className="text-center text-sm font-bold text-slate-600 mb-3">PP (roxa) × pp (branca)</p>
        {/* Punnett grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-1 w-48">
            {/* Header row */}
            <div className="bg-slate-100 rounded-lg p-2 text-center text-sm font-black text-slate-500">
              ×
            </div>
            <div className="bg-violet-100 rounded-lg p-2 text-center font-black text-violet-700">
              p
            </div>
            <div className="bg-violet-100 rounded-lg p-2 text-center font-black text-violet-700">
              p
            </div>
            {/* Row 1 */}
            <div className="bg-violet-100 rounded-lg p-2 text-center font-black text-violet-700">
              P
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: step >= 1 ? 1 : 0 }}
              className="bg-violet-400 rounded-lg p-2 text-center font-black text-white text-sm"
            >
              Pp
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: step >= 2 ? 1 : 0 }}
              className="bg-violet-400 rounded-lg p-2 text-center font-black text-white text-sm"
            >
              Pp
            </motion.div>
            {/* Row 2 */}
            <div className="bg-violet-100 rounded-lg p-2 text-center font-black text-violet-700">
              P
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: step >= 3 ? 1 : 0 }}
              className="bg-violet-400 rounded-lg p-2 text-center font-black text-white text-sm"
            >
              Pp
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: step >= 4 ? 1 : 0 }}
              className="bg-violet-400 rounded-lg p-2 text-center font-black text-white text-sm"
            >
              Pp
            </motion.div>
          </div>
        </div>
        {step < 4 ? (
          <button
            onClick={() => setStep((p) => p + 1)}
            className="mt-3 w-full bg-pink-500 text-white font-black py-2 rounded-xl active:scale-95 transition"
          >
            Preencher →
          </button>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 space-y-1">
            <p className="text-xs font-black text-slate-500 text-center mb-2">
              Resultado — 1ª geração (Pp × Pp) seria:
            </p>
            {results.map((r) => (
              <div
                key={r.genotype}
                className={`${r.color} rounded-lg px-3 py-1.5 flex items-center justify-between`}
              >
                <span className="font-black text-white text-sm">
                  {r.genotype} → {r.phenotype}
                </span>
                <span className="font-black text-white text-sm">{r.ratio}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

/* ════════════════════════════════════
   ILUMINISMO  (EF09HI01)
   ════════════════════════════════════ */
export const IluminismoVisual: React.FC = () => {
  const thinkers = [
    {
      name: "Montesquieu",
      idea: "Separação dos Poderes",
      label: "MON",
      color: "bg-yellow-500",
      impact: "Base das democracias modernas.",
    },
    {
      name: "Rousseau",
      idea: "Contrato Social",
      label: "ROU",
      color: "bg-amber-500",
      impact: "Soberania popular — poder vem do povo.",
    },
    {
      name: "Voltaire",
      idea: "Liberdade de Expressão",
      label: "VOL",
      color: "bg-orange-500",
      impact: "Crítica à intolerância e ao absolutismo.",
    },
    {
      name: "Locke",
      idea: "Direitos Naturais",
      label: "LOC",
      color: "bg-red-500",
      impact: "Vida, liberdade e propriedade são invioláveis.",
    },
  ];
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-center">
        Filósofos Iluministas
      </p>
      <div className="grid grid-cols-2 gap-2">
        {thinkers.map((t, i) => (
          <motion.button
            key={t.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setActive(active === i ? null : i)}
            className={`${t.color} text-white rounded-2xl p-3 text-left transition-all active:scale-95 shadow-md`}
          >
            <div className="text-xs font-black text-white/80 mb-1">{t.label}</div>
            <p className="font-black text-sm leading-tight">{t.name}</p>
            <p className="text-white/80 text-xs mt-0.5">{t.idea}</p>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-3"
          >
            <p className="font-black text-yellow-800 text-sm mb-1">{thinkers[active].name}</p>
            <p className="text-slate-700 font-medium text-sm">
              <strong>{thinkers[active].idea}:</strong> {thinkers[active].impact}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Impact arrow */}
      <div className="flex items-center gap-2 bg-slate-800 rounded-2xl p-3">
        <div className="w-7 h-7 rounded-lg bg-yellow-400 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-3.5 10.8V14a1 1 0 001 1h5a1 1 0 001-1v-1.2A6 6 0 0010 2zm-1 13h2v1a1 1 0 01-2 0v-1z" />
          </svg>
        </div>
        <p className="text-white font-bold text-xs leading-snug">
          Iluminismo → Revoluções Americana (1776) e Francesa (1789) → Democracias modernas
        </p>
      </div>
    </div>
  );
};

/* ════════════════════════════════════
   DISPATCHER — escolhe o visual certo
   ════════════════════════════════════ */
export const LessonVisualMap: React.FC<{ lessonId: string }> = ({ lessonId }) => {
  if (lessonId.startsWith("biomas")) return <BiomasBrasilMap />;
  if (lessonId.startsWith("oceanos")) return <OceanosMap />;
  if (lessonId.startsWith("celulas")) return <CelulaDiagram />;
  if (lessonId.startsWith("equacoes")) return <EquacaoSteps />;
  if (lessonId.startsWith("sistema")) return <SistemaNervosoDiagram />;
  if (lessonId.startsWith("revolucao")) return <RevolucaoTimeline />;
  if (lessonId.startsWith("genetica")) return <PunnettSquare />;
  if (lessonId.startsWith("iluminismo")) return <IluminismoVisual />;
  return (
    <div className="text-center py-6 text-slate-400 font-semibold text-sm">
      Visual em breve para este conteúdo.
    </div>
  );
};
