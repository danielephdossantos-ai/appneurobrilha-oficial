import { useCallback, useMemo, useRef } from "react";

/**
 * WorldCreatures
 * Overlay animado para cada mundo do Neuro-Treino.
 * - Renderiza criaturinhas (emoji) que se movem pela tela
 * - Ao tocar/clicar, tocam um som curto (WebAudio) e fazem um "pop"
 * Sem dependências externas, sem assets extras.
 */

export type WorldKey =
  | "dinossauros"
  | "minecraft"
  | "carros"
  | "fazendinha"
  | "espaco"
  | "animais"
  | "herois"
  | "arte"
  | "musica"
  | "princesas"
  | "trens"
  | "robos"
  | "veiculos"
  | "oceano"
  | "floresta"
  | "castelo"
  | "default";

type Motion = "walk" | "fly" | "swim" | "drift" | "drive" | "bounce";
type SoundKind =
  | "roar"
  | "moo"
  | "meow"
  | "tweet"
  | "honk"
  | "boop"
  | "chime"
  | "splash"
  | "whoosh"
  | "neigh"
  | "bark"
  | "robot"
  | "magic"
  | "pop";

type Creature = {
  id: string;
  emoji: string;
  motion: Motion;
  size?: number; // em rem (default 2.5)
  top?: string; // posição vertical (e.g. "60%")
  duration?: number; // segundos
  delay?: number;
  sound: SoundKind;
  reverse?: boolean;
};

