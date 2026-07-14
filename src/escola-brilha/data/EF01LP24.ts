import type { Aula } from "../types";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as balaoImg } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as tamborImg } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as passaroImg } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as abelhaImg } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";

/**
 * EF01LP24 — Aula 024
 * BNCC: Identificar e reproduzir formatação de diagramas, entrevistas e curiosidades
 * em enunciados de tarefas escolares.
 * Missão: "O Bloquinho do Repórter".
 */
const aula: Aula = {
  codigo: "EF01LP24",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Bloquinho do Repórter",

  narrativa: {
    titulo: "O Bloquinho do Repórter",
    contexto:
      "O Brilha ganhou um BLOQUINHO DE REPÓRTER. Nele, vai anotar diagramas, perguntas de entrevista e curiosidades — cada um com seu formato.",
    problema:
      "Mas o Brilha ainda mistura tudo: diagrama com curiosidade, entrevista sem pergunta…",
    convite: "Bora ajudar o Brilha a organizar o bloquinho?",
  },

  conhecimentosPrevios: [
    "Reconhecer entrevista, diagrama e curiosidade (EF01LP22/23).",
    "Perceber formato de textos (EF01LP20).",
    "Ler pequenos enunciados escolares.",
  ],

  missao:
    "Identificar e reproduzir a formatação (diagramação) de diagramas, entrevistas e curiosidades, mesmo em versão oral.",

  objetivos: [
    "Perceber a forma visual de cada gênero investigativo.",
    "Reproduzir a formatação em pequenos exemplos.",
    "Ler enunciados escolares com atenção.",
    "Aplicar o formato certo em cada tarefa.",
  ],

  motivacao: "Cada texto tem seu bloquinho — o formato mostra o caminho!",

  explicacao:
    "Formato dos textos investigativos:\n\n🧭 DIAGRAMA → figura no meio, nomes das partes com setas.\n🎤 ENTREVISTA → pergunta / resposta / pergunta / resposta.\n💡 CURIOSIDADE → 'Você sabia que…' + fato interessante.\n\nQuando é oral, o formato aparece na fala: pausas, entonação, entrevistador e entrevistado.",

  explicacoesNiveis: {
    nivel1: "Diagrama tem imagem com etiquetas.",
    nivel2: "Entrevista tem P (pergunta) e R (resposta).",
    nivel3: "Curiosidade começa com 'Você sabia que…'.",
    nivel4: "Na versão oral, quem pergunta e quem responde falam por vez.",
  },

  exemploResolvido: {
    enunciado: "Como fica um diagrama simples da flor?",
    passos: [
      "Desenho a flor no meio.",
      "Aponto para pétala, caule e folha.",
      "Escrevo o nome de cada parte.",
    ],
    resposta: "Flor + setas + nomes das partes. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque pra ouvir. Qual texto tem 'P:' e 'R:' um embaixo do outro?",
    resposta: "ENTREVISTA.",
    explicacao: "Pergunta e resposta = entrevista escrita.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "P: R: P: R:",
      opcoes: [
        { nome: "entrevista", imagemUrl: corujaImg },
        { nome: "diagrama", imagemUrl: florImg },
        { nome: "curiosidade", imagemUrl: estrelaImg },
      ],
      respostaCerta: "entrevista",
    },
  },

  exercicios: [
    { enunciado: "Diagrama tem…", resposta: "IMAGEM + nomes com setas.", dica: "Etiquetas nas partes." },
    { enunciado: "Entrevista escreve-se com…", resposta: "P: e R: alternados.", dica: "Pergunta e resposta." },
    { enunciado: "Curiosidade começa com…", resposta: "'Você sabia que…'.", dica: "Chama atenção." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: identifique o formato certo.",
    resposta: "Cada texto investigativo tem forma própria.",
    visual: {
      cena: [
        { personagem: "CORUJA", itemImagemUrl: corujaImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "FLOR", itemImagemUrl: florImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "ÁRVORE", itemImagemUrl: arvoreImg, quantidade: 1, cor: "#34D399" },
        { personagem: "ABELHA", itemImagemUrl: abelhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "ESCOLA", itemImagemUrl: escolaImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        { pergunta: "P: R: P: R:", opcoes: ["Entrevista", "Diagrama", "Curiosidade"], correta: 0, explicacao: "Entrevista." },
        { pergunta: "Imagem + etiquetas com setas:", opcoes: ["Diagrama", "Convite", "Aviso"], correta: 0, explicacao: "Diagrama." },
        { pergunta: "'Você sabia que…' + fato:", opcoes: ["Curiosidade", "Lista", "Receita"], correta: 0, explicacao: "Curiosidade." },
        { pergunta: "Na entrevista oral:", opcoes: ["Cada um fala na sua vez", "Todos gritam", "Fica calado"], correta: 0, explicacao: "Cada um na sua vez." },
        { pergunta: "No diagrama, setas apontam:", opcoes: ["Pra parte nomeada", "Pra fora", "Pra nada"], correta: 0, explicacao: "Pra parte nomeada." },
      ],
    },
  },

  revisao: {
    pontos: [
      "🧭 Diagrama = imagem + etiquetas.",
      "🎤 Entrevista escrita = P: e R:.",
      "💡 Curiosidade = 'Você sabia que…'.",
      "🗣️ Oral: cada um fala na sua vez.",
    ],
    dica: "Antes de escrever, imite o formato do modelo!",
  },

  quiz: [
    { pergunta: "P: R: P: R:", opcoes: ["Entrevista", "Diagrama", "Aviso"], correta: 0, explicacao: "Entrevista." },
    { pergunta: "Imagem com etiquetas:", opcoes: ["Diagrama", "Convite", "Lista"], correta: 0, explicacao: "Diagrama." },
    { pergunta: "'Você sabia que…':", opcoes: ["Curiosidade", "Regra", "Receita"], correta: 0, explicacao: "Curiosidade." },
    { pergunta: "Entrevista oral boa:", opcoes: ["Cada um na sua vez", "Todos gritam", "Ninguém escuta"], correta: 0, explicacao: "Cada um na sua vez." },
    { pergunta: "Setas do diagrama:", opcoes: ["Apontam partes", "Vão pra qualquer lado", "Somem"], correta: 0, explicacao: "Apontam partes." },
  ],

  conclusao:
    "🏅 Medalha conquistada: Repórter Organizado! Missão em Família: façam juntos um diagrama simples da fruta que mais gostam.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os primeiros diagramas foram feitos por cientistas há mais de 400 anos — ajudavam a explicar plantas, corpo e planetas!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · P e R",
      instrucao: "Toque pra ouvir. Qual texto usa P: R: P: R:?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "ENTREVISTA", imagemUrl: corujaImg, rotulo: "🎤 ENTREVISTA" },
        { nome: "DIAGRAMA", imagemUrl: florImg, rotulo: "🧭 DIAGRAMA" },
        { nome: "CURIOSIDADE", imagemUrl: estrelaImg, rotulo: "💡 CURIOSIDADE" },
      ],
      correta: 0,
      acerto: "🎤 ENTREVISTA!",
      erro: "P: e R: alternados = ENTREVISTA.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Imagem com etiquetas",
      instrucao: "Toque pra ouvir. Imagem com nomes das partes chama-se:",
      figura: { imagemUrl: florImg, rotulo: "🌸" },
      pergunta: "Escolha:",
      opcoes: ["DIAGRAMA", "AVISO", "CONVITE"],
      correta: 0,
      acerto: "🧭 DIAGRAMA!",
      erro: "Imagem com etiquetas = DIAGRAMA.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Você sabia que…",
      instrucao: "Toque pra ouvir. Que texto começa assim?",
      figura: { imagemUrl: estrelaImg, rotulo: "💡" },
      pergunta: "Escolha:",
      opcoes: ["CURIOSIDADE", "LISTA", "RECEITA"],
      correta: 0,
      acerto: "💡 CURIOSIDADE!",
      erro: "'Você sabia que…' = CURIOSIDADE.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Formato → Texto",
      instrucao: "Arraste cada formato pro texto certo.",
      pares: [
        { item: "P: … R: …", alvo: "ENTREVISTA" },
        { item: "Imagem + etiquetas", alvo: "DIAGRAMA" },
        { item: "'Você sabia que…'", alvo: "CURIOSIDADE" },
      ],
      alvosVisuais: [
        { nome: "ENTREVISTA", cor: "#A78BFA", capacidade: 1 },
        { nome: "DIAGRAMA", cor: "#34D399", capacidade: 1 },
        { nome: "CURIOSIDADE", cor: "#FBBF24", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Bloquinho da Coruja",
      instrucao: "A Coruja gravou uma entrevista oral. O que precisa acontecer?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "VEZ", imagemUrl: tamborImg, rotulo: "🎤 Cada um fala na sua vez" },
        { nome: "GRITAR", imagemUrl: balaoImg, rotulo: "🎈 Todos gritam" },
        { nome: "MUDO", imagemUrl: passaroImg, rotulo: "🤐 Ninguém fala" },
      ],
      correta: 0,
      acerto: "🎤 Cada um na sua vez!",
      erro: "Na entrevista oral, cada um fala na sua vez.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "P: R: =", opcoes: ["Entrevista", "Diagrama", "Lista"], correta: 0, explicacao: "Entrevista.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🎤" } },
      { pergunta: "Imagem + etiquetas =", opcoes: ["Diagrama", "Convite", "Aviso"], correta: 0, explicacao: "Diagrama.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🧭" } },
      { pergunta: "'Você sabia que…' =", opcoes: ["Curiosidade", "Regra", "Receita"], correta: 0, explicacao: "Curiosidade.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "💡" } },
    ],
    medio: [
      { pergunta: "Enunciado escolar:", opcoes: ["Deve ser lido com atenção", "Pode ignorar", "É desenho"], correta: 0, explicacao: "Ler com atenção.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📖" } },
      { pergunta: "Entrevista oral:", opcoes: ["Cada um na sua vez", "Todos gritam", "Silêncio total"], correta: 0, explicacao: "Cada um na sua vez.", visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🗣️" } },
      { pergunta: "Setas no diagrama:", opcoes: ["Apontam parte nomeada", "Vão pra fora", "Somem"], correta: 0, explicacao: "Apontam parte.", visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "➡️" } },
    ],
    dificil: [
      { pergunta: "Reproduzir formato é:", opcoes: ["Imitar a forma do modelo", "Inventar tudo", "Ignorar"], correta: 0, explicacao: "Imitar a forma.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "🎯" } },
      { pergunta: "Boa curiosidade tem:", opcoes: ["Fato surpreendente", "Segredo", "Mentira"], correta: 0, explicacao: "Fato surpreendente.", visual: { tipo: "itens", imagemUrl: abelhaImg, quantidade: 1, rotulo: "🤩" } },
      { pergunta: "Entrevista sem pergunta:", opcoes: ["Não é entrevista", "Está ótima", "Melhor"], correta: 0, explicacao: "Não é entrevista.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "❓" } },
    ],
  },

  proximaHabilidade: { codigo: "EF01LP25" },
};

export default aula;
