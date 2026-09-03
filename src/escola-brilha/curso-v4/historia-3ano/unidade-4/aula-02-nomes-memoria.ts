import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-nomes-e-memoria-da-cidade", titulo: "Nomes, Monumentos e Memória", icone: "🪧", bncc: ["EF03HI06"],
  tema: "registros de memória na cidade", conceito: "Nomes de ruas, monumentos e edifícios registram escolhas sobre quem ou o que será lembrado; essas escolhas podem incluir alguns grupos e silenciar outros.",
  explicacao: "Para analisar um nome, investigamos quem escolheu, quando, por quê e quais grupos aparecem ou faltam. A sociedade pode discutir placas explicativas, novos monumentos ou mudanças de nome com participação pública.",
  exemplo: "Se todas as ruas homenageiam apenas um grupo, moradores podem pesquisar outras histórias locais e propor formas mais plurais de memória.",
  vocabulario: ["registro de memória", "homenagem", "critério de escolha"], etapas: ["Ler o nome", "Pesquisar a pessoa ou evento", "Descobrir o critério", "Comparar presenças e ausências"],
  questoes: [
    { pergunta: "O nome de uma rua é também o quê?", opcoes: ["Escolha de memória pública", "Fenômeno natural", "Número sem significado", "Regra de matemática"], correta: 0, explicacao: "O nome pode homenagear pessoas, grupos, lugares ou acontecimentos." },
    { pergunta: "Qual pergunta ajuda a investigar a escolha?", opcoes: ["Quem decidiu e por quê?", "Qual é a cor favorita?", "Quanto pesa a placa?", "A rua sabe falar?"], correta: 0, explicacao: "Autoria e critério revelam como a memória foi selecionada." },
    { pergunta: "Por que observar ausências?", opcoes: ["Para perceber grupos pouco representados", "Para apagar todas as placas", "Para impedir pesquisa", "Para decorar sem contexto"], correta: 0, explicacao: "Memória pública pode ser ampliada e contextualizada." },
  ], missao: "Pesquise três nomes de ruas ou monumentos e avalie quais critérios e grupos aparecem na memória local.",
});
