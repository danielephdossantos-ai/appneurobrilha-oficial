import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as vaca } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as pai } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as sopa } from "@/assets/neuro-treino/objetos/sopa.png.asset.json";
import { url as pipa } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";

/**
 * Ler com Aurora — Fase 4: Fluência e Compreensão
 * ------------------------------------------------
 * 20 aulas · 4 semanas · 15 min/dia
 *
 * A criança já decodifica sílabas CV (Fase 3). Agora avança para:
 *  - Semana 1: palavras com padrões novos (CVC: SOL, MAR; dígrafos)
 *  - Semana 2: frases curtas SVO com leitura assistida
 *  - Semana 3: mini-textos (2-3 frases) com prosódia e compreensão
 *  - Semana 4: textos maiores + compreensão profunda + diploma
 *
 * Base: fluência de leitura (NRP 2000; Rasinski 2004), leitura repetida
 * assistida, compreensão inferencial (Duke & Pearson 2002), prosódia
 * modelada por leitura em voz alta do professor.
 */

const mascote = brilha;
const BASE =
  "Fluência: leitura repetida e assistida com modelagem de prosódia (NRP 2000; Rasinski 2004). Compreensão: perguntas literais e inferenciais após leitura (Duke & Pearson 2002). Cada criança avança no próprio ritmo.";

/* ============================================================
 * SEMANA 1 — Palavras novas (CVC e padrões variados)
 * ============================================================ */

const a1: AulaEI = {
  slug: "f4-dia-01-cvc-sol-mar",
  titulo: "Dia 1 · Palavras com som final (SOL, MAR)",
  icone: "☀️",
  bncc: ["EF01LP06", "EF01LP07"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Você já lê muitas palavras! Agora vamos aprender palavras que terminam em consoante." },
    { tipo: "leituraSilabica", imagemUrl: sol, palavra: "SOL", silabas: ["SOL"], instrucaoAudio: "SOL tem uma sílaba só. Escuta.", elogio: "SOL! Isso!" },
    { tipo: "leituraSilabica", imagemUrl: lua, palavra: "MAR", silabas: ["MAR"], instrucaoAudio: "MAR também é uma sílaba.", elogio: "MAR! Muito bem!" },
    { tipo: "leituraSilabica", imagemUrl: sol, palavra: "PAZ", silabas: ["PAZ"], instrucaoAudio: "PAZ, com Z no fim.", elogio: "PAZ!" },
    { tipo: "leituraSilabica", imagemUrl: flor, palavra: "LUZ", silabas: ["LUZ"], instrucaoAudio: "LUZ. Ouça o Z suave.", elogio: "LUZ! Você leu 4 palavras novas!" },
    { tipo: "celebracao", medalha: "Leitor de Palavras Fortes", mascoteUrl: mascote, falaFinal: "Amanhã: primeiras frases!" },
  ],
};

const a2: AulaEI = {
  slug: "f4-dia-02-primeira-frase",
  titulo: "Dia 2 · Minha primeira frase",
  icone: "📝",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje é grande: você vai LER uma frase inteira!" },
    { tipo: "leituraFrase", imagemUrl: gato, frase: "O GATO CORRE.", instrucaoAudio: "Toca em ouvir devagar. Depois tenta ler junto.", elogio: "Você leu uma frase!" },
    { tipo: "leituraFrase", imagemUrl: pato, frase: "O PATO NADA.", instrucaoAudio: "Outra frase. Devagar primeiro.", elogio: "Duas frases!" },
    { tipo: "leituraFrase", imagemUrl: sapo, frase: "O SAPO PULA.", instrucaoAudio: "Última de hoje.", elogio: "Três frases lidas!" },
    { tipo: "celebracao", medalha: "Primeiro Leitor de Frases", mascoteUrl: mascote, falaFinal: "Amanhã: mais frases!" },
  ],
};

const a3: AulaEI = {
  slug: "f4-dia-03-frases-svo",
  titulo: "Dia 3 · Sujeito e ação",
  icone: "🏃",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Cada frase tem alguém fazendo algo. Vamos descobrir!" },
    { tipo: "leituraFrase", imagemUrl: menina, frase: "A MENINA CANTA.", instrucaoAudio: "Quem canta? A menina.", elogio: "Muito bem!" },
    { tipo: "leituraFrase", imagemUrl: menino, frase: "O MENINO PULA.", instrucaoAudio: "Quem pula?", elogio: "Isso!" },
    { tipo: "leituraFrase", imagemUrl: vaca, frase: "A VACA COME.", instrucaoAudio: "Quem come?", elogio: "Perfeito!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Quem CANTA na frase?", opcoes: [
      { texto: "A menina", correta: true },
      { texto: "A vaca", correta: false },
      { texto: "O menino", correta: false },
    ], feedbackAcerto: "Isso! A menina canta.", feedbackErro: "Volta e escuta de novo." },
    { tipo: "celebracao", medalha: "Detetive de Frases", mascoteUrl: mascote, falaFinal: "Amanhã: frases com objeto!" },
  ],
};

