import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";

/**
 * Zones of Regulation (Leah Kuypers, 2011)
 * 4 zonas cognitivo-emocionais + gatilhos + kit de ferramentas por zona.
 * Mais rico que o Semáforo do Sentir simples: separa "hipoativado" (azul)
 * de "regulado" (verde), diferenciando calma útil de calma apática.
 */

type ZoneId = "azul" | "verde" | "amarelo" | "vermelho";

const ZONES: Record<
  ZoneId,
  {
    nome: string;
    cor: string;
    bg: string;
    ring: string;
    descricao: string;
    sentimentos: string[];
    gatilhos: string[];
    ferramentas: { emoji: string; nome: string; como: string }[];
  }
> = {
  azul: {
    nome: "Zona Azul",
    cor: "#3b82f6",
    bg: "from-blue-100 to-blue-200",
    ring: "ring-blue-400",
    descricao: "Energia baixa. Corpo devagar, cabeça pesada.",
    sentimentos: ["Triste", "Cansado(a)", "Doente", "Entediado(a)", "Sem vontade"],
    gatilhos: ["Dormi pouco", "Alguém foi embora", "Não consegui o que queria", "Muito tempo parado"],
    ferramentas: [
      { emoji: "🚶", nome: "Movimentar o corpo", como: "Pular 10 vezes ou dar uma caminhada curta." },
      { emoji: "💧", nome: "Beber água gelada", como: "Sentir a água descer acorda o corpo." },
      { emoji: "🎵", nome: "Música alegre", como: "Uma música que dá vontade de mexer." },
      { emoji: "🤗", nome: "Pedir um abraço", como: "Contato físico traz de volta a energia." },
    ],
  },
  verde: {
    nome: "Zona Verde",
    cor: "#22c55e",
    bg: "from-emerald-100 to-emerald-200",
    ring: "ring-emerald-400",
    descricao: "Tudo certo. Corpo calmo, cabeça pronta pra aprender.",
    sentimentos: ["Feliz", "Calmo(a)", "Focado(a)", "Orgulhoso(a)", "Pronto(a)"],
    gatilhos: ["Descansei bem", "Estou com quem gosto", "Fiz algo que gosto", "Comi bem"],
    ferramentas: [
      { emoji: "✅", nome: "Aproveitar o momento", como: "Este é o momento de aprender e brincar." },
      { emoji: "🎨", nome: "Criar algo novo", como: "Desenhar, montar, inventar." },
      { emoji: "😊", nome: "Ajudar alguém", como: "Quando estou bem posso ajudar outros." },
    ],
  },
  amarelo: {
    nome: "Zona Amarela",
    cor: "#eab308",
    bg: "from-yellow-100 to-yellow-200",
    ring: "ring-yellow-400",
    descricao: "Energia subindo. Cuidado! Preciso me regular antes de explodir.",
    sentimentos: ["Preocupado(a)", "Frustrado(a)", "Nervoso(a)", "Confuso(a)", "Empolgado(a) demais", "Bobo(a)"],
    gatilhos: ["Alguém mexeu no meu brinquedo", "Não consegui fazer sozinho", "Barulho demais", "Mudou a rotina"],
    ferramentas: [
      { emoji: "🌬️", nome: "Respiração 4-4-4", como: "Puxa 4s, segura 4s, solta 4s." },
      { emoji: "🔢", nome: "Contar até 10", como: "Um-dois-três... devagar até dez." },
      { emoji: "🧊", nome: "Segurar algo gelado", como: "Cubo de gelo na mão traz de volta o foco." },
      { emoji: "🗣️", nome: "Falar o que sinto", como: "Dizer alto o que está me incomodando." },
    ],
  },
  vermelho: {
    nome: "Zona Vermelha",
    cor: "#ef4444",
    bg: "from-red-100 to-red-200",
    ring: "ring-red-400",
    descricao: "Fora de controle. Corpo em explosão. Preciso de ajuda agora.",
    sentimentos: ["Com raiva", "Aterrorizado(a)", "Devastado(a)", "Fora de mim", "Agressivo(a)"],
    gatilhos: ["Alguém me machucou", "Injustiça", "Perdi algo importante", "Assustei muito"],
    ferramentas: [
      { emoji: "🛑", nome: "Sair do lugar", como: "Ir para o cantinho da calma agora." },
      { emoji: "🫂", nome: "Chamar um adulto", como: "Não estou sozinho. Peço ajuda." },
      { emoji: "🦋", nome: "Abraço da borboleta", como: "Braços cruzados, tapinhas alternados." },
      { emoji: "💪", nome: "Apertar almofada", como: "Colocar a força na almofada, não em pessoas." },
    ],
  },
};

