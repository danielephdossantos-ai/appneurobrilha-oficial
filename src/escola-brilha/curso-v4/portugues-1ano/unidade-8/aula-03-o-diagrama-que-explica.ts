import type { AulaPortuguesV4 } from "../../types";
import { url as semente } from "@/assets/neuro-treino/objetos/semente.png.asset.json";
import { url as plantaPequena } from "@/assets/neuro-treino/objetos/planta-pequena.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as regador } from "@/assets/neuro-treino/objetos/regador.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as setaDireita } from "@/assets/neuro-treino/objetos/seta-direita.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";

/**
 * Unidade 8 — Aula 3: O Diagrama que Explica
 * -------------------------------------------------------------
 * Gênero investigativo em formato visual: título + desenhos + setas +
 * rótulos curtos. A criança lê e reproduz a diagramação do gênero.
 *
 * BNCC: EF01LP24 (reproduzir a formatação/diagramação do gênero)
 *       EF01LP22 (planejar e produzir diagramas)
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-o-diagrama-que-explica",
  titulo: "O Diagrama que Explica",
  iconeTrilha: "🧭",
  bncc: ["EF01LP24", "EF01LP22"],
  duracaoMin: 16,

  momento01_motivacao: {
    titulo: "Um texto que se lê com os olhos",
    historia:
      "Brilha quis explicar como nasce uma planta. Só que ele não escreveu um textão: ele fez desenhos em ordem, ligou tudo com setinhas e colocou o nome embaixo de cada desenho. Isso chama DIAGRAMA. Dá pra entender só de olhar!",
    imagemUrl: plantaPequena,
  },

  momento02_previsao: {
    instrucao: "Olhe o cartaz do Brilha.",
    bloco: {
      titulo: "Como nasce a planta",
      capaImagemUrl: semente,
      recado: {
        rotulo: "Diagrama",
        icone: "🧭",
        linhas: ["SEMENTE", "➡ BROTO", "➡ PLANTA", "➡ ÁRVORE"],
        estilo: "cartaz",
      },
      pergunta: "O que as setinhas mostram?",
      hipoteses: [
        { texto: "A ordem: o que vem depois.", imagemUrl: setaDireita },
        { texto: "Que a planta está triste.", imagemUrl: plantaPequena },
        { texto: "Que é para apagar.", imagemUrl: papel },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! A seta mostra o caminho: o que vem depois.",
      feedbackErro: "A seta ➡ sempre aponta para o próximo passo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras de diagrama.",
    cards: [
      {
        palavra: "diagrama",
        explicacao: "Desenho que explica uma coisa usando figuras, setas e nomes curtos.",
        exemplo: "O diagrama mostra como nasce a planta.",
        imagemUrl: mural,
      },
      {
        palavra: "seta",
        explicacao: "Sinal ➡ que mostra o caminho ou o que vem depois.",
        exemplo: "A seta vai da semente para o broto.",
        imagemUrl: setaDireita,
      },
      {
        palavra: "rótulo",
        explicacao: "Nome curtinho escrito embaixo do desenho.",
        exemplo: "Embaixo da figura está escrito SEMENTE.",
        imagemUrl: papel,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "As 3 partes do diagrama",
    instrucao: "Ouça cada parte e olhe o cartaz.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Como nasce a planta.", explicacao: "1ª parte: o TÍTULO em cima." },
          { texto: "Semente.", explicacao: "2ª parte: o desenho com o RÓTULO embaixo." },
          { texto: "Semente ➡ broto.", explicacao: "3ª parte: a SETA liga um passo ao outro." },
          { texto: "Planta ➡ árvore.", explicacao: "A leitura vai sempre no sentido da seta." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto seguindo as setas.",
    leitura: {
      titulo: "Como nasce a planta",
      imagemUrl: plantaPequena,
      legendaImagem: "Da semente até a árvore",
      destacar: ["semente", "broto", "planta", "árvore", "seta"],
      paragrafos: [
        "Primeiro vem a semente na terra.",
        "A seta leva para o broto, que é bem pequeno.",
        "Depois o broto vira planta com folhas.",
        "No fim, a planta cresce e vira árvore.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diagrama se precisar.",
    perguntas: [
      {
        pergunta: "O que vem primeiro?",
        opcoes: ["A semente", "A árvore", "A folha"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Tudo começa na semente.",
        feedbackErro: "Olhe o primeiro desenho do diagrama.",
        dica: "É o que fica antes da primeira seta.",
        ondeEstaNoTexto: "Primeiro vem a semente na terra.",
      },
      {
        pergunta: "Depois do broto vem...",
        opcoes: ["a semente", "a planta", "o regador"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Broto ➡ planta.",
        feedbackErro: "Siga a seta que sai do broto.",
        dica: "Terceira linha do texto.",
        ondeEstaNoTexto: "Depois o broto vira planta com folhas.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense no formato do diagrama.",
    perguntas: [
      {
        pergunta: "O rótulo fica...",
        opcoes: ["Embaixo do desenho", "Escondido", "Em outra folha"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O nome vai embaixo da figura.",
        feedbackErro: "No diagrama, cada desenho tem o nome logo embaixo.",
        reensino: "Diagrama = título em cima, desenhos em fila, rótulo embaixo de cada um e setas ligando.",
      },
      {
        pergunta: "Para que serve a seta no diagrama?",
        opcoes: ["Enfeitar", "Mostrar o que vem depois", "Separar cores"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ela mostra a ordem.",
        feedbackErro: "A seta aponta para o próximo passo.",
        reensino: "A seta ➡ é o 'depois' desenhado. Ela indica a direção da leitura.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Monte o diagrama na ordem certa.",
    bloco: {
      instrucao: "Siga o caminho da semente até a árvore.",
      itens: [
        { id: "d1", texto: "Semente", imagemUrl: semente },
        { id: "d2", texto: "Broto", imagemUrl: plantaPequena },
        { id: "d3", texto: "Planta com folhas", imagemUrl: flor },
        { id: "d4", texto: "Árvore", imagemUrl: arvore },
      ],
      ordemCerta: ["d1", "d2", "d3", "d4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho do diagrama.",
      feedbackErro: "Comece pelo menorzinho: a semente. Termine na árvore grande.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho este diagrama.",
    leitura: {
      titulo: "O dia da Mia",
      imagemUrl: menina,
      destacar: ["acorda", "escola", "casa"],
      paragrafos: [
        "Mia acorda ➡ vai para a escola ➡ volta para casa.",
        "As setas mostram a ordem do dia dela.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que Mia faz primeiro?",
        opcoes: ["Volta para casa", "Acorda", "Vai para a escola"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Primeiro ela acorda.",
        feedbackErro: "É o que está antes da primeira seta.",
        ondeEstaNoTexto: "Mia acorda ➡ vai para a escola ➡ volta para casa.",
      },
      {
        pergunta: "As setas do diagrama mostram...",
        opcoes: ["A ordem", "A cor", "O tamanho"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Mostram a ordem.",
        feedbackErro: "Seta = o que vem depois.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Desenhar e escrever meu diagrama",
    instrucao: "Trace, monte e escreva os rótulos do seu diagrama.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "S", exemplo: "S de SEMENTE", dicaTracado: "faz a cobrinha: curva pra cá e curva pra lá" },
          { letra: "A", exemplo: "A de ÁRVORE", dicaTracado: "sobe, desce e faz o cinto no meio" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "SEMENTE", silabas: ["SE", "MEN", "TE"], distratores: ["LO", "PU"], dica: "Vira planta.", imagemUrl: semente },
          { palavra: "ÁGUA", silabas: ["Á", "GUA"], distratores: ["RI", "TO"], dica: "Sai do regador.", imagemUrl: regador },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Meu diagrama do dia",
        comando: "Escreva 3 rótulos do SEU dia, na ordem, com uma seta entre eles.",
        linhas: 3,
        modelo: ["acordo", "➡ escovo os dentes", "➡ tomo café"],
        checklist: [
          "Escrevi na ordem certa?",
          "Coloquei a seta entre os passos?",
          "Cada rótulo é curtinho?",
        ],
      },
    ],
  },

  momento_minijogo: {
    titulo: "Rótulo certo no lugar certo",
    instrucao: "Arraste cada nome para a figura certa.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Etiquetando o diagrama",
      bloco: {
        instrucao: "Cada desenho precisa do rótulo certo embaixo.",
        itens: [
          { id: "r1", texto: "SEMENTE", alvoId: "t1" },
          { id: "r2", texto: "ÁRVORE", alvoId: "t2" },
          { id: "r3", texto: "SOL", alvoId: "t3" },
          { id: "r4", texto: "ÁGUA", alvoId: "t4" },
        ],
        alvos: [
          { id: "t1", nome: "Semente", imagemUrl: semente },
          { id: "t2", nome: "Árvore", imagemUrl: arvore },
          { id: "t3", nome: "Sol", imagemUrl: sol },
          { id: "t4", nome: "Água", imagemUrl: regador },
        ],
        feedbackAcerto: "🎉 Isso! Diagrama etiquetado direitinho.",
        feedbackErro: "Leia o rótulo em voz alta e procure o desenho que combina.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Diagrama explica usando desenho, seta e nome curtinho.",
      "O título fica em cima; o rótulo fica embaixo do desenho.",
      "A seta ➡ mostra o que vem depois.",
      "Dá para entender o diagrama só de olhar.",
    ],
    miniDesafio: {
      pergunta: "No diagrama, o nome do desenho fica onde?",
      opcoes: ["Embaixo do desenho", "Em outra página", "Dentro do sol"],
      correta: 0,
      feedbackAcerto: "🎉 Isso!",
      feedbackErro: "O rótulo fica logo embaixo da figura.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Diagrama é um texto que explica com...",
        opcoes: ["desenhos, setas e nomes", "só letras miúdas", "música", "número de telefone"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Diagrama usa figura + seta + rótulo.",
      },
      {
        pergunta: "2/5 — A seta ➡ serve para...",
        opcoes: ["enfeitar", "mostrar o que vem depois", "apagar", "contar"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Ela indica a ordem dos passos.",
      },
      {
        pergunta: "3/5 — No diagrama da planta, o que vem depois do BROTO?",
        opcoes: ["a semente", "a planta", "o sol", "o regador"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Semente ➡ broto ➡ planta ➡ árvore.",
      },
      {
        pergunta: "4/5 — O título do diagrama fica...",
        opcoes: ["em cima", "no fim", "dentro da seta", "não tem título"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Como em toda curiosidade, o título abre o texto.",
      },
      {
        pergunta: "5/5 — Rótulo é...",
        opcoes: ["o nome curtinho do desenho", "uma história", "um convite", "uma pergunta"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Rótulo é o nome que fica embaixo da figura.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Diagrama da nossa casa",
    materiais: ["Papel", "Lápis de cor"],
    passos: [
      "1) Escolham juntos uma rotina: fazer o lanche, arrumar a cama ou plantar.",
      "2) A criança desenha 3 ou 4 passos, em ordem.",
      "3) A família ajuda a escrever o rótulo embaixo de cada desenho.",
      "4) A criança liga tudo com setas e lê o diagrama em voz alta.",
    ],
    registro: "📸 Uma foto do diagrama que a família montou.",
  },

  momento_fluencia: {
    titulo: "Ler o caminho da planta",
    instrucao:
      "Agora a gente lê o MESMO texto três vezes: a primeira comigo, a segunda sozinho no cronômetro e a terceira de novo. Ler de novo faz as palavras ficarem fáceis — você vai sentir a boca soltar.",
    texto: [
      "A SEMENTE VIRA PLANTA.",
      "A PLANTA DÁ FLOR.",
      "A FLOR VIRA FRUTO.",
    ],
    metaSegundos: 22,
  },

  recompensa: {
    xp: 150,
    moedas: 85,
    medalha: "🧭 Mestre do Diagrama",
  },
};
