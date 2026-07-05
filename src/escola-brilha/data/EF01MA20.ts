import type { Aula } from "../types";

/**
 * EF01MA20 — Aula 020 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Classificar eventos envolvendo o acaso — "acontecerá com certeza",
 *       "talvez aconteça" e "é impossível acontecer".
 *
 * Missão: "A Roleta da Sorte da Floresta".
 */
const emojiImg = (emoji: string): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><foreignObject x='0' y='0' width='200' height='200'><div xmlns='http://www.w3.org/1999/xhtml' style='width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-size:150px;line-height:1;font-family:Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,EmojiOne Color,Twemoji Mozilla,sans-serif'>${emoji}</div></foreignObject></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Ícones de categoria
const certoImg = emojiImg("✅");
const possivelImg = emojiImg("🤔");
const impossivelImg = emojiImg("❌");

// Eventos
const solImg = emojiImg("☀️");
const luaImg = emojiImg("🌙");
const chuvaImg = emojiImg("🌧️");
const nuvemImg = emojiImg("☁️");
const gatoImg = emojiImg("🐱");
const passarinhoImg = emojiImg("🐦");
const vacaImg = emojiImg("🐄");
const cachorroImg = emojiImg("🐶");
const peixeImg = emojiImg("🐟");
const elefanteImg = emojiImg("🐘");
const bananaImg = emojiImg("🍌");
const balaoImg = emojiImg("🎈");
const dadoImg = emojiImg("🎲");
const roletaImg = emojiImg("🎡");
const bolaVermelhaImg = emojiImg("🔴");
const bolaAzulImg = emojiImg("🔵");
const bolaVerdeImg = emojiImg("🟢");
const presenteImg = emojiImg("🎁");
const ovoImg = emojiImg("🥚");
const bicicletaImg = emojiImg("🚲");

