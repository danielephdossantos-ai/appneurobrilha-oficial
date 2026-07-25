import type { AulaV4 } from "../../types";

export const aula01_poligonos: AulaV4 = {
  slug: "u7-01-poligonos",
  titulo: "Polígonos e seus lados",
  iconeTrilha: "🔷",
  bncc: ["EF04MA17", "EF04MA18"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Nomes de figuras",
    historia:
      "{NOME}, polígono é toda figura com LADOS RETOS. Círculo não é polígono. Triângulo (3), quadrilátero (4), pentágono (5), hexágono (6), octógono (8).",
  },
  momento02_exploracao: {
    instrucao: "Veja e conte.",
    cenas: [
      { tipo: "figuraPlana", forma: "triangulo", mostrarVertices: true, legenda: "Triângulo ABC (3 lados)" },
      { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, mostrarAngulos: true, legenda: "Quadrado ABCD (4 lados)" },
      { tipo: "figuraPlana", forma: "pentagono", mostrarVertices: true, legenda: "Pentágono ABCDE (5 lados)" },
      { tipo: "figuraPlana", forma: "hexagono", mostrarVertices: true, legenda: "Hexágono (6 lados)" },
      { tipo: "figuraPlana", forma: "octogono", mostrarVertices: true, legenda: "Octógono (8 lados) — placa PARE" },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Todo quadrado é retângulo?",
    pista: "Compare a definição.",
    revelacao: "SIM: quadrado tem 4 ângulos retos como o retângulo. A diferença: TODOS os lados iguais.",
  },
  momento04_explicacao: {
    titulo: "Contando lados",
    etapas: [
      {
        texto: "Triângulo: 3 lados e 3 vértices.",
        exemploReal: {
          contexto: "Fatia de pizza.",
          destaque: "3-3.",
          visualMat: { tipo: "figuraPlana", forma: "triangulo", mostrarVertices: true },
        },
      },
      {
        texto: "Quadrilátero: 4 lados e 4 vértices.",
        exemploReal: {
          contexto: "Janela.",
          destaque: "4-4. Ângulos retos.",
          visualMat: { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, mostrarAngulos: true },
        },
      },
      {
        texto: "Hexágono: 6 lados. Vive na colmeia das abelhas.",
        exemploReal: {
          contexto: "Favo de mel.",
          destaque: "6-6.",
          visualMat: { tipo: "figuraPlana", forma: "hexagono", mostrarVertices: true },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quantos lados tem um pentágono?",
    passos: ["Penta = 5.", "Pentágono: 5 lados."],
    resposta: "5",
    visualMat: { tipo: "figuraPlana", forma: "pentagono", mostrarVertices: true },
  },
  momento06_praticaGuiada: {
    enunciado: "Quantos vértices tem um octógono?",
    dica: "Octo = 8.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8" }, { nome: "6" }, { nome: "10" }],
      respostaCerta: "8",
      feedbackAcerto: "🎯 8.",
      feedbackErro: "Octo=8.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Figura com 6 lados retos chama-se:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Hexágono" }, { nome: "Pentágono" }, { nome: "Octógono" }],
      respostaCerta: "Hexágono",
      feedbackAcerto: "🎯 Hexágono.",
      feedbackErro: "Hexa=6.",
    },
  },
  momento08_aplicacao: {
    contexto: "Placa de PARE do trânsito.",
    problema: "Formato:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Octógono" }, { nome: "Hexágono" }, { nome: "Pentágono" }],
      respostaCerta: "Octógono",
      feedbackAcerto: "🎯 Octógono.",
      feedbackErro: "Placa PARE = 8 lados.",
    },
  },
  momento09_revisao: {
    pontos: ["Nome vem do número de lados: Tri=3, Quadri=4, Penta=5, Hexa=6, Octo=8."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "3 lados retos chama-se:", opcoes: ["Triângulo", "Quadrado", "Pentágono"], correta: 0, feedbackAcerto: "🎉 Triângulo.", feedbackErro: "Tri=3." },
      { pergunta: "Todo quadrado é:", opcoes: ["Retângulo", "Triângulo", "Círculo"], correta: 0, feedbackAcerto: "🎉 Retângulo.", feedbackErro: "4 ângulos retos." },
      { pergunta: "Hexágono tem:", opcoes: ["6 lados", "5 lados", "8 lados"], correta: 0, feedbackAcerto: "🎉 6.", feedbackErro: "Hexa=6." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caça aos Polígonos",
    materiais: ["Papel"],
    passos: ["Ache 5 objetos com forma de polígono em casa.", "Anote nome e nº de lados."],
    registro: "📸 Foto da lista.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
