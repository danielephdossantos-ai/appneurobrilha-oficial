import type { AulaPortuguesV4 } from "../../types";
import bibliotecaria from "@/assets/neuro-treino/objetos/bibliotecario.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";
import festa from "@/assets/neuro-treino/objetos/festa.png";
import calendario from "@/assets/neuro-treino/objetos/calendario.png";
import bolo from "@/assets/neuro-treino/objetos/bolo.png";
import biblioteca from "@/assets/neuro-treino/objetos/biblioteca.png";
import lavarMaos from "@/assets/neuro-treino/objetos/lavar-maos.png";
import mochila from "@/assets/neuro-treino/objetos/mochila.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import livros from "@/assets/neuro-treino/objetos/livros.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";

/**
 * Unidade 2 · Aula 5 — Missão Final dos Exploradores
 * -------------------------------------------------------------
 * A Biblioteca Encantada tem uma PILHA de textos misturados. A
 * criança precisa reconhecer cada gênero e explicar pra que serve.
 * Fecha a unidade com a "Pasta dos Gêneros Textuais".
 *
 * BNCC: EF02LP09 · EF02LP10 · EF02LP11 · EF02LP12 · EF02LP13
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-missao-final-exploradores",
  titulo: "Missão Final dos Exploradores",
  iconeTrilha: "🏅",
  bncc: [
    "EF02LP09",
    "EF02LP10",
    "EF02LP11",
    "EF02LP12",
    "EF02LP13",
  ],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A pilha de textos misturados",
    historia:
      "Aurora chega com uma pilha ENORME de papéis. — Achei esses textos jogados atrás da estante! Preciso ORGANIZAR: qual é bilhete, qual é convite, qual é lista, qual é cartaz? Você já sabe. Vamos fechar essa missão!",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Sem ler ainda: como a gente RECONHECE o tipo de texto só de olhar?",
    bloco: {
      titulo: "A pilha de textos",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: papel, nome: "Um bilhete" },
        { imagemUrl: festa, nome: "Um convite" },
        { imagemUrl: livros, nome: "Uma lista" },
      ],
      pergunta: "O que ajuda a saber que tipo de texto é?",
      hipoteses: [
        {
          texto: "O FORMATO e o JEITO que ele foi escrito.",
          imagemUrl: papel,
        },
        {
          texto: "A cor do papel só.",
          imagemUrl: papel,
        },
        {
          texto: "O tamanho da caneta usada.",
          imagemUrl: papel,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Bilhete tem destinatário e assinatura, convite tem data e local, lista tem itens em linha, cartaz tem letras GRANDES.",
      feedbackErro:
        "Não é a cor nem a caneta. É o FORMATO: cada gênero tem um jeito próprio.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras pra fechar a unidade.",
    cards: [
      {
        palavra: "gênero textual",
        explicacao:
          "É o TIPO de texto. Bilhete, convite, lista, cartaz, aviso — cada um é um gênero.",
        exemplo: "'Bilhete' é um gênero textual. 'Convite' também.",
        imagemUrl: livros,
      },
      {
        palavra: "finalidade",
        explicacao:
          "É PRA QUE SERVE. A finalidade do bilhete é dar recado. A finalidade do convite é chamar pra evento.",
        exemplo: "Qual é a finalidade da lista? Organizar.",
        imagemUrl: estrela,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Vamos LER quatro textos, um de cada tipo. Preste atenção no JEITO de cada um.",
    leitura: {
      titulo: "Quatro textos, quatro finalidades",
      imagemUrl: papel,
      legendaImagem: "Um pedaço de cada gênero",
      destacar: ["Bilhete", "Convite", "Lista", "Cartaz"],
      paragrafos: [
        "📩 BILHETE — 'Brilha, já voltei. Aurora.'",
        "🎉 CONVITE — 'Festa dos Livros. Sábado, 15h, na biblioteca.'",
        "📝 LISTA — '• Livros • Lápis • Papel • Giz'",
        "📢 CARTAZ — 'SILÊNCIO. Pessoas lendo.'",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Cada pergunta é sobre UM texto acima.",
    perguntas: [
      {
        pergunta: "'Brilha, já voltei. Aurora.' — qual é o gênero?",
        opcoes: ["Bilhete", "Convite", "Cartaz"],
        correta: 0,
        feedbackAcerto:
          "🎉 BILHETE — tem destinatário (Brilha,), mensagem e assinatura (Aurora).",
        feedbackErro:
          "Tem NOME no começo com vírgula e ASSINATURA no fim. É bilhete.",
      },
      {
        pergunta: "'Festa dos Livros. Sábado, 15h, na biblioteca.' — o que é?",
        opcoes: ["Uma lista", "Um convite", "Um bilhete"],
        correta: 1,
        feedbackAcerto: "🎉 CONVITE — tem motivo, data, hora e local.",
        feedbackErro:
          "Fala QUANDO, ONDE e POR QUÊ tem um evento. Isso é CONVITE.",
      },
      {
        pergunta: "'• Livros • Lápis • Papel • Giz' — o que é?",
        opcoes: ["Uma lista", "Um cartaz", "Uma história"],
        correta: 0,
        feedbackAcerto: "🎉 LISTA — vários itens, cada um marcado.",
        feedbackErro:
          "Vários ITENS, um do lado do outro (ou um por linha). É uma LISTA.",
      },
      {
        pergunta: "'SILÊNCIO. Pessoas lendo.' — pra que serve?",
        opcoes: [
          "Convidar pra festa",
          "AVISAR muita gente do que fazer",
          "Escrever bilhete pra uma pessoa",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! CARTAZ avisa MUITAS pessoas.",
        feedbackErro: "Frase curta e forte, pra MUITA gente ler. É cartaz/aviso.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Cada gênero tem uma FINALIDADE. Vamos combinar.",
    perguntas: [
      {
        pergunta: "A finalidade do BILHETE é…",
        opcoes: [
          "Deixar recado curto pra alguém",
          "Chamar pra festa",
          "Organizar coisas",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Bilhete = RECADO curto. Convite = evento. Lista = organizar.",
      },
      {
        pergunta: "A finalidade do CONVITE é…",
        opcoes: [
          "Ensinar a lavar as mãos",
          "Chamar alguém pra um evento",
          "Fazer lista de compras",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Convite CHAMA pra um evento (festa, jantar, encontro).",
      },
      {
        pergunta: "A finalidade da LISTA é…",
        opcoes: [
          "Contar história",
          "Organizar pra não esquecer",
          "Convidar pessoas",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Lista ORGANIZA — itens um por linha.",
      },
      {
        pergunta: "A finalidade do CARTAZ é…",
        opcoes: [
          "Comunicar algo pra MUITAS pessoas ao mesmo tempo",
          "Deixar recado pra UMA pessoa",
          "Guardar segredos",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Cartaz é PÚBLICO. Muita gente vê.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem as 4 aulas dessa unidade (na ordem que a gente viu).",
    bloco: {
      instrucao: "Da primeira aula até a última.",
      itens: [
        { id: "p1", texto: "O Bilhete Misterioso.", imagemUrl: papel },
        { id: "p2", texto: "Convites para a Festa dos Livros.", imagemUrl: festa },
        { id: "p3", texto: "Listas que Organizam.", imagemUrl: mochila },
        { id: "p4", texto: "Cartazes e Avisos.", imagemUrl: lavarMaos },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Bilhete → Convite → Lista → Cartaz.",
      feedbackErro:
        "Ordem: 1º Bilhete, 2º Convite, 3º Lista, 4º Cartaz.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia esses dois textos e responda que gênero é cada um.",
    leitura: {
      titulo: "Dois textos pra identificar",
      imagemUrl: papel,
      destacar: ["mochila", "aniversário"],
      paragrafos: [
        "TEXTO A — '• Mochila • Caderno • Estojo • Lanche'",
        "TEXTO B — 'Aniversário da Ana! Sábado, 14h, na casa dela.'",
      ],
    },
    perguntas: [
      {
        pergunta: "O TEXTO A é…",
        opcoes: ["Uma lista", "Um bilhete", "Um cartaz"],
        correta: 0,
        feedbackAcerto: "🎉 LISTA — vários itens marcados.",
        feedbackErro: "Vários itens com • na frente = LISTA.",
      },
      {
        pergunta: "O TEXTO B é…",
        opcoes: ["Uma lista", "Um convite", "Um bilhete"],
        correta: 1,
        feedbackAcerto: "🎉 CONVITE — tem motivo (aniversário), data, hora, local.",
        feedbackErro: "Fala do evento, quando e onde. É CONVITE.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Pasta dos Gêneros Textuais",
    instrucao:
      "Aurora precisa GUARDAR cada texto na pasta certa. Toque no texto e depois na PASTA do gênero dele.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "📚 Pasta dos Gêneros Textuais",
      bloco: {
        instrucao: "Leia cada texto e mande pra pasta certa.",
        itens: [
          {
            id: "t1",
            texto: "'Mãe, fui pra escola. Miguel.'",
            imagemUrl: papel,
            alvoId: "bilhete",
          },
          {
            id: "t2",
            texto: "'Festa da Ana. Sábado, 15h, na casa dela.'",
            imagemUrl: festa,
            alvoId: "convite",
          },
          {
            id: "t3",
            texto: "'• Banana • Pão • Leite'",
            imagemUrl: banana,
            alvoId: "lista",
          },
          {
            id: "t4",
            texto: "'SILÊNCIO. Pessoas lendo.'",
            imagemUrl: biblioteca,
            alvoId: "cartaz",
          },
          {
            id: "t5",
            texto: "'Ana, obrigada pelo presente! Bruna.'",
            imagemUrl: papel,
            alvoId: "bilhete",
          },
          {
            id: "t6",
            texto: "'Lave as mãos com água e sabão.'",
            imagemUrl: lavarMaos,
            alvoId: "cartaz",
          },
        ],
        alvos: [
          { id: "bilhete", nome: "📩 Bilhetes", imagemUrl: papel, descricao: "recado pra 1 pessoa" },
          { id: "convite", nome: "🎉 Convites", imagemUrl: festa, descricao: "chamar pra evento" },
          { id: "lista", nome: "📝 Listas", imagemUrl: mochila, descricao: "itens organizados" },
          { id: "cartaz", nome: "📢 Cartazes", imagemUrl: biblioteca, descricao: "aviso pra muita gente" },
        ],
        feedbackAcerto:
          "🎉 Todos no lugar! Pasta dos Gêneros Textuais desbloqueada. 📚",
        feedbackErro:
          "Volte na dica de cada pasta: bilhete tem nome no começo e assinatura; convite tem data/hora/local; lista tem itens; cartaz é aviso curto em letra grande.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "📩 BILHETE — recado curto pra UMA pessoa (destinatário + mensagem + assinatura).",
      "🎉 CONVITE — chama pra um evento (motivo + data + hora + local).",
      "📝 LISTA — organiza itens, um por linha, pra não esquecer.",
      "📢 CARTAZ — comunica pra MUITAS pessoas de uma vez, com letras grandes.",
      "Todo texto do dia a dia tem uma FINALIDADE — pra que ele serve.",
    ],
    miniDesafio: {
      pergunta: "Qual é o SEGREDO pra saber que gênero um texto é?",
      opcoes: [
        "Adivinhar",
        "Olhar o FORMATO e pensar PRA QUE SERVE",
        "Olhar só a cor do papel",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! Formato + finalidade = a gente reconhece o gênero.",
      feedbackErro:
        "O FORMATO (como está escrito) e a FINALIDADE (pra que serve) dizem que gênero é.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — 'Aurora, cheguei em casa. Brilha.' é…",
        opcoes: ["Bilhete", "Cartaz", "Lista"],
        correta: 0,
        feedbackAcerto: "🎉 BILHETE (destinatário + mensagem + assinatura).",
        feedbackErro: "Nome no começo, recado, nome no fim = BILHETE.",
      },
      {
        pergunta: "2/5 — 'Festa. Domingo, 15h, na praça.' é…",
        opcoes: ["Lista", "Convite", "Cartaz"],
        correta: 1,
        feedbackAcerto: "🎉 CONVITE!",
        feedbackErro: "Diz o QUANDO e o ONDE do evento = CONVITE.",
      },
      {
        pergunta: "3/5 — '• Bola • Boneca • Pião' é…",
        opcoes: ["Lista", "Bilhete", "Cartaz"],
        correta: 0,
        feedbackAcerto: "🎉 LISTA!",
        feedbackErro: "Itens com • cada um = LISTA.",
      },
      {
        pergunta: "4/5 — Um papel gigante na parede com 'CUIDADO! CHÃO MOLHADO' é…",
        opcoes: ["Bilhete", "Convite", "Cartaz/aviso"],
        correta: 2,
        feedbackAcerto: "🎉 CARTAZ/AVISO!",
        feedbackErro:
          "Papel GIGANTE na PAREDE pra muita gente ver = CARTAZ.",
      },
      {
        pergunta: "5/5 — Qual gênero é pra UMA pessoa só?",
        opcoes: ["Cartaz", "Bilhete", "Lista de compras da família"],
        correta: 1,
        feedbackAcerto:
          "🎉 BILHETE — só pra o destinatário. 🏅 Explorador dos Textos!",
        feedbackErro:
          "Cartaz é pra MUITAS. Lista é pra a família toda. BILHETE é pra UMA pessoa.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🔍 Caça aos gêneros textuais",
    materiais: [
      "Uma volta pela casa",
      "Papel e lápis",
      "Celular (opcional, pra foto)",
    ],
    passos: [
      "1) Procurem JUNTOS em casa: um BILHETE, uma LISTA, um CONVITE ou um CARTAZ/aviso.",
      "2) Podem valer: lista de mercado na geladeira, bilhete pregado, panfleto de mercado, cartaz de aula, aviso do prédio.",
      "3) Pra cada texto encontrado, respondam: 'Pra que serve?' 'Quem escreveu?' 'Quem lê?'",
      "4) Anotem os 3 textos encontrados numa folha (nome + finalidade).",
      "5) Colem a folha na parede — é a 'Pasta dos Gêneros' da família!",
    ],
    registro:
      "📸 Uma foto da folha com os 3 gêneros encontrados na casa.",
  },

  recompensa: {
    xp: 550,
    moedas: 350,
    medalha: "Explorador dos Textos",
  },
};

void brilha;
void calendario;
void bolo;
void estrela;
