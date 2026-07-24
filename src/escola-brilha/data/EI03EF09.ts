import type { Aula } from "../types";
import { url as lapisImg } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as papelImg } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as meninoImg } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";

/**
 * EI03EF09 — Pré II · Reconhecer o próprio nome (escrita espontânea)
 * Pedagogia: o NOME é a primeira palavra estável (Emília Ferreiro).
 * Reconhecer, tentar escrever e diferenciar o próprio nome de outros é
 * o marco de entrada no universo alfabético. É onde se descobre que se
 * escreve o que se fala e que cada pessoa tem SUA palavra.
 */
const aula: Aula = {
  codigo: "EI03EF09",
  ano: "Educação Infantil",
  disciplina: "Português",
  titulo: "Meu Nome",

  narrativa: {
    titulo: "A etiqueta mágica",
    contexto: "A professora colocou uma ETIQUETA com o nome de cada criança na mochila. O Brilha viu o dele: B-R-I-L-H-A. Ele repetiu apontando: 'Esse aqui sou EU!'",
    problema: "Agora ele quer ESCREVER o próprio nome — e reconhecer quando ele aparece em outro lugar.",
    convite: "Bora descobrir seu nome e tentar escrevê-lo?",
  },

  conhecimentosPrevios: ["Já ouviu o próprio nome sendo chamado.", "Reconhece letras nas coisas.", "Faz rabiscos."],

  missao: "Descobrir que o SEU NOME tem letras próprias — e treinar a reconhecer e escrever ele.",

  objetivos: [
    "Reconhecer o próprio nome escrito entre outros nomes.",
    "Identificar a LETRA INICIAL do próprio nome.",
    "Tentar escrever o próprio nome (escrita espontânea).",
  ],

  explicacao:
    "Cada pessoa tem um NOME. E cada nome é escrito com LETRAS específicas.\n\n• Seu nome começa com uma LETRA especial — é a inicial.\n• As letras do seu nome ficam sempre na MESMA ORDEM.\n• Você pode aprender a reconhecer o seu nome escrito ANTES de saber ler outras palavras.\n\nO nome é a PRIMEIRA palavra que a gente aprende — porque é NOSSA.",

  explicacaoAtiva: [
    { texto: "Cada criança tem uma etiqueta com o NOME dela na mochila.", imagem: papelImg, imagemAlt: "Etiqueta" },
    { texto: "Você olha e reconhece: essa etiqueta é MINHA porque a primeira letra é a MINHA.", imagem: meninaImg, imagemAlt: "Menina" },
    {
      texto: "Depois tenta ESCREVER seu nome, do seu jeito, com lápis.",
      imagem: lapisImg,
      imagemAlt: "Lápis",
      checagem: {
        pergunta: "O que a gente aprende a escrever PRIMEIRO?",
        opcoes: ["O próprio nome", "Todas as palavras do dicionário"],
        correta: 0,
        explicacao: "Nome é a primeira palavra.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Meu nome é meu.",
    nivel2: "Meu nome começa com uma letra inicial especial.",
    nivel3: "Antes de ler outras palavras, eu já reconheço o meu nome.",
    nivel4: "Escrever o próprio nome é o primeiro passo pra ler o mundo.",
  },

  exemploResolvido: {
    enunciado: "MARIA e MATEUS. Qual é o nome da Maria?",
    passos: [
      "Ambos começam com M.",
      "Mas MARIA tem A-R-I-A depois.",
      "MATEUS tem A-T-E-U-S.",
      "A Maria escolhe: 'MARIA — sou eu!'",
    ],
    resposta: "MARIA — porque as letras seguintes batem com o nome dela.",
    interativo: { tipo: "contagem", imagemUrl: estrelaImg, quantidade: 5, nomeItem: "letra", nomeItemPlural: "letras", pergunta: "Quantas letras tem o nome MARIA?" },
  },

  atividadeGuiada: {
    enunciado: "Você reconhece o próprio nome. É importante ou não?",
    resposta: "É muito importante — o nome é a primeira palavra que a gente domina.",
    explicacao: "Reconhecer o nome é o passe de entrada no mundo da leitura.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Pra escrever meu nome, uso…?",
      opcoes: [
        { nome: "Lápis", imagemUrl: lapisImg },
        { nome: "Coração", imagemUrl: coracaoImg },
        { nome: "Livro", imagemUrl: livroImg },
      ],
      respostaCerta: "Lápis",
    },
  },

  exercicios: [
    { enunciado: "Meu nome começa com qual letra?", resposta: "A LETRA INICIAL (varia por criança).", dica: "É a primeira." },
    { enunciado: "As letras do meu nome ficam sempre iguais ou mudam?", resposta: "Iguais — na mesma ordem.", dica: "Nome não muda a ordem." },
    { enunciado: "Escrever meu nome eu posso?", resposta: "Sim, do meu jeito primeiro.", dica: "Escrita espontânea vale." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descobrir informações sobre o próprio nome.",
    resposta: "Cada nome é único.",
    visual: {
      cena: [
        { personagem: "Menino", itemImagemUrl: meninoImg, quantidade: 1, cor: "#4C9EFF" },
        { personagem: "Menina", itemImagemUrl: meninaImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Estrela do nome", itemImagemUrl: estrelaImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        { pergunta: "O NOME de cada pessoa é…?", opcoes: ["Único", "Igual pra todo mundo"], correta: 0, explicacao: "Cada pessoa tem o seu." },
        { pergunta: "Meu nome tem sempre as MESMAS letras?", opcoes: ["Sim, na mesma ordem", "Não, muda todo dia"], correta: 0, explicacao: "Ordem fixa." },
        { pergunta: "A primeira letra do meu nome é a…?", opcoes: ["Inicial", "Final"], correta: 0, explicacao: "Inicial vem primeiro." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Meu nome é a primeira palavra que domino.",
      "Ele começa com uma letra INICIAL.",
      "As letras ficam sempre na mesma ordem.",
      "Reconhecer e escrever o nome = entrada na alfabetização.",
    ],
    dica: "Em casa: escreva seu nome com o lápis, pinte com giz, faça com massinha. Nome vira arte.",
  },

  quiz: [
    { pergunta: "Meu nome tem letras em ordem…?", opcoes: ["Sempre a mesma", "Diferente todo dia"], correta: 0, explicacao: "Nome não muda.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Nome fixo" } },
    { pergunta: "A primeira letra chama-se…?", opcoes: ["Inicial", "Final"], correta: 0, explicacao: "Inicial abre o nome.", visual: { tipo: "itens", imagemUrl: lapisImg, quantidade: 1, rotulo: "Escrever" } },
    { pergunta: "Escrever meu nome do MEU jeito vale?", opcoes: ["Sim, é escrita espontânea", "Não"], correta: 0, explicacao: "Vale — aos poucos fica certinho.", visual: { tipo: "itens", imagemUrl: papelImg, quantidade: 1, rotulo: "Papel" } },
  ],

  conclusao: "🏅 Você DOMINOU seu NOME! Diploma de PRÉ-LEITOR desbloqueado. Missão em Casa: escreva seu nome em 3 papéis diferentes e espalhe pela casa — todo mundo vai saber que é SEU.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Cada nome no mundo é uma história — foi escolhido por alguém que ama você. Reconhecer o nome é reconhecer que você EXISTE nas letras.",
    imagemUrl: coracaoImg,
  },

  interativas: [
    {
      tipo: "ordenar",
      titulo: "Fase 1 · Pra escrever meu nome",
      instrucao: "Ordem certa.",
      itens: ["Pego o lápis", "Olho a etiqueta do meu nome", "Copio as letras", "Mostro pra família"],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · O nome é meu",
      instrucao: "Escolha.",
      grupos: [{ imagemUrl: estrelaImg, quantidade: 1, rotulo: "Meu nome" }],
      pergunta: "Reconhecer meu nome é o começo de…",
      opcoes: ["Ler o mundo", "Não é nada"],
      correta: 0,
      acerto: "Isso! Primeiro passo do leitor.",
      erro: "É sim — o nome é a chave.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Cada pessoa tem um nome?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Todo mundo tem.", visual: { tipo: "itens", imagemUrl: meninoImg, quantidade: 1, rotulo: "Menino" } },
    ],
    medio: [
      { pergunta: "A ordem das letras do meu nome muda?", opcoes: ["Não, sempre igual", "Sim"], correta: 0, explicacao: "Nome tem ordem fixa.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Letras fixas" } },
    ],
    dificil: [
      { pergunta: "Escrita espontânea do meu nome…", opcoes: ["Vale — é o começo", "Não vale nada"], correta: 0, explicacao: "É o começo da alfabetização.", visual: { tipo: "itens", imagemUrl: lapisImg, quantidade: 1, rotulo: "Lápis" } },
    ],
  },
};

export default aula;
