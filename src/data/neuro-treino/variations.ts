// Banco de variações exclusivas por categoria de Neuro-Treino.
// Regra de ouro: cada categoria tem mecânica única. NÃO repita mecânicas entre categorias.
import {
  DISCRIMINACAO_AUDITIVA_VARS,
  ARTICULACAO_SONS_VARS,
  VOCABULARIO_SEMANTICO_VARS,
  NOMEACAO_RAPIDA_VARS,
  TOQUE_SEQUENCIA_VARS,
  RITMO_BATIDAS_VARS,
  COPIAR_FIGURA_VARS,
  ALVO_MOVEL_VARS,
  ACHAR_DIFERENTE_VARS,
  MEMORIA_VISUAL_VARS,
  REACAO_RAPIDA_VARS,
  SEGUIR_INSTRUCAO_VARS,
  LETRA_SOM_VARS,
  PALAVRA_IMAGEM_VARS,
  FORMANDO_PALAVRAS_VARS,
  LEITURA_PALAVRAS_VARS,
  COMPLETAR_LETRA_VARS,
} from "./variations-extended";

export type CategoriaSlug =
  | "sons-iniciais"
  | "motorzinho-dos-sons"
  | "rimas"
  | "pedacinhos-da-palavra"
  | "consciencia-fonologica"
  | "consciencia-silabica"
  | "compreensao-leitora"
  | "onde-esta"
  | "sequencia-e-padrao"
  | "cade-o-par"
  | "foco-total"
  | "labirinto-do-som"
  | "foco-sustentado"
  | "rastreamento-sacadico"
  | "mosaico-de-formas"
  | "sequencia-de-cores"
  | "simetria"
  | "decoracao-criativa"
  | "onomatopeias-animadas"
  | "ritmo-e-sopro"
  | "paromatopeias-corpo"
  | "tracado-letras"
  | "caminho-dos-pontos"
  | "labirinto-precisao"
  | "triagem-categorias"
  | "expressao-emocao"
  // FONO CLÍNICO
  | "discriminacao-auditiva"
  | "articulacao-sons"
  | "vocabulario-semantico"
  | "nomeacao-rapida"
  // COORDENAÇÃO MOTORA
  | "toque-sequencia"
  | "ritmo-batidas"
  | "copiar-figura"
  | "alvo-movel"
  // ATENÇÃO & CONCENTRAÇÃO
  | "achar-diferente"
  | "memoria-visual"
  | "reacao-rapida"
  | "seguir-instrucao"
  // ALFABETIZAÇÃO
  | "letra-som"
  | "palavra-imagem"
  | "formando-palavras"
  | "leitura-palavras"
  | "completar-letra";

export interface CategoriaMeta {
  slug: CategoriaSlug;
  nome: string;
  emoji: string;
  grupo: string;
  cor: string;
  objetivo: string;
  instrucao: string; // UMA frase clara — sem comandos redundantes
}

