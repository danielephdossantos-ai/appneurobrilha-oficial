import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft, Volume2, VolumeX, Sparkles, Palette, Music, Drama, Wind, Trophy,
  ClipboardList, Play, Pause, Camera, Gamepad2, Home, Lightbulb, HelpCircle, Award, Search, Wand2,
} from "lucide-react";
import { speakChunked, stopSpeaking, sanitizeForSpeech } from "@/lib/native-tts";
import { MissaoFamiliaFoto } from "@/escola-brilha/curso-v4/player-portugues/blocos/MissaoFamiliaFoto";
import { ModoProfessorPanel } from "./ModoProfessorPanel";
import type { AulaArte, UnidadeArte } from "./types";

const PAPEL = "#F5F0FF";
const TINTA = "#4C1D95";

/* ================================================================= HISTÓRIA */
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
      <div className="min-h-[280px] flex items-center justify-center transition-colors duration-500"
        style={{ background: cena.fundo || PAPEL }}>
        <div className="text-[9rem] leading-none drop-shadow-lg">{cena.emoji || "🎨"}</div>
      </div>
      <div className="bg-white p-5">
        <p className="text-lg leading-relaxed font-serif" style={{ color: TINTA }}>{cena.texto}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs font-bold" style={{ color: TINTA + "80" }}>Cena {i + 1} de {total}</span>
          <div className="flex gap-2">
            <button disabled={i === 0} onClick={() => setI(i - 1)}
              className="px-4 py-2 rounded-full font-black text-sm disabled:opacity-30 bg-[#F1E7D0]"
              style={{ color: TINTA }}>← Antes</button>
            <button disabled={i === total - 1} onClick={() => setI(i + 1)}
              className="px-4 py-2 rounded-full font-black text-sm disabled:opacity-30 text-white"
              style={{ background: TINTA }}>Próxima →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================= DESCOBERTA (Etapa 2) */
