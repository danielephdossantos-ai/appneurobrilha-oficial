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
 * Contar com Pip — FASE 8 · Problemas em História (CGI)
 * ------------------------------------------------------
 * Cognitively Guided Instruction (Carpenter, Fennema, Franke).
 * A criança OUVE a história em 3 cenas, VÊ a operação animada e ESCOLHE
 * o resultado. Todas as operações usam OperacaoVisual (contagem visual
 * um-a-um) — nunca cálculo abstrato antes de ver.
 *
 * Semana 1 · JUNTAR (join)        — resultado desconhecido.
 * Semana 2 · TIRAR (separate)     — resultado desconhecido.
 * Semana 3 · COMPARAR             — quantos a mais / a menos.
 * Semana 4 · MESTRE · DIPLOMA     — juntar + tirar + comparar misturados.
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

// ---- helpers ------------------------------------------------------------

function historia(
  titulo: string,
  cenas: Array<{ img: string; narr: string }>,
): AulaEI["momentos"][number] {
  return {
    tipo: "historiaIlustrada",
    titulo,
    cenas: cenas.map((c) => ({ imagemUrl: c.img, narracao: c.narr })),
  };
}

function soma(
  a: number, b: number, item: string, img: string,
  instr: string, elogio: string,
): AulaEI["momentos"][number] {
  return {
    tipo: "operacaoVisual",
    operacao: "soma",
    imagemUrl: img,
    itemPlural: item,
    a, b,
    instrucaoAudio: instr,
    elogio,
  };
}

function subtracao(
  a: number, b: number, item: string, img: string,
  instr: string, elogio: string,
): AulaEI["momentos"][number] {
  return {
    tipo: "operacaoVisual",
    operacao: "subtracao",
    imagemUrl: img,
    itemPlural: item,
    a, b,
    instrucaoAudio: instr,
    elogio,
  };
}

function quiz(
  pergunta: string, correta: number, distratores: number[],
  feedbackAcerto: string, feedbackErro: string,
): AulaEI["momentos"][number] {
  return {
    tipo: "compreensaoImagem",
    perguntaAudio: pergunta,
    opcoes: [opN(correta, true), ...distratores.map((d) => opN(d, false))],
    feedbackAcerto,
    feedbackErro,
  };
}

function boas(fala: string): AulaEI["momentos"][number] {
  return { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: fala };
}

function conversa(img: string, pergunta: string): AulaEI["momentos"][number] {
  return { tipo: "rodaConversa", imagemUrl: img, pergunta };
}

function familia(titulo: string, convite: string, dica: string): AulaEI["momentos"][number] {
  return { tipo: "missaoFamilia", titulo, convite, dicaAdulto: dica };
}

function celebrar(medalha: string, fala: string): AulaEI["momentos"][number] {
  return { tipo: "celebracao", medalha, mascoteUrl: mascote, falaFinal: fala };
}

// ============================================================
// SEMANA 1 · JUNTAR (resultado desconhecido)
// ============================================================

const dia01: AulaEI = {
  slug: "pip-f8-s1-d1-juntar-flores",
  titulo: "Dia 1 · Juntando flores no jardim",
  icone: "🌸",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    boas("História nova! Pip vai ao jardim. Vamos JUNTAR e descobrir quantas flores tem!"),
    historia("A colheita da Pip", [
      { img: flor, narr: "A Pip colheu 3 flores no canteiro amarelo." },
      { img: flor, narr: "Depois ela colheu mais 2 flores no canteiro rosa." },
      { img: flor, narr: "Ela quer saber: quantas flores ela tem no total?" },
    ]),
    soma(3, 2, "flores", flor, "Vamos contar juntas! Primeiro as 3, depois as 2, e conta tudo.", "5 flores no total!"),
    quiz("Quantas flores a Pip tem no total?", 5, [4, 6], "5! Você juntou certinho.", "3 mais 2 é 5."),
    familia("Missão Família · Juntar em casa",
      "Peça 2 talheres. Depois peça mais 3. Quantos tem agora?",
      "Deixe a criança contar em voz alta. Não corrija — pergunte de novo."),
    celebrar("Selo · Juntadora do Jardim", "Você resolveu seu primeiro problema em história!"),
  ],
  baseCientifica: "CGI · Join Result Unknown (Carpenter et al.)",
};

