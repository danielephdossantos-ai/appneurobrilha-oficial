import type { AulaV4 } from "../../types";

export const aula06_missao: AulaV4 = {
  slug: "u6-06-missao",
  titulo: "Missão — Mestre da Geometria do 8º",
  iconeTrilha: "🏅",
  bncc: ["EF08MA14", "EF08MA15", "EF08MA17", "EF08MA18"],
  duracaoMin: 25,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Todas as ferramentas juntas",
    historia:
      "{NOME}, hoje é a prova de mestre. Vamos usar TUDO da Unidade 6: paralelas, polígonos, congruência, mediatriz/bissetriz e isometrias. Cada problema pede que você escolha a ferramenta CERTA lendo o enunciado.",
  },
  momento02_exploracao: {
    instrucao: "Seu kit de ferramentas:",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Escolha por palavra-chave",
        cabecalhos: ["Situação no enunciado", "Ferramenta"],
        linhas: [
          { rotulo: "Paralelas + transversal", valores: ["Correspondentes / alternos / colaterais"] },
          { rotulo: "Polígono, soma dos ângulos", valores: ["S = (n − 2) · 180°"] },
          { rotulo: "Triângulos idênticos", valores: ["LLL, LAL ou ALA"] },
          { rotulo: "Equidistante de 2 pontos", valores: ["Mediatriz"] },
          { rotulo: "Equidistante dos lados de um ângulo", valores: ["Bissetriz"] },
          { rotulo: "Deslizar / espelhar / girar", valores: ["Translação / reflexão / rotação"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como escolher rápido a ferramenta certa?",
    pista: "Leia devagar o enunciado e procure palavras-chave: 'paralelas', 'regular', 'idênticos', 'equidistante', 'girar'.",
    revelacao: "As palavras-chave levam direto à ferramenta.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Estratégia",
      passos: [
        { expr: "1) Ler enunciado", explica: "Sem pressa.", status: "neutro" },
        { expr: "2) Procurar palavra-chave", explica: "Grifar mentalmente.", status: "neutro" },
        { expr: "3) Escolher ferramenta da tabela", explica: "Uma só, geralmente.", status: "neutro" },
        { expr: "4) Aplicar e conferir", explica: "Sempre conferir a resposta.", status: "ok" },
      ],
      fatorada: "Palavra-chave → ferramenta.",
    },
  },
  momento04_explicacao: {
    titulo: "Combinando ferramentas",
    etapas: [
      {
        texto: "Às vezes uma questão junta 2 tópicos. Exemplo: polígono regular + paralelas.",
        exemploReal: {
          contexto: "Cada ângulo interno de um pentágono regular.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Pentágono regular: n = 5",
            passos: [
              { expr: "S = (5 − 2) · 180°", explica: "Fórmula de polígono.", status: "neutro" },
              { expr: "S = 3 · 180° = 540°", explica: "", status: "neutro" },
              { expr: "Cada = 540° ÷ 5", explica: "Regular → dividir por n.", status: "neutro" },
              { expr: "Cada = 108°", explica: "", status: "ok",
                professor: "Duas etapas: primeiro a soma, depois a divisão. Nunca dividir o (n − 2) · 180° incompleto." },
            ],
            fatorada: "108°",
          },
          destaque: "Combine: fórmula + divisão.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Nós fazemos juntos: cada ângulo interno de um pentágono regular.",
    resposta: "108°.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Pentágono regular",
      passos: [
        { expr: "S = (5 − 2) · 180° = 540°", explica: "", status: "neutro" },
        { expr: "Cada = 540° ÷ 5", explica: "", status: "neutro" },
        { expr: "= 108°", explica: "", status: "ok" },
      ],
      fatorada: "108°",
    },
    passos: ["S = 540°.", "540° ÷ 5 = 108°."],
  },
  momento06_praticaGuiada: {
    enunciado: "Você faz: correspondente de 45° em paralelas cortadas por transversal.",
    dica: "Correspondentes são iguais.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Correspondente de 45°",
      passos: [
        { expr: "Correspondentes são iguais", explica: "Regra.", status: "neutro" },
        { expr: "= 45°", explica: "", status: "ok" },
      ],
      fatorada: "45°",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Correspondente =",
      opcoes: [{ nome: "45°" }, { nome: "135°" }, { nome: "90°" }],
      respostaCerta: "45°",
      feedbackAcerto: "🎯",
      feedbackErro: "Iguais.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Dois triângulos têm 3 lados iguais. Caso de congruência?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3 lados iguais",
      passos: [
        { expr: "L, L, L", explica: "3 lados.", status: "neutro" },
        { expr: "→ LLL", explica: "", status: "ok" },
      ],
      fatorada: "LLL",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Caso:",
      opcoes: [{ nome: "LLL" }, { nome: "LAL" }, { nome: "ALA" }],
      respostaCerta: "LLL",
      feedbackAcerto: "🎯",
      feedbackErro: "3 lados → LLL.",
    },
  },
  momento08_aplicacao: {
    contexto: "Na vida real: um jardineiro quer plantar UMA árvore EXATAMENTE à mesma distância de dois postes A e B.",
    problema: "Em qual lugar geométrico ela deve ficar?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Árvore equidistante de A e B",
      passos: [
        { expr: "Equidistante de 2 PONTOS", explica: "A e B são pontos.", status: "neutro" },
        { expr: "→ Mediatriz de AB", explica: "PA = PB.", status: "ok",
          professor: "Se fosse equidistante dos LADOS de um ângulo (por exemplo, dois muros que se encontram), a resposta seria a bissetriz. Ler o enunciado com atenção evita esse erro." },
      ],
      fatorada: "Na mediatriz de AB.",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Onde?",
      opcoes: [{ nome: "Mediatriz de AB" }, { nome: "Bissetriz" }, { nome: "No poste A" }],
      respostaCerta: "Mediatriz de AB",
      feedbackAcerto: "🎯 PA = PB.",
      feedbackErro: "Equidistante de PONTOS → mediatriz.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Palavras-chave levam à ferramenta certa.",
      "Isometrias preservam tamanho.",
      "(n − 2) · 180° serve para qualquer polígono.",
      "Correspondentes iguais, colaterais somam 180°.",
      "Mediatriz para pontos, bissetriz para ângulos.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Alterno interno de 55°:", opcoes: ["55°", "125°", "35°"], correta: 0, feedbackAcerto: "🎉 Z → iguais.", feedbackErro: "Iguais." },
      { pergunta: "Cada ângulo interno de um hexágono regular:", opcoes: ["120°", "60°", "108°"], correta: 0, feedbackAcerto: "🎉 720 ÷ 6.", feedbackErro: "S = 720°; ÷ 6." },
      { pergunta: "Bissetriz divide o ângulo em:", opcoes: ["2 iguais", "3 iguais", "Nada muda"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Ao meio." },
      { pergunta: "(x, y) refletido no eixo x:", opcoes: ["(x, −y)", "(−x, y)", "(y, x)"], correta: 0, feedbackAcerto: "🎉 y muda.", feedbackErro: "Eixo x → y troca sinal." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma da Geometria",
    materiais: ["Papel", "Régua"],
    passos: ["Escreva um diploma: 'Mestre da Geometria do 8º'.", "Desenhe 3 figuras aplicando as ferramentas da unidade (uma congruência, uma bissetriz, uma isometria).", "Explique a um familiar."],
    registro: "📸 Foto do diploma e das figuras.",
  },
  recompensa: { xp: 230, moedas: 115, medalha: "Mestre da Geometria 8º" },
};
