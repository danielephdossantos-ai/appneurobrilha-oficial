import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Volume2, Check, X, Play, Pause, Eraser, Mic, Square, Trash2 } from "lucide-react";
import { speakChunked } from "@/lib/native-tts";
import { MissaoFamiliaFoto } from "@/escola-brilha/curso-v4/player-portugues/blocos/MissaoFamiliaFoto";
import "./atelier-skin.css";
import type { AulaArte, CorNome, EtapaBloco1 } from "./aulas/u1-a01-cores-falam";

/* --------------------------- Helpers de voz --------------------------- */

function useSpeak() {
  const speakingRef = useRef(false);
  return {
    say: async (text: string) => {
      if (speakingRef.current) return;
      speakingRef.current = true;
      try { await speakChunked(text); } finally { speakingRef.current = false; }
    },
    stop: () => { if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel(); },
  };
}

const CORES_HEX: Record<CorNome, string> = {
  vermelho: "#D64545", amarelo: "#F0C24A", azul: "#5A8FBF", verde: "#7FAE73",
  roxo: "#8A5A83", laranja: "#E8934A", rosa: "#E89AB0", branco: "#F5F0E4",
  preto: "#2D2418", marrom: "#8B5A3C",
};
const NOMES_CORES: Record<CorNome, string> = {
  vermelho: "Vermelho", amarelo: "Amarelo", azul: "Azul", verde: "Verde",
  roxo: "Roxo", laranja: "Laranja", rosa: "Rosa", branco: "Branco",
  preto: "Preto", marrom: "Marrom",
};

/* --------------------------- Cenas SVG --------------------------- */

