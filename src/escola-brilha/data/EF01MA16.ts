import type { Aula } from "../types";

/**
 * EF01MA16 — Aula 016 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Relatar em linguagem verbal ou não verbal sequência de
 *       acontecimentos relativos a um dia, utilizando, quando possível,
 *       os horários dos eventos.
 *
 * Missão: "O Relógio Encantado do Brilha".
 *
 * REGRA DO USUÁRIO (travada): usar EXATAMENTE os emojis do prompt como
 * imagens dos objetos. Cada "imagem" é um SVG data-URI com o emoji
 * renderizado grande via foreignObject (renderiza color emoji de forma
 * confiável em todos os browsers).
 */
const emojiImg = (emoji: string): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><foreignObject x='0' y='0' width='200' height='200'><div xmlns='http://www.w3.org/1999/xhtml' style='width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-size:150px;line-height:1;font-family:Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,EmojiOne Color,Twemoji Mozilla,sans-serif'>${emoji}</div></foreignObject></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// ==== Períodos do dia ====
const manhaImg = emojiImg("🌅");
const tardeImg = emojiImg("🌞");
const noiteImg = emojiImg("🌙");

// ==== Atividades de rotina ====
const acordarImg = emojiImg("🛏️");
const escovarImg = emojiImg("🪥");
const cafeImg = emojiImg("🍞");
const escolaImg = emojiImg("🏫");
const almocoImg = emojiImg("🍽️");
const brincarImg = emojiImg("🎮");
const jantarImg = emojiImg("🥘");
const dormirImg = emojiImg("😴");
const estudarImg = emojiImg("📚");
const banhoImg = emojiImg("🛁");

// ==== Relógio ====
const relogioImg = emojiImg("⏰");
const relogio8Img = emojiImg("🕗");
const solImg = emojiImg("☀️");
const brilhaImg = emojiImg("✨");

// ==== Objetos p/ distratores ====
const reguaImg = emojiImg("📏");
const balancaImg = emojiImg("⚖️");

