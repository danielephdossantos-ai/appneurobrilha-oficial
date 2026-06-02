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

  // Fono & Onomatopeias
  "onomatopeias-animadas": { slug:"onomatopeias-animadas", nome:"Onomatopeias Animadas", emoji:"🐮", grupo:"Fono & Onomatopeias", cor:"from-sun/25 to-coral/5", objetivo:"Associação de som natural ao elemento visual", instrucao:"Toque na figura que faz este som." },
  "ritmo-e-sopro": { slug:"ritmo-e-sopro", nome:"Ritmo e Sopro Visual", emoji:"🚂", grupo:"Fono & Onomatopeias", cor:"from-sun/25 to-coral/5", objetivo:"Modulação de voz por pista visual", instrucao:"Estique o som conforme a linha cresce." },
  "paromatopeias-corpo": { slug:"paromatopeias-corpo", nome:"Sons do Corpo", emoji:"🤧", grupo:"Fono & Onomatopeias", cor:"from-sun/25 to-coral/5", objetivo:"Reconhecimento de sons corporais e ações", instrucao:"Toque na ação que combina com o som." },

  // Coordenação Motor-Escrita
  "tracado-letras": { slug:"tracado-letras", nome:"Traçado de Letras", emoji:"✍️", grupo:"Coordenação Motor-Escrita", cor:"from-success/25 to-success/5", objetivo:"Cobertura de pontilhado com setas direcionais", instrucao:"Siga as setas em ordem para cobrir a letra." },
  "caminho-dos-pontos": { slug:"caminho-dos-pontos", nome:"Caminho dos Pontos", emoji:"🔢", grupo:"Coordenação Motor-Escrita", cor:"from-success/25 to-success/5", objetivo:"Unir pontos em sequência para formar figura", instrucao:"Toque nos pontos em ordem para revelar a figura." },
  "labirinto-precisao": { slug:"labirinto-precisao", nome:"Labirinto de Precisão", emoji:"🟢", grupo:"Coordenação Motor-Escrita", cor:"from-success/25 to-success/5", objetivo:"Arraste fino sem encostar nas paredes", instrucao:"Arraste a bolinha até o final sem tocar as bordas." },

  // Jogos Clínicos Cognitivos
  "triagem-categorias": { slug:"triagem-categorias", nome:"Triagem de Categorias", emoji:"🗂️", grupo:"Jogos Clínicos Cognitivos", cor:"from-lilac/25 to-primary/5", objetivo:"Categorização e flexibilidade cognitiva", instrucao:"Arraste cada item para a caixa certa." },
  "expressao-emocao": { slug:"expressao-emocao", nome:"Expressão e Emoção", emoji:"😊", grupo:"Jogos Clínicos Cognitivos", cor:"from-lilac/25 to-primary/5", objetivo:"Pareamento emoção × situação social", instrucao:"Escolha o rosto que combina com a cena." },
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

// ===================== NOVAS CATEGORIAS =====================

// 16. ONOMATOPEIAS ANIMADAS — som → escolher figura (mecânica única: emissor de som textual + opções visuais grandes)
const ONOMA_BANK = [
  { som:"Au-au!", correta:{emoji:"🐶",nome:"Cachorro"}, distratoras:[{emoji:"🐱",nome:"Gato"},{emoji:"🐮",nome:"Vaca"}] },
  { som:"Muuu!", correta:{emoji:"🐮",nome:"Vaca"}, distratoras:[{emoji:"🐷",nome:"Porco"},{emoji:"🐔",nome:"Galinha"}] },
  { som:"Bi-bi!", correta:{emoji:"🚗",nome:"Carro"}, distratoras:[{emoji:"🚲",nome:"Bike"},{emoji:"✈️",nome:"Avião"}] },
  { som:"Miau!", correta:{emoji:"🐱",nome:"Gato"}, distratoras:[{emoji:"🐶",nome:"Cachorro"},{emoji:"🐭",nome:"Rato"}] },
  { som:"Quá-quá!", correta:{emoji:"🦆",nome:"Pato"}, distratoras:[{emoji:"🐦",nome:"Pássaro"},{emoji:"🦉",nome:"Coruja"}] },
  { som:"Có-có-có!", correta:{emoji:"🐔",nome:"Galinha"}, distratoras:[{emoji:"🦆",nome:"Pato"},{emoji:"🐓",nome:"Galo"}] },
  { som:"Oinc-oinc!", correta:{emoji:"🐷",nome:"Porco"}, distratoras:[{emoji:"🐮",nome:"Vaca"},{emoji:"🐶",nome:"Cachorro"}] },
  { som:"Bééé!", correta:{emoji:"🐑",nome:"Ovelha"}, distratoras:[{emoji:"🐐",nome:"Cabra"},{emoji:"🐮",nome:"Vaca"}] },
  { som:"Mééé!", correta:{emoji:"🐐",nome:"Cabra"}, distratoras:[{emoji:"🐑",nome:"Ovelha"},{emoji:"🐷",nome:"Porco"}] },
  { som:"Pi-pi!", correta:{emoji:"🐥",nome:"Pintinho"}, distratoras:[{emoji:"🐔",nome:"Galinha"},{emoji:"🦆",nome:"Pato"}] },
];
const ONOMA_VARS: Variation[] = range(30).map((i) => {
  const b = ONOMA_BANK[i % ONOMA_BANK.length];
  const opts = [b.correta, ...b.distratoras].sort(() => (i % 2 === 0 ? -1 : 1));
  return { id:`on-${i+1}`, payload:{ som:b.som, options:opts, correctName:b.correta.nome } };
});

