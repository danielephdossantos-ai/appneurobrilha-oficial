import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-produtos-africanos-imperialismo", titulo: "Produtos Africanos e Exploração Imperialista", icone: "🌍", bncc: ["EF08HI24"],
  tema: "produtos africanos e impactos da exploração imperialista", conceito: "Borracha, óleo de palma, algodão, minerais e outros produtos africanos foram incorporados às economias europeias por sistemas coloniais que reorganizaram terras, trabalho e produção.",
  explicacao: "A demanda industrial incentivou monoculturas, mineração e infraestrutura voltada à exportação. Ferrovias podiam ligar áreas produtoras a portos sem atender necessidades locais. Os impactos variaram, incluindo deslocamentos, trabalho compulsório, perda de autonomia econômica e resistências comunitárias.",
  exemplo: "No Congo, a exploração da borracha sob domínio colonial alterou comunidades e subordinou a produção a metas externas; a análise deve ser informativa e baseada em fontes, sem detalhes gráficos.",
  vocabulario: ["matéria-prima", "economia de exportação", "trabalho compulsório"], etapas: ["Identificar o produto", "Localizar a região", "Mapear destino e uso", "Avaliar impactos e resistências"],
  questoes: [
    { pergunta: "Por que potências europeias buscavam produtos africanos?", opcoes: ["Para abastecer indústrias e mercados", "Para encerrar comércio", "Somente para museus", "Sem interesse econômico"], correta: 0, explicacao: "A demanda industrial orientou a exploração colonial." },
    { pergunta: "A infraestrutura colonial atendia sempre às comunidades locais?", opcoes: ["Não, frequentemente priorizava exportações", "Sim, sempre", "Não existiam ferrovias", "Servia apenas ao turismo"], correta: 0, explicacao: "Muitas redes ligavam áreas de extração a portos." },
    { pergunta: "Qual análise é necessária?", opcoes: ["Relacionar produto, trabalho, território e impacto", "Listar produtos sem contexto", "Ignorar comunidades", "Tratar toda África como igual"], correta: 0, explicacao: "A exploração teve contextos e efeitos regionais." },
  ], missao: "Rastreie um produto africano da área produtora ao mercado europeu e registre dois impactos locais.",
});
