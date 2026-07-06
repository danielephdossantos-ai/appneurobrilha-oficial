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
import bracosAbertosImg from "@/assets/escola-brilha/movimentos/bracos-abertos.svg";
import pernasPuloImg from "@/assets/escola-brilha/movimentos/pernas-pulo.svg";
import palmasImg from "@/assets/escola-brilha/movimentos/palmas.svg";

/**
 * EI03CG01 — Mundo 2 · O Corpo que Fala na Floresta · Missão 1
 * Educação Infantil (4 e 5 anos) · Campo Corpo, Gestos e Movimentos
 * Tema: "Meu Corpo se Movimenta" — Reconhecer partes do corpo e movimentos básicos.
 * Estrela recompensa: ⭐ Movimento.
 */
const aula: Aula = {
  codigo: "EI03CG01",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Meu Corpo se Movimenta",

  narrativa: {
    titulo: "Meu Corpo se Movimenta",
    contexto: "Na Floresta Encantada, o vento apagou os movimentos dos animais. O Brilha percebe que ninguém está se mexendo. A Coruja Sábia explica: pra devolver o movimento à floresta, cada criança precisa aprender como o próprio corpo se mexe.",
    problema: "Só que o Brilha ainda não sabe direito quais partes do corpo dele podem se mexer. Vamos ajudar?",
    convite: "Bora descobrir com o Brilha como o corpo se movimenta?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes básicas do corpo (mão, pé, cabeça).",
    "Imitar movimentos simples que vê alguém fazer.",
    "Se movimentar espontaneamente em brincadeiras.",
  ],

  missao: "Reconhecer as principais partes do corpo e perceber que cada uma pode se movimentar de um jeito diferente.",

  objetivos: [
    "Explorar o movimento pedido no tema da aula.",
    "Perceber que cada corpo pode se expressar de vários jeitos.",
  ],

  motivacao: "Seu corpo é como um instrumento cheio de peças: cada uma faz um movimento lindo. Juntas, elas contam sua história!",

  explicacao: "• CABEÇA vira pros lados e balança pra cima e pra baixo.\\n• BRAÇOS levantam, abaixam e giram como asa de passarinho.\\n• MÃOS abrem, fecham e batem palmas.\\n• PERNAS caminham, pulam e chutam.\\n• PÉS pisam, batem no chão e ficam na pontinha.\n\nCada parte do corpo tem um movimento. Quando a gente conhece o corpo, a gente brinca melhor!",

  explicacaoAtiva: [
    { texto: "Oi! Toque no Brilha e veja ele levantar os bracinhos!", imagem: brilhaImg, imagemAlt: "Brilha alongando braços" },
    { texto: "A Coruja Sábia balança a cabeça. Toque nela pra ver!", imagem: corujaImg, imagemAlt: "Coruja mexendo cabeça" },
    { texto: "O Lupi pula com as perninhas fortes.", imagem: lupiImg, imagemAlt: "Lupi pulando" },
    {
      texto: "A Fifi bate palmas com as mãozinhas.",
      imagem: fifiImg,
      imagemAlt: "Fifi batendo palma",
      checagem: {
        pergunta: "Nosso corpo pode se mexer?",
        opcoes: ["Sim, cada parte tem um movimento", "Não, o corpo fica parado"],
        correta: 0,
        explicacao: "Isso! Cada parte do corpo faz um movimento diferente.",
      },
    }
  ],

  explicacoesNiveis: {
    nivel1: "O corpo tem partes que se movimentam: cabeça, braços, pernas.",
    nivel2: "Cada parte faz um movimento: pernas pulam, mãos batem palmas.",
    nivel3: "Se a gente treina os movimentos, o corpo fica mais forte e ágil.",
    nivel4: "Em casa você usa o corpo o tempo todo: pra comer, pra brincar, pra abraçar.",
  },

  exemploResolvido: {
    enunciado: "Quantos braços o Brilha usa pra abraçar um amigo?",
    passos: ["Toque no Brilha.", "Conte os braços dele.", "Ele abre os DOIS braços pra abraçar!"],
    resposta: "2 braços — um de cada lado.",
    interativo: {
      tipo: "contagem",
      imagemUrl: bracosAbertosImg,
      quantidade: 2,
      nomeItem: "braço",
      nomeItemPlural: "braços",
      pergunta: "Quantos braços o Brilha usa pra abraçar um amigo?",
    },
  },

  atividadeGuiada: {
    enunciado: "O Brilha, o Lupi e a Fifi estão se mexendo. Quem está no meio da fila?",
    resposta: "Lupi",
    explicacao: "Cada amigo faz um movimento — repare bem antes de responder.",
    visual: {
      tipo: "podio",
      pergunta: "O Brilha, o Lupi e a Fifi estão se mexendo. Quem está no meio da fila?",
      participantes: [
        { nome: "Brilha", imagemUrl: brilhaImg, posicao: 1 },
        { nome: "Lupi", imagemUrl: lupiImg, posicao: 2 },
        { nome: "Fifi", imagemUrl: fifiImg, posicao: 3 }
      ],
      respostaCerta: "Lupi",
    },
  },

  exercicios: [
    { enunciado: "O Brilha levanta os braços pro alto. Que parte do corpo ele usou?", resposta: "Os braços — a parte de cima do corpo.", dica: "Braços ficam ligados nos ombros." },
    { enunciado: "O Lupi pulou bem alto. Que parte do corpo faz a gente pular?", resposta: "As pernas — elas dobram e empurram o chão.", dica: "Pra pular, a gente dobra os joelhos." },
    { enunciado: "A Fifi bateu palmas de alegria. Que partes ela usou?", resposta: "As mãos — uma bate na outra.", dica: "Palma é uma mão encontrando a outra." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 amigos fazem 3 movimentos diferentes. Descubra qual parte do corpo cada um usa!",
    resposta: "Cada amigo faz um movimento único.",
    visual: {
      cena: [
        { personagem: "Brilha (levanta braços)", personagemImagemUrl: brilhaImg, itemImagemUrl: bracosAbertosImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi (pula)", personagemImagemUrl: lupiImg, itemImagemUrl: pernasPuloImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fifi (bate palma)", personagemImagemUrl: fifiImg, itemImagemUrl: palmasImg, quantidade: 1, cor: "#FB923C" }
      ],
      perguntas: [
        { pergunta: "Brilha levanta os BRAÇOS. Que parte é essa?", opcoes: ["Braços", "Pernas", "Cabeça"], correta: 0, explicacao: "Isso! Braços levantam pro alto." },
        { pergunta: "Lupi PULA. Que parte usa mais?", opcoes: ["Braços", "Pernas", "Boca"], correta: 1, explicacao: "As pernas empurram pro alto." },
        { pergunta: "Fifi BATE PALMA. Que parte encontra a outra?", opcoes: ["Mãos", "Pés", "Olhos"], correta: 0, explicacao: "Palma = mão encontrando mão." }
      ],
    },
  },

  revisao: {
    pontos: [
      "O corpo tem CABEÇA, BRAÇOS, MÃOS, PERNAS e PÉS.", "Cada parte faz um movimento diferente.", "Braços levantam, pernas pulam, mãos batem palmas.", "Conhecer o corpo ajuda a brincar melhor."
    ],
    dica: "Antes de dormir, tente mexer 3 partes do corpo bem devagarinho.",
  },

  quiz: [
    { pergunta: "O que a gente usa pra PULAR?", opcoes: ["Braços", "Pernas", "Nariz"], correta: 1, explicacao: "As pernas empurram o corpo pra cima!", visual: { tipo: "itens", imagemUrl: pernasPuloImg, quantidade: 1, rotulo: "Pernas pulando" } },
    { pergunta: "O que a gente usa pra ABRAÇAR?", opcoes: ["Pernas", "Braços", "Orelhas"], correta: 1, explicacao: "Os braços envolvem o amigo no abraço.", visual: { tipo: "itens", imagemUrl: bracosAbertosImg, quantidade: 1, rotulo: "Braços abertos" } },
    { pergunta: "O que a gente usa pra BATER PALMA?", opcoes: ["Mãos", "Pés", "Olhos"], correta: 0, explicacao: "Palma é mão com mão!", visual: { tipo: "itens", imagemUrl: palmasImg, quantidade: 1, rotulo: "Mãos batendo palmas" } }
  ],

  conclusao: "🏅 Medalha: Guardião do Movimento! Você devolveu a PRIMEIRA parte do movimento à floresta. Missão em Casa: faça 3 movimentos diferentes na frente do espelho e descubra qual parte do corpo você usou.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "O corpo humano tem MAIS DE 600 músculos! Cada movimentinho, até piscar o olho, usa um grupo deles trabalhando junto.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Partes do corpo em ação", instrucao: "Toque em cada amigo pra ver a parte do corpo que ele mexe.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Braços" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Pernas" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Mãos" }], pergunta: "Quantas partes do corpo aparecem?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Isso! 3 partes: braços, pernas e mãos.", erro: "Conte um por um." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Todo mundo mexendo junto", instrucao: "Todos os amigos se juntaram pra mexer o corpo.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }], pergunta: "Quantos amigos mexem o corpo?", opcoes: ["4", "5", "6"], correta: 1, acerto: "5 amigos — todo mundo se mexendo!", erro: "Aponte cada um." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo, uma parte do corpo", instrucao: "Ligue cada amigo ao par certo.", pares: [
      { a: "Brilha", b: "levanta os braços", aImagem: brilhaImg, aQuantidade: 1, bImagem: bracosAbertosImg, bQuantidade: 1 },
      { a: "Lupi", b: "pula com as pernas", aImagem: lupiImg, aQuantidade: 1, bImagem: pernasPuloImg, bQuantidade: 1 },
      { a: "Fifi", b: "bate palma com as mãos", aImagem: fifiImg, aQuantidade: 1, bImagem: palmasImg, bQuantidade: 1 }
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual amigo LEVANTA os braços?", opcoes: ["Brilha", "Lupi", "Téo"], correta: 0, explicacao: "O Brilha alonga os bracinhos pro alto.", visual: { tipo: "itens", imagemUrl: bracosAbertosImg, quantidade: 1, rotulo: "Brilha levanta braços" } },
      { pergunta: "Quantos amigos aparecem se mexendo?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "Brilha, Lupi e Fifi — 3 amigos em movimento.", visual: { tipo: "grupos", grupos: [{ imagemUrl: bracosAbertosImg, quantidade: 1, rotulo: "Braços", cor: "#FBBF24" }, { imagemUrl: pernasPuloImg, quantidade: 1, rotulo: "Pernas", cor: "#F472B6" }, { imagemUrl: palmasImg, quantidade: 1, rotulo: "Mãos", cor: "#FB923C" }] } }
    ],
    medio: [
      { pergunta: "O Brilha está com o corpo assim. Como ele se sente?", opcoes: ["Feliz", "Triste", "Bravo"], correta: 0, explicacao: "Corpo esticado pro alto mostra alegria!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } },
      { pergunta: "E este amigo, o corpo está caído. Como está?", opcoes: ["Feliz", "Triste", "Animado"], correta: 1, explicacao: "Corpo pra baixo mostra tristeza.", visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" } }
    ],
    dificil: [
      { pergunta: "Cada um mexe uma parte diferente. Isso é bom?", opcoes: ["Bom — cada corpo é único", "Ruim — todos deviam mexer igual"], correta: 0, explicacao: "Cada corpo tem seu jeito de se mexer.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } },
      { pergunta: "Você quer se mexer também. É certo?", opcoes: ["Sim, o corpo pede movimento", "Não, tem que ficar parado"], correta: 0, explicacao: "O corpo AMA se mexer!", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } }
    ],
  },

  proximaHabilidade: {
    codigo: "EI03CG02",
    titulo: "Pular, Correr e Andar",
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