function CenaSVG({ tipo }: { tipo: "por-do-sol" | "jardim" | "praia" | "floresta" }) {
  const common = { viewBox: "0 0 400 240", width: "100%", height: 240 as const, style: { display: "block" as const, borderRadius: 16 } };
  if (tipo === "por-do-sol") {
    return (
      <svg {...common}>
        <defs>
          <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8A5A83" /><stop offset=".5" stopColor="#E89AB0" /><stop offset="1" stopColor="#F0C24A" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#sky1)" />
        <circle cx="200" cy="170" r="55" fill="#E8934A" />
        <rect y="200" width="400" height="40" fill="#5A3F2A" />
      </svg>
    );
  }
  if (tipo === "jardim") {
    return (
      <svg {...common}>
        <rect width="400" height="240" fill="#B7DDF2" />
        <rect y="150" width="400" height="90" fill="#7FAE73" />
        {[40, 100, 170, 240, 320].map((x, i) => (
          <g key={i}><circle cx={x} cy="140" r="10" fill={["#D64545", "#F0C24A", "#E89AB0", "#D64545", "#F0C24A"][i]} /><rect x={x - 2} y="140" width="4" height="30" fill="#4F7A44" /></g>
        ))}
      </svg>
    );
  }
  if (tipo === "praia") {
    return (
      <svg {...common}>
        <rect width="400" height="140" fill="#B7DDF2" />
        <circle cx="330" cy="50" r="28" fill="#F0C24A" />
        <rect y="140" width="400" height="50" fill="#5A8FBF" />
        <rect y="190" width="400" height="50" fill="#F4EAD5" />
        <path d="M0 140 Q100 130 200 140 T400 140" fill="none" stroke="#F5F0E4" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect width="400" height="240" fill="#3E6A3A" />
      {[30, 80, 130, 200, 260, 340].map((x, i) => (
        <g key={i}>
          <rect x={x - 4} y={110 - (i % 3) * 10} width="8" height="100" fill="#5A3F2A" />
          <circle cx={x} cy={100 - (i % 3) * 10} r="30" fill={i % 2 === 0 ? "#4F7A44" : "#7FAE73"} />
        </g>
      ))}
      <rect y="210" width="400" height="30" fill="#8B5A3C" />
      <circle cx="350" cy="30" r="14" fill="#F0C24A" opacity=".7" />
    </svg>
  );
}

/* --------------------------- Textura tile SVG --------------------------- */

function TexturaTile({ t }: { t: "madeira" | "pedra" | "areia" | "agua" | "tecido" | "folhas" }) {
  const w = 100;
  const styles: Record<typeof t, React.ReactNode> = {
    madeira: (<><rect width={w} height={w} fill="#8B5A3C" /><path d="M0 20 Q50 15 100 22 M0 45 Q50 50 100 40 M0 70 Q50 66 100 75" stroke="#5A3F2A" strokeWidth="2" fill="none" /></>),
    pedra:   (<><rect width={w} height={w} fill="#A8A29E" /><circle cx="25" cy="30" r="14" fill="#8C867F" /><circle cx="70" cy="55" r="18" fill="#8C867F" /><circle cx="45" cy="80" r="12" fill="#8C867F" /></>),
    areia:   (<><rect width={w} height={w} fill="#EDD9A9" /><g fill="#C9AC70">{Array.from({length:40}).map((_,i)=><circle key={i} cx={(i*13)%w} cy={(i*17)%w} r="1.2" />)}</g></>),
    agua:    (<><rect width={w} height={w} fill="#5A8FBF" /><path d="M0 25 Q25 15 50 25 T100 25 M0 55 Q25 45 50 55 T100 55 M0 85 Q25 75 50 85 T100 85" stroke="#8FBADD" strokeWidth="2" fill="none" /></>),
    tecido:  (<><rect width={w} height={w} fill="#F0C4B4" /><path d="M0 0 L100 100 M0 20 L80 100 M20 0 L100 80" stroke="#E0A090" strokeWidth="1" /><path d="M100 0 L0 100 M0 80 L20 100 M80 0 L100 20" stroke="#E0A090" strokeWidth="1" /></>),
    folhas:  (<><rect width={w} height={w} fill="#3E6A3A" /><g fill="#7FAE73"><ellipse cx="25" cy="30" rx="14" ry="6" transform="rotate(30 25 30)" /><ellipse cx="65" cy="55" rx="14" ry="6" transform="rotate(-20 65 55)" /><ellipse cx="40" cy="80" rx="14" ry="6" transform="rotate(45 40 80)" /></g></>),
  };
  return <svg viewBox={`0 0 ${w} ${w}`} style={{ width: "100%", height: "100%", borderRadius: 12 }}>{styles[t]}</svg>;
}

/* --------------------------- Player --------------------------- */

type Concluidas = Set<number>;
const CtxConcluidas = React.createContext<{ concluidas: Concluidas; marcar: (n: number) => void } | null>(null);

export function PlayerArteV1({ aula, onSair }: { aula: AulaArte; onSair: () => void }) {
  const [i, setI] = useState(0);
  const [concluidas, setConcluidas] = useState<Concluidas>(new Set());
  const total = aula.etapas.length;
  const { say, stop } = useSpeak();
  useEffect(() => () => stop(), [stop]);

  const etapa = aula.etapas[i];
  const podeAvancar = i < total - 1;

  const marcar = (n: number) => setConcluidas((s) => { const nv = new Set(s); nv.add(n); return nv; });

  return (
    <CtxConcluidas.Provider value={{ concluidas, marcar }}>
      <div className="atelier">
        <div className="max-w-2xl mx-auto px-4 pt-4 pb-24">
          <div className="flex items-center justify-between gap-3 mb-3">
            <button onClick={onSair} className="brush-btn ghost !py-2 !px-3 !text-base">
              <ArrowLeft size={18} /> Sair
            </button>
            <div className="badge">Ateliê · {aula.ano}</div>
          </div>

          <h1 className="brush-title text-4xl mb-1">{aula.titulo}</h1>
          <div className="text-sm opacity-70 mb-4">
            Unidade {aula.unidade} — {aula.tituloUnidade} · Aula {aula.aula}
          </div>

          <div className="progress-track mb-6">
            <div className="progress-fill" style={{ width: `${((i + 1) / total) * 100}%` }} />
          </div>

          <div key={i} className="fade-up">
            <Etapa etapa={etapa} indice={i} say={say} aula={aula} />
          </div>

          <div className="flex items-center justify-between mt-6">
            <button className="brush-btn secondary" disabled={i === 0} onClick={() => setI((v) => Math.max(0, v - 1))}>
              ← Voltar
            </button>
            <div className="text-sm opacity-70">{i + 1} / {total}</div>
            {podeAvancar ? (
              <button className="brush-btn" onClick={() => { marcar(i); setI((v) => v + 1); }}>Próxima →</button>
            ) : (
              <button className="brush-btn" onClick={() => { marcar(i); onSair(); }}>Concluir ✓</button>
            )}
          </div>
        </div>
      </div>
    </CtxConcluidas.Provider>
  );
}

/* --------------------------- Router de etapas --------------------------- */

function Etapa({ etapa, indice, say, aula }: { etapa: EtapaBloco1; indice: number; say: (t: string) => Promise<void>; aula: AulaArte }) {
  switch (etapa.tipo) {
    case "historia":         return <EtapaHistoria etapa={etapa} say={say} />;
    case "observar-cores":   return <EtapaObservarCores etapa={etapa} say={say} />;
    case "cor-emocao":       return <EtapaCorEmocao etapa={etapa} say={say} />;
    case "artista":          return <EtapaArtista etapa={etapa} say={say} />;
    case "texturas":         return <EtapaTexturas etapa={etapa} say={say} />;
    case "curiosidade":      return <EtapaCuriosidade etapa={etapa} say={say} />;
    case "quiz":             return <EtapaQuiz etapa={etapa} say={say} />;
    case "pintura-digital":  return <EtapaPinturaDigital etapa={etapa} say={say} />;
    case "cor-emocao-drag":  return <EtapaCorEmocaoDrag etapa={etapa} say={say} />;
    case "musica-e-arte":    return <EtapaMusicaArte etapa={etapa} say={say} />;
    case "missao-casa":      return <EtapaMissaoCasa etapa={etapa} say={say} />;
    case "atividade-manual": return <EtapaAtividadeManual etapa={etapa} say={say} />;
    case "desafio-final":    return <EtapaDesafioFinal etapa={etapa} say={say} />;
    case "relatorio":        return <EtapaRelatorio etapa={etapa} say={say} aula={aula} indiceAtual={indice} />;
  }
}

function BtnFala({ onClick }: { onClick: () => void }) {
  return (
    <button className="brush-btn secondary !py-2 !px-3 !text-base" onClick={onClick} aria-label="Ouvir">
      <Volume2 size={18}/> Ouvir
    </button>
  );
}

/* --------------------------- Etapas Bloco 1 --------------------------- */

function EtapaHistoria({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "historia" }>; say: (t: string) => Promise<void> }) {
  useEffect(() => { say(etapa.texto); }, []);
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h2 className="brush-title text-3xl">{etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.texto)} />
      </div>
      <p className="text-lg leading-relaxed mb-5">{etapa.texto}</p>
      <div className="grid grid-cols-5 gap-3 mb-5">
        {etapa.lapis.map((l) => (
          <button key={l.cor} onClick={() => say(l.frase)} className="flex flex-col items-center gap-1 group" aria-label={`Lápis ${l.cor}`}>
            <div className="paint-chip" style={{ background: l.hex }} />
            <div className="text-xs font-bold opacity-70 group-hover:opacity-100">{NOMES_CORES[l.cor]}</div>
            <div className="text-[11px] opacity-60">{l.emocao}</div>
          </button>
        ))}
      </div>
      <div className="brush-title text-2xl">{etapa.convite}</div>
    </div>
  );
}

