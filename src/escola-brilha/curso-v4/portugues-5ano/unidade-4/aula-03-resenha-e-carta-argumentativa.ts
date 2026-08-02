import type { AulaPortuguesV4 } from "../../types";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";

/**
 * Aula 3 — Resenha e carta argumentativa
 * -------------------------------------------------------------
 * Unidade 4 · Território dos Gêneros (5º ano)
 * Foco: reconhecer a resenha (opinião fundamentada sobre uma obra)
 * e a carta argumentativa (defesa de um ponto de vista com
 * argumentos, dirigida a um destinatário).
 * BNCC: EF05LP17, EF05LP23
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-resenha-e-carta-argumentativa",
  titulo: "Resenha e carta argumentativa",
  iconeTrilha: "✍️",
  bncc: ["EF05LP17", "EF05LP23"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A Torre das Opiniões",
    historia:
      "Brilha subiu correndo os degraus de uma torre cheia de estrelinhas coladas na parede. — Aqui fica a Torre das Opiniões! Neste lugar do Território dos Gêneros, a gente aprende a defender o que pensa com argumentos, e não só dizer 'eu gosto' ou 'eu não gosto'. Vamos aprender a escrever uma resenha sobre um livro e uma carta para convencer alguém de algo importante?",
    imagemUrl: mural,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas da Torre das Opiniões antes de começar.",
    bloco: {
      titulo: "A Torre das Opiniões",
      capaImagemUrl: livros,
      pistas: [
        { imagemUrl: estrela, nome: "Estrelas de avaliação" },
        { imagemUrl: papel, nome: "Uma carta dobrada" },
      ],
      pergunta: "Sobre o que essa parte do Território dos Gêneros vai ensinar?",
      hipoteses: [
        { texto: "Como desenhar estrelas bonitas.", imagemUrl: estrela },
        { texto: "Como dar opinião sobre um livro e defender uma ideia por carta.", imagemUrl: papel },
        { texto: "Como dobrar papel em formato de avião.", imagemUrl: caixa },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender a escrever resenhas e cartas argumentativas.",
      feedbackErro: "Pense nas estrelas de avaliação e na carta: são jeitos de dar opinião e defender uma ideia. É sobre isso que vamos falar.",
      dica: "💡 Pista: repare que as duas imagens (estrelas de avaliação e carta) têm a ver com dar opinião e convencer alguém — não com desenho ou dobradura.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras da Torre das Opiniões.",
    cards: [
      {
        palavra: "resenha",
        explicacao: "Texto que apresenta e avalia uma obra (livro, filme, jogo), dando uma opinião justificada sobre ela.",
        exemplo: "Uma resenha explica do que trata o livro e diz por que vale ou não a pena lê-lo.",
        imagemUrl: livros,
      },
      {
        palavra: "carta argumentativa",
        explicacao: "Texto dirigido a alguém, que defende um ponto de vista usando argumentos, tentando convencer o leitor.",
        exemplo: "Uma carta pedindo mais lixeiras de reciclagem na escola, com argumentos sobre o meio ambiente.",
        imagemUrl: papel,
      },
      {
        palavra: "argumento",
        explicacao: "Razão ou motivo usado para defender uma opinião e convencer o leitor de que ela faz sentido.",
        exemplo: "'A reciclagem reduz o lixo na cidade' é um argumento a favor da coleta seletiva.",
        imagemUrl: estrela,
      },
      {
        palavra: "destinatário",
        explicacao: "Pessoa ou grupo para quem a carta é escrita, a quem se quer convencer de algo.",
        exemplo: "Numa carta ao diretor da escola, o destinatário é o diretor.",
        imagemUrl: coracao,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo argumentos em ação",
    instrucao: "Ouça o Brilha destacando frases de opinião e de argumento.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Recomendo muito esse livro para quem gosta de aventura.", explicacao: "Frase típica de RESENHA: dá uma opinião sobre a obra." },
          { texto: "A história prende do início ao fim, com reviravoltas surpreendentes.", explicacao: "Aqui a resenha JUSTIFICA a opinião com um argumento sobre a obra." },
          { texto: "Peço que considerem instalar mais bebedouros no pátio.", explicacao: "Frase típica de CARTA ARGUMENTATIVA: apresenta um pedido claro." },
          { texto: "Isso ajudaria os alunos a se manterem hidratados durante o recreio.", explicacao: "Aqui aparece o ARGUMENTO que sustenta o pedido feito na carta." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou na torre como funcionam resenha e carta argumentativa.",
    leitura: {
      titulo: "O Caderno da Torre das Opiniões",
      imagemUrl: biblioteca,
      legendaImagem: "Página sobre resenha e carta argumentativa",
      destacar: ["resenha", "carta argumentativa", "argumento", "opinião"],
      paragrafos: [
        "A RESENHA é um texto em que alguém conta um pouco sobre uma obra (livro, filme, jogo) e dá sua OPINIÃO sobre ela, sempre justificando essa opinião com ARGUMENTOS. Não basta dizer 'gostei' ou 'não gostei': é preciso explicar o motivo, mostrando pontos fortes e fracos da obra.",
        "Já a CARTA ARGUMENTATIVA é dirigida a um DESTINATÁRIO específico e tem o objetivo de convencer essa pessoa de algo, usando argumentos organizados. Ela costuma ter saudação, apresentação do assunto, argumentos que sustentam o pedido ou ideia, e uma despedida educada.",
        "Veja um exemplo real de resenha curta: 'O livro O Menino do Dedo Verde conta a história de Tistu, um garoto que descobre ter o poder de fazer plantas crescerem instantaneamente ao tocá-las. Recomendo a leitura porque a obra mistura fantasia e crítica social de um jeito leve, ideal para quem está começando a ler livros mais longos.' Note a opinião ('recomendo') e o argumento que a justifica.",
        "Agora um exemplo de carta argumentativa: 'Prezado diretor, escrevo para pedir a instalação de mais bebedouros no pátio da escola. Durante o recreio, muitos alunos praticam esportes e sentem sede, mas há apenas um bebedouro disponível. Isso causa filas longas e desperdício de tempo do intervalo. Agradeço a atenção. Atenciosamente, um aluno do 5º ano.' Perceba a saudação, o pedido, o argumento e a despedida.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no caderno se precisar.",
    perguntas: [
      {
        pergunta: "O que uma resenha não pode fazer, segundo o texto?",
        opcoes: [
          "Dar uma opinião sem justificar com argumentos",
          "Contar um pouco sobre a obra",
          "Mostrar pontos fortes da obra",
          "Recomendar ou não a leitura",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A resenha não pode ficar só no 'gostei' ou 'não gostei', precisa justificar.",
        feedbackErro: "Releia: 'Não basta dizer gostei ou não gostei: é preciso explicar o motivo'.",
        ondeEstaNoTexto: "Não basta dizer 'gostei' ou 'não gostei': é preciso explicar o motivo, mostrando pontos fortes e fracos da obra",
        dica: "💡 Pista: procure o trecho que começa com 'Não basta dizer...' logo no primeiro parágrafo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Dar uma opinião sem justificar com argumentos”. O texto diz que não basta dizer 'gostei' ou 'não gostei' — é preciso explicar o motivo. Agora releia a pergunta com essa ideia na cabeça.",
      },
      {
        pergunta: "O que costuma aparecer em uma carta argumentativa, além da saudação e despedida?",
        opcoes: [
          "Apenas desenhos",
          "Uma lista de compras",
          "Argumentos que sustentam o pedido ou ideia",
          "Uma receita culinária",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Correto! A carta argumentativa apresenta argumentos que sustentam o pedido.",
        feedbackErro: "Releia: 'Ela costuma ter saudação, apresentação do assunto, argumentos que sustentam o pedido ou ideia, e uma despedida educada.'",
        ondeEstaNoTexto: "argumentos que sustentam o pedido ou ideia, e uma despedida educada",
        dica: "💡 Pista: releia a frase que lista as partes da carta argumentativa, no segundo parágrafo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Argumentos que sustentam o pedido ou ideia”. A carta tem saudação, assunto, argumentos e despedida. Agora releia a pergunta com essa ideia na cabeça.",
      },
      {
        pergunta: "Qual é o argumento usado na carta exemplo para pedir mais bebedouros?",
        opcoes: [
          "Os bebedouros são muito bonitos",
          "As filas causam desperdício de tempo do intervalo",
          "Os alunos preferem suco",
          "O diretor pediu isso primeiro",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! O argumento é que a fila longa desperdiça o tempo do recreio.",
        feedbackErro: "Releia: 'Isso causa filas longas e desperdício de tempo do intervalo.'",
        ondeEstaNoTexto: "Isso causa filas longas e desperdício de tempo do intervalo",
        dica: "💡 Pista: releia o meio da carta exemplo, logo depois de 'sentem sede'.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “As filas causam desperdício de tempo do intervalo”. Esse é o argumento da carta exemplo. Agora releia a pergunta com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem escreveu e para quem foram dirigidos os textos lidos?",
    perguntas: [
      {
        pergunta: "Qual é o nome do garoto da história resenhada no exemplo?",
        opcoes: ["Pedro", "Tistu", "Lucas", "Davi"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O garoto se chama Tistu.",
        feedbackErro: "Releia: 'conta a história de Tistu, um garoto que descobre ter o poder...'",
        dica: "💡 Pista: o nome aparece logo no começo da resenha exemplo, antes de 'um garoto que descobre'.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Tistu”. É o nome do garoto da resenha exemplo. Agora releia a pergunta com essa ideia na cabeça.",
      },
      {
        pergunta: "Para quem foi dirigida a carta sobre os bebedouros?",
        opcoes: ["Para os colegas de turma", "Para o diretor da escola", "Para os pais", "Para a prefeitura"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! A carta é dirigida ao diretor da escola.",
        feedbackErro: "Releia o início da carta: 'Prezado diretor'.",
        dica: "💡 Pista: releia a primeira palavra da carta exemplo, logo após as aspas.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Para o diretor da escola”. A carta começa com 'Prezado diretor'. Agora releia a pergunta com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para escrever uma carta argumentativa.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Escrever a saudação ao destinatário.", imagemUrl: papel },
        { id: "p2", texto: "Apresentar o assunto e o pedido claramente.", imagemUrl: lapis },
        { id: "p3", texto: "Explicar os argumentos que sustentam o pedido.", imagemUrl: estrela },
        { id: "p4", texto: "Encerrar com uma despedida educada.", imagemUrl: coracao },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho certo para escrever uma carta argumentativa.",
      feedbackErro: "Pense: primeiro se cumprimenta, depois se apresenta o pedido, depois os argumentos e por fim a despedida.",
      dica: "💡 Pista: pense em como você começa e termina uma carta, e onde entram os motivos do pedido.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outro trecho do caderno e responda.",
    leitura: {
      titulo: "Mais Descobertas na Torre das Opiniões",
      imagemUrl: caixa,
      destacar: ["contra-argumento", "tom respeitoso"],
      paragrafos: [
        "Uma boa resenha ou carta argumentativa pode até mencionar um CONTRA-ARGUMENTO, ou seja, um ponto de vista diferente do seu, para depois explicar por que ainda assim sua opinião é a mais forte. Isso mostra que o autor pensou no assunto de vários lados.",
        "É importante manter um TOM RESPEITOSO ao escrever, mesmo quando se está criticando algo ou discordando de alguém. Xingamentos ou grosserias enfraquecem o argumento e afastam o leitor da ideia defendida.",
      ],
    },
    perguntas: [
      {
        pergunta: "Para que serve mencionar um contra-argumento?",
        opcoes: [
          "Para confundir o leitor",
          "Para mostrar que o autor pensou no assunto de vários lados",
          "Para tornar o texto mais curto",
          "Para evitar escrever a opinião principal",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Mencionar o contra-argumento mostra que o autor considerou outros pontos de vista.",
        feedbackErro: "Releia: 'Isso mostra que o autor pensou no assunto de vários lados.'",
        ondeEstaNoTexto: "Isso mostra que o autor pensou no assunto de vários lados",
        dica: "💡 Pista: releia o fim do primeiro parágrafo, depois de 'ainda assim sua opinião é a mais forte'.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Para mostrar que o autor pensou no assunto de vários lados”. Agora releia a pergunta com essa ideia na cabeça.",
      },
      {
        pergunta: "O que acontece quando se usa xingamentos ou grosserias em um texto argumentativo?",
        opcoes: [
          "O argumento fica mais forte",
          "O texto fica mais engraçado",
          "O argumento enfraquece e afasta o leitor",
          "Nada muda no texto",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Exato! Grosserias enfraquecem o argumento e afastam quem está lendo.",
        feedbackErro: "Releia: 'Xingamentos ou grosserias enfraquecem o argumento e afastam o leitor da ideia defendida.'",
        ondeEstaNoTexto: "Xingamentos ou grosserias enfraquecem o argumento e afastam o leitor da ideia defendida",
        dica: "💡 Pista: releia a última frase do segundo parágrafo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O argumento enfraquece e afasta o leitor”. Agora releia a pergunta com essa ideia na cabeça.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Escolha os argumentos certos",
    instrucao: "Selecione apenas as frases que são bons argumentos para defender a leitura na escola.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "A Caixa de Argumentos da Torre",
      bloco: {
        instrucao: "Marque apenas as frases que apresentam um argumento de verdade, e não apenas uma opinião solta.",
        pergunta: "Quais frases abaixo são bons ARGUMENTOS para defender mais tempo de leitura na escola?",
        opcoes: [
          { id: "a1", texto: "A leitura amplia o vocabulário e ajuda a escrever melhor.", correto: true },
          { id: "a2", texto: "Eu simplesmente acho legal.", correto: false },
          { id: "a3", texto: "Ler histórias desenvolve a imaginação e o senso crítico.", correto: true },
          { id: "a4", texto: "Livros são objetos retangulares.", correto: false },
        ],
        feedbackAcerto: "🎉 Você escolheu os argumentos que realmente justificam a opinião!",
        feedbackErro: "Pense: um bom argumento explica O MOTIVO da opinião, não apenas repete um gosto pessoal.",
        dica: "💡 Pista: um bom argumento sempre explica um MOTIVO (por que isso ajuda), não só um gosto pessoal.",
      },
    },
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Escreva sua própria resenha",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Escreva uma resenha curta de um livro, filme ou jogo que você conhece",
        comando:
          "Escolha um livro, filme ou jogo que você já leu, assistiu ou jogou. Escreva um pequeno parágrafo contando do que se trata, dando sua opinião e explicando pelo menos um ARGUMENTO que justifique essa opinião.",
        linhas: 5,
        modelo: [
          "O livro O Menino do Dedo Verde conta a história de Tistu, um garoto que faz plantas crescerem ao tocá-las.",
          "Eu recomendo essa leitura porque a história mistura fantasia com uma crítica interessante sobre o mundo.",
          "Além disso, os capítulos são curtos, o que ajuda quem está começando a ler livros mais longos.",
          "Por esses motivos, considero uma ótima escolha para quem gosta de histórias de fantasia.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Não repeti a mesma palavra várias vezes: troquei por pronome ou sinônimo.",
          "Usei pelo menos um conectivo (porque, além disso, mas, por isso) ligando as ideias.",
          "Li em voz alta e consertei o que ficou estranho.",
          "Minha resenha diz do que trata a obra.",
          "Minha resenha dá uma opinião e justifica com pelo menos um argumento.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (~130 ppm · 5º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: A Torre das Boas Opiniões",
    instrucao:
      "Leia o mesmo texto três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula, ponto e travessão. A meta não é correr: é ler como quem quer convencer alguém.",
    texto: [
      "Dar uma opinião é fácil: basta dizer que gostou ou não gostou de algo. Difícil mesmo é explicar o motivo dessa opinião de um jeito que convença outras pessoas. É exatamente isso que uma boa resenha e uma boa carta argumentativa fazem.",
      "Na resenha, contamos um pouco sobre a obra e dizemos por que ela merece, ou não, ser lida, assistida ou jogada por outras pessoas. Já na carta argumentativa, defendemos um pedido ou uma ideia diante de um destinatário, usando argumentos que sustentem esse pedido.",
      "Em ambos os casos, o segredo é o mesmo: apresentar razões claras, manter um tom respeitoso e, se possível, considerar até o que pensa quem discorda. Assim, qualquer texto de opinião fica muito mais forte e convincente.",
    ],
    metaSegundos: 71,
  },

  momento09_revisao: {
    pontos: [
      "RESENHA apresenta uma obra e dá uma opinião justificada com argumentos sobre ela.",
      "CARTA ARGUMENTATIVA é dirigida a um destinatário e defende um pedido ou ideia com argumentos.",
      "Um bom argumento explica o MOTIVO da opinião, e um bom texto mantém tom respeitoso mesmo ao discordar.",
    ],
    miniDesafio: {
      pergunta: "Em uma resenha, além de dar uma opinião, é preciso...",
      opcoes: [
        "Copiar o resumo da contracapa",
        "Justificar a opinião com argumentos",
        "Usar apenas emojis",
        "Evitar falar da obra",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Toda opinião de resenha precisa vir acompanhada de argumentos.",
      feedbackErro: "Releia a explicação: a opinião precisa ser justificada com argumentos.",
      dica: "💡 Pista: lembre que só dizer 'gostei' ou 'não gostei' não é o suficiente numa resenha.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “Justificar a opinião com argumentos”. Toda opinião de resenha precisa vir acompanhada de um motivo. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma resenha?",
        opcoes: [
          "Um texto que só resume uma obra sem opinião",
          "Um texto que apresenta e avalia uma obra com opinião justificada",
          "Uma lista de compras",
          "Um poema sobre a natureza",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Resenha apresenta e avalia uma obra com argumentos.",
        feedbackErro: "Resenha sempre traz uma opinião justificada sobre a obra.",
        dica: "💡 Pista: lembre que a resenha nunca é só um resumo — ela também tem uma opinião justificada.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um texto que apresenta e avalia uma obra com opinião justificada”. Agora releia a pergunta com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — A carta argumentativa é escrita para...",
        opcoes: ["Ninguém em especial", "Um destinatário, para convencê-lo de algo", "Apenas o próprio autor", "Um personagem inventado"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! A carta é dirigida a um destinatário, buscando convencê-lo.",
        feedbackErro: "Carta argumentativa tem sempre um destinatário a convencer.",
        dica: "💡 Pista: lembre que toda carta tem alguém específico para quem ela é escrita.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um destinatário, para convencê-lo de algo”. Agora releia a pergunta com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — O que é um argumento?",
        opcoes: [
          "Uma opinião sem explicação",
          "Uma razão que sustenta uma opinião",
          "O título de um livro",
          "Uma despedida de carta",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Argumento é a razão que justifica uma opinião.",
        feedbackErro: "Argumento é o motivo usado para defender uma opinião.",
        dica: "💡 Pista: lembre que argumento é sempre um MOTIVO, uma razão — nunca só uma opinião solta.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Uma razão que sustenta uma opinião”. Agora releia a pergunta com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — Por que é bom mencionar um contra-argumento no texto?",
        opcoes: [
          "Para deixar o texto mais confuso",
          "Para mostrar que o autor considerou outros pontos de vista",
          "Para enfraquecer a própria opinião",
          "Não serve para nada",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Mostra que o autor pensou no assunto de vários ângulos.",
        feedbackErro: "O contra-argumento mostra que o autor pensou nos dois lados.",
        dica: "💡 Pista: pense em como mencionar outro ponto de vista deixa o texto mais completo, não mais fraco.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Para mostrar que o autor considerou outros pontos de vista”. Agora releia a pergunta com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Qual dessas partes normalmente aparece em uma carta argumentativa?",
        opcoes: ["Ingredientes e modo de preparo", "Saudação, argumentos e despedida", "Legenda de foto", "Tabela de preços"],
        correta: 1,
        feedbackAcerto: "🎉 Torre conquistada! A carta tem saudação, argumentos e despedida.",
        feedbackErro: "Carta argumentativa tem saudação, argumentos e despedida educada.",
        dica: "💡 Pista: pense na estrutura da carta exemplo que você leu: como ela começa, o que vem no meio e como termina.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Saudação, argumentos e despedida”. Torre conquistada! 🌟 Agora releia a pergunta com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Defenda sua ideia por escrito",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Com um adulto, escolha algo que você gostaria de mudar em casa ou na escola (ex.: mais tempo de brincar, um passeio, uma regra nova).",
      "2) Escreva um pequeno PARÁGRAFO DE OPINIÃO defendendo essa ideia, com pelo menos um argumento.",
      "3) Leia o parágrafo em voz alta para a família, como se estivesse convencendo alguém importante.",
      "4) Conversem: o argumento convenceu? Poderia ser mais forte?",
    ],
    registro: "📝 Uma foto do parágrafo de opinião escrito, ou um áudio da criança lendo o argumento.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
