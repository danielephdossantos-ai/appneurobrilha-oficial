import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Volume2, Check, X, Lock } from "lucide-react";
import { speakChunked } from "@/lib/native-tts";
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

export function PlayerArteV1({ aula, onSair }: { aula: AulaArte; onSair: () => void }) {
  const [i, setI] = useState(0);
  const total = aula.etapas.length;
  const { say, stop } = useSpeak();
  useEffect(() => () => stop(), [stop]);

  const etapa = aula.etapas[i];
  const podeAvancar = i < total - 1;

  return (
    <div className="atelier">
      <div className="max-w-2xl mx-auto px-4 pt-4 pb-24">
        {/* Header */}
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
          <Etapa etapa={etapa} say={say} />
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between mt-6">
          <button className="brush-btn secondary" disabled={i === 0} onClick={() => setI((v) => Math.max(0, v - 1))}>
            ← Voltar
          </button>
          <div className="text-sm opacity-70">{i + 1} / {total}</div>
          {podeAvancar ? (
            <button className="brush-btn" onClick={() => setI((v) => v + 1)}>Próxima →</button>
          ) : (
            <button className="brush-btn" onClick={onSair}>Concluir ✓</button>
          )}
        </div>

        {/* Etapas Bloco 2 (bloqueadas) */}
        {i === total - 1 && (
          <div className="paper-card p-5 mt-8">
            <div className="brush-title text-2xl mb-2 flex items-center gap-2"><Lock size={18}/> Em breve — Bloco 2</div>
            <div className="text-sm opacity-70 mb-3">Novas mecânicas que vamos abrir nas próximas atualizações:</div>
            <ul className="space-y-2">
              {aula.etapasBloco2.map((e) => (
                <li key={e.n} className="locked-step flex items-start gap-2 text-sm">
                  <Lock size={14} className="mt-1"/> <span><b>{e.nome}</b> — {e.descricao}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

/* --------------------------- Etapas --------------------------- */

function Etapa({ etapa, say }: { etapa: EtapaBloco1; say: (t: string) => Promise<void> }) {
  if (etapa.tipo === "historia") return <EtapaHistoria etapa={etapa} say={say} />;
  if (etapa.tipo === "observar-cores") return <EtapaObservarCores etapa={etapa} say={say} />;
  if (etapa.tipo === "cor-emocao") return <EtapaCorEmocao etapa={etapa} say={say} />;
  if (etapa.tipo === "artista") return <EtapaArtista etapa={etapa} say={say} />;
  if (etapa.tipo === "texturas") return <EtapaTexturas etapa={etapa} say={say} />;
  if (etapa.tipo === "curiosidade") return <EtapaCuriosidade etapa={etapa} say={say} />;
  if (etapa.tipo === "quiz") return <EtapaQuiz etapa={etapa} say={say} />;
  return null;
}

function BtnFala({ onClick }: { onClick: () => void }) {
  return (
    <button className="brush-btn secondary !py-2 !px-3 !text-base" onClick={onClick} aria-label="Ouvir">
      <Volume2 size={18}/> Ouvir
    </button>
  );
}

function EtapaHistoria({ etapa, say }: { etapa: Extract<EtapaBloco1, { tipo: "historia" }>; say: (t: string) => Promise<void> }) {
  useEffect(() => { say(etapa.texto); }, []); // narra ao abrir
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
            className="flex flex-col items-center gap-1 group"
            aria-label={`Lápis ${l.cor}`}
          >
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
  const chave = cena.nome;
  const set = selecionadas[chave] ?? new Set<CorNome>();

  const toggle = (c: CorNome) => {
    const novo = new Set(set);
    if (novo.has(c)) novo.delete(c); else novo.add(c);
    setSelecionadas((p) => ({ ...p, [chave]: novo }));
    const acertou = cena.coresPresentes.includes(c);
    say(acertou ? `Sim! ${NOMES_CORES[c]} está na cena.` : `${NOMES_CORES[c]} não aparece nessa paisagem.`);
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
        {paleta.map((c) => {
          const sel = set.has(c);
          return (
            <button key={c} onClick={() => toggle(c)} className={`paint-chip ${sel ? "selected" : ""}`} style={{ background: CORES_HEX[c] }} aria-label={NOMES_CORES[c]} />
          );
        })}
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
        <div
          className="rounded-full grid place-items-center transition-all"
          style={{
            width: 130, height: 130, fontSize: 72,
            background: cartao ? cartao.hex : "#F4EAD5",
            boxShadow: "0 10px 24px -12px rgba(45,36,24,.35)",
          }}
        >
          {cartao ? cartao.emoji : "😐"}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 mb-4">
        {etapa.cartoes.map((c, k) => (
          <button
            key={k}
            className={`paint-chip mx-auto ${ativa === k ? "selected" : ""}`}
            style={{ background: c.hex }}
            aria-label={c.emocao}
            onClick={() => { setAtiva(k); say(`${c.emocao}. ${c.explicacao}`); }}
          />
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
      <img src={etapa.obraUrl} alt={etapa.obraLegenda} loading="lazy" width={1024} height={768}
           className="w-full rounded-2xl border border-black/10 shadow-md" />
      <p className="text-xs italic opacity-70 mt-2 text-center">{etapa.obraLegenda}</p>

      <p className="mt-4 text-lg font-semibold">{etapa.pergunta}</p>
      <div className="grid grid-cols-2 gap-2 mt-3">
        {etapa.opcoes.map((o, k) => (
          <button
            key={k}
            className={`brush-btn secondary ${resposta === k ? "!bg-[var(--atelier-ochre)] !text-white" : ""}`}
            onClick={() => { setResposta(k); say(`Você sentiu ${o.replace(/^\S+\s/, "")}.`); }}
          >
            {o}
          </button>
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

  const desenhos = useMemo(() => {
    const arr = etapa.itens.map((it) => it.combina);
    // embaralha estável
    return [...arr].sort((a, b) => a.localeCompare(b));
  }, [etapa]);

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
            <button
              key={it.textura}
              onClick={() => { setSelecionada(it.textura); say(it.nome); }}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition ${sel ? "border-[var(--atelier-terracotta)] scale-[1.03]" : "border-transparent"}`}
              style={{ boxShadow: "0 6px 14px -8px rgba(45,36,24,.4)" }}
            >
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
          <button key={d} className="brush-btn secondary !text-base !py-2" onClick={() => escolherDesenho(d)}>
            {d}
          </button>
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
          const cor = resposta === undefined ? "secondary"
            : escolhida && isCorreta ? "" // primary
            : escolhida && !isCorreta ? "secondary"
            : "ghost";
          return (
            <button
              key={k}
              disabled={resposta !== undefined}
              className={`brush-btn ${cor} justify-start !text-base`}
              style={escolhida && !isCorreta ? { background: "#F0C4B4", color: "#2D2418" } : undefined}
              onClick={() => { setRespostas((p) => ({ ...p, [q]: k })); say(k === pergunta.correta ? "Isso mesmo!" : "Não é essa. Vou te explicar."); }}
            >
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
