import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";

/**
 * EI03EO09 — Cooperar em atividades coletivas.
 * ⭐ Estrela: União.
 */
const aula: Aula = {
  codigo: "EI03EO09",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Juntos a Gente Consegue",

  narrativa: {
    titulo: "Juntos a Gente Consegue",
    contexto:
      "Uma pedra ENORME bloqueia o caminho da Floresta Encantada. O Brilha empurra sozinho — nem se mexe. A Coruja Sábia chega: 'Chama os amigos! Juntos vocês conseguem.'",
    problema: "Como mover algo grande demais pra uma pessoa só?",
    convite: "Bora chamar os amigos e mover essa pedra?",
  },

  conhecimentosPrevios: ["Fazer algo junto com amigo.", "Combinar 'no três'.", "Puxar/empurrar em grupo."],

  missao: "Descobrir que JUNTOS somos MUITO mais fortes.",

  objetivos: [
    "Cooperar em atividade coletiva.",
    "Perceber que cada um contribui com uma parte.",
  ],

  motivacao: "1 amigo = 1 força. 5 amigos = 5 forças juntas!",

  explicacao:
    "COOPERAR É:\n\n• Todos empurrando pro MESMO lado.\n• Combinar 'no três'.\n• Cada um faz sua parte.\n• Comemorar TODO MUNDO junto quando dá certo.\n\nSozinho eu vou rápido. Juntos, a gente vai LONGE.",

  explicacaoAtiva: [
    { texto: "O Brilha empurra sozinho. A pedra não mexe. Toque nele.", imagem: brilhaImg, imagemAlt: "Brilha empurrando" },
    { texto: "A Coruja chama: 'Amigos! Vamos juntos!'", imagem: corujaImg, imagemAlt: "Coruja chamando" },
    { texto: "Lupi salta, Fifi puxa, Téo empurra devagar, Piu voa por cima animando.", imagem: lupiImg, imagemAlt: "Amigos ajudando" },
    {
      texto: "A pedra se moveu! Juntos deu certo.",
      imagem: felizImg,
      imagemAlt: "Vitória",
      checagem: {
        pergunta: "Sozinho não dá. Junto:",
        opcoes: ["A gente consegue", "Também não dá"],
        correta: 0,
        explicacao: "Isso! União faz a força.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Junto é melhor que sozinho.",
    nivel2: "Cada amigo tem uma parte pra fazer.",
    nivel3: "Combinar antes ajuda: 'no três empurramos'.",
    nivel4: "Cooperação = todos ganham. Ninguém sai atrás.",
  },

  exemploResolvido: {
    enunciado: "5 amigos empurram a pedra juntos. Quantos empurrando?",
    passos: ["Brilha.", "Lupi.", "Fifi.", "Téo.", "Piu (animando de cima)."],
    resposta: "5 amigos = 5 forças juntas!",
    interativo: {
      tipo: "contagem",
      imagemUrl: estrelaImg,
      quantidade: 5,
      nomeItem: "amigo cooperando",
      nomeItemPlural: "amigos cooperando",
      pergunta: "Quantos amigos cooperando?",
    },
  },

  atividadeGuiada: {
    enunciado: "3 amigos puxando corda no mesmo sentido. Quantos?",
    resposta: "3 amigos puxando juntos.",
    explicacao: "Puxar pro mesmo lado é cooperar.",
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
    { enunciado: "⭐ Tarefa grande demais pra mim. O que faço?", resposta: "Chamo amigos pra cooperar.", dica: "Ninguém precisa fazer tudo sozinho." },
    { enunciado: "🐰 Como cooperar dá certo?", resposta: "Todo mundo empurra pro mesmo lado.", dica: "Mesmo sentido = força junta." },
    { enunciado: "🦉 Depois de conseguir juntos, o que fazemos?", resposta: "Comemoramos TODOS juntos!", dica: "A vitória é de todos." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: em cada cena, qual é o jeito COOPERATIVO?",
    resposta: "Juntar forças, dividir tarefa, comemorar junto.",
    visual: {
      cena: [
        { personagem: "Pedra grande", itemImagemUrl: estrelaImg, quantidade: 1, cor: "#94A3B8" },
        { personagem: "4 amigos", itemImagemUrl: brilhaImg, quantidade: 4, cor: "#FBBF24" },
        { personagem: "Vitória com balões", itemImagemUrl: balaoImg, quantidade: 3, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Pedra pesada. Faço:", opcoes: ["Chamo amigos", "Empurro sozinho até quebrar"], correta: 0, explicacao: "Chamar amigos é o jeito esperto." },
        { pergunta: "Todos empurrando. Melhor:", opcoes: ["Mesmo sentido no 'três'", "Cada um pro seu lado"], correta: 0, explicacao: "Mesmo sentido = força junta." },
        { pergunta: "Deu certo! Comemoramos:", opcoes: ["Todos juntos", "Sozinho"], correta: 0, explicacao: "Vitória do grupo é de TODOS." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Junto é mais forte que sozinho.",
      "Cada um tem uma parte.",
      "Combinar antes ajuda.",
      "Vitória do grupo é de todo mundo.",
    ],
    dica: "Faça 1 tarefa em casa hoje junto com alguém — arrumar mesa, guardar brinquedo.",
  },

  quiz: [
    {
      pergunta: "Sozinho não deu. Junto:",
      opcoes: ["Também não dá", "A gente consegue"],
      correta: 1,
      explicacao: "Junto multiplica a força!",
      visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "União" },
    },
    {
      pergunta: "Todos empurrando pro mesmo lado é:",
      opcoes: ["Cooperar", "Brigar"],
      correta: 0,
      explicacao: "Cooperar!",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: brilhaImg, quantidade: 1, rotulo: "→", cor: "#FBBF24" },
          { imagemUrl: lupiImg, quantidade: 1, rotulo: "→", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "Quantos amigos cooperando?",
      opcoes: ["3", "4", "5"],
      correta: 2,
      explicacao: "5 amigos = super-força!",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha", cor: "#FBBF24" },
          { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" },
          { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FB923C" },
          { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo", cor: "#34D399" },
          { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu", cor: "#60A5FA" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha: União Faz a Força! 9ª ESTRELA ⭐ acesa. Missão em Casa: faça 1 tarefa JUNTO com alguém e comemorem juntos ao final.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "As formigas conseguem carregar pedras 50 vezes maiores que elas — mas só juntas. Sozinha nenhuma consegue!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Amigos pra chamar",
      instrucao: "Estes amigos podem ajudar. Toque em cada um.",
      grupos: [
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" },
        { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" },
        { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
        { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" },
      ],
      pergunta: "Quantos amigos vou chamar?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "4 amigos + você = super-time!",
      erro: "Conte cada um.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Forças juntas",
      instrucao: "Cada estrela = 1 força. Toque em cada.",
      grupos: [{ imagemUrl: estrelaImg, quantidade: 5, rotulo: "Forças" }],
      pergunta: "Quantas forças no total?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "5 forças juntas = tudo se move!",
      erro: "Aponte cada estrela.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Cada um faz sua parte",
      instrucao: "Ligue cada amigo à parte dele.",
      pares: [
        { a: "Lupi", b: "salta pra empurrar", aImagem: lupiImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
        { a: "Téo", b: "empurra devagar mas firme", aImagem: teoImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
        { a: "Piu", b: "anima de cima", aImagem: piuImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Balões da vitória",
      instrucao: "A pedra se moveu! Balões pra comemorar.",
      grupos: [{ imagemUrl: balaoImg, quantidade: 5, rotulo: "Balões" }],
      pergunta: "Quantos balões de vitória?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "5 balões — 1 pra cada amigo!",
      erro: "Conte cada balão.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Medalha pra cada amigo",
      instrucao: "Cada amigo cooperador ganha 1 estrela. Toque na estrela e depois no amigo.",
      itemImagem: estrelaImg,
      alvosVisuais: [
        { nome: "Brilha", cor: "#FBBF24", capacidade: 1, imagemUrl: brilhaImg },
        { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg },
        { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg },
        { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg },
        { nome: "Piu", cor: "#60A5FA", capacidade: 1, imagemUrl: piuImg },
      ],
      pares: [
        { item: "Estrela do Brilha", alvo: "Brilha" },
        { item: "Estrela do Lupi", alvo: "Lupi" },
        { item: "Estrela da Fifi", alvo: "Fifi" },
        { item: "Estrela do Téo", alvo: "Téo" },
        { item: "Estrela do Piu", alvo: "Piu" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Minijogo · Como me sinto cooperando",
      instrucao: "Ligue cada momento à carinha do sentimento.",
      pares: [
        { a: "Conseguimos juntos!", b: "feliz", aImagem: brilhaImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Fizemos tudo com calma", b: "tranquilo", aImagem: teoImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
        { a: "Amigos se ajudando", b: "coração cheio", aImagem: lupiImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Junto é mais forte que sozinho?",
        opcoes: ["Sim", "Não"],
        correta: 0,
        explicacao: "Sim! Muitas mãos, trabalho leve.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "União" },
      },
      {
        pergunta: "Tarefa grande. Chamo:",
        opcoes: ["Amigos", "Ninguém"],
        correta: 0,
        explicacao: "Chamar amigos é cooperar.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" },
            { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" },
            { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Melhor empurrar:",
        opcoes: ["Todos no mesmo sentido", "Cada um pro seu"],
        correta: 0,
        explicacao: "Mesmo sentido soma força.",
        visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Junto" },
      },
      {
        pergunta: "Deu certo. Comemoramos:",
        opcoes: ["Juntos", "Sozinho"],
        correta: 0,
        explicacao: "Vitória do grupo = alegria compartilhada!",
        visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Todos!" },
      },
    ],
    dificil: [
      {
        pergunta: "Um amigo é mais fraco. E aí?",
        opcoes: ["A parte dele é menor, mas conta", "Ele fica de fora"],
        correta: 0,
        explicacao: "Todo mundo entra — cada um do seu jeito.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo devagar", cor: "#34D399" },
            { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi rápido", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Cooperar deixa a gente:",
        opcoes: ["Mais forte junto", "Fraco separado"],
        correta: 0,
        explicacao: "União = força de todo mundo somada.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Força coletiva" },
      },
    ],
  },

  proximaHabilidade: { codigo: "EI03EO10", titulo: "Nossa Floresta" },
};

void corujaImg;

export default aula;
