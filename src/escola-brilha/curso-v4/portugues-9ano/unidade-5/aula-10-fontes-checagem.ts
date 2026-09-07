import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula10 = criarAulaConsolidacao({
  slug: "lp9-u5-a10-fontes-checagem",
  titulo: "Fontes e checagem de informações",
  icone: "🔎",
  bncc: ["EF09LP01", "EF89LP02"],
  tema: "checagem jornalística",
  conceito: "verificação de autoria, data, evidências, contexto e confirmação independente",
  explicacao: "Antes de compartilhar uma informação, é preciso identificar quem publicou, quando, com quais evidências e em qual contexto. Comparar fontes independentes e localizar o documento ou dado original reduz o risco de aceitar conteúdo incompleto ou enganoso.",
  exemplo: "Uma postagem afirma que a biblioteca fechará, mas não informa autor nem documento. O calendário oficial mostra funcionamento normal.",
  exemploAnalisado: "A postagem não oferece origem verificável; o calendário oficial é uma evidência direta que contradiz a afirmação.",
  pergunta: "Qual é a primeira atitude diante de uma informação sem autoria e sem fonte?",
  opcoes: ["Não compartilhar e buscar a origem", "Repetir a informação como certeza", "Confiar apenas no número de curtidas"],
  resposta: 0,
  revisao: [
    "Autoria, data e contexto precisam ser identificados.",
    "Evidências diretas são mais fortes que afirmações sem origem.",
    "A confirmação por fontes independentes aumenta a confiabilidade.",
  ],
  missao: "Monte uma lista de cinco perguntas de checagem para usar antes de compartilhar uma notícia.",
});