const ORDER: ZoneId[] = ["azul", "verde", "amarelo", "vermelho"];

export function ZonesRegulation({ onClose }: { onClose: () => void }) {
  const [zona, setZona] = useState<ZoneId | null>(null);
  const [etapa, setEtapa] = useState<"identificar" | "gatilho" | "ferramenta">("identificar");

  const z = zona ? ZONES[zona] : null;

  const reset = () => {
    setZona(null);
    setEtapa("identificar");
  };

  return (
    <div
      className={`relative min-h-[70vh] flex flex-col items-center p-6 rounded-[2rem] overflow-hidden transition-colors duration-500 bg-gradient-to-b ${
        z ? z.bg : "from-slate-50 to-white"
      }`}
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg border-2 border-slate-100 text-slate-400 hover:text-destructive z-10"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-black text-slate-800 mb-1">Zonas de Regulação</h2>
      <p className="text-sm text-slate-600 font-medium mb-6 text-center max-w-md">
        {etapa === "identificar" && "Em qual zona você está agora?"}
        {etapa === "gatilho" && "O que fez você entrar nessa zona?"}
        {etapa === "ferramenta" && "Escolha uma ferramenta pra voltar pra verde."}
      </p>

      {/* Seleção da zona */}
      {etapa === "identificar" && (
        <div className="grid grid-cols-2 gap-3 w-full max-w-md">
          {ORDER.map((id) => {
            const zz = ZONES[id];
            return (
              <button
                key={id}
                onClick={() => {
                  setZona(id);
                  setEtapa("gatilho");
                }}
                className="p-5 rounded-3xl text-white font-black shadow-lg border-4 border-white/40 transition-all hover:scale-105 text-left"
                style={{ background: zz.cor }}
              >
                <div className="text-lg mb-1">{zz.nome}</div>
                <div className="text-xs font-medium opacity-90 leading-snug">{zz.descricao}</div>
              </button>
            );
          })}
        </div>
      )}

      {/* Gatilhos e sentimentos */}
      <AnimatePresence mode="wait">
        {etapa === "gatilho" && z && (
          <motion.div
            key="gatilho"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-md bg-white rounded-3xl p-5 shadow-lg border-4"
            style={{ borderColor: z.cor }}
          >
            <div className="text-center mb-4">
              <div className="text-xs font-black uppercase tracking-widest" style={{ color: z.cor }}>
                Você está na
              </div>
              <div className="font-black text-2xl text-slate-800">{z.nome}</div>
            </div>

            <div className="mb-4">
              <div className="text-xs font-bold text-slate-500 uppercase mb-2">Isso é o que se sente:</div>
              <div className="flex flex-wrap gap-2">
                {z.sentimentos.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: z.cor }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs font-bold text-slate-500 uppercase mb-2">O que pode ter causado:</div>
              <ul className="space-y-1">
                {z.gatilhos.map((g) => (
                  <li key={g} className="text-sm text-slate-700 font-medium flex items-start gap-2">
                    <span style={{ color: z.cor }}>•</span> {g}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setEtapa("ferramenta")}
              className="w-full py-3 rounded-2xl font-black text-white shadow-lg"
              style={{ background: z.cor }}
            >
              Ver ferramentas pra me regular →
            </button>
          </motion.div>
        )}

        {etapa === "ferramenta" && z && (
          <motion.div
            key="ferramenta"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-md"
          >
            <div className="grid grid-cols-1 gap-3">
              {z.ferramentas.map((f) => (
                <div
                  key={f.nome}
                  className="bg-white rounded-2xl p-4 shadow-md border-2 flex items-start gap-3"
                  style={{ borderColor: z.cor }}
                >
                  <div className="text-3xl shrink-0">{f.emoji}</div>
                  <div>
                    <div className="font-black text-slate-800">{f.nome}</div>
                    <div className="text-sm text-slate-600 font-medium">{f.como}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-6 flex gap-3 flex-wrap justify-center">
        {zona && (
          <button
            onClick={reset}
            className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50"
          >
            <ArrowLeft size={16} /> Recomeçar
          </button>
        )}
        <button
          onClick={onClose}
          className="px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-glow hover:scale-105 transition-transform"
        >
          Pronto
        </button>
      </div>

      <div className="mt-4 text-[10px] text-slate-500 font-medium text-center max-w-md">
        Base clínica: Zones of Regulation® (Leah M. Kuypers, 2011). Currículo
        cognitivo-comportamental de autorregulação amplamente usado em terapia
        ocupacional e educação especial.
      </div>
    </div>
  );
}
