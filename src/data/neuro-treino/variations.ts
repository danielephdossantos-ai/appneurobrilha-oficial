// Banco de variações exclusivas por categoria de Neuro-Treino.
// Regra de ouro: cada categoria tem mecânica única. NÃO repita mecânicas entre categorias.

export type CategoriaSlug =
  | "sons-iniciais"
  | "motorzinho-dos-sons"
  | "rimas"
  | "pedacinhos-da-palavra"
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
  // Fono & Onomatopeias
  | "onomatopeias-animadas"
  | "ritmo-e-sopro"
  | "paromatopeias-corpo"
  // Coordenação Motor-Escrita
  | "tracado-letras"
  | "caminho-dos-pontos"
  | "labirinto-precisao"
  // Jogos Clínicos Cognitivos
  | "triagem-categorias"
  | "expressao-emocao";

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
  "sons-iniciais": { slug:"sons-iniciais", nome:"Sons Iniciais", emoji:"🔤", grupo:"Fala e Som", cor:"from-coral/25 to-coral/5", objetivo:"Identificação do fonema/letra inicial", instrucao:"Toque na figura que começa com a letra mostrada." },
  "motorzinho-dos-sons": { slug:"motorzinho-dos-sons", nome:"Motorzinho dos Sons", emoji:"🚂", grupo:"Fala e Som", cor:"from-coral/25 to-coral/5", objetivo:"Prolongamento de fonemas isolados", instrucao:"Segure o botão enquanto faz o som da letra até o trenzinho chegar." },
  "rimas": { slug:"rimas", nome:"Rimas", emoji:"🎵", grupo:"Fala e Som", cor:"from-coral/25 to-coral/5", objetivo:"Associação por terminação sonora", instrucao:"Escolha a palavra que termina com o mesmo som." },
  "pedacinhos-da-palavra": { slug:"pedacinhos-da-palavra", nome:"Pedacinhos da Palavra", emoji:"👏", grupo:"Fala e Som", cor:"from-coral/25 to-coral/5", objetivo:"Contagem silábica interativa", instrucao:"Bata palma uma vez para cada pedacinho da palavra." },

  "onde-esta": { slug:"onde-esta", nome:"Onde Está", emoji:"🔍", grupo:"Funções Executivas", cor:"from-primary/20 to-primary/5", objetivo:"Busca visual ativa com distratores", instrucao:"Encontre e toque na figura procurada o mais rápido possível." },
  "sequencia-e-padrao": { slug:"sequencia-e-padrao", nome:"Sequência e Padrão", emoji:"🧩", grupo:"Funções Executivas", cor:"from-primary/20 to-primary/5", objetivo:"Continuação lógica de padrões", instrucao:"Toque na peça que continua a sequência." },
  "cade-o-par": { slug:"cade-o-par", nome:"Cadê o Par", emoji:"🃏", grupo:"Funções Executivas", cor:"from-primary/20 to-primary/5", objetivo:"Memória associativa direta", instrucao:"Vire duas cartas para encontrar os pares iguais." },
  "foco-total": { slug:"foco-total", nome:"Foco Total", emoji:"🎯", grupo:"Funções Executivas", cor:"from-primary/20 to-primary/5", objetivo:"Controle inibitório (Stroop infantil)", instrucao:"Toque na COR da palavra — ignore o que está escrito." },
  "labirinto-do-som": { slug:"labirinto-do-som", nome:"Labirinto do Som", emoji:"🌀", grupo:"Funções Executivas", cor:"from-primary/20 to-primary/5", objetivo:"Caminho guiado por pistas sonoras", instrucao:"Siga a direção indicada pela pista sonora para sair do labirinto." },

  "foco-sustentado": { slug:"foco-sustentado", nome:"Foco Sustentado", emoji:"👁️", grupo:"Atenção Avançada", cor:"from-sky/30 to-sky/5", objetivo:"Monitoramento contínuo de alvo", instrucao:"Toque SOMENTE quando o alvo aparecer na tela." },
  "rastreamento-sacadico": { slug:"rastreamento-sacadico", nome:"Rastreamento Sacádico", emoji:"⚡", grupo:"Atenção Avançada", cor:"from-sky/30 to-sky/5", objetivo:"Rastreio visual de estímulos rápidos", instrucao:"Toque nos pontos na mesma ordem em que piscaram." },

  "mosaico-de-formas": { slug:"mosaico-de-formas", nome:"Mosaico de Formas", emoji:"🔷", grupo:"Oficina Criativa", cor:"from-lilac/30 to-lilac/5", objetivo:"Composição com encaixe geométrico (Tangram)", instrucao:"Escolha as formas certas para montar a figura." },
  "sequencia-de-cores": { slug:"sequencia-de-cores", nome:"Sequência de Cores", emoji:"🌈", grupo:"Oficina Criativa", cor:"from-lilac/30 to-lilac/5", objetivo:"Padrão cromático puro", instrucao:"Toque na cor que continua a sequência." },
  "simetria": { slug:"simetria", nome:"Simetria", emoji:"🦋", grupo:"Oficina Criativa", cor:"from-lilac/30 to-lilac/5", objetivo:"Espelhamento em grade pixelada", instrucao:"Pinte o lado direito para espelhar a figura da esquerda." },
  "decoracao-criativa": { slug:"decoracao-criativa", nome:"Decoração Criativa", emoji:"🎨", grupo:"Oficina Criativa", cor:"from-lilac/30 to-lilac/5", objetivo:"Cenário livre com arrastar e soltar", instrucao:"Arraste os elementos para decorar o cenário do seu jeito." },
};

