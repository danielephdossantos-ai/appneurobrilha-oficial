import { useEffect, useMemo, useRef, useState } from "react";
import { 
  Apple, Dog, Cat, Fish, Flower, Star, Moon, Sun, 
  Circle, Square, Triangle, Heart, Cloud, Bird,
  Gamepad2, Book, Pencil, Music, Camera, Gift,
  Coffee, Pizza, Car, Plane, Ship, Tractor,
  Beef, Banana, Grape, Home, Waves,
  Egg, Crown, Trash2, Rocket, IceCream,
  Trees, Bug, MousePointer2, HelpCircle,
  Eye, EyeOff, Check, X, Volume2, 
  Bike, GlassWater, Ghost, Zap, Sprout
} from "lucide-react";

// Simple proxy for Bone since it might not be in the initial import set or standard lucide
const Bone = (props: any) => <Gift {...props} />;

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

const EMOJI_MAP: Record<string, any> = {
  '🍎': Apple, '🍏': Apple, '🐶': Dog, '🐱': Cat, '🐟': Fish, '🌻': Flower, '⭐': Star, '🌙': Moon, '☀️': Sun,
  '⭕': Circle, '🟦': Square, '🔺': Triangle, '❤️': Heart, '☁️': Cloud, '🐔': Bird, '🐮': Beef,
  '🐄': Beef, '🐝': Bug, '🐘': Beef, '⛪': Home, '🥚': Egg, '🍇': Grape, '🍌': Banana,
  '🦴': Bone, '🏠': Home, '🥣': Coffee, '🚜': Tractor, '🌿': Trees,
  '💻': Gamepad2, '⚽': Gamepad2, '🌊': Waves, '🌽': Sprout, '🏚️': Home, '🍕': Pizza,
  '🥩': Beef, '🌳': Trees, '👑': Crown, '🍦': IceCream, '🧶': Music, '🧺': Gift,
  '🚀': Rocket, '👜': Gift, '🥛': GlassWater, '🚲': Bike, '🚗': Car, '✈️': Plane, '🚢': Ship,
};

const getIcon = (key: string, className = "w-12 h-12") => {
  if (!key) return <HelpCircle className={className} />;
  
  // Se for uma URL de imagem
  if (key.startsWith('http') || key.startsWith('/src/assets') || key.startsWith('data:image')) {
    return <img src={key} alt="visual" className={className + " object-contain"} />;
  }

  const IconComponent = EMOJI_MAP[key] || HelpCircle;
  return <IconComponent className={className} />;
};

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
        <div className="flex flex-col gap-4 items-center">
          {(aula.opcoes || []).slice(0, Math.ceil((aula.opcoes||[]).length/2)).map((opt: string, i: number) => (
            <DraggableOption key={opt} opt={opt} color={PALETTE[i % PALETTE.length]}
              glyph={SHAPE_GLYPHS[opt.toUpperCase()] || "◆"}
              wrong={wrongId === opt} disabled={disabled || done}
              onDrop={() => handleDrop(opt)} />
          ))}
        </div>
        <div className={`relative w-48 h-48 md:w-64 md:h-64 grid place-items-center rounded-3xl border-4 border-dashed border-slate-400/60 bg-white/40 ${done ? "animate-[magicGlow_1s_ease-in-out_infinite]" : ""}`}>
          <div className={`text-[8rem] md:text-[10rem] leading-none ${done ? "text-primary" : "text-slate-300"}`} style={{ filter: done ? "drop-shadow(0 0 20px gold)" : "none" }}>
            {silhouette}
          </div>
          <div className="absolute -bottom-8 text-center text-lg font-black tracking-widest text-slate-700">
            {done ? correct : ""}
          </div>
        </div>
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
        {aula.visual && <div className="text-8xl md:text-9xl drop-shadow-xl">{getIcon(aula.visual, "w-24 h-24")}</div>}
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
      </div>
    </div>
  );
}

