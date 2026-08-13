// ============================================================
// Catálogo único de Mundos (usado na Loja de Mascotes e nas trilhas)
// ============================================================
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

// Novos mundos de quebra-cabeça
import { url as worldJardimPuzzle } from "@/assets/mundos/mundo-jardim-quebra-cabeca.jpg.asset.json";
import { url as worldMusicaPuzzle } from "@/assets/mundos/mundo-musica-quebra-cabeca.jpg.asset.json";
import { url as worldCasteloPuzzle } from "@/assets/mundos/mundo-castelo-quebra-cabeca.jpg.asset.json";
import { url as worldCidadePuzzle } from "@/assets/mundos/mundo-cidade-quebra-cabeca.jpg.asset.json";
import { url as worldEspacoPuzzle } from "@/assets/mundos/mundo-espacial-quebra-cabeca.jpg.asset.json";

// Novos mundos (agosto 2026)
import { url as worldEngrenagensPuzzle } from "@/assets/mundos/mundo-engrenagens-quebra-cabeca.jpg.asset.json";
import { url as worldClinicaPuzzle } from "@/assets/mundos/mundo-clinica-quebra-cabeca.jpg.asset.json";
import { url as worldEscolaPuzzle } from "@/assets/mundos/mundo-escola-quebra-cabeca.jpg.asset.json";
import { url as worldDoutoraPuzzle } from "@/assets/mundos/mundo-doutora-quebra-cabeca.jpg.asset.json";
import { url as worldDocesPuzzle } from "@/assets/mundos/mundo-doces-quebra-cabeca.jpg.asset.json";
import { url as worldTremPuzzle } from "@/assets/mundos/mundo-trem-quebra-cabeca.jpg.asset.json";
import { url as worldPistaPuzzle } from "@/assets/mundos/mundo-pista-quebra-cabeca.jpg.asset.json";
import { url as worldArtistaPuzzle } from "@/assets/mundos/mundo-artista-quebra-cabeca.jpg.asset.json";
import { url as worldAmigosPuzzle } from "@/assets/mundos/mundo-amigos-quebra-cabeca.jpg.asset.json";

// Novos mundos Agosto 13
import { url as worldDinoQuebraCabeca } from "@/assets/mundos/mundo-dino-quebra-cabeca.jpg.asset.json";
import { url as worldEscolaQuebraCabeca2 } from "@/assets/mundos/mundo-escola-quebra-cabeca-2.jpg.asset.json";
import { url as worldPalcoQuebraCabeca2 } from "@/assets/mundos/mundo-palco-quebra-cabeca-2.jpg.asset.json";
import { url as worldShowQuebraCabeca2 } from "@/assets/mundos/mundo-show-quebra-cabeca-2.jpg.asset.json";
import { url as worldBrilhaKidsQuebraCabeca } from "@/assets/mundos/mundo-brilha-kids-quebra-cabeca.jpg.asset.json";

export type MundoOption = {
  id: string;
  label: string;
  emoji: string;
  description: string;
  image: string;
  hiperfocoId?: "minecraft" | "dinossauros" | "herois" | "animais" | "carros";
  customLabel?: string;
};

