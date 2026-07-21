import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as doce } from "@/assets/neuro-treino/objetos/doce.png.asset.json";
import { url as uva } from "@/assets/neuro-treino/frutas/uva.png.asset.json";

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

import { url as pipMascot } from "@/assets/pip-girl-mascot.png.asset.json";

/**
 * Contar com Pip — FASE 7 · Soma e Subtração Visual até 10
 * ---------------------------------------------------------
 * Método CPA (Concreto → Pictórico → Abstrato · Bruner / Singapura).
 * Cada operação é ANIMADA um-a-um pelo OperacaoVisual:
 *  • Soma: aparece cada item do grupo A, depois cada do grupo B, depois
 *    conta tudo até o resultado.
 *  • Subtração: aparece o total, e cada item que "vai embora" some
 *    contando 1, 2, 3…
 *
 * Semana 1 · Soma até 5  (juntar pequenas quantidades)
 * Semana 2 · Soma até 10 (âncora no 5 + comutativa)
 * Semana 3 · Subtração até 10 (tirar de)
 * Semana 4 · Mestre · DIPLOMA (soma + subtração misturadas)
 */

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

// ------------- Helpers ---------------------------------------------------

function soma(
  a: number, b: number, item: string, img: string,
  instrucao: string, elogio: string,
): AulaEI["momentos"][number] {
  return {
    tipo: "operacaoVisual",
    operacao: "soma",
    imagemUrl: img,
    itemPlural: item,
    a, b,
    instrucaoAudio: instrucao,
    elogio,
  };
}

function subtracao(
  a: number, b: number, item: string, img: string,
  instrucao: string, elogio: string,
): AulaEI["momentos"][number] {
  return {
    tipo: "operacaoVisual",
    operacao: "subtracao",
    imagemUrl: img,
    itemPlural: item,
    a, b,
    instrucaoAudio: instrucao,
    elogio,
  };
}

function quiz(pergunta: string, correta: number, distratores: number[], feedbackAcerto: string, feedbackErro: string): AulaEI["momentos"][number] {
  const opcoes = [opN(correta, true), ...distratores.map((d) => opN(d, false))];
  // embaralhar levemente (fixo p/ estabilidade)
  return {
    tipo: "compreensaoImagem",
    perguntaAudio: pergunta,
    opcoes,
    feedbackAcerto,
    feedbackErro,
  };
}

// ============================================================
// SEMANA 1 · SOMA ATÉ 5
// ============================================================

const dia01: AulaEI = {
  slug: "pip-f7-s1-d1-juntar-1-mais-1",
  titulo: "Dia 1 · 1 + 1 · Juntar é somar",
  icone: "➕",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Fase 7! Agora a gente JUNTA grupos. Quando junta, o total cresce. Vem ver!" },
    soma(1, 1, "bolas", bola, "Olha: 1 bola. Depois mais 1 bola. Quantas ficaram?", "1 + 1 = 2!"),
    soma(2, 1, "flores", flor, "2 flores… mais 1 flor.", "2 + 1 = 3!"),
    soma(1, 2, "estrelas", estrela, "1 estrela… mais 2.", "1 + 2 = 3! A ordem não muda o total."),
    quiz("Quanto é 1 + 1?", 2, [1, 3], "2!", "1 + 1 = 2."),
    quiz("Quanto é 2 + 1?", 3, [2, 4], "3!", "2 + 1 = 3."),
    quiz("Quanto é 1 + 2?", 3, [2, 4], "3! Deu igual ao de cima.", "1 + 2 = 3 também."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Junte 1 + 1",
      convite: "Pegue 1 uva e depois mais 1. Pergunte: 'quantas ficaram?'",
      dicaAdulto: "Deixe a criança contar tocando em cada uva." },
    { tipo: "celebracao", medalha: "Somador Iniciante", mascoteUrl: mascote,
      falaFinal: "Você juntou grupos! Isso é SOMAR." },
  ],
  baseCientifica: "CPA + comutativa informal (Bruner; Van de Walle).",
};

