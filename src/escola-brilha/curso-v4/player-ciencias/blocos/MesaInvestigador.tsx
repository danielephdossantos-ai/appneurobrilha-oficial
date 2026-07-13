import { useMemo, useState } from "react";

/**
 * MesaInvestigador — experimento ATIVO de laboratório para Ciências 2º ano.
 *
 * A criança VIVE o método científico em 5 etapas:
 *   1. ESCOLHER  → pega um objeto na mesa (folha, pedra, pena...)
 *   2. OBSERVAR  → toca em 4 ferramentas/sentidos (👁 🖐 👃 🔍) e VÊ
 *                  cada descoberta aparecer no caderno em tempo real.
 *   3. PERGUNTAR → escolhe UMA boa pergunta científica entre 3 opções.
 *   4. REGISTRAR → seleciona 3 características verdadeiras num campo de chips.
 *   5. CONCLUIR  → Aurora dá o feedback e o objeto vira "amostra registrada".
 *
 * Nada só de ler: cada botão muda o estado, o caderno se enche e o Brilha
 * comemora quando o cientista completa a investigação.
 */

export type MesaInvestigadorObjeto = {
  id: string;
  nome: string;
  imagemUrl: string;
  descobertas: {
    ver: string;
    tocar: string;
    cheirar: string;
    lupa: string;
  };
  perguntaCerta: string;
  perguntasFalsas: string[];
  caracteristicasCertas: string[]; // >= 3
  caracteristicasFalsas: string[]; // 2-3 pegadinhas
  conclusao: string;
};

export type MesaInvestigadorData = {
  intro: string;
  aurora: string; // fala inicial
  objetos: MesaInvestigadorObjeto[];
  feedbackFinal: string;
};

type Etapa = "escolher" | "observar" | "perguntar" | "registrar" | "concluido";

const FERRAMENTAS = [
  { id: "ver", icone: "👁", label: "Ver", cor: "from-sky-400 to-cyan-500" },
  { id: "tocar", icone: "🖐", label: "Tocar", cor: "from-amber-400 to-orange-500" },
  { id: "cheirar", icone: "👃", label: "Cheirar", cor: "from-fuchsia-400 to-pink-500" },
  { id: "lupa", icone: "🔍", label: "Lupa", cor: "from-lime-300 to-emerald-500" },
] as const;

type FerramentaId = (typeof FERRAMENTAS)[number]["id"];

