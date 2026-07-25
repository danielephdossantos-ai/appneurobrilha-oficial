import type { AulaV4 } from "../../types";

export const aula05_localizacao: AulaV4 = {
  slug: "u6-05-localizacao",
  titulo: "Onde Estou? — Mapa em Malha",
  iconeTrilha: "🗺️",
  bncc: ["EF03MA12"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Achar o caminho",
    historia: "'A escola fica 2 quarteirões à direita, depois vira à esquerda.' Sem localização, ninguém chega.",
  },
  momento02_exploracao: {
    instrucao: "Mapa com linhas (números) e colunas (letras).",
    cenas: [
      {
        tipo: "mapaGrade",
        linhas: 4,
        colunas: 4,
        pinos: [
          { linha: 3, coluna: 2, rotulo: "🏫", cor: "#3b82f6" },
          { linha: 1, coluna: 4, rotulo: "🏠", cor: "#f59e0b" },
        ],
        legenda: "Escola em (3,B) · Casa em (1,D)",
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como descrever uma casa exata na malha?",
    pista: "Linha e coluna.",
    revelacao: "Escrevemos (linha, coluna). Ex.: (3, B).",
  },
  momento04_explicacao: {
    titulo: "Ler coordenadas",
    etapas: [
      {
        texto: "A escola está em (3, B) — linha 3, coluna B.",
        exemploReal: {
          contexto: "Aponte a célula do cruzamento.",
          destaque: "Sempre linha primeiro, coluna depois.",
          visualMat: {
            tipo: "mapaGrade",
            linhas: 4,
            colunas: 4,
            pinos: [{ linha: 3, coluna: 2, rotulo: "🏫" }],
            destaque: { linha: 3, coluna: 2 },
          },
        },
      },
      {
        texto: "Direita/esquerda muda coluna. Cima/baixo muda linha.",
        exemploReal: {
          contexto: "De (1, A), 2 à direita e 1 pra cima chega em (2, C).",
          destaque: "A → B → C = 2 colunas.",
          visualMat: {
            tipo: "mapaGrade",
            linhas: 4,
            colunas: 4,
            pinos: [
              { linha: 1, coluna: 1, rotulo: "🚶", cor: "#10b981" },
              { linha: 2, coluna: 3, rotulo: "⭐", cor: "#f59e0b" },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Partindo de (1, A), ande 2 à direita e 1 pra cima. Onde chega?",
    passos: ["Coluna A + 2 = C.", "Linha 1 + 1 = 2.", "Chega em (2, C)."],
    resposta: "(2, C)",
    visualMat: {
      tipo: "mapaGrade",
      linhas: 4,
      colunas: 4,
      pinos: [
        { linha: 1, coluna: 1, rotulo: "🚶", cor: "#10b981" },
        { linha: 2, coluna: 3, rotulo: "🏁", cor: "#f59e0b" },
      ],
      destaque: { linha: 2, coluna: 3 },
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Farmácia em (3, B). Padaria fica à direita. Onde está a padaria?",
    dica: "Direita = próxima coluna, mesma linha.",
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
    problema: "Ande 2 pra cima e...",
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
    pontos: ["(linha, coluna) localiza.", "Direita/esquerda = coluna. Cima/baixo = linha."],
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
      { pergunta: "Cima muda o quê?", opcoes: ["Linha", "Coluna", "Nada"], correta: 0, feedbackAcerto: "🎉 Linha.", feedbackErro: "Cima = linha muda." },
      { pergunta: "De (4,C), 1 pra baixo chega em?", opcoes: ["(3,C)", "(5,C)", "(4,B)"], correta: 0, feedbackAcerto: "🎉 (3,C).", feedbackErro: "Baixo diminui linha." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Mapa da casa",
    materiais: ["Papel quadriculado"],
    passos: ["Desenhe sua casa em malha.", "Marque quarto, sala e cozinha com (linha, coluna)."],
    registro: "📸 Foto do mapa.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