const dia02: AulaEI = {
  slug: "pip-f7-s1-d2-somar-ate-4",
  titulo: "Dia 2 · Somando até 4",
  icone: "➕",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Hoje somamos até 4. Fique de olho: os grupos aparecem um a um." },
    soma(2, 2, "maçãs", maca, "2 maçãs + 2 maçãs.", "4!"),
    soma(3, 1, "balões", balao, "3 balões + 1.", "4!"),
    soma(1, 3, "joaninhas", joaninha, "1 + 3.", "4! Mesma resposta."),
    quiz("Quanto é 2 + 2?", 4, [3, 5], "4!", "2 + 2 = 4."),
    quiz("Quanto é 3 + 1?", 4, [3, 5], "4!", "3 + 1 = 4."),
    quiz("Quanto é 1 + 3?", 4, [2, 5], "4! Igualzinho ao 3 + 1.", "1 + 3 = 4."),
    { tipo: "missaoFamilia", titulo: "Missão Família · 4 pedacinhos",
      convite: "Coloque 2 pedaços de fruta num prato e mais 2. Quantos?",
      dicaAdulto: "Peça pra criança dizer a conta em voz alta: 2 mais 2 é 4." },
    { tipo: "celebracao", medalha: "Somador do 4", mascoteUrl: mascote,
      falaFinal: "4 é seu! Vamos ao 5." },
  ],
  baseCientifica: "Ancoragem em pares (2+2, 3+1).",
};

const dia03: AulaEI = {
  slug: "pip-f7-s1-d3-somar-ate-5",
  titulo: "Dia 3 · Somando até 5",
  icone: "🖐️",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "5 é a mão inteira! Vamos formar o 5 juntando grupos." },
    soma(4, 1, "doces", doce, "4 doces + 1.", "5!"),
    soma(3, 2, "uvas", uva, "3 uvas + 2.", "5!"),
    soma(2, 3, "estrelas", estrela, "2 + 3.", "5 também."),
    soma(1, 4, "bolas", bola, "1 + 4.", "5! Todos formam 5."),
    quiz("Quanto é 4 + 1?", 5, [4, 6], "5!", "4 + 1 = 5."),
    quiz("Quanto é 3 + 2?", 5, [4, 6], "5!", "3 + 2 = 5."),
    quiz("Quanto é 2 + 3?", 5, [4, 6], "5! Ordem trocada, resultado igual.", "2 + 3 = 5."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Mão do 5",
      convite: "Mostre 3 dedos numa mão e 2 na outra. Peça pra criança contar tudo.",
      dicaAdulto: "Repita com 4+1 e 1+4. Todos dão 5." },
    { tipo: "celebracao", medalha: "Amigos do 5", mascoteUrl: mascote,
      falaFinal: "Você conhece os amigos do 5!" },
  ],
  baseCientifica: "Amigos do 5 (número-base, Ten-frame linkage).",
};

const dia04: AulaEI = {
  slug: "pip-f7-s1-d4-comutativa",
  titulo: "Dia 4 · Trocar a ordem, resultado igual",
  icone: "🔁",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Descoberta! Trocar a ordem NÃO muda o total. 2+3 é o mesmo que 3+2." },
    soma(2, 3, "maçãs", maca, "2 + 3…", "5."),
    soma(3, 2, "maçãs", maca, "Agora 3 + 2.", "5! O mesmo!"),
    soma(1, 4, "flores", flor, "1 + 4…", "5."),
    soma(4, 1, "flores", flor, "4 + 1.", "5! Deu igual."),
    quiz("Se 2 + 3 = 5, quanto é 3 + 2?", 5, [4, 6], "5! Trocou a ordem, resultado igual.", "3 + 2 = 5."),
    quiz("Se 1 + 4 = 5, quanto é 4 + 1?", 5, [3, 6], "5!", "4 + 1 = 5."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Vira o prato",
      convite: "Coloque 2 uvas de um lado e 3 do outro. Depois vire o prato.",
      dicaAdulto: "Mostre que continua 5 uvas. Ordem não muda o total." },
    { tipo: "celebracao", medalha: "Trocador de Ordem", mascoteUrl: mascote,
      falaFinal: "Trocou, deu igual — comutativa!" },
  ],
  baseCientifica: "Propriedade comutativa da soma (informal).",
};