function EtapaObservarCores({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "observar-cores" }>; say: (t: string) => Promise<void> }) {
  const [idx, setIdx] = useState(0);
  const [selecionadas, setSelecionadas] = useState<Record<string, Set<CorNome>>>({});
  const cena = etapa.cenas[idx];
  const set = selecionadas[cena.nome] ?? new Set<CorNome>();

  const toggle = (c: CorNome) => {
    const novo = new Set(set);
    if (novo.has(c)) novo.delete(c); else novo.add(c);
    setSelecionadas((p) => ({ ...p, [cena.nome]: novo }));
    say(cena.coresPresentes.includes(c) ? `Sim! ${NOMES_CORES[c]} está na cena.` : `${NOMES_CORES[c]} não aparece nessa paisagem.`);
  };

  const paleta: CorNome[] = ["vermelho","amarelo","azul","verde","roxo","laranja","rosa","marrom","branco"];

  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">{etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-4">{etapa.instrucao}</p>
      <div className="brush-title text-2xl mb-2">{cena.nome}</div>
      <CenaSVG tipo={cena.svg} />
      <div className="mt-4 flex flex-wrap gap-3 justify-center">
        {paleta.map((c) => (
          <button key={c} onClick={() => toggle(c)} className={`paint-chip ${set.has(c) ? "selected" : ""}`} style={{ background: CORES_HEX[c] }} aria-label={NOMES_CORES[c]} />
        ))}
      </div>
      <div className="flex items-center justify-between mt-5">
        <button className="brush-btn secondary !py-2 !px-3 !text-base" disabled={idx === 0} onClick={() => setIdx((v) => v - 1)}>← Cena</button>
        <div className="text-sm opacity-70">Cena {idx + 1} de {etapa.cenas.length}</div>
        <button className="brush-btn !py-2 !px-3 !text-base" disabled={idx >= etapa.cenas.length - 1} onClick={() => setIdx((v) => v + 1)}>Cena →</button>
      </div>
    </div>
  );
}

function EtapaCorEmocao({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "cor-emocao" }>; say: (t: string) => Promise<void> }) {
  const [ativa, setAtiva] = useState<number | null>(null);
  const cartao = ativa !== null ? etapa.cartoes[ativa] : null;
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">{etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-4">{etapa.instrucao}</p>
      <div className="flex justify-center items-center mb-5" style={{ minHeight: 130 }}>
        <div className="rounded-full grid place-items-center transition-all"
          style={{ width: 130, height: 130, fontSize: 72, background: cartao ? cartao.hex : "#F4EAD5", boxShadow: "0 10px 24px -12px rgba(45,36,24,.35)" }}>
          {cartao ? cartao.emoji : "😐"}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {etapa.cartoes.map((c, k) => (
          <button key={k} className={`paint-chip mx-auto ${ativa === k ? "selected" : ""}`} style={{ background: c.hex }}
            aria-label={c.emocao} onClick={() => { setAtiva(k); say(`${c.emocao}. ${c.explicacao}`); }} />
        ))}
      </div>
      {cartao && (
        <div className="fade-up text-center">
          <div className="brush-title text-2xl">{cartao.emocao}</div>
          <div className="text-sm opacity-80">{cartao.explicacao}</div>
        </div>
      )}
    </div>
  );
}