// 17. RITMO E SOPRO VISUAL — esticar vogal conforme tamanho da linha (mecânica única: barra de comprimento)
const SOPRO_BANK = [
  { silaba:"Vruuum", vogal:"U", veiculo:"🚗" },
  { silaba:"Tchuu",  vogal:"U", veiculo:"🚂" },
  { silaba:"Brmm",   vogal:"M", veiculo:"🏍️" },
  { silaba:"Fiuuu",  vogal:"U", veiculo:"🎈" },
  { silaba:"Shhh",   vogal:"H", veiculo:"💨" },
  { silaba:"Iaaaa",  vogal:"A", veiculo:"🚑" },
];
const SOPRO_VARS: Variation[] = range(30).map((i) => {
  const b = SOPRO_BANK[i % SOPRO_BANK.length];
  const tamanho = 30 + (i % 6) * 15; // 30,45,60,75,90,105
  return { id:`rs-${i+1}`, payload:{ ...b, tamanho, holdSeconds: Math.max(1.5, tamanho / 30) } };
});

// 18. SONS DO CORPO / PAROMATOPEIAS — som → ação correta
const CORPO_BANK = [
  { som:"Atchim!", correta:"😤 Espirrar", opts:["😴 Dormir","🍽️ Comer"] },
  { som:"Nhac!",   correta:"🍎 Morder",  opts:["💧 Beber","👋 Acenar"] },
  { som:"Glub-glub!", correta:"💧 Beber", opts:["😤 Espirrar","🍎 Morder"] },
  { som:"Hum-hum!", correta:"😋 Saborear", opts:["😴 Dormir","🤧 Tossir"] },
  { som:"Cof-cof!", correta:"🤧 Tossir", opts:["😤 Espirrar","💧 Beber"] },
  { som:"Zzzz...", correta:"😴 Dormir", opts:["🏃 Correr","🍎 Morder"] },
  { som:"Toc-toc!", correta:"🚪 Bater na porta", opts:["👋 Acenar","🍽️ Comer"] },
  { som:"Plaft!",   correta:"👏 Bater palma", opts:["🦶 Pisar","🚪 Bater na porta"] },
];
const CORPO_VARS: Variation[] = range(30).map((i) => {
  const b = CORPO_BANK[i % CORPO_BANK.length];
  const opts = [b.correta, ...b.opts].sort(() => (i % 2 ? -1 : 1));
  return { id:`pc-${i+1}`, payload:{ som:b.som, opts, correta:b.correta } };
});

// 19. TRAÇADO DE LETRAS — sequência de setas numeradas (mecânica única: tocar setas em ordem)
const TRACADO_BANK = [
  { letra:"A", passos:["⬇️","↗️","➡️"] },
  { letra:"L", passos:["⬇️","➡️"] },
  { letra:"T", passos:["➡️","⬇️"] },
  { letra:"I", passos:["⬇️"] },
  { letra:"O", passos:["↪️","↩️","⤴️"] },
  { letra:"E", passos:["⬇️","➡️","➡️","➡️"] },
  { letra:"H", passos:["⬇️","⬇️","➡️"] },
  { letra:"F", passos:["⬇️","➡️","➡️"] },
  { letra:"V", passos:["↘️","↗️"] },
  { letra:"M", passos:["⬆️","↘️","↗️","⬇️"] },
];
const TRACADO_VARS: Variation[] = range(30).map((i) => {
  const b = TRACADO_BANK[i % TRACADO_BANK.length];
  return { id:`tl-${i+1}`, payload:{ letra:b.letra, passos:b.passos } };
});