export const MUNDOS: MundoOption[] = [
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
  {
    id: "w-jardim-puzzle",
    label: "Jardim Mágico",
    emoji: "🧩",
    description: "Um jardim encantado feito de peças coloridas.",
    image: worldJardimPuzzle,
  },
  {
    id: "w-musica-puzzle",
    label: "Palco Melodia",
    emoji: "🎹",
    description: "Um show de luzes e notas musicais vibrantes.",
    image: worldMusicaPuzzle,
  },
  {
    id: "w-castelo-puzzle",
    label: "Reino Brilhante",
    emoji: "✨",
    description: "O castelo dos sonhos com carruagens e fontes.",
    image: worldCasteloPuzzle,
  },
  {
    id: "w-cidade-puzzle",
    label: "Cidade Futuro",
    emoji: "🏙️",
    description: "Metrópole de quebra-cabeça com luzes de neon.",
    image: worldCidadePuzzle,
  },
  {
    id: "w-espaco-puzzle",
    label: "Portal Galáctico",
    emoji: "🌀",
    description: "Viaje pelo cosmos em uma estação espacial.",
    image: worldEspacoPuzzle,
  },
  {
    id: "w-engrenagens-puzzle",
    label: "Fábrica de Ideias",
    emoji: "⚙️",
    description: "Engrenagens e invenções em um mundo de peças.",
    image: worldEngrenagensPuzzle,
  },
  {
    id: "w-clinica-puzzle",
    label: "Clínica Divertida",
    emoji: "🏥",
    description: "Um lugar de cuidado e carinho todo colorido.",
    image: worldClinicaPuzzle,
  },
  {
    id: "w-escola-puzzle",
    label: "Escola Mágica",
    emoji: "🏫",
    description: "Aprender é uma grande aventura de montar.",
    image: worldEscolaPuzzle,
  },
  {
    id: "w-doutora-puzzle",
    label: "Consultório da Pip",
    emoji: "👩‍⚕️",
    description: "Brincando de médica em um mundo de quebra-cabeça.",
    image: worldDoutoraPuzzle,
  },
  {
    id: "w-doces-puzzle",
    label: "Mundo dos Doces",
    emoji: "🍭",
    description: "Doces, cores e muitas peças açucaradas.",
    image: worldDocesPuzzle,
  },
  {
    id: "w-trem-puzzle",
    label: "Estação Alegria",
    emoji: "🚂",
    description: "Viaje nos trilhos de um mundo montável.",
    image: worldTremPuzzle,
  },
  {
    id: "w-pista-puzzle",
    label: "Pista Radical",
    emoji: "🏎️",
    description: "Acelere fundo nas curvas de quebra-cabeça.",
    image: worldPistaPuzzle,
  },
  {
    id: "w-artista-puzzle",
    label: "Ateliê Colorido",
    emoji: "🎨",
    description: "Pinte e monte o seu próprio cenário.",
    image: worldArtistaPuzzle,
  },
  {
    id: "w-amigos-puzzle",
    label: "Vale dos Amigos",
    emoji: "🤝",
    description: "Onde todos se unem como peças perfeitas.",
    image: worldAmigosPuzzle,
  },
  {
    id: "w-dino-puzzle-v2",
    label: "Parque do Dino",
    emoji: "🦖",
    description: "Um parque de diversões pré-histórico montável.",
    image: worldDinoQuebraCabeca,
  },
  {
    id: "w-escola-puzzle-v2",
    label: "Sala de Aula Brilha",
    emoji: "🍎",
    description: "Aprender é mágico neste mundo de peças coloridas.",
    image: worldEscolaQuebraCabeca2,
  },
  {
    id: "w-palco-puzzle-v2",
    label: "Show da Pipa",
    emoji: "🎤",
    description: "Luzes e música no palco de quebra-cabeça.",
    image: worldPalcoQuebraCabeca2,
  },
  {
    id: "w-show-puzzle-v2",
    label: "Festival Musical",
    emoji: "🎧",
    description: "Onde o som e a diversão se encaixam perfeitamente.",
    image: worldShowQuebraCabeca2,
  },
  {
    id: "w-brilha-kids-puzzle-v2",
    label: "Escola NeuroBrilha",
    emoji: "🏠",
    description: "O portal de entrada para o mundo do conhecimento.",
    image: worldBrilhaKidsQuebraCabeca,
  },
];

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

/** Encontra o mundo correspondente ao hiperfoco ativo (id ou label custom). */
export function mundoDoHiperfoco(hiperfoco: {
  id: string;
  label?: string;
} | null): MundoOption | null {
  if (!hiperfoco) return null;
  if (hiperfoco.id !== "custom") {
    return MUNDOS.find((m) => m.hiperfocoId === hiperfoco.id) ?? null;
  }
  const l = norm(hiperfoco.label ?? "");
  return MUNDOS.find((m) => norm(m.customLabel ?? m.label) === l) ?? null;
}