function EtapaArtista({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "artista" }>; say: (t: string) => Promise<void> }) {
  const [resposta, setResposta] = useState<number | null>(null);
  useEffect(() => { say(etapa.pergunta); }, []);
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h2 className="brush-title text-3xl">{etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.pergunta)} />
      </div>
      <img src={etapa.obraUrl} alt={etapa.obraLegenda} loading="lazy" width={1024} height={768} className="w-full rounded-2xl border border-black/10 shadow-md" />
      <p className="text-xs italic opacity-70 mt-2 text-center">{etapa.obraLegenda}</p>
      <p className="mt-4 text-lg font-semibold">{etapa.pergunta}</p>
      <div className="grid grid-cols-2 gap-2 mt-3">
        {etapa.opcoes.map((o, k) => (
          <button key={k} className={`brush-btn secondary ${resposta === k ? "!bg-[var(--atelier-ochre)] !text-white" : ""}`}
            onClick={() => { setResposta(k); say(`Você sentiu ${o.replace(/^\S+\s/, "")}.`); }}>{o}</button>
        ))}
      </div>
      {resposta !== null && (
        <div className="fade-up mt-4 p-3 rounded-xl bg-[var(--atelier-cream-2)] text-sm">
          <b>Não existe resposta errada.</b> {etapa.comentario}
        </div>
      )}
    </div>
  );
}

