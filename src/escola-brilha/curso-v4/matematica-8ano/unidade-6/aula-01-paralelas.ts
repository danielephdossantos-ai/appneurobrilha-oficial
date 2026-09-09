import type { AulaV4 } from "../../types";

export const aula01_paralelas: AulaV4 = {
  slug: "u6-01-paralelas",
  titulo: "Retas paralelas cortadas por transversal",
  iconeTrilha: "🚧",
  bncc: ["EF08MA15"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Faixas de trânsito",
    historia:
      "{NOME}, imagine duas ruas paralelas cortadas por uma avenida. Nascem 8 ângulos, e entre eles existem apenas DUAS medidas diferentes — todos os outros se repetem. Hoje você descobre por quê.",
  },
  momento02_exploracao: {
    instrucao: "Cada par tem uma relação fixa. Observe:",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Os 4 pares",
        cabecalhos: ["Par", "Onde estão", "Relação"],
        linhas: [
          { rotulo: "Correspondentes", valores: ["Mesma posição em cada cruzamento", "Iguais"] },
          { rotulo: "Alternos internos", valores: ["Entre as paralelas, lados opostos (Z)", "Iguais"] },
          { rotulo: "Alternos externos", valores: ["Fora das paralelas, lados opostos", "Iguais"] },
          { rotulo: "Colaterais internos", valores: ["Entre as paralelas, mesmo lado (C)", "Somam 180°"] },
        ],
      },
      { tipo: "texto", texto: "Regra rápida: forma Z → iguais. Forma C → suplementares.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Se um ângulo mede 70°, quanto valem TODOS os outros 7?",
    pista: "Só existem duas medidas: 70° e o suplementar de 70°.",
    revelacao: "70° e 110°. Cada ângulo é IGUAL a 70° ou SUPLEMENTAR (110°).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Ângulo dado: 70°",
      passos: [
        { expr: "Correspondente = 70°", explica: "Mesma posição.", status: "ok" },
        { expr: "Alterno interno = 70°", explica: "Formato Z.", status: "ok" },
        { expr: "Colateral interno = 180° − 70° = 110°", explica: "Formato C.", status: "ok" },
        { expr: "Suplementar adjacente = 180° − 70° = 110°", explica: "Linha reta.", status: "ok" },
      ],
      fatorada: "Só há dois valores: 70° e 110°.",
    },
  },
  momento04_explicacao: {
    titulo: "As 3 regras que você precisa",
    etapas: [
      {
        texto: "Correspondentes — mesma posição em cada cruzamento. São IGUAIS.",
        exemploReal: {
          contexto: "A = 70°. Achar o correspondente B.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = 70°",
            passos: [
              { expr: "A e B ocupam a mesma posição", explica: "Ambos acima da paralela, à direita da transversal.", status: "neutro" },
              { expr: "B = A", explica: "Correspondentes são iguais.", status: "ok",
                professor: "Correspondentes ficam do mesmo lado da transversal E do mesmo lado da paralela. É a relação mais direta: iguais, sempre." },
              { expr: "B = 70°", explica: "Substituindo A.", status: "ok" },
            ],
            fatorada: "B = 70°",
          },
          destaque: "Correspondentes = iguais.",
        },
      },
      {
        texto: "Alternos internos — entre as paralelas, em lados opostos da transversal. Formam um Z. São IGUAIS.",
        exemploReal: {
          contexto: "Um alterno interno vale 65°. Achar o par.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1º alterno interno = 65°",
            passos: [
              { expr: "Desenhe mentalmente um Z", explica: "As duas 'pontas' do Z são os alternos internos.", status: "neutro" },
              { expr: "2º alterno interno = 1º", explica: "Regra do Z.", status: "ok",
                professor: "Por que iguais? Porque o alterno interno é correspondente ao suplementar do primeiro; dois suplementares do mesmo ângulo são iguais entre si." },
              { expr: "2º alterno interno = 65°", explica: "", status: "ok" },
            ],
            fatorada: "2º = 65°",
          },
          destaque: "Z → iguais.",
        },
      },
      {
        texto: "Colaterais internos — entre as paralelas, MESMO lado da transversal. Formam um C. SOMAM 180°.",
        exemploReal: {
          contexto: "Um colateral interno = 110°. Achar o outro.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1º colateral = 110°",
            passos: [
              { expr: "1º + 2º = 180°", explica: "Regra do C.", status: "neutro" },
              { expr: "110° + 2º = 180°", explica: "Substituindo.", status: "neutro" },
              { expr: "2º = 180° − 110°", explica: "Isolando.", status: "neutro" },
              { expr: "2º = 70°", explica: "", status: "ok",
                professor: "Colaterais são suplementares porque um deles é o correspondente do suplementar do outro. Regra prática: forma C na figura significa soma 180°." },
            ],
            fatorada: "2º = 70°",
          },
          destaque: "C → soma 180°.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Nós fazemos juntos: um ângulo entre duas paralelas mede 80°. Ache o correspondente e o colateral interno.",
    resposta: "Correspondente = 80°. Colateral interno = 100°.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Ângulo dado = 80°",
      passos: [
        { expr: "Correspondente = 80°", explica: "Mesma posição → iguais.", status: "ok" },
        { expr: "Colateral = 180° − 80°", explica: "Formato C → suplementares.", status: "neutro" },
        { expr: "Colateral = 100°", explica: "", status: "ok",
          professor: "Sempre confira: correspondentes NÃO somam 180°; são iguais. Colaterais somam. Não confundir." },
      ],
      fatorada: "Corresp. 80° | Colat. 100°",
    },
    passos: ["Correspondentes iguais.", "Colaterais somam 180°."],
  },
  momento06_praticaGuiada: {
    enunciado: "Você faz: se A = 40°, quanto vale o correspondente?",
    dica: "Correspondentes têm a MESMA medida.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A = 40°",
      passos: [
        { expr: "Correspondente = A", explica: "Regra.", status: "neutro" },
        { expr: "= 40°", explica: "", status: "ok" },
      ],
      fatorada: "40°",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Correspondente =",
      opcoes: [{ nome: "40°" }, { nome: "140°" }, { nome: "50°" }],
      respostaCerta: "40°",
      feedbackAcerto: "🎯 Correspondentes são iguais.",
      feedbackErro: "Correspondentes NÃO somam — são IGUAIS.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Colateral interno de 130° vale quanto?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1º colateral = 130°",
      passos: [
        { expr: "1º + 2º = 180°", explica: "Formato C.", status: "neutro" },
        { expr: "2º = 180° − 130°", explica: "", status: "neutro" },
        { expr: "2º = 50°", explica: "", status: "ok" },
      ],
      fatorada: "50°",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Colateral =",
      opcoes: [{ nome: "50°" }, { nome: "130°" }, { nome: "40°" }],
      respostaCerta: "50°",
      feedbackAcerto: "🎯 180−130 = 50.",
      feedbackErro: "Colaterais SOMAM 180°.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "Na vida real: duas ruas paralelas cortadas pela Av. Central. Na 1ª interseção, um poste faz um ângulo de 55° com a avenida.",
    problema: "Quanto vale o ângulo correspondente na 2ª interseção?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1ª interseção: 55°",
      passos: [
        { expr: "Ruas paralelas → correspondentes iguais", explica: "Regra fundamental.", status: "neutro" },
        { expr: "2ª interseção = 55°", explica: "", status: "ok",
          professor: "É por isso que engenheiros de trânsito usam paralelas: garante ângulos previsíveis nos cruzamentos." },
      ],
      fatorada: "55°",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Correspondente =",
      opcoes: [{ nome: "55°" }, { nome: "125°" }, { nome: "35°" }],
      respostaCerta: "55°",
      feedbackAcerto: "🎯",
      feedbackErro: "Correspondentes = iguais.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Correspondentes: mesma posição → IGUAIS.",
      "Alternos (Z): lados opostos → IGUAIS.",
      "Colaterais (C): mesmo lado → SOMAM 180°.",
      "Só existem 2 medidas entre os 8 ângulos.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Alterno interno de 60°:", opcoes: ["60°", "120°", "30°"], correta: 0, feedbackAcerto: "🎉 Z → iguais.", feedbackErro: "Alternos são iguais." },
      { pergunta: "Colateral interno de 90°:", opcoes: ["90°", "180°", "45°"], correta: 0, feedbackAcerto: "🎉 180−90 = 90.", feedbackErro: "Soma 180°." },
      { pergunta: "Correspondente de 115°:", opcoes: ["115°", "65°", "180°"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Iguais." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Ruas paralelas",
    materiais: ["Régua", "Papel"],
    passos: ["Desenhe 2 paralelas cortadas por uma transversal.", "Marque os 8 ângulos.", "Classifique cada par e mostre à família."],
    registro: "📸 Foto do desenho.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
