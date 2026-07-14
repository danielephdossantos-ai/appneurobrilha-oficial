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
 * EI03EO03 — Mundo 1 · Amigos da Floresta Encantada
 * Educação Infantil (4 e 5 anos) · Campo O Eu, o Outro e o Nós
 * Tema: "Meus Amigos"
 * Estrela recompensa: ⭐ Amizade
 * Medalha: 🏅 Guardião da Amizade
 */
const aula: Aula = {
  codigo: "EI03EO03",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Meus Amigos",

  narrativa: {
    titulo: "Meus Amigos",
    contexto: "O Brilha foi brincar no parque da Floresta Encantada. Encontrou o Lupi no escorregador, a Fifi no balanço e o Téo na areia. Cada um brincava sozinho.",
    problema: "A terceira estrela só acende quando os amigos brincam JUNTOS. Só que ninguém sabe começar a brincadeira. Bora ajudar?",
    convite: "Vamos aprender atitudes que fazem amigos!",
  },

  conhecimentosPrevios: ["Chamar um amiguinho pelo nome.", "Saber dizer 'oi' e 'tchau'.", "Emprestar um brinquedo por alguns minutinhos."],

  missao: "Descobrir que amigo de verdade é aquele que brinca junto, empresta, ri e cuida.",

  objetivos: ["Escolher atitudes que fazem novos amigos.", "Perceber que amizade é dividir e brincar junto."],

  motivacao: "Amigo é o presente que a gente escolhe. Quando amigos brincam juntos, tudo fica mais divertido!",

  explicacao: "AMIGO é quem:\n\n• Sorri pra você.\n• EMPRESTA o brinquedo.\n• Convida pra brincar.\n• Ajuda quando você tá triste.\n\nPra ganhar amigo, é só oferecer: sorriso, brinquedo, brincadeira. É simples e é bonito!",

  explicacaoAtiva: [
    { texto: "Este é o parque da floresta. Toque na árvore pra entrar!", imagem: arvoreImg, imagemAlt: "Parque da floresta" },
    { texto: "O Lupi está sozinho no escorregador. Vamos chamar ele!", imagem: lupiImg, imagemAlt: "Lupi coelho" },
    { texto: "A Fifi trouxe uma bola. Ela quer dividir!", imagem: fifiImg, imagemAlt: "Fifi raposa", checagem: { pergunta: "O que faz alguém virar seu AMIGO?", opcoes: ["Brincar junto e dividir", "Só olhar de longe"], correta: 0, explicacao: "Isso! Amizade acontece quando a gente brinca e divide." } }
  ],

  explicacoesNiveis: {
    nivel1: "Amigo é quem brinca comigo.",
    nivel2: "Quando eu empresto um brinquedo, faço um amigo feliz.",
    nivel3: "Amigos são diferentes: uns pulam, outros correm, outros são calmos. Todos podem ser amigos.",
    nivel4: "Na escola, eu posso convidar quem está sozinho pra brincar — isso é atitude de amigo.",
  },

  exemploResolvido: {
    enunciado: "No parque, o Lupi, a Fifi e o Téo se conheceram e viraram amigos. Quantos amigos novos apareceram?",
    passos: ["Toque no Lupi.", "Toque na Fifi.", "Toque no Téo. Conte: 1, 2, 3!"],
    resposta: "3 novos amigos brincando juntos no parque.",
    interativo: { tipo: "contagem", imagemUrl: lupiImg, quantidade: 3, nomeItem: "amigo", nomeItemPlural: "amigos", pergunta: "Quantos amigos brincam juntos no parque?" },
  },

  atividadeGuiada: {
    enunciado: "Três amigos entraram no parque em ordem. Quem foi o SEGUNDO a chegar?",
    resposta: "A Fifi foi a segunda a chegar no parque.",
    explicacao: "Ordem de chegada: Lupi (1º), Fifi (2ª) e Téo (3º).",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada elemento pra descobrir. Quem está no 2º lugar (meio)?",
      participantes: [{ nome: "Lupi", imagemUrl: lupiImg, posicao: 1 }, { nome: "Fifi", imagemUrl: fifiImg, posicao: 2 }, { nome: "Téo", imagemUrl: teoImg, posicao: 3 }],
      respostaCerta: "Fifi",
    },
  },

  exercicios: [
    { enunciado: "🎈 A Fifi trouxe uma bola. Ela pode fazer o quê pra ganhar amigos?", resposta: "Dividir a bola e chamar pra brincar juntos.", dica: "Um brinquedo dividido vira brincadeira dupla." },
    { enunciado: "😊 O Lupi tava sozinho. O Téo chegou e sorriu pra ele. Isso é o quê?", resposta: "Um jeitinho de começar amizade — com sorriso.", dica: "Sorriso é o primeiro convite pra brincar." },
    { enunciado: "🤝 Amigos precisam ser IGUAIS?", resposta: "Não! Amigos podem ser bem diferentes — e é isso que deixa a amizade legal.", dica: "Pense em amigos seus que gostam de coisas diferentes." }
  ],

  desafio: {
    enunciado: "Três amiguinhos aparecem. Você escolhe qual atitude é DE AMIGO em cada caso.",
    resposta: "Todas as atitudes boas ajudam a fazer amizade.",
    visual: {
      cena: [{ personagem: "Lupi coelho", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" }, { personagem: "Fifi raposa", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" }, { personagem: "Téo tartaruga", itemImagemUrl: teoImg, quantidade: 1, cor: "#34D399" }],
      perguntas: [{ pergunta: "O Lupi está sozinho. Qual é a atitude de AMIGO?", opcoes: ["Chamar pra brincar", "Ignorar"], correta: 0, explicacao: "Chamar pra brincar é atitude de amigo verdadeiro." }, { pergunta: "A Fifi tem só uma bola. O que fazer?", opcoes: ["Dividir a bola", "Esconder a bola"], correta: 0, explicacao: "Dividir é o que amigo faz." }, { pergunta: "O Téo caiu. O que um amigo faz?", opcoes: ["Ajuda a levantar", "Ri dele"], correta: 0, explicacao: "Amigo ajuda quando o outro precisa." }],
    },
  },

  revisao: {
    pontos: ["Amigo é quem brinca junto.", "Sorriso, brinquedo dividido e convite fazem amizade.", "Amigos podem ser diferentes — e tudo bem.", "Ajudar amigo triste é atitude bonita."],
    dica: "Amanhã na escola, chame alguém que está sozinho pra brincar.",
  },

  quiz: [
    { pergunta: "O que um amigo VERDADEIRO faz?", opcoes: ["Divide o brinquedo", "Nunca empresta nada"], correta: 0, explicacao: "Amigo divide e brinca junto.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola dividida" } },
    { pergunta: "Amigos precisam ser iguaizinhos?", opcoes: ["Não — cada um do seu jeito", "Sim, tem que ser igual"], correta: 0, explicacao: "A amizade fica mais legal com jeitinhos diferentes.", visual: { tipo: "comparar", lados: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo", cor: "#34D399" }] } },
    { pergunta: "Quantos amiguinhos brincam no parque?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "Lupi, Fifi e Téo — 3 amigos.", visual: { tipo: "grupos", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FB923C" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo", cor: "#34D399" }] } }
  ],

  conclusao: "🏅 Medalha conquistada: Guardião da Amizade! A TERCEIRA ESTRELA ⭐ acendeu. Missão em Casa: amanhã, sorria e diga 'oi' pra alguém novo.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Você sabia que rir com um amigo faz o cérebro liberar uma coisinha chamada endorfina? Ela deixa a gente MAIS FELIZ. Rir junto vira remédio!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Amigos no parque", instrucao: "Estes são os amigos que chegaram no parque.", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }], pergunta: "Quantos amigos apareceram?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Isso! 3 amigos prontos pra brincar.", erro: "Conte de novo: Lupi, Fifi, Téo." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Brinquedos pra dividir", instrucao: "A Fifi trouxe brinquedos. Toque em cada um.", grupos: [{ imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" }, { imagemUrl: balaoImg, quantidade: 1, rotulo: "Balão" }, { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Ursinho" }], pergunta: "Quantos brinquedos pra dividir?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 brinquedos — dá pra cada amigo brincar!", erro: "Conte um por um." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo com sua brincadeira", instrucao: "Ligue cada amiguinho ao brinquedo que ele ama.", pares: [{ a: "Lupi coelho", b: "adora bola", aImagem: lupiImg, aQuantidade: 1, bImagem: bolaImg, bQuantidade: 1 }, { a: "Fifi raposa", b: "adora balão", aImagem: fifiImg, aQuantidade: 1, bImagem: balaoImg, bQuantidade: 1 }, { a: "Téo tartaruga", b: "adora ursinho", aImagem: teoImg, aQuantidade: 1, bImagem: ursinhoImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Um sorriso pra cada amigo", instrucao: "Dê 1 coração de amizade pra cada amigo. Toque no coração e depois no amiguinho.", itemImagem: coracaoImg, alvosVisuais: [{ nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }, { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg }, { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg }], pares: [{ item: "Coração pro Lupi", alvo: "Lupi" }, { item: "Coração pra Fifi", alvo: "Fifi" }, { item: "Coração pro Téo", alvo: "Téo" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Qual atitude é de AMIGO?", opcoes: ["Dividir o brinquedo", "Esconder o brinquedo", "Chorar"], correta: 0, explicacao: "Dividir mostra amizade.", visual: { tipo: "grupos", grupos: [{ imagemUrl: bolaImg, quantidade: 1, rotulo: "Dividir" }, { imagemUrl: presenteImg, quantidade: 1, rotulo: "Esconder" }, { imagemUrl: tristeImg, quantidade: 1, rotulo: "Chorar" }] } }, { pergunta: "Quantos amigos apareceram no parque?", opcoes: ["1", "2", "3"], correta: 2, explicacao: "3 amigos: Lupi, Fifi e Téo.", visual: { tipo: "grupos", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }] } }],
    medio: [{ pergunta: "A Fifi divide a bola com o Lupi. Como o Lupi se sente?", opcoes: ["Feliz", "Triste", "Bravo"], correta: 0, explicacao: "Ser incluído deixa a gente FELIZ.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Lupi feliz" } }, { pergunta: "Amigo é o quê?", opcoes: ["Quem brinca junto", "Quem só briga"], correta: 0, explicacao: "Amigo é parceria e brincadeira.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Amizade" } }],
    dificil: [{ pergunta: "O Téo tá sozinho. Qual atitude vale mais?", opcoes: ["Chamar pra brincar", "Deixar sozinho"], correta: 0, explicacao: "Incluir é atitude de amigo.", visual: { tipo: "itens", imagemUrl: teoImg, quantidade: 1, rotulo: "Téo sozinho" } }, { pergunta: "Amigos podem ser diferentes?", opcoes: ["Sim, cada um do seu jeito", "Não, tem que ser igual"], correta: 0, explicacao: "Diferenças deixam a amizade rica.", visual: { tipo: "comparar", lados: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo", cor: "#34D399" }] } }],
  },

  proximaHabilidade: {
    codigo: "EI03EO04",
    titulo: "Minhas Emoções — reconhecer sentimentos",
  },
};

// Mantém imports usados em outras cenas do mesmo lote.
void piuImg; void confusoImg; void bravoImg; void tranquiloImg; void solImg; void livroImg;
void ursinhoImg; void boloImg; void presenteImg; void bolaImg; void balaoImg;
void florImg; void estrelaImg; void coracaoImg; void casaImg; void arvoreImg;

export default aula;
