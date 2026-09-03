import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-mundos-antigo-e-medieval", titulo: "Mundos Antigo e Medieval: Conceitos e Transições", icone: "🏛️", bncc: ["EF06HI07", "EF06HI08", "EF06HI09"],
  tema: "limites dos conceitos de mundo antigo e Antiguidade Clássica", conceito: "Mundo Antigo e Antiguidade Clássica são recortes criados para estudar certas sociedades. Eles ajudam a organizar conhecimentos, mas não abrangem todos os povos e não devem transformar Grécia e Roma em medida única da história.",
  explicacao: "A passagem da Antiguidade para a Idade Média no Ocidente envolveu fragmentação do poder romano, formação de reinos e novas relações políticas. No mesmo período, sociedades africanas, asiáticas e americanas seguiam trajetórias próprias. Ideias gregas e romanas tiveram usos posteriores, mas seus legados foram selecionados, reinterpretados e combinados a outras influências.",
  exemplo: "O ano 476 marca a deposição de um imperador no Ocidente, não o fim instantâneo de cidades, comércio ou cultura romana; o Império Romano do Oriente continuou por séculos.",
  vocabulario: ["Antiguidade Clássica", "fragmentação", "eurocentrismo"], etapas: ["Definir o conceito", "Localizar sua origem", "Comparar sociedades incluídas e excluídas", "Analisar mudanças e continuidades"],
  questoes: [
    { pergunta: "Qual é um limite da expressão mundo antigo?", opcoes: ["Pode privilegiar uma periodização europeia e excluir outras trajetórias", "Inclui igualmente toda sociedade", "É uma divisão natural", "Só trata do futuro"], correta: 0, explicacao: "O conceito precisa ser usado com consciência de seu alcance." },
    { pergunta: "O que ocorreu no Ocidente após o enfraquecimento romano?", opcoes: ["Fragmentação política e formação de reinos", "Desaparecimento imediato de toda cultura", "Unificação mundial", "Fim de todas as cidades"], correta: 0, explicacao: "Mudanças políticas conviveram com muitas continuidades." },
    { pergunta: "Como analisar legados gregos e romanos?", opcoes: ["Reconhecendo contribuições, limites e reinterpretações", "Afirmando que criaram tudo", "Ignorando outras sociedades", "Copiando instituições sem contexto"], correta: 0, explicacao: "Legados históricos são apropriados e transformados." },
  ], missao: "Compare um aspecto político antes e depois de 476 e indique uma continuidade, uma mudança e o limite desse marco.",
});
