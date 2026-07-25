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
    historia: "{NOME}, a Prefeita te chamou pra desenhar a nova praça. Você precisa de figuras planas, sólidos, simetria e localização.",
  },
  momento02_exploracao: {
    instrucao: "Tudo junto.",
    cenas: [
      { tipo: "texto", texto: "Figuras planas na planta baixa." },
      { tipo: "texto", texto: "Sólidos na cidade. Simetria no jardim. Localização no mapa.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que geometria importa?",
    pista: "Pra construir e localizar.",
    revelacao: "Toda construção usa geometria.",
  },
  momento04_explicacao: {
    titulo: "Miniprojeto",
    etapas: [
      {
        texto: "Praça quadrada de 4 m de lado.",
        exemploReal: {
          contexto: "Perímetro = 4×4.",
          destaque: "16 m de cerca.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [4, 4],
            resultado: 16,
            passos: [{ coluna: "U", fala: "4 × 4 = 16 metros de cerca.", digito: 6 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Praça retangular 5m × 3m. Perímetro?",
    passos: ["Some os 4 lados.", "5+3+5+3=16."],
    resposta: "16 m",
    casasValor: { numero: 16, mostrarDecomposicao: false, extenso: "dezesseis" },
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
    enunciado: "Fonte simétrica. Quantos eixos precisa ter no mínimo?",
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
    contexto: "A entrada da praça está em (2, A). O quiosque em (2, D).",
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
      { pergunta: "Perímetro de quadrado 5 cm?", opcoes: ["20", "10", "25"], correta: 0, feedbackAcerto: "🎉 20.", feedbackErro: "5×4=20." },
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
