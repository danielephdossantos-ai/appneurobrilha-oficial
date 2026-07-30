import { useEffect, useRef, useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import {
  lerSondagem,
  limparSondagem,
  salvarSondagem,
  type ResultadoSondagem,
} from "./sondagem-inicial";
import { getSondagem, type ConjuntoSondagem } from "./sondagens";

/**
 * Cartão de Sondagem Inicial na trilha do curso.
 *
 * Aparece no topo da trilha enquanto a criança não fez a sondagem.
 * Depois vira um cartão de resultado com o ponto de entrada sugerido.
 * Nunca bloqueia: é sugestão, não trava.
 */
export function CartaoSondagem({
  cursoSlug,
  onIrParaUnidade,
}: {
  cursoSlug: string;
  onIrParaUnidade?: (unidadeSlug: string) => void;
}) {
  const [resultado, setResultado] = useState<ResultadoSondagem | null>(null);
  const [aberto, setAberto] = useState(false);
  const [carregou, setCarregou] = useState(false);
  const conjunto = getSondagem(cursoSlug);

  useEffect(() => {
    setResultado(lerSondagem(cursoSlug));
    setCarregou(true);
  }, [cursoSlug]);

  if (!carregou || !conjunto) return null;

  if (aberto) {
    return (
      <QuizSondagem
        conjunto={conjunto}
        onFechar={() => setAberto(false)}
        onConcluir={(r) => {
          salvarSondagem(cursoSlug, r);
          setResultado(r);
          setAberto(false);
        }}
      />
    );
  }


  if (resultado) {
    return (
      <section className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-5">
        <div className="text-xs uppercase tracking-wider text-emerald-300">
          Sondagem inicial
        </div>
        <h3 className="text-xl font-black mt-1">
          {resultado.acertos} de {resultado.total} acertos
        </h3>
        <p className="text-sm text-white/80 mt-1">{resultado.mensagem}</p>
        <div className="mt-3 rounded-xl bg-black/25 p-3">
          <div className="text-xs text-white/60">Comece por aqui</div>
          <div className="font-bold text-amber-300">
            {resultado.tituloUnidade}
          </div>
          {resultado.erros.length > 0 && (
            <div className="text-xs text-white/60 mt-2">
              Pontos para reforçar: {resultado.erros.join(" · ")}
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {onIrParaUnidade && (
            <button
              onClick={() => onIrParaUnidade(resultado.unidadeSugerida)}
              className="px-4 py-2 rounded-full bg-amber-400 text-[#0d1f55] font-bold text-sm"
            >
              Ir para a unidade sugerida
            </button>
          )}
          <button
            onClick={() => {
              limparSondagem(cursoSlug);
              setResultado(null);
              setAberto(true);
            }}
            className="px-4 py-2 rounded-full bg-white/10 text-white font-bold text-sm"
          >
            Refazer sondagem
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-amber-300/40 bg-amber-400/10 p-5 text-center">
      <div className="text-4xl">🎧</div>
      <h3 className="text-xl font-black mt-1">Vamos ver por onde começar?</h3>
      <p className="text-sm text-white/80 mt-1">
        São 8 perguntinhas faladas, de 2 minutinhos. Ninguém reprova — é só
        para a Aurora saber qual é o melhor ponto de partida.
      </p>
      <button
        onClick={() => setAberto(true)}
        className="mt-4 px-6 py-3 rounded-full bg-amber-400 text-[#0d1f55] font-black"
      >
        Começar sondagem
      </button>
    </section>
  );
}

function QuizSondagem({
  onConcluir,
  onFechar,
}: {
  onConcluir: (r: ResultadoSondagem) => void;
  onFechar: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [respostas, setRespostas] = useState<number[]>([]);
  const jaFalou = useRef<number | null>(null);
  const item = ITENS_SONDAGEM[idx];

  useEffect(() => {
    if (jaFalou.current === idx) return;
    jaFalou.current = idx;
    speakChunked(item.fala, { rate: 0.72 });
    return () => stopSpeaking();
  }, [idx, item.fala]);

  function responder(op: number) {
    const novas = [...respostas, op];
    if (idx + 1 >= ITENS_SONDAGEM.length) {
      stopSpeaking();
      const r = avaliarSondagem(novas);
      onConcluir({ ...r, feitoEm: new Date().toISOString() });
      return;
    }
    setRespostas(novas);
    setIdx(idx + 1);
  }

  return (
    <section className="rounded-2xl border border-amber-300/40 bg-black/30 p-5">
      <div className="flex items-center justify-between text-xs text-white/60">
        <span>
          Sondagem · {idx + 1}/{ITENS_SONDAGEM.length}
        </span>
        <button onClick={() => { stopSpeaking(); onFechar(); }} className="hover:text-white">
          sair
        </button>
      </div>

      <div className="h-2 rounded-full bg-white/10 mt-2 overflow-hidden">
        <div
          className="h-full bg-amber-400 transition-all"
          style={{ width: `${((idx + 1) / ITENS_SONDAGEM.length) * 100}%` }}
        />
      </div>

      <div className="flex items-start gap-2 mt-4">
        <button
          onClick={() => speakChunked(item.fala, { rate: 0.72 })}
          className="shrink-0 w-10 h-10 rounded-full bg-amber-400 text-[#0d1f55] text-lg"
          aria-label="Ouvir a pergunta"
        >
          🔊
        </button>
        <h3 className="text-lg font-bold leading-snug">{item.pergunta}</h3>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {item.opcoes.map((op, i) => (
          <button
            key={op}
            onClick={() => responder(i)}
            className="w-full px-4 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xl font-black tracking-wide"
          >
            {op}
          </button>
        ))}
      </div>
    </section>
  );
}
