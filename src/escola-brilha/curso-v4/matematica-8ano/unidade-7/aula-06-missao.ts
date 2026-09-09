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
      "{NOME}, hoje não tem conteúdo novo: tem PROVA DE MESTRE. Você vai usar as sete ferramentas do ano — reais e notação científica, expressões algébricas, fatoração, sistemas, porcentagem, geometria e agora áreas, volumes, contagem e estatística — num único desafio. Vamos fechar a Oficina Algébrica com diploma.",
  },
  momento02_exploracao: {
    instrucao: "Este é o seu kit completo do 8º ano. Reveja antes de começar.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Ferramentas do 8º ano",
        cabecalhos: ["Unidade", "Foco", "Fórmula-chave"],
        linhas: [
          { rotulo: "U1", valores: ["Reais e notação científica", "a · 10ⁿ"] },
          { rotulo: "U2", valores: ["Produtos notáveis", "(a+b)² = a² + 2ab + b²"] },
          { rotulo: "U3", valores: ["Fatoração", "a² − b² = (a+b)(a−b)"] },
          { rotulo: "U4", valores: ["Sistemas 2×2", "Substituição / adição"] },
          { rotulo: "U5", valores: ["Porcentagem", "Fator multiplicativo"] },
          { rotulo: "U6", valores: ["Geometria", "S = (n − 2) · 180°"] },
          { rotulo: "U7", valores: ["Áreas, volumes, probabilidade", "V = Ab · h · P = f/t"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "Um bom problema quase nunca usa uma ferramenta só. Leia, identifique o que está sendo pedido e escolha a ferramenta certa.",
        destaque: true,
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Um terreno quadrado tem área x² + 8x + 16. Quanto mede o lado?",
    pista: "Área do quadrado é lado². Então a expressão precisa ser um quadrado perfeito.",
    revelacao: "x² + 8x + 16 = (x + 4)². Logo o lado é x + 4 — fatoração resolvendo geometria.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² + 8x + 16",
      passos: [
        { expr: "√x² = x", explica: "Raiz do primeiro termo.", status: "neutro" },
        { expr: "√16 = 4", explica: "Raiz do último termo.", status: "neutro" },
        { expr: "2 · x · 4 = 8x ✓", explica: "Confere com o termo do meio.", status: "ok" },
        {
          expr: "x² + 8x + 16 = (x + 4)²",
          explica: "Trinômio quadrado perfeito.",
          status: "ok",
          professor:
            "Como a área do quadrado é lado², fatorar a área é literalmente descobrir a medida do lado. Álgebra e geometria são a mesma matemática vista de dois ângulos.",
        },
      ],
      fatorada: "Lado = x + 4",
    },
  },
  momento04_explicacao: {
    titulo: "Combos: quando duas unidades se encontram",
    etapas: [
      {
        texto: "Fatoração + Geometria: da área ao lado.",
        exemploReal: {
          contexto: "Uma sala quadrada tem área x² + 12x + 36 m². Qual o lado e o perímetro?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x² + 12x + 36",
            passos: [
              { expr: "√x² = x · √36 = 6", explica: "Raízes dos extremos.", status: "neutro" },
              { expr: "2 · x · 6 = 12x ✓", explica: "É TQP.", status: "ok" },
              { expr: "Área = (x + 6)² → lado = x + 6", explica: "", status: "ok" },
              {
                expr: "Perímetro = 4 · (x + 6) = 4x + 24",
                explica: "Quatro lados iguais.",
                status: "ok",
                professor:
                  "Note que a área é de 2º grau (m²) e o perímetro é de 1º grau (m). O grau da expressão já indica se você está lidando com comprimento ou com área.",
              },
            ],
            fatorada: "Lado = x + 6 · Perímetro = 4x + 24",
          },
          destaque: "U3 + U7 juntas.",
        },
      },
      {
        texto: "Volume + Porcentagem: capacidade e ocupação.",
        exemploReal: {
          contexto: "Uma caixa d'água de 2 m × 1,5 m × 1 m está com 60% da capacidade.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = 2 · 1,5 · 1",
            passos: [
              { expr: "V = 3 m³", explica: "Capacidade total.", status: "ok" },
              { expr: "3 m³ = 3000 L", explica: "1 m³ = 1000 L.", status: "neutro" },
              { expr: "60% de 3000 = 0,6 · 3000", explica: "Fator multiplicativo.", status: "neutro" },
              { expr: "= 1800 L", explica: "Água presente.", status: "ok" },
            ],
            fatorada: "1800 litros na caixa",
          },
          destaque: "U5 + U7 juntas.",
        },
      },
      {
        texto: "Contagem + Probabilidade: primeiro conte o total, depois divida.",
        exemploReal: {
          contexto: "Uma senha de 2 dígitos (0 a 9). Qual a chance de acertar de primeira?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Senha: _ _",
            passos: [
              { expr: "Total = 10 · 10 = 100", explica: "Princípio multiplicativo.", status: "neutro" },
              { expr: "Favoráveis = 1", explica: "Só uma senha é a certa.", status: "neutro" },
              {
                expr: "P = 1/100 = 1%",
                explica: "",
                status: "ok",
                professor:
                  "Repare a ordem: contagem primeiro, probabilidade depois. Sem saber o total de casos possíveis, não existe probabilidade.",
              },
            ],
            fatorada: "P = 1%",
          },
          destaque: "Conte, depois divida.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado:
      "🤝 Nós fazemos: um retângulo tem área x² − 9. Fatore e descubra as expressões dos lados.",
    resposta: "(x + 3)(x − 3)",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x² − 9",
      passos: [
        { expr: "x² − 9 = x² − 3²", explica: "Escrevo como diferença de quadrados.", status: "neutro" },
        { expr: "a² − b² = (a + b)(a − b)", explica: "Fórmula.", status: "neutro" },
        {
          expr: "x² − 9 = (x + 3)(x − 3)",
          explica: "Lados do retângulo.",
          status: "ok",
          professor:
            "Como a área do retângulo é base × altura, os dois fatores são exatamente as medidas dos lados. Para o problema fazer sentido, é preciso x > 3, senão um dos lados seria negativo.",
        },
      ],
      fatorada: "Lados: (x + 3) e (x − 3)",
    },
    passos: ["Reconheça a diferença de quadrados.", "Aplique (a+b)(a−b).", "Lados: x+3 e x−3."],
  },
  momento06_praticaGuiada: {
    enunciado: "💪 Você faz: desenvolva (x + 5)².",
    dica: "Quadrado do 1º + 2 · 1º · 2º + quadrado do 2º.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(x + 5)²",
      passos: [
        { expr: "x²", explica: "Quadrado do primeiro.", status: "neutro" },
        { expr: "2 · x · 5 = 10x", explica: "Dobro do produto.", status: "neutro" },
        { expr: "5² = 25", explica: "Quadrado do segundo.", status: "neutro" },
        { expr: "= x² + 10x + 25", explica: "", status: "ok" },
      ],
      fatorada: "x² + 10x + 25",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "(x + 5)² =",
      opcoes: [{ nome: "x²+10x+25" }, { nome: "x²+25" }, { nome: "x²+5x+25" }],
      respostaCerta: "x²+10x+25",
      feedbackAcerto: "🎯 Não esqueceu o 2ab.",
      feedbackErro: "Falta o termo do meio: 2 · x · 5 = 10x.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Resolva o sistema: (I) x + y = 10 e (II) x − y = 4. Quanto vale x?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x + y = 10 · x − y = 4",
      passos: [
        { expr: "Somando (I) + (II): 2x = 14", explica: "O y cancela.", status: "neutro" },
        { expr: "x = 14 ÷ 2 = 7", explica: "", status: "ok" },
        { expr: "y = 10 − 7 = 3", explica: "Volto na equação (I).", status: "ok" },
      ],
      fatorada: "x = 7 · y = 3",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "7" }, { nome: "3" }, { nome: "5" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯 Método da adição.",
      feedbackErro: "Some as duas equações: 2x = 14, logo x = 7. (3 é o valor de y.)",
    },
  },
  momento08_aplicacao: {
    contexto:
      "🌎 Na vida real: um terreno quadrado tem área x² + 12x + 36 m². O dono quer cercá-lo com tela.",
    problema: "Qual a expressão do lado do terreno?",
    visualMat: {
      tipo: "figuraPlana",
      forma: "quadrado",
      medidasLados: ["x + 6", "x + 6", "x + 6", "x + 6"],
      mostrarAngulos: true,
      legenda: "Terreno quadrado: área (x + 6)² = x² + 12x + 36 m².",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Lado =",
      opcoes: [{ nome: "x + 6" }, { nome: "x + 12" }, { nome: "x + 36" }],
      respostaCerta: "x + 6",
      feedbackAcerto: "🎯 Trinômio quadrado perfeito: (x + 6)².",
      feedbackErro: "Tire a raiz dos extremos: √x² = x e √36 = 6. Confira: 2 · x · 6 = 12x.",
    },
  },
  momento09_revisao: {
    pontos: [
      "As 7 unidades formam uma Oficina: cada problema pede a ferramenta certa.",
      "Reconheça padrões ANTES de calcular.",
      "Área é 2º grau; perímetro é 1º grau; volume é 3º grau.",
      "Contagem vem antes da probabilidade.",
      "Você está pronto para o 9º ano.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Fator comum de 4x + 8:", opcoes: ["4(x+2)", "2(x+4)", "x+2"], correta: 0, feedbackAcerto: "🎉 MDC = 4.", feedbackErro: "O maior fator comum entre 4 e 8 é 4." },
      { pergunta: "(x − 2)² =", opcoes: ["x²−4x+4", "x²−4", "x²+4x+4"], correta: 0, feedbackAcerto: "🎉 Meio negativo.", feedbackErro: "Quadrado da diferença: o termo do meio fica −4x." },
      { pergunta: "Volume do cubo de aresta 4 cm:", opcoes: ["64 cm³", "16 cm³", "12 cm³"], correta: 0, feedbackAcerto: "🎉 4³.", feedbackErro: "4 · 4 · 4 = 64." },
      { pergunta: "Média de 2, 4, 6 e 8:", opcoes: ["5", "4", "6"], correta: 0, feedbackAcerto: "🎉 20 ÷ 4.", feedbackErro: "Some 20 e divida por 4." },
      { pergunta: "P de sair par num dado:", opcoes: ["1/2", "1/6", "1/3"], correta: 0, feedbackAcerto: "🎉 3 em 6.", feedbackErro: "Pares: 2, 4 e 6 → 3/6 = 1/2." },
      { pergunta: "Área do triângulo b = 10, h = 4:", opcoes: ["20", "40", "14"], correta: 0, feedbackAcerto: "🎉 40 ÷ 2.", feedbackErro: "Não esqueça o ÷ 2." },
      { pergunta: "3 camisas e 5 calças: quantos looks?", opcoes: ["15", "8", "35"], correta: 0, feedbackAcerto: "🎉 3 · 5.", feedbackErro: "Etapas independentes se multiplicam." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma da Oficina Algébrica",
    materiais: ["Papel", "Caneta", "Régua"],
    passos: [
      "Escreva o diploma: '{NOME} — Mestre da Oficina Algébrica do 8º ano'.",
      "Liste as 7 ferramentas que você aprendeu, com um exemplo de cada.",
      "Escolha a que achou mais difícil e explique-a para alguém da família.",
      "Assine, date e pendure na parede.",
    ],
    registro: "📸 Foto do diploma assinado.",
  },
  recompensa: { xp: 500, moedas: 250, medalha: "Mestre da Oficina Algébrica" },
};
