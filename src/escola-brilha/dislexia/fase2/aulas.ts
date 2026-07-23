/**
 * Fase 2 · Vogais + Correspondência (10 aulas)
 * Foco: cada vogal A E I O U — som, forma da letra, palavra que começa com ela.
 * Multissensorial: ouve (auditivo) + vê a letra (visual) + toca a opção (cinestésico).
 */
import type { AulaDlx } from "../types";
import { url as macaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as leao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as elefante } from "@/assets/hiperfocos/animais/elefante.png.asset.json";
import { url as coruja } from "@/assets/hiperfocos/animais/coruja.png.asset.json";
import { url as tartaruga } from "@/assets/hiperfocos/animais/tartaruga.png.asset.json";
import { url as vaca } from "@/assets/hiperfocos/fazendinha/vaquinha.png.asset.json";
import { url as galinha } from "@/assets/hiperfocos/fazendinha/galinha.png.asset.json";
import { url as ovelha } from "@/assets/hiperfocos/fazendinha/ovelha.png.asset.json";
import { url as porco } from "@/assets/hiperfocos/fazendinha/porquinho.png.asset.json";
import { url as cavalo } from "@/assets/hiperfocos/fazendinha/cavalo.png.asset.json";
import { url as foguete } from "@/assets/hiperfocos/espaco/foguete.png.asset.json";
import { url as estrela } from "@/assets/hiperfocos/espaco/estrela.png.asset.json";
import { url as lua } from "@/assets/hiperfocos/espaco/lua.png.asset.json";
import { url as astronauta } from "@/assets/hiperfocos/espaco/astronauta.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

