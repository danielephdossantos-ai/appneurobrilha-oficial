import type { AulaPortuguesV4 } from "../../types";
import { url as bau } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as mascaraAfricana } from "@/assets/neuro-treino/objetos/mascara-africana.png.asset.json";
import { url as mascaraIndigena } from "@/assets/neuro-treino/objetos/mascara-indigena.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";

/**
 * Aula 3 — Texto teatral
 * -------------------------------------------------------------
 * Os Exploradores encontram duas máscaras num baú de teatro e
 * aprendem a estrutura do texto dramático: cena, rubrica, personagem
 * e diálogo, lendo uma cena autoral: "O Acampamento Perdido".
 *
 * BNCC: EF35LP31 (leitura de textos dramáticos), EF15LP13.
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-texto-teatral",
  titulo: "Texto teatral",
  iconeTrilha: "🎭",
  bncc: ["EF35LP31", "EF15LP13"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "As duas máscaras do baú de teatro",
    historia:
      "Debaixo de uma lona velha, os Exploradores acharam um baú de teatro com duas máscaras e um caderno de falas marcadas com nomes e instruções entre parênteses. — Isso é um TEXTO TEATRAL! — disse Aurora. — Ele não é contado por um narrador: os personagens falam direto, e instruções escondidas dizem como agir e onde estar. Vamos ler essa cena e descobrir como um texto vira teatro?",
    imagemUrl: bau,
  },

  momento02_previsao: {
    instrucao:
      "O caderno tem uma capa com duas máscaras e o título de uma cena. Antes de ler, imagine sobre o que ela vai tratar.",
    bloco: {
      titulo: "O Acampamento Perdido",
      capaImagemUrl: mascaraAfricana,
      pistas: [
        { imagemUrl: mascaraIndigena, nome: "Uma segunda máscara" },
        { imagemUrl: criancasGrupo, nome: "Um grupo de exploradores" },
      ],
      pergunta: "Sobre o que essa cena de teatro provavelmente vai tratar?",
      hipoteses: [
        { texto: "Um grupo de exploradores discutindo um plano depois de se perderem.", imagemUrl: criancasGrupo },
        { texto: "Uma receita de bolo de aniversário.", imagemUrl: papel },
        { texto: "Uma lista de números da tabuada.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔍 Isso! O título 'O Acampamento Perdido' e as máscaras de personagens são pista de uma cena com um grupo discutindo um problema.",
      feedbackErro:
        "Releia o título: 'Perdido' é pista de um problema a resolver, e as máscaras mostram que é um texto com personagens falando entre si.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Quatro palavras-chave do texto teatral.",
    cards: [
      {
        palavra: "cena",
        explicacao: "É uma parte da peça de teatro, geralmente marcada por uma mudança de lugar, tempo ou personagens em cena.",
        exemplo: "'Cena 1 — Dentro da tenda, ao entardecer.'",
        imagemUrl: bau,
      },
      {
        palavra: "rubrica",
        explicacao: "É a instrução escrita ENTRE PARÊNTESES (ou em itálico) que diz como o personagem age, se move ou sente — não é fala.",
        exemplo: "'ZECA: (olhando o mapa, preocupado) Estamos perdidos.'",
        imagemUrl: papel,
      },
      {
        palavra: "personagem",
        explicacao: "É quem vive a história dentro da peça. No texto teatral, o nome do personagem vem antes de cada fala, geralmente em letra maiúscula.",
        exemplo: "'AURORA: Calma, eu tenho uma ideia.'",
        imagemUrl: criancasGrupo,
      },
      {
        palavra: "diálogo",
        explicacao: "É a conversa entre os personagens — no teatro, quase todo o texto é feito de diálogo, sem narrador contando por fora.",
        exemplo: "As falas de ZECA e AURORA, uma respondendo a outra, formam o diálogo da cena.",
        imagemUrl: livro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia a cena em voz alta, com um colega ou familiar fazendo cada personagem. Preste atenção nas rubricas entre parênteses.",
    leitura: {
      titulo: "O Acampamento Perdido — Cena 1",
      imagemUrl: mascaraAfricana,
      legendaImagem: "Dentro da tenda, ao entardecer",
      destacar: ["ZECA", "AURORA", "(olhando o mapa, preocupado)", "(sorrindo)"],
      paragrafos: [
        "CENA 1 — Dentro da tenda, ao entardecer. ZECA está sentado no chão, com um mapa amassado nas mãos.",
        "ZECA: (olhando o mapa, preocupado) Isso não bate com nada... acho que estamos perdidos.",
        "AURORA: (entrando na tenda, sorrindo) Calma, Zeca! Eu marquei o caminho com pedrinhas quando saímos da fonte.",
        "ZECA: (aliviado) Sério? Por que você não contou antes?",
        "AURORA: (rindo) Porque eu queria ver sua cara de explorador perdido! Agora vamos, antes que escureça.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte na cena sempre que precisar.",
    perguntas: [
      {
        pergunta: "Onde e quando acontece a Cena 1?",
        opcoes: ["Na cidade, de manhã", "Dentro da tenda, ao entardecer", "No rio, à noite"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! A indicação de cena diz: 'Dentro da tenda, ao entardecer'.",
        feedbackErro: "Releia a primeira linha da cena — ela indica o lugar e o momento do dia.",
        ondeEstaNoTexto: "CENA 1 — Dentro da tenda, ao entardecer.",
      },
      {
        pergunta: "O que a rubrica '(olhando o mapa, preocupado)' indica sobre Zeca?",
        opcoes: ["Como ele deve agir e se sentir ao falar", "O que ele vai comer depois", "Quantos anos ele tem"],
        correta: 0,
        feedbackAcerto: "🔍 Boa! Rubricas indicam gesto e emoção do personagem — aqui, Zeca está preocupado, olhando o mapa.",
        feedbackErro: "Rubrica é instrução de cena: ela diz COMO o personagem age ou se sente, não é fala dele.",
        ondeEstaNoTexto: "ZECA: (olhando o mapa, preocupado)",
      },
      {
        pergunta: "Por que Aurora não estava preocupada como Zeca?",
        opcoes: ["Porque ela marcou o caminho com pedrinhas", "Porque ela tinha um mapa novo", "Porque ela não sabia que estavam perdidos"],
        correta: 0,
        feedbackAcerto: "🔍 Exato! 'Eu marquei o caminho com pedrinhas quando saímos da fonte.'",
        feedbackErro: "Releia a fala de Aurora — ela explica o motivo de estar tranquila.",
        ondeEstaNoTexto: "Eu marquei o caminho com pedrinhas quando saímos da fonte.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos investigar a estrutura da cena de teatro.",
    perguntas: [
      {
        pergunta: "Quantos personagens falam nessa cena?",
        opcoes: ["Um", "Dois", "Quatro"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Apenas Zeca e Aurora falam — dois personagens.",
        feedbackErro: "Conte os nomes que aparecem antes de cada fala: apenas dois nomes diferentes.",
      },
      {
        pergunta: "O que diferencia o texto teatral de um conto contado por narrador?",
        opcoes: [
          "No teatro, os personagens falam direto, sem narrador contando por fora, e as rubricas guiam a ação",
          "O texto teatral não tem personagens",
          "O texto teatral é sempre em forma de poema com rima",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! No teatro, quem 'conta' é a própria fala dos personagens, apoiada pelas rubricas — não existe narrador contando por fora.",
        feedbackErro: "Pense: no conto, um narrador conta o que acontece; no teatro, os PRÓPRIOS personagens falam, e as rubricas orientam gestos.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para ler uma cena de teatro em voz alta com um grupo.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Ler a cena silenciosamente e escolher quem faz cada personagem.", imagemUrl: livro },
        { id: "p2", texto: "Ler as rubricas para entender como cada personagem deve agir.", imagemUrl: papel },
        { id: "p3", texto: "Encenar o diálogo em voz alta, seguindo as rubricas combinadas.", imagemUrl: professora },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Isso mesmo! Primeiro escolhemos os papéis, depois entendemos as rubricas, e só então encenamos.",
      feedbackErro: "Pense na ordem: primeiro escolher papéis, depois entender as instruções de cena (rubricas), e só então encenar.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Nova cena — leia sozinho e responda.",
    leitura: {
      titulo: "O Acampamento Perdido — Cena 2",
      imagemUrl: mascaraIndigena,
      destacar: ["MIRA", "ZECA", "(apontando para o céu)", "(gritando de alegria)"],
      paragrafos: [
        "CENA 2 — Na trilha, sob as primeiras estrelas. MIRA caminha na frente, ZECA e AURORA seguem logo atrás.",
        "MIRA: (apontando para o céu) Vejam! Aquela estrela mais brilhante sempre aparece perto do acampamento base.",
        "ZECA: (gritando de alegria) Então é só seguir ela! Vamos conseguir chegar antes da chuva!",
        "MIRA: (rindo) Isso mesmo, explorador. A natureza também é um mapa, se a gente souber ler.",
      ],
    },
    perguntas: [
      {
        pergunta: "Onde acontece a Cena 2?",
        opcoes: ["Dentro da tenda", "Na trilha, sob as primeiras estrelas", "Na cidade"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! 'Na trilha, sob as primeiras estrelas.'",
        feedbackErro: "Releia a primeira linha da cena — ela indica onde e quando a cena acontece.",
        ondeEstaNoTexto: "CENA 2 — Na trilha, sob as primeiras estrelas.",
      },
      {
        pergunta: "Como Mira ajuda o grupo a se orientar?",
        opcoes: ["Usando uma estrela como referência no céu", "Usando um celular", "Perguntando a um morador"],
        correta: 0,
        feedbackAcerto: "🔍 Boa! Mira aponta a estrela mais brilhante perto do acampamento base.",
        feedbackErro: "Releia a fala de Mira — ela indica algo no céu para se orientar.",
        ondeEstaNoTexto: "Vejam! Aquela estrela mais brilhante sempre aparece perto do acampamento base.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "CENA é uma parte da peça, marcada por lugar, tempo ou personagens presentes.",
      "RUBRICA é a instrução entre parênteses que orienta gesto, movimento ou emoção — não é fala.",
      "PERSONAGEM tem seu nome escrito antes de cada fala, geralmente em maiúsculas.",
      "DIÁLOGO é a conversa entre personagens — no teatro, ele substitui o narrador do conto.",
    ],
    miniDesafio: {
      pergunta: "'(assustado, olhando para trás)' é um exemplo de...",
      opcoes: ["Fala de personagem", "Rubrica", "Título de cena"],
      correta: 1,
      feedbackAcerto: "🔍 Isso! Instruções entre parênteses são rubricas, não falas.",
      feedbackErro: "O que vem entre parênteses e indica gesto ou emoção é RUBRICA, não a fala do personagem.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma rubrica no texto teatral?",
        opcoes: ["A fala principal da peça", "A instrução de gesto ou emoção entre parênteses", "O nome da peça"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Rubrica orienta a atuação, não é fala.",
        feedbackErro: "Rubrica é a instrução ENTRE PARÊNTESES que diz como agir — não é o que o personagem fala.",
      },
      {
        pergunta: "2/5 — Como sabemos quem está falando no texto teatral?",
        opcoes: ["Pelo nome do personagem escrito antes da fala", "Pela cor da letra", "Não é possível saber"],
        correta: 0,
        feedbackAcerto: "🔍 Correto! O nome do personagem vem antes de cada fala.",
        feedbackErro: "No texto teatral, o NOME do personagem aparece antes de cada fala dele.",
      },
      {
        pergunta: "3/5 — O que geralmente indica o início de uma nova cena?",
        opcoes: ["Mudança de lugar, tempo ou personagens presentes", "Uma nova capa de livro", "O fim da peça"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Cena nova costuma indicar mudança de lugar, tempo ou quem está presente.",
        feedbackErro: "Uma nova cena aparece quando muda o lugar, o tempo, ou os personagens envolvidos.",
      },
      {
        pergunta: "4/5 — Qual a principal diferença entre teatro e conto?",
        opcoes: [
          "No teatro os personagens falam direto, sem narrador contando por fora",
          "O teatro não tem personagens",
          "O conto só pode ser lido em voz alta",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! No teatro, a história avança pelas falas e rubricas dos próprios personagens.",
        feedbackErro: "No teatro não existe narrador contando por fora — quem 'conta' é o diálogo dos personagens.",
      },
      {
        pergunta: "5/5 — Em 'O Acampamento Perdido', o que ajudou o grupo a não se perder de vez?",
        opcoes: [
          "As pedrinhas marcadas por Aurora e a estrela apontada por Mira",
          "Um mapa comprado na cidade",
          "Um aplicativo de celular",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Observação e planejamento dos próprios exploradores resolveram o problema. Cena decifrada! 🌟",
        feedbackErro: "Releia as duas cenas: foram as pedrinhas de Aurora e a estrela apontada por Mira que ajudaram o grupo.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: encenando em casa",
    materiais: ["O texto da cena 'O Acampamento Perdido'", "Objetos da casa para fazer de cenário (opcional)"],
    passos: [
      "1) Escolham quem faz cada personagem: Zeca, Aurora e Mira.",
      "2) Leiam as rubricas juntos antes de começar, combinando os gestos.",
      "3) Encenem as duas cenas em voz alta, com entonação para cada emoção indicada.",
      "4) Conversem: o que mudaria se vocês criassem uma Cena 3?",
    ],
    registro: "🗣️ Registrem em áudio ou vídeo a encenação da família.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
