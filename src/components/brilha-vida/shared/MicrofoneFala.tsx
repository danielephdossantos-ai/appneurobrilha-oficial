import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * MicrofoneFala — captura a fala da criança usando o reconhecimento
 * nativo do aparelho (Web Speech API). Funciona sem servidor, sem custo.
 * Pra criança que ainda não sabe escrever ou não tem adulto pra ajudar,
 * ela toca no microfone e fala; o texto aparece na tela.
 *
 * Suporte: Chrome / Edge / Safari iOS 14+ / Android WebView moderno.
 * Fallback: mostra aviso se o navegador não suportar.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SpeechRecognitionCtor = new () => any;

function getRecognitionCtor(): SpeechRecognitionCtor | null {
  if (typeof window === "undefined") return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function MicrofoneFala({
  onTexto,
  placeholder = "Toque no microfone e fale…",
  cor = "#8b5cf6",
}: {
  onTexto?: (texto: string) => void;
  placeholder?: string;
  cor?: string;
}) {
  const [texto, setTexto] = useState("");
  const [ouvindo, setOuvindo] = useState(false);
  const [suportado, setSuportado] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recogRef = useRef<any>(null);

  useEffect(() => {
    const Ctor = getRecognitionCtor();
    if (!Ctor) {
      setSuportado(false);
      return;
    }
    const r = new Ctor();
    r.lang = "pt-BR";
    r.continuous = true;
    r.interimResults = true;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    r.onresult = (ev: any) => {
      let final = "";
      let parcial = "";
      for (let i = ev.resultIndex; i < ev.results.length; i++) {
        const t = ev.results[i][0].transcript;
        if (ev.results[i].isFinal) final += t;
        else parcial += t;
      }
      setTexto((prev) => {
        const novo = (final ? prev + final : prev + parcial).trim();
        onTexto?.(novo);
        return novo;
      });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    r.onerror = (ev: any) => {
      setOuvindo(false);
      if (ev.error === "not-allowed" || ev.error === "service-not-allowed") {
        setErro("Precisa deixar o microfone ligado pra eu te ouvir.");
      } else if (ev.error === "no-speech") {
        setErro("Não ouvi nada. Toca de novo e fala perto.");
      } else {
        setErro("Deu um probleminha no microfone. Tenta de novo.");
      }
    };

    r.onend = () => setOuvindo(false);

    recogRef.current = r;
    return () => {
      try { r.stop(); } catch { /* ignore */ }
    };
  }, [onTexto]);

  const iniciar = () => {
    setErro(null);
    if (!recogRef.current) return;
    try {
      recogRef.current.start();
      setOuvindo(true);
    } catch {
      // já rodando
    }
  };

  const parar = () => {
    try { recogRef.current?.stop(); } catch { /* ignore */ }
    setOuvindo(false);
  };

  const limpar = () => {
    setTexto("");
    onTexto?.("");
  };

  if (!suportado) {
    return (
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-3 text-xs text-amber-800 font-medium">
        Esse celular não deixa eu ouvir a sua voz. Pede ajuda pra um adulto ou escreve aqui embaixo.
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        className="rounded-3xl p-4 border-2 shadow-inner bg-white"
        style={{ borderColor: `${cor}55` }}
      >
        <div className="flex items-center gap-3 mb-2">
          <button
            type="button"
            onClick={ouvindo ? parar : iniciar}
            aria-label={ouvindo ? "Parar de ouvir" : "Falar"}
            className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg shrink-0 transition-transform active:scale-95"
            style={{ background: cor }}
          >
            {ouvindo ? <MicOff size={26} /> : <Mic size={26} />}
            {ouvindo && (
              <>
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ background: cor, opacity: 0.35 }}
                  animate={{ scale: [1, 1.6], opacity: [0.35, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ background: cor, opacity: 0.35 }}
                  animate={{ scale: [1, 1.6], opacity: [0.35, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                />
              </>
            )}
          </button>

          <div className="flex-1 min-h-[52px] flex items-center">
            <AnimatePresence mode="wait">
              {texto ? (
                <motion.p
                  key="texto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-slate-800 font-bold text-base leading-snug"
                >
                  {texto}
                </motion.p>
              ) : (
                <motion.p
                  key="ph"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-slate-400 font-medium text-sm"
                >
                  {ouvindo ? "Estou ouvindo…" : placeholder}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {erro && (
          <div className="text-xs font-bold text-rose-600 bg-rose-50 rounded-xl px-3 py-2 mb-2 flex items-center gap-2">
            <Volume2 size={14} /> {erro}
          </div>
        )}

        {texto && (
          <button
            type="button"
            onClick={limpar}
            className="text-xs font-bold text-slate-500 hover:text-slate-700 underline underline-offset-2"
          >
            Apagar e falar de novo
          </button>
        )}
      </div>
      <p className="mt-2 text-[10px] text-slate-500 text-center font-medium">
        Fale devagar e perto. Se não souber escrever, o app entende sua voz.
      </p>
    </div>
  );
}
