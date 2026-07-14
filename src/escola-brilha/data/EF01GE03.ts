import type { Aula } from "../types";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as pracaImg } from "@/assets/neuro-treino/objetos/praca.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as lixeiraImg } from "@/assets/neuro-treino/objetos/lixeira.png.asset.json";
import { url as lixeiraReciclagemImg } from "@/assets/neuro-treino/objetos/lixeira-reciclagem.png.asset.json";
import { url as plantaImg } from "@/assets/neuro-treino/objetos/planta-pequena.png.asset.json";
import { url as regadorImg } from "@/assets/neuro-treino/objetos/regador.png.asset.json";
import { url as papelImg } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as garrafaImg } from "@/assets/neuro-treino/objetos/garrafa.png.asset.json";
import { url as caixaImg } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as livrosImg } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as cadeiraImg } from "@/assets/neuro-treino/objetos/cadeira.png.asset.json";
import { url as jardimImg } from "@/assets/neuro-treino/objetos/jardim.png.asset.json";
import { url as mapaImg } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";

/**
 * EF01GE03 — Geografia · 1º Ano
 * Missão: "Os Lugares Que Cuidamos".
 * Reconhecer que os espaços do cotidiano precisam de cuidados e atitudes
 * responsáveis pra continuarem limpos, organizados e agradáveis.
 */
