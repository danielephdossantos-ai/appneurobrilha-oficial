import type { AulaPortuguesV4 } from "../../types";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";

/**
 * Aula 4 — Pontuação muda tudo
 * -------------------------------------------------------------
 * Missão final da Unidade 3. O Clube descobre que a mesma frase,
 * com pontuação diferente, pode virar um caso completamente novo.
 *
 * Foco pedagógico:
 *  - Ponto final: fecha uma ideia completa.
 *  - Vírgula: separa itens de uma enumeração e isola o vocativo
 *    (quem está sendo chamado).
 *  - Ponto de interrogação: marca pergunta.
 *  - Ponto de exclamação: marca emoção forte, surpresa ou ordem.
 *  - Dois-pontos e travessão: introduzem e marcam a fala de um
 *    personagem no diálogo.
 *
 * BNCC: EF03LP07 (pontuação e efeitos de sentido), EF35LP12
 * (organização textual — coesão e coerência a partir da pontuação).
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-pontuacao-muda-tudo",
  titulo: "Pontuação muda tudo",
  iconeTrilha: "❗",
  bncc: ["EF03LP07", "EF35LP12"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "O sinal que muda o caso inteiro",
    historia:
      "Brilha chegou afobado com um bilhete na mão. — Olhem só: a MESMA frase, escrita duas vezes, mas com sinais diferentes... e o sentido virou outro completamente! Os detetives descobriram hoje que ponto, vírgula, interrogação e exclamação não são só enfeites: eles decidem o que a frase realmente quer dizer. Vamos investigar esses sinais?",
    imagemUrl: papel,
  },

  momento02_previsao: {
    instrucao: "Compare os dois bilhetes abaixo antes de ler o caso completo.",
    bloco: {
      titulo: "Os Dois Bilhetes da Cozinha",
      capaImagemUrl: papel,
      recado: {
        rotulo: "Bilhete 1",
        icone: "📩",
        estilo: "papel",
        linhas: ["Vamos comer, vovó!", "Vamos comer vovó."],
      },
      pistas: [
        { imagemUrl: papel, nome: "Um bilhete" },
        { imagemUrl: bussola, nome: "Uma bússola" },
      ],
      pergunta: "O que muda entre as duas frases do bilhete?",
      hipoteses: [
        { texto: "Nada muda, são exatamente iguais.", imagemUrl: menino },
        { texto: "A vírgula muda quem está sendo chamado para comer.", imagemUrl: papel },
        { texto: "As duas falam sobre futebol.", imagemUrl: bussola },
      ],
      respostaCerta: 1,
      feedbackAcerto:
        "🎉 Isso mesmo! Com vírgula, chamamos a vovó pra comer. Sem vírgula, parece que vamos comer... a vovó! A vírgula do vocativo salva o sentido da frase.",
      feedbackErro:
        "Leia com calma: em uma frase há uma vírgula antes de 'vovó', na outra não. Essa vírgula muda quem está sendo chamado.",
      dica: "🔎 Pista: lembre do que significa “vocativo” — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça os sinais que os detetives vão investigar hoje.",
    cards: [
      {
        palavra: "vocativo",
        explicacao:
          "É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula.",
        exemplo: "Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado.",
        imagemUrl: papel,
      },
      {
        palavra: "enumeração",
        explicacao:
          "É quando listamos vários itens seguidos numa frase. Usamos vírgula para separar cada item.",
        exemplo: "Comprei maçã, pera, uva e melancia.",
        imagemUrl: binoculo,
      },
      {
        palavra: "discurso direto",
        explicacao:
          "É quando reproduzimos a fala exata de alguém. Usamos dois-pontos antes e travessão pra marcar quem fala.",
        exemplo: "Brilha disse:\n— Encontrei a pista!",
        imagemUrl: professora,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "O mesmo texto, sinais diferentes",
    instrucao: "Observe como cada sinal de pontuação muda o sentido da frase.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "O suspeito fugiu.",
            explicacao: "PONTO FINAL: fecha uma ideia completa, uma afirmação calma.",
          },
          {
            texto: "O suspeito fugiu?",
            explicacao: "INTERROGAÇÃO: transforma a afirmação numa pergunta cheia de dúvida.",
          },
          {
            texto: "O suspeito fugiu!",
            explicacao: "EXCLAMAÇÃO: mostra surpresa, susto ou emoção forte diante do fato.",
          },
        ],
      },
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Comi bolo, pipoca e sorvete no aniversário.",
            explicacao: "VÍRGULA NA ENUMERAÇÃO: separa cada item da lista, menos o último, que vem com 'e'.",
          },
          {
            texto: "Aurora, venha ver esta pista!",
            explicacao: "VÍRGULA NO VOCATIVO: isola o nome de quem está sendo chamado — Aurora.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relato e observe como cada sinal muda o clima da cena.",
    leitura: {
      titulo: "O Caso do Grito na Biblioteca",
      imagemUrl: menina,
      legendaImagem: "A cena investigada pelo Clube",
      destacar: ["?", "!", "Sofia,"],
      paragrafos: [
        "Sofia, venha depressa até aqui! — gritou Théo, apontando para a estante.",
        "O que você encontrou? — perguntou Sofia, curiosa.",
        "Théo respondeu: — Encontrei um livro, um mapa e uma chave dourada.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Releia o relato se precisar. Preste atenção nos sinais de pontuação.",
    perguntas: [
      {
        pergunta: "Por que a frase 'Sofia, venha depressa até aqui!' tem vírgula depois de 'Sofia'?",
        opcoes: [
          "Porque Sofia é o vocativo — quem está sendo chamada",
          "Porque a frase é muito longa",
          "Por acaso, não tem motivo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Sofia é chamada por Théo, então o nome vira vocativo e fica isolado por vírgula.",
        feedbackErro: "Repare: Théo está chamando alguém. Esse nome chamado é o vocativo, e sempre vem separado por vírgula.",
        ondeEstaNoTexto: "Sofia, venha depressa até aqui!",
        dica: "🔎 Pista: releia no texto o trecho “Sofia, venha depressa até aqui!”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “Por que a frase 'Sofia, venha depressa até aqui!' tem vírgula depois…” com essa ideia na cabeça.",
      },
      {
        pergunta: "Que sinal marca a pergunta de Sofia?",
        opcoes: ["Ponto final", "Ponto de interrogação", "Vírgula"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! 'O que você encontrou?' termina com interrogação, pois é uma pergunta.",
        feedbackErro: "Toda pergunta termina com o ponto de interrogação (?).",
        ondeEstaNoTexto: "O que você encontrou? — perguntou Sofia, curiosa.",
        dica: "🔎 Pista: releia no texto o trecho “O que você encontrou? — perguntou Sofia, curiosa.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “Que sinal marca a pergunta de Sofia?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que Théo encontrou, segundo a enumeração com vírgulas?",
        opcoes: [
          "Um livro, um mapa e uma chave dourada",
          "Só uma chave",
          "Um livro e nada mais",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! As vírgulas separam os três itens da lista: livro, mapa e chave.",
        feedbackErro: "Releia a última fala de Théo — ele lista três objetos separados por vírgula.",
        ondeEstaNoTexto: "Encontrei um livro, um mapa e uma chave dourada.",
        dica: "🔎 Pista: releia no texto o trecho “Encontrei um livro, um mapa e uma chave dourada.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “O que Théo encontrou, segundo a enumeração com vírgulas?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Observe como o travessão marca quem está falando em cada momento.",
    perguntas: [
      {
        pergunta: "O que o travessão (—) indica antes de 'gritou Théo'?",
        opcoes: [
          "Que ali começa a fala de um personagem",
          "Que a frase acabou",
          "Que é uma pergunta",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O travessão marca a fala direta de um personagem no diálogo.",
        feedbackErro: "No discurso direto, o travessão aparece para introduzir ou marcar a fala de quem conversa.",
        dica: "🔎 Pista: lembre do que significa “vocativo” — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “O que o travessão (—) indica antes de 'gritou Théo'?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Onde essa cena acontece?",
        opcoes: ["Na biblioteca", "No parque", "Na cozinha"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! O título já entrega a pista: 'O Caso do Grito na Biblioteca'.",
        feedbackErro: "O título do caso conta o cenário: biblioteca.",
        dica: "🔎 Pista: lembre do que significa “vocativo” — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “Onde essa cena acontece?” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize a conversa na ordem em que ela realmente aconteceu.",
    bloco: {
      instrucao: "Coloque as falas na ordem certa do diálogo.",
      itens: [
        { id: "p1", texto: "Théo chama: 'Sofia, venha depressa até aqui!'", imagemUrl: menino },
        { id: "p2", texto: "Sofia pergunta: 'O que você encontrou?'", imagemUrl: menina },
        { id: "p3", texto: "Théo responde com a lista: livro, mapa e chave.", imagemUrl: papel },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Primeiro o chamado (vocativo), depois a pergunta, depois a resposta com a enumeração.",
      feedbackErro: "Pense na lógica da conversa: primeiro alguém chama, depois pergunta, depois responde.",
      dica: "🔎 Pista: lembre do que significa “vocativo” — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e observe os sinais de pontuação com atenção.",
    leitura: {
      titulo: "O Bilhete do Portão",
      imagemUrl: professora,
      destacar: ["?", "!", "Marcos,"],
      paragrafos: [
        "Marcos, feche o portão com cuidado! — pediu a professora, séria.",
        "Por que preciso fechar agora? — perguntou Marcos, confuso.",
        "A professora explicou: — Porque o cachorro do vizinho, o gato da escola e as galinhas do pátio podem fugir.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual palavra é o vocativo na primeira fala?",
        opcoes: ["Marcos", "portão", "cuidado"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Marcos' é quem está sendo chamado pela professora — o vocativo.",
        feedbackErro: "O vocativo é o nome de quem é chamado, isolado por vírgula: 'Marcos, feche o portão...'.",
        ondeEstaNoTexto: "Marcos, feche o portão com cuidado!",
        dica: "🔎 Pista: releia no texto o trecho “Marcos, feche o portão com cuidado!”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “Qual palavra é o vocativo na primeira fala?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Quantos animais aparecem na enumeração da professora?",
        opcoes: ["Um", "Dois", "Três"],
        correta: 2,
        feedbackAcerto: "🎉 Correto! Cachorro, gato e galinhas — três itens separados por vírgula.",
        feedbackErro: "Releia contando as vírgulas: 'o cachorro..., o gato... e as galinhas...' são três itens.",
        ondeEstaNoTexto: "o cachorro do vizinho, o gato da escola e as galinhas do pátio podem fugir",
        dica: "🔎 Pista: releia no texto o trecho “o cachorro do vizinho, o gato da escola e as galinhas do pátio podem fugir”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “Quantos animais aparecem na enumeração da professora?” com essa ideia na cabeça.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "O Sinal Certo pra Cada Frase",
    instrucao: "Arraste cada frase para o sinal de pontuação que combina com ela.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Ponto, Interrogação, Exclamação ou Vírgula?",
      bloco: {
        instrucao: "Leia cada frase incompleta e leve pro sinal certo.",
        itens: [
          { id: "i1", texto: "O gato subiu no telhado__", alvoId: "ponto" },
          { id: "i2", texto: "Cadê a chave__", alvoId: "interrogacao" },
          { id: "i3", texto: "Que susto__", alvoId: "exclamacao" },
          { id: "i4", texto: "Comprei pão__ leite e queijo", alvoId: "virgula" },
          { id: "i5", texto: "João__ venha aqui agora", alvoId: "virgula" },
          { id: "i6", texto: "Choveu a tarde inteira__", alvoId: "ponto" },
        ],
        alvos: [
          { id: "ponto", nome: "Ponto final .", descricao: "Fecha uma ideia calma" },
          { id: "interrogacao", nome: "Interrogação ?", descricao: "Marca uma pergunta" },
          { id: "exclamacao", nome: "Exclamação !", descricao: "Marca emoção forte" },
          { id: "virgula", nome: "Vírgula ,", descricao: "Separa itens ou isola o vocativo" },
        ],
        feedbackAcerto: "🎉 Excelente! Você identificou o sinal certo pra cada situação.",
        feedbackErro: "Dica: pergunta pede '?', susto pede '!', lista ou chamado pede ',', afirmação calma pede '.'.",
        dica: "🔎 Pista: lembre do que significa “vocativo” — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Use isso para eliminar as alternativas que não combinam.",
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
        titulo: "A mesma frase, três pontuações",
        comando: "Escreva a MESMA frase três vezes, mudando só a pontuação: com ponto final, com interrogação e com exclamação. Depois explique o que mudou.",
        linhas: 4,
        modelo: [
          "Você chegou.",
          "Você chegou?",
          "Você chegou!",
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
      "PONTO FINAL fecha uma ideia completa, de jeito calmo.",
      "VÍRGULA separa itens de uma lista (enumeração) e isola o VOCATIVO — quem está sendo chamado.",
      "INTERROGAÇÃO marca pergunta; EXCLAMAÇÃO marca emoção forte, surpresa ou ordem.",
      "DOIS-PONTOS anunciam uma fala; TRAVESSÃO marca cada fala do diálogo.",
      "Trocar a pontuação pode mudar completamente o sentido da mesma frase.",
    ],
    miniDesafio: {
      pergunta: "Qual frase está certa para CHAMAR a avó para o jantar?",
      opcoes: ["Vamos jantar avó.", "Vamos jantar, avó!", "Vamos, jantar avó."],
      correta: 1,
      feedbackAcerto: "🎉 Isso! A vírgula antes de 'avó' isola o vocativo e evita a confusão de sentido.",
      feedbackErro: "Sem a vírgula certa antes do nome chamado, a frase pode até parecer que vamos comer a pessoa!",
      dica: "🔎 Pista: lembre do que significa “vocativo” — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “Qual frase está certa para CHAMAR a avó para o jantar?” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Para que serve o ponto de interrogação?",
        opcoes: [
          "Um enfeite do texto, que não muda o sentido da frase",
          "Marcar uma pergunta",
          "Separar itens de uma lista",
          "Fechar uma ideia calma",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Um enfeite do texto, que não muda o sentido da frase” não é a resposta. O ponto de interrogação (?) é usado sempre que a frase é uma pergunta.",
          null,
          "❌ “Separar itens de uma lista” não é a resposta. O ponto de interrogação (?) é usado sempre que a frase é uma pergunta.",
          "❌ “Fechar uma ideia calma” não é a resposta. O ponto de interrogação (?) é usado sempre que a frase é uma pergunta.",
        ],
        feedbackAcerto: "🎉 Isso! Toda pergunta termina com ponto de interrogação (?).",
        feedbackErro: "O ponto de interrogação (?) é usado sempre que a frase é uma pergunta.",
        dica: "🔎 Pista: lembre do que significa “vocativo” — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “1/5 — Para que serve o ponto de interrogação?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — Em 'Comprei maçã, pera e uva.', para que serve a vírgula?",
        opcoes: [
          "Para chamar alguém",
          "Para separar os itens da lista",
          "Um enfeite do texto, que não muda o sentido da frase",
          "Para marcar surpresa",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Para chamar alguém” não é a resposta. Quando listamos vários itens seguidos, usamos vírgula entre eles (menos antes do 'e' final).",
          null,
          "❌ “Um enfeite do texto, que não muda o sentido da frase” não é a resposta. Quando listamos vários itens seguidos, usamos vírgula entre eles (menos antes do 'e' final).",
          "❌ “Para marcar surpresa” não é a resposta. Quando listamos vários itens seguidos, usamos vírgula entre eles (menos antes do 'e' final).",
        ],
        feedbackAcerto: "🎉 Correto! Nessa frase, a vírgula separa cada item da enumeração.",
        feedbackErro: "Quando listamos vários itens seguidos, usamos vírgula entre eles (menos antes do 'e' final).",
        dica: "🔎 Pista: lembre do que significa “vocativo” — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “2/5 — Em 'Comprei maçã, pera e uva.', para que serve a vírgula?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — Qual frase usa corretamente a vírgula do vocativo?",
        opcoes: [
          "Pedro, olhe essa pista!",
          "Pedro olhe, essa pista!",
          "Pedro olhe essa, pista!",
          "Um enfeite do texto, que não muda o sentido da frase",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "❌ “Pedro olhe, essa pista!” não é a resposta. O vocativo (nome de quem é chamado) precisa ficar separado por vírgula do resto da frase.",
          "❌ “Pedro olhe essa, pista!” não é a resposta. O vocativo (nome de quem é chamado) precisa ficar separado por vírgula do resto da frase.",
          "❌ “Um enfeite do texto, que não muda o sentido da frase” não é a resposta. O vocativo (nome de quem é chamado) precisa ficar separado por vírgula do resto da frase.",
        ],
        feedbackAcerto: "🎉 Isso! 'Pedro' é quem está sendo chamado, por isso vem isolado por vírgula logo no início.",
        feedbackErro: "O vocativo (nome de quem é chamado) precisa ficar separado por vírgula do resto da frase.",
        dica: "🔎 Pista: lembre do que significa “vocativo” — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “3/5 — Qual frase usa corretamente a vírgula do vocativo?” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — 'Que descoberta incrível!' usa qual sinal e por quê?",
        opcoes: [
          "Interrogação, porque é uma pergunta",
          "É preciso decorar o texto inteiro de cor",
          "Exclamação, porque mostra emoção forte",
          "Vírgula, porque separa uma lista",
        ],
        correta: 2,
        feedbackOpcoes: [
          "❌ “Interrogação, porque é uma pergunta” não é a resposta. Quando a frase expressa emoção forte, surpresa ou ordem, usamos o ponto de exclamação (!).",
          "❌ “É preciso decorar o texto inteiro de cor” não é a resposta. Quando a frase expressa emoção forte, surpresa ou ordem, usamos o ponto de exclamação (!).",
          null,
          "❌ “Vírgula, porque separa uma lista” não é a resposta. Quando a frase expressa emoção forte, surpresa ou ordem, usamos o ponto de exclamação (!).",
        ],
        feedbackAcerto: "🎉 Exatamente! A exclamação (!) marca a emoção de surpresa e empolgação da frase.",
        feedbackErro: "Quando a frase expressa emoção forte, surpresa ou ordem, usamos o ponto de exclamação (!).",
        dica: "🔎 Pista: lembre do que significa “vocativo” — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “4/5 — 'Que descoberta incrível!' usa qual sinal e por quê?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — No diálogo 'Théo disse:\\n— Encontrei a pista!', o travessão serve para...",
        opcoes: [
          "Separar itens de uma lista",
          "Marcar o início da fala do personagem",
          "Fechar a frase de forma calma",
          "Adivinhar qualquer coisa, sem usar nenhuma pista do texto",
        ],
        correta: 1,
        feedbackOpcoes: [
          "❌ “Separar itens de uma lista” não é a resposta. No discurso direto, o travessão (—) indica que ali começa a fala de alguém.",
          null,
          "❌ “Fechar a frase de forma calma” não é a resposta. No discurso direto, o travessão (—) indica que ali começa a fala de alguém.",
          "❌ “Adivinhar qualquer coisa, sem usar nenhuma pista do texto” não é a resposta. No discurso direto, o travessão (—) indica que ali começa a fala de alguém.",
        ],
        feedbackAcerto: "🎉 Isso! O travessão marca onde começa a fala de cada personagem no diálogo.",
        feedbackErro: "No discurso direto, o travessão (—) indica que ali começa a fala de alguém.",
        dica: "🔎 Pista: lembre do que significa “vocativo” — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: vocativo — É a palavra usada para CHAMAR alguém na frase. Ele sempre fica separado por vírgula. Exemplo: Em 'Vamos comer, vovó!', VOVÓ é o vocativo — é quem está sendo chamado. Agora volte à pergunta “5/5 — No diálogo 'Théo disse:\\n— Encontrei a pista!', o travessão ser…” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 A Frase que Muda de Sentido",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Escolha uma frase curta com o nome de alguém da família, como 'Vamos comer mamãe'.",
      "2) Escreva a frase SEM vírgula e leia em voz alta — repare no sentido estranho.",
      "3) Agora escreva a mesma frase COM a vírgula certa antes do nome chamado.",
      "4) Mostre as duas frases pra família e explique o que a vírgula mudou.",
    ],
    registro: "📝 As duas frases escritas (com e sem vírgula) e a explicação da diferença de sentido.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
    medalha: "Insígnia do Analista de Frases",
  },
};
