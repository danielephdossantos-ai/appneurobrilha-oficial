import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";

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
import { url as n10 } from "@/assets/banco-midias/numeros/numero-10.png.asset.json";

/**
 * Contar com Pip — FASE 3 · Cardinalidade + Numeral (0–10)
 * ---------------------------------------------------------
 * Objetivo: associar QUANTIDADE (o que sabemos contar da Fase 2) ao
 * SÍMBOLO ESCRITO do número (1, 2, 3… 10) — reconhecer numerais.
 *
 * Semana 1 · Numerais 1, 2, 3 (âncora "meu 1")
 * Semana 2 · Numerais 4, 5, 6 (mão cheia)
 * Semana 3 · Numerais 7, 8, 9, 10 + o ZERO (nada)
 * Semana 4 · Ligar quantidade ↔ numeral + DIPLOMA
 *
 * Base científica:
 *  - Cardinalidade (Gelman & Gallistel): última palavra dita = total.
 *  - Símbolo-quantidade (Siegler; Ramani & Siegler 2008): numerais
 *    escritos ancoram o senso numérico.
 *  - Aproximação triangular (Bruner / CPA): concreto (contagem) →
 *    pictórico (grupo) → abstrato (numeral escrito).
 */

const mascote = brilha;

// helper para gerar opções de numeral com destaque
const opcaoNumeral = (
  n: number,
  correta: boolean,
  numImg: string,
  nome?: string,
) => ({
  nome: nome ?? String(n),
  imagemUrl: numImg,
  correta,
  quantidade: 1 as const,
});

// ============================================================
// SEMANA 1 · Numerais 1, 2, 3
// ============================================================

const dia01: AulaEI = {
  slug: "pip-f3-s1-d1-numeral-1",
  titulo: "Dia 1 · O número 1",
  icone: "1️⃣",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Fase 3! Agora vamos APRENDER O DESENHO dos números. Este aqui é o UM. Um risco em pé.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 1,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio: "Uma bola. O desenho dele é o 1.",
      elogio: "UM! Este é o 1!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual desenho é o número UM?",
      opcoes: [
        opcaoNumeral(1, true, n1),
        opcaoNumeral(2, false, n2),
        opcaoNumeral(3, false, n3),
      ],
      feedbackAcerto: "Isso! Este é o 1!",
      feedbackErro: "O 1 é um risco em pé.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "De novo: qual é o número UM?",
      opcoes: [
        opcaoNumeral(3, false, n3),
        opcaoNumeral(1, true, n1),
        opcaoNumeral(2, false, n2),
      ],
      feedbackAcerto: "1! Você já reconhece!",
      feedbackErro: "Procura o risco em pé.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Este número mostra quantas coisas?",
      opcoes: [
        { nome: "uma bola", imagemUrl: bola, correta: true, quantidade: 1 },
        { nome: "duas estrelas", imagemUrl: estrela, correta: false, quantidade: 2 },
        { nome: "três flores", imagemUrl: flor, correta: false, quantidade: 3 },
      ],
      feedbackAcerto: "UMA! O 1 vale UM!",
      feedbackErro: "O 1 vale UMA coisa só.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Caça ao 1",
      convite:
        "Procurem o número 1 pela casa: no controle remoto, no relógio, na embalagem. A cada 1 encontrado, gritem 'UM!'.",
      dicaAdulto:
        "Ver o numeral em contextos reais ancora o símbolo. Repita o nome do número sempre que aparecer.",
    },
    {
      tipo: "celebracao",
      medalha: "Conheço o 1",
      mascoteUrl: mascote,
      falaFinal: "O 1 é seu amigo agora!",
    },
  ],
  baseCientifica:
    "Símbolo-quantidade (Siegler) — associar o dígito 1 ao conceito UM.",
};

const dia02: AulaEI = {
  slug: "pip-f3-s1-d2-numeral-2",
  titulo: "Dia 2 · O número 2",
  icone: "2️⃣",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Hoje é o DOIS! Parece um patinho. Duas coisinhas: dois olhos, duas mãos.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 2,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio: "Duas estrelas. O desenho é o 2.",
      elogio: "DOIS!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o número DOIS?",
      opcoes: [
        opcaoNumeral(1, false, n1),
        opcaoNumeral(2, true, n2),
        opcaoNumeral(3, false, n3),
      ],
      feedbackAcerto: "Isso! Este é o 2!",
      feedbackErro: "O 2 parece um patinho.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Este número mostra quantas coisas?",
      opcoes: [
        { nome: "uma flor", imagemUrl: flor, correta: false, quantidade: 1 },
        { nome: "duas joaninhas", imagemUrl: joaninha, correta: true, quantidade: 2 },
        { nome: "três balões", imagemUrl: balao, correta: false, quantidade: 3 },
      ],
      feedbackAcerto: "DUAS! O 2 vale DOIS!",
      feedbackErro: "O 2 vale DUAS coisinhas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem tantas coisas quanto mostra o número 2?",
      opcoes: [
        { nome: "duas maçãs", imagemUrl: maca, correta: true, quantidade: 2 },
        { nome: "quatro corações", imagemUrl: coracao, correta: false, quantidade: 4 },
        { nome: "uma bola", imagemUrl: bola, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "Duas maçãs = 2!",
      feedbackErro: "O 2 = duas coisinhas.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Coisas em pares",
      convite:
        "Achem coisas que vêm em DOIS: olhos, orelhas, sapatos, luvas. Digam 'DOIS!' toda vez.",
      dicaAdulto:
        "Ancoragem corporal — pares no próprio corpo fortalecem a ideia de 2.",
    },
    {
      tipo: "celebracao",
      medalha: "Conheço o 2",
      mascoteUrl: mascote,
      falaFinal: "O 2 já é seu amigo também!",
    },
  ],
  baseCientifica:
    "Ancoragem corporal do numeral 2 (pares perceptuais).",
};

