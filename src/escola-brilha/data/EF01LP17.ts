import type { Aula } from "../types";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as bananaImg } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as presenteImg } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as balaoImg } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as velaImg } from "@/assets/neuro-treino/objetos/vela.png.asset.json";

/**
 * EF01LP17 — Aula 017
 * BNCC: Planejar e produzir listas, agendas, calendários, avisos, convites, receitas…
 * Missão: "A Fábrica dos Bilhetinhos".
 */
const aula: Aula = {
  codigo: "EF01LP17",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "A Fábrica dos Bilhetinhos",

  narrativa: {
    titulo: "A Fábrica dos Bilhetinhos",
    contexto:
      "O Brilha vai dar uma festa na Floresta! Precisa fazer LISTA de compras, CONVITE pros amigos e AVISO no mural.",
    problema:
      "Mas ele nunca escreveu esses textos e não sabe qual usar em cada momento.",
    convite: "Bora ajudar o Brilha a montar cada texto do jeito certo?",
  },

  conhecimentosPrevios: [
    "Reconhecer palavras conhecidas.",
    "Saber que texto serve pra comunicar.",
    "Perceber ordem em pequenas escritas.",
  ],

  missao:
    "Planejar e produzir pequenos textos do dia a dia: listas, convites, avisos, receitas — sabendo pra que cada um serve.",

  objetivos: [
    "Diferenciar lista, convite, aviso e receita.",
    "Perceber a finalidade de cada texto.",
    "Escolher palavras adequadas à situação.",
    "Organizar informações de forma clara.",
  ],

  motivacao: "Escrever é resolver a vida de um jeito bonito!",

  explicacao:
    "Cada texto do dia a dia tem um jeito próprio:\n\n📝 LISTA → itens um debaixo do outro (compras, tarefas).\n💌 CONVITE → chama alguém (o que, quando, onde).\n📢 AVISO → informa a todos.\n🍰 RECEITA → ingredientes + modo de fazer.",

  explicacoesNiveis: {
    nivel1: "Lista = coisas em ordem, uma embaixo da outra.",
    nivel2: "Convite chama pra um evento e diz DATA e LUGAR.",
    nivel3: "Aviso é curto e informa todo mundo.",
    nivel4: "Receita tem duas partes: ingredientes e modo de fazer.",
  },

  exemploResolvido: {
    enunciado: "Se quero comprar frutas, escrevo o quê?",
    passos: [
      "Preciso lembrar de várias coisas.",
      "Coloco uma embaixo da outra.",
      "Isso é uma LISTA.",
    ],
    resposta: "Uma LISTA de compras. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque pra ouvir. Pra chamar amigos pra festa eu faço um:",
    resposta: "CONVITE.",
    explicacao: "Convite chama alguém pra um evento.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Pra chamar amigos:",
      opcoes: [
        { nome: "convite", imagemUrl: presenteImg },
        { nome: "lista", imagemUrl: livroImg },
        { nome: "receita", imagemUrl: boloImg },
      ],
      respostaCerta: "convite",
    },
  },

  exercicios: [
    { enunciado: "Pra lembrar de compras eu faço uma…", resposta: "LISTA.", dica: "Itens um embaixo do outro." },
    { enunciado: "Pra ensinar como fazer um bolo eu escrevo…", resposta: "RECEITA.", dica: "Ingredientes + modo de fazer." },
    { enunciado: "Pra avisar que a aula será no pátio eu faço…", resposta: "AVISO.", dica: "Curto e informa todos." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: escolha o texto certo pra cada situação.",
    resposta: "Cada texto tem uma finalidade.",
    visual: {
      cena: [
        { personagem: "MAÇÃ", itemImagemUrl: macaImg, quantidade: 1, cor: "#EF4444" },
        { personagem: "BANANA", itemImagemUrl: bananaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "BOLO", itemImagemUrl: boloImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "PRESENTE", itemImagemUrl: presenteImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "ESCOLA", itemImagemUrl: escolaImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        { pergunta: "Pra festa de aniversário:", opcoes: ["Convite", "Lista", "Aviso"], correta: 0, explicacao: "Convite chama os amigos." },
        { pergunta: "Pra comprar frutas:", opcoes: ["Lista", "Receita", "Convite"], correta: 0, explicacao: "Lista de compras." },
        { pergunta: "Pra ensinar a fazer bolo:", opcoes: ["Receita", "Aviso", "Convite"], correta: 0, explicacao: "Receita = ingredientes + modo de fazer." },
        { pergunta: "Pra avisar mudança na sala:", opcoes: ["Aviso", "Convite", "Receita"], correta: 0, explicacao: "Aviso informa todos." },
        { pergunta: "Convite precisa ter:", opcoes: ["Data e lugar", "Cor da parede", "Idade do papai"], correta: 0, explicacao: "Data e lugar são essenciais." },
      ],
    },
  },

  revisao: {
    pontos: [
      "📝 Lista organiza coisas.",
      "💌 Convite chama gente.",
      "📢 Aviso informa todos.",
      "🍰 Receita ensina a fazer.",
    ],
    dica: "Antes de escrever, pense: pra QUE serve esse texto?",
  },

  quiz: [
    { pergunta: "Pra chamar pra festa:", opcoes: ["Convite", "Lista", "Aviso"], correta: 0, explicacao: "Convite." },
    { pergunta: "Pra lembrar de compras:", opcoes: ["Lista", "Receita", "Convite"], correta: 0, explicacao: "Lista." },
    { pergunta: "Pra ensinar bolo:", opcoes: ["Receita", "Aviso", "Convite"], correta: 0, explicacao: "Receita." },
    { pergunta: "Aviso é:", opcoes: ["Curto e informa", "Longo e privado", "Só desenho"], correta: 0, explicacao: "Curto e público." },
    { pergunta: "Convite precisa ter:", opcoes: ["Data e lugar", "Preço", "Marca"], correta: 0, explicacao: "Data e lugar." },
  ],

  conclusao:
    "🏅 Medalha conquistada: Escritor do Dia a Dia! Missão em Família: façam juntos uma LISTA de compras da semana e um CONVITE para um momento especial em casa.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "As primeiras receitas escritas do mundo têm mais de 4 mil anos — foram feitas em plaquinhas de barro!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Festa do Brilha",
      instrucao: "Toque pra ouvir. Pra chamar amigos pra festa eu faço um:",
      pergunta: "Texto certo:",
      opcoes: [
        { nome: "CONVITE", imagemUrl: presenteImg, rotulo: "💌 CONVITE" },
        { nome: "LISTA", imagemUrl: livroImg, rotulo: "📝 LISTA" },
        { nome: "RECEITA", imagemUrl: boloImg, rotulo: "🍰 RECEITA" },
      ],
      correta: 0,
      acerto: "💌 Isso! CONVITE chama pra festa.",
      erro: "Pra chamar alguém → CONVITE.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Compras da semana",
      instrucao: "Toque pra ouvir. Pra lembrar de comprar frutas eu faço:",
      figura: { imagemUrl: macaImg, rotulo: "🍎🍌🍓" },
      pergunta: "Escreva:",
      opcoes: ["LISTA", "AVISO", "CONVITE"],
      correta: 0,
      acerto: "📝 LISTA de compras!",
      erro: "Itens um embaixo do outro = LISTA.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Bolo de aniversário",
      instrucao: "Toque pra ouvir. Pra ensinar a fazer um bolo eu escrevo:",
      figura: { imagemUrl: boloImg, rotulo: "🎂" },
      pergunta: "É uma…",
      opcoes: ["RECEITA", "LISTA", "AVISO"],
      correta: 0,
      acerto: "🍰 RECEITA — ingredientes e modo de fazer.",
      erro: "Ensinar a fazer = RECEITA.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Cada texto no seu uso",
      instrucao: "Arraste cada texto pra situação certa.",
      pares: [
        { item: "Convite", alvo: "FESTA" },
        { item: "Lista", alvo: "COMPRAS" },
        { item: "Receita", alvo: "BOLO" },
      ],
      alvosVisuais: [
        { nome: "FESTA", cor: "#F472B6", capacidade: 1 },
        { nome: "COMPRAS", cor: "#34D399", capacidade: 1 },
        { nome: "BOLO", cor: "#FBBF24", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Aviso da Coruja",
      instrucao: "A Coruja quer contar a todos que a aula será no pátio. Ela precisa fazer:",
      pergunta: "Texto certo:",
      opcoes: [
        { nome: "AVISO", imagemUrl: escolaImg, rotulo: "📢 AVISO" },
        { nome: "CONVITE", imagemUrl: presenteImg, rotulo: "💌 CONVITE" },
        { nome: "RECEITA", imagemUrl: boloImg, rotulo: "🍰 RECEITA" },
      ],
      correta: 0,
      acerto: "📢 AVISO informa todo mundo!",
      erro: "Informar todos = AVISO.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Chamar pra festa:", opcoes: ["Convite", "Lista", "Aviso"], correta: 0, explicacao: "Convite.", visual: { tipo: "itens", imagemUrl: presenteImg, quantidade: 1, rotulo: "💌" } },
      { pergunta: "Comprar frutas:", opcoes: ["Lista", "Convite", "Receita"], correta: 0, explicacao: "Lista.", visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "📝" } },
      { pergunta: "Fazer bolo:", opcoes: ["Receita", "Aviso", "Lista"], correta: 0, explicacao: "Receita.", visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "🍰" } },
    ],
    medio: [
      { pergunta: "Convite tem:", opcoes: ["Data e lugar", "Só cor", "Só nome"], correta: 0, explicacao: "Data e lugar.", visual: { tipo: "itens", imagemUrl: velaImg, quantidade: 1, rotulo: "📅" } },
      { pergunta: "Aviso é:", opcoes: ["Curto e público", "Longo e privado", "Só oral"], correta: 0, explicacao: "Curto e público.", visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "📢" } },
      { pergunta: "Receita tem 2 partes:", opcoes: ["Ingredientes e modo", "Data e local", "Nome e idade"], correta: 0, explicacao: "Ingredientes + modo de fazer.", visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "🥣" } },
    ],
    dificil: [
      { pergunta: "Escrever é bom porque:", opcoes: ["Ajuda a comunicar", "Só treina letra", "Nada"], correta: 0, explicacao: "Comunicar.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "✍️" } },
      { pergunta: "Antes de escrever penso em:", opcoes: ["Pra que serve", "Cor da tinta", "Marca do lápis"], correta: 0, explicacao: "Finalidade.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🎯" } },
      { pergunta: "Lista deve estar:", opcoes: ["Organizada", "Bagunçada", "Escondida"], correta: 0, explicacao: "Organizada.", visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 1, rotulo: "📋" } },
    ],
  },

  proximaHabilidade: { codigo: "EF01LP18" },
};

export default aula;
