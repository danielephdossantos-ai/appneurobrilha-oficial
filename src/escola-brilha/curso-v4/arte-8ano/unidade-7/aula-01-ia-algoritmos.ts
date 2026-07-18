import type { AulaArteV1 } from "../../types";
import veraMolnar from "@/assets/arte-8ano/u7-vera-molnar.jpg.asset.json";
import manfredMohr from "@/assets/arte-8ano/u7-manfred-mohr.jpg.asset.json";
import manfredMohr2 from "@/assets/arte-8ano/u7-manfred-mohr2.jpg.asset.json";
import mandelbrot from "@/assets/arte-8ano/u7-mandelbrot.jpg.asset.json";
import mandelbrot2 from "@/assets/arte-8ano/u7-mandelbrot2.jpg.asset.json";
import juliaSet from "@/assets/arte-8ano/u7-julia-set.jpg.asset.json";
import fractalPattern from "@/assets/arte-8ano/u7-fractal-pattern.jpg.asset.json";
import neuralNetwork from "@/assets/arte-8ano/u7-neural-network.jpg.asset.json";
import dataCenter from "@/assets/arte-8ano/u7-data-center.jpg.asset.json";
import dataCenter2 from "@/assets/arte-8ano/u7-data-center2.jpg.asset.json";
import connectome from "@/assets/arte-8ano/u7-connectome.jpg.asset.json";
import codeScreen from "@/assets/arte-8ano/u7-code-screen.jpg.asset.json";
import codeScreen2 from "@/assets/arte-8ano/u7-code-screen2.jpg.asset.json";
import binaryMatrix from "@/assets/arte-8ano/u7-binary-matrix.jpg.asset.json";
import museuDigital from "@/assets/arte-8ano/u7-museum-digital.jpg.asset.json";
import generativeArt from "@/assets/arte-8ano/u7-generative-art.jpg.asset.json";
import supercomputer from "@/assets/arte-8ano/u7-supercomputer.jpg.asset.json";
import sculpture3d from "@/assets/arte-8ano/u7-3d-print-sculpture.jpg.asset.json";