// ===================== Variações (30 por categoria) =====================

export type Variation = { id: string; payload: any };

// Helpers
const range = (n: number) => Array.from({ length: n }, (_, i) => i);
const pick = <T,>(arr: T[], i: number) => arr[i % arr.length];

// 1. SONS INICIAIS
const SONS_BANK = [
  { letra:"B", correta:{emoji:"⚽", nome:"BOLA"}, distratoras:[{emoji:"🐱",nome:"GATO"},{emoji:"🍎",nome:"MAÇÃ"},{emoji:"🌳",nome:"ÁRVORE"}] },
  { letra:"C", correta:{emoji:"🏠", nome:"CASA"}, distratoras:[{emoji:"🐝",nome:"ABELHA"},{emoji:"🌸",nome:"FLOR"},{emoji:"🚗",nome:"OUTRO"}] },
  { letra:"G", correta:{emoji:"🐱", nome:"GATO"}, distratoras:[{emoji:"🍎",nome:"MAÇÃ"},{emoji:"🚂",nome:"TREM"},{emoji:"🦆",nome:"PATO"}] },
  { letra:"P", correta:{emoji:"🦆", nome:"PATO"}, distratoras:[{emoji:"🐶",nome:"DOG"},{emoji:"🌙",nome:"LUA"},{emoji:"⚽",nome:"BOLA"}] },
  { letra:"S", correta:{emoji:"☀️", nome:"SOL"}, distratoras:[{emoji:"🌧️",nome:"CHUVA"},{emoji:"🐶",nome:"CACHORRO"},{emoji:"🐝",nome:"ABELHA"}] },
  { letra:"L", correta:{emoji:"🌙", nome:"LUA"}, distratoras:[{emoji:"⭐",nome:"ESTRELA"},{emoji:"🍎",nome:"MAÇÃ"},{emoji:"🐱",nome:"GATO"}] },
  { letra:"F", correta:{emoji:"🌸", nome:"FLOR"}, distratoras:[{emoji:"⚽",nome:"BOLA"},{emoji:"🚗",nome:"CARRO"},{emoji:"🍎",nome:"MAÇÃ"}] },
  { letra:"M", correta:{emoji:"🍎", nome:"MAÇÃ"}, distratoras:[{emoji:"🏠",nome:"CASA"},{emoji:"🐱",nome:"GATO"},{emoji:"⚽",nome:"BOLA"}] },
  { letra:"T", correta:{emoji:"🚂", nome:"TREM"}, distratoras:[{emoji:"🐶",nome:"DOG"},{emoji:"🌸",nome:"FLOR"},{emoji:"☀️",nome:"SOL"}] },
  { letra:"R", correta:{emoji:"🐀", nome:"RATO"}, distratoras:[{emoji:"⭐",nome:"ESTRELA"},{emoji:"🍌",nome:"BANANA"},{emoji:"🏠",nome:"CASA"}] },
];
const SONS_INICIAIS_VARS: Variation[] = range(30).map((i) => {
  const base = SONS_BANK[i % SONS_BANK.length];
  const options = [base.correta, ...base.distratoras].sort(() => (i % 2 === 0 ? -1 : 1));
  return { id:`si-${i+1}`, payload:{ letra: base.letra, options, correctName: base.correta.nome } };
});

