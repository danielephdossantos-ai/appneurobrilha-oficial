import type { AulaV4 } from "../../types";

/**
 * Aula 7 — "Arredondar (dezena e centena mais próxima)"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: estimar substituindo o número pelo "redondo" mais próximo.
 * Regra do 5: 0–4 arredonda pra baixo · 5–9 arredonda pra cima.
 * BNCC: EF03MA02 (estimar magnitudes).
 */
export const aula07_arredondar: AulaV4 = {
  slug: "07-arredondar",
  titulo: "Arredondar Números",
  iconeTrilha: "🎯",
  bncc: ["EF03MA02"],
  duracaoMin: 20,
  metodologias: ["skemp", "rme"],

  momento01_motivacao: {
    titulo: "Quase 100 ou já passou?",
    historia:
      "A Prefeita quer estimar rapidamente quanto vai gastar na compra de 198 cadeiras. Você diz: 'Uns 200 reais cada'. Ela sorri: 'Exato! Arredondar é falar o número redondo MAIS PERTO — pra estimar sem precisar da conta exata.'",
  },

  momento02_exploracao: {
    instrucao: "Pense: 47 está mais perto de 40 ou de 50?",
    cenas: [
      { tipo: "texto", texto: "47 → 3 passos até 50, mas 7 passos desde 40." },
      { tipo: "texto", texto: "Está MAIS PERTO de 50.", destaque: true },
      { tipo: "texto", texto: "Existe uma regra rápida pra decidir isso." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como decidir se 47 arredonda pra 40 ou pra 50?",
    pista: "Olhe o dígito da UNIDADE. Se for 5 ou mais, sobe. Se for 4 ou menos, desce.",
    revelacao:
      "REGRA DO 5: 0–4 arredonda pra BAIXO; 5–9 arredonda pra CIMA. Serve pra arredondar dezena e centena.",
  },

  momento04_explicacao: {
    titulo: "Arredondar pra dezena OU pra centena",
    etapas: [
      {
        texto:
          "PRA DEZENA mais próxima: olhe o dígito da UNIDADE. Se 0-4 desce; se 5-9 sobe.",
        exemploReal: {
          contexto:
            "43 alunos foram à excursão. Arredondando pra dezena mais próxima: unidade é 3 → desce → 40.",
          casasValor: {
            numero: 43,
            extenso: "quarenta e três",
            mostrarDecomposicao: true,
          },
          destaque: "43 ≈ 40 (unidade 3 < 5).",
        },
      },
      {
        texto:
          "Quando a unidade é 5 ou mais, arredonda pra CIMA.",
        exemploReal: {
          contexto:
            "47 crianças no recreio. Unidade 7 → sobe → 50.",
          casasValor: {
            numero: 47,
            extenso: "quarenta e sete",
            mostrarDecomposicao: true,
          },
          destaque: "47 ≈ 50 (unidade 7 ≥ 5).",
        },
      },
      {
        texto:
          "PRA CENTENA mais próxima: olhe o dígito da DEZENA. Mesma regra do 5.",
        exemploReal: {
          contexto:
            "A biblioteca tem 270 livros. Dezena é 7 → sobe → 300.",
          casasValor: {
            numero: 270,
            extenso: "duzentos e setenta",
            mostrarDecomposicao: true,
          },
          destaque: "270 ≈ 300 (dezena 7 ≥ 5).",
        },
      },
      {
        texto:
          "Se a dezena é exatamente 5 (com unidade 0), a regra do 5 diz: sobe.",
        exemploReal: {
          contexto:
            "Uma escola tem 250 estudantes. Arredondando pra centena: dezena é 5 → sobe → 300.",
          casasValor: {
            numero: 250,
            extenso: "duzentos e cinquenta",
            mostrarDecomposicao: true,
          },
          destaque: "250 ≈ 300.",
        },
      },
      {
        texto:
          "Arredondar serve pra ESTIMAR contas rápido. Trocamos os dois números por redondos e somamos de cabeça.",
        exemploReal: {
          contexto:
            "Estimar 197 + 302. Arredondando: 197 ≈ 200 e 302 ≈ 300. Fica 200 + 300 = 500 (real é 499, quase igual).",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [200, 300],
            resultado: 500,
            passos: [
              { coluna: "U", fala: "Unidades: 0 + 0 = 0.", digito: 0 },
              { coluna: "D", fala: "Dezenas: 0 + 0 = 0.", digito: 0 },
              { coluna: "C", fala: "Centenas: 2 + 3 = 5.", digito: 5 },
            ],
          },
          destaque: "Estimativa: 197 + 302 ≈ 500. Perfeito pra confirmar contas grandes.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha arredonda 68 pra dezena mais próxima:",
    passos: [
      "Olho a UNIDADE: 8.",
      "8 é 5 ou mais? SIM → arredonda pra CIMA.",
      "Dezena de baixo: 60. Dezena de cima: 70.",
      "68 arredondado ≈ 70. 🎯",
    ],
    resposta: "68 ≈ 70",
    casasValor: {
      numero: 68,
      mostrarDecomposicao: true,
      extenso: "sessenta e oito",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Juntos! Arredonde 34 pra dezena mais próxima.",
    dica: "Unidade é 4 (menor que 5) → desce.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "34 arredondado é:",
      opcoes: [{ nome: "30" }, { nome: "40" }, { nome: "34" }],
      respostaCerta: "30",
      feedbackAcerto: "🎉 Unidade 4 desce → 30.",
      feedbackErro:
        "Regra do 5: 4 < 5 → arredonda pra BAIXO. 34 ≈ 30.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! Arredonde 285 pra CENTENA mais próxima.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "285 ≈",
      opcoes: [{ nome: "200" }, { nome: "300" }, { nome: "290" }],
      respostaCerta: "300",
      feedbackAcerto: "🎯 Dezena 8 (≥ 5) → sobe → 300.",
      feedbackErro:
        "Pra centena, olha a DEZENA (8). 8 ≥ 5 → sobe → 300.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita quer ESTIMAR quanto vai gastar em duas compras: 198 reais em cadeiras + 297 reais em mesas.",
    problema: "Qual estimativa é a melhor (rápida e próxima do real)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Estimativa mais adequada:",
      opcoes: [
        { nome: "100 + 300 = 400" },
        { nome: "200 + 300 = 500" },
        { nome: "150 + 250 = 400" },
      ],
      respostaCerta: "200 + 300 = 500",
      feedbackAcerto:
        "🎯 Isso! 198 arredonda pra 200 (dezena 9) e 297 pra 300 (dezena 9). Estimativa 500 (real 495).",
      feedbackErro:
        "198 → 200 (dezena 9 ≥ 5). 297 → 300 (dezena 9 ≥ 5). Estimativa boa: 500.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Arredondar = trocar por número REDONDO mais próximo.",
      "Regra do 5: 0-4 desce; 5-9 sobe.",
      "Dezena: olha a UNIDADE. Centena: olha a DEZENA.",
      "Serve pra ESTIMAR contas rapidamente.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "452 arredondado pra centena:",
      opcoes: [{ nome: "400" }, { nome: "500" }, { nome: "450" }],
      respostaCerta: "500",
      feedbackAcerto: "🎉 Dezena 5 → sobe → 500.",
      feedbackErro: "Pra centena, dezena decide. 5 ≥ 5 → sobe → 500.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "72 pra dezena mais próxima:",
        opcoes: ["70", "80", "72"],
        correta: 0,
        feedbackAcerto: "🎉 Unidade 2 → desce → 70.",
        feedbackErro: "Unidade 2 (< 5) desce → 70.",
      },
      {
        pergunta: "672 pra centena mais próxima:",
        opcoes: ["600", "700", "650"],
        correta: 1,
        feedbackAcerto: "🎉 Dezena 7 (≥ 5) → sobe → 700.",
        feedbackErro: "Pra centena, olha DEZENA. 7 ≥ 5 → sobe → 700.",
      },
      {
        pergunta: "Estime 199 + 402:",
        opcoes: ["200 + 400 = 600", "100 + 400 = 500", "300 + 500 = 800"],
        correta: 0,
        feedbackAcerto: "🎉 199 ≈ 200, 402 ≈ 400. Estimativa 600 (real 601).",
        feedbackErro: "199 → 200 e 402 → 400. 200 + 400 = 600.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Estimar no Supermercado",
    materiais: ["Recibo de compras", "Lápis", "Papel"],
    passos: [
      "Pegue um recibo com 3-5 preços.",
      "Arredonde cada preço pra centena mais próxima.",
      "Some as estimativas — essa é a estimativa do total.",
      "Compare com o total real. Quanto ficou perto?",
    ],
    registro: "📸 Foto do recibo com as estimativas ao lado.",
  },

  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};
