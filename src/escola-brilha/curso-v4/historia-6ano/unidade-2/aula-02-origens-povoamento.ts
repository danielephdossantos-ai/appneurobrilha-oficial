import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-origens-e-povoamento", titulo: "Origens Humanas e Povoamento das Américas", icone: "🧭", bncc: ["EF06HI03", "EF06HI04", "EF06HI06"],
  tema: "hipóteses científicas, narrativas de origem e rotas de povoamento", conceito: "A ciência investiga a origem e os deslocamentos humanos com fósseis, artefatos, genética e datações. Povos também preservam narrativas de origem que expressam identidades e visões de mundo; elas devem ser compreendidas em seu contexto cultural.",
  explicacao: "Evidências indicam que Homo sapiens surgiu na África e migrou por diferentes regiões. Para as Américas, pesquisadores discutem datas e trajetos, incluindo a Beríngia e rotas costeiras. Um mapa de rota é uma hipótese sustentada por conjuntos de evidências e pode mudar diante de novas descobertas.",
  exemplo: "Monte Verde, no Chile, pegadas antigas no Novo México e estudos genéticos ajudam a testar datas e possíveis caminhos. Nenhuma evidência isolada resolve toda a questão.",
  vocabulario: ["hipótese", "migração", "evidência"], etapas: ["Formular a pergunta", "Comparar tipos de evidência", "Traçar rotas possíveis", "Revisar a hipótese"],
  questoes: [
    { pergunta: "Qual prática fortalece uma hipótese sobre povoamento?", opcoes: ["Cruzar evidências arqueológicas, genéticas e ambientais", "Usar apenas uma opinião", "Ignorar novas descobertas", "Escolher a rota mais curta sem dados"], correta: 0, explicacao: "Hipóteses científicas são testadas com evidências independentes." },
    { pergunta: "Como estudar narrativas de origem de diferentes povos?", opcoes: ["Com respeito ao contexto cultural e sem confundi-las com testes científicos", "Como erros sem valor", "Como mapas exatos obrigatórios", "Apagando seus autores"], correta: 0, explicacao: "Narrativas comunicam memórias, valores e identidades." },
    { pergunta: "Por que existem mais de uma rota proposta para as Américas?", opcoes: ["Porque evidências permitem investigar trajetos e datas diferentes", "Porque não há pesquisa", "Porque continentes não têm geografia", "Porque toda rota é igualmente comprovada"], correta: 0, explicacao: "Beríngia e trajetos costeiros são examinados à luz de dados diversos." },
  ], missao: "Construa um mapa argumentado com duas rotas possíveis, uma evidência para cada uma e uma pergunta ainda investigada.",
});