const dia03: AulaEI = {
  slug: "pip-f3-s1-d3-numeral-3",
  titulo: "Dia 3 · O número 3",
  icone: "3️⃣",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "O TRÊS parece uma orelhinha! Vem conhecer.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: coracao,
      quantidade: 3,
      itemSingular: "coração",
      itemPlural: "corações",
      instrucaoAudio: "Três corações. O desenho é o 3.",
      elogio: "TRÊS!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o número TRÊS?",
      opcoes: [
        opcaoNumeral(2, false, n2),
        opcaoNumeral(3, true, n3),
        opcaoNumeral(1, false, n1),
      ],
      feedbackAcerto: "Isso! Este é o 3!",
      feedbackErro: "O 3 parece uma orelhinha.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Este número mostra quantas coisas?",
      opcoes: [
        { nome: "duas flores", imagemUrl: flor, correta: false, quantidade: 2 },
        { nome: "três estrelas", imagemUrl: estrela, correta: true, quantidade: 3 },
        { nome: "uma joaninha", imagemUrl: joaninha, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "TRÊS! O 3 vale três!",
      feedbackErro: "O 3 vale TRÊS coisinhas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo combina com o número 3?",
      opcoes: [
        { nome: "três balões", imagemUrl: balao, correta: true, quantidade: 3 },
        { nome: "cinco maçãs", imagemUrl: maca, correta: false, quantidade: 5 },
        { nome: "duas bolas", imagemUrl: bola, correta: false, quantidade: 2 },
      ],
      feedbackAcerto: "Três balões = 3!",
      feedbackErro: "O 3 = três coisinhas.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Trios",
      convite:
        "Achem 3 coisas iguais: 3 pedrinhas, 3 tampinhas, 3 uvas. Toda vez digam TRÊS.",
      dicaAdulto:
        "Coleções pequenas (até 3) são facilmente subitizáveis — bom ponto de ancoragem.",
    },
    {
      tipo: "celebracao",
      medalha: "Conheço o 3",
      mascoteUrl: mascote,
      falaFinal: "1, 2, 3 — três amigos novos!",
    },
  ],
  baseCientifica:
    "Símbolo-quantidade para 3 — reforçado por subitizing.",
};

const dia04: AulaEI = {
  slug: "pip-f3-s1-d4-mistura-1-2-3",
  titulo: "Dia 4 · Mistura 1, 2 e 3",
  icone: "🎲",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Prova rápida! Vou misturar 1, 2 e 3 pra ver se você já reconhece TODOS.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o 2?",
      opcoes: [
        opcaoNumeral(3, false, n3),
        opcaoNumeral(2, true, n2),
        opcaoNumeral(1, false, n1),
      ],
      feedbackAcerto: "2!",
      feedbackErro: "O 2 parece patinho.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o 1?",
      opcoes: [
        opcaoNumeral(2, false, n2),
        opcaoNumeral(3, false, n3),
        opcaoNumeral(1, true, n1),
      ],
      feedbackAcerto: "1!",
      feedbackErro: "O 1 é um risquinho em pé.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o 3?",
      opcoes: [
        opcaoNumeral(3, true, n3),
        opcaoNumeral(2, false, n2),
        opcaoNumeral(1, false, n1),
      ],
      feedbackAcerto: "3!",
      feedbackErro: "O 3 parece orelhinha.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 2 corações?",
      opcoes: [
        opcaoNumeral(1, false, n1),
        opcaoNumeral(3, false, n3),
        opcaoNumeral(2, true, n2),
      ],
      feedbackAcerto: "2 corações = 2!",
      feedbackErro: "Conta os corações — são 2!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 3 balões?",
      opcoes: [
        opcaoNumeral(2, false, n2),
        opcaoNumeral(3, true, n3),
        opcaoNumeral(1, false, n1),
      ],
      feedbackAcerto: "3 balões = 3!",
      feedbackErro: "Conta os balões — são 3!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Jogo do 1-2-3",
      convite:
        "Escreva 1, 2 e 3 em três papéis. A criança aponta o número que você fala. Depois inverte: você aponta e ela fala.",
      dicaAdulto:
        "Reconhecimento bidirecional (nome ↔ símbolo) é o alvo. Erros são normais — repita com humor.",
    },
    {
      tipo: "celebracao",
      medalha: "Reconhecedor de 3",
      mascoteUrl: mascote,
      falaFinal: "1, 2, 3 no bolso!",
    },
  ],
  baseCientifica:
    "Reconhecimento simbólico bidirecional 1-2-3.",
};

const dia05: AulaEI = {
  slug: "pip-f3-s1-d5-medalha-s1",
  titulo: "Dia 5 · Amigo dos Números 1-2-3",
  icone: "🏅",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Fim da Semana 1! Bora provar que 1, 2 e 3 são seus amigos.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Este é qual número?",
      opcoes: [
        opcaoNumeral(1, true, n1),
        opcaoNumeral(2, false, n2),
        opcaoNumeral(3, false, n3),
      ],
      feedbackAcerto: "1!",
      feedbackErro: "É o 1 — risquinho em pé.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 3 flores?",
      opcoes: [
        opcaoNumeral(2, false, n2),
        opcaoNumeral(3, true, n3),
        opcaoNumeral(1, false, n1),
      ],
      feedbackAcerto: "3!",
      feedbackErro: "Conta as flores — são 3!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Este é qual número?",
      opcoes: [
        opcaoNumeral(3, false, n3),
        opcaoNumeral(1, false, n1),
        opcaoNumeral(2, true, n2),
      ],
      feedbackAcerto: "2!",
      feedbackErro: "É o 2 — parece patinho.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo combina com o número 2?",
      opcoes: [
        { nome: "duas bolas", imagemUrl: bola, correta: true, quantidade: 2 },
        { nome: "três estrelas", imagemUrl: estrela, correta: false, quantidade: 3 },
        { nome: "uma maçã", imagemUrl: maca, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "Duas bolas = 2!",
      feedbackErro: "O 2 = duas coisas.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Show dos amigos",
      convite:
        "A criança faz um desfile: mostra o 1, mostra o 2, mostra o 3 — cada um em um papel — e fala o nome de cada um.",
      dicaAdulto:
        "Marcadores da Semana 1: nomear e apontar 1, 2 e 3 sem hesitar. Semana 2 (4, 5, 6) libera.",
    },
    {
      tipo: "celebracao",
      medalha: "Semana 1 · Amigo dos Números 1-2-3",
      mascoteUrl: mascote,
      falaFinal: "MEDALHA! Amigo do 1, 2 e 3!",
    },
  ],
  baseCientifica:
    "Consolidação simbólica 1-2-3 (Ramani & Siegler).",
};

