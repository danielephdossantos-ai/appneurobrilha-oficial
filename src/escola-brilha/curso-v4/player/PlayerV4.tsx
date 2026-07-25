import { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "@tanstack/react-router";
import type { AulaV4, Interacao } from "../types";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import { FrutasParaNumero } from "./blocos/FrutasParaNumero";
import { ContaArmada } from "./blocos/ContaArmada";
import { MinijogoColheita } from "./blocos/MinijogoColheita";
import { BotaoOuvirCena } from "@/escola-brilha/curso-v4/shared/BotaoOuvirCena";
import { METODOLOGIAS_MAT, metodologia } from "@/escola-brilha/curso-v4/metodologias-mat";

/**
 * Player v4.1 — Escola Brilha (tela única com scroll)
 * ---------------------------------------------------
 * Todos os 11 momentos são renderizados em sequência numa única página
 * rolável. A criança desce a tela livremente. Uma barra lateral mostra
 * o progresso e permite pular para qualquer momento.
 */

type Props = {
  aula: AulaV4;
  cursoSlug: string;
  voltarPara: string;
  onConcluir?: () => void;
};

const MOMENTOS: Array<{ id: string; label: string; key: keyof AulaV4 }> = [
  { id: "m1", label: "🎬 Motivação", key: "momento01_motivacao" },
  { id: "m2", label: "👀 Exploração", key: "momento02_exploracao" },
  { id: "m3", label: "💡 Descoberta", key: "momento03_descoberta" },
  { id: "m4", label: "📖 Explicação", key: "momento04_explicacao" },
  { id: "m5", label: "🧠 Brilha resolve", key: "momento05_modelagem" },
  { id: "m6", label: "🤝 Nós fazemos", key: "momento06_praticaGuiada" },
  { id: "m7", label: "💪 Você faz", key: "momento07_praticaIndependente" },
  { id: "m8", label: "🌎 Na vida real", key: "momento08_aplicacao" },
  { id: "m9", label: "🔁 Revisão", key: "momento09_revisao" },
  { id: "m10", label: "✅ O que aprendeu", key: "momento10_avaliacao" },
  { id: "m11", label: "🏠 Missão em Família", key: "momento11_missaoFamilia" },
];

export function PlayerV4({ aula, cursoSlug, voltarPara, onConcluir }: Props) {
  const [ativo, setAtivo] = useState("m1");

  useEffect(() => {
    const els = MOMENTOS.map((m) => document.getElementById(m.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setAtivo(vis[0].target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [aula.slug]);

  useEffect(() => () => stopSpeaking(), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1f55] to-[#1e3a8a] text-white">
      <header className="sticky top-0 z-20 bg-[#0d1f55]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/escola-brilha/curso/$slug" params={{ slug: cursoSlug }} className="text-sm text-white/70 hover:text-white">
            ← Trilha
          </Link>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold truncate">{aula.titulo}</div>
            <div className="text-[10px] text-white/60">Role para descer a aula ↓</div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6 lg:flex lg:gap-6">
        {/* Índice lateral (desktop) */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24 space-y-1">
            {MOMENTOS.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className={`block text-xs px-3 py-2 rounded-lg transition ${
                  ativo === m.id ? "bg-amber-400 text-[#0d1f55] font-bold" : "text-white/70 hover:bg-white/10"
                }`}
              >
                {m.label}
              </a>
            ))}
          </div>
        </aside>

        <main className="flex-1 space-y-8 min-w-0">
          <Secao id="m1" label="🎬 Motivação"><Motivacao m={aula.momento01_motivacao} /></Secao>
          <Secao id="m2" label="👀 Exploração"><Exploracao m={aula.momento02_exploracao} /></Secao>
          <Secao id="m3" label="💡 Descoberta"><Descoberta m={aula.momento03_descoberta} /></Secao>
          <Secao id="m4" label="📖 Explicação"><Explicacao m={aula.momento04_explicacao} /></Secao>
          <Secao id="m5" label="🧠 Brilha resolve"><Modelagem m={aula.momento05_modelagem} /></Secao>
          <Secao id="m6" label="🤝 Nós fazemos"><PraticaGuiada m={aula.momento06_praticaGuiada} /></Secao>
          <Secao id="m7" label="💪 Você faz"><PraticaIndep m={aula.momento07_praticaIndependente} /></Secao>
          <Secao id="m8" label="🌎 Na vida real"><Aplicacao m={aula.momento08_aplicacao} /></Secao>
          <Secao id="m9" label="🔁 Revisão"><Revisao m={aula.momento09_revisao} /></Secao>
          <Secao id="m10" label="✅ O que aprendeu"><Avaliacao m={aula.momento10_avaliacao} /></Secao>
          <Secao id="m11" label="🏠 Missão em Família"><MissaoFamilia m={aula.momento11_missaoFamilia} /></Secao>

          <RodapeMetodologias chaves={aula.metodologias} />

          <div className="pt-6 flex flex-col items-center gap-3">
            <button
              onClick={() => onConcluir?.()}
              className="px-8 py-4 rounded-xl bg-amber-400 text-[#0d1f55] font-black text-lg hover:bg-amber-300"
            >
              🎉 Concluir aula
            </button>
            <Link to={voltarPara} className="text-xs text-white/50 hover:text-white/80">
              Sair para a trilha
            </Link>
          </div>
        </main>
      </div>
      <BotaoOuvirCena selector={`#${ativo}`} />
    </div>
  );
}

// ---------- Wrapper de seção ----------------------------------------
function Secao({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  const [falando, setFalando] = useState(false);
  useEffect(() => () => { try { window.speechSynthesis?.cancel(); } catch {} }, []);
  const ouvir = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (falando) { window.speechSynthesis.cancel(); setFalando(false); return; }
    const sec = document.getElementById(id);
    if (!sec) return;
    const clone = sec.cloneNode(true) as HTMLElement;
    clone.querySelectorAll('button, [role="button"], [data-no-tts], input, select, textarea').forEach((n) => n.remove());
    const txt = (clone.textContent || "").replace(/\s+/g, " ").replace(/[🔊▶✓←→✅❌🎬🔮📚📖🧠🎭🧩💪🎮🔁]/gu, " ").trim();
    if (!txt) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(txt);
    u.lang = "pt-BR"; u.rate = 0.98; u.pitch = 1;
    u.onend = () => setFalando(false);
    u.onerror = () => setFalando(false);
    setFalando(true);
    window.speechSynthesis.speak(u);
  };
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="text-xs uppercase tracking-wider text-amber-300">{label}</div>
        <button
          onClick={ouvir}
          data-no-tts
          aria-label={falando ? "Parar leitura" : "Escutar explicação"}
          className={`shrink-0 text-xs font-bold px-3 py-1.5 rounded-full border transition ${
            falando
              ? "bg-red-500 text-white border-red-300 animate-pulse"
              : "bg-white/10 text-white border-white/30 hover:bg-white/20"
          }`}
        >
          {falando ? "⏸ Parar" : "🔊 Escutar explicação"}
        </button>
      </div>
      {children}
    </section>
  );
}

// ---------- Momentos (renderers) ------------------------------------

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
      {children}
    </div>
  );
}

function Motivacao({ m }: { m: AulaV4["momento01_motivacao"] }) {
  return (
    <Card>
      <h2 className="text-2xl font-black">{m.titulo}</h2>
      {m.imagemUrl && <img src={m.imagemUrl} alt="" className="w-40 mx-auto" />}
      <p className="text-lg leading-relaxed">{m.historia}</p>
    </Card>
  );
}

function Exploracao({ m }: { m: AulaV4["momento02_exploracao"] }) {
  return (
    <Card>
      <p className="text-lg">{m.instrucao}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {m.cenas.map((c, i) => (
          <div key={i} className="text-center">
            {c.tipo === "imagem" && <img src={c.url} alt={c.alt} className="w-24" />}
            {c.tipo === "grupoItens" &&
              Array.from({ length: c.quantidade }).map((_, k) => (
                <img key={k} src={c.imagemUrl} alt="" className="w-12 inline-block" />
              ))}
            {c.tipo === "texto" && (
              <div className={c.destaque ? "text-2xl font-bold" : ""}>{c.texto}</div>
            )}
          </div>
        ))}
      </div>
      {m.interacao && <InteracaoView i={m.interacao} />}
    </Card>
  );
}

function Descoberta({ m }: { m: AulaV4["momento03_descoberta"] }) {
  const [revelou, setRevelou] = useState(false);
  return (
    <Card>
      <div className="text-xl font-bold">{m.perguntaGuia}</div>
      <div className="text-white/70">💡 Pista: {m.pista}</div>
      {!revelou ? (
        <button
          onClick={() => setRevelou(true)}
          className="w-full py-3 rounded-lg bg-white/10 hover:bg-white/20"
        >
          Ver a descoberta ✨
        </button>
      ) : (
        <div className="bg-amber-400/20 border border-amber-400 rounded-lg p-4 text-lg">
          🎉 {m.revelacao}
        </div>
      )}
    </Card>
  );
}

function Explicacao({ m }: { m: AulaV4["momento04_explicacao"] }) {
  return (
    <Card>
      <h2 className="text-xl font-bold">{m.titulo}</h2>
      <ol className="space-y-4">
        {m.etapas.map((e, i) => (
          <li key={i} className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400 text-[#0d1f55] font-bold grid place-items-center shrink-0">
              {i + 1}
            </div>
            <div className="flex-1">
              <div>{e.texto}</div>
              {e.exemplo && (
                <div className="text-sm text-white/70 mt-1">Ex.: {e.exemplo}</div>
              )}
              {e.agrupamentos && e.agrupamentos.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3 items-start">
                  <div className="flex-1 min-w-[200px] space-y-3">
                    {e.agrupamentos.map((ag, idx) => {
                      const total = ag.tamanhoGrupo * ag.qtdGrupos;
                      return (
                        <div key={idx} className="rounded-xl bg-white/5 p-3">
                          {ag.rotulo && (
                            <div className="text-xs text-amber-300 font-semibold mb-2">
                              {ag.rotulo}
                            </div>
                          )}
                          <div className="flex flex-wrap gap-3 items-end">
                            {Array.from({ length: ag.qtdGrupos }).map((_, gi) => (
                              <div key={gi} className="flex flex-col items-center">
                                <div className="grid grid-cols-5 gap-0.5 p-1 rounded-lg bg-amber-400/10 border border-amber-300/30">
                                  {Array.from({ length: ag.tamanhoGrupo }).map((_, ii) => (
                                    <img
                                      key={ii}
                                      src={ag.imagemUrl}
                                      alt=""
                                      className="w-6 h-6 object-contain"
                                    />
                                  ))}
                                </div>
                                <div className="text-xs text-white/80 mt-1 font-bold">
                                  {ag.tamanhoGrupo * (gi + 1)}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="text-sm text-white/90 mt-2">
                            {Array.from({ length: ag.qtdGrupos })
                              .map(() => ag.tamanhoGrupo)
                              .join(" + ")}{" "}
                            = <span className="font-bold text-amber-300">{total}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <ContaArmadaEmpilhada agrupamentos={e.agrupamentos} />
                </div>
              )}

              {e.frutasParaNumero && (
                <FrutasParaNumero {...e.frutasParaNumero} />
              )}
              {e.contaArmada && <ContaArmada {...e.contaArmada} />}
              {e.casasValor && <CasasValor {...e.casasValor} />}
              {!e.agrupamentos && !e.frutasParaNumero && !e.contaArmada && !e.casasValor && e.imagemUrl && (
                <img src={e.imagemUrl} alt="" className="w-32 mt-2" />
              )}
              {e.exemploReal && <ExemploReal {...e.exemploReal} />}
            </div>

          </li>
        ))}
      </ol>
    </Card>
  );
}

function Modelagem({ m }: { m: AulaV4["momento05_modelagem"] }) {
  const total = m.colecaoVisual?.grupos.reduce((s, n) => s + n, 0) ?? 0;
  return (
    <Card>
      <div className="text-sm text-amber-300">🧠 Brilha pensa em voz alta:</div>
      <div className="text-lg font-medium">{m.enunciado}</div>

      {m.colecaoVisual && (
        <div className="rounded-2xl bg-white/95 text-[#0d1f55] p-4 border-2 border-amber-300/50">
          <div className="text-xs font-black uppercase tracking-widest text-amber-600 mb-3">
            Conte junto com o Brilha ({total}
            {m.colecaoVisual.itemPlural ? ` ${m.colecaoVisual.itemPlural}` : ""})
          </div>
          <div className="flex flex-wrap gap-4 items-end justify-center">
            {m.colecaoVisual.grupos.map((qtd, gi) => {
              const acumulado = m.colecaoVisual!.grupos
                .slice(0, gi + 1)
                .reduce((s, n) => s + n, 0);
              const eSolta = qtd < 5;
              return (
                <div key={gi} className="flex flex-col items-center">
                  <div
                    className={`grid gap-0.5 p-2 rounded-lg border-2 ${
                      eSolta
                        ? "border-dashed border-amber-400/60 bg-amber-50"
                        : "border-amber-500 bg-amber-100"
                    }`}
                    style={{
                      gridTemplateColumns: `repeat(${Math.min(5, qtd)}, minmax(0, 1fr))`,
                    }}
                  >
                    {Array.from({ length: qtd }).map((_, ii) => (
                      <img
                        key={ii}
                        src={m.colecaoVisual!.imagemUrl}
                        alt=""
                        className="w-7 h-7 object-contain"
                      />
                    ))}
                  </div>
                  <div className="text-[11px] font-bold mt-1 text-[#0d1f55]/80">
                    {eSolta ? `${qtd} solta${qtd > 1 ? "s" : ""}` : `pilha de ${qtd}`}
                  </div>
                  <div className="text-xs font-black text-amber-600">
                    {acumulado}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-3 text-center text-sm font-bold text-[#0d1f55]">
            {m.colecaoVisual.grupos.join(" + ")} ={" "}
            <span className="text-emerald-600 text-lg">{total}</span>
          </div>
        </div>
      )}

      {m.casasValor && <CasasValor {...m.casasValor} />}

      {!m.colecaoVisual && !m.casasValor && m.visualUrl && (
        <img src={m.visualUrl} alt="" className="w-40 mx-auto" />
      )}

      <div className="space-y-2 bg-white/5 rounded-lg p-4">
        {m.passos.map((p, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-amber-300">→</span>
            <span>{p}</span>
          </div>
        ))}
      </div>
      <div className="text-xl font-bold text-amber-300">
        Resposta: {m.resposta}
      </div>
    </Card>
  );
}

function PraticaGuiada({ m }: { m: AulaV4["momento06_praticaGuiada"] }) {
  return (
    <Card>
      <div className="text-lg">{m.enunciado}</div>
      <div className="text-sm bg-amber-400/20 border border-amber-400/50 rounded-lg p-3">
        💡 Dica: {m.dica}
      </div>
      <InteracaoView i={m.interacao} />
    </Card>
  );
}

function PraticaIndep({ m }: { m: AulaV4["momento07_praticaIndependente"] }) {
  return (
    <Card>
      <div className="text-lg">{m.enunciado}</div>
      <InteracaoView i={m.interacao} />
    </Card>
  );
}

function Aplicacao({ m }: { m: AulaV4["momento08_aplicacao"] }) {
  return (
    <Card>
      <div className="text-sm text-amber-300">🌎 Na vida real:</div>
      <div>{m.contexto}</div>
      <div className="text-lg font-bold">{m.problema}</div>
      <InteracaoView i={m.interacao} />
    </Card>
  );
}

function Revisao({ m }: { m: AulaV4["momento09_revisao"] }) {
  return (
    <Card>
      <div className="text-sm text-amber-300">🔁 Lembrando o que já sabemos:</div>
      <ul className="space-y-2">
        {m.pontos.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
      {m.miniDesafio && <InteracaoView i={m.miniDesafio} />}
    </Card>
  );
}

function Avaliacao({ m }: { m: AulaV4["momento10_avaliacao"] }) {
  const [respostas, setRespostas] = useState<(number | null)[]>(
    m.perguntas.map(() => null),
  );
  const [tirados, setTirados] = useState<boolean[]>(
    m.perguntas.map(() => false),
  );
  return (
    <Card>
      <div className="text-sm text-amber-300">✅ Mostra o que aprendeu:</div>
      {m.perguntas.map((q, qi) => {
        const grupoUnico = q.visualGrupos && q.visualGrupos.length === 1;
        const ehSubtracaoInterativa =
          grupoUnico && typeof q.tirar === "number" && q.tirar! > 0;
        const jaTirou = tirados[qi];
        return (
        <div key={qi} className="border-t border-white/10 pt-4">
          <div className="font-medium mb-3">
            {qi + 1}. {q.pergunta}
          </div>
          {ehSubtracaoInterativa ? (
            <div className="mb-3 flex flex-col items-center gap-3">
              <div className="rounded-2xl bg-white/5 border border-white/15 p-3 w-full max-w-md">
                {q.visualGrupos![0].rotulo && (
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-200 text-center mb-2">
                    {q.visualGrupos![0].rotulo} · {q.visualGrupos![0].quantidade}
                  </div>
                )}
                <div className="flex flex-wrap justify-center gap-1">
                  {Array.from({ length: q.visualGrupos![0].quantidade }).map((_, k) => {
                    const total = q.visualGrupos![0].quantidade;
                    const removida = jaTirou && k >= total - (q.tirar ?? 0);
                    return (
                      <div key={k} className="relative">
                        <img
                          src={q.visualGrupos![0].imagemUrl}
                          alt=""
                          className={`h-11 w-11 object-contain drop-shadow transition-all duration-500 ${
                            removida ? "opacity-15 grayscale" : "opacity-100"
                          }`}
                        />
                        {removida && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="h-0.5 w-10 bg-red-500 rotate-45 rounded" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() =>
                  setTirados((t) => t.map((v, i) => (i === qi ? !v : v)))
                }
                className="px-4 py-2 rounded-full bg-amber-400 text-slate-900 text-sm font-bold hover:bg-amber-300"
              >
                {jaTirou ? "🔄 Mostrar tudo de novo" : `✂️ Tirar ${q.tirar}`}
              </button>
              {jaTirou && (
                <div className="text-xs text-emerald-200">
                  Agora conte só as que ficaram acesas!
                </div>
              )}
            </div>
          ) : q.visualGrupos && q.visualGrupos.length > 0 ? (
            <div className="mb-3 flex flex-wrap items-center justify-center gap-3">
              {q.visualGrupos.map((g, gi) => (
                <div key={gi} className="flex items-center gap-2">
                  <div className="rounded-2xl bg-white/5 border border-white/15 p-2">
                    {g.rotulo && (
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-200 text-center mb-1">
                        {g.rotulo} · {g.quantidade}
                      </div>
                    )}
                    <div className="flex flex-wrap justify-center gap-1 max-w-[220px]">
                      {Array.from({ length: g.quantidade }).map((_, k) => (
                        <img
                          key={k}
                          src={g.imagemUrl}
                          alt=""
                          className="h-10 w-10 object-contain drop-shadow"
                        />
                      ))}
                    </div>
                  </div>
                  {gi < q.visualGrupos!.length - 1 && (
                    <div className="text-3xl font-black text-amber-300">+</div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            q.visualUrl && <img src={q.visualUrl} alt="" className="w-40 mb-3" />
          )}

          <div className="grid gap-2">
            {q.opcoes.map((op, oi) => {
              const escolhida = respostas[qi] === oi;
              const ehCorreta = q.correta === oi;
              const mostrarFeedback = respostas[qi] !== null;
              return (
                <button
                  key={oi}
                  onClick={() =>
                    setRespostas((r) => r.map((v, i) => (i === qi ? oi : v)))
                  }
                  disabled={mostrarFeedback}
                  className={`text-left px-4 py-3 rounded-lg border ${
                    !mostrarFeedback
                      ? "bg-white/5 border-white/20 hover:bg-white/10"
                      : ehCorreta
                        ? "bg-emerald-500/20 border-emerald-400"
                        : escolhida
                          ? "bg-red-500/20 border-red-400"
                          : "bg-white/5 border-white/10 opacity-60"
                  }`}
                >
                  {op}
                </button>
              );
            })}
          </div>
          {respostas[qi] !== null && (
            <div
              className={`mt-3 text-sm p-3 rounded-lg ${
                respostas[qi] === q.correta
                  ? "bg-emerald-500/10 text-emerald-200"
                  : "bg-amber-500/10 text-amber-200"
              }`}
            >
              {respostas[qi] === q.correta ? q.feedbackAcerto : q.feedbackErro}
            </div>
          )}
        </div>
        );
      })}

    </Card>
  );
}

function MissaoFamilia({ m }: { m: AulaV4["momento11_missaoFamilia"] }) {
  return (
    <Card>
      <div className="text-sm text-amber-300">🏠 Para fazer com a família:</div>
      <h2 className="text-xl font-bold">{m.titulo}</h2>
      <div>
        <div className="font-semibold mb-1">Você vai precisar de:</div>
        <ul className="space-y-1">
          {m.materiais.map((mat, i) => (
            <li key={i}>• {mat}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-1">Como fazer:</div>
        <ol className="space-y-1 list-decimal list-inside">
          {m.passos.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ol>
      </div>
      <div className="bg-white/5 rounded-lg p-3 text-sm">📸 {m.registro}</div>
    </Card>
  );
}

// ---------- Interações ------------------------------------------------

function InteracaoView({ i }: { i: Interacao }) {
  if (i.tipo === "tapContar") return <TapContar i={i} />;
  if (i.tipo === "contarQuiz") return <ContarQuiz i={i} />;
  if (i.tipo === "escolhaVisual") return <EscolhaVisual i={i} />;
  if (i.tipo === "operacaoVisual") return <OperacaoVisual i={i} />;
  if (i.tipo === "minijogoColheita") return <MinijogoColheita {...i} />;
  if (i.tipo === "contaPassoAPasso") return <ContaPassoAPasso i={i} />;
  return (
    <div className="bg-white/5 rounded-xl p-4 mt-3 text-xs text-white/50">
      Interação "{i.tipo}" ainda sem renderer.
    </div>
  );
}

/** Números por extenso pt-BR para o professor contar em voz alta. */
const NUM_FALADO: Record<number, string> = {
  1: "um", 2: "dois", 3: "três", 4: "quatro", 5: "cinco",
  6: "seis", 7: "sete", 8: "oito", 9: "nove", 10: "dez",
  11: "onze", 12: "doze", 13: "treze", 14: "quatorze", 15: "quinze",
  16: "dezesseis", 17: "dezessete", 18: "dezoito", 19: "dezenove", 20: "vinte",
  21: "vinte e um", 22: "vinte e dois", 23: "vinte e três", 24: "vinte e quatro",
  25: "vinte e cinco", 26: "vinte e seis", 27: "vinte e sete", 28: "vinte e oito",
  29: "vinte e nove", 30: "trinta",
};
function falarNumero(n: number) {
  return NUM_FALADO[n] ?? String(n);
}

function TapContar({ i }: { i: Extract<Interacao, { tipo: "tapContar" }> }) {
  const [tocadas, setTocadas] = useState<Set<number>>(new Set());
  const [somAtivo, setSomAtivo] = useState(true);
  const somRef = useRef(true);
  useEffect(() => { somRef.current = somAtivo; }, [somAtivo]);
  useEffect(() => () => stopSpeaking(), []);

  const handleTap = (k: number) => {
    if (tocadas.has(k)) return;
    const novo = new Set(tocadas);
    novo.add(k);
    setTocadas(novo);
    if (somRef.current) {
      const n = novo.size;
      const frase = n === i.quantidade
        ? `${falarNumero(n)}! Contamos ${falarNumero(n)} ${i.itemPlural}.`
        : falarNumero(n);
      speakChunked(frase, { rate: 0.9, pitch: 1.1 });
    }
  };

  const resetar = () => {
    stopSpeaking();
    setTocadas(new Set());
  };

  return (
    <div className="mt-3 bg-white/5 rounded-xl p-4">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="text-sm">{i.pergunta ?? `Toque em cada ${i.itemPlural}:`}</div>
        <button
          onClick={() => {
            const novo = !somAtivo;
            setSomAtivo(novo);
            if (!novo) stopSpeaking();
          }}
          className="text-xs px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 shrink-0"
          title={somAtivo ? "Desligar voz do professor" : "Ligar voz do professor"}
        >
          {somAtivo ? "🔊 Voz ligada" : "🔇 Voz desligada"}
        </button>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {Array.from({ length: i.quantidade }).map((_, k) => {
          const tocada = tocadas.has(k);
          return (
            <button
              key={k}
              onClick={() => handleTap(k)}
              className={`transition-transform ${tocada ? "scale-110" : "opacity-60 hover:opacity-100"}`}
            >
              <div className="relative">
                <img src={i.imagemUrl} alt="" className="w-14 h-14 object-contain" />
                {tocada && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-[#0d1f55] font-bold text-xs grid place-items-center">
                    {[...tocadas].sort((a, b) => a - b).indexOf(k) + 1}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
      <div className="text-center mt-4 text-lg font-bold text-amber-300">
        Contei: {tocadas.size} {i.itemPlural}
      </div>
      {tocadas.size > 0 && (
        <div className="text-center mt-2">
          <button onClick={resetar} className="text-xs text-white/60 hover:text-white underline">
            recomeçar contagem
          </button>
        </div>
      )}
    </div>
  );
}

function ContarQuiz({ i }: { i: Extract<Interacao, { tipo: "contarQuiz" }> }) {
  const [escolha, setEscolha] = useState<number | null>(null);
  // Contagem tocando junto (professor fala) — obrigatória até o 2º ano.
  const totalItens = i.grupos.reduce((s, g) => s + g.quantidade, 0);
  const [tocadas, setTocadas] = useState<Set<string>>(new Set());
  const [somAtivo, setSomAtivo] = useState(true);
  const somRef = useRef(true);
  useEffect(() => { somRef.current = somAtivo; }, [somAtivo]);
  useEffect(() => () => stopSpeaking(), []);

  const tocar = (chave: string) => {
    if (tocadas.has(chave) || escolha !== null) return;
    const novo = new Set(tocadas);
    novo.add(chave);
    setTocadas(novo);
    if (somRef.current) {
      const n = novo.size;
      const frase = n === totalItens
        ? `${falarNumero(n)}! Contamos ${falarNumero(n)}.`
        : falarNumero(n);
      speakChunked(frase, { rate: 0.9, pitch: 1.1 });
    }
  };

  const resetar = () => {
    stopSpeaking();
    setTocadas(new Set());
  };

  return (
    <div className="mt-3 bg-white/5 rounded-xl p-4 space-y-4">
      {/* Barra do professor + contador ao vivo */}
      <div className="flex items-center gap-3">
        <div className="flex-1 rounded-lg bg-white/10 p-2 text-center">
          <div className="text-[10px] uppercase tracking-widest text-amber-300 font-black">
            👆 Toque em cada figura para contar junto
          </div>
          <div className="text-3xl font-black tabular-nums text-amber-300">
            {tocadas.size}
            <span className="text-sm text-white/50"> / {totalItens}</span>
          </div>
        </div>
        <button
          onClick={() => setSomAtivo((s) => !s)}
          className={`h-11 w-11 rounded-xl grid place-items-center ${
            somAtivo ? "bg-amber-400 text-[#0d1f55]" : "bg-white/10 text-white/60"
          }`}
          aria-label={somAtivo ? "Desligar voz" : "Ligar voz"}
          title={somAtivo ? "Voz ligada" : "Voz desligada"}
        >
          🔊
        </button>
        <button
          onClick={resetar}
          disabled={tocadas.size === 0}
          className="h-11 w-11 rounded-xl bg-white/10 grid place-items-center disabled:opacity-30"
          aria-label="Reiniciar contagem"
          title="Reiniciar"
        >
          🔄
        </button>
      </div>

      {i.grupos.map((g, gi) => (
        <div key={gi}>
          {g.rotulo && <div className="text-xs text-white/60 mb-1">{g.rotulo}</div>}
          <div className="flex flex-wrap gap-1 justify-center bg-white/5 rounded-lg p-2">
            {Array.from({ length: g.quantidade }).map((_, k) => {
              const chave = `${gi}-${k}`;
              const pos = Array.from(tocadas).indexOf(chave);
              const contada = pos !== -1;
              return (
                <button
                  key={k}
                  onClick={() => tocar(chave)}
                  disabled={escolha !== null}
                  className="relative w-10 h-10 grid place-items-center active:scale-90 transition"
                  aria-label={`item ${k + 1}`}
                >
                  <img
                    src={g.imagemUrl}
                    alt=""
                    className={`w-full h-full object-contain transition ${
                      contada ? "drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]" : ""
                    }`}
                    draggable={false}
                  />
                  {contada && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 text-white text-[9px] font-black grid place-items-center border border-white">
                      {pos + 1}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="font-semibold text-center">{i.pergunta}</div>
      <div className="grid grid-cols-3 gap-2">
        {i.opcoes.map((op, oi) => {
          const dado = escolha !== null;
          const cert = i.correta === oi;
          const esc = escolha === oi;
          return (
            <button
              key={oi}
              disabled={dado}
              onClick={() => setEscolha(oi)}
              className={`py-3 rounded-lg font-bold text-lg ${
                !dado
                  ? "bg-white/10 hover:bg-white/20"
                  : cert
                    ? "bg-emerald-500/30 border border-emerald-400"
                    : esc
                      ? "bg-red-500/30 border border-red-400"
                      : "bg-white/5 opacity-50"
              }`}
            >
              {op}
            </button>
          );
        })}
      </div>
      {escolha !== null && (
        <div
          className={`p-3 rounded-lg text-sm ${
            escolha === i.correta
              ? "bg-emerald-500/10 text-emerald-200"
              : "bg-amber-500/10 text-amber-200"
          }`}
        >
          {escolha === i.correta ? i.feedbackAcerto : i.feedbackErro}
        </div>
      )}
    </div>
  );
}

function EscolhaVisual({ i }: { i: Extract<Interacao, { tipo: "escolhaVisual" }> }) {
  const [escolha, setEscolha] = useState<string | null>(null);
  return (
    <div className="mt-3 bg-white/5 rounded-xl p-4 space-y-4">
      <div className="font-semibold text-center">{i.pergunta}</div>
      <div className="grid grid-cols-3 gap-3">
        {i.opcoes.map((op) => {
          const dado = escolha !== null;
          const cert = op.nome === i.respostaCerta;
          const esc = escolha === op.nome;
          return (
            <button
              key={op.nome}
              disabled={dado}
              onClick={() => setEscolha(op.nome)}
              className={`p-3 rounded-xl flex flex-col items-center gap-2 ${
                !dado
                  ? "bg-white/10 hover:bg-white/20"
                  : cert
                    ? "bg-emerald-500/30 border border-emerald-400"
                    : esc
                      ? "bg-red-500/30 border border-red-400"
                      : "bg-white/5 opacity-50"
              }`}
            >
              {op.imagemUrl ? (
                <img src={op.imagemUrl} alt={op.nome} className="w-16 h-16 object-contain" />
              ) : (
                <div className="w-full py-3 grid place-items-center font-black text-3xl md:text-4xl tabular-nums">
                  {op.nome}
                </div>
              )}
              {op.imagemUrl && (
                <span className="text-xs font-medium text-center leading-tight">
                  {op.nome}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {escolha !== null && (
        <div
          className={`p-3 rounded-lg text-sm ${
            escolha === i.respostaCerta
              ? "bg-emerald-500/10 text-emerald-200"
              : "bg-amber-500/10 text-amber-200"
          }`}
        >
          {escolha === i.respostaCerta ? i.feedbackAcerto : i.feedbackErro}
        </div>
      )}
    </div>
  );
}

function OperacaoVisual({ i }: { i: Extract<Interacao, { tipo: "operacaoVisual" }> }) {
  const VELOCIDADE_VOZ = 0.78;
  const TEMPO_POR_CARACTERE_MS = 145;
  const PAUSA_ENTRE_PASSOS_MS = 2600;
  const PAUSA_FINAL_MS = 900;
  const ehSoma = i.operacao === "soma";
  const quantidadeTirada = Math.min(i.b, i.a);
  const total = ehSoma ? i.a + i.b : Math.max(0, i.a - i.b);
  const sinal = ehSoma ? "+" : "−";
  const [contando, setContando] = useState(false);
  const [passo, setPasso] = useState(0); // soma: frutas contadas | subtração: frutas tiradas
  const [terminou, setTerminou] = useState(false);

  // Para soma: conta A e depois B. Para subtração: mostra o grupo inicial e apaga B itens dele.
  const totalPassos = ehSoma ? i.a + i.b : quantidadeTirada;
  const numeroAtual = ehSoma ? passo : Math.max(0, i.a - passo);

  const iniciar = () => {
    try { window.speechSynthesis.cancel(); } catch {}
    setContando(true);
    setTerminou(false);
    setPasso(0);
  };

  // Auto-play na subtração: o professor fala a legenda e as maçãs somem no mesmo ritmo.
  useEffect(() => {
    if (ehSoma) return;
    let cancelado = false;
    try { window.speechSynthesis.cancel(); } catch {}
    const falarIntro = () => {
      try {
        if (!i.legenda) return 0;
        const u = new SpeechSynthesisUtterance(i.legenda);
        u.lang = "pt-BR";
        u.rate = VELOCIDADE_VOZ;
        window.speechSynthesis.speak(u);
        // Mais lento para a criança acompanhar a fala e ver cada fruta apagando.
        return Math.min(11000, Math.max(2600, i.legenda.length * TEMPO_POR_CARACTERE_MS));
      } catch { return 2600; }
    };
    const espera = falarIntro();
    const t = setTimeout(() => {
      if (cancelado) return;
      setContando(true);
      setTerminou(false);
      setPasso(0);
    }, espera);
    return () => { cancelado = true; clearTimeout(t); try { window.speechSynthesis.cancel(); } catch {} };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    if (!contando) return;
    if (passo >= totalPassos) {
      const t = setTimeout(() => {
        try {
          const u = new SpeechSynthesisUtterance(
            ehSoma ? `Total: ${total} ${i.itemPlural}!` : `Ficaram ${total} ${i.itemPlural}!`
          );
          u.lang = "pt-BR";
          u.rate = VELOCIDADE_VOZ;
          window.speechSynthesis.speak(u);
        } catch {}
        setTerminou(true);
        setContando(false);
      }, PAUSA_FINAL_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      const n = passo + 1;
      try {
        const u = new SpeechSynthesisUtterance(
          ehSoma ? String(n) : `Tirou ${n}. Ficaram ${Math.max(0, i.a - n)}.`
        );
        u.lang = "pt-BR";
        u.rate = VELOCIDADE_VOZ;
        window.speechSynthesis.speak(u);
      } catch {}
      setPasso(n);
    }, PAUSA_ENTRE_PASSOS_MS);
    return () => clearTimeout(t);
  }, [contando, passo, totalPassos, total, i.itemPlural, ehSoma, i.a]);

  return (
    <div className="mt-3 bg-white/5 rounded-xl p-4">
      {i.legenda && <div className="text-sm text-white/70 mb-3 text-center">{i.legenda}</div>}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {ehSoma ? (
          <>
            <GrupoImgAnimado
              url={i.imagemUrl}
              n={i.a}
              destacadosAte={Math.min(passo, i.a)}
              modo="destacar"
              sumirDepoisDe={0}
            />
            <div className="text-3xl font-black">{sinal}</div>
            <GrupoImgAnimado
              url={i.imagemUrl}
              n={i.b}
              destacadosAte={Math.max(0, passo - i.a)}
              modo="destacar"
              sumirDepoisDe={0}
            />
            <div className="text-3xl font-black">=</div>
            <div className="text-4xl font-black text-amber-300 min-w-[3rem] text-center">
              {terminou ? total : (contando ? numeroAtual : "?")}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center gap-1">
              <div className="text-xs font-bold uppercase tracking-wide text-white/50">Tinha {i.a}</div>
              <GrupoImgAnimado
                url={i.imagemUrl}
                n={i.a}
                destacadosAte={0}
                modo="sumir"
                sumirDepoisDe={passo}
              />
            </div>
            <div className="text-3xl font-black">{sinal}</div>
            <div className="min-w-[4.5rem] text-center">
              <div className="text-4xl font-black text-red-300">{contando || terminou ? passo : i.b}</div>
              <div className="text-[11px] font-bold uppercase tracking-wide text-white/50">tiradas de {i.b}</div>
            </div>
            <div className="text-3xl font-black">=</div>
            <div className="text-4xl font-black text-amber-300 min-w-[3rem] text-center">
              {terminou ? total : (contando ? numeroAtual : "?")}
            </div>
          </>
        )}
      </div>
      <div className="text-center text-sm text-white/60 mt-2">{i.itemPlural}</div>
      <div className="flex justify-center mt-4">
        {!contando && !terminou && (
          <button
            onClick={iniciar}
            className="px-6 py-3 rounded-xl bg-amber-400 text-slate-900 font-black text-lg hover:bg-amber-300 transition-colors"
          >
            {ehSoma ? "▶ Contar!" : "▶ Tirar!"}
          </button>
        )}
        {contando && (
          <div className="text-amber-300 font-bold text-lg animate-pulse">
            {ehSoma ? "Contando" : "Ficando"}: {numeroAtual}...
          </div>
        )}
        {terminou && (
          <button
            onClick={iniciar}
            className="px-4 py-2 rounded-lg bg-white/10 text-white/80 text-sm hover:bg-white/20"
          >
            {ehSoma ? "🔄 Contar de novo" : "🔄 Tirar de novo"}
          </button>
        )}
      </div>
    </div>
  );
}

function GrupoImgAnimado({
  url,
  n,
  destacadosAte,
  modo,
  sumirDepoisDe,
}: {
  url: string;
  n: number;
  destacadosAte: number;
  modo: "destacar" | "sumir";
  sumirDepoisDe: number;
}) {
  return (
    <div className="flex flex-wrap gap-1 max-w-[160px] justify-center">
      {Array.from({ length: n }).map((_, k) => {
        const contado = k < destacadosAte;
        const sumiu = modo === "sumir" && k < sumirDepoisDe;
        return (
          <span key={k} className="relative inline-flex w-9 h-9 items-center justify-center">
            <img
              src={url}
              alt=""
              className={
                "w-9 h-9 object-contain transition-all duration-1000 " +
                (sumiu
                  ? "opacity-15 grayscale scale-75"
                  : contado
                  ? "scale-110 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]"
                  : "opacity-60")
              }
            />
            {sumiu && (
              <span className="absolute left-1 right-1 top-1/2 h-1 -rotate-45 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.85)]" />
            )}
          </span>
        );
      })}
    </div>
  );
}

function GrupoImg({ url, n }: { url: string; n: number }) {
  return (
    <div className="flex flex-wrap gap-0.5 max-w-[140px] justify-center">
      {Array.from({ length: n }).map((_, k) => (
        <img key={k} src={url} alt="" className="w-8 h-8 object-contain" />
      ))}
    </div>
  );
}

function ContaArmadaEmpilhada({
  agrupamentos,
}: {
  agrupamentos: Array<{ tamanhoGrupo: number; qtdGrupos: number }>;
}) {
  // Expande em parcelas: [{10,x2},{3,x1}] → [10,10,3]
  const parcelas: number[] = [];
  agrupamentos.forEach((ag) => {
    for (let i = 0; i < ag.qtdGrupos; i++) parcelas.push(ag.tamanhoGrupo);
  });
  if (parcelas.length < 2) return null;
  const total = parcelas.reduce((a, b) => a + b, 0);
  const largura = String(total).length;
  const pad = (n: number) => String(n).padStart(largura, "\u00A0");
  return (
    <div className="rounded-2xl bg-white/95 text-[#0d1f55] p-3 border-2 border-amber-300/50 shrink-0">
      <div className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-2 text-center">
        Conta armada
      </div>
      <div className="font-mono text-2xl font-black leading-tight text-right tabular-nums px-2">
        {parcelas.map((p, i) => (
          <div key={i} className="flex items-center justify-end gap-2">
            <span className="text-amber-500 w-4">{i === parcelas.length - 1 ? "+" : "\u00A0"}</span>
            <span>
              {pad(p)
                .split("")
                .map((c, j) => (
                  <span key={j}>{c}</span>
                ))}
            </span>
          </div>
        ))}
        <div className="border-t-2 border-[#0d1f55] my-1 ml-6" />
        <div className="flex items-center justify-end gap-2 text-emerald-600">
          <span className="w-4">&nbsp;</span>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// Casas de valor posicional (3º ano em diante) — SEM frutas.
// =====================================================================

const NUM_EXTENSO: Record<number, string> = {
  0: "zero", 1: "um", 2: "dois", 3: "três", 4: "quatro", 5: "cinco",
  6: "seis", 7: "sete", 8: "oito", 9: "nove",
};

function CasasValor({
  numero,
  rotulos,
  mostrarDecomposicao = true,
  extenso,
}: {
  numero: number;
  rotulos?: { um?: string; c?: string; d?: string; u?: string };
  mostrarDecomposicao?: boolean;
  extenso?: string;
}) {
  const digitos = String(Math.abs(Math.trunc(numero))).padStart(4, "0").split("").map(Number);
  const [dUM, dC, dD, dU] = digitos;
  const casas: Array<{ chave: "um" | "c" | "d" | "u"; rot: string; peso: number; digito: number; cor: string }> = [
    { chave: "um", rot: rotulos?.um ?? "Milhar",  peso: 1000, digito: dUM, cor: "#f472b6" },
    { chave: "c",  rot: rotulos?.c  ?? "Centena", peso: 100,  digito: dC,  cor: "#fb923c" },
    { chave: "d",  rot: rotulos?.d  ?? "Dezena",  peso: 10,   digito: dD,  cor: "#22d3ee" },
    { chave: "u",  rot: rotulos?.u  ?? "Unidade", peso: 1,    digito: dU,  cor: "#34d399" },
  ];
  const casasVis = numero >= 1000 ? casas : casas.slice(1);

  return (
    <div className="mt-3 rounded-xl bg-white text-[#0d1f55] p-4 border-2 border-amber-300/40">
      <div className="text-[10px] uppercase tracking-widest font-black text-[#0d1f55]/60 mb-2">
        Valor posicional
      </div>
      <div className="flex justify-center gap-2 md:gap-4">
        {casasVis.map((c) => (
          <div key={c.chave} className="flex flex-col items-center">
            <div
              className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-t-md text-white"
              style={{ background: c.cor }}
            >
              {c.rot}
            </div>
            <div
              className="w-16 h-20 md:w-20 md:h-24 grid place-items-center border-4 rounded-b-lg font-black text-4xl md:text-5xl"
              style={{ borderColor: c.cor, color: c.cor }}
            >
              {c.digito}
            </div>
            <div className="text-[11px] font-bold mt-1 text-[#0d1f55]/70">
              vale {c.digito * c.peso}
            </div>
          </div>
        ))}
      </div>
      {mostrarDecomposicao && (
        <div className="text-center mt-4 font-black text-lg md:text-xl">
          {casasVis
            .filter((c) => c.digito > 0)
            .map((c) => c.digito * c.peso)
            .join(" + ") || "0"}{" "}
          = <span className="text-amber-600">{numero}</span>
        </div>
      )}
      {extenso && (
        <div className="text-center text-sm mt-1 text-[#0d1f55]/80 italic">
          "{extenso}"
        </div>
      )}
    </div>
  );
}

// =====================================================================
// Conta escrita passo a passo — ALGORITMO REAL.
// Do 3º ano ao Ensino Médio. Substitui a contagem infantil.
// =====================================================================

function ContaPassoAPasso({ i }: { i: Extract<Interacao, { tipo: "contaPassoAPasso" }> }) {
  const [passoAtual, setPassoAtual] = useState(-1); // -1 = ainda não começou
  const [resposta, setResposta] = useState<number | null>(null);
  const [confirmado, setConfirmado] = useState(false);

  const totalPassos = i.passos.length;
  const terminou = passoAtual >= totalPassos - 1;
  const modo = i.modo ?? "explicacao";

  // Lê em voz alta a narração do passo atual, parte por parte, sempre que
  // o passo muda — assim a criança ouve cada etapa até a conta terminar.
  useEffect(() => {
    if (passoAtual < 0) return;
    const p = i.passos[passoAtual];
    if (!p) return;
    const texto = `Passo ${passoAtual + 1} de ${totalPassos}. ${p.fala}${
      p.porque ? ` Por quê? ${p.porque}` : ""
    }`;
    stopSpeaking();
    const t = window.setTimeout(() => speakChunked(texto, { rate: 0.82 }), 120);
    return () => window.clearTimeout(t);
  }, [passoAtual, i.passos, totalPassos]);

  useEffect(() => () => stopSpeaking(), []);

  // Determina colunas visíveis (U, D, C, UM se algum operando ≥ 1000)
  const maxNum = Math.max(...i.operandos, i.resultado);
  const numCols = maxNum >= 1000 ? 4 : maxNum >= 100 ? 3 : 2;
  const COL_ORDEM: Array<"UM" | "C" | "D" | "U"> = ["UM", "C", "D", "U"];
  const colunas = COL_ORDEM.slice(4 - numCols);

  const opSimbolo = i.operacao === "soma" ? "+" : i.operacao === "sub" ? "−" : "×";

  function digitoDe(n: number, coluna: "UM" | "C" | "D" | "U") {
    const s = String(Math.abs(n)).padStart(4, "0");
    return { UM: s[0], C: s[1], D: s[2], U: s[3] }[coluna];
  }

  // Passos revelados até agora — mapa coluna → dígito do resultado
  const digitosResultado: Record<string, { digito: number; vaiUm?: number }> = {};
  i.passos.slice(0, passoAtual + 1).forEach((p) => {
    digitosResultado[p.coluna] = { digito: p.digito, vaiUm: p.vaiUm };
  });

  // Opções para modo prática
  const opcoes = i.opcoes ?? [
    i.resultado,
    i.resultado + 10,
    i.resultado - 10,
  ].filter((n) => n >= 0);

  function reset() {
    setPassoAtual(-1);
    setResposta(null);
    setConfirmado(false);
  }

  return (
    <div className="mt-3 rounded-xl bg-white text-[#0d1f55] p-4 md:p-6 border-2 border-amber-300/40">
      <div className="text-[10px] uppercase tracking-widest font-black text-[#0d1f55]/60 mb-3">
        Conta escrita · passo a passo
      </div>

      {/* Grelha da conta armada */}
      <div className="flex justify-center">
        <div
          className="grid gap-x-2 md:gap-x-4 gap-y-1 font-mono font-black text-3xl md:text-5xl"
          style={{ gridTemplateColumns: `2rem repeat(${numCols}, minmax(2.5rem, 3.5rem))` }}
        >
          {/* Linha de "vai 1" */}
          <div />
          {colunas.map((c) => {
            const v = digitosResultado[c]?.vaiUm;
            return (
              <div key={"v-" + c} className="text-center text-sm md:text-base text-rose-500">
                {v ? v : ""}
              </div>
            );
          })}

          {/* Operandos */}
          {i.operandos.map((op, opIdx) => (
            <Fragment key={"opRow-" + opIdx}>
              <div className="text-right pr-1 text-[#0d1f55]/60">
                {opIdx === i.operandos.length - 1 ? opSimbolo : ""}
              </div>
              {colunas.map((c) => (
                <div key={`op-${opIdx}-${c}`} className="text-center">
                  {digitoDe(op, c) === "0" && op < Math.pow(10, colunas.length - colunas.indexOf(c) - 1)
                    ? ""
                    : digitoDe(op, c)}
                </div>
              ))}
            </Fragment>
          ))}

          {/* Linha do resultado */}
          <div />
          {colunas.map((c) => (
            <div key={"line-" + c} className="border-t-4 border-[#0d1f55] h-2" />
          ))}
          <div />
          {colunas.map((c) => {
            const d = digitosResultado[c];
            return (
              <div key={"r-" + c} className="text-center text-emerald-600">
                {d != null ? d.digito : passoAtual >= 0 ? "·" : "?"}
              </div>
            );
          })}
        </div>
      </div>

      {/* Narração do passo atual */}
      <div className="mt-5 min-h-[3.5rem] rounded-lg bg-amber-50 border-l-4 border-amber-500 p-3">
        {passoAtual < 0 && (
          <div className="text-sm md:text-base">
            <span className="font-black text-amber-700">🧠 Brilha:</span>{" "}
            Vamos armar a conta. Alinhamos unidade com unidade, dezena com dezena. Toque em "Próximo passo" quando quiser começar.
          </div>
        )}
        {passoAtual >= 0 && (
          <div className="text-sm md:text-base">
            <span className="font-black text-amber-700">
              Passo {passoAtual + 1}/{totalPassos}:
            </span>{" "}
            {i.passos[passoAtual].fala}
            {i.passos[passoAtual].porque && (
              <div className="text-xs text-[#0d1f55]/70 mt-1 italic">
                Por quê? {i.passos[passoAtual].porque}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Botão avançar */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        {!terminou && (
          <button
            onClick={() => setPassoAtual((p) => Math.min(p + 1, totalPassos - 1))}
            className="px-5 py-3 rounded-xl bg-amber-500 text-white font-black hover:bg-amber-400"
          >
            {passoAtual < 0 ? "▶️ Começar" : "→ Próximo passo"}
          </button>
        )}
        {terminou && modo === "explicacao" && (
          <div className="text-lg font-black text-emerald-700">
            ✅ Resultado: {i.resultado}
          </div>
        )}
        {terminou && !confirmado && (
          <button
            onClick={reset}
            className="text-xs text-[#0d1f55]/50 hover:text-[#0d1f55] underline"
          >
            ↺ Rever passos
          </button>
        )}
      </div>

      {/* Modo prática: pergunta final */}
      {terminou && modo === "pratica" && (
        <div className="mt-4 border-t border-[#0d1f55]/10 pt-4">
          <div className="text-sm font-bold mb-2">
            {i.perguntaFinal ?? "Qual é o resultado?"}
          </div>
          <div className="flex flex-wrap gap-2">
            {opcoes.map((n) => (
              <button
                key={n}
                onClick={() => {
                  setResposta(n);
                  setConfirmado(true);
                }}
                disabled={confirmado}
                className={`px-4 py-2 rounded-lg font-black border-2 ${
                  confirmado
                    ? n === i.resultado
                      ? "bg-emerald-500 text-white border-emerald-600"
                      : n === resposta
                      ? "bg-rose-500 text-white border-rose-600"
                      : "bg-white/60 text-[#0d1f55]/40 border-[#0d1f55]/10"
                    : "bg-white text-[#0d1f55] border-[#0d1f55]/20 hover:border-amber-400"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          {confirmado && (
            <div
              className={`mt-3 p-3 rounded-lg text-sm ${
                resposta === i.resultado ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"
              }`}
            >
              {resposta === i.resultado
                ? i.feedbackAcerto ?? "🎉 Perfeito! O algoritmo levou você direto ao resultado."
                : i.feedbackErro ?? `Não foi dessa vez. O resultado é ${i.resultado}. Refaça os passos com calma.`}
            </div>
          )}
        </div>
      )}

      {i.metodologia && metodologia(i.metodologia) && (
        <div className="mt-4 text-[10px] uppercase tracking-widest font-bold text-[#0d1f55]/50">
          Base: {metodologia(i.metodologia)!.nome}
        </div>
      )}
    </div>
  );
}

// =====================================================================
// Rodapé "Base científica" — metodologias declaradas pela aula.
// =====================================================================

export function RodapeMetodologias({ chaves }: { chaves?: string[] }) {
  if (!chaves?.length) return null;
  const items = chaves.map((k) => METODOLOGIAS_MAT[k]).filter(Boolean);
  if (!items.length) return null;

  return (
    <section className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-4 md:p-6">
      <div className="text-[10px] uppercase tracking-widest font-black text-amber-300 mb-3">
        📚 Base científica desta aula
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {items.map((m, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/5 border-l-4 p-3"
            style={{ borderColor: m.cor }}
          >
            <div className="font-black text-sm" style={{ color: m.cor }}>
              {m.nome}
            </div>
            <div className="text-xs text-white/70 mt-1">{m.descricao}</div>
            <div className="text-[10px] text-white/40 mt-1 italic">{m.autores}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