// 20. CAMINHO DOS PONTOS — unir pontos numerados (mecânica única: ordem crescente em coords)
const CAMINHO_BANK = [
  { figura:"Estrela ⭐", pontos:[{x:50,y:10},{x:60,y:40},{x:90,y:40},{x:65,y:60},{x:75,y:90},{x:50,y:70},{x:25,y:90},{x:35,y:60},{x:10,y:40},{x:40,y:40}] },
  { figura:"Casa 🏠", pontos:[{x:20,y:80},{x:20,y:40},{x:50,y:15},{x:80,y:40},{x:80,y:80}] },
  { figura:"Coração ❤️", pontos:[{x:50,y:85},{x:15,y:50},{x:25,y:20},{x:50,y:40},{x:75,y:20},{x:85,y:50}] },
  { figura:"Peixe 🐟", pontos:[{x:15,y:50},{x:40,y:25},{x:75,y:25},{x:85,y:50},{x:75,y:75},{x:40,y:75}] },
  { figura:"Lua 🌙", pontos:[{x:60,y:15},{x:30,y:35},{x:25,y:60},{x:45,y:80},{x:70,y:75}] },
  { figura:"Barco ⛵", pontos:[{x:50,y:15},{x:50,y:60},{x:15,y:60},{x:85,y:60},{x:20,y:80},{x:80,y:80}] },
];
const CAMINHO_VARS: Variation[] = range(30).map((i) => ({ id:`cp-${i+1}`, payload: CAMINHO_BANK[i % CAMINHO_BANK.length] }));

// 21. LABIRINTO DE PRECISÃO — arrastar bolinha em corredor estreito
const LABPRE_BANK = [
  { tema:"Verde 🌿", segmentos:[{x:10,y:50,w:30,h:14},{x:35,y:20,w:14,h:44},{x:35,y:20,w:55,h:14},{x:78,y:20,w:14,h:60}] },
  { tema:"Azul 💧",  segmentos:[{x:10,y:20,w:14,h:60},{x:10,y:66,w:80,h:14},{x:76,y:20,w:14,h:60}] },
  { tema:"Roxo 🔮",  segmentos:[{x:10,y:40,w:80,h:14},{x:10,y:40,w:14,h:40},{x:76,y:40,w:14,h:40},{x:10,y:66,w:80,h:14}] },
  { tema:"Sol ☀️",   segmentos:[{x:10,y:20,w:80,h:14},{x:76,y:20,w:14,h:60},{x:10,y:66,w:80,h:14}] },
  { tema:"Mar 🌊",   segmentos:[{x:10,y:30,w:30,h:14},{x:35,y:30,w:14,h:30},{x:35,y:50,w:30,h:14},{x:60,y:50,w:14,h:30},{x:60,y:66,w:30,h:14}] },
];
const LABPRE_VARS: Variation[] = range(30).map((i) => ({ id:`lp-${i+1}`, payload: LABPRE_BANK[i % LABPRE_BANK.length] }));

// 22. TRIAGEM DE CATEGORIAS — arrastar itens para caixas corretas
const TRIAGEM_BANK = [
  { caixas:[{nome:"Animais", emoji:"🐾"},{nome:"Transportes", emoji:"🚗"}], itens:[{e:"🐱",cat:"Animais"},{e:"🚂",cat:"Transportes"},{e:"🐶",cat:"Animais"},{e:"✈️",cat:"Transportes"},{e:"🐰",cat:"Animais"},{e:"🚌",cat:"Transportes"}] },
  { caixas:[{nome:"Frutas", emoji:"🍎"},{nome:"Verduras", emoji:"🥬"}], itens:[{e:"🍎",cat:"Frutas"},{e:"🥦",cat:"Verduras"},{e:"🍌",cat:"Frutas"},{e:"🥕",cat:"Verduras"},{e:"🍇",cat:"Frutas"},{e:"🥒",cat:"Verduras"}] },
  { caixas:[{nome:"Roupas", emoji:"👕"},{nome:"Brinquedos", emoji:"🧸"}], itens:[{e:"👕",cat:"Roupas"},{e:"🧸",cat:"Brinquedos"},{e:"👖",cat:"Roupas"},{e:"🎲",cat:"Brinquedos"},{e:"🧦",cat:"Roupas"},{e:"⚽",cat:"Brinquedos"}] },
  { caixas:[{nome:"Céu", emoji:"☁️"},{nome:"Mar", emoji:"🌊"}], itens:[{e:"☀️",cat:"Céu"},{e:"🐠",cat:"Mar"},{e:"🌙",cat:"Céu"},{e:"🐙",cat:"Mar"},{e:"⭐",cat:"Céu"},{e:"🦀",cat:"Mar"}] },
  { caixas:[{nome:"Quente", emoji:"🔥"},{nome:"Frio", emoji:"❄️"}], itens:[{e:"☀️",cat:"Quente"},{e:"⛄",cat:"Frio"},{e:"🌶️",cat:"Quente"},{e:"🧊",cat:"Frio"},{e:"🔥",cat:"Quente"},{e:"❄️",cat:"Frio"}] },
];
const TRIAGEM_VARS: Variation[] = range(30).map((i) => ({ id:`tc-${i+1}`, payload: TRIAGEM_BANK[i % TRIAGEM_BANK.length] }));

