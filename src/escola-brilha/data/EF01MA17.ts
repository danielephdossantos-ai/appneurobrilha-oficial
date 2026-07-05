import type { Aula } from "../types";

/**
 * EF01MA17 — Aula 017 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Reconhecer e relacionar períodos do dia, dias da semana e meses
 *       do ano, utilizando essas noções para organizar acontecimentos do
 *       cotidiano.
 *
 * Missão: "O Calendário Mágico do Brilha".
 *
 * REGRA DO USUÁRIO (travada): usar EXATAMENTE os emojis do prompt como
 * imagens (SVG data-URI com foreignObject) — nunca palavras escritas
 * como asset. Crianças não alfabetizadas devem poder tocar nas figuras.
 */
const emojiImg = (emoji: string): string => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><foreignObject x='0' y='0' width='200' height='200'><div xmlns='http://www.w3.org/1999/xhtml' style='width:200px;height:200px;display:flex;align-items:center;justify-content:center;font-size:150px;line-height:1;font-family:Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,EmojiOne Color,Twemoji Mozilla,sans-serif'>${emoji}</div></foreignObject></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// ==== Períodos do dia ====
const manhaImg = emojiImg("🌅");
const tardeImg = emojiImg("🌞");
const noiteImg = emojiImg("🌙");

// ==== Dias da semana (usando números do relógio como âncora visual) ====
const domImg = emojiImg("🌈");
const segImg = emojiImg("1️⃣");
const terImg = emojiImg("2️⃣");
const quaImg = emojiImg("3️⃣");
const quiImg = emojiImg("4️⃣");
const sexImg = emojiImg("5️⃣");
const sabImg = emojiImg("🎉");

// ==== Meses do ano ====
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

// ==== Cenas de rotina ====
const flor1Img = emojiImg("🌼");
const corujaImg = emojiImg("🦉");
const parqueImg = emojiImg("🛝");
const calendarioImg = emojiImg("📅");
const brilhaImg = emojiImg("✨");
const passeioImg = emojiImg("🚶");
const festaImg = emojiImg("🎊");