const dia02: AulaEI = {
  slug: "pip-f8-s1-d2-juntar-bolas",
  titulo: "Dia 2 · Bolas na caixa",
  icone: "⚽",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    boas("Pip vai guardar as bolas. Vamos ajudar a contar!"),
    historia("A caixa de bolas", [
      { img: bola, narr: "A caixa tinha 4 bolas dentro." },
      { img: bola, narr: "A Pip colocou mais 3 bolas na caixa." },
      { img: bola, narr: "Agora, quantas bolas tem na caixa?" },
    ]),
    soma(4, 3, "bolas", bola, "Conta as 4 que tinha, depois as 3 novas, e o total.", "7 bolas!"),
    quiz("Quantas bolas ficaram na caixa?", 7, [6, 8], "7! Muito bem.", "4 mais 3 é 7."),
    conversa(bola, "Você já ajudou a guardar brinquedos? Quantos você guardou hoje?"),
    celebrar("Selo · Guardadora de Bolas", "Você juntou 4 e 3!"),
  ],
  baseCientifica: "CGI · Join Result Unknown.",
};

const dia03: AulaEI = {
  slug: "pip-f8-s1-d3-juntar-doces",
  titulo: "Dia 3 · Doces da festa",
  icone: "🍬",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    boas("Festa da Pip! Vamos juntar os doces."),
    historia("A festa", [
      { img: doce, narr: "A mamãe deu 5 doces pra Pip." },
      { img: doce, narr: "O papai deu mais 4 doces." },
      { img: doce, narr: "Com quantos doces a Pip ficou?" },
    ]),
    soma(5, 4, "doces", doce, "5 da mamãe, 4 do papai, conta tudo!", "9 doces!"),
    quiz("Quantos doces a Pip ganhou no total?", 9, [8, 10], "9! Perfeito.", "5 mais 4 é 9."),
    familia("Missão Família · Doces em casa",
      "Junte 2 grupos pequenos de doces (ou frutas) e peça pra criança contar o total.",
      "Deixe ela apontar cada doce ao contar."),
    celebrar("Selo · Contadora da Festa", "Você juntou 5 e 4!"),
  ],
  baseCientifica: "CGI · Join Result Unknown.",
};

const dia04: AulaEI = {
  slug: "pip-f8-s1-d4-juntar-uvas",
  titulo: "Dia 4 · Uvas na cesta",
  icone: "🍇",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    boas("Pip foi à feira. História de uvas!"),
    historia("Na feira", [
      { img: uva, narr: "A Pip pegou 6 uvas no cacho verde." },
      { img: uva, narr: "Depois pegou mais 2 uvas no cacho roxo." },
      { img: uva, narr: "Quantas uvas ela tem na cesta?" },
    ]),
    soma(6, 2, "uvas", uva, "6 verdes, 2 roxas, contando tudo!", "8 uvas!"),
    quiz("Quantas uvas tem na cesta da Pip?", 8, [7, 9], "8! Excelente.", "6 mais 2 é 8."),
    celebrar("Selo · Feirante da Pip", "Você juntou 6 e 2!"),
  ],
  baseCientifica: "CGI · Join Result Unknown.",
};

const dia05: AulaEI = {
  slug: "pip-f8-s1-d5-medalha-juntadora",
  titulo: "Dia 5 · MEDALHA · Juntadora",
  icone: "🥇",
  bncc: ["EI03ET07"],
  duracaoMin: 14,
  momentos: [
    boas("Prova da medalha! 4 histórias e você vira Juntadora."),
    historia("Prova 1 · O balão", [
      { img: balao, narr: "A Pip tinha 3 balões." },
      { img: balao, narr: "A amiga deu mais 4 balões." },
      { img: balao, narr: "Quantos balões ela tem agora?" },
    ]),
    soma(3, 4, "balões", balao, "Junta 3 e 4.", "7!"),
    quiz("Quantos balões no total?", 7, [6, 8], "7!", "3 + 4 = 7."),
    historia("Prova 2 · As maçãs", [
      { img: maca, narr: "Na árvore havia 5 maçãs." },
      { img: maca, narr: "Caíram mais 2 maçãs perto." },
      { img: maca, narr: "Quantas maçãs a Pip pode colher?" },
    ]),
    soma(5, 2, "maçãs", maca, "Junta 5 e 2.", "7!"),
    quiz("Quantas maçãs no total?", 7, [6, 8], "7!", "5 + 2 = 7."),
    quiz("E se fossem 4 e 4?", 8, [7, 9], "8! Dobra do 4.", "4 + 4 = 8."),
    celebrar("MEDALHA · Juntadora", "Você é oficialmente JUNTADORA de histórias!"),
  ],
  baseCientifica: "Fechamento Semana 1 (Join).",
};

