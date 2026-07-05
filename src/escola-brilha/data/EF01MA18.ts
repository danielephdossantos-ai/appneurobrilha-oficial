import type { Aula } from "../types";

/**
 * EF01MA18 — Aula 018 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Produzir a escrita de uma data, apresentando o dia, o mês e o ano,
 *       e indicar o dia da semana de uma data, consultando calendários.
 *
 * Missão: "O Convite da Festa da Floresta".
 *
 * REGRA DO USUÁRIO (travada): emojis do prompt como imagens (SVG data-URI
 * com foreignObject). Crianças não alfabetizadas devem poder tocar nas
 * figuras — botões clicáveis com imagem grande + texto.
 */
const emojiImg = (emoji: string): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><foreignObject x='0' y='0' width='200' height='200'><div xmlns='http://www.w3.org/1999/xhtml' style='width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-size:150px;line-height:1;font-family:Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,EmojiOne Color,Twemoji Mozilla,sans-serif'>${emoji}</div></foreignObject></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Ícones-chave
const calendarioImg = emojiImg("📅");
const cartaImg = emojiImg("💌");
const festaImg = emojiImg("🎊");
const boloImg = emojiImg("🎂");
const brilhaImg = emojiImg("✨");
const relogioImg = emojiImg("⏰");
const agendaImg = emojiImg("🗓️");
const presenteImg = emojiImg("🎁");

// Dígitos como âncoras visuais
const d0 = emojiImg("0️⃣");
const d1 = emojiImg("1️⃣");
const d2 = emojiImg("2️⃣");
const d5 = emojiImg("5️⃣");
const d7 = emojiImg("7️⃣");
const d8 = emojiImg("8️⃣");
const d9 = emojiImg("9️⃣");

// Meses (mesmos ícones do EF01MA17)
const janImg = emojiImg("🎆");
const fevImg = emojiImg("🎭");
const marImg = emojiImg("🌷");
const abrImg = emojiImg("🥚");
const maiImg = emojiImg("💐");
const junImg = emojiImg("🔥");
const julImg = emojiImg("❄️");
const agoImg = emojiImg("🌬️");
const setImg = emojiImg("🌱");
const outImg = emojiImg("🎃");
const novImg = emojiImg("🍂");
const dezImg = emojiImg("🎄");

