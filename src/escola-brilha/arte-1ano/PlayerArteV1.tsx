import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Volume2, VolumeX, Sparkles, Palette, Music, Drama, Wind, Trophy, ClipboardList, Play, Pause, Camera, Gamepad2 } from "lucide-react";
import { speakChunked, stopSpeaking, sanitizeForSpeech } from "@/lib/native-tts";
import { MissaoFamiliaFoto } from "@/escola-brilha/curso-v4/player-portugues/blocos/MissaoFamiliaFoto";
import type { AulaArte, UnidadeArte } from "./types";

const PAPEL = "#FBF6EC";
const TINTA = "#2A2320";

// ============================================================== HISTÓRIA
function Historia({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const [i, setI] = useState(0);
  const cena = aula.historia[i];
  const total = aula.historia.length;

  useEffect(() => {
    if (muted) return;
    speakChunked(sanitizeForSpeech(cena.texto), { rate: 0.95 });
    return () => stopSpeaking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, muted]);

  return (
    <div className="rounded-3xl overflow-hidden border-4" style={{ borderColor: TINTA }}>
      <div
        className="min-h-[280px] flex items-center justify-center transition-colors duration-500"
        style={{ background: cena.fundo || PAPEL }}
      >
        <div className="text-[9rem] leading-none drop-shadow-lg">{cena.emoji || "🎨"}</div>
      </div>
      <div className="bg-white p-5">
        <p className="text-lg leading-relaxed font-serif" style={{ color: TINTA }}>
          {cena.texto}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs font-bold" style={{ color: TINTA + "80" }}>
            Cena {i + 1} de {total}
          </span>
          <div className="flex gap-2">
            <button
              disabled={i === 0}
              onClick={() => setI(i - 1)}
              className="px-4 py-2 rounded-full font-black text-sm disabled:opacity-30 bg-[#F1E7D0]"
              style={{ color: TINTA }}
            >
              ← Antes
            </button>
            <button
              disabled={i === total - 1}
              onClick={() => setI(i + 1)}
              className="px-4 py-2 rounded-full font-black text-sm disabled:opacity-30 text-white"
              style={{ background: TINTA }}
            >
              Próxima →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================== ATIVIDADE
function Atividade({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const [step, setStep] = useState(0);
  const passo = aula.atividade.passos[step];
  useEffect(() => {
    if (muted) return;
    speakChunked(sanitizeForSpeech(passo), { rate: 0.95 });
    return () => stopSpeaking();
  }, [step, muted, passo]);

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-2" style={{ color: TINTA }}>
        {aula.atividade.titulo}
      </h4>
      {aula.atividade.materiais && (
        <p className="text-sm mb-4" style={{ color: TINTA + "99" }}>
          <strong>Materiais:</strong> {aula.atividade.materiais.join(" · ")}
        </p>
      )}
      <div className="bg-white/70 rounded-2xl p-5 border-2 border-dashed" style={{ borderColor: TINTA + "40" }}>
        <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: TINTA + "70" }}>
          Passo {step + 1} de {aula.atividade.passos.length}
        </div>
        <p className="text-xl font-serif" style={{ color: TINTA }}>{passo}</p>
      </div>
      <div className="flex gap-2 mt-4">
        <button
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
          className="px-4 py-2 rounded-full font-black text-sm disabled:opacity-30 bg-[#F1E7D0]"
          style={{ color: TINTA }}
        >
          ← Antes
        </button>
        <button
          disabled={step === aula.atividade.passos.length - 1}
          onClick={() => setStep(step + 1)}
          className="px-4 py-2 rounded-full font-black text-sm disabled:opacity-30 text-white"
          style={{ background: TINTA }}
        >
          Próximo →
        </button>
      </div>
    </div>
  );
}

// ============================================================== VIDEO (placeholder animado)
function VideoDemo({ aula }: { aula: AulaArte }) {
  if (!aula.video) return null;
  return (
    <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: TINTA }}>
      <div
        className="h-52 relative flex items-center justify-center"
        style={{
          background:
            "conic-gradient(from 0deg, #E63946, #F97316, #F1C40F, #22C55E, #1D8FE1, #8B5CF6, #E63946)",
          animation: "artespin 12s linear infinite",
        }}
      >
        <style>{`@keyframes artespin { to { transform: rotate(360deg); } }`}</style>
        <div className="absolute inset-4 bg-white/85 rounded-xl backdrop-blur flex items-center justify-center">
          <Play className="h-16 w-16" style={{ color: TINTA }} />
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="font-black font-serif text-lg" style={{ color: TINTA }}>{aula.video.titulo}</div>
        <div className="text-sm mt-1" style={{ color: TINTA + "99" }}>{aula.video.descricao}</div>
      </div>
    </div>
  );
}