const a4: AulaEI = {
  slug: "f4-dia-04-frases-objeto",
  titulo: "Dia 4 · Frases com objeto",
  icone: "🎯",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Agora as frases têm alguém, uma ação e uma coisa!" },
    { tipo: "leituraFrase", imagemUrl: bola, frase: "O MENINO CHUTA A BOLA.", instrucaoAudio: "Três palavras importantes.", elogio: "Excelente!" },
    { tipo: "leituraFrase", imagemUrl: bolo, frase: "A MENINA COME O BOLO.", instrucaoAudio: "Devagar primeiro.", elogio: "Muito bem!" },
    { tipo: "leituraFrase", imagemUrl: pipa, frase: "O PAI SOLTA A PIPA.", instrucaoAudio: "Frase com o papai!", elogio: "Perfeito!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que a menina come?", opcoes: [
      { texto: "O bolo", correta: true },
      { texto: "A bola", correta: false },
      { texto: "A pipa", correta: false },
    ], feedbackAcerto: "Isso, o bolo!", feedbackErro: "Ouve a frase de novo." },
    { tipo: "celebracao", medalha: "Leitor Atento", mascoteUrl: mascote, falaFinal: "Amanhã: revisão da semana!" },
  ],
};

const a5: AulaEI = {
  slug: "f4-dia-05-revisao-semana",
  titulo: "Dia 5 · Revisão · Palavras + Frases",
  icone: "🏅",
  bncc: ["EF01LP06", "EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Vamos revisar tudo da semana!" },
    { tipo: "leituraSilabica", imagemUrl: sol, palavra: "SOL", silabas: ["SOL"], instrucaoAudio: "Palavra 1.", elogio: "Isso!" },
    { tipo: "leituraFrase", imagemUrl: gato, frase: "O GATO CORRE.", instrucaoAudio: "Frase 1.", elogio: "Muito bem!" },
    { tipo: "leituraFrase", imagemUrl: menina, frase: "A MENINA CANTA.", instrucaoAudio: "Frase 2.", elogio: "Perfeito!" },
    { tipo: "missaoFamilia", titulo: "Missão em família", convite: "Leia uma frase da aula para alguém da família.", dicaAdulto: "Aponte cada palavra enquanto a criança lê. Elogie o esforço." },
    { tipo: "celebracao", medalha: "Semana da Fluência 1", mascoteUrl: mascote, falaFinal: "Semana 2 tem MINI-HISTÓRIAS!" },
  ],
};

/* ============================================================
 * SEMANA 2 — Mini-histórias (2-3 frases)
 * ============================================================ */

const a6: AulaEI = {
  slug: "f4-dia-06-historia-gato",
  titulo: "Dia 6 · História do Gato",
  icone: "🐱",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje é sua primeira mini-história!" },
    { tipo: "leituraTexto", titulo: "O gato Bico", imagemUrl: gato, frases: [
      "O GATO BICO É PEQUENO.",
      "ELE CORRE NA CASA.",
      "DEPOIS ELE DORME.",
    ], instrucaoAudio: "Ouve devagar, depois tenta ler junto.", elogio: "Você leu uma história!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que o gato faz depois de correr?", opcoes: [
      { texto: "Ele dorme", correta: true },
      { texto: "Ele canta", correta: false },
      { texto: "Ele nada", correta: false },
    ], feedbackAcerto: "Isso! Ele dorme.", feedbackErro: "Volta a ouvir a última frase." },
    { tipo: "celebracao", medalha: "Leitor de Histórias", mascoteUrl: mascote, falaFinal: "Amanhã: história do pato!" },
  ],
};

