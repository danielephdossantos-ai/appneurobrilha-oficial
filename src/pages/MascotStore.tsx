import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useMascot, Mascot } from "@/contexts/MascotContext";
import { motion, AnimatePresence } from "framer-motion";
import { KidCard } from "@/components/ui/KidCard";
import { KidButton } from "@/components/ui/KidButton";
import { ShoppingBag, Star, Sparkles, ChevronRight, Globe2, Check, Lock } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { useAppState } from "@/core/store";
import { EggHatchCinematic, shouldShowEggHatch } from "@/components/pip/EggHatchCinematic";
import { url as pipMascot } from "@/assets/pip-mascot.png.asset.json";
import { url as pipEgg } from "@/assets/pip-egg.png.asset.json";
import { url as pipHatching } from "@/assets/pip-hatching.png.asset.json";
import { url as pipBaby } from "@/assets/pip-baby.png.asset.json";
import { url as pipDinossauros } from "@/assets/pip-dinossauros.png.asset.json";
import { url as pipEspaco } from "@/assets/pip-espaco.png.asset.json";
import { url as pipArte } from "@/assets/pip-arte.png.asset.json";
import { url as pipAnimais } from "@/assets/pip-animais.png.asset.json";
import { url as pipMusica } from "@/assets/pip-musica.png.asset.json";
import { url as pipFazendinha } from "@/assets/pip-fazendinha.png.asset.json";
import { url as pipSuperHerois } from "@/assets/pip-super-herois.png.asset.json";
import { url as pipPrincesas } from "@/assets/pip-princesas.png.asset.json";
import { url as pipMinecraft } from "@/assets/pip-minecraft.png.asset.json";
import { url as pipCarros } from "@/assets/pip-carros.png.asset.json";
import { url as pipTrens } from "@/assets/pip-trens.png.asset.json";
import { url as pipRobos } from "@/assets/pip-robos.png.asset.json";
import { url as pipVeiculos } from "@/assets/pip-veiculos.png.asset.json";
import { url as pipaMascot } from "@/assets/pip-girl-mascot.png.asset.json";
import { url as pipaEgg } from "@/assets/pipa-egg.png.asset.json";
import { url as pipaHatching } from "@/assets/pipa-hatching.png.asset.json";
import { url as pipaBaby } from "@/assets/pipa-baby.png.asset.json";
import { url as pipaPrincesa } from "@/assets/pip-girl-princesas.png.asset.json";
import { url as pipaUnicornio } from "@/assets/pip-girl-unicornio.png.asset.json";
import { url as pipaDoutora } from "@/assets/pip-girl-doutora.png.asset.json";
import { url as pipaAstronauta } from "@/assets/pip-girl-astronauta.png.asset.json";
import { url as pipaBailarina } from "@/assets/pip-girl-bailarina.png.asset.json";
import { url as pipaFada } from "@/assets/pip-girl-fada.png.asset.json";
import { url as pipaSereia } from "@/assets/pip-girl-sereia.png.asset.json";
import { url as pipaConfeiteira } from "@/assets/pip-girl-confeiteira.png.asset.json";
import { url as pipaVeterinaria } from "@/assets/pip-girl-veterinaria.png.asset.json";
import { url as pipaProfessora } from "@/assets/pip-girl-professora.png.asset.json";
import { url as pipaArte } from "@/assets/pip-girl-arte.png.asset.json";
import { url as pipaMusica } from "@/assets/pip-girl-musica.png.asset.json";
import { url as pipaSuperHeroina } from "@/assets/pip-girl-super-heroina.png.asset.json";
import { url as pipTeenSuperHeroi } from "@/assets/pip-teen-super-heroi.png.asset.json";
import { url as pipaTeenSuperHeroina } from "@/assets/pipa-teen-super-heroina.png.asset.json";
import { url as pipTeenPrincipe } from "@/assets/pip-teen-principe.png.asset.json";
import { url as pipaTeenPrincesa } from "@/assets/pipa-teen-princesa.png.asset.json";
import { url as pipTeenRoqueiro } from "@/assets/pip-teen-roqueiro.png.asset.json";
import { url as pipaTeenRoqueira } from "@/assets/pipa-teen-roqueira.png.asset.json";
import { url as pipTeenCyber } from "@/assets/pip-teen-cyber.png.asset.json";
import { url as pipaTeenCyber } from "@/assets/pipa-teen-cyber.png.asset.json";
import { url as pipTeenUrsinho } from "@/assets/pip-teen-ursinho.png.asset.json";
import { url as pipaTeenUrsinho } from "@/assets/pipa-teen-ursinho.png.asset.json";
import { url as pipTeenCarrinho } from "@/assets/pip-teen-carrinho.png.asset.json";
import { url as pipaTeenBoneca } from "@/assets/pipa-teen-boneca.png.asset.json";
import { url as pipTeenBola } from "@/assets/pip-teen-bola.png.asset.json";
import { url as pipaTeenBola } from "@/assets/pipa-teen-bola.png.asset.json";
import KidLiveMascot from "@/components/ui/KidLiveMascot";
import { PipEvolution } from "@/components/pip/PipEvolution";
import { cn } from "@/utils/utils";
import { useHiperfoco } from "@/context/HiperfocoContext";
import { toast } from "sonner";

