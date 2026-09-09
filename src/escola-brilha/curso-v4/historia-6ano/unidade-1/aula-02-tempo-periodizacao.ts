import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-tempo-e-periodizacao", titulo: "Tempo Histórico e Periodizações", icone: "⏳", bncc: ["EF06HI01"],
  tema: "formas de compreender e dividir o tempo histórico", conceito: "Cronologia ordena acontecimentos; periodização agrupa processos para estudá-los. Toda periodização é uma escolha humana e pode destacar certas experiências enquanto deixa outras em segundo plano.",
  explicacao: "Calendários e povos organizam o tempo de modos diferentes. Expressões como Antiguidade e Idade Média foram criadas em contextos europeus e não descrevem da mesma forma a história de todas as sociedades. Ao comparar períodos, observamos rupturas, como mudanças políticas, e permanências, como práticas que continuam transformadas.",
  exemplo: "A queda do Império Romano do Ocidente, em 476, é usada como marco didático, mas muitas formas de trabalho, crenças e redes comerciais continuaram depois dessa data.",
  vocabulario: ["cronologia", "periodização", "permanência"], etapas: ["Identificar o marco", "Localizar quem o criou", "Observar mudanças", "Reconhecer permanências e limites"],
  questoes: [
    { pergunta: "O que é uma periodização histórica?", opcoes: ["Uma divisão criada para estudar processos no tempo", "Uma regra natural igual para todos os povos", "Uma lista sem contexto", "Uma previsão do futuro"], correta: 0, explicacao: "Períodos são ferramentas de estudo construídas por pessoas." },
    { pergunta: "Uma data de passagem elimina imediatamente tudo o que existia antes?", opcoes: ["Não, mudanças e permanências podem coexistir", "Sim, toda prática desaparece", "Sim, mas só na agricultura", "Não existe passagem histórica"], correta: 0, explicacao: "Transformações históricas geralmente ocorrem em ritmos diferentes." },
    { pergunta: "Por que comparar calendários e periodizações?", opcoes: ["Para reconhecer diferentes modos de organizar o tempo", "Para declarar um povo superior", "Para apagar experiências", "Para decorar números sem analisar"], correta: 0, explicacao: "A comparação evidencia perspectivas e limites de cada sistema." },
  ], missao: "Escolha uma mudança histórica, registre um marco, duas transformações e uma permanência, explicando os limites dessa divisão.",
});
