import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as pipa } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as fada } from "@/assets/pip-girl-fada.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as dado } from "@/assets/neuro-treino/objetos/dado.png.asset.json";
import { url as lata } from "@/assets/neuro-treino/objetos/lata.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as fogo } from "@/assets/neuro-treino/objetos/fogo.png.asset.json";
import { url as vaca } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as vela } from "@/assets/neuro-treino/objetos/vela.png.asset.json";
import { url as navio } from "@/assets/neuro-treino/objetos/navio.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as sopa } from "@/assets/neuro-treino/objetos/sopa.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";

/**
 * Ler com Aurora — Fase 3: Decodificação Silábica (CV)
 * ------------------------------------------------------
 * 20 aulas · 4 semanas · 1 missão/dia (15 min)
 *
 * A criança já reconhece letra→som (Fase 2). Agora aprende a JUNTAR
 * consoante+vogal (CV) formando sílabas, e sílabas formando palavras.
 * Base: princípio alfabético (Ehri 2005), blending explícito (NRP 2000,
 * PNA-MEC 2019), leitura silábica com feedback imediato.
 *
 * Sem promessa de prazo. Cada criança avança no próprio ritmo.
 */

const mascote = brilha;
const BASE =
  "Ensino explícito de decodificação silábica CV com blending controlado (Ehri, 2005; NRP, 2000; PNA-MEC, 2019). A criança primeiro escuta cada sílaba isolada, junta as sílabas, ouve a palavra completa e finalmente lê sozinha com apoio visual.";

/* ============================================================
 * SEMANA 1 — Famílias P, B, M, T, D
 * ============================================================ */

const a1: AulaEI = {
  slug: "f3-dia-01-familia-p",
  titulo: "Dia 1 · Família PA PE PI PO PU",
  icone: "🅿️",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Agora vamos juntar uma consoante com uma vogal para formar sílabas! Começamos com P." },
    { tipo: "familiaSilabica", consoante: "P", silabas: ["PA", "PE", "PI", "PO", "PU"], instrucaoAudio: "Toca em cada sílaba para ouvir o som junto.", elogio: "Cinco sílabas da família P!" },
    { tipo: "juntarSilabas", imagemUrl: pato, silabas: ["PA", "TO"], palavra: "PATO", instrucaoAudio: "Junta pá com tó.", elogio: "Isso! PATO!" },
    { tipo: "juntarSilabas", imagemUrl: pipa, silabas: ["PI", "PA"], palavra: "PIPA", instrucaoAudio: "Junta pi com pá.", elogio: "PIPA! Duas palavras hoje!" },
    { tipo: "leituraSilabica", imagemUrl: pato, palavra: "PATO", silabas: ["PA", "TO"], instrucaoAudio: "Tenta ler sozinho.", elogio: "Você leu!" },
    { tipo: "celebracao", medalha: "Leitor da Família P", mascoteUrl: mascote, falaFinal: "Amanhã: família B!" },
  ],
};

const a2: AulaEI = {
  slug: "f3-dia-02-familia-b",
  titulo: "Dia 2 · Família BA BE BI BO BU",
  icone: "🅱️",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: família B! B tem voz, P é só sopro." },
    { tipo: "familiaSilabica", consoante: "B", silabas: ["BA", "BE", "BI", "BO", "BU"], instrucaoAudio: "Toca em cada sílaba.", elogio: "Família B completa!" },
    { tipo: "juntarSilabas", imagemUrl: bola, silabas: ["BO", "LA"], palavra: "BOLA", instrucaoAudio: "Junta bó com lá.", elogio: "BOLA!" },
    { tipo: "juntarSilabas", imagemUrl: bolo, silabas: ["BO", "LO"], palavra: "BOLO", instrucaoAudio: "Junta bó com ló.", elogio: "BOLO!" },
    { tipo: "leituraSilabica", imagemUrl: bola, palavra: "BOLA", silabas: ["BO", "LA"], instrucaoAudio: "Sua vez de ler.", elogio: "Muito bem!" },
    { tipo: "celebracao", medalha: "Leitor da Família B", mascoteUrl: mascote, falaFinal: "Amanhã: família M!" },
  ],
};