// World thumbnails (cenários) — using the same illustrated worlds from Neuro-Treino
import { url as worldAnimais } from "@/assets/neuro-treino/worlds/animais.jpg.asset.json";
import { url as worldArte } from "@/assets/neuro-treino/worlds/arte.jpg.asset.json";
import { url as worldCarros } from "@/assets/neuro-treino/worlds/carros.jpg.asset.json";
import { url as worldDinossauros } from "@/assets/neuro-treino/worlds/dinossauros.jpg.asset.json";
import { url as worldEspaco } from "@/assets/neuro-treino/worlds/espaco.jpg.asset.json";
import { url as worldFazendinha } from "@/assets/neuro-treino/worlds/fazendinha.jpg.asset.json";
import { url as worldHerois } from "@/assets/neuro-treino/worlds/herois.jpg.asset.json";
import { url as worldMinecraft } from "@/assets/neuro-treino/worlds/minecraft.jpg.asset.json";
import { url as worldMusica } from "@/assets/neuro-treino/worlds/musica.jpg.asset.json";
import { url as worldPrincesas } from "@/assets/neuro-treino/worlds/princesas.jpg.asset.json";
import { url as worldRobos } from "@/assets/neuro-treino/worlds/robos.jpg.asset.json";
import { url as worldTrens } from "@/assets/neuro-treino/worlds/trens.jpg.asset.json";
import { url as worldVeiculos } from "@/assets/neuro-treino/worlds/veiculos.jpg.asset.json";
import { url as worldOceano } from "@/assets/neuro-treino/worlds/oceano.jpg.asset.json";
import { url as worldFloresta } from "@/assets/neuro-treino/worlds/floresta.jpg.asset.json";
import { url as worldCastelo } from "@/assets/neuro-treino/worlds/castelo.jpg.asset.json";

type WorldOption = {
  id: string;
  label: string;
  emoji: string;
  description: string;
  image: string;
  hiperfocoId?: "minecraft" | "dinossauros" | "herois" | "animais" | "carros";
  customLabel?: string;
};

