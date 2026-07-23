/**
 * Fase 4 · Sílabas Simples CV (10 aulas · dlx-31 a dlx-40)
 * Orton-Gillingham: a criança já ouve o fonema (Fases 1-3) e conhece as vogais.
 * Agora aprende a JUNTAR consoante + vogal → primeira leitura decodificada.
 *
 * Etapa B4 · Auditoria TTS aplicada:
 *   - Pseudo-alongações em MAIÚSCULO (`MMMA`, `LLLA`, `FFFA`, `VVVA`) → "mmm... a. Má!"
 *   - Operações estilo matemática ("MMM + A = MA") → "mmm mais a dá má"
 *   - Sílabas soltas em CAPS no fim das falas ganharam acento tônico ("MA!" → "Má!")
 *     pra o TTS ler como sílaba clara, não como sopro fraco.
 *   - Segmentação visual (palavra/silabas/enfase) permanece em MAIÚSCULO.
 */
import type { AulaDlx } from "../types";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

// ══════════════════════════════════════════════════════════
// AULA 31 · Família do M (MA · ME · MI · MO · MU)
// ══════════════════════════════════════════════════════════
export const dlx31: AulaDlx = {
  slug: "dlx-31-familia-m",
  numero: 31,
  fase: 4,
  fone: "MA-ME-MI-MO-MU",
  titulo: "Família do M",
  objetivo: "Ler as sílabas do M + cada vogal e reconhecer em palavras curtas.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Chegou a hora mais legal! A gente vai juntar o M com cada vogal. Presta atenção: mmm mais a dá má! Vem comigo.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "M com a: mmm... a. Má!", palavra: "MA", enfase: "MA" },
    { tipo: "escuta", fala: "M com e: mmm... e. Mé!", palavra: "ME", enfase: "ME" },
    { tipo: "escuta", fala: "M com i: mmm... i. Mi!", palavra: "MI", enfase: "MI" },
    { tipo: "escuta", fala: "M com o: mmm... o. Mó!", palavra: "MO", enfase: "MO" },
    { tipo: "escuta", fala: "M com u: mmm... u. Mu!", palavra: "MU", enfase: "MU" },
    {
      tipo: "silabas",
      fala: "Toca nas sílabas de mala: má-la.",
      palavra: "MALA",
      silabas: ["MA", "LA"],
    },
    {
      tipo: "silabas",
      fala: "Agora mesa: mé-sa.",
      palavra: "MESA",
      silabas: ["ME", "SA"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra começa com mó?",
      opcoes: [
        { palavra: "MOTO", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "SAPO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Você acabou de ler! Consoante mais vogal vira sílaba. Sílaba mais sílaba vira palavra.", imagem: pipVet },
    { tipo: "fim", fala: "Família do M dominada!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 32 · Família do P (PA · PE · PI · PO · PU)
// ══════════════════════════════════════════════════════════
export const dlx32: AulaDlx = {
  slug: "dlx-32-familia-p",
  numero: 32,
  fase: 4,
  fone: "PA-PE-PI-PO-PU",
  titulo: "Família do P",
  objetivo: "Ler as sílabas do P + cada vogal.",
  cenas: [
    {
      tipo: "abertura",
      fala: "O P é um som curtinho. Solta o ar de uma vez: pê! Agora junta com a vogal. Vem!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "P com a: pá!", palavra: "PA", enfase: "PA" },
    { tipo: "escuta", fala: "P com e: pé!", palavra: "PE", enfase: "PE" },
    { tipo: "escuta", fala: "P com i: pi!", palavra: "PI", enfase: "PI" },
    { tipo: "escuta", fala: "P com o: pó!", palavra: "PO", enfase: "PO" },
    { tipo: "escuta", fala: "P com u: pu!", palavra: "PU", enfase: "PU" },
    {
      tipo: "silabas",
      fala: "Toca em pá-to.",
      palavra: "PATO",
      silabas: ["PA", "TO"],
    },
    {
      tipo: "silabas",
      fala: "Agora pa-ne-la.",
      palavra: "PANELA",
      silabas: ["PA", "NE", "LA"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra começa com pá?",
      opcoes: [
        { palavra: "PATO", correta: true },
        { palavra: "MESA", correta: false },
        { palavra: "LUA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual começa com pó?",
      opcoes: [
        { palavra: "PORTA", correta: true },
        { palavra: "MALA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "O P é sopro rápido. Junta com a vogal e vira sílaba forte.", imagem: pipVet },
    { tipo: "fim", fala: "Família do P dominada!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 33 · Família do T (TA · TE · TI · TO · TU)
// ══════════════════════════════════════════════════════════
export const dlx33: AulaDlx = {
  slug: "dlx-33-familia-t",
  numero: 33,
  fase: 4,
  fone: "TA-TE-TI-TO-TU",
  titulo: "Família do T",
  objetivo: "Ler as sílabas do T + cada vogal.",
  cenas: [
    {
      tipo: "abertura",
      fala: "O T também é curtinho. A língua bate atrás dos dentes: tê! Vem junto.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "T com a: tá!", palavra: "TA", enfase: "TA" },
    { tipo: "escuta", fala: "T com e: tê!", palavra: "TE", enfase: "TE" },
    { tipo: "escuta", fala: "T com i: ti!", palavra: "TI", enfase: "TI" },
    { tipo: "escuta", fala: "T com o: tó!", palavra: "TO", enfase: "TO" },
    { tipo: "escuta", fala: "T com u: tu!", palavra: "TU", enfase: "TU" },
    {
      tipo: "silabas",
      fala: "Toca em tin-ta.",
      palavra: "TINTA",
      silabas: ["TIN", "TA"],
    },
    {
      tipo: "silabas",
      fala: "Agora tar-ta-ru-ga. É longa, vamo devagar.",
      palavra: "TARTARUGA",
      silabas: ["TAR", "TA", "RU", "GA"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra começa com ti?",
      opcoes: [
        { palavra: "TINTA", correta: true },
        { palavra: "PATO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Língua atrás dos dentes. T mais vogal vira sílaba.", imagem: pipVet },
    { tipo: "fim", fala: "Família do T dominada!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 34 · Família do L (LA · LE · LI · LO · LU)
// ══════════════════════════════════════════════════════════
export const dlx34: AulaDlx = {
  slug: "dlx-34-familia-l",
  numero: 34,
  fase: 4,
  fone: "LA-LE-LI-LO-LU",
  titulo: "Família do L",
  objetivo: "Ler as sílabas do L + cada vogal.",
  cenas: [
    {
      tipo: "abertura",
      fala: "O L é lisinho. A língua encosta em cima e o som escorrega: lll. Junta com a vogal.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "L com a: lll... a. Lá!", palavra: "LA", enfase: "LA" },
    { tipo: "escuta", fala: "L com e: lll... e. Lé!", palavra: "LE", enfase: "LE" },
    { tipo: "escuta", fala: "L com i: lll... i. Li!", palavra: "LI", enfase: "LI" },
    { tipo: "escuta", fala: "L com o: lll... o. Ló!", palavra: "LO", enfase: "LO" },
    { tipo: "escuta", fala: "L com u: lll... u. Lu!", palavra: "LU", enfase: "LU" },
    {
      tipo: "silabas",
      fala: "Toca em lu-a.",
      palavra: "LUA",
      silabas: ["LU", "A"],
    },
    {
      tipo: "silabas",
      fala: "Agora li-vro.",
      palavra: "LIVRO",
      silabas: ["LI", "VRO"],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com lu?",
      opcoes: [
        { palavra: "LUA", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "MESA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual começa com lé?",
      opcoes: [
        { palavra: "LEÃO", correta: true },
        { palavra: "MALA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "O L é bem lisinho, escorrega.", imagem: pipVet },
    { tipo: "fim", fala: "Família do L dominada!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 35 · Família do F (FA · FE · FI · FO · FU)
// ══════════════════════════════════════════════════════════
export const dlx35: AulaDlx = {
  slug: "dlx-35-familia-f",
  numero: 35,
  fase: 4,
  fone: "FA-FE-FI-FO-FU",
  titulo: "Família do F",
  objetivo: "Ler as sílabas do F + cada vogal.",
  cenas: [
    {
      tipo: "abertura",
      fala: "O F é sopro. Dente em cima do lábio de baixo: fff. Junta com a vogal!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "F com a: fff... a. Fá!", palavra: "FA", enfase: "FA" },
    { tipo: "escuta", fala: "F com e: fff... e. Fé!", palavra: "FE", enfase: "FE" },
    { tipo: "escuta", fala: "F com i: fff... i. Fi!", palavra: "FI", enfase: "FI" },
    { tipo: "escuta", fala: "F com o: fff... o. Fó!", palavra: "FO", enfase: "FO" },
    { tipo: "escuta", fala: "F com u: fff... u. Fu!", palavra: "FU", enfase: "FU" },
    {
      tipo: "silabas",
      fala: "Toca em fá-ca.",
      palavra: "FACA",
      silabas: ["FA", "CA"],
    },
    {
      tipo: "silabas",
      fala: "Agora fá-da.",
      palavra: "FADA",
      silabas: ["FA", "DA"],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com fó?",
      opcoes: [
        { palavra: "FOCA", correta: true },
        { palavra: "LUA", correta: false },
        { palavra: "MESA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "F é sopro no lábio. Fff mais vogal vira sílaba.", imagem: pipVet },
    { tipo: "fim", fala: "Família do F dominada!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 36 · Família do V (VA · VE · VI · VO · VU)
// ══════════════════════════════════════════════════════════
export const dlx36: AulaDlx = {
  slug: "dlx-36-familia-v",
  numero: 36,
  fase: 4,
  fone: "VA-VE-VI-VO-VU",
  titulo: "Família do V",
  objetivo: "Ler as sílabas do V + cada vogal. Contraste com F.",
  cenas: [
    {
      tipo: "abertura",
      fala: "O V parece o F, mas vibra! Coloca a mão no pescoço: vvv. Sente vibrar? Junta com a vogal!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "V com a: vvv... a. Vá!", palavra: "VA", enfase: "VA" },
    { tipo: "escuta", fala: "V com e: vvv... e. Vê!", palavra: "VE", enfase: "VE" },
    { tipo: "escuta", fala: "V com i: vvv... i. Vi!", palavra: "VI", enfase: "VI" },
    { tipo: "escuta", fala: "V com o: vvv... o. Vó!", palavra: "VO", enfase: "VO" },
    { tipo: "escuta", fala: "V com u: vvv... u. Vu!", palavra: "VU", enfase: "VU" },
    {
      tipo: "silabas",
      fala: "Toca em vá-ca.",
      palavra: "VACA",
      silabas: ["VA", "CA"],
    },
    {
      tipo: "silabas",
      fala: "Agora vê-la.",
      palavra: "VELA",
      silabas: ["VE", "LA"],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com vá?",
      opcoes: [
        { palavra: "VACA", correta: true },
        { palavra: "FACA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual começa com vê?",
      opcoes: [
        { palavra: "VELA", correta: true },
        { palavra: "MESA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "F é sopro. V vibra. Mesma boca, sons diferentes.", imagem: pipVet },
    { tipo: "fim", fala: "Família do V dominada!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 37 · Família do B (BA · BE · BI · BO · BU)
// ══════════════════════════════════════════════════════════
export const dlx37: AulaDlx = {
  slug: "dlx-37-familia-b",
  numero: 37,
  fase: 4,
  fone: "BA-BE-BI-BO-BU",
  titulo: "Família do B",
  objetivo: "Ler as sílabas do B + cada vogal. Contraste com P.",
  cenas: [
    {
      tipo: "abertura",
      fala: "O B fecha os lábios e solta com voz: bê! Igual ao P, mas com voz. Vem!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "B com a: bá!", palavra: "BA", enfase: "BA" },
    { tipo: "escuta", fala: "B com e: bê!", palavra: "BE", enfase: "BE" },
    { tipo: "escuta", fala: "B com i: bi!", palavra: "BI", enfase: "BI" },
    { tipo: "escuta", fala: "B com o: bó!", palavra: "BO", enfase: "BO" },
    { tipo: "escuta", fala: "B com u: bu!", palavra: "BU", enfase: "BU" },
    {
      tipo: "silabas",
      fala: "Toca em bó-la.",
      palavra: "BOLA",
      silabas: ["BO", "LA"],
    },
    {
      tipo: "silabas",
      fala: "Agora a-bê-lha.",
      palavra: "ABELHA",
      silabas: ["A", "BE", "LHA"],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com bó?",
      opcoes: [
        { palavra: "BOLA", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "MESA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "P é seco. B tem voz. Coloca a mão no pescoço e sente.", imagem: pipVet },
    { tipo: "fim", fala: "Família do B dominada!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 38 · Família do C (CA · CO · CU) — som duro
// ══════════════════════════════════════════════════════════
export const dlx38: AulaDlx = {
  slug: "dlx-38-familia-c",
  numero: 38,
  fase: 4,
  fone: "CA-CO-CU",
  titulo: "Família do C (som duro)",
  objetivo: "Ler CA, CO e CU. Regra: C+A/O/U faz som duro de /k/.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Segredo do C! Com a, o e u ele faz um som forte, tipo cá! Com e e i ele muda, mas isso é depois. Hoje só som forte.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "C com a: cá!", palavra: "CA", enfase: "CA" },
    { tipo: "escuta", fala: "C com o: có!", palavra: "CO", enfase: "CO" },
    { tipo: "escuta", fala: "C com u: cu.", palavra: "CU", enfase: "CU" },
    {
      tipo: "silabas",
      fala: "Toca em cá-sa.",
      palavra: "CASA",
      silabas: ["CA", "SA"],
    },
    {
      tipo: "silabas",
      fala: "Agora có-po.",
      palavra: "COPO",
      silabas: ["CO", "PO"],
    },
    {
      tipo: "silabas",
      fala: "E co-ru-ja.",
      palavra: "CORUJA",
      silabas: ["CO", "RU", "JA"],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com cá?",
      opcoes: [
        { palavra: "CASA", correta: true },
        { palavra: "MESA", correta: false },
        { palavra: "BOLA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual começa com có?",
      opcoes: [
        { palavra: "COPO", correta: true },
        { palavra: "VELA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "C mais a, o, u dá som forte, tipo cá.", imagem: pipVet },
    { tipo: "fim", fala: "Família do C dominada!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 39 · Revisão M · P · T · L
// ══════════════════════════════════════════════════════════
export const dlx39: AulaDlx = {
  slug: "dlx-39-revisao-mptl",
  numero: 39,
  fase: 4,
  fone: "M · P · T · L",
  titulo: "Revisão: M, P, T, L",
  objetivo: "Discriminar as 4 primeiras famílias em palavras reais.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Hora de misturar tudo. Vou dizer uma sílaba, você escolhe a palavra certa.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual começa com má?",
      opcoes: [
        { palavra: "MALA", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "LUA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com pá?",
      opcoes: [
        { palavra: "PATO", correta: true },
        { palavra: "MESA", correta: false },
        { palavra: "TARTARUGA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com ti?",
      opcoes: [
        { palavra: "TINTA", correta: true },
        { palavra: "LUA", correta: false },
        { palavra: "MOTO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com li?",
      opcoes: [
        { palavra: "LIVRO", correta: true },
        { palavra: "PANELA", correta: false },
      ],
    },
    {
      tipo: "silabas",
      fala: "Junta as sílabas: mó-to.",
      palavra: "MOTO",
      silabas: ["MO", "TO"],
    },
    {
      tipo: "silabas",
      fala: "Agora pa-ne-la.",
      palavra: "PANELA",
      silabas: ["PA", "NE", "LA"],
    },
    { tipo: "reforco", fala: "Você tá lendo palavras de verdade!", imagem: pipVet },
    { tipo: "fim", fala: "Revisão fechada!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 40 · Revisão F · V · B · C + primeiras leituras
// ══════════════════════════════════════════════════════════
export const dlx40: AulaDlx = {
  slug: "dlx-40-revisao-fvbc",
  numero: 40,
  fase: 4,
  fone: "F · V · B · C",
  titulo: "Revisão: F, V, B, C + Primeiras Leituras",
  objetivo: "Fechar a Fase 4 lendo palavras CVCV inteiras sem apoio de imagem inicial.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Última aula da Fase 4! Você já sabe muita sílaba. Bora ler palavras inteiras?",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual começa com fá?",
      opcoes: [
        { palavra: "FACA", correta: true },
        { palavra: "VELA", correta: false },
        { palavra: "BOLA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com vá?",
      opcoes: [
        { palavra: "VACA", correta: true },
        { palavra: "FACA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com bó?",
      opcoes: [
        { palavra: "BOLA", correta: true },
        { palavra: "COPO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com cá?",
      opcoes: [
        { palavra: "CASA", correta: true },
        { palavra: "MESA", correta: false },
      ],
    },
    {
      tipo: "silabas",
      fala: "Lê comigo: bó-la.",
      palavra: "BOLA",
      silabas: ["BO", "LA"],
    },
    {
      tipo: "silabas",
      fala: "Agora fá-ca.",
      palavra: "FACA",
      silabas: ["FA", "CA"],
    },
    {
      tipo: "silabas",
      fala: "E vê-la.",
      palavra: "VELA",
      silabas: ["VE", "LA"],
    },
    {
      tipo: "silabas",
      fala: "Última: cá-sa.",
      palavra: "CASA",
      silabas: ["CA", "SA"],
    },
    { tipo: "reforco", fala: "Você tá lendo! Palavras inteiras, sem chute!", imagem: pipVet },
    { tipo: "fim", fala: "Fase 4 completa! 40 aulas! Vamos pra CVC!", imagem: pipVet },
  ],
};
