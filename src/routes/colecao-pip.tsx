import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shell } from "@/components/Layout";
import { KidCard } from "@/components/ui/KidCard";
import { Sparkles, Lock, Check } from "lucide-react";
import { PIP_SKINS } from "@/components/ui/KidLiveMascot";
import pipMascot from "@/assets/pip-mascot.png";
import pipaMascot from "@/assets/pip-girl-mascot.png";
import pipaPrincesa from "@/assets/pip-girl-princesas.png";
import pipaUnicornio from "@/assets/pip-girl-unicornio.png";
import pipaDoutora from "@/assets/pip-girl-doutora.png";
import pipaAstronauta from "@/assets/pip-girl-astronauta.png";
import pipaBailarina from "@/assets/pip-girl-bailarina.png";
import pipaFada from "@/assets/pip-girl-fada.png";
import pipaSereia from "@/assets/pip-girl-sereia.png";
import pipaConfeiteira from "@/assets/pip-girl-confeiteira.png";
import pipaVeterinaria from "@/assets/pip-girl-veterinaria.png";
import pipaProfessora from "@/assets/pip-girl-professora.png";
import pipaArte from "@/assets/pip-girl-arte.png";
import pipaMusica from "@/assets/pip-girl-musica.png";
import pipaSuperHeroina from "@/assets/pip-girl-super-heroina.png";
import { useAppState } from "@/core/store";
import { cn } from "@/utils/utils";
import { PipEvolution } from "@/components/pip/PipEvolution";

export const Route = createFileRoute("/colecao-pip")({
  component: ColecaoPipPage,
});

const SKINS = [
  {
    key: "original",
    name: "Pip Clássico",
    title: "O Guardião dos Desafios",
    image: pipMascot,
    description: "A forma original do Pip, sempre pronto pra aventura.",
  },
  {
    key: "dinossauros",
    name: "Pip Explorador",
    title: "Dinossauros",
    image: PIP_SKINS.dinossauros,
    description: "Vamos rugir e descobrir o mundo jurássico!",
  },
  {
    key: "espaco",
    name: "Pip Astronauta",
    title: "Espaço",
    image: PIP_SKINS.espaco,
    description: "Pronto para decolar até as estrelas!",
  },
  {
    key: "arte",
    name: "Pip Artista",
    title: "Arte",
    image: PIP_SKINS.arte,
    description: "Pincel na mão e muita cor pra criar.",
  },
  {
    key: "animais",
    name: "Pip Veterinário",
    title: "Animais",
    image: PIP_SKINS.animais,
    description: "Cuidando dos amiguinhos com muito carinho.",
  },
  {
    key: "musica",
    name: "Pip Maestro",
    title: "Música",
    image: PIP_SKINS.musica,
    description: "Vamos reger uma sinfonia de aprendizado!",
  },
  {
    key: "fazendinha",
    name: "Pip Fazendeiro",
    title: "Fazendinha",
    image: PIP_SKINS.fazendinha,
    description: "Plantando aprendizado e colhendo conquistas.",
  },
  {
    key: "super-herois",
    name: "Pip Super",
    title: "Super-Heróis",
    image: PIP_SKINS["super-herois"],
    description: "Salvando o dia com o poder do estudo!",
  },
  {
    key: "princesas",
    name: "Pip Realeza",
    title: "Princesas",
    image: PIP_SKINS.princesas,
    description: "Coroado de gentileza e sabedoria.",
  },
  {
    key: "minecraft",
    name: "Pip Builder",
    title: "Minecraft",
    image: PIP_SKINS.minecraft,
    description: "Construindo aventuras bloco a bloco.",
  },
  {
    key: "carros",
    name: "Pip Piloto",
    title: "Carros",
    image: PIP_SKINS.carros,
    description: "Acelerando rumo a novas conquistas.",
  },
  {
    key: "trens",
    name: "Pip Maquinista",
    title: "Trens",
    image: PIP_SKINS.trens,
    description: "Tchu-tchuuu! Bora pra próxima estação.",
  },
  {
    key: "robos",
    name: "Pip Robô",
    title: "Robôs",
    image: PIP_SKINS.robos,
    description: "Tecnologia e curiosidade juntos.",
  },
  {
    key: "veiculos",
    name: "Pip Aventureiro",
    title: "Veículos",
    image: PIP_SKINS.veiculos,
    description: "Mapa, binóculos e muita exploração.",
  },
  // Coleção Pipa (menina)
  {
    key: "pipa-original",
    name: "Pipa Clássica",
    title: "A Guardiã dos Sonhos",
    image: pipaMascot,
    description: "A forma original da Pipa, doce e cheia de coragem.",
  },
  {
    key: "pipa-princesa",
    name: "Pipa Princesa",
    title: "Realeza",
    image: pipaPrincesa,
    description: "Coroada de gentileza, sabedoria e brilho próprio.",
  },
  {
    key: "pipa-unicornio",
    name: "Pipa Unicórnio",
    title: "Mágica",
    image: pipaUnicornio,
    description: "Asas, chifre brilhante e muita magia.",
  },
  {
    key: "pipa-doutora",
    name: "Pipa Doutora",
    title: "Saúde",
    image: pipaDoutora,
    description: "Cuidando de todos com carinho e ciência.",
  },
  {
    key: "pipa-astronauta",
    name: "Pipa Astronauta",
    title: "Espaço",
    image: pipaAstronauta,
    description: "Pronta para explorar galáxias inteiras.",
  },
  {
    key: "pipa-bailarina",
    name: "Pipa Bailarina",
    title: "Dança",
    image: pipaBailarina,
    description: "Cada passo é uma poesia em movimento.",
  },
  {
    key: "pipa-fada",
    name: "Pipa Fada",
    title: "Encanto",
    image: pipaFada,
    description: "Espalhando pó mágico e desejos pelo caminho.",
  },
  {
    key: "pipa-sereia",
    name: "Pipa Sereia",
    title: "Oceano",
    image: pipaSereia,
    description: "Mergulhando em aventuras submarinas.",
  },
  {
    key: "pipa-confeiteira",
    name: "Pipa Confeiteira",
    title: "Doces",
    image: pipaConfeiteira,
    description: "Receitas cheias de afeto e criatividade.",
  },
  {
    key: "pipa-veterinaria",
    name: "Pipa Veterinária",
    title: "Animais",
    image: pipaVeterinaria,
    description: "Amando e cuidando de todos os bichinhos.",
  },
  {
    key: "pipa-professora",
    name: "Pipa Professora",
    title: "Educação",
    image: pipaProfessora,
    description: "Ensinando com paciência e muito carinho.",
  },
  {
    key: "pipa-arte",
    name: "Pipa Artista",
    title: "Arte",
    image: pipaArte,
    description: "Pincel na mão, sonhos no papel.",
  },
  {
    key: "pipa-musica",
    name: "Pipa Musicista",
    title: "Música",
    image: pipaMusica,
    description: "Cantando e dançando ao som do coração.",
  },
  {
    key: "pipa-super-heroina",
    name: "Pipa Super",
    title: "Super-Heroína",
    image: pipaSuperHeroina,
    description: "Salvando o dia com coragem e gentileza.",
  },
  // Novos personagens integrados à coleção
];

