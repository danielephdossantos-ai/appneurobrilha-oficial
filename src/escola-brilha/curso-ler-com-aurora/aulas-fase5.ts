import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as linha } from "@/assets/neuro-treino/objetos/linha.png.asset.json";
import { url as ninho } from "@/assets/neuro-treino/objetos/ninho.png.asset.json";
import { url as banho } from "@/assets/neuro-treino/objetos/banho.png.asset.json";
import { url as galinha } from "@/assets/neuro-treino/objetos/galinha.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as chocalho } from "@/assets/neuro-treino/objetos/chocalho.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as rosa } from "@/assets/neuro-treino/objetos/rosa.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as raposa } from "@/assets/neuro-treino/objetos/raposa.png.asset.json";
import { url as campo } from "@/assets/neuro-treino/objetos/campo.png.asset.json";
import { url as tambor } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as pente } from "@/assets/neuro-treino/objetos/pente.png.asset.json";
import { url as tinta } from "@/assets/neuro-treino/objetos/tinta.png.asset.json";
import { url as planta } from "@/assets/neuro-treino/objetos/planta-pequena.png.asset.json";
import { url as cadeira } from "@/assets/neuro-treino/objetos/cadeira.png.asset.json";
import { url as madeira } from "@/assets/neuro-treino/objetos/madeira.png.asset.json";

/**
 * Ler com Aurora — Fase 5: Ortografia Inicial
 * ------------------------------------------------
 * 20 aulas · 4 semanas · 15 min/dia
 *
 * A criança já lê frases e mini-textos com sílabas CV (Fases 1-4).
 * Fase 5 introduz os padrões ortográficos que mais confundem no início:
 *   - Semana 1: Dígrafos LH · NH · CH
 *   - Semana 2: R vs RR (som forte no início vs. entre vogais)
 *   - Semana 3: Nasalização — M antes de P/B, N antes de outras consoantes
 *   - Semana 4: AN/EN/IN/ON/UN + revisão e Diploma Ortográfico
 *
 * Base: ensino explícito de correspondência grafema-fonema com foco em
 * padrões complexos do português (Ehri 2005; PNA-MEC 2019; Morais 2020).
 * Regularidades ortográficas apresentadas de forma cumulativa e contextual.
 */

const mascote = brilha;
const BASE =
  "Ensino explícito de padrões ortográficos regulares (Ehri 2005; PNA 2019; Morais 2020). Dígrafos e nasalização apresentados de forma cumulativa, com contraste visual e auditivo entre pares mínimos.";

/* ============================================================
 * SEMANA 1 — Dígrafos LH · NH · CH
 * ============================================================ */

const a1: AulaEI = {
  slug: "f5-dia-01-lh-coelho",
  titulo: "Dia 1 · LH — o som do coelho",
  icone: "🐰",
  bncc: ["EF01LP08", "EF01LP09"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje você aprende um som novo: LH. Duas letras, um som só!" },
    { tipo: "somDaLetra", letra: "LH", som: "lhe", instrucaoAudio: "L com H faz o som lhe. Ouve as palavras.", exemplos: [
      { nome: "coelho", imagemUrl: coelho },
      { nome: "abelha", imagemUrl: abelha },
    ], elogio: "Isso! Sempre L + H." },
    { tipo: "leituraSilabica", imagemUrl: coelho, palavra: "COELHO", silabas: ["CO","E","LHO"], instrucaoAudio: "Três sílabas. A última é LHO.", elogio: "COELHO!" },
    { tipo: "leituraSilabica", imagemUrl: abelha, palavra: "ABELHA", silabas: ["A","BE","LHA"], instrucaoAudio: "Ouve devagar.", elogio: "ABELHA!" },
    { tipo: "leituraFrase", imagemUrl: coelho, frase: "O COELHO PULA.", instrucaoAudio: "Lê a frase inteira.", elogio: "Muito bem!" },
    { tipo: "celebracao", medalha: "Amigo do LH", mascoteUrl: mascote, falaFinal: "Amanhã: mais um dígrafo — NH!" },
  ],
};

