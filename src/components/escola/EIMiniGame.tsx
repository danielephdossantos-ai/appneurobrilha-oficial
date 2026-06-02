import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  aula: any;
  disabled?: boolean;
  onAnswer: (isCorrect: boolean, value: string) => void;
};

const PALETTE = [
  "from-coral to-coral/70",
  "from-sky to-sky/70",
  "from-sun to-sun/70",
  "from-success to-success/70",
  "from-lilac to-lilac/70",
  "from-pink to-pink/70",
];

const SHAPE_GLYPHS: Record<string, string> = {
  TRIANGULO: "▲", "TRIÂNGULO": "▲", CIRCULO: "●", "CÍRCULO": "●",
  QUADRADO: "■", RETANGULO: "▬", "RETÂNGULO": "▬", ESTRELA: "★",
  CORACAO: "❤", "CORAÇÃO": "❤", LOSANGO: "◆", OVAL: "⬭", HEXAGONO: "⬢", "HEXÁGONO": "⬢",
};

function Confetti() {
  const pieces = Array.from({ length: 22 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.3;
        const dur = 1 + Math.random() * 0.8;
        const colors = ["#ff6b6b", "#4dd0e1", "#ffd54f", "#81c784", "#ba68c8", "#f48fb1"];
        const bg = colors[i % colors.length];
        return (
          <span
            key={i}
            className="absolute top-0 w-2 h-3 rounded-sm animate-[confettiFall_1.5s_ease-in_forwards]"
            style={{
              left: `${left}%`,
              background: bg,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        );
      })}
      <style>{`@keyframes confettiFall { 0%{transform:translateY(-20px) rotate(0);opacity:1} 100%{transform:translateY(420px) rotate(540deg);opacity:0} }
      @keyframes wiggle { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-10px)} 40%{transform:translateX(10px)} 60%{transform:translateX(-6px)} 80%{transform:translateX(6px)} }
      @keyframes flyToSlot { 0%{transform:scale(1)} 50%{transform:scale(1.25)} 100%{transform:scale(1)} }
      @keyframes magicGlow { 0%,100%{box-shadow:0 0 0 0 rgba(255,215,0,0)} 50%{box-shadow:0 0 40px 12px rgba(255,215,0,.7)} }
      @keyframes fuseIn { 0%{transform:scale(.5);opacity:0} 100%{transform:scale(1);opacity:1} }`}</style>
    </div>
  );
}

function useFeedback(onAnswer: (ok: boolean, v: string) => void) {
  const [celebrate, setCelebrate] = useState(false);
  const fire = (ok: boolean, v: string) => {
    if (ok) setCelebrate(true);
    onAnswer(ok, v);
  };
  return { celebrate, fire };
}