// ============================================================== FERRAMENTA DESENHO (Canvas)
function CanvasPintura({ aula }: { aula: AulaArte }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cor, setCor] = useState(aula.ferramenta.cores?.[0] ?? "#E63946");
  const [tamanho, setTamanho] = useState(12);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, c.width, c.height);
  }, []);

  function pos(ev: React.PointerEvent<HTMLCanvasElement>) {
    const c = canvasRef.current!;
    const rect = c.getBoundingClientRect();
    return {
      x: ((ev.clientX - rect.left) / rect.width) * c.width,
      y: ((ev.clientY - rect.top) / rect.height) * c.height,
    };
  }

  function onDown(ev: React.PointerEvent<HTMLCanvasElement>) {
    drawing.current = true;
    last.current = pos(ev);
    canvasRef.current?.setPointerCapture(ev.pointerId);
  }
  function onMove(ev: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !last.current) return;
    const p = pos(ev);
    ctx.strokeStyle = cor;
    ctx.lineWidth = tamanho;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = p;
  }
  function onUp() {
    drawing.current = false;
    last.current = null;
  }
  function limpar() {
    const c = canvasRef.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, c.width, c.height);
  }
  function baixar() {
    const c = canvasRef.current;
    if (!c) return;
    const link = document.createElement("a");
    link.download = `estudio-brilha-${aula.slug}.png`;
    link.href = c.toDataURL();
    link.click();
  }

  return (
    <div>
      <p className="text-base font-serif mb-3" style={{ color: TINTA }}>
        <strong>Tarefa:</strong> {aula.ferramenta.brief}
      </p>
      <div className="rounded-2xl overflow-hidden border-4 bg-white" style={{ borderColor: TINTA }}>
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          className="w-full block touch-none cursor-crosshair"
          style={{ aspectRatio: "8 / 5" }}
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {(aula.ferramenta.cores ?? []).map((c) => (
          <button
            key={c}
            onClick={() => setCor(c)}
            className={`h-11 w-11 rounded-full border-4 transition-transform ${cor === c ? "scale-110" : ""}`}
            style={{
              background: c,
              borderColor: cor === c ? TINTA : "white",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
            aria-label={`Cor ${c}`}
          />
        ))}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs font-black" style={{ color: TINTA }}>Pincel</span>
          <input
            type="range"
            min={4}
            max={40}
            value={tamanho}
            onChange={(e) => setTamanho(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button onClick={limpar} className="px-4 py-2 rounded-full text-sm font-black bg-[#F1E7D0]" style={{ color: TINTA }}>
          Limpar
        </button>
        <button onClick={baixar} className="px-4 py-2 rounded-full text-sm font-black text-white" style={{ background: "#FF6B4A" }}>
          Salvar imagem ↓
        </button>
      </div>
    </div>
  );
}

// ============================================================== MÚSICA / RITMO
function RitmoBatuque({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const [tocando, setTocando] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const timerRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const m = aula.musica;
  const stepMs = 60000 / (m.bpm ?? 80);

  function beep(freq: number, dur: number) {
    if (muted) return;
    try {
      if (!audioCtxRef.current) audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const ctx = audioCtxRef.current;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.frequency.value = freq;
      o.type = "triangle";
      g.gain.setValueAtTime(0.001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur / 1000);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + dur / 1000);
    } catch {
      // ignore
    }
  }

  function tocarPasso(k: number) {
    const s = m.padrao[k];
    if (s === "palma") beep(800, 90);
    else if (s === "pé") beep(180, 140);
    else if (s === "boca") beep(500, 100);
  }

  useEffect(() => {
    if (!tocando) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      setCursor(-1);
      return;
    }
    let k = 0;
    setCursor(0);
    tocarPasso(0);
    timerRef.current = window.setInterval(() => {
      k = (k + 1) % m.padrao.length;
      setCursor(k);
      tocarPasso(k);
    }, stepMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tocando]);

  const label: Record<string, string> = {
    palma: "👏",
    pé: "🦶",
    boca: "🗣️",
    silencio: "·",
  };

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-2" style={{ color: TINTA }}>
        {m.titulo}
      </h4>
      <p className="text-sm mb-3" style={{ color: TINTA + "99" }}>
        {m.bpm ?? 80} batidas por minuto — siga o padrão.
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        {m.padrao.map((p, k) => (
          <div
            key={k}
            className={`h-16 w-16 rounded-2xl grid place-items-center text-3xl border-4 transition-all ${
              cursor === k ? "scale-110" : ""
            }`}
            style={{
              background: cursor === k ? "#F4B740" : "white",
              borderColor: TINTA,
            }}
          >
            {label[p]}
          </div>
        ))}
      </div>
      <button
        onClick={() => setTocando((t) => !t)}
        className="px-5 py-3 rounded-full font-black text-white flex items-center gap-2"
        style={{ background: tocando ? "#E63946" : "#7A5CFF" }}
      >
        {tocando ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        {tocando ? "Parar" : "Tocar o ritmo"}
      </button>
    </div>
  );
}

// ============================================================== TEATRO
function TeatroExpressao({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const t = aula.teatro;
  const [gravou, setGravou] = useState(false);
  const rec = useRef<MediaRecorder | null>(null);
  const [gravando, setGravando] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  async function iniciar() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      mr.ondataavailable = (e) => chunks.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setAudioUrl(URL.createObjectURL(blob));
        setGravou(true);
        stream.getTracks().forEach((tr) => tr.stop());
      };
      rec.current = mr;
      mr.start();
      setGravando(true);
      setTimeout(() => {
        mr.state === "recording" && mr.stop();
        setGravando(false);
      }, 4000);
    } catch {
      alert("Sem microfone disponível. Faça a fala em voz alta assim mesmo!");
    }
  }

  function ouvirModelo() {
    if (muted) return;
    speakChunked(sanitizeForSpeech(t.fala), { rate: 0.95 });
  }

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-2" style={{ color: TINTA }}>{t.titulo}</h4>
      <div className="rounded-2xl bg-white p-6 border-4 text-center" style={{ borderColor: TINTA }}>
        <div className="text-7xl mb-2">{t.emoji}</div>
        <div className="text-xs uppercase tracking-widest font-black" style={{ color: TINTA + "70" }}>
          emoção: {t.emocao}
        </div>
        <p className="mt-3 font-serif text-2xl" style={{ color: TINTA }}>“{t.fala}”</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        <button onClick={ouvirModelo} className="px-4 py-2 rounded-full text-sm font-black bg-[#F1E7D0]" style={{ color: TINTA }}>
          🔊 Ouvir a fala
        </button>
        <button
          disabled={gravando}
          onClick={iniciar}
          className="px-4 py-2 rounded-full text-sm font-black text-white"
          style={{ background: gravando ? "#E63946" : "#7BA05B" }}
        >
          {gravando ? "🎤 Gravando 4s..." : "🎤 Grave sua interpretação"}
        </button>
        {audioUrl && <audio controls src={audioUrl} className="ml-auto" />}
      </div>
      {gravou && (
        <p className="text-sm mt-2 font-black" style={{ color: "#7BA05B" }}>
          🌟 Bravo, artista! Você gravou sua cena!
        </p>
      )}
    </div>
  );
}

