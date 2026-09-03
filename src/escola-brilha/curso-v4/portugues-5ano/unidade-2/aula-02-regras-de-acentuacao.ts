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
  bncc: ["EF05LP03", "EF35LP12"],
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
      dica: "✒️ Pista da oficina: as três marcas mostradas (estrela, relógio, caixa) representam os três acentos que vamos estudar hoje.",
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
    instrucao: "Ouça o Brilha comparando o som aberto, o som fechado e o som nasal, e veja como cada acento escolhe a marca certa.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "PÁ (som aberto, agudo)", explicacao: "Vogal aberta → acento AGUDO." },
          { texto: "AVÔ (som fechado, circunflexo)", explicacao: "Vogal fechada → acento CIRCUNFLEXO." },
          { texto: "MAÇÃ (som nasal, til)", explicacao: "Som nasal → TIL, não é bem um 'acento tônico' comum." },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "Como escolher entre agudo, circunflexo e til",
        explicacao:
          "Primeiro encontre a sílaba mais forte (tônica) da palavra. Se o som dessa sílaba é ABERTO (a boca fica mais aberta), use acento AGUDO. Se o som é FECHADO (a boca fica mais fechada), use CIRCUNFLEXO. Se o som é NASAL (sai pelo nariz, como em 'ão' e 'ã'), use TIL — que não mede força, e sim nasalização.",
        exemplos: [
          { palavra: "CAFÉ", destaque: "É", motivo: "Som aberto na sílaba tônica → acento agudo." },
          { palavra: "VOCÊ", destaque: "Ê", motivo: "Som fechado na sílaba tônica → acento circunflexo." },
          { palavra: "MAÇÃ", destaque: "Ã", motivo: "Som nasal → til, não circunflexo nem agudo." },
        ],
        desafios: [
          {
            molde: "PÚBLICO tem a sílaba tônica com som aberto. Qual acento ela recebe? _",
            opcoes: ["Agudo", "Circunflexo", "Til", "Nenhum acento"],
            correta: 0,
            frase: "PÚBLICO",
            feedbackErro: "Som aberto pede acento agudo, como em CAFÉ e ÁGUA.",
          },
          {
            molde: "CÂMARA tem a sílaba tônica com som fechado. Qual acento ela recebe? _",
            opcoes: ["Circunflexo", "Agudo", "Til", "Nenhum acento"],
            correta: 0,
            frase: "CÂMARA",
            feedbackErro: "Som fechado pede acento circunflexo, como em VOCÊ e AVÔ.",
          },
          {
            molde: "BALÃO tem som nasal na última sílaba. Qual marca ela recebe? _",
            opcoes: ["Til", "Agudo", "Circunflexo", "Nenhuma marca"],
            correta: 0,
            frase: "BALÃO",
            feedbackErro: "Som nasal pede til, que indica nasalização, não força da sílaba.",
          },
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
        dica: "✒️ Pista da oficina: volte ao texto e releia este trecho — “o acento CIRCUNFLEXO ( ^ ) marca vogais de som FECHADO”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Som fechado da vogal”. O circunflexo sempre marca esse tipo de som, como em VOCÊ e AVÔ. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
        dica: "✒️ Pista da oficina: volte ao texto e releia este trecho — “Quando terminam em A, E, O (podendo vir com S), recebem acento”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Quando termina em A, E, O (com ou sem S)”. É essa a regra dos monossílabos tônicos, como em PÁ e PÉS. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
        dica: "✒️ Pista da oficina: volte ao texto e releia este trecho — “recebem acento: papéis, chapéu, herói, dói”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Recebem acento agudo”. Ditongos abertos tônicos em oxítonas e monossílabos sempre recebem acento. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
        dica: "✒️ Pista da oficina: releia o título da leitura guiada — ele já dá a resposta.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “No diário da oficina”. O texto se chama justamente 'O Diário das Três Marcas'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
        dica: "✒️ Pista da oficina: volte à motivação — Brilha mostrou três acentos, não ferramentas de marcenaria.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Acento agudo, circunflexo e til”. Essas são as três marcas apresentadas na caixinha. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
      dica: "✒️ Pista da oficina: primeiro se localiza a sílaba tônica, depois se ouve o som, e só por último se escolhe a marca certa.",
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
        dica: "✒️ Pista da oficina: volte ao texto e releia este trecho — “O som da última sílaba é fechado, por isso leva circunflexo”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque o som da última sílaba é fechado”. Esse é o motivo que o texto dá para AVÔ. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
        dica: "✒️ Pista da oficina: volte ao texto e releia este trecho — “tem o ditongo aberto ÓI na sílaba tônica de uma palavra oxítona”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Tem o ditongo aberto ÓI na sílaba tônica de uma oxítona”. Esse é o motivo explicado no texto para HERÓI. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
        dica: "✒️ Pista da oficina: som aberto pede agudo, som fechado pede circunflexo, e som nasal pede til.",
      },
    },
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Caderno de Regras do Detetive de Acentos",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Escreva um parágrafo explicando as três marcas",
        comando:
          "Escreva um parágrafo explicando, com suas palavras, quando usar acento agudo, circunflexo e til. Dê pelo menos um exemplo de palavra para cada marca.",
        linhas: 5,
        modelo: [
          "O acento agudo marca vogais de som aberto, como em CAFÉ.",
          "O acento circunflexo marca vogais de som fechado, como em VOCÊ.",
          "O til marca som nasal, como em MAÇÃ.",
          "Por isso, antes de acentuar uma palavra, escuto se o som é aberto, fechado ou nasal.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Expliquei o acento agudo com pelo menos um exemplo.",
          "Expliquei o acento circunflexo com pelo menos um exemplo.",
          "Expliquei o til com pelo menos um exemplo.",
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
    titulo: "Leitura expressiva: As Três Marcas da Língua",
    instrucao:
      "Leia o mesmo texto três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula e ponto. A meta não é correr: é ler como quem explica algo importante.",
    texto: [
      "Toda palavra tem uma sílaba mais forte, chamada sílaba tônica. Às vezes, essa força vem acompanhada de um acento gráfico, que também revela o som exato daquela vogal. O acento agudo aparece em sons abertos, como em café e água.",
      "Já o acento circunflexo marca sons fechados, como em você e avô. E o til, sozinho, cuida de outra tarefa: indicar que o som é nasal, como em maçã e balão. Ele não mostra força, mostra nasalização.",
      "Até as palavrinhas de uma sílaba só, como pá e pé, seguem regras próprias: recebem acento quando terminam em A, E ou O. Aprender essas três marcas ajuda qualquer leitor a escrever com muito mais confiança.",
    ],
    metaSegundos: 62,
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
      dica: "✒️ Pista da oficina: lembre que monossílabos tônicos terminados em A, E ou O (com ou sem S) sempre recebem acento.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “Recebe acento, seguindo a regra dos monossílabos tônicos”. PÉ termina em E, então segue a regra. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
        dica: "✒️ Pista da oficina: agudo é usado em sons abertos, como em CAFÉ e ÁGUA.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Aberto”. O acento agudo sempre marca um som aberto. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — VOCÊ tem acento circunflexo porque o som da sílaba tônica é...",
        opcoes: ["Aberto", "Fechado", "Nasal", "Não tem sílaba tônica"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Som fechado pede circunflexo.",
        feedbackErro: "VOCÊ tem som fechado na última sílaba, por isso leva circunflexo.",
        dica: "✒️ Pista da oficina: lembre que circunflexo é usado em sons fechados, como em VOCÊ e AVÔ.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Fechado”. VOCÊ tem som fechado na sílaba tônica, por isso recebe circunflexo. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — O til indica principalmente...",
        opcoes: ["Som nasal", "Sílaba tônica forte", "Plural", "Verbo no passado"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Til indica som nasal, como em MAÇÃ e BALÃO.",
        feedbackErro: "O til marca nasalização, não força de sílaba.",
        dica: "✒️ Pista da oficina: til indica que o som sai pelo nariz, como em MAÇÃ e BALÃO.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Som nasal”. O til não mede força de sílaba, e sim nasalização. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
        dica: "✒️ Pista da oficina: monossílabos tônicos terminados em A, E ou O sempre recebem acento.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um monossílabo tônico terminado em A”. É essa a regra que explica o acento de PÁ. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
        dica: "✒️ Pista da oficina: ditongos abertos ÉI, ÉU, ÓI na sílaba tônica de oxítonas e monossílabos recebem acento.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um ditongo aberto ÉU na sílaba tônica”. Esse é o motivo do acento em CHAPÉU. Caso encerrado! 🌟 Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
    xp: 140,
    moedas: 80,
    medalha: "Pena de Bronze",
  },
};
