import { useState, useRef, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Send, X, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { askProfessorBrilho } from "@/lib/groq-professor.functions";

type Modulo =
  | "reforco-brilha"
  | "jornada-365"
  | "missao-prova"
  | "missao-trabalho";

type Msg = { role: "user" | "assistant"; content: string };

interface Props {
  modulo: Modulo;
  contexto?: string;
  crianca?: { nome?: string; idade?: number; serie?: string; perfil?: string };
}

const MODULE_LABEL: Record<Modulo, string> = {
  "reforco-brilha": "Reforço Brilho",
  "jornada-365": "Jornada 365",
  "missao-prova": "Missão Prova",
  "missao-trabalho": "Missão Trabalho",
};

export function ProfessorBrilho({ modulo, contexto, crianca }: Props) {
  const ask = useServerFn(askProfessorBrilho);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      content: `Oi! Eu sou o **Professor Brilho** ✨ — tô aqui pra te ajudar em **${MODULE_LABEL[modulo]}**. Me conta sua dúvida!`,
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 9e9, behavior: "smooth" });
  }, [msgs, open]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: text }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const res = await ask({
        data: {
          modulo,
          contexto,
          crianca,
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        },
      });
      if (res.ok && res.reply) {
        setMsgs((m) => [...m, { role: "assistant", content: res.reply! }]);
      } else {
        setMsgs((m) => [
          ...m,
          {
            role: "assistant",
            content: `Ops, não consegui responder agora. (${res.error ?? "erro"})`,
          },
        ]);
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 px-4 py-3 text-white shadow-lg shadow-fuchsia-500/30 hover:scale-105 active:scale-95 transition"
        aria-label="Abrir Professor Brilho"
      >
        <GraduationCap className="w-5 h-5" />
        <span className="font-semibold text-sm hidden sm:inline">
          Professor Brilho
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center sm:justify-end p-0 sm:p-5"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:w-[420px] h-[80vh] sm:h-[600px] bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            >
              <header className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  <div>
                    <div className="font-bold text-sm leading-tight">
                      Professor Brilho
                    </div>
                    <div className="text-[11px] opacity-80">
                      {MODULE_LABEL[modulo]}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-full hover:bg-white/20"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </header>

              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-slate-50 dark:bg-slate-950"
              >
                {msgs.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-violet-600 text-white rounded-br-sm"
                          : "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-sm shadow-sm"
                      }`}
                    >
                      <div className="prose prose-sm dark:prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))}
                {busy && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-slate-800 px-3 py-2 rounded-2xl shadow-sm">
                      <Loader2 className="w-4 h-4 animate-spin text-violet-600" />
                    </div>
                  </div>
                )}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="flex items-center gap-2 p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pergunta pro Professor…"
                  disabled={busy}
                  className="flex-1 px-3 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  className="p-2 rounded-full bg-violet-600 text-white disabled:opacity-40 hover:bg-violet-700"
                  aria-label="Enviar"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
