import type { Aula } from "../types";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import carroImg from "@/assets/neuro-treino/objetos/carro.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import sapoImg from "@/assets/neuro-treino/objetos/sapo.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import cachorroImg from "@/assets/neuro-treino/objetos/cachorro.png";
import borboletaImg from "@/assets/neuro-treino/objetos/borboleta.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";

/**
 * EF01LP06 — Aula 006 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Língua Portuguesa
 * BNCC: Segmentar oralmente palavras em sílabas.
 *
 * Missão do Dia: "O Trem das Sílabas".
 * Padrão travado (Português): tap-to-speak — toque na figura, o professor
 * fala a palavra em sílabas; toque na sílaba, o professor lê o pedaço.
 */
const aula: Aula = {
  codigo: "EF01LP06",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Trem das Sílabas",

  narrativa: {
    titulo: "O Trem das Sílabas",
    contexto:
      "O Brilha recebeu uma missão especial: o Trem das Sílabas precisa entregar palavras para toda a floresta.",
    problema:
      "Mas os vagões do trem estão vazios! Cada vagão só cabe UMA sílaba — o pedacinho de uma palavra.",
    convite:
      "Vamos bater palmas, separar as palavras em pedaços e encher os vagões pra o trem partir?",
  },

  conhecimentosPrevios: [
    "Escutar e repetir palavras curtas.",
    "Reconhecer letras do alfabeto (EF01LP04).",
    "Perceber que as letras representam sons (EF01LP05).",
  ],

  missao:
    "Descobrir que as palavras são feitas de sílabas e separar oralmente palavras batendo uma palma para cada pedaço.",

  objetivos: [
    "Perceber que as palavras são formadas por sílabas.",
    "Separar oralmente palavras em sílabas.",
    "Contar quantas sílabas tem cada palavra.",
    "Desenvolver a consciência silábica.",
  ],

  motivacao:
    "Bater palmas pras sílabas é como fazer música com as palavras! Cada palma é um vagão do trem.",

  explicacao:
    "Quando falamos uma palavra, ela pode ser dividida em pedaços menores chamados SÍLABAS.\n\n🐱 GA · TO → 2 sílabas\n🍌 BA · NA · NA → 3 sílabas\n🐘 E · LE · FAN · TE → 4 sílabas\n\nDica: fale devagar e bata uma PALMA pra cada pedaço da palavra.\nCada palma é um vagão do trem 🚂.",

  explicacoesNiveis: {
    nivel1: "Sílaba é um pedacinho da palavra que a gente fala numa palma só.",
    nivel2:
      "Fala BA-NA-NA batendo palmas. Uma palma pra cada pedaço — deu 3 palmas, então BANANA tem 3 sílabas.",
    nivel3:
      "Cada sílaba geralmente tem uma vogal (A, E, I, O, U). É a vogal que faz a boca abrir e o som sair forte.",
    nivel4:
      "Separar em sílabas ajuda a LER palavras novas: leio pedaço por pedaço, depois junto tudo.",
  },

  exemploResolvido: {
    enunciado: "Quantas sílabas tem a palavra BOLA?",
    passos: [
      "Fale a palavra devagar: BO... LA.",
      "Bata uma palma pra cada pedaço: 👏 BO 👏 LA.",
      "Conte as palmas: foram 2.",
    ],
    resposta: "BOLA tem 2 sílabas: BO · LA.",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir a palavra em pedaços. Depois responda quantas sílabas ela tem.",
    resposta: "GATO tem 2 sílabas: GA · TO.",
    explicacao:
      "Falando devagar: GA... TO. Duas palmas, dois vagões, duas sílabas.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura tem uma palavra com 2 sílabas?",
      opcoes: [
        { nome: "sol", imagemUrl: solImg },
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "borboleta", imagemUrl: borboletaImg },
      ],
      respostaCerta: "gato",
    },
  },

  exercicios: [
    {
      enunciado: "🎧 Separe em sílabas: CACHORRO.",
      resposta: "CA · CHOR · RO — 3 sílabas.",
      dica: "Fale bem devagar batendo palmas: CA - CHOR - RO.",
    },
    {
      enunciado: "🎧 Separe em sílabas: BANANA.",
      resposta: "BA · NA · NA — 3 sílabas.",
      dica: "3 palmas: BA - NA - NA.",
    },
    {
      enunciado: "🎧 Separe em sílabas: PASSARINHO.",
      resposta: "PAS · SA · RI · NHO — 4 sílabas.",
      dica: "4 palmas: PAS - SA - RI - NHO.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: descubra quantas sílabas tem cada palavra do trem.",
    resposta:
      "Cada palavra é um pedacinho da fala. Contando as palmas, contamos as sílabas.",
    visual: {
      cena: [
        { personagem: "SOL", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "BANANA", itemImagemUrl: bananaImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "PASSARINHO", itemImagemUrl: passaroImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        {
          pergunta: "☀️ Quantas sílabas tem SOL?",
          opcoes: ["1", "2", "3"],
          correta: 0,
          explicacao: "SOL fala tudo numa palma só — 1 sílaba.",
        },
        {
          pergunta: "🍌 Quantas sílabas tem BANANA?",
          opcoes: ["2", "3", "4"],
          correta: 1,
          explicacao: "BA · NA · NA — 3 palmas, 3 sílabas.",
        },
        {
          pergunta: "🐦 Quantas sílabas tem PASSARINHO?",
          opcoes: ["3", "4", "5"],
          correta: 1,
          explicacao: "PAS · SA · RI · NHO — 4 palmas, 4 sílabas.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🚂 Toda palavra é feita de SÍLABAS (pedaços).",
      "👏 Uma palma pra cada sílaba ajuda a contar.",
      "🔤 Cada sílaba geralmente tem uma vogal forte.",
      "📖 Separar em sílabas facilita a leitura e a escrita.",
    ],
    dica: "Antes de ler ou escrever uma palavra difícil, fale devagar e bata palmas.",
  },

  quiz: [
    {
      pergunta: "A palavra SOL possui:",
      opcoes: ["1 sílaba", "2 sílabas", "3 sílabas"],
      correta: 0,
      explicacao: "SOL sai da boca numa palma só — 1 sílaba.",
    },
    {
      pergunta: "A palavra BOLA possui:",
      opcoes: ["1 sílaba", "2 sílabas", "4 sílabas"],
      correta: 1,
      explicacao: "BO · LA — 2 palmas, 2 sílabas.",
    },
    {
      pergunta: "Qual palavra possui MAIS sílabas?",
      opcoes: ["Pé", "Banana", "Sol"],
      correta: 1,
      explicacao: "Pé = 1, Sol = 1, Banana = 3 sílabas. BANANA ganha!",
    },
    {
      pergunta: "Separar palavras em sílabas ajuda a:",
      opcoes: ["Ler e escrever melhor", "Contar dinheiro", "Medir objetos"],
      correta: 0,
      explicacao:
        "Lendo pedaço por pedaço, o cérebro entende palavras novas com mais facilidade.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Maquinista das Sílabas! Missão em Família: escolha 5 objetos da casa, fale o nome batendo palmas e conte quantas sílabas cada um tem.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "As sílabas aparecem quando falamos uma palavra em partes. Perceber esses pedaços ajuda nosso cérebro a identificar os padrões da língua — e faz a leitura ficar mais fácil.",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Bata Palmas",
      instrucao:
        "Toque na figura pra ouvir a palavra em sílabas. Qual tem SÓ 2 sílabas (BO · LA)?",
      pergunta: "Qual figura tem 2 sílabas?",
      opcoes: [
        { nome: "BOLA", imagemUrl: bolaImg, rotulo: "⚽ BO · LA" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "BORBOLETA", imagemUrl: borboletaImg, rotulo: "🦋 BOR · BO · LE · TA" },
      ],
      correta: 0,
      acerto: "🎉 BOLA tem 2 sílabas: BO · LA — duas palmas!",
      erro: "Bata palmas: BO - LA. Deu 2! Procure a figura com 2 sílabas.",
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Quantas Sílabas?",
      instrucao:
        "Toque na figura pra ouvir MA · ÇÃ. Quantas sílabas escutou?",
      pergunta: "Quantas sílabas tem MAÇÃ?",
      opcoes: [
        { nome: "1 sílaba", imagemUrl: macaImg, rotulo: "1️⃣ 1 sílaba" },
        { nome: "2 sílabas", imagemUrl: macaImg, rotulo: "2️⃣ 2 sílabas" },
        { nome: "3 sílabas", imagemUrl: macaImg, rotulo: "3️⃣ 3 sílabas" },
      ],
      correta: 1,
      acerto: "🍎 Isso! MA · ÇÃ — 2 palmas, 2 sílabas.",
      erro: "Fala devagar: MA - ÇÃ. Contou quantas palmas?",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Separe os Vagões (CARRO)",
      instrucao:
        "O trem tem 2 vagões pra palavra CARRO. Arraste cada sílaba pro vagão certo.",
      pares: [
        { item: "CA", alvo: "🚃 Vagão 1" },
        { item: "RRO", alvo: "🚃 Vagão 2" },
      ],
      alvosVisuais: [
        { nome: "🚃 Vagão 1", cor: "#F87171", capacidade: 1, imagemUrl: carroImg },
        { nome: "🚃 Vagão 2", cor: "#60A5FA", capacidade: 1, imagemUrl: carroImg },
      ],
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Complete o Trem (SAPO)",
      instrucao:
        "Arraste as sílabas na ORDEM certa pra completar SA · PO.",
      pares: [
        { item: "SA", alvo: "🚃 Vagão 1" },
        { item: "PO", alvo: "🚃 Vagão 2" },
      ],
      alvosVisuais: [
        { nome: "🚃 Vagão 1", cor: "#34D399", capacidade: 1, imagemUrl: sapoImg },
        { nome: "🚃 Vagão 2", cor: "#FBBF24", capacidade: 1, imagemUrl: sapoImg },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Oficina das Sílabas",
      instrucao:
        "Toque em cada figura pra ouvir a palavra em pedaços. Qual tem 4 sílabas?",
      pergunta: "Qual palavra tem 4 sílabas?",
      opcoes: [
        { nome: "BORBOLETA", imagemUrl: borboletaImg, rotulo: "🦋 BOR·BO·LE·TA" },
        { nome: "GATO", imagemUrl: gatoImg, rotulo: "🐱 GA·TO" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
      ],
      correta: 0,
      acerto: "🦋 BORBOLETA! BOR · BO · LE · TA — 4 palmas, 4 sílabas.",
      erro: "Bata palmas em cada palavra e conte. A de 4 palmas é a certa.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "☀️ Quantas sílabas tem SOL?",
        opcoes: ["1", "2", "3"],
        correta: 0,
        explicacao: "SOL — 1 palma, 1 sílaba.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️ SOL" },
      },
      {
        pergunta: "🐱 Quantas sílabas tem GATO?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        explicacao: "GA · TO — 2 palmas, 2 sílabas.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱 GA·TO" },
      },
      {
        pergunta: "🍌 Quantas sílabas tem BANANA?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "BA · NA · NA — 3 palmas, 3 sílabas.",
        visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "🍌 BA·NA·NA" },
      },
    ],
    medio: [
      {
        pergunta: "🐸 Quantas sílabas tem SAPO?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        explicacao: "SA · PO — 2 palmas, 2 sílabas.",
        visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "🐸 SA·PO" },
      },
      {
        pergunta: "🚗 Quantas sílabas tem CARRO?",
        opcoes: ["2", "3", "4"],
        correta: 0,
        explicacao: "CA · RRO — 2 palmas, 2 sílabas.",
        visual: { tipo: "itens", imagemUrl: carroImg, quantidade: 1, rotulo: "🚗 CA·RRO" },
      },
      {
        pergunta: "🐶 Quantas sílabas tem CACHORRO?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "CA · CHOR · RO — 3 palmas, 3 sílabas.",
        visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "🐶 CA·CHOR·RO" },
      },
    ],
    dificil: [
      {
        pergunta: "🦋 Quantas sílabas tem BORBOLETA?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "BOR · BO · LE · TA — 4 palmas, 4 sílabas.",
        visual: { tipo: "itens", imagemUrl: borboletaImg, quantidade: 1, rotulo: "🦋 BOR·BO·LE·TA" },
      },
      {
        pergunta: "🐦 Quantas sílabas tem PASSARINHO?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "PAS · SA · RI · NHO — 4 palmas, 4 sílabas.",
        visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "🐦 PAS·SA·RI·NHO" },
      },
      {
        pergunta: "Qual palavra tem MAIS sílabas?",
        opcoes: ["SOL", "BANANA", "PÉ"],
        correta: 1,
        explicacao: "SOL=1, PÉ=1, BANANA=3. BANANA tem mais sílabas.",
        visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "🍌 BA·NA·NA" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP07",
  },
};

export default aula;
