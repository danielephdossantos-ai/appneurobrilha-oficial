import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-saude-respeito-e-prevencao", titulo: "Saúde, Respeito e Prevenção", icone: "🛡️", bncc: ["EF08CI09", "EF08CI10", "EF08CI11"],
  tema: "saúde sexual e responsabilidade", conceito: "Informação confiável, consentimento, respeito, responsabilidade compartilhada e acompanhamento de saúde protegem direitos e bem-estar.",
  explicacao: "Métodos contraceptivos têm modos de ação e eficácias diferentes; preservativos também reduzem o risco de IST. Algumas IST podem não apresentar sinais, por isso prevenção, testagem e orientação profissional são importantes. Sexualidade envolve dimensões biológicas, afetivas, sociais, culturais e éticas.",
  exemplo: "Decisões responsáveis exigem diálogo sem pressão, respeito aos limites e busca de informações em serviços de saúde, nunca em boatos.",
  vocabulario: ["prevenção", "IST", "consentimento"], etapas: ["Buscar fonte confiável", "Comparar proteção e eficácia", "Compartilhar responsabilidade", "Respeitar limites e procurar saúde"],
  questoes: [
    { pergunta: "Qual método também ajuda a prevenir IST?", opcoes: ["Preservativo", "Calendário isoladamente", "Antibiótico sem indicação", "Nenhum cuidado"], correta: 0, explicacao: "Preservativos atuam como barreira e ajudam a prevenir IST e gravidez." },
    { pergunta: "Uma pessoa sem sintomas pode ter uma IST?", opcoes: ["Sim", "Nunca", "Somente no inverno", "Apenas se houver dor"], correta: 0, explicacao: "Algumas IST podem ser assintomáticas; prevenção e testagem orientada são importantes." },
    { pergunta: "O que faz parte da dimensão ética da sexualidade?", opcoes: ["Consentimento e respeito", "Pressão e chantagem", "Preconceito", "Ignorar limites"], correta: 0, explicacao: "Toda relação deve respeitar autonomia, limites e dignidade." },
  ], missao: "Compare métodos de prevenção com fontes de saúde e construa orientações baseadas em respeito e responsabilidade compartilhada.",
});
