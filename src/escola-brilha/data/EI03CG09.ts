import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";

/**
 * EI03CG09 — Aula 9: Cinco sentidos
 * Estrela: ⭐ Sentidos Despertos · Medalha: 🏅 Explorador dos Sentidos
 */
const aula: Aula = {
  codigo: "EI03CG09",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Cinco Sentidos",

  narrativa: {
    titulo: "A trilha dos sentidos",
    contexto: "O Vovô Coruja levou a turma numa trilha. 'OLHEM as flores, OUÇAM os passarinhos, CHEIREM o mato, TOQUEM a árvore, PROVEM a fruta.'",
    problema: "A nona estrela só acende quando a criança descobrir os 5 SENTIDOS do corpo.",
    convite: "Bora explorar a trilha com todos os sentidos?",
  },

  conhecimentosPrevios: ["Vê com os olhos.", "Ouve com os ouvidos.", "Sabe que tem gosto e cheiro."],

  missao: "Descobrir os 5 sentidos: visão, audição, olfato, tato e paladar.",

  objetivos: ["Nomear os 5 sentidos.", "Ligar cada sentido à parte do corpo."],

  motivacao: "Todo dia o corpo sente o mundo — de 5 jeitos diferentes!",

  explicacao: "Meu corpo tem 5 SENTIDOS:\n\n• 👀 VISÃO — olhos que veem cores e formas.\n• 👂 AUDIÇÃO — ouvidos que escutam som.\n• 👃 OLFATO — nariz que cheira.\n• ✋ TATO — pele que sente frio, quente, macio, áspero.\n• 👅 PALADAR — língua que sente sabor: doce, salgado, azedo.\n\nJunto, os sentidos contam pra gente tudo o que está acontecendo.",

  explicacaoAtiva: [
    { texto: "A Fifi VÊ uma flor colorida.", imagem: florImg, imagemAlt: "Flor" },
    { texto: "O Piu OUVE o som do vento.", imagem: piuImg, imagemAlt: "Piu ouvindo" },
    { texto: "O Téo PROVA uma fruta doce.", imagem: macaImg, imagemAlt: "Maçã", checagem: { pergunta: "Com o que sinto o sabor?", opcoes: ["A língua", "O joelho"], correta: 0, explicacao: "Isso! A língua sente o sabor." } }
  ],

  explicacoesNiveis: {
    nivel1: "5 sentidos: ver, ouvir, cheirar, tocar, provar.",
    nivel2: "Se eu fecho os olhos, ainda ouço o passarinho — o ouvido continua.",
    nivel3: "Sentidos são as antenas do corpo.",
    nivel4: "Quem não tem um sentido usa os outros com mais força — todos ajudam.",
  },

  exemploResolvido: {
    enunciado: "Quantos sentidos tenho no total?",
    passos: ["1. Visão", "2. Audição", "3. Olfato", "4. Tato", "5. Paladar"],
    resposta: "5 sentidos.",
    interativo: { tipo: "contagem", imagemUrl: estrelaImg, quantidade: 5, nomeItem: "sentido", nomeItemPlural: "sentidos", pergunta: "Quantos sentidos meu corpo tem?" },
  },

  atividadeGuiada: {
    enunciado: "Três amigos usaram um sentido cada. Quem está no MEIO?",
    resposta: "A Fifi está no meio.",
    explicacao: "1º Piu (ouvir), 2º Fifi (ver), 3º Téo (provar).",
    visual: {
      tipo: "podio",
      pergunta: "Quem está no meio da trilha dos sentidos?",
      participantes: [{ nome: "Piu", imagemUrl: piuImg, posicao: 1 }, { nome: "Fifi", imagemUrl: fifiImg, posicao: 2 }, { nome: "Téo", imagemUrl: teoImg, posicao: 3 }],
      respostaCerta: "Fifi",
    },
  },

  exercicios: [
    { enunciado: "👁️ Com o que a gente VÊ?", resposta: "Com os olhos.", dica: "Olha ao redor agora." },
    { enunciado: "👃 Com o que a gente CHEIRA?", resposta: "Com o nariz.", dica: "Respire fundo." },
    { enunciado: "🤚 Com o que a gente sente MACIO ou ÁSPERO?", resposta: "Com a pele (tato).", dica: "Toque o próprio braço." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 situações. Descubra qual sentido usar.",
    resposta: "Cada sentido pra cada situação.",
    visual: {
      cena: [{ personagem: "Flor colorida", itemImagemUrl: florImg, quantidade: 1, cor: "#F472B6" }, { personagem: "Bolo quentinho", itemImagemUrl: boloImg, quantidade: 1, cor: "#FBBF24" }, { personagem: "Pássaro cantando", itemImagemUrl: piuImg, quantidade: 1, cor: "#60A5FA" }],
      perguntas: [{ pergunta: "Pra ver a flor colorida?", opcoes: ["Olhos", "Boca"], correta: 0, explicacao: "Olhos veem cor." }, { pergunta: "Pra sentir o cheiro do bolo?", opcoes: ["Nariz", "Pé"], correta: 0, explicacao: "Nariz cheira." }, { pergunta: "Pra ouvir o pássaro?", opcoes: ["Ouvido", "Mão"], correta: 0, explicacao: "Ouvido escuta." }],
    },
  },

  revisao: {
    pontos: ["5 sentidos: visão, audição, olfato, tato, paladar.", "Cada sentido é uma parte do corpo.", "Juntos, sentem o mundo todo.", "Fechar os olhos ajuda a treinar o ouvido."],
    dica: "Hoje: feche os olhos e diga 3 sons que você escuta.",
  },

  quiz: [
    { pergunta: "Com o quê OUVIMOS?", opcoes: ["Ouvido", "Nariz"], correta: 0, explicacao: "Ouvido escuta.", visual: { tipo: "itens", imagemUrl: piuImg, quantidade: 1, rotulo: "Piu cantando" } },
    { pergunta: "Com o quê CHEIRAMOS?", opcoes: ["Nariz", "Olho"], correta: 0, explicacao: "Nariz cheira.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "Flor cheirosa" } },
    { pergunta: "Quantos sentidos temos?", opcoes: ["3", "5", "10"], correta: 1, explicacao: "5 sentidos.", visual: { tipo: "grupos", grupos: [{ imagemUrl: solImg, quantidade: 1, rotulo: "Ver", cor: "#FBBF24" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Ouvir", cor: "#60A5FA" }, { imagemUrl: florImg, quantidade: 1, rotulo: "Cheirar", cor: "#F472B6" }, { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Tocar", cor: "#A78BFA" }, { imagemUrl: macaImg, quantidade: 1, rotulo: "Provar", cor: "#EF4444" }] } }
  ],

  conclusao: "🏅 Medalha: Explorador dos Sentidos! A NONA ESTRELA ⭐ acendeu. Em Casa: use cada sentido pra explorar 1 objeto da casa.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Sua língua tem mais de 10.000 bolinhas pequenininhas — cada uma sente um pedacinho do sabor!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Os 5 sentidos", instrucao: "Conte cada sentido.", grupos: [{ imagemUrl: solImg, quantidade: 1, rotulo: "Ver" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Ouvir" }, { imagemUrl: florImg, quantidade: 1, rotulo: "Cheirar" }, { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Tocar" }, { imagemUrl: macaImg, quantidade: 1, rotulo: "Provar" }], pergunta: "Quantos sentidos?", opcoes: ["3", "5", "7"], correta: 1, acerto: "5 sentidos!", erro: "Conte um por um." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Amigos na trilha", instrucao: "Conte os exploradores.", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }], pergunta: "Quantos exploradores?", opcoes: ["2", "3"], correta: 1, acerto: "3 amigos!", erro: "Um por um." },
    { tipo: "ligar", titulo: "Fase 3 · Sentido e parte do corpo", instrucao: "Ligue o sentido à parte do corpo.", pares: [{ a: "Ver", b: "olhos", aImagem: solImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 }, { a: "Ouvir", b: "ouvidos", aImagem: piuImg, aQuantidade: 1, bImagem: piuImg, bQuantidade: 1 }, { a: "Cheirar", b: "nariz", aImagem: florImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Estrela pra cada sentido usado", instrucao: "Dê 1 estrela pra cada amigo.", itemImagem: estrelaImg, alvosVisuais: [{ nome: "Fifi", cor: "#FBBF24", capacidade: 1, imagemUrl: fifiImg }, { nome: "Piu", cor: "#60A5FA", capacidade: 1, imagemUrl: piuImg }, { nome: "Téo", cor: "#F472B6", capacidade: 1, imagemUrl: teoImg }], pares: [{ item: "E1", alvo: "Fifi" }, { item: "E2", alvo: "Piu" }, { item: "E3", alvo: "Téo" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Olho é pra…", opcoes: ["Ver", "Comer"], correta: 0, explicacao: "Olho vê.", visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "Ver" } }, { pergunta: "Ouvido é pra…", opcoes: ["Ouvir", "Cheirar"], correta: 0, explicacao: "Ouvido ouve.", visual: { tipo: "itens", imagemUrl: piuImg, quantidade: 1, rotulo: "Ouvir" } }],
    medio: [{ pergunta: "Sinto macio com o quê?", opcoes: ["Pele", "Boca"], correta: 0, explicacao: "Pele é tato.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Tato" } }, { pergunta: "Sabor sinto com o quê?", opcoes: ["Língua", "Olho"], correta: 0, explicacao: "Língua sente sabor.", visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "Sabor" } }],
    dificil: [{ pergunta: "Se eu fecho os olhos, ainda escuto?", opcoes: ["Sim, um sentido não bloqueia o outro", "Não escuto mais"], correta: 0, explicacao: "Sentidos trabalham independentes.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Escutando" } }, { pergunta: "Quem não vê pode usar mais…", opcoes: ["Os outros sentidos", "Nenhum"], correta: 0, explicacao: "Tato e audição ficam mais fortes.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Adaptação" } }],
  },

  proximaHabilidade: { codigo: "EI03CG10", titulo: "Jogos e brincadeiras" },
};

void lupiImg;

export default aula;
