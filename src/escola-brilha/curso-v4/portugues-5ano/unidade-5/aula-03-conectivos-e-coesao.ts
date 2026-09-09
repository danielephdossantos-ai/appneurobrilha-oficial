import type { AulaPortuguesV4 } from "../../types";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as heroi } from "@/assets/neuro-treino/objetos/heroi.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as quadroTriste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";

/**
 * Aula 3 — Conectivos e coesão
 * -------------------------------------------------------------
 * Unidade 5 · Diário de Escritor (5º ano)
 * Foco: usar conectivos (porque, então, além disso, porém, por isso)
 * para ligar ideias e evitar repetir sempre as mesmas palavras,
 * deixando o texto mais coeso.
 * BNCC: EF05LP07, EF05LP26
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-conectivos-e-coesao",
  titulo: "Conectivos e coesão",
  iconeTrilha: "🌉",
  bncc: ["EF05LP07", "EF05LP27", "EF35LP08"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "As pontes entre as ideias",
    historia:
      "Brilha mostrou uma ponte ligando duas ilhas. — Sem essa ponte, seria impossível ir de uma ilha para outra! No texto, as frases também precisam de pontes para se conectar: são os CONECTIVOS, palavrinhas como 'porque', 'então', 'além disso' e 'porém'. Elas ligam as ideias e mostram a relação entre elas. E quando evitamos repetir sempre a mesma palavra, o texto fica ainda mais gostoso de ler: isso se chama COESÃO. Vamos construir essas pontes?",
    imagemUrl: ponte,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de começar.",
    bloco: {
      titulo: "A Ponte das Ideias",
      capaImagemUrl: ponte,
      pistas: [
        { imagemUrl: bloco, nome: "Blocos que se encaixam" },
        { imagemUrl: papel, nome: "Um texto com frases ligadas" },
      ],
      pergunta: "Sobre o que essa aula vai ensinar?",
      hipoteses: [
        { texto: "Como construir pontes de verdade sobre rios.", imagemUrl: ponte },
        { texto: "Como usar palavras para ligar as ideias de um texto.", imagemUrl: papel },
        { texto: "Como desenhar blocos coloridos.", imagemUrl: bloco },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender palavras que ligam ideias e deixam o texto mais coeso.",
      feedbackErro: "Pense na ponte ligando duas ilhas: os conectivos ligam ideias de um jeito parecido.",
      dica: "🌉 Pista: repare nas imagens — uma ponte e um texto com frases. Os conectivos funcionam como pontes entre ideias.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras dos conectivos e da coesão.",
    cards: [
      {
        palavra: "conectivo",
        explicacao: "Palavra que liga duas ideias ou frases, mostrando a relação entre elas (motivo, consequência, oposição, adição).",
        exemplo: "'Choveu, por isso a festa foi cancelada.' — 'por isso' é o conectivo.",
        imagemUrl: ponte,
      },
      {
        palavra: "coesão",
        explicacao: "Quando as partes de um texto se ligam bem, sem repetições cansativas, formando um todo organizado.",
        exemplo: "Trocar 'o cachorro' por 'o animal' na segunda vez que aparece ajuda a coesão.",
        imagemUrl: bloco,
      },
      {
        palavra: "porém",
        explicacao: "Conectivo que mostra oposição, uma ideia contrária à anterior.",
        exemplo: "Estudei bastante, porém fiquei nervoso na prova.",
        imagemUrl: quadroTriste,
      },
      {
        palavra: "além disso",
        explicacao: "Conectivo que soma uma nova informação à ideia anterior.",
        exemplo: "Ela gosta de ler; além disso, adora desenhar.",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo os conectivos em ação",
    instrucao: "Ouça o Brilha mostrando como cada conectivo muda o sentido da frase.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Não fui ao parque porque estava chovendo.", explicacao: "'PORQUE' liga uma consequência ao seu MOTIVO." },
          { texto: "Estudei bastante, então fui bem na prova.", explicacao: "'ENTÃO' mostra uma CONSEQUÊNCIA da ideia anterior." },
          { texto: "Gosto de matemática; além disso, adoro ciências.", explicacao: "'ALÉM DISSO' soma uma nova informação parecida." },
          { texto: "Ele treinou muito, porém não venceu a corrida.", explicacao: "'PORÉM' mostra uma ideia OPOSTA à anterior, uma surpresa." },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "Escolhendo o conectivo certo para cada relação",
        explicacao:
          "Cada conectivo serve para um tipo de relação entre ideias: MOTIVO (porque), CONSEQUÊNCIA (então, por isso), OPOSIÇÃO (porém, mas) e SOMA (além disso, também). Truque: pergunte-se 'por que isso aconteceu?' (motivo), 'o que aconteceu depois?' (consequência), 'isso é contrário ao que eu esperava?' (oposição) ou 'isso é mais uma informação parecida?' (soma).",
        exemplos: [
          { palavra: "Não saí de casa porque estava chovendo.", destaque: "porque", motivo: "Explica o MOTIVO de não ter saído." },
          { palavra: "Ele estudou muito, por isso passou na prova.", destaque: "por isso", motivo: "Mostra a CONSEQUÊNCIA de ter estudado." },
          { palavra: "Ela é caçula, porém é a mais alta da família.", destaque: "porém", motivo: "Mostra uma ideia contrária, uma OPOSIÇÃO." },
        ],
        desafios: [
          {
            molde: "Ele treinou todos os dias, __ ficou mais forte.",
            opcoes: ["porém", "então", "mas"],
            correta: 1,
            frase: "Ele treinou todos os dias, então ficou mais forte.",
            feedbackErro: "'Então' liga o treino (causa) ao resultado (ficar mais forte) — é uma consequência.",
          },
          {
            molde: "Gosto de desenhar, __ prefiro pintar com tinta.",
            opcoes: ["além disso", "porque", "por isso"],
            correta: 0,
            frase: "Gosto de desenhar, além disso, prefiro pintar com tinta.",
            feedbackErro: "'Além disso' soma uma nova informação parecida com a primeira — os dois são sobre arte.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha explicou como usar conectivos e manter a coesão.",
    leitura: {
      titulo: "A Oficina das Pontes de Palavras",
      imagemUrl: ponte,
      legendaImagem: "Página sobre conectivos e coesão",
      destacar: ["conectivos", "coesão", "porque", "porém", "por isso"],
      paragrafos: [
        "Os CONECTIVOS são palavras que ligam ideias dentro de uma frase ou entre frases diferentes. Eles mostram a relação entre as ideias: 'porque' indica motivo, 'então' e 'por isso' indicam consequência, 'além disso' indica soma de informações, e 'porém' indica oposição, uma ideia contrária.",
        "Sem os conectivos, o texto fica com frases soltas, difíceis de entender. Compare: 'Choveu muito. A festa foi cancelada.' com 'Choveu muito, por isso a festa foi cancelada.' A segunda versão deixa claro que uma coisa é consequência da outra.",
        "Além dos conectivos, existe outra técnica importante para deixar o texto mais gostoso de ler: evitar repetir sempre a mesma palavra. Isso se chama COESÃO. Em vez de escrever 'O cachorro correu. O cachorro latiu. O cachorro pulou.', podemos escrever: 'O cachorro correu, latiu e pulou.' ou trocar por sinônimos: 'O cachorro correu. O animal latiu. O bichinho pulou.'",
        "Veja um texto real usando conectivos e coesão: 'Ana adora ler. Além disso, ela gosta de escrever pequenas histórias. Porém, na escola, ela tem dificuldade em matemática. Por isso, sua mãe decidiu ajudá-la todas as tardes.' Perceba como 'além disso', 'porém' e 'por isso' ligam as ideias sem deixar o texto cansativo.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que são conectivos?",
        opcoes: [
          "Palavras que enfeitam o texto sem função",
          "Palavras que ligam ideias e mostram a relação entre elas",
          "Sinais de pontuação",
          "Letras maiúsculas",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Conectivos ligam ideias e mostram a relação entre elas.",
        feedbackErro: "Releia: 'Os CONECTIVOS são palavras que ligam ideias dentro de uma frase ou entre frases diferentes.'",
        ondeEstaNoTexto: "Os CONECTIVOS são palavras que ligam ideias dentro de uma frase ou entre frases diferentes",
        dica: "🌉 Pista: releia a primeira frase do texto — ela define exatamente o que é um conectivo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Palavras que ligam ideias e mostram a relação entre elas”. É assim que o texto define conectivo, logo na primeira frase. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que é coesão, segundo o texto?",
        opcoes: [
          "Escrever frases bem longas",
          "Evitar repetir sempre a mesma palavra, usando sinônimos ou juntando ideias",
          "Usar apenas letras maiúsculas",
          "Escrever sem parágrafos",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Coesão é evitar repetições cansativas no texto.",
        feedbackErro: "Releia: 'evitar repetir sempre a mesma palavra... Isso se chama COESÃO.'",
        ondeEstaNoTexto: "existe outra técnica importante para deixar o texto mais gostoso de ler: evitar repetir sempre a mesma palavra. Isso se chama COESÃO",
        dica: "🌉 Pista: releia o terceiro parágrafo, onde o texto explica o exemplo do cachorro.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Evitar repetir sempre a mesma palavra, usando sinônimos ou juntando ideias”. O texto mostra isso no exemplo do cachorro que corre, late e pula. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "No texto sobre Ana, por que a mãe decidiu ajudá-la todas as tardes?",
        opcoes: [
          "Porque ela queria viajar",
          "Porque ela tem dificuldade em matemática",
          "Porque ela não gosta de ler",
          "Porque ela perdeu o caderno",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! O conectivo 'por isso' liga a dificuldade em matemática à decisão da mãe.",
        feedbackErro: "Releia: 'na escola, ela tem dificuldade em matemática. Por isso, sua mãe decidiu ajudá-la todas as tardes.'",
        ondeEstaNoTexto: "na escola, ela tem dificuldade em matemática. Por isso, sua mãe decidiu ajudá-la todas as tardes",
        dica: "🌉 Pista: procure o conectivo 'por isso' no último parágrafo — ele liga o motivo à decisão da mãe.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque ela tem dificuldade em matemática”. O conectivo 'por isso' liga esse motivo à decisão da mãe de ajudá-la. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Pense sobre os exemplos usados na explicação.",
    perguntas: [
      {
        pergunta: "No exemplo comparativo, o que aconteceu por causa da chuva forte?",
        opcoes: ["A escola fechou mais cedo", "A festa foi cancelada", "O ônibus atrasou", "A aula foi adiada"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Choveu muito, por isso a festa foi cancelada.'",
        feedbackErro: "Releia: 'Choveu muito, por isso a festa foi cancelada.'",
        dica: "🌉 Pista: procure a frase com o conectivo 'por isso' no segundo parágrafo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A festa foi cancelada”. O conectivo 'por isso' liga a chuva forte a essa consequência. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Além de ler, o que mais Ana gosta de fazer, segundo o texto?",
        opcoes: ["Jogar futebol", "Escrever pequenas histórias", "Cozinhar", "Cantar"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Ana também gosta de escrever pequenas histórias.",
        feedbackErro: "Releia: 'Além disso, ela gosta de escrever pequenas histórias.'",
        dica: "🌉 Pista: procure o conectivo 'além disso' logo depois de falar que Ana adora ler.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Escrever pequenas histórias”. O conectivo 'além disso' soma essa nova informação sobre Ana. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para deixar um texto mais coeso.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Escrever o rascunho com as ideias soltas.", imagemUrl: papel },
        { id: "p2", texto: "Identificar palavras repetidas no texto.", imagemUrl: lapis },
        { id: "p3", texto: "Trocar algumas repetições por sinônimos.", imagemUrl: bloco },
        { id: "p4", texto: "Acrescentar conectivos para ligar as ideias.", imagemUrl: ponte },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho para deixar um texto mais coeso.",
      feedbackErro: "Pense: primeiro se escreve, depois se percebe a repetição, depois se troca por sinônimos, e por fim se ligam as ideias com conectivos.",
      dica: "🌉 Pista: pense como um escritor de verdade — primeiro solta as ideias, só depois refina o texto.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "Mais conectivos para conhecer",
      imagemUrl: robo,
      destacar: ["mas", "quando", "para que"],
      paragrafos: [
        "Existem outros conectivos muito usados: 'MAS' também indica oposição, parecido com 'porém'. 'QUANDO' indica tempo, mostrando que algo aconteceu em um momento específico. 'PARA QUE' indica finalidade, o objetivo de uma ação.",
        "Um robô ajudante do Brilha adora colecionar frases com conectivos: 'Eu estudei, mas ainda tive dúvidas.' (oposição); 'Quando chegar em casa, vou fazer a lição.' (tempo); 'Estudo bastante para que eu tire notas boas.' (finalidade). Cada conectivo dá um sentido diferente à frase.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que o conectivo 'quando' indica?",
        opcoes: ["Motivo", "Tempo", "Finalidade", "Oposição"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Quando' indica tempo, um momento específico.",
        feedbackErro: "Releia: '\"QUANDO\" indica tempo, mostrando que algo aconteceu em um momento específico.'",
        ondeEstaNoTexto: "\"QUANDO\" indica tempo, mostrando que algo aconteceu em um momento específico",
        dica: "🌉 Pista: releia a primeira frase do texto, que explica cada conectivo novo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Tempo”. O texto explica que 'quando' mostra um momento específico. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "No exemplo do robô, qual frase mostra finalidade?",
        opcoes: [
          "'Eu estudei, mas ainda tive dúvidas.'",
          "'Quando chegar em casa, vou fazer a lição.'",
          "'Estudo bastante para que eu tire notas boas.'",
          "Nenhuma das opções",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Correto! 'Para que' mostra o objetivo da ação de estudar.",
        feedbackErro: "Releia: '\"Estudo bastante para que eu tire notas boas.\" (finalidade)'",
        ondeEstaNoTexto: "Estudo bastante para que eu tire notas boas",
        dica: "🌉 Pista: procure a frase que tem o conectivo 'para que' — ele indica o objetivo de uma ação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “'Estudo bastante para que eu tire notas boas.'”. O conectivo 'para que' mostra a finalidade da ação. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Arraste o conectivo certo",
    instrucao: "Arraste cada frase para o alvo que mostra o tipo de conectivo usado.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "A Oficina dos Conectivos",
      bloco: {
        instrucao: "Observe a palavra em destaque e escolha o tipo certo de relação.",
        itens: [
          { id: "t1", texto: "Não saí de casa PORQUE estava chovendo.", alvoId: "motivo" },
          { id: "t2", texto: "Estudei muito, PORÉM fiquei nervoso.", alvoId: "oposicao" },
          { id: "t3", texto: "Ele correu bastante, POR ISSO ficou cansado.", alvoId: "consequencia" },
          { id: "t4", texto: "Gosto de futebol; ALÉM DISSO, adoro natação.", alvoId: "soma" },
        ],
        alvos: [
          { id: "motivo", nome: "Motivo", imagemUrl: quadroTriste },
          { id: "oposicao", nome: "Oposição", imagemUrl: quadroAlegre },
          { id: "consequencia", nome: "Consequência", imagemUrl: heroi },
          { id: "soma", nome: "Soma de ideias", imagemUrl: estrela },
        ],
        feedbackAcerto: "🎉 Muito bem! Você identificou certinho a relação de cada conectivo.",
        feedbackErro: "Preste atenção: 'porque' é motivo; 'porém' é oposição; 'por isso' é consequência; 'além disso' é soma.",
        dica: "🌉 Pista: pense no que cada palavra faz — 'porque' explica, 'porém' contradiz, 'por isso' conclui, 'além disso' soma.",
      },
    },
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Construindo pontes de palavras",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Escreva um parágrafo usando conectivos",
        comando:
          "Escreva um parágrafo curto sobre o seu dia. Use pelo menos TRÊS conectivos diferentes (por exemplo: porque, então, além disso, porém, por isso) para ligar as ideias.",
        linhas: 5,
        modelo: [
          "Hoje acordei cedo porque tinha prova na escola.",
          "Estudei bastante, então me senti mais tranquilo.",
          "Além disso, revisei os cadernos com a ajuda da minha irmã.",
          "Porém, na hora da prova, fiquei um pouco nervoso.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim.",
          "Usei pelo menos três conectivos diferentes.",
          "Não repeti a mesma palavra várias vezes: troquei por pronome ou sinônimo.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Li em voz alta e consertei o que ficou estranho.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (~130 ppm · 5º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: A Ponte das Palavras",
    instrucao:
      "Leia o mesmo texto três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula, ponto e travessão. A meta não é correr: é ler como quem explica algo importante.",
    texto: [
      "Imagine um texto sem nenhum conectivo: frases soltas, uma depois da outra, sem nenhuma ligação. Ficaria estranho, não é mesmo? É como tentar atravessar um rio sem ponte, pulando de pedra em pedra sem saber onde vai pisar.",
      "Os conectivos são as pontes que faltavam: eles explicam o motivo de algo ter acontecido, mostram a consequência de uma ação, apresentam uma ideia contrária ou somam informações parecidas. Por isso, escolher o conectivo certo muda completamente o sentido de uma frase.",
      "Além dos conectivos, um texto bem escrito evita repetir sempre as mesmas palavras. Essa habilidade se chama coesão, e ela transforma um amontoado de frases em um texto de verdade, agradável e fácil de entender do início ao fim.",
    ],
    metaSegundos: 69,
  },

  momento09_revisao: {
    pontos: [
      "CONECTIVOS ligam ideias e mostram motivo, consequência, oposição ou soma.",
      "COESÃO é evitar repetir sempre a mesma palavra, usando sinônimos ou juntando frases.",
      "Palavras como 'porque', 'então', 'além disso' e 'porém' deixam o texto mais claro e conectado.",
    ],
    miniDesafio: {
      pergunta: "Na frase 'Treinei bastante, porém não venci a corrida.', o conectivo 'porém' indica...",
      opcoes: ["Motivo", "Consequência", "Oposição", "Finalidade"],
      correta: 2,
      feedbackAcerto: "🎉 Isso! 'Porém' mostra uma ideia contrária à anterior: treinou muito, mas não venceu.",
      feedbackErro: "Releia a explicação: 'porém' indica oposição, uma ideia contrária.",
      dica: "🌉 Pista: pense se a segunda parte da frase contradiz a primeira — isso é oposição.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “Oposição”. 'Porém' mostra uma ideia contrária: treinou muito, mas não venceu. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que são conectivos?",
        opcoes: ["Sinais de pontuação", "Palavras que ligam ideias e mostram sua relação", "Letras do alfabeto", "Nomes de personagens"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Conectivos ligam ideias.",
        feedbackErro: "Conectivos são palavras que ligam ideias e mostram a relação entre elas.",
        dica: "🌉 Pista: pense em uma ponte ligando duas ilhas — é assim que os conectivos ligam duas ideias.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Palavras que ligam ideias e mostram sua relação”. Eles funcionam como pontes entre as ideias de um texto. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — O conectivo 'porque' geralmente indica...",
        opcoes: ["Oposição", "Motivo", "Tempo", "Soma"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! 'Porque' indica motivo.",
        feedbackErro: "'Porque' explica o motivo de algo ter acontecido.",
        dica: "🌉 Pista: pergunte-se 'por que isso aconteceu?' — se a frase responde a essa pergunta, é motivo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Motivo”. 'Porque' explica a razão de algo ter acontecido. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — O conectivo 'porém' geralmente indica...",
        opcoes: ["Motivo", "Consequência", "Oposição", "Finalidade"],
        correta: 2,
        feedbackAcerto: "🎉 Exato! 'Porém' indica oposição, uma ideia contrária.",
        feedbackErro: "'Porém' mostra uma ideia diferente ou contrária à anterior.",
        dica: "🌉 Pista: pense se depois de 'porém' vem algo que surpreende ou contradiz o que foi dito antes.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Oposição”. 'Porém' mostra uma ideia contrária à anterior. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "4/5 — O que é coesão?",
        opcoes: [
          "Repetir sempre a mesma palavra",
          "Evitar repetições, usando sinônimos e conectivos",
          "Escrever só frases curtas",
          "Usar apenas letras maiúsculas",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Coesão é ligar bem as ideias, evitando repetições.",
        feedbackErro: "Coesão é evitar repetir sempre a mesma palavra, deixando o texto mais fluido.",
        dica: "🌉 Pista: lembre do exemplo do cachorro que corre, late e pula — sem repetir 'o cachorro' três vezes.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Evitar repetições, usando sinônimos e conectivos”. Isso deixa o texto mais fluido e agradável. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "5/5 — Qual frase usa um conectivo de consequência?",
        opcoes: [
          "'Ela estudou porque tinha prova.'",
          "'Choveu muito, por isso a viagem foi adiada.'",
          "'Gosto de ler e de desenhar.'",
          "'Quando ele chegar, vamos comer.'",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! 'Por isso' liga a chuva (causa) ao adiamento da viagem (consequência).",
        feedbackErro: "'Por isso' indica consequência: uma coisa aconteceu por causa da outra.",
        dica: "🌉 Pista: procure a frase em que a segunda parte é o RESULTADO da primeira.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “'Choveu muito, por isso a viagem foi adiada.'”. 'Por isso' liga a causa (chuva) à consequência (viagem adiada). Caso encerrado! 🌟 Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça-conectivos em casa",
    materiais: ["Papel e lápis", "Um livro, gibi ou texto de casa"],
    passos: [
      "1) Escolha um pequeno texto em casa (livro, bula, embalagem, bilhete).",
      "2) Procure e escreva 3 conectivos que aparecerem no texto (ex.: porque, mas, então).",
      "3) Para cada um, escreva se ele indica motivo, consequência, oposição ou soma.",
      "4) Escreva duas frases suas, cada uma usando um conectivo diferente.",
    ],
    registro: "📝 Uma foto da lista de conectivos encontrados e das frases criadas.",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "Ponte de Bronze",
  },
};
