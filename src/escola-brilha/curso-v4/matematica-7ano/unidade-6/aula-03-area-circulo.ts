import type { AulaV4 } from "../../types";

/** Aula 03 · U6 — Área do círculo e figuras compostas com partes redondas. */
export const aula03_areaCirculo: AulaV4 = {
  slug: "u6-03-area-circulo",
  titulo: "A Superfície Redonda",
  iconeTrilha: "🥧",
  bncc: ["EF07MA33", "EF07MA30"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Quantos m² de lona cobrem a piscina?",
    historia:
      "{NOME}, na aula passada você mediu o CONTORNO do círculo. Hoje o problema é outro: a família comprou uma piscina redonda e precisa de uma capa que cubra toda a superfície. Contorno não resolve — é preciso saber quantos metros QUADRADOS existem dentro do círculo.",
  },

  momento02_exploracao: {
    instrucao: "Imagine o círculo fatiado como uma pizza e as fatias encaixadas lado a lado.",
    cenas: [
      { tipo: "figuraPlana", forma: "circulo", legenda: "Círculo de raio r: a região pintada é a área." },
      {
        tipo: "tabela",
        titulo: "Duas perguntas diferentes sobre o mesmo círculo (r = 10 cm)",
        cabecalhos: ["Pergunta", "Fórmula", "Conta", "Resultado"],
        linhas: [
          { rotulo: "Contorno", valores: ["C = 2πr", "2 · 3,14 · 10", "62,8 cm"] },
          { rotulo: "Superfície", valores: ["A = πr²", "3,14 · 10²", "314 cm²"] },
        ],
      },
      { tipo: "texto", texto: "🔑 No comprimento o raio aparece uma vez. Na área ele aparece AO QUADRADO.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se eu DOBRAR o raio, a área também dobra?",
    pista: "Calcule a área com r = 3 e depois com r = 6.",
    revelacao: "Não! Dobrando o raio, a área fica QUATRO vezes maior, porque o raio está elevado ao quadrado.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Dobrar o raio × quadruplicar a área",
      passos: [
        { expr: "r = 3 → A = 3,14 · 9 = 28,26 cm²", explica: "Primeiro círculo.", status: "neutro" },
        { expr: "r = 6 → A = 3,14 · 36 = 113,04 cm²", explica: "Raio dobrado.", status: "ok" },
        {
          expr: "113,04 ÷ 28,26 = 4",
          explica: "Quatro vezes maior, não duas.",
          status: "ok",
          professor:
            "Isso vale para toda área: multiplicar as medidas lineares por k multiplica a área por k². Uma pizza de 40 cm de diâmetro tem QUATRO vezes a massa de uma de 20 cm, embora custe raramente quatro vezes o preço.",
        },
      ],
      fatorada: "A ∝ r²",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "A = π · r², passo a passo",
    etapas: [
      {
        texto: "ÁREA DO CÍRCULO: A = π · r². Primeiro eleve o raio ao quadrado, DEPOIS multiplique por 3,14.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Círculo de raio 5 cm",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A = π · r²",
            passos: [
              { expr: "A = 3,14 · 5²", explica: "Substituo o raio.", status: "neutro" },
              { expr: "A = 3,14 · 25", explica: "Primeiro a potência.", status: "neutro" },
              {
                expr: "A = 78,5 cm²",
                explica: "Superfície do círculo.",
                status: "ok",
                professor:
                  "A ordem das operações manda: potência antes de multiplicação. Quem faz (3,14 · 5)² = 246,49 erra feio. O expoente pertence só ao raio.",
              },
              { expr: "Erro comum: 3,14 · 5 · 2", explica: "Isso é comprimento, não área.", status: "x" },
            ],
            fatorada: "78,5 cm²",
          },
          destaque: "Potência primeiro, depois π.",
        },
      },
      {
        texto: "COM DIÂMETRO: divida por 2 para achar o raio ANTES de aplicar a fórmula.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Piscina de 4 m de diâmetro",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "d = 4 m → A = ?",
            passos: [
              { expr: "r = 4 ÷ 2 = 2 m", explica: "Raio primeiro.", status: "neutro" },
              { expr: "A = 3,14 · 2² = 3,14 · 4", explica: "Aplico a fórmula.", status: "neutro" },
              {
                expr: "A = 12,56 m²",
                explica: "Lona necessária.",
                status: "ok",
                professor:
                  "Se alguém usar o diâmetro direto na fórmula (3,14 · 4² = 50,24), acha uma área QUATRO vezes maior. Esse é o erro clássico de piscina, tampa e pizza. Escreva 'r =' antes de tudo.",
              },
            ],
            fatorada: "12,56 m²",
          },
          destaque: "Diâmetro ÷ 2 = raio.",
        },
      },
      {
        texto: "MEIO CÍRCULO e COROA: calcule o círculo inteiro e depois divida ou subtraia.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Anel entre dois círculos: raio maior 5 cm e raio menor 3 cm",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "A(coroa) = A(maior) − A(menor)",
            passos: [
              { expr: "A(maior) = 3,14 · 25 = 78,5", explica: "Círculo externo.", status: "neutro" },
              { expr: "A(menor) = 3,14 · 9 = 28,26", explica: "Buraco interno.", status: "neutro" },
              {
                expr: "A = 78,5 − 28,26 = 50,24 cm²",
                explica: "Só o anel.",
                status: "ok",
                professor:
                  "Uma pista de atletismo, uma arruela e a borda de um CD são coroas circulares. A lógica é sempre a mesma: área de fora menos área de dentro.",
              },
            ],
            fatorada: "50,24 cm²",
          },
          destaque: "Compor e subtrair também vale no redondo.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: uma pizza grande tem 40 cm de diâmetro e uma pequena tem 20 cm. Quantas pizzas pequenas cabem na área de uma grande?",
    resposta: "Exatamente 4 pizzas pequenas",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Comparando áreas",
      passos: [
        { expr: "grande: r = 20 → A = 3,14 · 400 = 1256 cm²", explica: "Diâmetro 40 ÷ 2.", status: "neutro" },
        { expr: "pequena: r = 10 → A = 3,14 · 100 = 314 cm²", explica: "Diâmetro 20 ÷ 2.", status: "neutro" },
        {
          expr: "1256 ÷ 314 = 4",
          explica: "A grande vale 4 pequenas.",
          status: "ok",
          professor:
            "Por isso, na pizzaria, duas pizzas pequenas quase nunca compensam uma grande: elas somam metade da massa. Área cresce ao quadrado, mas o preço costuma crescer bem menos.",
        },
      ],
      fatorada: "4 vezes maior",
      legenda: "Brilha resolve",
    },
    passos: ["Acho o raio de cada círculo.", "Calculo A = πr² dos dois.", "Divido a maior pela menor.", "Interpreto o resultado."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é a área de um círculo de raio 3 cm?",
    dica: "Eleve 3 ao quadrado antes de multiplicar por 3,14.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A = 3,14 · 3²",
      passos: [
        { expr: "3² = 9", explica: "Potência primeiro.", status: "neutro" },
        { expr: "A = 3,14 · 9 = 28,26 cm²", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "28,26 cm²",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "28,26 cm²" }, { nome: "18,84 cm²" }, { nome: "9,42 cm²" }],
      respostaCerta: "28,26 cm²",
      feedbackAcerto: "🎯 3,14 × 9.",
      feedbackErro: "18,84 é o COMPRIMENTO (2 · 3,14 · 3). Para área, eleve o raio ao quadrado: 3,14 · 9 = 28,26 cm².",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: uma tampa tem 10 cm de diâmetro. Qual é a área dela?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "d = 10 → A = ?",
      passos: [
        { expr: "r = 10 ÷ 2 = 5 cm", explica: "Raio primeiro.", status: "neutro" },
        { expr: "A = 3,14 · 25 = 78,5 cm²", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "78,5 cm²",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "78,5 cm²" }, { nome: "314 cm²" }, { nome: "31,4 cm²" }],
      respostaCerta: "78,5 cm²",
      feedbackAcerto: "🎯 Passou o diâmetro para raio.",
      feedbackErro: "314 cm² sai de usar 10 como raio. O enunciado deu o DIÂMETRO: r = 5, logo A = 3,14 · 25 = 78,5 cm².",
    },
  },

  momento08_aplicacao: {
    contexto: "Um canteiro circular de raio 2 m será coberto com grama. O saco de grama cobre 1 m² e custa R$ 12,00.",
    problema: "Quantos m² de grama e qual será o custo aproximado?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Grama do canteiro circular",
      passos: [
        { expr: "A = 3,14 · 2² = 3,14 · 4", explica: "Área do canteiro.", status: "neutro" },
        { expr: "A = 12,56 m²", explica: "Superfície a cobrir.", status: "ok" },
        {
          expr: "13 sacos × R$ 12 = R$ 156",
          explica: "Arredondo para cima.",
          status: "ok",
          professor:
            "12,56 sacos não existe na loja. Comprar 12 deixa 0,56 m² pelado; por isso arredondamos para 13. Em problemas de compra, o arredondamento é SEMPRE para cima.",
        },
      ],
      fatorada: "12,56 m² ≈ R$ 156,00",
      legenda: "Aplicação — canteiro da praça",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é a área do canteiro?",
      opcoes: [{ nome: "12,56 m²" }, { nome: "6,28 m²" }, { nome: "50,24 m²" }],
      respostaCerta: "12,56 m²",
      feedbackAcerto: "🎯 3,14 × 4.",
      feedbackErro: "6,28 m é o COMPRIMENTO do contorno. A área usa o raio ao quadrado: 3,14 · 2² = 12,56 m².",
    },
  },

  momento09_revisao: {
    pontos: [
      "Área do círculo: A = π · r², em unidade ao quadrado.",
      "Comprimento usa r; área usa r².",
      "Com diâmetro, ache o raio primeiro (r = d ÷ 2).",
      "Dobrar o raio quadruplica a área.",
      "Coroa circular: área de fora menos área de dentro.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "A área de um círculo de raio 10 cm é:", opcoes: ["314 cm²", "62,8 cm²", "31,4 cm²"], correta: 0, feedbackAcerto: "🎉 3,14 × 100.", feedbackErro: "62,8 cm é o comprimento. Área: A = 3,14 · 10² = 3,14 · 100 = 314 cm²." },
      { pergunta: "Na fórmula A = πr², o expoente pertence a:", opcoes: ["apenas ao raio", "ao π e ao raio", "só ao π"], correta: 0, feedbackAcerto: "🎉 Potência antes da multiplicação.", feedbackErro: "O quadrado é só do raio: A = 3,14 · (r · r). Elevar o produto todo dá um valor muito maior e errado." },
      { pergunta: "Um círculo tem diâmetro 6 cm. Sua área é:", opcoes: ["28,26 cm²", "113,04 cm²", "18,84 cm²"], correta: 0, feedbackAcerto: "🎉 r = 3 → 3,14 × 9.", feedbackErro: "113,04 cm² vem de usar 6 como raio. Com diâmetro 6, o raio é 3: A = 3,14 · 9 = 28,26 cm²." },
      { pergunta: "Se o raio triplicar, a área fica:", opcoes: ["9 vezes maior", "3 vezes maior", "6 vezes maior"], correta: 0, feedbackAcerto: "🎉 3² = 9.", feedbackErro: "Como o raio está ao quadrado, multiplicar por 3 multiplica a área por 3² = 9." },
      { pergunta: "Para achar a área de uma coroa circular devemos:", opcoes: ["subtrair a área menor da maior", "somar as duas áreas", "multiplicar as duas áreas"], correta: 0, feedbackAcerto: "🎉 O miolo é vazio.", feedbackErro: "O centro é um buraco, então a área do anel é A(maior) − A(menor)." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A pizza mais vantajosa",
    materiais: ["Régua", "Cardápio ou folheto de pizzaria"],
    passos: [
      "Anote o diâmetro e o preço de duas pizzas de tamanhos diferentes.",
      "Calcule a área de cada uma com A = πr².",
      "Divida o preço pela área e descubra qual custa menos por cm².",
    ],
    registro: "📸 Foto das contas mostrando qual pizza vale mais a pena.",
  },
  recompensa: { xp: 250, moedas: 130, medalha: "Geômetra do Círculo" },
};