const aula: Aula = {
  codigo: "EF01MA17",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Calendário Mágico do Brilha",

  narrativa: {
    titulo: "O Calendário Mágico do Brilha",
    contexto:
      "O calendário 📅 encantado da floresta perdeu todas as suas páginas. Os animais esqueceram que dia é hoje!",
    problema:
      "Sem o calendário, ninguém sabe quando será o passeio 🚶 e nem em que mês acontece a Festa das Flores 🎊.",
    convite:
      "Vamos ajudar o Brilha ✨ a reorganizar o tempo: períodos do dia 🌅🌞🌙, dias da semana e meses do ano 🗓️?",
  },

  conhecimentosPrevios: [
    "Reconhecer manhã, tarde e noite.",
    "Reconhecer sequência antes/depois.",
    "Contar até 12 (para os meses).",
  ],

  missao:
    "Relacionar períodos do dia, dias da semana e meses do ano para organizar acontecimentos do cotidiano.",

  objetivos: [
    "Reconhecer os períodos do dia.",
    "Identificar os dias da semana.",
    "Conhecer os meses do ano.",
    "Organizar acontecimentos em sequência temporal.",
  ],

  motivacao:
    "Saber os dias e meses ajuda a lembrar do aniversário, das férias, dos passeios e das festas!",

  explicacao:
    "🌅 MANHÃ · 🌞 TARDE · 🌙 NOITE — os 3 períodos do dia.\n\n📅 SEMANA — Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado (7 dias).\n\n🗓️ ANO — Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro (12 meses).",

  explicacoesNiveis: {
    nivel1:
      "O dia tem 3 partes 🌅🌞🌙. A semana tem 7 dias. O ano tem 12 meses.",
    nivel2:
      "Depois de segunda vem terça. Depois de terça vem quarta. Depois de março vem abril. Sempre na mesma ordem.",
    nivel3:
      "O calendário 📅 mostra dias, semanas e meses. Ele ajuda a organizar quando as coisas acontecem.",
    nivel4:
      "Usamos o calendário pra planejar: aniversários 🎂, passeios 🚶, festas 🎊 e o começo das férias.",
  },

  exemploResolvido: {
    enunciado:
      "O Brilha quer visitar a Coruja 🦉 na quarta-feira. Qual dia vem DEPOIS da quarta?",
    passos: [
      "A semana começa no domingo.",
      "Depois de domingo: segunda → terça → quarta.",
      "Depois de quarta vem QUINTA-FEIRA.",
    ],
    resposta: "Quinta-feira.",
  },

  atividadeGuiada: {
    enunciado: "Qual dia vem DEPOIS da quarta-feira?",
    resposta: "Quinta-feira.",
    explicacao:
      "A ordem da semana é: Dom → Seg → Ter → Qua → Qui → Sex → Sáb. Depois de quarta vem quinta.",
    visual: {
      tipo: "cena",
      pergunta: "Depois de 3️⃣ Quarta vem…",
      posicao: "aoLado",
      referenciaImg: quaImg,
      referenciaLabel: "Quarta 3️⃣",
      sujeitoImg: quiImg,
      sujeitoLabel: "Quinta 4️⃣",
      opcoes: ["Segunda", "Quinta"],
      correta: 1,
    },
  },

  exercicios: [
    { enunciado: "Qual é o primeiro período do dia?", resposta: "Manhã 🌅", dica: "É quando o Sol nasce." },
    { enunciado: "Depois de segunda-feira vem…", resposta: "Terça-feira", dica: "Conte na ordem da semana." },
    { enunciado: "Qual mês vem DEPOIS de março?", resposta: "Abril", dica: "É o 4º mês do ano." },
    { enunciado: "Quantos dias tem uma semana?", resposta: "7 dias", dica: "Conte de domingo até sábado." },
    { enunciado: "Quantos meses tem um ano?", resposta: "12 meses", dica: "Janeiro é o 1º e Dezembro é o 12º." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: complete a agenda do calendário!",
    resposta:
      "Depois da noite vem a manhã · Depois de sexta vem sábado · Antes de dezembro vem novembro.",
    visual: {
      perguntas: [
        {
          pergunta: "Depois da 🌙 noite vem a __________.",
          opcoes: ["🌅 Manhã", "🌞 Tarde", "🌙 Noite de novo"],
          correta: 0,
          explicacao: "Depois da noite começa um novo dia — com a manhã!",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: noiteImg, quantidade: 1, rotulo: "Noite", cor: "#6366F1" },
              { imagemUrl: manhaImg, quantidade: 1, rotulo: "Manhã", cor: "#FBBF24" },
            ],
          },
        },
        {
          pergunta: "Depois de 5️⃣ sexta-feira vem __________.",
          opcoes: ["🎉 Sábado", "1️⃣ Segunda", "3️⃣ Quarta"],
          correta: 0,
          explicacao: "Ordem: sexta → sábado → domingo.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: sexImg, quantidade: 1, rotulo: "Sexta", cor: "#F472B6" },
              { imagemUrl: sabImg, quantidade: 1, rotulo: "Sábado", cor: "#22C55E" },
            ],
          },
        },
        {
          pergunta: "Antes de 🎄 dezembro vem __________.",
          opcoes: ["🍂 Novembro", "🎆 Janeiro", "🎃 Outubro"],
          correta: 0,
          explicacao: "Novembro (11º) vem antes de dezembro (12º).",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: novImg, quantidade: 1, rotulo: "Novembro", cor: "#B45309" },
              { imagemUrl: dezImg, quantidade: 1, rotulo: "Dezembro", cor: "#DC2626" },
            ],
          },
        },
        {
          pergunta: "Pra que serve o 📅 calendário?",
          opcoes: ["⚖️ Medir peso", "📅 Organizar o tempo", "✏️ Desenhar figuras"],
          correta: 1,
          explicacao: "O calendário organiza dias, semanas e meses.",
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
      "🌅 Manhã · 🌞 Tarde · 🌙 Noite — 3 períodos do dia.",
      "Semana: Dom, Seg, Ter, Qua, Qui, Sex, Sáb — 7 dias.",
      "Ano: Jan, Fev, Mar, Abr, Mai, Jun, Jul, Ago, Set, Out, Nov, Dez — 12 meses.",
      "📅 Calendário serve pra organizar o tempo.",
    ],
    dica: "Antes de responder, pense: 'o que vem antes?' e 'o que vem depois?'.",
  },

  quiz: [
    {
      pergunta: "Qual é o PRIMEIRO período do dia?",
      opcoes: ["🌙 Noite", "🌅 Manhã", "🌞 Tarde"],
      correta: 1,
      explicacao: "O dia começa pela manhã, quando o Sol nasce.",
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
      pergunta: "Depois da 2️⃣ terça-feira vem…",
      opcoes: ["1️⃣ Segunda", "3️⃣ Quarta", "🌈 Domingo"],
      correta: 1,
      explicacao: "Ordem: segunda → terça → quarta.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: terImg, quantidade: 1, rotulo: "Terça", cor: "#3B82F6" },
          { imagemUrl: quaImg, quantidade: 1, rotulo: "Quarta", cor: "#22C55E" },
        ],
      },
    },
    {
      pergunta: "Qual mês vem DEPOIS de agosto?",
      opcoes: ["🌱 Setembro", "❄️ Julho", "🎃 Outubro"],
      correta: 0,
      explicacao: "Agosto é o 8º mês. Setembro é o 9º.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: agoImg, quantidade: 1, rotulo: "Agosto", cor: "#78716C" },
          { imagemUrl: setImg, quantidade: 1, rotulo: "Setembro", cor: "#22C55E" },
        ],
      },
    },
    {
      pergunta: "O 📅 calendário serve pra…",
      opcoes: ["⚖️ Medir peso", "📅 Organizar o tempo", "✏️ Desenhar figuras"],
      correta: 1,
      explicacao: "Calendário organiza dias, semanas e meses.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: calendarioImg, quantidade: 1, rotulo: "Calendário", cor: "#3B82F6" },
        ],
      },
    },
  ],

  conclusao:
    "🏆 Medalha conquistada: Guardião do Calendário! Você aprendeu os períodos do dia, os dias da semana e os meses do ano. Missão em Família: montem juntos um calendário da semana marcando o dia de estudar 📚, brincar 🎮, passear 🚶 e um compromisso importante ⭐.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Existem calendários diferentes usados em vários países do mundo 🌍, mas todos ajudam as pessoas a organizar o tempo e lembrar de acontecimentos importantes.",
  },

  interativas: [
    // ==== FASE 1 · Organize o Dia ====
    {
      tipo: "ordenar",
      titulo: "Fase 1 · Organize o Dia",
      instrucao:
        "Arraste os cartões pra ordem certa: PRIMEIRO até por ÚLTIMO no dia.",
      itens: ["🌅 Manhã", "🌞 Tarde", "🌙 Noite"],
      imagens: [
        { imagemUrl: manhaImg, quantidade: 1, rotulo: "🌅 Manhã", cor: "#FBBF24" },
        { imagemUrl: tardeImg, quantidade: 1, rotulo: "🌞 Tarde", cor: "#F97316" },
        { imagemUrl: noiteImg, quantidade: 1, rotulo: "🌙 Noite", cor: "#6366F1" },
      ],
    },

    // ==== FASE 2 · Qual vem depois? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Qual vem depois?",
      instrucao: "Depois de 3️⃣ quarta-feira vem qual dia?",
      grupos: [
        { imagemUrl: quaImg, quantidade: 1, rotulo: "3️⃣ Quarta (agora)" },
      ],
      pergunta: "Qual dia vem depois de quarta?",
      opcoes: ["1️⃣ Segunda", "4️⃣ Quinta", "🌈 Domingo"],
      correta: 1,
      acerto: "Muito bem! Depois de quarta vem quinta.",
      erro: "A ordem é: seg → ter → qua → QUI → sex.",
    },

    // ==== FASE 3 · Descubra o Mês ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Descubra o Mês",
      instrucao: "Olhe o calendário 📅. Qual mês vem depois de março 🌷?",
      grupos: [
        { imagemUrl: marImg, quantidade: 1, rotulo: "🌷 Março" },
      ],
      pergunta: "Qual mês vem DEPOIS de março?",
      opcoes: ["💐 Maio", "🥚 Abril", "🔥 Junho"],
      correta: 1,
      acerto: "Isso! Março (3º) → Abril (4º).",
      erro: "Conte: Janeiro, Fevereiro, Março, ABRIL…",
    },

    // ==== FASE 4 · Complete a Sequência ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Complete a Sequência",
      instrucao: "Segunda → Terça → Quarta → ___ ?",
      grupos: [
        { imagemUrl: segImg, quantidade: 1, rotulo: "Segunda" },
        { imagemUrl: terImg, quantidade: 1, rotulo: "Terça" },
        { imagemUrl: quaImg, quantidade: 1, rotulo: "Quarta" },
      ],
      pergunta: "Qual dia completa a sequência?",
      opcoes: ["🎉 Sábado", "4️⃣ Quinta", "🌈 Domingo"],
      correta: 1,
      acerto: "Perfeito! Segue: qua → QUINTA → sex.",
      erro: "Depois de quarta vem QUINTA-FEIRA.",
    },

    // ==== FASE 5 · A Agenda do Brilha ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · A Agenda do Brilha",
      instrucao:
        "Brilha planta flores 🌼 na SEGUNDA, visita a Coruja 🦉 na QUARTA e brinca no parque 🛝 na SEXTA. Em que dia ele visita a Coruja?",
      grupos: [
        { imagemUrl: flor1Img, quantidade: 1, rotulo: "Seg · Flores" },
        { imagemUrl: corujaImg, quantidade: 1, rotulo: "? · Coruja" },
        { imagemUrl: parqueImg, quantidade: 1, rotulo: "Sex · Parque" },
      ],
      pergunta: "Em que dia Brilha visita a Coruja 🦉?",
      opcoes: ["1️⃣ Segunda-feira", "3️⃣ Quarta-feira", "5️⃣ Sexta-feira"],
      correta: 1,
      acerto: "Isso! A visita à Coruja é na QUARTA-FEIRA.",
      erro: "Segunda: flores. QUARTA: coruja. Sexta: parque.",
    },

    // ==== MINI JOGO · Calendário Interativo ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Calendário Interativo",
      instrucao:
        "Coloque cada mês na estação certa do ano: 🔥 verão, 🍂 outono, ❄️ inverno, 🌱 primavera.",
      alvosVisuais: [
        { nome: "🔥 VERÃO", cor: "#EF4444", capacidade: 3, imagemUrl: junImg },
        { nome: "🍂 OUTONO", cor: "#B45309", capacidade: 3, imagemUrl: novImg },
        { nome: "❄️ INVERNO", cor: "#3B82F6", capacidade: 3, imagemUrl: julImg },
        { nome: "🌱 PRIMAVERA", cor: "#22C55E", capacidade: 3, imagemUrl: setImg },
      ],
      pares: [
        { item: "🎆 Janeiro", alvo: "🔥 VERÃO", itemImagem: janImg },
        { item: "🎭 Fevereiro", alvo: "🔥 VERÃO", itemImagem: fevImg },
        { item: "🌷 Março", alvo: "🍂 OUTONO", itemImagem: marImg },
        { item: "🥚 Abril", alvo: "🍂 OUTONO", itemImagem: abrImg },
        { item: "💐 Maio", alvo: "🍂 OUTONO", itemImagem: maiImg },
        { item: "❄️ Julho", alvo: "❄️ INVERNO", itemImagem: julImg },
        { item: "🌬️ Agosto", alvo: "❄️ INVERNO", itemImagem: agoImg },
        { item: "🌱 Setembro", alvo: "🌱 PRIMAVERA", itemImagem: setImg },
        { item: "🎃 Outubro", alvo: "🌱 PRIMAVERA", itemImagem: outImg },
        { item: "🍂 Novembro", alvo: "🌱 PRIMAVERA", itemImagem: novImg },
        { item: "🎄 Dezembro", alvo: "🔥 VERÃO", itemImagem: dezImg },
        { item: "🔥 Junho", alvo: "❄️ INVERNO", itemImagem: junImg },
      ],
    },

    // ==== DESAFIO · Ligar dia → posição ====
    {
      tipo: "ligar",
      titulo: "Desafio Brilha · Ligue o dia à ordem certa",
      instrucao: "Ligue cada dia da semana à sua posição na semana.",
      pares: [
        { a: "🌈 Domingo", b: "1º dia", aImagem: domImg, aQuantidade: 1, bImagem: domImg, bQuantidade: 1 },
        { a: "1️⃣ Segunda", b: "2º dia", aImagem: segImg, aQuantidade: 1, bImagem: segImg, bQuantidade: 2 },
        { a: "3️⃣ Quarta", b: "4º dia", aImagem: quaImg, aQuantidade: 1, bImagem: quaImg, bQuantidade: 4 },
        { a: "🎉 Sábado", b: "7º dia", aImagem: sabImg, aQuantidade: 1, bImagem: sabImg, bQuantidade: 7 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual é o ÚLTIMO período do dia?",
        opcoes: ["🌅 Manhã", "🌙 Noite"],
        correta: 1,
        explicacao: "O dia termina à noite.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: manhaImg, quantidade: 1, rotulo: "Manhã", cor: "#FBBF24" },
            { imagemUrl: noiteImg, quantidade: 1, rotulo: "Noite", cor: "#6366F1" },
          ],
        },
      },
      {
        pergunta: "Quantos dias tem uma semana?",
        opcoes: ["5 dias", "7 dias"],
        correta: 1,
        explicacao: "Domingo, segunda, terça, quarta, quinta, sexta, sábado — 7 dias.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: calendarioImg, quantidade: 1, rotulo: "Semana", cor: "#3B82F6" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Depois de 4️⃣ quinta vem…",
        opcoes: ["3️⃣ Quarta", "5️⃣ Sexta", "🎉 Sábado"],
        correta: 1,
        explicacao: "Ordem: quarta → quinta → SEXTA.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: quiImg, quantidade: 1, rotulo: "Quinta", cor: "#F59E0B" },
            { imagemUrl: sexImg, quantidade: 1, rotulo: "Sexta", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Antes de 🌱 setembro vem…",
        opcoes: ["🌬️ Agosto", "🎃 Outubro", "🎆 Janeiro"],
        correta: 0,
        explicacao: "Agosto (8º) vem antes de Setembro (9º).",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: agoImg, quantidade: 1, rotulo: "Agosto", cor: "#78716C" },
            { imagemUrl: setImg, quantidade: 1, rotulo: "Setembro", cor: "#22C55E" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Qual é a ordem CORRETA dos meses?",
        opcoes: [
          "🌷 Março → 🥚 Abril → 💐 Maio",
          "💐 Maio → 🌷 Março → 🥚 Abril",
          "🥚 Abril → 🌷 Março → 💐 Maio",
        ],
        correta: 0,
        explicacao: "Março (3º) → Abril (4º) → Maio (5º).",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: marImg, quantidade: 1, rotulo: "Março", cor: "#EC4899" },
            { imagemUrl: abrImg, quantidade: 1, rotulo: "Abril", cor: "#F59E0B" },
            { imagemUrl: maiImg, quantidade: 1, rotulo: "Maio", cor: "#22C55E" },
          ],
        },
      },
      {
        pergunta:
          "Brilha faz aniversário no último mês do ano. Que mês é esse?",
        opcoes: ["🎆 Janeiro", "🎄 Dezembro", "🎃 Outubro"],
        correta: 1,
        explicacao: "O ano tem 12 meses. O último é dezembro.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: dezImg, quantidade: 1, rotulo: "Dezembro", cor: "#DC2626" },
            { imagemUrl: festaImg, quantidade: 1, rotulo: "Festa", cor: "#F472B6" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01MA18" },
};

// Referências mantidas para futuras cenas.
void brilhaImg;
void passeioImg;

export default aula;