export const CATEGORIAS: Record<CategoriaSlug, CategoriaMeta> = {
  "sons-iniciais": {
    slug: "sons-iniciais",
    nome: "Sons Iniciais",
    emoji: "🔤",
    grupo: "Fala e Som",
    cor: "from-coral/25 to-coral/5",
    objetivo: "Identificação do fonema/letra inicial",
    instrucao: "Toque na figura que começa com a letra mostrada.",
  },
  "motorzinho-dos-sons": {
    slug: "motorzinho-dos-sons",
    nome: "Motorzinho dos Sons",
    emoji: "🚂",
    grupo: "Fala e Som",
    cor: "from-coral/25 to-coral/5",
    objetivo: "Prolongamento de fonemas isolados",
    instrucao: "Segure o botão enquanto faz o som da letra até o trenzinho chegar.",
  },
  rimas: {
    slug: "rimas",
    nome: "Rimas",
    emoji: "🎵",
    grupo: "Fala e Som",
    cor: "from-coral/25 to-coral/5",
    objetivo: "Associação por terminação sonora",
    instrucao: "Escolha a palavra que termina com o mesmo som.",
  },
  "pedacinhos-da-palavra": {
    slug: "pedacinhos-da-palavra",
    nome: "Pedacinhos da Palavra",
    emoji: "👏",
    grupo: "Fala e Som",
    cor: "from-coral/25 to-coral/5",
    objetivo: "Contagem silábica interativa",
    instrucao: "Bata palma uma vez para cada pedacinho da palavra.",
  },
  "consciencia-fonologica": {
    slug: "consciencia-fonologica",
    nome: "Consciência Fonológica",
    emoji: "🔤",
    grupo: "Fala e Som",
    cor: "from-coral/25 to-sun/5",
    objetivo: "Habilidades fonológicas: som inicial/final, sílabas, rima e junção",
    instrucao: "Leia a tarefa e toque na figura certa.",
  },
  "consciencia-silabica": {
    slug: "consciencia-silabica",
    nome: "Consciência Silábica",
    emoji: "👐",
    grupo: "Fala e Som",
    cor: "from-coral/25 to-sun/5",
    objetivo: "Contagem, sílaba inicial, sílaba final e formação silábica",
    instrucao: "Leia a tarefa e toque na figura certa.",
  },
  "compreensao-leitora": {
    slug: "compreensao-leitora",
    nome: "Compreensão Leitora",
    emoji: "📖",
    grupo: "Alfabetização",
    cor: "from-amber/25 to-amber/5",
    objetivo: "Perguntas literais, inferenciais e interpretativas adaptadas ao nível",
    instrucao: "Leia o texto e escolha a resposta certa.",
  },

  "onde-esta": {
    slug: "onde-esta",
    nome: "Onde Está",
    emoji: "🔍",
    grupo: "Funções Executivas",
    cor: "from-primary/20 to-primary/5",
    objetivo: "Busca visual ativa com distratores",
    instrucao: "Encontre e toque na figura procurada o mais rápido possível.",
  },
  "sequencia-e-padrao": {
    slug: "sequencia-e-padrao",
    nome: "Sequência e Padrão",
    emoji: "🧩",
    grupo: "Funções Executivas",
    cor: "from-primary/20 to-primary/5",
    objetivo: "Continuação lógica de padrões",
    instrucao: "Toque na peça que continua a sequência.",
  },
  "cade-o-par": {
    slug: "cade-o-par",
    nome: "Cadê o Par",
    emoji: "🃏",
    grupo: "Funções Executivas",
    cor: "from-primary/20 to-primary/5",
    objetivo: "Memória associativa direta",
    instrucao: "Vire duas cartas para encontrar os pares iguais.",
  },
  "foco-total": {
    slug: "foco-total",
    nome: "Foco Total",
    emoji: "🎯",
    grupo: "Funções Executivas",
    cor: "from-primary/20 to-primary/5",
    objetivo: "Controle inibitório (Stroop infantil)",
    instrucao: "Toque na COR da palavra — ignore o que está escrito.",
  },
  "labirinto-do-som": {
    slug: "labirinto-do-som",
    nome: "Labirinto do Som",
    emoji: "🌀",
    grupo: "Funções Executivas",
    cor: "from-primary/20 to-primary/5",
    objetivo: "Caminho guiado por pistas sonoras",
    instrucao: "Siga a direção indicada pela pista sonora para sair do labirinto.",
  },

  "foco-sustentado": {
    slug: "foco-sustentado",
    nome: "Foco Sustentado",
    emoji: "👁️",
    grupo: "Atenção Avançada",
    cor: "from-sky/30 to-sky/5",
    objetivo: "Monitoramento contínuo de alvo",
    instrucao: "Toque SOMENTE quando o alvo aparecer na tela.",
  },
  "rastreamento-sacadico": {
    slug: "rastreamento-sacadico",
    nome: "Rastreamento Sacádico",
    emoji: "⚡",
    grupo: "Atenção Avançada",
    cor: "from-sky/30 to-sky/5",
    objetivo: "Rastreio visual de estímulos rápidos",
    instrucao: "Toque nos pontos na mesma ordem em que piscaram.",
  },

  "mosaico-de-formas": {
    slug: "mosaico-de-formas",
    nome: "Mosaico de Formas",
    emoji: "🔷",
    grupo: "Oficina Criativa",
    cor: "from-lilac/30 to-lilac/5",
    objetivo: "Composição com encaixe geométrico (Tangram)",
    instrucao: "Escolha as formas certas para montar a figura.",
  },
  "sequencia-de-cores": {
    slug: "sequencia-de-cores",
    nome: "Sequência de Cores",
    emoji: "🌈",
    grupo: "Oficina Criativa",
    cor: "from-lilac/30 to-lilac/5",
    objetivo: "Padrão cromático puro",
    instrucao: "Toque na cor que continua a sequência.",
  },
  simetria: {
    slug: "simetria",
    nome: "Simetria",
    emoji: "🦋",
    grupo: "Oficina Criativa",
    cor: "from-lilac/30 to-lilac/5",
    objetivo: "Espelhamento em grade pixelada",
    instrucao: "Pinte o lado direito para espelhar a figura da esquerda.",
  },
  "decoracao-criativa": {
    slug: "decoracao-criativa",
    nome: "Decoração Criativa",
    emoji: "🎨",
    grupo: "Oficina Criativa",
    cor: "from-lilac/30 to-lilac/5",
    objetivo: "Cenário livre com arrastar e soltar",
    instrucao: "Arraste os elementos para decorar o cenário do seu jeito.",
  },

  // Fono & Onomatopeias
  "onomatopeias-animadas": {
    slug: "onomatopeias-animadas",
    nome: "Onomatopeias Animadas",
    emoji: "🐮",
    grupo: "Fono & Onomatopeias",
    cor: "from-sun/25 to-coral/5",
    objetivo: "Associação de som natural ao elemento visual",
    instrucao: "Toque na figura que faz este som.",
  },
  "ritmo-e-sopro": {
    slug: "ritmo-e-sopro",
    nome: "Ritmo e Sopro Visual",
    emoji: "🚂",
    grupo: "Fono & Onomatopeias",
    cor: "from-sun/25 to-coral/5",
    objetivo: "Modulação de voz por pista visual",
    instrucao: "Estique o som conforme a linha cresce.",
  },
  "paromatopeias-corpo": {
    slug: "paromatopeias-corpo",
    nome: "Sons do Corpo",
    emoji: "🤧",
    grupo: "Fono & Onomatopeias",
    cor: "from-sun/25 to-coral/5",
    objetivo: "Reconhecimento de sons corporais e ações",
    instrucao: "Toque na ação que combina com o som.",
  },

  // Coordenação Motor-Escrita
  "tracado-letras": {
    slug: "tracado-letras",
    nome: "Traçado de Letras",
    emoji: "✍️",
    grupo: "Coordenação Motor-Escrita",
    cor: "from-success/25 to-success/5",
    objetivo: "Cobertura de pontilhado com setas direcionais",
    instrucao: "Siga as setas em ordem para cobrir a letra.",
  },
  "caminho-dos-pontos": {
    slug: "caminho-dos-pontos",
    nome: "Caminho dos Pontos",
    emoji: "🔢",
    grupo: "Coordenação Motor-Escrita",
    cor: "from-success/25 to-success/5",
    objetivo: "Unir pontos em sequência para formar figura",
    instrucao: "Toque nos pontos em ordem para revelar a figura.",
  },
  "labirinto-precisao": {
    slug: "labirinto-precisao",
    nome: "Labirinto de Precisão",
    emoji: "🟢",
    grupo: "Coordenação Motor-Escrita",
    cor: "from-success/25 to-success/5",
    objetivo: "Arraste fino sem encostar nas paredes",
    instrucao: "Arraste a bolinha até o final sem tocar as bordas.",
  },

  "triagem-categorias": {
    slug: "triagem-categorias",
    nome: "Triagem de Categorias",
    emoji: "🗂️",
    grupo: "Jogos Clínicos Cognitivos",
    cor: "from-lilac/25 to-primary/5",
    objetivo: "Categorização e flexibilidade cognitiva",
    instrucao: "Arraste cada item para a caixa certa.",
  },
  "expressao-emocao": {
    slug: "expressao-emocao",
    nome: "Expressão e Emoção",
    emoji: "😊",
    grupo: "Jogos Clínicos Cognitivos",
    cor: "from-lilac/25 to-primary/5",
    objetivo: "Pareamento emoção × situação social",
    instrucao: "Escolha o rosto que combina com a cena.",
  },
  // FONO CLÍNICO
  "discriminacao-auditiva": {
    slug: "discriminacao-auditiva",
    nome: "Discriminação Auditiva",
    emoji: "👂",
    grupo: "Fono Clínico",
    cor: "from-rose/25 to-coral/5",
    objetivo: "Diferenciar pares mínimos de palavras",
    instrucao: "Escuta a palavra e toque na figura certa.",
  },
  "articulacao-sons": {
    slug: "articulacao-sons",
    nome: "Articulação de Sons",
    emoji: "🗣️",
    grupo: "Fono Clínico",
    cor: "from-rose/25 to-coral/5",
    objetivo: "Trabalhar articulação de fonemas específicos",
    instrucao: "Repita a sílaba em destaque olhando para a figura.",
  },
  "vocabulario-semantico": {
    slug: "vocabulario-semantico",
    nome: "Vocabulário Semântico",
    emoji: "🧠",
    grupo: "Fono Clínico",
    cor: "from-rose/25 to-coral/5",
    objetivo: "Ampliar vocabulário e categorização semântica",
    instrucao: "Encontre o item que não pertence ao grupo.",
  },
  "nomeacao-rapida": {
    slug: "nomeacao-rapida",
    nome: "Nomeação Rápida",
    emoji: "⚡",
    grupo: "Fono Clínico",
    cor: "from-rose/25 to-coral/5",
    objetivo: "Velocidade de nomeação (RAN simplificado)",
    instrucao: "Veja a figura e toque no nome certo rapidamente!",
  },
  // COORDENAÇÃO MOTORA
  "toque-sequencia": {
    slug: "toque-sequencia",
    nome: "Toque em Sequência",
    emoji: "🎯",
    grupo: "Coordenação Motora",
    cor: "from-emerald/25 to-success/5",
    objetivo: "Sequenciamento motor e planejamento",
    instrucao: "Toque os pontos em ordem do menor para o maior número.",
  },
  "ritmo-batidas": {
    slug: "ritmo-batidas",
    nome: "Ritmo de Batidas",
    emoji: "🥁",
    grupo: "Coordenação Motora",
    cor: "from-emerald/25 to-success/5",
    objetivo: "Coordenação rítmica e memória motora",
    instrucao: "Memorize o padrão de batidas e reproduza.",
  },
  "copiar-figura": {
    slug: "copiar-figura",
    nome: "Copiar Figura",
    emoji: "📐",
    grupo: "Coordenação Motora",
    cor: "from-emerald/25 to-success/5",
    objetivo: "Coordenação visomotora e reprodução espacial",
    instrucao: "Copie a figura na grade do lado direito.",
  },
  "alvo-movel": {
    slug: "alvo-movel",
    nome: "Alvo em Movimento",
    emoji: "🎯",
    grupo: "Coordenação Motora",
    cor: "from-emerald/25 to-success/5",
    objetivo: "Coordenação olho-mão e rastreamento dinâmico",
    instrucao: "Toque no alvo antes que ele desapareça!",
  },
  // ATENÇÃO & CONCENTRAÇÃO
  "achar-diferente": {
    slug: "achar-diferente",
    nome: "Achar o Diferente",
    emoji: "🔍",
    grupo: "Atenção & Concentração",
    cor: "from-violet/25 to-primary/5",
    objetivo: "Atenção seletiva e discriminação visual",
    instrucao: "Encontre o elemento diferente de todos os outros.",
  },
  "memoria-visual": {
    slug: "memoria-visual",
    nome: "Memória Visual",
    emoji: "🧩",
    grupo: "Atenção & Concentração",
    cor: "from-violet/25 to-primary/5",
    objetivo: "Memória de trabalho visual e codificação",
    instrucao: "Memorize o padrão e reproduza depois.",
  },
  "reacao-rapida": {
    slug: "reacao-rapida",
    nome: "Reação Rápida",
    emoji: "⚡",
    grupo: "Atenção & Concentração",
    cor: "from-violet/25 to-primary/5",
    objetivo: "Controle inibitório e tempo de reação (Go/No-Go)",
    instrucao: "Toque SOMENTE no alvo verde — ignore o vermelho!",
  },
  "seguir-instrucao": {
    slug: "seguir-instrucao",
    nome: "Seguir Instrução",
    emoji: "📋",
    grupo: "Atenção & Concentração",
    cor: "from-violet/25 to-primary/5",
    objetivo: "Atenção auditiva e compreensão de comandos",
    instrucao: "Leia a instrução e toque no item correto.",
  },
  // ALFABETIZAÇÃO
  "letra-som": {
    slug: "letra-som",
    nome: "Letra e Som",
    emoji: "🔤",
    grupo: "Alfabetização",
    cor: "from-amber/25 to-sun/5",
    objetivo: "Consciência fonêmica e correspondência letra-som",
    instrucao: "Toque na figura que começa com este som.",
  },
  "palavra-imagem": {
    slug: "palavra-imagem",
    nome: "Palavra e Imagem",
    emoji: "📖",
    grupo: "Alfabetização",
    cor: "from-amber/25 to-sun/5",
    objetivo: "Reconhecimento de palavras e leitura global",
    instrucao: "Veja a figura e escolha a palavra certa.",
  },
  "formando-palavras": {
    slug: "formando-palavras",
    nome: "Formando Palavras",
    emoji: "🔠",
    grupo: "Alfabetização",
    cor: "from-amber/25 to-sun/5",
    objetivo: "Montagem de palavras com sílabas (síntese silábica)",
    instrucao: "Toque nas sílabas na ordem certa para formar a palavra.",
  },
  "leitura-palavras": {
    slug: "leitura-palavras",
    nome: "Leitura de Palavras",
    emoji: "📚",
    grupo: "Alfabetização",
    cor: "from-amber/25 to-sun/5",
    objetivo: "Decodificação e leitura de palavras com imagem",
    instrucao: "Leia a palavra e toque na figura que ela representa.",
  },
  "completar-letra": {
    slug: "completar-letra",
    nome: "Completar a Letra",
    emoji: "✏️",
    grupo: "Alfabetização",
    cor: "from-amber/25 to-sun/5",
    objetivo: "Análise fonêmica e escrita de palavras",
    instrucao: "Toque na letra que falta para completar a palavra.",
  },
};

// ===================== Variações (30 por categoria) =====================

export type Variation = { id: string; payload: any };

// Helpers
const range = (n: number) => Array.from({ length: n }, (_, i) => i);
const pick = <T>(arr: T[], i: number) => arr[i % arr.length];

// 1. SONS INICIAIS
const SONS_BANK = [
  {
    letra: "B",
    correta: { emoji: "⚽", nome: "BOLA" },
    distratoras: [
      { emoji: "🐱", nome: "GATO" },
      { emoji: "🍎", nome: "MAÇÃ" },
      { emoji: "🌳", nome: "ÁRVORE" },
    ],
  },
  {
    letra: "C",
    correta: { emoji: "🏠", nome: "CASA" },
    distratoras: [
      { emoji: "🐝", nome: "ABELHA" },
      { emoji: "🌸", nome: "FLOR" },
      { emoji: "🚗", nome: "OUTRO" },
    ],
  },
  {
    letra: "G",
    correta: { emoji: "🐱", nome: "GATO" },
    distratoras: [
      { emoji: "🍎", nome: "MAÇÃ" },
      { emoji: "🚂", nome: "TREM" },
      { emoji: "🦆", nome: "PATO" },
    ],
  },
  {
    letra: "P",
    correta: { emoji: "🦆", nome: "PATO" },
    distratoras: [
      { emoji: "🐶", nome: "DOG" },
      { emoji: "🌙", nome: "LUA" },
      { emoji: "⚽", nome: "BOLA" },
    ],
  },
  {
    letra: "S",
    correta: { emoji: "☀️", nome: "SOL" },
    distratoras: [
      { emoji: "🌧️", nome: "CHUVA" },
      { emoji: "🐶", nome: "CACHORRO" },
      { emoji: "🐝", nome: "ABELHA" },
    ],
  },
  {
    letra: "L",
    correta: { emoji: "🌙", nome: "LUA" },
    distratoras: [
      { emoji: "⭐", nome: "ESTRELA" },
      { emoji: "🍎", nome: "MAÇÃ" },
      { emoji: "🐱", nome: "GATO" },
    ],
  },
  {
    letra: "F",
    correta: { emoji: "🌸", nome: "FLOR" },
    distratoras: [
      { emoji: "⚽", nome: "BOLA" },
      { emoji: "🚗", nome: "CARRO" },
      { emoji: "🍎", nome: "MAÇÃ" },
    ],
  },
  {
    letra: "M",
    correta: { emoji: "🍎", nome: "MAÇÃ" },
    distratoras: [
      { emoji: "🏠", nome: "CASA" },
      { emoji: "🐱", nome: "GATO" },
      { emoji: "⚽", nome: "BOLA" },
    ],
  },
  {
    letra: "T",
    correta: { emoji: "🚂", nome: "TREM" },
    distratoras: [
      { emoji: "🐶", nome: "DOG" },
      { emoji: "🌸", nome: "FLOR" },
      { emoji: "☀️", nome: "SOL" },
    ],
  },
  {
    letra: "R",
    correta: { emoji: "🐀", nome: "RATO" },
    distratoras: [
      { emoji: "⭐", nome: "ESTRELA" },
      { emoji: "🍌", nome: "BANANA" },
      { emoji: "🏠", nome: "CASA" },
    ],
  },
];
const SONS_INICIAIS_VARS: Variation[] = range(30).map((i) => {
  const base = SONS_BANK[i % SONS_BANK.length];
  const options = [base.correta, ...base.distratoras].sort(() => (i % 2 === 0 ? -1 : 1));
  return {
    id: `si-${i + 1}`,
    payload: { letra: base.letra, options, correctName: base.correta.nome },
  };
});

