import type { AulaV4 } from "../../types";

/**
 * Aula 01 · U1 — Conjuntos numéricos e os irracionais.
 */
export const aula01_conjuntosNumericos: AulaV4 = {
  slug: "u1-01-conjuntos-numericos",
  titulo: "O Mundo dos Números: de ℕ até ℝ",
  iconeTrilha: "🌌",
  bncc: ["EF09MA01", "EF09MA02"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Um número que foge das frações",
    historia:
      "{NOME}, os matemáticos gregos ficaram apavorados quando descobriram que a diagonal de um quadrado de lado 1 mede √2 — e que NENHUMA fração no mundo representa esse valor exatamente. Hoje você entra no clube dos números que não cabem em fração: os irracionais.",
  },

  momento02_exploracao: {
    instrucao: "Veja como os conjuntos numéricos vão se encaixando, um dentro do outro.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Conjuntos numéricos",
        cabecalhos: ["Conjunto", "Símbolo", "Exemplos"],
        linhas: [
          { rotulo: "1", valores: ["Naturais", "ℕ", "0, 1, 2, 3, 4…"] },
          { rotulo: "2", valores: ["Inteiros", "ℤ", "…, −2, −1, 0, 1, 2…"] },
          { rotulo: "3", valores: ["Racionais", "ℚ", "1/2, 0,75, −3, 2,333…"] },
          { rotulo: "4", valores: ["Irracionais", "ℝ − ℚ", "√2, π, 0,1010010001…"] },
          { rotulo: "5", valores: ["Reais", "ℝ", "ℚ ∪ irracionais"] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 Todo natural é inteiro, todo inteiro é racional: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Mas os irracionais NÃO estão em ℚ — eles moram fora, e junto com ℚ formam ℝ.",
      },
      {
        tipo: "retaNumerica",
        min: -2,
        max: 4,
        passo: 1,
        destacar: [
          { valor: 1.5, rotulo: "3/2 (racional)" },
          { valor: -1, rotulo: "−1 (inteiro)" },
        ],
        intervalos: [{ de: 1.4, ate: 1.42, rotulo: "√2 ≈ 1,414… (irracional)" }],
        legenda: "Todos moram na mesma reta: os Reais",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que √2 não pode ser escrito como fração a/b?",
    pista: "Toda fração, quando você divide, dá uma decimal EXATA ou uma dízima PERIÓDICA (que repete). Calcule √2 na calculadora e veja o que a decimal faz.",
    revelacao: "√2 = 1,41421356… Os algarismos NUNCA se repetem em um padrão fixo e a decimal NUNCA termina. Isso é o que define um número IRRACIONAL: dízima infinita e NÃO periódica.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "√2 é fração ou não?",
      passos: [
        { expr: "√2 = 1,41421356237...", explica: "Decimal infinita.", status: "neutro", professor: "Uma calculadora nunca termina de mostrar casas decimais para √2, por mais que você aumente a precisão." },
        { expr: "Existe bloco que se repete?", explica: "Procuramos um período.", status: "neutro" },
        { expr: "Não! Os algarismos não formam padrão.", explica: "Isso é decisivo.", status: "x", professor: "Se houvesse repetição (como em 0,333... ou 0,142857142857...), o número seria racional, pois toda dízima PERIÓDICA vira fração (fração geratriz)." },
        { expr: "Logo, √2 ∉ ℚ", explica: "√2 é irracional.", status: "ok" },
      ],
      fatorada: "√2 é irracional",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Racionais e irracionais: a fronteira exata",
    etapas: [
      {
        texto:
          "Um número é RACIONAL (ℚ) quando pode ser escrito como fração a/b, com a e b inteiros e b ≠ 0. Isso inclui inteiros (5 = 5/1), decimais exatos (0,75 = 3/4) e dízimas PERIÓDICAS (0,333... = 1/3).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Mostrar que 0,75 é racional.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "0,75 em fração",
            passos: [
              { expr: "0,75 = 75/100", explica: "Decimal vira fração com denominador potência de 10.", status: "neutro" },
              { expr: "75/100 = 3/4", explica: "Simplifico dividindo por 25.", status: "ok", professor: "75 ÷ 25 = 3 e 100 ÷ 25 = 4. Como consegui escrever como fração de inteiros, 0,75 é racional." },
            ],
            fatorada: "0,75 = 3/4 ∈ ℚ",
          },
          destaque: "Decimal exato sempre é racional.",
        },
      },
      {
        texto:
          "Um número é IRRACIONAL quando sua representação decimal é infinita e NÃO periódica — não existe fração que o gere. Exemplos famosos: √2, √3, √5 (raízes que não dão exatas) e π = 3,14159265...",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "π não é fração.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "π = 3,14159265358979...",
            passos: [
              { expr: "22/7 = 3,142857142857...", explica: "Aproximação comum de π.", status: "neutro", professor: "22/7 é só uma APROXIMAÇÃO. Repare que 142857 se repete — é racional, mas não é π de verdade." },
              { expr: "π = 3,14159265358979...", explica: "Valor real de π.", status: "x", professor: "As casas decimais de π não repetem em nenhum bloco, por mais que você calcule. Já foram calculados trilhões de dígitos e nenhum padrão aparece." },
              { expr: "Logo π ∉ ℚ", explica: "π é irracional.", status: "ok" },
            ],
            fatorada: "π é irracional",
          },
          destaque: "22/7 é só uma aproximação de π, não o valor exato.",
        },
      },
      {
        texto:
          "O conjunto dos números REAIS (ℝ) é a UNIÃO de todos os racionais com todos os irracionais: ℝ = ℚ ∪ (irracionais). Cada ponto da reta numérica é um número real — não sobra nem falta espaço.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Classificar quatro números.",
          visualMat: {
            tipo: "tabela",
            titulo: "Classificando números",
            cabecalhos: ["Número", "É fração?", "Classificação"],
            linhas: [
              { rotulo: "1", valores: ["−5", "sim, −5/1", "ℤ e ℚ"] },
              { rotulo: "2", valores: ["0,666...", "sim, 2/3", "ℚ"] },
              { rotulo: "3", valores: ["√7", "não existe fração", "irracional"] },
              { rotulo: "4", valores: ["0,1010010001...", "não existe fração", "irracional"] },
            ],
          },
          destaque: "0,1010010001... não repete em bloco fixo — é irracional, mesmo parecendo organizado.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: √5 é racional ou irracional?",
    resposta: "√5 é irracional, pois não existe número inteiro ao quadrado que dê 5.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "√5",
      passos: [
        { expr: "2² = 4 e 3² = 9", explica: "5 está entre 4 e 9.", status: "neutro", professor: "Procuro dois quadrados perfeitos entre os quais 5 se encaixa, para saber entre quais inteiros √5 está." },
        { expr: "Logo 2 < √5 < 3", explica: "√5 não é inteiro.", status: "ok" },
        { expr: "√5 = 2,2360679...", explica: "Decimal infinita e não periódica.", status: "ok", professor: "Como 5 não é quadrado perfeito, sua raiz nunca vai dar uma decimal exata ou periódica. Isso vale para toda raiz de número que não seja quadrado perfeito." },
        { expr: "√5 é irracional", explica: "Conclusão.", status: "ok" },
      ],
      fatorada: "√5 ∈ ℝ − ℚ",
      legenda: "Brilha resolve",
    },
    passos: [
      "Verifico se 5 é quadrado perfeito (1, 4, 9, 16, 25...). Não é.",
      "Como não é quadrado perfeito, √5 não é exata.",
      "Toda raiz não exata de número inteiro é irracional.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: √9 é racional ou irracional?",
    dica: "Pergunte: existe um número inteiro que, ao quadrado, dá 9?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "√9",
      passos: [
        { expr: "3² = 9", explica: "Encontrei o inteiro.", status: "ok" },
        { expr: "√9 = 3", explica: "Raiz exata.", status: "ok" },
      ],
      fatorada: "√9 = 3 ∈ ℚ",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Racional (é 3)" }, { nome: "Irracional" }, { nome: "Não é número real" }],
      respostaCerta: "Racional (é 3)",
      feedbackAcerto: "🎯 9 é quadrado perfeito (3²), então √9 = 3, um número inteiro e racional.",
      feedbackErro: "9 é quadrado perfeito: 3 × 3 = 9. Logo √9 = 3, que é um inteiro — e todo inteiro é racional.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 0,444... (dízima periódica) é racional ou irracional?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,444...",
      passos: [
        { expr: "0,444... tem período 4", explica: "O algarismo 4 se repete infinitamente.", status: "neutro" },
        { expr: "0,444... = 4/9", explica: "Toda dízima periódica é fração.", status: "ok" },
      ],
      fatorada: "0,444... = 4/9 ∈ ℚ",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Racional" }, { nome: "Irracional" }, { nome: "Nenhum dos dois" }],
      respostaCerta: "Racional",
      feedbackAcerto: "🎯 Dízima PERIÓDICA sempre é racional — ela vira fração (nesse caso, 4/9).",
      feedbackErro: "O segredo é: PERIÓDICA (repete um bloco) = racional. NÃO periódica (nunca repete) = irracional. Aqui o 4 repete sempre, então é racional.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Sua professora de Artes pede para calcular a diagonal de um quadrado de lado 1 metro para cortar um tecido.",
    problema: "A diagonal vale √2 m ≈ 1,41 m. Esse valor é uma medida racional ou irracional?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Diagonal do quadrado de lado 1",
      passos: [
        { expr: "diagonal² = 1² + 1²", explica: "Teorema de Pitágoras.", status: "neutro", professor: "Em um quadrado de lado 1, a diagonal forma a hipotenusa de um triângulo retângulo de catetos 1 e 1." },
        { expr: "diagonal² = 2", explica: "Somo os quadrados.", status: "ok" },
        { expr: "diagonal = √2 ≈ 1,4142...", explica: "Raiz não exata.", status: "ok", professor: "Por mais que a costureira use 1,41 m como aproximação prática, o valor EXATO é √2, que nunca termina nem repete." },
      ],
      fatorada: "diagonal = √2 m (irracional)",
      legenda: "Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Irracional" }, { nome: "Racional" }, { nome: "Não existe esse número" }],
      respostaCerta: "Irracional",
      feedbackAcerto: "🎯 √2 é irracional: sua decimal é infinita e nunca repete um padrão.",
      feedbackErro: "√2 não é quadrado perfeito de nenhum inteiro, então é irracional. Na prática, usamos 1,41 m como aproximação, mas o valor exato nunca termina.",
    },
  },

  momento09_revisao: {
    pontos: [
      "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.",
      "Racional = pode virar fração a/b (decimal exato ou dízima periódica).",
      "Irracional = decimal infinita e NÃO periódica (√2, √3, π...).",
      "Raiz de quadrado perfeito é racional (√9 = 3); raiz de não-quadrado-perfeito é irracional.",
      "ℝ = ℚ ∪ irracionais — todo ponto da reta é um número real.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual número é irracional?",
        opcoes: ["√2", "√4", "0,5"],
        correta: 0,
        feedbackAcerto: "🎉 √2 = 1,4142... nunca termina nem repete: é irracional.",
        feedbackErro: "√4 = 2 (racional) e 0,5 = 1/2 (racional). Só √2 não vira fração exata.",
      },
      {
        pergunta: "0,777... (período 7) é:",
        opcoes: ["Racional, igual a 7/9", "Irracional", "Não é número"],
        correta: 0,
        feedbackAcerto: "🎉 Toda dízima PERIÓDICA é racional. 0,777... = 7/9.",
        feedbackErro: "O algarismo 7 repete infinitamente em padrão fixo — isso é dízima PERIÓDICA, que sempre é racional.",
      },
      {
        pergunta: "√16 é:",
        opcoes: ["Racional (vale 4)", "Irracional", "Nem racional nem real"],
        correta: 0,
        feedbackAcerto: "🎉 16 é quadrado perfeito (4²), então √16 = 4, um número inteiro e racional.",
        feedbackErro: "16 = 4 × 4, então √16 = 4 exatamente. Como é um inteiro, é racional.",
      },
      {
        pergunta: "Qual afirmação está CORRETA?",
        opcoes: [
          "Todo número inteiro é racional",
          "Todo número racional é inteiro",
          "Todo irracional é racional",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Todo inteiro n pode ser escrito como n/1, então é racional. Mas nem todo racional é inteiro (ex.: 1/2).",
        feedbackErro: "1/2 é racional mas não é inteiro — então 'todo racional é inteiro' é falso. E irracional, por definição, NÃO é racional.",
      },
      {
        pergunta: "π (pi) é usado para calcular círculos. π é:",
        opcoes: ["Irracional", "Racional exato", "Um número inteiro"],
        correta: 0,
        feedbackAcerto: "🎉 π = 3,14159265... tem infinitas casas decimais sem repetição — é irracional.",
        feedbackErro: "22/7 e 3,14 são só APROXIMAÇÕES de π. O valor exato de π nunca termina nem repete, por isso é irracional.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçada aos números da casa",
    materiais: ["Papel", "Caneta", "Calculadora (opcional)"],
    passos: [
      "Anote 5 números que aparecem em casa (idade, preço, medida de um objeto, etc).",
      "Classifique cada um: natural, inteiro, racional (fração/decimal) ou, se souber, tente achar um irracional (ex.: diagonal de uma tela, calculando √(largura²+altura²)).",
      "Explique para alguém da família por que √2 nunca vira uma fração exata.",
    ],
    registro: "📸 Foto da tabela de classificação feita à mão.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Guardião dos Reais" },
};
