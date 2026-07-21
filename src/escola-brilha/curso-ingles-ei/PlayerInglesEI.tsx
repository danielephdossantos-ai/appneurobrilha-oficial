import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { stopSpeaking } from "@/lib/native-tts";
import { speakBilingual, speakEnglish, stopSpeakingEn, warmupEnVoices } from "@/lib/native-tts-en";
import type { AulaIng, MomentoIng, CursoIng } from "./types";

/**
 * PlayerInglesEI — Educação Infantil, formato Duolingo-vertical.
 *
 * Regras de áudio:
 *  - Narração PT com palavra-alvo em EN entre "aspas" → speakBilingual
 *    (voz PT-BR + voz en-US automaticamente, pausa natural entre idiomas).
 *  - Toque em palavra pura EN (ex.: cartão de vocabulário) → speakEnglish.
 */

function speakMixed(text: string) {
  stopSpeaking();
  stopSpeakingEn();
  speakBilingual(text, { ratePt: 0.95, rateEn: 0.75 });
}

function speakEn(word: string) {
  stopSpeaking();
  stopSpeakingEn();
  speakEnglish(word, { rate: 0.75 });
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

function BigListenButton({
  onClick,
  label = "Ouvir",
  variant = "primary",
}: {
  onClick: () => void;
  label?: string;
  variant?: "primary" | "en";
}) {
  const bg =
    variant === "en"
      ? "bg-gradient-to-r from-red-500 to-blue-600"
      : "bg-purple-600";
  return (
    <button
      onClick={onClick}
      className={`mx-auto flex items-center gap-3 rounded-full ${bg} text-white px-8 py-4 text-xl font-bold shadow-lg active:scale-95 transition`}
    >
      🔊 <span>{label}</span>
    </button>
  );
}

function ImageFrame({
  src,
  alt,
  size = "xl",
}: {
  src: string;
  alt: string;
  size?: "md" | "xl" | "hero";
}) {
  const px = size === "hero" ? 340 : size === "xl" ? 220 : 140;
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
  m: MomentoIng;
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
          <TituloMomento n={idx + 1} texto="Welcome!" cor={cor} />
          <ImageFrame src={m.mascoteUrl} alt="Teacher Buddy" size="hero" />
          <div className="text-center -mt-2 mb-2">
            <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black px-4 py-1.5 rounded-full text-sm shadow-lg">
              Teacher Buddy 🌟
            </span>
          </div>
          <div className="mt-6 grid gap-4">
            <BigListenButton onClick={() => speakMixed(m.falaMascote)} />
            {m.legenda && (
              <p className="text-center text-sm text-slate-500 italic">{m.legenda}</p>
            )}
            <button onClick={marcarOk} className="mt-2 mx-auto text-purple-700 underline">
              Continuar ▸
            </button>
          </div>
        </CardScreen>
      );

    case "vocabEn":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Toca e escuta" cor={cor} />
          <BigListenButton
            onClick={() => speakMixed(m.instrucaoAudio)}
            label="Ouvir instrução"
          />
          <div className="mt-6 grid grid-cols-3 gap-3">
            {m.itens.map((it) => (
              <button
                key={it.en}
                onClick={() => speakEn(it.en)}
                className="rounded-3xl bg-white border-2 border-purple-200 p-2 shadow active:scale-95 transition flex flex-col items-center gap-2"
              >
                <ImageFrame src={it.imagemUrl} alt={it.en} size="md" />
                <div className="text-center pb-1">
                  <div className="text-lg font-black text-purple-700">{it.en}</div>
                  <div className="text-[11px] text-slate-500">{it.pt}</div>
                </div>
              </button>
            ))}
          </div>
          <button onClick={marcarOk} className="mt-6 mx-auto block text-purple-700 underline">
            Continuar ▸
          </button>
        </CardScreen>
      );

    case "musicaEn":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Sing with me!" cor={cor} />
          <ImageFrame src={m.imagemUrl} alt="cena" size="xl" />
          <div className="mt-6 grid gap-3">
            <BigListenButton
              onClick={() => {
                stopSpeaking();
                stopSpeakingEn();
                // Une versos em uma "fala" com pausas naturais.
                const texto = m.versos
                  .map((v) => `"${v.en}". ${v.pt}.`)
                  .join(" ");
                speakBilingual(texto, { ratePt: 0.9, rateEn: 0.7 });
              }}
              label="Ouvir a música"
              variant="en"
            />
            <div className="mt-2 grid gap-2">
              {m.versos.map((v, i) => (
                <button
                  key={i}
                  onClick={() => speakEn(v.en)}
                  className="rounded-2xl bg-purple-50 border-2 border-purple-200 p-3 text-left active:scale-95 transition"
                >
                  <div className="flex items-center gap-2">
                    {v.gesto && <span className="text-2xl">{v.gesto}</span>}
                    <div>
                      <div className="font-black text-purple-700">{v.en}</div>
                      <div className="text-xs text-slate-500">{v.pt}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {m.legenda && (
              <p className="text-center text-xs text-slate-500 italic">{m.legenda}</p>
            )}
            <button onClick={marcarOk} className="mt-2 mx-auto text-purple-700 underline">
              Continuar ▸
            </button>
          </div>
        </CardScreen>
      );

    case "escolhaImagem": {
      const [msg, setMsg] = useState<string | null>(null);
      const [acertou, setAcertou] = useState(false);
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto={`Touch the "${m.palavraAlvoEn}"`} cor={cor} />
          <div className="grid gap-3">
            <BigListenButton
              onClick={() => speakMixed(m.instrucaoAudio)}
              label="Ouvir instrução"
            />
            <BigListenButton
              onClick={() => speakEn(m.palavraAlvoEn)}
              label={`Ouvir "${m.palavraAlvoEn}"`}
              variant="en"
            />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {m.opcoes.map((o) => (
              <button
                key={o.nome}
                onClick={() => {
                  if (o.correta) {
                    setAcertou(true);
                    setMsg(m.feedbackAcerto);
                    speakMixed(m.feedbackAcerto);
                    setTimeout(marcarOk, 900);
                  } else {
                    setMsg(m.feedbackErro);
                    speakMixed(m.feedbackErro);
                  }
                }}
                className={`rounded-3xl bg-white border-2 p-2 shadow active:scale-95 transition ${
                  acertou && o.correta ? "border-green-500 ring-4 ring-green-200" : "border-purple-200"
                }`}
              >
                <ImageFrame src={o.imagemUrl} alt={o.nome} size="md" />
              </button>
            ))}
          </div>
          {msg && (
            <p className="mt-4 text-center text-slate-700 font-medium">{msg}</p>
          )}
        </CardScreen>
      );
    }

    case "historiaEn":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto={m.titulo} cor={cor} />
          <div className="grid gap-6">
            {m.cenas.map((cena, i) => (
              <div key={i} className="grid gap-3">
                <ImageFrame src={cena.imagemUrl} alt={`Cena ${i + 1}`} size="xl" />
                <BigListenButton
                  onClick={() => speakMixed(cena.narracao)}
                  label={`Cena ${i + 1} de ${m.cenas.length}`}
                />
              </div>
            ))}
          </div>
          <button onClick={marcarOk} className="mt-6 mx-auto block text-purple-700 underline">
            Continuar ▸
          </button>
        </CardScreen>
      );

    case "fazDeConta":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Let's play!" cor={cor} />
          <ImageFrame src={m.imagemUrl} alt="cena" size="xl" />
          <div className="mt-5 grid gap-3">
            <BigListenButton onClick={() => speakMixed(m.convite)} label="Ouvir convite" />
            {m.dica && <p className="text-center text-sm text-slate-500">{m.dica}</p>}
            <button onClick={marcarOk} className="mt-2 mx-auto text-purple-700 underline">
              Já brincamos ▸
            </button>
          </div>
        </CardScreen>
      );

    case "rodaConversa":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Conversa em família" cor={cor} />
          <ImageFrame src={m.imagemUrl} alt="cena" size="xl" />
          <div className="mt-5 grid gap-3">
            <BigListenButton onClick={() => speakMixed(m.pergunta)} label="Ouvir pergunta" />
            {m.exemplos && m.exemplos.length > 0 && (
              <ul className="text-slate-600 text-sm text-center italic space-y-1">
                {m.exemplos.map((e, i) => (
                  <li key={i}>· {e}</li>
                ))}
              </ul>
            )}
            <button onClick={marcarOk} className="mt-2 mx-auto text-purple-700 underline">
              Conversamos ▸
            </button>
          </div>
        </CardScreen>
      );

    case "missaoFamilia":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Missão em família" cor={cor} />
          <div className="grid gap-3">
            <div className="mx-auto text-6xl">🏠</div>
            <div className="text-center font-bold text-lg text-slate-700">{m.titulo}</div>
            <BigListenButton onClick={() => speakMixed(m.convite)} label="Ouvir a missão" />
            <p className="text-center text-sm text-slate-500 italic">👨‍👩‍👧 {m.dicaAdulto}</p>
            <button onClick={marcarOk} className="mt-2 mx-auto text-purple-700 underline">
              Combinado! ▸
            </button>
          </div>
        </CardScreen>
      );

    case "celebracao":
      return (
        <CardScreen cor={cor}>
          <TituloMomento n={idx + 1} texto="Congratulations!" cor={cor} />
          <div className="mx-auto text-7xl text-center">🏅</div>
          <div className="text-center text-2xl font-black text-amber-600 my-3">
            {m.medalha}
          </div>
          <ImageFrame src={m.mascoteUrl} alt="Mascote" size="xl" />
          <div className="mt-4 grid gap-3">
            <BigListenButton
              onClick={() => speakMixed(m.falaFinal)}
              label="Ouvir o parabéns"
            />
            <button onClick={marcarOk} className="mt-2 mx-auto text-purple-700 underline">
              Terminei! ▸
            </button>
          </div>
        </CardScreen>
      );
  }
}

