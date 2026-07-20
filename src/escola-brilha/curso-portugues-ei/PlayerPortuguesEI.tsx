import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { speakChunked, stopSpeaking, sanitizeForSpeech, pickPtBrVoice } from "@/lib/native-tts";

/** Fala UMA palavra com sincronia real: destaca no onstart e resolve no onend.
 *  Usa Utterance direto para evitar dedupe/queue do speakChunked em loops de karaokê. */
function speakWordSync(
  word: string,
  rate: number,
  onStart: () => void,
): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      onStart();
      resolve();
      return;
    }
    const synth = window.speechSynthesis;
    const texto = sanitizeForSpeech(word).trim() || word;
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = "pt-BR";
    u.rate = rate;
    u.pitch = 1.15;
    const voice = pickPtBrVoice();
    if (voice) u.voice = voice;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve();
    };
    // Alguns navegadores atrasam onstart; destacamos imediatamente ao enfileirar.
    onStart();
    u.onstart = () => {
      // Reforça o destaque se o React já processou.
      onStart();
    };
    u.onend = finish;
    u.onerror = finish;
    // Watchdog proporcional ao tamanho da palavra e ao rate.
    const watchdogMs = Math.max(900, Math.ceil((texto.length * 260) / Math.max(rate, 0.5)));
    const wd = window.setTimeout(finish, watchdogMs);
    // limpa o timeout ao terminar
    const clearWd = () => window.clearTimeout(wd);
    u.addEventListener?.("end", clearWd);
    u.addEventListener?.("error", clearWd);
    try {
      synth.resume();
      synth.speak(u);
      synth.resume();
    } catch {
      finish();
    }
  });
}
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

/**
 * Fala segura do som da letra. Evita bugs de TTS que leem "III"/"AAA"
 * como algarismo romano (III → "três") ou nome de letra ("A" → "á").
 * Vogais: som elongado em minúsculo com acento. Consoantes: nome da letra em PT.
 */
function somFalado(letra: string): string {
  const L = letra.toUpperCase().trim();
  // Vogais: som único e curto — repetir a vogal fazia o TTS pronunciar
  // duas vezes ("é é"), o que confundia a criança.
  const vogais: Record<string, string> = {
    A: "á", E: "é", I: "i", O: "ó", U: "u",
  };
  if (vogais[L]) return vogais[L];
  const consoantes: Record<string, string> = {
    B: "bê", C: "cê", D: "dê", F: "éfe", G: "guê", H: "agá",
    J: "jóta", K: "cá", L: "éle", M: "eme", N: "ene", P: "pê",
    Q: "quê", R: "erre", S: "esse", T: "tê", V: "vê", W: "dáblio",
    X: "xis", Y: "ípsilon", Z: "zê",
  };
  return consoantes[L] ?? L.toLowerCase();
}

