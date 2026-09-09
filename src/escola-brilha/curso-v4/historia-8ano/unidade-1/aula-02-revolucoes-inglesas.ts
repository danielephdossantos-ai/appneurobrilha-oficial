import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-revolucoes-inglesas", titulo: "Inglaterra do Século XVII e Revolução Gloriosa", icone: "📜", bncc: ["EF08HI02"],
  tema: "conflitos políticos ingleses e limites ao poder real", conceito: "No século XVII, disputas entre monarquia e Parlamento transformaram a política inglesa. A Revolução Gloriosa consolidou uma monarquia constitucional na qual o rei ficou submetido a leis e ao Parlamento.",
  explicacao: "Guerra Civil, República de Cromwell, Restauração e Revolução Gloriosa foram etapas diferentes. O Bill of Rights de 1689 limitou poderes reais e fortaleceu o Parlamento, mas a participação política continuou restrita e desigual.",
  exemplo: "O monarca não podia suspender leis nem criar tributos ignorando o Parlamento. Isso influenciou ideias liberais posteriores sobre divisão e limitação do poder.",
  vocabulario: ["Parlamento", "monarquia constitucional", "Bill of Rights"], etapas: ["Identificar os grupos", "Reconhecer o conflito", "Examinar a regra criada", "Avaliar limites e permanências"],
  questoes: [
    { pergunta: "Qual foi um resultado da Revolução Gloriosa?", opcoes: ["Fortalecimento do Parlamento", "Poder real sem limites", "Fim de todas as desigualdades", "Extinção das leis"], correta: 0, explicacao: "A monarquia passou a ter limites institucionais." },
    { pergunta: "O Bill of Rights fazia o quê?", opcoes: ["Limitava poderes do monarca", "Criava absolutismo", "Proibia o Parlamento", "Eliminava eleições"], correta: 0, explicacao: "O documento reforçou garantias parlamentares." },
    { pergunta: "Todos passaram imediatamente a participar da política?", opcoes: ["Não, a participação permaneceu restrita", "Sim, sem exceção", "A política deixou de existir", "Somente reis votavam"], correta: 0, explicacao: "Mudança institucional não significou igualdade universal." },
  ], missao: "Construa uma linha do tempo com quatro etapas e explique uma mudança e uma permanência política.",
});
