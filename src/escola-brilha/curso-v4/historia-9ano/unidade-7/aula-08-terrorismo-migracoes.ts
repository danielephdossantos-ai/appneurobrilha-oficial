import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula08 = criarAulaConsolidacao({
  slug: "aula-08-terrorismo-migracoes", titulo: "Terrorismo, Migrações e Conflitos", icone: "🧭", bncc: ["EF09HI35"],
  tema: "terrorismo contemporâneo e migrações", conceito: "Terrorismo usa violência contra civis ou alvos simbólicos para produzir medo e alcançar objetivos políticos. Um grupo extremista não representa religiões, povos ou migrantes inteiros.",
  explicacao: "O fenômeno tem contextos históricos variados e deve ser estudado sem sensacionalismo. Conflitos e perseguições também forçam migrações. Fontes confiáveis ajudam a distinguir fatos, propaganda e generalizações preconceituosas.",
  exemplo: "Uma notícia responsável identifica autores e contexto sem culpar toda uma população pela ação de um grupo específico.",
  vocabulario: ["terrorismo", "migração forçada", "xenofobia"], etapas: ["Verificar a fonte", "Distinguir grupo e população", "Contextualizar", "Avaliar direitos"],
  questoes: [
    { pergunta: "Um grupo extremista representa todo um povo?", opcoes: ["Não, essa generalização gera preconceito", "Sim", "Somente em guerras", "Fontes não importam"], correta: 0, explicacao: "A responsabilidade pertence a agentes específicos." },
    { pergunta: "Por que pessoas migram durante conflitos?", opcoes: ["Para buscar proteção e segurança", "Apenas por turismo", "Sem motivo histórico", "Porque perdem automaticamente a nacionalidade"], correta: 0, explicacao: "Conflitos podem causar deslocamentos forçados." },
    { pergunta: "Como estudar o tema?", opcoes: ["Com contexto e fontes confiáveis", "Espalhando rumores", "Culpando migrantes", "Ignorando direitos"], correta: 0, explicacao: "Rigor combate desinformação." },
  ], missao: "Analise uma notícia separando fato, contexto, agente específico e generalização indevida.",
});
