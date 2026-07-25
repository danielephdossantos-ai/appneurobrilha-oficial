import type { AulaV4 } from "../../types";

export const aula05_localizacao: AulaV4 = {
  slug: "u6-05-localizacao",
  titulo: "Onde Estou?",
  iconeTrilha: "🗺️",
  bncc: ["EF03MA12"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Achar o caminho",
    historia: "'A escola fica 2 quarteirões à direita, depois vira à esquerda.' Sem localização, ninguém chega.",
  },
  momento02_exploracao: {
    instrucao: "Palavras de localização.",
    cenas: [
      { tipo: "texto", texto: "Direita · Esquerda · Frente · Atrás · Em cima · Embaixo." },
      { tipo: "texto", texto: "Mapa: linhas e colunas identificam posição.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como descrever um lugar em uma malha?",
    pista: "Linha e coluna.",
    revelacao: "Linha 3, coluna B → uma casa exata.",
  },
  momento04_explicacao: {
    titulo: "Mapa com malha",
    etapas: [
      {
        texto: "A escola está em (2, C).",
        exemploReal: { contexto: "Linha 2, coluna C.", destaque: "Endereço em mapa." },
      },
      {
        texto: "Descrever movimento: 'ande 3 pra direita e 2 pra cima'.",
        exemploReal: { contexto: "Robô-labirinto.", destaque: "Direções claras." },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Partindo de (1, A), ande 2 pra direita e 1 pra cima. Onde chega?",
    passos: ["Coluna A + 2 = C.", "Linha 1 + 1 = 2.", "(2, C)."],
    resposta: "(2, C)",
    casasValor: { numero: 2, mostrarDecomposicao: false, extenso: "dois" },
  },
  momento06_praticaGuiada: {
    enunciado: "A padaria fica à direita da farmácia. Farmácia em (3, B). Padaria em?",
    dica: "Direita = coluna maior.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "(3, C)" }, { nome: "(3, A)" }, { nome: "(4, B)" }],
      respostaCerta: "(3, C)",
      feedbackAcerto: "🎉 (3, C).",
      feedbackErro: "Direita: mesma linha, coluna seguinte.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Se ando pra CIMA no mapa, o que muda?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Linha" }, { nome: "Coluna" }, { nome: "Nada" }],
      respostaCerta: "Linha",
      feedbackAcerto: "🎯 Linha.",
      feedbackErro: "Cima/baixo = linha.",
    },
  },
  momento08_aplicacao: {
    contexto: "No labirinto, você está em (1, A) e o tesouro em (3, C).",
    problema: "Vá 2 pra cima e:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2 pra direita" }, { nome: "3 pra direita" }, { nome: "1 pra direita" }],
      respostaCerta: "2 pra direita",
      feedbackAcerto: "🎯 A → C = 2.",
      feedbackErro: "A → B → C = 2 passos.",
    },
  },
  momento09_revisao: {
    pontos: ["Linha e coluna localizam.", "Direita/esquerda muda coluna. Cima/baixo muda linha."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Ir pra esquerda muda o quê?",
      opcoes: [{ nome: "Coluna" }, { nome: "Linha" }, { nome: "Nada" }],
      respostaCerta: "Coluna",
      feedbackAcerto: "🎉 Coluna.",
      feedbackErro: "Esquerda/direita = coluna.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "De (1,A) para (1,D): quantos passos à direita?", opcoes: ["3", "2", "4"], correta: 0, feedbackAcerto: "🎉 3.", feedbackErro: "A→B→C→D=3." },
      { pergunta: "Cima muda?", opcoes: ["Linha", "Coluna", "Nada"], correta: 0, feedbackAcerto: "🎉 Linha.", feedbackErro: "Cima = linha muda." },
      { pergunta: "Se estou em (4,C) e vou 1 pra baixo?", opcoes: ["(3,C)", "(5,C)", "(4,B)"], correta: 0, feedbackAcerto: "🎉 (3,C).", feedbackErro: "Baixo diminui linha." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Mapa da casa",
    materiais: ["Papel quadriculado"],
    passos: ["Desenhe um mapa da sua casa em malha.", "Marque quarto, sala e cozinha com (linha, coluna)."],
    registro: "📸 Foto do mapa.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
