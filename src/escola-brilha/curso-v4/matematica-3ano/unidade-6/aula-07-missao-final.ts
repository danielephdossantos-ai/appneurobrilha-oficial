import type { AulaV4 } from "../../types";

export const aula07_missaoFinalU6: AulaV4 = {
  slug: "u6-07-missao-final",
  titulo: "Arquiteto da Cidade",
  iconeTrilha: "🏆",
  bncc: ["EF03MA12", "EF03MA13", "EF03MA14", "EF03MA15"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Projetar espaços",
    historia: "{NOME}, a Prefeita te chamou pra desenhar a nova praça. Você vai usar figuras planas, sólidos, simetria e localização.",
  },
  momento02_exploracao: {
    instrucao: "Tudo junto na praça.",
    cenas: [
      { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, mostrarAngulos: true, medidasLados: ["4 m", "4 m", "4 m", "4 m"], legenda: "Praça quadrada 4 m" },
      { tipo: "solido", forma: "cilindro", legenda: "Banco cilíndrico" },
      { tipo: "simetria", forma: "quadrado", eixos: ["vertical", "horizontal", "diagonal1", "diagonal2"], legenda: "Jardim simétrico" },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que geometria importa numa cidade?",
    pista: "Pra construir e localizar.",
    revelacao: "Toda construção e todo endereço usa geometria.",
  },
  momento04_explicacao: {
    titulo: "Miniprojeto",
    etapas: [
      {
        texto: "Praça quadrada de 4 m: perímetro = 4 + 4 + 4 + 4.",
        exemploReal: {
          contexto: "Perímetro = soma dos lados.",
          destaque: "16 m de cerca.",
          visualMat: { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, mostrarAngulos: true, medidasLados: ["4 m", "4 m", "4 m", "4 m"] },
        },
      },
      {
        texto: "Banco em forma de cilindro: 2 bases circulares.",
        exemploReal: {
          contexto: "Assento redondo em cima e embaixo.",
          destaque: "3 faces (2 círculos + 1 curva).",
          visualMat: { tipo: "solido", forma: "cilindro" },
        },
      },
      {
        texto: "Localização: a entrada fica em (2, A).",
        exemploReal: {
          contexto: "Aponte no mapa da praça.",
          destaque: "Linha 2, coluna A.",
          visualMat: {
            tipo: "mapaGrade",
            linhas: 3,
            colunas: 4,
            pinos: [{ linha: 2, coluna: 1, rotulo: "🚪" }, { linha: 2, coluna: 4, rotulo: "🥤" }],
            destaque: { linha: 2, coluna: 1 },
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Praça retangular 5 m × 3 m. Perímetro?",
    passos: ["Some os 4 lados.", "5 + 3 + 5 + 3 = 16."],
    resposta: "16 m",
    visualMat: { tipo: "figuraPlana", forma: "retangulo", mostrarVertices: true, mostrarAngulos: true, medidasLados: ["5 m", "3 m", "5 m", "3 m"] },
  },
  momento06_praticaGuiada: {
    enunciado: "Banco em forma de cilindro. Quantas bases?",
    dica: "Duas.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2" }, { nome: "1" }, { nome: "6" }],
      respostaCerta: "2",
      feedbackAcerto: "🎉 2.",
      feedbackErro: "Cilindro tem 2 círculos.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Fonte simétrica precisa de quantos eixos no mínimo?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1" }, { nome: "0" }, { nome: "2" }],
      respostaCerta: "1",
      feedbackAcerto: "🎯 1.",
      feedbackErro: "Ser simétrica = pelo menos 1 eixo.",
    },
  },
  momento08_aplicacao: {
    contexto: "Entrada em (2, A) e quiosque em (2, D).",
    problema: "Distância em passos:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3" }, { nome: "4" }, { nome: "2" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 A→B→C→D = 3.",
      feedbackErro: "3 passos.",
    },
  },
  momento09_revisao: {
    pontos: ["Figuras, sólidos, simetria, localização.", "Perímetro = soma dos lados."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Cubo tem quantas faces?",
      opcoes: [{ nome: "6" }, { nome: "4" }, { nome: "8" }],
      respostaCerta: "6",
      feedbackAcerto: "🎉 6.",
      feedbackErro: "Cubo: 6 quadradas.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Perímetro de quadrado 5 cm?", opcoes: ["20", "10", "25"], correta: 0, feedbackAcerto: "🎉 20.", feedbackErro: "5+5+5+5=20." },
      { pergunta: "Círculo tem quantos vértices?", opcoes: ["0", "1", "infinitos"], correta: 0, feedbackAcerto: "🎉 0.", feedbackErro: "Círculo não tem vértice." },
      { pergunta: "Retângulo tem quantos eixos de simetria?", opcoes: ["2", "1", "4"], correta: 0, feedbackAcerto: "🎉 2.", feedbackErro: "H e V." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Planta da praça",
    materiais: ["Papel"],
    passos: ["Desenhe uma praça com quadrado, círculo e triângulo.", "Marque um eixo de simetria."],
    registro: "📸 Foto da planta.",
  },
  recompensa: { xp: 300, moedas: 150 },
};
