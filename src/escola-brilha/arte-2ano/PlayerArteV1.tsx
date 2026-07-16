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

/* --------------------------- Cenas (fotos reais) --------------------------- */

import cenaPorDoSol from "@/assets/atelier/cena-por-do-sol.jpg.asset.json";
import cenaJardim from "@/assets/atelier/cena-jardim.jpg.asset.json";
import cenaPraia from "@/assets/atelier/cena-praia.jpg.asset.json";
import cenaFloresta from "@/assets/atelier/cena-floresta.jpg.asset.json";

const CENA_FOTOS: Record<"por-do-sol" | "jardim" | "praia" | "floresta", { url: string; alt: string }> = {
  "por-do-sol": { url: cenaPorDoSol.url, alt: "Pôr do sol sobre o mar com céu laranja, rosa e roxo" },
  jardim:      { url: cenaJardim.url,   alt: "Jardim colorido com flores vermelhas, amarelas e rosas" },
  praia:       { url: cenaPraia.url,    alt: "Praia com mar azul turquesa e areia branca" },
  floresta:    { url: cenaFloresta.url, alt: "Floresta verde com árvores altas e folhas amarelas no chão" },
};

function CenaSVG({ tipo }: { tipo: "por-do-sol" | "jardim" | "praia" | "floresta" }) {
  const foto = CENA_FOTOS[tipo];
  return (
    <img
      src={foto.url}
      alt={foto.alt}
      loading="lazy"
      width={800}
      height={512}
      style={{ display: "block", width: "100%", height: 240, objectFit: "cover", borderRadius: 16 }}
    />
  );
}


/* --------------------------- Textura tile SVG --------------------------- */

import texMadeira from "@/assets/arte-2ano/texturas/madeira.jpg.asset.json";
import texPedra from "@/assets/arte-2ano/texturas/pedra.jpg.asset.json";
import texAreia from "@/assets/arte-2ano/texturas/areia.jpg.asset.json";
import texAgua from "@/assets/arte-2ano/texturas/agua.jpg.asset.json";
import texTecido from "@/assets/arte-2ano/texturas/tecido.jpg.asset.json";
import texFolhas from "@/assets/arte-2ano/texturas/folhas.jpg.asset.json";

const TEXTURA_URLS: Record<"madeira" | "pedra" | "areia" | "agua" | "tecido" | "folhas", string> = {
  madeira: texMadeira.url,
  pedra: texPedra.url,
  areia: texAreia.url,
  agua: texAgua.url,
  tecido: texTecido.url,
  folhas: texFolhas.url,
};

function TexturaTile({ t }: { t: "madeira" | "pedra" | "areia" | "agua" | "tecido" | "folhas" }) {
  return <img src={TEXTURA_URLS[t]} alt={t} loading="lazy" width={512} height={512} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12, display: "block" }} />;
}

/* --------------------------- Player --------------------------- */

type Concluidas = Set<number>;
const CtxConcluidas = React.createContext<{ concluidas: Concluidas; marcar: (n: number) => void } | null>(null);