const a3: AulaEI = {
  slug: "f3-dia-03-familia-m",
  titulo: "Dia 3 · Família MA ME MI MO MU",
  icone: "Ⓜ️",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: família M. A boca fecha para fazer o som!" },
    { tipo: "familiaSilabica", consoante: "M", silabas: ["MA", "ME", "MI", "MO", "MU"], instrucaoAudio: "Toca em cada sílaba.", elogio: "Família M!" },
    { tipo: "juntarSilabas", imagemUrl: mapa, silabas: ["MA", "PA"], palavra: "MAPA", instrucaoAudio: "Junta má com pá.", elogio: "MAPA!" },
    { tipo: "juntarSilabas", imagemUrl: menina, silabas: ["ME", "NI", "NA"], palavra: "MENINA", instrucaoAudio: "Junta me, ni, ná.", elogio: "MENINA!" },
    { tipo: "leituraSilabica", imagemUrl: mapa, palavra: "MAPA", silabas: ["MA", "PA"], instrucaoAudio: "Sua vez.", elogio: "Isso!" },
    { tipo: "celebracao", medalha: "Leitor da Família M", mascoteUrl: mascote, falaFinal: "Amanhã: T e D!" },
  ],
};

const a4: AulaEI = {
  slug: "f3-dia-04-familias-t-d",
  titulo: "Dia 4 · Famílias T e D",
  icone: "🇹",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Duas famílias hoje: T (sem voz) e D (com voz)." },
    { tipo: "familiaSilabica", consoante: "T", silabas: ["TA", "TE", "TI", "TO", "TU"], instrucaoAudio: "Família T.", elogio: "Família T!" },
    { tipo: "familiaSilabica", consoante: "D", silabas: ["DA", "DE", "DI", "DO", "DU"], instrucaoAudio: "Família D.", elogio: "Família D!" },
    { tipo: "juntarSilabas", imagemUrl: dado, silabas: ["DA", "DO"], palavra: "DADO", instrucaoAudio: "Junta dá com dó.", elogio: "DADO!" },
    { tipo: "leituraSilabica", imagemUrl: dado, palavra: "DADO", silabas: ["DA", "DO"], instrucaoAudio: "Leia comigo.", elogio: "Excelente!" },
    { tipo: "celebracao", medalha: "Leitor T e D", mascoteUrl: mascote, falaFinal: "Amanhã: revisão!" },
  ],
};

const a5: AulaEI = {
  slug: "f3-dia-05-revisao-semana1",
  titulo: "Dia 5 · Revisão P B M T D",
  icone: "🎯",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Vamos revisar as 5 famílias da semana!" },
    { tipo: "juntarSilabas", imagemUrl: pato, silabas: ["PA", "TO"], palavra: "PATO", instrucaoAudio: "PATO.", elogio: "Certo!" },
    { tipo: "juntarSilabas", imagemUrl: bolo, silabas: ["BO", "LO"], palavra: "BOLO", instrucaoAudio: "BOLO.", elogio: "Certo!" },
    { tipo: "juntarSilabas", imagemUrl: dado, silabas: ["DA", "DO"], palavra: "DADO", instrucaoAudio: "DADO.", elogio: "Certo!" },
    { tipo: "leituraSilabica", imagemUrl: bola, palavra: "BOLA", silabas: ["BO", "LA"], instrucaoAudio: "Leia sozinho.", elogio: "Perfeito!" },
    { tipo: "celebracao", medalha: "Semana 1 Concluída", mascoteUrl: mascote, falaFinal: "Você já lê palavras de duas sílabas!" },
  ],
};

