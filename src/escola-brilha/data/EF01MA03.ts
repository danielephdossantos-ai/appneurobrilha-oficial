import type { Aula } from "../types";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";
import ninhoImg from "@/assets/neuro-treino/objetos/ninho.png";
import coelhoImg from "@/assets/neuro-treino/objetos/coelho.png";
import cenouraImg from "@/assets/neuro-treino/vegetais/cenoura.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import joaninhaImg from "@/assets/neuro-treino/objetos/joaninha.png";
import minhocaImg from "@/assets/neuro-treino/objetos/minhoca.png";
import tartarugaImg from "@/assets/hiperfocos/animais/tartaruga.png";
import borboletaImg from "@/assets/neuro-treino/objetos/borboleta.png";
import morangoImg from "@/assets/neuro-treino/frutas/morango.png";
import cachorroImg from "@/assets/neuro-treino/objetos/cachorro.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";

/**
 * EF01MA03 — Aula 003 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Matemática
 * BNCC: Estimar e comparar quantidades de objetos de dois conjuntos
 * (em torno de 20 elementos), por estimativa e/ou por correspondência
 * (um a um), para indicar "tem mais", "tem menos" ou "tem a mesma quantidade".
 *
 * Missão do Dia: "O Piquenique dos Animais" (esquilo Brilha).
 * Segue o gabarito TRAVADO da EF01MA02.
 */
