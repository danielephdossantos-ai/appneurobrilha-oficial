import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula07 = criarAulaGeografia({
  slug: "aula-07-cuidados-com-agua",
  titulo: "Cuidados com a Água",
  icone: "🚰",
  bncc: "EF03GE10",
  tema: "usos e cuidados com a água na vida, agricultura e energia",
  conceito: "Diferentes atividades precisam de água e devem evitar desperdício e poluição.",
  explicacao:
    "Na agricultura, técnicas de irrigação economizam água; nas casas, consertar vazamentos ajuda; na energia hidrelétrica, rios e comunidades precisam ser considerados.",
  exemplo: "Regar perto do solo em horário menos quente reduz a perda de água por evaporação.",
  vocabulario: ["irrigação", "desperdício", "poluição", "hidrelétrica"],
  etapas: [
    "Identificar o uso",
    "Perceber o problema",
    "Escolher o cuidado",
    "Verificar o resultado",
  ],
  missao: "Crie três recomendações de cuidado: casa, agricultura e geração de energia.",
  questoes: [
    {
      pergunta: "Qual atitude evita desperdício em casa?",
      correta: "Consertar vazamentos",
      opcoes: [
        "Consertar vazamentos",
        "Deixar torneira aberta",
        "Lavar calçada diariamente",
        "Ignorar goteiras",
      ],
    },
    {
      pergunta: "Como economizar na irrigação?",
      correta: "Levar água perto das raízes",
      opcoes: [
        "Levar água perto das raízes",
        "Molhar o asfalto",
        "Irrigar ao acaso",
        "Usar água poluída",
      ],
    },
    {
      pergunta: "Uma hidrelétrica usa o quê?",
      correta: "O movimento da água",
      opcoes: ["O movimento da água", "Somente areia", "A luz da Lua", "A tinta do mapa"],
    },
  ],
});