/* ============================================================
 * SEMANA 2 — Famílias L, F, V, N, S
 * ============================================================ */

const a6: AulaEI = {
  slug: "f3-dia-06-familia-l",
  titulo: "Dia 6 · Família LA LE LI LO LU",
  icone: "🇱",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: família L! Língua no céu da boca." },
    { tipo: "familiaSilabica", consoante: "L", silabas: ["LA", "LE", "LI", "LO", "LU"], instrucaoAudio: "Família L.", elogio: "Família L!" },
    { tipo: "juntarSilabas", imagemUrl: lata, silabas: ["LA", "TA"], palavra: "LATA", instrucaoAudio: "Junta lá com tá.", elogio: "LATA!" },
    { tipo: "juntarSilabas", imagemUrl: lua, silabas: ["LU", "A"], palavra: "LUA", instrucaoAudio: "Escute: lu, a. Depois junto: lua.", elogio: "LUA!" },
    { tipo: "leituraSilabica", imagemUrl: lata, palavra: "LATA", silabas: ["LA", "TA"], instrucaoAudio: "Leia.", elogio: "Ótimo!" },
    { tipo: "celebracao", medalha: "Leitor Família L", mascoteUrl: mascote, falaFinal: "Amanhã: F!" },
  ],
};

const a7: AulaEI = {
  slug: "f3-dia-07-familia-f",
  titulo: "Dia 7 · Família FA FE FI FO FU",
  icone: "🇫",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: família F! Dente em cima do lábio." },
    { tipo: "familiaSilabica", consoante: "F", silabas: ["FA", "FE", "FI", "FO", "FU"], instrucaoAudio: "Família F.", elogio: "Família F!" },
    { tipo: "juntarSilabas", imagemUrl: fogo, silabas: ["FO", "GO"], palavra: "FOGO", instrucaoAudio: "Junta fó com gó.", elogio: "FOGO!" },
    { tipo: "leituraSilabica", imagemUrl: fogo, palavra: "FOGO", silabas: ["FO", "GO"], instrucaoAudio: "Leia sozinho.", elogio: "Muito bem!" },
    { tipo: "juntarSilabas", imagemUrl: fada, silabas: ["FA", "DA"], palavra: "FADA", instrucaoAudio: "Junta fá com dá.", elogio: "FADA!" },
    { tipo: "celebracao", medalha: "Leitor Família F", mascoteUrl: mascote, falaFinal: "Amanhã: V!" },
  ],
};

const a8: AulaEI = {
  slug: "f3-dia-08-familia-v",
  titulo: "Dia 8 · Família VA VE VI VO VU",
  icone: "🇻",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: família V! Como F, mas com voz." },
    { tipo: "familiaSilabica", consoante: "V", silabas: ["VA", "VE", "VI", "VO", "VU"], instrucaoAudio: "Família V.", elogio: "Família V!" },
    { tipo: "juntarSilabas", imagemUrl: vaca, silabas: ["VA", "CA"], palavra: "VACA", instrucaoAudio: "Junta vá com cá.", elogio: "VACA!" },
    { tipo: "juntarSilabas", imagemUrl: vela, silabas: ["VE", "LA"], palavra: "VELA", instrucaoAudio: "Junta ve com lá.", elogio: "VELA!" },
    { tipo: "leituraSilabica", imagemUrl: vela, palavra: "VELA", silabas: ["VE", "LA"], instrucaoAudio: "Leia.", elogio: "Isso!" },
    { tipo: "celebracao", medalha: "Leitor Família V", mascoteUrl: mascote, falaFinal: "Amanhã: N!" },
  ],
};

