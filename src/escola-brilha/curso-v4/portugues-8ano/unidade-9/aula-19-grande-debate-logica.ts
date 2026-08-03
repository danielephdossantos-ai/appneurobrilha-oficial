import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 19 — O Grande Debate: Vozes da Lógica
 * -------------------------------------------------------------
 * BNCC: EF89LP12, EF69LP10
 */
export const aula19: AulaPortuguesV4 = {
  slug: "aula-19-grande-debate-logica",
  titulo: "O Grande Debate",
  iconeTrilha: "🎙️",
  bncc: ["EF89LP12", "EF69LP10"],
  duracaoMin: 30,
  momento01_motivacao: {
    titulo: "Nível Final: Transmissão ao Vivo",
    historia: "Analista, você concluiu todos os treinamentos de retórica e lógica do 8º ano. Agora, o sistema exige uma prova final: a ORALIDADE. No Grande Debate, não basta ter o melhor código; é preciso saber transmiti-lo com voz e convicção. Hoje, vamos aprender as regras de ouro para debater com respeito e inteligência. É hora de abrir o microfone e mostrar sua força argumentativa!",
    imagemUrl: "/assets/portugues/lab-final.png"
  },
  momento02_previsao: {
    instrucao: "Briefing: As Regras do Jogo.",
    bloco: {
      titulo: "Protocolo de Argumentação Oral",
      pergunta: "Qual é a regra mais importante em um debate saudável?",
      hipoteses: [
        { texto: "Ouvir o outro lado e responder com respeito" },
        { texto: "Interromper quem fala mais alto" },
        { texto: "Gritar para ser ouvido por todos" }
      ],
      respostaCerta: 0,
      feedbackAcerto: "Ética de debate validada. O respeito é a base da democracia.",
      feedbackErro: "Pense no que torna um debate construtivo."
    }
  },
  momento03_vocabulario: {
    instrucao: "Termos do Palco",
    cards: [
      { palavra: "Réplica", explicacao: "A resposta ao que o seu oponente disse.", exemplo: "Ele fez uma réplica muito educada." },
      { palavra: "Moderação", explicacao: "O ato de controlar o tempo e as regras do debate.", exemplo: "A professora fez a moderação do debate na sala." }
    ]
  },
  momento04_leituraGuiada: {
    instrucao: "Escaneando a Ética",
    leitura: {
      titulo: "Manual do Debatedor Mestre",
      paragrafos: [
        "Debater é o exercício de discordar sem desrespeitar. Em um debate formal, cada lado tem um tempo fixo para apresentar sua tese.",
        "O foco deve ser sempre nas ideias, nunca no ataque pessoal ao oponente."
      ],
      destacar: ["discordar sem desrespeitar", "ataque pessoal"]
    }
  },
  momento05_compreensao: {
    instrucao: "Check de Dados",
    perguntas: [
      {
        pergunta: "O que o manual diz sobre atacar o oponente?",
        opcoes: ["Que é necessário para vencer", "Que nunca deve ser feito", "Que é opcional"],
        correta: 1,
        feedbackAcerto: "Sim! Ataques pessoais (ad hominem) invalidam o argumento lógico.",
        feedbackErro: "Releia o último parágrafo do manual."
      }
    ]
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: []
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Voz: Tom e Pausa",
    instrucao: "Analise como a voz impacta o receptor.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "FALE COM CLAREZA.", explicacao: "🎙️ O tom firme e pausado transmite segurança." },
          { texto: "OUÇA COM ATENÇÃO.", explicacao: "👂 A escuta ativa permite encontrar as falhas na lógica do outro." }
        ]
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Ciclo do Debate",
    bloco: {
      instrucao: "Ordene o fluxo de um debate",
      itens: [
        { id: "1", texto: "Apresentação da Tese" },
        { id: "2", texto: "Réplica do Oponente" },
        { id: "3", texto: "Tréplica (Sua resposta final)" }
      ],
      ordemCerta: ["1", "2", "3"],
      feedbackAcerto: "Fluxo de transmissão perfeito!",
      feedbackErro: "A réplica sempre vem depois do primeiro argumento."
    }
  },
  momento08_leituraIndependente: {
    instrucao: "Análise Solo",
    leitura: {
      paragrafos: ["Debates públicos em democracias são essenciais para que as melhores ideias para a sociedade sejam escolhidas."],
    },
    perguntas: [
      {
        pergunta: "Por que os debates são essenciais na democracia?",
        opcoes: ["Para as pessoas brigarem", "Para escolher as melhores ideias", "Para ver quem grita mais"],
        correta: 1,
        feedbackAcerto: "Excelente visão social!",
        feedbackErro: "Foque na parte de 'melhores ideias' no texto."
      }
    ]
  },
  momento09_revisao: {
    pontos: ["Debate exige respeito e lógica", "Oralidade pede tom firme e clareza", "O foco é na ideia, não na pessoa"]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Como se chama a resposta ao argumento do oponente?",
        opcoes: ["Tese", "Réplica", "Enunciado"],
        correta: 1,
        feedbackAcerto: "Isso mesmo! Réplica.",
        feedbackErro: "Veja os termos do palco no momento 03."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Podcast em Família",
    materiais: ["Celular para gravar (opcional)"],
    passos: ["Escolha um tema polêmico e divertido (ex: pizza com ou sem abacaxi?)", "Cada um defende seu lado por 1 minuto", "Grave ou apenas debatam seguindo as regras de ouro"],
    registro: "Áudio ou anotação do vencedor do debate lógico"
  },
  recompensa: { xp: 500, moedas: 250, medalha: "Mestre da Retórica" }
};
