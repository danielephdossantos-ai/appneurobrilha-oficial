import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";

import { url as n0 } from "@/assets/banco-midias/numeros/numero-0.png.asset.json";
import { url as n1 } from "@/assets/banco-midias/numeros/numero-1.png.asset.json";
import { url as n2 } from "@/assets/banco-midias/numeros/numero-2.png.asset.json";
import { url as n3 } from "@/assets/banco-midias/numeros/numero-3.png.asset.json";
import { url as n4 } from "@/assets/banco-midias/numeros/numero-4.png.asset.json";
import { url as n5 } from "@/assets/banco-midias/numeros/numero-5.png.asset.json";
import { url as n6 } from "@/assets/banco-midias/numeros/numero-6.png.asset.json";
import { url as n7 } from "@/assets/banco-midias/numeros/numero-7.png.asset.json";
import { url as n8 } from "@/assets/banco-midias/numeros/numero-8.png.asset.json";
import { url as n9 } from "@/assets/banco-midias/numeros/numero-9.png.asset.json";
import n10 from "@/assets/banco-midias/numeros/numero-10.png";

/**
 * Contar com Pip — FASE 4 · Linha Numérica Mental (0–10)
 * ------------------------------------------------------
 * Objetivo: internalizar a RETA dos números como um caminho ordenado.
 * "Antes / depois / entre", saltos de 1, comparação por POSIÇÃO
 * (quem está mais à direita é maior).
 *
 * Base: Dehaene (linha numérica mental); Ramani & Siegler (2008 —
 * jogo linear de tabuleiro melhora senso numérico); Case & Griffin
 * (Number Worlds).
 *
 * Semana 1 · O caminho dos números (0→5)
 * Semana 2 · Estendendo até 10
 * Semana 3 · Antes, depois, entre
 * Semana 4 · Grande Corrida do Pip + DIPLOMA
 */

import { url as pipMascot } from "@/assets/pip-girl-mascot.png.asset.json";
const mascote = pipMascot;

const NUM: Record<number, string> = {
  0: n0, 1: n1, 2: n2, 3: n3, 4: n4, 5: n5,
  6: n6, 7: n7, 8: n8, 9: n9, 10: n10,
};

const opN = (n: number, correta: boolean) => ({
  nome: String(n),
  imagemUrl: NUM[n],
  correta,
  quantidade: 1 as const,
});

// ============================================================
// SEMANA 1 · O caminho dos números (0 → 5)
// ============================================================

const dia01: AulaEI = {
  slug: "pip-f4-s1-d1-caminho-0a5",
  titulo: "Dia 1 · O caminho começa no 0",
  icone: "🛤️",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Fase 4! Os números moram num CAMINHO. Começa no 0 e vai andando: 0, 1, 2, 3, 4, 5. Cada passo é um a mais!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 5,
      itemSingular: "casa",
      itemPlural: "casas",
      instrucaoAudio: "Conta as casas do caminho: 1, 2, 3, 4, 5.",
      elogio: "O caminho tem 5 casas depois do 0!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número começa o caminho?",
      opcoes: [opN(0, true), opN(1, false), opN(5, false)],
      feedbackAcerto: "0! O zero é o começo!",
      feedbackErro: "O caminho começa no 0 — nada ainda.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 0, qual número vem?",
      opcoes: [opN(2, false), opN(1, true), opN(3, false)],
      feedbackAcerto: "1! Um passo depois do 0!",
      feedbackErro: "0, 1... o 1 vem logo depois.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 2, qual vem?",
      opcoes: [opN(3, true), opN(1, false), opN(4, false)],
      feedbackAcerto: "3! Cada passo é um a mais!",
      feedbackErro: "1, 2, 3 — o 3 vem depois do 2.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número termina o caminho de hoje?",
      opcoes: [opN(4, false), opN(5, true), opN(3, false)],
      feedbackAcerto: "5! Chegamos no 5!",
      feedbackErro: "Fim do caminho de hoje: 5.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Caminho no chão",
      convite:
        "Desenhe com giz (ou use fita) um caminho com casas 0-1-2-3-4-5 no chão. A criança dá um passo por casa dizendo o número em voz alta.",
      dicaAdulto:
        "Jogo linear no chão ativa a linha numérica mental (Ramani & Siegler 2008).",
    },
    {
      tipo: "celebracao",
      medalha: "Dia 1 · Caminhante do 0 ao 5",
      mascoteUrl: mascote,
      falaFinal: "Você já anda do 0 ao 5! Amanhã vamos ANDAR PRA FRENTE.",
    },
  ],
  baseCientifica: "Linha numérica mental (Dehaene); Ramani & Siegler (2008).",
};