const dia05: AulaEI = {
  slug: "pip-f7-s1-d5-revisao-semana1",
  titulo: "Dia 5 · Medalha: Somador do 5",
  icone: "🏅",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Semana 1 fechando! Vamos provar que você domina o 5." },
    soma(2, 2, "bolas", bola, "Prova 1: 2 + 2.", "4."),
    soma(3, 2, "flores", flor, "Prova 2: 3 + 2.", "5."),
    soma(4, 1, "estrelas", estrela, "Prova 3: 4 + 1.", "5."),
    quiz("2 + 2?", 4, [3, 5], "4.", "2 + 2 = 4."),
    quiz("3 + 2?", 5, [4, 6], "5.", "3 + 2 = 5."),
    quiz("1 + 4?", 5, [3, 6], "5.", "1 + 4 = 5."),
    quiz("Se 3 + 2 = 5, quanto é 2 + 3?", 5, [4, 6], "5! Comutativa.", "2 + 3 = 5."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Cerimônia da medalha",
      convite: "Aplauda! A criança ganhou a medalha 'Somador do 5'.",
      dicaAdulto: "Semana 2 sobe para até 10." },
    { tipo: "celebracao", medalha: "MEDALHA · Somador do 5", mascoteUrl: mascote,
      falaFinal: "MEDALHA CONQUISTADA! Você é Somador do 5!" },
  ],
  baseCientifica: "Fechamento semana 1.",
};

// ============================================================
// SEMANA 2 · SOMA ATÉ 10 (âncora em 5 + comutativa)
// ============================================================

const dia06: AulaEI = {
  slug: "pip-f7-s2-d1-cinco-mais-x",
  titulo: "Dia 6 · 5 + alguma coisa",
  icone: "🔟",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "5 é âncora! Se somamos 5 + 1, é só continuar contando: seis!" },
    soma(5, 1, "doces", doce, "5 doces + 1.", "6!"),
    soma(5, 2, "uvas", uva, "5 + 2.", "7!"),
    soma(5, 3, "bolas", bola, "5 + 3.", "8!"),
    quiz("5 + 1?", 6, [5, 7], "6!", "5 + 1 = 6."),
    quiz("5 + 2?", 7, [6, 8], "7!", "5 + 2 = 7."),
    quiz("5 + 3?", 8, [7, 9], "8!", "5 + 3 = 8."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Mão + dedinhos",
      convite: "Mostre 5 dedos numa mão. Levante 2 na outra. Quantos ao todo?",
      dicaAdulto: "Fixe: 5 + 2 = 7. Repita com 5 + 3." },
    { tipo: "celebracao", medalha: "Amigo do 5+", mascoteUrl: mascote,
      falaFinal: "Você usou o 5 como âncora!" },
  ],
  baseCientifica: "Anchor 5 (Van de Walle, ten-frame).",
};

const dia07: AulaEI = {
  slug: "pip-f7-s2-d2-cinco-mais-cinco",
  titulo: "Dia 7 · 5 + 5 = 10",
  icone: "🖐️🖐️",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Duas mãos! 5 dedos numa, 5 na outra. Deu 10!" },
    soma(5, 5, "estrelas", estrela, "5 + 5.", "10! Quadro do 10 cheio."),
    soma(5, 4, "flores", flor, "5 + 4.", "9. Faltou 1 pra 10."),
    soma(4, 5, "maçãs", maca, "4 + 5 (troca de ordem).", "9! Deu o mesmo."),
    quiz("5 + 5?", 10, [9, 8], "10! Duas mãos.", "5 + 5 = 10."),
    quiz("5 + 4?", 9, [10, 8], "9.", "5 + 4 = 9."),
    quiz("4 + 5?", 9, [8, 10], "9! Igual ao 5+4.", "4 + 5 = 9."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Duas mãos",
      convite: "Peça pra criança abrir as duas mãos. Contem juntos: 10 dedos.",
      dicaAdulto: "Depois esconda 1 dedo: 9. E 1 dedo faltou pra 10." },
    { tipo: "celebracao", medalha: "Duas Mãos = 10", mascoteUrl: mascote,
      falaFinal: "10 é o par das mãos!" },
  ],
  baseCientifica: "Dobras (doubles): 5+5 como fato-âncora.",
};

