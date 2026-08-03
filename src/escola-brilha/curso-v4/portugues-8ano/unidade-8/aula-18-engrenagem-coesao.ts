import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 18 — Mecanismos de Coesão: A Engrenagem do Texto
 * -------------------------------------------------------------
 * BNCC: EF08LP12, EF89LP29
 */
export const aula18: AulaPortuguesV4 = {
  slug: "aula-18-engrenagem-coesao",
  titulo: "A Engrenagem do Texto",
  iconeTrilha: "⚙️",
  bncc: ["EF08LP12", "EF89LP29"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Sincronia Total: Coesão Textual",
    historia: "Analista, uma frase sozinha é apenas um bit de informação. Mas para criar um sistema robusto, as frases precisam estar CONECTADAS. No Laboratório de Argumentação, usamos a COESÃO para garantir que o pensamento flua sem travamentos. Hoje vamos aprender a usar os conectivos como engrenagens que movem o sentido do seu texto. Pronto para a sincronização?",
    imagemUrl: "/assets/portugues/lab-coesao.png"
  },
  momento02_previsao: {
    instrucao: "Briefing: A Cola das Ideias.",
    bloco: {
      titulo: "Monitoramento de Fluxo",
      pergunta: "O que acontece se um texto não tiver conectivos (como 'porque', 'entretanto')?",
      hipoteses: [
        { texto: "As ideias ficam soltas e confusas" },
        { texto: "O texto fica mais rápido de ler" },
        { texto: "Não muda nada no sistema" }
      ],
      respostaCerta: 0,
      feedbackAcerto: "Diagnóstico correto. A coesão é a cola que dá sentido ao fluxo.",
      feedbackErro: "Pense em uma corrente sem elos."
    }
  },
  momento03_vocabulario: {
    instrucao: "Termos de Engenharia",
    cards: [
      { palavra: "Coesão", explicacao: "A ligação lógica entre as partes de um texto.", exemplo: "A coesão deste parágrafo está perfeita." },
      { palavra: "Conectivo", explicacao: "Palavra que liga frases (ex: mas, pois, logo).", exemplo: "Use um conectivo de conclusão aqui." }
    ]
  },
  momento04_leituraGuiada: {
    instrucao: "Escaneando Conexões",
    leitura: {
      titulo: "O Loop da Comunicação",
      paragrafos: [
        "Estudamos muito para o teste. PORTANTO, o resultado foi positivo.",
        "Embora o tempo estivesse curto, conseguimos finalizar o projeto com sucesso."
      ],
      destacar: ["PORTANTO", "Embora"]
    }
  },
  momento05_compreensao: {
    instrucao: "Check de Dados",
    perguntas: [
      {
        pergunta: "Qual o sentido do conectivo 'PORTANTO' no texto?",
        opcoes: ["Adição", "Conclusão", "Dúvida"],
        correta: 1,
        feedbackAcerto: "Exato! Ele fecha o raciocínio iniciado na frase anterior.",
        feedbackErro: "O que vem depois do 'Portanto' é o resultado do estudo?"
      }
    ]
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: []
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Engrenagens",
    instrucao: "Veja como cada peça move o sentido da frase.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Choveu MUITO, mas saímos.", explicacao: "⚙️ Mas: Engrenagem de oposição." },
          { texto: "Choveu MUITO, logo ficamos.", explicacao: "⚙️ Logo: Engrenagem de conclusão." }
        ]
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Cadeia de Sentido",
    bloco: {
      instrucao: "Ordene para fazer sentido",
      itens: [
        { id: "1", texto: "Faltou luz no laboratório" },
        { id: "2", texto: "portanto" },
        { id: "3", texto: "os computadores desligaram" }
      ],
      ordemCerta: ["1", "2", "3"],
      feedbackAcerto: "Circuito completo!",
      feedbackErro: "A causa vem antes do resultado."
    }
  },
  momento08_leituraIndependente: {
    instrucao: "Análise Solo",
    leitura: {
      paragrafos: ["A coesão não é apenas gramática; é a forma como o cérebro organiza as prioridades de informação."],
    },
    perguntas: [
      {
        pergunta: "Para que serve a coesão no cérebro?",
        opcoes: ["Para esquecer os dados", "Para organizar prioridades", "Para falar mais rápido"],
        correta: 1,
        feedbackAcerto: "Sim! Facilita o processamento da informação.",
        feedbackErro: "Busque a palavra 'organiza' no texto."
      }
    ]
  },
  momento09_revisao: {
    pontos: ["Coesão liga as frases", "Conectivos indicam o sentido (oposição, causa, etc)", "Um texto sem coesão trava o sistema"]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual conectivo indica uma causa?",
        opcoes: ["Mas", "Porque", "Entretanto"],
        correta: 1,
        feedbackAcerto: "Correto! Explica o motivo.",
        feedbackErro: "Qual dessas palavras responde à pergunta 'Por que?'"
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "O Mestre dos Conectivos",
    materiais: ["Post-its ou pedaços de papel"],
    passos: ["Escreva 5 conectivos em papéis separados", "Tente usar todos eles em uma conversa no jantar", "Veja se as pessoas entenderam melhor suas histórias"],
    registro: "Foto dos conectivos que você usou"
  },
  recompensa: { xp: 120, moedas: 60 }
};
