import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useServerFn } from "@tanstack/react-start";
import {
  professorBrilhaChat,
  carregarConversaProfessorBrilha,
} from "@/lib/professor-brilha.functions";
import { transcreverAudio } from "@/lib/stt.functions";
import professoraImg from "@/assets/pip-girl-professora.png";

export interface ProfessorBrilhaContexto {
  cursoSlug: string;
  aulaSlug: string;
  cursoTitulo?: string;
  aulaTitulo?: string;
  serie?: string;
  disciplina?: string;
  bncc?: string[];
  cenaAtual?: string;
  resumoAula?: string;
}

interface Msg {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  contexto: ProfessorBrilhaContexto;
  teen?: boolean;
}

export function ProfessorBrilhaBubble({ contexto, teen = false }: Props) {
  const [aberto, setAberto] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [mensagens, setMensagens] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [carregouHistorico, setCarregouHistorico] = useState(false);
  const [gravando, setGravando] = useState(false);
  const [transcrevendo, setTranscrevendo] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const enviar = useServerFn(professorBrilhaChat);
  const carregar = useServerFn(carregarConversaProfessorBrilha);
  const transcrever = useServerFn(transcreverAudio);


  // Carregar histórico ao abrir pela primeira vez
  useEffect(() => {
    if (!aberto || carregouHistorico) return;
    (async () => {
      try {
        const res = await carregar({
          data: { cursoSlug: contexto.cursoSlug, aulaSlug: contexto.aulaSlug },
        });
        if (res?.mensagens?.length) {
          setMensagens(
            res.mensagens.map((m: any) => ({ role: m.role, content: m.content })),
          );
        }
      } catch {
        /* segue vazio */
      } finally {
        setCarregouHistorico(true);
      }
    })();
  }, [aberto, carregouHistorico, contexto.cursoSlug, contexto.aulaSlug, carregar]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [mensagens, carregando]);

  const handleEnviar = async () => {
    const texto = input.trim();
    if (!texto || carregando) return;
    setInput("");
    setErro(null);
    const novasLocais = [...mensagens, { role: "user" as const, content: texto }];
    setMensagens(novasLocais);
    setCarregando(true);
    try {
      const res = await enviar({ data: { contexto, mensagem: texto } });
      if (res.ok) {
        setMensagens([...novasLocais, { role: "assistant", content: res.resposta }]);
      } else {
        setErro(res.mensagem);
        const { notificarErroIA } = await import("@/lib/notify-ai-error");
        notificarErroIA(res.motivo, "Professor Brilha");
      }
    } catch (e) {
      console.error(e);
      setErro("Não consegui te responder agora. Tenta de novo!");
      const { notificarErroIA } = await import("@/lib/notify-ai-error");
      notificarErroIA("erro", "Professor Brilha");
    } finally {
      setCarregando(false);
    }
  };

  // Escolhe o melhor mimeType suportado pelo navegador
  const escolherMime = (): string => {
    const cands = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/mpeg"];
    const MR: any = (typeof window !== "undefined" ? (window as any).MediaRecorder : null);
    if (!MR || !MR.isTypeSupported) return "audio/webm";
    for (const c of cands) if (MR.isTypeSupported(c)) return c;
    return "audio/webm";
  };

  const pararMicrofone = () => {
    try {
      recorderRef.current?.state === "recording" && recorderRef.current?.stop();
    } catch {}
    try {
      streamRef.current?.getTracks().forEach((t) => t.stop());
    } catch {}
    recorderRef.current = null;
    streamRef.current = null;
  };

  const iniciarGravacao = async () => {
    if (gravando || carregando || transcrevendo) return;
    setErro(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mimeType = escolherMime();
      const rec = new MediaRecorder(stream, { mimeType });
      chunksRef.current = [];
      rec.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
      };
      rec.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: mimeType });
        chunksRef.current = [];
        pararMicrofone();
        if (blob.size < 2048) {
          setErro("Gravação muito curta. Segura o botão e fala pertinho!");
          return;
        }
        setTranscrevendo(true);
        try {
          const buf = await blob.arrayBuffer();
          // Converte pra base64 sem estourar o stack
          let bin = "";
          const bytes = new Uint8Array(buf);
          const chunkSize = 0x8000;
          for (let i = 0; i < bytes.length; i += chunkSize) {
            bin += String.fromCharCode.apply(
              null,
              Array.from(bytes.subarray(i, i + chunkSize)),
            );
          }
          const b64 = btoa(bin);
          const res = await transcrever({
            data: { audioBase64: b64, mimeType, language: "pt" },
          });
          if (res.ok) {
            setInput((prev) => (prev ? prev + " " + res.texto : res.texto));
          } else {
            setErro(res.mensagem);
            const { notificarErroIA } = await import("@/lib/notify-ai-error");
            notificarErroIA(res.motivo, "Transcrição");
          }
        } catch (e) {
          console.error(e);
          setErro("Não consegui transcrever. Tenta de novo!");
        } finally {
          setTranscrevendo(false);
        }
      };
      recorderRef.current = rec;
      rec.start();
      setGravando(true);
    } catch (e) {
      console.error(e);
      setErro("Preciso do microfone pra escutar você. Libere o acesso!");
      pararMicrofone();
    }
  };

  const pararGravacao = () => {
    if (!gravando) return;
    setGravando(false);
    try {
      recorderRef.current?.state === "recording" && recorderRef.current?.stop();
    } catch {
      pararMicrofone();
    }
  };

  // Cleanup ao desmontar
  useEffect(() => {
    return () => pararMicrofone();
  }, []);



  const botaoCor = teen
    ? "bg-cyan-500 hover:bg-cyan-400 shadow-[0_0_24px_-6px_rgba(103,232,249,0.9)] border border-cyan-300/40"
    : "bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 shadow-lg hover:scale-105";

  return (
    <>
      {/* Botão flutuante */}
      {!aberto && (
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => setAberto(true)}
          className={`fixed bottom-5 right-5 z-[9998] rounded-full w-16 h-16 grid place-items-center transition ${botaoCor}`}
          aria-label="Professor Brilha — tirar dúvida"
        >
          <div className="relative">
            <img
              src={professoraImg}
              alt="Professora Brilha"
              className="w-14 h-14 object-contain drop-shadow"
            />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 border-2 border-white"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.button>
      )}

      {/* Painel do chat */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4"
            onClick={() => setAberto(false)}
          >
            <motion.div
              initial={{ y: 40, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 40, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full sm:max-w-md h-[85vh] sm:h-[600px] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden ${
                teen
                  ? "bg-slate-900 border border-cyan-500/25"
                  : "bg-white shadow-2xl"
              }`}
            >
              {/* Header */}
              <div
                className={`px-4 py-3 flex items-center gap-3 ${
                  teen
                    ? "bg-slate-950 border-b border-cyan-500/20"
                    : "bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-full grid place-items-center overflow-hidden ${
                    teen ? "bg-cyan-500/15 border border-cyan-500/40" : "bg-white/40"
                  }`}
                >
                  <img
                    src={professoraImg}
                    alt="Professora Brilha"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={`font-black text-base leading-tight ${
                      teen ? "text-cyan-100" : "text-[#3d2500]"
                    }`}
                  >
                    Professora Brilha
                  </div>
                  <div
                    className={`text-[11px] leading-tight truncate ${
                      teen ? "text-slate-400" : "text-[#5b3a00]/80"
                    }`}
                  >
                    Aula: {contexto.aulaTitulo ?? contexto.aulaSlug}
                  </div>
                </div>
                <button
                  onClick={() => setAberto(false)}
                  className={`w-9 h-9 rounded-full grid place-items-center transition ${
                    teen
                      ? "bg-slate-800 hover:bg-slate-700 text-slate-300"
                      : "bg-white/30 hover:bg-white/50 text-[#3d2500]"
                  }`}
                  aria-label="Fechar"
                >
                  ✕
                </button>
              </div>

              {/* Mensagens */}
              <div
                ref={scrollRef}
                className={`flex-1 overflow-y-auto px-4 py-4 space-y-3 ${
                  teen ? "bg-slate-900" : "bg-amber-50/40"
                }`}
              >
                {mensagens.length === 0 && !carregando && (
                  <div
                    className={`text-center px-4 py-6 rounded-2xl ${
                      teen
                        ? "bg-slate-800/60 border border-slate-700 text-slate-300"
                        : "bg-white border border-amber-200 text-[#5b3a00]"
                    }`}
                  >
                    <img
                      src={professoraImg}
                      alt="Professora Brilha"
                      className="w-16 h-16 object-contain mx-auto mb-2"
                    />
                    <div className="font-bold text-sm mb-1">
                      Oi! Sou sua Professora Brilha.
                    </div>
                    <div className="text-xs leading-relaxed">
                      Ficou com dúvida na aula? Me pergunta! Eu tô aqui pra te ajudar
                      a entender o assunto — mas quem descobre é você. 🌟
                    </div>
                  </div>
                )}

                {mensagens.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                        m.role === "user"
                          ? teen
                            ? "bg-cyan-600 text-white rounded-br-sm"
                            : "bg-amber-400 text-[#3d2500] rounded-br-sm font-semibold"
                          : teen
                            ? "bg-slate-800 text-slate-100 border border-slate-700 rounded-bl-sm"
                            : "bg-white text-slate-800 border border-amber-200 rounded-bl-sm"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}

                {carregando && (
                  <div className="flex justify-start">
                    <div
                      className={`rounded-2xl px-3.5 py-3 flex gap-1 ${
                        teen
                          ? "bg-slate-800 border border-slate-700"
                          : "bg-white border border-amber-200"
                      }`}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            teen ? "bg-cyan-300" : "bg-amber-500"
                          }`}
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {erro && (
                  <div className="text-center text-xs text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    {erro}
                  </div>
                )}
              </div>

              {/* Input */}
              <div
                className={`px-3 py-3 border-t ${
                  teen
                    ? "bg-slate-950 border-slate-800"
                    : "bg-white border-amber-200"
                }`}
              >
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleEnviar();
                      }
                    }}
                    disabled={carregando || transcrevendo || gravando}
                    placeholder={
                      gravando
                        ? "🎙️ Escutando..."
                        : transcrevendo
                          ? "Convertendo sua voz em texto..."
                          : "Escreve ou toca no microfone..."
                    }
                    maxLength={1500}
                    className={`flex-1 rounded-full px-4 py-2.5 text-sm outline-none transition ${
                      teen
                        ? "bg-slate-800 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500"
                        : "bg-amber-50 border border-amber-200 text-slate-800 placeholder:text-amber-800/50 focus:border-amber-400"
                    }`}
                  />
                  <button
                    onClick={gravando ? pararGravacao : iniciarGravacao}
                    disabled={carregando || transcrevendo}
                    className={`w-11 h-11 rounded-full grid place-items-center transition text-lg disabled:opacity-40 disabled:cursor-not-allowed ${
                      gravando
                        ? "bg-red-500 text-white animate-pulse"
                        : teen
                          ? "bg-slate-800 hover:bg-slate-700 text-cyan-200 border border-slate-700"
                          : "bg-amber-100 hover:bg-amber-200 text-[#3d2500] border border-amber-300"
                    }`}
                    aria-label={gravando ? "Parar gravação" : "Falar pergunta"}
                    title={gravando ? "Toca pra parar" : "Toca pra falar"}
                  >
                    {gravando ? "⏹" : "🎙️"}
                  </button>
                  <button
                    onClick={handleEnviar}
                    disabled={carregando || transcrevendo || gravando || !input.trim()}
                    className={`w-11 h-11 rounded-full grid place-items-center transition text-lg font-bold disabled:opacity-40 disabled:cursor-not-allowed ${
                      teen
                        ? "bg-cyan-500 hover:bg-cyan-400 text-white"
                        : "bg-gradient-to-br from-amber-400 to-amber-500 text-[#3d2500] hover:scale-105"
                    }`}
                    aria-label="Enviar"
                  >
                    ➤
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
