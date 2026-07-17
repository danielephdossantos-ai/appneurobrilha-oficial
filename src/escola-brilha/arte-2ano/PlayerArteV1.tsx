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
    case "historia":            return <EtapaHistoria etapa={etapa} say={say} />;
    case "observar-cores":      return <EtapaObservarCores etapa={etapa} say={say} />;
    case "cor-emocao":          return <EtapaCorEmocao etapa={etapa} say={say} />;
    case "artista":             return <EtapaArtista etapa={etapa} say={say} />;
    case "texturas":            return <EtapaTexturas etapa={etapa} say={say} />;
    case "curiosidade":         return <EtapaCuriosidade etapa={etapa} say={say} />;
    case "quiz":                return <EtapaQuiz etapa={etapa} say={say} />;
    case "pintura-digital":     return <EtapaPinturaDigital etapa={etapa} say={say} />;
    case "cor-emocao-drag":     return <EtapaCorEmocaoDrag etapa={etapa} say={say} />;
    case "musica-e-arte":       return <EtapaMusicaArte etapa={etapa} say={say} />;
    case "missao-casa":         return <EtapaMissaoCasa etapa={etapa} say={say} />;
    case "atividade-manual":    return <EtapaAtividadeManual etapa={etapa} say={say} />;
    case "desafio-final":       return <EtapaDesafioFinal etapa={etapa} say={say} />;
    case "lupa-magica":         return <EtapaLupaMagica etapa={etapa} say={say} />;
    case "formas-basicas":      return <EtapaFormasBasicas etapa={etapa} say={say} />;
    case "desenho-observacao":  return <EtapaDesenhoObservacao etapa={etapa} say={say} />;
    case "sete-erros":          return <EtapaSeteErros etapa={etapa} say={say} />;
    case "floresta-sonora":     return <EtapaFlorestaSonora etapa={etapa} say={say} />;
    case "sequenciador":        return <EtapaSequenciador etapa={etapa} say={say} />;
    case "memoria-sonora":      return <EtapaMemoriaSonora etapa={etapa} say={say} />;
    case "ritmo-repetir":       return <EtapaRitmoRepetir etapa={etapa} say={say} />;
    case "relatorio":           return <EtapaRelatorio etapa={etapa} say={say} aula={aula} indiceAtual={indice} />;
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

function LupaColorida({ hex }: { hex: string }) {
  return (
    <svg viewBox="0 0 80 120" width="60" height="90" className="drop-shadow-md group-hover:-translate-y-1 transition-transform">
      {/* Cabo da lupa */}
      <rect x="52" y="70" width="10" height="42" rx="4" fill="#8B5A3C" transform="rotate(35 57 91)" />
      <rect x="52" y="70" width="3" height="42" rx="1.5" fill="#5c3a24" opacity="0.55" transform="rotate(35 57 91)" />
      {/* Aro metálico */}
      <circle cx="34" cy="42" r="30" fill="none" stroke="#2d2d2d" strokeWidth="6" />
      {/* Aro colorido (cor da emoção) */}
      <circle cx="34" cy="42" r="30" fill="none" stroke={hex} strokeWidth="3" />
      {/* Lente com leve tint da cor */}
      <circle cx="34" cy="42" r="26" fill={hex} opacity="0.18" />
      <circle cx="34" cy="42" r="26" fill="#ffffff" opacity="0.35" />
      {/* Brilho da lente */}
      <ellipse cx="24" cy="32" rx="8" ry="5" fill="#ffffff" opacity="0.85" />
      <ellipse cx="44" cy="52" rx="4" ry="2.5" fill="#ffffff" opacity="0.55" />
    </svg>
  );
}

function LupaGrandeIlustracao() {
  return (
    <div className="flex justify-center mb-4">
      <svg viewBox="0 0 240 180" width="200" height="150" className="drop-shadow-lg">
        <rect x="155" y="110" width="22" height="70" rx="8" fill="#8B5A3C" transform="rotate(35 166 145)" />
        <rect x="155" y="110" width="6" height="70" rx="3" fill="#5c3a24" opacity="0.55" transform="rotate(35 166 145)" />
        <circle cx="100" cy="80" r="62" fill="none" stroke="#2d2d2d" strokeWidth="10" />
        <circle cx="100" cy="80" r="62" fill="#eaf6ff" opacity="0.85" />
        <ellipse cx="78" cy="58" rx="22" ry="12" fill="#ffffff" opacity="0.9" />
        <ellipse cx="118" cy="102" rx="10" ry="5" fill="#ffffff" opacity="0.55" />
      </svg>
    </div>
  );
}