const dia02: AulaEI = {
  slug: "pip-f4-s1-d2-um-a-mais",
  titulo: "Dia 2 · Um passo a mais",
  icone: "👣",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Cada passo pra frente no caminho é UM A MAIS. Vamos treinar!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a mais que 1 é qual número?",
      opcoes: [opN(2, true), opN(3, false), opN(0, false)],
      feedbackAcerto: "2! Um passinho depois do 1!",
      feedbackErro: "1... depois vem 2.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a mais que 2 é qual?",
      opcoes: [opN(4, false), opN(3, true), opN(1, false)],
      feedbackAcerto: "3! Boa!",
      feedbackErro: "2 e mais um = 3.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a mais que 3 é qual?",
      opcoes: [opN(4, true), opN(2, false), opN(5, false)],
      feedbackAcerto: "4! Cada passo, um a mais!",
      feedbackErro: "3, 4 — um passo pra frente.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a mais que 4 é qual?",
      opcoes: [opN(3, false), opN(5, true), opN(1, false)],
      feedbackAcerto: "5! Chegamos!",
      feedbackErro: "4, 5 — perto do fim.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 5,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio: "Toca uma por uma dizendo em voz alta: 1, 2, 3, 4, 5.",
      elogio: "5! Você contou cada passinho!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Pulos no caminho",
      convite:
        "No caminho no chão, peça: 'Estou no 2, pula UM'. A criança pula pro 3. Repita com 0, 1, 3, 4.",
      dicaAdulto:
        "Somar 1 é a base de toda contagem — dominar aqui destrava a soma na Fase 7.",
    },
    {
      tipo: "celebracao",
      medalha: "Dia 2 · Um a mais",
      mascoteUrl: mascote,
      falaFinal: "Um a mais é dar UM passo! Amanhã: UM A MENOS.",
    },
  ],
  baseCientifica: "Successor function (Peano/Gelman).",
};

const dia03: AulaEI = {
  slug: "pip-f4-s1-d3-um-a-menos",
  titulo: "Dia 3 · Um passo a menos",
  icone: "↩️",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Se andar pra frente é MAIS, andar pra TRÁS é MENOS. Um passo pra trás = um a menos.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a menos que 5 é qual número?",
      opcoes: [opN(4, true), opN(6, false), opN(3, false)],
      feedbackAcerto: "4! Um passo pra trás!",
      feedbackErro: "5, 4 — voltando um.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a menos que 4 é qual?",
      opcoes: [opN(5, false), opN(3, true), opN(2, false)],
      feedbackAcerto: "3! Boa!",
      feedbackErro: "4 volta um: 3.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a menos que 3 é qual?",
      opcoes: [opN(2, true), opN(4, false), opN(1, false)],
      feedbackAcerto: "2! Voltando um!",
      feedbackErro: "3, 2 — pra trás.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a menos que 1 é qual?",
      opcoes: [opN(2, false), opN(0, true), opN(1, false)],
      feedbackAcerto: "0! Voltamos pro começo!",
      feedbackErro: "1 volta um: 0 (nada).",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual desses é UM A MENOS que 2?",
      opcoes: [opN(3, false), opN(1, true), opN(0, false)],
      feedbackAcerto: "1! Pra trás um passo!",
      feedbackErro: "2 volta um = 1.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Anda pra trás",
      convite:
        "No caminho: 'Estou no 4, dá UM pulo pra trás'. Criança vai pro 3. Repita começando em 5, 3, 2, 1.",
      dicaAdulto:
        "Subtrair 1 é o inverso da soma; treinar aqui prepara a subtração da Fase 7.",
    },
    {
      tipo: "celebracao",
      medalha: "Dia 3 · Um a menos",
      mascoteUrl: mascote,
      falaFinal: "Pra frente é MAIS, pra trás é MENOS. Amanhã: quem vem ANTES.",
    },
  ],
  baseCientifica: "Contagem regressiva como base da subtração (Fuson).",
};

const dia04: AulaEI = {
  slug: "pip-f4-s1-d4-antes-depois",
  titulo: "Dia 4 · Antes e depois",
  icone: "⏭️",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "No caminho, ANTES é o número atrás. DEPOIS é o número na frente. Vamos ver!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número vem ANTES do 3?",
      opcoes: [opN(4, false), opN(2, true), opN(0, false)],
      feedbackAcerto: "2! Antes = atrás.",
      feedbackErro: "2 vem antes do 3.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual vem DEPOIS do 3?",
      opcoes: [opN(2, false), opN(4, true), opN(5, false)],
      feedbackAcerto: "4! Depois = na frente.",
      feedbackErro: "4 vem depois do 3.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual vem ANTES do 5?",
      opcoes: [opN(4, true), opN(6, false), opN(3, false)],
      feedbackAcerto: "4 vem antes do 5!",
      feedbackErro: "Um passo antes do 5 é o 4.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual vem DEPOIS do 1?",
      opcoes: [opN(0, false), opN(2, true), opN(3, false)],
      feedbackAcerto: "2! Depois do 1!",
      feedbackErro: "1, 2 — o 2 vem depois.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual vem ANTES do 1?",
      opcoes: [opN(2, false), opN(0, true), opN(1, false)],
      feedbackAcerto: "0! Antes do 1 é o zero!",
      feedbackErro: "Antes de 1 tem 0 (nada).",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Perguntas rápidas",
      convite:
        "Enquanto brincam, faça 5 perguntas: 'Qual vem antes do 4?', 'Qual vem depois do 2?'... Criança responde falando.",
      dicaAdulto:
        "Antes/depois exige percorrer a linha mental — habilidade central de Dehaene.",
    },
    {
      tipo: "celebracao",
      medalha: "Dia 4 · Antes e depois",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: MEDALHA da primeira semana!",
    },
  ],
  baseCientifica: "Predecessor/sucessor na linha mental (Dehaene).",
};

