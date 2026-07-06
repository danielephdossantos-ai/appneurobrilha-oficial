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

/**
 * EI03CG04 — Mundo 2 · O Corpo que Fala na Floresta · Missão 4
 * Educação Infantil (4 e 5 anos) · Campo Corpo, Gestos e Movimentos
 * Tema: "Equilíbrio" — Caminhar na linha e manter o corpo firme.
 * Estrela recompensa: ⭐ Equilíbrio.
 */
const aula: Aula = {
  codigo: "EI03CG04",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Equilíbrio",

  narrativa: {
    titulo: "Equilíbrio",
    contexto: "Uma ponte estreita apareceu no meio da Floresta Encantada. Do outro lado, um tesouro de estrelas. Só que a ponte é tão fininha que só passa quem tem EQUILÍBRIO no corpo.",
    problema: "O Brilha começa a atravessar e cambaleia! A Coruja Sábia explica: pra devolver o equilíbrio à floresta, precisamos treinar o corpo pra ficar firme.",
    convite: "Bora treinar equilíbrio com o Brilha na pontinha do pé?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes básicas do corpo (mão, pé, cabeça).",
    "Imitar movimentos simples que vê alguém fazer.",
    "Se movimentar espontaneamente em brincadeiras.",
  ],

  missao: "Manter o corpo firme parado, caminhar em linha reta e ficar num pé só sem cair.",

  objetivos: [
    "Explorar o movimento pedido no tema da aula.",
    "Perceber que cada corpo pode se expressar de vários jeitos.",
  ],

  motivacao: "Equilíbrio é magia do corpo: você fica em pé, anda numa linha, e o corpo obedece direitinho.",

  explicacao: "• PÉS BEM ABERTOS ajudam a não cair.\\n• OLHAR PRA FRENTE (não pro chão) firma o corpo.\\n• BRAÇOS ABERTOS equilibram como asas.\\n• RESPIRAR calmo dá firmeza.\\n• UM PÉ SÓ é o desafio final do equilíbrio.\n\nEquilíbrio se aprende treinando. Cada dia um pouquinho o corpo fica mais firme!",

  explicacaoAtiva: [
    { texto: "Toque no Brilha pra ele ficar em UM PÉ SÓ!", imagem: brilhaImg, imagemAlt: "Brilha equilibrando" },
    { texto: "O Lupi anda na linha bem devagar.", imagem: lupiImg, imagemAlt: "Lupi na linha" },
    { texto: "A Fifi abre os braços como asas.", imagem: fifiImg, imagemAlt: "Fifi de braços abertos" },
    {
      texto: "O Téo respira fundo e não cai.",
      imagem: teoImg,
      imagemAlt: "Téo firme",
      checagem: {
        pergunta: "Pra não cair andando na linha, o que ajuda?",
        opcoes: ["Abrir os braços como asas", "Fechar os olhos"],
        correta: 0,
        explicacao: "Isso! Braços abertos equilibram o corpo.",
      },
    }
  ],

  explicacoesNiveis: {
    nivel1: "Equilíbrio é ficar firme sem cair.",
    nivel2: "Braços abertos, olhar pra frente, ajudam a não perder o equilíbrio.",
    nivel3: "Fica em um pé só é o teste mais difícil de equilíbrio.",
    nivel4: "Em casa, tente andar em cima de uma linha desenhada no chão.",
  },

  exemploResolvido: {
    enunciado: "O Brilha fica em um pé só por 3 segundos. Quantas vezes ele cai?",
    passos: ["Toque no Brilha.", "Conte: 1, 2, 3 segundos.", "Se ele fica firme, ZERO quedas!"],
    resposta: "0 quedas — ele conseguiu!",
    interativo: {
      tipo: "contagem",
      imagemUrl: brilhaImg,
      quantidade: 1,
      nomeItem: "movimento",
      nomeItemPlural: "movimentos",
      pergunta: "O Brilha fica em um pé só por 3 segundos. Quantas vezes ele cai?",
    },
  },

  atividadeGuiada: {
    enunciado: "Brilha, Lupi e Fifi treinam equilíbrio. Quem está no MEIO da linha?",
    resposta: "Lupi",
    explicacao: "Cada amigo faz um movimento — repare bem antes de responder.",
    visual: {
      tipo: "podio",
      pergunta: "Brilha, Lupi e Fifi treinam equilíbrio. Quem está no MEIO da linha?",
      participantes: [
        { nome: "Brilha", imagemUrl: brilhaImg, posicao: 1 },
        { nome: "Lupi", imagemUrl: lupiImg, posicao: 2 },
        { nome: "Fifi", imagemUrl: fifiImg, posicao: 3 }
      ],
      respostaCerta: "Lupi",
    },
  },

  exercicios: [
    { enunciado: "O Brilha abriu os braços. Por quê?", resposta: "Pra equilibrar o corpo como asas.", dica: "Braços = balanceiro." },
    { enunciado: "Pra ficar em um pé só, o que a gente faz?", resposta: "Levanta um pé e mantém o outro firme no chão.", dica: "Um pé sobe, o outro segura." },
    { enunciado: "Se olhar pro chão, o que pode acontecer?", resposta: "A gente perde o equilíbrio e cai.", dica: "Olhar pra frente firma." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 amigos treinam equilíbrio de jeitos diferentes. Descubra!",
    resposta: "Cada amigo faz um movimento único.",
    visual: {
      cena: [
        { personagem: "Brilha (um pé só)", itemImagemUrl: brilhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi (na linha)", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fifi (braços abertos)", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" }
      ],
      perguntas: [
        { pergunta: "Quem fica em UM PÉ SÓ?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 0, explicacao: "Brilha é o mestre do um pé só." },
        { pergunta: "Quem anda em CIMA DA LINHA?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 1, explicacao: "Lupi caminha na linha." },
        { pergunta: "Quem abre os BRAÇOS pra equilibrar?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 2, explicacao: "Fifi de asas abertas." }
      ],
    },
  },

  revisao: {
    pontos: [
      "Equilíbrio é ficar firme sem cair.", "Braços abertos e olhar em frente ajudam.", "Um pé só é o desafio final.", "Treinando um pouquinho todo dia, o corpo fica firme."
    ],
    dica: "Amanhã, tente ficar em um pé só enquanto escova os dentes.",
  },

  quiz: [
    { pergunta: "O que ajuda a NÃO CAIR?", opcoes: ["Braços abertos", "Braços colados", "Olhos fechados"], correta: 0, explicacao: "Braços abertos são asas do equilíbrio.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
    { pergunta: "Onde devemos olhar pra equilibrar?", opcoes: ["Pro chão", "Pra frente", "Pro céu"], correta: 1, explicacao: "Pra frente firma o corpo.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
    { pergunta: "Qual é o desafio MAIS DIFÍCIL de equilíbrio?", opcoes: ["Sentar", "Ficar em um pé só", "Andar"], correta: 1, explicacao: "Um pé só = nível avançado!", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } }
  ],

  conclusao: "🏅 Medalha: Guardião do Equilíbrio! A ponte da floresta agora tem passagem segura. Missão em Casa: fique em um pé só e conte até 5. Depois troque de pé!",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "No ouvido tem uma parte chamada LABIRINTO que ajuda a gente a se equilibrar. É por isso que quando gira muito, a gente fica tonto!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Treino de equilíbrio", instrucao: "Três amigos treinam equilíbrio de jeitos diferentes.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Um pé só" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Na linha" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Braços abertos" }], pergunta: "Quantos amigos treinam equilíbrio?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 amigos — cada um do seu jeito!", erro: "Conte cada um." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Todo mundo firme", instrucao: "Todos os amigos ficaram firmes sem cair.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }], pergunta: "Quantos ficaram firmes?", opcoes: ["4", "5", "6"], correta: 1, acerto: "5 amigos firmes!", erro: "Aponte cada um." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo, sua técnica", instrucao: "Ligue cada amigo ao par certo.", pares: [
      { a: "Brilha", b: "fica em UM PÉ SÓ", aImagem: brilhaImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
      { a: "Lupi", b: "anda NA LINHA", aImagem: lupiImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 },
      { a: "Fifi", b: "abre BRAÇOS", aImagem: fifiImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 }
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual amigo está em UM PÉ SÓ?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 0, explicacao: "Brilha equilibrista.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
      { pergunta: "Quantos treinam equilíbrio?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3 amigos treinando.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } }
    ],
    medio: [
      { pergunta: "O Brilha ficou firme sem cair. Como se sente?", opcoes: ["Feliz", "Triste", "Bravo"], correta: 0, explicacao: "Conseguiu — orgulho!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } },
      { pergunta: "O Lupi caiu da linha. Como está?", opcoes: ["Tranquilo", "Chateado", "Bravo"], correta: 1, explicacao: "Cair pode chatear — é normal.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } }
    ],
    dificil: [
      { pergunta: "Se cair, o que fazer?", opcoes: ["Tentar de novo", "Desistir"], correta: 0, explicacao: "Cair faz parte de aprender.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } },
      { pergunta: "Fechar os olhos deixa o equilíbrio…", opcoes: ["Mais fácil", "Mais difícil"], correta: 1, explicacao: "Sem ver, é mais difícil.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } }
    ],
  },

  proximaHabilidade: {
    codigo: "EI03CG05",
    titulo: "Coordenação das Mãos",
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