function falarGrafema(valor: string): string {
  const limpo = valor.trim().toUpperCase();
  if (/^([A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ])\1+$/.test(limpo)) return somFalado(limpo[0]);
  if (/^[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ]$/.test(limpo)) return somFalado(limpo);
  return valor;
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
              onClick={() => speak(`${m.instrucaoAudio} ${somFalado(m.letra)}.`)}
              label={`Ouvir "${m.letra}"`}
            />
            <p className="text-center text-sm text-slate-600">
              Começam com <b>{m.letra}</b>:
            </p>
            <div className="grid grid-cols-3 gap-3">
              {m.exemplos.map((e) => (
                <button
                  key={e.nome}
                  onClick={() => speak(`${somFalado(m.letra)}... ${e.nome}`)}
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

    // ============ FASE 3 ============
    case "familiaSilabica":
      return <FamiliaSilabicaBloco m={m} idx={idx} cor={cor} onOk={marcarOk} />;

    case "juntarSilabas":
      return <JuntarSilabasBloco m={m} idx={idx} cor={cor} onOk={marcarOk} />;

    case "leituraSilabica":
      return <LeituraSilabicaBloco m={m} idx={idx} cor={cor} onOk={marcarOk} />;

    // ============ FASE 4 ============
    case "leituraFrase":
      return <LeituraFraseBloco m={m} idx={idx} cor={cor} onOk={marcarOk} />;

    case "leituraTexto":
      return <LeituraTextoBloco m={m} idx={idx} cor={cor} onOk={marcarOk} />;

    case "compreensaoLeitura":
      return <CompreensaoLeituraBloco m={m} idx={idx} cor={cor} onOk={marcarOk} />;
  }
}

// ============ Utilidades da Fase 3 ============

/**
 * Converte uma sílaba escrita ("PA", "TO", "MÃE") numa string que o
 * Web Speech pronuncia como sílaba natural (evita "pê-á", "tê-ó").
 * Estratégia:
 *  - lowercase + trailing "."
 *  - se a última letra é vogal simples (a e i o u), coloca acento tônico
 *    forçando o TTS a tratar como palavra oxítona ("pá", "pé", "pí", "pó", "pú").
 *  - se já tem acento ou é sílaba fechada (consoante final), mantém.
 */
function silabaParaFala(s: string): string {
  const token = s.toUpperCase().trim();
  if (!token) return "";

  // Mapa explícito para sílabas CV da Fase 3. Não usamos a letra isolada
  // ("M A", "P O") em nenhuma fala; a voz recebe uma forma fonética curta.
  const cv: Record<string, string> = {
    BA: "bá", BE: "bé", BI: "bí", BO: "bó", BU: "bú",
    CA: "cá", CO: "có", CU: "cú",
    DA: "dá", DE: "dé", DI: "dí", DO: "dó", DU: "dú",
    FA: "fá", FE: "fé", FI: "fí", FO: "fó", FU: "fú",
    GA: "gá", GO: "gó", GU: "gú",
    JA: "já", JE: "jé", JI: "jí", JO: "jó", JU: "jú",
    LA: "lá", LE: "lé", LI: "lí", LO: "ló", LU: "lú",
    MA: "má", ME: "mé", MI: "mí", MO: "mó", MU: "mú",
    NA: "ná", NE: "né", NI: "ní", NO: "nó", NU: "nú",
    PA: "pá", PE: "pé", PI: "pí", PO: "pó", PU: "pú",
    RA: "rá", RE: "ré", RI: "rí", RO: "ró", RU: "rú",
    SA: "sá", SE: "sé", SI: "sí", SO: "só", SU: "sú",
    TA: "tá", TE: "té", TI: "tí", TO: "tó", TU: "tú",
    VA: "vá", VE: "vé", VI: "ví", VO: "vó", VU: "vú",
  };
  if (cv[token]) return `${cv[token]}.`;

  // Se não for CV controlada, fala a palavra/sílaba natural em minúsculo.
  return `${s.toLowerCase().trim()}.`;
}

/** Fala uma sílaba CV natural, com pausa. */
function falarSilaba(s: string) {
  speak(silabaParaFala(s));
}

/** Fala sílabas em sequência com pausa, depois a palavra inteira. */
function falarBlending(silabas: string[], palavra: string, cb?: () => void) {
  stopSpeaking();
  const seq = silabas.map(silabaParaFala);
  let i = 0;
  const step = () => {
    if (i < seq.length) {
      speakChunked(seq[i], { rate: 0.85, pitch: 1.15, queue: true });
      i++;
      setTimeout(step, 850);
    } else {
      setTimeout(() => {
        speakChunked(palavra.toLowerCase(), { rate: 0.95, pitch: 1.15, queue: true });
        if (cb) setTimeout(cb, 600);
      }, 350);
    }
  };
  step();
}

const CORES_SILABA = ["#7c3aed", "#db2777", "#0891b2", "#ea580c"];


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
    speak(falarGrafema(letra));
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
    speak(falarGrafema(m.fonemas[i]));
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
                  : "bg-slate-100 border-slate-300 text-slate-300"
              }`}
            >
              {feito ? m.fonemas[i] : ativo ? "?" : "·"}
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
                speak(falarGrafema(p.letra));
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

        {aula.baseCientifica && (
          <div className="rounded-2xl bg-white/85 border-2 border-white/60 p-4 text-[11px] text-slate-700 leading-relaxed">
            <p className="font-black text-purple-700 mb-1">
              📚 Base científica desta missão
            </p>
            <p>{aula.baseCientifica}</p>
          </div>
        )}

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

// ============ Componentes da Fase 3 ============

function FamiliaSilabicaBloco({
  m,
  idx,
  cor,
  onOk,
}: {
  m: Extract<MomentoEI, { tipo: "familiaSilabica" }>;
  idx: number;
  cor: string;
  onOk: () => void;
}) {
  const [tocadas, setTocadas] = useState<Set<number>>(new Set());
  const todas = tocadas.size >= m.silabas.length;
  return (
    <CardScreen cor={cor}>
      <TituloMomento n={idx + 1} texto={`Família do ${m.consoante}`} cor={cor} />
      <div className="mx-auto max-w-md">
        <p className="text-center text-sm text-slate-600 mb-3">
          Toca em cada sílaba para ouvir.
        </p>
        <BigListenButton onClick={() => speak(m.instrucaoAudio)} label="Ouvir instrução" />
        <div className="mt-4 grid grid-cols-5 gap-2">
          {m.silabas.map((s, i) => {
            const feita = tocadas.has(i);
            return (
              <button
                key={s + i}
                onClick={() => {
                  falarSilaba(s);
                  setTocadas((prev) => new Set(prev).add(i));
                }}
                className="aspect-square rounded-2xl grid place-items-center font-black text-2xl shadow active:scale-95 transition"
                style={{
                  background: feita ? CORES_SILABA[i % CORES_SILABA.length] : "#fff",
                  color: feita ? "#fff" : CORES_SILABA[i % CORES_SILABA.length],
                  border: `3px solid ${CORES_SILABA[i % CORES_SILABA.length]}`,
                }}
              >
                {s}
              </button>
            );
          })}
        </div>
        {todas && (
          <button
            onClick={() => {
              speak(m.elogio);
              onOk();
            }}
            className="mt-5 mx-auto block rounded-full bg-green-600 text-white px-8 py-3 font-black shadow-lg"
          >
            ✓ Escutei todas
          </button>
        )}
      </div>
    </CardScreen>
  );
}

function JuntarSilabasBloco({
  m,
  idx,
  cor,
  onOk,
}: {
  m: Extract<MomentoEI, { tipo: "juntarSilabas" }>;
  idx: number;
  cor: string;
  onOk: () => void;
}) {
  const [tocadas, setTocadas] = useState<number[]>([]);
  const [revelou, setRevelou] = useState(false);
  const proxima = tocadas.length;
  const completa = tocadas.length === m.silabas.length;

  return (
    <CardScreen cor={cor}>
      <TituloMomento n={idx + 1} texto="Junta as sílabas" cor={cor} />
      <div className="mx-auto max-w-md">
        <p className="text-center text-sm text-slate-600 mb-2">
          Toca nas sílabas em ordem.
        </p>
        <BigListenButton onClick={() => speak(m.instrucaoAudio)} label="Ouvir instrução" />

        <div className="mt-5 flex justify-center gap-3 flex-wrap">
          {m.silabas.map((s, i) => {
            const feita = tocadas.includes(i);
            const podeTocar = i === proxima;
            return (
              <button
                key={i}
                disabled={!podeTocar && !feita}
                onClick={() => {
                  if (i !== proxima) return;
                  falarSilaba(s);
                  setTocadas((t) => [...t, i]);
                }}
                className="rounded-2xl grid place-items-center font-black text-3xl shadow active:scale-95 transition"
                style={{
                  width: 90,
                  height: 90,
                  background: feita ? CORES_SILABA[i % CORES_SILABA.length] : podeTocar ? "#fff" : "#e5e7eb",
                  color: feita ? "#fff" : CORES_SILABA[i % CORES_SILABA.length],
                  border: `3px solid ${CORES_SILABA[i % CORES_SILABA.length]}`,
                  opacity: !podeTocar && !feita ? 0.5 : 1,
                }}
              >
                {s}
              </button>
            );
          })}
        </div>

        {completa && !revelou && (
          <button
            onClick={() => {
              setRevelou(true);
              falarBlending(m.silabas, m.palavra);
            }}
            className="mt-5 mx-auto block rounded-full bg-purple-600 text-white px-8 py-3 font-black shadow-lg"
          >
            🔊 Junta tudo
          </button>
        )}

        {revelou && (
          <div className="mt-5 text-center">
            <ImageFrame src={m.imagemUrl} alt={m.palavra} size="xl" />
            <p
              className="mt-3 font-black tracking-widest"
              style={{ color: cor, fontSize: 40 }}
            >
              {m.silabas.map((s, i) => (
                <span key={i} style={{ color: CORES_SILABA[i % CORES_SILABA.length] }}>
                  {s}
                </span>
              ))}
            </p>
            <button
              onClick={() => {
                speak(m.elogio);
                onOk();
              }}
              className="mt-4 mx-auto block rounded-full bg-green-600 text-white px-8 py-3 font-black shadow-lg"
            >
              ✓ Consegui!
            </button>
          </div>
        )}
      </div>
    </CardScreen>
  );
}

function LeituraSilabicaBloco({
  m,
  idx,
  cor,
  onOk,
}: {
  m: Extract<MomentoEI, { tipo: "leituraSilabica" }>;
  idx: number;
  cor: string;
  onOk: () => void;
}) {
  const [ouviuDevagar, setOuviuDevagar] = useState(false);
  const [ouviuJunto, setOuviuJunto] = useState(false);
  return (
    <CardScreen cor={cor}>
      <TituloMomento n={idx + 1} texto="Eu leio!" cor={cor} />
      <div className="mx-auto max-w-md text-center">
        <ImageFrame src={m.imagemUrl} alt={m.palavra} size="xl" />
        <p
          className="mt-4 font-black tracking-widest"
          style={{ fontSize: 44 }}
        >
          {m.silabas.map((s, i) => (
            <span key={i} style={{ color: CORES_SILABA[i % CORES_SILABA.length] }}>
              {s}
            </span>
          ))}
        </p>
        <p className="text-xs text-slate-500 mt-1">{m.instrucaoAudio}</p>

        <div className="mt-4 grid gap-2">
          <button
            onClick={() => {
              setOuviuDevagar(true);
              falarBlending(m.silabas, m.palavra);
            }}
            className="rounded-full bg-purple-600 text-white px-6 py-3 font-bold shadow active:scale-95"
          >
            🐢 Ouvir devagar
          </button>
          <button
            onClick={() => {
              setOuviuJunto(true);
              speak(m.palavra.toLowerCase());
            }}
            className="rounded-full bg-pink-500 text-white px-6 py-3 font-bold shadow active:scale-95"
          >
            🐇 Ouvir junto
          </button>
        </div>

        {ouviuDevagar && ouviuJunto && (
          <button
            onClick={() => {
              speak(m.elogio);
              onOk();
            }}
            className="mt-5 rounded-full bg-green-600 text-white px-10 py-3 font-black shadow-lg"
          >
            ✓ Eu li!
          </button>
        )}
      </div>
    </CardScreen>
  );
}

// ============ FASE 4 — Fluência e Compreensão ============

/** Divide uma palavra em sílabas aproximadas para colorir visualmente.
 *  Não é análise fonética exata — é só para o realce visual funcionar. */
function silabificarSimples(palavra: string): string[] {
  const p = palavra.toLowerCase();
  const vogais = "aeiouáéíóúâêîôûãõ";
  const out: string[] = [];
  let atual = "";
  for (let i = 0; i < p.length; i++) {
    atual += p[i];
    const prox = p[i + 1] ?? "";
    const prox2 = p[i + 2] ?? "";
    if (vogais.includes(p[i])) {
      // corta depois da vogal se a próxima é consoante seguida de vogal
      if (prox && !vogais.includes(prox) && vogais.includes(prox2)) {
        out.push(atual);
        atual = "";
      } else if (prox && vogais.includes(prox)) {
        out.push(atual);
        atual = "";
      }
    }
  }
  if (atual) {
    if (out.length && !vogais.split("").some((v) => atual.includes(v))) {
      out[out.length - 1] += atual;
    } else {
      out.push(atual);
    }
  }
  return out.length ? out : [p];
}

function PalavraColorida({ palavra }: { palavra: string }) {
  const silabas = silabificarSimples(palavra);
  return (
    <span>
      {silabas.map((s, i) => (
        <span key={i} style={{ color: CORES_SILABA[i % CORES_SILABA.length] }}>
          {s.toUpperCase()}
        </span>
      ))}
    </span>
  );
}

function normalizarFrase(s: string): string[] {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function LeituraFraseBloco({
  m,
  idx,
  cor,
  onOk,
}: {
  m: Extract<MomentoEI, { tipo: "leituraFrase" }>;
  idx: number;
  cor: string;
  onOk: () => void;
}) {
  const [ativa, setAtiva] = useState(-1);
  const [ouvindo, setOuvindo] = useState(false);
  const [tentativaTexto, setTentativaTexto] = useState("");
  const [feedback, setFeedback] = useState<"ok" | "quase" | "erro" | null>(null);
  const [leiturasOk, setLeiturasOk] = useState(0);
  const timersRef = useRef<number[]>([]);
  const karaokeRunRef = useRef(0);
  const recRef = useRef<any>(null);
  const palavras = m.frase.replace(/\.$/, "").split(/\s+/);
  const alvoTokens = normalizarFrase(m.frase);

  const SR: any =
    typeof window !== "undefined"
      ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      : null;
  const micDisponivel = !!SR;

  useEffect(() => {
    return () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
      stopSpeaking();
      try { recRef.current?.stop?.(); } catch {}
    };
  }, []);

  const lerKaraoke = async (rate: number) => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
    stopSpeaking();
    setAtiva(-1);
    const runToken = ++karaokeRunRef.current;
    // pausa entre palavras: maior no modo lento para dar respiro
    const gap = rate < 0.85 ? 320 : 160;
    // Pequeno delay para o cancel do TTS assentar antes de enfileirar
    await new Promise((r) => setTimeout(r, 80));
    for (let i = 0; i < palavras.length; i++) {
      if (runToken !== karaokeRunRef.current) return;
      await speakWordSync(palavras[i].toLowerCase(), rate, () => {
        if (runToken === karaokeRunRef.current) setAtiva(i);
      });
      if (runToken !== karaokeRunRef.current) return;
      await new Promise((r) => {
        const t = window.setTimeout(r, gap);
        timersRef.current.push(t);
      });
    }
    if (runToken === karaokeRunRef.current) setAtiva(-1);
  };

  const gravarLeitura = () => {
    if (!SR) return;
    try { recRef.current?.stop?.(); } catch {}
    stopSpeaking();
    setFeedback(null);
    setTentativaTexto("");
    const rec = new SR();
    rec.lang = "pt-BR";
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.continuous = false;
    recRef.current = rec;
    setOuvindo(true);
    rec.onresult = (e: any) => {
      const alternativas: string[] = [];
      for (let i = 0; i < e.results[0].length; i++) alternativas.push(e.results[0][i].transcript);
      let melhor = 0;
      let melhorTxt = alternativas[0] || "";
      for (const alt of alternativas) {
        const tokens = normalizarFrase(alt);
        const acertos = alvoTokens.filter((t) => tokens.includes(t)).length;
        const score = acertos / alvoTokens.length;
        if (score > melhor) { melhor = score; melhorTxt = alt; }
      }
      setTentativaTexto(melhorTxt);
      if (melhor >= 0.6) {
        setFeedback("ok");
        setLeiturasOk((n) => {
          const novo = Math.min(3, n + 1);
          if (novo === 3) speak(m.elogio);
          else speak(novo === 1 ? "Muito bem! Faltam duas." : "Boa! Falta só mais uma.");
          return novo;
        });
      } else if (melhor >= 0.3) {
        setFeedback("quase");
        speak("Quase! Ouve o professor e tenta de novo.");
      } else {
        setFeedback("erro");
        speak("Não peguei bem. Ouve o professor e tenta de novo.");
      }
    };
    rec.onerror = () => { setOuvindo(false); setFeedback("erro"); };
    rec.onend = () => setOuvindo(false);
    try { rec.start(); } catch { setOuvindo(false); }
  };

  const pararGravacao = () => {
    try { recRef.current?.stop?.(); } catch {}
    setOuvindo(false);
  };

  const completo = leiturasOk >= 3;

  return (
    <CardScreen cor={cor}>
      <TituloMomento n={idx + 1} texto="Eu leio a frase 3 vezes!" cor={cor} />
      <div className="mx-auto max-w-md text-center">
        <ImageFrame src={m.imagemUrl} alt={m.frase} size="xl" />
        <p className="mt-4 font-black leading-snug flex flex-wrap justify-center gap-x-2 gap-y-1" style={{ fontSize: 32 }}>
          {palavras.map((p, i) => (
            <span
              key={i}
              className={`inline-block px-1 rounded-md transition-all duration-150 ${
                ativa === i ? "bg-yellow-300 text-slate-900 scale-110 shadow-md" : ""
              }`}
            >
              <PalavraColorida palavra={p} />
              {i === palavras.length - 1 ? "." : ""}
            </span>
          ))}
        </p>
        <p className="text-xs text-slate-500 mt-2">{m.instrucaoAudio}</p>

        {/* Progresso 3 estrelas */}
        <div className="mt-4 flex justify-center gap-3 text-3xl">
          {[0, 1, 2].map((i) => (
            <span key={i} className={i < leiturasOk ? "grayscale-0" : "grayscale opacity-40"}>
              {i < leiturasOk ? "⭐" : "☆"}
            </span>
          ))}
        </div>
        <p className="text-sm font-bold text-slate-600 mt-1">Leitura {Math.min(leiturasOk, 3)}/3</p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => lerKaraoke(0.7)}
            className="rounded-full bg-purple-600 text-white px-4 py-3 font-bold shadow active:scale-95 text-sm"
          >
            🐢 Ouvir devagar
          </button>
          <button
            onClick={() => lerKaraoke(0.92)}
            className="rounded-full bg-pink-500 text-white px-4 py-3 font-bold shadow active:scale-95 text-sm"
          >
            🐇 Ouvir junto
          </button>
        </div>

        {/* Microfone */}
        {micDisponivel ? (
          <button
            onClick={ouvindo ? pararGravacao : gravarLeitura}
            disabled={completo}
            className={`mt-3 w-full rounded-full px-6 py-4 font-black shadow-lg text-white transition ${
              completo
                ? "bg-slate-400"
                : ouvindo
                ? "bg-red-500 animate-pulse"
                : "bg-blue-600 active:scale-95"
            }`}
          >
            {completo ? "✓ 3 leituras concluídas" : ouvindo ? "🎤 Ouvindo… toque para parar" : "🎤 Ler no microfone"}
          </button>
        ) : (
          <button
            onClick={() => setLeiturasOk((n) => Math.min(3, n + 1))}
            disabled={completo}
            className="mt-3 w-full rounded-full px-6 py-4 font-black shadow-lg text-white bg-blue-600 active:scale-95 disabled:bg-slate-400"
          >
            {completo ? "✓ 3 leituras marcadas" : "✓ Já li (marcar +1)"}
          </button>
        )}

        {tentativaTexto && (
          <div
            className={`mt-3 rounded-2xl px-4 py-2 text-sm font-bold ${
              feedback === "ok"
                ? "bg-green-100 text-green-800"
                : feedback === "quase"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {feedback === "ok" ? "🎉 Muito bem!" : feedback === "quase" ? "🤏 Quase! Tenta de novo." : "🔁 Não peguei. Tenta de novo."}
            <div className="text-xs font-normal mt-1 opacity-80">Você disse: "{tentativaTexto}"</div>
          </div>
        )}

        {completo && (
          <button
            onClick={() => { speak(m.elogio); onOk(); }}
            className="mt-5 rounded-full bg-green-600 text-white px-10 py-3 font-black shadow-lg active:scale-95"
          >
            ➜ Continuar
          </button>
        )}
      </div>
    </CardScreen>
  );
}


