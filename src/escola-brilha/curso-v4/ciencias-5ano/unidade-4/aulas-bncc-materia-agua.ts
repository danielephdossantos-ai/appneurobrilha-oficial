import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-propriedades-dos-materiais", titulo: "Propriedades dos Materiais", icone: "🧲", bncc: ["EF05CI01"],
  tema: "propriedades físicas", conceito: "Materiais podem ser comparados por densidade, solubilidade, magnetismo, condução de calor e eletricidade e resistência mecânica.",
  explicacao: "Uma propriedade física pode ser observada ou medida sem transformar o material em outra substância. Testes controlados permitem escolher o material adequado para cada uso.",
  exemplo: "O óleo flutua por ser menos denso que a água; o ferro é atraído por ímã; metais conduzem calor e eletricidade; sal se dissolve em água.",
  vocabulario: ["densidade", "condutividade", "solubilidade"], etapas: ["Escolher uma propriedade", "Comparar amostras", "Registrar resultados", "Relacionar propriedade e uso"],
  questoes: [
    { pergunta: "Por que o óleo fica sobre a água?", opcoes: ["É menos denso", "É mais magnético", "Conduz mais eletricidade", "É mais solúvel"], correta: 0, explicacao: "O material menos denso tende a ficar sobre o mais denso." },
    { pergunta: "Qual propriedade explica o uso de cobre em fios?", opcoes: ["Condução elétrica", "Solubilidade", "Transparência", "Flutuação"], correta: 0, explicacao: "O cobre conduz corrente elétrica com eficiência." },
    { pergunta: "O que significa dizer que o sal é solúvel em água?", opcoes: ["Ele se dissolve", "Ele é atraído por ímã", "Ele sempre flutua", "Ele impede a passagem de calor"], correta: 0, explicacao: "Solubilidade é a capacidade de se dissolver em determinado líquido." },
  ], missao: "Compare materiais com testes seguros e justifique qual serve melhor para cada objeto.",
});

export const aula04 = criarAulaConsolidacao({
  slug: "aula-04-agua-vegetacao-e-consumo", titulo: "Água, Vegetação e Consumo Responsável", icone: "💧", bncc: ["EF05CI02", "EF05CI03", "EF05CI04"],
  tema: "ciclo e usos da água", conceito: "A água circula entre superfície e atmosfera, e a vegetação protege o solo, os rios, a umidade do ar e a qualidade da água.",
  explicacao: "Evaporação e transpiração levam vapor ao ar; condensação forma nuvens; precipitação devolve água; infiltração abastece o solo. Preservar vegetação e reduzir desperdício mantêm esse ciclo e a disponibilidade de água.",
  exemplo: "Uma área com árvores favorece infiltração e reduz erosão, enquanto torneira aberta sem uso desperdiça água tratada e energia.",
  vocabulario: ["ciclo da água", "vegetação", "consumo sustentável"], etapas: ["Evaporação e transpiração", "Condensação", "Precipitação e infiltração", "Uso responsável"],
  questoes: [
    { pergunta: "Em qual etapa o vapor forma gotículas nas nuvens?", opcoes: ["Condensação", "Evaporação", "Infiltração", "Escoamento"], correta: 0, explicacao: "Na condensação, o vapor esfria e forma gotículas." },
    { pergunta: "Como a vegetação ajuda a conservar a água?", opcoes: ["Protege o solo e favorece infiltração", "Impede toda chuva", "Seca todos os rios", "Elimina a umidade do ar"], correta: 0, explicacao: "Raízes e cobertura vegetal protegem o solo e ajudam a água a infiltrar." },
    { pergunta: "Qual é um uso sustentável da água?", opcoes: ["Fechar a torneira durante a escovação", "Lavar calçada com mangueira aberta", "Ignorar vazamentos", "Descartar óleo no ralo"], correta: 0, explicacao: "Evitar desperdício e contaminação conserva água e energia." },
  ], missao: "Represente o ciclo da água e proponha ações para proteger a vegetação e reduzir o desperdício.",
});
