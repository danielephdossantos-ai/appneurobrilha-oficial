import type { AulaV4 } from "../../types";

/**
 * Aula 5 · U1 — "Comparar números até 10.000"
 * BNCC: EF04MA01, EF04MA02.
 */
export const aula05_compararAte10000: AulaV4 = {
  slug: "u1-05-comparar-ate-10000",
  titulo: "Comparar números até 10.000",
  iconeTrilha: "⚖️",
  bncc: ["EF04MA01", "EF04MA02"],
  duracaoMin: 18,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Qual é maior?",
    historia:
      "{NOME}, dois vilarejos discutem quem é maior: Serra Alta (3.874 pessoas) ou Vale Verde (3.879 pessoas). Números tão parecidos! Como decidir sem contar tudo de novo?",
  },

  momento02_exploracao: {
    instrucao: "Comparar é olhar CASA por casa, da esquerda pra direita.",
    cenas: [
      { tipo: "texto", texto: "Começa pelo MILHAR. Quem tem UM maior, é maior.", destaque: true },
      { tipo: "texto", texto: "Se o UM é igual, vai pra centena. Depois dezena. Depois unidade." },
      { tipo: "texto", texto: "Ex.: 3.874 vs 3.879 → UM=3=3, C=8=8, D=7=7, U=4<9. Logo 3.879 > 3.874.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que comparar da esquerda pra direita é mais rápido?",
    pista: "A casa da esquerda vale mais.",
    revelacao:
      "Se um número tem UM maior, ele JÁ é maior — não precisa nem olhar o resto. A esquerda pesa mais.",
  },

  momento04_explicacao: {
    titulo: "Sinais > (maior), < (menor) e = (igual)",
    etapas: [
      {
        texto: "> aponta pro MAIOR. < aponta pro menor. = quando são iguais.",
        exemploReal: {
          contexto: "Compare 4.500 e 4.050:",
          casasValor: { numero: 4500, extenso: "quatro mil e quinhentos", mostrarDecomposicao: true },
          destaque: "UM=4=4. C=5>0. Logo 4.500 > 4.050.",
        },
      },
      {
        texto: "Se as duas primeiras casas coincidem, vá pra terceira.",
        exemploReal: {
          contexto: "6.732 e 6.735:",
          casasValor: { numero: 6735, extenso: "seis mil, setecentos e trinta e cinco", mostrarDecomposicao: true },
          destaque: "UM=6=6. C=7=7. D=3=3. U=2<5. Logo 6.735 > 6.732.",
        },
      },
      {
        texto: "Quando o número tem menos casas, é MENOR.",
        exemploReal: {
          contexto: "998 vs 1.002:",
          casasValor: { numero: 1002, extenso: "mil e dois", mostrarDecomposicao: true },
          destaque: "998 tem 3 casas, 1.002 tem 4. Logo 998 < 1.002.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Compare 5.204 e 5.240.",
    resposta: "5.204 < 5.240",
    casasValor: { numero: 5240, mostrarDecomposicao: true, extenso: "cinco mil, duzentos e quarenta" },
    passos: [
      "UM: 5 = 5.",
      "C: 2 = 2.",
      "D: 0 < 4. Já resolveu: 5.204 é menor.",
      "5.204 < 5.240.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Qual é maior: 7.310 ou 7.301?",
    dica: "Olhe UM, C, D…",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o MAIOR:",
      opcoes: [{ nome: "7.310" }, { nome: "7.301" }],
      respostaCerta: "7.310",
      feedbackAcerto: "🎯 UM=7=7, C=3=3, D=1>0 → 7.310 é maior.",
      feedbackErro: "Casa da dezena: 1 (em 7.310) contra 0 (em 7.301). 7.310 vence.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Complete: 4.892 __ 4.928.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Sinal certo:",
      opcoes: [{ nome: ">" }, { nome: "<" }, { nome: "=" }],
      respostaCerta: "<",
      feedbackAcerto: "🎯 UM=4=4, C=8<9 → 4.892 < 4.928.",
      feedbackErro: "Centena: 8 (em 4.892) < 9 (em 4.928). O sinal < aponta para o menor.",
    },
  },

  momento08_aplicacao: {
    contexto: "A prefeita compara arrecadação de dois meses: 6.204 e 6.024 moedas.",
    problema: "Qual mês arrecadou MAIS?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6.204" }, { nome: "6.024" }],
      respostaCerta: "6.204",
      feedbackAcerto: "🎯 UM=6=6, C=2>0 → 6.204 é maior.",
      feedbackErro: "Centena decide: 2 > 0. 6.204 é maior.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Compare CASA por casa, da esquerda pra direita.",
      "Quem tem mais casas é maior.",
      "Se casas iguais, vá pra próxima à direita.",
      "> aponta pro maior, < pro menor, = para iguais.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é maior?",
        opcoes: ["2.999", "3.001"],
        correta: 1,
        feedbackAcerto: "🎉 UM=3>2 → 3.001 é maior, mesmo o resto sendo pequeno.",
        feedbackErro: "Milhar decide primeiro. 3 > 2, então 3.001 > 2.999.",
      },
      {
        pergunta: "Complete: 8.760 __ 8.706.",
        opcoes: [">", "<", "="],
        correta: 0,
        feedbackAcerto: "🎉 UM=C iguais. D: 6>0 → 8.760 > 8.706.",
        feedbackErro: "Dezena: 6 > 0. 8.760 é maior. Sinal >.",
      },
      {
        pergunta: "Qual é MENOR?",
        opcoes: ["5.505", "5.550", "5.055"],
        correta: 2,
        feedbackAcerto: "🎉 UM=5=5. C=0 (em 5.055) é menor que 5.",
        feedbackErro: "Compare a centena: 0 (em 5.055) é a menor. 5.055 é o menor.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Duelo de números",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Cada pessoa escreve um número de 4 dígitos escondido.",
      "Revelem juntos: quem tem o MAIOR ganha 1 ponto.",
      "Jogue 5 rodadas.",
    ],
    registro: "📸 Foto do placar.",
  },

  recompensa: { xp: 110, moedas: 55 },
};