const CREATURES: Record<WorldKey, Creature[]> = {
  dinossauros: [
    { id: "d1", emoji: "🦖", motion: "walk", top: "62%", duration: 22, sound: "roar", size: 3.2 },
    {
      id: "d2",
      emoji: "🦕",
      motion: "walk",
      top: "70%",
      duration: 30,
      delay: 4,
      sound: "roar",
      size: 3,
    },
    { id: "d3", emoji: "🦋", motion: "fly", top: "20%", duration: 18, sound: "tweet", size: 1.8 },
    {
      id: "d4",
      emoji: "🌿",
      motion: "bounce",
      top: "78%",
      duration: 5,
      delay: 1,
      sound: "pop",
      size: 1.6,
    },
  ],
  minecraft: [
    { id: "m1", emoji: "🐷", motion: "walk", top: "70%", duration: 24, sound: "boop", size: 2.4 },
    {
      id: "m2",
      emoji: "🐮",
      motion: "walk",
      top: "76%",
      duration: 28,
      delay: 5,
      sound: "moo",
      size: 2.4,
    },
    { id: "m3", emoji: "☁️", motion: "drift", top: "12%", duration: 40, sound: "whoosh", size: 3 },
    { id: "m4", emoji: "🌳", motion: "bounce", top: "62%", duration: 6, sound: "pop", size: 2 },
  ],
  carros: [
    { id: "c1", emoji: "🏎️", motion: "drive", top: "72%", duration: 8, sound: "honk", size: 3 },
    {
      id: "c2",
      emoji: "🚗",
      motion: "drive",
      top: "80%",
      duration: 11,
      delay: 2,
      sound: "honk",
      size: 2.6,
      reverse: true,
    },
    { id: "c3", emoji: "🏁", motion: "bounce", top: "55%", duration: 4, sound: "pop", size: 2 },
    { id: "c4", emoji: "💨", motion: "drift", top: "65%", duration: 6, sound: "whoosh", size: 2 },
  ],
  fazendinha: [
    { id: "f1", emoji: "🐄", motion: "walk", top: "70%", duration: 26, sound: "moo", size: 2.8 },
    {
      id: "f2",
      emoji: "🐔",
      motion: "walk",
      top: "78%",
      duration: 18,
      delay: 3,
      sound: "tweet",
      size: 2,
    },
    {
      id: "f3",
      emoji: "🐑",
      motion: "walk",
      top: "74%",
      duration: 30,
      delay: 6,
      sound: "moo",
      size: 2.4,
    },
    { id: "f4", emoji: "🐝", motion: "fly", top: "30%", duration: 14, sound: "tweet", size: 1.6 },
    { id: "f5", emoji: "🌻", motion: "bounce", top: "82%", duration: 5, sound: "pop", size: 2 },
  ],
  espaco: [
    { id: "e1", emoji: "🚀", motion: "fly", top: "30%", duration: 16, sound: "whoosh", size: 3 },
    { id: "e2", emoji: "👽", motion: "drift", top: "55%", duration: 24, sound: "robot", size: 2.4 },
    {
      id: "e3",
      emoji: "🛸",
      motion: "fly",
      top: "20%",
      duration: 22,
      delay: 4,
      sound: "robot",
      size: 2.6,
      reverse: true,
    },
    { id: "e4", emoji: "⭐", motion: "bounce", top: "12%", duration: 4, sound: "chime", size: 1.6 },
    {
      id: "e5",
      emoji: "🪐",
      motion: "drift",
      top: "40%",
      duration: 30,
      delay: 6,
      sound: "chime",
      size: 2.6,
    },
  ],
  animais: [
    { id: "a1", emoji: "🦁", motion: "walk", top: "70%", duration: 26, sound: "roar", size: 3 },
    {
      id: "a2",
      emoji: "🐘",
      motion: "walk",
      top: "76%",
      duration: 34,
      delay: 4,
      sound: "roar",
      size: 3.4,
    },
    {
      id: "a3",
      emoji: "🦒",
      motion: "walk",
      top: "60%",
      duration: 32,
      delay: 8,
      sound: "moo",
      size: 3.2,
    },
    { id: "a4", emoji: "🦋", motion: "fly", top: "28%", duration: 18, sound: "tweet", size: 1.8 },
    { id: "a5", emoji: "🐒", motion: "bounce", top: "55%", duration: 4, sound: "boop", size: 2.2 },
  ],
  herois: [
    { id: "h1", emoji: "🦸", motion: "fly", top: "32%", duration: 14, sound: "whoosh", size: 3 },
    {
      id: "h2",
      emoji: "🦸‍♀️",
      motion: "fly",
      top: "22%",
      duration: 18,
      delay: 3,
      sound: "whoosh",
      size: 2.8,
      reverse: true,
    },
    { id: "h3", emoji: "✨", motion: "bounce", top: "50%", duration: 3, sound: "chime", size: 1.8 },
    { id: "h4", emoji: "💥", motion: "bounce", top: "60%", duration: 5, sound: "pop", size: 2 },
  ],
  arte: [
    {
      id: "ar1",
      emoji: "🎨",
      motion: "bounce",
      top: "60%",
      duration: 5,
      sound: "chime",
      size: 2.6,
    },
    {
      id: "ar2",
      emoji: "🖌️",
      motion: "drift",
      top: "40%",
      duration: 18,
      sound: "magic",
      size: 2.4,
    },
    { id: "ar3", emoji: "🌈", motion: "drift", top: "20%", duration: 30, sound: "magic", size: 3 },
    {
      id: "ar4",
      emoji: "🦄",
      motion: "walk",
      top: "72%",
      duration: 22,
      delay: 2,
      sound: "neigh",
      size: 2.6,
    },
  ],
  musica: [
    {
      id: "mu1",
      emoji: "🎵",
      motion: "drift",
      top: "30%",
      duration: 12,
      sound: "chime",
      size: 2.4,
    },
    {
      id: "mu2",
      emoji: "🎶",
      motion: "drift",
      top: "20%",
      duration: 16,
      delay: 3,
      sound: "chime",
      size: 2.6,
      reverse: true,
    },
    { id: "mu3", emoji: "🎺", motion: "bounce", top: "65%", duration: 4, sound: "honk", size: 2.6 },
    {
      id: "mu4",
      emoji: "🥁",
      motion: "bounce",
      top: "72%",
      duration: 3,
      delay: 1,
      sound: "pop",
      size: 2.4,
    },
  ],
  princesas: [
    { id: "p1", emoji: "👸", motion: "walk", top: "72%", duration: 26, sound: "magic", size: 2.8 },
    {
      id: "p2",
      emoji: "🦢",
      motion: "swim",
      top: "82%",
      duration: 22,
      delay: 3,
      sound: "splash",
      size: 2.4,
    },
    { id: "p3", emoji: "✨", motion: "bounce", top: "40%", duration: 3, sound: "chime", size: 1.6 },
    { id: "p4", emoji: "🌸", motion: "drift", top: "20%", duration: 24, sound: "magic", size: 2 },
  ],
  trens: [
    { id: "t1", emoji: "🚂", motion: "drive", top: "70%", duration: 12, sound: "honk", size: 3.2 },
    { id: "t2", emoji: "💨", motion: "drift", top: "60%", duration: 8, sound: "whoosh", size: 2 },
    { id: "t3", emoji: "🚦", motion: "bounce", top: "78%", duration: 4, sound: "pop", size: 2 },
    { id: "t4", emoji: "☁️", motion: "drift", top: "18%", duration: 36, sound: "whoosh", size: 3 },
  ],
  robos: [
    { id: "r1", emoji: "🤖", motion: "walk", top: "70%", duration: 20, sound: "robot", size: 2.8 },
    {
      id: "r2",
      emoji: "🤖",
      motion: "walk",
      top: "78%",
      duration: 26,
      delay: 4,
      sound: "robot",
      size: 2.4,
      reverse: true,
    },
    { id: "r3", emoji: "⚙️", motion: "bounce", top: "50%", duration: 4, sound: "boop", size: 2.2 },
    { id: "r4", emoji: "💡", motion: "drift", top: "30%", duration: 18, sound: "chime", size: 2 },
  ],
  veiculos: [
    { id: "v1", emoji: "🚙", motion: "drive", top: "72%", duration: 10, sound: "honk", size: 3 },
    {
      id: "v2",
      emoji: "🚚",
      motion: "drive",
      top: "80%",
      duration: 14,
      delay: 3,
      sound: "honk",
      size: 3,
      reverse: true,
    },
    {
      id: "v3",
      emoji: "🏍️",
      motion: "drive",
      top: "76%",
      duration: 7,
      delay: 1,
      sound: "honk",
      size: 2.4,
    },
    { id: "v4", emoji: "💨", motion: "drift", top: "65%", duration: 6, sound: "whoosh", size: 2 },
  ],
  oceano: [
    { id: "o1", emoji: "🐠", motion: "swim", top: "55%", duration: 18, sound: "splash", size: 2.4 },
    {
      id: "o2",
      emoji: "🐬",
      motion: "swim",
      top: "40%",
      duration: 22,
      delay: 3,
      sound: "splash",
      size: 2.8,
      reverse: true,
    },
    { id: "o3", emoji: "🐢", motion: "swim", top: "75%", duration: 30, sound: "boop", size: 2.6 },
    {
      id: "o4",
      emoji: "🐙",
      motion: "drift",
      top: "65%",
      duration: 26,
      delay: 5,
      sound: "boop",
      size: 2.6,
    },
    { id: "o5", emoji: "✨", motion: "bounce", top: "30%", duration: 3, sound: "chime", size: 1.4 },
  ],
  floresta: [
    { id: "fl1", emoji: "🧚", motion: "fly", top: "40%", duration: 16, sound: "magic", size: 2.2 },
    {
      id: "fl2",
      emoji: "🦋",
      motion: "fly",
      top: "30%",
      duration: 14,
      delay: 2,
      sound: "tweet",
      size: 1.8,
    },
    { id: "fl3", emoji: "🍄", motion: "bounce", top: "78%", duration: 5, sound: "pop", size: 2.4 },
    { id: "fl4", emoji: "🦌", motion: "walk", top: "72%", duration: 26, sound: "neigh", size: 2.8 },
    {
      id: "fl5",
      emoji: "✨",
      motion: "bounce",
      top: "50%",
      duration: 3,
      sound: "chime",
      size: 1.4,
    },
  ],
  castelo: [
    { id: "ca1", emoji: "🐉", motion: "fly", top: "28%", duration: 18, sound: "roar", size: 3.2 },
    {
      id: "ca2",
      emoji: "🦅",
      motion: "fly",
      top: "20%",
      duration: 20,
      delay: 3,
      sound: "tweet",
      size: 2.4,
      reverse: true,
    },
    { id: "ca3", emoji: "👑", motion: "bounce", top: "55%", duration: 5, sound: "chime", size: 2 },
    { id: "ca4", emoji: "🌈", motion: "drift", top: "12%", duration: 40, sound: "magic", size: 3 },
  ],
  default: [
    { id: "x1", emoji: "✨", motion: "bounce", top: "30%", duration: 3, sound: "chime", size: 1.6 },
    { id: "x2", emoji: "🌟", motion: "drift", top: "20%", duration: 24, sound: "chime", size: 2 },
    { id: "x3", emoji: "🦋", motion: "fly", top: "55%", duration: 18, sound: "tweet", size: 2 },
  ],
};

