import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-rebelioes-america-portuguesa", titulo: "Rebeliões na América Portuguesa", icone: "📣", bncc: ["EF08HI05"],
  tema: "movimentos coloniais e conexões atlânticas", conceito: "Rebeliões na América portuguesa tiveram motivos locais e conexões com mudanças atlânticas, como impostos, crise econômica, Iluminismo, independências e Revolução Francesa.",
  explicacao: "A Inconfidência Mineira reuniu sobretudo setores da elite contra tributos; a Conjuração Baiana teve participação social mais ampla e propostas de igualdade e abolição. Comparar participantes e projetos evita tratar movimentos diferentes como iguais.",
  exemplo: "Em 1798, panfletos da Conjuração Baiana defenderam mudanças políticas e sociais em Salvador, articulando problemas locais a ideias que circulavam pelo Atlântico.",
  vocabulario: ["rebelião", "tributação", "circulação de ideias"], etapas: ["Localizar o movimento", "Identificar participantes", "Relacionar causas locais e externas", "Comparar projetos"],
  questoes: [
    { pergunta: "As rebeliões coloniais possuíam projetos idênticos?", opcoes: ["Não, variavam em participantes e objetivos", "Sim, todas", "Não tinham causas locais", "Foram organizadas pela Coroa"], correta: 0, explicacao: "Cada movimento deve ser analisado em seu contexto." },
    { pergunta: "Qual movimento teve participação social mais ampla e proposta abolicionista?", opcoes: ["Conjuração Baiana", "Inconfidência Mineira", "Revolução Gloriosa", "Restauração inglesa"], correta: 0, explicacao: "A Conjuração Baiana envolveu setores populares e propostas sociais." },
    { pergunta: "Como ideias externas participavam desses movimentos?", opcoes: ["Circulavam e eram reinterpretadas diante de problemas locais", "Eram copiadas sem mudança", "Não circulavam", "Apagavam impostos automaticamente"], correta: 0, explicacao: "Ideias ganham sentidos próprios em cada contexto." },
  ], missao: "Compare duas rebeliões por causas, participantes, propostas e conexão internacional.",
});
