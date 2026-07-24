import type { Aula } from "../types";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as nuvemImg } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * EF01LP26 — Aula 026 · TEXTO COMPLETO COM TÍTULO
 * Fecha o Lote 6 e a reforma do 1º ano. Texto de 4-5 frases com título,
 * lido com fluência e compreensão.
 */
const aula: Aula = {
  codigo: "EF01LP26",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Meu Primeiro Texto de Verdade",
  narrativa: {
    titulo: "Meu Primeiro Texto de Verdade",
    contexto:
      "Brilha terminou a jornada: já lê sílabas, dígrafos, encontros consonantais. Hoje ele vai ler um TEXTO DE VERDADE — com TÍTULO e várias frases.",
    problema:
      "Um texto de verdade tem título (o que o texto vai contar), várias frases seguidas com sentido, e no fim quem lê ENTENDE o que aconteceu.",
    convite: "Bora ler seu primeiro texto de verdade?",
  },
  conhecimentosPrevios: [
    "Ler mini-textos com fluência (LP20).",
    "Dígrafos CH, LH, NH (LP21–LP23).",
    "Letras dobradas (LP24).",
    "Encontros consonantais (LP25).",
  ],
  missao: "Ler um texto de 4 frases COM TÍTULO, com fluência e responder perguntas de compreensão.",
  objetivos: [
    "Entender o papel do TÍTULO no texto.",
    "Ler 4 frases seguidas com pausas nos pontos.",
    "Responder perguntas de compreensão global.",
    "Perceber que agora ele lê SOZINHO.",
  ],
  motivacao: "Hoje é o dia do diploma: você virou leitor. Todo mundo do mundo lê pela primeira vez uma vez só.",
  explicacao:
    "📖 TEXTO DE HOJE:\n\n**O DIA DO SAPO**\n\nO SAPO ACORDA. ELE OLHA A LUA. O PATO CHEGA. O SAPO PULA COM O PATO.\n\n💡 O TÍTULO ('O DIA DO SAPO') conta rapidinho do que é o texto.\n💡 As frases contam a história em ordem: acordar → olhar → chegar → pular.\n💡 No fim, você entende: o sapo teve um dia bom com o pato.",
  explicacaoAtiva: [
    {
      texto: "TÍTULO = a chamada do texto, conta rapidinho do que fala.",
      exemplo: "'O DIA DO SAPO' — vai contar o dia dele.",
      imagem: sapoImg,
      imagemAlt: "Sapo",
      checagem: {
        pergunta: "Sobre quem é o texto?",
        opcoes: ["Sapo", "Gato", "Sol"],
        correta: 0,
        explicacao: "O título diz: O DIA DO SAPO.",
      },
    },
    {
      texto: "Cada frase conta 1 coisa que aconteceu.",
      exemplo: "1ª: acorda · 2ª: olha a lua · 3ª: pato chega · 4ª: pula junto.",
      imagem: luaImg,
      imagemAlt: "Lua",
      checagem: {
        pergunta: "O que o sapo faz na 2ª frase?",
        opcoes: ["Acorda", "Olha a lua", "Pula"],
        correta: 1,
        explicacao: "2ª: ELE OLHA A LUA.",
      },
    },
    {
      texto: "No fim do texto, pense: o que aconteceu no geral?",
      exemplo: "O sapo teve um dia bom, brincou com o pato.",
      imagem: patoImg,
      imagemAlt: "Pato",
      checagem: {
        pergunta: "Quem chegou pra brincar com o sapo?",
        opcoes: ["Pato", "Gato", "Nuvem"],
        correta: 0,
        explicacao: "3ª frase: O PATO CHEGA.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "Texto tem TÍTULO + frases seguidas.",
    nivel2: "Título = do que o texto fala.",
    nivel3: "Cada frase conta 1 ideia.",
    nivel4: "No fim, pense no sentido geral do texto.",
  },
  exemploResolvido: {
    enunciado: "Texto: 'O DIA DO SAPO. O SAPO ACORDA. ELE OLHA A LUA. O PATO CHEGA. O SAPO PULA COM O PATO.' Quem chega?",
    passos: [
      "Leio o título: O DIA DO SAPO.",
      "Leio as 4 frases com pausa nos pontos.",
      "3ª frase: O PATO CHEGA.",
      "Resposta: o pato. ✅",
    ],
    resposta: "O PATO.",
  },
  atividadeGuiada: {
    enunciado: "🔊 No texto 'O DIA DO SAPO', quem é o personagem principal?",
    resposta: "O SAPO.",
    explicacao: "Título diz 'O DIA DO SAPO'.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Personagem:",
      opcoes: [
        { nome: "sapo", imagemUrl: sapoImg },
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "sol", imagemUrl: solImg },
      ],
      respostaCerta: "sapo",
    },
  },
  exercicios: [
    { enunciado: "🔊 O que o SAPO faz na 1ª frase?", resposta: "ACORDA.", dica: "Início do dia." },
    { enunciado: "🔊 Quem chega no texto?", resposta: "O PATO.", dica: "3ª frase." },
    { enunciado: "🔊 O que os dois fazem no fim?", resposta: "PULAM JUNTOS.", dica: "Última frase." },
  ],
  desafio: {
    enunciado: "Desafio Brilha: ler o texto todo e responder 5 perguntas.",
    resposta: "Compreensão global.",
    visual: {
      cena: [
        { personagem: "1ª: ACORDA", itemImagemUrl: sapoImg, quantidade: 1, cor: "#22C55E" },
        { personagem: "2ª: OLHA A LUA", itemImagemUrl: luaImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "3ª: PATO CHEGA", itemImagemUrl: patoImg, quantidade: 1, cor: "#F59E0B" },
        { personagem: "4ª: PULA JUNTO", itemImagemUrl: sapoImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        { pergunta: "Título do texto?", opcoes: ["O DIA DO SAPO", "O SOL", "A CHUVA"], correta: 0, explicacao: "O DIA DO SAPO." },
        { pergunta: "Quem acorda?", opcoes: ["Sapo", "Pato"], correta: 0, explicacao: "1ª frase." },
        { pergunta: "O sapo olha…", opcoes: ["A lua", "O sol"], correta: 0, explicacao: "2ª frase: A LUA." },
        { pergunta: "Quem chega?", opcoes: ["Pato", "Gato"], correta: 0, explicacao: "3ª: O PATO CHEGA." },
        { pergunta: "No fim, o sapo…", opcoes: ["Pula com o pato", "Dorme"], correta: 0, explicacao: "4ª frase." },
      ],
    },
  },
  revisao: {
    pontos: [
      "Texto de verdade tem TÍTULO + frases.",
      "Título = do que fala o texto.",
      "Cada frase conta 1 ideia, em ordem.",
      "No fim, pense no sentido geral.",
      "Você virou LEITOR.",
    ],
    dica: "Antes de começar, leia o TÍTULO — ele conta rapidinho do que fala o texto.",
  },
  quiz: [
    { pergunta: "Título serve pra…", opcoes: ["Contar rapidinho do que fala", "Enfeitar só"], correta: 0, explicacao: "Do que fala." },
    { pergunta: "Texto com 4 frases tem…", opcoes: ["4 pontos", "1 ponto"], correta: 0, explicacao: "4 pontos." },
    { pergunta: "Quem é do texto 'O DIA DO SAPO'?", opcoes: ["Sapo (e pato)", "Só gato"], correta: 0, explicacao: "Sapo e pato." },
    { pergunta: "No fim quem lê deve…", opcoes: ["Entender o texto", "Esquecer"], correta: 0, explicacao: "Compreender." },
    { pergunta: "Você agora é…", opcoes: ["LEITOR", "Só ouvinte"], correta: 0, explicacao: "LEITOR!" },
  ],
  conclusao:
    "🏅🎉 MEDALHA DE OURO: LEITOR OFICIAL DO 1º ANO! Você fechou os 26 passos: fonemas, sílabas, palavras, frases, dígrafos, letras dobradas, encontros e — agora — um texto completo. Missão em Casa: leia esse texto pra alguém da família. Diga: 'HOJE EU VIREI LEITOR.'",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O cérebro que aprendeu a ler nunca mais volta a ser o mesmo. Você ganhou uma superpotência: pode aprender qualquer coisa lendo livros.",
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Título do texto",
      instrucao: "🔊 Qual é o título do texto de hoje?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "SAPO", imagemUrl: sapoImg, rotulo: "🐸 O DIA DO SAPO" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ O SOL" },
        { nome: "FLOR", imagemUrl: florImg, rotulo: "🌸 A FLOR" },
      ],
      correta: 0,
      acerto: "🐸 O DIA DO SAPO!",
      erro: "Título: O DIA DO SAPO.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Quantas frases?",
      instrucao: "🔊 O texto tem quantas frases?",
      grupos: [
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "1ª" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "2ª" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "3ª" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "4ª" },
      ],
      pergunta: "Quantas frases?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "4 frases — 4 pontos!",
      erro: "Conte os pontos: 4.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 3 · Ordem do texto",
      instrucao: "Ordene o que acontece com o sapo.",
      itens: ["O SAPO ACORDA.", "ELE OLHA A LUA.", "O PATO CHEGA.", "O SAPO PULA COM O PATO."],
      imagens: [
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "1ª" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "2ª" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "3ª" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "4ª" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Compreensão",
      instrucao: "🔊 Quem chega pra brincar com o sapo?",
      grupos: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
        { imagemUrl: nuvemImg, quantidade: 1, rotulo: "nuvem" },
      ],
      pergunta: "Quem?",
      opcoes: ["Pato", "Gato", "Nuvem"],
      correta: 0,
      acerto: "🦆 O PATO!",
      erro: "3ª frase: O PATO CHEGA.",
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Diploma",
      instrucao: "🔊 Você fechou o 1º ano de Português. O que você virou?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "LEITOR", imagemUrl: livroImg, rotulo: "📖 LEITOR" },
        { nome: "SÓ OUVINTE", imagemUrl: estrelaImg, rotulo: "👂 Só ouvinte" },
        { nome: "NENHUM", imagemUrl: coracaoImg, rotulo: "❌ Nenhum" },
      ],
      correta: 0,
      acerto: "📖🎉 VOCÊ É UM LEITOR!",
      erro: "Você é um LEITOR agora.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Título serve pra…", opcoes: ["Contar do que fala", "Enfeitar"], correta: 0, explicacao: "Do que fala.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📖" } },
      { pergunta: "Quem acorda no texto?", opcoes: ["Sapo", "Gato"], correta: 0, explicacao: "Sapo.", visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "🐸" } },
      { pergunta: "Quem chega?", opcoes: ["Pato", "Sol"], correta: 0, explicacao: "Pato.", visual: { tipo: "itens", imagemUrl: patoImg, quantidade: 1, rotulo: "🦆" } },
    ],
    medio: [
      { pergunta: "O sapo olha…", opcoes: ["A lua", "O sol"], correta: 0, explicacao: "A LUA.", visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "🌙" } },
      { pergunta: "Ordem: 1º", opcoes: ["Acorda", "Pula"], correta: 0, explicacao: "Acorda primeiro.", visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "1º" } },
      { pergunta: "Texto tem quantas frases?", opcoes: ["4", "2"], correta: 0, explicacao: "4 frases.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 4, rotulo: "•••• " } },
    ],
    dificil: [
      { pergunta: "No fim, quem lê deve…", opcoes: ["Compreender", "Esquecer"], correta: 0, explicacao: "Compreender.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "🧠" } },
      { pergunta: "Título ANTES ou DEPOIS do texto?", opcoes: ["Antes", "Depois"], correta: 0, explicacao: "Antes.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "⬆️" } },
      { pergunta: "Você agora é…", opcoes: ["LEITOR", "Só ouvinte"], correta: 0, explicacao: "LEITOR!", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "🏅" } },
    ],
  },
  proximaHabilidade: { codigo: "EF02LP01", titulo: "2º Ano — próxima aventura" },
};

export default aula;
