import { useState } from "react";
import { User } from "lucide-react";
export function PraticaIndependente({
  dados,
}: {
  dados: { enunciado: string; resposta: string; dica?: string };
}) {
  const [ver, setVer] = useState(false);
  const [dica, setDica] = useState(false);
  return (
    <div className="rounded-3xl bg-white text-[#0d1f55] p-6 border-2 border-white/40 shadow-xl">
      <div className="flex items-center gap-2 mb-3 text-[#FF6B2B]">
        <User className="h-5 w-5" />
        <span className="text-xs font-black uppercase tracking-widest">Agora você</span>
      </div>
      <p className="text-base leading-relaxed mb-4 font-bold">{dados.enunciado}</p>
      <div className="flex gap-2">
        {dados.dica && !dica && (
          <button
            onClick={() => setDica(true)}
            className="flex-1 h-11 rounded-2xl bg-[#FFC93C] text-[#0d1f55] font-black active:scale-[0.98]"
          >
            💡 Dica
          </button>
        )}
        {!ver && (
          <button
            onClick={() => setVer(true)}
            className="flex-1 h-11 rounded-2xl bg-[#FF6B2B] text-white font-black active:scale-[0.98]"
          >
            Ver resposta
          </button>
        )}
      </div>
      {dica && dados.dica && (
        <div className="mt-3 rounded-2xl bg-[#FFC93C]/15 border-2 border-[#FFC93C]/40 p-3 text-sm">
          {dados.dica}
        </div>
      )}
      {ver && (
        <div className="mt-3 rounded-2xl bg-[#FF6B2B]/10 border-2 border-[#FF6B2B]/30 p-4">
          <div className="text-xs font-black uppercase tracking-widest text-[#FF6B2B] mb-1.5">
            Resposta
          </div>
          <div className="font-black text-lg">{dados.resposta}</div>
        </div>
      )}
    </div>
  );
}
