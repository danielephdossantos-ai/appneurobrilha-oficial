import type { Aula } from "../types";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as passaroImg } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as borboletaImg } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as abelhaImg } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lupaImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json"; // reuse
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP22 — Aula 022
 * BNCC: Planejar e produzir diagramas, entrevistas, curiosidades (gêneros investigativos).
 * Missão: "Os Detetives da Floresta".
 */
const aula: Aula = {
  codigo: "EF01LP22",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Os Detetives da Floresta",

  narrativa: {
    titulo: "Os Detetives da Floresta",
    contexto:
      "O Brilha virou detetive junto com a Coruja. Eles querem descobrir por que as borboletas voltam sempre à mesma flor.",
    problema:
      "Precisam ORGANIZAR o que descobriram: fazer um diagrama, uma entrevista e uma lista de curiosidades.",
    convite: "Bora ajudar os detetives a investigar e registrar tudo?",
  },

  conhecimentosPrevios: [
    "Escrever pequenas frases.",
    "Fazer listas (EF01LP17).",
    "Reconhecer perguntas e respostas.",
  ],

  missao:
    "Planejar e produzir textos investigativos simples: diagramas com partes, entrevistas com perguntas/respostas e listas de curiosidades.",

  objetivos: [
    "Perceber o que é uma pesquisa/investigação.",
    "Organizar informações em diagramas.",
    "Fazer perguntas de entrevista.",
    "Registrar curiosidades interessantes.",
  ],

  motivacao: "Todo bom detetive escreve tudo que descobre!",

  explicacao:
    "Textos investigativos ajudam a organizar descobertas:\n\n🧭 DIAGRAMA → desenho com partes ligadas (a flor tem pétala, caule, folha).\n🎤 ENTREVISTA → perguntas + respostas.\n💡 CURIOSIDADE → 'Você sabia que… a abelha visita mais de 100 flores por dia?'",

  explicacoesNiveis: {
    nivel1: "Investigar = descobrir e escrever.",
    nivel2: "Diagrama mostra as partes de algo.",
    nivel3: "Entrevista tem perguntas e respostas.",
    nivel4: "Curiosidades começam com 'Você sabia que…'.",
  },

  exemploResolvido: {
    enunciado: "Como descobrir o que a Coruja come?",
    passos: [
      "Faço uma ENTREVISTA.",
      "Pergunto: 'Coruja, o que você come?'",
      "Ela responde. Escrevo tudo.",
    ],
    resposta: "Faço uma ENTREVISTA. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque pra ouvir. Qual texto usa perguntas e respostas?",
    resposta: "ENTREVISTA.",
    explicacao: "Perguntas + respostas = entrevista.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Perguntas e respostas:",
      opcoes: [
        { nome: "entrevista", imagemUrl: corujaImg },
        { nome: "diagrama", imagemUrl: florImg },
        { nome: "curiosidade", imagemUrl: estrelaImg },
      ],
      respostaCerta: "entrevista",
    },
  },

  exercicios: [
    { enunciado: "Diagrama serve pra…", resposta: "MOSTRAR AS PARTES.", dica: "Partes ligadas por linhas." },
    { enunciado: "Curiosidade começa com…", resposta: "'Você sabia que…'.", dica: "Chama atenção." },
    { enunciado: "Entrevista tem…", resposta: "PERGUNTAS e RESPOSTAS.", dica: "Diálogo por escrito." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra qual texto usar em cada investigação.",
    resposta: "Cada texto tem seu jeito investigativo.",
    visual: {
      cena: [
        { personagem: "CORUJA", itemImagemUrl: corujaImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "FLOR", itemImagemUrl: florImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "ÁRVORE", itemImagemUrl: arvoreImg, quantidade: 1, cor: "#34D399" },
        { personagem: "BORBOLETA", itemImagemUrl: borboletaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "ABELHA", itemImagemUrl: abelhaImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        { pergunta: "Descobrir o que a coruja come:", opcoes: ["Entrevista", "Diagrama", "Aviso"], correta: 0, explicacao: "Perguntar = entrevista." },
        { pergunta: "Mostrar as partes de uma flor:", opcoes: ["Diagrama", "Convite", "Receita"], correta: 0, explicacao: "Diagrama de partes." },
        { pergunta: "Contar fato interessante:", opcoes: ["Curiosidade", "Aviso", "Lista"], correta: 0, explicacao: "Curiosidade." },
        { pergunta: "Curiosidade começa com:", opcoes: ["Você sabia que…", "Compre agora", "Boa noite"], correta: 0, explicacao: "Você sabia que…" },
        { pergunta: "Entrevista precisa de:", opcoes: ["Perguntas boas", "Só desenhos", "Cores fortes"], correta: 0, explicacao: "Perguntas boas." },
      ],
    },
  },

  revisao: {
    pontos: [
      "🧭 Diagrama = partes ligadas.",
      "🎤 Entrevista = perguntas e respostas.",
      "💡 Curiosidade = fato interessante.",
      "🔍 Investigar = descobrir + registrar.",
    ],
    dica: "Antes de investigar, pense: o que quero descobrir?",
  },

  quiz: [
    { pergunta: "Entrevista tem:", opcoes: ["Perguntas e respostas", "Só imagens", "Só título"], correta: 0, explicacao: "Perguntas + respostas." },
    { pergunta: "Diagrama:", opcoes: ["Mostra as partes", "Cantiga", "Convite"], correta: 0, explicacao: "Partes ligadas." },
    { pergunta: "Curiosidade começa com:", opcoes: ["Você sabia que…", "Compre já", "Chegou"], correta: 0, explicacao: "Você sabia que…" },
    { pergunta: "Investigar é:", opcoes: ["Descobrir e registrar", "Copiar", "Ficar parado"], correta: 0, explicacao: "Descobrir + registrar." },
    { pergunta: "Bom detetive:", opcoes: ["Anota tudo", "Esquece", "Não pergunta"], correta: 0, explicacao: "Anota tudo." },
  ],

  conclusao:
    "🏅 Medalha conquistada: Detetive da Floresta! Missão em Família: entrevistem alguém da casa com 3 perguntas e escrevam 1 curiosidade sobre o que descobriram.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Cientistas de verdade usam entrevistas, diagramas e curiosidades pra explicar suas descobertas ao mundo!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Perguntas e respostas",
      instrucao: "Toque pra ouvir. Qual texto usa perguntas e respostas?",
      pergunta: "Texto certo:",
      opcoes: [
        { nome: "ENTREVISTA", imagemUrl: corujaImg, rotulo: "🎤 ENTREVISTA" },
        { nome: "DIAGRAMA", imagemUrl: florImg, rotulo: "🧭 DIAGRAMA" },
        { nome: "CURIOSIDADE", imagemUrl: estrelaImg, rotulo: "💡 CURIOSIDADE" },
      ],
      correta: 0,
      acerto: "🎤 ENTREVISTA!",
      erro: "Perguntas + respostas = ENTREVISTA.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Partes da flor",
      instrucao: "Toque pra ouvir. Pra mostrar as partes da flor eu uso:",
      figura: { imagemUrl: florImg, rotulo: "🌸" },
      pergunta: "Escolha:",
      opcoes: ["DIAGRAMA", "CONVITE", "RECEITA"],
      correta: 0,
      acerto: "🧭 DIAGRAMA de partes!",
      erro: "Mostrar as partes = DIAGRAMA.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Fato interessante",
      instrucao: "Toque pra ouvir. Como começa uma curiosidade?",
      figura: { imagemUrl: estrelaImg, rotulo: "💡" },
      pergunta: "Escolha:",
      opcoes: ["Você sabia que…", "Compre já", "Boa noite"],
      correta: 0,
      acerto: "💡 'Você sabia que…' — clássico!",
      erro: "Curiosidade começa com 'Você sabia que…'",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Cada texto na sua investigação",
      instrucao: "Arraste cada situação pro tipo de texto.",
      pares: [
        { item: "Descobrir o que come a coruja", alvo: "ENTREVISTA" },
        { item: "Partes da flor", alvo: "DIAGRAMA" },
        { item: "Abelha visita 100 flores/dia", alvo: "CURIOSIDADE" },
      ],
      alvosVisuais: [
        { nome: "ENTREVISTA", cor: "#A78BFA", capacidade: 1 },
        { nome: "DIAGRAMA", cor: "#34D399", capacidade: 1 },
        { nome: "CURIOSIDADE", cor: "#FBBF24", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Investigação da Coruja",
      instrucao: "A Coruja quer descobrir por que a borboleta gosta da flor. O 1º passo é:",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "OBSERVAR", imagemUrl: lupaImg, rotulo: "🔍 Observar e anotar" },
        { nome: "GRITAR", imagemUrl: passaroImg, rotulo: "📣 Gritar" },
        { nome: "DORMIR", imagemUrl: solImg, rotulo: "😴 Dormir" },
      ],
      correta: 0,
      acerto: "🔍 Bom detetive observa e anota!",
      erro: "Investigar começa por OBSERVAR e anotar.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Entrevista:", opcoes: ["Perguntas e respostas", "Só título", "Só data"], correta: 0, explicacao: "Perguntas + respostas.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🎤" } },
      { pergunta: "Diagrama:", opcoes: ["Partes ligadas", "Cantiga", "Aviso"], correta: 0, explicacao: "Partes ligadas.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🧭" } },
      { pergunta: "Curiosidade:", opcoes: ["Fato interessante", "Regra", "Convite"], correta: 0, explicacao: "Fato interessante.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "💡" } },
    ],
    medio: [
      { pergunta: "Investigar é:", opcoes: ["Descobrir + anotar", "Copiar", "Nada"], correta: 0, explicacao: "Descobrir e anotar.", visual: { tipo: "itens", imagemUrl: lupaImg, quantidade: 1, rotulo: "🔍" } },
      { pergunta: "Boa pergunta:", opcoes: ["Clara e curta", "Confusa", "Sem sentido"], correta: 0, explicacao: "Clara e curta.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "❓" } },
      { pergunta: "Curiosidade começa com:", opcoes: ["Você sabia que…", "Adeus", "Vamos!"], correta: 0, explicacao: "Você sabia que…", visual: { tipo: "itens", imagemUrl: abelhaImg, quantidade: 1, rotulo: "💡" } },
    ],
    dificil: [
      { pergunta: "Diagrama liga:", opcoes: ["Parte com nome", "Fotos de amigos", "Cores"], correta: 0, explicacao: "Parte com nome.", visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" } },
      { pergunta: "Entrevistador é:", opcoes: ["Quem pergunta", "Quem responde", "Quem canta"], correta: 0, explicacao: "Quem pergunta.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🎙️" } },
      { pergunta: "Anotar tudo:", opcoes: ["Ajuda a lembrar", "Não serve", "Atrapalha"], correta: 0, explicacao: "Ajuda a lembrar.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📓" } },
    ],
  },

  proximaHabilidade: { codigo: "EF01LP23" },
};

export default aula;