const a2: AulaEI = {
  slug: "f5-dia-02-nh-ninho",
  titulo: "Dia 2 · NH — o som do ninho",
  icone: "🪺",
  bncc: ["EF01LP08", "EF01LP09"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Agora N com H. Faz o som nhe." },
    { tipo: "somDaLetra", letra: "NH", som: "nhe", instrucaoAudio: "N mais H = nhe.", exemplos: [
      { nome: "ninho", imagemUrl: ninho },
      { nome: "banho", imagemUrl: banho },
      { nome: "linha", imagemUrl: linha },
    ], elogio: "Perfeito!" },
    { tipo: "leituraSilabica", imagemUrl: ninho, palavra: "NINHO", silabas: ["NI","NHO"], instrucaoAudio: "Duas sílabas.", elogio: "NINHO!" },
    { tipo: "leituraSilabica", imagemUrl: banho, palavra: "BANHO", silabas: ["BA","NHO"], instrucaoAudio: "BA e NHO.", elogio: "BANHO!" },
    { tipo: "leituraSilabica", imagemUrl: galinha, palavra: "GALINHA", silabas: ["GA","LI","NHA"], instrucaoAudio: "Três sílabas.", elogio: "GALINHA!" },
    { tipo: "celebracao", medalha: "Amigo do NH", mascoteUrl: mascote, falaFinal: "Amanhã: CH!" },
  ],
};

const a3: AulaEI = {
  slug: "f5-dia-03-ch-chuva",
  titulo: "Dia 3 · CH — o som da chuva",
  icone: "🌧️",
  bncc: ["EF01LP08", "EF01LP09"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "C com H faz o som che, como em chuva." },
    { tipo: "somDaLetra", letra: "CH", som: "che", instrucaoAudio: "C mais H = che.", exemplos: [
      { nome: "chuva", imagemUrl: chuva },
      { nome: "mochila", imagemUrl: mochila },
      { nome: "chocalho", imagemUrl: chocalho },
    ], elogio: "Isso!" },
    { tipo: "leituraSilabica", imagemUrl: chuva, palavra: "CHUVA", silabas: ["CHU","VA"], instrucaoAudio: "CHU e VA.", elogio: "CHUVA!" },
    { tipo: "leituraSilabica", imagemUrl: mochila, palavra: "MOCHILA", silabas: ["MO","CHI","LA"], instrucaoAudio: "Três sílabas.", elogio: "MOCHILA!" },
    { tipo: "leituraFrase", imagemUrl: chuva, frase: "A CHUVA CAI.", instrucaoAudio: "Frase curtinha.", elogio: "Perfeito!" },
    { tipo: "celebracao", medalha: "Amigo do CH", mascoteUrl: mascote, falaFinal: "Amanhã: revisão dos três dígrafos!" },
  ],
};

const a4: AulaEI = {
  slug: "f5-dia-04-revisao-digrafos",
  titulo: "Dia 4 · Revisão LH · NH · CH",
  icone: "🔤",
  bncc: ["EF01LP08"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Vamos misturar tudo o que aprendemos!" },
    { tipo: "pareamentoLetraSom", instrucaoAudio: "Liga cada palavra ao dígrafo certo.", pares: [
      { letra: "LH", nome: "coelho", imagemUrl: coelho },
      { letra: "NH", nome: "banho", imagemUrl: banho },
      { letra: "CH", nome: "chuva", imagemUrl: chuva },
    ], elogio: "Isso!" },
    { tipo: "letrasMoveis", imagemUrl: abelha, palavra: "ABELHA", distratoras: ["N","H","C"], instrucaoAudio: "Monta a palavra ABELHA.", elogio: "Perfeito!" },
    { tipo: "letrasMoveis", imagemUrl: ninho, palavra: "NINHO", distratoras: ["L","H","M"], instrucaoAudio: "Monta NINHO.", elogio: "Muito bem!" },
    { tipo: "celebracao", medalha: "Mestre dos Dígrafos", mascoteUrl: mascote, falaFinal: "Amanhã: um texto com muitos dígrafos!" },
  ],
};

