import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";

/**
 * Unidade 8 · Aula 1 — A Carta e o Diário do Clube
 * -------------------------------------------------------------
 * Fase 7 (cobertura BNCC) do 3º ano: gêneros da vida cotidiana.
 * A criança LÊ e PRODUZ carta pessoal e diário, reconhecendo a
 * formatação própria (local/data, saudação, corpo, despedida,
 * assinatura), usando pronomes e evitando repetição de palavras.
 *
 * BNCC: EF03LP12, EF03LP13, EF03LP17, EF35LP06, EF35LP14, EF35LP09
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-carta-e-diario",
  titulo: "A Carta e o Diário do Clube",
  iconeTrilha: "✉️",
  bncc: ["EF03LP12", "EF03LP13", "EF03LP17", "EF35LP06", "EF35LP14", "EF35LP09"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Duas escritas guardadas na mesma gaveta",
    historia:
      "Aurora abriu a gaveta secreta do clube e tirou dois papéis. — Detetive, olhe bem: os dois são escritos à mão, os dois falam de sentimentos. Mas um foi feito para VIAJAR até outra pessoa, e o outro para FICAR guardado comigo. Um é carta. O outro é diário. Quem descobre a diferença aprende a escrever os dois.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Antes de abrir, observe as pistas dos dois papéis.",
    bloco: {
      titulo: "A Carta e o Diário do Clube",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: papel, nome: "Um papel com 'Querida vovó' no alto" },
        { imagemUrl: livro, nome: "Um caderninho com data em cada página" },
      ],
      pergunta: "Qual é a diferença entre esses dois textos?",
      hipoteses: [
        { texto: "A carta é escrita PARA alguém; o diário é escrito para mim mesmo.", imagemUrl: papel },
        { texto: "Os dois são a mesma coisa, só mudam de nome.", imagemUrl: livro },
        { texto: "Carta é sempre digitada e diário é sempre desenhado.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🔍 Isso! Carta tem destinatário; diário é conversa com você mesmo.",
      feedbackErro:
        "Repare no 'Querida vovó': carta se escreve PARA alguém. O diário fica com quem escreveu.",
      dica: "Quem recebe a carta? E quem lê o diário?",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de quem escreve carta.",
    cards: [
      {
        palavra: "destinatário",
        explicacao: "É a pessoa que vai RECEBER a carta.",
        exemplo: "Se eu escrevo para a vovó, a vovó é a destinatária.",
        imagemUrl: professora,
      },
      {
        palavra: "remetente",
        explicacao: "É quem ENVIA a carta — quem escreveu e assinou.",
        exemplo: "No fim da carta, o remetente assina o nome.",
        imagemUrl: menina,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "As partes da carta e do diário",
    instrucao:
      "Cada linha abaixo é uma parte do texto. Veja o que cada uma faz e onde ela fica.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Recife, 12 de maio de 2026.",
            explicacao: "LOCAL E DATA: abre a carta, no alto e à direita. O diário só usa a data.",
          },
          {
            texto: "Querida vovó,",
            explicacao: "SAUDAÇÃO: o cumprimento para o destinatário, com vírgula no fim.",
          },
          {
            texto: "Estou no clube de detetives e resolvi meu primeiro caso.",
            explicacao: "CORPO: o recado de verdade. Cada assunto novo pede um parágrafo novo.",
          },
          {
            texto: "Com carinho, Marina.",
            explicacao: "DESPEDIDA + ASSINATURA: fecham a carta. No diário isso não é preciso.",
          },
        ],
      },
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Marina achou a joia. Marina mostrou a joia à Aurora.",
            explicacao: "REPETIÇÃO: o nome 'Marina' aparece duas vezes e o texto fica pesado.",
          },
          {
            texto: "Marina achou a joia e a mostrou à Aurora.",
            explicacao: "Com o pronome 'a', a joia não precisa ser repetida. Texto mais leve.",
          },
          {
            texto: "Marina achou a joia. Ela correu para contar à Aurora.",
            explicacao: "O pronome ELA substitui o nome já dito. Isso é evitar repetição.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia a carta prestando atenção nas partes que acabamos de estudar.",
    leitura: {
      titulo: "Carta de Marina para a vovó",
      imagemUrl: papel,
      legendaImagem: "A carta dobrada dentro do envelope do clube",
      destacar: ["Querida", "carinho", "saudade"],
      paragrafos: [
        "Recife, 12 de maio de 2026.",
        "Querida vovó, estou com saudade da senhora e do bolo de fubá do domingo.",
        "Entrei no Clube dos Detetives da Palavra e já resolvi um caso: a joia da vitrine estava dentro de uma caixa de sapato. Aurora disse que eu tenho olho de detetive.",
        "Escreva para mim contando as novidades do quintal. Com carinho, Marina.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte na carta sempre que precisar.",
    perguntas: [
      {
        pergunta: "Quem é a destinatária da carta?",
        opcoes: ["A vovó", "Aurora", "Marina", "A professora"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! A saudação diz 'Querida vovó'.",
        feedbackErro: "Procure a saudação, logo depois da data.",
        ondeEstaNoTexto: "Querida vovó, estou com saudade da senhora…",
        dica: "🔎 Destinatário é quem RECEBE. Onde está o nome de quem recebe?",
        reensino:
          "📚 Vamos rever juntos: a saudação da carta mostra o destinatário — a pessoa que vai receber o texto.",
      },
      {
        pergunta: "Onde estava a joia, segundo a carta?",
        opcoes: ["Na vitrine", "Numa caixa de sapato", "No quintal", "Na gaveta de Aurora"],
        correta: 1,
        feedbackAcerto: "🔍 Exato: 'dentro de uma caixa de sapato'.",
        feedbackErro: "A informação está no parágrafo em que Marina conta o caso.",
        ondeEstaNoTexto: "a joia da vitrine estava dentro de uma caixa de sapato",
        dica: "🔎 Releia o terceiro parágrafo.",
        reensino:
          "📚 Vamos rever juntos: em cartas, cada parágrafo traz um assunto. O caso da joia está no parágrafo do meio.",
      },
      {
        pergunta: "O que Marina pede à vovó no fim da carta?",
        opcoes: [
          "Que mande bolo pelo correio",
          "Que escreva contando as novidades",
          "Que venha morar com ela",
          "Que guarde a joia",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Boa! 'Escreva para mim contando as novidades do quintal'.",
        feedbackErro: "O pedido está no último parágrafo, antes da despedida.",
        ondeEstaNoTexto: "Escreva para mim contando as novidades do quintal.",
        dica: "🔎 Procure um verbo de pedido no último parágrafo.",
        reensino:
          "📚 Vamos rever juntos: cartas costumam terminar com um pedido de resposta. É o convite para continuar a conversa.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora aplique: escolha a forma certa de escrever cada parte.",
    perguntas: [
      {
        pergunta: "Qual parte da carta é a SAUDAÇÃO?",
        opcoes: ["Recife, 12 de maio de 2026.", "Querida vovó,", "Com carinho, Marina.", "Entrei no clube."],
        correta: 1,
        feedbackAcerto: "🔍 Isso! A saudação cumprimenta o destinatário.",
        feedbackErro: "A saudação é o cumprimento com vírgula, logo depois da data.",
        dica: "🔎 Qual linha cumprimenta alguém?",
        reensino:
          "📚 Vamos rever juntos: data → saudação → corpo → despedida → assinatura. A saudação é a segunda.",
      },
      {
        pergunta: "Qual frase evita a repetição de palavra usando pronome?",
        opcoes: [
          "Theo pegou o caderno. Theo abriu o caderno.",
          "Theo pegou o caderno e o abriu.",
          "Theo pegou. Abriu.",
          "O caderno o caderno abriu.",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato: o pronome 'o' substitui 'o caderno'.",
        feedbackErro: "Procure a frase em que a palavra repetida foi trocada por um pronome.",
        dica: "🔎 O pronome entra no lugar do nome já dito.",
        reensino:
          "📚 Vamos rever juntos: pronomes (ele, ela, o, a, lhe) substituem palavras já ditas e deixam o texto leve.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Monte a carta na ordem certa.",
    bloco: {
      instrucao: "Do começo ao fim da carta.",
      itens: [
        { id: "p1", texto: "Local e data", imagemUrl: papel },
        { id: "p2", texto: "Saudação ao destinatário", imagemUrl: professora },
        { id: "p3", texto: "Corpo: o recado em parágrafos", imagemUrl: livro },
        { id: "p4", texto: "Despedida e assinatura", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔍 Perfeito! Essa é a formatação da carta.",
      feedbackErro: "Comece pela data e termine assinando o nome.",
      dica: "🔎 A assinatura é sempre a última coisa.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho uma página de diário e compare com a carta.",
    leitura: {
      titulo: "Página do diário de Theo",
      imagemUrl: livro,
      destacar: ["hoje", "senti", "amanhã"],
      paragrafos: [
        "13 de maio.",
        "Hoje eu quase desisti do caso. Procurei a pista por uma hora e não achei nada.",
        "Senti raiva e depois senti vergonha de ter chutado a resposta na frente da turma.",
        "Amanhã eu vou tentar de outro jeito: vou ler o bilhete duas vezes antes de falar.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que este texto é um DIÁRIO e não uma carta?",
        opcoes: [
          "Porque não tem destinatário nem despedida",
          "Porque é curto",
          "Porque fala de um caso",
          "Porque tem data",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Diário não é enviado a ninguém: não tem saudação nem assinatura.",
        feedbackErro: "Compare com a carta: o que está faltando aqui?",
        ondeEstaNoTexto: "13 de maio. Hoje eu quase desisti do caso.",
        dica: "🔎 Carta tem 'Querida…' e assinatura. Este texto tem?",
        reensino:
          "📚 Vamos rever juntos: os dois usam data, mas só a carta tem destinatário, saudação e assinatura.",
      },
      {
        pergunta: "O que Theo pretende fazer amanhã?",
        opcoes: [
          "Desistir do clube",
          "Ler o bilhete duas vezes antes de falar",
          "Pedir a resposta a Aurora",
          "Escrever uma carta",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato — está no último parágrafo.",
        feedbackErro: "Releia o parágrafo que começa com 'Amanhã'.",
        ondeEstaNoTexto: "vou ler o bilhete duas vezes antes de falar",
        dica: "🔎 Procure a palavra 'amanhã'.",
        reensino:
          "📚 Vamos rever juntos: no diário a pessoa escreve o que sentiu e o que pretende mudar.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina: minha carta de verdade",
    instrucao:
      "Três passos de escritor: RASCUNHO, REVISÃO com a lista de conferência e VERSÃO FINAL. Sua carta vai ser lida por alguém de verdade.",
    blocos: [
      {
        tipo: "ditadoFrase",
        frases: [
          {
            frase: "Querida vovó, estou com saudade.",
            palavras: ["Querida", "vovó,", "estou", "com", "saudade."],
            distratores: ["vovo", "saudadi"],
            dica: "Saudação termina com vírgula; VOVÓ leva acento agudo.",
          },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "bilhete",
        titulo: "Carta para alguém da minha família",
        comando:
          "Escreva uma carta de verdade para alguém da sua família. Use as 5 partes: local e data, saudação, corpo com 2 parágrafos, despedida e assinatura.",
        linhas: 8,
        checklist: [
          "Coloquei local e data no alto.",
          "Cumprimentei a pessoa na saudação, com vírgula.",
          "Escrevi 2 parágrafos: um contando algo, outro fazendo um pedido.",
          "Terminei com despedida e assinei meu nome.",
          "Troquei nomes repetidos por pronomes (ele, ela, o, a).",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura de detetive: a carta de Marina",
    instrucao:
      "Leia três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação de carta — como se estivesse falando com a vovó.",
    texto: [
      "Querida vovó, estou com saudade da senhora.",
      "Entrei no Clube dos Detetives da Palavra e já resolvi um caso.",
      "Escreva para mim contando as novidades do quintal.",
    ],
    metaSegundos: 18,
  },

  momento09_revisao: {
    pontos: [
      "Carta tem destinatário: local e data, saudação, corpo, despedida e assinatura.",
      "Diário só precisa de data: é escrito para quem escreveu, contando fatos e sentimentos.",
      "Cada assunto novo pede um parágrafo novo.",
      "Pronomes (ele, ela, o, a) evitam repetir a mesma palavra.",
    ],
    miniDesafio: {
      pergunta: "O que uma carta tem e um diário NÃO tem?",
      opcoes: ["Data", "Saudação e assinatura", "Parágrafos", "Sentimentos"],
      correta: 1,
      feedbackAcerto: "🔍 Isso! Saudação e assinatura existem porque a carta viaja até alguém.",
      feedbackErro: "Os dois têm data, parágrafos e sentimentos. O que muda é o destinatário.",
      dica: "🔎 Quem recebe a carta precisa ser cumprimentado.",
      reensino:
        "📚 Vamos rever juntos: carta = destinatário + saudação + assinatura. Diário = data + o que vivi e senti.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — A saudação da carta serve para…",
        opcoes: [
          "dizer a data",
          "cumprimentar o destinatário",
          "assinar o nome",
          "contar a história",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso!",
        feedbackErro: "Saudação é o cumprimento: 'Querida vovó,'.",
        feedbackOpcoes: [
          "❌ A data vem antes, no alto da carta.",
          "✅ Isso! A saudação cumprimenta quem vai receber.",
          "❌ Assinar é a última parte da carta.",
          "❌ Contar algo é função do corpo da carta.",
        ],
        dica: "🔎 'Querida vovó,' é qual parte?",
        reensino: "📚 Vamos rever: data → saudação → corpo → despedida → assinatura.",
      },
      {
        pergunta: "2/5 — Qual texto NÃO é enviado a outra pessoa?",
        opcoes: ["Carta", "Diário", "Bilhete", "Convite"],
        correta: 1,
        feedbackAcerto: "🔍 Exato: o diário fica com quem escreveu.",
        feedbackErro: "Carta, bilhete e convite viajam até alguém. Um deles fica guardado.",
        feedbackOpcoes: [
          "❌ A carta é enviada ao destinatário.",
          "✅ Isso! O diário é escrito para si mesmo.",
          "❌ O bilhete também é entregue a alguém.",
          "❌ O convite é entregue a quem se quer convidar.",
        ],
        dica: "🔎 Qual desses você guarda para você?",
        reensino: "📚 Vamos rever: diário não tem destinatário — por isso não tem saudação nem assinatura.",
      },
      {
        pergunta: "3/5 — Em 'Marina achou a joia e a mostrou a Aurora', a palavra 'a' substitui…",
        opcoes: ["Marina", "a joia", "Aurora", "o clube"],
        correta: 1,
        feedbackAcerto: "🔍 Boa! O pronome 'a' está no lugar de 'a joia'.",
        feedbackErro: "Pergunte: mostrou o quê? A resposta é o que o pronome substitui.",
        feedbackOpcoes: [
          "❌ Marina é quem faz a ação, não o que foi mostrado.",
          "✅ Isso! 'a' substitui 'a joia' e evita a repetição.",
          "❌ Aurora é quem recebeu a informação.",
          "❌ O clube não aparece nessa frase.",
        ],
        dica: "🔎 Mostrou o quê? Essa é a palavra substituída.",
        reensino: "📚 Vamos rever: pronomes substituem palavras já ditas para o texto não repetir.",
      },
      {
        pergunta: "4/5 — Quando começamos um parágrafo novo na carta?",
        opcoes: [
          "Quando a linha acaba",
          "Quando começamos um assunto novo",
          "A cada frase",
          "Só no fim do texto",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Assunto novo, parágrafo novo.",
        feedbackErro: "Parágrafo não é decidido pela linha, e sim pelo assunto.",
        feedbackOpcoes: [
          "❌ A linha acabar não cria parágrafo: o texto continua.",
          "✅ Isso! Cada assunto ganha o seu parágrafo.",
          "❌ Frase por frase deixaria o texto picado.",
          "❌ No fim vem a despedida, não um parágrafo novo qualquer.",
        ],
        dica: "🔎 Mudou de assunto? Pule a linha e recue.",
        reensino: "📚 Vamos rever: parágrafo agrupa frases do MESMO assunto.",
      },
      {
        pergunta: "5/5 — Quem é o remetente de uma carta?",
        opcoes: ["Quem recebe", "Quem envia e assina", "O carteiro", "O envelope"],
        correta: 1,
        feedbackAcerto: "🔍 Exato!",
        feedbackErro: "Remetente é quem manda; destinatário é quem recebe.",
        feedbackOpcoes: [
          "❌ Quem recebe é o destinatário.",
          "✅ Isso! O remetente escreve e assina.",
          "❌ O carteiro só entrega.",
          "❌ O envelope é onde a carta vai dentro.",
        ],
        dica: "🔎 Remetente = quem remete, quem manda.",
        reensino: "📚 Vamos rever: remetente envia, destinatário recebe.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: carta de verdade no correio da casa",
    materiais: ["Papel", "Lápis", "Envelope (ou papel dobrado)"],
    passos: [
      "1) Escolha alguém da família que more longe ou em outro quarto.",
      "2) Escreva a carta com as 5 partes e revise com um adulto.",
      "3) Dobre no envelope, escreva o nome do destinatário e entregue.",
      "4) Combine que a pessoa responda por escrito — carta pede resposta!",
    ],
    registro: "📸 Tire uma foto da sua carta pronta antes de entregar.",
  },

  recompensa: {
    xp: 160,
    moedas: 50,
    medalha: "Correio do Clube",
  },
};
