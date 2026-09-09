import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Aula 6 — "Somando na Feira"
 * Curso: Matemática 2º Ano · Unidade 1: A Feira dos Números
 *
 * Foco: adição juntando quantidades até 10, com transição frutas → número
 *       → conta armada. Reutiliza mecânicas travadas (tapContar,
 *       frutasParaNumero, contaArmada, operacaoVisual, contarQuiz).
 *
 * BNCC: EF02MA05.
 */
export const aula06_somandoNaFeira: AulaV4 = {
  slug: "06-somando-na-feira",
  titulo: "Somando na Feira",
  iconeTrilha: "➕",
  bncc: ["EF02MA05"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Seu Coelho ganhou mais frutas!",
    historia:
      "Seu Coelho tinha 5 maçãs na cesta e um freguês trouxe 2 de presente. 'Quantas eu tenho agora?' — perguntou coçando a orelha. Brilha sorriu: 'É hora de SOMAR! Quando a gente JUNTA duas quantidades, descobre o total!'",
    imagemUrl: brilha,
  },

  // Etapa 1 — ver e contar as 5 iniciais
  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Olhe a cesta do Seu Coelho. Toque em cada maçã pra contar:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 5,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs Seu Coelho já tinha?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Se chegam MAIS frutas na cesta, o que acontece com a quantidade?",
    pista:
      "Ela CRESCE. E a gente continua contando de onde parou, sem começar do 1 de novo.",
    revelacao:
      "Isso! Juntar dois grupos se chama SOMAR. Escrevemos com o sinal '+' e mostramos o total com '='. Ex.: 5 + 2 = 7.",
  },

  momento04_explicacao: {
    titulo: "De frutas para número: 5 + 2 = 7",
    etapas: [
      // Etapa 2 — chegam +2
      {
        texto:
          "Etapa 2 — Chegaram MAIS 2 maçãs! Toque em cada maçã e conte o total.",
        exemplo: "Já tinha 5. Chegaram 2. Contamos: 1, 2, 3, 4, 5, 6, 7!",
        frutasParaNumero: {
          imagemUrl: maca,
          itemPlural: "maçãs",
          grupos: [5, 2],
        },
      },
      // Etapa 3 — frutas viram número
      {
        texto:
          "Etapa 3 — As frutas viram NÚMERO. 5 maçãs do primeiro grupo + 2 do segundo = 7. Escrevemos: 5 + 2 = 7.",
        exemplo: "O sinal '+' quer dizer JUNTAR. O '=' mostra o resultado.",
      },
      // Etapa 4 — conta armada
      {
        texto:
          "Etapa 4 — Também dá pra escrever uma embaixo da outra. Isso é a CONTA ARMADA. Aperte 'Resolver' pra ver o Brilha somar:",
        exemplo: "Começa em 5, conta mais 2 (seis... sete...) e chega em 7.",
        contaArmada: {
          a: 5,
          b: 2,
          resultado: 7,
          itemPlural: "maçãs",
        },
      },
      // Etapa 5 — generalização bananas
      {
        texto:
          "Etapa 5 — Funciona com qualquer fruta. 4 bananas + 3 bananas = 7 bananas. O jeito é sempre o mesmo: JUNTAR.",
        exemplo: "Toque nas bananas e veja o total aparecer.",
        frutasParaNumero: {
          imagemUrl: banana,
          itemPlural: "bananas",
          grupos: [4, 3],
        },
      },
      {
        texto: "Agora a conta armada de 4 + 3:",
        contaArmada: {
          a: 4,
          b: 3,
          resultado: 7,
          itemPlural: "bananas",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha vai resolver 6 + 3 pensando em voz alta:",
    passos: [
      "Olho a conta: 6 + 3. Preciso JUNTAR 6 maçãs com 3.",
      "Guardo o maior na cabeça: 6.",
      "Conto mais 3 a partir do 6: sete... oito... nove.",
      "Cheguei em 9! Escrevo embaixo da linha.",
      "Confiro: 6 + 3 = 9. Perfeito!",
    ],
    resposta: "6 + 3 = 9",
    visualUrl: maca,
    colecaoVisual: {
      imagemUrl: maca,
      grupos: [6, 3],
      itemPlural: "maçãs",
    },
  },

  // Fase 1 — Guiada: 3 + 4 animado
  momento06_praticaGuiada: {
    enunciado:
      "Fase 1 — Vamos juntos! A cesta tem 3 maçãs e chegaram mais 4. Aperte pra ver a soma acontecer.",
    dica: "Comece pelo maior (4) e conte MAIS 3: cinco… seis… sete. Resposta: 7.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: maca,
      itemPlural: "maçãs",
      a: 3,
      b: 4,
      legenda: "3 maçãs + 4 maçãs = 7 maçãs",
    },
  },

  // Fase 2 — Independente: 5 + 2 bananas
  momento07_praticaIndependente: {
    enunciado:
      "Fase 2 — Agora é você! Toque em cada banana e escolha o total.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 5, rotulo: "Primeiro grupo" },
        { imagemUrl: banana, quantidade: 2, rotulo: "Chegaram mais" },
      ],
      pergunta: "Quantas bananas no total?",
      opcoes: ["6", "7", "8"],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! 5 + 2 = 7. Começou no 5 e contou +2: seis, sete.",
      feedbackErro:
        "Comece no maior (5) e conte MAIS 2: seis… sete. Resposta: 7.",
    },
  },

  // Fase 3 — Aplicação: 6 + 2 maçãs feira
  momento08_aplicacao: {
    contexto:
      "Fase 3 — Feira cheia! Seu Coelho vendeu 6 maçãs de manhã e ganhou mais 2 de um freguês agradecido.",
    problema:
      "6 maçãs + 2 maçãs. Quantas maçãs ele tem agora?",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: maca,
      itemPlural: "maçãs",
      a: 6,
      b: 2,
      legenda: "6 + 2 = 8 maçãs",
    },
  },

  momento09_revisao: {
    pontos: [
      "Revisão: SOMAR é JUNTAR dois grupos.",
      "Escrevemos com '+' e '=': 5 + 2 = 7.",
      "Também dá pra escrever uma embaixo da outra: CONTA ARMADA.",
      "Truque esperto: comece pelo número MAIOR e conte MAIS o menor.",
      "🎯 Mini-desafio pra fechar!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 4, rotulo: "Cesta 1" },
        { imagemUrl: maca, quantidade: 5, rotulo: "Cesta 2" },
      ],
      pergunta: "Mini-desafio: 4 + 5 = ?",
      opcoes: ["8", "9", "10"],
      correta: 1,
      feedbackAcerto:
        "🎉 Boa! 4 + 5 = 9. Começa no 5 e conta +4: seis, sete, oito, nove.",
      feedbackErro:
        "Comece no 5 (maior) e conte +4: seis, sete, oito, nove. Resposta: 9.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — Quanto é 3 + 2?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 3, rotulo: "Grupo 1" },
          { imagemUrl: maca, quantidade: 2, rotulo: "Grupo 2" },
        ],
        feedbackAcerto: "🎉 Isso! 3 + 2 = 5. Contamos tudo: 1,2,3,4,5.",
        feedbackErro: "Comece no 3 e conte +2: quatro, cinco. Resposta: 5.",
      },
      {
        pergunta:
          "Pergunta 2 de 5 — Seu Coelho tinha 5 maçãs e ganhou mais 2. Quantas ele tem agora?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 5, rotulo: "Já tinha" },
          { imagemUrl: maca, quantidade: 2, rotulo: "Ganhou" },
        ],
        feedbackAcerto:
          "🎉 Perfeito! 5 + 2 = 7. Começou no 5 e contou +2: seis, sete.",
        feedbackErro:
          "Pense: 5 maçãs + 2. Conte a partir do 5: seis, sete. Total: 7.",
      },
      {
        pergunta: "Pergunta 3 de 5 — Quanto é 6 + 3?",
        opcoes: ["8", "9", "10"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 6, rotulo: "Cesta 1" },
          { imagemUrl: banana, quantidade: 3, rotulo: "Cesta 2" },
        ],
        feedbackAcerto: "🎉 Boa! 6 + 3 = 9.",
        feedbackErro: "Comece no 6 e conte +3: sete, oito, nove. Resposta: 9.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — Dona Coruja tem 4 bananas. Seu Coelho deu mais 4. Quantas ela tem?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 4, rotulo: "Coruja" },
          { imagemUrl: banana, quantidade: 4, rotulo: "Coelho deu" },
        ],
        feedbackAcerto: "🎉 Isso! 4 + 4 = 8. Dobrou!",
        feedbackErro: "4 + 4 é 'dobro do 4'. Fica 8.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Numa cesta chegaram 7 maçãs de manhã e 2 à tarde. Total?",
        opcoes: ["8", "9", "10"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 7, rotulo: "Manhã" },
          { imagemUrl: maca, quantidade: 2, rotulo: "Tarde" },
        ],
        feedbackAcerto:
          "🎉 Uau! 7 + 2 = 9. Você é campeão(ã) da soma! 🏆",
        feedbackErro:
          "Comece no 7 e conte +2: oito, nove. São 9 maçãs.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "➕ A Cesta que Cresce",
    materiais: [
      "Frutas ou objetinhos pra contar (feijões, tampinhas, brinquedos pequenos)",
      "1 cesta, pote ou prato",
      "Papel e lápis (opcional)",
    ],
    passos: [
      "1) O adulto coloca alguns objetos na cesta (entre 3 e 7) e a criança conta em voz alta.",
      "2) O adulto acrescenta MAIS alguns (entre 1 e 3) e diz: 'Chegaram mais N!'",
      "3) A criança conta TUDO junto começando pelo maior grupo.",
      "4) A criança fala em voz alta a soma: '5 mais 2 é igual a 7!'",
      "5) Repitam 3 vezes com combinações diferentes até no máximo 10.",
    ],
    registro:
      "📸 Foto da cesta ANTES e DEPOIS, com a criança mostrando com os dedos o total.",
  },

  recompensa: {
    xp: 160,
    moedas: 80,
    medalha: "Somador(a) da Feira",
  },
};
