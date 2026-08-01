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
      dica: "🧭 Pista de explorador: lembre o que significa “causa” — é o motivo, o fato que faz outra coisa acontecer. Use essa ideia para eliminar as alternativas que não combinam.",
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

  momento_ensinoVisual: {
    titulo: "Montando a corrente de causa e consequência",
    instrucao: "Observe cada elo da corrente: qual fato é a CAUSA e qual é a CONSEQUÊNCIA.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Causa e consequência: a corrente dos fatos",
        explicacao:
          "A causa é o motivo, o fato que faz outra coisa acontecer. A consequência é o resultado, o que acontece POR CAUSA da causa. Muitos textos formam uma corrente: um fato é consequência do fato anterior e causa do fato seguinte. Palavras como 'porque', 'por isso' e 'então' são os elos que ligam causa e consequência.",
        exemplos: [
          {
            palavra: "Choveu muito, por isso o rio transbordou.",
            destaque: "por isso",
            motivo: "'Choveu muito' é a causa; 'o rio transbordou' é a consequência.",
          },
          {
            palavra: "A ponte cedeu porque o rio estava muito cheio.",
            destaque: "porque",
            motivo: "'Porque' liga o efeito (ponte cedeu) à sua causa (rio cheio).",
          },
          {
            palavra: "O menino não estudou, então foi mal na prova.",
            destaque: "então",
            motivo: "'Então' introduz a consequência de não ter estudado.",
          },
        ],
        desafios: [
          {
            molde: "'A estrada ficou escorregadia _ tinha chovido a noite toda.'",
            opcoes: ["porque", "mas", "apesar de"],
            correta: 0,
            frase: "A estrada ficou escorregadia porque tinha chovido a noite toda.",
            feedbackErro:
              "O conectivo precisa introduzir a CAUSA (a chuva); 'porque' faz esse papel.",
          },
          {
            molde: "'O time treinou muito a semana toda, _ venceu o campeonato.'",
            opcoes: ["por isso", "porque", "quando"],
            correta: 0,
            frase: "O time treinou muito a semana toda, por isso venceu o campeonato.",
            feedbackErro:
              "Aqui a causa (treinar muito) já foi dita antes; 'por isso' introduz a consequência.",
          },
          {
            molde: "'Aponte a CAUSA da frase: A luz apagou porque a energia da rua faltou.' _",
            opcoes: ["A energia da rua faltou", "A luz apagou", "Não há causa nessa frase"],
            correta: 0,
            frase: "A luz apagou porque a energia da rua faltou.",
            feedbackErro: "O que vem depois de 'porque' é sempre a causa: a falta de energia.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "Conectivos: os elos que ligam causa e efeito",
        explicacao:
          "Conectivos são palavras que ligam ideias dentro de um texto. Nos textos de causa e consequência, os mais comuns são: PORQUE (explica a causa, geralmente depois da consequência), POR ISSO e ENTÃO (introduzem a consequência, depois de a causa já ter sido dita). Escolher o conectivo certo ajuda o leitor a entender qual fato aconteceu primeiro e qual foi o resultado.",
        exemplos: [
          {
            palavra: "Ficou tarde, então acendemos as lanternas.",
            destaque: "então",
            motivo: "A consequência (acender lanternas) vem depois da causa (ficar tarde).",
          },
          {
            palavra: "Acendemos as lanternas porque ficou tarde.",
            destaque: "porque",
            motivo: "Aqui a ordem inverte: consequência primeiro, causa depois de 'porque'.",
          },
          {
            palavra: "Estava com muita sede, por isso bebeu água rapidamente.",
            destaque: "por isso",
            motivo: "'Por isso' também introduz a consequência, como 'então'.",
          },
        ],
        desafios: [
          {
            molde: "'O fogo se espalhou rápido _ o mato estava muito seco.'",
            opcoes: ["porque", "por isso", "mas"],
            correta: 0,
            frase: "O fogo se espalhou rápido porque o mato estava muito seco.",
            feedbackErro: "A causa (mato seco) vem depois; use 'porque' para introduzi-la.",
          },
          {
            molde: "'O mato estava muito seco, _ o fogo se espalhou rápido.'",
            opcoes: ["por isso", "porque", "quando"],
            correta: 0,
            frase: "O mato estava muito seco, por isso o fogo se espalhou rápido.",
            feedbackErro: "Aqui a causa já foi dita primeiro; 'por isso' introduz a consequência.",
          },
          {
            molde: "'Não tinha comido nada de manhã, _ sentiu fraqueza no meio da trilha.'",
            opcoes: ["então", "porque", "apesar de"],
            correta: 0,
            frase: "Não tinha comido nada de manhã, então sentiu fraqueza no meio da trilha.",
            feedbackErro:
              "A causa (não comer) veio primeiro; 'então' liga à consequência (fraqueza).",
          },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao:
      "Leia procurando os conectivos que ligam um fato ao outro: eles são os elos da corrente.",
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
        opcoes: [
          "Porque não chovia desde o início do mês",
          "Porque fazia muito frio",
          "Porque ninguém cuidava dela",
        ],
        correta: 0,
        feedbackAcerto:
          "⛓️ Isso! O texto explica: 'porque não chovia na região desde o início do mês'.",
        feedbackErro: "A explicação vem logo depois da palavra 'porque', no primeiro parágrafo.",
        ondeEstaNoTexto:
          "A trilha estava seca há semanas porque não chovia na região desde o início do mês.",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “A trilha estava seca há semanas porque não chovia na região desde o início do mês”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque não chovia desde o início do mês”. O texto explica: 'porque não chovia na região desde o início do mês'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que causou o início do incêndio?",
        opcoes: [
          "Uma fogueira dos exploradores",
          "Um raio que caiu numa árvore isolada",
          "Um cigarro jogado no mato",
        ],
        correta: 1,
        feedbackAcerto:
          "⛓️ Exato! 'Um raio caiu sobre uma árvore isolada... Por isso, começou um pequeno incêndio.'",
        feedbackErro:
          "Releia o segundo parágrafo — a causa do fogo aparece antes da expressão 'por isso'.",
        ondeEstaNoTexto:
          "Um raio caiu sobre uma árvore isolada… Por isso, começou um pequeno incêndio…",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Um raio caiu sobre uma árvore isolada… Por isso, começou um pequeno incêndio”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um raio que caiu numa árvore isolada”. 'Um raio caiu sobre uma árvore isolada... Por isso, começou um pequeno incêndio.'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que a equipe fez ao ver a fumaça?",
        opcoes: [
          "Foram embora com medo",
          "Avisaram os guardas florestais",
          "Tentaram apagar o fogo sozinhos",
        ],
        correta: 1,
        feedbackAcerto: "⛓️ Isso! O texto diz que 'então, avisou os guardas florestais da região'.",
        feedbackErro: "A ação da equipe vem logo depois de 'e, então' no terceiro parágrafo.",
        ondeEstaNoTexto:
          "A equipe de exploradores avistou a fumaça de longe e, então, avisou os guardas florestais da região.",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “A equipe de exploradores avistou a fumaça de longe e, então, avisou os guardas florestais da região”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Avisaram os guardas florestais”. O texto diz que 'então, avisou os guardas florestais da região'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
        dica: "🧭 Pista de explorador: lembre o que significa “causa” — é o motivo, o fato que faz outra coisa acontecer. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Falta de chuva → mato seco → raio provoca incêndio → equipe avisa guardas”. Essa é a ordem lógica: a falta de chuva causou o mato seco, que facilitou o incêndio provocado pelo raio, e isso levou a equipe a avisar os guardas. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta:
          "Se não tivesse chovido tão pouco naquele mês, o que provavelmente teria sido diferente?",
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
        dica: "🧭 Pista de explorador: lembre o que significa “causa” — é o motivo, o fato que faz outra coisa acontecer. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O mato estaria mais úmido e o fogo teria menos chance de se espalhar”. Muito bem! Você entendeu a corrente de causa: sem a seca, o mato não pegaria fogo tão facilmente — é assim que uma causa muda toda a consequência seguinte. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os elos dessa corrente de causa e consequência na ordem certa.",
    bloco: {
      instrucao: "Da causa mais distante até a consequência final.",
      itens: [
        {
          id: "p1",
          texto: "A região passa semanas sem chuva e o mato fica seco.",
          imagemUrl: chuva,
        },
        {
          id: "p2",
          texto: "Um raio cai sobre uma árvore isolada e provoca um princípio de incêndio.",
          imagemUrl: fogo,
        },
        {
          id: "p3",
          texto: "A equipe avista a fumaça e avisa os guardas florestais.",
          imagemUrl: mapa,
        },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto:
        "⛓️ Perfeito! Você seguiu a corrente de causa e consequência do começo ao fim.",
      feedbackErro:
        "Pense: qual fato precisa acontecer primeiro para o seguinte ser possível? A seca vem antes do fogo, que vem antes do aviso.",
      dica: "🧭 Pista de explorador: lembre o que significa “causa” — é o motivo, o fato que faz outra coisa acontecer. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao:
      "Novo relato! Leia sozinho e identifique as causas e consequências escondidas nos conectivos.",
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
        feedbackAcerto:
          "⛓️ Isso! O texto explica claramente essa causa logo após a palavra 'porque'.",
        feedbackErro: "Releia o primeiro parágrafo — a explicação vem logo depois de 'porque'.",
        ondeEstaNoTexto:
          "…porque a correnteza havia arrancado suas bases de madeira já enfraquecidas pelo tempo.",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “porque a correnteza havia arrancado suas bases de madeira já enfraquecidas pelo tempo”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque a correnteza arrancou suas bases já enfraquecidas”. O texto explica claramente essa causa logo após a palavra 'porque'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual foi a consequência de a equipe não conseguir atravessar o rio?",
        opcoes: [
          "Eles desistiram da expedição",
          "Eles construíram uma ponte improvisada com cordas e troncos",
          "Eles nadaram até o outro lado",
        ],
        correta: 1,
        feedbackAcerto:
          "⛓️ Exato! 'Por isso, decidiram construir uma ponte improvisada usando cordas e troncos.'",
        feedbackErro: "A consequência aparece logo depois de 'Por isso' no segundo parágrafo.",
        ondeEstaNoTexto:
          "Por isso, decidiram construir uma ponte improvisada usando cordas e troncos encontrados na mata.",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Por isso, decidiram construir uma ponte improvisada usando cordas e troncos encontrados na mata”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Eles construíram uma ponte improvisada com cordas e troncos”. 'Por isso, decidiram construir uma ponte improvisada usando cordas e troncos.'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final (Fase 3 · 4º ano)
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Diário de Bordo do Explorador",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Escreva a corrente de causas",
        comando:
          "Conte, em um parágrafo, algo que aconteceu com você e explique a CORRENTE: o que aconteceu primeiro, o que isso causou e qual foi a consequência final. Use conectivos como porque, então, por isso.",
        linhas: 5,
        modelo: [
          "Na terça choveu forte a manhã inteira.",
          "Por isso, o recreio aconteceu dentro da sala.",
          "Como ninguém pôde correr no pátio, a professora inventou um campeonato de adivinhas.",
          "No fim, todo mundo saiu rindo — a chuva acabou virando a melhor aula da semana.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Não repeti a mesma palavra várias vezes: troquei por pronome ou sinônimo.",
          "Usei pelo menos um conectivo (porque, então, mas, além disso) ligando as ideias.",
          "Li em voz alta e consertei o que ficou estranho.",
          "Meu texto mostra CAUSA e CONSEQUÊNCIA, não só uma lista de fatos.",
          "Usei conectivos de causa (porque, por isso, então).",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (Fase 4 · 4º ano · ~110 ppm)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: O Dia em que o Rio Subiu",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula, ponto e travessão. A meta não é correr: é ler como quem conta.",
    texto: [
      "Choveu sem parar durante três dias, e o rio que corta a cidade foi subindo devagar, centímetro por centímetro.",
      "Como o bueiro da rua estava entupido de folhas, a água não teve para onde escorrer e invadiu as calçadas.",
      "Depois disso, os moradores se organizaram em mutirão: limparam os bueiros, plantaram árvores na margem e combinaram um aviso por mensagem sempre que o nível começasse a subir de novo.",
    ],
    metaSegundos: 38,
  },

  momento09_revisao: {
    pontos: [
      "CAUSA é o motivo de algo acontecer; CONSEQUÊNCIA é o resultado desse motivo.",
      "Conectivos como 'porque', 'por isso' e 'então' são elos que ligam causa e consequência num texto.",
      "Um fato pode ser consequência de um evento anterior e, ao mesmo tempo, causa do próximo — formando uma corrente.",
      "Para entender bem um texto, é importante identificar essa corrente de causas e consequências, não só os fatos soltos.",
    ],
    miniDesafio: {
      pergunta:
        "'O sol ficou muito forte durante dias, por isso o riacho secou.' Qual é a causa nessa frase?",
      opcoes: ["O riacho secar", "O sol forte durante dias", "Não há causa nessa frase"],
      correta: 1,
      feedbackAcerto:
        "⛓️ Isso! O sol forte é a causa; o riacho secar é a consequência, ligada pelo 'por isso'.",
      feedbackErro:
        "Pense: o que aconteceu PRIMEIRO e fez o riacho secar? O sol forte durante dias é a causa.",
      dica: "🧭 Pista de explorador: lembre o que significa “causa” — é o motivo, o fato que faz outra coisa acontecer. Use essa ideia para eliminar as alternativas que não combinam.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “O sol forte durante dias”. O sol forte é a causa; o riacho secar é a consequência, ligada pelo 'por isso'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
          "Porque fazia muito frio",
        ],
        correta: 1,
        feedbackAcerto: "⛓️ Isso! A causa é o motivo por trás de um acontecimento.",
        feedbackErro: "A causa é o que FAZ algo acontecer — o motivo, não o resultado.",
        feedbackOpcoes: [
          "❌ “O resultado de um fato” não é a resposta. A causa é o que FAZ algo acontecer — o motivo, não o resultado.",
          null,
          "❌ “Uma palavra sem sentido no texto” não é a resposta. A causa é o que FAZ algo acontecer — o motivo, não o resultado.",
          "❌ “Porque fazia muito frio” não é a resposta. A causa é o que FAZ algo acontecer — o motivo, não o resultado.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “causa” — é o motivo, o fato que faz outra coisa acontecer. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O motivo que faz outro fato acontecer”. A causa é o motivo por trás de um acontecimento. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — Qual dessas palavras costuma ligar causa e consequência?",
        opcoes: ["Por isso", "Amanhã", "Também", "Porque ninguém cuidava dela"],
        correta: 0,
        feedbackAcerto: "⛓️ Correto! 'Por isso' é um conectivo clássico de consequência.",
        feedbackErro:
          "'Por isso' liga um motivo ao seu resultado. As outras palavras não indicam causa e consequência.",
        feedbackOpcoes: [
          null,
          "❌ “Amanhã” não é a resposta. 'Por isso' liga um motivo ao seu resultado. As outras palavras não indicam causa e consequência.",
          "❌ “Também” não é a resposta. 'Por isso' liga um motivo ao seu resultado. As outras palavras não indicam causa e consequência.",
          "❌ “Porque ninguém cuidava dela” não é a resposta. 'Por isso' liga um motivo ao seu resultado. As outras palavras não indicam causa e consequência.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “causa” — é o motivo, o fato que faz outra coisa acontecer. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Por isso”. 'Por isso' é um conectivo clássico de consequência. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta:
          "3/5 — No relato do incêndio, qual foi a causa inicial de toda a corrente de fatos?",
        opcoes: [
          "A falta de chuva por semanas",
          "O aviso aos guardas florestais",
          "A fumaça vista de longe",
          "Uma fogueira dos exploradores",
        ],
        correta: 0,
        feedbackAcerto:
          "⛓️ Isso! A seca foi o primeiro elo que deu início à corrente de acontecimentos.",
        feedbackErro:
          "O aviso aos guardas e a fumaça são consequências mais tardias; a causa inicial foi a falta de chuva.",
        feedbackOpcoes: [
          null,
          "❌ “O aviso aos guardas florestais” não é a resposta. O aviso aos guardas e a fumaça são consequências mais tardias; a causa inicial foi a falta de chuva.",
          "❌ “A fumaça vista de longe” não é a resposta. O aviso aos guardas e a fumaça são consequências mais tardias; a causa inicial foi a falta de chuva.",
          "❌ “Uma fogueira dos exploradores” não é a resposta. O aviso aos guardas e a fumaça são consequências mais tardias; a causa inicial foi a falta de chuva.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “causa” — é o motivo, o fato que faz outra coisa acontecer. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A falta de chuva por semanas”. A seca foi o primeiro elo que deu início à corrente de acontecimentos. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta:
          "4/5 — Por que é útil identificar a corrente de causas e consequências num texto?",
        opcoes: [
          "Para decorar o texto palavra por palavra",
          "Para entender por que os fatos aconteceram na ordem em que aconteceram",
          "Não serve para nada na leitura",
          "Um cigarro jogado no mato",
        ],
        correta: 1,
        feedbackAcerto:
          "⛓️ Exatamente! Isso ajuda a entender a lógica interna do texto, não só os fatos soltos.",
        feedbackErro:
          "Entender causa e consequência ajuda a explicar POR QUE os fatos aconteceram naquela ordem.",
        feedbackOpcoes: [
          "❌ “Para decorar o texto palavra por palavra” não é a resposta. Entender causa e consequência ajuda a explicar POR QUE os fatos aconteceram naquela ordem.",
          null,
          "❌ “Não serve para nada na leitura” não é a resposta. Entender causa e consequência ajuda a explicar POR QUE os fatos aconteceram naquela ordem.",
          "❌ “Um cigarro jogado no mato” não é a resposta. Entender causa e consequência ajuda a explicar POR QUE os fatos aconteceram naquela ordem.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “causa” — é o motivo, o fato que faz outra coisa acontecer. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Para entender por que os fatos aconteceram na ordem em que aconteceram”. Isso ajuda a entender a lógica interna do texto, não só os fatos soltos. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "5/5 — Na ponte improvisada, o que motivou a equipe a construir uma nova ponte?",
        opcoes: [
          "A ponte original havia caído e eles precisavam atravessar o rio",
          "Eles queriam apenas se divertir construindo",
          "Um guarda florestal pediu para eles construírem",
          "Foram embora com medo",
        ],
        correta: 0,
        feedbackAcerto:
          "⛓️ Isso! Você já enxerga as correntes de causa e consequência como um verdadeiro explorador de textos! 🌟",
        feedbackErro:
          "A ponte original caiu e, sem ela, não dava para atravessar — essa foi a causa da construção da nova ponte.",
        feedbackOpcoes: [
          null,
          "❌ “Eles queriam apenas se divertir construindo” não é a resposta. A ponte original caiu e, sem ela, não dava para atravessar — essa foi a causa da construção da nova ponte.",
          "❌ “Um guarda florestal pediu para eles construírem” não é a resposta. A ponte original caiu e, sem ela, não dava para atravessar — essa foi a causa da construção da nova ponte.",
          "❌ “Foram embora com medo” não é a resposta. A ponte original caiu e, sem ela, não dava para atravessar — essa foi a causa da construção da nova ponte.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “causa” — é o motivo, o fato que faz outra coisa acontecer. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A ponte original havia caído e eles precisavam atravessar o rio”. Você já enxerga as correntes de causa e consequência como um verdadeiro explorador de textos! 🌟. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
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
    registro:
      "🗣️ Registre por escrito ou em áudio a corrente montada, usando os conectivos 'porque', 'por isso' e 'então'.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
