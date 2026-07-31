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
      dica: "🔎 Pista: lembre do que significa “caro” — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Use isso para eliminar as alternativas que não combinam.",
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

  momento_ensinoVisual: {
    titulo: "A regra do R e do RR",
    instrucao: "Leia a explicação, veja os exemplos com a letra destacada e complete os desafios.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "RR só entre vogais, quando o som é forte",
        explicacao: "O som forte de R (o R vibrado de RATO) aparece com RR quando está ENTRE DUAS VOGAIS: CARRO, TERRA, JARRA. Um R sozinho entre vogais faz o som fraco: CARO, CARA, ARARA. Ou seja: entre vogais, RR = som forte, R = som fraco.",
        exemplos: [{"palavra":"carro","destaque":"rr","motivo":"Entre A e O com som forte: RR."},{"palavra":"caro","destaque":"r","motivo":"Um R entre vogais: som fraco."},{"palavra":"terra","destaque":"rr","motivo":"Entre E e A com som forte: RR."}],
        desafios: [{"molde":"se__a","opcoes":["rr","r"],"correta":0,"frase":"A serra da máquina cortou a madeira.","feedbackErro":"Som forte entre vogais pede RR: SERRA."},{"molde":"ca__eta","opcoes":["rr","r"],"correta":1,"frase":"A careta do Theo fez todos rirem.","feedbackErro":"Aqui o som é fraco (ca-RE-ta): um R só."}],
      },
      {
        tipo: "regraOrtografica",
        regra: "No começo da palavra e depois de N, L, S: R sozinho já é forte",
        explicacao: "No INÍCIO da palavra o R já tem som forte sem precisar dobrar: RATO, RUA, RIO. Depois de N, L ou S também: HONRA, MELRO, ISRAEL. Nunca se escreve RR no começo da palavra.",
        exemplos: [{"palavra":"rato","destaque":"r","motivo":"Começo de palavra: R sozinho já é forte."},{"palavra":"rua","destaque":"r","motivo":"Começo de palavra: nunca RR."},{"palavra":"honra","destaque":"r","motivo":"Depois de N: R sozinho com som forte."}],
        desafios: [{"molde":"__oupa","opcoes":["r","rr"],"correta":0,"frase":"A roupa secou no sol.","feedbackErro":"Em começo de palavra nunca se escreve RR."},{"molde":"ba__iga","opcoes":["rr","r"],"correta":0,"frase":"A barriga do gato estava cheia.","feedbackErro":"Som forte entre vogais: BARRIGA, com RR."}],
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
        dica: "🔎 Pista: releia no texto o trecho “Quando o R está entre vogais, sozinho, ele soa fraco…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “Segundo o texto, como soa o R sozinho entre vogais?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Como soa o RR dobrado entre vogais?",
        opcoes: ["Forte", "Fraco", "Mudo"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! 'RR entre vogais = forte', como em CARRO.",
        feedbackErro: "O texto diz: 'se o R aparece dobrado... o som fica forte, como em CARRO'.",
        ondeEstaNoTexto: "…o R aparece dobrado, RR, entre vogais, o som fica forte…",
        dica: "🔎 Pista: releia no texto o trecho “…o R aparece dobrado, RR, entre vogais, o som fica forte…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “Como soa o RR dobrado entre vogais?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que acontece com o R sozinho no COMEÇO da palavra, como em RATO?",
        opcoes: ["Fica fraco", "Não se escreve", "Já soa forte"],
        correta: 2,
        feedbackAcerto: "🎉 Exato! No começo da palavra, R sozinho já soa forte.",
        feedbackErro: "Releia o terceiro parágrafo: 'No começo da palavra, o R sozinho já soa forte, como em RATO'.",
        ondeEstaNoTexto: "No começo da palavra, o R sozinho já soa forte, como em RATO e ROBÔ.",
        dica: "🔎 Pista: releia no texto o trecho “No começo da palavra, o R sozinho já soa forte, como em RATO e ROBÔ.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “O que acontece com o R sozinho no COMEÇO da palavra, como em RATO?” com essa ideia na cabeça.",
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
        dica: "🔎 Pista: lembre do que significa “caro” — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “Quem reuniu o clube para explicar a regra do R?” com essa ideia na cabeça.",
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
        dica: "🔎 Pista: lembre do que significa “caro” — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “Onde a explicação da regra aconteceu?” com essa ideia na cabeça.",
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
      dica: "🔎 Pista: lembre do que significa “caro” — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Use isso para eliminar as alternativas que não combinam.",
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
        dica: "🔎 Pista: releia no texto o trecho “…depois de consoante o R já é forte, sem precisar dobrar.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “Por que o R de HONRA soa forte mesmo estando sozinho?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Em TERRA, por que o som do RR é forte?",
        opcoes: ["Porque está entre vogais e dobrado", "Porque está no fim da palavra", "Porque é uma palavra difícil"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! RR entre vogais é sempre forte.",
        feedbackErro: "O texto diz: 'em TERRA, o RR está entre vogais, então o som é forte'.",
        ondeEstaNoTexto: "Em TERRA, o RR está entre vogais, então o som é forte.",
        dica: "🔎 Pista: releia no texto o trecho “Em TERRA, o RR está entre vogais, então o som é forte.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “Em TERRA, por que o som do RR é forte?” com essa ideia na cabeça.",
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
        dica: "🔎 Pista: lembre do que significa “caro” — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Use isso para eliminar as alternativas que não combinam.",
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
        titulo: "Parágrafo com R e RR",
        comando: "Escreva um parágrafo de 3 frases usando pelo menos duas palavras com RR (carro, terra, corre) e duas com R fraco (cara, arara).",
        linhas: 4,
        modelo: [
          "O carro parou na terra.",
          "Uma arara pousou perto.",
          "Meu cachorro correu atrás.",
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

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura cronometrada (Fase 4 · 3º ano · ~90 ppm)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura de detetive: O Segredo do R",
    instrucao:
      "Detetive lê rápido, mas não atropela. Leia este trecho três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação — respeitando vírgula e ponto. A meta é ler sem tropeçar, não correr.",
    texto: [
      "Aurora reuniu o Clube dos Detetives e mostrou o mapa da regra.",
      "'Quando o R está entre vogais, sozinho, ele soa fraco, como em CARO e ARARA.",
      "Mas se o R aparece dobrado, RR, entre vogais, o som fica forte, como em CARRO e TERRA.'",
    ],
    metaSegundos: 30,
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
      dica: "🔎 Pista: lembre do que significa “caro” — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “Qual é a regra que explica a diferença entre CARO e CARRO?” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Como se escreve o som fraco do R entre duas vogais?",
        opcoes: [
          "Escrever RR no começo da palavra",
          "Com R sozinho",
          "Com RR",
          "Com RH",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Escrever RR no começo da palavra” não é a resposta. Lembre: entre vogais, o R sozinho soa fraco (caro).",
          null,
          "❌ “Com RR” não é a resposta. Lembre: entre vogais, o R sozinho soa fraco (caro).",
          "❌ “Com RH” não é a resposta. Lembre: entre vogais, o R sozinho soa fraco (caro).",
        ],
        feedbackAcerto: "🎉 R sozinho entre vogais = som fraco.",
        feedbackErro: "Lembre: entre vogais, o R sozinho soa fraco (caro).",
        dica: "🔎 Pista: lembre do que significa “caro” — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “1/5 — Como se escreve o som fraco do R entre duas vogais?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — Como se escreve o som forte do R entre duas vogais?",
        opcoes: [
          "Escrever RR no começo da palavra",
          "Com R sozinho",
          "Com RR",
          "Não se escreve",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “Escrever RR no começo da palavra” não é a resposta. Entre vogais, o som forte precisa do R dobrado (carro).",
          "❌ “Com R sozinho” não é a resposta. Entre vogais, o som forte precisa do R dobrado (carro).",
          null,
          "❌ “Não se escreve” não é a resposta. Entre vogais, o som forte precisa do R dobrado (carro).",
        ],
        feedbackAcerto: "🎉 Isso! RR dobrado entre vogais = som forte.",
        feedbackErro: "Entre vogais, o som forte precisa do R dobrado (carro).",
        dica: "🔎 Pista: lembre do que significa “caro” — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “2/5 — Como se escreve o som forte do R entre duas vogais?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — No início da palavra, como soa o R sozinho, como em RATO?",
        opcoes: [
          "Fraco",
          "Forte",
          "É preciso decorar o texto inteiro de cor",
          "Sem som",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Fraco” não é a resposta. Lembre: no começo da palavra, R sozinho já soa forte.",
          null,
          "❌ “É preciso decorar o texto inteiro de cor” não é a resposta. Lembre: no começo da palavra, R sozinho já soa forte.",
          "❌ “Sem som” não é a resposta. Lembre: no começo da palavra, R sozinho já soa forte.",
        ],
        feedbackAcerto: "🎉 Correto! No início, o R sozinho já é forte.",
        feedbackErro: "Lembre: no começo da palavra, R sozinho já soa forte.",
        dica: "🔎 Pista: lembre do que significa “caro” — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “3/5 — No início da palavra, como soa o R sozinho, como em RATO?” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — Depois de uma consoante, como em HONRA, o R sozinho soa…",
        opcoes: [
          "Fraco",
          "Basta olhar as figuras e ignorar o que está escrito",
          "Forte",
          "Depende da cor da capa",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “Fraco” não é a resposta. A regra diz: depois de consoante, o R já soa forte, sem precisar dobrar.",
          "❌ “Basta olhar as figuras e ignorar o que está escrito” não é a resposta. A regra diz: depois de consoante, o R já soa forte, sem precisar dobrar.",
          null,
          "❌ “Depende da cor da capa” não é a resposta. A regra diz: depois de consoante, o R já soa forte, sem precisar dobrar.",
        ],
        feedbackAcerto: "🎉 Isso! Depois de consoante, o R sozinho já é forte.",
        feedbackErro: "A regra diz: depois de consoante, o R já soa forte, sem precisar dobrar.",
        dica: "🔎 Pista: lembre do que significa “caro” — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “4/5 — Depois de uma consoante, como em HONRA, o R sozinho soa…” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Qual dessas palavras usa RR corretamente por causa do som forte entre vogais?",
        opcoes: [
          "Carro",
          "Caro",
          "Escrever RR no começo da palavra",
          "Rato",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Caro” não é a resposta. Pense em qual palavra tem som forte de R ENTRE vogais — só uma tem RR dobrado.",
          "❌ “Escrever RR no começo da palavra” não é a resposta. Pense em qual palavra tem som forte de R ENTRE vogais — só uma tem RR dobrado.",
          "❌ “Rato” não é a resposta. Pense em qual palavra tem som forte de R ENTRE vogais — só uma tem RR dobrado.",
        ],
        feedbackAcerto: "🎉 Caso encerrado! CARRO tem RR porque o som é forte entre vogais.",
        feedbackErro: "Pense em qual palavra tem som forte de R ENTRE vogais — só uma tem RR dobrado.",
        dica: "🔎 Pista: lembre do que significa “caro” — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: caro — Quando o R aparece SOZINHO entre duas vogais, ele tem som FRACO, macio — quase um 'r' que desliza. Exemplo: Aquele brinquedo é muito caro. Agora volte à pergunta “5/5 — Qual dessas palavras usa RR corretamente por causa do som forte…” com essa ideia na cabeça.",
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
