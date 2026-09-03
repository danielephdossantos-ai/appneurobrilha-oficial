import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-comercio-africa-e-asia", titulo: "Redes Comerciais da África e da Ásia", icone: "🧭", bncc: ["EF07HI14"],
  tema: "dinâmicas comerciais africanas e asiáticas antes da hegemonia europeia", conceito: "Sociedades africanas e asiáticas mantinham redes comerciais extensas antes da expansão marítima europeia, conectando oceanos, desertos, cidades e áreas produtoras.",
  explicacao: "Rotas transaarianas ligavam regiões africanas; o oceano Índico conectava portos da África oriental, Arábia, Índia, Sudeste Asiático e China. Mercadores transportavam tecidos, metais, cerâmicas, especiarias e conhecimentos. Europeus entraram em redes já existentes e depois buscaram controlá-las.",
  exemplo: "Cidades suaílis participavam do comércio do Índico, usando ventos de monção para organizar viagens sazonais entre portos.",
  vocabulario: ["rota comercial", "oceano Índico", "monção"], etapas: ["Localizar a rota", "Identificar agentes", "Mapear produtos e saberes", "Avaliar mudanças no controle"],
  questoes: [
    { pergunta: "As redes afro-asiáticas começaram com os europeus?", opcoes: ["Não, já eram antigas e complexas", "Sim, todas", "Somente após 1800", "Não existia comércio marítimo"], correta: 0, explicacao: "A expansão europeia entrou em circuitos existentes." },
    { pergunta: "O que conectava o comércio do Índico?", opcoes: ["Portos da África e da Ásia", "Somente Portugal e Espanha", "Apenas cidades sem litoral", "Um único produto"], correta: 0, explicacao: "A rede envolvia muitos povos e mercadorias." },
    { pergunta: "Por que os ventos de monção eram importantes?", opcoes: ["Ajudavam a planejar viagens sazonais", "Impediam toda navegação", "Criavam moedas", "Definiam fronteiras terrestres"], correta: 0, explicacao: "Navegadores conheciam os ritmos dos ventos." },
  ], missao: "Desenhe uma rota afro-asiática com dois portos, dois produtos, agentes envolvidos e um conhecimento necessário à viagem.",
});
