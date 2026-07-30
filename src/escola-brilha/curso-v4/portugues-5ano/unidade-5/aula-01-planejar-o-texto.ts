import type { AulaPortuguesV4 } from "../../types";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as quebraCabeca } from "@/assets/neuro-treino/objetos/quebra-cabeca.png.asset.json";
import { url as caderno } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Aula 1 — Planejar o texto
 * -------------------------------------------------------------
 * Unidade 5 · Diário de Escritor (5º ano)
 * Foco: antes de escrever, pensar em quem vai ler (público), para
 * que serve o texto (objetivo) e organizar as ideias num roteiro
 * (esquema) antes de partir para a escrita.
 * BNCC: EF05LP25, EF05LP26
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-planejar-o-texto",
  titulo: "Planejar o texto",
  iconeTrilha: "🗺️",
  bncc: ["EF05LP25", "EF05LP26"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O mapa antes da viagem",
    historia:
      "Brilha abriu um mapa cheio de setas e caminhos. — Antes de qualquer viagem, a gente olha o mapa e decide para onde vai, certo? Escrever um texto é igual! Antes de escrever a primeira palavra, um bom escritor pensa: para quem estou escrevendo? Para que serve meu texto? E qual é a ordem das minhas ideias? Isso se chama PLANEJAMENTO. Vamos aprender a montar esse mapa antes de escrever?",
    imagemUrl: mapa,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas do Diário de Escritor antes de começar.",
    bloco: {
      titulo: "O Diário de Escritor",
      capaImagemUrl: caderno,
      pistas: [
        { imagemUrl: bussola, nome: "Uma bússola apontando o caminho" },
        { imagemUrl: lapis, nome: "Um lápis pronto para escrever" },
      ],
      pergunta: "Sobre o que essa aula vai ensinar?",
      hipoteses: [
        { texto: "Como desenhar mapas do tesouro.", imagemUrl: mapa },
        { texto: "Como organizar as ideias antes de escrever um texto.", imagemUrl: bussola },
        { texto: "Como decorar o caderno com adesivos.", imagemUrl: caderno },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender a planejar as ideias antes de começar a escrever.",
      feedbackErro: "Pense na bússola: ela ajuda a escolher o caminho antes de andar. É sobre planejar o texto antes de escrever.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras do planejamento de um texto.",
    cards: [
      {
        palavra: "público",
        explicacao: "As pessoas que vão ler o seu texto. Pode ser um amigo, a professora, ou até desconhecidos.",
        exemplo: "Se o público é uma criança pequena, uso palavras mais simples.",
        imagemUrl: menina,
      },
      {
        palavra: "objetivo",
        explicacao: "O motivo pelo qual você está escrevendo: contar uma história, convencer alguém, explicar algo, divertir.",
        exemplo: "Meu objetivo é convencer minha turma a reciclar o lixo da escola.",
        imagemUrl: estrela,
      },
      {
        palavra: "roteiro",
        explicacao: "Uma lista com a ordem das ideias que vão aparecer no texto, feita antes de escrever.",
        exemplo: "No roteiro, anotei: início, problema, solução e final.",
        imagemUrl: mapa,
      },
      {
        palavra: "rascunho",
        explicacao: "A primeira versão do texto, escrita rapidamente, que ainda vai ser revisada e melhorada.",
        exemplo: "Fiz um rascunho da carta antes de passar a limpo.",
        imagemUrl: papel,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo o planejamento acontecer",
    instrucao: "Ouça o Brilha mostrando como pensar antes de escrever.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Vou escrever para meus colegas de turma, então posso usar gírias e um tom animado.", explicacao: "Aqui o escritor pensou no PÚBLICO: para quem ele escreve." },
          { texto: "Meu objetivo é explicar como fazer um brinquedo com material reciclável.", explicacao: "Aqui aparece o OBJETIVO: o motivo do texto, explicar algo." },
          { texto: "Primeiro vou apresentar os materiais, depois os passos, depois o resultado final.", explicacao: "Isso é um ROTEIRO: a ordem das ideias antes de escrever." },
          { texto: "Este é só um rascunho, ainda vou revisar antes de entregar.", explicacao: "O RASCUNHO é a primeira tentativa, que pode ter erros e será melhorada." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha explicou como funciona o planejamento de um texto.",
    leitura: {
      titulo: "O Mapa do Escritor",
      imagemUrl: mapa,
      legendaImagem: "Página sobre planejamento de texto",
      destacar: ["público", "objetivo", "roteiro", "esquema"],
      paragrafos: [
        "Antes de escrever qualquer texto, um bom escritor faz três perguntas. A primeira é: quem vai ler este texto? Essa é a pergunta sobre o PÚBLICO. Escrever para um bebê é diferente de escrever para um adulto, e escrever um bilhete para a mãe é diferente de escrever para a diretora da escola.",
        "A segunda pergunta é: para que serve este texto? Essa é a pergunta sobre o OBJETIVO. Um texto pode servir para contar uma história (narrar), para convencer alguém de algo (argumentar), para explicar como fazer algo (instruir) ou até para divertir com um poema. Saber o objetivo ajuda a escolher as palavras certas.",
        "Depois de pensar no público e no objetivo, o escritor organiza suas ideias em um ROTEIRO, também chamado de ESQUEMA. É como fazer uma listinha: o que vem primeiro, o que vem no meio e o que vem no final. Por exemplo, para contar sobre uma viagem, o roteiro pode ser: 1) como foi a chegada; 2) o que de mais legal aconteceu; 3) como foi a despedida.",
        "Veja um exemplo real de planejamento: 'Público: meus colegas de turma. Objetivo: convencê-los a participar da campanha de arrecadação de livros. Roteiro: 1) por que os livros são importantes; 2) como cada um pode ajudar; 3) convite final para participar.' Com esse mapa pronto, escrever fica muito mais fácil e organizado, porque o escritor já sabe para onde está indo.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que é o 'público' de um texto?",
        opcoes: ["O título do texto", "As pessoas que vão ler o texto", "O número de páginas", "A cor da capa"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O público são as pessoas que vão ler o texto.",
        feedbackErro: "Releia: 'quem vai ler este texto? Essa é a pergunta sobre o PÚBLICO.'",
        ondeEstaNoTexto: "quem vai ler este texto? Essa é a pergunta sobre o PÚBLICO",
      },
      {
        pergunta: "O que é o roteiro (ou esquema) de um texto?",
        opcoes: [
          "A capa do caderno",
          "Uma lista com a ordem das ideias, feita antes de escrever",
          "O nome do autor",
          "A quantidade de palavras do texto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O roteiro organiza a ordem das ideias antes da escrita.",
        feedbackErro: "Releia: 'o escritor organiza suas ideias em um ROTEIRO... É como fazer uma listinha.'",
        ondeEstaNoTexto: "o escritor organiza suas ideias em um ROTEIRO, também chamado de ESQUEMA",
      },
      {
        pergunta: "No exemplo de planejamento do texto, qual era o objetivo do escritor?",
        opcoes: [
          "Contar uma piada",
          "Convencer os colegas a participar da campanha de livros",
          "Explicar uma receita de bolo",
          "Descrever um animal",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! O objetivo era convencer os colegas a participar da campanha.",
        feedbackErro: "Releia: 'Objetivo: convencê-los a participar da campanha de arrecadação de livros.'",
        ondeEstaNoTexto: "Objetivo: convencê-los a participar da campanha de arrecadação de livros",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Pense sobre os exemplos usados na explicação.",
    perguntas: [
      {
        pergunta: "No exemplo do roteiro sobre uma viagem, o que vem primeiro?",
        opcoes: ["A despedida", "Como foi a chegada", "O que de mais legal aconteceu", "Nenhuma das opções"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O roteiro começava com a chegada.",
        feedbackErro: "Releia: '1) como foi a chegada; 2) o que de mais legal aconteceu; 3) como foi a despedida.'",
      },
      {
        pergunta: "Para quem era destinado o texto sobre a campanha de arrecadação de livros?",
        opcoes: ["Para a diretora", "Para os colegas de turma", "Para os pais", "Para um jornal"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O público eram os colegas de turma.",
        feedbackErro: "Releia: 'Público: meus colegas de turma.'",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos do planejamento de um texto.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Pensar em quem vai ler o texto (o público).", imagemUrl: menina },
        { id: "p2", texto: "Definir para que serve o texto (o objetivo).", imagemUrl: estrela },
        { id: "p3", texto: "Organizar as ideias em um roteiro, na ordem certa.", imagemUrl: mapa },
        { id: "p4", texto: "Escrever o rascunho seguindo o roteiro planejado.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho de um bom planejamento.",
      feedbackErro: "Pense: primeiro se pensa em quem vai ler, depois no objetivo, depois se organiza o roteiro, e só então se escreve.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "Mais dicas para planejar",
      imagemUrl: quebraCabeca,
      destacar: ["ideias soltas", "organizar"],
      paragrafos: [
        "Uma boa técnica para planejar é anotar todas as IDEIAS SOLTAS que vierem à cabeça, sem se preocupar com a ordem no começo. Depois, o escritor lê tudo o que anotou e decide o que é mais importante e em que ordem cada ideia vai aparecer no texto.",
        "É como montar um quebra-cabeça: primeiro espalhamos todas as peças na mesa, depois vamos ORGANIZAR cada peça no lugar certo até formar a imagem completa. Escrever um texto bem planejado funciona do mesmo jeito.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que fazer com as ideias soltas, segundo o texto?",
        opcoes: [
          "Jogar fora todas elas",
          "Anotá-las e depois organizar a ordem mais importante",
          "Decorar todas de memória",
          "Usá-las sem nenhuma ordem",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Primeiro anotamos as ideias, depois organizamos.",
        feedbackErro: "Releia: 'o escritor lê tudo o que anotou e decide o que é mais importante e em que ordem cada ideia vai aparecer'.",
        ondeEstaNoTexto: "o escritor lê tudo o que anotou e decide o que é mais importante e em que ordem cada ideia vai aparecer no texto",
      },
      {
        pergunta: "Com o que o texto compara o processo de planejar um texto?",
        opcoes: ["Com um jogo de futebol", "Com um quebra-cabeça", "Com uma receita de bolo", "Com uma corrida"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O texto compara com montar um quebra-cabeça.",
        feedbackErro: "Releia: 'É como montar um quebra-cabeça: primeiro espalhamos todas as peças...'",
        ondeEstaNoTexto: "É como montar um quebra-cabeça: primeiro espalhamos todas as peças na mesa",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte o roteiro certo",
    instrucao: "Coloque as etapas do planejamento na ordem correta.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "A Trilha do Planejamento",
      bloco: {
        instrucao: "Arraste cada card para formar a ordem certa do planejamento.",
        itens: [
          { id: "s1", texto: "Pensar: quem vai ler meu texto?", imagemUrl: menino },
          { id: "s2", texto: "Pensar: para que serve meu texto?", imagemUrl: estrela },
          { id: "s3", texto: "Montar o roteiro com a ordem das ideias.", imagemUrl: mapa },
          { id: "s4", texto: "Escrever o rascunho seguindo o roteiro.", imagemUrl: papel },
        ],
        ordemCerta: ["s1", "s2", "s3", "s4"],
        feedbackAcerto: "🎉 Muito bem! Você montou o roteiro do planejamento na ordem certa.",
        feedbackErro: "Lembre-se: primeiro público, depois objetivo, depois roteiro, e só então o rascunho.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PÚBLICO é para quem você escreve; OBJETIVO é para que serve o texto.",
      "ROTEIRO (ou esquema) organiza a ordem das ideias antes de escrever.",
      "Planejar antes de escrever torna o texto mais organizado e claro.",
    ],
    miniDesafio: {
      pergunta: "Antes de escrever uma carta para o prefeito pedindo uma praça nova, o que devo pensar primeiro?",
      opcoes: [
        "Só na letra bonita",
        "No público (o prefeito) e no objetivo (pedir a praça)",
        "Na cor da caneta",
        "No tamanho do papel",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Pensar no público e no objetivo é o primeiro passo do planejamento.",
      feedbackErro: "Releia a explicação: antes de escrever, pensamos em quem vai ler e para que serve o texto.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que significa pensar no 'público' de um texto?",
        opcoes: ["Pensar no preço do papel", "Pensar em quem vai ler o texto", "Pensar no tamanho da letra", "Pensar na cor da tinta"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Público é quem vai ler o texto.",
        feedbackErro: "Público são as pessoas que vão ler o texto.",
      },
      {
        pergunta: "2/5 — O que é o objetivo de um texto?",
        opcoes: ["O motivo pelo qual se escreve", "O nome do autor", "A quantidade de páginas", "A data de entrega"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Objetivo é o motivo de escrever: narrar, explicar, convencer, divertir.",
        feedbackErro: "Objetivo é para que serve o texto: contar, explicar, convencer ou divertir.",
      },
      {
        pergunta: "3/5 — O que é um roteiro ou esquema de texto?",
        opcoes: [
          "Uma lista de ideias na ordem em que vão aparecer no texto",
          "Um desenho na capa",
          "Uma lista de erros de ortografia",
          "O número de parágrafos",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! O roteiro organiza as ideias antes de escrever.",
        feedbackErro: "Roteiro é a ordem planejada das ideias do texto.",
      },
      {
        pergunta: "4/5 — O que é um rascunho?",
        opcoes: ["A versão final e perfeita", "A primeira versão do texto, que ainda será revisada", "O título do texto", "A assinatura do autor"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Rascunho é a primeira tentativa de escrita.",
        feedbackErro: "Rascunho é a primeira versão, que ainda vai passar por revisão.",
      },
      {
        pergunta: "5/5 — Qual é a ordem correta do planejamento de um texto?",
        opcoes: [
          "Rascunho, roteiro, público, objetivo",
          "Público, objetivo, roteiro, rascunho",
          "Objetivo, rascunho, público, roteiro",
          "Roteiro, rascunho, objetivo, público",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! Primeiro pensamos no público, depois no objetivo, depois no roteiro, e só então escrevemos o rascunho.",
        feedbackErro: "A ordem certa é: público, objetivo, roteiro e por último o rascunho.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Meu primeiro planejamento de texto",
    materiais: ["Papel e lápis", "Uma pessoa da família para ajudar a revisar"],
    passos: [
      "1) Escolha um tema simples para escrever, por exemplo: 'meu animal favorito' ou 'um passeio que gostei'.",
      "2) Anote no papel: Público (quem vai ler) e Objetivo (para que serve o texto).",
      "3) Monte um pequeno ROTEIRO com 3 ideias, na ordem em que vão aparecer.",
      "4) Escreva o RASCUNHO seguindo o roteiro, com 4 a 6 frases.",
      "5) Peça a um adulto para ler seu rascunho e dar uma sugestão de melhoria.",
      "6) Escreva a VERSÃO FINAL, já com a sugestão do adulto incluída.",
    ],
    registro: "📝 Uma foto do roteiro, do rascunho e da versão final, mostrando as três etapas.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