const aula: Aula = {
  codigo: "EF01MA20",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "A Roleta da Sorte da Floresta",

  narrativa: {
    titulo: "A Roleta da Sorte da Floresta",
    contexto:
      "Hoje o Brilha ✨ encontrou uma roleta 🎡 encantada no meio da floresta.",
    problema:
      "Algumas coisas SEMPRE acontecem, outras PODEM acontecer e algumas NUNCA acontecem. E agora?",
    convite: "Vamos ajudar o Brilha a descobrir quais são?",
  },

  conhecimentosPrevios: [
    "Observar acontecimentos do cotidiano.",
    "Reconhecer sim / não / talvez.",
    "Comparar situações reais e imaginárias.",
  ],

  missao:
    "Classificar eventos do acaso em CERTO, POSSÍVEL ou IMPOSSÍVEL em situações do cotidiano.",

  objetivos: [
    "Compreender a ideia de acaso.",
    "Identificar eventos certos, possíveis e impossíveis.",
    "Observar situações do cotidiano.",
    "Desenvolver o raciocínio lógico.",
  ],

  motivacao:
    "Saber o que é CERTO, POSSÍVEL ou IMPOSSÍVEL ajuda a tomar decisões e a entender o mundo!",

  explicacao:
    "Existem 3 tipos de acontecimentos:\n\n✅ CERTO — sempre acontece (ex.: o Sol ☀️ nasce todo dia).\n\n🤔 POSSÍVEL — pode acontecer, pode não acontecer (ex.: hoje pode chover 🌧️).\n\n❌ IMPOSSÍVEL — nunca acontece (ex.: um peixe 🐟 viver no deserto).",

  explicacoesNiveis: {
    nivel1: "✅ Certo = sempre. 🤔 Possível = talvez. ❌ Impossível = nunca.",
    nivel2:
      "☀️ Sol nascer = CERTO. 🌧️ Chover hoje = POSSÍVEL. 🐟 Peixe voar = IMPOSSÍVEL.",
    nivel3:
      "Quando o céu está com nuvens ☁️, chover é POSSÍVEL. Quando o céu está limpo, é POSSÍVEL também, só que menos provável.",
    nivel4:
      "Meteorologistas 🌦️ usam essas ideias pra prever o tempo. Falam 'chuva provável' quando existe uma boa chance.",
  },

  exemploResolvido: {
    enunciado: "Classifique: 'Um cachorro 🐶 latir hoje.'",
    passos: [
      "Todo cachorro pode latir?",
      "Sim, mas talvez ele fique quieto o dia todo.",
      "Não é CERTO nem IMPOSSÍVEL.",
      "Então é POSSÍVEL 🤔.",
    ],
    resposta: "🤔 Possível.",
  },

  atividadeGuiada: {
    enunciado: "Um gato 🐱 pode miar?",
    resposta: "✅ Certo.",
    explicacao:
      "Todo gato saudável mia — é o som que ele faz. Então miar é um evento CERTO.",
    visual: {
      tipo: "cena",
      pergunta: "Um gato 🐱 pode miar?",
      posicao: "aoLado",
      referenciaImg: gatoImg,
      referenciaLabel: "Gato",
      sujeitoImg: certoImg,
      sujeitoLabel: "✅ Certo",
      opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
      correta: 0,
    },
  },

  exercicios: [
    { enunciado: "O Sol ☀️ nascer amanhã é…", resposta: "✅ Certo", dica: "Isso acontece todo dia." },
    { enunciado: "Chover 🌧️ hoje à tarde é…", resposta: "🤔 Possível", dica: "Pode chover ou não." },
    { enunciado: "Uma vaca 🐄 latir é…", resposta: "❌ Impossível", dica: "Vaca faz 'muuu', não late." },
    { enunciado: "Ganhar 🎁 um presente no aniversário é…", resposta: "🤔 Possível", dica: "Pode acontecer ou não." },
    { enunciado: "Um peixe 🐟 andar de bicicleta 🚲 é…", resposta: "❌ Impossível", dica: "Peixe não anda, ele nada." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: classifique cada acontecimento!",
    resposta:
      "🌙 Lua à noite = Certo · 🎲 Tirar 3 no dado = Possível · 🐟 Peixe de bicicleta = Impossível.",
    visual: {
      perguntas: [
        {
          pergunta: "🌙 A Lua aparecer durante a noite é…",
          opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
          correta: 0,
          explicacao: "A Lua sempre aparece à noite (mesmo escondida por nuvens).",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: luaImg, quantidade: 1, rotulo: "Lua à noite", cor: "#6366F1" },
              { imagemUrl: certoImg, quantidade: 1, rotulo: "✅ Certo", cor: "#22C55E" },
            ],
          },
        },
        {
          pergunta: "🎲 Tirar o número 3 ao lançar um dado é…",
          opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
          correta: 1,
          explicacao: "O dado tem 6 números — pode sair 3, mas pode sair outro.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: dadoImg, quantidade: 1, rotulo: "Dado", cor: "#F59E0B" },
              { imagemUrl: possivelImg, quantidade: 1, rotulo: "🤔 Possível", cor: "#3B82F6" },
            ],
          },
        },
        {
          pergunta: "🐟 Um peixe andar de bicicleta 🚲 é…",
          opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
          correta: 2,
          explicacao: "Peixe não tem pernas — nunca pode andar de bicicleta.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: peixeImg, quantidade: 1, rotulo: "Peixe", cor: "#0EA5E9" },
              { imagemUrl: bicicletaImg, quantidade: 1, rotulo: "Bicicleta", cor: "#EF4444" },
            ],
          },
        },
        {
          pergunta: "Quando dizemos 'TALVEZ acontece', o evento é…",
          opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
          correta: 1,
          explicacao: "Talvez = pode acontecer, pode não acontecer = POSSÍVEL.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: possivelImg, quantidade: 1, rotulo: "🤔 Possível", cor: "#3B82F6" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "✅ CERTO — sempre acontece.",
      "🤔 POSSÍVEL — pode acontecer, pode não.",
      "❌ IMPOSSÍVEL — nunca acontece.",
      "O acaso é quando não temos certeza do que vai acontecer.",
    ],
    dica: "Pense: SEMPRE, TALVEZ ou NUNCA? Essa é a chave!",
  },

  quiz: [
    {
      pergunta: "O Sol ☀️ nascer amanhã é…",
      opcoes: ["🤔 Possível", "✅ Certo", "❌ Impossível"],
      correta: 1,
      explicacao: "O Sol nasce todos os dias — é CERTO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: solImg, quantidade: 1, rotulo: "Sol nasce", cor: "#F59E0B" },
        ],
      },
    },
    {
      pergunta: "Ganhar 🎁 um brinquedo em um sorteio é…",
      opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
      correta: 1,
      explicacao: "Num sorteio dá pra ganhar OU não — POSSÍVEL.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: presenteImg, quantidade: 1, rotulo: "Sorteio", cor: "#EC4899" },
        ],
      },
    },
    {
      pergunta: "Um cachorro 🐶 botar ovos 🥚 é…",
      opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
      correta: 2,
      explicacao: "Cachorro não bota ovos — quem bota são as aves.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: cachorroImg, quantidade: 1, rotulo: "Cachorro", cor: "#B45309" },
          { imagemUrl: ovoImg, quantidade: 1, rotulo: "Ovos", cor: "#FBBF24" },
        ],
      },
    },
    {
      pergunta: "Quando dizemos que algo TALVEZ aconteça, é um evento…",
      opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
      correta: 1,
      explicacao: "Talvez = POSSÍVEL. Pode acontecer, pode não.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: possivelImg, quantidade: 1, rotulo: "🤔 Possível", cor: "#3B82F6" },
        ],
      },
    },
  ],

  conclusao:
    "🏆 Medalha conquistada: Explorador do Acaso! Você aprendeu a classificar eventos em ✅ certo, 🤔 possível e ❌ impossível. Missão em Família: converse com a família e classifique juntos: 'O Sol vai nascer amanhã', 'Hoje pode chover' e 'Um cachorro aprender a falar como pessoa'.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Meteorologistas 🌦️ usam dados e observações do céu ☁️ pra dizer se a chuva é mais ou menos provável. Eles trabalham com POSSIBILIDADES pra fazer a previsão do tempo!",
  },

  interativas: [
    // ==== FASE 1 · Certo ou Impossível? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Certo ou Impossível?",
      instrucao: "Um gato 🐱 pode miar?",
      grupos: [
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱 Gato" },
      ],
      pergunta: "Como classificamos esse acontecimento?",
      opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
      correta: 0,
      acerto: "Muito bem! Todo gato mia — é CERTO.",
      erro: "Todo gato saudável mia — é um evento CERTO ✅.",
    },

    // ==== FASE 2 · O que pode acontecer? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · O que pode acontecer?",
      instrucao: "Hoje o céu ☁️ está com muitas nuvens. Pode chover 🌧️?",
      grupos: [
        { imagemUrl: nuvemImg, quantidade: 3, rotulo: "☁️ Nuvens" },
        { imagemUrl: chuvaImg, quantidade: 1, rotulo: "🌧️ Chuva?" },
      ],
      pergunta: "Como classificamos?",
      opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
      correta: 1,
      acerto: "Isso! Com nuvens no céu, chover é POSSÍVEL 🤔.",
      erro: "Pode chover, mas também pode não — é POSSÍVEL.",
    },

    // ==== FASE 3 · Descubra o Evento ====
    {
      tipo: "ligar",
      titulo: "Fase 3 · Descubra o Evento",
      instrucao: "Ligue cada situação à classificação certa.",
      pares: [
        { a: "🍌 Banana crescer na bananeira", b: "✅ Certo", aImagem: bananaImg, aQuantidade: 1, bImagem: certoImg, bQuantidade: 1 },
        { a: "🐘 Elefante voar batendo as orelhas", b: "❌ Impossível", aImagem: elefanteImg, aQuantidade: 1, bImagem: impossivelImg, bQuantidade: 1 },
        { a: "🎈 Balão de gás hélio subir", b: "🤔 Possível", aImagem: balaoImg, aQuantidade: 1, bImagem: possivelImg, bQuantidade: 1 },
      ],
    },

    // ==== FASE 4 · A Caixa Misteriosa ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · A Caixa Misteriosa",
      instrucao: "Dentro da caixa só existem bolas 🔴 VERMELHAS. Você tira uma sem olhar.",
      grupos: [
        { imagemUrl: bolaVermelhaImg, quantidade: 5, rotulo: "🔴 Só vermelhas" },
      ],
      pergunta: "A bola que sai será…",
      opcoes: ["🔴 Vermelha (Certo)", "🔵 Azul (Possível)", "🔵 Azul (Certo)"],
      correta: 0,
      acerto: "Perfeito! Só existem vermelhas — CERTO sair vermelha.",
      erro: "Só existem bolas vermelhas na caixa → é CERTO sair vermelha.",
    },

    // ==== FASE 5 · A Roleta Encantada ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · A Roleta Encantada",
      instrucao: "A roleta 🎡 tem 3 espaços 🟢 verdes e 1 espaço 🔵 azul.",
      grupos: [
        { imagemUrl: bolaVerdeImg, quantidade: 3, rotulo: "🟢 Verde" },
        { imagemUrl: bolaAzulImg, quantidade: 1, rotulo: "🔵 Azul" },
      ],
      pergunta: "É possível sair AZUL?",
      opcoes: ["✅ Sim, é possível", "❌ Não, é impossível", "É certo sair azul"],
      correta: 0,
      acerto: "Isso! Como existe 1 azul, é POSSÍVEL — só que verde é mais provável.",
      erro: "Existe 1 espaço azul → é POSSÍVEL sair azul (mesmo sendo menos provável).",
    },

    // ==== MINI JOGO · Roleta do Acaso ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Roleta do Acaso",
      instrucao: "Arraste cada situação pra ✅ Certo, 🤔 Possível ou ❌ Impossível.",
      alvosVisuais: [
        { nome: "✅ CERTO", cor: "#22C55E", capacidade: 2, imagemUrl: certoImg },
        { nome: "🤔 POSSÍVEL", cor: "#3B82F6", capacidade: 2, imagemUrl: possivelImg },
        { nome: "❌ IMPOSSÍVEL", cor: "#EF4444", capacidade: 2, imagemUrl: impossivelImg },
      ],
      pares: [
        { item: "☀️ O Sol nasce amanhã", alvo: "✅ CERTO", itemImagem: solImg },
        { item: "🐦 Passarinho cantar", alvo: "✅ CERTO", itemImagem: passarinhoImg },
        { item: "🌧️ Chover hoje", alvo: "🤔 POSSÍVEL", itemImagem: chuvaImg },
        { item: "🎲 Tirar 3 no dado", alvo: "🤔 POSSÍVEL", itemImagem: dadoImg },
        { item: "🐄 Vaca latir", alvo: "❌ IMPOSSÍVEL", itemImagem: vacaImg },
        { item: "🐟 Peixe no deserto", alvo: "❌ IMPOSSÍVEL", itemImagem: peixeImg },
      ],
    },

    // ==== DESAFIO · Ordenar do menos ao mais provável ====
    {
      tipo: "ordenar",
      titulo: "Desafio Brilha · Do impossível ao certo",
      instrucao: "Coloque em ordem: ❌ Impossível → 🤔 Possível → ✅ Certo.",
      itens: ["❌ Peixe voar", "🤔 Chover amanhã", "✅ Sol nascer"],
      imagens: [
        { imagemUrl: peixeImg, quantidade: 1, rotulo: "❌ Peixe voar", cor: "#EF4444" },
        { imagemUrl: chuvaImg, quantidade: 1, rotulo: "🤔 Chover amanhã", cor: "#3B82F6" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "✅ Sol nascer", cor: "#22C55E" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "O Sol ☀️ nasce todo dia. É um evento…",
        opcoes: ["✅ Certo", "❌ Impossível"],
        correta: 0,
        explicacao: "Sempre acontece — CERTO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: solImg, quantidade: 1, rotulo: "Sol", cor: "#F59E0B" },
          ],
        },
      },
      {
        pergunta: "Uma vaca 🐄 latir é…",
        opcoes: ["✅ Certo", "❌ Impossível"],
        correta: 1,
        explicacao: "Vaca faz 'muuu' — latir é IMPOSSÍVEL.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: vacaImg, quantidade: 1, rotulo: "Vaca", cor: "#B45309" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Chover 🌧️ hoje à tarde é…",
        opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
        correta: 1,
        explicacao: "Pode chover ou não — POSSÍVEL.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: chuvaImg, quantidade: 1, rotulo: "Chuva?", cor: "#3B82F6" },
          ],
        },
      },
      {
        pergunta: "🎲 Tirar o número 5 em um dado é…",
        opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
        correta: 1,
        explicacao: "O dado tem 6 números — POSSÍVEL sair 5.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: dadoImg, quantidade: 1, rotulo: "Dado", cor: "#F59E0B" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Numa caixa só com bolas 🔵 azuis, tirar uma 🔴 vermelha é…",
        opcoes: ["✅ Certo", "🤔 Possível", "❌ Impossível"],
        correta: 2,
        explicacao: "Não existe vermelha na caixa → IMPOSSÍVEL.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: bolaAzulImg, quantidade: 5, rotulo: "Só azuis", cor: "#3B82F6" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA21",
  },
};

export default aula;
