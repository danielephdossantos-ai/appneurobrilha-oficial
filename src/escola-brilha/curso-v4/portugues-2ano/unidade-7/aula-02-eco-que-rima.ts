import type { AulaPortuguesV4 } from "../../types";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 7 · Aula 2 — O Eco que Rima
 * ---------------------------------------------------------------
 * Fase 5: rimas (mesma terminação sonora) e a ortografia do R e do RR.
 *
 * BNCC: EF02LP02 · EF02LP04 · EF02LP08
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-eco-que-rima",
  titulo: "O Eco que Rima",
  iconeTrilha: "🎵",
  bncc: ["EF02LP02", "EF02LP04", "EF02LP08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O corredor que devolve o fim das palavras",
    historia:
      "Brilha entrou num corredor estreito da Biblioteca. Ele gritou GATO e o corredor devolveu: PATO! Gritou MALA e voltou BALA! — Este é o Corredor das Rimas — disse Aurora. — Ele só devolve palavras que terminam com o mesmo som.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Olhe o título e as pistas da capa.",
    bloco: {
      titulo: "O Corredor das Rimas",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: estrela, nome: "Sons que voltam" },
        { imagemUrl: livros, nome: "Pares de palavras" },
      ],
      pergunta: "Do que essa história vai falar?",
      hipoteses: [
        { texto: "De palavras que terminam com o mesmo som.", imagemUrl: estrela },
        { texto: "De um corredor de escola muito comprido.", imagemUrl: livro },
        { texto: "De um passarinho que perdeu o ninho.", imagemUrl: passaro },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! RIMA é quando duas palavras terminam igual.",
      feedbackErro: "A palavra RIMAS está no título. Rima é som igual no fim da palavra.",
      dica: "Pense no que significa a palavra RIMA que aparece no título.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras antes de entrar no corredor.",
    cards: [
      {
        palavra: "rima",
        explicacao: "É quando duas palavras terminam com o mesmo som: GATO e PATO.",
        exemplo: "FLOR rima com COR.",
        imagemUrl: estrela,
      },
      {
        palavra: "eco",
        explicacao: "É o som que volta depois que a gente grita num lugar vazio.",
        exemplo: "Na caverna, o eco repetiu o grito de Brilha.",
        imagemUrl: arvore,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Escute o finalzinho da palavra",
    instrucao:
      "Toque na palavra para ouvir. Depois escolha quem termina com o MESMO som.",
    blocos: [
      {
        tipo: "rimas",
        itens: [
          {
            palavraBase: "GATO",
            terminacao: "-ATO",
            imagemUrl: estrela,
            opcoes: [
              { palavra: "PATO", rima: true },
              { palavra: "BOLA", rima: false },
              { palavra: "CASA", rima: false },
            ],
          },
          {
            palavraBase: "MALA",
            terminacao: "-ALA",
            opcoes: [
              { palavra: "DEDO", rima: false },
              { palavra: "BALA", rima: true },
              { palavra: "SINO", rima: false },
            ],
          },
          {
            palavraBase: "FLOR",
            terminacao: "-OR",
            opcoes: [
              { palavra: "MESA", rima: false },
              { palavra: "PATO", rima: false },
              { palavra: "COR", rima: true },
            ],
          },
          {
            palavraBase: "JANELA",
            terminacao: "-ELA",
            opcoes: [
              { palavra: "PANELA", rima: true },
              { palavra: "JARRO", rima: false },
              { palavra: "LIVRO", rima: false },
            ],
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "R no começo e RR no meio",
        explicacao:
          "O som forte de R se escreve com um R só quando está no COMEÇO da palavra (RATO) e com RR quando está no MEIO, entre duas vogais (CARRO). Entre vogais, um R só fica fraquinho: CARO.",
        exemplos: [
          { palavra: "rato", destaque: "r", motivo: "R forte no começo: um R só." },
          { palavra: "carro", destaque: "rr", motivo: "R forte no meio: dois R." },
          { palavra: "caro", destaque: "r", motivo: "R fraquinho entre vogais: um R." },
          { palavra: "terra", destaque: "rr", motivo: "R forte no meio: dois R." },
        ],
        desafios: [
          {
            molde: "ca_o",
            opcoes: ["rr", "r"],
            correta: 0,
            frase: "O CARRO azul parou na porta.",
            feedbackErro: "Som forte no meio da palavra pede RR: CARRO.",
          },
          {
            molde: "_ato",
            opcoes: ["rr", "r"],
            correta: 1,
            frase: "O RATO fugiu do gato.",
            feedbackErro: "No começo da palavra nunca se escreve RR: RATO.",
          },
          {
            molde: "te_a",
            opcoes: ["r", "rr"],
            correta: 1,
            frase: "A TERRA do jardim está molhada.",
            feedbackErro: "Som forte entre vogais pede RR: TERRA.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto. Ouça o fim de cada palavra destacada.",
    leitura: {
      titulo: "O Corredor das Rimas",
      imagemUrl: brilha,
      legendaImagem: "Brilha no corredor que devolve rimas",
      destacar: ["rima", "gato", "pato", "carro"],
      paragrafos: [
        "Brilha gritou no corredor: — GATO! E o eco devolveu: — PATO!",
        "Ele riu e gritou de novo: — MALA! O eco respondeu: — BALA!",
        "Depois passou um carro na rua e Brilha gritou: — CARRO! O eco devolveu: — JARRO!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto para conferir.",
    perguntas: [
      {
        pergunta: "Quando Brilha gritou GATO, o eco devolveu qual palavra?",
        opcoes: ["BOLA", "PATO", "CARRO"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! GATO rima com PATO.",
        feedbackErro: "Está na primeira linha do texto.",
        dica: "Procure a palavra GATO no texto e veja o que vem logo depois.",
        reensino:
          "Vamos entender juntos: o eco só devolve palavras que terminam igual. GATO termina em -ATO, como PATO.",
        ondeEstaNoTexto: "— GATO! E o eco devolveu: — PATO!",
      },
      {
        pergunta: "O que o eco devolveu quando Brilha gritou CARRO?",
        opcoes: ["JARRO", "MALA", "GATO"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! CARRO rima com JARRO.",
        feedbackErro: "Está no último parágrafo.",
        dica: "Leia a última frase do texto.",
        reensino:
          "Vamos entender juntos: CARRO e JARRO terminam com -ARRO, o mesmo som.",
        ondeEstaNoTexto: "— CARRO! O eco devolveu: — JARRO!",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem age e onde a cena acontece.",
    perguntas: [
      {
        pergunta: "Quem grita as palavras na história?",
        opcoes: ["Aurora", "Brilha", "Piu"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! É Brilha.",
        feedbackErro: "Procure quem grita no primeiro parágrafo.",
        dica: "Personagem é quem faz a ação de gritar.",
      },
      {
        pergunta: "Onde a cena acontece?",
        opcoes: ["Num corredor da biblioteca", "Numa piscina", "Numa cozinha"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! No corredor.",
        feedbackErro: "O lugar aparece já na primeira frase.",
        dica: "Cenário é o lugar. Está no título também.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque os gritos na ordem em que aconteceram.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Brilha grita GATO e ouve PATO.", imagemUrl: estrela },
        { id: "p2", texto: "Brilha grita MALA e ouve BALA.", imagemUrl: livro },
        { id: "p3", texto: "Brilha grita CARRO e ouve JARRO.", imagemUrl: livros },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Essa foi a ordem dos ecos.",
      feedbackErro: "O primeiro grito foi GATO, depois MALA e por último CARRO.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda as duas perguntas.",
    leitura: {
      titulo: "A canção do jarro",
      imagemUrl: livros,
      destacar: ["jarro", "barro", "rima"],
      paragrafos: [
        "No fim do corredor havia um jarro de barro.",
        "Brilha percebeu: jarro e barro terminam igual. É rima!",
        "Ele saiu cantando: — Meu jarro de barro não cabe no carro!",
      ],
    },
    perguntas: [
      {
        pergunta: "De que material era o jarro?",
        opcoes: ["De vidro", "De barro", "De papel"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! De BARRO.",
        feedbackErro: "Está na primeira frase: 'um jarro de…'.",
        dica: "A resposta está na primeira linha.",
        reensino: "Vamos entender juntos: leia só a primeira frase e procure o material.",
        ondeEstaNoTexto: "…havia um jarro de barro.",
      },
      {
        pergunta: "Por que JARRO e BARRO rimam?",
        opcoes: [
          "Porque começam com a mesma letra",
          "Porque terminam com o mesmo som",
          "Porque são coisas grandes",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Rima é som igual no FIM.",
        feedbackErro: "Rima é o som do FINAL da palavra: -ARRO.",
        dica: "Fale as duas palavras e escute só o pedaço final.",
        reensino:
          "Vamos entender juntos: rima não é começar igual, é TERMINAR igual. -ARRO e -ARRO.",
        ondeEstaNoTexto: "…jarro e barro terminam igual. É rima!",
      },
    ],
  },

  momento_fluencia: {
    titulo: "Ler três vezes: A canção do jarro",
    instrucao:
      "Mesmo trechinho três vezes: em eco comigo, no cronômetro e mais uma vez. A leitura vai ficando lisinha.",
    texto: [
      "No fim do corredor havia um jarro de barro.",
      "Jarro e barro terminam igual. É rima!",
      "Meu jarro de barro não cabe no carro.",
    ],
    metaSegundos: 22,
  },

  momento09_revisao: {
    pontos: [
      "Rima é quando duas palavras terminam com o MESMO som.",
      "No começo da palavra o R forte se escreve com um R só: RATO, RUA.",
      "No meio, entre vogais, o R forte se escreve com RR: CARRO, TERRA.",
    ],
    miniDesafio: {
      pergunta: "Qual palavra rima com FLOR?",
      opcoes: ["MESA", "COR", "GATO"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! FLOR e COR terminam em -OR.",
      feedbackErro: "Escute o fim: FLOR termina em -OR. Procure outra que termine assim.",
      dica: "Fale cada opção em voz alta e compare só o finalzinho.",
      reensino: "Vamos entender juntos: rima é som igual no fim. FL-OR e C-OR.",
    },
  },

  momento_escrita: {
    titulo: "Oficina de Escrita",
    instrucao: "Ouça, monte e depois escreva sua própria rima.",
    blocos: [
      {
        tipo: "ditadoSilabas",
        palavras: [
          {
            palavra: "CARRO",
            silabas: ["CAR", "RO"],
            distratores: ["RA", "TO"],
            dica: "Som forte no meio: vai com RR.",
          },
          {
            palavra: "RATO",
            silabas: ["RA", "TO"],
            distratores: ["CAR", "RO"],
            dica: "No começo da palavra, um R só.",
          },
          {
            palavra: "TERRA",
            silabas: ["TER", "RA"],
            distratores: ["BAR", "CO"],
            dica: "Som forte entre vogais: TER-RA, com RR.",
          },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
          {
            frase: "O rato correu na terra.",
            palavras: ["O", "rato", "correu", "na", "terra."],
            distratores: ["carro", "muito"],
            dica: "Comece com maiúscula e termine com ponto.",
          },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu versinho que rima",
        comando:
          "Escreva 2 linhas que rimem. Pode usar os pares GATO/PATO, MALA/BALA, FLOR/COR.",
        linhas: 2,
        cicloRevisao: true,
        modelo: ["Meu gato subiu no mato,", "e voltou com um sapato."],
        checklist: [
          "As duas linhas terminam com o mesmo som.",
          "Comecei com letra maiúscula.",
          "Li em voz alta e a rima soou bem.",
        ],
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual par de palavras RIMA?",
        opcoes: ["MALA e BALA", "MESA e GATO", "CASA e SOL", "FLOR e MESA"],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«MESA e GATO» não é a resposta. A certa é «MALA e BALA».",
          "«CASA e SOL» não é a resposta. A certa é «MALA e BALA».",
          "«FLOR e MESA» não é a resposta. A certa é «MALA e BALA».",
        ],
        feedbackAcerto: "🎉 Isso! Terminam em -ALA.",
        feedbackErro: "Rima é som igual no FIM da palavra.",
        dica: "Fale os pares e escute só o final.",
        reensino: "Vamos entender juntos: MA-LA e BA-LA terminam com o mesmo som, -ALA.",
      },
      {
        pergunta: "2/5 — Como se escreve o nome do veículo?",
        opcoes: ["caro", "carro", "karro", "cárro"],
        correta: 1,
        feedbackOpcoes: [
          "«caro» não é a resposta. A certa é «carro».",
          null,
          "«karro» não é a resposta. A certa é «carro».",
          "«cárro» não é a resposta. A certa é «carro».",
        ],
        feedbackAcerto: "🎉 CARRO, com RR.",
        feedbackErro: "Som forte entre vogais pede RR. CARO com um R é outra coisa: de preço alto.",
        dica: "O som do R é forte? Então no meio da palavra vai RR.",
        reensino:
          "Vamos entender juntos: CARO (um R) é preço alto; CARRO (dois R) é o veículo.",
      },
      {
        pergunta: "3/5 — Como se escreve o bichinho que o gato persegue?",
        opcoes: ["rrato", "rato", "hrato", "raato"],
        correta: 1,
        feedbackOpcoes: [
          "«rrato» não é a resposta. A certa é «rato».",
          null,
          "«hrato» não é a resposta. A certa é «rato».",
          "«raato» não é a resposta. A certa é «rato».",
        ],
        feedbackAcerto: "🎉 RATO, com um R só.",
        feedbackErro: "Palavra nenhuma começa com RR. No começo é sempre um R.",
        dica: "Onde está o R? No começo da palavra.",
        reensino:
          "Vamos entender juntos: no começo da palavra o R já é forte sozinho — RATO, RUA, ROSA.",
      },
      {
        pergunta: "4/5 — Rima é quando duas palavras…",
        opcoes: [
          "começam com a mesma letra",
          "terminam com o mesmo som",
          "têm o mesmo tamanho",
          "significam a mesma coisa",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«começam com a mesma letra» não é a resposta. A certa é «terminam com o mesmo som».",
          null,
          "«têm o mesmo tamanho» não é a resposta. A certa é «terminam com o mesmo som».",
          "«significam a mesma coisa» não é a resposta. A certa é «terminam com o mesmo som».",
        ],
        feedbackAcerto: "🎉 Exatamente!",
        feedbackErro: "Rima é som igual no FINAL.",
        dica: "Pense em GATO e PATO: o que é igual neles?",
        reensino: "Vamos entender juntos: o começo pode ser diferente; o FIM é que precisa soar igual.",
      },
      {
        pergunta: "5/5 — Qual palavra rima com JANELA?",
        opcoes: ["PANELA", "JANTAR", "JARDIM", "JARRO"],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«JANTAR» não é a resposta. A certa é «PANELA».",
          "«JARDIM» não é a resposta. A certa é «PANELA».",
          "«JARRO» não é a resposta. A certa é «PANELA».",
        ],
        feedbackAcerto: "🎉 -ELA e -ELA!",
        feedbackErro: "Cuidado: começar com J não é rimar. Rima é o FIM.",
        dica: "Ignore o começo. Compare só o pedaço final da palavra.",
        reensino:
          "Vamos entender juntos: JANELA termina em -ELA; PANELA também. Por isso rimam.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça-rimas em casa",
    materiais: ["Objetos da casa"],
    passos: [
      "1) O adulto fala o nome de um objeto (COLHER, PANELA, SABÃO).",
      "2) A criança tenta dizer uma palavra que rime.",
      "3) Vale palavra inventada e engraçada — o importante é o som final.",
      "4) Anotem o par de rimas preferido de vocês.",
    ],
    registro: "📝 Escreva o par de rimas mais engraçado que vocês inventaram.",
  },

  recompensa: { xp: 110, moedas: 65 },
};
