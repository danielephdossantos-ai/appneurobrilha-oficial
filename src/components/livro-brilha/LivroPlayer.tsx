import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

import { useNarracao } from "@/hooks/use-narracao-livro";
import { InteractiveScene } from "./InteractiveScene";
import { NarrationPlayer } from "./NarrationPlayer";
import { ChoiceGame, FindGameLayer, FindGamePanel, MemoryGame, SequenceGame, SyllableGame, TheaterActivity } from "./jogos";
import { imagem, tocarSom, vozes } from "./midia";
import type { Cena, Livro } from "./tipos";

type Etapa = "explorar" | "ensinar" | "jogo" | "feito";
type Final = null | "aprendemos" | "desafio" | "parabens";

function salvarProgresso(id: string, dados: object) {
  try {
    const todos = JSON.parse(localStorage.getItem("nb-progresso") ?? "{}");
    todos[id] = { ...todos[id], ...dados, atualizado: new Date().toISOString() };
    localStorage.setItem("nb-progresso", JSON.stringify(todos));
  } catch { /* armazenamento indisponível */ }
}

const btnBarra = "flex min-w-[76px] flex-col items-center gap-0.5 rounded-2xl px-3 py-2 font-display text-sm font-bold text-ink active:animate-b-tap disabled:opacity-35";

