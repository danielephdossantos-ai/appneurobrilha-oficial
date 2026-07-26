import { useState, useRef, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, ChevronRight, Guitar, RotateCcw, Mic, Square } from "lucide-react";
import {
  professorPipMatChat,
  type PipMatResposta,
} from "@/lib/professor-pip-mat.functions";
import pipRoqueiro from "@/assets/pip-teen-roqueiro.png.asset.json";

type Item =
  | { tipo: "aluno"; texto: string }
  | { tipo: "pip"; resposta: PipMatResposta }
  | { tipo: "erro"; texto: string };

interface Props {
  crianca?: { nome?: string; idade?: number; serie?: string };
}

function Lousa({ resposta }: { resposta: PipMatResposta }) {
  const total = resposta.passos.length;
  const [visiveis, setVisiveis] = useState(1);
  const completo = visiveis >= total;

  return (
    <div className="rounded-3xl border-[6px] border-[#7c4a20] bg-[#0f2b22] p-4 shadow-xl">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-sm font-black uppercase tracking-wider text-emerald-200">
          {resposta.titulo}
        </h3>
        <span className="shrink-0 rounded-full bg-emerald-900/70 px-2 py-0.5 text-[11px] font-bold text-emerald-200">
          {Math.min(visiveis, total)}/{total}
        </span>
      </div>

      <div className="space-y-3">
        {resposta.passos.slice(0, visiveis).map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-white/5 px-3 py-2"
          >
            <div className="flex items-start gap-2">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-xs font-black text-[#0f2b22]">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div
                  className="break-words text-lg font-bold text-white sm:text-xl"
                  style={{ fontFamily: "ui-monospace, 'Courier New', monospace" }}
                >
                  {p.linha}
                </div>
                {p.explica && (
                  <div className="mt-1 text-sm text-emerald-200/90">{p.explica}</div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!completo ? (
        <button
          type="button"
          onClick={() => setVisiveis((v) => v + 1)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-black text-[#0f2b22] transition hover:brightness-110 active:scale-95"
        >
          Continuar <ChevronRight className="h-4 w-4" />
        </button>
      ) : (
        <div className="mt-4 space-y-3">
          {resposta.resultado && (
            <div className="rounded-2xl bg-amber-300 px-4 py-3 text-center">
              <div className="text-[11px] font-black uppercase tracking-widest text-amber-800">
                Resultado
              </div>
              <div
                className="text-xl font-black text-[#3b2400]"
                style={{ fontFamily: "ui-monospace, 'Courier New', monospace" }}
              >
                {resposta.resultado}
              </div>
            </div>
          )}
          {resposta.pergunta_final && (
            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-900/40 px-4 py-3 text-sm text-emerald-100">
              <span className="font-black">Agora você: </span>
              {resposta.pergunta_final}
            </div>
          )}
          <button
            type="button"
            onClick={() => setVisiveis(1)}
            className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-emerald-200"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Ver de novo passo a passo
          </button>
        </div>
      )}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SpeechRecognitionCtor = new () => any;

function getRecognitionCtor(): SpeechRecognitionCtor | null {
  if (typeof window === "undefined") return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function ProfessorPipMat({ crianca }: Props) {
  const perguntar = useServerFn(professorPipMatChat);
  const [itens, setItens] = useState<Item[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const fimRef = useRef<HTMLDivElement>(null);

  // ---- Falar a dúvida (ditado por voz) ----
  const [ouvindo, setOuvindo] = useState(false);
  const [micSuportado, setMicSuportado] = useState(true);
  const [micErro, setMicErro] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recogRef = useRef<any>(null);
  const finalRef = useRef("");
  const enviarRef = useRef<(t: string) => void>(() => {});

  useEffect(() => {
    const Ctor = getRecognitionCtor();
    if (!Ctor) {
      setMicSuportado(false);
      return;
    }
    const r = new Ctor();
    r.lang = "pt-BR";
    r.continuous = true;
    r.interimResults = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    r.onresult = (ev: any) => {
      let parcial = "";
      for (let i = ev.resultIndex; i < ev.results.length; i++) {
        const t = ev.results[i][0].transcript;
        if (ev.results[i].isFinal) finalRef.current += t;
        else parcial += t;
      }
      setInput((finalRef.current + parcial).trimStart());
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    r.onerror = (ev: any) => {
      setOuvindo(false);
      setMicErro(
        ev?.error === "not-allowed"
          ? "Preciso da permissão do microfone para te ouvir."
          : "Não consegui ouvir agora. Tenta de novo!",
      );
    };
    r.onend = () => {
      setOuvindo(false);
      const texto = finalRef.current.trim();
      finalRef.current = "";
      if (texto) enviarRef.current(texto);
    };
    recogRef.current = r;
    return () => {
      try {
        r.stop();
      } catch {
        /* noop */
      }
    };
  }, []);

  function alternarMic() {
    const r = recogRef.current;
    if (!r) return;
    setMicErro(null);
    if (ouvindo) {
      try {
        r.stop();
      } catch {
        /* noop */
      }
      return;
    }
    finalRef.current = "";
    setInput("");
    try {
      r.start();
      setOuvindo(true);
    } catch {
      setMicErro("Não consegui abrir o microfone.");
    }
  }


  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [itens, busy]);

  async function enviar(texto: string) {
    const pergunta = texto.trim();
    if (!pergunta || busy) return;
    setItens((l) => [...l, { tipo: "aluno", texto: pergunta }]);
    setInput("");
    setBusy(true);
    try {
      const historico = itens
        .slice(-6)
        .map((i) =>
          i.tipo === "aluno"
            ? { role: "user" as const, content: i.texto }
            : i.tipo === "pip"
              ? {
                  role: "assistant" as const,
                  content: `${i.resposta.titulo}: ${i.resposta.passos
                    .map((p) => p.linha)
                    .join(" | ")} => ${i.resposta.resultado}`,
                }
              : null,
        )
        .filter(Boolean) as Array<{ role: "user" | "assistant"; content: string }>;

      const res = await perguntar({ data: { pergunta, crianca, historico } });
      if (res.ok) {
        setItens((l) => [...l, { tipo: "pip", resposta: res.resposta }]);
      } else {
        setItens((l) => [...l, { tipo: "erro", texto: res.mensagem }]);
      }
    } catch {
      setItens((l) => [
        ...l,
        { tipo: "erro", texto: "Não consegui responder agora. Tenta de novo!" },
      ]);
    } finally {
      setBusy(false);
    }
  }

  enviarRef.current = enviar;



  const sugestoes = [
    "Como resolvo 3x + 5 = 20?",
    "Fatore x² + 6x + 9",
    "Quanto é 35% de 240?",
    "Regra de três: 4 kg custam R$ 18. E 7 kg?",
  ];

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <div className="flex items-center gap-3 rounded-3xl bg-gradient-to-r from-[#1b1035] via-[#3b1a5c] to-[#7c2d8f] p-4 text-white shadow-lg">
        <img
          src={pipRoqueiro.url}
          alt="Pip Teen Roqueiro, professor de matemática"
          className="h-20 w-20 shrink-0 rounded-2xl object-contain"
        />
        <div className="min-w-0">
          <h1 className="flex items-center gap-2 text-lg font-black leading-tight">
            <Guitar className="h-5 w-5 text-fuchsia-300" /> Pip Teen Roqueiro
          </h1>
          <p className="text-sm text-fuchsia-100">
            Professor de Matemática. Manda a dúvida que eu resolvo na lousa, passo a passo.
          </p>
        </div>
      </div>

      {itens.length === 0 && (
        <div className="grid gap-2 sm:grid-cols-2">
          {sugestoes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => enviar(s)}
              className="rounded-2xl border border-fuchsia-300/40 bg-white/80 px-4 py-3 text-left text-sm font-semibold text-[#3b1a5c] transition hover:bg-white dark:bg-slate-900/60 dark:text-fuchsia-100"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {itens.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {item.tipo === "aluno" ? (
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white">
                    {item.texto}
                  </div>
                </div>
              ) : item.tipo === "pip" ? (
                <div className="space-y-2">
                  {item.resposta.fala && (
                    <div className="max-w-[90%] rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[#3b1a5c] shadow dark:bg-slate-800 dark:text-fuchsia-100">
                      {item.resposta.fala}
                    </div>
                  )}
                  <Lousa resposta={item.resposta} />
                </div>
              ) : (
                <div className="rounded-2xl bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
                  {item.texto}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {busy && (
          <div className="flex items-center gap-2 text-sm font-semibold text-fuchsia-600">
            <Loader2 className="h-4 w-4 animate-spin" /> Escrevendo na lousa...
          </div>
        )}
        <div ref={fimRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          enviar(input);
        }}
        className="sticky bottom-3 flex items-center gap-2 rounded-full bg-white p-2 shadow-lg dark:bg-slate-900"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escreva sua dúvida de matemática..."
          className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
          aria-label="Sua dúvida de matemática"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white disabled:opacity-40"
          aria-label="Enviar pergunta"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