const aula: Aula = {
  codigo: "EF01MA16",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Relógio Encantado do Brilha",

  narrativa: {
    titulo: "O Relógio Encantado do Brilha",
    contexto:
      "O relógio mágico ⏰ da floresta parou de funcionar! Sem ele, ninguém sabe a hora certa das coisas.",
    problema:
      "Pra fazer o relógio voltar a marcar o tempo, o Brilha ✨ precisa organizar direitinho o que acontece durante o dia.",
    convite:
      "Vamos colocar os acontecimentos na ordem certa e descobrir manhã 🌅, tarde 🌞 e noite 🌙?",
  },

  conhecimentosPrevios: [
    "Diferenciar dia e noite.",
    "Reconhecer atividades comuns do dia a dia por imagem.",
    "Comparar 'antes' e 'depois'.",
  ],

  missao:
    "Organizar acontecimentos do dia em sequência (antes / depois) e relacionar com os períodos manhã, tarde e noite.",

  objetivos: [
    "Identificar a sequência de acontecimentos de um dia.",
    "Compreender antes, depois e durante.",
    "Relacionar atividades aos períodos do dia (manhã / tarde / noite).",
    "Reconhecer horários simples em relógios.",
  ],

  motivacao:
    "Saber a ordem das coisas ajuda a se organizar, chegar na hora e não esquecer nada — que nem gente grande faz!",

  explicacao:
    "🌅 MANHÃ — acordamos, tomamos café e vamos à escola.\n\n🌞 TARDE — almoçamos, estudamos e brincamos.\n\n🌙 NOITE — jantamos, tomamos banho e dormimos.\n\nExemplo de ordem: 🛏️ acordar → 🪥 escovar → 🍞 café → 🏫 escola.",

  explicacoesNiveis: {
    nivel1:
      "O dia tem três partes: 🌅 manhã (claro), 🌞 tarde (bem quente) e 🌙 noite (escuro). Fazemos coisas diferentes em cada uma.",
    nivel2:
      "🛏️ Acordar vem ANTES de 🍞 tomar café. 🍞 Café vem ANTES de 🏫 ir à escola. 😴 Dormir vem DEPOIS do 🥘 jantar.",
    nivel3:
      "Antes: o que aconteceu primeiro. Depois: o que aconteceu em seguida. Durante: o que está acontecendo agora. O relógio ⏰ ajuda a saber a hora exata.",
    nivel4:
      "Colocar acontecimentos em ordem ajuda a planejar o dia, lembrar compromissos, entender histórias e usar calendários e relógios.",
  },

  exemploResolvido: {
    enunciado:
      "Coloque em ordem: 🍞 café, 😴 dormir, 🛏️ acordar, 🏫 escola.",
    passos: [
      "Primeiro a gente 🛏️ acorda.",
      "Depois toma 🍞 café.",
      "Depois vai pra 🏫 escola.",
      "Só bem no final do dia é que a gente vai 😴 dormir.",
    ],
    resposta:
      "🛏️ Acordar → 🍞 Café → 🏫 Escola → 😴 Dormir.",
  },

  atividadeGuiada: {
    enunciado:
      "O que costuma acontecer DEPOIS do 🍽️ almoço na escola?",
    resposta: "Brincar 🎮.",
    explicacao:
      "Depois do almoço vem o recreio — hora de brincar 🎮. Só à noite 🌙 é que vamos dormir.",
    visual: {
      tipo: "grupos",
      grupos: [
        { imagemUrl: almocoImg, quantidade: 1, rotulo: "Almoço 🍽️", cor: "#F97316" },
        { imagemUrl: brincarImg, quantidade: 1, rotulo: "Brincar 🎮", cor: "#22C55E" },
      ],
    },
  },

  exercicios: [
    { enunciado: "Qual período vem DEPOIS da manhã 🌅?", resposta: "Tarde", dica: "Manhã → ___ → Noite." },
    { enunciado: "Qual período vem DEPOIS da tarde 🌞?", resposta: "Noite", dica: "Vem o escurinho com a lua." },
    { enunciado: "O que vem ANTES do 🍞 café da manhã?", resposta: "Acordar", dica: "Você já estava dormindo antes." },
    { enunciado: "O que vem DEPOIS do 🥘 jantar?", resposta: "Dormir", dica: "É o último acontecimento do dia." },
    { enunciado: "Que objeto usamos para saber a hora?", resposta: "Relógio", dica: "Tem ponteiros e números." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: complete as frases da rotina do dia!",
    resposta:
      "Manhã → Tarde → Noite · Antes do café: acordar · Depois do jantar: dormir.",
    visual: {
      perguntas: [
        {
          pergunta: "Depois da 🌅 manhã vem a __________.",
          opcoes: ["Noite 🌙", "Tarde 🌞", "Manhã de novo 🌅"],
          correta: 1,
          explicacao: "A ordem é: Manhã → Tarde → Noite.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: manhaImg, quantidade: 1, rotulo: "Manhã", cor: "#FBBF24" },
              { imagemUrl: tardeImg, quantidade: 1, rotulo: "Tarde", cor: "#F97316" },
              { imagemUrl: noiteImg, quantidade: 1, rotulo: "Noite", cor: "#6366F1" },
            ],
          },
        },
        {
          pergunta: "O que a gente faz ANTES de 😴 dormir?",
          opcoes: ["🪥 Escovar os dentes", "🏫 Ir pra escola", "🛏️ Acordar"],
          correta: 0,
          explicacao: "Antes de dormir escovamos os dentes e vamos pra cama.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: escovarImg, quantidade: 1, rotulo: "Escovar", cor: "#60A5FA" },
              { imagemUrl: dormirImg, quantidade: 1, rotulo: "Dormir", cor: "#6366F1" },
            ],
          },
        },
        {
          pergunta: "Depois de 🪥 escovar os dentes de manhã eu…",
          opcoes: ["🥘 Janto", "🍞 Tomo café", "😴 Durmo"],
          correta: 1,
          explicacao: "De manhã, depois de escovar, vem o café.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: escovarImg, quantidade: 1, rotulo: "Escovar", cor: "#60A5FA" },
              { imagemUrl: cafeImg, quantidade: 1, rotulo: "Café", cor: "#F59E0B" },
            ],
          },
        },
        {
          pergunta: "Qual objeto usamos pra saber a HORA?",
          opcoes: ["📏 Régua", "⏰ Relógio", "⚖️ Balança"],
          correta: 1,
          explicacao: "Relógio marca as horas; régua mede comprimento; balança mede peso.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: reguaImg, quantidade: 1, rotulo: "Régua", cor: "#3B82F6" },
              { imagemUrl: relogioImg, quantidade: 1, rotulo: "Relógio", cor: "#EF4444" },
              { imagemUrl: balancaImg, quantidade: 1, rotulo: "Balança", cor: "#78716C" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🌅 MANHÃ · 🌞 TARDE · 🌙 NOITE — o dia tem 3 partes.",
      "ANTES = o que vem primeiro. DEPOIS = o que vem em seguida.",
      "🛏️ Acordar → 🪥 Escovar → 🍞 Café → 🏫 Escola.",
      "⏰ Relógio serve pra saber a hora certa.",
    ],
    dica: "Antes de responder: pense na sua própria rotina do dia.",
  },

  quiz: [
    {
      pergunta: "Qual período vem DEPOIS da tarde?",
      opcoes: ["🌅 Manhã", "🌙 Noite"],
      correta: 1,
      explicacao: "Manhã → Tarde → Noite.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: manhaImg, quantidade: 1, rotulo: "Manhã", cor: "#FBBF24" },
          { imagemUrl: noiteImg, quantidade: 1, rotulo: "Noite", cor: "#6366F1" },
        ],
      },
    },
    {
      pergunta: "Qual atividade normalmente acontece PRIMEIRO no dia?",
      opcoes: ["😴 Dormir", "🛏️ Acordar"],
      correta: 1,
      explicacao: "O dia começa quando a gente acorda.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: dormirImg, quantidade: 1, rotulo: "Dormir", cor: "#6366F1" },
          { imagemUrl: acordarImg, quantidade: 1, rotulo: "Acordar", cor: "#FBBF24" },
        ],
      },
    },
    {
      pergunta: "Qual objeto usamos pra observar as HORAS?",
      opcoes: ["📏 Régua", "⏰ Relógio", "⚖️ Balança"],
      correta: 1,
      explicacao: "O relógio marca as horas.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: reguaImg, quantidade: 1, rotulo: "Régua", cor: "#3B82F6" },
          { imagemUrl: relogioImg, quantidade: 1, rotulo: "Relógio", cor: "#EF4444" },
          { imagemUrl: balancaImg, quantidade: 1, rotulo: "Balança", cor: "#78716C" },
        ],
      },
    },
    {
      pergunta: "Complete: Manhã → Tarde → ______",
      opcoes: ["🌅 Manhã", "🌞 Tarde", "🌙 Noite"],
      correta: 2,
      explicacao: "A ordem dos períodos do dia termina na noite.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: manhaImg, quantidade: 1, rotulo: "Manhã", cor: "#FBBF24" },
          { imagemUrl: tardeImg, quantidade: 1, rotulo: "Tarde", cor: "#F97316" },
          { imagemUrl: noiteImg, quantidade: 1, rotulo: "?", cor: "#6366F1" },
        ],
      },
    },
  ],

  conclusao:
    "🏆 Medalha conquistada: Guardião do Tempo! Você aprendeu a colocar os acontecimentos do dia em ordem e a reconhecer manhã, tarde e noite. Missão em Família: monte com um adulto a rotina do seu dia usando desenhos ou cartõezinhos e conte qual atividade vem antes e qual vem depois.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os primeiros relógios ⏰ foram inventados há milhares de anos. Antes deles, as pessoas olhavam a posição do Sol ☀️ no céu pra saber se era manhã, meio-dia ou tarde!",
  },

  interativas: [
    // ==== FASE 1 · Coloque em ordem ====
    {
      tipo: "ordenar",
      titulo: "Fase 1 · Coloque em ordem",
      instrucao:
        "Arraste os cartões na ordem certa: do que acontece PRIMEIRO até o que acontece por ÚLTIMO.",
      itens: ["🛏️ Acordar", "🍞 Tomar café", "🏫 Ir pra escola", "😴 Dormir"],
      imagens: [
        { imagemUrl: acordarImg, quantidade: 1, rotulo: "🛏️ Acordar", cor: "#FBBF24" },
        { imagemUrl: cafeImg, quantidade: 1, rotulo: "🍞 Café", cor: "#F59E0B" },
        { imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫 Escola", cor: "#3B82F6" },
        { imagemUrl: dormirImg, quantidade: 1, rotulo: "😴 Dormir", cor: "#6366F1" },
      ],
    },

    // ==== FASE 2 · Antes ou depois? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Antes ou depois?",
      instrucao: "O que acontece DEPOIS do 🍽️ almoço?",
      grupos: [
        { imagemUrl: almocoImg, quantidade: 1, rotulo: "🍽️ Almoço (agora)" },
      ],
      pergunta: "O que vem depois do almoço?",
      opcoes: ["🌙 Dormir à noite", "🎮 Brincar", "🌅 Acordar"],
      correta: 1,
      acerto: "Isso! Depois do almoço vem o recreio, hora de brincar 🎮.",
      erro: "Dormir só vem à noite. Depois do almoço a gente costuma brincar!",
    },

    // ==== FASE 3 · Descobrindo o horário ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Descobrindo o horário",
      instrucao: "O relógio marca 🕗 8 horas da manhã. Que atividade acontece nesse horário?",
      grupos: [
        { imagemUrl: relogio8Img, quantidade: 1, rotulo: "🕗 8 horas" },
      ],
      pergunta: "O que a gente costuma fazer às 8 horas da manhã?",
      opcoes: ["🏫 Ir pra escola", "🌙 Dormir", "🥘 Jantar"],
      correta: 0,
      acerto: "Muito bem! De manhã a gente vai pra escola.",
      erro: "Às 8 da manhã já está claro — hora da escola!",
    },

    // ==== FASE 4 · Complete a rotina ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Complete a rotina",
      instrucao: "🌅 Manhã → 🌞 ______ → 🌙 Noite. Qual período está faltando?",
      grupos: [
        { imagemUrl: manhaImg, quantidade: 1, rotulo: "🌅 Manhã" },
        { imagemUrl: noiteImg, quantidade: 1, rotulo: "🌙 Noite" },
      ],
      pergunta: "Qual período fica entre manhã e noite?",
      opcoes: ["🌅 Manhã", "🌞 Tarde", "🌙 Noite"],
      correta: 1,
      acerto: "Isso! Manhã → Tarde → Noite.",
      erro: "Pensa no meio do dia, quando o Sol está bem alto ☀️.",
    },

    // ==== FASE 5 · O dia do Brilha ====
    {
      tipo: "ordenar",
      titulo: "Fase 5 · O dia do Brilha",
      instrucao:
        "Organize a história do Brilha: acordar 🛏️, escola 🏫 e dormir 😴 — coloque na ordem.",
      itens: ["🛏️ Acordar", "🏫 Escola", "😴 Dormir"],
      imagens: [
        { imagemUrl: acordarImg, quantidade: 1, rotulo: "🛏️ Acordar", cor: "#FBBF24" },
        { imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫 Escola", cor: "#3B82F6" },
        { imagemUrl: dormirImg, quantidade: 1, rotulo: "😴 Dormir", cor: "#6366F1" },
      ],
    },

    // ==== MINI JOGO · Minha Agenda ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Minha Agenda",
      instrucao:
        "Coloque cada atividade no período certo do dia: 🌅 manhã, 🌞 tarde ou 🌙 noite.",
      alvosVisuais: [
        { nome: "🌅 MANHÃ", cor: "#FBBF24", capacidade: 3, imagemUrl: manhaImg },
        { nome: "🌞 TARDE", cor: "#F97316", capacidade: 2, imagemUrl: tardeImg },
        { nome: "🌙 NOITE", cor: "#6366F1", capacidade: 3, imagemUrl: noiteImg },
      ],
      pares: [
        { item: "🛏️ Acordar", alvo: "🌅 MANHÃ", itemImagem: acordarImg },
        { item: "🪥 Escovar", alvo: "🌅 MANHÃ", itemImagem: escovarImg },
        { item: "🍞 Café", alvo: "🌅 MANHÃ", itemImagem: cafeImg },
        { item: "🍽️ Almoço", alvo: "🌞 TARDE", itemImagem: almocoImg },
        { item: "🎮 Brincar", alvo: "🌞 TARDE", itemImagem: brincarImg },
        { item: "🥘 Jantar", alvo: "🌙 NOITE", itemImagem: jantarImg },
        { item: "🛁 Banho", alvo: "🌙 NOITE", itemImagem: banhoImg },
        { item: "😴 Dormir", alvo: "🌙 NOITE", itemImagem: dormirImg },
      ],
    },

    // ==== DESAFIO · Ligar atividade → período ====
    {
      tipo: "ligar",
      titulo: "Desafio Brilha · Ligue a atividade ao período",
      instrucao: "Ligue cada atividade ao período do dia certo.",
      pares: [
        { a: "🛏️ Acordar", b: "🌅 Manhã", aImagem: acordarImg, aQuantidade: 1, bImagem: manhaImg, bQuantidade: 1 },
        { a: "🍽️ Almoço", b: "🌞 Tarde", aImagem: almocoImg, aQuantidade: 1, bImagem: tardeImg, bQuantidade: 1 },
        { a: "😴 Dormir", b: "🌙 Noite", aImagem: dormirImg, aQuantidade: 1, bImagem: noiteImg, bQuantidade: 1 },
        { a: "🍞 Café da manhã", b: "🌅 Manhã", aImagem: cafeImg, aQuantidade: 1, bImagem: manhaImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "O que a gente faz ao ACORDAR?",
        opcoes: ["😴 Dormir de novo", "🪥 Escovar os dentes"],
        correta: 1,
        explicacao: "Ao acordar, escovamos os dentes e nos preparamos.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: acordarImg, quantidade: 1, rotulo: "Acordar", cor: "#FBBF24" },
            { imagemUrl: escovarImg, quantidade: 1, rotulo: "Escovar", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "Qual período é o mais ESCURO?",
        opcoes: ["🌅 Manhã", "🌙 Noite"],
        correta: 1,
        explicacao: "À noite o Sol some e a Lua aparece.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: manhaImg, quantidade: 1, rotulo: "Manhã", cor: "#FBBF24" },
            { imagemUrl: noiteImg, quantidade: 1, rotulo: "Noite", cor: "#6366F1" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "O que vem ANTES de ir pra 🏫 escola?",
        opcoes: ["😴 Dormir", "🍞 Tomar café", "🥘 Jantar"],
        correta: 1,
        explicacao: "Antes da escola: acordar → escovar → tomar café.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: cafeImg, quantidade: 1, rotulo: "Café", cor: "#F59E0B" },
            { imagemUrl: escolaImg, quantidade: 1, rotulo: "Escola", cor: "#3B82F6" },
          ],
        },
      },
      {
        pergunta: "O que vem DEPOIS do 🥘 jantar?",
        opcoes: ["🏫 Escola", "🛁 Banho e 😴 dormir", "🍞 Café da manhã"],
        correta: 1,
        explicacao: "Depois do jantar tomamos banho e vamos dormir.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: jantarImg, quantidade: 1, rotulo: "Jantar", cor: "#F97316" },
            { imagemUrl: banhoImg, quantidade: 1, rotulo: "Banho", cor: "#60A5FA" },
            { imagemUrl: dormirImg, quantidade: 1, rotulo: "Dormir", cor: "#6366F1" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Qual é a ordem CORRETA?",
        opcoes: [
          "🌙 Noite → 🌅 Manhã → 🌞 Tarde",
          "🌅 Manhã → 🌞 Tarde → 🌙 Noite",
          "🌞 Tarde → 🌅 Manhã → 🌙 Noite",
        ],
        correta: 1,
        explicacao: "O dia sempre segue: Manhã → Tarde → Noite.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: manhaImg, quantidade: 1, rotulo: "Manhã", cor: "#FBBF24" },
            { imagemUrl: tardeImg, quantidade: 1, rotulo: "Tarde", cor: "#F97316" },
            { imagemUrl: noiteImg, quantidade: 1, rotulo: "Noite", cor: "#6366F1" },
          ],
        },
      },
      {
        pergunta:
          "O relógio marca 🕗 8h da manhã. Que atividade combina com esse horário?",
        opcoes: ["🥘 Jantar", "🏫 Ir pra escola", "😴 Dormir"],
        correta: 1,
        explicacao: "Às 8h da manhã costumamos ir para a escola.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: relogio8Img, quantidade: 1, rotulo: "🕗 8h", cor: "#EF4444" },
            { imagemUrl: escolaImg, quantidade: 1, rotulo: "Escola", cor: "#3B82F6" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01MA17" },
};

// Referências mantidas para futuras cenas.
void solImg;
void brilhaImg;
void estudarImg;

export default aula;
