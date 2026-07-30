import { useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { EnsinoVisualBloco } from "../../types";

/**
 * Fase 5 (2º ano) — FONOLOGIA AVANÇADA E ORTOGRAFIA.
 *
 *  • silabaTonica     → bate a palavra em sílabas e mostra a mais FORTE.
 *  • rimas            → escuta o fim das palavras e escolhe quem rima.
 *  • regraOrtografica → R/RR, S/SS, M antes de P/B, Ç, LH/NH/CH, AM/ÃO.
 *
 * Tudo fala em voz alta: aos 7 anos a criança precisa OUVIR a diferença
 * antes de escrever certo.
 */

// ---------------------------------------------------------------- tônica

type TonicaBloco = Extract<EnsinoVisualBloco, { tipo: "silabaTonica" }>;

export function SilabaTonica({ bloco }: { bloco: TonicaBloco }) {
  const [i, setI] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const item = bloco.itens[i];
  if (!item) return null;

  const certo = escolha === item.tonica;

  const ouvirPalavra = () => {
    stopSpeaking();
    speakChunked(item.palavra, { rate: 0.7 })
      .then(() =>
        speakChunked(
          item.silabas
            .map((s, idx) => (idx === item.tonica ? `${s}!` : s))
            .join(" ... "),
          { rate: 0.55 },
        ),
      )
      .catch(() => {});
  };

  const responder = (idx: number) => {
    if (escolha !== null) return;
    setEscolha(idx);
    stopSpeaking();
    speakChunked(
      idx === item.tonica
        ? `Isso! Em ${item.palavra}, a sílaba forte é ${item.silabas[item.tonica]}.`
        : `Quase. Escute de novo: ${item.palavra}. A sílaba forte é ${item.silabas[item.tonica]}.`,
      { rate: 0.68 },
    ).catch(() => {});
  };

  const proximo = () => {
    setEscolha(null);
    setI((v) => (v + 1 >= bloco.itens.length ? 0 : v + 1));
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-fuchsia-300/30 bg-fuchsia-500/10 p-3 text-sm text-fuchsia-100">
        💪 Toda palavra tem uma sílaba que a gente fala <b>mais forte</b>. Bata
        palma em cada pedaço e escute qual é a mais forte.
      </div>

      <div className="rounded-3xl bg-white/95 p-5 text-center shadow-lg">
        {item.imagemUrl && (
          <img
            src={item.imagemUrl}
            alt={item.palavra}
            className="mx-auto mb-3 h-24 w-24 object-contain"
          />
        )}
        <button
          type="button"
          onClick={ouvirPalavra}
          className="mb-4 h-11 rounded-2xl bg-fuchsia-500 px-5 font-black text-white active:scale-95"
        >
          🔊 Ouvir “{item.palavra.toUpperCase()}”
        </button>

        <div className="flex flex-wrap justify-center gap-2">
          {item.silabas.map((s, idx) => {
            const revelar = escolha !== null;
            const eCerta = idx === item.tonica;
            const eEsta = escolha === idx;
            return (
              <button
                key={`${s}-${idx}`}
                type="button"
                onClick={() => responder(idx)}
                disabled={revelar}
                className={`h-16 min-w-[4.5rem] rounded-2xl border-2 px-4 text-2xl font-black tracking-wide transition active:scale-95 ${
                  revelar && eCerta
                    ? "scale-110 border-emerald-300 bg-emerald-400 text-[#0b1020]"
                    : revelar && eEsta
                      ? "border-rose-300 bg-rose-500/80 text-white"
                      : "border-fuchsia-200 bg-white text-[#2b1258]"
                }`}
              >
                {s.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      {escolha !== null && (
        <div
          className={`rounded-2xl border-2 p-3 text-sm font-bold ${
            certo
              ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-100"
              : "border-amber-400/60 bg-amber-500/15 text-amber-100"
          }`}
        >
          {certo
            ? `Boa! A sílaba forte de ${item.palavra.toUpperCase()} é ${item.silabas[item.tonica].toUpperCase()}.`
            : `A sílaba forte de ${item.palavra.toUpperCase()} é ${item.silabas[item.tonica].toUpperCase()}. Fale a palavra alto e sinta a força.`}
          {item.explicacao ? ` ${item.explicacao}` : ""}
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-black uppercase tracking-widest text-white/60">
          Palavra {i + 1} de {bloco.itens.length}
        </span>
        {escolha !== null && (
          <button
            type="button"
            onClick={proximo}
            className="h-11 rounded-2xl bg-amber-400 px-5 font-black text-[#2b1258] active:scale-95"
          >
            {i + 1 >= bloco.itens.length ? "🔁 Recomeçar" : "Próxima →"}
          </button>
        )}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------ rimas

type RimasBloco = Extract<EnsinoVisualBloco, { tipo: "rimas" }>;

export function Rimas({ bloco }: { bloco: RimasBloco }) {
  const [i, setI] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const item = bloco.itens[i];
  if (!item) return null;

  const opcao = escolha !== null ? item.opcoes[escolha] : null;

  const ouvir = (p: string) => {
    stopSpeaking();
    speakChunked(p, { rate: 0.68 }).catch(() => {});
  };

  const responder = (idx: number) => {
    if (escolha !== null) return;
    setEscolha(idx);
    const op = item.opcoes[idx];
    const certa = item.opcoes.find((o) => o.rima);
    stopSpeaking();
    speakChunked(
      op.rima
        ? `Isso! ${item.palavraBase} e ${op.palavra} terminam com o mesmo som.`
        : `${item.palavraBase} e ${op.palavra} terminam diferente. Quem rima é ${certa?.palavra ?? ""}.`,
      { rate: 0.66 },
    ).catch(() => {});
  };

  const proximo = () => {
    setEscolha(null);
    setI((v) => (v + 1 >= bloco.itens.length ? 0 : v + 1));
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-sky-300/30 bg-sky-500/10 p-3 text-sm text-sky-100">
        🎵 Palavras que <b>rimam</b> terminam com o mesmo som. Ouça o
        <b> finalzinho</b> de cada uma.
      </div>

      <div className="rounded-3xl bg-white/95 p-5 text-center shadow-lg">
        {item.imagemUrl && (
          <img
            src={item.imagemUrl}
            alt={item.palavraBase}
            className="mx-auto mb-3 h-24 w-24 object-contain"
          />
        )}
        <button
          type="button"
          onClick={() => ouvir(item.palavraBase)}
          className="text-4xl font-black tracking-widest text-[#2b1258] active:scale-95"
        >
          {item.palavraBase.toUpperCase()} 🔊
        </button>
        {item.terminacao && escolha !== null && (
          <p className="mt-2 text-sm font-black text-fuchsia-600">
            Rima em {item.terminacao.toUpperCase()}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {item.opcoes.map((o, idx) => {
          const revelar = escolha !== null;
          return (
            <button
              key={o.palavra}
              type="button"
              onClick={() => responder(idx)}
              disabled={revelar}
              className={`h-14 rounded-2xl border-2 text-xl font-black tracking-wide transition active:scale-95 ${
                revelar && o.rima
                  ? "border-emerald-200 bg-emerald-400 text-[#0b1020]"
                  : revelar && escolha === idx
                    ? "border-rose-300 bg-rose-500/80 text-white"
                    : "border-white bg-white/90 text-[#2b1258]"
              }`}
            >
              {o.palavra.toUpperCase()}
            </button>
          );
        })}
      </div>

      {opcao && (
        <div
          className={`rounded-2xl border-2 p-3 text-sm font-bold ${
            opcao.rima
              ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-100"
              : "border-amber-400/60 bg-amber-500/15 text-amber-100"
          }`}
        >
          {opcao.rima
            ? `Rimou! ${item.palavraBase.toUpperCase()} e ${opcao.palavra.toUpperCase()} acabam igualzinho.`
            : `Escute o final: ${item.palavraBase.toUpperCase()} termina diferente de ${opcao.palavra.toUpperCase()}.`}
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-black uppercase tracking-widest text-white/60">
          Rima {i + 1} de {bloco.itens.length}
        </span>
        {escolha !== null && (
          <button
            type="button"
            onClick={proximo}
            className="h-11 rounded-2xl bg-amber-400 px-5 font-black text-[#2b1258] active:scale-95"
          >
            {i + 1 >= bloco.itens.length ? "🔁 Recomeçar" : "Próxima →"}
          </button>
        )}
      </div>
    </div>
  );
}

// ------------------------------------------------------------ ortografia

type OrtoBloco = Extract<EnsinoVisualBloco, { tipo: "regraOrtografica" }>;

export function RegraOrtografica({ bloco }: { bloco: OrtoBloco }) {
  const [i, setI] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const desafio = bloco.desafios[i];

  const ouvirRegra = () => {
    stopSpeaking();
    speakChunked(`${bloco.regra}. ${bloco.explicacao}`, { rate: 0.7 }).catch(() => {});
  };

  const responder = (idx: number) => {
    if (!desafio || escolha !== null) return;
    setEscolha(idx);
    const acertou = idx === desafio.correta;
    const palavra = desafio.molde.replace("_", desafio.opcoes[desafio.correta]);
    stopSpeaking();
    speakChunked(
      acertou
        ? `Isso! Escreve-se ${palavra}.`
        : `Ainda não. O certo é ${palavra}. ${desafio.feedbackErro ?? bloco.explicacao}`,
      { rate: 0.68 },
    ).catch(() => {});
  };

  const proximo = () => {
    setEscolha(null);
    setI((v) => (v + 1 >= bloco.desafios.length ? 0 : v + 1));
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border-2 border-amber-300/50 bg-amber-400/15 p-4">
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-lg font-black text-amber-100">✍️ {bloco.regra}</h4>
          <button
            type="button"
            onClick={ouvirRegra}
            className="h-9 shrink-0 rounded-xl bg-amber-400 px-3 font-black text-[#2b1258] active:scale-95"
          >
            🔊
          </button>
        </div>
        <p className="mt-1 text-sm font-bold text-amber-50/90">{bloco.explicacao}</p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {bloco.exemplos.map((ex) => (
          <button
            key={ex.palavra}
            type="button"
            onClick={() => {
              stopSpeaking();
              speakChunked(`${ex.palavra}. ${ex.motivo ?? ""}`, { rate: 0.68 }).catch(
                () => {},
              );
            }}
            className="rounded-2xl bg-white/95 p-3 text-left active:scale-95"
          >
            <span className="block text-xl font-black tracking-wide text-[#2b1258]">
              {realce(ex.palavra, ex.destaque)}
            </span>
            {ex.motivo && (
              <span className="mt-1 block text-xs font-bold text-[#2b1258]/70">
                {ex.motivo}
              </span>
            )}
          </button>
        ))}
      </div>

      {desafio && (
        <div className="rounded-3xl bg-white/95 p-5 text-center shadow-lg">
          <p className="text-xs font-black uppercase tracking-widest text-[#2b1258]/50">
            Complete a palavra
          </p>
          <p className="my-3 text-4xl font-black tracking-widest text-[#2b1258]">
            {escolha === null
              ? desafio.molde.replace("_", "__").toUpperCase()
              : desafio.molde.replace("_", desafio.opcoes[desafio.correta]).toUpperCase()}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {desafio.opcoes.map((op, idx) => {
              const revelar = escolha !== null;
              return (
                <button
                  key={op}
                  type="button"
                  onClick={() => responder(idx)}
                  disabled={revelar}
                  className={`h-14 min-w-[4rem] rounded-2xl border-2 px-4 text-2xl font-black transition active:scale-95 ${
                    revelar && idx === desafio.correta
                      ? "border-emerald-200 bg-emerald-400 text-[#0b1020]"
                      : revelar && escolha === idx
                        ? "border-rose-300 bg-rose-500/80 text-white"
                        : "border-amber-200 bg-white text-[#2b1258]"
                  }`}
                >
                  {op.toUpperCase()}
                </button>
              );
            })}
          </div>
          {escolha !== null && desafio.frase && (
            <p className="mt-3 text-base font-bold text-[#2b1258]/70">{desafio.frase}</p>
          )}
        </div>
      )}

      {escolha !== null && desafio && (
        <div
          className={`rounded-2xl border-2 p-3 text-sm font-bold ${
            escolha === desafio.correta
              ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-100"
              : "border-amber-400/60 bg-amber-500/15 text-amber-100"
          }`}
        >
          {escolha === desafio.correta
            ? "Certíssimo! Você usou a regra do jeito certo."
            : (desafio.feedbackErro ?? bloco.explicacao)}
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-black uppercase tracking-widest text-white/60">
          Desafio {i + 1} de {bloco.desafios.length}
        </span>
        {escolha !== null && (
          <button
            type="button"
            onClick={proximo}
            className="h-11 rounded-2xl bg-amber-400 px-5 font-black text-[#2b1258] active:scale-95"
          >
            {i + 1 >= bloco.desafios.length ? "🔁 Recomeçar" : "Próximo →"}
          </button>
        )}
      </div>
    </div>
  );
}

function realce(palavra: string, destaque: string) {
  const idx = palavra.toUpperCase().indexOf(destaque.toUpperCase());
  if (idx < 0) return palavra.toUpperCase();
  return (
    <>
      {palavra.slice(0, idx).toUpperCase()}
      <span className="text-rose-600">{palavra.slice(idx, idx + destaque.length).toUpperCase()}</span>
      {palavra.slice(idx + destaque.length).toUpperCase()}
    </>
  );
}
