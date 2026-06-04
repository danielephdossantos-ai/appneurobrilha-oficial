// Sistema de Hiperfoco Dinâmico — temas que adaptam textos, sons e estímulos.
// Cada hiperfoco fornece elementos para substituir {elemento_hiperfoco} e {hiperfoco}
// nas instruções/payloads, além de frases contextualizadas da LUMI.

export type HiperfocoId =
  | "minecraft"
  | "dinossauros"
  | "herois"
  | "animais"
  | "carros"
  | "nenhum"
  | "custom";

export interface Hiperfoco {
  id: HiperfocoId;
  label: string;
  emoji: string;
  /** Personagens/elementos típicos do tema (substituem {elemento_hiperfoco}). */
  elementos: string[];
  /** Som/onomatopeia característica (Fono & Onomatopeia / Motorzinho). */
  som: string;
  /** Forma sugerida para coordenação/pontilhado. */
  formaPontilhado: string;
  /** Frases da LUMI quando a criança acerta. */
  lumiAcertos: string[];
  /** Frases da LUMI de incentivo após erro. */
  lumiIncentivos: string[];
}

export const HIPERFOCOS: Record<Exclude<HiperfocoId, "custom">, Hiperfoco> = {
  minecraft: {
    id: "minecraft",
    label: "Minecraft",
    emoji: "🟩",
    elementos: ["Steve", "Alex", "Creeper", "Aldeão", "Lhama", "Galinha"],
    som: "tlec! tlec! (blocos quebrando)",
    formaPontilhado: "um bloco quadradinho",
    lumiAcertos: [
      "Boa! Você minerou a resposta certa! ⛏️",
      "Mandou bem! Bloco encaixado perfeitamente! 🟩",
      "Uhul! Crafting concluído! ✨",
    ],
    lumiIncentivos: [
      "Quase! Bora pegar mais um bloco e tentar de novo. 🟫",
      "Tranquilo! Todo construtor precisa de respiro. 🛠️",
    ],
  },
  dinossauros: {
    id: "dinossauros",
    label: "Dinossauros",
    emoji: "🦖",
    elementos: ["Tricerátops", "T-Rex", "Estegossauro", "Braquiossauro", "Velociraptor"],
    som: "Roaaar! (rugido)",
    formaPontilhado: "um ovo de dinossauro",
    lumiAcertos: [
      "Rooar! Você é fera igual um T-Rex! 🦖",
      "Boa! Caçada perfeita! 🦴",
      "Uhu! Descobriu o fóssil certinho! 🥚",
    ],
    lumiIncentivos: [
      "Calma, paleontólogo! Bora escavar de novo. ⛏️",
      "Errar é parte da aventura jurássica! 🌋",
    ],
  },
  herois: {
    id: "herois",
    label: "Heróis",
    emoji: "🦸",
    elementos: ["Super-Herói", "Heroína", "Robô-amigo", "Capitã", "Justiceiro"],
    som: "Pow! Zap! (super-poder)",
    formaPontilhado: "uma capa de herói",
    lumiAcertos: [
      "Pow! Super-acerto desbloqueado! 🦸",
      "Boa! Seu poder está crescendo! ⚡",
      "Salvou o dia! 🏆",
    ],
    lumiIncentivos: [
      "Todo herói treina! Bora de novo. 💪",
      "Respira, recarrega o poder e tenta outra vez. ✨",
    ],
  },
  animais: {
    id: "animais",
    label: "Animais",
    emoji: "🐾",
    elementos: ["Leão", "Elefante", "Macaco", "Tartaruga", "Coruja"],
    som: "som do animal escolhido",
    formaPontilhado: "uma patinha",
    lumiAcertos: [
      "Boa! Faro de leão! 🦁",
      "Uhu! Sabidíssimo como uma coruja! 🦉",
      "Acertou na mosca! 🐾",
    ],
    lumiIncentivos: [
      "Calma como a tartaruga, bora de novo. 🐢",
      "Cada bichinho aprende no seu tempo. 🐣",
    ],
  },
  carros: {
    id: "carros",
    label: "Carros e Automotores",
    emoji: "🚗",
    elementos: ["Carro de corrida", "Caminhão", "Moto", "Trator", "Trem"],
    som: "Vrum vrum! (motor)",
    formaPontilhado: "um carrinho",
    lumiAcertos: [
      "Vrum! Acelerou direto pra resposta certa! 🏁",
      "Boa! Pista limpa, ponto garantido! 🚗",
      "Uhul! Pole position! 🏆",
    ],
    lumiIncentivos: [
      "Reduz a marcha e tenta de novo. 🛞",
      "Pit stop rápido e voltamos pra pista! 🔧",
    ],
  },
  nenhum: {
    id: "nenhum",
    label: "Sem Hiperfoco",
    emoji: "✨",
    elementos: ["LUMI", "Estrela", "Coração"],
    som: "plim! (brilho)",
    formaPontilhado: "uma estrela",
    lumiAcertos: [
      "Boa! Você é brilhante! ⭐",
      "Mandou muito bem! ✨",
      "Incrível! Continue assim! 🏆",
    ],
    lumiIncentivos: [
      "Tudo bem! Vamos brilhar na próxima. 💫",
      "O aprendizado é uma jornada linda! 🌈",
    ],
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

export function lumiFraseAcerto(h: Hiperfoco | null): string {
  if (!h) return "Boa! Mandou muito bem! ⭐";
  return h.lumiAcertos[Math.floor(Math.random() * h.lumiAcertos.length)];
}

export function lumiFraseIncentivo(h: Hiperfoco | null): string {
  if (!h) return "Tudo bem, vamos tentar de novo! 💪";
  return h.lumiIncentivos[Math.floor(Math.random() * h.lumiIncentivos.length)];
}