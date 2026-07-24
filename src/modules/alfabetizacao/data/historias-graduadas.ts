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
