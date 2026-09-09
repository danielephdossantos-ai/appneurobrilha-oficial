// Sistema de Hiperfoco Dinâmico — temas que adaptam textos, sons e estímulos.
// Cada hiperfoco fornece elementos para substituir {elemento_hiperfoco} e {hiperfoco}
// nas instruções/payloads, além de frases contextualizadas do PIP.
//
// IMPORTANTE: os pais NÃO veem imagens ao escolher — apenas o nome da categoria.
// As ilustrações 2D ficam registradas em `src/data/hiperfocos-img.ts` e só aparecem
// dentro das atividades (neuro-treino, alfabetização, matemática, histórias).

export type HiperfocoId =
  | "dinossauros"
  | "animais"
  | "carros"
  | "herois"
  | "minecraft"
  | "espaco"
  | "princesas"
  | "fazendinha"
  | "bailarinas"
  | "sereias"
  | "robos"
  | "musica"
  | "arte"
  | "trens"
  | "nenhum"
  | "custom";

export interface Hiperfoco {
  id: HiperfocoId;
  label: string;
  emoji: string;
  /** Personagens/elementos típicos do tema (substituem {elemento_hiperfoco}). */
  elementos: string[];
  /** Som/onomatopeia característica. */
  som: string;
  /** Forma sugerida para coordenação/pontilhado. */
  formaPontilhado: string;
  /** Frases do PIP quando a criança acerta. */
  pipAcertos: string[];
  /** Frases do PIP de incentivo após erro. */
  pipIncentivos: string[];
}