const aula: Aula = {
  codigo: "EF01MA03",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Piquenique dos Animais",

  narrativa: {
    titulo: "O Piquenique dos Animais",
    contexto:
      "Hoje o esquilo Brilha preparou um piquenique no bosque. Ele chega carregando uma cesta cheia de frutas para os amigos: maçãs, bananas, morangos e cenouras.",
    problema:
      "Mas surgiu um problema... Será que há frutas suficientes para todos os animais? Antes de contar tudo, precisamos observar.",
    convite: "Você será o ajudante oficial da floresta. Bora comparar as quantidades?",
  },

  conhecimentosPrevios: [
    "Contar oralmente até 10 sem se perder.",
    "Apontar cada objeto ao contar (um a um).",
    "Reconhecer 'tem mais' e 'tem menos' em grupos pequenos.",
  ],

  missao:
    "Aprender a comparar dois grupos e dizer se 'tem mais', 'tem menos' ou 'tem a mesma quantidade' — usando estimativa antes de contar.",

  objetivos: [
    "Perceber qual grupo possui MAIS objetos.",
    "Perceber qual grupo possui MENOS objetos.",
    "Identificar grupos com a MESMA QUANTIDADE (correspondência um a um).",
    "Usar estimativa (olhar antes) e depois confirmar contando.",
  ],

  motivacao:
    "Nem sempre a gente precisa contar tudo antes de responder. Nossos olhos já percebem quando um grupo é bem maior que o outro. Vamos treinar essa 'visão de matemático'!",

  explicacao:
    "Hoje você vai aprender a COMPARAR duas coleções:\n\n• TEM MAIS — quando um grupo tem uma quantidade maior.\n• TEM MENOS — quando um grupo tem uma quantidade menor.\n• MESMA QUANTIDADE — quando cada objeto de um grupo tem um par no outro (correspondência um a um).\n\nA gente pode primeiro OBSERVAR (estimativa) e depois CONTAR pra confirmar. Se sobrou objeto num lado, esse lado tem mais. Se ficou tudo pareadinho, é a mesma quantidade.",

  explicacoesNiveis: {
    nivel1: "Olhando dois grupos, dá pra ver qual é maior antes de contar.",
    nivel2:
      "Se cada coelho encontrar uma cenoura sem sobrar, os dois grupos têm a mesma quantidade.",
    nivel3:
      "Estimativa: olhe rápido e chute qual é maior. Depois conte pra conferir.",
    nivel4:
      "Comparar quantidades é a base pra somar, subtrair e resolver problemas de matemática.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha trouxe maçãs e bananas. Olhe e diga: qual grupo tem MAIS frutas?",
    passos: [
      "Olhe os dois grupos sem contar (estimativa).",
      "Depois conte cada grupo apontando com o dedo.",
      "Compare os dois números. O maior indica quem tem MAIS.",
    ],
    resposta:
      "6 maçãs e 3 bananas — as maçãs são MAIS. Antes de contar, os olhos já viam a diferença.",
    interativo: {
      tipo: "contagem",
      imagemUrl: macaImg,
      quantidade: 6,
      nomeItem: "maçã",
      nomeItemPlural: "maçãs",
      pergunta: "Quantas maçãs Brilha trouxe?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Existe um ninho para cada passarinho? Toque em cada grupo para contar.",
    resposta:
      "Sim! 4 passarinhos e 4 ninhos — MESMA QUANTIDADE. Ninguém ficou sem casa.",
    explicacao:
      "Quando cada objeto de um grupo forma um par com um do outro grupo e não sobra nenhum, os grupos têm a mesma quantidade.",
    visual: {
      tipo: "grupos",
      pergunta:
        "Toque em cada grupo para contar em voz alta. Existe um ninho para cada passarinho?",
      imagemUrl: passaroImg,
      itemSingular: "passarinho",
      itemPlural: "passarinhos",
      quantidadeGrupos: 2,
      itensPorGrupo: 4,
      opcoes: [4, 6, 8],
      correta: 2,
    },
  },

  exercicios: [
    {
      enunciado:
        "🍎 6 maçãs e 🍌 3 bananas. Qual grupo tem MAIS frutas?",
      resposta: "As maçãs — 6 é maior que 3.",
      dica: "Olhe o tamanho dos dois grupos antes de contar.",
    },
    {
      enunciado:
        "🐦 4 passarinhos e 🪺 4 ninhos. Cada passarinho encontra um ninho?",
      resposta: "Sim — os grupos têm a MESMA quantidade.",
      dica: "Se cada um forma um par sem sobrar, é mesma quantidade.",
    },
    {
      enunciado:
        "⭐ 8 estrelas e ⭐ 5 estrelas. Só olhando, qual grupo parece MAIOR?",
      resposta: "O grupo de 8 estrelas — usamos estimativa antes de contar.",
      dica: "Nossos olhos já percebem quando a diferença é grande.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: observe cada dupla de grupos e diga quem tem MAIS, MENOS ou se estão IGUAIS.",
    resposta:
      "Tartarugas: MESMA quantidade (4 e 4). Borboletas: primeiro grupo tem MAIS (7 contra 4).",
    visual: {
      cena: [
        { personagem: "Tartarugas A", itemImagemUrl: tartarugaImg, quantidade: 4, cor: "#34D399" },
        { personagem: "Tartarugas B", itemImagemUrl: tartarugaImg, quantidade: 4, cor: "#60A5FA" },
        { personagem: "Borboletas A", itemImagemUrl: borboletaImg, quantidade: 7, cor: "#F472B6" },
        { personagem: "Borboletas B", itemImagemUrl: borboletaImg, quantidade: 4, cor: "#FBBF24" },
      ],
      perguntas: [
        {
          pergunta: "Comparando os dois grupos de tartarugas — como estão?",
          opcoes: ["Grupo A tem mais", "Grupo B tem mais", "Mesma quantidade"],
          correta: 2,
          explicacao: "4 e 4 — mesma quantidade. Cada tartaruga do A tem um par no B.",
        },
        {
          pergunta: "E as borboletas? Quem tem MAIS?",
          opcoes: ["Grupo A (7)", "Grupo B (4)", "Iguais"],
          correta: 0,
          explicacao: "7 é maior que 4 — o grupo A tem mais borboletas.",
        },
        {
          pergunta: "E quem tem MENOS borboletas?",
          opcoes: ["Grupo A (7)", "Grupo B (4)", "Iguais"],
          correta: 1,
          explicacao: "4 é menor que 7 — o grupo B tem menos.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Antes de contar, OBSERVE — estimativa treina o olhar matemático.",
      "TEM MAIS: grupo com maior quantidade.",
      "TEM MENOS: grupo com menor quantidade.",
      "MESMA QUANTIDADE: cada objeto forma um par, sem sobrar nenhum.",
    ],
    dica: "Sempre confira contando depois de estimar — assim seu olho vai ficando cada vez mais afiado.",
  },

  quiz: [
    {
      pergunta: "🍓 5 morangos e 🍓 3 morangos. Quem possui MENOS?",
      opcoes: ["Primeiro grupo", "Segundo grupo", "Estão iguais"],
      correta: 1,
      explicacao: "3 é menor que 5 — o segundo grupo tem menos.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: morangoImg, quantidade: 5, rotulo: "Grupo 1", cor: "#EF4444" },
          { imagemUrl: morangoImg, quantidade: 3, rotulo: "Grupo 2", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "🐶 4 cachorros e 🏠 4 casinhas. Cada cachorro tem uma casinha?",
      opcoes: ["Sim, todos têm", "Não, sobra cachorro", "Não, sobra casinha"],
      correta: 0,
      explicacao: "4 e 4 — mesma quantidade. Cada cachorro forma um par com uma casinha.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: cachorroImg, quantidade: 4, rotulo: "Cachorros", cor: "#FB923C" },
          { imagemUrl: casaImg, quantidade: 4, rotulo: "Casinhas", cor: "#60A5FA" },
        ],
      },
    },
    {
      pergunta: "Qual palavra usamos quando dois grupos têm exatamente o mesmo número?",
      opcoes: ["Parecido", "Mesma quantidade", "Igualzinho mais ou menos"],
      correta: 1,
      explicacao: "Em matemática dizemos que os grupos têm a MESMA QUANTIDADE.",
    },
    {
      pergunta: "🐦 4 passarinhos e 🐛 6 minhocas. Vai sobrar comida?",
      opcoes: ["Sim, sobram 2 minhocas", "Não, vai faltar", "Não, fica exato"],
      correta: 0,
      explicacao: "Cada passarinho pega 1 minhoca; sobram 6 − 4 = 2 minhocas.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: passaroImg, quantidade: 4, rotulo: "Passarinhos", cor: "#60A5FA" },
          { imagemUrl: minhocaImg, quantidade: 6, rotulo: "Minhocas", cor: "#F472B6" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Observador da Floresta! Agora você compara grupos e sabe dizer quem tem MAIS, MENOS ou a MESMA QUANTIDADE. Missão em Casa: procure talheres, copos, sapatos e brinquedos. Compare os grupos — qual tem mais? Qual tem menos? Algum tem a mesma quantidade?",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os cientistas chamam essa habilidade de COMPARAÇÃO DE QUANTIDADES. Ela ajuda o nosso cérebro a desenvolver o raciocínio lógico bem antes de aprendermos contas de matemática!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Quem tem mais?",
      instrucao: "Brilha trouxe maçãs e bananas. Toque em cada grupo para contar.",
      grupos: [
        { imagemUrl: macaImg, quantidade: 6, rotulo: "Maçãs" },
        { imagemUrl: bananaImg, quantidade: 3, rotulo: "Bananas" },
      ],
      pergunta: "Quem tem MAIS frutas?",
      opcoes: ["Maçãs", "Bananas", "Iguais"],
      correta: 0,
      acerto:
        "Muito bem! Antes mesmo de contar, os olhos já percebiam que as maçãs eram mais.",
      erro: "Conte cada grupo e compare os números.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Tem a mesma quantidade?",
      instrucao: "Toque nos passarinhos e depois nos ninhos.",
      grupos: [
        { imagemUrl: passaroImg, quantidade: 4, rotulo: "Passarinhos" },
        { imagemUrl: ninhoImg, quantidade: 4, rotulo: "Ninhos" },
      ],
      pergunta: "Existe um ninho para cada passarinho?",
      opcoes: ["Sim", "Não, sobra passarinho", "Não, sobra ninho"],
      correta: 0,
      acerto:
        "Excelente! Cada passarinho encontrou um ninho — é MESMA QUANTIDADE.",
      erro: "Conte cada grupo. Se derem o mesmo número, é mesma quantidade.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Cada coelho, uma cenoura",
      instrucao: "Ligue cada grupo de coelhos ao grupo de cenouras com a MESMA quantidade.",
      pares: [
        { a: "2 coelhos", b: "2 cenouras", aImagem: coelhoImg, aQuantidade: 2, bImagem: cenouraImg, bQuantidade: 2 },
        { a: "3 coelhos", b: "3 cenouras", aImagem: coelhoImg, aQuantidade: 3, bImagem: cenouraImg, bQuantidade: 3 },
        { a: "5 coelhos", b: "5 cenouras", aImagem: coelhoImg, aQuantidade: 5, bImagem: cenouraImg, bQuantidade: 5 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Observe primeiro",
      instrucao: "Olhe rápido, sem contar. Qual grupo parece MAIOR? Depois confira contando.",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 8, rotulo: "Grupo A" },
        { imagemUrl: estrelaImg, quantidade: 5, rotulo: "Grupo B" },
      ],
      pergunta: "Sem contar, qual grupo parece maior?",
      opcoes: ["Grupo A", "Grupo B", "Iguais"],
      correta: 0,
      acerto: "Muito bem! Sua estimativa acertou — o Grupo A (8) é maior que o B (5).",
      erro: "Olhe o tamanho dos grupos antes de contar.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Complete a coleção",
      instrucao: "Você tinha 5 joaninhas. Chegaram mais 2. Quantas agora?",
      grupos: [
        { imagemUrl: joaninhaImg, quantidade: 5, rotulo: "Antes" },
        { imagemUrl: joaninhaImg, quantidade: 7, rotulo: "Depois" },
      ],
      pergunta: "Agora existem quantas joaninhas?",
      opcoes: ["6", "7", "8"],
      correta: 1,
      acerto: "Isso! 5 + 2 = 7 joaninhas.",
      erro: "Conte 5 e mais 2 dedos: 5, 6, 7.",
    },
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Alimentando os Passarinhos",
      instrucao:
        "Cada passarinho precisa de uma minhoca. Toque numa minhoca e depois no passarinho pra alimentar.",
      itemImagem: minhocaImg,
      alvosVisuais: [
        { nome: "Passarinho 1", cor: "#60A5FA", capacidade: 1, imagemUrl: passaroImg },
        { nome: "Passarinho 2", cor: "#F472B6", capacidade: 1, imagemUrl: passaroImg },
        { nome: "Passarinho 3", cor: "#FBBF24", capacidade: 1, imagemUrl: passaroImg },
        { nome: "Passarinho 4", cor: "#34D399", capacidade: 1, imagemUrl: passaroImg },
      ],
      pares: [
        { item: "Minhoca 1", alvo: "Passarinho 1" },
        { item: "Minhoca 2", alvo: "Passarinho 2" },
        { item: "Minhoca 3", alvo: "Passarinho 3" },
        { item: "Minhoca 4", alvo: "Passarinho 4" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Olhe os dois grupos. Quem tem MAIS frutas?",
        opcoes: ["Maçãs", "Bananas", "Iguais"],
        correta: 0,
        explicacao: "6 maçãs é mais que 3 bananas.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: macaImg, quantidade: 6, rotulo: "Maçãs", cor: "#EF4444" },
            { imagemUrl: bananaImg, quantidade: 3, rotulo: "Bananas", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta: "Cada passarinho encontra um ninho?",
        opcoes: ["Sim, mesma quantidade", "Não, sobra passarinho", "Não, sobra ninho"],
        correta: 0,
        explicacao: "4 passarinhos e 4 ninhos — mesma quantidade.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: passaroImg, quantidade: 4, rotulo: "Passarinhos", cor: "#60A5FA" },
            { imagemUrl: ninhoImg, quantidade: 4, rotulo: "Ninhos", cor: "#FB923C" },
          ],
        },
      },
      {
        pergunta: "Quem tem MENOS?",
        opcoes: ["Grupo A", "Grupo B", "Iguais"],
        correta: 1,
        explicacao: "3 morangos é menos que 5.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: morangoImg, quantidade: 5, rotulo: "Grupo A", cor: "#EF4444" },
            { imagemUrl: morangoImg, quantidade: 3, rotulo: "Grupo B", cor: "#F472B6" },
          ],
        },
      },
    ],

    medio: [
      {
        pergunta: "Sem contar, qual grupo parece MAIOR?",
        opcoes: ["Grupo A", "Grupo B", "Iguais"],
        correta: 0,
        explicacao: "8 estrelas é bem mais que 5 — dá pra ver de olhada.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: estrelaImg, quantidade: 8, rotulo: "Grupo A", cor: "#FBBF24" },
            { imagemUrl: estrelaImg, quantidade: 5, rotulo: "Grupo B", cor: "#A78BFA" },
          ],
        },
      },
      {
        pergunta: "Tinha 5 joaninhas. Chegaram mais 2. Quantas agora?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        explicacao: "5 + 2 = 7 joaninhas.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: joaninhaImg, quantidade: 5, rotulo: "Antes", cor: "#EF4444" },
            { imagemUrl: joaninhaImg, quantidade: 7, rotulo: "Depois", cor: "#22C55E" },
          ],
        },
      },
      {
        pergunta: "Cada cachorro tem uma casinha?",
        opcoes: ["Sim, todos têm", "Não, sobra cachorro", "Não, sobra casinha"],
        correta: 0,
        explicacao: "4 e 4 — mesma quantidade.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: cachorroImg, quantidade: 4, rotulo: "Cachorros", cor: "#FB923C" },
            { imagemUrl: casaImg, quantidade: 4, rotulo: "Casinhas", cor: "#60A5FA" },
          ],
        },
      },
    ],

    dificil: [
      {
        pergunta: "As tartarugas dos dois grupos — como estão?",
        opcoes: ["A tem mais", "B tem mais", "Mesma quantidade"],
        correta: 2,
        explicacao: "4 e 4 — mesma quantidade.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: tartarugaImg, quantidade: 4, rotulo: "Tartarugas A", cor: "#34D399" },
            { imagemUrl: tartarugaImg, quantidade: 4, rotulo: "Tartarugas B", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "Quem tem MAIS borboletas?",
        opcoes: ["Grupo A (7)", "Grupo B (4)", "Iguais"],
        correta: 0,
        explicacao: "7 é maior que 4.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: borboletaImg, quantidade: 7, rotulo: "Borboletas A", cor: "#F472B6" },
            { imagemUrl: borboletaImg, quantidade: 4, rotulo: "Borboletas B", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta:
          "4 passarinhos e 6 minhocas. Vai sobrar comida?",
        opcoes: ["Sim, sobram 2 minhocas", "Não, vai faltar", "Fica exato"],
        correta: 0,
        explicacao: "6 − 4 = 2 minhocas sobrando.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: passaroImg, quantidade: 4, rotulo: "Passarinhos", cor: "#60A5FA" },
            { imagemUrl: minhocaImg, quantidade: 6, rotulo: "Minhocas", cor: "#F472B6" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA04",
    titulo: "Contar quantidade de objetos e registrar com números",
  },
};

export default aula;
