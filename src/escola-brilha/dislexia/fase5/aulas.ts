/**
 * Fase 5 · Palavras CVC (10 aulas · dlx-41 a dlx-50)
 * Orton-Gillingham: depois de dominar CV (Fase 4), a criança encontra
 * palavras com CONSOANTE FINAL. Em português isso é o "coda" — L, R, S,
 * Z e nasais M/N no fim da sílaba. Aqui a criança faz a PRIMEIRA leitura
 * decodificada de palavras curtas reais (SOL, MAR, MEL, LUZ…).
 *
 * Estrutura da aula CVC:
 *  1) abertura: Pip explica o "fecho" da sílaba
 *  2) escuta: modelo sonorizado da palavra CVC com ênfase no fonema final
 *  3) silabas: bloco único (palavra é uma sílaba só) — vira leitura direta
 *  4) escolha: discriminar palavras com fecho diferente
 *  5) reforço + fim
 */
import type { AulaDlx } from "../types";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

// ══════════════════════════════════════════════════════════
// AULA 41 · Palavras com fecho L (SOL, MEL, SAL, GOL)
// ══════════════════════════════════════════════════════════
export const dlx41: AulaDlx = {
  slug: "dlx-41-cvc-fecho-l",
  numero: 41,
  fase: 5,
  fone: "…L",
  titulo: "Palavras que terminam em L",
  objetivo: "Ler palavras CVC com fecho em L: SOL, MEL, SAL, GOL.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Agora a sílaba GANHA um fecho! Depois da vogal vem uma consoante. Presta atenção: S + O + L… SOL! A boca fecha no L no fim.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "s, o, l… SOL! O L fecha no fim.", palavra: "SOL", enfase: "L" },
    { tipo: "escuta", fala: "m, e, l… MEL! Doce, doce.", palavra: "MEL", enfase: "L" },
    { tipo: "escuta", fala: "s, a, l… SAL! Tempero da comida.", palavra: "SAL", enfase: "L" },
    { tipo: "escuta", fala: "g, o, l… GOL! Bola dentro da rede.", palavra: "GOL", enfase: "L" },
    {
      tipo: "silabas",
      fala: "SOL é uma sílaba só. Toca nela pra ler.",
      palavra: "SOL",
      silabas: ["SOL"],
    },
    {
      tipo: "silabas",
      fala: "Agora MEL — uma sílaba só também.",
      palavra: "MEL",
      silabas: ["MEL"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra termina em L?",
      opcoes: [
        { palavra: "SOL", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "LUA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas é o GOL?",
      opcoes: [
        { palavra: "GOL", correta: true },
        { palavra: "BOLA", correta: false },
        { palavra: "MESA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "A vogal aparece, o L fecha. Isso é sílaba CVC — consoante + vogal + consoante.", imagem: pipVet },
    { tipo: "fim", fala: "Você leu suas primeiras palavras CVC! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 42 · Palavras com fecho R (MAR, DOR, FLOR)
// ══════════════════════════════════════════════════════════
export const dlx42: AulaDlx = {
  slug: "dlx-42-cvc-fecho-r",
  numero: 42,
  fase: 5,
  fone: "…R",
  titulo: "Palavras que terminam em R",
  objetivo: "Ler palavras CVC com fecho em R.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Agora o fecho é o R! Ele raspa na garganta bem levinho no fim: MAAAR. A boca abre e o R fecha.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "m, a, r… MAR! Águas azuis.", palavra: "MAR", enfase: "R" },
    { tipo: "escuta", fala: "d, o, r… DOR! Quando algo dói.", palavra: "DOR", enfase: "R" },
    { tipo: "escuta", fala: "f, l, o, r… FLOR! Cheirosa no jardim.", palavra: "FLOR", enfase: "R" },
    {
      tipo: "silabas",
      fala: "MAR — uma sílaba, três letrinhas.",
      palavra: "MAR",
      silabas: ["MAR"],
    },
    {
      tipo: "silabas",
      fala: "FLOR também é uma sílaba só. Vamo!",
      palavra: "FLOR",
      silabas: ["FLOR"],
    },
    {
      tipo: "escolha",
      fala: "Qual termina em R?",
      opcoes: [
        { palavra: "MAR", correta: true },
        { palavra: "MESA", correta: false },
        { palavra: "SOL", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual é a FLOR?",
      opcoes: [
        { palavra: "FLOR", correta: true },
        { palavra: "MEL", correta: false },
        { palavra: "PATO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "R no fim raspa levinho. Mesmo padrão do SOL, só troca o fecho.", imagem: pipVet },
    { tipo: "fim", fala: "Fecho R dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 43 · Palavras com fecho Z (LUZ, PAZ)
// ══════════════════════════════════════════════════════════
export const dlx43: AulaDlx = {
  slug: "dlx-43-cvc-fecho-z",
  numero: 43,
  fase: 5,
  fone: "…Z",
  titulo: "Palavras que terminam em Z",
  objetivo: "Ler palavras CVC com fecho em Z (som de /s/ no fim).",
  cenas: [
    {
      tipo: "abertura",
      fala: "Segredo: o Z no fim da palavra faz som de S bem levinho: LUZZZ… LUS. Ouve com atenção!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "l, u, z… LUZ! Que clareia tudo.", palavra: "LUZ", enfase: "Z" },
    { tipo: "escuta", fala: "p, a, z… PAZ! Tranquilidade.", palavra: "PAZ", enfase: "Z" },
    {
      tipo: "silabas",
      fala: "LUZ — uma sílaba. Toca pra ler.",
      palavra: "LUZ",
      silabas: ["LUZ"],
    },
    {
      tipo: "escolha",
      fala: "Qual termina em Z?",
      opcoes: [
        { palavra: "LUZ", correta: true },
        { palavra: "SOL", correta: false },
        { palavra: "MAR", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas é a PAZ?",
      opcoes: [
        { palavra: "PAZ", correta: true },
        { palavra: "DOR", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Z no fim = som de S. Truque OG número 1 do fecho.", imagem: pipVet },
    { tipo: "fim", fala: "Fecho Z dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 44 · Fecho nasal M (SIM, BOM, TOM, SOM)
// ══════════════════════════════════════════════════════════
export const dlx44: AulaDlx = {
  slug: "dlx-44-cvc-fecho-m",
  numero: 44,
  fase: 5,
  fone: "…M",
  titulo: "Palavras que terminam em M (som pelo nariz)",
  objetivo: "Ler CVC com fecho nasal M — a vogal sai pelo nariz.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Truque novo! O M no fim faz o som sair pelo NARIZ. Aperta o nariz e tenta: BOOOM. Não sai! Solta e sai. É nasal!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "s, i, m… SIM! Palavra do sim e do não.", palavra: "SIM", enfase: "M" },
    { tipo: "escuta", fala: "b, o, m… BOM! Muito bom!", palavra: "BOM", enfase: "M" },
    { tipo: "escuta", fala: "t, o, m… TOM! Nome de gente.", palavra: "TOM", enfase: "M" },
    { tipo: "escuta", fala: "s, o, m… SOM! O que a gente ouve.", palavra: "SOM", enfase: "M" },
    {
      tipo: "silabas",
      fala: "SIM — uma sílaba nasal. Sente vibrar no nariz.",
      palavra: "SIM",
      silabas: ["SIM"],
    },
    {
      tipo: "escolha",
      fala: "Qual termina em M?",
      opcoes: [
        { palavra: "BOM", correta: true },
        { palavra: "MAR", correta: false },
        { palavra: "SOL", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual é o SOM?",
      opcoes: [
        { palavra: "SOM", correta: true },
        { palavra: "SAL", correta: false },
      ],
    },
    { tipo: "reforco", fala: "M no fim = ar pelo nariz. Truque OG número 2.", imagem: pipVet },
    { tipo: "fim", fala: "Fecho nasal dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 45 · Leitura livre: primeiras palavras curtas
// ══════════════════════════════════════════════════════════
export const dlx45: AulaDlx = {
  slug: "dlx-45-leitura-livre-cvc",
  numero: 45,
  fase: 5,
  fone: "CVC",
  titulo: "Leitura livre: SOL, MAR, MEL",
  objetivo: "Decodificar sozinho palavras CVC já treinadas.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Agora é você quem lê! Eu mostro a palavra, você lê em voz alta. Eu confirmo depois.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Lê: SOL.", palavra: "SOL", enfase: "SOL" },
    { tipo: "escuta", fala: "Lê: MAR.", palavra: "MAR", enfase: "MAR" },
    { tipo: "escuta", fala: "Lê: MEL.", palavra: "MEL", enfase: "MEL" },
    { tipo: "escuta", fala: "Lê: SAL.", palavra: "SAL", enfase: "SAL" },
    { tipo: "escuta", fala: "Lê: LUZ.", palavra: "LUZ", enfase: "LUZ" },
    {
      tipo: "escolha",
      fala: "Qual é o SOL?",
      opcoes: [
        { palavra: "SOL", correta: true },
        { palavra: "MEL", correta: false },
        { palavra: "MAR", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual é o MAR?",
      opcoes: [
        { palavra: "MAR", correta: true },
        { palavra: "SAL", correta: false },
        { palavra: "GOL", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Você já lê palavras! Cada letra tem seu som, e você junta tudo.", imagem: pipVet },
    { tipo: "fim", fala: "Leitor iniciante — oficialmente! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 46 · CV vs CVC — discriminar palavras
// ══════════════════════════════════════════════════════════
export const dlx46: AulaDlx = {
  slug: "dlx-46-cv-vs-cvc",
  numero: 46,
  fase: 5,
  fone: "CV × CVC",
  titulo: "CV × CVC: com fecho ou sem?",
  objetivo: "Discriminar palavras que fecham (CVC) das que não fecham (CV/CVCV).",
  cenas: [
    {
      tipo: "abertura",
      fala: "Duas palavras podem parecer parecidas, mas uma FECHA e a outra NÃO. Tipo LUA e LUZ: l, u, a abre, l, u, z fecha no Z. Escuta!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "LUA — abre no A.", palavra: "LUA", enfase: "A" },
    { tipo: "escuta", fala: "LUZ — fecha no Z.", palavra: "LUZ", enfase: "Z" },
    { tipo: "escuta", fala: "MALA — abre.", palavra: "MALA", enfase: "A" },
    { tipo: "escuta", fala: "MAR — fecha.", palavra: "MAR", enfase: "R" },
    {
      tipo: "escolha",
      fala: "Qual FECHA no fim?",
      opcoes: [
        { palavra: "SOL", correta: true },
        { palavra: "LUA", correta: false },
        { palavra: "MESA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual ABRE no fim (termina em vogal)?",
      opcoes: [
        { palavra: "PATO", correta: true },
        { palavra: "MEL", correta: false },
        { palavra: "SAL", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual dessas fecha em R?",
      opcoes: [
        { palavra: "FLOR", correta: true },
        { palavra: "FADA", correta: false },
        { palavra: "LUA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Palavra que termina em vogal = ABRE. Palavra que termina em consoante = FECHA.", imagem: pipVet },
    { tipo: "fim", fala: "Você já distingue os dois tipos! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 47 · Palavras mais longas com fecho (ANEL, PAPEL)
// ══════════════════════════════════════════════════════════
export const dlx47: AulaDlx = {
  slug: "dlx-47-palavras-longas-fecho",
  numero: 47,
  fase: 5,
  fone: "CV+CVC",
  titulo: "Palavras longas que fecham",
  objetivo: "Ler palavras com duas sílabas, sendo a última CVC.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Agora o fecho vem na SEGUNDA sílaba. Tipo a-nel: primeira sílaba abre, segunda fecha no L. Vamo!",
      imagem: pipVet,
    },
    {
      tipo: "silabas",
      fala: "a-nel. Toca nas duas sílabas.",
      palavra: "ANEL",
      silabas: ["A", "NEL"],
    },
    {
      tipo: "escuta",
      fala: "Escuta: a-nel. O L fecha.",
      palavra: "ANEL",
      enfase: "L",
    },
    {
      tipo: "silabas",
      fala: "na-riz. Fecha no Z.",
      palavra: "NARIZ",
      silabas: ["NA", "RIZ"],
    },
    {
      tipo: "escuta",
      fala: "na-riz — a última sílaba fecha em Z.",
      palavra: "NARIZ",
      enfase: "Z",
    },
    {
      tipo: "escolha",
      fala: "Qual palavra é ANEL?",
      opcoes: [
        { palavra: "ANEL", correta: true },
        { palavra: "ABELHA", correta: false },
        { palavra: "AVIÃO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra é NARIZ?",
      opcoes: [
        { palavra: "NARIZ", correta: true },
        { palavra: "NAVIO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Palavra pode fechar na primeira, na segunda ou em qualquer sílaba.", imagem: pipVet },
    { tipo: "fim", fala: "Palavras longas com fecho — dominadas! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 48 · Frases curtas — primeira leitura de sentença
// ══════════════════════════════════════════════════════════
export const dlx48: AulaDlx = {
  slug: "dlx-48-frases-curtas",
  numero: 48,
  fase: 5,
  fone: "Frase",
  titulo: "Frases curtas: O SOL É BOM",
  objetivo: "Ler uma frase curta com palavras CV e CVC já treinadas.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Palavra em palavra vira FRASE! Vamo ler: O SOL É BOM. Pausa entre cada palavra.",
      imagem: pipVet,
    },
    {
      tipo: "silabas",
      fala: "O · SOL · É · BOM. Toca cada uma.",
      palavra: "O SOL É BOM",
      silabas: ["O", "SOL", "É", "BOM"],
    },
    {
      tipo: "silabas",
      fala: "Outra: O MAR É AZUL.",
      palavra: "O MAR É AZUL",
      silabas: ["O", "MAR", "É", "AZUL"],
    },
    {
      tipo: "escuta",
      fala: "O SOL É BOM. Sente que agora você LEU uma frase inteira!",
      palavra: "SOL",
      enfase: "SOL",
    },
    {
      tipo: "escolha",
      fala: "Qual frase fala do sol?",
      opcoes: [
        { palavra: "O SOL É BOM", correta: true },
        { palavra: "O MAR É AZUL", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual fala do mar?",
      opcoes: [
        { palavra: "O MAR É AZUL", correta: true },
        { palavra: "O SOL É BOM", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Palavras juntas = FRASE. Você já lê frases curtas!", imagem: pipVet },
    { tipo: "fim", fala: "Primeira frase lida sozinho! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 49 · Revisão CVC — fechos L, R, Z
// ══════════════════════════════════════════════════════════
export const dlx49: AulaDlx = {
  slug: "dlx-49-revisao-lrz",
  numero: 49,
  fase: 5,
  fone: "L · R · Z",
  titulo: "Revisão: fechos L, R, Z",
  objetivo: "Discriminar os três fechos mais comuns.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Vou embaralhar os fechos! Você me diz qual palavra é.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual termina em L?",
      opcoes: [
        { palavra: "MEL", correta: true },
        { palavra: "MAR", correta: false },
        { palavra: "LUZ", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual termina em R?",
      opcoes: [
        { palavra: "DOR", correta: true },
        { palavra: "SOL", correta: false },
        { palavra: "PAZ", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual termina em Z?",
      opcoes: [
        { palavra: "LUZ", correta: true },
        { palavra: "GOL", correta: false },
        { palavra: "FLOR", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E essa fecha em quê? FLOR…",
      opcoes: [
        { palavra: "FLOR", correta: true },
        { palavra: "FADA", correta: false },
      ],
    },
    {
      tipo: "silabas",
      fala: "Junta: s, a, l.",
      palavra: "SAL",
      silabas: ["SAL"],
    },
    {
      tipo: "silabas",
      fala: "Junta: m, a, r.",
      palavra: "MAR",
      silabas: ["MAR"],
    },
    { tipo: "reforco", fala: "L, R e Z são os três fechos mais comuns no português.", imagem: pipVet },
    { tipo: "fim", fala: "Três fechos, três medalhas! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 50 · Revisão CVC final + nasais + ponte pra Fase 6
// ══════════════════════════════════════════════════════════
export const dlx50: AulaDlx = {
  slug: "dlx-50-revisao-cvc-final",
  numero: 50,
  fase: 5,
  fone: "…M · CVC",
  titulo: "Revisão final: nasais e mix",
  objetivo: "Fechar Fase 5 com discriminação de nasais e mix geral.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Última aula da Fase 5! Vou misturar TUDO: L, R, Z e nasal M. Você já domina tudo isso.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual palavra é NASAL (som pelo nariz)?",
      opcoes: [
        { palavra: "SIM", correta: true },
        { palavra: "SOL", correta: false },
        { palavra: "MAR", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra é BOM?",
      opcoes: [
        { palavra: "BOM", correta: true },
        { palavra: "BOLA", correta: false },
        { palavra: "PAZ", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Escolhe a palavra: MEL.",
      opcoes: [
        { palavra: "MEL", correta: true },
        { palavra: "MESA", correta: false },
        { palavra: "MAR", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Escolhe: FLOR.",
      opcoes: [
        { palavra: "FLOR", correta: true },
        { palavra: "FADA", correta: false },
        { palavra: "FACA", correta: false },
      ],
    },
    {
      tipo: "silabas",
      fala: "Última leitura: l, u, z.",
      palavra: "LUZ",
      silabas: ["LUZ"],
    },
    {
      tipo: "silabas",
      fala: "E t, o, m.",
      palavra: "TOM",
      silabas: ["TOM"],
    },
    { tipo: "reforco", fala: "Você fechou a Fase 5. Já lê CV, CVC e frases curtas. Vem coisa boa na Fase 6!", imagem: pipVet },
    { tipo: "fim", fala: "Fase 5 concluída! 🌟🌟🌟", imagem: pipVet },
  ],
};
