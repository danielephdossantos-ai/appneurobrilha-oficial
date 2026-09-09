import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula04 = criarAulaConsolidacao({
  slug: "aula-04-descolonizacao", titulo: "Descolonização da África e da Ásia", icone: "🕊️", bncc: ["EF09HI31"],
  tema: "independências africanas e asiáticas", conceito: "A descolonização resultou de mobilizações locais, nacionalismos, enfraquecimento europeu e novas condições internacionais após a Segunda Guerra.",
  explicacao: "Índia, Gana, Argélia e outros territórios seguiram caminhos distintos, por negociações, mobilizações civis ou conflitos. Fronteiras herdadas e dependência econômica criaram desafios aos novos Estados.",
  exemplo: "A independência da Índia combinou mobilização política e negociação; Gana tornou-se referência para movimentos pan-africanos.",
  vocabulario: ["descolonização", "soberania", "independência"], etapas: ["Localizar o território", "Identificar agentes", "Examinar estratégias", "Avaliar desafios"],
  questoes: [
    { pergunta: "Quem protagonizou a descolonização?", opcoes: ["Populações e movimentos dos territórios", "Somente potências europeias", "Apenas empresas", "Nenhum grupo local"], correta: 0, explicacao: "Agentes locais foram centrais." },
    { pergunta: "Todos os processos foram iguais?", opcoes: ["Não, tiveram estratégias distintas", "Sim, todos pacíficos", "Sim, no mesmo ano", "Não criaram Estados"], correta: 0, explicacao: "Cada contexto produziu um caminho." },
    { pergunta: "Qual desafio permaneceu?", opcoes: ["Fronteiras herdadas e dependência econômica", "Ausência de territórios", "Fim da política", "Igualdade automática"], correta: 0, explicacao: "Independência política não resolveu tudo." },
  ], missao: "Compare duas independências por agentes, estratégia e desafio posterior.",
});