// ============================================================
// SEMANA 2 · Numerais 4, 5, 6
// ============================================================

const dia06: AulaEI = {
  slug: "pip-f3-s2-d6-numeral-4",
  titulo: "Dia 6 · O número 4",
  icone: "4️⃣",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana 2! Hoje é o QUATRO. Ele parece uma cadeirinha virada.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 4,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio: "Quatro joaninhas. O desenho é o 4.",
      elogio: "QUATRO!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o número QUATRO?",
      opcoes: [
        opcaoNumeral(3, false, n3),
        opcaoNumeral(4, true, n4),
        opcaoNumeral(2, false, n2),
      ],
      feedbackAcerto: "Isso! Este é o 4!",
      feedbackErro: "O 4 parece uma cadeira virada.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Este número mostra quantas coisas?",
      opcoes: [
        { nome: "três flores", imagemUrl: flor, correta: false, quantidade: 3 },
        { nome: "quatro balões", imagemUrl: balao, correta: true, quantidade: 4 },
        { nome: "duas bolas", imagemUrl: bola, correta: false, quantidade: 2 },
      ],
      feedbackAcerto: "QUATRO! O 4 vale 4!",
      feedbackErro: "O 4 = quatro coisinhas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo combina com o número 4?",
      opcoes: [
        { nome: "quatro corações", imagemUrl: coracao, correta: true, quantidade: 4 },
        { nome: "duas maçãs", imagemUrl: maca, correta: false, quantidade: 2 },
        { nome: "seis estrelas", imagemUrl: estrela, correta: false, quantidade: 6 },
      ],
      feedbackAcerto: "Quatro corações = 4!",
      feedbackErro: "Conta o grupo — precisa de 4.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Quartetos",
      convite:
        "Achem coisas em grupos de 4: 4 pés da mesa, 4 rodas do carro. Digam QUATRO!",
      dicaAdulto:
        "4 aparece muito no cotidiano — usar isso a favor consolida o símbolo.",
    },
    {
      tipo: "celebracao",
      medalha: "Conheço o 4",
      mascoteUrl: mascote,
      falaFinal: "O 4 é seu amigo!",
    },
  ],
  baseCientifica: "Símbolo-quantidade para 4 + ancoragem cotidiana.",
};

const dia07: AulaEI = {
  slug: "pip-f3-s2-d7-numeral-5",
  titulo: "Dia 7 · O número 5",
  icone: "5️⃣",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "O CINCO tem chapeuzinho! É a MÃO CHEIA. Cinco dedinhos, cinco coisinhas.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 5,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio: "Cinco estrelas. O desenho é o 5.",
      elogio: "CINCO!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o número CINCO?",
      opcoes: [
        opcaoNumeral(4, false, n4),
        opcaoNumeral(5, true, n5),
        opcaoNumeral(3, false, n3),
      ],
      feedbackAcerto: "Isso! Este é o 5!",
      feedbackErro: "O 5 tem chapeuzinho em cima.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Este número mostra quantas coisas?",
      opcoes: [
        { nome: "quatro joaninhas", imagemUrl: joaninha, correta: false, quantidade: 4 },
        { nome: "cinco maçãs", imagemUrl: maca, correta: true, quantidade: 5 },
        { nome: "três balões", imagemUrl: balao, correta: false, quantidade: 3 },
      ],
      feedbackAcerto: "CINCO! Mão cheia!",
      feedbackErro: "O 5 = mão cheia, cinco coisinhas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo combina com o número 5?",
      opcoes: [
        { nome: "duas flores", imagemUrl: flor, correta: false, quantidade: 2 },
        { nome: "cinco corações", imagemUrl: coracao, correta: true, quantidade: 5 },
        { nome: "sete bolas", imagemUrl: bola, correta: false, quantidade: 7 },
      ],
      feedbackAcerto: "Cinco corações = 5!",
      feedbackErro: "O 5 = cinco coisinhas.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · A mão do 5",
      convite:
        "A criança abre a mão inteira, mostra os 5 dedos e depois aponta o número 5 num papel. Repete 3 vezes.",
      dicaAdulto:
        "Ligar a mão inteira (5 dedos) ao símbolo 5 é ponte poderosa (Fuson).",
    },
    {
      tipo: "celebracao",
      medalha: "Conheço o 5",
      mascoteUrl: mascote,
      falaFinal: "Mão cheia = 5!",
    },
  ],
  baseCientifica: "Ponte perceptual mão-cheia ↔ numeral 5 (Fuson).",
};

const dia08: AulaEI = {
  slug: "pip-f3-s2-d8-numeral-6",
  titulo: "Dia 8 · O número 6",
  icone: "6️⃣",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "SEIS! Parece uma barriguinha com um risquinho em cima. É 5 e mais 1.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: balao,
      quantidade: 6,
      itemSingular: "balão",
      itemPlural: "balões",
      instrucaoAudio: "Seis balões. O desenho é o 6.",
      elogio: "SEIS!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o número SEIS?",
      opcoes: [
        opcaoNumeral(5, false, n5),
        opcaoNumeral(6, true, n6),
        opcaoNumeral(4, false, n4),
      ],
      feedbackAcerto: "Isso! Este é o 6!",
      feedbackErro: "O 6 tem uma barriguinha embaixo.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Este número mostra quantas coisas?",
      opcoes: [
        { nome: "cinco flores", imagemUrl: flor, correta: false, quantidade: 5 },
        { nome: "seis joaninhas", imagemUrl: joaninha, correta: true, quantidade: 6 },
        { nome: "quatro corações", imagemUrl: coracao, correta: false, quantidade: 4 },
      ],
      feedbackAcerto: "SEIS!",
      feedbackErro: "O 6 = seis coisinhas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo combina com o número 6?",
      opcoes: [
        { nome: "seis estrelas", imagemUrl: estrela, correta: true, quantidade: 6 },
        { nome: "três maçãs", imagemUrl: maca, correta: false, quantidade: 3 },
        { nome: "oito bolas", imagemUrl: bola, correta: false, quantidade: 8 },
      ],
      feedbackAcerto: "Seis estrelas = 6!",
      feedbackErro: "O 6 = seis coisinhas.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Meia dúzia",
      convite:
        "Meia dúzia = 6. Contem 6 uvas, 6 pedrinhas, 6 dedos (5 de uma mão + 1 da outra). Mostrem o número 6.",
      dicaAdulto:
        "6 = 5+1 é a base do 'contar a partir de 5' (Fuson) — ganho estratégico enorme.",
    },
    {
      tipo: "celebracao",
      medalha: "Conheço o 6",
      mascoteUrl: mascote,
      falaFinal: "6 = 5 e mais 1!",
    },
  ],
  baseCientifica: "6 como 5+1 — âncora estratégica (Fuson).",
};