function Descoberta({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const d = aula.descoberta!;
  const [reveladas, setReveladas] = useState<Record<number, boolean>>({});

  function tocar(k: number) {
    setReveladas((r) => ({ ...r, [k]: true }));
    if (!muted) speakChunked(sanitizeForSpeech(`${d.itens[k].corNome}!`), { rate: 0.95 });
  }

  const todasReveladas = d.itens.every((_, k) => reveladas[k]);

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-1" style={{ color: TINTA }}>{d.titulo}</h4>
      {d.intro && <p className="text-sm mb-3" style={{ color: TINTA + "99" }}>{d.intro}</p>}
      <div className="grid grid-cols-3 gap-3">
        {d.itens.map((it, k) => (
          <button key={k} onClick={() => tocar(k)}
            className="aspect-square rounded-2xl border-4 grid place-items-center text-6xl transition-all active:scale-95"
            style={{
              background: reveladas[k] ? "white" : "#EDEDED",
              borderColor: TINTA,
              filter: reveladas[k] ? "none" : "grayscale(1)",
            }}>
            <span style={{ filter: reveladas[k] ? "none" : "grayscale(1) brightness(0.6)" }}>{it.emoji}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-2">
        {d.itens.map((it, k) => (
          <div key={k} className="text-center font-black text-sm" style={{ color: reveladas[k] ? it.cor : TINTA + "40" }}>
            {reveladas[k] ? it.corNome : "?"}
          </div>
        ))}
      </div>
      {todasReveladas && d.fecho && (
        <div className="mt-4 rounded-2xl p-3 font-black font-serif text-center"
          style={{ background: "#F4B740", color: TINTA }}>🌈 {d.fecho}</div>
      )}
    </div>
  );
}

/* ================================================================= EXPLORAÇÃO (Etapa 3) */
function Exploracao({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const ex = aula.exploracao!;
  const [rodadaIdx, setRodadaIdx] = useState(0);
  const [clicados, setClicados] = useState<Record<number, boolean>>({});
  const [feedback, setFeedback] = useState<string | null>(null);

  const rodada = ex.rodadas[rodadaIdx];
  const total = rodada?.objetos.filter((o) => o.correto).length ?? 0;
  const acertados = rodada?.objetos.filter((o, k) => o.correto && clicados[k]).length ?? 0;
  const finalizada = total > 0 && acertados === total;

  useEffect(() => {
    if (!muted && rodada) speakChunked(sanitizeForSpeech(rodada.instrucao), { rate: 0.95 });
  }, [rodadaIdx, muted, rodada]);

  useEffect(() => {
    if (finalizada) {
      setFeedback("✔ Excelente!");
      if (!muted) speakChunked("Excelente!", {});
      const t = setTimeout(() => {
        if (rodadaIdx < ex.rodadas.length - 1) {
          setRodadaIdx((r) => r + 1);
          setClicados({});
          setFeedback(null);
        }
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [finalizada, rodadaIdx, ex.rodadas.length, muted]);

  function clicar(k: number) {
    if (clicados[k]) return;
    const obj = rodada.objetos[k];
    if (obj.correto) {
      setClicados((c) => ({ ...c, [k]: true }));
    } else {
      setFeedback("✖ Vamos tentar novamente. Procure a cor " + rodada.corAlvoNome + "!");
      if (!muted) speakChunked("Ops. Tenta outra.", {});
      setTimeout(() => setFeedback(null), 1200);
    }
  }

  if (rodadaIdx >= ex.rodadas.length || (rodadaIdx === ex.rodadas.length - 1 && finalizada)) {
    return (
      <div className="text-center p-6 rounded-2xl bg-white border-4" style={{ borderColor: TINTA }}>
        <div className="text-6xl">🎉</div>
        <div className="font-serif text-xl font-black mt-2" style={{ color: TINTA }}>Encontrou todas as cores!</div>
      </div>
    );
  }

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-1" style={{ color: TINTA }}>{ex.titulo}</h4>
      <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: TINTA + "70" }}>
        Rodada {rodadaIdx + 1} de {ex.rodadas.length}
      </div>
      <div className="rounded-2xl bg-white p-4 border-4 text-center mb-3" style={{ borderColor: rodada.corAlvo }}>
        <div className="font-serif text-lg font-black" style={{ color: rodada.corAlvo }}>
          {rodada.instrucao}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {rodada.objetos.map((o, k) => (
          <button key={k} onClick={() => clicar(k)}
            className="aspect-square rounded-2xl border-4 grid place-items-center text-5xl transition-all active:scale-95"
            style={{
              background: "white",
              borderColor: TINTA,
              opacity: clicados[k] ? 0.4 : 1,
              transform: clicados[k] ? "scale(0.9)" : "scale(1)",
            }}>
            {o.emoji}
          </button>
        ))}
      </div>
      {feedback && (
        <div className="mt-3 rounded-xl p-3 font-black font-serif text-center"
          style={{ background: "#F1E7D0", color: TINTA }}>{feedback}</div>
      )}
    </div>
  );
}

/* ================================================================= FERRAMENTA PINTURA (Etapa 4) */
function CanvasPintura({ aula }: { aula: AulaArte }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cor, setCor] = useState(aula.ferramenta.cores?.[0] ?? "#E63946");
  const [tamanho, setTamanho] = useState(12);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    ctx.fillStyle = "#FFFFFF"; ctx.fillRect(0, 0, c.width, c.height);
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
    drawing.current = true; last.current = pos(ev);
    canvasRef.current?.setPointerCapture(ev.pointerId);
  }
  function onMove(ev: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !last.current) return;
    const p = pos(ev);
    ctx.strokeStyle = cor; ctx.lineWidth = tamanho;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo(last.current.x, last.current.y); ctx.lineTo(p.x, p.y); ctx.stroke();
    last.current = p;
  }
  function onUp() { drawing.current = false; last.current = null; }
  function limpar() {
    const c = canvasRef.current; const ctx = c?.getContext("2d"); if (!c || !ctx) return;
    ctx.fillStyle = "#FFFFFF"; ctx.fillRect(0, 0, c.width, c.height);
  }
  function baixar() {
    const c = canvasRef.current; if (!c) return;
    const link = document.createElement("a");
    link.download = `estudio-brilha-${aula.slug}.png`; link.href = c.toDataURL(); link.click();
  }

  return (
    <div>
      <p className="text-base font-serif mb-3" style={{ color: TINTA }}>
        <strong>Tarefa:</strong> {aula.ferramenta.brief}
      </p>
      <div className="rounded-2xl overflow-hidden border-4 bg-white" style={{ borderColor: TINTA }}>
        <canvas ref={canvasRef} width={800} height={500}
          onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}
          className="w-full block touch-none cursor-crosshair" style={{ aspectRatio: "8 / 5" }} />
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {(aula.ferramenta.cores ?? []).map((c) => (
          <button key={c} onClick={() => setCor(c)}
            className={`h-11 w-11 rounded-full border-4 transition-transform ${cor === c ? "scale-110" : ""}`}
            style={{ background: c, borderColor: cor === c ? TINTA : "white", boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}
            aria-label={`Cor ${c}`} />
        ))}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs font-black" style={{ color: TINTA }}>Pincel</span>
          <input type="range" min={4} max={40} value={tamanho} onChange={(e) => setTamanho(Number(e.target.value))} />
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button onClick={limpar} className="px-4 py-2 rounded-full text-sm font-black bg-[#F1E7D0]" style={{ color: TINTA }}>Limpar</button>
        <button onClick={baixar} className="px-4 py-2 rounded-full text-sm font-black text-white" style={{ background: "#FF6B4A" }}>Salvar imagem ↓</button>
      </div>
    </div>
  );
}

/* ================================================================= MISTURA (Etapa 5) */
function MisturaCores({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const m = aula.mistura!;
  const [passo, setPasso] = useState(0);
  const [misturado, setMisturado] = useState(false);
  const p = m.passos[passo];

  function misturar() {
    setMisturado(true);
    if (!muted) speakChunked(sanitizeForSpeech(`${p.resultadoNome}!`), { rate: 0.95 });
  }
  function proximo() {
    if (passo < m.passos.length - 1) { setPasso(passo + 1); setMisturado(false); }
  }

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-3" style={{ color: TINTA }}>{m.titulo}</h4>
      <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: TINTA + "70" }}>
        Mistura {passo + 1} de {m.passos.length}
      </div>
      <div className="flex items-center justify-center gap-3 py-6 rounded-2xl bg-white border-4" style={{ borderColor: TINTA }}>
        <div className="h-24 w-24 rounded-full border-4 grid place-items-center text-5xl transition-transform"
          style={{ background: p.corA, borderColor: TINTA, transform: misturado ? "translateX(30px) scale(0.9)" : "" }}>
          {p.corAEmoji}
        </div>
        <div className="text-4xl font-black" style={{ color: TINTA }}>{misturado ? "=" : "+"}</div>
        <div className="h-24 w-24 rounded-full border-4 grid place-items-center text-5xl transition-transform"
          style={{ background: p.corB, borderColor: TINTA, transform: misturado ? "translateX(-30px) scale(0.9)" : "" }}>
          {p.corBEmoji}
        </div>
        {misturado && (
          <div className="ml-2 h-24 w-24 rounded-full border-4 grid place-items-center text-5xl animate-in fade-in zoom-in duration-500"
            style={{ background: p.resultado, borderColor: TINTA }}>
            {p.resultadoEmoji}
          </div>
        )}
      </div>
      {misturado && (
        <div className="mt-3 rounded-2xl p-3 font-black font-serif text-center"
          style={{ background: p.resultado, color: "white" }}>
          Nasceu {p.resultadoNome}!
        </div>
      )}
      <div className="flex gap-2 mt-4 justify-center">
        {!misturado ? (
          <button onClick={misturar} className="px-6 py-3 rounded-full font-black text-white"
            style={{ background: "#7A5CFF" }}>🪄 Misturar!</button>
        ) : passo < m.passos.length - 1 ? (
          <button onClick={proximo} className="px-6 py-3 rounded-full font-black text-white" style={{ background: TINTA }}>
            Próxima mistura →
          </button>
        ) : (
          <div className="font-black" style={{ color: TINTA }}>Você descobriu todas as misturas! 🌟</div>
        )}
      </div>
    </div>
  );
}

