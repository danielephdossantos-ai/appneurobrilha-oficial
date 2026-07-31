import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as raposa } from "@/assets/neuro-treino/objetos/raposa.png.asset.json";
import { url as floresta } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as dicionario } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as tigre } from "@/assets/neuro-treino/objetos/tigre.png.asset.json";

/**
 * Aula 3 — Palavra Desconhecida? Use o Contexto
 * -------------------------------------------------------------
 * O clube encontra palavras "cifradas" (difíceis) dentro de textos
 * e aprende a estratégia de DESCOBRIR O SIGNIFICADO PELO CONTEXTO
 * — sem precisar de dicionário toda hora.
 *
 * Foco pedagógico: EF35LP05 — vocabulário por dedução contextual;
 * observar pistas ao redor da palavra (o que ela faz, com quem
 * aparece, o que vem antes/depois).
 *
 * BNCC: EF35LP05, EF35LP03, EF03LP26
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-palavra-desconhecida-contexto",
  titulo: "Palavra Desconhecida? Use o Contexto",
  iconeTrilha: "🔎",
  bncc: ["EF35LP05", "EF35LP03", "EF03LP26"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "A Palavra Cifrada",
    historia:
      "Um bilhete do clube trouxe uma palavra que ninguém conhecia: 'destemida'. Brilha ia correr atrás do dicionário, mas Aurora o segurou pelo braço. — Espera! Antes de abrir o dicionário, um detetive treinado usa o CONTEXTO: as pistas escondidas nas frases ao redor da palavra. Muitas vezes elas já entregam o significado.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Olhe a frase abaixo. Mesmo sem saber a palavra destacada, tente adivinhar o que ela significa pelas pistas ao redor.",
    bloco: {
      titulo: "A Frase Misteriosa",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: tigre, nome: "Um tigre" },
        { imagemUrl: floresta, nome: "A floresta" },
      ],
      recado: {
        rotulo: "Frase para investigar",
        icone: "🔎",
        linhas: [
          "A exploradora era DESTEMIDA: atravessou a floresta escura",
          "sozinha, sem medo do tigre que rugia por perto.",
        ],
        estilo: "papel",
      },
      pergunta: "O que a palavra DESTEMIDA provavelmente significa?",
      hipoteses: [
        { texto: "Corajosa, que não sente medo." },
        { texto: "Cansada e com fome." },
        { texto: "Perdida e confusa." },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔎 Isso mesmo! As pistas 'sem medo' e 'sozinha' ao lado do tigre mostram que DESTEMIDA quer dizer corajosa.",
      feedbackErro:
        "Releia: a frase diz 'sem medo do tigre'. Essa é a pista — DESTEMIDA tem a ver com não sentir medo, ou seja, ser corajosa.",
      dica: "🔎 Pista: lembre do que significa “contexto” — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas ferramentas do detetive de palavras.",
    cards: [
      {
        palavra: "contexto",
        explicacao:
          "São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer.",
        exemplo: "Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente.",
        imagemUrl: lupa,
      },
      {
        palavra: "sinônimo",
        explicacao:
          "É uma palavra parecida no significado com outra. Descobrir um sinônimo ajuda a confirmar o sentido pelo contexto.",
        exemplo: "'Destemida' pode ser trocada por 'corajosa' sem mudar o sentido da frase.",
        imagemUrl: dicionario,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia devagar. Quando encontrar a palavra destacada, pare e pense: o que as frases ao redor dizem sobre ela?",
    leitura: {
      titulo: "A Raposa Astuta",
      imagemUrl: raposa,
      legendaImagem: "A raposa espiando o galinheiro",
      destacar: ["astuta", "enganou", "esperteza"],
      paragrafos: [
        "No fundo do quintal, morava uma raposa muito ASTUTA. Ela nunca atacava o galinheiro de frente — sempre bolava um plano cheio de esperteza.",
        "Certa noite, ela fingiu ser um cachorro perdido para distrair o cão de guarda e assim conseguiu se aproximar sem ser notada.",
        "O fazendeiro só descobriu o truque no dia seguinte, quando percebeu as pegadas estranhas ao redor do galinheiro.",
        "Todos no vilarejo comentavam: aquela raposa enganou até o cachorro mais esperto da fazenda com sua astúcia.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "Onde a raposa morava?",
        opcoes: ["No galinheiro", "No fundo do quintal", "Dentro da casa"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! 'No fundo do quintal, morava uma raposa…'",
        feedbackErro: "A resposta está na primeira frase do texto.",
        ondeEstaNoTexto: "No fundo do quintal, morava uma raposa muito astuta.",
        dica: "🔎 Pista: releia no texto o trecho “No fundo do quintal, morava uma raposa muito astuta.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “Onde a raposa morava?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que a raposa fingiu ser para enganar o cão?",
        opcoes: ["Um gato", "Um cachorro perdido", "Uma galinha"],
        correta: 1,
        feedbackAcerto: "🔎 Boa! 'ela fingiu ser um cachorro perdido'.",
        feedbackErro: "Releia o segundo parágrafo — logo depois de 'fingiu ser'.",
        ondeEstaNoTexto: "ela fingiu ser um cachorro perdido para distrair o cão de guarda",
        dica: "🔎 Pista: releia no texto o trecho “ela fingiu ser um cachorro perdido para distrair o cão de guarda”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “O que a raposa fingiu ser para enganar o cão?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Quando o fazendeiro descobriu o truque?",
        opcoes: ["Na mesma hora", "No dia seguinte", "Nunca descobriu"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! 'O fazendeiro só descobriu o truque no dia seguinte'.",
        feedbackErro: "A resposta está no início do terceiro parágrafo.",
        ondeEstaNoTexto: "O fazendeiro só descobriu o truque no dia seguinte…",
        dica: "🔎 Pista: releia no texto o trecho “O fazendeiro só descobriu o truque no dia seguinte…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “Quando o fazendeiro descobriu o truque?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora, use o CONTEXTO para descobrir os significados sem dicionário.",
    perguntas: [
      {
        pergunta: "Pelo contexto do texto, o que significa 'ASTUTA'?",
        opcoes: ["Distraída e lenta", "Esperta e cheia de truques", "Assustada e tímida"],
        correta: 1,
        feedbackAcerto:
          "🔎 Isso! As pistas 'bolava um plano cheio de esperteza' e 'enganou' mostram que astuta é sinônimo de esperta.",
        feedbackErro:
          "Repare nas pistas ao redor: 'plano cheio de esperteza' e 'enganou o cachorro'. Isso mostra que astuta = esperta, cheia de truques.",
        dica: "🔎 Pista: lembre do que significa “contexto” — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “Pelo contexto do texto, o que significa 'ASTUTA'?” com essa ideia na cabeça.",
      },
      {
        pergunta: "A palavra 'astúcia', no último parágrafo, tem o mesmo sentido de qual palavra do texto?",
        opcoes: ["Esperteza", "Preguiça", "Tristeza"],
        correta: 0,
        feedbackAcerto:
          "🔎 Exato! 'Astúcia' e 'esperteza' aparecem no texto se referindo à mesma qualidade da raposa.",
        feedbackErro:
          "No segundo parágrafo já apareceu a palavra 'esperteza' descrevendo a raposa — é o mesmo sentido de 'astúcia'.",
        dica: "🔎 Pista: lembre do que significa “contexto” — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “A palavra 'astúcia', no último parágrafo, tem o mesmo sentido de qual…” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o passo a passo para descobrir uma palavra difícil sem dicionário.",
    bloco: {
      instrucao: "Ordem certa da estratégia.",
      itens: [
        { id: "p1", texto: "Encontrar a palavra desconhecida no texto.", imagemUrl: livro },
        { id: "p2", texto: "Reler as frases antes e depois dela, procurando pistas.", imagemUrl: lupa },
        { id: "p3", texto: "Testar um significado provável e ver se a frase continua fazendo sentido.", imagemUrl: brilha },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔎 Isso! Esse é o caminho de um detetive de palavras.",
      feedbackErro: "Primeiro se acha a palavra, depois se procuram pistas ao redor, e só então se testa um significado.",
      dica: "🔎 Pista: lembre do que significa “contexto” — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo texto! Leia sozinho e use o contexto para decifrar a palavra destacada.",
    leitura: {
      titulo: "O Mapa Enigmático",
      imagemUrl: mapa,
      destacar: ["enigmático", "decifrar", "escondia pistas"],
      paragrafos: [
        "O velho mapa era ENIGMÁTICO: tinha símbolos estranhos, setas que não levavam a lugar nenhum e um bilhete que dizia 'só os espertos vão entender'.",
        "Aurora e Brilha passaram a tarde tentando decifrar cada símbolo, sabendo que o mapa escondia pistas de um tesouro há muito esquecido.",
        "No fim, descobriram que os símbolos formavam, na verdade, o desenho de uma árvore antiga do parque — era ali que o tesouro estava enterrado.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que o bilhete dentro do mapa dizia?",
        opcoes: ["'Cuidado com o tigre'", "'Só os espertos vão entender'", "'Vire à esquerda'"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Está entre aspas no primeiro parágrafo.",
        feedbackErro: "Releia o primeiro parágrafo — a frase do bilhete está entre aspas.",
        ondeEstaNoTexto: "um bilhete que dizia 'só os espertos vão entender'",
        dica: "🔎 Pista: releia no texto o trecho “um bilhete que dizia 'só os espertos vão entender'”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “O que o bilhete dentro do mapa dizia?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Pelo contexto, o que significa a palavra 'ENIGMÁTICO'?",
        opcoes: ["Fácil e claro", "Misterioso e difícil de entender", "Colorido e bonito"],
        correta: 1,
        feedbackAcerto:
          "🔎 Muito bem! As pistas 'símbolos estranhos', 'setas que não levavam a lugar nenhum' e 'só os espertos vão entender' mostram que é algo misterioso.",
        feedbackErro:
          "Junte as pistas: símbolos estranhos + setas confusas + 'só os espertos entendem'. Tudo isso indica algo misterioso — enigmático.",
        dica: "🔎 Pista: lembre do que significa “contexto” — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “Pelo contexto, o que significa a palavra 'ENIGMÁTICO'?” com essa ideia na cabeça.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Antes de correr para o dicionário, tente usar o CONTEXTO — as pistas ao redor da palavra.",
      "Pergunte: 'o que essa palavra faz na frase? Com o que ela combina?'",
      "Teste um significado provável e veja se a frase continua fazendo sentido.",
      "SINÔNIMOS no próprio texto podem confirmar o significado (ex.: astuta = esperteza).",
    ],
    miniDesafio: {
      pergunta: "Na frase 'O quarto estava imundo, cheio de lixo e poeira por todo lado', o que significa 'imundo'?",
      opcoes: [
        "Muito sujo",
        "Muito organizado",
        "Muito grande"
      ],
      correta: 0,
      feedbackAcerto: "🔎 Isso! 'Lixo e poeira' são as pistas de contexto.",
      feedbackErro: "As pistas 'cheio de lixo e poeira' mostram que imundo significa muito sujo.",
      dica: "🔎 Pista: lembre do que significa “contexto” — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “Na frase 'O quarto estava imundo, cheio de lixo e poeira por todo lad…” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é 'usar o contexto' para descobrir uma palavra?",
        opcoes: [
          "Ignorar a palavra e pular",
          "Usar as pistas das frases ao redor para deduzir o significado",
          "Perguntar para outra pessoa sempre",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso!",
        feedbackErro: "Usar o contexto é observar as frases ao redor da palavra para descobrir o significado.",
        dica: "🔎 Pista: lembre do que significa “contexto” — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “1/5 — O que é 'usar o contexto' para descobrir uma palavra?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — No texto da raposa, qual pista ajudou a entender 'astuta'?",
        opcoes: ["'plano cheio de esperteza'", "'no fundo do quintal'", "'pegadas estranhas'"],
        correta: 0,
        feedbackAcerto: "🔎 Correto!",
        feedbackErro: "A pista mais direta foi 'plano cheio de esperteza', ligada à ideia de astúcia.",
        dica: "🔎 Pista: lembre do que significa “contexto” — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “2/5 — No texto da raposa, qual pista ajudou a entender 'astuta'?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — Qual é um sinônimo de 'astuta' usado no próprio texto?",
        opcoes: ["Esperteza", "Preguiça", "Fraqueza"],
        correta: 0,
        feedbackAcerto: "🔎 Isso mesmo!",
        feedbackErro: "O texto usa 'esperteza' para descrever a mesma qualidade de 'astuta'.",
        dica: "🔎 Pista: lembre do que significa “contexto” — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “3/5 — Qual é um sinônimo de 'astuta' usado no próprio texto?” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — No texto do mapa, o que significa 'ENIGMÁTICO' pelo contexto?",
        opcoes: ["Misterioso e difícil de entender", "Colorido e alegre", "Rápido e leve"],
        correta: 0,
        feedbackAcerto: "🔎 Isso!",
        feedbackErro: "As pistas do texto (símbolos estranhos, setas confusas) mostram que é algo misterioso.",
        dica: "🔎 Pista: lembre do que significa “contexto” — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “4/5 — No texto do mapa, o que significa 'ENIGMÁTICO' pelo contexto?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Qual é o passo mais importante antes de 'adivinhar' o significado de uma palavra?",
        opcoes: [
          "Reler as frases ao redor da palavra",
          "Fechar o livro",
          "Trocar de assunto",
        ],
        correta: 0,
        feedbackAcerto: "🔎 Isso! Terceira pista do clube resolvida! 🌟",
        feedbackErro: "É preciso reler as frases ao redor para juntar pistas antes de arriscar um significado.",
        dica: "🔎 Pista: lembre do que significa “contexto” — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: contexto — São as palavras e frases ao redor de uma palavra desconhecida. Elas dão pistas do que ela quer dizer. Exemplo: Em 'o rio estava turvo, cheio de lama', dá pra inferir que 'turvo' é o contrário de transparente. Agora volte à pergunta “5/5 — Qual é o passo mais importante antes de 'adivinhar' o significa…” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caça-palavras difíceis",
    materiais: ["Um livro ou texto qualquer da casa"],
    passos: [
      "1) Encontrem juntos uma palavra difícil em um livro, embalagem ou placa.",
      "2) Antes de procurar no dicionário, a criança tenta adivinhar o significado usando as palavras ao redor.",
      "3) Depois, confiram no dicionário (ou perguntem a um adulto) se a dedução estava certa.",
      "4) Repitam com outra palavra, se quiserem continuar o jogo.",
    ],
    registro: "🗣️ Registre: 'A palavra era ___. Eu descobri que significava ___ porque a pista era ___.'",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