const a5: AulaEI = {
  slug: "f5-dia-05-texto-coelho",
  titulo: "Dia 5 · Texto do coelho e da abelha",
  icone: "📖",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: uma historinha só com dígrafos!" },
    { tipo: "leituraTexto", titulo: "O coelho e a abelha", imagemUrl: coelho, frases: [
      "O COELHO ACHOU UMA ABELHA.",
      "ELA VOAVA PERTO DA LINHA.",
      "O COELHO OLHOU E SORRIU.",
      "ELA POUSOU NO NARIZ DELE!",
    ], instrucaoAudio: "Lê devagar primeiro.", elogio: "Que leitura linda!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Onde a abelha pousou?", opcoes: [
      { texto: "No nariz do coelho", correta: true },
      { texto: "No pé do coelho", correta: false },
      { texto: "No ninho", correta: false },
    ], feedbackAcerto: "Isso!", feedbackErro: "Ouve a última frase de novo." },
    { tipo: "celebracao", medalha: "Leitor de Dígrafos", mascoteUrl: mascote, falaFinal: "Semana 2: R e RR!" },
  ],
};

/* ============================================================
 * SEMANA 2 — R vs RR
 * ============================================================ */

const a6: AulaEI = {
  slug: "f5-dia-06-r-inicio-rato",
  titulo: "Dia 6 · R forte no começo (RATO)",
  icone: "🐭",
  bncc: ["EF01LP10", "EF01LP11"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Quando R começa a palavra, o som é forte, como um motor!" },
    { tipo: "somDaLetra", letra: "R", som: "rre", instrucaoAudio: "R no começo tem som forte.", exemplos: [
      { nome: "rato", imagemUrl: rato },
      { nome: "rosa", imagemUrl: rosa },
      { nome: "relógio", imagemUrl: relogio },
      { nome: "raposa", imagemUrl: raposa },
    ], elogio: "Isso!" },
    { tipo: "leituraSilabica", imagemUrl: rato, palavra: "RATO", silabas: ["RA","TO"], instrucaoAudio: "R forte no começo.", elogio: "RATO!" },
    { tipo: "leituraSilabica", imagemUrl: rosa, palavra: "ROSA", silabas: ["RO","SA"], instrucaoAudio: "R forte também.", elogio: "ROSA!" },
    { tipo: "leituraFrase", imagemUrl: rato, frase: "O RATO CORRE.", instrucaoAudio: "Frase com R forte no começo.", elogio: "Muito bem!" },
    { tipo: "celebracao", medalha: "R Forte", mascoteUrl: mascote, falaFinal: "Amanhã: R fraco no meio!" },
  ],
};

const a7: AulaEI = {
  slug: "f5-dia-07-r-meio-fraco",
  titulo: "Dia 7 · R fraco no meio (CADEIRA, MADEIRA)",
  icone: "💧",
  bncc: ["EF01LP10", "EF01LP11"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "R no meio, entre duas vogais, tem som suave, como um pinguinho." },
    { tipo: "somDaLetra", letra: "R", som: "re", instrucaoAudio: "Entre duas vogais, o R tem som fraquinho. Ouve as palavras.", exemplos: [
      { nome: "cadeira", imagemUrl: cadeira },
      { nome: "madeira", imagemUrl: madeira },
    ], elogio: "Isso, R suave!" },
    { tipo: "leituraSilabica", imagemUrl: cadeira, palavra: "CADEIRA", silabas: ["CA","DEI","RA"], instrucaoAudio: "R suave entre as vogais.", elogio: "CADEIRA!" },
    { tipo: "leituraSilabica", imagemUrl: madeira, palavra: "MADEIRA", silabas: ["MA","DEI","RA"], instrucaoAudio: "R fraquinho no meio.", elogio: "MADEIRA!" },
    { tipo: "delecaoFonemica", palavraOriginal: "RATO", fonemaRemovido: "r", instrucaoAudio: "Diga RATO sem o R forte do começo. O que sobra?", opcoes: [
      { texto: "ATO", correta: true },
      { texto: "TRA", correta: false },
      { texto: "OTA", correta: false },
    ], feedbackAcerto: "Isso, sobra ATO!", feedbackErro: "Tira só o R do começo." },
    { tipo: "celebracao", medalha: "Ouvido Fino do R", mascoteUrl: mascote, falaFinal: "Amanhã: RR!" },
  ],
};

