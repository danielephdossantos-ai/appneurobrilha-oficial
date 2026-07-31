import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as sorvete } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as futebol } from "@/assets/neuro-treino/objetos/futebol.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as quadro } from "@/assets/neuro-treino/objetos/quadro.png.asset.json";

/**
 * Aula 2 — "Fato ou Opinião?"
 * -------------------------------------------------------------
 * O Clube investiga um "caso confuso": um depoimento cheio de
 * fatos misturados com opiniões. Os detetives precisam separar
 * o que é FATO (comprovável) do que é OPINIÃO (achismo).
 *
 * Foco pedagógico:
 *  - Fato: pode ser checado/comprovado; não muda de pessoa pra pessoa.
 *  - Opinião: é o que alguém ACHA; muda de pessoa pra pessoa.
 *  - Marcas linguísticas de opinião: "eu acho", "na minha opinião",
 *    "é o melhor/pior", "eu adoro/odeio".
 *
 * BNCC: EF03LP20, EF35LP15, EF35LP17
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-fato-ou-opiniao",
  titulo: "Fato ou Opinião?",
  iconeTrilha: "🔎",
  bncc: ["EF03LP20", "EF35LP15", "EF35LP17"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O depoimento confuso",
    historia:
      "Brilha recebeu um depoimento sobre o jogo de futebol da escola, mas estava tudo misturado: coisas que realmente aconteceram e coisas que era só a opinião de quem escreveu. — Detetive de verdade separa FATO de OPINIÃO! — disse Brilha, pegando a lupa. — Vamos treinar esse olhar investigativo?",
    imagemUrl: lupa,
  },

  momento02_previsao: {
    instrucao: "Olhe esse cartaz sobre o jogo de ontem. Ele mistura fato e opinião — o que você acha que vamos aprender a separar?",
    bloco: {
      titulo: "O caso do depoimento confuso",
      capaImagemUrl: quadro,
      pistas: [
        { imagemUrl: futebol, nome: "Um jogo de futebol" },
        { imagemUrl: lupa, nome: "Uma lupa de investigação" },
      ],
      recado: {
        rotulo: "Depoimento da torcedora",
        icone: "⚽",
        linhas: [
          "O time da escola venceu por 3 a 1.",
          "Foi o jogo mais emocionante do ano!",
        ],
        estilo: "papel",
      },
      pergunta: "O que vamos aprender a fazer com esse tipo de texto?",
      hipoteses: [
        { texto: "Separar o que é fato (comprovável) do que é opinião (achismo).", imagemUrl: lupa },
        { texto: "Decorar o nome de todos os times do Brasil.", imagemUrl: bola },
        { texto: "Desenhar uma bola de futebol.", imagemUrl: futebol },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! No cartaz, o placar '3 a 1' é um FATO — pode ser checado. Já 'o mais emocionante' é OPINIÃO de quem escreveu.",
      feedbackErro:
        "Repare: uma frase dá um número (placar) que pode ser conferido. A outra usa uma palavra de opinião ('mais emocionante'). Vamos aprender a separar isso.",
      dica: "🔎 Pista: lembre do que significa “fato” — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras-chave dessa investigação:",
    cards: [
      {
        palavra: "fato",
        explicacao:
          "É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala.",
        exemplo: "'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio.",
        imagemUrl: futebol,
      },
      {
        palavra: "opinião",
        explicacao:
          "É o que uma pessoa ACHA, sente ou prefere. Pode mudar de pessoa pra pessoa.",
        exemplo: "'Eu acho que esse foi o melhor jogo do ano.' — isso é opinião, outra pessoa pode achar diferente.",
        imagemUrl: menino,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler o depoimento completo da torcedora Bia sobre o jogo.",
    leitura: {
      titulo: "Depoimento de Bia sobre o jogo",
      imagemUrl: futebol,
      legendaImagem: "O jogo de ontem na escola",
      destacar: ["eu acho", "3 a 1", "melhor"],
      paragrafos: [
        "Ontem, o time da nossa escola venceu o time do bairro vizinho por 3 a 1.",
        "Eu acho que esse foi o melhor jogo do ano, porque todo mundo torceu muito e fez bastante barulho.",
        "O jogo terminou às 16h30, e o goleiro Pedro defendeu um pênalti no final. Na minha opinião, ele merecia ser o jogador do jogo.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto e identifique cada informação.",
    perguntas: [
      {
        pergunta: "Qual foi o placar do jogo? (Isso é um fato ou opinião?)",
        opcoes: ["3 a 1 — é um fato, pode ser checado", "3 a 1 — é uma opinião", "Não tem placar no texto"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O placar é um número real — dá pra conferir. É um FATO.",
        feedbackErro: "Releia a primeira frase: '3 a 1' é uma informação que pode ser comprovada. É FATO.",
        ondeEstaNoTexto: "…venceu o time do bairro vizinho por 3 a 1.",
        dica: "🔎 Pista: releia no texto o trecho “…venceu o time do bairro vizinho por 3 a 1.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “Qual foi o placar do jogo? (Isso é um fato ou opinião?)” com essa ideia na cabeça.",
      },
      {
        pergunta: "Qual frase mostra a OPINIÃO de Bia?",
        opcoes: [
          "'O jogo terminou às 16h30.'",
          "'Eu acho que esse foi o melhor jogo do ano.'",
          "'O goleiro Pedro defendeu um pênalti.'",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Exato! 'Eu acho' é uma marca linguística de opinião — mostra o que Bia PENSA, não um fato checável.",
        feedbackErro: "Procure a frase que começa com 'Eu acho' — essa expressão sempre indica opinião.",
        ondeEstaNoTexto: "Eu acho que esse foi o melhor jogo do ano…",
        dica: "🔎 Pista: releia no texto o trecho “Eu acho que esse foi o melhor jogo do ano…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “Qual frase mostra a OPINIÃO de Bia?” com essa ideia na cabeça.",
      },
      {
        pergunta: "A hora que o jogo terminou (16h30) é fato ou opinião?",
        opcoes: ["Fato, porque pode ser conferido no relógio", "Opinião, porque Bia inventou", "Nenhum dos dois"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Horário é informação checável — FATO.",
        feedbackErro: "Um horário é algo que aconteceu de verdade e pode ser comprovado. É FATO.",
        ondeEstaNoTexto: "O jogo terminou às 16h30…",
        dica: "🔎 Pista: releia no texto o trecho “O jogo terminou às 16h30…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “A hora que o jogo terminou (16h30) é fato ou opinião?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos ver quem fala no texto e onde a cena acontece.",
    perguntas: [
      {
        pergunta: "Quem é a autora do depoimento?",
        opcoes: ["O goleiro Pedro", "A torcedora Bia", "A diretora da escola"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O depoimento é de BIA, a torcedora.",
        feedbackErro: "O título do texto já diz: 'Depoimento de Bia'.",
        dica: "🔎 Pista: lembre do que significa “fato” — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “Quem é a autora do depoimento?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Onde aconteceu o jogo?",
        opcoes: ["Num estádio de outra cidade", "Na escola", "Numa praça"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! O texto fala do 'time da NOSSA ESCOLA'.",
        feedbackErro: "Releia a primeira frase — o time que jogou é o 'da nossa escola'.",
        dica: "🔎 Pista: lembre do que significa “fato” — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “Onde aconteceu o jogo?” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize essas frases do depoimento na ordem em que apareceram no texto.",
    bloco: {
      instrucao: "Ordem: início → meio → fim do relato.",
      itens: [
        { id: "f1", texto: "O time da escola venceu por 3 a 1.", imagemUrl: futebol },
        { id: "f2", texto: "Eu acho que foi o melhor jogo do ano.", imagemUrl: menino },
        { id: "f3", texto: "O goleiro Pedro defendeu um pênalti no final.", imagemUrl: bola },
      ],
      ordemCerta: ["f1", "f2", "f3"],
      feedbackAcerto: "🎉 Muito bem! Você seguiu a ordem certa do relato de Bia.",
      feedbackErro:
        "Pense: primeiro vem o resultado do jogo, depois a opinião sobre ele, e por último o detalhe do pênalti no final.",
      dica: "🔎 Pista: lembre do que significa “fato” — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho esse novo depoimento e classifique as informações.",
    leitura: {
      titulo: "Depoimento de Rafa sobre a chuva",
      imagemUrl: chuva,
      destacar: ["na minha opinião", "20 minutos"],
      paragrafos: [
        "Ontem choveu forte por 20 minutos durante o recreio.",
        "Na minha opinião, foi a chuva mais chata do mês, porque estragou nossa brincadeira de pega-pega.",
      ],
    },
    perguntas: [
      {
        pergunta: "'Choveu forte por 20 minutos' é...",
        opcoes: ["Um fato, porque é uma medida de tempo checável", "Uma opinião de Rafa", "Nem fato nem opinião"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Duração de tempo é informação checável — FATO.",
        feedbackErro: "20 minutos é uma medida — pode ser comprovada. É FATO.",
        ondeEstaNoTexto: "Ontem choveu forte por 20 minutos…",
        dica: "🔎 Pista: releia no texto o trecho “Ontem choveu forte por 20 minutos…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “'Choveu forte por 20 minutos' é...” com essa ideia na cabeça.",
      },
      {
        pergunta: "Qual expressão do texto mostra que é uma opinião?",
        opcoes: ["'Ontem choveu'", "'Na minha opinião'", "'Durante o recreio'"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'NA MINHA OPINIÃO' é a marca clássica de opinião.",
        feedbackErro: "Procure a expressão que já tem a palavra 'opinião' dentro dela.",
        ondeEstaNoTexto: "Na minha opinião, foi a chuva mais chata do mês…",
        dica: "🔎 Pista: releia no texto o trecho “Na minha opinião, foi a chuva mais chata do mês…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “Qual expressão do texto mostra que é uma opinião?” com essa ideia na cabeça.",
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
        titulo: "Um fato e uma opinião",
        comando: "Escreva um parágrafo com DOIS fatos (que dá para provar) e UMA opinião sua. No fim, marque qual frase é a opinião.",
        linhas: 4,
        modelo: [
          "A escola tem 12 salas.",
          "As aulas começam às 7h.",
          "Eu acho o recreio curto demais.",
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
      "FATO é algo que aconteceu de verdade e pode ser checado (números, datas, horários, nomes).",
      "OPINIÃO é o que alguém ACHA ou SENTE — pode mudar de pessoa pra pessoa.",
      "Palavras como 'eu acho', 'na minha opinião', 'é o melhor/pior', 'eu adoro/odeio' são marcas de opinião.",
      "Bom detetive da palavra sempre pergunta: 'isso dá pra provar, ou é só o que essa pessoa pensa?'",
    ],
    miniDesafio: {
      pergunta: "Qual frase é uma OPINIÃO?",
      opcoes: [
        "'A escola tem 500 alunos.'",
        "'Esse é o melhor lanche da cantina!'",
        "'A aula começa às 7h.'",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 'O melhor' é julgamento pessoal — OPINIÃO.",
      feedbackErro: "As outras duas trazem números checáveis (fatos). A frase com 'melhor' é opinião.",
      dica: "🔎 Pista: lembre do que significa “fato” — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “Qual frase é uma OPINIÃO?” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um FATO?",
        opcoes: [
          "Algo que aconteceu e pode ser comprovado",
          "Tudo o que sai no jornal é sempre opinião de alguém",
          "Algo que alguém inventou",
          "Uma preferência pessoal",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Tudo o que sai no jornal é sempre opinião de alguém” não é a resposta. Fato é o que realmente aconteceu e pode ser checado.",
          "❌ “Algo que alguém inventou” não é a resposta. Fato é o que realmente aconteceu e pode ser checado.",
          "❌ “Uma preferência pessoal” não é a resposta. Fato é o que realmente aconteceu e pode ser checado.",
        ],
        feedbackAcerto: "🎉 Isso! Fato é comprovável.",
        feedbackErro: "Fato é o que realmente aconteceu e pode ser checado.",
        dica: "🔎 Pista: lembre do que significa “fato” — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “1/5 — O que é um FATO?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — 'Eu acho que...' é uma marca de:",
        opcoes: [
          "Fato",
          "É preciso decorar o texto inteiro de cor",
          "Opinião",
          "Título",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “Fato” não é a resposta. Essa expressão mostra o que a pessoa PENSA — é opinião.",
          "❌ “É preciso decorar o texto inteiro de cor” não é a resposta. Essa expressão mostra o que a pessoa PENSA — é opinião.",
          null,
          "❌ “Título” não é a resposta. Essa expressão mostra o que a pessoa PENSA — é opinião.",
        ],
        feedbackAcerto: "🎉 Correto! 'Eu acho' sempre indica opinião.",
        feedbackErro: "Essa expressão mostra o que a pessoa PENSA — é opinião.",
        dica: "🔎 Pista: lembre do que significa “fato” — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “2/5 — 'Eu acho que...' é uma marca de:” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — 'O jogo terminou às 16h30' é:",
        opcoes: [
          "Fato",
          "Opinião",
          "Basta olhar as figuras e ignorar o que está escrito",
          "Nem um nem outro",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Opinião” não é a resposta. Horário pode ser comprovado no relógio — é FATO.",
          "❌ “Basta olhar as figuras e ignorar o que está escrito” não é a resposta. Horário pode ser comprovado no relógio — é FATO.",
          "❌ “Nem um nem outro” não é a resposta. Horário pode ser comprovado no relógio — é FATO.",
        ],
        feedbackAcerto: "🎉 Isso! Horário é checável — FATO.",
        feedbackErro: "Horário pode ser comprovado no relógio — é FATO.",
        dica: "🔎 Pista: lembre do que significa “fato” — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “3/5 — 'O jogo terminou às 16h30' é:” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — Qual frase é uma OPINIÃO?",
        opcoes: [
          "'A escola fica na rua das Flores.'",
          "'Esse foi o pior filme que eu já vi.'",
          "Tudo o que sai no jornal é sempre opinião de alguém",
          "'A turma tem 25 alunos.'",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “'A escola fica na rua das Flores.'” não é a resposta. As outras trazem dados checáveis. A com 'pior' é opinião.",
          null,
          "❌ “Tudo o que sai no jornal é sempre opinião de alguém” não é a resposta. As outras trazem dados checáveis. A com 'pior' é opinião.",
          "❌ “'A turma tem 25 alunos.'” não é a resposta. As outras trazem dados checáveis. A com 'pior' é opinião.",
        ],
        feedbackAcerto: "🎉 Isso! 'O pior' é julgamento pessoal.",
        feedbackErro: "As outras trazem dados checáveis. A com 'pior' é opinião.",
        dica: "🔎 Pista: lembre do que significa “fato” — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “4/5 — Qual frase é uma OPINIÃO?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Por que é importante saber diferenciar fato de opinião?",
        opcoes: [
          "Tudo o que sai no jornal é sempre opinião de alguém",
          "Para não confundir o que é verdade com o que é só a ideia de alguém",
          "Para escrever textos mais longos",
          "Não é importante",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Tudo o que sai no jornal é sempre opinião de alguém” não é a resposta. Saber separar fato de opinião ajuda a não confundir verdade com achismo.",
          null,
          "❌ “Para escrever textos mais longos” não é a resposta. Saber separar fato de opinião ajuda a não confundir verdade com achismo.",
          "❌ “Não é importante” não é a resposta. Saber separar fato de opinião ajuda a não confundir verdade com achismo.",
        ],
        feedbackAcerto: "🎉 Exatamente! Isso ajuda a entender melhor notícias e depoimentos.",
        feedbackErro: "Saber separar fato de opinião ajuda a não confundir verdade com achismo.",
        dica: "🔎 Pista: lembre do que significa “fato” — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: fato — É algo que realmente aconteceu e pode ser comprovado. Não muda dependendo de quem fala. Exemplo: 'O jogo começou às 15h.' — isso é um fato, dá pra checar no relógio. Agora volte à pergunta “5/5 — Por que é importante saber diferenciar fato de opinião?” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça aos fatos e opiniões",
    materiais: ["Papel e lápis", "Um jornal, revista ou notícia de TV/celular com a família"],
    passos: [
      "1) Assista ou leia uma notícia curta com a família.",
      "2) Anote uma frase que seja FATO (algo checável).",
      "3) Anote uma frase que seja OPINIÃO (algo que alguém acha).",
      "4) Explique para a família por que você classificou cada uma assim.",
    ],
    registro: "📝 As duas frases anotadas (uma de fato, uma de opinião) para mostrar na próxima aula.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
