// ============================================================
// VARIAÇÕES ESTENDIDAS — Consultório NeuroBrilha
// 4 grupos clínicos × 30 variações por categoria
// ============================================================

export type Variation = { id: string; payload: any };
const range = (n: number) => Array.from({ length: n }, (_, i) => i);

// ──────────────────────────────────────────────
// GRUPO 1: FONO CLÍNICO (4 categorias)
// ──────────────────────────────────────────────

// F1. DISCRIMINAÇÃO AUDITIVA — par mínimo: duas palavras parecidas, escolher a certa
const DISCR_BANK = [
  { pista: "Gato", par1: "GATO", par2: "PATO", correta: "GATO", emoji1: "🐱", emoji2: "🦆" },
  { pista: "Pato", par1: "PATO", par2: "RATO", correta: "PATO", emoji1: "🦆", emoji2: "🐭" },
  { pista: "Rato", par1: "RATO", par2: "GATO", correta: "RATO", emoji1: "🐭", emoji2: "🐱" },
  { pista: "Bola", par1: "BOLA", par2: "BOLO", correta: "BOLA", emoji1: "⚽", emoji2: "🎂" },
  { pista: "Bolo", par1: "BOLO", par2: "BOLA", correta: "BOLO", emoji1: "🎂", emoji2: "⚽" },
  { pista: "Vaca", par1: "VACA", par2: "CASA", correta: "VACA", emoji1: "🐮", emoji2: "🏠" },
  { pista: "Casa", par1: "CASA", par2: "VACA", correta: "CASA", emoji1: "🏠", emoji2: "🐮" },
  { pista: "Sol", par1: "SOL", par2: "LUA", correta: "SOL", emoji1: "☀️", emoji2: "🌙" },
  { pista: "Lua", par1: "LUA", par2: "SOL", correta: "LUA", emoji1: "🌙", emoji2: "☀️" },
  { pista: "Galo", par1: "GALO", par2: "GATO", correta: "GALO", emoji1: "🐓", emoji2: "🐱" },
  { pista: "Sapo", par1: "SAPO", par2: "PEIXE", correta: "SAPO", emoji1: "🐸", emoji2: "🐟" },
  { pista: "Coelho", par1: "COELHO", par2: "COROA", correta: "COELHO", emoji1: "🐰", emoji2: "👑" },
  { pista: "Carro", par1: "CARRO", par2: "TREM", correta: "CARRO", emoji1: "🚗", emoji2: "🚂" },
  { pista: "Maçã", par1: "MAÇÃ", par2: "BANANA", correta: "MAÇÃ", emoji1: "🍎", emoji2: "🍌" },
  { pista: "Flor", par1: "FLOR", par2: "FOGO", correta: "FLOR", emoji1: "🌸", emoji2: "🔥" },
];

export const DISCRIMINACAO_AUDITIVA_VARS: Variation[] = range(30).map((i) => {
  const b = DISCR_BANK[i % DISCR_BANK.length];
  return {
    id: `da-${i + 1}`,
    payload: { ...b, ordem: i % 2 === 0 ? [b.par1, b.par2] : [b.par2, b.par1] },
  };
});

// F2. ARTICULAÇÃO DE SONS — vê imagem+palavra, seleciona sílaba por sílaba para articular
const ARTIC_BANK = [
  { palavra: "RATO", silabas: ["RA", "TO"], emoji: "🐭", fonema: "R" },
  { palavra: "CARRO", silabas: ["CAR", "RO"], emoji: "🚗", fonema: "R" },
  { palavra: "FLOR", silabas: ["FLOR"], emoji: "🌸", fonema: "R" },
  { palavra: "RAPOSA", silabas: ["RA", "PO", "SA"], emoji: "🦊", fonema: "R" },
  { palavra: "SAPO", silabas: ["SA", "PO"], emoji: "🐸", fonema: "S" },
  { palavra: "SOL", silabas: ["SOL"], emoji: "☀️", fonema: "S" },
  { palavra: "LEÃO", silabas: ["LE", "ÃO"], emoji: "🦁", fonema: "L" },
  { palavra: "BOLA", silabas: ["BO", "LA"], emoji: "⚽", fonema: "L" },
  { palavra: "LUA", silabas: ["LU", "A"], emoji: "🌙", fonema: "L" },
  { palavra: "FADA", silabas: ["FA", "DA"], emoji: "🧚", fonema: "F" },
  { palavra: "FOGO", silabas: ["FO", "GO"], emoji: "🔥", fonema: "F" },
  { palavra: "VACA", silabas: ["VA", "CA"], emoji: "🐮", fonema: "V" },
  { palavra: "GATO", silabas: ["GA", "TO"], emoji: "🐱", fonema: "G" },
  { palavra: "PATO", silabas: ["PA", "TO"], emoji: "🦆", fonema: "P" },
  { palavra: "BOLO", silabas: ["BO", "LO"], emoji: "🎂", fonema: "B" },
  { palavra: "CASA", silabas: ["CA", "SA"], emoji: "🏠", fonema: "C" },
  { palavra: "MAÇÃ", silabas: ["MA", "ÇÃ"], emoji: "🍎", fonema: "M" },
  { palavra: "BANANA", silabas: ["BA", "NA", "NA"], emoji: "🍌", fonema: "B" },
  { palavra: "PEIXE", silabas: ["PEI", "XE"], emoji: "🐟", fonema: "X" },
  { palavra: "TIGRE", silabas: ["TI", "GRE"], emoji: "🐯", fonema: "T" },
  { palavra: "COELHO", silabas: ["CO", "E", "LHO"], emoji: "🐰", fonema: "LH" },
  { palavra: "PORCO", silabas: ["POR", "CO"], emoji: "🐷", fonema: "P" },
  { palavra: "GALINHA", silabas: ["GA", "LI", "NHA"], emoji: "🐔", fonema: "NH" },
  { palavra: "CAVALO", silabas: ["CA", "VA", "LO"], emoji: "🐴", fonema: "V" },
  { palavra: "ABELHA", silabas: ["A", "BE", "LHA"], emoji: "🐝", fonema: "LH" },
  { palavra: "BORBOLETA", silabas: ["BOR", "BO", "LE", "TA"], emoji: "🦋", fonema: "B" },
  { palavra: "CORUJA", silabas: ["CO", "RU", "JA"], emoji: "🦉", fonema: "J" },
];

