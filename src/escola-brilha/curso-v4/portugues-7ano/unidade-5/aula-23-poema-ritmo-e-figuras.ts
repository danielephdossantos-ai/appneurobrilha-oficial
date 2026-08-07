import type { AulaPortuguesV4 } from "../../types";

/** Aula 23 — Poema: Ritmo, Rima e Figuras de Linguagem. BNCC: EF67LP27, EF67LP31 */
export const aula23: AulaPortuguesV4 = {
  slug: "aula-23-poema-ritmo-e-figuras",
  titulo: "Poema: Ritmo e Figuras",
  iconeTrilha: "🎵",
  bncc: ["EF67LP27", "EF67LP31"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Setor Literatura: A Frequência dos Poemas",
    historia: "Analista, alguns arquivos do Observatório não contam histórias com começo, meio e fim — eles vibram em frequências próprias. São os poemas. Neles, o som das palavras importa tanto quanto o significado, e imagens impossíveis (como um coração de pedra ou um silêncio que grita) revelam sentidos que a linguagem comum não alcança. Hoje você vai calibrar seu sensor para captar ritmo, rima e figuras de linguagem.",
    imagemUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: A Música das Palavras.",
    bloco: {
      titulo: "Painel de Ritmo e Figuras",
      capaImagemUrl: "",
      pistas: [
        { nome: "A rima repete sons no fim dos versos.", imagemUrl: "" },
        { nome: "A metáfora compara duas coisas sem usar 'como'.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel Poético",
        icone: "🎼",
        linhas: [
          "  [ ELEMENTOS DO POEMA ]",
          "                        ",
          "  RITMO                 ",
          "  > a cadência sonora dos versos",
          "                        ",
          "  RIMA                  ",
          "  > repetição de sons no final dos versos",
          "                        ",
          "  METÁFORA              ",
          "  > comparação implícita ('meu peito é um oceano')",
          "                        ",
          "  COMPARAÇÃO            ",
          "  > comparação explícita ('meu peito é como um oceano')",
        ],
        estilo: "cartaz",
      },
      pergunta: "Na frase 'seus olhos são duas estrelas', qual figura de linguagem aparece?",
      hipoteses: [
        { texto: "Metáfora" },
        { texto: "Rima" },
        { texto: "Onomatopeia" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! É uma metáfora: uma comparação implícita, sem 'como'.",
      feedbackErro: "Releia o painel: a metáfora compara sem usar a palavra 'como'.",
      dica: "Não há a palavra 'como' na frase, mas há uma comparação.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Termos da Poesia.",
    cards: [
      { palavra: "Ritmo", explicacao: "É a cadência sonora criada pela repetição de sílabas fortes e fracas ao longo dos versos.", exemplo: "O ritmo do poema lembrava o som de um trem em movimento.", imagemUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Rima", explicacao: "É a repetição de sons semelhantes no final (ou dentro) dos versos.", exemplo: "'Flor' rima com 'amor' e com 'dor'.", imagemUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Metáfora", explicacao: "Figura de linguagem que compara duas coisas de forma implícita, sem usar 'como'.", exemplo: "'A vida é um rio' é uma metáfora.", imagemUrl: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Personificação", explicacao: "Figura de linguagem que dá características humanas a seres não humanos.", exemplo: "'O vento sussurrava segredos' personifica o vento.", imagemUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório Sonoro: Identificando Figuras no Verso",
    instrucao: "Observe como cada verso usa som ou imagem de forma especial.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O relógio da praça caminha devagar, contando as horas com paciência de avô.", explicacao: "💡 PERSONIFICAÇÃO: o relógio 'caminha' e tem 'paciência', características humanas." },
          { texto: "Meu coração é um tambor batendo forte na madrugada.", explicacao: "💡 METÁFORA: o coração é comparado a um tambor, sem usar 'como'." },
          { texto: "No céu de anil, o sol sorri feliz.", explicacao: "💡 RIMA E PERSONIFICAÇÃO: 'anil' e 'feliz' criam sonoridade, e o sol ganha um sorriso humano." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Arquivo: leia o poema completo e sinta o ritmo.",
    leitura: {
      titulo: "Canção da Chuva Distante",
      imagemUrl: "https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&q=80&w=400",
      destacar: ["chuva", "coração", "rima", "metáfora"],
      paragrafos: [
        "A chuva bate no telhado / com o som de um coração apressado, / e cada gota que cai no chão / parece contar uma velha canção.",
        "O céu, cinza como um véu de lã, / chora saudades da manhã, / enquanto o vento, manso e sereno, / sopra os segredos de um mundo pequeno.",
        "Minha janela é um palco de vidro, / onde a chuva dança sem medir o ritmo, / e eu, sentado, aprendo a escutar / o que só a poesia sabe contar.",
        "Quando o temporal enfim se cala, / resta um cheiro doce que a terra exala, / e no silêncio depois da canção, / percebo que a chuva também tem coração.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log: compreensão do poema.",
    perguntas: [
      {
        pergunta: "Qual figura de linguagem aparece em 'a chuva também tem coração'?",
        opcoes: ["Personificação", "Rima", "Onomatopeia", "Título"],
        correta: 0,
        feedbackAcerto: "Correto! Dar 'coração' à chuva é uma personificação.",
        feedbackErro: "Releia o último verso do poema com atenção ao que a chuva 'tem'.",
        ondeEstaNoTexto: "percebo que a chuva também tem coração",
        dica: "Pense em qual característica humana está sendo atribuída a algo não humano.",
        reensino: "Personificação é dar traços humanos a coisas, animais ou fenômenos da natureza.",
      },
      {
        pergunta: "Qual metáfora aparece na terceira estrofe?",
        opcoes: ["'Minha janela é um palco de vidro'", "'O céu, cinza como um véu de lã'", "'A chuva bate no telhado'", "'O vento sopra os segredos'"],
        correta: 0,
        feedbackAcerto: "Isso! A janela é comparada a um palco sem usar 'como', é metáfora.",
        feedbackErro: "Procure a frase que compara a janela a outra coisa sem usar 'como'.",
        ondeEstaNoTexto: "Minha janela é um palco de vidro",
        dica: "Metáfora nunca usa a palavra 'como'.",
        reensino: "Repare: comparação usa 'como', metáfora afirma que uma coisa É a outra.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Cena sob análise: quem observa e onde se passa o poema?",
    perguntas: [
      {
        pergunta: "Quem é o eu-lírico (a voz que fala) no poema 'Canção da Chuva Distante'?",
        opcoes: ["Alguém sentado observando a chuva pela janela", "Um narrador em 3ª pessoa que descreve outra pessoa", "A própria chuva, falando de si mesma", "Um personagem que não aparece no poema"],
        correta: 0,
        feedbackAcerto: "Correto! O eu-lírico é quem diz 'eu, sentado, aprendo a escutar'.",
        feedbackErro: "Releia a terceira estrofe, onde aparece a palavra 'eu'.",
        ondeEstaNoTexto: "e eu, sentado, aprendo a escutar",
        dica: "Procure onde o poema usa a primeira pessoa diretamente.",
        reensino: "No poema, o eu-lírico é a voz que expressa sentimentos, diferente do autor real.",
      },
      {
        pergunta: "Qual é o cenário principal descrito no poema?",
        opcoes: ["Uma janela durante um dia de chuva", "Uma praça no verão", "Uma sala de aula", "Um deserto"],
        correta: 0,
        feedbackAcerto: "Isso! O poema se passa junto à janela, durante a chuva.",
        feedbackErro: "Releia a terceira estrofe, que descreve o local onde o eu-lírico está.",
        ondeEstaNoTexto: "Minha janela é um palco de vidro, onde a chuva dança",
        dica: "Pense no lugar de onde o eu-lírico observa a cena.",
        reensino: "O cenário de um poema pode ser sugerido por poucos versos, mas ainda assim é essencial.",
      },
    ],
  },
  momento_escrita: {
    titulo: "Console de Criação: Sua Estrofe Poética",
    instrucao: "Escreva uma pequena estrofe usando ritmo, rima e ao menos uma figura de linguagem.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Frequência Própria",
        comando: "Escreva uma estrofe de 4 versos sobre um elemento da natureza (vento, mar, sol, lua), usando pelo menos uma rima e uma metáfora ou personificação.",
        modelo: [
          "O vento corre sem parar,",
          "levando folhas pelo ar,",
          "sussurra histórias no jardim,",
          "como se tivesse um fim.",
        ],
        checklist: [
          "Usei ao menos uma rima entre os versos?",
          "Usei uma metáfora ou personificação?",
          "O texto tem 4 versos, mesmo que curtos?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Identificando Elementos do Poema",
    bloco: {
      instrucao: "Organize o processo de análise de um poema, do mais simples ao mais complexo.",
      itens: [
        { id: "1", texto: "👂 Ler o poema em voz alta e perceber o ritmo.", imagemUrl: "" },
        { id: "2", texto: "🔤 Marcar os sons que se repetem no final dos versos (rima).", imagemUrl: "" },
        { id: "3", texto: "🔍 Localizar comparações e imagens (metáforas, personificações).", imagemUrl: "" },
        { id: "4", texto: "💭 Interpretar o sentido geral que essas escolhas criam.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Ótimo! Você seguiu o processo correto de leitura poética.",
      feedbackErro: "Primeiro perceba o som, depois as figuras, só então interprete o sentido geral.",
      dica: "A interpretação final (passo 4) depende de perceber ritmo e figuras antes.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: outro poema para analisar.",
    leitura: {
      titulo: "Retrato da Cidade à Noite",
      imagemUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=400",
      destacar: ["cidade", "luzes", "olhos"],
      paragrafos: [
        "A cidade acende mil olhos de neon / e pisca para quem passa apressado, / enquanto o silêncio, tímido, se esconde / atrás do barulho do dia cansado.",
        "As ruas são veias de um corpo enorme, / pulsando gente de um lado a outro, / e cada janela guarda uma história / que ninguém sabe contar por completo.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual figura de linguagem aparece em 'a cidade acende mil olhos de neon'?",
        opcoes: ["Metáfora, comparando as luzes a olhos", "Rima entre 'cidade' e 'neon'", "Onomatopeia", "Nenhuma figura de linguagem"],
        correta: 0,
        feedbackAcerto: "Correto! As luzes de neon são comparadas a olhos, sem usar 'como'.",
        feedbackErro: "Observe o que está sendo comparado a 'olhos' no primeiro verso.",
        dica: "Pense no que a cidade 'tem' que normalmente pertence a seres vivos.",
        reensino: "Quando algo não humano ganha uma imagem humana ou de ser vivo, geralmente é metáfora ou personificação.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "O ritmo é a cadência sonora dos versos, percebida ao ler o poema em voz alta.",
      "A rima repete sons no final (ou dentro) dos versos, criando musicalidade.",
      "Metáfora e personificação são figuras de linguagem que criam imagens além do sentido literal.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é rima?",
        opcoes: ["Repetição de sons semelhantes entre os versos", "Um tipo de metáfora", "O tema principal do poema", "O nome do eu-lírico"],
        correta: 0,
        feedbackAcerto: "Correto! Rima é a repetição de sons semelhantes.",
        feedbackErro: "Reveja o card de vocabulário sobre 'Rima'.",
        ondeEstaNoTexto: "É a repetição de sons semelhantes no final (ou dentro) dos versos.",
        dica: "Pense em palavras que soam parecido no fim dos versos.",
        reensino: "Reveja o Momento 03: rima é sonoridade repetida entre versos.",
      },
      {
        pergunta: "Qual é a diferença entre metáfora e comparação?",
        opcoes: ["A comparação usa 'como', a metáfora não", "Não existe diferença", "A metáfora é sempre engraçada", "A comparação só existe em prosa"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! A palavra 'como' marca a comparação explícita.",
        feedbackErro: "Reveja o Painel Poético do Momento 02.",
        ondeEstaNoTexto: "METÁFORA > comparação implícita / COMPARAÇÃO > comparação explícita ('como')",
        dica: "Pense em qual das duas usa a palavra 'como'.",
        reensino: "Metáfora afirma que uma coisa é a outra; comparação usa 'como' para aproximar as duas.",
      },
      {
        pergunta: "O que caracteriza a personificação?",
        opcoes: ["Dar características humanas a seres não humanos", "Repetir sons no final dos versos", "Usar apenas rimas perfeitas", "Contar uma história com início, meio e fim"],
        correta: 0,
        feedbackAcerto: "Correto! Personificação humaniza seres ou objetos.",
        feedbackErro: "Reveja o card de vocabulário sobre 'Personificação'.",
        ondeEstaNoTexto: "Figura de linguagem que dá características humanas a seres não humanos.",
        dica: "Pense em frases como 'o vento sussurrava' ou 'a chuva tem coração'.",
        reensino: "Reveja o Laboratório Sonoro: personificação atribui ações humanas a coisas ou fenômenos.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Poema em Família",
    materiais: ["Caderno", "Uma canção favorita da família"],
    passos: [
      "Escolha uma música que a família goste e leia (ou cante) a letra com atenção.",
      "Identifique junto com um familiar pelo menos uma rima na letra.",
      "Procure alguma metáfora ou personificação na música.",
      "Registre no caderno a rima e a figura de linguagem encontradas.",
    ],
    registro: "Escreva: 'Missão Poema - A rima que encontrei foi [X] e a figura de linguagem foi [Y]'.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