const dia09: AulaEI = {
  slug: "pip-f3-s2-d9-mistura-4-5-6",
  titulo: "Dia 9 · Mistura 4, 5 e 6",
  icone: "🎲",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Prova relâmpago do 4, 5 e 6!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o 5?",
      opcoes: [
        opcaoNumeral(6, false, n6),
        opcaoNumeral(5, true, n5),
        opcaoNumeral(4, false, n4),
      ],
      feedbackAcerto: "5!",
      feedbackErro: "O 5 tem chapeuzinho.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o 4?",
      opcoes: [
        opcaoNumeral(4, true, n4),
        opcaoNumeral(6, false, n6),
        opcaoNumeral(5, false, n5),
      ],
      feedbackAcerto: "4!",
      feedbackErro: "O 4 parece cadeira virada.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o 6?",
      opcoes: [
        opcaoNumeral(5, false, n5),
        opcaoNumeral(4, false, n4),
        opcaoNumeral(6, true, n6),
      ],
      feedbackAcerto: "6!",
      feedbackErro: "O 6 tem barriguinha.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 5 flores?",
      opcoes: [
        opcaoNumeral(4, false, n4),
        opcaoNumeral(5, true, n5),
        opcaoNumeral(6, false, n6),
      ],
      feedbackAcerto: "5 flores = 5!",
      feedbackErro: "Conta as flores — são 5!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 6 joaninhas?",
      opcoes: [
        opcaoNumeral(5, false, n5),
        opcaoNumeral(6, true, n6),
        opcaoNumeral(4, false, n4),
      ],
      feedbackAcerto: "6 joaninhas = 6!",
      feedbackErro: "Conta as joaninhas — são 6!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Cartas 4-5-6",
      convite:
        "Escreva 4, 5 e 6 em cartinhas. Você fala um número — a criança aponta. Depois vira: ela fala, você aponta.",
      dicaAdulto:
        "Rodada rápida é ideal — 1 minuto, várias vezes ao dia, é mais efetivo que sessão longa.",
    },
    {
      tipo: "celebracao",
      medalha: "Reconhecedor de 6",
      mascoteUrl: mascote,
      falaFinal: "4, 5 e 6 no bolso!",
    },
  ],
  baseCientifica: "Prática distribuída — reconhecimento simbólico 4-5-6.",
};

const dia10: AulaEI = {
  slug: "pip-f3-s2-d10-medalha-s2",
  titulo: "Dia 10 · Amigo dos Números 4-5-6",
  icone: "🏅",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Fim da Semana 2! Prova geral: 1 até 6.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Este é qual número?",
      opcoes: [
        opcaoNumeral(3, false, n3),
        opcaoNumeral(6, true, n6),
        opcaoNumeral(2, false, n2),
      ],
      feedbackAcerto: "6!",
      feedbackErro: "É o 6 — barriguinha.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 4 balões?",
      opcoes: [
        opcaoNumeral(3, false, n3),
        opcaoNumeral(4, true, n4),
        opcaoNumeral(5, false, n5),
      ],
      feedbackAcerto: "4!",
      feedbackErro: "Conta os balões — são 4!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Este é qual número?",
      opcoes: [
        opcaoNumeral(5, true, n5),
        opcaoNumeral(1, false, n1),
        opcaoNumeral(3, false, n3),
      ],
      feedbackAcerto: "5!",
      feedbackErro: "É o 5 — chapeuzinho.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo combina com o número 6?",
      opcoes: [
        { nome: "seis maçãs", imagemUrl: maca, correta: true, quantidade: 6 },
        { nome: "duas flores", imagemUrl: flor, correta: false, quantidade: 2 },
        { nome: "quatro corações", imagemUrl: coracao, correta: false, quantidade: 4 },
      ],
      feedbackAcerto: "Seis maçãs = 6!",
      feedbackErro: "O 6 = seis coisas.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Escadinha 1-6",
      convite:
        "Escreva 1, 2, 3, 4, 5, 6 em cartinhas. A criança coloca EM ORDEM e diz cada nome. Depois embaralha e refaz.",
      dicaAdulto:
        "Marcadores da Semana 2: reconhecer 1 a 6 sem hesitar e associar cada um à quantidade. Semana 3 (7, 8, 9, 10 e 0) libera.",
    },
    {
      tipo: "celebracao",
      medalha: "Semana 2 · Amigo dos Números 4-5-6",
      mascoteUrl: mascote,
      falaFinal: "MEDALHA! Você conhece 1 a 6!",
    },
  ],
  baseCientifica: "Consolidação simbólica 1 a 6.",
};

// ============================================================
// SEMANA 3 · Numerais 7, 8, 9, 10 + Zero
// ============================================================

