import { useState } from "react";
import { Users } from "lucide-react";
export function PraticaGuiada({
  dados,
}: {
  dados: { enunciado: string; resposta: string; explicacao: string };
}) {
  const [ver, setVer] = useState(false);
  return (
    <div className="rounded-3xl bg-white text-[#0d1f55] p-6 border-2 border-white/40 shadow-xl">
      <div className="flex items-center gap-2 mb-3 text-[#9B6CFF]">
        <Users className="h-5 w-5" />
        <span className="text-xs font-black uppercase tracking-widest">Vamos fazer juntos</span>
      </div>
      <p className="text-base leading-relaxed mb-4 font-bold">{dados.enunciado}</p>
      {!ver ? (
        <button
          onClick={() => setVer(true)}
          className="w-full h-12 rounded-2xl bg-[#9B6CFF] text-white font-black active:scale-[0.98]"
        >
          Mostrar resposta
        </button>
      ) : (
        <div className="rounded-2xl bg-[#9B6CFF]/10 border-2 border-[#9B6CFF]/30 p-4">
          <div className="text-xs font-black uppercase tracking-widest text-[#9B6CFF] mb-1.5">
            Resposta
          </div>
          <div className="font-black text-lg mb-2">{dados.resposta}</div>
          <p className="text-sm leading-relaxed">{dados.explicacao}</p>
        </div>
      )}
    </div>
  );
}