/* ---------------- Sound engine ---------------- */

function playSound(kind: SoundKind, ctxRef: { current: AudioContext | null }) {
  try {
    if (!ctxRef.current) {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctxRef.current = new AC();
    }
    const ctx = ctxRef.current!;
    if (ctx.state === "suspended") ctx.resume();
    const now = ctx.currentTime;

    const make = (
      type: OscillatorType,
      freq: number,
      dur: number,
      vol = 0.18,
      slideTo?: number,
    ) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (slideTo != null)
        osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), now + dur);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(vol, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + dur + 0.05);
    };

    switch (kind) {
      case "roar":
        make("sawtooth", 180, 0.55, 0.22, 70);
        break;
      case "moo":
        make("sine", 220, 0.55, 0.2, 140);
        break;
      case "meow":
        make("triangle", 700, 0.35, 0.18, 500);
        break;
      case "tweet":
        make("sine", 1800, 0.12, 0.15, 2400);
        setTimeout(() => make("sine", 2200, 0.1, 0.12, 1800), 110);
        break;
      case "honk":
        make("square", 280, 0.18, 0.18);
        setTimeout(() => make("square", 220, 0.18, 0.18), 180);
        break;
      case "boop":
        make("triangle", 520, 0.12, 0.18);
        break;
      case "chime":
        make("sine", 880, 0.25, 0.18, 1320);
        break;
      case "splash":
        make("sine", 600, 0.3, 0.15, 200);
        break;
      case "whoosh":
        make("sawtooth", 400, 0.4, 0.1, 80);
        break;
      case "neigh":
        make("triangle", 380, 0.4, 0.2, 240);
        break;
      case "bark":
        make("square", 320, 0.12, 0.2);
        setTimeout(() => make("square", 280, 0.12, 0.18), 130);
        break;
      case "robot":
        make("square", 240, 0.1, 0.16);
        setTimeout(() => make("square", 360, 0.1, 0.16), 110);
        setTimeout(() => make("square", 200, 0.12, 0.16), 230);
        break;
      case "magic":
        make("sine", 660, 0.18, 0.16, 1320);
        setTimeout(() => make("sine", 990, 0.18, 0.14, 1760), 140);
        break;
      case "pop":
        make("triangle", 440, 0.08, 0.2, 220);
        break;
    }
  } catch {
    // silenciar erros de áudio (ex: contexto não permitido)
  }
}

