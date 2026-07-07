import type { AulaPortuguesV4 } from "../../types";
import bibliotecaria from "@/assets/neuro-treino/objetos/bibliotecario.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import livros from "@/assets/neuro-treino/objetos/livros.png";
import biblioteca from "@/assets/neuro-treino/objetos/biblioteca.png";
import lapis from "@/assets/neuro-treino/objetos/lapis.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";
import pincel from "@/assets/neuro-treino/objetos/pincel.png";
import paleta from "@/assets/neuro-treino/objetos/paleta.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import coracao from "@/assets/neuro-treino/objetos/coracao.png";
import desenho from "@/assets/neuro-treino/objetos/desenho.png";

/**
 * Unidade 5 · Aula 5 — Publicando Meu Primeiro Livro
 * Missão final: planejar, escrever, revisar, ilustrar e PUBLICAR
 * o Meu Primeiro Livro na Biblioteca Encantada.
 *
 * BNCC: EF02LP21 · EF02LP22 · EF02LP23 · EF02LP24 · EF02LP25
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-meu-primeiro-livro",
  titulo: "Publicando Meu Primeiro Livro",
  iconeTrilha: "🏅",
  bncc: [
    "EF02LP21",
    "EF02LP22",
    "EF02LP23",
    "EF02LP24",
    "EF02LP25",
  ],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A prateleira dos autores",
    historia:
      "Aurora abre uma prateleira DOURADA no fundo da Biblioteca. Está vazia, esperando UM livro só: o SEU. — Chegou a hora. Você vai PLANEJAR, ESCREVER, REVISAR, ILUSTRAR e PUBLICAR o seu primeiro livro. Quando ele estiver pronto, entra pra Biblioteca Encantada pra sempre!",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao:
      "Antes do grande desafio: quais superpoderes de escritor você aprendeu?",
    bloco: {
      titulo: "Meus superpoderes de autor",
      recado: {
        icone: "🏅",
        rotulo: "O que aprendi",
        estilo: "cartaz",
        linhas: [
          "1. PLANEJAR (quem/onde/o que)",
          "2. Fazer FRASES completas",
          "3. REVISAR o próprio texto",
          "4. Escrever pra CADA situação",
        ],
      },
      pergunta: "Qual desses passos vem PRIMEIRO ao escrever uma história?",
      hipoteses: [
        {
          texto: "PLANEJAR (pensar quem, onde e o que acontece).",
          imagemUrl: lapis,
        },
        { texto: "Publicar direto sem pensar.", imagemUrl: livros },
        { texto: "Só pintar a capa.", imagemUrl: paleta },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Planejar sempre vem primeiro!",
      feedbackErro:
        "Autor sempre começa PLANEJANDO — pensando na história antes de escrever.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras da publicação.",
    cards: [
      {
        palavra: "publicar",
        explicacao:
          "É deixar o texto PRONTO pra outras pessoas lerem. Botar no portfólio.",
        exemplo: "Depois de revisar, o autor PUBLICA o livro.",
        imagemUrl: livros,
      },
      {
        palavra: "ilustração",
        explicacao:
          "É o DESENHO que acompanha o texto pra ajudar a imaginar.",
        exemplo:
          "A ilustração do gato ajuda a mostrar como ele é.",
        imagemUrl: desenho,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha mostra o caminho completo do autor.",
    leitura: {
      titulo: "Os 5 passos do Meu Primeiro Livro",
      imagemUrl: livro,
      destacar: [
        "Planejar",
        "Escrever",
        "Revisar",
        "Ilustrar",
        "Publicar",
      ],
      paragrafos: [
        "1) PLANEJAR: escolher QUEM, ONDE e O QUE acontece.",
        "2) ESCREVER: fazer frases COMPLETAS com começo, meio e fim.",
        "3) REVISAR: passar a checklist (maiúscula, ponto, sentido).",
        "4) ILUSTRAR: fazer um desenho da parte MAIS importante.",
        "5) PUBLICAR: salvar no portfólio pra outras pessoas lerem.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Confira se você lembra os passos.",
    perguntas: [
      {
        pergunta: "Qual é o passo 1?",
        opcoes: ["Publicar", "PLANEJAR", "Ilustrar"],
        correta: 1,
        feedbackAcerto: "🎉 Planejar!",
        feedbackErro: "O passo 1 é sempre PLANEJAR (quem, onde, o quê).",
      },
      {
        pergunta: "Ilustrar quer dizer…",
        opcoes: ["Cantar", "DESENHAR pra ajudar o texto", "Revisar"],
        correta: 1,
        feedbackAcerto: "🎉 Desenhar pra ajudar o texto!",
        feedbackErro: "Ilustrar = fazer o DESENHO que combina com o texto.",
      },
      {
        pergunta: "O último passo é…",
        opcoes: ["Publicar", "Revisar", "Escrever"],
        correta: 0,
        feedbackAcerto: "🎉 Publicar!",
        feedbackErro:
          "Publicar (compartilhar) é o ÚLTIMO passo — depois de tudo pronto.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Toda história do livro tem 5 elementos.",
    perguntas: [
      {
        pergunta:
          "Quais são os elementos do 'Meu Primeiro Livro'?",
        opcoes: [
          "Título + personagens + cenário + PROBLEMA + solução",
          "Só cor de fundo",
          "Só o número de páginas",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Título, personagens, cenário, problema e solução!",
        feedbackErro:
          "Uma boa história tem: TÍTULO + PERSONAGENS + CENÁRIO + PROBLEMA + SOLUÇÃO.",
      },
      {
        pergunta: "'Problema' na história é…",
        opcoes: [
          "Algo que ACONTECE e precisa ser resolvido",
          "Uma bagunça no caderno",
          "Uma nota baixa",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 O problema é o que ACONTECE e move a história.",
        feedbackErro:
          "Problema da história = algo que ACONTECE com o personagem e precisa ser resolvido.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ORDEM os 5 passos do Meu Primeiro Livro.",
    bloco: {
      instrucao: "Do começo (pensar) até o fim (publicar).",
      itens: [
        { id: "s1", texto: "PLANEJAR (quem/onde/o que).", imagemUrl: brilha },
        { id: "s2", texto: "ESCREVER as frases da história.", imagemUrl: lapis },
        { id: "s3", texto: "REVISAR com a checklist do autor.", imagemUrl: papel },
        { id: "s4", texto: "ILUSTRAR a parte mais importante.", imagemUrl: pincel },
        { id: "s5", texto: "PUBLICAR na Biblioteca Encantada.", imagemUrl: livros },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 Passos perfeitos — o seu Primeiro Livro está pronto pra brilhar!",
      feedbackErro:
        "Ordem certa: PLANEJAR → ESCREVER → REVISAR → ILUSTRAR → PUBLICAR.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Um exemplo do Meu Primeiro Livro. Leia sozinho.",
    leitura: {
      titulo: "Exemplo: 'A pena dourada'",
      imagemUrl: livro,
      destacar: ["título", "personagem", "cenário", "problema", "solução"],
      paragrafos: [
        "📖 TÍTULO: A pena dourada.",
        "👤 PERSONAGEM: Brilha, o esquilo.",
        "📍 CENÁRIO: a Biblioteca Encantada.",
        "⭐ PROBLEMA: um livro estava trancado por um cadeado mágico.",
        "✅ SOLUÇÃO: Brilha usou a PENA DOURADA e escreveu a história que faltava. O livro abriu!",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual era o PROBLEMA da história?",
        opcoes: [
          "Faltava chuva",
          "Um livro TRANCADO por cadeado mágico",
          "O esquilo perdeu a comida",
        ],
        correta: 1,
        feedbackAcerto: "🎉 O livro trancado!",
        feedbackErro:
          "O problema era o LIVRO TRANCADO por cadeado mágico.",
        ondeEstaNoTexto: "livro estava trancado por um cadeado mágico",
      },
      {
        pergunta: "Como a Brilha RESOLVEU o problema?",
        opcoes: [
          "Usou a PENA DOURADA e escreveu a história que faltava",
          "Chamou a mãe",
          "Fugiu correndo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Escrevendo a história com a pena dourada!",
        feedbackErro:
          "A solução foi USAR A PENA DOURADA e escrever a história que faltava.",
        ondeEstaNoTexto:
          "Brilha usou a PENA DOURADA e escreveu a história que faltava",
      },
    ],
  },

  momento_minijogo: {
    titulo: "📖 Meu Primeiro Livro",
    instrucao:
      "Monte a CAPA do seu Livro: coloque em ordem os elementos, do TÍTULO até a ILUSTRAÇÃO final.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "📖 Meu Primeiro Livro",
      bloco: {
        instrucao: "Ordem: do TÍTULO até a ILUSTRAÇÃO.",
        itens: [
          { id: "e1", texto: "📖 TÍTULO da história.", imagemUrl: livro },
          { id: "e2", texto: "👤 PERSONAGENS.", imagemUrl: brilha },
          { id: "e3", texto: "📍 CENÁRIO (onde acontece).", imagemUrl: biblioteca },
          { id: "e4", texto: "⭐ PROBLEMA.", imagemUrl: estrela },
          { id: "e5", texto: "✅ SOLUÇÃO.", imagemUrl: coracao },
          { id: "e6", texto: "🎨 ILUSTRAÇÃO da parte mais importante.", imagemUrl: pincel },
        ],
        ordemCerta: ["e1", "e2", "e3", "e4", "e5", "e6"],
        feedbackAcerto:
          "🎉 Livro pronto pra publicar! Você ganhou a PENA DOURADA do escritor. 🪶",
        feedbackErro:
          "Comece pelo TÍTULO. Depois PERSONAGENS, CENÁRIO, PROBLEMA, SOLUÇÃO, e enfim ILUSTRAÇÃO.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PLANEJAR antes de escrever.",
      "Frases COMPLETAS com maiúscula e pontuação.",
      "REVISAR sempre antes de publicar.",
      "Escolher o GÊNERO certo pra cada situação.",
      "PUBLICAR pra que outras pessoas leiam.",
    ],
    miniDesafio: {
      pergunta: "Qual passo vem depois de REVISAR?",
      opcoes: ["Planejar", "ILUSTRAR", "Apagar tudo"],
      correta: 1,
      feedbackAcerto: "🎉 Ilustrar!",
      feedbackErro: "Depois de REVISAR, o autor ILUSTRA e depois PUBLICA.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual é o PRIMEIRO passo do autor?",
        opcoes: ["Publicar", "PLANEJAR", "Ilustrar"],
        correta: 1,
        feedbackAcerto: "🎉 Planejar!",
        feedbackErro: "O primeiro passo é PLANEJAR (quem, onde, o quê).",
      },
      {
        pergunta: "2/5 — Ilustração é…",
        opcoes: [
          "O DESENHO que acompanha o texto",
          "Uma pergunta",
          "Um erro no texto",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Desenho que acompanha!",
        feedbackErro: "Ilustração = DESENHO que acompanha o texto.",
      },
      {
        pergunta: "3/5 — Toda história do livro tem…",
        opcoes: [
          "Só personagens",
          "Título, personagens, cenário, PROBLEMA e SOLUÇÃO",
          "Só ilustração",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro:
          "Uma boa história tem: título + personagens + cenário + PROBLEMA + SOLUÇÃO.",
      },
      {
        pergunta: "4/5 — Publicar quer dizer…",
        opcoes: [
          "Apagar o texto",
          "Deixar PRONTO pra outros lerem",
          "Guardar só pra si",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Deixar pronto pra outros lerem!",
        feedbackErro:
          "Publicar = deixar o texto PRONTO no portfólio pra outras pessoas lerem.",
      },
      {
        pergunta: "5/5 — Antes de PUBLICAR o livro, o autor sempre…",
        opcoes: ["REVISA o texto", "esquece do texto", "apaga tudo"],
        correta: 0,
        feedbackAcerto: "🎉 Revisa!",
        feedbackErro: "Antes de publicar, o autor SEMPRE revisa.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Um livro em família",
    materiais: [
      "Folhas de papel",
      "Lápis / canetas coloridas",
      "Grampeador ou fita (pra virar livrinho)",
    ],
    passos: [
      "1) Cada integrante da família escreve (ou dita) UMA parte da história.",
      "2) Depois REVISEM juntos com a checklist do autor.",
      "3) Cada um ILUSTRA uma cena.",
      "4) Grampeiem as folhas formando um livrinho.",
      "5) LEIAM em voz alta pra família toda.",
      "6) Salvem no portfólio do app.",
    ],
    registro:
      "📸 Foto da capa do livro em família + áudio da leitura em voz alta.",
  },

  recompensa: {
    xp: 800,
    moedas: 500,
    medalha: "Pequeno Autor da Biblioteca Encantada",
  },
};

void paleta;
