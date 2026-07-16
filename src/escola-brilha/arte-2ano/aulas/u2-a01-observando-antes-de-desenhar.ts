import type { AulaArte } from "./u1-a01-cores-falam";
import folhaMacro from "@/assets/arte-2ano/referencias/folha-macro.jpg.asset.json";
import arvoreRef from "@/assets/arte-2ano/referencias/arvore-referencia.jpg.asset.json";

const aula: AulaArte = {
  id: "u2-a01-observando-antes-de-desenhar",
  ano: "2º Ano",
  unidade: 2,
  aula: 1,
  tituloUnidade: "Desenhando o Mundo ao Meu Redor",
  titulo: "Observando Antes de Desenhar",
  duracaoMin: "45 a 60 min",
  objetivos: [
    "observar detalhes da natureza e dos objetos",
    "desenhar formas proporcionais",
    "desenvolver atenção e percepção visual",
    "utilizar linhas, formas e texturas",
  ],
  etapas: [
    {
      tipo: "historia",
      titulo: "A Lupa Mágica da Brilha",
      texto:
        "Brilha achou uma lupa mágica no ateliê. Quando ela passa a lupa em qualquer coisa, aparecem detalhes que ninguém tinha visto antes. Hoje ela vai te ensinar a olhar do jeito de artista: com calma, procurando linhas, formas e texturas antes de desenhar.",
      lapis: [
        { cor: "verde",   hex: "#7FAE73", emocao: "Curiosidade", frase: "Verde: olhar cheio de curiosidade." },
        { cor: "amarelo", hex: "#F0C24A", emocao: "Descoberta",  frase: "Amarelo: cada detalhe é uma descoberta." },
        { cor: "azul",    hex: "#5A8FBF", emocao: "Calma",       frase: "Azul: observar com calma antes de desenhar." },
        { cor: "marrom",  hex: "#8B5A3C", emocao: "Contorno",    frase: "Marrom: o lápis desenha o contorno das coisas." },
        { cor: "preto",   hex: "#2D2418", emocao: "Detalhe",     frase: "Preto: linhas finas para os detalhes." },
      ],
      convite: "Pega sua lupa mágica e vem descobrir!",
    },
    {
      tipo: "lupa-magica",
      titulo: "Passa a Lupa Mágica",
      instrucao:
        "Arrasta a lupa em cima da folha e toca nos círculos brilhantes para descobrir o que só um artista vê.",
      fotoUrl: folhaMacro.url,
      alt: "Foto macro de uma folha verde com gotas de água",
      descobertas: [
        { x: 30, y: 42, r: 8, nome: "As nervuras",     texto: "Viu as linhas fininhas? São as veias da folha, elas parecem um mapa!" },
        { x: 62, y: 35, r: 8, nome: "As gotinhas",     texto: "As gotas são pequenas bolinhas brilhantes, cada uma reflete a luz." },
        { x: 20, y: 70, r: 8, nome: "A borda serrilhada", texto: "A borda não é reta! Ela tem pequenos dentinhos, como uma serrinha." },
        { x: 78, y: 72, r: 8, nome: "O verde muda",    texto: "O verde não é um só: tem verde-escuro, verde-claro e até quase amarelo." },
      ],
    },
    {
      tipo: "formas-basicas",
      titulo: "Toda Coisa Vira Forma",
      instrucao:
        "Antes de desenhar, todo artista enxerga formas simples nos objetos. Toca no objeto e depois escolhe a forma que ele parece.",
      itens: [
        { objeto: "Sol",       emoji: "☀️", forma: "circulo",   explicacao: "O sol é um grande círculo brilhando no céu." },
        { objeto: "Janela",    emoji: "🪟", forma: "quadrado",  explicacao: "A maioria das janelas é um quadrado ou retângulo." },
        { objeto: "Casinha",   emoji: "🏠", forma: "triangulo", explicacao: "O telhado é um triângulo em cima do corpo da casa." },
        { objeto: "Porta",     emoji: "🚪", forma: "retangulo", explicacao: "A porta é um retângulo alto, mais alta do que larga." },
        { objeto: "Bola",      emoji: "⚽", forma: "circulo",   explicacao: "A bola é um círculo perfeito." },
        { objeto: "Livro",     emoji: "📕", forma: "retangulo", explicacao: "O livro fechado é um retângulo." },
      ],
    },
    {
      tipo: "desenho-observacao",
      titulo: "Desenha a Árvore Observando",
      instrucao:
        "Olha bem a foto da árvore. Depois desenha do lado, seguindo os passos. Não precisa ficar igual — o importante é observar!",
      referenciaUrl: arvoreRef.url,
      referenciaAlt: "Árvore com copa arredondada e tronco marrom em um fundo azul",
      passos: [
        "Primeiro faça um retângulo fininho no meio, para o tronco.",
        "Em cima do tronco, desenhe um grande círculo — vai ser a copa.",
        "Dentro da copa, faça riscos pequenos para lembrar os galhos.",
        "Pinta o tronco de marrom e a copa de verde.",
      ],
      paleta: ["verde", "marrom", "amarelo", "azul", "preto"],
    },
    {
      tipo: "sete-erros",
      titulo: "Jogo das 5 Diferenças",
      instrucao:
        "Olha as duas imagens do parque. Toca nas coisas diferentes na imagem da direita. Tem 5 diferenças!",
      cena: "parque",
      diferencas: [
        { x: 22, y: 30, r: 8, nome: "O sol sumiu" },
        { x: 78, y: 25, r: 8, nome: "A nuvem virou uma pipa" },
        { x: 40, y: 60, r: 8, nome: "A flor mudou de cor" },
        { x: 65, y: 70, r: 8, nome: "O passarinho voou embora" },
        { x: 88, y: 55, r: 8, nome: "Apareceu uma borboleta" },
      ],
      totalPontos: 5,
    },
    {
      tipo: "curiosidade",
      titulo: "Você Sabia?",
      texto:
        "Leonardo da Vinci passava horas só olhando uma folha antes de desenhar! Ele dizia que quem sabe olhar, já sabe desenhar metade. Observar é o primeiro superpoder do artista.",
    },
    {
      tipo: "quiz",
      titulo: "O Que Você Aprendeu?",
      perguntas: [
        {
          pergunta: "O que um artista faz ANTES de começar a desenhar?",
          opcoes: ["Pega o lápis correndo", "Observa com calma", "Fecha os olhos"],
          correta: 1,
          explicacao: "Isso! Observar primeiro ajuda a ver detalhes que a gente ia deixar passar.",
        },
        {
          pergunta: "Qual forma tem a bola?",
          opcoes: ["Triângulo", "Quadrado", "Círculo"],
          correta: 2,
          explicacao: "Perfeito! A bola é um círculo.",
        },
        {
          pergunta: "Se você quer desenhar um tronco, qual forma usa primeiro?",
          opcoes: ["Retângulo fininho", "Círculo grande", "Estrela"],
          correta: 0,
          explicacao: "Muito bem! O tronco parece um retângulo em pé.",
        },
      ],
    },
    {
      tipo: "atividade-manual",
      titulo: "Desenha um Objeto da Sua Casa",
      instrucao:
        "Escolhe UM objeto que você tem em casa: um brinquedo, um copo, uma fruta. Coloca na frente, observa por 1 minuto e depois desenha.",
      materiais: ["1 folha branca", "Lápis grafite", "Lápis de cor (opcional)"],
      passos: [
        { n: 1, texto: "Escolha um objeto pequeno da sua casa e coloque na sua frente.",       icone: "montagem" },
        { n: 2, texto: "Observe por 1 minuto sem desenhar. Procure formas, linhas e sombras.", icone: "desenho" },
        { n: 3, texto: "Faça o contorno principal com o lápis, bem levinho.",                   icone: "desenho" },
        { n: 4, texto: "Adicione os detalhes: cantos, texturas, sombras.",                      icone: "desenho" },
        { n: 5, texto: "Pinte se quiser, ou deixe só no traço. Fica lindo dos dois jeitos!",   icone: "pronto"  },
      ],
    },
    {
      tipo: "missao-casa",
      titulo: "Meu Diário de Observação",
      instrucao:
        "Tira uma foto do desenho que você fez em casa. Ela vai ficar guardada no seu Diário de Observação, no álbum do curso.",
      ideias: [
        "🍎 Uma fruta da fruteira",
        "🧸 Seu brinquedo favorito",
        "🌱 Uma folha que você achou no chão",
        "☕ Uma xícara ou um copo bonito",
      ],
      cursoSlug: "arte-2ano",
      aulaSlug: "u2-a01-diario-observacao",
    },
    {
      tipo: "relatorio",
      titulo: "Como Foi Sua Observação?",
      texto:
        "Você aprendeu a olhar como um artista de verdade. Cada vez que você observar antes de desenhar, seus desenhos vão ficar melhores. Continua treinando o superpoder de olhar!",
    },
  ],
};

export default aula;
