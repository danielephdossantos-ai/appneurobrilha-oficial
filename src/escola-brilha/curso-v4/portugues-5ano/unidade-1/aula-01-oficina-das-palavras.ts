import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";

/**
 * Unidade 1 · Aula única — A Oficina das Palavras
 * -------------------------------------------------------------
 * Sílaba tônica e as três classificações (oxítona, paroxítona,
 * proparoxítona) + regras de acentuação e ortografia.
 *
 * BNCC: EF05LP01, EF05LP02, EF05LP03, EF05LP04, EF05LP05
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-oficina-das-palavras",
  titulo: "A Oficina das Palavras: Acentuação e Grafia",
  iconeTrilha: "🔍",
  bncc: ["EF05LP01", "EF05LP02", "EF05LP03", "EF05LP04", "EF05LP05"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A prensa travou!",
    historia:
      "— {NOME}, olha só! As engrenagens da Tipografia Real travaram: as letras estão saindo SEM acento e as palavras ficaram bagunçadas nas frases! No 5º ano você vira Mestre da Palavra. Para consertar essa máquina, precisamos dominar a sílaba tônica e as regras das oxítonas, paroxítonas e proparoxítonas. Vamos revisar cada tipo antes que o jornal seja impresso errado!",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Olhe as três palavras que saíram da prensa. Elas se escrevem quase igual — mas o acento muda tudo. Qual você acha que é o assunto da aula?",
    bloco: {
      titulo: "As três irmãs da prensa",
      capaImagemUrl: lapis,
      pistas: [
        { imagemUrl: passaro, nome: "Sabiá — o pássaro" },
        { imagemUrl: professora, nome: "Sábia — a pessoa inteligente" },
      ],
      recado: {
        rotulo: "Folha saída da prensa",
        icone: "🖨️",
        linhas: [
          "SABIÁ  →  o pássaro que canta",
          "SÁBIA  →  a mulher que sabe muito",
          "SABIA  →  do verbo saber (eu sabia)",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que faz essas três palavras terem significados tão diferentes?",
      hipoteses: [
        { texto: "A posição da sílaba forte e o acento que a marca" },
        { texto: "O tamanho da letra usada na impressão" },
        { texto: "A cor da tinta da prensa" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔍 Exato! O acento é um sinal de trânsito da leitura: ele mostra qual sílaba é a mais forte, e isso muda o significado da palavra inteira.",
      feedbackErro:
        "Repare: as letras são as mesmas em todas. O que muda é ONDE fica a força da voz — e o acento é quem marca isso.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras técnicas destravam a máquina inteira.",
    cards: [
      {
        palavra: "oxítona",
        explicacao:
          "Palavra cuja ÚLTIMA sílaba é a mais forte. Acentuam-se as terminadas em A, E, O, EM, ENS.",
        exemplo: "ca-FÉ, tam-BÉM, ci-PÓ, ja-CA-RÉ.",
        imagemUrl: lapis,
      },
      {
        palavra: "paroxítona",
        explicacao:
          "Palavra cuja PENÚLTIMA sílaba é a mais forte. Acentuam-se as terminadas em R, L, N, X, PS, Ã, ÃO, UM, UNS, I, IS, US.",
        exemplo: "FÁ-cil, TÓ-rax, Í-mã, JÚ-ri.",
        imagemUrl: livro,
      },
      {
        palavra: "proparoxítona",
        explicacao:
          "Palavra cuja ANTEPENÚLTIMA sílaba é a mais forte. Regra de ouro: TODAS levam acento, sem exceção.",
        exemplo: "LÂM-pa-da, MÍS-ti-co, NÚ-me-ro, MÁ-gi-ca.",
        imagemUrl: lupa,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Lousa do professor · Acento dentro da frase",
    instrucao:
      "Antes de você responder qualquer coisa, o professor resolve na lousa. Leia a frase, veja o realce e leia a análise embaixo. Avance passo a passo.",
    blocos: [
      {
        tipo: "licaoLousa",
        regra:
          "O acento não é enfeite: ele marca a sílaba mais forte da palavra e, muitas vezes, é ele que decide o SENTIDO dentro da frase.",
        comoIdentificar:
          "Fale a palavra em voz alta e alongue a sílaba forte. Depois conte de trás para frente: última (oxítona), penúltima (paroxítona), antepenúltima (proparoxítona — sempre acentuada).",
        passos: [
          {
            frase: "O sabiá cantou no galho da mangueira.",
            destaque: ["sabiá"],
            analise:
              "A força da voz cai na última sílaba: sa-bi-Á. É oxítona terminada em A, então leva acento agudo. Aqui a palavra é substantivo: nomeia o pássaro que praticou a ação de cantar.",
            nota: "Teste: troque por outro substantivo — 'O pássaro cantou'. A frase continua de pé, o que confirma que sabiá é o nome do ser.",
          },
          {
            frase: "A sábia professora explicou a regra duas vezes.",
            destaque: ["sábia"],
            analise:
              "Em SÁ-bia a força está na penúltima sílaba: é paroxítona. Paroxítona terminada em A normalmente NÃO leva acento (casa, mesa), mas esta termina em ditongo (-ia), e paroxítona terminada em ditongo é acentuada. Na frase, sábia acompanha 'professora': é adjetivo, diz COMO ela é.",
            nota: "Adjetivo anda colado a um substantivo. Se você tirar 'professora', a frase perde o apoio: 'A sábia explicou' só funciona porque o substantivo fica subentendido.",
          },
          {
            frase: "Eu sabia a resposta, mas fiquei em silêncio.",
            destaque: ["sabia"],
            analise:
              "Sem acento nenhum: sa-BI-a, paroxítona terminada em A, e paroxítona terminada em A não é acentuada. Aqui a palavra é VERBO — indica o que eu fazia no passado (pretérito imperfeito de saber).",
            nota: "Teste do verbo: coloque um tempo diferente. 'Eu sei a resposta' / 'Eu saberei a resposta'. Se muda de tempo, é verbo.",
          },
          {
            frase: "O médico anotou o número do prontuário.",
            destaque: ["médico", "número"],
            analise:
              "MÉ-di-co e NÚ-me-ro têm a força na antepenúltima sílaba: proparoxítonas. Regra de ouro sem exceção: todas levam acento. Repare que, sem o acento, 'medico' viraria verbo (eu medico) e a frase mudaria de sentido.",
          },
        ],
        comparacao: {
          errado: "O medico anotou o numero do prontuario.",
          certo: "O médico anotou o número do prontuário.",
          porque:
            "Sem acento, 'medico' é verbo e 'numero' é verbo (eu numero as páginas). A frase deixa de falar de um profissional e de uma quantidade e vira uma sequência de ações sem sentido.",
        },
        curiosidade:
          "O português é uma das poucas línguas que usam acento para separar palavras iguais na escrita. Em inglês, 'record' (disco) e 'record' (gravar) só se diferenciam pela fala; nós resolvemos isso no papel.",
        resumo: [
          "Sílaba tônica primeiro, regra depois.",
          "Proparoxítona: todas acentuadas, sem exceção.",
          "Oxítona: acentua em A, E, O, EM, ENS.",
          "O acento pode mudar a classe da palavra (substantivo, adjetivo, verbo) e o sentido da frase inteira.",
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia contando as sílabas de trás para frente, como faz o tipógrafo: última, penúltima, antepenúltima.",
    leitura: {
      titulo: "O manual do tipógrafo",
      imagemUrl: livro,
      legendaImagem: "O manual guardado ao lado da prensa",
      destacar: ["sílaba tônica", "de trás para frente", "todas levam acento"],
      paragrafos: [
        "Antes de acentuar qualquer palavra, o tipógrafo faz sempre a mesma coisa: fala a palavra em voz alta e escuta qual sílaba sai mais forte. Essa sílaba forte tem nome — chama-se sílaba tônica.",
        "Depois, ele conta as sílabas de trás para frente. Se a forte é a última, a palavra é oxítona. Se é a penúltima, é paroxítona. Se é a antepenúltima, é proparoxítona.",
        "A última etapa é a regra. Nas proparoxítonas ele nem pensa: todas levam acento. Nas oxítonas, ele olha a terminação (A, E, O, EM, ENS). Nas paroxítonas, acentua as que terminam em R, L, N, X, PS, I, IS, US, UM, UNS, Ã e ÃO.",
        "Foi assim que ele percebeu o erro do jornal de ontem: estava escrito 'o medico examinou o paciente'. Como MÉ-di-co tem a antepenúltima forte, faltava o acento agudo no E. Médico.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao manual sempre que precisar confirmar a regra.",
    perguntas: [
      {
        pergunta: "Qual é a primeira coisa que o tipógrafo faz antes de acentuar uma palavra?",
        opcoes: [
          "Fala a palavra em voz alta para descobrir qual sílaba sai mais forte",
          "Conta quantas letras a palavra tem",
          "Verifica se a palavra é bonita",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! A sílaba tônica vem primeiro; a regra vem depois.",
        feedbackErro: "Releia o primeiro parágrafo: tudo começa escutando a força da voz.",
        ondeEstaNoTexto:
          "ele fala a palavra em voz alta e escuta qual sílaba sai mais forte. Essa sílaba forte tem nome — chama-se sílaba tônica.",
      },
      {
        pergunta: "Por que 'médico' precisa de acento?",
        opcoes: [
          "Porque é proparoxítona, e todas as proparoxítonas são acentuadas",
          "Porque termina em O",
          "Porque é uma palavra comprida",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Regra de ouro aplicada: MÉ-di-co tem a antepenúltima forte.",
        feedbackErro:
          "Conte de trás para frente: co (última), di (penúltima), MÉ (antepenúltima, a mais forte).",
        ondeEstaNoTexto: "Como MÉ-di-co tem a antepenúltima forte, faltava o acento agudo no E.",
      },
      {
        pergunta: "A palavra 'café' é acentuada porque…",
        opcoes: [
          "é oxítona terminada em E",
          "é proparoxítona",
          "termina com consoante",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Perfeito: oxítonas em A, E, O, EM e ENS levam acento.",
        feedbackErro: "A força está na última sílaba (ca-FÉ) e ela termina em E.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora classifique cada palavra da bancada da prensa.",
    perguntas: [
      {
        pergunta: "A palavra AÇÚCAR é classificada como…",
        opcoes: ["paroxítona", "oxítona", "proparoxítona"],
        correta: 0,
        feedbackAcerto: "🔍 a-ÇÚ-car: a força está na penúltima sílaba, e termina em R — acentua!",
        feedbackErro: "Fale devagar: a-ÇÚ-car. A sílaba forte é a penúltima.",
      },
      {
        pergunta: "A palavra ANANÁS é classificada como…",
        opcoes: ["oxítona", "paroxítona", "proparoxítona"],
        correta: 0,
        feedbackAcerto: "🔍 a-na-NÁS: a última sílaba é a mais forte.",
        feedbackErro: "A voz sobe no fim da palavra: a-na-NÁS.",
      },
      {
        pergunta: "A palavra HERÓI é…",
        opcoes: ["oxítona", "proparoxítona", "paroxítona"],
        correta: 0,
        feedbackAcerto: "🔍 he-RÓI: força na última sílaba, com o ditongo aberto ÓI acentuado.",
        feedbackErro: "Diga em voz alta: he-RÓI. A força cai no fim.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem os passos que o tipógrafo segue para acentuar uma palavra.",
    bloco: {
      instrucao: "Arraste os passos para a ordem correta do manual.",
      itens: [
        { id: "p1", texto: "Falar a palavra em voz alta e ouvir a sílaba mais forte" },
        { id: "p2", texto: "Contar as sílabas de trás para frente" },
        { id: "p3", texto: "Classificar: oxítona, paroxítona ou proparoxítona" },
        { id: "p4", texto: "Aplicar a regra da terminação e martelar o acento" },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔍 Sequência perfeita! É exatamente assim que a prensa acerta sempre.",
      feedbackErro: "Lembre: primeiro se escuta a força, depois se conta, depois se classifica e só então se acentua.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho o recorte do jornal e cace os erros como um revisor.",
    leitura: {
      titulo: "O recorte com erros",
      imagemUrl: lapis,
      destacar: ["arvore", "publico", "sabado"],
      paragrafos: [
        "A arvore centenaria da praça sera podada no sabado. O publico podera acompanhar o trabalho a distancia.",
        "O revisor da tipografia leu duas vezes e balançou a cabeça: três palavras estavam sem acento. Árvore e público são proparoxítonas — a regra de ouro manda acentuar. Sábado também: sá-ba-do, antepenúltima forte.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quais palavras do recorte estavam sem o acento obrigatório?",
        opcoes: [
          "árvore, público e sábado",
          "praça, podada e trabalho",
          "revisor, tipografia e cabeça",
        ],
        correta: 0,
        feedbackAcerto: "🔍 As três são proparoxítonas — e proparoxítona SEMPRE leva acento.",
        feedbackErro: "Procure as palavras com a antepenúltima sílaba forte.",
        ondeEstaNoTexto: "Árvore e público são proparoxítonas — a regra de ouro manda acentuar. Sábado também.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "O Martelo da Tipografia",
    instrucao:
      "As palavras passam na esteira. Marque apenas as que são PROPAROXÍTONAS — todas elas precisam de acento.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "O Martelo da Tipografia",
      bloco: {
        instrucao: "Toque nas palavras proparoxítonas que passam pela esteira.",
        pergunta: "Quais palavras têm a ANTEPENÚLTIMA sílaba mais forte?",
        opcoes: [
          { id: "o1", texto: "lâmpada", correto: true },
          { id: "o2", texto: "relâmpago", correto: true },
          { id: "o3", texto: "maracujá", correto: false },
          { id: "o4", texto: "científico", correto: true },
          { id: "o5", texto: "papel", correto: false },
          { id: "o6", texto: "coração", correto: false },
        ],
        feedbackAcerto: "🔨 Prensa consertada! Você martelou o acento nas três proparoxítonas.",
        feedbackErro: "Fale cada palavra devagar e conte de trás para frente até achar a sílaba forte.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Sílaba tônica é a sílaba pronunciada com mais força.",
      "Oxítona: última sílaba forte — acentua em A, E, O, EM, ENS.",
      "Paroxítona: penúltima forte — acentua em R, L, N, X, PS, I, IS, US, UM, UNS, Ã, ÃO.",
      "Proparoxítona: antepenúltima forte — TODAS levam acento.",
      "O acento muda o sentido: sabiá (pássaro), sábia (inteligente), sabia (verbo).",
    ],
    miniDesafio: {
      pergunta: "Qual palavra está corretamente acentuada?",
      opcoes: ["número", "numero", "numeró"],
      correta: 0,
      feedbackAcerto: "🔍 NÚ-me-ro: proparoxítona acentuada, como manda a regra de ouro.",
      feedbackErro: "A força está na primeira sílaba de três: NÚ-me-ro.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual opção contém APENAS palavras proparoxítonas?",
        opcoes: [
          "mágica, científico, público, relâmpago",
          "maracujá, papel, avô, coração",
          "fácil, tórax, ímã, júri",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Excelente! Você dominou a regra de ouro das proparoxítonas. A prensa voltou a funcionar!",
        feedbackErro:
          "Na opção B há oxítonas; na C, paroxítonas. Procure a alternativa em que a força cai na antepenúltima sílaba de todas.",
      },
      {
        pergunta: "Por que 'fácil' recebe acento?",
        opcoes: [
          "É paroxítona terminada em L",
          "É oxítona terminada em L",
          "É proparoxítona",
        ],
        correta: 0,
        feedbackAcerto: "🔍 FÁ-cil: penúltima forte + terminação L = acento.",
        feedbackErro: "A força está em FÁ, a penúltima sílaba. Agora olhe a terminação.",
      },
      {
        pergunta: "Qual frase usa a palavra correta?",
        opcoes: [
          "A sábia professora explicou a regra.",
          "A sabiá professora explicou a regra.",
          "A sabia professora explicou a regra.",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Sábia = quem sabe muito. Sabiá é o pássaro; sabia é o verbo saber.",
        feedbackErro: "Aqui falamos de uma pessoa inteligente — qual das três palavras tem esse sentido?",
      },
      {
        pergunta: "A palavra 'tórax' é acentuada porque é paroxítona terminada em…",
        opcoes: ["X", "S", "A"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! X está na lista das terminações que acentuam paroxítonas.",
        feedbackErro: "Olhe a última letra da palavra e compare com a lista das paroxítonas.",
      },
      {
        pergunta: "Qual palavra NÃO deveria receber acento?",
        opcoes: ["menino", "cipo (a planta trepadeira)", "lampada"],
        correta: 0,
        feedbackAcerto:
          "🔍 Correto: me-NI-no é paroxítona terminada em O — e essa terminação não é acentuada. Já cipó e lâmpada precisam de acento.",
        feedbackErro: "Duas dessas palavras estão erradas justamente por falta de acento. Encontre a que já está certa.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça aos Acentos no Mercado",
    materiais: ["Papel e lápis", "Embalagens de produtos de casa ou do mercado"],
    passos: [
      "Procure em embalagens três palavras com acento.",
      "Anote cada palavra e fale em voz alta, batendo palma na sílaba forte.",
      "Com a família, classifique cada uma: oxítona, paroxítona ou proparoxítona.",
      "Descubra juntos qual regra explica o acento de cada palavra.",
    ],
    registro: "Anote as três palavras com a classificação ao lado e traga para a próxima aula.",
  },

  recompensa: {
    xp: 120,
    moedas: 40,
    medalha: "🔍 Lupa de Revisor de Tipografia",
  },
};
