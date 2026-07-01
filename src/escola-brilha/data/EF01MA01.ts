import type { Aula } from "../types";

/**
 * EF01MA01 — Matemática · 1º Ano
 * Habilidade BNCC: Utilizar números naturais como indicador de quantidade ou
 * de ordem em diferentes situações cotidianas e reconhecer situações em que
 * os números não indicam contagem nem ordem, mas sim código de identificação.
 */
const aula: Aula = {
  codigo: "EF01MA01",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "Para que servem os números?",

  objetivo:
    "Descobrir que os números podem contar coisas, mostrar a ordem em uma fila ou servir como código, tipo o número da nossa casa.",

  introducao:
    "Olha ao seu redor! Tem número no relógio, no controle da TV, na sua camisa do time e até na casa da vovó. Mas será que todo número serve pra contar? Vamos investigar juntos!",

  explicacao:
    "Os números aparecem no nosso dia a dia de três jeitos diferentes:\n\n• CONTAR quantidade — quando dizemos “tem 5 balas no pote”.\n• MOSTRAR ordem — quando alguém chega em 1º, 2º ou 3º lugar na corrida.\n• SER CÓDIGO — quando o número não conta nada, só identifica, como o número da sua casa ou o número da camisa do jogador.\n\nUm mesmo número pode ter significados diferentes. O que importa é onde ele está e pra que ele foi usado.",

  exemplo:
    "Camisa do Neymar: número 10. Esse 10 não quer dizer que existem 10 Neymares no time — é só o CÓDIGO da camisa dele.\n\nAgora, se a professora disser “tem 10 crianças na sala”, aí sim o 10 está CONTANDO.",

  exemploCotidiano:
    "Pense na sua casa: o número da porta (por exemplo, 25) é um CÓDIGO — ele ajuda o carteiro a encontrar você. Já quando você conta os brinquedos no chão e acha 25, aí o 25 está CONTANDO quantidade.",

  praticaGuiada: {
    enunciado:
      "Ana ficou em 2º lugar na corrida. Nessa frase, o número 2 está sendo usado pra quê?",
    resposta: "Para mostrar a ORDEM em que a Ana chegou.",
    explicacao:
      "Ela não tem 2 corridas nem é o código dela — é a POSIÇÃO em que ela terminou a corrida. Isso é ordem.",
  },

  praticaIndependente: {
    enunciado:
      "O telefone da avó é 3245-7890. Esse número está contando, mostrando ordem ou é um código?",
    resposta: "É um CÓDIGO — serve pra ligar pra ela, não conta nem ordena nada.",
    dica: "Pergunte: dá pra contar 3245 avós? Alguém ficou em 3245º lugar? Se não, é código!",
  },

  curiosidade:
    "O número zero (0) demorou séculos pra ser inventado! Muitos povos antigos contavam sem ele. Foi só quando pessoas na Índia criaram o zero que a matemática ficou muito mais fácil.",

  desafio: {
    enunciado:
      "Um livro tem 120 páginas. A página 45 é o começo do capítulo 3. Quais desses números CONTAM e qual mostra ORDEM?",
    resposta:
      "O 120 CONTA (quantas páginas o livro tem). O 45 mostra ORDEM (é a 45ª página). O 3 também mostra ORDEM (é o 3º capítulo).",
  },

  resumo:
    "Os números fazem três trabalhos: contam, ordenam ou identificam. Um mesmo número (como o 10) pode contar em um lugar e ser código em outro. O importante é olhar pra onde ele está.",

  revisao: {
    palavrasChave: ["contar", "ordem", "código", "número", "quantidade"],
    dica: "Quando ver um número, pergunte: ele tá contando algo? Mostrando posição? Ou só identificando? Essa é a chave.",
  },

  quiz: [
    {
      pergunta: "Na frase 'Tem 8 lápis na caixa', o número 8 está usado para:",
      opcoes: ["Contar quantidade", "Mostrar ordem", "Ser um código"],
      correta: 0,
      explicacao: "Ele diz QUANTOS lápis existem — está contando.",
    },
    {
      pergunta: "O número da sua camisa no futebol serve pra quê?",
      opcoes: ["Contar jogadores", "Ser código de identificação", "Mostrar em que lugar você chegou"],
      correta: 1,
      explicacao:
        "É só uma identificação sua no jogo. Não conta e nem ordena — é código.",
    },
    {
      pergunta: "Quem chegou em 1º lugar na corrida. O número 1 está mostrando:",
      opcoes: ["Quantidade", "Ordem", "Código"],
      correta: 1,
      explicacao: "É a POSIÇÃO em que a pessoa chegou — isso é ordem.",
    },
    {
      pergunta: "Qual desses números é usado como CÓDIGO?",
      opcoes: ["3 maçãs", "2º andar do prédio", "Número da placa do carro"],
      correta: 2,
      explicacao:
        "A placa identifica o carro — não conta nem ordena. As outras contam ou ordenam.",
    },
  ],

  fechamento:
    "Parabéns! Agora, sempre que ver um número por aí, você já sabe fazer a pergunta certa: ele conta, ordena ou identifica?",
};

export default aula;
