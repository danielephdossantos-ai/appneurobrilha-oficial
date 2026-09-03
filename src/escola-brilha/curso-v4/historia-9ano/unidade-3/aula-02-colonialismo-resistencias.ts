import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-colonialismo-resistencias", titulo: "Colonialismo na África e na Ásia", icone: "🌍", bncc: ["EF09HI14"],
  tema: "domínio colonial e resistências locais", conceito: "O colonialismo reorganizou territórios, governos e economias conforme interesses externos. Populações africanas e asiáticas resistiram por meios culturais, políticos, diplomáticos e militares.",
  explicacao: "Potências coloniais exploraram recursos, impuseram fronteiras e usaram diferenças locais para controlar populações. As respostas incluíram negociação, preservação cultural, revoltas e movimentos nacionalistas; cada região teve trajetória própria.",
  exemplo: "A vitória etíope em Adwa preservou a independência naquele período; em outras regiões, jornais e associações organizaram resistências duradouras.",
  vocabulario: ["colonialismo", "resistência", "nacionalismo"], etapas: ["Identificar a potência", "Examinar o domínio", "Localizar agentes locais", "Comparar resistências"],
  questoes: [
    { pergunta: "O colonialismo envolvia o quê?", opcoes: ["Poder político e exploração econômica", "Somente intercâmbio cultural", "Relações sempre voluntárias", "Fim das fronteiras"], correta: 0, explicacao: "Dominação e exploração eram dimensões centrais." },
    { pergunta: "Como populações locais resistiram?", opcoes: ["Por estratégias diversas", "De uma única forma", "Sem organização", "Somente após 2000"], correta: 0, explicacao: "As respostas dependeram de cada contexto." },
    { pergunta: "Por que evitar generalizações?", opcoes: ["Porque África e Ásia têm sociedades diversas", "Porque não existem fontes", "Porque todas as colônias eram iguais", "Porque territórios não mudaram"], correta: 0, explicacao: "Tempo e lugar importam na análise." },
  ], missao: "Compare dois territórios por forma de domínio e estratégia de resistência.",
});