const a9: AulaEI = {
  slug: "f3-dia-09-familia-n",
  titulo: "Dia 9 · Família NA NE NI NO NU",
  icone: "🇳",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: família N! Ponta da língua atrás dos dentes." },
    { tipo: "familiaSilabica", consoante: "N", silabas: ["NA", "NE", "NI", "NO", "NU"], instrucaoAudio: "Família N.", elogio: "Família N!" },
    { tipo: "juntarSilabas", imagemUrl: navio, silabas: ["NA", "VI", "O"], palavra: "NAVIO", instrucaoAudio: "NAVIO tem três pedaços.", elogio: "NAVIO!" },
    { tipo: "leituraSilabica", imagemUrl: navio, palavra: "NAVIO", silabas: ["NA", "VI", "O"], instrucaoAudio: "Leia.", elogio: "Ótimo!" },
    { tipo: "celebracao", medalha: "Leitor Família N", mascoteUrl: mascote, falaFinal: "Amanhã: S!" },
  ],
};

const a10: AulaEI = {
  slug: "f3-dia-10-familia-s",
  titulo: "Dia 10 · Família SA SE SI SO SU",
  icone: "🇸",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: família S! Sopro da cobrinha." },
    { tipo: "familiaSilabica", consoante: "S", silabas: ["SA", "SE", "SI", "SO", "SU"], instrucaoAudio: "Família S.", elogio: "Família S!" },
    { tipo: "juntarSilabas", imagemUrl: sapo, silabas: ["SA", "PO"], palavra: "SAPO", instrucaoAudio: "Junta sá com pó.", elogio: "SAPO!" },
    { tipo: "juntarSilabas", imagemUrl: sopa, silabas: ["SO", "PA"], palavra: "SOPA", instrucaoAudio: "Junta só com pá.", elogio: "SOPA!" },
    { tipo: "leituraSilabica", imagemUrl: sapo, palavra: "SAPO", silabas: ["SA", "PO"], instrucaoAudio: "Sua vez.", elogio: "Perfeito!" },
    { tipo: "celebracao", medalha: "Semana 2 Concluída", mascoteUrl: mascote, falaFinal: "Você lê 10 famílias!" },
  ],
};

/* ============================================================
 * SEMANA 3 — Famílias R, C, G, J
 * ============================================================ */

const a11: AulaEI = {
  slug: "f3-dia-11-familia-r",
  titulo: "Dia 11 · Família RA RE RI RO RU",
  icone: "🇷",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: família R! No começo da palavra é forte." },
    { tipo: "familiaSilabica", consoante: "R", silabas: ["RA", "RE", "RI", "RO", "RU"], instrucaoAudio: "Família R.", elogio: "Família R!" },
    { tipo: "juntarSilabas", imagemUrl: rato, silabas: ["RA", "TO"], palavra: "RATO", instrucaoAudio: "Junta rá com tó.", elogio: "RATO!" },
    { tipo: "leituraSilabica", imagemUrl: rato, palavra: "RATO", silabas: ["RA", "TO"], instrucaoAudio: "Leia.", elogio: "Ótimo!" },
    { tipo: "celebracao", medalha: "Leitor Família R", mascoteUrl: mascote, falaFinal: "Amanhã: C!" },
  ],
};

const a12: AulaEI = {
  slug: "f3-dia-12-familia-c",
  titulo: "Dia 12 · Família CA CO CU",
  icone: "🇨",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: C com A, O, U faz som forte." },
    { tipo: "familiaSilabica", consoante: "C", silabas: ["CA", "CO", "CU"], instrucaoAudio: "Família C forte.", elogio: "Família C!" },
    { tipo: "juntarSilabas", imagemUrl: casa, silabas: ["CA", "SA"], palavra: "CASA", instrucaoAudio: "Junta cá com sá.", elogio: "CASA!" },
    { tipo: "juntarSilabas", imagemUrl: vaca, silabas: ["VA", "CA"], palavra: "VACA", instrucaoAudio: "Já vimos: VACA.", elogio: "VACA!" },
    { tipo: "leituraSilabica", imagemUrl: casa, palavra: "CASA", silabas: ["CA", "SA"], instrucaoAudio: "Leia.", elogio: "Muito bem!" },
    { tipo: "celebracao", medalha: "Leitor Família C", mascoteUrl: mascote, falaFinal: "Amanhã: G!" },
  ],
};

