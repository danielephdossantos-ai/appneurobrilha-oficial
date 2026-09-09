import type { Aula } from "../types";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as meninoImg } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as criancasGrupoImg } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as meninoAcordandoImg } from "@/assets/neuro-treino/objetos/menino-acordando.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";

/**
 * EF01CI04 — Ciências · 1º Ano
 * Missão do Dia: "Amigos Diferentes, Amigos Iguais".
 * Comparar características físicas de meninos e meninas do grupo,
 * respeitando as diferenças de cabelo, cor da pele, altura,
 * cor dos olhos, gostos — e o que todos têm em comum.
 */
const aula: Aula = {
  codigo: "EF01CI04",
  ano: "1º Ano",
  disciplina: "Ciências",
  titulo: "Amigos Diferentes, Amigos Iguais",

  narrativa: {
    titulo: "Amigos Diferentes, Amigos Iguais",
    contexto:
      "Brilha convidou várias crianças pra brincar na Floresta Encantada. Todos são amigos, mas cada um é de um jeito: cabelo diferente, cor de pele diferente, altura diferente.",
    problema:
      "Uma criança perguntou: 'Se somos tão diferentes, ainda somos amigos?' Brilha respondeu: 'Diferente NÃO é ruim — é o que faz cada um único!'",
    convite:
      "Bora com o Brilha descobrir o que temos de DIFERENTE e de IGUAL, e por que cada criança é especial do jeito dela?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes do corpo (cabelo, olhos, pele).",
    "Perceber que existem meninos e meninas.",
    "Notar que amigos têm alturas e cores diferentes.",
  ],

  missao:
    "Levar a criança a observar e comparar características físicas do grupo, respeitando as diferenças (cabelo, cor da pele, altura, olhos) e reconhecendo o que todos têm em comum.",

  objetivos: [
    "Observar semelhanças e diferenças entre as pessoas.",
    "Reconhecer que cada corpo é único e especial.",
    "Valorizar a diversidade de cabelo, pele, altura e olhos.",
    "Perceber o que TODOS os seres humanos têm em comum.",
    "Adotar atitudes de respeito e amizade.",
  ],

  motivacao:
    "Ser diferente é uma força! Cada amigo tem uma marca só dele — e juntos formamos um grupo muito mais bonito.",

  explicacao:
    "👧 Cada criança tem um CABELO diferente — liso, cacheado, crespo, curto, comprido.\n👦 Cada pessoa tem uma COR DE PELE — clara, morena, negra — todas bonitas.\n👀 Os OLHOS podem ser castanhos, pretos, verdes, azuis.\n📏 A ALTURA muda: tem gente baixinha, alta, do meio.\n❤️ MAS todos temos um corpo com cabeça, tronco, braços, pernas — e um coração que sente.\n\nDiferente NÃO é ruim. Diferente é o que deixa cada um ÚNICO.",

  explicacoesNiveis: {
    nivel1:
      "Cada pessoa é ÚNICA — diferente das outras.",
    nivel2:
      "Cabelo, pele, olhos e altura mudam de criança pra criança.",
    nivel3:
      "As diferenças não separam — elas se somam pra formar o grupo.",
    nivel4:
      "Respeitar quem é diferente é o super-poder de um bom amigo.",
  },

  exemploResolvido: {
    enunciado:
      "Ana tem cabelo cacheado. Bia tem cabelo liso. Qual das duas está CERTA no cabelo?",
    passos: [
      "Cabelo cacheado é um jeito de cabelo.",
      "Cabelo liso é OUTRO jeito de cabelo.",
      "Nenhum é errado — cada uma tem o SEU jeito.",
    ],
    resposta: "As DUAS estão certas — cada uma é ÚNICA. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Olhe pras crianças e escolha quem TEM CABELO CACHEADO.",
    resposta: "👧 A menina de cabelo cacheado.",
    explicacao:
      "Cabelo cacheado tem cachinhos — cada pessoa nasce com um tipo de cabelo.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Quem tem cabelo cacheado?",
      opcoes: [
        { nome: "menina-cacheada", imagemUrl: meninaImg },
        { nome: "menino-liso", imagemUrl: meninoAcordandoImg },
        { nome: "bola", imagemUrl: bolaImg },
      ],
      respostaCerta: "menina-cacheada",
    },
  },

  exercicios: [
    {
      enunciado: "O que TODAS as pessoas têm?",
      resposta: "❤️ Um corpo, um coração e sentimentos.",
      dica: "Pense no que NÃO muda de pessoa pra pessoa.",
    },
    {
      enunciado: "Diga UMA coisa que muda de amigo pra amigo.",
      resposta: "Cabelo, cor da pele, altura ou cor dos olhos.",
      dica: "Olhe pro espelho e pro seu amiguinho.",
    },
    {
      enunciado: "Ser DIFERENTE do amigo é ruim?",
      resposta: "Não. Ser diferente é o que deixa cada um único.",
      dica: "Diferente = especial.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: mostre que respeita as diferenças!",
    resposta: "Cada pessoa é única — e juntas fazem o grupo mais bonito.",
    visual: {
      perguntas: [
        {
          pergunta: "O CABELO das pessoas é sempre igual?",
          opcoes: ["Não — cada um tem um tipo", "Sim, todos iguais", "Só existe um tipo"],
          correta: 0,
          explicacao: "Existem cabelos lisos, cacheados, crespos, curtos e compridos.",
          visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "👧" },
        },
        {
          pergunta: "A COR DA PELE muda de pessoa pra pessoa?",
          opcoes: ["Sim — e todas são bonitas", "Não, é sempre igual", "Muda de hora em hora"],
          correta: 0,
          explicacao: "Cores de pele diferentes — todas bonitas e respeitadas.",
          visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "🌈" },
        },
        {
          pergunta: "Quem é MAIS ALTO na turma:",
          opcoes: ["Depende — cada um tem sua altura", "Todo mundo tem a mesma altura", "Ninguém é alto"],
          correta: 0,
          explicacao: "Altura varia — tem baixinho, alto e do meio.",
          visual: { tipo: "itens", imagemUrl: meninoImg, quantidade: 1, rotulo: "📏" },
        },
        {
          pergunta: "O que TODOS temos IGUAL?",
          opcoes: ["Um coração que sente", "O mesmo cabelo", "A mesma altura"],
          correta: 0,
          explicacao: "Todos temos corpo, coração e sentimentos.",
          visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "❤️" },
        },
        {
          pergunta: "Ser DIFERENTE do amigo é:",
          opcoes: ["Especial e legal", "Motivo pra brigar", "Ruim"],
          correta: 0,
          explicacao: "Diferente é único — e a amizade respeita a diferença.",
          visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "🤝" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "👧 Cabelo pode ser liso, cacheado, crespo, curto ou comprido.",
      "🌈 Cor de pele varia — todas são bonitas.",
      "👀 Olhos podem ser castanhos, pretos, verdes, azuis.",
      "📏 Altura muda de criança pra criança.",
      "❤️ Todos temos corpo, coração e sentimentos.",
      "🤝 Diferente NÃO é ruim — é o que faz cada um único.",
    ],
    dica:
      "Antes de responder, pense: essa característica MUDA de pessoa pra pessoa, ou é IGUAL em todo mundo?",
  },

  quiz: [
    {
      pergunta: "Duas crianças com cabelos diferentes podem ser AMIGAS?",
      opcoes: ["Sim, sempre", "Não, precisam ser iguais", "Só se tiverem a mesma cor de olho"],
      correta: 0,
      explicacao: "Amizade não depende de aparência — depende de respeito.",
    },
    {
      pergunta: "O que muda de pessoa pra pessoa?",
      opcoes: [
        "Cabelo, pele, olhos e altura",
        "O número de coração no corpo",
        "Ter ou não cabeça",
      ],
      correta: 0,
      explicacao: "O que muda são características como cabelo, pele, olhos e altura.",
    },
    {
      pergunta: "O que TODAS as pessoas têm IGUAL?",
      opcoes: ["Corpo, coração e sentimentos", "A mesma altura", "O mesmo cabelo"],
      correta: 0,
      explicacao: "Todos temos corpo, coração e sentimentos.",
    },
    {
      pergunta: "Ser DIFERENTE dos amigos é:",
      opcoes: ["Ser único e especial", "Ser errado", "Motivo pra tristeza"],
      correta: 0,
      explicacao: "Ser diferente é ser único — é o que faz cada pessoa especial.",
    },
    {
      pergunta: "Um bom AMIGO:",
      opcoes: [
        "Respeita quem é diferente",
        "Só brinca com quem é igual",
        "Ri de quem é diferente",
      ],
      correta: 0,
      explicacao: "Amigo de verdade respeita e valoriza a diferença.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Amigo do Respeito! 🎁 Item desbloqueado: 🌈 Coração Arco-Íris. Missão em Família: observem 3 pessoas de casa e anotem o que cada uma tem de diferente e de igual!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "No mundo inteiro não existem duas pessoas EXATAMENTE iguais — nem gêmeos! Cada um tem uma marca só dele.",
  },

  interativas: [
    // FASE 1 — Reconheça a característica
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Cada Um do Seu Jeito",
      instrucao: "Toque em quem tem cabelo CACHEADO.",
      pergunta: "Quem tem cabelo cacheado?",
      opcoes: [
        { nome: "MENINA CACHEADA", imagemUrl: meninaImg, rotulo: "👧 CACHEADO" },
        { nome: "MENINO ACORDANDO", imagemUrl: meninoAcordandoImg, rotulo: "👦 LISO" },
      ],
      correta: 0,
      acerto: "👧 Isso! Cabelo cacheado tem cachinhos.",
      erro: "Olhe bem: qual tem cachinhos no cabelo?",
    },

    // FASE 2 — Compara altura/tipo
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Olhe as Diferenças",
      instrucao: "Qual dessas imagens mostra um GRUPO com crianças DIFERENTES entre si?",
      pergunta: "Onde tem crianças diferentes juntas?",
      opcoes: [
        { nome: "GRUPO DIVERSO", imagemUrl: criancasGrupoImg, rotulo: "🌈 GRUPO" },
        { nome: "BOLA", imagemUrl: bolaImg, rotulo: "⚽ BOLA" },
        { nome: "LIVRO", imagemUrl: livroImg, rotulo: "📚 LIVRO" },
      ],
      correta: 0,
      acerto: "🌈 Isso! Muitas crianças diferentes formam um grupo lindo.",
      erro: "Procure pelas CRIANÇAS.",
    },

    // FASE 3 — Diferente x Igual
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Diferente ou Igual?",
      instrucao:
        "Arraste cada característica pra bandeja certa: MUDA de pessoa pra pessoa ou é IGUAL em todos?",
      pares: [
        { item: "CABELO", alvo: "MUDA" },
        { item: "COR DA PELE", alvo: "MUDA" },
        { item: "COR DOS OLHOS", alvo: "MUDA" },
        { item: "ALTURA", alvo: "MUDA" },
        { item: "TER CORAÇÃO", alvo: "IGUAL" },
        { item: "TER SENTIMENTOS", alvo: "IGUAL" },
        { item: "TER CORPO", alvo: "IGUAL" },
      ],
      alvosVisuais: [
        { nome: "MUDA", cor: "#F472B6", capacidade: 4 },
        { nome: "IGUAL", cor: "#60A5FA", capacidade: 3 },
      ],
    },

    // FASE 4 — Laboratório da Diversidade
    {
      tipo: "lupa",
      titulo: "Fase 4 · Laboratório da Diversidade",
      instrucao:
        "Toque em cada amiguinho pra descobrir o que ele tem de ESPECIAL.",
      itens: [
        {
          nome: "Menina",
          imagemUrl: meninaImg,
          rotulo: "👧 CABELO CACHEADO",
          descoberta:
            "Essa menina tem cabelo cacheado e um sorriso brilhante. Cabelo cacheado tem cachinhos naturais.",
        },
        {
          nome: "Menino",
          imagemUrl: meninoImg,
          rotulo: "👦 OLHOS CASTANHOS",
          descoberta:
            "Esse menino tem olhos castanhos e cabelo curto. Cor dos olhos é uma marca única.",
        },
        {
          nome: "Menino acordando",
          imagemUrl: meninoAcordandoImg,
          rotulo: "🌞 CABELO CURTO",
          descoberta:
            "Esse menino tem cabelo curtinho. Alguns preferem cabelo curto, outros comprido — tudo tem seu charme.",
        },
        {
          nome: "Grupo de crianças",
          imagemUrl: criancasGrupoImg,
          rotulo: "🌈 TODO MUNDO JUNTO",
          descoberta:
            "Aqui tem pele clara, morena, negra, cabelo liso e crespo — todos amigos, cada um único.",
        },
      ],
      acerto:
        "🔬 Investigação completa! Cada amiguinho é único e todos são especiais.",
    },

    // FASE 5 — Escolha o que TODOS temos em comum
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · O Que Temos em Comum",
      instrucao:
        "Marque tudo que TODAS as pessoas têm igual — não importa o cabelo, pele ou altura.",
      criterio: "O que TODA pessoa tem ❤️",
      opcoes: [
        { nome: "Coração", imagemUrl: coracaoImg, rotulo: "❤️ CORAÇÃO", correto: true },
        { nome: "Corpo", imagemUrl: meninoImg, rotulo: "🧍 CORPO", correto: true },
        { nome: "Grupo", imagemUrl: criancasGrupoImg, rotulo: "🤝 AMIZADE", correto: true },
        { nome: "Bola", imagemUrl: bolaImg, rotulo: "⚽ BOLA", correto: false },
        { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 CASA", correto: false },
        { nome: "Maçã", imagemUrl: macaImg, rotulo: "🍎 MAÇÃ", correto: false },
        { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA", correto: false },
      ],
      acerto: "❤️ Isso! Todos temos corpo, coração e capacidade de fazer amigos.",
      erro: "Pense: TODA pessoa tem isso? Ou é uma COISA que a pessoa usa?",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "O cabelo das pessoas é sempre igual?",
        opcoes: ["Não — cada um tem um tipo", "Sim, todos iguais", "Só existe cabelo liso"],
        correta: 0,
        explicacao: "Cabelo pode ser liso, cacheado ou crespo.",
        visual: { tipo: "itens", imagemUrl: meninaImg, quantidade: 1, rotulo: "👧" },
      },
      {
        pergunta: "A cor da pele muda de pessoa pra pessoa?",
        opcoes: ["Sim, e todas são bonitas", "Não muda", "Muda todo dia"],
        correta: 0,
        explicacao: "Existem várias cores de pele — todas respeitadas.",
        visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "🌈" },
      },
      {
        pergunta: "Todo mundo tem a mesma altura?",
        opcoes: ["Não — cada um cresce de um jeito", "Sim, todos iguais", "Só adulto é alto"],
        correta: 0,
        explicacao: "Altura varia: baixinho, alto e do meio.",
        visual: { tipo: "itens", imagemUrl: meninoImg, quantidade: 1, rotulo: "📏" },
      },
    ],
    medio: [
      {
        pergunta: "O que TODO ser humano tem?",
        opcoes: ["Corpo e coração", "O mesmo cabelo", "A mesma cor de pele"],
        correta: 0,
        explicacao: "Todo mundo tem corpo, coração e sentimentos.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "❤️" },
      },
      {
        pergunta: "Ser diferente do amigo é:",
        opcoes: ["Ser único e especial", "Ser errado", "Ruim"],
        correta: 0,
        explicacao: "Diferente = único, especial.",
        visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "🤝" },
      },
      {
        pergunta: "Amigo bom é aquele que:",
        opcoes: ["Respeita as diferenças", "Ri de quem é diferente", "Só brinca com iguais"],
        correta: 0,
        explicacao: "Amigo de verdade respeita quem é diferente.",
        visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "🤗" },
      },
    ],
    dificil: [
      {
        pergunta: "Se cada pessoa é única, o que forma um GRUPO?",
        opcoes: [
          "Muitos diferentes juntos",
          "Só pessoas iguais",
          "Uma pessoa só",
        ],
        correta: 0,
        explicacao: "Grupo é feito de várias pessoas diferentes.",
        visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "👥" },
      },
      {
        pergunta: "Duas irmãs podem ter cabelos DIFERENTES?",
        opcoes: ["Sim — cada uma nasce de um jeito", "Não, é impossível", "Só se forem gêmeas"],
        correta: 0,
        explicacao: "Mesmo irmãos podem ter cabelos, olhos e peles diferentes.",
        visual: { tipo: "itens", imagemUrl: meninaImg, quantidade: 1, rotulo: "👧" },
      },
      {
        pergunta: "Respeitar a diferença é:",
        opcoes: [
          "Aceitar e valorizar quem é diferente",
          "Mudar todo mundo pra ser igual",
          "Ignorar os amigos",
        ],
        correta: 0,
        explicacao: "Respeitar é valorizar quem é diferente do jeito que é.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "❤️" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica dos Amigos",
    objetivo:
      "As características passam na esteira. Toque na bandeja certa: MUDA (varia de pessoa) ou IGUAL (todos temos).",
    tempoSegundos: 90,
    minAcertos: 10,
    categorias: [
      { nome: "MUDA", cor: "#F472B6", emoji: "🎨" },
      { nome: "IGUAL", cor: "#60A5FA", emoji: "❤️" },
    ],
    objetos: [
      { nome: "Menina cacheada", imagemUrl: meninaImg, categoria: "MUDA" },
      { nome: "Menino olhos", imagemUrl: meninoImg, categoria: "MUDA" },
      { nome: "Menino cabelo curto", imagemUrl: meninoAcordandoImg, categoria: "MUDA" },
      { nome: "Grupo diverso", imagemUrl: criancasGrupoImg, categoria: "MUDA" },
      { nome: "Coração", imagemUrl: coracaoImg, categoria: "IGUAL" },
      { nome: "Coração", imagemUrl: coracaoImg, categoria: "IGUAL" },
      { nome: "Corpo (menino)", imagemUrl: meninoImg, categoria: "MUDA" },
      { nome: "Coração amizade", imagemUrl: coracaoImg, categoria: "IGUAL" },
      { nome: "Grupo", imagemUrl: criancasGrupoImg, categoria: "MUDA" },
      { nome: "Coração", imagemUrl: coracaoImg, categoria: "IGUAL" },
      { nome: "Menina", imagemUrl: meninaImg, categoria: "MUDA" },
      { nome: "Coração", imagemUrl: coracaoImg, categoria: "IGUAL" },
    ],
    acerto:
      "🏭 Fábrica dos Amigos completa! Você entende que somos diferentes e iguais ao mesmo tempo.",
  },

  missaoFamilia: {
    titulo: "Álbum das Diferenças",
    instrucao:
      "Escolha 3 pessoas da sua casa. Anote o cabelo, a cor dos olhos e a altura de cada uma. Depois, escreva UMA coisa que TODAS têm igual (ex.: coração, amor). Podem tirar uma foto do álbum!",
    permitirFoto: true,
    registros: [
      { label: "Nome da pessoa 1 e como é o cabelo dela?", tipo: "texto" },
      { label: "Nome da pessoa 2 e cor dos olhos?", tipo: "texto" },
      { label: "O que TODAS as 3 pessoas têm igual?", tipo: "texto" },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01CI05",
  },
};

export default aula;
