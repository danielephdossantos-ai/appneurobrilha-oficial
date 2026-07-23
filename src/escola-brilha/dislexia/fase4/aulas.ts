/**
 * Fase 4 · Sílabas Simples CV (10 aulas · dlx-31 a dlx-40)
 * Orton-Gillingham: a criança já ouve o fonema (Fases 1-3) e conhece as vogais.
 * Agora aprende a JUNTAR consoante + vogal → primeira leitura decodificada.
 * Método: modelagem no bloco de sílabas (arraste), leitura sonorizada e
 * escolha entre palavras. Imagens carregam automaticamente pelo mapa
 * `word-images.ts` — não precisa importar asset por asset.
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
      fala: "Chegou a hora mais legal! A gente vai JUNTAR o M com cada vogal. Presta atenção: MMM + A dá... MA! Vem comigo.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "M com A: MMMA. MA!", palavra: "MA", enfase: "MA" },
    { tipo: "escuta", fala: "M com E: MMME. ME!", palavra: "ME", enfase: "ME" },
    { tipo: "escuta", fala: "M com I: MMMI. MI!", palavra: "MI", enfase: "MI" },
    { tipo: "escuta", fala: "M com O: MMMO. MO!", palavra: "MO", enfase: "MO" },
    { tipo: "escuta", fala: "M com U: MMMU. MU!", palavra: "MU", enfase: "MU" },
    {
      tipo: "silabas",
      fala: "Toca nas sílabas de MALA: MA-LA.",
      palavra: "MALA",
      silabas: ["MA", "LA"],
    },
    {
      tipo: "silabas",
      fala: "Agora MESA: ME-SA.",
      palavra: "MESA",
      silabas: ["ME", "SA"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra começa com MO?",
      opcoes: [
        { palavra: "MOTO", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "SAPO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Você acabou de LER! M + vogal vira sílaba. Sílaba + sílaba vira palavra.", imagem: pipVet },
    { tipo: "fim", fala: "Família do M dominada! 🌟", imagem: pipVet },
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
      fala: "P é um som curtinho! Solta o ar de uma vez: P! Agora junta com a vogal. Vem!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "P com A: PA!", palavra: "PA", enfase: "PA" },
    { tipo: "escuta", fala: "P com E: PE!", palavra: "PE", enfase: "PE" },
    { tipo: "escuta", fala: "P com I: PI!", palavra: "PI", enfase: "PI" },
    { tipo: "escuta", fala: "P com O: PO!", palavra: "PO", enfase: "PO" },
    { tipo: "escuta", fala: "P com U: PU!", palavra: "PU", enfase: "PU" },
    {
      tipo: "silabas",
      fala: "Toca em PA-TO.",
      palavra: "PATO",
      silabas: ["PA", "TO"],
    },
    {
      tipo: "silabas",
      fala: "Agora PA-NE-LA.",
      palavra: "PANELA",
      silabas: ["PA", "NE", "LA"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra começa com PA?",
      opcoes: [
        { palavra: "PATO", correta: true },
        { palavra: "MESA", correta: false },
        { palavra: "LUA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual começa com PO?",
      opcoes: [
        { palavra: "PORTA", correta: true },
        { palavra: "MALA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "P é sopro rápido. Junta com a vogal e vira sílaba forte!", imagem: pipVet },
    { tipo: "fim", fala: "Família do P dominada! 🌟", imagem: pipVet },
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
      fala: "T também é curtinho! A língua bate atrás dos dentes: T! Vem junto.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "T com A: TA!", palavra: "TA", enfase: "TA" },
    { tipo: "escuta", fala: "T com E: TE!", palavra: "TE", enfase: "TE" },
    { tipo: "escuta", fala: "T com I: TI!", palavra: "TI", enfase: "TI" },
    { tipo: "escuta", fala: "T com O: TO!", palavra: "TO", enfase: "TO" },
    { tipo: "escuta", fala: "T com U: TU!", palavra: "TU", enfase: "TU" },
    {
      tipo: "silabas",
      fala: "Toca em TIN-TA.",
      palavra: "TINTA",
      silabas: ["TIN", "TA"],
    },
    {
      tipo: "silabas",
      fala: "Agora TAR-TA-RU-GA. É longa, vamo devagar!",
      palavra: "TARTARUGA",
      silabas: ["TAR", "TA", "RU", "GA"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra começa com TI?",
      opcoes: [
        { palavra: "TINTA", correta: true },
        { palavra: "PATO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Língua atrás dos dentes! T + vogal vira sílaba.", imagem: pipVet },
    { tipo: "fim", fala: "Família do T dominada! 🌟", imagem: pipVet },
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
      fala: "L é lisinho! A língua encosta em cima e o som escorrega: LLLL. Junta com a vogal.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "L com A: LLLA. LA!", palavra: "LA", enfase: "LA" },
    { tipo: "escuta", fala: "L com E: LLLE. LE!", palavra: "LE", enfase: "LE" },
    { tipo: "escuta", fala: "L com I: LLLI. LI!", palavra: "LI", enfase: "LI" },
    { tipo: "escuta", fala: "L com O: LLLO. LO!", palavra: "LO", enfase: "LO" },
    { tipo: "escuta", fala: "L com U: LLLU. LU!", palavra: "LU", enfase: "LU" },
    {
      tipo: "silabas",
      fala: "Toca em LU-A.",
      palavra: "LUA",
      silabas: ["LU", "A"],
    },
    {
      tipo: "silabas",
      fala: "Agora LI-VRO.",
      palavra: "LIVRO",
      silabas: ["LI", "VRO"],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com LU?",
      opcoes: [
        { palavra: "LUA", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "MESA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual começa com LE?",
      opcoes: [
        { palavra: "LEÃO", correta: true },
        { palavra: "MALA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "L é bem lisinho, escorrega!", imagem: pipVet },
    { tipo: "fim", fala: "Família do L dominada! 🌟", imagem: pipVet },
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
      fala: "F é sopro! Dente em cima do lábio de baixo: FFFF. Junta com a vogal!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "F com A: FFFA. FA!", palavra: "FA", enfase: "FA" },
    { tipo: "escuta", fala: "F com E: FFFE. FE!", palavra: "FE", enfase: "FE" },
    { tipo: "escuta", fala: "F com I: FFFI. FI!", palavra: "FI", enfase: "FI" },
    { tipo: "escuta", fala: "F com O: FFFO. FO!", palavra: "FO", enfase: "FO" },
    { tipo: "escuta", fala: "F com U: FFFU. FU!", palavra: "FU", enfase: "FU" },
    {
      tipo: "silabas",
      fala: "Toca em FA-CA.",
      palavra: "FACA",
      silabas: ["FA", "CA"],
    },
    {
      tipo: "silabas",
      fala: "Agora FA-DA.",
      palavra: "FADA",
      silabas: ["FA", "DA"],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com FO?",
      opcoes: [
        { palavra: "FOCA", correta: true },
        { palavra: "LUA", correta: false },
        { palavra: "MESA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "F é sopro no lábio. FF + vogal vira sílaba.", imagem: pipVet },
    { tipo: "fim", fala: "Família do F dominada! 🌟", imagem: pipVet },
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
      fala: "V parece F mas VIBRA! Coloca a mão no pescoço: VVVV. Sente vibrar? Junta com a vogal!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "V com A: VVVA. VA!", palavra: "VA", enfase: "VA" },
    { tipo: "escuta", fala: "V com E: VVVE. VE!", palavra: "VE", enfase: "VE" },
    { tipo: "escuta", fala: "V com I: VVVI. VI!", palavra: "VI", enfase: "VI" },
    { tipo: "escuta", fala: "V com O: VVVO. VO!", palavra: "VO", enfase: "VO" },
    { tipo: "escuta", fala: "V com U: VVVU. VU!", palavra: "VU", enfase: "VU" },
    {
      tipo: "silabas",
      fala: "Toca em VA-CA.",
      palavra: "VACA",
      silabas: ["VA", "CA"],
    },
    {
      tipo: "silabas",
      fala: "Agora VE-LA.",
      palavra: "VELA",
      silabas: ["VE", "LA"],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com VA?",
      opcoes: [
        { palavra: "VACA", correta: true },
        { palavra: "FACA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual começa com VE?",
      opcoes: [
        { palavra: "VELA", correta: true },
        { palavra: "MESA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "F é sopro. V vibra. Mesma boca, sons diferentes!", imagem: pipVet },
    { tipo: "fim", fala: "Família do V dominada! 🌟", imagem: pipVet },
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
      fala: "B fecha os lábios e SOLTA com voz: B! Igual ao P, mas com voz. Vem!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "B com A: BA!", palavra: "BA", enfase: "BA" },
    { tipo: "escuta", fala: "B com E: BE!", palavra: "BE", enfase: "BE" },
    { tipo: "escuta", fala: "B com I: BI!", palavra: "BI", enfase: "BI" },
    { tipo: "escuta", fala: "B com O: BO!", palavra: "BO", enfase: "BO" },
    { tipo: "escuta", fala: "B com U: BU!", palavra: "BU", enfase: "BU" },
    {
      tipo: "silabas",
      fala: "Toca em BO-LA.",
      palavra: "BOLA",
      silabas: ["BO", "LA"],
    },
    {
      tipo: "silabas",
      fala: "Agora A-BE-LHA.",
      palavra: "ABELHA",
      silabas: ["A", "BE", "LHA"],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com BO?",
      opcoes: [
        { palavra: "BOLA", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "MESA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "P é seco. B tem voz! Coloca a mão no pescoço e sente.", imagem: pipVet },
    { tipo: "fim", fala: "Família do B dominada! 🌟", imagem: pipVet },
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
      fala: "Segredo do C! Com A, O e U ele faz um som forte: K! Com E e I ele muda, mas isso é depois. Hoje só K!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "C com A: CA!", palavra: "CA", enfase: "CA" },
    { tipo: "escuta", fala: "C com O: CO!", palavra: "CO", enfase: "CO" },
    { tipo: "escuta", fala: "C com U: CU!", palavra: "CU", enfase: "CU" },
    {
      tipo: "silabas",
      fala: "Toca em CA-SA.",
      palavra: "CASA",
      silabas: ["CA", "SA"],
    },
    {
      tipo: "silabas",
      fala: "Agora CO-PO.",
      palavra: "COPO",
      silabas: ["CO", "PO"],
    },
    {
      tipo: "silabas",
      fala: "E CO-RU-JA.",
      palavra: "CORUJA",
      silabas: ["CO", "RU", "JA"],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com CA?",
      opcoes: [
        { palavra: "CASA", correta: true },
        { palavra: "MESA", correta: false },
        { palavra: "BOLA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual começa com CO?",
      opcoes: [
        { palavra: "COPO", correta: true },
        { palavra: "VELA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "C + A, O, U = som forte de K.", imagem: pipVet },
    { tipo: "fim", fala: "Família do C dominada! 🌟", imagem: pipVet },
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
      fala: "Hora de misturar tudo! Vou dizer uma sílaba, você escolhe a palavra certa.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual começa com MA?",
      opcoes: [
        { palavra: "MALA", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "LUA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com PA?",
      opcoes: [
        { palavra: "PATO", correta: true },
        { palavra: "MESA", correta: false },
        { palavra: "TARTARUGA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com TI?",
      opcoes: [
        { palavra: "TINTA", correta: true },
        { palavra: "LUA", correta: false },
        { palavra: "MOTO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com LI?",
      opcoes: [
        { palavra: "LIVRO", correta: true },
        { palavra: "PANELA", correta: false },
      ],
    },
    {
      tipo: "silabas",
      fala: "Junta as sílabas: MO-TO.",
      palavra: "MOTO",
      silabas: ["MO", "TO"],
    },
    {
      tipo: "silabas",
      fala: "Agora PA-NE-LA.",
      palavra: "PANELA",
      silabas: ["PA", "NE", "LA"],
    },
    { tipo: "reforco", fala: "Você tá lendo palavras de verdade!", imagem: pipVet },
    { tipo: "fim", fala: "Revisão fechada! 🌟", imagem: pipVet },
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
      fala: "Última aula da Fase 4! Você já sabe MUITA sílaba. Bora ler palavras inteiras?",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual começa com FA?",
      opcoes: [
        { palavra: "FACA", correta: true },
        { palavra: "VELA", correta: false },
        { palavra: "BOLA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com VA?",
      opcoes: [
        { palavra: "VACA", correta: true },
        { palavra: "FACA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com BO?",
      opcoes: [
        { palavra: "BOLA", correta: true },
        { palavra: "COPO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com CA?",
      opcoes: [
        { palavra: "CASA", correta: true },
        { palavra: "MESA", correta: false },
      ],
    },
    {
      tipo: "silabas",
      fala: "Lê comigo: BO-LA.",
      palavra: "BOLA",
      silabas: ["BO", "LA"],
    },
    {
      tipo: "silabas",
      fala: "Agora FA-CA.",
      palavra: "FACA",
      silabas: ["FA", "CA"],
    },
    {
      tipo: "silabas",
      fala: "E VE-LA.",
      palavra: "VELA",
      silabas: ["VE", "LA"],
    },
    {
      tipo: "silabas",
      fala: "Última: CA-SA.",
      palavra: "CASA",
      silabas: ["CA", "SA"],
    },
    { tipo: "reforco", fala: "VOCÊ TÁ LENDO! Palavras inteiras, sem chute! 🎉", imagem: pipVet },
    { tipo: "fim", fala: "Fase 4 completa! 40 aulas! Vamos pra CVC! 🌟", imagem: pipVet },
  ],
};
