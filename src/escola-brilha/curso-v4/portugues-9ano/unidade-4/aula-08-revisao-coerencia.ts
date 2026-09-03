import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula08 = criarAulaConsolidacao({
  slug: "lp9-u4-a08-revisao-coerencia",
  titulo: "Revisão de coerência textual",
  icone: "🔍",
  bncc: ["EF09LP11", "EF89LP29"],
  tema: "revisão de coerência",
  conceito: "verificação da continuidade temática, da lógica e da ausência de contradições",
  explicacao: "Revisar a coerência é conferir se todas as partes contribuem para o tema, se as informações seguem uma ordem compreensível e se não há contradições. Um texto pode estar correto em cada frase isolada e, ainda assim, falhar no conjunto.",
  exemplo: "A biblioteca ampliou o horário. Com mais tempo de acesso, os estudantes puderam participar de novos projetos de leitura.",
  exemploAnalisado: "A segunda frase desenvolve uma consequência compatível com a informação inicial e mantém o mesmo tema.",
  pergunta: "Qual ação faz parte da revisão de coerência?",
  opcoes: ["Conferir se as ideias não se contradizem", "Trocar todas as palavras por sinônimos", "Retirar todos os conectivos"],
  resposta: 0,
  revisao: [
    "Coerência envolve o sentido global do texto.",
    "A progressão deve acrescentar informações relacionadas ao tema.",
    "Contradições e saltos de assunto precisam ser corrigidos.",
  ],
  missao: "Revise um parágrafo próprio e marque tema central, sequência das ideias e uma possível melhoria de coerência.",
});
