import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useServerFn } from "@tanstack/react-start";
import {
  professorInglesChat,
  traduzirProfessorIngles,
} from "@/lib/professor-ingles.functions";
import { transcreverAudio } from "@/lib/stt.functions";
import { speakEnglish, stopSpeakingEn } from "@/lib/native-tts-en";
import { url as professoraImg } from "@/assets/pip-girl-professora.png.asset.json";

export interface ProfessorInglesContexto {
  cursoSlug: string;
  aulaSlug: string;
  aulaTitulo?: string;
  serie?: string;
  unitLabel?: string;
  vocab?: string[];
}

interface Msg {
  role: "user" | "assistant";
  content: string;
  translation?: string;
}

interface Props {
  contexto: ProfessorInglesContexto;
}

/**
 * Teacher Brilha — chat de inglês que conversa DE VERDADE com o aluno:
 * responde em inglês adaptado à série (com apoio em pt-BR), lê em voz alta
 * (voz em inglês nativa) e aceita voz do aluno (mic → Whisper em inglês).
 * Toque no balão do professor pra ouvir de novo, ou no globo pra ver tradução.
 */
export function ProfessorInglesBubble({ contexto }: Props) {
  const [aberto, setAberto] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [mensagens, setMensagens] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [gravando, setGravando] = useState(false);
  const [transcrevendo, setTranscrevendo] = useState(false);
  const [traduzindoIdx, setTraduzindoIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const enviar = useServerFn(professorInglesChat);
  const traduzir = useServerFn(traduzirProfessorIngles);
  const transcrever = useServerFn(transcreverAudio);

  // Idioma da voz do mic: séries iniciais ainda falam bastante pt.
  const gradeNum = parseInt(contexto.serie?.match(/\d+/)?.[0] ?? "3", 10);
  const micLang = gradeNum <= 2 ? "pt" : "en";

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [mensagens, carregando]);

  useEffect(() => () => {
    stopSpeakingEn();
    pararMicrofone();
  }, []);

  const falar = (t: string) => {
    stopSpeakingEn();
    // A resposta pode ter partes em pt entre parênteses; o TTS-en lê os dois,
    // mas com sotaque en. É intencional: o aluno ouve o inglês na entonação certa.
    speakEnglish(t, { rate: gradeNum <= 3 ? 0.85 : 0.95, queue: false });
  };

  const handleEnviar = async () => {
    const texto = input.trim();
    if (!texto || carregando) return;
    setInput("");
    setErro(null);
    const novasLocais = [...mensagens, { role: "user" as const, content: texto }];
    setMensagens(novasLocais);
    setCarregando(true);
    try {
      const res = await enviar({
        data: { contexto, mensagem: texto, historico: mensagens.slice(-20) },
      });
      if (res.ok) {
        const nova: Msg = { role: "assistant", content: res.resposta };
        setMensagens([...novasLocais, nova]);
        falar(res.resposta);
      } else {
        setErro(res.mensagem);
      }
    } catch (e) {
      console.error(e);
      setErro("I couldn't answer now. Try again!");
    } finally {
      setCarregando(false);
    }
  };

  const pedirTraducao = async (i: number) => {
    const msg = mensagens[i];
    if (!msg || msg.role !== "assistant") return;
    if (msg.translation) return; // toggle handled na UI
    setTraduzindoIdx(i);
    try {
      const r = await traduzir({ data: { texto: msg.content, para: "pt" } });
      if (r.ok) {
        setMensagens((prev) =>
          prev.map((m, idx) => (idx === i ? { ...m, translation: r.texto } : m)),
        );
      }
    } catch (e) {
      console.error(e);
    } finally {
      setTraduzindoIdx(null);
    }
  };

  // ---------- Microfone ----------
  const escolherMime = (): string => {
    const cands = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/mpeg"];
    const MR: any = typeof window !== "undefined" ? (window as any).MediaRecorder : null;
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
          setErro("Too short. Hold the mic and speak close!");
          return;
        }
        setTranscrevendo(true);
        try {
          const buf = await blob.arrayBuffer();
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
            data: { audioBase64: b64, mimeType, language: micLang },
          });
          if (res.ok) {
            setInput((prev) => (prev ? prev + " " + res.texto : res.texto));
          } else {
            setErro(res.mensagem);
          }
        } catch (e) {
          console.error(e);
          setErro("Couldn't hear you. Try again!");
        } finally {
          setTranscrevendo(false);
        }
      };
      recorderRef.current = rec;
      rec.start();
      setGravando(true);
    } catch (e) {
      console.error(e);
      setErro("I need the microphone to hear you. Please allow it!");
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

  return (
    <>
      {!aberto && (
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => setAberto(true)}
          className="fixed bottom-5 right-5 z-[9998] rounded-full w-16 h-16 grid place-items-center bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 shadow-[0_8px_24px_-6px_rgba(59,130,246,0.7)] hover:scale-105 transition border-2 border-white"
          aria-label="Teacher Brilha — talk in English"
        >
          <div className="relative">
            <img
              src={professoraImg}
              alt="Teacher Brilha"
              className="w-14 h-14 object-contain drop-shadow"
            />
            <div className="absolute -bottom-1 -right-1 bg-white text-[9px] font-black text-blue-700 rounded-full px-1.5 py-0.5 border border-blue-300">
              EN
            </div>
          </div>
        </motion.button>
      )}

      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
            onClick={() => {
              stopSpeakingEn();
              setAberto(false);
            }}
          >
            <motion.div
              initial={{ y: 40, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 40, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-md h-[85vh] sm:h-[620px] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden bg-white shadow-2xl"
            >
              <div className="px-4 py-3 flex items-center gap-3 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 text-white">
                <div className="w-11 h-11 rounded-full grid place-items-center overflow-hidden bg-white/25">
                  <img
                    src={professoraImg}
                    alt="Teacher Brilha"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-base leading-tight">Teacher Brilha</div>
                  <div className="text-[11px] leading-tight truncate opacity-90">
                    {contexto.unitLabel ?? contexto.aulaTitulo ?? contexto.aulaSlug} · Let's speak English!
                  </div>
                </div>
                <button
                  onClick={() => {
                    stopSpeakingEn();
                    setAberto(false);
                  }}
                  className="w-9 h-9 rounded-full grid place-items-center bg-white/20 hover:bg-white/30"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-sky-50/60"
              >
                {mensagens.length === 0 && !carregando && (
                  <div className="text-center px-4 py-6 rounded-2xl bg-white border border-sky-200 text-slate-700">
                    <img
                      src={professoraImg}
                      alt="Teacher Brilha"
                      className="w-16 h-16 object-contain mx-auto mb-2"
                    />
                    <div className="font-bold text-sm mb-1 text-blue-700">
                      Hi! I'm Teacher Brilha 👋
                    </div>
                    <div className="text-xs leading-relaxed">
                      Fale ou escreva comigo em inglês (ou português).
                      Eu falo com você em voz alta, corrijo com carinho e ajudo
                      quando você travar.
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
                      {[
                        "Hello! How are you?",
                        "How do I say 'obrigado'?",
                        "Ajuda com esta atividade",
                      ].map((s) => (
                        <button
                          key={s}
                          onClick={() => setInput(s)}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-blue-700 hover:bg-sky-200"
                        >
                          {s}
                        </button>
                      ))}
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
                          ? "bg-blue-500 text-white rounded-br-sm font-medium"
                          : "bg-white text-slate-800 border border-sky-200 rounded-bl-sm shadow-sm"
                      }`}
                    >
                      <div>{m.content}</div>
                      {m.role === "assistant" && (
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => falar(m.content)}
                            className="text-[11px] font-bold text-blue-700 bg-sky-100 hover:bg-sky-200 rounded-full px-2 py-0.5"
                            aria-label="Play"
                          >
                            🔊 Play
                          </button>
                          <button
                            onClick={() => pedirTraducao(i)}
                            disabled={traduzindoIdx === i}
                            className="text-[11px] font-bold text-indigo-700 bg-indigo-100 hover:bg-indigo-200 rounded-full px-2 py-0.5 disabled:opacity-50"
                          >
                            {traduzindoIdx === i
                              ? "..."
                              : m.translation
                                ? "🇧🇷 PT"
                                : "🌐 Tradução"}
                          </button>
                        </div>
                      )}
                      {m.translation && (
                        <div className="mt-2 text-[12px] leading-relaxed text-slate-600 italic border-t border-sky-100 pt-1.5">
                          {m.translation}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {carregando && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl px-3.5 py-3 flex gap-1 bg-white border border-sky-200">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-blue-500"
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {erro && (
                  <div className="text-center text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    {erro}
                  </div>
                )}
              </div>

              <div className="px-3 py-3 border-t bg-white border-sky-200">
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
                        ? micLang === "en"
                          ? "🎙️ Speak in English..."
                          : "🎙️ Fale agora..."
                        : transcrevendo
                          ? "Converting your voice..."
                          : "Type or tap the mic (EN/PT)"
                    }
                    maxLength={1500}
                    className="flex-1 rounded-full px-4 py-2.5 text-sm outline-none bg-sky-50 border border-sky-200 text-slate-800 placeholder:text-slate-400 focus:border-blue-400"
                  />
                  <button
                    onClick={gravando ? pararGravacao : iniciarGravacao}
                    disabled={carregando || transcrevendo}
                    className={`w-11 h-11 rounded-full grid place-items-center transition text-lg disabled:opacity-40 ${
                      gravando
                        ? "bg-red-500 text-white animate-pulse"
                        : "bg-sky-100 hover:bg-sky-200 text-blue-700 border border-sky-300"
                    }`}
                    aria-label={gravando ? "Stop" : "Speak"}
                  >
                    {gravando ? "⏹" : "🎙️"}
                  </button>
                  <button
                    onClick={handleEnviar}
                    disabled={carregando || transcrevendo || gravando || !input.trim()}
                    className="w-11 h-11 rounded-full grid place-items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-lg disabled:opacity-40 hover:scale-105 transition"
                    aria-label="Send"
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
