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
 * EI03EO02 — Mundo 1 · Amigos da Floresta Encantada
 * Educação Infantil (4 e 5 anos) · Campo O Eu, o Outro e o Nós
 * Tema: "Minha Família"
 * Estrela recompensa: ⭐ Afeto
 * Medalha: 🏅 Guardião do Afeto
 */
const aula: Aula = {
  codigo: "EI03EO02",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Minha Família",

  narrativa: {
    titulo: "Minha Família",
    contexto: "O Brilha volta pra casa depois de brincar na floresta. Na casinha do Brilha tem a Mamãe Estrela, o Papai Estrela e o Vovô Coruja, que contam histórias. Cada um cuida do Brilha de um jeito.",
    problema: "A segunda estrela da Árvore da Amizade só acende quando a gente lembra QUEM cuida da gente. Será que a criança sabe apontar quem faz parte da família dela?",
    convite: "Bora entrar na casa do Brilha e conhecer a família?",
  },

  conhecimentosPrevios: ["Reconhecer mamãe, papai (ou quem cuida) pelo rosto.", "Saber quem mora na sua casa.", "Sentir carinho quando alguém da família abraça."],

  missao: "Descobrir que a família é o primeiro lugar onde recebemos e damos amor — cada família é diferente e todas são bonitas.",

  objetivos: ["Reconhecer as pessoas que cuidam de mim.", "Perceber que todo mundo tem uma família, mesmo que diferente."],

  motivacao: "Família é onde o coração mora. Não importa quantos são — importa quanto se ama!",

  explicacao: "MINHA FAMÍLIA cuida de mim.\n\n• Alguém faz COMIDA pra mim.\n• Alguém me dá ABRAÇO quando eu tô triste.\n• Alguém me leva pra DORMIR.\n• Alguém BRINCA comigo.\n\nCada família é diferente: tem família só com mamãe, só com papai, com os dois, com vovó, com tios. TODAS as famílias são certas quando têm amor.",

  explicacaoAtiva: [
    { texto: "Esta é a casa do Brilha. Toque na casinha!", imagem: casaImg, imagemAlt: "Casa da família Brilha" },
    { texto: "Esta é a Mamãe Estrela do Brilha. Ela faz comida gostosa.", imagem: brilhaImg, imagemAlt: "Mamãe Estrela" },
    { texto: "Este é o Vovô Coruja — sábio, ele conta histórias antes de dormir.", imagem: corujaImg, imagemAlt: "Vovô Coruja", checagem: { pergunta: "Sua família é a mesma que a do amiguinho do lado?", opcoes: ["Cada família é diferente e tudo bem", "Todas as famílias têm que ser iguais"], correta: 0, explicacao: "Isso! Cada família tem seu jeito, e todas são cheias de amor." } }
  ],

  explicacoesNiveis: {
    nivel1: "Família é quem cuida de mim todos os dias.",
    nivel2: "Na família do Brilha tem mamãe, papai e vovô coruja. Na minha família tem…",
    nivel3: "Família pode ser grande ou pequena — o que importa é o amor.",
    nivel4: "Em casa, cada pessoa da família ajuda de um jeito: cozinha, arruma, brinca, conta história.",
  },

  exemploResolvido: {
    enunciado: "Na casa do Brilha moram 3 pessoas: Mamãe, Papai e Vovô Coruja. Quantas pessoas cuidam do Brilha em casa?",
    passos: ["Toque na casa pra abrir a porta.", "Aponte pra Mamãe, pro Papai e pro Vovô Coruja — um, dois, três.", "Diga em voz alta: '3 pessoas cuidam do Brilha!'"],
    resposta: "3 pessoas fazem parte da família do Brilha e cuidam dele.",
    interativo: { tipo: "contagem", imagemUrl: casaImg, quantidade: 3, nomeItem: "pessoa da família", nomeItemPlural: "pessoas da família", pergunta: "Quantas pessoas moram na casa do Brilha?" },
  },

  atividadeGuiada: {
    enunciado: "O Brilha vai apresentar a família dele. Toque na Mamãe, no Papai e no Vovô Coruja. Quem fica no lugar do MEIO da foto?",
    resposta: "Papai Brilha está no meio — cada um da família tem seu lugar.",
    explicacao: "Na foto da família tem 3 pessoas. Quem está no meio é o Papai Brilha.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada elemento pra descobrir. Quem está no 2º lugar (meio)?",
      participantes: [{ nome: "Mamãe", imagemUrl: brilhaImg, posicao: 1 }, { nome: "Papai", imagemUrl: brilhaImg, posicao: 2 }, { nome: "Vovô Coruja", imagemUrl: corujaImg, posicao: 3 }],
      respostaCerta: "Papai",
    },
  },

  exercicios: [
    { enunciado: "👨‍👩‍👧 O Brilha abraça a Mamãe Estrela. Por que a gente abraça a família?", resposta: "Porque a família é quem a gente ama e que cuida da gente.", dica: "Pensa em quem te abraça em casa." },
    { enunciado: "🏠 Na casa do Brilha, o Vovô Coruja conta história antes de dormir. Isso é o quê?", resposta: "Isso é CARINHO. A família faz coisinhas gostosas pra gente todo dia.", dica: "Alguém faz algo assim com você?" },
    { enunciado: "💛 Toda família é igual à do Brilha?", resposta: "Não! Cada família é diferente — e todas são bonitas do seu jeito.", dica: "Quem mora na sua casa?" }
  ],

  desafio: {
    enunciado: "Desafio Brilha: apareceram 3 famílias diferentes na floresta. Toque em cada uma e diga se é uma família DE VERDADE.",
    resposta: "Todas são famílias de verdade — porque todas cuidam umas das outras.",
    visual: {
      cena: [{ personagem: "Família Estrela (mamãe e filho)", itemImagemUrl: brilhaImg, quantidade: 2, cor: "#FBBF24" }, { personagem: "Família Coruja (vovô e neta)", itemImagemUrl: corujaImg, quantidade: 2, cor: "#A78BFA" }, { personagem: "Família Coelho (pai e 2 filhotes)", itemImagemUrl: lupiImg, quantidade: 3, cor: "#F472B6" }],
      perguntas: [{ pergunta: "A Mamãe Estrela cuida do Brilha. Isso é família?", opcoes: ["Sim, é família", "Não, precisa ser maior"], correta: 0, explicacao: "É família sim! Duas pessoas que se cuidam já são uma família." }, { pergunta: "O Vovô Coruja mora com a netinha. Isso é família?", opcoes: ["Sim, é família", "Não, precisa ter mamãe e papai"], correta: 0, explicacao: "Sim! Vovô e neta também são uma família de verdade." }, { pergunta: "Papai Coelho cuida sozinho dos filhotinhos. É família?", opcoes: ["Sim, é família", "Não é família"], correta: 0, explicacao: "Sim! Onde tem alguém cuidando, tem família." }],
    },
  },

  revisao: {
    pontos: ["Família é quem cuida de mim.", "Cada família é diferente — e todas são certas.", "Abraço, comida e história são jeitos de mostrar amor.", "Eu também posso cuidar da minha família com carinho."],
    dica: "Hoje em casa, dê um abraço bem grande em alguém da sua família.",
  },

  quiz: [
    { pergunta: "Quem CUIDA de você em casa?", opcoes: ["A minha família", "Ninguém"], correta: 0, explicacao: "A família é quem cuida com amor.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Minha casa" } },
    { pergunta: "O Vovô Coruja conta história pro Brilha. Isso é o quê?", opcoes: ["Amor da família", "Só uma obrigação"], correta: 0, explicacao: "Contar história é um jeito de mostrar amor.", visual: { tipo: "comparar", lados: [{ imagemUrl: corujaImg, quantidade: 1, rotulo: "Vovô Coruja", cor: "#A78BFA" }, { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha", cor: "#FBBF24" }] } },
    { pergunta: "Quantas pessoas moram na casinha do Brilha? (Mamãe, Papai, Vovô)", opcoes: ["2", "3", "4"], correta: 1, explicacao: "São 3 pessoas na família do Brilha.", visual: { tipo: "grupos", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Mamãe", cor: "#FBBF24" }, { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Papai", cor: "#F59E0B" }, { imagemUrl: corujaImg, quantidade: 1, rotulo: "Vovô", cor: "#A78BFA" }] } }
  ],

  conclusao: "🏅 Medalha conquistada: Guardião do Afeto! A SEGUNDA ESTRELA ⭐ da Árvore da Amizade acendeu. Missão em Casa: dê um abraço bem apertado em alguém que cuida de você e diga 'eu te amo'.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Você sabia que quando a gente abraça alguém que ama, o coração da gente e o coração dela batem no mesmo ritmo? É verdade — é o amor sincronizando os corações.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · A casa do Brilha", instrucao: "Esta é a casa onde o Brilha mora com a família.", grupos: [{ imagemUrl: casaImg, quantidade: 1, rotulo: "Casa do Brilha" }], pergunta: "Quantas casas o Brilha tem?", opcoes: ["1", "2", "3"], correta: 0, acerto: "Isso! Cada família tem SUA casinha — o lugar do amor.", erro: "Olha bem: quantas casinhas você vê?" },
    { tipo: "contarQuiz", titulo: "Fase 2 · A família do Brilha", instrucao: "Estas são as pessoas que cuidam do Brilha em casa.", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Mamãe" }, { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Papai" }, { imagemUrl: corujaImg, quantidade: 1, rotulo: "Vovô" }], pergunta: "Quantas pessoas fazem parte da família?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Muito bem! São 3 pessoas na família do Brilha.", erro: "Conte um por um: Mamãe, Papai, Vovô." },
    { tipo: "ligar", titulo: "Fase 3 · Cada um cuida de um jeito", instrucao: "Ligue cada pessoa da família ao que ela faz pelo Brilha.", pares: [{ a: "Mamãe Estrela", b: "faz comida gostosa", aImagem: brilhaImg, aQuantidade: 1, bImagem: boloImg, bQuantidade: 1 }, { a: "Papai Brilha", b: "brinca de bola no quintal", aImagem: brilhaImg, aQuantidade: 1, bImagem: bolaImg, bQuantidade: 1 }, { a: "Vovô Coruja", b: "conta história antes de dormir", aImagem: corujaImg, aQuantidade: 1, bImagem: livroImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Presentes de amor pra família", instrucao: "Cada pessoa da família recebe 1 coração de carinho. Toque no coração e depois na pessoa.", itemImagem: coracaoImg, alvosVisuais: [{ nome: "Mamãe", cor: "#F472B6", capacidade: 1, imagemUrl: brilhaImg }, { nome: "Papai", cor: "#3B82F6", capacidade: 1, imagemUrl: brilhaImg }, { nome: "Vovô Coruja", cor: "#A78BFA", capacidade: 1, imagemUrl: corujaImg }], pares: [{ item: "Coração pra Mamãe", alvo: "Mamãe" }, { item: "Coração pro Papai", alvo: "Papai" }, { item: "Coração pro Vovô", alvo: "Vovô Coruja" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Qual imagem mostra a CASA da família?", opcoes: ["A casinha", "Uma flor", "Uma bola"], correta: 0, explicacao: "A casa é onde a família mora junta.", visual: { tipo: "grupos", grupos: [{ imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" }, { imagemUrl: florImg, quantidade: 1, rotulo: "Flor" }, { imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" }] } }, { pergunta: "Quantas pessoas tem na família do Brilha?", opcoes: ["1", "2", "3"], correta: 2, explicacao: "Mamãe, Papai e Vovô — 3 pessoas.", visual: { tipo: "grupos", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Mamãe" }, { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Papai" }, { imagemUrl: corujaImg, quantidade: 1, rotulo: "Vovô" }] } }],
    medio: [{ pergunta: "Quem CONTA HISTÓRIA pro Brilha antes de dormir?", opcoes: ["Mamãe", "Vovô Coruja", "Papai"], correta: 1, explicacao: "O Vovô Coruja adora contar histórias.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "Vovô Coruja" } }, { pergunta: "O Brilha ganhou um abraço. Como ele se sente?", opcoes: ["Feliz", "Triste", "Bravo"], correta: 0, explicacao: "Abraço de família deixa a gente FELIZ.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Brilha depois do abraço" } }],
    dificil: [{ pergunta: "Toda família tem que ter o mesmo número de pessoas?", opcoes: ["Não — cada família é do seu jeito", "Sim, tem que ser igual"], correta: 0, explicacao: "Cada família é única, pode ser pequena ou grande.", visual: { tipo: "comparar", lados: [{ imagemUrl: brilhaImg, quantidade: 2, rotulo: "Família 1", cor: "#FBBF24" }, { imagemUrl: lupiImg, quantidade: 3, rotulo: "Família 2", cor: "#F472B6" }] } }, { pergunta: "O que faz um grupo de pessoas ser uma FAMÍLIA?", opcoes: ["O amor e o cuidado", "Morar no mesmo prédio"], correta: 0, explicacao: "Família é feita de amor, não do endereço.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Amor" } }],
  },

  proximaHabilidade: {
    codigo: "EI03EO03",
    titulo: "Meus Amigos — brincar junto",
  },
};

// Mantém imports usados em outras cenas do mesmo lote.
void piuImg; void confusoImg; void bravoImg; void tranquiloImg; void solImg; void livroImg;
void ursinhoImg; void boloImg; void presenteImg; void bolaImg; void balaoImg;
void florImg; void estrelaImg; void coracaoImg; void casaImg; void arvoreImg;

export default aula;