export function LivroPlayer({ livro }: { livro: Livro }) {
  const { falar, parar, pausar, continuar, falando, pausado } = useNarracao();
  const [indice, setIndice] = useState(0);
  const [etapa, setEtapa] = useState<Etapa>("explorar");
  const [passoEnsino, setPassoEnsino] = useState(0);
  const [tocados, setTocados] = useState<string[]>([]);
  const [charAtual, setCharAtual] = useState(-1);
  const [achados, setAchados] = useState<number[]>([]);
  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [final, setFinal] = useState<Final>(null);
  const [verFicha, setVerFicha] = useState(false);

  const cena: Cena = livro.cenas[indice] ?? livro.cenas[0]!;
  const protagonista = livro.cenas.flatMap((item) => item.atores).find((ator) => imagem(ator.img, "alegre"))?.img;

  const narrar = useCallback(() => {
    falar(cena.narracao, { ...vozes.narrador, onPalavra: setCharAtual });
  }, [cena, falar]);

  useEffect(() => {
    const t = setTimeout(narrar, 400);
    return () => clearTimeout(t);
  }, [narrar]);
  useEffect(() => () => parar(), [parar]);

  const irPara = (i: number) => {
    parar();
    setCharAtual(-1);
    setEtapa("explorar");
    setPassoEnsino(0);
    setTocados([]);
    setAchados([]);
    if (i >= livro.cenas.length) { setFinal("aprendemos"); return; }
    setIndice(Math.max(0, i));
  };

  const concluir = (tent: number) => {
    setEtapa("feito");
    setRespostas((r) => {
      const n = { ...r, [indice]: tent };
      salvarProgresso(livro.id, { cenaAtual: indice + 1, respostas: n });
      return n;
    });
  };

  const brincar = () => {
    parar();
    if (cena.ensinar?.length) { setEtapa("ensinar"); setPassoEnsino(0); falar(cena.ensinar[0]!, { ...vozes.narrador, rate: 0.75 }); }
    else if (cena.jogo) setEtapa("jogo");
    else setEtapa("feito");
  };

  const proximoEnsino = () => {
    const n = passoEnsino + 1;
    if (cena.ensinar && n < cena.ensinar.length) { setPassoEnsino(n); falar(cena.ensinar[n]!, { ...vozes.narrador, rate: 0.75 }); }
    else setEtapa(cena.jogo ? "jogo" : "feito");
  };

  const acharFlor = (i: number) => {
    if (achados.includes(i) || cena.jogo?.tipo !== "encontre") return;
    const n = [...achados, i];
    setAchados(n);
    tocarSom("toque");
    falar(["Uma!", "Duas!", "Três!"][n.length - 1] ?? "");
    if (n.length === cena.jogo.posicoes.length) {
      const msg = cena.jogo.acerto;
      setTimeout(() => { tocarSom("acerto"); falar(msg); concluir(1); }, 900);
    }
  };

  const ajuda = () => {
    const msg =
      etapa === "explorar" ? "Toque nos personagens e nas palavras coloridas. Depois aperte Brincar!"
      : etapa === "ensinar" ? "Escute com atenção e aperte Entendi."
      : etapa === "jogo" ? "Escute a pergunta de novo e tente. Se errar, eu dou uma pista!"
      : "Muito bem! Aperte Avançar para continuar a história.";
    falar(msg, vozes.narrador);
  };

  const palavraTocada = (p: string, sil: string[]) => {
    tocarSom("toque");
    falar(`${p}. ${sil.join("... ")}. ${p}!`, { ...vozes.narrador, rate: 0.7 });
  };

  // ---------- Final ----------
  if (final) {
    const extras = Object.values(respostas).reduce((s, t) => s + Math.max(0, t - 1), 0);
    const estrelas = extras <= 3 ? 3 : extras <= 7 ? 2 : 1;
    return (
      <div className="rounded-[36px] bg-white/65 p-5 ring-1 ring-black/5 backdrop-blur-xl sm:p-8">
        {final === "aprendemos" && (
          <div className="animate-rise">
            <h2 className="font-display text-4xl font-bold text-ink">O que aprendemos?</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {livro.aprendemos.map((a) => (
                <button key={a.titulo} onClick={() => falar(`${a.titulo}: ${a.itens.join(", ")}`)} className="rounded-3xl bg-card p-5 text-left ring-1 ring-line active:animate-b-tap">
                  <p className="text-sm font-bold uppercase tracking-wide text-peach">{a.titulo}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {a.itens.map((i) => <span key={i} className="rounded-full bg-butter/25 px-3 py-1 font-display text-lg font-semibold text-ink">{i}</span>)}
                  </div>
                </button>
              ))}
            </div>
            <button onClick={() => { parar(); setFinal("desafio"); }} className="mt-6 w-full rounded-3xl bg-peach py-4 font-display text-2xl font-bold text-cream active:animate-b-tap">Desafio final →</button>
          </div>
        )}
        {final === "desafio" && (
          <div className="animate-rise">
            <ChoiceGame jogo={livro.desafioFinal} falar={falar} onConcluir={() => {
              salvarProgresso(livro.id, { concluida: true, estrelas });
              setTimeout(() => { tocarSom("festa"); setFinal("parabens"); falar("Parabéns! Você completou a história!"); }, 3200);
            }} />
          </div>
        )}
        {final === "parabens" && (
          <div className="nb-festa py-6 text-center">
            {protagonista && <img src={imagem(protagonista, "alegre")} alt="" className="mx-auto h-44 w-auto nb-pular" />}
            <h2 className="mt-2 font-display text-5xl font-bold text-ink">Parabéns!</h2>
            <p className="mt-2 text-lg font-semibold text-soft">Você completou “{livro.titulo}” e aprendeu durante a aventura.</p>
            <div className="mt-4 flex justify-center gap-2">
              {[1, 2, 3].map((s) => <span key={s} className={`nb-festa text-6xl ${s <= estrelas ? "text-butter" : "text-line"}`} style={{ animationDelay: `${s * 0.2}s` }}>★</span>)}
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button onClick={() => { setFinal(null); setRespostas({}); irPara(0); }} className="rounded-3xl bg-teal px-6 py-4 font-display text-xl font-bold text-cream active:animate-b-tap">Ler de novo</button>
              <Link to="/historias-brilha" className="rounded-3xl bg-card px-6 py-4 font-display text-xl font-bold text-ink ring-2 ring-line">Outra história</Link>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ---------- Cena ----------
  const jogo = cena.jogo;
  return (
    <div className="rounded-[36px] bg-white/65 p-3 pb-24 ring-1 ring-black/5 backdrop-blur-xl sm:p-4 sm:pb-24 lg:pb-4">
      <div className="mb-3 flex items-center gap-3 px-1">
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-peach transition-all" style={{ width: `${((indice + (etapa === "feito" ? 1 : 0)) / livro.cenas.length) * 100}%` }} />
        </div>
        <span className="font-display text-sm font-bold text-soft">Cena {indice + 1}/{livro.cenas.length}</span>
        <button onClick={() => setVerFicha(!verFicha)} className="rounded-full bg-card px-3 py-1 text-xs font-bold text-soft ring-1 ring-line">Ficha técnica</button>
      </div>

      {verFicha && <FichaTecnica livro={livro} />}

      <div className="grid gap-3 lg:grid-cols-[1.45fr_1fr] lg:gap-4">
        <div className="flex min-w-0 flex-col gap-3">
          <div className="rounded-3xl bg-card p-3 sm:p-4 ring-1 ring-line">
            <p className="text-xs font-bold uppercase tracking-wide text-soft">{cena.titulo}</p>
            <div className="mt-1">
              <NarrationPlayer texto={cena.narracao} destaques={cena.destaques} charAtual={charAtual} onPalavra={palavraTocada} />
            </div>
          </div>
        <InteractiveScene
          key={indice}
          cenario={cena.cenario}
          ambiente={cena.ambiente}
          atores={cena.atores}
          falar={falar}
          onToque={(n) => setTocados((t) => (t.includes(n) ? t : [...t, n]))}
        >
          {jogo?.tipo === "encontre" && etapa !== "explorar" && <FindGameLayer jogo={jogo} achados={achados} onAchar={acharFlor} />}
        </InteractiveScene>
        </div>

        <div className="flex flex-col gap-3">

          <div className="flex-1 rounded-3xl bg-card/80 p-3 ring-1 ring-line sm:p-4">
            {etapa === "explorar" && (
              <div className="animate-rise">
                <p className="font-display text-xl font-bold text-ink">Explore a cena!</p>
                <p className="text-base font-semibold text-soft">{cena.atores.length > 0 ? `Toque nos personagens e nas palavras coloridas. (${tocados.length}/${cena.atores.length})` : "Observe o cenário e toque nas palavras coloridas."}</p>
                <button onClick={brincar} disabled={cena.atores.length > 0 && tocados.length === 0} className="mt-3 w-full rounded-3xl bg-peach py-3 font-display text-xl sm:py-4 sm:text-2xl font-bold text-cream active:animate-b-tap disabled:bg-line disabled:text-soft">
                  {cena.atores.length > 0 && tocados.length === 0 ? "Toque em alguém primeiro" : "Brincar ▶"}
                </button>
              </div>
            )}
            {etapa === "ensinar" && cena.ensinar && (
              <div className="animate-rise">
                <p className="text-sm font-bold uppercase tracking-wide text-teal">Vamos aprender · {passoEnsino + 1}/{cena.ensinar.length}</p>
                <p key={passoEnsino} className="nb-festa mt-2 font-display text-3xl font-bold text-ink">{cena.ensinar[passoEnsino]}</p>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => falar(cena.ensinar![passoEnsino]!, { ...vozes.narrador, rate: 0.7 })} className="rounded-3xl bg-sky/40 px-5 py-4 font-display text-xl font-bold text-ink active:animate-b-tap">🔁 Ouvir</button>
                  <button onClick={proximoEnsino} className="flex-1 rounded-3xl bg-teal py-4 font-display text-2xl font-bold text-cream active:animate-b-tap">Entendi ✓</button>
                </div>
              </div>
            )}
            {(etapa === "jogo" || etapa === "feito") && jogo && (
              <div className="animate-rise">
                {jogo.tipo === "escolha" && <ChoiceGame key={indice} jogo={jogo} falar={falar} onConcluir={concluir} />}
                {jogo.tipo === "silaba" && <SyllableGame key={indice} jogo={jogo} falar={falar} onConcluir={concluir} />}
                {jogo.tipo === "memoria" && <MemoryGame key={indice} jogo={jogo} falar={falar} onConcluir={concluir} />}
                {jogo.tipo === "sequencia" && <SequenceGame key={indice} jogo={jogo} falar={falar} onConcluir={concluir} />}
                {jogo.tipo === "teatro" && <TheaterActivity key={indice} jogo={jogo} falar={falar} onConcluir={concluir} {...(protagonista ? { personagem: protagonista } : {})} />}
                {jogo.tipo === "encontre" && <FindGamePanel jogo={jogo} achados={achados} />}
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="fixed inset-x-2 bottom-2 z-40 mx-auto flex max-w-[640px] shadow-lg lg:static lg:mt-3 lg:max-w-none lg:shadow-none items-center justify-between gap-1 rounded-3xl bg-card p-2 ring-1 ring-line">
        <button onClick={() => irPara(indice - 1)} disabled={indice === 0} className={btnBarra}><span className="text-2xl">◀</span>Voltar</button>
        <button onClick={narrar} className={btnBarra}><span className="text-2xl">🔊</span>Ouvir</button>
        <button onClick={() => (pausado ? continuar() : falando ? pausar() : narrar())} className={btnBarra}>
          <span className="text-2xl">{pausado ? "▶" : "⏸"}</span>{pausado ? "Continuar" : "Pausar"}
        </button>
        <button onClick={ajuda} className={btnBarra}><span className="text-2xl">💡</span>Ajuda</button>
        <button
          onClick={() => irPara(indice + 1)}
          disabled={etapa !== "feito"}
          className={`${btnBarra} ${etapa === "feito" ? "animate-pulse-hot bg-peach text-cream" : ""}`}
        >
          <span className="text-2xl">▶</span>Avançar
        </button>
      </nav>
    </div>
  );
}

function FichaTecnica({ livro }: { livro: Livro }) {
  const f = livro.ficha;
  const linhas: [string, string][] = [
    ["Faixa etária", f.faixa], ["Objetivo", f.objetivo], ["Habilidades", f.habilidades.join(", ")],
    ["Vocabulário", f.vocabulario.join(", ")], ["Letras/sons", f.letrasSons], ["Sílabas", f.silabas],
    ["Matemática", f.matematica], ["Emoção", f.emocao], ["Jogos", f.jogos.join(", ")],
    ["Cenários", f.cenarios.join(", ")], ["Personagens", f.personagens.join(", ")],
    ["Teatro", f.teatro], ["Atividade final", f.final],
  ];
  return (
    <dl className="animate-rise mb-3 grid gap-x-6 gap-y-1.5 rounded-3xl bg-card p-4 text-sm ring-1 ring-line sm:grid-cols-2">
      {linhas.map(([k, v]) => (
        <div key={k}><dt className="inline font-bold text-ink">{k}: </dt><dd className="inline text-soft">{v}</dd></div>
      ))}
    </dl>
  );
}
