export const SCENARIOS = [
  { id: "space", name: "Espaço Sideral", theme: "adventure", visualComplexity: "medium" },
  { id: "jungle", name: "Floresta Tropical", theme: "nature", visualComplexity: "high" },
  { id: "ocean", name: "Fundo do Mar", theme: "nature", visualComplexity: "medium" },
  { id: "castle", name: "Castelo Medieval", theme: "fantasy", visualComplexity: "high" },
  { id: "farm", name: "Fazenda Alegre", theme: "nature", visualComplexity: "low" },
  { id: "city", name: "Cidade Moderna", theme: "urban", visualComplexity: "high" },
  { id: "school", name: "Escola Divertida", theme: "education", visualComplexity: "low" },
  { id: "garden", name: "Jardim das Flores", theme: "nature", visualComplexity: "low" },
  { id: "arctic", name: "Polo Norte", theme: "nature", visualComplexity: "medium" },
  { id: "desert", name: "Deserto Quente", theme: "nature", visualComplexity: "low" },
  { id: "hospital", name: "Hospital da Saúde", theme: "health", visualComplexity: "low" },
  { id: "museum", name: "Museu de História", theme: "culture", visualComplexity: "medium" },
  { id: "park", name: "Parque das Cores", theme: "arts", visualComplexity: "low" },
  {
    id: "laboratory",
    name: "Laboratório de Ciências",
    theme: "science",
    visualComplexity: "medium",
  },
  { id: "mountain", name: "Montanha Alta", theme: "nature", visualComplexity: "medium" },
  { id: "volcano", name: "Vulcão de Fogo", theme: "nature", visualComplexity: "high" },
  {
    id: "supermarket",
    name: "Supermercado Brilha",
    theme: "economics",
    visualComplexity: "medium",
  },
  { id: "beach", name: "Praia do Sol", theme: "nature", visualComplexity: "low" },
  { id: "theater", name: "Teatro de Sombras", theme: "arts", visualComplexity: "medium" },
  { id: "library", name: "Biblioteca Mágica", theme: "education", visualComplexity: "low" },
];

export const OBJECTS = [
  { id: "obj_1", name: "Maçã", category: "food", tags: ["fruta", "vermelho"] },
  { id: "obj_2", name: "Banana", category: "food", tags: ["fruta", "amarelo"] },
  { id: "obj_3", name: "Gato", category: "animal", tags: ["pet", "fofo"] },
  { id: "obj_4", name: "Cachorro", category: "animal", tags: ["pet", "fofo"] },
  { id: "obj_5", name: "Carro", category: "transport", tags: ["veiculo"] },
  { id: "obj_6", name: "Avião", category: "transport", tags: ["veiculo", "voar"] },
  { id: "obj_7", name: "Bola", category: "toy", tags: ["esporte"] },
  { id: "obj_8", name: "Boneca", category: "toy", tags: ["brinquedo"] },
  { id: "obj_9", name: "Dinossauro", category: "animal", tags: ["pre-historia", "grande"] },
  { id: "obj_10", name: "Livro", category: "education", tags: ["escola", "leitura"] },
  { id: "obj_11", name: "Uva", category: "food", tags: ["fruta", "roxo"] },
  { id: "obj_12", name: "Leão", category: "animal", tags: ["selvagem"] },
  { id: "obj_13", name: "Bicicleta", category: "transport", tags: ["veiculo"] },
  { id: "obj_14", name: "Quebra-cabeça", category: "toy", tags: ["raciocinio"] },
  { id: "obj_15", name: "Lápis", category: "education", tags: ["escrita"] },
  { id: "obj_16", name: "Morango", category: "food", tags: ["fruta", "vermelho"] },
  { id: "obj_17", name: "Elefante", category: "animal", tags: ["selvagem", "grande"] },
  { id: "obj_18", name: "Barco", category: "transport", tags: ["veiculo", "mar"] },
  { id: "obj_19", name: "Peteca", category: "toy", tags: ["esporte"] },
  { id: "obj_20", name: "Caderno", category: "education", tags: ["escrita"] },
  // Corpo Humano
  { id: "sci_1", name: "Coração", category: "body", tags: ["saude", "interno"] },
  { id: "sci_2", name: "Cérebro", category: "body", tags: ["saude", "pensar"] },
  { id: "sci_3", name: "Mão", category: "body", tags: ["externo"] },
  // Alimentação
  { id: "sci_4", name: "Brócolis", category: "food", tags: ["saudavel", "verde"] },
  { id: "sci_5", name: "Leite", category: "food", tags: ["calcio", "branco"] },
  // Geografia
  { id: "geo_1", name: "Mapa", category: "location", tags: ["orientacao"] },
  { id: "geo_2", name: "Bússola", category: "location", tags: ["norte"] },
  { id: "geo_3", name: "Bandeira", category: "culture", tags: ["brasil"] },
  // História
  { id: "his_1", name: "Coroa", category: "history", tags: ["rei", "passado"] },
  { id: "his_2", name: "Pergaminho", category: "history", tags: ["escrita", "antigo"] },
  // Artes
  { id: "art_1", name: "Pincel", category: "arts", tags: ["pintura"] },
  { id: "art_2", name: "Tinta Guache", category: "arts", tags: ["colorir"] },
  { id: "art_3", name: "Flauta", category: "arts", tags: ["musica"] },
];