function LeituraTextoBloco({
  m,
  idx,
  cor,
  onOk,
}: {
  m: Extract<MomentoEI, { tipo: "leituraTexto" }>;
  idx: number;
  cor: string;
  onOk: () => void;
}) {
  const [ouviu, setOuviu] = useState(false);
  const [ativa, setAtiva] = useState<{ f: number; w: number }>({ f: -1, w: -1 });
  const timersRef = useRef<number[]>([]);
  const karaokeRunRef = useRef(0);

  const palavrasPorFrase = m.frases.map((f) =>
    f.replace(/[.!?]$/, "").split(/\s+/),
  );

  useEffect(() => {
    return () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
      stopSpeaking();
    };
  }, []);

  const lerTexto = async (rate: number) => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
    stopSpeaking();
    setOuviu(true);
    setAtiva({ f: -1, w: -1 });
    const runToken = ++karaokeRunRef.current;
    const gap = rate < 0.85 ? 320 : 160;
    await new Promise((r) => setTimeout(r, 80));
    for (let fi = 0; fi < palavrasPorFrase.length; fi++) {
      const palavras = palavrasPorFrase[fi];
      for (let wi = 0; wi < palavras.length; wi++) {
        if (runToken !== karaokeRunRef.current) return;
        await speakWordSync(palavras[wi].toLowerCase(), rate, () => {
          if (runToken === karaokeRunRef.current) setAtiva({ f: fi, w: wi });
        });
        if (runToken !== karaokeRunRef.current) return;
        await new Promise((r) => {
          const t = window.setTimeout(r, gap);
          timersRef.current.push(t);
        });
      }
      await new Promise((r) => {
        const t = window.setTimeout(r, 400);
        timersRef.current.push(t);
      });
    }
    if (runToken === karaokeRunRef.current) setAtiva({ f: -1, w: -1 });
  };

  return (
    <CardScreen cor={cor}>
      <TituloMomento n={idx + 1} texto={m.titulo} cor={cor} />
      <div className="mx-auto max-w-md text-center">
        <ImageFrame src={m.imagemUrl} alt={m.titulo} size="xl" />
        <div className="mt-4 rounded-2xl bg-white/90 p-4 text-left shadow-inner border border-slate-200">
          {palavrasPorFrase.map((palavras, fi) => {
            const finalChar = m.frases[fi].match(/[.!?]$/)?.[0] ?? ".";
            return (
              <p
                key={fi}
                className="font-bold text-slate-800 leading-relaxed flex flex-wrap gap-x-1.5 gap-y-1"
                style={{ fontSize: 22 }}
              >
                {palavras.map((p, wi) => (
                  <span
                    key={wi}
                    className={`inline-block px-1 rounded-md transition-all duration-150 ${
                      ativa.f === fi && ativa.w === wi
                        ? "bg-yellow-300 text-slate-900 scale-110 shadow-sm"
                        : ""
                    }`}
                  >
                    <PalavraColorida palavra={p} />
                    {wi === palavras.length - 1 ? finalChar : ""}
                  </span>
                ))}
              </p>
            );
          })}
        </div>
        <p className="text-xs text-slate-500 mt-2">{m.instrucaoAudio}</p>

        <div className="mt-4 grid gap-2">
          <button
            onClick={() => lerTexto(0.7)}
            className="rounded-full bg-purple-600 text-white px-6 py-3 font-bold shadow active:scale-95"
          >
            🐢 Ouvir devagar
          </button>
          <button
            onClick={() => lerTexto(0.92)}
            className="rounded-full bg-pink-500 text-white px-6 py-3 font-bold shadow active:scale-95"
          >
            🐇 Ouvir junto
          </button>
        </div>

        {ouviu && (
          <button
            onClick={() => {
              timersRef.current.forEach((t) => clearTimeout(t));
              setAtiva({ f: -1, w: -1 });
              speak(m.elogio);
              onOk();
            }}
            className="mt-5 rounded-full bg-green-600 text-white px-10 py-3 font-black shadow-lg"
          >
            ✓ Eu li o texto!
          </button>
        )}
      </div>
    </CardScreen>
  );
}