/* ================================================================= MINI JOGO ARRASTAR (Etapa 6) */
function MiniJogoArrastar({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const j = aula.miniJogo!;
  const [acertos, setAcertos] = useState<Record<number, boolean>>({});
  const [drag, setDrag] = useState<{ cor: string; corNome: string } | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const coresEmbaralhadas = useMemo(
    () => [...j.pares].sort(() => Math.random() - 0.5),
    [j.pares],
  );
  const objetosEmbaralhados = useMemo(
    () => [...j.pares].sort(() => Math.random() - 0.5),
    [j.pares],
  );

  function soltar(objIdx: number) {
    const objeto = objetosEmbaralhados[objIdx];
    if (!drag) return;
    if (drag.cor === objeto.cor) {
      const originalIdx = j.pares.findIndex((p) => p.objetoEmoji === objeto.objetoEmoji);
      setAcertos((a) => ({ ...a, [originalIdx]: true }));
      setFeedback(`✔ ${objeto.objetoNome} é ${objeto.corNome}!`);
      if (!muted) speakChunked("Isso!", {});
    } else {
      setFeedback(`✖ ${objeto.objetoNome} não é ${drag.corNome}. Tenta de novo!`);
      if (!muted) speakChunked("Ops, tenta outro.", {});
    }
    setDrag(null);
    setTimeout(() => setFeedback(null), 1500);
  }

  const completo = Object.keys(acertos).length === j.pares.length;

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-1" style={{ color: TINTA }}>{j.titulo}</h4>
      <p className="text-sm mb-4" style={{ color: TINTA + "99" }}>{j.instrucao}</p>

      {/* Objetos-alvo */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {objetosEmbaralhados.map((obj, k) => {
          const originalIdx = j.pares.findIndex((p) => p.objetoEmoji === obj.objetoEmoji);
          const acertou = acertos[originalIdx];
          return (
            <div key={k}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => soltar(k)}
              onClick={() => drag && soltar(k)}
              className="rounded-2xl border-4 border-dashed p-4 text-center transition-all"
              style={{
                background: acertou ? obj.cor : "white",
                borderColor: acertou ? obj.cor : TINTA + "60",
              }}>
              <div className="text-5xl">{obj.objetoEmoji}</div>
              <div className="font-black text-sm mt-1" style={{ color: acertou ? "white" : TINTA }}>
                {obj.objetoNome}
              </div>
            </div>
          );
        })}
      </div>

      {/* Paleta de cores arrastáveis */}
      <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: TINTA + "70" }}>
        Toque numa cor, depois no objeto certo:
      </div>
      <div className="grid grid-cols-4 gap-2">
        {coresEmbaralhadas.map((c, k) => (
          <button key={k}
            draggable
            onDragStart={() => setDrag({ cor: c.cor, corNome: c.corNome })}
            onClick={() => setDrag({ cor: c.cor, corNome: c.corNome })}
            className={`h-16 rounded-2xl border-4 transition-transform ${
              drag?.cor === c.cor ? "scale-110 ring-4 ring-offset-2" : ""
            }`}
            style={{ background: c.cor, borderColor: TINTA }}
            aria-label={c.corNome} />
        ))}
      </div>

      {drag && (
        <div className="mt-3 text-center text-sm font-black" style={{ color: drag.cor }}>
          Cor {drag.corNome} selecionada — toque no objeto certo!
        </div>
      )}
      {feedback && (
        <div className="mt-3 rounded-xl p-3 font-black font-serif text-center"
          style={{ background: "#F1E7D0", color: TINTA }}>{feedback}</div>
      )}
      {completo && (
        <div className="mt-4 rounded-2xl p-4 text-center font-black font-serif text-lg"
          style={{ background: "linear-gradient(135deg,#F4B740,#FF6B4A)", color: "white" }}>
          🎁 A caixa mágica está colorida de novo!
        </div>
      )}
    </div>
  );
}

