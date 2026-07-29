import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as tambor } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as vento } from "@/assets/neuro-treino/objetos/vento.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";

/**
 * Unidade 6 · Aula única — O Ritmo das Palavras
 * -------------------------------------------------------------
 * Poesia: verso, estrofe, rima, ritmo e linguagem figurada
 * (metáfora, comparação, personificação).
 *
 * BNCC: EF05LP27, EF05LP28, EF35LP31
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-o-ritmo-das-palavras",
  titulo: "O Ritmo das Palavras: Verso, Rima e Metáfora",
  iconeTrilha: "🎵",
  bncc: ["EF05LP27", "EF05LP28", "EF35LP31"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O tambor da poesia",
    historia:
      "— Pip, por que este texto não é escrito de ponta a ponta como os outros? — Porque é poema, Pipa! No poema a palavra tem batida, como tambor: linha curta, pausa, rima. E o poeta ainda faz uma mágica: chama a lua de moeda de prata sem estar mentindo. Isso é linguagem figurada. Vamos afinar seu ouvido.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Leia as quatro linhas em voz alta batendo palma no fim de cada uma.",
    bloco: {
      titulo: "Quatro linhas com batida",
      capaImagemUrl: tambor,
      pistas: [
        { imagemUrl: lua, nome: "A lua do poema" },
        { imagemUrl: chuva, nome: "A chuva que conversa" },
      ],
      recado: {
        rotulo: "Poema encontrado",
        icone: "🎵",
        linhas: [
          "A lua é moeda de prata",
          "caída no fim do quintal.",
          "A chuva bateu na calçada",
          "e conversou devagar.",
        ],
        estilo: "papel",
      },
      pergunta: "O que torna esse texto um poema?",
      hipoteses: [
        { texto: "É escrito em versos, com ritmo e imagens fora do sentido literal" },
        { texto: "Fala sobre a natureza" },
        { texto: "É curto" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎵 Isso! Verso, ritmo e linguagem figurada — a lua não é moeda de verdade, é imagem.",
      feedbackErro:
        "Muitos textos curtos falam de natureza sem ser poema. Olhe as linhas quebradas e a imagem da moeda.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três instrumentos do laboratório do poeta.",
    cards: [
      {
        palavra: "verso e estrofe",
        explicacao:
          "Verso é cada linha do poema. Estrofe é o conjunto de versos separado por um espaço em branco.",
        exemplo: "O poema da lua tem 4 versos em 1 estrofe.",
        imagemUrl: tambor,
      },
      {
        palavra: "rima e ritmo",
        explicacao:
          "Rima é a repetição de sons semelhantes no fim dos versos. Ritmo é a batida criada pela alternância de sílabas fortes e fracas.",
        exemplo: "calçada / molhada · quintal / final.",
        imagemUrl: chuva,
      },
      {
        palavra: "linguagem figurada",
        explicacao:
          "Comparação usa 'como'. Metáfora afirma direto, sem 'como'. Personificação dá ações humanas a coisas e animais.",
        exemplo:
          "Comparação: a lua é como uma moeda. Metáfora: a lua é moeda de prata. Personificação: a chuva conversou.",
        imagemUrl: lua,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Lousa do professor · Verso, rima e sentido figurado",
    instrucao:
      "O professor escreve os versos na lousa e mostra onde nasce o ritmo e onde a palavra sai do sentido literal.",
    blocos: [
      {
        tipo: "licaoLousa",
        regra:
          "No poema, a forma faz parte do sentido: verso é cada linha, estrofe é o bloco de versos, rima é a coincidência sonora do final e a metáfora troca o sentido literal por uma imagem.",
        comoIdentificar:
          "Para achar a rima, leia só o final de cada verso em voz alta. Para achar metáfora, pergunte: 'isso é possível de verdade?'. Se não é, o sentido é figurado.",
        passos: [
          {
            frase: "O vento assobia no telhado / e some no fim do telhado calado.",
            destaque: ["telhado", "calado"],
            analise:
              "Duas linhas = dois versos. Os finais 'telhado' e 'calado' têm o mesmo som a partir da vogal tônica (-ado): é rima. A rima organiza o ritmo e ajuda a memorizar o poema.",
          },
          {
            frase: "O vento assobia no telhado.",
            destaque: ["assobia"],
            analise:
              "Vento não tem boca: quem assobia é gente. Atribuir ação humana a algo que não é humano é PERSONIFICAÇÃO — o poema faz o leitor ouvir o som sem descrevê-lo tecnicamente.",
          },
          {
            frase: "Meu avô é uma biblioteca de histórias.",
            destaque: ["é uma biblioteca"],
            analise:
              "Metáfora: o avô não é um prédio com estantes. A comparação é feita SEM a palavra 'como' — afirma-se diretamente uma coisa pela outra para transmitir a ideia de acúmulo e sabedoria.",
            nota: "Se aparecesse 'como' — 'meu avô é como uma biblioteca' — seria comparação (símile), não metáfora.",
          },
          {
            frase: "Girassol, girassol, / você gira e olha o sol; / eu giro e olho você.",
            destaque: ["gira", "giro"],
            analise:
              "Repetição intencional cria ritmo e ligação de sentido: o movimento da flor espelha o movimento de quem observa. No poema, repetir não é erro — é recurso.",
          },
        ],
        comparacao: {
          errado: "O poema fala do vento porque o autor gosta de vento.",
          certo: "O poema usa o vento como imagem da passagem do tempo: ele chega, faz barulho e vai embora calado.",
          porque:
            "Interpretar poesia não é adivinhar o gosto do autor: é mostrar que sentido as imagens constroem dentro do texto, apontando os versos que sustentam a leitura.",
        },
        curiosidade:
          "Nem todo poema rima. O verso livre, comum a partir do Modernismo, abre mão da rima e da métrica fixa — o ritmo passa a vir do corte das linhas e da repetição.",
        resumo: [
          "Verso = linha; estrofe = bloco de versos.",
          "Rima = som igual a partir da sílaba tônica final.",
          "Metáfora afirma sem 'como'; comparação usa 'como'.",
          "Personificação dá ação humana ao que não é humano.",
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia marcando as rimas no fim dos versos e as imagens figuradas.",
    leitura: {
      titulo: "Poema do vento",
      imagemUrl: vento,
      legendaImagem: "O vento que assobia entre as folhas",
      destacar: ["assobiou", "como um viajante", "é um cavalo solto"],
      paragrafos: [
        "O vento assobiou na janela / e pediu para entrar. / Trouxe cheiro de terra molhada / e não quis se explicar.",
        "Ele corre como um viajante / que perdeu o endereço. / O vento é um cavalo solto / galopando sem começo.",
        "Na primeira estrofe, 'entrar' rima com 'explicar'. Na segunda, o poeta usa comparação — 'corre como um viajante' — e depois metáfora: 'o vento é um cavalo solto'. E 'assobiou' e 'pediu' são ações humanas dadas ao vento: personificação.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Confirme cada resposta no poema.",
    perguntas: [
      {
        pergunta: "Qual verso contém uma COMPARAÇÃO?",
        opcoes: [
          "'Ele corre como um viajante'",
          "'O vento é um cavalo solto'",
          "'O vento assobiou na janela'",
        ],
        correta: 0,
        feedbackAcerto: "🎵 A palavra 'como' é a marca da comparação.",
        feedbackErro: "Procure o verso que usa a palavra 'como'.",
        ondeEstaNoTexto: "Ele corre como um viajante / que perdeu o endereço.",
      },
      {
        pergunta: "Qual verso é uma METÁFORA?",
        opcoes: [
          "'O vento é um cavalo solto'",
          "'Ele corre como um viajante'",
          "'Trouxe cheiro de terra molhada'",
        ],
        correta: 0,
        feedbackAcerto: "🎵 Sem 'como': afirma direto que o vento É cavalo. Metáfora pura.",
        feedbackErro: "Metáfora não usa 'como' — ela afirma a imagem diretamente.",
        ondeEstaNoTexto: "O vento é um cavalo solto / galopando sem começo.",
      },
      {
        pergunta: "Por que 'o vento assobiou e pediu para entrar' é personificação?",
        opcoes: [
          "Porque assobiar e pedir são ações humanas atribuídas ao vento",
          "Porque o vento é forte",
          "Porque a janela estava aberta",
        ],
        correta: 0,
        feedbackAcerto: "🎵 Personificar é dar vida humana ao que não é humano.",
        feedbackErro: "Pergunte: quem costuma assobiar e pedir alguma coisa?",
        ondeEstaNoTexto: "'assobiou' e 'pediu' são ações humanas dadas ao vento: personificação.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Afine o ouvido para rima, verso e estrofe.",
    perguntas: [
      {
        pergunta: "Quantas estrofes tem o Poema do vento?",
        opcoes: ["duas", "quatro", "uma"],
        correta: 0,
        feedbackAcerto: "🎵 Duas estrofes de quatro versos cada.",
        feedbackErro: "Conte os blocos separados por espaço em branco.",
      },
      {
        pergunta: "Qual par de palavras rima?",
        opcoes: ["janela / panela", "janela / porta", "vento / janela"],
        correta: 0,
        feedbackAcerto: "🎵 Mesma terminação sonora: -ela.",
        feedbackErro: "Rima é semelhança de SOM no final, não de sentido.",
      },
      {
        pergunta: "Qual frase é uma metáfora?",
        opcoes: [
          "Meus olhos são duas janelas.",
          "Meus olhos são castanhos.",
          "Meus olhos estão cansados.",
        ],
        correta: 0,
        feedbackAcerto: "🎵 Afirmação figurada, sem 'como'.",
        feedbackErro: "Duas frases descrevem os olhos de verdade. Procure a imagem impossível na vida literal.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para escrever um poema com imagem e rima.",
    bloco: {
      instrucao: "Arraste os passos do laboratório poético.",
      itens: [
        { id: "s1", texto: "Escolher o tema e observar bem o objeto" },
        { id: "s2", texto: "Criar uma imagem figurada (metáfora ou comparação)" },
        { id: "s3", texto: "Quebrar as frases em versos e testar o ritmo em voz alta" },
        { id: "s4", texto: "Buscar rimas e ajustar as terminações" },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎵 É assim que se afina um poema: imagem primeiro, som depois.",
      feedbackErro: "O poeta observa antes de escrever, e ajusta a rima só no fim.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho este poema curto e encontre as figuras de linguagem.",
    leitura: {
      titulo: "Girassol",
      imagemUrl: girassol,
      destacar: ["gira o pescoço", "é um sol pequeno"],
      paragrafos: [
        "O girassol gira o pescoço / procurando o dia. / É um sol pequeno plantado / no meio da alegria.",
        "Duas mágicas acontecem aqui: 'gira o pescoço' dá ao girassol um corpo humano, e 'é um sol pequeno' o transforma, por metáfora, em outro astro.",
      ],
    },
    perguntas: [
      {
        pergunta: "Que figura de linguagem está em 'é um sol pequeno plantado'?",
        opcoes: ["metáfora", "comparação", "rima"],
        correta: 0,
        feedbackAcerto: "🎵 Afirmação direta, sem 'como': metáfora.",
        feedbackErro: "Se houvesse 'como', seria comparação. Não há.",
        ondeEstaNoTexto: "'é um sol pequeno' o transforma, por metáfora, em outro astro.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "A Fábrica de Rimas",
    instrucao: "Selecione todas as palavras que rimam com CANÇÃO.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "A Fábrica de Rimas",
      bloco: {
        instrucao: "Toque nas palavras que terminam com o mesmo som de CANÇÃO.",
        pergunta: "Quais palavras rimam com canção?",
        opcoes: [
          { id: "r1", texto: "coração", correto: true },
          { id: "r2", texto: "violão", correto: true },
          { id: "r3", texto: "menina", correto: false },
          { id: "r4", texto: "emoção", correto: true },
          { id: "r5", texto: "cantar", correto: false },
        ],
        feedbackAcerto: "🎵 Fábrica afinada! Três rimas perfeitas em -ão.",
        feedbackErro: "Leia cada palavra em voz alta e escute apenas o FINAL do som.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Verso é a linha; estrofe é o bloco de versos.",
      "Rima é a semelhança de som no fim dos versos.",
      "Comparação usa 'como'; metáfora afirma direto.",
      "Personificação dá ações humanas a seres não humanos.",
      "O ritmo se descobre lendo em voz alta.",
    ],
    miniDesafio: {
      pergunta: "'A cidade acordou cedo' é um exemplo de…",
      opcoes: ["personificação", "comparação", "rima"],
      correta: 0,
      feedbackAcerto: "🎵 Quem acorda são pessoas — a cidade ganhou vida humana.",
      feedbackErro: "Pense em quem, de verdade, pode acordar.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual frase é uma COMPARAÇÃO?",
        opcoes: [
          "Seus olhos brilham como estrelas.",
          "Seus olhos são estrelas.",
          "As estrelas dormiram cedo.",
        ],
        correta: 0,
        feedbackAcerto: "🎵 Excelente! Você conquistou a Lira do Poeta.",
        feedbackErro: "A comparação sempre traz a palavra 'como'.",
      },
      {
        pergunta: "Cada linha de um poema chama-se…",
        opcoes: ["verso", "estrofe", "parágrafo"],
        correta: 0,
        feedbackAcerto: "🎵 Verso é a linha; estrofe é o bloco.",
        feedbackErro: "Parágrafo é da prosa. No poema o nome é outro.",
      },
      {
        pergunta: "'O relógio engoliu a tarde' é…",
        opcoes: ["metáfora com personificação", "rima", "comparação"],
        correta: 0,
        feedbackAcerto: "🎵 Engolir é ação de ser vivo, e a imagem é figurada.",
        feedbackErro: "Não há 'como', e o relógio faz algo humano.",
      },
      {
        pergunta: "Qual par NÃO rima?",
        opcoes: ["janela / cadeira", "quintal / final", "calçada / molhada"],
        correta: 0,
        feedbackAcerto: "🎵 -ela e -eira têm sons diferentes.",
        feedbackErro: "Leia os três pares em voz alta e escute os finais.",
      },
      {
        pergunta: "Para descobrir o ritmo de um poema, o melhor é…",
        opcoes: [
          "ler em voz alta marcando as sílabas fortes",
          "contar as letras",
          "olhar o desenho da página",
        ],
        correta: 0,
        feedbackAcerto: "🎵 Poema se escuta. O corpo sente a batida.",
        feedbackErro: "O ritmo é som — precisa da voz para aparecer.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "O Poema da Janela",
    materiais: ["Papel e lápis"],
    passos: [
      "Olhe pela janela de casa com alguém da família por um minuto, em silêncio.",
      "Escolham juntos um elemento (a rua, uma árvore, o céu).",
      "Criem uma metáfora para ele: 'a rua é…'.",
      "Escrevam quatro versos, tentando rimar o segundo com o quarto.",
    ],
    registro: "Copie o poema de quatro versos e sublinhe a metáfora criada.",
  },

  recompensa: {
    xp: 120,
    moedas: 40,
    medalha: "🎵 Lira do Poeta",
  },
};