export function MesaInvestigador({ data }: { data: MesaInvestigadorData }) {
  const [etapa, setEtapa] = useState<Etapa>("escolher");
  const [objetoId, setObjetoId] = useState<string | null>(null);
  const [usadas, setUsadas] = useState<Set<FerramentaId>>(new Set());
  const [perguntaEscolhida, setPerguntaEscolhida] = useState<string | null>(null);
  const [erroPergunta, setErroPergunta] = useState(false);
  const [marcadas, setMarcadas] = useState<Set<string>>(new Set());
  const [conferiuChips, setConferiuChips] = useState(false);

  const objeto = useMemo(
    () => data.objetos.find((o) => o.id === objetoId) ?? null,
    [data.objetos, objetoId],
  );

  const escolherObjeto = (id: string) => {
    setObjetoId(id);
    setUsadas(new Set());
    setEtapa("observar");
  };

  const usarFerramenta = (f: FerramentaId) => {
    setUsadas((prev) => {
      const cp = new Set(prev);
      cp.add(f);
      return cp;
    });
  };

  const escolherPergunta = (p: string) => {
    if (!objeto) return;
    setPerguntaEscolhida(p);
    if (p === objeto.perguntaCerta) {
      setErroPergunta(false);
      setTimeout(() => setEtapa("registrar"), 700);
    } else {
      setErroPergunta(true);
    }
  };

  const toggleChip = (chip: string) => {
    setMarcadas((prev) => {
      const cp = new Set(prev);
      if (cp.has(chip)) cp.delete(chip);
      else cp.add(chip);
      return cp;
    });
    setConferiuChips(false);
  };

  const conferirChips = () => {
    if (!objeto) return;
    setConferiuChips(true);
    const certas = objeto.caracteristicasCertas.filter((c) => marcadas.has(c)).length;
    const erros = objeto.caracteristicasFalsas.filter((c) => marcadas.has(c)).length;
    if (certas >= 3 && erros === 0) {
      setTimeout(() => setEtapa("concluido"), 900);
    }
  };

  const reiniciar = () => {
    setEtapa("escolher");
    setObjetoId(null);
    setUsadas(new Set());
    setPerguntaEscolhida(null);
    setErroPergunta(false);
    setMarcadas(new Set());
    setConferiuChips(false);
  };

  return (
    <div className="rounded-2xl bg-[#0d0524]/70 border border-lime-300/30 p-4 md:p-5 space-y-4">
      {/* Header do experimento */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-lime-300 bg-lime-300/10 border border-lime-300/40 px-2 py-0.5 rounded">
            🔬 Mesa do investigador
          </span>
          <span className="text-[10px] font-mono text-violet-200/60">
            Etapa {etapaNum(etapa)} de 5
          </span>
        </div>
        {etapa !== "escolher" && (
          <button
            onClick={reiniciar}
            className="text-[11px] font-mono text-violet-200/70 hover:text-white underline underline-offset-2"
          >
            ↻ recomeçar
          </button>
        )}
      </div>

      <p className="text-sm text-violet-100/85 italic border-l-2 border-lime-300/50 pl-3">
        {data.intro}
      </p>

      {/* Aurora balão */}
      <div className="flex items-start gap-2">
        <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-fuchsia-400 to-violet-600 grid place-items-center text-lg">
          👩‍🔬
        </div>
        <div className="flex-1 bg-violet-500/15 border border-violet-300/25 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-violet-50">
          <span className="text-lime-300 font-bold">Aurora:</span>{" "}
          {etapa === "escolher"
            ? data.aurora
            : etapa === "observar"
              ? "Ótimo! Agora INVESTIGA com os sentidos. Toca em cada ferramenta pra descobrir algo novo."
              : etapa === "perguntar"
                ? "Bom cientista faz PERGUNTAS boas. Qual dessas serve pra investigar de verdade?"
                : etapa === "registrar"
                  ? "Agora REGISTRA no caderno! Marca 3 características VERDADEIRAS do objeto."
                  : (objeto?.conclusao ?? data.feedbackFinal)}
        </div>
      </div>

      {/* Etapa 1 — escolher */}
      {etapa === "escolher" && (
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {data.objetos.map((o) => (
            <button
              key={o.id}
              onClick={() => escolherObjeto(o.id)}
              className="group relative aspect-square rounded-2xl bg-violet-500/10 border-2 border-violet-300/30 hover:border-lime-300 hover:bg-lime-300/10 transition p-2 flex flex-col items-center justify-center gap-1"
            >
              <img
                src={o.imagemUrl}
                alt={o.nome}
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow group-hover:scale-110 transition-transform"
              />
              <div className="text-[11px] md:text-xs font-mono font-bold text-violet-50 uppercase tracking-wide">
                {o.nome}
              </div>
              <div className="text-[9px] font-mono text-lime-300/80">
                escolher →
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Etapa 2 — observar (ferramentas + caderno vivo) */}
      {etapa === "observar" && objeto && (
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-xl bg-violet-500/10 border border-violet-300/25 p-3">
            <img src={objeto.imagemUrl} alt="" className="w-16 h-16 object-contain" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-lime-300">
                Amostra ativa
              </div>
              <div className="text-base font-black text-white">{objeto.nome}</div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {FERRAMENTAS.map((f) => {
              const ativa = usadas.has(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() => usarFerramenta(f.id)}
                  className={`aspect-square rounded-xl border-2 transition flex flex-col items-center justify-center gap-0.5 ${
                    ativa
                      ? "bg-lime-300/20 border-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.35)]"
                      : `bg-gradient-to-br ${f.cor} border-white/20 hover:brightness-110`
                  }`}
                >
                  <span className="text-2xl">{f.icone}</span>
                  <span className="text-[10px] font-mono font-bold text-white uppercase">
                    {f.label}
                  </span>
                  {ativa && <span className="text-[9px] text-lime-200">✓ usada</span>}
                </button>
              );
            })}
          </div>

          {/* Caderno científico "vivo" */}
          <div className="rounded-xl bg-[#0d0524]/70 border border-violet-300/25 p-3 font-mono text-xs min-h-[120px]">
            <div className="text-[10px] uppercase tracking-[0.25em] text-lime-300 mb-2 flex items-center justify-between">
              <span>📓 Caderno de descobertas</span>
              <span className="text-violet-200/60">
                {usadas.size}/4
              </span>
            </div>
            {usadas.size === 0 && (
              <div className="text-violet-200/50 italic">
                Toque numa ferramenta acima pra começar a INVESTIGAR…
              </div>
            )}
            <ul className="space-y-1.5">
              {FERRAMENTAS.filter((f) => usadas.has(f.id)).map((f) => (
                <li
                  key={f.id}
                  className="flex items-start gap-2 text-violet-50 animate-in fade-in slide-in-from-left-2 duration-300"
                >
                  <span className="text-lime-300">{f.icone}</span>
                  <span>
                    <span className="text-lime-200 font-bold">
                      {f.label.toUpperCase()}:{" "}
                    </span>
                    {objeto.descobertas[f.id]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button
            disabled={usadas.size < 3}
            onClick={() => setEtapa("perguntar")}
            className="w-full py-3 rounded-xl bg-lime-300 text-[#17093a] font-black text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-lime-200"
          >
            {usadas.size < 3
              ? `Use pelo menos ${3 - usadas.size} ferramenta${3 - usadas.size > 1 ? "s" : ""} a mais →`
              : "🔮 Fazer uma pergunta científica →"}
          </button>
        </div>
      )}

      {/* Etapa 3 — perguntar */}
      {etapa === "perguntar" && objeto && (
        <div className="space-y-2">
          <div className="text-sm font-bold text-white">
            Sobre a sua amostra ({objeto.nome}), qual pergunta um cientista faria?
          </div>
          {[objeto.perguntaCerta, ...objeto.perguntasFalsas]
            .sort((a, b) => a.length - b.length)
            .map((p) => {
              const escolhida = perguntaEscolhida === p;
              const correta = p === objeto.perguntaCerta;
              const cor = !escolhida
                ? "bg-violet-500/10 border-violet-300/30 hover:border-lime-300"
                : correta
                  ? "bg-emerald-500/25 border-emerald-300"
                  : "bg-rose-500/25 border-rose-300";
              return (
                <button
                  key={p}
                  onClick={() => escolherPergunta(p)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl border-2 transition text-sm text-violet-50 ${cor}`}
                >
                  <span className="text-lime-300 mr-1">🔮</span> {p}
                  {escolhida && correta && (
                    <span className="ml-2 text-[10px] font-mono text-emerald-200">✓ boa pergunta!</span>
                  )}
                  {escolhida && !correta && (
                    <span className="ml-2 text-[10px] font-mono text-rose-200">
                      isso não se investiga com esse objeto
                    </span>
                  )}
                </button>
              );
            })}
          {erroPergunta && (
            <div className="text-xs text-rose-200 italic">
              Tenta outra! Pergunta científica é sobre o que dá pra observar e testar.
            </div>
          )}
        </div>
      )}

      {/* Etapa 4 — registrar */}
      {etapa === "registrar" && objeto && (
        <div className="space-y-3">
          <div className="text-sm font-bold text-white">
            Marque 3 características VERDADEIRAS de {objeto.nome}:
          </div>
          <div className="flex flex-wrap gap-2">
            {shuffleStable(
              [
                ...objeto.caracteristicasCertas.map((c) => ({ c, ok: true })),
                ...objeto.caracteristicasFalsas.map((c) => ({ c, ok: false })),
              ],
              objeto.id,
            ).map(({ c, ok }) => {
              const marcada = marcadas.has(c);
              const cor = !conferiuChips
                ? marcada
                  ? "bg-lime-300 text-[#17093a] border-lime-300"
                  : "bg-violet-500/10 text-violet-50 border-violet-300/30 hover:border-lime-300"
                : marcada && ok
                  ? "bg-emerald-400 text-[#17093a] border-emerald-300"
                  : marcada && !ok
                    ? "bg-rose-400 text-[#17093a] border-rose-300 line-through"
                    : ok
                      ? "bg-emerald-500/20 text-emerald-100 border-emerald-300/40"
                      : "bg-violet-500/10 text-violet-200/60 border-violet-300/20";
              return (
                <button
                  key={c}
                  onClick={() => toggleChip(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 transition ${cor}`}
                >
                  {marcada ? "✓ " : "+ "}
                  {c}
                </button>
              );
            })}
          </div>

          <div className="rounded-xl bg-[#0d0524]/70 border border-violet-300/25 p-3 font-mono text-xs">
            <div className="text-[10px] uppercase tracking-[0.25em] text-lime-300 mb-2">
              📓 Registro final — {objeto.nome}
            </div>
            {marcadas.size === 0 ? (
              <div className="text-violet-200/50 italic">
                Toca em cada característica que você observou…
              </div>
            ) : (
              <ul className="space-y-1">
                {[...marcadas].map((m) => (
                  <li key={m} className="text-violet-50">
                    <span className="text-lime-300">▸</span> {m}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            disabled={marcadas.size === 0}
            onClick={conferirChips}
            className="w-full py-3 rounded-xl bg-lime-300 text-[#17093a] font-black text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-lime-200"
          >
            ✍ Conferir registro
          </button>

          {conferiuChips && (
            <div
              className={`text-xs italic px-3 py-2 rounded-lg ${
                objeto.caracteristicasCertas.filter((c) => marcadas.has(c)).length >= 3 &&
                objeto.caracteristicasFalsas.filter((c) => marcadas.has(c)).length === 0
                  ? "bg-emerald-500/20 text-emerald-100"
                  : "bg-rose-500/20 text-rose-100"
              }`}
            >
              {objeto.caracteristicasCertas.filter((c) => marcadas.has(c)).length >= 3 &&
              objeto.caracteristicasFalsas.filter((c) => marcadas.has(c)).length === 0
                ? "🎉 Registro perfeito! Você observou como um cientista."
                : "Ainda não! Tira as pegadinhas (as vermelhas) e marca só o que é verdade."}
            </div>
          )}
        </div>
      )}

      {/* Etapa 5 — concluido */}
      {etapa === "concluido" && objeto && (
        <div className="space-y-3 text-center">
          <div className="mx-auto w-24 h-24 rounded-2xl bg-lime-300/15 border-2 border-lime-300 grid place-items-center shadow-[0_0_28px_rgba(190,242,100,0.4)]">
            <img src={objeto.imagemUrl} alt="" className="w-20 h-20 object-contain" />
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-lime-300">
            ✓ Amostra registrada
          </div>
          <div className="text-lg font-black text-white">
            {objeto.nome} — INVESTIGAÇÃO CONCLUÍDA
          </div>
          <div className="text-sm text-violet-50/90 max-w-md mx-auto">
            {data.feedbackFinal}
          </div>
          <button
            onClick={reiniciar}
            className="mt-2 px-4 py-2 rounded-lg bg-violet-500/20 border border-violet-300/30 text-xs font-mono text-violet-100 hover:bg-violet-500/30"
          >
            🔁 Investigar outra amostra
          </button>
        </div>
      )}
    </div>
  );
}

function etapaNum(e: Etapa): number {
  return { escolher: 1, observar: 2, perguntar: 3, registrar: 4, concluido: 5 }[e];
}

/** Embaralha estável por seed (id do objeto) para não trocar a cada render. */
function shuffleStable<T>(arr: T[], seed: string): T[] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return [...arr]
    .map((item, i) => ({ item, k: ((h + i * 2654435761) >>> 0) % 100000 }))
    .sort((a, b) => a.k - b.k)
    .map((x) => x.item);
}
