import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 2 — Os Porquês
 * -------------------------------------------------------------
 * Unidade 2 (Laboratório da Ortografia). Investigação sobre as
 * quatro formas de escrever "porque": por que, porque, por quê,
 * porquê. Foco em reconhecer contexto (pergunta, resposta, final de
 * frase, substantivo) para escolher a forma correta.
 *
 * BNCC: EF05LP01, EF05LP03, EF35LP04
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-os-porques",
  titulo: "Os Quatro Porquês",
  iconeTrilha: "🔎",
  bncc: ["EF05LP01", "EF05LP03", "EF35LP04"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "O Caso das Quatro Palavras Gêmeas",
    historia:
      "A investigadora recebeu um envelope com quatro fichas idênticas na aparência: 'por que', 'porque', 'por quê' e 'porquê'. — Parecem a mesma coisa, mas cada uma tem uma função diferente na cena do crime gramatical. Hoje vamos aprender a diferenciar as quatro só pelo contexto em que aparecem. Bora abrir o dossiê?",
  },

  momento02_previsao: {
    instrucao: "Observe estas duas frases-pista antes de começar a investigação.",
    bloco: {
      titulo: "Duas Frases sob Suspeita",
      recado: {
        rotulo: "Frases encontradas na cena",
        icone: "📋",
        linhas: ["Você sabe ___ o museu fechou hoje?", "O museu fechou ___ estava em reforma."],
        estilo: "papel",
      },
      pergunta: "Qual das lacunas provavelmente é preenchida com a forma separada 'por que' (usada em perguntas)?",
      hipoteses: [
        { texto: "A primeira frase, que é uma pergunta indireta" },
        { texto: "A segunda frase, que dá uma explicação" },
        { texto: "Nenhuma das duas" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔎 Isso mesmo! A primeira frase pergunta 'você sabe por que...', então usa 'por que' separado. A segunda dá uma EXPLICAÇÃO ('porque estava em reforma'), então usa 'porque' junto.",
      feedbackErro:
        "Repare: a primeira frase faz uma pergunta ('você sabe...?'), e perguntas pedem 'por que' separado. A segunda frase explica um motivo, o que pede 'porque' junto.",
    },
  },

  momento03_vocabulario: {
    instrucao: "As quatro fichas do dossiê, uma por uma.",
    cards: [
      {
        palavra: "por que",
        explicacao:
          "Separado e sem acento. Usado em perguntas (diretas ou indiretas) e sempre que puder ser trocado por 'por qual motivo'.",
        exemplo: "Por que você chegou atrasado? / Não sei por que ele saiu.",
      },
      {
        palavra: "porque",
        explicacao: "Junto e sem acento. Usado para dar uma explicação ou resposta — equivale a 'pois' ou 'já que'.",
        exemplo: "Cheguei atrasado porque perdi o ônibus.",
      },
      {
        palavra: "por quê",
        explicacao: "Separado e COM acento. Usado no final de frase ou sozinho, geralmente antes de ponto de interrogação ou final.",
        exemplo: "Você chegou atrasado por quê? / Ele não veio, mas ninguém sabe por quê.",
      },
      {
        palavra: "porquê",
        explicacao: "Junto e COM acento. É um SUBSTANTIVO — significa 'o motivo' ou 'a causa'. Por isso, geralmente vem com artigo (o, um, esse).",
        exemplo: "Ninguém entendeu o porquê da sua ausência.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relatório e observe como cada 'porquê' aparece em um contexto diferente.",
    leitura: {
      titulo: "Relatório: A Regra dos Quatro Porquês",
      destacar: ["por que", "porque", "por quê", "porquê"],
      paragrafos: [
        "A investigadora explicou ao estagiário: 'Repare que 'por que' separado aparece em perguntas — diretas, como \"Por que a porta estava aberta?\", ou indiretas, como \"Quero saber por que a porta estava aberta\". Nos dois casos, dá pra trocar por \"por qual motivo\" sem estranhar.'",
        "Já 'porque' junto aparece quando a frase EXPLICA algo, como resposta a um \"por quê\". Por exemplo: 'A porta estava aberta porque o vento a empurrou.' Aqui, 'porque' equivale a 'pois' — introduz o motivo, não pergunta por ele.",
        "'Por quê' separado e com acento aparece isolado, geralmente no fim da frase ou sozinho: 'A porta estava aberta, mas por quê?'. E 'porquê' junto e com acento é um substantivo, o nome que damos ao motivo em si: 'Ninguém explicou o porquê da porta aberta.' Se dá pra colocar 'o', 'um' ou 'esse' antes, é esse porquê substantivo."
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relatório para confirmar cada regra.",
    perguntas: [
      {
        pergunta: "Segundo o relatório, quando usamos 'por que' separado?",
        opcoes: [
          "Em perguntas, diretas ou indiretas",
          "Apenas no final de frases",
          "Apenas quando é substantivo",
        ],
        correta: 0,
        feedbackAcerto: "🔎 Isso! O texto explica que 'por que' aparece em perguntas diretas ou indiretas.",
        feedbackErro: "Releia o primeiro parágrafo: ele fala em perguntas diretas e indiretas.",
        ondeEstaNoTexto: "'por que' separado aparece em perguntas — diretas... ou indiretas",
      },
      {
        pergunta: "O que significa 'porquê' (junto e com acento) segundo o texto?",
        opcoes: [
          "É uma pergunta direta",
          "É um substantivo, o nome do motivo",
          "É sempre usado no início da frase",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Correto! O texto diz que é 'o nome que damos ao motivo em si'.",
        feedbackErro: "Releia o terceiro parágrafo: 'porquê' junto é chamado de substantivo, o nome do motivo.",
        ondeEstaNoTexto: "'porquê' junto e com acento é um substantivo, o nome que damos ao motivo em si",
      },
      {
        pergunta: "Qual truque o texto sugere para identificar o 'porquê' substantivo?",
        opcoes: [
          "Ver se pode vir antecedido de artigo (o, um, esse)",
          "Ver se a frase é uma pergunta",
          "Ver se a palavra está no início da frase",
        ],
        correta: 0,
        feedbackAcerto: "🔎 Exato! O texto diz: 'se dá pra colocar o, um ou esse antes, é esse porquê substantivo'.",
        feedbackErro: "Releia o final do último parágrafo — ele dá esse truque específico.",
        ondeEstaNoTexto: "Se dá pra colocar 'o', 'um' ou 'esse' antes, é esse porquê substantivo.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Aplique as regras em novos casos do dossiê.",
    perguntas: [
      {
        pergunta: "Complete: 'Não entendi ___ você não veio à reunião.'",
        opcoes: ["por que", "porque", "porquê"],
        correta: 0,
        feedbackAcerto: "🔎 Isso! É uma pergunta indireta — 'não entendi por que...' equivale a 'não entendi por qual motivo'.",
        feedbackErro: "Teste a troca por 'por qual motivo': funciona perfeitamente, então é 'por que' separado, sem acento (não está isolado no fim).",
      },
      {
        pergunta: "Complete: 'Ela chegou cedo ___ pegou o primeiro ônibus.'",
        opcoes: ["por que", "porque", "por quê"],
        correta: 1,
        feedbackAcerto: "🔎 Correto! A frase EXPLICA o motivo, então usa 'porque' junto e sem acento.",
        feedbackErro: "A frase dá uma explicação (equivale a 'pois pegou o ônibus'), então é 'porque' junto e sem acento.",
      },
      {
        pergunta: "Complete: 'Ele saiu sem avisar ninguém, mas ___?'",
        opcoes: ["porque", "por quê", "porquê"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! A palavra está isolada no final da frase, antes do ponto de interrogação — por isso é 'por quê' separado e com acento.",
        feedbackErro: "Quando a palavra fica sozinha no final da frase, geralmente antes de ponto final ou de interrogação, usa-se 'por quê' separado e com acento.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o raciocínio para escolher o 'porquê' certo em qualquer frase.",
    bloco: {
      instrucao: "Ordem correta do método de investigação dos porquês.",
      itens: [
        { id: "p1", texto: "Verifique se a frase é uma pergunta (ou pode ser trocada por 'por qual motivo')." },
        { id: "p2", texto: "Se for pergunta, mas a palavra está isolada no fim: use 'por quê', com acento." },
        { id: "p3", texto: "Se a frase dá uma explicação/motivo: use 'porque', junto e sem acento." },
        { id: "p4", texto: "Se a palavra funciona como substantivo (aceita artigo antes): use 'porquê', junto e com acento." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔎 Perfeito! Esse é o roteiro de investigação: pergunta ou explicação, isolado ou substantivo.",
      feedbackErro: "Pense no roteiro: primeiro veja se é pergunta, depois se está isolada, depois se explica um motivo, e por fim se é substantivo.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo bilhete no laboratório! Leia sozinho e identifique os porquês usados.",
    leitura: {
      titulo: "O Bilhete da Sala de Ciências",
      destacar: ["por que", "porque", "porquê"],
      paragrafos: [
        "Um bilhete apareceu preso na porta do laboratório: 'Alunos, por que o experimento de ontem não funcionou? Descobrimos que foi porque o frasco estava mal fechado.'",
        "No verso, havia mais uma frase: 'O professor pediu que expliquemos o porquê do erro no relatório desta semana.'",
        "A investigadora sorriu: 'Veja, temos os três tipos no mesmo bilhete: uma pergunta indireta, uma explicação e um substantivo.'",
      ],
    },
    perguntas: [
      {
        pergunta: "No trecho 'por que o experimento de ontem não funcionou', o uso é:",
        opcoes: ["Pergunta (por que separado)", "Explicação (porque junto)", "Substantivo (porquê)"],
        correta: 0,
        feedbackAcerto: "🔎 Isso! É uma pergunta direta, por isso 'por que' vem separado e sem acento.",
        feedbackErro: "Releia: a frase pergunta algo, terminando em ponto de interrogação — isso pede 'por que' separado.",
        ondeEstaNoTexto: "por que o experimento de ontem não funcionou?",
      },
      {
        pergunta: "No trecho 'expliquemos o porquê do erro', o uso é:",
        opcoes: ["Pergunta", "Explicação", "Substantivo, pois vem com o artigo 'o'"],
        correta: 2,
        feedbackAcerto: "🔎 Exato! 'O porquê' funciona como substantivo, equivalente a 'o motivo do erro'.",
        feedbackErro: "Repare no artigo 'o' antes de 'porquê' — esse é o sinal de que a palavra é um substantivo.",
        ondeEstaNoTexto: "expliquemos o porquê do erro no relatório",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "POR QUE (separado, sem acento): usado em perguntas diretas e indiretas — equivale a 'por qual motivo'.",
      "PORQUE (junto, sem acento): usado para explicar um motivo — equivale a 'pois'.",
      "POR QUÊ (separado, com acento): usado isolado, geralmente no final da frase.",
      "PORQUÊ (junto, com acento): é um substantivo, o 'motivo' — costuma vir com artigo (o, um, esse).",
    ],
    miniDesafio: {
      pergunta: "Complete: 'Ainda não sei o ___ de tanto silêncio na sala.'",
      opcoes: ["por que", "porque", "porquê"],
      correta: 2,
      feedbackAcerto: "🔎 Isso! 'O porquê' é substantivo aqui, equivalente a 'o motivo'.",
      feedbackErro: "Repare no artigo 'o' antes da lacuna — isso indica o uso do substantivo 'porquê', junto e com acento.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual forma é usada em perguntas diretas ou indiretas?",
        opcoes: ["porque", "por que", "porquê"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! 'Por que' separado é usado em perguntas.",
        feedbackErro: "Perguntas usam 'por que' separado e sem acento.",
      },
      {
        pergunta: "2/5 — Complete: 'Choveu muito ___ o rio transbordou.'",
        opcoes: ["porque", "por que", "por quê"],
        correta: 0,
        feedbackAcerto: "🔎 Correto! A frase dá uma explicação, então usa 'porque' junto.",
        feedbackErro: "A frase explica um motivo (equivale a 'pois'), então é 'porque' junto e sem acento.",
      },
      {
        pergunta: "3/5 — Qual forma é um substantivo e costuma vir com artigo?",
        opcoes: ["por quê", "porquê", "por que"],
        correta: 1,
        feedbackAcerto: "🔎 Exato! 'Porquê' junto e com acento é substantivo.",
        feedbackErro: "O substantivo é 'porquê' (junto, com acento) — costuma vir acompanhado de 'o', 'um' ou 'esse'.",
      },
      {
        pergunta: "4/5 — Complete: 'Ele não respondeu, e ninguém sabe ___.'",
        opcoes: ["porque", "por quê", "porquê"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! A palavra está isolada no fim da frase, por isso 'por quê' separado e com acento.",
        feedbackErro: "Quando a palavra aparece sozinha ao final da frase, usamos 'por quê' separado e com acento.",
      },
      {
        pergunta: "5/5 — Complete: 'Quero entender ___ você mudou de ideia.'",
        opcoes: ["por que", "porque", "porquê"],
        correta: 0,
        feedbackAcerto: "🔎 Muito bem, investigador! É pergunta indireta, por isso 'por que' separado. Caso encerrado! 🔍",
        feedbackErro: "Teste a troca: 'entender por qual motivo' funciona — então é 'por que' separado, sem acento.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: o caçador de porquês",
    materiais: ["Um texto qualquer em casa (jornal, livro, mensagem)", "Papel e lápis coloridos"],
    passos: [
      "1) Encontrem juntos, num texto qualquer, exemplos de 'porque' (de qualquer tipo).",
      "2) Para cada um, decidam: é pergunta, explicação, isolado no fim ou substantivo?",
      "3) Se não encontrarem os quatro tipos, criem juntos uma frase para cada tipo que faltar.",
      "4) Leiam as frases em voz alta, destacando cada 'porquê' com uma cor diferente.",
    ],
    registro: "🗣️ Registrem: 'Encontramos/criamos uma frase com POR QUE, uma com PORQUE, uma com POR QUÊ e uma com PORQUÊ.'",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
