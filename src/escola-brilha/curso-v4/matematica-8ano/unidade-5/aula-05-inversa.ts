import type { AulaV4 } from "../../types";

export const aula05_inversa: AulaV4 = {
  slug: "u5-05-inversa",
  titulo: "Grandezas inversamente proporcionais",
  iconeTrilha: "↕️",
  bncc: ["EF08MA13"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Quando um sobe, o outro desce",
    historia:
      "{NOME}, se 2 pessoas fazem uma tarefa em 6h, 4 pessoas fazem em MENOS tempo. É inversa.",
  },
  momento02_exploracao: {
    instrucao: "Observe.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Pessoas × tempo",
        cabecalhos: ["Pessoas", "Horas", "Produto"],
        linhas: [
          { rotulo: "1", valores: ["2", "6", "12"] },
          { rotulo: "2", valores: ["3", "4", "12"] },
          { rotulo: "3", valores: ["4", "3", "12"] },
        ],
      },
      { tipo: "texto", texto: "Produto constante = inversa.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como resolver?",
    pista: "INVERTA uma das colunas antes do cruzado. Ou use produto = produto.",
    revelacao: "a·b = c·d.",
  },
  momento04_explicacao: {
    titulo: "Regra de três inversa",
    etapas: [
      {
        texto: "Multiplique em LINHA.",
        exemploReal: {
          contexto: "3 pintores → 10 dias. 5 pintores → ? dias.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Pint.", "Dias"],
            linhas: [
              { rotulo: "1", valores: ["3", "10"] },
              { rotulo: "2", valores: ["5", "x"] },
            ],
          },
          destaque: "3·10 = 5·x → x = 6 dias.",
        },
      },
      {
        texto: "Sinal certo — inversa.",
        exemploReal: {
          contexto: "Mais pintores → menos dias.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["↑↓", "Direção"],
            linhas: [
              { rotulo: "↑", valores: ["pintores sobem", "dias descem"] },
              { rotulo: "↓", valores: ["pintores descem", "dias sobem"] },
            ],
          },
          destaque: "Sinais opostos = inversa.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "4 máquinas fazem em 6h. 8 máquinas em:",
    resposta: "3h",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Máq", "h"],
      linhas: [
        { rotulo: "1", valores: ["4", "6"] },
        { rotulo: "2", valores: ["8", "x"] },
      ],
    },
    passos: ["4·6 = 8·x.", "24 = 8x.", "x = 3."],
  },
  momento06_praticaGuiada: {
    enunciado: "2 op → 12h. 3 op → ?",
    dica: "Produto = produto.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "h =",
      opcoes: [{ nome: "8h" }, { nome: "6h" }, { nome: "18h" }],
      respostaCerta: "8h",
      feedbackAcerto: "🎯 2·12=3·x.",
      feedbackErro: "24/3.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "5 pedreiros levam 20 dias. 10 pedreiros:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "dias =",
      opcoes: [{ nome: "10" }, { nome: "40" }, { nome: "25" }],
      respostaCerta: "10",
      feedbackAcerto: "🎯",
      feedbackErro: "5·20=10·x.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um carro a 60 km/h leva 4h. Se aumenta pra 80 km/h:",
    problema: "Tempo:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "h =",
      opcoes: [{ nome: "3h" }, { nome: "3,5h" }, { nome: "2h" }],
      respostaCerta: "3h",
      feedbackAcerto: "🎯 60·4=80·x.",
      feedbackErro: "Velocidade × tempo = constante.",
    },
  },
  momento09_revisao: {
    pontos: ["Produto constante.", "Sobe uma → desce a outra.", "Multiplica em linha."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2·10 = 4·x. x=", opcoes: ["5", "8", "20"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷4." },
      { pergunta: "3 op 8h. 6 op ?", opcoes: ["4h", "16h", "6h"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "24/6." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Tempo e velocidade",
    materiais: ["Papel"],
    passos: ["Anote 3 situações de inversa do seu dia.", "Calcule."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
