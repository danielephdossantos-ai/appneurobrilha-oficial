import obraAsset from "@/assets/atelier/atelier-obra.jpg.asset.json";
import rostoFeliz from "@/assets/neuro-treino/emocoes/feliz.png.asset.json";
import rostoSono from "@/assets/neuro-treino/emocoes/sono.png.asset.json";
import rostoSurpreso from "@/assets/neuro-treino/emocoes/surpreso.png.asset.json";
import rostoTriste from "@/assets/neuro-treino/emocoes/triste.png.asset.json";
import rostoBravo from "@/assets/neuro-treino/emocoes/bravo.png.asset.json";

export type CorNome = "vermelho" | "amarelo" | "azul" | "verde" | "roxo" | "laranja" | "rosa" | "branco" | "preto" | "marrom";

export type EtapaBloco1 =
  | { tipo: "historia"; titulo: string; texto: string; lapis: Array<{ cor: CorNome; hex: string; emocao: string; frase: string }>; convite: string; icone?: "lapis" | "lupa" | "nota" }
  | { tipo: "observar-cores"; titulo: string; instrucao: string; cenas: Array<{ nome: string; svg: "por-do-sol" | "jardim" | "praia" | "floresta"; coresPresentes: CorNome[] }> }
  | { tipo: "cor-emocao"; titulo: string; instrucao: string; cartoes: Array<{ cor: CorNome; hex: string; emoji: string; rostoUrl?: string; emocao: string; explicacao: string }> }
  | { tipo: "artista"; titulo: string; obraUrl: string; obraLegenda: string; pergunta: string; opcoes: string[]; comentario: string }
  | { tipo: "texturas"; titulo: string; instrucao: string; itens: Array<{ nome: string; textura: "madeira" | "pedra" | "areia" | "agua" | "tecido" | "folhas"; combina: string }> }
  | { tipo: "curiosidade"; titulo: string; texto: string }
  | { tipo: "quiz"; titulo: string; perguntas: Array<{ pergunta: string; opcoes: string[]; correta: number; explicacao: string }> }
  // ---- Bloco 2 (agora ativo) ----
  | { tipo: "pintura-digital"; titulo: string; instrucao: string; paleta: CorNome[] }
  | { tipo: "cor-emocao-drag"; titulo: string; instrucao: string; pares: Array<{ emocao: string; emoji: string; cor: CorNome; hex: string }> }
  | { tipo: "musica-e-arte"; titulo: string; instrucao: string; paleta: CorNome[]; humor: "calmo" | "alegre" | "misterioso" }
  | { tipo: "missao-casa"; titulo: string; instrucao: string; ideias: string[]; cursoSlug: string; aulaSlug: string }
  | { tipo: "atividade-manual"; titulo: string; instrucao: string; materiais: string[]; passos: Array<{ n: number; texto: string; icone: "corte" | "cola" | "desenho" | "montagem" | "pronto" }> }
  | { tipo: "desafio-final"; titulo: string; instrucao: string; paleta: CorNome[] }
  // ---- Unidade 2 · Desenhando o Mundo ----
  | { tipo: "lupa-magica"; titulo: string; instrucao: string; fotoUrl: string; alt: string; descobertas: Array<{ x: number; y: number; r: number; nome: string; texto: string }> }
  | { tipo: "formas-basicas"; titulo: string; instrucao: string; itens: Array<{ objeto: string; emoji: string; forma: "circulo" | "quadrado" | "triangulo" | "retangulo"; explicacao: string }> }
  | { tipo: "desenho-observacao"; titulo: string; instrucao: string; referenciaUrl: string; referenciaAlt: string; passos: string[]; paleta: CorNome[] }
  | { tipo: "sete-erros"; titulo: string; instrucao: string; cena: "parque" | "quarto"; diferencas: Array<{ x: number; y: number; r: number; nome: string }>; totalPontos: number; fotoOriginalUrl?: string; fotoModificadaUrl?: string; alt?: string }
  // ---- Unidade 3 · Música em Todo Lugar ----
  | { tipo: "floresta-sonora"; titulo: string; instrucao: string; fotoUrl: string; alt: string; sons: Array<{ x: number; y: number; nome: string; emoji: string; timbre: "vento" | "passaro" | "agua" | "pedra" | "folha" | "grilo" | "sino" }> }
  | { tipo: "sequenciador"; titulo: string; instrucao: string; passos: number; sons: Array<{ nome: string; emoji: string; timbre: "vento" | "passaro" | "agua" | "pedra" | "folha" | "grilo" | "sino"; cor: string }> }
  | { tipo: "memoria-sonora"; titulo: string; instrucao: string; pares: Array<{ nome: string; emoji: string; timbre: "vento" | "passaro" | "agua" | "pedra" | "folha" | "grilo" | "sino" }> }
  | { tipo: "ritmo-repetir"; titulo: string; instrucao: string; sons: Array<{ nome: string; emoji: string; timbre: "vento" | "passaro" | "agua" | "pedra" | "folha" | "grilo" | "sino"; cor: string }>; sequencias: number[][] }
  | { tipo: "relatorio"; titulo: string; texto: string };

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
};