const a13: AulaEI = {
  slug: "f3-dia-13-familia-g",
  titulo: "Dia 13 · Família GA GO GU",
  icone: "🇬",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: G com A, O, U faz som forte." },
    { tipo: "familiaSilabica", consoante: "G", silabas: ["GA", "GO", "GU"], instrucaoAudio: "Família G forte.", elogio: "Família G!" },
    { tipo: "juntarSilabas", imagemUrl: gato, silabas: ["GA", "TO"], palavra: "GATO", instrucaoAudio: "Junta gá com tó.", elogio: "GATO!" },
    { tipo: "leituraSilabica", imagemUrl: gato, palavra: "GATO", silabas: ["GA", "TO"], instrucaoAudio: "Leia sozinho.", elogio: "Ótimo!" },
    { tipo: "celebracao", medalha: "Leitor Família G", mascoteUrl: mascote, falaFinal: "Amanhã: J!" },
  ],
};

const a14: AulaEI = {
  slug: "f3-dia-14-familia-j",
  titulo: "Dia 14 · Família JA JE JI JO JU",
  icone: "🇯",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: família J! Vamos só treinar sílabas claras." },
    { tipo: "familiaSilabica", consoante: "J", silabas: ["JA", "JE", "JI", "JO", "JU"], instrucaoAudio: "Família J.", elogio: "Família J!" },
    { tipo: "juntarSilabas", imagemUrl: joaninha, silabas: ["JO", "A", "NI", "NHA"], palavra: "JOANINHA", instrucaoAudio: "Escute a palavra joaninha inteira. Depois toque nas partes devagar.", elogio: "JOANINHA!" },
    { tipo: "leituraSilabica", imagemUrl: joaninha, palavra: "JOANINHA", silabas: ["JO", "A", "NI", "NHA"], instrucaoAudio: "Agora ouve devagar e depois junto.", elogio: "Perfeito!" },
    { tipo: "celebracao", medalha: "Leitor Família J", mascoteUrl: mascote, falaFinal: "Amanhã: mistura tudo!" },
  ],
};

const a15: AulaEI = {
  slug: "f3-dia-15-mix-silabas",
  titulo: "Dia 15 · Sílabas misturadas",
  icone: "🎲",
  bncc: ["EF01LP05", "EF01LP06"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje juntamos sílabas de famílias diferentes!" },
    { tipo: "juntarSilabas", imagemUrl: sapo, silabas: ["SA", "PO"], palavra: "SAPO", instrucaoAudio: "SAPO.", elogio: "Certo!" },
    { tipo: "juntarSilabas", imagemUrl: rato, silabas: ["RA", "TO"], palavra: "RATO", instrucaoAudio: "RATO.", elogio: "Certo!" },
    { tipo: "juntarSilabas", imagemUrl: gato, silabas: ["GA", "TO"], palavra: "GATO", instrucaoAudio: "GATO.", elogio: "Certo!" },
    { tipo: "juntarSilabas", imagemUrl: pato, silabas: ["PA", "TO"], palavra: "PATO", instrucaoAudio: "PATO.", elogio: "Certo!" },
    { tipo: "celebracao", medalha: "Semana 3 Concluída", mascoteUrl: mascote, falaFinal: "Você já lê 4 famílias novas!" },
  ],
};

/* ============================================================
 * SEMANA 4 — Leitura fluente de palavras + diploma
 * ============================================================ */

