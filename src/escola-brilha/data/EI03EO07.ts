import type { Aula } from "../types";
import { url as brilhaImg } from "@/assets/escola-brilha/mascotes/brilha.png.asset.json";
import { url as corujaImg } from "@/assets/escola-brilha/ei-mundo1/coruja.png.asset.json";
import { url as lupiImg } from "@/assets/escola-brilha/ei-mundo1/lupi.png.asset.json";
import { url as fifiImg } from "@/assets/escola-brilha/ei-mundo1/fifi.png.asset.json";
import { url as teoImg } from "@/assets/escola-brilha/ei-mundo1/teo.png.asset.json";
import { url as piuImg } from "@/assets/escola-brilha/ei-mundo1/piu.png.asset.json";
import { url as felizImg } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import { url as tristeImg } from "@/assets/brilha-vida/emocoes/triste.png.asset.json";
import { url as tranquiloImg } from "@/assets/brilha-vida/emocoes/tranquilo.png.asset.json";
import { url as bravoImg } from "@/assets/brilha-vida/emocoes/bravo.png.asset.json";
import { url as confusoImg } from "@/assets/brilha-vida/emocoes/confuso.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as balaoImg } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as presenteImg } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as ursinhoImg } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * EI03EO07 — Mundo 1 · Amigos da Floresta Encantada
 * Educação Infantil (4 e 5 anos) · Campo O Eu, o Outro e o Nós
 * Tema: "Ajudar os Outros"
 * Estrela recompensa: ⭐ Empatia
 * Medalha: 🏅 Guardião da Empatia
 */
