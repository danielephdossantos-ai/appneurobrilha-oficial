import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { AulaV4, Interacao } from "../types";

/**
 * Player v4.1 — Escola Brilha
 * ----------------------------
 * Renderiza os 11 momentos pedagógicos em sequência linear.
 * Este é o esqueleto funcional: cada momento tem sua tela; a criança
 * avança tocando em "Continuar". Interações mais ricas (arrastar, tap
 * contar visual etc.) serão plugadas conforme cada aula for escrita.
 */

type Props = {
  aula: AulaV4;
  cursoSlug: string;
  /** Rota para voltar (ex.: trilha do curso). */
  voltarPara: string;
  /** Chamado quando aluno conclui todos os 11 momentos. */
  onConcluir?: () => void;
};

const NOMES: Record<number, string> = {
  1: "🎬 Motivação",
  2: "👀 Exploração",
  3: "💡 Descoberta",
  4: "📖 Explicação",
  5: "🧠 Eu faço (Brilha resolve)",
  6: "🤝 Nós fazemos",
  7: "💪 Você faz",
  8: "🌎 Na vida real",
  9: "🔁 Revisão",
  10: "✅ Vamos ver o que aprendeu",
  11: "🏠 Missão em Família",
};

export function PlayerV4({ aula, cursoSlug, voltarPara, onConcluir }: Props) {
  const [passo, setPasso] = useState(1);

  const total = 11;
  const proximo = () => {
    if (passo < total) setPasso(passo + 1);
    else onConcluir?.();
  };
  const anterior = () => passo > 1 && setPasso(passo - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1f55] to-[#1e3a8a] text-white">
      <header className="sticky top-0 z-10 bg-[#0d1f55]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/escola-brilha/curso/$slug"
            params={{ slug: cursoSlug }}
            className="text-sm text-white/70 hover:text-white"
          >
            ← Trilha
          </Link>
          <div className="flex-1">
            <div className="text-xs text-white/60">
              {aula.titulo} · Passo {passo} de {total}
            </div>
            <div className="h-1.5 bg-white/10 rounded-full mt-1 overflow-hidden">
              <div
                className="h-full bg-amber-400 transition-all"
                style={{ width: `${(passo / total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="text-xs uppercase tracking-wider text-amber-300 mb-2">
          {NOMES[passo]}
        </div>

        {passo === 1 && <Motivacao m={aula.momento01_motivacao} />}
        {passo === 2 && <Exploracao m={aula.momento02_exploracao} />}
        {passo === 3 && <Descoberta m={aula.momento03_descoberta} />}
        {passo === 4 && <Explicacao m={aula.momento04_explicacao} />}
        {passo === 5 && <Modelagem m={aula.momento05_modelagem} />}
        {passo === 6 && <PraticaGuiada m={aula.momento06_praticaGuiada} />}
        {passo === 7 && <PraticaIndep m={aula.momento07_praticaIndependente} />}
        {passo === 8 && <Aplicacao m={aula.momento08_aplicacao} />}
        {passo === 9 && <Revisao m={aula.momento09_revisao} />}
        {passo === 10 && <Avaliacao m={aula.momento10_avaliacao} />}
        {passo === 11 && <MissaoFamilia m={aula.momento11_missaoFamilia} />}

        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={anterior}
            disabled={passo === 1}
            className="px-4 py-2 rounded-lg bg-white/10 disabled:opacity-30"
          >
            ← Voltar
          </button>
          <button
            onClick={proximo}
            className="px-6 py-3 rounded-lg bg-amber-400 text-[#0d1f55] font-bold hover:bg-amber-300"
          >
            {passo === total ? "Concluir 🎉" : "Continuar →"}
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link
            to={voltarPara}
            className="text-xs text-white/50 hover:text-white/80"
          >
            Sair para a trilha
          </Link>
        </div>
      </main>
    </div>
  );
}

// ---------- Momentos (renderers mínimos, iteramos depois) ------------

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
              {e.imagemUrl && <img src={e.imagemUrl} alt="" className="w-32 mt-2" />}
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}

function Modelagem({ m }: { m: AulaV4["momento05_modelagem"] }) {
  return (
    <Card>
      <div className="text-sm text-amber-300">🧠 Brilha pensa em voz alta:</div>
      <div className="text-lg font-medium">{m.enunciado}</div>
      {m.visualUrl && <img src={m.visualUrl} alt="" className="w-40 mx-auto" />}
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
  return (
    <Card>
      <div className="text-sm text-amber-300">✅ Mostra o que aprendeu:</div>
      {m.perguntas.map((q, qi) => (
        <div key={qi} className="border-t border-white/10 pt-4">
          <div className="font-medium mb-3">
            {qi + 1}. {q.pergunta}
          </div>
          {q.visualUrl && <img src={q.visualUrl} alt="" className="w-40 mb-3" />}
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
      ))}
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
  return (
    <div className="bg-white/5 rounded-xl p-4 mt-3 text-xs text-white/50">
      Interação "{i.tipo}" ainda sem renderer.
    </div>
  );
}

function TapContar({ i }: { i: Extract<Interacao, { tipo: "tapContar" }> }) {
  const [tocadas, setTocadas] = useState<Set<number>>(new Set());
  return (
    <div className="mt-3 bg-white/5 rounded-xl p-4">
      <div className="text-sm mb-3">{i.pergunta ?? `Toque em cada ${i.itemPlural}:`}</div>
      <div className="flex flex-wrap gap-2 justify-center">
        {Array.from({ length: i.quantidade }).map((_, k) => {
          const tocada = tocadas.has(k);
          return (
            <button
              key={k}
              onClick={() =>
                setTocadas((s) => {
                  const n = new Set(s);
                  n.add(k);
                  return n;
                })
              }
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
    </div>
  );
}

function ContarQuiz({ i }: { i: Extract<Interacao, { tipo: "contarQuiz" }> }) {
  const [escolha, setEscolha] = useState<number | null>(null);
  return (
    <div className="mt-3 bg-white/5 rounded-xl p-4 space-y-4">
      {i.grupos.map((g, gi) => (
        <div key={gi}>
          {g.rotulo && <div className="text-xs text-white/60 mb-1">{g.rotulo}</div>}
          <div className="flex flex-wrap gap-1 justify-center">
            {Array.from({ length: g.quantidade }).map((_, k) => (
              <img key={k} src={g.imagemUrl} alt="" className="w-10 h-10 object-contain" />
            ))}
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
              <img src={op.imagemUrl} alt={op.nome} className="w-16 h-16 object-contain" />
              <span className="text-xs font-medium text-center leading-tight">
                {op.nome}
              </span>
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
  const total = i.operacao === "soma" ? i.a + i.b : Math.max(0, i.a - i.b);
  const sinal = i.operacao === "soma" ? "+" : "−";
  return (
    <div className="mt-3 bg-white/5 rounded-xl p-4">
      {i.legenda && <div className="text-sm text-white/70 mb-3 text-center">{i.legenda}</div>}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <GrupoImg url={i.imagemUrl} n={i.a} />
        <div className="text-3xl font-black">{sinal}</div>
        <GrupoImg url={i.imagemUrl} n={i.b} />
        <div className="text-3xl font-black">=</div>
        <div className="text-3xl font-black text-amber-300">{total}</div>
      </div>
      <div className="text-center text-sm text-white/60 mt-2">{i.itemPlural}</div>
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