const a8: AulaEI = {
  slug: "f5-dia-08-rr-cachorro",
  titulo: "Dia 8 · RR — dois erres, som forte no meio",
  icone: "🐕",
  bncc: ["EF01LP10", "EF01LP11"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Para deixar o R forte no meio, escrevemos DOIS erres: RR." },
    { tipo: "somDaLetra", letra: "RR", som: "rre", instrucaoAudio: "RR no meio tem som forte.", exemplos: [
      { nome: "cachorro", imagemUrl: cachorro },
      { nome: "carro", imagemUrl: carro },
    ], elogio: "Isso!" },
    { tipo: "leituraSilabica", imagemUrl: cachorro, palavra: "CACHORRO", silabas: ["CA","CHO","RRO"], instrucaoAudio: "CA-CHO-RRO. Três sílabas.", elogio: "CACHORRO!" },
    { tipo: "leituraSilabica", imagemUrl: carro, palavra: "CARRO", silabas: ["CA","RRO"], instrucaoAudio: "CA e RRO.", elogio: "CARRO!" },
    { tipo: "letrasMoveis", imagemUrl: carro, palavra: "CARRO", distratoras: ["L","H","M"], instrucaoAudio: "Monta CARRO com dois erres.", elogio: "Perfeito!" },
    { tipo: "celebracao", medalha: "Mestre do RR", mascoteUrl: mascote, falaFinal: "Amanhã: contraste R x RR!" },
  ],
};

const a9: AulaEI = {
  slug: "f5-dia-09-r-vs-rr",
  titulo: "Dia 9 · R fraco × RR forte",
  icone: "⚖️",
  bncc: ["EF01LP10"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Ouve com atenção: um R = fraco, dois erres = forte!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual palavra tem RR (som forte)?", opcoes: [
      { nome: "CARRO", imagemUrl: carro, correta: true },
      { nome: "CADEIRA", imagemUrl: cadeira, correta: false },
    ], feedbackAcerto: "Isso, CARRO tem som forte!", feedbackErro: "O som forte no meio pede dois erres." },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual palavra tem RR?", opcoes: [
      { nome: "CACHORRO", imagemUrl: cachorro, correta: true },
      { nome: "MADEIRA", imagemUrl: madeira, correta: false },
    ], feedbackAcerto: "CACHORRO!", feedbackErro: "O R de MADEIRA é suavinho, com um R só." },
    { tipo: "leituraFrase", imagemUrl: carro, frase: "O CARRO PASSA NA RUA.", instrucaoAudio: "Duas palavras com R forte.", elogio: "Muito bem!" },
    { tipo: "celebracao", medalha: "Ouvido do R e RR", mascoteUrl: mascote, falaFinal: "Amanhã: texto do cachorro!" },
  ],
};

const a10: AulaEI = {
  slug: "f5-dia-10-texto-cachorro",
  titulo: "Dia 10 · Texto do cachorro no carro",
  icone: "📖",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: um texto cheio de R e RR!" },
    { tipo: "leituraTexto", titulo: "O cachorro passeia", imagemUrl: cachorro, frases: [
      "O CACHORRO ENTROU NO CARRO.",
      "ELE OLHOU PELA JANELA.",
      "VIU UM RATO NA RUA!",
      "LATIU ALTO E CORREU ATRÁS.",
    ], instrucaoAudio: "Um pouco maior. Devagar primeiro.", elogio: "Que leitura!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que o cachorro viu na rua?", opcoes: [
      { texto: "Um rato", correta: true },
      { texto: "Uma abelha", correta: false },
      { texto: "Um coelho", correta: false },
    ], feedbackAcerto: "Isso!", feedbackErro: "Ouve a terceira frase." },
    { tipo: "celebracao", medalha: "Leitor do R e RR", mascoteUrl: mascote, falaFinal: "Semana 3: M e N nasais!" },
  ],
};