// 2. MOTORZINHO DOS SONS — exercício fonoaudiológico clínico real
// Cada variação tem 4 versões temáticas (geral/minecraft/dinossauros/herois)
// com os campos clínicos: letra_fonema, texto_prolongado, palavra_alvo, imagem_url_ou_emoji, tag_hiperfoco.
export type MotorzinhoTag = "geral" | "minecraft" | "dinossauros" | "herois";
export interface MotorzinhoItem {
  letra_fonema: string;
  texto_prolongado: string;
  palavra_alvo: string;
  imagem_url_ou_emoji: string;
  tag_hiperfoco: MotorzinhoTag;
}

const repete = (l: string) =>
  `${l} ${l.toLowerCase()} ${l.toLowerCase()} ${l.toLowerCase()} ${l.toLowerCase()}`;

export const MOTORZINHO_BANK: Record<MotorzinhoTag, MotorzinhoItem[]> = {
  geral: [
    {
      letra_fonema: "V",
      texto_prolongado: repete("V"),
      palavra_alvo: "VACA",
      imagem_url_ou_emoji: "🐮",
      tag_hiperfoco: "geral",
    },
    {
      letra_fonema: "P",
      texto_prolongado: repete("P"),
      palavra_alvo: "PRINCESA",
      imagem_url_ou_emoji: "👸",
      tag_hiperfoco: "geral",
    },
    {
      letra_fonema: "S",
      texto_prolongado: repete("S"),
      palavra_alvo: "SAPO",
      imagem_url_ou_emoji: "🐸",
      tag_hiperfoco: "geral",
    },
    {
      letra_fonema: "F",
      texto_prolongado: repete("F"),
      palavra_alvo: "FOGO",
      imagem_url_ou_emoji: "🔥",
      tag_hiperfoco: "geral",
    },
    {
      letra_fonema: "B",
      texto_prolongado: repete("B"),
      palavra_alvo: "BOLA",
      imagem_url_ou_emoji: "⚽",
      tag_hiperfoco: "geral",
    },
    {
      letra_fonema: "M",
      texto_prolongado: repete("M"),
      palavra_alvo: "MAÇÃ",
      imagem_url_ou_emoji: "🍎",
      tag_hiperfoco: "geral",
    },
    {
      letra_fonema: "L",
      texto_prolongado: repete("L"),
      palavra_alvo: "LUA",
      imagem_url_ou_emoji: "🌙",
      tag_hiperfoco: "geral",
    },
    {
      letra_fonema: "C",
      texto_prolongado: repete("C"),
      palavra_alvo: "CARRO",
      imagem_url_ou_emoji: "🚗",
      tag_hiperfoco: "geral",
    },
  ],
  minecraft: [
    {
      letra_fonema: "Z",
      texto_prolongado: repete("Z"),
      palavra_alvo: "ZUMBI",
      imagem_url_ou_emoji: "🧟",
      tag_hiperfoco: "minecraft",
    },
    {
      letra_fonema: "C",
      texto_prolongado: repete("C"),
      palavra_alvo: "CREEPER",
      imagem_url_ou_emoji: "🟩",
      tag_hiperfoco: "minecraft",
    },
    {
      letra_fonema: "P",
      texto_prolongado: repete("P"),
      palavra_alvo: "PICARETA",
      imagem_url_ou_emoji: "⛏️",
      tag_hiperfoco: "minecraft",
    },
    {
      letra_fonema: "E",
      texto_prolongado: repete("E"),
      palavra_alvo: "ESPADA",
      imagem_url_ou_emoji: "🗡️",
      tag_hiperfoco: "minecraft",
    },
    {
      letra_fonema: "B",
      texto_prolongado: repete("B"),
      palavra_alvo: "BLOCO",
      imagem_url_ou_emoji: "🟫",
      tag_hiperfoco: "minecraft",
    },
    {
      letra_fonema: "D",
      texto_prolongado: repete("D"),
      palavra_alvo: "DIAMANTE",
      imagem_url_ou_emoji: "💎",
      tag_hiperfoco: "minecraft",
    },
    {
      letra_fonema: "T",
      texto_prolongado: repete("T"),
      palavra_alvo: "TOCHA",
      imagem_url_ou_emoji: "🔥",
      tag_hiperfoco: "minecraft",
    },
    {
      letra_fonema: "V",
      texto_prolongado: repete("V"),
      palavra_alvo: "VILA",
      imagem_url_ou_emoji: "🏘️",
      tag_hiperfoco: "minecraft",
    },
  ],
  dinossauros: [
    {
      letra_fonema: "D",
      texto_prolongado: repete("D"),
      palavra_alvo: "DINOSSAURO",
      imagem_url_ou_emoji: "🦖",
      tag_hiperfoco: "dinossauros",
    },
    {
      letra_fonema: "T",
      texto_prolongado: repete("T"),
      palavra_alvo: "T-REX",
      imagem_url_ou_emoji: "🦖",
      tag_hiperfoco: "dinossauros",
    },
    {
      letra_fonema: "O",
      texto_prolongado: repete("O"),
      palavra_alvo: "OVO",
      imagem_url_ou_emoji: "🥚",
      tag_hiperfoco: "dinossauros",
    },
    {
      letra_fonema: "F",
      texto_prolongado: repete("F"),
      palavra_alvo: "FÓSSIL",
      imagem_url_ou_emoji: "🦴",
      tag_hiperfoco: "dinossauros",
    },
    {
      letra_fonema: "V",
      texto_prolongado: repete("V"),
      palavra_alvo: "VULCÃO",
      imagem_url_ou_emoji: "🌋",
      tag_hiperfoco: "dinossauros",
    },
    {
      letra_fonema: "P",
      texto_prolongado: repete("P"),
      palavra_alvo: "PTERODÁCTILO",
      imagem_url_ou_emoji: "🦅",
      tag_hiperfoco: "dinossauros",
    },
    {
      letra_fonema: "R",
      texto_prolongado: repete("R"),
      palavra_alvo: "RAPTOR",
      imagem_url_ou_emoji: "🦖",
      tag_hiperfoco: "dinossauros",
    },
    {
      letra_fonema: "S",
      texto_prolongado: repete("S"),
      palavra_alvo: "SELVA",
      imagem_url_ou_emoji: "🌴",
      tag_hiperfoco: "dinossauros",
    },
  ],
  herois: [
    {
      letra_fonema: "H",
      texto_prolongado: repete("H"),
      palavra_alvo: "HERÓI",
      imagem_url_ou_emoji: "🦸",
      tag_hiperfoco: "herois",
    },
    {
      letra_fonema: "C",
      texto_prolongado: repete("C"),
      palavra_alvo: "CAPA",
      imagem_url_ou_emoji: "🦸‍♂️",
      tag_hiperfoco: "herois",
    },
    {
      letra_fonema: "R",
      texto_prolongado: repete("R"),
      palavra_alvo: "ROBÔ",
      imagem_url_ou_emoji: "🤖",
      tag_hiperfoco: "herois",
    },
    {
      letra_fonema: "E",
      texto_prolongado: repete("E"),
      palavra_alvo: "ESCUDO",
      imagem_url_ou_emoji: "🛡️",
      tag_hiperfoco: "herois",
    },
    {
      letra_fonema: "P",
      texto_prolongado: repete("P"),
      palavra_alvo: "PODER",
      imagem_url_ou_emoji: "⚡",
      tag_hiperfoco: "herois",
    },
    {
      letra_fonema: "M",
      texto_prolongado: repete("M"),
      palavra_alvo: "MÁSCARA",
      imagem_url_ou_emoji: "🎭",
      tag_hiperfoco: "herois",
    },
    {
      letra_fonema: "V",
      texto_prolongado: repete("V"),
      palavra_alvo: "VOAR",
      imagem_url_ou_emoji: "🌟",
      tag_hiperfoco: "herois",
    },
    {
      letra_fonema: "J",
      texto_prolongado: repete("J"),
      palavra_alvo: "JUSTICEIRO",
      imagem_url_ou_emoji: "⚖️",
      tag_hiperfoco: "herois",
    },
  ],
};

const MOTORZINHO_VARS: Variation[] = range(30).map((i) => ({
  id: `mt-${i + 1}`,
  payload: { bankIndex: i, holdSeconds: 3 },
}));

// 3. RIMAS
const RIMAS_BANK = [
  { palavra: "BOLA", correta: "COLA", outras: ["PATO", "FACA", "LIVRO"] },
  { palavra: "GATO", correta: "PATO", outras: ["BOLA", "FOLHA", "MESA"] },
  { palavra: "COROA", correta: "LAGOA", outras: ["CARRO", "SAPO", "BOLA"] },
  { palavra: "JANELA", correta: "PANELA", outras: ["MENINO", "FOGO", "CARRO"] },
  { palavra: "MÃO", correta: "PÃO", outras: ["LUA", "FLOR", "GATO"] },
  { palavra: "FACA", correta: "VACA", outras: ["BOLA", "CASA", "SOL"] },
  { palavra: "GELO", correta: "CABELO", outras: ["BARCO", "SOFÁ", "PATO"] },
  { palavra: "FLOR", correta: "COR", outras: ["MESA", "CADEIRA", "LUA"] },
  { palavra: "CASA", correta: "BRASA", outras: ["CARRO", "BOI", "FLOR"] },
  { palavra: "PATO", correta: "RATO", outras: ["FLOR", "BANANA", "CASA"] },
];
const RIMAS_VARS: Variation[] = range(30).map((i) => {
  const b = RIMAS_BANK[i % RIMAS_BANK.length];
  return {
    id: `ri-${i + 1}`,
    payload: {
      palavra: b.palavra,
      options: [b.correta, ...b.outras].sort(() => (i % 2 ? -1 : 1)),
      correta: b.correta,
    },
  };
});

