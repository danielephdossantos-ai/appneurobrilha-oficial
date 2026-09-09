import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula07 = criarAulaConsolidacao({
  slug: "lp9-u4-a07-relacoes-logicas",
  titulo: "Relações lógicas entre ideias",
  icone: "⚙️",
  bncc: ["EF09LP11", "EF09LP12"],
  tema: "relações lógico-discursivas",
  conceito: "conexões de causa, consequência, condição, oposição e conclusão",
  explicacao: "A coerência depende de relações lógicas reconhecíveis. Conectivos sinalizam como uma ideia se liga à outra, mas precisam corresponder ao sentido real do argumento. Trocar um conectivo pode alterar ou contradizer a mensagem.",
  exemplo: "O grupo conferiu as fontes; portanto, apresentou informações mais confiáveis.",
  exemploAnalisado: "“Portanto” indica que a confiabilidade das informações é apresentada como consequência da conferência das fontes.",
  pergunta: "Qual conectivo introduz uma condição?",
  opcoes: ["Se", "Embora", "Portanto"],
  resposta: 0,
  revisao: [
    "Conectivos sinalizam relações lógicas.",
    "A escolha deve corresponder ao sentido pretendido.",
    "Causa, condição e conclusão não são relações equivalentes.",
  ],
  missao: "Crie três pares de ideias e conecte-os por relações de condição, oposição e conclusão.",
});