export function PlayerArteV1({ aula, onSair }: { aula: AulaArte; onSair: () => void }) {
  const [concluidas, setConcluidas] = useState<Concluidas>(new Set());
  const total = aula.etapas.length;
  const { say, stop } = useSpeak();
  useEffect(() => () => stop(), [stop]);

  const marcar = (n: number) => setConcluidas((s) => { const nv = new Set(s); nv.add(n); return nv; });

  // Progresso baseado em quantas etapas já apareceram no viewport
  const [vistas, setVistas] = useState<Set<number>>(new Set([0]));
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      setVistas((s) => {
        const nv = new Set(s);
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            if (!Number.isNaN(idx)) nv.add(idx);
          }
        });
        return nv;
      });
    }, { threshold: 0.35 });
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [total]);

  const progresso = Math.min(100, (vistas.size / total) * 100);

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

          <div className="sticky top-2 z-20 mb-6">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progresso}%` }} />
            </div>
          </div>

          <div className="space-y-8">
            {aula.etapas.map((etapa, i) => (
              <div
                key={i}
                data-idx={i}
                ref={(el) => { refs.current[i] = el; }}
                className="fade-up scroll-mt-24"
              >
                <div className="text-xs font-bold opacity-60 mb-2">{i + 1} / {total}</div>
                <Etapa etapa={etapa} indice={i} say={say} aula={aula} />
              </div>
            ))}

            <div className="pt-4">
              <button className="brush-btn w-full !py-3 !text-lg" onClick={() => { for (let k = 0; k < total; k++) marcar(k); onSair(); }}>
                Concluir aula ✓
              </button>
            </div>
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

function LapisDeCor({ hex }: { hex: string }) {
  // Escurece o hex pra sombra da ponta de madeira
  const darker = (() => {
    const h = hex.replace("#", "");
    const r = Math.max(0, parseInt(h.substring(0, 2), 16) - 50);
    const g = Math.max(0, parseInt(h.substring(2, 4), 16) - 50);
    const b = Math.max(0, parseInt(h.substring(4, 6), 16) - 50);
    return `rgb(${r},${g},${b})`;
  })();
  return (
    <svg viewBox="0 0 40 120" width="44" height="132" className="drop-shadow-md group-hover:-translate-y-1 transition-transform">
      {/* Ponta de grafite */}
      <polygon points="20,4 14,20 26,20" fill="#2a2a2a" />
      {/* Madeira exposta */}
      <polygon points="14,20 26,20 30,34 10,34" fill="#f4d9a8" />
      <polygon points="14,20 20,20 10,34" fill="#e0bd83" opacity="0.7" />
      {/* Corpo do lápis (cor da emoção) */}
      <rect x="10" y="34" width="20" height="70" fill={hex} />
      {/* Sombra lateral no corpo */}
      <rect x="10" y="34" width="6" height="70" fill={darker} opacity="0.35" />
      {/* Brilho lateral */}
      <rect x="24" y="34" width="3" height="70" fill="#fff" opacity="0.35" />
      {/* Faixa metálica */}
      <rect x="9" y="104" width="22" height="6" fill="#c9c9c9" />
      <rect x="9" y="107" width="22" height="1.5" fill="#8a8a8a" />
      {/* Borracha */}
      <rect x="11" y="110" width="18" height="8" rx="2" fill="#f3a6b7" />
      <rect x="11" y="110" width="18" height="2.5" rx="1.5" fill="#fff" opacity="0.5" />
    </svg>
  );
}

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
          <button
            key={l.cor}
            onClick={() => say(l.frase)}
            className="flex flex-col items-center gap-1 group transition active:scale-95"
            aria-label={`Lápis ${l.cor}`}
          >
            <LapisDeCor hex={l.hex} />
            <div className="text-xs font-bold opacity-80 group-hover:opacity-100 mt-1">{NOMES_CORES[l.cor]}</div>
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
      <div className="flex justify-center items-center mb-5" style={{ minHeight: 150 }}>
        <div className="rounded-full grid place-items-center transition-all overflow-hidden"
          style={{ width: 150, height: 150, background: cartao ? cartao.hex : "#F4EAD5", boxShadow: "0 10px 24px -12px rgba(45,36,24,.35)" }}>
          {cartao?.rostoUrl ? (
            <img src={cartao.rostoUrl} alt={cartao.emocao} width={140} height={140} className="w-[88%] h-[88%] object-contain drop-shadow" />
          ) : (
            <span style={{ fontSize: 72 }}>{cartao ? cartao.emoji : "😐"}</span>
          )}
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

function CanvasPintura({ paleta, alturaCanvas = 320, etapaId, overlay }: { paleta: CorNome[]; alturaCanvas?: number; etapaId: string; overlay?: React.ReactNode }) {
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
    ctx.clearRect(0, 0, w, h);
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
    ctx.clearRect(0, 0, c.width, c.height);
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
      <div style={{ position: "relative", width: "100%", height: alturaCanvas, borderRadius: 16, overflow: "hidden", background: "#FFFDF7", boxShadow: "inset 0 0 0 2px rgba(0,0,0,.06)" }}>
        <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", touchAction: "none" }}
          onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} />
        {overlay && (
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {overlay}
          </div>
        )}
      </div>
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

// Melodias infantis por humor. Cada nota: [frequência Hz, duração em beats]
const MELODIAS: Record<"alegre" | "calmo" | "misterioso", { bpm: number; notas: Array<[number, number]>; baixo: Array<[number, number]> }> = {
  // "Twinkle Twinkle Little Star" — clássico infantil, alegre e reconhecível
  alegre: {
    bpm: 120,
    notas: [
      [523.25, 1], [523.25, 1], [783.99, 1], [783.99, 1], [880.00, 1], [880.00, 1], [783.99, 2],
      [698.46, 1], [698.46, 1], [659.25, 1], [659.25, 1], [587.33, 1], [587.33, 1], [523.25, 2],
      [783.99, 1], [783.99, 1], [698.46, 1], [698.46, 1], [659.25, 1], [659.25, 1], [587.33, 2],
      [783.99, 1], [783.99, 1], [698.46, 1], [698.46, 1], [659.25, 1], [659.25, 1], [587.33, 2],
    ],
    baixo: [
      [130.81, 4], [174.61, 4], [130.81, 4], [196.00, 2], [130.81, 2],
      [130.81, 4], [174.61, 4], [130.81, 2], [196.00, 2], [130.81, 4],
    ],
  },
  // "Brilha, brilha estrelinha" em ritmo lento — ninar / calmo
  calmo: {
    bpm: 72,
    notas: [
      [392.00, 2], [392.00, 2], [587.33, 2], [587.33, 2], [659.25, 2], [659.25, 2], [587.33, 4],
      [523.25, 2], [523.25, 2], [493.88, 2], [493.88, 2], [440.00, 2], [440.00, 2], [392.00, 4],
      [587.33, 2], [587.33, 2], [523.25, 2], [523.25, 2], [493.88, 2], [493.88, 2], [440.00, 4],
      [587.33, 2], [587.33, 2], [523.25, 2], [523.25, 2], [493.88, 2], [493.88, 2], [440.00, 4],
    ],
    baixo: [
      [98.00, 8], [130.81, 8], [98.00, 8], [146.83, 4], [98.00, 4],
      [98.00, 8], [130.81, 4], [146.83, 4], [98.00, 8],
    ],
  },
  // Melodia menor, ondulante — misteriosa mas amigável
  misterioso: {
    bpm: 96,
    notas: [
      [440.00, 2], [523.25, 1], [587.33, 1], [659.25, 2], [587.33, 2],
      [523.25, 2], [440.00, 1], [392.00, 1], [440.00, 4],
      [440.00, 2], [523.25, 1], [659.25, 1], [783.99, 2], [659.25, 2],
      [587.33, 2], [523.25, 1], [493.88, 1], [440.00, 4],
    ],
    baixo: [
      [110.00, 4], [146.83, 4], [130.81, 4], [110.00, 4],
      [110.00, 4], [146.83, 4], [164.81, 4], [110.00, 4],
    ],
  },
};

function MusicaColoringOverlay({ tocando }: { tocando: boolean }) {
  return (
    <svg viewBox="0 0 400 360" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
      <defs>
        <style>{`
          .ln { fill: none; stroke: #2D2418; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
          .lnT { fill: none; stroke: #2D2418; stroke-width: 1.6; stroke-linecap: round; }
          .fl { fill: #2D2418; }
          @keyframes floatY { 0%,100%{ transform: translateY(0);} 50%{ transform: translateY(-6px);} }
          @keyframes wave  { 0%{ stroke-dashoffset: 0;} 100%{ stroke-dashoffset: -40;} }
          .note-a { animation: floatY 2.6s ease-in-out infinite; transform-origin: center; }
          .note-b { animation: floatY 2.6s ease-in-out infinite; animation-delay: .8s; transform-origin: center; }
          .note-c { animation: floatY 2.6s ease-in-out infinite; animation-delay: 1.4s; transform-origin: center; }
          .wv    { stroke-dasharray: 8 6; animation: wave 1.8s linear infinite; }
        `}</style>
      </defs>

      {/* Pentagrama ondulado */}
      <g className="lnT" opacity="0.85">
        {[0,1,2,3,4].map(i => (
          <path key={i} d={`M20 ${170 + i*14} Q120 ${160 + i*14} 220 ${170 + i*14} T400 ${170 + i*14}`} />
        ))}
      </g>

      {/* Onda sonora animada quando tocando */}
      {tocando && (
        <path className="ln wv" d="M10 300 Q50 270 90 300 T170 300 T250 300 T330 300 T410 300" opacity="0.5" />
      )}

      {/* Clave de Sol grande — contorno para pintar */}
      <g transform="translate(48 60)" className="ln">
        <path d="M40 10 C 30 40, 5 55, 5 95 C 5 130, 40 145, 55 120 C 65 100, 55 75, 40 60 C 25 45, 30 25, 45 20 C 60 15, 70 30, 65 45 C 60 60, 50 70, 40 80 L 40 210 C 40 235, 20 250, 5 240" />
        <circle cx="18" cy="230" r="10" />
      </g>

      {/* Notas musicais grandes (bolas + hastes) para pintar */}
      <g className="note-a">
        <ellipse className="fl" cx="180" cy="150" rx="16" ry="12" transform="rotate(-18 180 150)" />
        <path className="ln" d="M195 148 L200 80" />
        <path className="ln" d="M200 80 Q225 88 228 108" />
      </g>
      <g className="note-b">
        <ellipse className="fl" cx="255" cy="185" rx="16" ry="12" transform="rotate(-18 255 185)" />
        <path className="ln" d="M270 183 L275 115" />
      </g>
      <g className="note-c">
        <ellipse className="fl" cx="325" cy="160" rx="16" ry="12" transform="rotate(-18 325 160)" />
        <ellipse className="fl" cx="360" cy="150" rx="16" ry="12" transform="rotate(-18 360 150)" />
        <path className="ln" d="M340 158 L340 90 L375 82 L375 148" />
      </g>

      {/* Estrelas / brilhos decorativos vazios (pra colorir) */}
      <g className="ln">
        <path d="M155 55 l6 12 13 2 -9 9 2 13 -12 -6 -12 6 2 -13 -9 -9 13 -2 z" />
        <path d="M300 260 l5 10 11 2 -8 8 2 11 -10 -5 -10 5 2 -11 -8 -8 11 -2 z" />
        <path d="M370 300 l4 8 9 1 -6 6 1 9 -8 -4 -8 4 1 -9 -6 -6 9 -1 z" />
      </g>

      {/* Coração musical vazio */}
      <path className="ln" d="M90 275 c -14 -14 -30 -2 -30 12 c 0 18 30 34 30 34 c 0 0 30 -16 30 -34 c 0 -14 -16 -26 -30 -12 z" />
    </svg>
  );
}

function EtapaMusicaArte({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "musica-e-arte" }>; say: (t: string) => Promise<void> }) {
  const [tocando, setTocando] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const timeoutRef = useRef<number | null>(null);
  useEffect(() => { say(etapa.instrucao); }, []);
  useEffect(() => () => parar(), []);

  const tocarNota = (ctx: AudioContext, master: GainNode, freq: number, start: number, dur: number, tipo: OscillatorType, vol: number) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = tipo;
    o.frequency.value = freq;
    // envelope ADSR curto — evita clicks e dá sensação de nota tocada
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(vol, start + 0.02);
    g.gain.linearRampToValueAtTime(vol * 0.7, start + dur * 0.5);
    g.gain.linearRampToValueAtTime(0, start + dur - 0.02);
    o.connect(g); g.connect(master);
    o.start(start);
    o.stop(start + dur);
  };

  const agendarLoop = (ctx: AudioContext, master: GainNode) => {
    const melodia = MELODIAS[etapa.humor];
    const beat = 60 / melodia.bpm;
    let t = ctx.currentTime + 0.1;
    const inicioLoop = t;
    // melodia
    for (const [f, dur] of melodia.notas) {
      tocarNota(ctx, master, f, t, dur * beat * 0.95, "triangle", 0.22);
      t += dur * beat;
    }
    // baixo em paralelo
    let tb = inicioLoop;
    for (const [f, dur] of melodia.baixo) {
      tocarNota(ctx, master, f, tb, dur * beat * 0.95, "sine", 0.18);
      tb += dur * beat;
    }
    const durLoop = (t - inicioLoop) * 1000;
    timeoutRef.current = window.setTimeout(() => {
      if (ctxRef.current === ctx) agendarLoop(ctx, master);
    }, durLoop - 50);
  };

  const tocar = async () => {
    try {
      const AC = (window.AudioContext || (window as any).webkitAudioContext);
      const ctx = new AC();
      ctxRef.current = ctx;
      const master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);
      master.gain.linearRampToValueAtTime(0.55, ctx.currentTime + 0.4);
      masterRef.current = master;
      agendarLoop(ctx, master);
      setTocando(true);
    } catch { setTocando(false); }
  };

  const parar = () => {
    try {
      if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
      const ctx = ctxRef.current;
      const master = masterRef.current;
      if (master && ctx) master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
      setTimeout(() => {
        try { ctxRef.current?.close(); } catch {}
        ctxRef.current = null;
        masterRef.current = null;
      }, 400);
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
      <div className="text-xs text-center opacity-70 mb-2">Pinta dentro do desenho seguindo o ritmo da música 🎵</div>
      <CanvasPintura paleta={etapa.paleta} etapaId="musica-arte" alturaCanvas={360} overlay={<MusicaColoringOverlay tocando={tocando} />} />
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

/* --------------------------- Bloco 2 · Atividade Manual (para fazer em casa) --------------------------- */

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
        <h2 className="brush-title text-3xl">🏠 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide bg-[var(--atelier-blush)] text-[#7a3b3b] px-3 py-1 rounded-full mb-3">
        ✂️ Para fazer em casa
      </div>
      <p className="opacity-80 mb-3">{etapa.instrucao}</p>
      <div className="rounded-2xl bg-white/60 p-3 mb-4">
        <div className="text-sm font-bold mb-2 opacity-80">Materiais:</div>
        <ul className="text-sm space-y-1 list-disc pl-5">
          {etapa.materiais.map((m, k) => <li key={k}>{m}</li>)}
        </ul>
      </div>
      <div className="text-sm font-bold mb-2 opacity-80">Passo a passo:</div>
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
      <div className="text-center text-sm mt-3 opacity-70">{feitos.size} / {etapa.passos.length} passos marcados</div>
      <p className="text-xs opacity-60 text-center mt-2">Faça em casa com a família e marque cada passo aqui quando terminar.</p>

      <div className="mt-5 pt-5 border-t border-black/10">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">📸</span>
          <div className="font-black text-base">Tire uma foto do seu rosto pronto</div>
        </div>
        <p className="text-xs opacity-70 mb-3">
          Quando terminar em casa, tire uma foto do rosto que você criou. Ela vai ficar guardada
          no seu Diário do Artista, junto com as outras aulas do curso. 💛
        </p>
        <MissaoFamiliaFoto cursoSlug="arte-2ano" aulaSlug="u1-a01-rosto-emocoes-manual" />
      </div>
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
