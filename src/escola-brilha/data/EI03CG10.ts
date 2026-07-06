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
 * EI03CG10 — Mundo 2 · O Corpo que Fala na Floresta · Missão 10
 * Educação Infantil (4 e 5 anos) · Campo Corpo, Gestos e Movimentos
 * Tema: "Grande Movimento da Floresta" — Dança coletiva — todos os movimentos juntos.
 * Estrela recompensa: ⭐ Guardião do Movimento.
 */
const aula: Aula = {
  codigo: "EI03CG10",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Grande Movimento da Floresta",

  narrativa: {
    titulo: "Grande Movimento da Floresta",
    contexto: "Hoje é o DIA DA GRANDE DANÇA da Floresta! Todos os amigos que aprenderam movimentos vão dançar JUNTOS pra restaurar a floresta de vez. O Brilha, a Coruja Sábia, o Lupi, a Fifi, o Téo e o Piu no mesmo palco.",
    problema: "Só que pra funcionar, TODO MUNDO precisa lembrar dos 9 movimentos anteriores. Vamos ajudar a floresta a brilhar de novo?",
    convite: "Bora com o Brilha na Grande Dança Coletiva?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes básicas do corpo (mão, pé, cabeça).",
    "Imitar movimentos simples que vê alguém fazer.",
    "Se movimentar espontaneamente em brincadeiras.",
  ],

  missao: "Juntar TODOS os movimentos aprendidos numa dança coletiva — pular, correr, equilibrar, imitar, ritmar, expressar.",

  objetivos: [
    "Explorar o movimento pedido no tema da aula.",
    "Perceber que cada corpo pode se expressar de vários jeitos.",
  ],

  motivacao: "Hoje é FESTA da floresta! Cada amigo traz um movimento. Juntos, viram a maior dança de todas!",

  explicacao: "• TODO MUNDO na mesma dança.\\n• Cada amigo mostra um movimento diferente.\\n• Ritmo une todos.\\n• O corpo expressa alegria da festa.\\n• Juntos = maior movimento da floresta.\n\nQuando cada um dá o melhor, o grupo inteiro brilha. Essa é a mágica do movimento coletivo!",

  explicacaoAtiva: [
    { texto: "Toque no Brilha pra começar a dança!", imagem: brilhaImg, imagemAlt: "Brilha dançando" },
    { texto: "A Coruja Sábia entra no ritmo.", imagem: corujaImg, imagemAlt: "Coruja no ritmo" },
    { texto: "O Lupi salta com força.", imagem: lupiImg, imagemAlt: "Lupi saltando" },
    {
      texto: "A Fifi gira feliz.",
      imagem: fifiImg,
      imagemAlt: "Fifi girando",
      checagem: {
        pergunta: "Na Grande Dança, quem dança?",
        opcoes: ["Todos os amigos juntos", "Só um amigo"],
        correta: 0,
        explicacao: "Isso! Todo mundo junto!",
      },
    }
  ],

  explicacoesNiveis: {
    nivel1: "A Grande Dança é a festa final.",
    nivel2: "Cada amigo traz o movimento que aprendeu.",
    nivel3: "Juntos, viram o maior movimento da floresta.",
    nivel4: "Em casa, você pode fazer uma mini festa com sua família.",
  },

  exemploResolvido: {
    enunciado: "Vieram 6 amigos pra dança. Vamos contar juntos?",
    passos: ["Toque em cada amigo.", "Conte: 1,2,3,4,5,6.", "6 amigos na festa!"],
    resposta: "6 amigos.",
    interativo: {
      tipo: "contagem",
      imagemUrl: brilhaImg,
      quantidade: 1,
      nomeItem: "movimento",
      nomeItemPlural: "movimentos",
      pergunta: "Vieram 6 amigos pra dança. Vamos contar juntos?",
    },
  },

  atividadeGuiada: {
    enunciado: "Brilha, Lupi e Fifi na dança. Quem está no MEIO?",
    resposta: "Lupi",
    explicacao: "Cada amigo faz um movimento — repare bem antes de responder.",
    visual: {
      tipo: "podio",
      pergunta: "Brilha, Lupi e Fifi na dança. Quem está no MEIO?",
      participantes: [
        { nome: "Brilha", imagemUrl: brilhaImg, posicao: 1 },
        { nome: "Lupi", imagemUrl: lupiImg, posicao: 2 },
        { nome: "Fifi", imagemUrl: fifiImg, posicao: 3 }
      ],
      respostaCerta: "Lupi",
    },
  },

  exercicios: [
    { enunciado: "Grande Dança é o quê?", resposta: "Todos os amigos juntos num movimento coletivo.", dica: "Coletivo = todos juntos." },
    { enunciado: "Cada amigo faz o quê?", resposta: "O movimento que aprendeu nas aulas anteriores.", dica: "Cada um traz o seu." },
    { enunciado: "Pra funcionar, precisa de o quê?", resposta: "Ritmo em comum e todo mundo junto.", dica: "Ritmo une o grupo." }
  ],

  desafio: {
    enunciado: "Desafio Brilha final: 3 amigos, 3 movimentos favoritos. Descubra!",
    resposta: "Cada amigo faz um movimento único.",
    visual: {
      cena: [
        { personagem: "Brilha (dança)", itemImagemUrl: brilhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Lupi (salta)", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Fifi (gira)", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" }
      ],
      perguntas: [
        { pergunta: "Quem DANÇA no centro?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 0, explicacao: "Brilha lidera a dança." },
        { pergunta: "Quem SALTA no ritmo?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 1, explicacao: "Lupi salta feliz." },
        { pergunta: "Quem GIRA em volta?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 2, explicacao: "Fifi gira leve." }
      ],
    },
  },

  revisao: {
    pontos: [
      "Todos os 9 movimentos anteriores voltaram!", "Cada amigo trouxe uma parte.", "Juntos formam a Grande Dança.", "A floresta agora brilha inteira de novo."
    ],
    dica: "Hoje, faça uma mini dança em casa com todos que quiserem entrar. Cada um traz um movimento!",
  },

  quiz: [
    { pergunta: "Na Grande Dança, quem participa?", opcoes: ["Só o Brilha", "Todos os amigos", "Ninguém"], correta: 1, explicacao: "Todos juntos!", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
    { pergunta: "Pra dançar em grupo, precisa de…", opcoes: ["Ritmo comum", "Silêncio", "Bagunça"], correta: 0, explicacao: "Ritmo une o grupo.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
    { pergunta: "Depois de aprender os 10 movimentos, o corpo fica…", opcoes: ["Preparado pra tudo", "Cansado", "Parado"], correta: 0, explicacao: "Corpo pronto pra tudo!", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } }
  ],

  conclusao: "🏅 MEDALHA FINAL: Guardião SUPREMO do Movimento! Você concluiu o Mundo 2 — O Corpo que Fala na Floresta! A DÉCIMA ESTRELA ⭐ brilha no céu! Missão em Casa: convide sua família pra uma dança coletiva de 1 minuto.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Dançar em grupo LIBERA endorfina — a substância da felicidade. Por isso festa deixa todo mundo alegre!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Todos na dança", instrucao: "Todos os amigos que a gente conheceu vieram dançar.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }, { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" }], pergunta: "Quantos amigos dançam?", opcoes: ["4", "5", "6"], correta: 2, acerto: "6 amigos — a floresta inteira!", erro: "Aponte todos: Brilha, Lupi, Fifi, Téo, Piu, Coruja." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Três estilos de dança", instrucao: "Cada amigo dança de um jeito.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Dança" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Salta" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Gira" }], pergunta: "Quantos estilos aparecem?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 estilos: dançar, saltar, girar!", erro: "Conte cada amigo." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo, seu jeito de dançar", instrucao: "Ligue cada amigo ao par certo.", pares: [
      { a: "Brilha", b: "DANÇA no centro", aImagem: brilhaImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
      { a: "Lupi", b: "SALTA feliz", aImagem: lupiImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 },
      { a: "Fifi", b: "GIRA leve", aImagem: fifiImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 }
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Quem DANÇA no centro?", opcoes: ["Brilha", "Lupi", "Fifi"], correta: 0, explicacao: "Brilha lidera.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } },
      { pergunta: "Quantos amigos vieram?", opcoes: ["4", "5", "6"], correta: 2, explicacao: "6 amigos!", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Movimento" } }
    ],
    medio: [
      { pergunta: "Na festa, todos estão felizes. Como o corpo mostra?", opcoes: ["Braços abertos", "Encolhido", "Fechado"], correta: 0, explicacao: "Alegria abre o corpo!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } },
      { pergunta: "Se cansar de dançar, o que fazer?", opcoes: ["Descansar", "Continuar até desmaiar"], correta: 0, explicacao: "Descansar é importante.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Emoção" } }
    ],
    dificil: [
      { pergunta: "Dançar em grupo é bom?", opcoes: ["Sim — une todo mundo", "Não — melhor sozinho"], correta: 0, explicacao: "Grupo une!", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } },
      { pergunta: "Depois de aprender os 10 movimentos, o que muda?", opcoes: ["Corpo mais preparado", "Nada"], correta: 0, explicacao: "Corpo evolui!", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Reflexão" } }
    ],
  },

  proximaHabilidade: {
    codigo: "EI03TS01",
    titulo: "CG concluído — próximo Mundo em breve",
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
