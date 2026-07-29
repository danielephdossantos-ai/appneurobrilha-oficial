import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 1 — Narrador e Ponto de Vista
 * -------------------------------------------------------------
 * Abertura da Unidade 6 (Sala de Literatura e Voz) do curso
 * "A Central de Investigação da Linguagem".
 *
 * Foco pedagógico: reconhecer quem narra uma história (1ª ou 3ª
 * pessoa), diferenciar discurso direto de indireto e perceber como
 * a escolha do narrador muda o efeito produzido no leitor.
 *
 * BNCC: EF35LP26, EF15LP19, EF05LP07
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-narrador-e-ponto-de-vista",
  titulo: "Narrador e Ponto de Vista",
  iconeTrilha: "🎙️",
  bncc: ["EF35LP26", "EF15LP19", "EF05LP07"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Quem está contando essa história?",
    historia:
      "Toda investigação de texto literário começa com uma pergunta que ninguém faz em voz alta: quem está falando aqui? Um mesmo fato — uma briga no recreio, por exemplo — muda completamente dependendo de quem conta: quem levou o empurrão, quem empurrou, ou alguém de fora observando tudo. Hoje você vai treinar o olfato de investigador literário para farejar QUEM narra um texto e como isso muda o que o leitor sente.",
  },

  momento02_previsao: {
    instrucao:
      "Leia os dois trechos abaixo, escritos sobre o MESMO fato. Antes de avançar, pense: o que muda entre eles?",
    bloco: {
      titulo: "Dois relatos, um só fato",
      recado: {
        rotulo: "Fragmento A",
        icone: "🗣️",
        linhas: [
          "\"Eu não aguentava mais esperar. Corri até a porta e gritei: 'Chegou, gente, chegou!'\"",
        ],
        estilo: "papel",
      },
      pergunta: "Esse fragmento A está sendo contado por quem?",
      hipoteses: [
        { texto: "Por alguém que viveu a cena e usa 'eu'" },
        { texto: "Por um narrador que sabe tudo sobre todos os personagens, de fora da história" },
        { texto: "Por um jornal, sem nenhuma opinião" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔎 Exato! O pronome 'eu' e o verbo em primeira pessoa ('corri', 'gritei') entregam a pista: é alguém dentro da história narrando o próprio ponto de vista.",
      feedbackErro:
        "Repare nos verbos: 'eu não aguentava', 'corri', 'gritei'. Esses verbos em primeira pessoa mostram que quem narra também viveu a cena.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três termos que todo investigador literário precisa dominar.",
    cards: [
      {
        palavra: "narrador em 1ª pessoa",
        explicacao:
          "É a voz de um personagem que participa da história e conta os fatos usando 'eu'. Ele só sabe o que viveu, viu ou sentiu — tem visão limitada.",
        exemplo: "'Eu corri até a porta e gritei' — quem narra também é personagem da cena.",
      },
      {
        palavra: "narrador em 3ª pessoa",
        explicacao:
          "É uma voz de fora da história, que conta os fatos usando 'ele/ela'. Pode ser observador (só descreve o que vê) ou onisciente (sabe até os pensamentos secretos dos personagens).",
        exemplo: "'Ela correu até a porta e gritou' — quem narra observa a cena de fora.",
      },
      {
        palavra: "discurso direto e indireto",
        explicacao:
          "Discurso direto reproduz a fala exata do personagem, entre aspas ou travessão ('Chegou, gente!'). Discurso indireto conta o que foi dito, sem reproduzir a frase original (disse que havia chegado).",
        exemplo: "Direto: 'Ele disse: \"Estou atrasado.\"' Indireto: 'Ele disse que estava atrasado.'",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia como um investigador: sublinhe mentalmente os pronomes e verbos que revelam quem está narrando.",
    leitura: {
      titulo: "O Silêncio da Sala 12",
      destacar: ["Eu sabia", "meu coração", "percebi que ninguém mais sabia"],
      paragrafos: [
        "Eu sabia que alguma coisa estava errada assim que entrei na sala 12. As carteiras estavam todas viradas para a janela, como se a turma inteira tivesse combinado de olhar para fora ao mesmo tempo. Meu coração acelerou — não por medo, mas por curiosidade.",
        "Fui até a última carteira, onde Rafael costumava sentar, e encontrei um bilhete dobrado em quatro partes. 'Não conte pra ninguém, mas hoje o professor vai fazer um anúncio diferente', dizia o papel, com letra apressada.",
        "Guardei o bilhete no bolso e percebi que ninguém mais sabia daquilo além de mim. Era estranho carregar um segredo sozinho dentro de uma sala cheia de gente.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Esse texto é narrado em qual pessoa?",
        opcoes: ["Primeira pessoa (eu)", "Terceira pessoa (ele/ela)", "Segunda pessoa (você)"],
        correta: 0,
        feedbackAcerto: "🔎 Isso! 'Eu sabia', 'meu coração' e 'guardei' mostram um narrador-personagem, em primeira pessoa.",
        feedbackErro: "Procure os pronomes usados: 'eu sabia', 'meu coração' — eles indicam quem está narrando.",
        ondeEstaNoTexto: "Eu sabia que alguma coisa estava errada assim que entrei na sala 12.",
      },
      {
        pergunta: "O que o narrador sente ao entrar na sala?",
        opcoes: ["Tédio", "Curiosidade", "Raiva"],
        correta: 1,
        feedbackAcerto: "🔎 Exato! O texto diz claramente: 'Meu coração acelerou — não por medo, mas por curiosidade.'",
        feedbackErro: "Releia o fim do primeiro parágrafo: o narrador explica por que seu coração acelerou.",
        ondeEstaNoTexto: "Meu coração acelerou — não por medo, mas por curiosidade.",
      },
      {
        pergunta: "Por que o narrador só sabe o que está no bilhete e nada mais sobre o 'anúncio diferente'?",
        opcoes: [
          "Porque ele é o professor",
          "Porque um narrador em 1ª pessoa só sabe o que vive, vê ou lê",
          "Porque o texto está incompleto",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Perfeito! Esse é o efeito de um narrador em 1ª pessoa: visão limitada. Ele só sabe o que descobriu por conta própria — como o leitor.",
        feedbackErro:
          "Pense na diferença entre 1ª e 3ª pessoa: quem narra em 1ª pessoa não tem acesso a tudo, só ao que viveu ou descobriu.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora investigue o EFEITO que a escolha do narrador provoca no leitor.",
    perguntas: [
      {
        pergunta:
          "Se o mesmo texto fosse reescrito em 3ª pessoa onisciente ('Rafael sabia que o professor faria um anúncio diferente...'), o que mudaria para o leitor?",
        opcoes: [
          "Nada mudaria",
          "O leitor deixaria de sentir o mistério, pois saberia mais do que o próprio narrador-personagem sabia",
          "O texto ficaria mais curto",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Isso mesmo! Com narrador onisciente, o leitor teria acesso a informações que o personagem não tinha — e o suspense do 'segredo guardado' desapareceria.",
        feedbackErro:
          "Pense no que faz esse texto ter clima de mistério: é justamente o narrador saber pouco, como o leitor. Um narrador onisciente contaria tudo de uma vez.",
      },
      {
        pergunta: "Qual é o efeito de o texto usar discurso direto no bilhete ('Não conte pra ninguém...')?",
        opcoes: [
          "Deixa a cena mais distante e formal",
          "Dá a impressão de que o leitor está lendo o bilhete junto com o narrador, ao vivo",
          "Não tem nenhum efeito especial",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Exato! O discurso direto reproduz as palavras exatas, criando a sensação de que estamos vendo a cena acontecer, em vez de só ouvir um resumo dela.",
        feedbackErro:
          "Compare: 'o bilhete dizia para não contar pra ninguém' (indireto) soa mais distante do que ler as palavras exatas entre aspas.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos de investigação de um narrador na ordem certa, do mais geral ao mais específico.",
    bloco: {
      instrucao: "Do primeiro passo ao último, para descobrir o ponto de vista de um texto.",
      itens: [
        { id: "p1", texto: "Observar os pronomes usados: 'eu' ou 'ele/ela'." },
        { id: "p2", texto: "Verificar se o narrador participa da história ou só observa de fora." },
        { id: "p3", texto: "Checar se há falas em discurso direto ou indireto." },
        { id: "p4", texto: "Concluir qual é o ponto de vista e que efeito ele provoca no leitor." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔎 Perfeito! Essa é a rota de investigação: pronome → participação → fala → efeito.",
      feedbackErro: "Pense em uma investigação: primeiro observamos pistas simples (pronomes), depois aprofundamos até concluir o efeito.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e identifique o narrador e seu efeito.",
    leitura: {
      titulo: "A Última Cadeira Vazia",
      destacar: ["Marina não entendia", "ela apertou os punhos", "ninguém percebeu que ela"],
      paragrafos: [
        "Marina não entendia por que todos os colegas evitavam olhar para a cadeira vazia no fundo da sala. Ela apertou os punhos por baixo da carteira, tentando disfarçar o nervosismo que crescia a cada minuto de silêncio.",
        "O professor entrou, olhou para a cadeira vazia e, sem dizer nada, começou a aula normalmente, como se aquilo fosse o mais comum do mundo. Ninguém percebeu que ela, Marina, era a única que sabia o motivo daquela ausência.",
        "Ao final da aula, Marina guardou o segredo mais uma vez, decidida a contar a verdade somente quando tivesse certeza de que seria a hora certa.",
      ],
    },
    perguntas: [
      {
        pergunta: "Esse texto é narrado em qual pessoa?",
        opcoes: ["Primeira pessoa", "Terceira pessoa", "O texto não tem narrador"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! O narrador usa 'ela', 'Marina' — está de fora da personagem, contando em 3ª pessoa.",
        feedbackErro: "Observe os pronomes: 'ela apertou', 'Marina guardou' — são marcas de narrador em 3ª pessoa.",
        ondeEstaNoTexto: "Marina não entendia por que todos os colegas evitavam olhar para a cadeira vazia.",
      },
      {
        pergunta: "Mesmo em 3ª pessoa, o narrador revela um segredo que só Marina conhece. Isso mostra que esse narrador é:",
        opcoes: [
          "Observador, que só vê o que está por fora",
          "Onisciente, que conhece pensamentos e segredos dos personagens",
          "Um personagem da história",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Exato! Um narrador observador não saberia o que só está na cabeça de Marina. Esse é um narrador onisciente em 3ª pessoa.",
        feedbackErro:
          "Pense: como o narrador sabe que Marina 'era a única que sabia o motivo'? Só um narrador que enxerga os pensamentos dos personagens conseguiria contar isso.",
        ondeEstaNoTexto: "Ninguém percebeu que ela, Marina, era a única que sabia o motivo daquela ausência.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "O NARRADOR pode estar em 1ª pessoa (participa da história, usa 'eu', visão limitada) ou em 3ª pessoa (fora da história, usa 'ele/ela').",
      "Narrador em 3ª pessoa pode ser observador (só descreve o que vê) ou onisciente (sabe pensamentos e segredos de todos).",
      "DISCURSO DIRETO reproduz a fala exata do personagem; DISCURSO INDIRETO conta o que foi dito, sem reproduzir a frase original.",
      "A escolha do narrador muda o efeito no leitor: cria mistério, aproxima ou distancia, revela ou esconde informações.",
    ],
    miniDesafio: {
      pergunta: "Em 'Ele disse que chegaria atrasado', temos um exemplo de:",
      opcoes: ["Discurso direto", "Discurso indireto", "Narrador em 1ª pessoa"],
      correta: 1,
      feedbackAcerto: "🔎 Isso! A fala foi contada, não reproduzida entre aspas — por isso é discurso indireto.",
      feedbackErro: "Repare que não há aspas nem travessão reproduzindo a fala exata: o narrador só contou o que foi dito.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Um narrador em 1ª pessoa se caracteriza por:",
        opcoes: [
          "Usar 'eu' e ter visão limitada aos fatos que viveu ou descobriu",
          "Saber tudo sobre todos os personagens",
          "Nunca aparecer na história",
        ],
        correta: 0,
        feedbackAcerto: "🔎 Isso! O narrador-personagem só sabe o que ele mesmo viveu, viu ou descobriu.",
        feedbackErro: "Pense no pronome usado ('eu') e lembre que esse narrador tem acesso limitado aos fatos.",
      },
      {
        pergunta: "2/5 — Um narrador onisciente em 3ª pessoa consegue:",
        opcoes: [
          "Apenas descrever o que vê de fora",
          "Revelar pensamentos e segredos de vários personagens",
          "Só falar sobre si mesmo",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Correto! 'Onisciente' significa que sabe tudo, inclusive o que se passa na mente dos personagens.",
        feedbackErro: "'Onisciente' vem de 'saber tudo' — esse narrador tem acesso a pensamentos e segredos.",
      },
      {
        pergunta: "3/5 — 'Chegou, gente, chegou!', gritou ela. Esse trecho é um exemplo de:",
        opcoes: ["Discurso indireto", "Discurso direto", "Narração em 3ª pessoa onisciente apenas"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! A fala exata aparece reproduzida entre aspas — discurso direto.",
        feedbackErro: "Discurso direto reproduz a fala exata, geralmente entre aspas ou após travessão.",
      },
      {
        pergunta: "4/5 — Na história 'A Última Cadeira Vazia', o narrador é:",
        opcoes: [
          "Em 1ª pessoa, pois Marina conta sua própria história",
          "Em 3ª pessoa onisciente, pois revela o segredo que só Marina conhecia",
          "Em 3ª pessoa observadora, pois só descreve o ambiente",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! O narrador está fora da personagem, mas conhece o segredo de sua mente — é onisciente.",
        feedbackErro: "Releia: o narrador usa 'ela/Marina' (3ª pessoa) e revela o que só ela sabia (onisciência).",
      },
      {
        pergunta: "5/5 — Por que a escolha do narrador é importante para um investigador de textos?",
        opcoes: [
          "Porque ela não muda nada na leitura",
          "Porque ela define o que o leitor pode saber e que efeito o texto provoca (mistério, proximidade, distância)",
          "Porque só serve para textos de ficção científica",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Você concluiu a primeira investigação da Sala de Literatura e Voz! 🌟",
        feedbackErro: "O narrador controla o que sabemos e como sentimos a história — essa escolha é uma ferramenta poderosa do autor.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: reescrevendo o ponto de vista",
    materiais: ["Papel e lápis (ou celular para digitar)"],
    passos: [
      "1) Escolham juntos um fato pequeno do dia (uma refeição, uma ida ao mercado, um jogo).",
      "2) A criança escreve 3 frases contando esse fato em 1ª pessoa ('eu fiz...').",
      "3) Depois, reescreve o mesmo fato em 3ª pessoa ('ele/ela fez...').",
      "4) Conversem: o que mudou na sensação de quem lê cada versão?",
    ],
    registro: "🗣️ Registrem: 'Na versão em 1ª pessoa, senti ___. Na versão em 3ª pessoa, senti ___.'",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
  },
};