/* ---------- MODE: BUBBLES ---------- */
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
        {aula.visual && <div className="text-[8rem] md:text-[10rem] leading-none drop-shadow-2xl">{getIcon(aula.visual, "w-32 h-32 text-primary")}</div>}
        <div className="mt-3 text-4xl md:text-5xl font-black tracking-[0.18em] text-primary drop-shadow-md">
          {(aula.palavra || aula.topic || "").toString().toUpperCase()}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 place-items-center">
        {(aula.opcoes || []).map((opt: string, i: number) => {
          const isWrong = wrong === opt;
          const isCorrect = String(opt) === correct;
          return (
            <button key={`${opt}-${i}`} disabled={disabled || done}
              onClick={() => {
                if (isCorrect) { setDone(true); fire(true, opt); }
                else { setWrong(opt); setTimeout(() => setWrong(null), 600); fire(false, opt); }
              }}
              className={`btn-tap w-32 h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center text-4xl md:text-5xl font-black uppercase text-white shadow-[0_10px_0_rgba(0,0,0,0.15)] border-4 border-white bg-gradient-to-br ${PALETTE[i % PALETTE.length]} ${isWrong ? "animate-[wiggle_0.5s]" : "hover:-translate-y-1"} ${done && isCorrect ? "animate-[magicGlow_1s_ease-in-out_infinite]" : ""}`}>
              {opt.toString().toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- MODE: MEMORY GAME ---------- */
function MemoryGame({ aula, disabled, onAnswer }: Props) {
  const cards = useMemo(() => {
    const symbols = aula.opcoes || ["🍎", "🐶", "⭐"];
    return [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((s, i) => ({ id: i, symbol: s, flipped: false, solved: false }));
  }, [aula.opcoes]);

  const [state, setState] = useState(cards);
  const [selected, setSelected] = useState<number[]>([]);
  const { celebrate, fire } = useFeedback(onAnswer);

  const flip = (id: number) => {
    if (disabled || selected.length === 2 || state[id].flipped || state[id].solved) return;
    const next = state.map(c => c.id === id ? { ...c, flipped: true } : c);
    setState(next);
    const newSel = [...selected, id];
    setSelected(newSel);

    if (newSel.length === 2) {
      const [i1, i2] = newSel;
      if (state[i1].symbol === state[i2].symbol) {
        setTimeout(() => {
          setState(prev => prev.map(c => (c.id === i1 || c.id === i2) ? { ...c, solved: true } : c));
          setSelected([]);
          const newState = next.map(c => (c.id === i1 || c.id === i2) ? { ...c, solved: true } : c);
          if (newState.every(c => c.solved)) {
            fire(true, "victory");
          }
        }, 600);
      } else {
        setTimeout(() => {
          setState(prev => prev.map(c => (c.id === i1 || c.id === i2) ? { ...c, flipped: false } : c));
          setSelected([]);
          fire(false, "mismatch");
        }, 1000);
      }
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 place-items-center">
      {state.map((card) => (
        <button
          key={card.id}
          disabled={disabled || card.solved}
          onClick={() => flip(card.id)}
          className={`w-24 h-32 md:w-32 md:h-40 rounded-2xl border-4 transition-all duration-500 preserve-3d relative ${card.flipped || card.solved ? "[transform:rotateY(180deg)]" : ""}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center backface-hidden border-2 border-white shadow-lg`}>
            <HelpCircle className="w-12 h-12 text-white" />
          </div>
          <div className={`absolute inset-0 bg-white rounded-xl flex items-center justify-center [transform:rotateY(180deg)] backface-hidden border-2 border-primary shadow-lg`}>
            {getIcon(card.symbol, "w-16 h-16 text-primary")}
          </div>
        </button>
      ))}
    </div>
  );
}

/* ---------- MODE: MISSING SEQUENCE ---------- */
function MissingSequence({ aula, disabled, onAnswer }: Props) {
  const sequence = aula.sequence || ["🍎", "🍌", "🍇"];
  const [hiddenIdx] = useState(() => Math.floor(Math.random() * sequence.length));
  const [revealed, setRevealed] = useState(false);
  const { celebrate, fire } = useFeedback(onAnswer);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex gap-4 items-center">
        {sequence.map((item: string, i: number) => (
          <div key={i} className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white border-4 border-dashed border-primary/30 flex items-center justify-center shadow-inner">
            {!revealed || i !== hiddenIdx ? (
              getIcon(item, "w-12 h-12 text-primary animate-bounce")
            ) : (
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-slate-300" />
              </div>
            )}
          </div>
        ))}
      </div>
      {revealed && (
        <div className="grid grid-cols-3 gap-4">
          {(aula.opcoes || sequence).map((opt: string) => (
            <button
              key={opt}
              disabled={disabled}
              onClick={() => {
                const ok = opt === sequence[hiddenIdx];
                fire(ok, opt);
              }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border-4 border-slate-200 flex items-center justify-center hover:border-primary transition-all shadow-md"
            >
              {getIcon(opt, "w-10 h-10")}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- MODE: VISUAL OP (Addition/Subtraction) ---------- */
function VisualOp({ aula, disabled, onAnswer }: Props) {
  const a = Number(aula.numero_a || 1);
  const b = Number(aula.numero_b || 1);
  const op = aula.operacao || "+";
  const result = Number(aula.resultado || (op === "+" ? a + b : a - b));
  const visual = aula.visual || "apple";
  const { celebrate, fire } = useFeedback(onAnswer);
  const [done, setDone] = useState(false);
  const [wrong, setWrong] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-8">
      {celebrate && <Confetti />}
      <div className="flex flex-wrap items-center justify-center gap-4 bg-white/60 p-6 rounded-3xl border-4 border-white shadow-soft">
        <div className="flex flex-wrap gap-1 max-w-[150px] justify-center">
           {Array.from({length: a}).map((_, i) => <div key={i}>{getIcon(visual, "w-8 h-8")}</div>)}
        </div>
        <div className="text-4xl font-black text-sun">{op}</div>
        <div className="flex flex-wrap gap-1 max-w-[150px] justify-center">
           {Array.from({length: b}).map((_, i) => <div key={i}>{getIcon(visual, "w-8 h-8")}</div>)}
        </div>
        <div className="text-4xl font-black text-primary">= ?</div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {(aula.opcoes || [result, result+1, result-1]).map((opt: any, i: number) => {
          const n = Number(opt);
          const isCorrect = n === result;
          return (
            <button key={i} disabled={disabled || done}
              onClick={() => {
                if (isCorrect) { setDone(true); fire(true, n.toString()); }
                else { setWrong(n); setTimeout(() => setWrong(null), 600); fire(false, n.toString()); }
              }}
              className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br ${PALETTE[i % PALETTE.length]} border-4 border-white text-4xl md:text-5xl font-black text-white shadow-lg ${wrong === n ? "animate-[wiggle_0.5s]" : "hover:-translate-y-1"}`}>
              {n}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* ---------- MODE: QUANTITY DRAG ---------- */
function QuantityDrag({ aula, disabled, onAnswer }: Props) {
  const target = aula.targetCount || 3;
  const [count, setCount] = useState(0);
  const { celebrate, fire } = useFeedback(onAnswer);

  const addItem = () => {
    if (disabled || count >= target) return;
    const next = count + 1;
    setCount(next);
    if (next === target) {
      setTimeout(() => fire(true, next.toString()), 500);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-6xl font-black text-primary bg-white px-8 py-4 rounded-full border-4 border-primary shadow-glow">
        {target}
      </div>
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] border-4 border-dashed border-slate-300 bg-white/40 relative overflow-hidden flex flex-wrap p-4 items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="w-12 h-12 text-primary animate-[fuseIn_0.3s_ease-out]">
            {getIcon(aula.symbol || "⭐", "w-10 h-10")}
          </div>
        ))}
        {count === 0 && <div className="text-slate-300 font-bold uppercase tracking-widest text-center px-4">Arraste para cá</div>}
      </div>
      <div className="flex gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <button
            key={i}
            disabled={disabled || count >= target}
            onClick={addItem}
            className="w-20 h-20 rounded-2xl bg-white border-4 border-slate-200 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
          >
            {getIcon(aula.symbol || "⭐", "w-12 h-12 text-primary")}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- DISPATCHER ---------- */
export function EIMiniGame(props: Props) {
  const { aula } = props;
  const type = aula.miniGameType || "bubbles";

  switch (type) {
    case "memory": return <MemoryGame {...props} />;
    case "sequence": return <MissingSequence {...props} />;
    case "quantity": return <QuantityDrag {...props} />;
    case "shape": return <ShapeMatch {...props} />;
    case "sum": return <PhonemeSum {...props} />;
    case "alfa-syllable": return <PhonemeSum {...props} />;
    case "alfa-sum": return <VisualOp {...props} />;
    case "alfa-sub": return <VisualOp {...props} />;
    case "word": return <WordBuild {...props} />;
    default: return <Bubbles {...props} />;
  }
}
