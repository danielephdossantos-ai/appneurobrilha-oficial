import type { Aula } from "../types";
import { url as meninoImg } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as criancasGrupoImg } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as pracaImg } from "@/assets/neuro-treino/objetos/praca.png.asset.json";
import { url as muralImg } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as museuImg } from "@/assets/neuro-treino/objetos/museu.png.asset.json";
import { url as artistaImg } from "@/assets/neuro-treino/objetos/artista.png.asset.json";
import { url as quadroImg } from "@/assets/neuro-treino/objetos/quadro.png.asset.json";
import { url as desenhoImg } from "@/assets/neuro-treino/objetos/desenho.png.asset.json";
import { url as colagemImg } from "@/assets/neuro-treino/objetos/colagem.png.asset.json";
import { url as paletaImg } from "@/assets/neuro-treino/objetos/paleta.png.asset.json";
import { url as pincelImg } from "@/assets/neuro-treino/objetos/pincel.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";

/**
 * EF15AR05 — Arte · 1º Ano (adaptado, código compartilhado 1º–5º)
 * Missão: "Arte Sozinho, Junto e Com Todo Mundo".
 * Experimentar criação em artes visuais individual, coletiva e colaborativa
 * em diferentes espaços (sala, escola, comunidade).
 */
const aula: Aula = {
  codigo: "EF15AR05",
  ano: "1º Ano",
  disciplina: "Arte",
  titulo: "Arte Sozinho, Junto e Com Todo Mundo",

  narrativa: {
    titulo: "Criar de Muitos Jeitos",
    contexto:
      "Brilha percebeu uma coisa: dá pra fazer arte SOZINHO no seu caderno, EM DUPLA com um amigo, ou GRANDE com a turma inteira pintando um mural na escola!",
    problema:
      "'Qual é o seu jeito favorito de criar?', perguntou Ana. 'Cada um tem um sabor diferente!'",
    convite: "Bora com o Brilha descobrir as três formas de fazer arte?",
  },

  conhecimentosPrevios: [
    "Já ter desenhado sozinho.",
    "Já ter brincado em grupo.",
  ],

  missao:
    "Experimentar a criação em artes visuais de modo individual, coletivo e colaborativo, em diferentes espaços da escola e da comunidade.",

  objetivos: [
    "Reconhecer a criação INDIVIDUAL (sozinho).",
    "Reconhecer a criação COLETIVA (em grupo).",
    "Reconhecer a criação COLABORATIVA (com a comunidade).",
    "Identificar espaços onde a arte acontece: sala, escola, praça, museu.",
  ],

  motivacao:
    "Arte é ainda mais legal quando a gente cria junto — cada um coloca um pedacinho seu!",

  explicacao:
    "🙋 INDIVIDUAL — você cria SOZINHO, do seu jeito.\n👫 COLETIVO — você cria COM A TURMA, todos juntos.\n🤝 COLABORATIVO — você cria COM A COMUNIDADE (família, bairro).\n🏫 Espaços: SALA, PÁTIO, ESCOLA, PRAÇA, MUSEU.",

  explicacoesNiveis: {
    nivel1: "Dá pra criar arte sozinho ou com outras pessoas.",
    nivel2: "Individual = 1 pessoa. Coletivo = a turma. Colaborativo = todo mundo ajuda.",
    nivel3: "A arte pode acontecer em muitos lugares, não só na sala.",
    nivel4: "Um mural na praça é uma obra COLABORATIVA da comunidade.",
  },

  exemploResolvido: {
    enunciado: "Toda a turma pintou um mural gigante juntos. Que tipo de criação é?",
    passos: [
      "Não é uma pessoa só → não é individual.",
      "A turma inteira participou → é coletiva.",
      "Cada um pintou uma parte.",
    ],
    resposta: "👫 CRIAÇÃO COLETIVA. ✅",
  },

  atividadeGuiada: {
    enunciado: "Toque na criação COLETIVA (em grupo).",
    resposta: "👫 O grupo de crianças — criando junto.",
    explicacao: "Coletivo = mais de uma pessoa criando.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual mostra criação COLETIVA?",
      opcoes: [
        { nome: "grupo", imagemUrl: criancasGrupoImg },
        { nome: "menino-sozinho", imagemUrl: meninoImg },
        { nome: "artista-sozinho", imagemUrl: artistaImg },
      ],
      respostaCerta: "grupo",
    },
  },

  exercicios: [
    {
      enunciado: "Uma criança desenhando sozinha é criação:",
      resposta: "🙋 INDIVIDUAL.",
      dica: "Uma pessoa só.",
    },
    {
      enunciado: "A turma pintando um mural junto é criação:",
      resposta: "👫 COLETIVA.",
      dica: "Grupo inteiro.",
    },
    {
      enunciado: "Onde acontece arte fora da sala?",
      resposta: "🏫 Pátio, escola, praça, museu.",
      dica: "Lugares abertos ou públicos.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra o tipo de criação!",
    resposta: "Cada jeito tem seu valor.",
    visual: {
      perguntas: [
        {
          pergunta: "Uma criança desenhando SOZINHA é:",
          opcoes: ["🙋 INDIVIDUAL", "👫 COLETIVA", "🤝 COLABORATIVA"],
          correta: 0,
          explicacao: "Sozinho = individual.",
          visual: { tipo: "itens", imagemUrl: meninoImg, quantidade: 1, rotulo: "🙋" },
        },
        {
          pergunta: "A TURMA pintando junto é:",
          opcoes: ["👫 COLETIVA", "🙋 INDIVIDUAL", "🎨 SÓ MENINO"],
          correta: 0,
          explicacao: "Turma = coletiva.",
          visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "👫" },
        },
        {
          pergunta: "Um mural na PRAÇA feito pela comunidade é:",
          opcoes: ["🤝 COLABORATIVA", "🙋 INDIVIDUAL", "🎨 PARTICULAR"],
          correta: 0,
          explicacao: "Comunidade toda = colaborativa.",
          visual: { tipo: "itens", imagemUrl: muralImg, quantidade: 1, rotulo: "🤝" },
        },
        {
          pergunta: "Onde a artista Ana guarda obras?",
          opcoes: ["🏛️ NO MUSEU", "🏫 NA COZINHA", "🚗 NO CARRO"],
          correta: 0,
          explicacao: "Museu guarda obras.",
          visual: { tipo: "itens", imagemUrl: museuImg, quantidade: 1, rotulo: "🏛️" },
        },
        {
          pergunta: "Um lugar aberto pra fazer arte fora da escola é:",
          opcoes: ["🌳 A PRAÇA", "🛏️ O QUARTO", "🚿 O BANHEIRO"],
          correta: 0,
          explicacao: "Praça é da comunidade.",
          visual: { tipo: "itens", imagemUrl: pracaImg, quantidade: 1, rotulo: "🌳" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🙋 INDIVIDUAL = 1 pessoa criando.",
      "👫 COLETIVA = grupo/turma criando junto.",
      "🤝 COLABORATIVA = comunidade toda criando.",
      "🏫 Arte acontece em: sala, escola, praça, museu.",
    ],
    dica: "Pergunte: quem criou? sozinho, em grupo ou com todo mundo?",
  },

  quiz: [
    {
      pergunta: "Uma criança desenhando sozinha é:",
      opcoes: ["Individual", "Coletiva", "Colaborativa"],
      correta: 0,
      explicacao: "1 pessoa = individual.",
      visual: { tipo: "itens", imagemUrl: meninoImg, quantidade: 1, rotulo: "🙋" },
    },
    {
      pergunta: "A turma pintando um cartaz juntos é:",
      opcoes: ["Coletiva", "Individual", "Nenhuma"],
      correta: 0,
      explicacao: "Turma = coletiva.",
      visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "👫" },
    },
    {
      pergunta: "Um mural feito pela comunidade da praça é:",
      opcoes: ["Colaborativa", "Individual", "Museu"],
      correta: 0,
      explicacao: "Comunidade = colaborativa.",
      visual: { tipo: "itens", imagemUrl: muralImg, quantidade: 1, rotulo: "🤝" },
    },
    {
      pergunta: "Onde a arte acontece fora da sala de aula?",
      opcoes: ["Pátio, praça, museu", "Só na sala", "Só na TV"],
      correta: 0,
      explicacao: "Muitos espaços recebem arte.",
      visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
    },
    {
      pergunta: "Fazer arte JUNTO é melhor porque:",
      opcoes: ["Cada um coloca um pedacinho seu", "Ninguém ajuda", "É proibido"],
      correta: 0,
      explicacao: "Coletivo une várias ideias.",
      visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "❤️" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Criador em Equipe! 🎁 Item desbloqueado: 🤝 Aperto de Mão. Missão em Família: façam UM desenho JUNTOS — cada pessoa desenha uma parte diferente!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Existem MURAIS gigantes feitos por MUITOS artistas juntos — alguns têm mais de 100 metros de largura!",
  },

  interativas: [
    // FASE 1 — Individual
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Criação Individual",
      instrucao: "Toque em quem cria SOZINHO.",
      pergunta: "Qual mostra criação INDIVIDUAL?",
      opcoes: [
        { nome: "MENINO", imagemUrl: meninoImg, rotulo: "🙋 SOZINHO" },
        { nome: "GRUPO", imagemUrl: criancasGrupoImg, rotulo: "👫 GRUPO" },
        { nome: "MURAL", imagemUrl: muralImg, rotulo: "🤝 MURAL" },
      ],
      correta: 0,
      acerto: "🙋 Isso! Uma pessoa sozinha = individual.",
      erro: "Procure UMA pessoa só.",
    },

    // FASE 2 — Coletiva
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Criação Coletiva",
      instrucao: "Toque em quem cria EM GRUPO.",
      pergunta: "Qual mostra criação COLETIVA?",
      opcoes: [
        { nome: "GRUPO", imagemUrl: criancasGrupoImg, rotulo: "👫 GRUPO" },
        { nome: "MENINA", imagemUrl: meninaImg, rotulo: "🙋 SOZINHA" },
        { nome: "ARTISTA", imagemUrl: artistaImg, rotulo: "🎨 ARTISTA SÓ" },
      ],
      correta: 0,
      acerto: "👫 Isso! Turma junta = coletiva.",
      erro: "Procure o grupo de crianças.",
    },

    // FASE 3 — Arrastar: 3 tipos de criação
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Cada Um No Seu Grupo",
      instrucao: "Arraste cada cena pro tipo de criação certo.",
      pares: [
        { item: "🙋 MENINO DESENHANDO", alvo: "INDIVIDUAL" },
        { item: "🎨 ARTISTA SÓ", alvo: "INDIVIDUAL" },
        { item: "👫 TURMA JUNTA", alvo: "COLETIVA" },
        { item: "🖼️ QUADRO EM GRUPO", alvo: "COLETIVA" },
        { item: "🤝 MURAL DA PRAÇA", alvo: "COLABORATIVA" },
        { item: "🏛️ OBRA DO MUSEU COM TODOS", alvo: "COLABORATIVA" },
      ],
      alvosVisuais: [
        { nome: "INDIVIDUAL", cor: "#F472B6", capacidade: 2 },
        { nome: "COLETIVA", cor: "#34D399", capacidade: 2 },
        { nome: "COLABORATIVA", cor: "#FBBF24", capacidade: 2 },
      ],
    },

    // FASE 4 — Lupa: espaços da arte
    {
      tipo: "lupa",
      titulo: "Fase 4 · Espaços da Arte",
      instrucao: "Toque em cada lugar e descubra como se cria arte ali.",
      itens: [
        {
          nome: "Sala/Menino",
          imagemUrl: meninoImg,
          rotulo: "🙋 INDIVIDUAL",
          descoberta:
            "SOZINHO — você cria no seu caderno, do seu jeito. É livre pra escolher tudo!",
        },
        {
          nome: "Menina desenhando",
          imagemUrl: meninaImg,
          rotulo: "🎨 INDIVIDUAL",
          descoberta:
            "SOZINHA — a menina escolhe cores e figuras dela mesma. Cada obra é única!",
        },
        {
          nome: "Turma",
          imagemUrl: criancasGrupoImg,
          rotulo: "👫 COLETIVA",
          descoberta:
            "COM A TURMA — cada um pinta uma parte. Um cartaz coletivo tem várias mãos.",
        },
        {
          nome: "Escola",
          imagemUrl: escolaImg,
          rotulo: "🏫 ESCOLA",
          descoberta:
            "NA ESCOLA — na sala, no pátio, nas paredes. A escola inteira vira ateliê!",
        },
        {
          nome: "Praça",
          imagemUrl: pracaImg,
          rotulo: "🌳 PRAÇA",
          descoberta:
            "NA PRAÇA — arte da comunidade! Todo mundo do bairro pode ajudar a pintar.",
        },
        {
          nome: "Mural",
          imagemUrl: muralImg,
          rotulo: "🤝 MURAL",
          descoberta:
            "MURAL — obra GIGANTE feita por muitas pessoas juntas na parede. É colaborativa.",
        },
        {
          nome: "Museu",
          imagemUrl: museuImg,
          rotulo: "🏛️ MUSEU",
          descoberta:
            "MUSEU — lugar que guarda obras pra todos verem. Também recebe oficinas coletivas!",
        },
      ],
      acerto: "🔬 Descoberta feita! Você conhece todos os espaços.",
    },

    // FASE 5 — Selecionar tudo que é criação EM GRUPO
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Detetive do Grupo",
      instrucao: "Marque TUDO que mostra criação EM GRUPO (coletiva ou colaborativa).",
      criterio: "É em GRUPO 👫",
      opcoes: [
        { nome: "Turma", imagemUrl: criancasGrupoImg, rotulo: "👫 TURMA", correto: true },
        { nome: "Mural", imagemUrl: muralImg, rotulo: "🤝 MURAL", correto: true },
        { nome: "Menino sozinho", imagemUrl: meninoImg, rotulo: "🙋 MENINO", correto: false },
        { nome: "Menina sozinha", imagemUrl: meninaImg, rotulo: "🙋 MENINA", correto: false },
        { nome: "Artista só", imagemUrl: artistaImg, rotulo: "🎨 ARTISTA", correto: false },
      ],
      acerto: "🕵️ Detetive do grupo! Você achou todas.",
      erro: "Grupo = mais de uma pessoa criando junto.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "1 criança desenhando é criação:",
        opcoes: ["Individual", "Coletiva", "Colaborativa"],
        correta: 0,
        explicacao: "1 = individual.",
        visual: { tipo: "itens", imagemUrl: meninoImg, quantidade: 1, rotulo: "🙋" },
      },
      {
        pergunta: "A turma pintando junto é:",
        opcoes: ["Coletiva", "Individual", "Só do professor"],
        correta: 0,
        explicacao: "Turma junta = coletiva.",
        visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "👫" },
      },
      {
        pergunta: "Um mural feito por muita gente é:",
        opcoes: ["Colaborativa", "Individual", "Nada"],
        correta: 0,
        explicacao: "Muita gente = colaborativa.",
        visual: { tipo: "itens", imagemUrl: muralImg, quantidade: 1, rotulo: "🤝" },
      },
    ],
    medio: [
      {
        pergunta: "Onde a comunidade pode fazer arte junta?",
        opcoes: ["Na praça", "No armário", "No fogão"],
        correta: 0,
        explicacao: "Praça = espaço da comunidade.",
        visual: { tipo: "itens", imagemUrl: pracaImg, quantidade: 1, rotulo: "🌳" },
      },
      {
        pergunta: "Onde guardamos obras pra todos verem?",
        opcoes: ["No museu", "No banheiro", "Na geladeira"],
        correta: 0,
        explicacao: "Museu guarda obras.",
        visual: { tipo: "itens", imagemUrl: museuImg, quantidade: 1, rotulo: "🏛️" },
      },
      {
        pergunta: "Fazer arte em GRUPO é bom porque:",
        opcoes: ["Une várias ideias", "Ninguém trabalha", "É triste"],
        correta: 0,
        explicacao: "Grupo = mais ideias.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "❤️" },
      },
    ],
    dificil: [
      {
        pergunta: "Individual, coletiva e colaborativa: quantas formas de criar?",
        opcoes: ["Três", "Uma", "Dez"],
        correta: 0,
        explicacao: "3 formas.",
        visual: { tipo: "itens", imagemUrl: paletaImg, quantidade: 1, rotulo: "🎨" },
      },
      {
        pergunta: "Um cartaz feito pela turma inteira é:",
        opcoes: ["Coletiva", "Individual", "Colaborativa da cidade"],
        correta: 0,
        explicacao: "Turma = coletiva.",
        visual: { tipo: "itens", imagemUrl: quadroImg, quantidade: 1, rotulo: "🖼️" },
      },
      {
        pergunta: "Uma obra criada por artistas + moradores do bairro é:",
        opcoes: ["Colaborativa", "Individual", "Nenhuma"],
        correta: 0,
        explicacao: "Comunidade + artistas = colaborativa.",
        visual: { tipo: "itens", imagemUrl: muralImg, quantidade: 1, rotulo: "🤝" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica das Criações",
    objetivo:
      "As cenas passam na esteira. Toque na bandeja certa (Individual, Coletiva ou Espaço Público) antes que caiam!",
    tempoSegundos: 90,
    minAcertos: 10,
    categorias: [
      { nome: "INDIVIDUAL", cor: "#F472B6", emoji: "🙋" },
      { nome: "COLETIVA", cor: "#34D399", emoji: "👫" },
      { nome: "ESPAÇO PÚBLICO", cor: "#FBBF24", emoji: "🏛️" },
    ],
    objetos: [
      { nome: "Menino sozinho", imagemUrl: meninoImg, categoria: "INDIVIDUAL" },
      { nome: "Menina sozinha", imagemUrl: meninaImg, categoria: "INDIVIDUAL" },
      { nome: "Artista só", imagemUrl: artistaImg, categoria: "INDIVIDUAL" },
      { nome: "Desenho individual", imagemUrl: desenhoImg, categoria: "INDIVIDUAL" },
      { nome: "Turma", imagemUrl: criancasGrupoImg, categoria: "COLETIVA" },
      { nome: "Colagem em grupo", imagemUrl: colagemImg, categoria: "COLETIVA" },
      { nome: "Quadro da turma", imagemUrl: quadroImg, categoria: "COLETIVA" },
      { nome: "Pincel compartilhado", imagemUrl: pincelImg, categoria: "COLETIVA" },
      { nome: "Escola", imagemUrl: escolaImg, categoria: "ESPAÇO PÚBLICO" },
      { nome: "Praça", imagemUrl: pracaImg, categoria: "ESPAÇO PÚBLICO" },
      { nome: "Museu", imagemUrl: museuImg, categoria: "ESPAÇO PÚBLICO" },
      { nome: "Mural", imagemUrl: muralImg, categoria: "ESPAÇO PÚBLICO" },
    ],
    acerto: "🏭 Fábrica das criações completa!",
  },

  missaoFamilia: {
    titulo: "Desenho em Família",
    instrucao:
      "Peguem UMA folha grande. Cada pessoa da família desenha UMA parte (uma pinta o céu, outra as flores, outra a casa). No final, mostrem pro Brilha essa obra COLETIVA!",
  },
};

export default aula;