// 4. PEDACINHOS DA PALAVRA — contagem silábica por palma
const PALAVRAS_SILABAS = [
  ["BO", "LA"],
  ["CA", "SA"],
  ["GA", "TO"],
  ["BA", "NA", "NA"],
  ["E", "LE", "FAN", "TE"],
  ["BO", "NE", "CA"],
  ["SO", "FÁ"],
  ["MA", "ÇÃ"],
  ["CA", "VA", "LO"],
  ["BO", "RBO", "LE", "TA"],
];
const PEDACINHOS_VARS: Variation[] = range(30).map((i) => {
  const s = PALAVRAS_SILABAS[i % PALAVRAS_SILABAS.length];
  return { id: `pd-${i + 1}`, payload: { palavra: s.join(""), silabas: s, total: s.length } };
});

// 5. ONDE ESTÁ — busca visual em grade com distratores
const ONDE_BANK = [
  { alvo: "🌟", distrator: "⭐" },
  { alvo: "🍎", distrator: "🍏" },
  { alvo: "🐱", distrator: "🐶" },
  { alvo: "🦋", distrator: "🐝" },
  { alvo: "🚗", distrator: "🚙" },
  { alvo: "🌸", distrator: "🌺" },
  { alvo: "⚽", distrator: "🏀" },
  { alvo: "🐶", distrator: "🐺" },
  { alvo: "🍌", distrator: "🍋" },
  { alvo: "🐠", distrator: "🐟" },
];
const ONDE_VARS: Variation[] = range(30).map((i) => {
  const b = ONDE_BANK[i % ONDE_BANK.length];
  const size = 16 + (i % 3) * 4; // grade aumenta com dificuldade
  const targetPos = Math.floor((i * 7) % size);
  const grid = Array(size).fill(b.distrator);
  grid[targetPos] = b.alvo;
  return { id: `oe-${i + 1}`, payload: { alvo: b.alvo, grid, correctIndex: targetPos } };
});

// 6. SEQUÊNCIA E PADRÃO — continuação lógica de formas
const SEQ_BANK = [
  { seq: ["🔴", "🔵", "🔴", "🔵"], next: "🔴", opts: ["🔴", "🔵", "🟢", "🟡"] },
  { seq: ["🔺", "🟦", "🔺", "🟦", "🔺"], next: "🟦", opts: ["🟦", "🔺", "⭐", "🟢"] },
  { seq: ["⬆️", "➡️", "⬆️", "➡️"], next: "⬆️", opts: ["⬆️", "➡️", "⬇️", "⬅️"] },
  { seq: ["🟢", "🟢", "🔴", "🟢", "🟢"], next: "🔴", opts: ["🔴", "🟢", "🔵", "🟡"] },
  { seq: ["⭐", "🌙", "⭐", "🌙", "⭐"], next: "🌙", opts: ["🌙", "⭐", "☀️", "🌈"] },
];
const SEQ_VARS: Variation[] = range(30).map((i) => {
  const b = SEQ_BANK[i % SEQ_BANK.length];
  return { id: `sp-${i + 1}`, payload: { ...b } };
});

// 7. CADÊ O PAR — jogo da memória
const PAR_BANK = ["🐱", "🐶", "🦊", "🐰", "🐼", "🐯", "🦁", "🐸", "🐵", "🐨"];
const PAR_VARS: Variation[] = range(30).map((i) => {
  const numPares = 3 + (i % 4); // 3..6 pares
  const items = PAR_BANK.slice(0, numPares);
  return { id: `cp-${i + 1}`, payload: { pares: items } };
});

// 8. FOCO TOTAL — Stroop infantil
const FOCO_CORES = [
  { nome: "VERMELHO", hex: "#ef4444" },
  { nome: "AZUL", hex: "#3b82f6" },
  { nome: "VERDE", hex: "#22c55e" },
  { nome: "AMARELO", hex: "#facc15" },
  { nome: "ROXO", hex: "#a855f7" },
];
const FOCO_VARS: Variation[] = range(30).map((i) => {
  const wordIdx = i % FOCO_CORES.length;
  const colorIdx = (i + 2) % FOCO_CORES.length; // garante mismatch
  const opts = FOCO_CORES.slice(0, 4);
  if (!opts.find((c) => c.nome === FOCO_CORES[colorIdx].nome)) opts[0] = FOCO_CORES[colorIdx];
  return {
    id: `ft-${i + 1}`,
    payload: {
      palavra: FOCO_CORES[wordIdx].nome,
      corExibida: FOCO_CORES[colorIdx].hex,
      corCerta: FOCO_CORES[colorIdx].nome,
      options: opts,
    },
  };
});

// 9. LABIRINTO DO SOM — escolher direção por pista sonora (texto)
const DIRECOES = [
  { simbolo: "⬆️", nome: "CIMA" },
  { simbolo: "⬇️", nome: "BAIXO" },
  { simbolo: "⬅️", nome: "ESQUERDA" },
  { simbolo: "➡️", nome: "DIREITA" },
];
const LABIRINTO_VARS: Variation[] = range(30).map((i) => {
  const passos = 3 + (i % 4);
  const caminho = range(passos).map((p) => DIRECOES[(i + p) % 4]);
  return { id: `ls-${i + 1}`, payload: { caminho } };
});

// 10. FOCO SUSTENTADO — alvo que aparece raramente no fluxo
const STREAM_BANK = ["🐝", "🌸", "🐛", "🐞", "🦗", "🐌", "🍄", "🌿", "🌷", "🌻"];
const FOCOSUS_VARS: Variation[] = range(30).map((i) => {
  const alvo = ["🦋", "⭐", "💎", "🌟", "❤️"][i % 5];
  const tamanho = 20 + (i % 3) * 5;
  const stream: string[] = [];
  const alvoIndices: number[] = [];
  for (let k = 0; k < tamanho; k++) {
    if ((k + i) % 5 === 0) {
      stream.push(alvo);
      alvoIndices.push(k);
    } else stream.push(STREAM_BANK[(k + i) % STREAM_BANK.length]);
  }
  return {
    id: `fs-${i + 1}`,
    payload: { alvo, stream, alvoIndices, intervaloMs: 900 - (i % 5) * 80 },
  };
});

// 11. RASTREAMENTO SACÁDICO — pontos fixos piscam em ordem
const SACADICO_VARS: Variation[] = range(30).map((i) => {
  const tamanho = 3 + (i % 5); // 3..7
  const seq: number[] = range(tamanho).map((k) => (i * 3 + k * 5) % 4);
  return {
    id: `rs-${i + 1}`,
    payload: { sequencia: seq, posicoes: 4, flashMs: 600 - (i % 4) * 80 },
  };
});

// 12. MOSAICO DE FORMAS — montar figuras com peças geométricas reais (Tangram)
export type ShapeType =
  | "triangle-up"
  | "triangle-down"
  | "triangle-left"
  | "triangle-right"
  | "rect"
  | "circle"
  | "trapezoid";

export interface MosaicoPiece {
  id: number;
  shape: ShapeType;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  label: string;
}

export interface MosaicoData {
  figura: string;
  emoji: string;
  viewW: number;
  viewH: number;
  pieces: MosaicoPiece[];
  distractors: MosaicoPiece[];
}

