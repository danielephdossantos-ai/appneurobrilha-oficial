/**
 * Fase 7 · Sílabas Complexas (10 aulas · dlx-61 a dlx-70)
 * Orton-Gillingham: depois dos dígrafos e encontros consonantais, a criança
 * enfrenta sílabas que NÃO são CV nem CVC simples: R fechando sílaba entre
 * vogais (POR-TA), L fechando (SAL, MEL), ditongo nasal ÃO (PÃO), Ç, QU/GU
 * som duro, e palavras longas com múltiplas sílabas complexas.
 *
 * Cada aula tem apoio articulatório explícito, discriminação visual e
 * segmentação silábica multissensorial (VAKT).
 */
import type { AulaDlx } from "../types";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

// ══════════════════════════════════════════════════════════
// AULA 61 · R fechando sílaba entre vogais (POR-TA, GAR-FO)
// ══════════════════════════════════════════════════════════
export const dlx61: AulaDlx = {
  slug: "dlx-61-r-fechando-silaba",
  numero: 61,
  fase: 7,
  fone: "R",
  titulo: "R fechando a sílaba — POR-TA, GAR-FO",
  objetivo: "Ler sílaba fechada por R no meio da palavra (VR·CV).",
  cenas: [
    {
      tipo: "abertura",
      fala: "Novo truque! Às vezes o R fecha a sílaba antes de outra letra. POR-TA. Sente a boca parar no R e depois abrir de novo.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "POR-TA. Escuta o R no fim do primeiro pedaço.", palavra: "PORTA", enfase: "OR" },
    { tipo: "escuta", fala: "GAR-FO. R fechando de novo.", palavra: "GARFO", enfase: "AR" },
    {
      tipo: "silabas",
      fala: "Toca cada pedaço: POR-TA.",
      palavra: "PORTA",
      silabas: ["POR", "TA"],
    },
    {
      tipo: "silabas",
      fala: "Toca: GAR-FO.",
      palavra: "GARFO",
      silabas: ["GAR", "FO"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem R fechando a sílaba?",
      opcoes: [
        { palavra: "PORTA", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "SAPO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual outra tem R fechando?",
      opcoes: [
        { palavra: "GARFO", correta: true },
        { palavra: "GATO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "R fecha a sílaba: POR-TA, GAR-FO. Boca para, depois abre.", imagem: pipVet },
    { tipo: "fim", fala: "R fechado dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 62 · R fechando (avançado): LAGARTA, TARTARUGA
// ══════════════════════════════════════════════════════════
export const dlx62: AulaDlx = {
  slug: "dlx-62-r-fechando-longa",
  numero: 62,
  fase: 7,
  fone: "R",
  titulo: "Palavras longas com R fechado",
  objetivo: "Segmentar palavras longas com sílaba fechada por R.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Agora palavras MAIORES. O R fecha a sílaba dentro delas. Vai por pedaço.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "LA-GAR-TA. Ouve o GAR no meio.", palavra: "LAGARTA", enfase: "GAR" },
    { tipo: "escuta", fala: "TAR-TA-RU-GA. Dois pedaços com R!", palavra: "TARTARUGA", enfase: "TAR" },
    {
      tipo: "silabas",
      fala: "Toca cada pedaço: LA-GAR-TA.",
      palavra: "LAGARTA",
      silabas: ["LA", "GAR", "TA"],
    },
    {
      tipo: "silabas",
      fala: "Toca: TAR-TA-RU-GA.",
      palavra: "TARTARUGA",
      silabas: ["TAR", "TA", "RU", "GA"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra é LAGARTA?",
      opcoes: [
        { palavra: "LAGARTA", correta: true },
        { palavra: "LATA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Palavra grande é só pedaço por pedaço. Nada assusta.", imagem: pipVet },
    { tipo: "fim", fala: "Você leu palavra grande! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 63 · L fechando sílaba (SAL, MEL, GOL, ANEL) — revisão profunda
// ══════════════════════════════════════════════════════════
export const dlx63: AulaDlx = {
  slug: "dlx-63-l-fechando-silaba",
  numero: 63,
  fase: 7,
  fone: "L",
  titulo: "L fechando a sílaba — SAL, MEL, GOL",
  objetivo: "Consolidar sílaba fechada por L com apoio articulatório.",
  cenas: [
    {
      tipo: "abertura",
      fala: "O L também fecha sílaba. A língua sobe e para no céu da boca: SAL, MEL, GOL.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "SAL. Sente a língua parar no L.", palavra: "SAL", enfase: "AL" },
    { tipo: "escuta", fala: "MEL. Doce e curto.", palavra: "MEL", enfase: "EL" },
    { tipo: "escuta", fala: "GOL. Grito da torcida!", palavra: "GOL", enfase: "OL" },
    { tipo: "escuta", fala: "A-NEL. L fecha o segundo pedaço.", palavra: "ANEL", enfase: "NEL" },
    {
      tipo: "escolha",
      fala: "Qual palavra é MEL?",
      opcoes: [
        { palavra: "MEL", correta: true },
        { palavra: "SAL", correta: false },
        { palavra: "GOL", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra é ANEL?",
      opcoes: [
        { palavra: "ANEL", correta: true },
        { palavra: "MEL", correta: false },
      ],
    },
    { tipo: "reforco", fala: "L fecha a sílaba: língua sobe e para. SAL, MEL, GOL, ANEL.", imagem: pipVet },
    { tipo: "fim", fala: "L fechado, mandou bem! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 64 · Ditongo nasal ÃO (PÃO, MÃO)
// ══════════════════════════════════════════════════════════
export const dlx64: AulaDlx = {
  slug: "dlx-64-ditongo-ao",
  numero: 64,
  fase: 7,
  fone: "ÃO",
  titulo: "ÃO — som que sai pelo nariz",
  objetivo: "Ler ditongo nasal ÃO no fim de palavra.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Novo som: ÃO. Ele sai pelo nariz. Encosta o dedo no nariz e diz PÃO — sente vibrar?",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "PÃO. Som nasal no fim.", palavra: "PÃO", enfase: "ÃO" },
    { tipo: "escuta", fala: "MÃO. De novo o ÃO.", palavra: "MÃO", enfase: "ÃO" },
    { tipo: "escuta", fala: "A-VI-ÃO. ÃO bem no fim.", palavra: "AVIÃO", enfase: "ÃO" },
    {
      tipo: "escolha",
      fala: "Qual palavra termina com ÃO?",
      opcoes: [
        { palavra: "PÃO", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "SAPO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual outra tem ÃO?",
      opcoes: [
        { palavra: "MÃO", correta: true },
        { palavra: "MEL", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Palavra grande com ÃO no fim:",
      opcoes: [
        { palavra: "AVIÃO", correta: true },
        { palavra: "URSO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "ÃO = som que sai pelo nariz. PÃO, MÃO, AVIÃO.", imagem: pipVet },
    { tipo: "fim", fala: "ÃO dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 65 · Ç (som de S antes de A, O, U)
// ══════════════════════════════════════════════════════════
export const dlx65: AulaDlx = {
  slug: "dlx-65-c-cedilha",
  numero: 65,
  fase: 7,
  fone: "Ç",
  titulo: "Ç — cê com rabinho faz SSS",
  objetivo: "Reconhecer o Ç como som /s/ antes de A, O, U.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Olha essa letra: Ç. É o C com um rabinho. E o rabinho manda ele fazer o som SSS, mesmo antes de A, O, U.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "PA-LHA-ÇO. Ouve o SSS no fim.", palavra: "PALHAÇO", enfase: "ÇO" },
    {
      tipo: "silabas",
      fala: "Toca: PA-LHA-ÇO.",
      palavra: "PALHAÇO",
      silabas: ["PA", "LHA", "ÇO"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem Ç?",
      opcoes: [
        { palavra: "PALHAÇO", correta: true },
        { palavra: "SAPATO", correta: false },
        { palavra: "CACHORRO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Ç sempre faz SSS. C sem rabinho antes de A, O, U faz K. Cuida do rabinho!", imagem: pipVet },
    { tipo: "fim", fala: "Ç aprendido! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 66 · QU antes de E, I (som de K, U mudo)
// ══════════════════════════════════════════════════════════
export const dlx66: AulaDlx = {
  slug: "dlx-66-qu-mudo",
  numero: 66,
  fase: 7,
  fone: "QU",
  titulo: "QUE, QUI — o U fica mudo",
  objetivo: "Ler QU antes de E, I sabendo que o U não soa.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Regra importante: Q sempre vem com U. E antes de E ou I, o U fica CALADO. QUE se lê KE. QUI se lê KI.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "QUEIJO. Começa com KE, o U não fala.", palavra: "QUEIJO", enfase: "QUE" },
    { tipo: "escuta", fala: "QUINZE. Começa com KI.", palavra: "QUINZE", enfase: "QUI" },
    {
      tipo: "silabas",
      fala: "Toca: QUEI-JO.",
      palavra: "QUEIJO",
      silabas: ["QUEI", "JO"],
    },
    {
      tipo: "escolha",
      fala: "Como se lê QUE?",
      opcoes: [
        { palavra: "KE", correta: true },
        { palavra: "KUE", correta: false },
      ],
    },
    { tipo: "reforco", fala: "QUE = KE. QUI = KI. O U só serve pra avisar o Q.", imagem: pipVet },
    { tipo: "fim", fala: "QU dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 67 · GU antes de E, I (som de G duro, U mudo)
// ══════════════════════════════════════════════════════════
export const dlx67: AulaDlx = {
  slug: "dlx-67-gu-mudo",
  numero: 67,
  fase: 7,
  fone: "GU",
  titulo: "GUE, GUI — o U fica mudo",
  objetivo: "Ler GU antes de E, I com som de G duro.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Igual o Q! Antes de E ou I, o G leva um U que fica CALADO pra manter o som duro. GUE lê GHE. GUI lê GHI.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "GUER-RA. GUE com som duro de G.", palavra: "GUERRA", enfase: "GUE" },
    { tipo: "escuta", fala: "I-GUA-NA. Aqui o U fala, porque vem A.", palavra: "IGUANA", enfase: "GUA" },
    {
      tipo: "escolha",
      fala: "Em GUERRA, o U fica...",
      opcoes: [
        { palavra: "MUDO", correta: true },
        { palavra: "FALA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "GUE, GUI = U mudo. GUA, GUO = U fala. O E e o I mandam calar!", imagem: pipVet },
    { tipo: "fim", fala: "GU dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 68 · S entre vogais soa Z (ROSA, MESA)
// ══════════════════════════════════════════════════════════
export const dlx68: AulaDlx = {
  slug: "dlx-68-s-entre-vogais",
  numero: 68,
  fase: 7,
  fone: "S",
  titulo: "S entre vogais vira Z",
  objetivo: "Reconhecer S com som de Z quando fica entre duas vogais.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Segredo do S: quando ele fica entre duas vogais, ele muda de som e vira ZZZ (abelhinha). RO-SA soa RO-ZA.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "RO-SA. Ouve o Z no meio.", palavra: "ROSA", enfase: "SA" },
    { tipo: "escuta", fala: "ME-SA. De novo, S soa Z.", palavra: "MESA", enfase: "SA" },
    { tipo: "escuta", fala: "NA-RIZ. Aqui o Z é escrito com Z mesmo.", palavra: "NARIZ", enfase: "IZ" },
    {
      tipo: "escolha",
      fala: "Qual palavra tem S soando Z?",
      opcoes: [
        { palavra: "ROSA", correta: true },
        { palavra: "SAPO", correta: false },
        { palavra: "SOL", correta: false },
      ],
    },
    { tipo: "reforco", fala: "S entre vogais = som de Z. No começo ou depois de consoante, som de SSS.", imagem: pipVet },
    { tipo: "fim", fala: "Truque do S aprendido! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 69 · Palavras longas com sílabas complexas
// ══════════════════════════════════════════════════════════
export const dlx69: AulaDlx = {
  slug: "dlx-69-palavras-longas",
  numero: 69,
  fase: 7,
  fone: "SIL",
  titulo: "Palavras grandonas — vai por pedaço",
  objetivo: "Ler palavras longas usando segmentação silábica multissensorial.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Palavra grande NÃO é palavra difícil. É só uma sequência de pedaços. Vai devagar.",
      imagem: pipVet,
    },
    {
      tipo: "silabas",
      fala: "Toca: A-BA-CA-XI.",
      palavra: "ABACAXI",
      silabas: ["A", "BA", "CA", "XI"],
    },
    {
      tipo: "silabas",
      fala: "Toca: CA-CHOR-RO.",
      palavra: "CACHORRO",
      silabas: ["CA", "CHOR", "RO"],
    },
    {
      tipo: "silabas",
      fala: "Toca: SOR-VE-TE.",
      palavra: "SORVETE",
      silabas: ["SOR", "VE", "TE"],
    },
    {
      tipo: "silabas",
      fala: "Toca: BOR-BO-LE-TA.",
      palavra: "BORBOLETA",
      silabas: ["BOR", "BO", "LE", "TA"],
    },
    { tipo: "reforco", fala: "Palavra grande é só pedaço + pedaço + pedaço. Nada assusta.", imagem: pipVet },
    { tipo: "fim", fala: "Você leu palavra grandona! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 70 · Revisão Fase 7
// ══════════════════════════════════════════════════════════
export const dlx70: AulaDlx = {
  slug: "dlx-70-revisao-fase7",
  numero: 70,
  fase: 7,
  fone: "SIL",
  titulo: "Revisão — sílabas complexas",
  objetivo: "Aplicar tudo da Fase 7 em leitura discriminada.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Hora de mostrar tudo que você já sabe: R fechando, L fechando, ÃO, Ç, QU, GU e S entre vogais.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem R fechando a sílaba?",
      opcoes: [
        { palavra: "PORTA", correta: true },
        { palavra: "PATO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra termina com ÃO?",
      opcoes: [
        { palavra: "PÃO", correta: true },
        { palavra: "PATO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem Ç?",
      opcoes: [
        { palavra: "PALHAÇO", correta: true },
        { palavra: "CACHORRO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem S soando Z?",
      opcoes: [
        { palavra: "ROSA", correta: true },
        { palavra: "SAPO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem L fechando?",
      opcoes: [
        { palavra: "MEL", correta: true },
        { palavra: "MESA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Você fechou a Fase 7. Sílabas complexas dominadas!", imagem: pipVet },
    { tipo: "fim", fala: "Fase 7 concluída! Só falta a fluência. 🌟", imagem: pipVet },
  ],
};
