import type { AulaV4 } from "../../types";

export const aula03_arredondar: AulaV4 = {
  slug: "u1-03-arredondar",
  titulo: "Arredondar e estimar",
  iconeTrilha: "🎯",
  bncc: ["EF06MA02"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Estimativa científica",
    historia:
      "{NOME}, cientistas ARREDONDAM: a resposta exata nem sempre importa. O que importa é a ORDEM de grandeza — e uma regra clara pra decidir pra onde vai.",
  },
  momento02_exploracao: {
    instrucao: "Regra padrão do arredondamento.",
    cenas: [
      { tipo: "texto", texto: "Escolha a casa: dezena, centena, milhar, milhão…", destaque: true },
      { tipo: "texto", texto: "Olhe o dígito IMEDIATAMENTE à direita: <5 arredonda pra baixo · ≥5 arredonda pra cima." },
      { tipo: "texto", texto: "Zere os dígitos à direita da casa escolhida." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Arredonde 3.478 para a centena mais próxima.",
    pista: "Casa das centenas = 4. Dígito à direita = 7.",
    revelacao: "7 ≥ 5 → arredonda pra cima → 3.500.",
  },
  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      { texto: "Arredondar 12.463 para o milhar → olhar dígito à direita da casa dos milhares (4). 4<5 → 12.000." },
      { texto: "Arredondar 12.563 para o milhar → 5≥5 → 13.000." },
      { texto: "Arredondar 850 para a centena → 5≥5 → 900." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Arredonde 27.849 para o milhar.",
    resposta: "28.000",
    passos: [
      "Casa dos milhares = 7. Dígito à direita = 8.",
      "8 ≥ 5 → arredonda pra cima.",
      "7 → 8. Zera o resto: 28.000.",
    ],
  },
  momento06_praticaGuiada: {
    enunciado: "Arredonde 4.320 para a centena.",
    dica: "Olhe o dígito à direita da centena (2).",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.300" }, { nome: "4.400" }, { nome: "4.000" }],
      respostaCerta: "4.300",
      feedbackAcerto: "🎯 2<5.",
      feedbackErro: "2<5 → arredonda pra baixo.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Arredonde 1.987.654 para o milhão.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2.000.000" }, { nome: "1.000.000" }, { nome: "1.900.000" }],
      respostaCerta: "2.000.000",
      feedbackAcerto: "🎯 Dígito à direita do milhão é 9.",
      feedbackErro: "9≥5 → sobe.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um estádio tem 47.318 pessoas. A imprensa quer publicar uma manchete.",
    problema: "Arredonde para a dezena de milhar mais próxima.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "50.000" }, { nome: "40.000" }, { nome: "48.000" }],
      respostaCerta: "50.000",
      feedbackAcerto: "🎯 Dígito à direita da dezena de milhar é 7. 7≥5.",
      feedbackErro: "7≥5 → 4→5, resto zera.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Escolha a casa de arredondamento.",
      "Olhe SÓ o dígito imediatamente à direita.",
      "<5: pra baixo · ≥5: pra cima · zere o resto.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "347 → centena:",
        opcoes: ["300", "400", "350"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "4<5.",
      },
      {
        pergunta: "2.750 → milhar:",
        opcoes: ["3.000", "2.000", "2.700"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "7≥5.",
      },
      {
        pergunta: "56.499 → milhar:",
        opcoes: ["56.000", "57.000", "60.000"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "4<5.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Manchetes arredondadas",
    materiais: ["Jornal, celular"],
    passos: [
      "Anote 3 números exatos do dia (preço, distância, quantidade).",
      "Arredonde cada um pra uma casa útil.",
      "Explique por quê a casa que escolheu.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