function EtapaTexturas({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "texturas" }>; say: (t: string) => Promise<void> }) {
  const [ligacoes, setLigacoes] = useState<Record<string, string>>({});
  const [selecionada, setSelecionada] = useState<string | null>(null);
  const desenhos = useMemo(() => [...etapa.itens.map((it) => it.combina)].sort((a, b) => a.localeCompare(b)), [etapa]);
  const escolherDesenho = (desenho: string) => {
    if (!selecionada) { say("Primeiro toca em uma textura."); return; }
    const item = etapa.itens.find((it) => it.textura === selecionada);
    if (!item) return;
    const acertou = item.combina === desenho;
    setLigacoes((p) => ({ ...p, [selecionada]: desenho }));
    say(acertou ? "Combinou muito bem!" : "Hmm, essa textura combina com outra coisa. Tenta de novo.");
    setSelecionada(null);
  };
  const totalCertos = etapa.itens.filter((it) => ligacoes[it.textura] === it.combina).length;
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">{etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-4">{etapa.instrucao}</p>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {etapa.itens.map((it) => {
          const feito = ligacoes[it.textura];
          const sel = selecionada === it.textura;
          return (
            <button key={it.textura} onClick={() => { setSelecionada(it.textura); say(it.nome); }}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition ${sel ? "border-[var(--atelier-terracotta)] scale-[1.03]" : "border-transparent"}`}
              style={{ boxShadow: "0 6px 14px -8px rgba(45,36,24,.4)" }}>
              <TexturaTile t={it.textura} />
              <div className="absolute bottom-0 inset-x-0 text-[11px] font-bold text-white bg-black/40 py-1">{it.nome}</div>
              {feito && <div className="absolute top-1 right-1 bg-white rounded-full p-0.5">{feito === it.combina ? <Check size={14} className="text-green-600"/> : <X size={14} className="text-red-600"/>}</div>}
            </button>
          );
        })}
      </div>
      <div className="text-sm mb-2 opacity-70">Agora toca no desenho que combina:</div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {desenhos.map((d) => (
          <button key={d} className="brush-btn secondary !text-base !py-2" onClick={() => escolherDesenho(d)}>{d}</button>
        ))}
      </div>
      <div className="text-center text-sm opacity-70">Certos: {totalCertos} / {etapa.itens.length}</div>
    </div>
  );
}

function EtapaCuriosidade({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "curiosidade" }>; say: (t: string) => Promise<void> }) {
  useEffect(() => { say(etapa.texto); }, []);
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h2 className="brush-title text-3xl">🌎 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.texto)} />
      </div>
      <p className="text-lg leading-relaxed">{etapa.texto}</p>
    </div>
  );
}

function EtapaQuiz({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "quiz" }>; say: (t: string) => Promise<void> }) {
  const [q, setQ] = useState(0);
  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const pergunta = etapa.perguntas[q];
  const resposta = respostas[q];
  const acertou = resposta === pergunta.correta;
  useEffect(() => { say(pergunta.pergunta); }, [q]);
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h2 className="brush-title text-3xl">🧠 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(pergunta.pergunta)} />
      </div>
      <div className="text-sm opacity-70 mb-2">Pergunta {q + 1} de {etapa.perguntas.length}</div>
      <p className="text-lg font-semibold mb-4">{pergunta.pergunta}</p>
      <div className="grid gap-2 mb-4">
        {pergunta.opcoes.map((o, k) => {
          const escolhida = resposta === k;
          const isCorreta = k === pergunta.correta;
          const cor = resposta === undefined ? "secondary" : escolhida && isCorreta ? "" : escolhida && !isCorreta ? "secondary" : "ghost";
          return (
            <button key={k} disabled={resposta !== undefined} className={`brush-btn ${cor} justify-start !text-base`}
              style={escolhida && !isCorreta ? { background: "#F0C4B4", color: "#2D2418" } : undefined}
              onClick={() => { setRespostas((p) => ({ ...p, [q]: k })); say(k === pergunta.correta ? "Isso mesmo!" : "Não é essa. Vou te explicar."); }}>
              {resposta !== undefined && isCorreta && "✓ "}{escolhida && !isCorreta && "✗ "}{o}
            </button>
          );
        })}
      </div>
      {resposta !== undefined && (
        <div className={`fade-up p-3 rounded-xl text-sm ${acertou ? "bg-[var(--atelier-sage)]/20" : "bg-[var(--atelier-blush)]"}`}>
          <b>{acertou ? "Acertou! " : "Quase! "}</b>{pergunta.explicacao}
        </div>
      )}
      <div className="flex items-center justify-between mt-4">
        <button className="brush-btn secondary !py-2 !px-3 !text-base" disabled={q === 0} onClick={() => setQ((v) => v - 1)}>← Anterior</button>
        <button className="brush-btn !py-2 !px-3 !text-base" disabled={q >= etapa.perguntas.length - 1} onClick={() => setQ((v) => v + 1)}>Próxima →</button>
      </div>
    </div>
  );
}

/* --------------------------- Canvas de Pintura reutilizável --------------------------- */

type Ferramenta = "pincel" | "lapis" | "giz" | "carimbo";

function CanvasPintura({ paleta, alturaCanvas = 320, etapaId }: { paleta: CorNome[]; alturaCanvas?: number; etapaId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cor, setCor] = useState<CorNome>(paleta[0] ?? "vermelho");
  const [ferramenta, setFerramenta] = useState<Ferramenta>("pincel");
  const desenhandoRef = useRef(false);
  const ultimoRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const w = c.clientWidth;
    const h = alturaCanvas;
    c.width = Math.round(w * dpr);
    c.height = Math.round(h * dpr);
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.fillStyle = "#FFFDF7";
    ctx.fillRect(0, 0, w, h);
  }, [alturaCanvas, etapaId]);

  const coords = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    const c = canvasRef.current!;
    const r = c.getBoundingClientRect();
    return { x: ev.clientX - r.left, y: ev.clientY - r.top };
  };

  const desenhar = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const hex = CORES_HEX[cor];
    if (ferramenta === "carimbo") {
      ctx.fillStyle = hex; ctx.beginPath(); ctx.arc(b.x, b.y, 14, 0, Math.PI * 2); ctx.fill();
      return;
    }
    ctx.strokeStyle = hex;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    if (ferramenta === "pincel") { ctx.globalAlpha = 1; ctx.lineWidth = 14; }
    else if (ferramenta === "lapis") { ctx.globalAlpha = 1; ctx.lineWidth = 3; }
    else if (ferramenta === "giz") { ctx.globalAlpha = 0.45; ctx.lineWidth = 10; }
    const jitter = ferramenta === "giz" ? 2 : 0;
    ctx.beginPath();
    ctx.moveTo(a.x + (Math.random() - 0.5) * jitter, a.y + (Math.random() - 0.5) * jitter);
    ctx.lineTo(b.x + (Math.random() - 0.5) * jitter, b.y + (Math.random() - 0.5) * jitter);
    ctx.stroke();
    ctx.globalAlpha = 1;
  };

  const onDown = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    ev.preventDefault();
    (ev.target as HTMLCanvasElement).setPointerCapture(ev.pointerId);
    desenhandoRef.current = true;
    const p = coords(ev);
    ultimoRef.current = p;
    desenhar(p, p);
  };
  const onMove = (ev: React.PointerEvent<HTMLCanvasElement>) => {
    if (!desenhandoRef.current) return;
    ev.preventDefault();
    const p = coords(ev);
    if (ultimoRef.current) desenhar(ultimoRef.current, p);
    ultimoRef.current = p;
  };
  const onUp = () => { desenhandoRef.current = false; ultimoRef.current = null; };

  const limpar = () => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#FFFDF7";
    ctx.fillRect(0, 0, c.width, c.height);
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    ctx.scale(dpr, dpr);
  };

  const ferramentas: { id: Ferramenta; nome: string; icone: string }[] = [
    { id: "pincel", nome: "Pincel", icone: "🖌" },
    { id: "lapis",  nome: "Lápis",  icone: "✏️" },
    { id: "giz",    nome: "Giz",    icone: "🖍" },
    { id: "carimbo",nome: "Carimbo",icone: "⭕" },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {ferramentas.map((f) => (
          <button key={f.id} onClick={() => setFerramenta(f.id)}
            className={`brush-btn !py-1.5 !px-3 !text-sm ${ferramenta === f.id ? "" : "secondary"}`}>
            {f.icone} {f.nome}
          </button>
        ))}
        <button onClick={limpar} className="brush-btn ghost !py-1.5 !px-3 !text-sm ml-auto"><Eraser size={14}/> Limpar</button>
      </div>
      <div className="flex flex-wrap gap-2 mb-3 justify-center">
        {paleta.map((c) => (
          <button key={c} onClick={() => setCor(c)} aria-label={NOMES_CORES[c]}
            className={`paint-chip ${cor === c ? "selected" : ""}`} style={{ background: CORES_HEX[c] }} />
        ))}
      </div>
      <canvas ref={canvasRef} style={{ width: "100%", height: alturaCanvas, borderRadius: 16, background: "#FFFDF7", touchAction: "none", boxShadow: "inset 0 0 0 2px rgba(0,0,0,.06)" }}
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} />
    </div>
  );
}

/* --------------------------- Bloco 2 · Pintura Digital --------------------------- */

function EtapaPinturaDigital({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "pintura-digital" }>; say: (t: string) => Promise<void> }) {
  useEffect(() => { say(etapa.instrucao); }, []);
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🎨 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-4">{etapa.instrucao}</p>
      <CanvasPintura paleta={etapa.paleta} etapaId="pintura-digital" />
    </div>
  );
}

/* --------------------------- Bloco 2 · Cor × Emoção (match) --------------------------- */

function EtapaCorEmocaoDrag({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "cor-emocao-drag" }>; say: (t: string) => Promise<void> }) {
  const [emocaoSel, setEmocaoSel] = useState<number | null>(null);
  const [ligadas, setLigadas] = useState<Record<number, CorNome>>({});
  const coresEmbaralhadas = useMemo(() => [...etapa.pares].sort((a, b) => a.cor.localeCompare(b.cor)), [etapa]);
  useEffect(() => { say(etapa.instrucao); }, []);

  const tocarCor = (cor: CorNome) => {
    if (emocaoSel === null) { say("Primeiro toca em uma emoção."); return; }
    const par = etapa.pares[emocaoSel];
    const acertou = par.cor === cor;
    setLigadas((p) => ({ ...p, [emocaoSel]: cor }));
    say(acertou ? `Isso mesmo! ${par.emocao} combina com ${NOMES_CORES[cor]}.` : `Hmm, ${par.emocao} não é ${NOMES_CORES[cor]}. Tenta de novo!`);
    setEmocaoSel(null);
  };

  const totalCertos = etapa.pares.filter((p, k) => ligadas[k] === p.cor).length;

  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">💖 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-4">{etapa.instrucao}</p>

      <div className="text-sm font-bold mb-2 opacity-70">1. Toca em uma emoção</div>
      <div className="grid grid-cols-1 gap-2 mb-4">
        {etapa.pares.map((p, k) => {
          const feito = ligadas[k];
          const acertou = feito === p.cor;
          const sel = emocaoSel === k;
          return (
            <button key={k} onClick={() => { setEmocaoSel(k); say(p.emocao); }}
              className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition text-left ${sel ? "border-[var(--atelier-terracotta)] bg-[var(--atelier-cream-2)]" : "border-transparent bg-white/60"}`}>
              <div className="text-3xl">{p.emoji}</div>
              <div className="flex-1 brush-title text-xl">{p.emocao}</div>
              {feito && (
                <div className="flex items-center gap-1">
                  <div className="paint-chip !w-7 !h-7" style={{ background: CORES_HEX[feito] }} />
                  {acertou ? <Check size={18} className="text-green-600"/> : <X size={18} className="text-red-600"/>}
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="text-sm font-bold mb-2 opacity-70">2. Toca na cor que combina</div>
      <div className="flex flex-wrap gap-3 justify-center mb-3">
        {coresEmbaralhadas.map((p) => (
          <button key={p.cor} onClick={() => tocarCor(p.cor)} className="paint-chip" style={{ background: p.hex }} aria-label={NOMES_CORES[p.cor]} />
        ))}
      </div>
      <div className="text-center text-sm opacity-70">Acertos: {totalCertos} / {etapa.pares.length}</div>
    </div>
  );
}

/* --------------------------- Bloco 2 · Música e Arte --------------------------- */

function EtapaMusicaArte({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "musica-e-arte" }>; say: (t: string) => Promise<void> }) {
  const [tocando, setTocando] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const oscsRef = useRef<OscillatorNode[]>([]);
  const gainRef = useRef<GainNode | null>(null);
  useEffect(() => { say(etapa.instrucao); }, []);
  useEffect(() => () => parar(), []);

  const notas = etapa.humor === "alegre" ? [261.63, 329.63, 392.00, 523.25]
              : etapa.humor === "misterioso" ? [220.00, 261.63, 311.13, 415.30]
              : [196.00, 246.94, 293.66, 392.00];

  const tocar = async () => {
    try {
      const AC = (window.AudioContext || (window as any).webkitAudioContext);
      const ctx = new AC();
      ctxRef.current = ctx;
      const gain = ctx.createGain();
      gain.gain.value = 0;
      gain.connect(ctx.destination);
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 1.2);
      const oscs = notas.map((f, i) => {
        const o = ctx.createOscillator();
        o.type = i === 0 ? "sine" : "triangle";
        o.frequency.value = f;
        const g = ctx.createGain();
        g.gain.value = 0.25;
        o.connect(g); g.connect(gain);
        o.start();
        return o;
      });
      oscsRef.current = oscs;
      gainRef.current = gain;
      setTocando(true);
    } catch { setTocando(false); }
  };
  const parar = () => {
    try {
      const ctx = ctxRef.current;
      const gain = gainRef.current;
      if (gain && ctx) gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
      setTimeout(() => {
        oscsRef.current.forEach((o) => { try { o.stop(); } catch {} });
        oscsRef.current = [];
        ctxRef.current?.close(); ctxRef.current = null;
      }, 500);
    } catch {}
    setTocando(false);
  };

  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🎶 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-3">{etapa.instrucao}</p>
      <div className="flex justify-center mb-4">
        {tocando ? (
          <button className="brush-btn" onClick={parar}><Pause size={18}/> Parar música</button>
        ) : (
          <button className="brush-btn" onClick={tocar}><Play size={18}/> Tocar música</button>
        )}
      </div>
      <CanvasPintura paleta={etapa.paleta} etapaId="musica-arte" />
    </div>
  );
}

/* --------------------------- Bloco 2 · Missão em Casa --------------------------- */

function EtapaMissaoCasa({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "missao-casa" }>; say: (t: string) => Promise<void> }) {
  useEffect(() => { say(etapa.instrucao); }, []);
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🏠 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-3">{etapa.instrucao}</p>
      <div className="rounded-2xl bg-white/60 p-3 mb-4">
        <div className="text-sm font-bold mb-2 opacity-80">Ideias:</div>
        <ul className="space-y-1 text-sm">
          {etapa.ideias.map((ideia, k) => <li key={k}>• {ideia}</li>)}
        </ul>
      </div>
      <div className="rounded-2xl overflow-hidden bg-[#0d1f55] p-1">
        <MissaoFamiliaFoto cursoSlug={etapa.cursoSlug} aulaSlug={etapa.aulaSlug} />
      </div>
    </div>
  );
}

