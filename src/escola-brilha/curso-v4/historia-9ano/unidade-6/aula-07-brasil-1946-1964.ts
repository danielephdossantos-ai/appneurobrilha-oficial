import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula07 = criarAulaConsolidacao({
  slug: "aula-07-brasil-1946-1964", titulo: "Brasil entre 1946 e 1964", icone: "🏗️", bncc: ["EF09HI17", "EF09HI18"],
  tema: "democracia, indústria e urbanização", conceito: "Entre 1946 e 1964, o Brasil viveu eleições, disputas políticas, industrialização e urbanização aceleradas, com crescimento e desigualdades regionais e sociais.",
  explicacao: "A Constituição de 1946 reabriu instituições democráticas. Projetos desenvolvimentistas ampliaram indústria e infraestrutura. Migrações internas transformaram cidades e culturas, enquanto periferias cresceram sem serviços suficientes.",
  exemplo: "A instalação de fábricas atraiu trabalhadores, mas moradia e transporte não avançaram no mesmo ritmo em muitos centros urbanos.",
  vocabulario: ["democracia", "desenvolvimentismo", "urbanização"], etapas: ["Construir cronologia", "Relacionar política e economia", "Comparar cidades", "Avaliar desigualdades"],
  questoes: [
    { pergunta: "O que marcou politicamente 1946?", opcoes: ["Retomada constitucional e eleitoral", "Início do Estado Novo", "AI-5", "Fim da República"], correta: 0, explicacao: "A Constituição abriu um período democrático." },
    { pergunta: "A urbanização eliminou desigualdades?", opcoes: ["Não, também ampliou periferias e carências", "Sim", "Impediu migrações", "Encerrou a indústria"], correta: 0, explicacao: "O crescimento urbano foi desigual." },
    { pergunta: "Brasília simbolizou qual projeto?", opcoes: ["Modernização e integração territorial", "Retorno colonial", "Desindustrialização", "Fim das rodovias"], correta: 0, explicacao: "A nova capital representou o desenvolvimentismo." },
  ], missao: "Compare duas fontes urbanas do período, identificando transformação cultural e desigualdade.",
});
