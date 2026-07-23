/**
 * Fase 1 · Consciência Fonológica (10 aulas)
 * Foco AUDITIVO — ouvir sons antes da letra.
 * Cada aula ~6-8 cenas, 3-5 minutos.
 */
import type { AulaDlx } from "../types";
import { url as macaco } from "@/assets/hiperfocos/animais/macaco.png.asset.json";
import { url as leao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as elefante } from "@/assets/hiperfocos/animais/elefante.png.asset.json";
import { url as coruja } from "@/assets/hiperfocos/animais/coruja.png.asset.json";
import { url as tartaruga } from "@/assets/hiperfocos/animais/tartaruga.png.asset.json";
import { url as vaca } from "@/assets/hiperfocos/fazendinha/vaquinha.png.asset.json";
import { url as cavalo } from "@/assets/hiperfocos/fazendinha/cavalo.png.asset.json";
import { url as galinha } from "@/assets/hiperfocos/fazendinha/galinha.png.asset.json";
import { url as ovelha } from "@/assets/hiperfocos/fazendinha/ovelha.png.asset.json";
import { url as porco } from "@/assets/hiperfocos/fazendinha/porquinho.png.asset.json";
import { url as foguete } from "@/assets/hiperfocos/espaco/foguete.png.asset.json";
import { url as estrela } from "@/assets/hiperfocos/espaco/estrela.png.asset.json";
import { url as lua } from "@/assets/hiperfocos/espaco/lua.png.asset.json";
import { url as planeta } from "@/assets/hiperfocos/espaco/planeta.png.asset.json";
import { url as violao } from "@/assets/hiperfocos/musica/violao.png.asset.json";
import { url as piano } from "@/assets/hiperfocos/musica/piano.png.asset.json";
import { url as pincel } from "@/assets/hiperfocos/arte/pincel.png.asset.json";
import { url as tinta } from "@/assets/hiperfocos/arte/tinta.png.asset.json";
import { url as trex } from "@/assets/hiperfocos/dinossauros/trex.png.asset.json";
import { url as carro } from "@/assets/hiperfocos/carros/carro-corrida.png.asset.json";
import { url as caminhao } from "@/assets/hiperfocos/carros/caminhao.png.asset.json";
import { url as moto } from "@/assets/hiperfocos/carros/moto.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