const a7: AulaEI = {
  slug: "f4-dia-07-historia-pato",
  titulo: "Dia 7 · O Pato e a Lagoa",
  icone: "🦆",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Vamos ler sobre um pato feliz." },
    { tipo: "leituraTexto", titulo: "O pato nada", imagemUrl: pato, frases: [
      "O PATO ADORA A LAGOA.",
      "ELE NADA E MERGULHA.",
      "O SOL BRILHA NA ÁGUA.",
    ], instrucaoAudio: "Devagar primeiro.", elogio: "Que leitura linda!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Onde o pato nada?", opcoes: [
      { texto: "Na lagoa", correta: true },
      { texto: "No mar", correta: false },
      { texto: "Na casa", correta: false },
    ], feedbackAcerto: "Isso! Na lagoa.", feedbackErro: "Escuta de novo a primeira frase." },
    { tipo: "celebracao", medalha: "Leitor da Lagoa", mascoteUrl: mascote, falaFinal: "Amanhã: a menina e a bola!" },
  ],
};

const a8: AulaEI = {
  slug: "f4-dia-08-historia-menina-bola",
  titulo: "Dia 8 · A Menina e a Bola",
  icone: "⚽",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Uma história de brincadeira!" },
    { tipo: "leituraTexto", titulo: "A menina e a bola", imagemUrl: bola, frases: [
      "A MENINA TEM UMA BOLA.",
      "ELA JOGA A BOLA PRO CÉU.",
      "A BOLA CAI NA MÃO DELA.",
    ], instrucaoAudio: "Ouve com atenção.", elogio: "Você leu tudo!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Para onde a menina joga a bola?", opcoes: [
      { texto: "Pro céu", correta: true },
      { texto: "Pra lagoa", correta: false },
      { texto: "Pra casa", correta: false },
    ], feedbackAcerto: "Isso, pro céu!", feedbackErro: "Ouve a segunda frase." },
    { tipo: "celebracao", medalha: "Leitor Brincalhão", mascoteUrl: mascote, falaFinal: "Amanhã: história do sapo!" },
  ],
};

const a9: AulaEI = {
  slug: "f4-dia-09-historia-sapo",
  titulo: "Dia 9 · O Sapo Saci",
  icone: "🐸",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Um sapo que pula muito alto!" },
    { tipo: "leituraTexto", titulo: "O sapo Saci", imagemUrl: sapo, frases: [
      "O SAPO SACI MORA NA MATA.",
      "ELE PULA DE FOLHA EM FOLHA.",
      "TODO SAPO DA MATA GOSTA DELE.",
    ], instrucaoAudio: "Vamos ler juntos.", elogio: "Muito bem!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Onde o sapo Saci mora?", opcoes: [
      { texto: "Na mata", correta: true },
      { texto: "No mar", correta: false },
      { texto: "Na casa", correta: false },
    ], feedbackAcerto: "Isso, na mata!", feedbackErro: "Escuta a primeira frase." },
    { tipo: "celebracao", medalha: "Leitor da Mata", mascoteUrl: mascote, falaFinal: "Amanhã: revisão da semana 2!" },
  ],
};

const a10: AulaEI = {
  slug: "f4-dia-10-revisao-historias",
  titulo: "Dia 10 · Revisão das histórias",
  icone: "📚",
  bncc: ["EF01LP15"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Vamos revisar as histórias da semana!" },
    { tipo: "leituraTexto", titulo: "Revisão", imagemUrl: gato, frases: [
      "O GATO CORRE NA CASA.",
      "O PATO NADA NA LAGOA.",
      "O SAPO PULA NA MATA.",
    ], instrucaoAudio: "Três frases, três bichos.", elogio: "Isso!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Quem NADA?", opcoes: [
      { texto: "O pato", correta: true },
      { texto: "O sapo", correta: false },
      { texto: "O gato", correta: false },
    ], feedbackAcerto: "Isso, o pato!", feedbackErro: "Escuta de novo." },
    { tipo: "missaoFamilia", titulo: "Missão em família", convite: "Conte uma das histórias para alguém em casa.", dicaAdulto: "Deixe a criança ler ou contar do jeito dela. Comemore." },
    { tipo: "celebracao", medalha: "Semana da Fluência 2", mascoteUrl: mascote, falaFinal: "Semana 3: textos maiores!" },
  ],
};

/* ============================================================
 * SEMANA 3 — Textos com 3-4 frases + compreensão inferencial
 * ============================================================ */

