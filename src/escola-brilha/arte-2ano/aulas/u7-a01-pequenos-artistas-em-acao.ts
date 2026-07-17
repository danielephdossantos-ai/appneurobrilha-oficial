import type { AulaArte } from "./u1-a01-cores-falam";
import { OBRAS_FAMOSAS } from "./u1-a01-cores-falam";
import obraNoiteEstrelada from "@/assets/arte-obras/noite-estrelada.jpg.asset.json";
import obraGirassois from "@/assets/arte-obras/girassois.jpg.asset.json";
import obraNenufares from "@/assets/arte-obras/nenufares.jpg.asset.json";
import obraTarsila from "@/assets/arte-obras/tarsila-inspirado.jpg.asset.json";
import obraPortinari from "@/assets/arte-obras/portinari-inspirado.jpg.asset.json";
import obraAthos from "@/assets/arte-obras/athos-inspirado.jpg.asset.json";

const aula: AulaArte = {
  id: "u7-a01-pequenos-artistas-em-acao",
  ano: "2º Ano",
  unidade: 7,
  aula: 1,
  tituloUnidade: "Pequenos Artistas em Ação",
  titulo: "Minha Primeira Exposição",
  duracaoMin: "45 a 60 min",
  objetivos: [
    "revisar o que aprendeu no ano de Arte",
    "criar uma obra livre para expor",
    "montar sua própria mini exposição em casa",
  ],
  etapas: [
    {
      tipo: "historia",
      titulo: "O Grande Dia da Exposição",
      icone: "lapis",
      texto:
        "A Brilha chamou você para o ateliê. Ela pendurou uma corda com prendedores e disse: 'Chegou a hora! Suas obras vão virar uma EXPOSIÇÃO de verdade!' Tudo o que você aprendeu no ano vai brilhar agora. Vem preparar sua estreia!",
      lapis: [
        { cor: "vermelho", hex: "#D64545", emocao: "Coragem",  frase: "Vermelho: coragem para mostrar sua arte." },
        { cor: "amarelo",  hex: "#F0C24A", emocao: "Alegria",  frase: "Amarelo: alegria de ser artista." },
        { cor: "azul",     hex: "#5A8FBF", emocao: "Calma",    frase: "Azul: calma para caprichar." },
        { cor: "verde",    hex: "#7FAE73", emocao: "Confiança",frase: "Verde: confiança no que você criou." },
        { cor: "roxo",     hex: "#8A5A83", emocao: "Sonho",    frase: "Roxo: seu sonho de artista virando real." },
      ],
      convite: "Prepara suas obras, artista!",
    },
    {
      tipo: "curiosidade",
      titulo: "Você Sabia?",
      texto:
        "Em uma EXPOSIÇÃO cada obra tem uma plaquinha com o nome do artista, o título e o material usado. Isso ajuda quem visita a entender a arte.",
    },
    {
      tipo: "galeria-obras",
      titulo: "🖼 Museu Final",
      instrucao: "Sua última visita ao museu! Toca em cada obra e recorda o que aprendeu.",
      obras: OBRAS_FAMOSAS,
    },
    {
      tipo: "memoria-obras",
      titulo: "🃏 Memória das Obras",
      instrucao: "Desafio final: encontra TODOS os pares obra ↔ artista.",
      pares: [
        { id: "noite-estrelada", titulo: "A Noite Estrelada", artista: "Van Gogh", url: obraNoiteEstrelada.url },
        { id: "girassois", titulo: "Os Girassóis", artista: "Van Gogh", url: obraGirassois.url },
        { id: "nenufares", titulo: "Os Nenúfares", artista: "Monet", url: obraNenufares.url },
        { id: "tarsila", titulo: "Boneca de Sol", artista: "Tarsila", url: obraTarsila.url },
        { id: "portinari", titulo: "Trabalhadores", artista: "Portinari", url: obraPortinari.url },
        { id: "athos", titulo: "Mosaico Geométrico", artista: "Athos Bulcão", url: obraAthos.url },
      ],
    },
    {
      tipo: "quiz",
      titulo: "Revisão do Ano",
      perguntas: [
        {
          pergunta: "As cores podem mostrar…",
          opcoes: ["só bonito e feio", "sentimentos e climas", "o preço da tinta"],
          correta: 1,
          explicacao: "Isso! Cores mostram sentimentos e o clima da obra.",
        },
        {
          pergunta: "Formas básicas (círculo, quadrado, triângulo) servem para…",
          opcoes: ["nada", "começar qualquer desenho", "só decorar"],
          correta: 1,
          explicacao: "Muito bem! Toda figura começa com formas simples.",
        },
        {
          pergunta: "A NATUREZA pode ser material de arte?",
          opcoes: ["Sim, folhas e pedras viram obra", "Não, arte é só com tinta"],
          correta: 0,
          explicacao: "Perfeito! Folhas, pedras, sementes — tudo pode virar arte.",
        },
        {
          pergunta: "A DANÇA é uma forma de…",
          opcoes: ["arte", "matemática", "esporte só"],
          correta: 0,
          explicacao: "Isso! A dança é uma linguagem da arte, feita com o corpo.",
        },
      ],
    },
    {
      tipo: "pintura-digital",
      titulo: "Sua Obra Livre",
      instrucao:
        "Escolha as cores que você mais gosta e pinte uma obra do jeito que quiser. Ela vai fazer parte da sua exposição!",
      paleta: ["vermelho", "amarelo", "azul", "verde", "roxo", "laranja", "rosa", "marrom", "preto"],
    },
    {
      tipo: "desafio-final",
      titulo: "Autorretrato do Artista",
      instrucao:
        "Agora se desenhe como um GRANDE ARTISTA: com pincel na mão, ateliê ao fundo, o que quiser. Capricha, você vai assinar!",
      paleta: ["vermelho", "amarelo", "azul", "verde", "roxo", "laranja", "rosa", "marrom", "preto"],
    },
    {
      tipo: "atividade-manual",
      titulo: "Moldura para sua Obra",
      instrucao:
        "Toda obra fica melhor com moldura! Vamos fazer uma para você expor em casa.",
      materiais: [
        "1 folha de cartolina ou papelão",
        "Régua e lápis",
        "Tesoura sem ponta (com ajuda de adulto)",
        "Cola",
        "Enfeites: purpurina, papéis coloridos, adesivos",
      ],
      passos: [
        { n: 1, texto: "Meça e desenhe a moldura maior que sua obra (2 dedos de sobra).", icone: "desenho" },
        { n: 2, texto: "Recorte o quadro do meio com ajuda de um adulto.",                icone: "corte"   },
        { n: 3, texto: "Decore a moldura como quiser.",                                   icone: "desenho" },
        { n: 4, texto: "Cole sua obra atrás da moldura.",                                 icone: "cola"    },
        { n: 5, texto: "Assine com seu nome e o TÍTULO da obra na frente!",               icone: "pronto"  },
      ],
    },
    {
      tipo: "missao-casa",
      titulo: "Minha Galeria de Casa",
      instrucao:
        "Escolha um cantinho da casa e monte sua EXPOSIÇÃO: pendure 3 obras suas com uma plaquinha (Nome, Título, Material). Convide a família para visitar!",
      ideias: [
        "🖼 3 obras suas do ano",
        "🪧 Uma plaquinha para cada uma",
        "🎟 Convite feito à mão para a família",
        "📸 Uma foto da inauguração",
      ],
      cursoSlug: "arte-2ano",
      aulaSlug: "u7-a01-galeria-em-casa",
    },
    {
      tipo: "relatorio",
      titulo: "Você é Artista!",
      texto:
        "Chegou até o fim do 2º ano de Arte! Você aprendeu sobre cores, texturas, formas, sons, movimentos e natureza. E o mais importante: descobriu que TEM um artista dentro de você. Continua criando — o mundo precisa da sua arte.",
    },
  ],
};

export default aula;