const aula: AulaArte = {
  id: "u1-a01-cores-falam",
  ano: "2º Ano",
  unidade: 1,
  aula: 1,
  tituloUnidade: "Cores, Texturas e Emoções",
  titulo: "As Cores Também Falam",
  duracaoMin: "45 a 60 min",
  objetivos: [
    "compreender que as cores transmitem emoções",
    "identificar cores quentes e frias",
    "observar obras de arte simples",
    "explicar a escolha das cores utilizadas",
    "produzir uma pintura digital e uma manual",
    "registrar uma missão em casa com foto",
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
        { nome: "Pôr do sol", svg: "por-do-sol", coresPresentes: ["laranja", "vermelho", "amarelo", "roxo", "marrom", "preto"] },
        { nome: "Jardim",     svg: "jardim",     coresPresentes: ["verde", "vermelho", "amarelo", "rosa", "laranja", "marrom"] },
        { nome: "Praia",      svg: "praia",      coresPresentes: ["azul", "branco", "marrom"] },
        { nome: "Floresta",   svg: "floresta",   coresPresentes: ["verde", "marrom", "amarelo", "preto"] },
      ],
    },
    {
      tipo: "cor-emocao",
      titulo: "As cores mudam o rosto",
      instrucao: "Toca em cada cor. Vê como o rostinho muda de emoção.",
      cartoes: [
        { cor: "amarelo",  hex: "#F0C24A", emoji: "😊", rostoUrl: rostoFeliz.url,    emocao: "Alegria",       explicacao: "O amarelo é quente e brilhante como o sol." },
        { cor: "azul",     hex: "#5A8FBF", emoji: "😌", rostoUrl: rostoSono.url,     emocao: "Calma",         explicacao: "O azul lembra o céu e a água tranquila." },
        { cor: "vermelho", hex: "#D64545", emoji: "😠", rostoUrl: rostoBravo.url,    emocao: "Raiva",         explicacao: "O vermelho é forte e quente — lembra fogo e o coração acelerado quando ficamos bravos." },
        { cor: "verde",    hex: "#7FAE73", emoji: "😴", rostoUrl: rostoSono.url,     emocao: "Tranquilidade", explicacao: "O verde vem das folhas e das plantas, dá vontade de descansar." },
        { cor: "roxo",     hex: "#8A5A83", emoji: "😲", rostoUrl: rostoSurpreso.url, emocao: "Surpresa",      explicacao: "O roxo é misterioso, mistura fogo e água." },
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
      tipo: "pintura-digital",
      titulo: "Pintura Digital",
      instrucao: "Escolhe uma ferramenta e uma cor. Depois pinta na tela em branco!",
      paleta: ["vermelho", "amarelo", "azul", "verde", "roxo", "laranja", "rosa", "marrom", "preto"],
    },
    {
      tipo: "cor-emocao-drag",
      titulo: "Jogo Cor × Emoção",
      instrucao: "Toca em uma emoção e depois na cor que combina com ela.",
      pares: [
        { emocao: "Alegria",       emoji: "😊", cor: "amarelo",  hex: "#F0C24A" },
        { emocao: "Calma",         emoji: "😌", cor: "azul",     hex: "#5A8FBF" },
        { emocao: "Coragem",       emoji: "🦁", cor: "vermelho", hex: "#D64545" },
        { emocao: "Esperança",     emoji: "🌱", cor: "verde",    hex: "#7FAE73" },
        { emocao: "Imaginação",    emoji: "🌌", cor: "roxo",     hex: "#8A5A83" },
      ],
    },
    {
      tipo: "musica-e-arte",
      titulo: "Música e Arte",
      instrucao: "Toca a música e pinta livre. Deixa a mão seguir o som!",
      paleta: ["vermelho", "amarelo", "azul", "verde", "roxo", "laranja", "rosa"],
      humor: "calmo",
    },
    {
      tipo: "missao-casa",
      titulo: "Missão em Casa",
      instrucao: "Procure em casa 3 objetos coloridos e tire uma foto. Depois envie aqui!",
      ideias: [
        "🍎 Uma fruta bem colorida",
        "👕 Uma roupa da cor que você mais gosta",
        "🧸 Um brinquedo cheio de cores",
        "🌼 Uma flor ou planta do quintal",
      ],
      cursoSlug: "arte-2ano",
      aulaSlug: "u1-a01-cores-falam",
    },
    {
      tipo: "atividade-manual",
      titulo: "Rosto das Emoções",
      instrucao: "Vamos criar um Rosto das Emoções em casa! Escolha um sentimento e monte um rosto usando cores que combinam com ele.",
      materiais: [
        "📄 Papel",
        "🖍 Lápis de cor",
        "📰 Revistas para recorte (opcional)",
        "🪣 Cola",
        "✂️ Tesoura sem ponta",
      ],
      passos: [
        { n: 1, texto: "Escolha um sentimento (alegria, calma, coragem, tristeza, surpresa...).", icone: "desenho" },
        { n: 2, texto: "Pense em quais cores combinam com esse sentimento.", icone: "desenho" },
        { n: 3, texto: "Desenhe um rosto grande no papel usando essas cores.", icone: "desenho" },
        { n: 4, texto: "Se quiser, recorte olhos e boca de revistas e cole no rosto.", icone: "corte" },
        { n: 5, texto: "Mostre pra alguém da família e explique por que escolheu essas cores.", icone: "pronto" },
      ],
    },
    {
      tipo: "desafio-final",
      titulo: "Meu Dia Colorido",
      instrucao: "Pinta como foi o seu dia hoje. Depois grave um áudio explicando as cores que escolheu.",
      paleta: ["vermelho", "amarelo", "azul", "verde", "roxo", "laranja", "rosa", "marrom", "preto"],
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
    {
      tipo: "relatorio",
      titulo: "Seu progresso artístico",
      texto: "Você percorreu todas as etapas do Ateliê das Cores! Veja tudo que você fez nessa jornada.",
    },
  ],
};

export default aula;