export const ARTICULACAO_SONS_VARS: Variation[] = range(30).map((i) => {
  const b = ARTIC_BANK[i % ARTIC_BANK.length];
  const nivelSilaba = i % b.silabas.length;
  return {
    id: `as-${i + 1}`,
    payload: { ...b, silaba_foco: b.silabas[nivelSilaba], nivel: 1 + (i % 3) },
  };
});

// F3. VOCABULÁRIO SEMÂNTICO — qual item NÃO pertence ao grupo?
const VOCAB_BANK = [
  {
    grupo: "Animais 🐾",
    itens: ["🐱 Gato", "🐶 Cachorro", "🐭 Rato", "🍎 Maçã"],
    intruso: "🍎 Maçã",
  },
  {
    grupo: "Frutas 🍎",
    itens: ["🍌 Banana", "🍓 Morango", "🚗 Carro", "🍇 Uva"],
    intruso: "🚗 Carro",
  },
  {
    grupo: "Brinquedos 🧸",
    itens: ["⚽ Bola", "🧸 Ursinho", "🎮 Videogame", "🥕 Cenoura"],
    intruso: "🥕 Cenoura",
  },
  {
    grupo: "Transportes 🚗",
    itens: ["🚂 Trem", "✈️ Avião", "🚲 Bike", "🐮 Vaca"],
    intruso: "🐮 Vaca",
  },
  {
    grupo: "Roupas 👕",
    itens: ["👕 Camiseta", "👖 Calça", "🧦 Meia", "🍕 Pizza"],
    intruso: "🍕 Pizza",
  },
  {
    grupo: "Comidas 🍽️",
    itens: ["🍎 Maçã", "🥕 Cenoura", "🍞 Pão", "🚀 Foguete"],
    intruso: "🚀 Foguete",
  },
  {
    grupo: "Móveis 🛋️",
    itens: ["🛋️ Sofá", "🛏️ Cama", "🪑 Cadeira", "🐠 Peixe"],
    intruso: "🐠 Peixe",
  },
  {
    grupo: "Instrumentos 🎵",
    itens: ["🎸 Guitarra", "🥁 Bateria", "🎹 Piano", "🔨 Martelo"],
    intruso: "🔨 Martelo",
  },
  {
    grupo: "Cores ❤️",
    itens: ["🔴 Vermelho", "🔵 Azul", "🟢 Verde", "🥛 Leite"],
    intruso: "🥛 Leite",
  },
  {
    grupo: "Escola 📚",
    itens: ["📚 Livro", "✏️ Lápis", "📏 Régua", "🦁 Leão"],
    intruso: "🦁 Leão",
  },
  {
    grupo: "Esportes ⚽",
    itens: ["⚽ Futebol", "🏀 Basquete", "🎾 Tênis", "🎂 Bolo"],
    intruso: "🎂 Bolo",
  },
  {
    grupo: "Flores 🌸",
    itens: ["🌸 Sakura", "🌻 Girassol", "🌹 Rosa", "🚁 Helicóptero"],
    intruso: "🚁 Helicóptero",
  },
  {
    grupo: "Oceano 🌊",
    itens: ["🐬 Golfinho", "🦈 Tubarão", "🐙 Polvo", "🦅 Águia"],
    intruso: "🦅 Águia",
  },
  {
    grupo: "Profissões 👨‍⚕️",
    itens: ["👨‍⚕️ Médico", "👩‍🏫 Professora", "👮 Policial", "🌵 Cacto"],
    intruso: "🌵 Cacto",
  },
  {
    grupo: "Planetas 🪐",
    itens: ["🌍 Terra", "🌕 Lua", "🪐 Saturno", "🐧 Pinguim"],
    intruso: "🐧 Pinguim",
  },
];
export const VOCABULARIO_SEMANTICO_VARS: Variation[] = range(30).map((i) => {
  const b = VOCAB_BANK[i % VOCAB_BANK.length];
  const shuffled = [...b.itens].sort(() => (i % 2 ? -1 : 1));
  return { id: `vs-${i + 1}`, payload: { grupo: b.grupo, itens: shuffled, intruso: b.intruso } };
});

