import type { AulaV4 } from "../../types";

export const aula02_angulos: AulaV4 = {
  slug: "u7-02-angulos",
  titulo: "Ângulos — reto, agudo e obtuso",
  iconeTrilha: "📐",
  bncc: ["EF04MA19"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Cantos das figuras",
    historia:
      "{NOME}, ângulo é a abertura entre dois lados. Ângulo RETO parece um L (90°). AGUDO é menor (bico fino). OBTUSO é maior (bem aberto).",
  },
  momento02_exploracao: {
    instrucao: "Compare.",
    cenas: [
      { tipo: "texto", texto: "Reto = 90° (canto de folha).", destaque: true },
      { tipo: "texto", texto: "Agudo < 90° (letra V bem fechada)." },
      { tipo: "texto", texto: "Obtuso > 90° (leque bem aberto)." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Onde tem ângulo reto em casa?",
    pista: "Olhe os cantos.",
    revelacao: "Portas, janelas, folhas de caderno, mesas — quase tudo retangular tem 4 ângulos retos.",
  },
  momento04_explicacao: {
    titulo: "Reconhecer",
    etapas: [
      {
        texto: "Quadrado e retângulo: 4 ângulos retos.",
        exemploReal: {
          contexto: "Azulejo.",
          destaque: "Todos de 90°.",
          visualMat: { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, mostrarAngulos: true },
        },
      },
      {
        texto: "Triângulos podem ter ângulo reto, agudos ou obtusos.",
        exemploReal: {
          contexto: "Esquadro.",
          destaque: "Um triângulo retângulo tem um ângulo de 90°.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Ângulo do canto da porta.",
    passos: ["Canto de porta é reto.", "Vale 90°."],
    resposta: "Reto (90°)",
  },
  momento06_praticaGuiada: {
    enunciado: "Ângulo entre os ponteiros do relógio às 3 h.",
    dica: "Um ponteiro no 12, outro no 3.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Reto" }, { nome: "Agudo" }, { nome: "Obtuso" }],
      respostaCerta: "Reto",
      feedbackAcerto: "🎯 Reto.",
      feedbackErro: "3 h forma um L: reto.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Um V bem fechado é:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Agudo" }, { nome: "Obtuso" }, { nome: "Reto" }],
      respostaCerta: "Agudo",
      feedbackAcerto: "🎯 Agudo.",
      feedbackErro: "Fechado = <90°.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um leque bem aberto forma um ângulo maior que 90°.",
    problema: "Esse ângulo é:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Obtuso" }, { nome: "Agudo" }, { nome: "Reto" }],
      respostaCerta: "Obtuso",
      feedbackAcerto: "🎯 Obtuso.",
      feedbackErro: "Maior que 90° = obtuso.",
    },
  },
  momento09_revisao: {
    pontos: ["Reto=90°, Agudo<90°, Obtuso>90°."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Ângulo de 90° chama-se:", opcoes: ["Reto", "Agudo", "Obtuso"], correta: 0, feedbackAcerto: "🎉 Reto.", feedbackErro: "90°=reto." },
      { pergunta: "Menor que 90°:", opcoes: ["Agudo", "Reto", "Obtuso"], correta: 0, feedbackAcerto: "🎉 Agudo.", feedbackErro: "<90°." },
      { pergunta: "Quantos ângulos retos no retângulo?", opcoes: ["4", "2", "3"], correta: 0, feedbackAcerto: "🎉 4.", feedbackErro: "Todos os 4 cantos." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caça aos Ângulos",
    materiais: ["Papel", "Caderno"],
    passos: ["Ache 3 ângulos retos, 3 agudos e 3 obtusos em casa.", "Anote onde encontrou."],
    registro: "📸 Foto da lista.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
