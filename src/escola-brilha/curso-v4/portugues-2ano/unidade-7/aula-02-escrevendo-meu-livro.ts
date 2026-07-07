import type { AulaPortuguesV4 } from "../../types";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import livros from "@/assets/neuro-treino/objetos/livros.png";
import lapis from "@/assets/neuro-treino/objetos/lapis.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import setaDir from "@/assets/neuro-treino/objetos/seta-direita.png";
import gato from "@/assets/neuro-treino/objetos/gato.png";
import balao from "@/assets/neuro-treino/objetos/balao.png";
import coracao from "@/assets/neuro-treino/objetos/coracao.png";
import festa from "@/assets/neuro-treino/objetos/festa.png";

/**
 * Unidade 7 · Aula 2 — Escrevendo Meu Livro
 * Transforma o plano em texto com começo/meio/fim usando conectivos.
 * BNCC: EF02LP18 · EF02LP19 · EF15LP06
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-escrevendo-meu-livro",
  titulo: "Escrevendo Meu Livro",
  iconeTrilha: "✍️",
  bncc: ["EF02LP18", "EF02LP19", "EF15LP06"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Do plano à história",
    historia:
      "Brilha pega o plano e diz: — Agora vira TEXTO! Uma ideia de cada vez. Cada parte se liga na outra com palavrinhas mágicas: DEPOIS, ENTÃO, POR FIM. Vamos escrever?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Uma história tem 3 partes. Qual é a certa?",
    bloco: {
      titulo: "Começo, meio e fim",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: estrela, nome: "🌟 COMEÇO" },
        { imagemUrl: setaDir, nome: "➡️ MEIO" },
        { imagemUrl: festa, nome: "🎉 FIM" },
      ],
      recado: {
        icone: "📖",
        rotulo: "Toda história tem",
        estilo: "papel",
        linhas: [
          "COMEÇO — apresenta",
          "MEIO — acontece algo",
          "FIM — resolve",
        ],
      },
      pergunta: "Como se escreve uma boa história?",
      hipoteses: [
        { texto: "Com COMEÇO, MEIO e FIM ligados por palavrinhas.", imagemUrl: livro },
        { texto: "Só o final.", imagemUrl: festa },
        { texto: "Frases soltas sem ligação.", imagemUrl: papel },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Começo + meio + fim!",
      feedbackErro: "Boa história tem 3 partes ligadas: começo → meio → fim.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Palavras mágicas que LIGAM as partes:",
    cards: [
      {
        palavra: "depois",
        explicacao: "Mostra o que vem A SEGUIR. Liga uma parte na outra.",
        exemplo: "A gata subiu no telhado. DEPOIS, começou a chover.",
        imagemUrl: setaDir,
      },
      {
        palavra: "então",
        explicacao: "Mostra o RESULTADO. O que aconteceu POR CAUSA disso.",
        exemplo: "Choveu muito. ENTÃO a gata desceu correndo.",
        imagemUrl: setaDir,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Veja como Brilha transformou o plano em TEXTO.",
    leitura: {
      titulo: "✍️ A gata Mimi",
      imagemUrl: gato,
      destacar: ["Era uma vez", "Depois", "Então", "Por fim"],
      paragrafos: [
        "🌟 COMEÇO: Era uma vez uma gata chamada Mimi. Ela morava num telhado.",
        "➡️ MEIO: Mimi sonhava em voar. DEPOIS, ela viu um passarinho passar. ENTÃO teve uma ideia: construir umas asas.",
        "🎉 FIM: Por fim, Mimi pulou do telhado com asas de papel e planou até o jardim. Ela riu feliz.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Sobre a história da Mimi:",
    perguntas: [
      {
        pergunta: "Como COMEÇA a história?",
        opcoes: [
          "Apresentando a Mimi",
          "Mostrando o fim",
          "Falando sobre chuva",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Apresenta o personagem!",
        feedbackErro: "COMEÇO = apresenta quem é / onde vive. 'Era uma vez uma gata chamada Mimi'.",
        ondeEstaNoTexto: "Era uma vez uma gata chamada Mimi",
      },
      {
        pergunta: "Qual palavra LIGA o começo com o meio?",
        opcoes: ["DEPOIS", "Nada", "Fim"],
        correta: 0,
        feedbackAcerto: "🎉 DEPOIS liga!",
        feedbackErro: "'DEPOIS, ela viu um passarinho' — liga uma parte na outra.",
        ondeEstaNoTexto: "DEPOIS, ela viu um passarinho",
      },
      {
        pergunta: "Como TERMINA?",
        opcoes: [
          "Mimi planou até o jardim e riu feliz",
          "Ela caiu e chorou",
          "Não termina",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Final feliz!",
        feedbackErro: "'Por fim… planou até o jardim. Ela riu feliz'.",
        ondeEstaNoTexto: "Por fim, Mimi pulou do telhado",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Escolher a palavrinha certa:",
    perguntas: [
      {
        pergunta: "Choveu. ___ o chão ficou molhado.",
        opcoes: ["ENTÃO", "MAS", "NUNCA"],
        correta: 0,
        feedbackAcerto: "🎉 ENTÃO mostra o resultado.",
        feedbackErro: "Choveu → resultado: chão molhado. 'ENTÃO' liga causa e resultado.",
      },
      {
        pergunta: "Comi o bolo. ___ escovei os dentes.",
        opcoes: ["DEPOIS", "ANTES", "NUNCA"],
        correta: 0,
        feedbackAcerto: "🎉 DEPOIS = o que veio a seguir.",
        feedbackErro: "Primeiro comeu, DEPOIS escovou. Ordem dos fatos.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "✍️ Monte a história: organize as frases na ordem.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "s1", texto: "Era uma vez um menino chamado Tom.", imagemUrl: estrela },
        { id: "s2", texto: "Tom achou um mapa secreto no sótão.", imagemUrl: setaDir },
        { id: "s3", texto: "Ele seguiu o mapa e achou um baú.", imagemUrl: setaDir },
        { id: "s4", texto: "Por fim, abriu o baú e virou herói!", imagemUrl: festa },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 História completa!",
      feedbackErro: "Apresenta o Tom → acha o mapa → segue → abre o baú.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia outra história e responda.",
    leitura: {
      titulo: "✍️ O passarinho valente",
      imagemUrl: coracao,
      destacar: ["Era uma vez", "Depois", "Então", "Por fim"],
      paragrafos: [
        "Era uma vez um passarinho chamado Piu. Ele tinha medo de voar.",
        "DEPOIS de muito treino, Piu subiu no galho mais alto.",
        "ENTÃO respirou fundo e abriu as asas.",
        "Por fim, voou tão longe que virou o pássaro mais valente do jardim.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem é o personagem?",
        opcoes: ["Piu, o passarinho", "Um gato", "Ninguém"],
        correta: 0,
        feedbackAcerto: "🎉 Piu!",
        feedbackErro: "O começo diz: 'um passarinho chamado Piu'.",
        ondeEstaNoTexto: "um passarinho chamado Piu",
      },
      {
        pergunta: "Qual era o PROBLEMA do Piu?",
        opcoes: ["Tinha medo de voar", "Não gostava de comer", "Era pequeno"],
        correta: 0,
        feedbackAcerto: "🎉 Medo de voar!",
        feedbackErro: "'Ele tinha medo de voar' — esse é o problema.",
        ondeEstaNoTexto: "tinha medo de voar",
      },
      {
        pergunta: "Como é o FIM?",
        opcoes: [
          "Virou o mais valente do jardim",
          "Continuou com medo",
          "Sumiu",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Ficou valente!",
        feedbackErro: "'Por fim, voou tão longe que virou o pássaro mais valente'.",
        ondeEstaNoTexto: "virou o pássaro mais valente do jardim",
      },
    ],
  },

  momento_minijogo: {
    titulo: "✍️ Monte a História",
    instrucao: "Organize as frases na ordem certa.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "✍️ Monte a História",
      bloco: {
        instrucao: "Começo → meio → fim.",
        itens: [
          { id: "m1", texto: "Era uma vez uma abelha chamada Lila.", imagemUrl: estrela },
          { id: "m2", texto: "Lila se perdeu da colmeia.", imagemUrl: setaDir },
          { id: "m3", texto: "Então, seguiu o cheiro das flores pra voltar.", imagemUrl: setaDir },
          { id: "m4", texto: "Por fim, achou a colmeia e todos festejaram.", imagemUrl: festa },
        ],
        ordemCerta: ["m1", "m2", "m3", "m4"],
        feedbackAcerto: "🎉 Perfeito!",
        feedbackErro: "Apresenta → problema → o que fez → final.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "🌟 COMEÇO apresenta o personagem.",
      "➡️ MEIO conta o que acontece.",
      "🎉 FIM mostra como resolveu.",
      "🔗 DEPOIS, ENTÃO, POR FIM ligam as partes.",
    ],
    miniDesafio: {
      pergunta: "'Chegou em casa. ___ tomou banho.'",
      opcoes: ["DEPOIS", "ANTES", "NUNCA"],
      correta: 0,
      feedbackAcerto: "🎉 DEPOIS!",
      feedbackErro: "Primeiro chegou, DEPOIS tomou banho.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — COMEÇO de história serve pra…",
        opcoes: ["APRESENTAR quem/onde", "Terminar", "Nada"],
        correta: 0,
        feedbackAcerto: "🎉 Apresentar!",
        feedbackErro: "COMEÇO = apresenta personagem e lugar.",
      },
      {
        pergunta: "2/5 — MEIO da história é…",
        opcoes: ["O que ACONTECE", "O nome", "O autor"],
        correta: 0,
        feedbackAcerto: "🎉 O que acontece!",
        feedbackErro: "MEIO = o que acontece — problema e tentativa.",
      },
      {
        pergunta: "3/5 — FIM é…",
        opcoes: ["Como RESOLVE", "Como começa", "O título"],
        correta: 0,
        feedbackAcerto: "🎉 Como resolve!",
        feedbackErro: "FIM = como termina, como o problema foi resolvido.",
      },
      {
        pergunta: "4/5 — 'DEPOIS' mostra…",
        opcoes: ["O que veio A SEGUIR", "O antes", "Nada"],
        correta: 0,
        feedbackAcerto: "🎉 A seguir!",
        feedbackErro: "DEPOIS = o próximo acontecimento.",
      },
      {
        pergunta: "5/5 — 'ENTÃO' mostra…",
        opcoes: ["O RESULTADO", "O começo", "O título"],
        correta: 0,
        feedbackAcerto: "🎉 O resultado!",
        feedbackErro: "ENTÃO = liga causa e resultado.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "✍️ Meu primeiro texto",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) A criança pega o PLANO da aula anterior.",
      "2) Escreve (ou dita) a história em 3 partes: começo, meio e fim.",
      "3) Usa pelo menos 1 vez as palavras: DEPOIS, ENTÃO, POR FIM.",
    ],
    registro: "📸 Foto do texto escrito.",
  },

  recompensa: { xp: 200, moedas: 160 },
};

void livros;
void lapis;
void balao;
