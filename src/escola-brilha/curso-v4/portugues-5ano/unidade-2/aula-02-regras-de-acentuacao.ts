import type { AulaPortuguesV4 } from "../../types";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as bau } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";

/**
 * Aula 2 — Regras de acentuação
 * -------------------------------------------------------------
 * Unidade 2 · Oficina das Palavras (5º ano)
 * Foco: acento agudo, circunflexo e til; monossílabos tônicos;
 * acentuação dos ditongos abertos ÉI, ÉU, ÓI em tônica.
 * BNCC: EF05LP01, EF35LP12
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-regras-de-acentuacao",
  titulo: "Regras de acentuação",
  iconeTrilha: "✒️",
  bncc: ["EF05LP01", "EF35LP12"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "Três marcas, três sons",
    historia:
      "Brilha abriu uma caixinha com três ferramentas: um acento agudo ( ´ ), um circunflexo ( ^ ) e um til ( ~ ). — Cada uma dessas marcas muda o som e às vezes até o sentido da palavra! Hoje vamos aprender quando usar cada uma, e também um segredo: até palavrinhas de UMA sílaba só podem pedir acento. Bora destrinchar essas ferramentas?",
    imagemUrl: caixa,
  },

  momento02_previsao: {
    instrucao: "Observe as três marcas na bancada antes de começar.",
    bloco: {
      titulo: "As Três Marcas da Oficina",
      capaImagemUrl: bau,
      pistas: [
        { imagemUrl: estrela, nome: "Uma estrela" },
        { imagemUrl: relogio, nome: "Um relógio" },
      ],
      pergunta: "Sobre o que essa parte da oficina vai ensinar?",
      hipoteses: [
        { texto: "Quando usar acento agudo, circunflexo e til nas palavras.", imagemUrl: estrela },
        { texto: "Como consertar um relógio quebrado.", imagemUrl: relogio },
        { texto: "Como pintar uma caixa de madeira.", imagemUrl: caixa },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender as regras dos três acentos e dos monossílabos tônicos.",
      feedbackErro: "Pense nas marcas mostradas: agudo, circunflexo e til. É sobre elas que vamos falar.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça cada ferramenta antes de usá-la.",
    cards: [
      {
        palavra: "acento agudo",
        explicacao: "Marca ( ´ ) usada em vogais abertas, como em CAFÉ, ÁGUA e VOCÊ.",
        exemplo: "Em PÁSSARO, o acento agudo marca a sílaba tônica ABERTA.",
        imagemUrl: estrela,
      },
      {
        palavra: "acento circunflexo",
        explicacao: "Marca ( ^ ) usada em vogais fechadas, como em VOCÊ, AVÔ e CÂMARA.",
        exemplo: "Em VOCÊ, o circunflexo marca um som fechado de 'ê'.",
        imagemUrl: relogio,
      },
      {
        palavra: "til",
        explicacao: "Marca ( ~ ) que indica som nasal, usada em Ã e Õ, como em MAÇÃ e BALÃO.",
        exemplo: "Em BALÃO, o til nasaliza o som do 'ão'.",
        imagemUrl: balao,
      },
      {
        palavra: "monossílabo tônico",
        explicacao: "Palavra de UMA sílaba só, pronunciada com força. Recebe acento quando termina em A, E, O (seguidas ou não de S).",
        exemplo: "PÁ, PÉ e AVÓS são monossílabos tônicos acentuados.",
        imagemUrl: lapis,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Ouvindo a diferença entre os sons",
    instrucao: "Ouça o Brilha comparando o som aberto e o som fechado.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "PÁ (som aberto, agudo)", explicacao: "Vogal aberta → acento AGUDO." },
          { texto: "AVÔ (som fechado, circunflexo)", explicacao: "Vogal fechada → acento CIRCUNFLEXO." },
          { texto: "MAÇÃ (som nasal, til)", explicacao: "Som nasal → TIL, não é bem um 'acento tônico' comum." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou as regras no diário da oficina.",
    leitura: {
      titulo: "O Diário das Três Marcas",
      imagemUrl: pergaminho,
      legendaImagem: "Página sobre acentos",
      destacar: ["agudo", "circunflexo", "til", "monossílabos"],
      paragrafos: [
        "O acento AGUDO ( ´ ) marca vogais de som ABERTO: café, público, água, herói. Já o acento CIRCUNFLEXO ( ^ ) marca vogais de som FECHADO: você, avô, câmara, lêem.",
        "O TIL ( ~ ) não indica força de sílaba, mas som NASAL, usado sobre A e O: maçã, órgão, balão, corações. Uma palavra pode ter til e, além disso, precisar de acento — como em ÓRGÃO.",
        "Palavras de UMA sílaba só (monossílabos) também podem ser tônicas, ou seja, pronunciadas com força. Quando terminam em A, E, O (podendo vir com S), recebem acento: PÁ, PÉS, VOVÔ, DÁ.",
        "Outra regra importante do 5º ano: ditongos abertos ÉI, ÉU e ÓI em sílaba tônica de palavras oxítonas ou monossílabas recebem acento: papéis, chapéu, herói, dói.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar.",
    perguntas: [
      {
        pergunta: "O que o acento circunflexo indica?",
        opcoes: ["Som fechado da vogal", "Som aberto da vogal", "Som nasal", "Que a palavra é plural"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Circunflexo marca vogal de som fechado.",
        feedbackErro: "Releia: 'o acento CIRCUNFLEXO ( ^ ) marca vogais de som FECHADO'.",
        ondeEstaNoTexto: "o acento CIRCUNFLEXO ( ^ ) marca vogais de som FECHADO",
      },
      {
        pergunta: "Quando um monossílabo tônico recebe acento?",
        opcoes: [
          "Quando termina em A, E, O (com ou sem S)",
          "Sempre, sem exceção",
          "Só quando é um nome próprio",
          "Nunca recebe acento",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! É exatamente essa a regra dos monossílabos tônicos.",
        feedbackErro: "Releia: 'Quando terminam em A, E, O (podendo vir com S), recebem acento'.",
        ondeEstaNoTexto: "Quando terminam em A, E, O (podendo vir com S), recebem acento",
      },
      {
        pergunta: "Segundo o texto, o que acontece com os ditongos ÉI, ÉU e ÓI tônicos em oxítonas?",
        opcoes: [
          "Recebem acento agudo",
          "Nunca recebem acento",
          "Recebem til",
          "Viram monossílabos",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Ditongos abertos tônicos em oxítonas/monossílabos recebem acento.",
        feedbackErro: "Releia o último parágrafo sobre papéis, chapéu, herói e dói.",
        ondeEstaNoTexto: "recebem acento: papéis, chapéu, herói, dói",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem trouxe as ferramentas e onde ficam guardadas as regras?",
    perguntas: [
      {
        pergunta: "Onde as regras dos acentos foram anotadas?",
        opcoes: ["No diário da oficina", "Numa placa da rua", "Num bilhete jogado fora", "Numa etiqueta de roupa"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O diário registrou as três marcas.",
        feedbackErro: "Releia o título: 'O Diário das Três Marcas'.",
      },
      {
        pergunta: "Quais três ferramentas Brilha tirou da caixinha?",
        opcoes: [
          "Acento agudo, circunflexo e til",
          "Martelo, prego e serra",
          "Lápis, caneta e borracha",
          "Régua, esquadro e compasso",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! São as três marcas da aula.",
        feedbackErro: "Volte à motivação: Brilha abriu uma caixinha com três marcas específicas.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para decidir qual acento usar numa palavra tônica.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Encontre a sílaba tônica da palavra.", imagemUrl: lapis },
        { id: "p2", texto: "Escute se o som da vogal tônica é aberto ou fechado.", imagemUrl: estrela },
        { id: "p3", texto: "Se for aberto, use agudo; se for fechado, use circunflexo.", imagemUrl: relogio },
        { id: "p4", texto: "Se o som for nasal (ão, ã), pense no til, não no acento tônico comum.", imagemUrl: balao },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa para escolher a marca correta.",
      feedbackErro: "Pense: primeiro se acha a tônica, depois se ouve o som, e só então se escolhe agudo, circunflexo ou til.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do diário e responda.",
    leitura: {
      titulo: "Mais Marcas na Oficina",
      imagemUrl: livro,
      destacar: ["AVÔ", "PÁ", "HERÓI"],
      paragrafos: [
        "Brilha encontrou a palavra AVÔ. O som da última sílaba é fechado, por isso leva circunflexo — diferente de AVÓ, com som aberto e acento agudo.",
        "Depois encontrou PÁ, um monossílabo tônico terminado em A, por isso é acentuado. E encontrou HERÓI, que tem o ditongo aberto ÓI na sílaba tônica de uma palavra oxítona, por isso também recebe acento.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que AVÔ leva circunflexo e não agudo?",
        opcoes: [
          "Porque o som da última sílaba é fechado",
          "Porque é uma palavra grande",
          "Porque termina em vogal",
          "Porque é masculina",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Som fechado pede circunflexo.",
        feedbackErro: "Releia: 'O som da última sílaba é fechado, por isso leva circunflexo'.",
        ondeEstaNoTexto: "O som da última sílaba é fechado, por isso leva circunflexo",
      },
      {
        pergunta: "Por que HERÓI recebe acento, segundo o texto?",
        opcoes: [
          "Tem o ditongo aberto ÓI na sílaba tônica de uma oxítona",
          "Porque é uma palavra estrangeira",
          "Porque tem duas sílabas só",
          "Porque termina em consoante",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Ditongo aberto tônico em oxítona recebe acento.",
        feedbackErro: "Releia: 'tem o ditongo aberto ÓI na sílaba tônica de uma palavra oxítona'.",
        ondeEstaNoTexto: "tem o ditongo aberto ÓI na sílaba tônica de uma palavra oxítona",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte a palavra com a marca certa",
    instrucao: "Monte cada palavra escolhendo as sílabas com o acento correto.",
    jogo: {
      tipo: "montarPalavra",
      titulo: "A Bancada dos Acentos",
      bloco: {
        instrucao: "Preste atenção no som de cada sílaba para escolher a peça certa.",
        palavras: [
          { id: "w1", palavraCerta: "AVÔ", silabas: ["A", "VÔ"], frase: "O avô contou uma história." },
          { id: "w2", palavraCerta: "PÁSSARO", silabas: ["PÁS", "SA", "RO"], frase: "O pássaro cantou de manhã." },
          { id: "w3", palavraCerta: "HERÓI", silabas: ["HE", "RÓI"], frase: "O herói salvou a cidade." },
          { id: "w4", palavraCerta: "MAÇÃ", silabas: ["MA", "ÇÃ"], frase: "A maçã estava madura." },
          { id: "w5", palavraCerta: "CÂMARA", silabas: ["CÂ", "MA", "RA"], frase: "A câmara fotografou o pôr do sol." },
        ],
        feedbackAcerto: "🎉 Você acertou a marca certa para cada som!",
        feedbackErro: "Ouça de novo o som da sílaba tônica: é aberto, fechado ou nasal?",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Acento AGUDO marca som aberto; CIRCUNFLEXO marca som fechado; TIL marca som nasal.",
      "Monossílabos tônicos terminados em A, E, O (com ou sem S) recebem acento.",
      "Ditongos abertos ÉI, ÉU, ÓI tônicos em oxítonas e monossílabos recebem acento.",
    ],
    miniDesafio: {
      pergunta: "PÉ é um monossílabo tônico terminado em E. Ele...",
      opcoes: [
        "Recebe acento, seguindo a regra dos monossílabos tônicos",
        "Nunca recebe acento",
        "Só recebe acento no plural",
        "Precisa de til",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Monossílabo tônico terminado em E recebe acento.",
      feedbackErro: "Releia a regra: monossílabos tônicos terminados em A, E, O recebem acento.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O acento agudo marca um som...",
        opcoes: ["Aberto", "Fechado", "Nasal", "Mudo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Agudo marca som aberto.",
        feedbackErro: "Lembre: agudo = som aberto, como em CAFÉ.",
      },
      {
        pergunta: "2/5 — VOCÊ tem acento circunflexo porque o som da sílaba tônica é...",
        opcoes: ["Aberto", "Fechado", "Nasal", "Não tem sílaba tônica"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Som fechado pede circunflexo.",
        feedbackErro: "VOCÊ tem som fechado na última sílaba, por isso leva circunflexo.",
      },
      {
        pergunta: "3/5 — O til indica principalmente...",
        opcoes: ["Som nasal", "Sílaba tônica forte", "Plural", "Verbo no passado"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Til indica som nasal, como em MAÇÃ e BALÃO.",
        feedbackErro: "O til marca nasalização, não força de sílaba.",
      },
      {
        pergunta: "4/5 — PÁ é acentuada porque é...",
        opcoes: [
          "Um monossílabo tônico terminado em A",
          "Uma proparoxítona",
          "Uma palavra com til",
          "Uma palavra estrangeira",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Monossílabo tônico terminado em A recebe acento.",
        feedbackErro: "Lembre da regra dos monossílabos tônicos terminados em A, E, O.",
      },
      {
        pergunta: "5/5 — CHAPÉU recebe acento porque tem...",
        opcoes: [
          "Um ditongo aberto ÉU na sílaba tônica",
          "Um til",
          "Duas sílabas tônicas",
          "Um circunflexo escondido",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Oficina dominada! Ditongo aberto tônico ÉU recebe acento.",
        feedbackErro: "CHAPÉU tem o ditongo aberto ÉU na sílaba tônica, por isso é acentuado.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada aos três acentos",
    materiais: ["Papel e lápis", "Livros ou embalagens da casa"],
    passos: [
      "1) Com um adulto, procurem 2 palavras com acento agudo, 2 com circunflexo e 2 com til.",
      "2) Escrevam cada palavra e digam se o som é aberto, fechado ou nasal.",
      "3) Procurem 1 monossílabo tônico acentuado, como PÁ, PÉ ou VÓS.",
      "4) Conversem sobre por que cada marca foi usada.",
    ],
    registro: "📝 Uma foto da lista com as seis palavras e o monossílabo, classificados por tipo de acento.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
