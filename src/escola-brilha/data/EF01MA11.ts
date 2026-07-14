import type { Aula } from "../types";

import { url as brilhaImg } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as coelhoImg } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as ursoImg } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as raposaImg } from "@/assets/neuro-treino/objetos/raposa.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bauImg } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as borboletaImg } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as presenteImg } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as diamanteImg } from "@/assets/neuro-treino/objetos/diamante.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01MA11 — Aula 011 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Descrever a localização de pessoas e objetos no espaço, usando
 * termos como à frente, atrás, ao lado, entre, em cima, embaixo,
 * dentro, fora, direita e esquerda.
 *
 * Missão: "O Mapa do Tesouro da Floresta".
 * Todas as perguntas de posição mostram a CENA REAL — a criança olha
 * a imagem e vê onde o sujeito está. Nada de rótulos "1" separados.
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
    convite: "Vamos explorar a floresta juntos e achar o baú do tesouro?",
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
      "Se três animais estão em fila (urso, coelho, raposa), o coelho está ENTRE o urso e a raposa.",
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
    resposta: "O esquilo Brilha está EM CIMA da árvore.",
    // Sem interativo aqui — a resposta já vem com passos ilustrados.
    // A cena real aparece nos blocos seguintes (Guiada, Desafio, Quiz).
  },

  atividadeGuiada: {
    enunciado:
      "Olhe a cena: o coelho entrou na toca. Onde ele está?",
    resposta: "DENTRO.",
    explicacao:
      "Quando algo entra em outra coisa, dizemos que está DENTRO. Quando sai, está FORA.",
    visual: {
      tipo: "cena",
      pergunta: "Onde está o coelho?",
      posicao: "dentro",
      referenciaImg: casaImg,
      referenciaLabel: "Toca",
      sujeitoImg: coelhoImg,
      sujeitoLabel: "Coelho",
      opcoes: ["Fora", "Dentro", "Em cima"],
      correta: 1,
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
          pergunta: "Olhe a cena. Onde está o Brilha?",
          opcoes: ["Embaixo", "Em cima", "Dentro"],
          correta: 1,
          explicacao: "No alto do galho = EM CIMA.",
          visual: {
            tipo: "cena",
            posicao: "cima",
            referenciaImg: arvoreImg,
            referenciaLabel: "Árvore",
            sujeitoImg: brilhaImg,
            sujeitoLabel: "Brilha",
          },
        },
        {
          pergunta: "O coelho está na toca. Onde ele está?",
          opcoes: ["Fora", "Ao lado", "Dentro"],
          correta: 2,
          explicacao: "Ele está no meio da toca = DENTRO.",
          visual: {
            tipo: "cena",
            posicao: "dentro",
            referenciaImg: casaImg,
            referenciaLabel: "Toca",
            sujeitoImg: coelhoImg,
            sujeitoLabel: "Coelho",
          },
        },
        {
          pergunta: "Quem está ENTRE o urso e a raposa?",
          opcoes: ["🐻 Urso", "🐰 Coelho", "🦊 Raposa"],
          correta: 1,
          explicacao: "Entre = no meio. Quem está no meio é o coelho.",
          visual: {
            tipo: "cenaEntre",
            fila: [
              { img: ursoImg, label: "🐻 Urso" },
              { img: coelhoImg, label: "🐰 Coelho" },
              { img: raposaImg, label: "🦊 Raposa" },
            ],
          },
        },
        {
          pergunta: "A bola está bem pertinho do baú. Onde ela está?",
          opcoes: ["Em cima", "Ao lado", "Atrás"],
          correta: 1,
          explicacao: "Pertinho, do lado = AO LADO.",
          visual: {
            tipo: "cena",
            posicao: "aoLado",
            referenciaImg: bauImg,
            referenciaLabel: "Baú",
            sujeitoImg: bolaImg,
            sujeitoLabel: "Bola",
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
      pergunta: "Olhe a cena. Onde está o livro?",
      opcoes: ["Embaixo", "Em cima", "Dentro"],
      correta: 1,
      explicacao: "O livro está no alto do baú — EM CIMA.",
      visual: {
        tipo: "cena",
        posicao: "cima",
        referenciaImg: bauImg,
        referenciaLabel: "Mesa",
        sujeitoImg: livroImg,
        sujeitoLabel: "Livro",
      },
    },
    {
      pergunta: "Quem está ENTRE o urso e o coelho?",
      opcoes: ["🐻 Urso", "🐱 Gato", "🐰 Coelho"],
      correta: 1,
      explicacao: "Entre = no meio. Quem está no meio é o gato.",
      visual: {
        tipo: "cenaEntre",
        fila: [
          { img: ursoImg, label: "🐻 Urso" },
          { img: gatoImg, label: "🐱 Gato" },
          { img: coelhoImg, label: "🐰 Coelho" },
        ],
      },
    },
    {
      pergunta: "O presente saiu da caixa. Onde ele está?",
      opcoes: ["Dentro", "Fora", "Em cima"],
      correta: 1,
      explicacao: "Ele está longe da caixa — FORA.",
      visual: {
        tipo: "cena",
        posicao: "fora",
        referenciaImg: bauImg,
        referenciaLabel: "Caixa",
        sujeitoImg: presenteImg,
        sujeitoLabel: "Presente",
      },
    },
    {
      pergunta: "Olhe as duas estrelas. A estrela laranja está à:",
      opcoes: ["Esquerda", "Direita", "Em cima"],
      correta: 1,
      explicacao: "A seta ➡️ mostra: a estrela laranja está à DIREITA.",
      visual: {
        tipo: "cena",
        posicao: "direita",
        referenciaImg: estrelaImg,
        referenciaLabel: "Estrela azul",
        sujeitoImg: estrelaImg,
        sujeitoLabel: "Estrela",
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
    // ==== FASE 1 · EM CIMA / EMBAIXO / DENTRO ====
    {
      tipo: "posicaoEspacial",
      titulo: "Fase 1 · Onde está o Brilha?",
      instrucao:
        "Olhe a cena com atenção. Onde o esquilo Brilha está em cada figura?",
      cenas: [
        {
          modo: "dupla",
          referenciaImg: arvoreImg,
          referenciaLabel: "Árvore",
          sujeitoImg: brilhaImg,
          sujeitoLabel: "Brilha",
          posicao: "cima",
          pergunta: "Onde está o Brilha?",
          opcoes: ["Embaixo", "Em cima", "Dentro"],
          correta: 1,
          acerto: "🎉 Isso! O Brilha está EM CIMA da árvore.",
          erro: "Olhe pro alto — o Brilha está bem em cima da árvore.",
        },
        {
          modo: "dupla",
          referenciaImg: arvoreImg,
          referenciaLabel: "Árvore",
          sujeitoImg: brilhaImg,
          sujeitoLabel: "Brilha",
          posicao: "baixo",
          pergunta: "E agora, onde está o Brilha?",
          opcoes: ["Em cima", "Embaixo", "Ao lado"],
          correta: 1,
          acerto: "🎉 EMBAIXO! Ele desceu pro pé da árvore.",
          erro: "O Brilha está bem lá embaixo da árvore.",
        },
        {
          modo: "dupla",
          referenciaImg: casaImg,
          referenciaLabel: "Toca",
          sujeitoImg: brilhaImg,
          sujeitoLabel: "Brilha",
          posicao: "dentro",
          pergunta: "Onde está o Brilha agora?",
          opcoes: ["Fora", "Dentro", "Em cima"],
          correta: 1,
          acerto: "🏠 Boa! Ele está DENTRO da toca.",
          erro: "Olhe: ele está no meio da toca — DENTRO.",
        },
      ],
    },

    // ==== FASE 2 · DENTRO x FORA — arrastar o coelho ====
    {
      tipo: "arrastar",
      titulo: "Fase 2 · Coloque o Coelho na Toca",
      instrucao:
        "Arraste um coelho pra DENTRO da toca e outro pra FORA. Toque no coelho e depois no lugar certo.",
      itemImagem: coelhoImg,
      alvosVisuais: [
        { nome: "DENTRO da toca 🏠", cor: "#F59E0B", capacidade: 1, imagemUrl: casaImg },
        { nome: "FORA (no jardim) 🌳", cor: "#10B981", capacidade: 1, imagemUrl: arvoreImg },
      ],
      pares: [
        { item: "Coelho 1", alvo: "DENTRO da toca 🏠" },
        { item: "Coelho 2", alvo: "FORA (no jardim) 🌳" },
      ],
    },

    // ==== FASE 3 · ENTRE ====
    {
      tipo: "posicaoEspacial",
      titulo: "Fase 3 · Quem está ENTRE?",
      instrucao:
        "Três animais na floresta. Olhe a fila e descubra quem está NO MEIO.",
      cenas: [
        {
          modo: "entre",
          fila: [
            { img: ursoImg, label: "🐻 Urso" },
            { img: coelhoImg, label: "🐰 Coelho" },
            { img: raposaImg, label: "🦊 Raposa" },
          ],
          pergunta: "Quem está ENTRE o urso e a raposa?",
          opcoes: ["🐻 Urso", "🐰 Coelho", "🦊 Raposa"],
          correta: 1,
          acerto: "🐰 Perfeito! O coelho está ENTRE (no meio).",
          erro: "Entre = no meio. Quem está no meio é o coelho.",
        },
        {
          modo: "entre",
          fila: [
            { img: gatoImg, label: "🐱 Gato" },
            { img: brilhaImg, label: "🐿️ Brilha" },
            { img: coelhoImg, label: "🐰 Coelho" },
          ],
          pergunta: "Quem está ENTRE o gato e o coelho?",
          opcoes: ["🐱 Gato", "🐿️ Brilha", "🐰 Coelho"],
          correta: 1,
          acerto: "🐿️ Isso! O Brilha está no meio.",
          erro: "Olhe o meio da fila — quem está lá é o Brilha.",
        },
      ],
    },

    // ==== FASE 4 · DIREITA x ESQUERDA ====
    {
      tipo: "posicaoEspacial",
      titulo: "Fase 4 · Direita ou Esquerda?",
      instrucao:
        "Olhe pra qual lado o objeto está em relação ao Brilha.",
      cenas: [
        {
          modo: "dupla",
          referenciaImg: brilhaImg,
          referenciaLabel: "Brilha",
          sujeitoImg: presenteImg,
          sujeitoLabel: "Mochila",
          posicao: "esquerda",
          pergunta: "A mochila está:",
          opcoes: ["À direita", "À esquerda", "Em cima"],
          correta: 1,
          acerto: "⬅️ Boa! A mochila está à ESQUERDA do Brilha.",
          erro: "Olhe a seta ⬅️ — a mochila está do lado esquerdo.",
        },
        {
          modo: "dupla",
          referenciaImg: brilhaImg,
          referenciaLabel: "Brilha",
          sujeitoImg: bauImg,
          sujeitoLabel: "Baú",
          posicao: "direita",
          pergunta: "O baú está:",
          opcoes: ["À esquerda", "À direita", "Embaixo"],
          correta: 1,
          acerto: "➡️ Isso! O baú está à DIREITA do Brilha.",
          erro: "Olhe a seta ➡️ — o baú está do lado direito.",
        },
      ],
    },

    // ==== FASE 5 · AO LADO / ATRÁS / FRENTE ====
    {
      tipo: "posicaoEspacial",
      titulo: "Fase 5 · Ao lado, Atrás ou na Frente?",
      instrucao: "Descubra onde o Brilha está em cada cena.",
      cenas: [
        {
          modo: "dupla",
          referenciaImg: arvoreImg,
          referenciaLabel: "Árvore",
          sujeitoImg: brilhaImg,
          sujeitoLabel: "Brilha",
          posicao: "aoLado",
          pergunta: "Onde está o Brilha?",
          opcoes: ["Em cima", "Ao lado", "Dentro"],
          correta: 1,
          acerto: "Boa! Bem pertinho, do lado = AO LADO.",
          erro: "Ele está grudadinho do lado da árvore = AO LADO.",
        },
        {
          modo: "dupla",
          referenciaImg: casaImg,
          referenciaLabel: "Casa",
          sujeitoImg: brilhaImg,
          sujeitoLabel: "Brilha",
          posicao: "atras",
          pergunta: "Onde está o Brilha?",
          opcoes: ["Na frente", "Atrás", "Dentro"],
          correta: 1,
          acerto: "👀 Isso! Ele está escondidinho ATRÁS.",
          erro: "Olhe: ele está espiando de trás da casa.",
        },
        {
          modo: "dupla",
          referenciaImg: casaImg,
          referenciaLabel: "Casa",
          sujeitoImg: brilhaImg,
          sujeitoLabel: "Brilha",
          posicao: "frente",
          pergunta: "E agora?",
          opcoes: ["Atrás", "Na frente", "Em cima"],
          correta: 1,
          acerto: "🎉 Ele saiu e ficou NA FRENTE!",
          erro: "Olhe: agora ele está bem na frente da casa.",
        },
      ],
    },

    // ==== MINI JOGO · Explorador ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Explorador da Floresta",
      instrucao:
        "Coloque a 🦋 borboleta EM CIMA da flor. Coloque o 🐰 coelho AO LADO da árvore.",
      itemImagem: borboletaImg,
      alvosVisuais: [
        { nome: "EM CIMA da flor 🌼", cor: "#F472B6", capacidade: 1, imagemUrl: florImg },
        { nome: "AO LADO da árvore 🌳", cor: "#10B981", capacidade: 1, imagemUrl: arvoreImg },
      ],
      pares: [
        { item: "🦋 Borboleta", alvo: "EM CIMA da flor 🌼" },
        { item: "🐰 Coelho", alvo: "AO LADO da árvore 🌳" },
      ],
    },

    // ==== MINI JOGO · Siga o Caminho do Mapa ====
    {
      tipo: "ordenar",
      titulo: "Mini Jogo · Siga o Caminho do Mapa",
      instrucao:
        "Coloque as setas na ORDEM certa pra levar o Brilha até o baú: ➡️ ➡️ ⬆️ ⬅️",
      itens: [
        "➡️ Direita 1",
        "➡️ Direita 2",
        "⬆️ Cima",
        "⬅️ Esquerda (baú)",
      ],
      imagens: [
        { imagemUrl: diamanteImg, quantidade: 1, rotulo: "➡️ Direita 1", cor: "#60A5FA" },
        { imagemUrl: diamanteImg, quantidade: 1, rotulo: "➡️ Direita 2", cor: "#60A5FA" },
        { imagemUrl: diamanteImg, quantidade: 1, rotulo: "⬆️ Cima", cor: "#FBBF24" },
        { imagemUrl: bauImg, quantidade: 1, rotulo: "⬅️ Esquerda → 🏆 Baú!", cor: "#F59E0B" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Olhe a cena. Onde está o Brilha?",
        opcoes: ["Embaixo", "Em cima", "Dentro"],
        correta: 1,
        explicacao: "No alto da árvore = EM CIMA.",
        visual: {
          tipo: "cena",
          posicao: "cima",
          referenciaImg: arvoreImg,
          referenciaLabel: "Árvore",
          sujeitoImg: brilhaImg,
          sujeitoLabel: "Brilha",
        },
      },
      {
        pergunta: "O coelho entrou na toca. Onde ele está?",
        opcoes: ["Dentro", "Fora", "Ao lado"],
        correta: 0,
        explicacao: "Entrou = DENTRO.",
        visual: {
          tipo: "cena",
          posicao: "dentro",
          referenciaImg: casaImg,
          referenciaLabel: "Toca",
          sujeitoImg: coelhoImg,
          sujeitoLabel: "Coelho",
        },
      },
    ],
    medio: [
      {
        pergunta: "Quem está ENTRE o urso e a raposa?",
        opcoes: ["🐻 Urso", "🐰 Coelho", "🦊 Raposa"],
        correta: 1,
        explicacao: "Entre = no meio.",
        visual: {
          tipo: "cenaEntre",
          fila: [
            { img: ursoImg, label: "🐻 Urso" },
            { img: coelhoImg, label: "🐰 Coelho" },
            { img: raposaImg, label: "🦊 Raposa" },
          ],
        },
      },
      {
        pergunta: "A bola está pertinho do baú. Onde ela está?",
        opcoes: ["Em cima", "Ao lado", "Atrás"],
        correta: 1,
        explicacao: "Pertinho, do lado = AO LADO.",
        visual: {
          tipo: "cena",
          posicao: "aoLado",
          referenciaImg: bauImg,
          referenciaLabel: "Baú",
          sujeitoImg: bolaImg,
          sujeitoLabel: "Bola",
        },
      },
    ],
    dificil: [
      {
        pergunta: "O presente saiu da caixa. Onde ele está?",
        opcoes: ["Dentro", "Fora", "Em cima"],
        correta: 1,
        explicacao: "Longe da caixa = FORA.",
        visual: {
          tipo: "cena",
          posicao: "fora",
          referenciaImg: bauImg,
          referenciaLabel: "Caixa",
          sujeitoImg: presenteImg,
          sujeitoLabel: "Presente",
        },
      },
      {
        pergunta: "Olhe: a estrela está de que lado do Brilha?",
        opcoes: ["Esquerda", "Direita", "Em cima"],
        correta: 1,
        explicacao: "A seta ➡️ mostra: à DIREITA.",
        visual: {
          tipo: "cena",
          posicao: "direita",
          referenciaImg: brilhaImg,
          referenciaLabel: "Brilha",
          sujeitoImg: estrelaImg,
          sujeitoLabel: "Estrela",
        },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01MA12" },
};

export default aula;
