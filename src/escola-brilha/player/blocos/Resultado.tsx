import { motion } from "framer-motion";
import { Trophy, Coins } from "lucide-react";
export function Resultado({
  texto,
  acertos,
  total,
}: {
  texto: string;
  acertos: number;
  total: number;
}) {
  const pct = total > 0 ? Math.round((acertos / total) * 100) : 100;
  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] p-6 border-2 border-white/40 shadow-xl text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Trophy className="h-16 w-16 mx-auto mb-2" />
      </motion.div>
      <div className="text-xs font-black uppercase tracking-widest mb-1">Você concluiu!</div>
      <div className="text-4xl font-black mb-2">
        {acertos} / {total}
      </div>
      <div className="text-sm font-bold mb-4">{pct}% de acerto</div>
      <p className="text-base leading-relaxed mb-4">{texto}</p>
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 rounded-full">
        <Coins className="h-5 w-5" />
        <span className="font-black">+20 BrilhoCoins</span>
      </div>
    </div>
  );
}
