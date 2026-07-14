import type { Aula } from "../types";

import { url as brilhaImg } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as coelhoImg } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as ursoImg } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as raposaImg } from "@/assets/neuro-treino/objetos/raposa.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bauImg } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as castanhaImg } from "@/assets/neuro-treino/objetos/castanha.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as diamanteImg } from "@/assets/neuro-treino/objetos/diamante.png.asset.json";

/**
 * EF01MA12 — Aula 012 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Descrever e representar a localização de pessoas e objetos no
 * espaço segundo um dado PONTO DE REFERÊNCIA, compreendendo que os
 * termos direita/esquerda/em cima/embaixo/dentro/fora dependem do
 * referencial.
 *
 * Missão: "A Expedição da Coruja Sábia".
 * Segue o gabarito visual travado em EF01MA02 / EF01MA11:
 * toda pergunta de posição mostra a CENA REAL (imagens posicionadas),
 * nunca só rótulo textual.
 */
const aula: Aula = {
  codigo: "EF01MA12",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "A Expedição da Coruja Sábia",

  narrativa: {
    titulo: "A Expedição da Coruja Sábia",
    contexto:
      "A Coruja Sábia preparou um mapa da floresta e chamou o esquilo Brilha para uma expedição especial.",
    problema:
      "A Coruja avisou: 'Uma mesma árvore pode estar à DIREITA para um animal e à ESQUERDA para outro. Tudo depende de onde estamos olhando.'",
    convite:
      "Vamos descobrir como o PONTO DE REFERÊNCIA muda a localização das coisas?",
  },

  conhecimentosPrevios: [
    "Conhecer as palavras em cima, embaixo, dentro, fora, ao lado, entre.",
    "Diferenciar direita e esquerda no próprio corpo.",
    "Reconhecer animais e objetos por imagem.",
  ],

  missao:
    "Aprender que DIREITA e ESQUERDA dependem de QUEM está olhando — o ponto de referência muda tudo!",

  objetivos: [
    "Identificar posições usando um ponto de referência.",
    "Compreender que direita e esquerda dependem da posição do observador.",
    "Localizar pessoas e objetos em mapas simples.",
    "Interpretar instruções espaciais.",
  ],

  motivacao:
    "A Coruja Sábia mostra: quando você vira de lado, o que estava à direita passa a ficar à esquerda. Aprender isso ajuda a ler mapas, seguir pistas e brincar de caça ao tesouro!",

  explicacao:
    "🦉 A Coruja Sábia ensina: DIREITA e ESQUERDA dependem de QUEM está olhando.\n\n🐿️ O Brilha olha pra árvore. A castanha está à DIREITA DELE.\n\n🐰 O Coelho está do OUTRO LADO da árvore. Pra ele, a MESMA castanha está à ESQUERDA.\n\n👉 O objeto não se mexeu — quem mudou foi o ponto de vista!\n\n🧭 Sempre pergunte: 'Direita de QUEM? Esquerda de QUEM?'",

  explicacoesNiveis: {
    nivel1:
      "Direita e esquerda dependem de quem está olhando. Se você virar, muda!",
    nivel2:
      "Ponto de referência = de quem estamos falando. 'À direita do Brilha' é diferente de 'à direita do coelho'.",
    nivel3:
      "Se dois amigos ficam frente a frente, o que está à direita de um está à esquerda do outro.",
    nivel4:
      "Mapas, GPS e até o professor da educação física usam ponto de referência para explicar caminhos com precisão.",
  },

  exemploResolvido: {
    enunciado:
      "O Brilha olha pra árvore. A castanha está à direita dele. E pro Coelho, que está do outro lado da árvore?",
    passos: [
      "Olhe pro Brilha: a castanha está do lado direito dele.",
      "Agora imagine o Coelho de frente pro Brilha.",
      "Se você vira, direita e esquerda TROCAM.",
      "Então, pro Coelho, a castanha está à ESQUERDA.",
    ],
    resposta:
      "A mesma castanha: à DIREITA do Brilha e à ESQUERDA do Coelho. O ponto de referência mudou!",
  },

  atividadeGuiada: {
    enunciado:
      "Olhe a cena. A castanha está bem do lado DIREITO do Brilha. Pergunta: pro Brilha, a castanha está à…",
    resposta: "DIREITA.",
    explicacao:
      "Como o Brilha é o ponto de referência e a castanha está do lado direito dele, dizemos: à DIREITA do Brilha.",
    visual: {
      tipo: "cena",
      pergunta: "Pro Brilha, a castanha está à…",
      posicao: "direita",
      referenciaImg: brilhaImg,
      referenciaLabel: "Brilha",
      sujeitoImg: castanhaImg,
      sujeitoLabel: "Castanha",
      opcoes: ["À esquerda", "À direita", "Em cima"],
      correta: 1,
    },
  },

  exercicios: [
    { enunciado: "🐿️ Brilha olha pra árvore. A castanha está do lado direito dele. Ela está à…", resposta: "Direita", dica: "Direita do Brilha." },
    { enunciado: "🐰 Coelho está do outro lado. A MESMA castanha, pra ele, está à…", resposta: "Esquerda", dica: "Ele vê o oposto." },
    { enunciado: "Se você VIRAR, sua direita passa a ser sua…", resposta: "Esquerda", dica: "Trocou de lado." },
    { enunciado: "Pra saber onde uma coisa está, precisamos saber o…", resposta: "Ponto de referência", dica: "De quem estamos falando." },
    { enunciado: "🦉 Coruja pergunta: 'Direita de …?' Complete.", resposta: "Quem", dica: "Sempre de alguém." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: complete a expedição da Coruja Sábia usando o ponto de referência certo!",
    resposta:
      "Direita do Brilha · Esquerda do Coelho · Ponto de referência muda tudo.",
    visual: {
      cena: [
        { personagem: "Coruja Sábia", itemImagemUrl: corujaImg, quantidade: 1, cor: "#8B5CF6" },
        { personagem: "Baú do Tesouro", itemImagemUrl: bauImg, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Estrela do Mapa", itemImagemUrl: estrelaImg, quantidade: 3, cor: "#FBBF24" },
      ],
      perguntas: [
        {
          pergunta: "Olhe a cena. Pro Brilha, a castanha está de que lado?",
          opcoes: ["À esquerda", "À direita", "Atrás"],
          correta: 1,
          explicacao: "A castanha aparece do lado direito do Brilha → à DIREITA dele.",
          visual: {
            tipo: "cena",
            posicao: "direita",
            referenciaImg: brilhaImg,
            referenciaLabel: "Brilha",
            sujeitoImg: castanhaImg,
            sujeitoLabel: "Castanha",
          },
        },
        {
          pergunta: "Agora quem olha é o Coelho, do OUTRO lado. Pra ele, a MESMA castanha está à…",
          opcoes: ["Direita", "Esquerda", "Em cima"],
          correta: 1,
          explicacao: "Ele está de frente pro Brilha, então direita e esquerda TROCAM. Pra ele, é à ESQUERDA.",
          visual: {
            tipo: "cena",
            posicao: "esquerda",
            referenciaImg: coelhoImg,
            referenciaLabel: "Coelho",
            sujeitoImg: castanhaImg,
            sujeitoLabel: "Castanha",
          },
        },
        {
          pergunta: "Quem está ENTRE o Brilha e o Coelho na trilha?",
          opcoes: ["🐿️ Brilha", "🌳 Árvore", "🐰 Coelho"],
          correta: 1,
          explicacao: "A árvore está no meio, entre os dois animais → ENTRE.",
          visual: {
            tipo: "cenaEntre",
            fila: [
              { img: brilhaImg, label: "🐿️ Brilha" },
              { img: arvoreImg, label: "🌳 Árvore" },
              { img: coelhoImg, label: "🐰 Coelho" },
            ],
          },
        },
        {
          pergunta: "Pro Brilha, o baú do tesouro está de que lado?",
          opcoes: ["À direita", "À esquerda", "Embaixo"],
          correta: 1,
          explicacao: "O baú aparece do lado esquerdo do Brilha → à ESQUERDA dele.",
          visual: {
            tipo: "cena",
            posicao: "esquerda",
            referenciaImg: brilhaImg,
            referenciaLabel: "Brilha",
            sujeitoImg: bauImg,
            sujeitoLabel: "Baú",
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "DIREITA e ESQUERDA dependem de QUEM está olhando.",
      "O PONTO DE REFERÊNCIA é a pessoa (ou animal) que olha a cena.",
      "Se dois amigos ficam FRENTE A FRENTE, direita e esquerda TROCAM.",
      "Sempre pergunte: 'Direita de QUEM? Esquerda de QUEM?'",
      "Mapas e GPS usam ponto de referência pra mostrar o caminho certo.",
    ],
    dica:
      "Antes de responder, coloque o dedinho no personagem que está olhando e depois siga pro lado que você quer descobrir.",
  },

  quiz: [
    {
      pergunta: "Pro Brilha, a castanha está de que lado?",
      opcoes: ["À esquerda", "À direita", "Em cima"],
      correta: 1,
      explicacao: "A castanha aparece do lado direito do Brilha → à DIREITA dele.",
      visual: {
        tipo: "cena",
        posicao: "direita",
        referenciaImg: brilhaImg,
        referenciaLabel: "Brilha",
        sujeitoImg: castanhaImg,
        sujeitoLabel: "Castanha",
      },
    },
    {
      pergunta: "A MESMA castanha, agora vista pelo Coelho, está à…",
      opcoes: ["Direita", "Esquerda", "Atrás"],
      correta: 1,
      explicacao: "Ele está do outro lado. Direita e esquerda TROCAM → à ESQUERDA.",
      visual: {
        tipo: "cena",
        posicao: "esquerda",
        referenciaImg: coelhoImg,
        referenciaLabel: "Coelho",
        sujeitoImg: castanhaImg,
        sujeitoLabel: "Castanha",
      },
    },
    {
      pergunta: "Quem está ENTRE o Brilha e o Coelho?",
      opcoes: ["🐿️ Brilha", "🌳 Árvore", "🐰 Coelho"],
      correta: 1,
      explicacao: "A árvore está no meio dos dois → ENTRE.",
      visual: {
        tipo: "cenaEntre",
        fila: [
          { img: brilhaImg, label: "🐿️ Brilha" },
          { img: arvoreImg, label: "🌳 Árvore" },
          { img: coelhoImg, label: "🐰 Coelho" },
        ],
      },
    },
    {
      pergunta: "Pra saber se algo está à direita ou à esquerda, precisamos saber o…",
      opcoes: ["Tamanho do objeto", "Ponto de referência (quem olha)", "Peso do objeto"],
      correta: 1,
      explicacao: "Direita e esquerda dependem de QUEM está olhando — o ponto de referência.",
      visual: {
        tipo: "cena",
        posicao: "aoLado",
        referenciaImg: corujaImg,
        referenciaLabel: "Coruja Sábia",
        sujeitoImg: brilhaImg,
        sujeitoLabel: "Brilha",
      },
    },
  ],

  conclusao:
    "🧭 Medalha conquistada: Mestre da Orientação! Você aprendeu que direita e esquerda dependem de quem está olhando. Missão em Família: peça pra alguém esconder um objeto e dar pistas ('à direita da cadeira', 'atrás da porta'). Encontre seguindo o ponto de referência!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os aplicativos de mapa (tipo GPS) usam pontos de referência pra mostrar o caminho certo. Por isso ele sempre sabe ONDE você está antes de dizer PRA ONDE ir!",
  },

  interativas: [
    // ==== FASE 1 · Olhando pelo Brilha ====
    {
      tipo: "posicaoEspacial",
      titulo: "Fase 1 · Olhando pelo Brilha",
      instrucao:
        "O Brilha é o ponto de referência. Olhe onde está a castanha em relação a ele.",
      cenas: [
        {
          modo: "dupla",
          referenciaImg: brilhaImg,
          referenciaLabel: "Brilha",
          sujeitoImg: castanhaImg,
          sujeitoLabel: "Castanha",
          posicao: "direita",
          pergunta: "Pro Brilha, a castanha está à…",
          opcoes: ["Esquerda", "Direita", "Em cima"],
          correta: 1,
          acerto: "➡️ Isso! Do lado direito do Brilha = à DIREITA dele.",
          erro: "Olhe: a castanha aparece do lado direito do Brilha.",
        },
        {
          modo: "dupla",
          referenciaImg: brilhaImg,
          referenciaLabel: "Brilha",
          sujeitoImg: bauImg,
          sujeitoLabel: "Baú",
          posicao: "esquerda",
          pergunta: "E o baú do tesouro está à…",
          opcoes: ["Direita", "Esquerda", "Atrás"],
          correta: 1,
          acerto: "⬅️ Boa! O baú está à ESQUERDA do Brilha.",
          erro: "Olhe: o baú aparece do lado esquerdo do Brilha.",
        },
      ],
    },

    // ==== FASE 2 · Agora pelo Coelho ====
    {
      tipo: "posicaoEspacial",
      titulo: "Fase 2 · Agora quem olha é o Coelho",
      instrucao:
        "O CENÁRIO GIROU! Agora o COELHO é o ponto de referência. Os objetos não mudaram — quem mudou foi quem olha.",
      cenas: [
        {
          modo: "dupla",
          referenciaImg: coelhoImg,
          referenciaLabel: "Coelho",
          sujeitoImg: castanhaImg,
          sujeitoLabel: "Castanha",
          posicao: "esquerda",
          pergunta: "Pro Coelho, a MESMA castanha está à…",
          opcoes: ["Direita", "Esquerda", "Em cima"],
          correta: 1,
          acerto: "🎉 Isso! Ele está do outro lado — pra ele é ESQUERDA.",
          erro: "Como o Coelho está do outro lado, direita e esquerda TROCAM.",
        },
        {
          modo: "dupla",
          referenciaImg: coelhoImg,
          referenciaLabel: "Coelho",
          sujeitoImg: bauImg,
          sujeitoLabel: "Baú",
          posicao: "direita",
          pergunta: "E o baú, pro Coelho, está à…",
          opcoes: ["Esquerda", "Direita", "Embaixo"],
          correta: 1,
          acerto: "➡️ Perfeito! Ele vê o baú do lado direito dele.",
          erro: "Do outro lado, o baú fica à direita do Coelho.",
        },
      ],
    },

    // ==== FASE 3 · Complete o Caminho ====
    {
      tipo: "ordenar",
      titulo: "Fase 3 · Complete o Caminho do Brilha",
      instrucao:
        "Ajude o Brilha a chegar até o baú! Coloque as setas na ORDEM certa: ➡️ ⬆️ ⬅️",
      itens: [
        "➡️ Direita",
        "⬆️ Frente",
        "⬅️ Esquerda (baú)",
      ],
      imagens: [
        { imagemUrl: diamanteImg, quantidade: 1, rotulo: "➡️ Direita", cor: "#60A5FA" },
        { imagemUrl: diamanteImg, quantidade: 1, rotulo: "⬆️ Frente", cor: "#FBBF24" },
        { imagemUrl: bauImg, quantidade: 1, rotulo: "⬅️ Esquerda → 🏆 Baú!", cor: "#F59E0B" },
      ],
    },

    // ==== FASE 4 · Quem está olhando? ====
    {
      tipo: "posicaoEspacial",
      titulo: "Fase 4 · Quem está olhando?",
      instrucao:
        "A MESMA bola aparece em duas cenas. Preste atenção em QUEM é o ponto de referência.",
      cenas: [
        {
          modo: "dupla",
          referenciaImg: brilhaImg,
          referenciaLabel: "Brilha",
          sujeitoImg: bolaImg,
          sujeitoLabel: "Bola",
          posicao: "direita",
          pergunta: "Pro Brilha, a bola está à…",
          opcoes: ["Esquerda", "Direita", "Em cima"],
          correta: 1,
          acerto: "➡️ Isso! Do lado direito do Brilha.",
          erro: "Olhe: a bola aparece do lado direito do Brilha.",
        },
        {
          modo: "dupla",
          referenciaImg: coelhoImg,
          referenciaLabel: "Coelho",
          sujeitoImg: bolaImg,
          sujeitoLabel: "Bola",
          posicao: "esquerda",
          pergunta: "E pro Coelho, a MESMA bola está à…",
          opcoes: ["Direita", "Esquerda", "Atrás"],
          correta: 1,
          acerto: "⬅️ Perfeito! Ele vê a bola do lado esquerdo dele.",
          erro: "Coelho está do outro lado — direita e esquerda TROCAM.",
        },
      ],
    },

    // ==== FASE 5 · Monte o Mapa ====
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Monte o Mapa da Floresta",
      instrucao:
        "Coloque a 🌸 flor à ESQUERDA da casa e a 🪨 castanha ATRÁS da árvore.",
      itemImagem: florImg,
      alvosVisuais: [
        { nome: "À ESQUERDA da casa 🏠", cor: "#F472B6", capacidade: 1, imagemUrl: casaImg },
        { nome: "ATRÁS da árvore 🌳", cor: "#10B981", capacidade: 1, imagemUrl: arvoreImg },
      ],
      pares: [
        { item: "🌸 Flor", alvo: "À ESQUERDA da casa 🏠" },
        { item: "🌰 Castanha", alvo: "ATRÁS da árvore 🌳" },
      ],
    },

    // ==== MINI JOGO · Guia da Floresta ====
    {
      tipo: "posicaoEspacial",
      titulo: "Mini Jogo · Guia da Floresta",
      instrucao:
        "A Coruja Sábia dá pistas. Descubra a posição certa em cada cena.",
      cenas: [
        {
          modo: "entre",
          fila: [
            { img: brilhaImg, label: "🐿️ Brilha" },
            { img: arvoreImg, label: "🌳 Árvore" },
            { img: coelhoImg, label: "🐰 Coelho" },
          ],
          pergunta: "Quem está ENTRE o Brilha e o Coelho?",
          opcoes: ["🐿️ Brilha", "🌳 Árvore", "🐰 Coelho"],
          correta: 1,
          acerto: "🌳 Perfeito! A árvore está no meio.",
          erro: "Entre = no meio. Quem está no meio é a árvore.",
        },
        {
          modo: "dupla",
          referenciaImg: corujaImg,
          referenciaLabel: "Coruja Sábia",
          sujeitoImg: estrelaImg,
          sujeitoLabel: "Estrela",
          posicao: "direita",
          pergunta: "Pra Coruja, a estrela está à…",
          opcoes: ["Esquerda", "Direita", "Em cima"],
          correta: 1,
          acerto: "⭐ Isso! Do lado direito da Coruja.",
          erro: "Olhe: a estrela aparece do lado direito da Coruja.",
        },
        {
          modo: "dupla",
          referenciaImg: brilhaImg,
          referenciaLabel: "Brilha",
          sujeitoImg: arvoreImg,
          sujeitoLabel: "Árvore",
          posicao: "frente",
          pergunta: "A árvore está NA FRENTE do Brilha?",
          opcoes: ["Atrás", "Na frente", "Em cima"],
          correta: 1,
          acerto: "👀 Isso! Bem NA FRENTE do Brilha.",
          erro: "Olhe: a árvore está na frente do Brilha.",
        },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Pro Brilha, a castanha está à…",
        opcoes: ["Esquerda", "Direita", "Em cima"],
        correta: 1,
        explicacao: "Do lado direito do Brilha = à DIREITA dele.",
        visual: {
          tipo: "cena",
          posicao: "direita",
          referenciaImg: brilhaImg,
          referenciaLabel: "Brilha",
          sujeitoImg: castanhaImg,
          sujeitoLabel: "Castanha",
        },
      },
      {
        pergunta: "Pro Brilha, o baú está à…",
        opcoes: ["Direita", "Esquerda", "Dentro"],
        correta: 1,
        explicacao: "Do lado esquerdo do Brilha = à ESQUERDA dele.",
        visual: {
          tipo: "cena",
          posicao: "esquerda",
          referenciaImg: brilhaImg,
          referenciaLabel: "Brilha",
          sujeitoImg: bauImg,
          sujeitoLabel: "Baú",
        },
      },
    ],
    medio: [
      {
        pergunta: "A MESMA castanha, vista pelo Coelho, está à…",
        opcoes: ["Direita", "Esquerda", "Atrás"],
        correta: 1,
        explicacao: "Coelho está do outro lado → direita e esquerda TROCAM.",
        visual: {
          tipo: "cena",
          posicao: "esquerda",
          referenciaImg: coelhoImg,
          referenciaLabel: "Coelho",
          sujeitoImg: castanhaImg,
          sujeitoLabel: "Castanha",
        },
      },
      {
        pergunta: "Quem está ENTRE o Brilha e o Coelho?",
        opcoes: ["🐿️ Brilha", "🌳 Árvore", "🐰 Coelho"],
        correta: 1,
        explicacao: "A árvore está no meio dos dois → ENTRE.",
        visual: {
          tipo: "cenaEntre",
          fila: [
            { img: brilhaImg, label: "🐿️ Brilha" },
            { img: arvoreImg, label: "🌳 Árvore" },
            { img: coelhoImg, label: "🐰 Coelho" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Pra Coruja Sábia, a estrela está de que lado?",
        opcoes: ["Esquerda", "Direita", "Embaixo"],
        correta: 1,
        explicacao: "A estrela aparece do lado direito da Coruja → DIREITA.",
        visual: {
          tipo: "cena",
          posicao: "direita",
          referenciaImg: corujaImg,
          referenciaLabel: "Coruja Sábia",
          sujeitoImg: estrelaImg,
          sujeitoLabel: "Estrela",
        },
      },
      {
        pergunta: "A MESMA bola: pro Brilha está à direita. Pro Coelho (do outro lado) está à…",
        opcoes: ["Direita", "Esquerda", "Em cima"],
        correta: 1,
        explicacao: "Do outro lado, direita e esquerda TROCAM → ESQUERDA.",
        visual: {
          tipo: "cena",
          posicao: "esquerda",
          referenciaImg: coelhoImg,
          referenciaLabel: "Coelho",
          sujeitoImg: bolaImg,
          sujeitoLabel: "Bola",
        },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01MA13" },
};

export default aula;
