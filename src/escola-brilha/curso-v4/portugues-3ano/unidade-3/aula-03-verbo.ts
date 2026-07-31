import type { AulaPortuguesV4 } from "../../types";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as relogioMagico } from "@/assets/neuro-treino/objetos/relogio-magico.png.asset.json";
import { url as mapaPercurso } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";

/**
 * Aula 3 — Verbo: a ação do caso
 * -------------------------------------------------------------
 * Terceira missão da Unidade 3. Detetives precisam contar os fatos
 * na ordem certa do TEMPO: o que já aconteceu, o que acontece agora
 * e o que ainda vai acontecer.
 *
 * Foco pedagógico:
 *  - Reconhecer verbo como a palavra que indica AÇÃO/ESTADO.
 *  - Perceber a mudança de tempo verbal: presente, passado, futuro.
 *  - Usar o tempo verbal certo para narrar fatos de um caso.
 *
 * BNCC: EF03LP07 (classes de palavras em uso), EF35LP12 (organização
 * textual/coesão temporal em narrativas).
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-verbo",
  titulo: "Verbo: a ação do caso",
  iconeTrilha: "⏱️",
  bncc: ["EF03LP07", "EF35LP12"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "A máquina do tempo do relatório",
    historia:
      "Brilha encontrou um relógio estranho na sala do Clube. — Esse relógio mostra quando cada AÇÃO aconteceu! As palavras que mostram ação se chamam VERBOS, e elas mudam de forma pra contar se algo JÁ aconteceu, está acontecendo AGORA, ou vai acontecer no FUTURO. Vamos decifrar o tempo dos verbos?",
    imagemUrl: relogioMagico,
  },

  momento02_previsao: {
    instrucao: "Um bilhete misterioso chegou com três pistas em tempos diferentes. Leia e imagine.",
    bloco: {
      titulo: "O Bilhete dos Três Tempos",
      capaImagemUrl: relogio,
      recado: {
        rotulo: "Bilhete Urgente",
        icone: "⏰",
        estilo: "papel",
        linhas: [
          "Ontem, alguém ENTROU na sala.",
          "Agora, o Clube INVESTIGA.",
          "Amanhã, nós DESCOBRIREMOS a verdade.",
        ],
      },
      pistas: [
        { imagemUrl: relogio, nome: "Um relógio" },
        { imagemUrl: bussola, nome: "Uma bússola" },
      ],
      pergunta: "Sobre o que esse bilhete parece falar?",
      hipoteses: [
        { texto: "Uma investigação contada em três momentos do tempo.", imagemUrl: relogio },
        { texto: "Uma receita de suco de laranja.", imagemUrl: mapaPercurso },
        { texto: "Um jogo de futebol.", imagemUrl: menino },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! O bilhete usa verbos em três tempos: ENTROU (passado), INVESTIGA (presente) e DESCOBRIREMOS (futuro).",
      feedbackErro:
        "Releia as três linhas: elas falam de ONTEM, AGORA e AMANHÃ — os três tempos da mesma investigação.",
      dica: "🔎 Pista: lembre do que significa “verbo” — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de investigar o tempo, conheça essas palavras.",
    cards: [
      {
        palavra: "verbo",
        explicacao:
          "É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo.",
        exemplo: "Em 'Brilha investiga o caso', INVESTIGA é o verbo.",
        imagemUrl: binoculo,
      },
      {
        palavra: "tempo verbal",
        explicacao:
          "É a forma do verbo que mostra QUANDO a ação acontece: no passado, no presente ou no futuro.",
        exemplo: "Correu (passado), corre (presente), correrá (futuro) — mesmo verbo, tempos diferentes.",
        imagemUrl: relogio,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "O mesmo verbo em três tempos",
    instrucao: "Observe como o verbo muda de forma conforme o tempo da ação.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Ontem, o suspeito FUGIU pela janela.",
            explicacao: "'Fugiu' está no PASSADO — a ação já aconteceu.",
          },
          {
            texto: "Agora, o suspeito FOGE pela janela.",
            explicacao: "'Foge' está no PRESENTE — a ação acontece neste instante.",
          },
          {
            texto: "Amanhã, o suspeito FUGIRÁ pela janela.",
            explicacao: "'Fugirá' está no FUTURO — a ação ainda vai acontecer.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relato do detetive e observe os tempos dos verbos.",
    leitura: {
      titulo: "O Relato da Bicicleta Sumida",
      imagemUrl: mapaPercurso,
      legendaImagem: "A bicicleta que sumiu na praça",
      destacar: ["sumiu", "procura", "encontrará"],
      paragrafos: [
        "Ontem à noite, a bicicleta de Pedro sumiu da garagem sem deixar rastro.",
        "Hoje, o Clube dos Detetives procura pistas pela vizinhança inteira.",
        "Amanhã, se tudo der certo, o Clube encontrará a bicicleta e resolverá o caso.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no relato se precisar. Observe os verbos destacados.",
    perguntas: [
      {
        pergunta: "Quando a bicicleta sumiu?",
        opcoes: ["Hoje de manhã", "Ontem à noite", "Amanhã"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Sumiu' está no passado: aconteceu ONTEM à noite.",
        feedbackErro: "A primeira frase começa com 'Ontem à noite, a bicicleta… sumiu'.",
        ondeEstaNoTexto: "Ontem à noite, a bicicleta de Pedro sumiu da garagem.",
        dica: "🔎 Pista: releia no texto o trecho “Ontem à noite, a bicicleta de Pedro sumiu da garagem.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “Quando a bicicleta sumiu?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que o Clube está fazendo hoje?",
        opcoes: ["Descansando", "Procurando pistas", "Comemorando"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! 'Procura' é o verbo no presente: acontece HOJE.",
        feedbackErro: "O segundo parágrafo diz: 'Hoje, o Clube… PROCURA pistas'.",
        ondeEstaNoTexto: "Hoje, o Clube dos Detetives procura pistas pela vizinhança inteira.",
        dica: "🔎 Pista: releia no texto o trecho “Hoje, o Clube dos Detetives procura pistas pela vizinhança inteira.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “O que o Clube está fazendo hoje?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que deve acontecer amanhã, segundo o relato?",
        opcoes: ["O Clube vai desistir", "O Clube encontrará a bicicleta", "A bicicleta sumirá de novo"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Encontrará' está no futuro — ainda vai acontecer.",
        feedbackErro: "O último parágrafo diz: 'Amanhã… o Clube ENCONTRARÁ a bicicleta'.",
        ondeEstaNoTexto: "Amanhã, se tudo der certo, o Clube encontrará a bicicleta.",
        dica: "🔎 Pista: releia no texto o trecho “Amanhã, se tudo der certo, o Clube encontrará a bicicleta.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “O que deve acontecer amanhã, segundo o relato?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Os verbos ajudam a entender quando e como cada personagem age.",
    perguntas: [
      {
        pergunta: "Quem faz a ação de 'procura pistas' no relato?",
        opcoes: ["Pedro sozinho", "O Clube dos Detetives", "A bicicleta"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! É o CLUBE quem procura as pistas — o sujeito da ação.",
        feedbackErro: "Releia: 'Hoje, o Clube dos Detetives procura pistas…'.",
        dica: "🔎 Pista: lembre do que significa “verbo” — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “Quem faz a ação de 'procura pistas' no relato?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Onde a bicicleta estava guardada antes de sumir?",
        opcoes: ["Na garagem", "Na praça", "Na escola"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Ela sumiu 'da garagem', o cenário inicial do caso.",
        feedbackErro: "O texto diz: 'a bicicleta de Pedro sumiu DA GARAGEM'.",
        dica: "🔎 Pista: lembre do que significa “verbo” — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “Onde a bicicleta estava guardada antes de sumir?” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o caso na linha do tempo: passado, presente e futuro.",
    bloco: {
      instrucao: "Do que já aconteceu até o que vai acontecer.",
      itens: [
        { id: "p1", texto: "Ontem: a bicicleta sumiu da garagem.", imagemUrl: relogio },
        { id: "p2", texto: "Hoje: o Clube procura pistas.", imagemUrl: bussola },
        { id: "p3", texto: "Amanhã: o Clube encontrará a bicicleta.", imagemUrl: relogioMagico },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você seguiu a linha do tempo dos verbos: passado, presente e futuro.",
      feedbackErro: "Pense nos tempos verbais: SUMIU é passado, PROCURA é presente, ENCONTRARÁ é futuro.",
      dica: "🔎 Pista: lembre do que significa “verbo” — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e identifique os tempos verbais.",
    leitura: {
      titulo: "O Caso do Vaso Quebrado",
      imagemUrl: menina,
      destacar: ["quebrou", "explica", "contará"],
      paragrafos: [
        "Ontem, alguém quebrou o vaso da sala sem avisar ninguém.",
        "Agora, a irmã mais nova explica que foi sem querer, correndo atrás da bola.",
        "Mais tarde, ela contará tudo pros pais, com calma.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual verbo está no PASSADO?",
        opcoes: ["quebrou", "explica", "contará"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Quebrou' mostra uma ação que já aconteceu ontem.",
        feedbackErro: "Passado é o que já aconteceu. 'Ontem, alguém QUEBROU o vaso'.",
        ondeEstaNoTexto: "Ontem, alguém quebrou o vaso da sala sem avisar ninguém.",
        dica: "🔎 Pista: releia no texto o trecho “Ontem, alguém quebrou o vaso da sala sem avisar ninguém.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “Qual verbo está no PASSADO?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Qual verbo está no FUTURO?",
        opcoes: ["quebrou", "explica", "contará"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! 'Contará' é uma ação que ainda vai acontecer.",
        feedbackErro: "Futuro é o que ainda vai acontecer: 'ela CONTARÁ tudo pros pais'.",
        ondeEstaNoTexto: "Mais tarde, ela contará tudo pros pais, com calma.",
        dica: "🔎 Pista: releia no texto o trecho “Mais tarde, ela contará tudo pros pais, com calma.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “Qual verbo está no FUTURO?” com essa ideia na cabeça.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Organize a Linha do Tempo do Caso",
    instrucao: "Arraste cada verbo para o tempo certo: passado, presente ou futuro.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Passado, Presente ou Futuro?",
      bloco: {
        instrucao: "Leia cada verbo destacado e leve pro tempo verbal certo.",
        itens: [
          { id: "i1", texto: "correu", alvoId: "passado" },
          { id: "i2", texto: "corre", alvoId: "presente" },
          { id: "i3", texto: "correrá", alvoId: "futuro" },
          { id: "i4", texto: "investigou", alvoId: "passado" },
          { id: "i5", texto: "investiga", alvoId: "presente" },
          { id: "i6", texto: "investigará", alvoId: "futuro" },
        ],
        alvos: [
          { id: "passado", nome: "Passado", descricao: "Já aconteceu" },
          { id: "presente", nome: "Presente", descricao: "Acontece agora" },
          { id: "futuro", nome: "Futuro", descricao: "Ainda vai acontecer" },
        ],
        feedbackAcerto:
          "🎉 Excelente! Você organizou os verbos certinho na linha do tempo.",
        feedbackErro:
          "Dica: verbos no futuro costumam terminar em -RÁ ou -RÃO; no passado, geralmente em -OU ou -EU.",
        dica: "🔎 Pista: lembre do que significa “verbo” — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Use isso para eliminar as alternativas que não combinam.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "VERBO é a palavra que indica AÇÃO ou ESTADO.",
      "O mesmo verbo muda de forma pra indicar o TEMPO: passado, presente ou futuro.",
      "Passado: já aconteceu (fugiu, sumiu). Presente: acontece agora (foge, procura). Futuro: ainda vai acontecer (fugirá, encontrará).",
      "Contar um caso na ordem certa do tempo ajuda quem lê a entender a investigação.",
    ],
    miniDesafio: {
      pergunta: "Na frase 'Amanhã, resolveremos o caso', o verbo está no...",
      opcoes: ["Passado", "Presente", "Futuro"],
      correta: 2,
      feedbackAcerto: "🎉 Isso! 'Resolveremos' é futuro — a ação ainda vai acontecer.",
      feedbackErro: "A palavra 'amanhã' já é uma pista de futuro, e o verbo termina em -EMOS + -REMOS.",
      dica: "🔎 Pista: lembre do que significa “verbo” — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “Na frase 'Amanhã, resolveremos o caso', o verbo está no...” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um verbo?",
        opcoes: [
          "Uma palavra que nomeia algo",
          "Uma palavra que indica ação ou estado",
          "Uma palavra que descreve características",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Verbo indica AÇÃO ou ESTADO.",
        feedbackErro: "Verbo é a palavra da AÇÃO: correr, investigar, ser, estar.",
        dica: "🔎 Pista: lembre do que significa “verbo” — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “1/5 — O que é um verbo?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — 'O detetive investigou o caso' está em que tempo?",
        opcoes: ["Passado", "Presente", "Futuro"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Investigou' mostra ação já concluída — passado.",
        feedbackErro: "'Investigou' terminando em -OU é sinal de passado.",
        dica: "🔎 Pista: lembre do que significa “verbo” — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “2/5 — 'O detetive investigou o caso' está em que tempo?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — 'Ela investigará o caso amanhã' está em que tempo?",
        opcoes: ["Passado", "Presente", "Futuro"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! 'Investigará' + 'amanhã' indicam futuro.",
        feedbackErro: "Verbos terminados em -RÁ geralmente indicam futuro.",
        dica: "🔎 Pista: lembre do que significa “verbo” — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “3/5 — 'Ela investigará o caso amanhã' está em que tempo?” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — Qual verbo está no PRESENTE?",
        opcoes: ["correu", "corre", "correrá"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Corre' mostra a ação acontecendo agora.",
        feedbackErro: "Presente é o que acontece AGORA — 'corre', sem terminação de passado ou futuro.",
        dica: "🔎 Pista: lembre do que significa “verbo” — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “4/5 — Qual verbo está no PRESENTE?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Por que é importante usar o tempo verbal certo num relato?",
        opcoes: [
          "Não é importante",
          "Ajuda quem lê a entender quando cada fato aconteceu",
          "Serve só pra enfeitar o texto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exatamente! O tempo verbal organiza a história pra quem lê entender a ordem dos fatos.",
        feedbackErro: "Sem o tempo verbal certo, fica difícil saber se algo já aconteceu, acontece agora ou vai acontecer.",
        dica: "🔎 Pista: lembre do que significa “verbo” — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verbo — É a palavra que indica AÇÃO (correr, investigar) ou ESTADO (estar, ser). Toda frase de ação tem um verbo. Exemplo: Em 'Brilha investiga o caso', INVESTIGA é o verbo. Agora volte à pergunta “5/5 — Por que é importante usar o tempo verbal certo num relato?” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 O Diário do Detetive Mirim",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Pense em algo que aconteceu ONTEM na sua casa.",
      "2) Escreva uma frase no passado sobre isso.",
      "3) Escreva uma frase no presente sobre o que está acontecendo AGORA.",
      "4) Escreva uma frase no futuro sobre o que vai acontecer AMANHÃ.",
    ],
    registro: "📝 As três frases escritas, uma pra cada tempo verbal (passado, presente, futuro).",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