// 2. MOTORZINHO DOS SONS — segurar para prolongar fonema
const FONEMAS = ["S","F","Z","M","R","V","L","N","J","X"];
const FONEMA_PISTA: Record<string,string> = { S:"cobra (sssss)", F:"vento (fffff)", Z:"abelha (zzzzz)", M:"comendo (mmmmm)", R:"motor (rrrrr)", V:"avião (vvvvv)", L:"sino (lllll)", N:"sem som (nnnnn)", J:"jato (jjjjj)", X:"silêncio (xxxxx)" };
const MOTORZINHO_VARS: Variation[] = range(30).map((i) => ({
  id:`mt-${i+1}`,
  payload:{ fonema: FONEMAS[i % FONEMAS.length], pista: FONEMA_PISTA[FONEMAS[i % FONEMAS.length]], holdSeconds: 2 + Math.floor(i/10) }
}));

// 3. RIMAS
const RIMAS_BANK = [
  { palavra:"BOLA", correta:"COLA", outras:["PATO","FACA"] },
  { palavra:"GATO", correta:"PATO", outras:["BOLA","FOLHA"] },
  { palavra:"COROA", correta:"LAGOA", outras:["CARRO","SAPO"] },
  { palavra:"JANELA", correta:"PANELA", outras:["MENINO","FOGO"] },
  { palavra:"MÃO", correta:"PÃO", outras:["LUA","FLOR"] },
  { palavra:"FACA", correta:"VACA", outras:["BOLA","CASA"] },
  { palavra:"GELO", correta:"CABELO", outras:["BARCO","SOFÁ"] },
  { palavra:"FLOR", correta:"COR", outras:["MESA","CADEIRA"] },
  { palavra:"CASA", correta:"BRASA", outras:["CARRO","BOI"] },
  { palavra:"PATO", correta:"RATO", outras:["FLOR","BANANA"] },
];
const RIMAS_VARS: Variation[] = range(30).map((i) => {
  const b = RIMAS_BANK[i % RIMAS_BANK.length];
  return { id:`ri-${i+1}`, payload:{ palavra:b.palavra, options:[b.correta, ...b.outras].sort(()=>i%2?-1:1), correta:b.correta } };
});

// 4. PEDACINHOS DA PALAVRA — contagem silábica por palma
const PALAVRAS_SILABAS = [
  ["BO","LA"],["CA","SA"],["GA","TO"],["BA","NA","NA"],["E","LE","FAN","TE"],
  ["BO","NE","CA"],["SO","FÁ"],["MA","ÇÃ"],["CA","VA","LO"],["BO","RBO","LE","TA"],
];
const PEDACINHOS_VARS: Variation[] = range(30).map((i) => {
  const s = PALAVRAS_SILABAS[i % PALAVRAS_SILABAS.length];
  return { id:`pd-${i+1}`, payload:{ palavra: s.join(""), silabas: s, total: s.length } };
});

// 5. ONDE ESTÁ — busca visual em grade com distratores
const ONDE_BANK = [
  { alvo:"🌟", distrator:"⭐" },
  { alvo:"🍎", distrator:"🍏" },
  { alvo:"🐱", distrator:"🐶" },
  { alvo:"🦋", distrator:"🐝" },
  { alvo:"🚗", distrator:"🚙" },
  { alvo:"🌸", distrator:"🌺" },
  { alvo:"⚽", distrator:"🏀" },
  { alvo:"🐶", distrator:"🐺" },
  { alvo:"🍌", distrator:"🍋" },
  { alvo:"🐠", distrator:"🐟" },
];
const ONDE_VARS: Variation[] = range(30).map((i) => {
  const b = ONDE_BANK[i % ONDE_BANK.length];
  const size = 16 + (i % 3) * 4; // grade aumenta com dificuldade
  const targetPos = Math.floor((i * 7) % size);
  const grid = Array(size).fill(b.distrator);
  grid[targetPos] = b.alvo;
  return { id:`oe-${i+1}`, payload:{ alvo:b.alvo, grid, correctIndex: targetPos } };
});

// 6. SEQUÊNCIA E PADRÃO — continuação lógica de formas
const SEQ_BANK = [
  { seq:["🔴","🔵","🔴","🔵"], next:"🔴", opts:["🔴","🔵","🟢"] },
  { seq:["🔺","🟦","🔺","🟦","🔺"], next:"🟦", opts:["🟦","🔺","⭐"] },
  { seq:["⬆️","➡️","⬆️","➡️"], next:"⬆️", opts:["⬆️","➡️","⬇️"] },
  { seq:["🟢","🟢","🔴","🟢","🟢"], next:"🔴", opts:["🔴","🟢","🔵"] },
  { seq:["⭐","🌙","⭐","🌙","⭐"], next:"🌙", opts:["🌙","⭐","☀️"] },
];
const SEQ_VARS: Variation[] = range(30).map((i) => {
  const b = SEQ_BANK[i % SEQ_BANK.length];
  return { id:`sp-${i+1}`, payload:{ ...b } };
});

