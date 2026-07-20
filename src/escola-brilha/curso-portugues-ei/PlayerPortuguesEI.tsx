import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { speakChunked, stopSpeaking, sanitizeForSpeech } from "@/lib/native-tts";
import type { AulaEI, MomentoEI, CursoEI } from "./types";

/**
 * PlayerPortuguesEI — leitura via IMAGENS + ÁUDIO + TOQUE.
 * Nenhum bloco de texto para a criança ler; toda instrução é falada.
 * Layout vertical scroll, uma "tela" por vez, com botão gigante "▶".
 */

function speak(text: string) {
  stopSpeaking();
  speakChunked(sanitizeForSpeech(text), { rate: 0.95, pitch: 1.15 });
}

function prepararParlendaParaAudio(versos: string[]) {
  return versos
    .map((v) => v.trim())
    .join(" ")
    .replace(/\bpra\b/gi, "para")
    .replace(/Bebê,\s*Bebê/gi, "Neném, neném")
    .replace(/Bebê/g, "Neném")
    .replace(/\.{2,}/g, ".")
    .replace(/\s+/g, " ")
    .trim();
}

function CardScreen({ children, cor }: { children: React.ReactNode; cor: string }) {
  return (
    <div
      className="rounded-[36px] p-6 sm:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] border-4"
      style={{ background: "rgba(255,255,255,0.95)", borderColor: cor }}
    >
      {children}
    </div>
  );
}

function BigListenButton({ onClick, label = "Ouvir" }: { onClick: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      className="mx-auto flex items-center gap-3 rounded-full bg-purple-600 text-white px-8 py-4 text-xl font-bold shadow-lg active:scale-95 transition"
    >
      🔊 <span>{label}</span>
    </button>
  );
}

function ImageFrame({ src, alt, size = "xl" }: { src: string; alt: string; size?: "md" | "xl" | "hero" }) {
  const px = size === "hero" ? 340 : size === "xl" ? 220 : 140;
  // md = responsivo (ocupa a coluna do grid, quadrado, com teto de 140px)
  const style: React.CSSProperties =
    size === "md"
      ? { width: "100%", aspectRatio: "1 / 1", maxWidth: px }
      : { width: px, height: px };
  return (
    <div
      className="mx-auto rounded-[32px] bg-gradient-to-br from-yellow-100 to-pink-100 border-4 border-white shadow-inner grid place-items-center overflow-hidden"
      style={style}
    >
      <img src={src} alt={alt} className="max-w-[85%] max-h-[85%] object-contain" />
    </div>
  );
}

function TituloMomento({ n, texto, cor }: { n: number; texto: string; cor: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-11 h-11 rounded-full grid place-items-center text-white font-black text-lg shadow"
        style={{ background: cor }}
      >
        {n}
      </div>
      <h2 className="text-lg sm:text-xl font-bold text-slate-700">{texto}</h2>
    </div>
  );
}

// -------- Blocos por tipo de momento -----------------------------------

