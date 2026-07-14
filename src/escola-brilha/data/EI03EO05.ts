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
 * EI03EO05 — Mundo 1 · Amigos da Floresta Encantada
 * Educação Infantil (4 e 5 anos) · Campo O Eu, o Outro e o Nós
 * Tema: "Compartilhar"
 * Estrela recompensa: ⭐ Cooperação
 * Medalha: 🏅 Guardião da Cooperação
 */
const aula: Aula = {
  codigo: "EI03EO05",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Compartilhar",

  narrativa: {
    titulo: "Compartilhar",
    contexto: "O Brilha ganhou um monte de brinquedos novos: bola, balão, ursinho. A Fifi chegou perto e olhou com desejo. O Brilha ficou com dúvida: 'divido ou não?'.",
    problema: "A quinta estrela só acende quando alguém aprende a COMPARTILHAR. Bora ajudar o Brilha a decidir?",
    convite: "Vamos dividir os brinquedos com os amigos!",
  },

  conhecimentosPrevios: ["Emprestar um brinquedo por alguns minutos.", "Esperar a vez.", "Dizer 'obrigado' e 'de nada'."],

  missao: "Entender que compartilhar deixa a brincadeira MELHOR — não pior.",

  objetivos: ["Decidir quando e como dividir.", "Perceber que dividir gera novos amigos."],

  motivacao: "Brinquedo dividido é brincadeira dobrada. Quem compartilha ganha um amigo de bônus!",

  explicacao: "COMPARTILHAR é dar um pedacinho do meu pra você poder ter também.\n\n• Um brinquedo → dois amigos brincando.\n• Um lanche → dois amigos alimentados.\n• Um sorriso → o dia de todo mundo melhor.\n\nCompartilhar NÃO é dar tudo. É dividir, esperar a vez e devolver.",

  explicacaoAtiva: [
    { texto: "Este é o ursinho do Brilha. Ele pode ser dividido!", imagem: ursinhoImg, imagemAlt: "Ursinho" },
    { texto: "Esta é a Fifi. Ela quer brincar de ursinho junto.", imagem: fifiImg, imagemAlt: "Fifi" },
    { texto: "Este é o balão. Um balão pra cada amigo = alegria dupla!", imagem: balaoImg, imagemAlt: "Balão", checagem: { pergunta: "Quando divido o brinquedo, eu FICO SEM ele pra sempre?", opcoes: ["Não, o amigo devolve depois", "Sim, perco pra sempre"], correta: 0, explicacao: "Dividir é temporário — o brinquedo volta pra você." } }
  ],

  explicacoesNiveis: {
    nivel1: "Compartilhar = dividir com alguém.",
    nivel2: "Um brinquedo dividido = 2 crianças brincando juntas.",
    nivel3: "Compartilhar cria amigos, não perde brinquedos.",
    nivel4: "Em casa e na escola, dividir lanche, jogo e espaço é atitude bonita.",
  },

  exemploResolvido: {
    enunciado: "O Brilha tinha 1 ursinho. Chegou a Fifi. Agora o ursinho é de quantos?",
    passos: ["Toque no ursinho.", "Toque no Brilha e na Fifi.", "Conte: 2 amigos, 1 ursinho pra dividir."],
    resposta: "1 ursinho pra 2 amigos = dividir!",
    interativo: { tipo: "contagem", imagemUrl: ursinhoImg, quantidade: 1, nomeItem: "ursinho", nomeItemPlural: "ursinhos", pergunta: "Quantos ursinhos existem pra dividir entre 2 amigos?" },
  },

  atividadeGuiada: {
    enunciado: "Três brinquedos aparecem em fila. Qual está no MEIO pra dividir primeiro?",
    resposta: "O balão está no meio.",
    explicacao: "Fila: Bola (1º), Balão (2º), Ursinho (3º). O balão é o do meio.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada elemento pra descobrir. Quem está no 2º lugar (meio)?",
      participantes: [{ nome: "Bola", imagemUrl: bolaImg, posicao: 1 }, { nome: "Balão", imagemUrl: balaoImg, posicao: 2 }, { nome: "Ursinho", imagemUrl: ursinhoImg, posicao: 3 }],
      respostaCerta: "Balão",
    },
  },

  exercicios: [
    { enunciado: "🎁 A Fifi pediu pra brincar com seu ursinho. O que você faz?", resposta: "Empresto por um tempinho e depois ele volta pra mim.", dica: "Dividir não é perder." },
    { enunciado: "🍪 Você tem 2 biscoitos. Um amigo tá sem. O que rola?", resposta: "Ofereço 1 biscoito. Ele fica feliz e a gente lancha junto.", dica: "Dividir comida é gesto lindo." },
    { enunciado: "🎈 Se a gente só divide quando quer receber algo em troca, tá certo?", resposta: "Não. A gente divide porque é gostoso ver o amigo feliz também.", dica: "Compartilhar por amor, não por troca." }
  ],

  desafio: {
    enunciado: "Três situações. Você escolhe: DIVIDIR ou GUARDAR SÓ PRA MIM?",
    resposta: "Sempre que dá, dividir é o melhor caminho.",
    visual: {
      cena: [{ personagem: "Ursinho", itemImagemUrl: ursinhoImg, quantidade: 1, cor: "#F59E0B" }, { personagem: "Balão", itemImagemUrl: balaoImg, quantidade: 1, cor: "#F472B6" }, { personagem: "Bola", itemImagemUrl: bolaImg, quantidade: 1, cor: "#3B82F6" }],
      perguntas: [{ pergunta: "Você tem 1 ursinho, a Fifi pediu emprestado. O que faz?", opcoes: ["Empresta", "Não empresta"], correta: 0, explicacao: "Emprestar é atitude bonita." }, { pergunta: "Você tem 2 balões, o Lupi tá sem. O que faz?", opcoes: ["Dá 1 balão", "Fica com os 2"], correta: 0, explicacao: "Um pra cada — igualzinho!" }, { pergunta: "A bola é de todos no parque. Você joga sozinho?", opcoes: ["Chama os amigos pra jogar junto", "Joga só"], correta: 0, explicacao: "Bola é mais gostosa em grupo." }],
    },
  },

  revisao: {
    pontos: ["Compartilhar = dividir com carinho.", "Dividir não é perder — o brinquedo volta.", "Um brinquedo dividido = dois amigos felizes.", "Compartilhar cria amizade."],
    dica: "Hoje, ofereça um pedacinho do seu lanche pra alguém.",
  },

  quiz: [
    { pergunta: "Se eu dividir, eu fico sem pra sempre?", opcoes: ["Não, volta pra mim", "Sim, perco pra sempre"], correta: 0, explicacao: "Dividir é temporário.", visual: { tipo: "itens", imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Volta pra mim" } },
    { pergunta: "Um brinquedo dividido deixa quantas crianças felizes?", opcoes: ["1", "2", "0"], correta: 1, explicacao: "As duas ficam felizes — o dono e o amigo.", visual: { tipo: "grupos", grupos: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha", cor: "#FBBF24" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FB923C" }] } },
    { pergunta: "Quantos brinquedos aparecem na cena pra dividir?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "Bola, balão e ursinho — 3 brinquedos.", visual: { tipo: "grupos", grupos: [{ imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" }, { imagemUrl: balaoImg, quantidade: 1, rotulo: "Balão" }, { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Ursinho" }] } }
  ],

  conclusao: "🏅 Medalha conquistada: Guardião da Cooperação! A QUINTA ESTRELA ⭐ acendeu. Missão em Casa: divida um brinquedo ou um lanche com alguém hoje.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Você sabia que dividir libera no cérebro a mesma sensação boa de ganhar um presente? Quem dá também sente alegria — é ciência!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Brinquedos pra dividir", instrucao: "Estes são os brinquedos do Brilha.", grupos: [{ imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" }, { imagemUrl: balaoImg, quantidade: 1, rotulo: "Balão" }, { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Ursinho" }], pergunta: "Quantos brinquedos podem ser divididos?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 brinquedos = 3 chances de dividir!", erro: "Aponte: bola, balão, ursinho." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Amigos que querem brincar", instrucao: "Estes amigos querem brincar junto.", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }], pergunta: "Quantos amigos querem participar?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 amigos — dá pra cada um receber um brinquedo!", erro: "Fifi, Lupi e Téo." },
    { tipo: "ligar", titulo: "Fase 3 · Um brinquedo pra cada amigo", instrucao: "Ligue cada amigo ao brinquedo que ele vai receber.", pares: [{ a: "Fifi", b: "fica com a bola", aImagem: fifiImg, aQuantidade: 1, bImagem: bolaImg, bQuantidade: 1 }, { a: "Lupi", b: "fica com o balão", aImagem: lupiImg, aQuantidade: 1, bImagem: balaoImg, bQuantidade: 1 }, { a: "Téo", b: "fica com o ursinho", aImagem: teoImg, aQuantidade: 1, bImagem: ursinhoImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Dividindo com carinho", instrucao: "Arraste 1 balão pra cada amigo — dividindo!", itemImagem: balaoImg, alvosVisuais: [{ nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg }, { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }, { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg }], pares: [{ item: "Balão pra Fifi", alvo: "Fifi" }, { item: "Balão pro Lupi", alvo: "Lupi" }, { item: "Balão pro Téo", alvo: "Téo" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Compartilhar é…", opcoes: ["Dividir com o amigo", "Guardar tudo"], correta: 0, explicacao: "Compartilhar = dividir.", visual: { tipo: "itens", imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Dividir" } }, { pergunta: "Quantos brinquedos tem pra dividir?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3 brinquedos na cena.", visual: { tipo: "grupos", grupos: [{ imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" }, { imagemUrl: balaoImg, quantidade: 1, rotulo: "Balão" }, { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Ursinho" }] } }],
    medio: [{ pergunta: "A Fifi pediu o ursinho emprestado. Você…", opcoes: ["Empresta com carinho", "Nega e sai"], correta: 0, explicacao: "Emprestar mostra amizade.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi pedindo" } }, { pergunta: "Depois de brincar, o Lupi devolve o balão?", opcoes: ["Sim, devolve", "Não devolve"], correta: 0, explicacao: "Amigo bom sempre devolve.", visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 1, rotulo: "Devolvido" } }],
    dificil: [{ pergunta: "Dividir é a mesma coisa que perder pra sempre?", opcoes: ["Não — é emprestar", "Sim — perco tudo"], correta: 0, explicacao: "É temporário e o brinquedo volta.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Divide" } }, { pergunta: "Um brinquedo dividido faz o quê?", opcoes: ["Deixa dois amigos felizes", "Estraga a brincadeira"], correta: 0, explicacao: "Dobra a alegria.", visual: { tipo: "comparar", lados: [{ imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha", cor: "#FBBF24" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FB923C" }] } }],
  },

  proximaHabilidade: {
    codigo: "EI03EO06",
    titulo: "Respeito às Diferenças",
  },
};

// Mantém imports usados em outras cenas do mesmo lote.
void piuImg; void confusoImg; void bravoImg; void tranquiloImg; void solImg; void livroImg;
void ursinhoImg; void boloImg; void presenteImg; void bolaImg; void balaoImg;
void florImg; void estrelaImg; void coracaoImg; void casaImg; void arvoreImg;

export default aula;