const aula: Aula = {
  codigo: "EF01GE03",
  ano: "1º Ano",
  disciplina: "Geografia",
  titulo: "Os Lugares Que Cuidamos",

  narrativa: {
    titulo: "A Vila Verde Precisa De Ajuda",
    contexto:
      "Brilha chega à VILA VERDE e vê a PRAÇA, a ESCOLA e as RUAS precisando de ajuda 🌳🏫. Papéis no chão, plantas com sede, brinquedos fora do lugar…",
    problema:
      "A Coruja Sábia explica: 'Os lugares onde vivemos ficam melhores quando CADA PESSOA faz a sua parte 💚'. Cada boa ação faz nascer uma FLOR 🌼 na Vila.",
    convite: "Bora ser um GUARDIÃO da Vila Verde?",
  },

  conhecimentosPrevios: [
    "Reconhecer diferentes espaços do dia a dia (casa, escola, praça).",
    "Perceber quando um lugar está limpo ou sujo.",
  ],

  missao:
    "Reconhecer atitudes de cuidado com os espaços do cotidiano e desenvolver o senso de responsabilidade coletiva.",

  objetivos: [
    "Identificar espaços do cotidiano.",
    "Compreender a importância de cuidar dos lugares.",
    "Reconhecer atitudes de preservação.",
    "Desenvolver senso de responsabilidade coletiva.",
    "Valorizar o ambiente onde vive.",
  ],

  motivacao:
    "Um lugar cuidado é um lugar feliz pra TODO MUNDO 🌼.",

  explicacao:
    "🏫 ESCOLA, 🌳 PRAÇA, 🏠 CASA, 🛝 PARQUE, 🛣️ RUA — todo lugar precisa de cuidado.\n🗑️ LIXO no chão SUJA. Na LIXEIRA, limpa!\n🌱 PLANTA sem água morre. Regando, ela cresce.\n🧹 ORGANIZAR = deixar cada coisa no lugar certinho.\n🤝 CUIDAR é tarefa de TODOS.",

  explicacoesNiveis: {
    nivel1: "Cuidar do lugar deixa o lugar bonito.",
    nivel2: "Cada pessoa pode fazer uma pequena parte todo dia.",
    nivel3: "Quando ninguém cuida, o lugar fica feio e ninguém quer usar.",
    nivel4: "Cuidar da Vila é cuidar de você mesmo.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha vê um PAPEL 📄 caído na PRAÇA. O que ele deve fazer?",
    passos: [
      "Papel no chão suja o lugar.",
      "Perto tem uma LIXEIRA 🗑️.",
      "Basta pegar o papel e colocar na lixeira.",
    ],
    resposta: "🗑️ Colocar o papel na lixeira!",
  },

  atividadeGuiada: {
    enunciado: "Qual dessas é uma ATITUDE DE CUIDADO com a planta?",
    resposta: "🌿 REGAR a planta!",
    explicacao:
      "A planta precisa de água pra viver. Regar ajuda ela a crescer forte e bonita.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "O que cuida da planta?",
      opcoes: [
        { nome: "regador", imagemUrl: regadorImg },
        { nome: "papel", imagemUrl: papelImg },
        { nome: "bola", imagemUrl: bolaImg },
      ],
      respostaCerta: "regador",
    },
  },

  exercicios: [
    {
      enunciado: "Onde jogamos o lixo?",
      resposta: "🗑️ Na LIXEIRA.",
      dica: "Nunca no chão.",
    },
    {
      enunciado: "Quem pode cuidar da escola?",
      resposta: "🤝 TODOS — cada um faz um pouquinho.",
      dica: "Não é só o funcionário da limpeza.",
    },
    {
      enunciado: "A planta com sede está bem?",
      resposta: "💧 NÃO — precisa de água pra viver.",
      dica: "Regar é cuidar.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: mostre que você é um Guardião da Natureza!",
    resposta: "Cada atitude de cuidado faz a Vila florescer.",
    visual: {
      perguntas: [
        {
          pergunta: "Onde vai o PAPEL usado?",
          opcoes: ["Na lixeira", "No chão", "Na rua"],
          correta: 0,
          explicacao: "Lixo sempre na lixeira.",
          visual: { tipo: "itens", imagemUrl: lixeiraImg, quantidade: 1, rotulo: "🗑️" },
        },
        {
          pergunta: "A planta sem água…",
          opcoes: ["Morre", "Cresce sozinha", "Vira pedra"],
          correta: 0,
          explicacao: "Toda planta precisa de água.",
          visual: { tipo: "itens", imagemUrl: plantaImg, quantidade: 1, rotulo: "🌱" },
        },
        {
          pergunta: "Cuidar da escola é tarefa de:",
          opcoes: ["Todos", "Só das crianças", "Só dos adultos"],
          correta: 0,
          explicacao: "Todo mundo participa.",
          visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
        },
        {
          pergunta: "Uma PRAÇA limpa é:",
          opcoes: ["Boa pra todos brincarem", "Chata", "Perigosa"],
          correta: 0,
          explicacao: "Praça limpa = todos aproveitam.",
          visual: { tipo: "itens", imagemUrl: pracaImg, quantidade: 1, rotulo: "🌳" },
        },
        {
          pergunta: "Plantar uma flor é atitude de:",
          opcoes: ["Cuidado", "Destruição", "Preguiça"],
          correta: 0,
          explicacao: "Plantar deixa a Vila mais bonita.",
          visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🌼" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🏫 Todo lugar do dia a dia precisa de CUIDADO.",
      "🗑️ Lixo SEMPRE na lixeira.",
      "🌱 Regar as plantas é cuidar da vida.",
      "🧹 Organizar deixa o espaço melhor pra TODOS.",
      "🤝 Cuidar é RESPONSABILIDADE de todos.",
    ],
    dica: "Escolha UMA atitude de cuidado pra fazer hoje com a família.",
  },

  quiz: [
    {
      pergunta: "Devemos jogar lixo:",
      opcoes: ["Na lixeira", "No chão", "Na rua"],
      correta: 0,
      explicacao: "Lixo no chão suja o lugar.",
      visual: { tipo: "itens", imagemUrl: lixeiraImg, quantidade: 1, rotulo: "🗑️" },
    },
    {
      pergunta: "Quem pode cuidar da escola?",
      opcoes: ["Todos", "Ninguém", "Apenas os adultos"],
      correta: 0,
      explicacao: "Todos participam.",
      visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
    },
    {
      pergunta: "Uma praça limpa é:",
      opcoes: ["Melhor para todos", "Pior para brincar", "Igual a uma suja"],
      correta: 0,
      explicacao: "Limpa = boa pra todos.",
      visual: { tipo: "itens", imagemUrl: pracaImg, quantidade: 1, rotulo: "🌳" },
    },
    {
      pergunta: "Regar uma planta é uma atitude:",
      opcoes: ["De cuidado", "De destruição", "Sem importância"],
      correta: 0,
      explicacao: "Regar cuida da vida da planta.",
      visual: { tipo: "itens", imagemUrl: regadorImg, quantidade: 1, rotulo: "💧" },
    },
    {
      pergunta: "Hoje aprendemos sobre:",
      opcoes: ["Cuidar dos lugares onde vivemos", "Só esportes", "Só brinquedos"],
      correta: 0,
      explicacao: "Cuidado com os espaços do dia a dia.",
      visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🌼" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião da Natureza! 🌳 Item desbloqueado: Árvore da Vila Verde.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Quando cuidamos dos lugares onde vivemos, TODOS podem brincar, aprender e viver melhor — a Vila fica cheia de flores 🌼.",
  },

  interativas: [
    // APRENDENDO — lupa: espaços da Vila
    {
      tipo: "lupa",
      titulo: "Os Lugares Da Vila Verde",
      instrucao: "Toque em cada lugar pra ouvir a dica de cuidado do Brilha.",
      itens: [
        {
          nome: "Escola",
          imagemUrl: escolaImg,
          rotulo: "🏫 ESCOLA",
          descoberta: "Lugar de aprender. Guarde os brinquedos e o material no lugar certo.",
        },
        {
          nome: "Praça",
          imagemUrl: pracaImg,
          rotulo: "🌳 PRAÇA",
          descoberta: "Lugar de brincar. Todo mundo ajuda a manter a praça limpa.",
        },
        {
          nome: "Casa",
          imagemUrl: casaImg,
          rotulo: "🏠 CASA",
          descoberta: "Organizar o quarto e ajudar em casa também é cuidar.",
        },
        {
          nome: "Jardim",
          imagemUrl: jardimImg,
          rotulo: "🌱 JARDIM",
          descoberta: "Regue as plantas — elas precisam de água pra viver.",
        },
        {
          nome: "Coruja Sábia",
          imagemUrl: corujaImg,
          rotulo: "🦉 CORUJA",
          descoberta: "Cuidar da Vila é cuidar de todo mundo que vive nela.",
        },
      ],
    },

    // FASE 1 — Atitude Certa (selecionarMultiplos: boas atitudes)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 1 · Atitude Certa",
      instrucao:
        "Marque TODAS as atitudes que CUIDAM da Vila. Cuidado com as ruins — deixe passar!",
      criterio: "Boas atitudes 💚",
      opcoes: [
        { nome: "Lixo na lixeira", imagemUrl: lixeiraImg, rotulo: "🗑️ Lixo na LIXEIRA", correto: true },
        { nome: "Plantar árvore", imagemUrl: arvoreImg, rotulo: "🌳 PLANTAR árvore", correto: true },
        { nome: "Regar a planta", imagemUrl: regadorImg, rotulo: "💧 REGAR planta", correto: true },
        { nome: "Guardar brinquedo", imagemUrl: bolaImg, rotulo: "⚽ GUARDAR brinquedo", correto: true },
        { nome: "Rasgar planta", imagemUrl: plantaImg, rotulo: "❌ RASGAR planta", correto: false },
        { nome: "Papel no chão", imagemUrl: papelImg, rotulo: "❌ JOGAR papel no CHÃO", correto: false },
      ],
      acerto: "💚 Perfeito! Essas atitudes fazem a Vila FLORESCER.",
      erro: "Esse aqui não cuida da Vila — machuca. Escolha só o que faz o lugar ficar melhor.",
    },

    // FASE 2 — Onde Está o Problema? (escolherFigura: praça limpa x praça suja)
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Onde Está O Problema?",
      instrucao: "Brilha olha dois lugares. Qual PRECISA de cuidados agora?",
      pergunta: "Qual espaço precisa de ajuda?",
      opcoes: [
        { nome: "Praça com lixo", imagemUrl: papelImg, rotulo: "🗑️ Praça com LIXO no chão" },
        { nome: "Praça limpa", imagemUrl: pracaImg, rotulo: "🌳 Praça LIMPA e bonita" },
        { nome: "Jardim regado", imagemUrl: jardimImg, rotulo: "🌱 Jardim REGADO" },
      ],
      correta: 0,
      acerto: "🗑️ Isso! Onde tem lixo, precisa de cuidado.",
      erro: "Olhe de novo — procure o lugar que está SUJO ou fora de ordem.",
    },

    // FASE 3 — Missão Limpeza (arrastar: cada objeto pra lixeira/reciclagem/natureza)
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Missão Limpeza",
      instrucao:
        "Brilha percorre a Vila e recolhe cada coisa. Arraste pra LIXEIRA certa: comum, reciclagem ou de volta à NATUREZA.",
      pares: [
        { item: "Papel 📄", alvo: "Lixo comum", itemImagem: papelImg },
        { item: "Garrafa 🥤", alvo: "Reciclagem", itemImagem: garrafaImg },
        { item: "Caixa 📦", alvo: "Reciclagem", itemImagem: caixaImg },
        { item: "Flor caída 🌼", alvo: "Natureza", itemImagem: florImg },
      ],
      alvosVisuais: [
        { nome: "Lixo comum", cor: "#78716C", imagemUrl: lixeiraImg, capacidade: 1 },
        { nome: "Reciclagem", cor: "#0EA5E9", imagemUrl: lixeiraReciclagemImg, capacidade: 2 },
        { nome: "Natureza", cor: "#22C55E", imagemUrl: jardimImg, capacidade: 1 },
      ],
    },

    // FASE 4 — Organizando os Espaços (arrastar objeto → lugar certo)
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Organizando Os Espaços",
      instrucao:
        "Cada coisa tem seu lugar! Arraste cada objeto pro lugar certo — a Vila fica linda quando tudo está organizado.",
      pares: [
        { item: "Livros 📚", alvo: "Estante", itemImagem: livrosImg },
        { item: "Bola ⚽", alvo: "Caixa de brinquedos", itemImagem: bolaImg },
        { item: "Cadeira 🪑", alvo: "Mesa", itemImagem: cadeiraImg },
        { item: "Plantinha 🌱", alvo: "Jardim", itemImagem: plantaImg },
      ],
      alvosVisuais: [
        { nome: "Estante", cor: "#F59E0B", imagemUrl: escolaImg, capacidade: 1 },
        { nome: "Caixa de brinquedos", cor: "#EC4899", imagemUrl: caixaImg, capacidade: 1 },
        { nome: "Mesa", cor: "#8B5CF6", imagemUrl: casaImg, capacidade: 1 },
        { nome: "Jardim", cor: "#22C55E", imagemUrl: jardimImg, capacidade: 1 },
      ],
    },

    // FASE 5 — Guardião da Vila (album: escolher missões de cuidado do dia)
    {
      tipo: "album",
      titulo: "Fase 5 · Guardião Da Vila",
      instrucao:
        "Escolha as MISSÕES DE CUIDADO que VOCÊ vai fazer hoje. Pode marcar MAIS DE UMA em cada lista — cada escolha faz a Vila florescer!",
      escolhas: [
        {
          label: "Em CASA você vai…",
          modo: "imagem",
          opcoes: [
            { nome: "Regar planta", imagemUrl: regadorImg, rotulo: "💧 REGAR uma planta" },
            { nome: "Guardar brinquedos", imagemUrl: bolaImg, rotulo: "⚽ GUARDAR brinquedos" },
            { nome: "Organizar livros", imagemUrl: livrosImg, rotulo: "📚 ORGANIZAR livros" },
            { nome: "Jogar lixo certo", imagemUrl: lixeiraImg, rotulo: "🗑️ JOGAR lixo na lixeira" },
          ],
        },
        {
          label: "Na ESCOLA você vai…",
          modo: "imagem",
          opcoes: [
            { nome: "Ajudar limpar", imagemUrl: escolaImg, rotulo: "🧹 AJUDAR a limpar a sala" },
            { nome: "Cuidar cadeira", imagemUrl: cadeiraImg, rotulo: "🪑 GUARDAR a cadeira" },
            { nome: "Cuidar planta", imagemUrl: plantaImg, rotulo: "🌱 CUIDAR da planta da sala" },
          ],
        },
        {
          label: "Na PRAÇA você vai…",
          modo: "imagem",
          opcoes: [
            { nome: "Plantar flor", imagemUrl: florImg, rotulo: "🌼 PLANTAR uma flor" },
            { nome: "Recolher papel", imagemUrl: papelImg, rotulo: "📄 RECOLHER papéis" },
            { nome: "Cuidar árvore", imagemUrl: arvoreImg, rotulo: "🌳 CUIDAR das árvores" },
          ],
        },
      ],
      acerto: "🌼 Vila florescendo! O Brilha guardou as SUAS missões de cuidado.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Papel usado vai…",
        opcoes: ["Na lixeira", "No chão", "Na cama"],
        correta: 0,
        explicacao: "Sempre na lixeira.",
        visual: { tipo: "itens", imagemUrl: lixeiraImg, quantidade: 1, rotulo: "🗑️" },
      },
      {
        pergunta: "Regar a planta é bom ou ruim?",
        opcoes: ["Bom", "Ruim", "Igual"],
        correta: 0,
        explicacao: "Ajuda ela a viver.",
        visual: { tipo: "itens", imagemUrl: regadorImg, quantidade: 1, rotulo: "💧" },
      },
      {
        pergunta: "Cuidar do lugar deixa ele…",
        opcoes: ["Mais bonito", "Mais feio", "Sujo"],
        correta: 0,
        explicacao: "Cuidar = melhor pra todos.",
        visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🌼" },
      },
    ],
    medio: [
      {
        pergunta: "Uma GARRAFA vai pra…",
        opcoes: ["Reciclagem", "Chão", "Jardim"],
        correta: 0,
        explicacao: "Garrafa pode ser reciclada.",
        visual: { tipo: "itens", imagemUrl: garrafaImg, quantidade: 1, rotulo: "♻️" },
      },
      {
        pergunta: "Depois de brincar com a bola, ela vai…",
        opcoes: ["Na caixa de brinquedos", "No meio da rua", "Em cima da mesa"],
        correta: 0,
        explicacao: "Cada coisa tem seu lugar.",
        visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "⚽" },
      },
      {
        pergunta: "Cuidar da praça é obrigação de:",
        opcoes: ["Todos", "Só do lixeiro", "De ninguém"],
        correta: 0,
        explicacao: "Responsabilidade coletiva.",
        visual: { tipo: "itens", imagemUrl: pracaImg, quantidade: 1, rotulo: "🌳" },
      },
    ],
    dificil: [
      {
        pergunta: "Se você vê lixo no parque, o certo é:",
        opcoes: ["Recolher e jogar na lixeira", "Passar por cima", "Chutar pra outro canto"],
        correta: 0,
        explicacao: "Ajudar quando dá.",
        visual: { tipo: "itens", imagemUrl: papelImg, quantidade: 1, rotulo: "📄" },
      },
      {
        pergunta: "Plantar uma árvore ajuda a Vila porque…",
        opcoes: ["Deixa mais bonita e com sombra", "Suja tudo", "Não muda nada"],
        correta: 0,
        explicacao: "Árvores dão vida ao lugar.",
        visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
      },
      {
        pergunta: "A Vila fica bem cuidada quando…",
        opcoes: ["Cada um faz sua parte", "Ninguém ajuda", "Um só faz tudo"],
        correta: 0,
        explicacao: "Cuidado é coletivo.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🤝" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Missão EcoBrilha",
    objetivo:
      "Separe cada objeto da esteira em 90 segundos! ♻️ Reciclagem, 🗑️ Lixo comum ou 🌱 Natureza. Cada acerto faz nascer uma árvore na Vila!",
    tempoSegundos: 90,
    minAcertos: 8,
    categorias: [
      { nome: "Reciclagem", cor: "#0EA5E9", emoji: "♻️" },
      { nome: "Lixo comum", cor: "#78716C", emoji: "🗑️" },
      { nome: "Natureza", cor: "#22C55E", emoji: "🌱" },
    ],
    objetos: [
      { nome: "Garrafa", imagemUrl: garrafaImg, categoria: "Reciclagem", rotulo: "🥤" },
      { nome: "Caixa", imagemUrl: caixaImg, categoria: "Reciclagem", rotulo: "📦" },
      { nome: "Papel", imagemUrl: papelImg, categoria: "Lixo comum", rotulo: "📄" },
      { nome: "Flor", imagemUrl: florImg, categoria: "Natureza", rotulo: "🌼" },
      { nome: "Planta", imagemUrl: plantaImg, categoria: "Natureza", rotulo: "🌱" },
      { nome: "Livros", imagemUrl: livrosImg, categoria: "Reciclagem", rotulo: "📚" },
      { nome: "Árvore muda", imagemUrl: arvoreImg, categoria: "Natureza", rotulo: "🌳" },
      { nome: "Bola velha", imagemUrl: bolaImg, categoria: "Lixo comum", rotulo: "⚽" },
    ],
    acerto: "🌳 Vila Verde salva! Uma nova árvore nasceu graças a você!",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Guardiões Do Nosso Lugar",
    instrucao:
      "Com um familiar, escolham UM espaço próximo de casa (praça, calçada, quintal, sala…). Observem juntos e combinem UMA ação simples pra melhorar o lugar hoje.",
    registros: [
      { label: "Qual foi o LUGAR observado?", tipo: "texto" },
      { label: "O que estava BEM CUIDADO?", tipo: "texto" },
      { label: "O que pode MELHORAR?", tipo: "texto" },
      { label: "Qual AÇÃO vocês fizeram juntos?", tipo: "texto" },
    ],
    permitirFoto: true,
  },

  proximaHabilidade: { codigo: "EF01GE04" },
};

export default aula;

// keep-map-ref
void mapaImg;
