import type { AulaArte } from "./u1-a01-cores-falam";
import obra from "@/assets/atelier/atelier-obra.jpg.asset.json";

const aula: AulaArte = {
  id: "u4-a01-historias-que-ganham-vida",
  ano: "2º Ano",
  unidade: 4,
  aula: 1,
  tituloUnidade: "Histórias que Ganham Vida",
  titulo: "Ilustrando uma História",
  duracaoMin: "45 a 60 min",
  objetivos: [
    "perceber como ilustrações contam histórias",
    "reconhecer personagens feitos de formas",
    "criar sua própria ilustração de uma cena",
  ],
  etapas: [
    {
      tipo: "historia",
      titulo: "O Livro Encantado da Brilha",
      icone: "lapis",
      texto:
        "Brilha abriu um livro antigo do sótão. As páginas estavam em branco! Mas assim que ela pegou o lápis, os desenhos começaram a aparecer sozinhos, contando uma história cheia de personagens. Vem descobrir como uma imagem também sabe contar histórias!",
      lapis: [
        { cor: "amarelo", hex: "#F0C24A", emocao: "Sol",         frase: "Amarelo: o começo alegre da história." },
        { cor: "azul",    hex: "#5A8FBF", emocao: "Aventura",    frase: "Azul: a aventura começa!" },
        { cor: "verde",   hex: "#7FAE73", emocao: "Floresta",    frase: "Verde: a floresta misteriosa." },
        { cor: "roxo",    hex: "#8A5A83", emocao: "Segredo",     frase: "Roxo: um segredo escondido." },
        { cor: "vermelho",hex: "#D64545", emocao: "Emoção",      frase: "Vermelho: o coração acelerado do herói." },
      ],
      convite: "Pega seu lápis e vem ilustrar comigo!",
    },
    {
      tipo: "curiosidade",
      titulo: "Você Sabia?",
      texto:
        "Todo livro ilustrado tem um ilustrador — um artista que desenha as cenas para ajudar você a imaginar a história. Sem imagens, algumas histórias ficariam mais difíceis de sentir.",
    },
    {
      tipo: "formas-basicas",
      titulo: "Personagens são feitos de FORMAS",
      instrucao: "Cada personagem começa como uma forma. Toca no objeto e descubra qual forma ele tem!",
      itens: [
        { objeto: "Cabeça do herói", emoji: "🙂", forma: "circulo",   explicacao: "A cabeça é quase sempre um círculo." },
        { objeto: "Casinha",         emoji: "🏠", forma: "quadrado",  explicacao: "O corpo da casa é um quadrado e o telhado é um triângulo." },
        { objeto: "Telhado",         emoji: "🔺", forma: "triangulo", explicacao: "Triângulo é ótimo para telhados e montanhas." },
        { objeto: "Porta",           emoji: "🚪", forma: "retangulo", explicacao: "A porta é um retângulo em pé." },
        { objeto: "Sol",             emoji: "☀️", forma: "circulo",   explicacao: "O sol é um grande círculo." },
        { objeto: "Livro",           emoji: "📗", forma: "retangulo", explicacao: "O livro é um retângulo deitado." },
      ],
    },
    {
      tipo: "artista",
      titulo: "Lendo uma Ilustração",
      obraUrl: obra.url,
      obraLegenda: "Cena de ilustração — Ateliê Brilha",
      pergunta: "O que essa cena parece estar contando?",
      opcoes: [
        "Uma história feliz e cheia de cor",
        "Uma história sem nenhum sentimento",
        "Uma lista de compras",
      ],
      comentario: "Uma ilustração conta uma história pelas cores, formas e expressões dos personagens.",
    },
    {
      tipo: "quiz",
      titulo: "O Que Você Aprendeu?",
      perguntas: [
        {
          pergunta: "Quem é o ILUSTRADOR de um livro?",
          opcoes: ["Quem lê a história", "O artista que desenha as cenas", "Quem vende o livro"],
          correta: 1,
          explicacao: "Isso! O ilustrador é o artista que desenha as cenas do livro.",
        },
        {
          pergunta: "Quase todo personagem começa como uma…",
          opcoes: ["forma simples", "palavra escrita", "música"],
          correta: 0,
          explicacao: "Muito bem! Círculo, quadrado, triângulo — as formas básicas viram tudo.",
        },
        {
          pergunta: "As cores em uma ilustração ajudam a mostrar…",
          opcoes: ["o preço do livro", "o sentimento da cena", "a idade do autor"],
          correta: 1,
          explicacao: "Perfeito! As cores contam o clima e a emoção da cena.",
        },
      ],
    },
    {
      tipo: "atividade-manual",
      titulo: "Meu Mini Livrinho",
      instrucao:
        "Vamos montar um livrinho de 4 páginas onde você é o ilustrador! Peça ajuda para dobrar e grampear.",
      materiais: [
        "2 folhas de papel branco (A4)",
        "Lápis e lápis de cor",
        "Grampeador (ou fita adesiva)",
        "Régua",
      ],
      passos: [
        { n: 1, texto: "Dobre as 2 folhas no meio, formando um livrinho.", icone: "montagem" },
        { n: 2, texto: "Grampeie ou passe fita na dobra para segurar.",    icone: "cola" },
        { n: 3, texto: "Na capa desenhe o TÍTULO e um personagem grande.", icone: "desenho" },
        { n: 4, texto: "Em cada página desenhe uma cena da sua história.", icone: "desenho" },
        { n: 5, texto: "Mostre para a família e conte a história em voz alta!", icone: "pronto" },
      ],
    },
    {
      tipo: "missao-casa",
      titulo: "Ilustrador da Família",
      instrucao:
        "Peça para alguém da família contar uma história curta. Depois desenhe UMA cena dessa história e tire uma foto do seu desenho.",
      ideias: [
        "🧓 Uma história da infância do vovô ou vovó",
        "🐕 Uma aventura do bichinho da casa",
        "🌟 Um sonho que você teve",
      ],
      cursoSlug: "arte-2ano",
      aulaSlug: "u4-a01-ilustrador-familia",
    },
    {
      tipo: "relatorio",
      titulo: "Você é um Ilustrador!",
      texto:
        "Agora você sabe que toda ilustração conta uma história — com formas, cores e sentimentos. Continue desenhando as histórias que passam pela sua cabeça: o mundo precisa dos seus livros!",
    },
  ],
};

export default aula;