const dia08: AulaEI = {
  slug: "pip-f7-s2-d3-dobras",
  titulo: "Dia 8 · Dobras: 2+2, 3+3, 4+4",
  icone: "👯",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Dobras! Quando os dois grupos são iguais. Fáceis de lembrar!" },
    soma(2, 2, "bolas", bola, "2 + 2 (dobra do 2).", "4."),
    soma(3, 3, "uvas", uva, "3 + 3 (dobra do 3).", "6."),
    soma(4, 4, "doces", doce, "4 + 4 (dobra do 4).", "8."),
    soma(5, 5, "estrelas", estrela, "5 + 5.", "10."),
    quiz("2 + 2?", 4, [3, 5], "4.", "Dobra do 2 = 4."),
    quiz("3 + 3?", 6, [5, 7], "6.", "Dobra do 3 = 6."),
    quiz("4 + 4?", 8, [7, 9], "8.", "Dobra do 4 = 8."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Dobra na cozinha",
      convite: "Ponha 3 pedaços num prato e 3 no outro. Quantos ao todo?",
      dicaAdulto: "Repita com 4+4 e 2+2. Fixe as dobras." },
    { tipo: "celebracao", medalha: "Dobrador", mascoteUrl: mascote,
      falaFinal: "Dobras estão na sua memória!" },
  ],
  baseCientifica: "Doubles (fatos-âncora · Baroody).",
};

const dia09: AulaEI = {
  slug: "pip-f7-s2-d4-somar-ate-10",
  titulo: "Dia 9 · Somando até 10",
  icone: "🔟",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Semana 2 no fim. Vamos somar até 10 usando o quadro do 10." },
    soma(6, 2, "joaninhas", joaninha, "6 + 2.", "8."),
    soma(7, 3, "balões", balao, "7 + 3.", "10! Faltavam 3 pra 10, e chegou."),
    soma(4, 6, "flores", flor, "4 + 6.", "10! Amigos do 10."),
    quiz("6 + 2?", 8, [7, 9], "8.", "6 + 2 = 8."),
    quiz("7 + 3?", 10, [9, 8], "10! Amigos do 10.", "7 + 3 = 10."),
    quiz("4 + 6?", 10, [9, 8], "10!", "4 + 6 = 10."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Amigos do 10",
      convite: "Peça 4 uvas. Pergunte: 'quantas faltam pra 10?'",
      dicaAdulto: "Complete até 10. Amigos: 1+9, 2+8, 3+7, 4+6, 5+5." },
    { tipo: "celebracao", medalha: "Somador do 10", mascoteUrl: mascote,
      falaFinal: "Amigos do 10 no bolso!" },
  ],
  baseCientifica: "Amigos do 10 (fact fluency · Boaler).",
};

const dia10: AulaEI = {
  slug: "pip-f7-s2-d5-revisao-semana2",
  titulo: "Dia 10 · Medalha: Somador do 10",
  icone: "🏅",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Fim da semana 2. Prova de que você soma até 10!" },
    soma(5, 3, "doces", doce, "Prova 1.", "8."),
    soma(6, 4, "uvas", uva, "Prova 2.", "10."),
    soma(3, 3, "bolas", bola, "Prova 3.", "6."),
    quiz("5 + 5?", 10, [9, 8], "10!", "5 + 5 = 10."),
    quiz("6 + 4?", 10, [9, 8], "10!", "6 + 4 = 10."),
    quiz("3 + 3?", 6, [5, 7], "6!", "3 + 3 = 6."),
    quiz("7 + 2?", 9, [10, 8], "9.", "7 + 2 = 9."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Cerimônia",
      convite: "Aplauda! A criança conquistou 'Somador do 10'.",
      dicaAdulto: "Semana 3 começa subtração." },
    { tipo: "celebracao", medalha: "MEDALHA · Somador do 10", mascoteUrl: mascote,
      falaFinal: "MEDALHA! Você soma até 10!" },
  ],
  baseCientifica: "Fechamento semana 2.",
};

