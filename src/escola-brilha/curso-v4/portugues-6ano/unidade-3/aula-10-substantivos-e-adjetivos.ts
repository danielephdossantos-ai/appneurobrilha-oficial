import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 10 — Substantivos e Adjetivos: As Peças e as Cores
 * BNCC: EF06LP04
 */
export const aula10: AulaPortuguesV4 = {
  slug: "aula-10-substantivos-e-adjetivos",
  titulo: "Substantivos e Adjetivos",
  iconeTrilha: "💎",
  bncc: ["EF06LP04"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Inventário do Labirinto: Nomes e Qualidades",
    historia: "Analista, se o verbo é o motor, o SUBSTANTIVO é a peça. Tudo o que existe tem um nome. E se queremos detalhar essa peça, usamos o ADJETIVO. No Labirinto, saber nomear e caracterizar os ativos é vital para não confundir uma 'porta aberta' com uma 'parede invisível'. Vamos organizar o seu inventário.",
    imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing de Identificação: O que é o quê?",
    bloco: {
      titulo: "Análise de Ativos",
      capaImagemUrl: "",
      pistas: [
        { nome: "Substantivo: Dá nome a seres, objetos, lugares e sentimentos.", imagemUrl: "" },
        { nome: "Adjetivo: Dá uma qualidade ou característica ao substantivo.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Manual de Peças",
        icone: "💎",
        linhas: [
          "  [ PEÇA (Substantivo) ]   ",
          "  > 'Computador'           ",
          "          ↓                ",
          "  [ CARACTERÍSTICA (Adjetivo)]",
          "  > 'Computador RÁPIDO'    ",
          "                           ",
          "  DICA: O adjetivo detalha ",
          "  o substantivo."
        ],
        estilo: "cartaz",
      },
      pergunta: "Na expressão 'Código complexo', qual palavra é o ADJETIVO?",
      hipoteses: [
        { texto: "Complexo" },
        { texto: "Código" },
        { texto: "Não há adjetivo" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Exato! 'Complexo' é a característica do 'Código'.",
      feedbackErro: "Qual palavra está dando uma qualidade para o objeto?",
      dica: "É a característica.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Substantivo", explicacao: "Palavra que nomeia tudo: pessoas, animais, coisas.", exemplo: "Mesa, Analista, Brasil.", imagemUrl: "" },
      { palavra: "Adjetivo", explicacao: "Palavra que caracteriza o substantivo.", exemplo: "Azul, Grande, Inteligente.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "A Arquitetura dos Nomes",
      imagemUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
      destacar: ["nomear", "caracterizar", "concordância"],
      paragrafos: [
        "A linguagem serve, primeiro, para nomear o mundo. Sem os substantivos, estaríamos perdidos apontando para as coisas sem saber como chamá-las.",
        "Mas nomear não basta. Precisamos diferenciar o 'código antigo' do 'código novo'. É aí que entram os adjetivos, trazendo cores, tamanhos e estados para os nomes.",
        "Eles trabalham em dupla: se o substantivo muda, o adjetivo deve acompanhar. Chamamos isso de concordância."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Por que adjetivos são importantes em relatórios técnicos?",
        opcoes: ["Para dar precisão aos detalhes do objeto", "Para deixar o texto mais longo", "Para substituir os nomes"],
        correta: 0,
        feedbackAcerto: "Correto. Detalhes salvam missões.",
        feedbackErro: "Imagine um relatório que diz apenas 'o objeto quebrou' sem dizer qual característica ele tinha.",
        ondeEstaNoTexto: "Diferenciar o 'código antigo' do 'código novo'.",
        dica: "Pense em precisão.",
        reensino: "Adjetivos eliminam a ambiguidade.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Montagem",
    bloco: {
      instrucao: "Combine o Substantivo com o Adjetivo correto para formar uma peça do Labirinto.",
      itens: [
        { id: "1", texto: "⚙️ Sistema", imagemUrl: "" },
        { id: "2", texto: "💎 Brilhante", imagemUrl: "" },
        { id: "3", texto: "📡 Antena", imagemUrl: "" },
        { id: "4", texto: "🚀 Veloz", imagemUrl: "" }
      ],
      ordemCerta: ["1", "4", "3", "2"],
      feedbackAcerto: "Ativos montados corretamente!",
      feedbackErro: "Tente combinar o objeto com a característica que faz sentido.",
      dica: "Antena... Brilhante?",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "O Inventário da Sala de Controle",
      imagemUrl: "",
      destacar: ["cadeira", "confortável", "telas", "gigantes"],
      paragrafos: [
        "Na sala, havia uma cadeira confortável e três telas gigantes.",
        "O teclado mecânico emitia um som alto.",
        "O analista atento observava tudo."
      ],
    },
    perguntas: [
      {
        pergunta: "Quais são os adjetivos usados para 'cadeira' e 'telas'?",
        opcoes: ["Confortável e Gigantes", "Mecânico e Atento", "Sala e Controle"],
        correta: 0,
        feedbackAcerto: "Exato! Características identificadas.",
        feedbackErro: "Procure as qualidades desses objetos.",
        dica: "O que a cadeira é?",
        reensino: "Adjetivos concordam em gênero e número com o substantivo."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Substantivos nomeiam tudo o que existe.",
      "Adjetivos dão qualidades e características.",
      "Ambos devem concordar entre si (Ex: Menino bonito / Meninos bonitos)."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Identifique o SUBSTANTIVO na frase: 'O gato preto fugiu.'",
        opcoes: ["Gato", "Preto", "Fugiu"],
        correta: 0,
        feedbackAcerto: "Correto. Gato é o nome do animal.",
        feedbackErro: "Preto é o quê?",
        ondeEstaNoTexto: "Substantivo: Dá nome a seres...",
        dica: "É o nome do ser.",
        reensino: "O substantivo é o núcleo do sujeito.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Inspetor de Objetos",
    materiais: ["Objetos de casa"],
    passos: [
      "Escolha 3 objetos na sua sala.",
      "Dê o nome de cada um (Substantivo) e uma característica (Adjetivo).",
      "Ex: Sofá macio."
    ],
    registro: "Faça uma lista dos 3 pares que você encontrou.",
  },
  recompensa: {
    xp: 600,
    moedas: 300,
  },
};
