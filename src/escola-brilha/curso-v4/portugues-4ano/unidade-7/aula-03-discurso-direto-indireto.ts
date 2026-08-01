import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Unidade 7 · Aula 3 — O Eco da Fala
 * -------------------------------------------------------------
 * Foco: discurso direto e indireto, e a pontuação do diálogo
 * (travessão, dois-pontos, aspas).
 * BNCC: EF04LP14 (marcas gráficas do discurso direto),
 * EF04LP20 (diferença entre discurso direto e indireto).
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-discurso-direto-indireto",
  titulo: "O Eco da Fala",
  iconeTrilha: "💬",
  bncc: ["EF04LP14", "EF04LP20"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Duas formas de contar a mesma fala",
    historia:
      "Na caverna do eco, a expedição ouviu Brilha falar duas vezes a mesma coisa de jeitos diferentes. Primeiro ele disse: — Vamos com cuidado por aqui! Depois, alguém contou: Brilha disse QUE deveríamos ir com cuidado por ali. Marina ficou curiosa: — As duas contam a mesma coisa, mas de um jeito diferente! Vamos descobrir os segredos do discurso direto e do discurso indireto?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de entrar na caverna do eco.",
    bloco: {
      titulo: "O Eco da Fala",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: lapis, nome: "Um travessão (—)" },
        { imagemUrl: livro, nome: "A palavra QUE contando uma fala" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "Como registrar a fala de alguém de duas formas: direta (com travessão) ou indireta (contada com a palavra QUE).",
          imagemUrl: estrela,
        },
        { texto: "Como desenhar uma caverna.", imagemUrl: arvore },
        { texto: "Quantas letras cabem numa palavra.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos descobrir como contar a fala de alguém direta ou indiretamente.",
      feedbackErro: "Pense no eco: ele repete a fala de dois jeitos. É sobre isso que vamos investigar.",
      dica: "🧭 Pista de explorador: discurso DIRETO repete as palavras exatas de alguém (com travessão ou aspas); discurso INDIRETO conta a fala com outras palavras, usando QUE. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora conhece o nome de cada eco antes de escutá-lo.",
    cards: [
      {
        palavra: "discurso direto",
        explicacao: "Quando reproduzimos exatamente as palavras que alguém falou, geralmente com travessão ou aspas.",
        exemplo: "Brilha disse: — Vamos com cuidado!",
        imagemUrl: estrela,
      },
      {
        palavra: "discurso indireto",
        explicacao: "Quando contamos o que alguém disse, sem repetir as palavras exatas, usando a palavra QUE.",
        exemplo: "Brilha disse que deveríamos ir com cuidado.",
        imagemUrl: bussola,
      },
      {
        palavra: "travessão",
        explicacao: "Sinal de pontuação ( — ) usado para marcar o início da fala de um personagem no discurso direto.",
        exemplo: "— Olha essa trilha! disse Marina.",
        imagemUrl: lapis,
      },
      {
        palavra: "verbo de elocução",
        explicacao: "Verbo que indica a ação de falar: disse, perguntou, respondeu, gritou, sussurrou.",
        exemplo: "Ela PERGUNTOU: — Já chegamos?",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Do travessão ao QUE: transformando falas",
    instrucao: "Veja a mesma fala sendo contada de forma direta e depois de forma indireta.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Discurso direto usa travessão ou aspas; discurso indireto usa a palavra QUE",
        explicacao:
          "No discurso direto, escrevemos a fala tal como foi dita, marcada por travessão (no início de cada fala, em novo parágrafo) ou por aspas: Ela disse: — Estou com fome. No discurso indireto, contamos a mesma ideia sem repetir as palavras exatas, ligando a fala ao verbo com a palavra QUE, e trocando o tempo verbal e as pessoas do verbo quando necessário: Ela disse QUE estava com fome. Antes da fala direta, usamos dois-pontos (:) e o verbo de elocução (disse, perguntou, gritou).",
        exemplos: [
          { palavra: "— Estou com fome.", destaque: "—", motivo: "Travessão marca o início da fala direta." },
          { palavra: "disse que estava com fome", destaque: "que", motivo: "QUE liga o verbo à fala contada indiretamente." },
          { palavra: "perguntou: — Já chegamos?", destaque: ":", motivo: "Dois-pontos antes da fala direta." },
        ],
        desafios: [
          {
            molde: "Marina disse_ vamos com cuidado.",
            opcoes: [": —", "que", ","],
            correta: 0,
            frase: "Marina disse: — Vamos com cuidado!",
            feedbackErro: "Antes da fala direta usamos dois-pontos e travessão: disse: —",
          },
          {
            molde: "Brilha disse _ deveríamos ir com cuidado.",
            opcoes: ["que", ": —", "!"],
            correta: 0,
            frase: "Brilha disse que deveríamos ir com cuidado.",
            feedbackErro: "No discurso indireto usamos a palavra QUE para ligar a fala contada.",
          },
          {
            molde: "_ Já chegamos? perguntou Marina.",
            opcoes: ["—", "que", ":"],
            correta: 0,
            frase: "— Já chegamos? perguntou Marina.",
            feedbackErro: "O travessão marca o início da fala direta de um personagem.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou a descoberta no diário de bordo da expedição.",
    leitura: {
      titulo: "O Diário do Eco da Fala",
      imagemUrl: pergaminho,
      legendaImagem: "Página do diário de bordo",
      destacar: ["discurso direto", "discurso indireto", "travessão", "que"],
      paragrafos: [
        "Existem duas formas de contar o que alguém falou. No DISCURSO DIRETO, repetimos exatamente as palavras da pessoa, usando travessão ou aspas: — Vamos com cuidado! disse Brilha.",
        "Antes de uma fala direta, costumamos usar dois-pontos (:) seguidos de travessão, e um verbo que indica a ação de falar, como DISSE, PERGUNTOU ou GRITOU.",
        "No DISCURSO INDIRETO, contamos a mesma ideia com nossas próprias palavras, sem repetir a fala exata, ligando tudo com a palavra QUE: Brilha disse QUE deveríamos ir com cuidado.",
        "Quando passamos do discurso direto para o indireto, às vezes o tempo do verbo muda: 'Estou com fome' vira 'disse que ESTAVA com fome'. Conhecer os dois jeitos ajuda a entender melhor histórias e diálogos.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "O que é o discurso direto?",
        opcoes: [
          "Repetir exatamente as palavras que a pessoa falou",
          "Contar a fala com outras palavras",
          "Um sinal de pontuação",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Discurso direto repete a fala exata.",
        feedbackErro: "Releia: 'No DISCURSO DIRETO, repetimos exatamente as palavras da pessoa'.",
        ondeEstaNoTexto: "repetimos exatamente as palavras da pessoa",
        dica: "🧭 Pista de explorador: volte ao texto e releia o primeiro parágrafo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Repetir exatamente as palavras que a pessoa falou”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Que palavra costuma ligar a fala no discurso indireto?",
        opcoes: ["QUE", "TRAVESSÃO", "PONTO"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A palavra QUE liga a fala contada.",
        feedbackErro: "Releia: 'ligando tudo com a palavra QUE'.",
        ondeEstaNoTexto: "ligando tudo com a palavra QUE",
        dica: "🧭 Pista de explorador: releia o terceiro parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “QUE”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que pode mudar quando passamos do discurso direto para o indireto?",
        opcoes: [
          "O tempo do verbo",
          "A cor da página",
          "O número de personagens",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! O tempo do verbo pode mudar.",
        feedbackErro: "Releia: 'às vezes o tempo do verbo muda: Estou com fome vira disse que ESTAVA com fome'.",
        ondeEstaNoTexto: "às vezes o tempo do verbo muda",
        dica: "🧭 Pista de explorador: releia o último parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O tempo do verbo”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem faz a descoberta e onde ela é registrada?",
    perguntas: [
      {
        pergunta: "Onde a expedição fez essa descoberta?",
        opcoes: ["Na caverna do eco", "Numa loja da cidade", "Dentro de um livro de matemática"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A descoberta foi feita na caverna do eco.",
        feedbackErro: "Releia a motivação: 'Na caverna do eco, a expedição ouviu Brilha falar...'.",
        dica: "🧭 Pista de explorador: releia o início da motivação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Na caverna do eco”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Quem percebeu que as duas falas contavam a mesma coisa de jeito diferente?",
        opcoes: ["Marina", "Um passarinho", "Um adulto desconhecido"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Marina fez essa observação.",
        feedbackErro: "Volte à motivação: foi Marina quem ficou curiosa com as duas falas.",
        dica: "🧭 Pista de explorador: releia a fala de Marina na motivação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Marina”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para transformar uma fala direta em indireta.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Leia a fala direta com travessão ou aspas.", imagemUrl: livro },
        { id: "p2", texto: "Retire o travessão e acrescente a palavra QUE.", imagemUrl: bussola },
        { id: "p3", texto: "Ajuste o tempo do verbo, se necessário.", imagemUrl: lapis },
        { id: "p4", texto: "Releia a frase indireta e confira se faz sentido.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa para transformar a fala.",
      feedbackErro: "Pense: primeiro se lê a fala direta, depois se troca o travessão pelo QUE, ajusta o verbo e revisa.",
      dica: "🧭 Pista de explorador: a fala direta original vem sempre primeiro na investigação.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um trecho de uma história e responda.",
    leitura: {
      titulo: "O Diálogo na Trilha",
      imagemUrl: arvore,
      destacar: ["perguntou", "respondeu que", "—"],
      paragrafos: [
        "Marina parou de repente e perguntou: — Ouviram esse barulho? Brilha respondeu que era apenas o vento entre as folhas.",
        "Mais tarde, Marina contou para os colegas que Brilha tinha dito que era só o vento, mas ela ainda estava com um pouco de medo.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual trecho do texto está em discurso direto?",
        opcoes: [
          "— Ouviram esse barulho?",
          "Brilha respondeu que era apenas o vento",
          "Marina contou para os colegas",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A fala com travessão é o discurso direto.",
        feedbackErro: "Releia: '— Ouviram esse barulho?' tem travessão, marca de discurso direto.",
        ondeEstaNoTexto: "— Ouviram esse barulho?",
        dica: "🧭 Pista de explorador: procure o trecho com travessão no texto.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “— Ouviram esse barulho?”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Como Brilha respondeu, segundo o texto (discurso indireto)?",
        opcoes: [
          "Que era apenas o vento entre as folhas",
          "Que era um animal perigoso",
          "Que não tinha ouvido nada",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Ele respondeu que era o vento.",
        feedbackErro: "Releia: 'Brilha respondeu que era apenas o vento entre as folhas.'",
        ondeEstaNoTexto: "Brilha respondeu que era apenas o vento entre as folhas",
        dica: "🧭 Pista de explorador: releia a segunda frase do primeiro parágrafo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Que era apenas o vento entre as folhas”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Classifique a fala",
    instrucao: "Arraste cada frase até a gaveta certa: discurso direto ou discurso indireto.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "As Gavetas do Eco",
      bloco: {
        instrucao: "Pense: a frase repete a fala exata (com travessão) ou conta com QUE?",
        itens: [
          { id: "i1", texto: "— Vamos embora! disse ela.", alvoId: "direto" },
          { id: "i2", texto: "Ela disse que vamos embora.", alvoId: "indireto" },
          { id: "i3", texto: "— Estou com medo, sussurrou Marina.", alvoId: "direto" },
          { id: "i4", texto: "Marina sussurrou que estava com medo.", alvoId: "indireto" },
          { id: "i5", texto: "Brilha perguntou: — Já chegamos?", alvoId: "direto" },
          { id: "i6", texto: "Brilha perguntou se já tínhamos chegado.", alvoId: "indireto" },
          { id: "i7", texto: "— Cuidado com a pedra! gritou o guia.", alvoId: "direto" },
          { id: "i8", texto: "O guia gritou que tomássemos cuidado com a pedra.", alvoId: "indireto" },
        ],
        alvos: [
          { id: "direto", nome: "Discurso direto", imagemUrl: lapis, descricao: "Repete a fala com travessão" },
          { id: "indireto", nome: "Discurso indireto", imagemUrl: bussola, descricao: "Conta a fala com QUE" },
        ],
        feedbackAcerto: "🎉 Excelente! Você organizou as gavetas do eco.",
        feedbackErro: "Veja se a frase tem travessão (direto) ou a palavra QUE (indireto).",
        dica: "🧭 Pista de explorador: travessão = direto; QUE = indireto.",
      },
    },
  },

  momento_escrita: {
    titulo: "Diário de Bordo do Explorador",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Diálogo da expedição",
        comando:
          "Escreva um pequeno diálogo entre dois exploradores da expedição, usando pelo menos 2 falas em discurso direto (com travessão) e depois reescreva uma delas em discurso indireto (com QUE).",
        linhas: 6,
        modelo: [
          "— Olha essa pegada estranha! disse Marina.",
          "— Deve ser de um animal grande, respondeu Brilha.",
          "Depois, Marina contou para os colegas que Brilha tinha dito que a pegada era de um animal grande.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim.",
          "Usei travessão para marcar cada fala direta.",
          "Usei dois-pontos antes de uma fala direta.",
          "Reescrevi pelo menos uma fala em discurso indireto com QUE.",
          "Li em voz alta e consertei o que ficou estranho.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: O Eco da Fala",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO, dando voz a cada personagem.",
    texto: [
      "— Escutem esse eco! gritou Brilha, apontando para a caverna escura.",
      "Marina respondeu que também tinha ouvido e que parecia a própria voz voltando.",
      "Foi assim que a expedição aprendeu a diferença entre contar uma fala e repeti-la exatamente.",
    ],
    metaSegundos: 31,
  },

  momento09_revisao: {
    pontos: [
      "Discurso direto repete exatamente as palavras da pessoa, com travessão ou aspas.",
      "Discurso indireto conta a mesma fala com outras palavras, ligadas por QUE.",
      "Antes da fala direta, usamos dois-pontos e um verbo de elocução (disse, perguntou).",
      "Ao passar do discurso direto para o indireto, o tempo do verbo pode mudar.",
    ],
    miniDesafio: {
      pergunta: "Qual frase está em discurso indireto?",
      opcoes: ["Ela disse que estava com fome.", "— Estou com fome! disse ela.", "Estou com fome."],
      correta: 0,
      feedbackAcerto: "🎉 Isso! A frase com QUE está em discurso indireto.",
      feedbackErro: "Releia a explicação: discurso indireto usa a palavra QUE.",
      dica: "🧭 Pista de explorador: procure a palavra QUE.",
      reensino: "📚 Vamos rever juntos: a resposta certa é “Ela disse que estava com fome.”. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o discurso direto?",
        opcoes: ["Repetir exatamente as palavras da pessoa", "Contar a fala com outras palavras", "Um sinal de pontuação", "O plural da fala"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Discurso direto repete a fala exata.",
        feedbackErro: "Lembre: discurso direto = fala exata.",
        feedbackOpcoes: [
          null,
          "❌ Isso é o discurso indireto, não o direto.",
          "❌ Sinal de pontuação é o travessão, não o discurso em si.",
          "❌ Discurso direto não tem plural, é um tipo de fala.",
        ],
        dica: "🧭 Pista de explorador: direto = palavras exatas.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Repetir exatamente as palavras da pessoa”.",
      },
      {
        pergunta: "2/5 — Que sinal marca o início da fala no discurso direto?",
        opcoes: ["Travessão", "Vírgula", "Ponto de interrogação", "Cedilha"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Travessão marca a fala direta.",
        feedbackErro: "O sinal usado é o travessão (—).",
        feedbackOpcoes: [
          null,
          "❌ Vírgula separa termos, não marca fala.",
          "❌ Ponto de interrogação é usado em perguntas, não marca a fala em si.",
          "❌ Cedilha é usada em C antes de A, O, U.",
        ],
        dica: "🧭 Pista de explorador: o sinal parece um tracinho longo.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Travessão”.",
      },
      {
        pergunta: "3/5 — Qual palavra costuma ligar a fala no discurso indireto?",
        opcoes: ["Que", "Mas", "Ou", "Com"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A palavra QUE liga a fala contada.",
        feedbackErro: "No discurso indireto usamos a palavra QUE.",
        feedbackOpcoes: [
          null,
          "❌ MAS indica oposição, não liga a fala indireta.",
          "❌ OU indica escolha, não liga a fala indireta.",
          "❌ COM indica companhia, não liga a fala indireta.",
        ],
        dica: "🧭 Pista de explorador: pense em 'ela disse QUE...'.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Que”.",
      },
      {
        pergunta: "4/5 — Qual frase está em discurso direto?",
        opcoes: ["— Já chegamos? perguntou Marina.", "Marina perguntou se já tínhamos chegado.", "Marina perguntou sobre a chegada.", "Marina fez uma pergunta qualquer."],
        correta: 0,
        feedbackAcerto: "🎉 Exato! O travessão indica discurso direto.",
        feedbackErro: "Procure a frase com travessão, marca do discurso direto.",
        feedbackOpcoes: [
          null,
          "❌ Essa frase usa SE, é discurso indireto.",
          "❌ Essa frase conta a pergunta, não repete as palavras.",
          "❌ Essa frase só resume, não repete a fala exata.",
        ],
        dica: "🧭 Pista de explorador: procure o travessão.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “— Já chegamos? perguntou Marina.”",
      },
      {
        pergunta: "5/5 — O que pode mudar ao transformar discurso direto em indireto?",
        opcoes: [
          "O tempo do verbo",
          "A quantidade de personagens",
          "O nome da história",
          "O título do livro",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! O tempo do verbo pode mudar.",
        feedbackErro: "Releia: o tempo do verbo pode mudar de direto para indireto.",
        feedbackOpcoes: [
          null,
          "❌ O número de personagens não muda ao transformar a fala.",
          "❌ O título da história continua o mesmo.",
          "❌ O nome do livro não é afetado pela transformação da fala.",
        ],
        dica: "🧭 Pista de explorador: pense em 'estou' virando 'estava'.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “O tempo do verbo”.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada aos diálogos",
    materiais: ["Papel e lápis", "Um livro de histórias com diálogos"],
    passos: [
      "1) Junto com um adulto, encontrem 3 falas em discurso direto num livro ou história.",
      "2) Marquem o travessão ou as aspas de cada fala encontrada.",
      "3) Transformem uma dessas falas em discurso indireto, usando QUE.",
      "4) Leiam em voz alta as duas versões e comparem como soam diferente.",
    ],
    registro: "📝 Uma anotação com a fala direta encontrada e sua versão em discurso indireto.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