// ============================================================
// SEMANA 2 · TIRAR (resultado desconhecido)
// ============================================================

const dia06: AulaEI = {
  slug: "pip-f8-s2-d1-tirar-doces",
  titulo: "Dia 6 · Doces que a Pip comeu",
  icone: "🍭",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    boas("Nova história! Agora vamos TIRAR. O que sobra?"),
    historia("Os doces da Pip", [
      { img: doce, narr: "A Pip tinha 8 doces na mão." },
      { img: doce, narr: "Ela comeu 3 doces com muito gosto." },
      { img: doce, narr: "Quantos doces ainda restaram?" },
    ]),
    subtracao(8, 3, "doces", doce, "Tinha 8, tira 3, veja quantos sobram.", "5 doces!"),
    quiz("Quantos doces sobraram?", 5, [4, 6], "5! Você tirou certo.", "8 menos 3 é 5."),
    familia("Missão Família · Tirar em casa",
      "Ponha 6 objetos na mesa. Peça pra criança 'esconder' 2. Quantos ficam?",
      "Fale devagar. Deixe ela contar o que sobra apontando."),
    celebrar("Selo · Tiradora de Doces", "Você tirou 3 de 8!"),
  ],
  baseCientifica: "CGI · Separate Result Unknown.",
};

const dia07: AulaEI = {
  slug: "pip-f8-s2-d2-tirar-balao",
  titulo: "Dia 7 · Balões que voaram",
  icone: "🎈",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    boas("Ventou! Balões voaram. Vamos ver o que sobra."),
    historia("Balões no céu", [
      { img: balao, narr: "A Pip segurava 7 balões coloridos." },
      { img: balao, narr: "Uma rajada levou 4 balões pro céu." },
      { img: balao, narr: "Com quantos balões ela ficou?" },
    ]),
    subtracao(7, 4, "balões", balao, "7 balões, 4 voaram, o que sobrou?", "3 balões!"),
    quiz("Quantos balões restaram na mão da Pip?", 3, [2, 4], "3!", "7 - 4 = 3."),
    conversa(balao, "Se um balão seu voasse, o que você faria?"),
    celebrar("Selo · Segura-balões", "Você tirou 4 de 7!"),
  ],
  baseCientifica: "CGI · Separate Result Unknown.",
};

const dia08: AulaEI = {
  slug: "pip-f8-s2-d3-tirar-joaninhas",
  titulo: "Dia 8 · Joaninhas que voaram",
  icone: "🐞",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    boas("Joaninhas na folha! Quantas ficaram?"),
    historia("As joaninhas", [
      { img: joaninha, narr: "Na folha havia 9 joaninhas tomando sol." },
      { img: joaninha, narr: "6 joaninhas abriram as asas e voaram." },
      { img: joaninha, narr: "Quantas joaninhas ficaram na folha?" },
    ]),
    subtracao(9, 6, "joaninhas", joaninha, "9 tinham, 6 voaram, sobram quantas?", "3 joaninhas!"),
    quiz("Quantas joaninhas ainda estão na folha?", 3, [2, 4], "3!", "9 - 6 = 3."),
    celebrar("Selo · Observadora do Jardim", "Você tirou 6 de 9!"),
  ],
  baseCientifica: "CGI · Separate Result Unknown.",
};

const dia09: AulaEI = {
  slug: "pip-f8-s2-d4-tirar-macas",
  titulo: "Dia 9 · Maçãs que caíram",
  icone: "🍎",
  bncc: ["EI03ET07"],
  duracaoMin: 12,
  momentos: [
    boas("Ventou de novo! Maçãs caíram. Vamos contar."),
    historia("A macieira", [
      { img: maca, narr: "Na macieira havia 10 maçãs vermelhas." },
      { img: maca, narr: "O vento derrubou 4 maçãs no chão." },
      { img: maca, narr: "Quantas maçãs continuam no galho?" },
    ]),
    subtracao(10, 4, "maçãs", maca, "10 na árvore, 4 caíram, quantas ficam?", "6 maçãs!"),
    quiz("Quantas maçãs ainda estão no galho?", 6, [5, 7], "6!", "10 - 4 = 6."),
    celebrar("Selo · Guardiã da Macieira", "Você tirou 4 de 10!"),
  ],
  baseCientifica: "CGI · Separate Result Unknown.",
};