/* --------------------------- Bloco 2 · Atividade Manual --------------------------- */

function IconePasso({ tipo }: { tipo: "corte" | "cola" | "desenho" | "montagem" | "pronto" }) {
  const map: Record<typeof tipo, string> = { corte: "✂️", cola: "🪣", desenho: "🖍", montagem: "🧩", pronto: "🎉" };
  return <span className="text-2xl">{map[tipo]}</span>;
}

function EtapaAtividadeManual({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "atividade-manual" }>; say: (t: string) => Promise<void> }) {
  const [feitos, setFeitos] = useState<Set<number>>(new Set());
  useEffect(() => { say(etapa.instrucao); }, []);
  const toggle = (n: number) => setFeitos((s) => { const nv = new Set(s); nv.has(n) ? nv.delete(n) : nv.add(n); return nv; });
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">✂️ {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-3">{etapa.instrucao}</p>
      <div className="rounded-2xl bg-white/60 p-3 mb-4">
        <div className="text-sm font-bold mb-2 opacity-80">Materiais:</div>
        <ul className="text-sm space-y-1">
          {etapa.materiais.map((m, k) => <li key={k}>{m}</li>)}
        </ul>
      </div>
      <div className="space-y-2">
        {etapa.passos.map((p) => {
          const feito = feitos.has(p.n);
          return (
            <button key={p.n} onClick={() => { toggle(p.n); say(p.texto); }}
              className={`w-full text-left flex items-center gap-3 p-3 rounded-2xl border-2 transition ${feito ? "bg-[var(--atelier-sage)]/25 border-[var(--atelier-sage)]" : "bg-white/60 border-transparent"}`}>
              <IconePasso tipo={p.icone} />
              <div className="flex-1">
                <div className="font-bold text-sm opacity-70">Passo {p.n}</div>
                <div>{p.texto}</div>
              </div>
              <div className={`w-6 h-6 rounded-full grid place-items-center border-2 ${feito ? "bg-[var(--atelier-sage)] border-transparent text-white" : "border-black/20"}`}>
                {feito && <Check size={14}/>}
              </div>
            </button>
          );
        })}
      </div>
      <div className="text-center text-sm mt-3 opacity-70">{feitos.size} / {etapa.passos.length} passos concluídos</div>
    </div>
  );
}