// ══════════════════════════════════════════════════════════
// AULA 11 · Vogal A
// ══════════════════════════════════════════════════════════
export const dlx11: AulaDlx = {
  slug: "dlx-11-vogal-a",
  numero: 11,
  fase: 2,
  fone: "/a/",
  titulo: "Vogal A",
  objetivo: "Ouvir o som /a/, reconhecer a letra A e palavras que começam com A.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Hoje a estrela é a vogal a. Abre a boca bem grande e faz: aaa. Igual quando o médico olha sua garganta.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra a. aaa.", palavra: "A", enfase: "A" },
    { tipo: "escuta", fala: "Aaa... avião. Começa com aaa.", palavra: "AVIÃO", enfase: "A" },
    { tipo: "escuta", fala: "Aaa... abelha. Também aaa.", palavra: "ABELHA", enfase: "A" },
    {
      tipo: "escolha",
      fala: "Qual começa com aaa?",
      opcoes: [
        { palavra: "ABACAXI", correta: true },
        { palavra: "LEÃO", correta: false, imagem: leao },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas começa com aaa?",
      opcoes: [
        { palavra: "ANEL", correta: true },
        { palavra: "SOL", correta: false },
        { palavra: "VACA", correta: false, imagem: vaca },
      ],
    },
    { tipo: "reforco", fala: "Isso! A boca abre bem grande no a.", imagem: pipVet },
    { tipo: "fim", fala: "a de aurora, a de amigo. Você achou o a!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 12 · Vogal E
// ══════════════════════════════════════════════════════════
export const dlx12: AulaDlx = {
  slug: "dlx-12-vogal-e",
  numero: 12,
  fase: 2,
  fone: "/e/",
  titulo: "Vogal E",
  objetivo: "Ouvir /e/, reconhecer a letra E e palavras que começam com E.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Agora é a vogal E. Sorriso pequeno, canto da boca pro lado: EEEEE.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra E. EEEEE.", palavra: "E", enfase: "E" },
    { tipo: "escuta", fala: "EEELEFANTE. E-LE-FAN-TE.", palavra: "ELEFANTE", imagem: elefante, enfase: "E" },
    { tipo: "escuta", fala: "EEESTRELA. ES-TRE-LA.", palavra: "ESTRELA", imagem: estrela, enfase: "E" },
    {
      tipo: "escolha",
      fala: "Qual começa com EEE?",
      opcoes: [
        { palavra: "ELEFANTE", correta: true, imagem: elefante },
        { palavra: "MACACO", correta: false, imagem: macaco },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual também começa com EEE?",
      opcoes: [
        { palavra: "ESCADA", correta: true },
        { palavra: "PORCO", correta: false, imagem: porco },
        { palavra: "LUA", correta: false, imagem: lua },
      ],
    },
    { tipo: "fim", fala: "Boca sorri, sai EEE. Muito bem!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 13 · Vogal I
// ══════════════════════════════════════════════════════════
export const dlx13: AulaDlx = {
  slug: "dlx-13-vogal-i",
  numero: 13,
  fase: 2,
  fone: "/i/",
  titulo: "Vogal I",
  objetivo: "Ouvir /i/, reconhecer a letra I e palavras que começam com I.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Vogal I! Sorriso bem grande, mostra os dentes: IIIIII.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra I. IIIII.", palavra: "I", enfase: "I" },
    { tipo: "escuta", fala: "IIIGREJA. I-GRE-JA.", palavra: "IGREJA", enfase: "I" },
    { tipo: "escuta", fala: "IIILHA. I-LHA.", palavra: "ILHA", enfase: "I" },
    {
      tipo: "escolha",
      fala: "Qual começa com IIII?",
      opcoes: [
        { palavra: "IGUANA", correta: true },
        { palavra: "GALINHA", correta: false, imagem: galinha },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas começa com IIII?",
      opcoes: [
        { palavra: "IMÃ", correta: true },
        { palavra: "OVELHA", correta: false, imagem: ovelha },
        { palavra: "FOGUETE", correta: false, imagem: foguete },
      ],
    },
    { tipo: "fim", fala: "IIII é o sorriso do dentista! Achou!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 14 · Vogal O
// ══════════════════════════════════════════════════════════
export const dlx14: AulaDlx = {
  slug: "dlx-14-vogal-o",
  numero: 14,
  fase: 2,
  fone: "/o/",
  titulo: "Vogal O",
  objetivo: "Ouvir /o/, reconhecer a letra O e palavras que começam com O.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Vogal O! A boca faz uma bolinha, uma OVA redondinha: OOOOO.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra O. OOOOO.", palavra: "O", enfase: "O" },
    { tipo: "escuta", fala: "OOOVO. O-VO.", palavra: "OVO", enfase: "O" },
    { tipo: "escuta", fala: "OOORELHA. O-RE-LHA.", palavra: "ORELHA", enfase: "O" },
    {
      tipo: "escolha",
      fala: "Qual começa com OOO?",
      opcoes: [
        { palavra: "OVELHA", correta: true, imagem: ovelha },
        { palavra: "MACACO", correta: false, imagem: macaco },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas começa com OOO?",
      opcoes: [
        { palavra: "ÓCULOS", correta: true },
        { palavra: "CAVALO", correta: false, imagem: cavalo },
        { palavra: "TARTARUGA", correta: false, imagem: tartaruga },
      ],
    },
    { tipo: "fim", fala: "Boca redonda, sai OOO. Show!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 15 · Vogal U
// ══════════════════════════════════════════════════════════
export const dlx15: AulaDlx = {
  slug: "dlx-15-vogal-u",
  numero: 15,
  fase: 2,
  fone: "/u/",
  titulo: "Vogal U",
  objetivo: "Ouvir /u/, reconhecer a letra U e palavras que começam com U.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Última vogal: U! Bico igual assobiando: UUUUU. Como o trem: UUUU!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra U. UUUUU.", palavra: "U", enfase: "U" },
    { tipo: "escuta", fala: "UUUVA. U-VA.", palavra: "UVA", enfase: "U" },
    { tipo: "escuta", fala: "UUURSO. UR-SO.", palavra: "URSO", enfase: "U" },
    {
      tipo: "escolha",
      fala: "Qual começa com UUU?",
      opcoes: [
        { palavra: "UNHA", correta: true },
        { palavra: "ESTRELA", correta: false, imagem: estrela },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas começa com UUU?",
      opcoes: [
        { palavra: "URUBU", correta: true },
        { palavra: "LEÃO", correta: false, imagem: leao },
        { palavra: "PORCO", correta: false, imagem: porco },
      ],
    },
    { tipo: "fim", fala: "Bico feito, saiu UUU. Você conhece TODAS as vogais!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 16 · Revisão A/E/I — som inicial
// ══════════════════════════════════════════════════════════
export const dlx16: AulaDlx = {
  slug: "dlx-16-revisao-aei",
  numero: 16,
  fase: 2,
  titulo: "Revisão A · E · I",
  objetivo: "Discriminar as vogais A, E, I no início da palavra.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Vamos misturar A, E e I. Escuta o COMECINHO de cada palavra.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual começa com AAA?",
      opcoes: [
        { palavra: "ABELHA", correta: true },
        { palavra: "ELEFANTE", correta: false, imagem: elefante },
        { palavra: "IGREJA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com EEE?",
      opcoes: [
        { palavra: "ESTRELA", correta: true, imagem: estrela },
        { palavra: "ANEL", correta: false },
        { palavra: "ILHA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com IIII?",
      opcoes: [
        { palavra: "IMÃ", correta: true },
        { palavra: "AVIÃO", correta: false },
        { palavra: "ESCADA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Cada vogal tem um som só dela. Você separou!", imagem: pipVet },
    { tipo: "fim", fala: "A boca abre, sorri, mostra os dentes — cada uma diferente!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 17 · Revisão O/U — pares vizinhos
// ══════════════════════════════════════════════════════════
export const dlx17: AulaDlx = {
  slug: "dlx-17-revisao-ou",
  numero: 17,
  fase: 2,
  titulo: "Revisão O · U",
  objetivo: "Discriminar /o/ e /u/ — vogais parecidas, sons diferentes.",
  cenas: [
    {
      tipo: "abertura",
      fala: "O e U são parecidas — as duas fazem bico. Mas O é bolinha e U é bico apertado. Escuta: OVO... UVA.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "OOOVO. Boca redonda.", palavra: "OVO", enfase: "O" },
    { tipo: "escuta", fala: "UUUVA. Bico apertado.", palavra: "UVA", enfase: "U" },
    {
      tipo: "escolha",
      fala: "Qual começa com OOO?",
      opcoes: [
        { palavra: "ORELHA", correta: true },
        { palavra: "URSO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com UUU?",
      opcoes: [
        { palavra: "UNHA", correta: true },
        { palavra: "ÓCULOS", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Última: qual começa com OOO?",
      opcoes: [
        { palavra: "OVELHA", correta: true, imagem: ovelha },
        { palavra: "URUBU", correta: false },
        { palavra: "ESTRELA", correta: false, imagem: estrela },
      ],
    },
    { tipo: "fim", fala: "Bolinha O, bico U. Sons diferentes!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 18 · Vogal no MEIO da palavra
// ══════════════════════════════════════════════════════════
export const dlx18: AulaDlx = {
  slug: "dlx-18-vogal-no-meio",
  numero: 18,
  fase: 2,
  titulo: "Vogal no Meio",
  objetivo: "Ouvir a vogal que aparece no MEIO da palavra (não só no começo).",
  cenas: [
    {
      tipo: "abertura",
      fala: "Vogal também mora no MEIO da palavra! Escuta: P-AAA-TO. O AAA tá no meio.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "P-A-TO. A vogal do meio é AAA.", palavra: "PATO", enfase: "A" },
    { tipo: "escuta", fala: "S-O-L. A vogal do meio é OOO.", palavra: "SOL", enfase: "O" },
    { tipo: "escuta", fala: "L-U-A. A vogal é UUU.", palavra: "LUA", imagem: lua, enfase: "U" },
    {
      tipo: "escolha",
      fala: "Que vogal tem no meio de PAPO? P-?-PO.",
      opcoes: [
        { palavra: "A", correta: true },
        { palavra: "E", correta: false },
        { palavra: "I", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E no meio de SINO? S-?-NO.",
      opcoes: [
        { palavra: "I", correta: true },
        { palavra: "O", correta: false },
        { palavra: "U", correta: false },
      ],
    },
    { tipo: "fim", fala: "A vogal se esconde no meio também. Você achou!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 19 · Sílabas com vogal (VA-VE-VI-VO-VU)
// ══════════════════════════════════════════════════════════
export const dlx19: AulaDlx = {
  slug: "dlx-19-silabas-vogal",
  numero: 19,
  fase: 2,
  titulo: "Sílaba com Vogal",
  objetivo: "Perceber que consoante + vogal formam sílabas (VA, VE, VI, VO, VU).",
  cenas: [
    {
      tipo: "abertura",
      fala: "Quando o V encontra a vogal, faz uma sílaba! V + A = VA. V + I = VI. Escuta.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "V + A = VA. VVVA. VACA começa com VA!", palavra: "VA", enfase: "V" },
    { tipo: "silabas", fala: "VACA: VA-CA.", palavra: "VACA", silabas: ["VA", "CA"], imagem: vaca },
    { tipo: "silabas", fala: "VELA: VE-LA.", palavra: "VELA", silabas: ["VE", "LA"] },
    { tipo: "silabas", fala: "VIDA: VI-DA.", palavra: "VIDA", silabas: ["VI", "DA"] },
    { tipo: "silabas", fala: "VOVÔ: VO-VÔ.", palavra: "VOVÔ", silabas: ["VO", "VÔ"] },
    {
      tipo: "escolha",
      fala: "Qual sílaba começa VACA?",
      opcoes: [
        { palavra: "VA", correta: true },
        { palavra: "VI", correta: false },
        { palavra: "VU", correta: false },
      ],
    },
    { tipo: "fim", fala: "Consoante + vogal = sílaba. Segredo revelado!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 20 · Revisão geral das 5 vogais
// ══════════════════════════════════════════════════════════
export const dlx20: AulaDlx = {
  slug: "dlx-20-revisao-vogais",
  numero: 20,
  fase: 2,
  titulo: "Fecha Vogais",
  objetivo: "Rever A E I O U — som + palavra inicial.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Chegou o fim da Fase 2! Vamos rever as CINCO vogais que você aprendeu.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual começa com AAA?",
      opcoes: [
        { palavra: "ANEL", correta: true },
        { palavra: "URSO", correta: false },
        { palavra: "OVO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com EEE?",
      opcoes: [
        { palavra: "ELEFANTE", correta: true, imagem: elefante },
        { palavra: "IMÃ", correta: false },
        { palavra: "UVA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com IIII?",
      opcoes: [
        { palavra: "IGREJA", correta: true },
        { palavra: "AVIÃO", correta: false },
        { palavra: "ORELHA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com OOO?",
      opcoes: [
        { palavra: "ÓCULOS", correta: true },
        { palavra: "ESCADA", correta: false },
        { palavra: "URUBU", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com UUU?",
      opcoes: [
        { palavra: "URSO", correta: true },
        { palavra: "ABELHA", correta: false },
        { palavra: "ILHA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "As CINCO vogais no seu ouvido!", imagem: pipVet },
    { tipo: "fim", fala: "A, E, I, O, U — as vogais são as MÃES das palavras. Fase 2 completa!", imagem: pipVet },
  ],
};