function NotaMusicalColorida({ hex }: { hex: string }) {
  return (
    <svg viewBox="0 0 90 130" width="56" height="82" className="drop-shadow-md">
      {/* Haste */}
      <rect x="55" y="18" width="7" height="82" rx="2" fill="#2d2d2d" />
      {/* Bandeirola */}
      <path d="M62 18 C 82 30, 84 52, 68 62 C 78 48, 74 34, 62 30 Z" fill={hex} stroke="#2d2d2d" strokeWidth="2" />
      {/* Cabeça da nota */}
      <ellipse cx="42" cy="100" rx="22" ry="16" fill={hex} stroke="#2d2d2d" strokeWidth="2.5" transform="rotate(-18 42 100)" />
      <ellipse cx="36" cy="94" rx="6" ry="3" fill="#ffffff" opacity="0.55" transform="rotate(-18 36 94)" />
    </svg>
  );
}

function NotaGrandeIlustracao() {
  return (
    <div className="flex justify-center mb-4">
      <svg viewBox="0 0 240 180" width="200" height="150" className="drop-shadow-lg">
        {/* Pauta suave */}
        {[40, 62, 84, 106, 128].map((y) => (
          <line key={y} x1="20" y1={y} x2="220" y2={y} stroke="#2d2d2d" strokeWidth="1.5" opacity="0.35" />
        ))}
        {/* Clave estilizada */}
        <path d="M55 40 C 40 70, 80 90, 70 120 C 62 145, 40 138, 45 118 C 50 100, 78 100, 82 120" fill="none" stroke="#2d2d2d" strokeWidth="5" strokeLinecap="round" />
        {/* Nota grande */}
        <rect x="150" y="30" width="7" height="90" rx="2" fill="#2d2d2d" />
        <path d="M157 30 C 185 44, 188 72, 168 84 C 182 68, 176 50, 157 46 Z" fill="#F0C24A" stroke="#2d2d2d" strokeWidth="2" />
        <ellipse cx="135" cy="122" rx="22" ry="15" fill="#D64545" stroke="#2d2d2d" strokeWidth="2.5" transform="rotate(-18 135 122)" />
        <ellipse cx="129" cy="116" rx="6" ry="3" fill="#ffffff" opacity="0.6" transform="rotate(-18 129 116)" />
      </svg>
    </div>
  );
}

