// Banco de histórias graduadas. Cada história tem:
// - nivel: 1..6 (alinhado às ETAPAS da trilha)
// - vocabBase: palavras-chave usadas (devem existir em OBJETO_IMG)
// - paginas: cada página tem texto curto (LIDO POR VOZ) + imagem principal
// - perguntas: compreensão simples (opções = imagens)
//
// Controle de dificuldade pelo nível leitor:
//   N1: 1 frase de 4-6 palavras, vocabulário concreto, alta repetição
//   N2: 2 frases curtas, sílabas simples (CV)
//   N3: 2-3 frases, palavras de 2-3 sílabas
//   N4: 3-4 frases, conectivos simples (e, mas)
//   N5: 4-6 frases, início de narrativa (começo/meio/fim)
//   N6: 6-10 frases, inferência leve

export type NivelLeitor = 1 | 2 | 3 | 4 | 5 | 6;

export interface PaginaHistoria {
  texto: string;
  imagem: string; // chave OBJETO_IMG
}

export interface PerguntaHistoria {
  pergunta: string;
  correta: string;
  distratores: string[];
}

export interface HistoriaGraduada {
  id: string;
  titulo: string;
  nivel: NivelLeitor;
  capa: string;
  vocabBase: string[];
  paginas: PaginaHistoria[];
  perguntas: PerguntaHistoria[];
}

