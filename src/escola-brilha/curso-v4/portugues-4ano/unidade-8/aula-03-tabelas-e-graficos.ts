import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Unidade 8 · Aula 3 — Os Dados Contam a História
 * -------------------------------------------------------------
 * Foco: ler e produzir TABELA, GRÁFICO DE BARRAS e LEGENDA dentro de
 * um relatório de observação/pesquisa. A criança aprende as partes de
 * uma tabela (título, cabeçalho, linhas, unidade), as partes de um
 * gráfico (eixo, barras, legenda) e, principalmente, como transformar
 * um número numa FRASE DE CONCLUSÃO que interpreta o dado.
 * BNCC: EF04LP24, EF35LP20, EF15LP07.
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-tabelas-e-graficos",
  titulo: "Os Dados Contam a História",
  iconeTrilha: "📊",
  bncc: ["EF04LP24", "EF35LP20", "EF15LP07"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Números que viram história",
    historia:
      "A expedição chegou ao Acampamento dos Pesquisadores. Lá, Brilha contou quantos animais apareceram perto do rio durante uma semana e anotou tudo numa folha cheia de números. — Sozinhos, os números não contam nada — disse Brilha. — Mas se eu organizar numa TABELA e desenhar um GRÁFICO, qualquer explorador entende a história num piscar de olhos! Vamos aprender a ler e escrever com tabelas e gráficos?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de abrir o caderno de campo.",
    bloco: {
      titulo: "Os Dados Contam a História",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: bussola, nome: "Uma tabela com números organizados" },
        { imagemUrl: estrela, nome: "Um gráfico de barras" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "Como ler tabelas e gráficos de um relatório e escrever a frase que explica o que os números significam.",
          imagemUrl: estrela,
        },
        { texto: "Como desenhar animais da floresta.", imagemUrl: arvore },
        { texto: "Como contar uma história de terror.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos aprender a ler tabelas e gráficos e a escrever a conclusão que eles revelam.",
      feedbackErro:
        "Pense nas pistas: uma tabela de números e um gráfico de barras. É sobre isso que vamos investigar.",
      dica: "🧭 Pista de explorador: tabela e gráfico aparecem em relatórios de pesquisa para mostrar dados coletados.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora conhece o nome de cada peça antes de montar o relatório.",
    cards: [
      {
        palavra: "tabela",
        explicacao: "Quadro com linhas e colunas que organiza números e informações.",
        exemplo: "Uma tabela pode mostrar quantos animais foram vistos em cada dia.",
        imagemUrl: bussola,
      },
      {
        palavra: "cabeçalho",
        explicacao: "É a primeira linha da tabela, que diz o que cada coluna representa.",
        exemplo: "No cabeçalho pode estar escrito 'Animal' e 'Quantidade'.",
        imagemUrl: livro,
      },
      {
        palavra: "gráfico de barras",
        explicacao: "Desenho com barras que mostram, em tamanho, a quantidade de cada dado.",
        exemplo: "A barra mais alta representa a maior quantidade.",
        imagemUrl: estrela,
      },
      {
        palavra: "legenda",
        explicacao: "Texto pequeno que explica o que cada cor ou símbolo do gráfico significa.",
        exemplo: "A legenda diz: barra azul = pássaros, barra verde = borboletas.",
        imagemUrl: lapis,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "As partes da tabela e do gráfico",
    instrucao: "Observe cada peça: sem ela, o dado fica sem sentido.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Toda tabela e todo gráfico têm partes que não podem faltar",
        explicacao:
          "Uma TABELA precisa de: TÍTULO (diz do que ela trata), CABEÇALHO (nomeia as colunas), LINHAS DE DADOS (os números coletados) e a UNIDADE (o que está sendo contado: dias, animais, votos). Um GRÁFICO DE BARRAS precisa de: EIXO (as linhas que mostram os nomes e os números), BARRAS (o tamanho mostra a quantidade) e LEGENDA (explica o que cada cor representa). Depois de ler os dados, o pesquisador escreve uma FRASE DE CONCLUSÃO que interpreta o número, usando expressões como 'a maioria', 'o dobro de', 'menos da metade'.",
        exemplos: [
          { palavra: "título", destaque: "título", motivo: "Diz do que trata a tabela ou o gráfico." },
          { palavra: "cabeçalho", destaque: "cabeçalho", motivo: "Nomeia cada coluna da tabela." },
          { palavra: "legenda", destaque: "legenda", motivo: "Explica o significado das cores do gráfico." },
        ],
        desafios: [
          {
            molde: "a linha que nomeia as colunas é o _",
            opcoes: ["cabeçalho", "eixo", "legenda"],
            correta: 0,
            frase: "O cabeçalho da tabela diz 'Animal' e 'Quantidade'.",
            feedbackErro: "O CABEÇALHO é a linha que nomeia as colunas de uma tabela.",
          },
          {
            molde: "no gráfico, a cor de cada barra é explicada na _",
            opcoes: ["unidade", "legenda", "conclusão"],
            correta: 1,
            frase: "A legenda mostra: azul = pássaros, verde = borboletas.",
            feedbackErro: "A LEGENDA explica o que cada cor do gráfico significa.",
          },
          {
            molde: "'a maioria dos animais vistos foram pássaros' é uma frase de _",
            opcoes: ["cabeçalho", "unidade", "conclusão"],
            correta: 2,
            frase: "A frase de conclusão interpreta o dado da tabela ou do gráfico.",
            feedbackErro: "Frases com 'a maioria', 'o dobro' ou 'menos da metade' são de CONCLUSÃO.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha escreveu um relatório com a tabela da semana de observação.",
    leitura: {
      titulo: "Relatório: Animais na Beira do Rio",
      imagemUrl: pergaminho,
      legendaImagem: "Página do relatório de pesquisa",
      destacar: ["tabela", "cabeçalho", "gráfico", "legenda", "a maioria"],
      paragrafos: [
        "Durante uma semana, a expedição observou os animais perto do rio e organizou os dados nesta TABELA:",
        "Animal          | Quantidade (unidade: animais vistos)\nPássaro          | 12\nBorboleta        | 6\nSapo             | 3\nO CABEÇALHO mostra que a primeira coluna traz o nome do animal e a segunda traz a quantidade vista.",
        "Depois, Brilha desenhou um GRÁFICO DE BARRAS com esses mesmos números. O EIXO de baixo mostra os nomes dos animais, e a altura de cada barra mostra a quantidade. A LEGENDA explicou: barra azul = pássaro, barra verde = borboleta, barra marrom = sapo.",
        "Por fim, veio a frase de CONCLUSÃO, que interpreta os dados: 'A MAIORIA dos animais observados foram pássaros (12), o DOBRO do número de borboletas (6) e MENOS DA METADE dos pássaros foram sapos (3).'",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no relatório se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "O que o cabeçalho da tabela mostra?",
        opcoes: [
          "O nome de cada coluna",
          "A cor do gráfico",
          "O total de animais",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O cabeçalho nomeia cada coluna da tabela.",
        feedbackErro: "Releia: 'O CABEÇALHO mostra que a primeira coluna traz o nome do animal e a segunda traz a quantidade vista.'",
        ondeEstaNoTexto: "O CABEÇALHO mostra que a primeira coluna traz o nome do animal",
        dica: "🧭 Pista de explorador: releia a segunda parte da tabela do relatório.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O nome de cada coluna”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Para que serve a legenda do gráfico?",
        opcoes: [
          "Explicar o que cada cor da barra representa",
          "Mostrar a data da pesquisa",
          "Contar quantos dias durou a expedição",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A legenda explica o significado de cada cor.",
        feedbackErro: "Releia: 'A LEGENDA explicou: barra azul = pássaro, barra verde = borboleta...'",
        ondeEstaNoTexto: "A LEGENDA explicou: barra azul = pássaro",
        dica: "🧭 Pista de explorador: releia o trecho sobre o gráfico de barras.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Explicar o que cada cor da barra representa”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Quantos pássaros foram vistos, segundo a tabela?",
        opcoes: ["12", "6", "3"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! A tabela mostra 12 pássaros.",
        feedbackErro: "Releia a tabela: Pássaro | 12.",
        ondeEstaNoTexto: "Pássaro          | 12",
        dica: "🧭 Pista de explorador: procure a linha 'Pássaro' na tabela.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “12”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem faz a pesquisa e onde ela é registrada?",
    perguntas: [
      {
        pergunta: "Onde Brilha registrou os dados da observação dos animais?",
        opcoes: ["Num relatório com tabela e gráfico", "Numa carta para a vovó", "Num bilhete na porta"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Os dados foram registrados em um relatório de pesquisa.",
        feedbackErro: "Releia o título: 'Relatório: Animais na Beira do Rio'.",
        dica: "🧭 Pista de explorador: releia o título da leitura guiada.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Num relatório com tabela e gráfico”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Por quanto tempo a expedição observou os animais perto do rio?",
        opcoes: ["Uma semana", "Um dia", "Um mês"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A observação durou uma semana.",
        feedbackErro: "Releia o início: 'Durante uma semana, a expedição observou os animais...'",
        dica: "🧭 Pista de explorador: releia a primeira frase do relatório.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Uma semana”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para montar um relatório com dados de pesquisa.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Coletar os dados e organizar em uma TABELA com título e cabeçalho.", imagemUrl: bussola },
        { id: "p2", texto: "Desenhar um GRÁFICO DE BARRAS com esses mesmos números.", imagemUrl: estrela },
        { id: "p3", texto: "Criar a LEGENDA explicando o que cada cor do gráfico significa.", imagemUrl: lapis },
        { id: "p4", texto: "Escrever a frase de CONCLUSÃO interpretando o que os dados mostram.", imagemUrl: livro },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa para montar um relatório de pesquisa.",
      feedbackErro: "Pense: primeiro se organiza a tabela, depois o gráfico, a legenda e só então a conclusão.",
      dica: "🧭 Pista de explorador: a conclusão só pode ser escrita depois que os dados já estão organizados.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um trecho de outro relatório e responda.",
    leitura: {
      titulo: "Relatório: A Pesquisa das Frutas Preferidas",
      imagemUrl: livro,
      destacar: ["tabela", "gráfico", "o dobro", "menos da metade"],
      paragrafos: [
        "A turma do 4º ano perguntou a 20 colegas qual fruta eles preferiam. Os dados foram anotados nesta tabela:\nFruta   | Quantidade (unidade: alunos)\nBanana  | 10\nManga   | 5\nUva     | 5",
        "No gráfico de barras, a barra da banana ficou o DOBRO da altura das outras duas. A frase de conclusão do relatório dizia: 'A metade da turma prefere banana, e manga e uva juntas somam MENOS DA METADE do total.'",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantos alunos preferiram banana, segundo a tabela?",
        opcoes: ["10", "5", "20"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A tabela mostra 10 alunos preferindo banana.",
        feedbackErro: "Releia a tabela: Banana | 10.",
        ondeEstaNoTexto: "Banana  | 10",
        dica: "🧭 Pista de explorador: procure a linha 'Banana' na tabela.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “10”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que a frase de conclusão do relatório interpretou?",
        opcoes: [
          "Que a metade da turma prefere banana",
          "Que ninguém gosta de manga",
          "Que a pesquisa durou uma semana",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! A conclusão diz 'A metade da turma prefere banana'.",
        feedbackErro: "Releia: 'A metade da turma prefere banana, e manga e uva juntas somam menos da metade do total.'",
        ondeEstaNoTexto: "A metade da turma prefere banana",
        dica: "🧭 Pista de explorador: releia a última frase do texto.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Que a metade da turma prefere banana”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Tabela ou Conclusão?",
    instrucao: "Arraste cada informação para o lugar certo do relatório: a TABELA (só números organizados) ou o TEXTO de conclusão (a frase que interpreta os dados).",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "O Caderno de Campo do Pesquisador",
      bloco: {
        instrucao: "Pense: isso é um dado bruto (número) ou uma interpretação (frase com 'a maioria', 'o dobro', 'menos da metade')?",
        itens: [
          { id: "i1", texto: "Pássaro: 12", alvoId: "tabela" },
          { id: "i2", texto: "Borboleta: 6", alvoId: "tabela" },
          { id: "i3", texto: "Sapo: 3", alvoId: "tabela" },
          { id: "i4", texto: "A maioria dos animais vistos foram pássaros.", alvoId: "conclusao" },
          { id: "i5", texto: "O número de pássaros é o dobro do de borboletas.", alvoId: "conclusao" },
          { id: "i6", texto: "Banana: 10 votos", alvoId: "tabela" },
          { id: "i7", texto: "Menos da metade da turma prefere frutas ácidas.", alvoId: "conclusao" },
          { id: "i8", texto: "Manga: 5 votos", alvoId: "tabela" },
        ],
        alvos: [
          { id: "tabela", nome: "Tabela", imagemUrl: bussola, descricao: "Números organizados em linhas e colunas" },
          { id: "conclusao", nome: "Texto de conclusão", imagemUrl: lapis, descricao: "Frase que interpreta os dados" },
        ],
        feedbackAcerto: "🎉 Excelente! Você separou os dados brutos das interpretações do relatório.",
        feedbackErro: "Pergunte-se: é só um número (vai na tabela) ou é uma frase que explica o que o número significa (vai na conclusão)?",
        dica: "🧭 Pista de explorador: se tem palavras como 'a maioria', 'o dobro' ou 'menos da metade', é conclusão.",
      },
    },
  },

  momento_escrita: {
    titulo: "Diário de Bordo do Pesquisador",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Frase de conclusão a partir de uma tabela",
        comando:
          "Observe esta tabela: Cachorro | 8, Gato | 4, Peixe | 2 (unidade: animais de estimação dos colegas). Escreva um parágrafo de conclusão interpretando os dados. Use pelo menos uma expressão como 'a maioria', 'o dobro de' ou 'menos da metade'.",
        linhas: 5,
        modelo: [
          "A maioria dos colegas tem cachorro de estimação (8 alunos).",
          "O número de cachorros é o dobro do número de gatos (4 alunos).",
          "Menos da metade dos colegas tem peixe (apenas 2 alunos).",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Usei pelo menos uma expressão de interpretação (a maioria, o dobro de, menos da metade).",
          "Citei os números da tabela para provar o que escrevi.",
          "Li em voz alta e consertei o que ficou estranho.",
          "Minha conclusão explica o que os números SIGNIFICAM, não só repete a tabela.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: Os Dados Contam a História",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO. A meta não é correr: é ler como quem apresenta uma pesquisa.",
    texto: [
      "A tabela organiza os números, mas é a frase de conclusão que conta a história para quem lê.",
      "Doze pássaros, seis borboletas e três sapos: sozinhos, são só números.",
      "Juntos numa boa conclusão, eles mostram que a maioria dos visitantes do rio tinha penas!",
    ],
    metaSegundos: 30,
  },

  momento09_revisao: {
    pontos: [
      "Toda tabela precisa de título, cabeçalho, linhas de dados e unidade.",
      "Todo gráfico de barras precisa de eixo, barras e legenda.",
      "A legenda explica o que cada cor ou símbolo do gráfico representa.",
      "A frase de conclusão interpreta o dado, usando expressões como 'a maioria', 'o dobro de' e 'menos da metade'.",
    ],
    miniDesafio: {
      pergunta: "Em uma tabela, o que diz o nome de cada coluna?",
      opcoes: ["O cabeçalho", "A legenda", "A conclusão"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! O cabeçalho nomeia cada coluna da tabela.",
      feedbackErro: "Releia a explicação: o cabeçalho é a primeira linha da tabela.",
      dica: "🧭 Pista de explorador: cabeçalho fica no topo da tabela.",
      reensino: "📚 Vamos rever juntos: a resposta certa é “O cabeçalho”. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o cabeçalho de uma tabela?",
        opcoes: [
          "A linha que nomeia cada coluna",
          "O desenho colorido do gráfico",
          "A frase final do relatório",
          "O título do livro",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O cabeçalho nomeia as colunas da tabela.",
        feedbackErro: "Lembre: cabeçalho é a primeira linha, que nomeia as colunas.",
        feedbackOpcoes: [
          null,
          "❌ O desenho colorido faz parte do gráfico, não da tabela.",
          "❌ A frase final é a conclusão, não o cabeçalho.",
          "❌ Título do livro não tem relação com a tabela.",
        ],
        dica: "🧭 Pista de explorador: cabeçalho fica no topo da tabela.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “A linha que nomeia cada coluna”.",
      },
      {
        pergunta: "2/5 — Para que serve a legenda de um gráfico?",
        opcoes: [
          "Explicar o que cada cor da barra representa",
          "Contar quantas páginas tem o relatório",
          "Mostrar o nome do pesquisador",
          "Definir o tamanho do papel",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A legenda explica o significado das cores do gráfico.",
        feedbackErro: "A legenda serve para explicar o que cada cor ou símbolo do gráfico significa.",
        feedbackOpcoes: [
          null,
          "❌ Número de páginas não tem relação com a legenda.",
          "❌ Nome do pesquisador não é função da legenda.",
          "❌ Tamanho do papel não tem relação com o gráfico.",
        ],
        dica: "🧭 Pista de explorador: legenda = 'o que cada cor quer dizer'.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Explicar o que cada cor da barra representa”.",
      },
      {
        pergunta: "3/5 — Qual frase é uma CONCLUSÃO, e não apenas um dado da tabela?",
        opcoes: [
          "A maioria dos animais observados foram pássaros.",
          "Pássaro: 12.",
          "Borboleta: 6.",
          "Sapo: 3.",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Essa frase interpreta os números, é uma conclusão.",
        feedbackErro: "As outras opções são apenas números da tabela, sem interpretação.",
        feedbackOpcoes: [
          null,
          "❌ 'Pássaro: 12' é só um dado da tabela, não interpreta nada.",
          "❌ 'Borboleta: 6' é só um dado da tabela, não interpreta nada.",
          "❌ 'Sapo: 3' é só um dado da tabela, não interpreta nada.",
        ],
        dica: "🧭 Pista de explorador: conclusão tem palavras como 'a maioria', 'o dobro', 'menos da metade'.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “A maioria dos animais observados foram pássaros.”",
      },
      {
        pergunta: "4/5 — Se cachorros = 8 e gatos = 4, qual frase de conclusão está correta?",
        opcoes: [
          "O número de cachorros é o dobro do número de gatos.",
          "Há mais gatos do que cachorros.",
          "Cachorros e gatos são a mesma quantidade.",
          "Não dá para comparar cachorros e gatos.",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! 8 é o dobro de 4.",
        feedbackErro: "Compare os números: 8 é o dobro de 4.",
        feedbackOpcoes: [
          null,
          "❌ 8 é maior que 4, então há mais cachorros, não gatos.",
          "❌ 8 e 4 são quantidades diferentes.",
          "❌ Sempre é possível comparar números de uma tabela.",
        ],
        dica: "🧭 Pista de explorador: o dobro de 4 é 8.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “O número de cachorros é o dobro do número de gatos.”",
      },
      {
        pergunta: "5/5 — O que NUNCA pode faltar em uma tabela de pesquisa?",
        opcoes: [
          "Título, cabeçalho e unidade",
          "Cores vibrantes",
          "Desenhos animados",
          "Uma piada no final",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! Título, cabeçalho e unidade são essenciais.",
        feedbackErro: "Releia a explicação: toda tabela precisa de título, cabeçalho, linhas de dados e unidade.",
        feedbackOpcoes: [
          null,
          "❌ Cores são opcionais, não obrigatórias em uma tabela.",
          "❌ Desenhos animados não fazem parte de uma tabela de pesquisa.",
          "❌ Uma tabela de pesquisa não precisa de piadas.",
        ],
        dica: "🧭 Pista de explorador: sem título e cabeçalho, ninguém entende a tabela.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Título, cabeçalho e unidade”.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Pesquisa em família",
    materiais: ["Papel e lápis", "Réguas ou canetinhas coloridas (opcional)"],
    passos: [
      "1) Junto com um adulto, escolham uma pergunta simples (ex.: 'qual a fruta preferida da família?').",
      "2) Perguntem a pelo menos 4 pessoas e anotem as respostas numa TABELA com título, cabeçalho e unidade.",
      "3) Desenhem um GRÁFICO DE BARRAS com esses dados, incluindo uma LEGENDA.",
      "4) Escrevam juntos uma frase de CONCLUSÃO usando 'a maioria', 'o dobro de' ou 'menos da metade'.",
    ],
    registro: "📝 Uma foto da tabela, do gráfico e da frase de conclusão escritos à mão.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
