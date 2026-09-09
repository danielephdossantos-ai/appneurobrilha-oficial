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
 * Unidade 8 · Aula 2 — O Verbete da Enciclopédia
 * -------------------------------------------------------------
 * Foco: estrutura e diagramação do verbete de enciclopédia infantil
 * (TÍTULO, DEFINIÇÃO, DETALHAMENTO, CURIOSIDADES) e a diferença entre
 * verbete (informa, objetivo, 3ª pessoa) e história (narra, personagens).
 * BNCC: EF04LP22, EF04LP23, EF15LP06.
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-verbete-enciclopedia",
  titulo: "O Verbete da Enciclopédia",
  iconeTrilha: "📚",
  bncc: ["EF04LP22", "EF04LP23", "EF15LP06"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "A enciclopédia da floresta",
    historia:
      "A expedição encontrou uma enciclopédia gigante, cheia de verbetes sobre bichos e coisas do mundo. Brilha abriu na página do TAMANDUÁ-BANDEIRA: — Olha, aqui não tem 'era uma vez'! Aqui tem fatos, um por um, bem organizados: o que é, onde vive, como é, e até curiosidades. Vamos aprender a ler e a escrever um verbete como um verdadeiro pesquisador?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de abrir a enciclopédia.",
    bloco: {
      titulo: "O Verbete da Enciclopédia",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: bussola, nome: "Fatos organizados em partes" },
        { imagemUrl: estrela, nome: "Curiosidades sobre um assunto" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "Como um verbete de enciclopédia é organizado em partes (título, definição, detalhamento, curiosidades).",
          imagemUrl: estrela,
        },
        { texto: "Como inventar personagens para uma história.", imagemUrl: lapis },
        { texto: "Como decorar o alfabeto na ordem certa.", imagemUrl: mapa },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos descobrir as partes que organizam um verbete de enciclopédia.",
      feedbackErro:
        "Pense na enciclopédia: ela não conta histórias, ela ORGANIZA fatos em partes. É sobre isso que vamos investigar.",
      dica: "🧭 Pista de explorador: enciclopédia não tem 'era uma vez'. Ela tem fatos organizados. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora conhece o nome de cada parte antes de escrever um verbete.",
    cards: [
      {
        palavra: "verbete",
        explicacao: "É o texto de enciclopédia ou dicionário que explica um assunto com fatos, em ordem.",
        exemplo: "O verbete TAMANDUÁ-BANDEIRA explica o que é, onde vive e como é esse animal.",
        imagemUrl: livro,
      },
      {
        palavra: "definição",
        explicacao: "É a frase que diz, de forma direta, o que é o assunto do verbete.",
        exemplo: "'O tamanduá-bandeira é um mamífero que se alimenta de formigas e cupins.'",
        imagemUrl: bussola,
      },
      {
        palavra: "detalhamento",
        explicacao: "É a parte que traz mais informações: onde vive, como é o corpo, como se comporta.",
        exemplo: "'Vive em campos e florestas da América do Sul. Tem cerca de 2 metros de comprimento.'",
        imagemUrl: mapa,
      },
      {
        palavra: "curiosidade",
        explicacao: "É um fato surpreendente ou divertido sobre o assunto, colocado no fim do verbete.",
        exemplo: "'A língua do tamanduá pode chegar a 60 centímetros de comprimento!'",
        imagemUrl: estrela,
      },
      {
        palavra: "linguagem objetiva",
        explicacao: "É escrever só com fatos, sem opinião e sem personagem, quase sempre na 3ª pessoa (ele/ela).",
        exemplo: "'O tamanduá vive...' (e não 'Eu vivo...' como faria um personagem de história).",
        imagemUrl: lapis,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "As quatro partes do verbete",
    instrucao: "Veja como cada fato encontra o lugar certo dentro do verbete, na ordem certa.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Verbete tem ordem: Título → Definição → Detalhamento → Curiosidades",
        explicacao:
          "Todo verbete de enciclopédia segue a mesma organização. Primeiro vem o TÍTULO, o nome do assunto em destaque. Depois a DEFINIÇÃO, uma frase curta que diz o que é. Em seguida o DETALHAMENTO, com mais informações: onde vive, como funciona, características. Por fim, as CURIOSIDADES, fatos surpreendentes que fecham o verbete com chave de ouro. Diferente da história, o verbete não narra uma aventura: ele INFORMA, com linguagem objetiva e na 3ª pessoa.",
        exemplos: [
          { palavra: "TAMANDUÁ-BANDEIRA", destaque: "título", motivo: "O nome do assunto, sempre em destaque no topo." },
          { palavra: "é um mamífero que come formigas", destaque: "definição", motivo: "Frase curta e direta: o que é." },
          { palavra: "vive em campos e florestas", destaque: "detalhamento", motivo: "Mais informações: onde vive, como é." },
        ],
        desafios: [
          {
            molde: "_ vem primeiro no verbete",
            opcoes: ["Título", "Curiosidade", "Detalhamento"],
            correta: 0,
            frase: "O título é a primeira parte de um verbete.",
            feedbackErro: "O título vem primeiro: é o nome do assunto em destaque.",
          },
          {
            molde: "'é um mamífero que come formigas' é a _",
            opcoes: ["definição", "curiosidade", "título"],
            correta: 0,
            frase: "Essa frase curta que diz o que é o animal é a definição.",
            feedbackErro: "Uma frase curta dizendo O QUE É o assunto é a definição.",
          },
          {
            molde: "'a língua pode ter 60 cm' é uma _",
            opcoes: ["curiosidade", "definição", "título"],
            correta: 0,
            frase: "Um fato surpreendente no fim do verbete é uma curiosidade.",
            feedbackErro: "Fato surpreendente e divertido, geralmente no fim, é curiosidade.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou um verbete completo no diário de bordo da expedição.",
    leitura: {
      titulo: "TAMANDUÁ-BANDEIRA",
      imagemUrl: pergaminho,
      legendaImagem: "Página da enciclopédia da floresta",
      destacar: ["definição", "detalhamento", "curiosidade"],
      paragrafos: [
        "TÍTULO: Tamanduá-bandeira.",
        "DEFINIÇÃO: O tamanduá-bandeira é um mamífero que se alimenta de formigas e cupins.",
        "DETALHAMENTO: Ele vive em campos e florestas da América do Sul. Tem cerca de 2 metros de comprimento, pelo grosso e um focinho longo e fino, ideal para cavar formigueiros. Anda devagar e usa as garras fortes das patas dianteiras para se defender.",
        "CURIOSIDADE: A língua do tamanduá pode chegar a 60 centímetros e ele pode comer até 30 mil insetos em um único dia!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no verbete se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Qual é a definição do tamanduá-bandeira, segundo o verbete?",
        opcoes: [
          "Um mamífero que se alimenta de formigas e cupins",
          "Um pássaro colorido da floresta",
          "Um inseto muito rápido",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A definição diz exatamente o que é o animal.",
        feedbackErro: "Releia: 'DEFINIÇÃO: O tamanduá-bandeira é um mamífero que se alimenta de formigas e cupins.'",
        ondeEstaNoTexto: "O tamanduá-bandeira é um mamífero que se alimenta de formigas e cupins",
        dica: "🧭 Pista de explorador: volte ao texto e releia a parte marcada DEFINIÇÃO.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um mamífero que se alimenta de formigas e cupins”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual informação aparece no DETALHAMENTO do verbete?",
        opcoes: [
          "Onde vive e como é o corpo do animal",
          "Uma opinião sobre o animal ser bonito",
          "Uma história inventada sobre o animal",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! O detalhamento traz onde vive e as características do animal.",
        feedbackErro: "Releia: 'DETALHAMENTO: Ele vive em campos e florestas... Tem cerca de 2 metros de comprimento...'",
        ondeEstaNoTexto: "Ele vive em campos e florestas da América do Sul",
        dica: "🧭 Pista de explorador: procure a parte marcada DETALHAMENTO no texto.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Onde vive e como é o corpo do animal”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual é a curiosidade contada no fim do verbete?",
        opcoes: [
          "A língua pode chegar a 60 cm e ele come até 30 mil insetos por dia",
          "O tamanduá sabe voar",
          "O tamanduá mora dentro d'água",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Essa curiosidade surpreende quem lê.",
        feedbackErro: "Releia o final: 'A língua do tamanduá pode chegar a 60 centímetros e ele pode comer até 30 mil insetos em um único dia!'",
        ondeEstaNoTexto: "A língua do tamanduá pode chegar a 60 centímetros",
        dica: "🧭 Pista de explorador: releia a última parte, marcada CURIOSIDADE.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A língua pode chegar a 60 cm e ele come até 30 mil insetos por dia”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "No verbete não há personagens de história — mas há um assunto e um lugar. Vamos identificar.",
    perguntas: [
      {
        pergunta: "Qual é o assunto (título) do verbete lido?",
        opcoes: ["Tamanduá-bandeira", "A floresta encantada", "O explorador Brilha"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O título do verbete é o nome do assunto: Tamanduá-bandeira.",
        feedbackErro: "Releia o título no topo do verbete.",
        dica: "🧭 Pista de explorador: releia a primeira linha do verbete.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Tamanduá-bandeira”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Onde o tamanduá-bandeira vive, segundo o texto?",
        opcoes: ["Em campos e florestas da América do Sul", "No fundo do oceano", "No gelo da Antártida"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Ele vive em campos e florestas da América do Sul.",
        feedbackErro: "Releia o detalhamento: 'Ele vive em campos e florestas da América do Sul.'",
        dica: "🧭 Pista de explorador: releia a parte do DETALHAMENTO.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Em campos e florestas da América do Sul”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as partes na ordem certa para montar um verbete.",
    bloco: {
      instrucao: "Da primeira parte à última.",
      itens: [
        { id: "p1", texto: "Título: o nome do assunto em destaque.", imagemUrl: estrela },
        { id: "p2", texto: "Definição: uma frase curta que diz o que é.", imagemUrl: bussola },
        { id: "p3", texto: "Detalhamento: onde vive, como funciona, características.", imagemUrl: mapa },
        { id: "p4", texto: "Curiosidades: fatos surpreendentes no final.", imagemUrl: livro },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a ordem certa de um verbete de enciclopédia.",
      feedbackErro: "Pense: primeiro se nomeia o assunto, depois se define, depois se detalha, e por fim vem a curiosidade.",
      dica: "🧭 Pista de explorador: o título vem sempre primeiro, e a curiosidade fecha o verbete.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo verbete e responda.",
    leitura: {
      titulo: "POLVO",
      imagemUrl: livro,
      destacar: ["definição", "detalhamento", "curiosidade"],
      paragrafos: [
        "DEFINIÇÃO: O polvo é um animal marinho de corpo mole, sem ossos, com oito braços.",
        "DETALHAMENTO: Vive no fundo do mar, escondido em rochas e buracos. Consegue mudar de cor para se camuflar e fugir de predadores. Cada braço tem várias ventosas que ajudam a segurar objetos e a se mover.",
        "CURIOSIDADE: O polvo tem três corações e sangue azul!",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a definição do polvo, segundo o verbete?",
        opcoes: [
          "Um animal marinho de corpo mole, sem ossos, com oito braços",
          "Um peixe colorido de água doce",
          "Um pássaro que voa sobre o mar",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Essa é a frase que diz o que é o polvo.",
        feedbackErro: "Releia: 'DEFINIÇÃO: O polvo é um animal marinho de corpo mole, sem ossos, com oito braços.'",
        ondeEstaNoTexto: "O polvo é um animal marinho de corpo mole, sem ossos, com oito braços",
        dica: "🧭 Pista de explorador: volte ao texto e releia a parte marcada DEFINIÇÃO.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um animal marinho de corpo mole, sem ossos, com oito braços”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual é a curiosidade sobre o polvo?",
        opcoes: ["Ele tem três corações e sangue azul", "Ele sabe cantar", "Ele vive nas árvores"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Essa curiosidade surpreende bastante.",
        feedbackErro: "Releia: 'CURIOSIDADE: O polvo tem três corações e sangue azul!'",
        ondeEstaNoTexto: "O polvo tem três corações e sangue azul",
        dica: "🧭 Pista de explorador: releia a última parte do verbete.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Ele tem três corações e sangue azul”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte o verbete na ordem certa",
    instrucao: "Arraste cada parte do verbete para o lugar certo, na ordem: título, definição, detalhamento, curiosidades.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "A Enciclopédia Embaralhada",
      bloco: {
        instrucao: "Pense em qual parte vem primeiro, qual vem no meio e qual fecha o verbete.",
        itens: [
          { id: "v1", texto: "CORUJA (título do verbete)", imagemUrl: estrela },
          { id: "v2", texto: "A coruja é uma ave de rapina que caça à noite. (definição)", imagemUrl: bussola },
          { id: "v3", texto: "Vive em florestas e cidades, tem visão e audição muito apuradas e pode girar a cabeça quase 270 graus. (detalhamento)", imagemUrl: mapa },
          { id: "v4", texto: "Algumas corujas conseguem voar quase sem fazer barulho! (curiosidade)", imagemUrl: livro },
        ],
        ordemCerta: ["v1", "v2", "v3", "v4"],
        feedbackAcerto: "🎉 Excelente! Você montou o verbete da coruja na ordem certa.",
        feedbackErro: "Lembre: título → definição → detalhamento → curiosidades.",
        dica: "🧭 Pista de explorador: o título é só o nome; a curiosidade é o fato mais surpreendente, que vem por último.",
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
        titulo: "Meu verbete de enciclopédia",
        comando:
          "Escolha um animal ou objeto que você conhece bem e escreva um verbete completo, com as 4 partes: TÍTULO, DEFINIÇÃO (uma frase dizendo o que é), DETALHAMENTO (onde vive ou como funciona, características) e CURIOSIDADE (um fato surpreendente).",
        linhas: 6,
        modelo: [
          "GOLFINHO",
          "DEFINIÇÃO: O golfinho é um mamífero marinho muito inteligente.",
          "DETALHAMENTO: Vive em grupos chamados cardumes, nada em alta velocidade e usa sons para se comunicar e localizar objetos.",
          "CURIOSIDADE: O golfinho dorme com metade do cérebro de cada vez, para não parar de nadar!",
        ],
        checklist: [
          "Meu verbete tem TÍTULO em destaque.",
          "Escrevi uma DEFINIÇÃO curta dizendo o que é o assunto.",
          "Escrevi um DETALHAMENTO com mais informações (onde vive, como é, como funciona).",
          "Escrevi uma CURIOSIDADE surpreendente no final.",
          "Usei linguagem objetiva, na 3ª pessoa (ele/ela), sem contar uma história.",
          "Li em voz alta e consertei o que ficou estranho.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: O Verbete do Camaleão",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO. A meta não é correr: é ler como quem informa com clareza.",
    texto: [
      "O camaleão é um réptil capaz de mudar de cor para se camuflar ou mostrar emoções.",
      "Ele vive em árvores de florestas quentes e tem olhos que se movem para lados diferentes ao mesmo tempo.",
      "Uma curiosidade e tanto: a língua do camaleão pode ser mais longa que o próprio corpo!",
    ],
    metaSegundos: 32,
  },

  momento09_revisao: {
    pontos: [
      "Verbete de enciclopédia INFORMA, com linguagem objetiva e na 3ª pessoa — diferente da história, que NARRA com personagens.",
      "O verbete se organiza em ordem: Título → Definição → Detalhamento → Curiosidades.",
      "O título é o nome do assunto; a definição diz o que é em uma frase.",
      "O detalhamento traz onde vive, como funciona e as características; a curiosidade fecha com um fato surpreendente.",
    ],
    miniDesafio: {
      pergunta: "Qual parte do verbete diz, em uma frase curta, o que é o assunto?",
      opcoes: ["Definição", "Curiosidade", "Título"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! A definição diz o que é, em uma frase curta.",
      feedbackErro: "Releia a explicação: a frase curta que diz 'o que é' se chama definição.",
      dica: "🧭 Pista de explorador: definição = frase curta e direta sobre o que é.",
      reensino: "📚 Vamos rever juntos: a resposta certa é “Definição”. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um verbete de enciclopédia?",
        opcoes: [
          "Um texto que informa fatos sobre um assunto, organizado em partes",
          "Uma história com personagens e aventuras",
          "Uma carta pessoal para um amigo",
          "Um poema com rimas",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Verbete informa fatos, organizados em partes.",
        feedbackErro: "Lembre: verbete não narra uma aventura, ele informa fatos.",
        feedbackOpcoes: [
          null,
          "❌ História com personagens é narrativa, não verbete.",
          "❌ Carta pessoal fala com alguém, o verbete informa um assunto.",
          "❌ Poema tem rimas e versos, verbete tem fatos organizados.",
        ],
        dica: "🧭 Pista de explorador: verbete = fatos organizados, sem personagens.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Um texto que informa fatos sobre um assunto, organizado em partes”.",
      },
      {
        pergunta: "2/5 — Qual é a ordem correta das partes de um verbete?",
        opcoes: [
          "Título, definição, detalhamento, curiosidades",
          "Curiosidades, título, definição, detalhamento",
          "Definição, curiosidades, título, detalhamento",
          "Detalhamento, título, curiosidades, definição",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Título → definição → detalhamento → curiosidades.",
        feedbackErro: "O título vem primeiro, e a curiosidade sempre fecha o verbete.",
        feedbackOpcoes: [
          null,
          "❌ Curiosidade não pode vir antes do título.",
          "❌ O título precisa vir primeiro, para nomear o assunto.",
          "❌ O detalhamento vem depois da definição, não antes do título.",
        ],
        dica: "🧭 Pista de explorador: pense na letra T de título abrindo o verbete.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Título, definição, detalhamento, curiosidades”.",
      },
      {
        pergunta: "3/5 — Qual frase é uma DEFINIÇÃO de verbete?",
        opcoes: [
          "'A coruja é uma ave de rapina que caça à noite.'",
          "'Era uma vez uma coruja muito sábia.'",
          "'Ai que susto, uma coruja piscou pra mim!'",
          "'Eu adoro corujas, elas são lindas.'",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Definição é uma frase objetiva dizendo o que é.",
        feedbackErro: "As outras opções narram uma história ou dão opinião — não é assim que um verbete é escrito.",
        feedbackOpcoes: [
          null,
          "❌ 'Era uma vez' é começo de história, não de verbete.",
          "❌ Isso é uma exclamação de personagem, não uma definição.",
          "❌ Isso é uma opinião pessoal, verbete usa linguagem objetiva.",
        ],
        dica: "🧭 Pista de explorador: definição não tem 'eu', nem 'era uma vez'.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “'A coruja é uma ave de rapina que caça à noite.'”.",
      },
      {
        pergunta: "4/5 — O que costuma aparecer nas CURIOSIDADES de um verbete?",
        opcoes: [
          "Um fato surpreendente ou divertido sobre o assunto",
          "O nome do autor do texto",
          "Uma pergunta para o leitor responder",
          "O resumo de toda a definição repetida",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Curiosidade é um fato surpreendente, geralmente no final.",
        feedbackErro: "Curiosidade não repete a definição nem faz pergunta: ela traz um fato inesperado.",
        feedbackOpcoes: [
          null,
          "❌ O nome do autor não aparece dentro do verbete.",
          "❌ Verbete não costuma fazer perguntas ao leitor.",
          "❌ Curiosidade traz um fato NOVO, não repete a definição.",
        ],
        dica: "🧭 Pista de explorador: curiosidade = fato que surpreende quem lê.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Um fato surpreendente ou divertido sobre o assunto”.",
      },
      {
        pergunta: "5/5 — Qual é a principal diferença entre um verbete e uma história?",
        opcoes: [
          "O verbete informa com linguagem objetiva; a história narra com personagens",
          "O verbete é sempre mais longo que a história",
          "A história não pode ter animais como assunto",
          "O verbete precisa ter rimas, e a história não",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! Verbete informa; história narra.",
        feedbackErro: "Pense: o verbete traz fatos organizados; a história conta uma aventura com personagens.",
        feedbackOpcoes: [
          null,
          "❌ O tamanho não é o que diferencia verbete de história.",
          "❌ Histórias podem, sim, ter animais como personagens.",
          "❌ Nem verbete nem história precisam ter rimas.",
        ],
        dica: "🧭 Pista de explorador: verbete = informar; história = narrar.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “O verbete informa com linguagem objetiva; a história narra com personagens”.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Minha enciclopédia da família",
    materiais: ["Papel e lápis", "Um livro, revista ou internet com ajuda de um adulto"],
    passos: [
      "1) Junto com um adulto, escolham um animal, planta ou objeto interessante da casa ou do bairro.",
      "2) Pesquisem juntos: o que é (definição), onde vive ou como funciona (detalhamento) e um fato curioso.",
      "3) Escrevam um verbete completo com as 4 partes: título, definição, detalhamento e curiosidade.",
      "4) Leiam o verbete em voz alta para a família, como um verdadeiro pesquisador.",
    ],
    registro: "📝 Uma foto do verbete escrito, com as 4 partes bem marcadas.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
