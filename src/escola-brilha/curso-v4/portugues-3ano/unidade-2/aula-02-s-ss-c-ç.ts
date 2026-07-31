import type { AulaPortuguesV4 } from "../../types";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lupaLike } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as bau } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as cadeira } from "@/assets/neuro-treino/objetos/cadeira.png.asset.json";
import { url as quebraCabeca } from "@/assets/neuro-treino/objetos/quebra-cabeca.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Aula 2 — S, SS, Ç e C: o mesmo som, escritas diferentes
 * -------------------------------------------------------------
 * Unidade 2 · Laboratório da Ortografia
 * Foco: som de /s/ conforme a posição — S entre vogais soa Z; SS
 * entre vogais soa S; Ç antes de A/O/U soa S; C antes de E/I soa S.
 * BNCC: EF03LP01, EF03LP02, EF03LP03, EF03LP05, EF03LP06
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-s-ss-c-c-cedilha",
  titulo: "S, SS, Ç e C: o mesmo som, escritas diferentes",
  iconeTrilha: "🕵️",
  bncc: ["EF03LP01", "EF03LP02", "EF03LP03", "EF03LP05", "EF03LP06"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Quatro suspeitos para um único som",
    historia:
      "Aurora chegou ofegante à sede do clube: — Temos um mistério de quatro suspeitos! CASA, PASSO, MOÇA e CEDO — todas têm o som de /s/, mas cada uma escreve esse som de um jeito diferente! Brilha coçou a cabeça: — Como assim, o mesmo som e letras diferentes? — É exatamente isso que vamos investigar hoje — sorriu Aurora.",
    imagemUrl: coruja,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de abrir a investigação.",
    bloco: {
      titulo: "O Caso dos Quatro Suspeitos do Som /s/",
      capaImagemUrl: lupaLike,
      pistas: [
        { imagemUrl: casa, nome: "Uma casa" },
        { imagemUrl: passaro, nome: "Um passarinho" },
      ],
      pergunta: "Sobre o que os detetives vão investigar?",
      hipoteses: [
        { texto: "Como escrever o mesmo som /s/ de jeitos diferentes: S, SS, Ç e C.", imagemUrl: casa },
        { texto: "Onde os passarinhos constroem seus ninhos.", imagemUrl: passaro },
        { texto: "Quantos cômodos tem uma casa.", imagemUrl: casa },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! O caso é sobre as quatro formas de escrever o som /s/.",
      feedbackErro:
        "Releia a pista: 'CASA, PASSO, MOÇA e CEDO — todas têm o som de /s/'. O mistério é sobre as letras, não sobre ninhos ou cômodos.",
      dica: "🔎 Pista: lembre do que significa “casa” — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça quatro palavras-testemunha do caso.",
    cards: [
      {
        palavra: "casa",
        explicacao: "Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S.",
        exemplo: "Brilha mora numa casa perto da floresta.",
        imagemUrl: casa,
      },
      {
        palavra: "passo",
        explicacao: "Quando o SS aparece DOBRADO entre vogais, o som fica de S mesmo, como em 'assado'.",
        exemplo: "Ela deu um passo para trás.",
        imagemUrl: bau,
      },
      {
        palavra: "moça",
        explicacao: "O Ç (cê-cedilha) só aparece antes de A, O ou U, e sempre soa como S.",
        exemplo: "A moça ajudou o clube a resolver o caso.",
        imagemUrl: cadeira,
      },
      {
        palavra: "cedo",
        explicacao: "O C antes de E ou I também soa como S — por isso não precisa de cedilha.",
        exemplo: "Brilha acorda cedo para investigar.",
        imagemUrl: quebraCabeca,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Quatro letras para um som só",
    instrucao: "A posição na palavra é que decide a letra. Leia, observe os exemplos e resolva os desafios.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Entre vogais: SS faz /s/ e S faz /z/",
        explicacao: "Entre duas vogais, um S sozinho vira som de /z/ (CASA, ROSA). Para manter o som /s/ entre vogais, dobramos: PÁSSARO, PASSEIO, PROFESSORA.",
        exemplos: [{"palavra":"passeio","destaque":"ss","motivo":"Som /s/ entre vogais: SS."},{"palavra":"casa","destaque":"s","motivo":"Um S entre vogais soa /z/."},{"palavra":"pássaro","destaque":"ss","motivo":"Som /s/ entre A e A: SS."}],
        desafios: [{"molde":"profe__ora","opcoes":["ss","s","ç"],"correta":0,"frase":"A professora leu o bilhete.","feedbackErro":"Som /s/ entre vogais: dois S."},{"molde":"ca__a","opcoes":["s","ss"],"correta":0,"frase":"A casa do detetive é azul.","feedbackErro":"Aqui o som é /z/: um S só."}],
      },
      {
        tipo: "regraOrtografica",
        regra: "Ç com A, O, U — C com E, I",
        explicacao: "O cedilha (Ç) só aparece antes de A, O e U: CAÇA, AÇÚCAR, CORAÇÃO. Antes de E e I, quem faz o som /s/ é o C: CEBOLA, CIDADE, CINEMA. Não existe ÇE nem ÇI em português.",
        exemplos: [{"palavra":"caça","destaque":"ç","motivo":"Antes de A: Ç."},{"palavra":"açúcar","destaque":"ç","motivo":"Antes de U: Ç."},{"palavra":"cidade","destaque":"c","motivo":"Antes de I: C, nunca Ç."}],
        desafios: [{"molde":"cora__ão","opcoes":["ç","ss","s"],"correta":0,"frase":"O coração bateu forte.","feedbackErro":"Som /s/ antes de Ã/O: usamos Ç."},{"molde":"__inema","opcoes":["c","ç","ss"],"correta":0,"frase":"Fomos ao cinema no sábado.","feedbackErro":"Antes de I nunca é Ç: é C."}],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora reuniu as provas do caso num mapa sonoro. Leia com atenção.",
    leitura: {
      titulo: "Quatro Jeitos, Um Só Som",
      imagemUrl: lupaLike,
      legendaImagem: "O mapa do som /s/",
      destacar: ["CASA", "PASSO", "MOÇA", "CEDO", "entre vogais"],
      paragrafos: [
        "Aurora explicou ao clube: 'O som /s/ tem quatro disfarces. Primeiro, o S sozinho entre vogais na verdade soa como Z, igual em CASA e VASO.'",
        "'Segundo, quando queremos o som de S de verdade entre vogais, dobramos: SS, como em PASSO e ASSADO. Terceiro, o Ç só aparece antes de A, O ou U, como em MOÇA, LAÇO e AÇÚCAR — e sempre soa S.'",
        "'Por fim, o C antes de E ou I já soa S sozinho, sem precisar de cedilha, como em CEDO e CINEMA. Quatro disfarces, um só som — mas cada um tem seu lugar certo!' Brilha desenhou uma tabela no caderno para não esquecer.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Segundo o texto, que som tem o S sozinho entre vogais, como em CASA?",
        opcoes: ["Som de Z", "Som de S", "Nenhum som"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'o S sozinho entre vogais na verdade soa como Z'.",
        feedbackErro: "Releia o primeiro parágrafo: 'o S sozinho entre vogais... soa como Z'.",
        ondeEstaNoTexto: "o S sozinho entre vogais na verdade soa como Z, igual em CASA e VASO.",
        dica: "🔎 Pista: releia no texto o trecho “o S sozinho entre vogais na verdade soa como Z, igual em CASA e VASO.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “Segundo o texto, que som tem o S sozinho entre vogais, como em CASA?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Quando usamos o SS dobrado entre vogais?",
        opcoes: [
          "Quando queremos o som de S de verdade",
          "Quando a palavra é muito grande",
          "Nunca se usa SS entre vogais",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! SS dá o som de S de verdade entre vogais.",
        feedbackErro: "O texto diz: 'quando queremos o som de S de verdade entre vogais, dobramos: SS'.",
        ondeEstaNoTexto: "quando queremos o som de S de verdade entre vogais, dobramos: SS, como em PASSO.",
        dica: "🔎 Pista: releia no texto o trecho “quando queremos o som de S de verdade entre vogais, dobramos: SS, como em PASSO.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “Quando usamos o SS dobrado entre vogais?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Antes de quais letras aparece o Ç?",
        opcoes: ["Antes de A, O ou U", "Antes de E ou I", "Antes de qualquer consoante"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'o Ç só aparece antes de A, O ou U'.",
        feedbackErro: "Releia: 'o Ç só aparece antes de A, O ou U, como em MOÇA'.",
        ondeEstaNoTexto: "o Ç só aparece antes de A, O ou U, como em MOÇA, LAÇO e AÇÚCAR.",
        dica: "🔎 Pista: releia no texto o trecho “o Ç só aparece antes de A, O ou U, como em MOÇA, LAÇO e AÇÚCAR.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “Antes de quais letras aparece o Ç?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem investiga e onde acontece o caso?",
    perguntas: [
      {
        pergunta: "Quem explicou os quatro disfarces do som /s/?",
        opcoes: ["Brilha", "Aurora", "Um passarinho"],
        correta: 1,
        feedbackAcerto: "🎉 Foi Aurora quem explicou o mapa sonoro.",
        feedbackErro: "Releia: 'Aurora explicou ao clube...'",
        dica: "🔎 Pista: lembre do que significa “casa” — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “Quem explicou os quatro disfarces do som /s/?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que Brilha fez para não esquecer a regra?",
        opcoes: [
          "Desenhou uma tabela no caderno",
          "Escreveu uma música",
          "Pintou um quadro",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Brilha desenhou uma tabela no caderno.",
        feedbackErro: "A última frase do texto diz: 'Brilha desenhou uma tabela no caderno para não esquecer'.",
        dica: "🔎 Pista: lembre do que significa “casa” — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “O que Brilha fez para não esquecer a regra?” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As descobertas do caso se embaralharam. Ordene a investigação.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Aurora conta que CASA, PASSO, MOÇA e CEDO têm o mesmo som.", imagemUrl: coruja },
        { id: "p2", texto: "Aurora explica os quatro disfarces: S, SS, Ç e C.", imagemUrl: lupaLike },
        { id: "p3", texto: "Brilha desenha a tabela da regra no caderno.", imagemUrl: quebraCabeca },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você reconstruiu o caso na ordem certa.",
      feedbackErro: "Pense: primeiro vem a PISTA das quatro palavras, depois a EXPLICAÇÃO, e por último o REGISTRO.",
      dica: "🔎 Pista: lembre do que significa “casa” — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do caderno de Brilha.",
    leitura: {
      titulo: "Mais Pistas no Caderno",
      imagemUrl: estrela,
      destacar: ["açúcar", "cinema", "assado"],
      paragrafos: [
        "Brilha achou mais palavras para testar a regra: em AÇÚCAR, o Ç vem antes do U, e soa S.",
        "Em CINEMA, o C vem antes do I e já soa S, sem precisar de cedilha. E em ASSADO, o SS entre vogais garante o som de S de verdade.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que AÇÚCAR usa Ç e não apenas C?",
        opcoes: [
          "Porque o Ç vem antes de A, O ou U",
          "Porque a palavra é grande",
          "Porque não existe regra",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ç aparece antes de A, O ou U — como em AÇÚCAR.",
        feedbackErro: "Releia: 'em AÇÚCAR, o Ç vem antes do U, e soa S'.",
        ondeEstaNoTexto: "em AÇÚCAR, o Ç vem antes do U, e soa S.",
        dica: "🔎 Pista: releia no texto o trecho “em AÇÚCAR, o Ç vem antes do U, e soa S.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “Por que AÇÚCAR usa Ç e não apenas C?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Por que CINEMA usa C e não Ç?",
        opcoes: [
          "Porque o C antes de I já soa S sozinho",
          "Porque cinema é uma palavra estrangeira",
          "Porque o Ç é proibido em qualquer palavra",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Antes de E ou I, o C já soa S, sem cedilha.",
        feedbackErro: "O texto diz: 'em CINEMA, o C vem antes do I e já soa S, sem precisar de cedilha'.",
        ondeEstaNoTexto: "em CINEMA, o C vem antes do I e já soa S, sem precisar de cedilha.",
        dica: "🔎 Pista: releia no texto o trecho “em CINEMA, o C vem antes do I e já soa S, sem precisar de cedilha.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “Por que CINEMA usa C e não Ç?” com essa ideia na cabeça.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Classifique o suspeito certo",
    instrucao: "Arraste cada palavra para a letra (ou letras) que fazem o som /s/ nela.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "O Cofre das Grafias do Som /s/",
      bloco: {
        instrucao: "Preste atenção na posição da letra dentro da palavra antes de arrastar.",
        itens: [
          { id: "i1", texto: "passo", alvoId: "ss" },
          { id: "i2", texto: "moça", alvoId: "c-cedilha" },
          { id: "i3", texto: "cedo", alvoId: "c" },
          { id: "i4", texto: "assado", alvoId: "ss" },
          { id: "i5", texto: "cinema", alvoId: "c" },
          { id: "i6", texto: "laço", alvoId: "c-cedilha" },
          { id: "i7", texto: "massa", alvoId: "ss" },
          { id: "i8", texto: "açude", alvoId: "c-cedilha" },
        ],
        alvos: [
          { id: "ss", nome: "SS (som S entre vogais)", imagemUrl: bau },
          { id: "c-cedilha", nome: "Ç (antes de A, O, U)", imagemUrl: cadeira },
          { id: "c", nome: "C (antes de E, I)", imagemUrl: quebraCabeca },
        ],
        feedbackAcerto: "🎉 Caso resolvido! Você identificou os três disfarces do som /s/.",
        feedbackErro: "Pense de novo: SS entre vogais, Ç antes de A/O/U, C antes de E/I — todos soam /s/.",
        dica: "🔎 Pista: lembre do que significa “casa” — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Use isso para eliminar as alternativas que não combinam.",
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
        titulo: "Parágrafo com o mesmo som",
        comando: "Escreva um parágrafo usando quatro palavras com o som /s/ escritas de jeitos diferentes: com S, SS, C e Ç.",
        linhas: 4,
        modelo: [
          "No almoço tem sopa.",
          "A massa ficou pronta cedo.",
          "Sobrou espaço na mesa.",
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
    titulo: "Leitura de detetive: Quatro Jeitos, Um Só Som",
    instrucao:
      "Detetive lê rápido, mas não atropela. Leia este trecho três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação — respeitando vírgula e ponto. A meta é ler sem tropeçar, não correr.",
    texto: [
      "Aurora explicou ao clube: 'O som /s/ tem quatro disfarces.",
      "Primeiro, o S sozinho entre vogais na verdade soa como Z, igual em CASA e VASO.'",
      "'Segundo, quando queremos o som de S de verdade entre vogais, dobramos: SS, como em PASSO e ASSADO.",
      "Terceiro, o Ç só aparece antes de A, O ou U, como em MOÇA, LAÇO e AÇÚCAR — e sempre soa S.'",
    ],
    metaSegundos: 44,
  },

  momento09_revisao: {
    pontos: [
      "REGRA: entre vogais, S sozinho soa Z (casa); SS dobrado soa S (passo).",
      "REGRA: Ç só aparece antes de A, O, U e sempre soa S (moça, açúcar).",
      "REGRA: C antes de E ou I já soa S, sem precisar de cedilha (cedo, cinema).",
    ],
    miniDesafio: {
      pergunta: "Antes de quais letras o C sozinho já soa como S?",
      opcoes: ["Antes de E ou I", "Antes de A, O ou U", "Antes de qualquer letra"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! C antes de E ou I já tem som de S.",
      feedbackErro: "Releia a explicação: C antes de E ou I não precisa de cedilha porque já soa S.",
      dica: "🔎 Pista: lembre do que significa “casa” — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “Antes de quais letras o C sozinho já soa como S?” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Que som tem o S sozinho entre vogais, como em CASA?",
        opcoes: [
          "Depende só do gosto de quem lê, sem olhar o texto",
          "Som de Z",
          "Som de S",
          "Som de J",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Depende só do gosto de quem lê, sem olhar o texto” não é a resposta. Lembre: entre vogais, S sozinho soa como Z.",
          null,
          "❌ “Som de S” não é a resposta. Lembre: entre vogais, S sozinho soa como Z.",
          "❌ “Som de J” não é a resposta. Lembre: entre vogais, S sozinho soa como Z.",
        ],
        feedbackAcerto: "🎉 Isso! S sozinho entre vogais soa Z.",
        feedbackErro: "Lembre: entre vogais, S sozinho soa como Z.",
        dica: "🔎 Pista: lembre do que significa “casa” — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “1/5 — Que som tem o S sozinho entre vogais, como em CASA?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — Que letras usamos para o som de S de verdade entre vogais?",
        opcoes: [
          "S sozinho",
          "SS dobrado",
          "Ç",
          "É preciso decorar o texto inteiro de cor",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “S sozinho” não é a resposta. Entre vogais, o som de S de verdade precisa do SS dobrado.",
          null,
          "❌ “Ç” não é a resposta. Entre vogais, o som de S de verdade precisa do SS dobrado.",
          "❌ “É preciso decorar o texto inteiro de cor” não é a resposta. Entre vogais, o som de S de verdade precisa do SS dobrado.",
        ],
        feedbackAcerto: "🎉 Correto! SS dobrado dá o som de S de verdade.",
        feedbackErro: "Entre vogais, o som de S de verdade precisa do SS dobrado.",
        dica: "🔎 Pista: lembre do que significa “casa” — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “2/5 — Que letras usamos para o som de S de verdade entre vogais?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — Antes de quais letras aparece o Ç?",
        opcoes: [
          "E ou I",
          "A, O ou U",
          "Qualquer vogal",
          "Usar Ç antes das letras E e I",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “E ou I” não é a resposta. Lembre: o Ç combina só com A, O e U.",
          null,
          "❌ “Qualquer vogal” não é a resposta. Lembre: o Ç combina só com A, O e U.",
          "❌ “Usar Ç antes das letras E e I” não é a resposta. Lembre: o Ç combina só com A, O e U.",
        ],
        feedbackAcerto: "🎉 Isso! Ç só aparece antes de A, O ou U.",
        feedbackErro: "Lembre: o Ç combina só com A, O e U.",
        dica: "🔎 Pista: lembre do que significa “casa” — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “3/5 — Antes de quais letras aparece o Ç?” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — Por que CEDO se escreve com C e não com Ç?",
        opcoes: [
          "Porque o C antes de E já soa S",
          "Porque a palavra é curta",
          "Porque não tem regra",
          "Usar Ç antes das letras E e I",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Porque a palavra é curta” não é a resposta. Lembre: antes de E ou I, o C já soa S sozinho.",
          "❌ “Porque não tem regra” não é a resposta. Lembre: antes de E ou I, o C já soa S sozinho.",
          "❌ “Usar Ç antes das letras E e I” não é a resposta. Lembre: antes de E ou I, o C já soa S sozinho.",
        ],
        feedbackAcerto: "🎉 Isso! C antes de E ou I já soa S, sem cedilha.",
        feedbackErro: "Lembre: antes de E ou I, o C já soa S sozinho.",
        dica: "🔎 Pista: lembre do que significa “casa” — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “4/5 — Por que CEDO se escreve com C e não com Ç?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Qual palavra usa SS corretamente para dar o som de S entre vogais?",
        opcoes: [
          "Passo",
          "Casa",
          "Moça",
          "Usar Ç antes das letras E e I",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Casa” não é a resposta. Pense em qual palavra precisa do S dobrado para soar S entre vogais.",
          "❌ “Moça” não é a resposta. Pense em qual palavra precisa do S dobrado para soar S entre vogais.",
          "❌ “Usar Ç antes das letras E e I” não é a resposta. Pense em qual palavra precisa do S dobrado para soar S entre vogais.",
        ],
        feedbackAcerto: "🎉 Caso encerrado! PASSO usa SS porque o som de S está entre vogais.",
        feedbackErro: "Pense em qual palavra precisa do S dobrado para soar S entre vogais.",
        dica: "🔎 Pista: lembre do que significa “casa” — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: casa — Quando o S está SOZINHO entre duas vogais, ele soa como Z, não como S. Exemplo: Brilha mora numa casa perto da floresta. Agora volte à pergunta “5/5 — Qual palavra usa SS corretamente para dar o som de S entre voga…” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada às quatro grafias do som /s/",
    materiais: ["Papel e lápis", "Rótulos, livros ou embalagens da casa"],
    passos: [
      "1) Com um adulto, procurem palavras com S, SS, Ç e C que soem /s/.",
      "2) Organizem numa tabela de quatro colunas: S, SS, Ç, C.",
      "3) Para cada palavra encontrada, expliquem por que aquela letra foi usada ali.",
      "4) Leiam a tabela em voz alta no fim.",
    ],
    registro: "📝 Uma foto da tabela com as quatro colunas preenchidas.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