const MOSAICO_BANK: MosaicoData[] = [
  {
    figura: "Casa",
    emoji: "🏠",
    viewW: 200,
    viewH: 200,
    pieces: [
      {
        id: 1,
        shape: "triangle-up",
        x: 18,
        y: 15,
        w: 164,
        h: 76,
        color: "#ef4444",
        label: "telhado",
      },
      { id: 2, shape: "rect", x: 38, y: 88, w: 124, h: 82, color: "#fbbf24", label: "parede" },
      { id: 3, shape: "rect", x: 82, y: 128, w: 36, h: 42, color: "#92400e", label: "porta" },
      { id: 4, shape: "rect", x: 50, y: 102, w: 28, h: 24, color: "#93c5fd", label: "janela" },
      { id: 5, shape: "rect", x: 122, y: 102, w: 28, h: 24, color: "#93c5fd", label: "janela" },
    ],
    distractors: [
      { id: 101, shape: "circle", x: 70, y: 70, w: 60, h: 60, color: "#22c55e", label: "bola" },
      {
        id: 102,
        shape: "triangle-down",
        x: 60,
        y: 30,
        w: 80,
        h: 55,
        color: "#8b5cf6",
        label: "triângulo",
      },
      {
        id: 103,
        shape: "trapezoid",
        x: 30,
        y: 100,
        w: 100,
        h: 40,
        color: "#f97316",
        label: "tabuleiro",
      },
    ],
  },
  {
    figura: "Carro",
    emoji: "🚗",
    viewW: 220,
    viewH: 140,
    pieces: [
      { id: 1, shape: "rect", x: 10, y: 68, w: 200, h: 48, color: "#3b82f6", label: "carroceria" },
      { id: 2, shape: "rect", x: 55, y: 28, w: 110, h: 44, color: "#60a5fa", label: "cabine" },
      { id: 3, shape: "rect", x: 64, y: 35, w: 92, h: 30, color: "#bae6fd", label: "vidro" },
      { id: 4, shape: "circle", x: 30, y: 96, w: 48, h: 48, color: "#1f2937", label: "roda" },
      { id: 5, shape: "circle", x: 142, y: 96, w: 48, h: 48, color: "#1f2937", label: "roda" },
    ],
    distractors: [
      {
        id: 101,
        shape: "triangle-up",
        x: 60,
        y: 20,
        w: 100,
        h: 60,
        color: "#ef4444",
        label: "telhado",
      },
      { id: 102, shape: "rect", x: 30, y: 50, w: 80, h: 40, color: "#22c55e", label: "caixa" },
      { id: 103, shape: "circle", x: 80, y: 30, w: 50, h: 50, color: "#f59e0b", label: "sol" },
    ],
  },
  {
    figura: "Árvore",
    emoji: "🌳",
    viewW: 180,
    viewH: 210,
    pieces: [
      { id: 1, shape: "triangle-up", x: 10, y: 8, w: 160, h: 88, color: "#22c55e", label: "copa" },
      { id: 2, shape: "triangle-up", x: 28, y: 62, w: 124, h: 78, color: "#16a34a", label: "copa" },
      { id: 3, shape: "rect", x: 72, y: 150, w: 36, h: 55, color: "#92400e", label: "tronco" },
    ],
    distractors: [
      { id: 101, shape: "circle", x: 60, y: 50, w: 60, h: 60, color: "#ef4444", label: "bola" },
      { id: 102, shape: "rect", x: 40, y: 80, w: 20, h: 60, color: "#3b82f6", label: "bloco" },
      {
        id: 103,
        shape: "triangle-down",
        x: 40,
        y: 130,
        w: 80,
        h: 50,
        color: "#f97316",
        label: "triângulo",
      },
    ],
  },
  {
    figura: "Foguete",
    emoji: "🚀",
    viewW: 140,
    viewH: 230,
    pieces: [
      { id: 1, shape: "triangle-up", x: 30, y: 5, w: 80, h: 52, color: "#ef4444", label: "ponta" },
      { id: 2, shape: "rect", x: 42, y: 52, w: 56, h: 120, color: "#9ca3af", label: "corpo" },
      { id: 3, shape: "circle", x: 52, y: 82, w: 36, h: 36, color: "#bae6fd", label: "janela" },
      { id: 4, shape: "triangle-left", x: 8, y: 122, w: 38, h: 46, color: "#f59e0b", label: "asa" },
      {
        id: 5,
        shape: "triangle-right",
        x: 94,
        y: 122,
        w: 38,
        h: 46,
        color: "#f59e0b",
        label: "asa",
      },
      {
        id: 6,
        shape: "triangle-down",
        x: 53,
        y: 172,
        w: 34,
        h: 28,
        color: "#f97316",
        label: "chama",
      },
    ],
    distractors: [
      { id: 101, shape: "rect", x: 30, y: 60, w: 50, h: 30, color: "#22c55e", label: "caixa" },
      { id: 102, shape: "circle", x: 50, y: 50, w: 40, h: 40, color: "#a855f7", label: "bola" },
      {
        id: 103,
        shape: "triangle-down",
        x: 40,
        y: 30,
        w: 60,
        h: 40,
        color: "#3b82f6",
        label: "triângulo",
      },
    ],
  },
  {
    figura: "Sol",
    emoji: "☀️",
    viewW: 200,
    viewH: 200,
    pieces: [
      { id: 1, shape: "circle", x: 65, y: 65, w: 70, h: 70, color: "#fbbf24", label: "sol" },
      { id: 2, shape: "triangle-up", x: 82, y: 6, w: 36, h: 34, color: "#fde68a", label: "raio" },
      {
        id: 3,
        shape: "triangle-down",
        x: 82,
        y: 160,
        w: 36,
        h: 34,
        color: "#fde68a",
        label: "raio",
      },
      { id: 4, shape: "triangle-left", x: 6, y: 82, w: 34, h: 36, color: "#fde68a", label: "raio" },
      {
        id: 5,
        shape: "triangle-right",
        x: 160,
        y: 82,
        w: 34,
        h: 36,
        color: "#fde68a",
        label: "raio",
      },
    ],
    distractors: [
      { id: 101, shape: "rect", x: 50, y: 50, w: 80, h: 30, color: "#3b82f6", label: "bloco" },
      {
        id: 102,
        shape: "triangle-up",
        x: 60,
        y: 20,
        w: 80,
        h: 60,
        color: "#ef4444",
        label: "triângulo",
      },
    ],
  },
  {
    figura: "Barco",
    emoji: "⛵",
    viewW: 220,
    viewH: 180,
    pieces: [
      { id: 1, shape: "trapezoid", x: 20, y: 100, w: 180, h: 55, color: "#f97316", label: "casco" },
      { id: 2, shape: "triangle-up", x: 65, y: 18, w: 90, h: 88, color: "#f8fafc", label: "vela" },
      { id: 3, shape: "rect", x: 108, y: 18, w: 8, h: 88, color: "#6b7280", label: "mastro" },
    ],
    distractors: [
      { id: 101, shape: "circle", x: 60, y: 60, w: 50, h: 50, color: "#fbbf24", label: "roda" },
      {
        id: 102,
        shape: "triangle-down",
        x: 40,
        y: 30,
        w: 80,
        h: 50,
        color: "#ef4444",
        label: "triângulo",
      },
      { id: 103, shape: "rect", x: 30, y: 60, w: 60, h: 30, color: "#22c55e", label: "placa" },
    ],
  },
  {
    figura: "Peixe",
    emoji: "🐟",
    viewW: 220,
    viewH: 140,
    pieces: [
      { id: 1, shape: "circle", x: 20, y: 28, w: 130, h: 84, color: "#06b6d4", label: "corpo" },
      {
        id: 2,
        shape: "triangle-right",
        x: 140,
        y: 28,
        w: 62,
        h: 84,
        color: "#0891b2",
        label: "cauda",
      },
      { id: 3, shape: "circle", x: 38, y: 50, w: 22, h: 22, color: "#ffffff", label: "olho" },
      { id: 4, shape: "circle", x: 44, y: 56, w: 10, h: 10, color: "#1e3a5f", label: "pupila" },
    ],
    distractors: [
      {
        id: 101,
        shape: "triangle-up",
        x: 60,
        y: 20,
        w: 80,
        h: 60,
        color: "#ef4444",
        label: "telhado",
      },
      { id: 102, shape: "rect", x: 30, y: 60, w: 60, h: 30, color: "#22c55e", label: "bloco" },
      { id: 103, shape: "circle", x: 80, y: 40, w: 50, h: 50, color: "#f59e0b", label: "bola" },
    ],
  },
  {
    figura: "Flor",
    emoji: "🌸",
    viewW: 200,
    viewH: 200,
    pieces: [
      { id: 1, shape: "circle", x: 75, y: 75, w: 50, h: 50, color: "#fbbf24", label: "centro" },
      { id: 2, shape: "circle", x: 75, y: 20, w: 50, h: 50, color: "#f9a8d4", label: "pétala" },
      { id: 3, shape: "circle", x: 75, y: 130, w: 50, h: 50, color: "#f9a8d4", label: "pétala" },
      { id: 4, shape: "circle", x: 20, y: 75, w: 50, h: 50, color: "#f9a8d4", label: "pétala" },
      { id: 5, shape: "circle", x: 130, y: 75, w: 50, h: 50, color: "#f9a8d4", label: "pétala" },
      { id: 6, shape: "rect", x: 96, y: 150, w: 8, h: 50, color: "#16a34a", label: "caule" },
    ],
    distractors: [
      {
        id: 101,
        shape: "triangle-up",
        x: 60,
        y: 30,
        w: 80,
        h: 60,
        color: "#ef4444",
        label: "triângulo",
      },
      { id: 102, shape: "rect", x: 30, y: 60, w: 60, h: 30, color: "#3b82f6", label: "bloco" },
    ],
  },
];
const MOSAICO_VARS: Variation[] = range(30).map((i) => ({
  id: `mf-${i + 1}`,
  payload: MOSAICO_BANK[i % MOSAICO_BANK.length],
}));

// 13. SEQUÊNCIA DE CORES — ordem cromática pura
const SEQC_VARS: Variation[] = range(30).map((i) => {
  const cores = ["#ef4444", "#3b82f6", "#22c55e", "#facc15", "#a855f7"];
  const len = 3 + (i % 3);
  const padrao = range(len).map((k) => cores[(i + k) % 3]); // padrão simples 3 cores
  const next = cores[(i + len) % 3];
  return { id: `sc-${i + 1}`, payload: { sequencia: padrao, next, options: cores.slice(0, 4) } };
});

// 14. SIMETRIA — grade 4x4, lado esquerdo preenchido; usuário espelha no lado direito
const SIMETRIA_VARS: Variation[] = range(30).map((i) => {
  const rows = 4,
    halfCols = 2;
  const left: number[][] = range(rows).map((r) => range(halfCols).map((c) => (i + r * 3 + c) % 2));
  return { id: `sm-${i + 1}`, payload: { rows, halfCols, left } };
});

// 15. DECORAÇÃO CRIATIVA — cenário livre arrastar e soltar
const DECOR_BANK = [
  {
    cenario: "Jardim 🌳",
    fundo: "from-success/30 to-success/5",
    stickers: ["🌸", "🌼", "🦋", "🌳", "🐝", "☀️"],
  },
  {
    cenario: "Praia 🏖️",
    fundo: "from-sky/30 to-sun/10",
    stickers: ["🌊", "⛱️", "🐚", "🌞", "🐠", "⛵"],
  },
  {
    cenario: "Quarto 🛏️",
    fundo: "from-lilac/30 to-lilac/5",
    stickers: ["🛏️", "🪑", "🧸", "📚", "🌙", "⭐"],
  },
  {
    cenario: "Floresta 🌲",
    fundo: "from-success/30 to-primary/10",
    stickers: ["🌲", "🍄", "🦊", "🐿️", "🌸", "🦉"],
  },
  {
    cenario: "Espaço 🚀",
    fundo: "from-primary/30 to-primary/5",
    stickers: ["🚀", "🪐", "⭐", "🌙", "👽", "☄️"],
  },
];
const DECOR_VARS: Variation[] = range(30).map((i) => ({
  id: `dc-${i + 1}`,
  payload: DECOR_BANK[i % DECOR_BANK.length],
}));

// ===================== NOVAS CATEGORIAS =====================

