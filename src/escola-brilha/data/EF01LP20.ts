import type { Aula } from "../types";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as presenteImg } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as bananaImg } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as velaImg } from "@/assets/neuro-treino/objetos/vela.png.asset.json";
import { url as balaoImg } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";

/**
 * EF01LP20 — Aula 020
 * BNCC: Identificar e reproduzir a formatação de listas, agendas, calendários,
 * regras, avisos, convites, receitas, instruções e legendas.
 * Missão: "As Placas dos Textos".
 */
const aula: Aula = {
  codigo: "EF01LP20",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "As Placas dos Textos",

  narrativa: {
    titulo: "As Placas dos Textos",
    contexto:
      "Os textos do dia a dia usam placas próprias: lista tem itens em linhas, calendário tem quadrinhos com dias, convite tem borda bonita…",
    problema:
      "As placas caíram das paredes da Floresta e os textos ficaram sem forma.",
    convite: "Bora ajudar o Brilha a devolver cada texto ao seu formato?",
  },

  conhecimentosPrevios: [
    "Reconhecer lista, convite, aviso, receita (EF01LP17).",
    "Perceber que cada texto tem finalidade.",
    "Ler pequenos textos com apoio.",
  ],

  missao:
    "Identificar o formato (diagramação) de listas, convites, calendários, avisos e receitas — e reproduzir esse formato ao escrever.",

  objetivos: [
    "Perceber a forma visual de cada gênero.",
    "Diferenciar convite, aviso, lista, receita e calendário pelo formato.",
    "Reproduzir a formatação em pequenos textos.",
    "Perceber que forma e função caminham juntas.",
  ],

  motivacao: "A forma do texto já conta metade do recado!",

  explicacao:
    "Cada texto tem uma FORMA:\n\n📝 LISTA → itens um embaixo do outro.\n📅 CALENDÁRIO → quadradinhos com dias.\n💌 CONVITE → borda, título grande, DATA e LUGAR.\n📢 AVISO → letras grandes, mensagem curta.\n🍰 RECEITA → 2 partes: ingredientes + modo de fazer.",

  explicacoesNiveis: {
    nivel1: "Cada texto tem um jeito de ser escrito.",
    nivel2: "A forma ajuda a entender rápido o texto.",
    nivel3: "Convite tem título, data, lugar e é enfeitado.",
    nivel4: "Receita separa ingredientes e modo de fazer.",
  },

  exemploResolvido: {
    enunciado: "Qual texto tem quadradinhos com dias?",
    passos: [
      "Pense: onde vejo dias e semanas?",
      "Quadros pequenos com números.",
      "É o CALENDÁRIO.",
    ],
    resposta: "CALENDÁRIO. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque pra ouvir. Qual formato mostra itens um embaixo do outro?",
    resposta: "LISTA.",
    explicacao: "Lista organiza itens em linhas.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Itens em linhas:",
      opcoes: [
        { nome: "lista", imagemUrl: livroImg },
        { nome: "convite", imagemUrl: presenteImg },
        { nome: "receita", imagemUrl: boloImg },
      ],
      respostaCerta: "lista",
    },
  },

  exercicios: [
    { enunciado: "Convite tem sempre…", resposta: "DATA e LUGAR.", dica: "Quando e onde." },
    { enunciado: "Receita tem duas partes:", resposta: "INGREDIENTES + MODO DE FAZER.", dica: "O que usa e como faz." },
    { enunciado: "Calendário mostra:", resposta: "DIAS em quadradinhos.", dica: "Semanas e datas." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: identifique o formato certo.",
    resposta: "A forma vai com a função.",
    visual: {
      cena: [
        { personagem: "LIVRO", itemImagemUrl: livroImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "PRESENTE", itemImagemUrl: presenteImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "BOLO", itemImagemUrl: boloImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "ESCOLA", itemImagemUrl: escolaImg, quantidade: 1, cor: "#34D399" },
        { personagem: "MAÇÃ", itemImagemUrl: macaImg, quantidade: 1, cor: "#EF4444" },
      ],
      perguntas: [
        { pergunta: "Itens um embaixo do outro:", opcoes: ["Lista", "Convite", "Aviso"], correta: 0, explicacao: "Lista." },
        { pergunta: "Quadradinhos com dias:", opcoes: ["Calendário", "Receita", "Convite"], correta: 0, explicacao: "Calendário." },
        { pergunta: "Título + data + lugar:", opcoes: ["Convite", "Lista", "Legenda"], correta: 0, explicacao: "Convite." },
        { pergunta: "Ingredientes + modo:", opcoes: ["Receita", "Aviso", "Lista"], correta: 0, explicacao: "Receita." },
        { pergunta: "Letra grande e curta:", opcoes: ["Aviso", "Convite", "Receita"], correta: 0, explicacao: "Aviso." },
      ],
    },
  },

  revisao: {
    pontos: [
      "📋 Lista = linhas de itens.",
      "📅 Calendário = quadradinhos com dias.",
      "💌 Convite = data + lugar + enfeite.",
      "🍰 Receita = ingredientes + modo.",
      "📢 Aviso = curto e chamativo.",
    ],
    dica: "Olhe primeiro o FORMATO — ele já entrega o tipo do texto.",
  },

  quiz: [
    { pergunta: "Itens em linhas:", opcoes: ["Lista", "Convite", "Aviso"], correta: 0, explicacao: "Lista." },
    { pergunta: "Quadradinhos com dias:", opcoes: ["Calendário", "Convite", "Receita"], correta: 0, explicacao: "Calendário." },
    { pergunta: "Título + data + lugar:", opcoes: ["Convite", "Lista", "Aviso"], correta: 0, explicacao: "Convite." },
    { pergunta: "2 partes (ingredientes/modo):", opcoes: ["Receita", "Convite", "Legenda"], correta: 0, explicacao: "Receita." },
    { pergunta: "Aviso é:", opcoes: ["Curto e chamativo", "Longo e privado", "Só oral"], correta: 0, explicacao: "Curto e chamativo." },
  ],

  conclusao:
    "🏅 Medalha conquistada: Detetive dos Formatos! Missão em Família: procurem em casa uma lista, um calendário e uma receita — mostrem os formatos.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Bons formatos ajudam nosso cérebro a entender mais rápido — é por isso que o cardápio, a bula e o convite parecem tão diferentes.",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Itens em linhas",
      instrucao: "Toque pra ouvir. Qual texto mostra itens um embaixo do outro?",
      pergunta: "Formato certo:",
      opcoes: [
        { nome: "LISTA", imagemUrl: livroImg, rotulo: "📝 LISTA" },
        { nome: "CONVITE", imagemUrl: presenteImg, rotulo: "💌 CONVITE" },
        { nome: "RECEITA", imagemUrl: boloImg, rotulo: "🍰 RECEITA" },
      ],
      correta: 0,
      acerto: "📝 LISTA!",
      erro: "Itens em linhas = LISTA.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Convite",
      instrucao: "Toque pra ouvir. O que um convite precisa sempre ter?",
      figura: { imagemUrl: velaImg, rotulo: "🎉" },
      pergunta: "Escolha:",
      opcoes: ["DATA e LUGAR", "PREÇO", "MARCA"],
      correta: 0,
      acerto: "📅 DATA e LUGAR!",
      erro: "Convite precisa de DATA e LUGAR.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Receita",
      instrucao: "Toque pra ouvir. Receita tem quantas partes?",
      figura: { imagemUrl: boloImg, rotulo: "🎂" },
      pergunta: "Quantas partes?",
      opcoes: ["2 (ingredientes + modo)", "1", "5"],
      correta: 0,
      acerto: "🥣 Ingredientes + modo de fazer.",
      erro: "Receita tem 2 partes.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Cada formato no seu texto",
      instrucao: "Arraste cada formato pro texto certo.",
      pares: [
        { item: "Itens em linhas", alvo: "LISTA" },
        { item: "Quadradinhos com dias", alvo: "CALENDÁRIO" },
        { item: "Data + lugar", alvo: "CONVITE" },
      ],
      alvosVisuais: [
        { nome: "LISTA", cor: "#34D399", capacidade: 1 },
        { nome: "CALENDÁRIO", cor: "#60A5FA", capacidade: 1 },
        { nome: "CONVITE", cor: "#F472B6", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Placa da Coruja",
      instrucao: "A Coruja precisa avisar a turma que a aula será no pátio. Que placa usa?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "AVISO", imagemUrl: escolaImg, rotulo: "📢 AVISO (curto e chamativo)" },
        { nome: "RECEITA", imagemUrl: boloImg, rotulo: "🍰 RECEITA" },
        { nome: "LISTA", imagemUrl: livroImg, rotulo: "📝 LISTA" },
      ],
      correta: 0,
      acerto: "📢 AVISO — curto e visível!",
      erro: "Pra avisar todos = AVISO.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Itens em linhas:", opcoes: ["Lista", "Convite", "Aviso"], correta: 0, explicacao: "Lista.", visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "📝" } },
      { pergunta: "Dias em quadradinhos:", opcoes: ["Calendário", "Receita", "Convite"], correta: 0, explicacao: "Calendário.", visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "📅" } },
      { pergunta: "Enfeitado + data:", opcoes: ["Convite", "Lista", "Aviso"], correta: 0, explicacao: "Convite.", visual: { tipo: "itens", imagemUrl: presenteImg, quantidade: 1, rotulo: "💌" } },
    ],
    medio: [
      { pergunta: "Receita tem:", opcoes: ["Ingredientes e modo", "Só título", "Só data"], correta: 0, explicacao: "Ingredientes + modo.", visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "🥣" } },
      { pergunta: "Aviso é:", opcoes: ["Curto e chamativo", "Longo", "Secreto"], correta: 0, explicacao: "Curto e chamativo.", visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "📢" } },
      { pergunta: "Legenda descreve:", opcoes: ["Uma foto ou desenho", "O tempo", "A idade"], correta: 0, explicacao: "Descreve imagem.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "🖼️" } },
    ],
    dificil: [
      { pergunta: "Formato ajuda a:", opcoes: ["Entender rápido", "Confundir", "Nada"], correta: 0, explicacao: "Entender rápido.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "👀" } },
      { pergunta: "Convite sem data:", opcoes: ["Falta info importante", "Está perfeito", "É melhor"], correta: 0, explicacao: "Falta info.", visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 1, rotulo: "❓" } },
      { pergunta: "Instrução de montagem:", opcoes: ["Passo a passo em ordem", "Bagunçada", "Só desenho"], correta: 0, explicacao: "Passo a passo.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "🔧" } },
    ],
  },

  proximaHabilidade: { codigo: "EF01LP21" },
};

export default aula;
