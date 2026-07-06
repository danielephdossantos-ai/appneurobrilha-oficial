import type { Aula } from "../types";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";
import borboletaImg from "@/assets/neuro-treino/objetos/borboleta.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import chuvaImg from "@/assets/neuro-treino/objetos/chuva.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

/**
 * EI03ET03 — Espaços, Tempos, Quantidades, Relações e Transformações
 * Aula 3: Fontes de informação sobre a natureza
 */
const aula: Aula = {
  codigo: "EI03ET03",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Como Descobrir Sobre a Natureza",

  narrativa: {
    titulo: "As dúvidas da floresta",
    contexto: "Na floresta, as crianças ficam curiosas: 'Por que o pássaro canta? Por que chove? Onde a borboleta dorme?'",
    problema: "Pra descobrir respostas, a gente precisa OLHAR, PERGUNTAR e OUVIR histórias.",
    convite: "Vamos virar pequenos exploradores?",
  },

  conhecimentosPrevios: ["Sabe olhar bichos.", "Já ouviu histórias.", "Faz perguntas."],

  missao: "Descobrir jeitos de aprender sobre a natureza: OBSERVAR, PERGUNTAR e ver LIVROS.",

  objetivos: [
    "Observar animais e plantas com atenção.",
    "Fazer perguntas sobre o mundo.",
    "Usar livros e adultos como fonte.",
  ],

  explicacao: "Pra descobrir sobre a natureza, tem 3 jeitos:\n\n• OBSERVAR: olhar o passarinho voar, a flor abrir.\n• PERGUNTAR: 'Por quê?' pro professor, pra família.\n• LIVROS: cada livro conta uma coisa nova.\n\nUm bom explorador olha, pergunta e escuta!",

  explicacaoAtiva: [
    { texto: "OBSERVE: o passarinho canta de manhã.", imagem: passaroImg, imagemAlt: "Passarinho" },
    { texto: "PERGUNTE: 'Por que a borboleta tem cor?'", imagem: borboletaImg, imagemAlt: "Borboleta" },
    {
      texto: "PROCURE no LIVRO — ele conta muita coisa.",
      imagem: livroImg,
      imagemAlt: "Livro",
      checagem: {
        pergunta: "O que a gente usa pra aprender sobre bichos?",
        opcoes: ["Livro", "Sapato"],
        correta: 0,
        explicacao: "O livro conta histórias e mostra bichos.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "A gente descobre olhando.",
    nivel2: "Perguntar ajuda a aprender.",
    nivel3: "Livros mostram o que a gente ainda não viu.",
    nivel4: "Um explorador usa os OLHOS, a BOCA (perguntar) e o OUVIDO (escutar).",
  },

  exemploResolvido: {
    enunciado: "Quantos passarinhos vieram cantar?",
    passos: ["Toque num passarinho.", "Toque em outro.", "Toque em outro. 1, 2, 3!"],
    resposta: "3 passarinhos cantando.",
    interativo: { tipo: "contagem", imagemUrl: passaroImg, quantidade: 3, nomeItem: "passarinho", nomeItemPlural: "passarinhos", pergunta: "Quantos passarinhos?" },
  },

  atividadeGuiada: {
    enunciado: "Qual bicho é sábio e vive na floresta olhando tudo?",
    resposta: "A coruja.",
    explicacao: "A coruja enxerga bem e observa a floresta à noite.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Quem é o bicho SÁBIO?",
      opcoes: [
        { nome: "Coruja", imagemUrl: corujaImg },
        { nome: "Borboleta", imagemUrl: borboletaImg },
        { nome: "Passarinho", imagemUrl: passaroImg },
      ],
      respostaCerta: "Coruja",
    },
  },

  exercicios: [
    { enunciado: "👀 Como a gente OBSERVA?", resposta: "Olhando com atenção.", dica: "Usa os olhos." },
    { enunciado: "❓ Como a gente TIRA DÚVIDA?", resposta: "Perguntando!", dica: "Usa a boca." },
    { enunciado: "📖 Onde a gente lê histórias?", resposta: "No livro.", dica: "Tem páginas." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: cada explorador usa uma ferramenta. Descubra qual.",
    resposta: "Olho pra observar, livro pra ler, coruja pra ensinar.",
    visual: {
      cena: [
        { personagem: "Livro", itemImagemUrl: livroImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Coruja", itemImagemUrl: corujaImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "Sol", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        { pergunta: "Onde a gente lê?", opcoes: ["Livro", "Sol"], correta: 0, explicacao: "No livro." },
        { pergunta: "Qual bicho enxerga bem à noite?", opcoes: ["Coruja", "Passarinho"], correta: 0, explicacao: "A coruja." },
        { pergunta: "O que aquece a floresta?", opcoes: ["Sol", "Chuva"], correta: 0, explicacao: "O sol dá calor." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Explorar é olhar com atenção.",
      "Perguntar ajuda a descobrir.",
      "Livros ensinam coisas novas.",
      "A natureza está cheia de respostas.",
    ],
    dica: "Em casa: pergunte pra um adulto por que chove.",
  },

  quiz: [
    { pergunta: "Onde a gente lê histórias?", opcoes: ["Livro", "Bola"], correta: 0, explicacao: "No livro.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
    { pergunta: "Qual bicho canta de manhã?", opcoes: ["Passarinho", "Borboleta"], correta: 0, explicacao: "O passarinho.", visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "Passarinho" } },
    { pergunta: "Qual bicho voa e tem cor?", opcoes: ["Borboleta", "Coruja"], correta: 0, explicacao: "A borboleta é bem colorida.", visual: { tipo: "itens", imagemUrl: borboletaImg, quantidade: 1, rotulo: "Borboleta" } },
  ],

  conclusao: "🏅 Você virou um EXPLORADOR da floresta! Missão em Casa: observe um bicho hoje e conte pra alguém.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "A coruja pode virar a cabeça quase pra trás — ela observa a floresta por todos os lados!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantos passarinhos?", instrucao: "Toque em cada passarinho.", grupos: [{ imagemUrl: passaroImg, quantidade: 3, rotulo: "Passarinhos" }], pergunta: "Quantos?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 passarinhos!", erro: "Conte: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Quantas borboletas?", instrucao: "Toque em cada borboleta.", grupos: [{ imagemUrl: borboletaImg, quantidade: 2, rotulo: "Borboletas" }], pergunta: "Quantas?", opcoes: ["1", "2", "3"], correta: 1, acerto: "2 borboletas!", erro: "1, 2." },
    { tipo: "ligar", titulo: "Fase 3 · Cada coisa no lugar", instrucao: "Ligue.", pares: [
      { a: "Livro", b: "Ler", aImagem: livroImg, aQuantidade: 1 },
      { a: "Coruja", b: "Enxergar de noite", aImagem: corujaImg, aQuantidade: 1 },
      { a: "Passarinho", b: "Cantar", aImagem: passaroImg, aQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Céu ou terra?", instrucao: "Toque na estrela e depois no lugar certo.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "Céu", cor: "#60A5FA", capacidade: 2, imagemUrl: solImg },
      { nome: "Terra", cor: "#22C55E", capacidade: 2, imagemUrl: arvoreImg },
    ], pares: [
      { item: "Sol", alvo: "Céu" },
      { item: "Chuva", alvo: "Céu" },
      { item: "Árvore", alvo: "Terra" },
      { item: "Flor", alvo: "Terra" },
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Onde a gente lê?", opcoes: ["Livro", "Sapato"], correta: 0, explicacao: "Livro.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
      { pergunta: "Qual bicho voa?", opcoes: ["Passarinho", "Peixe"], correta: 0, explicacao: "Passarinho voa.", visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "Passarinho" } },
    ],
    medio: [
      { pergunta: "O que cai do céu?", opcoes: ["Chuva", "Árvore"], correta: 0, explicacao: "A chuva.", visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "Chuva" } },
      { pergunta: "O que nasce da terra?", opcoes: ["Flor", "Sol"], correta: 0, explicacao: "A flor.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "Flor" } },
    ],
    dificil: [
      { pergunta: "Quem observa MUITO bem?", opcoes: ["Coruja", "Rato"], correta: 0, explicacao: "A coruja enxerga longe.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "Coruja" } },
      { pergunta: "O que a gente faz pra APRENDER?", opcoes: ["Perguntar", "Ficar quieto"], correta: 0, explicacao: "Perguntar!", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03ET04", titulo: "Registrar observações" },
};

export default aula;
