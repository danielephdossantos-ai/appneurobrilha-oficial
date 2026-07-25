import type { AulaV4 } from "../../types";

export const aula06_missao: AulaV4 = {
  slug: "u7-06-missao",
  titulo: "Missão Final — Diploma da Oficina Algébrica",
  iconeTrilha: "🏆",
  bncc: ["EF08MA19", "EF08MA20", "EF08MA22", "EF08MA25"],
  duracaoMin: 30,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Você chegou ao fim do 8º ano",
    historia:
      "{NOME}, hoje você prova que domina a Oficina Algébrica inteira: reais, expressões, fatoração, sistemas, %, geometria e estatística.",
  },
  momento02_exploracao: {
    instrucao: "Kit completo do 8º ano.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Ferramentas do 8º",
        cabecalhos: ["Unidade", "Foco"],
        linhas: [
          { rotulo: "U1", valores: ["Notação científica"] },
          { rotulo: "U2", valores: ["Produtos notáveis"] },
          { rotulo: "U3", valores: ["Fatoração"] },
          { rotulo: "U4", valores: ["Sistemas 2×2"] },
          { rotulo: "U5", valores: ["% e proporcionalidade"] },
          { rotulo: "U6", valores: ["Geometria"] },
          { rotulo: "U7", valores: ["Áreas, volumes, prob."] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como se sente?",
    pista: "Feche a Oficina com orgulho.",
    revelacao: "Você virou Mestre da Oficina Algébrica.",
  },
  momento04_explicacao: {
    titulo: "Combos finais",
    etapas: [
      {
        texto: "Um problema, várias ferramentas.",
        exemploReal: {
          contexto:
            "Uma sala tem área x²+8x+16. Se o lado é (x+a), quem é a?",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["fatoração", "(x+4)²"] },
              { rotulo: "2", valores: ["lado", "x+4"] },
              { rotulo: "3", valores: ["a", "4"] },
            ],
          },
          destaque: "U3 + U7 juntas.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Fatore x² − 9 e ache os lados de um retângulo com essa área.",
    resposta: "(x+3)(x−3)",
    visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Valor"], linhas: [{ rotulo: "1", valores: ["Δ quadrados", "(x+3)(x−3)"] }] },
    passos: ["Diferença de quadrados."],
  },
  momento06_praticaGuiada: {
    enunciado: "(x+5)² =",
    dica: "Quadrado da soma.",
    interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "x²+10x+25" }, { nome: "x²+25" }, { nome: "x²+5x+25" }], respostaCerta: "x²+10x+25", feedbackAcerto: "🎯", feedbackErro: "2ab=10x." },
  },
  momento07_praticaIndependente: {
    enunciado: "Sistema I) x+y=10, II) x−y=4. x=",
    interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "7" }, { nome: "3" }, { nome: "5" }], respostaCerta: "7", feedbackAcerto: "🎯", feedbackErro: "Soma." },
  },
  momento08_aplicacao: {
    contexto: "Área quadrada = x²+12x+36 m².",
    problema: "Lado =",
    interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "x+6" }, { nome: "x+12" }, { nome: "x+36" }], respostaCerta: "x+6", feedbackAcerto: "🎯 trinômio perfeito.", feedbackErro: "(x+6)²." },
  },
  momento09_revisao: {
    pontos: ["7 unidades formam a Oficina Algébrica.", "Você reconhece padrões antes de calcular.", "Está pronto pro 9º ano."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Fator comum de 4x+8:", opcoes: ["4(x+2)", "2(x+4)", "x+2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "MDC 4." },
      { pergunta: "(x−2)²:", opcoes: ["x²−4x+4", "x²−4", "x²+4x+4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Meio −." },
      { pergunta: "Cubo lado 4:", opcoes: ["64", "16", "12"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "4³." },
      { pergunta: "Média 2,4,6,8:", opcoes: ["5", "4", "6"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "20/4." },
      { pergunta: "P(par no dado):", opcoes: ["1/2", "1/6", "1/3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3 em 6." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma da Oficina Algébrica",
    materiais: ["Papel, caneta"],
    passos: [
      "Diploma: '{NOME} — Mestre da Oficina Algébrica'.",
      "Escreva as 7 ferramentas que aprendeu.",
      "Assine e mostre pra família.",
    ],
    registro: "📸 Foto do diploma.",
  },
  recompensa: { xp: 500, moedas: 250, medalha: "Mestre da Oficina Algébrica" },
};