function CompreensaoLeituraBloco({
  m,
  idx,
  cor,
  onOk,
}: {
  m: Extract<MomentoEI, { tipo: "compreensaoLeitura" }>;
  idx: number;
  cor: string;
  onOk: () => void;
}) {
  const [escolha, setEscolha] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => speak(m.perguntaAudio), 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [m.perguntaAudio]);

  const escolher = (i: number) => {
    if (escolha !== null) return;
    setEscolha(i);
    const acertou = m.opcoes[i].correta;
    speak(acertou ? m.feedbackAcerto : m.feedbackErro);
    if (acertou) setTimeout(onOk, 1200);
  };

  return (
    <CardScreen cor={cor}>
      <TituloMomento n={idx + 1} texto="Entendeu o texto?" cor={cor} />
      <div className="mx-auto max-w-md text-center">
        <button
          onClick={() => speak(m.perguntaAudio)}
          className="mx-auto flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 shadow"
        >
          🔊 Ouvir pergunta
        </button>

        <div className="mt-5 grid gap-3">
          {m.opcoes.map((op, i) => {
            const marcado = escolha === i;
            const bg =
              escolha === null
                ? "bg-white text-slate-800"
                : op.correta
                  ? "bg-green-500 text-white"
                  : marcado
                    ? "bg-red-400 text-white"
                    : "bg-white text-slate-500 opacity-60";
            return (
              <button
                key={i}
                onClick={() => escolher(i)}
                className={`rounded-2xl px-4 py-4 font-bold text-lg shadow active:scale-95 ${bg}`}
              >
                {op.texto}
              </button>
            );
          })}
        </div>

        {escolha !== null && !m.opcoes[escolha].correta && (
          <button
            onClick={() => setEscolha(null)}
            className="mt-4 rounded-full bg-yellow-400 text-slate-900 px-6 py-2 font-bold shadow"
          >
            🔁 Tentar de novo
          </button>
        )}
      </div>
    </CardScreen>
  );
}
