import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula08 = criarAulaGeografia({
  slug: "aula-08-impactos-ambientais",
  titulo: "Impactos Ambientais no Campo e na Cidade",
  icone: "🌎",
  bncc: "EF03GE11",
  tema: "impactos das atividades econômicas no campo e na cidade",
  conceito:
    "Atividades econômicas transformam paisagens e podem gerar benefícios e impactos ambientais.",
  explicacao:
    "Agricultura, mineração, indústria, comércio e construção usam recursos e podem alterar solo, água, ar e vegetação. Comparar impactos ajuda a propor prevenção e reparação.",
  exemplo: "Retirar a mata das margens de um rio pode aumentar erosão e sujeira na água.",
  vocabulario: ["impacto ambiental", "atividade econômica", "erosão", "prevenção"],
  etapas: [
    "Identificar a atividade",
    "Observar a alteração",
    "Comparar os lugares",
    "Propor prevenção",
  ],
  missao: "Compare um impacto do campo e outro da cidade e proponha uma solução para cada.",
  questoes: [
    {
      pergunta: "O que é impacto ambiental?",
      correta: "Uma alteração no ambiente",
      opcoes: [
        "Uma alteração no ambiente",
        "Um tipo de moeda",
        "Uma festa",
        "Um desenho sem lugar",
      ],
    },
    {
      pergunta: "Qual pode ser impacto urbano?",
      correta: "Poluição do ar pelo trânsito",
      opcoes: [
        "Poluição do ar pelo trânsito",
        "Plantio de horta",
        "Proteção de nascente",
        "Coleta seletiva",
      ],
    },
    {
      pergunta: "Qual medida previne erosão?",
      correta: "Manter cobertura vegetal",
      opcoes: [
        "Manter cobertura vegetal",
        "Deixar solo exposto",
        "Jogar lixo no rio",
        "Retirar todas as plantas",
      ],
    },
  ],
});
