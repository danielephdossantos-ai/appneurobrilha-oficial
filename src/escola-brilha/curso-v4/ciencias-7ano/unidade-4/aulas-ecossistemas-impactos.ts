import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-ecossistemas-brasileiros-impactos", titulo: "Ecossistemas Brasileiros e seus Impactos", icone: "🌿", bncc: ["EF07CI07", "EF07CI08"],
  tema: "ecossistemas brasileiros", conceito: "Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa possuem combinações próprias de água, solo, luz, temperatura, flora e fauna.",
  explicacao: "Alterar água, solo, vegetação ou clima afeta populações e relações ecológicas, podendo provocar migração, mudanças de hábito, redução populacional e risco de extinção.",
  exemplo: "No Cerrado, raízes profundas e cascas espessas relacionam-se ao período seco; desmatamento e incêndios intensificados retiram abrigo e alimento.",
  vocabulario: ["ecossistema", "fatores abióticos", "impacto ambiental"], etapas: ["Observar paisagem", "Comparar fatores físicos", "Relacionar fauna e flora", "Avaliar impactos"],
  questoes: [
    { pergunta: "Qual característica é marcante da Caatinga?", opcoes: ["Adaptação à escassez de água", "Chuvas abundantes o ano todo", "Solo permanentemente congelado", "Floresta sempre alagada"], correta: 0, explicacao: "A vegetação apresenta adaptações ao clima semiárido." },
    { pergunta: "Uma mudança no regime de água pode afetar:", opcoes: ["Populações e relações ecológicas", "Somente a cor do céu", "Nenhum ser vivo", "Apenas rochas profundas"], correta: 0, explicacao: "Água influencia habitat, alimento e reprodução." },
    { pergunta: "Como avaliar um impacto num ecossistema?", opcoes: ["Comparando componentes antes e depois", "Observando apenas uma fotografia", "Ignorando populações", "Usando apenas opiniões"], correta: 0, explicacao: "Dados comparativos revelam alterações e consequências." },
  ], missao: "Compare dois ecossistemas brasileiros e avalie um impacto ambiental em cada um.",
});
