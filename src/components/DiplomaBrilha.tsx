import { motion } from "framer-motion";
import { ESQUILO_BRILHA, type MascotePersonagem } from "@/escola-brilha/mascotes-personagens";

/**
 * Diploma PADRÃO do app.
 *
 * Regras travadas:
 *  - Assinatura oficial fixa: Esquilo Brilha.
 *  - Cada diploma exibe 1 mascote colecionável (vindo da Loja de Mascotes).
 *    A criança quer completar a coleção → apego + retenção.
 *  - Layout imprimível (window.print()).
 *
 * Uso:
 *   <DiplomaBrilha
 *     aluno="Ana"
 *     titulo="Grande Explorador do Município"
 *     curso="Geografia — 2º ano"
 *     mascote={PERSONAGENS.aurora}
 *     numeroColecao={1}
 *     totalColecao={30}
 *     onFechar={...}
 *   />
 */
export type DiplomaBrilhaProps = {
  aluno: string;
  titulo: string;
  curso: string;
  descricao?: string;
  mascote: MascotePersonagem;
  numeroColecao?: number;
  totalColecao?: number;
  onFechar: () => void;
};

export function DiplomaBrilha({
  aluno,
  titulo,
  curso,
  descricao,
  mascote,
  numeroColecao,
  totalColecao,
  onFechar,
}: DiplomaBrilhaProps) {
  const dataHoje = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 print:bg-white print:static print:p-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onFechar}
    >
      <motion.div
        initial={{ scale: 0.7, rotate: -4 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0.7, rotate: 4 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#fdf6e3] text-[#1a0d3d] rounded-2xl p-6 md:p-10 max-w-2xl w-full shadow-2xl border-8 border-double border-amber-500 print:shadow-none print:border-4"
      >
        {/* Selo colecionável no canto */}
        {numeroColecao !== undefined && (
          <div className="absolute -top-5 -right-5 bg-amber-500 text-white text-xs font-black uppercase tracking-widest rounded-full h-16 w-16 grid place-items-center shadow-lg border-4 border-[#fdf6e3] print:hidden">
            <div className="text-center leading-tight">
              <div className="text-[10px] opacity-80">Coleção</div>
              <div className="text-base">
                {numeroColecao}
                {totalColecao ? `/${totalColecao}` : ""}
              </div>
            </div>
          </div>
        )}

        <div className="text-center space-y-3">
          <div className="text-[10px] uppercase tracking-[0.3em] text-amber-700">
            Escola Brilha · SPEB 1.0
          </div>

          {/* Mascote colecionável em destaque */}
          <div className="flex flex-col items-center gap-1">
            <motion.img
              src={mascote.img}
              alt={mascote.nome}
              className="h-32 md:h-40 object-contain drop-shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="text-[11px] uppercase tracking-widest text-amber-700 font-bold">
              Mascote da conquista: {mascote.nome}
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black">Diploma de {titulo}</h2>
          <div className="text-sm text-[#1a0d3d]/70">Concedido a</div>
          <div className="text-3xl md:text-4xl font-black tracking-wide border-y-2 border-amber-500 py-3 my-1">
            {aluno}
          </div>

          <p className="text-sm md:text-base px-2">
            {descricao ??
              `Por concluir com sucesso o curso ${curso}, com muito esforço, curiosidade e coragem.`}
          </p>

          <div className="text-xs text-[#1a0d3d]/60 pt-1">{dataHoje}</div>

          {/* Assinaturas */}
          <div className="flex justify-around items-end pt-4 gap-4">
            <div className="flex flex-col items-center">
              <img
                src={mascote.img}
                alt={mascote.nome}
                className="h-14 object-contain"
              />
              <div className="border-t border-[#1a0d3d]/40 mt-1 pt-1 px-4 text-xs font-bold">
                {mascote.nome}
              </div>
              <div className="text-[10px] text-[#1a0d3d]/60">Companheiro(a) da jornada</div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={ESQUILO_BRILHA.img}
                alt={ESQUILO_BRILHA.nome}
                className="h-14 object-contain"
              />
              <div className="border-t border-[#1a0d3d]/40 mt-1 pt-1 px-4 text-xs font-bold">
                {ESQUILO_BRILHA.nome}
              </div>
              <div className="text-[10px] text-[#1a0d3d]/60">Mascote oficial</div>
            </div>
          </div>

          {/* Ações */}
          <div className="flex gap-2 justify-center pt-4 print:hidden">
            <button
              onClick={() => window.print()}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-2 rounded-full text-sm"
            >
              🖨️ Salvar / Imprimir
            </button>
            <button
              onClick={onFechar}
              className="bg-white/60 hover:bg-white text-[#1a0d3d] font-bold px-4 py-2 rounded-full text-sm border border-[#1a0d3d]/20"
            >
              Fechar
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
