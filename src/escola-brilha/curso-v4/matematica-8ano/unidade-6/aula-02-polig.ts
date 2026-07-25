import type { AulaV4 } from "../../types";

export const aula02_polig: AulaV4 = {
  slug: "u6-02-polig",
  titulo: "Soma dos ângulos internos dos polígonos",
  iconeTrilha: "🔷",
  bncc: ["EF08MA14"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Uma fórmula, todos os polígonos",
    historia:
      "{NOME}, todo triângulo soma 180°. Todo quadrilátero soma 360°. Existe UMA fórmula que dá a soma para qualquer polígono — e ela vem de um truque simples: cortar o polígono em triângulos.",
  },
  momento02_exploracao: {
    instrucao: "Observe o padrão:",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Padrão da soma",
        cabecalhos: ["Lados (n)", "Nome", "Triângulos", "Soma"],
        linhas: [
          { rotulo: "3", valores: ["Triângulo", "1", "180°"] },
          { rotulo: "4", valores: ["Quadrilátero", "2", "360°"] },
          { rotulo: "5", valores: ["Pentágono", "3", "540°"] },
          { rotulo: "6", valores: ["Hexágono", "4", "720°"] },
        ],
      },
      { tipo: "figuraPlana", forma: "pentagono", legenda: "Pentágono: 3 triângulos por diagonais a partir de um vértice." },
      { tipo: "texto", texto: "Sempre: (n − 2) triângulos. Cada um contribui com 180°.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que aparece exatamente (n − 2)?",
    pista: "De um vértice, quantas diagonais dá para traçar sem cruzar? Elas dividem o polígono em quantos triângulos?",
    revelacao: "Sempre (n − 2) triângulos. Como cada triângulo tem 180°, a soma é (n − 2) · 180°.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Polígono de n lados",
      passos: [
        { expr: "Escolha 1 vértice", explica: "Vamos traçar diagonais a partir dele.", status: "neutro" },
        { expr: "Ele NÃO liga a ele mesmo nem aos 2 vizinhos", explica: "Sobram (n − 3) diagonais.", status: "neutro" },
        { expr: "(n − 3) diagonais → (n − 2) triângulos", explica: "As diagonais partem o polígono em triângulos.", status: "ok" },
        { expr: "Soma = (n − 2) × 180°", explica: "Cada triângulo contribui 180°.", status: "ok" },
      ],
      fatorada: "S = (n − 2) · 180°",
    },
  },
  momento04_explicacao: {
    titulo: "Usando a fórmula",
    etapas: [
      {
        texto: "Passo 1 — Soma dos internos de qualquer polígono.",
        exemploReal: {
          contexto: "Octógono (n = 8).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Octógono: n = 8",
            passos: [
              { expr: "S = (n − 2) · 180°", explica: "Fórmula.", status: "neutro" },
              { expr: "S = (8 − 2) · 180°", explica: "Substituindo n = 8.", status: "neutro" },
              { expr: "S = 6 · 180°", explica: "", status: "neutro" },
              { expr: "S = 1080°", explica: "", status: "ok",
                professor: "Note: 6 × 180 = 6 × 18 × 10 = 108 × 10 = 1080. Truque útil para mental." },
            ],
            fatorada: "S = 1080°",
          },
          destaque: "Octógono soma 1080°.",
        },
      },
      {
        texto: "Passo 2 — Polígono REGULAR (todos os lados e ângulos iguais): cada ângulo = S ÷ n.",
        exemploReal: {
          contexto: "Hexágono regular (n = 6).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Hexágono regular: n = 6",
            passos: [
              { expr: "S = (6 − 2) · 180° = 720°", explica: "Soma total.", status: "neutro" },
              { expr: "Cada ângulo = S ÷ n", explica: "Só vale em regulares.", status: "neutro" },
              { expr: "= 720° ÷ 6", explica: "", status: "neutro" },
              { expr: "= 120°", explica: "", status: "ok",
                professor: "Por isso os favos de abelha usam hexágonos: 120° encaixa perfeitamente três hexágonos num vértice (3 × 120° = 360°)." },
            ],
            fatorada: "Cada ângulo = 120°",
          },
          destaque: "Hexágono regular = 120° por ângulo.",
        },
      },
      {
        texto: "Passo 3 — Ângulos EXTERNOS: sempre somam 360°, para qualquer polígono convexo.",
        exemploReal: {
          contexto: "Não depende de n. Sempre 360°.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Soma dos externos",
            passos: [
              { expr: "Em cada vértice: int + ext = 180°", explica: "São suplementares.", status: "neutro" },
              { expr: "Somando os n vértices: S_int + S_ext = 180°·n", explica: "", status: "neutro" },
              { expr: "S_ext = 180°·n − (n − 2)·180°", explica: "Substituindo S_int.", status: "neutro" },
              { expr: "S_ext = 180°·n − 180°·n + 360°", explica: "Distribuindo.", status: "neutro" },
              { expr: "S_ext = 360°", explica: "", status: "ok",
                professor: "Resultado surpreendente: não importa se é triângulo, quadrilátero ou icoságono — a soma dos externos é sempre 360°." },
            ],
            fatorada: "S_ext = 360°",
          },
          destaque: "Regular: cada ext. = 360° ÷ n.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Nós fazemos juntos: soma dos internos de um decágono (n = 10).",
    resposta: "1440°",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Decágono: n = 10",
      passos: [
        { expr: "S = (n − 2) · 180°", explica: "", status: "neutro" },
        { expr: "S = (10 − 2) · 180°", explica: "", status: "neutro" },
        { expr: "S = 8 · 180°", explica: "", status: "neutro" },
        { expr: "S = 1440°", explica: "", status: "ok" },
      ],
      fatorada: "S = 1440°",
    },
    passos: ["(10 − 2) = 8.", "8 × 180° = 1440°."],
  },
  momento06_praticaGuiada: {
    enunciado: "Você faz: soma dos internos de um pentágono (n = 5).",
    dica: "S = (5 − 2) · 180°.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Pentágono: n = 5",
      passos: [
        { expr: "S = (5 − 2) · 180°", explica: "", status: "neutro" },
        { expr: "S = 3 · 180°", explica: "", status: "neutro" },
        { expr: "S = 540°", explica: "", status: "ok" },
      ],
      fatorada: "S = 540°",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "S =",
      opcoes: [{ nome: "540°" }, { nome: "360°" }, { nome: "720°" }],
      respostaCerta: "540°",
      feedbackAcerto: "🎯 3 × 180 = 540.",
      feedbackErro: "3 × 180°. Não confunda n com (n−2).",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Cada ângulo interno de um octógono REGULAR.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Octógono regular: n = 8",
      passos: [
        { expr: "S = (8 − 2) · 180° = 1080°", explica: "Soma total.", status: "neutro" },
        { expr: "Cada = S ÷ n = 1080° ÷ 8", explica: "", status: "neutro" },
        { expr: "= 135°", explica: "", status: "ok" },
      ],
      fatorada: "135°",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Cada ângulo =",
      opcoes: [{ nome: "135°" }, { nome: "144°" }, { nome: "120°" }],
      respostaCerta: "135°",
      feedbackAcerto: "🎯 1080 ÷ 8.",
      feedbackErro: "Primeiro S = 1080°. Depois ÷ 8.",
    },
  },
  momento08_aplicacao: {
    contexto: "Na vida real: um piso feito com ladrilhos hexagonais REGULARES.",
    problema: "Quanto vale cada ângulo interno? (Isso explica por que hexágonos encaixam sem sobra.)",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Hexágono regular",
      passos: [
        { expr: "S = (6 − 2) · 180° = 720°", explica: "", status: "neutro" },
        { expr: "Cada = 720° ÷ 6", explica: "", status: "neutro" },
        { expr: "= 120°", explica: "", status: "ok",
          professor: "3 hexágonos num vértice = 3 × 120° = 360°. Enche o plano sem folga. É a mais eficiente." },
      ],
      fatorada: "120°",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Cada ângulo =",
      opcoes: [{ nome: "120°" }, { nome: "60°" }, { nome: "90°" }],
      respostaCerta: "120°",
      feedbackAcerto: "🎯",
      feedbackErro: "720° ÷ 6.",
    },
  },
  momento09_revisao: {
    pontos: [
      "S_interna = (n − 2) · 180°.",
      "Regular: cada interno = S ÷ n.",
      "Externa total = 360° (sempre).",
      "Regular: cada externo = 360° ÷ n.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Triângulo: soma =", opcoes: ["180°", "360°", "540°"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "(3−2)·180 = 180." },
      { pergunta: "Quadrilátero: soma =", opcoes: ["360°", "180°", "720°"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2·180 = 360." },
      { pergunta: "Soma dos EXTERNOS de um decágono:", opcoes: ["360°", "1440°", "180°"], correta: 0, feedbackAcerto: "🎉 Sempre 360°.", feedbackErro: "Externos: SEMPRE 360°." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caça polígonos",
    materiais: ["Casa"],
    passos: ["Ache 4 formas geométricas em casa (piso, painel, embalagem).", "Diga quantos lados têm e calcule a soma dos internos."],
    registro: "📸 Foto das formas encontradas.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