const dia11: AulaEI = {
  slug: "pip-f3-s3-d11-numeral-7",
  titulo: "Dia 11 · O número 7",
  icone: "7️⃣",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana 3! O SETE parece uma bengalinha ao contrário. É 5 e mais 2.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: borboleta,
      quantidade: 7,
      itemSingular: "borboleta",
      itemPlural: "borboletas",
      instrucaoAudio: "Sete borboletas. O desenho é o 7.",
      elogio: "SETE!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o número SETE?",
      opcoes: [
        opcaoNumeral(6, false, n6),
        opcaoNumeral(7, true, n7),
        opcaoNumeral(1, false, n1),
      ],
      feedbackAcerto: "Isso! Este é o 7!",
      feedbackErro: "O 7 parece uma bengalinha invertida.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo combina com o número 7?",
      opcoes: [
        { nome: "cinco balões", imagemUrl: balao, correta: false, quantidade: 5 },
        { nome: "sete estrelas", imagemUrl: estrela, correta: true, quantidade: 7 },
        { nome: "nove maçãs", imagemUrl: maca, correta: false, quantidade: 9 },
      ],
      feedbackAcerto: "Sete estrelas = 7!",
      feedbackErro: "O 7 = sete coisinhas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 7 joaninhas?",
      opcoes: [
        opcaoNumeral(6, false, n6),
        opcaoNumeral(7, true, n7),
        opcaoNumeral(5, false, n5),
      ],
      feedbackAcerto: "7 joaninhas = 7!",
      feedbackErro: "Conta as joaninhas — são 7!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · 7 na semana",
      convite:
        "A semana tem 7 dias. Conte-os apontando no calendário e mostre o número 7 escrito.",
      dicaAdulto:
        "Contextos culturais (dias da semana, 7 anões) reforçam o 7 na memória.",
    },
    {
      tipo: "celebracao",
      medalha: "Conheço o 7",
      mascoteUrl: mascote,
      falaFinal: "7 = 5 e mais 2!",
    },
  ],
  baseCientifica: "7 como 5+2 — âncora quinária (Fuson).",
};

const dia12: AulaEI = {
  slug: "pip-f3-s3-d12-numeral-8",
  titulo: "Dia 12 · O número 8",
  icone: "8️⃣",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "OITO é dois círculos empilhados! Parece um bonequinho.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: maca,
      quantidade: 8,
      itemSingular: "maçã",
      itemPlural: "maçãs",
      instrucaoAudio: "Oito maçãs. O desenho é o 8.",
      elogio: "OITO!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o número OITO?",
      opcoes: [
        opcaoNumeral(7, false, n7),
        opcaoNumeral(8, true, n8),
        opcaoNumeral(6, false, n6),
      ],
      feedbackAcerto: "Isso! Este é o 8!",
      feedbackErro: "O 8 parece dois círculos.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo combina com o número 8?",
      opcoes: [
        { nome: "oito borboletas", imagemUrl: borboleta, correta: true, quantidade: 8 },
        { nome: "cinco flores", imagemUrl: flor, correta: false, quantidade: 5 },
        { nome: "três joaninhas", imagemUrl: joaninha, correta: false, quantidade: 3 },
      ],
      feedbackAcerto: "Oito borboletas = 8!",
      feedbackErro: "O 8 = oito coisinhas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 8 corações?",
      opcoes: [
        opcaoNumeral(7, false, n7),
        opcaoNumeral(9, false, n9),
        opcaoNumeral(8, true, n8),
      ],
      feedbackAcerto: "8 corações = 8!",
      feedbackErro: "Conta os corações — são 8!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Bolinhas do 8",
      convite:
        "Desenhem juntos o número 8: um círculo em cima, outro embaixo. Depois separem 8 uvas e contem.",
      dicaAdulto:
        "Escrever/desenhar o numeral fortalece memória motora (Longcamp et al.).",
    },
    {
      tipo: "celebracao",
      medalha: "Conheço o 8",
      mascoteUrl: mascote,
      falaFinal: "O 8 é seu amigo!",
    },
  ],
  baseCientifica: "Memória motora do numeral 8 (Longcamp).",
};

const dia13: AulaEI = {
  slug: "pip-f3-s3-d13-numeral-9",
  titulo: "Dia 13 · O número 9",
  icone: "9️⃣",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "NOVE é como o 6 de cabeça pra baixo! Uma barriguinha em cima, um risco pra baixo.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 9,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Nove flores. O desenho é o 9.",
      elogio: "NOVE!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o número NOVE?",
      opcoes: [
        opcaoNumeral(6, false, n6),
        opcaoNumeral(9, true, n9),
        opcaoNumeral(8, false, n8),
      ],
      feedbackAcerto: "Isso! Este é o 9!",
      feedbackErro: "O 9 tem a barriga em cima.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo combina com o número 9?",
      opcoes: [
        { nome: "nove balões", imagemUrl: balao, correta: true, quantidade: 9 },
        { nome: "sete bolas", imagemUrl: bola, correta: false, quantidade: 7 },
        { nome: "seis estrelas", imagemUrl: estrela, correta: false, quantidade: 6 },
      ],
      feedbackAcerto: "Nove balões = 9!",
      feedbackErro: "O 9 = nove coisinhas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 9 maçãs?",
      opcoes: [
        opcaoNumeral(8, false, n8),
        opcaoNumeral(6, false, n6),
        opcaoNumeral(9, true, n9),
      ],
      feedbackAcerto: "9 maçãs = 9!",
      feedbackErro: "Conta as maçãs — são 9!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Quase 10",
      convite:
        "9 é 1 antes do 10. Contem 9 objetos, digam 'falta 1 pra 10' e mostrem o 9.",
      dicaAdulto:
        "Ver o 9 como 10-1 prepara subtração e composição do 10.",
    },
    {
      tipo: "celebracao",
      medalha: "Conheço o 9",
      mascoteUrl: mascote,
      falaFinal: "9 é quase 10!",
    },
  ],
  baseCientifica: "9 como 10-1 — ponte para composição do 10.",
};

