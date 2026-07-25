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
    instrucao: "Simetria = espelho.",
    cenas: [
      { tipo: "texto", texto: "Um eixo divide a figura em 2 partes iguais." },
      { tipo: "texto", texto: "Rosto, borboleta, coração: têm eixo de simetria.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Toda figura é simétrica?",
    pista: "Não! Depende.",
    revelacao: "Só é simétrica se existe pelo menos 1 eixo que divide em partes iguais.",
  },
  momento04_explicacao: {
    titulo: "Achar o eixo",
    etapas: [
      {
        texto: "Quadrado: 4 eixos de simetria.",
        exemploReal: { contexto: "Dobre no meio: horizontal, vertical e 2 diagonais.", destaque: "4 eixos." },
      },
      {
        texto: "Círculo: infinitos eixos.",
        exemploReal: { contexto: "Qualquer linha pelo centro.", destaque: "Simetria perfeita." },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quantos eixos tem o retângulo?",
    passos: ["1 horizontal + 1 vertical = 2 eixos."],
    resposta: "2 eixos",
    casasValor: { numero: 2, mostrarDecomposicao: false, extenso: "dois" },
  },
  momento06_praticaGuiada: {
    enunciado: "Borboleta tem quantos eixos?",
    dica: "Só o vertical.",
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
    enunciado: "Letra A: é simétrica?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Sim, 1 eixo" }, { nome: "Não" }, { nome: "Sim, 2 eixos" }],
      respostaCerta: "Sim, 1 eixo",
      feedbackAcerto: "🎯 Vertical.",
      feedbackErro: "A tem 1 eixo vertical.",
    },
  },
  momento08_aplicacao: {
    contexto: "Coração desenhado.",
    problema: "É simétrico?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Sim, vertical" }, { nome: "Não" }, { nome: "Só horizontal" }],
      respostaCerta: "Sim, vertical",
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
      { pergunta: "Letra F é simétrica?", opcoes: ["Não", "Sim, 1", "Sim, 2"], correta: 0, feedbackAcerto: "🎉 Não é.", feedbackErro: "F não tem eixo." },
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
