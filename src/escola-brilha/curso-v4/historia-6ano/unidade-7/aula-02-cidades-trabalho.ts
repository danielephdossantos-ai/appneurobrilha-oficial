import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-cidades-e-trabalho", titulo: "Cidades e Formas de Trabalho", icone: "🏘️", bncc: ["EF06HI16", "EF06HI17"],
  tema: "abastecimento, vida urbana e relações de trabalho antigas e medievais", conceito: "Cidades antigas e medievais dependiam de campos, oficinas, mercados, tributos e rotas para obter água e alimentos. Suas relações de trabalho incluíam trabalho livre, escravidão e servidão, com condições e direitos diferentes.",
  explicacao: "Em cidades romanas, aquedutos, portos e mercados sustentavam parte do abastecimento. Em muitas cidades medievais, feiras e corporações de ofício organizavam produção e comércio. Escravização tratava pessoas como propriedade em diversos sistemas antigos; servidão ligava trabalhadores à terra e a obrigações senhoriais; trabalho livre envolvia graus variados de autonomia. Esses conceitos não são sinônimos.",
  exemplo: "Um artesão urbano podia produzir para o mercado; uma pessoa escravizada em Roma estava submetida juridicamente a um proprietário; um servo medieval devia obrigações ao senhor da terra. As experiências variavam no tempo e no espaço.",
  vocabulario: ["abastecimento", "escravidão", "servidão"], etapas: ["Identificar tempo e lugar", "Examinar o vínculo de trabalho", "Comparar direitos e obrigações", "Relacionar trabalho e cidade"],
  questoes: [
    { pergunta: "Do que dependia o abastecimento urbano?", opcoes: ["De redes de água, produção, transporte e mercados", "Somente de palácios", "De aplicativos", "De uma única plantação em toda época"], correta: 0, explicacao: "Cidades articulavam campo, infraestrutura e comércio." },
    { pergunta: "Escravidão e servidão são conceitos idênticos?", opcoes: ["Não, possuíam vínculos jurídicos e obrigações diferentes", "Sim, em qualquer lugar", "Sim, porque eram trabalhos livres", "Não existiram historicamente"], correta: 0, explicacao: "A comparação exige observar condição jurídica, autonomia e obrigações." },
    { pergunta: "Qual fonte ajuda a estudar trabalho urbano?", opcoes: ["Registros, ferramentas, oficinas e construções", "Somente lendas sem contexto", "Apenas mapas atuais", "Nenhuma evidência"], correta: 0, explicacao: "Fontes diversas revelam produção e cotidiano." },
  ], missao: "Monte um quadro comparando trabalho livre, escravidão e servidão por vínculo, obrigações e contexto histórico.",
});