const dia05: AulaEI = {
  slug: "pip-f4-s1-d5-medalha-caminhante",
  titulo: "Dia 5 · Medalha Caminhante do 5",
  icone: "🏅",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Prova da semana! Ordem, um a mais, um a menos, antes e depois.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 0 vem qual?",
      opcoes: [opN(2, false), opN(1, true), opN(0, false)],
      feedbackAcerto: "1! Certo!",
      feedbackErro: "0, 1 — 1 vem depois.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a mais que 4 é qual?",
      opcoes: [opN(5, true), opN(3, false), opN(4, false)],
      feedbackAcerto: "5!",
      feedbackErro: "4 mais um = 5.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a menos que 3 é qual?",
      opcoes: [opN(4, false), opN(2, true), opN(1, false)],
      feedbackAcerto: "2!",
      feedbackErro: "3 menos um = 2.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual vem antes do 4?",
      opcoes: [opN(3, true), opN(5, false), opN(2, false)],
      feedbackAcerto: "3!",
      feedbackErro: "Antes de 4 é 3.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual vem depois do 4?",
      opcoes: [opN(3, false), opN(5, true), opN(2, false)],
      feedbackAcerto: "5!",
      feedbackErro: "Depois de 4 é 5.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 5,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Toca e conta em ordem.",
      elogio: "5 no caminho!",
    },
    {
      tipo: "celebracao",
      medalha: "Semana 1 · Caminhante do 5",
      mascoteUrl: mascote,
      falaFinal:
        "MEDALHA CONQUISTADA! Você já domina o caminho de 0 a 5. Semana 2: até o 10!",
    },
  ],
  baseCientifica: "Consolidação semanal (espaçamento — Ebbinghaus).",
};

// ============================================================
// SEMANA 2 · Estendendo o caminho até 10
// ============================================================

const dia06: AulaEI = {
  slug: "pip-f4-s2-d1-de-5-a-10",
  titulo: "Dia 6 · Do 5 ao 10",
  icone: "🔟",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "O caminho continua! Depois do 5 vem: 6, 7, 8, 9 e 10. Vamos andar até o fim!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 10,
      itemSingular: "casa",
      itemPlural: "casas",
      instrucaoAudio: "Toca as 10 casas do caminho grande.",
      elogio: "10! Caminho inteiro!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 5 vem qual?",
      opcoes: [opN(4, false), opN(6, true), opN(7, false)],
      feedbackAcerto: "6! Continua o caminho!",
      feedbackErro: "5, 6 — 6 vem depois.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 7 vem qual?",
      opcoes: [opN(6, false), opN(8, true), opN(9, false)],
      feedbackAcerto: "8!",
      feedbackErro: "7, 8.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 9 vem qual?",
      opcoes: [opN(8, false), opN(10, true), opN(0, false)],
      feedbackAcerto: "10! Fim do caminho!",
      feedbackErro: "9, 10 — o 10 fecha.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número é o FIM do caminho?",
      opcoes: [opN(9, false), opN(10, true), opN(5, false)],
      feedbackAcerto: "10 é o fim!",
      feedbackErro: "O caminho vai até 10.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Caminho grande",
      convite:
        "Estende o caminho no chão de 0 a 10. Criança anda dizendo cada número.",
      dicaAdulto:
        "Movimento + fala + visão simultâneos: multimodal fortalece a memória.",
    },
    {
      tipo: "celebracao",
      medalha: "Dia 6 · Caminho até 10",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: um a mais no caminho grande!",
    },
  ],
  baseCientifica: "Extensão da linha mental até 10 (Griffin).",
};

const dia07: AulaEI = {
  slug: "pip-f4-s2-d2-um-a-mais-ate-10",
  titulo: "Dia 7 · Um a mais até 10",
  icone: "➕",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Um passo pra frente = um a mais. Agora no caminho grande!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a mais que 5?",
      opcoes: [opN(6, true), opN(4, false), opN(7, false)],
      feedbackAcerto: "6!",
      feedbackErro: "5, 6.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a mais que 6?",
      opcoes: [opN(5, false), opN(7, true), opN(8, false)],
      feedbackAcerto: "7!",
      feedbackErro: "6, 7.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a mais que 7?",
      opcoes: [opN(8, true), opN(6, false), opN(9, false)],
      feedbackAcerto: "8!",
      feedbackErro: "7, 8.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a mais que 8?",
      opcoes: [opN(7, false), opN(9, true), opN(10, false)],
      feedbackAcerto: "9!",
      feedbackErro: "8, 9.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a mais que 9?",
      opcoes: [opN(10, true), opN(8, false), opN(0, false)],
      feedbackAcerto: "10! Fim!",
      feedbackErro: "9, 10.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Um pulo",
      convite:
        "'Estou no 7, dá um pulo'. Criança pula pro 8. Faça com 5, 6, 8, 9.",
      dicaAdulto: "Base direta da soma +1 (Fuson).",
    },
    {
      tipo: "celebracao",
      medalha: "Dia 7 · Sucessor até 10",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: um a menos!",
    },
  ],
  baseCientifica: "Sucessor 5-10 (Fuson).",
};

