import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";

/**
 * Unidade 5 · Aula 3 — Revisando Como um Autor
 * BNCC: EF02LP23 · EF02LP24
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-revisar-como-autor",
  titulo: "Revisando Como um Autor",
  iconeTrilha: "🔍",
  bncc: ["EF02LP23", "EF02LP24"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O olhar do autor",
    historia:
      "Aurora estende um pergaminho: — Todo bom escritor RELÊ o próprio texto. É como olhar de novo pra descobrir onde melhorar. Um bom autor não escreve só uma vez — REVISA!",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Leia o texto sem correção. Está fácil de ler?",
    bloco: {
      titulo: "Texto sem revisão",
      recado: {
        icone: "📝",
        rotulo: "Texto do rascunho",
        estilo: "papel",
        linhas: [
          "maria foi na praça",
          "brincou muito voltou feliz",
        ],
      },
      pergunta: "Esse texto precisa de revisão?",
      hipoteses: [
        {
          texto: "SIM — falta maiúscula, ponto e as frases coladas.",
          imagemUrl: lapis,
        },
        { texto: "Não, está perfeito assim.", imagemUrl: coracao },
        { texto: "Só falta desenhar uma flor.", imagemUrl: estrela },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 SIM! Falta letra maiúscula em 'maria' e PONTOS separando as frases.",
      feedbackErro:
        "Olhe de novo: 'maria' com m minúsculo e SEM pontos separando o que ela fez. Precisa revisar.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de revisor.",
    cards: [
      {
        palavra: "revisar",
        explicacao:
          "É LER de novo o texto pra encontrar o que dá pra melhorar.",
        exemplo: "Depois de escrever, o autor SEMPRE revisa.",
        imagemUrl: lapis,
      },
      {
        palavra: "pontuação",
        explicacao:
          "São os sinais que ajudam a ler: . (ponto), ! (surpresa), ? (pergunta).",
        exemplo: "'Que legal!' — o ! mostra que é uma surpresa alegre.",
        imagemUrl: papel,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha revisa em voz alta. Leia junto.",
    leitura: {
      titulo: "A checklist do autor",
      imagemUrl: brilha,
      destacar: ["maiúscula", "pontuação", "palavras", "sentido"],
      paragrafos: [
        "Toda vez que escreve, o autor CONFERE 4 coisas:",
        "✅ 1) Começa com letra MAIÚSCULA?",
        "✅ 2) Termina com PONTUAÇÃO ( . ! ? )?",
        "✅ 3) Todas as PALAVRAS estão completas e certinhas?",
        "✅ 4) A leitura FAZ SENTIDO?",
        "Se algum item falhou, o autor CONSERTA antes de publicar.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Aplique a checklist do autor.",
    perguntas: [
      {
        pergunta:
          "'ana foi à escola' — qual item da checklist falhou?",
        opcoes: [
          "Letra MAIÚSCULA no início e PONTO no fim",
          "As palavras estão erradas",
          "Nada está errado",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Falta MAIÚSCULA e PONTO: 'Ana foi à escola.'",
        feedbackErro:
          "'ana' com m minúsculo e SEM ponto no fim. Correto: 'Ana foi à escola.'",
        dica: "Volte no texto e procure a parte que fala de 'checklist'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: ana' com m minúsculo e SEM ponto no fim. Correto: 'Ana foi à escola.' Agora leia de novo e escolha com calma.",
      },
      {
        pergunta:
          "'O menino correu correu correu.' está bom?",
        opcoes: [
          "Não — a palavra ficou REPETIDA sem sentido",
          "Sim, ficou mais bonito",
          "Só se tiver 5 vezes",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 REPETIR palavra atoa deixa o texto ruim. Melhor: 'O menino correu muito.'",
        feedbackErro:
          "Palavra REPETIDA sem sentido atrapalha a leitura. Melhor: 'O menino correu muito.'",
        dica: "Volte no texto e procure a parte que fala de 'menino'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Palavra REPETIDA sem sentido atrapalha a leitura. Melhor: 'O menino correu muito.' Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Pra que serve REVISAR?",
        opcoes: [
          "Pra deixar o texto pior",
          "Pra MELHORAR e ficar mais fácil de ler",
          "Pra apagar tudo",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Pra MELHORAR!",
        feedbackErro:
          "Revisar = MELHORAR o texto pra ficar mais claro pra quem lê.",
        dica: "Volte no texto e procure a parte que fala de 'revisar'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Revisar = MELHORAR o texto pra ficar mais claro pra quem lê. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Encontre o problema em cada texto.",
    perguntas: [
      {
        pergunta:
          "'A bola rolou no jardim' — o que falta pra ficar perfeita?",
        opcoes: [
          "PONTO no final (.)",
          "Uma cor pra bola",
          "Um número no meio",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Falta o PONTO: 'A bola rolou no jardim.'",
        feedbackErro: "Falta o PONTO no fim.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta:
          "'Você vem comigo' — qual pontuação combina melhor?",
        opcoes: ["Ponto (.)", "Interrogação (?)", "Nenhuma"],
        correta: 1,
        feedbackAcerto: "🎉 É uma PERGUNTA → 'Você vem comigo?'",
        feedbackErro:
          "É uma pergunta! Termina com INTERROGAÇÃO: 'Você vem comigo?'",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem os passos da REVISÃO.",
    bloco: {
      instrucao: "Do começo (ler) até o fim (publicar).",
      itens: [
        { id: "s1", texto: "Ler o texto TODO em voz alta.", imagemUrl: brilha },
        { id: "s2", texto: "Marcar o que precisa arrumar.", imagemUrl: lapis },
        { id: "s3", texto: "CONSERTAR maiúscula, pontuação e palavras.", imagemUrl: papel },
        { id: "s4", texto: "Ler DE NOVO pra ver se ficou bom.", imagemUrl: estrela },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 Assim revisa um autor de verdade!",
      feedbackErro:
        "Primeiro LER, depois MARCAR, depois CONSERTAR, e enfim LER DE NOVO.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Você é o revisor. Encontre os erros.",
    leitura: {
      titulo: "Texto pra revisar",
      imagemUrl: papel,
      destacar: ["lia", "sem ponto"],
      paragrafos: [
        "Rascunho: 'lia comprou pão de manhã'",
        "Confira: começa com maiúscula? termina com ponto?",
        "Versão corrigida: 'Lia comprou pão de manhã.'",
      ],
    },
    perguntas: [
      {
        pergunta: "Quais foram os 2 problemas do rascunho?",
        opcoes: [
          "Falta MAIÚSCULA em 'lia' e falta PONTO no fim",
          "A palavra 'pão' está errada",
          "Falta desenhar uma flor",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Maiúscula em Lia e ponto no fim!",
        feedbackErro:
          "1) 'lia' → 'Lia' (maiúscula). 2) Falta PONTO no fim.",
        dica: "Volte no texto e procure a parte que fala de 'problemas'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: 1) 'lia' → 'Lia' (maiúscula). 2) Falta PONTO no fim. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "lia comprou pão de manhã",
      },
      {
        pergunta: "Depois de revisar, a gente deve…",
        opcoes: [
          "Sair correndo",
          "LER DE NOVO pra conferir",
          "Apagar tudo",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Ler de novo pra conferir!",
        feedbackErro:
          "Depois de consertar, o autor sempre LÊ DE NOVO pra ver se ficou bom.",
        dica: "Volte no texto e procure a parte que fala de 'revisar'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Depois de consertar, o autor sempre LÊ DE NOVO pra ver se ficou bom. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🔍 Oficina da Revisão",
    instrucao:
      "MARQUE só as frases que estão BEM ESCRITAS (maiúscula no início e pontuação certa).",
    jogo: {
      tipo: "selecionarItens",
      titulo: "🔍 Oficina da Revisão",
      bloco: {
        instrucao:
          "Um bom autor sabe reconhecer as frases prontas pra publicar.",
        pergunta: "Quais dessas frases estão CERTAS?",
        opcoes: [
          { id: "o1", texto: "O sol brilhou no céu.", correto: true },
          { id: "o2", texto: "a lua apareceu", correto: false },
          { id: "o3", texto: "Que dia lindo!", correto: true },
          { id: "o4", texto: "quero um sorvete", correto: false },
          { id: "o5", texto: "Você vem comigo?", correto: true },
        ],
        feedbackAcerto:
          "🎉 Revisor de verdade! As certas começam com MAIÚSCULA e têm . ! ?",
        feedbackErro:
          "Confira cada frase: começa com maiúscula? Termina com . ! ou ? As duas frases sem maiúscula e sem ponto estão erradas.",
        dica: "Leia a pergunta devagar e procure a parte que fala de 'dessas'. Elimine as opções que não combinam.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Toda frase começa com MAIÚSCULA.",
      "Toda frase termina com . / ! / ?",
      "Ler DE NOVO ajuda a encontrar o que melhorar.",
    ],
    miniDesafio: {
      pergunta: "Qual frase está CERTA?",
      opcoes: [
        "gustavo achou uma pena",
        "Gustavo achou uma pena.",
        "gustavo achou uma pena!",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Maiúscula + ponto = certa!",
      feedbackErro:
        "A frase precisa de MAIÚSCULA em Gustavo E de PONTO no fim.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: A frase precisa de MAIÚSCULA em Gustavo E de PONTO no fim. Agora leia de novo e escolha com calma.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Toda frase começa com…",
        opcoes: ["Minúscula", "MAIÚSCULA", "Um número",
          "Sair correndo",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Minúscula» não é a resposta. A certa é «MAIÚSCULA».",
          null,
          "«Um número» não é a resposta. A certa é «MAIÚSCULA».",
          "«Sair correndo» não é a resposta. A certa é «MAIÚSCULA».",
        ],
        feedbackAcerto: "🎉 Maiúscula!",
        feedbackErro: "Toda frase começa com letra MAIÚSCULA.",
        dica: "Pista: a resposta certa começa com a letra 'M'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Toda frase começa com letra MAIÚSCULA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — 'Quero um doce' — qual pontuação combina?",
        opcoes: ["Vírgula (,)", "Exclamação (!)", "Nenhuma",
          "Um número no meio",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Vírgula (,)» não é a resposta. A certa é «Exclamação (!)».",
          null,
          "«Nenhuma» não é a resposta. A certa é «Exclamação (!)».",
          "«Um número no meio» não é a resposta. A certa é «Exclamação (!)».",
        ],
        feedbackAcerto: "🎉 Exclamação → 'Quero um doce!'",
        feedbackErro:
          "É um DESEJO com emoção → EXCLAMAÇÃO: 'Quero um doce!'",
        dica: "Pista: a resposta certa começa com a letra 'E'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: É um DESEJO com emoção → EXCLAMAÇÃO: 'Quero um doce!' Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — Revisar quer dizer…",
        opcoes: ["APAGAR tudo", "LER de novo pra melhorar", "Copiar do amigo",
          "Ponto (.)",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«APAGAR tudo» não é a resposta. A certa é «LER de novo pra melhorar».",
          null,
          "«Copiar do amigo» não é a resposta. A certa é «LER de novo pra melhorar».",
          "«Ponto (.)» não é a resposta. A certa é «LER de novo pra melhorar».",
        ],
        feedbackAcerto: "🎉 Ler de novo pra melhorar!",
        feedbackErro: "REVISAR = ler de novo pra MELHORAR o texto.",
        dica: "Pista: a resposta certa começa com a letra 'L'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: REVISAR = ler de novo pra MELHORAR o texto. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — 'Cadê a chave' — qual pontuação combina?",
        opcoes: ["Ponto (.)", "Interrogação (?)", "Vírgula (,)",
          "Você vem comigo?",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Ponto (.)» não é a resposta. A certa é «Interrogação (?)».",
          null,
          "«Vírgula (,)» não é a resposta. A certa é «Interrogação (?)».",
          "«Você vem comigo?» não é a resposta. A certa é «Interrogação (?)».",
        ],
        feedbackAcerto: "🎉 É pergunta!",
        feedbackErro:
          "'Cadê a chave' é PERGUNTA → INTERROGAÇÃO (?).",
        dica: "Pista: a resposta certa começa com a letra 'I'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Cadê a chave' é PERGUNTA → INTERROGAÇÃO (?). Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Qual está CERTA?",
        opcoes: [
          "o gato dormiu",
          "O gato dormiu.",
          "O Gato Dormiu ,",
          "O sol brilhou no céu.",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«o gato dormiu» não é a resposta. A certa é «O gato dormiu.».",
          null,
          "«O Gato Dormiu ,» não é a resposta. A certa é «O gato dormiu.».",
          "«O sol brilhou no céu.» não é a resposta. A certa é «O gato dormiu.».",
        ],
        feedbackAcerto: "🎉 Maiúscula no começo + ponto no fim!",
        feedbackErro:
          "Certa: 'O gato dormiu.' (maiúscula só em 'O' e PONTO no fim).",
        dica: "Pista: a resposta certa começa com a letra 'O'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Certa: 'O gato dormiu.' (maiúscula só em 'O' e PONTO no fim). Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Revisor da família",
    materiais: ["Um texto que a criança escreveu"],
    passos: [
      "1) A criança lê o próprio texto EM VOZ ALTA.",
      "2) Passa a checklist: maiúscula? pontuação? palavras completas? faz sentido?",
      "3) Um adulto ajuda a MARCAR o que melhorar.",
      "4) A criança reescreve a versão MELHORADA.",
    ],
    registro: "📸 Foto do 'antes' e do 'depois' do texto.",
  },

  recompensa: { xp: 150, moedas: 100 },
};

void coracao;
