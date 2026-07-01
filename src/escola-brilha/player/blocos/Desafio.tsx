import { useState } from "react";
import { Trophy } from "lucide-react";
export function Desafio({ dados }: { dados: { enunciado: string; resposta: string } }) {
  const [ver, setVer] = useState(false);
  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#F43F5E]/25 to-[#FFC93C]/25 border-2 border-white/20 p-6">
      <div className="flex items-center gap-2 mb-3 text-[#FFC93C]">
        <Trophy className="h-5 w-5" />
        <span className="text-xs font-black uppercase tracking-widest">Desafio</span>
      </div>
      <p className="text-base leading-relaxed mb-4 font-bold">{dados.enunciado}</p>
      {!ver ? (
        <button
          onClick={() => setVer(true)}
          className="w-full h-12 rounded-2xl bg-[#F43F5E] text-white font-black active:scale-[0.98]"
        >
          Ver solução
        </button>
      ) : (
        <div className="rounded-2xl bg-white/10 border-2 border-white/20 p-4">
          <div className="text-xs font-black uppercase tracking-widest text-[#FFC93C] mb-1.5">
            Solução
          </div>
          <div className="font-black text-lg">{dados.resposta}</div>
        </div>
      )}
    </div>
  );
}