/* ============================================================
 * SEMANA 3 — Nasalização: M antes de P/B, N antes de outras
 * ============================================================ */

const a11: AulaEI = {
  slug: "f5-dia-11-m-antes-pb",
  titulo: "Dia 11 · M antes de P e B (CAMPO)",
  icone: "🌾",
  bncc: ["EF01LP12"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Regra especial: antes de P e B, escrevemos M!" },
    { tipo: "somDaLetra", letra: "M", som: "an", instrucaoAudio: "Antes de P e B, o M nasaliza a vogal.", exemplos: [
      { nome: "campo", imagemUrl: campo },
      { nome: "tambor", imagemUrl: tambor },
    ], elogio: "Isso!" },
    { tipo: "leituraSilabica", imagemUrl: campo, palavra: "CAMPO", silabas: ["CAM","PO"], instrucaoAudio: "CAM tem som de nariz.", elogio: "CAMPO!" },
    { tipo: "leituraSilabica", imagemUrl: tambor, palavra: "TAMBOR", silabas: ["TAM","BOR"], instrucaoAudio: "TAM antes de B.", elogio: "TAMBOR!" },
    { tipo: "letrasMoveis", imagemUrl: campo, palavra: "CAMPO", distratoras: ["N","R","L"], instrucaoAudio: "Monta CAMPO. Cuidado: antes de P vem M!", elogio: "Perfeito!" },
    { tipo: "celebracao", medalha: "M antes de P/B", mascoteUrl: mascote, falaFinal: "Amanhã: N antes de outras letras!" },
  ],
};

const a12: AulaEI = {
  slug: "f5-dia-12-n-antes-td",
  titulo: "Dia 12 · N antes de T e D (PONTE, PENTE)",
  icone: "🌉",
  bncc: ["EF01LP12"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Antes de outras letras (T, D, C…), usamos N!" },
    { tipo: "somDaLetra", letra: "N", som: "en", instrucaoAudio: "N também nasaliza a vogal.", exemplos: [
      { nome: "ponte", imagemUrl: ponte },
      { nome: "pente", imagemUrl: pente },
      { nome: "tinta", imagemUrl: tinta },
    ], elogio: "Isso!" },
    { tipo: "leituraSilabica", imagemUrl: ponte, palavra: "PONTE", silabas: ["PON","TE"], instrucaoAudio: "PON tem som de nariz.", elogio: "PONTE!" },
    { tipo: "leituraSilabica", imagemUrl: pente, palavra: "PENTE", silabas: ["PEN","TE"], instrucaoAudio: "PEN nasal.", elogio: "PENTE!" },
    { tipo: "leituraSilabica", imagemUrl: tinta, palavra: "TINTA", silabas: ["TIN","TA"], instrucaoAudio: "TIN nasal.", elogio: "TINTA!" },
    { tipo: "celebracao", medalha: "N antes das outras", mascoteUrl: mascote, falaFinal: "Amanhã: M ou N?" },
  ],
};

const a13: AulaEI = {
  slug: "f5-dia-13-m-ou-n",
  titulo: "Dia 13 · M ou N? Descubra!",
  icone: "🔍",
  bncc: ["EF01LP12"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "A pista está na letra seguinte: P ou B pede M. As outras pedem N." },
    { tipo: "compreensaoImagem", perguntaAudio: "Antes de P (como em CAMPO), usamos M ou N?", opcoes: [
      { nome: "M", imagemUrl: campo, correta: true },
      { nome: "N", imagemUrl: ponte, correta: false },
    ], feedbackAcerto: "Isso, M!", feedbackErro: "Antes de P/B sempre M." },
    { tipo: "compreensaoImagem", perguntaAudio: "Antes de T (como em PONTE), usamos M ou N?", opcoes: [
      { nome: "N", imagemUrl: ponte, correta: true },
      { nome: "M", imagemUrl: campo, correta: false },
    ], feedbackAcerto: "Isso, N!", feedbackErro: "Antes das outras, N." },
    { tipo: "letrasMoveis", imagemUrl: tambor, palavra: "TAMBOR", distratoras: ["N","R","L"], instrucaoAudio: "Antes de B, qual letra? Monta TAMBOR.", elogio: "Perfeito!" },
    { tipo: "celebracao", medalha: "Detetive M ou N", mascoteUrl: mascote, falaFinal: "Amanhã: nasais em frases!" },
  ],
};