function MomentoRender({
  m,
  idx,
  cor,
  onOk,
}: {
  m: MomentoEI;
  idx: number;
  cor: string;
  onOk: () => void;
}) {
  const [done, setDone] = useState(false);

  const marcarOk = () => {
    if (!done) {
      setDone(true);
      onOk();
    }
  };

  switch (m.tipo) {
    case "boasVindas":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Boas-vindas" cor={cor} />
          <ImageFrame src={m.mascoteUrl} alt="Mascote" size="hero" />
          <div className="mt-6 grid gap-4">
            <BigListenButton onClick={() => speak(m.falaMascote)} />
            {m.legenda && <p className="text-center text-sm text-slate-500 italic">{m.legenda}</p>}
            <button onClick={marcarOk} className="mt-2 mx-auto text-purple-700 underline">
              Continuar ▸
            </button>
          </div>
        </CardScreen>
      );

    case "escutaRitmada":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Escuta o ritmo" cor={cor} />
          <ImageFrame src={m.imagemUrl} alt="cena" size="xl" />
          <div className="mt-6 grid gap-3">
            <BigListenButton
              onClick={() => {
                stopSpeaking();
                speakChunked(prepararParlendaParaAudio(m.versos), { rate: 0.82, pitch: 1.08 });
              }}
              label="Ouvir a parlenda"
            />
            {m.legenda && <p className="text-center text-xs text-slate-500 italic">{m.legenda}</p>}
            <button onClick={marcarOk} className="mt-2 mx-auto text-purple-700 underline">
              Continuar ▸
            </button>
          </div>
        </CardScreen>
      );

    case "vocabularioVisual":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Toca e escuta" cor={cor} />
          <BigListenButton onClick={() => speak(m.instrucaoAudio)} label="Ouvir instrução" />
          <div className="mt-6 grid grid-cols-3 gap-3">
            {m.itens.map((it) => (
              <button
                key={it.nome}
                onClick={() => speak(it.nome)}
                className="rounded-3xl bg-white border-2 border-purple-200 p-2 shadow active:scale-95 transition"
              >
                <ImageFrame src={it.imagemUrl} alt={it.nome} size="md" />
              </button>
            ))}
          </div>
          <button onClick={marcarOk} className="mt-6 mx-auto block text-purple-700 underline">
            Continuar ▸
          </button>
        </CardScreen>
      );

    case "somInicial": {
      const [msg, setMsg] = useState<string | null>(null);
      const [acertou, setAcertou] = useState(false);
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Mesmo som do início" cor={cor} />
          <BigListenButton onClick={() => speak(m.instrucaoAudio)} label="Ouvir" />
          <div className="mt-5">
            <p className="text-center text-sm text-slate-500 mb-2">Referência</p>
            <div className="flex flex-col items-center gap-2">
              <ImageFrame src={m.referencia.imagemUrl} alt={m.referencia.nome} size="md" />
              <button
                onClick={() => speak(m.referencia.nome)}
                className="rounded-full bg-purple-100 text-purple-700 px-4 py-1 text-sm font-semibold"
              >
                🔊 {m.referencia.nome}
              </button>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {m.opcoes.map((o) => (
              <button
                key={o.nome}
                onClick={() => {
                  speak(o.nome);
                  if (o.correta) {
                    setAcertou(true);
                    setMsg(m.feedbackAcerto);
                    speak(m.feedbackAcerto);
                    setTimeout(marcarOk, 600);
                  } else {
                    setMsg(m.feedbackErro);
                    speak(m.feedbackErro);
                  }
                }}
                className={`rounded-3xl border-2 p-2 shadow active:scale-95 transition ${
                  acertou && o.correta ? "border-green-500 bg-green-50" : "border-purple-200 bg-white"
                }`}
              >
                <ImageFrame src={o.imagemUrl} alt={o.nome} size="md" />
              </button>
            ))}
          </div>
          {msg && <p className="mt-4 text-center font-semibold text-slate-700">{msg}</p>}
        </CardScreen>
      );
    }

    case "ritmoCorpo": {
      const [count, setCount] = useState(0);
      const target = m.silabas;
      const silabas = m.palavra.split("-");
      const palavraLimpa = m.palavra.replace(/-/g, "").toLowerCase();
      const bater = () => {
        if (count >= target) return;
        const n = count + 1;
        setCount(n);
        if (n === target) {
          setTimeout(() => {
            // Ao completar, o professor fala a PALAVRA INTEIRA + elogio
            speak(palavraLimpa + ". " + m.elogio);
            setTimeout(marcarOk, 1200);
          }, 400);
        }
      };
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Bate palma no ritmo" cor={cor} />
          <ImageFrame src={m.imagemUrl} alt={m.palavra} size="xl" />
          <div className="mt-4 grid gap-3">
            <BigListenButton onClick={() => speak(m.instrucaoAudio + " " + palavraLimpa)} label="Ouvir a palavra" />

            <div className="flex justify-center gap-3 mt-2 flex-wrap">
              {silabas.map((sil, i) => {
                const aceso = i < count;
                return (
                  <div
                    key={i}
                    className={`min-w-[3.5rem] h-14 px-3 rounded-full border-2 grid place-items-center font-black text-lg transition-all ${
                      aceso
                        ? "bg-yellow-300 border-yellow-500 text-purple-800 scale-110 shadow"
                        : "bg-white border-purple-200 text-transparent"
                    }`}
                  >
                    {aceso ? sil : "•"}
                  </div>
                );
              })}
            </div>
            <button
              onClick={bater}
              disabled={count >= target}
              className="mx-auto mt-2 rounded-full bg-pink-500 text-white px-10 py-6 text-2xl font-black shadow-lg active:scale-90 transition disabled:opacity-60"
            >
              👏 BATE PALMA
            </button>
          </div>
        </CardScreen>
      );
    }

    case "historiaIlustrada": {
      const [i, setI] = useState(0);
      const cena = m.cenas[i];
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto={m.titulo} cor={cor} />
          <ImageFrame src={cena.imagemUrl} alt={"cena " + (i + 1)} size="hero" />
          <div className="mt-4 grid gap-3">
            <BigListenButton onClick={() => speak(cena.narracao)} label={`Cena ${i + 1} de ${m.cenas.length}`} />
            <div className="flex justify-center gap-3">
              {i > 0 && (
                <button
                  onClick={() => setI(i - 1)}
                  className="rounded-full bg-slate-200 text-slate-700 px-5 py-2 font-semibold"
                >
                  ◂ Voltar
                </button>
              )}
              {i < m.cenas.length - 1 ? (
                <button
                  onClick={() => setI(i + 1)}
                  className="rounded-full bg-purple-600 text-white px-5 py-2 font-semibold"
                >
                  Próxima ▸
                </button>
              ) : (
                <button
                  onClick={marcarOk}
                  className="rounded-full bg-green-600 text-white px-5 py-2 font-semibold"
                >
                  Terminei ✓
                </button>
              )}
            </div>
          </div>
        </CardScreen>
      );
    }

    case "compreensaoImagem": {
      const [msg, setMsg] = useState<string | null>(null);
      const [ok, setOk] = useState(false);
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Escolhe a resposta certa" cor={cor} />
          <BigListenButton onClick={() => speak(m.perguntaAudio)} label="Ouvir pergunta" />
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {m.opcoes.map((o) => (
              <button
                key={o.nome}
                onClick={() => {
                  speak(o.nome);
                  if (o.correta) {
                    setOk(true);
                    setMsg(m.feedbackAcerto);
                    speak(m.feedbackAcerto);
                    setTimeout(marcarOk, 600);
                  } else {
                    setMsg(m.feedbackErro);
                    speak(m.feedbackErro);
                  }
                }}
                className={`rounded-3xl border-2 p-2 shadow active:scale-95 transition ${
                  ok && o.correta ? "border-green-500 bg-green-50" : "border-purple-200 bg-white"
                }`}
              >
                <ImageFrame src={o.imagemUrl} alt={o.nome} size="md" />
              </button>
            ))}
          </div>
          {msg && <p className="mt-4 text-center font-semibold text-slate-700">{msg}</p>}
        </CardScreen>
      );
    }

    case "fazDeConta":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Faz de conta" cor={cor} />
          <ImageFrame src={m.imagemUrl} alt="convite" size="xl" />
          <div className="mt-5 grid gap-3">
            <BigListenButton onClick={() => speak(m.convite)} label="Ouvir convite" />
            {m.dica && <p className="text-center text-sm text-slate-500 italic">Dica: {m.dica}</p>}
            <button onClick={marcarOk} className="mt-2 mx-auto text-purple-700 underline">
              Já brincamos ▸
            </button>
          </div>
        </CardScreen>
      );

    case "rodaConversa":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Roda de conversa" cor={cor} />
          <ImageFrame src={m.imagemUrl} alt="conversa" size="xl" />
          <div className="mt-5 grid gap-3">
            <BigListenButton onClick={() => speak(m.pergunta)} label="Ouvir pergunta" />
            {m.exemplos && (
              <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl w-full px-2">
                {m.exemplos.map((e, i) => {
                  const nome = typeof e === "string" ? e : e.nome;
                  const img = typeof e === "string" ? undefined : e.imagemUrl;
                  return (
                    <button
                      key={i}
                      onClick={() => speak(nome.toLowerCase())}
                      className="flex flex-col items-center gap-2 rounded-2xl bg-white border-2 border-purple-200 p-3 shadow-sm active:scale-95 transition"
                    >
                      {img ? (
                        <img src={img} alt={nome} className="w-full aspect-square object-contain rounded-xl bg-purple-50" />
                      ) : (
                        <div className="w-full aspect-square rounded-xl bg-purple-50 flex items-center justify-center text-4xl">💬</div>
                      )}
                      <span className="text-sm font-bold text-purple-900 flex items-center gap-1">
                        🔊 {nome}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
            <button onClick={marcarOk} className="mt-2 mx-auto text-purple-700 underline">
              Já conversamos ▸
            </button>
          </div>
        </CardScreen>
      );

    case "missaoFamilia":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto={m.titulo} cor={cor} />
          <div className="mx-auto max-w-lg rounded-3xl bg-yellow-50 border-2 border-yellow-300 p-5">
            <p className="text-center text-lg font-bold text-yellow-900 mb-2">👨‍👩‍👧 Missão Família</p>
            <BigListenButton onClick={() => speak(m.convite)} label="Ouvir a missão" />
            <p className="mt-4 text-center text-sm text-slate-700">
              <strong>Para o adulto:</strong> {m.dicaAdulto}
            </p>
          </div>
          <button onClick={marcarOk} className="mt-5 mx-auto block text-purple-700 underline">
            Missão aceita ▸
          </button>
        </CardScreen>
      );

    case "celebracao":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Conquista!" cor={cor} />
          <div className="text-center">
            <div className="text-6xl mb-2">🏅</div>
            <p className="text-xl font-black text-purple-700">{m.medalha}</p>
          </div>
          <div className="mt-3">
            <ImageFrame src={m.mascoteUrl} alt="mascote" size="xl" />
          </div>
          <div className="mt-5 grid gap-3">
            <BigListenButton onClick={() => speak(m.falaFinal)} label="Ouvir o parabéns" />
            <button
              onClick={marcarOk}
              className="mx-auto rounded-full bg-green-600 text-white px-8 py-3 font-bold shadow"
            >
              Terminei a aula ✓
            </button>
          </div>
        </CardScreen>
      );

    // ============ FASE 2 ============
    case "somDaLetra":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Som da letra" cor={cor} />
          <div className="mx-auto w-40 h-40 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 grid place-items-center shadow-xl">
            <span className="text-white font-black" style={{ fontSize: 110, lineHeight: 1 }}>
              {m.letra}
            </span>
          </div>
          <div className="mt-4 grid gap-3">
            <BigListenButton
              onClick={() => speak(`${m.instrucaoAudio}. Esta é a letra ${m.letra}. O som dela é ${m.som}.`)}
              label={`Ouvir "${m.letra}"`}
            />
            <p className="text-center text-sm text-slate-600">
              Começam com <b>{m.letra}</b>:
            </p>
            <div className="grid grid-cols-3 gap-3">
              {m.exemplos.map((e) => (
                <button
                  key={e.nome}
                  onClick={() => speak(`${m.som}... ${e.nome}`)}
                  className="rounded-3xl bg-white border-2 border-purple-200 p-2 shadow active:scale-95"
                >
                  <ImageFrame src={e.imagemUrl} alt={e.nome} size="md" />
                  <p className="text-center text-xs font-bold text-purple-700 mt-1">
                    🔊 {e.nome}
                  </p>
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                speak(m.elogio);
                marcarOk();
              }}
              className="mt-2 mx-auto rounded-full bg-green-600 text-white px-6 py-2 font-bold"
            >
              Entendi ✓
            </button>
          </div>
        </CardScreen>
      );

    case "tracadoLetra":
      return <TracadoLetraBloco m={m} idx={idx} cor={cor} onOk={marcarOk} />;

    case "letrasMoveis":
      return <LetrasMoveisBloco m={m} idx={idx} cor={cor} onOk={marcarOk} />;

    case "elkoninBoxes":
      return <ElkoninBloco m={m} idx={idx} cor={cor} onOk={marcarOk} />;

    case "delecaoFonemica": {
      const [msg, setMsg] = useState<string | null>(null);
      const [ok, setOk] = useState(false);
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Tira o som" cor={cor} />
          <div className="mx-auto rounded-3xl bg-purple-50 border-2 border-purple-200 p-5 max-w-md">
            <p className="text-center text-sm text-slate-600">Palavra</p>
            <p className="text-center text-4xl font-black text-purple-700 tracking-widest">
              {m.palavraOriginal}
            </p>
            <p className="text-center text-sm text-slate-600 mt-3">
              Tira o som <b>/{m.fonemaRemovido}/</b>. O que sobra?
            </p>
          </div>
          <div className="mt-4 grid gap-3">
            <BigListenButton onClick={() => speak(m.instrucaoAudio)} label="Ouvir a pergunta" />
            <div className="grid gap-2">
              {m.opcoes.map((o, i) => (
                <button
                  key={i}
                  onClick={() => {
                    speak(o.texto);
                    if (o.correta) {
                      setOk(true);
                      setMsg(m.feedbackAcerto);
                      speak(m.feedbackAcerto);
                      setTimeout(marcarOk, 700);
                    } else {
                      setMsg(m.feedbackErro);
                      speak(m.feedbackErro);
                    }
                  }}
                  className={`mx-auto w-full max-w-sm rounded-2xl border-2 px-4 py-3 font-bold text-lg shadow active:scale-95 transition ${
                    ok && o.correta ? "border-green-500 bg-green-50 text-green-800" : "border-purple-200 bg-white text-purple-800"
                  }`}
                >
                  🔊 {o.texto}
                </button>
              ))}
            </div>
            {msg && <p className="mt-3 text-center font-semibold text-slate-700">{msg}</p>}
          </div>
        </CardScreen>
      );
    }

    case "pareamentoLetraSom":
      return <PareamentoBloco m={m} idx={idx} cor={cor} onOk={marcarOk} />;
  }
}

