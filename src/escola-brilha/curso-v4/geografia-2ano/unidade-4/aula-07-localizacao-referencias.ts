import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula07 = criarAulaGeografia({
  slug: "aula-07-localizacao-referencias",
  titulo: "Localização e Pontos de Referência",
  icone: "📍",
  bncc: ["EF02GE10"],
  tema: "localização de elementos do lugar",
  conceito:
    "Referências como frente, atrás, esquerda, direita, perto e longe localizam elementos em relação a uma pessoa ou objeto.",
  explicacao:
    "Uma descrição precisa informa a referência: dizer que a biblioteca fica à direita da escola só funciona quando sabemos a direção de quem observa.",
  exemplo: "No mapa da sala, a porta está à esquerda do quadro e as mesas estão à frente dele.",
  vocabulario: ["localização", "referência", "posição"],
  etapas: [
    "Escolher a referência",
    "Observar a posição",
    "Usar a palavra espacial",
    "Confirmar no mapa",
  ],
  missao: "Descreva a posição de quatro elementos usando uma referência clara.",
  questoes: [
    {
      pergunta: "Para dizer direita ou esquerda, precisamos de quê?",
      opcoes: ["Uma referência", "Somente uma cor", "Um relógio", "Uma estação"],
      correta: 0,
      explicacao: "A posição é relativa ao ponto de referência.",
    },
    {
      pergunta: "Qual frase localiza com precisão?",
      opcoes: [
        "A praça fica atrás da escola",
        "A praça existe",
        "A praça é bonita",
        "Há uma praça",
      ],
      correta: 0,
      explicacao: "A frase usa relação espacial e referência.",
    },
    {
      pergunta: "O que ajuda num trajeto?",
      opcoes: [
        "Pontos de referência",
        "Fechar os olhos",
        "Ignorar placas",
        "Mudar todas as direções",
      ],
      correta: 0,
      explicacao: "Referências ajudam a orientar caminhos.",
    },
  ],
});
