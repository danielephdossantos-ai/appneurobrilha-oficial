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
      "{NOME}, cientistas ARREDONDAM: nem sempre a resposta exata importa. O que importa é a ORDEM de grandeza — e uma regra CLARA pra decidir pra onde vai.",
  },

  momento02_exploracao: {
    instrucao: "A reta ajuda a VER pra onde o número está mais perto.",
    cenas: [
      { tipo: "texto", texto: "Regra: <5 arredonda pra BAIXO · ≥5 arredonda pra CIMA.", destaque: true },
      {
        tipo: "retaNumerica",
        min: 3400,
        max: 3500,
        passo: 10,
        destacar: [
          { valor: 3400, rotulo: "3.400" },
          { valor: 3450, rotulo: "3.450 (meio)", cor: "#f59e0b" },
          { valor: 3478, rotulo: "3.478", cor: "#ef4444" },
          { valor: 3500, rotulo: "3.500" },
        ],
        legenda: "3.478 está DEPOIS do meio (3.450) → mais perto de 3.500.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Arredonde 3.478 para a centena mais próxima.",
    pista: "Casa das centenas = 4. Dígito à direita (dezena) = 7.",
    revelacao: "7 ≥ 5 → arredonda pra cima → 3.500.",
  },

  momento04_explicacao: {
    titulo: "Passo a passo com a reta",
    etapas: [
      {
        texto: "Arredondar 12.463 para o MILHAR: olhe o dígito à direita da casa dos milhares (a centena = 4).",
        exemploReal: {
          contexto: "12.463 → casa alvo = milhar (2). Vizinho da direita = 4.",
          visualMat: {
            tipo: "retaNumerica",
            min: 12000,
            max: 13000,
            passo: 100,
            destacar: [
              { valor: 12000, rotulo: "12.000" },
              { valor: 12500, rotulo: "12.500 (meio)", cor: "#f59e0b" },
              { valor: 12463, rotulo: "12.463", cor: "#ef4444" },
              { valor: 13000, rotulo: "13.000" },
            ],
          },
          destaque: "12.463 está ANTES do meio → 12.000. (4 < 5 → pra baixo)",
        },
      },
      {
        texto: "Arredondar 12.563 para o milhar → agora 5 ≥ 5 → sobe.",
        exemploReal: {
          contexto: "12.563 → 5 ≥ 5.",
          visualMat: {
            tipo: "retaNumerica",
            min: 12000,
            max: 13000,
            passo: 100,
            destacar: [
              { valor: 12000, rotulo: "12.000" },
              { valor: 12500, rotulo: "12.500 (meio)", cor: "#f59e0b" },
              { valor: 12563, rotulo: "12.563", cor: "#10b981" },
              { valor: 13000, rotulo: "13.000" },
            ],
          },
          destaque: "Passou do meio → 13.000.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Arredonde 27.849 para o milhar.",
    resposta: "28.000",
    visualMat: {
      tipo: "retaNumerica",
      min: 27000,
      max: 28000,
      passo: 100,
      destacar: [
        { valor: 27000, rotulo: "27.000" },
        { valor: 27500, rotulo: "27.500 (meio)", cor: "#f59e0b" },
        { valor: 27849, rotulo: "27.849", cor: "#10b981" },
        { valor: 28000, rotulo: "28.000" },
      ],
      legenda: "27.849 passou do meio (27.500) → sobe para 28.000.",
    },
    passos: [
      "Casa alvo (milhar) = 7. Vizinho da direita (centena) = 8.",
      "8 ≥ 5 → arredonda pra CIMA.",
      "7 vira 8 e o resto zera: 28.000.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Arredonde 4.320 para a centena.",
    dica: "Olhe o dígito à direita da centena (a dezena = 2).",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.300" }, { nome: "4.400" }, { nome: "4.000" }],
      respostaCerta: "4.300",
      feedbackAcerto: "🎯 2 < 5 → pra baixo.",
      feedbackErro: "Dezena = 2 < 5 → arredonda pra baixo.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Arredonde 1.987.654 para o milhão.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2.000.000" }, { nome: "1.000.000" }, { nome: "1.900.000" }],
      respostaCerta: "2.000.000",
      feedbackAcerto: "🎯 CM = 9 → sobe.",
      feedbackErro: "9 ≥ 5 → sobe pro próximo milhão.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um estádio tem 47.318 pessoas. A imprensa quer publicar manchete arredondada.",
    problema: "Arredonde para a DEZENA DE MILHAR mais próxima.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Manchete:",
      opcoes: [{ nome: "50.000" }, { nome: "40.000" }, { nome: "48.000" }],
      respostaCerta: "50.000",
      feedbackAcerto: "🎯 Vizinho da direita (UM) = 7 ≥ 5.",
      feedbackErro: "4 (DM) sobe pra 5. O resto zera.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Escolha a CASA de arredondamento.",
      "Olhe SÓ o dígito imediatamente à direita.",
      "<5: pra baixo · ≥5: pra cima · zere o resto.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "347 → centena:", opcoes: ["300", "400", "350"], correta: 0, feedbackAcerto: "🎉 4 < 5.", feedbackErro: "Dezena = 4 < 5." },
      { pergunta: "2.750 → milhar:", opcoes: ["3.000", "2.000", "2.700"], correta: 0, feedbackAcerto: "🎉 7 ≥ 5.", feedbackErro: "Centena = 7 ≥ 5." },
      { pergunta: "56.499 → milhar:", opcoes: ["56.000", "57.000", "60.000"], correta: 0, feedbackAcerto: "🎉 4 < 5.", feedbackErro: "Centena = 4 < 5." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Manchetes arredondadas",
    materiais: ["Jornal, celular"],
    passos: [
      "Anote 3 números exatos do dia (preço, distância, quantidade).",
      "Arredonde cada um pra uma casa útil.",
      "Explique por que escolheu essa casa.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
