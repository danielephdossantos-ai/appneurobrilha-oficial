import type { AulaPortuguesV4 } from "../../types";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as praia } from "@/assets/neuro-treino/objetos/praia.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-grande.png.asset.json";
import { url as bicicleta } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";
import { url as sorvete } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as calendario } from "@/assets/neuro-treino/objetos/calendario.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as diario } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * Aula 3 — "O Relato do Detetive"
 * -------------------------------------------------------------
 * Um detetive do Clube precisa registrar o que viveu num passeio
 * à praia, em primeira pessoa, respeitando a ordem dos fatos e
 * usando marcadores de tempo.
 *
 * Foco pedagógico:
 *  - Relato pessoal: conta uma experiência vivida por quem escreve.
 *  - 1ª pessoa: "eu fui", "eu vi", "nós brincamos".
 *  - Ordem dos acontecimentos + marcadores de tempo: "primeiro",
 *    "depois", "no fim da tarde", "à noite".
 *
 * BNCC: EF03LP18, EF35LP15, EF35LP17
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-relato-pessoal",
  titulo: "O Relato do Detetive",
  iconeTrilha: "📓",
  bncc: ["EF03LP18", "EF35LP15", "EF35LP17"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O diário de bordo do Clube",
    historia:
      "Brilha achou um caderninho na sede do Clube: era o diário de bordo, onde cada detetive registra o que viveu, em primeira pessoa. — Hoje é sua vez de escrever um RELATO PESSOAL! — disse Brilha. — Conte o que você viveu, na ordem certa, usando 'eu' e palavras de tempo, como 'primeiro' e 'depois'.",
    imagemUrl: diario,
  },

  momento02_previsao: {
    instrucao: "Veja a página do diário de Lia sobre o dia na praia. O que você acha que ela vai contar?",
    bloco: {
      titulo: "Meu dia na praia",
      capaImagemUrl: praia,
      pistas: [
        { imagemUrl: sorvete, nome: "Um sorvete" },
        { imagemUrl: familia, nome: "A família" },
      ],
      recado: {
        rotulo: "Diário de Lia",
        icone: "📓",
        linhas: ["Hoje eu fui à praia com minha família...", "Foi um dia inesquecível!"],
        estilo: "papel",
      },
      pergunta: "Sobre o que essa página do diário vai falar?",
      hipoteses: [
        { texto: "Uma experiência pessoal que Lia viveu na praia, contada por ela mesma.", imagemUrl: praia },
        { texto: "Uma receita de sorvete.", imagemUrl: sorvete },
        { texto: "As regras de um jogo de tabuleiro.", imagemUrl: familia },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Quando alguém escreve 'eu fui', 'eu vivi', está fazendo um RELATO PESSOAL — contando a própria experiência.",
      feedbackErro:
        "Repare na palavra 'EU' no início: 'eu fui à praia'. Isso é sinal de relato pessoal, contando o que a própria Lia viveu.",
      dica: "🔎 Pista: lembre do que significa “relato pessoal” — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Palavras importantes para escrever um bom relato:",
    cards: [
      {
        palavra: "relato pessoal",
        explicacao: "É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós).",
        exemplo: "'Eu fui ao aniversário do meu primo e me diverti muito.'",
        imagemUrl: diario,
      },
      {
        palavra: "marcador de tempo",
        explicacao: "É uma palavra que mostra a ordem dos acontecimentos, como 'primeiro', 'depois', 'em seguida', 'por fim'.",
        exemplo: "'Primeiro nadamos, depois comemos um lanche e, por fim, voltamos pra casa.'",
        imagemUrl: relogio,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler o relato completo de Lia sobre o dia na praia.",
    leitura: {
      titulo: "Meu dia na praia",
      imagemUrl: praia,
      legendaImagem: "Lia e a família na praia",
      destacar: ["Primeiro", "Depois", "No fim da tarde", "eu"],
      paragrafos: [
        "No sábado, eu fui à praia com minha família. Primeiro, eu e meu irmão construímos um castelo de areia bem grande.",
        "Depois, nós entramos no mar e brincamos de pular as ondas. Eu ri tanto que engoli um pouco de água salgada!",
        "No fim da tarde, minha mãe comprou sorvete pra todo mundo. Eu escolhi o de morango. Foi um dos melhores dias da minha vida.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão nele.",
    perguntas: [
      {
        pergunta: "Quem conta essa história?",
        opcoes: ["A mãe de Lia", "A própria Lia, em primeira pessoa", "O irmão de Lia"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Lia usa 'EU' o tempo todo — é ela quem conta, em primeira pessoa.",
        feedbackErro: "Repare nas palavras 'eu fui', 'eu ri' — quem fala assim é a própria autora.",
        ondeEstaNoTexto: "No sábado, eu fui à praia com minha família.",
        dica: "🔎 Pista: releia no texto o trecho “No sábado, eu fui à praia com minha família.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “Quem conta essa história?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que Lia e o irmão fizeram PRIMEIRO?",
        opcoes: ["Comeram sorvete", "Construíram um castelo de areia", "Entraram no mar"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! A palavra 'PRIMEIRO' já indica a primeira ação: construir o castelo.",
        feedbackErro: "A palavra 'primeiro' está no começo do texto — o que vem logo depois dela?",
        ondeEstaNoTexto: "Primeiro, eu e meu irmão construímos um castelo de areia bem grande.",
        dica: "🔎 Pista: releia no texto o trecho “Primeiro, eu e meu irmão construímos um castelo de areia bem grande.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “O que Lia e o irmão fizeram PRIMEIRO?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que aconteceu NO FIM DA TARDE?",
        opcoes: ["Comeram sorvete", "Construíram castelo", "Voltaram pra casa direto"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'No fim da tarde' marca o momento do sorvete.",
        feedbackErro: "Procure a expressão 'no fim da tarde' — o que vem logo depois dela no texto?",
        ondeEstaNoTexto: "No fim da tarde, minha mãe comprou sorvete pra todo mundo.",
        dica: "🔎 Pista: releia no texto o trecho “No fim da tarde, minha mãe comprou sorvete pra todo mundo.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “O que aconteceu NO FIM DA TARDE?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos identificar quem participa do relato e onde ele acontece.",
    perguntas: [
      {
        pergunta: "Quem aparece no relato de Lia?",
        opcoes: ["Só Lia", "Lia, o irmão e a mãe", "Lia e os amigos da escola"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Aparecem LIA, o IRMÃO e a MÃE.",
        feedbackErro: "Releia o texto todo — quem mais participa além de Lia?",
        dica: "🔎 Pista: lembre do que significa “relato pessoal” — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “Quem aparece no relato de Lia?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Onde acontece o relato?",
        opcoes: ["Na escola", "Na praia", "No parque"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! O título já diz: 'Meu dia na PRAIA'.",
        feedbackErro: "O próprio título do relato já dá essa resposta.",
        dica: "🔎 Pista: lembre do que significa “relato pessoal” — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “Onde acontece o relato?” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os momentos do dia de Lia na ordem certa, usando os marcadores de tempo como pista.",
    bloco: {
      instrucao: "Do que aconteceu primeiro ao que aconteceu por último.",
      itens: [
        { id: "r1", texto: "Primeiro, construíram um castelo de areia.", imagemUrl: praia },
        { id: "r2", texto: "Depois, brincaram de pular as ondas do mar.", imagemUrl: bicicleta },
        { id: "r3", texto: "No fim da tarde, comeram sorvete.", imagemUrl: sorvete },
      ],
      ordemCerta: ["r1", "r2", "r3"],
      feedbackAcerto: "🎉 Perfeito! Você usou os marcadores de tempo pra montar a ordem certa.",
      feedbackErro:
        "Repare nas palavras 'primeiro', 'depois' e 'no fim da tarde' no texto — elas mostram a ordem certa.",
      dica: "🔎 Pista: lembre do que significa “relato pessoal” — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho esse novo relato e responda.",
    leitura: {
      titulo: "Meu primeiro dia de bicicleta sem rodinha",
      imagemUrl: bicicleta,
      destacar: ["Primeiro", "Em seguida", "eu"],
      paragrafos: [
        "No domingo, meu pai tirou as rodinhas da minha bicicleta. Primeiro, eu fiquei com medo de cair.",
        "Em seguida, meu pai segurou o banco enquanto eu pedalava devagar. Depois de várias tentativas, eu consegui pedalar sozinho e gritei de alegria!",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem conta essa experiência?",
        opcoes: ["O pai", "A própria criança, em primeira pessoa", "Um amigo"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O texto usa 'eu fiquei', 'eu consegui' — é a própria criança contando.",
        feedbackErro: "Procure as palavras 'eu' no texto — quem fala assim é quem viveu a experiência.",
        ondeEstaNoTexto: "Primeiro, eu fiquei com medo de cair.",
        dica: "🔎 Pista: releia no texto o trecho “Primeiro, eu fiquei com medo de cair.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “Quem conta essa experiência?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que aconteceu PRIMEIRO nesse relato?",
        opcoes: ["A criança pedalou sozinha", "A criança ficou com medo", "O pai tirou as rodinhas e depois foi embora"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A palavra 'primeiro' vem antes de 'eu fiquei com medo'.",
        feedbackErro: "Ache a palavra 'primeiro' no texto e veja o que vem logo depois dela.",
        ondeEstaNoTexto: "Primeiro, eu fiquei com medo de cair.",
        dica: "🔎 Pista: releia no texto o trecho “Primeiro, eu fiquei com medo de cair.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “O que aconteceu PRIMEIRO nesse relato?” com essa ideia na cabeça.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina de Escrita do Detetive",
    instrucao:
      "Três passos de escritor de verdade: primeiro o RASCUNHO, depois a REVISÃO com a lista de conferência e, por último, a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "O seu relato de verdade",
        comando: "Escreva um relato pessoal: conte algo que ACONTECEU com você, na ordem certa, e diga como você se sentiu.",
        linhas: 4,
        modelo: [
          "No sábado eu fui à casa da vovó.",
          "Nós fizemos bolo juntos.",
          "Eu fiquei muito feliz.",
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
    titulo: "Leitura de detetive: Meu dia na praia",
    instrucao:
      "Detetive lê rápido, mas não atropela. Leia este trecho três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação — respeitando vírgula e ponto. A meta é ler sem tropeçar, não correr.",
    texto: [
      "No sábado, eu fui à praia com minha família.",
      "Primeiro, eu e meu irmão construímos um castelo de areia bem grande.",
      "Depois, nós entramos no mar e brincamos de pular as ondas.",
      "Eu ri tanto que engoli um pouco de água salgada!",
      "No fim da tarde, minha mãe comprou sorvete pra todo mundo.",
    ],
    metaSegundos: 35,
  },

  momento09_revisao: {
    pontos: [
      "Relato pessoal conta uma experiência que a própria pessoa viveu.",
      "É escrito em PRIMEIRA PESSOA: 'eu fui', 'eu vi', 'nós brincamos'.",
      "Marcadores de tempo (primeiro, depois, em seguida, no fim da tarde) mostram a ORDEM dos acontecimentos.",
      "Sem marcadores de tempo, quem lê pode se perder na ordem da história.",
    ],
    miniDesafio: {
      pergunta: "Qual dessas frases está em primeira pessoa, marca de relato pessoal?",
      opcoes: ["'Ela foi ao parque ontem.'", "'Eu fui ao parque ontem.'", "'O parque fica perto da escola.'"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 'EU fui' é a marca de primeira pessoa.",
      feedbackErro: "Procure a frase que usa 'EU' — essa é a marca de relato pessoal.",
      dica: "🔎 Pista: lembre do que significa “relato pessoal” — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “Qual dessas frases está em primeira pessoa, marca de relato pessoal?” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um relato pessoal?",
        opcoes: [
          "Um texto que conta uma experiência que a própria pessoa viveu",
          "Uma lista de compras",
          "Uma receita de bolo",
          "Um texto inventado, com personagens mágicos",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Uma lista de compras” não é a resposta. Relato pessoal conta algo que ACONTECEU com quem escreve.",
          "❌ “Uma receita de bolo” não é a resposta. Relato pessoal conta algo que ACONTECEU com quem escreve.",
          "❌ “Um texto inventado, com personagens mágicos” não é a resposta. Relato pessoal conta algo que ACONTECEU com quem escreve.",
        ],
        feedbackAcerto: "🎉 Isso! Relato pessoal conta uma vivência própria.",
        feedbackErro: "Relato pessoal conta algo que ACONTECEU com quem escreve.",
        dica: "🔎 Pista: lembre do que significa “relato pessoal” — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “1/5 — O que é um relato pessoal?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — Relato pessoal é escrito em qual pessoa?",
        opcoes: [
          "Terceira pessoa (ele/ela)",
          "Um texto inventado, com personagens mágicos",
          "Primeira pessoa (eu/nós)",
          "Não importa",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “Terceira pessoa (ele/ela)” não é a resposta. Quem conta a própria vida usa 'EU' e 'NÓS' — primeira pessoa.",
          "❌ “Um texto inventado, com personagens mágicos” não é a resposta. Quem conta a própria vida usa 'EU' e 'NÓS' — primeira pessoa.",
          null,
          "❌ “Não importa” não é a resposta. Quem conta a própria vida usa 'EU' e 'NÓS' — primeira pessoa.",
        ],
        feedbackAcerto: "🎉 Correto! É sempre em primeira pessoa.",
        feedbackErro: "Quem conta a própria vida usa 'EU' e 'NÓS' — primeira pessoa.",
        dica: "🔎 Pista: lembre do que significa “relato pessoal” — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “2/5 — Relato pessoal é escrito em qual pessoa?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — Qual dessas é um marcador de tempo?",
        opcoes: [
          "Nenhuma dessas ideias combina com o que o texto mostra",
          "'Depois'",
          "'Bonito'",
          "'Cachorro'",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Nenhuma dessas ideias combina com o que o texto mostra” não é a resposta. Marcador de tempo indica ORDEM, como 'depois', 'primeiro', 'em seguida'.",
          null,
          "❌ “'Bonito'” não é a resposta. Marcador de tempo indica ORDEM, como 'depois', 'primeiro', 'em seguida'.",
          "❌ “'Cachorro'” não é a resposta. Marcador de tempo indica ORDEM, como 'depois', 'primeiro', 'em seguida'.",
        ],
        feedbackAcerto: "🎉 Isso! 'Depois' indica ordem no tempo.",
        feedbackErro: "Marcador de tempo indica ORDEM, como 'depois', 'primeiro', 'em seguida'.",
        dica: "🔎 Pista: lembre do que significa “relato pessoal” — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “3/5 — Qual dessas é um marcador de tempo?” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — No relato da praia, o que Lia fez no fim da tarde?",
        opcoes: [
          "Construiu castelo",
          "Comeu sorvete",
          "Foi dormir",
          "Um texto inventado, com personagens mágicos",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Construiu castelo” não é a resposta. Releia: 'No fim da tarde, minha mãe comprou...'",
          null,
          "❌ “Foi dormir” não é a resposta. Releia: 'No fim da tarde, minha mãe comprou...'",
          "❌ “Um texto inventado, com personagens mágicos” não é a resposta. Releia: 'No fim da tarde, minha mãe comprou...'",
        ],
        feedbackAcerto: "🎉 Isso mesmo, no fim da tarde a mãe comprou sorvete.",
        feedbackErro: "Releia: 'No fim da tarde, minha mãe comprou...'",
        dica: "🔎 Pista: lembre do que significa “relato pessoal” — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “4/5 — No relato da praia, o que Lia fez no fim da tarde?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Por que marcadores de tempo são importantes no relato?",
        opcoes: [
          "Deixam o texto mais bonito só de enfeite",
          "Ajudam a mostrar a ordem certa dos fatos",
          "Não servem pra nada",
          "Um texto inventado, com personagens mágicos",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Deixam o texto mais bonito só de enfeite” não é a resposta. Marcadores de tempo ajudam quem lê a entender O QUE aconteceu primeiro, depois e por último.",
          null,
          "❌ “Não servem pra nada” não é a resposta. Marcadores de tempo ajudam quem lê a entender O QUE aconteceu primeiro, depois e por último.",
          "❌ “Um texto inventado, com personagens mágicos” não é a resposta. Marcadores de tempo ajudam quem lê a entender O QUE aconteceu primeiro, depois e por último.",
        ],
        feedbackAcerto: "🎉 Exato! Eles organizam a ordem dos acontecimentos.",
        feedbackErro: "Marcadores de tempo ajudam quem lê a entender O QUE aconteceu primeiro, depois e por último.",
        dica: "🔎 Pista: lembre do que significa “relato pessoal” — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: relato pessoal — É um texto que conta algo que a própria pessoa viveu, sempre em primeira pessoa (eu, nós). Exemplo: 'Eu fui ao aniversário do meu primo e me diverti muito.' Agora volte à pergunta “5/5 — Por que marcadores de tempo são importantes no relato?” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Escreva seu próprio relato",
    materiais: ["Papel e lápis (ou caderno de diário)"],
    passos: [
      "1) Escolha um momento legal que você viveu essa semana.",
      "2) Escreva usando 'EU' — conte como se fosse você mesmo contando pra um amigo.",
      "3) Use pelo menos dois marcadores de tempo, como 'primeiro' e 'depois'.",
      "4) Leia seu relato para a família e pergunte se ficou fácil de entender a ordem dos fatos.",
    ],
    registro: "📓 O relato escrito (com pelo menos 3 frases) para compartilhar na próxima aula.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