// ============================================================== MOVIMENTO
function MovimentoImitar({ aula }: { aula: AulaArte }) {
  const m = aula.movimento;
  const [i, setI] = useState(0);
  const [t, setT] = useState(m.poses[0].segundos);
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    if (!rodando) return;
    if (t <= 0) {
      if (i < m.poses.length - 1) {
        setI(i + 1);
        setT(m.poses[i + 1].segundos);
      } else {
        setRodando(false);
      }
      return;
    }
    const id = window.setTimeout(() => setT((v) => v - 1), 1000);
    return () => window.clearTimeout(id);
  }, [t, rodando, i, m.poses]);

  const pose = m.poses[i];
  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-2" style={{ color: TINTA }}>{m.titulo}</h4>
      <div className="rounded-2xl bg-white p-6 border-4 text-center" style={{ borderColor: TINTA }}>
        <div className="text-8xl mb-2 transition-transform" style={{ transform: rodando ? "scale(1.1)" : "scale(1)" }}>
          {pose.emoji}
        </div>
        <div className="font-black font-serif text-xl" style={{ color: TINTA }}>{pose.nome}</div>
        <div className="text-5xl font-black mt-2" style={{ color: "#FF6B4A" }}>
          {rodando ? t : pose.segundos}s
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => {
            setI(0);
            setT(m.poses[0].segundos);
            setRodando(true);
          }}
          className="px-5 py-3 rounded-full font-black text-white"
          style={{ background: "#7A5CFF" }}
        >
          ▶ Começar dança
        </button>
        <button
          onClick={() => {
            setRodando(false);
            setI(0);
            setT(m.poses[0].segundos);
          }}
          className="px-4 py-2 rounded-full text-sm font-black bg-[#F1E7D0]"
          style={{ color: TINTA }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

// ============================================================== JOGO
function JogoArte({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const j = aula.jogo;
  const [rodada, setRodada] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  if (j.tipo !== "combinarCores") return null;

  // modo ordenar (arco-íris)
  if (j.dados.modo === "ordenar") {
    return <JogoOrdenar aula={aula} muted={muted} />;
  }

  const total = j.dados.rodadas.length;
  const r = j.dados.rodadas[rodada];
  const opcoes: string[] = r.opcoes;
  const corCerta: string = r.corCerta ?? r.cor;

  function escolher(c: string) {
    if (c === corCerta) {
      setAcertos((a) => a + 1);
      setFeedback(`✔ Isso mesmo! ${r.alvo.toUpperCase()} é essa cor. ${r.dica ? `Dica: ${r.dica}.` : ""}`);
      if (!muted) speakChunked("Muito bem! Você acertou.", {});
    } else {
      setFeedback(`✖ Ops! Tenta de novo — procure a cor ${r.alvo}.`);
      if (!muted) speakChunked("Quase! Tente outra.", {});
      return;
    }
    setTimeout(() => {
      setFeedback(null);
      setRodada((k) => k + 1);
    }, 1200);
  }

  if (rodada >= total) {
    return (
      <div className="text-center p-6 rounded-2xl bg-white border-4" style={{ borderColor: TINTA }}>
        <div className="text-6xl">🏆</div>
        <div className="font-serif text-2xl font-black mt-2" style={{ color: TINTA }}>
          Fim de jogo! Você acertou {acertos} de {total}.
        </div>
        <button
          onClick={() => {
            setRodada(0);
            setAcertos(0);
          }}
          className="mt-3 px-4 py-2 rounded-full font-black text-white"
          style={{ background: "#7A5CFF" }}
        >
          Jogar de novo
        </button>
      </div>
    );
  }

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-1" style={{ color: TINTA }}>{j.titulo}</h4>
      <div className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: TINTA + "70" }}>
        Rodada {rodada + 1} de {total}
      </div>
      <div className="rounded-2xl bg-white p-6 border-4 text-center mb-3" style={{ borderColor: TINTA }}>
        <div className="text-lg font-serif" style={{ color: TINTA }}>Toque na cor</div>
        <div className="text-3xl font-black font-serif" style={{ color: TINTA }}>{r.alvo.toUpperCase()}</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {opcoes.map((c) => (
          <button
            key={c}
            onClick={() => escolher(c)}
            className="h-20 rounded-2xl border-4 active:scale-95 transition-transform"
            style={{ background: c, borderColor: TINTA }}
            aria-label={c}
          />
        ))}
      </div>
      {feedback && (
        <div className="mt-3 rounded-xl p-3 font-black font-serif text-center" style={{ background: "#F1E7D0", color: TINTA }}>
          {feedback}
        </div>
      )}
    </div>
  );
}

