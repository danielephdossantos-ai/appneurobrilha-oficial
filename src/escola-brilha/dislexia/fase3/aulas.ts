/**
 * Fase 3 · Consoantes Contínuas (10 aulas · dlx-21 a dlx-30)
 * Consoantes que "seguram" o som e podem ser esticadas: M, S, L, F, V, N, R, Z.
 * Ideais pra dislexia porque a criança consegue OUVIR e SENTIR o som na boca antes
 * de tentar juntar com vogal. Método Orton-Gillingham: som primeiro, letra depois,
 * palavra por último — sempre com apoio articulatório (o que a boca faz).
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
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

// ══════════════════════════════════════════════════════════
// AULA 21 · Consoante M
// ══════════════════════════════════════════════════════════
export const dlx21: AulaDlx = {
  slug: "dlx-21-consoante-m",
  numero: 21,
  fase: 3,
  fone: "/m/",
  titulo: "Consoante M",
  objetivo: "Ouvir e esticar o som /m/ — boca fechada, vibra no nariz.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Consoante m! Fecha a boca e faz mmm, igual quando a comida tá gostosa. Sente vibrar no nariz.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra m. mmm.", palavra: "M", enfase: "M" },
    { tipo: "escuta", fala: "Mmm... macaco. Começa com mmm.", palavra: "MACACO", imagem: macaco, enfase: "M" },
    { tipo: "escuta", fala: "Mmm... mão. Também mmm.", palavra: "MÃO", enfase: "M" },
    {
      tipo: "escolha",
      fala: "Qual começa com mmm?",
      opcoes: [
        { palavra: "MACACO", correta: true, imagem: macaco },
        { palavra: "VACA", correta: false, imagem: vaca },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas começa com mmm?",
      opcoes: [
        { palavra: "MALA", correta: true },
        { palavra: "LEÃO", correta: false, imagem: leao },
        { palavra: "ESTRELA", correta: false, imagem: estrela },
      ],
    },
    { tipo: "reforco", fala: "Boca fechada, som sai pelo nariz. Isso é o mmm!", imagem: pipVet },
    { tipo: "fim", fala: "m de mãe, m de mel. Você achou o m!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 22 · Consoante S
// ══════════════════════════════════════════════════════════
export const dlx22: AulaDlx = {
  slug: "dlx-22-consoante-s",
  numero: 22,
  fase: 3,
  fone: "/s/",
  titulo: "Consoante S",
  objetivo: "Ouvir /s/ — som de cobra, sopro contínuo entre os dentes.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Consoante s! Junta os dentes e sopra: sss. É o som da cobra!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra s. sss.", palavra: "S", enfase: "S" },
    { tipo: "escuta", fala: "Sss... sol. Sopro no começo.", palavra: "SOL", enfase: "S" },
    { tipo: "escuta", fala: "Sss... sapo.", palavra: "SAPO", enfase: "S" },
    {
      tipo: "escolha",
      fala: "Qual começa com sss?",
      opcoes: [
        { palavra: "SAPATO", correta: true },
        { palavra: "MACACO", correta: false, imagem: macaco },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas começa com sss?",
      opcoes: [
        { palavra: "SINO", correta: true },
        { palavra: "OVELHA", correta: false, imagem: ovelha },
        { palavra: "LUA", correta: false, imagem: lua },
      ],
    },
    { tipo: "reforco", fala: "O ar sai devagar entre os dentes. Isso é o sss!", imagem: pipVet },
    { tipo: "fim", fala: "s de sol, s de sapo. Sopro perfeito!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 23 · Consoante L
// ══════════════════════════════════════════════════════════
export const dlx23: AulaDlx = {
  slug: "dlx-23-consoante-l",
  numero: 23,
  fase: 3,
  fone: "/l/",
  titulo: "Consoante L",
  objetivo: "Ouvir /l/ — língua encosta atrás dos dentes de cima.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Consoante l! A ponta da língua sobe e encosta atrás dos dentes de cima: lll.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra l. lll.", palavra: "L", enfase: "L" },
    { tipo: "escuta", fala: "Lll... leão. Começa com lll.", palavra: "LEÃO", imagem: leao, enfase: "L" },
    { tipo: "escuta", fala: "Lll... lua.", palavra: "LUA", imagem: lua, enfase: "L" },
    {
      tipo: "escolha",
      fala: "Qual começa com lll?",
      opcoes: [
        { palavra: "LEÃO", correta: true, imagem: leao },
        { palavra: "SAPO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas começa com lll?",
      opcoes: [
        { palavra: "LIVRO", correta: true },
        { palavra: "MACACO", correta: false, imagem: macaco },
        { palavra: "ESTRELA", correta: false, imagem: estrela },
      ],
    },
    { tipo: "reforco", fala: "Língua encosta, som sai dos lados. Isso é o lll!", imagem: pipVet },
    { tipo: "fim", fala: "l de lua, l de leão. Muito bem!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 24 · Consoante F
// ══════════════════════════════════════════════════════════
export const dlx24: AulaDlx = {
  slug: "dlx-24-consoante-f",
  numero: 24,
  fase: 3,
  fone: "/f/",
  titulo: "Consoante F",
  objetivo: "Ouvir /f/ — dente de cima toca o lábio de baixo e sopra.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Consoante f! Dente de cima morde de leve o lábio de baixo e sopra: fff.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra f. fff.", palavra: "F", enfase: "F" },
    { tipo: "escuta", fala: "Fff... foguete.", palavra: "FOGUETE", imagem: foguete, enfase: "F" },
    { tipo: "escuta", fala: "Fff... faca.", palavra: "FACA", enfase: "F" },
    {
      tipo: "escolha",
      fala: "Qual começa com fff?",
      opcoes: [
        { palavra: "FOGUETE", correta: true, imagem: foguete },
        { palavra: "LEÃO", correta: false, imagem: leao },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas começa com fff?",
      opcoes: [
        { palavra: "FADA", correta: true },
        { palavra: "SOL", correta: false },
        { palavra: "VACA", correta: false, imagem: vaca },
      ],
    },
    { tipo: "reforco", fala: "Dente encosta no lábio, sopra. Isso é o fff!", imagem: pipVet },
    { tipo: "fim", fala: "f de foguete, f de fada. Sopro certo!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 25 · Consoante V
// ══════════════════════════════════════════════════════════
export const dlx25: AulaDlx = {
  slug: "dlx-25-consoante-v",
  numero: 25,
  fase: 3,
  fone: "/v/",
  titulo: "Consoante V",
  objetivo: "Ouvir /v/ — mesma boca do F, mas VIBRA (som ligado).",
  cenas: [
    {
      tipo: "abertura",
      fala: "Consoante v! Mesma boca do f — dente no lábio — mas agora o som vibra: vvv.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra v. vvv. Sente vibrar!", palavra: "V", enfase: "V" },
    { tipo: "escuta", fala: "Vvv... vaca.", palavra: "VACA", imagem: vaca, enfase: "V" },
    { tipo: "escuta", fala: "Vvv... vela.", palavra: "VELA", enfase: "V" },
    {
      tipo: "escolha",
      fala: "Qual começa com vvv?",
      opcoes: [
        { palavra: "VACA", correta: true, imagem: vaca },
        { palavra: "FOGUETE", correta: false, imagem: foguete },
      ],
    },
    {
      tipo: "escolha",
      fala: "O f sopra, o v vibra. Qual começa com vvv?",
      opcoes: [
        { palavra: "VOVÔ", correta: true },
        { palavra: "FACA", correta: false },
        { palavra: "SAPO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "O f é só sopro, o v é sopro que treme. Você separou!", imagem: pipVet },
    { tipo: "fim", fala: "v de vaca, v de vovô. Vibrou tudo!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 26 · Consoante N
// ══════════════════════════════════════════════════════════
export const dlx26: AulaDlx = {
  slug: "dlx-26-consoante-n",
  numero: 26,
  fase: 3,
  fone: "/n/",
  titulo: "Consoante N",
  objetivo: "Ouvir /n/ — língua encosta em cima, som sai pelo nariz.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Consoante n! Língua encosta atrás dos dentes, boca aberta, som sai pelo nariz: nnn.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra n. nnn.", palavra: "N", enfase: "N" },
    { tipo: "escuta", fala: "Nnn... navio.", palavra: "NAVIO", enfase: "N" },
    { tipo: "escuta", fala: "Nnn... nuvem.", palavra: "NUVEM", enfase: "N" },
    {
      tipo: "escolha",
      fala: "Qual começa com nnn?",
      opcoes: [
        { palavra: "NARIZ", correta: true },
        { palavra: "SAPO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas começa com nnn?",
      opcoes: [
        { palavra: "NENÊ", correta: true },
        { palavra: "MACACO", correta: false, imagem: macaco },
        { palavra: "LUA", correta: false, imagem: lua },
      ],
    },
    {
      tipo: "escolha",
      fala: "Cuidado! O m e o n são parecidos. Qual começa com nnn, com a língua em cima?",
      opcoes: [
        { palavra: "NAVIO", correta: true },
        { palavra: "MALA", correta: false },
      ],
    },
    { tipo: "fim", fala: "O m fecha a boca, o n deixa a língua em cima. Você achou o n!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 27 · Consoante R (som fraco/inicial "r brando" e "rr forte")
// ══════════════════════════════════════════════════════════
export const dlx27: AulaDlx = {
  slug: "dlx-27-consoante-r",
  numero: 27,
  fase: 3,
  fone: "/r/",
  titulo: "Consoante R",
  objetivo: "Ouvir o R forte no começo da palavra — som de motor.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Consoante r! No começo da palavra, o r é forte, som de motor: rrr!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra r. rrr.", palavra: "R", enfase: "R" },
    { tipo: "escuta", fala: "Rrr... rato.", palavra: "RATO", enfase: "R" },
    { tipo: "escuta", fala: "Rrr... rosa.", palavra: "ROSA", enfase: "R" },
    {
      tipo: "escolha",
      fala: "Qual começa com rrr?",
      opcoes: [
        { palavra: "RATO", correta: true },
        { palavra: "SAPO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual dessas começa com rrr?",
      opcoes: [
        { palavra: "RIO", correta: true },
        { palavra: "LEÃO", correta: false, imagem: leao },
        { palavra: "VACA", correta: false, imagem: vaca },
      ],
    },
    { tipo: "reforco", fala: "O r do começo é forte, som de motor ligando!", imagem: pipVet },
    { tipo: "fim", fala: "r de rato, r de rosa. Motor ligado!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 28 · Consoante Z
// ══════════════════════════════════════════════════════════
export const dlx28: AulaDlx = {
  slug: "dlx-28-consoante-z",
  numero: 28,
  fase: 3,
  fone: "/z/",
  titulo: "Consoante Z",
  objetivo: "Ouvir /z/ — mesma boca do S, mas VIBRA (som de abelha).",
  cenas: [
    {
      tipo: "abertura",
      fala: "Consoante z! Mesma boca do s — dentes juntos — mas agora vibra. Som da abelha: zzz!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Essa é a letra z. zzz. Vibrando!", palavra: "Z", enfase: "Z" },
    { tipo: "escuta", fala: "Zzz... zebra.", palavra: "ZEBRA", enfase: "Z" },
    { tipo: "escuta", fala: "Zzz... zero.", palavra: "ZERO", enfase: "Z" },
    {
      tipo: "escolha",
      fala: "Qual começa com zzz?",
      opcoes: [
        { palavra: "ZEBRA", correta: true },
        { palavra: "SAPO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "O s sopra, o z vibra. Qual começa com zzz?",
      opcoes: [
        { palavra: "ZERO", correta: true },
        { palavra: "SINO", correta: false },
        { palavra: "VACA", correta: false, imagem: vaca },
      ],
    },
    { tipo: "reforco", fala: "O s é sopro, o z é sopro que treme — som de abelha!", imagem: pipVet },
    { tipo: "fim", fala: "z de zebra, z de zero. Abelha zumbindo!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 29 · Revisão M · S · L · F
// ══════════════════════════════════════════════════════════
export const dlx29: AulaDlx = {
  slug: "dlx-29-revisao-mslf",
  numero: 29,
  fase: 3,
  titulo: "Revisão M · S · L · F",
  objetivo: "Discriminar as quatro primeiras consoantes contínuas pelo som inicial.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Vamos misturar m, s, l e f. Escuta o comecinho com atenção.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual começa com mmm, de boca fechada?",
      opcoes: [
        { palavra: "MACACO", correta: true, imagem: macaco },
        { palavra: "SAPO", correta: false },
        { palavra: "FOGUETE", correta: false, imagem: foguete },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com sss, sopro de cobra?",
      opcoes: [
        { palavra: "SOL", correta: true },
        { palavra: "LEÃO", correta: false, imagem: leao },
        { palavra: "MALA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com lll, língua em cima?",
      opcoes: [
        { palavra: "LUA", correta: true, imagem: lua },
        { palavra: "FADA", correta: false },
        { palavra: "SINO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com fff, dente no lábio?",
      opcoes: [
        { palavra: "FACA", correta: true },
        { palavra: "MÃO", correta: false },
        { palavra: "LIVRO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Cada consoante tem uma boca diferente. Você separou!", imagem: pipVet },
    { tipo: "fim", fala: "m, s, l, f — quatro sons, quatro bocas. Muito bem!", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 30 · Revisão V · N · R · Z + ponte pra sílaba
// ══════════════════════════════════════════════════════════
export const dlx30: AulaDlx = {
  slug: "dlx-30-revisao-vnrz",
  numero: 30,
  fase: 3,
  titulo: "Revisão V · N · R · Z",
  objetivo: "Fechar a fase revisando V, N, R, Z e antecipando sílaba consoante+vogal.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Últimas quatro: v, n, r, z. Depois a gente junta com vogal!",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual começa com vvv, que vibra no lábio?",
      opcoes: [
        { palavra: "VACA", correta: true, imagem: vaca },
        { palavra: "NAVIO", correta: false },
        { palavra: "RATO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com nnn, som pelo nariz?",
      opcoes: [
        { palavra: "NUVEM", correta: true },
        { palavra: "ZEBRA", correta: false },
        { palavra: "VELA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com rrr, som de motor?",
      opcoes: [
        { palavra: "ROSA", correta: true },
        { palavra: "VOVÔ", correta: false },
        { palavra: "NENÊ", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual começa com zzz, som de abelha?",
      opcoes: [
        { palavra: "ZERO", correta: true },
        { palavra: "NAVIO", correta: false },
        { palavra: "VACA", correta: false, imagem: vaca },
      ],
    },
    { tipo: "silabas", fala: "Agora junta: m mais a dá má. macaco começa com má.", palavra: "MACACO", silabas: ["MA", "CA", "CO"], imagem: macaco },
    { tipo: "silabas", fala: "s mais o dá só. sol tem só.", palavra: "SOL", silabas: ["SOL"] },
    { tipo: "fim", fala: "Fase 3 fechada! Você já tem as vogais e as consoantes contínuas. Agora vem sílaba!", imagem: pipVet },
  ],
};
