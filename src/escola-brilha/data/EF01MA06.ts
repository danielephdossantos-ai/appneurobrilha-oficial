import type { Aula } from "../types";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as cenouraImg } from "@/assets/neuro-treino/vegetais/cenoura.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as pintinhoImg } from "@/assets/neuro-treino/objetos/pintinho.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as balaoImg } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";

/**
 * EF01MA06 — Aula 006 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Matemática
 * BNCC: Construir fatos básicos da adição e utilizá-los em procedimentos
 * de cálculo para resolver problemas do cotidiano.
 *
 * Missão do Dia: "O Bosque das Maçãs" (esquilo Brilha).
 * Segue o gabarito TRAVADO da EF01MA02.
 */
const aula: Aula = {
  codigo: "EF01MA06",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Bosque das Maçãs",

  narrativa: {
    titulo: "O Bosque das Maçãs",
    contexto:
      "Hoje o esquilo Brilha precisa ajudar os animais da floresta a juntar frutas para um grande piquenique.",
    problema:
      "Cada amigo trouxe algumas maçãs em sua cesta. Ninguém sabe quantas há ao todo depois de misturar tudo.",
    convite:
      "Vem descobrir com a gente! Bora juntar as quantidades — isso se chama SOMAR.",
  },

  conhecimentosPrevios: [
    "Contar até 10 sem pular números.",
    "Reconhecer 'juntar' como misturar dois grupos.",
    "Apontar cada objeto ao contar.",
  ],

  missao:
    "Aprender que SOMAR é juntar duas quantidades — e treinar somas até 10 usando imagens que aparecem, juntam e viram o total.",

  objetivos: [
    "Compreender a ideia de juntar quantidades.",
    "Resolver adições simples até 10.",
    "Representar somas com imagens e objetos.",
    "Relacionar a adição com situações do dia a dia.",
  ],

  motivacao:
    "Somar é como juntar amigos: quanto mais entra na roda, maior fica o grupo!",

  explicacao:
    "SOMAR significa JUNTAR duas quantidades pra descobrir o TOTAL.\n\nO sinal da soma é o + (mais).\n\nExemplos:\n• 3 🍎 + 2 🍎 = 5 🍎\n• 2 🥕 + 3 🥕 = 5 🥕\n\nPra somar, a gente conta o primeiro grupo, depois o segundo, e junta tudo. Também podemos usar os dedos, desenhos ou apontar as imagens.",

  explicacoesNiveis: {
    nivel1: "Somar é juntar. Junta dois grupos e conta o total.",
    nivel2:
      "Ex.: 3 maçãs numa cesta e 2 em outra. Junte as duas cestas e conte tudo: 5 maçãs.",
    nivel3:
      "Use os dedos: mostre 3 dedos numa mão e 2 na outra. Depois conte todos os dedos abertos.",
    nivel4:
      "Na vida: 3 amigos na sala + 2 que chegam = 5 amigos. Somar aparece o tempo todo.",
  },

  exemploResolvido: {
    enunciado:
      "Cesta A tem 3 maçãs. Cesta B tem 2 maçãs. Quantas maçãs ao todo?",
    passos: [
      "Conte a Cesta A: 1, 2, 3.",
      "Conte a Cesta B: 1, 2.",
      "Junte tudo e conte de novo: 1, 2, 3, 4, 5.",
    ],
    resposta: "5 maçãs — 3 + 2 = 5.",
    interativo: {
      tipo: "contagem",
      imagemUrl: macaImg,
      quantidade: 5,
      nomeItem: "maçã",
      nomeItemPlural: "maçãs",
      pergunta: "Quantas maçãs existem juntando as duas cestas?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "Toque nas cenouras dos dois grupos e junte pra descobrir o total.",
    resposta: "5 cenouras — 3 + 2 = 5.",
    explicacao:
      "Quando dois grupos se juntam, a gente faz uma soma. Conte um grupo, depois o outro, e diga o total.",
    visual: {
      tipo: "grupos",
      pergunta: "Quantas cenouras existem agora, juntando os dois grupos?",
      imagemUrl: cenouraImg,
      itemSingular: "cenoura",
      itemPlural: "cenouras",
      quantidadeGrupos: 2,
      itensPorGrupo: 3, // fallback — as fases visuais mostram 3 e 2
      opcoes: [4, 5, 6],
      correta: 1,
    },
  },

  exercicios: [
    { enunciado: "2 + 3 = ?", resposta: "5", dica: "Junte 2 dedos com mais 3." },
    { enunciado: "4 + 1 = ?", resposta: "5", dica: "Depois do 4 vem o 5." },
    { enunciado: "5 + 2 = ?", resposta: "7", dica: "Conte 5 e siga: 6, 7." },
    { enunciado: "6 + 3 = ?", resposta: "9", dica: "Conte 6 e siga: 7, 8, 9." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: os amigos da floresta trouxeram coleções diferentes. Some cada dupla e diga o total.",
    resposta:
      "Maçãs: 3 + 2 = 5. Flores: 4 + 3 = 7. Pintinhos: 2 + 4 = 6.",
    visual: {
      cena: [
        { personagem: "Maçãs (cesta A)", itemImagemUrl: macaImg, quantidade: 3, cor: "#EF4444" },
        { personagem: "Maçãs (cesta B)", itemImagemUrl: macaImg, quantidade: 2, cor: "#F472B6" },
        { personagem: "Flores da Coruja", itemImagemUrl: florImg, quantidade: 4, cor: "#FBBF24" },
        { personagem: "Mais flores", itemImagemUrl: florImg, quantidade: 3, cor: "#A78BFA" },
      ],
      perguntas: [
        {
          pergunta: "3 maçãs + 2 maçãs = ?",
          opcoes: ["4", "5", "6"],
          correta: 1,
          explicacao: "3 + 2 = 5 maçãs.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: macaImg, quantidade: 3, rotulo: "Cesta A", cor: "#EF4444" },
              { imagemUrl: macaImg, quantidade: 2, rotulo: "Cesta B", cor: "#F472B6" },
            ],
          },
        },
        {
          pergunta: "A Coruja tinha 4 flores e achou mais 3. Quantas agora?",
          opcoes: ["6", "7", "8"],
          correta: 1,
          explicacao: "4 + 3 = 7 flores.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: florImg, quantidade: 4, rotulo: "Antes", cor: "#FBBF24" },
              { imagemUrl: florImg, quantidade: 3, rotulo: "Mais", cor: "#A78BFA" },
            ],
          },
        },
        {
          pergunta: "2 pintinhos + 4 pintinhos = ?",
          opcoes: ["5", "6", "7"],
          correta: 1,
          explicacao: "2 + 4 = 6 pintinhos.",
          visual: {
            tipo: "comparar",
            lados: [
              { imagemUrl: pintinhoImg, quantidade: 2, rotulo: "Chegaram", cor: "#FBBF24" },
              { imagemUrl: pintinhoImg, quantidade: 4, rotulo: "Já tinha", cor: "#F472B6" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "SOMAR = juntar duas quantidades.",
      "O sinal é o + (mais).",
      "Sempre conte um grupo, depois o outro, depois o total.",
      "Dedos, desenhos e imagens ajudam a somar.",
    ],
    dica: "Comece pelo número maior e conte pra frente: pra 3 + 5, comece em 5 e conte 6, 7, 8.",
  },

  quiz: [
    {
      pergunta: "2 + 2 = ?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      explicacao: "2 + 2 = 4.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: macaImg, quantidade: 2, rotulo: "2 maçãs", cor: "#EF4444" },
          { imagemUrl: macaImg, quantidade: 2, rotulo: "2 maçãs", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "5 + 1 = ?",
      opcoes: ["5", "6", "7"],
      correta: 1,
      explicacao: "Depois do 5 vem o 6.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: estrelaImg, quantidade: 5, rotulo: "5 estrelas", cor: "#FBBF24" },
          { imagemUrl: estrelaImg, quantidade: 1, rotulo: "+ 1", cor: "#60A5FA" },
        ],
      },
    },
    {
      pergunta: "3 + 4 = ?",
      opcoes: ["6", "7", "8"],
      correta: 1,
      explicacao: "3 + 4 = 7.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: florImg, quantidade: 3, rotulo: "3 flores", cor: "#FBBF24" },
          { imagemUrl: florImg, quantidade: 4, rotulo: "4 flores", cor: "#A78BFA" },
        ],
      },
    },
    {
      pergunta: "Qual operação usamos quando queremos JUNTAR?",
      opcoes: ["Subtração", "Adição", "Comparação"],
      correta: 1,
      explicacao: "Adição = juntar. Usamos o sinal +.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Pequeno Somador! Agora você sabe que SOMAR é juntar — e faz contas até 10 com apoio visual. Missão em Família: junte 3 copos e mais 2 copos, e pergunte quantos ficaram no total. Repita com brinquedos, lápis ou frutas.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O sinal + foi criado por um matemático alemão há mais de 500 anos e é usado no mundo inteiro pra mostrar que vamos JUNTAR quantidades. Antes disso, cada país escrevia soma de um jeito diferente!",
  },

  interativas: [
    {
      tipo: "operacao",
      titulo: "Fase 1 · Juntando as maçãs",
      instrucao: "Aperte MOSTRAR e veja 3 maçãs juntarem com mais 2.",
      operacao: "soma",
      imagemUrl: macaImg,
      itemPlural: "maçãs",
      a: 3,
      b: 2,
      cor: "#EF4444",
      legenda: "3 + 2 = 5",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Confirmação",
      instrucao: "Cesta A com 3 maçãs, Cesta B com 2. Toque em cada grupo e some.",
      grupos: [
        { imagemUrl: macaImg, quantidade: 3, rotulo: "Cesta A" },
        { imagemUrl: macaImg, quantidade: 2, rotulo: "Cesta B" },
      ],
      pergunta: "Quantas maçãs ao todo?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "🎉 Muito bem! 3 + 2 = 5.",
      erro: "Conte a Cesta A e continue contando pela Cesta B.",
    },
    {
      tipo: "operacao",
      titulo: "Fase 2 · Alimentando os coelhos",
      instrucao: "3 cenouras, depois chegam mais 2.",
      operacao: "soma",
      imagemUrl: cenouraImg,
      itemPlural: "cenouras",
      a: 3,
      b: 2,
      cor: "#FB923C",
      legenda: "3 + 2 = 5",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Complete a soma",
      instrucao: "2 estrelas + 3 estrelas.",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 2, rotulo: "2 ⭐" },
        { imagemUrl: estrelaImg, quantidade: 3, rotulo: "3 ⭐" },
      ],
      pergunta: "2 + 3 = ?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "Isso! 2 + 3 = 5.",
      erro: "Junte os dois grupos e conte tudo.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Arraste e descubra",
      instrucao:
        "Arraste os 2 pintinhos que estão sozinhos pra dentro do ninho pra juntar com os que já estão lá.",
      itemImagem: pintinhoImg,
      alvosVisuais: [
        { nome: "Ninho", cor: "#FBBF24", capacidade: 6, imagemUrl: pintinhoImg },
      ],
      pares: [
        { item: "Pintinho 1", alvo: "Ninho" },
        { item: "Pintinho 2", alvo: "Ninho" },
      ],
    },
    {
      tipo: "operacao",
      titulo: "Fase 5 · Problema da floresta",
      instrucao: "A Coruja tinha 4 flores e achou mais 3.",
      operacao: "soma",
      imagemUrl: florImg,
      itemPlural: "flores",
      a: 4,
      b: 3,
      cor: "#A78BFA",
      legenda: "4 + 3 = 7",
    },
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Festa dos Balões",
      instrucao:
        "Arraste todos os balões pra dentro do cesto. No fim conte quantos ficaram.",
      itemImagem: balaoImg,
      alvosVisuais: [
        { nome: "Cesto da Festa", cor: "#EF4444", capacidade: 8, imagemUrl: balaoImg },
      ],
      pares: [
        { item: "Balão 1", alvo: "Cesto da Festa" },
        { item: "Balão 2", alvo: "Cesto da Festa" },
        { item: "Balão 3", alvo: "Cesto da Festa" },
        { item: "Balão 4", alvo: "Cesto da Festa" },
        { item: "Balão 5", alvo: "Cesto da Festa" },
        { item: "Balão 6", alvo: "Cesto da Festa" },
        { item: "Balão 7", alvo: "Cesto da Festa" },
        { item: "Balão 8", alvo: "Cesto da Festa" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "1 + 1 = ?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        explicacao: "1 + 1 = 2.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: macaImg, quantidade: 1, rotulo: "1", cor: "#EF4444" },
            { imagemUrl: macaImg, quantidade: 1, rotulo: "1", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "2 + 3 = ?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        explicacao: "2 + 3 = 5.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: cenouraImg, quantidade: 2, rotulo: "2", cor: "#FB923C" },
            { imagemUrl: cenouraImg, quantidade: 3, rotulo: "3", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta: "4 + 1 = ?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        explicacao: "4 + 1 = 5.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: estrelaImg, quantidade: 4, rotulo: "4", cor: "#FBBF24" },
            { imagemUrl: estrelaImg, quantidade: 1, rotulo: "+1", cor: "#60A5FA" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "3 + 4 = ?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        explicacao: "3 + 4 = 7.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: florImg, quantidade: 3, rotulo: "3", cor: "#FBBF24" },
            { imagemUrl: florImg, quantidade: 4, rotulo: "4", cor: "#A78BFA" },
          ],
        },
      },
      {
        pergunta: "5 + 2 = ?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        explicacao: "5 + 2 = 7.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: pintinhoImg, quantidade: 5, rotulo: "5", cor: "#FBBF24" },
            { imagemUrl: pintinhoImg, quantidade: 2, rotulo: "2", cor: "#EF4444" },
          ],
        },
      },
      {
        pergunta: "6 + 3 = ?",
        opcoes: ["8", "9", "10"],
        correta: 1,
        explicacao: "6 + 3 = 9.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: balaoImg, quantidade: 6, rotulo: "6", cor: "#EF4444" },
            { imagemUrl: balaoImg, quantidade: 3, rotulo: "3", cor: "#60A5FA" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "5 + 5 = ?",
        opcoes: ["9", "10", "11"],
        correta: 1,
        explicacao: "5 + 5 = 10.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: macaImg, quantidade: 5, rotulo: "5", cor: "#EF4444" },
            { imagemUrl: macaImg, quantidade: 5, rotulo: "5", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "7 + 2 = ?",
        opcoes: ["8", "9", "10"],
        correta: 1,
        explicacao: "7 + 2 = 9.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: estrelaImg, quantidade: 7, rotulo: "7", cor: "#FBBF24" },
            { imagemUrl: estrelaImg, quantidade: 2, rotulo: "2", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta:
          "A Coruja tinha 4 flores e a Cabra deu mais 5. Quantas flores agora?",
        opcoes: ["8", "9", "10"],
        correta: 1,
        explicacao: "4 + 5 = 9 flores.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: florImg, quantidade: 4, rotulo: "Antes", cor: "#FBBF24" },
            { imagemUrl: florImg, quantidade: 5, rotulo: "Ganhou", cor: "#A78BFA" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA07",
    titulo: "Compor e decompor números até 20 usando adição e subtração",
  },
};

void corujaImg;

export default aula;