const dia10: AulaEI = {
  slug: "pip-f8-s2-d5-medalha-tiradora",
  titulo: "Dia 10 · MEDALHA · Tiradora",
  icone: "🥈",
  bncc: ["EI03ET07"],
  duracaoMin: 14,
  momentos: [
    boas("Prova da medalha Tiradora! 4 histórias, vamos lá."),
    historia("Prova 1 · Estrelas", [
      { img: estrela, narr: "No céu tinha 8 estrelas brilhando." },
      { img: estrela, narr: "3 estrelas se apagaram devagarinho." },
      { img: estrela, narr: "Quantas ainda brilham?" },
    ]),
    subtracao(8, 3, "estrelas", estrela, "Tira 3 de 8.", "5!"),
    quiz("Quantas estrelas ainda brilham?", 5, [4, 6], "5!", "8 - 3 = 5."),
    historia("Prova 2 · Flores", [
      { img: flor, narr: "Na cesta tinha 6 flores." },
      { img: flor, narr: "A Pip deu 2 flores pra vovó." },
      { img: flor, narr: "Quantas flores sobraram?" },
    ]),
    subtracao(6, 2, "flores", flor, "Tira 2 de 6.", "4!"),
    quiz("Quantas flores sobraram?", 4, [3, 5], "4!", "6 - 2 = 4."),
    quiz("E se tirar 5 de 9?", 4, [3, 5], "4!", "9 - 5 = 4."),
    celebrar("MEDALHA · Tiradora", "Você é oficialmente TIRADORA de histórias!"),
  ],
  baseCientifica: "Fechamento Semana 2 (Separate).",
};

// ============================================================
// SEMANA 3 · COMPARAR (quantos a mais / a menos)
// ============================================================

const dia11: AulaEI = {
  slug: "pip-f8-s3-d1-comparar-bolas",
  titulo: "Dia 11 · Quem tem mais bolas?",
  icone: "🔵",
  bncc: ["EI03ET07"],
  duracaoMin: 13,
  momentos: [
    boas("Hoje vamos COMPARAR. Quantos a mais um tem que o outro?"),
    historia("Pip e Bibi", [
      { img: bola, narr: "A Pip tem 5 bolas." },
      { img: bola, narr: "A amiga Bibi tem 3 bolas." },
      { img: bola, narr: "Quantas bolas a Pip tem A MAIS que a Bibi?" },
    ]),
    subtracao(5, 3, "bolas", bola, "Compara 5 com 3: tira a parte igual, sobra a diferença.", "2 a mais!"),
    quiz("Quantas bolas a Pip tem A MAIS?", 2, [1, 3], "2! A diferença é 2.", "5 - 3 = 2."),
    familia("Missão Família · Comparar em casa",
      "Faça 2 filas de brinquedos com quantidades diferentes. Pergunte: quantos a mais?",
      "Alinhe os itens 1-a-1 pra ver a sobra."),
    celebrar("Selo · Comparadora", "Você achou a diferença!"),
  ],
  baseCientifica: "CGI · Compare Difference Unknown.",
};

const dia12: AulaEI = {
  slug: "pip-f8-s3-d2-comparar-flores",
  titulo: "Dia 12 · Quem tem mais flores?",
  icone: "🌷",
  bncc: ["EI03ET07"],
  duracaoMin: 13,
  momentos: [
    boas("Mais uma comparação. Vamos lá!"),
    historia("Duas cestas", [
      { img: flor, narr: "A cesta da Pip tem 7 flores." },
      { img: flor, narr: "A cesta do Tito tem 4 flores." },
      { img: flor, narr: "Quantas flores a Pip tem A MAIS?" },
    ]),
    subtracao(7, 4, "flores", flor, "Compara 7 com 4.", "3 a mais!"),
    quiz("Quantas flores a Pip tem A MAIS que o Tito?", 3, [2, 4], "3!", "7 - 4 = 3."),
    celebrar("Selo · Olho de Comparadora", "Você comparou 7 e 4!"),
  ],
  baseCientifica: "CGI · Compare Difference Unknown.",
};

