import { motion } from "framer-motion";
import { objetoImg } from "@/data/neuro-treino/objetos";
import casteloBg from "@/assets/cenarios/castelo.jpg";
import jardimBg from "@/assets/cenarios/jardim.jpg";
import lagoBg from "@/assets/cenarios/lago.jpg";
import magicoBg from "@/assets/cenarios/magico.jpg";

type Cenario =
  | "castelo"
  | "espaco"
  | "jardim"
  | "floresta"
  | "lago"
  | "quintal"
  | "ceu"
  | "noite"
  | "magico"
  | "prehistorico"
  | "fazenda";

const MAPA_CENARIO: Record<string, Cenario> = {
  CASTELO: "castelo", COROA: "castelo", PRINCESA: "castelo", HEROI: "castelo",
  LUA: "noite", ESTRELA: "noite", FOGUETE: "espaco", PLANETA: "espaco",
  ASTRONAUTA: "espaco", COMETA: "espaco",
  FADA: "magico", UNICORNIO: "magico", SEREIA: "lago",
  SAPO: "lago", PEIXE: "lago", PATO: "lago", CISNE: "lago", PEIXINHO: "lago",
  TARTARUGA: "lago", CONCHA: "lago",
  FLOR: "jardim", ABELHA: "jardim", BORBOLETA: "jardim", ARVORE: "floresta",
  COELHO: "floresta", MACACO: "floresta", URSO: "floresta", BANANA: "floresta",
  RAPOSA: "floresta", LEAO: "floresta", TIGRE: "floresta", ELEFANTE: "floresta",
  PANDA: "floresta", PASSARO: "ceu", PASSARINHO: "ceu", CORUJA: "noite",
  TREX: "prehistorico", DINOSSAURO: "prehistorico", BRAQUIOSSAURO: "prehistorico",
  ESTEGOSSAURO: "prehistorico", TRICERATOPS: "prehistorico", VELOCIRAPTOR: "prehistorico",
  RAPTOR: "prehistorico", VULCAO: "prehistorico",
  GALINHA: "fazenda", GALO: "fazenda", PINTINHO: "fazenda", VACA: "fazenda",
  CAVALO: "fazenda", OVELHA: "fazenda", PORCO: "fazenda", CABRA: "fazenda",
  PORQUINHO: "fazenda",
  SOL: "ceu", CHUVA: "ceu", AVIAO: "ceu", DRONE: "ceu",
  GATO: "quintal", CACHORRO: "quintal", DOG: "quintal", RATO: "quintal",
  BOLA: "quintal", BOLO: "quintal", PRESENTE: "quintal", CORACAO: "quintal",
  CASA: "quintal",
};

// Emoções herdam cenário neutro (jardim)
const FALLBACK: Cenario = "jardim";

function inferCenario(imagem: string, vocabBase: string[]): Cenario {
  if (MAPA_CENARIO[imagem]) return MAPA_CENARIO[imagem];
  for (const v of vocabBase) if (MAPA_CENARIO[v]) return MAPA_CENARIO[v];
  return FALLBACK;
}

const BG: Record<Cenario, string> = {
  castelo: "bg-gradient-to-b from-sky-300 via-pink-200 to-emerald-200",
  espaco: "bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-800",
  noite: "bg-gradient-to-b from-indigo-900 via-indigo-700 to-purple-500",
  jardim: "bg-gradient-to-b from-sky-200 via-emerald-100 to-emerald-300",
  floresta: "bg-gradient-to-b from-sky-200 via-green-200 to-green-500",
  lago: "bg-gradient-to-b from-sky-300 via-cyan-200 to-blue-400",
  quintal: "bg-gradient-to-b from-amber-100 via-rose-100 to-emerald-200",
  ceu: "bg-gradient-to-b from-sky-200 via-sky-100 to-amber-100",
  magico: "bg-gradient-to-b from-fuchsia-200 via-rose-200 to-amber-100",
  prehistorico: "bg-gradient-to-b from-orange-200 via-amber-300 to-lime-400",
  fazenda: "bg-gradient-to-b from-sky-200 via-yellow-100 to-lime-300",
};

interface Props {
  imagem: string;
  vocabBase: string[];
  onTocarPersonagem: () => void;
}