// ============================================================
// SEMANA 3 · SUBTRAÇÃO ATÉ 10 (tirar de)
// ============================================================

const dia11: AulaEI = {
  slug: "pip-f7-s3-d1-tirar-um",
  titulo: "Dia 11 · Tirar 1: subtração começa",
  icone: "➖",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Agora vamos TIRAR. Quando tira, o total diminui. Olha só!" },
    subtracao(3, 1, "bolas", bola, "Tinha 3 bolas. Tirou 1.", "Ficaram 2!"),
    subtracao(4, 1, "flores", flor, "4 flores. Tirou 1.", "3."),
    subtracao(5, 1, "estrelas", estrela, "5 estrelas. Tirou 1.", "4."),
    quiz("3 - 1?", 2, [3, 1], "2!", "3 tira 1 = 2."),
    quiz("4 - 1?", 3, [4, 2], "3!", "4 tira 1 = 3."),
    quiz("5 - 1?", 4, [3, 5], "4!", "5 tira 1 = 4."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Comeu 1",
      convite: "Ponha 4 uvas no prato. Coma 1 na frente dela. Quantas ficaram?",
      dicaAdulto: "Deixe contar sozinha. Repita: '4 tira 1 é 3'." },
    { tipo: "celebracao", medalha: "Tirou Um", mascoteUrl: mascote,
      falaFinal: "Você entendeu: tirar diminui!" },
  ],
  baseCientifica: "Take-away (subtração canônica).",
};

const dia12: AulaEI = {
  slug: "pip-f7-s3-d2-tirar-dois",
  titulo: "Dia 12 · Tirar 2",
  icone: "➖",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Agora tira 2 de uma vez. Vem ver a mágica!" },
    subtracao(5, 2, "uvas", uva, "5 uvas. Tirou 2.", "3."),
    subtracao(6, 2, "doces", doce, "6 doces. Tirou 2.", "4."),
    subtracao(4, 2, "maçãs", maca, "4. Tirou 2.", "2."),
    quiz("5 - 2?", 3, [4, 2], "3!", "5 - 2 = 3."),
    quiz("6 - 2?", 4, [5, 3], "4!", "6 - 2 = 4."),
    quiz("4 - 2?", 2, [3, 1], "2! Dobra ao contrário.", "4 - 2 = 2."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Levou 2",
      convite: "6 uvas no prato. Diga: 'levei 2 pra mim'. Quantas ficaram?",
      dicaAdulto: "Repita com 5 - 2 e 4 - 2." },
    { tipo: "celebracao", medalha: "Tirou Dois", mascoteUrl: mascote,
      falaFinal: "Tirar 2 é fácil pra você!" },
  ],
  baseCientifica: "Subtração progressiva.",
};

const dia13: AulaEI = {
  slug: "pip-f7-s3-d3-tirar-metade",
  titulo: "Dia 13 · Tirar a metade",
  icone: "½",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Se tem 6 e tira 3, sobra 3. É a metade! Bora ver." },
    subtracao(6, 3, "bolas", bola, "6 - 3.", "3."),
    subtracao(8, 4, "flores", flor, "8 - 4.", "4."),
    subtracao(10, 5, "estrelas", estrela, "10 - 5.", "5."),
    quiz("6 - 3?", 3, [4, 2], "3! Metade.", "6 - 3 = 3."),
    quiz("8 - 4?", 4, [5, 3], "4! Metade.", "8 - 4 = 4."),
    quiz("10 - 5?", 5, [6, 4], "5! Metade.", "10 - 5 = 5."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Dividir na metade",
      convite: "Ponha 6 uvas. Peça pra criança dar metade pra você.",
      dicaAdulto: "Cada um fica com 3. Metade do 6 é 3." },
    { tipo: "celebracao", medalha: "Metade", mascoteUrl: mascote,
      falaFinal: "Metade — dividiu certo!" },
  ],
  baseCientifica: "Halving (fato-âncora).",
};

