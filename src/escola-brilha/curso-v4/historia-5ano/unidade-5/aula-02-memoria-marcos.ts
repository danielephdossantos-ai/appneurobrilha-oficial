import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-marcos-e-memoria-historica", titulo: "Marcos, Memória e Representação", icone: "🗿", bncc: ["EF05HI07"],
  tema: "produção e difusão de marcos de memória", conceito: "Datas, monumentos, museus, nomes e livros selecionam o que uma sociedade lembra; essas escolhas podem valorizar alguns grupos e deixar outros ausentes.",
  explicacao: "Um marco histórico não é neutro. Investigamos quem o criou, em qual época, com qual finalidade e como foi divulgado. Novas pesquisas podem contextualizar ou ampliar a representação pública.",
  exemplo: "Um monumento que homenageia apenas governantes pode ser acompanhado de placas ou exposições sobre trabalhadores, mulheres, povos indígenas e populações negras envolvidos na mesma história.",
  vocabulario: ["marco histórico", "memória", "representação"], etapas: ["Identificar o marco", "Pesquisar autoria e época", "Observar grupos representados", "Propor contextualização"],
  questoes: [
    { pergunta: "Um monumento é uma escolha de quê?", opcoes: ["Memória pública", "Fenômeno natural", "Acaso sem autoria", "Somente decoração"], correta: 0, explicacao: "Ele seleciona pessoas ou acontecimentos para lembrar." },
    { pergunta: "Por que observar ausências?", opcoes: ["Para perceber grupos pouco representados", "Para apagar toda memória", "Para impedir pesquisa", "Para afirmar que todos aparecem"], correta: 0, explicacao: "Silêncios também revelam relações de poder." },
    { pergunta: "Como ampliar um marco?", opcoes: ["Adicionar contexto e outras perspectivas", "Proibir perguntas", "Inventar fatos", "Ocultar autoria"], correta: 0, explicacao: "Contextualização permite análise mais plural." },
  ], missao: "Analise um marco histórico por autoria, época, grupos presentes e ausentes, propondo uma forma de ampliar sua contextualização.",
});
