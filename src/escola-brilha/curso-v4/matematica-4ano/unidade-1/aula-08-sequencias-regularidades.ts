import type { AulaV4 } from "../../types";

/**
 * Aula 8 · U1 — "Sequências e regularidades"
 * BNCC: EF04MA11.
 */
export const aula08_sequenciasRegularidades: AulaV4 = {
  slug: "u1-08-sequencias-regularidades",
  titulo: "Sequências e regularidades",
  iconeTrilha: "📈",
  bncc: ["EF04MA11"],
  duracaoMin: 18,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Padrões escondidos",
    historia:
      "{NOME}, o mestre desafia: 100, 200, 300, ___ . E também 2.500, 2.600, 2.700, ___ . Toda sequência esconde uma regra. Quem descobre a regra completa qualquer número.",
  },

  momento02_exploracao: {
    instrucao: "Sequências crescem (ou diminuem) sempre pelo mesmo salto.",
    cenas: [
      { tipo: "texto", texto: "+ 10: 30, 40, 50, 60…", destaque: true },
      { tipo: "texto", texto: "+ 100: 1.200, 1.300, 1.400…" },
      { tipo: "texto", texto: "+ 1.000: 2.000, 3.000, 4.000…" },
      { tipo: "texto", texto: "Também dá pra ir DIMINUINDO: -10, -100, -1.000." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como achar o salto de uma sequência?",
    pista: "Subtrai um do outro em sequência.",
    revelacao:
      "1.250, 1.300, 1.350 → salto = 1.300 − 1.250 = 50. A sequência vai de 50 em 50.",
  },

  momento04_explicacao: {
    titulo: "Passos para completar sequências",
    etapas: [
      {
        texto: "1º Ache o salto: subtraia dois termos vizinhos.",
        exemploReal: {
          contexto: "3.240, 3.340, 3.440, ___ → 3.340 − 3.240 = 100.",
          destaque: "Salto de 100.",
        },
      },
      {
        texto: "2º Some o salto no último termo pra achar o próximo.",
        exemploReal: {
          contexto: "3.440 + 100 = 3.540 → sequência: 3.240, 3.340, 3.440, 3.540.",
          destaque: "Próximo: 3.540.",
        },
      },
      {
        texto: "O salto pode ser grande (10, 100, 1.000) ou negativo (decrescente).",
        exemploReal: {
          contexto: "1.500, 2.500, 3.500, ___ → salto 1.000 → próximo 4.500.",
          destaque: "Regra: o salto sempre se repete igual.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Complete: 4.200, 4.400, 4.600, ___, ___.",
    resposta: "4.800, 5.000.",
    passos: [
      "Salto: 4.400 − 4.200 = 200.",
      "4.600 + 200 = 4.800.",
      "4.800 + 200 = 5.000.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Complete: 1.050, 1.100, 1.150, ___.",
    dica: "Subtrai vizinhos.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Próximo:",
      opcoes: [{ nome: "1.200" }, { nome: "1.250" }, { nome: "1.500" }],
      respostaCerta: "1.200",
      feedbackAcerto: "🎯 Salto=50. 1.150 + 50 = 1.200.",
      feedbackErro: "Vizinhos diferem em 50. 1.150 + 50 = 1.200.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Complete: 5.000, 4.900, 4.800, ___.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Próximo:",
      opcoes: [{ nome: "4.700" }, { nome: "4.750" }, { nome: "5.100" }],
      respostaCerta: "4.700",
      feedbackAcerto: "🎯 Salto=−100. 4.800 − 100 = 4.700.",
      feedbackErro: "Está DIMINUINDO de 100 em 100. 4.800 − 100 = 4.700.",
    },
  },

  momento08_aplicacao: {
    contexto: "O tesoureiro anotou uma sequência crescente de doações: 200, 400, 800…",
    problema: "Qual a regra?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "Soma 200 sempre" },
        { nome: "Multiplica por 2" },
        { nome: "Soma 400 sempre" },
      ],
      respostaCerta: "Multiplica por 2",
      feedbackAcerto: "🎯 200×2=400, 400×2=800. Regra: dobrar.",
      feedbackErro: "Cada termo é o DOBRO do anterior. Regra: ×2.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Sequência tem um salto que se repete.",
      "Ache o salto subtraindo vizinhos.",
      "Some (ou subtraia) o salto para achar o próximo.",
      "Alguns padrões multiplicam em vez de somar.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Próximo: 320, 340, 360, ___",
        opcoes: ["380", "400", "370"],
        correta: 0,
        feedbackAcerto: "🎉 Salto 20 → 380.",
        feedbackErro: "Salto=20. 360+20=380.",
      },
      {
        pergunta: "Regra de 1.000, 2.000, 3.000, 4.000:",
        opcoes: ["+100", "+1.000", "×10"],
        correta: 1,
        feedbackAcerto: "🎉 Salto de 1.000.",
        feedbackErro: "Diferença entre vizinhos: 1.000.",
      },
      {
        pergunta: "Próximo: 5.500, 5.400, 5.300, ___",
        opcoes: ["5.100", "5.200", "5.400"],
        correta: 1,
        feedbackAcerto: "🎉 Decrescente de 100 em 100. 5.200.",
        feedbackErro: "Está caindo 100. 5.300−100=5.200.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Detetive de padrões",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Crie 3 sequências: uma somando, uma subtraindo, uma dobrando.",
      "Deixe um espaço em branco no final de cada.",
      "Peça pra alguém descobrir o próximo termo.",
    ],
    registro: "📸 Foto das sequências.",
  },

  recompensa: { xp: 110, moedas: 55 },
};