export function CenarioIlustrado({ imagem, vocabBase, onTocarPersonagem }: Props) {
  const cen = inferCenario(imagem, vocabBase);
  const bgImg: Partial<Record<Cenario, string>> = { castelo: casteloBg };
  const fundoIlustrado = bgImg[cen];

  return (
    <div className={`w-full h-full relative overflow-hidden ${fundoIlustrado ? "" : BG[cen]}`}>
      {fundoIlustrado && (
        <img
          src={fundoIlustrado}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      )}
      {!fundoIlustrado && <Decoracoes cenario={cen} />}
      {!fundoIlustrado && <Chao cenario={cen} />}

      {/* Personagem principal */}
      <motion.button
        onClick={onTocarPersonagem}
        initial={{ scale: 0, y: 40, rotate: -10 }}
        animate={{ scale: 1, y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        whileTap={{ scale: 0.9, rotate: 5 }}
        whileHover={{ scale: 1.05 }}
        className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="drop-shadow-2xl"
        >
          <img
            src={objetoImg(imagem)}
            alt=""
            className="h-56 sm:h-64 md:h-72 object-contain pointer-events-none"
            draggable={false}
          />
        </motion.div>
        {/* Sparkles ao redor */}
        <motion.div
          className="absolute -top-4 -right-4 text-3xl"
          animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✨
        </motion.div>
      </motion.button>
    </div>
  );
}

function Decoracoes({ cenario }: { cenario: Cenario }) {
  if (cenario === "espaco" || cenario === "noite") {
    return (
      <>
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-200"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 60}%`,
              fontSize: `${10 + (i % 3) * 6}px`,
            }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.1 }}
          >
            ⭐
          </motion.div>
        ))}
      </>
    );
  }
  if (cenario === "lago") {
    return (
      <>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/70 text-5xl"
            style={{ top: `${10 + i * 5}%`, left: `${-20 + i * 30}%` }}
            animate={{ x: [0, 300, 0] }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
          >
            ☁️
          </motion.div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-b from-cyan-400/40 to-blue-600/60" />
      </>
    );
  }
  if (cenario === "castelo") {
    return (
      <>
        <motion.div
          className="absolute top-8 right-10 text-7xl"
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ☀️
        </motion.div>
        <div className="absolute bottom-1/4 left-0 right-0 flex justify-around opacity-80">
          <div className="text-8xl">🏰</div>
        </div>
      </>
    );
  }
  if (cenario === "jardim" || cenario === "floresta") {
    return (
      <>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{ left: `${10 + i * 15}%`, top: `${15 + (i % 3) * 8}%` }}
            animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3 + (i % 2), repeat: Infinity, delay: i * 0.3 }}
          >
            {i % 2 ? "🦋" : "🌸"}
          </motion.div>
        ))}
        <motion.div className="absolute top-6 right-8 text-6xl" animate={{ rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }}>☀️</motion.div>
      </>
    );
  }
  if (cenario === "magico") {
    return (
      <>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{ left: `${(i * 41) % 100}%`, top: `${(i * 29) % 70}%` }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.7, 1.3, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
          >
            ✨
          </motion.div>
        ))}
      </>
    );
  }
  if (cenario === "prehistorico") {
    return (
      <>
        <motion.div className="absolute top-10 left-10 text-6xl" animate={{ rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }}>🌋</motion.div>
        <motion.div className="absolute top-6 right-12 text-7xl" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }}>☀️</motion.div>
      </>
    );
  }
  if (cenario === "fazenda" || cenario === "ceu" || cenario === "quintal") {
    return (
      <>
        <motion.div className="absolute top-8 right-10 text-7xl" animate={{ rotate: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }}>☀️</motion.div>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white text-5xl"
            style={{ top: `${10 + i * 8}%`, left: `${-15 + i * 35}%` }}
            animate={{ x: [0, 250, 0] }}
            transition={{ duration: 18 + i * 4, repeat: Infinity, ease: "linear" }}
          >
            ☁️
          </motion.div>
        ))}
      </>
    );
  }
  return null;
}

function Chao({ cenario }: { cenario: Cenario }) {
  if (cenario === "espaco" || cenario === "noite" || cenario === "lago") return null;
  const cor =
    cenario === "prehistorico" ? "from-lime-600 to-amber-700"
    : cenario === "floresta" ? "from-green-600 to-green-800"
    : cenario === "fazenda" ? "from-lime-500 to-green-700"
    : cenario === "castelo" ? "from-emerald-400 to-emerald-600"
    : "from-emerald-300 to-emerald-500";
  return (
    <div className={`absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b ${cor}`}>
      {/* "grama" */}
      <div className="absolute -top-3 left-0 right-0 flex justify-around opacity-70">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-2 h-6 bg-green-700 rounded-t-full" style={{ transform: `rotate(${(i % 3 - 1) * 10}deg)` }} />
        ))}
      </div>
    </div>
  );
}