const aula: Aula = {
  codigo: "EI03EO07",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Ajudar os Outros",

  narrativa: {
    titulo: "Ajudar os Outros",
    contexto: "Correndo no gramado, o Lupi tropeçou numa raiz e caiu. Ficou triste, com o joelho ralado.",
    problema: "A sétima estrela só acende quando um amigo AJUDA o outro. O Brilha viu tudo — o que ele deve fazer?",
    convite: "Vamos correr pra ajudar o Lupi!",
  },

  conhecimentosPrevios: ["Perceber quando alguém está triste ou machucado.", "Perguntar 'você tá bem?'.", "Chamar um adulto quando precisa."],

  missao: "Aprender que AJUDAR é a coisa mais bonita que um amigo pode fazer.",

  objetivos: ["Reconhecer quem precisa de ajuda.", "Escolher uma atitude de ajuda concreta."],

  motivacao: "Quando você ajuda alguém, seu coração cresce por dentro. E o coração do amigo também.",

  explicacao: "AJUDAR é agir quando alguém precisa:\n\n• Amigo caiu → estender a mão.\n• Amigo chorou → dar abraço.\n• Amigo perdeu algo → ajudar a procurar.\n• Amigo tá cansado → oferecer água.\n\nAJUDAR não é obrigação — é presente. E o mais legal: quem ajuda também ganha alegria.",

  explicacaoAtiva: [
    { texto: "O Lupi caiu. Olha a carinha dele.", imagem: tristeImg, imagemAlt: "Lupi triste" },
    { texto: "O Brilha vem ajudar. Toque nele!", imagem: brilhaImg, imagemAlt: "Brilha ajudando" },
    { texto: "Depois da ajuda, o Lupi fica feliz de novo.", imagem: felizImg, imagemAlt: "Lupi feliz", checagem: { pergunta: "Quando vejo um amigo caído, o que faço?", opcoes: ["Ajudo a levantar", "Rio dele"], correta: 0, explicacao: "Ajudar é o certo. Rir do sofrimento do outro machuca." } }
  ],

  explicacoesNiveis: {
    nivel1: "Ajudar é fazer algo bom por alguém que precisa.",
    nivel2: "Levantar o amigo, dar a mão, buscar ajuda — tudo isso é ajudar.",
    nivel3: "Ajudar deixa o amigo feliz E deixa quem ajuda feliz também.",
    nivel4: "Em casa, ajudo guardando os brinquedos. Na escola, ajudo o coleguinha que não entende algo.",
  },

  exemploResolvido: {
    enunciado: "O Lupi caiu. O Brilha chegou pra ajudar. Quantos amigos temos na cena agora?",
    passos: ["Toque no Lupi (caído).", "Toque no Brilha (ajudando).", "Conte: 2 amigos, 1 ajudando o outro."],
    resposta: "2 amigos: 1 precisa de ajuda, 1 ajuda.",
    interativo: { tipo: "contagem", imagemUrl: lupiImg, quantidade: 2, nomeItem: "amigo", nomeItemPlural: "amigos", pergunta: "Quantos amigos aparecem na cena da ajuda?" },
  },

  atividadeGuiada: {
    enunciado: "Três atitudes possíveis. Qual está no MEIO — e é a melhor pra AJUDAR?",
    resposta: "Dar a mão pra levantar (a do meio).",
    explicacao: "Rir (1º), dar a mão (2º), ignorar (3º). A do meio é a única atitude boa.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada elemento pra descobrir. Quem está no 2º lugar (meio)?",
      participantes: [{ nome: "Rir", imagemUrl: confusoImg, posicao: 1 }, { nome: "Dar a mão", imagemUrl: coracaoImg, posicao: 2 }, { nome: "Ignorar", imagemUrl: tristeImg, posicao: 3 }],
      respostaCerta: "Dar a mão",
    },
  },

  exercicios: [
    { enunciado: "🤝 O amigo caiu. O que você faz PRIMEIRO?", resposta: "Pergunto 'você tá bem?' e ofereço a mão.", dica: "Ajuda começa com uma pergunta gentil." },
    { enunciado: "😢 O amigo chorou. O que ajuda?", resposta: "Um abraço e uma palavra doce: 'tô aqui com você'.", dica: "Presença já é ajuda enorme." },
    { enunciado: "🎒 O amigo esqueceu o lanche. O que faço?", resposta: "Divido o meu com ele — assim ninguém fica sem.", dica: "Dividir é ajudar de forma prática." }
  ],

  desafio: {
    enunciado: "3 amigos precisam de ajuda. Escolha a MELHOR atitude em cada caso.",
    resposta: "Toda atitude de ajuda deixa o mundo mais gentil.",
    visual: {
      cena: [{ personagem: "Lupi caiu", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" }, { personagem: "Fifi chorou", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" }, { personagem: "Téo perdeu algo", itemImagemUrl: teoImg, quantidade: 1, cor: "#34D399" }],
      perguntas: [{ pergunta: "O Lupi caiu. Melhor atitude?", opcoes: ["Dar a mão", "Rir dele"], correta: 0, explicacao: "Dar a mão = ajudar." }, { pergunta: "A Fifi tá chorando. Melhor atitude?", opcoes: ["Dar um abraço", "Ignorar"], correta: 0, explicacao: "Abraço é remédio pra tristeza." }, { pergunta: "O Téo perdeu o ursinho. Melhor atitude?", opcoes: ["Ajudar a procurar", "Sair correndo"], correta: 0, explicacao: "Procurar junto é atitude de amigo." }],
    },
  },

  revisao: {
    pontos: ["Ajudar é agir quando alguém precisa.", "Estender a mão, abraçar, dividir são jeitos de ajudar.", "Quem ajuda também recebe alegria.", "Ajudar constrói amizade forte."],
    dica: "Hoje, ofereça ajuda pra alguém — mesmo que a pessoa não peça.",
  },

  quiz: [
    { pergunta: "Amigo caiu. Você…", opcoes: ["Ajuda a levantar", "Ri"], correta: 0, explicacao: "Ajudar é atitude de amigo.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Ajudar" } },
    { pergunta: "Amigo tá triste. Melhor atitude?", opcoes: ["Abraçar", "Fingir que não viu"], correta: 0, explicacao: "Abraço acalma o coração.", visual: { tipo: "comparar", lados: [{ imagemUrl: tristeImg, quantidade: 1, rotulo: "Antes", cor: "#60A5FA" }, { imagemUrl: felizImg, quantidade: 1, rotulo: "Depois do abraço", cor: "#FBBF24" }] } },
    { pergunta: "Quantas atitudes de ajuda cabem numa cena?", opcoes: ["1", "3", "muitas"], correta: 2, explicacao: "Existem muitas formas de ajudar — a gente escolhe.", visual: { tipo: "grupos", grupos: [{ imagemUrl: coracaoImg, quantidade: 1, rotulo: "Abraço" }, { imagemUrl: balaoImg, quantidade: 1, rotulo: "Dividir" }, { imagemUrl: bolaImg, quantidade: 1, rotulo: "Brincar junto" }] } }
  ],

  conclusao: "🏅 Medalha conquistada: Guardião da Empatia! A SÉTIMA ESTRELA ⭐ acendeu. Missão em Casa: ajude alguém da família hoje — arrumar mesa, guardar brinquedo, buscar algo.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Você sabia que quando a gente ajuda alguém, o cérebro libera OXITOCINA — a mesma coisinha que a mamãe libera quando abraça o bebê? Ajudar dá amor no corpo inteiro!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Amigo precisando de ajuda", instrucao: "O Lupi caiu no chão.", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi caído" }, { imagemUrl: tristeImg, quantidade: 1, rotulo: "Carinha triste" }], pergunta: "Quantas coisas mostram que o Lupi precisa de ajuda?", opcoes: ["1", "2", "3"], correta: 1, acerto: "O Lupi caído + a carinha triste = 2 sinais.", erro: "Olha os dois: Lupi e carinha triste." },
    { tipo: "contarQuiz", titulo: "Fase 2 · O Brilha corre pra ajudar", instrucao: "O Brilha vem ajudar com um coração de carinho.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }, { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração de ajuda" }], pergunta: "Quantas coisas o Brilha traz?", opcoes: ["1", "2", "3"], correta: 1, acerto: "O Brilha e o coração — 2 coisas boas!", erro: "Brilha + coração = 2." },
    { tipo: "ligar", titulo: "Fase 3 · Combinar problema com ajuda", instrucao: "Ligue cada situação à ajuda certa.", pares: [{ a: "Amigo caído", b: "dar a mão", aImagem: lupiImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 }, { a: "Amigo triste", b: "abraço quentinho", aImagem: tristeImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 }, { a: "Amigo com fome", b: "dividir lanche", aImagem: confusoImg, aQuantidade: 1, bImagem: boloImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Corações de ajuda pros amigos", instrucao: "Dê 1 coração pra cada amigo que precisa.", itemImagem: coracaoImg, alvosVisuais: [{ nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }, { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg }, { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg }], pares: [{ item: "Coração pro Lupi", alvo: "Lupi" }, { item: "Coração pra Fifi", alvo: "Fifi" }, { item: "Coração pro Téo", alvo: "Téo" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Amigo caiu. Qual atitude?", opcoes: ["Ajudar", "Rir", "Ignorar"], correta: 0, explicacao: "Ajudar é o certo.", visual: { tipo: "grupos", grupos: [{ imagemUrl: coracaoImg, quantidade: 1, rotulo: "Ajudar" }, { imagemUrl: confusoImg, quantidade: 1, rotulo: "Rir" }, { imagemUrl: tristeImg, quantidade: 1, rotulo: "Ignorar" }] } }, { pergunta: "Ajudar deixa o amigo…", opcoes: ["Feliz", "Triste"], correta: 0, explicacao: "Ajuda vira sorriso.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz" } }],
    medio: [{ pergunta: "Amigo tá chorando. Melhor atitude?", opcoes: ["Abraçar", "Sair correndo"], correta: 0, explicacao: "Abraço acolhe.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Abraço" } }, { pergunta: "Quem ajuda, sente o quê?", opcoes: ["Alegria também", "Nada"], correta: 0, explicacao: "Quem ajuda também fica feliz.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Alegria" } }],
    dificil: [{ pergunta: "Amigo esqueceu lanche. Melhor atitude?", opcoes: ["Dividir o meu", "Comer só o meu"], correta: 0, explicacao: "Dividir é ajudar.", visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "Dividir" } }, { pergunta: "Ajudar é obrigação ou presente?", opcoes: ["Presente pro amigo", "Só obrigação"], correta: 0, explicacao: "Ajudar por amor é presente.", visual: { tipo: "itens", imagemUrl: presenteImg, quantidade: 1, rotulo: "Presente" } }],
  },

  proximaHabilidade: {
    codigo: "EI03EO08",
    titulo: "Regras da Floresta",
  },
};

// Mantém imports usados em outras cenas do mesmo lote.
void piuImg; void confusoImg; void bravoImg; void tranquiloImg; void solImg; void livroImg;
void ursinhoImg; void boloImg; void presenteImg; void bolaImg; void balaoImg;
void florImg; void estrelaImg; void coracaoImg; void casaImg; void arvoreImg;

export default aula;