/* ---------------- Component ---------------- */

export default function WorldCreatures({ world }: { world: WorldKey }) {
  const list = useMemo(() => CREATURES[world] ?? CREATURES.default, [world]);
  const ctxRef = useRef<AudioContext | null>(null);

  const onPoke = useCallback((sound: SoundKind, el: HTMLButtonElement | null) => {
    playSound(sound, ctxRef);
    if (!el) return;
    el.classList.remove("creature-pop");
    // reflow para reiniciar a animação
    void el.offsetWidth;
    el.classList.add("creature-pop");
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {list.map((c) => {
        const dur = c.duration ?? 20;
        const size = c.size ?? 2.4;
        const anim =
          c.motion === "walk"
            ? "creature-walk"
            : c.motion === "drive"
              ? "creature-drive"
              : c.motion === "swim"
                ? "creature-swim"
                : c.motion === "fly"
                  ? "creature-fly"
                  : c.motion === "drift"
                    ? "creature-drift"
                    : /* bounce */ "creature-bounce";

        return (
          <button
            key={c.id}
            type="button"
            aria-label={`Toque na criatura ${c.emoji}`}
            onClick={(e) => onPoke(c.sound, e.currentTarget)}
            className={`pointer-events-auto absolute select-none ${anim} drop-shadow-lg active:scale-110 transition-transform`}
            style={{
              top: c.top ?? "60%",
              left: c.motion === "bounce" ? `${10 + Math.random() * 80}%` : undefined,
              fontSize: `${size}rem`,
              lineHeight: 1,
              animationDuration: `${dur}s`,
              animationDelay: `${c.delay ?? 0}s`,
              animationDirection: c.reverse ? "reverse" : "normal",
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <span aria-hidden>{c.emoji}</span>
          </button>
        );
      })}

      <style>{`
        @keyframes creature-walk-kf {
          0%   { transform: translateX(-10vw) scaleX(1); }
          49%  { transform: translateX(105vw) scaleX(1); }
          50%  { transform: translateX(105vw) scaleX(-1); }
          99%  { transform: translateX(-10vw) scaleX(-1); }
          100% { transform: translateX(-10vw) scaleX(1); }
        }
        @keyframes creature-drive-kf {
          0%   { transform: translateX(-15vw); }
          100% { transform: translateX(115vw); }
        }
        @keyframes creature-swim-kf {
          0%   { transform: translate(-10vw, 0) scaleX(1); }
          25%  { transform: translate(25vw, -10px) scaleX(1); }
          49%  { transform: translate(105vw, 6px) scaleX(1); }
          50%  { transform: translate(105vw, 6px) scaleX(-1); }
          75%  { transform: translate(40vw, -8px) scaleX(-1); }
          99%  { transform: translate(-10vw, 0) scaleX(-1); }
          100% { transform: translate(-10vw, 0) scaleX(1); }
        }
        @keyframes creature-fly-kf {
          0%   { transform: translate(-10vw, 0); }
          25%  { transform: translate(30vw, -20px); }
          50%  { transform: translate(60vw, 10px); }
          75%  { transform: translate(90vw, -15px); }
          100% { transform: translate(115vw, 0); }
        }
        @keyframes creature-drift-kf {
          0%   { transform: translateX(-10vw); }
          100% { transform: translateX(115vw); }
        }
        @keyframes creature-bounce-kf {
          0%,100% { transform: translateY(0) scale(1); }
          50%     { transform: translateY(-14px) scale(1.08); }
        }
        @keyframes creature-pop-kf {
          0%   { transform: scale(1.0); }
          40%  { transform: scale(1.35) rotate(-8deg); }
          70%  { transform: scale(0.9) rotate(6deg); }
          100% { transform: scale(1); }
        }

        .creature-walk   { animation: creature-walk-kf linear infinite; }
        .creature-drive  { animation: creature-drive-kf linear infinite; }
        .creature-swim   { animation: creature-swim-kf ease-in-out infinite; }
        .creature-fly    { animation: creature-fly-kf ease-in-out infinite; }
        .creature-drift  { animation: creature-drift-kf linear infinite; }
        .creature-bounce { animation: creature-bounce-kf ease-in-out infinite; }
        .creature-pop    { animation: creature-pop-kf 360ms ease-out !important; }

        @media (prefers-reduced-motion: reduce) {
          .creature-walk, .creature-drive, .creature-swim,
          .creature-fly, .creature-drift, .creature-bounce {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