/**
 * Arte · 8º Ano · Unidade 7 (FINAL) · Aula 01 — "Inteligência Artificial, Algoritmos e o Futuro da Criação"
 * Metanarrativa: 🎭 Eco-Simulacros da Revolução Digital — FECHAMENTO
 * Foco: arte algorítmica/generativa, redes neurais, IA criativa, autoria na era digital.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-ia-algoritmos",
  titulo: "IA, Algoritmos e o Futuro da Criação",
  iconeTrilha: "🤖",
  bncc: ["EF69AR01", "EF69AR04", "EF69AR30", "EF69AR33"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Ciber-Designer! Chegamos ao ÚLTIMO módulo dos Eco-Simulacros. Todo circuito, pixel e realidade mista que você atravessou convergem agora numa única pergunta: quando um ALGORITMO cria, quem é o artista? Toca em cada pista pra abrir o Núcleo de Criação Sintética.",
    titulo: "🤖 O Núcleo de Criação Sintética",
    instrucao: "Toca em cada pista pra ativar o módulo final",
    itens: [
      { emoji: "🎨", rotulo: "Arte Algorítmica (pioneira)", descricao: "Desde os anos 1960, artistas escrevem CÓDIGOS e regras matemáticas que um computador executa pra gerar desenhos — a máquina como pincel, a lógica como estilo.", cor: "#f59e0b", fotoUrl: veraMolnar },
      { emoji: "🌀", rotulo: "Fractais e Padrões Matemáticos", descricao: "Formas que se repetem em escalas infinitas, geradas por fórmulas simples. A beleza nasce da MATEMÁTICA, não do gesto manual do artista.", cor: "#7c3aed", fotoUrl: mandelbrot },
      { emoji: "🧠", rotulo: "Redes Neurais / IA Generativa", descricao: "Sistemas inspirados no cérebro humano que aprendem padrões em milhões de imagens e depois GERAM obras novas a partir de comandos de texto (prompts).", cor: "#0891b2", fotoUrl: neuralNetwork },
      { emoji: "🖥️", rotulo: "Infraestrutura de Dados", descricao: "Por trás de toda IA existem servidores gigantes processando dados 24h — a arte digital também tem um custo ENERGÉTICO e ambiental real.", cor: "#16a34a", fotoUrl: dataCenter },
    ],
    falaFinal: "Sua missão final: entender como algoritmos criam, e decidir o que ainda cabe à AUTORIA humana nessa nova era.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de ciber-designer antes de entrar no código-fonte da criação!",
    perguntas: [
      {
        pergunta: "Uma artista pioneira, nos anos 1960, escreve um PROGRAMA DE COMPUTADOR com regras matemáticas pra gerar desenhos geométricos. O que ela está fazendo?",
        fotoUrl: veraMolnar,
        alternativas: [
          { texto: "Arte Algorítmica — a máquina executa regras que a artista PROJETOU como código", correta: true },
          { texto: "Cópia mecânica de uma pintura já existente, sem nenhuma criação nova", correta: false },
        ],
        feedbackAcerto: "Perfeito! A artista é a autora do ALGORITMO — a regra criativa, mesmo que o computador desenhe.",
        feedbackErro: "Cuidado: não é cópia. A artista CRIA as regras matemáticas; o computador só as executa.",
      },
      {
        pergunta: "Uma imagem se repete em padrões infinitos, cada vez menor, gerada por uma fórmula matemática simples. Que fenômeno é esse?",
        fotoUrl: mandelbrot,
        alternativas: [
          { texto: "Fractal — padrão que se repete em escalas infinitas a partir de uma equação", correta: true },
          { texto: "Pincelada aleatória sem nenhuma lógica matemática por trás", correta: false },
        ],
        feedbackAcerto: "Isso! Fractais mostram que a matemática pode gerar beleza infinita e imprevisível.",
        feedbackErro: "Fractais têm lógica MATEMÁTICA precisa por trás — nada é aleatório na fórmula.",
      },
      {
        pergunta: "Uma IA generativa recebe o comando de texto 'floresta futurista ao pôr do sol' e cria uma imagem nova. Quem é o AUTOR dessa obra?",
        fotoUrl: neuralNetwork,
        alternativas: [
          { texto: "É uma questão em debate: a pessoa que escreveu o prompt, quem programou a IA e os artistas cujas obras treinaram o sistema", correta: true },
          { texto: "Só a máquina — nenhum ser humano tem qualquer participação na autoria", correta: false },
        ],
        feedbackAcerto: "Exato! Autoria na era da IA é uma questão ABERTA que envolve várias pessoas e decisões éticas.",
        feedbackErro: "A IA não age sozinha: ela foi treinada com obras humanas e comandada por um prompt humano.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do Núcleo de Criação Sintética. Toca em cada verbete!",
    cards: [
      { termo: "Arte Algorítmica", definicao: "Obras criadas a partir de um CONJUNTO DE REGRAS (algoritmo) escrito por um artista e executado por um computador, desde os anos 1960.", emoji: "🎨", cor: "#f59e0b", fotoUrl: manfredMohr },
      { termo: "Fractal", definicao: "Padrão matemático que se repete infinitamente em escalas diferentes, gerado por fórmulas simples aplicadas repetidas vezes.", emoji: "🌀", cor: "#7c3aed", fotoUrl: juliaSet },
      { termo: "Rede Neural / IA Generativa", definicao: "Sistema inspirado no cérebro humano que aprende padrões em grandes bancos de imagens e gera obras novas a partir de comandos (prompts).", emoji: "🧠", cor: "#0891b2", fotoUrl: connectome },
      { termo: "Autoria na Era Digital", definicao: "Debate sobre quem é o AUTOR de uma obra feita com IA: quem escreveu o prompt, quem programou o sistema ou os artistas que treinaram a máquina.", emoji: "✍️", cor: "#dc2626", fotoUrl: codeScreen },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como o ALGORITMO virou o novo pincel da humanidade.",
    paragrafos: [
      "Nos anos 1960, quando os primeiros computadores ocupavam salas inteiras, artistas pioneiras já escreviam PROGRAMAS pra gerar desenhos. Uma artista húngara-francesa criava séries de linhas geométricas que o computador desenhava seguindo regras matemáticas — nascia a ARTE ALGORÍTMICA, onde o código é o pincel e a lógica é o estilo.",
      "Décadas depois, outro pioneiro passou a vida explorando CUBOS em rotação através de fórmulas matemáticas, sempre perguntando: quantas variações uma única regra pode gerar? Essa pergunta nos leva direto aos FRACTAIS — padrões que se repetem infinitamente em escalas cada vez menores, vistos em conjuntos matemáticos famosos e até nas formas da natureza, como galhos e nuvens.",
      "Hoje, esse legado explode em REDES NEURAIS: sistemas inspirados no cérebro humano, treinados com milhões de imagens, capazes de gerar obras completamente novas a partir de um simples comando de texto — o PROMPT. Por trás dessa mágica existe uma estrutura gigantesca de SERVIDORES processando dados 24 horas, consumindo energia real: a arte digital também tem peso ambiental.",
      "E aqui mora a grande questão do nosso tempo: quando uma IA generativa cria uma imagem, QUEM é o autor? A pessoa que escreveu o prompt? Quem programou o algoritmo? Ou os milhares de artistas cujas obras alimentaram o treinamento da máquina, muitas vezes sem consentimento? Não existe resposta pronta — existe DEBATE, ética e responsabilidade.",
      "Instalações contemporâneas já usam dados de cidades inteiras — tráfego, clima, batimentos cardíacos — pra 'pintar' com luz e som em museus, borrando ainda mais a linha entre humano e máquina. Você, ciber-designer, chega ao fim dos Eco-Simulacros sabendo que o futuro da arte não está em ESCOLHER entre humano ou IA, mas em decidir, com consciência crítica, como usar cada ferramenta pra criar com AUTORIA e responsabilidade.",
    ],
    pigmentos: [
      { nome: "Arte Algorítmica", hex: "#f59e0b", fonte: "Código como pincel", emoji: "🎨", fotoUrl: manfredMohr },
      { nome: "Fractal", hex: "#7c3aed", fonte: "Padrão matemático infinito", emoji: "🌀", fotoUrl: mandelbrot2 },
      { nome: "Rede Neural / IA", hex: "#0891b2", fonte: "Aprendizado de padrões", emoji: "🧠", fotoUrl: neuralNetwork },
      { nome: "Infraestrutura de Dados", hex: "#16a34a", fonte: "Servidores e energia real", emoji: "🖥️", fotoUrl: dataCenter2 },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do Núcleo de Criação Sintética!",
    perguntas: [
      {
        pergunta: "Qual é a diferença entre um FRACTAL e um desenho feito à mão livre?",
        fotoUrl: juliaSet,
        alternativas: [
          { texto: "O fractal nasce de uma FÓRMULA MATEMÁTICA repetida em escalas, gerando padrões infinitos e precisos", correta: true },
          { texto: "Não existe diferença nenhuma — os dois são feitos exatamente da mesma forma", correta: false },
        ],
        feedbackAcerto: "Correto! A lógica matemática por trás do fractal é o que garante sua repetição infinita.",
        feedbackErro: "O desenho à mão livre não segue uma fórmula fixa. O fractal é matematicamente PRECISO e repetitivo.",
      },
      {
        pergunta: "O que uma REDE NEURAL de IA generativa precisa fazer ANTES de conseguir criar imagens novas?",
        fotoUrl: connectome,
        alternativas: [
          { texto: "Ser TREINADA com milhões de imagens já existentes, aprendendo padrões visuais", correta: true },
          { texto: "Nada — ela já nasce sabendo criar qualquer imagem sem nenhum tipo de aprendizado", correta: false },
        ],
        feedbackAcerto: "Isso! Toda IA generativa depende de um treinamento prévio com dados — sem eles, não cria nada.",
        feedbackErro: "Nenhuma IA cria do zero: ela aprende PADRÕES a partir de um enorme banco de imagens.",
      },
      {
        pergunta: "Por que a questão da AUTORIA é tão discutida quando falamos de arte feita por IA?",
        fotoUrl: codeScreen2,
        alternativas: [
          { texto: "Porque envolve quem escreveu o prompt, quem programou o sistema e os artistas cujas obras treinaram a IA", correta: true },
          { texto: "Porque a lei já resolveu esse problema há décadas e não há mais nada a discutir", correta: false },
        ],
        feedbackAcerto: "Perfeito! Autoria na era da IA ainda é uma fronteira ética e legal em construção.",
        feedbackErro: "Esse debate está longe de resolvido — é justamente por isso que precisamos pensar CRITICAMENTE sobre ele.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada elemento pelo CONCEITO da criação algorítmica que ele representa!",
    animais: [
      {
        nome: "Linhas geométricas geradas por programa dos anos 1960", emoji: "🎨", fotoUrl: veraMolnar,
        corAlvo: { nome: "Arte Algorítmica", hex: "#f59e0b" },
        opcoes: [
          { nome: "Arte Algorítmica", hex: "#f59e0b" },
          { nome: "Fractal", hex: "#7c3aed" },
          { nome: "Pintura a óleo tradicional", hex: "#78716c" },
        ],
        falaAcerto: "Isso! Regras de código gerando desenho = arte algorítmica pioneira.",
      },
      {
        nome: "Padrão que se repete infinitamente em espirais", emoji: "🌀", fotoUrl: mandelbrot,
        corAlvo: { nome: "Fractal", hex: "#7c3aed" },
        opcoes: [
          { nome: "Fractal", hex: "#7c3aed" },
          { nome: "Rede Neural", hex: "#0891b2" },
          { nome: "Escultura em bronze", hex: "#78716c" },
        ],
        falaAcerto: "Correto! Repetição matemática infinita em escalas = fractal.",
      },
      {
        nome: "Sistema que aprende com milhões de imagens e gera obras novas", emoji: "🧠", fotoUrl: neuralNetwork,
        corAlvo: { nome: "Rede Neural / IA Generativa", hex: "#0891b2" },
        opcoes: [
          { nome: "Rede Neural / IA Generativa", hex: "#0891b2" },
          { nome: "Arte Algorítmica", hex: "#f59e0b" },
          { nome: "Fractal", hex: "#7c3aed" },
        ],
        falaAcerto: "Perfeito! Aprendizado de padrões + geração de novas obras = IA generativa.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra criar SUA primeira obra com o Sintetizador Latente.",
    passos: [
      { id: "p1", texto: "Escolho 3 CONCEITOS de inspiração (ex.: floresta, circuito, memória)", emoji: "💡", ordem: 1, fotoUrl: generativeArt },
      { id: "p2", texto: "Escrevo um PROMPT descrevendo como esses conceitos se combinam visualmente", emoji: "📝", ordem: 2, fotoUrl: codeScreen },
      { id: "p3", texto: "Defino a PALETA de cores e o estilo (fractal, geométrico, orgânico)", emoji: "🎨", ordem: 3, fotoUrl: fractalPattern },
      { id: "p4", texto: "Observo o resultado gerado e ajusto o prompt pra refinar a intenção artística", emoji: "🔁", ordem: 4, fotoUrl: mandelbrot2 },
      { id: "p5", texto: "Escrevo uma FICHA DE AUTORIA explicando minhas escolhas — a IA executou, mas EU decidi", emoji: "🏷️", ordem: 5, fotoUrl: sculpture3d },
    ],
    falaAcerto: "Você acabou de operar o Sintetizador Latente e assinar sua primeira obra híbrida!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário final do ciber-designer. Toca nas palavras coloridas.",
    titulo: "Diário do Ciber-Designer — Último Registro",
    trechos: [
      { texto: "Cheguei ao fim dos Eco-Simulacros entendendo que o código também pode ser", palavraDestaque: "arte algorítmica", corDestaque: "#f59e0b" },
      { texto: "Aprendi que padrões matemáticos infinitos se chamam", palavraDestaque: "fractais", corDestaque: "#7c3aed" },
      { texto: "e que sistemas treinados com milhões de imagens são", palavraDestaque: "redes neurais", corDestaque: "#0891b2" },
      { texto: "Toda essa tecnologia roda em servidores que fazem parte da", palavraDestaque: "infraestrutura de dados", corDestaque: "#16a34a" },
      { texto: "E entendi que, quando escrevo um prompt com intenção, ainda sou EU quem exerce a", palavraDestaque: "autoria", corDestaque: "#dc2626" },
      { texto: "porque criar com IA não é deixar de ser artista — é aprender a dialogar com uma nova ferramenta." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 O Sintetizador Latente! Combina 3 conceitos antes do tempo acabar e gera um OUTPUT criativo único.",
    titulo: "🎯 O Sintetizador Latente",
    instrucao: "Toca em 3 conceitos diferentes pra combiná-los e gerar um output visual antes do tempo acabar!",
    tempoSeg: 40,
    itens: [
      { emoji: "🌳", rotulo: "Natureza orgânica", cor: "#16a34a" },
      { emoji: "🔌", rotulo: "Circuito digital", cor: "#0891b2" },
      { emoji: "🌀", rotulo: "Padrão fractal", cor: "#7c3aed" },
      { emoji: "🧠", rotulo: "Memória / dado", cor: "#dc2626" },
      { emoji: "🌆", rotulo: "Cidade futurista", cor: "#f59e0b" },
      { emoji: "💫", rotulo: "Luz generativa", cor: "#ec4899" },
    ],
    falaFinal: "Output gerado! O Sintetizador Latente combinou seus 3 conceitos numa obra inédita, assinada por VOCÊ.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o Núcleo de Criação Sintética — e os Eco-Simulacros inteiros. Toca em cada verbete pra consolidar!",
    titulo: "🧪 Caderno Final do Ciber-Designer",
    itens: [
      { emoji: "🎨", rotulo: "Arte Algorítmica", descricao: "Obras criadas a partir de regras de código escritas por um artista e executadas por um computador.", cor: "#f59e0b", fotoUrl: manfredMohr2 },
      { emoji: "🌀", rotulo: "Fractal", descricao: "Padrão matemático que se repete infinitamente em escalas, gerando beleza a partir de fórmulas simples.", cor: "#7c3aed", fotoUrl: mandelbrot },
      { emoji: "🧠", rotulo: "Rede Neural / IA Generativa", descricao: "Sistema que aprende padrões em grandes bancos de imagens e gera obras novas a partir de prompts.", cor: "#0891b2", fotoUrl: neuralNetwork },
      { emoji: "🖥️", rotulo: "Infraestrutura de Dados", descricao: "Servidores que processam a IA 24h — a arte digital também tem custo energético e ambiental.", cor: "#16a34a", fotoUrl: supercomputer },
      { emoji: "✍️", rotulo: "Autoria na Era Digital", descricao: "Debate sobre quem é autor numa obra de IA: quem escreve o prompt, quem programa, ou quem treinou o sistema.", cor: "#dc2626", fotoUrl: binaryMatrix },
      { emoji: "🏛️", rotulo: "Instalações de Dados", descricao: "Museus contemporâneos usam dados reais (clima, tráfego, batimentos) pra criar obras de luz e som imersivas.", cor: "#ec4899", fotoUrl: museuDigital },
    ],
    falaFinal: "Núcleo de Criação Sintética ATIVADO — os Eco-Simulacros da Revolução Digital estão COMPLETOS!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, ciber-designer — a última dos Eco-Simulacros!",
    quiz: {
      pergunta: "Quando uma pessoa escreve um PROMPT criativo e uma IA generativa cria uma imagem a partir dele, o que podemos afirmar sobre a AUTORIA dessa obra?",
      alternativas: [
        { texto: "A autoria é COMPARTILHADA e ainda está em debate: envolve quem escreveu o prompt, quem programou a IA e os artistas que treinaram o sistema", correta: true },
        { texto: "A autoria pertence exclusivamente à máquina, sem qualquer participação humana", correta: false },
      ],
      feedback: "Excelente! Toda IA generativa é resultado de um TREINAMENTO com obras humanas e é ACIONADA por um comando humano (o prompt). Por isso a autoria na era digital é uma questão ÉTICA aberta — não existe resposta simples, e cabe a cada criador usar essa ferramenta com responsabilidade, dando crédito e refletindo sobre o impacto de suas escolhas. Você, ciber-designer, completa os Eco-Simulacros entendendo que tecnologia e arte só fazem sentido quando guiadas por consciência crítica.",
    },
    missaoFamilia:
      "📸 Missão Final do Sintetizador Latente: com um adulto, escreva um PROMPT criativo pra uma IA generativa (texto ou imagem), combinando pelo menos 3 conceitos à sua escolha. Depois, registre por escrito ou em áudio de 30s uma REFLEXÃO sobre autoria: o que nessa obra é seu, o que é da máquina, e por quê. Fotografe o resultado e mande pro álbum — essa é a última postagem dos Eco-Simulacros!",
    recompensaTitulo: "🤖 Núcleo de Criação Sintética do Eco-Simulacro ATIVADO — Eco-Simulacros COMPLETOS!",
    recompensaItem: "🎛️ Chip Sintetizador Latente + Selo de Encerramento do 8º Ano",
  },

  recompensa: { xp: 150, moedas: 80, medalha: "Chip Sintetizador Latente" },
};