const dia08: AulaEI = {
  slug: "pip-f4-s2-d3-um-a-menos-ate-10",
  titulo: "Dia 8 · Um a menos até 10",
  icone: "➖",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Pra trás um passo. Um a menos!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a menos que 10?",
      opcoes: [opN(9, true), opN(8, false), opN(10, false)],
      feedbackAcerto: "9!",
      feedbackErro: "10, 9.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a menos que 9?",
      opcoes: [opN(10, false), opN(8, true), opN(7, false)],
      feedbackAcerto: "8!",
      feedbackErro: "9, 8.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a menos que 8?",
      opcoes: [opN(9, false), opN(7, true), opN(6, false)],
      feedbackAcerto: "7!",
      feedbackErro: "8, 7.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a menos que 7?",
      opcoes: [opN(6, true), opN(8, false), opN(5, false)],
      feedbackAcerto: "6!",
      feedbackErro: "7, 6.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a menos que 6?",
      opcoes: [opN(5, true), opN(7, false), opN(4, false)],
      feedbackAcerto: "5!",
      feedbackErro: "6, 5.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Pulo pra trás",
      convite:
        "'Estou no 10, pula um pra trás'. Criança pra 9. Repita com 8, 7, 6.",
      dicaAdulto: "Base da subtração -1.",
    },
    {
      tipo: "celebracao",
      medalha: "Dia 8 · Predecessor até 10",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: quem está NO MEIO!",
    },
  ],
  baseCientifica: "Predecessor 5-10.",
};

const dia09: AulaEI = {
  slug: "pip-f4-s2-d4-entre",
  titulo: "Dia 9 · Quem está no meio (entre)",
  icone: "🎯",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "ENTRE dois números é quem está NO MEIO deles. Ex: entre 3 e 5 tem o 4.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número está ENTRE 5 e 7?",
      opcoes: [opN(4, false), opN(6, true), opN(8, false)],
      feedbackAcerto: "6 mora no meio!",
      feedbackErro: "5, 6, 7 — o 6 está no meio.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual está ENTRE 7 e 9?",
      opcoes: [opN(6, false), opN(8, true), opN(10, false)],
      feedbackAcerto: "8!",
      feedbackErro: "7, 8, 9 — o 8.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual está ENTRE 2 e 4?",
      opcoes: [opN(3, true), opN(5, false), opN(1, false)],
      feedbackAcerto: "3!",
      feedbackErro: "2, 3, 4 — o 3.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual está ENTRE 8 e 10?",
      opcoes: [opN(7, false), opN(9, true), opN(10, false)],
      feedbackAcerto: "9!",
      feedbackErro: "8, 9, 10 — o 9.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual está ENTRE 0 e 2?",
      opcoes: [opN(3, false), opN(1, true), opN(2, false)],
      feedbackAcerto: "1! No meio!",
      feedbackErro: "0, 1, 2 — o 1.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Cadê o meio?",
      convite:
        "Fale 2 números com uma casa vazia entre eles. Criança fala qual falta. Ex: '4 e 6? Qual está no meio?'",
      dicaAdulto:
        "'Entre' exige pensar em 3 posições ao mesmo tempo — memória de trabalho + reta mental.",
    },
    {
      tipo: "celebracao",
      medalha: "Dia 9 · Detetive do meio",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: MEDALHA da semana!",
    },
  ],
  baseCientifica: "Interpolação na linha (Griffin, Number Worlds).",
};

const dia10: AulaEI = {
  slug: "pip-f4-s2-d5-medalha-caminhante-10",
  titulo: "Dia 10 · Medalha Caminhante do 10",
  icone: "🏅",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Prova da semana no caminho grande!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a mais que 6?",
      opcoes: [opN(7, true), opN(5, false), opN(8, false)],
      feedbackAcerto: "7!",
      feedbackErro: "6, 7.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Um a menos que 9?",
      opcoes: [opN(10, false), opN(8, true), opN(7, false)],
      feedbackAcerto: "8!",
      feedbackErro: "9, 8.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Entre 6 e 8?",
      opcoes: [opN(5, false), opN(7, true), opN(9, false)],
      feedbackAcerto: "7!",
      feedbackErro: "6, 7, 8.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 10 do nosso caminho tem número?",
      opcoes: [
        { nome: "não, é o fim", imagemUrl: n10, correta: true, quantidade: 1 },
        { nome: "sim, o 0", imagemUrl: n0, correta: false, quantidade: 1 },
        { nome: "sim, o 5", imagemUrl: n5, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "10 é o fim do nosso caminho!",
      feedbackErro: "Por enquanto, 10 é o fim.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 10,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio: "Conta as 10 em ordem.",
      elogio: "10! Perfeito!",
    },
    {
      tipo: "celebracao",
      medalha: "Semana 2 · Caminhante do 10",
      mascoteUrl: mascote,
      falaFinal: "MEDALHA! Caminho completo dominado. Semana 3: antes/depois/entre.",
    },
  ],
  baseCientifica: "Fechamento semanal (espaçamento).",
};

// ============================================================
// SEMANA 3 · Antes, depois, entre (mistura)
// ============================================================