// 7. CADÊ O PAR — jogo da memória
const PAR_BANK = ["🐱","🐶","🦊","🐰","🐼","🐯","🦁","🐸","🐵","🐨"];
const PAR_VARS: Variation[] = range(30).map((i) => {
  const numPares = 3 + (i % 4); // 3..6 pares
  const items = PAR_BANK.slice(0, numPares);
  return { id:`cp-${i+1}`, payload:{ pares: items } };
});

// 8. FOCO TOTAL — Stroop infantil
const FOCO_CORES = [
  { nome:"VERMELHO", hex:"#ef4444" },
  { nome:"AZUL", hex:"#3b82f6" },
  { nome:"VERDE", hex:"#22c55e" },
  { nome:"AMARELO", hex:"#facc15" },
  { nome:"ROXO", hex:"#a855f7" },
];
const FOCO_VARS: Variation[] = range(30).map((i) => {
  const wordIdx = i % FOCO_CORES.length;
  const colorIdx = (i + 2) % FOCO_CORES.length; // garante mismatch
  const opts = FOCO_CORES.slice(0,4);
  if (!opts.find(c => c.nome === FOCO_CORES[colorIdx].nome)) opts[0] = FOCO_CORES[colorIdx];
  return {
    id:`ft-${i+1}`,
    payload:{
      palavra: FOCO_CORES[wordIdx].nome,
      corExibida: FOCO_CORES[colorIdx].hex,
      corCerta: FOCO_CORES[colorIdx].nome,
      options: opts,
    }
  };
});

// 9. LABIRINTO DO SOM — escolher direção por pista sonora (texto)
const DIRECOES = [
  { simbolo:"⬆️", nome:"CIMA" },
  { simbolo:"⬇️", nome:"BAIXO" },
  { simbolo:"⬅️", nome:"ESQUERDA" },
  { simbolo:"➡️", nome:"DIREITA" },
];
const LABIRINTO_VARS: Variation[] = range(30).map((i) => {
  const passos = 3 + (i % 4);
  const caminho = range(passos).map(p => DIRECOES[(i + p) % 4]);
  return { id:`ls-${i+1}`, payload:{ caminho } };
});

// 10. FOCO SUSTENTADO — alvo que aparece raramente no fluxo
const STREAM_BANK = ["🐝","🌸","🐛","🐞","🦗","🐌","🍄","🌿","🌷","🌻"];
const FOCOSUS_VARS: Variation[] = range(30).map((i) => {
  const alvo = ["🦋","⭐","💎","🌟","❤️"][i % 5];
  const tamanho = 20 + (i % 3) * 5;
  const stream: string[] = [];
  const alvoIndices: number[] = [];
  for (let k=0; k<tamanho; k++) {
    if ((k + i) % 5 === 0) { stream.push(alvo); alvoIndices.push(k); }
    else stream.push(STREAM_BANK[(k+i) % STREAM_BANK.length]);
  }
  return { id:`fs-${i+1}`, payload:{ alvo, stream, alvoIndices, intervaloMs: 900 - (i%5)*80 } };
});

// 11. RASTREAMENTO SACÁDICO — pontos fixos piscam em ordem
const SACADICO_VARS: Variation[] = range(30).map((i) => {
  const tamanho = 3 + (i % 5); // 3..7
  const seq: number[] = range(tamanho).map(k => (i * 3 + k * 5) % 4);
  return { id:`rs-${i+1}`, payload:{ sequencia: seq, posicoes: 4, flashMs: 600 - (i%4)*80 } };
});

// 12. MOSAICO DE FORMAS — escolher peças corretas (Tangram)
const MOSAICO_BANK = [
  { figura:"🏠 Casa", pecas:["🔺","🟦"], opcoes:["🔺","🟦","🟢","⭐"] },
  { figura:"⛵ Barco", pecas:["🔺","🟫"], opcoes:["🔺","🟫","🟦","🟢"] },
  { figura:"🌳 Árvore", pecas:["🔺","🟫"], opcoes:["🔺","🟫","🟦","⭐"] },
  { figura:"🐟 Peixe", pecas:["🔷","🔺"], opcoes:["🔷","🔺","🟦","🟢"] },
  { figura:"🚀 Foguete", pecas:["🔺","🟦","🟦"], opcoes:["🔺","🟦","🟢","⭐"] },
];
const MOSAICO_VARS: Variation[] = range(30).map((i) => ({ id:`mf-${i+1}`, payload: MOSAICO_BANK[i % MOSAICO_BANK.length] }));