function JogoOrdenar({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const ordem: string[] = aula.jogo.dados.ordemCerta;
  const [emb, setEmb] = useState<string[]>(() => [...ordem].sort(() => Math.random() - 0.5));
  const [alvo, setAlvo] = useState<string[]>([]);
  const [ok, setOk] = useState(false);

  function selecionar(c: string) {
    if (alvo.length >= ordem.length) return;
    const proxima = ordem[alvo.length];
    if (c !== proxima) {
      if (!muted) speakChunked("Essa não é a próxima. Tenta outra.", {});
      return;
    }
    const novo = [...alvo, c];
    setAlvo(novo);
    setEmb(emb.filter((x) => x !== c));
    if (novo.length === ordem.length) {
      setOk(true);
      if (!muted) speakChunked("Perfeito! Arco-íris na ordem certa.", {});
    }
  }

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-1" style={{ color: TINTA }}>{aula.jogo.titulo}</h4>
      <p className="text-sm mb-3" style={{ color: TINTA + "99" }}>
        Toque as cores na ordem certa do arco-íris (do vermelho ao violeta).
      </p>
      <div className="flex gap-1 mb-4">
        {ordem.map((_, k) => (
          <div key={k} className="flex-1 h-10 rounded" style={{ background: alvo[k] ?? "#EDE3D0" }} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {emb.map((c) => (
          <button
            key={c}
            onClick={() => selecionar(c)}
            className="h-14 rounded-xl border-2 active:scale-95"
            style={{ background: c, borderColor: TINTA }}
          />
        ))}
      </div>
      {ok && (
        <div className="mt-4 text-center rounded-xl p-3 font-black font-serif" style={{ background: "#F4B740", color: TINTA }}>
          🌈 Você montou o arco-íris certinho!
        </div>
      )}
    </div>
  );
}

// ============================================================== SECTION WRAPPER
function Secao({
  n,
  icon: Icon,
  cor,
  titulo,
  eixo,
  children,
}: {
  n: number;
  icon: any;
  cor: string;
  titulo: string;
  eixo?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl p-5 md:p-7 mb-5" style={{ background: PAPEL, boxShadow: `0 4px 0 0 ${TINTA}20` }}>
      <div className="flex items-center gap-3 mb-4">
        <div
          className="h-11 w-11 rounded-full grid place-items-center text-white font-black"
          style={{ background: cor }}
        >
          {n}
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: TINTA + "80" }}>
            {eixo || "Estúdio Brilha"}
          </div>
          <h3 className="font-serif text-2xl font-black leading-tight" style={{ color: TINTA }}>{titulo}</h3>
        </div>
        <Icon className="h-6 w-6" style={{ color: cor }} />
      </div>
      {children}
    </section>
  );
}

// ============================================================== MAIN PLAYER
export function PlayerArteV1({
  unidade,
  aula,
  proximaAulaSlug,
}: {
  unidade: UnidadeArte;
  aula: AulaArte;
  proximaAulaSlug?: string;
}) {
  const [muted, setMuted] = useState(false);
  useEffect(() => stopSpeaking, []);

  const cursoSlug = `arte-1ano-${unidade.slug}`;

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(circle at 20% 10%, #F4B74025 0%, transparent 50%), radial-gradient(circle at 80% 90%, #7A5CFF20 0%, transparent 50%), #FBF6EC",
      }}
    >
      <style>{`
        .arte-font-serif { font-family: 'Fraunces', Georgia, serif; }
        .arte-font-body { font-family: 'Nunito', system-ui, sans-serif; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur border-b-4" style={{ background: "#FBF6ECD9", borderColor: TINTA }}>
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/escola-brilha/arte-1ano"
            className="h-10 w-10 rounded-full grid place-items-center"
            style={{ background: "white", color: TINTA, border: `2px solid ${TINTA}` }}
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="flex-1">
            <div className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: TINTA + "80" }}>
              Estúdio Brilha · {unidade.titulo}
            </div>
            <h1 className="arte-font-serif text-xl font-black leading-tight" style={{ color: TINTA }}>
              {unidade.emoji} Aula {aula.numero}: {aula.titulo}
            </h1>
          </div>
          <button
            onClick={() => {
              setMuted((m) => !m);
              if (!muted) stopSpeaking();
            }}
            className="h-10 w-10 rounded-full grid place-items-center"
            style={{ background: muted ? "#E63946" : "#7BA05B", color: "white" }}
            aria-label="Áudio"
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 arte-font-body">
        {/* Cover kicker */}
        <div className="text-center mb-6">
          <div className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
               style={{ background: unidade.corPrincipal, color: "white" }}>
            Unidade {unidade.numero} · Aula {aula.numero} de {unidade.aulas.length}
          </div>
          <h2 className="arte-font-serif text-4xl font-black mt-3" style={{ color: TINTA }}>{aula.titulo}</h2>
          <p className="text-lg mt-1" style={{ color: TINTA + "99" }}>{aula.subtitulo}</p>
        </div>

        {/* 1 História */}
        <Secao n={1} icon={Sparkles} cor="#7A5CFF" titulo="História Inicial" eixo="🎬 Cena de abertura">
          <Historia aula={aula} muted={muted} />
        </Secao>

        {/* 2 Atividade */}
        <Secao n={2} icon={Palette} cor="#FF6B4A" titulo={aula.atividade.titulo} eixo="🎨 Atividade artística">
          <Atividade aula={aula} muted={muted} />
        </Secao>

        {/* 3 Vídeo */}
        <Secao n={3} icon={Play} cor="#F4B740" titulo="Vídeo demonstrativo" eixo="🎥 Assista e observe">
          <VideoDemo aula={aula} />
        </Secao>

        {/* 4 Ferramenta */}
        <Secao n={4} icon={Palette} cor="#E63946" titulo="Sua tela digital" eixo="🖌️ Ferramenta de desenho">
          <CanvasPintura aula={aula} />
        </Secao>

        {/* 5 Música */}
        <Secao n={5} icon={Music} cor="#7A5CFF" titulo={aula.musica.titulo} eixo="🎵 Momento música">
          <RitmoBatuque aula={aula} muted={muted} />
        </Secao>

        {/* 6 Teatro */}
        <Secao n={6} icon={Drama} cor="#FF6B4A" titulo={aula.teatro.titulo} eixo="🎭 Momento teatro">
          <TeatroExpressao aula={aula} muted={muted} />
        </Secao>

        {/* 7 Movimento */}
        <Secao n={7} icon={Wind} cor="#7BA05B" titulo={aula.movimento.titulo} eixo="💃 Movimento">
          <MovimentoImitar aula={aula} />
        </Secao>

        {/* 8 Galeria — usa mesma tabela do MissaoFamiliaFoto (já mostra suas fotos) */}
        {/* 9 Jogo */}
        <Secao n={9} icon={Gamepad2} cor="#1D8FE1" titulo={aula.jogo.titulo} eixo="🎮 Mini-jogo">
          <JogoArte aula={aula} muted={muted} />
        </Secao>

        {/* 10 Registro + Galeria embutida */}
        <Secao n={10} icon={Camera} cor="#F4B740" titulo="Registro da criação" eixo="📷 Foto no álbum">
          <p className="mb-3 font-serif text-lg" style={{ color: TINTA }}>{aula.registro.pergunta}</p>
          <MissaoFamiliaFoto cursoSlug={cursoSlug} aulaSlug={aula.slug} />
        </Secao>

        {/* 11 Conquista */}
        <Secao n={11} icon={Trophy} cor="#FF6B4A" titulo="Conquista desbloqueada!" eixo="🏆 Sua medalha">
          <div className="text-center rounded-3xl p-6" style={{ background: "linear-gradient(135deg,#F4B740,#FF6B4A)", color: "white" }}>
            <div className="text-7xl">{aula.conquista.medalha}</div>
            <div className="arte-font-serif text-3xl font-black mt-2">{aula.conquista.nome}</div>
            <div className="text-sm mt-1 opacity-90">{aula.conquista.descricao}</div>
          </div>
        </Secao>

        {/* 12 Relatório */}
        <Secao n={12} icon={ClipboardList} cor="#7BA05B" titulo="Relatório pra família" eixo="📊 O que aprendeu hoje">
          <ul className="space-y-2">
            {aula.relatorio.map((r, k) => (
              <li key={k} className="flex gap-2 items-start">
                <span className="mt-1">✔</span>
                <span style={{ color: TINTA }}>{r}</span>
              </li>
            ))}
          </ul>
        </Secao>

        {/* Próxima */}
        {proximaAulaSlug ? (
          <Link
            to="/escola-brilha/arte-1ano/$unidade/$aula"
            params={{ unidade: unidade.slug, aula: proximaAulaSlug }}
            className="block text-center rounded-full py-4 font-black text-white text-lg mb-10"
            style={{ background: TINTA }}
          >
            Próxima aula →
          </Link>
        ) : (
          <Link
            to="/escola-brilha/arte-1ano"
            className="block text-center rounded-full py-4 font-black text-white text-lg mb-10"
            style={{ background: "#7BA05B" }}
          >
            Voltar para o mapa da Unidade 🌈
          </Link>
        )}
      </main>
    </div>
  );
}
