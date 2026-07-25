import type { AulaV4 } from "../../types";

export const aula04_divisaoPor10E100: AulaV4 = {
  slug: "u4-04-divisao-por-10-e-100",
  titulo: "Dividir por 10, 100 e 1.000",
  iconeTrilha: "🔟",
  bncc: ["EF04MA07"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Tirando zeros",
    historia:
      "{NOME}, dividir por 10 é o inverso de multiplicar por 10: tira 1 zero. Por 100, tira 2. Por 1.000, tira 3 (quando dá exato).",
  },
  momento02_exploracao: {
    instrucao: "Repare no padrão.",
    cenas: [
      { tipo: "texto", texto: "3.000 ÷ 10 = 300. 3.000 ÷ 100 = 30. 3.000 ÷ 1.000 = 3.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "E se não termina em zero?",
    pista: "Aí não fica exato.",
    revelacao: "35 ÷ 10 = 3, resto 5. No 4º ano ainda não escrevemos 3,5 — só quociente inteiro e resto.",
  },
  momento04_explicacao: {
    titulo: "Regra dos zeros (agora ao contrário)",
    etapas: [
      {
        texto: "Se o número termina em zeros suficientes, apague-os.",
        exemploReal: {
          contexto: "4.500 ÷ 100.",
          destaque: "Apago 2 zeros: 45.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quanto é 8.000 ÷ 1000?",
    passos: ["1000 tem 3 zeros.", "8.000 → apago 3 zeros → 8."],
    resposta: "8",
  },
  momento06_praticaGuiada: {
    enunciado: "2.400 ÷ 100 = ?",
    dica: "Apague 2 zeros.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "24" }, { nome: "240" }, { nome: "2,4" }],
      respostaCerta: "24",
      feedbackAcerto: "🎯 24.",
      feedbackErro: "÷100 = apagar 2 zeros.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "9.000 ÷ 100 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "90" }, { nome: "9" }, { nome: "900" }],
      respostaCerta: "90",
      feedbackAcerto: "🎯 90.",
      feedbackErro: "9.000 → apago 2 zeros → 90.",
    },
  },
  momento08_aplicacao: {
    contexto: "O reino distribuiu 5.000 moedas em 10 aldeias iguais.",
    problema: "Cada aldeia recebeu:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "500" }, { nome: "50" }, { nome: "5.000" }],
      respostaCerta: "500",
      feedbackAcerto: "🎯 500 moedas.",
      feedbackErro: "5.000 ÷ 10 = 500.",
    },
  },
  momento09_revisao: {
    pontos: ["Apague tantos zeros quantos o divisor tiver, se o número permitir."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "300 ÷ 10 = ?", opcoes: ["30", "3", "300"], correta: 0, feedbackAcerto: "🎉 30.", feedbackErro: "Apagar 1 zero." },
      { pergunta: "6.000 ÷ 1000 = ?", opcoes: ["6", "60", "600"], correta: 0, feedbackAcerto: "🎉 6.", feedbackErro: "Apagar 3 zeros." },
      { pergunta: "1.200 ÷ 100 = ?", opcoes: ["12", "120", "1,2"], correta: 0, feedbackAcerto: "🎉 12.", feedbackErro: "Apagar 2 zeros." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Truque dos zeros",
    materiais: ["Papel"],
    passos: ["Escreva 3 números terminados em zeros.", "Divida cada um por 10, 100 e 1.000.", "Escreva os resultados."],
    registro: "📸 Foto do papel.",
  },
  recompensa: { xp: 180, moedas: 90 },
};
