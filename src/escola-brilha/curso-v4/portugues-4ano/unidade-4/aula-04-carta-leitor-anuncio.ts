import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as praca } from "@/assets/neuro-treino/objetos/praca.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as lixeiraReciclagem } from "@/assets/neuro-treino/objetos/lixeira-reciclagem.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";

/**
 * Aula 4 — "A Praça que Precisa de Voz" (aula final da Unidade 4)
 * -------------------------------------------------------------
 * Missão final do Território dos Textos: a praça do bairro está
 * abandonada. O time de exploradores precisa usar textos que
 * CONVENCEM — carta de leitor e anúncio — para mobilizar a
 * comunidade a agir.
 *
 * Foco pedagógico:
 *  - Reconhecer a carta de leitor como texto de opinião que argumenta
 *    para um jornal, pensando no público-alvo (leitores e prefeitura).
 *  - Reconhecer o anúncio como texto persuasivo e direto, com
 *    chamada, informação prática e apelo à ação.
 *  - Perceber a diferença entre ARGUMENTO (razão que sustenta a
 *    opinião) e simples opinião solta.
 *
 * BNCC: EF35LP17, EF04LP17
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-carta-leitor-anuncio",
  titulo: "A Praça que Precisa de Voz",
  iconeTrilha: "📣",
  bncc: ["EF35LP17", "EF04LP17"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "A missão final do Território dos Textos",
    historia:
      "Brilha parou diante da praça do bairro: bancos quebrados, mato alto, lixo espalhado. — Aqui, palavras bonitas não bastam: precisamos CONVENCER as pessoas a agir! Vamos escrever uma CARTA DE LEITOR para o jornal, pedindo a reforma, e um ANÚNCIO convidando os moradores para um mutirão de limpeza. Esta é a missão final: usar a palavra para mudar um lugar de verdade.",
    imagemUrl: praca,
  },

  momento02_previsao: {
    instrucao:
      "Observe o mural da missão final. O que ele revela sobre os textos que vamos escrever?",
    bloco: {
      titulo: "Missão: dar voz à praça",
      capaImagemUrl: mural,
      pistas: [
        { imagemUrl: praca, nome: "Praça abandonada" },
        { imagemUrl: criancasGrupo, nome: "Moradores" },
      ],
      recado: {
        rotulo: "Mural da missão",
        icone: "📢",
        linhas: [
          "TEXTO 1: carta de leitor — pedir a reforma ao jornal",
          "TEXTO 2: anúncio — convidar para o mutirão",
        ],
        estilo: "cartaz",
      },
      pergunta: "Esses dois textos têm em comum a intenção de...",
      hipoteses: [
        { texto: "Convencer alguém a pensar ou agir de um jeito.", imagemUrl: mural },
        { texto: "Contar uma fábula com animais falantes.", imagemUrl: papel },
        { texto: "Explicar como funciona a chuva.", imagemUrl: parque },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "📣 Isso! Carta de leitor e anúncio são textos que querem CONVENCER — um pede uma mudança, o outro convida para uma ação.",
      feedbackErro:
        "Releia o mural: um texto PEDE reforma, o outro CONVIDA para um mutirão. Os dois querem convencer alguém a agir.",
      dica: "🧭 Pista de explorador: lembre o que significa “carta de leitor” — é um texto de opinião enviado por um leitor a um jornal ou revista, defendendo um ponto de vista sobre um assunto público, com argumentos. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Textos que convencem usam palavras próprias. Conheça 3 delas.",
    cards: [
      {
        palavra: "carta de leitor",
        explicacao:
          "É um texto de opinião enviado por um leitor a um jornal ou revista, defendendo um ponto de vista sobre um assunto público, com argumentos.",
        exemplo: "Na carta de leitor, a moradora pediu a reforma da praça, explicando os motivos.",
        imagemUrl: papel,
      },
      {
        palavra: "argumento",
        explicacao:
          "É a razão, o motivo que sustenta uma opinião e ajuda a convencer o leitor. Diferente de só dizer 'eu acho', o argumento EXPLICA por quê.",
        exemplo:
          "Argumento: 'A praça precisa de reforma porque as crianças não têm onde brincar em segurança.'",
        imagemUrl: parque,
      },
      {
        palavra: "público-alvo",
        explicacao:
          "É o grupo de pessoas para quem o texto é escrito. Pensar no público-alvo ajuda a escolher as palavras e os argumentos certos.",
        exemplo: "O público-alvo do anúncio do mutirão são os moradores do bairro.",
        imagemUrl: criancasGrupo,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Carta de leitor e anúncio: textos que convencem",
    instrucao: "Veja como argumentos sustentam uma opinião na carta de leitor e como o anúncio convida à ação.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Carta de leitor e argumento",
        explicacao:
          "A carta de leitor é um texto de opinião enviado a um jornal, defendendo um ponto de vista sobre um assunto público, sempre com ARGUMENTOS — razões que explicam POR QUE o autor pensa assim. Só dizer 'eu acho' não é argumento; é preciso explicar o motivo.",
        exemplos: [
          { palavra: "'A praça precisa de reforma porque as crianças não têm onde brincar em segurança.'", destaque: "porque", motivo: "É um argumento: dá o motivo da opinião." },
          { palavra: "'Eu acho a praça feia.'", destaque: "eu acho", motivo: "É só opinião solta, sem argumento que a sustente." },
          { palavra: "'A reforma vai valorizar os imóveis da região.'", destaque: "vai valorizar", motivo: "Argumento que mostra um benefício concreto." },
        ],
        desafios: [
          {
            molde: "Qual frase é um ARGUMENTO, e não apenas opinião solta? _",
            opcoes: ["A praça precisa de reforma porque os bancos estão quebrados e há risco de acidentes", "Eu acho a praça horrível", "A praça é chata"],
            correta: 0,
            feedbackErro: "Argumento explica o PORQUÊ da opinião com um motivo concreto.",
          },
          {
            molde: "Uma carta de leitor deve ser enviada para: _",
            opcoes: ["Um jornal ou revista, defendendo um ponto de vista sobre um assunto público", "Um amigo, contando uma novidade pessoal", "Um personagem de ficção"],
            correta: 0,
            feedbackErro: "A carta de leitor tem como destino um veículo de comunicação, sobre um assunto de interesse público.",
          },
          {
            molde: "'A praça precisa de reforma.' Para virar argumento, essa frase precisa: _",
            opcoes: ["Ganhar um motivo, como 'porque as crianças não têm onde brincar'", "Ficar mais curta", "Virar uma pergunta"],
            correta: 0,
            frase: "A praça precisa de reforma.",
            feedbackErro: "Um argumento sempre traz o motivo que sustenta a opinião.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "Anúncio: chamada e apelo à ação",
        explicacao:
          "O anúncio é um texto persuasivo e direto, com uma CHAMADA que atrai atenção, informação prática (data, hora, local) e um APELO À AÇÃO, convidando o leitor a fazer algo — como participar de um mutirão.",
        exemplos: [
          { palavra: "'MUTIRÃO NESTE SÁBADO! Venha ajudar a limpar nossa praça.'", destaque: "chamada + apelo", motivo: "Chama atenção e convida a agir." },
          { palavra: "'Sábado, dia 12, às 9h, na Praça da Alegria.'", destaque: "data, hora, local", motivo: "Informação prática essencial de um anúncio." },
          { palavra: "'Traga sua luva e sua vontade de ajudar!'", destaque: "apelo à ação", motivo: "Convida diretamente o leitor a participar." },
        ],
        desafios: [
          {
            molde: "O que NÃO pode faltar num bom anúncio de mutirão? _",
            opcoes: ["Data, hora e local do evento", "Uma longa explicação científica", "Uma definição de dicionário"],
            correta: 0,
            feedbackErro: "Informação prática (quando e onde) é essencial para quem quiser participar.",
          },
          {
            molde: "Qual frase é um bom APELO À AÇÃO? _",
            opcoes: ["Venha ajudar no mutirão neste sábado!", "A praça foi construída em 1980.", "Nossa cidade tem 5 praças."],
            correta: 0,
            feedbackErro: "O apelo à ação convida o leitor a fazer algo, usando verbos como 'venha' e 'participe'.",
          },
          {
            molde: "A CHAMADA de um anúncio serve para: _",
            opcoes: ["Atrair a atenção do leitor logo de início", "Explicar detalhes técnicos do assunto", "Contar uma longa história"],
            correta: 0,
            feedbackErro: "A chamada é a primeira frase, forte e curta, que chama a atenção.",
          },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos a carta de leitor e o anúncio escritos pelo time de exploradores.",
    leitura: {
      titulo: "Carta de leitor: 'A praça precisa de nós'  •  Anúncio: Mutirão de Limpeza",
      imagemUrl: praca,
      legendaImagem: "A Praça das Flores, hoje abandonada, pode ser recuperada",
      destacar: ["porque", "venha", "sábado"],
      paragrafos: [
        "CARTA DE LEITOR — Prezado jornal, escrevo para chamar atenção à Praça das Flores, hoje abandonada. Ela precisa de reforma PORQUE é o único espaço de lazer gratuito do bairro, PORQUE crianças não têm onde brincar em segurança e PORQUE um espaço cuidado incentiva a comunidade a se cuidar também. Peço à prefeitura que inclua a praça no plano de obras deste ano.",
        "ANÚNCIO — MUTIRÃO DE LIMPEZA NA PRAÇA DAS FLORES! Venha com sua família no sábado, às 9h. Traga luvas e boa vontade — nós levamos as ferramentas. Juntos, vamos devolver a praça para as crianças do bairro!",
        "Repare: a carta de leitor usa ARGUMENTOS (as razões com 'porque') para convencer a prefeitura a agir. Já o anúncio é mais direto: uma chamada forte, informação prática (dia, hora, o que trazer) e um convite claro à ação.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Qual é o principal pedido feito na carta de leitor?",
        opcoes: [
          "Que a prefeitura inclua a praça no plano de obras",
          "Que o jornal pare de publicar cartas",
          "Que as crianças parem de brincar na praça",
        ],
        correta: 0,
        feedbackAcerto: "📣 Isso! O pedido final da carta é a inclusão da praça no PLANO DE OBRAS.",
        feedbackErro: "Releia a última frase da carta de leitor.",
        ondeEstaNoTexto: "Peço à prefeitura que inclua a praça no plano de obras deste ano.",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Peço à prefeitura que inclua a praça no plano de obras deste ano”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Que a prefeitura inclua a praça no plano de obras”. O pedido final da carta é a inclusão da praça no PLANO DE OBRAS. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Cite um ARGUMENTO (razão) dado na carta para justificar a reforma.",
        opcoes: [
          "Porque é o único espaço de lazer gratuito do bairro",
          "Porque a prefeita gosta de flores",
          "Porque está bonito nas fotos",
        ],
        correta: 0,
        feedbackAcerto:
          "📣 Correto! Esse é um dos argumentos: a praça é o único espaço de lazer gratuito do bairro.",
        feedbackErro: "Releia as frases que começam com 'PORQUE' — elas são os argumentos.",
        ondeEstaNoTexto: "…é o único espaço de lazer gratuito do bairro…",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “é o único espaço de lazer gratuito do bairro”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque é o único espaço de lazer gratuito do bairro”. Esse é um dos argumentos: a praça é o único espaço de lazer gratuito do bairro. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Que informações práticas o anúncio dá sobre o mutirão?",
        opcoes: [
          "Dia (sábado), horário (9h) e o que levar (luvas)",
          "Apenas o nome da praça",
          "O preço da entrada",
        ],
        correta: 0,
        feedbackAcerto:
          "📣 Isso! O anúncio dá DIA, HORÁRIO e o que TRAZER — informação prática e direta.",
        feedbackErro: "Releia o anúncio: ele é curto, mas cheio de informações práticas.",
        ondeEstaNoTexto: "Venha com sua família no sábado, às 9h. Traga luvas…",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Venha com sua família no sábado, às 9h. Traga luvas”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Dia (sábado), horário (9h) e o que levar (luvas)”. O anúncio dá DIA, HORÁRIO e o que TRAZER — informação prática e direta. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao:
      "Cada texto pensa em um PÚBLICO-ALVO diferente. Vamos identificar quem é convencido em cada um.",
    perguntas: [
      {
        pergunta: "Quem é o público-alvo principal da carta de leitor?",
        opcoes: [
          "A prefeitura e os leitores do jornal",
          "Só as crianças pequenas",
          "Só os jornalistas do bairro",
        ],
        correta: 0,
        feedbackAcerto:
          "📣 Isso! A carta é escrita para os LEITORES do jornal e, por meio deles, pressiona a PREFEITURA.",
        feedbackErro: "Pense em quem lê o jornal e em quem toma a decisão sobre obras públicas.",
        dica: "🧭 Pista de explorador: lembre o que significa “carta de leitor” — é um texto de opinião enviado por um leitor a um jornal ou revista, defendendo um ponto de vista sobre um assunto público, com argumentos. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A prefeitura e os leitores do jornal”. A carta é escrita para os LEITORES do jornal e, por meio deles, pressiona a PREFEITURA. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Quem é o público-alvo do anúncio do mutirão?",
        opcoes: [
          "Os moradores do bairro",
          "Só os funcionários da prefeitura",
          "Turistas de outra cidade",
        ],
        correta: 0,
        feedbackAcerto:
          "📣 Exato! O anúncio convida diretamente os MORADORES do bairro para participar.",
        feedbackErro:
          "Releia o anúncio: 'Venha com sua família' — para quem esse convite é dirigido?",
        dica: "🧭 Pista de explorador: lembre o que significa “público-alvo” — é o grupo de pessoas para quem o texto é escrito. Pensar no público-alvo ajuda a escolher as palavras e os argumentos certos. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Os moradores do bairro”. O anúncio convida diretamente os MORADORES do bairro para participar. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as etapas da mobilização da comunidade na ordem certa.",
    bloco: {
      instrucao: "Do problema até a ação da comunidade.",
      itens: [
        {
          id: "s1",
          texto: "A praça fica abandonada, com bancos quebrados e mato alto.",
          imagemUrl: praca,
        },
        {
          id: "s2",
          texto: "A carta de leitor é publicada, pedindo reforma com argumentos.",
          imagemUrl: papel,
        },
        {
          id: "s3",
          texto: "O anúncio convoca os moradores para o mutirão de limpeza no sábado.",
          imagemUrl: criancasGrupo,
        },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto:
        "📣 Isso mesmo! Primeiro o PROBLEMA, depois o PEDIDO com argumentos, e por fim o CONVITE à ação.",
      feedbackErro:
        "Pense na ordem real: primeiro existe o problema (praça abandonada), depois se PEDE a mudança, e só então se CONVOCA a ação.",
      dica: "🧭 Pista de explorador: lembre o que significa “carta de leitor” — é um texto de opinião enviado por um leitor a um jornal ou revista, defendendo um ponto de vista sobre um assunto público, com argumentos. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho este outro anúncio e responda.",
    leitura: {
      titulo: "Anúncio: Coleta de Recicláveis do Bairro",
      imagemUrl: lixeiraReciclagem,
      destacar: ["toda quarta-feira", "papel, plástico e vidro"],
      paragrafos: [
        "SEPARE E RECICLE! Toda quarta-feira, das 8h às 11h, o caminhão de coleta seletiva passa na sua rua. Separe papel, plástico e vidro em sacos diferentes. Um bairro mais limpo começa com você!",
      ],
    },
    perguntas: [
      {
        pergunta: "Quando o caminhão de coleta seletiva passa?",
        opcoes: ["Toda segunda-feira", "Toda quarta-feira, das 8h às 11h", "Só aos domingos"],
        correta: 1,
        feedbackAcerto: "📣 Isso! O anúncio informa: TODA QUARTA-FEIRA, das 8h às 11h.",
        feedbackErro: "Releia a informação de dia e horário logo no início do anúncio.",
        ondeEstaNoTexto: "Toda quarta-feira, das 8h às 11h…",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Toda quarta-feira, das 8h às 11h”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Toda quarta-feira, das 8h às 11h”. O anúncio informa: TODA QUARTA-FEIRA, das 8h às 11h. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual frase deste anúncio funciona como um apelo direto à ação do leitor?",
        opcoes: [
          "'Um bairro mais limpo começa com você!'",
          "'Toda quarta-feira'",
          "'Papel, plástico e vidro'",
        ],
        correta: 0,
        feedbackAcerto:
          "📣 Correto! Essa frase final convoca o leitor a agir, é o apelo à ação do anúncio.",
        feedbackErro: "Procure a frase que fala diretamente com 'você', chamando para a ação.",
        ondeEstaNoTexto: "Um bairro mais limpo começa com você!",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Um bairro mais limpo começa com você!”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “'Um bairro mais limpo começa com você!'”. Essa frase final convoca o leitor a agir, é o apelo à ação do anúncio. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
        titulo: "Carta que convence",
        comando:
          "Escreva uma carta de leitor pedindo uma melhoria no seu bairro. Comece dizendo qual é o problema, dê dois argumentos e termine com um pedido claro.",
        linhas: 7,
        modelo: [
          "Escrevo para falar da praça da minha rua, que está sem iluminação há meses.",
          "Sem luz, as famílias deixam de usar o espaço à noite e o lugar fica abandonado.",
          "Além disso, as crianças perdem o único ponto de encontro seguro do bairro.",
          "Peço que as lâmpadas sejam trocadas ainda neste mês.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Não repeti a mesma palavra várias vezes: troquei por pronome ou sinônimo.",
          "Usei pelo menos um conectivo (porque, então, mas, além disso) ligando as ideias.",
          "Li em voz alta e consertei o que ficou estranho.",
          "Meu texto tem problema, argumentos e pedido claro.",
          "Pensei em quem vai ler e escolhi palavras adequadas.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (Fase 4 · 4º ano · ~110 ppm)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: A Praça que Precisa de Voz",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula, ponto e travessão. A meta não é correr: é ler como quem conta.",
    texto: [
      "A praça continua ali, com os bancos tortos e o escorregador enferrujado, esperando alguém que fale por ela.",
      "Escrever uma carta de leitor é justamente isso: transformar uma reclamação de calçada em um argumento que chega a quem decide.",
      "Quem escreve bem não grita mais alto — apresenta o problema, mostra as consequências e faz um pedido tão claro que fica difícil ignorar.",
    ],
    metaSegundos: 34,
  },

  momento09_revisao: {
    pontos: [
      "CARTA DE LEITOR defende uma opinião com ARGUMENTOS, pensando no público-alvo (leitores e autoridades).",
      "ANÚNCIO é direto: tem chamada, informação prática e apelo à ação.",
      "ARGUMENTO é a razão que sustenta uma opinião — vai além de 'eu acho'.",
      "PÚBLICO-ALVO é para quem o texto foi escrito — pensar nele ajuda a escolher as palavras certas.",
    ],
    miniDesafio: {
      pergunta: "A razão que sustenta uma opinião e ajuda a convencer o leitor se chama…",
      opcoes: ["Legenda", "Argumento", "Manchete"],
      correta: 1,
      feedbackAcerto: "📣 Isso! É o ARGUMENTO — a razão que dá força à opinião.",
      feedbackErro: "Legenda explica imagem. A razão que sustenta uma opinião é o ARGUMENTO.",
      dica: "🧭 Pista de explorador: lembre o que significa “carta de leitor” — é um texto de opinião enviado por um leitor a um jornal ou revista, defendendo um ponto de vista sobre um assunto público, com argumentos. Use essa ideia para eliminar as alternativas que não combinam.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “Argumento”. É o ARGUMENTO — a razão que dá força à opinião. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual é o objetivo principal de uma carta de leitor?",
        opcoes: [
          "Defender uma opinião com argumentos sobre um assunto público",
          "Vender um produto",
          "Contar uma história de ficção",
          "Que o jornal pare de publicar cartas",
        ],
        correta: 0,
        feedbackAcerto:
          "📣 Isso! Ela defende uma OPINIÃO com ARGUMENTOS sobre algo de interesse público.",
        feedbackErro:
          "Carta de leitor não vende produto nem inventa história — ela DEFENDE uma opinião.",
        feedbackOpcoes: [
          null,
          "❌ “Vender um produto” não é a resposta. Carta de leitor não vende produto nem inventa história — ela DEFENDE uma opinião.",
          "❌ “Contar uma história de ficção” não é a resposta. Carta de leitor não vende produto nem inventa história — ela DEFENDE uma opinião.",
          "❌ “Que o jornal pare de publicar cartas” não é a resposta. Carta de leitor não vende produto nem inventa história — ela DEFENDE uma opinião.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “carta de leitor” — é um texto de opinião enviado por um leitor a um jornal ou revista, defendendo um ponto de vista sobre um assunto público, com argumentos. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Defender uma opinião com argumentos sobre um assunto público”. Ela defende uma OPINIÃO com ARGUMENTOS sobre algo de interesse público. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — Um bom anúncio geralmente tem...",
        opcoes: [
          "Chamada forte, informação prática e apelo à ação",
          "Apenas uma longa lista de argumentos",
          "Nenhuma informação sobre data ou lugar",
          "Que as crianças parem de brincar na praça",
        ],
        correta: 0,
        feedbackAcerto: "📣 Correto! Anúncio é direto: chama atenção, informa e convida à ação.",
        feedbackErro:
          "Pense no anúncio do mutirão: ele tinha chamada, dia, hora e convite — direto ao ponto.",
        feedbackOpcoes: [
          null,
          "❌ “Apenas uma longa lista de argumentos” não é a resposta. Pense no anúncio do mutirão: ele tinha chamada, dia, hora e convite — direto ao ponto.",
          "❌ “Nenhuma informação sobre data ou lugar” não é a resposta. Pense no anúncio do mutirão: ele tinha chamada, dia, hora e convite — direto ao ponto.",
          "❌ “Que as crianças parem de brincar na praça” não é a resposta. Pense no anúncio do mutirão: ele tinha chamada, dia, hora e convite — direto ao ponto.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “carta de leitor” — é um texto de opinião enviado por um leitor a um jornal ou revista, defendendo um ponto de vista sobre um assunto público, com argumentos. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Chamada forte, informação prática e apelo à ação”. Anúncio é direto: chama atenção, informa e convida à ação. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — Um ARGUMENTO é diferente de uma simples opinião porque...",
        opcoes: [
          "Ele explica o PORQUÊ da opinião, com uma razão",
          "Ele é sempre mais curto",
          "Ele nunca aparece em textos escritos",
          "Porque a prefeita gosta de flores",
        ],
        correta: 0,
        feedbackAcerto: "📣 Isso! O argumento traz o PORQUÊ, a razão que sustenta a opinião.",
        feedbackErro:
          "'Eu acho que sim' é opinião solta. 'Eu acho que sim PORQUE...' já é argumento.",
        feedbackOpcoes: [
          null,
          "❌ “Ele é sempre mais curto” não é a resposta. 'Eu acho que sim' é opinião solta. 'Eu acho que sim PORQUE...' já é argumento.",
          "❌ “Ele nunca aparece em textos escritos” não é a resposta. 'Eu acho que sim' é opinião solta. 'Eu acho que sim PORQUE...' já é argumento.",
          "❌ “Porque a prefeita gosta de flores” não é a resposta. 'Eu acho que sim' é opinião solta. 'Eu acho que sim PORQUE...' já é argumento.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “argumento” — é a razão, o motivo que sustenta uma opinião e ajuda a convencer o leitor. Diferente de só dizer 'eu acho', o argumento EXPLICA por quê. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Ele explica o PORQUÊ da opinião, com uma razão”. O argumento traz o PORQUÊ, a razão que sustenta a opinião. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "4/5 — Pensar no PÚBLICO-ALVO de um texto ajuda a...",
        opcoes: [
          "Escolher as palavras e argumentos certos para convencer aquele grupo",
          "Deixar o texto mais longo, sem motivo",
          "Escrever sem se importar com quem vai ler",
          "Porque está bonito nas fotos",
        ],
        correta: 0,
        feedbackAcerto:
          "📣 Muito bem! Pensar no público-alvo ajuda a escolher o tom e os argumentos certos.",
        feedbackErro:
          "Pense: escrever para a prefeitura é diferente de escrever para crianças — por isso o público-alvo importa.",
        feedbackOpcoes: [
          null,
          "❌ “Deixar o texto mais longo, sem motivo” não é a resposta. Pense: escrever para a prefeitura é diferente de escrever para crianças — por isso o público-alvo importa.",
          "❌ “Escrever sem se importar com quem vai ler” não é a resposta. Pense: escrever para a prefeitura é diferente de escrever para crianças — por isso o público-alvo importa.",
          "❌ “Porque está bonito nas fotos” não é a resposta. Pense: escrever para a prefeitura é diferente de escrever para crianças — por isso o público-alvo importa.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “público-alvo” — é o grupo de pessoas para quem o texto é escrito. Pensar no público-alvo ajuda a escolher as palavras e os argumentos certos. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Escolher as palavras e argumentos certos para convencer aquele grupo”. Muito bem! Pensar no público-alvo ajuda a escolher o tom e os argumentos certos. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "5/5 — Na missão da praça, o que a carta de leitor e o anúncio têm em comum?",
        opcoes: [
          "Os dois usam a palavra para convencer alguém a agir",
          "Os dois são só para diversão, sem intenção",
          "Os dois são exatamente o mesmo gênero de texto",
          "Apenas o nome da praça",
        ],
        correta: 0,
        feedbackAcerto:
          "📣 Isso! Ambos são textos que buscam CONVENCER — um pede mudança, o outro convoca ação.",
        feedbackErro:
          "São gêneros diferentes, mas os dois têm a mesma intenção: CONVENCER alguém a agir.",
        feedbackOpcoes: [
          null,
          "❌ “Os dois são só para diversão, sem intenção” não é a resposta. São gêneros diferentes, mas os dois têm a mesma intenção: CONVENCER alguém a agir.",
          "❌ “Os dois são exatamente o mesmo gênero de texto” não é a resposta. São gêneros diferentes, mas os dois têm a mesma intenção: CONVENCER alguém a agir.",
          "❌ “Apenas o nome da praça” não é a resposta. São gêneros diferentes, mas os dois têm a mesma intenção: CONVENCER alguém a agir.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “carta de leitor” — é um texto de opinião enviado por um leitor a um jornal ou revista, defendendo um ponto de vista sobre um assunto público, com argumentos. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Os dois usam a palavra para convencer alguém a agir”. Ambos são textos que buscam CONVENCER — um pede mudança, o outro convoca ação. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Sua voz pode mudar um lugar",
    materiais: ["Papel e lápis (ou celular para escrever/gravar)"],
    passos: [
      "1) Escolha algo do seu bairro, escola ou casa que precisa melhorar (uma rua, uma praça, uma regra de convivência).",
      "2) Escreva uma pequena carta de leitor com pelo menos DOIS argumentos (frases com 'porque') explicando por que a mudança é importante.",
      "3) Crie um anúncio curto convidando as pessoas a ajudar nessa mudança — com chamada, dia/hora (se fizer sentido) e um apelo direto à ação.",
      "4) Leia os dois textos para a família e pergunte: qual convenceu mais, e por quê?",
    ],
    registro:
      "📝 A carta de leitor e o anúncio escritos, para trazer na próxima aula — e o crachá de Repórter-Explorador!",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
    medalha: "Crachá do Repórter-Explorador",
  },
};
