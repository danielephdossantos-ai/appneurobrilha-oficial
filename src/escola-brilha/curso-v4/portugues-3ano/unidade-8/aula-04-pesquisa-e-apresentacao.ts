import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";

/**
 * Unidade 8 · Aula 4 — A Pesquisa e a Apresentação do Clube
 * -------------------------------------------------------------
 * Fecha a cobertura BNCC do 3º ano: PESQUISA (selecionar fonte,
 * anotar, organizar em tópicos), ORALIDADE FORMAL (planejar e
 * apresentar, escutar com atenção) e LEITURA DRAMATIZADA de
 * texto teatral, com discurso direto e indireto.
 *
 * BNCC: EF03LP25, EF03LP22, EF35LP01, EF35LP02, EF35LP17, EF35LP18,
 *       EF35LP19, EF35LP20, EF35LP21, EF35LP22, EF35LP24, EF35LP27,
 *       EF35LP29, EF35LP30, EF35LP13
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-pesquisa-e-apresentacao",
  titulo: "A Pesquisa e a Apresentação do Clube",
  iconeTrilha: "🔬",
  bncc: [
    "EF03LP25",
    "EF03LP22",
    "EF35LP01",
    "EF35LP02",
    "EF35LP17",
    "EF35LP18",
    "EF35LP19",
    "EF35LP20",
    "EF35LP21",
    "EF35LP22",
    "EF35LP24",
    "EF35LP27",
    "EF35LP29",
    "EF35LP30",
    "EF35LP13",
  ],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "O último caso: contar o que descobriu",
    historia:
      "Aurora colocou o boné de detetive-chefe na mesa. — Descobrir é metade do trabalho. A outra metade é CONTAR direito: escolher a fonte certa, anotar em tópicos e apresentar para a turma sem ler tudo de cabeça baixa. Hoje você vira pesquisador e apresentador.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Duas fontes chegaram ao clube. Qual serve para a pesquisa?",
    bloco: {
      titulo: "A Pesquisa e a Apresentação do Clube",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: livro, nome: "Um livro de ciências com o nome do autor e o ano" },
        { imagemUrl: papel, nome: "Um papel sem autor dizendo 'ouvi falar que…'" },
      ],
      pergunta: "Qual das duas é fonte confiável para uma pesquisa?",
      hipoteses: [
        { texto: "O livro com autor e ano — dá para conferir quem escreveu.", imagemUrl: livro },
        { texto: "O papel do 'ouvi falar' — é mais rápido.", imagemUrl: papel },
        { texto: "As duas valem igual.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🔍 Isso! Fonte confiável tem autor e é possível conferir.",
      feedbackErro: "'Ouvi falar' não tem autor nem prova. Isso não é fonte.",
      dica: "Quem escreveu? Dá para conferir?",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de pesquisador.",
    cards: [
      {
        palavra: "fonte",
        explicacao: "É de onde a informação veio: livro, site de escola, entrevista.",
        exemplo: "Minha fonte foi o livro de ciências da biblioteca.",
        imagemUrl: livro,
      },
      {
        palavra: "tópico",
        explicacao: "Anotação curta, só com o essencial, para não copiar tudo.",
        exemplo: "Tópico: a onça-pintada come capivara.",
        imagemUrl: lapis,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Anotar em tópicos e falar em cena",
    instrucao: "Compare as formas. Cada linha mostra um passo do pesquisador e do apresentador.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "TEXTO: 'A onça-pintada é o maior felino das Américas e vive na mata.'",
            explicacao: "Fonte lida com atenção. Não se copia tudo.",
          },
          {
            texto: "TÓPICO: maior felino das Américas · vive na mata",
            explicacao: "Anotação em tópicos: palavras-chave, sem frase inteira.",
          },
          {
            texto: "FALA: 'Descobri que a onça é o maior felino das Américas.'",
            explicacao: "Na apresentação você fala com suas palavras, olhando para a turma.",
          },
        ],
      },
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "DIRETO: — Achei a pista! — gritou Theo.",
            explicacao: "Discurso DIRETO: travessão e as palavras exatas do personagem.",
          },
          {
            texto: "INDIRETO: Theo gritou que havia achado a pista.",
            explicacao: "Discurso INDIRETO: o narrador conta a fala, sem travessão.",
          },
          {
            texto: "TEATRO: THEO (animado): Achei a pista!",
            explicacao: "No texto teatral vem o nome do personagem, a rubrica entre parênteses e a fala.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia a ficha de pesquisa que Marina levou ao clube.",
    leitura: {
      titulo: "Ficha de pesquisa: a onça-pintada",
      imagemUrl: livro,
      legendaImagem: "A ficha de pesquisa com fonte anotada no pé da página",
      destacar: ["Fonte", "tópicos", "conclusão"],
      paragrafos: [
        "Tema: a onça-pintada.",
        "Tópicos: é o maior felino das Américas; vive na mata e perto de rios; caça capivara e jacaré; está ameaçada de extinção.",
        "Conclusão: a onça precisa de mata em pé para sobreviver.",
        "Fonte: livro 'Animais do Brasil', da biblioteca da escola.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte na ficha sempre que precisar.",
    perguntas: [
      {
        pergunta: "Qual é a fonte da pesquisa de Marina?",
        opcoes: [
          "Um vídeo de desenho",
          "O livro 'Animais do Brasil' da biblioteca",
          "Uma conversa no recreio",
          "Um cartaz do muro",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! A fonte está anotada no fim da ficha.",
        feedbackErro: "Procure a linha que começa com 'Fonte:'.",
        ondeEstaNoTexto: "Fonte: livro 'Animais do Brasil', da biblioteca da escola.",
        dica: "🔎 Toda pesquisa anota de onde veio a informação.",
        reensino:
          "📚 Vamos rever juntos: anotar a fonte é obrigatório — mostra que a informação pode ser conferida.",
      },
      {
        pergunta: "Segundo os tópicos, do que a onça se alimenta?",
        opcoes: ["Frutas", "Capivara e jacaré", "Folhas da mata", "Peixes do mar"],
        correta: 1,
        feedbackAcerto: "🔍 Exato!",
        feedbackErro: "Está na linha dos tópicos.",
        ondeEstaNoTexto: "caça capivara e jacaré",
        dica: "🔎 Procure a palavra 'caça'.",
        reensino:
          "📚 Vamos rever juntos: tópicos guardam o essencial. Basta localizar a palavra-chave.",
      },
      {
        pergunta: "A conclusão da pesquisa diz que a onça precisa de…",
        opcoes: ["cidade grande", "mata em pé", "zoológico", "praia"],
        correta: 1,
        feedbackAcerto: "🔍 Boa! Conclusão é o fechamento da pesquisa.",
        feedbackErro: "A conclusão é a linha que começa com 'Conclusão:'.",
        ondeEstaNoTexto: "a onça precisa de mata em pé para sobreviver",
        dica: "🔎 Onde está escrito 'Conclusão'?",
        reensino:
          "📚 Vamos rever juntos: a conclusão junta os tópicos em uma ideia final.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora aplique: fala de personagem e fala de apresentação.",
    perguntas: [
      {
        pergunta: "Qual frase está em discurso DIRETO?",
        opcoes: [
          "Theo disse que achou a pista.",
          "— Achei a pista! — gritou Theo.",
          "Theo ficou animado com a pista.",
          "A pista estava na caixa.",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Travessão + palavras exatas do personagem.",
        feedbackErro: "Discurso direto usa travessão e traz a fala como foi dita.",
        dica: "🔎 Em qual frase aparece o travessão?",
        reensino:
          "📚 Vamos rever juntos: direto = travessão e fala exata; indireto = o narrador conta a fala.",
      },
      {
        pergunta: "Ao apresentar para a turma, o melhor jeito é…",
        opcoes: [
          "ler tudo de cabeça baixa, bem rápido",
          "falar com suas palavras, olhando para a turma, com os tópicos na mão",
          "decorar palavra por palavra",
          "falar bem baixinho para não errar",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato! Tópicos servem de apoio, não de leitura.",
        feedbackErro: "Apresentar é falar com a turma, não ler o texto todo.",
        dica: "🔎 Para que servem os tópicos?",
        reensino:
          "📚 Vamos rever juntos: apresentação = voz audível, olhar na turma e tópicos como guia.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque a pesquisa na ordem de trabalho do detetive.",
    bloco: {
      instrucao: "Do começo ao fim de uma pesquisa apresentada.",
      itens: [
        { id: "s1", texto: "Escolher o tema e a pergunta", imagemUrl: lapis },
        { id: "s2", texto: "Procurar fonte confiável e ler", imagemUrl: livro },
        { id: "s3", texto: "Anotar em tópicos e escrever a conclusão", imagemUrl: papel },
        { id: "s4", texto: "Apresentar para a turma e ouvir as perguntas", imagemUrl: professora },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🔍 Perfeito! Pergunta → fonte → tópicos → apresentação.",
      feedbackErro: "Não dá para apresentar antes de pesquisar. Comece pelo tema.",
      dica: "🔎 O que vem antes: ler a fonte ou falar para a turma?",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho esta cena de teatro — depois leia em voz alta fazendo os personagens.",
    leitura: {
      titulo: "Cena: o clube apresenta",
      imagemUrl: professora,
      destacar: ["MARINA", "THEO", "AURORA"],
      paragrafos: [
        "Cenário: a sala do clube, com um cartaz da onça-pintada na parede.",
        "MARINA (segurando a ficha): Descobri que a onça é o maior felino das Américas.",
        "THEO (curioso): E onde ela mora?",
        "MARINA: Na mata, perto dos rios. Sem mata, ela desaparece.",
        "AURORA (batendo palmas): Caso apresentado com fonte e conclusão. Aprovada, detetive!",
      ],
    },
    perguntas: [
      {
        pergunta: "Neste texto teatral, o que está entre parênteses?",
        opcoes: [
          "A fala do personagem",
          "A indicação de como o personagem age",
          "O nome do autor",
          "A fonte da pesquisa",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Chama-se rubrica: diz como agir na cena.",
        feedbackErro: "'(curioso)', '(batendo palmas)' indicam a ação, não a fala.",
        ondeEstaNoTexto: "THEO (curioso): E onde ela mora?",
        dica: "🔎 O que está nos parênteses é fala ou gesto?",
        reensino:
          "📚 Vamos rever juntos: no teatro há nome do personagem, rubrica entre parênteses e a fala.",
      },
      {
        pergunta: "Onde a cena acontece?",
        opcoes: ["Na mata", "Na sala do clube", "No rio", "Na biblioteca"],
        correta: 1,
        feedbackAcerto: "🔍 Exato — o cenário está na primeira linha.",
        feedbackErro: "A primeira linha descreve o cenário.",
        ondeEstaNoTexto: "Cenário: a sala do clube, com um cartaz da onça-pintada na parede.",
        dica: "🔎 Procure a palavra 'Cenário'.",
        reensino:
          "📚 Vamos rever juntos: o texto teatral abre indicando o cenário da cena.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina: minha ficha de pesquisa",
    instrucao:
      "Escreva a sua pesquisa de verdade: RASCUNHO, REVISÃO com a lista e VERSÃO FINAL para apresentar em voz alta.",
    blocos: [
      {
        tipo: "ditadoFrase",
        frases: [
          {
            frase: "Anotei a fonte da pesquisa.",
            palavras: ["Anotei", "a", "fonte", "da", "pesquisa."],
            distratores: ["fonti", "pesquiza"],
            dica: "PESQUISA é com S, não com Z.",
          },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Ficha de pesquisa do detetive",
        comando:
          "Escolha um animal, um lugar ou uma profissão. Escreva: Tema, uma pergunta, 4 tópicos, a conclusão e a fonte. Depois apresente falando com suas palavras.",
        linhas: 8,
        checklist: [
          "Escrevi o tema e a minha pergunta de pesquisa.",
          "Anotei 4 tópicos curtos, sem copiar frases inteiras.",
          "Escrevi uma conclusão juntando os tópicos.",
          "Anotei a FONTE (livro, site da escola ou pessoa entrevistada).",
          "Treinei falar em voz alta olhando para quem escuta.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura dramatizada: a cena do clube",
    instrucao:
      "Leia três vezes: entendendo, no cronômetro e em voz alta fazendo a voz de Marina, de Theo e de Aurora.",
    texto: [
      "MARINA: Descobri que a onça é o maior felino das Américas.",
      "THEO: E onde ela mora?",
      "MARINA: Na mata, perto dos rios. Sem mata, ela desaparece.",
    ],
    metaSegundos: 22,
  },

  momento09_revisao: {
    pontos: [
      "Pesquisa começa por uma pergunta e só usa fonte confiável (com autor).",
      "Anote em tópicos: palavras-chave, sem copiar tudo.",
      "Toda pesquisa termina com conclusão e com a fonte anotada.",
      "Apresentar é falar com suas palavras, com voz audível, olhando para a turma — e escutar quem apresenta.",
      "Discurso direto usa travessão; indireto é o narrador contando a fala.",
    ],
    miniDesafio: {
      pergunta: "O que toda pesquisa precisa ter anotado no fim?",
      opcoes: ["Um slogan", "A fonte", "Uma despedida", "Uma receita"],
      correta: 1,
      feedbackAcerto: "🔍 Isso! Sem fonte, não é pesquisa.",
      feedbackErro: "Slogan é do cartaz e despedida é da carta. Pesquisa pede FONTE.",
      dica: "🔎 De onde veio a informação?",
      reensino:
        "📚 Vamos rever juntos: fonte é a prova de que a informação pode ser conferida.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Fonte confiável de pesquisa é aquela que…",
        opcoes: [
          "ninguém sabe quem escreveu",
          "tem autor e pode ser conferida",
          "foi ouvida no recreio",
          "está em letra grande",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso!",
        feedbackErro: "Sem autor não há como conferir a informação.",
        feedbackOpcoes: [
          "❌ Sem autor não dá para confiar.",
          "✅ Isso! Autor + possibilidade de conferir.",
          "❌ 'Ouvi falar' não é fonte.",
          "❌ Tamanho da letra não garante verdade.",
        ],
        dica: "🔎 Quem escreveu?",
        reensino: "📚 Vamos rever: fonte confiável tem autor e origem verificável.",
      },
      {
        pergunta: "2/5 — Anotar em tópicos significa…",
        opcoes: [
          "copiar o texto inteiro",
          "escrever só as palavras-chave",
          "decorar tudo",
          "desenhar o assunto",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato!",
        feedbackErro: "Tópico é anotação curta, não cópia.",
        feedbackOpcoes: [
          "❌ Copiar tudo não é pesquisar.",
          "✅ Isso! Só o essencial, em palavras-chave.",
          "❌ Decorar não ajuda a entender.",
          "❌ Desenho pode ajudar, mas não é o tópico.",
        ],
        dica: "🔎 Tópico é curto ou longo?",
        reensino: "📚 Vamos rever: tópicos = palavras-chave que cabem numa linha.",
      },
      {
        pergunta: "3/5 — Qual frase está em discurso INDIRETO?",
        opcoes: [
          "— Achei! — disse Theo.",
          "Theo disse que havia achado a pista.",
          "— Onde está? — perguntou Marina.",
          "THEO (animado): Achei!",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Boa! O narrador conta a fala, sem travessão.",
        feedbackErro: "As outras trazem a fala exata com travessão ou em cena.",
        feedbackOpcoes: [
          "❌ Tem travessão: é discurso direto.",
          "✅ Isso! O narrador reconta a fala.",
          "❌ Também é direto, com travessão.",
          "❌ Essa é a forma do texto teatral.",
        ],
        dica: "🔎 Qual não usa travessão?",
        reensino: "📚 Vamos rever: indireto = 'disse que…'; direto = travessão e fala exata.",
      },
      {
        pergunta: "4/5 — Numa apresentação oral para a turma, você deve…",
        opcoes: [
          "falar baixinho olhando o chão",
          "falar alto e claro, olhando para quem escuta",
          "ler o texto inteiro sem parar",
          "falar só para o professor",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso!",
        feedbackErro: "Quem apresenta fala para todos, com voz clara.",
        feedbackOpcoes: [
          "❌ Assim ninguém escuta.",
          "✅ Isso! Voz clara e olhar na plateia.",
          "❌ Ler tudo tira a atenção da turma.",
          "❌ A turma toda é a plateia.",
        ],
        dica: "🔎 Quem precisa entender você?",
        reensino: "📚 Vamos rever: apresentar bem = voz audível + olhar + tópicos de apoio.",
      },
      {
        pergunta: "5/5 — No texto teatral, '(batendo palmas)' é…",
        opcoes: ["a fala", "a rubrica que indica a ação", "o cenário", "o título"],
        correta: 1,
        feedbackAcerto: "🔍 Exato!",
        feedbackErro: "O que está entre parênteses indica como o personagem age.",
        feedbackOpcoes: [
          "❌ A fala vem depois dos dois-pontos.",
          "✅ Isso! Rubrica = indicação de ação.",
          "❌ O cenário é descrito no início da cena.",
          "❌ O título nomeia a peça.",
        ],
        dica: "🔎 Parênteses trazem gesto ou fala?",
        reensino: "📚 Vamos rever: personagem : fala / (parênteses) : ação.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: entrevista e apresentação em casa",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Escolha alguém da família e prepare 4 perguntas por escrito.",
      "2) Faça a entrevista e anote as respostas em tópicos curtos.",
      "3) Escreva uma conclusão e anote a fonte: o nome da pessoa entrevistada.",
      "4) Apresente para a família em voz alta, olhando para quem escuta.",
    ],
    registro: "📸 Tire uma foto da sua ficha de entrevista com os tópicos anotados.",
  },

  recompensa: {
    xp: 180,
    moedas: 60,
    medalha: "Detetive Pesquisador",
  },
};
