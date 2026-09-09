import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 17 — Protocolo de Debate: Artigo de Opinião
 * -------------------------------------------------------------
 * BNCC: EF08LP03, EF89LP04
 */
export const aula17: AulaPortuguesV4 = {
  slug: "aula-17-protocolo-debate-artigo",
  titulo: "O Protocolo do Debate",
  iconeTrilha: "🗣️",
  bncc: ["EF08LP03", "EF89LP04"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Upgrade de Argumento: O Artigo de Opinião",
    historia: "Analista, você já aprendeu a escanear teses. Agora vamos subir o nível. No Laboratório de Argumentação, o ARTIGO DE OPINIÃO é o software que permite a um autor influenciar toda uma rede de leitores. Hoje, vamos aprender a mapear as estratégias de convencimento que os articulistas usam para ganhar o debate público. Pronto para o upgrade?",
    imagemUrl: "/assets/portugues/lab-debate.png"
  },
  momento02_previsao: {
    instrucao: "Briefing: A Lógica do Artigo.",
    bloco: {
      titulo: "Arquitetura da Influência",
      pergunta: "Em um artigo de opinião, qual é a principal ferramenta do autor?",
      hipoteses: [
        { texto: "Usar argumentos lógicos e provas" },
        { texto: "Apenas contar uma história engraçada" },
        { texto: "Falar palavras difíceis para confundir" }
      ],
      respostaCerta: 0,
      feedbackAcerto: "Lógica validada. O autor usa argumentos para sustentar sua tese.",
      feedbackErro: "Pense no objetivo: convencer o leitor."
    }
  },
  momento03_vocabulario: {
    instrucao: "Termos do Debate",
    cards: [
      { palavra: "Articulista", explicacao: "A pessoa que escreve o artigo de opinião.", exemplo: "O articulista defendeu o uso de energias limpas." },
      { palavra: "Contrargumento", explicacao: "Um argumento usado para rebater a ideia de outra pessoa.", exemplo: "Ela apresentou um contrargumento forte contra a proibição." }
    ]
  },
  momento04_leituraGuiada: {
    instrucao: "Escaneando o Artigo",
    leitura: {
      titulo: "A Inteligência que nos Une",
      paragrafos: [
        "A tecnologia nas escolas não deve ser vista como um gasto, mas como o investimento mais rentável para uma nação.",
        "Muitos dizem que os computadores isolam os alunos. No entanto, quando usados com mediação, eles ampliam o acesso ao conhecimento global."
      ],
      destacar: ["investimento", "No entanto"]
    }
  },
  momento05_compreensao: {
    instrucao: "Check de Dados",
    perguntas: [
      {
        pergunta: "Qual contrargumento o autor menciona no texto?",
        opcoes: ["Que computadores são caros", "Que computadores isolam os alunos", "Que a internet é lenta"],
        correta: 1,
        feedbackAcerto: "Exato! Ele cita a ideia contrária para depois derrubá-la com lógica.",
        feedbackErro: "Busque a parte que diz 'Muitos dizem que...'"
      }
    ]
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: []
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Conectores: Oposição",
    instrucao: "Veja como o conector 'No entanto' muda a direção da conversa.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O sistema é complexo. NO ENTANTO, ele é eficiente.", explicacao: "💡 OPOSIÇÃO: O conector introduz uma ideia que contrasta com a anterior." }
        ]
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Estrutura do Convencimento",
    bloco: {
      instrucao: "Ordene as partes do artigo",
      itens: [
        { id: "1", texto: "Contexto (O problema)" },
        { id: "2", texto: "Tese (Minha posição)" },
        { id: "3", texto: "Refutação (Derrubando o outro lado)" }
      ],
      ordemCerta: ["1", "2", "3"],
      feedbackAcerto: "Lógica sequenciada!",
      feedbackErro: "Apresente o problema antes de dar sua opinião."
    }
  },
  momento08_leituraIndependente: {
    instrucao: "Análise Solo",
    leitura: {
      paragrafos: ["Artigos de opinião em jornais ajudam a formar a consciência crítica dos cidadãos sobre temas urgentes."],
    },
    perguntas: [
      {
        pergunta: "Onde costumamos encontrar artigos de opinião?",
        opcoes: ["Em livros de receitas", "Em jornais e portais de notícia", "Em dicionários"],
        correta: 1,
        feedbackAcerto: "Correto! São gêneros do campo jornalístico-midiático.",
        feedbackErro: "Pense em onde as pessoas discutem as notícias do dia."
      }
    ]
  },
  momento09_revisao: {
    pontos: ["Artigo de opinião defende um ponto de vista", "Usa contrargumentos para fortalecer a tese", "Publicado em meios de comunicação"]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Quem escreve o artigo de opinião?",
        opcoes: ["O leitor", "O articulista", "O personagem"],
        correta: 1,
        feedbackAcerto: "Isso mesmo!",
        feedbackErro: "Revisite o momento de Vocabulário."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Articulista por um Dia",
    materiais: ["Bloco de notas"],
    passos: ["Escolha um tema polêmico da sua rua", "Escreva um parágrafo defendendo sua ideia", "Use 'No entanto' para rebater uma crítica"],
    registro: "Foto do seu mini-artigo"
  },
  recompensa: { xp: 150, moedas: 75 }
};
