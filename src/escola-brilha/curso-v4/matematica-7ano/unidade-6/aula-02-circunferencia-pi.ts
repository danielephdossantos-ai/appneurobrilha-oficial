import type { AulaV4 } from "../../types";

/** Aula 02 · U6 — Circunferência, π e comprimento. */
export const aula02_circunferenciaPi: AulaV4 = {
  slug: "u6-02-circunferencia-pi",
  titulo: "O Número Secreto do Círculo",
  iconeTrilha: "⭕",
  bncc: ["EF07MA33"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Toda roda esconde o mesmo número",
    historia:
      "{NOME}, pegue a tampa de uma panela, a roda de uma bicicleta ou uma moeda. Meça o contorno com um barbante e depois meça o diâmetro. Divida um pelo outro. Não importa o tamanho do objeto: o resultado é sempre perto de 3,14. Esse número tem nome — π (pi) — e é o mesmo desde a Grécia antiga.",
  },

  momento02_exploracao: {
    instrucao: "Três objetos redondos diferentes, uma mesma divisão.",
    cenas: [
      { tipo: "figuraPlana", forma: "circulo", legenda: "Circunferência é o CONTORNO. Círculo é a região de dentro." },
      {
        tipo: "tabela",
        titulo: "Contorno ÷ diâmetro em objetos reais",
        cabecalhos: ["Objeto", "Contorno (C)", "Diâmetro (d)", "C ÷ d"],
        linhas: [
          { rotulo: "Moeda", valores: ["9,4 cm", "3 cm", "≈ 3,14"] },
          { rotulo: "Tampa", valores: ["62,8 cm", "20 cm", "≈ 3,14"] },
          { rotulo: "Roda", valores: ["219,8 cm", "70 cm", "≈ 3,14"] },
        ],
      },
      { tipo: "texto", texto: "🔑 C ÷ d dá sempre ≈ 3,14. Esse número constante é o π.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se C ÷ d é sempre π, como eu escrevo a fórmula do contorno?",
    pista: "Isole o C na igualdade C ÷ d = π.",
    revelacao: "C = π · d. E como o diâmetro é o dobro do raio (d = 2r), também vale C = 2 · π · r.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Da razão para a fórmula",
      passos: [
        { expr: "C ÷ d = π", explica: "O que a medição mostrou.", status: "neutro" },
        { expr: "C = π · d", explica: "Multipliquei os dois lados por d.", status: "ok" },
        {
          expr: "C = 2 · π · r",
          explica: "Porque d = 2r.",
          status: "ok",
          professor:
            "As duas fórmulas são a MESMA. Use C = π·d quando o problema der o diâmetro e C = 2πr quando der o raio. Trocar raio por diâmetro é o erro nº 1 nessa matéria — sempre marque no desenho qual dos dois você recebeu.",
        },
      ],
      fatorada: "C = π·d = 2·π·r",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Raio, diâmetro e comprimento da circunferência",
    etapas: [
      {
        texto: "RAIO (r) vai do centro até a borda. DIÂMETRO (d) atravessa o círculo passando pelo centro: d = 2r.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Roda com raio de 35 cm",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "d = 2 · r",
            passos: [
              { expr: "d = 2 · 35", explica: "Dobro do raio.", status: "neutro" },
              { expr: "d = 70 cm", explica: "Diâmetro da roda.", status: "ok" },
            ],
            fatorada: "70 cm",
          },
          destaque: "d = 2r sempre. r = d ÷ 2.",
        },
      },
      {
        texto: "COMPRIMENTO DA CIRCUNFERÊNCIA: C = 2 · π · r. Usamos π ≈ 3,14 nas contas da escola.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Circunferência de raio 10 cm",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "C = 2 · π · r",
            passos: [
              { expr: "C = 2 · 3,14 · 10", explica: "Substituo π e r.", status: "neutro" },
              { expr: "C = 6,28 · 10", explica: "Multiplico 2 por 3,14.", status: "neutro" },
              {
                expr: "C = 62,8 cm",
                explica: "Comprimento do contorno.",
                status: "ok",
                professor:
                  "π é um número irracional: 3,141592… sem fim e sem período. Por isso usamos 3,14 e escrevemos ≈ (aproximadamente) no resultado. Quem exige precisão de engenharia usa mais casas, nunca uma fração exata.",
              },
            ],
            fatorada: "≈ 62,8 cm",
          },
          destaque: "Comprimento é medida linear: cm, m.",
        },
      },
      {
        texto: "CAMINHO INVERSO: sabendo C, acho o raio dividindo por 2π.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Uma pista circular tem 314 m de contorno. Qual é o raio?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "314 = 2 · 3,14 · r",
            passos: [
              { expr: "314 = 6,28 · r", explica: "Junto 2 · 3,14.", status: "neutro" },
              { expr: "r = 314 ÷ 6,28", explica: "Operação inversa.", status: "ok" },
              {
                expr: "r = 50 m",
                explica: "Raio da pista.",
                status: "ok",
                professor:
                  "Conferindo de volta: 2 · 3,14 · 50 = 314 ✓. Sempre que você isolar uma incógnita, substitua o valor achado na fórmula original. É a verificação que separa quem estuda de quem chuta.",
              },
            ],
            fatorada: "r = 50 m",
          },
          destaque: "Isolar e conferir.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: uma roda de bicicleta tem 70 cm de diâmetro. Quantos centímetros ela avança em UMA volta completa?",
    resposta: "≈ 219,8 cm por volta",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "C = π · d",
      passos: [
        { expr: "C = 3,14 · 70", explica: "Diâmetro dado.", status: "neutro" },
        { expr: "C = 219,8 cm", explica: "Uma volta.", status: "ok" },
        {
          expr: "10 voltas = 2198 cm ≈ 22 m",
          explica: "Multiplico pelo número de voltas.",
          status: "ok",
          professor:
            "É exatamente assim que funciona o velocímetro da bicicleta: ele conta as voltas da roda e multiplica pelo comprimento da circunferência para saber a distância percorrida.",
        },
      ],
      fatorada: "≈ 219,8 cm",
      legenda: "Brilha resolve",
    },
    passos: ["Identifico se recebi raio ou diâmetro.", "Escolho C = π·d ou C = 2πr.", "Substituo π ≈ 3,14.", "Escrevo a unidade linear."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é o comprimento de uma circunferência de raio 5 cm?",
    dica: "C = 2 · 3,14 · 5.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "C = 2 · 3,14 · 5",
      passos: [
        { expr: "C = 6,28 · 5", explica: "2 vezes π.", status: "neutro" },
        { expr: "C = 31,4 cm", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "31,4 cm",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "31,4 cm" }, { nome: "15,7 cm" }, { nome: "78,5 cm" }],
      respostaCerta: "31,4 cm",
      feedbackAcerto: "🎯 2 · π · 5.",
      feedbackErro: "15,7 cm seria π · 5, ou seja, você usou o RAIO no lugar do diâmetro. Com raio, a fórmula tem o 2: C = 2 · 3,14 · 5 = 31,4 cm.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: um prato tem 20 cm de diâmetro. Qual é o contorno dele?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "C = π · d",
      passos: [
        { expr: "C = 3,14 · 20", explica: "Diâmetro dado.", status: "neutro" },
        { expr: "C = 62,8 cm", explica: "Contorno.", status: "ok" },
      ],
      fatorada: "62,8 cm",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "62,8 cm" }, { nome: "125,6 cm" }, { nome: "31,4 cm" }],
      respostaCerta: "62,8 cm",
      feedbackAcerto: "🎯 π vezes o diâmetro.",
      feedbackErro: "125,6 cm apareceu porque você usou 20 como RAIO (2 · 3,14 · 20). O enunciado deu o diâmetro: C = 3,14 · 20 = 62,8 cm.",
    },
  },

  momento08_aplicacao: {
    contexto: "A prefeitura vai instalar um banco circular em volta de uma árvore. O raio do canteiro é 1,5 m.",
    problema: "Quantos metros de banco serão necessários para dar a volta completa?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "C = 2 · π · 1,5",
      passos: [
        { expr: "C = 6,28 · 1,5", explica: "2 · π · r.", status: "neutro" },
        {
          expr: "C = 9,42 m",
          explica: "Comprimento do banco.",
          status: "ok",
          professor:
            "Na obra o pedreiro compra material com folga: 9,42 m viram 10 m de encomenda. Matemática dá o número exato; a prática arredonda para cima quando falta material atrapalha mais do que sobrar.",
        },
      ],
      fatorada: "≈ 9,42 m",
      legenda: "Aplicação — banco da praça",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "9,42 m" }, { nome: "4,71 m" }, { nome: "3 m" }],
      respostaCerta: "9,42 m",
      feedbackAcerto: "🎯 2 · 3,14 · 1,5.",
      feedbackErro: "4,71 m é π · 1,5, que usaria 1,5 como diâmetro. Como 1,5 m é o RAIO: C = 2 · 3,14 · 1,5 = 9,42 m.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Circunferência é o contorno; círculo é a região interna.",
      "d = 2r e r = d ÷ 2.",
      "π = C ÷ d ≈ 3,14 para qualquer círculo.",
      "C = π · d = 2 · π · r.",
      "Comprimento é medida linear (m, cm) — nunca m².",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "O número π é aproximadamente:", opcoes: ["3,14", "3,41", "2,14"], correta: 0, feedbackAcerto: "🎉 3,141592…", feedbackErro: "π ≈ 3,14 (3,141592… sem fim). Cuidado para não inverter os algarismos." },
      { pergunta: "Se o raio é 8 cm, o diâmetro é:", opcoes: ["16 cm", "4 cm", "8 cm"], correta: 0, feedbackAcerto: "🎉 d = 2r.", feedbackErro: "O diâmetro é o DOBRO do raio: d = 2 × 8 = 16 cm. Dividir por 2 é o caminho contrário." },
      { pergunta: "O comprimento de uma circunferência de diâmetro 10 cm é:", opcoes: ["31,4 cm", "62,8 cm", "78,5 cm"], correta: 0, feedbackAcerto: "🎉 3,14 × 10.", feedbackErro: "62,8 cm seria com raio 10. Como 10 é o diâmetro: C = 3,14 × 10 = 31,4 cm." },
      { pergunta: "C ÷ d resulta em:", opcoes: ["π, para qualquer círculo", "o raio", "um número diferente para cada círculo"], correta: 0, feedbackAcerto: "🎉 É a constante π.", feedbackErro: "Essa divisão dá SEMPRE π ≈ 3,14, do tamanho de uma moeda ao de um planeta." },
      { pergunta: "Uma pista circular mede 62,8 m de contorno. Seu raio é:", opcoes: ["10 m", "20 m", "31,4 m"], correta: 0, feedbackAcerto: "🎉 62,8 ÷ 6,28 = 10.", feedbackErro: "Divida o comprimento por 2π: 62,8 ÷ 6,28 = 10 m. 20 m seria o diâmetro." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caçando o π em casa",
    materiais: ["Barbante", "Régua", "3 objetos redondos"],
    passos: [
      "Contorne cada objeto com o barbante e meça o barbante na régua.",
      "Meça o diâmetro de cada objeto.",
      "Divida contorno ÷ diâmetro e veja o 3,14 aparecer nos três.",
    ],
    registro: "📸 Foto dos três objetos com as medidas e as divisões anotadas.",
  },
  recompensa: { xp: 245, moedas: 130, medalha: "Caçador de π" },
};
