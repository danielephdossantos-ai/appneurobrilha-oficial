import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";

/**
 * Unidade 3 · Aula 1 — O Construtor de Palavras
 * -------------------------------------------------------------
 * Brilha entra na Oficina das Palavras. Milhares de letras e sílabas
 * espalhadas pelo chão. A missão dessa primeira aula é aprender que
 * PALAVRAS são feitas de SÍLABAS — e que juntando as sílabas na ordem
 * certa a gente reconstrói cada palavra da Biblioteca.
 *
 * BNCC: EF02LP06 · EF02LP07 · EF02LP08
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-construtor-palavras",
  titulo: "O Construtor de Palavras",
  iconeTrilha: "🔤",
  bncc: ["EF02LP06", "EF02LP07", "EF02LP08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A Oficina das Palavras",
    historia:
      "Brilha abre uma sala nova da biblioteca. No chão: milhares de LETRAS e SÍLABAS! Aurora explica: — As palavras dos livros se DESMONTARAM. Precisamos remontar cada uma. Toma esse Montador de Palavras! Cada palavra que a gente reconstruir devolve uma página à Biblioteca Encantada.",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao:
      "Duas peças apareceram na tela. Antes de juntar, adivinha: que palavra vai formar?",
    bloco: {
      titulo: "As duas peças",
      recado: {
        icone: "🔤",
        rotulo: "As peças no chão",
        estilo: "cartaz",
        linhas: ["CA   +   SA"],
      },
      pergunta: "Se a gente juntar CA + SA, que palavra vai formar?",
      hipoteses: [
        { texto: "CASA — o lugar onde a gente mora.", imagemUrl: casa },
        { texto: "SACO — pra guardar coisa.", imagemUrl: papel },
        { texto: "CAJU — uma fruta.", imagemUrl: banana },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 CASA! CA + SA = CASA. Cada pedacinho desses é uma SÍLABA.",
      feedbackErro: "Fala em voz alta: CA-SA. Repare: junta CA com SA. Que palavra fica?",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras da oficina.",
    cards: [
      {
        palavra: "sílaba",
        explicacao:
          "É cada PEDACINHO da palavra. A gente sente batendo palma: CA (1) SA (2) → 2 sílabas.",
        exemplo: "BO-LA tem duas sílabas: BO e LA.",
        imagemUrl: papel,
      },
      {
        palavra: "montar",
        explicacao:
          "É JUNTAR as sílabas na ORDEM certa pra formar uma palavra.",
        exemplo: "LI + VRO = LIVRO. Montamos a palavra LIVRO.",
        imagemUrl: livro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Brilha explica bem devagar. Leia junto e bata palma em cada sílaba.",
    leitura: {
      titulo: "Como a palavra é feita",
      imagemUrl: brilha,
      legendaImagem: "Brilha ensinando",
      destacar: ["sílabas", "juntas", "palavra"],
      paragrafos: [
        "Toda palavra é feita de pedacinhos chamados SÍLABAS.",
        "Quando a gente JUNTA as sílabas na ordem certa, forma uma PALAVRA.",
        "Ex.: BO + LA → BOLA. JA + NE + LA → JANELA.",
        "Se a gente errar a ordem (LA + BO), a palavra não faz sentido.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Bata palma em cada sílaba enquanto responde.",
    perguntas: [
      {
        pergunta: "Quantas sílabas tem a palavra CA-SA?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        feedbackAcerto: "🎉 2 sílabas: CA e SA.",
        feedbackErro: "Fala devagar: CA (1) - SA (2). São 2 sílabas.",
        dica: "Volte no texto e procure a parte que fala de 'quantas'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Fala devagar: CA (1) - SA (2). São 2 sílabas. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Quantas sílabas tem BA-NA-NA?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        feedbackAcerto: "🎉 3 sílabas: BA - NA - NA.",
        feedbackErro: "BA (1) - NA (2) - NA (3). Três palmas.",
        dica: "Volte no texto e procure a parte que fala de 'quantas'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: BA (1) - NA (2) - NA (3). Três palmas. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "JA + NE + LA forma qual palavra?",
        opcoes: ["JALENA", "JANELA", "LANEJA"],
        correta: 1,
        feedbackAcerto: "🎉 JANELA! Sílabas na ordem certa.",
        feedbackErro: "Junte na ORDEM: JA + NE + LA = JANELA.",
        dica: "Volte no texto e procure a parte que fala de 'forma'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Junte na ORDEM: JA + NE + LA = JANELA. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Na Oficina, as SÍLABAS são as 'personagens'. Vamos treinar.",
    perguntas: [
      {
        pergunta: "Se eu troco a ORDEM das sílabas, a palavra…",
        opcoes: [
          "Fica igual",
          "Pode virar outra coisa ou não fazer sentido",
          "Some pra sempre",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! CASA ≠ SACA. Ordem importa.",
        feedbackErro:
          "CA-SA e SA-CA usam as mesmas sílabas mas em ordens diferentes — viram palavras diferentes.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Como a gente descobre quantas sílabas uma palavra tem?",
        opcoes: [
          "Batendo palma em cada pedaço",
          "Contando as letras",
          "Adivinhando",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Palmas! Cada palma = 1 sílaba.",
        feedbackErro:
          "Falar batendo PALMA em cada pedaço ajuda a contar as sílabas.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "As sílabas de JANELA se embaralharam. Coloque na ORDEM certa pra formar a palavra.",
    bloco: {
      instrucao: "JA-NE-LA — encontre a ordem.",
      itens: [
        { id: "s1", texto: "JA", imagemUrl: papel },
        { id: "s2", texto: "NE", imagemUrl: papel },
        { id: "s3", texto: "LA", imagemUrl: papel },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🎉 JA + NE + LA = JANELA!",
      feedbackErro:
        "Fala devagar: JA - NE - LA. A primeira sílaba é JA, depois NE, depois LA.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda contando as sílabas.",
    leitura: {
      titulo: "Contando sílabas",
      imagemUrl: escola,
      destacar: ["ESCOLA", "LIVRO", "BANANA"],
      paragrafos: [
        "Brilha treina em três palavras da biblioteca:",
        "ES-CO-LA · LI-VRO · BA-NA-NA.",
        "Cada risquinho separa uma sílaba.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantas sílabas tem ES-CO-LA?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        feedbackAcerto: "🎉 3 sílabas!",
        feedbackErro: "Conte os risquinhos + 1: ES-CO-LA → 3 pedaços.",
        dica: "Volte no texto e procure a parte que fala de 'quantas'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Conte os risquinhos + 1: ES-CO-LA → 3 pedaços. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "ES-CO-LA",
      },
      {
        pergunta: "Quantas sílabas tem LI-VRO?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        feedbackAcerto: "🎉 2 sílabas: LI e VRO.",
        feedbackErro: "LI (1) - VRO (2). Dois pedaços.",
        dica: "Volte no texto e procure a parte que fala de 'quantas'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: LI (1) - VRO (2). Dois pedaços. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "LI-VRO",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Oficina das Sílabas",
    instrucao:
      "Cinco palavras precisam ser remontadas. Toque nas sílabas na ordem certa!",
    jogo: {
      tipo: "montarPalavra",
      titulo: "🧩 Oficina das Sílabas",
      bloco: {
        instrucao: "Monte cada palavra usando as sílabas.",
        palavras: [
          {
            id: "w1",
            palavraCerta: "CASA",
            silabas: ["CA", "SA"],
            imagemUrl: casa,
            frase: "A CASA da Brilha fica na floresta.",
          },
          {
            id: "w2",
            palavraCerta: "BOLA",
            silabas: ["BO", "LA"],
            imagemUrl: bola,
            frase: "A BOLA rolou pelo parque.",
          },
          {
            id: "w3",
            palavraCerta: "LIVRO",
            silabas: ["LI", "VRO"],
            imagemUrl: livro,
            frase: "Aurora abriu um LIVRO antigo.",
          },
          {
            id: "w4",
            palavraCerta: "BANANA",
            silabas: ["BA", "NA", "NA"],
            imagemUrl: banana,
            frase: "O macaco adora BANANA madura.",
          },
          {
            id: "w5",
            palavraCerta: "ESCOLA",
            silabas: ["ES", "CO", "LA"],
            imagemUrl: escola,
            frase: "A ESCOLA fica ao lado da biblioteca.",
          },
        ],
        feedbackAcerto: "🎉 Palavra remontada! A biblioteca ganhou uma página de volta.",
        feedbackErro:
          "Fala em voz alta a palavra devagar, escutando cada sílaba. Depois arrasta na ordem que você falou.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PALAVRAS são feitas de pedacinhos chamados SÍLABAS.",
      "A gente descobre quantas sílabas tem BATENDO PALMA em cada pedaço.",
      "MONTAR = juntar as sílabas na ORDEM certa.",
      "Se muda a ordem, muda a palavra (CASA ≠ SACA).",
    ],
    miniDesafio: {
      pergunta: "GA + TO forma qual palavra?",
      opcoes: ["TOGA", "GATO", "GOTA"],
      correta: 1,
      feedbackAcerto: "🎉 GATO! GA + TO = GATO. 🐱",
      feedbackErro: "Ordem: GA vem primeiro, depois TO. Junte: GA-TO.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Ordem: GA vem primeiro, depois TO. Junte: GA-TO. Agora leia de novo e escolha com calma.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Quantas sílabas em CA-SA?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        feedbackAcerto: "🎉 2.",
        feedbackErro: "CA (1) SA (2) = 2 sílabas.",
        dica: "Pista: a resposta certa começa com a letra '2'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: CA (1) SA (2) = 2 sílabas. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — Quantas sílabas em BA-NA-NA?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        feedbackAcerto: "🎉 3.",
        feedbackErro: "BA-NA-NA = 3 palmas.",
        dica: "Pista: a resposta certa começa com a letra '3'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: BA-NA-NA = 3 palmas. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — SA + PA + TO forma…",
        opcoes: ["PATOSA", "SAPATO", "TAPOSA"],
        correta: 1,
        feedbackAcerto: "🎉 SAPATO!",
        feedbackErro: "Junta na ORDEM: SA + PA + TO = SAPATO.",
        dica: "Pista: a resposta certa começa com a letra 'S'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Junta na ORDEM: SA + PA + TO = SAPATO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — GA + TO forma…",
        opcoes: ["GATO", "TAGO", "TOGA"],
        correta: 0,
        feedbackAcerto: "🎉 GATO 🐱",
        feedbackErro: "GA vem antes de TO. GATO.",
        dica: "Pista: a resposta certa começa com a letra 'T'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: GA vem antes de TO. GATO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Palavra é feita de…",
        opcoes: ["Só desenhos", "Sílabas juntadas em ordem", "Números"],
        correta: 1,
        feedbackAcerto: "🎉 Sílabas em ordem!",
        feedbackErro: "Palavra = SÍLABAS juntadas na ordem certa.",
        dica: "Pista: a resposta certa começa com a letra 'S'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Palavra = SÍLABAS juntadas na ordem certa. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Cinco objetos, cinco palavras batidas",
    materiais: ["Uma volta pela casa"],
    passos: [
      "1) A criança escolhe 5 objetos da casa (colher, cadeira, panela…).",
      "2) Fala cada um em VOZ ALTA, batendo palma em cada sílaba.",
      "3) Conta quantas sílabas cada palavra tem.",
      "4) Depois, tenta separar as sílabas escrevendo: CO-LHER, CA-DEI-RA.",
      "5) Contem juntos qual palavra tem MAIS sílabas.",
    ],
    registro:
      "📸 Uma foto dos 5 objetos com a quantidade de sílabas anotada ao lado.",
  },

  recompensa: { xp: 120, moedas: 70 },
};

void gato;