// ============ Componentes auxiliares da Fase 2 ============

function TracadoLetraBloco({
  m,
  idx,
  cor,
  onOk,
}: {
  m: Extract<MomentoEI, { tipo: "tracadoLetra" }>;
  idx: number;
  cor: string;
  onOk: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pontos, setPontos] = useState(0);
  const [ok, setOk] = useState(false);
  const min = m.minTracos ?? 40;
  const desenhando = useRef(false);

  const posicao = (e: React.PointerEvent) => {
    const c = canvasRef.current!;
    const r = c.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * c.width, y: ((e.clientY - r.top) / r.height) * c.height };
  };

  const start = (e: React.PointerEvent) => {
    desenhando.current = true;
    const ctx = canvasRef.current!.getContext("2d")!;
    const p = posicao(e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  };
  const move = (e: React.PointerEvent) => {
    if (!desenhando.current) return;
    const ctx = canvasRef.current!.getContext("2d")!;
    const p = posicao(e);
    ctx.lineWidth = 18;
    ctx.lineCap = "round";
    ctx.strokeStyle = cor;
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    setPontos((n) => {
      const nv = n + 1;
      if (!ok && nv >= min) {
        setOk(true);
        speak(m.elogio);
        setTimeout(onOk, 900);
      }
      return nv;
    });
  };
  const end = () => {
    desenhando.current = false;
  };

  const limpar = () => {
    const c = canvasRef.current!;
    c.getContext("2d")!.clearRect(0, 0, c.width, c.height);
    setPontos(0);
    setOk(false);
  };

  return (
    <CardScreen cor={cor}>
      <TituloMomento n={idx + 1} texto="Traça com o dedo" cor={cor} />
      <BigListenButton onClick={() => speak(m.instrucaoAudio)} label="Ouvir instrução" />
      <div className="relative mx-auto mt-4" style={{ width: 300, height: 300 }}>
        {/* Letra guia por trás */}
        <div className="absolute inset-0 grid place-items-center pointer-events-none select-none">
          <span
            style={{
              fontSize: 260,
              lineHeight: 1,
              fontWeight: 900,
              color: cor,
              opacity: 0.15,
            }}
          >
            {m.letra}
          </span>
        </div>
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="absolute inset-0 rounded-3xl border-4 touch-none"
          style={{ borderColor: cor, background: "rgba(255,255,255,0.6)" }}
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerLeave={end}
        />
      </div>
      <div className="mt-3 flex items-center justify-center gap-3">
        <div className="h-2 w-40 bg-purple-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-600 transition-all"
            style={{ width: `${Math.min(100, (pontos / min) * 100)}%` }}
          />
        </div>
        <button onClick={limpar} className="text-sm text-purple-700 underline">
          Apagar
        </button>
      </div>
      {ok && (
        <p className="mt-3 text-center font-black text-green-700">
          🌟 Muito bem! Você desenhou o {m.letra}!
        </p>
      )}
    </CardScreen>
  );
}