const dia11: AulaEI = {
  slug: "pip-f4-s3-d1-antes-livre",
  titulo: "Dia 11 · ANTES no caminho grande",
  icone: "◀️",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "ANTES = o número que está ATRÁS. Bora treinar!",
    },
    { tipo: "compreensaoImagem", perguntaAudio: "Antes do 7?",
      opcoes: [opN(6, true), opN(8, false), opN(5, false)],
      feedbackAcerto: "6!", feedbackErro: "6 vem antes do 7." },
    { tipo: "compreensaoImagem", perguntaAudio: "Antes do 10?",
      opcoes: [opN(8, false), opN(9, true), opN(10, false)],
      feedbackAcerto: "9!", feedbackErro: "9 vem antes do 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Antes do 6?",
      opcoes: [opN(5, true), opN(7, false), opN(4, false)],
      feedbackAcerto: "5!", feedbackErro: "5 vem antes do 6." },
    { tipo: "compreensaoImagem", perguntaAudio: "Antes do 8?",
      opcoes: [opN(9, false), opN(7, true), opN(6, false)],
      feedbackAcerto: "7!", feedbackErro: "7 vem antes do 8." },
    { tipo: "compreensaoImagem", perguntaAudio: "Antes do 3?",
      opcoes: [opN(2, true), opN(4, false), opN(1, false)],
      feedbackAcerto: "2!", feedbackErro: "2 vem antes do 3." },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Rápido!",
      convite:
        "Faça 10 perguntas 'Antes de X?' bem rápido. Sem contar — direto!",
      dicaAdulto: "Fluência = automatização (Deloache).",
    },
    { tipo: "celebracao", medalha: "Dia 11 · Mestre do ANTES",
      mascoteUrl: mascote, falaFinal: "Amanhã: DEPOIS!" },
  ],
  baseCientifica: "Fluência de predecessor.",
};

const dia12: AulaEI = {
  slug: "pip-f4-s3-d2-depois-livre",
  titulo: "Dia 12 · DEPOIS no caminho grande",
  icone: "▶️",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "DEPOIS = na frente. Treino rápido!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Depois do 5?",
      opcoes: [opN(6, true), opN(4, false), opN(7, false)],
      feedbackAcerto: "6!", feedbackErro: "5, 6." },
    { tipo: "compreensaoImagem", perguntaAudio: "Depois do 7?",
      opcoes: [opN(6, false), opN(8, true), opN(9, false)],
      feedbackAcerto: "8!", feedbackErro: "7, 8." },
    { tipo: "compreensaoImagem", perguntaAudio: "Depois do 8?",
      opcoes: [opN(7, false), opN(9, true), opN(10, false)],
      feedbackAcerto: "9!", feedbackErro: "8, 9." },
    { tipo: "compreensaoImagem", perguntaAudio: "Depois do 2?",
      opcoes: [opN(3, true), opN(1, false), opN(4, false)],
      feedbackAcerto: "3!", feedbackErro: "2, 3." },
    { tipo: "compreensaoImagem", perguntaAudio: "Depois do 0?",
      opcoes: [opN(2, false), opN(1, true), opN(0, false)],
      feedbackAcerto: "1!", feedbackErro: "0, 1." },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Rápido!",
      convite: "10 perguntas 'Depois de X?' sem pausa.",
      dicaAdulto: "Fluência de sucessor.",
    },
    { tipo: "celebracao", medalha: "Dia 12 · Mestre do DEPOIS",
      mascoteUrl: mascote, falaFinal: "Amanhã: ENTRE!" },
  ],
  baseCientifica: "Fluência de sucessor.",
};

const dia13: AulaEI = {
  slug: "pip-f4-s3-d3-entre-livre",
  titulo: "Dia 13 · ENTRE (quem mora no meio)",
  icone: "🎯",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "ENTRE = quem mora no meio. Bora!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Entre 4 e 6?",
      opcoes: [opN(5, true), opN(7, false), opN(3, false)],
      feedbackAcerto: "5!", feedbackErro: "4, 5, 6." },
    { tipo: "compreensaoImagem", perguntaAudio: "Entre 1 e 3?",
      opcoes: [opN(4, false), opN(2, true), opN(0, false)],
      feedbackAcerto: "2!", feedbackErro: "1, 2, 3." },
    { tipo: "compreensaoImagem", perguntaAudio: "Entre 6 e 8?",
      opcoes: [opN(7, true), opN(9, false), opN(5, false)],
      feedbackAcerto: "7!", feedbackErro: "6, 7, 8." },
    { tipo: "compreensaoImagem", perguntaAudio: "Entre 9 e 10 tem número?",
      opcoes: [
        { nome: "não, são vizinhos", imagemUrl: n10, correta: true, quantidade: 1 },
        { nome: "sim, o 5", imagemUrl: n5, correta: false, quantidade: 1 },
        { nome: "sim, o 8", imagemUrl: n8, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "9 e 10 são VIZINHOS — sem número no meio!",
      feedbackErro: "9 e 10 são grudados, não tem ninguém entre." },
    { tipo: "compreensaoImagem", perguntaAudio: "Entre 3 e 5?",
      opcoes: [opN(4, true), opN(2, false), opN(6, false)],
      feedbackAcerto: "4!", feedbackErro: "3, 4, 5." },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Adivinha do meio",
      convite: "Fale 2 números com um vazio. Criança fala o do meio.",
      dicaAdulto: "Reta mental precisa (Dehaene).",
    },
    { tipo: "celebracao", medalha: "Dia 13 · Detetive do meio",
      mascoteUrl: mascote, falaFinal: "Amanhã: comparar POR POSIÇÃO." },
  ],
  baseCientifica: "Interpolação; conceito de vizinhança.",
};

