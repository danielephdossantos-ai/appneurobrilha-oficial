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
  bncc: ["EF05LP05", "EF05LP06"],
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
        tipo: "fraseComPonto",
        frases: [
          { texto: "As meninas alegres cantaram.", explicacao: "AS, meninas e alegres estão todas no feminino plural — a engrenagem encaixa." },
          { texto: "O menino esperto correu.", explicacao: "O, menino e esperto estão todos no masculino singular." },
          { texto: "Nós estudamos todos os dias.", explicacao: "O verbo ESTUDAR vai para a forma NÓS ESTUDAMOS, combinando com o sujeito NÓS." },
          { texto: "Os alunos chegaram cedo.", explicacao: "OS, alunos e o verbo CHEGARAM estão todos no plural, encaixados com o sujeito." },
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
      },
    },
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
      },
      {
        pergunta: "2/5 — Complete: 'AS meninas ___ chegaram cedo.'",
        opcoes: ["alegre", "alegres", "alegrinho", "alegrado"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! 'Alegres', no feminino plural, combina com AS meninas.",
        feedbackErro: "Pense: AS meninas está no feminino plural, então o adjetivo também precisa estar.",
      },
      {
        pergunta: "3/5 — Complete: 'NÓS ___ o dever de casa juntos.'",
        opcoes: ["fazem", "faço", "fazemos", "fazia"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! NÓS pede a forma FAZEMOS.",
        feedbackErro: "Lembre: o sujeito NÓS sempre combina com a forma verbal terminada em -MOS.",
      },
      {
        pergunta: "4/5 — Qual frase tem a concordância verbal correta?",
        opcoes: ["Os alunos estuda muito.", "Ela estudam muito.", "Os alunos estudam muito.", "Nós estuda muito."],
        correta: 2,
        feedbackAcerto: "🎉 Exato! 'Os alunos estudam' combina sujeito plural com verbo no plural.",
        feedbackErro: "Confira se o sujeito e o verbo estão os dois no plural ou os dois no singular.",
      },
      {
        pergunta: "5/5 — Em 'UM prédio alto', o adjetivo ALTO está no...",
        opcoes: ["Feminino singular", "Feminino plural", "Masculino plural", "Masculino singular"],
        correta: 3,
        feedbackAcerto: "🎉 Aula concluída! ALTO combina em masculino singular com PRÉDIO.",
        feedbackErro: "PRÉDIO é masculino e singular, então o adjetivo também precisa ser.",
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
    xp: 130,
    moedas: 75,
  },
};
