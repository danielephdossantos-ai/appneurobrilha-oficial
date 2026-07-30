import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as boneca } from "@/assets/neuro-treino/objetos/boneca-pano.png.asset.json";
import { url as bicicleta } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";

/**
 * Unidade 2 · Aula 3 — Listas que Organizam
 * -------------------------------------------------------------
 * Aurora precisa comprar novos materiais pra biblioteca. Mas como
 * lembrar de TUDO? Fazendo uma LISTA. A criança aprende que a
 * lista organiza informações pra nada ficar esquecido.
 *
 * BNCC: EF02LP09 · EF02LP10 · EF02LP12
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-listas-organizam",
  titulo: "Listas que Organizam",
  iconeTrilha: "📝",
  bncc: ["EF02LP09", "EF02LP10", "EF02LP12"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Aurora precisa comprar coisas!",
    historia:
      "Aurora abre o armário da biblioteca. — Faltam livros, lápis, papel e giz de cera. Se eu for na loja e for lembrando de cabeça, esqueço TUDO! O que a gente faz pra não esquecer? Uma LISTA!",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao:
      "Aurora rabiscou uma lista. Leia o papel dela e pense: pra que serve uma lista?",
    bloco: {
      titulo: "A lista da biblioteca",
      recado: {
        icone: "📝",
        rotulo: "Lista da Aurora",
        estilo: "papel",
        linhas: [
          "COMPRAR PRA BIBLIOTECA:",
          "• Livros",
          "• Lápis",
          "• Papel",
          "• Giz de cera",
        ],
      },
      pergunta: "Pra que a Aurora quer fazer uma lista?",
      hipoteses: [
        {
          texto: "Pra ORGANIZAR o que precisa comprar e não esquecer.",
          imagemUrl: papel,
        },
        {
          texto: "Pra contar uma história pros amigos.",
          imagemUrl: livro,
        },
        {
          texto: "Pra escrever um bilhete pra alguém.",
          imagemUrl: papel,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Lista serve pra ORGANIZAR e não esquecer nada.",
      feedbackErro:
        "Lista NÃO conta história. Serve pra organizar coisas em ORDEM, uma embaixo da outra.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras da vida das listas.",
    cards: [
      {
        palavra: "organizar",
        explicacao:
          "É colocar coisas em ORDEM, cada uma no lugar. Ajuda a achar rápido.",
        exemplo: "Organizei os brinquedos por tamanho.",
        imagemUrl: mochila,
      },
      {
        palavra: "item",
        explicacao:
          "É CADA coisa da lista. Uma lista tem VÁRIOS itens (um em cada linha).",
        exemplo: "Na lista tem 3 itens: banana, pão e leite.",
        imagemUrl: banana,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia a lista da Aurora. Cada linha é UM item.",
    leitura: {
      titulo: "Lista de compras da biblioteca",
      imagemUrl: papel,
      legendaImagem: "A lista de Aurora",
      destacar: ["livros", "lápis", "papel", "giz"],
      paragrafos: [
        "• 📚 Livros novos",
        "• ✏️ Lápis",
        "• 📄 Papel branco",
        "• 🖍️ Giz de cera",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte na lista se precisar.",
    perguntas: [
      {
        pergunta: "Quantos ITENS tem essa lista?",
        opcoes: ["2", "4", "5"],
        correta: 1,
        feedbackAcerto: "🎉 QUATRO itens (livros, lápis, papel, giz).",
        feedbackErro: "Conte quantas LINHAS a lista tem. Cada linha = 1 item.",
        dica: "Volte no texto e procure a parte que fala de 'quantos'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Conte quantas LINHAS a lista tem. Cada linha = 1 item. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Qual desses NÃO está na lista?",
        opcoes: ["Papel branco", "Giz de cera", "Cadernos"],
        correta: 2,
        feedbackAcerto:
          "🎉 Isso! CADERNOS não está — a Aurora esqueceu ou não precisava.",
        feedbackErro:
          "Volte na lista e leia item por item. O que NÃO aparece?",
        dica: "Volte no texto e procure a parte que fala de 'desses'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Volte na lista e leia item por item. O que NÃO aparece? Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Qual é o PRIMEIRO item da lista?",
        opcoes: ["Papel", "Livros", "Giz"],
        correta: 1,
        feedbackAcerto: "🎉 LIVROS!",
        feedbackErro: "O item de CIMA é o primeiro. Qual é?",
        dica: "Volte no texto e procure a parte que fala de 'primeiro'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: O item de CIMA é o primeiro. Qual é? Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Listas não têm 'personagens'. Elas têm ITENS. Vamos treinar.",
    perguntas: [
      {
        pergunta: "O que TODA lista tem?",
        opcoes: [
          "Personagens e cenário",
          "Vários ITENS, um embaixo do outro",
          "Diálogo com travessão",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Lista = ITENS um EMBAIXO do outro.",
        feedbackErro:
          "Lista NÃO tem personagem, NÃO conta história. Tem ITENS empilhados.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Qual desses TAMBÉM é um tipo de lista?",
        opcoes: [
          "Lista de brinquedos favoritos",
          "Um bilhete pra mamãe",
          "Um convite de festa",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Certo! Lista de brinquedos favoritos, lista de compras, lista de tarefas… tudo lista.",
        feedbackErro:
          "Bilhete e convite são OUTROS gêneros. Lista é uma sequência de itens.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Aurora vai fazer um PIQUENIQUE. Coloque os passos na ordem.",
    bloco: {
      instrucao: "Antes do piquenique, ela primeiro… depois… depois…",
      itens: [
        {
          id: "p1",
          texto: "Escreve a LISTA das coisas que precisa levar.",
          imagemUrl: papel,
        },
        {
          id: "p2",
          texto: "Vai no mercado e compra tudo da lista.",
          imagemUrl: mochila,
        },
        {
          id: "p3",
          texto: "Vai pro parque e faz o piquenique!",
          imagemUrl: bolo,
        },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto:
        "🎉 Isso! Primeiro a LISTA, depois COMPRAR, depois APROVEITAR.",
      feedbackErro:
        "Sem lista, ela esquece coisas. Sem comprar, não tem o quê levar. Piquenique é o último.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia essa outra lista sozinho e responda.",
    leitura: {
      titulo: "Lista de coisas pra escola",
      imagemUrl: mochila,
      destacar: ["mochila", "caderno", "estojo", "lanche"],
      paragrafos: [
        "• 🎒 Mochila",
        "• 📓 Caderno",
        "• ✏️ Estojo",
        "• 🍎 Lanche",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantos itens tem essa lista?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        feedbackAcerto: "🎉 4 itens.",
        feedbackErro: "Conte as LINHAS. Cada linha é um item.",
        dica: "Volte no texto e procure a parte que fala de 'quantos'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Conte as LINHAS. Cada linha é um item. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Qual é o ÚLTIMO item da lista?",
        opcoes: ["Mochila", "Caderno", "Lanche"],
        correta: 2,
        feedbackAcerto: "🎉 O LANCHE — última linha.",
        feedbackErro: "Último = o de BAIXO. Qual é?",
        dica: "Volte no texto e procure a parte que fala de 'último'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Último = o de BAIXO. Qual é? Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Complete a Lista",
    instrucao:
      "Aurora vai fazer um PIQUENIQUE. Marque APENAS as coisas que ela precisa levar pra um piquenique.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "🛒 Complete a Lista",
      bloco: {
        instrucao: "Lista de piquenique — marque só o que serve.",
        pergunta: "Pra levar num PIQUENIQUE, marque os itens certos:",
        opcoes: [
          { id: "banana", texto: "🍌 Banana", imagemUrl: banana, correto: true },
          { id: "bolo", texto: "🎂 Bolo", imagemUrl: bolo, correto: true },
          { id: "papel", texto: "📄 Papel toalha", imagemUrl: papel, correto: true },
          { id: "livro", texto: "📖 Livro pra ler", imagemUrl: livro, correto: true },
          { id: "boneca", texto: "🪆 Boneca de pano", imagemUrl: boneca, correto: false },
          { id: "bicicleta", texto: "🚲 Bicicleta grande", imagemUrl: bicicleta, correto: false },
          { id: "balao", texto: "🎈 Balão de festa", imagemUrl: balao, correto: false },
          { id: "escola", texto: "🏫 A escola inteira", imagemUrl: escola, correto: false },
        ],
        feedbackAcerto:
          "🎉 Lista perfeita! Banana, bolo, papel toalha e livro — piquenique organizado.",
        feedbackErro:
          "Pense: o que a gente COME e USA num piquenique? Boneca, bicicleta, balão e escola não entram nessa lista.",
        dica: "Leia a pergunta devagar e procure a parte que fala de 'piquenique'. Elimine as opções que não combinam.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "LISTA serve pra ORGANIZAR e não esquecer.",
      "Cada linha da lista é UM ITEM.",
      "Existem listas pra tudo: compras, tarefas, brinquedos favoritos, piquenique.",
      "Bom leitor de lista LÊ ITEM POR ITEM, sem pular.",
    ],
    miniDesafio: {
      pergunta: "Qual é o jeito CERTO de escrever uma lista?",
      opcoes: [
        "Uma frase longa com tudo junto",
        "Um item em cada linha",
        "Só desenhos, sem palavra nenhuma",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Um item em cada LINHA. Fica fácil de ler.",
      feedbackErro:
        "Lista NÃO é frase corrida. É um item por linha — pra não esquecer nada.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Lista NÃO é frase corrida. É um item por linha — pra não esquecer nada. Agora leia de novo e escolha com calma.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Lista serve pra…",
        opcoes: [
          "Contar história",
          "Organizar coisas em ordem, item por item",
          "Convidar pra festa",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Lista = organização item por item.",
        dica: "Pista: a resposta certa começa com a letra 'O'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Lista = organização item por item. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — Como se escreve uma lista?",
        opcoes: [
          "Tudo em UMA linha",
          "Um item em cada LINHA",
          "Só com números, sem palavra",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Um item por LINHA.",
        feedbackErro: "Cada item vai em UMA linha — assim ninguém esquece nada.",
        dica: "Pista: a resposta certa começa com a letra 'U'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Cada item vai em UMA linha — assim ninguém esquece nada. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — 'Item' quer dizer…",
        opcoes: ["Um personagem", "Cada coisa da lista", "Um tipo de festa"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Item = CADA coisa que está na lista.",
        dica: "Pista: a resposta certa começa com a letra 'C'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Item = CADA coisa que está na lista. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — Uma lista de piquenique NÃO teria…",
        opcoes: ["Bolo", "Frutas", "A escola inteira"],
        correta: 2,
        feedbackAcerto: "🎉 A escola não cabe no piquenique!",
        feedbackErro: "Piquenique é comer no parque. A escola não vai junto.",
        dica: "Pista: a resposta certa começa com a letra 'F'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Piquenique é comer no parque. A escola não vai junto. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Se a lista tem 4 itens, quantas linhas ela tem?",
        opcoes: ["1", "4", "10"],
        correta: 1,
        feedbackAcerto: "🎉 4 linhas — uma por item.",
        feedbackErro:
          "Cada item = 1 linha. 4 itens = 4 linhas.",
        dica: "Pista: a resposta certa começa com a letra '1'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Cada item = 1 linha. 4 itens = 4 linhas. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📝 Nossa lista da semana",
    materiais: ["1 folha de papel", "Lápis"],
    passos: [
      "1) Escolham JUNTOS uma coisa pra listar: compras da semana, brinquedos favoritos ou tarefas.",
      "2) A criança escreve o TÍTULO da lista no topo.",
      "3) Escreve UM item por linha, com um pontinho (•) na frente.",
      "4) Vai lendo em voz alta enquanto escreve.",
      "5) No fim, conte quantos itens tem no total.",
    ],
    registro:
      "📸 Uma foto da lista feita à mão, com a criança segurando.",
  },

  recompensa: { xp: 110, moedas: 60 },
};

void brilha;