/* --------------------------- Bloco 2 · Desafio Final --------------------------- */

function EtapaDesafioFinal({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "desafio-final" }>; say: (t: string) => Promise<void> }) {
  useEffect(() => { say(etapa.instrucao); }, []);
  const [gravando, setGravando] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mrRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => () => {
    try { mrRef.current?.stop(); } catch {}
    streamRef.current?.getTracks().forEach((t) => t.stop());
    if (audioUrl) URL.revokeObjectURL(audioUrl);
  }, []);

  const iniciar = async () => {
    setErro(null);
    if (audioUrl) { URL.revokeObjectURL(audioUrl); setAudioUrl(null); }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mr = new MediaRecorder(stream);
      mrRef.current = mr;
      chunksRef.current = [];
      mr.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mr.mimeType || "audio/webm" });
        setAudioUrl(URL.createObjectURL(blob));
        streamRef.current?.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      };
      mr.start();
      setGravando(true);
    } catch (e: any) {
      setErro("Não deu pra abrir o microfone. Libera a permissão no navegador.");
    }
  };
  const parar = () => { try { mrRef.current?.stop(); } catch {} setGravando(false); };
  const apagar = () => { if (audioUrl) URL.revokeObjectURL(audioUrl); setAudioUrl(null); };

  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🏆 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-4">{etapa.instrucao}</p>

      <CanvasPintura paleta={etapa.paleta} alturaCanvas={280} etapaId="desafio-final" />

      <div className="mt-5 rounded-2xl bg-white/60 p-4">
        <div className="brush-title text-2xl mb-1">🎙 Gravar áudio</div>
        <div className="text-sm opacity-80 mb-3">Conta pra Brilha as cores que você escolheu e por quê.</div>
        <div className="flex flex-wrap gap-2 items-center">
          {!gravando ? (
            <button className="brush-btn" onClick={iniciar}><Mic size={16}/> Começar a gravar</button>
          ) : (
            <button className="brush-btn" style={{ background: "#D64545" }} onClick={parar}><Square size={16}/> Parar</button>
          )}
          {audioUrl && (
            <>
              <audio src={audioUrl} controls className="flex-1 min-w-[180px]" />
              <button className="brush-btn ghost !py-2 !px-3 !text-sm" onClick={apagar}><Trash2 size={14}/> Apagar</button>
            </>
          )}
        </div>
        {erro && <div className="mt-2 text-xs text-red-700 bg-red-100 rounded-lg p-2">{erro}</div>}
      </div>
    </div>
  );
}

