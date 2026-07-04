import type { Aula } from "../types";

import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import coelhoImg from "@/assets/neuro-treino/objetos/coelho.png";
import ursoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import raposaImg from "@/assets/neuro-treino/objetos/raposa.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import bauImg from "@/assets/neuro-treino/objetos/bau.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import borboletaImg from "@/assets/neuro-treino/objetos/borboleta.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import diamanteImg from "@/assets/neuro-treino/objetos/diamante.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

/**
 * EF01MA11 — Aula 011 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Descrever a localização de pessoas e objetos no espaço, usando
 * termos como à frente, atrás, ao lado, entre, em cima, embaixo,
 * dentro, fora, direita e esquerda.
 *
 * Missão: "O Mapa do Tesouro da Floresta".
 * Segue o gabarito TRAVADO da EF01MA02 — tudo visual, mini-jogos.
 */
const aula: Aula = {
  codigo: "EF01MA11",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Mapa do Tesouro da Floresta",

  narrativa: {
    titulo: "O Mapa do Tesouro da Floresta",
    contexto:
      "O esquilo Brilha encontrou um mapa antigo escondido debaixo de uma pedra na floresta.",
    problema:
      "O tesouro está enterrado em algum lugar, mas só quem souber ler as pistas de LOCALIZAÇÃO (em cima, embaixo, ao lado, entre, dentro, fora, direita, esquerda) vai encontrar!",
    convite:
      "Vamos explorar a floresta juntos e achar o baú do tesouro?",
  },

  conhecimentosPrevios: [
    "Reconhecer animais e objetos por imagem.",
    "Diferenciar direita e esquerda no próprio corpo.",
    "Entender ordem (primeiro, meio, último).",
  ],

  missao:
    "Aprender a DESCREVER onde as coisas estão usando as palavras: em cima, embaixo, dentro, fora, ao lado, entre, à frente, atrás, à direita e à esquerda.",

  objetivos: [
    "Localizar objetos no espaço.",
    "Identificar posições espaciais em cenas.",
    "Compreender instruções de direção.",
    "Usar corretamente palavras de localização.",
  ],

  motivacao:
    "Saber onde as coisas estão nos ajuda a achar brinquedos, seguir mapas, brincar de esconde-esconde e nunca nos perdermos!",

  explicacao:
    "🧭 As palavras de LOCALIZAÇÃO nos dizem ONDE cada coisa está.\n\n⬆️ EM CIMA — no alto de algo.\n⬇️ EMBAIXO — na parte de baixo.\n🚪 DENTRO — no interior.\n🌳 FORA — no exterior.\n👧 AO LADO — bem pertinho, do lado.\n👦 ENTRE — no meio de duas coisas.\n➡️ À DIREITA — para o lado direito.\n⬅️ À ESQUERDA — para o lado esquerdo.\n👀 À FRENTE — na frente.\n👣 ATRÁS — nas costas.",

  explicacoesNiveis: {
    nivel1:
      "Localização é ONDE algo está. Em cima ou embaixo? Dentro ou fora?",
    nivel2:
      "Quando o gato está no telhado, ele está EM CIMA da casa. Quando entra na casa, fica DENTRO.",
    nivel3:
      "Se três animais estão em fila (🐻 🐰 🦊), o coelho está ENTRE o urso e a raposa.",
    nivel4:
      "Pilotos, motoristas e até você usam localização todo dia: 'a mochila está ao lado da cama', 'o livro está em cima da mesa'.",
  },

  exemploResolvido: {
    enunciado:
      "O esquilo Brilha subiu na árvore. Onde ele está agora?",
    passos: [
      "Olhe a cena: a árvore está embaixo, o esquilo lá no alto.",
      "Ele NÃO está embaixo do galho.",
      "Ele NÃO está dentro da árvore.",
      "Ele está EM CIMA do galho.",
    ],
    resposta: "O esquilo Brilha está EM CIMA do galho da árvore.",
    interativo: {
      tipo: "contagem",
      imagemUrl: arvoreImg,
      quantidade: 1,
      nomeItem: "árvore",
      nomeItemPlural: "árvores",
      pergunta: "Toque na árvore onde o Brilha está em cima!",
    },
  },

  atividadeGuiada: {
    enunciado:
      "O coelho 🐰 entrou na toca 🏠. Ele está DENTRO ou FORA da toca?",
    resposta: "DENTRO.",
    explicacao:
      "Quando algo entra em outra coisa, dizemos que está DENTRO. Quando sai, está FORA.",
    visual: {
      tipo: "grupos",
      pergunta: "Onde está o coelho depois de entrar na toca?",
      imagemUrl: coelhoImg,
      itemSingular: "coelho",
      itemPlural: "coelhos",
      quantidadeGrupos: 1,
      itensPorGrupo: 1,
      opcoes: [1, 2, 3],
      correta: 0,
    },
  },

  exercicios: [
    { enunciado: "🐿️ está no galho ALTO da árvore. Onde está?", resposta: "Em cima", dica: "No alto = em cima." },
    { enunciado: "🐰 entrou na toca. Está…", resposta: "Dentro", dica: "Entrou = dentro." },
    { enunciado: "🐻 🐰 🦊 — quem está entre?", resposta: "🐰 Coelho", dica: "O do meio." },
    { enunciado: "🐱 saiu da caixa. Agora está…", resposta: "Fora", dica: "Saiu = fora." },
    { enunciado: "A bola está bem pertinho da cadeira. Está…", resposta: "Ao lado", dica: "Pertinho = ao lado." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: encontre o tesouro seguindo as pistas de localização!",
    resposta: "Em cima · Dentro · Entre · Ao lado.",
    visual: {
      cena: [
        { personagem: "Baú do Tesouro", itemImagemUrl: bauImg, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Coelho Explorador", itemImagemUrl: coelhoImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Estrela do Mapa", itemImagemUrl: estrelaImg, quantidade: 3, cor: "#FBBF24" },
      ],
      perguntas: [
        {
          pergunta: "O Brilha está no galho ALTO da árvore. Ele está:",
          opcoes: ["Embaixo", "Em cima", "Dentro"],
          correta: 1,
          explicacao: "No alto do galho = EM CIMA.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: arvoreImg, quantidade: 1, rotulo: "Árvore", cor: "#10B981" },
              { imagemUrl: estrelaImg, quantidade: 1, rotulo: "⬆️ Brilha (em cima)", cor: "#FBBF24" },
            ],
          },
        },
        {
          pergunta: "O coelho entrou na toca 🏠. Ele está:",
          opcoes: ["Fora", "Ao lado", "Dentro"],
          correta: 2,
          explicacao: "Entrou na toca = DENTRO.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: casaImg, quantidade: 1, rotulo: "Toca 🏠", cor: "#F59E0B" },
              { imagemUrl: coelhoImg, quantidade: 1, rotulo: "🐰 Dentro", cor: "#F472B6" },
            ],
          },
        },
        {
          pergunta: "🐻 🐰 🦊 — quem está ENTRE o urso e a raposa?",
          opcoes: ["🐻 Urso", "🐰 Coelho", "🦊 Raposa"],
          correta: 1,
          explicacao: "Entre = no meio dos dois. O coelho está no meio.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: ursoImg, quantidade: 1, rotulo: "🐻 Urso (fim)", cor: "#92400E" },
              { imagemUrl: raposaImg, quantidade: 1, rotulo: "🦊 Raposa (fim)", cor: "#EA580C" },
            ],
          },
        },
        {
          pergunta: "A bola está bem pertinho da cadeira. Está:",
          opcoes: ["Em cima", "Ao lado", "Atrás"],
          correta: 1,
          explicacao: "Pertinho, do lado = AO LADO.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: bolaImg, quantidade: 1, rotulo: "⚽ Bola", cor: "#EF4444" },
              { imagemUrl: casaImg, quantidade: 1, rotulo: "🪑 Cadeira", cor: "#78716C" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "EM CIMA / EMBAIXO — no alto ou na parte de baixo.",
      "DENTRO / FORA — no interior ou no exterior.",
      "AO LADO — bem pertinho, do lado.",
      "ENTRE — no meio de duas coisas.",
      "À DIREITA / À ESQUERDA — para cada lado.",
      "À FRENTE / ATRÁS — na frente ou nas costas.",
    ],
    dica:
      "Antes de responder, aponte com o dedo: 'está aqui em cima', 'está aqui do lado'.",
  },

  quiz: [
    {
      pergunta: "📚 O livro está sobre a mesa. O livro está:",
      opcoes: ["Embaixo", "Em cima", "Dentro"],
      correta: 1,
      explicacao: "Sobre a mesa = EM CIMA da mesa.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: livroImg, quantidade: 1, rotulo: "📚 Livro (em cima)", cor: "#60A5FA" },
          { imagemUrl: casaImg, quantidade: 1, rotulo: "🪑 Mesa", cor: "#78716C" },
        ],
      },
    },
    {
      pergunta: "🐶 🐱 🐭 — quem está ENTRE?",
      opcoes: ["🐶 Cachorro", "🐱 Gato", "🐭 Rato"],
      correta: 1,
      explicacao: "Entre = no meio. O gato está no meio.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱 no meio", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "🎁 O presente saiu da caixa. Agora está:",
      opcoes: ["Dentro", "Fora", "Em cima"],
      correta: 1,
      explicacao: "Saiu = FORA.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: presenteImg, quantidade: 1, rotulo: "🎁 Fora", cor: "#F472B6" },
          { imagemUrl: casaImg, quantidade: 1, rotulo: "📦 Caixa vazia", cor: "#78716C" },
        ],
      },
    },
    {
      pergunta: "Qual palavra indica POSIÇÃO?",
      opcoes: ["Grande", "Azul", "Atrás"],
      correta: 2,
      explicacao: "Grande = tamanho. Azul = cor. Atrás = POSIÇÃO!",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: estrelaImg, quantidade: 1, rotulo: "⬅️ À esquerda", cor: "#60A5FA" },
          { imagemUrl: estrelaImg, quantidade: 1, rotulo: "➡️ À direita", cor: "#FBBF24" },
        ],
      },
    },
  ],

  conclusao:
    "🧭 Medalha conquistada: Pequeno Explorador! Você aprendeu a descrever ONDE as coisas estão. Missão em Família: peça pra alguém dar 5 instruções — 'coloque o carrinho embaixo da cadeira', 'a bola ao lado da mesa' — e faça cada uma!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Pilotos de avião, motoristas e exploradores usam palavras de localização o tempo todo pra chegar no lugar certo. Sem elas, ninguém encontraria caminho nenhum!",
  },

  interativas: [
    // ==== FASE 1: Onde está o esquilo? (em cima) ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Onde está o Brilha?",
      instrucao:
        "O esquilo Brilha subiu na árvore e está lá no alto do galho. Onde ele está?",
      grupos: [
        { imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳 Árvore" },
        { imagemUrl: estrelaImg, quantidade: 1, rotulo: "⬆️ Brilha (no alto)" },
      ],
      pergunta: "Onde está o Brilha?",
      opcoes: ["Embaixo", "Em cima", "Dentro"],
      correta: 1,
      acerto: "🎉 Isso! No alto do galho = EM CIMA.",
      erro: "Olhe pro alto da árvore: o Brilha está lá em cima do galho.",
    },

    // ==== FASE 2: Arrastar coelho pra DENTRO da toca ====
    {
      tipo: "arrastar",
      titulo: "Fase 2 · Coloque o Coelho na Toca",
      instrucao:
        "Arraste o 🐰 coelho pra DENTRO da toca. Depois arraste outro pra FORA.",
      itemImagem: coelhoImg,
      alvosVisuais: [
        { nome: "DENTRO da toca 🏠", cor: "#F59E0B", capacidade: 1, imagemUrl: casaImg },
        { nome: "FORA da toca 🌳", cor: "#10B981", capacidade: 1, imagemUrl: arvoreImg },
      ],
      pares: [
        { item: "Coelho 1", alvo: "DENTRO da toca 🏠" },
        { item: "Coelho 2", alvo: "FORA da toca 🌳" },
      ],
    },

    // ==== FASE 3: Quem está ENTRE? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Quem está ENTRE?",
      instrucao: "Olhe a fila: 🐻 🐰 🦊. Quem está ENTRE o urso e a raposa?",
      grupos: [
        { imagemUrl: ursoImg, quantidade: 1, rotulo: "🐻 Urso" },
        { imagemUrl: coelhoImg, quantidade: 1, rotulo: "🐰 Coelho (meio)" },
        { imagemUrl: raposaImg, quantidade: 1, rotulo: "🦊 Raposa" },
      ],
      pergunta: "Quem está ENTRE?",
      opcoes: ["🐻 Urso", "🐰 Coelho", "🦊 Raposa"],
      correta: 1,
      acerto: "🐰 Perfeito! O coelho está no meio, ENTRE o urso e a raposa.",
      erro: "Entre = NO MEIO. Quem está no meio da fila é o coelho.",
    },

    // ==== FASE 4: Direita ou Esquerda? ====
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Direita ou Esquerda?",
      instrucao:
        "O Brilha ⬅️ está segurando uma lanterna. A mochila 🎒 está do lado ESQUERDO dele. A mochila está à direita ou à esquerda?",
      grupos: [
        { imagemUrl: presenteImg, quantidade: 1, rotulo: "🎒 Mochila (⬅️ esquerda)" },
        { imagemUrl: estrelaImg, quantidade: 1, rotulo: "🔦 Brilha" },
      ],
      pergunta: "A mochila está:",
      opcoes: ["À direita", "À esquerda", "Em cima"],
      correta: 1,
      acerto: "⬅️ Muito bem! A mochila está à ESQUERDA do Brilha.",
      erro: "Olhe: a mochila aparece do lado esquerdo (⬅️) do Brilha.",
    },

    // ==== FASE 5: Siga o caminho até o baú ====
    {
      tipo: "ordenar",
      titulo: "Fase 5 · Siga o Caminho do Mapa",
      instrucao:
        "Coloque as setas na ORDEM do mapa pra levar o Brilha até o baú: ➡️ ➡️ ⬆️ ⬅️",
      itens: [
        "➡️ Direita 1",
        "➡️ Direita 2",
        "⬆️ Cima",
        "⬅️ Esquerda",
      ],
      imagens: [
        { imagemUrl: diamanteImg, quantidade: 1, rotulo: "➡️ Direita 1", cor: "#60A5FA" },
        { imagemUrl: diamanteImg, quantidade: 1, rotulo: "➡️ Direita 2", cor: "#60A5FA" },
        { imagemUrl: diamanteImg, quantidade: 1, rotulo: "⬆️ Cima", cor: "#FBBF24" },
        { imagemUrl: bauImg, quantidade: 1, rotulo: "⬅️ Esquerda → 🏆 Baú!", cor: "#F59E0B" },
      ],
    },

    // ==== MINI JOGO 1 · Explorador — arrastar borboleta em cima da flor ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Explorador da Floresta",
      instrucao:
        "Coloque a 🦋 borboleta EM CIMA da flor. Coloque o 🐰 coelho ATRÁS da árvore.",
      itemImagem: borboletaImg,
      alvosVisuais: [
        { nome: "EM CIMA da flor 🌼", cor: "#F472B6", capacidade: 1, imagemUrl: florImg },
        { nome: "ATRÁS da árvore 🌳", cor: "#10B981", capacidade: 1, imagemUrl: arvoreImg },
      ],
      pares: [
        { item: "🦋 Borboleta", alvo: "EM CIMA da flor 🌼" },
        { item: "🐰 Coelho", alvo: "ATRÁS da árvore 🌳" },
      ],
    },

    // ==== MINI JOGO 2 · Ligar palavra à cena ====
    {
      tipo: "ligar",
      titulo: "Mini Jogo · Ligue a palavra à cena certa",
      instrucao: "Ligue cada palavra de localização à cena que combina.",
      pares: [
        { a: "🐿️ no galho alto", b: "EM CIMA", aImagem: arvoreImg, aQuantidade: 1 },
        { a: "🐰 saiu da toca", b: "FORA", aImagem: coelhoImg, aQuantidade: 1 },
        { a: "🐱 pulou pra dentro", b: "DENTRO", aImagem: gatoImg, aQuantidade: 1 },
        { a: "🐻 🐰 🦊 — o coelho", b: "ENTRE", aImagem: coelhoImg, aQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "🐿️ está no ALTO da árvore. Ele está:",
        opcoes: ["Embaixo", "Em cima", "Dentro"],
        correta: 1,
        explicacao: "No alto = EM CIMA.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳 Árvore", cor: "#10B981" },
            { imagemUrl: estrelaImg, quantidade: 1, rotulo: "⬆️ Brilha", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta: "🐰 ENTROU na toca. Está:",
        opcoes: ["Dentro", "Fora", "Ao lado"],
        correta: 0,
        explicacao: "Entrou = DENTRO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: casaImg, quantidade: 1, rotulo: "🏠 Toca", cor: "#F59E0B" },
            { imagemUrl: coelhoImg, quantidade: 1, rotulo: "🐰 dentro", cor: "#F472B6" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "🐻 🐰 🦊 — quem está ENTRE?",
        opcoes: ["🐻 Urso", "🐰 Coelho", "🦊 Raposa"],
        correta: 1,
        explicacao: "Entre = no meio.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: ursoImg, quantidade: 1, rotulo: "🐻 Urso", cor: "#92400E" },
            { imagemUrl: raposaImg, quantidade: 1, rotulo: "🦊 Raposa", cor: "#EA580C" },
          ],
        },
      },
      {
        pergunta: "⚽ A bola está pertinho da cadeira. Está:",
        opcoes: ["Em cima", "Ao lado", "Atrás"],
        correta: 1,
        explicacao: "Pertinho, do lado = AO LADO.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: bolaImg, quantidade: 1, rotulo: "⚽ Bola", cor: "#EF4444" },
            { imagemUrl: casaImg, quantidade: 1, rotulo: "🪑 Cadeira", cor: "#78716C" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "🎁 O presente saiu da caixa. Está:",
        opcoes: ["Dentro", "Fora", "Em cima"],
        correta: 1,
        explicacao: "Saiu = FORA.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: presenteImg, quantidade: 1, rotulo: "🎁 Fora", cor: "#F472B6" },
            { imagemUrl: casaImg, quantidade: 1, rotulo: "📦 Caixa", cor: "#78716C" },
          ],
        },
      },
      {
        pergunta: "Qual dessas palavras indica POSIÇÃO?",
        opcoes: ["Grande", "Azul", "Atrás"],
        correta: 2,
        explicacao: "Grande = tamanho. Azul = cor. Atrás = POSIÇÃO.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: estrelaImg, quantidade: 1, rotulo: "⬅️ Esquerda", cor: "#60A5FA" },
            { imagemUrl: estrelaImg, quantidade: 1, rotulo: "➡️ Direita", cor: "#FBBF24" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01MA12" },
};

export default aula;