const a14: AulaEI = {
  slug: "f5-dia-14-frases-nasais",
  titulo: "Dia 14 · Frases com sons nasais",
  icone: "📝",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Vamos ler frases com sons de nariz!" },
    { tipo: "leituraFrase", imagemUrl: campo, frase: "O CAMPO É VERDE.", instrucaoAudio: "Frase com M nasal.", elogio: "Isso!" },
    { tipo: "leituraFrase", imagemUrl: ponte, frase: "A PONTE É ALTA.", instrucaoAudio: "Frase com N nasal.", elogio: "Muito bem!" },
    { tipo: "leituraFrase", imagemUrl: tambor, frase: "O TAMBOR FAZ TUM TUM.", instrucaoAudio: "Escuta o som do nariz em TAM e TUM.", elogio: "Perfeito!" },
    { tipo: "leituraFrase", imagemUrl: pente, frase: "MEU PENTE SUMIU.", instrucaoAudio: "PEN e SUM.", elogio: "Você já lê nasais!" },
    { tipo: "celebracao", medalha: "Leitor Nasal", mascoteUrl: mascote, falaFinal: "Amanhã: texto grande!" },
  ],
};

const a15: AulaEI = {
  slug: "f5-dia-15-texto-nasais",
  titulo: "Dia 15 · No campo e na ponte",
  icone: "📖",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Um texto com muitos sons nasais!" },
    { tipo: "leituraTexto", titulo: "O passeio", imagemUrl: campo, frases: [
      "O MENINO FOI AO CAMPO.",
      "ELE PASSOU NA PONTE ALTA.",
      "VIU UM PATO NA LAGOA.",
      "VOLTOU CANTANDO CONTENTE!",
    ], instrucaoAudio: "Devagar primeiro.", elogio: "Que linda leitura!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que o menino viu na lagoa?", opcoes: [
      { texto: "Um pato", correta: true },
      { texto: "Um rato", correta: false },
      { texto: "Uma abelha", correta: false },
    ], feedbackAcerto: "Isso!", feedbackErro: "Ouve a terceira frase." },
    { tipo: "celebracao", medalha: "Leitor do Campo", mascoteUrl: mascote, falaFinal: "Semana 4: AN, EN, IN, ON, UN!" },
  ],
};

/* ============================================================
 * SEMANA 4 — AN/EN/IN/ON/UN + Diploma Ortográfico
 * ============================================================ */

const a16: AulaEI = {
  slug: "f5-dia-16-familia-nasal",
  titulo: "Dia 16 · Família nasal AN-EN-IN-ON-UN",
  icone: "👃",
  bncc: ["EF01LP12"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Cinco sons de nariz: AN, EN, IN, ON, UN!" },
    { tipo: "familiaSilabica", consoante: "N (nasal)", silabas: ["AN","EN","IN","ON","UN"], instrucaoAudio: "Toca em cada uma. Ouve o som do nariz.", elogio: "Isso!" },
    { tipo: "leituraSilabica", imagemUrl: campo, palavra: "CAMPO", silabas: ["CAM","PO"], instrucaoAudio: "CAM tem som AN nasal.", elogio: "CAMPO!" },
    { tipo: "leituraSilabica", imagemUrl: pente, palavra: "PENTE", silabas: ["PEN","TE"], instrucaoAudio: "PEN tem som EN nasal.", elogio: "PENTE!" },
    { tipo: "leituraSilabica", imagemUrl: tinta, palavra: "TINTA", silabas: ["TIN","TA"], instrucaoAudio: "TIN tem som IN nasal.", elogio: "TINTA!" },
    { tipo: "leituraSilabica", imagemUrl: ponte, palavra: "PONTE", silabas: ["PON","TE"], instrucaoAudio: "PON tem som ON nasal.", elogio: "PONTE!" },
    { tipo: "celebracao", medalha: "Família Nasal", mascoteUrl: mascote, falaFinal: "Amanhã: revisão geral!" },
  ],
};

