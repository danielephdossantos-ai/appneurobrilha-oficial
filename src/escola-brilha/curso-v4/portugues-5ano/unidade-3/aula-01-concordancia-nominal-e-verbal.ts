import type { AulaPortuguesV4 } from "../../types";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as engrenagem } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";

/**
 * Aula 1 — Concordância nominal e verbal
 * -------------------------------------------------------------
 * Unidade 3 · A Engrenagem da Frase (5º ano)
 * Foco: fazer artigo, adjetivo e substantivo "combinarem" em gênero e
 * número, e fazer o verbo "combinar" com o sujeito.
 * BNCC: EF05LP05, EF05LP06
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-concordancia-nominal-e-verbal",
  titulo: "Concordância nominal e verbal",
  iconeTrilha: "⚙️",
  bncc: ["EF05LP06", "EF35LP07"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "As peças que precisam se encaixar",
    historia:
      "Brilha mostrou uma engrenagem enferrujada com peças de tamanhos diferentes travadas umas nas outras. — Olha só: se uma peça é grande e a outra é pequena, a engrenagem trava! Na frase acontece a mesma coisa. Se eu digo 'AS menina bonito', as peças não se encaixam. O certo é 'A menina bonita'. Hoje vamos aprender a encaixar as peças da frase para ela girar direitinho.",
    imagemUrl: engrenagem,
  },

  momento02_previsao: {
    instrucao: "Observe a engrenagem antes de começar.",
    bloco: {
      titulo: "A Engrenagem Emperrada",
      capaImagemUrl: engrenagem,
      pistas: [
        { imagemUrl: engrenagem, nome: "Uma engrenagem com peças de tamanhos diferentes" },
        { imagemUrl: robo, nome: "Um robô tentando consertar a máquina" },
      ],
      pergunta: "Sobre o que essa aula vai ensinar?",
      hipoteses: [
        { texto: "Como fazer as palavras da frase combinarem entre si (gênero, número e verbo).", imagemUrl: engrenagem },
        { texto: "Como consertar engrenagens de verdade.", imagemUrl: robo },
        { texto: "Como desenhar máquinas.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender a fazer as palavras da frase combinarem, como peças de uma engrenagem.",
      feedbackErro: "Pense na engrenagem emperrada: é sobre peças que precisam se encaixar. Assim são as palavras da frase.",
      dica: "⚙️ Pista: pense no que travava a engrenagem — peças de tamanhos diferentes. Na frase, isso vira palavras que não combinam entre si.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as peças da engrenagem antes de girá-la.",
    cards: [
      {
        palavra: "concordância nominal",
        explicacao: "É o encaixe entre o artigo, o substantivo e o adjetivo: todos precisam combinar em gênero (masculino/feminino) e número (singular/plural).",
        exemplo: "AS casas amarelas (todos no feminino plural), O carro azul (todos no masculino singular).",
        imagemUrl: caixa,
      },
      {
        palavra: "concordância verbal",
        explicacao: "É o encaixe entre o sujeito e o verbo: o verbo muda de forma para combinar com quem pratica a ação.",
        exemplo: "EU corro, ELES correm — o verbo CORRER muda conforme o sujeito.",
        imagemUrl: engrenagem,
      },
      {
        palavra: "gênero",
        explicacao: "Classificação da palavra em masculino ou feminino, que precisa ser igual entre artigo, substantivo e adjetivo.",
        exemplo: "UM menino esperto (masculino) / UMA menina esperta (feminino).",
        imagemUrl: criancas,
      },
      {
        palavra: "número",
        explicacao: "Classificação da palavra em singular (um) ou plural (mais de um), que também precisa combinar entre as palavras da frase.",
        exemplo: "O livro novo (singular) / OS livros novos (plural).",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo as peças se encaixarem",
    instrucao: "Ouça o Brilha girando cada engrenagem da frase.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Concordância nominal e verbal: como não travar a engrenagem",
        explicacao:
          "Na CONCORDÂNCIA NOMINAL, artigo, substantivo e adjetivo precisam ter o mesmo gênero e número. Na CONCORDÂNCIA VERBAL, o verbo muda de forma para combinar com o sujeito. Truque de oficina: ache o substantivo (ou o sujeito) e verifique se as outras peças 'giram junto' com ele.",
        exemplos: [
          {
            palavra: "As meninas alegres cantaram.",
            destaque: "As meninas alegres",
            motivo: "AS, meninas e alegres estão todas no feminino plural — a engrenagem encaixa.",
          },
          {
            palavra: "O menino esperto correu.",
            destaque: "O menino esperto",
            motivo: "O, menino e esperto estão todos no masculino singular.",
          },
          {
            palavra: "Nós estudamos todos os dias.",
            destaque: "Nós estudamos",
            motivo: "O verbo ESTUDAR vai para a forma NÓS ESTUDAMOS, combinando com o sujeito NÓS.",
          },
          {
            palavra: "Os alunos chegaram cedo.",
            destaque: "Os alunos chegaram",
            motivo: "OS, alunos e o verbo CHEGARAM estão todos no plural, encaixados com o sujeito.",
          },
        ],
        desafios: [
          {
            molde: "'As flores ___ (bonito/bonitas) enfeitam o jardim.' Qual peça encaixa?",
            opcoes: ["bonitas", "bonito", "bonitinho"],
            correta: 0,
            frase: "As flores bonitas enfeitam o jardim.",
            feedbackErro: "'As flores' está no feminino plural, então o adjetivo também precisa estar: BONITAS.",
          },
          {
            molde: "'Os cachorros ___ (latiu/latiram) a noite toda.' Qual verbo encaixa com o sujeito?",
            opcoes: ["latiram", "latiu", "latia"],
            correta: 0,
            frase: "Os cachorros latiram a noite toda.",
            feedbackErro: "'Os cachorros' é sujeito plural, então o verbo também precisa ir para o plural: LATIRAM.",
          },
          {
            molde: "'Nós ___ (fazemos/faz) o dever juntos.' Qual verbo combina com NÓS?",
            opcoes: ["fazemos", "faz", "fazem"],
            correta: 0,
            frase: "Nós fazemos o dever juntos.",
            feedbackErro: "O sujeito NÓS sempre pede a forma verbal terminada em -MOS: FAZEMOS.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou no manual da oficina como as engrenagens da frase se encaixam.",
    leitura: {
      titulo: "O Manual da Engrenagem da Frase",
      imagemUrl: pergaminho,
      legendaImagem: "Página sobre concordância",
      destacar: ["concordância nominal", "concordância verbal", "encaixar", "sujeito"],
      paragrafos: [
        "Toda frase é como uma engrenagem: as palavras precisam se encaixar para ela funcionar sem travar. A CONCORDÂNCIA NOMINAL é o encaixe entre o artigo, o substantivo e o adjetivo. Se o substantivo é feminino e plural, o artigo e o adjetivo também precisam ser femininos e plurais: 'AS flores bonitas', e não 'AS flores bonito'.",
        "Esse encaixe vale para gênero (masculino ou feminino) e para número (singular ou plural). Por isso dizemos 'UM prédio alto' (masculino singular) e 'UNS prédios altos' (masculino plural), mas 'UMA casa alta' (feminino singular) e 'UMAS casas altas' (feminino plural). Trocar apenas uma peça sem trocar as outras deixa a frase torta.",
        "Já a CONCORDÂNCIA VERBAL é o encaixe entre o sujeito (quem pratica a ação) e o verbo. O verbo muda de forma conforme a pessoa e o número do sujeito: EU brinco, ELE brinca, NÓS brincamos, ELES brincam. Se o sujeito é plural, o verbo também precisa ir para o plural: 'OS alunos estudam', e não 'OS alunos estuda'.",
        "Prestar atenção nessas duas concordâncias é o que faz um texto soar 'redondo', sem tropeços. Quando alguém lê ou escuta uma frase com as peças bem encaixadas, entende tudo de primeira, sem estranhar nada — é a engrenagem da língua girando lisa.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no manual se precisar.",
    perguntas: [
      {
        pergunta: "O que é a concordância nominal, segundo o texto?",
        opcoes: [
          "O encaixe entre o sujeito e o verbo",
          "O encaixe entre artigo, substantivo e adjetivo",
          "Uma peça solta da engrenagem",
          "O nome de uma frase engraçada",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A concordância nominal encaixa artigo, substantivo e adjetivo.",
        feedbackErro: "Releia: 'A CONCORDÂNCIA NOMINAL é o encaixe entre o artigo, o substantivo e o adjetivo'.",
        ondeEstaNoTexto: "A CONCORDÂNCIA NOMINAL é o encaixe entre o artigo, o substantivo e o adjetivo",
        dica: "⚙️ Pista de oficina: volte ao texto e releia este trecho — “A CONCORDÂNCIA NOMINAL é o encaixe entre o artigo, o substantivo e o adjetivo”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O encaixe entre artigo, substantivo e adjetivo”. A concordância NOMINAL cuida das palavras que giram junto com o nome (substantivo). Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Segundo o texto, o que muda no verbo na concordância verbal?",
        opcoes: [
          "A cor da palavra",
          "O tamanho da frase",
          "A forma, conforme a pessoa e o número do sujeito",
          "Nada, o verbo é sempre igual",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Correto! O verbo muda de forma conforme a pessoa e o número do sujeito.",
        feedbackErro: "Releia: 'o verbo muda de forma conforme a pessoa e o número do sujeito'.",
        ondeEstaNoTexto: "o verbo muda de forma conforme a pessoa e o número do sujeito",
        dica: "⚙️ Pista de oficina: volte ao texto e releia este trecho — “o verbo muda de forma conforme a pessoa e o número do sujeito”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A forma, conforme a pessoa e o número do sujeito”. É isso que faz o verbo 'girar' junto com quem pratica a ação. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que acontece quando as concordâncias estão bem feitas, segundo o último parágrafo?",
        opcoes: [
          "O texto fica mais curto",
          "O texto soa 'redondo', sem tropeços",
          "O texto fica difícil de entender",
          "A frase perde o sentido",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! O texto soa redondo, sem tropeços, quando a concordância está correta.",
        feedbackErro: "Releia: 'é o que faz um texto soar redondo, sem tropeços'.",
        ondeEstaNoTexto: "é o que faz um texto soar \"redondo\", sem tropeços",
        dica: "⚙️ Pista de oficina: volte ao texto e releia este trecho — “é o que faz um texto soar redondo, sem tropeços”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O texto soa 'redondo', sem tropeços”. Quando as peças encaixam, a leitura flui sem estranhamento. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem apareceu na motivação e o que ele mostrou?",
    perguntas: [
      {
        pergunta: "O que Brilha mostrou na abertura da aula?",
        opcoes: [
          "Uma engrenagem enferrujada com peças de tamanhos diferentes",
          "Um livro sem capa",
          "Uma bicicleta quebrada",
          "Um relógio parado",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Foi uma engrenagem enferrujada, com peças que não se encaixavam.",
        feedbackErro: "Releia a motivação: Brilha mostrou uma engrenagem enferrujada.",
        dica: "⚙️ Pista de oficina: pense no objeto que dá nome à unidade — 'A Engrenagem da Frase'.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Uma engrenagem enferrujada com peças de tamanhos diferentes”. Foi esse objeto que abriu a aula. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Onde as descobertas sobre concordância foram registradas?",
        opcoes: [
          "No manual da oficina",
          "Numa placa de trânsito",
          "Num bilhete perdido",
          "Numa etiqueta de roupa",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Ficou registrado no Manual da Engrenagem da Frase.",
        feedbackErro: "Releia o título: 'O Manual da Engrenagem da Frase'.",
        dica: "⚙️ Pista de oficina: relembre o título da leitura guiada de hoje.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “No manual da oficina”. O texto que lemos se chamava 'O Manual da Engrenagem da Frase'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para checar se uma frase está com boa concordância.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Encontre o substantivo principal da frase.", imagemUrl: caixa },
        { id: "p2", texto: "Veja o gênero e o número desse substantivo.", imagemUrl: livro },
        { id: "p3", texto: "Ajuste o artigo e o adjetivo para combinarem com ele.", imagemUrl: engrenagem },
        { id: "p4", texto: "Confira se o verbo combina com o sujeito da frase.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho para deixar a frase bem encaixada.",
      feedbackErro: "Pense: primeiro se acha o substantivo, depois se ajustam artigo e adjetivo, por fim o verbo.",
      dica: "⚙️ Pista de oficina: primeiro se encontra a peça principal (o substantivo/sujeito), depois se ajustam as peças ao redor dela.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do manual e responda.",
    leitura: {
      titulo: "Mais Peças na Engrenagem",
      imagemUrl: livro,
      destacar: ["OS meninos", "correram", "A professora explicou"],
      paragrafos: [
        "Na frase 'OS meninos correram para a quadra', o substantivo MENINOS está no masculino plural, então o artigo OS também está no plural, e o verbo CORRERAM está na forma de plural, combinando com o sujeito.",
        "Já na frase 'A professora explicou a lição com calma', o substantivo PROFESSORA está no feminino singular, o artigo A também está no singular feminino, e o verbo EXPLICOU está na forma de singular, combinando com o sujeito ELA (a professora).",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que o artigo OS aparece antes de 'meninos correram'?",
        opcoes: [
          "Porque MENINOS está no masculino plural, e o artigo precisa combinar",
          "Porque é sempre assim, sem motivo",
          "Porque MENINOS é feminino",
          "Porque o verbo pede a letra O",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O artigo combina em gênero e número com o substantivo.",
        feedbackErro: "Releia: 'o substantivo MENINOS está no masculino plural, então o artigo OS também está no plural'.",
        ondeEstaNoTexto: "o substantivo MENINOS está no masculino plural, então o artigo OS também está no plural",
        dica: "⚙️ Pista de oficina: volte ao texto e releia este trecho — “o substantivo MENINOS está no masculino plural, então o artigo OS também está no plural”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque MENINOS está no masculino plural, e o artigo precisa combinar”. O artigo sempre acompanha gênero e número do substantivo. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Com que o verbo EXPLICOU combina na segunda frase?",
        opcoes: [
          "Com a palavra CALMA",
          "Com o sujeito ELA (a professora)",
          "Com a palavra LIÇÃO",
          "Com nenhuma palavra da frase",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! O verbo combina com o sujeito da frase, no caso, a professora.",
        feedbackErro: "Releia: 'o verbo EXPLICOU está na forma de singular, combinando com o sujeito ELA (a professora)'.",
        ondeEstaNoTexto: "o verbo EXPLICOU está na forma de singular, combinando com o sujeito ELA (a professora)",
        dica: "⚙️ Pista de oficina: volte ao texto e releia este trecho — “o verbo EXPLICOU está na forma de singular, combinando com o sujeito ELA (a professora)”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Com o sujeito ELA (a professora)”. O verbo sempre combina com quem pratica a ação. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Encaixe as peças da frase",
    instrucao: "Arraste cada palavra para o alvo que combina com ela em gênero e número.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "A Oficina de Encaixes",
      bloco: {
        instrucao: "Pense no gênero e no número de cada substantivo antes de arrastar.",
        itens: [
          { id: "i1", texto: "bonitas", alvoId: "a1" },
          { id: "i2", texto: "esperto", alvoId: "a2" },
          { id: "i3", texto: "correram", alvoId: "a3" },
          { id: "i4", texto: "estudamos", alvoId: "a4" },
        ],
        alvos: [
          { id: "a1", nome: "As flores ___", descricao: "feminino plural" },
          { id: "a2", nome: "O menino ___", descricao: "masculino singular" },
          { id: "a3", nome: "Os cachorros ___ (verbo)", descricao: "sujeito plural" },
          { id: "a4", nome: "Nós ___ (verbo)", descricao: "sujeito NÓS" },
        ],
        feedbackAcerto: "🎉 Peça encaixada! A engrenagem gira lisinha.",
        feedbackErro: "Pense no gênero, no número e em quem é o sujeito antes de encaixar a peça.",
        dica: "⚙️ Pista de oficina: leia o começo do alvo (ex.: 'As flores') e veja se a peça combina em gênero e número, ou se é o verbo certo para o sujeito.",
      },
    },
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Manual de Manutenção da Sua Própria Frase",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Escreva um parágrafo sobre um dia na escola",
        comando:
          "Escreva um parágrafo curto (de 3 a 5 frases) contando algo que aconteceu na sua escola. Preste muita atenção para o artigo, o substantivo e o adjetivo combinarem, e para o verbo combinar com o sujeito de cada frase.",
        linhas: 5,
        modelo: [
          "Os alunos chegaram animados à escola.",
          "A professora explicou uma atividade nova sobre plantas.",
          "As crianças curiosas fizeram perguntas o tempo todo.",
          "No fim, todos saíram satisfeitos com a aula.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Conferi se cada artigo combina em gênero e número com o substantivo.",
          "Conferi se cada adjetivo combina em gênero e número com o substantivo que ele descreve.",
          "Conferi se cada verbo combina com o sujeito da frase.",
          "Li em voz alta e consertei o que soou torto ou 'emperrado'.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (~130 ppm · 5º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: A Engrenagem que Nunca Trava",
    instrucao:
      "Leia o mesmo texto três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula, ponto e travessão. A meta não é correr: é ler como quem explica algo importante.",
    texto: [
      "Imagine uma oficina cheia de engrenagens, cada uma com dentes de um tamanho diferente. Se as peças forem encaixadas com cuidado, a máquina inteira gira sem esforço. Mas basta uma peça errada para tudo travar. Com as frases da língua portuguesa acontece exatamente a mesma coisa.",
      "Quando o artigo, o substantivo e o adjetivo combinam em gênero e número, dizemos que existe concordância nominal, e a frase gira lisa, sem estranhamentos. Quando o verbo combina com o sujeito, existe concordância verbal, e a ação soa natural, como se fosse contada por alguém que domina bem o idioma.",
      "Por isso, todo bom escritor revisa seu texto como um mecânico revisa uma engrenagem: procura a peça que não encaixa, troca por outra do tamanho certo e só então deixa a máquina — ou a frase — funcionar de verdade, sem nenhum tropeço.",
    ],
    metaSegundos: 72,
  },

  momento09_revisao: {
    pontos: [
      "Concordância nominal: artigo, substantivo e adjetivo combinam em gênero e número.",
      "Concordância verbal: o verbo muda de forma para combinar com o sujeito.",
      "Uma frase com boa concordância soa 'redonda', sem tropeços na leitura.",
    ],
    miniDesafio: {
      pergunta: "Qual frase está com a concordância correta?",
      opcoes: [
        "As casa é grande.",
        "Os menino correu.",
        "As casas são grandes.",
        "A menino é esperto.",
      ],
      correta: 2,
      feedbackAcerto: "🎉 Isso! 'As casas são grandes' tem todas as peças encaixadas no plural feminino.",
      feedbackErro: "Releia as opções: procure aquela em que todas as palavras combinam em gênero e número.",
      dica: "⚙️ Pista de oficina: confira se artigo, substantivo, adjetivo e verbo estão todos no mesmo gênero e número.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “As casas são grandes”. Todas as peças (artigo, substantivo, verbo e adjetivo) estão no plural feminino, encaixadas. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Concordância nominal é o encaixe entre...",
        opcoes: ["Sujeito e verbo", "Artigo, substantivo e adjetivo", "Duas frases diferentes", "Ponto e vírgula"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Concordância nominal encaixa artigo, substantivo e adjetivo.",
        feedbackErro: "Lembre: nominal fala das palavras que acompanham o nome (substantivo).",
        dica: "⚙️ Pista de oficina: 'nominal' vem de 'nome' — pense nas palavras que giram junto com o substantivo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Artigo, substantivo e adjetivo”. Nominal é o encaixe das palavras ao redor do nome. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — Complete: 'AS meninas ___ chegaram cedo.'",
        opcoes: ["alegre", "alegres", "alegrinho", "alegrado"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! 'Alegres', no feminino plural, combina com AS meninas.",
        feedbackErro: "Pense: AS meninas está no feminino plural, então o adjetivo também precisa estar.",
        dica: "⚙️ Pista de oficina: veja o gênero e o número de 'meninas' antes de escolher o adjetivo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “alegres”. O adjetivo precisa ir para o feminino plural, como o substantivo 'meninas'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — Complete: 'NÓS ___ o dever de casa juntos.'",
        opcoes: ["fazem", "faço", "fazemos", "fazia"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! NÓS pede a forma FAZEMOS.",
        feedbackErro: "Lembre: o sujeito NÓS sempre combina com a forma verbal terminada em -MOS.",
        dica: "⚙️ Pista de oficina: o sujeito NÓS quase sempre pede um verbo terminado em -MOS.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “fazemos”. O sujeito NÓS sempre combina com a forma terminada em -MOS. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "4/5 — Qual frase tem a concordância verbal correta?",
        opcoes: ["Os alunos estuda muito.", "Ela estudam muito.", "Os alunos estudam muito.", "Nós estuda muito."],
        correta: 2,
        feedbackAcerto: "🎉 Exato! 'Os alunos estudam' combina sujeito plural com verbo no plural.",
        feedbackErro: "Confira se o sujeito e o verbo estão os dois no plural ou os dois no singular.",
        dica: "⚙️ Pista de oficina: veja se o sujeito é singular ou plural, e escolha a frase em que o verbo combina com ele.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Os alunos estudam muito”. Sujeito plural pede verbo plural. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "5/5 — Em 'UM prédio alto', o adjetivo ALTO está no...",
        opcoes: ["Feminino singular", "Feminino plural", "Masculino plural", "Masculino singular"],
        correta: 3,
        feedbackAcerto: "🎉 Aula concluída! ALTO combina em masculino singular com PRÉDIO.",
        feedbackErro: "PRÉDIO é masculino e singular, então o adjetivo também precisa ser.",
        dica: "⚙️ Pista de oficina: veja o gênero e o número da palavra PRÉDIO antes de responder.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Masculino singular”. PRÉDIO é masculino singular, e o adjetivo ALTO combina com ele. Aula concluída! ⚙️ Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 A oficina de encaixes em casa",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Com um adulto, escolham 3 objetos da casa (ex.: mesa, sofá, cadeiras).",
      "2) Para cada objeto, criem uma frase com artigo, substantivo e adjetivo bem encaixados (ex.: 'A mesa é redonda').",
      "3) Depois, escrevam um textinho de 2 a 4 frases contando uma cena da família, prestando atenção para o verbo sempre combinar com o sujeito.",
      "4) Leiam o texto em voz alta e escutem se soa 'redondo', sem tropeços.",
    ],
    registro: "📝 Uma foto do textinho escrito ou um áudio lendo as frases em voz alta.",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "Engrenagem de Bronze",
  },
};
