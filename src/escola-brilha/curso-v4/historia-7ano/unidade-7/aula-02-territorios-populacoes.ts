import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-territorios-e-populacoes", titulo: "Territórios e Populações da América Colonial", icone: "🗺️", bncc: ["EF07HI11", "EF07HI12"],
  tema: "formação territorial e distribuição de populações na América colonial", conceito: "Territórios coloniais foram formados por disputas, ocupações, tratados, resistências e deslocamentos. Povos indígenas, africanos, europeus e grupos mestiços distribuíram-se de maneiras diferentes conforme cada região e período.",
  explicacao: "Mapas coloniais mostram pretensões de poder, não controle automático do território. Fronteiras mudaram com conflitos e negociações. Mineração, agricultura, cidades, missões e rotas comerciais influenciaram concentrações populacionais, enquanto comunidades indígenas e quilombolas defenderam espaços próprios.",
  exemplo: "A linha de Tordesilhas não permaneceu como limite real do território português: expedições, tratados e resistências participaram da formação posterior das fronteiras.",
  vocabulario: ["território", "fronteira", "população"], etapas: ["Ler mapa e data", "Identificar agentes", "Relacionar atividade e população", "Analisar conflitos e mudanças"],
  questoes: [
    { pergunta: "Um mapa colonial prova controle completo de toda área desenhada?", opcoes: ["Não, pode representar uma pretensão de poder", "Sim, sempre", "Somente se colorido", "Mapas não são fontes"], correta: 0, explicacao: "É preciso comparar o mapa com outras evidências." },
    { pergunta: "O que influenciou a distribuição das populações?", opcoes: ["Atividades econômicas, conflitos, migrações e resistências", "Somente o clima", "Uma decisão única", "Nenhuma relação histórica"], correta: 0, explicacao: "A ocupação variou entre regiões e grupos." },
    { pergunta: "Como as fronteiras coloniais foram formadas?", opcoes: ["Por processos históricos de disputa e negociação", "De forma natural e imóvel", "Sem participação de povos locais", "Todas em 1500"], correta: 0, explicacao: "Territórios resultam de relações sociais e políticas." },
  ], missao: "Leia dois mapas de épocas diferentes e explique uma mudança territorial, seus agentes e efeitos populacionais.",
});