// 13. SEQUÊNCIA DE CORES — ordem cromática pura
const SEQC_VARS: Variation[] = range(30).map((i) => {
  const cores = ["#ef4444","#3b82f6","#22c55e","#facc15","#a855f7"];
  const len = 3 + (i % 3);
  const padrao = range(len).map(k => cores[(i+k) % 3]); // padrão simples 3 cores
  const next = cores[(i+len) % 3];
  return { id:`sc-${i+1}`, payload:{ sequencia: padrao, next, options: cores.slice(0,4) } };
});

// 14. SIMETRIA — grade 4x4, lado esquerdo preenchido; usuário espelha no lado direito
const SIMETRIA_VARS: Variation[] = range(30).map((i) => {
  const rows = 4, halfCols = 2;
  const left: number[][] = range(rows).map(r => range(halfCols).map(c => ((i + r * 3 + c) % 2)));
  return { id:`sm-${i+1}`, payload:{ rows, halfCols, left } };
});

// 15. DECORAÇÃO CRIATIVA — cenário livre arrastar e soltar
const DECOR_BANK = [
  { cenario:"Jardim 🌳", fundo:"from-success/30 to-success/5", stickers:["🌸","🌼","🦋","🌳","🐝","☀️"] },
  { cenario:"Praia 🏖️", fundo:"from-sky/30 to-sun/10", stickers:["🌊","⛱️","🐚","🌞","🐠","⛵"] },
  { cenario:"Quarto 🛏️", fundo:"from-lilac/30 to-lilac/5", stickers:["🛏️","🪑","🧸","📚","🌙","⭐"] },
  { cenario:"Floresta 🌲", fundo:"from-success/30 to-primary/10", stickers:["🌲","🍄","🦊","🐿️","🌸","🦉"] },
  { cenario:"Espaço 🚀", fundo:"from-primary/30 to-primary/5", stickers:["🚀","🪐","⭐","🌙","👽","☄️"] },
];
const DECOR_VARS: Variation[] = range(30).map((i) => ({ id:`dc-${i+1}`, payload: DECOR_BANK[i % DECOR_BANK.length] }));

export const VARIATIONS: Record<CategoriaSlug, Variation[]> = {
  "sons-iniciais": SONS_INICIAIS_VARS,
  "motorzinho-dos-sons": MOTORZINHO_VARS,
  "rimas": RIMAS_VARS,
  "pedacinhos-da-palavra": PEDACINHOS_VARS,
  "onde-esta": ONDE_VARS,
  "sequencia-e-padrao": SEQ_VARS,
  "cade-o-par": PAR_VARS,
  "foco-total": FOCO_VARS,
  "labirinto-do-som": LABIRINTO_VARS,
  "foco-sustentado": FOCOSUS_VARS,
  "rastreamento-sacadico": SACADICO_VARS,
  "mosaico-de-formas": MOSAICO_VARS,
  "sequencia-de-cores": SEQC_VARS,
  "simetria": SIMETRIA_VARS,
  "decoracao-criativa": DECOR_VARS,
};

export const GRUPOS = [
  { nome:"Fala e Som", emoji:"🗣️", cor:"from-coral/25 to-coral/5", slugs:["sons-iniciais","motorzinho-dos-sons","rimas","pedacinhos-da-palavra"] as CategoriaSlug[] },
  { nome:"Funções Executivas", emoji:"🧠", cor:"from-primary/20 to-primary/5", slugs:["onde-esta","sequencia-e-padrao","cade-o-par","foco-total","labirinto-do-som"] as CategoriaSlug[] },
  { nome:"Atenção Avançada", emoji:"👁️", cor:"from-sky/30 to-sky/5", slugs:["foco-sustentado","rastreamento-sacadico"] as CategoriaSlug[] },
  { nome:"Oficina Criativa", emoji:"🎨", cor:"from-lilac/30 to-lilac/5", slugs:["mosaico-de-formas","sequencia-de-cores","simetria","decoracao-criativa"] as CategoriaSlug[] },
];
