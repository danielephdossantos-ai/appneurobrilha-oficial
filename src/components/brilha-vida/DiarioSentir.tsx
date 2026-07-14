import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, BookHeart } from "lucide-react";

import { url as imgFeliz } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import { url as imgTranquilo } from "@/assets/brilha-vida/emocoes/tranquilo.png.asset.json";
import { url as imgConfuso } from "@/assets/brilha-vida/emocoes/confuso.png.asset.json";
import { url as imgTriste } from "@/assets/brilha-vida/emocoes/triste.png.asset.json";
import { url as imgBravo } from "@/assets/brilha-vida/emocoes/bravo.png.asset.json";

const EMOJIS = [
  { id: "feliz", img: imgFeliz, nome: "Feliz", cor: "#ec4899" },
  { id: "tranquilo", img: imgTranquilo, nome: "Tranquilo", cor: "#22c55e" },
  { id: "confuso", img: imgConfuso, nome: "Confuso", cor: "#eab308" },
  { id: "triste", img: imgTriste, nome: "Triste", cor: "#f97316" },
  { id: "bravo", img: imgBravo, nome: "Bravo", cor: "#ef4444" },
];

const MOMENTOS = [
  { emoji: "🌅", nome: "De manhã" },
  { emoji: "🏫", nome: "Na escola" },
  { emoji: "🏠", nome: "Em casa" },
  { emoji: "🌙", nome: "À noite" },
];

const GRATIDOES = [
  { emoji: "👨‍👩‍👧", texto: "Minha família" },
  { emoji: "🐶", texto: "Meu bichinho" },
  { emoji: "🍎", texto: "Minha comida" },
  { emoji: "🎨", texto: "Brincar" },
  { emoji: "☀️", texto: "O sol" },
  { emoji: "🤗", texto: "Um abraço" },
];

export function DiarioSentir({ onClose }: { onClose: () => void }) {
  const [emocao, setEmocao] = useState<typeof EMOJIS[number] | null>(null);
  const [momento, setMomento] = useState<typeof MOMENTOS[number] | null>(null);
  const [gratidao, setGratidao] = useState<typeof GRATIDOES[number] | null>(null);

  const passo = !emocao ? 1 : !momento ? 2 : !gratidao ? 3 : 4;

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] bg-gradient-to-b from-pink-50 to-white">
      <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10">
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1 flex items-center gap-2">
        <BookHeart className="text-pink-500" /> Diário do Sentir
      </h2>
      <p className="text-sm text-slate-600 font-medium mb-4 text-center max-w-md">
        Conte como foi o seu dia em 3 passinhos.
      </p>

      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map((p) => (
          <div key={p} className={`h-2 w-10 rounded-full ${p <= passo ? "bg-pink-500" : "bg-slate-200"}`} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {passo === 1 && (
          <motion.div key="p1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-2xl">
            <h3 className="font-black text-center text-slate-700 mb-3">1. Que emoção marcou o dia?</h3>
            <div className="grid grid-cols-5 gap-2">
              {EMOJIS.map((e) => (
                <button key={e.id} onClick={() => setEmocao(e)} className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-white border-2 border-slate-100 hover:border-pink-300 hover:scale-105 transition-all">
                  <img src={e.img} alt={e.nome} className="w-16 h-16 object-contain" />
                  <span className="text-xs font-black text-slate-700">{e.nome}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {passo === 2 && (
          <motion.div key="p2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-md">
            <h3 className="font-black text-center text-slate-700 mb-3">2. Quando isso aconteceu?</h3>
            <div className="grid grid-cols-2 gap-2">
              {MOMENTOS.map((m) => (
                <button key={m.nome} onClick={() => setMomento(m)} className="flex items-center gap-2 p-4 rounded-2xl bg-white border-2 border-slate-100 hover:border-pink-300 hover:scale-105 transition-all">
                  <span className="text-3xl" aria-hidden>{m.emoji}</span>
                  <span className="font-black text-sm text-slate-700">{m.nome}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {passo === 3 && (
          <motion.div key="p3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-2xl">
            <h3 className="font-black text-center text-slate-700 mb-3">3. Pelo que você é grato(a) hoje?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {GRATIDOES.map((g) => (
                <button key={g.texto} onClick={() => setGratidao(g)} className="flex items-center gap-2 p-3 rounded-2xl bg-white border-2 border-slate-100 hover:border-pink-300 hover:scale-105 transition-all">
                  <span className="text-3xl" aria-hidden>{g.emoji}</span>
                  <span className="font-black text-sm text-slate-700">{g.texto}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {passo === 4 && emocao && momento && gratidao && (
          <motion.div key="r" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-6 shadow-xl border-4 max-w-md text-center" style={{ borderColor: emocao.cor }}>
            <div className="flex items-center justify-center gap-2 text-emerald-600 mb-2">
              <Check size={22} /> <span className="font-black">Diário escrito!</span>
            </div>
            <img src={emocao.img} alt={emocao.nome} className="w-24 h-24 object-contain mx-auto mb-3" />
            <p className="text-slate-700 font-bold mb-2">
              Hoje você se sentiu <span style={{ color: emocao.cor }}>{emocao.nome.toLowerCase()}</span> {momento.nome.toLowerCase()} {momento.emoji}
            </p>
            <p className="text-slate-700 font-bold">
              E é grato(a) por {gratidao.texto.toLowerCase()} {gratidao.emoji}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3">
        {(emocao || momento || gratidao) && (
          <button onClick={() => { setEmocao(null); setMomento(null); setGratidao(null); }} className="px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50">
            Começar de novo
          </button>
        )}
        <button onClick={onClose} className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform">
          Pronto
        </button>
      </div>
    </div>
  );
}
