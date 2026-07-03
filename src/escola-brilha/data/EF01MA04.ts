import type { Aula } from "../types";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import blocoImg from "@/assets/neuro-treino/objetos/bloco.png";
import laranjaImg from "@/assets/neuro-treino/frutas/laranja.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";

/**
 * EF01MA04 — Aula 004 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Matemática
 * BNCC: Contar a quantidade de objetos de coleções de até 100 unidades,
 * utilizando diferentes estratégias.
 *
 * Missão do Dia: "O Mercado da Dona Coruja".
 * Segue o gabarito TRAVADO da EF01MA02.
 */
const aula: Aula = {
  codigo: "EF01MA04",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Mercado da Dona Coruja",

  narrativa: {
    titulo: "O Mercado da Dona Coruja",
    contexto:
      "Hoje a Dona Coruja abriu sua lojinha na floresta. Ela organizou frutas, legumes, brinquedos e livros nas prateleiras.",
    problema:
      "Antes de abrir, ela precisa conferir se está tudo certo. Se contar errado, pode vender a quantidade errada!",
    convite: "Você será o ajudante oficial da loja. Bora contar juntos?",
  },

  conhecimentosPrevios: [
    "Contar oralmente até 20 sem pular números.",
    "Apontar cada objeto ao contar (correspondência um a um).",
    "Reconhecer grupos pequenos só de olhada.",
  ],

  missao:
    "Aprender a contar coleções maiores usando estratégias: organizar em filas, colunas ou grupos, apontar enquanto conta e conferir novamente.",

  objetivos: [
    "Contar coleções de até 20 objetos sem repetir nenhum.",
    "Organizar objetos em filas, colunas ou grupos antes de contar.",
    "Evitar contar o mesmo objeto duas vezes.",
    "Usar estimativa e depois confirmar contando.",
  ],

  motivacao:
    "Contar muitas coisas de uma vez é como arrumar o quarto: se você organiza primeiro, encontra tudo mais rápido!",

  explicacao:
    "Quando temos poucos objetos, contamos um por um. Mas quando são muitos, fica mais fácil se ORGANIZARMOS antes:\n\n🔵 em FILAS (um do lado do outro)\n🟢 em COLUNAS (um em cima do outro)\n🟡 em GRUPOS (montinhos iguais)\n\nDicas de contador esperto:\n• Aponte com o dedo em cada objeto.\n• Fale o número em voz alta.\n• Marque os que já contou.\n• Confira contando de novo.",

  explicacoesNiveis: {
    nivel1: "Antes de contar muita coisa, organize em filinhas.",
    nivel2: "Ex.: 15 laranjas viram 3 grupos de 5. Fica moleza contar.",
    nivel3:
      "Aponte cada objeto e fale o número. Se pular, começa a contagem errada.",
    nivel4:
      "No mercado, no ônibus, na sala de aula — sempre que precisar contar muitos, ORGANIZE primeiro.",
  },

  exemploResolvido: {
    enunciado: "Dona Coruja separou 10 balões pra festa. Vamos conferir?",
    passos: [
      "Aponte cada balão com o dedo.",
      "Fale o número em voz alta enquanto aponta.",
      "Confira contando outra vez pra ter certeza.",
    ],
    resposta:
      "10 balões — contando um a um, sem pular nem repetir nenhum.",
    interativo: {
      tipo: "contagem",
      imagemUrl: balaoImg,
      quantidade: 10,
      nomeItem: "balão",
      nomeItemPlural: "balões",
      pergunta: "Quantos balões a Dona Coruja tem?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "As laranjas foram organizadas em 3 grupos de 5. Toque nos grupos para contar!",
    resposta:
      "15 laranjas — 3 grupos de 5 dão 15. Pular de 5 em 5 é muito mais rápido.",
    explicacao:
      "Quando os grupos são iguais, dá pra pular de X em X: 5, 10, 15. Isso se chama contagem em grupos.",
    visual: {
      tipo: "grupos",
      pergunta: "Quantas laranjas existem ao todo?",
      imagemUrl: laranjaImg,
      itemSingular: "laranja",
      itemPlural: "laranjas",
      quantidadeGrupos: 3,
      itensPorGrupo: 5,
      opcoes: [10, 15, 20],
      correta: 1,
    },
  },

  exercicios: [
    {
      enunciado:
        "🎈 Dona Coruja pendurou 10 balões. Quantos são?",
      resposta: "10 balões — contando um a um.",
      dica: "Aponte cada balão com o dedo enquanto conta.",
    },
    {
      enunciado:
        "🍊 3 caixas com 5 laranjas cada. Quantas laranjas ao todo?",
      resposta: "15 laranjas — pule de 5 em 5: 5, 10, 15.",
      dica: "Quando os grupos são iguais, pule de X em X.",
    },
    {
      enunciado:
        "🐵 O Macaco contou: 1, 2, 3, 4, 4, 5, 6. O que aconteceu?",
      resposta: "Ele REPETIU o número 4. Contou o mesmo objeto duas vezes.",
      dica: "Marque os que já contou pra não repetir.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: observe as coleções e responda a cada pergunta. Use as estratégias de contagem que aprendeu.",
    resposta:
      "Balões: 10. Laranjas: 15 (3×5). Blocos: 18. Estrelas: 20.",
    visual: {
      cena: [
        { personagem: "Balões", itemImagemUrl: balaoImg, quantidade: 10, cor: "#EF4444" },
        { personagem: "Laranjas", itemImagemUrl: laranjaImg, quantidade: 15, cor: "#FB923C" },
        { personagem: "Blocos", itemImagemUrl: blocoImg, quantidade: 18, cor: "#60A5FA" },
        { personagem: "Estrelas", itemImagemUrl: estrelaImg, quantidade: 20, cor: "#FBBF24" },
      ],
      perguntas: [
        {
          pergunta: "Quantos balões a Dona Coruja pendurou?",
          opcoes: ["8", "10", "12"],
          correta: 1,
          explicacao: "Contando um a um: 10 balões.",
          visual: {
            tipo: "itens",
            imagemUrl: balaoImg,
            quantidade: 10,
            rotulo: "Balões",
          },
        },
        {
          pergunta: "3 caixas com 5 laranjas cada. Quantas laranjas ao todo?",
          opcoes: ["12", "15", "18"],
          correta: 1,
          explicacao: "5 + 5 + 5 = 15 laranjas.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Caixa 1", cor: "#FB923C" },
              { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Caixa 2", cor: "#FBBF24" },
              { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Caixa 3", cor: "#F472B6" },
            ],
          },
        },
        {
          pergunta: "Qual estratégia deixa a contagem mais fácil?",
          opcoes: ["Deixar espalhado", "Organizar em filas ou grupos", "Contar bem rápido"],
          correta: 1,
          explicacao: "Organizar antes de contar evita erros e é mais rápido.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "ORGANIZE antes de contar (filas, colunas ou grupos).",
      "APONTE cada objeto enquanto conta.",
      "Fale o número em VOZ ALTA.",
      "CONFIRA contando de novo pra ter certeza.",
    ],
    dica: "Contagem em grupos iguais é mais rápida — pule de 2 em 2, 5 em 5 ou 10 em 10.",
  },

  quiz: [
    {
      pergunta: "Qual é a melhor maneira de contar muitos objetos?",
      opcoes: ["Misturar tudo", "Organizar primeiro", "Contar bem rápido"],
      correta: 1,
      explicacao: "Organizar em filas, colunas ou grupos evita erros na contagem.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: blocoImg, quantidade: 6, rotulo: "Fila 1", cor: "#60A5FA" },
          { imagemUrl: blocoImg, quantidade: 6, rotulo: "Fila 2", cor: "#F472B6" },
          { imagemUrl: blocoImg, quantidade: 6, rotulo: "Fila 3", cor: "#FBBF24" },
        ],
      },
    },
    {
      pergunta:
        "Ao contar, você repetiu um objeto. O resultado ficou:",
      opcoes: ["Correto", "Incorreto", "Não muda"],
      correta: 1,
      explicacao: "Repetir um objeto faz o total ficar maior do que é — resultado incorreto.",
      visual: {
        tipo: "itens",
        imagemUrl: macaImg,
        quantidade: 5,
        rotulo: "5 maçãs — se contar uma duas vezes, dá 6 (errado)",
      },
    },
    {
      pergunta: "Por que organizar ajuda na contagem?",
      opcoes: ["Porque fica mais bonito", "Porque evita erros", "Porque é mais devagar"],
      correta: 1,
      explicacao: "Organizando você não pula nem repete objetos.",
    },
    {
      pergunta: "🍊 3 grupos de 5 laranjas. Quantas ao todo?",
      opcoes: ["10", "15", "20"],
      correta: 1,
      explicacao: "Pule de 5 em 5: 5, 10, 15.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Grupo 1", cor: "#FB923C" },
          { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Grupo 2", cor: "#FBBF24" },
          { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Grupo 3", cor: "#F472B6" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Grande Contador! Agora você conta coleções grandes usando estratégias: organiza, aponta, fala em voz alta e confere. Missão em Casa: conte lápis, brinquedos, livros e copos — organize em grupos antes de contar.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os caixas dos supermercados usam códigos e organizam os produtos em prateleiras iguais justamente pra contar rápido e sem errar. Até computadores contam melhor quando as coisas estão organizadas!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Conte os balões",
      instrucao: "Toque em cada balão e conte em voz alta com a Dona Coruja.",
      grupos: [{ imagemUrl: balaoImg, quantidade: 10, rotulo: "Balões" }],
      pergunta: "Quantos balões existem?",
      opcoes: ["8", "10", "12"],
      correta: 1,
      acerto: "Muito bem! Você contou todos sem pular nem repetir.",
      erro: "Aponte cada balão e conte devagar: 1, 2, 3...",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Organize para contar",
      instrucao:
        "18 blocos estavam espalhados. Dona Coruja organizou em 2 filas de 9. Conte tocando em cada bloco.",
      grupos: [
        { imagemUrl: blocoImg, quantidade: 9, rotulo: "Fila 1" },
        { imagemUrl: blocoImg, quantidade: 9, rotulo: "Fila 2" },
      ],
      pergunta: "Quantos blocos ao todo?",
      opcoes: ["16", "18", "20"],
      correta: 1,
      acerto: "Excelente! Organizando em filas fica muito mais fácil.",
      erro: "Conte a Fila 1 e depois some com a Fila 2.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Complete os grupos",
      instrucao: "3 caixas com 5 laranjas cada. Toque nos grupos.",
      grupos: [
        { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Caixa 1" },
        { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Caixa 2" },
        { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Caixa 3" },
      ],
      pergunta: "Quantas laranjas existem ao todo?",
      opcoes: ["12", "15", "18"],
      correta: 1,
      acerto: "Isso! 5 + 5 + 5 = 15. Pular de 5 em 5 é rapidinho.",
      erro: "Cada caixa tem 5. Some as três: 5 + 5 + 5.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Descubra o erro",
      instrucao:
        "O Macaco contou: 1, 2, 3, 4, 4, 5, 6. Olhe as bananas e diga o que aconteceu.",
      grupos: [{ imagemUrl: bananaImg, quantidade: 6, rotulo: "Bananas do Macaco" }],
      pergunta: "O que aconteceu na contagem?",
      opcoes: ["Esqueceu um número", "Repetiu um número", "Contou certo"],
      correta: 1,
      acerto: "Isso! Ele repetiu o 4. Marcar os que já contou evita esse erro.",
      erro: "Olhe a sequência: 1, 2, 3, 4, 4, 5, 6 — o 4 aparece duas vezes.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Contagem rápida",
      instrucao:
        "Olhe as estrelas por 3 segundos e ESTIME. Depois confira contando.",
      grupos: [{ imagemUrl: estrelaImg, quantidade: 20, rotulo: "Estrelas" }],
      pergunta: "Quantas estrelas você acha que havia?",
      opcoes: ["15", "20", "25"],
      correta: 1,
      acerto: "Ótima estimativa! Eram 20 estrelas.",
      erro: "Conte agora um a um pra confirmar: são 20 estrelas.",
    },
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Organizando a Biblioteca",
      instrucao:
        "Arraste cada livro para uma prateleira. Cada prateleira comporta 5 livros.",
      itemImagem: livroImg,
      alvosVisuais: [
        { nome: "Prateleira 1", cor: "#60A5FA", capacidade: 5, imagemUrl: livroImg },
        { nome: "Prateleira 2", cor: "#F472B6", capacidade: 5, imagemUrl: livroImg },
      ],
      pares: [
        { item: "Livro 1", alvo: "Prateleira 1" },
        { item: "Livro 2", alvo: "Prateleira 1" },
        { item: "Livro 3", alvo: "Prateleira 1" },
        { item: "Livro 4", alvo: "Prateleira 1" },
        { item: "Livro 5", alvo: "Prateleira 1" },
        { item: "Livro 6", alvo: "Prateleira 2" },
        { item: "Livro 7", alvo: "Prateleira 2" },
        { item: "Livro 8", alvo: "Prateleira 2" },
        { item: "Livro 9", alvo: "Prateleira 2" },
        { item: "Livro 10", alvo: "Prateleira 2" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Quantos balões existem?",
        opcoes: ["6", "8", "10"],
        correta: 2,
        explicacao: "Contando um a um: 10 balões.",
        visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 10, rotulo: "Balões" },
      },
      {
        pergunta: "Quantas laranjas ao todo?",
        opcoes: ["8", "10", "12"],
        correta: 2,
        explicacao: "2 grupos de 6 = 12.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: laranjaImg, quantidade: 6, rotulo: "Grupo 1", cor: "#FB923C" },
            { imagemUrl: laranjaImg, quantidade: 6, rotulo: "Grupo 2", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta: "Quantas estrelas?",
        opcoes: ["7", "9", "11"],
        correta: 1,
        explicacao: "Conte apontando: são 9.",
        visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 9, rotulo: "Estrelas" },
      },
    ],

    medio: [
      {
        pergunta: "3 caixas com 5 laranjas cada. Quantas ao todo?",
        opcoes: ["12", "15", "18"],
        correta: 1,
        explicacao: "5 + 5 + 5 = 15.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Caixa 1", cor: "#FB923C" },
            { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Caixa 2", cor: "#FBBF24" },
            { imagemUrl: laranjaImg, quantidade: 5, rotulo: "Caixa 3", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "2 filas de 9 blocos. Quantos blocos?",
        opcoes: ["16", "18", "20"],
        correta: 1,
        explicacao: "9 + 9 = 18.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: blocoImg, quantidade: 9, rotulo: "Fila 1", cor: "#60A5FA" },
            { imagemUrl: blocoImg, quantidade: 9, rotulo: "Fila 2", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta:
          "O Macaco contou 1, 2, 3, 4, 4, 5, 6. Qual o erro?",
        opcoes: ["Esqueceu um número", "Repetiu um número", "Contou certo"],
        correta: 1,
        explicacao: "Ele repetiu o 4.",
        visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 6, rotulo: "Bananas" },
      },
    ],

    dificil: [
      {
        pergunta: "Sem contar tudo, quantas estrelas você estima?",
        opcoes: ["15", "20", "25"],
        correta: 1,
        explicacao: "Bom olho matemático! São 20 estrelas.",
        visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 20, rotulo: "Estrelas" },
      },
      {
        pergunta:
          "2 prateleiras de 5 livros. Quantos livros ao todo?",
        opcoes: ["8", "10", "12"],
        correta: 1,
        explicacao: "5 + 5 = 10 livros.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: livroImg, quantidade: 5, rotulo: "Prateleira 1", cor: "#60A5FA" },
            { imagemUrl: livroImg, quantidade: 5, rotulo: "Prateleira 2", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Qual estratégia é MAIS ESPERTA pra contar 18 blocos?",
        opcoes: [
          "Contar bem rápido de olhos fechados",
          "Organizar em filas iguais e contar",
          "Chutar um número",
        ],
        correta: 1,
        explicacao: "Organizar em filas iguais evita pular e repetir.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: blocoImg, quantidade: 6, rotulo: "Fila 1", cor: "#60A5FA" },
            { imagemUrl: blocoImg, quantidade: 6, rotulo: "Fila 2", cor: "#F472B6" },
            { imagemUrl: blocoImg, quantidade: 6, rotulo: "Fila 3", cor: "#FBBF24" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01MA05",
    titulo: "Comparar números naturais até 100",
  },
};

// Silence unused-import warnings for personagens usados em ilustrações futuras.
void macacoImg;
void corujaImg;

export default aula;
