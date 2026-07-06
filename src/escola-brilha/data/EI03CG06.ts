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

/**
 * EI03CG06 — Mundo 2 · O Corpo que Fala na Floresta · Missão 6
 * Educação Infantil (4 e 5 anos) · Campo Corpo, Gestos e Movimentos
 * Tema: "Expressões do Corpo" — Corpo como expressão de sentimentos.
 * Estrela recompensa: ⭐ Expressão.
 */
const aula: Aula = {
  codigo: "EI03CG06",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Expressões do Corpo",

  narrativa: {
    titulo: "Expressões do Corpo",
    contexto: "Os animais da Floresta esconderam o que sentem — a floresta está sem cor. O Brilha percebe que quando ele está feliz, o corpo pula sozinho. Quando está triste, o corpo se encolhe.",
    problema: "A Coruja Sábia mostra: pra devolver as cores, cada criança precisa aprender que o CORPO FALA as emoções.",
    convite: "Bora com o Brilha descobrir o que o corpo diz?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes básicas do corpo (mão, pé, cabeça).",
    "Imitar movimentos simples que vê alguém fazer.",
    "Se movimentar espontaneamente em brincadeiras.",
  ],

  missao: "Reconhecer que o corpo expressa emoções — alegria, tristeza, raiva — e aprender a imitar cada uma.",

  objetivos: [
    "Explorar o movimento pedido no tema da aula.",
    "Perceber que cada corpo pode se expressar de vários jeitos.",
  ],

  motivacao: "Seu corpo é um livro aberto! Ele conta sem palavras se você está feliz, triste ou animado.",

  explicacao: "• ALEGRIA: corpo pra cima, braços abertos, sorriso.\\n• TRISTEZA: ombros caídos, cabeça baixa.\\n• RAIVA: mãos fechadas, corpo tenso.\\n• MEDO: corpo encolhido, mãos no rosto.\\n• TRANQUILO: corpo solto, respiração calma.\n\nO corpo mostra tudo. Aprender a ler o corpo é aprender a ouvir sem palavras!",

  explicacaoAtiva: [
    { texto: "Toque no Brilha pra ele mostrar ALEGRIA!", imagem: brilhaImg, imagemAlt: "Brilha alegre" },
    { texto: "O Lupi está TRISTE — veja o corpo encolhido.", imagem: lupiImg, imagemAlt: "Lupi triste" },
    { texto: "A Fifi está BRAVA — mãos fechadas.", imagem: fifiImg, imagemAlt: "Fifi brava" },
    {
      texto: "O Téo está TRANQUILO, corpo solto.",
      imagem: teoImg,
      imagemAlt: "Téo tranquilo",
      checagem: {
        pergunta: "Quando alguém está alegre, o corpo fica…",
        opcoes: ["Aberto e pra cima", "Encolhido"],
        correta: 0,
        explicacao: "Isso! Alegria abre o corpo.",
      },
    }
  ],

  explicacoesNiveis: {
    nivel1: "O corpo mostra o que a gente sente.",
    nivel2: "Cada emoção deixa o corpo de um jeito.",
    nivel3: "Reconhecer o corpo do outro é entender como ele se sente.",
    nivel4: "Em casa, você percebe quando alguém está triste só olhando o corpo dele.",
  },

  exemploResolvido: {
    enunciado: "O Brilha está alegre. Quantos braços ele levanta?",
    passos: ["Toque no Brilha alegre.", "Conte os braços levantados: 1, 2.", "2 braços — abertos pra alegria!"],
    resposta: "2 braços pra cima!",
    interativo: {
      tipo: "contagem",
      imagemUrl: bracosAbertosImg,
      quantidade: 2,
      nomeItem: "braço levantado",
      nomeItemPlural: "braços levantados",
      pergunta: "O Brilha está alegre. Quantos braços ele levanta?",
    },
  },

  atividadeGuiada: {
    enunciado: "Brilha alegre, Lupi triste, Fifi brava. Quem está de BRAÇOS ABERTOS?",
    resposta: "Brilha",
    explicacao: "Cada amigo faz um movimento — repare bem antes de responder.",
    visual: {
      tipo: "podio",
      pergunta: "Brilha alegre, Lupi triste, Fifi brava. Quem está de BRAÇOS ABERTOS?",
      participantes: [
        { nome: "Brilha (alegre)", imagemUrl: brilhaImg, posicao: 1 },
        { nome: "Lupi (triste)", imagemUrl: lupiImg, posicao: 2 },
        { nome: "Fifi (brava)", imagemUrl: fifiImg, posicao: 3 }
      ],
      respostaCerta: "Brilha",
    },
  },

  exercicios: [
    { enunciado: "O Brilha está com braços pra cima. Que emoção?", resposta: "ALEGRIA — corpo aberto pra cima.", dica: "Alegria abre o corpo." },
    { enunciado: "O Lupi está com ombros caídos. Que emoção?", resposta: "TRISTEZA — corpo pra baixo.", dica: "Tristeza abaixa o corpo." },
    { enunciado: "A Fifi está com mãos fechadas. Que emoção?", resposta: "RAIVA — corpo tenso.", dica: "Raiva tensiona o corpo." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 emoções no corpo. Reconheça cada uma!",
    resposta: "Cada amigo faz um movimento único.",
    visual: {
      cena: [
        { personagem: "Brilha (alegre)", itemImagemUrl: felizImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi (triste)", itemImagemUrl: tristeImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Fifi (brava)", itemImagemUrl: bravoImg, quantidade: 1, cor: "#EF4444" }
      ],
      perguntas: [
        { pergunta: "Corpo pra cima, sorriso — que emoção?", opcoes: ["Alegria", "Tristeza", "Raiva"], correta: 0, explicacao: "Corpo aberto = alegria." },
        { pergunta: "Ombros caídos, cabeça baixa — que emoção?", opcoes: ["Alegria", "Tristeza", "Raiva"], correta: 1, explicacao: "Corpo pra baixo = tristeza." },
        { pergunta: "Mãos fechadas, corpo tenso — que emoção?", opcoes: ["Alegria", "Tristeza", "Raiva"], correta: 2, explicacao: "Corpo tenso = raiva." }
      ],
    },
  },

  revisao: {
    pontos: [
      "O corpo mostra o que a gente sente.", "Alegria abre, tristeza encolhe, raiva tensiona.", "Ler o corpo do outro é entender ele sem palavras.", "Todas as emoções valem — mostrar é bom."
    ],
    dica: "Amanhã, faça 3 caras diferentes no espelho e veja como o corpo muda.",
  },

  quiz: [
    { pergunta: "Qual emoção deixa o corpo pra CIMA e ABERTO?", opcoes: ["Alegria", "Tristeza", "Raiva"], correta: 0, explicacao: "Alegria é expansiva!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Alegria" } },
    { pergunta: "Qual emoção ENCOLHE o corpo?", opcoes: ["Alegria", "Tristeza", "Animação"], correta: 1, explicacao: "Tristeza encolhe.", visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Tristeza" } },
    { pergunta: "Qual emoção TENSIONA as mãos?", opcoes: ["Alegria", "Tranquilidade", "Raiva"], correta: 2, explicacao: "Raiva fecha as mãos.", visual: { tipo: "itens", imagemUrl: bravoImg, quantidade: 1, rotulo: "Raiva" } }
  ],

  conclusao: "🏅 Medalha: Guardião da Expressão! As cores das emoções voltaram à floresta. Missão em Casa: faça alegria, tristeza e raiva com o corpo pra alguém adivinhar!",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "O corpo fala MAIS que a boca! Mesmo sem falar, dá pra saber como alguém está só olhando o jeito dele.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Três emoções no corpo", instrucao: "Cada amigo mostra uma emoção com o corpo.", grupos: [{ imagemUrl: felizImg, quantidade: 1, rotulo: "Alegria" }, { imagemUrl: tristeImg, quantidade: 1, rotulo: "Tristeza" }, { imagemUrl: bravoImg, quantidade: 1, rotulo: "Raiva" }], pergunta: "Quantas emoções aparecem?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 emoções: alegria, tristeza, raiva!", erro: "Conte cada carinha." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Todo mundo expressa", instrucao: "Todos os amigos mostraram o que sentem.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }], pergunta: "Quantos amigos expressaram?", opcoes: ["4", "5", "6"], correta: 1, acerto: "5 amigos mostrando emoção!", erro: "Aponte cada um." },
    { tipo: "ligar", titulo: "Fase 3 · Cada emoção, um corpo", instrucao: "Ligue cada amigo ao par certo.", pares: [
      { a: "Brilha alegre", b: "corpo aberto", aImagem: brilhaImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
      { a: "Lupi triste", b: "corpo encolhido", aImagem: lupiImg, aQuantidade: 1, bImagem: tristeImg, bQuantidade: 1 },
      { a: "Fifi brava", b: "corpo tenso", aImagem: fifiImg, aQuantidade: 1, bImagem: bravoImg, bQuantidade: 1 }
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Corpo pra cima = qual emoção?", opcoes: ["Alegria", "Tristeza", "Raiva"], correta: 0, explicacao: "Corpo pra cima = alegria.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Alegria" } },
      { pergunta: "Quantas emoções aparecem?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3 emoções.", visual: { tipo: "grupos", grupos: [{ imagemUrl: felizImg, quantidade: 1, rotulo: "Alegria", cor: "#FBBF24" }, { imagemUrl: tristeImg, quantidade: 1, rotulo: "Tristeza", cor: "#60A5FA" }, { imagemUrl: bravoImg, quantidade: 1, rotulo: "Raiva", cor: "#EF4444" }] } }
    ],
    medio: [
      { pergunta: "O Brilha está com braços pra cima. Como se sente?", opcoes: ["Alegre", "Triste", "Bravo"], correta: 0, explicacao: "Alegre demais!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } },
      { pergunta: "O Lupi está encolhido. Como está?", opcoes: ["Alegre", "Triste", "Animado"], correta: 1, explicacao: "Triste.", visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Triste" } }
    ],
    dificil: [
      { pergunta: "É bom mostrar como se sente?", opcoes: ["Sim, sempre", "Não, esconder"], correta: 0, explicacao: "Mostrar é saudável.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } },
      { pergunta: "Se alguém está triste, o que fazer?", opcoes: ["Dar carinho", "Ignorar"], correta: 0, explicacao: "Carinho ajuda.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } }
    ],
  },

  proximaHabilidade: {
    codigo: "EI03CG07",
    titulo: "Ritmo",
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
