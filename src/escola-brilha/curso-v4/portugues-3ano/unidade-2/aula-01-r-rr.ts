import type { AulaPortuguesV4 } from "../../types";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as mapaPercurso } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as bau } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as quebraCabeca } from "@/assets/neuro-treino/objetos/quebra-cabeca.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Aula 1 — R e RR: o som forte e o som fraco
 * -------------------------------------------------------------
 * Unidade 2 · Laboratório da Ortografia
 * Foco: regra do R entre vogais (fraco) x RR entre vogais (forte),
 * e do R sozinho depois de consoante (já forte).
 * BNCC: EF03LP01, EF03LP02, EF03LP03, EF03LP05, EF03LP06
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-r-rr",
  titulo: "R e RR: o som forte e o som fraco",
  iconeTrilha: "🔎",
  bncc: ["EF03LP01", "EF03LP02", "EF03LP03", "EF03LP05", "EF03LP06"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Um bilhete estranho chega ao Clube dos Detetives",
    historia:
      "Aurora, a coruja-detetive, chamou Brilha às pressas: — Chegou um bilhete com uma pista dupla! Olha: 'o CARO ficou CARRO'. A mesma letra, o mesmo lugar na palavra, mas o som mudou completamente. — Isso só pode significar uma coisa — disse Aurora. — Tem uma REGRA escondida no jeito de escrever o R. Vamos investigar?",
    imagemUrl: coruja,
  },

  momento02_previsao: {
    instrucao: "Antes de abrir o caso, olhe as pistas espalhadas na mesa da investigação.",
    bloco: {
      titulo: "O Caso do Som Duplicado",
      capaImagemUrl: binoculo,
      pistas: [
        { imagemUrl: carro, nome: "Um carro" },
        { imagemUrl: rato, nome: "Um rato" },
      ],
      pergunta: "Sobre o que os detetives vão investigar nesse caso?",
      hipoteses: [
        { texto: "Por que uma letra, escrita duas vezes, muda o som da palavra.", imagemUrl: carro },
        { texto: "Onde os ratos escondem queijo.", imagemUrl: rato },
        { texto: "Quantas rodas tem um carro.", imagemUrl: carro },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! O caso é sobre o R e o RR — a mesma letra que muda de som conforme a posição na palavra.",
      feedbackErro:
        "Repare: a pista é 'CARO' virando 'CARRO'. O mistério é sobre uma letra que dobra e muda o som — não sobre rodas nem queijo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Todo bom detetive conhece bem as pistas antes de sair a campo. Veja duas palavras-chave.",
    cards: [
      {
        palavra: "caro",
        explicacao:
          "Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza.",
        exemplo: "Aquele brinquedo é muito caro.",
        imagemUrl: quebraCabeca,
      },
      {
        palavra: "carro",
        explicacao:
          "Quando o R aparece DOBRADO (RR) entre duas vogais, ele tem som FORTE, como um motor roncando.",
        exemplo: "O carro estacionou na garagem.",
        imagemUrl: carro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora explicou o segredo do R para o clube inteiro. Leia com atenção.",
    leitura: {
      titulo: "O Segredo do R",
      imagemUrl: mapaPercurso,
      legendaImagem: "O mapa da regra do R",
      destacar: ["entre vogais", "RATO", "CARO", "CARRO", "HONRA"],
      paragrafos: [
        "Aurora reuniu o Clube dos Detetives e mostrou o mapa da regra. 'Quando o R está entre vogais, sozinho, ele soa fraco, como em CARO e ARARA. Mas se o R aparece dobrado, RR, entre vogais, o som fica forte, como em CARRO e TERRA.'",
        "'E tem outro detalhe importante', continuou Aurora. 'No começo da palavra, o R sozinho já soa forte, como em RATO e ROBÔ. E depois de uma consoante, como N ou L, o R também soa forte mesmo sozinho, como em HONRA e MELRO.'",
        "Brilha anotou tudo no caderno de investigações: 'R sozinho entre vogais = fraco. RR entre vogais = forte. R no início ou depois de consoante = forte, mesmo sozinho.' O clube tinha decifrado a primeira regra do Laboratório da Ortografia.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Segundo o texto, como soa o R sozinho entre vogais?",
        opcoes: ["Forte", "Fraco", "Não tem som"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O texto diz: 'R sozinho entre vogais = fraco'.",
        feedbackErro: "Volte no segundo parágrafo: 'ele soa fraco, como em CARO'.",
        ondeEstaNoTexto: "Quando o R está entre vogais, sozinho, ele soa fraco…",
      },
      {
        pergunta: "Como soa o RR dobrado entre vogais?",
        opcoes: ["Forte", "Fraco", "Mudo"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! 'RR entre vogais = forte', como em CARRO.",
        feedbackErro: "O texto diz: 'se o R aparece dobrado... o som fica forte, como em CARRO'.",
        ondeEstaNoTexto: "…o R aparece dobrado, RR, entre vogais, o som fica forte…",
      },
      {
        pergunta: "O que acontece com o R sozinho no COMEÇO da palavra, como em RATO?",
        opcoes: ["Fica fraco", "Não se escreve", "Já soa forte"],
        correta: 2,
        feedbackAcerto: "🎉 Exato! No começo da palavra, R sozinho já soa forte.",
        feedbackErro: "Releia o terceiro parágrafo: 'No começo da palavra, o R sozinho já soa forte, como em RATO'.",
        ondeEstaNoTexto: "No começo da palavra, o R sozinho já soa forte, como em RATO e ROBÔ.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem investiga e onde acontece a cena da descoberta?",
    perguntas: [
      {
        pergunta: "Quem reuniu o clube para explicar a regra do R?",
        opcoes: ["Brilha", "Aurora", "Um rato misterioso"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Foi Aurora quem mostrou o mapa da regra.",
        feedbackErro: "Releia a primeira frase: quem 'reuniu o Clube' e 'mostrou o mapa'?",
      },
      {
        pergunta: "Onde a explicação da regra aconteceu?",
        opcoes: [
          "Numa reunião do Clube dos Detetives",
          "Dentro de um carro",
          "Numa loja de brinquedos",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Foi na reunião do clube, com o mapa da regra.",
        feedbackErro: "O texto diz 'Aurora reuniu o Clube dos Detetives e mostrou o mapa'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As anotações de Brilha se embaralharam. Coloque a investigação em ordem.",
    bloco: {
      instrucao: "Começo → meio → fim da descoberta.",
      itens: [
        { id: "p1", texto: "Chega um bilhete: 'o CARO ficou CARRO'.", imagemUrl: bau },
        { id: "p2", texto: "Aurora mostra o mapa e explica a regra do R e do RR.", imagemUrl: mapaPercurso },
        { id: "p3", texto: "Brilha anota a regra completa no caderno de investigações.", imagemUrl: quebraCabeca },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você reconstruiu a investigação na ordem certa.",
      feedbackErro:
        "Pense: primeiro chega a PISTA (o bilhete). Depois vem a EXPLICAÇÃO (o mapa da Aurora). Por último, o REGISTRO (a anotação de Brilha).",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo relatório do clube e responda.",
    leitura: {
      titulo: "O Relatório de Brilha",
      imagemUrl: estrela,
      destacar: ["HONRA", "TERRA", "consoante"],
      paragrafos: [
        "Brilha testou a regra em mais palavras. Em TERRA, o RR está entre vogais, então o som é forte.",
        "Já em HONRA, o R vem depois da consoante N. Mesmo sozinho, o R soa forte — porque a regra diz que depois de consoante o R já é forte, sem precisar dobrar.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que o R de HONRA soa forte mesmo estando sozinho?",
        opcoes: [
          "Porque vem depois de uma consoante",
          "Porque a palavra é grande",
          "Porque tem duas sílabas",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Depois de consoante, o R sozinho já soa forte.",
        feedbackErro: "Releia: 'o R vem depois da consoante N... a regra diz que depois de consoante o R já é forte'.",
        ondeEstaNoTexto: "…depois de consoante o R já é forte, sem precisar dobrar.",
      },
      {
        pergunta: "Em TERRA, por que o som do RR é forte?",
        opcoes: ["Porque está entre vogais e dobrado", "Porque está no fim da palavra", "Porque é uma palavra difícil"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! RR entre vogais é sempre forte.",
        feedbackErro: "O texto diz: 'em TERRA, o RR está entre vogais, então o som é forte'.",
        ondeEstaNoTexto: "Em TERRA, o RR está entre vogais, então o som é forte.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Classifique o som do R",
    instrucao: "Arraste cada palavra para o cofre certo: som FORTE ou som FRACO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "O Cofre dos Sons do R",
      bloco: {
        instrucao: "Leia cada palavra em voz alta e sinta o som do R antes de arrastar.",
        itens: [
          { id: "i1", texto: "carro", alvoId: "forte" },
          { id: "i2", texto: "cara", alvoId: "fraco" },
          { id: "i3", texto: "arroz", alvoId: "forte" },
          { id: "i4", texto: "arara", alvoId: "fraco" },
          { id: "i5", texto: "tenro", alvoId: "forte" },
          { id: "i6", texto: "amora", alvoId: "fraco" },
          { id: "i7", texto: "rato", alvoId: "forte" },
          { id: "i8", texto: "terra", alvoId: "forte" },
        ],
        alvos: [
          { id: "forte", nome: "Som FORTE", imagemUrl: carro, descricao: "RR entre vogais, ou R no início/depois de consoante" },
          { id: "fraco", nome: "Som FRACO", imagemUrl: quebraCabeca, descricao: "R sozinho entre vogais" },
        ],
        feedbackAcerto: "🎉 Caso resolvido! Você domina a regra do R e do RR.",
        feedbackErro: "Pense de novo: R sozinho entre vogais é fraco; RR, ou R no início/depois de consoante, é forte.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "REGRA: entre vogais, R sozinho tem som FRACO (caro) e RR tem som FORTE (carro).",
      "No início da palavra ou depois de consoante, o R sozinho já soa FORTE (rato, honra).",
      "Bom detetive da palavra ouve o som antes de decidir como escrever.",
    ],
    miniDesafio: {
      pergunta: "Qual é a regra que explica a diferença entre CARO e CARRO?",
      opcoes: [
        "R sozinho entre vogais é fraco; RR entre vogais é forte",
        "As duas palavras têm o mesmo som",
        "Depende do tamanho da palavra",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Essa é a regra-chave da aula de hoje.",
      feedbackErro: "Releia a explicação da Aurora: o segredo está em estar SOZINHO ou DOBRADO entre vogais.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Como se escreve o som fraco do R entre duas vogais?",
        opcoes: ["Com R sozinho", "Com RR", "Com RH"],
        correta: 0,
        feedbackAcerto: "🎉 R sozinho entre vogais = som fraco.",
        feedbackErro: "Lembre: entre vogais, o R sozinho soa fraco (caro).",
      },
      {
        pergunta: "2/5 — Como se escreve o som forte do R entre duas vogais?",
        opcoes: ["Com R sozinho", "Com RR", "Não se escreve"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! RR dobrado entre vogais = som forte.",
        feedbackErro: "Entre vogais, o som forte precisa do R dobrado (carro).",
      },
      {
        pergunta: "3/5 — No início da palavra, como soa o R sozinho, como em RATO?",
        opcoes: ["Fraco", "Forte", "Sem som"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! No início, o R sozinho já é forte.",
        feedbackErro: "Lembre: no começo da palavra, R sozinho já soa forte.",
      },
      {
        pergunta: "4/5 — Depois de uma consoante, como em HONRA, o R sozinho soa…",
        opcoes: ["Fraco", "Forte", "Depende da cor da capa"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Depois de consoante, o R sozinho já é forte.",
        feedbackErro: "A regra diz: depois de consoante, o R já soa forte, sem precisar dobrar.",
      },
      {
        pergunta: "5/5 — Qual dessas palavras usa RR corretamente por causa do som forte entre vogais?",
        opcoes: ["Carro", "Caro", "Rato"],
        correta: 0,
        feedbackAcerto: "🎉 Caso encerrado! CARRO tem RR porque o som é forte entre vogais.",
        feedbackErro: "Pense em qual palavra tem som forte de R ENTRE vogais — só uma tem RR dobrado.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada às palavras com R e RR",
    materiais: ["Papel e lápis", "Um livro, revista ou embalagem qualquer da casa"],
    passos: [
      "1) Junto com um adulto, procurem 5 palavras com R (sozinho ou dobrado) em rótulos, livros ou placas.",
      "2) Para cada palavra, decidam: o R está entre vogais sozinho (fraco), dobrado (forte), ou no início/depois de consoante (forte)?",
      "3) Anotem as palavras em duas colunas: 'Som fraco' e 'Som forte'.",
      "4) Leiam a lista em voz alta, sentindo a diferença de som.",
    ],
    registro: "📝 Uma foto da lista com as duas colunas, ou um áudio lendo as palavras em voz alta.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
