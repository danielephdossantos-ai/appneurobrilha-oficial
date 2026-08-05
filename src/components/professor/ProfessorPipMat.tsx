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
  const [caracteresVisiveis, setCaracteresVisiveis] = useState<{ [key: number]: number }>({});
  const [estahEscrevendo, setEstahEscrevendo] = useState(false);
  const completo = visiveis >= total && !estahEscrevendo;

  useEffect(() => {
    // Inicia o processo de "escrita" automática de todos os passos
    let passoAtual = 0;
    setVisiveis(1);
    setEstahEscrevendo(true);

    async function escreverTudo() {
      for (let i = 0; i < total; i++) {
        passoAtual = i;
        setVisiveis(i + 1);
        
        const texto = resposta.passos[i].linha;
        setCaracteresVisiveis(prev => ({ ...prev, [i]: 0 }));

        // Escreve caractere por caractere
        for (let charIndex = 1; charIndex <= texto.length; charIndex++) {
          await new Promise(resolve => setTimeout(resolve, 80)); // Escrita mais lenta (humana)
          setCaracteresVisiveis(prev => ({ ...prev, [i]: charIndex }));
        }

        // Pequena pausa entre a conta e a explicação
        await new Promise(resolve => setTimeout(resolve, 400));
        
        // Pausa maior entre passos para o aluno ler
        if (i < total - 1) {
          await new Promise(resolve => setTimeout(resolve, 1200));
        }
      }
      setEstahEscrevendo(false);
    }

    escreverTudo();
  }, [resposta]);

  return (
    <div className="rounded-3xl border-[8px] border-[#5d3a1a] bg-[#0f2b22] p-5 shadow-[inset_0_4px_20px_rgba(0,0,0,0.5),0_10px_30px_rgba(0,0,0,0.3)] relative overflow-hidden">
      {/* Textura de Lousa */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/chalkboard.png')]" />
      
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between gap-2 border-b border-emerald-900/50 pb-2">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400/70">
            {resposta.titulo}
          </h3>
          <div className="flex items-center gap-2">
            {estahEscrevendo && (
              <span className="flex h-2 w-2 animate-ping rounded-full bg-emerald-400" />
            )}
            <span className="shrink-0 rounded-md bg-emerald-950 px-2 py-0.5 text-[10px] font-bold text-emerald-400/80">
              {Math.min(visiveis, total)}/{total}
            </span>
          </div>
        </div>

        <div className="space-y-5">
          {resposta.passos.slice(0, visiveis).map((p, i) => {
            const isEscrevendoAgora = i === visiveis - 1 && estahEscrevendo;
            const caracteresAtuais = caracteresVisiveis[i] || 0;
            const textoExibido = p.linha.slice(0, caracteresAtuais);
            const jaTerminouLinha = caracteresAtuais >= p.linha.length;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative pl-8"
              >
                {/* Número do Passo estilo Giz */}
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-sm border border-emerald-400/30 text-[10px] font-black text-emerald-400/50">
                  {i + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <div
                    className="break-words text-2xl font-bold text-white/90 sm:text-3xl tracking-wide"
                    style={{ 
                      fontFamily: "'Permanent Marker', cursive, ui-monospace",
                      filter: "drop-shadow(0 0 2px rgba(255,255,255,0.2))"
                    }}
                  >
                    {textoExibido}
                    {isEscrevendoAgora && !jaTerminouLinha && (
                      <motion.span 
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.4 }}
                        className="inline-block w-1.5 h-7 bg-emerald-200/80 ml-1 translate-y-1"
                      />
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {jaTerminouLinha && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-emerald-300/80 font-medium italic"
                      >
                        {p.explica}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {completo && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 pt-4 border-t border-emerald-900/50 space-y-4"
          >
            {resposta.resultado && (
              <div className="rounded-2xl bg-amber-300/90 p-4 text-center shadow-lg border-b-4 border-amber-500 transform -rotate-1">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-900/60 mb-1">
                  Resultado Final
                </div>
                <div
                  className="text-3xl font-black text-[#2a1a00]"
                  style={{ fontFamily: "'Permanent Marker', cursive" }}
                >
                  {resposta.resultado}
                </div>
              </div>
            )}
            
            {resposta.pergunta_final && (
              <div className="rounded-xl border-2 border-dashed border-emerald-400/20 bg-emerald-950/30 p-4 text-sm text-emerald-100/90 leading-relaxed">
                <span className="font-black text-emerald-400">⚡ Desafio: </span>
                {resposta.pergunta_final}
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                setVisiveis(0);
                setCaracteresVisiveis({});
                // O useEffect será disparado novamente pela mudança de estado ou podemos forçar um reset
              }}
              className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-500/60 hover:text-emerald-400 transition ml-auto"
            >
              <RotateCcw className="h-3 w-3" /> Reiniciar Explicação
            </button>
          </motion.div>
        )}
      </div>
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
        className="sticky bottom-3 flex flex-col gap-1"
      >
        {ouvindo && (
          <div className="mx-auto flex items-center gap-2 rounded-full bg-rose-600 px-3 py-1 text-xs font-black text-white shadow">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> Estou te
            ouvindo... fale sua dúvida!
          </div>
        )}
        {micErro && (
          <div className="mx-auto rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700">
            {micErro}
          </div>
        )}
        <div className="flex items-center gap-2 rounded-full bg-white p-2 shadow-lg dark:bg-slate-900">
          {micSuportado && (
            <button
              type="button"
              onClick={alternarMic}
              disabled={busy}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition disabled:opacity-40 ${
                ouvindo
                  ? "animate-pulse bg-rose-600"
                  : "bg-gradient-to-br from-emerald-500 to-teal-600"
              }`}
              aria-label={ouvindo ? "Parar de falar e enviar" : "Falar minha dúvida"}
              title={ouvindo ? "Parar e enviar" : "Falar minha dúvida"}
            >
              {ouvindo ? <Square className="h-4 w-4" /> : <Mic className="h-5 w-5" />}
            </button>
          )}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              micSuportado
                ? "Fale no microfone 🎤 ou escreva sua dúvida..."
                : "Escreva sua dúvida de matemática..."
            }
            className="min-w-0 flex-1 bg-transparent px-1 text-sm outline-none"
            aria-label="Sua dúvida de matemática"
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600 text-white disabled:opacity-40"
            aria-label="Enviar pergunta"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>

    </div>
  );
}
