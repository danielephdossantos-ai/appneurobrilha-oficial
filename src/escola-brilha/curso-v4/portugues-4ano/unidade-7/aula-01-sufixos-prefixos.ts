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
 * Unidade 7 · Aula 1 — A Oficina das Peças da Palavra
 * -------------------------------------------------------------
 * Foco: prefixos e sufixos na formação de palavras (des-, in-, re-,
 * -oso, -mente, -inho, -eiro), usando como pano de fundo textos do
 * campo da vida cotidiana (carta de reclamação e boleto), gêneros
 * ricos em palavras derivadas.
 * BNCC: EF04LP09 (ler boletos/faturas do campo da vida cotidiana),
 * EF04LP10 (ler cartas pessoais de reclamação).
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-sufixos-prefixos",
  titulo: "A Oficina das Peças da Palavra",
  iconeTrilha: "🧩",
  bncc: ["EF04LP09", "EF04LP10"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Palavras montadas como peças de encaixe",
    historia:
      "A expedição encontrou uma oficina cheia de gavetas: uma só com PEDACINHOS DO COMEÇO (des-, in-, re-) e outra só com PEDACINHOS DO FIM (-oso, -mente, -inho). Brilha ergueu duas peças: — Olha só: FELIZ + -MENTE vira FELIZMENTE. Cada peça muda o sentido da palavra! Vamos aprender a montar e desmontar essas palavras?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de abrir as gavetas da oficina.",
    bloco: {
      titulo: "A Oficina das Peças da Palavra",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: lapis, nome: "Um pedacinho de palavra" },
        { imagemUrl: estrela, nome: "Uma palavra nova brilhando" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "Como pedacinhos no começo e no fim das palavras (prefixos e sufixos) mudam o sentido delas.",
          imagemUrl: estrela,
        },
        { texto: "Quantas letras cabem numa palavra.", imagemUrl: livro },
        { texto: "Como desenhar uma gaveta de madeira.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos descobrir como prefixo e sufixo mudam (ou até invertem) o sentido de uma palavra.",
      feedbackErro:
        "Pense na oficina: ela guarda pedacinhos que se ENCAIXAM na palavra. É sobre isso que vamos investigar.",
      dica: "🧭 Pista de explorador: prefixo vem ANTES da palavra (des-FELIZ) e sufixo vem DEPOIS (feliz-MENTE). Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora conhece o nome de cada ferramenta antes de usá-la.",
    cards: [
      {
        palavra: "radical",
        explicacao: "É a parte principal da palavra, que carrega o sentido base.",
        exemplo: "Em FELIZMENTE, o radical é FELIZ.",
        imagemUrl: estrela,
      },
      {
        palavra: "prefixo",
        explicacao: "Pedacinho que vem ANTES do radical e muda o sentido da palavra, às vezes para o contrário.",
        exemplo: "FELIZ → INFELIZ (in- inverte o sentido).",
        imagemUrl: bussola,
      },
      {
        palavra: "sufixo",
        explicacao: "Pedacinho que vem DEPOIS do radical e pode mudar a classe ou a intensidade da palavra.",
        exemplo: "FELIZ → FELIZMENTE (-mente transforma em advérbio).",
        imagemUrl: lapis,
      },
      {
        palavra: "palavra derivada",
        explicacao: "É a palavra nova, formada quando se junta um prefixo ou sufixo a um radical.",
        exemplo: "PEDRA → PEDREIRO é uma palavra derivada com o sufixo -EIRO.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Montando e desmontando palavras",
    instrucao: "Veja o radical ganhar uma peça no começo ou no fim — e observe o sentido mudar.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Prefixo (antes) e sufixo (depois) mudam o sentido do radical",
        explicacao:
          "Prefixos como DES-, IN-, RE- ficam ANTES do radical e costumam trazer ideia de contrário ou repetição: FAZER → DESFAZER (contrário), FELIZ → INFELIZ (contrário), FAZER → REFAZER (repetir). Sufixos como -OSO, -INHO, -EIRO, -MENTE ficam DEPOIS do radical e podem indicar qualidade, tamanho, profissão ou transformar em advérbio: CHUVA → CHUVOSO, CASA → CASINHA, PEDRA → PEDREIRO, RÁPIDO → RAPIDAMENTE.",
        exemplos: [
          { palavra: "desfazer", destaque: "des-", motivo: "Prefixo que indica o contrário de FAZER." },
          { palavra: "chuvoso", destaque: "-oso", motivo: "Sufixo que indica 'cheio de chuva'." },
          { palavra: "pedreiro", destaque: "-eiro", motivo: "Sufixo que indica profissão relacionada a PEDRA." },
        ],
        desafios: [
          {
            molde: "in_feliz",
            opcoes: ["", "des", "re"],
            correta: 0,
            frase: "Ele ficou infeliz com a notícia.",
            feedbackErro: "O prefixo certo é IN-: INFELIZ é o contrário de FELIZ.",
          },
          {
            molde: "past_",
            opcoes: ["el", "oso", "eiro"],
            correta: 2,
            frase: "O pasteleiro fez pastéis deliciosos.",
            feedbackErro: "PASTEL + -EIRO forma a profissão: PASTELEIRO.",
          },
          {
            molde: "medo_",
            opcoes: ["oso", "mente", "eiro"],
            correta: 0,
            frase: "Aquele filme era medonho e medroso.",
            feedbackErro: "MEDO + -OSO forma MEDROSO, quem sente muito medo.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou a descoberta no diário de bordo da expedição.",
    leitura: {
      titulo: "O Diário das Peças da Palavra",
      imagemUrl: pergaminho,
      legendaImagem: "Página do diário de bordo",
      destacar: ["prefixo", "sufixo", "radical", "derivada"],
      paragrafos: [
        "Toda palavra tem um pedaço principal, o RADICAL, que carrega o sentido base. É nele que encaixamos outras peças para formar palavras novas.",
        "Quando encaixamos uma peça ANTES do radical, chamamos de PREFIXO. Prefixos como DES-, IN-, RE- costumam trazer a ideia de contrário (FAZER → DESFAZER) ou de repetição (FAZER → REFAZER).",
        "Quando encaixamos uma peça DEPOIS do radical, chamamos de SUFIXO. Sufixos como -OSO, -INHO, -EIRO e -MENTE mudam a intensidade, o tamanho, a profissão ou até a classe da palavra: CHUVA → CHUVOSO, PEDRA → PEDREIRO, RÁPIDO → RAPIDAMENTE.",
        "A palavra nova, formada com prefixo ou sufixo, se chama PALAVRA DERIVADA — porque ela deriva (vem) de outra palavra menor, o radical.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "O que é o radical de uma palavra?",
        opcoes: ["O pedaço principal, que carrega o sentido base", "A última letra da palavra", "Um sinal de pontuação"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O radical carrega o sentido base da palavra.",
        feedbackErro: "Releia: 'Toda palavra tem um pedaço principal, o RADICAL, que carrega o sentido base.'",
        ondeEstaNoTexto: "o RADICAL, que carrega o sentido base",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “o RADICAL, que carrega o sentido base”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O pedaço principal, que carrega o sentido base”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Onde fica o prefixo em relação ao radical?",
        opcoes: ["Antes do radical", "Depois do radical", "Não tem posição fixa"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Prefixo vem sempre antes do radical.",
        feedbackErro: "Releia: 'Quando encaixamos uma peça ANTES do radical, chamamos de PREFIXO.'",
        ondeEstaNoTexto: "uma peça ANTES do radical, chamamos de PREFIXO",
        dica: "🧭 Pista de explorador: PRÉ significa 'antes' — pense na palavra PRÉ-vio.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Antes do radical”. Prefixo = peça que vem antes. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Por que a palavra formada com prefixo ou sufixo se chama 'derivada'?",
        opcoes: ["Porque ela vem (deriva) de uma palavra menor, o radical", "Porque é sempre maior que outras palavras", "Porque não tem sentido"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Derivada = que deriva de outra palavra.",
        feedbackErro: "Releia o último parágrafo: 'porque ela deriva (vem) de outra palavra menor, o radical'.",
        ondeEstaNoTexto: "porque ela deriva (vem) de outra palavra menor, o radical",
        dica: "🧭 Pista de explorador: releia o último parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque ela vem (deriva) de uma palavra menor, o radical”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem faz a descoberta e onde ela é registrada?",
    perguntas: [
      {
        pergunta: "Onde Brilha registrou a descoberta sobre prefixos e sufixos?",
        opcoes: ["No diário de bordo da expedição", "Numa placa da estrada", "Num bilhete perdido"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A descoberta foi registrada no diário de bordo.",
        feedbackErro: "Releia o título: 'O Diário das Peças da Palavra' — é onde tudo foi anotado.",
        dica: "🧭 Pista de explorador: releia o título da leitura guiada.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “No diário de bordo da expedição”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Quais duas peças Brilha juntou na motivação para formar FELIZMENTE?",
        opcoes: ["FELIZ + -MENTE", "IN- + FELIZ", "FELIZ + -OSO"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! FELIZ + -MENTE vira FELIZMENTE.",
        feedbackErro: "Volte à motivação: Brilha ergueu FELIZ e -MENTE.",
        dica: "🧭 Pista de explorador: releia a história da motivação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “FELIZ + -MENTE”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para descobrir o sentido de uma palavra derivada.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Encontre o radical, o pedaço com o sentido principal.", imagemUrl: estrela },
        { id: "p2", texto: "Veja se há uma peça ANTES do radical: é o prefixo.", imagemUrl: bussola },
        { id: "p3", texto: "Veja se há uma peça DEPOIS do radical: é o sufixo.", imagemUrl: lapis },
        { id: "p4", texto: "Junte tudo e descubra o novo sentido da palavra derivada.", imagemUrl: livro },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa para montar o quebra-cabeça das palavras.",
      feedbackErro: "Pense: primeiro se acha o radical, depois se procura prefixo e sufixo, e só então se junta tudo.",
      dica: "🧭 Pista de explorador: o radical vem sempre primeiro na investigação.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um trecho de uma carta e responda.",
    leitura: {
      titulo: "A Carta de Reclamação da Vovó",
      imagemUrl: livro,
      destacar: ["desligado", "reembolso", "carinhosamente"],
      paragrafos: [
        "Prezada loja, escrevo esta carta porque o ventilador que comprei chegou desligado e não voltou a funcionar. Peço a gentileza de um reembolso o quanto antes.",
        "A vovó de Marina assinou a carta carinhosamente e explicou: — Viu, netinha? DESligado tem o prefixo DES-, de contrário. CarinhosaMENTE tem o sufixo -MENTE, que vira advérbio.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual prefixo aparece na palavra DESLIGADO?",
        opcoes: ["DES-", "RE-", "IN-"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! DES- indica o contrário de LIGADO.",
        feedbackErro: "Releia: 'DESligado tem o prefixo DES-, de contrário.'",
        ondeEstaNoTexto: "DESligado tem o prefixo DES-, de contrário",
        dica: "🧭 Pista de explorador: volte ao texto e releia a fala da vovó.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “DES-”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que a vovó pediu na carta?",
        opcoes: ["Um reembolso", "Um ventilador novo de presente", "Uma carta de resposta"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Ela pediu 'a gentileza de um reembolso'.",
        feedbackErro: "Releia: 'Peço a gentileza de um reembolso o quanto antes.'",
        ondeEstaNoTexto: "Peço a gentileza de um reembolso o quanto antes",
        dica: "🧭 Pista de explorador: releia o fim do primeiro parágrafo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um reembolso”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte a palavra derivada",
    instrucao: "Arraste cada radical até a gaveta certa: prefixo ou sufixo, conforme o pedido.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "As Gavetas da Oficina",
      bloco: {
        instrucao: "Pense se a peça muda o começo (prefixo) ou o fim (sufixo) da palavra.",
        itens: [
          { id: "i1", texto: "desfazer (des-)", alvoId: "prefixo" },
          { id: "i2", texto: "infeliz (in-)", alvoId: "prefixo" },
          { id: "i3", texto: "refazer (re-)", alvoId: "prefixo" },
          { id: "i4", texto: "chuvoso (-oso)", alvoId: "sufixo" },
          { id: "i5", texto: "pedreiro (-eiro)", alvoId: "sufixo" },
          { id: "i6", texto: "rapidamente (-mente)", alvoId: "sufixo" },
          { id: "i7", texto: "casinha (-inha)", alvoId: "sufixo" },
          { id: "i8", texto: "desligar (des-)", alvoId: "prefixo" },
        ],
        alvos: [
          { id: "prefixo", nome: "Prefixo", imagemUrl: bussola, descricao: "Peça antes do radical" },
          { id: "sufixo", nome: "Sufixo", imagemUrl: lapis, descricao: "Peça depois do radical" },
        ],
        feedbackAcerto: "🎉 Excelente! Você organizou as gavetas da oficina da palavra.",
        feedbackErro: "Fale a palavra e veja se a peça destacada vem antes ou depois do radical.",
        dica: "🧭 Pista de explorador: prefixo = antes; sufixo = depois.",
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
        titulo: "Texto com palavras derivadas",
        comando:
          "Escreva um parágrafo contando uma pequena reclamação (por exemplo, sobre um brinquedo quebrado) usando pelo menos 4 palavras com prefixo ou sufixo (desligado, infeliz, refazer, cuidadosamente, pedreiro...).",
        linhas: 5,
        modelo: [
          "Meu carrinho de controle remoto chegou desligado e não funcionou.",
          "Fiquei bem infeliz, mas minha mãe disse que poderíamos refazer o pedido.",
          "Ela escreveu uma carta cuidadosamente explicando o problema.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Usei pelo menos um conectivo (porque, então, mas, além disso).",
          "Li em voz alta e consertei o que ficou estranho.",
          "Usei pelo menos 4 palavras com prefixo ou sufixo.",
          "Sublinhei mentalmente o radical de cada palavra derivada.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: A Oficina das Peças",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO. A meta não é correr: é ler como quem conta.",
    texto: [
      "Na oficina da palavra, cada pedacinho encaixado muda um pouco o sentido da história.",
      "Um DES- na frente pode desfazer o que estava feito, e um -MENTE no fim transforma um jeito de ser em um jeito de agir.",
      "Por isso o bom escritor conhece essas peças: elas ajudam a escrever com mais precisão e riqueza.",
    ],
    metaSegundos: 30,
  },

  momento09_revisao: {
    pontos: [
      "Radical é o pedaço principal da palavra, que carrega o sentido base.",
      "Prefixo vem ANTES do radical (des-, in-, re-) e muda o sentido, às vezes para o contrário.",
      "Sufixo vem DEPOIS do radical (-oso, -inho, -eiro, -mente) e muda a intensidade, o tamanho, a profissão ou a classe.",
      "A palavra nova formada com prefixo ou sufixo é chamada de palavra derivada.",
    ],
    miniDesafio: {
      pergunta: "Em INFELIZ, qual é o prefixo?",
      opcoes: ["IN-", "-MENTE", "FELIZ"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! IN- é o prefixo que indica o contrário.",
      feedbackErro: "Releia a explicação: IN- vem antes do radical FELIZ.",
      dica: "🧭 Pista de explorador: prefixo fica antes do radical.",
      reensino: "📚 Vamos rever juntos: a resposta certa é “IN-”. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o radical de uma palavra?",
        opcoes: ["O pedaço principal, com o sentido base", "A última sílaba", "Um sinal gráfico", "O plural da palavra"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Radical carrega o sentido base.",
        feedbackErro: "Lembre: radical é o pedaço principal da palavra.",
        feedbackOpcoes: [
          null,
          "❌ A última sílaba não é o radical, é apenas parte dele às vezes.",
          "❌ Sinal gráfico é acento ou pontuação, não radical.",
          "❌ Plural é outra forma da palavra, não o radical.",
        ],
        dica: "🧭 Pista de explorador: radical carrega o sentido base da palavra.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “O pedaço principal, com o sentido base”.",
      },
      {
        pergunta: "2/5 — Onde fica o prefixo?",
        opcoes: ["Antes do radical", "Depois do radical", "No meio da palavra", "Nunca aparece"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Prefixo vem antes do radical.",
        feedbackErro: "Prefixo é a peça que vem ANTES do radical.",
        feedbackOpcoes: [
          null,
          "❌ Depois do radical é o sufixo, não o prefixo.",
          "❌ Prefixo não fica no meio, fica antes.",
          "❌ Prefixo existe e aparece em muitas palavras.",
        ],
        dica: "🧭 Pista de explorador: PRÉ = antes.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Antes do radical”.",
      },
      {
        pergunta: "3/5 — Qual palavra tem sufixo -OSO?",
        opcoes: ["Chuvoso", "Desfazer", "Infeliz", "Refazer"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! CHUVA + -OSO = CHUVOSO.",
        feedbackErro: "As outras têm prefixo (des-, in-, re-), não sufixo -oso.",
        feedbackOpcoes: [
          null,
          "❌ DESfazer tem prefixo DES-, não sufixo -OSO.",
          "❌ INfeliz tem prefixo IN-, não sufixo -OSO.",
          "❌ REfazer tem prefixo RE-, não sufixo -OSO.",
        ],
        dica: "🧭 Pista de explorador: -OSO fica no FIM da palavra.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Chuvoso”.",
      },
      {
        pergunta: "4/5 — RAPIDAMENTE é formada por qual sufixo?",
        opcoes: ["-mente", "-oso", "-inho", "des-"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! RÁPIDO + -MENTE forma um advérbio.",
        feedbackErro: "O sufixo -MENTE costuma transformar a palavra em advérbio.",
        feedbackOpcoes: [
          null,
          "❌ -OSO indicaria 'cheio de', não é o caso aqui.",
          "❌ -INHO indicaria tamanho pequeno, não é o caso.",
          "❌ DES- é prefixo, e vem antes, não depois.",
        ],
        dica: "🧭 Pista de explorador: -MENTE forma advérbios de modo.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “-mente”.",
      },
      {
        pergunta: "5/5 — Por que a palavra formada com prefixo ou sufixo é chamada 'derivada'?",
        opcoes: [
          "Porque deriva (vem) de uma palavra menor",
          "Porque é sempre uma palavra estrangeira",
          "Porque não tem radical",
          "Porque é sempre proparoxítona",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! Ela deriva do radical.",
        feedbackErro: "Releia: 'porque ela deriva (vem) de outra palavra menor, o radical.'",
        feedbackOpcoes: [
          null,
          "❌ Palavra derivada pode ser totalmente da língua portuguesa.",
          "❌ Toda palavra derivada tem um radical.",
          "❌ Isso depende da sílaba tônica, não da derivação.",
        ],
        dica: "🧭 Pista de explorador: derivada = vem de outra palavra.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Porque deriva (vem) de uma palavra menor”.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada aos prefixos e sufixos",
    materiais: ["Papel e lápis", "Um livro, revista ou embalagem qualquer da casa"],
    passos: [
      "1) Junto com um adulto, escolham 6 palavras com prefixo ou sufixo em rótulos, livros ou placas.",
      "2) Separem o radical de cada palavra encontrada.",
      "3) Classifiquem: a peça extra é prefixo (antes) ou sufixo (depois)?",
      "4) Inventem uma nova palavra derivada trocando o prefixo ou sufixo de uma delas.",
    ],
    registro: "📝 Uma foto da lista com radical, prefixo/sufixo e a nova palavra inventada.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
