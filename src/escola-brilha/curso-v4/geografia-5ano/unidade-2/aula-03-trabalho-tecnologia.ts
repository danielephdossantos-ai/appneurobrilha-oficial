import { criarAulaGeografia } from "../../geografia-3ano/criar-aula-geografia";
export const aula03 = criarAulaGeografia({
  slug: "aula-03-trabalho-tecnologia",
  titulo: "Trabalho e Tecnologia",
  icone: "⚙️",
  bncc: "EF05GE05",
  tema: "mudanças no trabalho e na tecnologia",
  conceito: "Tecnologias transformam tarefas na agropecuária, indústria, comércio e serviços.",
  explicacao:
    "Máquinas e sistemas podem aumentar produção e mudar profissões; também exigem formação e análise dos efeitos sociais e ambientais.",
  exemplo: "Uma colheitadeira realiza parte do trabalho antes feito por muitas pessoas.",
  vocabulario: ["trabalho", "tecnologia", "produtividade", "profissão"],
  etapas: [
    "Identificar a atividade",
    "Comparar passado e presente",
    "Analisar a tecnologia",
    "Avaliar efeitos",
  ],
  missao: "Compare uma profissão antes e depois de uma tecnologia.",
  questoes: [
    {
      pergunta: "A tecnologia muda o trabalho?",
      correta: "Sim, muda tarefas e profissões",
      opcoes: ["Sim, muda tarefas e profissões", "Nunca", "Só muda mapas", "Apenas o clima"],
    },
    {
      pergunta: "Onde há tecnologia?",
      correta: "No campo, indústria, comércio e serviços",
      opcoes: [
        "No campo, indústria, comércio e serviços",
        "Só em fábricas",
        "Somente na cidade",
        "Apenas em celulares",
      ],
    },
    {
      pergunta: "O que deve ser analisado?",
      correta: "Benefícios e impactos",
      opcoes: ["Benefícios e impactos", "Só a velocidade", "A cor da máquina", "A propaganda"],
    },
  ],
});