function LetrasMoveisBloco({
  m,
  idx,
  cor,
  onOk,
}: {
  m: Extract<MomentoEI, { tipo: "letrasMoveis" }>;
  idx: number;
  cor: string;
  onOk: () => void;
}) {
  const alvo = m.palavra.toUpperCase().split("");
  const banco = useMemo(() => {
    const all = [...alvo, ...m.distratoras.map((l) => l.toUpperCase())];
    // embaralho estável (não pode reordenar a cada render)
    return all
      .map((l, i) => ({ l, k: `${l}-${i}` }))
      .sort(() => Math.random() - 0.5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [slots, setSlots] = useState<(string | null)[]>(() => alvo.map(() => null));
  const [usados, setUsados] = useState<Set<string>>(new Set());
  const [msg, setMsg] = useState<string | null>(null);

  const posicaoLivre = () => slots.findIndex((s) => s === null);

  const colocar = (letra: string, chave: string) => {
    const idxLivre = posicaoLivre();
    if (idxLivre < 0) return;
    const next = [...slots];
    next[idxLivre] = letra;
    setSlots(next);
    setUsados((s) => new Set(s).add(chave));
    speak(letra);
    // valida
    if (next.every((v, i) => v === alvo[i])) {
      setTimeout(() => {
        speak(m.palavra + ". " + m.elogio);
        setMsg(m.elogio);
        setTimeout(onOk, 900);
      }, 400);
    } else if (next.every((v) => v !== null)) {
      setTimeout(() => {
        speak("Quase! Vamos tentar de novo.");
        setSlots(alvo.map(() => null));
        setUsados(new Set());
      }, 700);
    }
  };

  return (
    <CardScreen cor={cor}>
      <TituloMomento n={idx + 1} texto="Monta a palavra" cor={cor} />
      <ImageFrame src={m.imagemUrl} alt={m.palavra} size="xl" />
      <BigListenButton
        onClick={() => speak(`${m.instrucaoAudio}. A palavra é ${m.palavra}.`)}
        label="Ouvir"
      />
      {/* Slots da palavra */}
      <div className="mt-4 flex justify-center gap-2 flex-wrap">
        {slots.map((l, i) => (
          <div
            key={i}
            className="w-14 h-16 rounded-xl border-2 border-dashed grid place-items-center font-black text-3xl"
            style={{ borderColor: cor, color: cor, background: l ? "rgba(255,255,255,0.9)" : "transparent" }}
          >
            {l ?? ""}
          </div>
        ))}
      </div>
      {/* Banco de letras */}
      <div className="mt-4 flex justify-center gap-2 flex-wrap">
        {banco.map(({ l, k }) => {
          const usado = usados.has(k);
          return (
            <button
              key={k}
              disabled={usado}
              onClick={() => colocar(l, k)}
              className={`w-14 h-14 rounded-xl font-black text-2xl shadow active:scale-90 transition ${
                usado ? "bg-slate-200 text-slate-400" : "bg-white text-purple-700 border-2 border-purple-300"
              }`}
            >
              {l}
            </button>
          );
        })}
      </div>
      {msg && <p className="mt-3 text-center font-black text-green-700">🌟 {msg}</p>}
    </CardScreen>
  );
}

function ElkoninBloco({
  m,
  idx,
  cor,
  onOk,
}: {
  m: Extract<MomentoEI, { tipo: "elkoninBoxes" }>;
  idx: number;
  cor: string;
  onOk: () => void;
}) {
  const [passo, setPasso] = useState(0);
  const [ok, setOk] = useState(false);
  const tocar = (i: number) => {
    if (i !== passo) return;
    speak(m.fonemas[i]);
    const n = i + 1;
    if (n >= m.fonemas.length) {
      setOk(true);
      setTimeout(() => {
        speak(`${m.palavra}. ${m.elogio}`);
        setTimeout(onOk, 900);
      }, 500);
    }
    setPasso(n);
  };
  return (
    <CardScreen cor={cor}>
      <TituloMomento n={idx + 1} texto="Uma caixa, um som" cor={cor} />
      <ImageFrame src={m.imagemUrl} alt={m.palavra} size="xl" />
      <BigListenButton onClick={() => speak(m.instrucaoAudio)} label="Ouvir instrução" />
      <div className="mt-5 flex justify-center gap-3">
        {m.fonemas.map((_, i) => {
          const feito = i < passo;
          const ativo = i === passo && !ok;
          return (
            <button
              key={i}
              onClick={() => tocar(i)}
              disabled={!ativo}
              className={`w-16 h-16 rounded-xl border-4 grid place-items-center text-2xl font-black transition ${
                feito
                  ? "bg-yellow-300 border-yellow-500 text-purple-800 scale-110"
                  : ativo
                  ? "bg-white border-purple-500 text-purple-500 animate-pulse"
                  : "bg-slate-100 border-slate-300 text-transparent"
              }`}
            >
              {feito ? "●" : "?"}
            </button>
          );
        })}
      </div>
      {ok && (
        <p className="mt-3 text-center font-black text-green-700">
          🌟 {m.palavra} tem {m.fonemas.length} sons!
        </p>
      )}
    </CardScreen>
  );
}

function PareamentoBloco({
  m,
  idx,
  cor,
  onOk,
}: {
  m: Extract<MomentoEI, { tipo: "pareamentoLetraSom" }>;
  idx: number;
  cor: string;
  onOk: () => void;
}) {
  const [selLetra, setSelLetra] = useState<string | null>(null);
  const [pares, setPares] = useState<Set<string>>(new Set());
  const [erro, setErro] = useState<string | null>(null);
  const imagens = useMemo(
    () => [...m.pares].sort(() => Math.random() - 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const clicarImagem = (nome: string) => {
    if (!selLetra) return;
    const par = m.pares.find((p) => p.letra === selLetra);
    if (par && par.nome === nome) {
      const novo = new Set(pares).add(selLetra);
      setPares(novo);
      speak(`${selLetra}, ${nome}. Isso!`);
      setSelLetra(null);
      setErro(null);
      if (novo.size >= m.pares.length) {
        setTimeout(() => {
          speak(m.elogio);
          setTimeout(onOk, 800);
        }, 500);
      }
    } else {
      setErro("Quase! Escute o som da letra de novo.");
      speak("Quase! Escute o som da letra de novo.");
    }
  };

  return (
    <CardScreen cor={cor}>
      <TituloMomento n={idx + 1} texto="Liga a letra ao som" cor={cor} />
      <BigListenButton onClick={() => speak(m.instrucaoAudio)} label="Ouvir instrução" />
      <p className="mt-4 text-center text-sm text-slate-600">1. Toca numa letra e escuta:</p>
      <div className="flex justify-center gap-3 mt-2 flex-wrap">
        {m.pares.map((p) => {
          const feito = pares.has(p.letra);
          const sel = selLetra === p.letra;
          return (
            <button
              key={p.letra}
              disabled={feito}
              onClick={() => {
                setSelLetra(p.letra);
                speak(p.letra);
                setErro(null);
              }}
              className={`w-16 h-16 rounded-2xl font-black text-3xl shadow transition ${
                feito
                  ? "bg-emerald-500 text-white"
                  : sel
                  ? "bg-yellow-300 text-purple-800 scale-110 ring-4 ring-yellow-500"
                  : "bg-white text-purple-700 border-2 border-purple-300"
              }`}
            >
              {feito ? "✓" : p.letra}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-center text-sm text-slate-600">
        2. Depois toca na figura que começa com esse som:
      </p>
      <div className="mt-2 grid grid-cols-3 gap-3">
        {imagens.map((p) => (
          <button
            key={p.nome}
            disabled={pares.has(p.letra)}
            onClick={() => clicarImagem(p.nome)}
            className={`rounded-3xl border-2 p-2 shadow active:scale-95 transition ${
              pares.has(p.letra) ? "border-emerald-500 bg-emerald-50" : "border-purple-200 bg-white"
            }`}
          >
            <ImageFrame src={p.imagemUrl} alt={p.nome} size="md" />
          </button>
        ))}
      </div>
      {erro && <p className="mt-3 text-center text-orange-700 font-semibold">{erro}</p>}
    </CardScreen>
  );
}


// -------- Player principal --------------------------------------------

export function PlayerPortuguesEI({
  curso,
  aula,
  voltarPara,
  onConcluir,
}: {
  curso: CursoEI;
  aula: AulaEI;
  voltarPara: string;
  onConcluir: () => void;
}) {
  const [feitos, setFeitos] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  const cor = curso.corPrimaria;
  const pct = Math.round((feitos.size / aula.momentos.length) * 100);

  const marcar = (i: number) => {
    setFeitos((s) => {
      const n = new Set(s);
      n.add(i);
      return n;
    });
  };

  const bg = useMemo(
    () =>
      `linear-gradient(180deg, ${curso.corSecundaria} 0%, ${curso.corPrimaria} 100%)`,
    [curso],
  );

  return (
    <div className="min-h-screen" style={{ background: bg }}>
      {/* Barra topo */}
      <div className="sticky top-0 z-20 backdrop-blur bg-black/20 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to={voltarPara as "/"} className="text-white/90 text-sm font-semibold">
            ◂ Voltar
          </Link>
          <div className="flex-1">
            <p className="text-white text-sm font-bold truncate">
              {aula.icone} {aula.titulo}
            </p>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-yellow-300 transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
          <span className="text-white/90 text-xs">
            {feitos.size}/{aula.momentos.length}
          </span>
        </div>
      </div>

      <div ref={containerRef} className="max-w-3xl mx-auto px-4 py-6 grid gap-6">
        {aula.momentos.map((m, i) => (
          <MomentoRender key={i} m={m} idx={i} cor={cor} onOk={() => marcar(i)} />
        ))}

        {feitos.size === aula.momentos.length && (
          <div className="text-center py-6">
            <button
              onClick={onConcluir}
              className="rounded-full bg-yellow-400 text-purple-900 px-10 py-4 font-black text-lg shadow-xl active:scale-95"
            >
              🎉 Concluir aula
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