const aula: Aula = {
  codigo: "EF01MA18",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Convite da Festa da Floresta",

  narrativa: {
    titulo: "O Convite da Festa da Floresta",
    contexto:
      "O Brilha ✨ vai organizar a grande Festa da Floresta 🎊 e precisa enviar os convites 💌 pra todos os animais.",
    problema:
      "Ele precisa escrever a data 📅 corretamente e descobrir em que dia da semana a festa vai acontecer.",
    convite:
      "Vamos ajudar o Brilha a virar um explorador do tempo ⏰ e escrever datas como um cientista?",
  },

  conhecimentosPrevios: [
    "Conhecer os meses do ano.",
    "Conhecer os dias da semana.",
    "Contar até 31.",
  ],

  missao:
    "Produzir a escrita de uma data (dia/mês/ano) e indicar o dia da semana consultando o calendário.",

  objetivos: [
    "Identificar dia, mês e ano em uma data.",
    "Escrever datas no formato dia/mês/ano.",
    "Localizar datas em um calendário.",
    "Descobrir o dia da semana de uma data.",
  ],

  motivacao:
    "Saber escrever a data ajuda a lembrar de aniversários, festas, passeios e do início das férias!",

  explicacao:
    "Toda data tem 3 partes 📅:\n\n• DIA — o número do dia (1 a 31)\n• MÊS — Janeiro, Fevereiro… Dezembro\n• ANO — o ano em que estamos\n\nEscrevemos assim: 15/08/2026 ou 15 de agosto de 2026. As duas formas mostram a MESMA data.",

  explicacoesNiveis: {
    nivel1: "Uma data tem DIA / MÊS / ANO. Exemplo: 15/08/2026.",
    nivel2:
      "15/08/2026 é o mesmo que 15 de agosto de 2026. As duas formas dizem a mesma coisa.",
    nivel3:
      "O 📅 calendário mostra os dias em quadradinhos. Cada quadrado tem um número (o dia) e fica embaixo de um dia da semana.",
    nivel4:
      "Usamos datas pra marcar 🎂 aniversário, 🎊 festa, 🩺 consulta e ⚽ campeonato — assim ninguém esquece o dia certo!",
  },

  exemploResolvido: {
    enunciado: "Escreva a data: dia 15, mês agosto, ano 2026.",
    passos: [
      "DIA: 15",
      "MÊS: agosto → 08 (é o 8º mês).",
      "ANO: 2026",
      "Junte tudo com barras: 15/08/2026.",
    ],
    resposta: "15/08/2026",
  },

  atividadeGuiada: {
    enunciado: "Na data 21/11/2026, qual é o MÊS?",
    resposta: "Novembro.",
    explicacao:
      "Numa data DIA/MÊS/ANO, o número do meio é o MÊS. 11 = novembro (11º mês).",
    visual: {
      tipo: "cena",
      pergunta: "Na data 21/11/2026, qual é o MÊS?",
      posicao: "aoLado",
      referenciaImg: calendarioImg,
      referenciaLabel: "21/11/2026",
      sujeitoImg: novImg,
      sujeitoLabel: "🍂 Novembro",
      opcoes: ["🎃 Outubro", "🍂 Novembro", "🎄 Dezembro"],
      correta: 1,
    },
  },

  exercicios: [
    { enunciado: "Numa data, qual parte fica no MEIO?", resposta: "O mês", dica: "DIA / MÊS / ANO." },
    { enunciado: "10/03/2026 — qual é o mês?", resposta: "Março", dica: "03 é o 3º mês." },
    { enunciado: "Qual parte da data indica o ANO?", resposta: "2026", dica: "É o número maior (4 dígitos)." },
    { enunciado: "Escreva: dia 7, mês setembro, ano 2026.", resposta: "07/09/2026", dica: "Setembro é o 9º mês." },
    { enunciado: "O que usamos pra descobrir o dia da semana de uma data?", resposta: "O calendário 📅", dica: "Ele mostra dias em quadradinhos." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: complete as datas do convite da festa!",
    resposta:
      "18/07/2026 · 25/12/2026 é dezembro · 05/05/2026 · Ferramenta: calendário.",
    visual: {
      perguntas: [
        {
          pergunta: "Dia 18, mês julho, ano 2026 → escreva a data.",
          opcoes: ["07/18/2026", "18/07/2026", "2026/07/18"],
          correta: 1,
          explicacao: "Escrevemos DIA/MÊS/ANO. Julho é o 7º mês → 18/07/2026.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: d1, quantidade: 1, rotulo: "Dia 18", cor: "#3B82F6" },
              { imagemUrl: julImg, quantidade: 1, rotulo: "Julho", cor: "#0EA5E9" },
              { imagemUrl: d2, quantidade: 1, rotulo: "2026", cor: "#A855F7" },
            ],
          },
        },
        {
          pergunta: "Na data 25/12/2026, qual é o mês?",
          opcoes: ["🍂 Novembro", "🎄 Dezembro", "🎆 Janeiro"],
          correta: 1,
          explicacao: "12 é o 12º mês — DEZEMBRO 🎄.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: calendarioImg, quantidade: 1, rotulo: "25/12/2026", cor: "#DC2626" },
              { imagemUrl: dezImg, quantidade: 1, rotulo: "Dezembro", cor: "#16A34A" },
            ],
          },
        },
        {
          pergunta: "05 / __ / 2026 — se o mês é MAIO, o número é…",
          opcoes: ["05", "12", "20"],
          correta: 0,
          explicacao: "Maio é o 5º mês → 05.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: maiImg, quantidade: 1, rotulo: "Maio", cor: "#EC4899" },
              { imagemUrl: d5, quantidade: 1, rotulo: "05", cor: "#F472B6" },
            ],
          },
        },
        {
          pergunta: "Pra descobrir o DIA DA SEMANA de uma data usamos…",
          opcoes: ["📏 Régua", "📅 Calendário", "⚖️ Balança"],
          correta: 1,
          explicacao: "O calendário 📅 mostra cada dia embaixo de um dia da semana.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: calendarioImg, quantidade: 1, rotulo: "Calendário", cor: "#3B82F6" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Data = DIA / MÊS / ANO.",
      "15/08/2026 = 15 de agosto de 2026.",
      "O 📅 calendário mostra o dia da semana de cada data.",
      "Cada mês tem um número: janeiro 01 … dezembro 12.",
    ],
    dica: "Escrevendo a data, pense: dia primeiro, mês no meio, ano no fim.",
  },

  quiz: [
    {
      pergunta: "Na data 10/03/2026, qual é o MÊS?",
      opcoes: ["🎭 Fevereiro", "🌷 Março", "🥚 Abril"],
      correta: 1,
      explicacao: "03 é o 3º mês → MARÇO 🌷.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: calendarioImg, quantidade: 1, rotulo: "10/03/2026", cor: "#3B82F6" },
          { imagemUrl: marImg, quantidade: 1, rotulo: "Março", cor: "#EC4899" },
        ],
      },
    },
    {
      pergunta: "Qual parte da data indica o ANO?",
      opcoes: ["2026", "10", "03"],
      correta: 0,
      explicacao: "O ano tem 4 dígitos — 2026.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: d2, quantidade: 1, rotulo: "2026", cor: "#A855F7" },
        ],
      },
    },
    {
      pergunta: "Qual ferramenta usamos pra descobrir o dia da semana de uma data?",
      opcoes: ["📏 Régua", "📅 Calendário", "⚖️ Balança"],
      correta: 1,
      explicacao: "O calendário organiza dias, semanas e meses.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: calendarioImg, quantidade: 1, rotulo: "Calendário", cor: "#3B82F6" },
        ],
      },
    },
    {
      pergunta: "05 / __ / 2026 — se o mês é MAIO, o número é…",
      opcoes: ["05", "12", "20"],
      correta: 0,
      explicacao: "Maio é o 5º mês do ano → 05.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: maiImg, quantidade: 1, rotulo: "Maio", cor: "#EC4899" },
          { imagemUrl: d5, quantidade: 1, rotulo: "05", cor: "#F472B6" },
        ],
      },
    },
  ],

  conclusao:
    "🏆 Medalha conquistada: Guardião do Calendário Mágico! Você aprendeu a escrever datas (DIA/MÊS/ANO) e a descobrir o dia da semana usando o 📅 calendário. Missão em Família: com um calendário em mãos, marquem o próximo aniversário 🎂 e descubram em que dia da semana ele cai.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os calendários existem há milhares de anos 🕰️. Foram criados pra ajudar as pessoas a acompanhar o tempo, organizar colheitas 🌾, viagens ✈️ e festas 🎊.",
  },

  interativas: [
    // ==== FASE 1 · Encontre a Data ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Encontre a Data",
      instrucao: "O calendário mostra AGOSTO 🌬️. Qual é o número do dia 15?",
      grupos: [
        { imagemUrl: agoImg, quantidade: 1, rotulo: "Agosto (08)" },
        { imagemUrl: d1, quantidade: 1, rotulo: "1" },
        { imagemUrl: d5, quantidade: 1, rotulo: "5" },
      ],
      pergunta: "Qual é a escrita do dia 15 de agosto de 2026?",
      opcoes: ["08/15/2026", "15/08/2026", "2026/15/08"],
      correta: 1,
      acerto: "Perfeito! 15/08/2026 — dia, mês, ano.",
      erro: "A ordem é DIA/MÊS/ANO → 15/08/2026.",
    },

    // ==== FASE 2 · Complete a Data ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Complete a Data",
      instrucao: "Hoje é __ / 08 / 2026. O calendário destaca o dia 9.",
      grupos: [
        { imagemUrl: d9, quantidade: 1, rotulo: "Dia destacado" },
        { imagemUrl: agoImg, quantidade: 1, rotulo: "Agosto" },
      ],
      pergunta: "Qual número completa a data?",
      opcoes: ["19", "09", "90"],
      correta: 1,
      acerto: "Isso! Escrevemos 09/08/2026.",
      erro: "O dia é 9 → escrevemos 09 (com o zero na frente).",
    },

    // ==== FASE 3 · Que Dia da Semana? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Que Dia da Semana É?",
      instrucao:
        "No calendário 📅, o dia 12 de outubro de 2026 cai em uma SEGUNDA-FEIRA. Confira o quadradinho.",
      grupos: [
        { imagemUrl: outImg, quantidade: 1, rotulo: "Outubro" },
        { imagemUrl: d1, quantidade: 1, rotulo: "12" },
      ],
      pergunta: "Qual é o dia da semana de 12/10/2026?",
      opcoes: ["🌈 Domingo", "1️⃣ Segunda-feira", "🎉 Sábado"],
      correta: 1,
      acerto: "Muito bem! 12/10/2026 é uma SEGUNDA-FEIRA.",
      erro: "Consulte o calendário — o dia 12 fica embaixo de SEGUNDA.",
    },

    // ==== FASE 4 · Escreva a Data ====
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Escreva a Data",
      instrucao:
        "Coloque na ordem certa pra escrever a data: DIA → MÊS → ANO.",
      itens: ["🗓️ Dia 07", "🌱 Setembro (09)", "📅 Ano 2026"],
      imagens: [
        { imagemUrl: d7, quantidade: 1, rotulo: "07 (dia)", cor: "#3B82F6" },
        { imagemUrl: setImg, quantidade: 1, rotulo: "09 (mês)", cor: "#22C55E" },
        { imagemUrl: calendarioImg, quantidade: 1, rotulo: "2026 (ano)", cor: "#A855F7" },
      ],
    },

    // ==== FASE 5 · Aniversário do Brilha ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Aniversário do Brilha",
      instrucao:
        "O aniversário 🎂 do Brilha ✨ será em 21 de novembro de 2026 (21/11/2026).",
      grupos: [
        { imagemUrl: d2, quantidade: 1, rotulo: "Dia 21" },
        { imagemUrl: novImg, quantidade: 1, rotulo: "Novembro (11)" },
        { imagemUrl: boloImg, quantidade: 1, rotulo: "🎂 Festa" },
      ],
      pergunta: "Qual é o MÊS do aniversário do Brilha?",
      opcoes: ["🎃 Outubro", "🍂 Novembro", "🎄 Dezembro"],
      correta: 1,
      acerto: "Isso! O 11 é NOVEMBRO — mês do aniversário do Brilha 🎂.",
      erro: "21/11/2026 → 11 é o 11º mês, novembro.",
    },

    // ==== MINI JOGO · Caça às Datas ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Caça às Datas",
      instrucao:
        "Arraste cada evento pro mês certo do calendário 📅.",
      alvosVisuais: [
        { nome: "🎆 JANEIRO", cor: "#EF4444", capacidade: 2, imagemUrl: janImg },
        { nome: "💐 MAIO", cor: "#EC4899", capacidade: 2, imagemUrl: maiImg },
        { nome: "🍂 NOVEMBRO", cor: "#B45309", capacidade: 2, imagemUrl: novImg },
        { nome: "🎄 DEZEMBRO", cor: "#16A34A", capacidade: 2, imagemUrl: dezImg },
      ],
      pares: [
        { item: "🎊 Ano Novo 01/01", alvo: "🎆 JANEIRO", itemImagem: festaImg },
        { item: "☀️ Férias 15/01", alvo: "🎆 JANEIRO", itemImagem: janImg },
        { item: "💐 Dia das Mães 10/05", alvo: "💐 MAIO", itemImagem: maiImg },
        { item: "🎂 Aniversário 20/05", alvo: "💐 MAIO", itemImagem: boloImg },
        { item: "🎂 Brilha 21/11", alvo: "🍂 NOVEMBRO", itemImagem: brilhaImg },
        { item: "🍂 Consciência Negra 20/11", alvo: "🍂 NOVEMBRO", itemImagem: novImg },
        { item: "🎄 Natal 25/12", alvo: "🎄 DEZEMBRO", itemImagem: dezImg },
        { item: "🎁 Amigo Secreto 22/12", alvo: "🎄 DEZEMBRO", itemImagem: presenteImg },
      ],
    },

    // ==== DESAFIO · Ligar mês → número ====
    {
      tipo: "ligar",
      titulo: "Desafio Brilha · Ligue o mês ao número",
      instrucao: "Ligue cada mês ao seu NÚMERO na data (01 a 12).",
      pares: [
        { a: "🎆 Janeiro", b: "01", aImagem: janImg, aQuantidade: 1, bImagem: janImg, bQuantidade: 1 },
        { a: "💐 Maio", b: "05", aImagem: maiImg, aQuantidade: 1, bImagem: maiImg, bQuantidade: 5 },
        { a: "❄️ Julho", b: "07", aImagem: julImg, aQuantidade: 1, bImagem: julImg, bQuantidade: 7 },
        { a: "🎄 Dezembro", b: "12", aImagem: dezImg, aQuantidade: 1, bImagem: dezImg, bQuantidade: 12 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Numa data, qual parte é o DIA?",
        opcoes: ["O primeiro número", "O último número"],
        correta: 0,
        explicacao: "DIA / MÊS / ANO — o dia é o primeiro.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: d1, quantidade: 1, rotulo: "Dia", cor: "#3B82F6" },
            { imagemUrl: calendarioImg, quantidade: 1, rotulo: "Calendário", cor: "#22C55E" },
          ],
        },
      },
      {
        pergunta: "Quantos meses tem um ano?",
        opcoes: ["10 meses", "12 meses"],
        correta: 1,
        explicacao: "De janeiro a dezembro são 12 meses.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: janImg, quantidade: 1, rotulo: "Janeiro (01)", cor: "#EF4444" },
            { imagemUrl: dezImg, quantidade: 1, rotulo: "Dezembro (12)", cor: "#16A34A" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Escreva: dia 3, mês abril, ano 2026.",
        opcoes: ["03/04/2026", "04/03/2026", "2026/04/03"],
        correta: 0,
        explicacao: "Abril é o 4º mês → 03/04/2026.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: abrImg, quantidade: 1, rotulo: "Abril (04)", cor: "#F97316" },
          ],
        },
      },
      {
        pergunta: "Na data 08/06/2026, qual é o mês?",
        opcoes: ["🔥 Junho", "❄️ Julho", "🌬️ Agosto"],
        correta: 0,
        explicacao: "06 é o 6º mês → JUNHO 🔥.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: junImg, quantidade: 1, rotulo: "Junho", cor: "#EF4444" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "12/10/2026 cai em uma SEGUNDA-FEIRA. Qual dia da semana será 13/10/2026?",
        opcoes: ["🌈 Domingo", "2️⃣ Terça-feira", "🎉 Sábado"],
        correta: 1,
        explicacao: "Depois de segunda vem TERÇA.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: outImg, quantidade: 1, rotulo: "Outubro", cor: "#F97316" },
            { imagemUrl: calendarioImg, quantidade: 1, rotulo: "13/10/2026", cor: "#3B82F6" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA19",
  },
};

export default aula;
