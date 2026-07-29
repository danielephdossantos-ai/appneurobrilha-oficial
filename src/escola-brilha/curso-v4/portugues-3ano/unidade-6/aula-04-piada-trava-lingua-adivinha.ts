import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as galo } from "@/assets/neuro-treino/objetos/galo.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as coroa } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as quadro } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";

/**
 * Aula 4 — Piada, Trava-Língua e Adivinha
 * -------------------------------------------------------------
 * Aula final da Unidade 6 e do curso "O Clube dos Detetives da
 * Palavra". O clube investiga o HUMOR na língua: duplo sentido,
 * ambiguidade, jogos sonoros de trava-língua e a lógica-armadilha
 * das adivinhas. Encerra com leitura expressiva em voz alta.
 *
 * BNCC: EF35LP31 (apreciar textos humorísticos e de jogo verbal),
 * EF35LP28 (efeitos de sentido/sonoros).
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-piada-trava-lingua-adivinha",
  titulo: "Piada, Trava-Língua e Adivinha",
  iconeTrilha: "😂",
  bncc: ["EF35LP31", "EF35LP28"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O último caso: o Mistério do Riso",
    historia:
      "Aurora reuniu o clube inteiro embaixo da árvore-sede. — Chegou a hora do ÚLTIMO CASO: o Mistério do Riso! — ela anunciou. — Piadas, trava-línguas e adivinhas brincam com as palavras de um jeito especial: usam o DUPLO SENTIDO e o jogo de sons para nos fazer rir. Resolver esse mistério é a etapa final para virar Detetive-Mestre da Palavra. Preparados?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "No mural do clube apareceu uma pergunta engraçada. Antes de ver a resposta, tente adivinhar a graça escondida.",
    bloco: {
      titulo: "Adivinha do Mural",
      capaImagemUrl: quadro,
      pistas: [
        { imagemUrl: relogio, nome: "Um relógio" },
      ],
      recado: {
        rotulo: "Adivinha do dia",
        icone: "🧩",
        linhas: ["\"O que tem coroa, mas não é rei, e anda, mas não tem pé?\""],
        estilo: "cartaz",
      },
      pergunta: "Qual é a resposta dessa adivinha?",
      hipoteses: [
        { texto: "Um relógio.", imagemUrl: relogio },
        { texto: "Um cavalo." },
        { texto: "Uma árvore." },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "😂 Isso! O relógio tem 'coroa' (a peça de dar corda, no alto) e 'anda' (o tempo passa) sem ter pés. A adivinha brinca com PALAVRAS QUE TÊM MAIS DE UM SENTIDO.",
      feedbackErro:
        "Pense em objetos que 'andam' sem pernas e têm uma parte chamada 'coroa'. Relógios antigos têm uma peça no topo chamada coroa!",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras para entender a engenharia do humor na língua.",
    cards: [
      {
        palavra: "duplo sentido",
        explicacao: "É quando uma palavra ou frase pode ser entendida de DUAS maneiras diferentes — e é aí que mora a graça.",
        exemplo: "'Coroa' pode ser de rei OU a peça de dar corda no relógio.",
        imagemUrl: coroa,
      },
      {
        palavra: "trava-língua",
        explicacao: "É uma frase com sons parecidos repetidos, feita para ENROLAR a língua de quem tenta falar rápido.",
        exemplo: "'O rato roeu a roupa do rei de Roma' mistura os sons de 'r' e 'ro' o tempo todo.",
        imagemUrl: rato,
      },
      {
        palavra: "adivinha",
        explicacao: "É um pequeno enigma com pergunta e resposta engraçada, que usa pistas de duplo sentido pra confundir antes de revelar.",
        exemplo: "'O que é, o que é: quanto mais se tira, maior fica?' Resposta: um buraco.",
        imagemUrl: papel,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia em voz alta, bem devagar primeiro, depois tentando ficar mais rápido — sem embolar a língua!",
    leitura: {
      titulo: "Trio de Trava-Línguas do Clube",
      imagemUrl: sapo,
      legendaImagem: "O sapo dentro do saco",
      destacar: ["sapo", "saco", "pato", "rato"],
      paragrafos: [
        "O sapo dentro do saco, o saco com o sapo dentro. O sapo esperneia, o saco balança, mas o sapo não sai do saco enquanto o saco estiver amarrado.",
        "Um pato pisou na pata do outro pato. Poucas patas puderam pisar sem que o pato gritasse pato!",
        "O rato roeu a rolha da garrafa do rei. A rolha roída rolou, e o rato, risonho, riu da rolha rolada.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "No primeiro trava-língua, o que está dentro do saco?",
        opcoes: ["Um rato", "Um sapo", "Uma rolha"],
        correta: 1,
        feedbackAcerto: "😂 Isso! 'O sapo dentro do saco'.",
        feedbackErro: "Releia a primeira frase — o bicho dentro do saco é dito logo no início.",
        ondeEstaNoTexto: "O sapo dentro do saco, o saco com o sapo dentro.",
      },
      {
        pergunta: "No segundo trava-língua, o que um pato fez com o outro?",
        opcoes: ["Deu um abraço", "Pisou na pata dele", "Roubou sua comida"],
        correta: 1,
        feedbackAcerto: "😂 Boa! 'Um pato pisou na pata do outro pato'.",
        feedbackErro: "A primeira frase do segundo trava-língua conta exatamente o que aconteceu.",
        ondeEstaNoTexto: "Um pato pisou na pata do outro pato.",
      },
      {
        pergunta: "No terceiro trava-língua, o que o rato roeu?",
        opcoes: ["A rolha da garrafa", "O queijo da mesa", "A roupa do rei"],
        correta: 0,
        feedbackAcerto: "😂 Exato! 'O rato roeu a rolha da garrafa do rei'.",
        feedbackErro: "Releia o começo — a coisa roída aparece logo depois de 'roeu'.",
        ondeEstaNoTexto: "O rato roeu a rolha da garrafa do rei.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos investigar o que faz cada texto ser engraçado — o mecanismo do humor.",
    perguntas: [
      {
        pergunta: "O que torna um trava-língua difícil de falar rápido?",
        opcoes: [
          "Ele repete sons parecidos várias vezes",
          "Ele é escrito com letra pequena",
          "Ele não tem nenhuma palavra difícil",
        ],
        correta: 0,
        feedbackAcerto:
          "😂 Isso! A repetição de sons parecidos (como 'r' e 'ro' em 'rato roeu a rolha') confunde a boca — essa é a graça do trava-língua.",
        feedbackErro:
          "Pense no som: sons parecidos repetidos (pato/pata, rato/rolha) fazem a boca se embolar — é isso que torna difícil.",
      },
      {
        pergunta: "Na adivinha do relógio, qual é o duplo sentido da palavra 'coroa'?",
        opcoes: [
          "Coroa de rei e coroa (peça) do relógio",
          "Coroa de flores e coroa de dentes",
          "Não existe duplo sentido nessa adivinha",
        ],
        correta: 0,
        feedbackAcerto: "😂 Isso! A graça está em pensar em 'coroa de rei' primeiro, quando na verdade é a peça do relógio.",
        feedbackErro: "A adivinha engana usando 'coroa' pensando em rei — mas a resposta usa outro significado da palavra.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para resolver uma adivinha de duplo sentido.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Ler a adivinha com atenção às palavras-chave.", imagemUrl: papel },
        { id: "p2", texto: "Pensar em MAIS DE UM significado para cada palavra-chave.", imagemUrl: coroa },
        { id: "p3", texto: "Testar cada significado até achar o que combina com todas as pistas.", imagemUrl: relogio },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "😂 Perfeito! Esse é o método detetive pra resolver charadas: ler, pensar em duplo sentido, testar.",
      feedbackErro: "Pense: primeiro LEMOS, depois pensamos em outros SIGNIFICADOS, só então TESTAMOS qual combina.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Última leitura do curso! Leia em voz alta, sozinho, e resolva a piada e a adivinha.",
    leitura: {
      titulo: "Piada e Adivinha Final do Clube",
      imagemUrl: galo,
      destacar: ["manga", "pilha"],
      paragrafos: [
        "— Por que o galo não usa relógio?\n— Porque ele já tem despertador embutido!",
        "Adivinha: \"Tenho manga, mas não sou camisa. O que sou?\"",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que a piada do galo é engraçada?",
        opcoes: [
          "Porque compara o canto do galo (que acorda todo mundo) com um despertador",
          "Porque galos não sabem contar",
          "Porque a piada não faz sentido nenhum",
        ],
        correta: 0,
        feedbackAcerto:
          "😂 Isso! A graça está em comparar o canto de manhã cedo do galo com a função de um despertador — ele 'já vem' com essa função.",
        feedbackErro:
          "Pense: o que um despertador faz? Acorda a gente de manhã. O galo faz a mesma coisa cantando — daí a graça.",
      },
      {
        pergunta: "Na adivinha \"Tenho manga, mas não sou camisa\", qual é o duplo sentido da palavra 'manga'?",
        opcoes: [
          "Manga de roupa e manga (a fruta)",
          "Manga de mangueira de jardim e manga de roupa",
          "Não existe duplo sentido, é só uma pergunta boba",
        ],
        correta: 0,
        feedbackAcerto:
          "😂 Isso! A frase engana pensando em 'manga de camisa', mas a resposta é a fruta manga, que também tem esse nome.",
        feedbackErro:
          "Pense em outra coisa que se chama 'manga' além da parte da roupa — uma fruta bem comum no Brasil!",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "DUPLO SENTIDO é quando uma palavra pode ser entendida de duas formas — é a base do humor verbal.",
      "TRAVA-LÍNGUA usa sons parecidos repetidos para embolar a fala.",
      "ADIVINHA usa pistas de duplo sentido para confundir antes de revelar a resposta.",
      "Ler em voz alta, com expressão, é o que faz o humor de um texto realmente funcionar.",
    ],
    miniDesafio: {
      pergunta: "Qual é o segredo de uma boa adivinha?",
      opcoes: [
        "Usar palavras muito difíceis",
        "Brincar com o duplo sentido das palavras",
        "Não ter nenhuma pista",
      ],
      correta: 1,
      feedbackAcerto: "😂 Isso! O segredo é justamente brincar com os DOIS sentidos possíveis de uma palavra.",
      feedbackErro: "O truque da adivinha está em usar palavras com DUPLO SENTIDO para confundir antes da resposta.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é 'duplo sentido'?",
        opcoes: [
          "Quando uma palavra só tem um significado",
          "Quando uma palavra pode ser entendida de duas formas",
          "Quando a frase está escrita errado",
        ],
        correta: 1,
        feedbackAcerto: "😂 Isso! Duplo sentido é ter dois significados possíveis.",
        feedbackErro: "Duplo sentido é quando a MESMA palavra pode significar duas coisas diferentes.",
      },
      {
        pergunta: "2/5 — O que faz um trava-língua ser difícil de falar?",
        opcoes: ["Sons parecidos repetidos", "Frases muito curtas", "Palavras em outro idioma"],
        correta: 0,
        feedbackAcerto: "😂 Correto! Sons parecidos repetidos embolam a fala.",
        feedbackErro: "O trava-língua repete SONS PARECIDOS de propósito, para embolar a boca.",
      },
      {
        pergunta: "3/5 — Na adivinha do relógio, o que representava 'coroa'?",
        opcoes: ["Coroa de rei", "A peça de dar corda no relógio", "Um chapéu"],
        correta: 1,
        feedbackAcerto: "😂 Isso! A resposta usava o outro sentido da palavra 'coroa'.",
        feedbackErro: "A resposta certa era o relógio — 'coroa' ali é a peça de dar corda, não a de rei.",
      },
      {
        pergunta: "4/5 — Por que ler em voz alta ajuda a apreciar piadas e trava-línguas?",
        opcoes: [
          "Porque revela o ritmo e a graça sonora do texto",
          "Porque não faz diferença nenhuma",
          "Porque só funciona lendo baixinho",
        ],
        correta: 0,
        feedbackAcerto: "😂 Exato! O humor sonoro só aparece de verdade quando lemos em voz alta.",
        feedbackErro: "Ler em voz alta REVELA o jogo de sons — é assim que a graça aparece de verdade.",
      },
      {
        pergunta: "5/5 — Um Detetive-Mestre da Palavra sabe que humor e poesia têm em comum...",
        opcoes: [
          "Não têm nada em comum",
          "O jogo com o SOM e o SENTIDO das palavras",
          "Só servem para decorar de cor",
        ],
        correta: 1,
        feedbackAcerto:
          "😂🔍 Isso mesmo! Poema, cordel, piada, trava-língua e adivinha todos brincam com SOM e SENTIDO. Último caso do clube resolvido — parabéns, Detetive-Mestre da Palavra! 👑🌟",
        feedbackErro:
          "Pense em tudo que estudamos na unidade: rima, sentido figurado, cordel, humor — todos brincam com SOM e SENTIDO das palavras.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão final: Noite de Humor em Família",
    materiais: ["Papel", "Lápis", "Boa vontade para rir"],
    passos: [
      "1) Cada pessoa da família conta uma piada ou adivinha que já conhece.",
      "2) Juntos, inventem um trava-língua novo usando o nome de alguém da casa (ex.: 'A Ana anda apanhando amoras amarelas').",
      "3) Treinem falar o trava-língua cada vez mais rápido, sem errar.",
      "4) Façam uma pequena 'cerimônia de formatura': a criança recebe o título de Detetive-Mestre da Palavra por ter completado o clube!",
    ],
    registro: "🗣️ Gravem um áudio ou vídeo da família rindo e tentando falar o trava-língua inventado.",
  },

  recompensa: {
    xp: 200,
    moedas: 70,
    medalha: "Coroa do Poeta Detetive",
  },
};
