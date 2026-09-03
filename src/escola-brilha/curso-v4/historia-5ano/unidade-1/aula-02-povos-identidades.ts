import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-povos-territorios-identidades", titulo: "Povos, Territórios e Identidades", icone: "🏺", bncc: ["EF05HI01", "EF05HI03"],
  tema: "formação de povos, culturas e identidades", conceito: "Povos antigos formaram culturas em relação com rios, desertos, florestas, rotas e territórios; religiões, costumes e instituições contribuíram para identidades diversas e mutáveis.",
  explicacao: "O espaço geográfico oferece condições e desafios, mas não determina sozinho uma cultura. Egípcios, mesopotâmicos, povos indígenas e sociedades africanas desenvolveram soluções diferentes. Dentro de cada povo também existiam grupos e mudanças.",
  exemplo: "Rios favoreceram agricultura e circulação em várias sociedades, mas cada uma criou técnicas, crenças, autoridades e formas de organização próprias.",
  vocabulario: ["povo", "território", "identidade cultural"], etapas: ["Localizar a sociedade", "Observar relação com espaço", "Identificar práticas e crenças", "Comparar sem hierarquizar"],
  questoes: [
    { pergunta: "O espaço determina sozinho uma cultura?", opcoes: ["Não; pessoas fazem escolhas históricas", "Sim, sempre", "Só a religião determina", "Culturas nunca mudam"], correta: 0, explicacao: "Ambiente, contatos e decisões humanas interagem." },
    { pergunta: "O que pode compor uma identidade coletiva?", opcoes: ["Língua, memória, costumes e crenças", "Apenas clima", "Somente roupas", "Um único governante"], correta: 0, explicacao: "Identidades resultam de elementos sociais e históricos diversos." },
    { pergunta: "Qual comparação é adequada?", opcoes: ["Reconhecer soluções diferentes sem dizer que uma é superior", "Chamar um povo de atrasado", "Tratar todos como iguais", "Ignorar mudanças"], correta: 0, explicacao: "A diversidade deve ser analisada sem hierarquias preconceituosas." },
  ], missao: "Compare duas sociedades antigas relacionando espaço, organização social, cultura, religião e construção de identidades.",
});