const WORLDS: WorldOption[] = [
  {
    id: "w-dino",
    label: "Dinossauros",
    emoji: "🦖",
    description: "Era jurássica cheia de rugidos e fósseis.",
    image: worldDinossauros,
    hiperfocoId: "dinossauros",
  },
  {
    id: "w-minecraft",
    label: "Minecraft",
    emoji: "🟩",
    description: "Construa aventuras bloco a bloco.",
    image: worldMinecraft,
    hiperfocoId: "minecraft",
  },
  {
    id: "w-espaco",
    label: "Espaço",
    emoji: "🚀",
    description: "Foguetes, planetas e estrelas brilhando.",
    image: worldEspaco,
    customLabel: "Espaço",
  },
  {
    id: "w-herois",
    label: "Super-Heróis",
    emoji: "🦸",
    description: "Poderes incríveis para salvar o dia!",
    image: worldHerois,
    hiperfocoId: "herois",
  },
  {
    id: "w-animais",
    label: "Animais",
    emoji: "🐾",
    description: "Floresta cheia de amigos peludos.",
    image: worldAnimais,
    hiperfocoId: "animais",
  },
  {
    id: "w-carros",
    label: "Carros",
    emoji: "🚗",
    description: "Acelere na pista de corrida!",
    image: worldCarros,
    hiperfocoId: "carros",
  },
  {
    id: "w-fazendinha",
    label: "Fazendinha",
    emoji: "🚜",
    description: "Bichinhos, plantação e muito sol.",
    image: worldFazendinha,
    customLabel: "Fazendinha",
  },
  {
    id: "w-arte",
    label: "Arte",
    emoji: "🎨",
    description: "Cores, pincéis e muita imaginação.",
    image: worldArte,
    customLabel: "Arte",
  },
  {
    id: "w-musica",
    label: "Música",
    emoji: "🎵",
    description: "Instrumentos mágicos e ritmo no ar.",
    image: worldMusica,
    customLabel: "Música",
  },
  {
    id: "w-princesas",
    label: "Princesas",
    emoji: "👑",
    description: "Castelos encantados e reinos mágicos.",
    image: worldPrincesas,
    customLabel: "Princesas",
  },
  {
    id: "w-robos",
    label: "Robôs",
    emoji: "🤖",
    description: "Tecnologia, engrenagens e futuro.",
    image: worldRobos,
    customLabel: "Robôs",
  },
  {
    id: "w-trens",
    label: "Trens",
    emoji: "🚂",
    description: "Estações, trilhos e grandes viagens.",
    image: worldTrens,
    customLabel: "Trens",
  },
  {
    id: "w-veiculos",
    label: "Veículos",
    emoji: "🚙",
    description: "Caminhões, motos e muita ação.",
    image: worldVeiculos,
    customLabel: "Veículos",
  },
  {
    id: "w-oceano",
    label: "Oceano",
    emoji: "🐠",
    description: "Mergulhe no fundo do mar cheio de vida.",
    image: worldOceano,
    customLabel: "Oceano",
  },
  {
    id: "w-floresta",
    label: "Floresta Encantada",
    emoji: "🍄",
    description: "Trilhas mágicas, fadas e cogumelos brilhantes.",
    image: worldFloresta,
    customLabel: "Floresta",
  },
  {
    id: "w-castelo",
    label: "Castelo Mágico",
    emoji: "🏰",
    description: "Torres nas nuvens com dragões amigos.",
    image: worldCastelo,
    customLabel: "Castelo",
  },
];

