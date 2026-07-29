import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as tablet } from "@/assets/neuro-treino/objetos/tablet.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Unidade 3 · Aula única — Enciclopédia Viva
 * -------------------------------------------------------------
 * Verbete de dicionário e de enciclopédia: estrutura, ordem
 * alfabética, abreviaturas gramaticais e linguagem impessoal.
 *
 * BNCC: EF05LP15, EF05LP16, EF05LP22, EF05LP23
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-enciclopedia-viva",
  titulo: "Enciclopédia Viva: O Poder do Verbete",
  iconeTrilha: "📚",
  bncc: ["EF05LP15", "EF05LP16", "EF05LP22", "EF05LP23"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A enciclopédia sem páginas",
    historia:
      "— Pip, a Enciclopédia do Códice perdeu vários verbetes! Sem eles, ninguém consegue pesquisar nada. — Então nós vamos escrevê-los, Pipa. Um verbete não é uma história: é informação organizada, direta e impessoal. Quem escreve verbete não diz 'eu acho' — diz o que a coisa é. Vamos aprender a estrutura e reconstruir a enciclopédia.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Olhe o verbete que sobrou intacto. O que ele tem que uma história não tem?",
    bloco: {
      titulo: "Um verbete sobrevivente",
      capaImagemUrl: livros,
      pistas: [
        { imagemUrl: coruja, nome: "coruja — o animal do verbete" },
        { imagemUrl: arvore, nome: "o habitat descrito" },
      ],
      recado: {
        rotulo: "Página da enciclopédia",
        icone: "📖",
        linhas: [
          "coruja  s.f.",
          "1. Ave de rapina de hábitos noturnos, cabeça grande e olhos frontais.",
          "2. Fig. Pessoa que costuma ficar acordada até tarde.",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que caracteriza esse tipo de texto?",
      hipoteses: [
        { texto: "Define a palavra de forma objetiva, numerando os sentidos" },
        { texto: "Conta uma aventura vivida por uma coruja" },
        { texto: "Dá a opinião do autor sobre corujas" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "📚 Isso! Verbete define, classifica e organiza os sentidos em números.",
      feedbackErro: "Não há personagem, enredo nem 'eu acho'. Há definição — e ela vem numerada.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Estas três chaves abrem qualquer dicionário.",
    cards: [
      {
        palavra: "verbete",
        explicacao:
          "Texto curto que define uma palavra ou um assunto, com informação organizada e sem opinião pessoal.",
        exemplo: "O verbete 'coruja' traz a classe gramatical e os sentidos da palavra.",
        imagemUrl: livros,
      },
      {
        palavra: "abreviaturas gramaticais",
        explicacao:
          "Códigos que indicam a classe da palavra: s.m. (substantivo masculino), s.f. (substantivo feminino), adj. (adjetivo), v. (verbo).",
        exemplo: "coruja s.f. · bonito adj. · correr v.",
        imagemUrl: tablet,
      },
      {
        palavra: "ordem alfabética",
        explicacao:
          "Organização das palavras de A a Z. Se a primeira letra é igual, compara-se a segunda; depois a terceira, e assim por diante.",
        exemplo: "casa vem antes de cavalo, porque 's' vem antes de 'v'.",
        imagemUrl: bussola,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia observando como o verbete de enciclopédia é mais longo que o de dicionário.",
    leitura: {
      titulo: "Verbete de enciclopédia: Coruja",
      imagemUrl: coruja,
      legendaImagem: "Coruja — ave de hábitos noturnos",
      destacar: ["são aves", "alimenta-se", "não se usa 'eu acho'"],
      paragrafos: [
        "Coruja é o nome comum dado às aves de rapina da ordem Strigiformes. São aves de cabeça grande, olhos voltados para a frente e voo silencioso, características que favorecem a caça durante a noite.",
        "A coruja alimenta-se principalmente de pequenos roedores, insetos e outras aves. Por isso, tem papel importante no equilíbrio dos ecossistemas em que vive, controlando a população de ratos em áreas rurais.",
        "Repare no modo de escrever: não se usa 'eu acho' nem 'na minha opinião'. O verbete de enciclopédia informa de maneira impessoal, com dados que podem ser conferidos em outras fontes.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão no verbete. Confira antes de marcar.",
    perguntas: [
      {
        pergunta: "Qual característica ajuda a coruja a caçar de noite?",
        opcoes: [
          "O voo silencioso e os olhos voltados para a frente",
          "As penas coloridas",
          "O canto muito alto",
        ],
        correta: 0,
        feedbackAcerto: "📚 Exato — está descrito no primeiro parágrafo.",
        feedbackErro: "Releia a lista de características do primeiro parágrafo.",
        ondeEstaNoTexto:
          "olhos voltados para a frente e voo silencioso, características que favorecem a caça durante a noite.",
      },
      {
        pergunta: "Por que a coruja é importante nas áreas rurais?",
        opcoes: [
          "Porque controla a população de ratos",
          "Porque enfeita as árvores",
          "Porque acorda os agricultores",
        ],
        correta: 0,
        feedbackAcerto: "📚 Papel ecológico registrado no segundo parágrafo.",
        feedbackErro: "O segundo parágrafo fala do equilíbrio do ecossistema.",
        ondeEstaNoTexto: "controlando a população de ratos em áreas rurais.",
      },
      {
        pergunta: "Qual é o tom da linguagem do verbete?",
        opcoes: [
          "Impessoal e informativa",
          "Emocionada e cheia de opiniões",
          "Engraçada, com piadas",
        ],
        correta: 0,
        feedbackAcerto: "📚 Verbete informa sem revelar quem escreveu.",
        feedbackErro: "O terceiro parágrafo explica exatamente esse ponto.",
        ondeEstaNoTexto: "não se usa 'eu acho' nem 'na minha opinião'. O verbete de enciclopédia informa de maneira impessoal.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Decifre as abreviaturas e a organização do dicionário.",
    perguntas: [
      {
        pergunta: "No verbete 'coruja s.f.', o que significa 's.f.'?",
        opcoes: ["substantivo feminino", "som forte", "singular final"],
        correta: 0,
        feedbackAcerto: "📚 Isso! A abreviatura informa a classe gramatical.",
        feedbackErro: "Volte ao card das abreviaturas gramaticais.",
      },
      {
        pergunta: "Qual palavra vem primeiro no dicionário?",
        opcoes: ["casa", "cavalo", "cidade"],
        correta: 0,
        feedbackAcerto: "📚 c-a-s: 'as' vem antes de 'av' e de 'id'.",
        feedbackErro: "Compare letra por letra a partir da segunda.",
      },
      {
        pergunta: "O verbete de enciclopédia difere do de dicionário porque…",
        opcoes: [
          "traz mais informações sobre o assunto, não apenas o significado",
          "é sempre mais curto",
          "conta uma história com personagens",
        ],
        correta: 0,
        feedbackAcerto: "📚 Dicionário define a palavra; enciclopédia explica o assunto.",
        feedbackErro: "Compare o verbete curto do começo da aula com o texto longo da leitura guiada.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Monte um verbete de dicionário na ordem certa.",
    bloco: {
      instrucao: "Arraste as partes para a ordem em que aparecem no verbete.",
      itens: [
        { id: "v1", texto: "A palavra-entrada (em destaque)" },
        { id: "v2", texto: "A abreviatura da classe gramatical" },
        { id: "v3", texto: "O primeiro sentido, numerado" },
        { id: "v4", texto: "Os outros sentidos e o exemplo de uso" },
      ],
      ordemCerta: ["v1", "v2", "v3", "v4"],
      feedbackAcerto: "📚 Estrutura correta! É assim em qualquer dicionário.",
      feedbackErro: "O verbete sempre começa pela palavra que está sendo definida.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho este verbete curto e compare com uma frase de história.",
    leitura: {
      titulo: "Dois jeitos de falar da mesma árvore",
      imagemUrl: arvore,
      destacar: ["s.f.", "árvore de grande porte"],
      paragrafos: [
        "Verbete: figueira s.f. Árvore de grande porte, da família das moráceas, de copa larga e raízes aparentes. Produz frutos comestíveis chamados figos.",
        "História: a velha figueira do quintal parecia um gigante adormecido, e Ana adorava sentar debaixo dela nas tardes de verão.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a diferença principal entre os dois textos?",
        opcoes: [
          "O verbete informa de modo objetivo; a história narra e usa imagens poéticas",
          "Os dois contam a mesma história",
          "O verbete é mais emocionante",
        ],
        correta: 0,
        feedbackAcerto: "📚 Gêneros diferentes têm propósitos diferentes.",
        feedbackErro: "Um dos textos define. O outro narra o que Ana fazia.",
        ondeEstaNoTexto: "figueira s.f. Árvore de grande porte... / a velha figueira do quintal parecia um gigante adormecido",
      },
    ],
  },

  momento_minijogo: {
    titulo: "O Dicionário Embaralhado",
    instrucao: "Coloque as palavras em ordem alfabética para reorganizar a estante.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "O Dicionário Embaralhado",
      bloco: {
        instrucao: "Arraste as palavras da estante para a ordem alfabética correta.",
        itens: [
          { id: "a3", texto: "chuva" },
          { id: "a1", texto: "caderno" },
          { id: "a4", texto: "coruja" },
          { id: "a2", texto: "cavalo" },
        ],
        ordemCerta: ["a1", "a2", "a3", "a4"],
        feedbackAcerto: "📚 Estante organizada: caderno, cavalo, chuva, coruja!",
        feedbackErro: "Todas começam com C. Compare então a segunda letra: a, a, h, o.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Verbete define de forma objetiva e impessoal.",
      "Abreviaturas indicam a classe: s.m., s.f., adj., v.",
      "Sentidos diferentes aparecem numerados.",
      "Ordem alfabética compara letra por letra.",
      "Enciclopédia explica o assunto; dicionário define a palavra.",
    ],
    miniDesafio: {
      pergunta: "Em 'bonito adj.', a abreviatura indica que a palavra é…",
      opcoes: ["um adjetivo", "um advérbio", "um substantivo"],
      correta: 0,
      feedbackAcerto: "📚 adj. = adjetivo, a palavra que caracteriza.",
      feedbackErro: "Leia a abreviatura com calma: adj.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é a principal função de um verbete?",
        opcoes: [
          "Definir e informar de modo objetivo",
          "Emocionar o leitor com uma história",
          "Convencer o leitor a comprar algo",
        ],
        correta: 0,
        feedbackAcerto: "📚 Excelente! Você virou um Enciclopedista do Códice.",
        feedbackErro: "Verbete não narra nem vende: ele informa.",
      },
      {
        pergunta: "Qual sequência está em ordem alfabética?",
        opcoes: [
          "abelha, árvore, bola, casa",
          "casa, bola, árvore, abelha",
          "bola, abelha, casa, árvore",
        ],
        correta: 0,
        feedbackAcerto: "📚 A antes de B antes de C. Perfeito.",
        feedbackErro: "Comece pela letra inicial de cada palavra.",
      },
      {
        pergunta: "Em 'correr v.', a abreviatura significa…",
        opcoes: ["verbo", "vogal", "variação"],
        correta: 0,
        feedbackAcerto: "📚 v. = verbo, a palavra de ação.",
        feedbackErro: "Correr é uma ação. Que classe gramatical indica ação?",
      },
      {
        pergunta: "Qual frase NÃO poderia aparecer em um verbete?",
        opcoes: [
          "Na minha opinião, a coruja é o animal mais bonito.",
          "Ave de rapina de hábitos noturnos.",
          "Alimenta-se de pequenos roedores.",
        ],
        correta: 0,
        feedbackAcerto: "📚 Verbete é impessoal — 'na minha opinião' está proibido.",
        feedbackErro: "Procure a frase que revela o gosto de quem escreveu.",
      },
      {
        pergunta: "Um verbete traz '1.' e '2.' antes das definições. Isso indica que…",
        opcoes: [
          "a palavra tem mais de um sentido",
          "há dois autores",
          "a palavra tem duas sílabas",
        ],
        correta: 0,
        feedbackAcerto: "📚 Cada número é um sentido diferente da mesma palavra.",
        feedbackErro: "Volte ao verbete 'coruja': o sentido 2 era figurado.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "O Verbete da Nossa Casa",
    materiais: ["Papel e lápis", "Um dicionário ou celular"],
    passos: [
      "Escolha um objeto da casa com a família.",
      "Procurem a palavra no dicionário e leiam a abreviatura da classe.",
      "Escrevam juntos um verbete de duas linhas para esse objeto, sem usar opinião.",
      "Confiram se ficou objetivo e impessoal.",
    ],
    registro: "Copie o verbete criado pela família e traga para a aula.",
  },

  recompensa: {
    xp: 120,
    moedas: 40,
    medalha: "📚 Selo de Enciclopedista",
  },
};
