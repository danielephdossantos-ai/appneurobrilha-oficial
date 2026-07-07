import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Aula 8 — "Problemas da Feira"
 * Curso: Matemática 2º Ano · Unidade 1: A Feira dos Números
 *
 * Foco: RESOLVER SITUAÇÕES do cotidiano. Ler problema → destacar
 * números → escolher operação → resolver → explicar. Reutiliza
 * mecânicas já aprovadas (contarQuiz, operacaoVisual, contaArmada).
 *
 * BNCC: EF02MA06.
 */
export const aula08_problemasDaFeira: AulaV4 = {
  slug: "08-problemas-da-feira",
  titulo: "Problemas da Feira",
  iconeTrilha: "🛒",
  bncc: ["EF02MA06"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Um dia cheio na feira!",
    historia:
      "Dona Coruja comprou 12 bananas de manhã. À tarde, passou de novo e comprou MAIS 5. 'Quantas bananas eu tenho agora?' — perguntou coçando as penas. Brilha veio ajudar: 'Vamos LER o problema com calma e descobrir juntos!'",
    imagemUrl: brilha,
  },

  // Etapa 1 — mostrar o problema-modelo com visual
  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Leia o problema com atenção. Dona Coruja tinha 12 bananas e comprou mais 5. Toque nas bananas pra contar o total:",
    cenas: [],
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 10, rotulo: "📦 caixote" },
        { imagemUrl: banana, quantidade: 2, rotulo: "🍌 soltas" },
        { imagemUrl: banana, quantidade: 5, rotulo: "🍌 +5" },
      ],
      pergunta: "Quantas bananas Dona Coruja tem agora?",
      opcoes: ["7", "17", "25"],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! 12 + 5 = 17. As soltas mudam: 2+5=7. Caixote fica 1. Total: 17.",
      feedbackErro:
        "Some as soltas: 2+5=7. Caixote continua 1. Fica 17.",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Como a gente sabe se um problema pede pra SOMAR ou pra fazer outra coisa?",
    pista:
      "Palavras como 'ganhou mais', 'comprou mais', 'chegaram mais', 'juntou', 'no total' quase sempre indicam SOMA.",
    revelacao:
      "Isso! Pra resolver um problema, seguimos 5 passos: 1) LER com calma. 2) DESTACAR os números. 3) ESCOLHER a operação. 4) RESOLVER. 5) EXPLICAR a resposta.",
  },

  momento04_explicacao: {
    titulo: "Os 5 passos pra resolver problemas",
    etapas: [
      {
        texto:
          "Passo 1 — LER. 'Dona Coruja tinha 12 bananas e comprou mais 5.' Leia devagar duas vezes.",
        exemplo:
          "Ler é entender. Sem entender a história, a conta sai errada.",
      },
      {
        texto:
          "Passo 2 — DESTACAR os números. Aqui temos DOIS: 12 e 5. Escrevemos separadinho.",
        exemplo:
          "Números do problema: 12 (o que tinha) e 5 (o que comprou).",
        frutasParaNumero: {
          imagemUrl: banana,
          itemPlural: "bananas",
          grupos: [12, 5],
        },
      },
      {
        texto:
          "Passo 3 — ESCOLHER a operação. Palavras 'comprou MAIS' → é SOMA (+).",
        exemplo:
          "Dica: MAIS, GANHOU, CHEGARAM, JUNTOU, TOTAL → sinal de mais (+).",
      },
      {
        texto:
          "Passo 4 — RESOLVER na conta armada. 12 + 5 = 17.",
        exemplo:
          "Empilha: unidades 2+5=7. Dezenas 1+0=1. Fica 17.",
        contaArmada: {
          a: 12,
          b: 5,
          resultado: 17,
          itemPlural: "bananas",
        },
      },
      {
        texto:
          "Passo 5 — EXPLICAR a resposta com uma frase completa. Não é só o número!",
        exemplo:
          "Resposta: 'Dona Coruja tem 17 bananas agora.' Frase completa mostra que você ENTENDEU.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha vai resolver este problema pensando em voz alta: 'Seu Coelho tinha 8 maçãs e o vizinho deu mais 4. Quantas ficaram?'",
    passos: [
      "Passo 1 — Leio: Coelho tinha 8, ganhou mais 4.",
      "Passo 2 — Destaco os números: 8 e 4.",
      "Passo 3 — 'GANHOU mais' → é SOMA. Uso '+'.",
      "Passo 4 — Resolvo: começo no 8 e conto +4: nove, dez, onze, doze. Deu 12!",
      "Passo 5 — Resposta: Seu Coelho ficou com 12 maçãs.",
    ],
    resposta: "12 maçãs",
    visualUrl: maca,
    colecaoVisual: {
      imagemUrl: maca,
      grupos: [8, 4],
      itemPlural: "maçãs",
    },
  },

  // Fase 1 — Guiada: problema simples 6+3
  momento06_praticaGuiada: {
    enunciado:
      "Fase 1 — Vamos juntos! 'Seu Coelho tinha 6 maçãs e colheu mais 3. Quantas ele tem?'",
    dica: "Palavra 'MAIS' → soma. Some 6 + 3 pensando na conta armada.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: maca,
      itemPlural: "maçãs",
      a: 6,
      b: 3,
      legenda: "6 (já tinha) + 3 (colheu) = 9 maçãs",
    },
  },

  // Fase 2 — Independente: 14 + 5 problema
  momento07_praticaIndependente: {
    enunciado:
      "Fase 2 — Agora você! 'Dona Coruja tinha 14 bananas e ganhou mais 5 de presente. Total?'",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 10, rotulo: "📦 já tinha" },
        { imagemUrl: banana, quantidade: 4, rotulo: "🍌 já tinha" },
        { imagemUrl: banana, quantidade: 5, rotulo: "🍌 ganhou" },
      ],
      pergunta: "Quantas bananas Dona Coruja tem?",
      opcoes: ["9", "19", "24"],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! 14 + 5 = 19. Só as soltas mudam: 4+5=9. Fica 19.",
      feedbackErro:
        "Soltas: 4+5=9. Caixote continua 1. Total: 19.",
    },
  },

  // Fase 3 — Aplicação: 21 + 12
  momento08_aplicacao: {
    contexto:
      "Fase 3 — Feira lotada! 'Seu Coelho vendeu 21 maçãs de manhã. À tarde, vendeu mais 12. Quantas maçãs ele vendeu no dia?'",
    problema:
      "Escolha o total certo.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 manhã" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 manhã" },
        { imagemUrl: maca, quantidade: 1, rotulo: "🍎 manhã" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦 tarde" },
        { imagemUrl: maca, quantidade: 2, rotulo: "🍎 tarde" },
      ],
      pergunta: "Quantas maçãs no total do dia?",
      opcoes: ["23", "33", "43"],
      correta: 1,
      feedbackAcerto:
        "🎉 Uau! 21 + 12 = 33. Soltas 1+2=3. Caixotes 2+1=3. Fica 33.",
      feedbackErro:
        "Soltas: 1+2=3. Caixotes: 2+1=3. Total: 33.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Os 5 passos pra resolver problemas: LER → DESTACAR → ESCOLHER → RESOLVER → EXPLICAR.",
      "'MAIS', 'GANHOU', 'CHEGARAM', 'JUNTOU', 'TOTAL' → é SOMA (+).",
      "Sempre responda com FRASE COMPLETA, não só o número.",
      "🎯 Mini-desafio!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
        { imagemUrl: maca, quantidade: 5, rotulo: "🍎" },
        { imagemUrl: maca, quantidade: 4, rotulo: "🍎 +" },
      ],
      pergunta:
        "Mini-desafio: 'Brilha achou 15 maçãs e ganhou mais 4. Quantas tem?'",
      opcoes: ["11", "19", "9"],
      correta: 1,
      feedbackAcerto: "🎉 Boa! 15 + 4 = 19. Brilha tem 19 maçãs.",
      feedbackErro: "Some só as soltas: 5+4=9. Caixote continua 1. Fica 19.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta:
          "Pergunta 1 de 5 — Seu Coelho tinha 5 maçãs e ganhou mais 3. Quantas tem agora?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 5, rotulo: "Já tinha" },
          { imagemUrl: maca, quantidade: 3, rotulo: "Ganhou" },
        ],
        feedbackAcerto: "🎉 Isso! 5 + 3 = 8 maçãs.",
        feedbackErro: "'GANHOU mais' é soma: 5+3=8.",
      },
      {
        pergunta:
          "Pergunta 2 de 5 — Dona Coruja comprou 10 bananas e depois mais 6. Total?",
        opcoes: ["16", "26", "60"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 6, rotulo: "🍌 +" },
        ],
        feedbackAcerto: "🎉 Perfeito! 10 + 6 = 16.",
        feedbackErro: "Caixote (10) + 6 soltas = 16.",
      },
      {
        pergunta:
          "Pergunta 3 de 5 — Brilha colheu 13 maçãs de manhã e mais 4 à tarde. Quantas maçãs no total?",
        opcoes: ["9", "17", "7"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
          { imagemUrl: maca, quantidade: 3, rotulo: "🍎" },
          { imagemUrl: maca, quantidade: 4, rotulo: "🍎 +" },
        ],
        feedbackAcerto: "🎉 Boa! 13 + 4 = 17. Só as soltas mudam: 3+4=7.",
        feedbackErro: "Soltas: 3+4=7. Caixote continua 1. Fica 17.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — 'A feira recebeu 20 caixas de banana e mais 15.' Quantas caixas ao todo?",
        opcoes: ["25", "35", "45"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
          { imagemUrl: banana, quantidade: 5, rotulo: "🍌" },
        ],
        feedbackAcerto: "🎉 Isso! 20 + 15 = 35.",
        feedbackErro: "Dezenas: 2+1=3. Unidades: 0+5=5. Total: 35.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Qual palavra do problema indica que é SOMA?",
        opcoes: ["'sobrou'", "'ganhou mais'", "'tirou'"],
        correta: 1,
        feedbackAcerto:
          "🎉 Uau! 'GANHOU MAIS' → soma. Você aprendeu a ler problemas! 🏆",
        feedbackErro:
          "'Sobrou' e 'tirou' são de subtração. 'GANHOU MAIS' é soma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🛒 Problemas da Feira em Casa",
    materiais: [
      "Frutas ou objetos pra contar",
      "Papel e lápis",
    ],
    passos: [
      "1) O adulto inventa um probleminha de feira em voz alta: 'Tinha 8 laranjas, comprei mais 4.'",
      "2) A criança repete o problema, DESTACA os números (8 e 4) e diz a operação: 'é MAIS, é SOMA!'",
      "3) Resolve com os objetos: junta 8 + 4 e conta o total.",
      "4) A criança responde com FRASE COMPLETA: 'Agora tem 12 laranjas.'",
      "5) Trocam de papel: a criança inventa o problema pro adulto resolver.",
    ],
    registro:
      "📸 Foto do papel com o problema escrito, a conta armada e a resposta em frase.",
  },

  recompensa: {
    xp: 180,
    moedas: 90,
    medalha: "Detetive dos Problemas",
  },
};
