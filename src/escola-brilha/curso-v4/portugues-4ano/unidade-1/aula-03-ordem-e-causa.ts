import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as rio } from "@/assets/neuro-treino/objetos/lago.png.asset.json";
import { url as fogo } from "@/assets/neuro-treino/objetos/fogo.png.asset.json";

/**
 * Aula 3 — Ordem e Causa
 * -------------------------------------------------------------
 * Foco pedagógico: relações de causa e consequência e conectivos
 * (porque, por isso, então) — entender como um fato leva a outro.
 *
 * BNCC: EF35LP03, EF35LP06, EF04LP11
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-ordem-e-causa",
  titulo: "Ordem e Causa",
  iconeTrilha: "⛓️",
  bncc: ["EF35LP06", "EF04LP11", "EF35LP03"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A corrente de acontecimentos",
    historia:
      "Brilha mostrou uma corrente de elos de metal presa à mochila. — Veja, cada elo está preso ao próximo. Nos textos é parecido: um fato geralmente PUXA outro. Choveu forte, POR ISSO o rio subiu. O rio subiu, PORQUE a chuva foi intensa. Aprender a enxergar essa corrente de causa e consequência é entender o texto de verdade, não só decorar frases soltas. Vamos seguir essa corrente hoje?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas do relato de hoje. O que uma coisa pode ter causado na outra?",
    bloco: {
      titulo: "A Ponte que Cedeu",
      capaImagemUrl: ponte,
      pistas: [
        { imagemUrl: chuva, nome: "Chuva forte durante dias" },
        { imagemUrl: rio, nome: "Rio cheio e turbulento" },
      ],
      recado: {
        rotulo: "Relatório da expedição",
        icone: "🌉",
        linhas: [
          "Choveu sem parar por cinco dias na região.",
          "O rio subiu quase dois metros.",
          "A ponte de madeira cedeu na manhã seguinte.",
        ],
        estilo: "papel",
      },
      pergunta: "Qual é a relação de causa e consequência mais provável entre esses fatos?",
      hipoteses: [
        { texto: "A chuva causou a subida do rio, que causou a queda da ponte" },
        { texto: "A ponte caiu primeiro e por isso começou a chover" },
        { texto: "Os três fatos não têm relação nenhuma entre si" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "⛓️ Isso mesmo! A chuva forte é a CAUSA que fez o rio subir; o rio cheio é a CAUSA que fez a ponte ceder. É uma corrente: cada fato é consequência do anterior e causa do seguinte.",
      feedbackErro:
        "Pense na ordem lógica: primeiro precisa chover para o rio subir, e o rio precisa subir muito para derrubar uma ponte. A chuva é a causa inicial de toda a corrente de fatos.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras que ligam os fatos de um texto como elos de uma corrente.",
    cards: [
      {
        palavra: "causa",
        explicacao: "É o motivo, o fato que faz outra coisa acontecer.",
        exemplo: "A chuva forte foi a causa da enchente.",
        imagemUrl: chuva,
      },
      {
        palavra: "consequência",
        explicacao: "É o resultado, o que acontece POR CAUSA de outro fato.",
        exemplo: "A ponte cair foi consequência do rio subir demais.",
        imagemUrl: ponte,
      },
      {
        palavra: "conectivo",
        explicacao:
          "É a palavra que liga causa e consequência num texto, como 'porque', 'por isso' e 'então'.",
        exemplo: "Choveu muito, por isso o rio transbordou.",
        imagemUrl: bussola,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia procurando os conectivos que ligam um fato ao outro: eles são os elos da corrente.",
    leitura: {
      titulo: "O Incêndio na Trilha Seca",
      imagemUrl: fogo,
      legendaImagem: "A fumaça vista de longe pela expedição",
      destacar: ["porque", "por isso", "então"],
      paragrafos: [
        "A trilha estava seca há semanas porque não chovia na região desde o início do mês. O mato, então, ficou fácil de pegar fogo com qualquer faísca.",
        "Um raio caiu sobre uma árvore isolada durante uma tempestade curta e sem chuva. Por isso, começou um pequeno incêndio que se espalhou rapidamente pelo mato seco.",
        "A equipe de exploradores avistou a fumaça de longe e, então, avisou os guardas florestais da região, que conseguiram controlar o fogo antes que ele alcançasse a floresta mais densa.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar a resposta.",
    perguntas: [
      {
        pergunta: "Por que a trilha estava seca?",
        opcoes: ["Porque não chovia desde o início do mês", "Porque fazia muito frio", "Porque ninguém cuidava dela"],
        correta: 0,
        feedbackAcerto: "⛓️ Isso! O texto explica: 'porque não chovia na região desde o início do mês'.",
        feedbackErro: "A explicação vem logo depois da palavra 'porque', no primeiro parágrafo.",
        ondeEstaNoTexto: "A trilha estava seca há semanas porque não chovia na região desde o início do mês.",
      },
      {
        pergunta: "O que causou o início do incêndio?",
        opcoes: ["Uma fogueira dos exploradores", "Um raio que caiu numa árvore isolada", "Um cigarro jogado no mato"],
        correta: 1,
        feedbackAcerto: "⛓️ Exato! 'Um raio caiu sobre uma árvore isolada... Por isso, começou um pequeno incêndio.'",
        feedbackErro: "Releia o segundo parágrafo — a causa do fogo aparece antes da expressão 'por isso'.",
        ondeEstaNoTexto: "Um raio caiu sobre uma árvore isolada… Por isso, começou um pequeno incêndio…",
      },
      {
        pergunta: "O que a equipe fez ao ver a fumaça?",
        opcoes: ["Foram embora com medo", "Avisaram os guardas florestais", "Tentaram apagar o fogo sozinhos"],
        correta: 1,
        feedbackAcerto: "⛓️ Isso! O texto diz que 'então, avisou os guardas florestais da região'.",
        feedbackErro: "A ação da equipe vem logo depois de 'e, então' no terceiro parágrafo.",
        ondeEstaNoTexto: "A equipe de exploradores avistou a fumaça de longe e, então, avisou os guardas florestais da região.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos reconstruir a corrente de causas e consequências desse relato.",
    perguntas: [
      {
        pergunta: "Qual é a corrente correta de causa e consequência nesse relato?",
        opcoes: [
          "Falta de chuva → mato seco → raio provoca incêndio → equipe avisa guardas",
          "Equipe avisa guardas → raio cai → mato fica seco → falta de chuva",
          "Não existe nenhuma relação de causa entre os fatos do texto",
        ],
        correta: 0,
        feedbackAcerto:
          "⛓️ Isso mesmo! Essa é a ordem lógica: a falta de chuva causou o mato seco, que facilitou o incêndio provocado pelo raio, e isso levou a equipe a avisar os guardas.",
        feedbackErro:
          "Pense na ordem natural dos fatos: primeiro falta a chuva, depois o mato fica seco, depois o raio provoca o fogo, e só então a equipe reage avisando os guardas.",
      },
      {
        pergunta: "Se não tivesse chovido tão pouco naquele mês, o que provavelmente teria sido diferente?",
        opcoes: [
          "Nada mudaria, o incêndio aconteceria do mesmo jeito",
          "O mato estaria mais úmido e o fogo teria menos chance de se espalhar",
          "A equipe não teria visitado a trilha",
        ],
        correta: 1,
        feedbackAcerto:
          "⛓️ Muito bem! Você entendeu a corrente de causa: sem a seca, o mato não pegaria fogo tão facilmente — é assim que uma causa muda toda a consequência seguinte.",
          
        feedbackErro:
          "O texto liga a seca ao mato fácil de pegar fogo. Se a causa (seca) fosse diferente, a consequência (fogo se espalhando rápido) também mudaria.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os elos dessa corrente de causa e consequência na ordem certa.",
    bloco: {
      instrucao: "Da causa mais distante até a consequência final.",
      itens: [
        { id: "p1", texto: "A região passa semanas sem chuva e o mato fica seco.", imagemUrl: chuva },
        { id: "p2", texto: "Um raio cai sobre uma árvore isolada e provoca um princípio de incêndio.", imagemUrl: fogo },
        { id: "p3", texto: "A equipe avista a fumaça e avisa os guardas florestais.", imagemUrl: mapa },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "⛓️ Perfeito! Você seguiu a corrente de causa e consequência do começo ao fim.",
      feedbackErro: "Pense: qual fato precisa acontecer primeiro para o seguinte ser possível? A seca vem antes do fogo, que vem antes do aviso.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo relato! Leia sozinho e identifique as causas e consequências escondidas nos conectivos.",
    leitura: {
      titulo: "A Ponte Improvisada",
      imagemUrl: ponte,
      destacar: ["porque", "por isso", "então"],
      paragrafos: [
        "A ponte original tinha caído na cheia do mês anterior, porque a correnteza havia arrancado suas bases de madeira já enfraquecidas pelo tempo.",
        "Sem ponte, a equipe não conseguia atravessar o rio para continuar a expedição. Por isso, decidiram construir uma ponte improvisada usando cordas e troncos encontrados na mata.",
        "A construção levou dois dias inteiros de trabalho. Então, finalmente, a equipe conseguiu atravessar e retomar o caminho até as ruínas.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que a ponte original tinha caído?",
        opcoes: [
          "Porque a correnteza arrancou suas bases já enfraquecidas",
          "Porque alguém a derrubou de propósito",
          "Porque era feita de metal enferrujado",
        ],
        correta: 0,
        feedbackAcerto: "⛓️ Isso! O texto explica claramente essa causa logo após a palavra 'porque'.",
        feedbackErro: "Releia o primeiro parágrafo — a explicação vem logo depois de 'porque'.",
        ondeEstaNoTexto: "…porque a correnteza havia arrancado suas bases de madeira já enfraquecidas pelo tempo.",
      },
      {
        pergunta: "Qual foi a consequência de a equipe não conseguir atravessar o rio?",
        opcoes: [
          "Eles desistiram da expedição",
          "Eles construíram uma ponte improvisada com cordas e troncos",
          "Eles nadaram até o outro lado",
        ],
        correta: 1,
        feedbackAcerto: "⛓️ Exato! 'Por isso, decidiram construir uma ponte improvisada usando cordas e troncos.'",
        feedbackErro: "A consequência aparece logo depois de 'Por isso' no segundo parágrafo.",
        ondeEstaNoTexto: "Por isso, decidiram construir uma ponte improvisada usando cordas e troncos encontrados na mata.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "CAUSA é o motivo de algo acontecer; CONSEQUÊNCIA é o resultado desse motivo.",
      "Conectivos como 'porque', 'por isso' e 'então' são elos que ligam causa e consequência num texto.",
      "Um fato pode ser consequência de um evento anterior e, ao mesmo tempo, causa do próximo — formando uma corrente.",
      "Para entender bem um texto, é importante identificar essa corrente de causas e consequências, não só os fatos soltos.",
    ],
    miniDesafio: {
      pergunta: "'O sol ficou muito forte durante dias, por isso o riacho secou.' Qual é a causa nessa frase?",
      opcoes: ["O riacho secar", "O sol forte durante dias", "Não há causa nessa frase"],
      correta: 1,
      feedbackAcerto: "⛓️ Isso! O sol forte é a causa; o riacho secar é a consequência, ligada pelo 'por isso'.",
      feedbackErro: "Pense: o que aconteceu PRIMEIRO e fez o riacho secar? O sol forte durante dias é a causa.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma 'causa' num texto?",
        opcoes: [
          "O resultado de um fato",
          "O motivo que faz outro fato acontecer",
          "Uma palavra sem sentido no texto",
        ],
        correta: 1,
        feedbackAcerto: "⛓️ Isso! A causa é o motivo por trás de um acontecimento.",
        feedbackErro: "A causa é o que FAZ algo acontecer — o motivo, não o resultado.",
      },
      {
        pergunta: "2/5 — Qual dessas palavras costuma ligar causa e consequência?",
        opcoes: ["Por isso", "Amanhã", "Também"],
        correta: 0,
        feedbackAcerto: "⛓️ Correto! 'Por isso' é um conectivo clássico de consequência.",
        feedbackErro: "'Por isso' liga um motivo ao seu resultado. As outras palavras não indicam causa e consequência.",
      },
      {
        pergunta: "3/5 — No relato do incêndio, qual foi a causa inicial de toda a corrente de fatos?",
        opcoes: ["A falta de chuva por semanas", "O aviso aos guardas florestais", "A fumaça vista de longe"],
        correta: 0,
        feedbackAcerto: "⛓️ Isso! A seca foi o primeiro elo que deu início à corrente de acontecimentos.",
        feedbackErro: "O aviso aos guardas e a fumaça são consequências mais tardias; a causa inicial foi a falta de chuva.",
      },
      {
        pergunta: "4/5 — Por que é útil identificar a corrente de causas e consequências num texto?",
        opcoes: [
          "Para decorar o texto palavra por palavra",
          "Para entender por que os fatos aconteceram na ordem em que aconteceram",
          "Não serve para nada na leitura",
        ],
        correta: 1,
        feedbackAcerto: "⛓️ Exatamente! Isso ajuda a entender a lógica interna do texto, não só os fatos soltos.",
        feedbackErro: "Entender causa e consequência ajuda a explicar POR QUE os fatos aconteceram naquela ordem.",
      },
      {
        pergunta: "5/5 — Na ponte improvisada, o que motivou a equipe a construir uma nova ponte?",
        opcoes: [
          "A ponte original havia caído e eles precisavam atravessar o rio",
          "Eles queriam apenas se divertir construindo",
          "Um guarda florestal pediu para eles construírem",
        ],
        correta: 0,
        feedbackAcerto: "⛓️ Isso! Você já enxerga as correntes de causa e consequência como um verdadeiro explorador de textos! 🌟",
        feedbackErro: "A ponte original caiu e, sem ela, não dava para atravessar — essa foi a causa da construção da nova ponte.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: a corrente de causas do dia",
    materiais: ["Papel e lápis"],
    passos: [
      "1) No fim do dia, a criança escolhe 3 acontecimentos que viveu (ex.: 'chegou atrasado', 'esqueceu o guarda-chuva', 'ficou molhado').",
      "2) Junto com um adulto, ela liga esses fatos usando 'porque', 'por isso' ou 'então', montando uma corrente de causa e consequência.",
      "3) Desenhem ou escrevam essa corrente como elos ligados.",
      "4) Conversem: qual foi a causa mais distante da corrente do dia?",
    ],
    registro: "🗣️ Registre por escrito ou em áudio a corrente montada, usando os conectivos 'porque', 'por isso' e 'então'.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
