import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-trabalhos-e-ambiente", titulo: "Trabalhos da Comunidade e Ambiente", icone: "🧑‍🌾", bncc: ["EF02HI10", "EF02HI11"],
  tema: "formas de trabalho e seus impactos ambientais", conceito: "Os trabalhos da comunidade têm funções, conhecimentos e importância diferentes; também podem transformar água, solo, ar, vegetação e paisagem de maneiras positivas ou negativas.",
  explicacao: "Agricultores produzem alimentos, comerciantes distribuem produtos, profissionais da saúde cuidam de pessoas e equipes de limpeza coletam resíduos. Toda atividade usa recursos e gera efeitos. Planejamento, tratamento de resíduos e proteção de áreas reduzem danos.",
  exemplo: "Uma oficina presta serviço importante, mas precisa destinar óleo usado corretamente para não contaminar o solo e a água. Uma horta pode produzir alimentos e conservar o solo com boas práticas.",
  vocabulario: ["trabalho", "comunidade", "impacto ambiental"], etapas: ["Identificar o trabalho", "Explicar sua importância", "Observar recursos utilizados", "Propor cuidado ambiental"],
  questoes: [
    { pergunta: "Por que diferentes trabalhos são importantes?", opcoes: ["Atendem necessidades da comunidade", "Todos fazem exatamente a mesma coisa", "Não exigem conhecimentos", "Existem só no passado"], correta: 0, explicacao: "Cada atividade contribui de modo específico." },
    { pergunta: "O descarte incorreto de óleo pode causar o quê?", opcoes: ["Contaminação do solo e da água", "Produção de chuva", "Criação de ruas", "Limpeza automática"], correta: 0, explicacao: "Resíduos precisam de destinação adequada." },
    { pergunta: "Qual ação reduz impacto ambiental?", opcoes: ["Tratar resíduos e economizar recursos", "Jogar lixo no rio", "Queimar tudo", "Desperdiçar água"], correta: 0, explicacao: "Boas práticas reduzem danos sem apagar a importância do trabalho." },
  ], missao: "Investigue um trabalho da comunidade, sua importância, os recursos utilizados e uma medida para reduzir impactos ambientais.",
});
