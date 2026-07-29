import type { AulaPortuguesV4 } from "../../types";
import { url as jornal } from "@/assets/neuro-treino/objetos/quadrinhos.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as bombeiro } from "@/assets/neuro-treino/objetos/heroi.png.asset.json";
import { url as praca } from "@/assets/neuro-treino/objetos/praca.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as radio } from "@/assets/neuro-treino/objetos/radio-antigo.png.asset.json";

/**
 * Aula 1 — "Manchete Quente!"
 * -------------------------------------------------------------
 * Abre a Unidade 4 (Redação do Caso). O Clube dos Detetives da
 * Palavra recebe uma missão: cobrir um "caso" real do bairro —
 * um gato preso numa árvore da praça — como se fosse notícia de
 * jornal, aprendendo manchete, lide e corpo.
 *
 * Foco pedagógico:
 *  - Reconhecer o gênero notícia e sua função social (informar).
 *  - Manchete: resume o fato em poucas palavras, chama atenção.
 *  - Lide: responde QUEM, O QUÊ, QUANDO, ONDE, POR QUÊ logo no início.
 *  - Corpo: detalha o que o lide só anunciou.
 *
 * BNCC: EF03LP18, EF03LP19, EF35LP15
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-noticia-quem-o-que",
  titulo: "Manchete Quente!",
  iconeTrilha: "📰",
  bncc: ["EF03LP18", "EF03LP19", "EF35LP15"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Um caso chega à redação do Clube",
    historia:
      "Brilha abriu a porta da sede do Clube dos Detetives da Palavra e encontrou um rádio antigo chiando: 'Atenção, detetives! Um gato ficou preso numa árvore da praça central!' — Isso é notícia! — disse Brilha. — E notícia precisa de MANCHETE, LIDE e CORPO. Vamos escrever essa reportagem juntos?",
    imagemUrl: radio,
  },

  momento02_previsao: {
    instrucao:
      "Antes de escrever a notícia, olhe o cartaz que a repórter Ana deixou na mesa. O que ele pode estar anunciando?",
    bloco: {
      titulo: "O caso do gato na árvore",
      capaImagemUrl: jornal,
      pistas: [
        { imagemUrl: gato, nome: "Um gato" },
        { imagemUrl: arvore, nome: "Uma árvore" },
      ],
      recado: {
        rotulo: "Cartaz da praça",
        icone: "📢",
        linhas: [
          "URGENTE!",
          "Gato preso em árvore alta.",
          "Bombeiros já foram chamados.",
        ],
        estilo: "cartaz",
      },
      pergunta: "Sobre o que essa notícia vai falar?",
      hipoteses: [
        { texto: "Um gato que subiu numa árvore e não consegue descer.", imagemUrl: gato },
        { texto: "Uma receita de bolo de cenoura.", imagemUrl: jornal },
        { texto: "Um campeonato de futebol.", imagemUrl: praca },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! O cartaz já é quase uma notícia: ele avisa o fato principal antes de qualquer detalhe.",
      feedbackErro:
        "Releia o cartaz: ele fala de um GATO, uma ÁRVORE e BOMBEIROS. Junte as pistas — é sobre um resgate de gato.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda notícia usa palavras especiais. Conheça 3 delas.",
    cards: [
      {
        palavra: "manchete",
        explicacao:
          "É o título grande da notícia. Resume o fato em poucas palavras pra chamar a atenção de quem lê.",
        exemplo: "Manchete: 'Gato é resgatado em árvore da praça!'",
        imagemUrl: jornal,
      },
      {
        palavra: "lide",
        explicacao:
          "É o primeiro parágrafo da notícia. Nele já aparecem as respostas de QUEM, O QUÊ, QUANDO, ONDE e POR QUÊ.",
        exemplo:
          "'Ontem de manhã (quando), um gato (quem) ficou preso numa árvore da Praça das Flores (onde) porque fugiu de um cachorro (por quê).'",
        imagemUrl: radio,
      },
      {
        palavra: "repórter",
        explicacao: "É a pessoa que investiga o fato e escreve a notícia pra todo mundo saber.",
        exemplo: "A repórter Ana foi até a praça conversar com quem viu tudo.",
        imagemUrl: menina,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler a notícia que a repórter Ana escreveu sobre o caso do gato.",
    leitura: {
      titulo: "Gato é resgatado em árvore da praça",
      imagemUrl: bombeiro,
      legendaImagem: "Os bombeiros chegaram para ajudar",
      destacar: ["quem", "quando", "onde", "por quê"],
      paragrafos: [
        "Ontem de manhã, um gato cinza ficou preso no topo de uma árvore da Praça das Flores, no centro da cidade, depois de fugir de um cachorro assustado.",
        "Moradores chamaram os bombeiros, que chegaram em quinze minutos com uma escada comprida.",
        "O bombeiro Marcos subiu com cuidado e trouxe o gato são e salvo. A dona do gato, dona Célia, agradeceu chorando de alegria.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "QUEM ficou preso na árvore?",
        opcoes: ["Um cachorro", "Um gato cinza", "Um passarinho"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Um GATO CINZA ficou preso...' — essa é a resposta de QUEM.",
        feedbackErro: "Releia o primeiro parágrafo: quem 'ficou preso no topo da árvore'?",
        ondeEstaNoTexto: "…um gato cinza ficou preso no topo de uma árvore…",
      },
      {
        pergunta: "ONDE aconteceu o caso?",
        opcoes: ["Na escola", "Na Praça das Flores", "No mercado"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! O lide diz claramente o lugar: PRAÇA DAS FLORES.",
        feedbackErro: "O nome do lugar aparece logo depois de 'árvore de uma'.",
        ondeEstaNoTexto: "…uma árvore da Praça das Flores, no centro da cidade…",
      },
      {
        pergunta: "POR QUE o gato subiu na árvore?",
        opcoes: [
          "Porque quis brincar",
          "Porque fugiu de um cachorro assustado",
          "Porque estava com fome",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! O POR QUÊ está no final da primeira frase.",
        feedbackErro: "A frase termina explicando o motivo — procure a palavra 'depois de'.",
        ondeEstaNoTexto: "…depois de fugir de um cachorro assustado.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Toda notícia real tem pessoas envolvidas e um lugar certo. Vamos identificar.",
    perguntas: [
      {
        pergunta: "Quem são as pessoas que aparecem ajudando no caso?",
        opcoes: [
          "Só a repórter Ana",
          "O bombeiro Marcos e dona Célia",
          "Um professor e um médico",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! O bombeiro MARCOS resgatou o gato, e DONA CÉLIA é a dona dele.",
        feedbackErro: "Releia o segundo e o terceiro parágrafo — procure os nomes próprios.",
      },
      {
        pergunta: "Em quanto tempo os bombeiros chegaram?",
        opcoes: ["Em uma hora", "Em quinze minutos", "No dia seguinte"],
        correta: 1,
        feedbackAcerto: "🎉 Exato! O texto diz 'chegaram em QUINZE MINUTOS'.",
        feedbackErro: "A informação de tempo está no segundo parágrafo, logo depois de 'bombeiros'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque os fatos da notícia na ordem em que aconteceram.",
    bloco: {
      instrucao: "Começo → meio → fim do caso.",
      itens: [
        { id: "s1", texto: "O gato fugiu do cachorro e subiu na árvore.", imagemUrl: gato },
        { id: "s2", texto: "Os moradores chamaram os bombeiros.", imagemUrl: praca },
        { id: "s3", texto: "O bombeiro Marcos subiu na escada e resgatou o gato.", imagemUrl: bombeiro },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🎉 Isso mesmo! Você reconstruiu o caso na ordem certa dos fatos.",
      feedbackErro:
        "Pense: primeiro o gato SOBE (fuga). Depois os moradores PEDEM ajuda. Por último, o bombeiro RESGATA.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho essa nova notícia curta e responda.",
    leitura: {
      titulo: "Escola ganha nova biblioteca",
      imagemUrl: escola,
      destacar: ["sexta-feira", "diretora"],
      paragrafos: [
        "Na sexta-feira, a Escola Municipal Aurora inaugurou uma biblioteca nova, com mais de mil livros.",
        "A diretora Sandra cortou a fita de inauguração e disse que os alunos já podem pegar livros emprestados.",
      ],
    },
    perguntas: [
      {
        pergunta: "QUANDO a biblioteca foi inaugurada?",
        opcoes: ["Na segunda-feira", "Na sexta-feira", "No sábado"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Na SEXTA-FEIRA...' abre a notícia.",
        feedbackErro: "A palavra de tempo é a primeira da notícia.",
        ondeEstaNoTexto: "Na sexta-feira, a Escola Municipal Aurora inaugurou…",
      },
      {
        pergunta: "QUEM cortou a fita de inauguração?",
        opcoes: ["Um aluno", "A diretora Sandra", "Um bombeiro"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! A DIRETORA SANDRA cortou a fita.",
        feedbackErro: "O nome próprio aparece no segundo parágrafo.",
        ondeEstaNoTexto: "A diretora Sandra cortou a fita de inauguração…",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "MANCHETE é o título que resume o fato e chama atenção.",
      "LIDE é o primeiro parágrafo: responde QUEM, O QUÊ, QUANDO, ONDE, POR QUÊ.",
      "CORPO da notícia detalha o que o lide já anunciou.",
      "Notícia conta fatos reais que aconteceram — por isso tem nomes, lugares e horários.",
    ],
    miniDesafio: {
      pergunta: "O primeiro parágrafo de uma notícia, que já traz as informações principais, se chama…",
      opcoes: ["Manchete", "Lide", "Rodapé"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! É o LIDE — o resumo completo logo no início.",
      feedbackErro: "A manchete é só o título. O parágrafo com QUEM/O QUÊ/QUANDO/ONDE/POR QUÊ é o LIDE.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Para que serve uma notícia?",
        opcoes: ["Para contar uma fábula", "Para informar um fato real", "Para ensinar uma receita"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Notícia serve para INFORMAR fatos reais.",
        feedbackErro: "Notícia não inventa história — ela INFORMA o que aconteceu de verdade.",
      },
      {
        pergunta: "2/5 — A manchete é...",
        opcoes: ["O título que resume o fato", "O nome do jornal", "A última frase do texto"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Manchete é o título que resume e chama atenção.",
        feedbackErro: "Pense no que vem primeiro, em letras grandes, no topo da notícia: a manchete.",
      },
      {
        pergunta: "3/5 — O lide responde a quantas perguntas principais?",
        opcoes: ["Duas", "Cinco (quem, o quê, quando, onde, por quê)", "Nenhuma"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! São CINCO perguntas no lide.",
        feedbackErro: "Conte: quem, o quê, quando, onde, por quê — são cinco.",
      },
      {
        pergunta: "4/5 — No caso do gato, QUEM resgatou o animal?",
        opcoes: ["A repórter Ana", "O bombeiro Marcos", "Dona Célia"],
        correta: 1,
        feedbackAcerto: "🎉 Isso mesmo, o bombeiro Marcos subiu na escada e resgatou.",
        feedbackErro: "Releia: quem subiu na escada com cuidado?",
      },
      {
        pergunta: "5/5 — Uma boa notícia deve contar...",
        opcoes: ["Só o que o repórter imaginou", "Fatos verdadeiros e checados", "Segredos de outras pessoas"],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! Notícia de verdade conta FATOS reais e conferidos.",
        feedbackErro: "Notícia não é invenção — precisa ser um FATO verdadeiro.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Seja repórter por um dia",
    materiais: ["Papel e lápis (ou celular da família para gravar áudio)"],
    passos: [
      "1) Observe algo que aconteceu hoje na sua casa ou no seu bairro (mesmo pequeno, como 'o cachorro fugiu do quintal').",
      "2) Escreva ou grave uma manchete curta para esse fato.",
      "3) Depois escreva o lide: QUEM, O QUÊ, QUANDO, ONDE e POR QUÊ, tudo em uma ou duas frases.",
      "4) Leia sua notícia para a família como se fosse um jornal de verdade.",
    ],
    registro: "📝 A manchete e o lide escritos (ou gravados em áudio) para trazer na próxima aula.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