const dia14: AulaEI = {
  slug: "pip-f3-s3-d14-numeral-10",
  titulo: "Dia 14 · O número 10",
  icone: "🔟",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "DEZ é ESPECIAL: são DOIS DESENHOS juntos, o 1 e o 0. As duas mãos inteiras!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 10,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio: "Dez estrelas. O desenho é o 10.",
      elogio: "DEZ!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o número DEZ?",
      opcoes: [
        opcaoNumeral(1, false, n1, "1"),
        opcaoNumeral(10, true, n10, "10"),
        opcaoNumeral(9, false, n9),
      ],
      feedbackAcerto: "Isso! Este é o 10!",
      feedbackErro: "O 10 tem DOIS desenhos: 1 e 0.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo combina com o número 10?",
      opcoes: [
        { nome: "cinco corações", imagemUrl: coracao, correta: false, quantidade: 5 },
        { nome: "dez joaninhas", imagemUrl: joaninha, correta: true, quantidade: 10 },
        { nome: "oito balões", imagemUrl: balao, correta: false, quantidade: 8 },
      ],
      feedbackAcerto: "Dez joaninhas = 10!",
      feedbackErro: "O 10 = dez coisinhas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 10 flores?",
      opcoes: [
        opcaoNumeral(9, false, n9),
        opcaoNumeral(10, true, n10, "10"),
        opcaoNumeral(8, false, n8),
      ],
      feedbackAcerto: "10 flores = 10!",
      feedbackErro: "Conta as flores — são 10!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Duas mãos",
      convite:
        "Abram as DUAS mãos: 10 dedos. Contem juntos. Depois mostrem o número 10 escrito.",
      dicaAdulto:
        "10 escrito com 2 dígitos é o primeiro passo pra base 10 — introduza sem pressa.",
    },
    {
      tipo: "celebracao",
      medalha: "Conheço o 10",
      mascoteUrl: mascote,
      falaFinal: "10 = as duas mãos!",
    },
  ],
  baseCientifica: "Introdução informal à base 10 — 1 e 0 juntos.",
};

const dia15: AulaEI = {
  slug: "pip-f3-s3-d15-numeral-zero",
  titulo: "Dia 15 · O número 0 (nenhum)",
  icone: "0️⃣",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Segredo poderoso: o ZERO! É quando NÃO TEM NADA. Zero bolas = mãos vazias!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o número ZERO?",
      opcoes: [
        opcaoNumeral(0, true, n0, "0"),
        opcaoNumeral(6, false, n6),
        opcaoNumeral(9, false, n9),
      ],
      feedbackAcerto: "Isso! Este é o 0!",
      feedbackErro: "O 0 é uma bolinha só.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "O Pip comeu TODAS as maçãs. Quantas SOBRARAM? Qual número mostra isso?",
      opcoes: [
        opcaoNumeral(1, false, n1),
        opcaoNumeral(0, true, n0, "0"),
        opcaoNumeral(2, false, n2),
      ],
      feedbackAcerto: "ZERO! Não sobrou nenhuma!",
      feedbackErro: "Se comeu tudo, sobrou ZERO.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o 0?",
      opcoes: [
        opcaoNumeral(8, false, n8),
        opcaoNumeral(3, false, n3),
        opcaoNumeral(0, true, n0, "0"),
      ],
      feedbackAcerto: "0!",
      feedbackErro: "O 0 é uma bolinha vazia.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "A caixa está VAZIA. Qual número diz 'nenhum'?",
      opcoes: [
        opcaoNumeral(1, false, n1),
        opcaoNumeral(0, true, n0, "0"),
        opcaoNumeral(2, false, n2),
      ],
      feedbackAcerto: "ZERO! Nenhum!",
      feedbackErro: "Vazio = ZERO.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Cadê? Zero!",
      convite:
        "Pergunte: 'quantos elefantes tem na sala?' — resposta: ZERO! Repita com bicho-preguiça, dinossauro, girafa. Toda vez mostrem o 0.",
      dicaAdulto:
        "Zero como AUSÊNCIA é conceito abstrato — humor ajuda a fixar. Semana 3 fecha 0-10.",
    },
    {
      tipo: "celebracao",
      medalha: "Semana 3 · Conheço 0 a 10",
      mascoteUrl: mascote,
      falaFinal: "MEDALHA! Você conhece 0 até 10!",
    },
  ],
  baseCientifica: "Zero como conceito de ausência — abstração matemática.",
};

// ============================================================
// SEMANA 4 · Ligar quantidade ↔ numeral + DIPLOMA
// ============================================================

const dia16: AulaEI = {
  slug: "pip-f3-s4-d16-quantos-tem-numeral",
  titulo: "Dia 16 · Quantos tem? Escolhe o número",
  icone: "🔗",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana 4! Agora liga TUDO: eu mostro coisinhas, você escolhe o NÚMERO certo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 4,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio: "Conta as bolas primeiro.",
      elogio: "QUATRO!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra QUATRO?",
      opcoes: [
        opcaoNumeral(3, false, n3),
        opcaoNumeral(4, true, n4),
        opcaoNumeral(5, false, n5),
      ],
      feedbackAcerto: "4!",
      feedbackErro: "4 bolas = número 4.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: coracao,
      quantidade: 7,
      itemSingular: "coração",
      itemPlural: "corações",
      instrucaoAudio: "Conta os corações.",
      elogio: "SETE!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra SETE?",
      opcoes: [
        opcaoNumeral(6, false, n6),
        opcaoNumeral(8, false, n8),
        opcaoNumeral(7, true, n7),
      ],
      feedbackAcerto: "7!",
      feedbackErro: "7 corações = número 7.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 10,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio: "Conta as joaninhas.",
      elogio: "DEZ!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra DEZ?",
      opcoes: [
        opcaoNumeral(1, false, n1),
        opcaoNumeral(10, true, n10, "10"),
        opcaoNumeral(9, false, n9),
      ],
      feedbackAcerto: "10!",
      feedbackErro: "10 tem dois desenhos: 1 e 0.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Placas em casa",
      convite:
        "Escreva os números 0 a 10 em papéis. A criança conta um grupo de objetos e coloca a plaquinha certa em cima.",
      dicaAdulto:
        "Etiquetar quantidades reforça a ligação símbolo↔conjunto (Ramani & Siegler).",
    },
    {
      tipo: "celebracao",
      medalha: "Ligador de Números",
      mascoteUrl: mascote,
      falaFinal: "Contou e escolheu o número certo!",
    },
  ],
  baseCientifica: "Mapeamento quantidade→numeral (Ramani & Siegler).",
};

