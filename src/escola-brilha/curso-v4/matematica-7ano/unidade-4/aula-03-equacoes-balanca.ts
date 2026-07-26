import type { AulaV4 } from "../../types";

/** Aula 03 · U4 — Equação do 1º grau: princípio da balança e verificação da raiz. */
export const aula03_equacoesBalanca: AulaV4 = {
  slug: "u4-03-equacoes-balanca",
  titulo: "A Balança da Igualdade",
  iconeTrilha: "⚖️",
  bncc: ["EF07MA15", "EF07MA16", "EF07MA18"],
  duracaoMin: 32,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O sinal de igual é uma balança",
    historia:
      "{NOME}, o sinal de = não significa 'a resposta é'. Ele significa 'os dois lados pesam o mesmo'. Se você tirar 3 de um prato, precisa tirar 3 do outro, senão a balança desequilibra. Toda a arte de resolver equações nasce dessa única ideia.",
  },

  momento02_exploracao: {
    instrucao: "Observe o que mantém a balança equilibrada.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Operações que preservam a igualdade",
        cabecalhos: ["Ação", "Nos dois lados?", "Continua igual?"],
        linhas: [
          { rotulo: "1", valores: ["somar 5", "sim", "Sim"] },
          { rotulo: "2", valores: ["subtrair 5", "sim", "Sim"] },
          { rotulo: "3", valores: ["multiplicar por 3", "sim", "Sim"] },
          { rotulo: "4", valores: ["dividir por 4", "sim (≠ 0)", "Sim"] },
          { rotulo: "5", valores: ["somar 5", "só de um lado", "Não"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Princípio da equivalência: qualquer operação feita nos DOIS lados mantém a igualdade verdadeira. Feita em um lado só, quebra tudo." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como isolar o x em 2x + 3 = 11 sem adivinhar?",
    pista: "Desfaça as operações na ordem inversa: primeiro o que soma, depois o que multiplica.",
    revelacao: "Tirando 3 dos dois lados e depois dividindo por 2 nos dois lados, sobra x = 4.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2x + 3 = 11",
      passos: [
        { expr: "2x + 3 − 3 = 11 − 3", explica: "Tiro 3 dos dois lados.", status: "neutro", professor: "Desfaço primeiro a soma porque ela é a última operação aplicada ao x. É como tirar o casaco antes da camisa." },
        { expr: "2x = 8", explica: "Balança ainda equilibrada.", status: "ok" },
        { expr: "2x ÷ 2 = 8 ÷ 2", explica: "Divido os dois lados por 2.", status: "ok" },
        { expr: "x = 4", explica: "Raiz da equação.", status: "ok" },
        { expr: "Verificação: 2 · 4 + 3 = 11 ✓", explica: "Confere.", status: "ok", professor: "Verificar não é opcional: substituir a raiz na equação original é a única prova de que a resposta está certa." },
      ],
      fatorada: "x = 4",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Resolver e verificar",
    etapas: [
      {
        texto: "EQUAÇÃO é uma igualdade com incógnita. RAIZ (ou solução) é o valor que torna a igualdade verdadeira.",
        exemploReal: {
          titulo: "🔎 Testando candidatos",
          contexto: "x + 7 = 12. O 5 é raiz? E o 4?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x + 7 = 12",
            passos: [
              { expr: "x = 5 → 5 + 7 = 12 ✓", explica: "Igualdade verdadeira.", status: "ok" },
              { expr: "x = 4 → 4 + 7 = 11 ≠ 12", explica: "Igualdade falsa.", status: "x", professor: "Uma equação do 1º grau tem exatamente uma raiz. Encontrada e verificada, o trabalho está fechado." },
            ],
            fatorada: "Raiz: x = 5",
          },
          destaque: "Raiz é o valor que faz a igualdade ficar verdadeira.",
        },
      },
      {
        texto: "OPERAÇÃO INVERSA: some se estava subtraindo, divida se estava multiplicando — sempre nos dois lados.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Resolver 5x − 8 = 22",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "5x − 8 = 22",
            passos: [
              { expr: "5x − 8 + 8 = 22 + 8", explica: "Somo 8 dos dois lados.", status: "neutro" },
              { expr: "5x = 30", explica: "Simplifico.", status: "ok" },
              { expr: "5x ÷ 5 = 30 ÷ 5", explica: "Divido por 5.", status: "ok" },
              { expr: "x = 6", explica: "Raiz.", status: "ok" },
              { expr: "Verificação: 5 · 6 − 8 = 22 ✓", explica: "Confere.", status: "ok" },
            ],
            fatorada: "x = 6",
          },
          destaque: "Desfaça a soma/subtração primeiro; a multiplicação/divisão por último.",
        },
      },
      {
        texto: "INCÓGNITA NOS DOIS LADOS: leve as letras para um lado e os números para o outro.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Resolver 7x − 4 = 3x + 12",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "7x − 4 = 3x + 12",
            passos: [
              { expr: "7x − 3x − 4 = 3x − 3x + 12", explica: "Tiro 3x dos dois lados.", status: "neutro", professor: "Escolho tirar o MENOR coeficiente de x para que o termo restante fique positivo — isso reduz erros de sinal." },
              { expr: "4x − 4 = 12", explica: "Simplifico.", status: "ok" },
              { expr: "4x = 16", explica: "Somo 4 dos dois lados.", status: "ok" },
              { expr: "x = 4", explica: "Divido por 4.", status: "ok" },
              { expr: "Verificação: 7·4 − 4 = 24 e 3·4 + 12 = 24 ✓", explica: "Os dois lados batem.", status: "ok" },
            ],
            fatorada: "x = 4",
          },
          destaque: "Letras de um lado, números do outro.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: 4x + 5 = 2x + 17.",
    resposta: "x = 6",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4x + 5 = 2x + 17",
      passos: [
        { expr: "4x − 2x + 5 = 17", explica: "Tiro 2x dos dois lados.", status: "neutro" },
        { expr: "2x + 5 = 17", explica: "Simplifico.", status: "ok" },
        { expr: "2x = 12", explica: "Tiro 5 dos dois lados.", status: "ok" },
        { expr: "x = 6", explica: "Divido por 2.", status: "ok" },
        { expr: "Verificação: 4·6 + 5 = 29 e 2·6 + 17 = 29 ✓", explica: "Confere.", status: "ok", professor: "Sempre que o problema envolver os dois lados, verifique nos DOIS: se um lado bater e o outro não, houve erro de sinal." },
      ],
      fatorada: "x = 6",
      legenda: "Brilha resolve",
    },
    passos: ["Tiro 2x dos dois lados.", "Tiro 5 dos dois lados.", "Divido por 2.", "Verifico substituindo x = 6."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: resolva x + 9 = 15.",
    dica: "Qual operação desfaz o +9? Aplique nos dois lados.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x + 9 = 15",
      passos: [
        { expr: "x + 9 − 9 = 15 − 9", explica: "Tiro 9 dos dois lados.", status: "neutro" },
        { expr: "x = 6", explica: "Raiz.", status: "ok" },
      ],
      fatorada: "x = 6",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x = 6" }, { nome: "x = 24" }, { nome: "x = 9" }],
      respostaCerta: "x = 6",
      feedbackAcerto: "🎯 6 + 9 = 15.",
      feedbackErro: "x = 24 vem de somar em vez de subtrair. Como o 9 está somando, ele sai subtraindo: 15 − 9 = 6.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: resolva 3x = 21.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3x = 21",
      passos: [
        { expr: "3x ÷ 3 = 21 ÷ 3", explica: "Divido os dois lados.", status: "neutro" },
        { expr: "x = 7", explica: "Raiz.", status: "ok" },
      ],
      fatorada: "x = 7",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x = 7" }, { nome: "x = 63" }, { nome: "x = 18" }],
      respostaCerta: "x = 7",
      feedbackAcerto: "🎯 3 · 7 = 21.",
      feedbackErro: "O 3 está multiplicando, então ele sai dividindo: 21 ÷ 3 = 7. Multiplicar daria 63, que é o caminho contrário.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Duas academias: a Alfa cobra R$ 80 de matrícula mais R$ 40 por mês; a Beta não cobra matrícula e cobra R$ 60 por mês.",
    problema: "Em quantos meses o gasto total será igual nas duas?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "80 + 40m = 60m",
      passos: [
        { expr: "Alfa: 80 + 40m", explica: "Matrícula mais mensalidades.", status: "neutro" },
        { expr: "Beta: 60m", explica: "Só mensalidades.", status: "neutro" },
        { expr: "80 + 40m = 60m", explica: "Igualo os gastos.", status: "ok", professor: "Montar a equação é o passo mais importante: 'ficar igual' vira, em símbolos, um sinal de igual entre as duas expressões." },
        { expr: "80 = 60m − 40m", explica: "Tiro 40m dos dois lados.", status: "ok" },
        { expr: "80 = 20m", explica: "Reduzo.", status: "ok" },
        { expr: "m = 4", explica: "Divido por 20.", status: "ok" },
        { expr: "Verificação: 80 + 160 = 240 e 60 · 4 = 240 ✓", explica: "Confere.", status: "ok" },
      ],
      fatorada: "Empatam em 4 meses (R$ 240 cada)",
      legenda: "Aplicação — comparando planos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4 meses" }, { nome: "2 meses" }, { nome: "8 meses" }],
      respostaCerta: "4 meses",
      feedbackAcerto: "🎯 Nos dois planos o gasto chega a R$ 240 em 4 meses.",
      feedbackErro: "Monte a equação 80 + 40m = 60m. Passando 40m para o outro lado sobra 80 = 20m, logo m = 4.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Equação é igualdade com incógnita; raiz é o valor que a torna verdadeira.",
      "O que se faz de um lado deve ser feito do outro.",
      "Desfaça soma/subtração primeiro e multiplicação/divisão depois.",
      "Com x nos dois lados: letras de um lado, números do outro.",
      "Verificar substituindo na equação original é obrigatório.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "x − 5 = 9 tem raiz:", opcoes: ["14", "4", "45"], correta: 0, feedbackAcerto: "🎉 14 − 5 = 9.", feedbackErro: "O 5 está subtraindo, então ele sai somando: 9 + 5 = 14." },
      { pergunta: "2x = 18 tem raiz:", opcoes: ["9", "36", "16"], correta: 0, feedbackAcerto: "🎉 2 · 9 = 18.", feedbackErro: "O 2 multiplica o x, então divida os dois lados por 2: 18 ÷ 2 = 9." },
      { pergunta: "3x + 1 = 10 tem raiz:", opcoes: ["3", "11/3", "9"], correta: 0, feedbackAcerto: "🎉 3 · 3 + 1 = 10.", feedbackErro: "Tire 1 dos dois lados: 3x = 9. Depois divida por 3: x = 3." },
      { pergunta: "5x = 2x + 12 tem raiz:", opcoes: ["4", "12", "2"], correta: 0, feedbackAcerto: "🎉 5·4 = 20 e 2·4 + 12 = 20.", feedbackErro: "Tire 2x dos dois lados: 3x = 12, logo x = 4." },
      { pergunta: "Qual ação NÃO mantém a igualdade?", opcoes: ["somar 3 só de um lado", "somar 3 nos dois lados", "dividir os dois lados por 2"], correta: 0, feedbackAcerto: "🎉 Alterar um lado só quebra o equilíbrio.", feedbackErro: "A igualdade é uma balança: mexer em um prato só desequilibra. Toda operação vale para os dois lados." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A balança da cozinha",
    materiais: ["Balança de cozinha ou objetos iguais", "Papel", "Caneta"],
    passos: [
      "Coloque um objeto de peso desconhecido de um lado e pesos conhecidos do outro até equilibrar.",
      "Escreva a equação que representa esse equilíbrio.",
      "Resolva a equação e confira com a balança.",
    ],
    registro: "📸 Foto da balança equilibrada ao lado da equação escrita.",
  },
  recompensa: { xp: 230, moedas: 115, medalha: "Mestre da Balança" },
};
