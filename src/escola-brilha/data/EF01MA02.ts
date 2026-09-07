import type { Aula } from "../types";
import { url as cenouraImg } from "@/assets/neuro-treino/vegetais/cenoura.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as joaninhaImg } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as coelhoImg } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as macacoImg } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as tartarugaImg } from "@/assets/hiperfocos/animais/tartaruga.png.asset.json";
import { url as bananaImg } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as sementeImg } from "@/assets/neuro-treino/objetos/semente.png.asset.json";
import { url as castanhaImg } from "@/assets/neuro-treino/objetos/castanha.png.asset.json";
import { url as passaroImg } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as ninhoImg } from "@/assets/neuro-treino/objetos/ninho.png.asset.json";
import { url as doceImg } from "@/assets/neuro-treino/objetos/doce.png.asset.json";

/**
 * EF01MA02 — Aula 002 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Matemática
 * BNCC: Contar, de maneira exata ou aproximada, utilizando diferentes
 * estratégias, como o pareamento e outros agrupamentos.
 *
 * Missão do Dia: "A Floresta das Contagens" (esquilo Brilha).
 * Padrão: usa banco de mídias real — sem emojis nas atividades interativas.
 */
const aula: Aula = {
  codigo: "EF01MA02",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "A Floresta das Contagens",

  narrativa: {
    titulo: "A Floresta das Contagens",
    contexto:
      "O esquilo Brilha recebeu uma missão importante. Os animais da floresta estão organizando uma grande festa, mas ninguém sabe se há frutas suficientes para todos. A Dona Coelha colheu cenouras, o Macaco separou bananas e a Tartaruga juntou folhas — ninguém contou nada ainda!",
    problema:
      "Se contarem errado, pode faltar comida na festa. Como organizar a contagem para não pular nem repetir objetos?",
    convite: "Vamos ajudar os animais a contar de vários jeitos?",
  },

  conhecimentosPrevios: [
    "Contar oralmente até 10 sem se perder.",
    "Apontar cada objeto ao contar (um a um).",
    "Comparar dois grupos e dizer qual tem mais.",
  ],

  missao:
    "Descobrir maneiras de contar com precisão e também fazer uma estimativa antes de conferir.",

  objetivos: [
    "Contar objetos um a um sem pular nenhum.",
    "Formar grupos iguais para organizar e conferir a contagem.",
    "Parear objetos (um pra um) para descobrir a quantidade.",
    "Comparar duas coleções e dizer qual tem mais ou menos.",
    "Estimar uma quantidade e depois contar para verificar se a estimativa ficou próxima.",
  ],

  motivacao:
    "Nem sempre a gente precisa contar de um em um. Quando há muitos objetos, podemos organizar em grupos. Também podemos olhar, fazer uma estimativa e depois contar para conferir. Vamos praticar com os animais da floresta?",

  explicacao:
    "Hoje você vai aprender maneiras diferentes de contar:\n\n• UM A UM — aponte cada objeto uma única vez e diga a sequência: 1, 2, 3, 4, 5. O último número dito informa o total.\n• EM PARES OU GRUPOS — organize quantidades iguais e conte sem pular nem repetir objetos.\n• ESTIMANDO — antes de contar, diga aproximadamente quantos objetos você acha que há. Depois conte e confira se a estimativa ficou próxima.\n• COMPARANDO — faça pares, colocando um objeto de uma coleção para cada objeto da outra. A coleção em que sobram objetos tem mais.\n\nCom poucos objetos, contar um a um costuma ser simples. Com muitos, organizar em grupos ajuda a manter a precisão.",

  explicacaoAtiva: [
    {
      texto: "Para contar exatamente, toque ou aponte cada objeto uma única vez. O último número dito é o total.",
      exemplo: "Ao apontar cinco cenouras: 1, 2, 3, 4, 5. Há 5 cenouras.",
      imagem: cenouraImg,
      imagemAlt: "Uma cenoura usada no treino de contagem",
      checagem: {
        pergunta: "O que informa o total na contagem um a um?",
        opcoes: ["O último número dito", "O primeiro número dito", "A cor dos objetos"],
        correta: 0,
        explicacao: "Depois de apontar todos uma vez, o último número dito informa quantos há.",
      },
    },
    {
      texto: "Agrupar ajuda a enxergar a organização. Três grupos com três maçãs podem ser contados assim: 3, 6, 9.",
      exemplo: "3 + 3 + 3 = 9.",
      imagem: macaImg,
      imagemAlt: "Maçã usada para formar grupos iguais",
      checagem: {
        pergunta: "Três grupos de três objetos têm quantos objetos ao todo?",
        opcoes: ["6", "8", "9"],
        correta: 2,
        explicacao: "Conte os grupos: 3, 6, 9.",
      },
    },
    {
      texto: "Estimar é dizer uma quantidade aproximada antes de contar. Não precisa acertar exatamente: depois contamos para verificar.",
      exemplo: "Acho que há perto de 10 sementes. Agora vou contar uma a uma para conferir.",
      imagem: sementeImg,
      imagemAlt: "Semente usada para fazer uma estimativa",
      checagem: {
        pergunta: "Depois de fazer uma estimativa, o que devemos fazer?",
        opcoes: ["Contar para conferir", "Apagar os objetos", "Escolher outro desenho"],
        correta: 0,
        explicacao: "A contagem exata permite comparar o total com a estimativa.",
      },
    },
    {
      texto: "Para comparar sem depender do espaço ocupado, forme pares: um objeto de um grupo com um objeto do outro. Se sobrar em um grupo, ele tem mais.",
      exemplo: "Se todas as seis joaninhas de um grupo formam pares e ainda sobram duas, esse grupo tem mais.",
      imagem: joaninhaImg,
      imagemAlt: "Joaninha usada na comparação por pares",
      checagem: {
        pergunta: "Na comparação por pares, qual grupo tem mais?",
        opcoes: ["O grupo em que sobram objetos", "O grupo mais espalhado", "O grupo mais colorido"],
        correta: 0,
        explicacao: "Objetos espalhados podem ocupar mais espaço; os pares mostram a diferença real.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Podemos contar exatamente ou estimar e depois conferir.",
    nivel2:
      "3 grupos de 3 maçãs = 9 maçãs. Os grupos ajudam a não pular nem repetir.",
    nivel3:
      "Se cada passarinho encontra um ninho, dá pra saber a quantidade sem errar.",
    nivel4:
      "Em casa você conta sapatos em pares, ovos em dúzia (grupos de 12) e figurinhas em grupos de 10.",
  },

  exemploResolvido: {
    enunciado: "A Dona Coelha colheu cenouras. Quantas ela colheu?",
    passos: [
      "Toque em cada cenoura da tela — uma por vez.",
      "Para cada toque, diga em voz alta: 1, 2, 3, 4, 5.",
      "Quando não sobrar nenhuma cenoura sem tocar, o último número é a resposta.",
    ],
    resposta: "5 cenouras — contar um a um funciona bem com poucas coisas.",
    interativo: {
      tipo: "contagem",
      imagemUrl: cenouraImg,
      quantidade: 5,
      nomeItem: "cenoura",
      nomeItemPlural: "cenouras",
      pergunta: "Quantas cenouras a Dona Coelha colheu?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "O Macaco separou as bananas em 3 grupos iguais, com 3 bananas em cada grupo. Quantas bananas ele tem ao todo?",
    resposta: "9 bananas — 3 grupos de 3 dão 9.",
    explicacao:
      "Cada grupo tem 3 bananas. Conte acumulando: o primeiro termina em 3, o segundo em 6 e o terceiro em 9. Assim, 3 + 3 + 3 = 9.",
    visual: {
      tipo: "grupos",
      pergunta:
        "O Macaco separou as bananas em 3 grupos iguais. Toque em cada grupo para contar — quantas bananas ao todo?",
      imagemUrl: bananaImg,
      itemSingular: "banana",
      itemPlural: "bananas",
      quantidadeGrupos: 3,
      itensPorGrupo: 3,
      opcoes: [6, 9, 12],
      correta: 1,
    },
  },


  exercicios: [
    {
      enunciado:
        "🥕 A Dona Coelha tem 5 cenouras. Qual é o melhor jeito de contar?",
      resposta: "Um a um — porque tem poucas cenouras.",
      dica: "Quando tem pouca coisa, apontar uma por vez é rápido.",
    },
    {
      enunciado:
        "🍎 O Macaco tem 9 maçãs organizadas em 3 grupos de 3. Como contar sem perder a organização?",
      resposta: "Contar em grupos: 3, 6, 9.",
      dica: "Cada grupo tem 3. Pule de 3 em 3.",
    },
    {
      enunciado:
        "🐦 O passarinho quer saber se cada filhote tem seu ninho. Como descobrir sem errar?",
      resposta:
        "Fazendo o PAREAMENTO — cada passarinho para cada ninho. Se sobrar ou faltar, a gente vê na hora.",
      dica: "Um passarinho pra cada ninho. Sobrou algum? Faltou algum?",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: o Papagaio tem 8 sementes, o Esquilo tem 5 castanhas e o Coelho tem 10 cenouras. Conte cada grupo e responda!",
    resposta:
      "MAIS: Coelho (10). MENOS: Esquilo (5). Exatamente 8: Papagaio.",
    visual: {
      cena: [
        { personagem: "Papagaio", itemImagemUrl: sementeImg, quantidade: 8, cor: "#34D399" },
        { personagem: "Esquilo",  itemImagemUrl: castanhaImg, quantidade: 5, cor: "#FB923C" },
        { personagem: "Coelho",   personagemImagemUrl: coelhoImg, itemImagemUrl: cenouraImg, quantidade: 10, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "Quem tem MAIS alimentos?",
          opcoes: ["Papagaio (8)", "Esquilo (5)", "Coelho (10)"],
          correta: 2,
          explicacao: "10 é a maior quantidade — o Coelho tem mais.",
        },
        {
          pergunta: "Quem tem MENOS alimentos?",
          opcoes: ["Papagaio (8)", "Esquilo (5)", "Coelho (10)"],
          correta: 1,
          explicacao: "5 é a menor quantidade — o Esquilo tem menos.",
        },
        {
          pergunta: "Quem tem EXATAMENTE 8 alimentos?",
          opcoes: ["Papagaio", "Esquilo", "Coelho"],
          correta: 0,
          explicacao: "O Papagaio tem 8 sementes.",
        },
      ],
    },
  },


  revisao: {
    pontos: [
      "Contar um a um funciona bem quando tem poucas coisas.",
      "Formar pares (um pra um) mostra se falta ou sobra.",
      "Agrupar em quantidades iguais ajuda a contar sem pular nem repetir.",
      "Estimar é dizer aproximadamente quantos há e depois contar para conferir.",
      "Comparar coleções mostra qual tem mais e qual tem menos.",
    ],
    dica: "Antes de contar, olha o tamanho do monte e escolhe a estratégia certa.",
  },

  quiz: [
    {
      pergunta: "Qual estratégia ajuda a organizar a contagem de muitos objetos iguais?",
      opcoes: ["Contar em grupos", "Fechar os olhos", "Escolher qualquer número"],
      correta: 0,
      explicacao: "Grupos iguais ajudam a acompanhar o que já foi contado.",
    },
    {
      pergunta:
        "Se existem 7 gatos e 7 potinhos de comida, todos conseguem comer?",
      opcoes: ["Sim, cada gato recebe um potinho", "Não, vai faltar", "Não, vai sobrar"],
      correta: 0,
      explicacao:
        "Como as duas quantidades são iguais, o pareamento é perfeito.",
    },
    {
      pergunta:
        "Grupo A tem 5 bananas. Grupo B tem 3 bananas. Quem tem MAIS?",
      opcoes: ["Grupo A", "Grupo B", "Estão iguais"],
      correta: 0,
      explicacao: "5 é maior que 3 — o Grupo A tem mais.",
    },
    {
      pergunta:
        "Você olha um grupo e diz: 'acho que há perto de 10 sementes'. O que deve fazer depois?",
      opcoes: ["Contar para conferir", "Dizer que a estimativa é sempre exata", "Escolher pela cor"],
      correta: 0,
      explicacao: "Estimativa é uma aproximação. Depois contamos para descobrir o total exato.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Contador da Floresta! Agora você conhece vários jeitos de contar — um a um, em pares, em grupos ou comparando. Missão em Casa: conte cadeiras, copos, brinquedos, sapatos e almofadas. Depois diga qual grupo tem MAIS e qual tem MENOS.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os cientistas acreditam que, muito antes de existir a escrita, as pessoas já contavam usando pedras, gravetos e até os próprios dedos. Até hoje usamos os dedos quando estamos aprendendo a contar!",
  },

  // Sem `midias` estáticas — todas as cenas da Explicação são interativas.

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Contando um a um",
      instrucao:
        "A Dona Coelha colheu cenouras. Toque em cada cenoura e conte em voz alta.",
      grupos: [{ imagemUrl: cenouraImg, quantidade: 5 }],
      pergunta: "Quantas cenouras existem?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto:
        "Excelente! Contar um a um funciona bem quando temos poucos objetos.",
      erro: "Conte de novo apontando uma cenoura por vez.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Contando em grupos",
      instrucao:
        "O Macaco organizou as maçãs em 3 grupos iguais. Cada grupo tem 3 maçãs.",
      grupos: [
        { imagemUrl: macaImg, quantidade: 3, rotulo: "Grupo 1" },
        { imagemUrl: macaImg, quantidade: 3, rotulo: "Grupo 2" },
        { imagemUrl: macaImg, quantidade: 3, rotulo: "Grupo 3" },
      ],
      pergunta: "Quantas maçãs existem ao todo?",
      opcoes: ["6", "8", "9"],
      correta: 2,
      acerto:
        "Isso! Quando fazemos grupos iguais, contar fica muito mais fácil: 3, 6, 9.",
      erro: "Some os grupos: 3 + 3 + 3.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Cada passarinho no seu ninho",
      instrucao:
        "Conte os passarinhos de cada grupo e ligue no ninho com a MESMA quantidade de ovinhos.",
      pares: [
        { a: "Grupo 2", b: "Ninho com 2", aImagem: passaroImg, aQuantidade: 2, bImagem: ninhoImg, bQuantidade: 2 },
        { a: "Grupo 3", b: "Ninho com 3", aImagem: passaroImg, aQuantidade: 3, bImagem: ninhoImg, bQuantidade: 3 },
        { a: "Grupo 5", b: "Ninho com 5", aImagem: passaroImg, aQuantidade: 5, bImagem: ninhoImg, bQuantidade: 5 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Quem tem mais?",
      instrucao: "Compare os dois grupos de joaninhas.",
      grupos: [
        { imagemUrl: joaninhaImg, quantidade: 4, rotulo: "Grupo da Esquerda" },
        { imagemUrl: joaninhaImg, quantidade: 6, rotulo: "Grupo da Direita" },
      ],
      pergunta: "Qual grupo tem MAIS joaninhas?",
      opcoes: ["Esquerda", "Direita", "Iguais"],
      correta: 1,
      acerto: "Muito bem! O grupo da direita tem 6 — mais que 4.",
      erro: "Conte cada grupo e compare os números.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Complete a coleção",
      instrucao: "Antes você tinha 3 estrelas. Agora você tem 5.",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 3, rotulo: "Antes" },
        { imagemUrl: estrelaImg, quantidade: 5, rotulo: "Depois" },
      ],
      pergunta: "Quantas estrelas foram acrescentadas?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      acerto: "Isso! 3 + 2 = 5. Foram acrescentadas 2 estrelas.",
      erro: "Conte quantas estrelas apareceram a mais do 'Antes' pro 'Depois'.",
    },
    {
      tipo: "ligar",
      titulo: "Conte e ligue: quantos alimentos cada animal tem?",
      instrucao:
        "Conte os alimentos de cada animal e ligue no número certo à direita.",
      pares: [
        { a: "Papagaio · sementes", b: "8", aImagem: sementeImg, aQuantidade: 8 },
        { a: "Esquilo · castanhas", b: "5", aImagem: castanhaImg, aQuantidade: 5 },
        { a: "Coelho · cenouras", b: "10", aImagem: cenouraImg, aQuantidade: 10 },
      ],
    },
    {
      tipo: "ordenar",
      titulo: "Do menor para o maior",
      instrucao: "Arraste os grupos em ordem crescente (menor em cima, maior embaixo).",
      itens: ["3 estrelas", "5 cenouras", "9 maçãs"],
      imagens: [
        { imagemUrl: estrelaImg, quantidade: 3, rotulo: "3 estrelas" },
        { imagemUrl: cenouraImg, quantidade: 5, rotulo: "5 cenouras" },
        { imagemUrl: macaImg, quantidade: 9, rotulo: "9 maçãs" },
      ],
    },
    {
      tipo: "arrastar",
      titulo: "Organizando a festa: 4 doces em cada prato",
      instrucao:
        "Cada prato deve receber exatamente a quantidade de doces do número. Toque em um doce e depois no prato certo.",
      itemImagem: doceImg,
      alvosVisuais: [
        { nome: "Prato Azul", cor: "#3B82F6", capacidade: 4 },
        { nome: "Prato Vermelho", cor: "#EF4444", capacidade: 4 },
      ],
      pares: [
        { item: "Doce 1", alvo: "Prato Azul" },
        { item: "Doce 2", alvo: "Prato Azul" },
        { item: "Doce 3", alvo: "Prato Azul" },
        { item: "Doce 4", alvo: "Prato Azul" },
        { item: "Doce 5", alvo: "Prato Vermelho" },
        { item: "Doce 6", alvo: "Prato Vermelho" },
        { item: "Doce 7", alvo: "Prato Vermelho" },
        { item: "Doce 8", alvo: "Prato Vermelho" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta:
          "A Dona Coelha colheu estas cenouras. Contando uma a uma, quantas são?",
        opcoes: ["3", "4", "5"],
        correta: 2,
        explicacao: "Apontando uma a uma: 1, 2, 3, 4, 5 cenouras.",
        visual: {
          tipo: "itens",
          imagemUrl: cenouraImg,
          quantidade: 5,
          rotulo: "As cenouras da Dona Coelha",
        },
      },
      {
        pergunta:
          "O Macaco tem 3 grupos com 3 maçãs cada. Contando em grupos (3, 6, 9), quantas maçãs ao todo?",
        opcoes: ["6", "8", "9"],
        correta: 2,
        explicacao: "3 + 3 + 3 = 9 maçãs.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: macaImg, quantidade: 3, rotulo: "Grupo 1" },
            { imagemUrl: macaImg, quantidade: 3, rotulo: "Grupo 2" },
            { imagemUrl: macaImg, quantidade: 3, rotulo: "Grupo 3" },
          ],
        },
      },
      {
        pergunta:
          "Grupo A tem 4 joaninhas. Grupo B tem 6 joaninhas. Quem tem MAIS?",
        opcoes: ["Grupo A", "Grupo B", "Iguais"],
        correta: 1,
        explicacao: "6 é maior que 4 — o Grupo B tem mais joaninhas.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: joaninhaImg, quantidade: 4, rotulo: "Grupo A", cor: "#F472B6" },
            { imagemUrl: joaninhaImg, quantidade: 6, rotulo: "Grupo B", cor: "#60A5FA" },
          ],
        },
      },
    ],

    medio: [
      {
        pergunta:
          "Tinha 3 estrelas. Agora tem 5. Quantas estrelas foram acrescentadas?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        explicacao: "3 + 2 = 5. Foram acrescentadas 2 estrelas.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: estrelaImg, quantidade: 3, rotulo: "Antes", cor: "#A78BFA" },
            { imagemUrl: estrelaImg, quantidade: 5, rotulo: "Agora", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta:
          "6 passarinhos e 6 ninhos. Cada passarinho encontra um ninho?",
        opcoes: ["Sim, todos", "Não, sobra passarinho", "Não, sobra ninho"],
        correta: 0,
        explicacao: "Como as quantidades são iguais, o pareamento é perfeito.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: passaroImg, quantidade: 6, rotulo: "Passarinhos", cor: "#60A5FA" },
            { imagemUrl: ninhoImg, quantidade: 6, rotulo: "Ninhos", cor: "#FB923C" },
          ],
        },
      },
      {
        pergunta:
          "Você quer contar 20 tampinhas sem pular nem repetir. Qual estratégia ajuda?",
        opcoes: [
          "Uma por uma",
          "Formando grupos iguais",
          "Fechar os olhos e chutar",
        ],
        correta: 1,
        explicacao:
          "Formando grupos, por exemplo 4 grupos de 5, fica mais fácil acompanhar o que já foi contado.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: macaImg, quantidade: 5, rotulo: "Grupo 1" },
            { imagemUrl: macaImg, quantidade: 5, rotulo: "Grupo 2" },
            { imagemUrl: macaImg, quantidade: 5, rotulo: "Grupo 3" },
            { imagemUrl: macaImg, quantidade: 5, rotulo: "Grupo 4" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta:
          "Papagaio tem 8 sementes, Esquilo tem 5 castanhas, Coelho tem 10 cenouras. Quem tem MAIS?",
        opcoes: ["Papagaio", "Esquilo", "Coelho"],
        correta: 2,
        explicacao: "10 é a maior quantidade — o Coelho tem mais.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: sementeImg, quantidade: 8, rotulo: "Papagaio", cor: "#34D399" },
            { imagemUrl: castanhaImg, quantidade: 5, rotulo: "Esquilo", cor: "#FB923C" },
            { imagemUrl: cenouraImg, quantidade: 10, rotulo: "Coelho", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "E quem tem MENOS?",
        opcoes: ["Papagaio", "Esquilo", "Coelho"],
        correta: 1,
        explicacao: "5 é a menor quantidade — o Esquilo tem menos.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: sementeImg, quantidade: 8, rotulo: "Papagaio", cor: "#34D399" },
            { imagemUrl: castanhaImg, quantidade: 5, rotulo: "Esquilo", cor: "#FB923C" },
            { imagemUrl: cenouraImg, quantidade: 10, rotulo: "Coelho", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Quem tem EXATAMENTE 8?",
        opcoes: ["Papagaio", "Esquilo", "Coelho"],
        correta: 0,
        explicacao: "O Papagaio tem 8 sementes.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: sementeImg, quantidade: 8, rotulo: "Papagaio", cor: "#34D399" },
            { imagemUrl: castanhaImg, quantidade: 5, rotulo: "Esquilo", cor: "#FB923C" },
            { imagemUrl: cenouraImg, quantidade: 10, rotulo: "Coelho", cor: "#F472B6" },
          ],
        },
      },

    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA03",
    titulo: "Comparar quantidades e descobrir qual é maior",
  },
};

// Imports mantidos para futura expansão de mídia visual (Coelha, Macaco,
// Tartaruga, Banana) sem quebrar o padrão do banco de mídias.
void coelhoImg;
void macacoImg;
void tartarugaImg;
void bananaImg;

export default aula;
