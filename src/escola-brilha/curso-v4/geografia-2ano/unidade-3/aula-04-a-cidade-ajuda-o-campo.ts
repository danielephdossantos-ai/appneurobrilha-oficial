import type { AulaPortuguesV4 } from "../../types";
import cidade from "@/assets/neuro-treino/objetos/cidade.png";
import campo from "@/assets/neuro-treino/objetos/campo.png";
import vaca from "@/assets/neuro-treino/objetos/vaca.png";
import mercado from "@/assets/neuro-treino/objetos/mercado.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import postoSaude from "@/assets/neuro-treino/objetos/posto-saude.png";
import carro from "@/assets/neuro-treino/objetos/carro.png";
import regador from "@/assets/neuro-treino/objetos/regador.png";
import celular from "@/assets/neuro-treino/objetos/celular.png";
import tablet from "@/assets/neuro-treino/objetos/tablet.png";
import mapaPercurso from "@/assets/neuro-treino/objetos/mapa-percurso.png";
import padaria from "@/assets/neuro-treino/objetos/padaria.png";
import moeda from "@/assets/neuro-treino/objetos/moeda.png";

/**
 * Geografia · 2º Ano · Unidade 3 · Aula 04
 * "A Cidade Ajuda o Campo" — EF02GE08
 *
 * Fecha a INTERDEPENDÊNCIA: o campo alimenta a cidade E a cidade
 * ajuda o campo com ferramentas, remédios, escolas e serviços.
 * Padrão travado do PlayerPortuguesV4.
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-a-cidade-ajuda-o-campo",
  titulo: "A Cidade Ajuda o Campo",
  iconeTrilha: "🤝",
  bncc: ["EF02GE08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "É de mão dupla!",
    historia:
      "Aurora sorriu: 'Brilha, a gente aprendeu que a CIDADE depende do CAMPO. Agora eu vou te contar UM SEGREDO: o CAMPO também depende da CIDADE! É uma amizade de MÃO DUPLA. Vamos descobrir como?'",
    imagemUrl: mapaPercurso,
  },

  momento02_previsao: {
    instrucao: "Olhe as pistas e adivinhe o tema da missão.",
    bloco: {
      titulo: "Missão: Amizade de mão dupla",
      capaImagemUrl: mapaPercurso,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO MÃO DUPLA",
          "",
          "Descubra COMO",
          "a CIDADE",
          "ajuda o CAMPO.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: regador, nome: "Ferramentas" },
        { imagemUrl: postoSaude, nome: "Postos e remédios" },
        { imagemUrl: escola, nome: "Escolas e estudo" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre a CIDADE também ajudar o CAMPO (mão dupla).",
          imagemUrl: cidade,
        },
        { texto: "Sobre colher fruta na árvore.", imagemUrl: campo },
        { texto: "Sobre viajar de foguete.", imagemUrl: carro },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! A ajuda vai nos DOIS sentidos: campo→cidade E cidade→campo.",
      feedbackErro:
        "As pistas mostram FERRAMENTAS, POSTO e ESCOLA — a missão fala de como a CIDADE ajuda o CAMPO.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras da amizade cidade↔campo.",
    cards: [
      {
        palavra: "interdependência",
        explicacao:
          "Palavra grande e importante: dois lugares que DEPENDEM UM DO OUTRO. Campo e cidade têm INTERDEPENDÊNCIA.",
        exemplo:
          "Campo e cidade vivem em INTERDEPENDÊNCIA.",
        imagemUrl: mapaPercurso,
      },
      {
        palavra: "indústria",
        explicacao:
          "É uma FÁBRICA GRANDE, geralmente na cidade. A indústria faz TRATOR, REMÉDIO pra animal, FERRAMENTA — coisas que o campo precisa.",
        exemplo:
          "A INDÚSTRIA faz o trator que o agricultor usa.",
        imagemUrl: padaria,
      },
      {
        palavra: "serviço",
        explicacao:
          "É a AJUDA que uma pessoa faz pra outra: médico atender, professor ensinar, banco emprestar. A cidade oferece SERVIÇOS pro campo.",
        exemplo:
          "O HOSPITAL da cidade presta SERVIÇO pra quem mora no campo.",
        imagemUrl: postoSaude,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você.",
    leitura: {
      titulo: "A cidade também ajuda",
      imagemUrl: cidade,
      destacar: ["cidade", "campo", "ferramentas", "hospital", "escola", "indústria"],
      paragrafos: [
        "A gente já viu: o CAMPO manda alimento pra CIDADE. Mas quem mora no campo também PRECISA de coisas que só a CIDADE tem.",
        "As FERRAMENTAS que o agricultor usa (trator, enxada, regador) são feitas na INDÚSTRIA da CIDADE.",
        "Quando alguém do campo fica DOENTE, muitas vezes vem pro HOSPITAL da cidade. E os REMÉDIOS pros animais também são feitos aqui.",
        "Muitas crianças do campo estudam em ESCOLAS que ficam na cidade ou no meio do caminho. E o CELULAR e o TABLET, que ajudam a saber o preço da colheita, também vêm da cidade.",
        "Por isso a gente diz: CAMPO e CIDADE são AMIGOS de MÃO DUPLA — um DEPENDE do outro. Isso é a INTERDEPENDÊNCIA.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "Quem FAZ o trator, a enxada e as ferramentas do agricultor?",
        opcoes: ["A indústria da cidade", "A vaca", "O rio"],
        correta: 0,
        feedbackAcerto: "🎉 A INDÚSTRIA da CIDADE.",
        feedbackErro:
          "O texto diz: 'FERRAMENTAS… são feitas na INDÚSTRIA da CIDADE'.",
        ondeEstaNoTexto:
          "…FERRAMENTAS que o agricultor usa… são feitas na INDÚSTRIA da CIDADE…",
      },
      {
        pergunta: "Quando alguém do campo fica DOENTE, muitas vezes vai a onde?",
        opcoes: ["A um HOSPITAL na cidade", "A uma árvore alta", "Ao caminhão"],
        correta: 0,
        feedbackAcerto: "🎉 Ao HOSPITAL da cidade.",
        feedbackErro:
          "O texto diz: 'vem pro HOSPITAL da cidade'.",
        ondeEstaNoTexto: "…vem pro HOSPITAL da cidade…",
      },
      {
        pergunta: "Muitas crianças do campo estudam onde?",
        opcoes: [
          "Só embaixo da árvore",
          "Em ESCOLAS na cidade ou no caminho",
          "Não estudam",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Em ESCOLAS na cidade ou no caminho.",
        feedbackErro:
          "O texto diz: 'estudam em ESCOLAS que ficam na cidade ou no meio do caminho'.",
        ondeEstaNoTexto:
          "…estudam em ESCOLAS que ficam na cidade ou no meio do caminho…",
      },
      {
        pergunta: "O que quer dizer INTERDEPENDÊNCIA?",
        opcoes: [
          "Um lugar só depende do outro",
          "Os dois DEPENDEM UM DO OUTRO",
          "Ninguém depende de ninguém",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Os DOIS dependem UM DO OUTRO.",
        feedbackErro:
          "INTERDEPENDÊNCIA = os DOIS lados PRECISAM UM DO OUTRO.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem OFERECE o quê?",
    perguntas: [
      {
        pergunta: "O TRATOR do agricultor é feito onde?",
        opcoes: ["Na indústria da cidade", "Dentro do pasto", "No galinheiro"],
        opcoesImagens: [padaria, campo, vaca],
        correta: 0,
        feedbackAcerto: "🎉 Na INDÚSTRIA da CIDADE.",
        feedbackErro: "TRATOR vem da INDÚSTRIA — que fica na CIDADE.",
      },
      {
        pergunta: "O REMÉDIO pra vaca doente vem de onde?",
        opcoes: [
          "De uma fábrica na cidade",
          "Da própria vaca",
          "Da chuva",
        ],
        opcoesImagens: [postoSaude, vaca, campo],
        correta: 0,
        feedbackAcerto: "🎉 De uma FÁBRICA na CIDADE.",
        feedbackErro:
          "REMÉDIO (pra gente E pra animal) vem de FÁBRICAS na cidade.",
      },
      {
        pergunta: "O CELULAR que o agricultor usa pra saber o preço do tomate...",
        opcoes: [
          "É feito na cidade (indústria)",
          "Nasce no pé",
          "Cai do céu",
        ],
        opcoesImagens: [celular, campo, cidade],
        correta: 0,
        feedbackAcerto: "🎉 É feito na CIDADE.",
        feedbackErro: "CELULAR e TABLET são feitos em INDÚSTRIAS na cidade.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Ordena a história completa: CAMPO ↔ CIDADE.",
    bloco: {
      instrucao: "Do primeiro → último.",
      itens: [
        { id: "s1", texto: "1) A CIDADE fabrica um TRATOR.", imagemUrl: padaria },
        { id: "s2", texto: "2) O TRATOR vai pro CAMPO ajudar a plantar.", imagemUrl: campo },
        { id: "s3", texto: "3) O CAMPO colhe alimento com o trator.", imagemUrl: vaca },
        { id: "s4", texto: "4) O caminhão leva alimento pra CIDADE.", imagemUrl: carro },
        { id: "s5", texto: "5) A CIDADE come — e a amizade continua.", imagemUrl: mercado },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 Perfeito! É um CICLO: cidade dá ferramenta → campo produz → cidade come.",
      feedbackErro:
        "Primeiro a CIDADE fabrica, o campo usa, colhe, o caminhão volta e a cidade come.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda.",
    leitura: {
      titulo: "O dia do vovô agricultor",
      imagemUrl: campo,
      destacar: ["trator", "cidade", "banco", "escola", "remédio"],
      paragrafos: [
        "O vovô da Brilha é AGRICULTOR. De manhã ele usa o TRATOR (feito numa fábrica da cidade) pra virar a terra. Depois toma REMÉDIO que comprou na farmácia da cidade.",
        "À tarde, o filho dele volta da ESCOLA — que fica na cidade — e ajuda no sítio. À noite o vovô vai ao BANCO da cidade pra guardar o dinheiro da colheita.",
      ],
    },
    perguntas: [
      {
        pergunta: "O TRATOR que o vovô usa foi feito onde?",
        opcoes: ["Numa fábrica da cidade", "Debaixo da árvore", "Dentro da vaca"],
        opcoesImagens: [padaria, campo, vaca],
        correta: 0,
        feedbackAcerto: "🎉 Numa FÁBRICA da CIDADE.",
        feedbackErro: "O texto diz: 'TRATOR (feito numa fábrica da cidade)'.",
        ondeEstaNoTexto: "…TRATOR (feito numa fábrica da cidade)…",
      },
      {
        pergunta: "O filho do vovô estuda ONDE?",
        opcoes: ["Na cidade", "No meio do rio", "No topo do trator"],
        opcoesImagens: [escola, campo, carro],
        correta: 0,
        feedbackAcerto: "🎉 Na CIDADE.",
        feedbackErro: "O texto diz: 'ESCOLA — que fica na cidade'.",
        ondeEstaNoTexto: "…ESCOLA — que fica na cidade…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🤝 Quem Oferece Isso?",
    instrucao:
      "Cada CARTELA é uma coisa que se usa no dia a dia. Coloque cada uma no LUGAR que oferece essa coisa.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Arrastar para o Alvo",
      bloco: {
        instrucao: "Toque na cartela e depois no LUGAR que oferece.",
        alvos: [
          {
            id: "campo_of",
            nome: "🌾 O CAMPO oferece",
            descricao: "Alimento e matéria-prima.",
            imagemUrl: campo,
          },
          {
            id: "cidade_of",
            nome: "🏙️ A CIDADE oferece",
            descricao: "Indústria e serviços.",
            imagemUrl: cidade,
          },
        ],
        itens: [
          { id: "leite", texto: "🥛 Leite", alvoId: "campo_of", imagemUrl: vaca },
          { id: "arroz", texto: "🌾 Arroz e trigo", alvoId: "campo_of", imagemUrl: campo },
          { id: "fruta", texto: "🍎 Fruta", alvoId: "campo_of", imagemUrl: mercado },
          { id: "carne", texto: "🥩 Carne", alvoId: "campo_of", imagemUrl: vaca },
          { id: "trator", texto: "🚜 Trator", alvoId: "cidade_of", imagemUrl: padaria },
          { id: "hospital", texto: "🏥 Hospital", alvoId: "cidade_of", imagemUrl: postoSaude },
          { id: "escola_i", texto: "🏫 Escola grande", alvoId: "cidade_of", imagemUrl: escola },
          { id: "celu", texto: "📱 Celular", alvoId: "cidade_of", imagemUrl: celular },
          { id: "banco", texto: "🏦 Banco", alvoId: "cidade_of", imagemUrl: moeda },
          { id: "tab", texto: "💻 Tablet", alvoId: "cidade_of", imagemUrl: tablet },
        ],
        feedbackAcerto:
          "🎉 Isso! O CAMPO manda ALIMENTO; a CIDADE manda INDÚSTRIA e SERVIÇOS.",
        feedbackErro:
          "Lembra: comida → CAMPO. Ferramenta, hospital, escola grande, celular, banco → CIDADE.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "CAMPO manda pra cidade: ALIMENTO (leite, carne, fruta, arroz).",
      "CIDADE manda pro campo: FERRAMENTA, REMÉDIO, HOSPITAL, ESCOLA, CELULAR, BANCO.",
      "INDÚSTRIA fica na cidade e faz o TRATOR que o agricultor usa.",
      "É uma AMIZADE de MÃO DUPLA — INTERDEPENDÊNCIA.",
      "Um não vive bem sem o outro.",
    ],
    miniDesafio: {
      pergunta: "A relação entre campo e cidade é...",
      opcoes: [
        "Só o campo ajuda a cidade",
        "Só a cidade ajuda o campo",
        "OS DOIS se ajudam (interdependência)",
      ],
      correta: 2,
      feedbackAcerto:
        "🎉 Isso! Os DOIS se ajudam — INTERDEPENDÊNCIA.",
      feedbackErro:
        "É de MÃO DUPLA: campo alimenta a cidade E a cidade oferece indústria/serviço.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O TRATOR do agricultor é feito ONDE?",
        opcoes: ["Na indústria da cidade", "No pasto", "Na copa da árvore"],
        correta: 0,
        feedbackAcerto: "🎉 Na INDÚSTRIA da CIDADE.",
        feedbackErro: "TRATOR vem da INDÚSTRIA — na CIDADE.",
      },
      {
        pergunta: "2/5 — REMÉDIOS pros animais vêm de onde?",
        opcoes: [
          "De fábricas na cidade",
          "Da chuva",
          "Do próprio animal",
        ],
        correta: 0,
        feedbackAcerto: "🎉 De FÁBRICAS na CIDADE.",
        feedbackErro: "REMÉDIO vem de FÁBRICA — normalmente na cidade.",
      },
      {
        pergunta: "3/5 — O CAMPO oferece PRA CIDADE...",
        opcoes: [
          "Trator e celular",
          "Alimento e matéria-prima",
          "Hospital e banco",
        ],
        correta: 1,
        feedbackAcerto: "🎉 ALIMENTO e MATÉRIA-PRIMA.",
        feedbackErro:
          "CAMPO oferece ALIMENTO (leite, carne, fruta) e MATÉRIA-PRIMA.",
      },
      {
        pergunta: "4/5 — A CIDADE oferece PRO CAMPO...",
        opcoes: [
          "Fruta e leite",
          "Indústria, hospital, escola e serviços",
          "Nada",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Indústria, hospital, escola e serviços.",
        feedbackErro:
          "CIDADE oferece INDÚSTRIA, HOSPITAL, ESCOLA e SERVIÇOS pro campo.",
      },
      {
        pergunta: "5/5 — INTERDEPENDÊNCIA quer dizer que...",
        opcoes: [
          "Ninguém precisa de ninguém",
          "Os DOIS lados PRECISAM um do outro",
          "Só o campo é importante",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Os DOIS PRECISAM um do outro.",
        feedbackErro:
          "INTERDEPENDÊNCIA = os DOIS lados PRECISAM um do outro.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🤝 Parceiro do Campo e da Cidade",
    materiais: ["Papel e lápis", "Um adulto pra conversar"],
    passos: [
      "1) Desenhe uma FOLHA em DUAS COLUNAS: 'CAMPO manda' e 'CIDADE manda'.",
      "2) Peça pro adulto AJUDAR a listar 3 coisas em cada coluna.",
      "3) No meio, desenhe uma SETA de mão dupla ↔.",
      "4) Escreva embaixo: 'CAMPO E CIDADE SÃO AMIGOS'.",
    ],
    registro:
      "📸 Uma foto do seu cartaz da INTERDEPENDÊNCIA.",
  },

  recompensa: {
    xp: 230,
    moedas: 140,
    medalha: "Parceiro(a) do Campo e da Cidade",
  },
};