const dia14: AulaEI = {
  slug: "pip-f7-s3-d4-subtrair-ate-10",
  titulo: "Dia 14 · Subtraindo até 10",
  icone: "🔟",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Vamos misturar tudo! Subtrações até 10." },
    subtracao(9, 3, "joaninhas", joaninha, "9 - 3.", "6."),
    subtracao(10, 4, "balões", balao, "10 - 4.", "6."),
    subtracao(7, 5, "doces", doce, "7 - 5.", "2."),
    quiz("9 - 3?", 6, [7, 5], "6!", "9 - 3 = 6."),
    quiz("10 - 4?", 6, [5, 7], "6!", "10 - 4 = 6."),
    quiz("7 - 5?", 2, [3, 1], "2!", "7 - 5 = 2."),
    quiz("10 - 3?", 7, [6, 8], "7!", "10 - 3 = 7."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Quantos sobraram?",
      convite: "10 uvas no prato. Peça pra criança comer 4. Quantas sobraram?",
      dicaAdulto: "Modele: 10 tira 4 é 6." },
    { tipo: "celebracao", medalha: "Subtrator", mascoteUrl: mascote,
      falaFinal: "Você subtrai até 10!" },
  ],
  baseCientifica: "Subtração até 10 (CPA).",
};

const dia15: AulaEI = {
  slug: "pip-f7-s3-d5-revisao-semana3",
  titulo: "Dia 15 · Medalha: Subtrator",
  icone: "🏅",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Semana 3 no fim! Prova de subtração." },
    subtracao(5, 2, "bolas", bola, "Prova 1.", "3."),
    subtracao(8, 3, "uvas", uva, "Prova 2.", "5."),
    subtracao(10, 6, "flores", flor, "Prova 3.", "4."),
    quiz("5 - 2?", 3, [4, 2], "3.", "5 - 2 = 3."),
    quiz("8 - 3?", 5, [6, 4], "5.", "8 - 3 = 5."),
    quiz("10 - 6?", 4, [5, 3], "4.", "10 - 6 = 4."),
    quiz("7 - 4?", 3, [4, 2], "3.", "7 - 4 = 3."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Cerimônia",
      convite: "Aplauda! Medalha de Subtrator conquistada.",
      dicaAdulto: "Semana 4: soma e subtração juntas + DIPLOMA." },
    { tipo: "celebracao", medalha: "MEDALHA · Subtrator", mascoteUrl: mascote,
      falaFinal: "MEDALHA! Você subtrai até 10!" },
  ],
  baseCientifica: "Fechamento semana 3.",
};

// ============================================================
// SEMANA 4 · MESTRE (soma + subtração misturadas) · DIPLOMA
// ============================================================

const dia16: AulaEI = {
  slug: "pip-f7-s4-d1-misturando",
  titulo: "Dia 16 · Misturando + e -",
  icone: "🔀",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Reta final! Vamos misturar somar e tirar." },
    soma(3, 4, "doces", doce, "3 + 4.", "7."),
    subtracao(7, 3, "doces", doce, "7 - 3 (a conta ao contrário).", "4."),
    soma(2, 5, "uvas", uva, "2 + 5.", "7."),
    subtracao(7, 5, "uvas", uva, "7 - 5.", "2."),
    quiz("3 + 4?", 7, [6, 8], "7!", "3 + 4 = 7."),
    quiz("7 - 3?", 4, [3, 5], "4!", "7 - 3 = 4."),
    quiz("2 + 5?", 7, [6, 8], "7!", "2 + 5 = 7."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Vai e volta",
      convite: "3 uvas + 4 uvas = 7. Coma 3, sobram 4. Mostre a família de fatos.",
      dicaAdulto: "3+4=7, 4+3=7, 7-3=4, 7-4=3. Uma família só." },
    { tipo: "celebracao", medalha: "Família de Fatos", mascoteUrl: mascote,
      falaFinal: "Uma família, quatro contas!" },
  ],
  baseCientifica: "Fact families (Van de Walle).",
};

