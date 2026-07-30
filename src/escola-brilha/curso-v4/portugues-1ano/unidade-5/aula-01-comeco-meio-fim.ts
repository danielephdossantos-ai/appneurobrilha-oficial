import type { AulaPortuguesV4 } from "../../types";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Aula 1 — Começo, Meio e Fim
 * -------------------------------------------------------------
 * Primeira missão da Unidade 5 (Era Uma Vez).
 * A criança aprende que toda história tem uma ORDEM: começo,
 * meio e fim — e que embaralhar essa ordem muda a história.
 *
 * Foco pedagógico:
 *  - Reconhecer início, meio e fim de uma narrativa simples.
 *  - Ordenar acontecimentos de um texto curto.
 *  - Praticar com um minijogo de ordenar sequência.
 *
 * BNCC: EF01LP26 · EF12LP19 · EF15LP02 · EF15LP03
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-comeco-meio-fim",
  titulo: "Começo, Meio e Fim",
  iconeTrilha: "📗",
  bncc: ["EF01LP26", "EF12LP19", "EF15LP02", "EF15LP03"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Brilha descobre o Livro das Três Partes",
    historia:
      "Brilha achou um livro mágico: 'Era Uma Vez'. Quando abriu, as páginas voaram e se embaralharam! — Ajuda a arrumar! disse o livro. Toda história tem um COMEÇO, um MEIO e um FIM, na ORDEM certa. Vamos aprender juntos?",
    imagemUrl: livro,
  },

  momento02_previsao: {
    instrucao:
      "Olhe o TÍTULO e as PISTAS da capa. Sobre o que essa história pode falar?",
    bloco: {
      titulo: "A Coelhinha que Sumiu",
      capaImagemUrl: coelho,
      pistas: [
        { imagemUrl: coelho, nome: "Uma coelhinha" },
        { imagemUrl: arvore, nome: "Uma árvore" },
        { imagemUrl: casa, nome: "Uma casa" },
      ],
      pergunta: "Antes de ler: sobre o que essa história vai falar?",
      hipoteses: [
        { texto: "Uma coelhinha que se perdeu e voltou pra casa.", imagemUrl: coelho },
        { texto: "Um passarinho que aprendeu a nadar.", imagemUrl: livro },
        { texto: "Um livro que virou uma nuvem.", imagemUrl: livros },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Muito bem! O título fala de uma coelhinha e as pistas mostram árvore e casa — ela deve ter se perdido no caminho pra casa.",
      feedbackErro:
        "Olhe de novo o título: 'A Coelhinha que Sumiu'. As pistas são coelhinha, árvore e casa. Combina com a primeira opção.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de ler, conheça 3 palavras que ajudam a contar uma história.",
    cards: [
      {
        palavra: "começo",
        explicacao: "É a PRIMEIRA parte da história — onde tudo começa.",
        exemplo: "No começo da história, a coelhinha estava brincando no jardim.",
        imagemUrl: sol,
      },
      {
        palavra: "meio",
        explicacao: "É a parte DO MEIO — quando acontece o problema da história.",
        exemplo: "No meio da história, a coelhinha se perdeu no caminho.",
        imagemUrl: arvore,
      },
      {
        palavra: "fim",
        explicacao: "É a ÚLTIMA parte — quando a história termina.",
        exemplo: "No fim da história, a coelhinha encontrou o caminho de casa.",
        imagemUrl: lua,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Toda história tem três partes",
    instrucao: "Veja como uma história pequena se divide em começo, meio e fim.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "COMEÇO: a coelhinha brincava no jardim de manhã.", explicacao: "Aqui a história apresenta a personagem." },
          { texto: "MEIO: ela seguiu uma borboleta e se perdeu.", explicacao: "Aqui acontece o problema." },
          { texto: "FIM: seguiu o cheiro de cenoura e voltou pra casa.", explicacao: "Aqui o problema se resolve." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto com Brilha — pode apertar 🔊 pra ouvir se quiser.",
    leitura: {
      titulo: "A Coelhinha que Sumiu",
      imagemUrl: coelho,
      legendaImagem: "A coelhinha Fiona",
      destacar: ["começo", "meio", "fim", "borboleta"],
      paragrafos: [
        "No começo, a coelhinha Fiona brincava pulando no jardim, de manhã cedo.",
        "No meio da manhã, ela viu uma borboleta amarela e foi atrás dela pela floresta. De repente, Fiona percebeu que estava perdida.",
        "No fim, Fiona sentiu o cheiro de cenoura assada vindo de longe. Ela seguiu o cheiro e encontrou o caminho de casa, feliz.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão TODAS escritas nele.",
    perguntas: [
      {
        pergunta: "O que Fiona fazia no começo da história?",
        opcoes: ["Dormia", "Pulava no jardim", "Cozinhava cenoura"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! No começo, ela 'brincava pulando no jardim'.",
        feedbackErro: "A primeira frase diz o que ela fazia 'de manhã cedo'. Volte lá.",
        ondeEstaNoTexto: "…a coelhinha Fiona brincava pulando no jardim…",
      },
      {
        pergunta: "O que aconteceu no MEIO da história?",
        opcoes: ["Ela dormiu", "Ela se perdeu seguindo uma borboleta", "Ela achou um livro"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! No meio, ela foi atrás da borboleta e se perdeu.",
        feedbackErro: "O segundo parágrafo conta o problema: ela seguiu algo e se perdeu.",
        ondeEstaNoTexto: "…foi atrás dela pela floresta… Fiona percebeu que estava perdida.",
      },
      {
        pergunta: "Como a história termina?",
        opcoes: [
          "Fiona fica perdida pra sempre",
          "Fiona segue o cheiro de cenoura e volta pra casa",
          "Fiona vira uma borboleta",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! No fim ela seguiu o cheiro e voltou pra casa, feliz.",
        feedbackErro: "O último parágrafo mostra o FIM — o que ela seguiu pra encontrar o caminho?",
        ondeEstaNoTexto: "Ela seguiu o cheiro e encontrou o caminho de casa, feliz.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos ver quem faz a história acontecer e onde ela se passa.",
    perguntas: [
      {
        pergunta: "Quem é a personagem principal dessa história?",
        opcoes: ["A borboleta", "A coelhinha Fiona", "A cenoura"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A história é sobre a coelhinha FIONA, do começo ao fim.",
        feedbackErro: "A personagem que aparece em TODAS as partes da história é a coelhinha.",
      },
      {
        pergunta: "Onde essa história acontece?",
        opcoes: ["No jardim e na floresta perto de casa", "Numa escola", "Dentro de um livro fechado"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Ela começa no jardim e depois vai pra floresta.",
        feedbackErro: "Releia o texto: primeiro fala de 'jardim', depois de 'floresta'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As páginas embaralharam! Coloque na ordem certa: começo → meio → fim.",
    bloco: {
      instrucao: "O que aconteceu primeiro? E depois? E no fim?",
      itens: [
        { id: "p1", texto: "Fiona brincava pulando no jardim de manhã.", imagemUrl: coelho },
        { id: "p2", texto: "Ela seguiu uma borboleta e se perdeu na floresta.", imagemUrl: arvore },
        { id: "p3", texto: "Fiona seguiu o cheiro de cenoura e voltou pra casa.", imagemUrl: casa },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você contou a história do jeito certo: começo, meio e fim.",
      feedbackErro:
        "Pense: primeiro ela BRINCA no jardim. Depois ela SE PERDE na floresta. Só no fim ela VOLTA pra casa.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho. Depois responda as duas perguntas.",
    leitura: {
      titulo: "A menina e a pipa",
      imagemUrl: menina,
      destacar: ["pipa", "vento"],
      paragrafos: [
        "No começo, Ana ganhou uma pipa nova e amarela.",
        "No meio, o vento parou e a pipa não subia mais.",
        "No fim, um vento forte chegou e a pipa voou bem alto. Ana ficou muito feliz.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual era o problema no meio da história?",
        opcoes: ["A pipa rasgou", "O vento parou", "Ana perdeu a pipa"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'No meio, o vento parou'.",
        feedbackErro: "A segunda frase começa com 'No meio…'. O que aconteceu ali?",
        ondeEstaNoTexto: "No meio, o vento parou e a pipa não subia mais.",
      },
      {
        pergunta: "Como a história termina?",
        opcoes: ["A pipa voa bem alto", "Ana chora", "Ana guarda a pipa"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! No fim, a pipa voou bem alto e Ana ficou feliz.",
        feedbackErro: "A última frase começa com 'No fim…'. O que aconteceu?",
        ondeEstaNoTexto: "No fim, um vento forte chegou e a pipa voou bem alto.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Arrume as Páginas!",
    instrucao: "Coloque as páginas da história na ordem certa: começo, meio e fim.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "A Sementinha e o Sol",
      bloco: {
        instrucao: "Toque nas páginas na ordem: o que vem primeiro, depois e por último.",
        itens: [
          { id: "s1", texto: "A sementinha estava escondida na terra escura.", imagemUrl: girassol },
          { id: "s2", texto: "O sol e a chuva ajudaram ela a crescer devagar.", imagemUrl: sol },
          { id: "s3", texto: "Ela virou uma flor grande e bonita.", imagemUrl: girassol },
        ],
        ordemCerta: ["s1", "s2", "s3"],
        feedbackAcerto: "🎉 Muito bem! Começo (semente), meio (crescendo) e fim (virou flor).",
        feedbackErro: "Pense: primeiro é a SEMENTE, depois ela CRESCE, só no fim vira FLOR.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Toda história tem COMEÇO (apresenta a personagem), MEIO (o problema) e FIM (a solução).",
      "Se embaralhar a ordem, a história não faz mais sentido.",
      "Pra descobrir a ordem certa, a gente pensa: o que aconteceu PRIMEIRO?",
    ],
    miniDesafio: {
      pergunta: "A parte da história onde acontece o problema é o…",
      opcoes: ["Começo", "Meio", "Fim"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! O problema aparece no MEIO da história.",
      feedbackErro: "O problema não é a primeira nem a última parte — é o MEIO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Quais são as três partes de uma história?",
        opcoes: [
          "Começo, meio e fim",
          "Personagem, cenário e tempo",
          "Título, capa e página",
          "Primeira, segunda e terceira palavra",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Certo! COMEÇO, MEIO e FIM.",
        feedbackErro: "Personagem, cenário e tempo são ELEMENTOS. As PARTES são começo, meio e fim.",
      },
      {
        pergunta: "2/5 — O que a coelhinha Fiona seguiu e se perdeu?",
        opcoes: ["Uma borboleta", "Um passarinho", "Uma abelha", "Um cachorro"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Uma borboleta amarela.",
        feedbackErro: "No texto: 'ela viu uma BORBOLETA amarela e foi atrás dela'.",
      },
      {
        pergunta: "3/5 — Como Fiona encontrou o caminho de casa?",
        opcoes: [
          "Seguindo o cheiro de cenoura",
          "Seguindo a borboleta de volta",
          "Perguntando para um passarinho",
          "Correndo sem parar",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Muito bem! O cheiro de cenoura a guiou.",
        feedbackErro: "A borboleta foi o problema do meio. No fim, foi o CHEIRO de cenoura que a guiou.",
      },
      {
        pergunta: "4/5 — Na história da pipa, qual foi o problema do meio?",
        opcoes: ["A pipa rasgou", "O vento parou de soprar", "A pipa ficou presa na árvore", "Ana perdeu a linha"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O vento parou e a pipa não subia.",
        feedbackErro: "Releia o meio da história: 'o vento parou…'. A pipa não rasgou nem prendeu.",
      },
      {
        pergunta: "5/5 — Pra arrumar páginas embaralhadas, a gente pensa em…",
        opcoes: [
          "Qual página é mais bonita",
          "O que aconteceu primeiro, depois e por último",
          "Qual página tem mais palavras",
          "Qual página tem mais cores",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso mesmo! Pensamos na ORDEM dos acontecimentos. 🌟",
        feedbackErro: "A ordem certa não depende do desenho: segue o que aconteceu PRIMEIRO, DEPOIS e no FIM.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Conte uma história em três partes",
    materiais: ["Nenhum material — só imaginação!"],
    passos: [
      "1) Escolham juntos uma história curta que a criança conhece (conto de fadas, desenho, livrinho).",
      "2) Peçam pra ela contar apontando: 'Isso é o COMEÇO', 'Isso é o MEIO', 'Isso é o FIM'.",
      "3) Se quiser, desenhem os três momentos em três quadradinhos de papel.",
    ],
    registro: "🎨 Um desenho com três quadradinhos: começo, meio e fim de uma história favorita.",
  },

  // Fase 9 — fluência por releitura (mesmo texto, 3 leituras).
  momento_fluencia: {
    titulo: "Ler de novo, mais solto",
    instrucao:
      "Agora a gente lê o MESMO texto três vezes: a primeira comigo, a segunda sozinho e a terceira de novo. Ler de novo faz as palavras ficarem fáceis — você vai sentir a boca soltar.",
    texto: [
      "A MENINA ACORDOU.",
      "ELA TOMOU O SUCO.",
      "DEPOIS FOI PARA A ESCOLA.",
    ],
    metaSegundos: 20,
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
