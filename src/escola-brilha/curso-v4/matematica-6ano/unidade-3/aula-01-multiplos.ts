import type { AulaV4 } from "../../types";

export const aula01_multiplos: AulaV4 = {
  slug: "u3-01-multiplos",
  titulo: "Múltiplos — a família da multiplicação",
  iconeTrilha: "🔢",
  bncc: ["EF06MA04"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Uma família infinita",
    historia: "{NOME}, todo número tem uma FAMÍLIA infinita — seus múltiplos. Basta multiplicar por 1, 2, 3, 4...",
  },

  momento02_exploracao: {
    instrucao: "Múltiplo = resultado de uma multiplicação por natural.",
    cenas: [
      { tipo: "texto", texto: "Múltiplos de 3: 0, 3, 6, 9, 12, 15, 18, 21, 24… (infinitos!)", destaque: true },
      { tipo: "tabuada", fator: 3, ate: 10, titulo: "Tabuada do 3 = múltiplos do 3" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como saber se um número é múltiplo de 5?",
    pista: "Olhe pra tabuada do 5.",
    revelacao: "Termina em 0 ou 5. Se não termina, NÃO é múltiplo.",
  },

  momento04_explicacao: {
    titulo: "Reconhecer múltiplos",
    etapas: [
      {
        texto: "Múltiplos de um número aparecem 'de N em N' na reta.",
        exemploReal: {
          contexto: "Múltiplos de 4 até 20",
          visualMat: {
            tipo: "retaNumerica",
            min: 0,
            max: 20,
            passo: 1,
            destacar: [
              { valor: 0, rotulo: "0", cor: "#7c3aed" },
              { valor: 4, rotulo: "4", cor: "#7c3aed" },
              { valor: 8, rotulo: "8", cor: "#7c3aed" },
              { valor: 12, rotulo: "12", cor: "#7c3aed" },
              { valor: 16, rotulo: "16", cor: "#7c3aed" },
              { valor: 20, rotulo: "20", cor: "#7c3aed" },
            ],
          },
          destaque: "De 4 em 4: 0, 4, 8, 12, 16, 20…",
        },
      },
      {
        texto: "Todo número é múltiplo de 1 e dele mesmo.",
        exemploReal: {
          contexto: "7 é múltiplo de 1 (7×1) e de 7 (7×1).",
          destaque: "1 é múltiplo comum de TODOS os números.",
        },
      },
      {
        texto: "0 é múltiplo de qualquer número (qualquer × 0 = 0).",
        exemploReal: {
          contexto: "0 é múltiplo de 3, de 4, de 100…",
          destaque: "Mas o primeiro múltiplo NÃO nulo é o próprio número.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Liste os 5 primeiros múltiplos NÃO nulos de 6.",
    resposta: "6, 12, 18, 24, 30",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["6 × n", "Múltiplo"],
      linhas: [
        { rotulo: "6×1", valores: ["6 × 1", "6"] },
        { rotulo: "6×2", valores: ["6 × 2", "12"] },
        { rotulo: "6×3", valores: ["6 × 3", "18"] },
        { rotulo: "6×4", valores: ["6 × 4", "24"] },
        { rotulo: "6×5", valores: ["6 × 5", "30"] },
      ],
    },
    passos: ["Multiplique 6 por 1, 2, 3, 4, 5."],
  },

  momento06_praticaGuiada: {
    enunciado: "24 é múltiplo de 4?",
    dica: "24 ÷ 4 dá resto zero?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Sim" }, { nome: "Não" }],
      respostaCerta: "Sim",
      feedbackAcerto: "🎯 24 = 4 × 6.",
      feedbackErro: "24 ÷ 4 = 6, exato.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Qual desses é múltiplo de 7?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "49" }, { nome: "50" }, { nome: "51" }],
      respostaCerta: "49",
      feedbackAcerto: "🎯 49 = 7 × 7.",
      feedbackErro: "7 × 7 = 49.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma van sai a cada 15 min a partir das 8h.",
    problema: "Quando sai a 4ª van?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "9h" }, { nome: "8h45" }, { nome: "9h15" }],
      respostaCerta: "9h",
      feedbackAcerto: "🎯 8h + 4×15min = 8h + 60min = 9h.",
      feedbackErro: "4 múltiplos de 15 = 60 min.",
    },
  },

  momento09_revisao: {
    pontos: ["Múltiplo = número × natural.", "Múltiplos são infinitos.", "0 é múltiplo de tudo."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Múltiplo de 5?", opcoes: ["35", "37", "44"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Termina em 0 ou 5." },
      { pergunta: "3º múltiplo positivo de 8:", opcoes: ["24", "16", "32"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "8×3 = 24." },
      { pergunta: "0 é múltiplo de 9?", opcoes: ["Sim", "Não"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "9×0 = 0." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça-múltiplos",
    materiais: ["Relógio, calendário"],
    passos: ["Liste 3 coisas em casa que aparecem 'de N em N' (dias, horários).", "Explique de que número são múltiplos."],
    registro: "📸 Foto da lista.",
  },
  recompensa: { xp: 140, moedas: 70 },
};