const ADDITIONAL_CHARACTERS = [
  {
    id: "pip-dino",
    name: "Pip Explorador",
    description: "Vamos rugir e descobrir o mundo jurássico!",
    category: "premium",
    image_url: pipDinossauros,
  },
  {
    id: "pip-espaco",
    name: "Pip Astronauta",
    description: "Pronto para decolar até as estrelas!",
    category: "premium",
    image_url: pipEspaco,
  },
  {
    id: "pip-arte",
    name: "Pip Artista",
    description: "Pincel na mão e muita cor pra criar.",
    category: "premium",
    image_url: pipArte,
  },
  {
    id: "pip-animais",
    name: "Pip Veterinário",
    description: "Cuidando dos amiguinhos com muito carinho.",
    category: "premium",
    image_url: pipAnimais,
  },
  {
    id: "pip-musica",
    name: "Pip Maestro",
    description: "Vamos reger uma sinfonia de aprendizado!",
    category: "premium",
    image_url: pipMusica,
  },
  {
    id: "pip-fazendinha",
    name: "Pip Fazendeiro",
    description: "Plantando aprendizado e colhendo conquistas.",
    category: "premium",
    image_url: pipFazendinha,
  },
  {
    id: "pip-super",
    name: "Pip Super",
    description: "Salvando o dia com o poder do estudo!",
    category: "premium",
    image_url: pipSuperHerois,
  },
  {
    id: "pip-princesas",
    name: "Pip Realeza",
    description: "Coroado de gentileza e sabedoria.",
    category: "premium",
    image_url: pipPrincesas,
  },
  {
    id: "pip-minecraft",
    name: "Pip Builder",
    description: "Construindo aventuras bloco a bloco.",
    category: "premium",
    image_url: pipMinecraft,
  },
  {
    id: "pip-carros",
    name: "Pip Piloto",
    description: "Acelerando rumo a novas conquistas.",
    category: "premium",
    image_url: pipCarros,
  },
  {
    id: "pip-trens",
    name: "Pip Maquinista",
    description: "Tchu-tchuuu! Bora pra próxima estação.",
    category: "premium",
    image_url: pipTrens,
  },
  {
    id: "pip-robos",
    name: "Pip Robô",
    description: "Tecnologia e curiosidade juntos.",
    category: "premium",
    image_url: pipRobos,
  },
  {
    id: "pip-veiculos",
    name: "Pip Aventureiro",
    description: "Mapa, binóculos e muita exploração.",
    category: "premium",
    image_url: pipVeiculos,
  },
  {
    id: "pip-ovo",
    name: "Ovo do Pip",
    description: "O começo de uma grande amizade, cheio de brilho e potencial.",
    category: "premium",
    image_url: pipEgg,
  },
  {
    id: "pip-nascendo",
    name: "Pip Nascendo",
    description: "A casquinha rachou e uma nova aventura vai começar.",
    category: "premium",
    image_url: pipHatching,
  },
  {
    id: "pip-bebe",
    name: "Pip Bebê",
    description: "Pequenino, curioso e pronto para seus primeiros desafios.",
    category: "premium",
    image_url: pipBaby,
  },
  {
    id: "pipa-ovo",
    name: "Ovo da Pipa",
    description: "Um ovo encantado guardando a doçura e coragem da Pipa.",
    category: "premium",
    image_url: pipaEgg,
  },
  {
    id: "pipa-nascendo",
    name: "Pipa Nascendo",
    description: "A Pipa está chegando ao mundo com muito brilho.",
    category: "premium",
    image_url: pipaHatching,
  },
  {
    id: "pipa-bebe",
    name: "Pipa Bebê",
    description: "A versão bebê da Pipa, fofa, alegre e cheia de ternura.",
    category: "premium",
    image_url: pipaBaby,
  },
  {
    id: "pipa-original",
    name: "Pipa Clássica",
    description: "A forma original da Pipa, doce e cheia de coragem.",
    category: "premium",
    image_url: pipaMascot,
  },
  {
    id: "pipa-princesa",
    name: "Pipa Princesa",
    description: "Coroada de gentileza, sabedoria e brilho próprio.",
    category: "premium",
    image_url: pipaPrincesa,
  },
  {
    id: "pipa-unicornio",
    name: "Pipa Unicórnio",
    description: "Asas, chifre brilhante e muita magia.",
    category: "premium",
    image_url: pipaUnicornio,
  },
  {
    id: "pipa-doutora",
    name: "Pipa Doutora",
    description: "Cuidando de todos com carinho e ciência.",
    category: "premium",
    image_url: pipaDoutora,
  },
  {
    id: "pipa-astronauta",
    name: "Pipa Astronauta",
    description: "Pronta para explorar galáxias inteiras.",
    category: "premium",
    image_url: pipaAstronauta,
  },
  {
    id: "pipa-bailarina",
    name: "Pipa Bailarina",
    description: "Cada passo é uma poesia em movimento.",
    category: "premium",
    image_url: pipaBailarina,
  },
  {
    id: "pipa-fada",
    name: "Pipa Fada",
    description: "Espalhando pó mágico e desejos pelo caminho.",
    category: "premium",
    image_url: pipaFada,
  },
  {
    id: "pipa-sereia",
    name: "Pipa Sereia",
    description: "Mergulhando em aventuras submarinas.",
    category: "premium",
    image_url: pipaSereia,
  },
  {
    id: "pipa-confeiteira",
    name: "Pipa Confeiteira",
    description: "Receitas cheias de afeto e criatividade.",
    category: "premium",
    image_url: pipaConfeiteira,
  },
  {
    id: "pipa-veterinaria",
    name: "Pipa Veterinária",
    description: "Amando e cuidando de todos os bichinhos.",
    category: "premium",
    image_url: pipaVeterinaria,
  },
  {
    id: "pipa-professora",
    name: "Pipa Professora",
    description: "Ensinando com paciência e muito carinho.",
    category: "premium",
    image_url: pipaProfessora,
  },
  {
    id: "pipa-arte",
    name: "Pipa Artista",
    description: "Pincel na mão, sonhos no papel.",
    category: "premium",
    image_url: pipaArte,
  },
  {
    id: "pipa-musica",
    name: "Pipa Musicista",
    description: "Cantando e dançando ao som do coração.",
    category: "premium",
    image_url: pipaMusica,
  },
  {
    id: "pipa-super-heroina",
    name: "Pipa Super",
    description: "Salvando o dia com coragem e gentileza.",
    category: "premium",
    image_url: pipaSuperHeroina,
  },
  {
    id: "pip-teen-super-heroi",
    name: "Pip Teen Super-Herói",
    description: "Versão adolescente do Pip pronta para salvar o dia com estilo.",
    category: "premium",
    image_url: pipTeenSuperHeroi,
  },
  {
    id: "pipa-teen-super-heroina",
    name: "Pipa Teen Super-Heroína",
    description: "Pipa adolescente em traje de heroína moderna e poderosa.",
    category: "premium",
    image_url: pipaTeenSuperHeroina,
  },
  {
    id: "pip-teen-principe",
    name: "Pip Teen Príncipe",
    description: "Pip adolescente com traje de gala real e coroa estilosa.",
    category: "premium",
    image_url: pipTeenPrincipe,
  },
  {
    id: "pipa-teen-princesa",
    name: "Pipa Teen Princesa",
    description: "Pipa adolescente com vestido de gala e tiara delicada.",
    category: "premium",
    image_url: pipaTeenPrincesa,
  },
  {
    id: "pip-teen-roqueiro",
    name: "Pip Teen Roqueiro",
    description: "Jaqueta de couro, guitarra na mão e atitude rock'n'roll.",
    category: "premium",
    image_url: pipTeenRoqueiro,
  },
  {
    id: "pipa-teen-roqueira",
    name: "Pipa Teen Roqueira",
    description: "Pipa adolescente com guitarra e estilo punk-rock.",
    category: "premium",
    image_url: pipaTeenRoqueira,
  },
  {
    id: "pip-teen-cyber",
    name: "Pip Teen Cyber",
    description: "Visor holográfico, fones neon e vibe gamer futurista.",
    category: "premium",
    image_url: pipTeenCyber,
  },
  {
    id: "pipa-teen-cyber",
    name: "Pipa Teen Cyber",
    description: "Pipa adolescente em estilo cyberpunk com neon brilhante.",
    category: "premium",
    image_url: pipaTeenCyber,
  },
  // ===== Onda 1 — Brinquedos clássicos =====
  {
    id: "pip-teen-ursinho",
    name: "Pip Teen Ursinho",
    description: "Pip adolescente abraçando um ursinho de pelúcia gigante.",
    category: "premium",
    image_url: pipTeenUrsinho,
  },
  {
    id: "pipa-teen-ursinho",
    name: "Pipa Teen Ursinho",
    description: "Pipa adolescente abraçando um ursinho rosa fofo.",
    category: "premium",
    image_url: pipaTeenUrsinho,
  },
  {
    id: "pip-teen-carrinho",
    name: "Pip Teen Carrinho",
    description: "Pip adolescente brincando com um carrinho de corrida.",
    category: "premium",
    image_url: pipTeenCarrinho,
  },
  {
    id: "pipa-teen-boneca",
    name: "Pipa Teen Boneca",
    description: "Pipa adolescente com sua boneca de pano colorida.",
    category: "premium",
    image_url: pipaTeenBoneca,
  },
  {
    id: "pip-teen-bola",
    name: "Pip Teen Futebol",
    description: "Pip adolescente em uniforme com bola de futebol quebra-cabeça.",
    category: "premium",
    image_url: pipTeenBola,
  },
  {
    id: "pipa-teen-bola",
    name: "Pipa Teen Vôlei",
    description: "Pipa adolescente em uniforme esportivo com bola colorida.",
    category: "premium",
    image_url: pipaTeenBola,
  },
];

