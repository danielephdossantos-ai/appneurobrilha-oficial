import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ProfessorPipMat } from "./ProfessorPipMat";
import pipRoqueiro from "@/assets/pip-teen-roqueiro.png.asset.json";

interface Props {
  crianca?: { nome?: string; idade?: number; serie?: string };
}

/** Botão fixo do Pip Teen Roqueiro (professor de matemática) nas aulas. */
export function PipMatBubble({ crianca }: Props) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      {!aberto && (
        <button
          type="button"
          onClick={() => setAberto(true)}
          aria-label="Falar com o Pip Teen Roqueiro, professor de matemática"
          className="fixed bottom-5 right-5 z-[9998] grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-700 shadow-[0_8px_30px_-6px_rgba(192,38,211,0.8)] ring-2 ring-fuchsia-300/60 transition hover:brightness-110 active:scale-95"
        >
          <img
            src={pipRoqueiro.url}
            alt=""
            className="h-14 w-14 object-contain drop-shadow"
          />
          <span className="absolute -top-1 -right-1 rounded-full bg-amber-300 px-1.5 py-0.5 text-[10px] font-black text-[#3b2400]">
            🎸
          </span>
        </button>
      )}

      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/60 backdrop-blur-sm p-0 sm:items-center sm:p-4"
            onClick={() => setAberto(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-slate-100 dark:bg-slate-950 sm:h-[85vh] sm:rounded-3xl"
            >
              <button
                type="button"
                onClick={() => setAberto(false)}
                aria-label="Fechar professor de matemática"
                className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex-1 overflow-y-auto p-3 sm:p-5">
                <ProfessorPipMat crianca={crianca} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
