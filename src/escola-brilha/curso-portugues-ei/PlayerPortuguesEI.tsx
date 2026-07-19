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
                const seq = async () => {
                  for (const v of m.versos) {
                    await speakChunked(sanitizeForSpeech(v), { rate: 0.85, pitch: 1.2 });
                  }
                };
                seq();
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
      const bater = () => {
        if (count >= target) return;
        const n = count + 1;
        setCount(n);
        const sil = silabas[n - 1];
        if (sil) speak(sil.toLowerCase());
        if (n === target) {
          setTimeout(() => {
            speak(m.elogio);
            setTimeout(marcarOk, 900);
          }, 500);
        }
      };
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Bate palma no ritmo" cor={cor} />
          <ImageFrame src={m.imagemUrl} alt={m.palavra} size="xl" />
          <div className="mt-4 grid gap-3">
            <BigListenButton onClick={() => speak(m.instrucaoAudio + " " + m.palavra)} label="Ouvir a palavra" />
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
              <ul className="mx-auto max-w-md text-sm text-slate-600 space-y-1">
                {m.exemplos.map((e, i) => (
                  <li key={i} className="text-center italic">"{e}"</li>
                ))}
              </ul>
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
  }
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
