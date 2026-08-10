import React from "react";
import { motion } from "framer-motion";

export default function ActivityCard() {
  return (
    // CONTAINER PAI: Centraliza tudo e trava a rolagem horizontal
    <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center p-4 overflow-x-hidden">
      
      {/* CARD DA ATIVIDADE: Borda verde responsiva */}
      <div className="w-full max-w-[380px] bg-slate-50 border-4 border-emerald-500 rounded-3xl p-5 flex flex-col items-center shadow-xl box-border">
        
        {/* HEADER DA ATIVIDADE */}
        <div className="w-full flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
            1
          </div>
          <h2 className="text-lg font-bold text-slate-800 truncate">
            Boas-vindas
          </h2>
        </div>

        {/* ÁREA DA IMAGEM RESPONSIVA */}
        <div className="w-full bg-amber-50/50 rounded-2xl p-4 flex items-center justify-center mb-6">
          <img 
            src="/caminho-da-imagem.png" 
            alt="Personagem" 
            className="w-full max-w-[240px] h-auto object-contain drop-shadow-md"
          />
        </div>

        {/* BOTÕES DE AÇÃO */}
        <div className="w-full flex flex-col items-center gap-3">
          <button className="w-full max-w-[200px] bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-md transition-all">
            🔊 Ouvir
          </button>
          <button className="text-purple-600 font-bold text-sm hover:underline mt-2">
            Continuar ▶
          </button>
        </div>
      </div>
    </div>
  );
}
