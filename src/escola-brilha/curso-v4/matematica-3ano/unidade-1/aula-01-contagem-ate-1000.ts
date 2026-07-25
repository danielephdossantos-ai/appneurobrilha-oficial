import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";

/**
 * Aula 1 — "Contando até 1.000"
 * Curso: Matemática 3º Ano · Unidade 1: A Cidade dos Números
 *
 * Foco pedagógico: contar coleções grandes agrupando de 10 em 10 e de
 * 100 em 100. A criança percebe que 10 dezenas formam 1 CENTENA.
 * BNCC: EF03MA01 (leitura, escrita e contagem até 1.000).
 */
export const aula01_contagemAte1000: AulaV4 = {
  slug: "01-contagem-ate-1000",
  titulo: "Contando até 1.000",
  iconeTrilha: "🏙️",
  bncc: ["EF03MA01"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Bem-vindo(a) à CIDADE dos Números!",
    historia:
      "Brilha volta pra Vila dos Números e leva um susto: a Vila CRESCEU e virou CIDADE! Agora tem prédios enormes, ruas com casas em fila e muita, muita gente. Dona Coruja, agora Prefeita, pediu ajuda: 'Preciso contar até 1.000 sem me perder. Você me ajuda, {NOME}?'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "A Prefeita jogou uma cesta de maçãs pra você contar. Toque em cada uma:",
    cenas: [
      { tipo: "texto", texto: "🍎 Olha só quanta maçã caiu da árvore da praça!" },
      { tipo: "texto", texto: "Contar uma a uma até 100 daria muito trabalho...", destaque: true },
    ],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 24,
      itemPlural: "maçãs",
      pergunta: "Conte tocando em cada maçã:",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "E se fossem 300 maçãs? Dá pra contar de 1 em 1?",
    pista:
      "Lembra da Vila? Lá agrupávamos de 10 em 10. Na CIDADE, o número é maior — precisamos de um grupo AINDA MAIOR.",
    revelacao:
      "Se juntarmos 10 caixotes de 10 maçãs, formamos 1 CAMINHÃO de 100! É a CENTENA. Com centenas dá pra contar até 1.000 rapidinho.",
  },

  momento04_explicacao: {
    titulo: "3 tamanhos de grupo na Cidade",
    etapas: [
      {
        texto: "MORADOR = 1 unidade. Sozinho, solto.",
        exemplo: "🍎 = 1",
      },
      {
        texto: "RUA = 1 dezena = 10 moradores em fila. Um caixote cheio.",
        exemplo: "📦 = 10",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 1, rotulo: "📦 1 rua = 10" },
        ],
      },
      {
        texto:
          "PRÉDIO = 1 centena = 10 ruas empilhadas = 100 moradores. É a CENTENA.",
        exemplo: "🏢 = 100",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 10, rotulo: "🏢 1 prédio = 10 caixotes = 100" },
        ],
      },
      {
        texto: "10 prédios formam a CIDADE INTEIRA = 1.000. É o limite deste ano!",
        exemplo: "10 × 100 = 1.000",
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha vai contar 234 maçãs pensando alto:",
    passos: [
      "Primeiro, junto de 100 em 100: 100... 200. São 2 PRÉDIOS.",
      "Sobram maçãs? Sim. Agora junto de 10 em 10: 210, 220, 230. São 3 RUAS.",
      "Ainda sobram maçãs soltas: 231, 232, 233, 234. São 4 MORADORES.",
      "Total: 2 prédios (200) + 3 ruas (30) + 4 moradores (4) = 234.",
      "Contei 234 sem me perder! 🏙️",
    ],
    resposta: "234 maçãs",
    colecaoVisual: {
      imagemUrl: maca,
      grupos: [100, 100, 10, 10, 10, 4],
      itemPlural: "maçãs",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Agora juntos! A Prefeita tem 3 prédios e 2 ruas de bananas.",
    dica: "Prédio = 100. Rua = 10. Some: 100+100+100 e depois 10+10.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "🏢 Prédio" },
        { imagemUrl: banana, quantidade: 100, rotulo: "🏢 Prédio" },
        { imagemUrl: banana, quantidade: 100, rotulo: "🏢 Prédio" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦 Rua" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦 Rua" },
      ],
      pergunta: "Quantas bananas ao todo?",
      opcoes: ["302", "320", "230"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 3 prédios = 300, 2 ruas = 20 → 300 + 20 = 320.",
      feedbackErro: "Prédios primeiro (300), depois ruas (20): 300 + 20 = 320.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez, sem dica! Conte estas maçãs:",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "🏢" },
        { imagemUrl: maca, quantidade: 100, rotulo: "🏢" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦" },
        { imagemUrl: maca, quantidade: 5, rotulo: "🍎" },
      ],
      pergunta: "Qual é o número?",
      opcoes: ["245", "254", "425"],
      correta: 0,
      feedbackAcerto: "Boa! 2 prédios (200) + 4 ruas (40) + 5 soltas = 245.",
      feedbackErro: "200 + 40 + 5 = 245. Prédios viram centena, ruas dezena, soltas unidade.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita pediu 500 maçãs pra feira da Cidade. Você tem que MONTAR isso rápido.",
    problema: "Qual é o jeito mais SEGURO de separar 500 maçãs?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "Contar 1 por 1 até 500", imagemUrl: coruja },
        { nome: "Montar 5 prédios de 100", imagemUrl: maca },
        { nome: "Montar 50 ruas de 10", imagemUrl: banana },
      ],
      respostaCerta: "Montar 5 prédios de 100",
      feedbackAcerto:
        "🎯 Isso! 5 prédios × 100 = 500. Rápido e sem se perder. Matemático da Cidade!",
      feedbackErro:
        "1 por 1 cansa. 50 ruas dão certo, mas é muita coisa. 5 prédios de 100 é o melhor caminho.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Na CIDADE, contamos em 3 tamanhos: unidade (morador), dezena (rua) e CENTENA (prédio).",
      "10 unidades = 1 dezena · 10 dezenas = 1 centena · 10 centenas = 1.000.",
      "Pra contar rápido: agrupe de 100 em 100 primeiro, depois de 10 em 10.",
      "🎮 Vamos treinar: Colheita da Cidade!",
    ],
    miniDesafio: {
      tipo: "minijogoColheita",
      imagemUrl: maca,
      itemPlural: "maçãs",
      alvoInicial: 100,
      chegaramMais: 30,
      duracaoSeg: 90,
      feedbackAcerto: "🎉 1 prédio (100) + 3 ruas (30) = 130 maçãs!",
      feedbackErro: "Tinha 100 e chegaram 30 → 130. Tenta de novo!",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Quantas maçãs há em 4 prédios cheios?",
        opcoes: ["40", "400", "4.000"],
        correta: 1,
        feedbackAcerto: "🎉 Cada prédio = 100. 4 × 100 = 400.",
        feedbackErro: "1 prédio = 100. 4 prédios = 4 × 100 = 400.",
      },
      {
        pergunta: "3 prédios + 5 ruas + 2 soltas = ?",
        opcoes: ["352", "325", "532"],
        correta: 0,
        feedbackAcerto: "Perfeito! 300 + 50 + 2 = 352.",
        feedbackErro: "Centena vem primeiro (3), depois dezena (5), depois unidade (2): 352.",
      },
      {
        pergunta: "Quantos prédios cabem em 1.000?",
        opcoes: ["10", "100", "1.000"],
        correta: 0,
        feedbackAcerto: "Isso! 10 prédios × 100 = 1.000. A cidade inteira!",
        feedbackErro: "Cada prédio tem 100. 10 prédios × 100 = 1.000.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A Cidade em Casa",
    materiais: [
      "Feijões, botões, tampinhas ou grãos (uns 200)",
      "Copinhos ou potes pequenos",
      "Papel e lápis",
    ],
    passos: [
      "Junte 100 objetos em um POTE GRANDE (esse é 1 PRÉDIO).",
      "Separe grupos de 10 em copinhos (cada copinho = 1 RUA).",
      "Deixe alguns soltos (MORADORES).",
      "Peça a alguém pra montar um número: 'Faz 132!' e você monta com prédios, ruas e soltas.",
      "Depois inverta: você fala o número, o adulto monta.",
    ],
    registro: "📸 Foto do 'seu 132' montado com potes e copinhos.",
  },
};
