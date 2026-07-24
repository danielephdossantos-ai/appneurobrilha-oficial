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

  /* ═══════════════════════════════════════════════════════════════
   * EXPANSÃO 4 ANOS · IDADES 3–7
   * Meta: currículo sem repetição para uso diário durante 4 anos.
   * Cada nível cresce em vocabulário, quantidade de páginas e
   * profundidade das perguntas. Fonéticos alinhados às ETAPAS.
   * ═══════════════════════════════════════════════════════════════ */

  // ─────────── NÍVEL 1 (3–4 anos · vogais + CV) ───────────
  {
    id: "h1-pato-lago",
    titulo: "O Pato no Lago",
    nivel: 1, capa: "PATO",
    vocabBase: ["PATO", "AGUA", "SOL"],
    foneticos: ["P", "A", "T", "O"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O pato entra na água.", imagem: "PATO" },
      { texto: "A água é fresca.", imagem: "AGUA" },
      { texto: "O pato nada feliz.", imagem: "PATO" },
    ],
    perguntas: [
      { pergunta: "O que o pato faz?", tipo: "literal", modo: "texto",
        correta: "nada", distratores: ["voa", "corre"] },
      { pergunta: "Como está a água?", tipo: "literal", modo: "texto",
        correta: "fresca", distratores: ["quente", "gelada"] },
    ],
  },
  {
    id: "h1-gato-sono",
    titulo: "O Gato com Sono",
    nivel: 1, capa: "GATO",
    vocabBase: ["GATO", "SONO", "LUA"],
    foneticos: ["G", "A", "T", "O"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O gato boceja.", imagem: "GATO" },
      { texto: "A lua já apareceu.", imagem: "LUA" },
      { texto: "O gato dorme na cama.", imagem: "SONO" },
    ],
    perguntas: [
      { pergunta: "Onde o gato dorme?", tipo: "literal", modo: "texto",
        correta: "na cama", distratores: ["no sofá", "no telhado"] },
    ],
  },
  {
    id: "h1-rato-queijo",
    titulo: "O Rato",
    nivel: 1, capa: "RATO",
    vocabBase: ["RATO"],
    foneticos: ["R", "A", "T", "O"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O rato é pequeno.", imagem: "RATO" },
      { texto: "O rato come queijo.", imagem: "RATO" },
    ],
    perguntas: [
      { pergunta: "O que o rato come?", tipo: "literal", modo: "texto",
        correta: "queijo", distratores: ["banana", "uva"] },
    ],
  },
  {
    id: "h1-uva-doce",
    titulo: "A Uva",
    nivel: 1, capa: "UVA",
    vocabBase: ["UVA"],
    foneticos: ["U", "V", "A"],
    etapaAlinhada: "vogais",
    paginas: [
      { texto: "A uva é doce.", imagem: "UVA" },
      { texto: "Eu gosto de uva.", imagem: "UVA" },
    ],
    perguntas: [
      { pergunta: "Como é a uva?", tipo: "literal", modo: "texto",
        correta: "doce", distratores: ["azeda", "salgada"] },
    ],
  },
  {
    id: "h1-flor-jardim",
    titulo: "A Flor",
    nivel: 1, capa: "FLOR",
    vocabBase: ["FLOR", "SOL"],
    foneticos: ["F", "L", "O", "R"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "A flor abre no sol.", imagem: "FLOR" },
      { texto: "A abelha vem visitar.", imagem: "ABELHA" },
    ],
    perguntas: [
      { pergunta: "Quem visita a flor?", tipo: "literal", modo: "imagem",
        correta: "ABELHA", distratores: ["GATO", "RATO"] },
    ],
  },
  {
    id: "h1-vaca-mu",
    titulo: "A Vaca Faz Mu",
    nivel: 1, capa: "VACA",
    vocabBase: ["VACA"],
    foneticos: ["V", "A", "C"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "A vaca faz mu.", imagem: "VACA" },
      { texto: "A vaca come capim.", imagem: "VACA" },
    ],
    perguntas: [
      { pergunta: "Que som a vaca faz?", tipo: "literal", modo: "texto",
        correta: "mu", distratores: ["au", "miau"] },
    ],
  },
  {
    id: "h1-bolo-festa",
    titulo: "O Bolo",
    nivel: 1, capa: "BOLO",
    vocabBase: ["BOLO"],
    foneticos: ["B", "O", "L"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O bolo é de morango.", imagem: "BOLO" },
      { texto: "Todos comem no aniversário.", imagem: "PRESENTE" },
    ],
    perguntas: [
      { pergunta: "De que é o bolo?", tipo: "literal", modo: "texto",
        correta: "morango", distratores: ["chocolate", "limão"] },
    ],
  },
  {
    id: "h1-casa-nova",
    titulo: "A Casa",
    nivel: 1, capa: "CASA",
    vocabBase: ["CASA"],
    foneticos: ["C", "A", "S"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "A casa é amarela.", imagem: "CASA" },
      { texto: "Na casa mora a família.", imagem: "CASA" },
    ],
    perguntas: [
      { pergunta: "De que cor é a casa?", tipo: "literal", modo: "texto",
        correta: "amarela", distratores: ["azul", "verde"] },
    ],
  },
  {
    id: "h1-carro-corre",
    titulo: "O Carro",
    nivel: 1, capa: "CARRO",
    vocabBase: ["CARRO"],
    foneticos: ["C", "A", "R"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O carro corre na rua.", imagem: "CARRO" },
      { texto: "O carro para no sinal.", imagem: "CARRO" },
    ],
    perguntas: [
      { pergunta: "Onde o carro para?", tipo: "literal", modo: "texto",
        correta: "no sinal", distratores: ["na árvore", "no céu"] },
    ],
  },
  {
    id: "h1-peixe-mar",
    titulo: "O Peixe",
    nivel: 1, capa: "PEIXE",
    vocabBase: ["PEIXE", "AGUA"],
    foneticos: ["P", "E", "X"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O peixe nada na água.", imagem: "PEIXE" },
      { texto: "O peixe é azul.", imagem: "PEIXE" },
    ],
    perguntas: [
      { pergunta: "De que cor é o peixe?", tipo: "literal", modo: "texto",
        correta: "azul", distratores: ["amarelo", "rosa"] },
    ],
  },

  // ─────────── NÍVEL 2 (4–5 anos · CV + frases curtas) ───────────
  {
    id: "h2-coelho-cenoura",
    titulo: "O Coelho e a Cenoura",
    nivel: 2, capa: "COELHO",
    vocabBase: ["COELHO", "CENOURA"],
    foneticos: ["C", "O", "E", "LH"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O coelho tem fome.", imagem: "COELHO" },
      { texto: "Ele acha uma cenoura na horta.", imagem: "CENOURA" },
      { texto: "O coelho come e sorri.", imagem: "COELHO" },
    ],
    perguntas: [
      { pergunta: "Onde ele acha a cenoura?", tipo: "literal", modo: "texto",
        correta: "na horta", distratores: ["na praia", "no céu"] },
      { pergunta: "Por que o coelho sorri?", tipo: "inferencia", modo: "texto",
        correta: "porque ficou satisfeito", distratores: ["porque está com medo", "porque perdeu a cenoura"] },
    ],
  },
  {
    id: "h2-panda-bambu",
    titulo: "O Panda e o Bambu",
    nivel: 2, capa: "PANDA",
    vocabBase: ["PANDA"],
    foneticos: ["P", "A", "N", "D"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O panda vive na floresta.", imagem: "PANDA" },
      { texto: "Ele adora comer bambu.", imagem: "PANDA" },
    ],
    perguntas: [
      { pergunta: "O que o panda come?", tipo: "literal", modo: "texto",
        correta: "bambu", distratores: ["mel", "peixe"] },
    ],
  },
  {
    id: "h2-tigre-corre",
    titulo: "O Tigre",
    nivel: 2, capa: "TIGRE",
    vocabBase: ["TIGRE"],
    foneticos: ["T", "I", "G", "R"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O tigre é rápido.", imagem: "TIGRE" },
      { texto: "Ele corre pela grama.", imagem: "TIGRE" },
    ],
    perguntas: [
      { pergunta: "Como é o tigre?", tipo: "literal", modo: "texto",
        correta: "rápido", distratores: ["lento", "pequeno"] },
    ],
  },
  {
    id: "h2-passaro-ninho",
    titulo: "O Pássaro e o Ninho",
    nivel: 2, capa: "PASSARO",
    vocabBase: ["PASSARO", "ARVORE"],
    foneticos: ["P", "A", "S", "SS"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O pássaro faz o ninho.", imagem: "PASSARO" },
      { texto: "Ele leva galhos para a árvore.", imagem: "ARVORE" },
      { texto: "Os filhotes esperam com fome.", imagem: "PASSARO" },
    ],
    perguntas: [
      { pergunta: "Para onde ele leva os galhos?", tipo: "literal", modo: "texto",
        correta: "para a árvore", distratores: ["para o rio", "para a rua"] },
    ],
  },
  {
    id: "h2-porco-lama",
    titulo: "O Porco na Lama",
    nivel: 2, capa: "PORCO",
    vocabBase: ["PORCO"],
    foneticos: ["P", "O", "R"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O porco pula na lama.", imagem: "PORCO" },
      { texto: "Ele fica sujo e feliz.", imagem: "PORCO" },
    ],
    perguntas: [
      { pergunta: "Onde o porco pula?", tipo: "literal", modo: "texto",
        correta: "na lama", distratores: ["na piscina", "na cama"] },
      { pergunta: "Como o porco fica?", tipo: "literal", modo: "texto",
        correta: "sujo e feliz", distratores: ["limpo e triste", "com fome"] },
    ],
  },
  {
    id: "h2-galinha-pinto",
    titulo: "A Galinha e o Pintinho",
    nivel: 2, capa: "GALINHA",
    vocabBase: ["GALINHA", "PINTINHO"],
    foneticos: ["NH", "G", "L"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "A galinha cuida do pintinho.", imagem: "GALINHA" },
      { texto: "O pintinho segue a mãe.", imagem: "PINTINHO" },
    ],
    perguntas: [
      { pergunta: "Quem segue quem?", tipo: "literal", modo: "texto",
        correta: "o pintinho segue a galinha", distratores: ["a galinha segue o pintinho", "os dois voam"] },
    ],
  },
  {
    id: "h2-ovelha-la",
    titulo: "A Ovelha",
    nivel: 2, capa: "OVELHA",
    vocabBase: ["OVELHA"],
    foneticos: ["LH", "V"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "A ovelha tem lã macia.", imagem: "OVELHA" },
      { texto: "A lã aquece no inverno.", imagem: "OVELHA" },
    ],
    perguntas: [
      { pergunta: "Para que serve a lã?", tipo: "inferencia", modo: "texto",
        correta: "para aquecer", distratores: ["para comer", "para brincar"] },
    ],
  },
  {
    id: "h2-cabra-monte",
    titulo: "A Cabra da Montanha",
    nivel: 2, capa: "CABRA",
    vocabBase: ["CABRA"],
    foneticos: ["BR", "C"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "A cabra sobe a montanha.", imagem: "CABRA" },
      { texto: "Ela pula de pedra em pedra.", imagem: "CABRA" },
    ],
    perguntas: [
      { pergunta: "O que a cabra faz na montanha?", tipo: "literal", modo: "texto",
        correta: "sobe e pula", distratores: ["nada", "dorme"] },
    ],
  },
  {
    id: "h2-borboleta-flor",
    titulo: "A Borboleta na Flor",
    nivel: 2, capa: "BORBOLETA",
    vocabBase: ["BORBOLETA", "FLOR"],
    foneticos: ["BR", "L"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "A borboleta pousa na flor.", imagem: "BORBOLETA" },
      { texto: "Suas asas são coloridas.", imagem: "BORBOLETA" },
    ],
    perguntas: [
      { pergunta: "Onde a borboleta pousa?", tipo: "literal", modo: "imagem",
        correta: "FLOR", distratores: ["CARRO", "CASA"] },
    ],
  },
  {
    id: "h2-morango-doce",
    titulo: "O Morango",
    nivel: 2, capa: "MORANGO",
    vocabBase: ["MORANGO"],
    foneticos: ["M", "R", "NG"],
    etapaAlinhada: "silabas",
    paginas: [
      { texto: "O morango é vermelho.", imagem: "MORANGO" },
      { texto: "Ele é doce e cheiroso.", imagem: "MORANGO" },
    ],
    perguntas: [
      { pergunta: "Como é o morango?", tipo: "literal", modo: "texto",
        correta: "vermelho e doce", distratores: ["verde e azedo", "azul e salgado"] },
    ],
  },

  // ─────────── NÍVEL 3 (5–6 anos · frases + começo de inferência) ───────────
  {
    id: "h3-ursinho-perdido",
    titulo: "O Ursinho Perdido",
    nivel: 3, capa: "URSINHO",
    vocabBase: ["URSINHO", "CASA"],
    foneticos: ["RS", "NH"],
    etapaAlinhada: "frases",
    paginas: [
      { texto: "Lia esqueceu o ursinho no parque.", imagem: "URSINHO" },
      { texto: "À noite, ela chorou com saudade.", imagem: "TRISTE" },
      { texto: "No outro dia, o vovô achou o ursinho.", imagem: "URSINHO" },
      { texto: "Lia abraçou o ursinho bem forte.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Onde Lia esqueceu o ursinho?", tipo: "literal", modo: "texto",
        correta: "no parque", distratores: ["na escola", "no carro"] },
      { pergunta: "Por que Lia chorou?", tipo: "causa", modo: "texto",
        correta: "porque sentiu saudade", distratores: ["porque estava com sono", "porque perdeu o sapato"] },
      { pergunta: "Quem achou o ursinho?", tipo: "literal", modo: "texto",
        correta: "o vovô", distratores: ["a mãe", "o gato"] },
    ],
  },
  {
    id: "h3-dinossauro-amigo",
    titulo: "O Dinossauro Amigo",
    nivel: 3, capa: "DINOSSAURO",
    vocabBase: ["DINOSSAURO"],
    foneticos: ["SS", "R"],
    etapaAlinhada: "frases",
    paginas: [
      { texto: "Rex era um dinossauro gigante.", imagem: "DINOSSAURO" },
      { texto: "Todos tinham medo dele.", imagem: "MEDO" },
      { texto: "Mas Rex só queria brincar.", imagem: "DINOSSAURO" },
      { texto: "Um coelho corajoso foi o primeiro amigo.", imagem: "COELHO" },
    ],
    perguntas: [
      { pergunta: "Por que todos tinham medo?", tipo: "causa", modo: "texto",
        correta: "porque Rex era gigante", distratores: ["porque Rex mordia", "porque Rex gritava"] },
      { pergunta: "O que Rex queria de verdade?", tipo: "inferencia", modo: "texto",
        correta: "brincar", distratores: ["comer os amigos", "ficar sozinho"] },
    ],
  },
  {
    id: "h3-heroi-bairro",
    titulo: "O Herói do Bairro",
    nivel: 3, capa: "HEROI",
    vocabBase: ["HEROI"],
    foneticos: ["H", "R"],
    etapaAlinhada: "frases",
    paginas: [
      { texto: "Tom queria ser herói.", imagem: "HEROI" },
      { texto: "Ele ajudou uma vovó a atravessar a rua.", imagem: "HEROI" },
      { texto: "Ela sorriu e disse: você é meu herói!", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Tom fez?", tipo: "literal", modo: "texto",
        correta: "ajudou a vovó", distratores: ["comprou um bolo", "correu na rua"] },
      { pergunta: "Por que ele foi herói?", tipo: "inferencia", modo: "texto",
        correta: "porque ajudou alguém", distratores: ["porque usava capa", "porque era grande"] },
    ],
  },
  {
    id: "h3-robo-amigo",
    titulo: "O Robô da Escola",
    nivel: 3, capa: "ROBO",
    vocabBase: ["ROBO"],
    foneticos: ["R", "B"],
    etapaAlinhada: "frases",
    paginas: [
      { texto: "Um robô chegou na escola.", imagem: "ROBO" },
      { texto: "As crianças ficaram curiosas.", imagem: "SURPRESO" },
      { texto: "O robô ensinou como reciclar lixo.", imagem: "ROBO" },
    ],
    perguntas: [
      { pergunta: "O que o robô ensinou?", tipo: "literal", modo: "texto",
        correta: "a reciclar lixo", distratores: ["a dançar", "a cozinhar"] },
      { pergunta: "Como as crianças se sentiram?", tipo: "literal", modo: "texto",
        correta: "curiosas", distratores: ["com medo", "com sono"] },
    ],
  },
  {
    id: "h3-coruja-noite",
    titulo: "A Coruja Sábia",
    nivel: 3, capa: "CORUJA",
    vocabBase: ["CORUJA", "LUA"],
    foneticos: ["C", "R"],
    etapaAlinhada: "frases",
    paginas: [
      { texto: "A coruja acorda quando a lua aparece.", imagem: "CORUJA" },
      { texto: "Ela observa a floresta em silêncio.", imagem: "CORUJA" },
      { texto: "Nada escapa dos olhos da coruja.", imagem: "CORUJA" },
    ],
    perguntas: [
      { pergunta: "Quando a coruja acorda?", tipo: "literal", modo: "texto",
        correta: "quando a lua aparece", distratores: ["quando o sol nasce", "quando chove"] },
      { pergunta: "Por que dizem que a coruja é sábia?", tipo: "inferencia", modo: "texto",
        correta: "porque observa tudo", distratores: ["porque voa alto", "porque é grande"] },
    ],
  },
  {
    id: "h3-raposa-uva",
    titulo: "A Raposa e as Uvas",
    nivel: 3, capa: "RAPOSA",
    vocabBase: ["RAPOSA", "UVA"],
    foneticos: ["R", "P"],
    etapaAlinhada: "frases",
    paginas: [
      { texto: "A raposa viu uvas bem altas.", imagem: "RAPOSA" },
      { texto: "Ela pulou várias vezes, mas não alcançou.", imagem: "RAPOSA" },
      { texto: "Cansada, disse: essas uvas estão verdes mesmo.", imagem: "UVA" },
    ],
    perguntas: [
      { pergunta: "Por que ela disse que as uvas estavam verdes?", tipo: "inferencia", modo: "texto",
        correta: "para não admitir que não alcançou", distratores: ["porque provou uma", "porque a árvore era pequena"] },
      { pergunta: "O que a raposa fez primeiro?", tipo: "sequencia", modo: "texto",
        correta: "pulou várias vezes", distratores: ["comeu as uvas", "foi embora sem tentar"] },
    ],
  },
  {
    id: "h3-leao-rato",
    titulo: "O Leão e o Rato",
    nivel: 3, capa: "LEAO",
    vocabBase: ["LEAO", "RATO"],
    foneticos: ["L", "R"],
    etapaAlinhada: "frases",
    paginas: [
      { texto: "O leão pegou um ratinho, mas o soltou.", imagem: "LEAO" },
      { texto: "Depois, o leão caiu em uma armadilha.", imagem: "LEAO" },
      { texto: "O rato roeu as cordas e salvou o leão.", imagem: "RATO" },
    ],
    perguntas: [
      { pergunta: "Por que o rato salvou o leão?", tipo: "inferencia", modo: "texto",
        correta: "porque o leão havia sido bom com ele", distratores: ["porque queria uma recompensa", "porque estava com fome"] },
      { pergunta: "O que aconteceu primeiro?", tipo: "sequencia", modo: "texto",
        correta: "o leão soltou o rato", distratores: ["o leão caiu na armadilha", "o rato roeu as cordas"] },
    ],
  },
  {
    id: "h3-fogo-camping",
    titulo: "A Fogueira do Acampamento",
    nivel: 3, capa: "FOGO",
    vocabBase: ["FOGO", "ESTRELA"],
    foneticos: ["F", "G"],
    etapaAlinhada: "frases",
    paginas: [
      { texto: "A família acampou perto do rio.", imagem: "CASA" },
      { texto: "O papai acendeu uma fogueira segura.", imagem: "FOGO" },
      { texto: "Todos contaram histórias sob as estrelas.", imagem: "ESTRELA" },
    ],
    perguntas: [
      { pergunta: "Quem acendeu a fogueira?", tipo: "literal", modo: "texto",
        correta: "o papai", distratores: ["a mãe", "o irmão"] },
      { pergunta: "O que fizeram sob as estrelas?", tipo: "literal", modo: "texto",
        correta: "contaram histórias", distratores: ["dormiram", "correram"] },
    ],
  },

  // ─────────── NÍVEL 4 (6 anos · encontros consonantais + inferência) ───────────
  {
    id: "h4-brocolis-guerreiro",
    titulo: "O Brócolis Guerreiro",
    nivel: 4, capa: "BROCOLIS",
    vocabBase: ["BROCOLIS"],
    foneticos: ["BR", "CR", "GR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "Bento não gostava de brócolis.", imagem: "BROCOLIS" },
      { texto: "A mãe contou que o brócolis dava superpoderes.", imagem: "HEROI" },
      { texto: "Bento fechou os olhos e experimentou um pedacinho.", imagem: "BROCOLIS" },
      { texto: "Não era tão ruim! No dia seguinte, pediu mais.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Por que Bento resolveu provar?", tipo: "causa", modo: "texto",
        correta: "porque queria superpoderes", distratores: ["porque estava com sede", "porque a mãe brigou"] },
      { pergunta: "O que Bento fez no outro dia?", tipo: "literal", modo: "texto",
        correta: "pediu mais brócolis", distratores: ["cuspiu o brócolis", "escondeu o prato"] },
    ],
  },
  {
    id: "h4-trem-viagem",
    titulo: "O Trem da Vovó",
    nivel: 4, capa: "TREM",
    vocabBase: ["TREM"],
    foneticos: ["TR", "PR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "Clara viajou de trem para visitar a vovó.", imagem: "TREM" },
      { texto: "Pela janela, viu montanhas e rios brilhando.", imagem: "ARVORE" },
      { texto: "A vovó esperava na estação com um bolo pronto.", imagem: "BOLO" },
      { texto: "Clara correu e pulou no colo da vovó.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Clara viu da janela?", tipo: "literal", modo: "texto",
        correta: "montanhas e rios", distratores: ["cidades e prédios", "o mar"] },
      { pergunta: "O que mostra que a vovó a esperava com carinho?", tipo: "inferencia", modo: "texto",
        correta: "estava com um bolo pronto", distratores: ["estava dormindo", "estava brava"] },
    ],
  },
  {
    id: "h4-princesa-livro",
    titulo: "A Princesa dos Livros",
    nivel: 4, capa: "PRINCESA",
    vocabBase: ["PRINCESA"],
    foneticos: ["PR", "CR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "A princesa Aurora não gostava de bailes.", imagem: "PRINCESA" },
      { texto: "Ela preferia ficar horas na biblioteca.", imagem: "PRINCESA" },
      { texto: "Um dia, criou uma escola no castelo para ensinar a ler.", imagem: "PRINCESA" },
      { texto: "O reino inteiro passou a amar livros.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que a princesa preferia?", tipo: "literal", modo: "texto",
        correta: "ler na biblioteca", distratores: ["ir aos bailes", "montar a cavalo"] },
      { pergunta: "O que mudou no reino por causa dela?", tipo: "inferencia", modo: "texto",
        correta: "todos passaram a amar livros", distratores: ["ninguém trabalhou mais", "o castelo virou museu"] },
    ],
  },
  {
    id: "h4-camiseta-favorita",
    titulo: "A Camiseta Favorita",
    nivel: 4, capa: "CAMISETA",
    vocabBase: ["CAMISETA"],
    foneticos: ["CR", "PR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "Pedro tinha uma camiseta preferida do time.", imagem: "CAMISETA" },
      { texto: "Um dia, o irmão pequeno derrubou suco nela.", imagem: "TRISTE" },
      { texto: "A mãe explicou que ele não fez de propósito.", imagem: "CAMISETA" },
      { texto: "Pedro respirou fundo e desculpou o irmão.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que aconteceu com a camiseta?", tipo: "literal", modo: "texto",
        correta: "levou suco em cima", distratores: ["foi rasgada", "sumiu"] },
      { pergunta: "Por que Pedro desculpou o irmão?", tipo: "causa", modo: "texto",
        correta: "porque foi sem querer", distratores: ["porque ganhou outra camiseta", "porque o irmão brigou"] },
    ],
  },
  {
    id: "h4-diamante-cofre",
    titulo: "O Diamante Escondido",
    nivel: 4, capa: "DIAMANTE",
    vocabBase: ["DIAMANTE"],
    foneticos: ["DR", "BR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "Na velha casa, havia um cofre trancado há anos.", imagem: "CASA" },
      { texto: "Léo achou uma chave enferrujada no jardim.", imagem: "FLOR" },
      { texto: "Dentro do cofre, brilhava um pequeno diamante.", imagem: "DIAMANTE" },
      { texto: "Era uma lembrança da bisavó, ele descobriu depois.", imagem: "DIAMANTE" },
    ],
    perguntas: [
      { pergunta: "Onde Léo achou a chave?", tipo: "literal", modo: "texto",
        correta: "no jardim", distratores: ["no cofre", "na cozinha"] },
      { pergunta: "O que o diamante era de verdade?", tipo: "literal", modo: "texto",
        correta: "uma lembrança da bisavó", distratores: ["um brinquedo", "uma pedra qualquer"] },
    ],
  },
  {
    id: "h4-elefante-medo",
    titulo: "O Elefante com Medo",
    nivel: 4, capa: "ELEFANTE",
    vocabBase: ["ELEFANTE"],
    foneticos: ["FR", "TR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "O elefante Zico era enorme, mas tinha medo do escuro.", imagem: "ELEFANTE" },
      { texto: "Toda noite ele acendia uma lanterninha.", imagem: "ESTRELA" },
      { texto: "Um dia, ajudou um coelhinho perdido no escuro.", imagem: "COELHO" },
      { texto: "Zico entendeu que ser forte é ajudar quem tem medo.", imagem: "HEROI" },
    ],
    perguntas: [
      { pergunta: "Do que Zico tinha medo?", tipo: "literal", modo: "texto",
        correta: "do escuro", distratores: ["dos ratos", "dos amigos"] },
      { pergunta: "O que Zico aprendeu?", tipo: "inferencia", modo: "texto",
        correta: "que ser forte é ajudar os outros", distratores: ["que ninguém tem medo", "que precisa correr"] },
    ],
  },
  {
    id: "h4-tartaruga-lebre",
    titulo: "A Tartaruga e a Lebre",
    nivel: 4, capa: "TARTARUGA",
    vocabBase: ["TARTARUGA"],
    foneticos: ["TR", "GR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "A lebre riu da tartaruga lenta e propôs uma corrida.", imagem: "TARTARUGA" },
      { texto: "No meio do caminho, a lebre dormiu descansada.", imagem: "SONO" },
      { texto: "A tartaruga, devagarinho, passou por ela.", imagem: "TARTARUGA" },
      { texto: "E chegou primeiro na linha final.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Por que a lebre perdeu?", tipo: "causa", modo: "texto",
        correta: "porque parou para dormir", distratores: ["porque corria devagar", "porque desistiu"] },
      { pergunta: "O que a história ensina?", tipo: "inferencia", modo: "texto",
        correta: "quem persiste vence", distratores: ["quem é rápido sempre ganha", "quem dorme vence"] },
    ],
  },

  // ─────────── NÍVEL 5 (6–7 anos · dígrafos + inferência avançada) ───────────
  {
    id: "h5-chave-magica",
    titulo: "A Chave Mágica",
    nivel: 5, capa: "DIAMANTE",
    vocabBase: [],
    foneticos: ["ch", "lh", "nh"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "Nina achou uma chave brilhante no sótão.", imagem: "DIAMANTE" },
      { texto: "A cada porta que abria, entrava em um mundo novo.", imagem: "ESTRELA" },
      { texto: "Numa delas, encontrou um dragão que só queria conversar.", imagem: "DINOSSAURO" },
      { texto: "Na última porta, voltou para casa mais corajosa.", imagem: "HEROI" },
    ],
    perguntas: [
      { pergunta: "Onde Nina achou a chave?", tipo: "literal", modo: "texto",
        correta: "no sótão", distratores: ["no porão", "na rua"] },
      { pergunta: "O que o dragão queria?", tipo: "literal", modo: "texto",
        correta: "conversar", distratores: ["comer Nina", "voar embora"] },
      { pergunta: "Como Nina voltou para casa?", tipo: "inferencia", modo: "texto",
        correta: "mais corajosa", distratores: ["muito assustada", "sem lembrar de nada"] },
    ],
  },
  {
    id: "h5-passarinho-primeira",
    titulo: "O Primeiro Voo",
    nivel: 5, capa: "PASSARO",
    vocabBase: [],
    foneticos: ["nh", "ss"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "Pipo era um passarinho que tinha medo de voar.", imagem: "PASSARO" },
      { texto: "Do ninho alto, olhava o vento e tremia.", imagem: "MEDO" },
      { texto: "A mãe disse: você já tem asas e treinou muito.", imagem: "ASA" },
      { texto: "Pipo respirou fundo e se jogou. As asas o carregaram!", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Do que Pipo tinha medo?", tipo: "literal", modo: "texto",
        correta: "de voar", distratores: ["do ninho", "da mãe"] },
      { pergunta: "O que fez Pipo tentar?", tipo: "causa", modo: "texto",
        correta: "as palavras da mãe", distratores: ["a chuva chegando", "outros pássaros"] },
    ],
  },
  {
    id: "h5-mochila-perdida",
    titulo: "A Mochila Perdida",
    nivel: 5, capa: "PRESENTE",
    vocabBase: [],
    foneticos: ["ch", "lh"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "Bia esqueceu a mochila no ônibus da escola.", imagem: "TRISTE" },
      { texto: "Dentro dela estavam o lanche e o caderno favorito.", imagem: "PRESENTE" },
      { texto: "O motorista guardou a mochila no achados e perdidos.", imagem: "CASA" },
      { texto: "No outro dia, Bia recuperou tudo. Agradeceu bastante.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Onde Bia esqueceu a mochila?", tipo: "literal", modo: "texto",
        correta: "no ônibus", distratores: ["no parque", "em casa"] },
      { pergunta: "Quem guardou a mochila?", tipo: "literal", modo: "texto",
        correta: "o motorista", distratores: ["a professora", "o vizinho"] },
      { pergunta: "Por que Bia agradeceu?", tipo: "inferencia", modo: "texto",
        correta: "porque alguém cuidou das coisas dela", distratores: ["porque ganhou uma mochila nova", "porque acertou a prova"] },
    ],
  },
  {
    id: "h5-planta-janela",
    titulo: "A Planta na Janela",
    nivel: 5, capa: "FLOR",
    vocabBase: [],
    foneticos: ["nh", "lh"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "Miguel ganhou uma semente da professora.", imagem: "FLOR" },
      { texto: "Plantou num pote e colocou na janela.", imagem: "FLOR" },
      { texto: "Cuidou todo dia: água, sol e conversa.", imagem: "SOL" },
      { texto: "Depois de semanas, brotou uma flor vermelha.", imagem: "FLOR" },
    ],
    perguntas: [
      { pergunta: "Do que Miguel cuidou?", tipo: "literal", modo: "texto",
        correta: "da semente", distratores: ["de um cachorro", "do irmão"] },
      { pergunta: "Por que a flor cresceu?", tipo: "causa", modo: "texto",
        correta: "porque foi cuidada todo dia", distratores: ["porque foi comprada pronta", "por acaso"] },
    ],
  },
  {
    id: "h5-abelha-mel",
    titulo: "A Abelha que Fez Mel",
    nivel: 5, capa: "ABELHA",
    vocabBase: [],
    foneticos: ["lh"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "A abelha voava de flor em flor todos os dias.", imagem: "ABELHA" },
      { texto: "Levava o néctar para dentro da colmeia.", imagem: "ABELHA" },
      { texto: "As irmãs trabalhavam juntas para fazer mel.", imagem: "ABELHA" },
      { texto: "No fim, o mel era compartilhado com toda a colônia.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que elas fazem juntas?", tipo: "literal", modo: "texto",
        correta: "mel", distratores: ["cera", "flores"] },
      { pergunta: "Por que elas trabalham juntas?", tipo: "inferencia", modo: "texto",
        correta: "para conseguir mais", distratores: ["porque brigam", "porque estão paradas"] },
    ],
  },
  {
    id: "h5-fantasma-simpatico",
    titulo: "O Fantasma Simpático",
    nivel: 5, capa: "SURPRESO",
    vocabBase: [],
    foneticos: ["nh", "ss"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "Na casa velha morava um fantasminha triste.", imagem: "TRISTE" },
      { texto: "Ninguém queria brincar com ele por causa do susto.", imagem: "MEDO" },
      { texto: "Uma menina corajosa disse: quer jogar comigo?", imagem: "FELIZ" },
      { texto: "Desde então, os dois viraram grandes amigos.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Por que ninguém brincava com ele?", tipo: "causa", modo: "texto",
        correta: "porque tinham medo", distratores: ["porque ele era chato", "porque ele mordia"] },
      { pergunta: "O que mudou tudo?", tipo: "inferencia", modo: "texto",
        correta: "a coragem da menina", distratores: ["o fantasma sumiu", "a casa caiu"] },
    ],
  },
  {
    id: "h5-vovo-receita",
    titulo: "A Receita da Vovó",
    nivel: 5, capa: "BOLO",
    vocabBase: [],
    foneticos: ["ch", "nh"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "A vovó guardava a receita do bolo num caderno velho.", imagem: "BOLO" },
      { texto: "Ela ensinou Ana passo a passo, cheia de carinho.", imagem: "FELIZ" },
      { texto: "Ana anotou tudo e fez o bolo sozinha no domingo.", imagem: "BOLO" },
      { texto: "Ficou igualzinho ao da vovó. A família aplaudiu.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Onde a receita estava guardada?", tipo: "literal", modo: "texto",
        correta: "num caderno velho", distratores: ["num livro novo", "no celular"] },
      { pergunta: "Por que a família aplaudiu?", tipo: "inferencia", modo: "texto",
        correta: "porque o bolo ficou igual ao da vovó", distratores: ["porque a vovó chegou", "porque tocou música"] },
    ],
  },

  // ─────────── NÍVEL 6 (7 anos · compreensão profunda) ───────────
  {
    id: "h6-arvore-antiga",
    titulo: "A Árvore Antiga",
    nivel: 6, capa: "ARVORE",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "No centro da praça havia uma árvore que existia há cem anos.", imagem: "ARVORE" },
      { texto: "Muitas gerações brincaram debaixo dela: crianças, pais e avós.", imagem: "FELIZ" },
      { texto: "Certo dia, quiseram cortá-la para fazer um estacionamento.", imagem: "TRISTE" },
      { texto: "A vizinhança se reuniu e conseguiu convencer o prefeito a preservá-la.", imagem: "ARVORE" },
      { texto: "Hoje a árvore continua abrigando risadas, ninhos e memórias.", imagem: "PASSARO" },
    ],
    perguntas: [
      { pergunta: "Quem queria cortar a árvore?", tipo: "literal", modo: "texto",
        correta: "quem queria fazer o estacionamento", distratores: ["os pássaros", "as crianças"] },
      { pergunta: "Como a árvore foi salva?", tipo: "causa", modo: "texto",
        correta: "a vizinhança se uniu", distratores: ["ninguém fez nada", "a chuva impediu"] },
      { pergunta: "O que a árvore representa para o bairro?", tipo: "inferencia", modo: "texto",
        correta: "memórias e vida em comum", distratores: ["um estorvo", "só sombra"] },
    ],
  },
  {
    id: "h6-inventor-crianca",
    titulo: "O Pequeno Inventor",
    nivel: 6, capa: "ROBO",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Léo passava horas desmontando brinquedos velhos.", imagem: "ROBO" },
      { texto: "Com peças reaproveitadas, montou um robôzinho lixeiro.", imagem: "ROBO" },
      { texto: "O invento recolhia papéis pela sala e piscava luzes coloridas.", imagem: "ESTRELA" },
      { texto: "A escola inteira quis conhecer o inventor mirim.", imagem: "FELIZ" },
      { texto: "Léo entendeu que ideias simples podem mudar o mundo.", imagem: "HEROI" },
    ],
    perguntas: [
      { pergunta: "Como Léo criou o robô?", tipo: "literal", modo: "texto",
        correta: "com peças reaproveitadas", distratores: ["comprou pronto", "achou na rua"] },
      { pergunta: "Por que a escola quis conhecê-lo?", tipo: "inferencia", modo: "texto",
        correta: "porque o invento chamou atenção", distratores: ["porque ele faltou", "porque brigou"] },
      { pergunta: "O que Léo aprendeu no final?", tipo: "inferencia", modo: "texto",
        correta: "que ideias simples podem mudar o mundo", distratores: ["que robôs são caros", "que perder é ruim"] },
    ],
  },
  {
    id: "h6-mochileiro-natureza",
    titulo: "A Trilha do Rio",
    nivel: 6, capa: "ARVORE",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "A família saiu para conhecer uma trilha na floresta.", imagem: "ARVORE" },
      { texto: "Ao longo do caminho, encontraram pegadas de animais.", imagem: "RAPOSA" },
      { texto: "Perto do rio, viram peixes, garças e uma capivara curiosa.", imagem: "PEIXE" },
      { texto: "Antes de sair, recolheram todo o lixo que tinham levado.", imagem: "FELIZ" },
      { texto: "Aprenderam que respeitar a natureza é parte da aventura.", imagem: "ARVORE" },
    ],
    perguntas: [
      { pergunta: "O que a família fez antes de sair?", tipo: "literal", modo: "texto",
        correta: "recolheu o lixo", distratores: ["deixou o lixo", "queimou o lixo"] },
      { pergunta: "Por que isso é importante?", tipo: "inferencia", modo: "texto",
        correta: "para preservar o lugar", distratores: ["para não trabalhar", "para ficar mais leve"] },
    ],
  },
  {
    id: "h6-carta-amiga",
    titulo: "A Carta da Amiga",
    nivel: 6, capa: "PRESENTE",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Duda se mudou para outra cidade e sentia falta da melhor amiga.", imagem: "TRISTE" },
      { texto: "Certo dia, chegou uma carta escrita à mão pelo correio.", imagem: "PRESENTE" },
      { texto: "Era Sofia, contando novidades e mandando um desenho colorido.", imagem: "FELIZ" },
      { texto: "Duda respondeu com outra carta e viraram amigas de correspondência.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Por que Duda estava triste no começo?", tipo: "causa", modo: "texto",
        correta: "porque sentia falta da amiga", distratores: ["porque perdeu um brinquedo", "porque brigou em casa"] },
      { pergunta: "O que mostra que a amizade continuou?", tipo: "inferencia", modo: "texto",
        correta: "trocaram cartas várias vezes", distratores: ["nunca mais se falaram", "brigaram na carta"] },
    ],
  },
  {
    id: "h6-cachorro-abandonado",
    titulo: "Um Amigo na Chuva",
    nivel: 6, capa: "CACHORRO",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Estava chovendo forte quando Bia viu um cachorro molhado na calçada.", imagem: "CHUVA" },
      { texto: "Ele tremia e não tinha coleira nenhuma.", imagem: "CACHORRO" },
      { texto: "A família decidiu levá-lo em casa e cuidar até achar um lar.", imagem: "CACHORRO" },
      { texto: "Depois de semanas de amor, entenderam: o lar dele já era ali.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Como estava o cachorro na calçada?", tipo: "literal", modo: "texto",
        correta: "molhado e tremendo", distratores: ["dormindo", "correndo"] },
      { pergunta: "O que a família descobriu no fim?", tipo: "inferencia", modo: "texto",
        correta: "que aquele já era o lar dele", distratores: ["que ele era bravo", "que precisava devolver"] },
    ],
  },
  {
    id: "h6-menino-oceano",
    titulo: "O Menino e o Oceano",
    nivel: 6, capa: "PEIXE",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Todo verão, Caio visitava a praia com os avós.", imagem: "SOL" },
      { texto: "Ele adorava juntar conchas e desenhar mapas na areia.", imagem: "ESTRELA" },
      { texto: "Um dia, viu uma tartaruguinha voltando ao mar depois de nascer.", imagem: "TARTARUGA" },
      { texto: "Caio percebeu como cada gesto humano ajuda ou machuca o oceano.", imagem: "PEIXE" },
      { texto: "Prometeu nunca deixar lixo na praia — e ensinou os amigos.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Caio viu naquele dia?", tipo: "literal", modo: "texto",
        correta: "uma tartaruguinha indo ao mar", distratores: ["um barco pirata", "um golfinho"] },
      { pergunta: "O que ele prometeu?", tipo: "literal", modo: "texto",
        correta: "não deixar lixo na praia", distratores: ["não voltar mais", "levar conchas para casa"] },
      { pergunta: "Por que ele ensinou os amigos?", tipo: "inferencia", modo: "texto",
        correta: "para o oceano ser cuidado por mais gente", distratores: ["para ganhar prêmio", "porque estava com raiva"] },
    ],
  },

  // ─────────── NÍVEL 4 — EXPANSÃO (6 anos · encontros consonantais) ───────────
  {
    id: "h4-drago-timido",
    titulo: "O Dragão Tímido",
    nivel: 4, capa: "DINOSSAURO",
    vocabBase: [],
    foneticos: ["DR", "GR", "TR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "O dragão Draco tinha vergonha de soltar fogo.", imagem: "DINOSSAURO" },
      { texto: "Os amigos treinavam com ele todo dia na gruta.", imagem: "FOGO" },
      { texto: "Um dia, ele soltou uma labareda pequena, mas certeira.", imagem: "FOGO" },
      { texto: "Todos aplaudiram e Draco sorriu envergonhado.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Do que Draco tinha vergonha?", tipo: "literal", modo: "texto",
        correta: "de soltar fogo", distratores: ["de voar", "de rugir"] },
      { pergunta: "O que ajudou Draco a conseguir?", tipo: "causa", modo: "texto",
        correta: "o treino com os amigos", distratores: ["ele desistiu", "estava com raiva"] },
    ],
  },
  {
    id: "h4-fruta-estranha",
    titulo: "A Fruta Estranha",
    nivel: 4, capa: "MORANGO",
    vocabBase: [],
    foneticos: ["FR", "TR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "No mercado, Bruno viu uma fruta que nunca tinha provado.", imagem: "MORANGO" },
      { texto: "A mãe explicou que era boa e cheia de vitamina.", imagem: "MACA" },
      { texto: "Bruno provou um pedacinho e adorou o sabor doce.", imagem: "FELIZ" },
      { texto: "Agora sempre pede aquela fruta na feira.", imagem: "MORANGO" },
    ],
    perguntas: [
      { pergunta: "Onde Bruno viu a fruta?", tipo: "literal", modo: "texto",
        correta: "no mercado", distratores: ["na escola", "no parque"] },
      { pergunta: "Por que Bruno passou a pedir?", tipo: "inferencia", modo: "texto",
        correta: "porque adorou o sabor", distratores: ["porque a mãe mandou", "porque era barata"] },
    ],
  },
  {
    id: "h4-grilo-cantor",
    titulo: "O Grilo Cantor",
    nivel: 4, capa: "SAPO",
    vocabBase: [],
    foneticos: ["GR", "CR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "O grilo Gru cantava toda noite perto do brejo.", imagem: "SAPO" },
      { texto: "Os bichos reclamavam que não conseguiam dormir.", imagem: "SONO" },
      { texto: "Gru então criou uma música mais suave e curta.", imagem: "ESTRELA" },
      { texto: "Todos passaram a dormir bem, embalados pelo canto.", imagem: "SONO" },
    ],
    perguntas: [
      { pergunta: "Por que os bichos reclamavam?", tipo: "causa", modo: "texto",
        correta: "não conseguiam dormir", distratores: ["não gostavam de música", "estavam com fome"] },
      { pergunta: "O que Gru fez para resolver?", tipo: "literal", modo: "texto",
        correta: "cantou mais suave", distratores: ["parou de cantar", "cantou mais alto"] },
    ],
  },
  {
    id: "h4-bruno-bicicleta",
    titulo: "A Bicicleta Nova",
    nivel: 4, capa: "PRESENTE",
    vocabBase: [],
    foneticos: ["BR", "CL"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "Bruno ganhou uma bicicleta azul de aniversário.", imagem: "PRESENTE" },
      { texto: "No começo caiu várias vezes no quintal.", imagem: "TRISTE" },
      { texto: "O pai segurou o selim e correu junto até ele equilibrar.", imagem: "FELIZ" },
      { texto: "No fim da tarde, Bruno pedalava sozinho pela rua.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Bruno ganhou?", tipo: "literal", modo: "texto",
        correta: "uma bicicleta", distratores: ["um patinete", "uma bola"] },
      { pergunta: "Como ele aprendeu a pedalar?", tipo: "inferencia", modo: "texto",
        correta: "com ajuda e tentativas", distratores: ["sozinho de primeira", "vendo na TV"] },
    ],
  },
  {
    id: "h4-cravo-jardim",
    titulo: "O Cravo do Jardim",
    nivel: 4, capa: "FLOR",
    vocabBase: [],
    foneticos: ["CR", "FL"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "No jardim da escola cresceu um cravo vermelho enorme.", imagem: "FLOR" },
      { texto: "As crianças cuidavam e mediam o crescimento toda semana.", imagem: "FLOR" },
      { texto: "Um dia, o vento forte quase quebrou o caule.", imagem: "CHUVA" },
      { texto: "A turma amarrou uma estaquinha e salvou a flor.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que quase quebrou o cravo?", tipo: "literal", modo: "texto",
        correta: "o vento forte", distratores: ["a chuva fina", "as formigas"] },
      { pergunta: "Como a turma salvou a flor?", tipo: "literal", modo: "texto",
        correta: "amarrou uma estaquinha", distratores: ["cortou a flor", "trocou o vaso"] },
    ],
  },
  {
    id: "h4-tromba-elefante",
    titulo: "A Tromba Curiosa",
    nivel: 4, capa: "ELEFANTE",
    vocabBase: [],
    foneticos: ["TR", "BR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "Tito, o elefantinho, mexia em tudo com a tromba.", imagem: "ELEFANTE" },
      { texto: "Um dia, encontrou uma abelha dentro de uma flor.", imagem: "ABELHA" },
      { texto: "Levou uma ferroada e ficou com a tromba inchada.", imagem: "TRISTE" },
      { texto: "Aprendeu que curiosidade é boa, mas com cuidado.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Por que Tito se machucou?", tipo: "causa", modo: "texto",
        correta: "mexeu numa abelha", distratores: ["caiu na água", "brigou com outro elefante"] },
      { pergunta: "O que ele aprendeu?", tipo: "inferencia", modo: "texto",
        correta: "curiosidade precisa de cuidado", distratores: ["nunca sair de casa", "não ter tromba"] },
    ],
  },
  {
    id: "h4-globo-mundo",
    titulo: "O Globo Girando",
    nivel: 4, capa: "LUA",
    vocabBase: [],
    foneticos: ["GL", "BR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "A professora trouxe um globo grande para a aula.", imagem: "LUA" },
      { texto: "Cada aluno apontou um país que queria conhecer.", imagem: "ESTRELA" },
      { texto: "Bia escolheu um país frio, com muita neve.", imagem: "CHUVA" },
      { texto: "Combinaram de fazer uma feira de países no fim do mês.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Bia escolheu?", tipo: "literal", modo: "texto",
        correta: "um país frio", distratores: ["um país quente", "uma ilha"] },
      { pergunta: "O que a turma combinou?", tipo: "literal", modo: "texto",
        correta: "fazer uma feira de países", distratores: ["viajar juntos", "trocar de escola"] },
    ],
  },
  {
    id: "h4-clara-flauta",
    titulo: "A Flauta de Clara",
    nivel: 4, capa: "ESTRELA",
    vocabBase: [],
    foneticos: ["CL", "FL"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "Clara treinava flauta todo dia depois da escola.", imagem: "ESTRELA" },
      { texto: "No começo saía só um assobio esquisito.", imagem: "SURPRESO" },
      { texto: "Com paciência, aprendeu uma música curta e bonita.", imagem: "FELIZ" },
      { texto: "Apresentou para a família no jantar de domingo.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Clara aprendeu?", tipo: "literal", modo: "texto",
        correta: "tocar uma música na flauta", distratores: ["dançar balé", "tocar piano"] },
      { pergunta: "O que ajudou Clara a melhorar?", tipo: "causa", modo: "texto",
        correta: "paciência e treino diário", distratores: ["sorte", "trocar de flauta"] },
    ],
  },
  {
    id: "h4-preto-branco",
    titulo: "As Cores do Pinguim",
    nivel: 4, capa: "PASSARO",
    vocabBase: [],
    foneticos: ["PR", "BR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "O pinguim Pepe queria ter penas coloridas.", imagem: "PASSARO" },
      { texto: "Achava que preto e branco era sem graça.", imagem: "TRISTE" },
      { texto: "A mãe explicou que as cores dele o escondem dos predadores.", imagem: "PASSARO" },
      { texto: "Pepe passou a se orgulhar do seu casaco elegante.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Pepe queria no começo?", tipo: "literal", modo: "texto",
        correta: "penas coloridas", distratores: ["nadar rápido", "voar alto"] },
      { pergunta: "Por que o preto e branco é útil?", tipo: "inferencia", modo: "texto",
        correta: "ajuda a se esconder", distratores: ["deixa ele mais bonito", "esquenta mais"] },
    ],
  },
  {
    id: "h4-plano-brincadeira",
    titulo: "O Plano da Turma",
    nivel: 4, capa: "FELIZ",
    vocabBase: [],
    foneticos: ["PL", "BR"],
    etapaAlinhada: "encontros",
    paginas: [
      { texto: "A turma queria organizar uma brincadeira nova no recreio.", imagem: "BOLA" },
      { texto: "Cada um deu uma ideia diferente, e escreveram tudo no quadro.", imagem: "ESTRELA" },
      { texto: "Votaram e escolheram a caça ao tesouro pelo pátio.", imagem: "PRESENTE" },
      { texto: "No dia, todos participaram e se divertiram muito.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Como escolheram a brincadeira?", tipo: "literal", modo: "texto",
        correta: "por votação", distratores: ["por sorteio", "a professora decidiu"] },
      { pergunta: "O que a história mostra?", tipo: "inferencia", modo: "texto",
        correta: "todos participando decidem melhor", distratores: ["só um manda", "melhor não decidir"] },
    ],
  },

  // ─────────── NÍVEL 5 — EXPANSÃO (6–7 anos · dígrafos) ───────────
  {
    id: "h5-chuva-poca",
    titulo: "A Poça Encantada",
    nivel: 5, capa: "CHUVA",
    vocabBase: [],
    foneticos: ["ch", "ss"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "Choveu a noite toda e no quintal apareceu uma poça enorme.", imagem: "CHUVA" },
      { texto: "Nela, Nina viu o reflexo do céu cheio de nuvens brancas.", imagem: "LUA" },
      { texto: "Pisou de galocha e fez a nuvem se desmanchar em ondas.", imagem: "FELIZ" },
      { texto: "Ficou horas brincando com aquele pedacinho de céu no chão.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Nina viu na poça?", tipo: "literal", modo: "texto",
        correta: "o reflexo do céu", distratores: ["um peixinho", "uma moeda"] },
      { pergunta: "Por que a nuvem se desmanchou?", tipo: "causa", modo: "texto",
        correta: "porque Nina pisou na poça", distratores: ["porque o sol veio", "porque veio vento"] },
    ],
  },
  {
    id: "h5-milho-galinha",
    titulo: "A Galinha Chiquinha",
    nivel: 5, capa: "GALINHA",
    vocabBase: [],
    foneticos: ["ch", "nh"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "Chiquinha era a galinha mais esperta do galinheiro.", imagem: "GALINHA" },
      { texto: "Sempre achava o milho escondido pelo Vovô.", imagem: "GALO" },
      { texto: "Um dia, ensinou as amigas a procurarem juntas.", imagem: "PINTINHO" },
      { texto: "Assim, todas comeram bem e ninguém ficou com fome.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Chiquinha achava?", tipo: "literal", modo: "texto",
        correta: "o milho escondido", distratores: ["uma coroa", "um ovo de ouro"] },
      { pergunta: "Por que ela ensinou as amigas?", tipo: "inferencia", modo: "texto",
        correta: "para todas comerem", distratores: ["para ficar sozinha", "para ganhar prêmio"] },
    ],
  },
  {
    id: "h5-lhama-viagem",
    titulo: "A Lhama Viajante",
    nivel: 5, capa: "CABRA",
    vocabBase: [],
    foneticos: ["lh", "nh"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "Lulu, a lhama, queria conhecer o mundo além da montanha.", imagem: "CABRA" },
      { texto: "Levou uma bolsinha com frutas e um lenço colorido.", imagem: "PRESENTE" },
      { texto: "No caminho, ajudou uma coelhinha a achar o buraco de casa.", imagem: "COELHO" },
      { texto: "Voltou cheia de histórias para contar às amigas.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Lulu levou na bolsa?", tipo: "literal", modo: "texto",
        correta: "frutas e um lenço", distratores: ["ouro e joias", "livros pesados"] },
      { pergunta: "O que ela ganhou na viagem?", tipo: "inferencia", modo: "texto",
        correta: "histórias para contar", distratores: ["dinheiro", "medo do mundo"] },
    ],
  },
  {
    id: "h5-passaro-passeio",
    titulo: "O Passeio no Parque",
    nivel: 5, capa: "PASSARO",
    vocabBase: [],
    foneticos: ["ss", "ch"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "No domingo, a família foi passear no parque grande.", imagem: "ARVORE" },
      { texto: "Levaram pipa, chapéu e um lanche gostoso.", imagem: "PRESENTE" },
      { texto: "As crianças correram atrás de um passarinho azul.", imagem: "PASSARO" },
      { texto: "No fim da tarde, sentaram para ver o pôr do sol.", imagem: "SOL" },
    ],
    perguntas: [
      { pergunta: "O que levaram para o parque?", tipo: "literal", modo: "texto",
        correta: "pipa, chapéu e lanche", distratores: ["bola e chuteira", "livros e caneta"] },
      { pergunta: "O que fizeram no fim da tarde?", tipo: "literal", modo: "texto",
        correta: "viram o pôr do sol", distratores: ["foram embora", "compraram sorvete"] },
    ],
  },
  {
    id: "h5-coelhinho-lh",
    titulo: "A Toca do Coelhinho",
    nivel: 5, capa: "COELHO",
    vocabBase: [],
    foneticos: ["lh", "nh"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "Coelhinho cavava uma toca profunda perto da árvore.", imagem: "COELHO" },
      { texto: "Fez três quartinhos: um de dormir, um de comer e um de brincar.", imagem: "CASA" },
      { texto: "Convidou os irmãos para morar juntos no inverno.", imagem: "COELHO" },
      { texto: "Passaram os dias frios abrigados e felizes.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Quantos quartinhos ele fez?", tipo: "literal", modo: "texto",
        correta: "três", distratores: ["um", "cinco"] },
      { pergunta: "Por que chamou os irmãos?", tipo: "inferencia", modo: "texto",
        correta: "para não ficarem sozinhos no frio", distratores: ["para trabalharem", "porque brigou"] },
    ],
  },
  {
    id: "h5-macarrao-domingo",
    titulo: "O Macarrão de Domingo",
    nivel: 5, capa: "BOLO",
    vocabBase: [],
    foneticos: ["rr", "nh"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "Todo domingo o pai fazia macarrão para a família.", imagem: "BOLO" },
      { texto: "Sofia ajudava a ralar queijo e mexer o molho.", imagem: "FELIZ" },
      { texto: "O irmão pequeno colocava a mesa devagarinho.", imagem: "URSINHO" },
      { texto: "Almoçar juntos era o momento preferido da semana.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Sofia fazia?", tipo: "literal", modo: "texto",
        correta: "ralava queijo e mexia o molho", distratores: ["lavava o carro", "cortava a grama"] },
      { pergunta: "Por que era o momento preferido?", tipo: "inferencia", modo: "texto",
        correta: "porque estavam todos juntos", distratores: ["porque comiam muito", "porque tinha TV"] },
    ],
  },
  {
    id: "h5-abelhinha-flor",
    titulo: "A Abelhinha Perdida",
    nivel: 5, capa: "ABELHA",
    vocabBase: [],
    foneticos: ["lh", "nh"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "A abelhinha Zunzum se distraiu num campo de flores.", imagem: "FLOR" },
      { texto: "Quando olhou em volta, não sabia o caminho da colmeia.", imagem: "TRISTE" },
      { texto: "Seguiu o barulho das amigas trabalhando ao longe.", imagem: "ABELHA" },
      { texto: "Chegou em casa e prometeu ficar sempre perto do grupo.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Como Zunzum voltou pra casa?", tipo: "literal", modo: "texto",
        correta: "seguiu o barulho das amigas", distratores: ["chorou até alguém achar", "voou em círculos"] },
      { pergunta: "O que ela aprendeu?", tipo: "inferencia", modo: "texto",
        correta: "ficar perto do grupo", distratores: ["voar mais alto", "fugir das flores"] },
    ],
  },
  {
    id: "h5-nhoque-vovo",
    titulo: "O Nhoque da Vovó",
    nivel: 5, capa: "BOLO",
    vocabBase: [],
    foneticos: ["nh", "ch"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "Vovó ensinou Miguel a fazer nhoque com batata.", imagem: "BOLO" },
      { texto: "Amassaram a massa e cortaram bolinhas iguaizinhas.", imagem: "FELIZ" },
      { texto: "Miguel achou incrível ver a massa flutuar na água quente.", imagem: "SURPRESO" },
      { texto: "No prato, cada nhoque saiu com carinho da vovó.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Do que é feito o nhoque?", tipo: "literal", modo: "texto",
        correta: "batata", distratores: ["arroz", "carne"] },
      { pergunta: "O que impressionou Miguel?", tipo: "literal", modo: "texto",
        correta: "a massa flutuar", distratores: ["o cheiro forte", "o barulho da panela"] },
    ],
  },
  {
    id: "h5-passarinho-ninho",
    titulo: "O Ninho Novinho",
    nivel: 5, capa: "PASSARO",
    vocabBase: [],
    foneticos: ["nh", "ss"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "O casal de pássaros construía um ninho no galho da mangueira.", imagem: "PASSARO" },
      { texto: "Usaram gravetos, penugem e um pedaço de barbante.", imagem: "ASA" },
      { texto: "Logo os ovinhos apareceram, aconchegados no ninho.", imagem: "CORACAO" },
      { texto: "Semanas depois, três filhotinhos piavam pedindo comida.", imagem: "PASSARO" },
    ],
    perguntas: [
      { pergunta: "Com o que construíram o ninho?", tipo: "literal", modo: "texto",
        correta: "gravetos, penugem e barbante", distratores: ["barro e pedras", "papel e cola"] },
      { pergunta: "O que aconteceu semanas depois?", tipo: "literal", modo: "texto",
        correta: "os filhotinhos nasceram", distratores: ["o ninho caiu", "foram embora"] },
    ],
  },
  {
    id: "h5-chuveiro-frio",
    titulo: "O Chuveiro Quente",
    nivel: 5, capa: "CHUVA",
    vocabBase: [],
    foneticos: ["ch", "rr"],
    etapaAlinhada: "digrafos",
    paginas: [
      { texto: "No inverno, Lia não gostava de tomar banho por causa do frio.", imagem: "TRISTE" },
      { texto: "A mãe ensinou a testar a água antes de entrar no chuveiro.", imagem: "CHUVA" },
      { texto: "A água quentinha fazia Lia querer ficar mais tempo lá.", imagem: "FELIZ" },
      { texto: "Agora canta enquanto se ensaboa toda contente.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Por que Lia não gostava do banho?", tipo: "causa", modo: "texto",
        correta: "por causa do frio", distratores: ["por causa do sabão", "porque enrolava"] },
      { pergunta: "O que mudou?", tipo: "inferencia", modo: "texto",
        correta: "aprendeu a deixar a água na temperatura certa", distratores: ["parou de tomar banho", "trocou de casa"] },
    ],
  },

  // ─────────── NÍVEL 6 — EXPANSÃO (7 anos · compreensão profunda) ───────────
  {
    id: "h6-professora-nova",
    titulo: "A Professora Nova",
    nivel: 6, capa: "PRINCESA",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "No começo do ano, a turma recebeu uma professora nova.", imagem: "PRINCESA" },
      { texto: "Muitos alunos estavam com saudade da antiga e não queriam mudança.", imagem: "TRISTE" },
      { texto: "A professora ouviu cada um contar o que gostava de aprender.", imagem: "CORACAO" },
      { texto: "Semanas depois, a turma inteira já rezava para não faltar aula.", imagem: "FELIZ" },
      { texto: "Descobriram que aceitar o novo pode ser tão bom quanto lembrar do velho.", imagem: "ESTRELA" },
    ],
    perguntas: [
      { pergunta: "Por que a turma estava chateada no começo?", tipo: "causa", modo: "texto",
        correta: "sentia saudade da professora antiga", distratores: ["a sala estava suja", "não tinha lanche"] },
      { pergunta: "O que fez a turma mudar de ideia?", tipo: "inferencia", modo: "texto",
        correta: "a professora ouviu cada um", distratores: ["ela deu prêmios", "cancelou as provas"] },
      { pergunta: "O que a história mostra?", tipo: "inferencia", modo: "texto",
        correta: "dar chance ao novo vale a pena", distratores: ["nunca aceitar mudanças", "professor não importa"] },
    ],
  },
  {
    id: "h6-horta-comunitaria",
    titulo: "A Horta da Rua",
    nivel: 6, capa: "CENOURA",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Um terreno baldio na rua estava sempre cheio de lixo.", imagem: "TRISTE" },
      { texto: "Alguns vizinhos se juntaram para transformá-lo em horta.", imagem: "FLOR" },
      { texto: "Cada família cuidava de um canteiro diferente.", imagem: "CENOURA" },
      { texto: "As colheitas eram divididas entre todos os moradores.", imagem: "FELIZ" },
      { texto: "A rua ficou mais bonita, e ninguém mais jogava lixo lá.", imagem: "ARVORE" },
    ],
    perguntas: [
      { pergunta: "Como estava o terreno antes?", tipo: "literal", modo: "texto",
        correta: "cheio de lixo", distratores: ["cheio de flores", "cheio de brinquedos"] },
      { pergunta: "Por que ninguém joga lixo mais?", tipo: "inferencia", modo: "texto",
        correta: "porque passaram a cuidar do lugar", distratores: ["porque a prefeitura proibiu", "porque não tem lixo na rua"] },
    ],
  },
  {
    id: "h6-carta-avo",
    titulo: "A Caixa do Sótão",
    nivel: 6, capa: "PRESENTE",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Numa faxina, Rafa achou uma caixa antiga escondida no sótão.", imagem: "PRESENTE" },
      { texto: "Dentro, cartas do avô, fotos amareladas e um relógio parado.", imagem: "DIAMANTE" },
      { texto: "A mãe leu as cartas em voz alta, com os olhos brilhando.", imagem: "CORACAO" },
      { texto: "Rafa entendeu que aquelas cartas contavam a história da família.", imagem: "FELIZ" },
      { texto: "Guardaram tudo com carinho para mostrar aos netos um dia.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Rafa achou na caixa?", tipo: "literal", modo: "texto",
        correta: "cartas, fotos e um relógio", distratores: ["brinquedos novos", "dinheiro"] },
      { pergunta: "Por que a mãe se emocionou?", tipo: "inferencia", modo: "texto",
        correta: "as cartas eram do avô", distratores: ["as cartas eram feias", "as fotos estavam rasgadas"] },
      { pergunta: "Por que guardaram tudo com carinho?", tipo: "inferencia", modo: "texto",
        correta: "para mostrar às próximas gerações", distratores: ["para vender depois", "porque não tinha espaço"] },
    ],
  },
  {
    id: "h6-cachorro-guia",
    titulo: "O Cão da Vovó",
    nivel: 6, capa: "CACHORRO",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "A vovó de Pedro não enxergava mais como antes.", imagem: "TRISTE" },
      { texto: "Recebeu um cão-guia treinado, chamado Bruno.", imagem: "CACHORRO" },
      { texto: "Bruno a levava com segurança pela calçada e pelo mercado.", imagem: "CACHORRO" },
      { texto: "Pedro percebeu como o cão era mais que um bicho: era um amigo.", imagem: "CORACAO" },
      { texto: "A vovó voltou a sair sozinha, sorrindo pelas ruas.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Para que serve o cão-guia?", tipo: "literal", modo: "texto",
        correta: "ajudar pessoas que não enxergam bem", distratores: ["brincar com bola", "guardar a casa"] },
      { pergunta: "Por que Pedro admira Bruno?", tipo: "inferencia", modo: "texto",
        correta: "porque cuida da vovó", distratores: ["porque é grande", "porque late alto"] },
    ],
  },
  {
    id: "h6-tempo-avancado",
    titulo: "A Máquina do Tempo",
    nivel: 6, capa: "ROBO",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Lia imaginou uma máquina que a levaria a qualquer tempo.", imagem: "ROBO" },
      { texto: "Primeiro visitou os dinossauros e ficou boquiaberta.", imagem: "DINOSSAURO" },
      { texto: "Depois foi ao futuro e viu cidades cheias de árvores.", imagem: "ARVORE" },
      { texto: "Percebeu que o futuro depende do que fazemos agora.", imagem: "ESTRELA" },
      { texto: "Voltou para casa decidida a cuidar melhor do planeta.", imagem: "CORACAO" },
    ],
    perguntas: [
      { pergunta: "Para onde Lia foi primeiro?", tipo: "literal", modo: "texto",
        correta: "para o tempo dos dinossauros", distratores: ["para o futuro", "para o mar"] },
      { pergunta: "O que ela percebeu?", tipo: "inferencia", modo: "texto",
        correta: "o futuro depende das nossas escolhas", distratores: ["o passado é melhor", "dinossauros voltarão"] },
      { pergunta: "O que Lia decidiu ao voltar?", tipo: "literal", modo: "texto",
        correta: "cuidar melhor do planeta", distratores: ["nunca sair de casa", "esquecer a viagem"] },
    ],
  },
  {
    id: "h6-menina-bicicleta-conserto",
    titulo: "O Conserto da Bicicleta",
    nivel: 6, capa: "PRESENTE",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "A bicicleta de Bia estava com o pneu furado há dias.", imagem: "TRISTE" },
      { texto: "Ela pediu ajuda ao vizinho, que tinha uma pequena oficina.", imagem: "HEROI" },
      { texto: "Aprendeu a tirar a câmara e encontrar o furinho na água.", imagem: "SURPRESO" },
      { texto: "Colou o remendo e encheu o pneu com uma bomba manual.", imagem: "FELIZ" },
      { texto: "No dia seguinte, ensinou a mesma técnica para o primo.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Como Bia achou o furo?", tipo: "literal", modo: "texto",
        correta: "colocando a câmara na água", distratores: ["olhando de longe", "cortando o pneu"] },
      { pergunta: "Por que ela ensinou o primo?", tipo: "inferencia", modo: "texto",
        correta: "para ele também saber consertar", distratores: ["para ele se afastar", "para ganhar dinheiro"] },
    ],
  },
  {
    id: "h6-museu-visita",
    titulo: "Uma Tarde no Museu",
    nivel: 6, capa: "DIAMANTE",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "A turma foi visitar o museu da cidade num dia de chuva.", imagem: "CHUVA" },
      { texto: "Cada sala contava uma parte da história do lugar onde vivem.", imagem: "ESTRELA" },
      { texto: "Lucas se apaixonou por um esqueleto de dinossauro gigante.", imagem: "DINOSSAURO" },
      { texto: "Ana se emocionou vendo brinquedos de crianças de outra época.", imagem: "URSINHO" },
      { texto: "Voltaram cheios de vontade de estudar mais sobre o passado.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "O que Lucas mais gostou?", tipo: "literal", modo: "texto",
        correta: "do esqueleto de dinossauro", distratores: ["dos quadros", "das joias"] },
      { pergunta: "O que a visita despertou nas crianças?", tipo: "inferencia", modo: "texto",
        correta: "vontade de aprender sobre o passado", distratores: ["cansaço", "medo de museu"] },
    ],
  },
  {
    id: "h6-primeiro-dente",
    titulo: "O Primeiro Dente que Caiu",
    nivel: 6, capa: "SURPRESO",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Enzo estava com um dentinho mole há semanas.", imagem: "SURPRESO" },
      { texto: "Ficava mexendo com a língua o tempo todo.", imagem: "FELIZ" },
      { texto: "Um dia, mordeu uma maçã e o dente ficou preso na fruta.", imagem: "MACA" },
      { texto: "Guardou o dente numa caixinha para mostrar à professora.", imagem: "PRESENTE" },
      { texto: "Descobriu que crescer é um pouco estranho, mas emocionante.", imagem: "FELIZ" },
    ],
    perguntas: [
      { pergunta: "Como o dente caiu?", tipo: "literal", modo: "texto",
        correta: "mordendo uma maçã", distratores: ["numa queda", "no dentista"] },
      { pergunta: "O que Enzo descobriu?", tipo: "inferencia", modo: "texto",
        correta: "crescer é emocionante", distratores: ["não gosta de maçã", "vai perder todos os dentes hoje"] },
    ],
  },
  {
    id: "h6-cientista-mirim",
    titulo: "A Cientista Mirim",
    nivel: 6, capa: "ESTRELA",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Aninha adorava fazer experiências no quintal.", imagem: "ESTRELA" },
      { texto: "Anotava tudo num caderninho: chuva, temperatura e insetos.", imagem: "PRESENTE" },
      { texto: "Notou que as formigas apareciam mais nos dias abafados.", imagem: "SURPRESO" },
      { texto: "Mostrou os dados para a professora, que ficou impressionada.", imagem: "FELIZ" },
      { texto: "A escola criou um clube de ciências só por causa dela.", imagem: "HEROI" },
    ],
    perguntas: [
      { pergunta: "O que Aninha fazia?", tipo: "literal", modo: "texto",
        correta: "anotava suas observações", distratores: ["copiava a irmã", "jogava videogame"] },
      { pergunta: "Por que a escola criou o clube?", tipo: "causa", modo: "texto",
        correta: "por causa das descobertas dela", distratores: ["porque sobrou dinheiro", "porque outra escola já tinha"] },
      { pergunta: "O que a história ensina?", tipo: "inferencia", modo: "texto",
        correta: "curiosidade vira ciência", distratores: ["ciência é chata", "só adultos observam"] },
    ],
  },
  {
    id: "h6-pescador-menino",
    titulo: "O Menino e o Pescador",
    nivel: 6, capa: "PEIXE",
    vocabBase: [],
    foneticos: ["fluencia"],
    etapaAlinhada: "compreensao",
    paginas: [
      { texto: "Todo fim de tarde, Iago ia ver o velho pescador no cais.", imagem: "PEIXE" },
      { texto: "Aprendeu a fazer nós, jogar rede e respeitar o tempo do mar.", imagem: "ESTRELA" },
      { texto: "O pescador dizia: quem tem pressa não pesca nada bom.", imagem: "SURPRESO" },
      { texto: "Iago passou a esperar com calma e conseguiu seu primeiro peixe.", imagem: "FELIZ" },
      { texto: "Guardou a lição para o resto da vida: paciência é sabedoria.", imagem: "CORACAO" },
    ],
    perguntas: [
      { pergunta: "O que Iago aprendeu com o pescador?", tipo: "literal", modo: "texto",
        correta: "nós, rede e paciência", distratores: ["cantar músicas", "consertar carros"] },
      { pergunta: "O que a frase do pescador quer dizer?", tipo: "inferencia", modo: "texto",
        correta: "ter pressa atrapalha", distratores: ["nunca ir pescar", "pescar é fácil"] },
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