// ══════════════════════════════════════════════════════════
// AULA 01 · Rimas 1 — parear pelo som final
// ══════════════════════════════════════════════════════════
export const dlx01: AulaDlx = {
  slug: "dlx-01-rimas-1",
  numero: 1,
  fase: 1,
  titulo: "Rima 1",
  objetivo: "Identificar pares de palavras que rimam (som final igual).",
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Eu sou a Pip. Hoje a gente vai brincar de RIMA. Rima é quando o final das palavras é igual, tipo VACA e FACA. Escuta.",
      imagem: pipVet,
    },
    {
      tipo: "escuta",
      fala: "Vaca. Faca. Escuta o final: aca... aca. Rima!",
      palavra: "VACA",
      imagem: vaca,
      enfase: "V",
    },
    {
      tipo: "escolha",
      fala: "Qual palavra rima com VACA? Escuta: VA-CA... escolhe a que termina igual.",
      opcoes: [
        { palavra: "FACA", correta: true },
        { palavra: "SOL", correta: false },
      ],
    },
    {
      tipo: "reforco",
      fala: "Isso! VACA e FACA rimam. O final é IGUAL.",
      imagem: vaca,
    },
    {
      tipo: "escolha",
      fala: "Agora escuta LUA. Qual rima com LUA?",
      opcoes: [
        { palavra: "RUA", correta: true, imagem: undefined },
        { palavra: "PÉ", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual rima com ESTRELA?",
      opcoes: [
        { palavra: "PANELA", correta: true },
        { palavra: "BOLA", correta: false },
        { palavra: "GATO", correta: false },
      ],
    },
    {
      tipo: "fim",
      fala:
        "Você achou as rimas! Rima é o som do FINAL. Amanhã a gente treina mais.",
      imagem: pipVet,
    },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 02 · Rimas 2 — três opções
// ══════════════════════════════════════════════════════════
export const dlx02: AulaDlx = {
  slug: "dlx-02-rimas-2",
  numero: 2,
  fase: 1,
  titulo: "Rima 2",
  objetivo: "Escolher a rima entre 3 opções (aumenta discriminação).",
  cenas: [
    {
      tipo: "abertura",
      fala: "Bora treinar mais rima! Escuta bem o FINAL de cada palavra.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual rima com CORAÇÃO?",
      opcoes: [
        { palavra: "LEÃO", correta: true, imagem: leao },
        { palavra: "GATO", correta: false },
        { palavra: "PÉ", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual rima com MACARRÃO?",
      opcoes: [
        { palavra: "PÃO", correta: true },
        { palavra: "MESA", correta: false },
        { palavra: "COPO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual rima com FOGUETE?",
      opcoes: [
        { palavra: "SORVETE", correta: true },
        { palavra: "SOL", correta: false },
        { palavra: "CASA", correta: false },
      ],
    },
    {
      tipo: "fim",
      fala: "Você é o rei da rima! FINAL igual é rima.",
      imagem: pipVet,
    },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 03 · Som inicial /m/
// ══════════════════════════════════════════════════════════
export const dlx03: AulaDlx = {
  slug: "dlx-03-som-inicial-m",
  numero: 3,
  fase: 1,
  fone: "/m/",
  titulo: "Som M",
  objetivo: "Reconhecer palavras que começam com o som /m/.",
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Hoje o som é o M. Faz assim comigo: MMMMM. A boca fecha e vibra. MMM.",
      imagem: pipVet,
    },
    {
      tipo: "escuta",
      fala: "MMMACACO. MA-CA-CO. Começa com MMM.",
      palavra: "MACACO",
      imagem: macaco,
      enfase: "M",
    },
    {
      tipo: "escuta",
      fala: "MMMOTO. MO-TO. Também começa com MMM.",
      palavra: "MOTO",
      imagem: moto,
      enfase: "M",
    },
    {
      tipo: "escolha",
      fala: "Qual começa com o som MMM?",
      opcoes: [
        { palavra: "MACACO", correta: true, imagem: macaco },
        { palavra: "LEÃO", correta: false, imagem: leao },
      ],
    },
    {
      tipo: "escolha",
      fala: "E agora, qual começa com MMM?",
      opcoes: [
        { palavra: "MOTO", correta: true, imagem: moto },
        { palavra: "CARRO", correta: false, imagem: carro },
        { palavra: "PIANO", correta: false, imagem: piano },
      ],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! MACACO e MOTO começam com MMM.",
      imagem: macaco,
    },
    {
      tipo: "fim",
      fala: "O som M mora no COMECINHO das palavras. Você achou!",
      imagem: pipVet,
    },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 04 · Som inicial /s/
// ══════════════════════════════════════════════════════════
export const dlx04: AulaDlx = {
  slug: "dlx-04-som-inicial-s",
  numero: 4,
  fase: 1,
  fone: "/s/",
  titulo: "Som S",
  objetivo: "Reconhecer palavras que começam com /s/.",
  cenas: [
    {
      tipo: "abertura",
      fala:
        "O som de hoje é o S. Faz de cobrinha comigo: SSSSSS. Ar saindo pela boca.",
      imagem: pipVet,
    },
    {
      tipo: "escuta",
      fala: "SSSOL. SOL. Começa com SSS.",
      palavra: "SOL",
      enfase: "S",
    },
    {
      tipo: "escuta",
      fala: "SSSAPO. SA-PO. Também SSS.",
      palavra: "SAPO",
      enfase: "S",
    },
    {
      tipo: "escolha",
      fala: "Qual começa com o som SSS?",
      opcoes: [
        { palavra: "SAPO", correta: true },
        { palavra: "LEÃO", correta: false, imagem: leao },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual outra começa com SSS?",
      opcoes: [
        { palavra: "SINO", correta: true },
        { palavra: "MOTO", correta: false, imagem: moto },
        { palavra: "PIANO", correta: false, imagem: piano },
      ],
    },
    {
      tipo: "fim",
      fala: "SSSS! A cobrinha S começa muitas palavras. Muito bem!",
      imagem: pipVet,
    },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 05 · Som inicial /p/
// ══════════════════════════════════════════════════════════
export const dlx05: AulaDlx = {
  slug: "dlx-05-som-inicial-p",
  numero: 5,
  fase: 1,
  fone: "/p/",
  titulo: "Som P",
  objetivo: "Reconhecer palavras que começam com /p/.",
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Som novo: P. É um estouro pequenininho: P! P! Como estourar bolha.",
      imagem: pipVet,
    },
    {
      tipo: "escuta",
      fala: "P! PIANO. PI-A-NO.",
      palavra: "PIANO",
      imagem: piano,
      enfase: "P",
    },
    {
      tipo: "escuta",
      fala: "P! PORCO. POR-CO.",
      palavra: "PORCO",
      imagem: porco,
      enfase: "P",
    },
    {
      tipo: "escolha",
      fala: "Qual começa com P?",
      opcoes: [
        { palavra: "PINCEL", correta: true, imagem: pincel },
        { palavra: "VACA", correta: false, imagem: vaca },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual começa com P?",
      opcoes: [
        { palavra: "PLANETA", correta: true, imagem: planeta },
        { palavra: "MOTO", correta: false, imagem: moto },
        { palavra: "GALINHA", correta: false, imagem: galinha },
      ],
    },
    {
      tipo: "fim",
      fala: "P de PIP! Você tá voando.",
      imagem: pipVet,
    },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 06 · Contando sílabas
// ══════════════════════════════════════════════════════════
export const dlx06: AulaDlx = {
  slug: "dlx-06-silabas",
  numero: 6,
  fase: 1,
  titulo: "Sílabas",
  objetivo: "Separar palavras em sílabas (toca em cada pedaço).",
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Toda palavra é feita de pedaços. A gente chama de SÍLABAS. Bora contar!",
      imagem: pipVet,
    },
    {
      tipo: "silabas",
      fala: "VACA tem dois pedaços: VA-CA. Toca em cada um.",
      palavra: "VACA",
      silabas: ["VA", "CA"],
      imagem: vaca,
    },
    {
      tipo: "silabas",
      fala: "MACACO tem três pedaços: MA-CA-CO.",
      palavra: "MACACO",
      silabas: ["MA", "CA", "CO"],
      imagem: macaco,
    },
    {
      tipo: "silabas",
      fala: "FOGUETE: FO-GUE-TE. Três pedaços.",
      palavra: "FOGUETE",
      silabas: ["FO", "GUE", "TE"],
      imagem: foguete,
    },
    {
      tipo: "silabas",
      fala: "ELEFANTE tem quatro: E-LE-FAN-TE.",
      palavra: "ELEFANTE",
      silabas: ["E", "LE", "FAN", "TE"],
      imagem: elefante,
    },
    {
      tipo: "fim",
      fala: "Palavra é feita de pedaços. Você contou todos!",
      imagem: pipVet,
    },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 07 · Par mínimo P × B
// ══════════════════════════════════════════════════════════
export const dlx07: AulaDlx = {
  slug: "dlx-07-par-minimo-pb",
  numero: 7,
  fase: 1,
  titulo: "P × B",
  objetivo: "Discriminar sons parecidos /p/ e /b/.",
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Alguns sons são parecidos, mas MUDAM a palavra. P e B são assim. Escuta: PATO... BATO. Diferente!",
      imagem: pipVet,
    },
    {
      tipo: "escuta",
      fala: "PATO. P! P! P!",
      palavra: "PATO",
      enfase: "P",
    },
    {
      tipo: "escuta",
      fala: "BATO. B! B! B!",
      palavra: "BATO",
      enfase: "B",
    },
    {
      tipo: "escolha",
      fala: "Escuta: PATO. Toca em PATO.",
      opcoes: [
        { palavra: "PATO", correta: true },
        { palavra: "BATO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Agora: BOLA. Toca em BOLA.",
      opcoes: [
        { palavra: "BOLA", correta: true },
        { palavra: "POLA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Última: PORTA. Toca em PORTA.",
      opcoes: [
        { palavra: "PORTA", correta: true },
        { palavra: "BORDA", correta: false },
      ],
    },
    {
      tipo: "fim",
      fala: "P e B são vizinhos, mas diferentes. Ouvido afiado!",
      imagem: pipVet,
    },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 08 · Par mínimo F × V
// ══════════════════════════════════════════════════════════
export const dlx08: AulaDlx = {
  slug: "dlx-08-par-minimo-fv",
  numero: 8,
  fase: 1,
  titulo: "F × V",
  objetivo: "Discriminar /f/ e /v/ (F sem voz, V com voz).",
  cenas: [
    {
      tipo: "abertura",
      fala:
        "F e V são feitos com os dentes no lábio. F não vibra. V vibra! Põe a mão no pescoço. FFF... VVV.",
      imagem: pipVet,
    },
    {
      tipo: "escuta",
      fala: "FACA. FFF.",
      palavra: "FACA",
      enfase: "F",
    },
    {
      tipo: "escuta",
      fala: "VACA. VVV.",
      palavra: "VACA",
      imagem: vaca,
      enfase: "V",
    },
    {
      tipo: "escolha",
      fala: "Escuta: VACA. Toca em VACA.",
      opcoes: [
        { palavra: "VACA", correta: true, imagem: vaca },
        { palavra: "FACA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Agora: FOCA. Toca em FOCA.",
      opcoes: [
        { palavra: "FOCA", correta: true },
        { palavra: "VOCA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E: VELA. Toca em VELA.",
      opcoes: [
        { palavra: "VELA", correta: true },
        { palavra: "FELA", correta: false },
      ],
    },
    {
      tipo: "fim",
      fala: "F sem voz, V com voz. Você sentiu a vibração!",
      imagem: pipVet,
    },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 09 · Último som
// ══════════════════════════════════════════════════════════
export const dlx09: AulaDlx = {
  slug: "dlx-09-ultimo-som",
  numero: 9,
  fase: 1,
  titulo: "Som Final",
  objetivo: "Identificar o último som da palavra.",
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Toda palavra tem UM som no final. Escuta: SOL. O último som é... LLL. SO-L.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Escuta CAVALO. Qual som termina? Toca no som certo.",
      opcoes: [
        { palavra: "O", correta: true },
        { palavra: "A", correta: false },
        { palavra: "S", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Escuta ESTRELA. Qual som termina?",
      opcoes: [
        { palavra: "A", correta: true },
        { palavra: "L", correta: false },
        { palavra: "O", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Escuta PIANO. Qual som termina?",
      opcoes: [
        { palavra: "O", correta: true },
        { palavra: "A", correta: false },
        { palavra: "N", correta: false },
      ],
    },
    {
      tipo: "fim",
      fala: "Você achou o FINAL. Ouvido de espião!",
      imagem: pipVet,
    },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 10 · Revisão Fase 1
// ══════════════════════════════════════════════════════════
export const dlx10: AulaDlx = {
  slug: "dlx-10-revisao-fase-1",
  numero: 10,
  fase: 1,
  titulo: "Revisão Fase 1",
  objetivo: "Misturar rima, som inicial, sílabas e som final.",
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Última da Fase 1! A gente vai revisar TUDO: rima, som do começo, pedaços e som do fim.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Rima: qual rima com TARTARUGA?",
      opcoes: [
        { palavra: "LAGARTA", correta: false },
        { palavra: "JARRUGA", correta: true },
        { palavra: "CORUJA", correta: false, imagem: coruja },
      ],
    },
    {
      tipo: "escolha",
      fala: "Som inicial: qual começa com MMM?",
      opcoes: [
        { palavra: "MOTO", correta: true, imagem: moto },
        { palavra: "SAPO", correta: false },
        { palavra: "PIANO", correta: false, imagem: piano },
      ],
    },
    {
      tipo: "silabas",
      fala: "Conta os pedaços de TARTARUGA.",
      palavra: "TARTARUGA",
      silabas: ["TAR", "TA", "RU", "GA"],
      imagem: tartaruga,
    },
    {
      tipo: "escolha",
      fala: "Som final: qual som termina CAMINHÃO?",
      opcoes: [
        { palavra: "ÃO", correta: true },
        { palavra: "A", correta: false },
        { palavra: "O", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Par mínimo: escuta FACA. Toca em FACA.",
      opcoes: [
        { palavra: "FACA", correta: true },
        { palavra: "VACA", correta: false, imagem: vaca },
      ],
    },
    {
      tipo: "reforco",
      fala: "Você fechou a Fase 1! O ouvido tá pronto pra ver as LETRAS.",
      imagem: pipVet,
    },
    {
      tipo: "fim",
      fala:
        "Próxima fase: vogais! A, E, I, O, U. Cada uma com seu som e seu jeito de escrever.",
      imagem: pipVet,
    },
  ],
};

// silence unused-import warnings for reserved assets used in próximas fases
void [cavalo, ovelha, foguete, estrela, lua, planeta, violao, tinta, trex, caminhao];
