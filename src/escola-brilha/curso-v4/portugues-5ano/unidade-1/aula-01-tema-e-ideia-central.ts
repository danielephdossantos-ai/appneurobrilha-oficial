import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as tv } from "@/assets/neuro-treino/objetos/tv-moderna.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as calendario } from "@/assets/neuro-treino/objetos/calendario.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";

/**
 * Aula 1 — Tema e Ideia Central
 * -------------------------------------------------------------
 * Abertura da Unidade 1 (O Detetive da Leitura) do curso "A
 * Conquista da Língua". A investigação começa distinguindo dois
 * conceitos que os alunos costumam confundir: TEMA (o assunto
 * geral, em poucas palavras) e IDEIA CENTRAL (o que o texto
 * defende ou afirma sobre esse assunto).
 *
 * BNCC: EF05LP01, EF15LP03
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-tema-e-ideia-central",
  titulo: "Tema e Ideia Central",
  iconeTrilha: "🕵️",
  bncc: ["EF05LP01", "EF15LP03"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "Abrindo o caso",
    historia:
      "Brilha calçou as luvas de detetive e abriu o caderno de investigações sobre a mesa. — Todo texto é uma cena de investigação: primeiro descobrimos DO QUE ele fala (o tema), e depois vamos mais fundo, atrás do que ele quer PROVAR sobre esse assunto (a ideia central). Confundir os dois é o erro número um de detetives iniciantes. Hoje você vai aprender a separar essas duas pistas com precisão.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Antes de ler o texto de hoje, observe o cartaz encontrado na escola. Ele fala sobre um assunto — mas o que ele quer DEFENDER sobre esse assunto?",
    bloco: {
      titulo: "O Cartaz do Pátio",
      capaImagemUrl: bloco,
      pistas: [
        { imagemUrl: celular, nome: "Um celular com o tempo de tela marcado" },
        { imagemUrl: calendario, nome: "Um calendário com horários riscados" },
      ],
      recado: {
        rotulo: "Cartaz afixado no mural da escola",
        icone: "📢",
        linhas: [
          "TELAS EM EXCESSO: UM ALERTA PARA A TURMA",
          "Muitos alunos dormem tarde por causa do celular.",
          "Especialistas recomendam pausas nas telas antes de dormir.",
        ],
        estilo: "cartaz",
      },
      pergunta: "Sobre o que o cartaz fala, e o que ele parece querer defender?",
      hipoteses: [
        { texto: "Fala sobre o uso de telas e defende que é preciso ter mais cuidado com esse hábito" },
        { texto: "Fala sobre a merenda escolar e defende que ela deveria ser mais variada" },
        { texto: "Fala sobre os horários de recreio e defende que deveriam durar mais" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🕵️ Boa investigação! O cartaz fala sobre TELAS (o tema) e defende que é preciso controlar esse uso, porque atrapalha o sono (a ideia central).",
      feedbackErro:
        "Releia o cartaz: as três linhas falam sobre celular, tempo de tela e sono — esse é o assunto. E o cartaz avisa que é preciso ter cuidado com isso — essa é a defesa dele.",
      dica: "🕵️ Pista de detetive: lembre que o TEMA é só o assunto, em poucas palavras; a IDEIA CENTRAL é o que o texto quer defender ou provar sobre esse assunto. Releia o cartaz procurando essas duas coisas separadamente.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras que todo detetive de textos precisa dominar para não confundir pistas.",
    cards: [
      {
        palavra: "tema",
        explicacao:
          "É o assunto geral de um texto — pode ser dito em poucas palavras, como um rótulo. Responde à pergunta 'sobre o que o texto fala?'.",
        exemplo: "O tema de uma reportagem pode ser simplesmente 'reciclagem' ou 'uso de telas'.",
        imagemUrl: bloco,
      },
      {
        palavra: "ideia central",
        explicacao:
          "É o que o texto afirma, defende ou quer provar sobre o tema. Não é só o assunto — é a mensagem principal que o autor quer deixar. Responde à pergunta 'o que o texto quer dizer sobre esse assunto?'.",
        exemplo: "Sobre o tema 'reciclagem', a ideia central pode ser 'reciclar é essencial para reduzir o lixo nas cidades'.",
        imagemUrl: lupa,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Separando o assunto da defesa do texto",
    instrucao:
      "Observe cada mini-texto: primeiro nomeie o TEMA em poucas palavras, depois procure a frase que mostra a IDEIA CENTRAL — o que o texto realmente defende.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Tema x Ideia Central: como não confundir",
        explicacao:
          "O TEMA é um rótulo curto — pode ser dito em uma ou duas palavras, como 'mochilas pesadas' ou 'reciclagem'. Já a IDEIA CENTRAL é uma frase completa, que afirma, defende ou recomenda algo sobre esse tema. Truque de detetive: se a resposta cabe num rótulo curto, é tema; se é uma frase que defende uma opinião, é ideia central.",
        exemplos: [
          {
            palavra: "Reciclagem de lixo",
            destaque: "Reciclagem de lixo",
            motivo: "É só um rótulo, em poucas palavras: isso é o TEMA.",
          },
          {
            palavra: "É essencial reciclar para reduzir o lixo nas cidades.",
            destaque: "é essencial reciclar",
            motivo: "É uma frase completa que defende uma ação: isso é a IDEIA CENTRAL.",
          },
          {
            palavra: "As cidades precisam investir mais em coleta seletiva.",
            destaque: "precisam investir mais",
            motivo: "Também defende algo sobre o tema — outra forma de expressar a ideia central.",
          },
        ],
        desafios: [
          {
            molde: "'Alimentação escolar' — isso é o tema ou a ideia central do texto? _",
            opcoes: [
              "É o tema, porque é só um rótulo do assunto",
              "É a ideia central, porque defende uma opinião",
              "É as duas coisas ao mesmo tempo",
            ],
            correta: 0,
            frase: "Alimentação escolar",
            feedbackErro:
              "'Alimentação escolar' não afirma nem defende nada — é só o rótulo do assunto. Isso é o tema.",
          },
          {
            molde:
              "'É preciso investir mais em merendas nutritivas nas escolas públicas.' Isso é tema ou ideia central? _",
            opcoes: [
              "É a ideia central, porque defende uma ação sobre o tema",
              "É o tema, porque cabe em poucas palavras",
              "Não é nem tema nem ideia central",
            ],
            correta: 0,
            frase: "É preciso investir mais em merendas nutritivas nas escolas públicas.",
            feedbackErro:
              "Essa frase completa DEFENDE uma ação (investir mais). Por isso é a ideia central, não apenas o tema.",
          },
          {
            molde: "'Mais ciclovias tornariam as cidades mais seguras para quem pedala.' Tema ou ideia central? _",
            opcoes: [
              "Ideia central, pois afirma algo sobre o tema 'uso de bicicletas'",
              "Tema, pois é um rótulo curto",
              "Nenhum dos dois: é só um detalhe",
            ],
            correta: 0,
            frase: "Mais ciclovias tornariam as cidades mais seguras para quem pedala.",
            feedbackErro:
              "O tema seria só 'uso de bicicletas na cidade'. Essa frase completa, que afirma algo, é a ideia central.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia como um detetive: primeiro identifique do que o texto fala, depois o que ele quer provar sobre isso.",
    leitura: {
      titulo: "O Peso da Mochila",
      imagemUrl: bussola,
      legendaImagem: "Muitos alunos carregam mochilas pesadas todos os dias",
      destacar: ["mochilas muito pesadas", "podem causar dores nas costas", "é preciso reduzir esse peso"],
      paragrafos: [
        "Pesquisas recentes mostram que muitos estudantes carregam mochilas muito pesadas para a escola, às vezes com mais de 10% do próprio peso corporal. Médicos alertam que esse hábito pode causar dores nas costas e problemas de postura ainda na infância.",
        "Algumas escolas já adotaram armários individuais, para que os alunos não precisem levar todos os livros para casa todos os dias. Outras orientam os pais a pesar as mochilas periodicamente, como forma de controle.",
        "Diante desses riscos, especialistas defendem que é urgente reduzir esse peso: seja com armários na escola, seja com o uso de materiais digitais que substituam parte dos livros impressos.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Qual é o TEMA (assunto geral) desse texto?",
        opcoes: ["O peso das mochilas escolares", "As notas dos alunos", "Os armários das escolas"],
        correta: 0,
        feedbackAcerto: "🕵️ Isso! Do início ao fim, o texto fala sobre o peso das mochilas.",
        feedbackErro: "Releia o primeiro parágrafo: o assunto que se repete é o peso das mochilas.",
        ondeEstaNoTexto: "…muitos estudantes carregam mochilas muito pesadas para a escola…",
        dica: "🕵️ Pista de detetive: volte ao texto e releia este trecho — “muitos estudantes carregam mochilas muito pesadas para a escola”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O peso das mochilas escolares”. Do início ao fim, o texto fala sobre o peso das mochilas. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Que problema de saúde é citado como consequência das mochilas pesadas?",
        opcoes: ["Dores nas costas e problemas de postura", "Problemas de visão", "Dores de cabeça"],
        correta: 0,
        feedbackAcerto: "🕵️ Exato! O texto cita 'dores nas costas e problemas de postura'.",
        feedbackErro: "A resposta aparece no fim do primeiro parágrafo, logo depois de 'alertam que'.",
        ondeEstaNoTexto: "Médicos alertam que esse hábito pode causar dores nas costas e problemas de postura ainda na infância.",
        dica: "🕵️ Pista de detetive: volte ao texto e releia este trecho — “Médicos alertam que esse hábito pode causar dores nas costas e problemas de postura”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Dores nas costas e problemas de postura”. O texto cita exatamente essas palavras logo depois de 'alertam que'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Que soluções o texto menciona para o problema?",
        opcoes: [
          "Armários individuais e materiais digitais",
          "Aulas mais curtas",
          "Mais tempo de recreio",
        ],
        correta: 0,
        feedbackAcerto: "🕵️ Isso mesmo! O segundo e o terceiro parágrafos citam armários e materiais digitais.",
        feedbackErro: "Releia o segundo e o terceiro parágrafo — as soluções envolvem armários e materiais digitais.",
        ondeEstaNoTexto: "Algumas escolas já adotaram armários individuais… uso de materiais digitais que substituam parte dos livros impressos.",
        dica: "🕵️ Pista de detetive: volte ao texto e releia este trecho — “armários individuais… uso de materiais digitais”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Armários individuais e materiais digitais”. O segundo e o terceiro parágrafos citam essas soluções. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora o trabalho fino do detetive: separar o assunto (tema) da mensagem que o texto defende (ideia central).",
    perguntas: [
      {
        pergunta: "Qual dessas frases resume melhor a IDEIA CENTRAL do texto (o que ele defende, e não só o assunto)?",
        opcoes: [
          "Mochilas pesadas prejudicam a saúde dos alunos, por isso é urgente reduzir esse peso",
          "Mochilas são objetos usados para carregar livros",
          "Algumas escolas têm armários",
        ],
        correta: 0,
        feedbackAcerto:
          "🕵️ Isso mesmo! Essa frase não apenas nomeia o assunto (mochilas), ela conta o que o texto DEFENDE: que é preciso reduzir o peso por causa dos riscos à saúde.",
        feedbackErro:
          "Pense: o tema (mochilas) aparece em todas as opções, mas só uma delas mostra o que o texto quer PROVAR sobre isso — que o peso deve ser reduzido.",
        dica: "🕵️ Pista de detetive: lembre que a ideia central é uma frase completa que defende algo sobre o tema — não é só o rótulo do assunto.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Mochilas pesadas prejudicam a saúde dos alunos, por isso é urgente reduzir esse peso”. Essa frase mostra o que o texto DEFENDE, não só o assunto. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Se alguém dissesse que 'o tema e a ideia central são sempre a mesma coisa', você diria que...",
        opcoes: [
          "Está certo, os dois termos significam exatamente o mesmo",
          "Está errado: o tema é só o assunto; a ideia central é o que o texto defende sobre esse assunto",
          "Está errado: a ideia central é sempre uma palavra só, como o tema",
        ],
        correta: 1,
        feedbackAcerto:
          "🕵️ Correto! O tema é o rótulo do assunto (mochilas pesadas); a ideia central é a mensagem completa que o texto quer deixar sobre ele.",
        feedbackErro:
          "O tema pode ser dito em uma ou duas palavras (mochilas pesadas). Já a ideia central é uma frase completa, que mostra o que o texto defende sobre o tema.",
        dica: "🕵️ Pista de detetive: pense em como o tema cabe num rótulo curto, e a ideia central precisa de uma frase completa que defenda algo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Está errado: o tema é só o assunto; a ideia central é o que o texto defende sobre esse assunto”. O tema é o rótulo; a ideia central é a mensagem completa. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Um detetive organiza as provas na ordem em que elas aparecem no texto, do assunto até a conclusão.",
    bloco: {
      instrucao: "Do começo ao fim do texto sobre mochilas.",
      itens: [
        { id: "p1", texto: "Pesquisas mostram que muitos alunos carregam mochilas muito pesadas.", imagemUrl: bussola },
        { id: "p2", texto: "Algumas escolas já adotam armários individuais como solução.", imagemUrl: biblioteca },
        { id: "p3", texto: "Especialistas defendem que é urgente reduzir esse peso.", imagemUrl: papel },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🕵️ Perfeito! Você seguiu a trilha certa: o problema, as tentativas de solução, e a defesa final.",
      feedbackErro: "Pense na lógica de um texto defensivo: primeiro se apresenta o problema, depois exemplos de solução, e por último a defesa da mudança.",
      dica: "🕵️ Pista de detetive: todo texto que defende uma ideia costuma seguir esta ordem: primeiro o problema, depois as tentativas de solução, e por último a defesa final.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e identifique o tema e a ideia central escondidos no texto.",
    leitura: {
      titulo: "Bibliotecas que Encolhem",
      imagemUrl: biblioteca,
      destacar: ["cada vez menos crianças frequentam bibliotecas", "é preciso tornar as bibliotecas mais atrativas", "quiosques de leitura e clubes do livro"],
      paragrafos: [
        "Levantamentos recentes mostram que, em muitas cidades, cada vez menos crianças frequentam bibliotecas públicas. O motivo mais citado pelos próprios estudantes é a preferência por jogos eletrônicos e vídeos curtos no celular.",
        "Bibliotecários de diversas regiões já tentam reverter esse quadro criando quiosques de leitura em praças, clubes do livro com prêmios simbólicos e sessões de leitura em voz alta abertas ao público.",
        "Para especialistas em educação, é preciso tornar as bibliotecas mais atrativas e conectadas à vida digital das crianças, sem abrir mão do valor da leitura em papel.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o TEMA desse texto?",
        opcoes: ["A frequência de crianças em bibliotecas", "Os jogos eletrônicos mais populares", "O preço dos livros"],
        correta: 0,
        feedbackAcerto: "🕵️ Isso! O assunto que percorre todo o texto é a frequência (cada vez menor) de crianças nas bibliotecas.",
        feedbackErro: "Releia o primeiro parágrafo: o assunto central é quantas crianças frequentam bibliotecas.",
        ondeEstaNoTexto: "…cada vez menos crianças frequentam bibliotecas públicas.",
        dica: "🕵️ Pista de detetive: volte ao texto e releia este trecho — “cada vez menos crianças frequentam bibliotecas públicas”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A frequência de crianças em bibliotecas”. O assunto que percorre todo o texto é essa frequência cada vez menor. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual frase resume melhor a IDEIA CENTRAL do texto?",
        opcoes: [
          "É preciso tornar as bibliotecas mais atrativas para reconquistar as crianças",
          "As crianças gostam mais de jogos eletrônicos",
          "As bibliotecas existem há muitos anos",
        ],
        correta: 0,
        feedbackAcerto: "🕵️ Exato! Essa é a defesa final do texto: tornar as bibliotecas mais atrativas.",
        feedbackErro: "O texto não só descreve o problema — ele defende uma solução no último parágrafo. Releia a conclusão.",
        ondeEstaNoTexto: "…é preciso tornar as bibliotecas mais atrativas e conectadas à vida digital das crianças…",
        dica: "🕵️ Pista de detetive: volte ao texto e releia este trecho — “é preciso tornar as bibliotecas mais atrativas e conectadas à vida digital das crianças”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “É preciso tornar as bibliotecas mais atrativas para reconquistar as crianças”. Essa é a defesa final do texto. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Relatório do Detetive de Textos",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Escreva um parágrafo declarando o tema e a ideia central",
        comando:
          "Escolha um assunto que você conhece bem (um esporte, um animal, uma tecnologia). Escreva UM parágrafo em que a primeira frase diga o TEMA e a segunda frase declare a IDEIA CENTRAL — o que você defende ou afirma sobre esse tema.",
        linhas: 5,
        modelo: [
          "O tema deste texto é o uso excessivo de celular por crianças.",
          "Defendo que é preciso limitar o tempo de tela para proteger o sono e a atenção.",
          "Isso porque especialistas mostram que dormir mal atrapalha o aprendizado na escola.",
          "Por isso, cada família deveria combinar horários claros para o uso das telas.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Não repeti a mesma palavra várias vezes: troquei por pronome ou sinônimo.",
          "Usei pelo menos um conectivo (porque, então, mas, além disso) ligando as ideias.",
          "Li em voz alta e consertei o que ficou estranho.",
          "A primeira frase do meu parágrafo diz claramente o TEMA.",
          "A segunda frase declara a IDEIA CENTRAL — o que eu defendo sobre esse tema.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (~130 ppm · 5º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: Como o Cérebro Encontra o Assunto",
    instrucao:
      "Leia o mesmo texto três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula, ponto e travessão. A meta não é correr: é ler como quem explica algo importante.",
    texto: [
      "Você já parou para pensar como um bom leitor descobre, em segundos, do que um texto está falando? Ele não lê palavra por palavra tentando decorar tudo. Em vez disso, procura pistas: o título, as primeiras frases e as palavras que se repetem várias vezes ao longo do texto.",
      "Essas pistas revelam o tema, ou seja, o assunto geral que liga todas as partes do texto. Mas um leitor atento vai além: ele também busca a ideia central, que é a mensagem que o autor quer defender sobre aquele assunto. Encontrar as duas coisas exige treino e paciência.",
      "Com a prática, essa busca se torna quase automática. O cérebro aprende a separar o que é essencial do que é apenas detalhe, e a leitura passa a ser mais rápida e mais compreensível. Por isso, treinar esse olhar todos os dias transforma qualquer criança em uma leitora ou leitor mais seguro.",
    ],
    metaSegundos: 69,
  },

  momento09_revisao: {
    pontos: [
      "O TEMA é o assunto geral do texto — pode ser dito em poucas palavras (ex.: 'mochilas pesadas').",
      "A IDEIA CENTRAL é o que o texto defende, afirma ou quer provar sobre esse tema (ex.: 'é urgente reduzir o peso das mochilas').",
      "Um bom truque: se a resposta cabe em uma ou duas palavras, provavelmente é o tema. Se precisa de uma frase completa que afirma algo, é a ideia central.",
      "Textos que defendem uma opinião (como cartazes, artigos e notícias) quase sempre têm uma ideia central bem marcada, geralmente perto do fim.",
    ],
    miniDesafio: {
      pergunta: "Um texto fala sobre 'praças públicas' e conclui que 'é preciso mais praças arborizadas nos bairros periféricos'. Qual é a ideia central?",
      opcoes: [
        "É preciso mais praças arborizadas nos bairros periféricos",
        "Praças públicas",
        "Bairros periféricos",
      ],
      correta: 0,
      feedbackAcerto: "🕵️ Isso! 'Praças públicas' é só o tema; a frase completa que defende uma ação é a ideia central.",
      feedbackErro: "As opções 'praças públicas' e 'bairros periféricos' são só partes do assunto (tema). A ideia central é a frase que defende algo.",
      dica: "🕵️ Pista de detetive: lembre que o tema cabe num rótulo curto; a ideia central é a frase completa que defende uma ação sobre esse rótulo.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “É preciso mais praças arborizadas nos bairros periféricos”. 'Praças públicas' é só o tema; a frase completa que defende uma ação é a ideia central. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o 'tema' de um texto?",
        opcoes: [
          "A frase que resume o que o texto defende",
          "O assunto geral do texto, dito em poucas palavras",
          "Sempre o título exato do texto",
          "A opinião pessoal de quem está lendo",
        ],
        correta: 1,
        feedbackAcerto: "🕵️ Isso! O tema é o rótulo do assunto.",
        feedbackErro: "O tema é apenas o assunto geral, como um rótulo — não é a mensagem completa do texto.",
        dica: "🕵️ Pista de detetive: lembre que o tema é só o assunto, em poucas palavras — como um rótulo, sem defender nada.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O assunto geral do texto, dito em poucas palavras”. O tema é o rótulo do assunto. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — O que é a 'ideia central' de um texto?",
        opcoes: [
          "O mesmo que o tema",
          "O que o texto afirma ou defende sobre o tema",
          "A última palavra do texto",
          "O nome do autor do texto",
        ],
        correta: 1,
        feedbackAcerto: "🕵️ Correto! A ideia central é a mensagem que o texto quer deixar sobre o assunto.",
        feedbackErro: "A ideia central vai além do assunto: ela mostra o que o texto quer provar ou defender.",
        dica: "🕵️ Pista de detetive: lembre que a ideia central é a frase completa que mostra o que o texto quer PROVAR sobre o tema.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O que o texto afirma ou defende sobre o tema”. A ideia central é a mensagem que o texto quer deixar. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — No texto sobre mochilas, qual era a ideia central?",
        opcoes: [
          "É urgente reduzir o peso das mochilas por causa dos riscos à saúde",
          "Mochilas escolares",
          "Algumas escolas têm armários",
          "Os alunos gostam de mochilas coloridas",
        ],
        correta: 0,
        feedbackAcerto: "🕵️ Isso! Essa frase mostra o que o texto defendia, não só o assunto.",
        feedbackErro: "'Mochilas escolares' é só o tema. A ideia central defende que o peso precisa ser reduzido.",
        dica: "🕵️ Pista de detetive: lembre que a ideia central é a frase completa que mostra o que o texto quer PROVAR sobre o tema.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “É urgente reduzir o peso das mochilas por causa dos riscos à saúde”. Essa frase mostra o que o texto defendia. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "4/5 — Qual dessas opções é um exemplo de TEMA, e não de ideia central?",
        opcoes: [
          "Reciclagem de lixo",
          "É essencial reciclar para reduzir o lixo nas cidades",
          "As cidades precisam investir mais em coleta seletiva",
          "É urgente que todos separem o lixo em casa",
        ],
        correta: 0,
        feedbackAcerto: "🕵️ Exatamente! 'Reciclagem de lixo' é só o assunto, sem defender nada.",
        feedbackErro: "As outras opções defendem algo sobre a reciclagem — por isso são ideias centrais, não temas.",
        dica: "🕵️ Pista de detetive: lembre que o tema é só o assunto, em poucas palavras — como um rótulo, sem defender nada.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Reciclagem de lixo”. É só o assunto, sem defender nada — as outras opções defendem algo. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "5/5 — No texto sobre bibliotecas, qual era a ideia central defendida no fim?",
        opcoes: [
          "É preciso tornar as bibliotecas mais atrativas para reconquistar as crianças",
          "A frequência de crianças em bibliotecas",
          "Os jogos eletrônicos são mais populares que livros",
          "As bibliotecas deveriam fechar mais cedo",
        ],
        correta: 0,
        feedbackAcerto: "🕵️ Isso! Você já é capaz de separar o assunto da defesa de um texto. Caso encerrado! 🌟",
        feedbackErro: "'A frequência de crianças em bibliotecas' é o tema. A defesa da solução no fim do texto é a ideia central.",
        dica: "🕵️ Pista de detetive: lembre que a ideia central é a frase completa que mostra o que o texto quer PROVAR sobre o tema.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “É preciso tornar as bibliotecas mais atrativas para reconquistar as crianças”. Essa é a defesa final do texto. Caso encerrado! 🌟 Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: investigando tema e ideia central em casa",
    materiais: ["Uma notícia de jornal, revista ou site", "Papel e lápis"],
    passos: [
      "1) Escolham juntos uma notícia curta em casa (impressa ou no celular).",
      "2) A criança diz, em poucas palavras, qual é o TEMA da notícia.",
      "3) Depois, ela tenta escrever uma frase completa que mostre a IDEIA CENTRAL: o que a notícia realmente defende ou afirma sobre esse tema.",
      "4) Conversem: a frase da ideia central é diferente do tema? Por quê?",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'O tema da notícia era ___ e a ideia central era ___.'",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "Lupa de Bronze",
  },
};
