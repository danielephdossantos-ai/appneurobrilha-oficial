
export type MascotType = 'human' | 'animal' | 'robot' | 'fantasy';
export type SkinType = 'white' | 'brown' | 'light' | 'dark' | 'none';
export type HairColor = 'blonde' | 'black' | 'red' | 'brown' | 'none';
export type Rarity = 'comum' | 'raro' | 'epico' | 'lendario';

export interface MascotData {
  id: string;
  name: string;
  category: string;
  type: MascotType;
  skin?: SkinType;
  hairColor?: HairColor;
  costume?: string;
  description: string;
  rarity: Rarity;
  personality: string;
  reactionSound?: string;
  pose?: string;
  details?: {
    eyeColor?: string;
    accessory?: string;
    backAccessory?: string;
  };
}

export const MASCOT_CATEGORIES = [
  { id: 'meninos', name: 'Heróis & Amigos' },
  { id: 'meninas', name: 'Fofuras & Heroínas' },
  { id: 'animais', name: 'Bichinhos Fofos' },
  { id: 'especiais', name: 'Especiais & Robôs' },
];

export const MASCOTS: MascotData[] = [
  // --- MENINOS SUPER-HERÓIS (4) ---
  {
    id: 'heroi-lightning',
    name: 'Herói Relâmpago',
    category: 'meninos',
    type: 'human',
    skin: 'white',
    hairColor: 'blonde',
    costume: 'superhero',
    description: 'Rápido como um trovão e amigável como um abraço!',
    rarity: 'raro',
    personality: 'Energético',
    details: { eyeColor: '#4A90E2', accessory: 'lightning-bolt' }
  },
  {
    id: 'heroi-shadow',
    name: 'Herói Sombra',
    category: 'meninos',
    type: 'human',
    skin: 'brown',
    hairColor: 'black',
    costume: 'superhero',
    description: 'Ele protege a noite com muita coragem.',
    rarity: 'epico',
    personality: 'Corajoso',
    details: { eyeColor: '#9B51E0', accessory: 'lightning-bolt' }
  },
  {
    id: 'heroi-fire',
    name: 'Herói Fogo',
    category: 'meninos',
    type: 'human',
    skin: 'light',
    hairColor: 'red',
    costume: 'superhero',
    description: 'Seu coração é quente e cheio de alegria!',
    rarity: 'raro',
    personality: 'Entusiasmado',
    details: { eyeColor: '#FF5252', accessory: 'lightning-bolt' }
  },
  {
    id: 'heroi-sky',
    name: 'Herói Céu',
    category: 'meninos',
    type: 'human',
    skin: 'dark',
    hairColor: 'black',
    costume: 'superhero',
    description: 'Voando alto para espalhar sorrisos.',
    rarity: 'lendario',
    personality: 'Sonhador',
    details: { eyeColor: '#4A90E2', accessory: 'lightning-bolt' }
  },

  // --- MENINAS FOFURAS (4) ---
  {
    id: 'fada-lisa',
    name: 'Fada Lisa',
    category: 'meninas',
    type: 'human',
    skin: 'white',
    hairColor: 'blonde',
    costume: 'fairy',
    description: 'Mágica, doce e adora flores!',
    rarity: 'epico',
    personality: 'Gentil',
    details: { eyeColor: '#FF69B4', accessory: 'tiara' }
  },
  {
    id: 'princesa-nana',
    name: 'Princesa Nana',
    category: 'meninas',
    type: 'human',
    skin: 'brown',
    hairColor: 'black',
    costume: 'princess',
    description: 'Uma princesa que adora ler histórias.',
    rarity: 'raro',
    personality: 'Sábia',
    details: { eyeColor: '#9B51E0', accessory: 'tiara' }
  },
  {
    id: 'heroina-estela',
    name: 'Heroína Estrela',
    category: 'meninas',
    type: 'human',
    skin: 'light',
    hairColor: 'red',
    costume: 'superhero',
    description: 'Brilhando forte para ajudar a todos.',
    rarity: 'epico',
    personality: 'Brilhante',
    details: { eyeColor: '#FFD700', accessory: 'lightning-bolt' }
  },
  {
    id: 'fada-nuvem',
    name: 'Fada Nuvem',
    category: 'meninas',
    type: 'human',
    skin: 'dark',
    hairColor: 'black',
    costume: 'fairy',
    description: 'Flutuando com alegria e paz.',
    rarity: 'lendario',
    personality: 'Calma',
    details: { eyeColor: '#4A90E2', accessory: 'tiara' }
  },

  // --- BICHINHOS FOFOS (8) ---
  {
    id: 'dog-pipo',
    name: 'Pipo Cão',
    category: 'animais',
    type: 'animal',
    costume: 'dog',
    description: 'O melhor amigo que você pode ter!',
    rarity: 'comum',
    personality: 'Leal',
    details: { eyeColor: '#795548' }
  },
  {
    id: 'cat-luna',
    name: 'Miau Luna',
    category: 'animais',
    type: 'animal',
    costume: 'cat',
    description: 'Adora brincar com novelos de lã coloridos.',
    rarity: 'comum',
    personality: 'Curiosa',
    details: { eyeColor: '#F5A623' }
  },
  {
    id: 'bear-hug',
    name: 'Urso Abraço',
    category: 'animais',
    type: 'animal',
    costume: 'bear',
    description: 'Seus abraços curam qualquer tristeza.',
    rarity: 'raro',
    personality: 'Acolhedor',
    details: { eyeColor: '#8D6E63' }
  },
  {
    id: 'dino-rex',
    name: 'Rex Baby',
    category: 'animais',
    type: 'animal',
    costume: 'dino',
    description: 'Um dinossaurinho que adora frutas!',
    rarity: 'raro',
    personality: 'Divertido',
    details: { eyeColor: '#4CAF50' }
  },
  {
    id: 'panda-pandi',
    name: 'Pandi',
    category: 'animais',
    type: 'animal',
    costume: 'bear',
    description: 'Fofinho, gordinho e muito comilão.',
    rarity: 'epico',
    personality: 'Tranquilo',
    details: { eyeColor: '#1A1A40' }
  },
  {
    id: 'fox-foxy',
    name: 'Raposinha Foxy',
    category: 'animais',
    type: 'animal',
    costume: 'cat',
    description: 'Esperta e muito rápida nas brincadeiras.',
    rarity: 'epico',
    personality: 'Esperta',
    details: { eyeColor: '#FF5252' }
  },
  {
    id: 'penguin-pingu',
    name: 'Pingu Gelado',
    category: 'animais',
    type: 'animal',
    costume: 'penguin',
    description: 'Deslizando no gelo com muita alegria.',
    rarity: 'raro',
    personality: 'Brincalhão',
    details: { eyeColor: '#4A90E2' }
  },
  {
    id: 'unicorn-uni',
    name: 'Uni Mágico',
    category: 'animais',
    type: 'animal',
    costume: 'unicorn',
    description: 'Um unicórnio que traz cores ao mundo.',
    rarity: 'lendario',
    personality: 'Mágico',
    details: { eyeColor: '#BA68C8' }
  },

  // --- ESPECIAIS ---
  {
    id: 'robot-bip',
    name: 'Robô Bip',
    category: 'especiais',
    type: 'robot',
    costume: 'robot',
    description: 'Sempre pronto para calcular novas aventuras!',
    rarity: 'raro',
    personality: 'Inteligente',
    details: { eyeColor: '#00D1FF' }
  },
  {
    id: 'astro-leo',
    name: 'Leo Astro',
    category: 'especiais',
    type: 'human',
    skin: 'dark',
    hairColor: 'black',
    costume: 'astronaut',
    description: 'Explorando as estrelas da imaginação.',
    rarity: 'lendario',
    personality: 'Aventureiro',
    details: { eyeColor: '#FFFFFF', accessory: 'helmet' }
  }
];
