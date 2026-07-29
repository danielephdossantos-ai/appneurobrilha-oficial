import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 4 — Conectivos e Períodos
 * -------------------------------------------------------------
 * Caso final da unidade: relatos com frases soltas, sem nenhuma
 * conexão lógica entre elas. O investigador aprende a usar conjunções
 * para unir orações em períodos compostos, criando coesão e revelando
 * relações de causa, oposição, adição e condição.
 *
 * BNCC: EF05LP07, EF05LP27
 */
export const aula4: AulaPortuguesV4 = {
  slug: "aula-04-conectivos-e-periodos",
  titulo: "Conectivos e Períodos",
  iconeTrilha: "🔗",
  bncc: ["EF05LP07", "EF05LP27"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "O Caso das Frases Soltas",
    historia:
      "Um depoimento chegou totalmente picado: \"Choveu muito. Não fomos ao parque. O parque estava fechado.\" — Três informações verdadeiras, mas soltas, sem conexão nenhuma — observou a investigadora-chefe. — É aí que entram os CONECTIVOS: palavras como 'porque', 'mas', 'e', 'se', que unem frases (orações) e mostram a RELAÇÃO LÓGICA entre elas — causa, oposição, adição, condição. Sem esses conectivos, o texto vira uma lista de fatos soltos. Hoje seu trabalho é juntar as peças e revelar a lógica escondida entre elas.",
  },

  momento02_previsao: {
    instrucao: "Antes de investigar o relato completo, observe estas frases soltas.",
    bloco: {
      titulo: "O Caso das Frases Soltas",
      recado: {
        rotulo: "Depoimento fragmentado",
        icone: "🧷",
        linhas: [
          "\"Choveu muito.\"",
          "\"Não fomos ao parque.\"",
          "\"O parque estava fechado.\"",
        ],
        estilo: "papel",
      },
      pergunta: "O que está faltando para esse depoimento fazer mais sentido como um relato único?",
      hipoteses: [
        { texto: "Palavras que conectem as frases e mostrem a relação entre elas" },
        { texto: "Mais frases sobre assuntos diferentes" },
        { texto: "Trocar todas as palavras por sinônimos" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔗 Correto! Falta um conectivo, como 'porque' ou 'e', que ligue as frases e mostre por que uma coisa está relacionada à outra.",
      feedbackErro:
        "As frases já têm sentido sozinhas, mas falta algo que as UNA e mostre a relação lógica entre elas — um conectivo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Estas palavras vão te ajudar a unir frases soltas em relatos coerentes.",
    cards: [
      {
        palavra: "conjunção",
        explicacao: "Palavra que liga duas orações ou termos, estabelecendo uma relação de sentido entre eles (adição, oposição, causa, condição, tempo, finalidade).",
        exemplo: "Em 'Choveu muito, por isso não fomos ao parque', 'por isso' liga as duas ideias mostrando causa e consequência.",
      },
      {
        palavra: "período composto",
        explicacao: "Frase formada por duas ou mais orações unidas por conectivos, em vez de aparecerem soltas.",
        exemplo: "'Choveu muito e o parque fechou' é um período composto, com duas orações unidas pela conjunção 'e'.",
      },
      {
        palavra: "coesão",
        explicacao: "É a ligação lógica entre as partes de um texto, feita principalmente com o uso de conectivos e outras palavras de retomada.",
        exemplo: "Um texto com boa coesão flui naturalmente, sem parecer uma lista de frases soltas.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relato abaixo e observe os conectivos que unem as ideias, criando um texto coeso.",
    leitura: {
      titulo: "Relatório Final: O Caso do Parque Fechado",
      destacar: ["porque", "mas", "por isso"],
      paragrafos: [
        "A chuva começou de repente na tarde de sábado, porque uma frente fria avançou sobre a região sem aviso. As ruas ficaram alagadas em poucos minutos, e o trânsito parou quase por completo.",
        "A família queria muito ir ao parque, mas a prefeitura decidiu fechar os portões por segurança. Os brinquedos molhados e o gramado encharcado tornavam o passeio arriscado demais.",
        "Por isso, todos combinaram remarcar o passeio para o domingo seguinte, quando o sol já tinha voltado a aparecer e o parque estava seco novamente.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relato sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "No trecho 'A chuva começou porque uma frente fria avançou', a conjunção 'porque' indica relação de:",
        opcoes: ["oposição", "causa", "adição"],
        correta: 1,
        feedbackAcerto: "🔗 Isso! 'Porque' explica a CAUSA da chuva — por que ela começou.",
        feedbackErro: "'Porque' costuma responder à pergunta 'por quê?' — isso indica uma relação de causa.",
        ondeEstaNoTexto: "A chuva começou de repente na tarde de sábado, porque uma frente fria avançou sobre a região sem aviso.",
      },
      {
        pergunta: "No trecho 'A família queria ir ao parque, mas a prefeitura fechou os portões', a palavra 'mas' indica:",
        opcoes: ["uma ideia que se opõe à anterior", "uma ideia que soma à anterior", "uma condição para a anterior"],
        correta: 0,
        feedbackAcerto: "🔗 Correto! 'Mas' liga duas ideias que se opõem: o desejo da família e a decisão da prefeitura.",
        feedbackErro: "'Mas' é usado quando a segunda ideia contraria ou se opõe à primeira.",
        ondeEstaNoTexto: "A família queria muito ir ao parque, mas a prefeitura decidiu fechar os portões por segurança.",
      },
      {
        pergunta: "No trecho 'Por isso, todos combinaram remarcar o passeio', a expressão 'por isso' indica:",
        opcoes: ["uma consequência do que foi dito antes", "uma oposição ao que foi dito antes", "uma dúvida sobre o que foi dito antes"],
        correta: 0,
        feedbackAcerto: "🔗 Exato! 'Por isso' liga uma causa (o parque fechado) à sua consequência (remarcar o passeio).",
        feedbackErro: "'Por isso' aponta o RESULTADO de algo que já foi contado — é uma relação de consequência.",
        ondeEstaNoTexto: "Por isso, todos combinaram remarcar o passeio para o domingo seguinte...",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora treine escolhendo o conectivo certo para cada relação de sentido.",
    perguntas: [
      {
        pergunta: "Qual conectivo une as ideias 'Estudei bastante' e 'fui bem na prova', mostrando uma condição/consequência esperada?",
        opcoes: ["e", "por isso", "embora"],
        correta: 1,
        feedbackAcerto: "🔗 Isso! 'Por isso' mostra que ir bem na prova foi consequência de ter estudado bastante.",
        feedbackErro: "'E' apenas soma ideias, e 'embora' indica oposição. O conectivo que mostra consequência é 'por isso'.",
      },
      {
        pergunta: "Qual conectivo encaixa melhor em 'Choveu, ___ resolvemos sair mesmo assim', mostrando oposição?",
        opcoes: ["mas", "porque", "e"],
        correta: 0,
        feedbackAcerto: "🔗 Correto! 'Mas' mostra que a decisão de sair contraria a expectativa criada pela chuva.",
        feedbackErro: "Pense: sair na chuva é o esperado ou o contrário do esperado? Isso pede um conectivo de oposição: 'mas'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o passo a passo para transformar frases soltas em um período composto coeso.",
    bloco: {
      instrucao: "Do fato solto ao período conectado.",
      itens: [
        { id: "p1", texto: "Primeiro, identifico as ideias que estão soltas no texto." },
        { id: "p2", texto: "Depois, percebo qual relação existe entre elas: causa, oposição, adição ou condição." },
        { id: "p3", texto: "Em seguida, escolho o conectivo que representa exatamente essa relação." },
        { id: "p4", texto: "Por fim, uno as frases num único período composto, mais coeso e claro." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔗 Ótimo raciocínio! Esse é o caminho para transformar frases soltas em um texto coeso.",
      feedbackErro: "Pense na ordem: primeiro identifique as ideias soltas, depois a relação entre elas, só então escolha o conectivo certo.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Último relato do caso. Leia sozinho e identifique os conectivos usados.",
    leitura: {
      titulo: "Depoimento Final: O Motorista do Ônibus",
      destacar: ["quando", "embora", "e"],
      paragrafos: [
        "Quando o ônibus parou naquela rua, o motorista notou um pacote esquecido embaixo do último banco. Ele avisou a empresa e aguardou instruções, sem tocar em nada.",
        "Embora estivesse atrasado para outra viagem, ele preferiu esperar a chegada dos responsáveis, pois sabia que a segurança dos passageiros vinha sempre em primeiro lugar.",
      ],
    },
    perguntas: [
      {
        pergunta: "No trecho 'Quando o ônibus parou, o motorista notou um pacote', a palavra 'quando' indica relação de:",
        opcoes: ["tempo", "oposição", "causa"],
        correta: 0,
        feedbackAcerto: "🔗 Isso! 'Quando' indica o momento em que a segunda ação aconteceu — relação de tempo.",
        feedbackErro: "'Quando' marca o momento em que algo ocorre — é um conectivo de tempo.",
        ondeEstaNoTexto: "Quando o ônibus parou naquela rua, o motorista notou um pacote esquecido embaixo do último banco.",
      },
      {
        pergunta: "No trecho 'Embora estivesse atrasado, ele preferiu esperar', a palavra 'embora' indica:",
        opcoes: ["adição de ideias", "oposição entre as ideias", "condição"],
        correta: 1,
        feedbackAcerto: "🔗 Correto! 'Embora' mostra que ele agiu de forma contrária ao que se esperaria de alguém atrasado.",
        feedbackErro: "'Embora' introduz uma ideia que contraria a anterior — mesmo atrasado, ele esperou. Isso é oposição.",
        ondeEstaNoTexto: "Embora estivesse atrasado para outra viagem, ele preferiu esperar a chegada dos responsáveis...",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "CONJUNÇÕES são palavras que ligam orações e mostram a relação lógica entre elas.",
      "'Porque' e 'por isso' indicam relações de CAUSA e CONSEQUÊNCIA.",
      "'Mas' e 'embora' indicam relações de OPOSIÇÃO.",
      "'E' indica ADIÇÃO de ideias; 'se' indica CONDIÇÃO; 'quando' indica TEMPO.",
      "Unir frases soltas em PERÍODOS COMPOSTOS com os conectivos certos torna o texto mais coeso e claro.",
    ],
    miniDesafio: {
      pergunta: "Qual conectivo completa melhor: 'Estudarei bastante ___ passar de ano'?",
      opcoes: ["se", "mas", "embora"],
      correta: 0,
      feedbackAcerto: "🔗 Isso! 'Se' estabelece uma condição para o resultado desejado.",
      feedbackErro: "A frase fala de uma condição para passar de ano — o conectivo certo é 'se'.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma conjunção?",
        opcoes: [
          "Uma palavra que nomeia objetos",
          "Uma palavra que liga orações, mostrando a relação de sentido entre elas",
          "Uma palavra que só aparece no início da frase",
        ],
        correta: 1,
        feedbackAcerto: "🔗 Isso! A conjunção liga ideias e revela a relação lógica entre elas.",
        feedbackErro: "Conjunção não nomeia nada — ela liga orações e mostra a relação entre elas.",
      },
      {
        pergunta: "2/5 — Em 'Choveu muito, mas fomos ao parque mesmo assim', a palavra 'mas' indica:",
        opcoes: ["causa", "oposição", "adição"],
        correta: 1,
        feedbackAcerto: "🔗 Correto! 'Mas' liga duas ideias que se contrariam.",
        feedbackErro: "'Mas' é usado quando a segunda ideia contraria a primeira — é oposição.",
      },
      {
        pergunta: "3/5 — Qual conectivo indica uma relação de causa?",
        opcoes: ["porque", "embora", "e"],
        correta: 0,
        feedbackAcerto: "🔗 Isso! 'Porque' explica o motivo de algo acontecer.",
        feedbackErro: "'Porque' responde 'por quê?' — é o conectivo de causa.",
      },
      {
        pergunta: "4/5 — O que é um período composto?",
        opcoes: [
          "Uma frase com apenas uma oração",
          "Duas ou mais orações unidas por conectivos",
          "Um texto sem nenhum verbo",
        ],
        correta: 1,
        feedbackAcerto: "🔗 Exato! O período composto une duas ou mais orações através de conectivos.",
        feedbackErro: "Período composto é formado por MAIS de uma oração, ligadas por conjunções.",
      },
      {
        pergunta: "5/5 — Em 'Quando o ônibus parou, o motorista notou o pacote', qual relação a conjunção 'quando' estabelece?",
        opcoes: ["tempo", "condição", "oposição"],
        correta: 0,
        feedbackAcerto: "🔗 Isso! 'Quando' marca o momento em que a ação aconteceu. Você concluiu a investigação da Engenharia da Frase! 🌟",
        feedbackErro: "'Quando' indica o momento em que algo acontece — é uma relação de tempo.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: conectando frases em casa",
    materiais: ["Papel e lápis", "Três fatos curtos do dia de vocês"],
    passos: [
      "1) Escrevam juntos três frases curtas e soltas sobre o dia (ex.: 'Estava calor.' 'Fomos à praia.' 'A água estava gelada.').",
      "2) A criança escolhe conectivos ('porque', 'mas', 'e', 'quando') para unir essas frases num único período composto.",
      "3) Leiam o novo texto em voz alta e comparem com as frases soltas do início — o que mudou na clareza do relato?",
      "4) Repitam com outros fatos, variando os conectivos usados (causa, oposição, adição, condição).",
    ],
    registro: "🗣️ Registre: 'As frases soltas eram ___ e o período composto ficou ___.'",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "Engenheiro da Frase",
  },
};