const dia17: AulaEI = {
  slug: "pip-f7-s4-d2-problemas-visuais",
  titulo: "Dia 17 · Problemas em cena",
  icone: "🎬",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Situações reais: Pip tinha X, ganhou Y. Ou tinha X, perdeu Y." },
    soma(4, 3, "balões", balao, "Pip tinha 4 balões. Ganhou 3.", "7 balões!"),
    subtracao(8, 2, "flores", flor, "Pip tinha 8 flores. Deu 2 pra amiga.", "6."),
    soma(6, 4, "estrelas", estrela, "Pip viu 6 estrelas. Depois mais 4.", "10."),
    quiz("Pip tinha 4, ganhou 3. Ficou com?", 7, [6, 8], "7!", "4 + 3 = 7."),
    quiz("Pip tinha 8, deu 2. Ficou com?", 6, [5, 7], "6!", "8 - 2 = 6."),
    quiz("Pip viu 6, viu mais 4. Ao todo?", 10, [9, 11], "10!", "6 + 4 = 10."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Historinha",
      convite: "Invente uma história curta com brinquedos. Ex: 'tinha 5 carrinhos, o irmão pegou 2'.",
      dicaAdulto: "Deixe a criança agir com objetos." },
    { tipo: "celebracao", medalha: "Contador de História", mascoteUrl: mascote,
      falaFinal: "Você resolve situações reais!" },
  ],
  baseCientifica: "Cognitively Guided Instruction (Carpenter).",
};

const dia18: AulaEI = {
  slug: "pip-f7-s4-d3-quanto-falta",
  titulo: "Dia 18 · Quanto falta pra 10?",
  icone: "🎯",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Amigos do 10! Se já tem 7, quanto falta pra 10?" },
    soma(7, 3, "maçãs", maca, "7 + o que dá 10? Vou testar 3.", "7 + 3 = 10! Faltavam 3."),
    soma(6, 4, "doces", doce, "6 + 4.", "10! Faltavam 4."),
    soma(8, 2, "uvas", uva, "8 + 2.", "10! Faltavam 2."),
    quiz("Quanto falta pra 10 se tenho 7?", 3, [2, 4], "3!", "7 + 3 = 10."),
    quiz("Quanto falta pra 10 se tenho 6?", 4, [3, 5], "4!", "6 + 4 = 10."),
    quiz("Quanto falta pra 10 se tenho 8?", 2, [3, 1], "2!", "8 + 2 = 10."),
    quiz("Quanto falta pra 10 se tenho 5?", 5, [4, 6], "5!", "5 + 5 = 10."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Amigos do 10",
      convite: "Peça um número entre 1 e 9. A criança diz quanto falta pra 10.",
      dicaAdulto: "Alterne. Use dedos: mostrar 6, dobrar 4 = 10." },
    { tipo: "celebracao", medalha: "Amigo do 10", mascoteUrl: mascote,
      falaFinal: "Amigos do 10 no coração!" },
  ],
  baseCientifica: "Missing addend (subtração como complemento).",
};

const dia19: AulaEI = {
  slug: "pip-f7-s4-d4-desafio-final",
  titulo: "Dia 19 · Desafio do Mestre",
  icone: "🏆",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Desafio final antes do DIPLOMA! Você consegue!" },
    soma(4, 4, "bolas", bola, "Dobra do 4.", "8."),
    subtracao(9, 4, "estrelas", estrela, "9 - 4.", "5."),
    soma(3, 7, "flores", flor, "3 + 7.", "10."),
    subtracao(10, 7, "flores", flor, "10 - 7 (mesma família).", "3."),
    quiz("4 + 4?", 8, [7, 9], "8.", "Dobra do 4 = 8."),
    quiz("9 - 4?", 5, [4, 6], "5.", "9 - 4 = 5."),
    quiz("3 + 7?", 10, [9, 8], "10.", "3 + 7 = 10."),
    quiz("10 - 7?", 3, [2, 4], "3.", "10 - 7 = 3."),
    quiz("Se 3 + 7 = 10, quanto é 7 + 3?", 10, [9, 8], "10! Comutativa.", "7 + 3 = 10."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Aquecimento",
      convite: "Amanhã é o DIPLOMA! Faça 3 contas juntos hoje pra revisar.",
      dicaAdulto: "Elogie MUITO. Está a um passo do diploma." },
    { tipo: "celebracao", medalha: "Quase lá!", mascoteUrl: mascote,
      falaFinal: "Amanhã é o DIPLOMA!" },
  ],
  baseCientifica: "Consolidação (misto).",
};

