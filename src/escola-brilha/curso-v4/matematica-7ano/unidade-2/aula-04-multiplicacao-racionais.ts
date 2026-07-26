import type { AulaV4 } from "../../types";

/** Aula 04 · U2 — Multiplicação e divisão de racionais. */
export const aula04_multiplicacaoRacionais: AulaV4 = {
  slug: "u2-04-multiplicacao-racionais",
  titulo: "Multiplicar e Dividir Racionais",
  iconeTrilha: "✳️",
  bncc: ["EF07MA08"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Aqui NÃO precisa de MMC",
    historia:
      "{NOME}, boa notícia: multiplicar frações é mais fácil que somar. Não precisa de MMC. E dividir é ainda mais rápido — basta virar a segunda fração de cabeça para baixo.",
  },

  momento02_exploracao: {
    instrucao: "Duas regras curtas resolvem tudo.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Multiplicar e dividir",
        cabecalhos: ["Operação", "Regra", "Exemplo"],
        linhas: [
          { rotulo: "1", valores: ["a/b · c/d", "numerador × numerador, denominador × denominador", "2/3 · 4/5 = 8/15"] },
          { rotulo: "2", valores: ["a/b ÷ c/d", "conserva a 1ª e multiplica pelo INVERSO da 2ª", "2/3 ÷ 4/5 = 2/3 · 5/4"] },
          { rotulo: "3", valores: ["decimal × decimal", "multiplica sem vírgula e conta as casas", "0,3 · 0,4 = 0,12"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Dividir por uma fração é multiplicar pelo inverso dela. Inverso de 4/5 é 5/4." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que 1/2 ÷ 1/4 dá 2, um número MAIOR que os dois?",
    pista: "A pergunta real é: quantos quartos cabem em meia unidade?",
    revelacao: "Cabem 2 quartos em 1/2. Dividir por número menor que 1 sempre AUMENTA o resultado.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1/2 ÷ 1/4",
      passos: [
        { expr: "Pergunta: quantos 1/4 cabem em 1/2?", explica: "Sentido da divisão.", status: "neutro", professor: "Dividir é medir: quantas vezes o divisor cabe no dividendo. Meia pizza comporta 2 fatias de um quarto." },
        { expr: "= 1/2 · 4/1", explica: "Multiplico pelo inverso.", status: "ok" },
        { expr: "= 4/2", explica: "Numeradores e denominadores.", status: "ok" },
        { expr: "= 2", explica: "Resultado.", status: "ok", professor: "Nada estranho: quando o divisor é menor que 1, o quociente fica maior que o dividendo." },
      ],
      fatorada: "1/2 ÷ 1/4 = 2",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Multiplicar, simplificar em cruz e dividir",
    etapas: [
      {
        texto: "Multiplicação: multiplique numerador por numerador e denominador por denominador. Depois simplifique.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "3/4 · 2/9",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3/4 · 2/9",
            passos: [
              { expr: "Numeradores: 3 · 2 = 6", explica: "Em cima.", status: "neutro" },
              { expr: "Denominadores: 4 · 9 = 36", explica: "Embaixo.", status: "ok" },
              { expr: "= 6/36", explica: "Resultado bruto.", status: "ok" },
              { expr: "MDC(6, 36) = 6 → 1/6", explica: "Simplifico.", status: "ok", professor: "Dá para simplificar ANTES: o 3 com o 9 (vira 1 e 3) e o 2 com o 4 (vira 1 e 2). Sobra 1/(2·3) = 1/6. Mesmo resultado com números menores." },
            ],
            fatorada: "= 1/6",
          },
          destaque: "Simplificar antes deixa a conta menor.",
        },
      },
      {
        texto: "Divisão: conserve a primeira fração e multiplique pelo inverso da segunda.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "5/6 ÷ 2/3",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "5/6 ÷ 2/3",
            passos: [
              { expr: "= 5/6 · 3/2", explica: "Inverto a segunda.", status: "neutro" },
              { expr: "= 15/12", explica: "Multiplico.", status: "ok" },
              { expr: "MDC(15, 12) = 3", explica: "Simplifico.", status: "ok" },
              { expr: "= 5/4", explica: "Irredutível.", status: "ok", professor: "5/4 = 1,25. Confere: 5/6 ≈ 0,833 dividido por 2/3 ≈ 0,667 dá aproximadamente 1,25." },
            ],
            fatorada: "= 5/4",
          },
          destaque: "Só a SEGUNDA fração vira de cabeça para baixo.",
        },
      },
      {
        texto: "Decimais: multiplique como inteiros e conte quantas casas decimais existem no total.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "1,4 · 0,25",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1,4 · 0,25",
            passos: [
              { expr: "Ignoro vírgulas: 14 · 25 = 350", explica: "Multiplicação inteira.", status: "neutro" },
              { expr: "Casas decimais: 1 + 2 = 3", explica: "1,4 tem 1 e 0,25 tem 2.", status: "ok", professor: "Some as casas dos DOIS fatores. Depois ande com a vírgula esse total, da direita para a esquerda." },
              { expr: "350 → 0,350", explica: "Ando 3 casas.", status: "ok" },
              { expr: "= 0,35", explica: "Zero final pode sair.", status: "ok" },
            ],
            fatorada: "= 0,35",
          },
          destaque: "Some as casas dos dois fatores.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: 3/8 ÷ 9/4.",
    resposta: "1/6",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3/8 ÷ 9/4",
      passos: [
        { expr: "= 3/8 · 4/9", explica: "Multiplico pelo inverso.", status: "neutro" },
        { expr: "Simplifico 3 com 9 → 1 e 3", explica: "Corte em cruz.", status: "ok", professor: "Posso simplificar qualquer numerador com qualquer denominador antes de multiplicar." },
        { expr: "Simplifico 4 com 8 → 1 e 2", explica: "Outro corte.", status: "ok" },
        { expr: "= 1/(2·3) = 1/6", explica: "Multiplico o que sobrou.", status: "ok" },
      ],
      fatorada: "= 1/6",
      legenda: "Brilha resolve",
    },
    passos: [
      "Dividir por 9/4 é multiplicar por 4/9.",
      "Simplifico 3 com 9: viram 1 e 3.",
      "Simplifico 4 com 8: viram 1 e 2.",
      "Sobra 1/(2·3) = 1/6.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 2/5 · 3/4 = ?",
    dica: "Multiplique reto: 2·3 em cima, 5·4 embaixo. Depois simplifique.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2/5 · 3/4",
      passos: [
        { expr: "= 6/20", explica: "2·3 e 5·4.", status: "neutro" },
        { expr: "÷ 2 em cima e embaixo", explica: "Simplifico.", status: "ok" },
      ],
      fatorada: "= 3/10",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3/10" }, { nome: "6/20" }, { nome: "5/9" }],
      respostaCerta: "3/10",
      feedbackAcerto: "🎯 6/20 simplificado é 3/10.",
      feedbackErro: "6/20 é o resultado bruto, mas a resposta precisa ficar irredutível: 3/10. E 5/9 seria somar, não multiplicar.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 4/7 ÷ 2/3 = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4/7 ÷ 2/3",
      passos: [
        { expr: "= 4/7 · 3/2", explica: "Inverto a segunda.", status: "neutro" },
        { expr: "= 12/14", explica: "Multiplico.", status: "ok" },
        { expr: "÷ 2", explica: "Simplifico.", status: "ok" },
      ],
      fatorada: "= 6/7",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6/7" }, { nome: "8/21" }, { nome: "12/14" }],
      respostaCerta: "6/7",
      feedbackAcerto: "🎯 12/14 simplificado é 6/7.",
      feedbackErro: "8/21 seria multiplicar em vez de dividir. Inverta a segunda: 4/7 · 3/2 = 12/14 = 6/7.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma fita de 3/4 de metro será cortada em pedaços de 1/8 de metro.",
    problema: "Quantos pedaços saem da fita?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3/4 ÷ 1/8",
      passos: [
        { expr: "Quantos 1/8 cabem em 3/4?", explica: "É uma divisão.", status: "neutro" },
        { expr: "= 3/4 · 8/1", explica: "Multiplico pelo inverso.", status: "ok" },
        { expr: "= 24/4", explica: "Multiplico.", status: "ok" },
        { expr: "= 6", explica: "Divisão exata.", status: "ok", professor: "Confere pelo desenho: 3/4 = 6/8, e cada pedaço é 1/8. Logo saem exatamente 6 pedaços." },
      ],
      fatorada: "Saem 6 pedaços",
      legenda: "Aplicação — cortar a fita",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6 pedaços" }, { nome: "3 pedaços" }, { nome: "32 pedaços" }],
      respostaCerta: "6 pedaços",
      feedbackAcerto: "🎯 3/4 = 6/8, então cabem 6 pedaços de 1/8.",
      feedbackErro: "Divida: 3/4 ÷ 1/8 = 3/4 · 8 = 24/4 = 6 pedaços.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Multiplicação: reto em cima e reto embaixo — sem MMC.",
      "Divisão: conserva a 1ª e multiplica pelo inverso da 2ª.",
      "Simplificar antes deixa a conta menor.",
      "Decimais: some as casas dos dois fatores.",
      "Dividir por número menor que 1 aumenta o resultado.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/3 · 3/5 =", opcoes: ["1/5", "3/8", "4/8"], correta: 0, feedbackAcerto: "🎉 3/15 simplificado é 1/5.", feedbackErro: "Multiplique reto: 1·3 = 3 e 3·5 = 15 → 3/15 = 1/5." },
      { pergunta: "2/3 ÷ 1/2 =", opcoes: ["4/3", "1/3", "2/6"], correta: 0, feedbackAcerto: "🎉 2/3 · 2/1 = 4/3.", feedbackErro: "Inverta a segunda: 2/3 · 2 = 4/3. Como divide por menos de 1, o resultado tem que aumentar." },
      { pergunta: "0,2 · 0,3 =", opcoes: ["0,06", "0,6", "0,5"], correta: 0, feedbackAcerto: "🎉 2·3 = 6 e 2 casas decimais → 0,06.", feedbackErro: "2·3 = 6, mas há 1 + 1 = 2 casas decimais no total → 0,06, não 0,6." },
      { pergunta: "5/6 · 3/10 =", opcoes: ["1/4", "8/16", "15/16"], correta: 0, feedbackAcerto: "🎉 15/60 simplificado é 1/4.", feedbackErro: "5·3 = 15 e 6·10 = 60 → 15/60 = 1/4." },
      { pergunta: "Meia pizza dividida entre 4 pessoas, cada uma recebe:", opcoes: ["1/8", "1/2", "2/4"], correta: 0, feedbackAcerto: "🎉 1/2 ÷ 4 = 1/2 · 1/4 = 1/8.", feedbackErro: "Dividir por 4 é multiplicar por 1/4: 1/2 · 1/4 = 1/8 da pizza para cada um." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Dobrar e dividir a receita",
    materiais: ["Receita", "Papel", "Caneta"],
    passos: [
      "Pegue uma receita e calcule METADE de cada ingrediente (multiplicando por 1/2).",
      "Depois calcule para o TRIPLO de pessoas (multiplicando por 3).",
      "Escreva todas as multiplicações de fração com o resultado simplificado.",
    ],
    registro: "📸 Foto das duas versões da receita.",
  },
  recompensa: { xp: 210, moedas: 105, medalha: "Multiplicador de Frações" },
};
