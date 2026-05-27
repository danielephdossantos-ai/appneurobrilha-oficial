
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
  { id: 'meninos', name: 'Heróis' },
  { id: 'meninas', name: 'Fofuras' },
  { id: 'animais', name: 'Animais' },
  { id: 'especiais', name: 'Especiais' },
];

export const MASCOTS: MascotData[] = [
  // --- HEROIS ---
  {
    id: 'heroi-1',
    name: 'Flash Amigão',
    category: 'meninos',
    type: 'human',
    skin: 'white',
    hairColor: 'blonde',
    costume: 'superhero',
    description: 'Sempre pronto para ajudar com super velocidade!',
    rarity: 'raro',
    personality: 'Energético e prestativo',
    details: { eyeColor: '#4A90E2', accessory: 'lightning-bolt' }
  },
  {
    id: 'heroi-2',
    name: 'Capitão Brilho',
    category: 'meninos',
    type: 'human',
    skin: 'dark',
    hairColor: 'black',
    costume: 'superhero',
    description: 'Protege o mundo com seu sorriso brilhante.',
    rarity: 'lendario',
    personality: 'Líder nato',
    details: { eyeColor: '#FFD700', accessory: 'lightning-bolt' }
  },

  // --- FOFURAS ---
  {
    id: 'fofura-1',
    name: 'Fada Belinha',
    category: 'meninas',
    type: 'human',
    skin: 'white',
    hairColor: 'red',
    costume: 'fairy',
    description: 'Espalha pó de pirlimpimpim por onde passa.',
    rarity: 'epico',
    personality: 'Doce e sonhadora',
    details: { eyeColor: '#FF69B4', backAccessory: 'wings' }
  },
  {
    id: 'fofura-2',
    name: 'Princesa Luna',
    category: 'meninas',
    type: 'human',
    skin: 'brown',
    hairColor: 'black',
    costume: 'princess',
    description: 'Adora contar histórias sob a luz do luar.',
    rarity: 'raro',
    personality: 'Serena e sábia',
    details: { eyeColor: '#9B51E0', accessory: 'tiara' }
  },

  // --- ANIMAIS ---
  {
    id: 'animal-1',
    name: 'Rex Divertido',
    category: 'animais',
    type: 'animal',
    costume: 'dino',
    description: 'O dinossauro que trocou rugidos por risadas!',
    rarity: 'comum',
    personality: 'Engraçado e leal',
    details: { eyeColor: '#4CAF50' }
  },
  {
    id: 'animal-2',
    name: 'Miau Melodia',
    category: 'animais',
    type: 'animal',
    costume: 'cat',
    description: 'Uma gatinha que ronrona músicas relaxantes.',
    rarity: 'comum',
    personality: 'Calma e musical',
    details: { eyeColor: '#F5A623' }
  },
  {
    id: 'animal-3',
    name: 'Pipo Urso',
    category: 'animais',
    type: 'animal',
    costume: 'bear',
    description: 'Dá os abraços mais fofinhos do universo.',
    rarity: 'raro',
    personality: 'Acolhedor e protetor',
    details: { eyeColor: '#795548' }
  },

  // --- ESPECIAIS ---
  {
    id: 'especial-1',
    name: 'Cientista Cadu',
    category: 'especiais',
    type: 'human',
    skin: 'light',
    hairColor: 'brown',
    costume: 'scientist',
    description: 'Descobrindo as maravilhas da ciência com você!',
    rarity: 'epico',
    personality: 'Curioso e focado',
    details: { eyeColor: '#00BCD4', accessory: 'glasses' }
  },
  {
    id: 'especial-2',
    name: 'Robô Bip',
    category: 'especiais',
    type: 'robot',
    costume: 'robot',
    description: 'Calculando a melhor forma de te fazer sorrir.',
    rarity: 'raro',
    personality: 'Lógico e divertido',
    details: { eyeColor: '#00D1FF' }
  },
  {
    id: 'especial-3',
    name: 'Leo Astro',
    category: 'especiais',
    type: 'human',
    skin: 'dark',
    hairColor: 'black',
    costume: 'astronaut',
    description: 'Explorando planetas de alegria no espaço sideral.',
    rarity: 'lendario',
    personality: 'Aventureiro e ousado',
    details: { eyeColor: '#FFFFFF', accessory: 'helmet' }
  }
];