// 16. ONOMATOPEIAS ANIMADAS — som → escolher figura (mecânica única: emissor de som textual + opções visuais grandes)
const ONOMA_BANK = [
  {
    som: "Au-au!",
    correta: { emoji: "🐶", nome: "Cachorro" },
    distratoras: [
      { emoji: "🐱", nome: "Gato" },
      { emoji: "🐮", nome: "Vaca" },
      { emoji: "🐷", nome: "Porco" },
    ],
  },
  {
    som: "Muuu!",
    correta: { emoji: "🐮", nome: "Vaca" },
    distratoras: [
      { emoji: "🐷", nome: "Porco" },
      { emoji: "🐔", nome: "Galinha" },
      { emoji: "🐑", nome: "Ovelha" },
    ],
  },
  {
    som: "Bi-bi!",
    correta: { emoji: "🚗", nome: "Carro" },
    distratoras: [
      { emoji: "🚲", nome: "Bike" },
      { emoji: "✈️", nome: "Avião" },
      { emoji: "🚂", nome: "Trem" },
    ],
  },
  {
    som: "Miau!",
    correta: { emoji: "🐱", nome: "Gato" },
    distratoras: [
      { emoji: "🐶", nome: "Cachorro" },
      { emoji: "🐭", nome: "Rato" },
      { emoji: "🦉", nome: "Coruja" },
    ],
  },
  {
    som: "Quá-quá!",
    correta: { emoji: "🦆", nome: "Pato" },
    distratoras: [
      { emoji: "🐦", nome: "Pássaro" },
      { emoji: "🦉", nome: "Coruja" },
      { emoji: "🐔", nome: "Galinha" },
    ],
  },
  {
    som: "Có-có-có!",
    correta: { emoji: "🐔", nome: "Galinha" },
    distratoras: [
      { emoji: "🦆", nome: "Pato" },
      { emoji: "🐓", nome: "Galo" },
      { emoji: "🐥", nome: "Pintinho" },
    ],
  },
  {
    som: "Oinc-oinc!",
    correta: { emoji: "🐷", nome: "Porco" },
    distratoras: [
      { emoji: "🐮", nome: "Vaca" },
      { emoji: "🐶", nome: "Cachorro" },
      { emoji: "🐐", nome: "Cabra" },
    ],
  },
  {
    som: "Bééé!",
    correta: { emoji: "🐑", nome: "Ovelha" },
    distratoras: [
      { emoji: "🐐", nome: "Cabra" },
      { emoji: "🐮", nome: "Vaca" },
      { emoji: "🐷", nome: "Porco" },
    ],
  },
  {
    som: "Mééé!",
    correta: { emoji: "🐐", nome: "Cabra" },
    distratoras: [
      { emoji: "🐑", nome: "Ovelha" },
      { emoji: "🐷", nome: "Porco" },
      { emoji: "🐮", nome: "Vaca" },
    ],
  },
  {
    som: "Pi-pi!",
    correta: { emoji: "🐥", nome: "Pintinho" },
    distratoras: [
      { emoji: "🐔", nome: "Galinha" },
      { emoji: "🦆", nome: "Pato" },
      { emoji: "🐓", nome: "Galo" },
    ],
  },
];
const ONOMA_VARS: Variation[] = range(30).map((i) => {
  const b = ONOMA_BANK[i % ONOMA_BANK.length];
  const opts = [b.correta, ...b.distratoras].sort(() => (i % 2 === 0 ? -1 : 1));
  return { id: `on-${i + 1}`, payload: { som: b.som, options: opts, correctName: b.correta.nome } };
});

// 17. RITMO E SOPRO VISUAL — mic real: criança sopra/fala e cena se anima (carro anda, vela apaga, balão sobe...)
const SOPRO_BANK = [
  { cena: "carro", silaba: "Vruuum", instrucao: "Sopra forte pra empurrar o carrinho!" },
  { cena: "vela", silaba: "Fuuu", instrucao: "Sopra a vela até apagar a chama!" },
  { cena: "balao", silaba: "Fiuuu", instrucao: "Sopra pra fazer o balão subir!" },
  { cena: "moinho", silaba: "Whoosh", instrucao: "Sopra pra girar o moinho de vento!" },
  { cena: "barco", silaba: "Shhh", instrucao: "Sopra a vela do barco até ele atravessar!" },
  { cena: "bolha", silaba: "Soo", instrucao: "Sopra devagar pra encher a bolha de sabão!" },
];
const SOPRO_VARS: Variation[] = range(30).map((i) => {
  const b = SOPRO_BANK[i % SOPRO_BANK.length];
  const dificuldade = 1 + (i % 5); // 1..5
  return { id: `rs-${i + 1}`, payload: { ...b, dificuldade, holdSeconds: 2 + dificuldade * 0.8 } };
});

// 18. SONS DO CORPO / PAROMATOPEIAS — som → ação correta
const CORPO_BANK = [
  { som: "Atchim!", correta: "😤 Espirrar", opts: ["😴 Dormir", "🍽️ Comer", "🏃 Correr"] },
  { som: "Nhac!", correta: "🍎 Morder", opts: ["💧 Beber", "👋 Acenar", "😴 Dormir"] },
  { som: "Glub-glub!", correta: "💧 Beber", opts: ["😤 Espirrar", "🍎 Morder", "🤧 Tossir"] },
  { som: "Hum-hum!", correta: "😋 Saborear", opts: ["😴 Dormir", "🤧 Tossir", "👋 Acenar"] },
  { som: "Cof-cof!", correta: "🤧 Tossir", opts: ["😤 Espirrar", "💧 Beber", "😴 Dormir"] },
  { som: "Zzzz...", correta: "😴 Dormir", opts: ["🏃 Correr", "🍎 Morder", "👏 Bater palma"] },
  { som: "Toc-toc!", correta: "🚪 Bater na porta", opts: ["👋 Acenar", "🍽️ Comer", "🦶 Pisar"] },
  {
    som: "Plaft!",
    correta: "👏 Bater palma",
    opts: ["🦶 Pisar", "🚪 Bater na porta", "😤 Espirrar"],
  },
];
const CORPO_VARS: Variation[] = range(30).map((i) => {
  const b = CORPO_BANK[i % CORPO_BANK.length];
  const opts = [b.correta, ...b.opts].sort(() => (i % 2 ? -1 : 1));
  return { id: `pc-${i + 1}`, payload: { som: b.som, opts, correta: b.correta } };
});

// 19. TRAÇADO DE LETRAS — sequência de setas numeradas (mecânica única: tocar setas em ordem)
const TRACADO_BANK = [
  { letra: "A", passos: ["⬇️", "↗️", "➡️"] },
  { letra: "L", passos: ["⬇️", "➡️"] },
  { letra: "T", passos: ["➡️", "⬇️"] },
  { letra: "I", passos: ["⬇️"] },
  { letra: "O", passos: ["↪️", "↩️", "⤴️"] },
  { letra: "E", passos: ["⬇️", "➡️", "➡️", "➡️"] },
  { letra: "H", passos: ["⬇️", "⬇️", "➡️"] },
  { letra: "F", passos: ["⬇️", "➡️", "➡️"] },
  { letra: "V", passos: ["↘️", "↗️"] },
  { letra: "M", passos: ["⬆️", "↘️", "↗️", "⬇️"] },
];
const TRACADO_VARS: Variation[] = range(30).map((i) => {
  const b = TRACADO_BANK[i % TRACADO_BANK.length];
  return { id: `tl-${i + 1}`, payload: { letra: b.letra, passos: b.passos } };
});

// 20. CAMINHO DOS PONTOS — unir pontos numerados (mecânica única: ordem crescente em coords)
const CAMINHO_BANK = [
  {
    figura: "Estrela ⭐",
    pontos: [
      { x: 50, y: 10 },
      { x: 60, y: 40 },
      { x: 90, y: 40 },
      { x: 65, y: 60 },
      { x: 75, y: 90 },
      { x: 50, y: 70 },
      { x: 25, y: 90 },
      { x: 35, y: 60 },
      { x: 10, y: 40 },
      { x: 40, y: 40 },
    ],
  },
  {
    figura: "Casa 🏠",
    pontos: [
      { x: 20, y: 80 },
      { x: 20, y: 40 },
      { x: 50, y: 15 },
      { x: 80, y: 40 },
      { x: 80, y: 80 },
    ],
  },
  {
    figura: "Coração ❤️",
    pontos: [
      { x: 50, y: 85 },
      { x: 15, y: 50 },
      { x: 25, y: 20 },
      { x: 50, y: 40 },
      { x: 75, y: 20 },
      { x: 85, y: 50 },
    ],
  },
  {
    figura: "Peixe 🐟",
    pontos: [
      { x: 15, y: 50 },
      { x: 40, y: 25 },
      { x: 75, y: 25 },
      { x: 85, y: 50 },
      { x: 75, y: 75 },
      { x: 40, y: 75 },
    ],
  },
  {
    figura: "Lua 🌙",
    pontos: [
      { x: 60, y: 15 },
      { x: 30, y: 35 },
      { x: 25, y: 60 },
      { x: 45, y: 80 },
      { x: 70, y: 75 },
    ],
  },
  {
    figura: "Barco ⛵",
    pontos: [
      { x: 50, y: 15 },
      { x: 50, y: 60 },
      { x: 15, y: 60 },
      { x: 85, y: 60 },
      { x: 20, y: 80 },
      { x: 80, y: 80 },
    ],
  },
];
const CAMINHO_VARS: Variation[] = range(30).map((i) => ({
  id: `cp-${i + 1}`,
  payload: CAMINHO_BANK[i % CAMINHO_BANK.length],
}));

// 21. LABIRINTO DE PRECISÃO — arrastar bolinha em corredor estreito
const LABPRE_BANK = [
  {
    tema: "Verde 🌿",
    segmentos: [
      { x: 10, y: 50, w: 30, h: 14 },
      { x: 35, y: 20, w: 14, h: 44 },
      { x: 35, y: 20, w: 55, h: 14 },
      { x: 78, y: 20, w: 14, h: 60 },
    ],
  },
  {
    tema: "Azul 💧",
    segmentos: [
      { x: 10, y: 20, w: 14, h: 60 },
      { x: 10, y: 66, w: 80, h: 14 },
      { x: 76, y: 20, w: 14, h: 60 },
    ],
  },
  {
    tema: "Roxo 🔮",
    segmentos: [
      { x: 10, y: 40, w: 80, h: 14 },
      { x: 10, y: 40, w: 14, h: 40 },
      { x: 76, y: 40, w: 14, h: 40 },
      { x: 10, y: 66, w: 80, h: 14 },
    ],
  },
  {
    tema: "Sol ☀️",
    segmentos: [
      { x: 10, y: 20, w: 80, h: 14 },
      { x: 76, y: 20, w: 14, h: 60 },
      { x: 10, y: 66, w: 80, h: 14 },
    ],
  },
  {
    tema: "Mar 🌊",
    segmentos: [
      { x: 10, y: 30, w: 30, h: 14 },
      { x: 35, y: 30, w: 14, h: 30 },
      { x: 35, y: 50, w: 30, h: 14 },
      { x: 60, y: 50, w: 14, h: 30 },
      { x: 60, y: 66, w: 30, h: 14 },
    ],
  },
];
const LABPRE_VARS: Variation[] = range(30).map((i) => ({
  id: `lp-${i + 1}`,
  payload: LABPRE_BANK[i % LABPRE_BANK.length],
}));