function EtapaHistoria({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "historia" }>; say: (t: string) => Promise<void> }) {
  useEffect(() => { say(etapa.texto); }, []);
  const usarLupa = etapa.icone === "lupa";
  const usarNota = etapa.icone === "nota";
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h2 className="brush-title text-3xl">{etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.texto)} />
      </div>
      {usarLupa && <LupaGrandeIlustracao />}
      {usarNota && <NotaGrandeIlustracao />}
      <p className="text-lg leading-relaxed mb-5">{etapa.texto}</p>
      <div className="grid grid-cols-5 gap-3 mb-5">
        {etapa.lapis.map((l) => (
          <button
            key={l.cor}
            onClick={() => say(l.frase)}
            className="flex flex-col items-center gap-1 group transition active:scale-95"
            aria-label={`${usarLupa ? "Lupa" : usarNota ? "Nota" : "Lápis"} ${l.cor}`}
          >
            {usarLupa ? <LupaColorida hex={l.hex} /> : usarNota ? <NotaMusicalColorida hex={l.hex} /> : <LapisDeCor hex={l.hex} />}
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
    "lupa-magica": "🔎 Lupa mágica",
    "formas-basicas": "🔺 Formas básicas",
    "desenho-observacao": "🌳 Desenho por observação",
    "sete-erros": "🕵️ Jogo das diferenças",
    "floresta-sonora": "🌳 Floresta sonora",
    "sequenciador": "🎼 Sequenciador",
    "memoria-sonora": "🧠 Memória sonora",
    "ritmo-repetir": "🥁 Repete o ritmo",
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

/* =====================================================================
 * Unidades 2 & 3 — Componentes novos
 * ===================================================================== */

/* ---------- Áudio compartilhado (timbres da floresta) ---------- */
type Timbre = "vento" | "passaro" | "agua" | "pedra" | "folha" | "sino";

let _ac: AudioContext | null = null;
function getAC(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!_ac) {
    try { const AC = window.AudioContext || (window as any).webkitAudioContext; _ac = new AC(); } catch { _ac = null; }
  }
  return _ac;
}

function playTimbre(t: Timbre) {
  const ctx = getAC(); if (!ctx) return;
  const now = ctx.currentTime;
  const out = ctx.createGain(); out.gain.value = 0.35; out.connect(ctx.destination);

  const beep = (freq: number, dur: number, tipo: OscillatorType = "sine", vol = 0.5, glide?: number) => {
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = tipo; o.frequency.value = freq;
    if (glide !== undefined) o.frequency.exponentialRampToValueAtTime(Math.max(20, glide), now + dur);
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(vol, now + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    o.connect(g); g.connect(out);
    o.start(now); o.stop(now + dur + 0.05);
  };

  const noise = (dur: number, cutoff: number, vol = 0.5) => {
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const src = ctx.createBufferSource(); src.buffer = buf;
    const bp = ctx.createBiquadFilter(); bp.type = "lowpass"; bp.frequency.value = cutoff;
    const g = ctx.createGain(); g.gain.value = vol;
    src.connect(bp); bp.connect(g); g.connect(out);
    src.start(now); src.stop(now + dur);
  };

  switch (t) {
    case "sino":    beep(880, 1.4, "sine", 0.6, 800); beep(1760, 1.0, "sine", 0.15, 1600); break;
    case "passaro": beep(1200, 0.12, "sine", 0.5, 2200); setTimeout(() => beep(1600, 0.1, "sine", 0.4, 2400), 130); setTimeout(() => beep(1400, 0.08, "sine", 0.3, 2000), 260); break;
    case "agua":    noise(0.45, 1200, 0.25); beep(600, 0.3, "sine", 0.25, 300); setTimeout(() => beep(500, 0.25, "sine", 0.2, 250), 120); break;
    case "pedra":   beep(90, 0.35, "sine", 0.7, 40); noise(0.18, 400, 0.35); break;
    case "folha":   noise(0.35, 3000, 0.4); break;
    case "vento":   noise(1.2, 800, 0.45); break;
  }
}

const NOMES_TIMBRE: Record<Timbre, string> = {
  vento: "Vento", passaro: "Pássaro", agua: "Água", pedra: "Pedra", folha: "Folha", sino: "Sino",
};

/* ==================== UNIDADE 2 ==================== */

/* -------- Lupa Mágica -------- */
function EtapaLupaMagica({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "lupa-magica" }>; say: (t: string) => Promise<void> }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [descoberto, setDescoberto] = useState<Set<number>>(new Set());
  const [ativo, setAtivo] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  useEffect(() => { say(etapa.instrucao); }, []);

  const onMove = (e: React.PointerEvent) => {
    const r = wrapRef.current?.getBoundingClientRect(); if (!r) return;
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  const abrir = (idx: number) => {
    const d = etapa.descobertas[idx];
    setAtivo(idx);
    setDescoberto((s) => { const nv = new Set(s); nv.add(idx); return nv; });
    say(`${d.nome}. ${d.texto}`);
  };

  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🔎 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-4">{etapa.instrucao}</p>
      <div
        ref={wrapRef}
        onPointerMove={onMove}
        onPointerLeave={() => setPos(null)}
        style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", borderRadius: 16, overflow: "hidden", background: "#000", touchAction: "none", cursor: "crosshair" }}
      >
        <img src={etapa.fotoUrl} alt={etapa.alt} loading="lazy" width={800} height={800}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        {/* lupa que segue o cursor */}
        {pos && (
          <div style={{
            position: "absolute", left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%,-50%)",
            width: 120, height: 120, borderRadius: "50%", pointerEvents: "none",
            boxShadow: "0 0 0 4px rgba(255,255,255,.9), 0 0 0 12px rgba(0,0,0,.25), inset 0 0 40px rgba(255,255,255,.35)",
            background: `radial-gradient(circle at center, transparent 55%, rgba(0,0,0,.35) 100%)`,
          }}/>
        )}
        {/* hotspots */}
        {etapa.descobertas.map((d, i) => {
          const feito = descoberto.has(i);
          return (
            <button key={i} onClick={() => abrir(i)}
              style={{ position: "absolute", left: `${d.x}%`, top: `${d.y}%`, transform: "translate(-50%,-50%)",
                width: 34, height: 34, borderRadius: "50%", border: "3px solid #fff",
                background: feito ? "rgba(127,174,115,.85)" : "rgba(240,194,74,.85)",
                boxShadow: "0 0 0 3px rgba(0,0,0,.35), 0 0 18px rgba(255,255,255,.7)",
                animation: feito ? "none" : "pulse 1.6s ease-out infinite" }}
              aria-label={d.nome}>
              {feito ? "✓" : "?"}
            </button>
          );
        })}
      </div>
      <style>{`@keyframes pulse { 0%{box-shadow:0 0 0 3px rgba(0,0,0,.35),0 0 0 0 rgba(240,194,74,.6);} 70%{box-shadow:0 0 0 3px rgba(0,0,0,.35),0 0 0 18px rgba(240,194,74,0);} 100%{box-shadow:0 0 0 3px rgba(0,0,0,.35),0 0 0 0 rgba(240,194,74,0);} }`}</style>
      {ativo !== null && (
        <div className="fade-up mt-3 p-3 rounded-xl bg-[var(--atelier-cream-2)]">
          <div className="brush-title text-xl mb-1">{etapa.descobertas[ativo].nome}</div>
          <div className="text-sm">{etapa.descobertas[ativo].texto}</div>
        </div>
      )}
      <div className="text-center text-sm opacity-70 mt-3">Descobertas: {descoberto.size} / {etapa.descobertas.length}</div>
    </div>
  );
}

/* -------- Formas Básicas -------- */
function IconeForma({ f, size = 44 }: { f: "circulo" | "quadrado" | "triangulo" | "retangulo"; size?: number }) {
  const s = size;
  if (f === "circulo")   return <svg width={s} height={s} viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="#F0C24A" stroke="#2D2418" strokeWidth="3"/></svg>;
  if (f === "quadrado")  return <svg width={s} height={s} viewBox="0 0 44 44"><rect x="6" y="6" width="32" height="32" fill="#7FAE73" stroke="#2D2418" strokeWidth="3"/></svg>;
  if (f === "triangulo") return <svg width={s} height={s} viewBox="0 0 44 44"><polygon points="22,6 40,38 4,38" fill="#D64545" stroke="#2D2418" strokeWidth="3"/></svg>;
  return <svg width={s} height={s} viewBox="0 0 44 44"><rect x="4" y="12" width="36" height="20" fill="#5A8FBF" stroke="#2D2418" strokeWidth="3"/></svg>;
}
const NOMES_FORMA: Record<"circulo" | "quadrado" | "triangulo" | "retangulo", string> = {
  circulo: "Círculo", quadrado: "Quadrado", triangulo: "Triângulo", retangulo: "Retângulo",
};

function EtapaFormasBasicas({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "formas-basicas" }>; say: (t: string) => Promise<void> }) {
  const [objSel, setObjSel] = useState<number | null>(null);
  const [ligadas, setLigadas] = useState<Record<number, string>>({});
  useEffect(() => { say(etapa.instrucao); }, []);
  const formas: Array<"circulo" | "quadrado" | "triangulo" | "retangulo"> = ["circulo","quadrado","triangulo","retangulo"];
  const escolher = (f: "circulo" | "quadrado" | "triangulo" | "retangulo") => {
    if (objSel === null) { say("Primeiro toca em um objeto."); return; }
    const it = etapa.itens[objSel];
    const ok = it.forma === f;
    setLigadas((p) => ({ ...p, [objSel]: f }));
    say(ok ? `Isso mesmo! ${it.objeto} é um ${NOMES_FORMA[f].toLowerCase()}. ${it.explicacao}` : `${it.objeto} não é ${NOMES_FORMA[f].toLowerCase()}. Tenta outra forma.`);
    setObjSel(null);
  };
  const certos = etapa.itens.filter((it, k) => ligadas[k] === it.forma).length;
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🔺 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-4">{etapa.instrucao}</p>

      <div className="text-sm font-bold mb-2 opacity-70">1. Toca em um objeto</div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {etapa.itens.map((it, k) => {
          const feito = ligadas[k];
          const acertou = feito === it.forma;
          const sel = objSel === k;
          return (
            <button key={k} onClick={() => { setObjSel(k); say(it.objeto); }}
              className={`p-3 rounded-2xl border-2 transition text-center ${sel ? "border-[var(--atelier-terracotta)] bg-[var(--atelier-cream-2)]" : "border-transparent bg-white/60"}`}>
              <div className="text-3xl">{it.emoji}</div>
              <div className="text-xs font-bold mt-1">{it.objeto}</div>
              {feito && (
                <div className="mt-1 flex justify-center items-center gap-1 text-xs">
                  <IconeForma f={feito as any} size={20} />
                  {acertou ? <Check size={14} className="text-green-600"/> : <X size={14} className="text-red-600"/>}
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="text-sm font-bold mb-2 opacity-70">2. Toca na forma que combina</div>
      <div className="flex justify-center gap-3 mb-3">
        {formas.map((f) => (
          <button key={f} onClick={() => escolher(f)} className="flex flex-col items-center gap-1 group active:scale-95 transition">
            <IconeForma f={f} />
            <div className="text-xs font-bold">{NOMES_FORMA[f]}</div>
          </button>
        ))}
      </div>
      <div className="text-center text-sm opacity-70">Acertos: {certos} / {etapa.itens.length}</div>
    </div>
  );
}

/* -------- Desenho por Observação -------- */
function EtapaDesenhoObservacao({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "desenho-observacao" }>; say: (t: string) => Promise<void> }) {
  const [feitos, setFeitos] = useState<Set<number>>(new Set());
  useEffect(() => { say(etapa.instrucao); }, []);
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🌳 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-4">{etapa.instrucao}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <div className="text-xs font-bold opacity-70 mb-1">Modelo para observar</div>
          <img src={etapa.referenciaUrl} alt={etapa.referenciaAlt} loading="lazy" width={512} height={512}
            style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 12, display: "block" }} />
        </div>
        <div>
          <div className="text-xs font-bold opacity-70 mb-1">Sua tela</div>
          <CanvasPintura paleta={etapa.paleta} etapaId="desenho-observacao" alturaCanvas={260} />
        </div>
      </div>
      <div className="rounded-2xl bg-white/60 p-3">
        <div className="text-sm font-bold mb-2 opacity-80">Passos:</div>
        <div className="space-y-1.5">
          {etapa.passos.map((p, k) => {
            const feito = feitos.has(k);
            return (
              <button key={k} onClick={() => { setFeitos((s) => { const nv = new Set(s); nv.has(k) ? nv.delete(k) : nv.add(k); return nv; }); say(p); }}
                className={`w-full text-left flex items-center gap-2 p-2 rounded-xl border-2 transition ${feito ? "bg-[var(--atelier-sage)]/20 border-[var(--atelier-sage)]" : "bg-white border-transparent"}`}>
                <div className={`w-6 h-6 rounded-full grid place-items-center flex-shrink-0 ${feito ? "bg-[var(--atelier-sage)] text-white" : "bg-black/10"}`}>
                  {feito ? <Check size={14}/> : k + 1}
                </div>
                <div className="text-sm text-slate-800">{p}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* -------- Sete Erros -------- */
function CenaParque({ modificada }: { modificada: boolean }) {
  return (
    <svg viewBox="0 0 200 200" style={{ width: "100%", height: "auto", display: "block", borderRadius: 12, background: "#BEE3F2" }}>
      {/* chão */}
      <rect x="0" y="140" width="200" height="60" fill="#7FAE73"/>
      {/* sol OU vazio */}
      {!modificada && <circle cx="42" cy="42" r="18" fill="#F0C24A"/>}
      {/* nuvem OU pipa */}
      {!modificada ? (
        <g fill="#fff">
          <ellipse cx="150" cy="46" rx="18" ry="10"/><ellipse cx="140" cy="42" rx="10" ry="8"/><ellipse cx="160" cy="42" rx="10" ry="8"/>
        </g>
      ) : (
        <g>
          <polygon points="150,30 165,50 150,70 135,50" fill="#D64545" stroke="#2D2418" strokeWidth="1.5"/>
          <line x1="150" y1="70" x2="150" y2="95" stroke="#2D2418" strokeWidth="1"/>
        </g>
      )}
      {/* árvore */}
      <rect x="92" y="100" width="14" height="40" fill="#8B5A3C"/>
      <circle cx="99" cy="98" r="26" fill="#5F9A57"/>
      {/* flor: rosa vs amarela */}
      <g transform="translate(80,130)">
        <circle cx="0" cy="0" r="4" fill={modificada ? "#F0C24A" : "#E89AB0"}/>
        <circle cx="-6" cy="0" r="4" fill={modificada ? "#F0C24A" : "#E89AB0"}/>
        <circle cx="6" cy="0" r="4" fill={modificada ? "#F0C24A" : "#E89AB0"}/>
        <circle cx="0" cy="-6" r="4" fill={modificada ? "#F0C24A" : "#E89AB0"}/>
        <circle cx="0" cy="6" r="4" fill={modificada ? "#F0C24A" : "#E89AB0"}/>
        <circle cx="0" cy="0" r="2.5" fill="#F0C24A"/>
      </g>
      {/* passarinho aparece só na original */}
      {!modificada && (
        <g transform="translate(128,138)" fill="#D64545"><ellipse cx="0" cy="0" rx="7" ry="4"/><circle cx="6" cy="-2" r="3"/><polygon points="9,-2 12,-2 10,0"/></g>
      )}
      {/* borboleta aparece só na modificada */}
      {modificada && (
        <g transform="translate(176,110)">
          <ellipse cx="-3" cy="0" rx="4" ry="6" fill="#8A5A83"/><ellipse cx="3" cy="0" rx="4" ry="6" fill="#8A5A83"/>
          <line x1="0" y1="-2" x2="0" y2="4" stroke="#2D2418" strokeWidth="1"/>
        </g>
      )}
      {/* montanhas ao fundo */}
      <polygon points="0,140 40,110 80,140" fill="#8A5A83" opacity="0.4"/>
      <polygon points="120,140 160,105 200,140" fill="#8A5A83" opacity="0.4"/>
    </svg>
  );
}

function EtapaSeteErros({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "sete-erros" }>; say: (t: string) => Promise<void> }) {
  const [encontradas, setEncontradas] = useState<Set<number>>(new Set());
  const wrapRef = useRef<HTMLDivElement>(null);
  useEffect(() => { say(etapa.instrucao); }, []);
  const onClickCena = (e: React.PointerEvent) => {
    const r = wrapRef.current?.getBoundingClientRect(); if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    for (let i = 0; i < etapa.diferencas.length; i++) {
      if (encontradas.has(i)) continue;
      const d = etapa.diferencas[i];
      const dx = x - d.x, dy = y - d.y;
      if (Math.sqrt(dx*dx + dy*dy) <= d.r) {
        setEncontradas((s) => { const nv = new Set(s); nv.add(i); return nv; });
        say(`Achou! ${d.nome}.`);
        return;
      }
    }
    say("Aqui não tem diferença. Continua procurando!");
  };
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🕵️ {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-3">{etapa.instrucao}</p>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div>
          <div className="text-xs font-bold opacity-70 mb-1 text-center">Original</div>
          {etapa.fotoOriginalUrl ? (
            <img
              src={etapa.fotoOriginalUrl}
              alt={etapa.alt ?? "Cena original"}
              loading="lazy"
              className="w-full h-auto rounded-lg border-2 border-[var(--atelier-ink)]/20 select-none"
              draggable={false}
            />
          ) : (
            <CenaParque modificada={false} />
          )}
        </div>
        <div>
          <div className="text-xs font-bold opacity-70 mb-1 text-center">Ache as diferenças</div>
          <div ref={wrapRef} onPointerDown={onClickCena} style={{ position: "relative", cursor: "crosshair", touchAction: "none" }}>
            {etapa.fotoModificadaUrl ? (
              <img
                src={etapa.fotoModificadaUrl}
                alt={etapa.alt ?? "Cena com diferenças"}
                loading="lazy"
                className="w-full h-auto rounded-lg border-2 border-[var(--atelier-ink)]/20 select-none block"
                draggable={false}
              />
            ) : (
              <CenaParque modificada={true} />
            )}
            {etapa.diferencas.map((d, i) => encontradas.has(i) && (
              <div key={i} style={{ position: "absolute", left: `${d.x}%`, top: `${d.y}%`, transform: "translate(-50%,-50%)",
                width: 34, height: 34, borderRadius: "50%", border: "3px solid #D64545", background: "rgba(214,69,69,.2)", pointerEvents: "none" }}/>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-sm font-bold opacity-80">Diferenças: {encontradas.size} / {etapa.totalPontos}</div>
      {encontradas.size === etapa.totalPontos && (
        <div className="fade-up mt-3 p-3 rounded-xl bg-[var(--atelier-sage)]/25 text-center brush-title text-xl">Achou todas! 🎉</div>
      )}
    </div>
  );
}

/* ==================== UNIDADE 3 ==================== */

/* -------- Floresta Sonora -------- */
function EtapaFlorestaSonora({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "floresta-sonora" }>; say: (t: string) => Promise<void> }) {
  const [ouvidos, setOuvidos] = useState<Set<number>>(new Set());
  const [ativo, setAtivo] = useState<number | null>(null);
  useEffect(() => { say(etapa.instrucao); }, []);
  const tocar = (i: number) => {
    const s = etapa.sons[i];
    playTimbre(s.timbre);
    setAtivo(i);
    setOuvidos((p) => { const nv = new Set(p); nv.add(i); return nv; });
  };
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🌳 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-3">{etapa.instrucao}</p>
      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: 16, overflow: "hidden", background: "#000" }}>
        <img src={etapa.fotoUrl} alt={etapa.alt} loading="lazy" width={1280} height={720}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        {etapa.sons.map((s, i) => {
          const feito = ouvidos.has(i);
          const at = ativo === i;
          return (
            <button key={i} onClick={() => tocar(i)}
              style={{ position: "absolute", left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%,-50%)",
                width: 44, height: 44, borderRadius: "50%", border: "3px solid #fff",
                background: at ? "rgba(240,194,74,.95)" : feito ? "rgba(127,174,115,.9)" : "rgba(90,143,191,.9)",
                boxShadow: "0 0 0 3px rgba(0,0,0,.35), 0 0 18px rgba(255,255,255,.7)",
                fontSize: 20, animation: feito || at ? "none" : "pulse2 1.6s ease-out infinite" }}
              aria-label={s.nome}>{s.emoji}</button>
          );
        })}
        <style>{`@keyframes pulse2 { 0%{box-shadow:0 0 0 3px rgba(0,0,0,.35),0 0 0 0 rgba(90,143,191,.6);} 70%{box-shadow:0 0 0 3px rgba(0,0,0,.35),0 0 0 22px rgba(90,143,191,0);} 100%{box-shadow:0 0 0 3px rgba(0,0,0,.35),0 0 0 0 rgba(90,143,191,0);} }`}</style>
      </div>
      {ativo !== null && (
        <div className="fade-up mt-3 text-center brush-title text-2xl">{etapa.sons[ativo].emoji} {etapa.sons[ativo].nome}</div>
      )}
      <div className="text-center text-sm opacity-70 mt-2">Sons descobertos: {ouvidos.size} / {etapa.sons.length}</div>
    </div>
  );
}

/* -------- Sequenciador -------- */
function EtapaSequenciador({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "sequenciador" }>; say: (t: string) => Promise<void> }) {
  const [grade, setGrade] = useState<boolean[][]>(() => etapa.sons.map(() => Array(etapa.passos).fill(false)));
  const [tocando, setTocando] = useState(false);
  const [passoAtual, setPassoAtual] = useState(-1);
  const stopRef = useRef(false);
  useEffect(() => { say(etapa.instrucao); }, []);
  useEffect(() => () => { stopRef.current = true; }, []);

  const toggle = (r: number, c: number) => {
    setGrade((g) => g.map((row, ri) => ri === r ? row.map((v, ci) => ci === c ? !v : v) : row));
  };

  const tocar = async () => {
    if (tocando) return;
    setTocando(true); stopRef.current = false;
    for (let c = 0; c < etapa.passos; c++) {
      if (stopRef.current) break;
      setPassoAtual(c);
      for (let r = 0; r < etapa.sons.length; r++) {
        if (grade[r][c]) playTimbre(etapa.sons[r].timbre);
      }
      await new Promise((res) => setTimeout(res, 380));
    }
    setPassoAtual(-1); setTocando(false);
  };
  const parar = () => { stopRef.current = true; setTocando(false); setPassoAtual(-1); };
  const limpar = () => setGrade(etapa.sons.map(() => Array(etapa.passos).fill(false)));

  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🎼 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-3">{etapa.instrucao}</p>
      <div className="rounded-2xl bg-white/70 p-3 mb-3 overflow-x-auto">
        <table style={{ borderCollapse: "separate", borderSpacing: 4, margin: "0 auto" }}>
          <tbody>
            {etapa.sons.map((s, r) => (
              <tr key={r}>
                <td style={{ paddingRight: 6, textAlign: "right", fontSize: 12, fontWeight: 800, whiteSpace: "nowrap" }}>
                  <span style={{ fontSize: 20 }}>{s.emoji}</span> {s.nome}
                </td>
                {Array.from({ length: etapa.passos }).map((_, c) => {
                  const on = grade[r][c];
                  const col = passoAtual === c;
                  return (
                    <td key={c}>
                      <button onClick={() => { toggle(r, c); if (!on) playTimbre(s.timbre); }}
                        style={{ width: 32, height: 32, borderRadius: 8,
                          background: on ? s.cor : col ? "rgba(240,194,74,.25)" : "rgba(0,0,0,.08)",
                          border: on ? "2px solid #2D2418" : "2px solid transparent",
                          transform: col ? "scale(1.08)" : "scale(1)", transition: "transform .12s" }} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {!tocando ? (
          <button className="brush-btn" onClick={tocar}><Play size={16}/> Tocar</button>
        ) : (
          <button className="brush-btn" style={{ background: "#D64545" }} onClick={parar}><Pause size={16}/> Parar</button>
        )}
        <button className="brush-btn ghost" onClick={limpar}><Eraser size={14}/> Limpar</button>
      </div>
    </div>
  );
}

/* -------- Memória Sonora -------- */
type CartaMemoria = { id: number; parId: number; timbre: Timbre; emoji: string; nome: string };
function shuffle<T>(arr: T[]): T[] { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function EtapaMemoriaSonora({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "memoria-sonora" }>; say: (t: string) => Promise<void> }) {
  const [cartas, setCartas] = useState<CartaMemoria[]>(() => {
    const dup: CartaMemoria[] = [];
    etapa.pares.forEach((p, i) => { dup.push({ id: i*2, parId: i, timbre: p.timbre, emoji: p.emoji, nome: p.nome }); dup.push({ id: i*2+1, parId: i, timbre: p.timbre, emoji: p.emoji, nome: p.nome }); });
    return shuffle(dup);
  });
  const [viradas, setViradas] = useState<Set<number>>(new Set());
  const [casadas, setCasadas] = useState<Set<number>>(new Set());
  const [bloqueio, setBloqueio] = useState(false);
  useEffect(() => { say(etapa.instrucao); }, []);

  const virar = (id: number) => {
    if (bloqueio || viradas.has(id) || casadas.has(id)) return;
    const carta = cartas.find((c) => c.id === id)!;
    playTimbre(carta.timbre);
    const nv = new Set(viradas); nv.add(id); setViradas(nv);
    if (nv.size % 2 === 0) {
      const abertas = cartas.filter((c) => nv.has(c.id) && !casadas.has(c.id));
      if (abertas.length === 2 && abertas[0].parId === abertas[1].parId) {
        setCasadas((s) => { const x = new Set(s); abertas.forEach((c) => x.add(c.id)); return x; });
        say(`Par de ${abertas[0].nome}!`);
      } else {
        setBloqueio(true);
        setTimeout(() => {
          setViradas((v) => { const x = new Set(v); abertas.forEach((c) => x.delete(c.id)); return x; });
          setBloqueio(false);
        }, 900);
      }
    }
  };

  const paresFeitos = casadas.size / 2;
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🧠 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-3">{etapa.instrucao}</p>
      <div className="grid grid-cols-4 gap-2">
        {cartas.map((c) => {
          const aberta = viradas.has(c.id) || casadas.has(c.id);
          const feita = casadas.has(c.id);
          return (
            <button key={c.id} onClick={() => virar(c.id)}
              style={{ aspectRatio: "3 / 4", borderRadius: 12, border: "3px solid " + (feita ? "#7FAE73" : "#2D2418"),
                background: aberta ? "#FFFDF7" : "#8A5A83", color: "#2D2418", fontSize: 28,
                boxShadow: "0 4px 10px -4px rgba(0,0,0,.35)", transition: "transform .15s", transform: aberta ? "scale(1)" : "scale(.98)" }}>
              {aberta ? c.emoji : "🎵"}
            </button>
          );
        })}
      </div>
      <div className="text-center text-sm opacity-70 mt-3">Pares: {paresFeitos} / {etapa.pares.length}</div>
      {paresFeitos === etapa.pares.length && (
        <div className="fade-up mt-3 p-3 rounded-xl bg-[var(--atelier-sage)]/25 text-center brush-title text-xl">Todos os pares! 🎉</div>
      )}
    </div>
  );
}

/* -------- Ritmo Repetir (Simon) -------- */
function EtapaRitmoRepetir({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "ritmo-repetir" }>; say: (t: string) => Promise<void> }) {
  const [rodada, setRodada] = useState(0);
  const [status, setStatus] = useState<"esperando" | "tocando" | "sua-vez" | "erro" | "acertou" | "fim">("esperando");
  const [entrada, setEntrada] = useState<number[]>([]);
  const [destaque, setDestaque] = useState<number | null>(null);
  useEffect(() => { say(etapa.instrucao); }, []);

  const seq = etapa.sequencias[rodada];

  const iniciar = async () => {
    setStatus("tocando"); setEntrada([]);
    for (let i = 0; i < seq.length; i++) {
      setDestaque(seq[i]); playTimbre(etapa.sons[seq[i]].timbre);
      await new Promise((r) => setTimeout(r, 450));
      setDestaque(null);
      await new Promise((r) => setTimeout(r, 150));
    }
    setStatus("sua-vez");
  };

  const tocarSom = (idx: number) => {
    if (status !== "sua-vez") return;
    playTimbre(etapa.sons[idx].timbre);
    const nova = [...entrada, idx];
    setEntrada(nova);
    // valida
    for (let i = 0; i < nova.length; i++) {
      if (nova[i] !== seq[i]) { setStatus("erro"); say("Ops, não foi essa. Tenta a mesma rodada de novo."); return; }
    }
    if (nova.length === seq.length) {
      say("Acertou!"); setStatus("acertou");
      setTimeout(() => {
        if (rodada + 1 >= etapa.sequencias.length) setStatus("fim");
        else { setRodada((r) => r + 1); setStatus("esperando"); setEntrada([]); }
      }, 900);
    }
  };

  const tentarDeNovo = () => { setStatus("esperando"); setEntrada([]); };

  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="brush-title text-3xl">🥁 {etapa.titulo}</h2>
        <BtnFala onClick={() => say(etapa.instrucao)} />
      </div>
      <p className="opacity-80 mb-3">{etapa.instrucao}</p>
      <div className="text-center text-sm font-bold opacity-70 mb-2">
        Rodada {Math.min(rodada + 1, etapa.sequencias.length)} de {etapa.sequencias.length}
      </div>
      <div className="grid grid-cols-4 gap-3 mb-4">
        {etapa.sons.map((s, i) => {
          const on = destaque === i;
          return (
            <button key={i} onClick={() => tocarSom(i)}
              style={{ aspectRatio: "1 / 1", borderRadius: 20, border: "3px solid #2D2418",
                background: s.cor, opacity: on ? 1 : status === "sua-vez" ? 1 : 0.55,
                transform: on ? "scale(1.08)" : "scale(1)", transition: "transform .12s, opacity .2s",
                fontSize: 36, boxShadow: on ? "0 0 22px rgba(255,255,255,.9)" : "0 4px 10px -4px rgba(0,0,0,.4)" }}
              disabled={status !== "sua-vez"}>{s.emoji}</button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {status === "esperando" && <button className="brush-btn" onClick={iniciar}><Play size={16}/> Ouvir sequência</button>}
        {status === "tocando" && <div className="brush-title text-xl">🎧 Escuta...</div>}
        {status === "sua-vez" && <div className="brush-title text-xl">Sua vez! ({entrada.length}/{seq.length})</div>}
        {status === "erro" && <button className="brush-btn" onClick={tentarDeNovo}>Tentar de novo</button>}
        {status === "acertou" && <div className="brush-title text-xl text-green-700">✓ Acertou!</div>}
        {status === "fim" && <div className="brush-title text-2xl text-center">🏆 Você repetiu todas as sequências!</div>}
      </div>
    </div>
  );
}
