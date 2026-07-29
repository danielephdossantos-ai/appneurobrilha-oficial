import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as quadroTriste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";

/**
 * Aula 1 — Começo, conflito e desfecho
 * -------------------------------------------------------------
 * Abertura da Unidade 5 (Escrevendo o Mistério). O clube descobre
 * que toda boa história esconde um PROBLEMA — sem ele, não há
 * história pra contar. O detetive-escritor aprende a reconhecer
 * as três partes: começo (apresentação), conflito (o problema
 * que quebra a calmaria) e desfecho (como se resolve).
 *
 * BNCC: EF35LP25, EF35LP26
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-comeco-conflito-desfecho",
  titulo: "Começo, conflito e desfecho",
  iconeTrilha: "🧩",
  bncc: ["EF35LP25", "EF35LP26"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "O coração de toda história",
    historia:
      "Aurora chamou o clube para uma missão especial: — Hoje vocês não vão só LER mistérios, vão aprender a CONSTRUIR um. Toda história boa tem um coração que bate: o PROBLEMA. Sem ele, a história é só um dia comum, sem graça nenhuma. Vamos descobrir as três partes que fazem um caso valer a pena ser contado?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Antes de ler o caso de hoje, observe as pistas. Uma história sobre um cachorro sumido — o que você imagina que vai acontecer?",
    bloco: {
      titulo: "O Sumiço de Café",
      capaImagemUrl: cachorro,
      pistas: [
        { imagemUrl: casa, nome: "Uma casa" },
        { imagemUrl: mapa, nome: "Um mapa do bairro" },
      ],
      pergunta: "O que você acha que vai dar o 'problema' dessa história?",
      hipoteses: [
        { texto: "O cachorro Café vai fugir e a família vai procurá-lo." },
        { texto: "A família vai simplesmente passear com o cachorro, sem nenhum problema." },
        { texto: "O cachorro vai aprender a ler." },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🧩 Isso! O título já entrega: 'sumiço' é a palavra do CONFLITO — algo que quebra a rotina e precisa ser resolvido.",
      feedbackErro:
        "Releia o título: 'O Sumiço de Café'. A palavra 'sumiço' avisa que vai faltar alguma coisa — esse é o problema da história.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras que todo escritor detetive precisa conhecer.",
    cards: [
      {
        palavra: "conflito",
        explicacao:
          "É o PROBLEMA da história — algo que dá errado, muda ou ameaça a calmaria dos personagens. É o que faz a história valer a pena.",
        exemplo: "O conflito de 'O Sumiço de Café' é o cachorro ter desaparecido do quintal.",
        imagemUrl: quadroTriste,
      },
      {
        palavra: "desfecho",
        explicacao:
          "É o FINAL da história — o momento em que o conflito se resolve (bem ou mal) e o leitor descobre como tudo terminou.",
        exemplo: "O desfecho de 'O Sumiço de Café' é encontrarem o cachorro escondido debaixo da varanda.",
        imagemUrl: quadroAlegre,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "As três partes de toda história",
    instrucao: "Veja como uma história se monta, parte por parte.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Começo: apresenta quem são os personagens e onde vivem.",
            explicacao: "É a calmaria — antes de qualquer problema aparecer.",
          },
          {
            texto: "Conflito: alguma coisa dá errado ou muda de repente.",
            explicacao: "É o momento em que a história 'esquenta' e prende o leitor.",
          },
          {
            texto: "Desfecho: o problema se resolve e a história termina.",
            explicacao: "É a resposta que o leitor esperava a história inteira.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia como um escritor: tente notar onde termina o COMEÇO e onde entra o CONFLITO.",
    leitura: {
      titulo: "O Sumiço de Café",
      imagemUrl: cachorro,
      legendaImagem: "Café, o cachorro caramelo da família de Théo",
      destacar: ["Todos os dias", "De repente", "No fim da tarde"],
      paragrafos: [
        "Todos os dias, depois da escola, Théo brincava no quintal com Café, seu cachorro caramelo. A rotina era sempre a mesma: bola, corrida e um lanche debaixo da árvore.",
        "De repente, num sábado, Théo abriu o portão do quintal para pegar a bola e esqueceu de fechar. Quando voltou, Café tinha sumido.",
        "A família procurou por toda a rua, chamando o nome dele. Théo estava com o coração apertado, achando que nunca mais veria seu cachorro.",
        "No fim da tarde, um farejar debaixo da varanda chamou atenção. Café estava escondido lá, assustado com o barulho de um trovão. Théo abraçou o cachorro com força e prometeu fechar sempre o portão.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "O que Théo esqueceu de fazer?",
        opcoes: ["Dar comida ao cachorro", "Fechar o portão", "Levar a bola"],
        correta: 1,
        feedbackAcerto: "🧩 Isso! Ele 'esqueceu de fechar' o portão — foi esse esquecimento que causou o problema.",
        feedbackErro: "Releia o segundo parágrafo: o que Théo fez (ou deixou de fazer) antes de Café sumir?",
        ondeEstaNoTexto: "Théo abriu o portão do quintal para pegar a bola e esqueceu de fechar.",
      },
      {
        pergunta: "Onde Café estava escondido?",
        opcoes: ["Na casa do vizinho", "Debaixo da varanda", "Dentro do carro"],
        correta: 1,
        feedbackAcerto: "🧩 Exato! 'Café estava escondido lá' (debaixo da varanda).",
        feedbackErro: "A resposta está no último parágrafo, logo no começo.",
        ondeEstaNoTexto: "Um farejar debaixo da varanda chamou atenção. Café estava escondido lá…",
      },
      {
        pergunta: "Por que Café estava assustado?",
        opcoes: ["Por causa de um trovão", "Porque estava com fome", "Porque viu um gato"],
        correta: 0,
        feedbackAcerto: "🧩 Boa! Ele estava 'assustado com o barulho de um trovão'.",
        feedbackErro: "A explicação vem logo depois de dizer onde ele estava escondido.",
        ondeEstaNoTexto: "…assustado com o barulho de um trovão.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora, vamos identificar as três partes da história.",
    perguntas: [
      {
        pergunta: "Qual trecho é o COMEÇO da história?",
        opcoes: [
          "Todos os dias, Théo brincava no quintal com Café.",
          "Café tinha sumido.",
          "Théo abraçou o cachorro com força.",
        ],
        correta: 0,
        feedbackAcerto:
          "🧩 Isso! O começo mostra a rotina calma, ANTES do problema aparecer.",
        feedbackErro:
          "O começo é a parte que mostra como as coisas eram normalmente, antes de qualquer problema.",
      },
      {
        pergunta: "Qual é o CONFLITO (problema) da história?",
        opcoes: [
          "Théo brincar de bola com Café",
          "Café ter sumido depois do portão ficar aberto",
          "A família jantar junta",
        ],
        correta: 1,
        feedbackAcerto: "🧩 Certo! O sumiço de Café é o problema que muda tudo.",
        feedbackErro: "O conflito é o que dá ERRADO — nesse caso, o cachorro desaparecer.",
      },
      {
        pergunta: "Qual é o DESFECHO da história?",
        opcoes: [
          "Théo esquece de fechar o portão",
          "A família sai procurando Café",
          "Encontram Café escondido e Théo promete cuidar melhor do portão",
        ],
        correta: 2,
        feedbackAcerto:
          "🧩 Isso! O desfecho é o final: encontraram Café e o problema foi resolvido.",
        feedbackErro: "O desfecho é a ÚLTIMA parte — como o problema termina, para o bem ou para o mal.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as três partes da história do jeito que elas aparecem.",
    bloco: {
      instrucao: "Começo → conflito → desfecho.",
      itens: [
        { id: "p1", texto: "Théo e Café brincam todos os dias no quintal — a rotina calma.", imagemUrl: cachorro },
        { id: "p2", texto: "O portão fica aberto e Café desaparece.", imagemUrl: casa },
        { id: "p3", texto: "Café é encontrado debaixo da varanda e Théo o abraça.", imagemUrl: coracao },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🧩 Perfeito! Você reconheceu a estrutura completa da história.",
      feedbackErro: "Pense: primeiro vem a calmaria, depois o problema, e por último a solução.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e identifique as três partes.",
    leitura: {
      titulo: "A Prova Esquecida",
      imagemUrl: menino,
      destacar: ["Toda semana", "Mas naquela terça", "No fim das contas"],
      paragrafos: [
        "Toda semana, Bento arrumava a mochila na noite anterior, com o material certinho para cada matéria.",
        "Mas naquela terça-feira, Bento estava tão cansado que foi direto dormir e esqueceu de guardar a folha da prova de matemática.",
        "No fim das contas, a professora deixou Bento fazer a prova numa folha avulsa, e ele prometeu nunca mais deixar tudo para a última hora.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o conflito dessa história?",
        opcoes: [
          "Bento arrumar a mochila todo dia",
          "Bento esquecer a folha da prova",
          "A professora dar aula",
        ],
        correta: 1,
        feedbackAcerto: "🧩 Isso! O problema é ele ter esquecido a folha.",
        feedbackErro: "O conflito é o que deu ERRADO — releia o segundo parágrafo.",
        ondeEstaNoTexto: "…esqueceu de guardar a folha da prova de matemática.",
      },
      {
        pergunta: "Qual é o desfecho?",
        opcoes: [
          "Bento faz a prova numa folha avulsa e aprende a lição",
          "Bento falta à escola",
          "A prova é cancelada",
        ],
        correta: 0,
        feedbackAcerto: "🧩 Exato! É assim que o problema se resolve, no último parágrafo.",
        feedbackErro: "O desfecho fica no último parágrafo — como tudo terminou.",
        ondeEstaNoTexto: "…a professora deixou Bento fazer a prova numa folha avulsa…",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Toda boa história tem COMEÇO (apresenta), CONFLITO (o problema) e DESFECHO (a solução).",
      "Sem conflito, a história vira só uma descrição de um dia comum — sem graça.",
      "O desfecho responde à pergunta que o conflito deixou no ar.",
      "Para inventar uma história, primeiro pense: qual é o problema dela?",
    ],
    miniDesafio: {
      pergunta: "Você vai escrever uma história sobre um bolo de aniversário. Qual seria um bom CONFLITO?",
      opcoes: [
        "O bolo fica pronto e todos comem felizes, sem nada de diferente",
        "O bolo cai no chão minutos antes da festa começar",
        "A receita do bolo é lida em voz alta",
      ],
      correta: 1,
      feedbackAcerto: "🧩 Isso! Um problema real (o bolo cair) dá o conflito que toda história precisa.",
      feedbackErro: "Pense em algo que dê ERRADO e precise ser resolvido — isso é um conflito.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o 'conflito' de uma história?",
        opcoes: ["O nome do personagem principal", "O problema que precisa ser resolvido", "O título do livro"],
        correta: 1,
        feedbackAcerto: "🧩 Isso! Conflito é o problema.",
        feedbackErro: "Conflito é sempre o PROBLEMA que aparece na história.",
      },
      {
        pergunta: "2/5 — O que aparece no 'começo' de uma história?",
        opcoes: ["A resolução do problema", "A apresentação dos personagens e da rotina", "Só o título"],
        correta: 1,
        feedbackAcerto: "🧩 Correto! O começo apresenta quem são os personagens e como era antes do problema.",
        feedbackErro: "O começo mostra a calmaria ANTES do conflito.",
      },
      {
        pergunta: "3/5 — Em 'O Sumiço de Café', qual foi o conflito?",
        opcoes: ["O cachorro sumir depois do portão aberto", "Théo brincar de bola", "A família jantar"],
        correta: 0,
        feedbackAcerto: "🧩 Isso mesmo!",
        feedbackErro: "O portão ficou aberto e Café sumiu — esse é o problema.",
      },
      {
        pergunta: "4/5 — O que é o 'desfecho'?",
        opcoes: ["O meio da história", "O final, quando o problema se resolve", "A capa do livro"],
        correta: 1,
        feedbackAcerto: "🧩 Isso! Desfecho é o final da história.",
        feedbackErro: "Desfecho é como o problema TERMINA.",
      },
      {
        pergunta: "5/5 — Por que uma história precisa de conflito?",
        opcoes: [
          "Porque sem problema a história fica sem graça, sem nada pra contar",
          "Porque é obrigatório ter uma vilã",
          "Porque só assim cabe ilustração",
        ],
        correta: 0,
        feedbackAcerto: "🧩 Exato! O conflito é o que prende o leitor. Missão cumprida! 🌟",
        feedbackErro: "Sem conflito, a história é só um dia qualquer, sem nada interessante para contar.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caçando conflitos em casa",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Conversem sobre um dia em que algo deu errado (um sapato perdido, um bolo queimado, uma chuva de surpresa).",
      "2) A criança conta esse dia como uma história: começo (como era antes), conflito (o que deu errado) e desfecho (como resolveram).",
      "3) Escrevam juntos 3 frases, uma para cada parte.",
      "4) Leiam em voz alta e vejam se a história tem 'graça' — ou seja, se o conflito prendeu a atenção.",
    ],
    registro: "🗣️ Registre as 3 frases escritas (começo, conflito, desfecho) num papel ou foto.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
