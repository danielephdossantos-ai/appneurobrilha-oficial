import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bandeirola } from "@/assets/neuro-treino/objetos/bandeirola.png.asset.json";
import { url as bandeiraBrasil } from "@/assets/neuro-treino/objetos/bandeira-brasil.png.asset.json";
import { url as violao } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as mercado } from "@/assets/neuro-treino/objetos/mercado.png.asset.json";
import { url as raposa } from "@/assets/neuro-treino/objetos/raposa.png.asset.json";
import { url as galo } from "@/assets/neuro-treino/objetos/galo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";

/**
 * Aula 3 — Cordel do Clube
 * -------------------------------------------------------------
 * O clube conhece a LITERATURA DE CORDEL: poesia popular nordestina,
 * pendurada em barbante nas feiras, contada em SEXTILHAS (estrofes
 * de 6 versos, geralmente com rima ABCBDB), narrando histórias com
 * humor e sabedoria popular. Cordel autoral: "O Galo e a Raposa Esperta".
 *
 * BNCC: EF35LP23 (leitura de textos poéticos da tradição popular),
 * EF15LP16 (apreciar cordel como manifestação cultural).
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-cordel-do-clube",
  titulo: "Cordel do Clube",
  iconeTrilha: "🪢",
  bncc: ["EF35LP23", "EF15LP16"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O barbante cheio de folhetos",
    historia:
      "Aurora trouxe um barbante esticado na sede do clube, com folhetinhos pendurados por pregadores — cada um com uma capa colorida e versos rimados. — Isso é CORDEL! — ela explicou. — É uma poesia que nasceu nas feiras do Nordeste do Brasil, contada em versos que rimam e viram HISTÓRIA, quase sempre com humor e uma lição no final. Vamos aprender a ler e a construir um cordel do nosso clube?",
    imagemUrl: bandeirola,
  },

  momento02_previsao: {
    instrucao:
      "Veja a capa do folheto pendurado no barbante. Pelo título e pelos desenhos, imagine do que essa história vai tratar.",
    bloco: {
      titulo: "O Galo e a Raposa Esperta",
      capaImagemUrl: bandeiraBrasil,
      pistas: [
        { imagemUrl: galo, nome: "Um galo" },
        { imagemUrl: raposa, nome: "Uma raposa" },
      ],
      pergunta: "Sobre o que esse cordel provavelmente vai falar?",
      hipoteses: [
        { texto: "Uma disputa de esperteza entre o galo e a raposa, com final surpreendente.", imagemUrl: raposa },
        { texto: "Uma receita de bolo de fubá.", imagemUrl: papel },
        { texto: "Uma corrida de bicicletas na cidade.", imagemUrl: mercado },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔍 Isso! Título com dois bichos e a palavra 'esperta' são pistas clássicas de fábula em cordel: uma disputa de esperteza.",
      feedbackErro:
        "Repare: o título tem DOIS personagens-bicho e a palavra 'esperta' — isso é pista de uma disputa entre eles.",
      dica: "🔎 Pista: lembre do que significa “cordel” — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas fe… Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras para entender o cordel por dentro.",
    cards: [
      {
        palavra: "cordel",
        explicacao: "É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas.",
        exemplo: "O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha.",
        imagemUrl: bandeirola,
      },
      {
        palavra: "sextilha",
        explicacao: "É a estrofe mais comum do cordel: um bloco de SEIS versos, geralmente rimando o 2º, 4º e 6º versos.",
        exemplo: "Uma sextilha conta um pedacinho da história, e a próxima sextilha continua.",
        imagemUrl: papel,
      },
      {
        palavra: "repentista",
        explicacao: "É o poeta popular que cria versos NA HORA, de improviso, muitas vezes cantando ao violão.",
        exemplo: "O repentista inventou uma sextilha sobre o pote de doce quebrado, na hora, todo mundo rindo.",
        imagemUrl: violao,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "A rima do cordel",
    instrucao: "No cordel a rima cai no fim dos versos e marca o ritmo. Toque nas palavras que rimam com a base.",
    blocos: [
      {
        tipo: "rimas",
        itens: [{"palavraBase":"esperto","opcoes":[{"palavra":"certo","rima":true},{"palavra":"aberto","rima":true},{"palavra":"espeto","rima":false}],"terminacao":"-ERTO"},{"palavraBase":"feira","opcoes":[{"palavra":"bandeira","rima":true},{"palavra":"ferida","rima":false},{"palavra":"fera","rima":false}],"terminacao":"-EIRA"},{"palavraBase":"galo","opcoes":[{"palavra":"abalo","rima":true},{"palavra":"gato","rima":false},{"palavra":"galho","rima":false}],"terminacao":"-ALO"}],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o cordel em voz alta, com ritmo de contação de história de feira. Marque o compasso com a mão.",
    leitura: {
      titulo: "O Galo e a Raposa Esperta",
      imagemUrl: galo,
      legendaImagem: "O galo cantador do sítio",
      destacar: ["cantador", "esperta", "correu", "aprendeu"],
      paragrafos: [
        "Vou contar uma história\nde um galo muito cantador,\nque no sítio, de manhã cedo,\nera o primeiro cantor.\nMas apareceu a raposa,\ndizendo que era pastor.",
        "\"Meu amigo\", disse ela,\n\"vem que eu quero te contar,\nas galinhas fazem festa\nna clareira, sem parar.\"\nMas o galo, sabendo dela,\nnão caiu nesse balançar.",
        "\"Vou primeiro avisar todos\ndos cachorros do casarão!\"\ngritou o galo esperto,\ne a raposa, num pulo, entendeu a razão:\ncorreu ligeiro pro mato,\naprendeu a lição.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no cordel sempre que precisar.",
    perguntas: [
      {
        pergunta: "Quem era o primeiro a cantar de manhã no sítio?",
        opcoes: ["A raposa", "O galo", "Os cachorros"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! 'era o primeiro cantor' se refere ao galo.",
        feedbackErro: "Releia a primeira sextilha: quem é o 'cantador' desde o começo?",
        ondeEstaNoTexto: "de um galo muito cantador, … era o primeiro cantor.",
        dica: "🔎 Pista: releia no texto o trecho “de um galo muito cantador, … era o primeiro cantor.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “Quem era o primeiro a cantar de manhã no sítio?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que a raposa disse que estava acontecendo na clareira?",
        opcoes: ["Uma festa das galinhas", "Uma chuva forte", "Uma festa dos cachorros"],
        correta: 0,
        feedbackAcerto: "🔍 Boa! 'as galinhas fazem festa na clareira'.",
        feedbackErro: "Releia a segunda sextilha — a raposa fala de uma festa de quem?",
        ondeEstaNoTexto: "as galinhas fazem festa / na clareira, sem parar.",
        dica: "🔎 Pista: releia no texto o trecho “as galinhas fazem festa / na clareira, sem parar.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “O que a raposa disse que estava acontecendo na clareira?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que o galo ameaçou fazer para escapar da raposa?",
        opcoes: ["Fugir voando", "Avisar os cachorros do casarão", "Chamar a mãe raposa"],
        correta: 1,
        feedbackAcerto: "🔍 Exato! 'Vou primeiro avisar todos dos cachorros do casarão!'",
        feedbackErro: "Releia a última sextilha — o galo grita algo sobre os cachorros.",
        ondeEstaNoTexto: "\"Vou primeiro avisar todos / dos cachorros do casarão!\"",
        dica: "🔎 Pista: releia no texto o trecho “\"Vou primeiro avisar todos / dos cachorros do casarão!\"”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “O que o galo ameaçou fazer para escapar da raposa?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos investigar a estrutura do cordel e a esperteza dos personagens.",
    perguntas: [
      {
        pergunta: "Quantas sextilhas (estrofes de 6 versos) tem o cordel do galo e da raposa?",
        opcoes: ["Uma", "Três", "Cinco"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! São três blocos de seis versos — três sextilhas.",
        feedbackErro: "Conte os blocos separados: são três grupos de seis versos cada.",
        dica: "🔎 Pista: lembre do que significa “cordel” — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas fe… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “Quantas sextilhas (estrofes de 6 versos) tem o cordel do galo e da ra…” com essa ideia na cabeça.",
      },
      {
        pergunta: "Quem foi mais esperto no final da história?",
        opcoes: ["A raposa, que enganou o galo", "O galo, que percebeu o plano da raposa", "Nenhum dos dois — ninguém venceu"],
        correta: 1,
        feedbackAcerto:
          "🔍 Isso! O galo percebeu a armadilha e usou a ameaça dos cachorros para se livrar da raposa — típico final de fábula em cordel.",
        feedbackErro:
          "Releia o final: quem inventou uma saída esperta e assustou o outro? Foi o galo.",
        dica: "🔎 Pista: lembre do que significa “cordel” — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas fe… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “Quem foi mais esperto no final da história?” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque os acontecimentos do cordel na ordem certa.",
    bloco: {
      instrucao: "Do começo ao fim.",
      itens: [
        { id: "p1", texto: "O galo canta de manhã cedo no sítio.", imagemUrl: galo },
        { id: "p2", texto: "A raposa aparece e conta sobre uma festa das galinhas na clareira.", imagemUrl: raposa },
        { id: "p3", texto: "O galo ameaça avisar os cachorros e a raposa foge.", imagemUrl: mercado },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Perfeito! Assim como num folheto de feira: começo, armadilha e desfecho esperto.",
      feedbackErro: "Pense na lógica da fábula: primeiro a rotina, depois a armadilha da raposa, e por fim a fuga.",
      dica: "🔎 Pista: lembre do que significa “cordel” — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas fe… Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo cordel — leia sozinho e responda.",
    leitura: {
      titulo: "A Feira do Compadre Zeca",
      imagemUrl: mercado,
      destacar: ["feira", "rimando", "vendia versos"],
      paragrafos: [
        "Na feira do Compadre Zeca\ntinha banca de a valer,\nele vendia seus versos\nrimando, sem esquecer,\ncontava causos do sertão\ncom jeito de encantecer.",
        "Um menino perguntou:\n\"Seu Zeca, é tudo verdade?\"\nE ele riu, piscando o olho:\n\"Metade é fantasia, metade é realidade.\nO importante é que a história\ntraga alegria à vontade.\"",
      ],
    },
    perguntas: [
      {
        pergunta: "O que Compadre Zeca vendia na feira?",
        opcoes: ["Frutas", "Seus versos rimando", "Sapatos"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! 'ele vendia seus versos rimando'.",
        feedbackErro: "Releia a primeira sextilha — o que ele vendia na banca?",
        ondeEstaNoTexto: "ele vendia seus versos / rimando, sem esquecer,",
        dica: "🔎 Pista: releia no texto o trecho “ele vendia seus versos / rimando, sem esquecer,”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “O que Compadre Zeca vendia na feira?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Segundo Zeca, como eram as histórias que ele contava?",
        opcoes: ["Totalmente inventadas", "Metade fantasia, metade realidade", "Cópias de outros livros"],
        correta: 1,
        feedbackAcerto: "🔍 Boa! 'Metade é fantasia, metade é realidade'.",
        feedbackErro: "Releia a resposta de Zeca ao menino — ele explica a mistura das histórias.",
        ondeEstaNoTexto: "\"Metade é fantasia, metade é realidade.\"",
        dica: "🔎 Pista: releia no texto o trecho “\"Metade é fantasia, metade é realidade.\"”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “Segundo Zeca, como eram as histórias que ele contava?” com essa ideia na cabeça.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina de Escrita do Detetive",
    instrucao:
      "Três passos de escritor de verdade: primeiro o RASCUNHO, depois a REVISÃO com a lista de conferência e, por último, a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Cordel do seu caso",
        comando: "Escreva 4 versos de cordel contando um caso resolvido pelo clube. Mantenha as rimas.",
        linhas: 4,
        modelo: [
          "Sumiu o lápis da Ana,",
          "ninguém sabia contar.",
          "Achamos dentro da lata,",
          "na hora de arrumar.",
        ],
        checklist: [
          "Comecei cada frase com letra MAIÚSCULA.",
          "Usei ponto final no fim de cada frase.",
          "Meu texto fala do tema pedido, do começo ao fim.",
          "Reli em voz alta e consertei o que estava estranho.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura cronometrada (Fase 4 · 3º ano · ~90 ppm)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura de detetive: O Galo e a Raposa Esperta",
    instrucao:
      "Detetive lê rápido, mas não atropela. Leia este trecho três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação — respeitando vírgula e ponto. A meta é ler sem tropeçar, não correr.",
    texto: [
      "Vou contar uma história\nde um galo muito cantador,\nque no sítio, de manhã cedo,\nera o primeiro cantor.",
      "Mas apareceu a raposa,\ndizendo que era pastor.",
      "\"Meu amigo\", disse ela,\n\"vem que eu quero te contar,\nas galinhas fazem festa\nna clareira, sem parar.\"\nMas o galo, sabendo dela,\nnão caiu nesse balançar.",
    ],
    metaSegundos: 36,
  },

  momento09_revisao: {
    pontos: [
      "CORDEL é poesia popular, pendurada em barbante nas feiras, que conta histórias com humor.",
      "SEXTILHA é a estrofe clássica do cordel: seis versos.",
      "REPENTISTA é o poeta que cria versos de improviso.",
      "Cordéis costumam ter personagens espertos e um final com lição, quase sempre engraçado.",
    ],
    miniDesafio: {
      pergunta: "Uma sextilha tem quantos versos?",
      opcoes: ["Quatro", "Seis", "Oito"],
      correta: 1,
      feedbackAcerto: "🔍 Isso! 'Sextilha' vem de 'seis' — seis versos.",
      feedbackErro: "O nome já ajuda: sextilha vem de 'seis' — são seis versos por estrofe.",
      dica: "🔎 Pista: lembre do que significa “cordel” — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas fe… Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “Uma sextilha tem quantos versos?” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é literatura de cordel?",
        opcoes: [
          "Poesia popular pendurada em barbante nas feiras",
          "Um tipo de romance longo sem rima",
          "Um texto escrito em linhas corridas, sem pausa nem ritmo",
          "Um gênero só de notícias de jornal",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Um tipo de romance longo sem rima” não é a resposta. Cordel é a poesia popular pendurada em BARBANTE nas feiras, geralmente do Nordeste.",
          "❌ “Um texto escrito em linhas corridas, sem pausa nem ritmo” não é a resposta. Cordel é a poesia popular pendurada em BARBANTE nas feiras, geralmente do Nordeste.",
          "❌ “Um gênero só de notícias de jornal” não é a resposta. Cordel é a poesia popular pendurada em BARBANTE nas feiras, geralmente do Nordeste.",
        ],
        feedbackAcerto: "🔍 Isso! Cordel é poesia popular de feira.",
        feedbackErro: "Cordel é a poesia popular pendurada em BARBANTE nas feiras, geralmente do Nordeste.",
        dica: "🔎 Pista: lembre do que significa “cordel” — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas fe… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “1/5 — O que é literatura de cordel?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — Quantos versos tem uma sextilha?",
        opcoes: [
          "Quatro",
          "Um texto escrito em linhas corridas, sem pausa nem ritmo",
          "Seis",
          "Dez",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “Quatro” não é a resposta. Sextilha tem SEIS versos — o nome já dá a pista.",
          "❌ “Um texto escrito em linhas corridas, sem pausa nem ritmo” não é a resposta. Sextilha tem SEIS versos — o nome já dá a pista.",
          null,
          "❌ “Dez” não é a resposta. Sextilha tem SEIS versos — o nome já dá a pista.",
        ],
        feedbackAcerto: "🔍 Correto! Seis versos.",
        feedbackErro: "Sextilha tem SEIS versos — o nome já dá a pista.",
        dica: "🔎 Pista: lembre do que significa “cordel” — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas fe… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “2/5 — Quantos versos tem uma sextilha?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — No cordel do galo e da raposa, quem venceu a disputa de esperteza?",
        opcoes: [
          "A raposa",
          "O galo",
          "Os cachorros",
          "Um texto escrito em linhas corridas, sem pausa nem ritmo",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “A raposa” não é a resposta. Releia o final: quem inventou a ameaça dos cachorros para escapar? Foi o galo.",
          null,
          "❌ “Os cachorros” não é a resposta. Releia o final: quem inventou a ameaça dos cachorros para escapar? Foi o galo.",
          "❌ “Um texto escrito em linhas corridas, sem pausa nem ritmo” não é a resposta. Releia o final: quem inventou a ameaça dos cachorros para escapar? Foi o galo.",
        ],
        feedbackAcerto: "🔍 Isso! O galo foi mais esperto e assustou a raposa.",
        feedbackErro: "Releia o final: quem inventou a ameaça dos cachorros para escapar? Foi o galo.",
        dica: "🔎 Pista: lembre do que significa “cordel” — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas fe… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “3/5 — No cordel do galo e da raposa, quem venceu a disputa de esperte…” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — O que é um repentista?",
        opcoes: [
          "Um poeta que cria versos de improviso",
          "Um vendedor de frutas",
          "Um tipo de instrumento musical",
          "Depende só do gosto de quem lê, sem olhar o texto",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Um vendedor de frutas” não é a resposta. Repentista é quem inventa versos DE IMPROVISO, muitas vezes cantando.",
          "❌ “Um tipo de instrumento musical” não é a resposta. Repentista é quem inventa versos DE IMPROVISO, muitas vezes cantando.",
          "❌ “Depende só do gosto de quem lê, sem olhar o texto” não é a resposta. Repentista é quem inventa versos DE IMPROVISO, muitas vezes cantando.",
        ],
        feedbackAcerto: "🔍 Isso! Repentista cria versos NA HORA.",
        feedbackErro: "Repentista é quem inventa versos DE IMPROVISO, muitas vezes cantando.",
        dica: "🔎 Pista: lembre do que significa “cordel” — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas fe… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “4/5 — O que é um repentista?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Segundo Compadre Zeca, as histórias de cordel geralmente misturam...",
        opcoes: [
          "Só verdades",
          "Um texto escrito em linhas corridas, sem pausa nem ritmo",
          "Fantasia e realidade",
          "Só números",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “Só verdades” não é a resposta. Zeca explicou: as histórias misturam fantasia E realidade.",
          "❌ “Um texto escrito em linhas corridas, sem pausa nem ritmo” não é a resposta. Zeca explicou: as histórias misturam fantasia E realidade.",
          null,
          "❌ “Só números” não é a resposta. Zeca explicou: as histórias misturam fantasia E realidade.",
        ],
        feedbackAcerto: "🔍 Isso! 'Metade é fantasia, metade é realidade.' Caso do cordel resolvido! 🌟",
        feedbackErro: "Zeca explicou: as histórias misturam fantasia E realidade.",
        dica: "🔎 Pista: lembre do que significa “cordel” — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas fe… Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: cordel — É um tipo de poema popular, geralmente contando uma história com humor, pendurado em barbante (cordão) nas feiras nordestinas. Exemplo: O folheto de cordel 'A Chegada da Lua' era vendido na feira por uma moedinha. Agora volte à pergunta “5/5 — Segundo Compadre Zeca, as histórias de cordel geralmente mistur…” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: nossa própria sextilha",
    materiais: ["Papel", "Lápis", "Barbante e pregador (opcional, para pendurar o folheto)"],
    passos: [
      "1) Escolham juntos um bichinho ou personagem engraçado da família.",
      "2) Inventem uma pequena história de 6 versos (sextilha) sobre ele, tentando rimar o final de alguns versos.",
      "3) Leiam em voz alta, com ritmo de contador de causos.",
      "4) Se puderem, pendurem a folha num barbante, como um folheto de cordel de verdade.",
    ],
    registro: "🗣️ Registrem em áudio a sextilha sendo declamada em voz alta pela família.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
