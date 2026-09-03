import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-processos-reprodutivos", titulo: "Processos Reprodutivos em Plantas e Animais", icone: "🌱", bncc: ["EF08CI07"],
  tema: "reprodução e adaptação", conceito: "A reprodução pode ser assexuada, com um organismo e pouca variabilidade, ou sexuada, com combinação de material genético e maior variabilidade.",
  explicacao: "Plantas podem reproduzir-se por sementes, esporos ou partes vegetativas; animais apresentam fecundação interna ou externa e desenvolvimento dentro ou fora do corpo. Cada estratégia relaciona-se ao ambiente e à evolução.",
  exemplo: "Morangueiros formam estolhos de modo assexuado; plantas com flores produzem sementes após reprodução sexuada; muitos peixes liberam gametas na água.",
  vocabulario: ["reprodução sexuada", "reprodução assexuada", "variabilidade"], etapas: ["Identificar organismo", "Observar o processo", "Comparar variabilidade", "Relacionar ao ambiente"],
  questoes: [
    { pergunta: "Qual processo geralmente aumenta a variabilidade genética?", opcoes: ["Reprodução sexuada", "Divisão assexuada", "Brotamento idêntico", "Clonagem natural"], correta: 0, explicacao: "A combinação de material genético amplia a variabilidade." },
    { pergunta: "O estolho do morangueiro é exemplo de:", opcoes: ["Reprodução assexuada", "Fecundação externa", "Migração", "Metamorfose"], correta: 0, explicacao: "O novo indivíduo surge de uma parte vegetativa." },
    { pergunta: "Por que diferentes estratégias reprodutivas persistem?", opcoes: ["Têm vantagens em ambientes diferentes", "Uma estratégia serve igualmente para tudo", "Não afetam sobrevivência", "São sempre aleatórias"], correta: 0, explicacao: "Ambiente, dispersão e sobrevivência influenciam as estratégias." },
  ], missao: "Compare reprodução em duas plantas e dois animais, relacionando mecanismo e adaptação.",
});
