// Banco de histórias graduadas com metadata pedagógica.
// - nivel: 1..6 (dificuldade do texto)
// - foneticos: grafemas/fonemas principais do texto (usado para alinhar
//   com a fase da trilha — DECODABLE TEXTS, Systematic Phonics do NRP).
// - etapaAlinhada: etapa da trilha em que a história é mais útil
//   (usado para ordenar a biblioteca por relevância clínica).
// - perguntas: agora com TIPO (literal/inferência/sequência/causa/vocab)
//   e MODO (imagem/texto). Pergunta baseada em imagem óbvia é ruim
//   pedagogicamente — passamos a mesclar imagem em N1-N2 e texto em N3+.

import { ETAPAS } from "./etapas";

export type NivelLeitor = 1 | 2 | 3 | 4 | 5 | 6;

export interface PaginaHistoria {
  texto: string;
  imagem: string;
}

export type TipoPergunta =
  | "literal"       // Resposta explícita no texto
  | "inferencia"    // Resposta implícita (o leitor precisa deduzir)
  | "sequencia"     // Ordem dos eventos
  | "causa"         // Por que algo aconteceu
  | "vocabulario";  // Significado de palavra do texto

export type ModoOpcoes = "imagem" | "texto";

export interface PerguntaHistoria {
  pergunta: string;
  tipo?: TipoPergunta;     // default: "literal"
  modo?: ModoOpcoes;       // default: "imagem"
  correta: string;
  distratores: string[];
}

export interface HistoriaGraduada {
  id: string;
  titulo: string;
  nivel: NivelLeitor;
  capa: string;
  vocabBase: string[];
  foneticos: string[];         // ex: ["S","A","P","O"] ou ["nh","lh","ch"]
  etapaAlinhada: string;       // id de ETAPAS
  paginas: PaginaHistoria[];
  perguntas: PerguntaHistoria[];
}

