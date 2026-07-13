import type { AulaCiencias } from "../tipos";
import { registrarAula } from "../tipos";
import bancadaImg from "@/assets/ciencias-2ano/u1-a1/bancada-laboratorio.jpg";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import microscopioImg from "@/assets/ciencias-2ano/u1-a1/microscopio-magico.jpg";
import bequerImg from "@/assets/ciencias-2ano/u1-a1/bequer-experimento.jpg";

/**
 * Ciências 2º ano — Unidade 1, Aula 01
 * "O Método do Cientista" — piloto da nova identidade laboratório roxa.
 * Missão: recuperar o 1º cristal (Cristal da Observação).
 */
export const aula01MetodoCientista: AulaCiencias = {
  slug: "aula-01-metodo-cientista",
  titulo: "O Método do Cientista",
  iconeTrilha: "🔬",
  bncc: ["EF02CI01"],
  duracaoMin: 25,

  // ============= CENA 01 · MOTIVAÇÃO =============
  cena01_motivacao: {
    tipo: "bancadaAbrindo",
    aurora:
      "Brilha, aconteceu uma coisa muito séria! Nosso Laboratório Escola Brilha perdeu SETE cristais de energia. Sem eles, nenhuma experiência funciona!",
    imagemUrl: bancadaImg,
    brilhaUrl: brilhaImg,
    titulo: "Missão Cientistas da Natureza",
    historia:
      "Cada cristal representa uma área da Ciência. Pra recuperar cada um, você vai fazer investigações de verdade. Hoje começa a busca pelo primeiro cristal: o CRISTAL DA OBSERVAÇÃO!",
    ctaTexto: "Começar Missão",
  },

  // ============= CENA 02 · PREVISÃO =============
  cena02_previsao: {
    tipo: "hipoteseTubos",
    aurora:
      "Antes de todo experimento, o cientista faz uma HIPÓTESE — um palpite do que acha que vai acontecer. Vamos treinar!",
    pergunta:
      "Se eu colocar uma PLANTINHA em cada tubo, em qual ela vai crescer melhor?",
    tubos: [
      { id: "sol", cor: "#facc15", rotulo: "COM SOL", emoji: "☀️" },
      { id: "escuro", cor: "#4c1d95", rotulo: "SEM LUZ", emoji: "🌑" },
      { id: "gelado", cor: "#22d3ee", rotulo: "NO GELO", emoji: "🧊" },
    ],
    respostaCerta: "sol",
    feedbackAcerto:
      "HIPÓTESE CONFIRMADA! Plantas precisam de LUZ do sol pra crescer bem. Você pensou como um cientista!",
    feedbackErro:
      "Quase! Pensa: plantas precisam de LUZ pra fazer o alimento delas. Qual tubo tem luz?",
    falaFinal:
      "Ver que uma HIPÓTESE é um palpite. Um cientista não precisa acertar de primeira — precisa TESTAR!",
  },

  // ============= CENA 03 · VOCABULÁRIO =============
  cena03_vocabulario: {
    tipo: "placasPetri",
    aurora:
      "Todo cientista usa estas quatro palavras mágicas. Toque em cada placa pra ouvir!",
    instrucao: "As 4 palavras do cientista",
    placas: [
      {
        id: "observar",
        termo: "OBSERVAR",
        emoji: "👀",
        corFundo: "#a855f7",
        explicacao: "Olhar com muita atenção pra descobrir detalhes.",
        exemplo: "Ex.: ver que a folha tem linhas finas por dentro.",
      },
      {
        id: "hipotese",
        termo: "HIPÓTESE",
        emoji: "💭",
        corFundo: "#22d3ee",
        explicacao: "Um palpite: o que você acha que vai acontecer?",
        exemplo: "Ex.: 'Acho que o gelo derrete no sol'.",
      },
      {
        id: "experimento",
        termo: "EXPERIMENTO",
        emoji: "🧪",
        corFundo: "#4ade80",
        explicacao: "Fazer um teste pra ver se sua hipótese está certa.",
        exemplo: "Ex.: colocar dois gelos, um no sol, outro na sombra.",
      },
      {
        id: "registrar",
        termo: "REGISTRAR",
        emoji: "📓",
        corFundo: "#fb923c",
        explicacao: "Anotar ou desenhar o que você descobriu.",
        exemplo: "Ex.: 'O gelo do sol derreteu em 5 minutos'.",
      },
    ],
    falaFinal:
      "Ver estas quatro palavras: observar, hipótese, experimento e registrar. Elas são as ferramentas do cientista!",
  },

  // ============= CENA 04 · LEITURA GUIADA =============
  cena04_leituraGuiada: {
    tipo: "pranchetaCientista",
    aurora: "Vamos ler juntos como pensa um verdadeiro cientista.",
    titulo: "Como pensa um cientista?",
    paragrafos: [
      "Um cientista NÃO decora respostas. Ele faz PERGUNTAS.",
      "Primeiro, ele OBSERVA o mundo. Vê uma folha, uma nuvem, uma formiga andando.",
      "Depois, ele PERGUNTA: por quê? como? o que acontece se...?",
      "Então cria uma HIPÓTESE, faz um EXPERIMENTO e REGISTRA o que descobriu.",
      "Ciência é curiosidade organizada. E você já é curioso — só falta organizar!",
    ],
    imagemUrl: brilhaImg,
    falaFinal:
      "Ver: cientista faz perguntas. Você faz perguntas todo dia — logo, você já pensa como cientista!",
  },

  // ============= CENA 05 · COMPREENSÃO =============
  cena05_compreensao: {
    tipo: "microscopioZoom",
    aurora:
      "Aponte o microscópio pra cada amostra e descubra um segredo escondido!",
    instrucao: "Toque em cada amostra pra ver de pertinho",
    microscopioUrl: microscopioImg,
    amostras: [
      {
        id: "folha",
        emoji: "🍃",
        rotulo: "Folha",
        descoberta:
          "Nervuras! São caminhos finos que levam água pra toda a folha, como canos pequenininhos.",
      },
      {
        id: "gota",
        emoji: "💧",
        rotulo: "Gota d'água",
        descoberta:
          "Está cheia de vida! Micróbios minúsculos nadam dentro — só o microscópio mostra.",
      },
      {
        id: "formiga",
        emoji: "🐜",
        rotulo: "Formiga",
        descoberta:
          "Tem SEIS pernas e duas antenas. As antenas servem pra ela conversar com outras formigas!",
      },
    ],
    falaFinal:
      "Ver: com o microscópio, coisas pequenas viram descobertas grandes. Isso é OBSERVAR de verdade!",
  },

  // ============= CENA 06 · PERSONAGENS & LUGAR =============
  cena06_personagensLugar: {
    tipo: "habitatPins",
    aurora:
      "Este é o Laboratório Escola Brilha! Toque em cada instrumento pra saber pra que serve.",
    instrucao: "Conheça o laboratório do Brilha",
    cenarioUrl: bancadaImg,
    pontos: [
      {
        id: "microscopio",
        x: 20,
        y: 55,
        emoji: "🔬",
        titulo: "Microscópio",
        texto: "Serve pra ver coisas MINÚSCULAS, invisíveis pro olho.",
      },
      {
        id: "tubos",
        x: 50,
        y: 65,
        emoji: "🧪",
        titulo: "Tubos de ensaio",
        texto: "Aqui a gente mistura líquidos com segurança pra ver o que acontece.",
      },
      {
        id: "bequer",
        x: 78,
        y: 70,
        emoji: "⚗️",
        titulo: "Béquer",
        texto: "Copo científico! Serve pra medir e misturar quantidades.",
      },
      {
        id: "cristais",
        x: 50,
        y: 20,
        emoji: "💎",
        titulo: "Cristais de energia",
        texto: "Cada cristal desbloqueia uma nova área da Ciência!",
      },
      {
        id: "caderno",
        x: 15,
        y: 25,
        emoji: "📓",
        titulo: "Diário do Cientista",
        texto: "Onde a gente ANOTA cada descoberta. Sem ele, esquecemos tudo.",
      },
    ],
    falaFinal:
      "Ver: cada instrumento tem uma função. Um cientista escolhe a ferramenta certa pra cada pergunta!",
  },

  // ============= CENA 07 · VOCÊ LÊ =============
  cena07_voceLe: {
    tipo: "diarioCampo",
    aurora: "Agora você lê sozinho, no seu ritmo. Boa leitura!",
    tituloLivro: "Diário do Cientista",
    subtitulo: "Página 1 — Minha primeira investigação",
    paragrafos: [
      "Hoje comecei a ser cientista. Descobri que existem 4 passos: OBSERVAR, criar uma HIPÓTESE, fazer um EXPERIMENTO e REGISTRAR o que aconteceu.",
      "O mais legal é que o cientista não precisa acertar de primeira. Ele erra, aprende e tenta de novo. Errar faz parte da ciência!",
      "Minha próxima missão é observar UMA coisa na natureza e anotar o que eu vi. Pode ser uma folha, uma nuvem, um bichinho — o que eu achar interessante.",
    ],
    falaFinal:
      "Ver: você já leu a primeira página do seu Diário! Todo cientista tem um caderninho pra guardar as descobertas.",
  },

  // ============= CENA 08 · MINIJOGO =============
  cena08_minijogo: {
    tipo: "experimentoMisturar",
    aurora:
      "Hora do experimento de verdade! Faça sua hipótese primeiro. Onde o gelo derrete mais rápido?",
    contexto:
      "Coloquei DOIS gelos iguais: um no SOL e outro na SOMBRA. Qual sua hipótese?",
    bequerUrl: bequerImg,
    hipoteses: [
      { id: "sol", emoji: "☀️", rotulo: "No SOL derrete primeiro" },
      { id: "sombra", emoji: "🌳", rotulo: "Na SOMBRA derrete primeiro" },
      { id: "junto", emoji: "🤝", rotulo: "Os dois derretem juntos" },
    ],
    respostaCerta: "sol",
    animacaoTexto: "Testando... o sol esquenta o gelo... derrete mais rápido!",
    feedbackAcerto:
      "HIPÓTESE CONFIRMADA! O calor do sol acelera o derretimento. Você é um verdadeiro investigador!",
    feedbackErro:
      "Sua hipótese não bateu com o experimento — E TÁ TUDO BEM! Cientistas erram, aprendem e testam de novo. A resposta certa era: SOL derrete primeiro.",
    falaFinal:
      "Ver: mesmo quando erramos a hipótese, o EXPERIMENTO ensina. Ciência é aprender testando!",
  },

  // ============= CENA 09 · REVISÃO =============
  cena09_revisao: {
    tipo: "quadroDescobertas",
    aurora: "Vamos revisar os 5 passos do método do cientista!",
    instrucao: "O Método Científico — 5 passos",
    descobertas: [
      {
        id: "1",
        emoji: "👀",
        titulo: "1. OBSERVAR",
        texto: "Olhar o mundo com atenção.",
      },
      {
        id: "2",
        emoji: "❓",
        titulo: "2. PERGUNTAR",
        texto: "Fazer uma pergunta boa: por quê? como?",
      },
      {
        id: "3",
        emoji: "💭",
        titulo: "3. HIPÓTESE",
        texto: "Dar um palpite: o que eu acho que vai acontecer.",
      },
      {
        id: "4",
        emoji: "🧪",
        titulo: "4. EXPERIMENTO",
        texto: "Fazer um teste pra ver se a hipótese está certa.",
      },
      {
        id: "5",
        emoji: "📓",
        titulo: "5. REGISTRAR",
        texto: "Anotar o que descobriu no diário.",
      },
    ],
    falaFinal:
      "Ver: cinco passos simples que todo cientista usa — do maior do mundo até você, aqui em casa!",
  },

  // ============= CENA 10 · AVALIAÇÃO =============
  cena10_avaliacao: {
    tipo: "carimboCientista",
    aurora:
      "Chegou a hora do teste do cientista! Cada acerto ganha um carimbo HIPÓTESE CONFIRMADA. No final, você recebe o Cristal da Observação!",
    instrucao: "Quiz do Cientista — 5 perguntas",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que um cientista faz PRIMEIRO?",
        opcoes: [
          { id: "a", texto: "Observa com atenção", emoji: "👀", correta: true },
          { id: "b", texto: "Decora respostas", emoji: "📚" },
          { id: "c", texto: "Adivinha e pronto", emoji: "🎲" },
        ],
        feedbackAcerto:
          "Isso! Toda ciência começa com OBSERVAÇÃO — olhar o mundo com atenção.",
        feedbackErro:
          "Ciência não é adivinhar nem decorar. Começa OBSERVANDO.",
      },
      {
        id: "q2",
        pergunta: "O que é uma HIPÓTESE?",
        opcoes: [
          { id: "a", texto: "A resposta certa" },
          { id: "b", texto: "Um palpite pra testar", correta: true },
          { id: "c", texto: "Um brinquedo do laboratório" },
        ],
        feedbackAcerto:
          "Certeza! HIPÓTESE é um palpite — pode dar certo ou não, o importante é testar.",
        feedbackErro:
          "Hipótese NÃO é a resposta certa. É um palpite que a gente TESTA.",
      },
      {
        id: "q3",
        pergunta: "Pra que serve o EXPERIMENTO?",
        opcoes: [
          { id: "a", texto: "Pra brincar sem motivo" },
          { id: "b", texto: "Testar se a hipótese está certa", correta: true },
          { id: "c", texto: "Pra decorar o laboratório" },
        ],
        feedbackAcerto:
          "É isso! O experimento TESTA a hipótese na prática.",
        feedbackErro:
          "Experimento é sério — serve pra TESTAR a hipótese.",
      },
      {
        id: "q4",
        pergunta: "Por que REGISTRAR é importante?",
        opcoes: [
          { id: "a", texto: "Pra guardar a descoberta", correta: true },
          { id: "b", texto: "Pra ninguém ver" },
          { id: "c", texto: "Não é importante" },
        ],
        feedbackAcerto:
          "Isso! Sem registrar a gente ESQUECE. O diário guarda cada descoberta.",
        feedbackErro:
          "Sem registro, a descoberta se perde. Toda ciência PRECISA ser anotada.",
      },
      {
        id: "q5",
        pergunta: "Se sua hipótese estiver ERRADA, o que fazer?",
        opcoes: [
          { id: "a", texto: "Chorar e desistir" },
          { id: "b", texto: "Aprender e testar outra", correta: true },
          { id: "c", texto: "Mentir e dizer que acertou" },
        ],
        feedbackAcerto:
          "PERFEITO! Cientistas erram, aprendem e testam de novo. Errar faz parte!",
        feedbackErro:
          "Cientista NÃO desiste nem mente. Errar é como se aprende!",
      },
    ],
    selo: {
      nome: "Cristal da Observação",
      subtitulo: "1º cristal do Laboratório Escola Brilha desbloqueado!",
      emoji: "💎",
      cor: "from-purple-400 via-fuchsia-500 to-purple-700",
    },
    falaFinal:
      "Ver: você recuperou o Cristal da Observação! Ele desbloqueia seu Microscópio Virtual pra usar nas próximas missões!",
  },

  // ============= CENA 11 · MISSÃO EM FAMÍLIA =============
  cena11_missaoFamilia: {
    tipo: "missaoCampo",
    aurora:
      "Sua missão de campo com a família! Vá pra fora do computador e seja cientista de verdade.",
    titulo: "Missão de Campo: Minha 1ª Observação",
    materiais: [
      "1 folha de papel (ou o Diário do Cientista)",
      "1 lápis ou caneta",
      "Um adulto pra ir junto",
    ],
    passos: [
      "Saia de casa com um adulto (pode ser quintal, praça, calçada).",
      "Escolha UMA coisa da natureza (folha, formiga, nuvem, poça d'água).",
      "OBSERVE por 2 minutos, sem tocar. Só olhar.",
      "Faça uma HIPÓTESE: 'Acho que essa folha caiu porque...'",
      "REGISTRE: desenhe ou escreva o que você viu.",
      "Tire uma FOTO da sua descoberta pra guardar no seu Álbum!",
    ],
    registro:
      "Volte aqui, tire uma foto do que você observou e clique no botão da câmera embaixo.",
    falaFinal:
      "Ver: a missão de campo é o mais importante. Ciência acontece NO MUNDO, não só na tela!",
  },

  recompensa: {
    xp: 100,
    moedas: 20,
    medalha: "Pequeno Cientista",
    cristal: "Cristal da Observação",
  },
};

registrarAula(aula01MetodoCientista);
