import { criarAulaGeografia } from "../../geografia-3ano/criar-aula-geografia";
export const aula02 = criarAulaGeografia({
  slug: "aula-02-participacao-ambiental",
  titulo: "Participação e Soluções para a Cidade",
  icone: "🏛️",
  bncc: "EF05GE12",
  tema: "órgãos públicos e canais de participação",
  conceito: "Problemas de qualidade de vida envolvem órgãos públicos e participação da população.",
  explicacao:
    "Prefeitura, secretarias, conselhos e ouvidorias têm responsabilidades diferentes. Uma solicitação eficaz descreve o problema, local e evidências.",
  exemplo: "Lixo acumulado pode ser comunicado ao serviço municipal responsável pela limpeza.",
  vocabulario: ["órgão público", "ouvidoria", "conselho", "participação"],
  etapas: [
    "Identificar o problema",
    "Localizar o responsável",
    "Registrar evidências",
    "Acompanhar a solução",
  ],
  missao: "Monte uma solicitação cidadã sem expor dados pessoais.",
  questoes: [
    {
      pergunta: "Onde registrar uma solicitação?",
      correta: "No canal do órgão responsável",
      opcoes: [
        "No canal do órgão responsável",
        "Em qualquer jogo",
        "Sem informar o problema",
        "Apenas a amigos",
      ],
    },
    {
      pergunta: "O que fortalece o pedido?",
      correta: "Local e evidências claras",
      opcoes: ["Local e evidências claras", "Boatos", "Dados inventados", "Ofensas"],
    },
    {
      pergunta: "Qual é canal de participação?",
      correta: "Conselho ou ouvidoria",
      opcoes: ["Conselho ou ouvidoria", "Propaganda", "Jogo eletrônico", "Previsão do tempo"],
    },
  ],
});