const dia17: AulaEI = {
  slug: "pip-f3-s4-d17-numero-quantidade",
  titulo: "Dia 17 · Vejo o número, mostro a quantidade",
  icone: "🎯",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Agora o CAMINHO INVERSO: eu mostro o NÚMERO, você escolhe o grupo certo!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O número é 5. Qual grupo tem 5?",
      opcoes: [
        { nome: "três flores", imagemUrl: flor, correta: false, quantidade: 3 },
        { nome: "cinco balões", imagemUrl: balao, correta: true, quantidade: 5 },
        { nome: "sete estrelas", imagemUrl: estrela, correta: false, quantidade: 7 },
      ],
      feedbackAcerto: "5 balões = 5!",
      feedbackErro: "5 tem cinco coisas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O número é 8. Qual grupo tem 8?",
      opcoes: [
        { nome: "oito joaninhas", imagemUrl: joaninha, correta: true, quantidade: 8 },
        { nome: "seis maçãs", imagemUrl: maca, correta: false, quantidade: 6 },
        { nome: "dez bolas", imagemUrl: bola, correta: false, quantidade: 10 },
      ],
      feedbackAcerto: "8 joaninhas = 8!",
      feedbackErro: "8 tem oito coisas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O número é 3. Qual grupo tem 3?",
      opcoes: [
        { nome: "três corações", imagemUrl: coracao, correta: true, quantidade: 3 },
        { nome: "cinco borboletas", imagemUrl: borboleta, correta: false, quantidade: 5 },
        { nome: "duas flores", imagemUrl: flor, correta: false, quantidade: 2 },
      ],
      feedbackAcerto: "3 corações = 3!",
      feedbackErro: "3 tem três coisas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O número é 9. Qual grupo tem 9?",
      opcoes: [
        { nome: "sete estrelas", imagemUrl: estrela, correta: false, quantidade: 7 },
        { nome: "nove balões", imagemUrl: balao, correta: true, quantidade: 9 },
        { nome: "seis maçãs", imagemUrl: maca, correta: false, quantidade: 6 },
      ],
      feedbackAcerto: "9 balões = 9!",
      feedbackErro: "9 tem nove coisas.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Pedido do número",
      convite:
        "Você mostra um número (ex.: 6). A criança separa 6 objetos. Repita com 4, 8, 10, 3.",
      dicaAdulto:
        "Ir do símbolo à quantidade é a direção mais difícil — pratique com paciência.",
    },
    {
      tipo: "celebracao",
      medalha: "Tradutor de Número",
      mascoteUrl: mascote,
      falaFinal: "Vejo o número, mostro quantos!",
    },
  ],
  baseCientifica: "Mapeamento inverso numeral→quantidade (mais exigente).",
};

const dia18: AulaEI = {
  slug: "pip-f3-s4-d18-ordem-numeros",
  titulo: "Dia 18 · A ordem dos números",
  icone: "🪜",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Os números têm uma ORDEM que nunca muda: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número vem DEPOIS do 4?",
      opcoes: [
        opcaoNumeral(3, false, n3),
        opcaoNumeral(5, true, n5),
        opcaoNumeral(6, false, n6),
      ],
      feedbackAcerto: "5 vem depois do 4!",
      feedbackErro: "4, 5, 6… 5 vem depois do 4.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número vem ANTES do 7?",
      opcoes: [
        opcaoNumeral(6, true, n6),
        opcaoNumeral(8, false, n8),
        opcaoNumeral(5, false, n5),
      ],
      feedbackAcerto: "6 vem antes do 7!",
      feedbackErro: "7, 6, 5… 6 vem antes do 7.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número vem DEPOIS do 9?",
      opcoes: [
        opcaoNumeral(8, false, n8),
        opcaoNumeral(10, true, n10, "10"),
        opcaoNumeral(1, false, n1),
      ],
      feedbackAcerto: "10 vem depois do 9!",
      feedbackErro: "9, 10 — 10 vem depois do 9.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número vem ENTRE 2 e 4?",
      opcoes: [
        opcaoNumeral(1, false, n1),
        opcaoNumeral(3, true, n3),
        opcaoNumeral(5, false, n5),
      ],
      feedbackAcerto: "3 fica entre 2 e 4!",
      feedbackErro: "2, 3, 4 — o 3 fica no meio.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número vem ANTES do 1?",
      opcoes: [
        opcaoNumeral(0, true, n0, "0"),
        opcaoNumeral(2, false, n2),
        opcaoNumeral(9, false, n9),
      ],
      feedbackAcerto: "ZERO vem antes do 1!",
      feedbackErro: "Antes do 1 é o 0 (nenhum).",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Escadinha 0-10",
      convite:
        "Escrevam 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 em cartinhas. A criança coloca em ORDEM crescente. Depois embaralha e refaz.",
      dicaAdulto:
        "Sequenciar cartas físicas fortalece a linha numérica mental (Ramani & Siegler).",
    },
    {
      tipo: "celebracao",
      medalha: "Ordenador de Números",
      mascoteUrl: mascote,
      falaFinal: "Você sabe a ORDEM de 0 a 10!",
    },
  ],
  baseCientifica: "Ordem estável no domínio simbólico (linha numérica mental).",
};

