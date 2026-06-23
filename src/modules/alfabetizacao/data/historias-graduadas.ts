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
    id: "h1-princesa-sapo",
    titulo: "A Princesa e o Sapo Encantado",
    nivel: 1,
    capa: "PRINCESA",
    vocabBase: ["PRINCESA", "SAPO", "CASTELO", "CORACAO"],
    paginas: [
      { texto: "Era uma vez, num reino muito distante, uma princesa de coração gentil.", imagem: "PRINCESA" },
      { texto: "Ela morava num castelo dourado, cercado por jardins floridos.", imagem: "CASTELO" },
      { texto: "Numa tarde de sol, a princesa caminhou até o lago do jardim.", imagem: "FLOR" },
      { texto: "Foi então que ela ouviu um chorinho baixinho vindo das pedras.", imagem: "TRISTE" },
      { texto: "Era um pequeno sapo verde, perdido e com muita saudade de casa.", imagem: "SAPO" },
      { texto: "Com todo cuidado, a princesa pegou o sapinho na palma da mão.", imagem: "SAPO" },
      { texto: "“Não chore, amiguinho. Vou cuidar de você”, ela sussurrou.", imagem: "CORACAO" },
      { texto: "E deu um beijinho carinhoso na cabecinha do sapo.", imagem: "CORACAO" },
      { texto: "Naquele instante, o sapo virou um amigo muito especial.", imagem: "SAPO" },
      { texto: "E os dois voltaram pro castelo, felizes para sempre.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Onde morava a princesa?", correta: "CASTELO", distratores: ["CASA", "ARVORE"] },
      { pergunta: "Quem ela achou perto do lago?", correta: "SAPO", distratores: ["PEIXE", "PATO"] },
      { pergunta: "Como ficaram os dois no final?", correta: "FELIZ", distratores: ["TRISTE", "MEDO"] },
    ],
  },
  {
    id: "h1-heroi-castelo",
    titulo: "O Herói Salva o Castelo",
    nivel: 1,
    capa: "HEROI",
    vocabBase: ["HEROI", "CASTELO", "TREX", "PRINCESA"],
    paginas: [
      { texto: "Um herói corajoso vivia na vila.", imagem: "HEROI" },
      { texto: "Um dragão chegou perto do castelo.", imagem: "TREX" },
      { texto: "A princesa ficou com medo.", imagem: "MEDO" },
      { texto: "O herói pegou sua espada.", imagem: "HEROI" },
      { texto: "Ele correu até o castelo.", imagem: "CASTELO" },
      { texto: "O dragão soltava fogo.", imagem: "FOGO" },
      { texto: "O herói não desistiu.", imagem: "HEROI" },
      { texto: "Ele venceu o dragão!", imagem: "TREX" },
      { texto: "A princesa ficou em paz.", imagem: "PRINCESA" },
      { texto: "Todo mundo comemorou.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Quem chegou ao castelo?", correta: "TREX", distratores: ["GATO", "COELHO"] },
      { pergunta: "Quem salvou todos?", correta: "HEROI", distratores: ["SAPO", "RATO"] },
      { pergunta: "Como ficou a princesa?", correta: "PRINCESA", distratores: ["TRISTE", "MEDO"] },
    ],
  },
  {
    id: "h1-fada-estrela",
    titulo: "A Fada e a Estrela Perdida",
    nivel: 1,
    capa: "FADA",
    vocabBase: ["FADA", "ESTRELA", "LUA"],
    paginas: [
      { texto: "Uma fadinha morava no céu.", imagem: "FADA" },
      { texto: "Uma estrela caiu da lua.", imagem: "ESTRELA" },
      { texto: "A estrela chorava sozinha.", imagem: "TRISTE" },
      { texto: "A fada voou bem rápido.", imagem: "FADA" },
      { texto: "Ela achou a estrelinha.", imagem: "ESTRELA" },
      { texto: "“Não chore, vou te ajudar.”", imagem: "FADA" },
      { texto: "A fada levou a estrela.", imagem: "FADA" },
      { texto: "Voltaram juntas pra lua.", imagem: "LUA" },
      { texto: "A estrela brilhou de novo.", imagem: "ESTRELA" },
      { texto: "O céu ficou bem feliz.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que caiu da lua?", correta: "ESTRELA", distratores: ["SOL", "FOGUETE"] },
      { pergunta: "Quem ajudou a estrela?", correta: "FADA", distratores: ["PATO", "GATO"] },
      { pergunta: "Pra onde elas voltaram?", correta: "LUA", distratores: ["CASTELO", "CASA"] },
    ],
  },
  {
    id: "h1-astronauta",
    titulo: "O Astronauta na Lua",
    nivel: 1,
    capa: "ASTRONAUTA",
    vocabBase: ["ASTRONAUTA", "FOGUETE", "LUA", "PLANETA"],
    paginas: [
      { texto: "Olha o astronauta!", imagem: "ASTRONAUTA" },
      { texto: "Ele entrou no foguete.", imagem: "FOGUETE" },
      { texto: "O foguete subiu bem alto.", imagem: "FOGUETE" },
      { texto: "Passou perto de um planeta.", imagem: "PLANETA" },
      { texto: "Viu uma estrela brilhando.", imagem: "ESTRELA" },
      { texto: "Chegou logo na lua.", imagem: "LUA" },
      { texto: "Pulou na lua devagar.", imagem: "ASTRONAUTA" },
      { texto: "Tirou uma foto bonita.", imagem: "ASTRONAUTA" },
      { texto: "Voltou pra casa contente.", imagem: "FOGUETE" },
      { texto: "Que viagem incrível!", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Em que ele viajou?", correta: "FOGUETE", distratores: ["CARRO", "AVIAO"] },
      { pergunta: "Onde ele chegou?", correta: "LUA", distratores: ["SOL", "CASA"] },
      { pergunta: "Quem é o personagem?", correta: "ASTRONAUTA", distratores: ["HEROI", "FADA"] },
    ],
  },
  {
    id: "h1-macaco-banana",
    titulo: "O Macaco e a Banana",
    nivel: 1,
    capa: "MACACO",
    vocabBase: ["MACACO", "BANANA", "ARVORE", "COELHO"],
    paginas: [
      { texto: "O macaco tinha fome.", imagem: "MACACO" },
      { texto: "Ele viu uma árvore grande.", imagem: "ARVORE" },
      { texto: "No alto, uma banana madura.", imagem: "BANANA" },
      { texto: "O macaco subiu rapidinho.", imagem: "MACACO" },
      { texto: "Pegou a banana com a mão.", imagem: "BANANA" },
      { texto: "Mas viu um coelho com fome.", imagem: "COELHO" },
      { texto: "O coelho fez carinha triste.", imagem: "TRISTE" },
      { texto: "O macaco dividiu a banana.", imagem: "MACACO" },
      { texto: "Os dois comeram juntos.", imagem: "COELHO" },
      { texto: "Dividir é melhor!", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que estava na árvore?", correta: "BANANA", distratores: ["MACA", "UVA"] },
      { pergunta: "Quem apareceu com fome?", correta: "COELHO", distratores: ["GATO", "RATO"] },
      { pergunta: "O que o macaco fez?", correta: "FELIZ", distratores: ["TRISTE", "BRAVO"] },
    ],
  },
  {
    id: "h1-pintinho-perdido",
    titulo: "O Pintinho Perdido",
    nivel: 1,
    capa: "PINTINHO",
    vocabBase: ["PINTINHO", "GALINHA", "GATO"],
    paginas: [
      { texto: "Era uma vez um pintinho.", imagem: "PINTINHO" },
      { texto: "Ele saiu do ninho sozinho.", imagem: "PINTINHO" },
      { texto: "Logo se perdeu no mato.", imagem: "TRISTE" },
      { texto: "O pintinho chamou a mamãe.", imagem: "PINTINHO" },
      { texto: "Um gato apareceu de surpresa.", imagem: "GATO" },
      { texto: "O pintinho ficou com medo.", imagem: "MEDO" },
      { texto: "Mas o gato era amigo.", imagem: "GATO" },
      { texto: "Levou ele até a mamãe.", imagem: "GALINHA" },
      { texto: "A galinha deu um abraço.", imagem: "CORACAO" },
      { texto: "Que alegria estar em casa!", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Quem se perdeu?", correta: "PINTINHO", distratores: ["PATO", "SAPO"] },
      { pergunta: "Quem ajudou ele?", correta: "GATO", distratores: ["RATO", "RAPOSA"] },
      { pergunta: "Quem é a mamãe?", correta: "GALINHA", distratores: ["VACA", "OVELHA"] },
    ],
  },
  {
    id: "h1-urso-mel",
    titulo: "O Urso Quer Mel",
    nivel: 1,
    capa: "URSO",
    vocabBase: ["URSO", "ABELHA", "ARVORE", "FLOR"],
    paginas: [
      { texto: "O urso adorava mel.", imagem: "URSO" },
      { texto: "Ele viu uma árvore alta.", imagem: "ARVORE" },
      { texto: "No tronco, muitas abelhas.", imagem: "ABELHA" },
      { texto: "O urso pensou um plano.", imagem: "URSO" },
      { texto: "Foi até um campo de flores.", imagem: "FLOR" },
      { texto: "Pediu mel com gentileza.", imagem: "URSO" },
      { texto: "A abelha rainha gostou.", imagem: "ABELHA" },
      { texto: "Deu um potinho de mel.", imagem: "URSO" },
      { texto: "O urso agradeceu feliz.", imagem: "URSO" },
      { texto: "Pedir com jeitinho funciona!", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que o urso queria?", correta: "ABELHA", distratores: ["PEIXE", "BANANA"] },
      { pergunta: "Onde estavam as abelhas?", correta: "ARVORE", distratores: ["CASA", "LUA"] },
      { pergunta: "Como o urso ficou?", correta: "FELIZ", distratores: ["TRISTE", "BRAVO"] },
    ],
  },
  {
    id: "h1-cavalo-coroa",
    titulo: "O Cavalo da Princesa",
    nivel: 1,
    capa: "CAVALO",
    vocabBase: ["CAVALO", "PRINCESA", "CASTELO", "COROA"],
    paginas: [
      { texto: "A princesa perdeu a coroa.", imagem: "COROA" },
      { texto: "Ela ficou muito triste.", imagem: "TRISTE" },
      { texto: "Veio um cavalo branco.", imagem: "CAVALO" },
      { texto: "“Eu vou te ajudar!”", imagem: "CAVALO" },
      { texto: "Eles saíram do castelo.", imagem: "CASTELO" },
      { texto: "Procuraram pelo caminho.", imagem: "CAVALO" },
      { texto: "Acharam a coroa na flor.", imagem: "FLOR" },
      { texto: "A princesa pulou de alegria.", imagem: "PRINCESA" },
      { texto: "Voltaram juntos pra casa.", imagem: "CASTELO" },
      { texto: "Que amigo bom, o cavalo!", imagem: "CORACAO" },
    ],
    perguntas: [
      { pergunta: "O que a princesa perdeu?", correta: "COROA", distratores: ["BOLA", "FLOR"] },
      { pergunta: "Quem ajudou ela?", correta: "CAVALO", distratores: ["SAPO", "GATO"] },
      { pergunta: "Onde acharam a coroa?", correta: "FLOR", distratores: ["ARVORE", "LUA"] },
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
