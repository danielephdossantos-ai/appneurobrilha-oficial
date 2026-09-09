import type { AulaV4 } from "../../types";

export const aula04_divisaoPor10E100: AulaV4 = {
  slug: "u4-04-divisao-por-10-e-100",
  titulo: "Dividir por 10, 100 e 1.000",
  iconeTrilha: "🔟",
  bncc: ["EF04MA07"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Valores dez, cem e mil vezes menores",
    historia:
      "{NOME}, dividir por 10, 100 ou 1.000 reduz o valor de cada algarismo, deslocando-o para casas menores. Nesta aula usamos divisões exatas com números naturais.",
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
    titulo: "Deslocamento para casas menores",
    etapas: [
      {
        texto: "Em divisões exatas por 100, cada algarismo passa duas casas para valores menores.",
        exemploReal: {
          contexto: "4.500 ÷ 100.",
          destaque: "4 milhares viram 4 dezenas e 5 centenas viram 5 unidades: 45.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quanto é 8.000 ÷ 1000?",
    passos: ["Dividir por 1.000 desloca cada valor três casas para a direita.", "8 unidades de milhar passam a 8 unidades."],
    resposta: "8",
  },
  momento06_praticaGuiada: {
    enunciado: "2.400 ÷ 100 = ?",
    dica: "Desloque cada algarismo duas casas para valores menores.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "24" }, { nome: "240" }, { nome: "2,4" }],
      respostaCerta: "24",
      feedbackAcerto: "🎯 24.",
      feedbackErro: "Dividir por 100 desloca cada valor duas casas para a direita: 4.500 ÷ 100 = 45.",
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
      feedbackErro: "9 milhares divididos por 100 tornam-se 9 dezenas: 90.",
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
    pontos: ["÷10 desloca uma casa; ÷100, duas; ÷1.000, três, nas divisões exatas trabalhadas."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "300 ÷ 10 = ?", opcoes: ["30", "3", "300"], correta: 0, feedbackAcerto: "🎉 Três centenas tornam-se três dezenas: 30.", feedbackErro: "Dividir por 10 desloca o valor uma casa para a direita: 300 → 30." },
      { pergunta: "6.000 ÷ 1000 = ?", opcoes: ["6", "60", "600"], correta: 0, feedbackAcerto: "🎉 Seis milhares divididos por mil resultam em 6 unidades.", feedbackErro: "Desloque o valor três casas: unidade de milhar → unidade." },
      { pergunta: "1.200 ÷ 100 = ?", opcoes: ["12", "120", "1,2"], correta: 0, feedbackAcerto: "🎉 Doze centenas divididas por cem resultam em 12 unidades.", feedbackErro: "Dividir por 100 desloca os valores duas casas: 1.200 → 12." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Deslocamentos de valor",
    materiais: ["Papel"],
    passos: ["Escreva 3 números terminados em zeros.", "Divida cada um por 10, 100 e 1.000.", "Escreva os resultados."],
    registro: "📸 Foto do papel.",
  },
  recompensa: { xp: 180, moedas: 90 },
};
