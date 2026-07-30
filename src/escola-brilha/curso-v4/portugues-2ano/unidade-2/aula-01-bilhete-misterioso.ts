import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as pai } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * Unidade 2 · Aula 1 — O Bilhete Misterioso
 * -------------------------------------------------------------
 * Brilha abre a porta da "Sala dos Exploradores dos Textos" e um
 * papelzinho está preso na porta. É o primeiro GÊNERO TEXTUAL
 * da unidade: o BILHETE.
 *
 * Foco pedagógico:
 *  - reconhecer o bilhete como gênero curto pra deixar recado;
 *  - identificar destinatário, mensagem e assinatura;
 *  - localizar informações explícitas em texto funcional.
 *
 * BNCC: EF02LP09 · EF02LP10 · EF02LP13
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-bilhete-misterioso",
  titulo: "O Bilhete Misterioso",
  iconeTrilha: "📩",
  bncc: ["EF02LP09", "EF02LP10", "EF02LP13"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A Sala dos Exploradores dos Textos",
    historia:
      "Brilha abre uma porta nova da biblioteca. Uma placa diz: 📚 SALA DOS EXPLORADORES DOS TEXTOS. Dezenas de papéis voam pelo ar! Aurora explica: — Nem todo texto é uma história. Alguns servem pra AVISAR, LEMBRAR, CONVIDAR. Vamos descobrir o primeiro?",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao:
      "Um papelzinho está preso na porta. Leia o que está escrito e pense: pra que serve esse tipo de papel?",
    bloco: {
      titulo: "O papelzinho da porta",
      recado: {
        icone: "📩",
        rotulo: "Papelzinho preso na porta",
        estilo: "papel",
        linhas: [
          "Brilha,",
          "Fui buscar novos livros",
          "na sala ao lado.",
          "Espere por mim.",
          "",
          "Aurora.",
        ],
      },
      pergunta: "Pra que serve um papelzinho pequeno assim, preso na porta?",
      hipoteses: [
        { texto: "Pra deixar um RECADO pra alguém.", imagemUrl: papel },
        { texto: "Pra contar uma história longa com personagens.", imagemUrl: livro },
        { texto: "Pra segurar a porta fechada.", imagemUrl: papel },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Papel curto na porta = RECADO. Isso é um BILHETE.",
      feedbackErro:
        "História precisa de muitas páginas. Papelzinho pequeno serve pra deixar RECADO.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras que fazem parte de todo bilhete.",
    cards: [
      {
        palavra: "destinatário",
        explicacao:
          "É a pessoa PRA QUEM o bilhete foi escrito. Aparece no comecinho: 'Fulano,'.",
        exemplo: "'Mamãe,' — a mamãe é a destinatária desse bilhete.",
        imagemUrl: mae,
      },
      {
        palavra: "mensagem",
        explicacao: "É o RECADO em si — o que a pessoa quer avisar.",
        exemplo: "'Fui na padaria, já volto.' — essa é a mensagem.",
        imagemUrl: papel,
      },
      {
        palavra: "assinatura",
        explicacao: "É o NOME de quem escreveu, no final do bilhete.",
        exemplo: "No final aparece 'Aurora' — ela é quem assinou.",
        imagemUrl: bibliotecaria,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "As frases de um bilhete",
    instrucao: "Ouça cada frase do bilhete e veja como ela começa e como termina.",
    blocos: [
          {
                "tipo": "fraseComPonto",
                "frases": [
                      {
                            "texto": "Oi, Brilha!",
                            "explicacao": "Saudação do bilhete: começa com maiúscula."
                      },
                      {
                            "texto": "Encontre o livro azul.",
                            "explicacao": "Frase que pede algo: ponto final."
                      },
                      {
                            "texto": "Quem deixou este bilhete?",
                            "explicacao": "Pergunta: ponto de interrogação."
                      }
                ]
          },
          {
                "tipo": "maiusculaMinuscula",
                "pares": [
                      {
                            "maiuscula": "B",
                            "minuscula": "b",
                            "exemplo": "Brilha / bilhete"
                      },
                      {
                            "maiuscula": "A",
                            "minuscula": "a",
                            "exemplo": "Aurora / azul"
                      },
                      {
                            "maiuscula": "P",
                            "minuscula": "p",
                            "exemplo": "Pedro / papel"
                      }
                ]
          }
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o bilhete que estava na porta. Repare em CADA parte: destinatário, mensagem, assinatura.",
    leitura: {
      titulo: "Bilhete na porta",
      imagemUrl: papel,
      legendaImagem: "O bilhete misterioso",
      destacar: ["Brilha", "Aurora", "livros"],
      paragrafos: [
        "Brilha,",
        "Fui buscar novos livros na sala ao lado. Espere por mim.",
        "Aurora.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no bilhete. Volte se precisar.",
    perguntas: [
      {
        pergunta: "Quem ESCREVEU o bilhete?",
        opcoes: ["Brilha", "Aurora", "A professora"],
        correta: 1,
        feedbackAcerto: "🎉 AURORA — o nome dela está no FINAL, é a assinatura.",
        feedbackErro:
          "A ASSINATURA está no fim do bilhete. Qual nome aparece lá?",
        dica: "Volte no texto e procure a parte que fala de 'escreveu'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A ASSINATURA está no fim do bilhete. Qual nome aparece lá? Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Aurora.",
      },
      {
        pergunta: "Pra QUEM o bilhete foi escrito?",
        opcoes: ["Pra Aurora", "Pra Brilha", "Pra os livros"],
        correta: 1,
        feedbackAcerto:
          "🎉 Pra BRILHA — o nome está no COMEÇO, é o destinatário.",
        feedbackErro:
          "O DESTINATÁRIO fica no comecinho, seguido de vírgula. Qual nome está lá?",
        dica: "Volte no texto e procure a parte que fala de 'bilhete'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O DESTINATÁRIO fica no comecinho, seguido de vírgula. Qual nome está lá? Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Brilha,",
      },
      {
        pergunta: "Qual é a MENSAGEM do bilhete?",
        opcoes: [
          "Que Aurora foi buscar livros na sala ao lado e vai voltar",
          "Que Brilha tem que ir embora",
          "Que a biblioteca está fechada",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A mensagem é o RECADO do meio.",
        feedbackErro:
          "A mensagem é a FRASE do meio — entre o nome de quem recebe e a assinatura.",
        dica: "Volte no texto e procure a parte que fala de 'mensagem'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A mensagem é a FRASE do meio — entre o nome de quem recebe e a assinatura. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Fui buscar novos livros na sala ao lado. Espere por mim.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Em texto do dia a dia, os 'personagens' são QUEM escreve e QUEM recebe.",
    perguntas: [
      {
        pergunta: "Um bilhete SEMPRE tem quais 3 partes?",
        opcoes: [
          "Título, capa e ilustração",
          "Destinatário, mensagem e assinatura",
          "Começo, meio e fim de história",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! DESTINATÁRIO (pra quem) + MENSAGEM (recado) + ASSINATURA (quem escreveu).",
        feedbackErro:
          "Bilhete tem 3 partes: quem RECEBE, o RECADO, e quem ESCREVEU (assinatura).",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Pra que serve um bilhete no dia a dia?",
        opcoes: [
          "Pra deixar um recado rápido pra alguém",
          "Pra contar uma história longa",
          "Pra fazer conta de matemática",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Bilhete = recado rápido.",
        feedbackErro:
          "Bilhete é CURTO. Serve pra avisar rápido: 'já volto', 'estou na escola', 'não me espere'.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as PARTES do bilhete na ordem certa.",
    bloco: {
      instrucao: "Um bilhete começa com… e termina com…",
      itens: [
        {
          id: "p1",
          texto: "Destinatário (o nome de quem recebe, com vírgula).",
          imagemUrl: mae,
        },
        {
          id: "p2",
          texto: "Mensagem (o recado no meio).",
          imagemUrl: papel,
        },
        {
          id: "p3",
          texto: "Assinatura (o nome de quem escreveu, no fim).",
          imagemUrl: brilha,
        },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Destinatário → Mensagem → Assinatura.",
      feedbackErro:
        "Começa com quem RECEBE. Depois vem o RECADO. Por último a ASSINATURA.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outro bilhete e responda.",
    leitura: {
      titulo: "Bilhete pra Miguel",
      imagemUrl: papel,
      destacar: ["Miguel", "Mamãe", "cachorro"],
      paragrafos: [
        "Miguel,",
        "Já dei água pro cachorro. Depois da lição, pode brincar no quintal.",
        "Mamãe.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem escreveu esse bilhete?",
        opcoes: ["Miguel", "Mamãe", "O cachorro"],
        correta: 1,
        feedbackAcerto: "🎉 MAMÃE (é a assinatura, no final).",
        feedbackErro: "Olhe a ÚLTIMA linha — a assinatura.",
        dica: "Volte no texto e procure a parte que fala de 'escreveu'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Olhe a ÚLTIMA linha — a assinatura. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Mamãe.",
      },
      {
        pergunta: "O que Miguel tem que fazer ANTES de brincar?",
        opcoes: ["Dar água pro cachorro", "A lição", "Almoçar"],
        correta: 1,
        feedbackAcerto: "🎉 A LIÇÃO. Só depois pode brincar.",
        feedbackErro:
          "O bilhete diz 'DEPOIS da lição, pode brincar'. Antes de brincar, o que ele faz?",
        dica: "Volte no texto e procure a parte que fala de 'brincar'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O bilhete diz 'DEPOIS da lição, pode brincar'. Antes de brincar, o que ele faz? Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Depois da lição, pode brincar no quintal.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Entregando Bilhetes",
    instrucao:
      "Cada bilhete precisa chegar ao DESTINATÁRIO certo. Toque no bilhete e depois na pessoa pra quem ele foi escrito.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "📩 Entregando Bilhetes",
      bloco: {
        instrucao: "Leia o começo de cada bilhete e entregue pra pessoa certa.",
        itens: [
          {
            id: "b1",
            texto: "'Mamãe, já almocei.'",
            imagemUrl: papel,
            alvoId: "mae",
          },
          {
            id: "b2",
            texto: "'Papai, deixei o dever na mesa.'",
            imagemUrl: papel,
            alvoId: "pai",
          },
          {
            id: "b3",
            texto: "'Professora, cheguei atrasado, desculpe.'",
            imagemUrl: papel,
            alvoId: "prof",
          },
          {
            id: "b4",
            texto: "'Turma, hoje a aula é no pátio!'",
            imagemUrl: papel,
            alvoId: "turma",
          },
        ],
        alvos: [
          { id: "mae", nome: "Mamãe", imagemUrl: mae },
          { id: "pai", nome: "Papai", imagemUrl: pai },
          { id: "prof", nome: "Professora", imagemUrl: professora },
          { id: "turma", nome: "A turma", imagemUrl: criancas },
        ],
        feedbackAcerto:
          "🎉 Todo bilhete entregue! Você reparou nos DESTINATÁRIOS certinho.",
        feedbackErro:
          "Olhe o COMEÇO de cada bilhete — o nome antes da vírgula mostra pra quem é.",
      },
    },
  },

    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: Bilhete pra Miguel",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "Já dei água pro cachorro.",
      "Depois da lição, pode brincar no quintal.",
    ],
    metaSegundos: 10,
  },

momento09_revisao: {
    pontos: [
      "BILHETE é um texto CURTO pra deixar RECADO.",
      "Tem 3 partes: DESTINATÁRIO (pra quem) · MENSAGEM (recado) · ASSINATURA (quem escreveu).",
      "O destinatário fica no COMEÇO, com vírgula. A assinatura fica no FIM.",
      "Bom leitor procura QUEM escreveu e PRA QUEM antes de tudo.",
    ],
    miniDesafio: {
      pergunta: "Onde aparece o nome de QUEM ESCREVEU o bilhete?",
      opcoes: ["No começo", "No meio", "No fim (assinatura)"],
      correta: 2,
      feedbackAcerto: "🎉 No FIM — chama-se assinatura.",
      feedbackErro:
        "Quem escreveu SEMPRE assina no FIM. É a assinatura.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Quem escreveu SEMPRE assina no FIM. É a assinatura. Agora leia de novo e escolha com calma.",
    },
  },


  // ------------------------------------------------------------
  // ESCRITA (Fase 3) — ditado de palavra e frase + produção real
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Oficina de Escrita",
    instrucao: "Agora é você quem escreve! Ouça, monte com as peças e depois escreva de verdade.",
    blocos: [
      {
        tipo: "ditadoSilabas",
        palavras: [
        {
          palavra: "BILHETE",
          silabas: ["BI", "LHE", "TE"],
          distratores: ["RE", "CA"],
          dica: "Bata palmas na palavra BILHETE: são 3 pedacinhos.",
        },
        {
          palavra: "RECADO",
          silabas: ["RE", "CA", "DO"],
          distratores: ["BI", "LHE"],
          dica: "Bata palmas na palavra RECADO: são 3 pedacinhos.",
        },
        {
          palavra: "AVISO",
          silabas: ["A", "VI", "SO"],
          distratores: ["BI", "LHE"],
          dica: "Bata palmas na palavra AVISO: são 3 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "Deixei um bilhete na mesa.",
          palavras: ["Deixei", "um", "bilhete", "na", "mesa."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "bilhete",
        titulo: "Meu bilhete de verdade",
        comando: "Escreva um bilhete para alguém da sua casa.",
        campos: [
          { rotulo: "Para quem", placeholder: "Para a mamãe", minLetras: 4 },
          { rotulo: "Recado", placeholder: "Fui brincar no quintal…", minLetras: 14 },
          { rotulo: "De quem", placeholder: "seu nome", minLetras: 3 },
        ],
        checklist: [
          "O bilhete diz PARA QUEM é.",
          "O recado está claro e curto.",
          "Assinei com o meu nome.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Bilhete serve pra…",
        opcoes: [
          "Contar uma história longa",
          "Deixar um recado rápido",
          "Fazer contas",
          "Fui na padaria, já volto",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Contar uma história longa» não é a resposta. A certa é «Deixar um recado rápido».",
          null,
          "«Fazer contas» não é a resposta. A certa é «Deixar um recado rápido».",
          "«Fui na padaria, já volto» não é a resposta. A certa é «Deixar um recado rápido».",
        ],
        feedbackAcerto: "🎉 Recado rápido!",
        feedbackErro: "Bilhete é curto — serve pra RECADO.",
        dica: "Pista: a resposta certa começa com a letra 'D'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Bilhete é curto — serve pra RECADO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — Em 'Brilha, fui buscar livros. Aurora.' — quem é o destinatário?",
        opcoes: ["Aurora", "Brilha", "Os livros",
          "A lição",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Aurora» não é a resposta. A certa é «Brilha».",
          null,
          "«Os livros» não é a resposta. A certa é «Brilha».",
          "«A lição» não é a resposta. A certa é «Brilha».",
        ],
        feedbackAcerto: "🎉 BRILHA — nome antes da vírgula, no começo.",
        feedbackErro:
          "Destinatário = quem RECEBE. Fica no começo, antes da vírgula.",
        dica: "Pista: a resposta certa começa com a letra 'B'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Destinatário = quem RECEBE. Fica no começo, antes da vírgula. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — E quem é a assinatura?",
        opcoes: ["Aurora", "Brilha", "Ninguém",
          "Miguel",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Brilha» não é a resposta. A certa é «Aurora».",
          "«Ninguém» não é a resposta. A certa é «Aurora».",
          "«Miguel» não é a resposta. A certa é «Aurora».",
        ],
        feedbackAcerto: "🎉 AURORA — nome do final = assinatura.",
        feedbackErro: "Assinatura = nome de quem ESCREVEU. Fica no FINAL.",
        dica: "Pista: a resposta certa começa com a letra 'B'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Assinatura = nome de quem ESCREVEU. Fica no FINAL. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — Qual dessas é uma MENSAGEM de bilhete?",
        opcoes: [
          "Fui na padaria, já volto",
          "Aurora.",
          "Brilha,",
          "No meio",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Aurora.» não é a resposta. A certa é «Fui na padaria, já volto».",
          "«Brilha,» não é a resposta. A certa é «Fui na padaria, já volto».",
          "«No meio» não é a resposta. A certa é «Fui na padaria, já volto».",
        ],
        feedbackAcerto: "🎉 Isso! Mensagem é o RECADO do meio.",
        feedbackErro:
          "Mensagem é o RECADO — a frase do meio, entre o destinatário e a assinatura.",
        dica: "Pista: a resposta certa começa com a letra 'F'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Mensagem é o RECADO — a frase do meio, entre o destinatário e a assinatura. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Um bilhete que só tem 'Aurora.' está…",
        opcoes: [
          "Completo",
          "Faltando destinatário e mensagem",
          "Faltando só a data",
          "Pra Brilha",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Completo» não é a resposta. A certa é «Faltando destinatário e mensagem».",
          null,
          "«Faltando só a data» não é a resposta. A certa é «Faltando destinatário e mensagem».",
          "«Pra Brilha» não é a resposta. A certa é «Faltando destinatário e mensagem».",
        ],
        feedbackAcerto:
          "🎉 Certo! Só a assinatura não é bilhete — falta destinatário e mensagem.",
        feedbackErro:
          "Bilhete precisa das 3 partes: destinatário, mensagem E assinatura.",
        dica: "Pista: a resposta certa começa com a letra 'F'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Bilhete precisa das 3 partes: destinatário, mensagem E assinatura. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📩 Um bilhete pra alguém da casa",
    materiais: ["1 papelzinho", "Lápis ou caneta"],
    passos: [
      "1) A criança escolhe UMA pessoa da casa pra receber o bilhete.",
      "2) Escreve o nome dela no começo, com vírgula.",
      "3) Escreve a mensagem — pode ser 'Te amo', 'Obrigada pela janta', 'Bom dia'.",
      "4) Assina o próprio nome no fim.",
      "5) Cola o bilhete no lugar onde a pessoa vai encontrar.",
    ],
    registro: "📸 Uma foto do bilhete colado no lugar da surpresa.",
  },

  recompensa: { xp: 110, moedas: 60 },
};