export const HISTORIAS_GRADUADAS: HistoriaGraduada[] = [
  // ============ NÍVEL 1 — Vogais / Sílabas simples CV ============
  {
    id: "h1-sol",
    titulo: "O Sol",
    nivel: 1,
    capa: "SOL",
    vocabBase: ["SOL", "LUA"],
    foneticos: ["S", "O", "L", "U", "A"],
    etapaAlinhada: "vogais",
    paginas: [
      { texto: "O sol é amarelo.", imagem: "SOL" },
      { texto: "O sol brilha forte.", imagem: "SOL" },
      { texto: "À noite, vem a lua.", imagem: "LUA" },
    ],
    perguntas: [
      {
        pergunta: "Qual é a cor do sol na história?",
        tipo: "literal",
        modo: "texto",
        correta: "amarelo",
        distratores: ["azul", "verde"],
      },
      {
        pergunta: "Quem aparece à noite?",
        tipo: "literal",
        modo: "imagem",
        correta: "LUA",
        distratores: ["SOL", "CHUVA"],
      },
    ],
  },
  {
    id: "h1-bola",
    titulo: "A Bola",
    nivel: 1,
    capa: "BOLA",
    vocabBase: ["BOLA", "GATO"],
    foneticos: ["B", "O", "L", "A", "G", "T"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "Olha a bola!", imagem: "BOLA" },
      { texto: "O gato pega a bola.", imagem: "GATO" },
    ],
    perguntas: [
      {
        pergunta: "Quem pega a bola?",
        tipo: "literal",
        modo: "imagem",
        correta: "GATO",
        distratores: ["PATO", "RATO"],
      },
    ],
  },
  {
    id: "h1-lua",
    titulo: "A Lua Cheia",
    nivel: 1,
    capa: "LUA",
    vocabBase: ["LUA", "SOL"],
    foneticos: ["L", "U", "A", "S", "O"],
    etapaAlinhada: "vogais",
    paginas: [
      { texto: "A lua acende no céu.", imagem: "LUA" },
      { texto: "Ela é redonda e branca.", imagem: "LUA" },
      { texto: "De dia, quem manda é o sol.", imagem: "SOL" },
    ],
    perguntas: [
      {
        pergunta: "Como é a lua?",
        tipo: "literal",
        modo: "texto",
        correta: "redonda e branca",
        distratores: ["quadrada e preta", "pequena e vermelha"],
      },
    ],
  },
  {
    id: "h1-uva",
    titulo: "Uva Docinha",
    nivel: 1,
    capa: "UVA",
    vocabBase: ["UVA", "BANANA"],
    foneticos: ["U", "V", "A", "B", "N"],
    etapaAlinhada: "vogais",
    paginas: [
      { texto: "A uva é pequena.", imagem: "UVA" },
      { texto: "A banana é longa.", imagem: "BANANA" },
      { texto: "Duas frutas gostosas!", imagem: "UVA" },
    ],
    perguntas: [
      {
        pergunta: "Qual fruta é longa?",
        tipo: "literal",
        modo: "imagem",
        correta: "BANANA",
        distratores: ["UVA", "MACA"],
      },
    ],
  },

  // ============ NÍVEL 2 — Sílabas simples encadeadas ============
  {
    id: "h2-pato",
    titulo: "O Pato no Lago",
    nivel: 2,
    capa: "PATO",
    vocabBase: ["PATO", "PEIXE"],
    foneticos: ["P", "A", "T", "O", "L", "G"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O pato nada no lago.", imagem: "PATO" },
      { texto: "Ele vê um peixe pequeno.", imagem: "PEIXE" },
      { texto: "O pato fica feliz.", imagem: "PATO" },
    ],
    perguntas: [
      {
        pergunta: "Como está o peixe que o pato viu?",
        tipo: "literal",
        modo: "texto",
        correta: "pequeno",
        distratores: ["gigante", "morto"],
      },
      {
        pergunta: "Como o pato ficou no final?",
        tipo: "inferencia",
        modo: "texto",
        correta: "feliz",
        distratores: ["com medo", "com fome"],
      },
    ],
  },
  {
    id: "h2-gato",
    titulo: "O Gato e o Rato",
    nivel: 2,
    capa: "GATO",
    vocabBase: ["GATO", "RATO"],
    foneticos: ["G", "T", "R", "A", "O"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O gato corre.", imagem: "GATO" },
      { texto: "O rato corre mais.", imagem: "RATO" },
      { texto: "O rato escapa!", imagem: "RATO" },
    ],
    perguntas: [
      {
        pergunta: "Quem corre mais rápido?",
        tipo: "literal",
        modo: "imagem",
        correta: "RATO",
        distratores: ["GATO", "PATO"],
      },
      {
        pergunta: "Por que o rato escapou?",
        tipo: "causa",
        modo: "texto",
        correta: "porque corre mais rápido",
        distratores: ["porque estava dormindo", "porque o gato desistiu"],
      },
    ],
  },
  {
    id: "h2-sapo",
    titulo: "O Sapo Pulão",
    nivel: 2,
    capa: "SAPO",
    vocabBase: ["SAPO", "FLOR", "CHUVA"],
    foneticos: ["S", "A", "P", "O", "F", "L", "R"],
    etapaAlinhada: "som-inicial",
    paginas: [
      { texto: "O sapo mora perto do rio.", imagem: "SAPO" },
      { texto: "Ele pula na flor mais bonita.", imagem: "FLOR" },
      { texto: "Quando vem a chuva, ele canta.", imagem: "CHUVA" },
    ],
    perguntas: [
      {
        pergunta: "Em que o sapo pula?",
        tipo: "literal",
        modo: "texto",
        correta: "na flor mais bonita",
        distratores: ["numa pedra grande", "no telhado"],
      },
      {
        pergunta: "Quando o sapo canta?",
        tipo: "literal",
        modo: "texto",
        correta: "quando vem a chuva",
        distratores: ["quando faz sol", "à meia-noite"],
      },
    ],
  },
  {
    id: "h2-galo",
    titulo: "O Galo Madrugador",
    nivel: 2,
    capa: "GALO",
    vocabBase: ["GALO", "SOL", "GALINHA"],
    foneticos: ["G", "L", "A", "O", "S"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O galo canta bem cedo.", imagem: "GALO" },
      { texto: "O sol começa a aparecer.", imagem: "SOL" },
      { texto: "A galinha vem atrás.", imagem: "GALINHA" },
    ],
    perguntas: [
      {
        pergunta: "Quem canta primeiro?",
        tipo: "sequencia",
        modo: "imagem",
        correta: "GALO",
        distratores: ["GALINHA", "PATO"],
      },
      {
        pergunta: "Quem aparece depois do galo cantar?",
        tipo: "sequencia",
        modo: "texto",
        correta: "o sol",
        distratores: ["a lua", "a chuva"],
      },
    ],
  },

  // ============ NÍVEL 3 — Palavras 2-3 sílabas, dígrafos leves ============
  {
    id: "h3-abelha",
    titulo: "A Abelha da Flor",
    nivel: 3,
    capa: "ABELHA",
    vocabBase: ["ABELHA", "FLOR", "BORBOLETA"],
    foneticos: ["lh", "B", "F", "R"],
    etapaAlinhada: "palavras",
    paginas: [
      { texto: "A abelha voa de flor em flor.", imagem: "ABELHA" },
      { texto: "Ela faz mel bem docinho.", imagem: "FLOR" },
      { texto: "A borboleta passa voando perto.", imagem: "BORBOLETA" },
    ],
    perguntas: [
      {
        pergunta: "O que a abelha produz?",
        tipo: "literal",
        modo: "texto",
        correta: "mel docinho",
        distratores: ["queijo", "suco de laranja"],
      },
      {
        pergunta: "Quem passou voando perto da abelha?",
        tipo: "literal",
        modo: "imagem",
        correta: "BORBOLETA",
        distratores: ["PASSARO", "CORUJA"],
      },
    ],
  },
  {
    id: "h3-cachorro",
    titulo: "O Cachorro Brincalhão",
    nivel: 3,
    capa: "CACHORRO",
    vocabBase: ["CACHORRO", "BOLA", "GATO"],
    foneticos: ["ch", "rr", "B", "G"],
    etapaAlinhada: "palavras",
    paginas: [
      { texto: "O cachorro adora brincar.", imagem: "CACHORRO" },
      { texto: "Ele corre atrás da bola.", imagem: "BOLA" },
      { texto: "O gato olha de longe.", imagem: "GATO" },
    ],
    perguntas: [
      {
        pergunta: "Por que o gato olha de longe?",
        tipo: "inferencia",
        modo: "texto",
        correta: "porque não quer brincar de correr",
        distratores: ["porque está dormindo", "porque tem fome"],
      },
      {
        pergunta: "Atrás do que o cachorro corre?",
        tipo: "literal",
        modo: "imagem",
        correta: "BOLA",
        distratores: ["GATO", "FLOR"],
      },
    ],
  },
  {
    id: "h3-fada",
    titulo: "A Fada e o Castelo",
    nivel: 3,
    capa: "FADA",
    vocabBase: ["FADA", "CASTELO", "COROA"],
    foneticos: ["F", "C", "R"],
    etapaAlinhada: "palavras",
    paginas: [
      { texto: "A fada mora num castelo.", imagem: "CASTELO" },
      { texto: "Ela tem uma coroa brilhante.", imagem: "COROA" },
      { texto: "Todo dia ela faz mágica.", imagem: "FADA" },
    ],
    perguntas: [
      {
        pergunta: "O que significa 'brilhante' na história?",
        tipo: "vocabulario",
        modo: "texto",
        correta: "que reflete luz",
        distratores: ["que é pesada", "que é quebrada"],
      },
      {
        pergunta: "Com que frequência ela faz mágica?",
        tipo: "literal",
        modo: "texto",
        correta: "todo dia",
        distratores: ["uma vez por ano", "só à noite"],
      },
    ],
  },
  {
    id: "h3-esquilo",
    titulo: "O Esquilo Guardão",
    nivel: 3,
    capa: "ESQUILO",
    vocabBase: ["ESQUILO", "ARVORE", "CENOURA"],
    foneticos: ["qu", "rv", "sq"],
    etapaAlinhada: "fonemas",
    paginas: [
      { texto: "O esquilo sobe na árvore.", imagem: "ESQUILO" },
      { texto: "Ele esconde comida no tronco.", imagem: "ARVORE" },
      { texto: "No inverno, ele come devagar.", imagem: "ESQUILO" },
    ],
    perguntas: [
      {
        pergunta: "Por que o esquilo esconde comida no tronco?",
        tipo: "inferencia",
        modo: "texto",
        correta: "para ter comida no inverno",
        distratores: ["porque não gosta dela", "porque perdeu a fome"],
      },
      {
        pergunta: "Como o esquilo come no inverno?",
        tipo: "literal",
        modo: "texto",
        correta: "devagar",
        distratores: ["muito rápido", "só de olhos fechados"],
      },
    ],
  },

  // ============ NÍVEL 4 — Narrativa com conectivos ============
  {
    id: "h4-coelho",
    titulo: "O Coelho e a Cenoura",
    nivel: 4,
    capa: "COELHO",
    vocabBase: ["COELHO", "CENOURA", "RAPOSA"],
    foneticos: ["lh", "nh", "rr"],
    etapaAlinhada: "frases",
    paginas: [
      { texto: "Era uma vez um coelho que adorava cenoura.", imagem: "COELHO" },
      { texto: "Todo dia ele ia ao jardim buscar uma fresquinha.", imagem: "CENOURA" },
      { texto: "Mas a raposa também queria a cenoura.", imagem: "RAPOSA" },
      { texto: "O coelho foi mais rápido e levou tudo!", imagem: "COELHO" },
    ],
    perguntas: [
      {
        pergunta: "Por que a raposa não pegou a cenoura?",
        tipo: "causa",
        modo: "texto",
        correta: "porque o coelho foi mais rápido",
        distratores: ["porque desistiu", "porque não tinha fome"],
      },
      {
        pergunta: "Onde o coelho buscava cenoura?",
        tipo: "literal",
        modo: "texto",
        correta: "no jardim",
        distratores: ["na cozinha", "no supermercado"],
      },
      {
        pergunta: "O que 'fresquinha' quer dizer aqui?",
        tipo: "vocabulario",
        modo: "texto",
        correta: "acabada de colher",
        distratores: ["muito velha", "cozida"],
      },
    ],
  },
  {
    id: "h4-elefante",
    titulo: "O Elefante Amigo",
    nivel: 4,
    capa: "ELEFANTE",
    vocabBase: ["ELEFANTE", "AGUA", "CHUVA"],
    foneticos: ["ch", "nt", "gu"],
    etapaAlinhada: "frases",
    paginas: [
      { texto: "Era uma vez um elefante enorme.", imagem: "ELEFANTE" },
      { texto: "Ele adorava tomar banho de rio.", imagem: "CHUVA" },
      { texto: "Todos os bichos gostavam de brincar com ele.", imagem: "ELEFANTE" },
      { texto: "Ele espirrava água pra todo lado.", imagem: "CHUVA" },
    ],
    perguntas: [
      {
        pergunta: "Por que os outros bichos gostavam do elefante?",
        tipo: "inferencia",
        modo: "texto",
        correta: "porque ele era divertido e amigo",
        distratores: ["porque tinha medo dele", "porque era pequeno"],
      },
      {
        pergunta: "O que o elefante espirrava?",
        tipo: "literal",
        modo: "texto",
        correta: "água",
        distratores: ["areia", "folhas"],
      },
    ],
  },
  {
    id: "h4-princesa",
    titulo: "A Princesa e a Coruja",
    nivel: 4,
    capa: "PRINCESA",
    vocabBase: ["PRINCESA", "CORUJA", "CASTELO"],
    foneticos: ["pr", "ja", "st"],
    etapaAlinhada: "frases",
    paginas: [
      { texto: "A princesa vivia num castelo alto.", imagem: "CASTELO" },
      { texto: "Toda noite, uma coruja pousava na janela.", imagem: "CORUJA" },
      { texto: "As duas conversavam até o sol nascer.", imagem: "PRINCESA" },
      { texto: "Elas viraram grandes amigas.", imagem: "CORUJA" },
    ],
    perguntas: [
      {
        pergunta: "Até que hora as duas conversavam?",
        tipo: "literal",
        modo: "texto",
        correta: "até o sol nascer",
        distratores: ["até a meia-noite", "por uns cinco minutos"],
      },
      {
        pergunta: "O que aconteceu no fim da história?",
        tipo: "sequencia",
        modo: "texto",
        correta: "elas viraram grandes amigas",
        distratores: ["a coruja foi embora para sempre", "a princesa fugiu do castelo"],
      },
    ],
  },

  // ============ NÍVEL 5 — Narrativa com moral ============
  {
    id: "h5-leao",
    titulo: "O Leão e o Ratinho",
    nivel: 5,
    capa: "LEAO",
    vocabBase: ["LEAO", "RATO"],
    foneticos: ["ão", "lh", "rr"],
    etapaAlinhada: "textos",
    paginas: [
      { texto: "Na floresta vivia um leão muito forte.", imagem: "LEAO" },
      { texto: "Um dia, ele pegou um ratinho pequenininho.", imagem: "RATO" },
      { texto: "O rato pediu pra ser solto, e o leão soltou.", imagem: "LEAO" },
      { texto: "Mais tarde, o leão caiu numa armadilha.", imagem: "LEAO" },
      { texto: "O ratinho veio e roeu as cordas, salvando o amigo.", imagem: "RATO" },
    ],
    perguntas: [
      {
        pergunta: "O que o rato fez para salvar o leão?",
        tipo: "literal",
        modo: "texto",
        correta: "roeu as cordas da armadilha",
        distratores: ["chamou os caçadores", "cavou um buraco no chão"],
      },
      {
        pergunta: "Qual é a lição da história?",
        tipo: "inferencia",
        modo: "texto",
        correta: "até quem é pequeno pode ajudar",
        distratores: ["leões são sempre maus", "não faça amigos"],
      },
      {
        pergunta: "O que aconteceu ANTES do leão cair na armadilha?",
        tipo: "sequencia",
        modo: "texto",
        correta: "ele soltou o ratinho",
        distratores: ["ele comeu o ratinho", "ele fugiu da floresta"],
      },
    ],
  },
  {
    id: "h5-tartaruga",
    titulo: "A Tartaruga e o Cavalo",
    nivel: 5,
    capa: "TARTARUGA",
    vocabBase: ["TARTARUGA", "CAVALO", "FLOR"],
    foneticos: ["rt", "gu", "lh"],
    etapaAlinhada: "textos",
    paginas: [
      { texto: "Um cavalo veloz zombou da tartaruga lenta.", imagem: "CAVALO" },
      { texto: "Ela propôs uma corrida até a flor mais distante.", imagem: "FLOR" },
      { texto: "O cavalo saiu disparado e cansou no meio do caminho.", imagem: "CAVALO" },
      { texto: "A tartaruga continuou devagar, passo a passo.", imagem: "TARTARUGA" },
      { texto: "No final, quem ganhou foi a tartaruga.", imagem: "TARTARUGA" },
    ],
    perguntas: [
      {
        pergunta: "Por que o cavalo perdeu a corrida?",
        tipo: "causa",
        modo: "texto",
        correta: "porque cansou no meio do caminho",
        distratores: ["porque a tartaruga trapaceou", "porque a corrida foi cancelada"],
      },
      {
        pergunta: "O que 'zombou' quer dizer aqui?",
        tipo: "vocabulario",
        modo: "texto",
        correta: "riu dela de forma debochada",
        distratores: ["ajudou com carinho", "ficou com medo"],
      },
      {
        pergunta: "Qual é a moral da história?",
        tipo: "inferencia",
        modo: "texto",
        correta: "devagar e sempre também vence",
        distratores: ["nunca aceite desafios", "só os fortes vencem"],
      },
    ],
  },

  // ============ NÍVEL 6 — Inferência, múltiplas informações ============
  {
    id: "h6-borboleta",
    titulo: "A Borboleta Curiosa",
    nivel: 6,
    capa: "BORBOLETA",
    vocabBase: ["BORBOLETA", "FLOR", "ABELHA", "SOL"],
    foneticos: ["rb", "lh", "ão"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Era uma manhã ensolarada no jardim.", imagem: "SOL" },
      { texto: "Uma borboleta curiosa voava de flor em flor.", imagem: "BORBOLETA" },
      { texto: "Ela queria descobrir qual flor tinha o néctar mais doce.", imagem: "FLOR" },
      { texto: "Uma abelha amiga ofereceu ajuda na busca.", imagem: "ABELHA" },
      { texto: "Juntas, elas visitaram cada cantinho do jardim.", imagem: "FLOR" },
      { texto: "No final, descobriram que cada flor tinha um sabor especial.", imagem: "BORBOLETA" },
    ],
    perguntas: [
      {
        pergunta: "O que a borboleta descobriu no final?",
        tipo: "inferencia",
        modo: "texto",
        correta: "que cada flor tem um sabor especial",
        distratores: ["que só uma flor tem néctar bom", "que o jardim é vazio"],
      },
      {
        pergunta: "Por que a abelha ajudou a borboleta?",
        tipo: "causa",
        modo: "texto",
        correta: "porque eram amigas",
        distratores: ["porque queria roubar o néctar", "porque estava perdida"],
      },
      {
        pergunta: "O que 'ensolarada' quer dizer?",
        tipo: "vocabulario",
        modo: "texto",
        correta: "com muito sol",
        distratores: ["com muita chuva", "com muito vento"],
      },
    ],
  },
  {
    id: "h6-foguete",
    titulo: "O Foguete e a Lua",
    nivel: 6,
    capa: "FOGUETE",
    vocabBase: ["FOGUETE", "LUA", "PLANETA", "ESTRELA"],
    foneticos: ["fg", "pl", "st"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Era uma noite escura e cheia de estrelas.", imagem: "ESTRELA" },
      { texto: "Um foguete pequeno decidiu visitar a lua.", imagem: "FOGUETE" },
      { texto: "Pelo caminho, encontrou planetas coloridos e cometas curiosos.", imagem: "PLANETA" },
      { texto: "A lua abriu um sorriso quando o viu chegar.", imagem: "LUA" },
      { texto: "Eles conversaram sobre tudo que existia no céu.", imagem: "ESTRELA" },
      { texto: "No fim, o foguete prometeu voltar toda semana.", imagem: "FOGUETE" },
    ],
    perguntas: [
      {
        pergunta: "O que o foguete prometeu no final?",
        tipo: "literal",
        modo: "texto",
        correta: "voltar toda semana",
        distratores: ["nunca mais voltar", "levar a lua embora"],
      },
      {
        pergunta: "Por que a lua sorriu quando viu o foguete?",
        tipo: "inferencia",
        modo: "texto",
        correta: "porque ficou feliz com a visita",
        distratores: ["porque teve medo dele", "porque queria ir embora"],
      },
      {
        pergunta: "Coloque na ordem: o foguete PRIMEIRO...",
        tipo: "sequencia",
        modo: "texto",
        correta: "encontrou planetas, depois chegou na lua",
        distratores: ["chegou na lua, depois encontrou planetas", "prometeu voltar, depois saiu"],
      },
    ],
  },
];

