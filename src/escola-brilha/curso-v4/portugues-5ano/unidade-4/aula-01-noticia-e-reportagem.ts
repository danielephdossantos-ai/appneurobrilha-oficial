import type { AulaPortuguesV4 } from "../../types";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as radioAntigo } from "@/assets/neuro-treino/objetos/radio-antigo.png.asset.json";
import { url as tvModerna } from "@/assets/neuro-treino/objetos/tv-moderna.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";

/**
 * Aula 1 — Notícia e reportagem
 * -------------------------------------------------------------
 * Unidade 4 · Território dos Gêneros (5º ano)
 * Foco: reconhecer a estrutura de notícias e reportagens, o famoso
 * "lide" (o quê, quem, quando, onde, como, por quê) e a diferença
 * entre informar um fato e explorá-lo com mais profundidade.
 * BNCC: EF05LP15, EF05LP16
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-noticia-e-reportagem",
  titulo: "Notícia e reportagem",
  iconeTrilha: "📰",
  bncc: ["EF05LP15", "EF05LP16"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O mural que conta o mundo",
    historia:
      "Brilha chegou correndo com um mural cheio de recortes de jornal. — Olha só, no Território dos Gêneros existe um bairro inteiro dedicado a contar o que acontece: é o Bairro das Notícias! Aqui, cada texto tem um jeito certo de contar um fato, sem enrolação e sem inventar nada. Vamos descobrir como um repórter escreve para que todo mundo entenda rápido?",
    imagemUrl: mural,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas do Bairro das Notícias antes de começar.",
    bloco: {
      titulo: "O Bairro das Notícias",
      capaImagemUrl: mural,
      pistas: [
        { imagemUrl: radioAntigo, nome: "Um rádio antigo" },
        { imagemUrl: tvModerna, nome: "Uma televisão" },
      ],
      pergunta: "Sobre o que essa parte do Território dos Gêneros vai ensinar?",
      hipoteses: [
        { texto: "Como músicas são compostas.", imagemUrl: radioAntigo },
        { texto: "Como notícias e reportagens contam fatos reais.", imagemUrl: tvModerna },
        { texto: "Como desenhar personagens de quadrinhos.", imagemUrl: papel },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender como notícias e reportagens informam a gente sobre o mundo.",
      feedbackErro: "Pense no rádio e na TV: eles servem para nos contar o que está acontecendo. É sobre isso que vamos falar.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras do Bairro das Notícias.",
    cards: [
      {
        palavra: "notícia",
        explicacao: "Texto curto e direto que informa um fato recente e importante, respondendo às perguntas essenciais.",
        exemplo: "Uma notícia sobre a inauguração de uma praça na cidade.",
        imagemUrl: mural,
      },
      {
        palavra: "reportagem",
        explicacao: "Texto mais longo que investiga um fato a fundo, com entrevistas, detalhes e diferentes pontos de vista.",
        exemplo: "Uma reportagem que entrevista moradores sobre a falta de água no bairro.",
        imagemUrl: tvModerna,
      },
      {
        palavra: "lide",
        explicacao: "É o primeiro parágrafo da notícia, que resume o fato respondendo: o quê, quem, quando, onde, como e por quê.",
        exemplo: "No lide, o leitor já sabe do que se trata a notícia sem ler o texto todo.",
        imagemUrl: papel,
      },
      {
        palavra: "manchete",
        explicacao: "Título chamativo e resumido que anuncia o assunto principal da notícia.",
        exemplo: "A manchete 'Escola ganha nova biblioteca' resume o assunto em poucas palavras.",
        imagemUrl: lapis,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo o lide em ação",
    instrucao: "Ouça o Brilha destacando cada parte do lide de uma notícia.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Uma escola de bairro inaugurou uma horta comunitária ontem.", explicacao: "Aqui já sabemos O QUÊ aconteceu, QUEM fez e QUANDO." },
          { texto: "A horta fica no pátio da Escola Municipal Girassol.", explicacao: "Essa frase responde ONDE aconteceu o fato." },
          { texto: "Alunos e professores plantaram as primeiras mudas juntos.", explicacao: "Aqui aparece o COMO o fato aconteceu." },
          { texto: "A ideia surgiu para ensinar sobre alimentação saudável.", explicacao: "Essa frase explica o POR QUÊ do acontecimento." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou no mural como funcionam notícia e reportagem.",
    leitura: {
      titulo: "O Mural do Bairro das Notícias",
      imagemUrl: mural,
      legendaImagem: "Página sobre notícia e reportagem",
      destacar: ["notícia", "reportagem", "lide", "manchete"],
      paragrafos: [
        "A NOTÍCIA é um texto que informa um fato real, recente e de interesse público, de forma curta e objetiva. Ela tem uma MANCHETE, que resume o assunto em poucas palavras, e começa pelo LIDE, o parágrafo que responde às perguntas essenciais: o quê, quem, quando, onde, como e por quê aconteceu.",
        "Já a REPORTAGEM aprofunda um fato: além de informar, ela investiga, entrevista pessoas envolvidas e mostra diferentes pontos de vista sobre o mesmo assunto. Uma notícia pode virar reportagem quando o jornalista decide explorar mais o tema, indo atrás de mais detalhes e histórias.",
        "Veja um exemplo real de notícia: 'MANCHETE: Escola Municipal Girassol inaugura horta comunitária. LIDE: Alunos e professores da Escola Municipal Girassol, no bairro Jardim das Flores, plantaram nesta segunda-feira as primeiras mudas de uma horta comunitária. A iniciativa nasceu de um projeto de educação alimentar e deve fornecer verduras para a merenda escolar.' Perceba como, em poucas linhas, já sabemos tudo o que precisamos.",
        "Repórteres têm um compromisso importante: contar apenas fatos verificados, sem inventar nem exagerar. Por isso costumam usar frases de pessoas entrevistadas, entre aspas, para mostrar diferentes visões sobre o acontecimento sem misturar a opinião do jornalista com o fato relatado.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no mural se precisar.",
    perguntas: [
      {
        pergunta: "O que é o lide de uma notícia?",
        opcoes: [
          "A imagem que ilustra a notícia",
          "O parágrafo final com a opinião do jornalista",
          "O parágrafo inicial que responde às perguntas essenciais do fato",
          "A lista de fontes usadas na reportagem",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Isso! O lide é o parágrafo inicial que resume o quê, quem, quando, onde, como e por quê.",
        feedbackErro: "Releia: 'ela... começa pelo LIDE, o parágrafo que responde às perguntas essenciais'.",
        ondeEstaNoTexto: "começa pelo LIDE, o parágrafo que responde às perguntas essenciais: o quê, quem, quando, onde, como e por quê aconteceu",
      },
      {
        pergunta: "O que diferencia a reportagem de uma notícia simples?",
        opcoes: [
          "A reportagem é sempre mais curta",
          "A reportagem investiga a fundo, com entrevistas e vários pontos de vista",
          "A reportagem não pode ter manchete",
          "A reportagem só existe em rádio",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! A reportagem aprofunda o fato com investigação e entrevistas.",
        feedbackErro: "Releia: 'a reportagem aprofunda um fato: além de informar, ela investiga, entrevista pessoas envolvidas'.",
        ondeEstaNoTexto: "a reportagem aprofunda um fato: além de informar, ela investiga, entrevista pessoas envolvidas e mostra diferentes pontos de vista",
      },
      {
        pergunta: "Por que os repórteres costumam usar frases entre aspas de pessoas entrevistadas?",
        opcoes: [
          "Para deixar o texto mais bonito",
          "Para preencher espaço no jornal",
          "Porque é obrigatório por lei",
          "Para mostrar diferentes visões sem misturar com a opinião do jornalista",
        ],
        correta: 3,
        feedbackAcerto: "🎉 Exato! As aspas separam a fala de quem foi entrevistado da opinião do repórter.",
        feedbackErro: "Releia: 'costumam usar frases de pessoas entrevistadas, entre aspas, para mostrar diferentes visões... sem misturar a opinião do jornalista com o fato relatado'.",
        ondeEstaNoTexto: "costumam usar frases de pessoas entrevistadas, entre aspas, para mostrar diferentes visões sobre o acontecimento sem misturar a opinião do jornalista com o fato relatado",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Onde e como aconteceu o fato do exemplo de notícia?",
    perguntas: [
      {
        pergunta: "Em que escola aconteceu a inauguração da horta comunitária?",
        opcoes: ["Escola Municipal Estrela", "Escola Municipal Girassol", "Escola Municipal Arco-Íris", "Escola Municipal Jardim"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A notícia é sobre a Escola Municipal Girassol.",
        feedbackErro: "Releia a manchete do exemplo: 'Escola Municipal Girassol inaugura horta comunitária'.",
      },
      {
        pergunta: "De onde nasceu a ideia da horta comunitária, segundo o lide?",
        opcoes: [
          "De um pedido dos pais",
          "De um sorteio na escola",
          "De um projeto de educação alimentar",
          "De uma doação de uma empresa",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Correto! A iniciativa nasceu de um projeto de educação alimentar.",
        feedbackErro: "Releia: 'a iniciativa nasceu de um projeto de educação alimentar'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos que um repórter segue para montar uma notícia.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Observar ou descobrir um fato recente e importante.", imagemUrl: mapa },
        { id: "p2", texto: "Apurar informações e, se possível, entrevistar pessoas envolvidas.", imagemUrl: radioAntigo },
        { id: "p3", texto: "Escrever o lide respondendo o quê, quem, quando, onde, como e por quê.", imagemUrl: papel },
        { id: "p4", texto: "Criar uma manchete curta que resuma o assunto.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho que um repórter percorre até publicar a notícia.",
      feedbackErro: "Pense: primeiro se descobre o fato, depois se apura, depois se escreve o lide, e por fim se cria a manchete.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outro trecho do mural e responda.",
    leitura: {
      titulo: "Mais Descobertas no Bairro das Notícias",
      imagemUrl: caixa,
      destacar: ["fatos verificados", "fonte", "opinião"],
      paragrafos: [
        "Um bom jornalista sempre busca mais de uma FONTE de informação antes de publicar um fato, ou seja, mais de uma pessoa ou documento que confirme o que está sendo dito. Isso evita erros e espalhar informações falsas.",
        "É importante separar fatos verificados de opinião. Fato é algo que pode ser comprovado, como 'choveu 40 milímetros na cidade ontem'. Opinião é um ponto de vista pessoal, como 'a chuva foi um verdadeiro desastre', e não deve aparecer misturada ao texto de uma notícia.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que um jornalista busca mais de uma fonte antes de publicar?",
        opcoes: [
          "Para deixar a notícia mais longa",
          "Para evitar erros e espalhar informações falsas",
          "Porque é uma regra sem motivo",
          "Para agradar o leitor",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Mais de uma fonte ajuda a confirmar o fato e evitar erros.",
        feedbackErro: "Releia: 'Isso evita erros e espalhar informações falsas.'",
        ondeEstaNoTexto: "Isso evita erros e espalhar informações falsas.",
      },
      {
        pergunta: "Qual das frases abaixo é um FATO, e não uma opinião?",
        opcoes: [
          "A chuva foi um verdadeiro desastre",
          "Choveu 40 milímetros na cidade ontem",
          "A chuva foi linda de ver",
          "A cidade ficou feia com a chuva",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! 'Choveu 40 milímetros' é algo que pode ser comprovado, por isso é fato.",
        feedbackErro: "Releia: 'Fato é algo que pode ser comprovado, como choveu 40 milímetros na cidade ontem'.",
        ondeEstaNoTexto: "Fato é algo que pode ser comprovado, como 'choveu 40 milímetros na cidade ontem'",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte a notícia na ordem certa",
    instrucao: "Organize as partes de uma notícia na sequência correta, da manchete à conclusão.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "A Redação do Bairro das Notícias",
      bloco: {
        instrucao: "Pense em como o leitor precisa entender a notícia do início ao fim.",
        itens: [
          { id: "n1", texto: "Manchete: 'Praça do bairro ganha nova iluminação'", imagemUrl: estrela },
          { id: "n2", texto: "Lide: quem fez a obra, quando e onde ela aconteceu", imagemUrl: papel },
          { id: "n3", texto: "Detalhes: quantos postes foram trocados e como foi feito o trabalho", imagemUrl: mapa },
          { id: "n4", texto: "Fala de um morador entrevistado sobre a mudança", imagemUrl: radioAntigo },
        ],
        ordemCerta: ["n1", "n2", "n3", "n4"],
        feedbackAcerto: "🎉 Você montou a notícia na ordem certa: manchete, lide, detalhes e entrevista!",
        feedbackErro: "Pense: primeiro vem a manchete, depois o lide com as informações essenciais, depois os detalhes e por fim as falas dos entrevistados.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "NOTÍCIA informa um fato de forma curta e objetiva, começando pelo LIDE (o quê, quem, quando, onde, como, por quê).",
      "REPORTAGEM aprofunda o fato com investigação, entrevistas e diferentes pontos de vista.",
      "Um bom texto jornalístico separa FATO (comprovável) de OPINIÃO (ponto de vista pessoal).",
    ],
    miniDesafio: {
      pergunta: "O lide de uma notícia deve responder principalmente...",
      opcoes: [
        "A opinião do autor sobre o fato",
        "Uma piada relacionada ao tema",
        "As perguntas essenciais sobre o fato",
        "Uma receita de bolo",
      ],
      correta: 2,
      feedbackAcerto: "🎉 Isso! O lide responde o quê, quem, quando, onde, como e por quê.",
      feedbackErro: "Releia a explicação: o lide responde às perguntas essenciais sobre o fato.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Uma notícia deve, principalmente, informar sobre...",
        opcoes: ["Um fato recente e verificado", "Uma opinião pessoal", "Uma história inventada", "Um poema"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A notícia informa fatos reais e recentes.",
        feedbackErro: "Lembre: notícia é sobre fatos reais, não opiniões nem invenções.",
      },
      {
        pergunta: "2/5 — O lide de uma notícia geralmente fica...",
        opcoes: ["No meio do texto", "No último parágrafo", "No primeiro parágrafo", "Só na manchete"],
        correta: 2,
        feedbackAcerto: "🎉 Correto! O lide é o primeiro parágrafo da notícia.",
        feedbackErro: "O lide fica logo no início da notícia.",
      },
      {
        pergunta: "3/5 — O que torna uma reportagem diferente de uma notícia curta?",
        opcoes: ["O tamanho da letra", "A cor do papel", "A investigação mais profunda com entrevistas", "A falta de manchete"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! A reportagem investiga mais fundo, com entrevistas e vários pontos de vista.",
        feedbackErro: "Reportagem é a versão mais investigada e detalhada de um fato.",
      },
      {
        pergunta: "4/5 — Qual frase é um FATO, não uma opinião?",
        opcoes: [
          "O evento foi maravilhoso",
          "A prefeitura inaugurou a praça na terça-feira",
          "Todo mundo adorou o passeio",
          "Foi a melhor festa do ano",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Essa frase pode ser comprovada, por isso é um fato.",
        feedbackErro: "Fato é algo comprovável; opinião é um ponto de vista pessoal.",
      },
      {
        pergunta: "5/5 — Por que os jornalistas usam mais de uma fonte de informação?",
        opcoes: [
          "Para deixar a notícia mais longa",
          "Para confirmar o fato e evitar erros",
          "Porque é uma tradição sem motivo",
          "Para enfeitar o texto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Território conquistado! Mais de uma fonte ajuda a garantir que o fato é verdadeiro.",
        feedbackErro: "Mais de uma fonte confirma a informação e evita erros na notícia.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Vire repórter por um dia",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Com um adulto, escolham um fato real que aconteceu na sua casa ou bairro nos últimos dias.",
      "2) Escreva uma MANCHETE curta para esse fato.",
      "3) Escreva uma NOTÍCIA de exatamente 3 frases, respondendo o quê, quem, quando e onde aconteceu.",
      "4) Leiam a notícia em voz alta para a família, como um apresentador de telejornal.",
    ],
    registro: "📝 Uma foto da notícia escrita à mão, ou um vídeo/áudio da criança 'apresentando' a notícia.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