const a11: AulaEI = {
  slug: "f4-dia-11-familia-em-casa",
  titulo: "Dia 11 · A família em casa",
  icone: "🏠",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Um texto sobre uma família feliz." },
    { tipo: "leituraTexto", titulo: "Domingo em casa", imagemUrl: casa, frases: [
      "HOJE É DOMINGO.",
      "A MAMÃE FAZ BOLO.",
      "O PAPAI LÊ O LIVRO.",
      "A MENINA COME O BOLO.",
    ], instrucaoAudio: "Quatro frases hoje!", elogio: "Você leu um texto grande!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Quem faz o bolo?", opcoes: [
      { texto: "A mamãe", correta: true },
      { texto: "O papai", correta: false },
      { texto: "A menina", correta: false },
    ], feedbackAcerto: "Isso, a mamãe!", feedbackErro: "Ouve a segunda frase." },
    { tipo: "celebracao", medalha: "Leitor da Família", mascoteUrl: mascote, falaFinal: "Amanhã: um dia de chuva!" },
  ],
};

const a12: AulaEI = {
  slug: "f4-dia-12-dia-de-chuva",
  titulo: "Dia 12 · Dia de chuva",
  icone: "🌧️",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Choveu bastante! Vamos ver o que acontece." },
    { tipo: "leituraTexto", titulo: "A chuva chegou", imagemUrl: chuva, frases: [
      "O CÉU FICOU CINZA.",
      "A CHUVA CAIU FORTE.",
      "AS CRIANÇAS PULARAM NA POÇA.",
      "DEPOIS O SOL VOLTOU.",
    ], instrucaoAudio: "Ouve com atenção.", elogio: "Que leitura!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que aconteceu DEPOIS da chuva?", opcoes: [
      { texto: "O sol voltou", correta: true },
      { texto: "Ficou de noite", correta: false },
      { texto: "Nevou", correta: false },
    ], feedbackAcerto: "Isso, o sol voltou!", feedbackErro: "Escuta a última frase." },
    { tipo: "celebracao", medalha: "Leitor da Chuva", mascoteUrl: mascote, falaFinal: "Amanhã: o mar!" },
  ],
};

const a13: AulaEI = {
  slug: "f4-dia-13-passeio-mar",
  titulo: "Dia 13 · Passeio no mar",
  icone: "🌊",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Vamos para a praia!" },
    { tipo: "leituraTexto", titulo: "No mar", imagemUrl: peixe, frases: [
      "A FAMÍLIA FOI AO MAR.",
      "O MENINO VIU UM PEIXE.",
      "A MENINA FEZ UM CASTELO DE AREIA.",
      "TODO MUNDO FICOU FELIZ.",
    ], instrucaoAudio: "Quatro frases sobre a praia.", elogio: "Perfeito!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que a menina fez na areia?", opcoes: [
      { texto: "Um castelo", correta: true },
      { texto: "Uma bola", correta: false },
      { texto: "Uma casa de verdade", correta: false },
    ], feedbackAcerto: "Isso, um castelo!", feedbackErro: "Ouve a terceira frase." },
    { tipo: "celebracao", medalha: "Leitor do Mar", mascoteUrl: mascote, falaFinal: "Amanhã: o jardim!" },
  ],
};

const a14: AulaEI = {
  slug: "f4-dia-14-jardim-flores",
  titulo: "Dia 14 · Jardim de flores",
  icone: "🌸",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje o texto tem flores e bichinhos." },
    { tipo: "leituraTexto", titulo: "O jardim de Ana", imagemUrl: flor, frases: [
      "ANA CUIDA DO JARDIM.",
      "ELA REGA AS FLORES TODO DIA.",
      "AS ABELHAS VÃO ATÉ AS FLORES.",
      "O JARDIM FICA CHEIO DE VIDA.",
    ], instrucaoAudio: "Vamos ler juntos.", elogio: "Que leitura carinhosa!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "POR QUE as abelhas vão ao jardim?", opcoes: [
      { texto: "Porque tem flores", correta: true },
      { texto: "Porque tem água", correta: false },
      { texto: "Porque tem sol", correta: false },
    ], feedbackAcerto: "Isso! Abelhas gostam de flores.", feedbackErro: "Pensa: o que tem no jardim?" },
    { tipo: "celebracao", medalha: "Leitor do Jardim", mascoteUrl: mascote, falaFinal: "Amanhã: revisão da semana 3!" },
  ],
};

