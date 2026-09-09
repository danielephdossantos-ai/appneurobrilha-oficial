import type { AulaV4 } from "../../types";

/** Aula 04 · U4 — Equações com parênteses e denominadores. */
export const aula04_equacoesParentesesFracoes: AulaV4 = {
  slug: "u4-04-equacoes-parenteses-fracoes",
  titulo: "Equações Difíceis Ficam Fáceis",
  iconeTrilha: "🧮",
  bncc: ["EF07MA18"],
  duracaoMin: 32,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Primeiro limpar, depois resolver",
    historia:
      "{NOME}, quando a equação chega cheia de parênteses e frações, ninguém resolve de cabeça. O truque dos bons alunos é o mesmo dos bons cozinheiros: primeiro limpar a bancada. Tire os parênteses, elimine os denominadores — e o que sobra é uma equação simples como as de ontem.",
  },

  momento02_exploracao: {
    instrucao: "Compare a equação suja e a equação limpa. É a mesma equação.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Limpando a equação",
        cabecalhos: ["Forma original", "Depois de limpar", "O que foi feito"],
        linhas: [
          { rotulo: "1", valores: ["3(x + 2) = 18", "3x + 6 = 18", "distributiva"] },
          { rotulo: "2", valores: ["x/2 = 7", "x = 14", "× 2 nos dois lados"] },
          { rotulo: "3", valores: ["x/3 + x/6 = 3", "2x + x = 18", "× 6 (MMC) nos dois lados"] },
          { rotulo: "4", valores: ["2(x − 1) = x/2", "4(x − 1) = x", "× 2 nos dois lados"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Para eliminar denominadores, multiplique os DOIS lados pelo MMC dos denominadores. A equação muda de aparência, mas a raiz continua a mesma." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Multiplicar tudo pelo MMC muda a resposta da equação?",
    pista: "Resolva x/2 + x/4 = 6 de dois jeitos: com frações e multiplicando por 4.",
    revelacao: "Não muda: nos dois caminhos a raiz é x = 8. O MMC apenas troca frações por números inteiros.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x/2 + x/4 = 6",
      passos: [
        { expr: "MMC(2, 4) = 4", explica: "Menor múltiplo comum.", status: "neutro", professor: "O MMC precisa ser divisível por todos os denominadores. Assim nenhuma fração sobra." },
        { expr: "4 · (x/2) + 4 · (x/4) = 4 · 6", explica: "Multiplico CADA termo por 4.", status: "ok", professor: "Multiplicar 'os dois lados' significa multiplicar cada termo. Esquecer o termo da direita é o erro mais frequente." },
        { expr: "2x + x = 24", explica: "As frações sumiram.", status: "ok" },
        { expr: "3x = 24 → x = 8", explica: "Resolvo.", status: "ok" },
        { expr: "Verificação: 8/2 + 8/4 = 4 + 2 = 6 ✓", explica: "Confere.", status: "ok" },
      ],
      fatorada: "x = 8",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Três limpezas essenciais",
    etapas: [
      {
        texto: "PARÊNTESES: aplique a distributiva antes de qualquer outra coisa.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Resolver 3(x − 2) = 12",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3(x − 2) = 12",
            passos: [
              { expr: "3x − 6 = 12", explica: "Distributiva.", status: "neutro" },
              { expr: "3x = 18", explica: "Somo 6 dos dois lados.", status: "ok" },
              { expr: "x = 6", explica: "Divido por 3.", status: "ok" },
              { expr: "Verificação: 3(6 − 2) = 3 · 4 = 12 ✓", explica: "Confere.", status: "ok", professor: "Havia um atalho: dividir logo os dois lados por 3, obtendo x − 2 = 4. Os dois caminhos levam a x = 6." },
            ],
            fatorada: "x = 6",
          },
          destaque: "Parêntese sai pela distributiva.",
        },
      },
      {
        texto: "PARÊNTESES DOS DOIS LADOS: distribua tudo, depois separe letras e números.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Resolver 2(x + 3) = 4(x − 1)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2(x + 3) = 4(x − 1)",
            passos: [
              { expr: "2x + 6 = 4x − 4", explica: "Distribuo dos dois lados.", status: "neutro" },
              { expr: "6 + 4 = 4x − 2x", explica: "Letras de um lado, números do outro.", status: "ok", professor: "Levei os x para o lado do maior coeficiente para trabalhar com 2x positivo em vez de −2x." },
              { expr: "10 = 2x", explica: "Reduzo.", status: "ok" },
              { expr: "x = 5", explica: "Divido por 2.", status: "ok" },
              { expr: "Verificação: 2 · 8 = 16 e 4 · 4 = 16 ✓", explica: "Confere.", status: "ok" },
            ],
            fatorada: "x = 5",
          },
          destaque: "Distribua tudo antes de transportar termos.",
        },
      },
      {
        texto: "DENOMINADORES: multiplique todos os termos pelo MMC dos denominadores.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Resolver (x + 1)/3 = (x − 3)/2",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(x + 1)/3 = (x − 3)/2",
            passos: [
              { expr: "MMC(3, 2) = 6", explica: "Denominadores.", status: "neutro" },
              { expr: "6 · (x+1)/3 = 6 · (x−3)/2", explica: "Multiplico os dois lados.", status: "ok" },
              { expr: "2(x + 1) = 3(x − 3)", explica: "Frações eliminadas.", status: "ok", professor: "6 ÷ 3 = 2 e 6 ÷ 2 = 3: cada lado recebe o fator que sobra depois de cancelar o denominador." },
              { expr: "2x + 2 = 3x − 9", explica: "Distributiva.", status: "ok" },
              { expr: "2 + 9 = 3x − 2x", explica: "Organizo.", status: "ok" },
              { expr: "x = 11", explica: "Raiz.", status: "ok" },
              { expr: "Verificação: 12/3 = 4 e 8/2 = 4 ✓", explica: "Confere.", status: "ok" },
            ],
            fatorada: "x = 11",
          },
          destaque: "Numerador com mais de um termo pede parênteses ao multiplicar.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: 5(x − 1) = 3x + 7.",
    resposta: "x = 6",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5(x − 1) = 3x + 7",
      passos: [
        { expr: "5x − 5 = 3x + 7", explica: "Distributiva.", status: "neutro" },
        { expr: "5x − 3x = 7 + 5", explica: "Separo letras e números.", status: "ok" },
        { expr: "2x = 12", explica: "Reduzo.", status: "ok" },
        { expr: "x = 6", explica: "Divido por 2.", status: "ok" },
        { expr: "Verificação: 5(6 − 1) = 25 e 3·6 + 7 = 25 ✓", explica: "Confere.", status: "ok", professor: "Quando um termo troca de lado, ele troca de sinal — é o mesmo que somar ou subtrair nos dois lados, só escrito de forma rápida." },
      ],
      fatorada: "x = 6",
      legenda: "Brilha resolve",
    },
    passos: ["Distribuo o 5.", "Levo os x para a esquerda e os números para a direita.", "2x = 12.", "x = 6 e verifico."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: resolva 2(x + 4) = 14.",
    dica: "Distribua o 2 ou divida os dois lados por 2 — os dois caminhos funcionam.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2(x + 4) = 14",
      passos: [
        { expr: "2x + 8 = 14", explica: "Distributiva.", status: "neutro" },
        { expr: "2x = 6", explica: "Tiro 8 dos dois lados.", status: "ok" },
        { expr: "x = 3", explica: "Divido por 2.", status: "ok" },
      ],
      fatorada: "x = 3",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x = 3" }, { nome: "x = 7" }, { nome: "x = 11" }],
      respostaCerta: "x = 3",
      feedbackAcerto: "🎯 2(3 + 4) = 2 · 7 = 14.",
      feedbackErro: "x = 3 é a resposta: 2x + 8 = 14 leva a 2x = 6. O valor 7 é o conteúdo do parêntese, não o x.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: resolva x/4 = 5.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x/4 = 5",
      passos: [
        { expr: "4 · (x/4) = 4 · 5", explica: "Multiplico os dois lados por 4.", status: "neutro" },
        { expr: "x = 20", explica: "Raiz.", status: "ok" },
      ],
      fatorada: "x = 20",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x = 20" }, { nome: "x = 1,25" }, { nome: "x = 9" }],
      respostaCerta: "x = 20",
      feedbackAcerto: "🎯 20 ÷ 4 = 5.",
      feedbackErro: "O 4 está dividindo, então ele sai multiplicando: 5 · 4 = 20. Dividir de novo daria 1,25.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um reservatório está com 1/3 da capacidade. Depois de receber 250 litros, ele fica com metade da capacidade.",
    problema: "Qual é a capacidade total do reservatório?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "c/3 + 250 = c/2",
      passos: [
        { expr: "c = capacidade total", explica: "Nomeio a incógnita.", status: "neutro" },
        { expr: "c/3 + 250 = c/2", explica: "Monto a equação.", status: "ok" },
        { expr: "MMC(3, 2) = 6", explica: "Escolho o multiplicador.", status: "ok" },
        { expr: "2c + 1 500 = 3c", explica: "Multiplico tudo por 6.", status: "ok", professor: "6 · 250 = 1 500. O termo sem fração também precisa ser multiplicado — esquecê-lo destrói a igualdade." },
        { expr: "1 500 = 3c − 2c", explica: "Organizo.", status: "ok" },
        { expr: "c = 1 500", explica: "Capacidade total.", status: "ok" },
        { expr: "Verificação: 1500/3 = 500; 500 + 250 = 750 = 1500/2 ✓", explica: "Confere.", status: "ok" },
      ],
      fatorada: "Capacidade: 1 500 litros",
      legenda: "Aplicação — reservatório",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha a capacidade:",
      opcoes: [{ nome: "1 500 L" }, { nome: "750 L" }, { nome: "3 000 L" }],
      respostaCerta: "1 500 L",
      feedbackAcerto: "🎯 Um terço é 500 L e metade é 750 L: a diferença é exatamente os 250 L acrescentados.",
      feedbackErro: "750 L é o volume DEPOIS de encher, não a capacidade. A capacidade é o dobro disso: 1 500 L.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Primeiro limpe: distributiva nos parênteses.",
      "Elimine denominadores multiplicando TODOS os termos pelo MMC.",
      "Numerador com dois termos exige parênteses ao multiplicar.",
      "Termo que troca de lado troca de sinal.",
      "Sempre verifique a raiz na equação ORIGINAL, com frações e tudo.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2(x + 5) = 16 tem raiz:", opcoes: ["3", "8", "11"], correta: 0, feedbackAcerto: "🎉 2x + 10 = 16 → 2x = 6 → x = 3.", feedbackErro: "Distribua: 2x + 10 = 16. Tirando 10, fica 2x = 6, logo x = 3." },
      { pergunta: "x/5 = 6 tem raiz:", opcoes: ["30", "1,2", "11"], correta: 0, feedbackAcerto: "🎉 30 ÷ 5 = 6.", feedbackErro: "O 5 divide o x, então multiplique os dois lados por 5: x = 30." },
      { pergunta: "Para eliminar os denominadores de x/4 + x/6, multiplicamos por:", opcoes: ["12", "10", "24"], correta: 0, feedbackAcerto: "🎉 MMC(4, 6) = 12.", feedbackErro: "Não é a soma nem o produto: é o MMC. Os múltiplos comuns de 4 e 6 começam em 12." },
      { pergunta: "3(x − 1) = 2x + 4 tem raiz:", opcoes: ["7", "5", "1"], correta: 0, feedbackAcerto: "🎉 3x − 3 = 2x + 4 → x = 7.", feedbackErro: "Distribua: 3x − 3 = 2x + 4. Levando x para a esquerda e números para a direita: x = 7." },
      { pergunta: "Em (x + 2)/3 = 4, o primeiro passo correto é:", opcoes: ["multiplicar os dois lados por 3", "somar 3 dos dois lados", "dividir os dois lados por 3"], correta: 0, feedbackAcerto: "🎉 x + 2 = 12 e então x = 10.", feedbackErro: "O 3 está dividindo a expressão inteira, então multiplique os dois lados por 3: x + 2 = 12, logo x = 10." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A receita dobrada",
    materiais: ["Uma receita de família", "Papel", "Caneta"],
    passos: [
      "Escolha um ingrediente medido em fração de xícara.",
      "Escreva uma equação do tipo x/2 = quantidade para descobrir a medida da receita dobrada.",
      "Resolva a equação e confira medindo de verdade.",
    ],
    registro: "📸 Foto da receita com a equação escrita ao lado.",
  },
  recompensa: { xp: 235, moedas: 120, medalha: "Domador de Equações" },
};