/* ================================================================= MÚSICA / RITMO */
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
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.frequency.value = freq; o.type = "triangle";
      g.gain.setValueAtTime(0.001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur / 1000);
      o.connect(g).connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + dur / 1000);
    } catch {}
  }
  function tocarPasso(k: number) {
    const s = m.padrao[k];
    if (s === "palma") beep(800, 90);
    else if (s === "pé") beep(180, 140);
    else if (s === "boca") beep(500, 100);
  }
  useEffect(() => {
    if (!tocando) { if (timerRef.current) window.clearInterval(timerRef.current); setCursor(-1); return; }
    let k = 0; setCursor(0); tocarPasso(0);
    timerRef.current = window.setInterval(() => {
      k = (k + 1) % m.padrao.length; setCursor(k); tocarPasso(k);
    }, stepMs);
    return () => { if (timerRef.current) window.clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tocando]);

  const label: Record<string, string> = { palma: "👏", pé: "🦶", boca: "🗣️", silencio: "·" };

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-2" style={{ color: TINTA }}>{m.titulo}</h4>
      <p className="text-sm mb-3" style={{ color: TINTA + "99" }}>{m.bpm ?? 80} batidas por minuto — siga o padrão.</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {m.padrao.map((p, k) => (
          <div key={k}
            className={`h-16 w-16 rounded-2xl grid place-items-center text-3xl border-4 transition-all ${cursor === k ? "scale-110" : ""}`}
            style={{ background: cursor === k ? "#F4B740" : "white", borderColor: TINTA }}>
            {label[p]}
          </div>
        ))}
      </div>
      <button onClick={() => setTocando((t) => !t)}
        className="px-5 py-3 rounded-full font-black text-white flex items-center gap-2"
        style={{ background: tocando ? "#E63946" : "#7A5CFF" }}>
        {tocando ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        {tocando ? "Parar" : "Tocar o ritmo"}
      </button>
    </div>
  );
}

/* ================================================================= MISSÃO EM CASA (Etapa 8) */
function MissaoCasaBloco({ aula, cursoSlug }: { aula: AulaArte; cursoSlug: string }) {
  const m = aula.missaoCasa!;
  const [marcado, setMarcado] = useState(false);
  return (
    <div>
      <div className="rounded-2xl p-5 border-4 mb-4" style={{ borderColor: TINTA, background: "white" }}>
        <div className="text-5xl mb-2 text-center">{m.emoji ?? "🏠"}</div>
        <div className="font-serif text-lg font-black text-center" style={{ color: TINTA }}>{m.titulo}</div>
        <p className="text-base mt-2 text-center" style={{ color: TINTA }}>{m.instrucao}</p>
      </div>
      <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: TINTA + "70" }}>
        📷 Ou tire uma foto:
      </div>
      <MissaoFamiliaFoto cursoSlug={cursoSlug} aulaSlug={`${aula.slug}-missao-casa`} />
      <button
        onClick={() => setMarcado(true)}
        disabled={marcado}
        className="mt-3 w-full px-4 py-3 rounded-full font-black text-white disabled:opacity-60"
        style={{ background: marcado ? "#7BA05B" : TINTA }}>
        {marcado ? "✔ Missão concluída!" : "✅ Marcar como encontrei"}
      </button>
    </div>
  );
}

/* ================================================================= ATIVIDADE MANUAL */
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
      <h4 className="font-serif text-2xl font-black mb-2" style={{ color: TINTA }}>{aula.atividade.titulo}</h4>
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
        <button disabled={step === 0} onClick={() => setStep(step - 1)}
          className="px-4 py-2 rounded-full font-black text-sm disabled:opacity-30 bg-[#F1E7D0]" style={{ color: TINTA }}>← Antes</button>
        <button disabled={step === aula.atividade.passos.length - 1} onClick={() => setStep(step + 1)}
          className="px-4 py-2 rounded-full font-black text-sm disabled:opacity-30 text-white" style={{ background: TINTA }}>Próximo →</button>
      </div>
    </div>
  );
}

