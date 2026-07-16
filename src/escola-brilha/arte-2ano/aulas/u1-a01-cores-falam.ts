import obraAsset from "@/assets/atelier/atelier-obra.jpg.asset.json";

export type CorNome = "vermelho" | "amarelo" | "azul" | "verde" | "roxo" | "laranja" | "rosa" | "branco" | "preto" | "marrom";

export type EtapaBloco1 =
  | { tipo: "historia"; titulo: string; texto: string; lapis: Array<{ cor: CorNome; hex: string; emocao: string; frase: string }>; convite: string }
  | { tipo: "observar-cores"; titulo: string; instrucao: string; cenas: Array<{ nome: string; svg: "por-do-sol" | "jardim" | "praia" | "floresta"; coresPresentes: CorNome[] }> }
  | { tipo: "cor-emocao"; titulo: string; instrucao: string; cartoes: Array<{ cor: CorNome; hex: string; emoji: string; emocao: string; explicacao: string }> }
  | { tipo: "artista"; titulo: string; obraUrl: string; obraLegenda: string; pergunta: string; opcoes: string[]; comentario: string }
  | { tipo: "texturas"; titulo: string; instrucao: string; itens: Array<{ nome: string; textura: "madeira" | "pedra" | "areia" | "agua" | "tecido" | "folhas"; combina: string }> }
  | { tipo: "curiosidade"; titulo: string; texto: string }
  | { tipo: "quiz"; titulo: string; perguntas: Array<{ pergunta: string; opcoes: string[]; correta: number; explicacao: string }> };

export type AulaArte = {
  id: string;
  ano: "2º Ano";
  unidade: number;
  aula: number;
  tituloUnidade: string;
  titulo: string;
  duracaoMin: string;
  objetivos: string[];
  etapas: EtapaBloco1[];
  etapasBloco2: Array<{ n: number; nome: string; descricao: string }>;
};