const dia13: AulaEI = {
  slug: "pip-f8-s3-d3-comparar-menos",
  titulo: "Dia 13 · Quem tem MENOS?",
  icone: "🐞",
  bncc: ["EI03ET07"],
  duracaoMin: 13,
  momentos: [
    boas("Agora vamos ver quem tem MENOS. Também é comparar!"),
    historia("Joaninhas na folha", [
      { img: joaninha, narr: "A folha grande tem 8 joaninhas." },
      { img: joaninha, narr: "A folha pequena tem 5 joaninhas." },
      { img: joaninha, narr: "Quantas joaninhas a folha pequena tem A MENOS?" },
    ]),
    subtracao(8, 5, "joaninhas", joaninha, "Compara 8 com 5: quem tem menos, tem 3 a menos.", "3 a menos!"),
    quiz("Quantas joaninhas A MENOS a folha pequena tem?", 3, [2, 4], "3!", "8 - 5 = 3."),
    conversa(joaninha, "Você tem mais brinquedos ou mais livros? Como saber a diferença?"),
    celebrar("Selo · Vê-diferenças", "Você achou 3 a menos!"),
  ],
  baseCientifica: "CGI · Compare (menor lado).",
};

const dia14: AulaEI = {
  slug: "pip-f8-s3-d4-comparar-doces",
  titulo: "Dia 14 · Doces iguais?",
  icone: "🍬",
  bncc: ["EI03ET07"],
  duracaoMin: 13,
  momentos: [
    boas("Será que dá empate? Vamos comparar doces!"),
    historia("A dividida", [
      { img: doce, narr: "A Pip tem 6 doces." },
      { img: doce, narr: "O irmão dela também tem 6 doces." },
      { img: doce, narr: "Qual é a diferença entre eles?" },
    ]),
    subtracao(6, 6, "doces", doce, "6 com 6: nenhum tem mais.", "0! Empate!"),
    quiz("Quantos doces a Pip tem A MAIS que o irmão?", 0, [1, 2], "0! É EMPATE.", "Quando são iguais, a diferença é 0."),
    celebrar("Selo · Justa e Igual", "Você viu que 6 e 6 empatam!"),
  ],
  baseCientifica: "CGI · Compare (diferença zero / equivalência).",
};

const dia15: AulaEI = {
  slug: "pip-f8-s3-d5-medalha-comparadora",
  titulo: "Dia 15 · MEDALHA · Comparadora",
  icone: "🥉",
  bncc: ["EI03ET07"],
  duracaoMin: 14,
  momentos: [
    boas("Prova final da comparação! 4 histórias."),
    historia("Prova 1 · Uvas", [
      { img: uva, narr: "A Pip tem 9 uvas." },
      { img: uva, narr: "A Bibi tem 6 uvas." },
      { img: uva, narr: "Quantas a mais a Pip tem?" },
    ]),
    subtracao(9, 6, "uvas", uva, "Compara 9 com 6.", "3!"),
    quiz("Quantas uvas A MAIS a Pip tem?", 3, [2, 4], "3!", "9 - 6 = 3."),
    historia("Prova 2 · Balões", [
      { img: balao, narr: "O parque tem 10 balões vermelhos." },
      { img: balao, narr: "E 4 balões azuis." },
      { img: balao, narr: "Quantos vermelhos a mais?" },
    ]),
    subtracao(10, 4, "balões", balao, "Compara 10 com 4.", "6!"),
    quiz("Quantos balões vermelhos A MAIS?", 6, [5, 7], "6!", "10 - 4 = 6."),
    quiz("E 7 e 7: qual é a diferença?", 0, [1, 7], "0! Empate.", "7 = 7."),
    celebrar("MEDALHA · Comparadora", "Você é oficialmente COMPARADORA!"),
  ],
  baseCientifica: "Fechamento Semana 3 (Compare).",
};

// ============================================================
// SEMANA 4 · MESTRE — misturado + DIPLOMA
// ============================================================

