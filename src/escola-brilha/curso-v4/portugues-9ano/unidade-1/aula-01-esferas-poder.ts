import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 1 — Esferas de Poder: O Discurso e a Ideologia
 * -------------------------------------------------------------
 * Foco em desconstrução de discursos e identificação de ideologias.
 *
 * BNCC: EF09LP01, EF09LP02
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-esferas-poder",
  titulo: "Esferas de Poder",
  iconeTrilha: "📡",
  bncc: ["EF09LP01", "EF09LP02"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Sinal Detectado",
    historia: "Bem-vindo ao 9º Ano. Aqui, as palavras não são apenas ferramentas; elas são o campo de batalha. Vamos aprender a ler o que não está escrito e a falar o que ninguém mais consegue expressar.",
    imagemUrl: "/assets/portugues/epicentro.png"
  },
  momento02_previsao: {
    instrucao: "Análise de Frequência.",
    bloco: {
      titulo: "Interceptação Ideológica",
      pergunta: "O que define uma 'esfera de poder' na comunicação?",
      hipoteses: [
        { texto: "O local e as regras que definem como falamos" },
        { texto: "Apenas o volume da voz de quem fala" },
        { texto: "O número de palavras difíceis usadas" }
      ],
      respostaCerta: 0,
      feedbackAcerto: "Frequência sintonizada. Você percebeu que o contexto define o poder do discurso.",
      feedbackErro: "Pense na diferença entre falar no tribunal e falar no WhatsApp."
    }
  },
  momento03_vocabulario: {
    instrucao: "Léxico de Elite",
    cards: [
      { palavra: "Ideologia", explicacao: "Conjunto de ideias que orienta a visão de mundo.", exemplo: "O texto possui uma ideologia de preservação ambiental." },
      { palavra: "Intertextualidade", explicacao: "Quando um texto conversa com outro.", exemplo: "O filme fez uma intertextualidade com o livro clássico." }
    ]
  },
  momento04_leituraGuiada: {
    instrucao: "Escaneamento Profundo",
    leitura: {
      titulo: "O Manifesto da Era Digital",
      paragrafos: [
        "A neutralidade da rede é a espinha dorsal da democracia moderna. Sem ela, o fluxo de informação seria controlado por interesses puramente corporativos.",
        "A resistência digital não é uma escolha, mas uma necessidade para quem deseja manter a soberania do pensamento crítico."
      ],
      destacar: ["neutralidade da rede", "soberania do pensamento crítico"]
    }
  },
  momento05_compreensao: {
    instrucao: "Validação de Dados",
    perguntas: [
      {
        pergunta: "Qual é o 'inimigo' implícito no manifesto?",
        opcoes: ["A internet lenta", "Os interesses corporativos", "Os usuários comuns"],
        correta: 1,
        feedbackAcerto: "Análise precisa. O texto se posiciona contra o controle corporativo.",
        feedbackErro: "Releia o primeiro parágrafo sobre o controle da informação."
      }
    ]
  },
  momento06_personagensCenario: {
    instrucao: "Mapeamento de Atores",
    perguntas: [
      {
        pergunta: "A quem este manifesto tenta recrutar?",
        opcoes: ["Consumidores passivos", "Defensores do pensamento crítico", "Técnicos de informática"],
        correta: 1,
        feedbackAcerto: "Alvo identificado!",
        feedbackErro: "Busque no texto quem é chamado para a 'resistência'."
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Algoritmo Narrativo",
    bloco: {
      instrucao: "Reconstrua a lógica do manifesto",
      itens: [
        { id: "1", texto: "Consequência: Perda da democracia" },
        { id: "2", texto: "Contexto: Neutralidade da rede" },
        { id: "3", texto: "Ação: Resistência digital" }
      ],
      ordemCerta: ["2", "1", "3"],
      feedbackAcerto: "Lógica reconstruída!",
      feedbackErro: "O texto parte do contexto, mostra o risco e propõe a ação."
    }
  },
  momento08_leituraIndependente: {
    instrucao: "Decodificação Autônoma",
    leitura: {
      paragrafos: ["Todo texto é um ato político. Até o silêncio comunica uma posição quando a justiça está em jogo."],
    },
    perguntas: [
      {
        pergunta: "O que o autor quer dizer com 'o silêncio comunica'?",
        opcoes: ["Que ficar quieto é bom", "Que a omissão também é uma escolha", "Que não há o que dizer"],
        correta: 1,
        feedbackAcerto: "Exato. O silêncio é uma mensagem de neutralidade ou conivência.",
        feedbackErro: "Pense no impacto de não falar nada durante uma injustiça."
      }
    ]
  },
  momento09_revisao: {
    pontos: ["Discursos carregam ideologias", "Contexto define a esfera de poder", "O silêncio é uma forma de comunicação"]
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual recurso o 9º ano prioriza na análise textual?",
        opcoes: ["Apenas a gramática", "A intenção e o impacto social", "O número de páginas"],
        correta: 1,
        feedbackAcerto: "Upgrade completo!",
        feedbackErro: "Lembre-se do foco em 'Esferas de Poder'."
      }
    ]
  },
  momento11_missaoFamilia: {
    titulo: "Análise de Mídia",
    materiais: ["Celular ou TV", "Caderno"],
    passos: ["Assista a uma propaganda", "Identifique qual é a ideologia por trás", "Anote quem ela quer convencer e como"],
    registro: "Foto da sua análise crítica da propaganda"
  },
  recompensa: { xp: 150, moedas: 100 }
};
