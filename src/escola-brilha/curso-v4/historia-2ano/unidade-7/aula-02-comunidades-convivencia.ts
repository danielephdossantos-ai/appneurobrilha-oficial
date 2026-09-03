import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-comunidades-e-convivencia", titulo: "Comunidades, Papéis e Convivência", icone: "🤝", bncc: ["EF02HI01", "EF02HI02"],
  tema: "espaços de convivência e papéis sociais", conceito: "Família, escola, vizinhança, grupos culturais e esportivos são comunidades com práticas, responsabilidades e formas próprias de aproximar ou separar pessoas.",
  explicacao: "Pessoas se reúnem para aprender, cuidar, celebrar, trabalhar e tomar decisões. Regras, acessibilidade, distância e atitudes podem facilitar ou dificultar a participação. Crianças têm papéis adequados à idade e direito à proteção.",
  exemplo: "A escola aproxima estudantes em atividades coletivas. Uma escada sem rampa pode afastar quem usa cadeira de rodas; uma adaptação torna o espaço mais acessível.",
  vocabulario: ["comunidade", "convivência", "responsabilidade"], etapas: ["Identificar o grupo", "Descrever a prática", "Reconhecer papéis", "Avaliar inclusão e participação"],
  questoes: [
    { pergunta: "O que pode reunir pessoas numa comunidade?", opcoes: ["Atividades e interesses compartilhados", "Somente morar na mesma casa", "Nunca conversar", "Eliminar diferenças"], correta: 0, explicacao: "Grupos se formam por convivência, objetivos e práticas comuns." },
    { pergunta: "Qual é um papel adequado ao estudante?", opcoes: ["Participar e cuidar dos materiais", "Resolver sozinho tarefas perigosas", "Impedir colegas", "Mandar em todos"], correta: 0, explicacao: "Responsabilidades devem respeitar idade, direitos e segurança." },
    { pergunta: "O que amplia a participação num espaço?", opcoes: ["Acessibilidade e respeito", "Barreiras", "Preconceito", "Exclusão"], correta: 0, explicacao: "Ambientes acessíveis aproximam pessoas." },
  ], missao: "Mapeie uma comunidade da qual você participa, descrevendo práticas, papéis e uma melhoria para incluir mais pessoas.",
});
