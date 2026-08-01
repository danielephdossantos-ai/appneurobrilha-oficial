import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as tv } from "@/assets/neuro-treino/objetos/tv-moderna.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";

/**
 * Aula 3 — Fato e Opinião
 * -------------------------------------------------------------
 * Terceira investigação da Unidade 1 (O Detetive da Leitura).
 * O detetive precisa separar o que PODE SER PROVADO (fato) do
 * que é uma AVALIAÇÃO pessoal (opinião), especialmente em
 * notícias e comentários.
 *
 * BNCC: EF05LP17, EF05LP23
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-fato-e-opiniao",
  titulo: "Fato e Opinião",
  iconeTrilha: "⚖️",
  bncc: ["EF05LP17", "EF05LP23"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A balança da verdade",
    historia:
      "Brilha colocou uma pequena balança sobre a mesa de investigações. — Todo bom detetive sabe pesar as informações. De um lado, os FATOS: coisas que aconteceram de verdade e podem ser checadas. Do outro, as OPINIÕES: o que alguém acha, sente ou defende sobre esses fatos. Confundir os dois é um erro perigoso — pode fazer você acreditar que uma opinião é uma verdade absoluta. Hoje vamos treinar a balança da verdade.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Leia a manchete e o comentário publicados sobre o mesmo assunto. Um deles é só informação; o outro traz uma avaliação pessoal.",
    bloco: {
      titulo: "A Notícia e o Comentário",
      capaImagemUrl: tv,
      pistas: [
        { imagemUrl: celular, nome: "Uma tela de celular com uma notícia" },
        { imagemUrl: papel, nome: "Um comentário escrito por um leitor" },
      ],
      recado: {
        rotulo: "Publicado num site de notícias",
        icone: "📰",
        linhas: [
          "MANCHETE: Cidade inaugura nova ciclovia de 5 km no centro.",
          "COMENTÁRIO DE UM LEITOR: 'Que ótima notícia! Era exatamente disso que a cidade precisava.'",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual dessas duas frases é um FATO, e qual é uma OPINIÃO?",
      hipoteses: [
        { texto: "A manchete é fato (pode ser checada); o comentário é opinião (avaliação pessoal)" },
        { texto: "As duas são fatos, porque estão escritas com certeza" },
        { texto: "As duas são opiniões, porque foram publicadas num site" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "⚖️ Isso mesmo! A manchete descreve algo que pode ser verificado (a ciclovia existe, tem 5 km). Já o comentário expressa um sentimento pessoal ('ótima notícia', 'exatamente disso que precisava').",
      feedbackErro:
        "Pense: dá para checar se a ciclovia tem 5 km (isso é fato). Mas 'ótima notícia' é uma avaliação pessoal, que pode variar de pessoa para pessoa — isso é opinião.",
      dica: "⚖️ Pista de detetive: fato é o que pode ser checado ou medido; opinião é uma avaliação pessoal que pode variar de pessoa para pessoa.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras que ajudam o detetive a não cair em armadilhas.",
    cards: [
      {
        palavra: "fato",
        explicacao:
          "É uma informação que aconteceu de verdade e pode ser checada ou comprovada. Não depende do que a pessoa sente ou pensa sobre ela.",
        exemplo: "'A escola tem 300 alunos matriculados' é um fato: dá para contar e confirmar.",
        imagemUrl: lupa,
      },
      {
        palavra: "opinião",
        explicacao:
          "É uma avaliação, um sentimento ou um julgamento pessoal sobre algo. Pode variar de uma pessoa para outra, mesmo diante do mesmo fato.",
        exemplo: "'Essa é a melhor escola da cidade' é uma opinião: outra pessoa pode discordar.",
        imagemUrl: bussola,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Os marcadores que denunciam uma opinião",
    instrucao:
      "Observe as frases e perceba: algumas palavras são pistas quase certas de que ali começa uma OPINIÃO, e não um fato.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Palavras que denunciam a opinião",
        explicacao:
          "Algumas palavras avisam que quem escreve está dando sua avaliação pessoal, e não apenas contando o que aconteceu. Palavras como 'acho', 'acredito', 'melhor', 'pior', 'deveria', 'com certeza' e 'sem dúvida' costumam sinalizar OPINIÃO. Já frases com números, datas, nomes e coisas que podem ser medidas ou conferidas costumam ser FATOS.",
        exemplos: [
          {
            palavra: "Acho que essa é a melhor escola da cidade.",
            destaque: "Acho que... melhor",
            motivo: "'Acho que' e 'melhor' revelam um julgamento pessoal: é opinião.",
          },
          {
            palavra: "A escola foi fundada em 1998 e tem 300 alunos.",
            destaque: "fundada em 1998... 300 alunos",
            motivo: "Datas e números podem ser conferidos: é fato.",
          },
          {
            palavra: "O prefeito deveria investir mais em praças públicas.",
            destaque: "deveria",
            motivo: "'Deveria' expressa uma opinião sobre o que seria certo fazer.",
          },
        ],
        desafios: [
          {
            molde: "'A prova tinha 10 questões de matemática.' Essa frase é: _",
            opcoes: ["Fato, porque traz um número que pode ser conferido", "Opinião, porque usa a palavra 'acho'", "Nenhuma das duas coisas"],
            correta: 0,
            frase: "A prova tinha 10 questões de matemática.",
            feedbackErro:
              "Não há palavras como 'acho' ou 'melhor' aqui — apenas um número checável. Isso é fato.",
          },
          {
            molde: "'Eu acredito que essa prova estava fácil demais.' Essa frase é: _",
            opcoes: ["Opinião, porque traz 'eu acredito' e um julgamento pessoal", "Fato, porque fala sobre uma prova real", "Nenhuma das duas coisas"],
            correta: 0,
            frase: "Eu acredito que essa prova estava fácil demais.",
            feedbackErro:
              "'Eu acredito' e 'fácil demais' são marcas de julgamento pessoal — isso é opinião, mesmo falando de algo real.",
          },
          {
            molde: "'O time deveria ter treinado mais antes do jogo.' Essa frase é: _",
            opcoes: ["Opinião, porque usa 'deveria' para dizer o que seria certo", "Fato, porque cita um time de verdade", "Nenhuma das duas coisas"],
            correta: 0,
            frase: "O time deveria ter treinado mais antes do jogo.",
            feedbackErro:
              "'Deveria' é um marcador clássico de opinião: quem escreve está avaliando o que achava que devia acontecer.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com cuidado: separe mentalmente o que pode ser checado (fato) do que é uma avaliação pessoal (opinião).",
    leitura: {
      titulo: "A Reforma da Praça",
      imagemUrl: bussola,
      legendaImagem: "Nem tudo que se escreve numa notícia é 100% neutro",
      destacar: ["reformada em três meses", "recebeu novos brinquedos e bancos", "sem dúvida, a melhor praça do bairro"],
      paragrafos: [
        "A Praça das Flores foi reformada em três meses e reaberta ao público no último sábado. A prefeitura investiu em novos brinquedos, bancos e uma quadra poliesportiva.",
        "Segundo a administração, mais de duas mil pessoas visitaram o local no primeiro final de semana após a reabertura.",
        "Para muitos moradores, a praça é, sem dúvida, a melhor do bairro agora, com espaço para todas as idades e muito mais verde do que antes.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Quanto tempo durou a reforma da Praça das Flores?",
        opcoes: ["Três meses", "Uma semana", "Um ano"],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! O texto informa 'reformada em três meses'.",
        feedbackErro: "Releia o primeiro parágrafo: ele cita o tempo exato da reforma.",
        ondeEstaNoTexto: "A Praça das Flores foi reformada em três meses…",
        dica: "⚖️ Pista de detetive: volte ao texto e releia este trecho — “A Praça das Flores foi reformada em três meses”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Três meses”. O texto informa 'reformada em três meses'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que a prefeitura investiu na reforma?",
        opcoes: [
          "Novos brinquedos, bancos e uma quadra poliesportiva",
          "Uma biblioteca pública",
          "Um estacionamento subterrâneo",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Exato! O texto cita brinquedos, bancos e quadra.",
        feedbackErro: "Releia o primeiro parágrafo: ele lista os itens da reforma.",
        ondeEstaNoTexto: "…a prefeitura investiu em novos brinquedos, bancos e uma quadra poliesportiva.",
        dica: "⚖️ Pista de detetive: volte ao texto e releia este trecho — “a prefeitura investiu em novos brinquedos, bancos e uma quadra poliesportiva”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Novos brinquedos, bancos e uma quadra poliesportiva”. O texto cita brinquedos, bancos e quadra. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora o trabalho fino do detetive: separar o que é checável (fato) do que é avaliação pessoal (opinião) dentro do mesmo texto.",
    perguntas: [
      {
        pergunta: "Qual dessas frases do texto é um FATO?",
        opcoes: [
          "'A prefeitura investiu em novos brinquedos, bancos e uma quadra poliesportiva.'",
          "'A praça é, sem dúvida, a melhor do bairro agora.'",
          "'Muitos moradores acham que a praça ficou linda demais.'",
        ],
        correta: 0,
        feedbackAcerto:
          "⚖️ Isso mesmo! Essa frase descreve algo que pode ser conferido de verdade (o que foi instalado na praça). As outras duas expressam avaliações pessoais.",
        feedbackErro:
          "Pense: 'a melhor do bairro' e 'linda demais' são julgamentos pessoais, que variam de pessoa para pessoa — isso é opinião, não fato.",
        dica: "⚖️ Pista de detetive: fato é o que pode ser checado ou medido; opinião é uma avaliação pessoal que pode variar de pessoa para pessoa.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “'A prefeitura investiu em novos brinquedos, bancos e uma quadra poliesportiva.'”. Essa frase descreve algo que pode ser conferido de verdade; as outras duas expressam avaliações pessoais. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Por que a frase 'a praça é, sem dúvida, a melhor do bairro agora' é uma OPINIÃO?",
        opcoes: [
          "Porque é um julgamento de valor, que outra pessoa pode discordar",
          "Porque tem números exatos que podem ser checados",
          "Porque foi dita pela prefeitura oficialmente",
        ],
        correta: 0,
        feedbackAcerto:
          "⚖️ Correto! 'A melhor' é uma avaliação — depende do gosto e do critério de quem fala, não de algo que se possa medir com exatidão.",
        feedbackErro:
          "Repare: não existe uma forma objetiva de medir 'a melhor praça'. Isso é sempre uma questão de opinião, mesmo quando parece uma afirmação forte.",
        dica: "⚖️ Pista de detetive: palavras como 'melhor', 'sem dúvida' e 'com certeza' costumam indicar opinião, não fato.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque é um julgamento de valor, que outra pessoa pode discordar”. 'A melhor' é uma avaliação que depende do gosto de quem fala. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as informações do texto na ordem em que aparecem, do fato inicial até a opinião final.",
    bloco: {
      instrucao: "Do começo ao fim do texto sobre a praça.",
      itens: [
        { id: "p1", texto: "A praça foi reformada em três meses e reaberta no sábado.", imagemUrl: bussola },
        { id: "p2", texto: "Mais de duas mil pessoas visitaram o local no primeiro fim de semana.", imagemUrl: biblioteca },
        { id: "p3", texto: "Para muitos moradores, é a melhor praça do bairro agora.", imagemUrl: papel },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "⚖️ Perfeito! Você seguiu a ordem certa: o fato da reforma, o número de visitantes, e a opinião dos moradores por último.",
      feedbackErro: "Pense na lógica da notícia: primeiro se conta o que aconteceu, depois um número, e por último uma opinião sobre o resultado.",
      dica: "⚖️ Pista de detetive: a notícia costuma seguir a ordem: fato principal, dado numérico e, por último, a opinião de alguém.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e separe fatos de opiniões no texto.",
    leitura: {
      titulo: "O Novo Aplicativo da Escola",
      imagemUrl: celular,
      destacar: ["lançado nesta segunda-feira", "permite consultar notas e faltas", "é, com certeza, muito mais prático que o antigo"],
      paragrafos: [
        "A escola lançou nesta segunda-feira um novo aplicativo para pais e alunos. Pelo app, é possível consultar notas, faltas e o calendário de provas em tempo real.",
        "Segundo a coordenação, mais de 500 famílias já baixaram o aplicativo nas primeiras 24 horas.",
        "Para muitos pais, o novo sistema é, com certeza, muito mais prático que o antigo mural de avisos na entrada da escola.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quando o novo aplicativo foi lançado?",
        opcoes: ["Nesta segunda-feira", "No mês passado", "No início do ano"],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! O texto informa claramente a data de lançamento.",
        feedbackErro: "Releia o primeiro parágrafo: ele cita o dia do lançamento.",
        ondeEstaNoTexto: "A escola lançou nesta segunda-feira um novo aplicativo…",
        dica: "⚖️ Pista de detetive: volte ao texto e releia este trecho — “A escola lançou nesta segunda-feira um novo aplicativo”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Nesta segunda-feira”. O texto informa claramente a data de lançamento. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual das frases do texto é uma OPINIÃO, e não um fato?",
        opcoes: [
          "'O novo sistema é, com certeza, muito mais prático que o antigo mural.'",
          "'Mais de 500 famílias já baixaram o aplicativo nas primeiras 24 horas.'",
          "'É possível consultar notas, faltas e o calendário de provas em tempo real.'",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Exato! 'Muito mais prático' é um julgamento pessoal — outra pessoa pode achar diferente.",
        feedbackErro: "Releia: as outras duas frases trazem números e funções que podem ser conferidos. Só uma expressa uma avaliação pessoal.",
        ondeEstaNoTexto: "Para muitos pais, o novo sistema é, com certeza, muito mais prático que o antigo mural de avisos…",
        dica: "⚖️ Pista de detetive: palavras como 'com certeza' e 'mais prático' costumam indicar opinião, não fato.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “'O novo sistema é, com certeza, muito mais prático que o antigo mural.'”. 'Muito mais prático' é um julgamento pessoal. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Relatório do Detetive",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Escreva um parágrafo com fatos e opinião",
        comando:
          "Escolha um acontecimento recente da sua escola, do seu bairro ou de um jogo que você assistiu. Escreva UM parágrafo com DOIS fatos (informações que podem ser checadas) e UMA opinião claramente marcada por uma palavra como 'acho', 'melhor' ou 'com certeza'.",
        linhas: 5,
        modelo: [
          "No sábado, o time do meu bairro venceu o jogo por 2 a 1.",
          "A partida aconteceu no campo perto da praça e durou uma hora.",
          "Eu acho que esse foi o jogo mais emocionante do ano.",
          "Por isso, quero assistir ao próximo jogo do time.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Não repeti a mesma palavra várias vezes: troquei por pronome ou sinônimo.",
          "Usei pelo menos um conectivo (porque, então, mas, além disso) ligando as ideias.",
          "Li em voz alta e consertei o que ficou estranho.",
          "Meu parágrafo tem DOIS fatos que podem ser checados (números, datas, nomes).",
          "Marquei claramente minha OPINIÃO com uma palavra como 'acho', 'melhor' ou 'com certeza'.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (~130 ppm)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: O Caso dos Marcadores",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula e ponto. A meta não é correr: é ler como quem investiga.",
    texto: [
      "O detetive Brilha adora investigar notícias e descobrir o que é fato e o que é opinião escondida em cada texto que lê todos os dias.",
      "Ele sabe que um bom repórter conta os acontecimentos com números, datas e nomes que qualquer pessoa pode conferir, sem misturar seus próprios sentimentos na reportagem.",
      "Mas quando alguém diz que algo é o melhor, o mais bonito ou o mais emocionante, Brilha liga o alarme, porque ali começa uma opinião, e não mais um fato comprovado.",
    ],
    metaSegundos: 38,
  },

  momento_minijogo: {
    titulo: "Balança do Detetive: Fato ou Opinião?",
    instrucao: "Arraste cada frase para o prato correto da balança: FATO ou OPINIÃO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Fato ou Opinião?",
      bloco: {
        instrucao: "Leia cada frase e decida: ela pode ser checada (fato), ou é um julgamento pessoal (opinião)?",
        itens: [
          { id: "i1", texto: "A escola tem 20 salas de aula", alvoId: "fato" },
          { id: "i2", texto: "Essa é, de longe, a escola mais bonita da cidade", alvoId: "opiniao" },
          { id: "i3", texto: "O time venceu o jogo por 3 a 1", alvoId: "fato" },
          { id: "i4", texto: "Esse foi o jogo mais emocionante do campeonato", alvoId: "opiniao" },
          { id: "i5", texto: "O livro tem 150 páginas", alvoId: "fato" },
          { id: "i6", texto: "Esse é o melhor livro que já li na vida", alvoId: "opiniao" },
        ],
        alvos: [
          { id: "fato", nome: "FATO (pode ser checado)" },
          { id: "opiniao", nome: "OPINIÃO (julgamento pessoal)" },
        ],
        feedbackAcerto: "⚖️ Isso! Você já sabe pesar as informações com precisão de detetive.",
        feedbackErro: "Pense: se dá para medir, contar ou comprovar, é FATO. Se depende do gosto ou julgamento de quem fala, é OPINIÃO.",
        dica: "⚖️ Pista de detetive: fato é o que pode ser checado ou medido; opinião é uma avaliação pessoal que pode variar de pessoa para pessoa.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "FATO é uma informação que aconteceu de verdade e pode ser checada, contada ou comprovada.",
      "OPINIÃO é uma avaliação pessoal, um sentimento ou julgamento — pode variar de pessoa para pessoa.",
      "Palavras como 'melhor', 'pior', 'lindo', 'incrível', 'com certeza', 'acho' e 'deveria' costumam sinalizar uma opinião.",
      "Notícias costumam misturar fatos (o que aconteceu) com opiniões (comentários de pessoas envolvidas) — o bom leitor separa os dois.",
    ],
    miniDesafio: {
      pergunta: "'O filme dura 90 minutos.' e 'O filme é chato demais.' Qual das duas é uma opinião?",
      opcoes: [
        "'O filme é chato demais', porque é um julgamento pessoal",
        "'O filme dura 90 minutos', porque tem um número",
        "As duas são fatos",
      ],
      correta: 0,
      feedbackAcerto: "⚖️ Isso! 'Chato demais' é um julgamento que varia de pessoa para pessoa — isso é opinião.",
      feedbackErro: "A duração em minutos pode ser conferida (fato). Mas 'chato demais' depende do gosto de quem assiste (opinião).",
      dica: "⚖️ Pista de detetive: fato é o que pode ser checado ou medido; opinião é uma avaliação pessoal que pode variar de pessoa para pessoa.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “'O filme é chato demais', porque é um julgamento pessoal”. 'Chato demais' é um julgamento que varia de pessoa para pessoa. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um 'fato'?",
        opcoes: [
          "Uma informação que aconteceu de verdade e pode ser checada",
          "Um sentimento pessoal sobre algo",
          "Sempre a última frase de uma notícia",
          "Uma palavra como 'melhor' ou 'pior'",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! Fato é algo comprovável.",
        feedbackErro: "Fato não é sentimento — é algo que pode ser conferido ou comprovado.",
        feedbackOpcoes: [
          null,
          "❌ “Um sentimento pessoal sobre algo” não é a resposta. Fato não é sentimento — é algo que pode ser conferido ou comprovado.",
          "❌ “Sempre a última frase de uma notícia” não é a resposta. Fato não é sentimento — é algo que pode ser conferido ou comprovado.",
          "❌ “Uma palavra como 'melhor' ou 'pior'” não é a resposta. Fato não é sentimento — é algo que pode ser conferido ou comprovado.",
        ],
        dica: "⚖️ Pista de detetive: fato é o que pode ser checado ou medido; opinião é uma avaliação pessoal que pode variar de pessoa para pessoa.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Uma informação que aconteceu de verdade e pode ser checada”. Fato é algo comprovável. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — O que é uma 'opinião'?",
        opcoes: [
          "Uma avaliação ou julgamento pessoal, que pode variar de pessoa para pessoa",
          "O mesmo que um fato",
          "Uma informação sempre falsa",
          "A data em que algo aconteceu",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Correto! Opinião é julgamento pessoal, não necessariamente falsa, mas subjetiva.",
        feedbackErro: "Opinião não é sinônimo de mentira — é uma avaliação pessoal, que pode até ser sincera, mas é subjetiva.",
        feedbackOpcoes: [
          null,
          "❌ “O mesmo que um fato” não é a resposta. Opinião é uma avaliação pessoal, diferente de um fato checável.",
          "❌ “Uma informação sempre falsa” não é a resposta. Opinião não é sinônimo de mentira — é uma avaliação pessoal, que pode até ser sincera, mas é subjetiva.",
          "❌ “A data em que algo aconteceu” não é a resposta. Isso seria um fato, não uma opinião.",
        ],
        dica: "⚖️ Pista de detetive: opinião depende do gosto e do critério de quem fala, não de algo que se possa medir com exatidão.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Uma avaliação ou julgamento pessoal, que pode variar de pessoa para pessoa”. Opinião é julgamento pessoal, não necessariamente falsa, mas subjetiva. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — No texto da praça, qual frase era um FATO?",
        opcoes: [
          "A prefeitura investiu em novos brinquedos, bancos e uma quadra poliesportiva",
          "A praça é, sem dúvida, a melhor do bairro",
          "A praça ficou linda demais",
          "A praça é, com certeza, a mais bonita da cidade",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! Essa informação pode ser checada; as outras são julgamentos.",
        feedbackErro: "'Melhor', 'linda demais' e 'com certeza a mais bonita' são opiniões. Só a frase sobre os investimentos é checável.",
        feedbackOpcoes: [
          null,
          "❌ “A praça é, sem dúvida, a melhor do bairro” não é a resposta. Isso é uma opinião, não um fato checável.",
          "❌ “A praça ficou linda demais” não é a resposta. Isso é uma opinião, não um fato checável.",
          "❌ “A praça é, com certeza, a mais bonita da cidade” não é a resposta. Isso é uma opinião, não um fato checável.",
        ],
        dica: "⚖️ Pista de detetive: fato é o que pode ser checado ou medido; opinião é uma avaliação pessoal que pode variar de pessoa para pessoa.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A prefeitura investiu em novos brinquedos, bancos e uma quadra poliesportiva”. Essa informação pode ser checada; as outras são julgamentos. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "4/5 — Qual dessas frases é uma OPINIÃO?",
        opcoes: [
          "Esse é o melhor jogador do time",
          "O jogo terminou 2 a 0",
          "O jogo começou às 16h",
          "O time tem 15 jogadores no elenco",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Exatamente! 'O melhor jogador' é um julgamento pessoal.",
        feedbackErro: "As outras trazem números e horários checáveis — só uma expressa um julgamento pessoal.",
        feedbackOpcoes: [
          null,
          "❌ “O jogo terminou 2 a 0” não é a resposta. Isso é um fato: pode ser conferido pelo placar.",
          "❌ “O jogo começou às 16h” não é a resposta. Isso é um fato: um horário checável.",
          "❌ “O time tem 15 jogadores no elenco” não é a resposta. Isso é um fato: um número checável.",
        ],
        dica: "⚖️ Pista de detetive: palavras como 'melhor', 'pior' e 'deveria' costumam indicar opinião, não fato.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Esse é o melhor jogador do time”. 'O melhor jogador' é um julgamento pessoal. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "5/5 — Por que é importante separar fato de opinião ao ler uma notícia?",
        opcoes: [
          "Para não confundir uma avaliação pessoal com uma verdade comprovada",
          "Porque opiniões não podem aparecer em notícias",
          "Porque fatos são sempre mais longos que opiniões",
          "Porque opiniões são sempre mentiras",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! Você já sabe pesar as informações como um verdadeiro detetive. Caso encerrado! 🌟",
        feedbackErro: "Notícias podem trazer opiniões de pessoas entrevistadas — o importante é o leitor saber identificar qual é qual.",
        feedbackOpcoes: [
          null,
          "❌ “Porque opiniões não podem aparecer em notícias” não é a resposta. Notícias podem trazer opiniões de pessoas entrevistadas — o importante é o leitor saber identificar qual é qual.",
          "❌ “Porque fatos são sempre mais longos que opiniões” não é a resposta. O tamanho da frase não define se é fato ou opinião.",
          "❌ “Porque opiniões são sempre mentiras” não é a resposta. Opinião não é sinônimo de mentira, é uma avaliação pessoal, que pode ser sincera.",
        ],
        dica: "⚖️ Pista de detetive: separar fato de opinião evita acreditar que um julgamento pessoal é uma verdade comprovada.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Para não confundir uma avaliação pessoal com uma verdade comprovada”. Você já sabe pesar as informações como um verdadeiro detetive. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: pesando fatos e opiniões em casa",
    materiais: ["Uma notícia de jornal, revista ou site", "Papel e lápis"],
    passos: [
      "1) Escolham juntos uma notícia curta em casa (impressa ou no celular).",
      "2) A criança sublinha (ou anota) uma frase que seja um FATO.",
      "3) Depois, ela encontra uma frase que seja uma OPINIÃO (de algum entrevistado ou comentarista).",
      "4) Conversem: como foi possível diferenciar as duas?",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'O fato que encontrei foi ___ e a opinião foi ___.'",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "Balança de Bronze",
  },
};