export const HIPERFOCOS: Record<Exclude<HiperfocoId, "custom">, Hiperfoco> = {
  dinossauros: {
    id: "dinossauros",
    label: "Dinossauros",
    emoji: "🦖",
    elementos: ["T-Rex", "Tricerátops", "Estegossauro", "Braquiossauro", "Velociraptor"],
    som: "Roaaar! (rugido)",
    formaPontilhado: "um ovo de dinossauro",
    pipAcertos: [
      "Rooar! Você é fera igual um T-Rex!",
      "Boa! Caçada perfeita!",
      "Uhu! Descobriu o fóssil certinho!",
    ],
    pipIncentivos: [
      "Calma, paleontólogo! Bora escavar de novo.",
      "Errar é parte da aventura jurássica!",
    ],
  },
  animais: {
    id: "animais",
    label: "Animais",
    emoji: "🐾",
    elementos: ["Leão", "Elefante", "Macaco", "Tartaruga", "Coruja"],
    som: "som do animal escolhido",
    formaPontilhado: "uma patinha",
    pipAcertos: ["Boa! Faro de leão!", "Uhu! Sabidíssimo como uma coruja!", "Acertou na mosca!"],
    pipIncentivos: [
      "Calma como a tartaruga, bora de novo.",
      "Cada bichinho aprende no seu tempo.",
    ],
  },
  carros: {
    id: "carros",
    label: "Carros e Veículos",
    emoji: "🚗",
    elementos: ["Carro de corrida", "Caminhão", "Moto", "Trator", "Ônibus"],
    som: "Vrum vrum! (motor)",
    formaPontilhado: "um carrinho",
    pipAcertos: [
      "Vrum! Acelerou direto pra resposta certa!",
      "Boa! Pista limpa, ponto garantido!",
      "Uhul! Pole position!",
    ],
    pipIncentivos: ["Reduz a marcha e tenta de novo.", "Pit stop rápido e voltamos pra pista!"],
  },
  herois: {
    id: "herois",
    label: "Super-heróis",
    emoji: "🦸",
    elementos: ["Super-Herói", "Heroína", "Robô-amigo", "Capitã", "Justiceiro"],
    som: "Pow! Zap! (super-poder)",
    formaPontilhado: "uma capa de herói",
    pipAcertos: ["Pow! Super-acerto desbloqueado!", "Boa! Seu poder está crescendo!", "Salvou o dia!"],
    pipIncentivos: ["Todo herói treina! Bora de novo.", "Respira, recarrega o poder e tenta outra vez."],
  },
  minecraft: {
    id: "minecraft",
    label: "Minecraft",
    emoji: "🟩",
    elementos: ["Steve", "Alex", "Creeper", "Aldeão", "Lhama", "Galinha"],
    som: "tlec! tlec! (blocos)",
    formaPontilhado: "um bloco quadradinho",
    pipAcertos: [
      "Boa! Você minerou a resposta certa!",
      "Mandou bem! Bloco encaixado perfeitamente!",
      "Uhul! Crafting concluído!",
    ],
    pipIncentivos: ["Quase! Bora pegar mais um bloco e tentar de novo.", "Tranquilo! Todo construtor respira."],
  },
  espaco: {
    id: "espaco",
    label: "Espaço",
    emoji: "🚀",
    elementos: ["Foguete", "Astronauta", "Planeta", "Estrela", "Lua", "Cometa"],
    som: "Fiuuum! (decolagem)",
    formaPontilhado: "uma estrelinha",
    pipAcertos: ["Decolou direto pra resposta!", "Estrela cadente de acertos!", "Missão cumprida, astronauta!"],
    pipIncentivos: ["Recalcula a rota e bora de novo.", "Todo astronauta treina muito antes de decolar."],
  },
  princesas: {
    id: "princesas",
    label: "Princesas e Castelo",
    emoji: "👑",
    elementos: ["Princesa", "Castelo", "Coroa", "Unicórnio", "Fada"],
    som: "Pling! (varinha mágica)",
    formaPontilhado: "uma coroa",
    pipAcertos: ["Coroa brilhando! Acertou!", "Magia perfeita!", "Castelo conquistado!"],
    pipIncentivos: ["Toda princesa treina pra reinar.", "A magia precisa de paciência, tenta de novo."],
  },
  fazendinha: {
    id: "fazendinha",
    label: "Fazendinha",
    emoji: "🐥",
    elementos: ["Galinha", "Vaquinha", "Porquinho", "Cavalo", "Ovelha"],
    som: "Cocoricó!",
    formaPontilhado: "um ovinho",
    pipAcertos: ["Boa! Colheita fresquinha!", "Uhul! O galo cantou de alegria!", "Acertou na palha!"],
    pipIncentivos: ["Calma, tem muita semente pra plantar.", "Na fazenda se aprende devagarinho."],
  },
  bailarinas: {
    id: "bailarinas",
    label: "Bailarinas",
    emoji: "🩰",
    elementos: ["Bailarina", "Sapatilha", "Tutu", "Caixinha de música", "Cisne"],
    som: "Tlim-tlim (caixinha de música)",
    formaPontilhado: "uma sapatilha",
    pipAcertos: ["Pirueta perfeita!", "Boa! Compasso certinho!", "Aplausos pra você!"],
    pipIncentivos: ["Toda bailarina ensaia muito.", "Respira, alonga e tenta de novo."],
  },
  sereias: {
    id: "sereias",
    label: "Sereias",
    emoji: "🧜‍♀️",
    elementos: ["Sereia", "Concha", "Cavalo-marinho", "Peixinho", "Pérola"],
    som: "Splash! (ondinha)",
    formaPontilhado: "uma concha",
    pipAcertos: ["Boa! Tesouro do fundo do mar!", "Mergulhou direto na resposta!", "Pérola perfeita!"],
    pipIncentivos: ["Respira fundo e mergulha de novo.", "O mar é grande, dá pra explorar mais."],
  },
  robos: {
    id: "robos",
    label: "Robôs",
    emoji: "🤖",
    elementos: ["Robô", "Engrenagem", "Foguete-robô", "Drone", "Astronauta-bot"],
    som: "Bip-bop! (robótico)",
    formaPontilhado: "uma engrenagem",
    pipAcertos: ["Bip-bop! Resposta processada com sucesso!", "Circuito ativado, ponto garantido!", "Sistema 100%!"],
    pipIncentivos: ["Reiniciando… bora tentar de novo.", "Todo robô precisa de update."],
  },
  musica: {
    id: "musica",
    label: "Música",
    emoji: "🎵",
    elementos: ["Violão", "Microfone", "Bateria", "Piano", "Nota musical"],
    som: "Lá-lá-lá! (melodia)",
    formaPontilhado: "uma nota musical",
    pipAcertos: ["Afinado! Acerto musical!", "Boa! Tocou na nota certa!", "Bis! Bis!"],
    pipIncentivos: ["Toda música tem ensaio.", "Respira no compasso e tenta de novo."],
  },
  arte: {
    id: "arte",
    label: "Arte",
    emoji: "🎨",
    elementos: ["Pincel", "Tinta", "Cavalete", "Lápis de cor", "Paleta"],
    som: "Suuish! (pincelada)",
    formaPontilhado: "uma paleta",
    pipAcertos: ["Obra de arte!", "Boa! Pintou com talento!", "Uhul! Quadro pronto!"],
    pipIncentivos: ["Todo artista rascunha antes.", "Mistura mais uma cor e tenta de novo."],
  },
  trens: {
    id: "trens",
    label: "Trens",
    emoji: "🚂",
    elementos: ["Locomotiva", "Vagão", "Trilho", "Estação", "Maquinista"],
    som: "Piuíí! (apito)",
    formaPontilhado: "um vagão",
    pipAcertos: ["Piuíí! Trem direto na resposta!", "Boa! Vagão engatado!", "Uhul! Próxima estação: acerto!"],
    pipIncentivos: ["Diminui a velocidade e tenta de novo.", "Todo trem para pra abastecer."],
  },
  nenhum: {
    id: "nenhum",
    label: "Sem Hiperfoco",
    emoji: "✨",
    elementos: ["Estrela", "Unicórnio", "Coruja"],
    som: "plim! (brilho)",
    formaPontilhado: "uma estrela",
    pipAcertos: ["Boa! Você é brilhante!", "Mandou muito bem!", "Incrível! Continue assim!"],
    pipIncentivos: ["Tudo bem! Vamos brilhar na próxima.", "O aprendizado é uma jornada linda!"],
  },
};

export const HIPERFOCO_LIST: Hiperfoco[] = Object.values(HIPERFOCOS);

/** Retorna um elemento "estável" para um determinado seed (id da variação). */
export function pickElemento(h: Hiperfoco, seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  const idx = Math.abs(hash) % h.elementos.length;
  return h.elementos[idx];
}

/** Substitui {elemento_hiperfoco} / {hiperfoco} / {som_hiperfoco} em qualquer string. */
export function applyHiperfoco(text: string, h: Hiperfoco | null, seed = "default"): string {
  if (!text || !h) return text;
  const elem = pickElemento(h, seed);
  return text
    .replace(/\{elemento_hiperfoco\}/g, elem)
    .replace(/\{hiperfoco\}/g, h.label)
    .replace(/\{som_hiperfoco\}/g, h.som)
    .replace(/\{forma_hiperfoco\}/g, h.formaPontilhado);
}

export function pipFraseAcerto(h: Hiperfoco | null): string {
  if (!h) return "Boa! Mandou muito bem!";
  return h.pipAcertos[Math.floor(Math.random() * h.pipAcertos.length)];
}

export function pipFraseIncentivo(h: Hiperfoco | null): string {
  if (!h) return "Tudo bem, vamos tentar de novo!";
  return h.pipIncentivos[Math.floor(Math.random() * h.pipIncentivos.length)];
}
