import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula05 = criarAulaConsolidacao({
  slug: "lp8-u3-a05-retomadas-referenciais",
  titulo: "Retomadas referenciais",
  icone: "🔎",
  bncc: ["EF08LP13", "EF89LP29"],
  tema: "retomadas referenciais",
  conceito: "pronomes e substituições lexicais que retomam informações",
  explicacao: "A coesão referencial evita repetições desnecessárias. Pronomes, sinônimos e expressões equivalentes podem retomar uma informação já apresentada, desde que o leitor consiga identificar o referente com clareza.",
  exemplo: "A turma criou um jornal. O projeto será apresentado na feira.",
  exemploAnalisado: "A expressão “o projeto” retoma “um jornal” e mantém a continuidade entre as frases.",
  pergunta: "Qual expressão retoma corretamente “a biblioteca” em: “A biblioteca recebeu novos livros. ___ ficará aberta à tarde.”?",
  opcoes: ["Ela", "Eles", "Nós"],
  resposta: 0,
  revisao: [
    "Retomar é recuperar uma informação já mencionada.",
    "Pronomes e expressões equivalentes ajudam a evitar repetições.",
    "O referente precisa permanecer claro para o leitor.",
  ],
  missao: "Escreva três frases sobre um projeto escolar e use duas formas diferentes para retomar o assunto.",
});