// 23. EXPRESSÃO E EMOÇÃO — pareamento rosto × situação
const EMOCAO_BANK = [
  { cena:"Ganhou um presente 🎁", correta:"😄 Feliz", opts:["😢 Triste","😡 Bravo"] },
  { cena:"Quebrou o brinquedo 💔", correta:"😢 Triste", opts:["😄 Feliz","😲 Surpreso"] },
  { cena:"Alguém pegou seu lanche", correta:"😡 Bravo", opts:["😄 Feliz","😨 Medo"] },
  { cena:"Viu uma surpresa atrás da porta", correta:"😲 Surpreso", opts:["😴 Sono","😢 Triste"] },
  { cena:"Está sozinho no escuro", correta:"😨 Medo", opts:["😄 Feliz","😡 Bravo"] },
  { cena:"Ganhou abraço da família 🤗", correta:"😄 Feliz", opts:["😨 Medo","😡 Bravo"] },
  { cena:"Perdeu o cachorrinho", correta:"😢 Triste", opts:["😲 Surpreso","😄 Feliz"] },
  { cena:"Acordou cedo demais", correta:"😴 Sono", opts:["😄 Feliz","😲 Surpreso"] },
];
const EMOCAO_VARS: Variation[] = range(30).map((i) => {
  const b = EMOCAO_BANK[i % EMOCAO_BANK.length];
  const opts = [b.correta, ...b.opts].sort(() => (i % 2 ? -1 : 1));
  return { id:`ee-${i+1}`, payload:{ cena:b.cena, opts, correta:b.correta } };
});

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
  "onomatopeias-animadas": ONOMA_VARS,
  "ritmo-e-sopro": SOPRO_VARS,
  "paromatopeias-corpo": CORPO_VARS,
  "tracado-letras": TRACADO_VARS,
  "caminho-dos-pontos": CAMINHO_VARS,
  "labirinto-precisao": LABPRE_VARS,
  "triagem-categorias": TRIAGEM_VARS,
  "expressao-emocao": EMOCAO_VARS,
};

export const GRUPOS = [
  { nome:"Fala e Som", emoji:"🗣️", cor:"from-coral/25 to-coral/5", slugs:["sons-iniciais","motorzinho-dos-sons","rimas","pedacinhos-da-palavra"] as CategoriaSlug[] },
  { nome:"Fono & Onomatopeias", emoji:"🐮", cor:"from-sun/25 to-coral/5", slugs:["onomatopeias-animadas","ritmo-e-sopro","paromatopeias-corpo"] as CategoriaSlug[] },
  { nome:"Coordenação Motor-Escrita", emoji:"✍️", cor:"from-success/25 to-success/5", slugs:["tracado-letras","caminho-dos-pontos","labirinto-precisao"] as CategoriaSlug[] },
  { nome:"Funções Executivas", emoji:"🧠", cor:"from-primary/20 to-primary/5", slugs:["onde-esta","sequencia-e-padrao","cade-o-par","foco-total","labirinto-do-som"] as CategoriaSlug[] },
  { nome:"Jogos Clínicos Cognitivos", emoji:"🗂️", cor:"from-lilac/25 to-primary/5", slugs:["triagem-categorias","expressao-emocao"] as CategoriaSlug[] },
  { nome:"Atenção Avançada", emoji:"👁️", cor:"from-sky/30 to-sky/5", slugs:["foco-sustentado","rastreamento-sacadico"] as CategoriaSlug[] },
  { nome:"Oficina Criativa", emoji:"🎨", cor:"from-lilac/30 to-lilac/5", slugs:["mosaico-de-formas","sequencia-de-cores","simetria","decoracao-criativa"] as CategoriaSlug[] },
];
