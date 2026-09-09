import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula04 = criarAulaGeografia({
  slug: "aula-04-legendas-simbolos",
  titulo: "Legendas e Símbolos nos Mapas",
  icone: "🗺️",
  bncc: "EF03GE07",
  tema: "legendas e símbolos cartográficos",
  conceito: "A legenda explica o significado das cores e dos símbolos usados em um mapa.",
  explicacao:
    "Título, orientação, símbolos e legenda permitem ler e produzir representações de lugares. Um mesmo símbolo deve manter o mesmo significado.",
  exemplo: "Um quadrado azul pode representar escola quando a legenda informa isso.",
  vocabulario: ["legenda", "símbolo", "título", "orientação"],
  etapas: ["Escolher o lugar", "Criar símbolos", "Montar a legenda", "Conferir o mapa"],
  missao: "Crie um mapa simples com título, quatro símbolos e legenda.",
  questoes: [
    {
      pergunta: "Para que serve a legenda?",
      correta: "Explicar cores e símbolos",
      opcoes: ["Explicar cores e símbolos", "Enfeitar a borda", "Apagar caminhos", "Medir o tempo"],
    },
    {
      pergunta: "O símbolo de escola pode mudar de sentido no mesmo mapa?",
      correta: "Não, deve manter o significado",
      opcoes: [
        "Não, deve manter o significado",
        "Sim, a cada uso",
        "Só aos domingos",
        "Depende da cor do papel",
      ],
    },
    {
      pergunta: "O que ajuda a identificar o assunto do mapa?",
      correta: "O título",
      opcoes: ["O título", "A moeda", "O relógio", "O brinquedo"],
    },
  ],
});