const dia14: AulaEI = {
  slug: "pip-f4-s3-d4-quem-mora-mais-longe",
  titulo: "Dia 14 · Quem está mais LONGE do 0?",
  icone: "📏",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "No caminho, quem está MAIS LONGE do 0 é MAIOR. Quem está PERTO do 0 é MENOR.",
    },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual está mais LONGE do 0: o 3 ou o 8?",
      opcoes: [opN(3, false), opN(8, true)],
      feedbackAcerto: "8! Mais longe = maior!", feedbackErro: "8 está mais longe do 0 — é maior." },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual é MAIOR: 6 ou 4?",
      opcoes: [opN(4, false), opN(6, true)],
      feedbackAcerto: "6! Mais longe do 0!", feedbackErro: "6 está mais à frente que 4." },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual é MENOR: 2 ou 7?",
      opcoes: [opN(2, true), opN(7, false)],
      feedbackAcerto: "2! Perto do 0!", feedbackErro: "2 está mais perto do começo." },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual é MAIOR: 10 ou 5?",
      opcoes: [opN(5, false), opN(10, true)],
      feedbackAcerto: "10! Fim do caminho!", feedbackErro: "10 é o maior — fim do caminho." },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual é MENOR: 0 ou 1?",
      opcoes: [opN(0, true), opN(1, false)],
      feedbackAcerto: "0! Começo, nada.", feedbackErro: "0 é menor que 1." },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Duelo de números",
      convite:
        "Fala 2 números. Criança fala qual é MAIOR. Se ela hesitar, mostra no caminho no chão.",
      dicaAdulto:
        "Ligação POSIÇÃO ↔ MAGNITUDE é o pulo da linha mental (Ramani & Siegler).",
    },
    { tipo: "celebracao", medalha: "Dia 14 · Comparador de posição",
      mascoteUrl: mascote, falaFinal: "Amanhã: MEDALHA da semana!" },
  ],
  baseCientifica: "Posição = magnitude (Dehaene; Siegler).",
};

const dia15: AulaEI = {
  slug: "pip-f4-s3-d5-medalha-viajante",
  titulo: "Dia 15 · Medalha Viajante do Caminho",
  icone: "🏅",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Mistura tudo: antes, depois, entre, maior, menor!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Antes do 5?",
      opcoes: [opN(4, true), opN(6, false), opN(3, false)],
      feedbackAcerto: "4!", feedbackErro: "4 vem antes do 5." },
    { tipo: "compreensaoImagem", perguntaAudio: "Depois do 6?",
      opcoes: [opN(5, false), opN(7, true), opN(8, false)],
      feedbackAcerto: "7!", feedbackErro: "6, 7." },
    { tipo: "compreensaoImagem", perguntaAudio: "Entre 7 e 9?",
      opcoes: [opN(8, true), opN(6, false), opN(10, false)],
      feedbackAcerto: "8!", feedbackErro: "7, 8, 9." },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual é MAIOR: 4 ou 9?",
      opcoes: [opN(4, false), opN(9, true)],
      feedbackAcerto: "9!", feedbackErro: "9 está mais longe do 0." },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual é MENOR: 3 ou 8?",
      opcoes: [opN(3, true), opN(8, false)],
      feedbackAcerto: "3!", feedbackErro: "3 é menor — perto do 0." },
    { tipo: "celebracao", medalha: "Semana 3 · Viajante do Caminho",
      mascoteUrl: mascote,
      falaFinal: "MEDALHA! Semana 4 = A GRANDE CORRIDA DO PIP + DIPLOMA!" },
  ],
  baseCientifica: "Consolidação semanal (recuperação espaçada).",
};

// ============================================================
// SEMANA 4 · Grande Corrida do Pip + DIPLOMA
// ============================================================

const dia16: AulaEI = {
  slug: "pip-f4-s4-d1-corrida-parte1",
  titulo: "Dia 16 · A Grande Corrida — largada",
  icone: "🏁",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "GRANDE CORRIDA DO PIP! Tabuleiro de 0 a 10. Cada pergunta certa, Pip anda uma casa!",
    },
    { tipo: "compreensaoImagem", perguntaAudio: "Casa 1: qual vem depois do 0?",
      opcoes: [opN(1, true), opN(2, false), opN(0, false)],
      feedbackAcerto: "Pip andou pra casa 1!", feedbackErro: "0, 1." },
    { tipo: "compreensaoImagem", perguntaAudio: "Casa 2: qual vem depois do 1?",
      opcoes: [opN(3, false), opN(2, true), opN(0, false)],
      feedbackAcerto: "Casa 2!", feedbackErro: "1, 2." },
    { tipo: "compreensaoImagem", perguntaAudio: "Casa 3: um a mais que 2?",
      opcoes: [opN(3, true), opN(1, false), opN(4, false)],
      feedbackAcerto: "Casa 3!", feedbackErro: "2, 3." },
    { tipo: "compreensaoImagem", perguntaAudio: "Casa 4: entre 3 e 5?",
      opcoes: [opN(4, true), opN(2, false), opN(6, false)],
      feedbackAcerto: "Casa 4!", feedbackErro: "3, 4, 5." },
    { tipo: "compreensaoImagem", perguntaAudio: "Casa 5: um a menos que 6?",
      opcoes: [opN(4, false), opN(5, true), opN(7, false)],
      feedbackAcerto: "METADE DO CAMINHO! Casa 5!", feedbackErro: "6, 5." },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Corrida em casa",
      convite:
        "Faça um tabuleirinho 0-10. Um dado (ou moeda: cara=1, coroa=2). Cada rodada a criança anda e fala em qual número está.",
      dicaAdulto:
        "Jogo linear de tabuleiro comprovadamente melhora senso numérico (Ramani & Siegler 2008).",
    },
    { tipo: "celebracao", medalha: "Dia 16 · Metade da corrida",
      mascoteUrl: mascote, falaFinal: "Amanhã: chegada!" },
  ],
  baseCientifica: "Great Race (Ramani & Siegler 2008).",
};

