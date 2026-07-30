import type { AulaPortuguesV4 } from "../../types";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 7 · Aula 4 — As Palavras Teimosas
 * ---------------------------------------------------------------
 * Fase 5: reconhecimento lexical direto das palavras de alta
 * frequência do 2º ano + ortografia LH/NH/CH e AM/ÃO.
 *
 * BNCC: EF02LP02 · EF02LP08 · EF02LP06
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-palavras-teimosas",
  titulo: "As Palavras Teimosas",
  iconeTrilha: "⚡",
  bncc: ["EF02LP02", "EF02LP06", "EF02LP08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "As palavras que não deixam soletrar",
    historia:
      "Numa prateleira alta havia palavras que se mexiam sozinhas. — São as PALAVRAS TEIMOSAS — disse Aurora. — Elas aparecem em todo texto, mas não adianta juntar os sons devagar: MUITO, HOJE, AQUI, ELES. A gente aprende a reconhecer o desenho delas num relance.",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Olhe o título e as pistas antes de ler.",
    bloco: {
      titulo: "As Palavras Teimosas",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: estrela, nome: "Palavras que piscam" },
        { imagemUrl: livros, nome: "Prateleira alta" },
      ],
      pergunta: "Do que a história vai falar?",
      hipoteses: [
        { texto: "De palavras que a gente reconhece de olhar, sem soletrar.", imagemUrl: estrela },
        { texto: "De uma criança teimosa que não quer dormir.", imagemUrl: livro },
        { texto: "De uma prateleira que caiu no chão.", imagemUrl: livros },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! São palavras que reconhecemos inteiras.",
      feedbackErro:
        "Teimosas aqui são as PALAVRAS: elas não obedecem quando tentamos juntar os sons.",
      dica: "O título fala de palavras, não de pessoas.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras antes de subir na prateleira.",
    cards: [
      {
        palavra: "teimosa",
        explicacao: "É quem não obedece fácil. Estas palavras não obedecem à soletração.",
        exemplo: "HOJE é teimosa: não se lê juntando ho-je devagar.",
        imagemUrl: estrela,
      },
      {
        palavra: "relance",
        explicacao: "É olhar rapidinho, num piscar de olhos.",
        exemplo: "Brilha leu a palavra num relance.",
        imagemUrl: livros,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Reconhecer num relance",
    instrucao:
      "A palavra vai piscar e sumir. Depois escolha qual era. Não precisa soletrar: guarde o desenho dela.",
    blocos: [
      {
        tipo: "palavraRelampago",
        segundos: 2,
        palavras: [
          {
            palavra: "muito",
            frase: "Eu gostei muito da história.",
            distratores: ["mito", "muinto"],
          },
          {
            palavra: "hoje",
            frase: "Hoje é dia de biblioteca.",
            distratores: ["oje", "hojem"],
          },
          {
            palavra: "aqui",
            frase: "O livro estava aqui.",
            distratores: ["aki", "aquí"],
          },
          {
            palavra: "eles",
            frase: "Eles leram juntos.",
            distratores: ["elis", "eles."],
          },
          {
            palavra: "porque",
            frase: "Ela riu porque a história era engraçada.",
            distratores: ["por que", "porquê"],
          },
          {
            palavra: "também",
            frase: "Brilha também quis ler.",
            distratores: ["tambem", "tanbém"],
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "LH, NH e CH: duas letras, um som só",
        explicacao:
          "Algumas duplas de letras trabalham juntas e fazem UM som só. LH em FILHO, NH em CAMINHO e CH em CHUVA. Não dá para separar: o L e o H andam sempre de mãos dadas.",
        exemplos: [
          { palavra: "filho", destaque: "lh", motivo: "LH: um som só." },
          { palavra: "caminho", destaque: "nh", motivo: "NH: um som só." },
          { palavra: "chuva", destaque: "ch", motivo: "CH tem som de /xis/." },
          { palavra: "galinha", destaque: "nh", motivo: "NH no meio da palavra." },
        ],
        desafios: [
          {
            molde: "fi_o",
            opcoes: ["lh", "li"],
            correta: 0,
            frase: "O FILHO da vizinha chegou.",
            feedbackErro: "O som é um só e vem do par LH: FILHO.",
          },
          {
            molde: "cami_o",
            opcoes: ["nh", "ni"],
            correta: 0,
            frase: "O CAMINHO da escola é curto.",
            feedbackErro: "O par NH faz um som só: CAMINHO.",
          },
          {
            molde: "_uva",
            opcoes: ["ch", "x"],
            correta: 0,
            frase: "A CHUVA molhou o jardim.",
            feedbackErro: "Aqui escrevemos com CH: CHUVA.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "AM ou ÃO no fim do verbo",
        explicacao:
          "Quando a ação já aconteceu, o verbo termina em AM e a força fica antes: eles FALARAM, eles COMERAM. Quando a ação ainda vai acontecer, termina em ÃO e a força fica no fim: eles FALARÃO, eles COMERÃO.",
        exemplos: [
          { palavra: "falaram", destaque: "am", motivo: "Já aconteceu: AM." },
          { palavra: "falarão", destaque: "ão", motivo: "Vai acontecer: ÃO." },
          { palavra: "leram", destaque: "am", motivo: "Já aconteceu: AM." },
          { palavra: "lerão", destaque: "ão", motivo: "Vai acontecer: ÃO." },
        ],
        desafios: [
          {
            molde: "Ontem eles brincar_",
            opcoes: ["am", "ão"],
            correta: 0,
            frase: "Ontem eles BRINCARAM no parque.",
            feedbackErro: "ONTEM é passado: o verbo termina em AM.",
          },
          {
            molde: "Amanhã eles brincar_",
            opcoes: ["am", "ão"],
            correta: 1,
            frase: "Amanhã eles BRINCARÃO no parque.",
            feedbackErro: "AMANHÃ é futuro: o verbo termina em ÃO.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto. As palavras teimosas estão destacadas.",
    leitura: {
      titulo: "A prateleira das teimosas",
      imagemUrl: brilha,
      legendaImagem: "Brilha diante das palavras que piscam",
      destacar: ["muito", "hoje", "aqui", "também"],
      paragrafos: [
        "Hoje Brilha subiu na escada e olhou a prateleira mais alta.",
        "As palavras piscavam muito rápido: AQUI, ELES, PORQUE, TAMBÉM.",
        "Aurora disse: — Olhe para elas inteiras. Você não precisa soletrar; precisa reconhecer.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto para conferir.",
    perguntas: [
      {
        pergunta: "Onde estavam as palavras teimosas?",
        opcoes: ["Na prateleira mais alta", "Debaixo da mesa", "Na mochila de Brilha"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Na prateleira mais alta.",
        feedbackErro: "Está na primeira frase do texto.",
        dica: "Leia a linha um: onde Brilha olhou?",
        reensino:
          "Vamos entender juntos: o texto diz que ele subiu na escada e olhou a prateleira mais alta.",
        ondeEstaNoTexto: "…olhou a prateleira mais alta.",
      },
      {
        pergunta: "O que Aurora ensinou sobre essas palavras?",
        opcoes: [
          "Que é preciso soletrar bem devagar",
          "Que é preciso reconhecer a palavra inteira",
          "Que é melhor não ler essas palavras",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Reconhecer inteira.",
        feedbackErro: "Ela disse: 'Você não precisa soletrar; precisa reconhecer'.",
        dica: "A resposta está na fala de Aurora, no último parágrafo.",
        reensino:
          "Vamos entender juntos: palavras muito frequentes ficam guardadas na memória e são lidas de relance.",
        ondeEstaNoTexto: "Você não precisa soletrar; precisa reconhecer.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem age e onde.",
    perguntas: [
      {
        pergunta: "Quem subiu na escada?",
        opcoes: ["Aurora", "Brilha", "Piu"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Brilha.",
        feedbackErro: "Está na primeira frase do texto.",
        dica: "Procure quem faz a ação de subir.",
      },
      {
        pergunta: "Onde acontece a cena?",
        opcoes: ["Na biblioteca", "Na praia", "No mercado"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Na biblioteca.",
        feedbackErro: "As prateleiras de livros ficam na biblioteca.",
        dica: "Cenário é o lugar da cena.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque a cena na ordem.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Brilha sobe na escada.", imagemUrl: brilha },
        { id: "p2", texto: "As palavras piscam na prateleira.", imagemUrl: estrela },
        { id: "p3", texto: "Aurora explica como reconhecê-las.", imagemUrl: bibliotecaria },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito!",
      feedbackErro: "Primeiro ele SOBE, depois as palavras PISCAM e por fim Aurora EXPLICA.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda.",
    leitura: {
      titulo: "O caderno das teimosas",
      imagemUrl: livros,
      destacar: ["hoje", "muito", "porque", "também"],
      paragrafos: [
        "Brilha fez um caderno só para as palavras teimosas.",
        "Hoje ele escreveu quatro: MUITO, PORQUE, TAMBÉM e AQUI.",
        "Ele leu o caderno todo dia, porque assim elas param de ser teimosas.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantas palavras Brilha escreveu hoje?",
        opcoes: ["Duas", "Quatro", "Dez"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Quatro.",
        feedbackErro: "Conte as palavras listadas na segunda frase.",
        dica: "Leia a segunda linha e conte as palavras em letra maiúscula.",
        reensino:
          "Vamos entender juntos: MUITO, PORQUE, TAMBÉM e AQUI. Uma, duas, três, quatro.",
        ondeEstaNoTexto: "Hoje ele escreveu quatro: MUITO, PORQUE, TAMBÉM e AQUI.",
      },
      {
        pergunta: "Por que ele lia o caderno todo dia?",
        opcoes: [
          "Para as palavras pararem de ser teimosas",
          "Para ganhar um prêmio",
          "Porque a professora mandou",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Lendo sempre, elas ficam fáceis.",
        feedbackErro: "A resposta está depois da palavra PORQUE, na última frase.",
        dica: "Procure a última frase do texto.",
        reensino:
          "Vamos entender juntos: quanto mais vezes vemos a palavra, mais rápido o olho reconhece.",
        ondeEstaNoTexto: "…porque assim elas param de ser teimosas.",
      },
    ],
  },

  momento_fluencia: {
    titulo: "Ler três vezes: O caderno das teimosas",
    instrucao:
      "Leia o mesmo trecho três vezes: em eco, no cronômetro e mais uma. Repare como as palavras teimosas vão ficando rápidas.",
    texto: [
      "Brilha fez um caderno só para as palavras teimosas.",
      "Hoje ele escreveu quatro palavras novas.",
      "Ele leu o caderno todo dia, e elas ficaram fáceis.",
    ],
    metaSegundos: 22,
  },

  momento09_revisao: {
    pontos: [
      "Palavras teimosas aparecem muito e são reconhecidas inteiras, num relance.",
      "LH, NH e CH são duas letras que fazem UM som só.",
      "Verbo no passado termina em AM: eles BRINCARAM.",
      "Verbo no futuro termina em ÃO: eles BRINCARÃO.",
    ],
    miniDesafio: {
      pergunta: "Ontem as crianças ______ no parque.",
      opcoes: ["brincarão", "brincaram", "brincarãom"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! ONTEM é passado: BRINCARAM.",
      feedbackErro: "ONTEM já passou. Passado termina em AM.",
      dica: "A palavra ONTEM diz se é passado ou futuro.",
      reensino:
        "Vamos entender juntos: passado = AM (brincaram); futuro = ÃO (brincarão).",
    },
  },

  momento_escrita: {
    titulo: "Oficina de Escrita",
    instrucao: "Ouça, monte e escreva o seu cartaz das palavras teimosas.",
    blocos: [
      {
        tipo: "ditadoSilabas",
        palavras: [
          {
            palavra: "FILHO",
            silabas: ["FI", "LHO"],
            distratores: ["CA", "MI"],
            dica: "LH andam juntos e fazem um som só.",
          },
          {
            palavra: "CAMINHO",
            silabas: ["CA", "MI", "NHO"],
            distratores: ["LHO", "CHU"],
            dica: "NH também fazem um som só.",
          },
          {
            palavra: "CHUVA",
            silabas: ["CHU", "VA"],
            distratores: ["FI", "NHO"],
            dica: "Começa com o par CH.",
          },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
          {
            frase: "Hoje eles brincaram muito.",
            palavras: ["Hoje", "eles", "brincaram", "muito."],
            distratores: ["brincarão", "amanhã"],
            dica: "HOJE já passou: o verbo termina em AM.",
          },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "cartaz",
        titulo: "Cartaz das Palavras Teimosas",
        comando:
          "Monte um cartaz com as palavras teimosas que você quer decorar e uma frase usando uma delas.",
        campos: [
          {
            rotulo: "Título do cartaz",
            placeholder: "Minhas palavras teimosas",
            minLetras: 8,
          },
          {
            rotulo: "Três palavras teimosas",
            placeholder: "muito, hoje, aqui",
            minLetras: 10,
          },
          {
            rotulo: "Uma frase com uma delas",
            placeholder: "Hoje eu li um livro.",
            minLetras: 12,
          },
        ],
        cicloRevisao: true,
        checklist: [
          "Escrevi três palavras teimosas.",
          "Minha frase usa uma dessas palavras.",
          "Comecei a frase com maiúscula e terminei com ponto.",
        ],
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual é a forma correta?",
        opcoes: ["muinto", "muito", "mutio", "muyto"],
        correta: 1,
        feedbackOpcoes: [
          "«muinto» não é a resposta. A certa é «muito».",
          null,
          "«mutio» não é a resposta. A certa é «muito».",
          "«muyto» não é a resposta. A certa é «muito».",
        ],
        feedbackAcerto: "🎉 MUITO, sem N.",
        feedbackErro: "A gente fala 'muinto', mas escreve MUITO, sem N.",
        dica: "Essa palavra se fala de um jeito e se escreve de outro.",
        reensino:
          "Vamos entender juntos: MUITO é palavra teimosa — guarde o desenho dela: M-U-I-T-O.",
      },
      {
        pergunta: "2/5 — LH, NH e CH fazem…",
        opcoes: ["dois sons", "um som só", "nenhum som", "três sons"],
        correta: 1,
        feedbackOpcoes: [
          "«dois sons» não é a resposta. A certa é «um som só».",
          null,
          "«nenhum som» não é a resposta. A certa é «um som só».",
          "«três sons» não é a resposta. A certa é «um som só».",
        ],
        feedbackAcerto: "🎉 Isso! Duas letras, um som.",
        feedbackErro: "Fale FILHO: o LH sai numa batida só.",
        dica: "Fale FILHO devagar e escute o pedaço LH.",
        reensino: "Vamos entender juntos: são pares inseparáveis — LH, NH e CH.",
      },
      {
        pergunta: "3/5 — Amanhã os alunos ______ a história.",
        opcoes: ["leram", "lerão", "lêram", "leraum"],
        correta: 1,
        feedbackOpcoes: [
          "«leram» não é a resposta. A certa é «lerão».",
          null,
          "«lêram» não é a resposta. A certa é «lerão».",
          "«leraum» não é a resposta. A certa é «lerão».",
        ],
        feedbackAcerto: "🎉 AMANHÃ é futuro: LERÃO.",
        feedbackErro: "AMANHÃ ainda vai acontecer. Futuro termina em ÃO.",
        dica: "A palavra AMANHÃ mostra se é passado ou futuro.",
        reensino: "Vamos entender juntos: passado = AM; futuro = ÃO.",
      },
      {
        pergunta: "4/5 — Qual palavra está escrita corretamente?",
        opcoes: ["caminio", "caminho", "caminnho", "camiño"],
        correta: 1,
        feedbackOpcoes: [
          "«caminio» não é a resposta. A certa é «caminho».",
          null,
          "«caminnho» não é a resposta. A certa é «caminho».",
          "«camiño» não é a resposta. A certa é «caminho».",
        ],
        feedbackAcerto: "🎉 CAMINHO, com NH.",
        feedbackErro: "O som do meio vem do par NH: CA-MI-NHO.",
        dica: "Fale a palavra e escute a sílaba do meio.",
        reensino: "Vamos entender juntos: NI e NH têm sons diferentes. Aqui é NH.",
      },
      {
        pergunta: "5/5 — Por que chamamos algumas palavras de teimosas?",
        opcoes: [
          "Porque são muito compridas",
          "Porque não dá para ler juntando os sons devagar",
          "Porque só aparecem em livros difíceis",
          "Porque têm acento",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Porque são muito compridas» não é a resposta. A certa é «Porque não dá para ler juntando os sons devagar».",
          null,
          "«Porque só aparecem em livros difíceis» não é a resposta. A certa é «Porque não dá para ler juntando os sons devagar».",
          "«Porque têm acento» não é a resposta. A certa é «Porque não dá para ler juntando os sons devagar».",
        ],
        feedbackAcerto: "🎉 Exatamente! Elas se reconhecem inteiras.",
        feedbackErro: "Não é o tamanho: é que a soletração não funciona nelas.",
        dica: "Tente soletrar HOJE bem devagar. Sai a palavra certa?",
        reensino:
          "Vamos entender juntos: como aparecem muitas vezes, guardamos o desenho inteiro delas.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça às palavras teimosas",
    materiais: ["Um livro ou revista", "Lápis"],
    passos: [
      "1) Abram qualquer página de um livro ou revista.",
      "2) Procurem juntos as palavras MUITO, HOJE, PORQUE, TAMBÉM e AQUI.",
      "3) A criança lê cada uma num relance, sem soletrar.",
      "4) Contem quantas encontraram na página.",
    ],
    registro: "📝 Escreva quantas palavras teimosas vocês acharam na página.",
  },

  recompensa: { xp: 120, moedas: 70 },
};
