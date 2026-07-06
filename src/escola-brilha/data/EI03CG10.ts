import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EI03CG10 — Aula 10: Jogos e brincadeiras
 * Estrela: ⭐ Movimento Total · Medalha: 🏅 Campeão do Mundo 2
 */
const aula: Aula = {
  codigo: "EI03CG10",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Jogos e Brincadeiras",

  narrativa: {
    titulo: "A festa do movimento",
    contexto: "É dia de festa na floresta! Todo mundo trouxe uma brincadeira: pega-pega, esconde-esconde, roda, bola. Todo corpo participa!",
    problema: "A décima e ÚLTIMA estrela do Mundo 2 acende quando a criança juntar TUDO que aprendeu num só jogo.",
    convite: "Bora fechar o Mundo 2 com uma grande festa?",
  },

  conhecimentosPrevios: ["Já brincou com amigos.", "Sabe correr, pular, dançar.", "Sabe esperar a vez."],

  missao: "Juntar corpo, gesto, ritmo, equilíbrio e sentidos numa brincadeira em grupo.",

  objetivos: ["Participar de brincadeiras coletivas.", "Respeitar a vez do amigo."],

  motivacao: "Brincar junto é a melhor forma de aprender e de fazer amigos!",

  explicacao: "BRINCADEIRAS em grupo:\n\n• PEGA-PEGA — usa as pernas.\n• ESCONDE-ESCONDE — usa os olhos.\n• RODA — usa a mão do amigo.\n• BOLA — usa os dois pés e olhos.\n• DANÇA — usa o corpo todo.\n\nRegras importantes: ESPERAR a vez, não empurrar, cuidar do amigo. Brincar junto é MAIS DIVERTIDO que brincar sozinho.",

  explicacaoAtiva: [
    { texto: "Todo mundo formou uma roda!", imagem: felizImg, imagemAlt: "Roda alegre" },
    { texto: "O Lupi pegou a bola primeiro.", imagem: bolaImg, imagemAlt: "Bola" },
    { texto: "A Fifi passou pra Piu, Piu pra Téo — passa a bola!", imagem: piuImg, imagemAlt: "Passa a bola", checagem: { pergunta: "Numa brincadeira em grupo, o que a gente precisa fazer?", opcoes: ["Esperar a vez e respeitar", "Empurrar pra ser o primeiro"], correta: 0, explicacao: "Isso! Esperar a vez é o segredo da brincadeira." } }
  ],

  explicacoesNiveis: {
    nivel1: "Brincadeira em grupo tem regra: esperar a vez.",
    nivel2: "Se cada um espera sua hora, o jogo fica divertido pra todo mundo.",
    nivel3: "Brincar em grupo é ensaio pra vida — a gente aprende a conviver.",
    nivel4: "Nas brincadeiras coletivas usamos corpo, sentidos e cabeça juntos.",
  },

  exemploResolvido: {
    enunciado: "Na roda tem 5 amigos. Vamos contar!",
    passos: ["1 Fifi", "2 Lupi", "3 Téo", "4 Piu", "5 Vovô Coruja"],
    resposta: "5 amigos na roda da festa.",
    interativo: { tipo: "contagem", imagemUrl: brilhaImg, quantidade: 5, nomeItem: "amigo", nomeItemPlural: "amigos", pergunta: "Quantos amigos na roda?" },
  },

  atividadeGuiada: {
    enunciado: "Três amigos correram no pega-pega. Quem chegou em 2º (MEIO)?",
    resposta: "O Téo chegou em 2º.",
    explicacao: "1º Lupi, 2º Téo, 3º Fifi.",
    visual: {
      tipo: "podio",
      pergunta: "Quem chegou em segundo lugar no pega-pega?",
      participantes: [{ nome: "Lupi", imagemUrl: lupiImg, posicao: 1 }, { nome: "Téo", imagemUrl: teoImg, posicao: 2 }, { nome: "Fifi", imagemUrl: fifiImg, posicao: 3 }],
      respostaCerta: "Téo",
    },
  },

  exercicios: [
    { enunciado: "🎮 Qual regra vale em toda brincadeira?", resposta: "Esperar a vez e respeitar o amigo.", dica: "Pensa numa brincadeira em grupo." },
    { enunciado: "🤝 O que é mais legal: brincar sozinho ou em grupo?", resposta: "Em grupo — mais rir, mais aprender.", dica: "Amigo traz alegria." },
    { enunciado: "🏆 Se meu amigo ganhou, o que faço?", resposta: "Bato palma pra ele.", dica: "Bom perdedor também é campeão." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 momentos da festa. Descubra a regra em cada.",
    resposta: "Toda brincadeira tem uma regra que cuida do grupo.",
    visual: {
      cena: [{ personagem: "Roda com todos", itemImagemUrl: felizImg, quantidade: 5, cor: "#FBBF24" }, { personagem: "Pega-pega", itemImagemUrl: lupiImg, quantidade: 3, cor: "#F472B6" }, { personagem: "Passa a bola", itemImagemUrl: bolaImg, quantidade: 1, cor: "#60A5FA" }],
      perguntas: [{ pergunta: "Na roda, o que a gente faz?", opcoes: ["Dá a mão", "Solta a mão"], correta: 0, explicacao: "Roda pede mãos dadas." }, { pergunta: "No pega-pega, o pego vira quem?", opcoes: ["O novo pegador", "Espectador"], correta: 0, explicacao: "Quem é pego assume." }, { pergunta: "Passando a bola, o que faço?", opcoes: ["Passo pra outro", "Guardo só pra mim"], correta: 0, explicacao: "Passar mantém o jogo." }],
    },
  },

  revisao: {
    pontos: ["Brincar em grupo une corpo, gesto e ritmo.", "Regras cuidam da alegria de todos.", "Esperar a vez é respeitar o amigo.", "Ganhar ou perder — todo mundo continua amigo."],
    dica: "Hoje: convide alguém da família pra brincar de roda ou passa-bola.",
  },

  quiz: [
    { pergunta: "Regra principal de toda brincadeira?", opcoes: ["Esperar a vez", "Ser o primeiro"], correta: 0, explicacao: "Esperar a vez respeita o grupo.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Respeito" } },
    { pergunta: "Se meu amigo ganhou, eu…", opcoes: ["Bato palma", "Fico bravo"], correta: 0, explicacao: "Palma pro amigo.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Feliz junto" } },
    { pergunta: "Quantos amigos na roda? (Fifi, Lupi, Téo, Piu, Coruja)", opcoes: ["3", "5", "7"], correta: 1, explicacao: "5 na roda.", visual: { tipo: "grupos", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FBBF24" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo", cor: "#60A5FA" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu", cor: "#A78BFA" }, { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja", cor: "#EF4444" }] } }
  ],

  conclusao: "🏅 Medalha: Campeão do Mundo 2! A DÉCIMA ESTRELA ⭐ acendeu — TODAS as 10 estrelas do Mundo 2 estão brilhando! Em Casa: organize uma brincadeira em grupo com quem cuida de você.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Crianças que brincam muito em grupo aprendem MAIS RÁPIDO na escola. Brincar é escola de vida!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Amigos na roda", instrucao: "Toque em cada amigo.", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }, { imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" }], pergunta: "Quantos amigos?", opcoes: ["3", "5", "6"], correta: 1, acerto: "5 amigos!", erro: "Conte um por um." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Bolas no jogo", instrucao: "Conte as bolas.", grupos: [{ imagemUrl: bolaImg, quantidade: 3, rotulo: "Bolas" }], pergunta: "Quantas bolas?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 bolas!", erro: "Um a um." },
    { tipo: "ligar", titulo: "Fase 3 · Brincadeira e movimento", instrucao: "Ligue a brincadeira ao movimento.", pares: [{ a: "Pega-pega", b: "correr", aImagem: lupiImg, aQuantidade: 1, bImagem: solImg, bQuantidade: 1 }, { a: "Roda", b: "dar as mãos", aImagem: felizImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 }, { a: "Passa-bola", b: "jogar e pegar", aImagem: bolaImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Estrela pra festa", instrucao: "Dê 1 estrela pra cada amigo da festa.", itemImagem: estrelaImg, alvosVisuais: [{ nome: "Fifi", cor: "#FBBF24", capacidade: 1, imagemUrl: fifiImg }, { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }, { nome: "Téo", cor: "#60A5FA", capacidade: 1, imagemUrl: teoImg }, { nome: "Piu", cor: "#A78BFA", capacidade: 1, imagemUrl: piuImg }, { nome: "Coruja", cor: "#EF4444", capacidade: 1, imagemUrl: corujaImg }], pares: [{ item: "E1", alvo: "Fifi" }, { item: "E2", alvo: "Lupi" }, { item: "E3", alvo: "Téo" }, { item: "E4", alvo: "Piu" }, { item: "E5", alvo: "Coruja" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Brincar sozinho ou em grupo é mais legal?", opcoes: ["Em grupo", "Sozinho sempre"], correta: 0, explicacao: "Grupo dá mais alegria.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Turma feliz" } }, { pergunta: "Roda pede o quê?", opcoes: ["Mãos dadas", "Correr solto"], correta: 0, explicacao: "Roda = mãos dadas.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "União" } }],
    medio: [{ pergunta: "Se meu amigo perdeu, o que faço?", opcoes: ["Consolo ele", "Rio dele"], correta: 0, explicacao: "Amigo bom consola.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Cuidado" } }, { pergunta: "Empurrar pra ganhar é certo?", opcoes: ["Não", "Sim"], correta: 0, explicacao: "Nunca empurrar.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Respeito" } }],
    dificil: [{ pergunta: "Toda brincadeira tem regra?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Regra cuida do jogo.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Regras" } }, { pergunta: "Brincar em grupo ensina o quê?", opcoes: ["Conviver", "Só correr"], correta: 0, explicacao: "Aprender a conviver.", visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 1, rotulo: "Convivência" } }],
  },

  proximaHabilidade: { codigo: "EI03TS01", titulo: "Mundo 3 — Traços, Sons, Cores e Formas" },
};

export default aula;
