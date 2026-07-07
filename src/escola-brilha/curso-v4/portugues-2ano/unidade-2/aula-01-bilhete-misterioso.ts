import type { AulaPortuguesV4 } from "../../types";
import bibliotecaria from "@/assets/neuro-treino/objetos/bibliotecario.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";
import mae from "@/assets/neuro-treino/objetos/mae.png";
import pai from "@/assets/neuro-treino/objetos/pai.png";
import professora from "@/assets/neuro-treino/objetos/professora.png";
import criancas from "@/assets/neuro-treino/objetos/criancas-grupo.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";

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
      "Um papelzinho está preso na porta. Antes de ler, pensa: pra que serve esse tipo de papel?",
    bloco: {
      titulo: "O papelzinho da porta",
      capaImagemUrl: papel,
      pistas: [{ imagemUrl: papel, nome: "Um papel pequeno" }],
      pergunta: "Pra que serve um papelzinho preso na porta?",
      hipoteses: [
        { texto: "Pra deixar um RECADO pra alguém.", imagemUrl: papel },
        { texto: "Pra contar uma história longa com personagens.", imagemUrl: livro },
        { texto: "Pra segurar a porta fechada.", imagemUrl: papel },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Papel curto na porta = RECADO. Isso é um BILHETE.",
      feedbackErro:
        "História precisa de muitas páginas. Papelzinho pequeno serve pra deixar RECADO.",
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
        ondeEstaNoTexto: "Mamãe.",
      },
      {
        pergunta: "O que Miguel tem que fazer ANTES de brincar?",
        opcoes: ["Dar água pro cachorro", "A lição", "Almoçar"],
        correta: 1,
        feedbackAcerto: "🎉 A LIÇÃO. Só depois pode brincar.",
        feedbackErro:
          "O bilhete diz 'DEPOIS da lição, pode brincar'. Antes de brincar, o que ele faz?",
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
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Bilhete serve pra…",
        opcoes: [
          "Contar uma história longa",
          "Deixar um recado rápido",
          "Fazer contas",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Recado rápido!",
        feedbackErro: "Bilhete é curto — serve pra RECADO.",
      },
      {
        pergunta: "2/5 — Em 'Brilha, fui buscar livros. Aurora.' — quem é o destinatário?",
        opcoes: ["Aurora", "Brilha", "Os livros"],
        correta: 1,
        feedbackAcerto: "🎉 BRILHA — nome antes da vírgula, no começo.",
        feedbackErro:
          "Destinatário = quem RECEBE. Fica no começo, antes da vírgula.",
      },
      {
        pergunta: "3/5 — E quem é a assinatura?",
        opcoes: ["Aurora", "Brilha", "Ninguém"],
        correta: 0,
        feedbackAcerto: "🎉 AURORA — nome do final = assinatura.",
        feedbackErro: "Assinatura = nome de quem ESCREVEU. Fica no FINAL.",
      },
      {
        pergunta: "4/5 — Qual dessas é uma MENSAGEM de bilhete?",
        opcoes: [
          "Fui na padaria, já volto",
          "Aurora.",
          "Brilha,",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Mensagem é o RECADO do meio.",
        feedbackErro:
          "Mensagem é o RECADO — a frase do meio, entre o destinatário e a assinatura.",
      },
      {
        pergunta: "5/5 — Um bilhete que só tem 'Aurora.' está…",
        opcoes: [
          "Completo",
          "Faltando destinatário e mensagem",
          "Faltando só a data",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Certo! Só a assinatura não é bilhete — falta destinatário e mensagem.",
        feedbackErro:
          "Bilhete precisa das 3 partes: destinatário, mensagem E assinatura.",
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