// -------- Player principal --------------------------------------------

export function PlayerInglesEI({
  curso,
  aula,
  onSair,
  onConcluir,
}: {
  curso: CursoIng;
  aula: AulaIng;
  onSair: () => void;
  onConcluir: () => void;
}) {
  const [feitos, setFeitos] = useState<Set<number>>(new Set());
  const total = aula.momentos.length;
  const progresso = Math.round((feitos.size / total) * 100);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    warmupEnVoices();
    return () => {
      stopSpeaking();
      stopSpeakingEn();
    };
  }, []);

  const marcar = (i: number) => {
    setFeitos((prev) => {
      if (prev.has(i)) return prev;
      const n = new Set(prev);
      n.add(i);
      return n;
    });
    // Rola suavemente para o próximo card
    setTimeout(() => {
      const next = document.getElementById(`momento-${i + 1}`);
      next?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  const cor = curso.corPrimaria;

  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(160deg, ${curso.corSecundaria}, ${curso.corPrimaria})`,
      }}
    >
      {/* Topo */}
      <div className="sticky top-0 z-10 backdrop-blur bg-white/80 border-b border-white/40">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onSair}
            className="rounded-full bg-slate-200 text-slate-700 px-3 py-1.5 text-sm font-bold active:scale-95"
          >
            ← Sair
          </button>
          <div className="flex-1">
            <div className="text-[11px] uppercase font-black text-slate-500">
              {curso.serieLabel} · English EI
            </div>
            <div className="text-sm font-bold text-slate-800 truncate">{aula.titulo}</div>
          </div>
          <div className="text-xs font-bold text-slate-600">{progresso}%</div>
        </div>
        <div className="h-1.5 bg-slate-200">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
            style={{ width: `${progresso}%` }}
          />
        </div>
      </div>

      <div ref={scrollRef} className="max-w-2xl mx-auto p-4 pb-40 grid gap-6">
        {aula.momentos.map((m, i) => (
          <section id={`momento-${i}`} key={i}>
            <MomentoRender m={m} idx={i} cor={cor} onOk={() => marcar(i)} />
          </section>
        ))}

        {feitos.size >= total && (
          <div className="text-center grid gap-3 mt-4">
            <div className="text-3xl">🎉</div>
            <div className="text-2xl font-black text-white drop-shadow">
              Great job! You finished the lesson.
            </div>
            <button
              onClick={onConcluir}
              className="mx-auto rounded-full bg-amber-400 text-slate-900 px-8 py-3 font-black shadow-lg active:scale-95"
            >
              Concluir aula ▸
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
