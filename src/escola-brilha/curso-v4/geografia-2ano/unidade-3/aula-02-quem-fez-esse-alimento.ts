import type { AulaPortuguesV4 } from "../../types";
import vaca from "@/assets/neuro-treino/objetos/vaca.png";
import campo from "@/assets/neuro-treino/objetos/campo.png";
import mercado from "@/assets/neuro-treino/objetos/mercado.png";
import padaria from "@/assets/neuro-treino/objetos/padaria.png";
import galinha from "@/assets/neuro-treino/objetos/galinha.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import mapaPercurso from "@/assets/neuro-treino/objetos/mapa-percurso.png";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import semente from "@/assets/neuro-treino/objetos/semente.png";
import geladeira from "@/assets/neuro-treino/objetos/geladeira.png";
import cidade from "@/assets/neuro-treino/objetos/cidade.png";

/**
 * Geografia · 2º Ano · Unidade 3 · Aula 02
 * "Quem Fez Esse Alimento?" — EF02GE07
 *
 * A criança associa PRODUTOS finais (queijo, molho, pão) à sua
 * ORIGEM no campo (vaca, tomate, trigo). Padrão travado.
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-quem-fez-esse-alimento",
  titulo: "Quem Fez Esse Alimento?",
  iconeTrilha: "🍅",
  bncc: ["EF02GE07"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O jogo da origem",
    historia:
      "Aurora apareceu com uma cesta cheia: PÃO, QUEIJO, MOLHO DE TOMATE, OVO. 'Brilha, tudo isso NÃO nasceu na prateleira do mercado! Cada um veio de um lugar do CAMPO. Vamos descobrir quem produz cada coisa?'",
    imagemUrl: mercado,
  },

  momento02_previsao: {
    instrucao: "Leia o cartaz e responda.",
    bloco: {
      titulo: "Missão: Quem produz o quê?",
      capaImagemUrl: mercado,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DA CESTA",
          "",
          "Descubra a ORIGEM",
          "de cada alimento",
          "que a gente compra",
          "no mercado.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: padaria, nome: "Pão" },
        { imagemUrl: vaca, nome: "Queijo/leite" },
        { imagemUrl: galinha, nome: "Ovo" },
      ],
      pergunta: "Sobre o que essa missão fala?",
      hipoteses: [
        {
          texto: "Sobre a ORIGEM dos alimentos: quem produz cada coisa no CAMPO.",
          imagemUrl: campo,
        },
        {
          texto: "Sobre como pilotar um caminhão.",
          imagemUrl: mercado,
        },
        { texto: "Sobre desenhar uma casa.", imagemUrl: cidade },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Vamos ligar CADA alimento à sua ORIGEM.",
      feedbackErro:
        "As pistas mostram PÃO, QUEIJO e OVO — a missão fala da ORIGEM dos alimentos.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras da missão.",
    cards: [
      {
        palavra: "origem",
        explicacao:
          "É de ONDE uma coisa vem. A ORIGEM do queijo é o LEITE da VACA.",
        exemplo: "A ORIGEM do pão é o TRIGO plantado no campo.",
        imagemUrl: semente,
      },
      {
        palavra: "matéria-prima",
        explicacao:
          "É o que a gente USA pra fazer outra coisa. Pra fazer molho, a MATÉRIA-PRIMA é o TOMATE.",
        exemplo: "O LEITE é matéria-prima do QUEIJO.",
        imagemUrl: vaca,
      },
      {
        palavra: "agricultor",
        explicacao:
          "É quem PLANTA e COLHE no campo. Junto com a criadora de animais, ele produz o alimento.",
        exemplo: "O AGRICULTOR colhe o tomate no sítio.",
        imagemUrl: campo,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você.",
    leitura: {
      titulo: "De onde vem o que a gente come",
      imagemUrl: mapaPercurso,
      destacar: ["trigo", "pão", "leite", "queijo", "tomate", "molho", "ovo", "galinha"],
      paragrafos: [
        "O PÃO começa no CAMPO. O agricultor planta TRIGO, colhe e manda pra fábrica. A fábrica faz a FARINHA. A padaria usa a farinha pra assar o PÃO.",
        "O QUEIJO começa na VACA. A VACA dá LEITE. O leite vai pra fábrica e vira QUEIJO.",
        "O MOLHO vem do TOMATE plantado no sítio. A fábrica cozinha o tomate e faz MOLHO no vidro.",
        "O OVO vem da GALINHA que vive no campo, no galinheiro.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "De onde vem o PÃO?",
        opcoes: ["Do trigo plantado no campo", "Da vaca", "Do rio"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Do TRIGO.",
        feedbackErro: "O texto diz: 'O agricultor planta TRIGO… A padaria… assar o PÃO'.",
        ondeEstaNoTexto: "…O agricultor planta TRIGO…",
      },
      {
        pergunta: "De onde vem o QUEIJO?",
        opcoes: ["Da galinha", "Do leite da vaca", "Do tomate"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Do LEITE da VACA.",
        feedbackErro: "O texto diz: 'A VACA dá LEITE. O leite… vira QUEIJO'.",
        ondeEstaNoTexto: "…O leite vai pra fábrica e vira QUEIJO…",
      },
      {
        pergunta: "De onde vem o MOLHO?",
        opcoes: ["Do tomate", "Do trigo", "Do ovo"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! Do TOMATE.",
        feedbackErro: "O texto diz: 'O MOLHO vem do TOMATE plantado no sítio'.",
        ondeEstaNoTexto: "…O MOLHO vem do TOMATE plantado no sítio…",
      },
      {
        pergunta: "De onde vem o OVO?",
        opcoes: ["Da vaca", "Da galinha", "Da árvore"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Da GALINHA.",
        feedbackErro: "O texto diz: 'O OVO vem da GALINHA'.",
        ondeEstaNoTexto: "…O OVO vem da GALINHA…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Onde cada produtor trabalha?",
    perguntas: [
      {
        pergunta: "Onde vive a VACA que dá leite?",
        opcoes: ["No campo, no pasto", "Dentro do mercado", "Na padaria"],
        opcoesImagens: [campo, mercado, padaria],
        correta: 0,
        feedbackAcerto: "🎉 No CAMPO, no PASTO.",
        feedbackErro: "A VACA vive no CAMPO, no pasto.",
      },
      {
        pergunta: "Onde a GALINHA bota o OVO?",
        opcoes: ["Num prédio da cidade", "No galinheiro (campo)", "Dentro da geladeira"],
        opcoesImagens: [cidade, galinha, geladeira],
        correta: 1,
        feedbackAcerto: "🎉 No GALINHEIRO, no campo.",
        feedbackErro: "A GALINHA bota o OVO no galinheiro, no CAMPO.",
      },
      {
        pergunta: "Onde o AGRICULTOR planta trigo e tomate?",
        opcoes: ["Na roça / no sítio (campo)", "No shopping", "Em cima do caminhão"],
        opcoesImagens: [campo, mercado, cidade],
        correta: 0,
        feedbackAcerto: "🎉 Na ROÇA / SÍTIO — no CAMPO.",
        feedbackErro: "O AGRICULTOR planta no SÍTIO, no campo.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Ordena a viagem do PÃO: do primeiro passo até o último.",
    bloco: {
      instrucao: "Do primeiro → último.",
      itens: [
        { id: "s1", texto: "1) O agricultor planta o TRIGO.", imagemUrl: semente },
        { id: "s2", texto: "2) Colhe e leva pra fábrica.", imagemUrl: campo },
        { id: "s3", texto: "3) A fábrica faz a FARINHA.", imagemUrl: padaria },
        { id: "s4", texto: "4) A padaria assa o PÃO.", imagemUrl: padaria },
        { id: "s5", texto: "5) A família come no café.", imagemUrl: geladeira },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto: "🎉 Perfeito! Trigo → colheita → farinha → pão → mesa.",
      feedbackErro:
        "Começa PLANTANDO o TRIGO, depois COLHE, vira FARINHA, vira PÃO e por último a família COME.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda.",
    leitura: {
      titulo: "A cesta da vovó",
      imagemUrl: mercado,
      destacar: ["banana", "maçã", "campo", "pomar", "mercado"],
      paragrafos: [
        "A vovó comprou BANANA e MAÇÃ no mercado. Ela contou pra Brilha: 'Essa banana veio de um SÍTIO no campo, de uma bananeira alta. A maçã veio de um POMAR, com árvores cheias de fruta'.",
        "Sem os sítios e pomares, o MERCADO não teria FRUTA nenhuma pra vender.",
      ],
    },
    perguntas: [
      {
        pergunta: "De onde vem a MAÇÃ?",
        opcoes: ["De uma árvore no pomar (campo)", "Do teto do mercado", "Do caminhão"],
        opcoesImagens: [arvore, mercado, campo],
        correta: 0,
        feedbackAcerto: "🎉 De uma ÁRVORE no POMAR.",
        feedbackErro: "O texto diz: 'A maçã veio de um POMAR, com árvores…'.",
        ondeEstaNoTexto: "…A maçã veio de um POMAR…",
      },
      {
        pergunta: "Sem os SÍTIOS e POMARES, o que faltaria no mercado?",
        opcoes: ["Nada — o mercado inventa", "As FRUTAS", "Só os brinquedos"],
        opcoesImagens: [mercado, maca, cidade],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Faltariam as FRUTAS.",
        feedbackErro:
          "O texto diz: 'o MERCADO não teria FRUTA nenhuma pra vender'.",
        ondeEstaNoTexto: "…o MERCADO não teria FRUTA nenhuma pra vender…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🎯 Ligue a Origem",
    instrucao:
      "Arraste CADA produto do mercado até o seu produtor lá no CAMPO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      bloco: {
        instrucao: "Toque no produto e depois na sua ORIGEM.",
        alvos: [
          {
            id: "vaca",
            nome: "🐄 Vaca no pasto",
            descricao: "Dá o LEITE.",
            imagemUrl: vaca,
          },
          {
            id: "trigo",
            nome: "🌾 Plantação de trigo",
            descricao: "Vira farinha.",
            imagemUrl: semente,
          },
          {
            id: "tomate",
            nome: "🍅 Plantação de tomate",
            descricao: "Vira molho.",
            imagemUrl: campo,
          },
          {
            id: "galinha",
            nome: "🐔 Galinheiro",
            descricao: "Bota os ovos.",
            imagemUrl: galinha,
          },
          {
            id: "arvore",
            nome: "🌳 Pomar (árvores)",
            descricao: "Dá as frutas.",
            imagemUrl: arvore,
          },
        ],
        itens: [
          { id: "queijo", texto: "🧀 Queijo", alvoId: "vaca", imagemUrl: vaca },
          { id: "leite", texto: "🥛 Leite", alvoId: "vaca", imagemUrl: geladeira },
          { id: "pao", texto: "🥖 Pão", alvoId: "trigo", imagemUrl: padaria },
          { id: "molho", texto: "🥫 Molho", alvoId: "tomate", imagemUrl: mercado },
          { id: "ovo", texto: "🥚 Ovo", alvoId: "galinha", imagemUrl: galinha },
          { id: "maca", texto: "🍎 Maçã", alvoId: "arvore", imagemUrl: maca },
          { id: "banana", texto: "🍌 Banana", alvoId: "arvore", imagemUrl: banana },
        ],
        feedbackAcerto:
          "🎉 MATCH! Cada produto do mercado tem uma ORIGEM no campo.",
        feedbackErro:
          "Lembra: queijo/leite ← VACA; pão ← TRIGO; molho ← TOMATE; ovo ← GALINHA; frutas ← ÁRVORES.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "ORIGEM = de ONDE uma coisa vem.",
      "MATÉRIA-PRIMA é o que a gente usa pra fazer o produto final.",
      "Leite/queijo ← VACA · Ovo ← GALINHA · Frutas ← ÁRVORES.",
      "Pão ← TRIGO · Molho ← TOMATE (plantados pelo AGRICULTOR).",
      "Sem os produtores do CAMPO, o MERCADO fica vazio.",
    ],
    miniDesafio: {
      pergunta: "Qual a ORIGEM do QUEIJO?",
      opcoes: ["A galinha", "O leite da vaca", "O trigo"],
      correta: 1,
      feedbackAcerto: "🎉 O LEITE da VACA vira QUEIJO.",
      feedbackErro: "QUEIJO ← LEITE ← VACA.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — De onde vem o OVO?",
        opcoes: ["Da galinha", "Da vaca", "Do trigo"],
        correta: 0,
        feedbackAcerto: "🎉 Da GALINHA.",
        feedbackErro: "O OVO vem da GALINHA.",
      },
      {
        pergunta: "2/5 — De onde vem o PÃO?",
        opcoes: ["Do leite", "Do trigo", "Da banana"],
        correta: 1,
        feedbackAcerto: "🎉 Do TRIGO (vira farinha e depois pão).",
        feedbackErro: "PÃO vem do TRIGO.",
      },
      {
        pergunta: "3/5 — De onde vem o MOLHO de tomate?",
        opcoes: ["Da árvore", "Do tomate plantado no sítio", "Do ovo"],
        correta: 1,
        feedbackAcerto: "🎉 Do TOMATE.",
        feedbackErro: "MOLHO vem do TOMATE.",
      },
      {
        pergunta: "4/5 — Quem PLANTA e COLHE no campo?",
        opcoes: ["O agricultor", "O motorista", "O caixa do mercado"],
        correta: 0,
        feedbackAcerto: "🎉 O AGRICULTOR.",
        feedbackErro: "Quem PLANTA e COLHE é o AGRICULTOR.",
      },
      {
        pergunta: "5/5 — Se ninguém produzisse no CAMPO, o mercado ficaria...",
        opcoes: [
          "Cheio do mesmo jeito",
          "Sem quase nenhum alimento",
          "Mais bonito",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Sem alimento — o mercado DEPENDE do campo.",
        feedbackErro:
          "Sem PRODUÇÃO no campo, o mercado fica SEM ALIMENTOS.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🕵️ Detetive da Origem",
    materiais: ["3 alimentos que tenham em casa", "Papel e lápis"],
    passos: [
      "1) Com um ADULTO, escolha 3 alimentos (ex.: leite, ovo, banana).",
      "2) Pra cada um, pergunte: 'Isso veio de qual ANIMAL ou PLANTA?'",
      "3) Desenhe 3 fichinhas ligando o PRODUTO à sua ORIGEM (ex.: 🥛 ← 🐄).",
      "4) Guarda as fichinhas na geladeira!",
    ],
    registro:
      "📸 Uma foto das 3 fichinhas de ORIGEM que você desenhou.",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
    medalha: "Detetive da Origem",
  },
};
