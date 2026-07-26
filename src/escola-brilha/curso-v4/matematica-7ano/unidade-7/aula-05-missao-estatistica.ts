import type { AulaV4 } from "../../types";

/** Aula 05 · U7 — Missão final: pesquisa completa e simulação de probabilidade. */
export const aula05_missaoEstatistica: AulaV4 = {
  slug: "u7-05-missao-estatistica",
  titulo: "Missão: O Instituto de Pesquisa",
  iconeTrilha: "🏛️",
  bncc: ["EF07MA34", "EF07MA35", "EF07MA36", "EF07MA37"],
  duracaoMin: 34,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Você dirige o instituto",
    historia:
      "{NOME}, a escola contratou o seu instituto de pesquisa para descobrir o que fazer com o dinheiro da rifa. Você vai planejar a pesquisa, coletar dados, calcular as medidas, montar o gráfico e ainda prever a chance de sortear um vencedor. É a última missão do 7º ano — e junta tudo.",
  },

  momento02_exploracao: {
    instrucao: "Estes são os dados que o seu instituto coletou com 50 alunos.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Onde investir o dinheiro da rifa? (50 alunos)",
        cabecalhos: ["Opção", "Votos", "Porcentagem", "Ângulo"],
        linhas: [
          { rotulo: "Quadra", valores: [20, "40%", "144°"] },
          { rotulo: "Biblioteca", valores: [15, "30%", "108°"] },
          { rotulo: "Horta", valores: [10, "20%", "72°"] },
          { rotulo: "Sala de jogos", valores: [5, "10%", "36°"] },
        ],
      },
      {
        tipo: "graficoBarras",
        titulo: "Votos por opção",
        unidade: "votos",
        barras: [
          { rotulo: "Quadra", valor: 20 },
          { rotulo: "Biblioteca", valor: 15 },
          { rotulo: "Horta", valor: 10 },
          { rotulo: "Jogos", valor: 5 },
        ],
      },
      { tipo: "texto", texto: "🔑 Confira sempre: 20+15+10+5 = 50 votos, 100% e 360°.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "A opção mais votada teve maioria absoluta (mais da metade dos votos)?",
    pista: "Metade de 50 é 25. A quadra teve 20.",
    revelacao: "Não. A quadra venceu com 40%, mas 60% dos alunos preferiram outra coisa. Ser a mais votada não é o mesmo que ter a maioria.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Maioria simples × maioria absoluta",
      passos: [
        { expr: "quadra = 20 votos = 40%", explica: "Mais votada.", status: "neutro" },
        { expr: "metade de 50 = 25 votos", explica: "Limite da maioria absoluta.", status: "neutro" },
        {
          expr: "20 < 25 → maioria apenas simples",
          explica: "Venceu sem passar da metade.",
          status: "ok",
          professor:
            "Essa distinção decide eleições no Brasil inteiro. Maioria simples é ter mais votos que os outros; maioria absoluta é passar de 50%. Ler o dado com precisão evita conclusão errada.",
        },
      ],
      fatorada: "40% < 50%",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "As quatro etapas do instituto",
    etapas: [
      {
        texto: "ETAPA 1 — PLANEJAR: definir a pergunta, a população e uma amostra representativa.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Escola com 500 alunos, amostra de 50",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Tamanho da amostra",
            passos: [
              { expr: "50 ÷ 500 = 0,1 → 10%", explica: "A amostra é 10% da escola.", status: "ok" },
              { expr: "sortear alunos de todas as turmas", explica: "Evita viés.", status: "ok", professor: "Uma amostra de 10% bem sorteada vale muito mais do que 50% mal escolhidos. Representatividade importa mais que tamanho." },
            ],
            fatorada: "amostra de 10%",
          },
          destaque: "Planejamento evita resultado torto.",
        },
      },
      {
        texto: "ETAPA 2 — RESUMIR: calcular as medidas dos dados numéricos.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Votos por opção: 20, 15, 10 e 5",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "medidas dos votos",
            passos: [
              { expr: "média = (20+15+10+5) ÷ 4 = 12,5", explica: "Média de votos por opção.", status: "neutro" },
              { expr: "mediana: 5, 10, 15, 20 → (10+15) ÷ 2 = 12,5", explica: "Lista par.", status: "ok" },
              { expr: "amplitude = 20 − 5 = 15", explica: "Variação entre opções.", status: "ok" },
            ],
            fatorada: "média = mediana = 12,5",
          },
          destaque: "Média igual à mediana indica dados equilibrados.",
        },
      },
      {
        texto: "ETAPA 3 e 4 — REPRESENTAR e PREVER: montar o gráfico e calcular probabilidades do sorteio.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Sorteio de um aluno entre os 50 pesquisados",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "P(votou na quadra)",
            passos: [
              { expr: "favoráveis = 20", explica: "Quem votou na quadra.", status: "neutro" },
              { expr: "P = 20 ÷ 50 = 0,4 = 40%", explica: "Mesma porcentagem da tabela.", status: "ok", professor: "Não é coincidência: quando o sorteio é uniforme, a probabilidade de cair numa categoria é exatamente a frequência relativa dela. Estatística e probabilidade se encontram aqui." },
            ],
            fatorada: "40%",
          },
          destaque: "Frequência relativa = probabilidade no sorteio uniforme.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: qual é a chance de sortear um aluno que NÃO votou na quadra?",
    resposta: "60%",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P(não quadra)",
      passos: [
        { expr: "P(quadra) = 20 ÷ 50 = 40%", explica: "Evento original.", status: "neutro" },
        { expr: "P(não quadra) = 100% − 40%", explica: "Complemento.", status: "ok" },
        {
          expr: "= 60%",
          explica: "Trinta alunos dos cinquenta.",
          status: "ok",
          professor:
            "Conferindo pelo caminho longo: 15 + 10 + 5 = 30 alunos, e 30 ÷ 50 = 60%. Os dois métodos batem, como deve ser sempre.",
        },
      ],
      fatorada: "60%",
      legenda: "Brilha resolve",
    },
    passos: ["Calculo a probabilidade do evento.", "Uso o complemento (100% − P).", "Confiro somando as outras categorias.", "Escrevo a resposta em %."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: qual é o ângulo da fatia 'biblioteca' no gráfico de setores?",
    dica: "30% × 3,6.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "fatia da biblioteca",
      passos: [
        { expr: "15 ÷ 50 = 0,3 → 30%", explica: "Porcentagem.", status: "neutro" },
        { expr: "30 × 3,6 = 108°", explica: "Ângulo.", status: "ok" },
      ],
      fatorada: "108°",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "108°" }, { nome: "30°" }, { nome: "144°" }],
      respostaCerta: "108°",
      feedbackAcerto: "🎯 30% da volta.",
      feedbackErro: "144° é a fatia da quadra (40%). A biblioteca tem 30%: 30 × 3,6 = 108°.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: qual é a média de votos por opção (20, 15, 10 e 5)?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "média dos votos",
      passos: [
        { expr: "20 + 15 + 10 + 5 = 50", explica: "Soma.", status: "neutro" },
        { expr: "50 ÷ 4 = 12,5", explica: "Quatro opções.", status: "ok" },
      ],
      fatorada: "12,5 votos",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "12,5" }, { nome: "50" }, { nome: "10" }],
      respostaCerta: "12,5",
      feedbackAcerto: "🎯 50 ÷ 4.",
      feedbackErro: "50 é o total de votos. Divida pelas 4 opções: 50 ÷ 4 = 12,5.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A diretora quer publicar o resultado no mural. Ela pensou em escrever: 'A escola escolheu a quadra por maioria'.",
    problema: "Essa frase é honesta com os dados?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Analisando a manchete",
      passos: [
        { expr: "quadra = 40% dos votos", explica: "Mais votada.", status: "neutro" },
        { expr: "outras opções juntas = 60%", explica: "Maioria escolheu outra coisa.", status: "x" },
        {
          expr: "frase honesta: 'a quadra foi a mais votada, com 40%'",
          explica: "Descreve o dado sem exagerar.",
          status: "ok",
          professor:
            "Ética estatística é parte da matemática. O número não muda, mas a frase muda a percepção de quem lê. Um bom pesquisador escolhe a frase que o dado sustenta.",
        },
      ],
      fatorada: "40% ≠ maioria absoluta",
      legenda: "Aplicação — comunicando o resultado",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual manchete é correta?",
      opcoes: [{ nome: "A quadra foi a mais votada, com 40%" }, { nome: "A maioria da escola quer a quadra" }, { nome: "Todos escolheram a quadra" }],
      respostaCerta: "A quadra foi a mais votada, com 40%",
      feedbackAcerto: "🎯 Descreve exatamente o dado.",
      feedbackErro: "Com 40%, a quadra não teve maioria: 60% preferiram outras opções. A manchete precisa dizer 'a mais votada'.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Pesquisa completa: planejar → coletar → resumir → representar → concluir.",
      "Frequência relativa = fᵢ ÷ total × 100.",
      "Ângulo da fatia = porcentagem × 3,6.",
      "Média, mediana, moda e amplitude resumem dados numéricos.",
      "Num sorteio uniforme, a probabilidade de uma categoria é a frequência relativa dela.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "20 votos em 50 correspondem a:", opcoes: ["40%", "20%", "50%"], correta: 0, feedbackAcerto: "🎉 20 ÷ 50 = 0,4.", feedbackErro: "Divida pelo total pesquisado: 20 ÷ 50 = 0,4 → 40%." },
      { pergunta: "A fatia de 20% no gráfico de setores mede:", opcoes: ["72°", "20°", "108°"], correta: 0, feedbackAcerto: "🎉 20 × 3,6.", feedbackErro: "Multiplique a porcentagem por 3,6: 20 × 3,6 = 72°." },
      { pergunta: "A mediana de 5, 10, 15 e 20 é:", opcoes: ["12,5", "15", "10"], correta: 0, feedbackAcerto: "🎉 Média dos dois centrais.", feedbackErro: "A lista é par, então a mediana é (10 + 15) ÷ 2 = 12,5." },
      { pergunta: "Sortear um dos 50 pesquisados e ele ter votado na horta tem probabilidade:", opcoes: ["20%", "10%", "40%"], correta: 0, feedbackAcerto: "🎉 10 ÷ 50 = 0,2.", feedbackErro: "A horta teve 10 votos: 10 ÷ 50 = 0,2 → 20%." },
      { pergunta: "Ter 40% dos votos significa:", opcoes: ["maioria simples, não absoluta", "maioria absoluta", "unanimidade"], correta: 0, feedbackAcerto: "🎉 Não passou de 50%.", feedbackErro: "Maioria absoluta exige mais de 50%. Com 40%, a opção é apenas a mais votada." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Meu instituto de pesquisa",
    materiais: ["Caderno", "Transferidor", "Lápis de cor"],
    passos: [
      "Escolha uma pergunta e entreviste 10 pessoas da família e da vizinhança.",
      "Monte a tabela com frequências e porcentagens, calcule média e mediana quando fizer sentido.",
      "Desenhe o gráfico de setores e escreva uma manchete honesta sobre o resultado.",
    ],
    registro: "📸 Foto da tabela, do gráfico e da manchete escrita.",
  },
  recompensa: { xp: 320, moedas: 170, medalha: "Diretor do Instituto" },
};
