import type { AulaV4 } from "../../types";

/**
 * Aula 01 · U7 — Pesquisa e amostragem: população, amostra e viés.
 */
export const aula01_pesquisaAmostragem: AulaV4 = {
  slug: "u7-01-pesquisa-amostragem",
  titulo: "O Instituto Brilha de Pesquisas",
  iconeTrilha: "🔎",
  bncc: ["EF09MA21", "EF09MA23"],
  duracaoMin: 30,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Um instituto de pesquisa nasce",
    historia:
      "{NOME}, hoje você vira pesquisador do Instituto Brilha! Nossa missão da unidade é descobrir quanto tempo por dia os estudantes da escola passam de tela. Só que não dá pra perguntar aos 900 alunos — precisamos escolher um GRUPO que represente bem todo mundo. Essa escolha certa (ou errada) muda tudo.",
  },

  momento02_exploracao: {
    instrucao: "Veja as duas formas de escolher quem entrevistar.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "População x Amostra",
        cabecalhos: ["Termo", "Significado", "Exemplo"],
        linhas: [
          { rotulo: "1", valores: ["População", "TODO o grupo que queremos estudar", "os 900 alunos da escola"] },
          { rotulo: "2", valores: ["Amostra", "uma PARTE da população, escolhida para representar o todo", "60 alunos sorteados"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "🔑 Pesquisar a população inteira é o CENSO. Quase sempre é caro e demorado — por isso usamos AMOSTRAS bem escolhidas.",
      },
      {
        tipo: "tabela",
        titulo: "Duas formas de escolher a amostra",
        cabecalhos: ["Forma", "Como funciona", "Resultado"],
        linhas: [
          { rotulo: "1", valores: ["Amostra aleatória simples", "sorteio: qualquer aluno tem a mesma chance de ser escolhido", "representa bem a população"] },
          { rotulo: "2", valores: ["Amostra viciada (com viés)", "só pergunta a quem está mais fácil de alcançar", "distorce o resultado"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia:
      "Se eu quero saber quanto tempo de tela TODOS os alunos usam, mas só entrevisto quem está na fila da sala de informática, o resultado vale para todo mundo?",
    pista: "Pense em quem costuma estar na fila da sala de informática.",
    revelacao:
      "Não vale! Quem está na fila de informática já é quem mais usa tela. Essa amostra tem VIÉS DE SELEÇÃO: super-representa um grupo específico e engana a conclusão.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Pesquisa: tempo de tela dos 900 alunos",
      passos: [
        { expr: "Amostra: fila da sala de informática", explica: "Só alunos que já usam tela.", status: "x", professor: "Escolher a amostra pelo lugar onde é mais fácil perguntar chama-se amostra de conveniência — quase sempre é viciada." },
        { expr: "Resultado: 'todo mundo usa 6h de tela por dia'", explica: "Conclusão exagerada.", status: "x" },
        { expr: "Amostra: sorteio entre TODOS os 900 alunos", explica: "Cada aluno tem a mesma chance.", status: "ok", professor: "Amostra aleatória simples: cada elemento da população tem a mesma probabilidade de ser sorteado, o que evita favorecer um grupo específico." },
        { expr: "Resultado: reflete melhor a realidade da escola", explica: "Amostra representativa.", status: "ok" },
      ],
      fatorada: "Amostra aleatória simples > amostra de conveniência",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Planejando uma pesquisa estatística",
    etapas: [
      {
        texto:
          "Toda pesquisa estatística tem 4 etapas: (1) definir a POPULAÇÃO e a pergunta; (2) escolher a AMOSTRA; (3) coletar os dados com um instrumento (questionário, entrevista); (4) organizar e interpretar os resultados.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Planejar a pesquisa 'tempo de tela dos alunos do 9º ano'.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Planejamento da pesquisa",
            passos: [
              { expr: "1. População: todos os 180 alunos do 9º ano", explica: "Quem eu quero conhecer.", status: "ok" },
              { expr: "2. Amostra: sorteio de 30 alunos (1 a cada 6)", explica: "Grupo que vai representar o todo.", status: "ok", professor: "Escolher 1 em cada 6 alunos de uma lista numerada, começando por um número sorteado, é uma amostragem sistemática — outra forma válida de sortear." },
              { expr: "3. Instrumento: questionário com a pergunta 'quantas horas de tela por dia?'", explica: "Como coletar.", status: "ok" },
              { expr: "4. Organizar em tabela e calcular a média", explica: "O que fazer com os dados.", status: "ok" },
            ],
            fatorada: "População → Amostra → Coleta → Interpretação",
          },
          destaque: "Sem planejamento, a pesquisa corre risco de viés.",
        },
      },
      {
        texto:
          "AMOSTRA ALEATÓRIA SIMPLES: todo elemento da população tem a MESMA chance de ser sorteado (como tirar nomes de uma urna, embaralhados). É o padrão-ouro para representar bem a população.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Sortear 5 alunos entre 30 para uma entrevista.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Sorteio de 5 entre 30 alunos",
            passos: [
              { expr: "Escrevo os 30 nomes em papéis idênticos", explica: "Todos do mesmo jeito, sem distinção.", status: "ok" },
              { expr: "Misturo bem numa urna", explica: "Garante o acaso.", status: "ok" },
              { expr: "Sorteio 5 papéis, sem olhar", explica: "Cada nome tinha a mesma chance.", status: "ok", professor: "A chance de cada aluno específico ser sorteado é 5/30 = 1/6 — igual para todos, o que caracteriza a amostra aleatória simples." },
            ],
            fatorada: "Cada aluno: chance 5/30 = 1/6",
          },
          destaque: "Chance igual para todos = amostra aleatória simples.",
        },
      },
      {
        texto:
          "VIÉS DE AMOSTRAGEM é qualquer distorção que faz a amostra NÃO representar a população. Acontece quando: só respondem os mais fáceis de alcançar, só respondem os que se interessam pelo tema, ou a pergunta é mal formulada e induz a resposta.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Pesquisa por enquete de rede social sobre time de futebol favorito da cidade.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Enquete só com quem segue a página do time A",
            passos: [
              { expr: "Amostra: seguidores da página do time A", explica: "Já são fãs do time A.", status: "x" },
              { expr: "Resultado: '90% torce para o time A'", explica: "Número inflado.", status: "x", professor: "Esse é um viés de autosseleção: só respondem as pessoas que já têm interesse forte no tema, o que exagera o resultado." },
              { expr: "Amostra correta: sorteio entre moradores da cidade", explica: "Representa todos os torcedores.", status: "ok" },
            ],
            fatorada: "Enquete de rede social ≠ amostra confiável",
          },
          destaque: "Amostra fácil de coletar nem sempre é amostra confiável.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha resolve: o instituto quer saber a comida favorita do refeitório (800 alunos). Como planejar essa pesquisa sem viés?",
    resposta:
      "Sortear ao acaso 50 alunos entre TODOS os 800 (usando lista numerada e sorteio), não só os que estão na fila do refeitório na hora do almoço.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Pesquisa sobre comida favorita (800 alunos)",
      passos: [
        { expr: "Errado: perguntar só na fila do refeitório às 12h", explica: "Só pega quem já está almoçando lá.", status: "x", professor: "Quem não almoça no refeitório (leva marmita, não gosta do cardápio) fica de fora — a amostra não representa a população inteira." },
        { expr: "Certo: numerar os 800 alunos de 1 a 800", explica: "Cada aluno vira um número da lista.", status: "ok" },
        { expr: "Sortear 50 números ao acaso", explica: "Amostra aleatória simples.", status: "ok" },
        { expr: "Entrevistar exatamente esses 50, onde quer que estejam", explica: "Representa toda a população.", status: "ok" },
      ],
      fatorada: "Amostra aleatória simples de 50 em 800",
      legenda: "Brilha resolve",
    },
    passos: [
      "Defino a população: os 800 alunos.",
      "Numero todos, sem exceção.",
      "Sorteio 50 números — cada aluno tem a mesma chance.",
      "Entrevisto exatamente os sorteados, não substituo por conveniência.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado:
      "Nós fazemos: uma pesquisadora quer saber a opinião de TODA a cidade sobre um novo parque, mas entrevista só quem passa em frente à prefeitura às 10h de uma terça-feira. Isso é uma boa amostra?",
    dica: "Pense em quem costuma estar na rua às 10h de terça — trabalhadores, estudantes, idosos aposentados?",
    visualMat: {
      tipo: "tabela",
      titulo: "Quem passa em frente à prefeitura às 10h de terça",
      cabecalhos: ["Grupo", "Está por lá às 10h de terça?"],
      linhas: [
        { rotulo: "1", valores: ["Aposentados e donas de casa", "Sim, provavelmente"] },
        { rotulo: "2", valores: ["Trabalhadores em horário comercial", "Não, estão no trabalho"] },
        { rotulo: "3", valores: ["Estudantes", "Não, estão na escola"] },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Essa amostra representa bem toda a cidade?",
      opcoes: [{ nome: "Não, tem viés de horário/local" }, { nome: "Sim, qualquer amostra serve" }, { nome: "Sim, porque é gente de verdade" }],
      respostaCerta: "Não, tem viés de horário/local",
      feedbackAcerto:
        "🎯 Exato! Só pegar quem passa ali às 10h de terça exclui quem trabalha ou estuda nesse horário — a amostra fica viesada.",
      feedbackErro:
        "Repense: às 10h de terça-feira, trabalhadores e estudantes não estão nas ruas. A amostra super-representa aposentados e donas de casa, e não vale para a cidade toda.",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "Você faz: para saber a nota média de matemática de uma escola com 500 alunos, qual é a MELHOR forma de escolher a amostra?",
    visualMat: {
      tipo: "tabela",
      titulo: "Opções de amostragem",
      cabecalhos: ["Opção", "Descrição"],
      linhas: [
        { rotulo: "A", valores: ["Sortear 60 alunos entre todos os 500, numerados"] },
        { rotulo: "B", valores: ["Pegar só os 60 alunos que tiraram nota 10 na última prova"] },
        { rotulo: "C", valores: ["Pegar só os alunos do grêmio estudantil"] },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual opção dá a amostra mais confiável?",
      opcoes: [{ nome: "Opção A" }, { nome: "Opção B" }, { nome: "Opção C" }],
      respostaCerta: "Opção A",
      feedbackAcerto:
        "🎯 Sortear entre todos, com chance igual para cada aluno, é a amostra aleatória simples — a mais confiável.",
      feedbackErro:
        "As opções B e C escolhem grupos específicos (só notas altas, só um grupo de alunos) — isso é viés. A opção A sorteia entre todos, dando chance igual a cada aluno.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "O Instituto Brilha vai pesquisar quantos livros os 240 alunos da escola leem por mês. O tempo é curto para entrevistar todo mundo.",
    problema:
      "Qual plano de amostragem é o mais adequado: (A) sortear 40 alunos entre todos os 240, numerados de 1 a 240; ou (B) entrevistar os 40 alunos que estão na fila da biblioteca?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Escolher plano de amostragem",
      passos: [
        { expr: "Plano B: fila da biblioteca", explica: "Já são leitores frequentes.", status: "x", professor: "Quem está na fila da biblioteca já tem o hábito de ler — a amostra vai mostrar uma média de leitura maior do que a real da escola." },
        { expr: "Plano A: sorteio entre os 240", explica: "Chance igual para todos, leitores ou não.", status: "ok" },
      ],
      fatorada: "Plano A é o correto",
      legenda: "Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o plano correto:",
      opcoes: [{ nome: "Plano A — sorteio entre todos" }, { nome: "Plano B — fila da biblioteca" }],
      respostaCerta: "Plano A — sorteio entre todos",
      feedbackAcerto:
        "🎯 Isso mesmo! O sorteio dá chance igual a todos, inclusive quem não costuma ler — a amostra fica representativa.",
      feedbackErro:
        "A fila da biblioteca só tem quem já lê bastante — a amostra ficaria viciada para cima. O sorteio entre todos os 240 alunos é a escolha certa.",
    },
  },

  momento09_revisao: {
    pontos: [
      "População = todo o grupo estudado. Amostra = parte escolhida para representá-lo.",
      "Censo pesquisa a população inteira; é caro e demorado.",
      "Amostra aleatória simples: cada elemento tem a mesma chance de ser sorteado.",
      "Viés de amostragem distorce o resultado (conveniência, autosseleção, pergunta induzida).",
      "Planejamento de pesquisa: população/pergunta → amostra → coleta → interpretação.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é uma AMOSTRA em uma pesquisa estatística?",
        opcoes: [
          "Uma parte da população, escolhida para representar o todo",
          "O mesmo que a população inteira",
          "Só as pessoas que respondem por vontade própria",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A amostra é um recorte da população, usado quando pesquisar todo mundo é inviável.",
        feedbackErro:
          "Amostra não é a população inteira (isso é censo) nem apenas quem se voluntaria (isso pode gerar viés). Amostra é uma parte bem escolhida do todo.",
      },
      {
        pergunta: "Qual dessas é uma amostra ALEATÓRIA SIMPLES?",
        opcoes: [
          "Sortear 30 nomes de uma lista completa de alunos, numerada",
          "Entrevistar só os alunos que chegam mais cedo",
          "Entrevistar só quem já respondeu outra pesquisa",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! No sorteio de uma lista completa, todo aluno tem a mesma chance de ser escolhido.",
        feedbackErro:
          "As outras opções favorecem um grupo específico (quem chega cedo, quem já respondeu antes). Amostra aleatória simples exige chance igual para todos.",
      },
      {
        pergunta: "Uma pesquisa sobre horas de sono entrevista só quem está acordado às 6h da manhã na academia. Isso é:",
        opcoes: [
          "Uma amostra com viés — favorece quem já acorda cedo",
          "Uma amostra aleatória simples",
          "Um censo",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Exato! Quem está na academia às 6h já tem rotina de acordar cedo — a amostra super-representa esse grupo.",
        feedbackErro:
          "Isso é viés de amostragem: só entrevistar quem está na academia de manhã cedo já filtra pessoas com um hábito específico de sono.",
      },
      {
        pergunta: "Por que pesquisadores usam AMOSTRA em vez de CENSO na maioria das pesquisas?",
        opcoes: [
          "Porque pesquisar toda a população costuma ser caro e demorado",
          "Porque amostra sempre dá um resultado mais exato que o censo",
          "Porque a lei proíbe pesquisar todo mundo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo! Amostras bem planejadas custam menos tempo e dinheiro e ainda representam bem a população.",
        feedbackErro:
          "Amostra não é mais exata que o censo — é uma alternativa prática quando pesquisar toda a população é caro ou demorado demais.",
      },
      {
        pergunta: "Uma escola tem 500 alunos. Para saber a comida favorita, o instituto numera todos de 1 a 500 e sorteia 50 números. Essa é uma boa estratégia?",
        opcoes: [
          "Sim, é uma amostra aleatória simples, com chance igual para todos",
          "Não, deveria perguntar só para os alunos do 9º ano",
          "Não, deveria perguntar só para quem gosta de comida da escola",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Perfeito! Numerar e sortear garante que cada aluno tenha a mesma chance de participar.",
        feedbackErro:
          "As outras opções recortam um grupo específico e não representam a escola toda. Numerar todos e sortear é o caminho correto.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Planeje uma minipesquisa em casa",
    materiais: ["Papel", "Caneta", "Uma pergunta de pesquisa escolhida com a família"],
    passos: [
      "Escolha uma pergunta (ex.: 'qual é a fruta favorita da família/vizinhança?').",
      "Defina a população (todos os moradores da rua, por exemplo).",
      "Escolha uma amostra de pelo menos 8 pessoas, tentando sortear ao acaso e não só os mais fáceis de perguntar.",
      "Anote as respostas e conte com a família se a amostra ficou parecida com a realidade da rua.",
    ],
    registro: "📸 Foto do papel com a pergunta, a amostra escolhida e as respostas.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Pesquisador de Amostras" },
};
