import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tristeImg from "@/assets/brilha-vida/emocoes/triste.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import bravoImg from "@/assets/brilha-vida/emocoes/bravo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import blocoImg from "@/assets/neuro-treino/objetos/bloco.png";
import bauImg from "@/assets/neuro-treino/objetos/bau.png";
import leaoImg from "@/assets/neuro-treino/objetos/leao.png";
import sapoImg from "@/assets/neuro-treino/objetos/sapo.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";
import palmasImg from "@/assets/escola-brilha/movimentos/palmas.svg";
import passosImg from "@/assets/escola-brilha/movimentos/passos.svg";

/**
 * EI03CG07 — Mundo 2 · O Corpo que Fala na Floresta · Missão 7
 * Educação Infantil (4 e 5 anos) · Campo Corpo, Gestos e Movimentos
 * Tema: "Ritmo" — Bater palmas e seguir sequências rítmicas.
 * Estrela recompensa: ⭐ Ritmo.
 */
const aula: Aula = {
  codigo: "EI03CG07",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Ritmo",

  narrativa: {
    titulo: "Ritmo",
    contexto: "Os tambores da Floresta pararam de tocar. Sem ritmo, os passarinhos não sabem quando voar. O Brilha ouve a Coruja Sábia bater palmas devagar e sente o corpo querer dançar.",
    problema: "Só que o Lupi bate palma numa velocidade e o Téo em outra — a floresta virou bagunça!",
    convite: "Bora com o Brilha achar o ritmo certo?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes básicas do corpo (mão, pé, cabeça).",
    "Imitar movimentos simples que vê alguém fazer.",
    "Se movimentar espontaneamente em brincadeiras.",
  ],

  missao: "Perceber e reproduzir ritmos simples com o corpo — palmas, batidas e sequências.",

  objetivos: [
    "Explorar o movimento pedido no tema da aula.",
    "Perceber que cada corpo pode se expressar de vários jeitos.",
  ],

  motivacao: "Ritmo é o coração da música. Quando você bate palma no tempo certo, o corpo todo entende!",

  explicacao: "• PALMA DEVAGAR: 1... 2... 3...\\n• PALMA RÁPIDA: 1,2,3,4!\\n• SEQUÊNCIA: palma, pé, palma, pé.\\n• PARAR e voltar no tempo certo.\\n• Seguir junto com o AMIGO.\n\nRitmo é matemática do corpo. Devagar, rápido, junto — cada batida faz sentido.",

  explicacaoAtiva: [
    { texto: "Toque no Brilha pra ele bater 3 palmas devagar.", imagem: brilhaImg, imagemAlt: "Brilha batendo palma" },
    { texto: "O Lupi bate rápido: 1,2,3,4!", imagem: lupiImg, imagemAlt: "Lupi ritmo rápido" },
    { texto: "A Fifi faz palma-pé-palma-pé.", imagem: fifiImg, imagemAlt: "Fifi sequência" },
    {
      texto: "O Téo segue o ritmo do Brilha.",
      imagem: teoImg,
      imagemAlt: "Téo acompanhando",
      checagem: {
        pergunta: "Ritmo é…",
        opcoes: ["Batidas no tempo certo", "Bagunça"],
        correta: 0,
        explicacao: "Isso! Ritmo é tempo organizado.",
      },
    }
  ],

  explicacoesNiveis: {
    nivel1: "Ritmo é bater no tempo certo.",
    nivel2: "Pode ser devagar, rápido ou uma sequência.",
    nivel3: "Todo mundo junto no mesmo ritmo faz música.",
    nivel4: "Em casa, tente bater palmas junto com uma música.",
  },

  exemploResolvido: {
    enunciado: "O Brilha bate 5 palmas devagar. Vamos contar juntos.",
    passos: ["Toque no Brilha.", "Conte cada palma: 1,2,3,4,5.", "Deu 5 palmas!"],
    resposta: "5 palmas.",
    interativo: {
      tipo: "contagem",
      imagemUrl: palmasImg,
      quantidade: 5,
      nomeItem: "palma",
      nomeItemPlural: "palmas",
      pergunta: "O Brilha bate 5 palmas devagar. Vamos contar juntos.",
    },
  },

  atividadeGuiada: {
    enunciado: "Brilha bate 3, Lupi bate 5, Fifi bate 1. Quem bate MAIS palmas?",
    resposta: "Lupi",
    explicacao: "Cada amigo faz um movimento — repare bem antes de responder.",
    visual: {
      tipo: "podio",
      pergunta: "Brilha bate 3, Lupi bate 5, Fifi bate 1. Quem bate MAIS palmas?",
      participantes: [
        { nome: "Brilha (3)", imagemUrl: brilhaImg, posicao: 2 },
        { nome: "Lupi (5)", imagemUrl: lupiImg, posicao: 1 },
        { nome: "Fifi (1)", imagemUrl: fifiImg, posicao: 3 }
      ],
      respostaCerta: "Lupi",
    },
  },

  exercicios: [
    { enunciado: "Bater palma devagar é o quê?", resposta: "Ritmo LENTO — bem espaçado.", dica: "Devagar = lento." },
    { enunciado: "Bater palma rápido é o quê?", resposta: "Ritmo RÁPIDO — bem juntinho.", dica: "Rápido = juntinho." },
    { enunciado: "Palma-pé-palma-pé é o quê?", resposta: "SEQUÊNCIA — 2 movimentos que se alternam.", dica: "Sequência alterna." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 amigos, 3 ritmos. Descubra qual é qual!",
    resposta: "Cada amigo faz um movimento único.",
    visual: {
      cena: [
        { personagem: "Brilha (devagar)", personagemImagemUrl: brilhaImg, itemImagemUrl: palmasImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi (rápido)", personagemImagemUrl: lupiImg, itemImagemUrl: palmasImg, quantidade: 3, cor: "#F472B6" },
        { personagem: "Fifi (palma-pé)", personagemImagemUrl: fifiImg, itemImagemUrl: passosImg, quantidade: 1, cor: "#FB923C" }
      ],
      perguntas: [
        { pergunta: "Quem bate DEVAGAR?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 0, explicacao: "Brilha no ritmo lento." },
        { pergunta: "Quem bate RÁPIDO?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 1, explicacao: "Lupi acelerado!" },
        { pergunta: "Quem faz SEQUÊNCIA palma-pé?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 2, explicacao: "Fifi alterna palma e pé." }
      ],
    },
  },

  revisao: {
    pontos: [
      "Ritmo é bater no tempo certo.", "Pode ser devagar, rápido ou sequência.", "Juntos, todos no mesmo ritmo formam música.", "O corpo dança quando sente ritmo!"
    ],
    dica: "Amanhã, bata 5 palmas devagar, depois 5 rápidas. Sinta a diferença.",
  },

  quiz: [
    { pergunta: "Ritmo é…", opcoes: ["Bagunça", "Tempo certo", "Silêncio"], correta: 1, explicacao: "Ritmo é tempo organizado.", visual: { tipo: "itens", imagemUrl: palmasImg, quantidade: 2, rotulo: "Batidas no tempo" } },
    { pergunta: "Palma-pé-palma-pé é…", opcoes: ["Sequência", "Só palma", "Só pé"], correta: 0, explicacao: "É sequência de 2 movimentos!", visual: { tipo: "grupos", grupos: [{ imagemUrl: palmasImg, quantidade: 1, rotulo: "Palma", cor: "#FBBF24" }, { imagemUrl: passosImg, quantidade: 1, rotulo: "Pé", cor: "#60A5FA" }, { imagemUrl: palmasImg, quantidade: 1, rotulo: "Palma", cor: "#FBBF24" }] } },
    { pergunta: "Todo mundo junto no mesmo ritmo forma…", opcoes: ["Música", "Silêncio", "Bagunça"], correta: 0, explicacao: "Forma música!", visual: { tipo: "itens", imagemUrl: palmasImg, quantidade: 3, rotulo: "Palmas juntas" } }
  ],

  conclusao: "🏅 Medalha: Guardião do Ritmo! Os tambores da floresta voltaram a tocar. Missão em Casa: crie um ritmo com palmas e pés e ensine pra alguém.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "O CORAÇÃO tem o próprio ritmo! Bate mais rápido quando você corre e mais devagar quando dorme.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Três ritmos", instrucao: "Cada amigo bate no seu ritmo.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Devagar" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Rápido" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Sequência" }], pergunta: "Quantos ritmos aparecem?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 ritmos diferentes!", erro: "Conte cada amigo." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Todos no mesmo ritmo", instrucao: "Todos os amigos entraram no ritmo da floresta.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }, { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" }], pergunta: "Quantos amigos entraram no ritmo?", opcoes: ["5", "6", "7"], correta: 1, acerto: "6 amigos no ritmo!", erro: "Aponte cada um." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo, um ritmo", instrucao: "Ligue cada amigo ao par certo.", pares: [
      { a: "Brilha", b: "ritmo LENTO", aImagem: brilhaImg, aQuantidade: 1, bImagem: palmasImg, bQuantidade: 1 },
      { a: "Lupi", b: "ritmo RÁPIDO", aImagem: lupiImg, aQuantidade: 1, bImagem: palmasImg, bQuantidade: 3 },
      { a: "Fifi", b: "SEQUÊNCIA", aImagem: fifiImg, aQuantidade: 1, bImagem: passosImg, bQuantidade: 1 }
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Quem bate DEVAGAR?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 0, explicacao: "Brilha lento.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
      { pergunta: "Quantos ritmos aparecem?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3 ritmos.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } }
    ],
    medio: [
      { pergunta: "Quando você segue o ritmo, como se sente?", opcoes: ["Feliz", "Bravo", "Triste"], correta: 0, explicacao: "Ritmo dá alegria!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } },
      { pergunta: "Se perde o ritmo, como fica?", opcoes: ["Tranquilo", "Confuso", "Feliz"], correta: 1, explicacao: "Confuso — tenta de novo!", visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Confuso" } }
    ],
    dificil: [
      { pergunta: "É bom todos baterem no mesmo ritmo?", opcoes: ["Sim — vira música", "Não — vira bagunça"], correta: 0, explicacao: "Junto vira música.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } },
      { pergunta: "Ritmo ajuda o quê?", opcoes: ["A dançar e brincar", "Nada"], correta: 0, explicacao: "Ritmo é festa!", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } }
    ],
  },

  proximaHabilidade: {
    codigo: "EI03CG08",
    titulo: "Espaço",
  },
};

// Mantém imports pra expansão visual.
void tranquiloImg;
void tristeImg;
void bravoImg;
void arvoreImg;
void blocoImg;
void bauImg;
void leaoImg;
void sapoImg;
void passaroImg;
void florImg;
void estrelaImg;
void coracaoImg;
void felizImg;
void piuImg;
void corujaImg;

export default aula;
