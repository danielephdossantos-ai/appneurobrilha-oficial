import type { AulaPortuguesV4 } from "../../types";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";

/**
 * Aula 1 — Poesia: ritmo e rima
 * -------------------------------------------------------------
 * Unidade 6 · Vozes do Mundo (5º ano)
 * Foco: reconhecer verso, estrofe, rima e ritmo no texto poético,
 * e perceber a linguagem figurada (sentido não literal) da poesia.
 * BNCC: EF05LP28, EF15LP18
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-poesia-ritmo-e-rima",
  titulo: "Poesia: ritmo e rima",
  iconeTrilha: "🌙",
  bncc: ["EF05LP28", "EF15LP18"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A Noite dos Versos",
    historia:
      "Brilha chegou embaixo de um céu cheio de estrelas, onde as palavras pareciam dançar no ar. — Bem-vindo às Vozes do Mundo! Nesta unidade, a gente vai falar, escrever e apresentar de verdade. E começamos pela POESIA, esse jeito mágico de usar as palavras com ritmo, rima e sentimento. Vamos ouvir a noite cantar em versos?",
    imagemUrl: lua,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas da Noite dos Versos antes de começar.",
    bloco: {
      titulo: "A Noite dos Versos",
      capaImagemUrl: lua,
      pistas: [
        { imagemUrl: estrela, nome: "Uma estrela que brilha nos versos" },
        { imagemUrl: passaro, nome: "Um pássaro que canta rimando" },
      ],
      pergunta: "Sobre o que essa aula vai ensinar?",
      hipoteses: [
        { texto: "Como desenhar estrelas no céu.", imagemUrl: estrela },
        { texto: "Como os poemas usam versos, rimas e ritmo para encantar quem lê.", imagemUrl: livro },
        { texto: "Como contar quantos pássaros existem numa árvore.", imagemUrl: passaro },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos descobrir como o poema brinca com as palavras.",
      feedbackErro: "Pense no livro cheio de versos: essa aula é sobre como o poema usa palavras com rima e ritmo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras da Noite dos Versos.",
    cards: [
      {
        palavra: "verso",
        explicacao: "Cada linha escrita de um poema. Um poema é formado por vários versos.",
        exemplo: "'A lua branca no céu escuro' é um verso de um poema sobre a noite.",
        imagemUrl: lua,
      },
      {
        palavra: "estrofe",
        explicacao: "Grupo de versos que formam um bloco, separado dos outros por um espaço em branco.",
        exemplo: "Um poema pode ter 3 estrofes de 4 versos cada.",
        imagemUrl: estrela,
      },
      {
        palavra: "rima",
        explicacao: "Quando o som do final de dois ou mais versos se parece ou é igual.",
        exemplo: "'Flor' e 'amor' rimam, porque terminam com som parecido.",
        imagemUrl: flor,
      },
      {
        palavra: "sentido figurado",
        explicacao: "Quando uma palavra ou frase não deve ser entendida ao pé da letra, mas de um jeito criativo e imaginativo.",
        exemplo: "'Meu coração é um jardim' não quer dizer que o coração virou terra com plantas, e sim que ele está cheio de coisas boas.",
        imagemUrl: coracao,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Ouvindo o ritmo e a rima",
    instrucao: "Ouça o Brilha destacando o som das rimas em cada frase.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "No jardim cresceu uma flor.", explicacao: "Repare no final 'flor' — ele vai combinar com outra palavra no próximo verso." },
          { texto: "Cheia de perfume e de amor.", explicacao: "'Amor' rima com 'flor': o som final -or se repete, criando a RIMA." },
          { texto: "O vento passa e vai cantando.", explicacao: "As sílabas se organizam num compasso: isso é o RITMO do poema." },
          { texto: "A vida vai se transformando.", explicacao: "'Cantando' e 'transformando' também rimam, terminando em -ando." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou na Noite dos Versos como funciona a poesia.",
    leitura: {
      titulo: "O Caderno da Noite dos Versos",
      imagemUrl: livro,
      legendaImagem: "Página sobre poesia, ritmo e rima",
      destacar: ["verso", "estrofe", "rima", "ritmo", "sentido figurado"],
      paragrafos: [
        "A POESIA é um tipo de texto que usa as palavras de um jeito especial: com música, imagens e emoção. Cada linha de um poema é chamada de VERSO, e um grupo de versos forma uma ESTROFE. Entre uma estrofe e outra, costuma haver um espaço em branco, como uma pausa para respirar.",
        "Um dos recursos mais bonitos da poesia é a RIMA: quando o som final de dois versos se parece. Além da rima, os poemas têm RITMO, um compasso que nasce da forma como as sílabas se organizam — por isso, quando lemos um poema em voz alta, ele quase parece uma canção.",
        "Veja um poema curto, escrito especialmente para esta aula:\n\nA Lua e o Poeta\n\nA lua subiu devagar no céu,\ncomo uma letra bordada no véu.\nO menino olhou, ficou a pensar:\n'Será que a lua também sabe rimar?'\n\nO vento passou, tocou seu cabelo,\ne o céu ficou todo cheio de brilho.\nCada estrelinha virou um segredo,\nguardado no verso, guardado no medo.\n\nNesse poema há duas estrofes de quatro versos cada, e as rimas aparecem em pares: 'céu' rima com 'véu', 'pensar' rima com 'rimar', 'cabelo' rima com 'brilho' (aqui o poeta brincou com o som, mesmo sem rima perfeita), e 'segredo' rima com 'medo'.",
        "A poesia também usa muito o SENTIDO FIGURADO. Quando o poema diz 'o céu ficou todo cheio de brilho', ele quer dizer que apareceram muitas estrelas — não que o céu virou um objeto brilhante de verdade. Entender o sentido figurado é como decifrar um enigma bonito que o poeta deixou para o leitor.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no caderno se precisar.",
    perguntas: [
      {
        pergunta: "O que é um verso, segundo o texto?",
        opcoes: [
          "O título do poema",
          "Cada linha escrita de um poema",
          "A capa do livro de poesia",
          "O nome do poeta",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Verso é cada linha do poema.",
        feedbackErro: "Releia: 'Cada linha escrita de um poema é chamada de VERSO'.",
        ondeEstaNoTexto: "Cada linha de um poema é chamada de VERSO",
      },
      {
        pergunta: "No poema 'A Lua e o Poeta', qual palavra rima com 'céu'?",
        opcoes: ["Segredo", "Cabelo", "Véu", "Pensar"],
        correta: 2,
        feedbackAcerto: "🎉 Correto! 'Céu' rima com 'véu'.",
        feedbackErro: "Releia o poema: 'A lua subiu devagar no céu, como uma letra bordada no véu.'",
        ondeEstaNoTexto: "A lua subiu devagar no céu, como uma letra bordada no véu",
      },
      {
        pergunta: "O que significa dizer que uma frase está em 'sentido figurado'?",
        opcoes: [
          "Que a frase está escrita errada",
          "Que a frase deve ser entendida de um jeito criativo, não ao pé da letra",
          "Que a frase é sempre engraçada",
          "Que a frase é muito comprida",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Sentido figurado é quando a frase não deve ser entendida literalmente.",
        feedbackErro: "Releia: 'quando uma palavra ou frase não deve ser entendida ao pé da letra, mas de um jeito criativo'.",
        ondeEstaNoTexto: "não deve ser entendida ao pé da letra, mas de um jeito criativo e imaginativo",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Onde Brilha e a turma estiveram nesta aula?",
    perguntas: [
      {
        pergunta: "Onde Brilha e a turma estão nesta aula?",
        opcoes: ["Na Praça dos Anúncios", "Na Noite dos Versos", "No Vale das Cartas", "Na Biblioteca Secreta"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Estamos na Noite dos Versos.",
        feedbackErro: "Releia a motivação: 'Brilha chegou embaixo de um céu cheio de estrelas' — a Noite dos Versos.",
      },
      {
        pergunta: "Quantas estrofes tem o poema 'A Lua e o Poeta'?",
        opcoes: ["Uma", "Duas", "Três", "Quatro"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O poema tem duas estrofes de quatro versos.",
        feedbackErro: "Releia: 'há duas estrofes de quatro versos cada'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para identificar rima e ritmo em um poema.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Ler o poema em voz alta, prestando atenção na musicalidade.", imagemUrl: livro },
        { id: "p2", texto: "Separar o poema em versos e estrofes.", imagemUrl: papel },
        { id: "p3", texto: "Observar quais palavras terminam com som parecido (as rimas).", imagemUrl: estrela },
        { id: "p4", texto: "Pensar no sentido figurado das imagens criadas pelo poeta.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho certo para explorar um poema.",
      feedbackErro: "Pense: primeiro se lê em voz alta, depois se separam versos/estrofes, depois se acham as rimas e por fim se pensa no sentido figurado.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outro trecho do caderno e responda.",
    leitura: {
      titulo: "Mais Descobertas na Noite dos Versos",
      imagemUrl: arcoIris,
      destacar: ["poema livre", "musicalidade"],
      paragrafos: [
        "Nem todo poema tem rima! Existe o POEMA LIVRE, que não segue um esquema fixo de rimas, mas ainda assim tem MUSICALIDADE, ou seja, um jeito bonito de soar quando é lido em voz alta, com repetições de sons e palavras escolhidas com cuidado.",
        "Um exemplo de poema livre: 'O arco-íris pintou o céu / sem pedir licença, sem hora marcada / vermelho, laranja, amarelo, verde / azul, anil e violeta, tudo junto, tudo em festa.' Repare que não há rima entre os versos, mas o poema ainda tem ritmo e imagens fortes.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que é um poema livre?",
        opcoes: [
          "Um poema que não tem versos",
          "Um poema que não segue um esquema fixo de rimas",
          "Um poema que só tem uma palavra",
          "Um poema escrito só por adultos",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O poema livre não segue um esquema fixo de rimas.",
        feedbackErro: "Releia: 'não segue um esquema fixo de rimas'.",
        ondeEstaNoTexto: "não segue um esquema fixo de rimas",
      },
      {
        pergunta: "O que dá musicalidade a um poema, mesmo sem rima?",
        opcoes: [
          "O tamanho das letras",
          "A repetição de sons e a escolha cuidadosa das palavras",
          "A cor da capa do livro",
          "O número de páginas",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Repetições de sons e palavras bem escolhidas criam musicalidade.",
        feedbackErro: "Releia: 'um jeito bonito de soar... com repetições de sons e palavras escolhidas com cuidado'.",
        ondeEstaNoTexto: "repetições de sons e palavras escolhidas com cuidado",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Caça-rimas",
    instrucao: "Arraste cada palavra até a palavra com a qual ela rima.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "O Jardim das Rimas",
      bloco: {
        instrucao: "Arraste cada palavra até a palavra que tem o mesmo som final.",
        itens: [
          { id: "i1", texto: "flor", imagemUrl: flor, alvoId: "a1" },
          { id: "i2", texto: "estrela", imagemUrl: estrela, alvoId: "a2" },
          { id: "i3", texto: "cantando", alvoId: "a3" },
          { id: "i4", texto: "coração", imagemUrl: coracao, alvoId: "a4" },
        ],
        alvos: [
          { id: "a1", nome: "amor" },
          { id: "a2", nome: "janela" },
          { id: "a3", nome: "voando" },
          { id: "a4", nome: "canção" },
        ],
        feedbackAcerto: "🎉 Você encontrou os pares que rimam!",
        feedbackErro: "Pense no som final de cada palavra: 'flor' e 'amor' terminam parecido, assim como os outros pares.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "VERSO é cada linha do poema, e ESTROFE é o grupo de versos.",
      "RIMA é o som parecido no final dos versos; RITMO é o compasso criado pelas sílabas.",
      "A poesia usa muito o SENTIDO FIGURADO, imagens criativas que não devem ser lidas ao pé da letra.",
    ],
    miniDesafio: {
      pergunta: "Qual palavra rima com 'jardim'?",
      opcoes: ["Assim", "Janela", "Lápis", "Caderno"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! 'Jardim' e 'assim' terminam com som parecido.",
      feedbackErro: "Pense no final da palavra 'jardim': -im. Qual opção termina parecido?",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um verso?",
        opcoes: [
          "O nome do poema",
          "Cada linha escrita de um poema",
          "A capa do livro",
          "O autor do poema",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Verso é cada linha do poema.",
        feedbackErro: "Verso é cada linha escrita de um poema.",
      },
      {
        pergunta: "2/5 — O que é uma estrofe?",
        opcoes: [
          "Um grupo de versos separado por espaço",
          "A última palavra do poema",
          "O título do poema",
          "Uma rima perfeita",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Estrofe é um grupo de versos.",
        feedbackErro: "Estrofe é o conjunto de versos separado por um espaço em branco.",
      },
      {
        pergunta: "3/5 — O que é rima?",
        opcoes: [
          "Quando duas palavras têm o mesmo número de letras",
          "Quando o som final de dois versos se parece",
          "Quando o poema tem só uma estrofe",
          "Quando o poema é muito curto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Rima é o som final parecido entre versos.",
        feedbackErro: "Rima é a semelhança de som no final dos versos.",
      },
      {
        pergunta: "4/5 — Um poema livre é aquele que...",
        opcoes: [
          "Não tem versos",
          "Não segue um esquema fixo de rimas",
          "Só pode ser escrito por crianças",
          "Não pode ser lido em voz alta",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Poema livre não segue esquema fixo de rimas.",
        feedbackErro: "Poema livre não tem um esquema de rimas fixo, mas ainda tem ritmo.",
      },
      {
        pergunta: "5/5 — O que significa 'sentido figurado'?",
        opcoes: [
          "O sentido literal, ao pé da letra",
          "Um sentido criativo, que não deve ser lido ao pé da letra",
          "Um erro de escrita",
          "Uma palavra difícil de entender",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Noite dos Versos conquistada! Sentido figurado é a linguagem criativa da poesia.",
        feedbackErro: "Sentido figurado é quando a frase deve ser entendida de forma criativa, não literal.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Crie seu próprio poema",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Com um adulto, escolha um tema para um poema curto (a lua, um animal, a família, a chuva).",
      "2) ESCREVA um poema de pelo menos 2 estrofes com 2 versos cada, tentando criar rimas.",
      "3) Leia o poema em voz alta para a família, prestando atenção no ritmo.",
      "4) Pergunte para alguém da família: 'Você percebeu alguma rima ou imagem em sentido figurado no meu poema?'",
    ],
    registro: "📝 Uma foto do poema escrito, ou um áudio da criança lendo o poema em voz alta.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
