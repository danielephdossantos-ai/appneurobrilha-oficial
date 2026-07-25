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
    historia: "Um gráfico mostra na hora quem venceu. Barra maior = mais votos.",
  },
  momento02_exploracao: {
    instrucao: "Partes de um gráfico.",
    cenas: [
      { tipo: "texto", texto: "Eixo horizontal: categorias." },
      { tipo: "texto", texto: "Eixo vertical: quantidade. Barra alta = mais.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como comparar duas categorias?",
    pista: "Olhe a altura da barra.",
    revelacao: "Barra mais alta ganha.",
  },
  momento04_explicacao: {
    titulo: "Ler gráfico",
    etapas: [
      {
        texto: "Frutas: banana=6, maçã=4, uva=2.",
        exemploReal: { contexto: "Banana tem barra mais alta.", destaque: "Banana venceu." },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Se azul=8, vermelho=5 e verde=7, qual ganha?",
    passos: ["Compare 8, 5, 7.", "8 é o maior."],
    resposta: "Azul",
    casasValor: { numero: 8, mostrarDecomposicao: false, extenso: "oito" },
  },
  momento06_praticaGuiada: {
    enunciado: "Se cachorro=10 e gato=6, diferença?",
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
    enunciado: "Numa turma: futebol 9, vôlei 6, xadrez 5. Total?",
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
    contexto: "Chocolate 15 votos, morango 10, baunilha 5.",
    problema: "Qual perdeu?",
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