// F4. NOMEAÇÃO RÁPIDA — flash de figura, 4 opções de nome, clique rápido (RAN simplificado)
// Apenas itens com IMAGEM garantida em OBJETO_IMG/EMOJI_IMG — palavras simples e concretas
const NOMEACAO_BANK = [
  { emoji: "🐱", nome: "GATO", outros: ["RATO", "CACHORRO", "COELHO"] },
  { emoji: "🚗", nome: "CARRO", outros: ["MOTO", "ÔNIBUS", "TREM"] },
  { emoji: "🍎", nome: "MAÇÃ", outros: ["BANANA", "MORANGO", "UVA"] },
  { emoji: "🌙", nome: "LUA", outros: ["SOL", "ESTRELA", "CHUVA"] },
  { emoji: "⚽", nome: "BOLA", outros: ["CARRO", "CASA", "FLOR"] },
  { emoji: "🏠", nome: "CASA", outros: ["CASTELO", "ÁRVORE", "CARRO"] },
  { emoji: "🌸", nome: "FLOR", outros: ["ÁRVORE", "ABELHA", "BORBOLETA"] },
  { emoji: "🐶", nome: "CACHORRO", outros: ["GATO", "RAPOSA", "URSO"] },
  { emoji: "🍌", nome: "BANANA", outros: ["MAÇÃ", "MORANGO", "UVA"] },
  { emoji: "🦋", nome: "BORBOLETA", outros: ["ABELHA", "SAPO", "PEIXE"] },
  { emoji: "👑", nome: "COROA", outros: ["CASTELO", "PRINCESA", "FADA"] },
  { emoji: "🦁", nome: "LEÃO", outros: ["TIGRE", "MACACO", "ELEFANTE"] },
  { emoji: "🚂", nome: "TREM", outros: ["CARRO", "MOTO", "ÔNIBUS"] },
  { emoji: "🦅", nome: "PÁSSARO", outros: ["CORUJA", "PATO", "GALINHA"] },
  { emoji: "🐮", nome: "VACA", outros: ["PORCO", "OVELHA", "CAVALO"] },
  { emoji: "🐸", nome: "SAPO", outros: ["PEIXE", "TARTARUGA", "RATO"] },
  { emoji: "🦖", nome: "DINOSSAURO", outros: ["TIGRE", "LEÃO", "ELEFANTE"] },
  { emoji: "🌳", nome: "ÁRVORE", outros: ["FLOR", "CASA", "SOL"] },
  { emoji: "☀️", nome: "SOL", outros: ["LUA", "ESTRELA", "CHUVA"] },
  { emoji: "🐰", nome: "COELHO", outros: ["GATO", "RAPOSA", "URSO"] },
];
export const NOMEACAO_RAPIDA_VARS: Variation[] = range(30).map((i) => {
  const b = NOMEACAO_BANK[i % NOMEACAO_BANK.length];
  const opts = [b.nome, ...b.outros].sort(() => (i % 2 ? -1 : 1));
  const flashMs = Math.max(700, 1400 - i * 20);
  return { id: `nr-${i + 1}`, payload: { emoji: b.emoji, nome: b.nome, opts, flashMs } };
});

// ──────────────────────────────────────────────
// GRUPO 2: COORDENAÇÃO MOTORA (4 categorias)
// ──────────────────────────────────────────────

// C1. TOQUE EM SEQUÊNCIA — só números (até 100) e alfabeto (começa com vogais)
type TSNivel = {
  nome: string;
  tipo: "numero" | "letra";
  bg: "ceu" | "grama" | "selva" | "espaco" | "fazenda" | "oceano";
  itens: string[]; // já em ordem correta de toque
};

const NUM_RANGES: Array<{ ate: number; bg: TSNivel["bg"]; qtd: number }> = [
  { ate: 5, bg: "ceu", qtd: 5 },
  { ate: 10, bg: "grama", qtd: 6 },
  { ate: 15, bg: "fazenda", qtd: 7 },
  { ate: 20, bg: "oceano", qtd: 8 },
  { ate: 30, bg: "selva", qtd: 8 },
  { ate: 50, bg: "espaco", qtd: 10 },
  { ate: 75, bg: "ceu", qtd: 10 },
  { ate: 100, bg: "espaco", qtd: 10 },
];

