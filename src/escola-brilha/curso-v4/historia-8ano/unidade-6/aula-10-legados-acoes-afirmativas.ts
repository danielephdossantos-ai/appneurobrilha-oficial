import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula10 = criarAulaConsolidacao({
  slug: "aula-10-legados-e-acoes-afirmativas", titulo: "Legados da Escravidão e Ações Afirmativas", icone: "⚖️", bncc: ["EF08HI20"],
  tema: "desigualdades atuais e ações afirmativas", conceito: "A escravidão deixou desigualdades duradouras no acesso à terra, renda, educação e poder. Ações afirmativas são políticas que buscam enfrentar efeitos históricos e ampliar igualdade de oportunidades.",
  explicacao: "A abolição não foi acompanhada por ampla reparação ou inclusão. Para relacionar passado e presente, é preciso usar dados, leis e fontes históricas, sem afirmar que toda diferença atual tem uma causa única. Cotas e outras políticas afirmativas respondem a desigualdades comprovadas e devem ser avaliadas por objetivos e resultados.",
  exemplo: "Comparar dados educacionais de diferentes períodos ajuda a investigar barreiras históricas e o alcance de políticas de inclusão.",
  vocabulario: ["desigualdade estrutural", "ação afirmativa", "reparação"], etapas: ["Selecionar dados", "Relacionar passado e presente", "Identificar a política", "Avaliar objetivo e resultado"],
  questoes: [
    { pergunta: "Por que a abolição não criou igualdade imediata?", opcoes: ["Faltaram políticas amplas de inclusão e reparação", "Porque a escravidão continuou legal", "Porque direitos não importam", "Porque todos receberam terras"], correta: 0, explicacao: "Liberdade legal não eliminou barreiras acumuladas." },
    { pergunta: "Qual é a finalidade de uma ação afirmativa?", opcoes: ["Reduzir desigualdades históricas e ampliar oportunidades", "Criar privilégios hereditários", "Apagar dados", "Substituir todos os direitos"], correta: 0, explicacao: "São medidas voltadas à igualdade substantiva." },
    { pergunta: "Como estudar legados históricos com rigor?", opcoes: ["Cruzar fontes e dados de períodos diferentes", "Usar uma impressão pessoal", "Ignorar leis", "Atribuir tudo a uma causa única"], correta: 0, explicacao: "Relações históricas exigem evidências e contexto." },
  ], missao: "Analise um indicador social, sua trajetória histórica e uma ação afirmativa relacionada.",
});
