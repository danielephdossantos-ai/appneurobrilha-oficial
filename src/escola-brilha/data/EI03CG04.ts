import type { Aula } from "../types";
import { url as felizImg } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as maoImg } from "@/assets/neuro-treino/sentidos/mao.png.asset.json";
import { url as peImg } from "@/assets/neuro-treino/sentidos/pe.png.asset.json";
import { url as pernasCorrendoImg } from "@/assets/neuro-treino/sentidos/pernas-correndo.png.asset.json";
import { url as pesPulandoImg } from "@/assets/neuro-treino/sentidos/pes-pulando.png.asset.json";
import { url as cabecaImg } from "@/assets/neuro-treino/sentidos/cabeca.png.asset.json";

/**
 * EI03CG04 — Aula 4: Pulando, correndo, subindo
 * Padrão TRAVADO: só partes do corpo — pernas, pés, mãos.
 * Sem mascotes, sem pódio.
 */
const aula: Aula = {
  codigo: "EI03CG04",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Pulando, Correndo, Subindo",

  narrativa: {
    titulo: "A corrida do parque",
    contexto: "O parque abriu! Duas pernas dispararam correndo, dois pés pularam alto e duas mãos se agarraram numa árvore. Cada movimento usou uma parte do corpo.",
    problema: "A quarta estrela só acende quando a criança perceber que cada MOVIMENTO GRANDE precisa de força e cuidado.",
    convite: "Vamos brincar no parque descobrindo cada parte do corpo?",
  },

  conhecimentosPrevios: ["Sabe correr.", "Já subiu num degrau.", "Já pulou com os dois pés."],

  missao: "Aprender a usar o corpo com FORÇA e CUIDADO em brincadeiras que exigem correr, pular e subir.",

  objetivos: ["Controlar o corpo em movimentos grandes.", "Perceber o próprio limite (não se machucar)."],

  motivacao: "Quanto mais eu brinco, mais forte e ágil eu fico!",

  explicacao: "MOVIMENTOS GRANDES do corpo:\n\n• CORRER — as PERNAS trabalham rápido.\n• PULAR — os dois PÉS saem do chão juntos.\n• SUBIR — as MÃOS seguram, os pés empurram.\n• DESCER — devagar, com cuidado.\n\nCada movimento precisa de FORÇA (energia do corpo) e CUIDADO (pra não cair).",

  explicacaoAtiva: [
    { texto: "As pernas trabalham rápido quando a gente CORRE!", imagem: pernasCorrendoImg, imagemAlt: "Pernas correndo" },
    { texto: "Os dois pés saem do chão quando a gente PULA.", imagem: pesPulandoImg, imagemAlt: "Pés pulando" },
    { texto: "As mãos seguram forte quando a gente SOBE.", imagem: maoImg, imagemAlt: "Mão segurando", checagem: { pergunta: "Pra subir com segurança, o que precisa?", opcoes: ["Cuidado passo a passo", "Correr de olhos fechados"], correta: 0, explicacao: "Isso! Subir devagar é subir seguro." } }
  ],

  explicacoesNiveis: {
    nivel1: "Correr, pular e subir são movimentos grandes.",
    nivel2: "Pra pular a poça, os dois pés saem do chão juntos.",
    nivel3: "Pense no corpo como uma mola: dobra, junta força, dispara!",
    nivel4: "No parque, na escola, em casa — a gente treina o corpo brincando.",
  },

  exemploResolvido: {
    enunciado: "Vamos dar 4 pulos. Conte cada pé no ar!",
    passos: ["Toque no 1º pulo.", "Toque no 2º.", "3º e 4º — chegou!"],
    resposta: "4 pulos com os dois pés no ar.",
    interativo: { tipo: "contagem", imagemUrl: pesPulandoImg, quantidade: 4, nomeItem: "pulo", nomeItemPlural: "pulos", pergunta: "Quantos pulos os pés deram?" },
  },

  atividadeGuiada: {
    enunciado: "Qual parte do corpo trabalha mais pra CORRER? Toque na imagem certa.",
    resposta: "As pernas correm.",
    explicacao: "Pernas puxam o corpo pra frente rapidinho.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual parte do corpo corre?",
      opcoes: [
        { nome: "Pernas", imagemUrl: pernasCorrendoImg },
        { nome: "Mão", imagemUrl: maoImg },
        { nome: "Cabeça", imagemUrl: cabecaImg },
      ],
      respostaCerta: "Pernas",
    },
  },

  exercicios: [
    { enunciado: "🏃 Pra correr, quais partes trabalham mais?", resposta: "As pernas — mas o corpo todo ajuda.", dica: "Pensa em correndo agora." },
    { enunciado: "🦘 Quando pulo, quantos pés saem do chão?", resposta: "Os dois pés — junto.", dica: "Pula de mentirinha." },
    { enunciado: "🌳 Pra subir sem cair, o que preciso?", resposta: "Cuidado, mãos firmes e um pé de cada vez.", dica: "Devagar chega mais longe." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: três partes do corpo, três movimentos diferentes. Descubra qual faz o quê.",
    resposta: "Pernas correm, pés pulam, mãos seguram.",
    visual: {
      cena: [
        { personagem: "Pernas correndo", itemImagemUrl: pernasCorrendoImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Pés pulando", itemImagemUrl: pesPulandoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Mãos subindo", itemImagemUrl: maoImg, quantidade: 2, cor: "#60A5FA" },
      ],
      perguntas: [
        { pergunta: "Pra CORRER, qual parte trabalha mais?", opcoes: ["As pernas", "O nariz"], correta: 0, explicacao: "Correr é coisa de perna." },
        { pergunta: "Ao PULAR, quantos pés saem do chão?", opcoes: ["1", "2"], correta: 1, explicacao: "Os 2 pés." },
        { pergunta: "Pra SUBIR na árvore, quem segura?", opcoes: ["As mãos", "Os cabelos"], correta: 0, explicacao: "Mãos firmes seguram no galho." },
      ],
    },
  },

  revisao: {
    pontos: ["Correr, pular e subir são movimentos grandes.", "Cada parte do corpo faz um movimento.", "Cuidado protege o corpo.", "Brincar deixa o corpo forte."],
    dica: "Hoje: dê 5 pulinhos e conte junto.",
  },

  quiz: [
    { pergunta: "Pra PULAR, quantos pés saem do chão?", opcoes: ["1", "2"], correta: 1, explicacao: "Os 2 pés juntos.", visual: { tipo: "itens", imagemUrl: pesPulandoImg, quantidade: 1, rotulo: "Pés pulando" } },
    { pergunta: "Pra SUBIR sem cair, o que preciso?", opcoes: ["Cuidado", "Fechar os olhos"], correta: 0, explicacao: "Cuidado é o segredo.", visual: { tipo: "itens", imagemUrl: maoImg, quantidade: 2, rotulo: "Mãos firmes" } },
    { pergunta: "Qual parte trabalha pra CORRER?", opcoes: ["Pernas", "Orelhas"], correta: 0, explicacao: "Pernas correm.", visual: { tipo: "itens", imagemUrl: pernasCorrendoImg, quantidade: 1, rotulo: "Pernas correndo" } }
  ],

  conclusao: "🏅 Medalha: Aventureiro Ágil! A QUARTA ESTRELA ⭐ acendeu. Em Casa: brinque de pular corda ou dar 10 pulinhos.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Um sapo pula até 20 vezes o tamanho do corpo dele! Se você pulasse assim, chegaria no telhado de casa.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Pulos", instrucao: "Conte os pulos dos pés.", grupos: [{ imagemUrl: pesPulandoImg, quantidade: 3, rotulo: "Pulos" }], pergunta: "Quantos pulos?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 pulos!", erro: "Conte: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Partes que se movem", instrucao: "Toque em cada parte do corpo.", grupos: [{ imagemUrl: pernasCorrendoImg, quantidade: 1, rotulo: "Pernas" }, { imagemUrl: pesPulandoImg, quantidade: 1, rotulo: "Pés" }, { imagemUrl: maoImg, quantidade: 1, rotulo: "Mão" }, { imagemUrl: peImg, quantidade: 1, rotulo: "Pé" }], pergunta: "Quantas partes do corpo se mexem?", opcoes: ["3", "4", "5"], correta: 1, acerto: "4 partes!", erro: "Conte um por um." },
    { tipo: "ligar", titulo: "Fase 3 · Movimento certo", instrucao: "Ligue a parte ao movimento.", pares: [
      { a: "Pernas", b: "correm", aImagem: pernasCorrendoImg, aQuantidade: 1, bImagem: bolaImg, bQuantidade: 1 },
      { a: "Pés", b: "pulam", aImagem: pesPulandoImg, aQuantidade: 1, bImagem: bolaImg, bQuantidade: 1 },
      { a: "Mãos", b: "sobem na árvore", aImagem: maoImg, aQuantidade: 2, bImagem: arvoreImg, bQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Estrela pra cada parte forte", instrucao: "Dê 1 estrela pra cada parte do corpo.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "Pernas", cor: "#F472B6", capacidade: 1, imagemUrl: pernasCorrendoImg },
      { nome: "Pés", cor: "#FBBF24", capacidade: 1, imagemUrl: pesPulandoImg },
      { nome: "Mãos", cor: "#60A5FA", capacidade: 1, imagemUrl: maoImg },
    ], pares: [{ item: "E1", alvo: "Pernas" }, { item: "E2", alvo: "Pés" }, { item: "E3", alvo: "Mãos" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Correr usa o quê?", opcoes: ["Pernas", "Orelhas"], correta: 0, explicacao: "Pernas correm.", visual: { tipo: "itens", imagemUrl: pernasCorrendoImg, quantidade: 1, rotulo: "Pernas" } },
      { pergunta: "Pular usa quantos pés?", opcoes: ["1", "2"], correta: 1, explicacao: "Os 2.", visual: { tipo: "itens", imagemUrl: pesPulandoImg, quantidade: 1, rotulo: "Pés" } },
    ],
    medio: [
      { pergunta: "Subir precisa de…", opcoes: ["Cuidado", "Pressa"], correta: 0, explicacao: "Cuidado protege.", visual: { tipo: "itens", imagemUrl: maoImg, quantidade: 2, rotulo: "Mãos firmes" } },
      { pergunta: "Quem trabalha mais na corrida?", opcoes: ["Pernas e coração", "Só a mão"], correta: 0, explicacao: "Pernas e coração juntos.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração acelerado" } },
    ],
    dificil: [
      { pergunta: "Se eu não sei subir alto, o que faço?", opcoes: ["Peço ajuda", "Subo sozinho até cair"], correta: 0, explicacao: "Pedir ajuda é sabedoria.", visual: { tipo: "itens", imagemUrl: maoImg, quantidade: 1, rotulo: "Peço ajuda" } },
      { pergunta: "Depois de correr muito, o corpo pede…", opcoes: ["Descanso e água", "Correr mais"], correta: 0, explicacao: "Descanso repõe a energia.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Descansar" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03CG05", titulo: "Equilíbrio na floresta" },
};

void peImg; void cabecaImg;

export default aula;
