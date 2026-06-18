import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Send, Loader2, Volume2, VolumeX } from "lucide-react";
import { callNeuroBrilhaAI } from "@/services/api/neurobrilha-ai.functions";
import { useAppState } from "@/core/store";
import { usePipVoice } from "@/hooks/usePipVoice";

type Msg = { role: "ai" | "user"; t: string };

interface Props {
  contexto?: string; // ex: "atividade Cantinho da Calma"
}

/**
 * Terapeuta IA flutuante — disponível em todas as telas do Brilha Vida.
 * Conversa direta com a criança + voz auxiliar.
 */
export function TerapeutaFlutuante({ contexto }: Props) {
  const { activeChild } = useAppState();
  const { speak, stop, isSpeaking } = usePipVoice();
  const [open, setOpen] = useState(false);
  const [voiceOn, setVoiceOn] = useState(true);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Saudação inicial ao abrir
  useEffect(() => {
    if (open && msgs.length === 0) {
      const nome = activeChild?.nome ? `, ${activeChild.nome}` : "";
      const ctx = contexto ? ` Vi que você está em ${contexto}.` : "";
      const oi = `Oi${nome}! Eu sou sua terapeuta amiga.${ctx} Conta pra mim como você está se sentindo agora?`;
      setMsgs([{ role: "ai", t: oi }]);
      if (voiceOn) speak(oi);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, loading]);

  useEffect(() => {
    return () => stop();
  }, [stop]);

  const enviar = async () => {
    if (!input.trim() || loading || !activeChild) return;
    const pergunta = input.trim();
    const novos: Msg[] = [...msgs, { role: "user", t: pergunta }];
    setMsgs(novos);
    setInput("");
    setLoading(true);
    stop();

    try {
      const prefacio = `[VOCÊ ESTÁ FALANDO DIRETAMENTE COM A CRIANÇA — ${activeChild.nome ?? "criança"}, ${activeChild.idade ?? "?"} anos${contexto ? `, durante a atividade ${contexto}` : ""}. Use frases muito curtas, linguagem simples e acolhedora, como uma terapeuta infantil falando ao vivo. Máximo 2 frases por resposta. Sem listas. Sem markdown.]\n\nA criança disse: "${pergunta}"`;

      const resposta = await callNeuroBrilhaAI({
        data: {
          mode: "terapeuta",
          child: activeChild as any,
          mascot: null,
          message: prefacio,
          chatHistory: msgs.map((m) => ({
            role: m.role === "ai" ? ("assistant" as const) : ("user" as const),
            content: m.t,
          })),
        },
      });

      const texto = (resposta as string) ?? "Estou aqui com você. Respira fundo comigo.";
      setMsgs([...novos, { role: "ai", t: texto }]);
      if (voiceOn) speak(texto);
    } catch (e) {
      console.error("[Terapeuta] erro:", e);
      const fallback = "Estou aqui com você. Respira fundo: inspira pelo nariz… e solta devagar pela boca.";
      setMsgs([...novos, { role: "ai", t: fallback }]);
      if (voiceOn) speak(fallback);
    } finally {
      setLoading(false);
    }
  };

  const toggleVoice = () => {
    setVoiceOn((v) => {
      if (v) stop();
      return !v;
    });
  };

  return (
    <>
      {/* Botão flutuante */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen(true)}
        aria-label="Falar com a terapeuta"
        className="fixed bottom-6 right-6 z-[90] flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-2xl font-black border-4 border-white"
      >
        <motion.span
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex"
        >
          <Heart className="h-5 w-5 fill-white" />
        </motion.span>
        <span className="text-sm hidden sm:inline">Preciso de Ajuda</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="p-4 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-t-3xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                    💗
                  </div>
                  <div>
                    <h3 className="font-black leading-tight">Terapeuta Amiga</h3>
                    <p className="text-xs opacity-90">Estou aqui pra te ouvir</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={toggleVoice}
                    aria-label={voiceOn ? "Desligar voz" : "Ligar voz"}
                    className="p-2 rounded-full hover:bg-white/20"
                  >
                    {voiceOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
                  </button>
                  <button
                    onClick={() => {
                      stop();
                      setOpen(false);
                    }}
                    aria-label="Fechar"
                    className="p-2 rounded-full hover:bg-white/20"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Mensagens */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-rose-50/30">
                {msgs.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm font-medium leading-relaxed ${
                        m.role === "user"
                          ? "bg-primary text-white rounded-br-sm"
                          : "bg-white border-2 border-rose-100 text-slate-700 rounded-bl-sm shadow-sm"
                      }`}
                    >
                      {m.t}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white border-2 border-rose-100 rounded-2xl px-4 py-3 flex gap-1">
                      <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-rose-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                )}
                {isSpeaking && (
                  <div className="text-center text-xs font-bold text-rose-500 flex items-center justify-center gap-1">
                    <Volume2 size={12} className="animate-pulse" /> falando…
                  </div>
                )}
              </div>

              {/* Sugestões + input */}
              <div className="p-3 border-t border-slate-100 bg-white rounded-b-3xl space-y-2">
                {msgs.length <= 1 && (
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Tô com raiva 😠",
                      "Tô triste 😢",
                      "Tô com medo 😨",
                      "Não consigo me acalmar",
                    ].map((s) => (
                      <button
                        key={s}
                        onClick={() => setInput(s)}
                        className="text-xs px-3 py-1.5 bg-rose-100 text-rose-700 rounded-full font-bold hover:bg-rose-200"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && enviar()}
                    disabled={loading}
                    placeholder="Conta o que você está sentindo…"
                    className="flex-1 px-3 py-2.5 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-rose-400 outline-none text-sm font-medium"
                  />
                  <button
                    onClick={enviar}
                    disabled={loading || !input.trim()}
                    className="p-2.5 rounded-xl bg-rose-500 text-white font-bold disabled:opacity-40 hover:bg-rose-600"
                    aria-label="Enviar"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