const dia17: AulaEI = {
  slug: "pip-f4-s4-d2-corrida-parte2",
  titulo: "Dia 17 · A Grande Corrida — chegada",
  icone: "🏁",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Pip está no 5. Vamos até o 10!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Casa 6: um a mais que 5?",
      opcoes: [opN(6, true), opN(4, false), opN(7, false)],
      feedbackAcerto: "Casa 6!", feedbackErro: "5, 6." },
    { tipo: "compreensaoImagem", perguntaAudio: "Casa 7: depois do 6?",
      opcoes: [opN(8, false), opN(7, true), opN(5, false)],
      feedbackAcerto: "Casa 7!", feedbackErro: "6, 7." },
    { tipo: "compreensaoImagem", perguntaAudio: "Casa 8: entre 7 e 9?",
      opcoes: [opN(8, true), opN(6, false), opN(10, false)],
      feedbackAcerto: "Casa 8!", feedbackErro: "7, 8, 9." },
    { tipo: "compreensaoImagem", perguntaAudio: "Casa 9: um a menos que 10?",
      opcoes: [opN(8, false), opN(9, true), opN(10, false)],
      feedbackAcerto: "Casa 9!", feedbackErro: "10, 9." },
    { tipo: "compreensaoImagem", perguntaAudio: "Casa 10 — CHEGADA! Depois do 9?",
      opcoes: [opN(10, true), opN(0, false), opN(8, false)],
      feedbackAcerto: "CHEGOU! Pip venceu a corrida!", feedbackErro: "9, 10." },
    { tipo: "celebracao", medalha: "Dia 17 · Vencedor da corrida",
      mascoteUrl: mascote, falaFinal: "Amanhã: PROVA GERAL!" },
  ],
  baseCientifica: "Great Race — chegada.",
};

const dia18: AulaEI = {
  slug: "pip-f4-s4-d3-prova-geral",
  titulo: "Dia 18 · Prova geral do caminho",
  icone: "📝",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Prova geral! Antes, depois, entre, maior, menor." },
    { tipo: "compreensaoImagem", perguntaAudio: "Antes do 8?",
      opcoes: [opN(7, true), opN(9, false), opN(6, false)],
      feedbackAcerto: "7!", feedbackErro: "7 vem antes." },
    { tipo: "compreensaoImagem", perguntaAudio: "Depois do 3?",
      opcoes: [opN(2, false), opN(4, true), opN(5, false)],
      feedbackAcerto: "4!", feedbackErro: "3, 4." },
    { tipo: "compreensaoImagem", perguntaAudio: "Entre 5 e 7?",
      opcoes: [opN(6, true), opN(8, false), opN(4, false)],
      feedbackAcerto: "6!", feedbackErro: "5, 6, 7." },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual é MAIOR: 7 ou 2?",
      opcoes: [opN(2, false), opN(7, true)],
      feedbackAcerto: "7!", feedbackErro: "7 está mais longe do 0." },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual é MENOR: 9 ou 4?",
      opcoes: [opN(4, true), opN(9, false)],
      feedbackAcerto: "4!", feedbackErro: "4 está mais perto do 0." },
    { tipo: "compreensaoImagem", perguntaAudio: "Um a mais que 9?",
      opcoes: [opN(8, false), opN(10, true), opN(0, false)],
      feedbackAcerto: "10!", feedbackErro: "9, 10." },
    { tipo: "celebracao", medalha: "Dia 18 · Prova completa",
      mascoteUrl: mascote, falaFinal: "Amanhã: festa!" },
  ],
  baseCientifica: "Avaliação integrada.",
};

