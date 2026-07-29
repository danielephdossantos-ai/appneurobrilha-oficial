import type { AulaPortuguesV4 } from "../../types";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as familiaMaeFilho } from "@/assets/neuro-treino/objetos/familia-mae-filho.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";

/**
 * Aula 2 — O Bilhete da Mamãe
 * -------------------------------------------------------------
 * A criança descobre que um BILHETE tem QUEM escreveu, PRA QUEM
 * é e O QUE está pedindo — informações rápidas do dia a dia.
 *
 * BNCC: EF01LP16 · EF01LP17 · EF01LP20
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-bilhete",
  titulo: "O Bilhete da Mamãe",
  iconeTrilha: "📩",
  bncc: ["EF01LP16", "EF01LP17", "EF01LP20"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Um papel na geladeira",
    historia:
      "Quando a menina Clara chegou da escola, achou um papel colado na geladeira. Era um BILHETE da mamãe! Um bilhete é um textinho rápido pra avisar algo importante quando a pessoa não está por perto.",
    imagemUrl: familiaMaeFilho,
  },

  momento02_previsao: {
    instrucao: "Veja o bilhete que a mamãe da Clara deixou. O que você acha que ele diz?",
    bloco: {
      titulo: "Bilhete na geladeira",
      pistas: [
        { imagemUrl: mae, nome: "A mamãe" },
        { imagemUrl: relogio, nome: "Um relógio" },
      ],
      recado: {
        rotulo: "Bilhete",
        icone: "📩",
        linhas: ["Clara,", "Fui à padaria.", "Volto às 10h.", "Beijo, Mamãe."],
        estilo: "papel",
      },
      pergunta: "Sobre o que esse bilhete fala?",
      hipoteses: [
        { texto: "Onde a mamãe foi e quando ela volta.", imagemUrl: mae },
        { texto: "Uma receita de bolo.", imagemUrl: caixa },
        { texto: "Uma lista de brinquedos.", imagemUrl: menina },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! O bilhete avisa ONDE a mamãe foi e QUANDO ela volta.",
      feedbackErro:
        "Olhe o bilhete de novo: ele diz 'Fui à padaria' e 'Volto às 10h'. É um aviso rápido.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras pra entender bilhetes.",
    cards: [
      {
        palavra: "bilhete",
        explicacao: "É um texto curto que a gente deixa pra avisar algo quando não pode falar pessoalmente.",
        exemplo: "Deixei um bilhete pro papai avisando que fui à escola.",
        imagemUrl: mae,
      },
      {
        palavra: "destinatário",
        explicacao: "É a pessoa pra quem o bilhete é escrito.",
        exemplo: "No bilhete da mamãe, o destinatário era a Clara.",
        imagemUrl: menina,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler o bilhete da mamãe da Clara juntos.",
    leitura: {
      titulo: "Bilhete da Mamãe",
      imagemUrl: mae,
      legendaImagem: "A mamãe deixou um recado",
      destacar: ["bilhete", "Clara", "padaria"],
      paragrafos: [
        "A mamãe da Clara escreveu um BILHETE antes de sair.",
        "Ela colou o papel na geladeira, onde Clara ia ver assim que chegasse.",
        "No bilhete estava escrito: 'Clara, fui à padaria. Volto às 10h. Beijo, Mamãe.'",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no bilhete se precisar. As respostas estão nele.",
    perguntas: [
      {
        pergunta: "Para onde a mamãe foi?",
        opcoes: ["Para a escola", "Para a padaria", "Para o mercado"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ela foi 'à PADARIA'.",
        feedbackErro: "O bilhete diz: 'Fui à padaria'.",
        ondeEstaNoTexto: "Fui à padaria.",
      },
      {
        pergunta: "A que horas a mamãe volta?",
        opcoes: ["Às 9h", "Às 10h", "Às 12h"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 'Volto às 10h'.",
        feedbackErro: "Procure a palavra 'Volto' no bilhete.",
        ondeEstaNoTexto: "Volto às 10h.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem escreveu o bilhete? Pra quem ele é?",
    perguntas: [
      {
        pergunta: "Quem escreveu o bilhete?",
        opcoes: ["A Clara", "A mamãe", "A padaria"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! A mamãe assinou 'Beijo, Mamãe'.",
        feedbackErro: "Veja o final do bilhete: quem assinou?",
      },
      {
        pergunta: "Pra quem é o bilhete?",
        opcoes: ["Para a Clara", "Para o papai", "Para a vizinha"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O bilhete começa chamando 'Clara,'.",
        feedbackErro: "O bilhete começa com o nome de quem vai ler: 'Clara,'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem o que aconteceu.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "A mamãe escreve o bilhete antes de sair.", imagemUrl: mae },
        { id: "p2", texto: "Ela cola o bilhete na geladeira.", imagemUrl: caixa },
        { id: "p3", texto: "Clara chega e lê o bilhete.", imagemUrl: menina },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você entendeu como funciona um bilhete.",
      feedbackErro: "Primeiro se ESCREVE, depois se COLA no lugar visível, e por fim a pessoa LÊ.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia esse outro bilhete sozinho.",
    leitura: {
      titulo: "Bilhete do Papai",
      imagemUrl: relogio,
      destacar: ["parquinho", "Ana"],
      paragrafos: [
        "Ana, fui te buscar mais cedo hoje.",
        "Te espero no parquinho às 16h. Beijo, Papai.",
      ],
    },
    perguntas: [
      {
        pergunta: "Onde o papai vai esperar a Ana?",
        opcoes: ["No parquinho", "Na escola", "Em casa"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Te espero no PARQUINHO'.",
        feedbackErro: "O bilhete diz: 'Te espero no parquinho às 16h.'",
        ondeEstaNoTexto: "Te espero no parquinho às 16h.",
      },
      {
        pergunta: "Quem escreveu esse bilhete?",
        opcoes: ["A mamãe", "O papai", "A Ana"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Está assinado 'Beijo, Papai'.",
        feedbackErro: "Veja a assinatura no final do bilhete.",
        ondeEstaNoTexto: "Beijo, Papai.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Quem é Quem no Bilhete",
    instrucao: "Arraste cada parte do bilhete para o lugar certo.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Partes do Bilhete",
      bloco: {
        instrucao: "Ligue cada trecho ao que ele representa no bilhete.",
        itens: [
          { id: "i1", texto: "Ana,", alvoId: "destinatario" },
          { id: "i2", texto: "Fui te buscar mais cedo hoje.", alvoId: "recado" },
          { id: "i3", texto: "Beijo, Papai.", alvoId: "remetente" },
        ],
        alvos: [
          { id: "destinatario", nome: "Pra quem é" },
          { id: "recado", nome: "O que está avisando" },
          { id: "remetente", nome: "Quem escreveu" },
        ],
        feedbackAcerto: "🎉 Isso! Você reconheceu as partes do bilhete.",
        feedbackErro: "Pense: o nome no começo é PRA QUEM; a assinatura no fim é QUEM escreveu.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "BILHETE é um texto curto pra avisar algo rápido.",
      "Todo bilhete tem: pra quem é, o recado, e quem escreveu.",
      "A gente deixa o bilhete num lugar onde a pessoa vai ver.",
    ],
    miniDesafio: {
      pergunta: "O que sempre aparece no final de um bilhete?",
      opcoes: ["A assinatura de quem escreveu", "Um desenho", "Uma lista"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! A assinatura mostra quem escreveu.",
      feedbackErro: "No final do bilhete vem a assinatura — quem escreveu.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Pra que serve um bilhete?",
        opcoes: ["Pra avisar algo rápido", "Pra contar uma história longa", "Pra fazer conta"],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo!",
        feedbackErro: "Bilhete é um aviso rápido e curto.",
      },
      {
        pergunta: "2/5 — Para onde a mamãe da Clara foi?",
        opcoes: ["Padaria", "Escola", "Praça"],
        correta: 0,
        feedbackAcerto: "🎉 Padaria!",
        feedbackErro: "O bilhete diz 'Fui à padaria.'",
      },
      {
        pergunta: "3/5 — Quem é o destinatário de um bilhete?",
        opcoes: ["Quem escreveu", "Pra quem é escrito", "O lápis usado"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Destinatário é a pessoa que vai LER o bilhete.",
      },
      {
        pergunta: "4/5 — Onde o papai foi esperar a Ana?",
        opcoes: ["No parquinho", "Na escola", "No mercado"],
        correta: 0,
        feedbackAcerto: "🎉 No parquinho!",
        feedbackErro: "O bilhete diz: 'Te espero no parquinho'.",
      },
      {
        pergunta: "5/5 — O que aparece no final de um bilhete?",
        opcoes: ["A assinatura de quem escreveu", "Só desenhos", "Nada"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! É a assinatura.",
        feedbackErro: "No fim do bilhete tem a assinatura de quem escreveu.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Nosso bilhete em casa",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) A criança escolhe pra quem vai escrever um bilhete (irmão, avó, pet imaginário).",
      "2) Escrevam juntos: pra quem é, o recado e a assinatura.",
      "3) Colem o bilhete num lugar visível de casa.",
      "4) Leiam o bilhete em voz alta pra família.",
    ],
    registro: "📷 Uma foto do bilhete colado em casa.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