/* ================================================================= CURIOSIDADE (Etapa 10) */
function CuriosidadeBloco({ aula }: { aula: AulaArte }) {
  const c = aula.curiosidade!;
  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-3" style={{ color: TINTA }}>{c.titulo}</h4>
      <div className="space-y-2">
        {c.fatos.map((f, k) => (
          <div key={k} className="rounded-2xl p-4 bg-white border-l-4" style={{ borderColor: "#F4B740" }}>
            <div className="flex gap-2">
              <div className="text-2xl">💡</div>
              <p className="font-serif text-base" style={{ color: TINTA }}>{f}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================= QUIZ (Etapa 11) */
function QuizBloco({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const q = aula.quiz!;
  const [idx, setIdx] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [resposta, setResposta] = useState<number | null>(null);
  const [terminou, setTerminou] = useState(false);

  const p = q.perguntas[idx];

  useEffect(() => {
    if (!muted && p) speakChunked(sanitizeForSpeech(p.pergunta), { rate: 0.95 });
  }, [idx, muted, p]);

  function escolher(k: number) {
    if (resposta !== null) return;
    setResposta(k);
    if (p.opcoes[k].correto) {
      setAcertos((a) => a + 1);
      if (!muted) speakChunked("Muito bem!", {});
    } else {
      if (!muted) speakChunked("Quase!", {});
    }
  }
  function proxima() {
    if (idx < q.perguntas.length - 1) { setIdx(idx + 1); setResposta(null); }
    else setTerminou(true);
  }

  if (terminou) {
    return (
      <div className="text-center rounded-2xl p-6 bg-white border-4" style={{ borderColor: TINTA }}>
        <div className="text-6xl">{acertos === q.perguntas.length ? "🏆" : "🎉"}</div>
        <div className="font-serif text-2xl font-black mt-2" style={{ color: TINTA }}>
          {acertos} de {q.perguntas.length} acertos!
        </div>
      </div>
    );
  }

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-1" style={{ color: TINTA }}>{q.titulo}</h4>
      <div className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: TINTA + "70" }}>
        Pergunta {idx + 1} de {q.perguntas.length}
      </div>
      <div className="rounded-2xl bg-white p-5 border-4 mb-3" style={{ borderColor: TINTA }}>
        <p className="font-serif text-xl font-black text-center" style={{ color: TINTA }}>{p.pergunta}</p>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {p.opcoes.map((o, k) => {
          const isEscolhida = resposta === k;
          const revelou = resposta !== null;
          return (
            <button key={k} onClick={() => escolher(k)} disabled={revelou}
              className="rounded-2xl border-4 p-4 flex items-center gap-3 text-left transition-all"
              style={{
                background: revelou
                  ? o.correto ? "#7BA05B" : isEscolhida ? "#E63946" : "white"
                  : "white",
                color: revelou && (o.correto || isEscolhida) ? "white" : TINTA,
                borderColor: TINTA,
              }}>
              {o.emoji && <span className="text-3xl">{o.emoji}</span>}
              <span className="font-black flex-1">{o.label}</span>
              {revelou && o.correto && <span className="text-2xl">✔</span>}
              {revelou && isEscolhida && !o.correto && <span className="text-2xl">✖</span>}
            </button>
          );
        })}
      </div>
      {resposta !== null && (
        <>
          {p.explicacao && (
            <div className="mt-3 rounded-xl p-3 font-serif text-center"
              style={{ background: "#F1E7D0", color: TINTA }}>{p.explicacao}</div>
          )}
          <button onClick={proxima}
            className="mt-3 w-full px-4 py-3 rounded-full font-black text-white"
            style={{ background: TINTA }}>
            {idx < q.perguntas.length - 1 ? "Próxima pergunta →" : "Ver resultado 🏆"}
          </button>
        </>
      )}
    </div>
  );
}

/* ================================================================= DESAFIO FINAL (Etapa 12) */
function DesafioFinalBloco({ aula }: { aula: AulaArte }) {
  const d = aula.desafioFinal!;
  return (
    <div className="text-center rounded-3xl p-8"
      style={{ background: "linear-gradient(135deg,#F4B740,#FF6B4A,#7A5CFF)", color: "white" }}>
      <div className="text-sm font-black uppercase tracking-widest opacity-90">{d.titulo}</div>
      <p className="font-serif text-xl mt-2 opacity-95">{d.narrativa}</p>
      <div className="text-8xl my-4 drop-shadow-lg">{d.medalha}</div>
      <div className="font-serif text-3xl font-black">{d.nomeMedalha}</div>
      <div className="inline-block mt-3 px-4 py-2 rounded-full font-black bg-white/25 backdrop-blur">
        +{d.xp} XP
      </div>
    </div>
  );
}

/* ================================================================= TEATRO / MOVIMENTO / JOGO ANTIGOS */
function TeatroExpressao({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const t = aula.teatro; if (!t) return null;
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
        setAudioUrl(URL.createObjectURL(blob)); setGravou(true);
        stream.getTracks().forEach((tr) => tr.stop());
      };
      rec.current = mr; mr.start(); setGravando(true);
      setTimeout(() => { mr.state === "recording" && mr.stop(); setGravando(false); }, 4000);
    } catch { alert("Sem microfone. Faça a fala em voz alta!"); }
  }
  function ouvirModelo() {
    if (muted) return;
    speakChunked(sanitizeForSpeech(t!.fala), { rate: 0.95 });
  }

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-2" style={{ color: TINTA }}>{t.titulo}</h4>
      <div className="rounded-2xl bg-white p-6 border-4 text-center" style={{ borderColor: TINTA }}>
        <div className="text-7xl mb-2">{t.emoji}</div>
        <div className="text-xs uppercase tracking-widest font-black" style={{ color: TINTA + "70" }}>emoção: {t.emocao}</div>
        <p className="mt-3 font-serif text-2xl" style={{ color: TINTA }}>"{t.fala}"</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        <button onClick={ouvirModelo} className="px-4 py-2 rounded-full text-sm font-black bg-[#F1E7D0]" style={{ color: TINTA }}>🔊 Ouvir</button>
        <button disabled={gravando} onClick={iniciar}
          className="px-4 py-2 rounded-full text-sm font-black text-white"
          style={{ background: gravando ? "#E63946" : "#7BA05B" }}>
          {gravando ? "🎤 Gravando 4s..." : "🎤 Grave"}
        </button>
        {audioUrl && <audio controls src={audioUrl} className="ml-auto" />}
      </div>
      {gravou && <p className="text-sm mt-2 font-black" style={{ color: "#7BA05B" }}>🌟 Bravo!</p>}
    </div>
  );
}

