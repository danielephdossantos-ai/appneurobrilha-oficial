import type { Aula } from "../types";
import pincelImg from "@/assets/neuro-treino/objetos/pincel.png";
import tintaImg from "@/assets/neuro-treino/objetos/tinta.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import dadoImg from "@/assets/neuro-treino/objetos/dado.png";
import moedaImg from "@/assets/neuro-treino/objetos/moeda.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";

/**
 * EI03ET04 — Espaços, Tempos, Quantidades, Relações e Transformações
 * Aula 4: Registrar observações (desenho e números)
 */
const aula: Aula = {
  codigo: "EI03ET04",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Marcar o que a Gente Vê",

  narrativa: {
    titulo: "As descobertas se perdem",
    contexto: "Na floresta, as crianças descobrem coisas — mas esquecem tudo no dia seguinte.",
    problema: "Pra guardar as descobertas, elas precisam REGISTRAR: desenhar, contar e marcar no papel.",
    convite: "Vamos virar cientistas com pincel e caderno?",
  },

  conhecimentosPrevios: ["Sabe fazer riscos com lápis.", "Reconhece números até 3.", "Já viu alguém desenhando."],

  missao: "Aprender a REGISTRAR o que a gente vê: com DESENHO, com NÚMERO e com MARQUINHAS.",

  objetivos: [
    "Registrar quantidades com riscos ou desenhos.",
    "Usar desenho pra contar o que viu.",
    "Associar número à quantidade.",
  ],

  explicacao: "REGISTRAR é GUARDAR o que a gente descobriu:\n\n• DESENHO: eu vi uma flor — desenho a flor.\n• MARQUINHAS: vi 3 borboletas — faço 3 risquinhos.\n• NÚMERO: escrevo 3.\n\nAssim, a gente NUNCA esquece.",

  explicacaoAtiva: [
    { texto: "Peguei o PINCEL pra desenhar.", imagem: pincelImg, imagemAlt: "Pincel" },
    { texto: "Molho na TINTA colorida.", imagem: tintaImg, imagemAlt: "Tinta" },
    {
      texto: "E guardo tudo num LIVRO.",
      imagem: livroImg,
      imagemAlt: "Livro",
      checagem: {
        pergunta: "O que a gente usa pra pintar?",
        opcoes: ["Pincel", "Colher"],
        correta: 0,
        explicacao: "O pincel é pra pintar.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Registrar é guardar o que a gente viu.",
    nivel2: "Pode ser desenho, marquinhas ou número.",
    nivel3: "Cada risquinho é UM. 3 risquinhos = 3.",
    nivel4: "Cientistas registram tudo pra lembrar.",
  },

  exemploResolvido: {
    enunciado: "Vi 3 estrelas no céu. Quantas marquinhas eu faço?",
    passos: ["Toque na primeira estrela: 1.", "Toque na segunda: 2.", "Toque na terceira: 3."],
    resposta: "3 marquinhas.",
    interativo: { tipo: "contagem", imagemUrl: estrelaImg, quantidade: 3, nomeItem: "estrela", nomeItemPlural: "estrelas", pergunta: "Quantas estrelas registrar?" },
  },

  atividadeGuiada: {
    enunciado: "Pra DESENHAR, a gente usa o quê?",
    resposta: "Pincel e tinta.",
    explicacao: "O pincel é o instrumento; a tinta dá cor.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "O que é PRA DESENHAR?",
      opcoes: [
        { nome: "Pincel", imagemUrl: pincelImg },
        { nome: "Moeda", imagemUrl: moedaImg },
        { nome: "Dado", imagemUrl: dadoImg },
      ],
      respostaCerta: "Pincel",
    },
  },

  exercicios: [
    { enunciado: "🖌️ Pincel serve pra…", resposta: "Pintar / desenhar!", dica: "Molha na tinta." },
    { enunciado: "📖 Livro serve pra…", resposta: "Guardar histórias / ler.", dica: "Tem páginas." },
    { enunciado: "🎨 3 flores = quantas marquinhas?", resposta: "3.", dica: "Uma pra cada flor." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: registre o que viu na floresta.",
    resposta: "3 flores → 3 riscos, 2 estrelas → 2 riscos.",
    visual: {
      cena: [
        { personagem: "Flores", itemImagemUrl: florImg, quantidade: 3, cor: "#F472B6" },
        { personagem: "Estrelas", itemImagemUrl: estrelaImg, quantidade: 2, cor: "#FBBF24" },
        { personagem: "Maçãs", itemImagemUrl: macaImg, quantidade: 1, cor: "#F87171" },
      ],
      perguntas: [
        { pergunta: "Quantas flores tem?", opcoes: ["3", "2"], correta: 0, explicacao: "3 flores." },
        { pergunta: "Quantas estrelas?", opcoes: ["2", "3"], correta: 0, explicacao: "2 estrelas." },
        { pergunta: "Quantas maçãs?", opcoes: ["1", "2"], correta: 0, explicacao: "1 maçã." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Registrar é guardar o que viu.",
      "Pode ser desenho ou marquinha.",
      "Cada risquinho vale UM.",
      "Cientistas SEMPRE registram.",
    ],
    dica: "Em casa: desenhe algo que você viu hoje.",
  },

  quiz: [
    { pergunta: "O que serve pra desenhar?", opcoes: ["Pincel", "Colher"], correta: 0, explicacao: "Pincel.", visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "Pincel" } },
    { pergunta: "Quantas estrelas?", opcoes: ["3", "2"], correta: 0, explicacao: "3 estrelas.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 3, rotulo: "Estrelas" } },
    { pergunta: "Quantas moedas?", opcoes: ["1", "2"], correta: 1, explicacao: "2 moedas.", visual: { tipo: "itens", imagemUrl: moedaImg, quantidade: 2, rotulo: "Moedas" } },
  ],

  conclusao: "🏅 Você virou um cientista da floresta! Missão em Casa: desenhe 3 coisas que viu no quintal.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Cientistas de verdade têm cadernos cheios de desenhos de bichos e plantas — igualzinho aos seus!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantas flores?", instrucao: "Toque em cada flor.", grupos: [{ imagemUrl: florImg, quantidade: 3, rotulo: "Flores" }], pergunta: "Quantas?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3!", erro: "1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Quantas estrelas?", instrucao: "Toque em cada estrela.", grupos: [{ imagemUrl: estrelaImg, quantidade: 2, rotulo: "Estrelas" }], pergunta: "Quantas?", opcoes: ["1", "2", "3"], correta: 1, acerto: "2!", erro: "1, 2." },
    { tipo: "ligar", titulo: "Fase 3 · Ferramenta certa", instrucao: "Ligue.", pares: [
      { a: "Pincel", b: "Desenhar", aImagem: pincelImg, aQuantidade: 1 },
      { a: "Tinta", b: "Colorir", aImagem: tintaImg, aQuantidade: 1 },
      { a: "Livro", b: "Guardar", aImagem: livroImg, aQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Cada quantidade no grupo", instrucao: "Toque na estrela e depois no grupo.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "1", cor: "#F87171", capacidade: 1, imagemUrl: macaImg },
      { nome: "2", cor: "#60A5FA", capacidade: 1, imagemUrl: moedaImg },
      { nome: "3", cor: "#22C55E", capacidade: 1, imagemUrl: florImg },
    ], pares: [
      { item: "Uma maçã", alvo: "1" },
      { item: "Duas moedas", alvo: "2" },
      { item: "Três flores", alvo: "3" },
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Pra pintar, uso?", opcoes: ["Pincel", "Dado"], correta: 0, explicacao: "Pincel.", visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "Pincel" } },
      { pergunta: "Pra dar cor, uso?", opcoes: ["Tinta", "Bola"], correta: 0, explicacao: "Tinta.", visual: { tipo: "itens", imagemUrl: tintaImg, quantidade: 1, rotulo: "Tinta" } },
    ],
    medio: [
      { pergunta: "Quantas moedas?", opcoes: ["2", "5"], correta: 0, explicacao: "2 moedas.", visual: { tipo: "itens", imagemUrl: moedaImg, quantidade: 2, rotulo: "Moedas" } },
      { pergunta: "Quantos dados?", opcoes: ["3", "1"], correta: 0, explicacao: "3 dados.", visual: { tipo: "itens", imagemUrl: dadoImg, quantidade: 3, rotulo: "Dados" } },
    ],
    dificil: [
      { pergunta: "Cada risquinho vale?", opcoes: ["1", "10"], correta: 0, explicacao: "Cada risco = 1.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Uma estrela" } },
      { pergunta: "3 flores = quantos riscos?", opcoes: ["3", "2"], correta: 0, explicacao: "3 riscos.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 3, rotulo: "Flores" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03ET05", titulo: "Classificar por semelhanças" },
};

export default aula;