const a15: AulaEI = {
  slug: "f4-dia-15-revisao-textos",
  titulo: "Dia 15 · Revisão dos textos",
  icone: "📖",
  bncc: ["EF01LP15"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Última revisão antes do diploma!" },
    { tipo: "leituraTexto", titulo: "A semana da Ana", imagemUrl: menina, frases: [
      "NA SEGUNDA, ANA FOI À PRAIA.",
      "NA TERÇA, CHOVEU MUITO.",
      "NA QUARTA, ELA CUIDOU DO JARDIM.",
    ], instrucaoAudio: "Três dias da semana da Ana.", elogio: "Muito bem!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Em que dia CHOVEU?", opcoes: [
      { texto: "Terça", correta: true },
      { texto: "Segunda", correta: false },
      { texto: "Quarta", correta: false },
    ], feedbackAcerto: "Isso, terça!", feedbackErro: "Ouve a segunda frase." },
    { tipo: "missaoFamilia", titulo: "Missão em família", convite: "Leia o texto de hoje para alguém em casa.", dicaAdulto: "Se travar em alguma palavra, sopre a primeira sílaba." },
    { tipo: "celebracao", medalha: "Semana da Compreensão", mascoteUrl: mascote, falaFinal: "Última semana: DIPLOMA!" },
  ],
};

/* ============================================================
 * SEMANA 4 — Textos maiores + Diploma
 * ============================================================ */

const a16: AulaEI = {
  slug: "f4-dia-16-esquilo-brilha",
  titulo: "Dia 16 · O esquilo Brilha",
  icone: "🐿️",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Um texto sobre mim, o Brilha!" },
    { tipo: "leituraTexto", titulo: "O Brilha", imagemUrl: brilha, frases: [
      "BRILHA É UM ESQUILO CURIOSO.",
      "ELE ADORA APRENDER LETRAS.",
      "TODA MANHÃ, ELE LÊ COM AS CRIANÇAS.",
      "HOJE, ELE VAI LER COM VOCÊ.",
    ], instrucaoAudio: "Ouve devagar, depois junto.", elogio: "Você leu sobre o Brilha!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que o Brilha ADORA?", opcoes: [
      { texto: "Aprender letras", correta: true },
      { texto: "Dormir", correta: false },
      { texto: "Comer bolo", correta: false },
    ], feedbackAcerto: "Isso!", feedbackErro: "Ouve a segunda frase." },
    { tipo: "celebracao", medalha: "Amigo do Brilha", mascoteUrl: mascote, falaFinal: "Amanhã: uma noite estrelada!" },
  ],
};

const a17: AulaEI = {
  slug: "f4-dia-17-noite-estrelada",
  titulo: "Dia 17 · A noite estrelada",
  icone: "🌟",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Uma história de encantar!" },
    { tipo: "leituraTexto", titulo: "A noite", imagemUrl: estrela, frases: [
      "A NOITE CHEGOU DEVAGAR.",
      "A LUA APARECEU NO CÉU.",
      "MUITAS ESTRELAS PISCARAM.",
      "A MENINA FEZ UM PEDIDO.",
    ], instrucaoAudio: "Vamos viajar pra noite.", elogio: "Que leitura mágica!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que a menina fez ao ver as estrelas?", opcoes: [
      { texto: "Fez um pedido", correta: true },
      { texto: "Foi dormir", correta: false },
      { texto: "Foi correr", correta: false },
    ], feedbackAcerto: "Isso!", feedbackErro: "Ouve a última frase." },
    { tipo: "celebracao", medalha: "Leitor Estrelado", mascoteUrl: mascote, falaFinal: "Amanhã: sopa da vovó!" },
  ],
};

const a18: AulaEI = {
  slug: "f4-dia-18-sopa-vovo",
  titulo: "Dia 18 · A sopa da vovó",
  icone: "🍲",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Uma sopa quentinha!" },
    { tipo: "leituraTexto", titulo: "A sopa", imagemUrl: sopa, frases: [
      "A VOVÓ FEZ UMA SOPA.",
      "PÔS BATATA, CENOURA E MACARRÃO.",
      "A CASA FICOU CHEIROSA.",
      "TODOS COMERAM SORRINDO.",
    ], instrucaoAudio: "Sente o cheirinho.", elogio: "Muito bem!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que a vovó pôs na sopa?", opcoes: [
      { texto: "Batata, cenoura e macarrão", correta: true },
      { texto: "Só água", correta: false },
      { texto: "Bolo e banana", correta: false },
    ], feedbackAcerto: "Isso!", feedbackErro: "Ouve a segunda frase." },
    { tipo: "celebracao", medalha: "Leitor da Vovó", mascoteUrl: mascote, falaFinal: "Amanhã: a árvore da praça!" },
  ],
};

