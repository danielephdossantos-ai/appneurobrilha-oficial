import type { AulaV4 } from "../../types";

/**
 * Aula 02 · U2 — Monômios: 4 operações.
 * Padrão piloto: passo a passo + Professor + armadilha dos semelhantes.
 */
export const aula02_monomios: AulaV4 = {
  slug: "u2-02-monomios",
  titulo: "Monômios: somar, subtrair, multiplicar e dividir",
  iconeTrilha: "🔩",
  bncc: ["EF08MA06"],
  duracaoMin: 26,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "As peças da Álgebra",
    historia:
      "{NOME}, monômio é UMA peça: número × letra(s) elevada(s) a expoente inteiro não negativo. Ex.: 3x², −5xy, 7. Hoje aprendemos a SOMAR, SUBTRAIR, MULTIPLICAR e DIVIDIR essas peças, respeitando quem é semelhante e quem não é.",
  },

  momento02_exploracao: {
    instrucao: "Identifique coeficiente, parte literal e grau.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Anatomia do monômio",
        cabecalhos: ["Monômio", "Coeficiente", "Parte literal", "Grau"],
        linhas: [
          { rotulo: "1", valores: ["3x²", "3", "x²", "2"] },
          { rotulo: "2", valores: ["−5xy", "−5", "xy", "2"] },
          { rotulo: "3", valores: ["7", "7", "—", "0"] },
          { rotulo: "4", valores: ["x³y", "1", "x³y", "4"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "🔑 Grau do monômio = soma dos expoentes das letras. 'x³y' tem grau 3+1 = 4. Constantes (só número) têm grau 0.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "3x + 5x²: dá pra somar?",
    pista: "Só se juntam peças da MESMA parte literal (mesmas letras nos mesmos expoentes).",
    revelacao: "SEMELHANTES têm mesma parte literal. 3x e 5x² NÃO são semelhantes — não somam.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3x + 5x² pode somar?",
      passos: [
        { expr: "3x tem parte literal x", explica: "Grau 1.", status: "neutro" },
        { expr: "5x² tem parte literal x²", explica: "Grau 2.", status: "ok" },
        { expr: "x ≠ x²", explica: "Partes literais diferentes.", status: "x", professor: "É como somar 3 laranjas com 5 uvas: não vira '8 laranjuvas'. Só junto o que é da mesma espécie." },
        { expr: "3x + 5x² fica ASSIM mesmo", explica: "Já está simplificado.", status: "ok", professor: "Quando não há semelhantes, a expressão simplificada é a própria expressão. Não force a soma." },
      ],
      fatorada: "3x + 5x² é a forma simplificada",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "As 4 operações com monômios",
    etapas: [
      {
        texto: "SOMA/SUBTRAÇÃO: só entre semelhantes; opere só os COEFICIENTES.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3x + 5x − 2x",
            passos: [
              { expr: "3x + 5x − 2x", explica: "Todos têm parte literal x.", status: "neutro", professor: "Todos são semelhantes (mesma parte literal x)." },
              { expr: "(3 + 5 − 2)·x", explica: "Fatoro o x.", status: "ok", professor: "Uso a distributiva ao contrário: coloco x em evidência." },
              { expr: "= 6x", explica: "Só o coeficiente muda.", status: "ok", professor: "A parte literal NUNCA muda quando somo semelhantes." },
            ],
            fatorada: "= 6x",
          },
          destaque: "Some/subtraia coeficientes; parte literal permanece.",
        },
      },

      {
        texto: "MULTIPLICAÇÃO: multiplique coeficientes; some expoentes das letras iguais.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(3x²) · (2x³)",
            passos: [
              { expr: "(3x²) · (2x³)", explica: "Multiplicação.", status: "neutro" },
              { expr: "= (3·2) · (x² · x³)", explica: "Reorganizo.", status: "ok", professor: "Junto números com números e letras com letras (propriedade comutativa)." },
              { expr: "= 6 · x²⁺³", explica: "Mesma base → soma expoentes.", status: "ok", professor: "Da U1-02: mesma base multiplicando SOMA expoentes. Aqui base é x." },
              { expr: "= 6x⁵", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "= 6x⁵",
          },
          destaque: "Números multiplicam; expoentes de letras iguais SOMAM.",
        },
      },

      {
        texto: "DIVISÃO: divida coeficientes; SUBTRAIA expoentes.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(10x⁵) ÷ (2x²)",
            passos: [
              { expr: "(10x⁵) ÷ (2x²)", explica: "Divisão.", status: "neutro" },
              { expr: "= (10 ÷ 2) · (x⁵ ÷ x²)", explica: "Separo.", status: "ok" },
              { expr: "= 5 · x⁵⁻²", explica: "Mesma base → subtrai expoentes.", status: "ok" },
              { expr: "= 5x³", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "= 5x³",
          },
          destaque: "Números dividem; expoentes SUBTRAEM.",
        },
      },

      {
        texto: "⚠️ Armadilha: 2x + 2x = 4x (soma coef, parte literal MANTÉM). Já (2x)·(2x) = 4x² (expoentes somam).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2x + 2x  vs  (2x)·(2x)",
            passos: [
              { expr: "2x + 2x", explica: "SOMA de semelhantes.", status: "neutro" },
              { expr: "= (2+2)·x = 4x", explica: "Só o coef muda.", status: "ok", professor: "Soma: só operam os coeficientes. O expoente do x continua sendo 1." },
              { expr: "(2x)·(2x)", explica: "MULTIPLICAÇÃO.", status: "ok" },
              { expr: "= (2·2)·(x·x) = 4x²", explica: "Aqui o expoente soma.", status: "ok", professor: "Multiplicação: coef multiplicam, expoentes somam (1+1=2). Não confunda com a soma." },
              { expr: "4x ≠ 4x²", explica: "Resultados diferentes.", status: "x", professor: "SOMA: 4x. MULTIPLICAÇÃO: 4x². Se você fez 2x + 2x = 4x², misturou as duas operações." },
            ],
            fatorada: "SOMA: 4x    MULT.: 4x²",
          },
          destaque: "Soma mantém expoente; multiplicação soma expoentes.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: (4x²y) · (3xy²) = ?",
    resposta: "12x³y³",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(4x²y) · (3xy²)",
      passos: [
        { expr: "(4x²y) · (3xy²)", explica: "Multiplicação.", status: "neutro" },
        { expr: "= (4·3)·(x²·x)·(y·y²)", explica: "Reorganizo.", status: "ok" },
        { expr: "= 12 · x²⁺¹ · y¹⁺²", explica: "Soma expoentes de bases iguais.", status: "ok", professor: "Trato cada letra separadamente. Base x: 2+1. Base y: 1+2. y = y¹, sempre." },
        { expr: "= 12x³y³", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "= 12x³y³",
      legenda: "Modelagem",
    },
    passos: ["4·3 = 12.", "x²·x = x³.", "y·y² = y³.", "= 12x³y³."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 5a + 3a − a = ?",
    dica: "Todos semelhantes (parte literal 'a'). Some coeficientes: 5 + 3 − 1.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5a + 3a − a",
      passos: [
        { expr: "5a + 3a − 1a", explica: "Escrevo o −a como −1a.", status: "neutro", professor: "Sempre que uma letra vier ‘sozinha’, o coef é 1 (ou −1). '−a' = −1·a." },
        { expr: "(5 + 3 − 1)·a", explica: "Fatoro.", status: "ok" },
        { expr: "= 7a", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "= 7a",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7a" }, { nome: "8a" }, { nome: "9a" }],
      respostaCerta: "7a",
      feedbackAcerto: "🎯 5+3−1 = 7.",
      feedbackErro: "'−a' tem coef −1 (não zero). Faça 5 + 3 − 1 = 7.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: (6x³) ÷ (2x) = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(6x³) ÷ (2x)",
      passos: [
        { expr: "(6x³) ÷ (2x¹)", explica: "Escrevo x = x¹.", status: "neutro" },
        { expr: "= (6÷2) · x³⁻¹", explica: "Divisão de mesma base.", status: "ok" },
        { expr: "= 3x²", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "= 3x²",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3x²" }, { nome: "3x" }, { nome: "3x³" }],
      respostaCerta: "3x²",
      feedbackAcerto: "🎯 6÷2 = 3, 3−1 = 2.",
      feedbackErro: "Divisão de mesma base SUBTRAI expoentes: 3 − 1 = 2. Se deu 3x³, esqueceu de subtrair.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um retângulo tem base 4x e altura 3x².",
    problema: "Qual a área?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Área = base × altura = 4x · 3x²",
      passos: [
        { expr: "4x · 3x²", explica: "Multiplicação de monômios.", status: "neutro", professor: "Área do retângulo = base × altura. Aplico a multiplicação dos monômios." },
        { expr: "= (4·3) · (x · x²)", explica: "Reorganizo.", status: "ok" },
        { expr: "= 12 · x¹⁺² = 12x³", explica: "Soma expoentes.", status: "ok" },
      ],
      fatorada: "Área = 12x³",
      legenda: "Aplicação — geometria",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "12x³" }, { nome: "7x²" }, { nome: "12x²" }],
      respostaCerta: "12x³",
      feedbackAcerto: "🎯 4x · 3x² = 12x³.",
      feedbackErro: "Multiplicação: coef × coef (4·3=12) e expoentes SOMAM (1+2=3). Não é soma, é multiplicação.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Semelhantes: mesma parte literal (letras nos mesmos expoentes).",
      "Soma/sub: SÓ entre semelhantes; opera só coeficientes.",
      "Multiplicação: coef × coef, expoentes SOMAM.",
      "Divisão: coef ÷ coef, expoentes SUBTRAEM.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2x + 3x =", opcoes: ["5x", "6x", "5x²"], correta: 0, feedbackAcerto: "🎉 Soma coef, mantém parte literal.", feedbackErro: "Soma de semelhantes: 2+3 = 5, parte literal 'x' mantém. 5x²? Você multiplicou em vez de somar." },
      { pergunta: "(3x)·(4x) =", opcoes: ["12x²", "7x", "12x"], correta: 0, feedbackAcerto: "🎉 3·4 = 12, x·x = x².", feedbackErro: "MULTIPLICAÇÃO: coef × coef = 12, expoentes SOMAM: 1+1 = 2 → x². Se deu 7x, somou em vez de multiplicar." },
      { pergunta: "(8x⁴)÷(4x²) =", opcoes: ["2x²", "2x⁶", "4x²"], correta: 0, feedbackAcerto: "🎉 8÷4 = 2, 4−2 = 2.", feedbackErro: "Divisão: coef ÷ coef (8÷4=2), expoentes SUBTRAEM (4−2=2). Se deu 2x⁶, somou em vez de subtrair." },
      { pergunta: "3x + 5x² =", opcoes: ["Não simplifica (já está pronto)", "8x²", "8x³"], correta: 0, feedbackAcerto: "🎉 Partes literais diferentes → não são semelhantes.", feedbackErro: "3x e 5x² NÃO são semelhantes (x ≠ x²). Não soma. Fica 3x + 5x² mesmo." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Loja de peças",
    materiais: ["Papel"],
    passos: [
      "Invente 3 monômios com coeficiente, parte literal e grau.",
      "Faça 1 soma (com semelhantes), 1 multiplicação e 1 divisão.",
      "Explique para alguém por que não pode somar 3x com 5x².",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