function MovimentoImitar({ aula }: { aula: AulaArte }) {
  const m = aula.movimento; if (!m) return null;
  const [i, setI] = useState(0);
  const [t, setT] = useState(m.poses[0].segundos);
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    if (!rodando) return;
    if (t <= 0) {
      if (i < m.poses.length - 1) { setI(i + 1); setT(m.poses[i + 1].segundos); }
      else setRodando(false);
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
        <div className="text-8xl mb-2">{pose.emoji}</div>
        <div className="font-black font-serif text-xl" style={{ color: TINTA }}>{pose.nome}</div>
        <div className="text-5xl font-black mt-2" style={{ color: "#FF6B4A" }}>{rodando ? t : pose.segundos}s</div>
      </div>
      <div className="flex gap-2 mt-3">
        <button onClick={() => { setI(0); setT(m.poses[0].segundos); setRodando(true); }}
          className="px-5 py-3 rounded-full font-black text-white" style={{ background: "#7A5CFF" }}>▶ Começar</button>
        <button onClick={() => { setRodando(false); setI(0); setT(m.poses[0].segundos); }}
          className="px-4 py-2 rounded-full text-sm font-black bg-[#F1E7D0]" style={{ color: TINTA }}>Reiniciar</button>
      </div>
    </div>
  );
}

function JogoArteAntigo({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const j = aula.jogo; if (!j || j.tipo !== "combinarCores") return null;
  const [rodada, setRodada] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  if (j.dados.modo === "ordenar") return <JogoOrdenar aula={aula} muted={muted} />;

  const total = j.dados.rodadas.length;
  const r = j.dados.rodadas[rodada];
  const opcoes: string[] = r.opcoes;
  const corCerta: string = r.corCerta ?? r.cor;

  function escolher(c: string) {
    if (c === corCerta) {
      setAcertos((a) => a + 1);
      setFeedback(`✔ Isso mesmo! ${r.alvo.toUpperCase()} é essa cor. ${r.dica ? `Dica: ${r.dica}.` : ""}`);
      if (!muted) speakChunked("Muito bem!", {});
    } else {
      setFeedback(`✖ Ops! Tenta de novo — procure a cor ${r.alvo}.`);
      if (!muted) speakChunked("Quase!", {});
      return;
    }
    setTimeout(() => { setFeedback(null); setRodada((k) => k + 1); }, 1200);
  }
  if (rodada >= total) {
    return (
      <div className="text-center p-6 rounded-2xl bg-white border-4" style={{ borderColor: TINTA }}>
        <div className="text-6xl">🏆</div>
        <div className="font-serif text-2xl font-black mt-2" style={{ color: TINTA }}>
          Fim de jogo! {acertos} de {total}.
        </div>
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
          <button key={c} onClick={() => escolher(c)}
            className="h-20 rounded-2xl border-4 active:scale-95"
            style={{ background: c, borderColor: TINTA }} aria-label={c} />
        ))}
      </div>
      {feedback && (
        <div className="mt-3 rounded-xl p-3 font-black font-serif text-center"
          style={{ background: "#F1E7D0", color: TINTA }}>{feedback}</div>
      )}
    </div>
  );
}

function JogoOrdenar({ aula, muted }: { aula: AulaArte; muted: boolean }) {
  const ordem: string[] = aula.jogo!.dados.ordemCerta;
  const [emb, setEmb] = useState<string[]>(() => [...ordem].sort(() => Math.random() - 0.5));
  const [alvo, setAlvo] = useState<string[]>([]);
  const [ok, setOk] = useState(false);

  function selecionar(c: string) {
    if (alvo.length >= ordem.length) return;
    if (c !== ordem[alvo.length]) { if (!muted) speakChunked("Essa não é a próxima.", {}); return; }
    const novo = [...alvo, c]; setAlvo(novo); setEmb(emb.filter((x) => x !== c));
    if (novo.length === ordem.length) { setOk(true); if (!muted) speakChunked("Perfeito!", {}); }
  }

  return (
    <div>
      <h4 className="font-serif text-2xl font-black mb-1" style={{ color: TINTA }}>{aula.jogo!.titulo}</h4>
      <p className="text-sm mb-3" style={{ color: TINTA + "99" }}>Toque as cores na ordem certa do arco-íris.</p>
      <div className="flex gap-1 mb-4">
        {ordem.map((_, k) => <div key={k} className="flex-1 h-10 rounded" style={{ background: alvo[k] ?? "#EDE3D0" }} />)}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {emb.map((c) => (
          <button key={c} onClick={() => selecionar(c)} className="h-14 rounded-xl border-2 active:scale-95"
            style={{ background: c, borderColor: TINTA }} />
        ))}
      </div>
      {ok && (
        <div className="mt-4 text-center rounded-xl p-3 font-black font-serif" style={{ background: "#F4B740", color: TINTA }}>
          🌈 Arco-íris certinho!
        </div>
      )}
    </div>
  );
}

/* ================================================================= SECTION WRAPPER */
function Secao({ n, icon: Icon, cor, titulo, eixo, children }: {
  n: number; icon: any; cor: string; titulo: string; eixo?: string; children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl p-5 md:p-7 mb-5" style={{ background: PAPEL, boxShadow: `0 4px 0 0 ${TINTA}20` }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-11 w-11 rounded-full grid place-items-center text-white font-black" style={{ background: cor }}>{n}</div>
        <div className="flex-1">
          <div className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: TINTA + "80" }}>{eixo || "Estúdio Brilha"}</div>
          <h3 className="font-serif text-2xl font-black leading-tight" style={{ color: TINTA }}>{titulo}</h3>
        </div>
        <Icon className="h-6 w-6" style={{ color: cor }} />
      </div>
      {children}
    </section>
  );
}