const dia16: AulaEI = {
  slug: "pip-f8-s4-d1-misto-juntar-tirar",
  titulo: "Dia 16 · Juntar E tirar",
  icone: "🔀",
  bncc: ["EI03ET07"],
  duracaoMin: 14,
  momentos: [
    boas("Semana da MESTRA! Vamos misturar juntar e tirar."),
    historia("Doces da Pip", [
      { img: doce, narr: "A Pip ganhou 4 doces da mamãe." },
      { img: doce, narr: "Depois ganhou mais 3 doces do papai." },
      { img: doce, narr: "Ela comeu 2. Com quantos ficou?" },
    ]),
    soma(4, 3, "doces", doce, "Primeiro junta 4 e 3.", "7!"),
    subtracao(7, 2, "doces", doce, "Agora tira 2 de 7.", "5!"),
    quiz("Com quantos doces a Pip ficou no fim?", 5, [4, 6], "5!", "4 + 3 - 2 = 5."),
    celebrar("Selo · Mestra do Passo-a-passo", "Você resolveu 2 partes!"),
  ],
  baseCientifica: "CGI · combinação de operações.",
};

const dia17: AulaEI = {
  slug: "pip-f8-s4-d2-misto-comparar-juntar",
  titulo: "Dia 17 · Comparar e juntar",
  icone: "🧩",
  bncc: ["EI03ET07"],
  duracaoMin: 14,
  momentos: [
    boas("Vamos comparar e depois juntar!"),
    historia("Bolas do time", [
      { img: bola, narr: "O time verde tem 5 bolas." },
      { img: bola, narr: "O time azul tem 3 bolas." },
      { img: bola, narr: "Se juntar os dois times, quantas bolas dá?" },
    ]),
    soma(5, 3, "bolas", bola, "Junta 5 e 3.", "8!"),
    quiz("Somando os dois times, quantas bolas?", 8, [7, 9], "8!", "5 + 3 = 8."),
    quiz("E quantas o verde tem A MAIS que o azul?", 2, [1, 3], "2!", "5 - 3 = 2."),
    celebrar("Selo · Mestra do Compara-Junta", "Duas perguntas resolvidas!"),
  ],
  baseCientifica: "CGI · comparar + juntar.",
};

const dia18: AulaEI = {
  slug: "pip-f8-s4-d3-parte-parte-todo",
  titulo: "Dia 18 · Parte, parte e o todo",
  icone: "🧠",
  bncc: ["EI03ET07"],
  duracaoMin: 14,
  momentos: [
    boas("Todo problema tem PARTES e um TODO. Vamos ver!"),
    historia("Flores da cesta", [
      { img: flor, narr: "A cesta da Pip tem 9 flores no total." },
      { img: flor, narr: "6 flores são amarelas. As outras são rosas." },
      { img: flor, narr: "Quantas flores rosas tem?" },
    ]),
    subtracao(9, 6, "flores", flor, "O todo é 9, uma parte é 6, tira pra achar a outra.", "3 rosas!"),
    quiz("Quantas flores rosas tem na cesta?", 3, [2, 4], "3!", "9 - 6 = 3."),
    quiz("E se o todo fosse 10 e a parte 4, quanto seria a outra?", 6, [5, 7], "6!", "10 - 4 = 6."),
    celebrar("Selo · Detetive das Partes", "Você achou a parte que faltava!"),
  ],
  baseCientifica: "CGI · Part-Part-Whole.",
};

const dia19: AulaEI = {
  slug: "pip-f8-s4-d4-inventar-historia",
  titulo: "Dia 19 · Inventar uma história",
  icone: "✏️",
  bncc: ["EI03ET07"],
  duracaoMin: 14,
  momentos: [
    boas("Hoje VOCÊ inventa! Depois a Pip resolve com você."),
    conversa(pipMascot, "Pense numa história com 3 doces + 2 doces. Fale em voz alta."),
    soma(3, 2, "doces", doce, "Vamos resolver a sua história: 3 + 2.", "5!"),
    quiz("Quantos doces na sua história?", 5, [4, 6], "5!", "3 + 2 = 5."),
    conversa(pipMascot, "Agora invente uma história de TIRAR: 6 - 4."),
    subtracao(6, 4, "doces", doce, "6 doces, tirou 4. Quantos sobraram?", "2!"),
    quiz("Quantos sobraram?", 2, [1, 3], "2!", "6 - 4 = 2."),
    familia("Missão Família · Contar histórias em casa",
      "Peça pra criança inventar 2 histórias de matemática pra você e pra outro adulto.",
      "Ela conta a história e vocês resolvem juntos. Elogie a criatividade."),
    celebrar("Selo · Autora de Histórias", "Você INVENTOU e resolveu!"),
  ],
  baseCientifica: "CGI · problem posing (inventar problemas).",
};

