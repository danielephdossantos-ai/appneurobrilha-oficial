import type { AulaV4 } from "../../types";

/** Aula 01 · U4 — Linguagem algébrica: traduzir português em símbolos e calcular valor numérico. */
export const aula01_linguagemAlgebrica: AulaV4 = {
  slug: "u4-01-linguagem-algebrica",
  titulo: "A Língua da Álgebra",
  iconeTrilha: "🔤",
  bncc: ["EF07MA13", "EF07MA14"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "A letra que guarda o número",
    historia:
      "{NOME}, no laboratório do Brilha existe um cofre onde o número ainda não foi revelado. Em vez de deixar o espaço em branco, os matemáticos escrevem uma letra: x. A letra não é mistério — é um número esperando ser descoberto. Hoje você aprende a traduzir frases do português para essa língua nova.",
  },

  momento02_exploracao: {
    instrucao: "Toda frase matemática pode virar uma expressão. Compare as duas colunas.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Português → Álgebra",
        cabecalhos: ["Frase", "Expressão", "Leitura"],
        linhas: [
          { rotulo: "1", valores: ["um número qualquer", "x", "o desconhecido"] },
          { rotulo: "2", valores: ["o dobro de um número", "2x", "2 · x"] },
          { rotulo: "3", valores: ["um número mais 5", "x + 5", "soma"] },
          { rotulo: "4", valores: ["a metade de um número", "x/2", "divisão por 2"] },
          { rotulo: "5", valores: ["o dobro de um número, mais 5", "2x + 5", "primeiro dobra, depois soma"] },
          { rotulo: "6", valores: ["o dobro da soma de um número com 5", "2(x + 5)", "primeiro soma, depois dobra"] },
        ],
      },
      { tipo: "texto", texto: "⚠️ Repare nas linhas 5 e 6: as palavras mudaram pouco, mas o parêntese mudou tudo. Em 2x + 5 o 5 fica de fora; em 2(x + 5) o 5 também é dobrado." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se x = 4, as expressões 2x + 5 e 2(x + 5) dão o mesmo resultado?",
    pista: "Substitua o x por 4 nas duas e faça as contas respeitando a ordem das operações.",
    revelacao: "Não dão: 2x + 5 = 13 e 2(x + 5) = 18. O parêntese muda o que é multiplicado.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Testando x = 4",
      passos: [
        { expr: "2x + 5 = 2 · 4 + 5", explica: "Substituo o x por 4.", status: "neutro", professor: "Substituir é trocar a letra pelo número e manter o resto igual. A multiplicação escondida entre o 2 e o x reaparece." },
        { expr: "= 8 + 5 = 13", explica: "Multiplico antes de somar.", status: "ok" },
        { expr: "2(x + 5) = 2 · (4 + 5)", explica: "Substituo o x por 4.", status: "neutro" },
        { expr: "= 2 · 9 = 18", explica: "Parêntese primeiro.", status: "ok", professor: "Aqui o 5 entrou no parêntese, então ele também foi dobrado. Por isso o resultado é 5 unidades maior que o anterior... e mais precisamente 2·5 = 10 a mais no total dobrado." },
        { expr: "13 ≠ 18", explica: "Expressões diferentes.", status: "x" },
      ],
      fatorada: "O parêntese decide quem é multiplicado",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Escrever, ler e calcular expressões",
    etapas: [
      {
        texto: "VARIÁVEL é a letra que representa um número desconhecido ou que pode variar. COEFICIENTE é o número que multiplica a letra. TERMO INDEPENDENTE é o número sozinho.",
        exemploReal: {
          titulo: "🔎 Anatomia de uma expressão",
          contexto: "3x + 7",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3x + 7",
            passos: [
              { expr: "3 → coeficiente", explica: "Multiplica a variável.", status: "neutro" },
              { expr: "x → variável", explica: "O número desconhecido.", status: "neutro" },
              { expr: "7 → termo independente", explica: "Não depende de x.", status: "neutro", professor: "Quando não aparece número antes da letra, o coeficiente é 1: x significa 1x. E −x significa −1x." },
            ],
            fatorada: "3x + 7 = 3 · x + 7",
          },
          destaque: "Entre número e letra existe sempre uma multiplicação escondida.",
        },
      },
      {
        texto: "TRADUZIR: leia a frase inteira antes de escrever. Palavras como 'a soma de… com…' pedem parênteses.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "'O triplo da diferença entre um número e 4'",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Traduzindo a frase",
            passos: [
              { expr: "um número → x", explica: "Nomeio o desconhecido.", status: "neutro" },
              { expr: "a diferença entre um número e 4 → x − 4", explica: "Subtração na ordem da frase.", status: "ok", professor: "A ordem importa: 'a diferença entre x e 4' é x − 4, não 4 − x." },
              { expr: "o triplo dessa diferença → 3(x − 4)", explica: "A diferença inteira é triplicada.", status: "ok" },
            ],
            fatorada: "3(x − 4)",
          },
          destaque: "Se a frase triplica uma diferença inteira, o parêntese é obrigatório.",
        },
      },
      {
        texto: "VALOR NUMÉRICO: substituir a letra por um número e calcular. Use parênteses ao substituir números negativos.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Valor de 5x² − 2x para x = −3",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "5x² − 2x, com x = −3",
            passos: [
              { expr: "5 · (−3)² − 2 · (−3)", explica: "Substituo com parênteses.", status: "neutro", professor: "Sem parênteses, alguém escreveria −3² e calcularia −9. Com parênteses, (−3)² = +9, que é o correto aqui." },
              { expr: "= 5 · 9 − 2 · (−3)", explica: "Potência primeiro.", status: "ok" },
              { expr: "= 45 + 6", explica: "Menos com menos dá mais.", status: "ok" },
              { expr: "= 51", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "Valor numérico = 51",
          },
          destaque: "Substituiu negativo? Coloque parênteses.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: qual o valor de 4a − b para a = 3 e b = −2?",
    resposta: "14",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4a − b, com a = 3 e b = −2",
      passos: [
        { expr: "4 · 3 − (−2)", explica: "Substituo as duas letras.", status: "neutro" },
        { expr: "= 12 − (−2)", explica: "Multiplico primeiro.", status: "ok" },
        { expr: "= 12 + 2", explica: "Subtrair um negativo é somar.", status: "ok", professor: "O sinal de menos da expressão encontra o menos do número: dois sinais negativos juntos resultam em soma." },
        { expr: "= 14", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "4a − b = 14",
      legenda: "Brilha resolve",
    },
    passos: ["Substituo a = 3 e b = −2 com parênteses.", "4 · 3 = 12.", "12 − (−2) = 12 + 2.", "Resultado 14."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: escreva em linguagem algébrica 'o dobro de um número menos 7'.",
    dica: "Aqui o 7 é tirado depois de dobrar. Não entra em parêntese.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Traduzindo",
      passos: [
        { expr: "um número → x", explica: "Nomeio.", status: "neutro" },
        { expr: "o dobro → 2x", explica: "Multiplico por 2.", status: "ok" },
        { expr: "menos 7 → 2x − 7", explica: "Subtraio no fim.", status: "ok" },
      ],
      fatorada: "2x − 7",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2x − 7" }, { nome: "2(x − 7)" }, { nome: "x² − 7" }],
      respostaCerta: "2x − 7",
      feedbackAcerto: "🎯 Dobra primeiro, tira 7 depois.",
      feedbackErro: "2(x − 7) seria 'o dobro da diferença entre um número e 7' — ali o 7 é tirado antes de dobrar. A frase dada dobra primeiro.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: qual o valor de 3x + 2 quando x = −4?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3x + 2, com x = −4",
      passos: [
        { expr: "3 · (−4) + 2", explica: "Substituo.", status: "neutro" },
        { expr: "= −12 + 2", explica: "Positivo vezes negativo dá negativo.", status: "ok" },
        { expr: "= −10", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "= −10",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−10" }, { nome: "−14" }, { nome: "10" }],
      respostaCerta: "−10",
      feedbackAcerto: "🎯 3 · (−4) = −12 e −12 + 2 = −10.",
      feedbackErro: "−14 aparece quando se soma −12 com −2. Mas o termo é +2, então −12 + 2 = −10.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um aplicativo de entrega cobra R$ 6,00 fixos mais R$ 2,50 por quilômetro rodado. Chamando de k a quantidade de quilômetros, o preço da corrida pode ser escrito como uma expressão.",
    problema: "Escreva a expressão do preço e calcule o valor de uma corrida de 8 km.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Preço = 6 + 2,50k",
      passos: [
        { expr: "Taxa fixa → 6", explica: "Não depende da distância.", status: "neutro", professor: "A taxa fixa é o termo independente: ela existe mesmo com k = 0." },
        { expr: "Por quilômetro → 2,50k", explica: "Depende de k.", status: "ok" },
        { expr: "P = 6 + 2,50k", explica: "Expressão do preço.", status: "ok" },
        { expr: "k = 8 → P = 6 + 2,50 · 8", explica: "Substituo.", status: "ok" },
        { expr: "= 6 + 20 = 26", explica: "Preço da corrida.", status: "ok" },
      ],
      fatorada: "Corrida de 8 km: R$ 26,00",
      legenda: "Aplicação — modelo de preço",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o preço de 8 km:",
      opcoes: [{ nome: "R$ 26,00" }, { nome: "R$ 20,00" }, { nome: "R$ 68,00" }],
      respostaCerta: "R$ 26,00",
      feedbackAcerto: "🎯 6 + 2,50 · 8 = 26.",
      feedbackErro: "R$ 20,00 esquece a taxa fixa de 6 reais. R$ 68,00 vem de multiplicar (6 + 2,50) por 8, o que somaria a taxa fixa em cada quilômetro.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Variável é letra que representa número; coeficiente multiplica a variável.",
      "Entre número e letra há multiplicação escondida: 3x = 3 · x.",
      "2x + 5 ≠ 2(x + 5): o parêntese muda quem é multiplicado.",
      "Valor numérico = substituir a letra e calcular na ordem correta.",
      "Ao substituir número negativo, sempre use parênteses.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "'O triplo de um número' se escreve:", opcoes: ["3x", "x + 3", "x³"], correta: 0, feedbackAcerto: "🎉 Triplo é multiplicar por 3.", feedbackErro: "x + 3 é 'um número mais 3' e x³ é o cubo. Triplo é 3 · x = 3x." },
      { pergunta: "Para x = 5, o valor de 2x − 3 é:", opcoes: ["7", "13", "4"], correta: 0, feedbackAcerto: "🎉 2 · 5 = 10 e 10 − 3 = 7.", feedbackErro: "Primeiro multiplique: 2 · 5 = 10. Depois subtraia 3: resultado 7." },
      { pergunta: "Na expressão 7y + 2, o coeficiente é:", opcoes: ["7", "2", "y"], correta: 0, feedbackAcerto: "🎉 O coeficiente é o número que multiplica a letra.", feedbackErro: "O 2 é o termo independente e y é a variável. Quem multiplica a letra é o 7." },
      { pergunta: "'O dobro da soma de um número com 3' é:", opcoes: ["2(x + 3)", "2x + 3", "2x · 3"], correta: 0, feedbackAcerto: "🎉 A soma inteira é dobrada, então precisa de parêntese.", feedbackErro: "Em 2x + 3 só o número é dobrado. Como a frase dobra a soma toda, escreve-se 2(x + 3)." },
      { pergunta: "Para x = −2, o valor de x² + 1 é:", opcoes: ["5", "−3", "3"], correta: 0, feedbackAcerto: "🎉 (−2)² = 4 e 4 + 1 = 5.", feedbackErro: "Cuidado: (−2)² = +4, porque negativo vezes negativo dá positivo. Somando 1, o resultado é 5." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A fórmula da nossa casa",
    materiais: ["Uma conta de casa (luz, água ou internet)", "Papel", "Caneta"],
    passos: [
      "Encontre na conta uma parte fixa e uma parte que varia com o consumo.",
      "Escreva a expressão do valor total usando uma letra para o consumo.",
      "Calcule quanto seria a conta se o consumo dobrasse.",
    ],
    registro: "📸 Foto da expressão escrita ao lado da conta.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Tradutor da Álgebra" },
};
