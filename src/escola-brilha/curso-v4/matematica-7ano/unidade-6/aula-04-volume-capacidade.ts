import type { AulaV4 } from "../../types";

/** Aula 04 · U6 — Volume de blocos retangulares e relação com capacidade. */
export const aula04_volumeCapacidade: AulaV4 = {
  slug: "u6-04-volume-capacidade",
  titulo: "Espaço de Dentro",
  iconeTrilha: "🧊",
  bncc: ["EF07MA30", "EF07MA32"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Quantos litros cabem na caixa d'água?",
    historia:
      "{NOME}, a caixa d'água da casa mede 1 m × 1 m × 1 m e o encanador diz que ela é de 1000 litros. Como ele sabe? Ele não encheu com um copo medidor: ele calculou o volume e usou uma relação que todo mundo deveria conhecer — 1 m³ = 1000 litros.",
  },

  momento02_exploracao: {
    instrucao: "Volume conta CUBINHOS. Área conta quadradinhos. Comprimento conta traços.",
    cenas: [
      { tipo: "solido", forma: "cubo", faces: 6, vertices: 8, arestas: 12, legenda: "Cubo unitário: 1 cm de aresta = 1 cm³ de volume." },
      {
        tipo: "tabela",
        titulo: "Três dimensões, três unidades",
        cabecalhos: ["Grandeza", "Conta", "Unidade"],
        linhas: [
          { rotulo: "Comprimento", valores: ["uma medida", "cm, m"] },
          { rotulo: "Área", valores: ["duas medidas multiplicadas", "cm², m²"] },
          { rotulo: "Volume", valores: ["três medidas multiplicadas", "cm³, m³"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Volume do bloco retangular: V = comprimento × largura × altura.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que 1 m³ dá exatamente 1000 litros?",
    pista: "Transforme 1 m em 100 cm antes de multiplicar. E lembre que 1 litro = 1000 cm³.",
    revelacao: "1 m³ = 100 × 100 × 100 = 1 000 000 cm³. Como cada litro tem 1000 cm³, então 1 000 000 ÷ 1000 = 1000 litros.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1 m³ → litros",
      passos: [
        { expr: "1 m = 100 cm", explica: "Converto a aresta.", status: "neutro" },
        { expr: "V = 100 · 100 · 100", explica: "Três dimensões.", status: "neutro" },
        { expr: "V = 1 000 000 cm³", explica: "Um milhão de cubinhos.", status: "ok" },
        {
          expr: "1 000 000 ÷ 1000 = 1000 L",
          explica: "Cada litro tem 1000 cm³.",
          status: "ok",
          professor:
            "Guarde as duas pontes: 1 L = 1000 cm³ = 1 dm³ e 1 m³ = 1000 L. Com elas você resolve qualquer problema de caixa d'água, aquário, piscina ou tanque de combustível.",
        },
      ],
      fatorada: "1 m³ = 1000 L",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Volume do bloco, do cubo e a conversão para litros",
    etapas: [
      {
        texto: "BLOCO RETANGULAR: V = c × l × h. Todas as medidas na MESMA unidade antes de multiplicar.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Caixa de 8 cm × 5 cm × 3 cm",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = c · l · h",
            passos: [
              { expr: "V = 8 · 5 · 3", explica: "Substituo as três medidas.", status: "neutro" },
              { expr: "V = 40 · 3", explica: "Área da base × altura.", status: "neutro" },
              {
                expr: "V = 120 cm³",
                explica: "Cabem 120 cubinhos.",
                status: "ok",
                professor:
                  "Leia a conta assim: 8 · 5 = 40 é a área da BASE, e multiplicar por 3 é empilhar três camadas de 40 cubinhos. Essa leitura vale para todo prisma: V = área da base × altura.",
              },
            ],
            fatorada: "120 cm³",
          },
          destaque: "Volume sempre em unidade ao cubo.",
        },
      },
      {
        texto: "CUBO: todas as arestas iguais, então V = a³.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Cubo de aresta 4 cm",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = a³",
            passos: [
              { expr: "V = 4³", explica: "Aresta ao cubo.", status: "neutro" },
              { expr: "V = 4 · 4 · 4", explica: "Abro a potência.", status: "neutro" },
              { expr: "V = 64 cm³", explica: "Resultado.", status: "ok" },
              { expr: "Erro comum: 4 · 3 = 12", explica: "Cubo não é multiplicar por 3.", status: "x" },
            ],
            fatorada: "64 cm³",
          },
          destaque: "a³ = a · a · a.",
        },
      },
      {
        texto: "CAPACIDADE: 1 L = 1000 cm³ = 1 dm³ e 1 m³ = 1000 L.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Aquário de 40 cm × 25 cm × 30 cm — quantos litros?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V → litros",
            passos: [
              { expr: "V = 40 · 25 · 30", explica: "Volume em cm³.", status: "neutro" },
              { expr: "V = 30 000 cm³", explica: "Multipliquei tudo.", status: "ok" },
              {
                expr: "30 000 ÷ 1000 = 30 L",
                explica: "Cada 1000 cm³ é 1 litro.",
                status: "ok",
                professor:
                  "Um aquário de 30 L pesa cerca de 30 kg só de água, porque 1 litro de água tem massa de 1 kg. Volume, capacidade e massa da água conversam entre si — é a beleza do sistema métrico decimal.",
              },
            ],
            fatorada: "30 litros",
          },
          destaque: "cm³ ÷ 1000 = litros.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: uma caixa d'água mede 2 m × 1,5 m × 1 m. Quantos litros ela comporta?",
    resposta: "3000 litros",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = 2 · 1,5 · 1",
      passos: [
        { expr: "V = 3 · 1", explica: "2 × 1,5 = 3.", status: "neutro" },
        { expr: "V = 3 m³", explica: "Volume em metros cúbicos.", status: "ok" },
        {
          expr: "3 × 1000 = 3000 L",
          explica: "Cada m³ vale 1000 L.",
          status: "ok",
          professor:
            "Note que aqui multiplicamos por 1000 (de m³ para litros) enquanto no aquário dividimos por 1000 (de cm³ para litros). Pergunte sempre: o resultado deve ficar maior ou menor? Isso define se multiplica ou divide.",
        },
      ],
      fatorada: "3000 L",
      legenda: "Brilha resolve",
    },
    passos: ["Coloco tudo na mesma unidade.", "Multiplico as três medidas.", "Converto para litros.", "Confiro se o número faz sentido."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é o volume de uma caixa de 10 cm × 4 cm × 5 cm?",
    dica: "Multiplique as três medidas.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = 10 · 4 · 5",
      passos: [
        { expr: "10 · 4 = 40", explica: "Área da base.", status: "neutro" },
        { expr: "40 · 5 = 200 cm³", explica: "Cinco camadas.", status: "ok" },
      ],
      fatorada: "200 cm³",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "200 cm³" }, { nome: "19 cm³" }, { nome: "200 cm²" }],
      respostaCerta: "200 cm³",
      feedbackAcerto: "🎯 Três medidas multiplicadas.",
      feedbackErro: "19 seria a SOMA das medidas. Volume multiplica: 10 · 4 · 5 = 200 cm³ (unidade ao cubo).",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: um recipiente tem 5000 cm³. Quantos litros são?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5000 cm³ → L",
      passos: [
        { expr: "1 L = 1000 cm³", explica: "Relação-chave.", status: "neutro" },
        { expr: "5000 ÷ 1000 = 5 L", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "5 litros",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5 L" }, { nome: "50 L" }, { nome: "500 L" }],
      respostaCerta: "5 L",
      feedbackAcerto: "🎯 Dividiu por 1000.",
      feedbackErro: "Cada litro tem 1000 cm³, então 5000 ÷ 1000 = 5 L. Um recipiente de 5000 cm³ é do tamanho de uma garrafa grande, não de um tambor.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma piscina retangular mede 5 m de comprimento, 3 m de largura e será enchida até 1,2 m de altura de água.",
    problema: "Quantos litros de água serão usados?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = 5 · 3 · 1,2",
      passos: [
        { expr: "5 · 3 = 15 m²", explica: "Área do fundo.", status: "neutro" },
        { expr: "15 · 1,2 = 18 m³", explica: "Altura da água.", status: "ok" },
        {
          expr: "18 × 1000 = 18 000 L",
          explica: "Conversão para litros.",
          status: "ok",
          professor:
            "Repare que usamos a altura da ÁGUA (1,2 m) e não a profundidade total da piscina. Volume de líquido se calcula com o nível real, senão a conta superestima o consumo.",
        },
      ],
      fatorada: "18 000 litros",
      legenda: "Aplicação — enchendo a piscina",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "18 000 L" }, { nome: "1 800 L" }, { nome: "18 L" }],
      respostaCerta: "18 000 L",
      feedbackAcerto: "🎯 18 m³ × 1000.",
      feedbackErro: "O volume é 18 m³ e cada m³ tem 1000 litros: 18 × 1000 = 18 000 L.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Volume do bloco: V = c × l × h (ou área da base × altura).",
      "Cubo: V = a³.",
      "Volume sai em unidade ao cubo: cm³, m³.",
      "1 L = 1000 cm³ = 1 dm³.",
      "1 m³ = 1000 litros.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "O volume de um cubo de aresta 3 cm é:", opcoes: ["27 cm³", "9 cm³", "12 cm³"], correta: 0, feedbackAcerto: "🎉 3 · 3 · 3.", feedbackErro: "9 cm² é a área de uma FACE. O volume usa as três dimensões: 3³ = 27 cm³." },
      { pergunta: "1 m³ corresponde a:", opcoes: ["1000 litros", "100 litros", "10 litros"], correta: 0, feedbackAcerto: "🎉 A caixa d'água de 1 m³ é a de 1000 L.", feedbackErro: "1 m³ = 100 · 100 · 100 = 1 000 000 cm³ = 1000 litros." },
      { pergunta: "Uma caixa de 2 m × 2 m × 2 m tem volume:", opcoes: ["8 m³", "6 m³", "4 m³"], correta: 0, feedbackAcerto: "🎉 2³ = 8.", feedbackErro: "6 seria a soma das arestas do trio. Volume multiplica: 2 · 2 · 2 = 8 m³." },
      { pergunta: "3000 cm³ equivalem a:", opcoes: ["3 litros", "30 litros", "0,3 litro"], correta: 0, feedbackAcerto: "🎉 3000 ÷ 1000.", feedbackErro: "Divida por 1000 para passar de cm³ para litros: 3000 ÷ 1000 = 3 L." },
      { pergunta: "A unidade correta de volume é:", opcoes: ["m³", "m²", "m"], correta: 0, feedbackAcerto: "🎉 Três dimensões, expoente 3.", feedbackErro: "m² é área (duas dimensões) e m é comprimento. Volume tem três dimensões: m³." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Quantos litros cabem aqui?",
    materiais: ["Régua ou trena", "Uma caixa ou pote grande"],
    passos: [
      "Meça comprimento, largura e altura internos de um pote em centímetros.",
      "Calcule o volume em cm³ e converta para litros.",
      "Encha com água usando uma garrafa de 1 L e confira se acertou.",
    ],
    registro: "📸 Foto do pote com as medidas, o cálculo e o resultado do teste.",
  },
  recompensa: { xp: 250, moedas: 130, medalha: "Engenheiro do Volume" },
};
