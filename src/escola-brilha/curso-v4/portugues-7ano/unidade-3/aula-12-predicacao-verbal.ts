import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 12 — Predicação Verbal: Transitivos e Intransitivos
 * -------------------------------------------------------------
 * BNCC: EF07LP05, EF07LP04
 */
export const aula12: AulaPortuguesV4 = {
  slug: "aula-12-predicacao-verbal",
  titulo: "Predicação Verbal",
  iconeTrilha: "🔗",
  bncc: ["EF07LP05", "EF07LP04"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Diagnóstico de Dependência",
    historia: "Analista, alguns verbos são autossuficientes: fazem sentido sozinhos. Outros precisam de um complemento para a informação circular por completo. Hoje você vai aprender a diferenciar verbos que 'andam sozinhos' (intransitivos) dos que 'precisam de ajuda' (transitivos) para fechar o sentido da oração.",
    imagemUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Verbos e Suas Dependências.",
    bloco: {
      titulo: "Escaneamento de Predicação",
      capaImagemUrl: "",
      pistas: [
        { nome: "Alguns verbos têm sentido completo sozinhos.", imagemUrl: "" },
        { nome: "Outros verbos exigem um complemento para fazer sentido.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Predicação",
        icone: "🔗",
        linhas: [
          "  [ TIPOS DE VERBO ]        ",
          "                            ",
          "  INTRANSITIVO             ",
          "  > 'O robô funcionou.'    ",
          "    (sentido completo)     ",
          "                            ",
          "  TRANSITIVO               ",
          "  > 'O robô encontrou ___' ",
          "    (precisa de complemento)",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que caracteriza um verbo transitivo?",
      hipoteses: [
        { texto: "Precisa de um complemento para ter sentido completo" },
        { texto: "Nunca pode ser usado em frases negativas" },
        { texto: "Sempre indica um fenômeno da natureza" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Escaneamento correto! Verbos transitivos exigem complemento.",
      feedbackErro: "Reveja o painel: compare 'funcionou' com 'encontrou ___'.",
      dica: "Pergunte: essa frase fica incompleta sem algo depois do verbo?",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Predicação.",
    cards: [
      { palavra: "Verbo intransitivo", explicacao: "Verbo que tem sentido completo sozinho, sem precisar de complemento.", exemplo: "O sistema funcionou perfeitamente.", imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Verbo transitivo", explicacao: "Verbo que precisa de um complemento para que a informação fique completa.", exemplo: "O robô encontrou uma falha no código.", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Predicação verbal", explicacao: "Estudo de como o verbo se relaciona com seus complementos dentro da oração.", exemplo: "A predicação verbal ajuda a entender se um verbo precisa de complemento.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sintaxe: Sentido Completo ou Não?",
    instrucao: "Veja como alguns verbos precisam de complemento e outros não.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O drone VOOU.", explicacao: "💡 INTRANSITIVO: sentido completo sem complemento.\n> Ex: 'A luz acendeu.' e 'O time venceu.'" },
          { texto: "O Analista PRECISA de dados.", explicacao: "💡 TRANSITIVO INDIRETO: exige complemento com preposição.\n> Ex: 'Ele gosta de mistérios.' e 'Confio em você.'" },
          { texto: "O sistema ENVIOU o relatório.", explicacao: "💡 TRANSITIVO DIRETO: exige complemento sem preposição.\n> Ex: 'Ela comprou o livro.' e 'Nós vimos o eclipse.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Verbo e Sua Dependência",
      imagemUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=400",
      destacar: ["intransitivo", "transitivo", "complemento"],
      paragrafos: [
        "Nem todo verbo funciona da mesma forma dentro da oração. Alguns, como 'sorrir' e 'chegar', são intransitivos: fecham o sentido sozinhos. Dizer 'O robô chegou' já é uma informação completa.",
        "Outros verbos são transitivos: precisam de um complemento para que a frase não fique incompleta. Dizer apenas 'O robô encontrou' deixa uma pergunta no ar: encontrou o quê?",
        "Esse complemento pode vir sem preposição, como em 'encontrou a falha', ou com preposição, como em 'confiou na equipe'. Cada tipo de complemento tem um nome específico dentro da sintaxe.",
        "Reconhecer se um verbo é transitivo ou intransitivo ajuda o Analista a montar frases completas e a entender por que algumas orações soam estranhas quando faltam palavras.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que acontece quando dizemos apenas 'O robô encontrou'?",
        opcoes: ["A frase fica incompleta, falta o complemento", "A frase está perfeita e completa", "O verbo se torna intransitivo", "O sujeito desaparece"],
        correta: 0,
        feedbackAcerto: "Correto! O verbo 'encontrar' é transitivo e exige complemento.",
        feedbackErro: "Releia o segundo parágrafo e observe a pergunta que fica no ar.",
        ondeEstaNoTexto: "deixa uma pergunta no ar: encontrou o quê?",
        dica: "O texto usa uma pergunta retórica para mostrar a falta de sentido.",
        reensino: "Verbos transitivos precisam de complemento para que a oração tenha sentido completo.",
      },
      {
        pergunta: "Quais são exemplos de verbos intransitivos citados no texto?",
        opcoes: ["Sorrir e chegar", "Encontrar e confiar", "Enviar e comprar", "Ver e ouvir"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! 'Sorrir' e 'chegar' têm sentido completo sozinhos.",
        feedbackErro: "Verifique o início do primeiro parágrafo.",
        ondeEstaNoTexto: "Alguns, como 'sorrir' e 'chegar', são intransitivos...",
        dica: "São os dois primeiros verbos citados no texto.",
        reensino: "Verbos intransitivos não precisam de complemento para fazer sentido.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Redação",
    instrucao: "Produza frases classificando os verbos usados.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Relatório de Verbos",
        comando: "Escreva 3 frases: uma com verbo intransitivo, uma com transitivo direto e uma com transitivo indireto. Indique o tipo entre parênteses.",
        modelo: [
          "O sinal piscou. (intransitivo)",
          "Eu terminei a tarefa. (transitivo direto)",
          "Nós precisamos de ajuda. (transitivo indireto)",
        ],
        checklist: [
          "Cada frase tem um verbo identificado corretamente?",
          "Os complementos fazem sentido com o verbo?",
          "Indiquei o tipo de cada verbo?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Classificando o Verbo",
    bloco: {
      instrucao: "Organize o processo de classificação de um verbo quanto à predicação.",
      itens: [
        { id: "1", texto: "📥 LEITURA: Leia a oração e identifique o verbo.", imagemUrl: "" },
        { id: "2", texto: "🔍 TESTE: Verifique se a frase faz sentido sem nada depois do verbo.", imagemUrl: "" },
        { id: "3", texto: "🔗 COMPLEMENTO: Se precisar de algo, veja se exige preposição.", imagemUrl: "" },
        { id: "4", texto: "✅ CLASSIFICAÇÃO: Defina como intransitivo, transitivo direto ou indireto.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Classificação concluída! Você domina a predicação verbal.",
      feedbackErro: "Revise a ordem: primeiro identifique o verbo, depois teste o sentido, depois o complemento.",
      dica: "Você só sabe se precisa de preposição (3) depois de confirmar que precisa de complemento (2).",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Log de Comunicação.",
    leitura: {
      titulo: "Log: Falha na Transmissão",
      imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
      destacar: ["dependemos", "enviamos", "funcionou"],
      paragrafos: [
        "Ontem, o satélite parou de funcionar por dez minutos. Nós dependemos totalmente dessa conexão para receber os dados do Observatório.",
        "Assim que o sinal voltou, enviamos o relatório completo à central. Tudo funcionou normalmente depois disso.",
      ],
    },
    perguntas: [
      {
        pergunta: "No trecho 'dependemos totalmente dessa conexão', o verbo 'dependemos' é:",
        opcoes: ["Transitivo indireto, pois exige a preposição 'de'", "Intransitivo, pois não precisa de complemento", "Transitivo direto, sem preposição", "Um verbo de fenômeno da natureza"],
        correta: 0,
        feedbackAcerto: "Exato! 'Depender de algo' é um verbo transitivo indireto.",
        feedbackErro: "Observe a preposição 'de' antes do complemento.",
        dica: "Verbos transitivos indiretos sempre vêm acompanhados de preposição.",
        reensino: "O verbo 'depender' sempre pede a preposição 'de' antes do complemento.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Verbos intransitivos têm sentido completo sem complemento.",
      "Verbos transitivos precisam de complemento para fechar o sentido.",
      "O complemento pode vir sem preposição (direto) ou com preposição (indireto).",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em 'O time venceu', o verbo 'venceu' é classificado como:",
        opcoes: ["Intransitivo", "Transitivo direto", "Transitivo indireto", "De fenômeno"],
        correta: 0,
        feedbackAcerto: "Correto! A frase tem sentido completo sem complemento.",
        feedbackErro: "Teste: a frase fica completa sem nada depois do verbo?",
        ondeEstaNoTexto: "",
        dica: "Pense se falta alguma informação na frase.",
        reensino: "Verbos intransitivos não exigem complemento para ter sentido.",
      },
      {
        pergunta: "Em 'Ela confia em seus amigos', o complemento 'em seus amigos' é:",
        opcoes: ["Objeto indireto, pois vem com preposição", "Objeto direto, sem preposição", "Sujeito da oração", "Um verbo auxiliar"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Complementos com preposição são objetos indiretos.",
        feedbackErro: "Observe a presença da preposição 'em' antes do complemento.",
        ondeEstaNoTexto: "",
        dica: "Verbos como 'confiar' pedem sempre uma preposição.",
        reensino: "Objeto indireto é o complemento que vem introduzido por preposição.",
      },
      {
        pergunta: "Qual frase abaixo apresenta um verbo transitivo direto?",
        opcoes: ["Nós compramos o equipamento.", "O sensor falhou.", "Eles gostam de tecnologia.", "O robô sorriu."],
        correta: 0,
        feedbackAcerto: "Perfeito! 'Comprar algo' não exige preposição, é transitivo direto.",
        feedbackErro: "Busque o verbo cujo complemento vem sem preposição.",
        ondeEstaNoTexto: "",
        dica: "Transitivo direto não usa preposição antes do complemento.",
        reensino: "Verbos transitivos diretos têm complemento sem preposição, chamado objeto direto.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Complemento",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Escolha 3 verbos usados em conversas da sua casa hoje.",
      "Verifique se cada um precisa de complemento ou não.",
      "Peça a alguém da família para completar a frase, se necessário.",
      "Registre se o verbo era intransitivo, transitivo direto ou indireto.",
    ],
    registro: "Escreva: 'Missão Complemento - Verbos analisados: [X], [Y], [Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
