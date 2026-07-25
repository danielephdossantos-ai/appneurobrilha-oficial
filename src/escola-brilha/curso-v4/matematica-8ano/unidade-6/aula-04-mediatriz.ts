import type { AulaV4 } from "../../types";

export const aula04_mediatriz: AulaV4 = {
  slug: "u6-04-mediatriz",
  titulo: "Mediatriz e bissetriz",
  iconeTrilha: "📐",
  bncc: ["EF08MA16"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Duas construções clássicas",
    historia:
      "{NOME}, dois lugares geométricos servem pra tudo em geometria: a MEDIATRIZ de um segmento e a BISSETRIZ de um ângulo.",
  },
  momento02_exploracao: {
    instrucao: "Definições.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Definições",
        cabecalhos: ["Nome", "O que é"],
        linhas: [
          { rotulo: "1", valores: ["Mediatriz", "Reta perpendicular a um segmento que passa pelo meio"] },
          { rotulo: "2", valores: ["Bissetriz", "Reta que divide o ângulo em 2 partes iguais"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "O que qualquer ponto da mediatriz tem de especial?",
    pista: "Distância igual às duas pontas do segmento.",
    revelacao: "Mediatriz = lugar geométrico dos pontos equidistantes das extremidades.",
  },
  momento04_explicacao: {
    titulo: "Propriedades",
    etapas: [
      {
        texto: "Mediatriz.",
        exemploReal: {
          contexto: "Segmento AB. Ponto P na mediatriz.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Fato", "Descrição"],
            linhas: [
              { rotulo: "1", valores: ["PA", "= PB"] },
              { rotulo: "2", valores: ["Mediatriz ⊥ AB", "no ponto médio"] },
            ],
          },
          destaque: "PA = PB.",
        },
      },
      {
        texto: "Bissetriz.",
        exemploReal: {
          contexto: "Ângulo ∠AOB. Ponto Q na bissetriz.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Fato", "Descrição"],
            linhas: [
              { rotulo: "1", valores: ["dist(Q, OA)", "= dist(Q, OB)"] },
              { rotulo: "2", valores: ["Bissetriz divide", "∠ ao meio"] },
            ],
          },
          destaque: "Equidistante dos lados.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Se P está na mediatriz de AB e PA = 6cm, quanto vale PB?",
    resposta: "6cm",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["", "Valor"],
      linhas: [
        { rotulo: "PA", valores: ["6"] },
        { rotulo: "PB", valores: ["6"] },
      ],
    },
    passos: ["Mediatriz: PA = PB."],
  },
  momento06_praticaGuiada: {
    enunciado: "Ângulo 80° dividido pela bissetriz. Cada parte:",
    dica: "÷2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "40°" }, { nome: "80°" }, { nome: "160°" }],
      respostaCerta: "40°",
      feedbackAcerto: "🎯",
      feedbackErro: "Dobra pra achar total.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Se PA = 5 e P está na mediatriz de AB, PB =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5" }, { nome: "10" }, { nome: "2,5" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯",
      feedbackErro: "Equidistante.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma cidade quer construir uma escola equidistante de 2 bairros A e B.",
    problema: "Onde deve ficar?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Na mediatriz de AB" }, { nome: "Na bissetriz" }, { nome: "No ponto A"} ],
      respostaCerta: "Na mediatriz de AB",
      feedbackAcerto: "🎯",
      feedbackErro: "Ponto equidistante.",
    },
  },
  momento09_revisao: {
    pontos: ["Mediatriz: perpendicular ao meio; PA=PB.", "Bissetriz: divide ângulo ao meio; equidistante dos lados."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Mediatriz é ⊥ ao segmento?", opcoes: ["Sim", "Não", "Depende"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Perpendicular." },
      { pergunta: "Bissetriz divide ângulo em:", opcoes: ["2 iguais", "3 iguais", "Nada"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2 iguais." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Construtor",
    materiais: ["Régua"],
    passos: ["Desenhe um segmento e sua mediatriz.", "Desenhe um ângulo e sua bissetriz."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
