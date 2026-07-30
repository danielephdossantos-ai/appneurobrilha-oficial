import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * Aula 1 — Palavras que Rimam
 * -------------------------------------------------------------
 * Abre a Unidade 6 (Poesia, Cantiga e Trava-Língua).
 * Foco: reconhecer que duas palavras RIMAM quando terminam com
 * o mesmo som (PÃO/MÃO, GATO/PATO/RATO).
 *
 * BNCC: EF01LP09 · EF01LP10
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-rimas",
  titulo: "Palavras que Rimam",
  iconeTrilha: "🎵",
  bncc: ["EF01LP09", "EF01LP10"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Brilha descobre o Jardim das Rimas",
    historia:
      "Brilha entrou num jardim diferente: as flores só se abriam quando alguém dizia duas palavras que terminam com o MESMO SOM. Brilha disse 'GATO... PATO!' e uma flor gigante se abriu, cantando. — Isso é RIMA! — gritou Brilha. Vamos descobrir juntos?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Olhe o título e as imagens. Sobre o que essa historinha vai falar?",
    bloco: {
      titulo: "O Gato e o Rato",
      capaImagemUrl: gato,
      pistas: [
        { imagemUrl: gato, nome: "Um gato" },
        { imagemUrl: rato, nome: "Um rato" },
      ],
      pergunta: "Do que essa história vai falar?",
      hipoteses: [
        { texto: "Um gato e um rato que viram amigos.", imagemUrl: gato },
        { texto: "Um peixe que aprendeu a voar.", imagemUrl: sol },
        { texto: "Uma flor que fala com o sol.", imagemUrl: flor },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! GATO e RATO aparecem na capa — e olha: as duas palavras RIMAM!",
      feedbackErro:
        "Olhe as imagens da capa: um gato e um rato. A história é sobre os dois.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras novas antes de começar:",
    cards: [
      {
        palavra: "rima",
        explicacao: "É quando duas palavras terminam com o MESMO SOM.",
        exemplo: "GATO e PATO rimam — as duas terminam em 'ATO'.",
        imagemUrl: gato,
      },
      {
        palavra: "som final",
        explicacao: "É o pedacinho de som no FIM da palavra.",
        exemplo: "Em PÃO e MÃO, o som final é 'ÃO'.",
        imagemUrl: estrela,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler essa poesinha bem devagar, prestando atenção no som do final de cada linha.",
    leitura: {
      titulo: "O Gato e o Rato",
      imagemUrl: gato,
      legendaImagem: "Um GATO encontrou um RATO",
      destacar: ["GATO", "RATO", "PATO"],
      paragrafos: [
        "Era uma vez um GATO, que morava perto de um PATO.",
        "Um dia apareceu um RATO, e os três viraram um time e tanto!",
        "GATO, PATO e RATO — todos terminam com o mesmo som: ATO!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Quais palavras do texto RIMAM?",
        opcoes: ["CASA, MESA e BOLA", "GATO, PATO e RATO", "SOL, LUA e MAR"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! GATO, PATO e RATO terminam todos em 'ATO'.",
        feedbackErro: "Releia o último parágrafo: três palavras terminam com o mesmo som 'ATO'.",
        ondeEstaNoTexto: "GATO, PATO e RATO — todos terminam com o mesmo som: ATO!",
      },
      {
        pergunta: "Qual bichinho apareceu por último na história?",
        opcoes: ["O gato", "O pato", "O rato"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! 'Um dia apareceu um RATO'.",
        feedbackErro: "Releia o segundo parágrafo: quem apareceu 'um dia'?",
        ondeEstaNoTexto: "Um dia apareceu um RATO...",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Personagens são quem aparece na história.",
    perguntas: [
      {
        pergunta: "Quantos personagens têm nessa historinha?",
        opcoes: ["Um", "Dois", "Três"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! GATO, PATO e RATO — três personagens.",
        feedbackErro: "Conte de novo: gato, pato e rato. São três.",
      },
      {
        pergunta: "O que os três personagens têm em comum no NOME deles?",
        opcoes: ["Todos começam com A", "Todos terminam com o som ATO", "Todos são grandes"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! GATO, PATO, RATO — o som final é o mesmo: ATO.",
        feedbackErro: "Pense no SOM final de cada nome: GATO, PATO, RATO.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As linhas da poesinha se misturaram. Coloque na ordem certa.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Era uma vez um GATO, que morava perto de um PATO.", imagemUrl: gato },
        { id: "p2", texto: "Um dia apareceu um RATO, e os três viraram um time e tanto!", imagemUrl: rato },
        { id: "p3", texto: "GATO, PATO e RATO — todos terminam com o mesmo som: ATO!", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você contou a poesinha na ordem certa.",
      feedbackErro: "Pense: primeiro aparece o gato e o pato, depois o rato, e no fim a gente descobre a rima.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "Pão e Mão",
      imagemUrl: livro,
      destacar: ["PÃO", "MÃO"],
      paragrafos: [
        "Eu seguro o PÃO com a MÃO.",
        "PÃO e MÃO rimam: as duas terminam com o som ÃO!",
      ],
    },
    perguntas: [
      {
        pergunta: "Quais palavras rimam nesse textinho?",
        opcoes: ["PÃO e MÃO", "PÃO e SOL", "MÃO e GATO"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! PÃO e MÃO terminam com o som ÃO.",
        feedbackErro: "Releia a última frase: qual som se repete no final das duas palavras?",
        ondeEstaNoTexto: "PÃO e MÃO rimam: as duas terminam com o som ÃO!",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Caça-Rimas",
    instrucao: "Arraste cada palavra até a palavra que rima com ela.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Junte as palavras que rimam",
      bloco: {
        instrucao: "Arraste cada palavra até quem tem o mesmo som final.",
        itens: [
          { id: "gato", texto: "GATO", imagemUrl: gato, alvoId: "pato" },
          { id: "rato", texto: "RATO", imagemUrl: rato, alvoId: "pato" },
          { id: "pao", texto: "PÃO", alvoId: "mao" },
          { id: "flor", texto: "FLOR", imagemUrl: flor, alvoId: "sol" },
        ],
        alvos: [
          { id: "pato", nome: "PATO", imagemUrl: pato, descricao: "Rima com ATO" },
          { id: "mao", nome: "MÃO", descricao: "Rima com ÃO" },
          { id: "sol", nome: "SOL", imagemUrl: sol, descricao: "Rima com OL" },
        ],
        feedbackAcerto: "🎉 Isso! Você juntou as palavras que terminam com o mesmo som.",
        feedbackErro: "Escute o final das palavras: GATO e RATO terminam em ATO; PÃO termina em ÃO como MÃO; FLOR termina em OL como SOL.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "RIMA é quando duas palavras terminam com o MESMO SOM.",
      "GATO, PATO e RATO rimam porque terminam em ATO.",
      "PÃO e MÃO rimam porque terminam em ÃO.",
    ],
    miniDesafio: {
      pergunta: "Qual par de palavras RIMA?",
      opcoes: ["GATO e SOL", "PÃO e MÃO", "FLOR e RATO"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! PÃO e MÃO terminam com o mesmo som.",
      feedbackErro: "Preste atenção no final das palavras: PÃO e MÃO terminam em ÃO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — RIMA é quando duas palavras...",
        opcoes: [
          "Começam com a mesma letra",
          "Terminam com o mesmo som",
          "Têm o mesmo tamanho",
          "Falam do mesmo assunto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso mesmo!",
        feedbackErro: "Começar igual é aliteração (SApo/SAco). Rima é o SOM FINAL igual.",
      },
      {
        pergunta: "2/5 — Qual palavra RIMA com GATO?",
        opcoes: ["SAPO", "PATO", "GATA", "SOL"],
        correta: 1,
        feedbackAcerto: "🎉 PATO! Termina em ATO, igual GATO.",
        feedbackErro: "GATA começa igual, mas termina em ATA. Rima é o FIM: gATO / pATO.",
      },
      {
        pergunta: "3/5 — Qual palavra RIMA com MÃO?",
        opcoes: ["PÃO", "MALA", "MATO", "FLOR"],
        correta: 0,
        feedbackAcerto: "🎉 PÃO! As duas terminam em ÃO.",
        feedbackErro: "MALA e MATO começam com M, mas rima é o FIM: mÃO / pÃO.",
      },
      {
        pergunta: "4/5 — GATO, PATO e RATO rimam porque...",
        opcoes: [
          "Todos são animais",
          "Terminam com o som ATO",
          "Começam com sons diferentes",
          "Têm 4 letras",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O som final ATO se repete.",
        feedbackErro: "Ser animal ou ter 4 letras não faz rima. O que se repete é o som final ATO.",
      },
      {
        pergunta: "5/5 — Qual palavra RIMA com FLOR?",
        opcoes: ["COR", "FLORESTA", "GATO", "MÃO"],
        correta: 0,
        feedbackAcerto: "🎉 COR! As duas terminam com o som OR.",
        feedbackErro: "FLORESTA só começa parecido. Rima é o FIM: flOR / cOR.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça-Rimas em Casa",
    materiais: ["Nenhum material — só os ouvidos!"],
    passos: [
      "1) Escolha uma palavra (ex.: BOLA).",
      "2) A família tenta pensar em palavras que RIMAM com ela (ex.: MOLA, ROLA).",
      "3) Cada rima encontrada vale um aplauso!",
      "4) Registrem as rimas que encontraram.",
    ],
    registro: "🗣️ Diga em voz alta 3 palavras que rimam entre si.",
  },

  recompensa: {
    xp: 110,
    moedas: 70,
  },
};
