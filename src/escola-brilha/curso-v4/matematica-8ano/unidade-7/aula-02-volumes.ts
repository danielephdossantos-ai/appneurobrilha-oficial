import type { AulaV4 } from "../../types";

export const aula02_volumes: AulaV4 = {
  slug: "u7-02-volumes",
  titulo: "Volume de prismas",
  iconeTrilha: "📦",
  bncc: ["EF08MA20"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Quantos cubinhos cabem dentro",
    historia:
      "{NOME}, volume é quanto de espaço a figura ocupa por dentro. E em TODO prisma a receita é a mesma: calcule a área da base e multiplique pela altura. É como empilhar camadas: a base diz quantos cubinhos cabem numa camada, a altura diz quantas camadas você empilha.",
  },
  momento02_exploracao: {
    instrucao: "Um cubo unitário é a medida-padrão de volume. Observe o sólido e a regra.",
    cenas: [
      {
        tipo: "solido",
        forma: "cubo",
        faces: 6,
        vertices: 8,
        arestas: 12,
        legenda: "Cubo: 6 faces quadradas iguais. Volume = l · l · l = l³.",
      },
      {
        tipo: "tabela",
        titulo: "V = Área da base × altura",
        cabecalhos: ["Prisma", "Área da base (Ab)", "Volume"],
        linhas: [
          { rotulo: "Cubo de aresta l", valores: ["l²", "l³"] },
          { rotulo: "Paralelepípedo b × c × h", valores: ["b · c", "b · c · h"] },
          { rotulo: "Prisma triangular", valores: ["(base · altura) ÷ 2", "Ab · h"] },
          { rotulo: "Prisma trapezoidal", valores: ["(B + b) · h ÷ 2", "Ab · H"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "Volume usa unidade AO CUBO: cm³, m³. E 1 m³ = 1000 litros — é assim que se calcula caixa d'água e piscina.",
        destaque: true,
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que basta saber a área da base para achar o volume de qualquer prisma?",
    pista: "Pense em folhas de papel empilhadas: todas do mesmo formato, uma sobre a outra.",
    revelacao:
      "O prisma é a base repetida ao longo da altura. Cada 'camada' vale Ab; empilhando h camadas, V = Ab · h.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Caixa 5 × 3 × 2",
      passos: [
        { expr: "1 camada = 5 · 3 = 15 cubinhos", explica: "Área da base.", status: "neutro" },
        { expr: "Altura = 2 → 2 camadas", explica: "Empilhando.", status: "neutro" },
        {
          expr: "V = 15 · 2 = 30 cubinhos",
          explica: "V = Ab · h.",
          status: "ok",
          professor:
            "Essa é a razão de o volume ser 'ao cubo': você multiplica três medidas de comprimento. cm · cm · cm = cm³.",
        },
      ],
      fatorada: "V = 30 cm³",
    },
  },
  momento04_explicacao: {
    titulo: "Três prismas, a mesma receita",
    etapas: [
      {
        texto: "Cubo: todas as arestas iguais, então V = l³.",
        exemploReal: {
          contexto: "Cubo de aresta 4 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = l³",
            passos: [
              { expr: "V = 4³", explica: "Aresta ao cubo.", status: "neutro" },
              { expr: "V = 4 · 4 · 4", explica: "Potência é multiplicação repetida.", status: "neutro" },
              { expr: "V = 16 · 4", explica: "Multipliquei os dois primeiros.", status: "neutro" },
              {
                expr: "V = 64 cm³",
                explica: "",
                status: "ok",
                professor:
                  "4³ é 64, não 12. Elevar ao cubo NÃO é multiplicar por 3. É multiplicar o número por ele mesmo três vezes.",
              },
            ],
            fatorada: "V = 64 cm³",
          },
          destaque: "V = 64 cm³.",
        },
      },
      {
        texto: "Paralelepípedo (caixa): V = comprimento · largura · altura.",
        exemploReal: {
          contexto: "Caixa de 5 cm × 3 cm × 2 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = b · c · h",
            passos: [
              { expr: "Ab = 5 · 3 = 15", explica: "Área da base retangular.", status: "neutro" },
              { expr: "V = 15 · 2", explica: "Multiplico pela altura.", status: "neutro" },
              {
                expr: "V = 30 cm³",
                explica: "",
                status: "ok",
                professor:
                  "A ordem dos três fatores não muda o resultado. Escolha começar pelos números mais fáceis de multiplicar.",
              },
            ],
            fatorada: "V = 30 cm³",
          },
          destaque: "V = 30 cm³.",
        },
      },
      {
        texto: "Prisma triangular: a base é um triângulo, então Ab já vem com o ÷ 2.",
        exemploReal: {
          contexto: "Base triangular com base 8 cm e altura 3 cm; altura do prisma 5 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = Ab · h",
            passos: [
              { expr: "Ab = (8 · 3) ÷ 2", explica: "Área do triângulo da base.", status: "neutro" },
              { expr: "Ab = 12 cm²", explica: "24 ÷ 2.", status: "ok" },
              { expr: "V = 12 · 5", explica: "Área da base × altura do prisma.", status: "neutro" },
              {
                expr: "V = 60 cm³",
                explica: "",
                status: "ok",
                professor:
                  "Cuidado com as DUAS alturas: a altura do triângulo (usada em Ab) e a altura do prisma (o comprimento). São coisas diferentes; nomeie cada uma antes de calcular.",
              },
            ],
            fatorada: "V = 60 cm³",
          },
          destaque: "V = 60 cm³.",
        },
      },
      {
        texto: "Unidades: converta ANTES de multiplicar.",
        exemploReal: {
          contexto: "Caixa de 2 m × 50 cm × 1 m.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = 2 m · 50 cm · 1 m",
            passos: [
              { expr: "V = 2 · 50 · 1 = 100", explica: "Misturei metros e centímetros.", status: "x" },
              { expr: "50 cm = 0,5 m", explica: "Converto tudo para metros.", status: "neutro" },
              {
                expr: "V = 2 · 0,5 · 1 = 1 m³",
                explica: "Agora sim.",
                status: "ok",
                professor:
                  "Multiplicar medidas em unidades diferentes é o erro que mais derruba nota em prova. Padronize as três medidas primeiro; só então calcule.",
              },
            ],
            fatorada: "V = 1 m³ = 1000 L",
          },
          destaque: "Padronize a unidade antes.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "🤝 Nós fazemos: volume de um cubo de aresta 3 cm.",
    resposta: "27 cm³",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = l³",
      passos: [
        { expr: "V = 3³", explica: "Aresta ao cubo.", status: "neutro" },
        { expr: "V = 3 · 3 · 3", explica: "", status: "neutro" },
        { expr: "V = 27 cm³", explica: "", status: "ok" },
      ],
      fatorada: "V = 27 cm³",
    },
    passos: ["V = l³", "V = 3 · 3 · 3", "V = 27 cm³"],
  },
  momento06_praticaGuiada: {
    enunciado: "💪 Você faz: caixa de 4 cm × 5 cm × 2 cm.",
    dica: "Ab = 4 · 5 e depois multiplique pela altura 2.",
    visualMat: {
      tipo: "solido",
      forma: "cubo",
      legenda: "Paralelepípedo: 4 cm (comprimento) × 5 cm (largura) × 2 cm (altura).",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "V =",
      opcoes: [{ nome: "40 cm³" }, { nome: "20 cm³" }, { nome: "11 cm³" }],
      respostaCerta: "40 cm³",
      feedbackAcerto: "🎯 4 · 5 · 2 = 40 cm³.",
      feedbackErro: "11 é a soma das medidas. Volume é PRODUTO: 4 · 5 · 2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Cubo de aresta 5 cm.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = l³",
      passos: [
        { expr: "V = 5³", explica: "", status: "neutro" },
        { expr: "V = 25 · 5", explica: "5 · 5 = 25.", status: "neutro" },
        { expr: "V = 125 cm³", explica: "", status: "ok" },
      ],
      fatorada: "V = 125 cm³",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "V =",
      opcoes: [{ nome: "125 cm³" }, { nome: "25 cm³" }, { nome: "15 cm³" }],
      respostaCerta: "125 cm³",
      feedbackAcerto: "🎯 5³ = 125.",
      feedbackErro: "25 é a ÁREA de uma face (5²). O volume é 5³.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "🌎 Na vida real: uma piscina retangular tem 8 m de comprimento, 4 m de largura e 1,5 m de profundidade. Lembre: 1 m³ = 1000 litros.",
    problema: "Quantos litros de água ela comporta cheia?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Piscina 8 m × 4 m × 1,5 m",
      passos: [
        { expr: "Ab = 8 · 4 = 32 m²", explica: "Área do fundo.", status: "neutro" },
        { expr: "V = 32 · 1,5 = 48 m³", explica: "Multiplico pela profundidade.", status: "ok" },
        {
          expr: "48 · 1000 = 48 000 L",
          explica: "Converto m³ em litros.",
          status: "ok",
          professor:
            "1 m³ equivale a 1000 litros porque um cubo de 1 m de aresta tem 100 cm × 100 cm × 100 cm = 1 000 000 cm³, e 1 litro = 1000 cm³.",
        },
      ],
      fatorada: "V = 48 m³ = 48 000 L",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Capacidade:",
      opcoes: [{ nome: "48.000 L" }, { nome: "12.000 L" }, { nome: "4.800 L" }],
      respostaCerta: "48.000 L",
      feedbackAcerto: "🎯 48 m³ × 1000.",
      feedbackErro: "Primeiro V = 48 m³. Depois multiplique por 1000 para virar litros.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Todo prisma: V = Área da base × altura.",
      "Cubo: V = l³ (não é l · 3).",
      "Prisma triangular: Ab já leva o ÷ 2.",
      "Volume usa cm³ / m³.",
      "1 m³ = 1000 litros.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Cubo de aresta 2 cm:", opcoes: ["8 cm³", "6 cm³", "4 cm³"], correta: 0, feedbackAcerto: "🎉 2³ = 8.", feedbackErro: "2 · 2 · 2 = 8." },
      { pergunta: "Caixa 3 × 3 × 3:", opcoes: ["27 cm³", "9 cm³", "18 cm³"], correta: 0, feedbackAcerto: "🎉 27.", feedbackErro: "9 é a área da base; falta multiplicar pela altura 3." },
      { pergunta: "Prisma com Ab = 10 cm² e altura 6 cm:", opcoes: ["60 cm³", "16 cm³", "30 cm³"], correta: 0, feedbackAcerto: "🎉 Ab · h.", feedbackErro: "V = Ab · h = 10 · 6." },
      { pergunta: "1 m³ equivale a:", opcoes: ["1000 L", "100 L", "10 L"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1 m³ = 1000 litros." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Quanta água cabe na caixa d'água",
    materiais: ["Fita métrica", "Papel"],
    passos: [
      "Meça uma caixa de papelão (comprimento, largura e altura) em cm.",
      "Calcule V = c · l · h em cm³.",
      "Divida por 1000 para saber quantos litros ela comportaria.",
    ],
    registro: "📸 Foto das medidas e da conta montada.",
  },
  recompensa: { xp: 175, moedas: 90 },
};
