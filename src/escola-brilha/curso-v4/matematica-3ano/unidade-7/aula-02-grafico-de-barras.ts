import type { AulaV4 } from "../../types";

export const aula02_graficoBarras: AulaV4 = {
  slug: "u7-02-grafico-barras",
  titulo: "Gráfico de Barras",
  iconeTrilha: "📊",
  bncc: ["EF03MA27"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Ver de olhar",
    historia: "Um gráfico mostra na hora quem venceu. Barra mais alta = mais votos.",
  },
  momento02_exploracao: {
    instrucao: "Partes de um gráfico: eixo, barras, escala.",
    cenas: [
      {
        tipo: "graficoBarras",
        titulo: "Frutas preferidas",
        unidade: "votos",
        barras: [
          { rotulo: "Banana", valor: 6 },
          { rotulo: "Maçã", valor: 4 },
          { rotulo: "Uva", valor: 2 },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como comparar duas categorias?",
    pista: "Olhe a altura da barra.",
    revelacao: "Barra mais alta = maior quantidade.",
  },
  momento04_explicacao: {
    titulo: "Ler gráfico",
    etapas: [
      {
        texto: "Compare as barras: quem tem a mais alta vence.",
        exemploReal: {
          contexto: "Banana=6, maçã=4, uva=2.",
          destaque: "Banana venceu.",
          visualMat: {
            tipo: "graficoBarras",
            titulo: "Frutas preferidas",
            unidade: "votos",
            barras: [
              { rotulo: "Banana", valor: 6 },
              { rotulo: "Maçã", valor: 4 },
              { rotulo: "Uva", valor: 2 },
            ],
          },
        },
      },
      {
        texto: "Para saber diferença: subtraia os valores.",
        exemploReal: {
          contexto: "Cachorro=10, gato=6.",
          destaque: "Diferença = 10 − 6 = 4.",
          visualMat: {
            tipo: "graficoBarras",
            titulo: "Pets da turma",
            unidade: "crianças",
            barras: [
              { rotulo: "Cachorro", valor: 10 },
              { rotulo: "Gato", valor: 6 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Se azul=8, vermelho=5 e verde=7, qual barra ganha?",
    passos: ["Compare 8, 5, 7.", "8 é o maior.", "Azul ganha."],
    resposta: "Azul (8)",
    visualMat: {
      tipo: "graficoBarras",
      titulo: "Cor favorita",
      unidade: "votos",
      barras: [
        { rotulo: "Azul", valor: 8, cor: "#3b82f6" },
        { rotulo: "Vermelho", valor: 5, cor: "#ef4444" },
        { rotulo: "Verde", valor: 7, cor: "#10b981" },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Cachorro=10 e gato=6. Diferença?",
    dica: "Subtração.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4" }, { nome: "2" }, { nome: "16" }],
      respostaCerta: "4",
      feedbackAcerto: "🎉 10−6=4.",
      feedbackErro: "10−6=4.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Numa turma: futebol=9, vôlei=6, xadrez=5. Total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20" }, { nome: "15" }, { nome: "25" }],
      respostaCerta: "20",
      feedbackAcerto: "🎯 9+6+5=20.",
      feedbackErro: "9+6+5=20.",
    },
  },
  momento08_aplicacao: {
    contexto: "Chocolate=15 votos, morango=10, baunilha=5.",
    problema: "Qual sabor perdeu?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Baunilha" }, { nome: "Morango" }, { nome: "Chocolate" }],
      respostaCerta: "Baunilha",
      feedbackAcerto: "🎯 5 é o menor.",
      feedbackErro: "5 < 10 < 15.",
    },
  },
  momento09_revisao: {
    pontos: ["Barra alta = mais.", "Compare por altura."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Barra mais baixa significa?",
      opcoes: [{ nome: "Menos" }, { nome: "Mais" }, { nome: "Igual" }],
      respostaCerta: "Menos",
      feedbackAcerto: "🎉 Menos.",
      feedbackErro: "Baixa = menos votos.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "A=7, B=3. Diferença?", opcoes: ["4", "10", "5"], correta: 0, feedbackAcerto: "🎉 4.", feedbackErro: "7−3=4." },
      { pergunta: "Maior barra = ?", opcoes: ["Vencedor", "Perdedor", "Empate"], correta: 0, feedbackAcerto: "🎉 Vencedor.", feedbackErro: "Barra alta ganha." },
      { pergunta: "Total 5+7+8?", opcoes: ["20", "18", "22"], correta: 0, feedbackAcerto: "🎉 20.", feedbackErro: "5+7+8=20." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Gráfico caseiro",
    materiais: ["Papel quadriculado"],
    passos: ["Pergunte 3 preferências a 6 pessoas.", "Desenhe um gráfico de barras."],
    registro: "📸 Foto do gráfico.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