export const CHARACTERS = [
  { id: "char_1", name: "Pip", role: "guide", personality: "logical" },
  { id: "char_2", name: "Pipa", role: "guide", personality: "kind" },
  { id: "char_3", name: "Pip Piloto", role: "adventure", personality: "brave" },
  { id: "char_4", name: "Pip Astronauta", role: "space", personality: "curious" },
  { id: "char_5", name: "Pip Explorador", role: "nature", personality: "wise" },
  { id: "char_6", name: "Pipa Doutora", role: "science", personality: "smart" },
  { id: "char_7", name: "Pipa Artista", role: "arts", personality: "creative" },
  { id: "char_8", name: "Pip Dino", role: "history", personality: "friendly" },
  { id: "char_9", name: "Pip Amigo", role: "emocional", personality: "peaceful" },
];

export const EMOTIONS = [
  { id: "emo_happy", name: "Feliz", emoji: "😊", color: "text-sun" },
  { id: "emo_sad", name: "Triste", emoji: "😢", color: "text-sky" },
  { id: "emo_angry", name: "Bravo", emoji: "😠", color: "text-coral" },
  { id: "emo_calm", name: "Calmo", emoji: "😌", color: "text-success" },
  { id: "emo_fear", name: "Medo", emoji: "😨", color: "text-lilac" },
];

export const SOCIAL_SITUATIONS = [
  {
    id: "sit_friend",
    title: "Dividindo o Brinquedo",
    context: "Você tem um carrinho e seu amigo quer brincar também.",
    options: ["Emprestar", "Esconder", "Gritar"],
    correct: "Emprestar",
  },
  {
    id: "sit_help",
    title: "Amigo Triste",
    context: "Seu amigo caiu e está chorando.",
    options: ["Rir", "Ajudar a levantar", "Ignorar"],
    correct: "Ajudar a levantar",
  },
  {
    id: "sit_wait",
    title: "Hora de Esperar",
    context: "Você quer muito falar, mas a professora está conversando.",
    options: ["Interromper", "Esperar a vez", "Sair de perto"],
    correct: "Esperar a vez",
  },
];

export const CREATIVE_ASSETS = {
  colors: ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFF333", "#33FFF3"],
  shapes: ["square", "circle", "triangle", "star", "diamond"],
  patterns: ["dots", "stripes", "grid", "zigzag"],
  textures: ["silk", "wool", "cotton", "denim"],
};
