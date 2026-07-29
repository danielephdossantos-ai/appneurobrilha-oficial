import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 4 — Texto Digital e Fake News
 * -------------------------------------------------------------
 * Caso final do Arquivo dos Gêneros. A missão: reconhecer os gêneros
 * digitais mais comuns (post e comentário) e desenvolver um protocolo
 * de VERIFICAÇÃO DE INFORMAÇÃO para não cair em notícias falsas
 * (fake news) que circulam nas redes.
 *
 * BNCC: EF35LP03, EF05LP19, EF69LP31 (adaptada), EF35LP15
 */
export const aula4: AulaPortuguesV4 = {
  slug: "aula-04-texto-digital-e-fake-news",
  titulo: "Texto Digital e Fake News",
  iconeTrilha: "🔎",
  bncc: ["EF35LP03", "EF05LP19", "EF35LP15"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Caso final: os textos que vivem na tela",
    historia:
      "Este é o caso mais urgente do Arquivo dos Gêneros: os TEXTOS DIGITAIS. Posts e comentários circulam em segundos, sem passar pela checagem que uma notícia de jornal costuma ter. Isso é ótimo para compartilhar rápido, mas perigoso quando a informação é falsa — as chamadas FAKE NEWS. Hoje você vai virar um investigador de tela: aprender a reconhecer um post, avaliar um comentário e, principalmente, checar se uma informação é verdadeira antes de repassá-la.",
  },

  momento02_previsao: {
    instrucao:
      "Leia este post que circulou num grupo de mensagens. Antes de saber se é verdadeiro, o que você observa nele?",
    bloco: {
      titulo: "URGENTE!!! Compartilhe antes que apaguem!!!",
      recado: {
        rotulo: "Post em rede social",
        icone: "📱",
        linhas: [
          "URGENTE!!! Compartilhe antes que apaguem!!!",
          "Cientistas descobriram que comer chocolate 5x ao dia cura qualquer doença!",
          "Envie para todos os seus contatos AGORA!",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que esse post sugere sobre sua confiabilidade?",
      hipoteses: [
        { texto: "Os sinais (urgência exagerada, sem fonte, pedido de compartilhamento) indicam que pode ser uma fake news" },
        { texto: "É totalmente confiável, porque foi enviado por muitas pessoas" },
        { texto: "É uma notícia igual às publicadas em jornais, com mesma checagem" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔎 Correto! Palavras em caps lock, exclamações em excesso, urgência artificial ('antes que apaguem'), promessas exageradas e ausência de fonte são sinais clássicos de fake news.",
      feedbackErro:
        "Releia o post: ele usa MAIÚSCULAS e exclamações em excesso, promete uma 'cura para qualquer doença' e pede compartilhamento urgente sem citar nenhuma fonte. Esses são sinais de alerta.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras essenciais para investigar o mundo digital.",
    cards: [
      {
        palavra: "fake news",
        explicacao:
          "É uma notícia falsa, criada de propósito ou por engano, que se espalha rapidamente pela internet, muitas vezes explorando emoções fortes como medo ou indignação.",
        exemplo: "Uma mensagem que diz 'a vacina causa um efeito nunca comprovado por cientistas' sem citar nenhum estudo é uma possível fake news.",
      },
      {
        palavra: "fonte confiável",
        explicacao:
          "É uma origem de informação que pode ser checada: um órgão oficial, uma instituição de pesquisa reconhecida, um veículo de imprensa sério que assina a matéria com nome de jornalista.",
        exemplo: "Um site de um órgão do governo ou uma universidade costuma ser fonte confiável; uma mensagem anônima sem assinatura, não.",
      },
      {
        palavra: "checagem de fatos",
        explicacao:
          "É o processo de verificar se uma informação é verdadeira antes de acreditar nela ou compartilhá-la — buscar a mesma notícia em outras fontes confiáveis, ver se há data e autor, e desconfiar de promessas exageradas.",
        exemplo: "Antes de compartilhar uma notícia alarmante, buscar '[o assunto] + fato ou boato' em um site de checagem é um exemplo de checagem de fatos.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia esta troca de post e comentários como um investigador digital: observe a linguagem, a ausência (ou presença) de fonte e os sinais de alerta.",
    leitura: {
      titulo: "Post e comentários: 'Escola vai proibir recreio a partir de segunda-feira'",
      destacar: ["Escola vai proibir recreio", "sem citar nenhuma fonte oficial", "Antes de acreditar, procurei"],
      paragrafos: [
        "Post original: 'Gente, alguém me falou que a escola vai PROIBIR o recreio a partir de segunda-feira por causa de umas brigas! Que absurdo, isso não pode acontecer!!! 😡' — publicado por um perfil sem identificação clara, sem citar nenhuma fonte oficial da escola.",
        "Comentário 1: 'Sério?? Nossa, isso é um absurdo mesmo, vou avisar todo mundo do meu grupo!' — esse comentário repassa a informação sem checar se ela é verdadeira.",
        "Comentário 2: 'Antes de acreditar, procurei no site oficial da escola e no mural de avisos. Não encontrei nenhuma comunicação sobre isso. Vou perguntar direto à coordenação antes de espalhar.' — esse comentário busca uma fonte confiável antes de repassar a informação.",
        "No dia seguinte, a coordenação da escola esclareceu, em comunicado oficial, que o recreio continuaria normalmente e que o boato havia surgido de uma conversa mal interpretada entre alunos.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Por que o post original é um exemplo de informação não confiável?",
        opcoes: [
          "Porque foi escrito com letras bonitas",
          "Porque não cita nenhuma fonte oficial e usa linguagem emocional exagerada",
          "Porque foi publicado numa rede social qualquer",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! O post se baseia em 'alguém me falou', sem fonte alguma, e usa exclamações e emoji de raiva para gerar reação rápida.",
        feedbackErro: "Releia o post original: ele começa com 'alguém me falou' — isso não é uma fonte confiável, é um boato.",
        ondeEstaNoTexto: "'...alguém me falou que a escola vai PROIBIR o recreio...' — publicado por um perfil sem identificação clara, sem citar nenhuma fonte oficial.",
      },
      {
        pergunta: "Qual comentário demonstra uma checagem de fatos correta?",
        opcoes: ["Comentário 1", "Comentário 2", "Nenhum dos dois"],
        correta: 1,
        feedbackAcerto: "🔎 Exato! O comentário 2 buscou o site oficial e o mural antes de acreditar ou espalhar a informação.",
        feedbackErro: "Releia o comentário 2: ele fala em 'procurei no site oficial' e 'antes de espalhar' — isso é checagem.",
        ondeEstaNoTexto: "Antes de acreditar, procurei no site oficial da escola e no mural de avisos...",
      },
      {
        pergunta: "O que se descobriu no final da história?",
        opcoes: [
          "Que a proibição do recreio era verdadeira",
          "Que era um boato surgido de uma conversa mal interpretada",
          "Que a escola decidiu proibir o recreio definitivamente",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Perfeito! O comunicado oficial esclareceu que era apenas um boato.",
        feedbackErro: "Releia o último parágrafo: a coordenação esclareceu que era um boato mal interpretado.",
        ondeEstaNoTexto: "...o boato havia surgido de uma conversa mal interpretada entre alunos.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora vamos investigar as consequências de compartilhar sem checar.",
    perguntas: [
      {
        pergunta: "Qual foi o risco da atitude tomada no comentário 1?",
        opcoes: [
          "Nenhum risco, repassar informações rápido é sempre bom",
          "O risco de espalhar uma informação falsa para muitas pessoas antes de confirmar se era verdade",
          "O risco de a escola descobrir quem comentou",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Isso mesmo! Repassar sem checar transforma um boato em uma fake news que se espalha rapidamente, mesmo sem intenção de mentir.",
        feedbackErro:
          "Pense: o comentário 1 já ia 'avisar todo mundo' sem confirmar nada. Se o boato fosse falso (como era), essa atitude espalharia uma mentira.",
      },
      {
        pergunta: "Por que é importante buscar uma fonte oficial (como o site da escola) antes de acreditar em um post alarmante?",
        opcoes: [
          "Porque fontes oficiais nunca erram em nada",
          "Porque a fonte oficial pode ser checada e comparada com o que está sendo dito, reduzindo o risco de espalhar boatos",
          "Porque é uma regra sem nenhum motivo prático",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Exatamente! A fonte confiável permite confirmar (ou desmentir) uma informação antes de reagir ou compartilhar.",
        feedbackErro:
          "A fonte oficial serve exatamente para isso: dar uma base checável, em vez de confiar apenas em 'alguém me falou'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Um bom investigador digital segue um protocolo antes de compartilhar algo. Organize os passos.",
    bloco: {
      instrucao: "Da recepção do post à decisão final.",
      itens: [
        { id: "p1", texto: "Receber um post ou mensagem alarmante." },
        { id: "p2", texto: "Observar sinais de alerta: caps lock, urgência exagerada, ausência de fonte." },
        { id: "p3", texto: "Buscar a mesma informação em uma fonte oficial ou confiável." },
        { id: "p4", texto: "Só então decidir se vai acreditar e/ou compartilhar a informação." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔎 Perfeito! Esse é o protocolo de checagem de qualquer bom investigador digital.",
      feedbackErro: "Pense: primeiro recebe a informação, depois observa os sinais de alerta, depois checa a fonte, e só então decide o que fazer.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso no arquivo! Leia sozinho e identifique os sinais de fake news e a atitude correta.",
    leitura: {
      titulo: "Post e comentário: 'Água com limão emagrece 10 quilos em uma semana, garantido!!!'",
      destacar: ["emagrece 10 quilos em uma semana, garantido", "sem citar nenhum estudo ou especialista", "Isso não parece verdade"],
      paragrafos: [
        "Post: 'DESCOBERTA CHOCANTE!!! Água com limão em jejum emagrece 10 quilos em uma semana, GARANTIDO!!! Comprovado por médicos!!! Compartilhe com quem precisa emagrecer!' — o post não cita o nome de nenhum médico, nenhum estudo ou instituição, apenas a palavra 'médicos' de forma vaga.",
        "Comentário: 'Isso não parece verdade... nenhum médico de verdade prometeria um resultado tão exagerado assim, e o post nem cita o nome de nenhum estudo. Vou pesquisar em um site de saúde confiável antes de acreditar.'",
      ],
    },
    perguntas: [
      {
        pergunta: "Quais são os sinais de alerta nesse post?",
        opcoes: [
          "O uso de letras minúsculas em todo o texto",
          "Promessa exagerada ('garantido'), uso de caps lock e ausência de fonte específica (nome de médico ou estudo)",
          "O fato de falar sobre limão, uma fruta real",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Promessas absolutas, caps lock excessivo e citação vaga ('médicos', sem nome) são sinais clássicos de fake news.",
        feedbackErro: "Releia o post: repare nas palavras em maiúsculas, na palavra 'garantido' e na falta de nome de qualquer médico ou estudo.",
        ondeEstaNoTexto: "...emagrece 10 quilos em uma semana, GARANTIDO!!! Comprovado por médicos!!!",
      },
      {
        pergunta: "Qual atitude o comentário demonstra diante do post?",
        opcoes: [
          "Compartilhar imediatamente, porque parece uma boa notícia",
          "Desconfiar da promessa exagerada e buscar uma fonte confiável antes de acreditar",
          "Ignorar completamente, sem pensar em checar nada",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Correto! O comentário desconfia com base em bons motivos e propõe checar em um site de saúde confiável.",
        feedbackErro: "Releia o comentário: ele diz 'não parece verdade' e propõe 'pesquisar em um site de saúde confiável'.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "TEXTOS DIGITAIS como posts e comentários circulam rápido, muitas vezes sem a checagem de uma notícia tradicional.",
      "FAKE NEWS costumam usar sinais de alerta: caps lock, urgência exagerada, promessas absolutas e ausência de fonte confiável.",
      "Antes de acreditar ou compartilhar, um bom investigador digital busca a mesma informação em uma FONTE CONFIÁVEL.",
      "Compartilhar sem checar pode espalhar boatos e prejudicar pessoas, mesmo sem intenção de mentir.",
    ],
    miniDesafio: {
      pergunta: "Um post diz: 'URGENTE!!! Cientistas anônimos descobrem segredo que ninguém quer te contar!!!' Isso é:",
      opcoes: [
        "Um exemplo de fonte confiável",
        "Um forte sinal de possível fake news",
        "Uma notícia com checagem perfeita",
      ],
      correta: 1,
      feedbackAcerto: "🔎 Isso! Urgência exagerada, 'cientistas anônimos' (sem nome) e caps lock são sinais clássicos de alerta.",
      feedbackErro: "Pense: 'cientistas anônimos' não é uma fonte identificável, e o excesso de exclamações busca gerar reação emocional, não informar com clareza.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é 'fake news'?",
        opcoes: [
          "Uma notícia checada por vários jornalistas",
          "Uma notícia falsa que se espalha rapidamente, muitas vezes explorando emoções fortes",
          "Um tipo de post que só existe em jornais impressos",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Fake news é informação falsa que se propaga rápido, muitas vezes sem checagem.",
        feedbackErro: "Fake news é uma notícia falsa, não uma informação verificada por jornalistas.",
      },
      {
        pergunta: "2/5 — Qual desses é um sinal de alerta comum em fake news?",
        opcoes: [
          "Citar o nome de uma fonte oficial e a data do fato",
          "Usar caps lock, urgência exagerada e promessas absolutas sem citar fonte",
          "Explicar o assunto com calma e detalhes verificáveis",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Correto! Esses são sinais típicos de informação não confiável.",
        feedbackErro: "Fake news costuma usar linguagem exagerada e emocional, sem citar fontes que possam ser checadas.",
      },
      {
        pergunta: "3/5 — O que é uma 'fonte confiável'?",
        opcoes: [
          "Qualquer pessoa que compartilhou a informação primeiro",
          "Uma origem checável, como um órgão oficial, instituição séria ou especialista identificado",
          "Um post com muitos emojis e exclamações",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exatamente! Fonte confiável é aquela que pode ser verificada.",
        feedbackErro: "Fonte confiável precisa ser identificável e checável, não apenas alguém que compartilhou rápido.",
      },
      {
        pergunta: "4/5 — No caso do post sobre o recreio, o que a coordenação esclareceu no final?",
        opcoes: [
          "Que o recreio seria realmente proibido",
          "Que era um boato surgido de uma conversa mal interpretada",
          "Que o post era verdadeiro, mas incompleto",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! A coordenação confirmou que era apenas um boato.",
        feedbackErro: "Releia o final da história: o comunicado oficial esclareceu que era um mal-entendido.",
      },
      {
        pergunta: "5/5 — Qual é a atitude correta antes de compartilhar uma informação alarmante?",
        opcoes: [
          "Compartilhar imediatamente, para avisar todo mundo rápido",
          "Buscar uma fonte confiável e checar os fatos antes de acreditar ou espalhar",
          "Ignorar sempre, sem nunca checar nada",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Você já sabe investigar antes de acreditar. Caso final do arquivo resolvido — parabéns, investigador! 🕵️",
        feedbackErro: "A atitude correta é sempre checar a informação numa fonte confiável antes de acreditar ou compartilhar.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caçando sinais de fake news em casa",
    materiais: ["Um celular ou computador com acesso à internet (com supervisão de um adulto)", "Papel e lápis"],
    passos: [
      "1) Com a ajuda de um adulto, procurem juntos um post ou mensagem que pareça alarmante ou exagerada.",
      "2) A criança aponta os sinais de alerta que encontrar: caps lock, urgência exagerada, ausência de fonte.",
      "3) Juntos, tentem descobrir se existe uma fonte confiável que confirme (ou desminta) a informação.",
      "4) Conversem: o que vocês fariam antes de compartilhar algo parecido no futuro?",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'O post que analisamos tinha estes sinais de alerta: ___. Depois de checar, descobrimos que ___.'",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
  },
};
