import type { AulaPortuguesV4 } from "../types";

type Config = {
  slug: string;
  titulo: string;
  icone: string;
  bncc: string[];
  genero: string;
  explicacao: string;
  exemplo: string;
  partes: [string, string, string, string];
  pergunta: string;
  opcoes: [string, string, string, string];
  correta: number;
  producao: string;
};

/** Aula complementar curta, mas completa, no contrato de 11 momentos do player. */
export function criarAulaBncc(config: Config): AulaPortuguesV4 {
  return {
    slug: config.slug,
    titulo: config.titulo,
    iconeTrilha: config.icone,
    bncc: config.bncc,
    duracaoMin: 20,
    momento01_motivacao: {
      titulo: `Uma nova missão: ${config.genero}`,
      historia: `Brilha encontrou um texto que precisa ser entendido e usado de verdade. Hoje você vai descobrir como funciona ${config.genero}, ler um exemplo, explicar suas pistas e produzir sua própria versão.`,
    },
    momento02_previsao: {
      instrucao: "Leia o título e observe as pistas antes de abrir o texto.",
      bloco: {
        titulo: config.titulo,
        capaImagemUrl: "",
        pistas: config.partes.slice(0, 2).map((nome) => ({ nome, imagemUrl: "" })),
        pergunta: `O que precisamos observar em ${config.genero}?`,
        hipoteses: [
          { texto: "A finalidade, o público e a organização do texto" },
          { texto: "Somente o tamanho das palavras" },
          { texto: "Apenas a cor do fundo" },
          { texto: "Nada, basta adivinhar" },
        ],
        respostaCerta: 0,
        feedbackAcerto: "Isso! Um texto funciona quando forma, conteúdo e finalidade trabalham juntos.",
        feedbackErro: "Observe quem vai ler, para que o texto foi feito e como ele se organiza.",
        dica: "Pense: quem escreveu, para quem e para quê?",
      },
    },
    momento03_vocabulario: {
      instrucao: "Conheça duas palavras importantes.",
      cards: [
        { palavra: "finalidade", explicacao: "É o motivo para o texto existir: informar, convidar, ensinar ou divertir.", exemplo: config.exemplo, imagemUrl: "" },
        { palavra: "organização", explicacao: "É o jeito como as partes do texto aparecem e se ligam.", exemplo: config.partes.join(" • "), imagemUrl: "" },
      ],
    },
    momento04_leituraGuiada: {
      instrucao: "Leia comigo. Depois de cada frase, explique o que ela faz no texto.",
      leitura: {
        titulo: config.genero,
        imagemUrl: "",
        destacar: config.partes,
        paragrafos: [config.explicacao, `Exemplo analisado: ${config.exemplo}`, `Partes importantes: ${config.partes.join(", ")}.`],
      },
    },
    momento05_compreensao: {
      instrucao: "Use o exemplo, não o chute.",
      perguntas: [{
        pergunta: config.pergunta,
        opcoes: config.opcoes,
        correta: config.correta,
        feedbackAcerto: "Muito bem! Você ligou a pista à função do texto.",
        feedbackErro: "Volte ao exemplo e procure a parte que comprova a resposta.",
        ondeEstaNoTexto: config.exemplo,
        dica: "Procure uma informação explícita no exemplo.",
        reensino: config.explicacao,
      }],
    },
    momento06_personagensCenario: {
      instrucao: "Identifique a situação de comunicação.",
      perguntas: [{
        pergunta: "Antes de produzir, quais perguntas ajudam mais?",
        opcoes: ["Quem fala, para quem e com qual finalidade?", "Quantas letras há?", "Qual palavra é maior?", "Qual cor eu prefiro?"],
        correta: 0,
        feedbackAcerto: "Certo! Essas perguntas orientam escolhas de linguagem e formato.",
        feedbackErro: "Produzir texto exige considerar autor, leitor e finalidade.",
        dica: "Pense na situação comunicativa.",
      }],
    },
    momento07_sequencia: {
      instrucao: "Organize o trabalho de leitura e produção.",
      bloco: {
        instrucao: "Começo, desenvolvimento, revisão e apresentação.",
        itens: [
          { id: "1", texto: "Descobrir público e finalidade.", imagemUrl: "" },
          { id: "2", texto: "Planejar as informações e o formato.", imagemUrl: "" },
          { id: "3", texto: "Produzir e revisar com atenção.", imagemUrl: "" },
          { id: "4", texto: "Apresentar ou publicar para o público escolhido.", imagemUrl: "" },
        ],
        ordemCerta: ["1", "2", "3", "4"],
        feedbackAcerto: "Ótima sequência: planejar, produzir, revisar e compartilhar.",
        feedbackErro: "Primeiro entendemos a situação; a publicação vem depois da revisão.",
        dica: "A revisão acontece antes de mostrar o texto.",
      },
    },
    momento08_leituraIndependente: {
      instrucao: "Agora explique sozinho como o exemplo funciona.",
      leitura: { titulo: "Texto para investigar", imagemUrl: "", destacar: config.partes, paragrafos: [config.exemplo] },
      perguntas: [{
        pergunta: config.pergunta,
        opcoes: config.opcoes,
        correta: config.correta,
        feedbackAcerto: "Leitura comprovada pelo texto!",
        feedbackErro: "Releia e aponte a pista que sustenta sua escolha.",
        dica: "A resposta aparece no exemplo.",
        reensino: config.explicacao,
      }],
    },
    momento09_revisao: { pontos: [config.explicacao, `As partes são: ${config.partes.join(", ")}.`, "Finalidade e público orientam a forma do texto."] },
    momento10_avaliacao: {
      perguntas: [{
        pergunta: config.pergunta,
        opcoes: config.opcoes,
        correta: config.correta,
        feedbackAcerto: "Você demonstrou a habilidade nesta situação.",
        feedbackErro: "Use a finalidade e as partes do gênero para decidir.",
        ondeEstaNoTexto: config.exemplo,
        dica: "Volte à explicação e compare as quatro opções.",
        reensino: config.explicacao,
      }],
    },
    momento11_missaoFamilia: {
      titulo: `Produção real: ${config.genero}`,
      materiais: ["Papel ou editor de texto", "Lápis"],
      passos: [config.producao, "Leia para alguém e escute uma sugestão.", "Revise clareza, escrita, pontuação e formato antes de apresentar."],
      registro: "Guarde a versão revisada no caderno ou em arquivo digital.",
    },
    recompensa: { xp: 700, moedas: 450 },
  };
}
