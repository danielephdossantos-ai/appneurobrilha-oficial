import type { AulaV4 } from "../../types";

export const aula04_simetria: AulaV4 = {
  slug: "u6-04-simetria",
  titulo: "Simetria: Dobrar Igual",
  iconeTrilha: "🦋",
  bncc: ["EF03MA15"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Metade que espelha",
    historia: "Borboleta tem asas simétricas: se dobra ao meio, as duas metades se sobrepõem.",
  },
  momento02_exploracao: {
    instrucao: "O eixo de simetria (linha vermelha tracejada) divide em partes iguais.",
    cenas: [
      { tipo: "simetria", forma: "borboleta", eixos: ["vertical"], legenda: "Borboleta — 1 eixo" },
      { tipo: "simetria", forma: "quadrado", eixos: ["vertical", "horizontal", "diagonal1", "diagonal2"], legenda: "Quadrado — 4 eixos" },
      { tipo: "simetria", forma: "circulo", eixos: ["vertical", "horizontal", "diagonal1", "diagonal2"], legenda: "Círculo — infinitos eixos" },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Toda figura tem eixo de simetria?",
    pista: "Nem sempre.",
    revelacao: "Só é simétrica se existe pelo menos 1 eixo que divide em partes iguais.",
  },
  momento04_explicacao: {
    titulo: "Achar os eixos",
    etapas: [
      {
        texto: "Quadrado: 4 eixos (vertical, horizontal, 2 diagonais).",
        exemploReal: {
          contexto: "Dobre o azulejo por todas as linhas de simetria.",
          destaque: "4 eixos.",
          visualMat: { tipo: "simetria", forma: "quadrado", eixos: ["vertical", "horizontal", "diagonal1", "diagonal2"] },
        },
      },
      {
        texto: "Retângulo: só 2 eixos (H e V, sem diagonais).",
        exemploReal: {
          contexto: "Dobre a folha ao meio.",
          destaque: "2 eixos.",
          visualMat: { tipo: "simetria", forma: "retangulo", eixos: ["vertical", "horizontal"] },
        },
      },
      {
        texto: "Coração: só 1 eixo vertical.",
        exemploReal: {
          contexto: "As duas metades espelham.",
          destaque: "1 eixo vertical.",
          visualMat: { tipo: "simetria", forma: "coracao", eixos: ["vertical"] },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quantos eixos tem o retângulo?",
    passos: ["1 horizontal.", "1 vertical.", "Total: 2 eixos."],
    resposta: "2 eixos",
    visualMat: { tipo: "simetria", forma: "retangulo", eixos: ["vertical", "horizontal"] },
  },
  momento06_praticaGuiada: {
    enunciado: "Borboleta tem quantos eixos?",
    dica: "Só um.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1" }, { nome: "0" }, { nome: "2" }],
      respostaCerta: "1",
      feedbackAcerto: "🎉 1 vertical.",
      feedbackErro: "Só o eixo vertical.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Letra A: quantos eixos de simetria?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1 (vertical)" }, { nome: "Nenhum" }, { nome: "2" }],
      respostaCerta: "1 (vertical)",
      feedbackAcerto: "🎯 Vertical.",
      feedbackErro: "A tem 1 eixo vertical.",
    },
  },
  momento08_aplicacao: {
    contexto: "Coração desenhado.",
    problema: "Onde está o eixo de simetria?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Vertical" }, { nome: "Horizontal" }, { nome: "Diagonal" }],
      respostaCerta: "Vertical",
      feedbackAcerto: "🎯 Eixo vertical.",
      feedbackErro: "Coração é simétrico verticalmente.",
    },
  },
  momento09_revisao: {
    pontos: ["Eixo divide em 2 iguais.", "Círculo tem infinitos."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Círculo tem quantos eixos?",
      opcoes: [{ nome: "Infinitos" }, { nome: "1" }, { nome: "4" }],
      respostaCerta: "Infinitos",
      feedbackAcerto: "🎉 Infinitos.",
      feedbackErro: "Qualquer linha pelo centro.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Quadrado: quantos eixos?", opcoes: ["4", "2", "1"], correta: 0, feedbackAcerto: "🎉 4.", feedbackErro: "H, V e 2 diagonais." },
      { pergunta: "Letra F tem eixo de simetria?", opcoes: ["Não tem", "1 vertical", "1 horizontal"], correta: 0, feedbackAcerto: "🎉 Não é simétrica.", feedbackErro: "F não tem eixo." },
      { pergunta: "Letra H tem quantos eixos?", opcoes: ["2", "1", "0"], correta: 0, feedbackAcerto: "🎉 2.", feedbackErro: "H tem H e V." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Espelho da natureza",
    materiais: ["Folha, flor, papel"],
    passos: ["Colete 3 objetos naturais.", "Descubra o eixo de simetria de cada."],
    registro: "📸 Foto dos eixos.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