const a19: AulaEI = {
  slug: "f4-dia-19-arvore-praca",
  titulo: "Dia 19 · A árvore da praça",
  icone: "🌳",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Uma árvore muito antiga!" },
    { tipo: "leituraTexto", titulo: "A árvore grande", imagemUrl: arvore, frases: [
      "NA PRAÇA TEM UMA ÁRVORE GRANDE.",
      "ELA DÁ SOMBRA PRAS CRIANÇAS.",
      "OS PÁSSAROS FAZEM NINHO NELA.",
      "TODO MUNDO CUIDA DELA COM CARINHO.",
    ], instrucaoAudio: "Um texto sobre cuidar da natureza.", elogio: "Que linda leitura!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "POR QUE as crianças ficam embaixo da árvore?", opcoes: [
      { texto: "Pra ficar na sombra", correta: true },
      { texto: "Pra dormir", correta: false },
      { texto: "Pra comer", correta: false },
    ], feedbackAcerto: "Isso, pela sombra!", feedbackErro: "Pensa: o que a árvore grande dá?" },
    { tipo: "celebracao", medalha: "Guardião da Árvore", mascoteUrl: mascote, falaFinal: "Amanhã: DIPLOMA!" },
  ],
};

const a20: AulaEI = {
  slug: "f4-dia-20-diploma-leitor",
  titulo: "Dia 20 · Diploma de Leitor",
  icone: "🎓",
  bncc: ["EF01LP15", "EF01LP16"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Chegou o dia! Você é OFICIALMENTE um leitor!" },
    { tipo: "leituraTexto", titulo: "Meu caminho", imagemUrl: brilha, frases: [
      "EU COMECEI OUVINDO SONS.",
      "DEPOIS APRENDI AS LETRAS.",
      "JUNTEI SÍLABAS E FIZ PALAVRAS.",
      "AGORA EU LEIO FRASES E HISTÓRIAS!",
    ], instrucaoAudio: "Sua história de leitor.", elogio: "Que jornada incrível!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que você faz agora?", opcoes: [
      { texto: "Leio frases e histórias", correta: true },
      { texto: "Só ouço sons", correta: false },
      { texto: "Só olho letras", correta: false },
    ], feedbackAcerto: "Isso! Você é leitor!", feedbackErro: "Ouve a última frase de novo." },
    { tipo: "missaoFamilia", titulo: "🎓 DIPLOMA DE LEITOR", convite: "Leia todo o texto de hoje para a família. Eles vão se emocionar!", dicaAdulto: "Sua criança concluiu 80 missões da trilha 'Ler com Aurora'. Ela conquistou os fundamentos científicos da leitura: consciência fonológica, princípio alfabético, decodificação silábica e fluência com compreensão. Continue lendo com ela todo dia — 15 minutos fazem diferença." },
    { tipo: "celebracao", medalha: "🎓 LEITOR — Trilha Ler com Aurora completa!", mascoteUrl: mascote, falaFinal: "Você conseguiu! Nunca pare de ler. O mundo agora é seu!" },
  ],
};

export const cursoLerComAuroraFase4: CursoEI = {
  slug: "ler-com-aurora-f4",
  serie: "pre2",
  serieLabel: "Pré II + 1º Ano",
  titulo: "Ler com Aurora — Fase 4",
  descricao: "Fluência e compreensão. De frases a mini-histórias com significado.",
  corPrimaria: "#f43f5e",
  corSecundaria: "#881337",
  mascoteUrl: mascote,
  unidades: [
    { slug: "f4-semana-1", numero: 1, titulo: "Semana 1 · Palavras novas + primeiras frases", subtitulo: "Aprendiz de Frases", aulas: [a1, a2, a3, a4, a5] },
    { slug: "f4-semana-2", numero: 2, titulo: "Semana 2 · Mini-histórias", subtitulo: "Leitor de Histórias", aulas: [a6, a7, a8, a9, a10] },
    { slug: "f4-semana-3", numero: 3, titulo: "Semana 3 · Textos e compreensão", subtitulo: "Leitor Atento", aulas: [a11, a12, a13, a14, a15] },
    { slug: "f4-semana-4", numero: 4, titulo: "Semana 4 · Diploma de Leitor", subtitulo: "Leitor Fluente", aulas: [a16, a17, a18, a19, a20] },
  ],
};

export function getAulaLerComAuroraFase4(slug: string): AulaEI | undefined {
  for (const u of cursoLerComAuroraFase4.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
