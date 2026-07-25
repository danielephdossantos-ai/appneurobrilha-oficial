import type { AulaV4 } from "../../types";

export const aula03_congruencia: AulaV4 = {
  slug: "u6-03-congruencia",
  titulo: "Congruência de triângulos: LAL, LLL, ALA",
  iconeTrilha: "🔺",
  bncc: ["EF08MA17"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Idênticos de verdade",
    historia:
      "{NOME}, dois triângulos são CONGRUENTES quando um pode ser colocado exatamente sobre o outro. Você não precisa comparar TUDO: existem 3 testes rápidos que já garantem a congruência. Isso é usado em engenharia toda hora.",
  },
  momento02_exploracao: {
    instrucao: "Os 3 casos oficiais:",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Testes de congruência",
        cabecalhos: ["Caso", "O que basta comparar"],
        linhas: [
          { rotulo: "LLL", valores: ["Os 3 lados"] },
          { rotulo: "LAL", valores: ["2 lados e o ÂNGULO ENTRE eles"] },
          { rotulo: "ALA", valores: ["2 ângulos e o LADO ENTRE eles"] },
        ],
      },
      { tipo: "figuraPlana", forma: "triangulo", mostrarVertices: true, legenda: "Triângulo: 3 lados, 3 ângulos. Basta bater 3 elementos certos." },
      { tipo: "texto", texto: "Cuidado: LLA (lado-lado-ângulo NÃO entre) NÃO garante congruência!", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Basta ter 2 lados iguais para dois triângulos serem congruentes?",
    pista: "Pense: 2 lados de 5 cm podem formar triângulos de tamanhos diferentes se o ângulo entre eles for outro.",
    revelacao: "Não. Precisamos sempre de 3 elementos certos: os 3 casos (LLL, LAL, ALA) descrevem quais.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Por que 3 elementos?",
      passos: [
        { expr: "Só 1 elemento → infinitos triângulos", explica: "Um lado de 5cm cabe em milhares de triângulos.", status: "x" },
        { expr: "2 elementos → ainda ambíguo", explica: "Depende de onde estão.", status: "x" },
        { expr: "3 elementos NA POSIÇÃO CERTA → único", explica: "É o que os casos garantem.", status: "ok" },
      ],
      fatorada: "Precisa: 3 elementos + posição certa.",
    },
  },
  momento04_explicacao: {
    titulo: "Os 3 casos, um a um",
    etapas: [
      {
        texto: "Caso LLL — os 3 lados batem.",
        exemploReal: {
          contexto: "Δ1: lados 3, 4, 5. Δ2: lados 3, 4, 5.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Δ1 (3, 4, 5) vs Δ2 (3, 4, 5)",
            passos: [
              { expr: "Lado a: 3 = 3", explica: "", status: "ok" },
              { expr: "Lado b: 4 = 4", explica: "", status: "ok" },
              { expr: "Lado c: 5 = 5", explica: "", status: "ok" },
              { expr: "Δ1 ≅ Δ2 (por LLL)", explica: "3 lados iguais.", status: "ok",
                professor: "Curiosidade: com os 3 lados dados, o triângulo é único. Por isso treliças de telhado usam triângulos — são rígidos, não deformam." },
            ],
            fatorada: "Congruentes por LLL.",
          },
          destaque: "3 lados iguais → LLL.",
        },
      },
      {
        texto: "Caso LAL — 2 lados e o ângulo ENTRE eles.",
        exemploReal: {
          contexto: "Δ: l₁ = 6, ângulo = 60° entre l₁ e l₂, l₂ = 8.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Δ com (6, 60°, 8)",
            passos: [
              { expr: "Fixe o ângulo de 60° entre os lados", explica: "Vértice determinado.", status: "neutro" },
              { expr: "l₁ = 6 sai desse vértice", explica: "", status: "neutro" },
              { expr: "l₂ = 8 sai do mesmo vértice", explica: "", status: "neutro" },
              { expr: "Terceiro lado fica DETERMINADO", explica: "Só uma opção fecha o triângulo.", status: "ok",
                professor: "Atenção à palavra 'ENTRE'. Se o ângulo NÃO estiver entre os lados, o caso não vale (é o famoso caso LLA, que falha)." },
            ],
            fatorada: "Congruentes por LAL.",
          },
          destaque: "Ângulo ENTRE os 2 lados.",
        },
      },
      {
        texto: "Caso ALA — 2 ângulos e o LADO ENTRE eles.",
        exemploReal: {
          contexto: "Δ: ângulo 50°, lado 7, ângulo 70°.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Δ com (50°, 7, 70°)",
            passos: [
              { expr: "Trace o lado de 7", explica: "Base fixa.", status: "neutro" },
              { expr: "Em uma ponta: ângulo de 50°", explica: "", status: "neutro" },
              { expr: "Na outra ponta: ângulo de 70°", explica: "", status: "neutro" },
              { expr: "As duas retas se encontram em UM ponto", explica: "Triângulo fica único.", status: "ok",
                professor: "Bônus: se você sabe 2 ângulos, sabe o terceiro (soma 180°). Por isso ALA equivale a AAL." },
            ],
            fatorada: "Congruentes por ALA.",
          },
          destaque: "Lado ENTRE os ângulos.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Nós fazemos juntos: Δ1 tem lados 5, 5, 8. Δ2 tem lados 5, 5, 8. Qual caso justifica a congruência?",
    resposta: "LLL — 3 lados iguais.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Δ1 (5, 5, 8) vs Δ2 (5, 5, 8)",
      passos: [
        { expr: "Comparar lado a lado", explica: "Método LLL.", status: "neutro" },
        { expr: "5 = 5 ✓, 5 = 5 ✓, 8 = 8 ✓", explica: "3 pares iguais.", status: "ok" },
        { expr: "Δ1 ≅ Δ2 por LLL", explica: "", status: "ok" },
      ],
      fatorada: "LLL",
    },
    passos: ["3 lados batem → LLL."],
  },
  momento06_praticaGuiada: {
    enunciado: "Você faz: Δ com lado, ângulo entre eles, lado — qual caso?",
    dica: "Ordem: L-A-L (lado, ângulo, lado).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Dado: lado, ângulo, lado",
      passos: [
        { expr: "O ângulo está ENTRE os lados", explica: "Posição-chave.", status: "neutro" },
        { expr: "Padrão L-A-L", explica: "", status: "ok" },
      ],
      fatorada: "LAL",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Caso:",
      opcoes: [{ nome: "LAL" }, { nome: "LLL" }, { nome: "ALA" }],
      respostaCerta: "LAL",
      feedbackAcerto: "🎯 Ângulo entre os lados.",
      feedbackErro: "Leia a ordem: Lado-Ângulo-Lado.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Δ1: 45°, lado 3cm ENTRE eles, 60°. Δ2: idem. Caso?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Δ (45°, 3cm, 60°)",
      passos: [
        { expr: "Ângulo — Lado — Ângulo", explica: "Lado no meio.", status: "neutro" },
        { expr: "Padrão A-L-A", explica: "", status: "ok" },
      ],
      fatorada: "ALA",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Caso:",
      opcoes: [{ nome: "ALA" }, { nome: "LAL" }, { nome: "LLL" }],
      respostaCerta: "ALA",
      feedbackAcerto: "🎯 Ângulo-Lado-Ângulo.",
      feedbackErro: "O lado está ENTRE os dois ângulos.",
    },
  },
  momento08_aplicacao: {
    contexto: "Na vida real: um telhado usa duas treliças triangulares que PRECISAM ser idênticas. O construtor mede os 3 lados de cada uma e confere que batem.",
    problema: "Que caso ele usou para garantir?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Treliça: 3 lados conferidos",
      passos: [
        { expr: "Só mediu LADOS", explica: "Nenhum ângulo.", status: "neutro" },
        { expr: "3 lados iguais → LLL", explica: "", status: "ok",
          professor: "Na construção civil, LLL é o mais usado por causa da rigidez triangular: uma vez fixados os 3 lados, a forma não pode mudar." },
      ],
      fatorada: "LLL",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Caso:",
      opcoes: [{ nome: "LLL" }, { nome: "LAL" }, { nome: "ALA" }],
      respostaCerta: "LLL",
      feedbackAcerto: "🎯",
      feedbackErro: "Só lados foram medidos.",
    },
  },
  momento09_revisao: {
    pontos: [
      "3 casos: LLL, LAL, ALA.",
      "LAL: ângulo ENTRE os lados.",
      "ALA: lado ENTRE os ângulos.",
      "LLA falha! Não garante congruência.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "3 lados iguais →", opcoes: ["LLL", "LAL", "ALA"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3 L." },
      { pergunta: "Ângulo, lado, ângulo →", opcoes: ["ALA", "LAL", "LLL"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Lado no meio." },
      { pergunta: "Lado, ângulo, lado →", opcoes: ["LAL", "ALA", "LLL"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Ângulo no meio." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Construtor",
    materiais: ["Palitos ou canudos"],
    passos: ["Monte 2 triângulos idênticos com palitos.", "Explique à família qual caso justifica: LLL, LAL ou ALA."],
    registro: "📸 Foto dos triângulos.",
  },
  recompensa: { xp: 180, moedas: 90 },
};