export const HISTORIAS_GRADUADAS: HistoriaGraduada[] = [
  // --- NÍVEL 1 ---
  {
    id: "h1-sol",
    titulo: "O Sol",
    nivel: 1,
    capa: "SOL",
    vocabBase: ["SOL", "LUA"],
    paginas: [
      { texto: "O sol é amarelo.", imagem: "SOL" },
      { texto: "O sol brilha forte.", imagem: "SOL" },
      { texto: "À noite, vem a lua.", imagem: "LUA" },
    ],
    perguntas: [
      { pergunta: "Qual é a cor do sol?", correta: "SOL", distratores: ["LUA", "CHUVA"] },
    ],
  },
  {
    id: "h1-bola",
    titulo: "A Bola",
    nivel: 1,
    capa: "BOLA",
    vocabBase: ["BOLA", "GATO"],
    paginas: [
      { texto: "Olha a bola!", imagem: "BOLA" },
      { texto: "O gato pega a bola.", imagem: "GATO" },
    ],
    perguntas: [
      { pergunta: "Quem pega a bola?", correta: "GATO", distratores: ["PATO", "RATO"] },
    ],
  },

  // --- NÍVEL 2 ---
  {
    id: "h2-pato",
    titulo: "O Pato no Lago",
    nivel: 2,
    capa: "PATO",
    vocabBase: ["PATO", "PEIXE"],
    paginas: [
      { texto: "O pato nada no lago.", imagem: "PATO" },
      { texto: "Ele vê um peixe pequeno.", imagem: "PEIXE" },
      { texto: "O pato fica feliz.", imagem: "PATO" },
    ],
    perguntas: [
      { pergunta: "O que o pato viu?", correta: "PEIXE", distratores: ["SAPO", "RATO"] },
    ],
  },
  {
    id: "h2-gato",
    titulo: "O Gato e o Rato",
    nivel: 2,
    capa: "GATO",
    vocabBase: ["GATO", "RATO"],
    paginas: [
      { texto: "O gato corre.", imagem: "GATO" },
      { texto: "O rato corre mais.", imagem: "RATO" },
      { texto: "O rato escapa!", imagem: "RATO" },
    ],
    perguntas: [
      { pergunta: "Quem escapou?", correta: "RATO", distratores: ["GATO", "PATO"] },
    ],
  },

  // --- NÍVEL 3 ---
  {
    id: "h3-abelha",
    titulo: "A Abelha da Flor",
    nivel: 3,
    capa: "ABELHA",
    vocabBase: ["ABELHA", "FLOR", "BORBOLETA"],
    paginas: [
      { texto: "A abelha voa de flor em flor.", imagem: "ABELHA" },
      { texto: "Ela faz mel bem docinho.", imagem: "FLOR" },
      { texto: "A borboleta passa voando perto.", imagem: "BORBOLETA" },
    ],
    perguntas: [
      { pergunta: "O que a abelha faz?", correta: "FLOR", distratores: ["PEIXE", "VACA"] },
      { pergunta: "Quem passou voando?", correta: "BORBOLETA", distratores: ["PASSARO", "CORUJA"] },
    ],
  },
  {
    id: "h3-cachorro",
    titulo: "O Cachorro Brincalhão",
    nivel: 3,
    capa: "CACHORRO",
    vocabBase: ["CACHORRO", "BOLA", "GATO"],
    paginas: [
      { texto: "O cachorro adora brincar.", imagem: "CACHORRO" },
      { texto: "Ele corre atrás da bola.", imagem: "BOLA" },
      { texto: "O gato olha de longe.", imagem: "GATO" },
    ],
    perguntas: [
      { pergunta: "Atrás do que ele corre?", correta: "BOLA", distratores: ["GATO", "FLOR"] },
    ],
  },

  // --- NÍVEL 4 ---
  {
    id: "h4-coelho",
    titulo: "O Coelho e a Cenoura",
    nivel: 4,
    capa: "COELHO",
    vocabBase: ["COELHO", "CENOURA", "RAPOSA"],
    paginas: [
      { texto: "Era uma vez um coelho que adorava cenoura.", imagem: "COELHO" },
      { texto: "Todo dia ele ia ao jardim buscar uma fresquinha.", imagem: "CENOURA" },
      { texto: "Mas a raposa também queria a cenoura.", imagem: "RAPOSA" },
      { texto: "O coelho foi mais rápido e levou tudo!", imagem: "COELHO" },
    ],
    perguntas: [
      { pergunta: "O que o coelho buscava?", correta: "CENOURA", distratores: ["BANANA", "UVA"] },
      { pergunta: "Quem também queria?", correta: "RAPOSA", distratores: ["URSO", "TIGRE"] },
    ],
  },

  // --- NÍVEL 5 ---
  {
    id: "h5-leao",
    titulo: "O Leão e o Ratinho",
    nivel: 5,
    capa: "LEAO",
    vocabBase: ["LEAO", "RATO"],
    paginas: [
      { texto: "Na floresta vivia um leão muito forte.", imagem: "LEAO" },
      { texto: "Um dia, ele pegou um ratinho pequenininho.", imagem: "RATO" },
      { texto: "O rato pediu pra ser solto, e o leão soltou.", imagem: "LEAO" },
      { texto: "Mais tarde, o leão caiu numa armadilha.", imagem: "LEAO" },
      { texto: "O ratinho veio e roeu as cordas, salvando o amigo.", imagem: "RATO" },
    ],
    perguntas: [
      { pergunta: "Quem salvou o leão?", correta: "RATO", distratores: ["RAPOSA", "COELHO"] },
      { pergunta: "Onde vivia o leão?", correta: "LEAO", distratores: ["PEIXE", "PATO"] },
    ],
  },

  // --- NÍVEL 6 ---
  {
    id: "h6-borboleta",
    titulo: "A Borboleta Curiosa",
    nivel: 6,
    capa: "BORBOLETA",
    vocabBase: ["BORBOLETA", "FLOR", "ABELHA", "SOL"],
    paginas: [
      { texto: "Era uma manhã ensolarada no jardim.", imagem: "SOL" },
      { texto: "Uma borboleta curiosa voava de flor em flor.", imagem: "BORBOLETA" },
      { texto: "Ela queria descobrir qual flor tinha o néctar mais doce.", imagem: "FLOR" },
      { texto: "Uma abelha amiga ofereceu ajuda na busca.", imagem: "ABELHA" },
      { texto: "Juntas, elas visitaram cada cantinho do jardim.", imagem: "FLOR" },
      { texto: "No final, descobriram que cada flor tinha um sabor especial.", imagem: "BORBOLETA" },
    ],
    perguntas: [
      { pergunta: "O que a borboleta procurava?", correta: "FLOR", distratores: ["PEIXE", "BOLA"] },
      { pergunta: "Quem ajudou a borboleta?", correta: "ABELHA", distratores: ["PASSARO", "SAPO"] },
    ],
  },

  // --- NÍVEL 1 (novas) ---
  {
    id: "h1-lua",
    titulo: "A Lua Cheia",
    nivel: 1,
    capa: "LUA",
    vocabBase: ["LUA", "SOL"],
    paginas: [
      { texto: "A lua acende no céu.", imagem: "LUA" },
      { texto: "Ela é redonda e branca.", imagem: "LUA" },
      { texto: "De dia, quem manda é o sol.", imagem: "SOL" },
    ],
    perguntas: [
      { pergunta: "Quem aparece à noite?", correta: "LUA", distratores: ["SOL", "FLOR"] },
    ],
  },
  {
    id: "h1-uva",
    titulo: "Uva Docinha",
    nivel: 1,
    capa: "UVA",
    vocabBase: ["UVA", "BANANA"],
    paginas: [
      { texto: "A uva é pequena.", imagem: "UVA" },
      { texto: "A banana é longa.", imagem: "BANANA" },
      { texto: "Duas frutas gostosas!", imagem: "UVA" },
    ],
    perguntas: [
      { pergunta: "Qual é longa?", correta: "BANANA", distratores: ["UVA", "MACA"] },
    ],
  },

  // --- NÍVEL 2 (novas) ---
  {
    id: "h2-sapo",
    titulo: "O Sapo Pulão",
    nivel: 2,
    capa: "SAPO",
    vocabBase: ["SAPO", "FLOR", "CHUVA"],
    paginas: [
      { texto: "O sapo mora perto do rio.", imagem: "SAPO" },
      { texto: "Ele pula na flor mais bonita.", imagem: "FLOR" },
      { texto: "Quando vem a chuva, ele canta.", imagem: "CHUVA" },
    ],
    perguntas: [
      { pergunta: "Onde o sapo pula?", correta: "FLOR", distratores: ["BOLA", "CASA"] },
    ],
  },
  {
    id: "h2-galo",
    titulo: "O Galo Madrugador",
    nivel: 2,
    capa: "GALO",
    vocabBase: ["GALO", "SOL", "GALINHA"],
    paginas: [
      { texto: "O galo canta bem cedo.", imagem: "GALO" },
      { texto: "O sol começa a aparecer.", imagem: "SOL" },
      { texto: "A galinha vem atrás.", imagem: "GALINHA" },
    ],
    perguntas: [
      { pergunta: "Quem canta cedo?", correta: "GALO", distratores: ["PATO", "GATO"] },
    ],
  },

  // --- NÍVEL 3 (novas) ---
  {
    id: "h3-fada",
    titulo: "A Fada e o Castelo",
    nivel: 3,
    capa: "FADA",
    vocabBase: ["FADA", "CASTELO", "COROA"],
    paginas: [
      { texto: "A fada mora num castelo.", imagem: "CASTELO" },
      { texto: "Ela tem uma coroa brilhante.", imagem: "COROA" },
      { texto: "Todo dia ela faz mágica.", imagem: "FADA" },
    ],
    perguntas: [
      { pergunta: "Onde a fada mora?", correta: "CASTELO", distratores: ["CASA", "CARRO"] },
      { pergunta: "O que ela usa?", correta: "COROA", distratores: ["BOLA", "FLOR"] },
    ],
  },
  {
    id: "h3-esquilo",
    titulo: "O Esquilo Guardão",
    nivel: 3,
    capa: "ESQUILO",
    vocabBase: ["ESQUILO", "ARVORE", "CENOURA"],
    paginas: [
      { texto: "O esquilo sobe na árvore.", imagem: "ESQUILO" },
      { texto: "Ele esconde comida no tronco.", imagem: "ARVORE" },
      { texto: "No inverno, ele come devagar.", imagem: "ESQUILO" },
    ],
    perguntas: [
      { pergunta: "Onde ele sobe?", correta: "ARVORE", distratores: ["CASA", "MOTO"] },
    ],
  },

  // --- NÍVEL 4 (novas) ---
  {
    id: "h4-elefante",
    titulo: "O Elefante Amigo",
    nivel: 4,
    capa: "ELEFANTE",
    vocabBase: ["ELEFANTE", "AGUA", "CHUVA"],
    paginas: [
      { texto: "Era uma vez um elefante enorme.", imagem: "ELEFANTE" },
      { texto: "Ele adorava tomar banho de rio.", imagem: "CHUVA" },
      { texto: "Todos os bichos gostavam de brincar com ele.", imagem: "ELEFANTE" },
      { texto: "Ele espirrava água pra todo lado.", imagem: "CHUVA" },
    ],
    perguntas: [
      { pergunta: "O que ele espirra?", correta: "CHUVA", distratores: ["FOGO", "FLOR"] },
    ],
  },
  {
    id: "h4-princesa",
    titulo: "A Princesa e a Coruja",
    nivel: 4,
    capa: "PRINCESA",
    vocabBase: ["PRINCESA", "CORUJA", "CASTELO"],
    paginas: [
      { texto: "A princesa vivia num castelo alto.", imagem: "CASTELO" },
      { texto: "Toda noite, uma coruja pousava na janela.", imagem: "CORUJA" },
      { texto: "As duas conversavam até o sol nascer.", imagem: "PRINCESA" },
      { texto: "Elas viraram grandes amigas.", imagem: "CORUJA" },
    ],
    perguntas: [
      { pergunta: "Quem pousava na janela?", correta: "CORUJA", distratores: ["PASSARO", "GALO"] },
      { pergunta: "Onde a princesa morava?", correta: "CASTELO", distratores: ["CASA", "CARRO"] },
    ],
  },

  // --- NÍVEL 5 (novas) ---
  {
    id: "h5-tartaruga",
    titulo: "A Tartaruga e o Cavalo",
    nivel: 5,
    capa: "TARTARUGA",
    vocabBase: ["TARTARUGA", "CAVALO", "FLOR"],
    paginas: [
      { texto: "Um cavalo veloz zombou da tartaruga lenta.", imagem: "CAVALO" },
      { texto: "Ela propôs uma corrida até a flor mais distante.", imagem: "FLOR" },
      { texto: "O cavalo saiu disparado e cansou no meio do caminho.", imagem: "CAVALO" },
      { texto: "A tartaruga continuou devagar, passo a passo.", imagem: "TARTARUGA" },
      { texto: "No final, quem ganhou foi a tartaruga.", imagem: "TARTARUGA" },
    ],
    perguntas: [
      { pergunta: "Quem ganhou a corrida?", correta: "TARTARUGA", distratores: ["CAVALO", "COELHO"] },
    ],
  },

  // --- NÍVEL 6 (novas) ---
  {
    id: "h6-foguete",
    titulo: "O Foguete e a Lua",
    nivel: 6,
    capa: "FOGUETE",
    vocabBase: ["FOGUETE", "LUA", "PLANETA", "ESTRELA"],
    paginas: [
      { texto: "Era uma noite escura e cheia de estrelas.", imagem: "ESTRELA" },
      { texto: "Um foguete pequeno decidiu visitar a lua.", imagem: "FOGUETE" },
      { texto: "Pelo caminho, encontrou planetas coloridos e cometas curiosos.", imagem: "PLANETA" },
      { texto: "A lua abriu um sorriso quando o viu chegar.", imagem: "LUA" },
      { texto: "Eles conversaram sobre tudo que existia no céu.", imagem: "ESTRELA" },
      { texto: "No fim, o foguete prometeu voltar toda semana.", imagem: "FOGUETE" },
    ],
    perguntas: [
      { pergunta: "Aonde o foguete foi?", correta: "LUA", distratores: ["SOL", "FLOR"] },
      { pergunta: "O que ele encontrou pelo caminho?", correta: "PLANETA", distratores: ["PEIXE", "VACA"] },
    ],
  },
];

// Calcula nível leitor a partir do progresso da trilha (etapas concluídas)
import { ETAPAS } from "./etapas";
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

export function historiasParaNivel(nivel: NivelLeitor): HistoriaGraduada[] {
  // Sempre permite reler níveis anteriores (consolidação) + o atual
  return HISTORIAS_GRADUADAS.filter((h) => h.nivel <= nivel);
}
