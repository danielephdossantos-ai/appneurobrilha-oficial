import type { AulaV4 } from "../../types";

export const aula03_simetria: AulaV4 = {
  slug: "u7-03-simetria",
  titulo: "Simetria — o espelho da figura",
  iconeTrilha: "🪞",
  bncc: ["EF04MA19"],
  duracaoMin: 20,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Duas metades iguais",
    historia:
      "{NOME}, uma figura tem SIMETRIA quando você pode traçar uma linha (eixo) que a divide em duas partes IGUAIS, como espelho. Borboleta é o exemplo perfeito.",
  },
  momento02_exploracao: {
    instrucao: "Olhe os eixos.",
    cenas: [
      { tipo: "simetria", forma: "borboleta", eixos: ["vertical"], legenda: "Borboleta — 1 eixo vertical" },
      { tipo: "simetria", forma: "quadrado", eixos: ["vertical", "horizontal", "diagonal1", "diagonal2"], legenda: "Quadrado — 4 eixos" },
      { tipo: "simetria", forma: "coracao", eixos: ["vertical"], legenda: "Coração — 1 eixo vertical" },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Todo polígono é simétrico?",
    pista: "Depende dos lados.",
    revelacao: "Só figuras REGULARES (lados iguais) têm muitos eixos. Um triângulo qualquer pode não ter nenhum.",
  },
  momento04_explicacao: {
    titulo: "Achar eixos",
    etapas: [
      {
        texto: "Quadrado: 4 eixos (2 pelos lados, 2 pelas diagonais).",
        exemploReal: {
          contexto: "Papel dobrado 4 vezes.",
          destaque: "4 eixos.",
          visualMat: { tipo: "simetria", forma: "quadrado", eixos: ["vertical", "horizontal", "diagonal1", "diagonal2"] },
        },
      },
      {
        texto: "Retângulo (não quadrado): 2 eixos.",
        exemploReal: {
          contexto: "Só pelos lados médios.",
          destaque: "2 eixos.",
          visualMat: { tipo: "simetria", forma: "retangulo", eixos: ["vertical", "horizontal"] },
        },
      },
      {
        texto: "Círculo: infinitos eixos (qualquer reta pelo centro).",
        exemploReal: {
          contexto: "Roda.",
          destaque: "∞ eixos.",
          visualMat: { tipo: "simetria", forma: "circulo", eixos: ["vertical", "horizontal", "diagonal1", "diagonal2"] },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quantos eixos de simetria tem um retângulo (não quadrado)?",
    passos: ["Pelo meio: vertical + horizontal.", "Diagonais não servem (a figura não coincide)."],
    resposta: "2",
    visualMat: { tipo: "simetria", forma: "retangulo", eixos: ["vertical", "horizontal"] },
  },
  momento06_praticaGuiada: {
    enunciado: "Quantos eixos tem uma borboleta?",
    dica: "Olhe onde as asas coincidem.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1" }, { nome: "2" }, { nome: "0" }],
      respostaCerta: "1",
      feedbackAcerto: "🎯 1 (vertical, entre as asas).",
      feedbackErro: "Só o eixo vertical.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "A letra H tem quantos eixos de simetria?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2" }, { nome: "1" }, { nome: "0" }],
      respostaCerta: "2",
      feedbackAcerto: "🎯 2 (vertical e horizontal).",
      feedbackErro: "H é simétrico em 2 direções.",
    },
  },
  momento08_aplicacao: {
    contexto: "Estrela de 5 pontas regular.",
    problema: "Quantos eixos:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5" }, { nome: "1" }, { nome: "2" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 5 (um por ponta).",
      feedbackErro: "Uma reta por cada ponta.",
    },
  },
  momento09_revisao: {
    pontos: ["Eixo = linha que divide em 2 partes IGUAIS.", "Figura regular tem vários eixos."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Quadrado: eixos?", opcoes: ["4", "2", "1"], correta: 0, feedbackAcerto: "🎉 4.", feedbackErro: "Lados médios + diagonais." },
      { pergunta: "Círculo: eixos?", opcoes: ["Infinitos", "1", "4"], correta: 0, feedbackAcerto: "🎉 Infinitos.", feedbackErro: "Toda reta pelo centro." },
      { pergunta: "Letra A: eixos?", opcoes: ["1", "2", "0"], correta: 0, feedbackAcerto: "🎉 1 (vertical).", feedbackErro: "Espelhando na vertical, A fica igual." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Dobradinha",
    materiais: ["Papel", "Tesoura"],
    passos: ["Dobre um papel ao meio.", "Recorte uma forma qualquer.", "Abra e observe a simetria."],
    registro: "📸 Foto do recorte aberto.",
  },
  recompensa: { xp: 220, moedas: 110 },
};