const dia20: AulaEI = {
  slug: "pip-f8-s4-d5-diploma-final",
  titulo: "Dia 20 · DIPLOMA · Mestre dos Problemas",
  icone: "🎓",
  bncc: ["EI03ET07"],
  duracaoMin: 16,
  momentos: [
    boas("Cerimônia do DIPLOMA FINAL da Pip! 6 provas."),
    historia("Prova 1 · Juntar", [
      { img: uva, narr: "A cesta tinha 5 uvas." },
      { img: uva, narr: "Colocaram mais 4." },
      { img: uva, narr: "Quantas no total?" },
    ]),
    soma(5, 4, "uvas", uva, "Junta 5 e 4.", "9!"),
    quiz("Total de uvas?", 9, [8, 10], "9!", "5 + 4 = 9."),
    historia("Prova 2 · Tirar", [
      { img: maca, narr: "A árvore tinha 10 maçãs." },
      { img: maca, narr: "Caíram 7." },
      { img: maca, narr: "Quantas ficaram?" },
    ]),
    subtracao(10, 7, "maçãs", maca, "Tira 7 de 10.", "3!"),
    quiz("Quantas maçãs ficaram?", 3, [2, 4], "3!", "10 - 7 = 3."),
    historia("Prova 3 · Comparar", [
      { img: estrela, narr: "O céu tem 8 estrelas grandes." },
      { img: estrela, narr: "E 5 estrelas pequenas." },
      { img: estrela, narr: "Quantas grandes A MAIS?" },
    ]),
    subtracao(8, 5, "estrelas", estrela, "Compara 8 e 5.", "3!"),
    quiz("Quantas grandes A MAIS?", 3, [2, 4], "3!", "8 - 5 = 3."),
    quiz("Prova final: 6 + 4?", 10, [9, 8], "10! DIPLOMA MESTRA!", "6 + 4 = 10."),
    familia("Missão Família · Cerimônia do DIPLOMA FINAL",
      "Chame a família! Mostre o DIPLOMA. É o fim da trilha Contar com Pip.",
      "Elogie muito. Fotografe. Este diploma marca o fim de uma jornada de 8 fases."),
    celebrar("DIPLOMA · Mestre dos Problemas em História",
      "DIPLOMA! Você terminou a trilha Contar com Pip. É oficialmente MESTRE!"),
  ],
  baseCientifica: "Cerimônia final Fase 8 · fechamento do curso.",
};

// ============================================================
// CURSO
// ============================================================

export const cursoContarComPipFase8: CursoEI = {
  slug: "contar-com-pip-f8",
  serie: "pre2",
  serieLabel: "Contar com Pip · Fase 8",
  titulo: "Fase 8 · Problemas em História (CGI)",
  descricao:
    "Cognitively Guided Instruction: juntar, tirar, comparar e parte-parte-todo em histórias narradas com resolução visual.",
  corPrimaria: "#6366f1",
  corSecundaria: "#312e81",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "pip-f8-s1",
      numero: 1,
      titulo: "Semana 1 · Juntar",
      subtitulo: "Juntadora",
      aulas: [dia01, dia02, dia03, dia04, dia05],
    },
    {
      slug: "pip-f8-s2",
      numero: 2,
      titulo: "Semana 2 · Tirar",
      subtitulo: "Tiradora",
      aulas: [dia06, dia07, dia08, dia09, dia10],
    },
    {
      slug: "pip-f8-s3",
      numero: 3,
      titulo: "Semana 3 · Comparar",
      subtitulo: "Comparadora",
      aulas: [dia11, dia12, dia13, dia14, dia15],
    },
    {
      slug: "pip-f8-s4",
      numero: 4,
      titulo: "Semana 4 · Mestre (DIPLOMA FINAL)",
      subtitulo: "Juntar + tirar + comparar misturados",
      aulas: [dia16, dia17, dia18, dia19, dia20],
    },
  ],
};

export function getAulaContarComPipFase8(slug: string): AulaEI | undefined {
  for (const u of cursoContarComPipFase8.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
