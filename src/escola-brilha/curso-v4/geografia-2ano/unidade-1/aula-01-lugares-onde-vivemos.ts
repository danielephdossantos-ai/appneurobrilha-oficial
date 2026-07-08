import type { AulaPortuguesV4 } from "../../types";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import casaAntiga from "@/assets/neuro-treino/objetos/casa-antiga.png";
import casaModerna from "@/assets/neuro-treino/objetos/casa-moderna.png";
import cidade from "@/assets/neuro-treino/objetos/cidade.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import familia from "@/assets/neuro-treino/objetos/familia-tradicional.png";
import coruja from "@/assets/neuro-treino/objetos/coruja.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";

/**
 * Geografia · 2º Ano · Unidade 1 · Aula 01
 * "Os Lugares Onde Vivemos" — EF02GE01
 *
 * Roteiro adaptado ao contrato AulaPortuguesV4 (mesmo player de
 * Língua Portuguesa 2º ano). Nenhum bloco visual novo.
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-lugares-onde-vivemos",
  titulo: "Os Lugares Onde Vivemos",
  iconeTrilha: "🗺️",
  bncc: ["EF02GE01"],
  duracaoMin: 15,

  // 1 · MOTIVAÇÃO
  momento01_motivacao: {
    titulo: "O mapa dos lugares",
    historia:
      "Brilha ganhou um MAPA MÁGICO da Aurora. Ele mostra as CASAS de várias famílias — no alto de um prédio, num campo de fazenda, à beira do rio, e até numa aldeia! Aurora disse: 'Cada casa foi feita de um jeito porque o LUGAR é diferente.' Vamos investigar por quê?",
    imagemUrl: mapa,
  },

  // 2 · PREVISÃO — sobre um cartaz do Investigador
  momento02_previsao: {
    instrucao:
      "Aurora deixou um CARTAZ na porta da biblioteca. Leia o cartaz e imagine sobre o que a missão de hoje vai falar.",
    bloco: {
      titulo: "Missão do Investigador de Moradias",
      capaImagemUrl: mapa,
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DO INVESTIGADOR",
          "",
          "Descubra POR QUE cada casa",
          "foi feita de um JEITO diferente.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: casa, nome: "Uma casa" },
        { imagemUrl: cidade, nome: "Uma cidade" },
        { imagemUrl: arvore, nome: "O campo" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre CASAS de lugares diferentes e por que elas são assim.",
          imagemUrl: casa,
        },
        {
          texto: "Sobre receitas de bolo da vovó.",
          imagemUrl: familia,
        },
        {
          texto: "Sobre os planetas do sistema solar.",
          imagemUrl: estrela,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Um bom investigador usa o TÍTULO e as PISTAS pra imaginar o que vem.",
      feedbackErro:
        "Olhe as pistas de novo: uma CASA, uma CIDADE e o CAMPO. A missão fala sobre CASAS em lugares diferentes.",
    },
  },

  // 3 · VOCABULÁRIO — 2 palavras-chave
  momento03_vocabulario: {
    instrucao:
      "Antes de investigar, conheça 2 palavras que vão aparecer na missão.",
    cards: [
      {
        palavra: "moradia",
        explicacao:
          "É o lugar onde uma família MORA. Pode ser uma casa, um apartamento, uma oca…",
        exemplo: "A moradia do Pedro é um apartamento no 3º andar.",
        imagemUrl: casa,
      },
      {
        palavra: "ribeirinha",
        explicacao:
          "É a casa que fica na BEIRA de um rio. Fica em cima de pauzinhos altos pra água não entrar.",
        exemplo: "A família ribeirinha usa canoa pra ir na escola.",
        imagemUrl: casaAntiga,
      },
    ],
  },

  // 4 · LEITURA GUIADA
  momento04_leituraGuiada: {
    instrucao:
      "Aurora vai LER com você. Preste atenção nas palavras em amarelo — elas são pistas.",
    leitura: {
      titulo: "Cada casa tem um porquê",
      imagemUrl: cidade,
      legendaImagem: "Uma cidade grande, cheia de moradias.",
      destacar: ["moradia", "ribeirinha", "estacas", "campo", "cidade"],
      paragrafos: [
        "Nem toda moradia é igual. Na cidade grande, muita gente mora em prédios — assim cabem várias famílias em pouco chão.",
        "No campo, as casas ficam longe umas das outras porque cada família tem espaço pra plantar e criar animais.",
        "Na beira do rio, a casa ribeirinha fica em cima de estacas altas. Quando o rio enche, a água passa por baixo e a família fica em segurança.",
      ],
    },
  },

  // 5 · COMPREENSÃO
  momento05_compreensao: {
    instrucao:
      "As respostas estão TODAS escritas no texto. Volte lá se precisar.",
    perguntas: [
      {
        pergunta: "Por que na cidade grande muita gente mora em PRÉDIO?",
        opcoes: [
          "Porque é mais bonito",
          "Pra caber várias famílias em pouco chão",
          "Porque não tem outra opção",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Exato! Está escrito: 'cabem várias famílias em POUCO CHÃO'.",
        feedbackErro:
          "Olhe o primeiro parágrafo — a resposta está logo depois de 'prédios'.",
        ondeEstaNoTexto: "…cabem várias famílias em pouco chão.",
      },
      {
        pergunta: "Por que as casas do CAMPO ficam longe umas das outras?",
        opcoes: [
          "Porque as famílias brigam",
          "Porque cada família tem espaço pra plantar e criar animais",
          "Porque o chão é frio",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Cada família precisa de ESPAÇO no campo.",
        feedbackErro:
          "A resposta está no segundo parágrafo, logo depois de 'porque'.",
        ondeEstaNoTexto:
          "…cada família tem espaço pra plantar e criar animais.",
      },
      {
        pergunta: "Por que a casa RIBEIRINHA fica em cima de estacas altas?",
        opcoes: [
          "Pra ficar mais bonita",
          "Pra pegar sol",
          "Pra quando o rio encher, a água passar por baixo",
        ],
        correta: 2,
        feedbackAcerto:
          "🎉 Isso! Quando o rio enche, a família fica em SEGURANÇA lá em cima.",
        feedbackErro:
          "Olhe o último parágrafo — a resposta está depois de 'estacas altas'.",
        ondeEstaNoTexto:
          "…quando o rio enche, a água passa por baixo e a família fica em segurança.",
      },
    ],
  },

  // 6 · PERSONAGENS & CENÁRIO (aqui: onde acontece cada moradia)
  momento06_personagensCenario: {
    instrucao:
      "Cada moradia tem um LUGAR. Vamos ver se você lembra onde cada uma fica.",
    perguntas: [
      {
        pergunta: "Onde ficam as CASAS RIBEIRINHAS?",
        opcoes: ["No topo de uma montanha", "Na beira de um rio", "Debaixo da terra"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! RIBEIRINHA vem de 'beira do rio'.",
        feedbackErro:
          "A palavra RIBEIRINHA quer dizer 'que fica na BEIRA DO RIO'.",
      },
      {
        pergunta: "Em que LUGAR muita gente mora em prédios?",
        opcoes: ["Na cidade grande", "No meio da floresta", "Numa ilha deserta"],
        correta: 0,
        feedbackAcerto:
          "🎉 Certo! Na CIDADE GRANDE o espaço é pouco, então crescem pra cima.",
        feedbackErro:
          "Pense onde tem MUITA gente e POUCO chão — a cidade grande.",
      },
    ],
  },

  // 7 · SEQUÊNCIA — o rio enche, a casa fica em segurança
  momento07_sequencia: {
    instrucao:
      "As páginas dessa história do rio embaralharam. Coloque na ordem certa.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        {
          id: "s1",
          texto: "O rio está calmo, embaixo da casa ribeirinha.",
          imagemUrl: casaAntiga,
        },
        {
          id: "s2",
          texto: "Chove muito e o rio começa a encher.",
          imagemUrl: arvore,
        },
        {
          id: "s3",
          texto: "A água passa POR BAIXO da casa. A família fica seca!",
          imagemUrl: casa,
        },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto:
        "🎉 Perfeito! Você contou a história do rio do jeito certo.",
      feedbackErro:
        "Pense: primeiro o rio está CALMO. Depois CHOVE e o rio ENCHE. Por último, a água PASSA POR BAIXO e a casa fica seca.",
    },
  },

  // 8 · LEITURA INDEPENDENTE
  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda as duas perguntas.",
    leitura: {
      titulo: "A oca da aldeia",
      imagemUrl: arvore,
      destacar: ["oca", "palha", "floresta"],
      paragrafos: [
        "Na aldeia dos povos indígenas, muitas famílias moram numa OCA. A oca tem forma arredondada e cobertura de palha.",
        "Ela é feita com o que a FLORESTA oferece: madeira, folhas e cipó. Assim, a moradia combina com o lugar onde a família vive.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como se chama a moradia dos povos indígenas da aldeia?",
        opcoes: ["Oca", "Prédio", "Apartamento"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! OCA.",
        feedbackErro: "Está na primeira frase: '…moram numa …'.",
        ondeEstaNoTexto: "…muitas famílias moram numa OCA.",
      },
      {
        pergunta: "A oca é feita com o que a FLORESTA oferece. É feita de:",
        opcoes: [
          "Concreto e vidro",
          "Madeira, folhas e cipó",
          "Ferro e plástico",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Boa! MADEIRA, FOLHAS e CIPÓ — tudo da floresta.",
        feedbackErro:
          "Está no segundo parágrafo, logo depois de 'FLORESTA oferece:'.",
        ondeEstaNoTexto: "…madeira, folhas e cipó.",
      },
    ],
  },

  // MINIJOGO opcional — arrastar cada moradia pro lugar certo
  momento_minijogo: {
    titulo: "🧩 Cada casa no lugar certo",
    instrucao:
      "Arraste cada MORADIA pro LUGAR onde ela costuma ficar.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Cada casa no lugar certo",
      bloco: {
        instrucao: "Arraste cada moradia pro lugar dela.",
        itens: [
          { id: "apto", texto: "Prédio de apartamentos", imagemUrl: cidade, alvoId: "cidade" },
          { id: "fazenda", texto: "Casa de fazenda", imagemUrl: casaModerna, alvoId: "campo" },
          { id: "ribeirinha", texto: "Casa ribeirinha", imagemUrl: casaAntiga, alvoId: "rio" },
          { id: "oca", texto: "Oca da aldeia", imagemUrl: arvore, alvoId: "floresta" },
        ],
        alvos: [
          { id: "cidade", nome: "Cidade grande", imagemUrl: cidade },
          { id: "campo", nome: "Campo / fazenda", imagemUrl: casa },
          { id: "rio", nome: "Beira do rio", imagemUrl: casaAntiga },
          { id: "floresta", nome: "Floresta / aldeia", imagemUrl: arvore },
        ],
        feedbackAcerto:
          "🎉 Cada casa foi feita pro LUGAR dela — você é um Investigador de Moradias!",
        feedbackErro:
          "Pense no NOME de cada moradia: ribeirinha → beira do RIO; oca → aldeia na FLORESTA; prédio → cidade grande; fazenda → campo.",
      },
    },
  },

  // 9 · REVISÃO
  momento09_revisao: {
    pontos: [
      "MORADIA é o lugar onde uma família mora.",
      "Cidade grande: prédios — cabem várias famílias em pouco chão.",
      "Campo: casas com muito espaço pra plantar e criar animais.",
      "Beira de rio: casa ribeirinha em ESTACAS altas — pra água não entrar.",
      "Aldeia: oca de madeira e palha — com o que a floresta oferece.",
    ],
    miniDesafio: {
      pergunta:
        "Por que cada moradia é DIFERENTE das outras?",
      opcoes: [
        "Porque as pessoas escolhem por moda",
        "Porque cada moradia combina com o LUGAR onde a família vive",
        "Porque construir errado é mais barato",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! A moradia combina com o LUGAR — clima, natureza e espaço.",
      feedbackErro:
        "Cada moradia é feita pra combinar com o LUGAR: cidade, rio, campo ou aldeia.",
    },
  },

  // 10 · AVALIAÇÃO
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma MORADIA?",
        opcoes: [
          "Um tipo de brinquedo",
          "O lugar onde uma família mora",
          "Uma comida gostosa",
        ],
        correta: 1,
        feedbackAcerto: "🎉 O lugar onde a família mora.",
        feedbackErro: "Moradia = lugar onde a família MORA.",
      },
      {
        pergunta: "2/5 — Por que na CIDADE GRANDE muita gente mora em prédio?",
        opcoes: [
          "Porque é mais bonito",
          "Pra caber várias famílias em pouco chão",
          "Porque é obrigatório",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro:
          "Na cidade tem MUITA gente e POUCO chão — por isso crescem pra cima.",
      },
      {
        pergunta: "3/5 — A casa RIBEIRINHA fica em cima de estacas altas porque…",
        opcoes: [
          "É bonito",
          "Quando o rio enche, a água passa por baixo",
          "É mais barato",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! A água passa por baixo, a família fica seca.",
        feedbackErro:
          "As estacas SEGURAM a casa alta pra a ÁGUA passar por baixo.",
      },
      {
        pergunta: "4/5 — A OCA fica em qual lugar?",
        opcoes: ["Na cidade grande", "Na aldeia dos povos indígenas", "No topo de um prédio"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Na aldeia.",
        feedbackErro:
          "A oca é a moradia das aldeias dos povos indígenas.",
      },
      {
        pergunta: "5/5 — Cada moradia é diferente porque…",
        opcoes: [
          "Combina com o LUGAR onde a família vive",
          "Foi feita de qualquer jeito",
          "Todo mundo copia igual",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 COMBINA com o LUGAR! Investigador de Moradias — parabéns! 🌟",
        feedbackErro:
          "A moradia é feita pra COMBINAR com o LUGAR: clima, natureza e espaço.",
      },
    ],
  },

  // 11 · MISSÃO EM FAMÍLIA
  momento11_missaoFamilia: {
    titulo: "🏠 Investigador da minha casa",
    materiais: ["Um adulto pra conversar", "Papel e lápis (opcional)"],
    passos: [
      "1) Olhe sua casa junto com um adulto — o que ela tem de especial?",
      "2) Pergunte: por que a nossa casa é ASSIM? (tem quintal? é apartamento? é perto de rio?)",
      "3) Faça um DESENHO da sua casa mostrando 2 coisas dela.",
      "4) Escreva ou fale: 'A minha casa é assim porque…'.",
    ],
    registro:
      "📸 Uma foto do desenho ou um pequeno áudio contando 'a minha casa é assim porque…'.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
    medalha: "Investigador de Moradias",
  },
};
