import type { AulaGeoV1 } from "../types";

type Questao = { pergunta: string; correta: string; opcoes: [string, string, string, string] };
type Config = {
  slug: string;
  titulo: string;
  icone: string;
  bncc: string;
  tema: string;
  conceito: string;
  explicacao: string;
  exemplo: string;
  vocabulario: [string, string, string, string];
  etapas: [string, string, string, string];
  questoes: [Questao, Questao, Questao];
  missao: string;
};

const cores = [
  "from-emerald-500 to-teal-700",
  "from-sky-500 to-indigo-700",
  "from-amber-500 to-orange-700",
  "from-rose-500 to-pink-700",
];
const emojis = ["🔎", "🗺️", "🌱", "💡"];

export function criarAulaGeografia(c: Config): AulaGeoV1 {
  const cards = (q: Questao) =>
    q.opcoes.map((titulo, i) => ({ id: `o${i}`, emoji: emojis[i], titulo, cor: cores[i] }));
  const perguntas = c.questoes.map((q, qi) => ({
    id: `q${qi}`,
    pergunta: q.pergunta,
    cards: cards(q),
    correta: `o${q.opcoes.indexOf(q.correta)}`,
    feedbackAcerto: `Isso! ${q.correta}.`,
    feedbackErro: `Observe as pistas e tente novamente. A resposta se relaciona a ${c.tema}.`,
  }));
  return {
    slug: c.slug,
    titulo: c.titulo,
    iconeTrilha: c.icone,
    bncc: [c.bncc],
    duracaoMin: 25,
    cena01_motivacao: {
      tipo: "votoExplorador",
      aurora: `Hoje vamos investigar ${c.tema}.`,
      pergunta: `O que precisamos observar primeiro?`,
      opcoes: c.etapas.map((titulo, i) => ({
        id: `e${i}`,
        titulo,
        emoji: emojis[i],
        cor: cores[i],
      })),
      respostaCerta: "e0",
      feedbackAcerto: `Boa escolha: ${c.etapas[0]}.`,
      feedbackErro: `Comece por: ${c.etapas[0]}.`,
      falaFinal: `Vamos observar, comparar e explicar com evidências.`,
    },
    cena02_previsao: {
      tipo: "votoExplorador",
      aurora: c.conceito,
      pergunta: c.questoes[0].pergunta,
      opcoes: cards(c.questoes[0]),
      respostaCerta: `o${c.questoes[0].opcoes.indexOf(c.questoes[0].correta)}`,
      feedbackAcerto: `Correto: ${c.questoes[0].correta}.`,
      feedbackErro: c.explicacao,
      falaFinal: c.exemplo,
    },
    cena03_vocabulario: {
      tipo: "cadernosCampo",
      aurora: `Abra os quatro conceitos da investigação.`,
      instrucao: "Toque em cada caderno.",
      cadernos: c.vocabulario.map((termo, i) => ({
        id: `v${i}`,
        capa: termo,
        emoji: emojis[i],
        cor: cores[i],
        conteudo: `${termo} é uma palavra importante para compreender ${c.tema}.`,
        exemplo: i === 0 ? c.exemplo : c.explicacao,
      })),
      falaFinal: `Agora use essas palavras para explicar o tema.`,
    },
    cena04_leituraGuiada: {
      tipo: "voceLeSozinho",
      aurora: "Leia os trechos com calma.",
      tituloLivro: c.titulo,
      paragrafos: [
        { id: "p1", texto: c.conceito, chaves: [c.vocabulario[0]] },
        { id: "p2", texto: c.explicacao, chaves: [c.vocabulario[1], c.vocabulario[2]] },
        { id: "p3", texto: `Exemplo: ${c.exemplo}`, chaves: [c.vocabulario[3]] },
      ],
      falaFinal: "Você leu conceito, explicação e exemplo.",
    },
    cena05_compreensao: {
      tipo: "quizRadar",
      aurora: "Mostre o que compreendeu.",
      instrucao: "Resolva as três questões.",
      perguntas,
      falaFinal: "Explique por que escolheu cada resposta.",
    },
    cena06_personagensLugar: {
      tipo: "cadernosCampo",
      aurora: "Organize as evidências.",
      instrucao: "Abra as quatro etapas.",
      cadernos: c.etapas.map((etapa, i) => ({
        id: `et${i}`,
        capa: etapa,
        emoji: emojis[i],
        cor: cores[i],
        conteudo: i === 0 ? c.conceito : i === 1 ? c.explicacao : i === 2 ? c.exemplo : c.missao,
      })),
      falaFinal: "Evidência é aquilo que ajuda a sustentar uma explicação.",
    },
    cena07_sequencia: {
      tipo: "linhaEstrada",
      aurora: "Coloque o raciocínio em ordem.",
      instrucao: "Toque nas etapas na sequência.",
      pergunta: `Como investigar ${c.tema}?`,
      paradas: c.etapas.map((rotulo, i) => ({
        id: `s${i}`,
        emoji: emojis[i],
        rotulo,
        descricao: [c.conceito, c.explicacao, c.exemplo, c.missao][i],
      })),
      ordemCerta: ["s0", "s1", "s2", "s3"],
      feedbackAcerto: "Sequência completa!",
      feedbackErro: "Retome a primeira etapa.",
      falaFinal: "Um bom raciocínio observa, compara, explica e propõe.",
    },
    cena08_voceLe: {
      tipo: "voceLeSozinho",
      aurora: "Agora a leitura é sua.",
      tituloLivro: "Caderno do geógrafo",
      paragrafos: [
        { id: "l1", texto: c.conceito, chaves: [c.vocabulario[0]] },
        { id: "l2", texto: c.explicacao, chaves: [c.vocabulario[1]] },
        { id: "l3", texto: c.missao, chaves: [c.vocabulario[2], c.vocabulario[3]] },
      ],
      falaFinal: "Use o que leu na atividade final.",
    },
    cena09_minijogo: {
      tipo: "quizRadar",
      aurora: "Desafio rápido!",
      instrucao: "Escolha uma entre quatro opções.",
      perguntas,
      falaFinal: "Você aplicou a habilidade em situações diferentes.",
    },
    cena10_revisao: {
      tipo: "cadernosCampo",
      aurora: "Revisão em quatro pontos.",
      instrucao: "Abra todos os cartões.",
      cadernos: c.vocabulario.map((termo, i) => ({
        id: `r${i}`,
        capa: termo,
        emoji: emojis[i],
        cor: cores[i],
        conteudo: [c.conceito, c.explicacao, c.exemplo, c.missao][i],
      })),
      falaFinal: "Revisão concluída.",
    },
    cena11_avaliacao: {
      tipo: "seloAtlas",
      aurora: "Avaliação final.",
      instrucao: "Resolva as três perguntas.",
      perguntas: c.questoes.map((q, qi) => ({
        id: `a${qi}`,
        pergunta: q.pergunta,
        opcoes: q.opcoes.map((texto, i) => ({
          id: `a${qi}o${i}`,
          texto,
          correta: texto === q.correta,
        })),
        feedbackAcerto: `Correto: ${q.correta}.`,
        feedbackErro: c.explicacao,
      })),
      selo: { nome: c.titulo, subtitulo: c.bncc, emoji: "🏅", cor: "from-amber-300 to-orange-500" },
      falaFinal: `Missão em família: ${c.missao}`,
    },
    recompensa: { xp: 100, moedas: 25, medalha: c.titulo },
  };
}
