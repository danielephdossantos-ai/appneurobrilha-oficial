
export type MascotType = 'human' | 'animal';
export type SkinType = 'white' | 'brown' | 'light' | 'dark' | 'none';
export type HairColor = 'blonde' | 'black' | 'red' | 'none';

export interface MascotData {
  id: string;
  name: string;
  category: string;
  type: MascotType;
  skin?: SkinType;
  hairColor?: HairColor;
  costume?: string;
  description: string;
}

export const MASCOT_CATEGORIES = [
  { id: 'meninos-super-herois', name: 'Meninos Super-Heróis' },
  { id: 'meninos-animais', name: 'Meninos Animais' },
  { id: 'meninos-profissoes', name: 'Meninos Profissões' },
  { id: 'meninos-normais', name: 'Meninos Normais' },
  { id: 'meninas-princesas', name: 'Meninas Princesas' },
  { id: 'meninas-super-herois', name: 'Meninas Super-Heróis' },
  { id: 'meninas-fantasia', name: 'Meninas Fantasia' },
  { id: 'meninas-normais', name: 'Meninas Normais' },
  { id: 'bichinhos-fofos', name: 'Bichinhos Fofos' },
];

export const MASCOTS: MascotData[] = [
  // 1. MENINOS SUPER-HERÓIS
  { id: 'heroi-relampago', name: 'Herói Relâmpago', category: 'meninos-super-herois', type: 'human', skin: 'white', hairColor: 'blonde', costume: 'lightning', description: 'Rápido como um raio!' },
  { id: 'heroi-sombra', name: 'Herói Sombra', category: 'meninos-super-herois', type: 'human', skin: 'brown', hairColor: 'black', costume: 'shadow', description: 'Mestre do mistério.' },
  { id: 'heroi-fogo', name: 'Herói Fogo', category: 'meninos-super-herois', type: 'human', skin: 'light', hairColor: 'red', costume: 'fire', description: 'Quente e corajoso!' },
  { id: 'heroi-ceu', name: 'Herói Céu', category: 'meninos-super-herois', type: 'human', skin: 'dark', hairColor: 'black', costume: 'sky', description: 'Protegendo as nuvens.' },

  // 2. MENINOS ANIMAIS
  { id: 'dino-verde', name: 'Dino Verde', category: 'meninos-animais', type: 'human', skin: 'white', hairColor: 'none', costume: 'dinosaur', description: 'Um pequeno dinossauro fofo.' },
  { id: 'leaozinho', name: 'Leãozinho', category: 'meninos-animais', type: 'human', skin: 'brown', hairColor: 'none', costume: 'lion', description: 'O rei da brincadeira.' },
  { id: 'ursinho-menino', name: 'Ursinho', category: 'meninos-animais', type: 'human', skin: 'light', hairColor: 'blonde', costume: 'bear', description: 'Abraço de urso!' },
  { id: 'tigre-fofo', name: 'Tigre Fofo', category: 'meninos-animais', type: 'human', skin: 'dark', hairColor: 'none', costume: 'tiger', description: 'Listras da amizade.' },

  // 3. MENINOS PROFISSÕES
  { id: 'medico', name: 'Médico', category: 'meninos-profissoes', type: 'human', skin: 'white', hairColor: 'black', costume: 'doctor', description: 'Cuidando de todos.' },
  { id: 'bombeiro', name: 'Bombeiro', category: 'meninos-profissoes', type: 'human', skin: 'brown', hairColor: 'black', costume: 'firefighter', description: 'Sempre pronto para ajudar.' },
  { id: 'policial', name: 'Policial', category: 'meninos-profissoes', type: 'human', skin: 'dark', hairColor: 'black', costume: 'police', description: 'Segurança em primeiro lugar.' },
  { id: 'professor', name: 'Professor', category: 'meninos-profissoes', type: 'human', skin: 'light', hairColor: 'red', costume: 'teacher', description: 'Ensinando com amor.' },

  // 4. MENINOS NORMAIS
  { id: 'casual-esportivo', name: 'Casual Esportivo', category: 'meninos-normais', type: 'human', skin: 'white', hairColor: 'blonde', costume: 'sporty', description: 'Pronto para correr.' },
  { id: 'roupa-simples', name: 'Roupa Simples', category: 'meninos-normais', type: 'human', skin: 'brown', hairColor: 'black', costume: 'casual', description: 'Confortável e feliz.' },
  { id: 'estilo-urbano', name: 'Estilo Urbano', category: 'meninos-normais', type: 'human', skin: 'dark', hairColor: 'black', costume: 'urban', description: 'Estiloso demais!' },
  { id: 'confortavel-menino', name: 'Roupa Confortável', category: 'meninos-normais', type: 'human', skin: 'light', hairColor: 'blonde', costume: 'comfy', description: 'Dia de relaxar.' },

  // 5. MENINAS PRINCESAS
  { id: 'princesa-rosa', name: 'Princesa Rosa', category: 'meninas-princesas', type: 'human', skin: 'light', hairColor: 'blonde', costume: 'pink-princess', description: 'Realeza e doçura.' },
  { id: 'princesa-encantada', name: 'Princesa Encantada', category: 'meninas-princesas', type: 'human', skin: 'brown', hairColor: 'black', costume: 'enchanted-princess', description: 'Um conto de fadas real.' },
  { id: 'princesa-do-sol', name: 'Princesa do Sol', category: 'meninas-princesas', type: 'human', skin: 'white', hairColor: 'red', costume: 'sun-princess', description: 'Brilhando como o dia.' },
  { id: 'princesa-noite', name: 'Princesa Noite', category: 'meninas-princesas', type: 'human', skin: 'dark', hairColor: 'black', costume: 'night-princess', description: 'Estrelas no coração.' },

  // 6. MENINAS SUPER-HERÓIS
  { id: 'heroina-luz', name: 'Heroína Luz', category: 'meninas-super-herois', type: 'human', skin: 'light', hairColor: 'blonde', costume: 'light-hero', description: 'Iluminando o caminho.' },
  { id: 'heroina-energia', name: 'Heroína Energia', category: 'meninas-super-herois', type: 'human', skin: 'brown', hairColor: 'black', costume: 'energy-hero', description: 'Força total!' },
  { id: 'heroina-fenix', name: 'Heroína Fênix', category: 'meninas-super-herois', type: 'human', skin: 'white', hairColor: 'red', costume: 'phoenix-hero', description: 'Sempre se superando.' },
  { id: 'heroina-estrela', name: 'Heroína Estrela', category: 'meninas-super-herois', type: 'human', skin: 'dark', hairColor: 'black', costume: 'star-hero', description: 'Poder das galáxias.' },

  // 7. MENINAS FANTASIA
  { id: 'unicornio', name: 'Unicórnio', category: 'meninas-fantasia', type: 'human', skin: 'light', hairColor: 'blonde', costume: 'unicorn', description: 'Mágica e cores.' },
  { id: 'gatinha', name: 'Gatinha', category: 'meninas-fantasia', type: 'human', skin: 'brown', hairColor: 'black', costume: 'cat', description: 'Miau! Muito fofa.' },
  { id: 'coelhinha', name: 'Coelhinha', category: 'meninas-fantasia', type: 'human', skin: 'white', hairColor: 'red', costume: 'rabbit', description: 'Pulando de alegria.' },
  { id: 'panda-menina', name: 'Panda', category: 'meninas-fantasia', type: 'human', skin: 'dark', hairColor: 'black', costume: 'panda-suit', description: 'Fofura em preto e branco.' },

  // 8. MENINAS NORMAIS
  { id: 'roupa-simples-menina', name: 'Roupa Simples', category: 'meninas-normais', type: 'human', skin: 'light', hairColor: 'blonde', costume: 'casual-girl', description: 'Pronta para o dia.' },
  { id: 'vestido-casual', name: 'Vestido Casual', category: 'meninas-normais', type: 'human', skin: 'brown', hairColor: 'black', costume: 'dress', description: 'Leve e alegre.' },
  { id: 'estilo-moderno', name: 'Estilo Moderno', category: 'meninas-normais', type: 'human', skin: 'white', hairColor: 'red', costume: 'modern', description: 'Sempre na moda.' },
  { id: 'confortavel-menina', name: 'Roupa Confortável', category: 'meninas-normais', type: 'human', skin: 'dark', hairColor: 'black', costume: 'comfy-girl', description: 'Puro conforto.' },

  // 9. BICHINHOS FOFOS
  { id: 'cachorrinho', name: 'Cachorrinho', category: 'bichinhos-fofos', type: 'animal', description: 'O melhor amigo.' },
  { id: 'gatinho', name: 'Gatinho', category: 'bichinhos-fofos', type: 'animal', description: 'Ronrom de amor.' },
  { id: 'ursinho-animal', name: 'Ursinho', category: 'bichinhos-fofos', type: 'animal', description: 'Muito fofinho.' },
  { id: 'panda-animal', name: 'Panda', category: 'bichinhos-fofos', type: 'animal', description: 'Adora bambu e abraços.' },
  { id: 'coelhinho', name: 'Coelhinho', category: 'bichinhos-fofos', type: 'animal', description: 'Orelhas compridas.' },
  { id: 'dino-baby', name: 'Dino Baby', category: 'bichinhos-fofos', type: 'animal', description: 'Um pequeno rugido.' },
  { id: 'raposinha', name: 'Raposinha', category: 'bichinhos-fofos', type: 'animal', description: 'Esperta e veloz.' },
  { id: 'pinguim', name: 'Pinguim', category: 'bichinhos-fofos', type: 'animal', description: 'Um abraço geladinho.' },
];
