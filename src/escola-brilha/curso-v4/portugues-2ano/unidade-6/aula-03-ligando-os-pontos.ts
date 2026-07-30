import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bibliotecario } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as guardaChuva } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as setaDir } from "@/assets/neuro-treino/objetos/seta-direita.png.asset.json";

/**
 * Unidade 6 · Aula 3 — Ligando os Pontos (Causa e Efeito)
 * BNCC: EF02LP28 (relações de causa/consequência em textos simples)
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-ligando-os-pontos",
  titulo: "Ligando os Pontos",
  iconeTrilha: "🧩",
  bncc: ["EF02LP28"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "PORQUE... ENTÃO...",
    historia:
      "Brilha abre um livro que tem SETAS entre as frases. O bibliotecário explica: — Toda história tem PORQUÊ e ENTÃO. Uma coisa faz a outra acontecer. Vamos aprender a LIGAR essas duas partes!",
    imagemUrl: bibliotecario,
  },

  momento02_previsao: {
    instrucao: "Olha as pistas. Qual coisa fez a outra?",
    bloco: {
      titulo: "Choveu → …?",
      capaImagemUrl: setaDir,
      pistas: [
        { imagemUrl: chuva, nome: "🌧️ Choveu" },
        { imagemUrl: setaDir, nome: "➡️ Então…" },
        { imagemUrl: guardaChuva, nome: "☂️ Guarda-chuva?" },
      ],
      recado: {
        icone: "🧩",
        rotulo: "Ligue os pontos",
        estilo: "papel",
        linhas: [
          "Uma coisa (PORQUÊ)",
          "faz outra acontecer (ENTÃO).",
          "Qual liga com CHUVA?",
        ],
      },
      pergunta: "'Choveu MUITO, ENTÃO…'",
      hipoteses: [
        { texto: "as pessoas abriram o guarda-chuva.", imagemUrl: guardaChuva },
        { texto: "todo mundo virou peixe.", imagemUrl: sol },
        { texto: "o sol ficou verde.", imagemUrl: sol },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Chuva → guarda-chuva. Faz sentido!",
      feedbackErro:
        "PORQUE choveu → ENTÃO usaram guarda-chuva. É a resposta que se LIGA.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras que LIGAM ideias.",
    cards: [
      {
        palavra: "porque",
        explicacao: "Mostra a CAUSA — o motivo de algo ter acontecido.",
        exemplo: "Ana levou casaco PORQUE estava frio.",
        imagemUrl: chuva,
      },
      {
        palavra: "então",
        explicacao: "Mostra o RESULTADO — o que aconteceu depois por causa disso.",
        exemplo: "Estava frio, ENTÃO Ana levou casaco.",
        imagemUrl: setaDir,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com Brilha, pensando no PORQUÊ.",
    leitura: {
      titulo: "A festa cancelada",
      imagemUrl: brilha,
      destacar: ["porque", "então", "choveu"],
      paragrafos: [
        "A festa era no parque.",
        "PORQUE choveu muito, o parque virou lama.",
        "ENTÃO a festa foi cancelada.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Ligue os pontos.",
    perguntas: [
      {
        pergunta: "Por que a festa foi cancelada?",
        opcoes: [
          "PORQUE choveu e o parque virou lama",
          "Porque acabou o bolo",
          "Porque ninguém foi convidado",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Chuva → lama → cancelou.",
        feedbackErro: "A CAUSA foi a chuva. O resultado foi cancelar.",
        dica: "Volte no texto e procure a parte que fala de 'cancelada'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A CAUSA foi a chuva. O resultado foi cancelar. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Qual palavra mostra o RESULTADO?",
        opcoes: ["PORQUE", "ENTÃO", "Muito"],
        correta: 1,
        feedbackAcerto: "🎉 ENTÃO!",
        feedbackErro: "ENTÃO mostra o que ACONTECEU DEPOIS.",
        dica: "Volte no texto e procure a parte que fala de 'resultado'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: ENTÃO mostra o que ACONTECEU DEPOIS. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Qual palavra mostra a CAUSA?",
        opcoes: ["ENTÃO", "PORQUE", "Ontem"],
        correta: 1,
        feedbackAcerto: "🎉 PORQUE!",
        feedbackErro: "PORQUE mostra o MOTIVO.",
        dica: "Volte no texto e procure a parte que fala de 'mostra'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: PORQUE mostra o MOTIVO. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Complete as ligações.",
    perguntas: [
      {
        pergunta: "'Léo estava com fome, ENTÃO…'",
        opcoes: [
          "COMEU um lanche",
          "voou até a Lua",
          "virou robô",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Comeu!",
        feedbackErro: "Fome → comer. É o resultado que faz sentido.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "'A menina caiu PORQUE…'",
        opcoes: [
          "tropeçou no cachorro",
          "ganhou um prêmio",
          "estava cantando",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Tropeçou!",
        feedbackErro: "PORQUE = motivo. Tropeçar É motivo de cair.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Ordene: causa → seta → resultado.",
    bloco: {
      instrucao: "Do PORQUÊ até o ENTÃO.",
      itens: [
        { id: "c1", texto: "Choveu muito.", imagemUrl: chuva },
        { id: "c2", texto: "→ (ligação)", imagemUrl: setaDir },
        { id: "c3", texto: "As crianças abriram o guarda-chuva.", imagemUrl: guardaChuva },
      ],
      ordemCerta: ["c1", "c2", "c3"],
      feedbackAcerto: "🎉 Causa → resultado!",
      feedbackErro: "Primeiro a CAUSA (chuva), depois o RESULTADO (guarda-chuva).",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e ligue os pontos.",
    leitura: {
      titulo: "O cachorro molhado",
      imagemUrl: cachorro,
      destacar: ["porque", "então"],
      paragrafos: [
        "Pipoca é um cachorro brincalhão.",
        "PORQUE ele pulou na poça, ficou todo molhado.",
        "ENTÃO Ana levou Pipoca pro banho.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que Pipoca ficou molhado?",
        opcoes: [
          "PORQUE pulou na poça",
          "Porque tomou banho",
          "Porque choveu na sala",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Pulou na poça!",
        feedbackErro: "A CAUSA foi pular na poça.",
        dica: "Volte no texto e procure a parte que fala de 'molhado'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A CAUSA foi pular na poça. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "PORQUE ele pulou na poça",
      },
      {
        pergunta: "O que aconteceu DEPOIS?",
        opcoes: [
          "Ana levou Pipoca pro banho",
          "Pipoca virou peixe",
          "Ana foi dormir",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Foi pro banho!",
        feedbackErro: "ENTÃO Ana levou Pipoca pro BANHO.",
        dica: "Volte no texto e procure a parte que fala de 'aconteceu'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: ENTÃO Ana levou Pipoca pro BANHO. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "ENTÃO Ana levou Pipoca pro banho",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🧩 Causa e Resultado",
    instrucao: "Arraste cada CAUSA pro RESULTADO certo.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "🧩 Causa e Resultado",
      bloco: {
        instrucao: "Ligue as duplas.",
        itens: [
          { id: "x1", texto: "Estava frio", alvoId: "r1", imagemUrl: menino },
          { id: "x2", texto: "Estava com sono", alvoId: "r2", imagemUrl: menina },
          { id: "x3", texto: "Estava com fome", alvoId: "r3", imagemUrl: cachorro },
        ],
        alvos: [
          { id: "r1", nome: "🧥 Pôs o casaco", descricao: "Ficar quente" },
          { id: "r2", nome: "😴 Foi dormir", descricao: "Descansar" },
          { id: "r3", nome: "🍎 Comeu uma fruta", descricao: "Matar a fome" },
        ],
        feedbackAcerto: "🎉 Ligou tudo direitinho!",
        feedbackErro: "Frio → casaco. Sono → dormir. Fome → comer.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PORQUE mostra a CAUSA (motivo).",
      "ENTÃO mostra o RESULTADO.",
      "Bons leitores LIGAM causa e resultado.",
    ],
    miniDesafio: {
      pergunta: "'A planta secou PORQUE…'",
      opcoes: [
        "ninguém regou",
        "todo mundo cantou",
        "o sol ficou azul",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Ninguém regou!",
      feedbackErro: "A planta seca PORQUE não é regada.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: A planta seca PORQUE não é regada. Agora leia de novo e escolha com calma.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — 'PORQUE' serve pra mostrar…",
        opcoes: ["A CAUSA", "O nome", "A cor"],
        correta: 0,
        feedbackAcerto: "🎉 A causa!",
        feedbackErro: "PORQUE = motivo, CAUSA.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: PORQUE = motivo, CAUSA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — 'ENTÃO' serve pra mostrar…",
        opcoes: ["O RESULTADO", "O lugar", "O autor"],
        correta: 0,
        feedbackAcerto: "🎉 O resultado!",
        feedbackErro: "ENTÃO = o que aconteceu DEPOIS.",
        dica: "Pista: a resposta certa começa com a letra 'O'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: ENTÃO = o que aconteceu DEPOIS. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — 'Estava com sede, ENTÃO ele…'",
        opcoes: ["bebeu água", "pintou a parede", "dormiu"],
        correta: 0,
        feedbackAcerto: "🎉 Bebeu água!",
        feedbackErro: "Sede → beber água. Faz sentido.",
        dica: "Pista: a resposta certa começa com a letra 'B'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Sede → beber água. Faz sentido. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — 'A rua ficou molhada PORQUE…'",
        opcoes: ["choveu", "estava sol forte", "era feriado"],
        correta: 0,
        feedbackAcerto: "🎉 Choveu!",
        feedbackErro: "Chuva é a CAUSA de rua molhada.",
        dica: "Pista: a resposta certa começa com a letra 'C'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Chuva é a CAUSA de rua molhada. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Leitor bom LIGA…",
        opcoes: [
          "causa e resultado",
          "só as figuras",
          "só o começo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Causa e resultado!",
        feedbackErro: "Bom leitor liga PORQUE ↔ ENTÃO.",
        dica: "Pista: a resposta certa começa com a letra 'C'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Bom leitor liga PORQUE ↔ ENTÃO. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🧩 Caça-motivo",
    materiais: ["Um livrinho de casa"],
    passos: [
      "1) Um adulto lê 2 frases de uma história.",
      "2) A criança fala PORQUE aconteceu.",
      "3) A criança fala ENTÃO o que veio depois.",
    ],
    registro: "🎙️ Áudio curto com 'PORQUE… ENTÃO…' completo pela criança.",
  },

  recompensa: { xp: 150, moedas: 100 },
};

void livro;
