import type { Aula } from "../types";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import luaImg from "@/assets/neuro-treino/objetos/lua.png";
import esferaImg from "@/assets/neuro-treino/objetos/esfera.png";
import cuboImg from "@/assets/neuro-treino/objetos/cubo.png";
import coneImg from "@/assets/neuro-treino/objetos/cone.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

/**
 * EI03ET01 — Espaços, Tempos, Quantidades, Relações e Transformações
 * Aula 1: Comparar objetos (tamanho, cor, forma)
 */
const aula: Aula = {
  codigo: "EI03ET01",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Cada Coisa é de um Jeito",

  narrativa: {
    titulo: "A floresta ficou tudo igual",
    contexto: "Na floresta, todos os objetos ficaram do mesmo tamanho e da mesma cor. Ninguém sabe mais qual é qual.",
    problema: "Pra devolver as diferenças, a gente precisa olhar bem: o que é GRANDE, o que é PEQUENO, o que é REDONDO, o que é QUADRADO.",
    convite: "Vamos comparar e devolver as formas certas?",
  },

  conhecimentosPrevios: ["Sabe apontar objetos.", "Reconhece grande e pequeno no dia a dia.", "Conhece bola e maçã."],

  missao: "Comparar objetos pelo TAMANHO, pela COR e pela FORMA.",

  objetivos: [
    "Comparar dois objetos e dizer qual é maior.",
    "Reconhecer formas redondas e quadradas.",
    "Agrupar por semelhança (cor, forma, tamanho).",
  ],

  explicacao: "Cada coisa tem JEITOS diferentes:\n\n• TAMANHO: a árvore é GRANDE, a flor é PEQUENA.\n• FORMA: a bola é REDONDA, o dado é QUADRADO.\n• COR: o sol é AMARELO, a lua é BRANCA.\n\nQuando a gente compara, descobre o que é IGUAL e o que é DIFERENTE.",

  explicacaoAtiva: [
    { texto: "Olha a árvore GRANDE e a flor PEQUENA.", imagem: arvoreImg, imagemAlt: "Árvore grande" },
    { texto: "A bola é REDONDA — ela rola!", imagem: bolaImg, imagemAlt: "Bola redonda" },
    {
      texto: "O sol é AMARELO. A lua é BRANQUINHA.",
      imagem: solImg,
      imagemAlt: "Sol amarelo",
      checagem: {
        pergunta: "Qual é MAIOR?",
        opcoes: ["Árvore", "Flor"],
        correta: 0,
        explicacao: "A árvore é bem maior que a flor.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Comparar é olhar duas coisas e ver a diferença.",
    nivel2: "A gente compara pelo tamanho, pela cor e pela forma.",
    nivel3: "Duas coisas podem ser IGUAIS numa coisa (mesma cor) e DIFERENTES em outra (tamanho).",
    nivel4: "Comparar ajuda a organizar o mundo.",
  },

  exemploResolvido: {
    enunciado: "Quantas maçãs cabem na cesta?",
    passos: ["Toque numa maçã.", "Toque em outra.", "Toque em outra. São 3 maçãs!"],
    resposta: "3 maçãs na cesta.",
    interativo: { tipo: "contagem", imagemUrl: macaImg, quantidade: 3, nomeItem: "maçã", nomeItemPlural: "maçãs", pergunta: "Quantas maçãs?" },
  },

  atividadeGuiada: {
    enunciado: "Qual objeto é REDONDO?",
    resposta: "A bola.",
    explicacao: "A bola é redonda — por isso rola. O dado tem cantos, não rola.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é redondo?",
      opcoes: [
        { nome: "Bola", imagemUrl: bolaImg },
        { nome: "Dado", imagemUrl: cuboImg },
        { nome: "Cone", imagemUrl: coneImg },
      ],
      respostaCerta: "Bola",
    },
  },

  exercicios: [
    { enunciado: "🌳 A árvore é grande ou pequena?", resposta: "GRANDE!", dica: "Olha o tamanho." },
    { enunciado: "🌸 E a flor?", resposta: "PEQUENA.", dica: "Cabe na mão." },
    { enunciado: "☀️ Qual a cor do sol?", resposta: "Amarelo.", dica: "Brilha no céu de dia." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra qual é MAIOR em cada dupla.",
    resposta: "Árvore maior que flor, sol maior que estrela, bola maior que maçã.",
    visual: {
      cena: [
        { personagem: "Árvore", itemImagemUrl: arvoreImg, quantidade: 1, cor: "#22C55E" },
        { personagem: "Sol", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Bola", itemImagemUrl: bolaImg, quantidade: 1, cor: "#F87171" },
      ],
      perguntas: [
        { pergunta: "Quem é MAIOR: árvore ou flor?", opcoes: ["Árvore", "Flor"], correta: 0, explicacao: "A árvore é bem alta." },
        { pergunta: "Qual é REDONDO: bola ou cubo?", opcoes: ["Bola", "Cubo"], correta: 0, explicacao: "A bola rola porque é redonda." },
        { pergunta: "Quem BRILHA de dia: sol ou lua?", opcoes: ["Sol", "Lua"], correta: 0, explicacao: "O sol aparece de dia; a lua, de noite." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Comparar é olhar diferenças.",
      "Tamanho: grande e pequeno.",
      "Forma: redondo e quadrado.",
      "Cor: cada coisa tem a sua.",
    ],
    dica: "Em casa: compare dois brinquedos — qual é maior?",
  },

  quiz: [
    { pergunta: "Qual é MAIOR?", opcoes: ["Árvore", "Flor"], correta: 0, explicacao: "A árvore é bem maior.", visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "Árvore" } },
    { pergunta: "Qual é REDONDO?", opcoes: ["Bola", "Cubo"], correta: 0, explicacao: "A bola é redonda.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" } },
    { pergunta: "Qual é AMARELO?", opcoes: ["Sol", "Lua"], correta: 0, explicacao: "O sol brilha amarelo.", visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "Sol" } },
  ],

  conclusao: "🏅 Você devolveu as diferenças pra floresta! Missão em Casa: escolha 2 objetos e diga qual é maior.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "As sementinhas do girassol são pequenininhas, mas a flor dele pode ficar do tamanho do seu rosto!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantas maçãs?", instrucao: "Toque em cada maçã.", grupos: [{ imagemUrl: macaImg, quantidade: 3, rotulo: "Maçãs" }], pergunta: "Quantas maçãs?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Isso! 3 maçãs.", erro: "Conte de novo: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Quantas flores?", instrucao: "Toque em cada flor.", grupos: [{ imagemUrl: florImg, quantidade: 2, rotulo: "Flores" }], pergunta: "Quantas flores?", opcoes: ["1", "2", "3"], correta: 1, acerto: "Muito bem! 2 flores.", erro: "Uma, duas — 2 flores." },
    { tipo: "ligar", titulo: "Fase 3 · Cada forma no par certo", instrucao: "Ligue o objeto à forma dele.", pares: [
      { a: "Bola", b: "Redondo", aImagem: bolaImg, aQuantidade: 1 },
      { a: "Dado", b: "Quadrado", aImagem: cuboImg, aQuantidade: 1 },
      { a: "Cone", b: "Pontudo", aImagem: coneImg, aQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Grande e pequeno", instrucao: "Toque na estrela e depois no grupo certo.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "Grande", cor: "#22C55E", capacidade: 1, imagemUrl: arvoreImg },
      { nome: "Pequeno", cor: "#F472B6", capacidade: 1, imagemUrl: florImg },
    ], pares: [
      { item: "Árvore", alvo: "Grande" },
      { item: "Flor", alvo: "Pequeno" },
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual é GRANDE?", opcoes: ["Árvore", "Flor"], correta: 0, explicacao: "A árvore é grande.", visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "Árvore" } },
      { pergunta: "Qual é PEQUENA?", opcoes: ["Flor", "Árvore"], correta: 0, explicacao: "A flor é pequena.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "Flor" } },
    ],
    medio: [
      { pergunta: "Qual é REDONDO?", opcoes: ["Esfera", "Cubo"], correta: 0, explicacao: "A esfera é redonda.", visual: { tipo: "itens", imagemUrl: esferaImg, quantidade: 1, rotulo: "Esfera" } },
      { pergunta: "Qual tem CANTOS?", opcoes: ["Cubo", "Bola"], correta: 0, explicacao: "O cubo tem 4 cantos.", visual: { tipo: "itens", imagemUrl: cuboImg, quantidade: 1, rotulo: "Cubo" } },
    ],
    dificil: [
      { pergunta: "Qual aparece de DIA?", opcoes: ["Sol", "Lua"], correta: 0, explicacao: "O sol brilha de dia.", visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "Sol" } },
      { pergunta: "Qual aparece de NOITE?", opcoes: ["Lua", "Sol"], correta: 0, explicacao: "A lua aparece à noite.", visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "Lua" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03ET02", titulo: "Mudanças nos materiais" },
};

export default aula;
