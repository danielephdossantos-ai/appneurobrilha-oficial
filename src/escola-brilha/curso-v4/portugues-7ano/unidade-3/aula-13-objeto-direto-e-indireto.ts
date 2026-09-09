import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 13 — Objeto Direto e Indireto: Complementos Verbais
 * -------------------------------------------------------------
 * BNCC: EF07LP05, EF07LP07
 */
export const aula13: AulaPortuguesV4 = {
  slug: "aula-13-objeto-direto-e-indireto",
  titulo: "Objeto Direto e Indireto",
  iconeTrilha: "🎯",
  bncc: ["EF07LP05", "EF07LP07"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Alvo Identificado",
    historia: "Analista, na aula passada você aprendeu que muitos verbos pedem complemento. Agora vamos nomear esses complementos com precisão: objeto direto e objeto indireto. Essa distinção é a diferença entre acertar o alvo e errar a mira em qualquer análise sintática.",
    imagemUrl: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Complementos Verbais.",
    bloco: {
      titulo: "Escaneamento de Objetos",
      capaImagemUrl: "",
      pistas: [
        { nome: "O objeto direto completa o verbo sem preposição.", imagemUrl: "" },
        { nome: "O objeto indireto completa o verbo com preposição.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Complementos",
        icone: "🎯",
        linhas: [
          "  [ COMPLEMENTOS VERBAIS ]  ",
          "                            ",
          "  OBJETO DIRETO             ",
          "  > 'Eu vi O ROBÔ.'         ",
          "    (sem preposição)        ",
          "                            ",
          "  OBJETO INDIRETO           ",
          "  > 'Eu gosto DO ROBÔ.'     ",
          "    (com preposição)        ",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é a principal diferença entre objeto direto e objeto indireto?",
      hipoteses: [
        { texto: "O uso ou não de preposição ligando o verbo ao complemento" },
        { texto: "O objeto direto sempre vem antes do verbo" },
        { texto: "O objeto indireto nunca aparece em perguntas" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Alvo certo! A preposição é o que separa objeto direto de indireto.",
      feedbackErro: "Reveja o painel: compare 'vi o robô' com 'gosto do robô'.",
      dica: "Observe se há uma preposição (de, em, a, com) antes do complemento.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Complementos.",
    cards: [
      { palavra: "Objeto direto", explicacao: "Complemento verbal que se liga ao verbo sem preposição.", exemplo: "O Analista escaneou o documento.", imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Objeto indireto", explicacao: "Complemento verbal que se liga ao verbo por meio de uma preposição.", exemplo: "O robô obedece ao comando central.", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Verbo bitransitivo", explicacao: "Verbo que exige dois complementos ao mesmo tempo: um direto e um indireto.", exemplo: "A equipe entregou o relatório ao diretor.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sintaxe: Direto ou Indireto?",
    instrucao: "Compare os complementos e note a presença ou ausência de preposição.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O sistema DETECTOU o erro.", explicacao: "💡 OBJETO DIRETO: sem preposição, completa diretamente o verbo.\n> Ex: 'Ela leu o livro.' e 'Nós vimos a estrela.'" },
          { texto: "O robô OBEDECE ao comando.", explicacao: "💡 OBJETO INDIRETO: ligado ao verbo por preposição (ao = a + o).\n> Ex: 'Confio em você.' e 'Ele precisa de ajuda.'" },
          { texto: "A equipe ENTREGOU o relatório ao diretor.", explicacao: "💡 VERBO BITRANSITIVO: tem objeto direto (o relatório) e indireto (ao diretor) juntos.\n> Ex: 'Dei um presente à minha mãe.' e 'Ele contou a verdade aos colegas.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Alvo Certo do Verbo",
      imagemUrl: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80&w=400",
      destacar: ["objeto direto", "objeto indireto", "preposição"],
      paragrafos: [
        "Quando um verbo transitivo precisa de complemento, esse complemento recebe um nome: objeto. Se ele se liga diretamente ao verbo, sem preposição, chamamos de objeto direto, como em 'o Analista leu o relatório'.",
        "Já quando o complemento aparece ligado ao verbo por uma preposição, ele se torna objeto indireto, como em 'o Analista confia no sistema'. A preposição 'em' (contraída em 'no') é a marca dessa relação.",
        "Alguns verbos, chamados bitransitivos, pedem os dois complementos ao mesmo tempo. Em 'a equipe entregou o relatório ao diretor', temos 'o relatório' como objeto direto e 'ao diretor' como objeto indireto.",
        "Saber diferenciar esses complementos evita erros comuns, como usar a preposição errada ou trocar pronomes de forma inadequada em frases do dia a dia.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que marca a diferença entre objeto direto e indireto?",
        opcoes: ["A presença ou ausência de preposição", "A posição do verbo na frase", "O tamanho da palavra usada", "O tempo verbal utilizado"],
        correta: 0,
        feedbackAcerto: "Correto! A preposição é o marcador do objeto indireto.",
        feedbackErro: "Releia o segundo parágrafo com atenção à palavra 'preposição'.",
        ondeEstaNoTexto: "A preposição 'em' (contraída em 'no') é a marca dessa relação.",
        dica: "Uma das opções usa a mesma palavra-chave do texto.",
        reensino: "Objeto direto não tem preposição; objeto indireto sempre tem.",
      },
      {
        pergunta: "No exemplo 'a equipe entregou o relatório ao diretor', qual é o objeto indireto?",
        opcoes: ["Ao diretor", "O relatório", "A equipe", "Entregou"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! 'Ao diretor' vem com preposição, por isso é indireto.",
        feedbackErro: "Observe qual parte da frase tem a preposição 'a' (contraída em 'ao').",
        ondeEstaNoTexto: "temos 'o relatório' como objeto direto e 'ao diretor' como objeto indireto.",
        dica: "O objeto indireto é sempre o que vem acompanhado de preposição.",
        reensino: "Nos verbos bitransitivos, o objeto indireto costuma indicar o destinatário da ação.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Redação",
    instrucao: "Escreva frases usando objetos diretos e indiretos.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Missão Complemento",
        comando: "Escreva 3 frases: uma com objeto direto, uma com objeto indireto e uma com verbo bitransitivo (os dois juntos). Sublinhe os complementos.",
        modelo: [
          "Eu escrevi o relatório. (objeto direto)",
          "Eu obedeço às regras. (objeto indireto)",
          "Eu entreguei o presente à professora. (bitransitivo)",
        ],
        checklist: [
          "Identifiquei corretamente cada tipo de objeto?",
          "Usei preposição apenas nos objetos indiretos?",
          "A frase com verbo bitransitivo tem os dois complementos?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Identificando o Objeto",
    bloco: {
      instrucao: "Organize o processo de identificação do tipo de complemento verbal.",
      itens: [
        { id: "1", texto: "📥 LEITURA: Localize o verbo transitivo na oração.", imagemUrl: "" },
        { id: "2", texto: "🔍 BUSCA: Encontre o complemento logo após o verbo.", imagemUrl: "" },
        { id: "3", texto: "🎯 TESTE DE PREPOSIÇÃO: Verifique se há preposição ligando verbo e complemento.", imagemUrl: "" },
        { id: "4", texto: "✅ CLASSIFICAÇÃO: Sem preposição é direto; com preposição é indireto.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Alvo atingido! Você classifica objetos diretos e indiretos com precisão.",
      feedbackErro: "Revise a ordem: primeiro o verbo, depois o complemento, depois o teste da preposição.",
      dica: "Você só testa a preposição (3) depois de encontrar o complemento (2).",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Comunicado da Base.",
    leitura: {
      titulo: "Comunicado: Nova Diretriz",
      imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
      destacar: ["informou", "aos analistas", "os dados"],
      paragrafos: [
        "A central informou os dados aos analistas na reunião de ontem. Todos precisam revisar o material antes da próxima missão.",
        "Quem não comparecer deve avisar ao coordenador com antecedência.",
      ],
    },
    perguntas: [
      {
        pergunta: "Na frase 'A central informou os dados aos analistas', quais são os complementos, respectivamente?",
        opcoes: ["Os dados (direto) e aos analistas (indireto)", "Os dados (indireto) e aos analistas (direto)", "A central é o único complemento", "Não há complementos nessa frase"],
        correta: 0,
        feedbackAcerto: "Exato! 'Os dados' não tem preposição (direto) e 'aos analistas' tem (indireto).",
        feedbackErro: "Observe qual complemento vem acompanhado da preposição 'a'.",
        dica: "O verbo 'informar' costuma pedir os dois tipos de complemento juntos.",
        reensino: "Verbos bitransitivos como 'informar' e 'entregar' pedem objeto direto e indireto.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Objeto direto completa o verbo sem preposição.",
      "Objeto indireto completa o verbo com preposição.",
      "Verbos bitransitivos exigem os dois complementos ao mesmo tempo.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em 'O aluno respondeu à pergunta', o complemento 'à pergunta' é:",
        opcoes: ["Objeto indireto", "Objeto direto", "Sujeito", "Verbo"],
        correta: 0,
        feedbackAcerto: "Correto! A preposição 'a' (contraída em 'à') marca o objeto indireto.",
        feedbackErro: "Observe a presença da preposição antes do complemento.",
        ondeEstaNoTexto: "",
        dica: "Objeto indireto sempre tem preposição.",
        reensino: "A crase em 'à pergunta' já indica a presença da preposição 'a'.",
      },
      {
        pergunta: "Em 'Comprei um presente', o complemento 'um presente' é classificado como:",
        opcoes: ["Objeto direto", "Objeto indireto", "Predicativo", "Adjunto adverbial"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Não há preposição, então é objeto direto.",
        feedbackErro: "Verifique se existe alguma preposição antes de 'um presente'.",
        ondeEstaNoTexto: "",
        dica: "Sem preposição, o complemento é sempre direto.",
        reensino: "Objeto direto é o complemento sem preposição do verbo transitivo direto.",
      },
      {
        pergunta: "Qual frase apresenta um verbo bitransitivo?",
        opcoes: ["Ela deu um presente à amiga.", "Ele correu rápido.", "O sol brilhou hoje.", "Nós dormimos cedo."],
        correta: 0,
        feedbackAcerto: "Perfeito! 'Deu' exige dois complementos: 'um presente' e 'à amiga'.",
        feedbackErro: "Busque a frase com dois complementos ligados ao mesmo verbo.",
        ondeEstaNoTexto: "",
        dica: "Bitransitivo tem objeto direto e indireto ao mesmo tempo.",
        reensino: "Verbos como dar, entregar e informar costumam ser bitransitivos.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Alvo Certo",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Observe 3 frases ditas por familiares durante o dia.",
      "Identifique os complementos verbais em cada uma.",
      "Classifique cada complemento como direto ou indireto.",
      "Registre as frases e suas classificações no caderno.",
    ],
    registro: "Escreva: 'Missão Alvo Certo - Frases analisadas: [X], [Y], [Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
