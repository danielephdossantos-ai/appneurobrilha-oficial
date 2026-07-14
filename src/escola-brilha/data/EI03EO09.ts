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
 * EI03EO09 — Mundo 1 · Amigos da Floresta Encantada
 * Educação Infantil (4 e 5 anos) · Campo O Eu, o Outro e o Nós
 * Tema: "Trabalhar em Grupo"
 * Estrela recompensa: ⭐ Participação
 * Medalha: 🏅 Guardião da Participação
 */
const aula: Aula = {
  codigo: "EI03EO09",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Trabalhar em Grupo",

  narrativa: {
    titulo: "Trabalhar em Grupo",
    contexto: "A Coruja Sábia propôs construir uma CASINHA nova no meio da floresta pra todos os amigos brincarem. Ninguém consegue construir sozinho.",
    problema: "A nona estrela só acende quando todos os amigos trabalharem JUNTOS. Cada um tem que fazer uma parte.",
    convite: "Bora construir a casinha em equipe!",
  },

  conhecimentosPrevios: ["Aceitar dividir tarefas.", "Esperar o amigo terminar a parte dele.", "Combinar antes de começar."],

  missao: "Descobrir que JUNTOS conseguimos coisas que sozinhos não daríamos conta.",

  objetivos: ["Participar de uma tarefa coletiva.", "Perceber o valor da colaboração."],

  motivacao: "Uma formiga sozinha carrega uma folha. Muitas formigas carregam uma árvore. Juntos, tudo fica possível!",

  explicacao: "TRABALHAR EM GRUPO é dividir uma tarefa entre todos:\n\n• Cada um faz uma parte.\n• Um ajuda o outro.\n• Ninguém carrega tudo sozinho.\n• Todos comemoram no final.\n\nQuando o grupo trabalha unido, faz coisas GRANDES.",

  explicacaoAtiva: [
    { texto: "Este é o desenho da casinha a construir.", imagem: casaImg, imagemAlt: "Casinha" },
    { texto: "O Lupi carrega os blocos.", imagem: lupiImg, imagemAlt: "Lupi carregando" },
    { texto: "A Fifi pinta as paredes. Cada um sua parte!", imagem: fifiImg, imagemAlt: "Fifi pintando", checagem: { pergunta: "Grupo trabalha melhor JUNTO ou cada um por si?", opcoes: ["Junto — todos ajudam", "Cada um por si"], correta: 0, explicacao: "Juntos a gente faz mais e melhor." } }
  ],

  explicacoesNiveis: {
    nivel1: "Grupo é vários amigos fazendo a mesma coisa juntos.",
    nivel2: "Cada amigo faz uma parte, e no final tudo se junta.",
    nivel3: "Se um amigo ficar sem fazer nada, o grupo trabalha mais devagar.",
    nivel4: "Trabalhar em grupo ensina paciência, respeito e amizade.",
  },

  exemploResolvido: {
    enunciado: "3 amigos vão construir a casinha. Cada um faz uma tarefa. Quantas mãos trabalhando?",
    passos: ["Toque em cada amigo trabalhando.", "Conte: 1, 2, 3 amigos!"],
    resposta: "3 amigos trabalhando juntos.",
    interativo: { tipo: "contagem", imagemUrl: casaImg, quantidade: 3, nomeItem: "amigo no grupo", nomeItemPlural: "amigos no grupo", pergunta: "Quantos amigos trabalham no grupo?" },
  },

  atividadeGuiada: {
    enunciado: "3 amigos em fila trabalhando. Quem é o SEGUNDO?",
    resposta: "Fifi (2ª) pintando as paredes.",
    explicacao: "Lupi (1º) carrega, Fifi (2ª) pinta, Téo (3º) organiza.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada elemento pra descobrir. Quem está no 2º lugar (meio)?",
      participantes: [{ nome: "Lupi carrega", imagemUrl: lupiImg, posicao: 1 }, { nome: "Fifi pinta", imagemUrl: fifiImg, posicao: 2 }, { nome: "Téo organiza", imagemUrl: teoImg, posicao: 3 }],
      respostaCerta: "Fifi pinta",
    },
  },

  exercicios: [
    { enunciado: "👷 Numa construção, cada um deve fazer TUDO sozinho?", resposta: "Não! Dividir tarefa deixa mais rápido e todos participam.", dica: "Trabalho dividido = trabalho feito." },
    { enunciado: "🤝 Um amigo do grupo não quer ajudar. O que fazer?", resposta: "Conversar com carinho e mostrar que a ajuda dele importa.", dica: "Todo mundo importa no grupo." },
    { enunciado: "🏠 Terminaram a casinha. Quem comemora?", resposta: "TODOS! É vitória coletiva.", dica: "Trabalho em grupo, vitória em grupo." }
  ],

  desafio: {
    enunciado: "3 tarefas do grupo. Cada amigo escolhe uma. É trabalho em grupo?",
    resposta: "Sim — quando cada um faz sua parte, o grupo vence.",
    visual: {
      cena: [{ personagem: "Lupi carregando", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" }, { personagem: "Fifi pintando", itemImagemUrl: fifiImg, quantidade: 1, cor: "#FB923C" }, { personagem: "Téo organizando", itemImagemUrl: teoImg, quantidade: 1, cor: "#34D399" }],
      perguntas: [{ pergunta: "O Lupi carrega blocos. Isso é ajuda?", opcoes: ["Sim, é parte do grupo", "Não vale"], correta: 0, explicacao: "Toda tarefa vale." }, { pergunta: "A Fifi pinta. Vale como participação?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Cada função importa." }, { pergunta: "O Téo só organiza. Isso é preguiça?", opcoes: ["Não — organizar também é trabalho", "É preguiça"], correta: 0, explicacao: "Organizar é essencial." }],
    },
  },

  revisao: {
    pontos: ["Grupo = fazer junto.", "Cada um tem sua parte.", "Todos comemoram no fim.", "Junto a gente vai mais longe."],
    dica: "Em casa, ajude a família a arrumar algo TODOS JUNTOS.",
  },

  quiz: [
    { pergunta: "Grupo funciona melhor quando…", opcoes: ["Todos ajudam", "Só um faz tudo"], correta: 0, explicacao: "Todos participando = grupo bom.", visual: { tipo: "grupos", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }] } },
    { pergunta: "Terminaram a casinha. Quem venceu?", opcoes: ["Todos", "Só o Lupi"], correta: 0, explicacao: "Vitória coletiva.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Casinha pronta!" } },
    { pergunta: "Quantas tarefas foram divididas?", opcoes: ["1", "2", "3"], correta: 2, explicacao: "Carregar, pintar, organizar — 3 tarefas.", visual: { tipo: "grupos", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Carregar" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Pintar" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Organizar" }] } }
  ],

  conclusao: "🏅 Medalha conquistada: Guardião da Participação! A NONA ESTRELA ⭐ acendeu. Missão em Casa: escolha uma tarefa da casa e faça JUNTO com alguém.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Você sabia que as abelhas trabalham em equipe? Uma vai atrás do néctar, outra faz o mel, outra cuida da colmeia. Sozinha, nenhuma daria conta!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Amigos no canteiro de obras", instrucao: "Todos vieram construir juntos.", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }, { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" }], pergunta: "Quantos amigos formam o grupo?", opcoes: ["3", "4", "5"], correta: 1, acerto: "4 amigos = time forte!", erro: "Aponte um por um." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Tarefas divididas", instrucao: "Cada amigo escolheu uma tarefa.", grupos: [{ imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Carregar" }, { imagemUrl: florImg, quantidade: 1, rotulo: "Pintar" }, { imagemUrl: livroImg, quantidade: 1, rotulo: "Organizar" }], pergunta: "Quantas tarefas serão feitas em grupo?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 tarefas — uma pra cada!", erro: "Carregar, pintar, organizar = 3." },
    { tipo: "ligar", titulo: "Fase 3 · Cada amigo com sua tarefa", instrucao: "Ligue o amigo à tarefa dele.", pares: [{ a: "Lupi", b: "carrega blocos", aImagem: lupiImg, aQuantidade: 1, bImagem: ursinhoImg, bQuantidade: 1 }, { a: "Fifi", b: "pinta a casa", aImagem: fifiImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 }, { a: "Téo", b: "organiza os materiais", aImagem: teoImg, aQuantidade: 1, bImagem: livroImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Estrela pra cada participante", instrucao: "Dê 1 estrela de participação pra cada amigo do grupo.", itemImagem: estrelaImg, alvosVisuais: [{ nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }, { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg }, { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg }, { nome: "Brilha", cor: "#FBBF24", capacidade: 1, imagemUrl: brilhaImg }], pares: [{ item: "Estrela pro Lupi", alvo: "Lupi" }, { item: "Estrela pra Fifi", alvo: "Fifi" }, { item: "Estrela pro Téo", alvo: "Téo" }, { item: "Estrela pro Brilha", alvo: "Brilha" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Trabalhar em grupo é…", opcoes: ["Fazer junto", "Fazer sozinho"], correta: 0, explicacao: "Grupo = junto.", visual: { tipo: "grupos", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }] } }, { pergunta: "Quantos amigos no grupo?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3 amigos no exemplo.", visual: { tipo: "grupos", grupos: [{ imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" }, { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" }] } }],
    medio: [{ pergunta: "Cada um faz uma parte. Isso é…", opcoes: ["Divisão de tarefas", "Bagunça"], correta: 0, explicacao: "Dividir é organizar.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Casinha" } }, { pergunta: "Quem comemora quando o grupo termina?", opcoes: ["Todos", "Só um"], correta: 0, explicacao: "Todos vencem juntos.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Todos!" } }],
    dificil: [{ pergunta: "Se um amigo não ajudar, o grupo…", opcoes: ["Trabalha mais devagar", "Vai mais rápido"], correta: 0, explicacao: "Falta de um atrasa todos.", visual: { tipo: "itens", imagemUrl: tristeImg, quantidade: 1, rotulo: "Sem ajuda" } }, { pergunta: "Grupo unido consegue coisas…", opcoes: ["Maiores que sozinho", "Menores que sozinho"], correta: 0, explicacao: "Juntos = mais poder.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Grandes coisas" } }],
  },

  proximaHabilidade: {
    codigo: "EI03EO10",
    titulo: "Festa da Amizade — cena final",
  },
};

// Mantém imports usados em outras cenas do mesmo lote.
void piuImg; void confusoImg; void bravoImg; void tranquiloImg; void solImg; void livroImg;
void ursinhoImg; void boloImg; void presenteImg; void bolaImg; void balaoImg;
void florImg; void estrelaImg; void coracaoImg; void casaImg; void arvoreImg;

export default aula;
