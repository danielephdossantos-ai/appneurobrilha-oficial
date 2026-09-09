import type { AulaV4 } from "../../types";

/** Aula 03 · U7 — Gráfico de setores e leitura crítica de gráficos. */
export const aula03_graficoSetores: AulaV4 = {
  slug: "u7-03-grafico-setores",
  titulo: "A Pizza dos Dados",
  iconeTrilha: "🥧",
  bncc: ["EF07MA37"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Quando o gráfico mente",
    historia:
      "{NOME}, gráfico é uma ferramenta poderosa — e por isso mesmo é usada para enganar. Barra cortada pela metade, escala esticada, fatia desenhada maior do que deveria. Hoje você aprende a montar o gráfico de setores com o ângulo CERTO e a desconfiar dos que estão errados.",
  },

  momento02_exploracao: {
    instrucao: "Cada fatia do círculo representa uma porcentagem do total de 360°.",
    cenas: [
      { tipo: "figuraPlana", forma: "circulo", legenda: "O círculo inteiro é 100% e vale 360°." },
      {
        tipo: "tabela",
        titulo: "Meio de transporte — 200 pessoas",
        cabecalhos: ["Meio", "Pessoas", "Porcentagem", "Ângulo da fatia"],
        linhas: [
          { rotulo: "Ônibus", valores: [100, "50%", "180°"] },
          { rotulo: "Carro", valores: [50, "25%", "90°"] },
          { rotulo: "A pé", valores: [30, "15%", "54°"] },
          { rotulo: "Bicicleta", valores: [20, "10%", "36°"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Ângulo da fatia = porcentagem × 360° ÷ 100. Todas as fatias somam 360°.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que 25% vira exatamente 90° na pizza?",
    pista: "Um quarto de 360°.",
    revelacao: "Porque 25% é um quarto do total, e um quarto de 360° é 90°. A fatia é proporcional à porcentagem.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "De porcentagem para ângulo",
      passos: [
        { expr: "100% ↔ 360°", explica: "A pizza inteira.", status: "neutro" },
        { expr: "25% = 25 ÷ 100 = 0,25", explica: "Fração do todo.", status: "neutro" },
        {
          expr: "0,25 × 360 = 90°",
          explica: "Ângulo da fatia.",
          status: "ok",
          professor:
            "É uma regra de três direta: se 100% correspondem a 360°, então x% correspondem a x · 3,6 graus. O fator 3,6 é o atalho — 360 ÷ 100.",
        },
      ],
      fatorada: "ângulo = % × 3,6",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Montar, ler e criticar gráficos",
    etapas: [
      {
        texto: "MONTAR O SETOR: transforme cada categoria em porcentagem e depois em ângulo (× 3,6).",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "30 de 200 pessoas vão a pé",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "fatia de 'a pé'",
            passos: [
              { expr: "30 ÷ 200 = 0,15 → 15%", explica: "Frequência relativa.", status: "neutro" },
              { expr: "15 × 3,6 = 54°", explica: "Ângulo da fatia.", status: "ok" },
              { expr: "conferindo: 180 + 90 + 54 + 36 = 360°", explica: "Fecha a volta.", status: "ok" },
            ],
            fatorada: "54°",
          },
          destaque: "Se não somar 360°, tem erro.",
        },
      },
      {
        texto: "LER O SETOR: o gráfico de setores mostra PARTE DO TODO, ótimo para comparar percentuais.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Uma fatia ocupa 90° num gráfico de 400 votos",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "de ângulo para quantidade",
            passos: [
              { expr: "90 ÷ 360 = 0,25 → 25%", explica: "Fração da volta.", status: "neutro" },
              {
                expr: "25% de 400 = 100 votos",
                explica: "Aplico ao total.",
                status: "ok",
                professor:
                  "Caminho de ida e de volta: quantidade → porcentagem → ângulo, e ângulo → porcentagem → quantidade. Saber percorrer nos dois sentidos é o que a prova cobra.",
              },
            ],
            fatorada: "100 votos",
          },
          destaque: "Sem o total, a porcentagem não vira quantidade.",
        },
      },
      {
        texto: "CRITICAR O GRÁFICO: eixo que não começa no zero, escala irregular ou fatias que não somam 100% distorcem a leitura.",
        exemploReal: {
          titulo: "🔎 Gráfico honesto",
          contexto: "Mesmos dados, barras com escala começando em zero",
          visualMat: {
            tipo: "graficoBarras",
            titulo: "Meio de transporte (200 pessoas)",
            unidade: "pessoas",
            barras: [
              { rotulo: "Ônibus", valor: 100 },
              { rotulo: "Carro", valor: 50 },
              { rotulo: "A pé", valor: 30 },
              { rotulo: "Bicicleta", valor: 20 },
            ],
          },
          destaque: "Barras para comparar quantidades; setores para ver a divisão do todo.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: numa turma de 40 alunos, 10 preferem matemática. Qual é o ângulo dessa fatia no gráfico de setores?",
    resposta: "90°",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "10 em 40 alunos",
      passos: [
        { expr: "10 ÷ 40 = 0,25 → 25%", explica: "Porcentagem.", status: "neutro" },
        { expr: "25 × 3,6 = 90°", explica: "Ângulo da fatia.", status: "ok" },
        {
          expr: "90° é um quarto da pizza",
          explica: "Confere com 1/4 de 40 = 10.",
          status: "ok",
          professor:
            "Sempre visualize: 25% deve parecer um quarto do círculo. Se o desenho sair muito diferente disso, houve erro no transferidor ou na conta.",
        },
      ],
      fatorada: "90°",
      legenda: "Brilha resolve",
    },
    passos: ["Acho a porcentagem.", "Multiplico por 3,6.", "Desenho com transferidor.", "Confiro se tudo soma 360°."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é o ângulo da fatia de 50%?",
    dica: "Metade da pizza.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "50% em graus",
      passos: [
        { expr: "50 × 3,6", explica: "Fator 360 ÷ 100.", status: "neutro" },
        { expr: "= 180°", explica: "Meia volta.", status: "ok" },
      ],
      fatorada: "180°",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "180°" }, { nome: "90°" }, { nome: "50°" }],
      respostaCerta: "180°",
      feedbackAcerto: "🎯 Metade de 360°.",
      feedbackErro: "90° corresponde a 25%. Metade da pizza (50%) é 180°.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: uma fatia tem 36°. Que porcentagem ela representa?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "36° em porcentagem",
      passos: [
        { expr: "36 ÷ 360 = 0,1", explica: "Fração da volta.", status: "neutro" },
        { expr: "0,1 × 100 = 10%", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "10%",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "10%" }, { nome: "36%" }, { nome: "3,6%" }],
      respostaCerta: "10%",
      feedbackAcerto: "🎯 36 ÷ 360.",
      feedbackErro: "36% seria a fatia de 129,6°. Divida pelo total de graus: 36 ÷ 360 = 0,1 → 10%.",
    },
  },

  momento08_aplicacao: {
    contexto: "A escola pesquisou o destino do lixo em 500 kg coletados: 250 kg recicláveis, 150 kg orgânicos e 100 kg rejeito.",
    problema: "Quais são as porcentagens e os ângulos de cada fatia?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "500 kg de lixo",
      passos: [
        { expr: "recicláveis: 250 ÷ 500 = 50% → 180°", explica: "Metade.", status: "ok" },
        { expr: "orgânicos: 150 ÷ 500 = 30% → 108°", explica: "30 × 3,6.", status: "ok" },
        {
          expr: "rejeito: 100 ÷ 500 = 20% → 72°",
          explica: "20 × 3,6.",
          status: "ok",
          professor:
            "Verificação obrigatória: 50 + 30 + 20 = 100% e 180 + 108 + 72 = 360°. Duas confirmações independentes de que o gráfico está correto.",
        },
      ],
      fatorada: "180° · 108° · 72°",
      legenda: "Aplicação — lixo da escola",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é o ângulo da fatia dos orgânicos?",
      opcoes: [{ nome: "108°" }, { nome: "150°" }, { nome: "30°" }],
      respostaCerta: "108°",
      feedbackAcerto: "🎯 30% × 3,6.",
      feedbackErro: "150 é a quantidade em kg, não o ângulo. A fatia é 30% de 360°: 30 × 3,6 = 108°.",
    },
  },

  momento09_revisao: {
    pontos: [
      "O gráfico de setores mostra parte do todo: 100% ↔ 360°.",
      "Ângulo da fatia = porcentagem × 3,6.",
      "Porcentagem = ângulo ÷ 360 × 100.",
      "As fatias somam 360° e as porcentagens somam 100%.",
      "Desconfie de eixo fora do zero e de escala irregular.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "A fatia de 25% mede:", opcoes: ["90°", "25°", "180°"], correta: 0, feedbackAcerto: "🎉 Um quarto de 360°.", feedbackErro: "Multiplique por 3,6: 25 × 3,6 = 90°. Porcentagem não é grau." },
      { pergunta: "A soma de todas as fatias do gráfico de setores é:", opcoes: ["360°", "180°", "100°"], correta: 0, feedbackAcerto: "🎉 Uma volta completa.", feedbackErro: "O círculo inteiro tem 360°, que correspondem aos 100% dos dados." },
      { pergunta: "Uma fatia de 72° representa:", opcoes: ["20%", "72%", "7,2%"], correta: 0, feedbackAcerto: "🎉 72 ÷ 360 = 0,2.", feedbackErro: "Divida pelos 360° da volta: 72 ÷ 360 = 0,2 → 20%." },
      { pergunta: "O melhor gráfico para mostrar a divisão de um total em partes é:", opcoes: ["setores", "linha", "pictograma de escala livre"], correta: 0, feedbackAcerto: "🎉 Setores mostram parte do todo.", feedbackErro: "O gráfico de linha serve para evolução no tempo. Para partes de um total, use setores." },
      { pergunta: "Um gráfico de barras cujo eixo começa em 90 em vez de 0:", opcoes: ["exagera as diferenças", "é sempre correto", "não muda nada"], correta: 0, feedbackAcerto: "🎉 Truque clássico de manipulação.", feedbackErro: "Cortar o eixo faz diferenças pequenas parecerem enormes. Barras honestas começam no zero." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A pizza do meu dia",
    materiais: ["Compasso ou tampa redonda", "Transferidor", "Lápis de cor"],
    passos: [
      "Anote quantas horas você passa dormindo, estudando, brincando e nas outras atividades.",
      "Transforme cada bloco em porcentagem das 24 horas e depois em graus.",
      "Desenhe o gráfico de setores do seu dia.",
    ],
    registro: "📸 Foto do gráfico do dia com os ângulos anotados.",
  },
  recompensa: { xp: 250, moedas: 130, medalha: "Leitor de Gráficos" },
};
