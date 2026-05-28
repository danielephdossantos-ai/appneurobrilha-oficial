
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
  { id: 'meninos-herois', name: 'Heróis Valentes' },
  { id: 'meninos-animais', name: 'Amiguinhos Animais' },
  { id: 'meninos-profissoes', name: 'Pequenos Profissionais' },
  { id: 'meninas-princesas', name: 'Princesas Encantadas' },
  { id: 'meninas-heroinas', name: 'Heroínas Poderosas' },
  { id: 'meninas-fantasia', name: 'Mundo da Fantasia' },
  { id: 'bichinhos-fofos', name: 'Bichinhos Fofos' },
];

export const MASCOTS: MascotData[] = [
  // --- MENINOS SUPER-HERÓIS ---
  {
    id: 'heroi-aranha',
    name: 'Araninha Amigo',
    category: 'meninos-herois',
    type: 'human',
    description: 'Ele escala paredes e adora ajudar a todos com suas teias de alegria!',
    rarity: 'raro',
    personality: 'Ágil e Atencioso'
  },
  {
    id: 'heroi-morcego',
    name: 'Morceguinho Herói',
    category: 'meninos-herois',
    type: 'human',
    description: 'O guardião da noite que usa sua inteligência para resolver qualquer mistério.',
    rarity: 'epico',
    personality: 'Corajoso e Inteligente'
  },
  {
    id: 'heroi-ferro',
    name: 'Menino de Ferro',
    category: 'meninos-herois',
    type: 'human',
    description: 'Com sua armadura brilhante, ele traz tecnologia e diversão para o time.',
    rarity: 'epico',
    personality: 'Genial e Criativo'
  },
  {
    id: 'heroi-hulk',
    name: 'Gigante Gentil',
    category: 'meninos-herois',
    type: 'human',
    description: 'Ele é muito forte, mas seu coração é ainda maior e cheio de carinho.',
    rarity: 'raro',
    personality: 'Forte e Amigável'
  },
  {
    id: 'heroi-capitao',
    name: 'Capitão Amizade',
    category: 'meninos-herois',
    type: 'human',
    description: 'Um líder nato que ensina a importância de trabalhar em equipe e ser honesto.',
    rarity: 'raro',
    personality: 'Líder e Justo'
  },
  {
    id: 'heroi-flecha',
    name: 'Flecha Veloz',
    category: 'meninos-herois',
    type: 'human',
    description: 'Tão rápido que você mal consegue vê-lo! Ele adora corridas e desafios.',
    rarity: 'raro',
    personality: 'Energético e Veloz'
  },
  {
    id: 'heroi-lobo',
    name: 'Lobinho Valente',
    category: 'meninos-herois',
    type: 'human',
    description: 'Com suas garras de coragem, ele protege a natureza e seus amigos.',
    rarity: 'epico',
    personality: 'Determinado e Protetor'
  },

  // --- MENINOS ANIMAIS ---
  {
    id: 'menino-dino',
    name: 'Menino Dino',
    category: 'meninos-animais',
    type: 'fantasy',
    description: 'Um amiguinho com uma fantasia super fofa de dinossauro verde.',
    rarity: 'comum',
    personality: 'Divertido'
  },
  {
    id: 'menino-urso',
    name: 'Menino Ursinho',
    category: 'meninos-animais',
    type: 'fantasy',
    description: 'Ele adora abraços e está sempre com sua fantasia de urso marrom.',
    rarity: 'comum',
    personality: 'Carinhoso'
  },
  {
    id: 'menino-cao',
    name: 'Menino Cão',
    category: 'meninos-animais',
    type: 'fantasy',
    description: 'Sempre pronto para brincar de buscar com sua fantasia de cachorrinho.',
    rarity: 'comum',
    personality: 'Leal'
  },
  {
    id: 'menino-gato',
    name: 'Menino Gato',
    category: 'meninos-animais',
    type: 'fantasy',
    description: 'Ágil e curioso, ele adora pular com sua fantasia de gatinho cinza.',
    rarity: 'comum',
    personality: 'Curioso'
  },
  {
    id: 'menino-dragao',
    name: 'Menino Dragão',
    category: 'meninos-animais',
    type: 'fantasy',
    description: 'Um dragãozinho que solta bolhas de sabão em vez de fogo!',
    rarity: 'raro',
    personality: 'Mágico'
  },
  {
    id: 'menino-leao',
    name: 'Leãozinho Corajoso',
    category: 'meninos-animais',
    type: 'fantasy',
    description: 'O rei da diversão com sua juba de pelúcia e rugido de alegria.',
    rarity: 'raro',
    personality: 'Majestoso'
  },
  {
    id: 'menino-tigre',
    name: 'Tigre Fofo',
    category: 'meninos-animais',
    type: 'fantasy',
    description: 'Listras laranjas e muita disposição para aventuras na selva.',
    rarity: 'raro',
    personality: 'Ativo'
  },

  // --- MENINOS PROFISSÕES ---
  {
    id: 'prof-medico',
    name: 'Doutor Sorriso',
    category: 'meninos-profissoes',
    type: 'human',
    description: 'Ele cuida de todos os brinquedos e amigos com muito carinho.',
    rarity: 'raro',
    personality: 'Cuidadoso'
  },
  {
    id: 'prof-bombeiro',
    name: 'Bombeiro Amigo',
    category: 'meninos-profissoes',
    type: 'human',
    description: 'Sempre pronto para ajudar e ensinar sobre segurança com sua mangueira.',
    rarity: 'raro',
    personality: 'Heróico'
  },
  {
    id: 'prof-policial',
    name: 'Policial Legal',
    category: 'meninos-profissoes',
    type: 'human',
    description: 'Ele ajuda a organizar as brincadeiras e protege o parquinho.',
    rarity: 'raro',
    personality: 'Organizado'
  },
  {
    id: 'prof-professor',
    name: 'Professor Sabichão',
    category: 'meninos-profissoes',
    type: 'human',
    description: 'Adora contar histórias e ensinar coisas novas para todo mundo.',
    rarity: 'comum',
    personality: 'Sábio'
  },
  {
    id: 'prof-cientista',
    name: 'Cientista Maluco',
    category: 'meninos-profissoes',
    type: 'human',
    description: 'Faz experiências incríveis com cores e formas no seu laboratório.',
    rarity: 'epico',
    personality: 'Curioso'
  },
  {
    id: 'prof-jogador',
    name: 'Craque de Bola',
    category: 'meninos-profissoes',
    type: 'human',
    description: 'O melhor em campo! Ele ensina que o importante é se divertir jogando.',
    rarity: 'raro',
    personality: 'Atleta'
  },

  // --- MENINAS PRINCESAS ---
  {
    id: 'prin-rapunzel',
    name: 'Princesa do Cabelo Longo',
    category: 'meninas-princesas',
    type: 'human',
    description: 'Adora pintar e tem um cabelo mágico que brilha com a luz do sol.',
    rarity: 'raro',
    personality: 'Artista'
  },
  {
    id: 'prin-neve',
    name: 'Branca de Neve Doce',
    category: 'meninas-princesas',
    type: 'human',
    description: 'Amiga de todos os animaizinhos da floresta e muito bondosa.',
    rarity: 'raro',
    personality: 'Bondosa'
  },
  {
    id: 'prin-cinderela',
    name: 'Cinderela Encantada',
    category: 'meninas-princesas',
    type: 'human',
    description: 'Ela ensina que a gentileza é o maior de todos os encantos.',
    rarity: 'raro',
    personality: 'Gentil'
  },
  {
    id: 'prin-ariel',
    name: 'Sereia Alegria',
    category: 'meninas-princesas',
    type: 'fantasy',
    description: 'Adora explorar os tesouros do fundo do mar e cantar com os peixes.',
    rarity: 'epico',
    personality: 'Exploradora'
  },
  {
    id: 'prin-malevola',
    name: 'Fada das Sombras',
    category: 'meninas-princesas',
    type: 'fantasy',
    description: 'Uma fada incompreendida que no fundo só quer proteger seu reino.',
    rarity: 'lendario',
    personality: 'Poderosa'
  },
  {
    id: 'prin-moana',
    name: 'Moana do Mar',
    category: 'meninas-princesas',
    type: 'human',
    description: 'Uma navegadora corajosa que segue a voz do seu coração e do oceano.',
    rarity: 'epico',
    personality: 'Aventureira'
  },

  // --- MENINAS SUPER-HEROÍNAS ---
  {
    id: 'heroina-alerquina',
    name: 'Alerquina Divertida',
    category: 'meninas-heroinas',
    type: 'human',
    description: 'Sempre com uma piada pronta e muita energia para as brincadeiras.',
    rarity: 'epico',
    personality: 'Engraçada'
  },
  {
    id: 'heroina-maravilha',
    name: 'Menina Maravilha',
    category: 'meninas-heroinas',
    type: 'human',
    description: 'Com seu laço da verdade e força incrível, ela protege seus amigos.',
    rarity: 'lendario',
    personality: 'Forte'
  },
  {
    id: 'heroina-gato',
    name: 'Menina Gato Ágil',
    category: 'meninas-heroinas',
    type: 'human',
    description: 'Rápida e silenciosa, ela adora resolver mistérios noturnos.',
    rarity: 'raro',
    personality: 'Ágil'
  },
  {
    id: 'heroina-viuva',
    name: 'Viuva Negra Mirim',
    category: 'meninas-heroinas',
    type: 'human',
    description: 'Mestra em artes marciais e espionagem (de brincadeira, claro!).',
    rarity: 'epico',
    personality: 'Estrategista'
  },

  // --- MENINAS FANTASIA ---
  {
    id: 'fant-unicornio',
    name: 'Menina Unicórnio',
    category: 'meninas-fantasia',
    type: 'fantasy',
    description: 'Com um chifre mágico e cores de arco-íris por toda parte.',
    rarity: 'lendario',
    personality: 'Mágica'
  },
  {
    id: 'fant-gatinha',
    name: 'Menina Gatinha',
    category: 'meninas-fantasia',
    type: 'fantasy',
    description: 'Orelhinhas de gato e muito charme para conquistar todo mundo.',
    rarity: 'comum',
    personality: 'Fofa'
  },
  {
    id: 'fant-coelhinha',
    name: 'Menina Coelhinha',
    category: 'meninas-fantasia',
    type: 'fantasy',
    description: 'Adora pular e comer cenouras com sua fantasia de coelho.',
    rarity: 'comum',
    personality: 'Saltitante'
  },
  {
    id: 'fant-panda',
    name: 'Menina Panda',
    category: 'meninas-fantasia',
    type: 'fantasy',
    description: 'A mais fofinha de todas com sua roupinha preta e branca.',
    rarity: 'raro',
    personality: 'Tranquila'
  },

  // --- BICHINHOS FOFOS ---
  {
    id: 'pet-cao',
    name: 'Cachorrinho Pipo',
    category: 'bichinhos-fofos',
    type: 'animal',
    description: 'O melhor amigo de quatro patas que você poderia ter!',
    rarity: 'comum',
    personality: 'Leal'
  },
  {
    id: 'pet-gato',
    name: 'Gatinha Luna',
    category: 'bichinhos-fofos',
    type: 'animal',
    description: 'Elegante e ronronante, ela adora um carinho atrás da orelha.',
    rarity: 'comum',
    personality: 'Curiosa'
  },
  {
    id: 'pet-urso',
    name: 'Ursinho Teddy',
    category: 'bichinhos-fofos',
    type: 'animal',
    description: 'Um urso de pelúcia que ganhou vida para te dar muitos abraços.',
    rarity: 'raro',
    personality: 'Carinhoso'
  },
  {
    id: 'pet-panda',
    name: 'Pandinha Pan',
    category: 'bichinhos-fofos',
    type: 'animal',
    description: 'Adora rolar e comer bambu o dia todo com muita calma.',
    rarity: 'epico',
    personality: 'Tranquilo'
  },
  {
    id: 'pet-coelho',
    name: 'Coelhinho Saltitante',
    category: 'bichinhos-fofos',
    type: 'animal',
    description: 'Orelhas longas e um narizinho que não para de mexer.',
    rarity: 'comum',
    personality: 'Ágil'
  },
  {
    id: 'pet-dino',
    name: 'Dino Baby Rex',
    category: 'bichinhos-fofos',
    type: 'animal',
    description: 'Um dinossaurinho que ainda está aprendendo a rugir.',
    rarity: 'raro',
    personality: 'Brincalhão'
  },
  {
    id: 'pet-raposa',
    name: 'Raposinha Foxy',
    category: 'bichinhos-fofos',
    type: 'animal',
    description: 'Esperta e com uma cauda muito peluda e alaranjada.',
    rarity: 'epico',
    personality: 'Esperta'
  },
  {
    id: 'pet-pinguim',
    name: 'Pinguim Pingu',
    category: 'bichinhos-fofos',
    type: 'animal',
    description: 'Direto do gelo para aquecer seu coração com muita alegria.',
    rarity: 'raro',
    personality: 'Atrapalhado'
  }
];
