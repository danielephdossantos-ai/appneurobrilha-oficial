import type { AulaArteV1, UnidadeArteV1 } from "../types";

type Config = {
  numero: number;
  slug: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  bncc: string[];
  icone: string;
  tema: string;
  conceito: string;
  pratica: string;
  exemplo: string;
  opcoes: [string, string, string, string];
  cor?: string;
};

export function criarUnidadeArte2(c: Config): UnidadeArteV1 {
  const [correta, d1, d2, d3] = c.opcoes;
  const aula: AulaArteV1 = {
    slug: `aula-01-${c.slug}`,
    titulo: c.titulo,
    iconeTrilha: c.icone,
    bncc: c.bncc,
    duracaoMin: 24,
    cena01_motivacao: {
      tipo: "cenaTematica",
      variante: "explorar",
      aurora: `O Ateliê das Cores abriu uma nova sala sobre ${c.tema}. Vamos observar, experimentar e criar de verdade!`,
      titulo: c.titulo,
      instrucao: "Toque nos cartões e descubra o tema da missão.",
      itens: [
        { emoji: c.icone, rotulo: c.tema, descricao: c.conceito, cor: c.cor ?? "#7c3aed" },
        { emoji: "👀", rotulo: "Observar", descricao: "Perceber detalhes antes de criar.", cor: "#0ea5e9" },
        { emoji: "🧪", rotulo: "Experimentar", descricao: c.pratica, cor: "#f97316" },
        { emoji: "💬", rotulo: "Compartilhar", descricao: "Explicar escolhas e ouvir os colegas.", cor: "#16a34a" },
      ],
      falaFinal: "Arte se aprende observando, fazendo, pensando e compartilhando.",
    },
    cena02_previsao: {
      tipo: "quizCores",
      aurora: "Antes da explicação, escolha a ação que combina com esta linguagem artística.",
      perguntas: [
        {
          pergunta: `Qual ação desenvolve ${c.tema}?`,
          alternativas: [
            { texto: correta, correta: true },
            { texto: d1, correta: false },
            { texto: d2, correta: false },
            { texto: d3, correta: false },
          ],
          feedbackAcerto: `${correta} coloca a habilidade artística em prática.`,
          feedbackErro: `Observe o objetivo: precisamos ${c.pratica.toLowerCase()}`,
        },
      ],
    },
    cena03_vocabulario: {
      tipo: "vocabularioCards",
      aurora: "Abra os quatro cartões antes de seguir.",
      cards: [
        { termo: c.tema, definicao: c.conceito, emoji: c.icone, cor: c.cor ?? "#7c3aed" },
        { termo: "Apreciar", definicao: "Observar ou escutar com atenção e respeito.", emoji: "👀", cor: "#0ea5e9" },
        { termo: "Experimentar", definicao: "Testar possibilidades para descobrir como funcionam.", emoji: "🧪", cor: "#f97316" },
        { termo: "Criar", definicao: "Fazer escolhas para comunicar uma ideia própria.", emoji: "✨", cor: "#16a34a" },
      ],
    },
    cena04_leituraGuiada: {
      tipo: "leituraTintas",
      aurora: `Agora vamos entender ${c.tema} passo a passo.`,
      paragrafos: [
        c.conceito,
        `Um exemplo concreto é: ${c.exemplo}.`,
        `Na prática, a criança deve ${c.pratica.toLowerCase()}`,
        "Depois da experiência, vale comparar resultados, explicar uma escolha e respeitar outras formas de expressão.",
      ],
      pigmentos: [
        { nome: "Perceber", hex: "#0ea5e9", fonte: "Observar ou escutar", emoji: "👀" },
        { nome: "Testar", hex: "#f97316", fonte: "Experimentar possibilidades", emoji: "🧪" },
        { nome: "Escolher", hex: "#7c3aed", fonte: "Tomar decisões artísticas", emoji: "🎯" },
        { nome: "Compartilhar", hex: "#16a34a", fonte: "Contar o que descobriu", emoji: "💬" },
      ],
    },
    cena05_compreensao: {
      tipo: "quizCores",
      aurora: "Hora de conferir se o conceito ficou claro.",
      perguntas: [
        {
          pergunta: `Qual exemplo pertence a ${c.tema}?`,
          alternativas: [
            { texto: c.exemplo, correta: true },
            { texto: d1, correta: false },
            { texto: d2, correta: false },
            { texto: d3, correta: false },
          ],
          feedbackAcerto: `Isso! ${c.exemplo} desenvolve o tema da aula.`,
          feedbackErro: `Retome a explicação: ${c.conceito}`,
        },
        {
          pergunta: "Como comentar a criação de outra pessoa?",
          alternativas: [
            { texto: "Dizer o que percebeu com respeito", correta: true },
            { texto: "Rir da escolha", correta: false },
            { texto: "Mandar refazer igual", correta: false },
            { texto: "Ignorar sem observar", correta: false },
          ],
          feedbackAcerto: "A apreciação respeitosa também faz parte da aprendizagem em Arte.",
          feedbackErro: "Criações podem ser diferentes; comentamos o que percebemos sem desrespeitar.",
        },
      ],
    },
    cena06_personagensLugar: {
      tipo: "pintarAnimais",
      aurora: "Ajude cada personagem a escolher uma atitude artística adequada.",
      animais: [
        {
          nome: "Aurora pesquisadora",
          emoji: "👩‍🎨",
          corAlvo: { nome: correta, hex: "#16a34a" },
          opcoes: [
            { nome: correta, hex: "#16a34a" },
            { nome: d1, hex: "#ef4444" },
            { nome: d2, hex: "#f59e0b" },
            { nome: d3, hex: "#64748b" },
          ],
          falaAcerto: "Boa escolha: a ação está ligada ao objetivo da aula.",
        },
      ],
    },
    cena07_sequencia: {
      tipo: "sequenciaMistura",
      aurora: "Organize o processo de criação.",
      passos: [
        { id: "p1", texto: "Observar ou escutar o exemplo", emoji: "👀", ordem: 1 },
        { id: "p2", texto: "Perceber uma característica", emoji: "🔎", ordem: 2 },
        { id: "p3", texto: "Experimentar com segurança", emoji: "🧪", ordem: 3 },
        { id: "p4", texto: "Criar fazendo escolhas", emoji: "✨", ordem: 4 },
        { id: "p5", texto: "Apresentar e conversar", emoji: "💬", ordem: 5 },
      ],
      falaAcerto: "Você organizou um processo artístico completo.",
    },
    cena08_voceLe: {
      tipo: "diarioPintor",
      aurora: "Leia o diário e toque nas palavras destacadas.",
      titulo: `Diário: ${c.titulo}`,
      trechos: [
        { texto: "Primeiro eu parei para", palavraDestaque: "observar", corDestaque: "#0ea5e9" },
        { texto: "Depois tive coragem de", palavraDestaque: "experimentar", corDestaque: "#f97316" },
        { texto: "Fiz escolhas para", palavraDestaque: "criar", corDestaque: "#7c3aed" },
        { texto: "No fim consegui", palavraDestaque: "compartilhar", corDestaque: "#16a34a" },
      ],
    },
    cena09_minijogo: {
      tipo: "cenaTematica",
      variante: "criacao",
      aurora: `Desafio rápido de ${c.tema}!`,
      titulo: "Laboratório de criação",
      instrucao: c.pratica,
      itens: [
        { emoji: "1️⃣", rotulo: "Escolha", descricao: correta, cor: "#16a34a" },
        { emoji: "2️⃣", rotulo: "Experimente", descricao: c.exemplo, cor: "#0ea5e9" },
        { emoji: "3️⃣", rotulo: "Mude", descricao: "Altere uma escolha e compare.", cor: "#f97316" },
        { emoji: "4️⃣", rotulo: "Explique", descricao: "Conte o que mudou e por quê.", cor: "#7c3aed" },
      ],
      falaFinal: "Experimentar e revisar torna a criação mais consciente.",
    },
    cena10_revisao: {
      tipo: "cenaTematica",
      variante: "revisar",
      aurora: "Toque nos quatro pontos e conte o que aprendeu.",
      titulo: "Roda da revisão",
      itens: [
        { emoji: c.icone, rotulo: c.tema, descricao: c.conceito, cor: c.cor ?? "#7c3aed" },
        { emoji: "👀", rotulo: "Apreciação", descricao: "Atenção e respeito.", cor: "#0ea5e9" },
        { emoji: "🧪", rotulo: "Experimentação", descricao: c.pratica, cor: "#f97316" },
        { emoji: "✨", rotulo: "Autoria", descricao: "Escolhas próprias com intenção.", cor: "#16a34a" },
      ],
      falaFinal: "Você já consegue explicar o tema com um exemplo.",
    },
    cena11_avaliacao: {
      tipo: "avaliacaoFinal",
      aurora: "Última pergunta desta missão.",
      quiz: {
        pergunta: `Qual ação mostra que a criança aprendeu ${c.tema}?`,
        alternativas: [
          { texto: correta, correta: true },
          { texto: d1, correta: false },
          { texto: d2, correta: false },
          { texto: d3, correta: false },
        ],
        feedback: `${correta} demonstra compreensão e participação ativa.`,
      },
      missaoFamilia: `Em família, façam uma experiência simples sobre ${c.tema}: ${c.pratica} Registrem com desenho, foto ou áudio.`,
      recompensaTitulo: `Página ${c.numero} do Caderno de Arte restaurada!`,
      recompensaItem: `${c.icone} Selo ${c.tema}`,
    },
    recompensa: { xp: 60, moedas: 30, medalha: c.titulo },
  };

  return {
    slug: `unidade-${c.numero}-${c.slug}`,
    numero: c.numero,
    titulo: c.titulo,
    subtitulo: c.subtitulo,
    descricao: c.descricao,
    corTema: c.cor ?? "#7c3aed",
    aulas: [aula],
  };
}