/* ================================================================= MAIN PLAYER */
export function PlayerArteV1({
  unidade, aula, proximaAulaSlug,
}: {
  unidade: UnidadeArte; aula: AulaArte; proximaAulaSlug?: string;
}) {
  const [muted, setMuted] = useState(false);
  useEffect(() => stopSpeaking, []);

  const cursoSlug = `arte-1ano-${unidade.slug}`;
  let n = 0;
  const next = () => ++n;

  return (
    <div className="min-h-screen"
      style={{
        background:
          "radial-gradient(circle at 20% 10%, #A855F730 0%, transparent 50%), radial-gradient(circle at 80% 90%, #7C3AED30 0%, transparent 50%), #F5F0FF",
      }}>
      <style>{`
        .arte-font-serif { font-family: 'Nunito', system-ui, sans-serif; }
        .arte-font-body { font-family: 'Nunito', system-ui, sans-serif; }
      `}</style>

      <header className="sticky top-0 z-20 backdrop-blur border-b-4" style={{ background: "#F5F0FFD9", borderColor: TINTA }}>
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/escola-brilha/arte-1ano"
            className="h-10 w-10 rounded-full grid place-items-center"
            style={{ background: "white", color: TINTA, border: `2px solid ${TINTA}` }}
            aria-label="Voltar"><ArrowLeft className="h-5 w-5" /></Link>
          <div className="flex-1">
            <div className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: TINTA + "80" }}>
              Estúdio Brilha · {unidade.titulo}
            </div>
            <h1 className="arte-font-serif text-xl font-black leading-tight" style={{ color: TINTA }}>
              {unidade.emoji} Aula {aula.numero}: {aula.titulo}
            </h1>
          </div>
          <button onClick={() => { setMuted((m) => !m); if (!muted) stopSpeaking(); }}
            className="h-10 w-10 rounded-full grid place-items-center"
            style={{ background: muted ? "#E63946" : "#7BA05B", color: "white" }}
            aria-label="Áudio">
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 arte-font-body">
        <div className="text-center mb-6">
          <div className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
            style={{ background: unidade.corPrincipal, color: "white" }}>
            Unidade {unidade.numero} · Aula {aula.numero} de {unidade.aulas.length}
          </div>
          <h2 className="arte-font-serif text-4xl font-black mt-3" style={{ color: TINTA }}>{aula.titulo}</h2>
          <p className="text-lg mt-1" style={{ color: TINTA + "99" }}>{aula.subtitulo}</p>
        </div>

        {/* 1 História */}
        <Secao n={next()} icon={Sparkles} cor="#7A5CFF" titulo="História Inicial" eixo="🎬 Cena de abertura">
          <Historia aula={aula} muted={muted} />
        </Secao>

        {/* 2 Descoberta */}
        {aula.descoberta && (
          <Secao n={next()} icon={Search} cor="#E63946" titulo={aula.descoberta.titulo} eixo="🔎 Descobrindo as cores">
            <Descoberta aula={aula} muted={muted} />
          </Secao>
        )}

        {/* 3 Exploração */}
        {aula.exploracao && (
          <Secao n={next()} icon={Wand2} cor="#F4B740" titulo={aula.exploracao.titulo} eixo="👀 Explorar">
            <Exploracao aula={aula} muted={muted} />
          </Secao>
        )}

        {/* 4 Ferramenta */}
        <Secao n={next()} icon={Palette} cor="#FF6B4A" titulo="Sua tela digital" eixo="🎨 Pintura digital">
          <CanvasPintura aula={aula} />
        </Secao>

        {/* 5 Mistura */}
        {aula.mistura && (
          <Secao n={next()} icon={Palette} cor="#8B5CF6" titulo={aula.mistura.titulo} eixo="🖌 Misturando cores">
            <MisturaCores aula={aula} muted={muted} />
          </Secao>
        )}

        {/* 6 Mini Jogo (novo) OU Vídeo antigo */}
        {aula.miniJogo ? (
          <Secao n={next()} icon={Gamepad2} cor="#1D8FE1" titulo={aula.miniJogo.titulo} eixo="🎮 Mini Game">
            <MiniJogoArrastar aula={aula} muted={muted} />
          </Secao>
        ) : aula.video ? (
          <Secao n={next()} icon={Play} cor="#F4B740" titulo="Vídeo demonstrativo" eixo="🎥 Assista e observe">
            <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: TINTA }}>
              <div className="h-52 relative flex items-center justify-center"
                style={{ background: "conic-gradient(from 0deg, #E63946, #F97316, #F1C40F, #22C55E, #1D8FE1, #8B5CF6, #E63946)" }}>
                <div className="absolute inset-4 bg-white/85 rounded-xl backdrop-blur flex items-center justify-center">
                  <Play className="h-16 w-16" style={{ color: TINTA }} />
                </div>
              </div>
              <div className="bg-white p-4">
                <div className="font-black font-serif text-lg" style={{ color: TINTA }}>{aula.video.titulo}</div>
                <div className="text-sm mt-1" style={{ color: TINTA + "99" }}>{aula.video.descricao}</div>
              </div>
            </div>
          </Secao>
        ) : null}

        {/* 7 Música */}
        <Secao n={next()} icon={Music} cor="#7A5CFF" titulo={aula.musica.titulo} eixo="🎵 Música">
          <RitmoBatuque aula={aula} muted={muted} />
        </Secao>

        {/* 8 Missão em casa (novo) */}
        {aula.missaoCasa && (
          <Secao n={next()} icon={Home} cor="#7BA05B" titulo={aula.missaoCasa.titulo} eixo="🏠 Missão em casa">
            <MissaoCasaBloco aula={aula} cursoSlug={cursoSlug} />
          </Secao>
        )}

        {/* 9 Atividade manual */}
        <Secao n={next()} icon={Palette} cor="#FF6B4A" titulo={aula.atividade.titulo} eixo="✍ Atividade manual">
          <Atividade aula={aula} muted={muted} />
          {aula.registro && (
            <div className="mt-4 pt-4 border-t-2 border-dashed" style={{ borderColor: TINTA + "40" }}>
              <p className="mb-3 font-serif" style={{ color: TINTA }}>{aula.registro.pergunta}</p>
              <MissaoFamiliaFoto cursoSlug={cursoSlug} aulaSlug={aula.slug} />
            </div>
          )}
          {!aula.registro && aula.missaoCasa && (
            <div className="mt-4 pt-4 border-t-2 border-dashed" style={{ borderColor: TINTA + "40" }}>
              <p className="mb-3 font-serif" style={{ color: TINTA }}>Tire uma foto do seu desenho:</p>
              <MissaoFamiliaFoto cursoSlug={cursoSlug} aulaSlug={`${aula.slug}-desenho`} />
            </div>
          )}
        </Secao>

        {/* 10 Curiosidade (novo) */}
        {aula.curiosidade && (
          <Secao n={next()} icon={Lightbulb} cor="#F4B740" titulo={aula.curiosidade.titulo} eixo="🌎 Curiosidade">
            <CuriosidadeBloco aula={aula} />
          </Secao>
        )}

        {/* Teatro / Movimento / Jogo antigo (só se existirem) */}
        {aula.teatro && (
          <Secao n={next()} icon={Drama} cor="#FF6B4A" titulo={aula.teatro.titulo} eixo="🎭 Teatro">
            <TeatroExpressao aula={aula} muted={muted} />
          </Secao>
        )}
        {aula.movimento && (
          <Secao n={next()} icon={Wind} cor="#7BA05B" titulo={aula.movimento.titulo} eixo="💃 Movimento">
            <MovimentoImitar aula={aula} />
          </Secao>
        )}
        {aula.jogo && !aula.miniJogo && (
          <Secao n={next()} icon={Gamepad2} cor="#1D8FE1" titulo={aula.jogo.titulo} eixo="🎮 Mini-jogo">
            <JogoArteAntigo aula={aula} muted={muted} />
          </Secao>
        )}

        {/* 11 Quiz (novo) */}
        {aula.quiz && (
          <Secao n={next()} icon={HelpCircle} cor="#8B5CF6" titulo={aula.quiz.titulo} eixo="🧩 Quiz">
            <QuizBloco aula={aula} muted={muted} />
          </Secao>
        )}

        {/* 12 Desafio Final (novo) OU Conquista antiga */}
        {aula.desafioFinal ? (
          <Secao n={next()} icon={Award} cor="#FF6B4A" titulo="Desafio Final" eixo="🏆 Você conseguiu!">
            <DesafioFinalBloco aula={aula} />
          </Secao>
        ) : aula.conquista ? (
          <Secao n={next()} icon={Trophy} cor="#FF6B4A" titulo="Conquista desbloqueada!" eixo="🏆 Sua medalha">
            <div className="text-center rounded-3xl p-6" style={{ background: "linear-gradient(135deg,#F4B740,#FF6B4A)", color: "white" }}>
              <div className="text-7xl">{aula.conquista.medalha}</div>
              <div className="arte-font-serif text-3xl font-black mt-2">{aula.conquista.nome}</div>
              <div className="text-sm mt-1 opacity-90">{aula.conquista.descricao}</div>
            </div>
          </Secao>
        ) : null}

        {/* 13 Relatório */}
        <Secao n={next()} icon={ClipboardList} cor="#7BA05B" titulo="Relatório da aula" eixo="📊 O que aprendeu hoje">
          <ul className="space-y-2">
            {aula.relatorio.map((r, k) => (
              <li key={k} className="flex gap-2 items-start">
                <span className="mt-1">✔</span>
                <span style={{ color: TINTA }}>{r}</span>
              </li>
            ))}
          </ul>
        </Secao>

        {/* Modo Professor (invisível para criança) */}
        {aula.modoProfessor && <ModoProfessorPanel dados={aula.modoProfessor} />}

        {proximaAulaSlug ? (
          <Link to="/escola-brilha/arte-1ano/$unidade/$aula"
            params={{ unidade: unidade.slug, aula: proximaAulaSlug }}
            className="block text-center rounded-full py-4 font-black text-white text-lg mb-10"
            style={{ background: TINTA }}>Próxima aula →</Link>
        ) : (
          <Link to="/escola-brilha/arte-1ano"
            className="block text-center rounded-full py-4 font-black text-white text-lg mb-10"
            style={{ background: "#7BA05B" }}>Voltar para o mapa 🌈</Link>
        )}
      </main>
    </div>
  );
}
