import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 29 — Modos e Tempos Verbais: O Cronômetro de Ações
 * -------------------------------------------------------------
 * Modos indicativo, subjuntivo, imperativo e seus tempos principais.
 *
 * BNCC: EF07LP10
 */
export const aula29: AulaPortuguesV4 = {
  slug: "aula-29-modos-e-tempos-verbais",
  titulo: "Modos e Tempos Verbais",
  iconeTrilha: "⏱️",
  bncc: ["EF07LP10"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "O Cronômetro de Ações",
    historia: "Analista, cada verbo do Observatório carrega duas informações essenciais: QUANDO a ação acontece e COM QUE ATITUDE ela é dita. É certeza, dúvida ou ordem? Isso se chama modo verbal. E o tempo verbal marca se a ação já ocorreu, está ocorrendo ou vai ocorrer. Hoje você vai calibrar o Cronômetro de Ações e nunca mais confundir 'eu fiz' com 'eu faça' ou 'faça você'.",
    imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Modos de Atitude Verbal.",
    bloco: {
      titulo: "Painel do Cronômetro",
      capaImagemUrl: "",
      pistas: [
        { nome: "O modo indicativo expressa certeza sobre um fato.", imagemUrl: "" },
        { nome: "O modo imperativo expressa ordem, pedido ou conselho.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Modos Verbais",
        icone: "⏱️",
        linhas: [
          "  [ MODOS VERBAIS ]            ",
          "                               ",
          "  INDICATIVO: 'Eu analiso.'    ",
          "     (certeza, fato real)      ",
          "                               ",
          "  SUBJUNTIVO: 'Se eu analisasse'",
          "     (dúvida, hipótese)        ",
          "                               ",
          "  IMPERATIVO: 'Analise!'       ",
          "     (ordem, pedido)           ",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que o modo verbal indica sobre a ação expressa pelo verbo?",
      hipoteses: [
        { texto: "A atitude do falante: certeza, dúvida ou ordem" },
        { texto: "Apenas o gênero do sujeito" },
        { texto: "O número de letras da palavra" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Cronômetro calibrado. O modo verbal indica a atitude do falante diante do fato.",
      feedbackErro: "Compare 'eu analiso' (certeza) com 'analise!' (ordem).",
      dica: "Pense em como muda o tom entre afirmar algo e dar uma ordem.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Peças do Tempo.",
    cards: [
      { palavra: "Modo indicativo", explicacao: "Expressa certeza, fatos reais ou ações concretas.", exemplo: "Os sensores captam o sinal.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Modo subjuntivo", explicacao: "Expressa dúvida, desejo ou hipótese sobre uma ação.", exemplo: "Espero que o sistema funcione amanhã.", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Modo imperativo", explicacao: "Expressa ordem, pedido ou conselho.", exemplo: "Verifique os dados antes de enviar o relatório.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório do Tempo: Linha Temporal dos Verbos",
    instrucao: "Veja como o tempo verbal marca o momento da ação no modo indicativo.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Eu analiso os dados agora.",
            explicacao: "💡 PRESENTE DO INDICATIVO: a ação acontece no momento da fala.\n> Ex: 'Eu estudo todo dia.' e 'Ela trabalha no laboratório.'",
          },
          {
            texto: "Eu analisei os dados ontem.",
            explicacao: "💡 PRETÉRITO PERFEITO DO INDICATIVO: a ação já aconteceu e terminou.\n> Ex: 'Eu estudei ontem.' e 'Ela chegou cedo.'",
          },
          {
            texto: "Eu analisarei os dados amanhã.",
            explicacao: "💡 FUTURO DO PRESENTE DO INDICATIVO: a ação ainda vai acontecer.\n> Ex: 'Eu estudarei mais.' e 'Ela chegará cedo.'",
          },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Cronômetro que Marca as Ações",
      imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      destacar: ["modo", "tempo", "indicativo", "subjuntivo", "imperativo"],
      paragrafos: [
        "No Observatório, todo verbo carrega duas informações: o modo, que revela a atitude de quem fala, e o tempo, que marca quando a ação acontece.",
        "O modo indicativo é usado para afirmar fatos com segurança: 'o robô funciona perfeitamente'. Dentro dele, o tempo pode variar entre presente ('funciona'), pretérito ('funcionou') e futuro ('funcionará').",
        "Já o modo subjuntivo expressa dúvida, desejo ou possibilidade: 'espero que o robô funcione' não é uma certeza, mas uma expectativa. O modo imperativo, por sua vez, serve para dar ordens ou pedidos diretos: 'verifique o robô agora'.",
        "Saber diferenciar esses modos evita erros comuns, como usar 'se eu ver' no lugar de 'se eu visse', e ajuda o Analista a escolher o tom certo para cada tipo de mensagem — informar, desejar ou ordenar."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, para que serve o modo indicativo?",
        opcoes: ["Para afirmar fatos com segurança", "Para dar ordens diretas", "Para expressar apenas dúvidas", "Para fazer perguntas retóricas"],
        correta: 0,
        feedbackAcerto: "Correto! O indicativo afirma fatos com segurança.",
        feedbackErro: "Releia o segundo parágrafo do texto.",
        ondeEstaNoTexto: "O modo indicativo é usado para afirmar fatos com segurança",
        dica: "Pense no exemplo 'o robô funciona perfeitamente'.",
        reensino: "Revise o card 'Modo indicativo' no momento 03.",
      },
      {
        pergunta: "O que o modo subjuntivo expressa, segundo o texto?",
        opcoes: ["Dúvida, desejo ou possibilidade", "Uma ordem direta", "Um fato absolutamente certo", "Apenas o passado"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! O subjuntivo expressa dúvida, desejo ou possibilidade.",
        feedbackErro: "Releia o trecho sobre 'espero que o robô funcione'.",
        ondeEstaNoTexto: "o modo subjuntivo expressa dúvida, desejo ou possibilidade",
        dica: "Compare com o card 'Modo subjuntivo' no momento 03.",
        reensino: "Revise o Laboratório do Tempo e o card de vocabulário.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console do Cronômetro Verbal",
    instrucao: "Escreva frases usando diferentes modos e tempos verbais.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Relatório Temporal",
        comando: "Escreva 4 frases sobre uma missão no Observatório: uma no presente do indicativo, uma no pretérito, uma no subjuntivo (desejo) e uma no imperativo (ordem).",
        modelo: [
          "Presente: O analista verifica os dados.",
          "Pretérito: O analista verificou os dados ontem.",
          "Subjuntivo: Espero que o analista verifique os dados.",
          "Imperativo: Verifique os dados agora!",
        ],
        checklist: [
          "Escrevi uma frase no presente do indicativo?",
          "Escrevi uma frase no pretérito?",
          "Escrevi uma frase no subjuntivo e uma no imperativo?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Identificação de Modo e Tempo",
    bloco: {
      instrucao: "Organize o processo de análise de um verbo em uma frase.",
      itens: [
        { id: "1", texto: "🔎 LOCALIZAR O VERBO: Encontre a palavra que expressa a ação.", imagemUrl: "" },
        { id: "2", texto: "🧭 IDENTIFICAR O MODO: Verifique se é certeza (indicativo), dúvida (subjuntivo) ou ordem (imperativo).", imagemUrl: "" },
        { id: "3", texto: "⏱️ IDENTIFICAR O TEMPO: Verifique se a ação é passada, presente ou futura.", imagemUrl: "" },
        { id: "4", texto: "✅ CONFIRMAR O SENTIDO: Junte modo e tempo para entender a mensagem completa.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Cronômetro calibrado! Você domina modo e tempo verbal como um verdadeiro Analista.",
      feedbackErro: "A análise falhou. Primeiro ache o verbo, depois defina modo e tempo.",
      dica: "Sem localizar o verbo, não há como identificar modo e tempo.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Relatório de Campo.",
    leitura: {
      titulo: "Relatório: Ordens da Base Central",
      imagemUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
      destacar: ["revise", "esperamos que", "concluiu"],
      paragrafos: [
        "A base central enviou uma mensagem direta: 'Revise todos os sensores antes do anoitecer'.",
        "A equipe de campo esperamos que o sistema resista às próximas tempestades solares.",
        "Ontem, o técnico concluiu a manutenção e confirmou que tudo estava dentro do esperado."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual verbo do relatório está no modo imperativo?",
        opcoes: ["Revise", "Esperamos", "Concluiu", "Confirmou"],
        correta: 0,
        feedbackAcerto: "Exato! 'Revise' é uma ordem direta, típica do modo imperativo.",
        feedbackErro: "Observe qual verbo aparece entre aspas como uma mensagem direta.",
        dica: "Pense em qual verbo dá uma ordem, não afirma um fato.",
        reensino: "Revise o card 'Modo imperativo' no momento 03.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "O modo indicativo expressa certeza sobre fatos reais.",
      "O modo subjuntivo expressa dúvida, desejo ou possibilidade.",
      "O modo imperativo expressa ordens, pedidos ou conselhos.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual modo verbal expressa certeza sobre um fato?",
        opcoes: ["Indicativo", "Subjuntivo", "Imperativo", "Nenhum deles"],
        correta: 0,
        feedbackAcerto: "Correto! O indicativo expressa certeza sobre fatos reais.",
        feedbackErro: "Revise o card 'Modo indicativo' no momento 03.",
        ondeEstaNoTexto: "O modo indicativo é usado para afirmar fatos com segurança",
        dica: "Pense no exemplo 'o robô funciona perfeitamente'.",
        reensino: "Revise o momento 03 do vocabulário.",
      },
      {
        pergunta: "Em qual frase o verbo está no modo imperativo?",
        opcoes: ["Verifique os dados agora!", "O analista verifica os dados.", "O analista verificou os dados.", "Espero que verifique os dados."],
        correta: 0,
        feedbackAcerto: "Isso! 'Verifique' dá uma ordem direta, característica do imperativo.",
        feedbackErro: "Busque a frase que soa como um comando direto.",
        ondeEstaNoTexto: "Verifique os dados agora!",
        dica: "Reveja o Console do Cronômetro Verbal.",
        reensino: "Revise o momento de escrita desta aula.",
      },
      {
        pergunta: "Qual frase está no futuro do presente do indicativo?",
        opcoes: ["Eu analisarei os dados amanhã.", "Eu analiso os dados agora.", "Eu analisei os dados ontem.", "Analise os dados agora!"],
        correta: 0,
        feedbackAcerto: "Perfeito! 'Analisarei' indica uma ação que ainda vai acontecer.",
        feedbackErro: "Observe a terminação do verbo que indica futuro.",
        ondeEstaNoTexto: "Eu analisarei os dados amanhã",
        dica: "Reveja o Laboratório do Tempo: Linha Temporal dos Verbos.",
        reensino: "Revise o momento de ensino visual desta aula.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Cronômetro",
    materiais: ["Papel", "Caneta", "Membros da família"],
    passos: [
      "Escolha um verbo comum, como 'estudar' ou 'brincar'.",
      "Conjugue-o no presente, no pretérito e no futuro do indicativo.",
      "Crie uma frase com esse verbo no modo subjuntivo (desejo) e outra no imperativo (ordem).",
      "Leia as frases para a família e explique qual atitude cada uma expressa."
    ],
    registro: "Escreva no caderno: 'Missão Cronômetro - Meu verbo escolhido foi [X] e suas formas foram [Y, Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
