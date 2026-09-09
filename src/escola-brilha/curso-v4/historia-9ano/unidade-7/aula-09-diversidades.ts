import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula09 = criarAulaConsolidacao({
  slug: "aula-09-diversidades", titulo: "Diversidades e Identidades no Século XXI", icone: "🤝", bncc: ["EF09HI36"],
  tema: "identidades e combate ao preconceito", conceito: "Identidades são construções históricas ligadas a pertencimentos culturais, territoriais, étnicos, religiosos e geracionais. Pessoas podem integrar vários grupos sem caber em estereótipos.",
  explicacao: "Tecnologias ampliaram encontros e disputas por representação. Povos indígenas, comunidades tradicionais e movimentos sociais atuam em espaços locais e internacionais. Estudar diversidade exige ouvir sujeitos e combater discriminação.",
  exemplo: "Uma comunidade indígena pode usar redes digitais para preservar sua língua e defender direitos, combinando tradição, inovação e autonomia.",
  vocabulario: ["identidade", "diversidade", "representação"], etapas: ["Identificar o sujeito", "Ouvir sua autodefinição", "Contextualizar a pauta", "Evitar estereótipos"],
  questoes: [
    { pergunta: "Identidades são fixas e iguais para todos?", opcoes: ["Não, são diversas e históricas", "Sim", "Dependem só do governo", "Não envolvem pertencimento"], correta: 0, explicacao: "Contextos produzem identidades múltiplas." },
    { pergunta: "Qual atitude combate preconceito?", opcoes: ["Escutar os grupos e questionar estereótipos", "Generalizar", "Silenciar", "Espalhar rótulos"], correta: 0, explicacao: "Representação responsável reconhece autonomia." },
    { pergunta: "Tecnologias podem apoiar povos indígenas?", opcoes: ["Sim, na comunicação, língua e defesa de direitos", "Não, necessariamente apagam culturas", "Somente no comércio", "Sem participação própria"], correta: 0, explicacao: "Tecnologia e tradição podem coexistir." },
  ], missao: "Analise uma representação identificando voz, contexto, estereótipo evitado e direito defendido.",
});