const dia19: AulaEI = {
  slug: "pip-f3-s4-d19-prova-do-diploma",
  titulo: "Dia 19 · Prova do Diploma",
  icone: "🎯",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Amanhã é o DIPLOMA! Hoje é a prova geral: números, quantidades e ordem.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Este é qual número?",
      opcoes: [
        opcaoNumeral(6, false, n6),
        opcaoNumeral(7, true, n7),
        opcaoNumeral(9, false, n9),
      ],
      feedbackAcerto: "7!",
      feedbackErro: "É o 7 — bengalinha invertida.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 5 corações?",
      opcoes: [
        opcaoNumeral(4, false, n4),
        opcaoNumeral(5, true, n5),
        opcaoNumeral(6, false, n6),
      ],
      feedbackAcerto: "5!",
      feedbackErro: "Conta os corações — são 5!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O número é 8. Qual grupo tem 8?",
      opcoes: [
        { nome: "oito flores", imagemUrl: flor, correta: true, quantidade: 8 },
        { nome: "cinco balões", imagemUrl: balao, correta: false, quantidade: 5 },
        { nome: "dez estrelas", imagemUrl: estrela, correta: false, quantidade: 10 },
      ],
      feedbackAcerto: "8 flores = 8!",
      feedbackErro: "8 tem oito coisas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual vem DEPOIS do 6?",
      opcoes: [
        opcaoNumeral(5, false, n5),
        opcaoNumeral(7, true, n7),
        opcaoNumeral(8, false, n8),
      ],
      feedbackAcerto: "7 vem depois do 6!",
      feedbackErro: "6, 7, 8 — 7 vem depois.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Vazio. Qual número diz 'nenhum'?",
      opcoes: [
        opcaoNumeral(1, false, n1),
        opcaoNumeral(0, true, n0, "0"),
        opcaoNumeral(10, false, n10, "10"),
      ],
      feedbackAcerto: "ZERO!",
      feedbackErro: "Nada = zero.",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara.",
      perguntaAudio: "Qual grupo tem MAIS maçãs?",
      imagemUrl: maca,
      itemPlural: "maçãs",
      alvo: "mais",
      opcoes: [
        { qtd: 9, correta: true },
        { qtd: 3, correta: false },
      ],
      feedbackAcerto: "9 é mais que 3!",
      feedbackErro: "9 é maior. Conta pra confirmar!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Ensaio do diploma",
      convite:
        "A criança faz o desfile completo: aponta cada número de 0 a 10 e fala o nome. Amanhã é a formatura!",
      dicaAdulto:
        "Se algum número ainda titubear, volte 1 dia da semana correspondente antes do Dia 20.",
    },
    {
      tipo: "celebracao",
      medalha: "Prova do Pip",
      mascoteUrl: mascote,
      falaFinal: "Passou! Amanhã é o DIPLOMA!",
    },
  ],
  baseCientifica: "Avaliação integrativa Fase 3.",
};

const dia20: AulaEI = {
  slug: "pip-f3-s4-d20-diploma-fase3",
  titulo: "Dia 20 · DIPLOMA · Leitor de Números",
  icone: "🎓",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "DIA DO DIPLOMA! Você aprendeu os números de 0 a 10 e sabe ligar cada um à quantidade certa!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é o número 10?",
      opcoes: [
        opcaoNumeral(1, false, n1),
        opcaoNumeral(10, true, n10, "10"),
        opcaoNumeral(0, false, n0, "0"),
      ],
      feedbackAcerto: "10! As duas mãos!",
      feedbackErro: "10 tem DOIS desenhos: 1 e 0.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual número mostra 6 balões?",
      opcoes: [
        opcaoNumeral(5, false, n5),
        opcaoNumeral(6, true, n6),
        opcaoNumeral(7, false, n7),
      ],
      feedbackAcerto: "6!",
      feedbackErro: "Conta os balões — são 6!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O número é 4. Qual grupo tem 4?",
      opcoes: [
        { nome: "duas bolas", imagemUrl: bola, correta: false, quantidade: 2 },
        { nome: "quatro joaninhas", imagemUrl: joaninha, correta: true, quantidade: 4 },
        { nome: "sete estrelas", imagemUrl: estrela, correta: false, quantidade: 7 },
      ],
      feedbackAcerto: "4 joaninhas = 4!",
      feedbackErro: "4 tem quatro coisas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual vem ANTES do 3?",
      opcoes: [
        opcaoNumeral(2, true, n2),
        opcaoNumeral(4, false, n4),
        opcaoNumeral(1, false, n1),
      ],
      feedbackAcerto: "2 vem antes do 3!",
      feedbackErro: "3, 2, 1 — 2 vem antes do 3.",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Última!",
      perguntaAudio: "Qual grupo tem MENOS flores?",
      imagemUrl: flor,
      itemPlural: "flores",
      alvo: "menos",
      opcoes: [
        { qtd: 2, correta: true },
        { qtd: 10, correta: false },
      ],
      feedbackAcerto: "2 é menos que 10!",
      feedbackErro: "2 é menor. Conta pra confirmar!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Cerimônia",
      convite:
        "Imprima ou mostre o diploma pra criança. Peça pra ela mostrar todos os números de 0 a 10 em ORDEM na frente da família. Aplausos!",
      dicaAdulto:
        "Ritualizar consolida autoconfiança (Dweck). Fase 4 (linha numérica mental) libera na sequência.",
    },
    {
      tipo: "celebracao",
      medalha: "DIPLOMA · Leitor de Números (0-10)",
      mascoteUrl: mascote,
      falaFinal:
        "DIPLOMA CONQUISTADO! Você é oficialmente LEITOR DE NÚMEROS! Parabéns!",
    },
  ],
  baseCientifica: "Cerimônia de fechamento Fase 3 (Dweck).",
};

// ============================================================
// CURSO
// ============================================================

export const cursoContarComPipFase3: CursoEI = {
  slug: "contar-com-pip-f3",
  serie: "pre2",
  serieLabel: "Contar com Pip · Fase 3",
  titulo: "Fase 3 · Cardinalidade + Numeral (0 a 10)",
  descricao:
    "Reconhecer os números escritos de 0 a 10 e ligar cada um à quantidade certa.",
  corPrimaria: "#a855f7",
  corSecundaria: "#3b0764",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "pip-f3-s1",
      numero: 1,
      titulo: "Semana 1 · Amigo dos Números 1-2-3",
      subtitulo: "Reconhecer os numerais 1, 2 e 3",
      aulas: [dia01, dia02, dia03, dia04, dia05],
    },
    {
      slug: "pip-f3-s2",
      numero: 2,
      titulo: "Semana 2 · Amigo dos Números 4-5-6",
      subtitulo: "Reconhecer os numerais 4, 5 e 6",
      aulas: [dia06, dia07, dia08, dia09, dia10],
    },
    {
      slug: "pip-f3-s3",
      numero: 3,
      titulo: "Semana 3 · Conheço 0 a 10",
      subtitulo: "Numerais 7, 8, 9, 10 e o zero",
      aulas: [dia11, dia12, dia13, dia14, dia15],
    },
    {
      slug: "pip-f3-s4",
      numero: 4,
      titulo: "Semana 4 · Leitor de Números (DIPLOMA)",
      subtitulo: "Ligar quantidade↔numeral, ordem e diploma da Fase 3",
      aulas: [dia16, dia17, dia18, dia19, dia20],
    },
  ],
};

export function getAulaContarComPipFase3(slug: string): AulaEI | undefined {
  for (const u of cursoContarComPipFase3.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