const PIPA_HIGHLIGHTS = [
  { name: "Pipa Clássica", image: pipaMascot },
  { name: "Pipa Princesa", image: pipaPrincesa },
  { name: "Pipa Unicórnio", image: pipaUnicornio },
  { name: "Pipa Doutora", image: pipaDoutora },
  { name: "Pipa Astronauta", image: pipaAstronauta },
];

function ColecaoPipPage() {
  const { activeChild } = useAppState();

  // Forçar desbloqueio de todos para o usuário ver que as imagens existem
  const unlocked = new Set<string>(SKINS.map((s) => s.key));

  return (
    <Shell>
      <div className="container mx-auto py-10 px-4">
        <header className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-sun/20 px-4 py-2 rounded-full text-primary font-black uppercase tracking-widest text-xs mb-4"
          >
            <Sparkles size={14} className="text-sun" />
            Coleção NeuroBrilha Kids
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-primary mb-3"
          >
            Nossos Amiguinhos
          </motion.h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça todos os personagens da nossa turma! Do Pip e suas fantasias aos novos
            companheiros de aventura.
          </p>
        </header>

        <section className="mb-10 rounded-[2.5rem] border-4 border-pink/20 bg-pink/10 p-5 md:p-7 shadow-xl">
          <div className="mb-5 flex flex-col gap-1 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/50">
              Nova coleção menina
            </span>
            <h2 className="text-3xl font-black text-primary">Pipa e suas fantasias</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {PIPA_HIGHLIGHTS.map((pipa) => (
              <div
                key={pipa.name}
                className="rounded-[2rem] border-4 border-white bg-white/80 p-4 text-center shadow-md"
              >
                <div className="mx-auto mb-3 flex h-28 w-28 items-center justify-center rounded-full bg-pink/10">
                  <img
                    src={pipa.image}
                    alt={pipa.name}
                    className="h-full w-full object-contain drop-shadow-xl"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-black text-primary">{pipa.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Evolução do mascote */}
        <div className="mb-16">
          <PipEvolution />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SKINS.map((skin, i) => (
            <motion.div
              key={skin.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="relative group"
            >
              <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border-4 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center text-center">
                <div className="relative w-40 h-40 mb-4 flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent rounded-full">
                  <img
                    src={skin.image}
                    alt={skin.name}
                    className="w-full h-full object-contain drop-shadow-2xl transition-transform group-hover:scale-110"
                  />
                  <div className="absolute -top-2 -right-2 bg-sun text-white p-2 rounded-full shadow-lg">
                    <Check size={16} strokeWidth={4} />
                  </div>
                </div>

                <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] mb-1">
                  {skin.title}
                </span>
                <h3 className="text-xl font-black text-primary mb-2">{skin.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{skin.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Shell>
  );
}