const a17: AulaEI = {
  slug: "f5-dia-17-revisao-geral",
  titulo: "Dia 17 · Revisão de tudo",
  icone: "🎯",
  bncc: ["EF01LP08", "EF01LP10", "EF01LP12"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Vamos revisar TUDO da Fase 5!" },
    { tipo: "pareamentoLetraSom", instrucaoAudio: "Liga cada padrão à palavra certa.", pares: [
      { letra: "LH", nome: "coelho", imagemUrl: coelho },
      { letra: "NH", nome: "ninho", imagemUrl: ninho },
      { letra: "CH", nome: "chuva", imagemUrl: chuva },
      { letra: "RR", nome: "carro", imagemUrl: carro },
    ], elogio: "Muito bem!" },
    { tipo: "letrasMoveis", imagemUrl: cachorro, palavra: "CACHORRO", distratoras: ["N","L","M"], instrucaoAudio: "Cuidado: CH no meio, RR depois!", elogio: "Perfeito!" },
    { tipo: "letrasMoveis", imagemUrl: galinha, palavra: "GALINHA", distratoras: ["L","M","R"], instrucaoAudio: "Monta GALINHA.", elogio: "Isso!" },
    { tipo: "celebracao", medalha: "Revisor Ortográfico", mascoteUrl: mascote, falaFinal: "Amanhã: história final!" },
  ],
};

const a18: AulaEI = {
  slug: "f5-dia-18-historia-final",
  titulo: "Dia 18 · A grande história",
  icone: "📚",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Um texto grande com TODOS os padrões novos!" },
    { tipo: "leituraTexto", titulo: "O passeio do coelho", imagemUrl: coelho, frases: [
      "O COELHO SAIU DO NINHO.",
      "PASSOU PELA PONTE E PELO CAMPO.",
      "VIU UM CACHORRO NO CARRO.",
      "A CHUVA COMEÇOU FORTE.",
      "ELE VOLTOU CONTENTE PARA CASA.",
    ], instrucaoAudio: "Cinco frases. Vai com calma.", elogio: "Que jornada linda!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O coelho ficou triste ou contente no fim?", opcoes: [
      { texto: "Contente", correta: true },
      { texto: "Triste", correta: false },
      { texto: "Com medo", correta: false },
    ], feedbackAcerto: "Isso, contente!", feedbackErro: "Ouve a última frase." },
    { tipo: "celebracao", medalha: "Leitor Ortográfico", mascoteUrl: mascote, falaFinal: "Faltam 2 dias pro diploma!" },
  ],
};

const a19: AulaEI = {
  slug: "f5-dia-19-desafio-final",
  titulo: "Dia 19 · Desafio final",
  icone: "🏆",
  bncc: ["EF01LP08", "EF01LP10", "EF01LP12"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Último treino antes do diploma!" },
    { tipo: "letrasMoveis", imagemUrl: abelha, palavra: "ABELHA", distratoras: ["N","C","M"], instrucaoAudio: "ABELHA — atenção ao LH!", elogio: "Isso!" },
    { tipo: "letrasMoveis", imagemUrl: carro, palavra: "CARRO", distratoras: ["L","H","M"], instrucaoAudio: "CARRO — som forte, dois erres!", elogio: "Perfeito!" },
    { tipo: "letrasMoveis", imagemUrl: campo, palavra: "CAMPO", distratoras: ["N","L","R"], instrucaoAudio: "CAMPO — antes de P vem M!", elogio: "Muito bem!" },
    { tipo: "letrasMoveis", imagemUrl: ponte, palavra: "PONTE", distratoras: ["M","L","R"], instrucaoAudio: "PONTE — antes de T vem N!", elogio: "Excelente!" },
    { tipo: "letrasMoveis", imagemUrl: mochila, palavra: "MOCHILA", distratoras: ["N","L","R"], instrucaoAudio: "MOCHILA — atenção ao CH!", elogio: "Você está pronto!" },
    { tipo: "celebracao", medalha: "Pronto pro Diploma", mascoteUrl: mascote, falaFinal: "Amanhã: DIPLOMA ORTOGRÁFICO!" },
  ],
};