// Gamificação: requisito de Moedas Brilha para cada mascote da loja
// Ovo, Nascendo e Bebê já vêm liberados (Fases 1–3).
// Só o Guardião (Fase 4) e as fantasias exigem moedas.
const STAGE_THRESHOLDS = { ovo: 0, nascendo: 0, bebe: 0, guardiao: 500 } as const;

// Preço (Moedas Brilha) por tipo de mascote. A criança joga, ganha moedas e
// desbloqueia. Quanto mais raro/fantasioso, mais alto.
function getRequiredCoins(mascotId: string, mascotName: string): number {
  const key = `${mascotId} ${mascotName}`.toLowerCase();

  // Fases base (já vêm liberadas)
  if (/(ovo|nascendo)/.test(key)) return 0;
  if (/bebê|bebe/.test(key)) return 0;

  // Teens com fantasias raras
  if (/teen-(super|principe|princesa|roqueir|cyber)/.test(key)) return 2500;
  if (/teen-(ursinho|carrinho|boneca|bola|trator)/.test(key)) return 1800;
  if (/teen/.test(key)) return 2000;

  // Princesas / Super-heróis / Fantasia
  if (/(princesa|principe|super-her|fada|sereia|unicornio|unicórnio)/.test(key)) return 1500;

  // Profissões
  if (/(doutora|veterinaria|veterinária|professora|confeiteira|astronauta|bailarina)/.test(key))
    return 1200;

  // Hobbies / arte / música
  if (/(arte|musica|música)/.test(key)) return 1000;

  // Mundos (espaço, animais, dinos, fazendinha, robos, trens, carros, veículos, minecraft)
  if (/(espaco|espaço|animais|dinossauros|fazendinha|robos|robôs|trens|carros|veiculos|veículos|minecraft)/.test(key))
    return 900;

  // Pip / Pipa principal (Guardião)
  return STAGE_THRESHOLDS.guardiao;
}

