import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 1 — Oxítona, Paroxítona, Proparoxítona
 * -------------------------------------------------------------
 * Abertura da Unidade 2 (Laboratório da Ortografia) do curso "A
 * Central de Investigação da Linguagem" — 5º ano. A missão: treinar
 * o olho investigativo para localizar a sílaba tônica de qualquer
 * palavra e reconhecer as regras que decidem quando ela recebe acento.
 *
 * BNCC: EF05LP01, EF35LP04, EF35LP03
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-acentuacao",
  titulo: "Oxítona, Paroxítona e Proparoxítona",
  iconeTrilha: "🔬",
  bncc: ["EF05LP01", "EF35LP04", "EF35LP03"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Bem-vindo ao Laboratório da Ortografia",
    historia:
      "A investigadora abriu a maleta de instrumentos e colocou sobre a mesa uma lupa, um caderno de provas e uma régua de sílabas. — Hoje nossa missão é caçar a SÍLABA TÔNICA: aquela que a gente pronuncia com mais força dentro de uma palavra. Ela é a pista principal para descobrir se a palavra recebe acento ou não. Vamos abrir o caso?",
  },

  momento02_previsao: {
    instrucao:
      "Antes de investigar as regras, observe estas três palavras suspeitas e tente perceber onde cai a força da voz em cada uma.",
    bloco: {
      titulo: "O Caso das Três Palavras Suspeitas",
      recado: {
        rotulo: "Ficha da investigação",
        icone: "🔍",
        linhas: ["café", "árvore", "médico"],
        estilo: "cartaz",
      },
      pergunta: "Em qual dessas palavras a força da voz cai na ÚLTIMA sílaba?",
      hipoteses: [
        { texto: "café" },
        { texto: "árvore" },
        { texto: "médico" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔬 Certeiro! Em 'café', a força cai em 'FÉ' — a última sílaba. Em 'árvore' cai na antepenúltima e em 'médico' também. São três casos diferentes, e é exatamente isso que vamos investigar hoje.",
      feedbackErro:
        "Pronuncie as três palavras devagar: ca-FÉ, ÁR-vo-re, MÉ-di-co. Só em 'café' a força cai na última sílaba — nas outras duas, cai antes.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três termos técnicos vão virar suas ferramentas de investigação.",
    cards: [
      {
        palavra: "sílaba tônica",
        explicacao:
          "É a sílaba pronunciada com mais força dentro de uma palavra. Toda palavra tem uma — mesmo quando não tem acento escrito.",
        exemplo: "Em 'JA-NE-la', a força cai em 'NE' — essa é a sílaba tônica.",
      },
      {
        palavra: "oxítona",
        explicacao:
          "Palavra cuja sílaba tônica é a ÚLTIMA. Pense em 'oxi' de 'fim, ponta'.",
        exemplo: "café, sofá, jacaré, também.",
      },
      {
        palavra: "paroxítona",
        explicacao: "Palavra cuja sílaba tônica é a PENÚLTIMA (a de trás para frente, contando duas).",
        exemplo: "árvore, açúcar, fácil, casa.",
      },
      {
        palavra: "proparoxítona",
        explicacao: "Palavra cuja sílaba tônica é a ANTEPENÚLTIMA — a terceira, contando de trás para frente. Toda proparoxítona é acentuada.",
        exemplo: "médico, lâmpada, matemática.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o relatório da investigadora como um detetive: procure palavras que possam esconder pistas sobre a sílaba tônica.",
    leitura: {
      titulo: "Relatório do Laboratório: A Regra Escondida",
      destacar: ["oxítonas terminadas em A, E, O", "paroxítonas terminadas em", "proparoxítonas são sempre acentuadas"],
      paragrafos: [
        "Depois de examinar centenas de palavras, a equipe do laboratório chegou a três descobertas. Primeira: as oxítonas terminadas em A, E, O (seguidas ou não de S) recebem acento — como em 'sofá', 'você' e 'avô'. Já as terminadas em outras letras, como 'jacaré' sem acento? Não, espera: jacaré também termina em É e leva acento, porque termina em E tônico.",
        "Segunda descoberta: as paroxítonas são a maioria das palavras da língua portuguesa e, por isso, seguem a regra oposta — só recebem acento quando terminam de um jeito 'diferente do esperado', como em L, N, R, X, PS, I(S), US, ÃO(S), UM, Ã(S). É o caso de 'fácil', 'hífen', 'tórax' e 'álbum'.",
        "Terceira descoberta, a mais simples de todas: toda proparoxítona é acentuada, sem exceção. Não importa a letra final — 'médico', 'lâmpada', 'sílaba' e 'matemática' seguem essa regra sem desvio. A equipe concluiu: quanto mais para trás fica a força da voz, mais 'vigiada' pela regra a palavra se torna.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relatório sempre que precisar confirmar uma pista.",
    perguntas: [
      {
        pergunta: "Segundo o relatório, quando as oxítonas recebem acento?",
        opcoes: [
          "Quando terminam em A, E, O (seguidas ou não de S)",
          "Sempre, sem exceção nenhuma",
          "Nunca recebem acento",
        ],
        correta: 0,
        feedbackAcerto: "🔬 Exato! O texto diz: 'terminadas em A, E, O (seguidas ou não de S) recebem acento'.",
        feedbackErro: "Releia a primeira descoberta: a regra fala em terminações A, E, O.",
        ondeEstaNoTexto: "as oxítonas terminadas em A, E, O (seguidas ou não de S) recebem acento",
      },
      {
        pergunta: "O que a equipe concluiu sobre as proparoxítonas?",
        opcoes: [
          "Que elas nunca recebem acento",
          "Que todas são sempre acentuadas, sem exceção",
          "Que só recebem acento se terminarem em S",
        ],
        correta: 1,
        feedbackAcerto: "🔬 Isso! O texto afirma que 'toda proparoxítona é acentuada, sem exceção'.",
        feedbackErro: "A terceira descoberta é a mais direta: releia o último parágrafo.",
        ondeEstaNoTexto: "toda proparoxítona é acentuada, sem exceção",
      },
      {
        pergunta: "Por que as paroxítonas seguem a 'regra oposta' das oxítonas?",
        opcoes: [
          "Porque são poucas palavras na língua",
          "Porque são a maioria das palavras, então só o 'diferente' é marcado",
          "Porque nunca podem ser acentuadas",
        ],
        correta: 1,
        feedbackAcerto: "🔬 Correto! Como são maioria, a regra marca só as terminações menos comuns.",
        feedbackErro: "Releia o segundo parágrafo: ele explica que, por serem maioria, só o 'diferente do esperado' leva acento.",
        ondeEstaNoTexto: "são a maioria das palavras da língua portuguesa e, por isso, seguem a regra oposta",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora classifique as palavras suspeitas conforme a posição da sílaba tônica.",
    perguntas: [
      {
        pergunta: "A palavra 'lâmpada' é classificada como:",
        opcoes: ["Oxítona", "Paroxítona", "Proparoxítona"],
        correta: 2,
        feedbackAcerto: "🔬 Isso! LÂM-pa-da: a força cai na antepenúltima sílaba — proparoxítona, por isso é sempre acentuada.",
        feedbackErro: "Pronuncie devagar: LÂM-pa-da. A força cai na primeira sílaba, que é a antepenúltima — isso é proparoxítona.",
      },
      {
        pergunta: "A palavra 'jacaré' é classificada como:",
        opcoes: ["Oxítona", "Paroxítona", "Proparoxítona"],
        correta: 0,
        feedbackAcerto: "🔬 Exato! ja-ca-RÉ: a força cai na última sílaba — oxítona terminada em E, por isso leva acento.",
        feedbackErro: "Pronuncie: ja-ca-RÉ. A força cai na última sílaba, o que a torna oxítona.",
      },
      {
        pergunta: "Por que 'fácil' recebe acento, se é paroxítona?",
        opcoes: [
          "Porque toda paroxítona é acentuada",
          "Porque termina em L, uma terminação que foge do padrão comum das paroxítonas",
          "Por acaso, sem nenhuma regra",
        ],
        correta: 1,
        feedbackAcerto: "🔬 Isso mesmo! Paroxítonas terminadas em L (como fácil, difícil, útil) recebem acento — é uma das terminações 'marcadas'.",
        feedbackErro: "Lembre-se: paroxítonas só são acentuadas em terminações específicas, e L é uma delas.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o raciocínio da investigação, do primeiro passo ao último, para classificar qualquer palavra.",
    bloco: {
      instrucao: "Ordem correta do método de investigação.",
      itens: [
        { id: "p1", texto: "Pronuncie a palavra devagar e identifique a sílaba mais forte." },
        { id: "p2", texto: "Conte a posição dessa sílaba: última, penúltima ou antepenúltima." },
        { id: "p3", texto: "Classifique como oxítona, paroxítona ou proparoxítona." },
        { id: "p4", texto: "Aplique a regra de acentuação correspondente a essa classificação." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔬 Perfeito! Esse é o método científico da acentuação: ouvir, contar, classificar e só então aplicar a regra.",
      feedbackErro: "Pense como um investigador: primeiro você escuta a força da voz, depois conta a posição, só então classifica e aplica a regra.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso no laboratório! Leia sozinho e aplique o que já descobriu.",
    leitura: {
      titulo: "O Bilhete Perdido no Corredor",
      destacar: ["número", "difícil", "também"],
      paragrafos: [
        "A investigadora encontrou um bilhete amassado perto da sala de ciências. Nele estava escrito: 'O número do armário é difícil de lembrar, mas você também vai conseguir descobrir.'",
        "Ao ler, ela percebeu três palavras interessantes para o caso do dia: 'número', que é proparoxítona; 'difícil', que é paroxítona terminada em L; e 'também', que é oxítona terminada em EM.",
        "Ela anotou no caderno: 'Cada palavra do bilhete confirma uma regra diferente — e todas elas seguem exatamente o padrão que já conhecemos.'",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a classificação da palavra 'número' no bilhete?",
        opcoes: ["Oxítona", "Paroxítona", "Proparoxítona"],
        correta: 2,
        feedbackAcerto: "🔬 Isso! NÚ-me-ro tem a força na antepenúltima sílaba — proparoxítona.",
        feedbackErro: "Releia o segundo parágrafo: ele já classifica 'número' como proparoxítona.",
        ondeEstaNoTexto: "'número', que é proparoxítona",
      },
      {
        pergunta: "Por que 'também' recebe acento?",
        opcoes: [
          "Porque é proparoxítona",
          "Porque é oxítona terminada em EM",
          "Porque não segue regra nenhuma",
        ],
        correta: 1,
        feedbackAcerto: "🔬 Correto! O texto explica: 'também', que é oxítona terminada em EM.",
        feedbackErro: "O próprio texto classifica 'também' — releia o segundo parágrafo.",
        ondeEstaNoTexto: "'também', que é oxítona terminada em EM",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Toda palavra tem uma sílaba tônica, mesmo sem acento escrito.",
      "OXÍTONA: força na última sílaba. Recebe acento quando termina em A, E, O (+S).",
      "PAROXÍTONA: força na penúltima sílaba. É a maioria das palavras; só é acentuada em terminações específicas (L, N, R, X, I(S), US, ÃO(S), UM, Ã(S)).",
      "PROPAROXÍTONA: força na antepenúltima sílaba. Sempre é acentuada, sem exceção.",
    ],
    miniDesafio: {
      pergunta: "A palavra 'álbum' é acentuada porque é:",
      opcoes: [
        "Oxítona terminada em A",
        "Paroxítona terminada em UM",
        "Proparoxítona",
      ],
      correta: 1,
      feedbackAcerto: "🔬 Isso! ÁL-bum é paroxítona, e a terminação UM é uma das que exige acento.",
      feedbackErro: "Pronuncie: ÁL-bum. A força cai na penúltima sílaba — paroxítona terminada em UM, terminação marcada pela regra.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é a sílaba tônica?",
        opcoes: [
          "A primeira sílaba de qualquer palavra",
          "A sílaba pronunciada com mais força",
          "A última letra da palavra",
        ],
        correta: 1,
        feedbackAcerto: "🔬 Isso! É a sílaba pronunciada com mais intensidade.",
        feedbackErro: "A sílaba tônica é aquela em que a voz 'bate' mais forte ao pronunciar a palavra.",
      },
      {
        pergunta: "2/5 — 'Sofá' é classificada como:",
        opcoes: ["Oxítona", "Paroxítona", "Proparoxítona"],
        correta: 0,
        feedbackAcerto: "🔬 Correto! so-FÁ tem força na última sílaba.",
        feedbackErro: "Pronuncie: so-FÁ. A força cai na última sílaba — isso é oxítona.",
      },
      {
        pergunta: "3/5 — Qual grupo de palavras é sempre acentuado, sem exceção?",
        opcoes: ["Oxítonas", "Paroxítonas", "Proparoxítonas"],
        correta: 2,
        feedbackAcerto: "🔬 Exato! Toda proparoxítona é acentuada.",
        feedbackErro: "Releia a regra da aula: as proparoxítonas não têm exceção — todas recebem acento.",
      },
      {
        pergunta: "4/5 — 'Açúcar' é uma paroxítona acentuada porque termina em:",
        opcoes: ["A", "R", "O"],
        correta: 1,
        feedbackAcerto: "🔬 Isso! A terminação R é uma das que exige acento nas paroxítonas.",
        feedbackErro: "Pronuncie: a-ÇÚ-car. A palavra termina em R, terminação marcada pela regra das paroxítonas.",
      },
      {
        pergunta: "5/5 — Qual das opções abaixo é uma oxítona corretamente acentuada?",
        opcoes: ["Jacaré", "Fácil", "Médico"],
        correta: 0,
        feedbackAcerto: "🔬 Perfeito investigador! ja-ca-RÉ é oxítona terminada em E. Você concluiu o primeiro caso do laboratório! 🔍",
        feedbackErro: "'Fácil' é paroxítona e 'médico' é proparoxítona; apenas 'jacaré' é oxítona.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caçando sílabas tônicas em casa",
    materiais: ["Uma lista de 10 palavras (rótulos de embalagens, nomes de familiares, objetos da casa)", "Papel e lápis"],
    passos: [
      "1) Escolham juntos 10 palavras espalhadas pela casa (rótulos, nomes, objetos).",
      "2) A criança pronuncia cada uma bem devagar e marca onde cai a força da voz.",
      "3) Para cada palavra, classifiquem: oxítona, paroxítona ou proparoxítona.",
      "4) Verifiquem juntos se a palavra tem acento escrito e expliquem por quê, usando as regras da aula.",
    ],
    registro: "🗣️ Registrem por escrito: 'A palavra ___ é ___ (oxítona/paroxítona/proparoxítona) e (tem/não tem) acento porque ___.'",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
