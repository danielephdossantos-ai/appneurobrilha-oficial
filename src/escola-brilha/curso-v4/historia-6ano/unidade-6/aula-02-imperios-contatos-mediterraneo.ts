import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-imperios-contatos-e-circulacao", titulo: "Impérios, Contatos e Circulação", icone: "🗺️", bncc: ["EF06HI13", "EF06HI14", "EF06HI15"],
  tema: "integração, conflitos e circulação em impérios antigos", conceito: "Impérios governam territórios e populações diversas por combinações de administração, acordos, tributos, redes de circulação e conflitos. Contatos entre povos podem gerar trocas, adaptações, desigualdades e exclusões.",
  explicacao: "Roma, Axum, o Império Persa e formações imperiais nas Américas tiveram escalas e organizações diferentes. Estradas, portos e rotas marítimas fizeram circular pessoas, alimentos, metais, tecnologias, línguas e crenças. No Mediterrâneo, essas conexões ligaram África, Ásia e Europa; seus efeitos variaram conforme o poder de cada grupo.",
  exemplo: "Axum conectava o interior africano às rotas do mar Vermelho. Moedas, inscrições e mercadorias revelam contatos comerciais e culturais, mas também disputas por controle e tributos.",
  vocabulario: ["império", "integração", "circulação"], etapas: ["Localizar o território", "Identificar os grupos", "Mapear produtos e ideias", "Avaliar integração, conflito e exclusão"],
  questoes: [
    { pergunta: "O que caracteriza um império histórico?", opcoes: ["Governo de territórios e populações diversas", "Uma aldeia sem relações externas", "Um calendário", "Uma forma idêntica em todo lugar"], correta: 0, explicacao: "Impérios variam, mas articulam poder sobre diferentes territórios e povos." },
    { pergunta: "O que circulava pelas rotas mediterrâneas?", opcoes: ["Pessoas, produtos, técnicas e ideias", "Somente soldados", "Nada além de moedas", "Apenas textos modernos"], correta: 0, explicacao: "As redes conectavam economias e culturas de três continentes." },
    { pergunta: "Contatos entre populações produzem sempre o mesmo resultado?", opcoes: ["Não, podem envolver troca, adaptação, conflito ou exclusão", "Sim, apenas amizade", "Sim, apenas isolamento", "Não deixam evidências"], correta: 0, explicacao: "É necessário analisar agentes, interesses e relações de poder." },
  ], missao: "Compare dois impérios de continentes diferentes, mapeando uma forma de integração, um contato e uma tensão.",
});