// Paletas vibrantes para os cards (rotaciona pelo index — visual colorido,
// não cinza). Cada card recebe uma cor diferente.
const CARD_PALETTES = [
  "from-pink-200 via-fuchsia-100 to-purple-200",
  "from-amber-200 via-yellow-100 to-orange-200",
  "from-sky-200 via-cyan-100 to-blue-200",
  "from-emerald-200 via-green-100 to-teal-200",
  "from-violet-200 via-indigo-100 to-blue-200",
  "from-rose-200 via-pink-100 to-red-200",
  "from-lime-200 via-emerald-100 to-green-200",
  "from-orange-200 via-amber-100 to-yellow-200",
];


const MascotStorePage: React.FC = () => {
  const { userMascots } = useMascot();
  const { activeChild } = useAppState();
  const [dbMascots, setDbMascots] = useState<Mascot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEggHatch, setShowEggHatch] = useState(false);

  const totalEarned = activeChild?.total_earned ?? 0;

  // Cinematográfica do ovo no primeiro acesso da criança
  useEffect(() => {
    if (activeChild?.id && shouldShowEggHatch(activeChild.id)) {
      setShowEggHatch(true);
    }
  }, [activeChild?.id]);

  useEffect(() => {
    const fetchAllMascots = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await (supabase as any).from("mascots").select("*").order("name");

        if (error) throw error;
        setDbMascots(data || []);
      } catch (err) {
        console.error("Error fetching mascots from store:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllMascots();
  }, []);

  const ownedMascotIds = userMascots.map((um) => um.mascot_id);

  // Combine DB mascots with additional characters
  const allDisplayMascots = [...dbMascots];

  // Add additional characters if they're not already in the DB mascots (by name/id)
  ADDITIONAL_CHARACTERS.forEach((char) => {
    if (!dbMascots.find((m) => m.name === char.name)) {
      allDisplayMascots.push(char as Mascot);
    }
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-black uppercase tracking-widest text-xs mb-4"
        >
          <ShoppingBag size={14} />
          Loja Brilha
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-primary mb-4"
        >
          Loja de Mascotes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Descubra novos amigos incríveis para acompanhar sua jornada de aprendizado! Cada mascote
          traz uma energia especial.
        </motion.p>
      </header>

      <WorldsSection />

      {/* Sistema de Evolução conectado ao progresso do app */}
      <div className="flex items-center gap-3 mb-6 mt-16">
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full" />
        <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider flex items-center gap-2">
          <Sparkles size={22} /> Evolução do Pip & Pipa
        </h2>
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full" />
      </div>
      <p className="text-center text-muted-foreground font-bold mb-8 max-w-2xl mx-auto">
        Acompanhe a evolução do seu mascote conforme você conquista Moedas Brilha: Ovo → Nascendo →
        Bebê → Guardião. ✨
      </p>
      <PipEvolution />

      <div className="flex items-center gap-3 mb-6 mt-16">
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
        <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider flex items-center gap-2">
          <Sparkles size={22} /> Mascotes & Fantasias
        </h2>
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-80 bg-muted animate-pulse rounded-[2.5rem]" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {allDisplayMascots.map((mascot, index) => {
              const required = getRequiredCoins(mascot.id, mascot.name);
              const unlocked = totalEarned >= required;
              return (
                <MascotStoreCard
                  key={mascot.id}
                  mascot={mascot}
                  isOwned={ownedMascotIds.includes(mascot.id)}
                  index={index}
                  showCollectionButton={true}
                  unlocked={unlocked}
                  requiredCoins={required}
                  currentCoins={totalEarned}
                />
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {allDisplayMascots.length === 0 && !isLoading && (
        <div className="text-center py-20 bg-white/50 rounded-[3rem] border-4 border-dashed border-primary/10">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-black text-primary uppercase">Nenhum mascote encontrado</h3>
          <p className="text-muted-foreground font-bold">
            Tente buscar por outro nome ou mudar o filtro.
          </p>
        </div>
      )}

      <AnimatePresence>
        {showEggHatch && activeChild?.id && (
          <EggHatchCinematic
            childId={activeChild.id}
            childName={activeChild.nome}
            onClose={() => setShowEggHatch(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const TabButton = ({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all whitespace-nowrap",
      active
        ? "bg-primary text-white shadow-kid [--shadow-color:oklch(var(--primary-dark))]"
        : "text-muted-foreground hover:bg-muted",
    )}
  >
    {icon}
    {label}
  </button>
);

const MascotStoreCard = ({
  mascot,
  isOwned,
  index,
  showCollectionButton = false,
  unlocked = true,
  requiredCoins = 0,
  currentCoins = 0,
}: {
  mascot: Mascot;
  isOwned: boolean;
  index: number;
  showCollectionButton?: boolean;
  unlocked?: boolean;
  requiredCoins?: number;
  currentCoins?: number;
}) => {
  const isPip = mascot.name === "Pip";
  const rarity =
    mascot.category === "primary" ? "Oficial" : mascot.category === "premium" ? "Épico" : "Comum";
  const rarityColor =
    mascot.category === "primary"
      ? "bg-primary"
      : mascot.category === "premium"
        ? "bg-purple-500"
        : "bg-slate-500";
  const missingCoins = Math.max(0, requiredCoins - currentCoins);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ delay: index * 0.05 }}
    >
      <KidCard
        className={cn(
          "group h-full flex flex-col overflow-hidden border-2 transition-all duration-300",
          unlocked
            ? "border-border hover:border-primary/40"
            : "border-amber-300/60 hover:border-amber-400",
        )}
      >
        <div
          className={cn(
            "relative h-56 bg-gradient-to-br flex items-center justify-center p-8 overflow-hidden",
            CARD_PALETTES[index % CARD_PALETTES.length],
          )}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 w-48 h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            {isPip ? (
              <KidLiveMascot
                size="xl"
                showBadge={false}
                emotion="happy"
                className="animate-bounce-gentle"
              />
            ) : mascot.image_url ? (
              <img
                src={mascot.image_url}
                alt={mascot.name}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            ) : (
              <span className="text-7xl">🧩</span>
            )}
          </div>

          {/* Cadeado pequeno no canto superior esquerdo — não cobre o mascote */}
          {!unlocked && (
            <div className="absolute top-3 left-3 z-20 bg-amber-400 text-amber-950 rounded-full p-2 shadow-lg ring-2 ring-white">
              <Lock size={16} strokeWidth={3} />
            </div>
          )}

          <div
            className={cn(
              "absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg",
              rarityColor,
            )}
          >
            {rarity}
          </div>

          {isOwned && unlocked && (
            <div className="absolute bottom-3 left-3 bg-success text-white p-1.5 rounded-full shadow-lg">
              <Star size={14} fill="white" />
            </div>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-2xl font-black text-primary leading-tight mb-1 group-hover:text-secondary transition-colors">
              {mascot.name}
            </h3>
            <p className="text-sm font-bold text-muted-foreground/60 uppercase tracking-widest text-[10px]">
              {isPip ? "Guardião Lendário" : "Companheiro de Jornada"}
            </p>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1 italic">
            "{mascot.description}"
          </p>

          <div className="mt-auto space-y-3">
            {isOwned ? (
              <div className="flex flex-col gap-2">
                <div className="w-full py-3 rounded-2xl bg-success/10 border-2 border-success/20 text-success text-center font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                  <Star size={16} fill="currentColor" />
                  Já na Coleção
                </div>
                {isPip && (
                  <Link to="/colecao-pip" className="w-full">
                    <KidButton variant="secondary" className="w-full py-4 text-xs">
                      Ver Fantasias do Pip
                    </KidButton>
                  </Link>
                )}
              </div>
            ) : !unlocked ? (
              <div className="flex flex-col gap-2">
                <div className="w-full py-3 rounded-2xl bg-amber-100 border-2 border-amber-300 text-amber-900 text-center font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                  <Lock size={14} />
                  {requiredCoins} Moedas Brilha
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-bold text-primary/70">
                    <span>
                      {currentCoins} / {requiredCoins} 💰
                    </span>
                    <span>Faltam {missingCoins} 💰</span>
                  </div>
                  <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all"
                      style={{
                        width: `${Math.min(100, (currentCoins / Math.max(1, requiredCoins)) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <KidButton
                variant="primary"
                className="w-full py-6 text-lg group/btn"
                onClick={() => {}}
              >
                <span className="flex items-center gap-2">
                  Desbloqueado! Adicionar
                  <ChevronRight
                    size={20}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </span>
              </KidButton>
            )}
          </div>
        </div>
      </KidCard>
    </motion.div>
  );
};

const WorldsSection: React.FC = () => {
  const { hiperfoco, setHiperfocoById, setHiperfocoCustom } = useHiperfoco();
  const navigate = useNavigate();

  const handlePick = (w: WorldOption) => {
    if (w.hiperfocoId) {
      setHiperfocoById(w.hiperfocoId);
    } else if (w.customLabel) {
      setHiperfocoCustom(w.customLabel);
    }
    toast.success(`Mundo ${w.label} escolhido! 🌟`, {
      description: "Pronto para brincar na Jornada 365.",
    });
  };

  const isActive = (w: WorldOption) => {
    if (!hiperfoco) return false;
    if (w.hiperfocoId) return hiperfoco.id === w.hiperfocoId;
    return (
      hiperfoco.id === "custom" &&
      hiperfoco.label.toLowerCase() === (w.customLabel ?? "").toLowerCase()
    );
  };

  return (
    <section className="mb-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full" />
        <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider flex items-center gap-2">
          <Globe2 size={22} /> Mundos
        </h2>
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full" />
      </div>
      <p className="text-center text-muted-foreground font-bold mb-8 max-w-2xl mx-auto">
        Escolha o mundo que você mais ama! Tudo na Jornada 365 vai se transformar para a sua
        aventura favorita. ✨
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {WORLDS.map((w, i) => {
          const active = isActive(w);
          return (
            <motion.button
              key={w.id}
              type="button"
              onClick={() => handlePick(w)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border-4 text-left shadow-kid transition-all",
                active
                  ? "border-primary ring-4 ring-primary/30"
                  : "border-white/70 hover:border-primary/40",
              )}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={w.image}
                  alt={w.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {active && (
                  <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-2 shadow-lg">
                    <Check size={16} strokeWidth={3} />
                  </div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <KidButton
          variant="secondary"
          onClick={() => navigate({ to: "/neuro-treino" })}
          className="px-8"
        >
          <span className="flex items-center gap-2">
            <Sparkles size={18} /> Ir para o Neuro-Treino
          </span>
        </KidButton>
      </div>
    </section>
  );
};

export default MascotStorePage;