const a20: AulaEI = {
  slug: "f5-dia-20-diploma-ortografico",
  titulo: "Dia 20 · Diploma Ortográfico",
  icone: "🎓",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje você completa 100 missões! É oficial: você é um leitor ortográfico!" },
    { tipo: "leituraTexto", titulo: "Minha caminhada", imagemUrl: brilha, frases: [
      "EU APRENDI SONS E LETRAS.",
      "APRENDI SÍLABAS E PALAVRAS.",
      "APRENDI FRASES E HISTÓRIAS.",
      "AGORA APRENDI LH, NH, CH, RR E NASAIS.",
      "EU LEIO TUDO COM CUIDADO!",
    ], instrucaoAudio: "Sua história de leitor completo.", elogio: "Que jornada linda!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Quantos padrões novos você aprendeu na Fase 5?", opcoes: [
      { texto: "Muitos: LH, NH, CH, RR e nasais", correta: true },
      { texto: "Só um", correta: false },
      { texto: "Nenhum", correta: false },
    ], feedbackAcerto: "Isso! Muitos padrões!", feedbackErro: "Ouve a quarta frase." },
    { tipo: "missaoFamilia", titulo: "🎓 DIPLOMA ORTOGRÁFICO", convite: "Leia o texto inteiro para a família em voz alta. Depois procurem em casa 5 palavras com LH, NH, CH, RR, M ou N nasais.", dicaAdulto: "Sua criança concluiu 100 missões da trilha Ler com Aurora — as 5 fases da ciência da leitura. Ela agora reconhece os dígrafos (LH, NH, CH), diferencia R de RR e aplica a regra M antes de P/B. Continue lendo com ela: 15 minutos por dia mantêm o progresso." },
    { tipo: "celebracao", medalha: "🎓 LEITOR ORTOGRÁFICO — Ler com Aurora COMPLETO!", mascoteUrl: mascote, falaFinal: "100 missões! Você é um leitor completo. Nunca pare de ler!" },
  ],
};

export const cursoLerComAuroraFase5: CursoEI = {
  slug: "ler-com-aurora-f5",
  serie: "pre2",
  serieLabel: "Até 6 anos · Alfabetização",
  titulo: "Ler com Aurora — Fase 5",
  descricao: "Ortografia inicial: dígrafos (LH, NH, CH), R/RR e sons nasais (M antes de P/B, AN/EN/IN/ON/UN).",
  corPrimaria: "#10b981",
  corSecundaria: "#064e3b",
  mascoteUrl: mascote,
  unidades: [
    { slug: "f5-semana-1", numero: 1, titulo: "Semana 1 · Dígrafos LH · NH · CH", subtitulo: "Amigo dos Dígrafos", aulas: [a1, a2, a3, a4, a5] },
    { slug: "f5-semana-2", numero: 2, titulo: "Semana 2 · R e RR", subtitulo: "Mestre do R", aulas: [a6, a7, a8, a9, a10] },
    { slug: "f5-semana-3", numero: 3, titulo: "Semana 3 · Sons de nariz (M/N)", subtitulo: "Ouvido Nasal", aulas: [a11, a12, a13, a14, a15] },
    { slug: "f5-semana-4", numero: 4, titulo: "Semana 4 · Diploma Ortográfico", subtitulo: "Leitor Ortográfico", aulas: [a16, a17, a18, a19, a20] },
  ],
};

export function getAulaLerComAuroraFase5(slug: string): AulaEI | undefined {
  for (const u of cursoLerComAuroraFase5.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