const aula: AulaArte = {
  id: "u1-a01-cores-falam",
  ano: "2º Ano",
  unidade: 1,
  aula: 1,
  tituloUnidade: "Cores, Texturas e Emoções",
  titulo: "As Cores Também Falam",
  duracaoMin: "35 a 45 min",
  objetivos: [
    "compreender que as cores transmitem emoções",
    "identificar cores quentes e frias",
    "observar obras de arte simples",
    "explicar a escolha das cores utilizadas",
  ],
  etapas: [
    {
      tipo: "historia",
      titulo: "A caixa de lápis mágica",
      texto:
        "Brilha estava passeando quando encontrou uma caixa de lápis de cor mágica. Cada lápis fazia sentir uma emoção diferente. Toca em cada lápis pra ouvir o que ele conta.",
      lapis: [
        { cor: "vermelho", hex: "#D64545", emocao: "coragem", frase: "Sou o vermelho. Eu dou coragem!" },
        { cor: "amarelo",  hex: "#F0C24A", emocao: "alegria", frase: "Sou o amarelo. Eu trago alegria!" },
        { cor: "azul",     hex: "#5A8FBF", emocao: "calma",   frase: "Sou o azul. Eu deixo tudo mais calmo." },
        { cor: "verde",    hex: "#7FAE73", emocao: "esperança", frase: "Sou o verde. Eu sou a esperança que cresce." },
        { cor: "roxo",     hex: "#8A5A83", emocao: "imaginação", frase: "Sou o roxo. Eu abro a porta da imaginação." },
      ],
      convite: "Será que uma cor consegue contar uma história? Bora descobrir!",
    },
    {
      tipo: "observar-cores",
      titulo: "Cores no mundo",
      instrucao: "Olha cada paisagem e toca nas cores que você vê nela.",
      cenas: [
        { nome: "Pôr do sol", svg: "por-do-sol", coresPresentes: ["amarelo", "laranja", "rosa", "roxo"] },
        { nome: "Jardim",     svg: "jardim",     coresPresentes: ["verde", "vermelho", "amarelo", "rosa"] },
        { nome: "Praia",      svg: "praia",      coresPresentes: ["azul", "amarelo", "branco"] },
        { nome: "Floresta",   svg: "floresta",   coresPresentes: ["verde", "marrom", "amarelo"] },
      ],
    },
    {
      tipo: "cor-emocao",
      titulo: "As cores mudam o rosto",
      instrucao: "Toca em cada cor. Vê como o rostinho muda de emoção.",
      cartoes: [
        { cor: "amarelo",  hex: "#F0C24A", emoji: "😊", emocao: "Alegria",       explicacao: "O amarelo é quente e brilhante como o sol." },
        { cor: "azul",     hex: "#5A8FBF", emoji: "😌", emocao: "Calma",         explicacao: "O azul lembra o céu e a água tranquila." },
        { cor: "vermelho", hex: "#D64545", emoji: "❤️", emocao: "Amor",          explicacao: "O vermelho é forte e pulsa como o coração." },
        { cor: "verde",    hex: "#7FAE73", emoji: "😴", emocao: "Tranquilidade", explicacao: "O verde vem das folhas e das plantas." },
        { cor: "roxo",     hex: "#8A5A83", emoji: "😲", emocao: "Surpresa",      explicacao: "O roxo é misterioso, mistura fogo e água." },
      ],
    },
    {
      tipo: "artista",
      titulo: "Uma obra pra sentir",
      obraUrl: obraAsset.url,
      obraLegenda: "Pintura inspirada no estilo de Tarsila do Amaral — cores brasileiras.",
      pergunta: "O que você sente quando olha esta pintura?",
      opcoes: ["😊 Feliz", "😌 Calmo", "🤔 Curioso", "😮 Surpreso"],
      comentario:
        "Não existe resposta errada! A artista escolheu amarelo forte, verde das plantas e azul do rio. Cores quentes deixam a cena viva e alegre.",
    },
    {
      tipo: "texturas",
      titulo: "Toca com os olhos",
      instrucao: "Cada textura combina melhor com um desenho. Arrasta ou toca pra ligar.",
      itens: [
        { nome: "Casca de árvore", textura: "madeira", combina: "🌳 Árvore" },
        { nome: "Muro do quintal", textura: "pedra",   combina: "🏰 Castelo" },
        { nome: "Praia",           textura: "areia",   combina: "🏖 Sol e mar" },
        { nome: "Rio",             textura: "agua",    combina: "🐟 Peixinho" },
        { nome: "Cobertor",        textura: "tecido",  combina: "🧸 Ursinho" },
        { nome: "Chão do parque",  textura: "folhas",  combina: "🍂 Outono" },
      ],
    },
    {
      tipo: "curiosidade",
      titulo: "Você sabia?",
      texto:
        "Artistas usam as cores pra transmitir emoções. A MESMA paisagem pode parecer alegre, tranquila ou misteriosa dependendo das cores que o artista escolhe. Cor não é só enfeite — é conversa!",
    },
    {
      tipo: "quiz",
      titulo: "Quiz das cores",
      perguntas: [
        {
          pergunta: "Quais são consideradas cores quentes?",
          opcoes: ["Vermelho, amarelo e laranja", "Azul, verde e roxo", "Branco e preto", "Só o rosa"],
          correta: 0,
          explicacao: "Cores quentes lembram fogo e sol: vermelho, amarelo e laranja.",
        },
        {
          pergunta: "Qual sentimento o azul costuma transmitir?",
          opcoes: ["Calma", "Raiva", "Fome", "Pressa"],
          correta: 0,
          explicacao: "Azul lembra céu e água — dá sensação de calma.",
        },
        {
          pergunta: "Misturar cores pode criar novas emoções em uma pintura?",
          opcoes: ["Sim, muda tudo", "Não, cor não muda nada", "Só quando é preto", "Só nas fotos"],
          correta: 0,
          explicacao: "Sim! Cada mistura cria um clima diferente na obra.",
        },
        {
          pergunta: "Qual textura parece mais macia?",
          opcoes: ["Tecido", "Pedra", "Madeira", "Areia dura"],
          correta: 0,
          explicacao: "O tecido é fofo e liso — a textura mais macia da lista.",
        },
      ],
    },
  ],
  etapasBloco2: [
    { n: 5, nome: "Pintura Digital", descricao: "Tela em branco com pincel, lápis, giz e carimbos." },
    { n: 7, nome: "Jogo Cor × Emoção", descricao: "Arrastar cada emoção para a cor certa." },
    { n: 8, nome: "Música e Arte", descricao: "Pintar livre enquanto uma música toca." },
    { n: 9, nome: "Missão em Casa", descricao: "Fotografar objetos coloridos da sua casa." },
    { n: 10, nome: "Atividade Manual", descricao: "Montar o Rosto das Emoções com papel e cores." },
    { n: 13, nome: "Desafio Final", descricao: "Pintar 'Meu Dia Colorido' e gravar áudio explicando." },
    { n: 14, nome: "Relatório", descricao: "Ver seu progresso artístico." },
  ],
};

export default aula;
