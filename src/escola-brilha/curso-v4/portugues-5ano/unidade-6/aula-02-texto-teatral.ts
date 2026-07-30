import type { AulaPortuguesV4 } from "../../types";
import { url as mascaraAfricana } from "@/assets/neuro-treino/objetos/mascara-africana.png.asset.json";
import { url as mascaraIndigena } from "@/assets/neuro-treino/objetos/mascara-indigena.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as festa } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Aula 2 — Texto teatral
 * -------------------------------------------------------------
 * Unidade 6 · Vozes do Mundo (5º ano)
 * Foco: reconhecer cena, personagem, fala e rubrica (indicação
 * cênica) na estrutura do texto teatral.
 * BNCC: EF05LP29, EF15LP19
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-texto-teatral",
  titulo: "Texto teatral",
  iconeTrilha: "🎭",
  bncc: ["EF05LP29", "EF15LP19"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O Palco Encantado",
    historia:
      "Brilha entrou num teatro com cortinas vermelhas e máscaras penduradas na parede. — Chegamos ao Palco Encantado! Aqui a gente descobre como funciona o TEXTO TEATRAL, aquele que é escrito para ser ENCENADO, ou seja, representado por atores no palco. Vamos aprender a ler as falas e as rubricas de uma peça?",
    imagemUrl: mascaraAfricana,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas do Palco Encantado antes de começar.",
    bloco: {
      titulo: "O Palco Encantado",
      capaImagemUrl: mascaraAfricana,
      pistas: [
        { imagemUrl: mascaraIndigena, nome: "Uma máscara de personagem" },
        { imagemUrl: criancasGrupo, nome: "Um grupo pronto para encenar" },
      ],
      pergunta: "Sobre o que essa aula vai ensinar?",
      hipoteses: [
        { texto: "Como fazer máscaras de festa.", imagemUrl: mascaraIndigena },
        { texto: "Como é organizado um texto de teatro, com falas e personagens.", imagemUrl: livro },
        { texto: "Como decorar um palco com balões.", imagemUrl: festa },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos descobrir como é escrito um texto para ser encenado.",
      feedbackErro: "Pense no grupo pronto para encenar: essa aula é sobre a estrutura do texto de teatro.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras do Palco Encantado.",
    cards: [
      {
        palavra: "texto teatral",
        explicacao: "Texto escrito para ser representado por atores em um palco, diante de uma plateia.",
        exemplo: "Uma peça sobre a Chapeuzinho Vermelho é um exemplo de texto teatral.",
        imagemUrl: mascaraAfricana,
      },
      {
        palavra: "cena",
        explicacao: "Cada parte de uma peça em que a ação acontece em um mesmo lugar e tempo.",
        exemplo: "Na primeira cena, os personagens estão na floresta; na segunda, estão na casa da vovó.",
        imagemUrl: quadroAlegre,
      },
      {
        palavra: "fala",
        explicacao: "O texto que cada personagem diz, sempre indicado com o nome do personagem antes.",
        exemplo: "LOBO: Que cesta cheia de comida, hein?",
        imagemUrl: criancasGrupo,
      },
      {
        palavra: "rubrica",
        explicacao: "Indicação cênica escrita entre parênteses que explica como o personagem age, fala ou se movimenta — não é dita em voz alta pelo ator.",
        exemplo: "(O lobo esconde-se atrás de uma árvore.)",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo a estrutura da peça",
    instrucao: "Ouça o Brilha destacando as partes de um trecho teatral.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "CHAPEUZINHO: Que caminho eu devo seguir até a casa da vovó?", explicacao: "Essa é uma FALA: o nome do personagem vem antes, seguido de dois-pontos." },
          { texto: "(O lobo aponta para o caminho mais longo, sorrindo escondido.)", explicacao: "Essa é uma RUBRICA, entre parênteses: ela orienta a ação, mas não é dita em voz alta." },
          { texto: "LOBO: Siga por aquele caminho, é mais bonito!", explicacao: "Outra FALA, agora do personagem Lobo — repare no dois-pontos depois do nome." },
          { texto: "Cena 2 — Na casa da vovó", explicacao: "Essa marcação indica uma nova CENA: mudou o lugar da ação." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou no Palco Encantado como funciona o texto teatral.",
    leitura: {
      titulo: "O Caderno do Palco Encantado",
      imagemUrl: livro,
      legendaImagem: "Página sobre texto teatral",
      destacar: ["cena", "personagem", "fala", "rubrica"],
      paragrafos: [
        "O TEXTO TEATRAL é escrito para ser encenado, ou seja, representado por atores diante de uma plateia. Ele é organizado em CENAS: cada cena mostra a ação acontecendo em um lugar e tempo específicos. Quando o lugar ou o momento muda, começa uma nova cena.",
        "Cada PERSONAGEM tem sua FALA, que é o texto que ele diz. No texto teatral, a fala é sempre marcada com o nome do personagem em letras maiúsculas, seguido de dois-pontos, para o leitor (ou ator) saber quem está falando.",
        "Além das falas, o texto teatral tem as RUBRICAS, que são indicações cênicas escritas entre parênteses. As rubricas explicam como o personagem se move, o tom de voz que usa, ou o que acontece no cenário — mas elas não são ditas em voz alta pelo ator, apenas orientam a encenação. Veja um trecho de cena, escrito especialmente para esta aula:\n\nCena 1 — A floresta\n\n(Chapeuzinho Vermelho caminha distraída, cantarolando. O lobo aparece atrás de uma árvore.)\n\nLOBO: (com voz doce, fingindo ser gentil) Bom dia, menina! Para onde você vai com essa cesta tão cheia?\n\nCHAPEUZINHO: Bom dia! Vou levar doces para a casa da minha vovó, que mora do outro lado da floresta.\n\nLOBO: (sorrindo escondido) Que ótimo... Aposte que aquele caminho ali é mais rápido!\n\n(O lobo aponta para um caminho cheio de espinhos e sai correndo em direção à casa da vovó.)",
        "Nesse trecho, percebemos a Cena 1 (a floresta), os personagens Chapeuzinho e Lobo, suas falas (marcadas com dois-pontos) e as rubricas (entre parênteses), que revelam intenções escondidas do lobo, como 'sorrindo escondido' — algo que a plateia vê, mas Chapeuzinho não percebe.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no caderno se precisar.",
    perguntas: [
      {
        pergunta: "Para que serve o texto teatral, segundo o texto?",
        opcoes: [
          "Para ser lido silenciosamente em casa",
          "Para ser encenado, representado por atores diante de uma plateia",
          "Para ser cantado como uma música",
          "Para ser desenhado num cartaz",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O texto teatral é escrito para ser encenado.",
        feedbackErro: "Releia: 'escrito para ser encenado, ou seja, representado por atores diante de uma plateia'.",
        ondeEstaNoTexto: "escrito para ser encenado, ou seja, representado por atores diante de uma plateia",
      },
      {
        pergunta: "Como a fala de um personagem é marcada no texto teatral?",
        opcoes: [
          "Com o nome do personagem entre parênteses",
          "Com o nome do personagem em maiúsculas, seguido de dois-pontos",
          "Com uma estrela antes da fala",
          "Sem nenhuma marcação especial",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! A fala é marcada com o nome em maiúsculas e dois-pontos.",
        feedbackErro: "Releia: 'a fala é sempre marcada com o nome do personagem em letras maiúsculas, seguido de dois-pontos'.",
        ondeEstaNoTexto: "a fala é sempre marcada com o nome do personagem em letras maiúsculas, seguido de dois-pontos",
      },
      {
        pergunta: "O que é uma rubrica?",
        opcoes: [
          "O título da peça",
          "Uma indicação cênica entre parênteses, que não é dita em voz alta",
          "O nome do autor da peça",
          "A última fala da cena",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Rubrica é a indicação cênica entre parênteses.",
        feedbackErro: "Releia: 'indicações cênicas escritas entre parênteses... elas não são ditas em voz alta pelo ator'.",
        ondeEstaNoTexto: "indicações cênicas escritas entre parênteses",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Sobre a cena lida nesta aula.",
    perguntas: [
      {
        pergunta: "Onde acontece a Cena 1 do trecho lido?",
        opcoes: ["Na casa da vovó", "Na floresta", "Numa escola", "Num teatro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A Cena 1 acontece na floresta.",
        feedbackErro: "Releia: 'Cena 1 — A floresta'.",
      },
      {
        pergunta: "O que a rubrica '(sorrindo escondido)' revela sobre o lobo?",
        opcoes: [
          "Que ele está com fome",
          "Que ele tem más intenções escondidas de Chapeuzinho",
          "Que ele está com sono",
          "Que ele é amigo da vovó",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! A rubrica mostra que o lobo esconde uma intenção da Chapeuzinho.",
        feedbackErro: "Releia a cena: o lobo sorri escondido enquanto finge ser gentil, indicando uma intenção que só a plateia percebe.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para escrever uma cena de teatro.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Definir o lugar e o momento em que a cena acontece.", imagemUrl: quadroAlegre },
        { id: "p2", texto: "Escolher os personagens que vão participar da cena.", imagemUrl: criancasGrupo },
        { id: "p3", texto: "Escrever as falas de cada personagem, com o nome antes dos dois-pontos.", imagemUrl: papel },
        { id: "p4", texto: "Adicionar rubricas entre parênteses para orientar a atuação.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho certo para escrever uma cena de teatro.",
      feedbackErro: "Pense: primeiro se define o lugar, depois os personagens, depois as falas e por fim as rubricas.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outro trecho do caderno e responda.",
    leitura: {
      titulo: "Mais Descobertas no Palco Encantado",
      imagemUrl: festa,
      destacar: ["figurino", "cenário"],
      paragrafos: [
        "Além do texto, o teatro usa outros elementos para contar a história: o FIGURINO, que são as roupas e adereços dos atores, e o CENÁRIO, que é a decoração do palco que representa o lugar da cena.",
        "Um bom cenário de floresta pode ter árvores de papelão e luzes verdes, enquanto o figurino do lobo pode ter uma capa cinza e orelhas pontudas. Esses elementos ajudam a plateia a entender a história sem precisar ler o texto — eles 'mostram' o que as palavras descrevem.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que é o figurino, no teatro?",
        opcoes: [
          "O texto da peça",
          "As roupas e adereços usados pelos atores",
          "O ingresso do espetáculo",
          "O nome do diretor da peça",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Figurino são as roupas e adereços dos atores.",
        feedbackErro: "Releia: 'o FIGURINO, que são as roupas e adereços dos atores'.",
        ondeEstaNoTexto: "o FIGURINO, que são as roupas e adereços dos atores",
      },
      {
        pergunta: "Para que serve o cenário em uma peça de teatro?",
        opcoes: [
          "Para decorar a decoração do palco que representa o lugar da cena",
          "Para substituir os atores",
          "Para ser o único texto da peça",
          "Para vender ingressos",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! O cenário representa o lugar da cena.",
        feedbackErro: "Releia: 'o CENÁRIO, que é a decoração do palco que representa o lugar da cena'.",
        ondeEstaNoTexto: "a decoração do palco que representa o lugar da cena",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Fala ou rubrica?",
    instrucao: "Selecione apenas os trechos que são RUBRICAS (indicações cênicas).",
    jogo: {
      tipo: "selecionarItens",
      titulo: "O Camarim das Indicações",
      bloco: {
        instrucao: "Marque apenas os trechos que são rubricas, escritas entre parênteses.",
        pergunta: "Quais trechos abaixo são rubricas (indicações cênicas)?",
        opcoes: [
          { id: "a1", texto: "(O lobo esconde-se atrás da árvore.)", correto: true },
          { id: "a2", texto: "CHAPEUZINHO: Bom dia, senhor lobo!", correto: false },
          { id: "a3", texto: "(A vovó acorda assustada com o barulho.)", correto: true },
          { id: "a4", texto: "LOBO: Que cesta cheia de comida!", correto: false },
        ],
        feedbackAcerto: "🎉 Você identificou as rubricas, escritas entre parênteses!",
        feedbackErro: "Pense: a rubrica está entre parênteses e não tem o nome do personagem seguido de dois-pontos.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "O TEXTO TEATRAL é escrito para ser encenado por atores diante de uma plateia.",
      "As CENAS mostram a ação em um lugar e tempo; as FALAS trazem o texto de cada PERSONAGEM.",
      "As RUBRICAS, entre parênteses, orientam a atuação, mas não são ditas em voz alta.",
    ],
    miniDesafio: {
      pergunta: "Qual trecho abaixo é uma rubrica?",
      opcoes: [
        "LOBO: Que caminho você vai seguir?",
        "(O lobo se esconde atrás da árvore.)",
        "Cena 1 — A floresta",
        "CHAPEUZINHO: Vou visitar minha vovó.",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! A rubrica está entre parênteses e orienta a ação.",
      feedbackErro: "Releia a explicação: a rubrica é a indicação cênica entre parênteses.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o texto teatral?",
        opcoes: [
          "Um texto escrito para ser encenado por atores",
          "Um texto só para ser lido em silêncio",
          "Uma lista de compras",
          "Uma receita culinária",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Texto teatral é feito para ser encenado.",
        feedbackErro: "O texto teatral é escrito para ser representado por atores.",
      },
      {
        pergunta: "2/5 — O que é uma cena?",
        opcoes: [
          "O nome do autor da peça",
          "Parte da peça em que a ação acontece em um mesmo lugar e tempo",
          "A última fala da peça",
          "O ingresso do teatro",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Cena é a parte da peça com lugar e tempo definidos.",
        feedbackErro: "Cena é cada parte da peça em que a ação acontece em um lugar e tempo.",
      },
      {
        pergunta: "3/5 — Como se identifica a fala de um personagem?",
        opcoes: [
          "Com o nome do personagem entre parênteses",
          "Com o nome do personagem em maiúsculas seguido de dois-pontos",
          "Sem nenhuma marca",
          "Com um desenho do personagem",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O nome do personagem em maiúsculas e dois-pontos indica a fala.",
        feedbackErro: "A fala é marcada com o nome do personagem em maiúsculas, seguido de dois-pontos.",
      },
      {
        pergunta: "4/5 — O que é uma rubrica?",
        opcoes: [
          "A fala principal da peça",
          "Uma indicação cênica entre parênteses",
          "O título da peça",
          "O nome do teatro",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Rubrica é a indicação cênica entre parênteses.",
        feedbackErro: "Rubrica é a indicação cênica escrita entre parênteses.",
      },
      {
        pergunta: "5/5 — O figurino e o cenário servem para...",
        opcoes: [
          "Substituir o texto da peça",
          "Ajudar a plateia a entender o lugar e os personagens da história",
          "Vender ingressos",
          "Escrever as falas dos atores",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Palco conquistado! Figurino e cenário ajudam a mostrar a história.",
        feedbackErro: "Figurino e cenário ajudam a plateia a entender a história visualmente.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Escreva sua cena de teatro",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Com um adulto, escolha dois personagens e um lugar para uma cena curta (pode ser inventada ou baseada numa história conhecida).",
      "2) ESCREVA a cena com o nome do lugar, as falas de cada personagem (nome em maiúsculas + dois-pontos) e pelo menos 2 rubricas entre parênteses.",
      "3) Peça para alguém da família fazer o papel de um personagem, enquanto você faz o outro, e encenem a cena juntos!",
    ],
    registro: "📝 Uma foto da cena escrita, ou um vídeo/áudio da família encenando a cena.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
