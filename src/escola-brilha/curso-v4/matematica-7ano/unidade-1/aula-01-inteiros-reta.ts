import type { AulaV4 } from "../../types";

/**
 * Aula 01 · U1 — Números inteiros na reta: o elevador do prédio.
 * Padrão piloto 8º ano: passo a passo interativo + Professor explica.
 */
export const aula01_inteirosReta: AulaV4 = {
  slug: "u1-01-inteiros-reta",
  titulo: "O Elevador dos Inteiros",
  iconeTrilha: "🛗",
  bncc: ["EF07MA02", "EF07MA03"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Abaixo do zero existe número",
    historia:
      "{NOME}, o elevador do prédio tem os andares 1, 2, 3… mas também tem −1 e −2: as garagens. O térreo é o ZERO. Hoje você descobre que a reta numérica não acaba no zero — ela continua para a esquerda.",
  },

  momento02_exploracao: {
    instrucao: "Olhe a reta. O zero é o térreo; à direita sobe, à esquerda desce.",
    cenas: [
      {
        tipo: "retaNumerica",
        min: -6,
        max: 6,
        passo: 1,
        destacar: [
          { valor: -4, rotulo: "−4" },
          { valor: 0, rotulo: "0" },
          { valor: 3, rotulo: "+3" },
        ],
        legenda: "Reta numérica dos inteiros (ℤ)",
      },
      {
        tipo: "texto",
        texto: "🔑 Quanto mais à DIREITA, MAIOR o número. Então −4 < 0 < 3. Sim: −4 é menor que zero.",
      },
      {
        tipo: "tabela",
        titulo: "Onde aparecem os negativos",
        cabecalhos: ["Situação", "Positivo", "Negativo"],
        linhas: [
          { rotulo: "1", valores: ["Prédio", "3º andar (+3)", "2ª garagem (−2)"] },
          { rotulo: "2", valores: ["Temperatura", "18 °C", "−5 °C"] },
          { rotulo: "3", valores: ["Dinheiro", "saldo +200", "dívida −200"] },
          { rotulo: "4", valores: ["Altitude", "topo +8 848 m", "fossa −10 994 m"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Entre −8 e −3, qual é o MAIOR?",
    pista: "Não olhe o tamanho do número; olhe a POSIÇÃO na reta. Quem está mais à direita é maior.",
    revelacao: "−3 é maior que −8. Nos negativos, quanto maior o número escrito, MENOR ele vale.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Comparar −8 e −3",
      passos: [
        { expr: "−8 ......... −3", explica: "Quem é maior?", status: "neutro", professor: "A pergunta parece boba, mas é o erro nº 1 do 7º ano: achar que −8 > −3 porque 8 > 3." },
        { expr: "Na reta: −8 fica à esquerda de −3", explica: "Posição decide.", status: "ok" },
        { expr: "−8 < −3", explica: "Mais à esquerda = menor.", status: "ok", professor: "Pense em dívida: dever R$ 8 é pior do que dever R$ 3. Quem deve 3 está em situação MELHOR, ou seja, maior no valor." },
        { expr: "Ordem crescente: −8 < −3 < 0 < 3 < 8", explica: "Da esquerda para a direita.", status: "ok" },
      ],
      fatorada: "−8 < −3",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Inteiros: sinal, posição e ordem",
    etapas: [
      {
        texto:
          "O conjunto ℤ (inteiros) reúne os naturais, o zero e os opostos negativos: … −3, −2, −1, 0, 1, 2, 3 … O sinal indica o LADO do zero, não o tamanho.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Localizar −5 na reta.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Localizar −5",
            passos: [
              { expr: "Começo no 0", explica: "O zero é a referência.", status: "neutro" },
              { expr: "Sinal − → ando para a ESQUERDA", explica: "Sinal indica direção.", status: "ok", professor: "O sinal é uma instrução de movimento: + é para a direita, − é para a esquerda." },
              { expr: "Ando 5 casas", explica: "O número indica a distância.", status: "ok" },
              { expr: "Chego em −5", explica: "Ponto localizado.", status: "ok" },
            ],
            fatorada: "−5 fica 5 casas à esquerda do zero",
          },
          destaque: "Sinal = direção. Número = distância do zero.",
        },
      },
      {
        texto:
          "OPOSTO (ou simétrico) é o número que fica à mesma distância do zero, mas do outro lado. O oposto de +7 é −7; o oposto de −7 é +7. O oposto de 0 é o próprio 0.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "retaNumerica",
            min: -8,
            max: 8,
            passo: 2,
            destacar: [
              { valor: -7, rotulo: "−7" },
              { valor: 7, rotulo: "+7" },
            ],
            intervalos: [{ de: -7, ate: 7, rotulo: "mesma distância dos dois lados" }],
            legenda: "−7 e +7 são opostos",
          },
          destaque: "Opostos somados dão zero: (−7) + (+7) = 0.",
        },
      },
      {
        texto:
          "MÓDULO (valor absoluto) é a distância até o zero, sempre sem sinal. Escreve-se |x|. Assim |−9| = 9 e |+9| = 9. Módulo NUNCA é negativo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "|−9| e |+9|",
            passos: [
              { expr: "|−9| = 9", explica: "Distância de −9 até 0 é 9.", status: "ok" },
              { expr: "|+9| = 9", explica: "Distância de +9 até 0 é 9.", status: "ok", professor: "Distância não tem sinal. Se alguém escrever |−9| = −9, está errado: o módulo devolve sempre um valor positivo ou zero." },
              { expr: "|0| = 0", explica: "Único caso em que o módulo é zero.", status: "ok" },
            ],
            fatorada: "|x| ≥ 0 sempre",
          },
          destaque: "Módulo mede distância; distância nunca é negativa.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: coloque em ordem crescente −2, 5, −7, 0, 3.",
    resposta: "−7 < −2 < 0 < 3 < 5",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Ordenar −2, 5, −7, 0, 3",
      passos: [
        { expr: "Negativos: −7 e −2", explica: "Separo por sinal.", status: "neutro", professor: "Todo negativo é menor que zero e menor que qualquer positivo. Então os negativos vêm primeiro." },
        { expr: "−7 < −2", explica: "−7 está mais à esquerda.", status: "ok" },
        { expr: "Depois o 0", explica: "Zero separa os dois lados.", status: "ok" },
        { expr: "Positivos: 3 < 5", explica: "Ordem normal.", status: "ok" },
        { expr: "−7 < −2 < 0 < 3 < 5", explica: "Ordem crescente completa.", status: "ok" },
      ],
      fatorada: "−7 < −2 < 0 < 3 < 5",
      legenda: "Brilha resolve",
    },
    passos: [
      "Separo negativos, zero e positivos.",
      "Entre negativos, o de maior módulo é o MENOR: −7 < −2.",
      "Zero fica no meio.",
      "Entre positivos, ordem normal: 3 < 5.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é o maior, −12 ou −20?",
    dica: "Quem está mais à direita na reta é maior. −12 está à direita de −20.",
    visualMat: {
      tipo: "retaNumerica",
      min: -24,
      max: 4,
      passo: 4,
      destacar: [
        { valor: -20, rotulo: "−20" },
        { valor: -12, rotulo: "−12" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−12" }, { nome: "−20" }, { nome: "São iguais" }],
      respostaCerta: "−12",
      feedbackAcerto: "🎯 −12 está mais à direita, então −12 > −20.",
      feedbackErro: "Nos negativos inverte: quanto MAIOR o número escrito, MENOR o valor. −20 < −12.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: quanto vale |−15|?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "|−15|",
      passos: [
        { expr: "|−15| = distância de −15 até 0", explica: "Definição de módulo.", status: "neutro" },
        { expr: "= 15", explica: "Sempre positivo.", status: "ok" },
      ],
      fatorada: "|−15| = 15",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "15" }, { nome: "−15" }, { nome: "0" }],
      respostaCerta: "15",
      feedbackAcerto: "🎯 Módulo é distância — sempre positivo.",
      feedbackErro: "O módulo tira o sinal: |−15| = 15. Resultado de módulo nunca é negativo.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Num dia de inverno, a temperatura em Urupema foi −4 °C de madrugada e 11 °C à tarde.",
    problema: "Quantos graus a temperatura SUBIU do início ao fim do dia?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "De −4 °C até 11 °C",
      passos: [
        { expr: "De −4 até 0", explica: "Sobe 4 graus.", status: "neutro", professor: "Divido o caminho em dois trechos porque o zero é a fronteira entre os dois lados da reta." },
        { expr: "De 0 até 11", explica: "Sobe mais 11 graus.", status: "ok" },
        { expr: "4 + 11 = 15", explica: "Somo os dois trechos.", status: "ok", professor: "Também dá para fazer direto: 11 − (−4) = 11 + 4 = 15. É a mesma conta, e você vai aprender isso na aula 3." },
      ],
      fatorada: "Subiu 15 °C",
      legenda: "Aplicação — variação de temperatura",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "15 °C" }, { nome: "7 °C" }, { nome: "11 °C" }],
      respostaCerta: "15 °C",
      feedbackAcerto: "🎯 4 graus até o zero + 11 depois do zero = 15.",
      feedbackErro: "Não é 11 − 4. A temperatura atravessou o zero: sobe 4 até chegar a 0 e mais 11 depois. Total 15 °C.",
    },
  },

  momento09_revisao: {
    pontos: [
      "ℤ = … −3, −2, −1, 0, 1, 2, 3 …",
      "Sinal indica o lado do zero; número indica a distância.",
      "Mais à direita = maior. Logo −8 < −3.",
      "Oposto: mesma distância, outro lado. (−7) + (+7) = 0.",
      "Módulo |x| é distância — nunca negativo.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é o maior?",
        opcoes: ["−1", "−6", "−10"],
        correta: 0,
        feedbackAcerto: "🎉 −1 é o mais próximo do zero pela esquerda, então é o maior dos três.",
        feedbackErro: "Nos negativos, quanto maior o número escrito, menor o valor: −10 < −6 < −1.",
      },
      {
        pergunta: "O oposto de −13 é:",
        opcoes: ["+13", "−13", "0"],
        correta: 0,
        feedbackAcerto: "🎉 Mesma distância do zero, do outro lado.",
        feedbackErro: "Oposto troca o lado do zero: o oposto de −13 é +13, porque (−13) + (+13) = 0.",
      },
      {
        pergunta: "|−7| =",
        opcoes: ["7", "−7", "±7"],
        correta: 0,
        feedbackAcerto: "🎉 Módulo devolve a distância, sempre positiva.",
        feedbackErro: "Módulo nunca é negativo: |−7| = 7.",
      },
      {
        pergunta: "Ordem crescente de 2, −5, 0, −1:",
        opcoes: ["−5, −1, 0, 2", "−1, −5, 0, 2", "0, −1, 2, −5"],
        correta: 0,
        feedbackAcerto: "🎉 Da esquerda para a direita na reta.",
        feedbackErro: "Primeiro os negativos, do mais distante do zero para o mais próximo: −5, −1. Depois 0 e 2.",
      },
      {
        pergunta: "Um mergulhador está a −18 m e sobe até −6 m. Ele:",
        opcoes: ["subiu 12 m", "desceu 12 m", "subiu 24 m"],
        correta: 0,
        feedbackAcerto: "🎉 −6 está acima de −18: subiu 12 metros.",
        feedbackErro: "−6 é MAIOR que −18 (está mais perto da superfície). A diferença é 18 − 6 = 12 m de subida.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça aos negativos em casa",
    materiais: ["Papel", "Caneta", "Termômetro ou app do tempo"],
    passos: [
      "Anote 5 situações reais com números negativos (freezer, saldo, elevador, previsão do tempo de outra cidade).",
      "Desenhe uma reta numérica de −10 a +10 e marque cada situação.",
      "Explique para alguém da família por que −8 é MENOR que −3.",
    ],
    registro: "📸 Foto da reta numérica desenhada.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Explorador dos Inteiros" },
};