const a16: AulaEI = {
  slug: "f3-dia-16-leitura-fluente-1",
  titulo: "Dia 16 · Leitura fluente 1",
  icone: "📖",
  bncc: ["EF01LP06", "EF01LP07"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje você lê 4 palavras sozinho!" },
    { tipo: "leituraSilabica", imagemUrl: pato, palavra: "PATO", silabas: ["PA", "TO"], instrucaoAudio: "Leia PATO.", elogio: "Certo!" },
    { tipo: "leituraSilabica", imagemUrl: bola, palavra: "BOLA", silabas: ["BO", "LA"], instrucaoAudio: "Leia BOLA.", elogio: "Certo!" },
    { tipo: "leituraSilabica", imagemUrl: lua, palavra: "LUA", silabas: ["LU", "A"], instrucaoAudio: "Leia LUA.", elogio: "Certo!" },
    { tipo: "leituraSilabica", imagemUrl: dado, palavra: "DADO", silabas: ["DA", "DO"], instrucaoAudio: "Leia DADO.", elogio: "Perfeito!" },
    { tipo: "celebracao", medalha: "Leitor Fluente 1", mascoteUrl: mascote, falaFinal: "Você leu 4 palavras hoje!" },
  ],
};

const a17: AulaEI = {
  slug: "f3-dia-17-leitura-fluente-2",
  titulo: "Dia 17 · Leitura fluente 2",
  icone: "📖",
  bncc: ["EF01LP06", "EF01LP07"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Mais 4 palavras hoje!" },
    { tipo: "leituraSilabica", imagemUrl: casa, palavra: "CASA", silabas: ["CA", "SA"], instrucaoAudio: "Leia CASA.", elogio: "Certo!" },
    { tipo: "leituraSilabica", imagemUrl: vaca, palavra: "VACA", silabas: ["VA", "CA"], instrucaoAudio: "Leia VACA.", elogio: "Certo!" },
    { tipo: "leituraSilabica", imagemUrl: sapo, palavra: "SAPO", silabas: ["SA", "PO"], instrucaoAudio: "Leia SAPO.", elogio: "Certo!" },
    { tipo: "leituraSilabica", imagemUrl: gato, palavra: "GATO", silabas: ["GA", "TO"], instrucaoAudio: "Leia GATO.", elogio: "Perfeito!" },
    { tipo: "celebracao", medalha: "Leitor Fluente 2", mascoteUrl: mascote, falaFinal: "Ótima leitura!" },
  ],
};

const a18: AulaEI = {
  slug: "f3-dia-18-missao-familia",
  titulo: "Dia 18 · Missão em família",
  icone: "👨‍👩‍👧",
  bncc: ["EF01LP07"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje você mostra pra família como já lê!" },
    { tipo: "leituraSilabica", imagemUrl: bolo, palavra: "BOLO", silabas: ["BO", "LO"], instrucaoAudio: "Leia BOLO em voz alta.", elogio: "Isso!" },
    { tipo: "leituraSilabica", imagemUrl: lata, palavra: "LATA", silabas: ["LA", "TA"], instrucaoAudio: "Leia LATA em voz alta.", elogio: "Isso!" },
    { tipo: "missaoFamilia", titulo: "Missão em casa", convite: "Escolha 3 objetos em casa e leia o nome deles em voz alta para um adulto.", dicaAdulto: "Aponte o objeto e peça a criança ler devagar, sílaba por sílaba, e depois junto." },
    { tipo: "celebracao", medalha: "Leitor da Família", mascoteUrl: mascote, falaFinal: "Amanhã: revisão final!" },
  ],
};

