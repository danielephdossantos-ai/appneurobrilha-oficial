import { useMemo, useState } from "react";
import { CheckCircle2, Sparkles, RotateCcw, Hand } from "lucide-react";
import { Secao } from "./Secao";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";
import type { Aula } from "../../types";

/* ================================================================== */
/* Helpers                                                             */
/* ================================================================== */

function embaralhar<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Status({ ok, texto }: { ok: boolean; texto: string }) {
  return (
    <div
      className={`mt-3 flex items-center gap-2 rounded-xl p-2 border ${
        ok
          ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-200"
          : "bg-rose-500/15 border-rose-500/30 text-rose-200"
      }`}
    >
      <CheckCircle2 className="h-4 w-4" />
      <span className="text-sm font-black">{texto}</span>
    </div>
  );
}

// Sílaba "falável" — evita soletração de sílabas com uma letra só.
function falaSilaba(s: string): string {
  const limpa = s.toLowerCase();
  return limpa.length === 1 ? `${limpa}...` : limpa;
}

/* ================================================================== */
/* 1) Contar sílabas com palma                                        */
/* ================================================================== */

type ContarProps = {
  jogo: Extract<
    NonNullable<Aula["interativas"]>[number],
    { tipo: "contarSilabas" }
  >;
};

export function JogoContarSilabas({ jogo }: ContarProps) {
  const { speak } = useDeviceTTS();
  const [idx, setIdx] = useState(0);
  const [toques, setToques] = useState(0);
  const [feedback, setFeedback] = useState<"ok" | "err" | null>(null);

  const item = jogo.itens[idx];
  const total = item?.silabas.length ?? 0;
  const concluida = idx >= jogo.itens.length;

  function tocarPalma() {
    if (concluida || feedback === "ok") return;
    const proximo = toques + 1;
    if (proximo > total) {
      setFeedback("err");
      speak("Passou! Escute de novo e tente contar as sílabas.");
      return;
    }
    setToques(proximo);
    speak(falaSilaba(item.silabas[proximo - 1]));
    if (proximo === total) {
      setFeedback("ok");
      setTimeout(() => {
        setIdx((v) => v + 1);
        setToques(0);
        setFeedback(null);
      }, 1500);
    }
  }

  function reiniciar() {
    setToques(0);
    setFeedback(null);
  }

  function ouvirPalavra() {
    if (!item) return;
    speak(item.palavra);
  }

  if (concluida) {
    return (
      <Secao icon={Sparkles} rotulo="Fase" cor="#FFC93C">
        <p className="font-black text-lg mb-1">{jogo.titulo}</p>
        <Status ok texto={jogo.acerto ?? "Mestre da palma silábica! ✋"} />
      </Secao>
    );
  }

  return (
    <Secao icon={Hand} rotulo="Fase" cor="#FFC93C">
      <p className="font-black text-lg mb-1">{jogo.titulo}</p>
      {jogo.instrucao && (
        <p className="text-base text-white/80 mb-3">{jogo.instrucao}</p>
      )}
      <div className="text-center text-xs text-white/70 font-black mb-2">
        Palavra {idx + 1} de {jogo.itens.length}
      </div>
      <div className="flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={ouvirPalavra}
          className="rounded-2xl bg-white/15 p-3 border-2 border-white/20 active:scale-95"
        >
          <img
            src={item.imagemUrl}
            alt={item.palavra}
            className="w-32 h-32 object-contain drop-shadow"
            draggable={false}
          />
          <div className="mt-1 font-black text-white text-lg text-center">
            {item.palavra}
          </div>
          <div className="text-[10px] font-black text-white/70 text-center">
            🔊 toque pra ouvir
          </div>
        </button>

        {/* fileira de bolinhas — uma por sílaba */}
        <div className="flex gap-2">
          {item.silabas.map((s, i) => {
            const acesa = i < toques;
            return (
              <div
                key={i}
                className={`h-10 min-w-10 px-2 rounded-full border-2 flex items-center justify-center font-black text-sm transition ${
                  acesa
                    ? "bg-amber-300 text-[#0d1f55] border-amber-200 scale-110"
                    : "bg-white/10 text-white/40 border-white/20"
                }`}
              >
                {acesa ? s : "•"}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={tocarPalma}
          disabled={feedback === "ok"}
          className="w-full h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white font-black text-xl border-2 border-white/30 active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
        >
          <Hand className="h-6 w-6" /> Palma!
        </button>

        <div className="text-white/80 font-black text-sm">
          {toques} palma{toques === 1 ? "" : "s"}
        </div>
      </div>

      {feedback === "ok" && (
        <Status
          ok
          texto={`${item.palavra} tem ${total} sílaba${total === 1 ? "" : "s"}! ✅`}
        />
      )}
      {feedback === "err" && (
        <>
          <Status
            ok={false}
            texto={jogo.erro ?? "Bateu palma demais. Ouça de novo."}
          />
          <button
            onClick={reiniciar}
            className="mt-2 w-full h-10 rounded-xl bg-white/15 font-black text-white flex items-center justify-center gap-2"
          >
            <RotateCcw className="h-4 w-4" /> Tentar de novo
          </button>
        </>
      )}
    </Secao>
  );
}

/* ================================================================== */
/* 2) Montar palavra com sílabas                                       */
/* ================================================================== */

type MontarProps = {
  jogo: Extract<
    NonNullable<Aula["interativas"]>[number],
    { tipo: "montarSilabas" }
  >;
};

export function JogoMontarSilabas({ jogo }: MontarProps) {
  const { speak } = useDeviceTTS();
  const [idx, setIdx] = useState(0);
  const item = jogo.itens[idx];

  // pool embaralhado (fixo por item)
  const pool = useMemo(() => {
    if (!item) return [] as string[];
    return embaralhar([...item.silabas, ...(item.distratores ?? [])]);
  }, [item]);

  const [montada, setMontada] = useState<number[]>([]); // índices em pool na ordem escolhida
  const [erro, setErro] = useState(false);
  const [ok, setOk] = useState(false);
  const concluida = idx >= jogo.itens.length;

  if (concluida) {
    return (
      <Secao icon={Sparkles} rotulo="Fase" cor="#FFC93C">
        <p className="font-black text-lg mb-1">{jogo.titulo}</p>
        <Status ok texto={jogo.acerto ?? "Você montou todas! 🧩"} />
      </Secao>
    );
  }

  function tocarFicha(i: number) {
    if (ok || montada.includes(i)) return;
    const proximaSilabaCerta = item.silabas[montada.length];
    if (pool[i] === proximaSilabaCerta) {
      const nova = [...montada, i];
      setMontada(nova);
      speak(falaSilaba(pool[i]));
      if (nova.length === item.silabas.length) {
        setOk(true);
        setTimeout(() => speak(item.palavra), 400);
        setTimeout(() => {
          setIdx((v) => v + 1);
          setMontada([]);
          setErro(false);
          setOk(false);
        }, 1800);
      }
    } else {
      setErro(true);
      speak("Não é essa. Ouça de novo.");
      setTimeout(() => setErro(false), 900);
    }
  }

  function reiniciar() {
    setMontada([]);
    setErro(false);
  }

  return (
    <Secao icon={Sparkles} rotulo="Fase" cor="#FFC93C">
      <p className="font-black text-lg mb-1">{jogo.titulo}</p>
      {jogo.instrucao && (
        <p className="text-base text-white/80 mb-3">{jogo.instrucao}</p>
      )}
      <div className="text-center text-xs text-white/70 font-black mb-2">
        Palavra {idx + 1} de {jogo.itens.length}
      </div>

      <div className="flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={() => speak(item.palavra)}
          className="rounded-2xl bg-white/15 p-3 border-2 border-white/20 active:scale-95"
        >
          <img
            src={item.imagemUrl}
            alt={item.palavra}
            className="w-28 h-28 object-contain drop-shadow"
            draggable={false}
          />
          <div className="text-[10px] font-black text-white/70 text-center mt-1">
            🔊 ouvir a palavra
          </div>
        </button>

        {/* slots da palavra em construção */}
        <div className="flex gap-2">
          {item.silabas.map((_, i) => {
            const preenchida = i < montada.length;
            return (
              <div
                key={i}
                className={`h-12 min-w-14 px-2 rounded-xl border-2 flex items-center justify-center font-black text-lg ${
                  preenchida
                    ? "bg-white text-[#0d1f55] border-white"
                    : "bg-white/10 text-white/40 border-white/30 border-dashed"
                }`}
              >
                {preenchida ? pool[montada[i]] : "?"}
              </div>
            );
          })}
        </div>

        {/* pool de fichas */}
        <div className="grid grid-cols-3 gap-2 w-full">
          {pool.map((s, i) => {
            const usada = montada.includes(i);
            return (
              <button
                key={i}
                type="button"
                disabled={usada || ok}
                onClick={() => tocarFicha(i)}
                className={`h-12 rounded-xl font-black text-lg border-2 transition active:scale-95 ${
                  usada
                    ? "opacity-30 bg-white/10 text-white/50 border-white/20"
                    : "bg-amber-300 text-[#0d1f55] border-amber-200 hover:brightness-110"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {ok && (
        <Status ok texto={`${item.palavra}! ✅`} />
      )}
      {erro && !ok && (
        <Status ok={false} texto="Essa não. Toque na sílaba que vem agora." />
      )}
      {montada.length > 0 && !ok && (
        <button
          onClick={reiniciar}
          className="mt-2 w-full h-10 rounded-xl bg-white/15 font-black text-white flex items-center justify-center gap-2"
        >
          <RotateCcw className="h-4 w-4" /> Recomeçar essa
        </button>
      )}
    </Secao>
  );
}

/* ================================================================== */
/* 3) Remover / Substituir sílaba                                     */
/* ================================================================== */

type TrocarProps = {
  jogo: Extract<
    NonNullable<Aula["interativas"]>[number],
    { tipo: "trocarSilaba" }
  >;
};

export function JogoTrocarSilaba({ jogo }: TrocarProps) {
  const { speak } = useDeviceTTS();
  const [idx, setIdx] = useState(0);
  const item = jogo.itens[idx];

  // Etapa 1: escolher a ficha na posição indicada.
  // Etapa 2 (só "substituir"): escolher a sílaba nova.
  // Etapa 3: escolher a palavra formada.
  const [fichaEscolhida, setFichaEscolhida] = useState<number | null>(null);
  const [silabaEscolhida, setSilabaEscolhida] = useState<string | null>(null);
  const [respostaEscolhida, setRespostaEscolhida] = useState<number | null>(
    null,
  );
  const [erroFicha, setErroFicha] = useState(false);
  const [erroSilaba, setErroSilaba] = useState(false);

  const concluida = idx >= jogo.itens.length;

  const opcoesSilabaNova = useMemo(() => {
    if (!item || item.operacao !== "substituir" || !item.silabaNova) return [];
    return embaralhar([item.silabaNova, ...(item.distratoresSilaba ?? [])]);
  }, [item]);

  if (concluida) {
    return (
      <Secao icon={Sparkles} rotulo="Fase" cor="#FFC93C">
        <p className="font-black text-lg mb-1">{jogo.titulo}</p>
        <Status ok texto={jogo.acerto ?? "Mestre das trocas! 🔁"} />
      </Secao>
    );
  }

  const acertouResposta =
    respostaEscolhida !== null && respostaEscolhida === item.correta;
  const fichaConfirmada =
    fichaEscolhida !== null && fichaEscolhida === item.indicePosicao;
  const precisaSilaba = item.operacao === "substituir";
  const silabaConfirmada =
    !precisaSilaba ||
    (silabaEscolhida !== null && silabaEscolhida === item.silabaNova);

  function tocarFicha(i: number) {
    if (fichaConfirmada) return;
    if (i === item.indicePosicao) {
      setFichaEscolhida(i);
      speak(falaSilaba(item.silabasOrigem[i]));
    } else {
      setErroFicha(true);
      speak("Essa não é a sílaba certa. Ouça a instrução de novo.");
      setTimeout(() => setErroFicha(false), 900);
    }
  }

  function tocarSilabaNova(s: string) {
    if (silabaConfirmada) return;
    if (s === item.silabaNova) {
      setSilabaEscolhida(s);
      speak(falaSilaba(s));
    } else {
      setErroSilaba(true);
      setTimeout(() => setErroSilaba(false), 900);
    }
  }

  function tocarResposta(i: number) {
    if (acertouResposta) return;
    setRespostaEscolhida(i);
    speak(item.opcoesResposta[i]);
    if (i === item.correta) {
      setTimeout(() => {
        setIdx((v) => v + 1);
        setFichaEscolhida(null);
        setSilabaEscolhida(null);
        setRespostaEscolhida(null);
      }, 1800);
    }
  }

  const posicaoLegivel =
    item.posicao === "inicial"
      ? "PRIMEIRA"
      : item.posicao === "final"
        ? "ÚLTIMA"
        : "DO MEIO";

  const enunciado =
    item.operacao === "remover"
      ? `Toque na sílaba ${posicaoLegivel} de ${item.palavraOrigem} pra removê-la.`
      : `Toque na sílaba ${posicaoLegivel} de ${item.palavraOrigem} — vamos trocar!`;

  return (
    <Secao icon={Sparkles} rotulo="Fase" cor="#FFC93C">
      <p className="font-black text-lg mb-1">{jogo.titulo}</p>
      {jogo.instrucao && (
        <p className="text-base text-white/80 mb-3">{jogo.instrucao}</p>
      )}
      <div className="text-center text-xs text-white/70 font-black mb-2">
        Rodada {idx + 1} de {jogo.itens.length}
      </div>

      <div className="flex flex-col items-center gap-3">
        {item.imagemOrigem && (
          <button
            type="button"
            onClick={() => speak(item.palavraOrigem)}
            className="rounded-2xl bg-white/15 p-2 border-2 border-white/20 active:scale-95"
          >
            <img
              src={item.imagemOrigem}
              alt={item.palavraOrigem}
              className="w-20 h-20 object-contain drop-shadow"
              draggable={false}
            />
            <div className="text-[10px] font-black text-white/70 text-center">
              🔊 {item.palavraOrigem}
            </div>
          </button>
        )}

        <p className="font-black text-center text-white text-base">
          {enunciado}
        </p>

        {/* Fichas da palavra original */}
        <div className="flex gap-2">
          {item.silabasOrigem.map((s, i) => {
            const removida = fichaConfirmada && i === item.indicePosicao;
            const substituida =
              removida && precisaSilaba && silabaConfirmada;
            const conteudo = substituida ? item.silabaNova! : s;
            const escolhida = fichaEscolhida === i;
            return (
              <button
                key={i}
                type="button"
                disabled={fichaConfirmada}
                onClick={() => tocarFicha(i)}
                className={`h-14 min-w-16 px-2 rounded-xl font-black text-xl border-2 transition active:scale-95 ${
                  substituida
                    ? "bg-emerald-400 text-[#0d1f55] border-emerald-200 scale-105"
                    : removida
                      ? "bg-white/10 text-white/30 border-white/20 line-through"
                      : escolhida
                        ? "bg-amber-300 text-[#0d1f55] border-amber-200"
                        : "bg-white text-[#0d1f55] border-white hover:brightness-95"
                }`}
              >
                {conteudo}
              </button>
            );
          })}
        </div>

        {erroFicha && (
          <Status
            ok={false}
            texto={`Essa não é a sílaba ${posicaoLegivel.toLowerCase()}.`}
          />
        )}

        {/* Etapa 2: escolher sílaba nova */}
        {fichaConfirmada && precisaSilaba && !silabaConfirmada && (
          <div className="w-full">
            <p className="font-black text-white text-center text-sm mb-2">
              Escolha a sílaba nova pra colocar no lugar:
            </p>
            <div className="grid grid-cols-3 gap-2">
              {opcoesSilabaNova.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => tocarSilabaNova(s)}
                  className="h-12 rounded-xl bg-amber-300 text-[#0d1f55] font-black text-lg border-2 border-amber-200 active:scale-95"
                >
                  {s}
                </button>
              ))}
            </div>
            {erroSilaba && (
              <Status ok={false} texto="Essa sílaba não é a combinada." />
            )}
          </div>
        )}

        {/* Etapa 3: escolher a palavra formada */}
        {fichaConfirmada && silabaConfirmada && (
          <div className="w-full">
            <p className="font-black text-white text-center text-sm mb-2">
              Qual palavra formamos?
            </p>
            <div className="grid grid-cols-3 gap-2">
              {item.opcoesResposta.map((op, i) => {
                const sel = respostaEscolhida === i;
                const certa =
                  respostaEscolhida !== null && i === item.correta;
                const errada = sel && i !== item.correta;
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={acertouResposta}
                    onClick={() => tocarResposta(i)}
                    className={`h-14 rounded-xl font-black text-lg border-2 transition active:scale-95 ${
                      certa
                        ? "bg-emerald-500 text-white border-emerald-300"
                        : errada
                          ? "bg-rose-500 text-white border-rose-300"
                          : "bg-white text-[#0d1f55] border-white"
                    }`}
                  >
                    {op}
                  </button>
                );
              })}
            </div>
            {respostaEscolhida !== null &&
              (acertouResposta ? (
                <Status
                  ok
                  texto={`${item.palavraFinal}! ${jogo.acerto ?? "✅"}`}
                />
              ) : (
                <Status
                  ok={false}
                  texto={jogo.erro ?? "Leia devagar as sílabas juntas."}
                />
              ))}
          </div>
        )}
      </div>
    </Secao>
  );
}
