import type { AulaPortuguesV4 } from "../../types";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 7 · Aula 1 — A Batida Forte das Palavras
 * ---------------------------------------------------------------
 * Fase 5 do contrato do 2º ano: consciência fonológica avançada.
 * Foco: SÍLABA TÔNICA (a sílaba que a gente fala mais forte) e a
 * ortografia da nasalidade — M antes de P e B.
 *
 * BNCC: EF02LP02 · EF02LP05 · EF02LP08
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-batida-forte",
  titulo: "A Batida Forte das Palavras",
  iconeTrilha: "🥁",
  bncc: ["EF02LP02", "EF02LP05", "EF02LP08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O tambor da Oficina dos Sons",
    historia:
      "No porão da Biblioteca, Brilha encontrou uma sala cheia de tambores. Aurora explicou: — Aqui é a OFICINA DOS SONS. Toda palavra tem uma batida mais forte. Se você descobrir onde a palavra bate forte, vai ler e escrever muito melhor. Bata com a mão e escute!",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao:
      "Antes de entrar na oficina, olhe o título do livro e adivinhe do que ele fala.",
    bloco: {
      titulo: "O Tambor das Sílabas",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: estrela, nome: "Uma batida forte" },
        { imagemUrl: livros, nome: "Palavras" },
      ],
      pergunta: "Antes de ler: sobre o que essa história vai falar?",
      hipoteses: [
        { texto: "Sobre bater palma nos pedaços das palavras.", imagemUrl: estrela },
        { texto: "Sobre um cachorro que toca violão.", imagemUrl: livro },
        { texto: "Sobre uma viagem de trem para a praia.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! O título fala de TAMBOR e de SÍLABAS — os pedaços da palavra.",
      feedbackErro:
        "Leia o título de novo: 'O Tambor das Sílabas'. Sílaba é o pedacinho da palavra que a gente bate com a palma.",
      dica: "A palavra SÍLABAS está no título. Qual opção fala de pedaços de palavras?",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras da oficina antes de começar.",
    cards: [
      {
        palavra: "sílaba",
        explicacao: "É cada pedacinho da palavra que a gente fala numa batida só: BO-NE-CA.",
        exemplo: "A palavra ESCOLA tem três sílabas: ES-CO-LA.",
        imagemUrl: livros,
      },
      {
        palavra: "tônica",
        explicacao: "É a sílaba mais FORTE da palavra, a que a gente fala mais alto.",
        exemplo: "Em BONECA, a sílaba forte é NE.",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Onde a palavra bate mais forte",
    instrucao:
      "Toque em 🔊 para ouvir a palavra e depois em cada pedaço. Escolha o pedaço que a voz fala MAIS FORTE.",
    blocos: [
      {
        tipo: "silabaTonica",
        itens: [
          {
            palavra: "BONECA",
            silabas: ["BO", "NE", "CA"],
            tonica: 1,
            imagemUrl: estrela,
            explicacao: "A força cai no meio: bo-NE-ca.",
          },
          {
            palavra: "SAPATO",
            silabas: ["SA", "PA", "TO"],
            tonica: 1,
            explicacao: "sa-PA-to: a batida forte é a do meio.",
          },
          {
            palavra: "CAFÉ",
            silabas: ["CA", "FÉ"],
            tonica: 1,
            explicacao: "ca-FÉ: a força está no fim, e por isso leva acento.",
          },
          {
            palavra: "ÁRVORE",
            silabas: ["ÁR", "VO", "RE"],
            tonica: 0,
            imagemUrl: livro,
            explicacao: "ÁR-vo-re: a força está no começo.",
          },
          {
            palavra: "JANELA",
            silabas: ["JA", "NE", "LA"],
            tonica: 1,
            explicacao: "ja-NE-la: bata palma e sinta o meio mais forte.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "Antes de P e de B, escreve-se M",
        explicacao:
          "Quando o som é anasalado e vem antes das letras P ou B, a gente escreve M — nunca N.",
        exemplos: [
          { palavra: "campo", destaque: "mp", motivo: "M antes de P." },
          { palavra: "bomba", destaque: "mb", motivo: "M antes de B." },
          { palavra: "tempo", destaque: "mp", motivo: "M antes de P." },
          { palavra: "tambor", destaque: "mb", motivo: "M antes de B." },
        ],
        desafios: [
          {
            molde: "ca_po",
            opcoes: ["m", "n"],
            correta: 0,
            frase: "O boi está no CAMPO.",
            feedbackErro: "Antes de P sempre vai M: CAMPO.",
          },
          {
            molde: "ta_bor",
            opcoes: ["n", "m"],
            correta: 1,
            frase: "Brilha bateu no TAMBOR.",
            feedbackErro: "Antes de B sempre vai M: TAMBOR.",
          },
          {
            molde: "te_po",
            opcoes: ["m", "n"],
            correta: 0,
            frase: "O TEMPO da chuva passou.",
            feedbackErro: "Antes de P sempre vai M: TEMPO.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto comigo. Bata palma nas palavras destacadas.",
    leitura: {
      titulo: "O Tambor das Sílabas",
      imagemUrl: bibliotecaria,
      legendaImagem: "Aurora ensina a bater as sílabas",
      destacar: ["tambor", "sílaba", "forte", "campo"],
      paragrafos: [
        "Aurora pegou um tambor pequeno e bateu três vezes: bo-ne-ca.",
        "— Cada batida é uma sílaba — disse ela. — Mas uma delas soa mais forte.",
        "Brilha bateu de novo e sentiu: em boneca, a sílaba forte é NE. No campo, atrás da biblioteca, o eco repetiu a batida.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão escritas no texto. Pode voltar e procurar.",
    perguntas: [
      {
        pergunta: "Quantas batidas Aurora deu no tambor?",
        opcoes: ["Duas", "Três", "Cinco"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Três batidas: bo-ne-ca.",
        feedbackErro: "Está no primeiro parágrafo: 'bateu três vezes'.",
        dica: "Procure no texto a palavra 'bateu'. O número está bem perto dela.",
        reensino:
          "Vamos entender juntos: cada batida é uma sílaba. BO-NE-CA tem três pedaços, então foram três batidas.",
        ondeEstaNoTexto: "…bateu três vezes: bo-ne-ca.",
      },
      {
        pergunta: "Qual é a sílaba forte de BONECA?",
        opcoes: ["BO", "NE", "CA"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! bo-NE-ca.",
        feedbackErro: "Está no último parágrafo: 'a sílaba forte é NE'.",
        dica: "Fale a palavra bem alto. O pedaço que sai mais forte é a resposta.",
        reensino:
          "Vamos entender juntos: fale BONECA devagar. A voz sobe no meio, em NE. Essa é a sílaba tônica.",
        ondeEstaNoTexto: "…em boneca, a sílaba forte é NE.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Personagem é quem faz. Cenário é onde acontece.",
    perguntas: [
      {
        pergunta: "Quem ensina Brilha a bater as sílabas?",
        opcoes: ["Piu", "Aurora", "O tambor"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Aurora, a bibliotecária.",
        feedbackErro: "Procure quem fala no texto: '— Cada batida é uma sílaba — disse ela'.",
        dica: "Personagem é quem age. Quem pegou o tambor?",
      },
      {
        pergunta: "Onde o eco repetiu a batida?",
        opcoes: ["No campo atrás da biblioteca", "Na cozinha", "No trem"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! No CAMPO atrás da biblioteca.",
        feedbackErro: "Está no último parágrafo, depois da palavra 'No…'.",
        dica: "Cenário é o lugar. Procure um lugar no fim do texto.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque a cena na ordem em que aconteceu.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Aurora pega o tambor pequeno.", imagemUrl: bibliotecaria },
        { id: "p2", texto: "Ela bate três vezes: bo-ne-ca.", imagemUrl: estrela },
        { id: "p3", texto: "Brilha descobre que a sílaba forte é NE.", imagemUrl: brilha },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Essa é a ordem da cena.",
      feedbackErro: "Primeiro ela PEGA o tambor, depois BATE, e só então Brilha DESCOBRE.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "O eco do campo",
      imagemUrl: livros,
      destacar: ["campo", "tambor", "forte"],
      paragrafos: [
        "Brilha correu para o campo com o tambor na mão.",
        "Cada palavra que ele batia voltava em eco: SA-PA-TO, JA-NE-LA, CA-FÉ.",
        "O eco só devolvia bem alto a sílaba forte de cada palavra.",
      ],
    },
    perguntas: [
      {
        pergunta: "Para onde Brilha correu com o tambor?",
        opcoes: ["Para o campo", "Para a escola", "Para o rio"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Para o CAMPO.",
        feedbackErro: "Está na primeira frase, logo depois de 'correu para o…'.",
        dica: "A resposta está na primeira linha do texto.",
        reensino:
          "Vamos entender juntos: leia só a primeira frase. O lugar aparece logo depois de 'correu para'.",
        ondeEstaNoTexto: "Brilha correu para o campo…",
      },
      {
        pergunta: "O que o eco devolvia bem alto?",
        opcoes: ["A primeira letra", "A sílaba forte", "O nome de Brilha"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! A SÍLABA FORTE.",
        feedbackErro: "Está na última frase do texto.",
        dica: "Leia a última frase com calma.",
        reensino:
          "Vamos entender juntos: o eco repete o que soa mais alto — e o que soa mais alto é a sílaba tônica.",
        ondeEstaNoTexto: "…só devolvia bem alto a sílaba forte de cada palavra.",
      },
    ],
  },

  momento_fluencia: {
    titulo: "Ler três vezes: O eco do campo",
    instrucao:
      "Vamos ler o mesmo trechinho três vezes: em eco comigo, depois no cronômetro e mais uma vez. Não é corrida — é para a leitura ficar solta.",
    texto: [
      "Brilha correu para o campo com o tambor na mão.",
      "Cada palavra que ele batia voltava em eco.",
      "O eco devolvia bem alto a sílaba forte.",
    ],
    metaSegundos: 22,
  },

  momento09_revisao: {
    pontos: [
      "Sílaba é o pedacinho da palavra que a gente bate numa palma só.",
      "Em toda palavra existe UMA sílaba mais forte: a sílaba tônica.",
      "Antes de P e de B escreve-se sempre M: CAMPO, TAMBOR, TEMPO, BOMBA.",
    ],
    miniDesafio: {
      pergunta: "Qual palavra está escrita do jeito certo?",
      opcoes: ["canpo", "campo", "cambo"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Antes de P vai M: CAMPO.",
      feedbackErro: "Lembre da regra: antes de P e de B sempre vai M.",
      dica: "Olhe a letra que vem depois da lacuna. Se for P ou B, use M.",
      reensino:
        "Vamos entender juntos: a regra é antes de P e de B, escreve-se M. Em ca_po vem P, então é CAMPO.",
    },
  },

  momento_escrita: {
    titulo: "Oficina de Escrita",
    instrucao: "Ouça, monte com as peças e depois escreva de verdade.",
    blocos: [
      {
        tipo: "ditadoSilabas",
        palavras: [
          {
            palavra: "TAMBOR",
            silabas: ["TAM", "BOR"],
            distratores: ["CAM", "PO"],
            dica: "Antes de B vai M: TAM-BOR.",
          },
          {
            palavra: "CAMPO",
            silabas: ["CAM", "PO"],
            distratores: ["TAM", "BOR"],
            dica: "Antes de P vai M: CAM-PO.",
          },
          {
            palavra: "BONECA",
            silabas: ["BO", "NE", "CA"],
            distratores: ["TA", "LO"],
            dica: "Três palmas: BO-NE-CA.",
          },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
          {
            frase: "O tambor tocou no campo.",
            palavras: ["O", "tambor", "tocou", "no", "campo."],
            distratores: ["não", "muito"],
            dica: "A primeira palavra é maiúscula e a última tem ponto final.",
          },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Lista de palavras com M antes de P e B",
        comando: "Escreva 4 palavras que tenham M antes de P ou de B.",
        linhas: 4,
        cicloRevisao: true,
        checklist: [
          "Escrevi uma palavra em cada linha.",
          "Todas têm M antes de P ou de B.",
          "Li em voz alta para conferir.",
        ],
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Quantas sílabas tem a palavra SAPATO?",
        opcoes: ["Duas", "Três", "Quatro", "Uma"],
        correta: 1,
        feedbackOpcoes: [
          "«Duas» não é a resposta. A certa é «Três».",
          null,
          "«Quatro» não é a resposta. A certa é «Três».",
          "«Uma» não é a resposta. A certa é «Três».",
        ],
        feedbackAcerto: "🎉 SA-PA-TO: três palmas!",
        feedbackErro: "Bata palma junto: SA-PA-TO. São três batidas.",
        dica: "Bata uma palma em cada pedaço da palavra.",
        reensino:
          "Vamos entender juntos: cada batida de palma é uma sílaba. SA (1) PA (2) TO (3).",
      },
      {
        pergunta: "2/5 — Qual é a sílaba FORTE de JANELA?",
        opcoes: ["JA", "NE", "LA", "JANE"],
        correta: 1,
        feedbackOpcoes: [
          "«JA» não é a resposta. A certa é «NE».",
          null,
          "«LA» não é a resposta. A certa é «NE».",
          "«JANE» não é a resposta. A certa é «NE».",
        ],
        feedbackAcerto: "🎉 ja-NE-la!",
        feedbackErro: "Fale alto: ja-NE-la. A voz sobe no meio.",
        dica: "A sílaba forte é a que sai mais alta quando você fala.",
        reensino:
          "Vamos entender juntos: fale a palavra como se estivesse chamando alguém. O pedaço que fica mais alto é o tônico.",
      },
      {
        pergunta: "3/5 — Como se escreve certo?",
        opcoes: ["tenpo", "tempo", "tembo", "tenbo"],
        correta: 1,
        feedbackOpcoes: [
          "«tenpo» não é a resposta. A certa é «tempo».",
          null,
          "«tembo» não é a resposta. A certa é «tempo».",
          "«tenbo» não é a resposta. A certa é «tempo».",
        ],
        feedbackAcerto: "🎉 TEMPO — M antes de P.",
        feedbackErro: "Antes de P e de B sempre vai M.",
        dica: "Veja a letra depois da lacuna: é P. Então vai M.",
        reensino: "Vamos entender juntos: a regra é M antes de P e de B. Por isso TEMPO.",
      },
      {
        pergunta: "4/5 — Em qual palavra a sílaba forte está no COMEÇO?",
        opcoes: ["CAFÉ", "ÁRVORE", "BONECA", "JANELA"],
        correta: 1,
        feedbackOpcoes: [
          "«CAFÉ» não é a resposta. A certa é «ÁRVORE».",
          null,
          "«BONECA» não é a resposta. A certa é «ÁRVORE».",
          "«JANELA» não é a resposta. A certa é «ÁRVORE».",
        ],
        feedbackAcerto: "🎉 ÁR-vo-re: força no começo.",
        feedbackErro: "Fale cada palavra alto e sinta onde a voz sobe.",
        dica: "Só uma delas tem acento logo na primeira sílaba.",
        reensino:
          "Vamos entender juntos: em ÁRVORE a voz já sai forte no primeiro pedaço, ÁR.",
      },
      {
        pergunta: "5/5 — O que é uma sílaba?",
        opcoes: [
          "Uma letra sozinha",
          "Um pedacinho da palavra falado numa batida",
          "O nome de um livro",
          "Um sinal de pontuação",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Uma letra sozinha» não é a resposta. A certa é «Um pedacinho da palavra falado numa batida».",
          null,
          "«O nome de um livro» não é a resposta. A certa é «Um pedacinho da palavra falado numa batida».",
          "«Um sinal de pontuação» não é a resposta. A certa é «Um pedacinho da palavra falado numa batida».",
        ],
        feedbackAcerto: "🎉 Isso mesmo! Sílaba é a batida da palavra.",
        feedbackErro: "Sílaba é o pedaço que a gente fala numa palma só.",
        dica: "Lembre do tambor de Aurora: cada batida era um pedaço da palavra.",
        reensino:
          "Vamos entender juntos: BO-NE-CA são três batidas, ou seja, três sílabas.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 O tambor das palavras em casa",
    materiais: ["Uma panela ou a própria mão para bater na mesa"],
    passos: [
      "1) Escolham 5 nomes da família (MA-RI-A, JO-ÃO…).",
      "2) A criança bate uma palma para cada sílaba.",
      "3) Depois, todos falam o nome bem alto e adivinham qual é a sílaba FORTE.",
      "4) Procurem juntos, num rótulo ou embalagem, uma palavra com M antes de P ou B.",
    ],
    registro: "📝 Escreva a palavra com M que vocês encontraram em casa.",
  },

  recompensa: { xp: 110, moedas: 65 },
};
