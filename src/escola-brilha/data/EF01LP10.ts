import type { Aula } from "../types";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as chuvaImg } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menino-acordando.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";

/**
 * EF01LP10 — Aula 010 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Língua Portuguesa
 * Missão do Dia: "O Grande Livro das Descobertas".
 * Padrão travado: tap-to-speak — toque na figura ou frase pra ouvir.
 */
const aula: Aula = {
  codigo: "EF01LP10",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Grande Livro das Descobertas",

  narrativa: {
    titulo: "O Grande Livro das Descobertas",
    contexto:
      "Depois de recuperar as palavras e montar frases, o Brilha encontra um enorme livro mágico — mas suas páginas estão vazias.",
    problema:
      "A Coruja Sábia conta: cada criança que aprende a ler ajuda a escrever uma nova página da Floresta Encantada.",
    convite:
      "Bora completar o Livro das Descobertas lendo pequenas histórias?",
  },

  conhecimentosPrevios: [
    "Reconhecer palavras e imagens (EF01LP08).",
    "Montar frases com palavras na ordem certa (EF01LP09).",
    "Relacionar sons e letras.",
  ],

  missao:
    "Ler pequenos textos, entender o que dizem e organizar cenas em sequência.",

  objetivos: [
    "Compreender pequenas frases e textos.",
    "Relacionar texto e imagem.",
    "Organizar cenas em sequência lógica.",
    "Fortalecer a confiança na leitura.",
  ],

  motivacao:
    "Toda grande aventura começa com uma pequena leitura!",

  explicacao:
    "Ler é ENTENDER o que está escrito.\n\n📖 Lili tem um gato. O gato gosta de brincar com uma bola vermelha. Todos os dias Lili brinca com seu amigo.\n\nDepois de ler, dá pra responder: QUEM é a personagem? O QUE ela faz? COM QUEM ela brinca?",

  explicacoesNiveis: {
    nivel1: "Ler = entender o que está escrito, não só olhar as letras.",
    nivel2:
      "Um texto pequeno tem personagem (QUEM) e uma ação (O QUE acontece).",
    nivel3:
      "Cenas de uma história têm ORDEM: começo, meio e fim.",
    nivel4:
      "A figura ajuda a entender a leitura — imagem e texto contam a mesma história.",
  },

  exemploResolvido: {
    enunciado:
      "Texto: 'Lili tem um gato. Ela brinca com ele todos os dias.' Quem é a personagem?",
    passos: [
      "Leia devagar e pense: quem aparece na história?",
      "O nome que aparece é LILI.",
      "Então a personagem é LILI.",
    ],
    resposta: "A personagem é LILI. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir. Qual imagem combina com a frase 'O gato brinca com a bola'?",
    resposta: "🐱 gato com bola.",
    explicacao:
      "A frase fala de um GATO e uma BOLA. A figura certa é a do gato.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura combina com 'O gato brinca com a bola'?",
      opcoes: [
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "coruja", imagemUrl: corujaImg },
        { nome: "arvore", imagemUrl: arvoreImg },
      ],
      respostaCerta: "gato",
    },
  },

  exercicios: [
    {
      enunciado: "Complete: 'Lili brinca com uma ___.'",
      resposta: "BOLA.",
      dica: "A história diz que o gato brinca com uma bola vermelha.",
    },
    {
      enunciado: "Complete: 'O gato gosta de ___.'",
      resposta: "BRINCAR.",
      dica: "O gato passa o dia brincando com Lili.",
    },
    {
      enunciado: "Quem é a personagem da história?",
      resposta: "LILI.",
      dica: "É o nome da menina que aparece no texto.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: leia cada página do livro e responda o que aconteceu.",
    resposta:
      "Ler é entender: quem, o quê e como termina a história.",
    visual: {
      cena: [
        { personagem: "LILI", itemImagemUrl: meninaImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "GATO", itemImagemUrl: gatoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "BOLA", itemImagemUrl: bolaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "SOL", itemImagemUrl: solImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "LIVRO", itemImagemUrl: livroImg, quantidade: 1, cor: "#A78BFA" },
      ],
      perguntas: [
        {
          pergunta: "Quem era a personagem da história?",
          opcoes: ["Lili", "João", "Ana"],
          correta: 0,
          explicacao: "O nome que aparece no texto é LILI.",
        },
        {
          pergunta: "Com quem Lili brincava?",
          opcoes: ["Gato", "Peixe", "Pássaro"],
          correta: 0,
          explicacao: "Lili tem um GATO e brinca com ele todos os dias.",
        },
        {
          pergunta: "Com que objeto o gato gosta de brincar?",
          opcoes: ["Bola", "Maçã", "Carro"],
          correta: 0,
          explicacao: "Uma BOLA vermelha — foi o que a história contou.",
        },
        {
          pergunta: "Qual imagem representa 'O sol nasceu'?",
          opcoes: ["☀️ Sol", "🌙 Lua", "🌧️ Chuva"],
          correta: 0,
          explicacao: "Sol nasceu → figura do ☀️ SOL.",
        },
        {
          pergunta: "Ler significa:",
          opcoes: [
            "Entender o que está escrito",
            "Só olhar figuras",
            "Decorar letras",
          ],
          correta: 0,
          explicacao: "Ler é ENTENDER — não só olhar ou decorar.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "📖 Ler é ENTENDER o que está escrito.",
      "👤 Toda historinha tem QUEM (personagem) e O QUE acontece.",
      "🔢 As cenas seguem uma ORDEM: começo, meio e fim.",
      "🖼️ A figura ajuda: imagem + texto contam a mesma história.",
    ],
    dica: "Leia devagar, olhe a figura e pense: quem aparece? o que faz? como termina?",
  },

  quiz: [
    {
      pergunta: "Quem era a personagem principal da história?",
      opcoes: ["Lili", "Pedro", "Lucas"],
      correta: 0,
      explicacao: "A personagem é LILI.",
    },
    {
      pergunta: "Com quem Lili brincava?",
      opcoes: ["Gato", "Peixe", "Coelho"],
      correta: 0,
      explicacao: "Com o GATO dela.",
    },
    {
      pergunta: "Ler significa:",
      opcoes: [
        "Entender o que está escrito",
        "Apenas olhar figuras",
        "Decorar letras",
      ],
      correta: 0,
      explicacao: "Ler é entender o que está escrito.",
    },
    {
      pergunta: "Qual imagem representa 'O sol nasceu'?",
      opcoes: ["☀️ Sol", "🌙 Lua", "🌧️ Chuva"],
      correta: 0,
      explicacao: "☀️ SOL nasceu.",
    },
    {
      pergunta: "O que aprendemos hoje?",
      opcoes: [
        "Ler e compreender pequenas histórias",
        "Somente desenhar",
        "Somente contar números",
      ],
      correta: 0,
      explicacao: "Aprendemos a ler entendendo pequenas histórias.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Pequeno Leitor da Floresta! Missão em Família: leiam juntos um livro infantil e conversem sobre os personagens, o que aconteceu e a parte favorita.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Toda grande aventura começa com uma pequena leitura. Quanto mais você lê, mais histórias você guarda dentro de si!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Leia e Observe",
      instrucao:
        "Toque no texto pra ouvir: 'Lili tem um gato. O gato gosta de brincar com uma bola vermelha.' Qual figura combina com a história?",
      pergunta: "Qual figura representa a história?",
      opcoes: [
        { nome: "gato-bola", imagemUrl: gatoImg, rotulo: "🐱 gato com bola" },
        { nome: "arvore", imagemUrl: arvoreImg, rotulo: "🌳 árvore" },
        { nome: "casa", imagemUrl: casaImg, rotulo: "🏠 casa" },
      ],
      correta: 0,
      acerto: "🎉 Muito bem! Você compreendeu a história.",
      erro: "Leia de novo com atenção: a história fala do GATO e da BOLA.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Quem Apareceu?",
      instrucao:
        "Toque na figura pra ouvir. Depois responda quem é a personagem da história.",
      figura: { imagemUrl: meninaImg, rotulo: "👧 ?" },
      pergunta: "Quem é a personagem da história?",
      opcoes: ["LILI", "JOÃO", "ANA"],
      correta: 0,
      acerto: "🎉 Isso! A personagem é LILI.",
      erro: "O nome que aparece no texto é LILI.",
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Complete a História (bola)",
      instrucao:
        "Toque pra ouvir: 'Lili brinca com uma ___.' Qual figura completa?",
      pergunta: "Lili brinca com uma...?",
      opcoes: [
        { nome: "BOLA", imagemUrl: bolaImg, rotulo: "🏀 BOLA" },
        { nome: "MAÇÃ", imagemUrl: macaImg, rotulo: "🍎 MAÇÃ" },
        { nome: "LIVRO", imagemUrl: livroImg, rotulo: "📖 LIVRO" },
      ],
      correta: 0,
      acerto: "🏀 Isso! Lili brinca com uma BOLA.",
      erro: "A história diz que ela brinca com uma BOLA vermelha.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Organize a Sequência",
      instrucao:
        "A história tem 3 partes. Arraste cada cena pra ordem certa: começo, meio e fim.",
      pares: [
        { item: "🏀 Lili encontra a bola", alvo: "1º" },
        { item: "🐱 Eles brincam juntos", alvo: "2º" },
        { item: "😴 Os dois descansam", alvo: "3º" },
      ],
      alvosVisuais: [
        { nome: "1º", cor: "#34D399", capacidade: 1 },
        { nome: "2º", cor: "#FBBF24", capacidade: 1 },
        { nome: "3º", cor: "#A78BFA", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Biblioteca do Brilha (O sol nasceu)",
      instrucao:
        "A Coruja Sábia pediu o livro que diz 'O sol nasceu'. Escolha a figura certa.",
      pergunta: "Qual figura combina com 'O sol nasceu'?",
      opcoes: [
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "LUA", imagemUrl: luaImg, rotulo: "🌙 LUA" },
        { nome: "CHUVA", imagemUrl: chuvaImg, rotulo: "🌧️ CHUVA" },
      ],
      correta: 0,
      acerto: "☀️ Perfeito! O sol nasceu.",
      erro: "'O sol nasceu' → escolha o ☀️ SOL.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual figura combina com 'O gato dorme'?",
        opcoes: ["🐱 Gato", "🏠 Casa", "☀️ Sol"],
        correta: 0,
        explicacao: "'O gato dorme' → 🐱 GATO.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱" },
      },
      {
        pergunta: "Qual figura combina com 'A casa é grande'?",
        opcoes: ["🏠 Casa", "🐱 Gato", "🌸 Flor"],
        correta: 0,
        explicacao: "'A casa é grande' → 🏠 CASA.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" },
      },
      {
        pergunta: "Qual figura combina com 'A árvore é alta'?",
        opcoes: ["🌳 Árvore", "🐱 Gato", "🏠 Casa"],
        correta: 0,
        explicacao: "'A árvore é alta' → 🌳 ÁRVORE.",
        visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
      },
    ],
    medio: [
      {
        pergunta: "'A Coruja é sábia.' Quem é a personagem?",
        opcoes: ["Coruja", "Gato", "Menina"],
        correta: 0,
        explicacao: "Quem aparece na frase é a CORUJA.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🦉" },
      },
      {
        pergunta: "Complete: 'Está chovendo. Peguei o meu ___.'",
        opcoes: ["Guarda-chuva", "Sol", "Livro"],
        correta: 0,
        explicacao: "Se está chovendo, o certo é o GUARDA-CHUVA.",
        visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "🌧️" },
      },
      {
        pergunta: "Qual figura representa 'A lua apareceu'?",
        opcoes: ["🌙 Lua", "☀️ Sol", "🌧️ Chuva"],
        correta: 0,
        explicacao: "'A lua apareceu' → 🌙 LUA.",
        visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "🌙" },
      },
    ],
    dificil: [
      {
        pergunta:
          "'Lili tem um gato. Ele gosta de brincar.' Quem gosta de brincar?",
        opcoes: ["O gato", "Lili", "A bola"],
        correta: 0,
        explicacao: "A frase diz que ELE (o gato) gosta de brincar.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱" },
      },
      {
        pergunta: "Ler é...",
        opcoes: [
          "Entender o que está escrito",
          "Só olhar figuras",
          "Decorar letras",
        ],
        correta: 0,
        explicacao: "Ler = entender a mensagem escrita.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📖" },
      },
      {
        pergunta: "Uma história pequena tem:",
        opcoes: ["Começo, meio e fim", "Só o meio", "Nenhuma ordem"],
        correta: 0,
        explicacao: "Toda história tem COMEÇO, MEIO e FIM.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "1·2·3" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP11",
  },
};

export default aula;
