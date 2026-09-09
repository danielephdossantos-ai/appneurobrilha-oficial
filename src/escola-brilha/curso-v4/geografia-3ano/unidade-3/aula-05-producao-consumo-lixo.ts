import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula05 = criarAulaGeografia({
  slug: "aula-05-producao-consumo-lixo",
  titulo: "Produção, Consumo e Lixo",
  icone: "♻️",
  bncc: "EF03GE08",
  tema: "produção, consumo e geração de resíduos",
  conceito: "Produtos passam por extração, fabricação, transporte, consumo e descarte.",
  explicacao:
    "Cada etapa usa recursos e pode gerar resíduos. Reduzir, reutilizar, separar e reciclar diminui impactos, mas também é preciso consumir com responsabilidade.",
  exemplo: "Uma garrafa reutilizável evita o descarte repetido de copos e garrafas de uso único.",
  vocabulario: ["produção", "consumo", "resíduo", "reciclagem"],
  etapas: ["Identificar o produto", "Descobrir a origem", "Observar o descarte", "Propor redução"],
  missao: "Investigue um resíduo da casa e proponha uma forma de reduzir seu descarte.",
  questoes: [
    {
      pergunta: "Quando um produto vira resíduo?",
      correta: "Quando é descartado após o uso",
      opcoes: [
        "Quando é descartado após o uso",
        "Antes de existir",
        "Quando chove",
        "Só na fábrica",
      ],
    },
    {
      pergunta: "Qual atitude reduz resíduos?",
      correta: "Reutilizar antes de descartar",
      opcoes: [
        "Reutilizar antes de descartar",
        "Comprar sem necessidade",
        "Misturar todo o lixo",
        "Jogar na rua",
      ],
    },
    {
      pergunta: "A produção usa recursos naturais?",
      correta: "Sim, matérias-primas, água e energia",
      opcoes: [
        "Sim, matérias-primas, água e energia",
        "Não usa nada",
        "Usa apenas moedas",
        "Só utiliza vento",
      ],
    },
  ],
});
