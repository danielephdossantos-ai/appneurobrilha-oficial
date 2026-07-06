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
import confusoImg from "@/assets/brilha-vida/emocoes/confuso.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";

/**
 * EI03EO06 — Mundo 1 · Amigos da Floresta Encantada
 * Educação Infantil (4 e 5 anos) · Campo O Eu, o Outro e o Nós
 * Tema: "Respeito às Diferenças"
 * Estrela recompensa: ⭐ Respeito
 * Medalha: 🏅 Guardião do Respeito
 */
const aula: Aula = {
  codigo: "EI03EO06",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Respeito às Diferenças",

  narrativa: {
    titulo: "Respeito às Diferenças",
    contexto: "Um novo amigo chegou na floresta: um esquilinho de cauda comprida. Alguns bichinhos ficaram olhando estranho porque ele era DIFERENTE.",
    problema: "A sexta estrela só acende quando ninguém rir do que é diferente. Bora mostrar que TODOS são bem-vindos?",
    convite: "Vamos receber o esquilinho de braços abertos!",
  },

  conhecimentosPrevios: ["Perceber que amiguinhos têm cores, tamanhos e jeitos diferentes.", "Não zombar de quem é diferente.", "Dizer 'oi' pra quem chega."],

  missao: "Aprender que TODOS somos diferentes — e que isso é a coisa MAIS BONITA do mundo.",

  objetivos: ["Respeitar quem é diferente de mim.", "Perceber que diferenças enriquecem o grupo."],

  motivacao: "Se todo mundo fosse igual, o mundo seria em preto e branco. Diferença é cor. Diferença é beleza.",

  explicacao: "TODO MUNDO É DIFERENTE:\n\n• Cor de pele, cor de cabelo.\n• Tamanho, forma, voz.\n• Jeito de brincar, de falar, de sentir.\n\nRESPEITAR é aceitar o outro do jeito que ele é — sem zombar, sem excluir, sem tratar mal. Diferente NÃO é errado. Diferente é lindo.",

  explicacaoAtiva: [
    { texto: "O Lupi é branquinho e pequeno. Ele é único.", imagem: lupiImg, imagemAlt: "Lupi" },
    { texto: "O Téo é verde e tem casco. Também é único.", imagem: teoImg, imagemAlt: "Téo" },
    { texto: "A Fifi é laranja e ágil. Cada um do seu jeito!", imagem: fifiImg, imagemAlt: "Fifi", checagem: { pergunta: "Se um amigo é diferente de mim, ele é PIOR?", opcoes: ["Não — só é diferente", "Sim, é pior"], correta: 0, explicacao: "Diferente não é pior. É só diferente. Todos valem igual." } }
  ],

  explicacoesNiveis: {
    nivel1: "Todo mundo é diferente do meu jeitinho.",
    nivel2: "Diferenças aparecem no cabelo, no tamanho, na voz, no jeito.",
    nivel3: "Respeitar é tratar bem quem é diferente.",
    nivel4: "Ninguém pode ser excluído por ser diferente. Todos merecem estar juntos.",
  },

  exemploResolvido: {
    enunciado: "3 amigos diferentes chegaram. Lupi (coelho), Téo (tartaruga) e Fifi (raposa). Todos são amigos?",
    passos: ["Toque em cada amigo.", "Diga alto: TODOS SÃO AMIGOS!"],
    resposta: "Sim! Todos os 3 são amigos, mesmo sendo diferentes.",
    interativo: { tipo: "contagem", imagemUrl: lupiImg, quantidade: 3, nomeItem: "amigo diferente", nomeItemPlural: "amigos diferentes", pergunta: "Quantos amigos diferentes brincam juntos?" },
  },

  atividadeGuiada: {
    enunciado: "Três bichinhos diferentes em fila. Quem está no MEIO?",
    resposta: "O Téo tartaruga está no meio — cada um é bonito do seu jeito.",
    explicacao: "Fila: Lupi (1º), Téo (2º), Fifi (3ª). Téo no meio.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada elemento pra descobrir. Quem está no 2º lugar (meio)?",
      participantes: [{ nome: "Lupi", imagemUrl: lupiImg, posicao: 1 }, { nome: "Téo", imagemUrl: teoImg, posicao: 2 }, { nome: "Fifi", imagemUrl: fifiImg, posicao: 3 }],
      respostaCerta: "Téo",
    },
  },

  exercicios: [
    { enunciado: "🌈 Um amigo tem cabelo diferente do seu. Isso é motivo pra rir?", resposta: "Não. Cabelo diferente é só um detalhe — todo cabelo é bonito.", dica: "Diferença NÃO é motivo de piada." },
    { enunciado: "🐢 O Téo é lento. O Lupi é rápido. Isso torna um MELHOR que o outro?", resposta: "Não. Cada um tem um ritmo — e ambos são especiais.", dica: "Ritmo diferente é só isso: diferente." },
    { enunciado: "🤝 Como a gente mostra RESPEITO?", resposta: "Falando com carinho, incluindo todo mundo e não zombando.", dica: "Respeito é atitude, não só palavra." }
  ],

  desafio: {
    enunciado: "Três amigos diferentes. Escolha a atitude de RESPEITO.",
    resposta: "Respeito é aceitar e tratar bem TODO amigo.",
    visual: {
      cena: [{ personagem: "Lupi", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" }, { personagem: "Téo", itemImagemUrl: teoImg, quantidade: 1, cor: "#34D399" }, { personagem: "Fifi", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" }],
      perguntas: [{ pergunta: "O Téo é lento. Você…", opcoes: ["Espera com paciência", "Deixa pra trás"], correta: 0, explicacao: "Esperar com paciência é RESPEITO." }, { pergunta: "A Fifi tem uma voz alta. Você…", opcoes: ["Aceita o jeito dela", "Ri da voz"], correta: 0, explicacao: "Aceitar o jeito é respeito." }, { pergunta: "O Lupi é pequeno. Você…", opcoes: ["Trata como igual", "Debocha do tamanho"], correta: 0, explicacao: "Todos têm o mesmo valor." }],
    },
  },

  revisao: {
    pontos: ["Todos somos diferentes.", "Diferente não é pior — é lindo.", "Respeitar é aceitar e tratar bem.", "Ninguém deve ser excluído por ser diferente."],
    dica: "Hoje, elogie algo diferente de um amigo — o cabelo, a voz, o jeito.",
  },

  quiz: [
    { pergunta: "Se meu amigo é diferente, ele é pior?", opcoes: ["Não, só diferente", "Sim, é pior"], correta: 0, explicacao: "Diferente = único, não pior.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Todos valem" } },
    { pergunta: "Respeitar é o quê?", opcoes: ["Tratar bem quem é diferente", "Rir de quem é diferente"], correta: 0, explicacao: "Respeito = tratar bem.", visual: { tipo: "comparar", lados: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo", cor: "#34D399" }] } },
    { pergunta: "Quantos jeitos de ser existem?", opcoes: ["Só 1", "Muitos", "Nenhum"], correta: 1, explicacao: "Cada pessoa é um jeito. Milhões de jeitos!", visual: { tipo: "grupos", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }] } }
  ],

  conclusao: "🏅 Medalha conquistada: Guardião do Respeito! A SEXTA ESTRELA ⭐ acendeu. Missão em Casa: elogie algo diferente de alguém da sua família.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Você sabia que na floresta Amazônia existem mais de 400 tipos de macacos DIFERENTES? Cada um tem seu tamanho, cor e jeito — e todos vivem juntos em paz.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Amigos diferentes na floresta", instrucao: "Cada bichinho é único.", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }], pergunta: "Quantos amigos diferentes tem aqui?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 amigos, cada um do seu jeito!", erro: "Aponte um por um." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Todos brincando junto", instrucao: "Todos os amigos vieram brincar juntos.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }], pergunta: "Quantos amigos DIFERENTES aparecem juntos?", opcoes: ["3", "4", "5"], correta: 1, acerto: "4 amigos diferentes — e todos valem!", erro: "Brilha, Lupi, Téo, Fifi." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo com seu jeitinho", instrucao: "Ligue cada amigo à característica única dele.", pares: [{ a: "Lupi coelho", b: "orelhas grandes e saltos", aImagem: lupiImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 }, { a: "Téo tartaruga", b: "calminho e cheio de coração", aImagem: teoImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 }, { a: "Fifi raposa", b: "esperta e brincalhona", aImagem: fifiImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Um coração de respeito pra cada um", instrucao: "Cada amigo diferente merece 1 coração de respeito.", itemImagem: coracaoImg, alvosVisuais: [{ nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }, { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg }, { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg }, { nome: "Brilha", cor: "#FBBF24", capacidade: 1, imagemUrl: brilhaImg }], pares: [{ item: "Coração pro Lupi", alvo: "Lupi" }, { item: "Coração pro Téo", alvo: "Téo" }, { item: "Coração pra Fifi", alvo: "Fifi" }, { item: "Coração pro Brilha", alvo: "Brilha" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Todos os amigos são iguais?", opcoes: ["Não — cada um é diferente", "Sim, todos iguais"], correta: 0, explicacao: "Cada amigo é único.", visual: { tipo: "grupos", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }] } }, { pergunta: "Diferente é PIOR?", opcoes: ["Não", "Sim"], correta: 0, explicacao: "Diferente é só diferente.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Igual valor" } }],
    medio: [{ pergunta: "Um amigo é lento. Você…", opcoes: ["Espera com paciência", "Deixa pra trás"], correta: 0, explicacao: "Esperar é respeito.", visual: { tipo: "itens", imagemUrl: teoImg, quantidade: 1, rotulo: "Téo lento" } }, { pergunta: "Um amigo fala alto. Você…", opcoes: ["Aceita o jeito", "Zomba"], correta: 0, explicacao: "Aceitar é respeito.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" } }],
    dificil: [{ pergunta: "Se todos fossem iguais, seria bom?", opcoes: ["Não — a floresta seria sem graça", "Sim"], correta: 0, explicacao: "Diferenças enchem a floresta de cor.", visual: { tipo: "comparar", lados: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo", cor: "#34D399" }] } }, { pergunta: "Respeito é o quê?", opcoes: ["Tratar bem quem é diferente", "Ignorar quem é diferente"], correta: 0, explicacao: "Respeito é ativo, é tratar bem.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Respeito" } }],
  },

  proximaHabilidade: {
    codigo: "EI03EO07",
    titulo: "Ajudar os Outros",
  },
};

// Mantém imports usados em outras cenas do mesmo lote.
void piuImg; void confusoImg; void bravoImg; void tranquiloImg; void solImg; void livroImg;
void ursinhoImg; void boloImg; void presenteImg; void bolaImg; void balaoImg;
void florImg; void estrelaImg; void coracaoImg; void casaImg; void arvoreImg;

export default aula;
