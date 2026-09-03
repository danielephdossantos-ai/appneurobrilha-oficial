import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-lazer-cidade-campo", titulo: "Lazer na Cidade e no Campo", icone: "⚽", bncc: ["EF03HI12"],
  tema: "lazer urbano e rural no presente e no passado", conceito: "Formas de lazer variam entre cidade e campo, grupos, gerações e épocas; algumas permanecem, outras mudam com tecnologias, espaços e costumes.",
  explicacao: "Brincadeiras de rua, festas, esportes, encontros, jogos digitais e atividades na natureza podem existir em diferentes comunidades. Fontes mostram acesso desigual e evitam a ideia de que todo mundo se divertia do mesmo jeito.",
  exemplo: "Uma entrevista pode registrar brincadeiras numa comunidade rural; fotografias mostram futebol numa praça urbana; hoje essas práticas podem conviver com jogos digitais.",
  vocabulario: ["lazer", "permanência", "mudança"], etapas: ["Escolher comunidades", "Consultar fontes", "Comparar passado e presente", "Identificar acesso e diversidade"],
  questoes: [
    { pergunta: "Qual atividade pode existir na cidade e no campo?", opcoes: ["Futebol e festas comunitárias", "Somente metrô", "Somente colheita", "Nenhuma brincadeira"], correta: 0, explicacao: "Muitas formas de lazer circulam entre comunidades." },
    { pergunta: "O lazer permanece sempre igual?", opcoes: ["Não; pode mudar e também conservar práticas", "Sim, sem alteração", "Só muda no campo", "Só existe no presente"], correta: 0, explicacao: "Tecnologias e costumes transformam práticas, enquanto outras continuam." },
    { pergunta: "Por que consultar diferentes fontes?", opcoes: ["Para reconhecer experiências diversas", "Para provar que todos eram iguais", "Para ignorar acesso", "Para escolher um único grupo"], correta: 0, explicacao: "Relatos, fotos e objetos mostram práticas de grupos distintos." },
  ], missao: "Compare duas formas de lazer urbanas e duas rurais no passado e no presente, indicando mudanças, permanências e acesso.",
});