const dia20: AulaEI = {
  slug: "pip-f7-s4-d5-diploma",
  titulo: "Dia 20 · DIPLOMA · Mestre da Soma e Subtração",
  icone: "🎓",
  bncc: ["EI03ET07"],
  duracaoMin: 15,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "É HOJE! Cerimônia do diploma. 7 provas e você é MESTRE!" },
    soma(2, 3, "bolas", bola, "Prova 1.", "5."),
    subtracao(6, 2, "uvas", uva, "Prova 2.", "4."),
    soma(5, 5, "flores", flor, "Prova 3.", "10."),
    quiz("Prova 4: 2 + 3?", 5, [4, 6], "5.", "2 + 3 = 5."),
    quiz("Prova 5: 6 - 2?", 4, [5, 3], "4.", "6 - 2 = 4."),
    quiz("Prova 6: 5 + 5?", 10, [9, 8], "10.", "5 + 5 = 10."),
    quiz("Prova 7: 10 - 4?", 6, [5, 7], "6.", "10 - 4 = 6."),
    quiz("Prova 8: Falta quanto pra 10 se tenho 7?", 3, [2, 4], "3.", "7 + 3 = 10."),
    quiz("Prova final: 4 + 4?", 8, [7, 9], "8! DIPLOMA!", "4 + 4 = 8."),
    { tipo: "missaoFamilia", titulo: "Missão Família · Cerimônia do DIPLOMA",
      convite: "Chame a família! Mostre o diploma. Aplauda muito.",
      dicaAdulto: "Fase 8 (problemas em história) libera na sequência." },
    { tipo: "celebracao", medalha: "DIPLOMA · Mestre da Soma e Subtração", mascoteUrl: mascote,
      falaFinal: "DIPLOMA! Você é MESTRE DA SOMA E DA SUBTRAÇÃO!" },
  ],
  baseCientifica: "Cerimônia de fechamento Fase 7.",
};

// ============================================================
// CURSO
// ============================================================

export const cursoContarComPipFase7: CursoEI = {
  slug: "contar-com-pip-f7",
  serie: "pre2",
  serieLabel: "Contar com Pip · Fase 7",
  titulo: "Fase 7 · Soma e Subtração Visual (até 10)",
  descricao:
    "Juntar e tirar com CPA: cada item aparece contado um a um. Amigos do 5, do 10, dobras e famílias de fatos.",
  corPrimaria: "#ef4444",
  corSecundaria: "#7f1d1d",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "pip-f7-s1",
      numero: 1,
      titulo: "Semana 1 · Soma até 5",
      subtitulo: "Somador do 5",
      aulas: [dia01, dia02, dia03, dia04, dia05],
    },
    {
      slug: "pip-f7-s2",
      numero: 2,
      titulo: "Semana 2 · Soma até 10",
      subtitulo: "Somador do 10",
      aulas: [dia06, dia07, dia08, dia09, dia10],
    },
    {
      slug: "pip-f7-s3",
      numero: 3,
      titulo: "Semana 3 · Subtração até 10",
      subtitulo: "Subtrator",
      aulas: [dia11, dia12, dia13, dia14, dia15],
    },
    {
      slug: "pip-f7-s4",
      numero: 4,
      titulo: "Semana 4 · Mestre (DIPLOMA)",
      subtitulo: "Soma + subtração misturadas",
      aulas: [dia16, dia17, dia18, dia19, dia20],
    },
  ],
};

export function getAulaContarComPipFase7(slug: string): AulaEI | undefined {
  for (const u of cursoContarComPipFase7.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
