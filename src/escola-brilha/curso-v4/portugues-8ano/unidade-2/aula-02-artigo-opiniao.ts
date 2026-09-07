import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-artigo-opiniao",
  titulo: "Artigo de Opinião: Tese e Argumentos",
  icone: "🧠",
  bncc: ["EF89LP03", "EF89LP04"],
  tema: "Vozes do Debate",
  conceito: "tese, argumento e evidência no artigo de opinião",
  explicacao: "O artigo de opinião apresenta uma tese clara e busca defendê-la. Cada argumento precisa explicar um motivo e pode ganhar força com exemplos, dados verificáveis ou comparação de situações.",
  exemplo: "Tese: a escola deve ampliar os espaços de leitura. Argumento: ambientes acessíveis aumentam o contato diário dos estudantes com livros.",
  exemploAnalisado: "A primeira frase apresenta a posição; a segunda oferece uma razão que sustenta essa posição.",
  pergunta: "Qual trecho apresenta a tese?",
  opcoes: ["A escola deve ampliar os espaços de leitura.", "Ambientes acessíveis aumentam o contato com livros.", "Os livros ficam nas estantes."],
  resposta: 0,
  revisao: ["Tese é a posição defendida.", "Argumentos explicam por que a tese merece apoio.", "Evidências tornam o argumento mais confiável."],
  missao: "Escolha uma melhoria para sua escola e escreva uma tese acompanhada de dois argumentos.",
});
