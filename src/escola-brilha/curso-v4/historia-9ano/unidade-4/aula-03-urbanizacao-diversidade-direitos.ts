import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-urbanizacao-diversidade-direitos", titulo: "Urbanização, Diversidade e Direitos", icone: "🏙️", bncc: ["EF09HI05", "EF09HI07", "EF09HI08", "EF09HI09"],
  tema: "modernização urbana, pautas sociais e conquista de direitos", conceito: "A modernização transformou cidades e culturas, mas também produziu segregação. Movimentos negros, indígenas, operários, femininos e outros grupos transformaram pautas em conquistas políticas, sociais e civis.",
  explicacao: "Reformas urbanas deslocaram populações pobres e ampliaram periferias. Políticas indígenas alternaram tutela e assimilação, enquanto organizações defenderam território e autonomia. Os debates sobre diversidade mudaram ao longo do século XX graças à mobilização social.",
  exemplo: "Uma avenida pode representar melhoria de infraestrutura e, ao mesmo tempo, remoção de moradores; mapas, fotos e relatos revelam impactos distintos.",
  vocabulario: ["urbanização", "segregação", "movimento social"], etapas: ["Comparar fontes", "Identificar grupos afetados", "Reconhecer pautas", "Relacionar mobilização e direito"],
  questoes: [
    { pergunta: "Modernização urbana beneficia todos igualmente?", opcoes: ["Não, pode gerar melhorias e exclusões", "Sim, sempre", "Não altera territórios", "Elimina periferias"], correta: 0, explicacao: "Os impactos variam entre regiões e grupos." },
    { pergunta: "Como muitos direitos foram conquistados?", opcoes: ["Também pela atuação de movimentos sociais", "Sem mobilização", "Somente por decisões espontâneas", "Proibindo associações"], correta: 0, explicacao: "A organização coletiva pressiona instituições." },
    { pergunta: "O debate sobre diversidade permaneceu igual?", opcoes: ["Não, abordagens mudaram historicamente", "Sim, sem alterações", "Desapareceu", "Tratou apenas de imigração"], correta: 0, explicacao: "Novos sujeitos e direitos transformaram o debate." },
  ], missao: "Investigue uma transformação urbana e uma mobilização que buscou reconhecimento ou direitos.",
});