const dia19: AulaEI = {
  slug: "pip-f4-s4-d4-festa-caminho",
  titulo: "Dia 19 · Festa no caminho",
  icone: "🎉",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "É FESTA! Pip pôs balões em cada casa do caminho. Vamos contar e ordenar!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: balao,
      quantidade: 10,
      itemSingular: "balão",
      itemPlural: "balões",
      instrucaoAudio: "Toca cada balão e diz o número da casa.",
      elogio: "10 casas, 10 balões!",
    },
    { tipo: "compreensaoImagem", perguntaAudio: "Antes do 6?",
      opcoes: [opN(5, true), opN(7, false), opN(4, false)],
      feedbackAcerto: "5!", feedbackErro: "5 antes do 6." },
    { tipo: "compreensaoImagem", perguntaAudio: "Depois do 8?",
      opcoes: [opN(9, true), opN(7, false), opN(10, false)],
      feedbackAcerto: "9!", feedbackErro: "8, 9." },
    { tipo: "compreensaoImagem", perguntaAudio: "Entre 2 e 4?",
      opcoes: [opN(3, true), opN(5, false), opN(1, false)],
      feedbackAcerto: "3!", feedbackErro: "2, 3, 4." },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual é MAIOR: 10 ou 8?",
      opcoes: [opN(8, false), opN(10, true)],
      feedbackAcerto: "10!", feedbackErro: "10 é o fim do caminho." },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Ensaio do diploma",
      convite:
        "Peça pra criança recitar 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 em voz alta, apontando no caminho.",
      dicaAdulto: "Preparação para a formatura de amanhã.",
    },
    { tipo: "celebracao", medalha: "Dia 19 · Ensaio da formatura",
      mascoteUrl: mascote, falaFinal: "AMANHÃ: DIPLOMA!" },
  ],
  baseCientifica: "Consolidação com contexto festivo.",
};

const dia20: AulaEI = {
  slug: "pip-f4-s4-d5-diploma-caminho",
  titulo: "Dia 20 · DIPLOMA · Viajante do Caminho (0–10)",
  icone: "🎓",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "DIA DO DIPLOMA! Prova final da Fase 4. Você vai virar VIAJANTE DO CAMINHO!",
    },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 1: antes do 4?",
      opcoes: [opN(3, true), opN(5, false), opN(2, false)],
      feedbackAcerto: "3!", feedbackErro: "3 antes do 4." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 2: depois do 7?",
      opcoes: [opN(6, false), opN(8, true), opN(9, false)],
      feedbackAcerto: "8!", feedbackErro: "7, 8." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 3: entre 8 e 10?",
      opcoes: [opN(9, true), opN(7, false), opN(10, false)],
      feedbackAcerto: "9!", feedbackErro: "8, 9, 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 4: um a mais que 6?",
      opcoes: [opN(5, false), opN(7, true), opN(8, false)],
      feedbackAcerto: "7!", feedbackErro: "6, 7." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 5: um a menos que 4?",
      opcoes: [opN(3, true), opN(5, false), opN(2, false)],
      feedbackAcerto: "3!", feedbackErro: "4, 3." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 6: qual é MAIOR: 5 ou 9?",
      opcoes: [opN(5, false), opN(9, true)],
      feedbackAcerto: "9!", feedbackErro: "9 está mais longe do 0." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova final: qual TERMINA nosso caminho?",
      opcoes: [opN(0, false), opN(10, true), opN(9, false)],
      feedbackAcerto: "10! Fim do caminho!", feedbackErro: "O 10 fecha o caminho." },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Cerimônia do diploma",
      convite:
        "Mostre o diploma pra família. Peça pra criança recitar 0-10 e depois 10-0. Aplauda!",
      dicaAdulto:
        "Cerimônia reforça autoconfiança (Dweck). Fase 5 (ten-frame) libera na sequência.",
    },
    {
      tipo: "celebracao",
      medalha: "DIPLOMA · Viajante do Caminho (0-10)",
      mascoteUrl: mascote,
      falaFinal:
        "DIPLOMA CONQUISTADO! Você é oficialmente VIAJANTE DO CAMINHO DOS NÚMEROS!",
    },
  ],
  baseCientifica: "Cerimônia de fechamento Fase 4.",
};

// ============================================================
// CURSO
// ============================================================

export const cursoContarComPipFase4: CursoEI = {
  slug: "contar-com-pip-f4",
  serie: "pre2",
  serieLabel: "Contar com Pip · Fase 4",
  titulo: "Fase 4 · Linha Numérica Mental (0 a 10)",
  descricao:
    "O caminho dos números: andar pra frente, pra trás, saber quem vem antes, depois, entre — e ver que quem está mais longe do 0 é maior.",
  corPrimaria: "#f59e0b",
  corSecundaria: "#7c2d12",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "pip-f4-s1",
      numero: 1,
      titulo: "Semana 1 · Caminhante do 5",
      subtitulo: "O caminho de 0 a 5, um a mais, um a menos",
      aulas: [dia01, dia02, dia03, dia04, dia05],
    },
    {
      slug: "pip-f4-s2",
      numero: 2,
      titulo: "Semana 2 · Caminhante do 10",
      subtitulo: "Estendendo o caminho até 10 + 'entre'",
      aulas: [dia06, dia07, dia08, dia09, dia10],
    },
    {
      slug: "pip-f4-s3",
      numero: 3,
      titulo: "Semana 3 · Viajante do Caminho",
      subtitulo: "Antes, depois, entre e comparar por posição",
      aulas: [dia11, dia12, dia13, dia14, dia15],
    },
    {
      slug: "pip-f4-s4",
      numero: 4,
      titulo: "Semana 4 · Grande Corrida do Pip (DIPLOMA)",
      subtitulo: "Corrida de tabuleiro 0-10 e diploma da Fase 4",
      aulas: [dia16, dia17, dia18, dia19, dia20],
    },
  ],
};

export function getAulaContarComPipFase4(slug: string): AulaEI | undefined {
  for (const u of cursoContarComPipFase4.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
