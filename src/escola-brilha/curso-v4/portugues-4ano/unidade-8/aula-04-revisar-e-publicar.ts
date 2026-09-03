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
 * Unidade 8 · Aula 4 — A Roda de Revisão e a Grande Publicação
 * -------------------------------------------------------------
 * Foco: revisão colaborativa de textos (2 elogios + 1 sugestão),
 * edição final (título, parágrafos, ilustração, legenda) e
 * apresentação oral da pesquisa para a plateia.
 * BNCC: EF35LP23, EF35LP24, EF15LP09.
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-revisar-e-publicar",
  titulo: "A Roda de Revisão e a Grande Publicação",
  iconeTrilha: "📣",
  bncc: ["EF15LP06", "EF15LP07", "EF15LP08"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "A expedição chega à Roda de Revisão",
    historia:
      "A pesquisa estava pronta no papel, mas Brilha bateu a pata na mesa: — Um texto de verdade passa por outros olhos antes de ir para o mundo! Vamos formar uma RODA DE REVISÃO: cada explorador lê o texto do colega, encontra o que está ótimo e sugere uma melhoria. Depois vem a parte mais emocionante: contar a pesquisa em voz alta, olhando para a plateia!",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de entrar na roda de revisão.",
    bloco: {
      titulo: "A Roda de Revisão e a Grande Publicação",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: pergaminho, nome: "Um texto pronto para ser lido" },
        { imagemUrl: estrela, nome: "Uma plateia atenta" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "Como revisar o texto de um colega com gentileza e como apresentar a pesquisa em voz alta.",
          imagemUrl: estrela,
        },
        { texto: "Como desenhar um mapa novo.", imagemUrl: mapa },
        { texto: "Como decorar o nome de todos os planetas.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos aprender a revisar com o colega e a apresentar a pesquisa para a plateia.",
      feedbackErro:
        "Pense: a expedição fala em 'ler o texto do colega' e 'contar em voz alta'. É sobre isso que vamos investigar.",
      dica: "🧭 Pista de explorador: repare nas palavras REVISÃO e PUBLICAÇÃO no título da expedição.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora conhece o nome de cada ferramenta antes de usá-la.",
    cards: [
      {
        palavra: "revisão colaborativa",
        explicacao: "É quando um colega lê o seu texto e ajuda a melhorá-lo com elogios e sugestões.",
        exemplo: "Ana leu o texto de Léo e disse: — Adorei o título! Que tal explicar melhor essa parte?",
        imagemUrl: estrela,
      },
      {
        palavra: "elogio",
        explicacao: "É dizer o que ficou bom no texto do colega, de forma sincera e específica.",
        exemplo: "Gostei muito de como você explicou por que os golfinhos são inteligentes.",
        imagemUrl: bussola,
      },
      {
        palavra: "sugestão",
        explicacao: "É uma ideia gentil para o colega melhorar algo no texto, sem ser grosseiro.",
        exemplo: "Que tal colocar um exemplo aqui, para o leitor entender melhor?",
        imagemUrl: lapis,
      },
      {
        palavra: "apresentação oral",
        explicacao: "É contar a pesquisa em voz alta para a turma, com começo, meio e fim.",
        exemplo: "Marina respirou fundo, olhou para a plateia e começou: — Minha pesquisa é sobre vulcões.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "O checklist da roda de revisão",
    instrucao: "Veja o que faz um comentário ÚTIL e o que faz um comentário INÚTIL na hora de revisar.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Comentário útil é específico; comentário inútil é vago",
        explicacao:
          "Na Roda de Revisão, todo comentário segue um checklist: (1) Li o texto do colega até o fim com atenção. (2) Dei DOIS elogios específicos, dizendo exatamente o que gostei. (3) Dei UMA sugestão gentil, explicando o que pode melhorar. (4) Falei com respeito, sem ser grosseiro. Um comentário como 'tá feio' não ajuda ninguém — é vago e machuca. Já 'faltou o ponto final aqui' é útil, porque diz exatamente ONDE e O QUE melhorar.",
        exemplos: [
          { palavra: "tá feio", destaque: "vago", motivo: "Comentário inútil: não diz o que está errado nem onde." },
          { palavra: "faltou o ponto final aqui", destaque: "específico", motivo: "Comentário útil: aponta exatamente o que corrigir." },
          { palavra: "adorei o jeito que você explicou o vulcão", destaque: "elogio específico", motivo: "Diz exatamente o que foi bom no texto." },
        ],
        desafios: [
          {
            molde: "esse texto está _",
            opcoes: ["ruim", "bom, principalmente o título, que ficou bem curioso", "estranho"],
            correta: 1,
            frase: "Esse texto está bom, principalmente o título, que ficou bem curioso.",
            feedbackErro: "Comentário útil é específico: diz O QUE ficou bom, não só 'bom' ou 'ruim'.",
          },
          {
            molde: "_ o parágrafo sobre os hábitos do animal",
            opcoes: ["Tá zoado", "Falta explicar o parágrafo sobre os hábitos do animal", "Não gostei"],
            correta: 1,
            frase: "Falta explicar melhor o parágrafo sobre os hábitos do animal.",
            feedbackErro: "A sugestão precisa apontar exatamente ONDE está o problema, como neste exemplo.",
          },
          {
            molde: "_ ",
            opcoes: ["Está horrível", "Gostei da ilustração, mas faltou legenda embaixo dela", "Sei lá"],
            correta: 1,
            frase: "Gostei da ilustração, mas faltou legenda embaixo dela.",
            feedbackErro: "Um bom comentário junta elogio específico + sugestão específica.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou no diário como funciona a Roda de Revisão.",
    leitura: {
      titulo: "O Diário da Roda de Revisão",
      imagemUrl: pergaminho,
      legendaImagem: "Página do diário de bordo",
      destacar: ["elogios", "sugestão", "edição final", "apresentação oral"],
      paragrafos: [
        "Na Roda de Revisão, cada explorador troca seu texto com um colega. A primeira tarefa é ler tudo com calma, do começo ao fim, sem pressa.",
        "Depois, o leitor escreve DOIS ELOGIOS específicos — o que ficou bom de verdade — e UMA SUGESTÃO gentil para melhorar algum ponto.",
        "Com os comentários em mãos, cada explorador faz a EDIÇÃO FINAL do próprio texto: confere o título, organiza os parágrafos, escolhe uma ilustração e escreve uma legenda para ela.",
        "Por fim, chega a hora da APRESENTAÇÃO ORAL: contar a pesquisa em voz audível, olhando para a plateia, com começo, meio e fim — e ainda responder às perguntas dos colegas ao final!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Quantos elogios e quantas sugestões cada explorador escreve na revisão colaborativa?",
        opcoes: ["Dois elogios e uma sugestão", "Um elogio e duas sugestões", "Três elogios e nenhuma sugestão", "Nenhum elogio e uma sugestão"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! São DOIS elogios específicos e UMA sugestão gentil.",
        feedbackErro: "Releia: 'escreve DOIS ELOGIOS específicos... e UMA SUGESTÃO gentil'.",
        ondeEstaNoTexto: "DOIS ELOGIOS específicos... e UMA SUGESTÃO gentil",
        dica: "🧭 Pista de explorador: releia o segundo parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Dois elogios e uma sugestão”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que faz parte da edição final do texto?",
        opcoes: ["Conferir o título, organizar parágrafos, escolher ilustração e escrever legenda", "Apagar todo o texto e recomeçar do zero", "Só trocar a cor da caneta", "Copiar o texto de outro colega"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A edição final ajusta título, parágrafos, ilustração e legenda.",
        feedbackErro: "Releia: 'confere o título, organiza os parágrafos, escolhe uma ilustração e escreve uma legenda'.",
        ondeEstaNoTexto: "confere o título, organiza os parágrafos, escolhe uma ilustração e escreve uma legenda",
        dica: "🧭 Pista de explorador: releia o terceiro parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Conferir o título, organizar parágrafos, escolher ilustração e escrever legenda”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que é preciso fazer durante a apresentação oral, além de falar?",
        opcoes: ["Olhar para a plateia e responder às perguntas dos colegas", "Ficar de costas para a turma", "Ler baixinho para ninguém escutar", "Sair da sala assim que terminar de ler"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! É preciso olhar para a plateia e responder às perguntas.",
        feedbackErro: "Releia: 'olhando para a plateia... e ainda responder às perguntas dos colegas ao final'.",
        ondeEstaNoTexto: "olhando para a plateia... e ainda responder às perguntas dos colegas ao final",
        dica: "🧭 Pista de explorador: releia o último parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Olhar para a plateia e responder às perguntas dos colegas”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem organiza a expedição e onde ela acontece?",
    perguntas: [
      {
        pergunta: "Quem propôs a Roda de Revisão na motivação da aula?",
        opcoes: ["Brilha", "Um colega desconhecido", "A professora de Matemática", "Ninguém propôs"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Foi Brilha quem bateu a pata na mesa e propôs a roda.",
        feedbackErro: "Releia a motivação: 'Brilha bateu a pata na mesa' e sugeriu a Roda de Revisão.",
        dica: "🧭 Pista de explorador: releia a história da motivação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Brilha”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Onde a apresentação oral acontece?",
        opcoes: ["Na frente da plateia (a turma)", "Dentro de uma caixa fechada", "Sozinho em casa, sem ninguém ouvindo", "No fundo do mar"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A apresentação é feita em voz alta, para a plateia.",
        feedbackErro: "Releia o diário: a apresentação é 'olhando para a plateia'.",
        dica: "🧭 Pista de explorador: releia o último parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Na frente da plateia (a turma)”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos da Roda de Revisão até a Grande Publicação.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Leia o texto do colega com atenção, do começo ao fim.", imagemUrl: pergaminho },
        { id: "p2", texto: "Escreva dois elogios específicos e uma sugestão gentil.", imagemUrl: estrela },
        { id: "p3", texto: "Faça a edição final: título, parágrafos, ilustração e legenda.", imagemUrl: lapis },
        { id: "p4", texto: "Apresente a pesquisa em voz alta, olhando para a plateia.", imagemUrl: livro },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa da Roda de Revisão até a Grande Publicação.",
      feedbackErro: "Pense: primeiro se lê, depois se comenta, depois se edita e só então se apresenta.",
      dica: "🧭 Pista de explorador: a leitura sempre vem antes do comentário.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um trecho de uma roda de revisão e responda.",
    leitura: {
      titulo: "A Revisão do Texto sobre Vulcões",
      imagemUrl: livro,
      destacar: ["elogios", "sugestão", "faltou o ponto final"],
      paragrafos: [
        "Pedro leu o texto de Júlia sobre vulcões e escreveu: — Adorei os dois elogios que preparei: seu título ficou bem curioso, e você explicou direitinho como a lava sobe.",
        "Depois, Pedro deu sua sugestão: — Só uma coisa: faltou o ponto final aqui, no fim do segundo parágrafo. Júlia sorriu e agradeceu, porque o comentário era claro e ajudava de verdade.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quais foram os dois elogios que Pedro deu ao texto de Júlia?",
        opcoes: ["O título curioso e a explicação de como a lava sobe", "A letra bonita e a cor da caneta", "O tamanho do texto e o desenho da capa", "Nenhum elogio foi dado"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ele elogiou o título curioso e a explicação sobre a lava.",
        feedbackErro: "Releia: 'seu título ficou bem curioso, e você explicou direitinho como a lava sobe'.",
        ondeEstaNoTexto: "seu título ficou bem curioso, e você explicou direitinho como a lava sobe",
        dica: "🧭 Pista de explorador: releia a fala de Pedro no primeiro parágrafo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O título curioso e a explicação de como a lava sobe”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual foi a sugestão de Pedro?",
        opcoes: ["Faltou o ponto final no fim do segundo parágrafo", "Trocar todas as palavras do texto", "Apagar o título inteiro", "Não escrever mais sobre vulcões"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! A sugestão foi sobre o ponto final que faltava.",
        feedbackErro: "Releia: 'faltou o ponto final aqui, no fim do segundo parágrafo'.",
        ondeEstaNoTexto: "faltou o ponto final aqui, no fim do segundo parágrafo",
        dica: "🧭 Pista de explorador: releia a segunda fala de Pedro.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Faltou o ponto final no fim do segundo parágrafo”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte a palavra da expedição",
    instrucao: "Arraste as sílabas na ordem certa para montar cada palavra da Roda de Revisão.",
    jogo: {
      tipo: "montarPalavra",
      titulo: "As Palavras da Grande Publicação",
      bloco: {
        instrucao: "Ouça a palavra e monte as sílabas na ordem certa.",
        palavras: [
          {
            id: "revisar",
            palavraCerta: "REVISAR",
            silabas: ["RE", "VI", "SAR"],
            imagemUrl: pergaminho,
            frase: "Antes de publicar, é preciso REVISAR o texto com um colega.",
          },
          {
            id: "plateia",
            palavraCerta: "PLATEIA",
            silabas: ["PLA", "TEI", "A"],
            imagemUrl: estrela,
            frase: "Durante a apresentação, olhe para a PLATEIA.",
          },
          {
            id: "elogio",
            palavraCerta: "ELOGIO",
            silabas: ["E", "LO", "GI", "O"],
            imagemUrl: bussola,
            frase: "Todo bom comentário começa com um ELOGIO sincero.",
          },
          {
            id: "legenda",
            palavraCerta: "LEGENDA",
            silabas: ["LE", "GEN", "DA"],
            imagemUrl: lapis,
            frase: "A ilustração ficou completa com uma boa LEGENDA.",
          },
        ],
        feedbackAcerto: "🎉 Excelente! Você montou as palavras da Grande Publicação.",
        feedbackErro: "Fale a palavra bem devagar, sílaba por sílaba, e ouça onde cada pedacinho encaixa.",
        dica: "🧭 Pista de explorador: bata palmas para contar as sílabas antes de montar.",
      },
    },
  },

  momento_escrita: {
    titulo: "Diário de Bordo do Explorador",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Comentário de revisão para o colega",
        comando:
          "Imagine que você leu a pesquisa de um colega. Escreva um comentário com DOIS elogios específicos e UMA sugestão gentil para ajudá-lo a melhorar o texto.",
        linhas: 4,
        modelo: [
          "Gostei muito do seu título, ficou bem curioso!",
          "Também adorei como você explicou o motivo das formigas trabalharem em grupo.",
          "Que tal colocar o ponto final no fim do segundo parágrafo?",
        ],
        checklist: [
          "Escrevi dois elogios específicos, dizendo exatamente o que gostei.",
          "Escrevi uma sugestão gentil, dizendo onde e o que pode melhorar.",
          "Não usei comentários vagos como 'tá feio' ou 'está ruim'.",
          "Falei com respeito, como um bom colega de expedição.",
        ],
        cicloRevisao: true,
      },
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Versão final do meu parágrafo",
        comando:
          "Agora é sua vez: usando os comentários que você recebeu, escreva a VERSÃO FINAL de um parágrafo da sua pesquisa, já revisado e editado.",
        linhas: 5,
        modelo: [
          "As formigas trabalham sempre em grupo, dividindo tarefas entre elas.",
          "Algumas cortam folhas, outras carregam alimento e outras cuidam dos filhotes.",
          "Por isso, o formigueiro consegue crescer tão rápido!",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim.",
          "Corrigi o que os colegas sugeriram na revisão.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Conferi o título e escrevi uma legenda para a ilustração.",
          "Li em voz alta para ver se ficou claro.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: A Grande Publicação",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO, como se estivesse na frente da plateia.",
    texto: [
      "Chegou a hora de contar a pesquisa para todo mundo, com voz firme e olhando para a plateia.",
      "Primeiro eu conto do que trata o tema, depois explico as descobertas mais importantes e, no final, agradeço e pergunto se alguém tem dúvidas.",
      "Uma boa apresentação começa, se desenvolve e termina — assim como um bom texto escrito.",
    ],
    metaSegundos: 30,
  },

  momento09_revisao: {
    pontos: [
      "Na revisão colaborativa, cada explorador dá DOIS elogios específicos e UMA sugestão gentil.",
      "Comentário útil é específico ('faltou o ponto final aqui'); comentário vago ('tá feio') não ajuda.",
      "A edição final ajusta título, parágrafos, ilustração e legenda antes de publicar.",
      "Na apresentação oral, a voz deve ser audível, o olhar deve ir para a plateia, e o texto precisa ter começo, meio e fim.",
    ],
    miniDesafio: {
      pergunta: "Qual desses comentários é ÚTIL numa revisão colaborativa?",
      opcoes: ["Tá ruim.", "Faltou explicar por que o vulcão explode.", "Não gostei."],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Um comentário útil diz exatamente o que falta ou o que ficou bom.",
      feedbackErro: "Releia a explicação: comentário útil é específico, não vago.",
      dica: "🧭 Pista de explorador: escolha o comentário que diz ONDE e O QUE melhorar.",
      reensino: "📚 Vamos rever juntos: a resposta certa é “Faltou explicar por que o vulcão explode.”. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Na Roda de Revisão, quantos elogios cada explorador escreve?",
        opcoes: ["Dois", "Um", "Cinco", "Nenhum"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! São dois elogios específicos.",
        feedbackErro: "Lembre: são DOIS elogios e UMA sugestão.",
        feedbackOpcoes: [
          null,
          "❌ Apenas um elogio é pouco; o combinado são dois.",
          "❌ Cinco elogios é demais para o checklist da roda.",
          "❌ Sem elogio nenhum, o colega não recebe incentivo.",
        ],
        dica: "🧭 Pista de explorador: releia o segundo parágrafo do diário de bordo.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Dois”.",
      },
      {
        pergunta: "2/5 — Qual é um exemplo de comentário ÚTIL?",
        opcoes: [
          "Faltou o ponto final aqui.",
          "Tá feio.",
          "Não gostei.",
          "Ruim demais.",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! É específico: diz exatamente o que falta.",
        feedbackErro: "Comentário útil aponta ONDE e O QUE precisa melhorar.",
        feedbackOpcoes: [
          null,
          "❌ 'Tá feio' é vago, não diz o que melhorar.",
          "❌ 'Não gostei' não explica o motivo.",
          "❌ 'Ruim demais' não ajuda o colega a melhorar.",
        ],
        dica: "🧭 Pista de explorador: comentário útil é específico.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Faltou o ponto final aqui.”.",
      },
      {
        pergunta: "3/5 — O que faz parte da edição final do texto?",
        opcoes: [
          "Conferir título, parágrafos, ilustração e legenda",
          "Apagar o texto inteiro sem revisar",
          "Trocar de tema no meio do texto",
          "Copiar o texto de outro colega",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A edição final cuida de título, parágrafos, ilustração e legenda.",
        feedbackErro: "Releia o diário: a edição final ajusta esses quatro elementos.",
        feedbackOpcoes: [
          null,
          "❌ Apagar tudo não é editar, é recomeçar sem aproveitar o trabalho.",
          "❌ Trocar de tema no meio confunde o leitor.",
          "❌ Copiar de outro colega não é uma pesquisa própria.",
        ],
        dica: "🧭 Pista de explorador: pense nos quatro itens do checklist de edição.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Conferir título, parágrafos, ilustração e legenda”.",
      },
      {
        pergunta: "4/5 — Durante a apresentação oral, para onde o explorador deve olhar?",
        opcoes: ["Para a plateia", "Para o chão", "Para a porta da sala", "Para o próprio papel o tempo todo"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Olhar para a plateia deixa a apresentação mais clara e confiante.",
        feedbackErro: "Releia: 'olhando para a plateia' é uma das regras da apresentação.",
        feedbackOpcoes: [
          null,
          "❌ Olhar para o chão dificulta a plateia escutar e entender.",
          "❌ Olhar para a porta distrai quem está ouvindo.",
          "❌ Olhar só para o papel impede o contato com a plateia.",
        ],
        dica: "🧭 Pista de explorador: releia o último parágrafo do diário.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Para a plateia”.",
      },
      {
        pergunta: "5/5 — O que um bom apresentador faz ao final da apresentação, quando os colegas perguntam algo?",
        opcoes: [
          "Responde às perguntas da plateia",
          "Sai correndo da sala",
          "Finge que não ouviu",
          "Começa a apresentação de novo do início",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! Responder às perguntas mostra domínio do assunto.",
        feedbackErro: "Releia: 'responder às perguntas dos colegas ao final' faz parte da apresentação.",
        feedbackOpcoes: [
          null,
          "❌ Sair correndo não é respeitoso com a plateia.",
          "❌ Fingir que não ouviu não resolve a dúvida do colega.",
          "❌ Recomeçar do início não responde à pergunta feita.",
        ],
        dica: "🧭 Pista de explorador: releia o final do diário de bordo.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Responde às perguntas da plateia”.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Minha Grande Apresentação em Casa",
    materiais: ["O texto da pesquisa já revisado e editado", "Uma pessoa da família para ser a plateia"],
    passos: [
      "1) Leia seu texto para um adulto ou irmão, em voz alta e com calma.",
      "2) Peça para essa pessoa dar dois elogios e uma sugestão sobre a sua apresentação (não sobre o texto).",
      "3) Apresente de novo, agora olhando nos olhos da plateia e usando voz mais firme.",
      "4) Peça para a plateia fazer uma pergunta sobre o tema, e responda com calma.",
    ],
    registro: "📝 Um áudio ou vídeo curto da apresentação em família.",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "🏅 Medalha da Grande Publicação",
  },
};
