import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-indicadores-de-saude", titulo: "Indicadores e Políticas de Saúde", icone: "📊", bncc: ["EF07CI09"],
  tema: "saúde coletiva", conceito: "Indicadores como mortalidade infantil, vacinação, saneamento e incidência de doenças ajudam a comparar a saúde de comunidades.",
  explicacao: "Um indicador precisa ser interpretado junto de população, período e contexto. Políticas de saneamento, atenção básica e vacinação podem alterar vários indicadores ao longo do tempo.",
  exemplo: "Maior cobertura de água tratada e esgoto tende a reduzir doenças transmitidas por água contaminada.",
  vocabulario: ["indicador", "saneamento", "política pública"], etapas: ["Escolher indicador", "Identificar período e população", "Comparar dados", "Relacionar políticas e resultados"],
  questoes: [
    { pergunta: "Qual é um indicador de saúde pública?", opcoes: ["Cobertura de saneamento", "Cor dos prédios", "Número de ruas", "Altura das árvores"], correta: 0, explicacao: "Saneamento influencia diretamente riscos de doenças." },
    { pergunta: "Para comparar duas taxas corretamente, precisamos considerar:", opcoes: ["População e período", "Somente o maior número", "A opinião do leitor", "A ordem das cidades"], correta: 0, explicacao: "Taxas dependem do tamanho da população e do intervalo analisado." },
    { pergunta: "Qual política pode reduzir doenças de veiculação hídrica?", opcoes: ["Água tratada e coleta de esgoto", "Menos coleta de resíduos", "Descarte em rios", "Interromper vigilância"], correta: 0, explicacao: "Saneamento reduz contato com agentes presentes em água contaminada." },
  ], missao: "Interprete indicadores de duas comunidades e proponha uma política baseada nos dados.",
});
