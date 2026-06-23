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
  // ====================================================================
  // NÍVEL 1 — Pré-leitor / Leitor emergente
  // 1 frase por página · 4-6 palavras · sílabas CV simples · alta repetição
  // ====================================================================
  {
    id: "h1-sol",
    titulo: "O Sol",
    nivel: 1,
    capa: "SOL",
    vocabBase: ["SOL", "LUA", "FLOR"],
    paginas: [
      { texto: "Olha o sol.", imagem: "SOL" },
      { texto: "O sol é amarelo.", imagem: "SOL" },
      { texto: "O sol é quente.", imagem: "SOL" },
      { texto: "O sol brilha forte.", imagem: "SOL" },
      { texto: "A flor ama o sol.", imagem: "FLOR" },
      { texto: "A flor abre devagar.", imagem: "FLOR" },
      { texto: "O sol vai dormir.", imagem: "SOL" },
      { texto: "A lua aparece.", imagem: "LUA" },
      { texto: "A lua é bonita.", imagem: "LUA" },
      { texto: "Boa noite, lua!", imagem: "LUA" },
    ],
    perguntas: [
      { pergunta: "Qual é a cor do sol?", correta: "SOL", distratores: ["LUA", "CHUVA"] },
      { pergunta: "Quem ama o sol?", correta: "FLOR", distratores: ["PEIXE", "RATO"] },
      { pergunta: "Quem aparece à noite?", correta: "LUA", distratores: ["SOL", "BOLA"] },
    ],
  },
  {
    id: "h1-bola",
    titulo: "A Bola",
    nivel: 1,
    capa: "BOLA",
    vocabBase: ["BOLA", "GATO", "CACHORRO"],
    paginas: [
      { texto: "Olha a bola!", imagem: "BOLA" },
      { texto: "A bola é redonda.", imagem: "BOLA" },
      { texto: "A bola pula no chão.", imagem: "BOLA" },
      { texto: "O gato vê a bola.", imagem: "GATO" },
      { texto: "O gato corre rápido.", imagem: "GATO" },
      { texto: "O gato pega a bola.", imagem: "BOLA" },
      { texto: "O cão vem brincar.", imagem: "CACHORRO" },
      { texto: "O cão pula feliz.", imagem: "CACHORRO" },
      { texto: "Todos amam a bola.", imagem: "BOLA" },
      { texto: "Que dia feliz!", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Quem pega a bola?", correta: "GATO", distratores: ["PATO", "SAPO"] },
      { pergunta: "Quem vem brincar?", correta: "CACHORRO", distratores: ["RATO", "COELHO"] },
      { pergunta: "Como é a bola?", correta: "BOLA", distratores: ["FLOR", "CASA"] },
    ],
  },
  {
    id: "h1-gato",
    titulo: "O Gato",
    nivel: 1,
    capa: "GATO",
    vocabBase: ["GATO", "RATO", "ARVORE"],
    paginas: [
      { texto: "Olha o gato.", imagem: "GATO" },
      { texto: "O gato é fofo.", imagem: "GATO" },
      { texto: "O gato dorme.", imagem: "GATO" },
      { texto: "O gato acorda.", imagem: "GATO" },
      { texto: "O gato vê um rato.", imagem: "RATO" },
      { texto: "O rato foge ligeiro.", imagem: "RATO" },
      { texto: "O gato corre atrás.", imagem: "GATO" },
      { texto: "O rato sobe a árvore.", imagem: "ARVORE" },
      { texto: "O gato fica triste.", imagem: "TRISTE" },
      { texto: "Outro dia ele pega!", imagem: "GATO" },
    ],
    perguntas: [
      { pergunta: "Quem o gato viu?", correta: "RATO", distratores: ["SAPO", "PATO"] },
      { pergunta: "Onde o rato sobe?", correta: "ARVORE", distratores: ["CASA", "FLOR"] },
      { pergunta: "Como o gato ficou?", correta: "TRISTE", distratores: ["FELIZ", "BRAVO"] },
    ],
  },
  {
    id: "h1-pato",
    titulo: "O Pato",
    nivel: 1,
    capa: "PATO",
    vocabBase: ["PATO", "PEIXE", "SAPO"],
    paginas: [
      { texto: "Olha o pato.", imagem: "PATO" },
      { texto: "O pato é amarelo.", imagem: "PATO" },
      { texto: "O pato nada.", imagem: "PATO" },
      { texto: "O pato vê um peixe.", imagem: "PEIXE" },
      { texto: "O peixe é pequeno.", imagem: "PEIXE" },
      { texto: "Vem um sapo verde.", imagem: "SAPO" },
      { texto: "O sapo pula alto.", imagem: "SAPO" },
      { texto: "Todos brincam juntos.", imagem: "PATO" },
      { texto: "O pato fica feliz.", imagem: "FELIZ" },
      { texto: "Que dia bom!", imagem: "SOL" },
    ],
    perguntas: [
      { pergunta: "Cor do pato?", correta: "PATO", distratores: ["SAPO", "RATO"] },
      { pergunta: "Quem pula alto?", correta: "SAPO", distratores: ["PEIXE", "PATO"] },
      { pergunta: "Quem o pato viu?", correta: "PEIXE", distratores: ["GATO", "BOLA"] },
    ],
  },
  {
    id: "h1-flor",
    titulo: "A Flor",
    nivel: 1,
    capa: "FLOR",
    vocabBase: ["FLOR", "ABELHA", "BORBOLETA"],
    paginas: [
      { texto: "Olha a flor.", imagem: "FLOR" },
      { texto: "A flor é linda.", imagem: "FLOR" },
      { texto: "A flor cheira bem.", imagem: "FLOR" },
      { texto: "Vem a abelha.", imagem: "ABELHA" },
      { texto: "A abelha pousa nela.", imagem: "ABELHA" },
      { texto: "A abelha faz mel.", imagem: "ABELHA" },
      { texto: "Vem a borboleta.", imagem: "BORBOLETA" },
      { texto: "A borboleta voa baixinho.", imagem: "BORBOLETA" },
      { texto: "Todos amam a flor.", imagem: "FLOR" },
      { texto: "Que jardim feliz!", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Quem faz mel?", correta: "ABELHA", distratores: ["PATO", "GATO"] },
      { pergunta: "Quem voa baixinho?", correta: "BORBOLETA", distratores: ["SAPO", "PEIXE"] },
      { pergunta: "Como é a flor?", correta: "FLOR", distratores: ["BOLA", "CASA"] },
    ],
  },
  {
    id: "h1-bolo",
    titulo: "O Bolo",
    nivel: 1,
    capa: "BOLO",
    vocabBase: ["BOLO", "PRESENTE", "FELIZ"],
    paginas: [
      { texto: "Olha o bolo.", imagem: "BOLO" },
      { texto: "O bolo é doce.", imagem: "BOLO" },
      { texto: "O bolo é grande.", imagem: "BOLO" },
      { texto: "Tem velas em cima.", imagem: "BOLO" },
      { texto: "Vou soprar as velas.", imagem: "BOLO" },
      { texto: "Ganhei um presente!", imagem: "PRESENTE" },
      { texto: "Os amigos vieram.", imagem: "FELIZ" },
      { texto: "Todos cantam pra mim.", imagem: "FELIZ" },
      { texto: "Feliz aniversário!", imagem: "BOLO" },
      { texto: "Que festa boa!", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Como é o bolo?", correta: "BOLO", distratores: ["FLOR", "BOLA"] },
      { pergunta: "O que ganhei?", correta: "PRESENTE", distratores: ["BOLA", "FLOR"] },
      { pergunta: "Como ficou a festa?", correta: "FELIZ", distratores: ["TRISTE", "BRAVO"] },
    ],
  },
  {
    id: "h1-lua",
    titulo: "A Lua",
    nivel: 1,
    capa: "LUA",
    vocabBase: ["LUA", "ESTRELA", "FOGUETE"],
    paginas: [
      { texto: "Olha a lua.", imagem: "LUA" },
      { texto: "A lua é branca.", imagem: "LUA" },
      { texto: "A lua brilha.", imagem: "LUA" },
      { texto: "Vejo uma estrela.", imagem: "ESTRELA" },
      { texto: "A estrela pisca.", imagem: "ESTRELA" },
      { texto: "Vejo um foguete.", imagem: "FOGUETE" },
      { texto: "O foguete sobe.", imagem: "FOGUETE" },
      { texto: "Vejo um planeta.", imagem: "PLANETA" },
      { texto: "O céu é mágico!", imagem: "LUA" },
      { texto: "Boa noite a todos.", imagem: "SONO" },
    ],
    perguntas: [
      { pergunta: "Quem pisca no céu?", correta: "ESTRELA", distratores: ["SOL", "FLOR"] },
      { pergunta: "Quem sobe ao céu?", correta: "FOGUETE", distratores: ["PATO", "SAPO"] },
      { pergunta: "Qual é a cor da lua?", correta: "LUA", distratores: ["SOL", "RATO"] },
    ],
  },
  {
    id: "h1-cao",
    titulo: "O Cão",
    nivel: 1,
    capa: "CACHORRO",
    vocabBase: ["CACHORRO", "BOLA", "GATO"],
    paginas: [
      { texto: "Olha o cão.", imagem: "CACHORRO" },
      { texto: "O cão é fofo.", imagem: "CACHORRO" },
      { texto: "O cão late.", imagem: "CACHORRO" },
      { texto: "O cão corre.", imagem: "CACHORRO" },
      { texto: "O cão pula.", imagem: "CACHORRO" },
      { texto: "Vem a bola.", imagem: "BOLA" },
      { texto: "O cão pega a bola.", imagem: "CACHORRO" },
      { texto: "Vem o gato amigo.", imagem: "GATO" },
      { texto: "Eles brincam juntos.", imagem: "FELIZ" },
      { texto: "Que amigos bons!", imagem: "CORACAO" },
    ],
    perguntas: [
      { pergunta: "Quem pega a bola?", correta: "CACHORRO", distratores: ["RATO", "PATO"] },
      { pergunta: "Quem vem brincar?", correta: "GATO", distratores: ["SAPO", "COELHO"] },
      { pergunta: "Como ficam os amigos?", correta: "FELIZ", distratores: ["TRISTE", "BRAVO"] },
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