// 22. TRIAGEM DE CATEGORIAS — arrastar itens para caixas corretas
const TRIAGEM_BANK = [
  {
    caixas: [
      { nome: "Animais", emoji: "🐾" },
      { nome: "Transportes", emoji: "🚗" },
    ],
    itens: [
      { e: "🐱", cat: "Animais" },
      { e: "🚂", cat: "Transportes" },
      { e: "🐶", cat: "Animais" },
      { e: "✈️", cat: "Transportes" },
      { e: "🐰", cat: "Animais" },
      { e: "🚌", cat: "Transportes" },
    ],
  },
  {
    caixas: [
      { nome: "Frutas", emoji: "🍎" },
      { nome: "Verduras", emoji: "🥬" },
    ],
    itens: [
      { e: "🍎", cat: "Frutas" },
      { e: "🥦", cat: "Verduras" },
      { e: "🍌", cat: "Frutas" },
      { e: "🥕", cat: "Verduras" },
      { e: "🍇", cat: "Frutas" },
      { e: "🥒", cat: "Verduras" },
    ],
  },
  {
    caixas: [
      { nome: "Roupas", emoji: "👕" },
      { nome: "Brinquedos", emoji: "🧸" },
    ],
    itens: [
      { e: "👕", cat: "Roupas" },
      { e: "🧸", cat: "Brinquedos" },
      { e: "👖", cat: "Roupas" },
      { e: "🎲", cat: "Brinquedos" },
      { e: "🧦", cat: "Roupas" },
      { e: "⚽", cat: "Brinquedos" },
    ],
  },
  {
    caixas: [
      { nome: "Céu", emoji: "☁️" },
      { nome: "Mar", emoji: "🌊" },
    ],
    itens: [
      { e: "☀️", cat: "Céu" },
      { e: "🐠", cat: "Mar" },
      { e: "🌙", cat: "Céu" },
      { e: "🐙", cat: "Mar" },
      { e: "⭐", cat: "Céu" },
      { e: "🦀", cat: "Mar" },
    ],
  },
  {
    caixas: [
      { nome: "Quente", emoji: "🔥" },
      { nome: "Frio", emoji: "❄️" },
    ],
    itens: [
      { e: "☀️", cat: "Quente" },
      { e: "⛄", cat: "Frio" },
      { e: "🌶️", cat: "Quente" },
      { e: "🧊", cat: "Frio" },
      { e: "🔥", cat: "Quente" },
      { e: "❄️", cat: "Frio" },
    ],
  },
];
const TRIAGEM_VARS: Variation[] = range(30).map((i) => ({
  id: `tc-${i + 1}`,
  payload: TRIAGEM_BANK[i % TRIAGEM_BANK.length],
}));

// 23. EXPRESSÃO E EMOÇÃO — pareamento rosto × situação
const EMOCAO_BANK = [
  {
    cena: "Ganhou um presente 🎁",
    correta: "😄 Feliz",
    opts: ["😢 Triste", "😡 Bravo", "😨 Medo"],
  },
  {
    cena: "Quebrou o brinquedo 💔",
    correta: "😢 Triste",
    opts: ["😄 Feliz", "😲 Surpreso", "😡 Bravo"],
  },
  {
    cena: "Alguém pegou seu lanche",
    correta: "😡 Bravo",
    opts: ["😄 Feliz", "😨 Medo", "😴 Sono"],
  },
  {
    cena: "Viu uma surpresa atrás da porta",
    correta: "😲 Surpreso",
    opts: ["😴 Sono", "😢 Triste", "😡 Bravo"],
  },
  {
    cena: "Está sozinho no escuro",
    correta: "😨 Medo",
    opts: ["😄 Feliz", "😡 Bravo", "😲 Surpreso"],
  },
  {
    cena: "Ganhou abraço da família 🤗",
    correta: "😄 Feliz",
    opts: ["😨 Medo", "😡 Bravo", "😢 Triste"],
  },
  {
    cena: "Perdeu o cachorrinho",
    correta: "😢 Triste",
    opts: ["😲 Surpreso", "😄 Feliz", "😴 Sono"],
  },
  {
    cena: "Acordou cedo demais",
    correta: "😴 Sono",
    opts: ["😄 Feliz", "😲 Surpreso", "😡 Bravo"],
  },
];
const EMOCAO_VARS: Variation[] = range(30).map((i) => {
  const b = EMOCAO_BANK[i % EMOCAO_BANK.length];
  const opts = [b.correta, ...b.opts].sort(() => (i % 2 ? -1 : 1));
  return { id: `ee-${i + 1}`, payload: { cena: b.cena, opts, correta: b.correta } };
});

// 24. CONSCIÊNCIA FONOLÓGICA — 5 sub-tarefas (inicial/final/sílabas/rima/junção)
// Mecânica: pergunta + 4 opções de imagem 2D. Reutiliza biblioteca OBJETO_IMG.
type CfOption = { nome: string };
type CfExtra =
  | { tipo: "inicial"; letra: string }
  | { tipo: "final"; letra: string }
  | { tipo: "silabas"; n: number }
  | { tipo: "rima"; palavra: string }
  | { tipo: "juncao"; partes: string[] };

const cfShuffle = (arr: CfOption[], i: number): CfOption[] => {
  const a = [...arr];
  for (let k = a.length - 1; k > 0; k--) {
    const j = (i * 7 + k * 13) % (k + 1);
    [a[k], a[j]] = [a[j], a[k]];
  }
  return a;
};
const cfMake = (correta: string, distratores: string[], extra: CfExtra, idx: number) => {
  const options = cfShuffle(
    [correta, ...distratores].map((nome) => ({ nome })),
    idx,
  );
  return { ...extra, options, correctName: correta };
};

const CF_INICIAL = [
  { letra: "B", correta: "BOLA", distra: ["GATO", "FLOR", "LUA"] },
  { letra: "C", correta: "CASA", distra: ["PATO", "MAÇÃ", "RATO"] },
  { letra: "G", correta: "GATO", distra: ["SOL", "FLOR", "RATO"] },
  { letra: "P", correta: "PATO", distra: ["LUA", "MAÇÃ", "FOGO"] },
  { letra: "S", correta: "SOL", distra: ["CHUVA", "RATO", "ABELHA"] },
  { letra: "M", correta: "MAÇÃ", distra: ["CASA", "GATO", "BOLA"] },
];
const CF_FINAL = [
  { letra: "A", correta: "BOLA", distra: ["SOL", "FLOR", "PATO"] },
  { letra: "O", correta: "SAPO", distra: ["BOLA", "LUA", "MAÇÃ"] },
  { letra: "L", correta: "SOL", distra: ["BOLA", "GATO", "LUA"] },
  { letra: "A", correta: "CASA", distra: ["SOL", "FLOR", "ROBÔ"] },
  { letra: "O", correta: "RATO", distra: ["LUA", "MAÇÃ", "FLOR"] },
  { letra: "R", correta: "FLOR", distra: ["BOLA", "GATO", "SOL"] },
];
const CF_SILABAS = [
  { n: 2, correta: "BOLA", distra: ["BANANA", "BORBOLETA", "DINOSSAURO"] },
  { n: 3, correta: "BANANA", distra: ["SOL", "CASA", "DINOSSAURO"] },
  { n: 2, correta: "GATO", distra: ["CACHORRO", "BORBOLETA", "SOL"] },
  { n: 4, correta: "BORBOLETA", distra: ["BOLA", "SOL", "CASA"] },
  { n: 3, correta: "MORANGO", distra: ["BOLA", "SOL", "GATO"] },
  { n: 4, correta: "DINOSSAURO", distra: ["GATO", "SOL", "BOLA"] },
];
const CF_RIMA = [
  { palavra: "PATO", correta: "GATO", distra: ["BOLA", "SOL", "CASA"] },
  { palavra: "RATO", correta: "PATO", distra: ["LUA", "FLOR", "BANANA"] },
  { palavra: "GATO", correta: "RATO", distra: ["SOL", "MAÇÃ", "FLOR"] },
  { palavra: "PATO", correta: "RATO", distra: ["CASA", "FOGO", "LUA"] },
  { palavra: "GATO", correta: "PATO", distra: ["ABELHA", "FLOR", "BANANA"] },
  { palavra: "RATO", correta: "GATO", distra: ["SOL", "CASA", "BOLA"] },
];
const CF_JUNCAO = [
  { partes: ["BO", "LA"], correta: "BOLA", distra: ["GATO", "CASA", "LUA"] },
  { partes: ["GA", "TO"], correta: "GATO", distra: ["BOLA", "RATO", "SOL"] },
  { partes: ["CA", "SA"], correta: "CASA", distra: ["GATO", "PATO", "BOLA"] },
  { partes: ["SA", "PO"], correta: "SAPO", distra: ["BOLA", "GATO", "MAÇÃ"] },
  { partes: ["VA", "CA"], correta: "VACA", distra: ["PATO", "FLOR", "GATO"] },
  { partes: ["PA", "TO"], correta: "PATO", distra: ["GATO", "RATO", "BOLA"] },
];

const CONSCIENCIA_VARS: Variation[] = (() => {
  const out: Variation[] = [];
  CF_INICIAL.forEach((b, i) =>
    out.push({
      id: `cf-i-${i + 1}`,
      payload: cfMake(b.correta, b.distra, { tipo: "inicial", letra: b.letra }, i),
    }),
  );
  CF_FINAL.forEach((b, i) =>
    out.push({
      id: `cf-f-${i + 1}`,
      payload: cfMake(b.correta, b.distra, { tipo: "final", letra: b.letra }, i + 6),
    }),
  );
  CF_SILABAS.forEach((b, i) =>
    out.push({
      id: `cf-s-${i + 1}`,
      payload: cfMake(b.correta, b.distra, { tipo: "silabas", n: b.n }, i + 12),
    }),
  );
  CF_RIMA.forEach((b, i) =>
    out.push({
      id: `cf-r-${i + 1}`,
      payload: cfMake(b.correta, b.distra, { tipo: "rima", palavra: b.palavra }, i + 18),
    }),
  );
  CF_JUNCAO.forEach((b, i) =>
    out.push({
      id: `cf-j-${i + 1}`,
      payload: cfMake(b.correta, b.distra, { tipo: "juncao", partes: b.partes }, i + 24),
    }),
  );
  return out;
})();

// 24b. CONSCIÊNCIA SILÁBICA — 4 sub-tarefas (contar / inicial / final / formar)
// Mecânica: pergunta + 4 opções de imagem 2D. Reutiliza biblioteca OBJETO_IMG.
type CsExtra =
  | { tipo: "contar"; n: number }
  | { tipo: "inicial"; silaba: string }
  | { tipo: "final"; silaba: string }
  | { tipo: "formar"; partes: string[] };

