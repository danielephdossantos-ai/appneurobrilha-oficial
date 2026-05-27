
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
  { id: 'meninos', name: 'Meninos' },
  { id: 'meninas', name: 'Meninas' },
  { id: 'animais', name: 'Animais' },
  { id: 'especiais', name: 'Especiais' }, // Super-heróis, Cientistas, Astronautas
  { id: 'fantasia', name: 'Fantasia' }, // Fadinhas, Robôs, Monstros fofos
];

export const MASCOTS: MascotData[] = [
  // --- MENINOS ---
  {
    id: 'menino-heroi',
    name: 'Herói Relâmpago',
    category: 'meninos',
    type: 'human',
    skin: 'white',
    hairColor: 'blonde',
    costume: 'superhero',
    description: 'Um herói que corre na velocidade da luz para ajudar os amigos!',
    rarity: 'raro',
    personality: 'Corajoso e entusiasmado',
    pose: 'heroic',
    details: { eyeColor: '#4A90E2', accessory: 'lightning-bolt' }
  },
  {
    id: 'menino-cientista',
    name: 'Gênio Junior',
    category: 'especiais',
    type: 'human',
    skin: 'light',
    hairColor: 'brown',
    costume: 'scientist',
    description: 'Adora fazer experimentos e descobrir como o mundo funciona.',
    rarity: 'epico',
    personality: 'Curioso e inteligente',
    pose: 'thinking',
    details: { eyeColor: '#50E3C2', accessory: 'glasses' }
  },
  {
    id: 'menino-astronauta',
    name: 'Leo Estelar',
    category: 'especiais',
    type: 'human',
    skin: 'dark',
    hairColor: 'black',
    costume: 'astronaut',
    description: 'Sua próxima missão é descobrir planetas feitos de doce!',
    rarity: 'lendario',
    personality: 'Sonhador e aventureiro',
    pose: 'floating',
    details: { eyeColor: '#9B51E0', accessory: 'helmet' }
  },

  // --- MENINAS ---
  {
    id: 'menina-fada',
    name: 'Fada Flora',
    category: 'fantasia',
    type: 'human',
    skin: 'white',
    hairColor: 'red',
    costume: 'fairy',
    description: 'Cuida de todas as flores e espalha brilho por onde passa.',
    rarity: 'epico',
    personality: 'Gentil e mágica',
    pose: 'flying',
    details: { eyeColor: '#FF69B4', backAccessory: 'wings' }
  },
  {
    id: 'menina-princesa',
    name: 'Princesa Sofia',
    category: 'meninas',
    type: 'human',
    skin: 'brown',
    hairColor: 'black',
    costume: 'princess',
    description: 'Uma princesa que ama livros e aventuras na floresta.',
    rarity: 'raro',
    personality: 'Educada e destemida',
    pose: 'graceful',
    details: { eyeColor: '#7ED321', accessory: 'tiara' }
  },

  // --- ANIMAIS ---
  {
    id: 'dino-baby',
    name: 'Rexinho',
    category: 'animais',
    type: 'animal',
    costume: 'dino',
    description: 'O dinossauro mais fofo que você já viu. Ele adora abraços!',
    rarity: 'comum',
    personality: 'Brincalhão e carinhoso',
    pose: 'sitting',
    details: { eyeColor: '#4CAF50' }
  },
  {
    id: 'cachorrinho-fofo',
    name: 'Bidu',
    category: 'animais',
    type: 'animal',
    costume: 'dog',
    description: 'Um cachorrinho leal que sempre te espera com um sorriso.',
    rarity: 'comum',
    personality: 'Leal e feliz',
    pose: 'standing',
    details: { eyeColor: '#8B4513' }
  },
  {
    id: 'gatinho-miau',
    name: 'Lola',
    category: 'animais',
    type: 'animal',
    costume: 'cat',
    description: 'Ama dormir no sol e brincar com novelos de lã coloridos.',
    rarity: 'comum',
    personality: 'Tranquila e observadora',
    pose: 'curled',
    details: { eyeColor: '#F5A623' }
  },
  {
    id: 'ursinho-polar',
    name: 'Pipo',
    category: 'animais',
    type: 'animal',
    costume: 'bear',
    description: 'Vem do polo norte para te dar o abraço mais quentinho do mundo.',
    rarity: 'raro',
    personality: 'Protetor e calmo',
    pose: 'standing',
    details: { eyeColor: '#4A90E2' }
  },

  // --- ESPECIAIS / FANTASIA ---
  {
    id: 'robo-fofo',
    name: 'Bit-Bot',
    category: 'fantasia',
    type: 'robot',
    costume: 'robot',
    description: 'Processa amizade em alta velocidade! Beep-boop!',
    rarity: 'raro',
    personality: 'Lógico e prestativo',
    pose: 'robotic',
    details: { eyeColor: '#00D1FF' }
  },
  {
    id: 'unicornio-magico',
    name: 'Estrela Guia',
    category: 'fantasia',
    type: 'animal',
    costume: 'unicorn',
    description: 'Seu chifre brilha com as cores do arco-íris quando está feliz.',
    rarity: 'lendario',
    personality: 'Radiante e otimista',
    pose: 'rearing',
    details: { eyeColor: '#D0021B' }
  }
];