const ALFA_NIVEIS: Array<{ letras: string[]; bg: TSNivel["bg"] }> = [
  { letras: ["A", "E", "I", "O", "U"], bg: "ceu" },
  { letras: ["A", "E", "I", "O", "U", "B", "C", "D"], bg: "grama" },
  { letras: ["A", "E", "I", "O", "U", "B", "C", "D", "F", "G"], bg: "fazenda" },
  { letras: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"], bg: "oceano" },
  {
    letras: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"],
    bg: "selva",
  },
  {
    letras: [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
      "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    ],
    bg: "espaco",
  },
];

const TS_NIVEIS: TSNivel[] = [];

// Números: amostra ordenada do intervalo, sempre incluindo 1 e o teto
NUM_RANGES.forEach((r, idx) => {
  const seed = (idx + 1) * 17;
  const todos = Array.from({ length: r.ate }, (_, k) => k + 1);
  let escolhidos: number[];
  if (todos.length <= r.qtd) {
    escolhidos = todos;
  } else {
    const set = new Set<number>([1, r.ate]);
    let s = seed;
    while (set.size < r.qtd) {
      s = (s * 9301 + 49297) % 233280;
      set.add(1 + (s % r.ate));
    }
    escolhidos = [...set].sort((a, b) => a - b);
  }
  TS_NIVEIS.push({
    nome: `Números 1 até ${r.ate}`,
    tipo: "numero",
    bg: r.bg,
    itens: escolhidos.map(String),
  });
});

// Letras: amostra ordenada (alfabética) do conjunto
ALFA_NIVEIS.forEach((n, idx) => {
  const maxNaTela = 12;
  let escolhidos: string[];
  if (n.letras.length <= maxNaTela) {
    escolhidos = [...n.letras];
  } else {
    const set = new Set<string>([n.letras[0], n.letras[n.letras.length - 1]]);
    let s = (idx + 1) * 31;
    while (set.size < maxNaTela) {
      s = (s * 9301 + 49297) % 233280;
      set.add(n.letras[s % n.letras.length]);
    }
    const ALFA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    escolhidos = [...set].sort((a, b) => ALFA.indexOf(a) - ALFA.indexOf(b));
  }
  TS_NIVEIS.push({
    nome: `Letras ${n.letras[0]}-${n.letras[n.letras.length - 1]}`,
    tipo: "letra",
    bg: n.bg,
    itens: escolhidos,
  });
});

export const TOQUE_SEQUENCIA_VARS: Variation[] = TS_NIVEIS.map((nv, i) => {
  const seed = i + 1;
  const pontos = nv.itens.map((label, k) => ({
    id: `${label}-${k}`,
    label,
    x: 10 + ((k * 19 + seed * 11) % 78),
    y: 12 + ((k * 27 + seed * 9) % 72),
  }));
  return {
    id: `ts-${i + 1}`,
    payload: {
      tipo: nv.tipo,
      bg: nv.bg,
      categoria: nv.nome,
      pontos,
      ordem: pontos.map((p) => p.id),
      tempoLimite: 20 + pontos.length * 4,
    },
  };
});

// C2. RITMO DE BATIDAS — tambor: criança bate N vezes conforme o comando
const RITMO_BANK: number[] = [2, 3, 1, 4, 2, 3, 5, 4, 2, 6];
export const RITMO_BATIDAS_VARS: Variation[] = range(30).map((i) => {
  const batidas = RITMO_BANK[i % RITMO_BANK.length];
  return {
    id: `rb-${i + 1}`,
    payload: { batidas, comando: `Bata ${batidas} ${batidas === 1 ? "vez" : "vezes"}!` },
  };
});

// C3. COPIAR FIGURA — criança desenha por cima da figura (tracing com o dedo)
const COPIAR_FIG_BANK = [
  { emoji: "⭐", nome: "ESTRELA", cor: "#facc15" },
  { emoji: "❤️", nome: "CORAÇÃO", cor: "#ef4444" },
  { emoji: "🌙", nome: "LUA", cor: "#fbbf24" },
  { emoji: "☀️", nome: "SOL", cor: "#f59e0b" },
  { emoji: "🍎", nome: "MAÇÃ", cor: "#ef4444" },
  { emoji: "🌳", nome: "ÁRVORE", cor: "#16a34a" },
  { emoji: "🏠", nome: "CASA", cor: "#f97316" },
  { emoji: "🐱", nome: "GATO", cor: "#a855f7" },
  { emoji: "🐶", nome: "CACHORRO", cor: "#7c3aed" },
  { emoji: "🐟", nome: "PEIXE", cor: "#06b6d4" },
  { emoji: "🦋", nome: "BORBOLETA", cor: "#ec4899" },
  { emoji: "🌸", nome: "FLOR", cor: "#f472b6" },
  { emoji: "🐝", nome: "ABELHA", cor: "#eab308" },
  { emoji: "🐢", nome: "TARTARUGA", cor: "#22c55e" },
  { emoji: "🚗", nome: "CARRO", cor: "#3b82f6" },
];
export const COPIAR_FIGURA_VARS: Variation[] = range(30).map((i) => {
  const f = COPIAR_FIG_BANK[i % COPIAR_FIG_BANK.length];
  return { id: `cf-${i + 1}`, payload: { ...f } };
});

// C4. ALVO MÓVEL — círculo move pela tela, toca nele antes de sair
const TEMAS_ALVO = [
  { emoji: "⭐", cor: "#facc15" },
  { emoji: "❤️", cor: "#ef4444" },
  { emoji: "💎", cor: "#3b82f6" },
  { emoji: "🌟", cor: "#f59e0b" },
  { emoji: "🍀", cor: "#22c55e" },
];
export const ALVO_MOVEL_VARS: Variation[] = range(30).map((i) => {
  const t = TEMAS_ALVO[i % TEMAS_ALVO.length];
  const velocidade = 0.4 + (i % 6) * 0.1; // bem mais lento (0.4 → 0.9)
  const rounds = 3 + (i % 4);
  return { id: `am-${i + 1}`, payload: { ...t, velocidade, rounds, tempoMs: 6000 - i * 40 } };
});

// ──────────────────────────────────────────────
// GRUPO 3: ATENÇÃO & CONCENTRAÇÃO (4 categorias)
// ──────────────────────────────────────────────

// A1. ACHAR O DIFERENTE — grade de emojis, um é diferente dos demais
const DIFER_BANK = [
  { maioria: "🔵", diferente: "🔴" },
  { maioria: "⭐", diferente: "🌟" },
  { maioria: "🐱", diferente: "🐶" },
  { maioria: "🍎", diferente: "🍊" },
  { maioria: "🌸", diferente: "🌺" },
  { maioria: "🚗", diferente: "🚙" },
  { maioria: "🟦", diferente: "🟥" },
  { maioria: "🦋", diferente: "🐝" },
  { maioria: "⬆️", diferente: "⬇️" },
  { maioria: "🌙", diferente: "☀️" },
];
export const ACHAR_DIFERENTE_VARS: Variation[] = range(30).map((i) => {
  const b = DIFER_BANK[i % DIFER_BANK.length];
  const tam = 9 + (i % 4) * 3; // 9..21 células
  const posAlvo = (i * 7) % tam;
  const grid = Array(tam).fill(b.maioria);
  grid[posAlvo] = b.diferente;
  return { id: `ad-${i + 1}`, payload: { ...b, grid, posAlvo, colunas: 3 + (i % 2) } };
});

// A2. MEMÓRIA VISUAL — flash de grade colorida, depois reproduzir
export const MEMORIA_VISUAL_VARS: Variation[] = range(30).map((i) => {
  const cores = ["#ef4444", "#3b82f6", "#22c55e", "#facc15", "#a855f7", "#f97316"];
  const tam = 2 + (i % 3); // grid 2×2, 3×2, 3×3
  const cols = tam,
    rows = Math.ceil(tam * 0.8);
  const grid = range(rows * cols).map((k) => cores[(i * 3 + k) % cores.length]);
  const flashMs = Math.max(800, 2000 - i * 40);
  return { id: `mv-${i + 1}`, payload: { grid, rows, cols, flashMs } };
});

// A3. REAÇÃO RÁPIDA — verde aparece → toca; vermelho aparece → não toca (Go/No-Go)
const GONGO_ICONS = [
  { alvo: "🟢", erro: "🔴" },
  { alvo: "⭐", erro: "❌" },
  { alvo: "🦋", erro: "🐝" },
  { alvo: "💚", erro: "❤️" },
];
export const REACAO_RAPIDA_VARS: Variation[] = range(30).map((i) => {
  const t = GONGO_ICONS[i % GONGO_ICONS.length];
  const rounds = 5 + (i % 5);
  const seq = range(rounds).map((k) => ({
    tipo: (k + i) % 3 === 0 ? "erro" : "alvo",
    emoji: (k + i) % 3 === 0 ? t.erro : t.alvo,
  }));
  const intervaloMs = Math.max(600, 1400 - i * 25);
  return { id: `rr-${i + 1}`, payload: { ...t, seq, intervaloMs } };
});

// A4. SEGUIR INSTRUÇÃO — ler instrução, executar toque no item correto na grade
const INSTRUCAO_BANK = [
  { instrucao: "Toque na FRUTA", itens: ["🍎", "🚗", "🐱", "🌸"], correta: "🍎" },
  { instrucao: "Toque no ANIMAL", itens: ["🏠", "🐶", "⚽", "🌙"], correta: "🐶" },
  { instrucao: "Toque no TRANSPORTE", itens: ["✏️", "🍕", "✈️", "🎸"], correta: "✈️" },
  { instrucao: "Toque na COR AZUL", itens: ["🟥", "🟦", "🟩", "🟨"], correta: "🟦" },
  { instrucao: "Toque no NÚMERO", itens: ["🐱", "3️⃣", "🌸", "🏠"], correta: "3️⃣" },
  { instrucao: "Toque na ROUPA", itens: ["🧦", "🍕", "🚂", "🌙"], correta: "🧦" },
  { instrucao: "Toque no BRINQUEDO", itens: ["🧸", "🥕", "🌊", "📚"], correta: "🧸" },
  { instrucao: "Toque na LETRA", itens: ["⚽", "🐮", "A", "🌸"], correta: "A" },
  { instrucao: "Toque na FLOR", itens: ["🦁", "🌸", "🚗", "💊"], correta: "🌸" },
  { instrucao: "Toque no SOL", itens: ["🌙", "⭐", "☀️", "❄️"], correta: "☀️" },
  { instrucao: "Toque no INSTRUMENTO", itens: ["🎸", "🏀", "🍕", "🐱"], correta: "🎸" },
  { instrucao: "Toque na COMIDA", itens: ["🚂", "🌹", "🍕", "🎈"], correta: "🍕" },
];
export const SEGUIR_INSTRUCAO_VARS: Variation[] = range(30).map((i) => {
  const b = INSTRUCAO_BANK[i % INSTRUCAO_BANK.length];
  const shuffled = [...b.itens].sort(() => (i % 2 ? -1 : 1));
  return {
    id: `si2-${i + 1}`,
    payload: { instrucao: b.instrucao, itens: shuffled, correta: b.correta },
  };
});

// ──────────────────────────────────────────────
// GRUPO 4: ALFABETIZAÇÃO (5 categorias)
// ──────────────────────────────────────────────

// AL1. LETRA-SOM — ouve/lê fonema, escolhe imagem que começa com aquele som
const LETRASSOM_BANK = [
  {
    fonema: "B",
    imagens: [
      { e: "⚽", n: "BOLA" },
      { e: "🐱", n: "GATO" },
      { e: "☀️", n: "SOL" },
      { e: "🌙", n: "LUA" },
    ],
    correta: "BOLA",
  },
  {
    fonema: "C",
    imagens: [
      { e: "🏠", n: "CASA" },
      { e: "🐸", n: "SAPO" },
      { e: "🦆", n: "PATO" },
      { e: "🌸", n: "FLOR" },
    ],
    correta: "CASA",
  },
  {
    fonema: "G",
    imagens: [
      { e: "🐱", n: "GATO" },
      { e: "⚽", n: "BOLA" },
      { e: "🚂", n: "TREM" },
      { e: "🍎", n: "MAÇÃ" },
    ],
    correta: "GATO",
  },
  {
    fonema: "P",
    imagens: [
      { e: "🦆", n: "PATO" },
      { e: "🌙", n: "LUA" },
      { e: "🐱", n: "GATO" },
      { e: "⭐", n: "ESTRELA" },
    ],
    correta: "PATO",
  },
  {
    fonema: "S",
    imagens: [
      { e: "☀️", n: "SOL" },
      { e: "🐶", n: "CACHORRO" },
      { e: "🏠", n: "CASA" },
      { e: "⚽", n: "BOLA" },
    ],
    correta: "SOL",
  },
  {
    fonema: "L",
    imagens: [
      { e: "🌙", n: "LUA" },
      { e: "🚗", n: "CARRO" },
      { e: "🍎", n: "MAÇÃ" },
      { e: "🐸", n: "SAPO" },
    ],
    correta: "LUA",
  },
  {
    fonema: "F",
    imagens: [
      { e: "🌸", n: "FLOR" },
      { e: "⚽", n: "BOLA" },
      { e: "🌙", n: "LUA" },
      { e: "🏠", n: "CASA" },
    ],
    correta: "FLOR",
  },
  {
    fonema: "M",
    imagens: [
      { e: "🍎", n: "MAÇÃ" },
      { e: "🌸", n: "FLOR" },
      { e: "⚽", n: "BOLA" },
      { e: "🚗", n: "CARRO" },
    ],
    correta: "MAÇÃ",
  },
  {
    fonema: "T",
    imagens: [
      { e: "🚂", n: "TREM" },
      { e: "🐶", n: "CACHORRO" },
      { e: "☀️", n: "SOL" },
      { e: "🌸", n: "FLOR" },
    ],
    correta: "TREM",
  },
  {
    fonema: "V",
    imagens: [
      { e: "🐮", n: "VACA" },
      { e: "⭐", n: "ESTRELA" },
      { e: "🍌", n: "BANANA" },
      { e: "🏠", n: "CASA" },
    ],
    correta: "VACA",
  },
  {
    fonema: "D",
    imagens: [
      { e: "👆", n: "DEDO" },
      { e: "🌙", n: "LUA" },
      { e: "⚽", n: "BOLA" },
      { e: "🐱", n: "GATO" },
    ],
    correta: "DEDO",
  },
  {
    fonema: "N",
    imagens: [
      { e: "☁️", n: "NUVEM" },
      { e: "🍎", n: "MAÇÃ" },
      { e: "🚗", n: "CARRO" },
      { e: "🌸", n: "FLOR" },
    ],
    correta: "NUVEM",
  },
  {
    fonema: "R",
    imagens: [
      { e: "🐭", n: "RATO" },
      { e: "🐱", n: "GATO" },
      { e: "🏠", n: "CASA" },
      { e: "☀️", n: "SOL" },
    ],
    correta: "RATO",
  },
  {
    fonema: "J",
    imagens: [
      { e: "🪟", n: "JANELA" },
      { e: "⚽", n: "BOLA" },
      { e: "🐸", n: "SAPO" },
      { e: "🌙", n: "LUA" },
    ],
    correta: "JANELA",
  },
  {
    fonema: "Z",
    imagens: [
      { e: "🦓", n: "ZEBRA" },
      { e: "🍎", n: "MAÇÃ" },
      { e: "🐱", n: "GATO" },
      { e: "🏠", n: "CASA" },
    ],
    correta: "ZEBRA",
  },
];
export const LETRA_SOM_VARS: Variation[] = range(30).map((i) => {
  const b = LETRASSOM_BANK[i % LETRASSOM_BANK.length];
  const shuffled = [...b.imagens].sort(() => (i % 2 ? -1 : 1));
  return {
    id: `ls2-${i + 1}`,
    payload: { fonema: b.fonema, imagens: shuffled, correta: b.correta },
  };
});

// AL2. PALAVRA-IMAGEM — ver imagem, escolher palavra correta entre 4 opções
const PALAVRAIMAGEM_BANK = [
  { emoji: "🐱", correta: "GATO", outras: ["PATO", "RATO", "GADO"] },
  { emoji: "⚽", correta: "BOLA", outras: ["COLA", "BODA", "BALA"] },
  { emoji: "🏠", correta: "CASA", outras: ["CAMA", "CARA", "CAÇA"] },
  { emoji: "🌸", correta: "FLOR", outras: ["FLAUTA", "FAVOR", "FALOR"] },
  { emoji: "🌙", correta: "LUA", outras: ["RUA", "LUA", "LUZ"] },
  { emoji: "🚗", correta: "CARRO", outras: ["BARRO", "GARRO", "FARRO"] },
  { emoji: "🍎", correta: "MAÇÃ", outras: ["MASSA", "MOÇA", "MAÇA"] },
  { emoji: "🐶", correta: "CÃO", outras: ["MÃO", "PÃO", "RÃO"] },
  { emoji: "🌊", correta: "MAR", outras: ["BAR", "FAR", "PAR"] },
  { emoji: "☀️", correta: "SOL", outras: ["MOL", "GOL", "COL"] },
  { emoji: "🍌", correta: "BANANA", outras: ["CABANA", "SAVANA", "CAMPANA"] },
  { emoji: "🦋", correta: "BORBOLETA", outras: ["BOLACHA", "BORRACHA", "BORBULHA"] },
  { emoji: "🐸", correta: "SAPO", outras: ["CAPO", "RAPO", "TAPO"] },
  { emoji: "🚂", correta: "TREM", outras: ["BREM", "FREM", "GREM"] },
  { emoji: "🦆", correta: "PATO", outras: ["GATO", "RATO", "BATO"] },
];
export const PALAVRA_IMAGEM_VARS: Variation[] = range(30).map((i) => {
  const b = PALAVRAIMAGEM_BANK[i % PALAVRAIMAGEM_BANK.length];
  const opts = [b.correta, ...b.outras].sort(() => (i % 2 ? -1 : 1));
  return { id: `pi-${i + 1}`, payload: { emoji: b.emoji, correta: b.correta, opts } };
});

// AL3. FORMANDO PALAVRAS — sílabas embaralhadas, arrastar para ordem correta
const FORMANDO_BANK = [
  { palavra: "BOLA", silabas: ["BO", "LA"] },
  { palavra: "GATO", silabas: ["GA", "TO"] },
  { palavra: "CASA", silabas: ["CA", "SA"] },
  { palavra: "PATO", silabas: ["PA", "TO"] },
  { palavra: "FACA", silabas: ["FA", "CA"] },
  { palavra: "BOLO", silabas: ["BO", "LO"] },
  { palavra: "MALA", silabas: ["MA", "LA"] },
  { palavra: "SALA", silabas: ["SA", "LA"] },
  { palavra: "FADA", silabas: ["FA", "DA"] },
  { palavra: "LUPA", silabas: ["LU", "PA"] },
  { palavra: "BANANA", silabas: ["BA", "NA", "NA"] },
  { palavra: "BONECA", silabas: ["BO", "NE", "CA"] },
  { palavra: "CAVALO", silabas: ["CA", "VA", "LO"] },
  { palavra: "SAPATO", silabas: ["SA", "PA", "TO"] },
  { palavra: "JANELA", silabas: ["JA", "NE", "LA"] },
  { palavra: "BORBOLETA", silabas: ["BOR", "BO", "LE", "TA"] },
  { palavra: "DINOSSAURO", silabas: ["DI", "NOS", "SAU", "RO"] },
  { palavra: "ELEFANTE", silabas: ["E", "LE", "FAN", "TE"] },
  { palavra: "TARTARUGA", silabas: ["TAR", "TA", "RU", "GA"] },
  { palavra: "CHOCOLATE", silabas: ["CHO", "CO", "LA", "TE"] },
];
export const FORMANDO_PALAVRAS_VARS: Variation[] = range(30).map((i) => {
  const b = FORMANDO_BANK[i % FORMANDO_BANK.length];
  const embaralhadas = [...b.silabas].sort(() => ((i * 3 + 1) % 2 ? -1 : 1));
  return { id: `fp-${i + 1}`, payload: { palavra: b.palavra, silabas: b.silabas, embaralhadas } };
});

// AL4. LEITURA DE PALAVRAS — palavra aparece, escolher imagem correspondente
const LEITURA_BANK = [
  { palavra: "GATO", emoji_certo: "🐱", outros: ["🐶", "🐭", "🦁"] },
  { palavra: "BOLA", emoji_certo: "⚽", outros: ["🏀", "🎾", "🏐"] },
  { palavra: "CASA", emoji_certo: "🏠", outros: ["🏢", "⛺", "🏰"] },
  { palavra: "FLOR", emoji_certo: "🌸", outros: ["🌻", "🌹", "🌺"] },
  { palavra: "TREM", emoji_certo: "🚂", outros: ["🚌", "✈️", "🚢"] },
  { palavra: "PATO", emoji_certo: "🦆", outros: ["🐔", "🦅", "🦜"] },
  { palavra: "MAÇÃ", emoji_certo: "🍎", outros: ["🍊", "🍋", "🍇"] },
  { palavra: "SOL", emoji_certo: "☀️", outros: ["🌙", "⭐", "🌈"] },
  { palavra: "CARRO", emoji_certo: "🚗", outros: ["🚙", "🏎️", "🚕"] },
  { palavra: "LEÃO", emoji_certo: "🦁", outros: ["🐯", "🐆", "🦊"] },
  { palavra: "ABELHA", emoji_certo: "🐝", outros: ["🦋", "🐛", "🐞"] },
  { palavra: "SAPO", emoji_certo: "🐸", outros: ["🦎", "🐊", "🐢"] },
  { palavra: "LUA", emoji_certo: "🌙", outros: ["☀️", "⭐", "🌟"] },
  { palavra: "PEIXE", emoji_certo: "🐟", outros: ["🦈", "🐬", "🐙"] },
  { palavra: "BORBOLETA", emoji_certo: "🦋", outros: ["🐝", "🐛", "🐞"] },
];
export const LEITURA_PALAVRAS_VARS: Variation[] = range(30).map((i) => {
  const b = LEITURA_BANK[i % LEITURA_BANK.length];
  const opts = [b.emoji_certo, ...b.outros].sort(() => (i % 2 ? -1 : 1));
  return { id: `lp2-${i + 1}`, payload: { palavra: b.palavra, emoji_certo: b.emoji_certo, opts } };
});

// AL5. COMPLETAR LETRA — palavra com lacuna, escolher letra que falta
const COMPLETAR_BANK = [
  { palavra: "_ATO", letra: "G", outras: ["P", "R", "B"], resultado: "GATO", emoji: "🐱" },
  { palavra: "BO_A", letra: "L", outras: ["N", "R", "D"], resultado: "BOLA", emoji: "⚽" },
  { palavra: "CA_A", letra: "S", outras: ["M", "R", "P"], resultado: "CASA", emoji: "🏠" },
  { palavra: "_LOR", letra: "F", outras: ["C", "B", "P"], resultado: "FLOR", emoji: "🌸" },
  { palavra: "SO_", letra: "L", outras: ["M", "R", "N"], resultado: "SOL", emoji: "☀️" },
  { palavra: "_UEM", letra: "Q", outras: ["R", "S", "T"], resultado: "QUEM", emoji: "🤔" },
  { palavra: "MA_Ã", letra: "Ç", outras: ["S", "T", "R"], resultado: "MAÇÃ", emoji: "🍎" },
  { palavra: "PA_O", letra: "T", outras: ["G", "R", "N"], resultado: "PATO", emoji: "🦆" },
  { palavra: "_UZ", letra: "L", outras: ["M", "R", "N"], resultado: "LUZ", emoji: "💡" },
  { palavra: "CI_U", letra: "C", outras: ["S", "T", "P"], resultado: "CICU", emoji: "🎪" },
  { palavra: "_ANA", letra: "B", outras: ["F", "C", "G"], resultado: "BANA", emoji: "🍌" },
  { palavra: "PE_XE", letra: "I", outras: ["A", "U", "E"], resultado: "PEIXE", emoji: "🐟" },
  { palavra: "CA_RO", letra: "R", outras: ["L", "M", "N"], resultado: "CARRO", emoji: "🚗" },
  { palavra: "T_EM", letra: "R", outras: ["L", "N", "M"], resultado: "TREM", emoji: "🚂" },
  { palavra: "_UA", letra: "L", outras: ["R", "N", "M"], resultado: "LUA", emoji: "🌙" },
];
export const COMPLETAR_LETRA_VARS: Variation[] = range(30).map((i) => {
  const b = COMPLETAR_BANK[i % COMPLETAR_BANK.length];
  const opts = [b.letra, ...b.outras].sort(() => (i % 2 ? -1 : 1));
  return { id: `cl-${i + 1}`, payload: { ...b, opts } };
});