const a19: AulaEI = {
  slug: "f3-dia-19-revisao-final",
  titulo: "Dia 19 · Revisão final",
  icone: "🎯",
  bncc: ["EF01LP06", "EF01LP07"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Vamos revisar tudo o que você aprendeu!" },
    { tipo: "familiaSilabica", consoante: "L", silabas: ["LA", "LE", "LI", "LO", "LU"], instrucaoAudio: "Revise a família L.", elogio: "Perfeito!" },
    { tipo: "juntarSilabas", imagemUrl: banana, silabas: ["BA", "NA", "NA"], palavra: "BANANA", instrucaoAudio: "Três sílabas.", elogio: "BANANA!" },
    { tipo: "leituraSilabica", imagemUrl: banana, palavra: "BANANA", silabas: ["BA", "NA", "NA"], instrucaoAudio: "Leia BANANA.", elogio: "Uau, três sílabas!" },
    { tipo: "leituraSilabica", imagemUrl: navio, palavra: "NAVIO", silabas: ["NA", "VI", "O"], instrucaoAudio: "Leia NAVIO.", elogio: "Excelente!" },
    { tipo: "celebracao", medalha: "Quase Leitor CV", mascoteUrl: mascote, falaFinal: "Amanhã: diploma!" },
  ],
};

const a20: AulaEI = {
  slug: "f3-dia-20-diploma",
  titulo: "Dia 20 · Diploma Leitor CV",
  icone: "🏆",
  bncc: ["EF01LP06", "EF01LP07"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Chegou o dia do diploma! Vamos ler 5 palavras seguidas." },
    { tipo: "leituraSilabica", imagemUrl: pipa, palavra: "PIPA", silabas: ["PI", "PA"], instrucaoAudio: "1 de 5: PIPA.", elogio: "1!" },
    { tipo: "leituraSilabica", imagemUrl: fogo, palavra: "FOGO", silabas: ["FO", "GO"], instrucaoAudio: "2 de 5: FOGO.", elogio: "2!" },
    { tipo: "leituraSilabica", imagemUrl: vela, palavra: "VELA", silabas: ["VE", "LA"], instrucaoAudio: "3 de 5: VELA.", elogio: "3!" },
    { tipo: "leituraSilabica", imagemUrl: rato, palavra: "RATO", silabas: ["RA", "TO"], instrucaoAudio: "4 de 5: RATO.", elogio: "4!" },
    { tipo: "leituraSilabica", imagemUrl: casa, palavra: "CASA", silabas: ["CA", "SA"], instrucaoAudio: "5 de 5: CASA.", elogio: "5! Você conseguiu!" },
    { tipo: "missaoFamilia", titulo: "Diploma de Leitor CV", convite: "Mostre pra família: você já lê palavras de 2 e 3 sílabas!", dicaAdulto: "Comemore! A criança concluiu a Fase 3 (decodificação silábica CV). Próximo passo: leitura de frases curtas." },
    { tipo: "celebracao", medalha: "🏆 LEITOR CV — Fase 3 completa", mascoteUrl: mascote, falaFinal: "Que jornada linda! Agora você lê palavras sozinho." },
  ],
};

export const cursoLerComAuroraFase3: CursoEI = {
  slug: "ler-com-aurora-f3",
  serie: "pre2",
  serieLabel: "Pré II + 1º Ano",
  titulo: "Ler com Aurora — Fase 3",
  descricao: "Decodificação silábica CV. Da sílaba à palavra lida sozinha.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#0c4a6e",
  mascoteUrl: mascote,
  unidades: [
    { slug: "f3-semana-1", numero: 1, titulo: "Semana 1 · Famílias P B M T D", subtitulo: "Aprendiz Silábico", aulas: [a1, a2, a3, a4, a5] },
    { slug: "f3-semana-2", numero: 2, titulo: "Semana 2 · Famílias L F V N S", subtitulo: "Juntador de Sílabas", aulas: [a6, a7, a8, a9, a10] },
    { slug: "f3-semana-3", numero: 3, titulo: "Semana 3 · Famílias R C G J", subtitulo: "Leitor Silábico", aulas: [a11, a12, a13, a14, a15] },
    { slug: "f3-semana-4", numero: 4, titulo: "Semana 4 · Leitura fluente + Diploma", subtitulo: "Leitor CV", aulas: [a16, a17, a18, a19, a20] },
  ],
};

export function getAulaLerComAuroraFase3(slug: string): AulaEI | undefined {
  for (const u of cursoLerComAuroraFase3.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