/* --------------------------- Bloco 2 · Relatório --------------------------- */

function EtapaRelatorio({ etapa, say, aula, indiceAtual }: { etapa: Extract<EtapaBloco1, { tipo: "relatorio" }>; say: (t: string) => Promise<void>; aula: AulaArte; indiceAtual: number }) {
  const ctx = React.useContext(CtxConcluidas);
  useEffect(() => { say(etapa.texto); }, []);
  const concluidas = ctx?.concluidas ?? new Set<number>();

  const nomes: Record<EtapaBloco1["tipo"], string> = {
    "historia": "📖 História",
    "observar-cores": "🖼 Observar cores",
    "cor-emocao": "😊 Cor × Emoção",
    "artista": "🎨 Obra de arte",
    "texturas": "✋ Texturas",
    "curiosidade": "🌎 Curiosidade",
    "quiz": "🧠 Quiz",
    "pintura-digital": "🖌 Pintura digital",
    "cor-emocao-drag": "💖 Jogo Cor × Emoção",
    "musica-e-arte": "🎶 Música e arte",
    "missao-casa": "🏠 Missão em casa",
    "atividade-manual": "✂️ Atividade manual",
    "desafio-final": "🏆 Desafio final",
    "relatorio": "📊 Relatório",
  };

  const feitas = aula.etapas.filter((_, k) => k < indiceAtual || concluidas.has(k)).length;
  const total = aula.etapas.length - 1; // exclui o próprio relatório
  const estrelas = Math.max(1, Math.min(5, Math.round((feitas / total) * 5)));

  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">📊 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.texto)} />
      </div>
      <p className="opacity-80 mb-4">{etapa.texto}</p>

      <div className="text-center text-4xl mb-3">{"⭐".repeat(estrelas)}{"☆".repeat(5 - estrelas)}</div>
      <div className="text-center text-sm opacity-70 mb-4">{feitas} de {total} etapas concluídas</div>

      <div className="rounded-2xl bg-white/60 p-3">
        <ul className="space-y-1.5 text-sm">
          {aula.etapas.slice(0, -1).map((e, k) => {
            const ok = k < indiceAtual || concluidas.has(k);
            return (
              <li key={k} className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full grid place-items-center ${ok ? "bg-[var(--atelier-sage)] text-white" : "bg-black/10"}`}>
                  {ok && <Check size={12}/>}
                </div>
                <span className={ok ? "" : "opacity-60"}>{nomes[e.tipo]}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-4 text-center brush-title text-2xl">Parabéns, artista! 🎨</div>
    </div>
  );
}