/* ================= Nível leitor e disponibilidade ================= */

// Calcula nível leitor a partir do progresso da trilha (etapas concluídas)
export function calcularNivelLeitor(progresso: Record<string, number>): NivelLeitor {
  let nivel: NivelLeitor = 1;
  for (const etapa of ETAPAS) {
    if ((progresso[etapa.id] ?? 0) >= etapa.alvo) {
      nivel = Math.min(6, etapa.ordem + 1) as NivelLeitor;
    } else {
      break;
    }
  }
  return nivel;
}

// Identifica a etapa ATIVA da criança (primeira não completada)
export function etapaAtiva(progresso: Record<string, number>): string {
  for (const etapa of ETAPAS) {
    if ((progresso[etapa.id] ?? 0) < etapa.alvo) return etapa.id;
  }
  return "compreensao"; // completou tudo
}

export function historiasParaNivel(nivel: NivelLeitor): HistoriaGraduada[] {
  return HISTORIAS_GRADUADAS.filter((h) => h.nivel <= nivel);
}

// Ordena as histórias por relevância clínica:
//   1º) mesma etapaAlinhada da fase ativa (decodable prioritário)
//   2º) mesmo nível leitor
//   3º) níveis anteriores (consolidação)
export function historiasOrdenadasPorRelevancia(
  disponiveis: HistoriaGraduada[],
  nivelLeitor: NivelLeitor,
  etapaAtual: string,
): HistoriaGraduada[] {
  const pontos = (h: HistoriaGraduada) => {
    let p = 0;
    if (h.etapaAlinhada === etapaAtual) p += 100;
    if (h.nivel === nivelLeitor) p += 20;
    p += h.nivel; // desempate leve
    return p;
  };
  return [...disponiveis].sort((a, b) => pontos(b) - pontos(a));
}
