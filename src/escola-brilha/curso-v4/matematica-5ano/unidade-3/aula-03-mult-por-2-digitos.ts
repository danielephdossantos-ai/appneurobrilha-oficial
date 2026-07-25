import type { AulaV4 } from "../../types";

export const aula03_multPor2Digitos: AulaV4 = {
  slug: "u3-03-mult-por-2-digitos",
  titulo: "Multiplicar por 2 dígitos",
  iconeTrilha: "✖️",
  bncc: ["EF05MA07"],
  duracaoMin: 24,
  metodologias: ["skemp", "cpa"],

  momento01_motivacao: {
    titulo: "Duas parciais, uma soma",
    historia: "{NOME}, quando multiplicamos por 2 dígitos, aparecem 2 LINHAS PARCIAIS que se somam no fim.",
  },
  momento02_exploracao: {
    instrucao: "Uma linha por dígito de baixo.",
    cenas: [
      { tipo: "texto", texto: "1ª linha: multiplica pela UNIDADE do de baixo.", destaque: true },
      { tipo: "texto", texto: "2ª linha: multiplica pela DEZENA e desloca UMA CASA pra esquerda (ou põe um 0)." },
      { tipo: "texto", texto: "Some as duas linhas." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "347 × 24?",
    pista: "347 × 4 e 347 × 20, depois some.",
    revelacao: "347 × 4 = 1.388. 347 × 20 = 6.940. 1.388 + 6.940 = 8.328.",
  },
  momento04_explicacao: {
    titulo: "Passo a passo do algoritmo de 2 dígitos",
    etapas: [
      { texto: "Arme: 347 em cima, 24 embaixo (D | U alinhados)." },
      { texto: "1ª linha: 347 × 4 = 1.388. Escreva alinhado à direita." },
      { texto: "2ª linha: 347 × 2 = 694 e coloque um 0 no fim → 6.940." },
      { texto: "Some: 1.388 + 6.940 = 8.328." },
    ],
  },
  momento05_modelagem: {
    enunciado: "215 × 32.",
    resposta: "6.880",
    passos: ["215 × 2 = 430.", "215 × 3 = 645 → 6.450.", "430 + 6.450 = 6.880."],
    contaPassoAPasso: {
      operacao: "soma",
      operandos: [430, 6450],
      resultado: 6880,
      passos: [
        { coluna: "U", fala: "0 + 0 = 0.", digito: 0 },
        { coluna: "D", fala: "3 + 5 = 8.", digito: 8 },
        { coluna: "C", fala: "4 + 4 = 8.", digito: 8 },
        { coluna: "UM", fala: "0 + 6 = 6.", digito: 6 },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 128 × 45.",
    dica: "128 × 5 e 128 × 40.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "5.760" }, { nome: "5.660" }, { nome: "5.860" }],
      respostaCerta: "5.760",
      feedbackAcerto: "🎯 640 + 5.120 = 5.760.",
      feedbackErro: "128×5=640, 128×40=5.120, soma=5.760.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 236 × 18.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "4.248" }, { nome: "4.148" }, { nome: "4.348" }],
      respostaCerta: "4.248",
      feedbackAcerto: "🎯",
      feedbackErro: "236×8=1.888, 236×10=2.360, soma=4.248.",
    },
  },
  momento08_aplicacao: {
    contexto: "Ônibus com 42 lugares faz 25 viagens lotadas.",
    problema: "Passageiros no total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1.050" }, { nome: "1.020" }, { nome: "1.150" }],
      respostaCerta: "1.050",
      feedbackAcerto: "🎯 42×25=1.050.",
      feedbackErro: "42×5=210, 42×20=840 → 1.050.",
    },
  },
  momento09_revisao: {
    pontos: ["1ª linha pela unidade.", "2ª linha pela dezena — desloca uma casa.", "Some as parciais no fim."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "134 × 23 = ?", opcoes: ["3.082", "2.982", "3.182"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3.082." },
      { pergunta: "218 × 15 = ?", opcoes: ["3.270", "3.170", "3.370"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3.270." },
      { pergunta: "56 × 47 = ?", opcoes: ["2.632", "2.532", "2.732"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2.632." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Dobradinha de dígitos",
    materiais: ["Papel"],
    passos: ["Escolha um número de 3 dígitos e um de 2.", "Multiplique com as duas linhas parciais."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 85 },
};