const csMake = (correta: string, distratores: string[], extra: CsExtra, idx: number) => {
  const options = cfShuffle(
    [correta, ...distratores].map((nome) => ({ nome })),
    idx,
  );
  return { ...extra, options, correctName: correta };
};

const CS_CONTAR = [
  { n: 2, correta: "BOLA", distra: ["BANANA", "BORBOLETA", "DINOSSAURO"] },
  { n: 2, correta: "GATO", distra: ["BANANA", "BORBOLETA", "DINOSSAURO"] },
  { n: 2, correta: "CASA", distra: ["BANANA", "BORBOLETA", "DINOSSAURO"] },
  { n: 3, correta: "BANANA", distra: ["SOL", "BOLA", "DINOSSAURO"] },
  { n: 3, correta: "MORANGO", distra: ["SOL", "BOLA", "GATO"] },
  { n: 4, correta: "BORBOLETA", distra: ["BOLA", "SOL", "CASA"] },
  { n: 4, correta: "DINOSSAURO", distra: ["GATO", "SOL", "BOLA"] },
  { n: 2, correta: "SAPO", distra: ["BANANA", "BORBOLETA", "DINOSSAURO"] },
];
const CS_INICIAL = [
  { silaba: "BO", correta: "BOLA", distra: ["GATO", "FLOR", "LUA"] },
  { silaba: "GA", correta: "GATO", distra: ["SOL", "FLOR", "RATO"] },
  { silaba: "CA", correta: "CASA", distra: ["PATO", "MAÇÃ", "RATO"] },
  { silaba: "SA", correta: "SAPO", distra: ["BOLA", "LUA", "GATO"] },
  { silaba: "PA", correta: "PATO", distra: ["SOL", "FLOR", "GATO"] },
  { silaba: "VA", correta: "VACA", distra: ["BOLA", "FLOR", "RATO"] },
  { silaba: "BA", correta: "BANANA", distra: ["SOL", "CASA", "GATO"] },
  { silaba: "MO", correta: "MORANGO", distra: ["BOLA", "SOL", "GATO"] },
];
const CS_FINAL = [
  { silaba: "LA", correta: "BOLA", distra: ["GATO", "SOL", "PATO"] },
  { silaba: "TO", correta: "GATO", distra: ["BOLA", "SOL", "FLOR"] },
  { silaba: "SA", correta: "CASA", distra: ["PATO", "LUA", "FLOR"] },
  { silaba: "PO", correta: "SAPO", distra: ["BOLA", "LUA", "GATO"] },
  { silaba: "CA", correta: "VACA", distra: ["GATO", "SOL", "FLOR"] },
  { silaba: "TO", correta: "PATO", distra: ["BOLA", "FLOR", "SOL"] },
  { silaba: "NA", correta: "BANANA", distra: ["GATO", "SOL", "FLOR"] },
  { silaba: "GO", correta: "MORANGO", distra: ["BOLA", "GATO", "SOL"] },
];
const CS_FORMAR = [
  { partes: ["BO", "LA"], correta: "BOLA", distra: ["GATO", "CASA", "LUA"] },
  { partes: ["GA", "TO"], correta: "GATO", distra: ["BOLA", "RATO", "SOL"] },
  { partes: ["CA", "SA"], correta: "CASA", distra: ["GATO", "PATO", "BOLA"] },
  { partes: ["SA", "PO"], correta: "SAPO", distra: ["BOLA", "GATO", "MAÇÃ"] },
  { partes: ["VA", "CA"], correta: "VACA", distra: ["PATO", "FLOR", "GATO"] },
  { partes: ["PA", "TO"], correta: "PATO", distra: ["GATO", "RATO", "BOLA"] },
  { partes: ["BA", "NA", "NA"], correta: "BANANA", distra: ["SOL", "BOLA", "GATO"] },
  { partes: ["MO", "RAN", "GO"], correta: "MORANGO", distra: ["BOLA", "SOL", "GATO"] },
];

const CONSCIENCIA_SILABICA_VARS: Variation[] = (() => {
  const out: Variation[] = [];
  CS_CONTAR.forEach((b, i) =>
    out.push({
      id: `cs-c-${i + 1}`,
      payload: csMake(b.correta, b.distra, { tipo: "contar", n: b.n }, i),
    }),
  );
  CS_INICIAL.forEach((b, i) =>
    out.push({
      id: `cs-i-${i + 1}`,
      payload: csMake(b.correta, b.distra, { tipo: "inicial", silaba: b.silaba }, i + 8),
    }),
  );
  CS_FINAL.forEach((b, i) =>
    out.push({
      id: `cs-f-${i + 1}`,
      payload: csMake(b.correta, b.distra, { tipo: "final", silaba: b.silaba }, i + 16),
    }),
  );
  CS_FORMAR.forEach((b, i) =>
    out.push({
      id: `cs-fm-${i + 1}`,
      payload: csMake(b.correta, b.distra, { tipo: "formar", partes: b.partes }, i + 24),
    }),
  );
  return out;
})();

export const VARIATIONS: Record<CategoriaSlug, Variation[]> = {
  "sons-iniciais": SONS_INICIAIS_VARS,
  "motorzinho-dos-sons": MOTORZINHO_VARS,
  rimas: RIMAS_VARS,
  "pedacinhos-da-palavra": PEDACINHOS_VARS,
  "consciencia-fonologica": CONSCIENCIA_VARS,
  "consciencia-silabica": CONSCIENCIA_SILABICA_VARS,
  "onde-esta": ONDE_VARS,
  "sequencia-e-padrao": SEQ_VARS,
  "cade-o-par": PAR_VARS,
  "foco-total": FOCO_VARS,
  "labirinto-do-som": LABIRINTO_VARS,
  "foco-sustentado": FOCOSUS_VARS,
  "rastreamento-sacadico": SACADICO_VARS,
  "mosaico-de-formas": MOSAICO_VARS,
  "sequencia-de-cores": SEQC_VARS,
  simetria: SIMETRIA_VARS,
  "decoracao-criativa": DECOR_VARS,
  "onomatopeias-animadas": ONOMA_VARS,
  "ritmo-e-sopro": SOPRO_VARS,
  "paromatopeias-corpo": CORPO_VARS,
  "tracado-letras": TRACADO_VARS,
  "caminho-dos-pontos": CAMINHO_VARS,
  "labirinto-precisao": LABPRE_VARS,
  "triagem-categorias": TRIAGEM_VARS,
  "expressao-emocao": EMOCAO_VARS,
  // FONO CLÍNICO
  "discriminacao-auditiva": DISCRIMINACAO_AUDITIVA_VARS,
  "articulacao-sons": ARTICULACAO_SONS_VARS,
  "vocabulario-semantico": VOCABULARIO_SEMANTICO_VARS,
  "nomeacao-rapida": NOMEACAO_RAPIDA_VARS,
  // COORDENAÇÃO MOTORA
  "toque-sequencia": TOQUE_SEQUENCIA_VARS,
  "ritmo-batidas": RITMO_BATIDAS_VARS,
  "copiar-figura": COPIAR_FIGURA_VARS,
  "alvo-movel": ALVO_MOVEL_VARS,
  // ATENÇÃO & CONCENTRAÇÃO
  "achar-diferente": ACHAR_DIFERENTE_VARS,
  "memoria-visual": MEMORIA_VISUAL_VARS,
  "reacao-rapida": REACAO_RAPIDA_VARS,
  "seguir-instrucao": SEGUIR_INSTRUCAO_VARS,
  // ALFABETIZAÇÃO
  "letra-som": LETRA_SOM_VARS,
  "palavra-imagem": PALAVRA_IMAGEM_VARS,
  "formando-palavras": FORMANDO_PALAVRAS_VARS,
  "leitura-palavras": LEITURA_PALAVRAS_VARS,
  "completar-letra": COMPLETAR_LETRA_VARS,
};

export const GRUPOS = [
  {
    nome: "Fono Clínico 🏥",
    emoji: "👂",
    cor: "from-rose/25 to-rose/5",
    slugs: [
      "discriminacao-auditiva",
      "articulacao-sons",
      "vocabulario-semantico",
      "nomeacao-rapida",
    ] as CategoriaSlug[],
  },
  {
    nome: "Coordenação Motora 🤲",
    emoji: "🎯",
    cor: "from-emerald/25 to-emerald/5",
    slugs: [
      "toque-sequencia",
      "ritmo-batidas",
      "copiar-figura",
      "alvo-movel",
      "tracado-letras",
      "caminho-dos-pontos",
      "labirinto-precisao",
    ] as CategoriaSlug[],
  },
  {
    nome: "Atenção & Concentração 🧠",
    emoji: "👁️",
    cor: "from-violet/25 to-violet/5",
    slugs: [
      "achar-diferente",
      "memoria-visual",
      "reacao-rapida",
      "seguir-instrucao",
      "foco-sustentado",
      "rastreamento-sacadico",
      "foco-total",
    ] as CategoriaSlug[],
  },
  {
    nome: "Alfabetização 📖",
    emoji: "✏️",
    cor: "from-amber/25 to-amber/5",
    slugs: [
      "letra-som",
      "palavra-imagem",
      "formando-palavras",
      "leitura-palavras",
      "completar-letra",
      "sons-iniciais",
      "rimas",
      "pedacinhos-da-palavra",
      "consciencia-fonologica",
      "consciencia-silabica",
    ] as CategoriaSlug[],
  },
  {
    nome: "Fala e Som 🗣️",
    emoji: "🗣️",
    cor: "from-coral/25 to-coral/5",
    slugs: [
      "motorzinho-dos-sons",
      "onomatopeias-animadas",
      "ritmo-e-sopro",
      "paromatopeias-corpo",
      "discriminacao-auditiva",
    ] as CategoriaSlug[],
  },
  {
    nome: "Funções Executivas 🔧",
    emoji: "🧩",
    cor: "from-primary/20 to-primary/5",
    slugs: [
      "onde-esta",
      "sequencia-e-padrao",
      "cade-o-par",
      "labirinto-do-som",
      "triagem-categorias",
      "expressao-emocao",
    ] as CategoriaSlug[],
  },
  {
    nome: "Oficina Criativa 🎨",
    emoji: "🎨",
    cor: "from-lilac/30 to-lilac/5",
    slugs: [
      "mosaico-de-formas",
      "sequencia-de-cores",
      "simetria",
      "decoracao-criativa",
    ] as CategoriaSlug[],
  },
];
