import type { AulaPortuguesV4 } from "../../types";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as raposa } from "@/assets/neuro-treino/objetos/raposa.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as heroi } from "@/assets/neuro-treino/objetos/heroi.png.asset.json";
import { url as quadroSurpreso } from "@/assets/neuro-treino/objetos/quadro-surpreso.png.asset.json";

/**
 * Aula 2 — Adjetivo: a característica que denuncia
 * -------------------------------------------------------------
 * Segunda missão da Unidade 3. O Clube dos Detetives descobre que,
 * pra identificar um suspeito entre vários, não basta o nome —
 * é preciso descrever CARACTERÍSTICAS: cor, tamanho, jeito de ser.
 *
 * Foco pedagógico:
 *  - Reconhecer adjetivo como a palavra que qualifica o substantivo.
 *  - Perceber como a troca de um adjetivo muda a informação da frase.
 *  - Usar adjetivos com precisão para descrever pessoas/objetos.
 *
 * BNCC: EF03LP07 (classes de palavras em uso), EF03LP09 (função do
 * adjetivo em descrições).
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-adjetivo",
  titulo: "Adjetivo: a característica que denuncia",
  iconeTrilha: "🔎",
  bncc: ["EF03LP07", "EF03LP09"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "O retrato falado do suspeito",
    historia:
      "Brilha recebeu um chamado urgente: alguém pegou o bolo da festa sem pedir! Só tem uma pista: uma testemunha viu 'um animal PEQUENO e ESPERTO'. — Essas palavras que descrevem COMO alguém é chamam-se ADJETIVOS — disse Brilha. — Sem elas, o retrato falado fica sem graça nenhuma!",
    imagemUrl: binoculo,
  },

  momento02_previsao: {
    instrucao: "A ficha do suspeito chegou ao Clube. Leia as pistas antes de continuar.",
    bloco: {
      titulo: "Ficha do Suspeito do Bolo",
      capaImagemUrl: quadroSurpreso,
      recado: {
        rotulo: "Ficha de Investigação",
        icone: "🎂",
        estilo: "cartaz",
        linhas: [
          "Suspeito: animal pequeno",
          "Jeito: esperto e rápido",
          "Cor: laranja",
        ],
      },
      pistas: [
        { imagemUrl: raposa, nome: "Uma raposa" },
        { imagemUrl: cachorro, nome: "Um cachorro" },
      ],
      pergunta: "Com essas características (pequeno, esperto, laranja), quem parece ser o suspeito?",
      hipoteses: [
        { texto: "Uma raposa pequena e laranja.", imagemUrl: raposa },
        { texto: "Um elefante enorme e cinza.", imagemUrl: robo },
        { texto: "Um passarinho azul e triste.", imagemUrl: menina },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! As CARACTERÍSTICAS (pequeno, esperto, laranja) combinam com a raposa — são os adjetivos que ajudam a identificar.",
      feedbackErro:
        "Releia a ficha: pequeno, esperto e laranja. Só uma opção tem essas três características ao mesmo tempo.",
      dica: "🔎 Pista: lembre do que significa “adjetivo” — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras-chave da investigação de hoje.",
    cards: [
      {
        palavra: "adjetivo",
        explicacao:
          "É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento).",
        exemplo: "Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa.",
        imagemUrl: raposa,
      },
      {
        palavra: "descrição",
        explicacao:
          "É contar como algo ou alguém é, usando várias características juntas.",
        exemplo: "Uma boa descrição do suspeito ajuda o detetive a encontrá-lo mais rápido.",
        imagemUrl: heroi,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Troque o adjetivo, muda o suspeito",
    instrucao: "Veja como um adjetivo diferente transforma a mesma frase em outra informação.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "O cachorro é calmo.",
            explicacao: "'Calmo' é o adjetivo — descreve o jeito de ser do cachorro.",
          },
          {
            texto: "O cachorro é bravo.",
            explicacao:
              "Só trocamos o adjetivo e a informação sobre o cachorro mudou completamente!",
          },
          {
            texto: "O cachorro é pequeno e peludo.",
            explicacao:
              "Podemos usar DOIS adjetivos juntos pra descrever melhor: tamanho e aparência.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relatório de descrição do suspeito. Repare nas palavras que descrevem características.",
    leitura: {
      titulo: "Relatório: o Suspeito do Bolo",
      imagemUrl: raposa,
      legendaImagem: "A raposa esperta da vizinhança",
      destacar: ["pequena", "laranja", "esperta", "rápida"],
      paragrafos: [
        "A testemunha descreveu uma raposa pequena e laranja saindo pela janela da cozinha.",
        "Segundo ela, o animal era muito esperto: abriu a caixa do bolo sem fazer barulho nenhum.",
        "A raposa também era rápida — sumiu entre as árvores antes que alguém pudesse gritar.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no relatório se precisar. As respostas usam os adjetivos do texto.",
    perguntas: [
      {
        pergunta: "De que cor era a raposa suspeita?",
        opcoes: ["Cinza", "Laranja", "Marrom"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Laranja' é o adjetivo que descreve a cor da raposa.",
        feedbackErro: "No primeiro parágrafo: 'uma raposa pequena e LARANJA'.",
        ondeEstaNoTexto: "…uma raposa pequena e laranja saindo pela janela da cozinha.",
        dica: "🔎 Pista: releia no texto o trecho “…uma raposa pequena e laranja saindo pela janela da cozinha.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “De que cor era a raposa suspeita?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Por que a raposa conseguiu pegar o bolo sem ser notada?",
        opcoes: ["Porque era grande e forte", "Porque era esperta e não fez barulho", "Porque era lenta"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! O adjetivo 'esperta' explica como ela agiu.",
        feedbackErro: "O segundo parágrafo diz: 'o animal era muito ESPERTO: abriu a caixa sem fazer barulho'.",
        ondeEstaNoTexto: "…o animal era muito esperto: abriu a caixa do bolo sem fazer barulho nenhum.",
        dica: "🔎 Pista: releia no texto o trecho “…o animal era muito esperto: abriu a caixa do bolo sem fazer barulho nenhum.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “Por que a raposa conseguiu pegar o bolo sem ser notada?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Como a raposa fugiu?",
        opcoes: ["Devagar e cansada", "Rápida, entre as árvores", "Voando"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Rápida' é o adjetivo que mostra como ela fugiu.",
        feedbackErro: "O último parágrafo diz: 'a raposa também era RÁPIDA — sumiu entre as árvores'.",
        ondeEstaNoTexto: "…era rápida — sumiu entre as árvores antes que alguém pudesse gritar.",
        dica: "🔎 Pista: releia no texto o trecho “…era rápida — sumiu entre as árvores antes que alguém pudesse gritar.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “Como a raposa fugiu?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Os adjetivos ajudam a imaginar melhor quem é o personagem e como é o cenário.",
    perguntas: [
      {
        pergunta: "Quais adjetivos descrevem a raposa no relatório?",
        opcoes: [
          "Pequena, laranja, esperta e rápida",
          "Grande, azul, lenta e triste",
          "Alta, verde, feliz e forte",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Exatamente! Esses quatro adjetivos formam o retrato falado da suspeita.",
        feedbackErro:
          "Reúna todos os adjetivos do texto: tamanho (pequena), cor (laranja), jeito (esperta) e velocidade (rápida).",
        dica: "🔎 Pista: lembre do que significa “adjetivo” — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “Quais adjetivos descrevem a raposa no relatório?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Onde a raposa entrou na casa?",
        opcoes: ["Pela porta da frente", "Pela janela da cozinha", "Pelo telhado"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ela entrou pela janela da cozinha — o cenário do crime.",
        feedbackErro: "O texto diz que ela saía 'pela janela da cozinha'.",
        dica: "🔎 Pista: lembre do que significa “adjetivo” — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “Onde a raposa entrou na casa?” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos da investigação do suspeito.",
    bloco: {
      instrucao: "Do avistamento até a fuga.",
      itens: [
        { id: "p1", texto: "A raposa pequena e laranja foi vista na janela.", imagemUrl: raposa },
        { id: "p2", texto: "Ela abriu a caixa do bolo sem barulho.", imagemUrl: quadroSurpreso },
        { id: "p3", texto: "A raposa fugiu rápida entre as árvores.", imagemUrl: robo },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Investigação encerrada! Você seguiu certinho a sequência dos adjetivos e ações.",
      feedbackErro: "Pense: primeiro ela é VISTA, depois ABRE a caixa, e só no final FOGE.",
      dica: "🔎 Pista: lembre do que significa “adjetivo” — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho este novo caso e responda.",
    leitura: {
      titulo: "O Segundo Suspeito: o Gato Barulhento",
      imagemUrl: menino,
      destacar: ["preto", "peludo", "barulhento"],
      paragrafos: [
        "Um vizinho contou que viu um gato preto e peludo derrubando latas de lixo durante a noite.",
        "O gato era muito barulhento: miava alto e corria pelo telhado das casas vizinhas.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quais adjetivos descrevem o gato?",
        opcoes: ["Preto e peludo", "Branco e magro", "Cinza e velho"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! PRETO e PELUDO descrevem a aparência do gato.",
        feedbackErro: "A primeira frase diz: 'um gato PRETO e PELUDO'.",
        ondeEstaNoTexto: "…viu um gato preto e peludo derrubando latas de lixo.",
        dica: "🔎 Pista: releia no texto o trecho “…viu um gato preto e peludo derrubando latas de lixo.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “Quais adjetivos descrevem o gato?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Por que o gato foi chamado de suspeito?",
        opcoes: [
          "Porque ele era barulhento e derrubava latas",
          "Porque ele comeu o bolo",
          "Porque ele fugiu de carro",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! O adjetivo 'barulhento' explica o comportamento suspeito.",
        feedbackErro: "O texto explica: 'o gato era muito BARULHENTO: miava alto e corria pelo telhado'.",
        ondeEstaNoTexto: "O gato era muito barulhento: miava alto e corria pelo telhado.",
        dica: "🔎 Pista: releia no texto o trecho “O gato era muito barulhento: miava alto e corria pelo telhado.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “Por que o gato foi chamado de suspeito?” com essa ideia na cabeça.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte o Retrato Falado",
    instrucao: "Escolha os adjetivos que combinam com cada suspeito da investigação.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Quais são adjetivos?",
      bloco: {
        instrucao: "Marque APENAS as palavras que são adjetivos (descrevem características).",
        pergunta: "Quais destas palavras são adjetivos?",
        opcoes: [
          { id: "o1", texto: "esperto", correto: true },
          { id: "o2", texto: "raposa", correto: false },
          { id: "o3", texto: "pequeno", correto: true },
          { id: "o4", texto: "correu", correto: false },
          { id: "o5", texto: "barulhento", correto: true },
          { id: "o6", texto: "janela", correto: false },
        ],
        feedbackAcerto:
          "🎉 Muito bem, detetive! Esperto, pequeno e barulhento descrevem características — são adjetivos.",
        feedbackErro:
          "Lembre-se: adjetivo descreve COMO algo é. 'Raposa' e 'janela' são substantivos; 'correu' é uma ação (verbo).",
        dica: "🔎 Pista: lembre do que significa “adjetivo” — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Use isso para eliminar as alternativas que não combinam.",
      },
    },
  },

  momento_escrita: {
    titulo: "Oficina de Escrita do Detetive",
    instrucao:
      "Três passos de escritor de verdade: primeiro o RASCUNHO, depois a REVISÃO com a lista de conferência e, por último, a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Retrato com adjetivos",
        comando: "Escreva um parágrafo descrevendo um personagem usando pelo menos três ADJETIVOS (características).",
        linhas: 4,
        modelo: [
          "O detetive era alto e calmo.",
          "Usava um casaco velho.",
          "Tinha um olhar curioso.",
        ],
        checklist: [
          "Comecei cada frase com letra MAIÚSCULA.",
          "Usei ponto final no fim de cada frase.",
          "Meu texto fala do tema pedido, do começo ao fim.",
          "Reli em voz alta e consertei o que estava estranho.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "ADJETIVO é a palavra que dá uma CARACTERÍSTICA ao substantivo.",
      "Adjetivos descrevem cor, tamanho, jeito de ser e até sentimentos.",
      "Trocar o adjetivo muda completamente a informação da frase (calmo x bravo).",
      "Podemos usar vários adjetivos juntos para descrever melhor alguém ou algo.",
    ],
    miniDesafio: {
      pergunta: "Na frase 'O gato preto miou alto', qual é o adjetivo?",
      opcoes: ["gato", "preto", "miou"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 'Preto' descreve a característica do gato.",
      feedbackErro: "'Gato' é substantivo, 'miou' é ação (verbo). O adjetivo é a característica: PRETO.",
      dica: "🔎 Pista: lembre do que significa “adjetivo” — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “Na frase 'O gato preto miou alto', qual é o adjetivo?” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um adjetivo?",
        opcoes: [
          "Uma palavra que nomeia algo",
          "Uma palavra que serve só para nomear pessoas, lugares e coisas",
          "Uma palavra que descreve uma característica",
          "Uma palavra que indica ação",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “Uma palavra que nomeia algo” não é a resposta. Adjetivo dá uma característica: cor, tamanho, jeito de ser.",
          "❌ “Uma palavra que serve só para nomear pessoas, lugares e coisas” não é a resposta. Adjetivo dá uma característica: cor, tamanho, jeito de ser.",
          null,
          "❌ “Uma palavra que indica ação” não é a resposta. Adjetivo dá uma característica: cor, tamanho, jeito de ser.",
        ],
        feedbackAcerto: "🎉 Isso! Adjetivo descreve COMO algo ou alguém é.",
        feedbackErro: "Adjetivo dá uma característica: cor, tamanho, jeito de ser.",
        dica: "🔎 Pista: lembre do que significa “adjetivo” — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “1/5 — O que é um adjetivo?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — Na frase 'A raposa esperta fugiu', qual é o adjetivo?",
        opcoes: [
          "raposa",
          "esperta",
          "Uma palavra que serve só para nomear pessoas, lugares e coisas",
          "fugiu",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “raposa” não é a resposta. 'Raposa' é substantivo, 'fugiu' é verbo. O adjetivo é ESPERTA.",
          null,
          "❌ “Uma palavra que serve só para nomear pessoas, lugares e coisas” não é a resposta. 'Raposa' é substantivo, 'fugiu' é verbo. O adjetivo é ESPERTA.",
          "❌ “fugiu” não é a resposta. 'Raposa' é substantivo, 'fugiu' é verbo. O adjetivo é ESPERTA.",
        ],
        feedbackAcerto: "🎉 'Esperta' descreve a raposa!",
        feedbackErro: "'Raposa' é substantivo, 'fugiu' é verbo. O adjetivo é ESPERTA.",
        dica: "🔎 Pista: lembre do que significa “adjetivo” — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “2/5 — Na frase 'A raposa esperta fugiu', qual é o adjetivo?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — Trocar 'cachorro calmo' por 'cachorro bravo' muda...",
        opcoes: [
          "Só a pontuação",
          "Basta olhar as figuras e ignorar o que está escrito",
          "A informação sobre o cachorro",
          "Nada",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “Só a pontuação” não é a resposta. Trocar o adjetivo muda a característica que estamos informando sobre o cachorro.",
          "❌ “Basta olhar as figuras e ignorar o que está escrito” não é a resposta. Trocar o adjetivo muda a característica que estamos informando sobre o cachorro.",
          null,
          "❌ “Nada” não é a resposta. Trocar o adjetivo muda a característica que estamos informando sobre o cachorro.",
        ],
        feedbackAcerto: "🎉 Isso! O adjetivo muda totalmente o sentido da descrição.",
        feedbackErro: "Trocar o adjetivo muda a característica que estamos informando sobre o cachorro.",
        dica: "🔎 Pista: lembre do que significa “adjetivo” — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “3/5 — Trocar 'cachorro calmo' por 'cachorro bravo' muda...” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — Qual conjunto tem SÓ adjetivos?",
        opcoes: [
          "Uma palavra que serve só para nomear pessoas, lugares e coisas",
          "pequeno, esperto, rápido",
          "raposa, janela, bolo",
          "correu, abriu, fugiu",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Uma palavra que serve só para nomear pessoas, lugares e coisas” não é a resposta. A segunda lista tem substantivos, a terceira tem verbos (ações). Adjetivos descrevem características.",
          null,
          "❌ “raposa, janela, bolo” não é a resposta. A segunda lista tem substantivos, a terceira tem verbos (ações). Adjetivos descrevem características.",
          "❌ “correu, abriu, fugiu” não é a resposta. A segunda lista tem substantivos, a terceira tem verbos (ações). Adjetivos descrevem características.",
        ],
        feedbackAcerto: "🎉 Isso! Todas descrevem características.",
        feedbackErro: "A segunda lista tem substantivos, a terceira tem verbos (ações). Adjetivos descrevem características.",
        dica: "🔎 Pista: lembre do que significa “adjetivo” — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “4/5 — Qual conjunto tem SÓ adjetivos?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Por que o adjetivo é importante numa descrição?",
        opcoes: [
          "Uma palavra que serve só para nomear pessoas, lugares e coisas",
          "Porque enfeita sem função",
          "Porque ajuda a identificar com precisão quem/o que estamos descrevendo",
          "Porque substitui o substantivo",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “Uma palavra que serve só para nomear pessoas, lugares e coisas” não é a resposta. O adjetivo dá detalhes que ajudam a identificar exatamente quem ou o que estamos falando.",
          "❌ “Porque enfeita sem função” não é a resposta. O adjetivo dá detalhes que ajudam a identificar exatamente quem ou o que estamos falando.",
          null,
          "❌ “Porque substitui o substantivo” não é a resposta. O adjetivo dá detalhes que ajudam a identificar exatamente quem ou o que estamos falando.",
        ],
        feedbackAcerto: "🎉 Exatamente! Um bom detetive usa adjetivos precisos pra não confundir os suspeitos.",
        feedbackErro: "O adjetivo dá detalhes que ajudam a identificar exatamente quem ou o que estamos falando.",
        dica: "🔎 Pista: lembre do que significa “adjetivo” — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: adjetivo — É a palavra que dá uma CARACTERÍSTICA ao substantivo: como ele é (cor, tamanho, jeito, sentimento). Exemplo: Em 'a raposa esperta', ESPERTA é o adjetivo que descreve a raposa. Agora volte à pergunta “5/5 — Por que o adjetivo é importante numa descrição?” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Retrato Falado em Família",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Escolha uma pessoa ou animal de estimação da família.",
      "2) Escreva 4 adjetivos que descrevem essa pessoa/animal.",
      "3) Leia a descrição pra alguém sem dizer o nome — a pessoa tenta adivinhar quem é.",
      "4) Conversem: os adjetivos ajudaram a identificar certo?",
    ],
    registro: "📝 A lista de adjetivos escrita, com o nome de quem foi descrito.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
