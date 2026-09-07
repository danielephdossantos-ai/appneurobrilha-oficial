import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-fontes-da-historia-local", titulo: "Fontes da História Local", icone: "🔎", bncc: ["EF03HI02"],
  tema: "fontes sobre a cidade e a região", conceito: "Fotografias, mapas, jornais, documentos, objetos, edifícios e relatos orais registram acontecimentos da história local, mas cada fonte mostra apenas parte dela.",
  explicacao: "O historiador identifica autoria, data, lugar e finalidade da fonte; compara versões e registra o que pode concluir. Memória oral é valiosa, mas também precisa ser cruzada com outras evidências.",
  exemplo: "Uma fotografia da praça mostra construções de uma época; uma entrevista explica usos do lugar; um mapa permite localizar mudanças. Juntas, as fontes produzem uma explicação mais sólida.",
  vocabulario: ["fonte histórica", "registro", "história local"], etapas: ["Localizar a fonte", "Identificar autoria e data", "Comparar evidências", "Registrar a conclusão"],
  questoes: [
    { pergunta: "Qual item pode ser fonte da história da cidade?", opcoes: ["Fotografia antiga identificada", "Palpite sem evidência", "Boato sem origem", "Resposta inventada"], correta: 0, explicacao: "A fotografia pode registrar lugares, pessoas e acontecimentos." },
    { pergunta: "Por que comparar fontes?", opcoes: ["Cada uma mostra parte da história", "Toda fonte diz exatamente o mesmo", "Datas não importam", "Uma opinião basta"], correta: 0, explicacao: "O cruzamento reduz erros e amplia perspectivas." },
    { pergunta: "O que registrar sobre uma fonte?", opcoes: ["Autoria, data, lugar e informação", "Somente a cor", "Só o tamanho", "Nada"], correta: 0, explicacao: "Esses dados ajudam a interpretar a evidência." },
  ], missao: "Crie uma ficha de três fontes locais e escreva um acontecimento sustentado pela comparação entre elas.",
});
