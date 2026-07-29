import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";

/**
 * Aula 1 — O Bilhete Sem Assinatura
 * -------------------------------------------------------------
 * Abertura da Unidade 1 (A Primeira Pista) do Clube dos Detetives
 * da Palavra. A missão: descobrir QUEM escreveu um bilhete sem
 * nome, usando só as PISTAS que o texto deixa escapar.
 *
 * Foco pedagógico: inferência (EF35LP04) — o texto não diz tudo
 * com todas as letras; o leitor precisa juntar pistas + o que já
 * sabe do mundo para concluir algo que não está escrito.
 *
 * BNCC: EF35LP03, EF35LP04, EF35LP05, EF03LP26
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-bilhete-sem-assinatura",
  titulo: "O Bilhete Sem Assinatura",
  iconeTrilha: "🕵️",
  bncc: ["EF35LP04", "EF35LP03", "EF03LP26"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Bem-vindo ao Clube dos Detetives da Palavra",
    historia:
      "Brilha bateu na porta secreta da árvore-sede e sussurrou a senha: 'toda pista importa'. Lá dentro, Aurora, a mentora do clube, segurava um bilhete estranho encontrado embaixo da porta. — Alguém deixou isso aqui, mas esqueceu de assinar. Um bom detetive não precisa de nome escrito para descobrir QUEM escreveu. Ele lê nas entrelinhas. Vamos treinar seu olho investigativo?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Antes de ler o bilhete misterioso, observe as pistas ao redor dele. O que elas sugerem sobre quem o escreveu?",
    bloco: {
      titulo: "O Bilhete da Gaveta",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: mochila, nome: "Uma mochila escolar" },
        { imagemUrl: lupa, nome: "Uma lupa de detetive" },
      ],
      recado: {
        rotulo: "Bilhete encontrado",
        icone: "📩",
        linhas: [
          "Volto às 16h.",
          "Deixei o bolo na mesa, é seu favorito!",
          "Não esqueça de fazer a lição antes do treino.",
        ],
        estilo: "papel",
      },
      pergunta: "Quem você acha que escreveu esse bilhete?",
      hipoteses: [
        { texto: "Um amigo da escola, de passagem." },
        { texto: "Um adulto da família, que cuida da criança." },
        { texto: "Um entregador de encomendas." },
      ],
      respostaCerta: 1,
      feedbackAcerto:
        "🔍 Ótima dedução! 'Deixei o bolo', 'não esqueça a lição' e 'volto às 16h' são frases de quem CUIDA de alguém — típico de um responsável da família.",
      feedbackErro:
        "Repare nas pistas: falar de bolo 'favorito', cobrar lição e avisar horário de volta são atitudes de quem cuida da criança todo dia — um adulto da família.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras vão ajudar você a caçar pistas no texto de hoje.",
    cards: [
      {
        palavra: "pista",
        explicacao:
          "É uma informação escondida no texto que ajuda a descobrir algo que não foi dito diretamente.",
        exemplo: "A letra apertada e o cheiro de café eram pistas de que o bilhete era do avô.",
        imagemUrl: lupa,
      },
      {
        palavra: "inferir",
        explicacao:
          "É concluir algo usando as pistas do texto + o que você já sabe da vida — mesmo sem estar escrito com todas as letras.",
        exemplo: "O texto não diz 'estava chovendo', mas diz 'guarda-chuva pingando' — por isso inferimos que chovia.",
        imagemUrl: brilha,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia com atenção de detetive. Repare em cada detalhe: eles são as pistas que vão te ajudar a resolver o mistério.",
    leitura: {
      titulo: "O Recado da Caixa de Sapato",
      imagemUrl: caixa,
      legendaImagem: "A caixa cheia de bilhetes antigos",
      destacar: ["letra tremida", "óculos", "cheiro de hortelã"],
      paragrafos: [
        "Marina encontrou uma caixa de sapato empoeirada no fundo do armário. Dentro, havia um bilhete amarelado, sem assinatura, escrito com letra tremida.",
        "O papel tinha um cheiro de hortelã e, no canto, uma marquinha redonda — do tipo que os óculos deixam quando são apoiados em cima de algo.",
        "O bilhete dizia: 'Minha querida netinha, guarde isso com carinho. Quando eu não estiver mais aqui, lembre-se das nossas tardes no jardim.'",
        "Marina sorriu com os olhos molhados. Ela não precisava de uma assinatura para saber exatamente quem tinha escrito aquelas palavras.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Onde Marina encontrou o bilhete?",
        opcoes: ["Dentro de uma caixa de sapato", "Em cima da mesa", "Dentro da mochila"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Está no primeiro parágrafo: 'caixa de sapato empoeirada'.",
        feedbackErro: "Volte ao primeiro parágrafo — o lugar aparece logo na primeira frase.",
        ondeEstaNoTexto: "Marina encontrou uma caixa de sapato empoeirada no fundo do armário.",
      },
      {
        pergunta: "Como estava a letra do bilhete?",
        opcoes: ["Bem redondinha", "Tremida", "Toda em letra de forma"],
        correta: 1,
        feedbackAcerto: "🔍 Exato! O texto diz 'escrito com letra tremida' — uma pista importante.",
        feedbackErro: "Releia o final do primeiro parágrafo: a palavra que descreve a letra vem logo depois de 'escrito com'.",
        ondeEstaNoTexto: "…um bilhete amarelado, sem assinatura, escrito com letra tremida.",
      },
      {
        pergunta: "Que cheiro o papel tinha?",
        opcoes: ["Cheiro de chocolate", "Cheiro de hortelã", "Cheiro de terra"],
        correta: 1,
        feedbackAcerto: "🔍 Boa! 'O papel tinha um cheiro de hortelã'.",
        feedbackErro: "A resposta está no começo do segundo parágrafo.",
        ondeEstaNoTexto: "O papel tinha um cheiro de hortelã…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora vamos usar as PISTAS para inferir quem escreveu o bilhete — mesmo sem assinatura.",
    perguntas: [
      {
        pergunta: "Juntando as pistas (letra tremida + marca de óculos + a palavra 'netinha'), quem provavelmente escreveu o bilhete?",
        opcoes: ["Um colega de escola de Marina", "A avó de Marina", "O carteiro do bairro"],
        correta: 1,
        feedbackAcerto:
          "🔍 Isso mesmo! Letra tremida (idade), marca de óculos e a palavra 'netinha' apontam para a AVÓ — o texto nunca escreveu 'avó', mas as pistas provam.",
        feedbackErro:
          "Pense: quem usa óculos, tem letra tremida e chama alguém de 'netinha'? Junte as três pistas — elas apontam para a avó.",
      },
      {
        pergunta: "Por que Marina 'não precisava de uma assinatura para saber' quem escreveu?",
        opcoes: [
          "Porque tinha visto o nome em outro lugar",
          "Porque as pistas do texto já contavam quem era",
          "Porque um amigo contou para ela",
        ],
        correta: 1,
        feedbackAcerto:
          "🔍 Exatamente! Ela usou a INFERÊNCIA: juntou as pistas do bilhete para concluir quem tinha escrito.",
        feedbackErro:
          "O texto não mostra ninguém contando o nome pra ela — ela mesma juntou as pistas (letra, cheiro, marca, palavra 'netinha') e concluiu sozinha.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Um detetive organiza os fatos na ordem certa. Coloque as cenas da história em sequência.",
    bloco: {
      instrucao: "Do começo ao fim.",
      itens: [
        { id: "p1", texto: "Marina encontra a caixa de sapato empoeirada no armário.", imagemUrl: caixa },
        { id: "p2", texto: "Ela repara na letra tremida e no cheiro de hortelã do bilhete.", imagemUrl: papel },
        { id: "p3", texto: "Marina lê a palavra 'netinha' e entende quem escreveu, mesmo sem assinatura.", imagemUrl: menina },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Perfeito! Você seguiu a pista certa: primeiro o achado, depois as pistas, depois a conclusão.",
      feedbackErro: "Pense como um detetive: primeiro ACHA a pista, depois OBSERVA os detalhes, só então CONCLUI quem é.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e use as pistas para inferir.",
    leitura: {
      titulo: "O Bilhete na Porta da Geladeira",
      imagemUrl: bolo,
      destacar: ["letra bagunçada", "coração desenhado", "sem 'obrigado'"],
      paragrafos: [
        "Preso por um ímã na geladeira, havia um bilhete com letra bagunçada, cheia de letras grandes e um coraçãozinho desenhado do lado.",
        "Dizia apenas: 'Comi o último pedaço de bolo. Prometo comprar outro com meu dinheiro do cofrinho. Desculpa!'",
        "Ninguém assinou, mas só uma pessoa da casa tinha cofrinho e adorava desenhar coraçõezinhos em tudo que escrevia.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que a pessoa prometeu fazer?",
        opcoes: ["Lavar a louça", "Comprar outro bolo com o próprio dinheiro", "Pedir desculpas para a mãe"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Está escrito: 'Prometo comprar outro com meu dinheiro do cofrinho.'",
        feedbackErro: "Releia a segunda frase — a promessa vem logo depois de 'Prometo'.",
        ondeEstaNoTexto: "Prometo comprar outro com meu dinheiro do cofrinho.",
      },
      {
        pergunta: "Pelas pistas (letra bagunçada, coraçãozinho, cofrinho), quem provavelmente escreveu o bilhete?",
        opcoes: ["Um adulto da casa", "Uma criança da casa", "O cachorro da família"],
        correta: 1,
        feedbackAcerto:
          "🔍 Muito bem! Cofrinho, letra grande e desenho de coração são pistas típicas de uma criança — o texto nunca disse isso com todas as letras.",
        feedbackErro:
          "Quem costuma ter cofrinho, desenhar coraçõezinhos e escrever com letras grandes e bagunçadas? Essas pistas juntas apontam para uma criança.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "INFERIR é concluir algo que o texto não diz com todas as letras, juntando pistas + o que já sabemos.",
      "Pistas podem ser: jeito de escrever, cheiro, marcas, palavras escolhidas, objetos citados.",
      "Um bom detetive da palavra junta VÁRIAS pistas antes de concluir — não decide com só uma.",
      "As respostas explícitas continuam importantes: sempre voltamos ao texto para confirmar.",
    ],
    miniDesafio: {
      pergunta: "Um bilhete diz 'Já dei ração pro gato e fui pro trabalho'. O que dá pra inferir sobre quem escreveu?",
      opcoes: [
        "É provavelmente um adulto responsável pela casa",
        "É com certeza uma criança de 5 anos",
        "Não dá pra inferir nada"
      ],
      correta: 0,
      feedbackAcerto: "🔍 Isso! 'Ir para o trabalho' e cuidar do gato são pistas de responsabilidade adulta.",
      feedbackErro: "Pense: quem 'vai pro trabalho' e cuida da casa? Essa é uma pista de que é um adulto.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que significa 'inferir' um texto?",
        opcoes: [
          "Copiar o texto certinho",
          "Concluir algo que não está escrito, usando pistas",
          "Ler bem alto e rápido",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Inferir é concluir com pistas.",
        feedbackErro: "Inferir é USAR PISTAS para descobrir algo que o texto não disse diretamente.",
      },
      {
        pergunta: "2/5 — No bilhete da caixa de sapato, qual NÃO era uma pista sobre a avó?",
        opcoes: ["Letra tremida", "Marca de óculos", "A cor do papel"],
        correta: 2,
        feedbackAcerto: "🔍 Correto! A cor do papel não indicava quem escreveu.",
        feedbackErro: "As pistas fortes eram letra tremida, marca de óculos e a palavra 'netinha' — não a cor do papel.",
      },
      {
        pergunta: "3/5 — Se um bilhete cheira a perfume floral e tem letra bem caprichada, o que é razoável inferir?",
        opcoes: [
          "Foi escrito por alguém que gosta de capricho e perfume",
          "Foi escrito por um cachorro",
          "Não é possível pensar em nada",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Boa dedução! As pistas de cheiro e capricho apontam nessa direção.",
        feedbackErro: "Junte as pistas: perfume + letra caprichada sugerem alguém cuidadoso com os detalhes.",
      },
      {
        pergunta: "4/5 — Por que é importante voltar ao texto mesmo quando fazemos uma inferência?",
        opcoes: [
          "Para confirmar que a inferência tem apoio nas pistas do texto",
          "Porque toda pergunta tem resposta explícita",
          "Não é importante voltar",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exatamente! Toda inferência precisa se apoiar em pistas reais do texto.",
        feedbackErro: "Mesmo inferindo, a criança precisa checar se as pistas usadas realmente estão no texto.",
      },
      {
        pergunta: "5/5 — No caso do bolo, o que fez o clube concluir que era uma criança?",
        opcoes: ["A letra bagunçada, o coraçãozinho e o cofrinho", "A hora em que o bilhete foi deixado", "O tamanho do bolo"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Três pistas combinadas resolveram o caso. Primeira pista do clube resolvida! 🌟",
        feedbackErro: "As pistas eram letra bagunçada, coraçãozinho desenhado e a menção ao cofrinho.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: o bilhete misterioso",
    materiais: ["Papel", "Lápis ou caneta"],
    passos: [
      "1) Peça para um adulto da casa escrever um bilhete curto SEM assinar, com pistas escondidas (jeito de escrever, uma palavra que só ele usa, etc.).",
      "2) A criança lê o bilhete como detetive e tenta descobrir quem escreveu, explicando as pistas usadas.",
      "3) Depois, troquem os papéis: a criança escreve um bilhete sem assinar para o adulto adivinhar.",
      "4) Conversem: qual foi a pista mais fácil de perceber? E a mais difícil?",
    ],
    registro: "🗣️ Registre em áudio ou por escrito: 'Eu descobri que era ___ porque a pista era ___.'",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