/* ---------- MODE: SHAPE MATCH ---------- */
function ShapeMatch({ aula, disabled, onAnswer }: Props) {
  const correct = String(aula.resposta_correta || aula.answer || "").toUpperCase();
  const [wrongId, setWrongId] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const { celebrate, fire } = useFeedback(onAnswer);
  const silhouette = SHAPE_GLYPHS[correct] || aula.visual || "◆";

  const handleDrop = (opt: string) => {
    if (disabled || done) return;
    const ok = opt.toUpperCase() === correct;
    if (ok) { setDone(true); fire(true, opt); }
    else { setWrongId(opt); setTimeout(() => setWrongId(null), 700); fire(false, opt); }
  };

  return (
    <div className="relative">
      {celebrate && <Confetti />}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">
        {/* left options */}
        <div className="flex flex-col gap-4 items-center">
          {(aula.opcoes || []).slice(0, Math.ceil((aula.opcoes||[]).length/2)).map((opt: string, i: number) => (
            <DraggableOption key={opt} opt={opt} color={PALETTE[i % PALETTE.length]}
              glyph={SHAPE_GLYPHS[opt.toUpperCase()] || "◆"}
              wrong={wrongId === opt} disabled={disabled || done}
              onDrop={() => handleDrop(opt)} />
          ))}
        </div>
        {/* silhouette target */}
        <div className={`relative w-48 h-48 md:w-64 md:h-64 grid place-items-center rounded-3xl border-4 border-dashed border-slate-400/60 bg-white/40 ${done ? "animate-[magicGlow_1s_ease-in-out_infinite]" : ""}`}>
          <div className={`text-[8rem] md:text-[10rem] leading-none ${done ? "text-primary" : "text-slate-300"}`} style={{ filter: done ? "drop-shadow(0 0 20px gold)" : "none" }}>
            {silhouette}
          </div>
          <div className="absolute -bottom-8 text-center text-lg font-black tracking-widest text-slate-700">
            {done ? correct : ""}
          </div>
        </div>
        {/* right options */}
        <div className="flex flex-col gap-4 items-center">
          {(aula.opcoes || []).slice(Math.ceil((aula.opcoes||[]).length/2)).map((opt: string, i: number) => (
            <DraggableOption key={opt} opt={opt} color={PALETTE[(i+3) % PALETTE.length]}
              glyph={SHAPE_GLYPHS[opt.toUpperCase()] || "◆"}
              wrong={wrongId === opt} disabled={disabled || done}
              onDrop={() => handleDrop(opt)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DraggableOption({ opt, color, glyph, wrong, disabled, onDrop }:{
  opt:string; color:string; glyph:string; wrong:boolean; disabled?:boolean; onDrop:()=>void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onDrop}
      className={`btn-tap w-28 h-28 md:w-32 md:h-32 rounded-3xl flex flex-col items-center justify-center text-white font-black shadow-[0_8px_0_rgba(0,0,0,0.15)] border-4 border-white bg-gradient-to-br ${color} ${wrong ? "animate-[wiggle_0.5s_ease-in-out]" : "hover:-translate-y-1"}`}
    >
      <div className="text-5xl leading-none drop-shadow">{glyph}</div>
      <div className="text-xs mt-1 tracking-widest">{opt.toUpperCase()}</div>
    </button>
  );
}

/* ---------- MODE: PHONEME SUM (B + A = BA) ---------- */
function PhonemeSum({ aula, disabled, onAnswer }: Props) {
  const correct = String(aula.resposta_correta || aula.answer || aula.palavra || "").toUpperCase();
  const [tapped, setTapped] = useState<string[]>([]);
  const [fused, setFused] = useState(false);
  const { celebrate, fire } = useFeedback(onAnswer);
  const opcoes = (aula.opcoes || []).map((o: string) => String(o).toUpperCase());

  const tap = (l: string) => {
    if (disabled || fused) return;
    if (tapped.includes(l)) return;
    const next = [...tapped, l];
    setTapped(next);
    if (next.join("") === correct || next.length >= correct.length) {
      const ok = next.join("") === correct;
      if (ok) { setFused(true); setTimeout(() => fire(true, next.join("")), 300); }
      else { setTimeout(() => { setTapped([]); }, 700); fire(false, next.join("")); }
    }
  };

  return (
    <div className="relative">
      {celebrate && <Confetti />}
      <div className="flex flex-col items-center gap-8">
        <div className="text-xl font-black tracking-widest text-slate-700"></div>
        {!fused ? (
          <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            {opcoes.map((l: string, i: number) => {
              const used = tapped.includes(l);
              return (
                <div key={l + i} className="flex items-center gap-4">
                  <button
                    disabled={disabled || used}
                    onClick={() => tap(l)}
                    className={`btn-tap w-24 h-24 md:w-28 md:h-28 rounded-2xl text-white text-5xl font-black border-4 border-white shadow-[0_8px_0_rgba(0,0,0,0.15)] bg-gradient-to-br ${PALETTE[i % PALETTE.length]} ${used ? "opacity-30 scale-90" : "hover:-translate-y-1"}`}
                  >
                    {l}
                  </button>
                  {i < opcoes.length - 1 && (
                    <div className="text-5xl font-black text-sun animate-pulse">+</div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-primary to-success grid place-items-center text-white text-7xl font-black border-4 border-white shadow-2xl animate-[fuseIn_.5s_ease-out]">
            {correct}
          </div>
        )}
        <div className="text-base text-slate-600 font-bold uppercase">
          {fused ? correct : ""}
        </div>
      </div>
    </div>
  );
}

/* ---------- MODE: WORD BUILD (letras → lacunas) ---------- */
function WordBuild({ aula, disabled, onAnswer }: Props) {
  const target = String(aula.palavra || aula.resposta_correta || "").toUpperCase();
  const letters = useMemo(() => {
    const opts = (aula.opcoes || []).map((o: string) => String(o).toUpperCase());
    if (opts.length >= target.length) return opts;
    // ensure all target letters present + a couple of distractors
    const extras = ["A","E","I","O","U","M","P","B","S","T"].filter(l => !target.includes(l)).slice(0,2);
    return Array.from(new Set([...target.split(""), ...extras])).sort(() => Math.random() - 0.5);
  }, [aula.opcoes, target]);

  const [filled, setFilled] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const { celebrate, fire } = useFeedback(onAnswer);

  const onTap = (l: string, idx: number) => {
    if (disabled || done) return;
    const pos = filled.length;
    if (target[pos] === l) {
      const next = [...filled, l + "::" + idx];
      setFilled(next);
      if (next.length === target.length) { setDone(true); setTimeout(() => fire(true, target), 300); }
    } else {
      setWrong(l + "::" + idx);
      setTimeout(() => setWrong(null), 600);
      fire(false, l);
    }
  };

  return (
    <div className="relative">
      {celebrate && <Confetti />}
      <div className="flex flex-col items-center gap-8">
        {aula.visual && <div className="text-8xl md:text-9xl drop-shadow-xl">{aula.visual}</div>}
        {/* slots */}
        <div className={`flex gap-3 md:gap-4 ${done ? "animate-[magicGlow_1s_ease-in-out_infinite] rounded-2xl p-2" : ""}`}>
          {target.split("").map((ch, i) => {
            const got = filled[i]?.split("::")[0];
            return (
              <div key={i} className={`w-16 h-20 md:w-20 md:h-24 rounded-2xl border-4 border-dashed grid place-items-center text-4xl md:text-5xl font-black ${got ? "bg-gradient-to-br from-success to-success/70 text-white border-success" : "border-slate-400 bg-white/60 text-slate-300"}`}>
                {got || "_"}
              </div>
            );
          })}
        </div>
        {/* letter tiles (fridge magnets) */}
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center max-w-xl">
          {letters.map((l: string, i: number) => {
            const id = l + "::" + i;
            const used = filled.some(f => f === id);
            const isWrong = wrong === id;
            return (
              <button
                key={id}
                disabled={disabled || done || used}
                onClick={() => onTap(l, i)}
                className={`btn-tap w-16 h-16 md:w-20 md:h-20 rounded-2xl text-white text-3xl md:text-4xl font-black border-4 border-white shadow-[0_6px_0_rgba(0,0,0,0.18)] bg-gradient-to-br ${PALETTE[i % PALETTE.length]} ${used ? "opacity-20 scale-75" : isWrong ? "animate-[wiggle_0.5s]" : "hover:-translate-y-1"}`}
                style={{ transform: `rotate(${(i % 2 ? -1 : 1) * 3}deg)` }}
              >
                {l}
              </button>
            );
          })}
        </div>
        <div className="text-xl font-black text-slate-700 tracking-widest uppercase">
          {done ? target : ""}
        </div>
      </div>
    </div>
  );
}

/* ---------- MODE: BUBBLES (default fallback) ---------- */
function Bubbles({ aula, disabled, onAnswer }: Props) {
  const correct = String(aula.resposta_correta || aula.answer || "");
  const [wrong, setWrong] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const { celebrate, fire } = useFeedback(onAnswer);
  return (
    <div className="relative">
      {celebrate && <Confetti />}
      <div
        className="rounded-[2.5rem] grid place-items-center mb-6 py-8 px-6 border-4 border-white shadow-xl"
        style={{
          background: aula.visualHex
            ? `radial-gradient(circle at 50% 40%, ${aula.visualHex}66, ${aula.visualHex}11 70%)`
            : 'radial-gradient(circle at 50% 40%, hsl(var(--sky)/.45), hsl(var(--petal)/.2) 70%)',
        }}
      >
        {aula.visual && <div className="text-[8rem] md:text-[10rem] leading-none drop-shadow-2xl">{aula.visual}</div>}
        <div className="mt-3 text-4xl md:text-5xl font-black tracking-[0.18em] text-primary drop-shadow-md">
          {(aula.palavra || aula.topic || aula.resposta_correta || "").toString().toUpperCase()}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 place-items-center">
        {(aula.opcoes || []).map((opt: string, i: number) => {
          const isWrong = wrong === opt;
          const isCorrect = opt === correct;
          return (
            <button key={`${opt}-${i}`} disabled={disabled || done}
              onClick={() => {
                if (isCorrect) { setDone(true); fire(true, opt); }
                else { setWrong(opt); setTimeout(() => setWrong(null), 600); fire(false, opt); }
              }}
              className={`btn-tap w-32 h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center text-5xl md:text-6xl font-black uppercase text-white shadow-[0_10px_0_rgba(0,0,0,0.15)] border-4 border-white bg-gradient-to-br ${PALETTE[i % PALETTE.length]} ${isWrong ? "animate-[wiggle_0.5s]" : "hover:-translate-y-1"} ${done && isCorrect ? "animate-[magicGlow_1s_ease-in-out_infinite]" : ""}`}>
              {opt.toString().toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- MODE: DISCOVERY (Natureza/Relacionados) ---------- */
function DiscoveryGame({ aula, disabled, onAnswer }: Props) {
  const options = aula.opcoes || [];
  const [wrongId, setWrongId] = useState<string | null>(null);
  const [correctIds, setCorrectIds] = useState<string[]>([]);
  const { celebrate, fire } = useFeedback(onAnswer);

  const handleTap = (opt: any) => {
    if (disabled || correctIds.includes(opt.n)) return;
    
    if (opt.correct) {
      const next = [...correctIds, opt.n];
      setCorrectIds(next);
      // If found at least one or all? Usually for kids, one success is enough to trigger som, 
      // but let's say they need to find all correct ones or just one to "win" this round.
      // User says: "When touching a correct object, it shakes/glows and plays sound".
      if (next.length === options.filter((o: any) => o.correct).length) {
         fire(true, opt.n);
      } else {
         // Just visual feedback for now as per "balança ou brilha"
      }
    } else {
      setWrongId(opt.n);
      setTimeout(() => setWrongId(null), 600);
      fire(false, opt.n);
    }
  };

  return (
    <div className="relative">
      {celebrate && <Confetti />}
      <div className="flex flex-col items-center gap-8">
        <div className="relative group">
           <div className="text-[10rem] md:text-[12rem] leading-none drop-shadow-2xl animate-float-thinking">
             {aula.visual}
           </div>
           <div className="text-center mt-4 text-5xl font-black tracking-widest text-primary drop-shadow-sm uppercase">
             {aula.palavra}
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl px-4">
          {options.map((opt: any, i: number) => {
            const isCorrect = opt.correct;
            const isDone = correctIds.includes(opt.n);
            const isWrong = wrongId === opt.n;
            
            return (
              <button
                key={opt.n + i}
                disabled={disabled || isDone}
                onClick={() => handleTap(opt)}
                className={`btn-tap group relative aspect-square rounded-[2rem] bg-white border-4 flex flex-col items-center justify-center shadow-lg transition-all
                  ${isDone ? "border-success bg-success/5 animate-[magicGlow_1s_infinite]" : "border-slate-200 hover:border-primary"}
                  ${isWrong ? "animate-[wiggle_0.5s] border-destructive" : ""}
                `}
              >
                <div className={`text-6xl md:text-7xl transition-transform ${isDone ? "scale-110" : "group-hover:scale-110"}`}>
                  {opt.e}
                </div>
                <div className={`mt-2 text-xs font-black tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity ${isDone ? "text-success opacity-100" : "text-slate-400"}`}>
                   {opt.n}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- DISPATCHER ---------- */
export function EIMiniGame(props: Props) {
  const { aula } = props;
  const opts: any[] = (aula.opcoes || []);
  const correct = String(aula.resposta_correta || aula.answer || "").toUpperCase();
  const materia = String(aula.materia || "").toLowerCase();
  const topicLc = String(aula.topic || aula.tema || "").toLowerCase();
  const palavra = String(aula.palavra || "").toUpperCase();

  // Se as opções forem objetos com campo 'correct', usamos o DiscoveryGame
  const isDiscovery = opts.length > 0 && typeof opts[0] === 'object' && 'correct' in opts[0];
  
  const allSingleLetters = !isDiscovery && opts.length > 0 && opts.every(o => String(o).trim().length === 1);
  const isShapes = !isDiscovery && (materia.includes("forma") || topicLc.includes("forma") ||
    Object.keys(SHAPE_GLYPHS).includes(correct));

  let mode: "shape" | "sum" | "word" | "bubbles" | "discovery" = "bubbles";
  
  if (isDiscovery) mode = "discovery";
  else if (isShapes) mode = "shape";
  else if (allSingleLetters && palavra.length >= 2 && palavra.length === opts.length) mode = "sum";
  else if (allSingleLetters && palavra.length >= 2) mode = "word";

  if (mode === "discovery") return <DiscoveryGame {...props} />;
  if (mode === "shape") return <ShapeMatch {...props} />;
  if (mode === "sum") return <PhonemeSum {...props} />;
  if (mode === "word") return <WordBuild {...props} />;
  return <Bubbles {...props} />;
}
