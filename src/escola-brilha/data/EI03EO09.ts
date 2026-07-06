import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tristeImg from "@/assets/brilha-vida/emocoes/triste.png";
import bravoImg from "@/assets/brilha-vida/emocoes/bravo.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";

/**
 * EI03EO09 — Mundo 1 · Amigos da Floresta Encantada
 * Educação Infantil · Campo O Eu, o Outro e o Nós
 * Tema: "Trabalhar em Grupo" — spec EI-01 do usuário.
 * Estrela: ⭐ Participação.
 * Padrão TRAVADO EF01MA02 / EI03EO01 (visual, sem texto pra ler).
 */
const aula: Aula = {
  codigo: "EI03EO09",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Trabalhar em Grupo",

  narrativa: {
    titulo: "Trabalhar em Grupo",
    contexto: "A Floresta quer construir uma ponte nova pro rio. Sozinho, nenhum bichinho consegue. A Coruja Sábia bate palma: 'JUNTOS a gente consegue!' Cada um faz um pedaço.",
    problema: "Uma coisa grande é difícil sozinho. Como o GRUPO pode ajudar?",
    convite: "Bora construir juntos!",
  },

  conhecimentosPrevios: [
    "Reconhecer o próprio nome quando alguém chama.",
    "Nomear alguém de quem gosta.",
    "Apontar carinhas de sentimento simples.",
  ],

  missao: "Descobrir que EM GRUPO a gente faz coisas que sozinho não daria conta.",

  objetivos: [
    "Reconhecer o tema 'Trabalhar em Grupo' no dia a dia.",
    "Praticar a atitude em cenas com os amigos da floresta.",
  ],

  motivacao: "Uma mãozinha ajuda. Muitas mãozinhas CONSTROEM.",

  explicacao: "EM GRUPO a gente:\n\n• DIVIDE a tarefa em pedaços.\n• CADA UM faz uma parte.\n• AJUDA o amigo que trava.\n• COMEMORA junto quando termina.\n\nParticipar = fazer a MINHA parte pro grupo.",

  explicacaoAtiva: [
    { texto: "Oi! O Brilha voltou. Toque nele!", imagem: brilhaImg, imagemAlt: "Brilha" },
    { texto: "A Coruja Sábia tem uma missão nova pra hoje.", imagem: corujaImg, imagemAlt: "Coruja Sábia" },
    { texto: "O Lupi e a Fifi vão brincar junto com você.", imagem: lupiImg, imagemAlt: "Lupi" },
    {
      texto: "Bora começar? Toque na Fifi pra ir junto!",
      imagem: fifiImg,
      imagemAlt: "Fifi",
      checagem: {
        pergunta: "Você tá pronto pra aprender sobre Trabalhar em Grupo?",
        opcoes: ["Sim, bora!", "Ainda não"],
        correta: 0,
        explicacao: "Isso! Bora acender mais uma estrela.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Trabalhar em Grupo é uma atitude boa que a gente pratica todo dia.",
    nivel2: "Os amigos da floresta mostram cenas de trabalhar em grupo — a gente aprende junto.",
    nivel3: "Praticar trabalhar em grupo deixa a floresta (e a gente) mais feliz.",
    nivel4: "Em casa, você pode praticar trabalhar em grupo com a família também.",
  },

  exemploResolvido: {
    enunciado: "A Coruja Sábia mostra 1 estrela apagada. Quantas estrelas faltam acender pra completar trabalhar em grupo?",
    passos: [
      "Toque na estrela apagada.",
      "Repita: 'vou acender!'",
      "Cada boa atitude acende UMA estrela.",
    ],
    resposta: "1 estrela — e ela vai acender no final da missão.",
    interativo: {
      tipo: "contagem",
      imagemUrl: estrelaImg,
      quantidade: 1,
      nomeItem: "estrela",
      nomeItemPlural: "estrelas",
      pergunta: "Quantas estrelas vamos acender nesta missão?",
    },
  },

  atividadeGuiada: {
    enunciado: "3 amigos aparecem pra praticar trabalhar em grupo. Quantos amigos você vê?",
    resposta: "3 amigos — todos participando juntos.",
    explicacao: "Cada amigo mostra um jeito diferente de viver trabalhar em grupo.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada amigo. Quem está no meio (2º)?",
      participantes: [
        { nome: "Brilha", imagemUrl: brilhaImg, posicao: 1 },
        { nome: "Lupi", imagemUrl: lupiImg, posicao: 2 },
        { nome: "Fifi", imagemUrl: fifiImg, posicao: 3 },
      ],
      respostaCerta: "Lupi",
    },
  },

  exercicios: [
    { enunciado: "⭐ Por que a gente pratica trabalhar em grupo?", resposta: "Uma mãozinha ajuda. Muitas mãozinhas CONSTROEM.", dica: "Pensa em como o coração fica." },
    { enunciado: "🐰 O Lupi tá aprendendo. Como você ajuda?", resposta: "Mostrando o exemplo com carinho.", dica: "Ensinar é ajudar." },
    { enunciado: "🦉 A Coruja pergunta: onde você pode praticar isso?", resposta: "Em casa, na escola, no parque — em todo lugar.", dica: "Todo dia tem chance." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 cenas mostram trabalhar em grupo. Responda cada uma!",
    resposta: "Cada cena tem um jeito diferente da atitude — todas valem.",
    visual: {
      cena: [
        { personagem: "Brilha na cena 1", itemImagemUrl: brilhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi na cena 2", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fifi na cena 3", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" },
      ],
      perguntas: [
        { pergunta: "O Brilha faz uma atitude boa. Isso é praticar trabalhar em grupo?", opcoes: ["Sim!", "Não"], correta: 0, explicacao: "Isso! Toda atitude boa conta." },
        { pergunta: "O Lupi ajuda o amigo. Isso é bom?", opcoes: ["Sim, muito bom", "Não"], correta: 0, explicacao: "Ajudar é sempre bom." },
        { pergunta: "A Fifi divide o brinquedo. E aí?", opcoes: ["Ela é generosa", "Ela é egoísta"], correta: 0, explicacao: "Dividir é generoso." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Trabalhar em Grupo é uma atitude BOA da floresta.",
      "A gente pratica no dia a dia com amigos e família.",
      "Cada boa atitude acende uma estrela.",
      "Quando todos praticam, a floresta brilha!",
    ],
    dica: "Hoje, pratique trabalhar em grupo com alguém da sua casa.",
  },

  quiz: [
    {
      pergunta: "Praticar trabalhar em grupo deixa a gente:",
      opcoes: ["Mais feliz", "Mais triste"],
      correta: 0,
      explicacao: "Mais feliz! Boa atitude acende o coração.",
      visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração feliz" },
    },
    {
      pergunta: "Quantos amigos da floresta apareceram na missão?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      explicacao: "Brilha, Lupi e Fifi — 3 amigos.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha", cor: "#FBBF24" },
          { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" },
          { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FB923C" },
        ],
      },
    },
    {
      pergunta: "Quantas estrelas acendemos ao terminar?",
      opcoes: ["Nenhuma", "1", "Muitas"],
      correta: 1,
      explicacao: "1 estrela — a estrela Participação!",
      visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Estrela Participação" },
    },
  ],

  conclusao: "🏅 Medalha: Guardião da Participação! ⭐ Estrela Participação ACESA na Árvore da Amizade. Missão em Casa: pratique trabalhar em grupo com alguém da família hoje. +100 XP · +50 moedas.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Cada vez que a gente pratica uma boa atitude, uma pequena luz acende no coração — e no cérebro também! Isso é ciência de verdade.",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Boas-vindas do Brilha",
      instrucao: "O Brilha veio te receber. Toque nele!",
      grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }],
      pergunta: "Quantos Brilhas apareceram?",
      opcoes: ["1", "2", "3"],
      correta: 0,
      acerto: "Isso! Um Brilha lindo pra começar.",
      erro: "Toque bem no meio da estrela.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Os amigos da floresta",
      instrucao: "Toque em cada amigo pra contar.",
      grupos: [
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" },
        { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" },
        { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
        { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" },
      ],
      pergunta: "Quantos amigos apareceram?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "4 amigos, cada um do seu jeito!",
      erro: "Aponte um por um.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Cada amigo com seu par",
      instrucao: "Ligue cada amigo ao objeto que combina.",
      pares: [
        { a: "Brilha", b: "estrela", aImagem: brilhaImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
        { a: "Lupi", b: "flor", aImagem: lupiImg, aQuantidade: 1, bImagem: flor, bQuantidade: 1 },
        { a: "Téo", b: "coração", aImagem: teoImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Carinhas de sentimento",
      instrucao: "Quantas carinhas de sentimento aparecem?",
      grupos: [
        { imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
        { imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" },
        { imagemUrl: bravoImg, quantidade: 1, rotulo: "Bravo" },
        { imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Calmo" },
      ],
      pergunta: "Quantas carinhas?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "4 sentimentos — todos valem!",
      erro: "Conte de novo, uma a uma.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Presente pra cada amigo",
      instrucao: "Cada amigo ganha 1 balão. Toque no balão e depois no amigo.",
      itemImagem: balaoImg,
      alvosVisuais: [
        { nome: "Brilha", cor: "#FBBF24", capacidade: 1, imagemUrl: brilhaImg },
        { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg },
        { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg },
        { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg },
      ],
      pares: [
        { item: "Balão 1", alvo: "Brilha" },
        { item: "Balão 2", alvo: "Lupi" },
        { item: "Balão 3", alvo: "Fifi" },
        { item: "Balão 4", alvo: "Téo" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Minijogo · Amigo e o que ele leva",
      instrucao: "Ligue cada amigo ao objeto da cena.",
      pares: [
        { a: "Brilha vai pra casa", b: "casa", aImagem: brilhaImg, aQuantidade: 1, bImagem: casaImg, bQuantidade: 1 },
        { a: "Fifi ganha presente", b: "presente", aImagem: fifiImg, aQuantidade: 1, bImagem: presenteImg, bQuantidade: 1 },
        { a: "Lupi come maçã", b: "maçã", aImagem: lupiImg, aQuantidade: 1, bImagem: macaImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Praticar trabalhar em grupo é uma atitude:",
        opcoes: ["BOA", "Ruim"],
        correta: 0,
        explicacao: "Boa! Sempre.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" },
      },
      {
        pergunta: "Quantas estrelas você acende nesta missão?",
        opcoes: ["0", "1", "5"],
        correta: 1,
        explicacao: "1 estrela — a de Participação!",
        visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Estrela" },
      },
    ],
    medio: [
      {
        pergunta: "Quando você pratica trabalhar em grupo, o coração fica:",
        opcoes: ["Feliz", "Triste"],
        correta: 0,
        explicacao: "Feliz! Boa atitude acende o coração.",
        visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" },
      },
      {
        pergunta: "Onde posso praticar?",
        opcoes: ["Só na escola", "Em todo lugar"],
        correta: 1,
        explicacao: "Em qualquer lugar — casa, escola, parque.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" },
      },
    ],
    dificil: [
      {
        pergunta: "Um amigo NÃO conhece a atitude. Faço o quê?",
        opcoes: ["Mostro com carinho", "Rio dele"],
        correta: 0,
        explicacao: "Ensinar com carinho é o melhor.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja Sábia" },
      },
      {
        pergunta: "Praticar boas atitudes serve pra:",
        opcoes: ["Ganhar prêmio", "Fazer a floresta e a gente ficar bem"],
        correta: 1,
        explicacao: "É pra viver melhor com todo mundo.",
        visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "Festa" },
      },
    ],
  },

  proximaHabilidade: { codigo: "EI03EO10", titulo: "Festa da Amizade — floresta restaurada!" },
};

void piuImg;
void bravoImg;

export default aula;
