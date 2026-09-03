import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";

/**
 * Aula 4 — Resumo do Explorador
 * -------------------------------------------------------------
 * Encerramento da Unidade 1 (Mapa da Leitura). A missão: aprender a
 * resumir um texto sem copiar frases inteiras — selecionando as ideias
 * principais e recontando com palavras próprias, em tamanho proporcional
 * ao texto original (nem grande demais, nem curto demais).
 *
 * Foco pedagógico: resumo como seleção + reformulação, não cópia.
 *
 * BNCC: EF35LP04, EF04LP11
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-resumo-do-explorador",
  titulo: "Resumo do Explorador",
  iconeTrilha: "📜",
  bncc: ["EF35LP03", "EF35LP04", "EF15LP03"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O diário compacto",
    historia:
      "Brilha tirou da mochila um caderninho bem fino. — Depois de cada expedição, eu escrevo só o essencial num caderno pequeno: não copio o relatório inteiro, guardo as ideias mais importantes com minhas próprias palavras. Isso se chama RESUMIR. Um bom resumo é como fazer as malas para uma viagem curta: você não leva tudo, escolhe o que realmente importa e organiza do seu jeito. Hoje você vai aprender a resumir como um verdadeiro explorador!",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Observe o caderno de campo cheio de anotações. O que Brilha vai precisar fazer com elas?",
    bloco: {
      titulo: "O Caderno de Campo Lotado",
      capaImagemUrl: mochila,
      pistas: [
        { imagemUrl: livros, nome: "Páginas cheias de anotações longas" },
        { imagemUrl: mapa, nome: "Um mapa marcado com muitos detalhes" },
      ],
      recado: {
        rotulo: "Anotação de Brilha",
        icone: "📓",
        linhas: [
          "Escrevi cinco páginas sobre a trilha das cavernas.",
          "Preciso contar tudo pra equipe em só 3 frases.",
          "Vou escolher apenas o que é mais importante.",
        ],
        estilo: "papel",
      },
      pergunta: "O que Brilha precisa fazer para contar tudo em poucas frases?",
      hipoteses: [
        { texto: "Escolher as ideias mais importantes e contar com suas próprias palavras" },
        { texto: "Copiar as cinco páginas exatamente como estão, sem mudar nada" },
        { texto: "Inventar fatos novos que não estavam nas anotações" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "📜 Isso mesmo! Resumir é selecionar as ideias principais e recontar com suas próprias palavras — sem copiar tudo e sem inventar nada de novo.",
      feedbackErro:
        "Pense: se Brilha só tem 3 frases, ele não pode copiar cinco páginas inteiras. Ele precisa escolher o que é mais importante e recontar do seu jeito.",
      dica: "🧭 Pista de explorador: lembre o que significa “resumo” — é um texto curto que conta só as ideias mais importantes de um texto maior. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras que todo bom resumidor de textos precisa conhecer.",
    cards: [
      {
        palavra: "resumo",
        explicacao: "É um texto curto que conta só as ideias mais importantes de um texto maior.",
        exemplo: "O resumo do livro tinha só um parágrafo, mas contava a história toda.",
        imagemUrl: livro,
      },
      {
        palavra: "selecionar",
        explicacao: "É escolher o que é mais importante e deixar de fora o que é só detalhe.",
        exemplo: "Para resumir, é preciso selecionar as ideias principais do texto.",
        imagemUrl: bussola,
      },
      {
        palavra: "reformular",
        explicacao: "É dizer a mesma ideia usando palavras diferentes das do texto original.",
        exemplo: "Em vez de copiar a frase, ele reformulou a ideia com suas próprias palavras.",
        imagemUrl: mapa,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Selecionando e reformulando para resumir",
    instrucao:
      "Veja como transformar um texto grande em um resumo curto, sem copiar frase por frase.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Resumo: selecionar o que importa",
        explicacao:
          "Resumir é escolher (selecionar) apenas as ideias mais importantes de um texto e deixar de fora os detalhes menores. Um bom resumo é bem menor que o texto original, mas ainda permite entender do que se trata. Ele NÃO copia frases inteiras — conta a mesma informação com outras palavras.",
        exemplos: [
          {
            palavra: "Texto original de 5 linhas sobre uma trilha até uma caverna.",
            destaque: "5 linhas → 1 frase",
            motivo:
              "O resumo escolhe só o fato principal: 'A equipe encontrou pinturas antigas numa caverna'.",
          },
          {
            palavra: "Relatório completo com data, hora, nomes e clima do dia.",
            destaque: "data, hora, clima",
            motivo: "São detalhes que, no resumo, geralmente ficam de fora.",
          },
          {
            palavra: "Notícia de um jornal sobre uma nova ponte.",
            destaque: "resumo: 'Uma nova ponte foi construída na cidade'",
            motivo: "O resumo mantém só o fato central, sem todos os detalhes da obra.",
          },
        ],
        desafios: [
          {
            molde:
              "Texto: 'Ontem, às 15h, sob sol forte, a turma do 4º ano visitou o museu de história e viu fósseis, moedas antigas e um esqueleto de dinossauro.' Melhor resumo: _",
            opcoes: [
              "A turma do 4º ano visitou o museu de história",
              "Ontem, às 15h, sob sol forte, a turma visitou o museu",
              "Um esqueleto de dinossauro estava no museu",
            ],
            correta: 0,
            frase:
              "Ontem, às 15h, sob sol forte, a turma do 4º ano visitou o museu de história e viu fósseis, moedas antigas e um esqueleto de dinossauro.",
            feedbackErro:
              "Horário e clima são detalhes; o resumo deve trazer só o fato central: a visita ao museu.",
          },
          {
            molde:
              "Texto: 'A equipe de exploradores acampou perto do rio, cozinhou peixe e contou histórias à luz da fogueira antes de dormir.' Melhor resumo: _",
            opcoes: [
              "A equipe acampou perto do rio e passou a noite ali",
              "A equipe cozinhou peixe à luz da fogueira",
              "A equipe contou histórias antes de dormir",
            ],
            correta: 0,
            frase:
              "A equipe de exploradores acampou perto do rio, cozinhou peixe e contou histórias à luz da fogueira antes de dormir.",
            feedbackErro:
              "Cozinhar e contar histórias são detalhes do acampamento; o fato central é que acamparam perto do rio.",
          },
          {
            molde: "Qual destas opções é um RESUMO, e não uma cópia do texto? _",
            opcoes: [
              "Contar a mesma ideia com outras palavras, de forma mais curta",
              "Copiar as frases exatamente como estão no texto",
              "Inventar fatos novos que não estavam no texto",
            ],
            correta: 0,
            feedbackErro:
              "Resumo é reformular com suas próprias palavras — nunca copiar nem inventar.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "Reformular: contar com outras palavras",
        explicacao:
          "Reformular é dizer a mesma ideia usando palavras diferentes das do texto original. É o que separa um RESUMO de verdade de uma simples cópia. Para reformular bem: leia o trecho, feche o livro (ou vire a folha) e tente contar o que entendeu com suas próprias palavras.",
        exemplos: [
          {
            palavra: "Original: 'O menino correu apressadamente até a escola.'",
            destaque: "correu apressadamente",
            motivo:
              "Reformulado: 'O menino foi correndo para a escola' — mesma ideia, palavras diferentes.",
          },
          {
            palavra: "Original: 'A chuva forte impediu a realização do passeio.'",
            destaque: "impediu a realização",
            motivo: "Reformulado: 'Não deu para passear por causa da chuva forte'.",
          },
          {
            palavra: "Original: 'Os exploradores descobriram vestígios de uma civilização antiga.'",
            destaque: "descobriram vestígios",
            motivo: "Reformulado: 'Os exploradores acharam sinais de um povo muito antigo'.",
          },
        ],
        desafios: [
          {
            molde:
              "Qual frase REFORMULA 'A menina ficou muito feliz com o presente' sem copiar as mesmas palavras? _",
            opcoes: [
              "A menina adorou o presente que ganhou",
              "A menina ficou muito feliz com o presente",
              "A menina ganhou um presente muito feliz",
            ],
            correta: 0,
            frase: "A menina ficou muito feliz com o presente.",
            feedbackErro:
              "Reformular é usar outras palavras para a mesma ideia, sem repetir a frase original.",
          },
          {
            molde: "Qual frase REFORMULA 'O cão latiu bastante durante a noite'? _",
            opcoes: [
              "O cachorro passou a noite latindo bastante",
              "O cão latiu bastante durante a noite",
              "A noite estava calma e sem barulho",
            ],
            correta: 0,
            frase: "O cão latiu bastante durante a noite.",
            feedbackErro:
              "A opção certa mantém o sentido, trocando palavras. A última opção muda o sentido, não reformula.",
          },
          {
            molde: "Qual é a diferença entre COPIAR e REFORMULAR? _",
            opcoes: [
              "Reformular usa outras palavras; copiar repete o texto original",
              "São exatamente a mesma coisa",
              "Reformular é sempre maior que o texto original",
            ],
            correta: 0,
            feedbackErro:
              "Copiar mantém as mesmas palavras do texto; reformular conta a mesma ideia de outro jeito.",
          },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao:
      "Leia o relato completo. Depois, você vai aprender a transformá-lo num resumo curto.",
    leitura: {
      titulo: "A Travessia da Caverna de Cristal",
      imagemUrl: mapa,
      legendaImagem: "Entrada da Caverna de Cristal",
      destacar: ["três horas", "cristais", "lanterna"],
      paragrafos: [
        "A equipe de exploradores entrou na Caverna de Cristal logo pela manhã, levando lanternas, cordas e um mapa antigo desenhado por exploradores que passaram por ali décadas atrás. O caminho era estreito e escorregadio nos primeiros metros.",
        "Depois de caminhar por quase três horas em corredores apertados, eles chegaram a uma sala enorme, coberta de cristais que brilhavam com a luz das lanternas. Todos pararam, admirados com o brilho das paredes.",
        "Na saída, encontraram um pequeno rio subterrâneo que precisaram atravessar sobre pedras. Cansados, mas felizes, voltaram à superfície ao entardecer, levando fotos e anotações da descoberta.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar a resposta.",
    perguntas: [
      {
        pergunta: "Quanto tempo a equipe caminhou até chegar à sala de cristais?",
        opcoes: ["Cerca de três horas", "Cerca de dez minutos", "Um dia inteiro"],
        correta: 0,
        feedbackAcerto:
          "📜 Isso! O texto diz: 'Depois de caminhar por quase três horas em corredores apertados'.",
        feedbackErro:
          "Releia o segundo parágrafo — o tempo de caminhada aparece logo no início dele.",
        ondeEstaNoTexto: "Depois de caminhar por quase três horas em corredores apertados...",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Depois de caminhar por quase três horas em corredores apertados”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Cerca de três horas”. O texto diz: 'Depois de caminhar por quase três horas em corredores apertados'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que a equipe encontrou na saída da caverna?",
        opcoes: ["Um pequeno rio subterrâneo", "Outra sala de cristais", "Uma segunda entrada"],
        correta: 0,
        feedbackAcerto:
          "📜 Exato! 'Na saída, encontraram um pequeno rio subterrâneo que precisaram atravessar.'",
        feedbackErro: "A resposta está no início do terceiro parágrafo.",
        ondeEstaNoTexto:
          "Na saída, encontraram um pequeno rio subterrâneo que precisaram atravessar sobre pedras.",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Na saída, encontraram um pequeno rio subterrâneo que precisaram atravessar sobre pedras”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um pequeno rio subterrâneo”. 'Na saída, encontraram um pequeno rio subterrâneo que precisaram atravessar.'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao:
      "Agora pense: se você tivesse só UMA frase para contar essa história, o que não poderia faltar?",
    perguntas: [
      {
        pergunta: "Qual dessas opções é o MELHOR resumo do relato, em uma frase?",
        opcoes: [
          "Uma equipe explorou uma caverna cheia de cristais por três horas e voltou atravessando um rio subterrâneo",
          "A equipe levava lanternas, cordas e um mapa antigo desenhado décadas atrás por outros exploradores",
          "O caminho era estreito e escorregadio nos primeiros metros da entrada da caverna",
        ],
        correta: 0,
        feedbackAcerto:
          "📜 Isso mesmo! Essa frase junta a ideia principal de cada parte da história: a exploração, os cristais e a volta pelo rio — sem copiar detalhes soltos.",
        feedbackErro:
          "As outras opções são apenas DETALHES de uma parte do texto. Um bom resumo precisa juntar a ideia central de TODAS as partes da história.",
        dica: "🧭 Pista de explorador: lembre o que significa “resumo” — é um texto curto que conta só as ideias mais importantes de um texto maior. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Uma equipe explorou uma caverna cheia de cristais por três horas e voltou atravessando um rio subterrâneo”. Essa frase junta a ideia principal de cada parte da história: a exploração, os cristais e a volta pelo rio — sem copiar detalhes soltos. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Por que copiar uma frase inteira do texto NÃO é a mesma coisa que resumir?",
        opcoes: [
          "Porque copiar é sempre proibido em qualquer situação",
          "Porque resumir exige escolher as ideias principais e recontar com palavras próprias, não só copiar um trecho",
          "Porque copiar frases deixa o texto maior do que o original",
        ],
        correta: 1,
        feedbackAcerto:
          "📜 Muito bem! Resumir é um trabalho de seleção e reformulação — não basta pegar um pedaço pronto do texto, é preciso pensar e recontar com suas próprias palavras.",
        feedbackErro:
          "Copiar uma frase mostra só UMA parte do texto e não usa suas próprias palavras. Resumir é diferente: exige escolher e reformular.",
        dica: "🧭 Pista de explorador: lembre o que significa “resumo” — é um texto curto que conta só as ideias mais importantes de um texto maior. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque resumir exige escolher as ideias principais e recontar com palavras próprias, não só copiar um trecho”. Muito bem! Resumir é um trabalho de seleção e reformulação — não basta pegar um pedaço pronto do texto, é preciso pensar e recontar com suas próprias palavras. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as etapas de como se constrói um bom resumo, da primeira à última.",
    bloco: {
      instrucao: "Da primeira etapa até a última do processo de resumir.",
      itens: [
        { id: "p1", texto: "Ler o texto todo com atenção, do início ao fim.", imagemUrl: livro },
        {
          id: "p2",
          texto: "Selecionar apenas as ideias mais importantes de cada parte.",
          imagemUrl: bussola,
        },
        {
          id: "p3",
          texto: "Reescrever essas ideias com as próprias palavras, em tamanho curto.",
          imagemUrl: mapa,
        },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto:
        "📜 Perfeito! Você seguiu as três etapas de um resumo bem feito: ler, selecionar e reformular.",
      feedbackErro:
        "Pense: primeiro é preciso ler tudo, depois escolher o mais importante, e só então reescrever com suas palavras.",
      dica: "🧭 Pista de explorador: lembre o que significa “resumo” — é um texto curto que conta só as ideias mais importantes de um texto maior. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao:
      "Novo relato! Leia sozinho e pense em como você resumiria essa história em poucas frases.",
    leitura: {
      titulo: "A Ilha dos Pássaros Raros",
      imagemUrl: mapa,
      destacar: ["duas espécies novas", "quatro dias", "fotografias"],
      paragrafos: [
        "Uma equipe de cientistas passou quatro dias numa pequena ilha, estudando o comportamento de pássaros que só existem naquele lugar. Eles anotavam horários de canto, cores de penas e formatos de ninho.",
        "No terceiro dia, encontraram duas espécies novas que nunca haviam sido registradas por nenhum outro pesquisador antes. Ficaram muito animados e tiraram centenas de fotografias.",
        "Ao voltar para o continente, organizaram um relatório com as descobertas para compartilhar com outros cientistas ao redor do mundo, que ficaram interessados em visitar a ilha também.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual das opções resume melhor esse relato, sem copiar frases inteiras do texto?",
        opcoes: [
          "Cientistas passaram quatro dias numa ilha e descobriram duas novas espécies de pássaros, que depois relataram ao mundo",
          "Eles anotavam horários de canto, cores de penas e formatos de ninho durante a pesquisa",
          "Ao voltar para o continente, organizaram um relatório com as descobertas para compartilhar",
        ],
        correta: 0,
        feedbackAcerto:
          "📜 Isso! Essa frase junta as três partes principais da história — a pesquisa, a descoberta e o relato — usando palavras próprias, sem copiar um trecho específico.",
        feedbackErro:
          "As outras opções copiam só um trecho do texto e falam de apenas uma parte da história. Um bom resumo junta as ideias principais de TODO o texto.",
        ondeEstaNoTexto:
          "Uma equipe de cientistas passou quatro dias... encontraram duas espécies novas... organizaram um relatório com as descobertas.",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Uma equipe de cientistas passou quatro dias... encontraram duas espécies novas... organizaram um relatório com as descobertas”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Cientistas passaram quatro dias numa ilha e descobriram duas novas espécies de pássaros, que depois relataram ao mundo”. Essa frase junta as três partes principais da história — a pesquisa, a descoberta e o relato — usando palavras próprias, sem copiar um trecho específico. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final (Fase 3 · 4º ano)
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Diário de Bordo do Explorador",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Resumo com suas próprias palavras",
        comando:
          "Pense em um filme, livro ou episódio que você gostou. Escreva um resumo de 4 a 6 linhas contando SÓ o essencial: quem, onde, qual foi o problema e como terminou. Nada de copiar frases prontas.",
        linhas: 6,
        modelo: [
          "A história acontece numa vila pequena, perto do mar.",
          "Uma menina descobre que os barcos estão sumindo toda madrugada.",
          "Ela decide vigiar o porto e encontra a explicação escondida na maré.",
          "No fim, a vila aprende a prender os barcos de um jeito novo.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Não repeti a mesma palavra várias vezes: troquei por pronome ou sinônimo.",
          "Usei pelo menos um conectivo (porque, então, mas, além disso) ligando as ideias.",
          "Li em voz alta e consertei o que ficou estranho.",
          "Meu resumo tem só o ESSENCIAL — cortei os detalhes pequenos.",
          "Escrevi com MINHAS palavras, sem copiar o texto original.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (Fase 4 · 4º ano · ~110 ppm)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: O Caderno do Explorador",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula, ponto e travessão. A meta não é correr: é ler como quem conta.",
    texto: [
      "Todo explorador carrega um caderno pequeno, com a capa gasta pelo uso e as páginas cheias de anotações rápidas.",
      "Nele não cabem histórias inteiras: cabe o essencial, aquilo que precisa ser lembrado quando a memória cansar.",
      "Por isso, resumir é uma arte — é escolher, entre tudo o que aconteceu, as poucas frases que seguram a história em pé.",
    ],
    metaSegundos: 32,
  },

  momento09_revisao: {
    pontos: [
      "RESUMIR é contar as ideias principais de um texto usando poucas palavras.",
      "Um bom resumo NÃO copia frases inteiras — ele usa palavras próprias para reformular as ideias.",
      "O tamanho do resumo deve ser proporcional ao texto original: nem grande demais, nem curto demais.",
      "Para resumir bem: primeiro leia tudo, depois selecione o mais importante, e só então reescreva com suas palavras.",
    ],
    miniDesafio: {
      pergunta: "Qual dessas frases é um exemplo de resumo, e não de cópia de um trecho do texto?",
      opcoes: [
        "Uma frase reformulada com as próprias palavras, juntando as ideias principais",
        "Uma frase copiada exatamente igual a um parágrafo do texto original",
        "Um trecho bem pequeno, mas idêntico ao texto original",
      ],
      correta: 0,
      feedbackAcerto:
        "📜 Isso! Resumir é reformular com suas próprias palavras, juntando o essencial — nunca copiar um trecho pronto.",
      feedbackErro:
        "Copiar um trecho, mesmo pequeno, não é resumir. Resumir exige reformulação com palavras próprias.",
      dica: "🧭 Pista de explorador: lembre o que significa “resumo” — é um texto curto que conta só as ideias mais importantes de um texto maior. Use essa ideia para eliminar as alternativas que não combinam.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “Uma frase reformulada com as próprias palavras, juntando as ideias principais”. Resumir é reformular com suas próprias palavras, juntando o essencial — nunca copiar um trecho pronto. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um resumo?",
        opcoes: [
          "Uma cópia exata de um parágrafo do texto",
          "Um texto curto com as ideias mais importantes, escrito com palavras próprias",
          "Um texto maior do que o original, cheio de detalhes",
          "Cerca de dez minutos",
        ],
        correta: 1,
        feedbackAcerto:
          "📜 Isso! Resumo é síntese com palavras próprias, não cópia nem ampliação do texto.",
        feedbackErro:
          "Um resumo é sempre mais curto e feito com palavras próprias — nunca uma cópia ou um texto maior.",
        feedbackOpcoes: [
          "❌ “Uma cópia exata de um parágrafo do texto” não é a resposta. Um resumo é sempre mais curto e feito com palavras próprias — nunca uma cópia ou um texto maior.",
          null,
          "❌ “Um texto maior do que o original, cheio de detalhes” não é a resposta. Um resumo é sempre mais curto e feito com palavras próprias — nunca uma cópia ou um texto maior.",
          "❌ “Cerca de dez minutos” não é a resposta. Um resumo é sempre mais curto e feito com palavras próprias — nunca uma cópia ou um texto maior.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “resumo” — é um texto curto que conta só as ideias mais importantes de um texto maior. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um texto curto com as ideias mais importantes, escrito com palavras próprias”. Resumo é síntese com palavras próprias, não cópia nem ampliação do texto. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — Por que não devemos copiar frases inteiras ao resumir?",
        opcoes: [
          "Porque copiar é mais rápido de fazer",
          "Porque resumir exige entender o texto e recontar com as próprias palavras",
          "Porque frases copiadas ficam sempre erradas",
          "Um dia inteiro",
        ],
        correta: 1,
        feedbackAcerto:
          "📜 Exatamente! Resumir mostra que você entendeu o texto — copiar não prova isso.",
        feedbackErro:
          "Copiar não mostra que você compreendeu o texto. Resumir exige pensar e reformular com suas palavras.",
        feedbackOpcoes: [
          "❌ “Porque copiar é mais rápido de fazer” não é a resposta. Copiar não mostra que você compreendeu o texto. Resumir exige pensar e reformular com suas palavras.",
          null,
          "❌ “Porque frases copiadas ficam sempre erradas” não é a resposta. Copiar não mostra que você compreendeu o texto. Resumir exige pensar e reformular com suas palavras.",
          "❌ “Um dia inteiro” não é a resposta. Copiar não mostra que você compreendeu o texto. Resumir exige pensar e reformular com suas palavras.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “resumo” — é um texto curto que conta só as ideias mais importantes de um texto maior. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque resumir exige entender o texto e recontar com as próprias palavras”. Resumir mostra que você entendeu o texto — copiar não prova isso. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — Qual é a primeira etapa para fazer um bom resumo?",
        opcoes: [
          "Reescrever com palavras próprias",
          "Ler o texto todo com atenção",
          "Escolher a menor frase do texto",
          "Outra sala de cristais",
        ],
        correta: 1,
        feedbackAcerto:
          "📜 Isso! Antes de selecionar ou reformular, é preciso ler o texto todo com atenção.",
        feedbackErro:
          "Sem ler o texto inteiro primeiro, fica impossível saber quais são as ideias mais importantes.",
        feedbackOpcoes: [
          "❌ “Reescrever com palavras próprias” não é a resposta. Sem ler o texto inteiro primeiro, fica impossível saber quais são as ideias mais importantes.",
          null,
          "❌ “Escolher a menor frase do texto” não é a resposta. Sem ler o texto inteiro primeiro, fica impossível saber quais são as ideias mais importantes.",
          "❌ “Outra sala de cristais” não é a resposta. Sem ler o texto inteiro primeiro, fica impossível saber quais são as ideias mais importantes.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “resumo” — é um texto curto que conta só as ideias mais importantes de um texto maior. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Ler o texto todo com atenção”. Antes de selecionar ou reformular, é preciso ler o texto todo com atenção. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "4/5 — Como deve ser o tamanho de um bom resumo?",
        opcoes: [
          "Sempre do mesmo tamanho do texto original",
          "Proporcional ao texto original: bem menor, mas mantendo o essencial",
          "O maior possível, com todos os detalhes",
          "Uma segunda entrada",
        ],
        correta: 1,
        feedbackAcerto:
          "📜 Muito bem! O resumo precisa ser proporcional: menor que o original, mas sem perder as ideias principais.",
        feedbackErro:
          "Um resumo muito longo ou igual ao original deixa de ser resumo. Ele precisa ser bem menor, mas com o essencial.",
        feedbackOpcoes: [
          "❌ “Sempre do mesmo tamanho do texto original” não é a resposta. Um resumo muito longo ou igual ao original deixa de ser resumo. Ele precisa ser bem menor, mas com o essencial.",
          null,
          "❌ “O maior possível, com todos os detalhes” não é a resposta. Um resumo muito longo ou igual ao original deixa de ser resumo. Ele precisa ser bem menor, mas com o essencial.",
          "❌ “Uma segunda entrada” não é a resposta. Um resumo muito longo ou igual ao original deixa de ser resumo. Ele precisa ser bem menor, mas com o essencial.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “resumo” — é um texto curto que conta só as ideias mais importantes de um texto maior. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Proporcional ao texto original: bem menor, mas mantendo o essencial”. Muito bem! O resumo precisa ser proporcional: menor que o original, mas sem perder as ideias principais. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta:
          "5/5 — Na história da Ilha dos Pássaros, qual seria a ideia principal para um resumo?",
        opcoes: [
          "Os horários exatos de canto dos pássaros durante os quatro dias",
          "A descoberta de duas novas espécies de pássaros durante a pesquisa",
          "O formato dos ninhos observados no segundo dia",
          "A equipe levava lanternas, cordas e um mapa antigo desenhado décadas atrás por outros exploradores",
        ],
        correta: 1,
        feedbackAcerto:
          "📜 Isso! Você já sabe separar a ideia principal dos detalhes — parabéns, explorador da leitura! 🌟",
        feedbackErro:
          "Os horários e formatos de ninho são detalhes. A ideia principal da história é a descoberta das novas espécies.",
        feedbackOpcoes: [
          "❌ “Os horários exatos de canto dos pássaros durante os quatro dias” não é a resposta. Os horários e formatos de ninho são detalhes. A ideia principal da história é a descoberta das novas espécies.",
          null,
          "❌ “O formato dos ninhos observados no segundo dia” não é a resposta. Os horários e formatos de ninho são detalhes. A ideia principal da história é a descoberta das novas espécies.",
          "❌ “A equipe levava lanternas, cordas e um mapa antigo desenhado décadas atrás por outros exploradores” não é a resposta. Os horários e formatos de ninho são detalhes. A ideia principal da história é a descoberta das novas espécies.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “resumo” — é um texto curto que conta só as ideias mais importantes de um texto maior. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A descoberta de duas novas espécies de pássaros durante a pesquisa”. Você já sabe separar a ideia principal dos detalhes — parabéns, explorador da leitura! 🌟. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: o resumo em família",
    materiais: ["Papel e lápis", "Um livro, filme ou desenho conhecido pela família"],
    passos: [
      "1) Escolha com a família um livro, filme ou desenho que todos conheçam bem.",
      "2) A criança conta a história em voz alta, mas usando só 3 a 5 frases — sem detalhes desnecessários.",
      "3) Um adulto ajuda: 'Isso é uma ideia principal ou só um detalhe?'.",
      "4) Escrevam juntos o resumo final e leiam em voz alta para ver se ficou claro mesmo sendo curto.",
    ],
    registro: "🗣️ Registre por escrito ou em áudio o resumo criado pela criança, em até 5 frases.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
    medalha: "Bússola do Leitor",
  },
};
