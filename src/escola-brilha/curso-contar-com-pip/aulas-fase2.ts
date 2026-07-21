import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";

/**
 * Contar com Pip — FASE 2 · Contagem 1-a-1 (até 10)
 * --------------------------------------------------
 * Base: 5 princípios de Gelman & Gallistel (1978):
 *  1. Correspondência 1-a-1 (um número por item, sem pular nem repetir).
 *  2. Ordem estável (1,2,3,4,5,6,7,8,9,10 — sempre nessa ordem).
 *  3. Cardinalidade (o ÚLTIMO número dito é o total).
 *  4. Abstração (qualquer coisa pode ser contada).
 *  5. Irrelevância da ordem (contar de trás pra frente dá o mesmo total).
 *
 * SEMANA 1 (implementada aqui): Contar até 5 — correspondência 1-a-1
 *  - Dia 1: Contar 1, 2, 3 tocando em cada item
 *  - Dia 2: Contar até 4
 *  - Dia 3: Contar até 5 (mão inteira)
 *  - Dia 4: Ordem estável — o que vem depois?
 *  - Dia 5: Revisão + medalha "Contador de 5"
 */

import { url as pipMascot } from "@/assets/pip-girl-mascot.png.asset.json";
const mascote = pipMascot;

const dia01: AulaEI = {
  slug: "pip-f2-s1-d1-contar-ate-3",
  titulo: "Dia 1 · Contar até 3",
  icone: "☝️",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Bem-vindo à Fase 2! Agora o Pip vai te ensinar a CONTAR tocando em cada coisinha, sem pular e sem repetir. Bora começar do 1?",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 1,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio: "Toca na bolinha e diz: UM!",
      elogio: "UM! Isso mesmo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 2,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio: "Toca em uma de cada vez: UM, DOIS.",
      elogio: "UM, DOIS! Duas estrelas!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: coracao,
      quantidade: 3,
      itemSingular: "coração",
      itemPlural: "corações",
      instrucaoAudio:
        "Agora TRÊS! Toca em cada coração uma vez só: UM, DOIS, TRÊS.",
      elogio: "TRÊS! Você contou sem pular e sem repetir!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 3,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "De novo, agora com flores: UM, DOIS, TRÊS.",
      elogio: "Perfeito! Três flores!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem TRÊS?",
      opcoes: [
        { nome: "duas bolas", imagemUrl: bola, correta: false, quantidade: 2 },
        { nome: "três joaninhas", imagemUrl: joaninha, correta: true, quantidade: 3 },
        { nome: "uma flor", imagemUrl: flor, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "Isso! TRÊS joaninhas!",
      feedbackErro: "TRÊS tem três itens. Conta um por um!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Contando em casa",
      convite:
        "Ache 1 sapato, 2 talheres, 3 potinhos. Toca em cada um e conta em voz alta: UM… DOIS… TRÊS.",
      dicaAdulto:
        "Gelman & Gallistel: correspondência 1-a-1 = um número dito para cada item tocado. Sem pular e sem repetir é o objetivo desta semana.",
    },
    {
      tipo: "celebracao",
      medalha: "Contador de 3",
      mascoteUrl: mascote,
      falaFinal: "Você já conta até TRÊS tocando! Isso é matemática de verdade!",
    },
  ],
  baseCientifica:
    "Princípio da correspondência 1-a-1 (Gelman & Gallistel, 1978) — um número por item, sem pular.",
};

const dia02: AulaEI = {
  slug: "pip-f2-s1-d2-contar-ate-4",
  titulo: "Dia 2 · Contar até 4",
  icone: "✋",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Ontem foi 3. Hoje vamos até QUATRO! Lembra: um número pra cada coisinha, sem pular.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 2,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio: "Aquece: toca em cada joaninha. UM, DOIS.",
      elogio: "Duas joaninhas!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: maca,
      quantidade: 3,
      itemSingular: "maçã",
      itemPlural: "maçãs",
      instrucaoAudio: "Agora TRÊS maçãs. UM, DOIS, TRÊS.",
      elogio: "Três maçãs!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: balao,
      quantidade: 4,
      itemSingular: "balão",
      itemPlural: "balões",
      instrucaoAudio:
        "Agora QUATRO balões! Toca em cada um: UM, DOIS, TRÊS, QUATRO.",
      elogio: "QUATRO balões! Nenhum pulou!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 4,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio: "De novo com bolas: UM, DOIS, TRÊS, QUATRO.",
      elogio: "QUATRO! Já pega o jeito!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem QUATRO?",
      opcoes: [
        { nome: "três estrelas", imagemUrl: estrela, correta: false, quantidade: 3 },
        { nome: "quatro corações", imagemUrl: coracao, correta: true, quantidade: 4 },
        { nome: "duas flores", imagemUrl: flor, correta: false, quantidade: 2 },
      ],
      feedbackAcerto: "Isso! QUATRO corações!",
      feedbackErro: "QUATRO tem quatro itens. Conta com o dedinho!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Quatro coisinhas",
      convite:
        "Ache 4 tampinhas. Enfileira. A criança toca em cada uma dizendo UM, DOIS, TRÊS, QUATRO — sem pular.",
      dicaAdulto:
        "Enfileirar antes de contar reduz erro de correspondência (Baroody). Se pular, volta e recomeça sem correção brusca.",
    },
    {
      tipo: "celebracao",
      medalha: "Contador de 4",
      mascoteUrl: mascote,
      falaFinal: "QUATRO! Você já conta como gente grande!",
    },
  ],
  baseCientifica:
    "Extensão da correspondência 1-a-1 até 4 — enfileirar reduz erro (Baroody).",
};

const dia03: AulaEI = {
  slug: "pip-f2-s1-d3-contar-ate-5",
  titulo: "Dia 3 · Contar até 5",
  icone: "🖐️",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Chegou o CINCO! É a mão INTEIRA. Cinco dedinhos, cinco coisinhas. Vamos contar juntos?",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 3,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Aquece: UM, DOIS, TRÊS.",
      elogio: "Três!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 5,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio:
        "Agora CINCO estrelas. Toca em cada uma: UM, DOIS, TRÊS, QUATRO, CINCO.",
      elogio: "CINCO! Uma mão cheia!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 5,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio: "De novo: UM, DOIS, TRÊS, QUATRO, CINCO joaninhas.",
      elogio: "Perfeito! Cinco!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem CINCO?",
      opcoes: [
        { nome: "quatro maçãs", imagemUrl: maca, correta: false, quantidade: 4 },
        { nome: "cinco balões", imagemUrl: balao, correta: true, quantidade: 5 },
        { nome: "três bolas", imagemUrl: bola, correta: false, quantidade: 3 },
      ],
      feedbackAcerto: "Isso! CINCO balões!",
      feedbackErro: "CINCO tem cinco itens. Conta um por um!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara os dois grupos.",
      perguntaAudio: "Qual grupo tem MAIS corações?",
      imagemUrl: coracao,
      itemPlural: "corações",
      alvo: "mais",
      opcoes: [
        { qtd: 2, correta: false },
        { qtd: 5, correta: true },
      ],
      feedbackAcerto: "CINCO é bem mais que DOIS!",
      feedbackErro: "CINCO é mais. É a mão inteira!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Cinco dedinhos",
      convite:
        "Abre a mão toda: são CINCO dedos. Toca em cada um contando. Depois pega 5 objetos e conta do mesmo jeito.",
      dicaAdulto:
        "Cinco é âncora perceptual (Butterworth). Associar 5 = mão inteira facilita a próxima semana (6–10).",
    },
    {
      tipo: "celebracao",
      medalha: "Mão Cheia",
      mascoteUrl: mascote,
      falaFinal: "CINCO! Agora você conta a mão inteira!",
    },
  ],
  baseCientifica:
    "Cinco como âncora perceptual — ponte para contagem 6–10 (Fuson, Griffin).",
};

const dia04: AulaEI = {
  slug: "pip-f2-s1-d4-ordem-estavel",
  titulo: "Dia 4 · O que vem depois?",
  icone: "🔢",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Os números têm uma ORDEM que nunca muda: UM, DOIS, TRÊS, QUATRO, CINCO. Hoje o Pip te desafia: qual vem depois?",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 5,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio:
        "Antes do desafio, conta cinco bolas em voz alta: UM, DOIS, TRÊS, QUATRO, CINCO.",
      elogio: "Cinco! Essa é a ordem!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 1 vem o…",
      opcoes: [
        { nome: "2 (duas estrelas)", imagemUrl: estrela, correta: true, quantidade: 2 },
        { nome: "4 (quatro flores)", imagemUrl: flor, correta: false, quantidade: 4 },
        { nome: "5 (cinco balões)", imagemUrl: balao, correta: false, quantidade: 5 },
      ],
      feedbackAcerto: "Isso! 1, 2 — DOIS vem depois do UM!",
      feedbackErro: "Depois do 1 vem o 2. Fala em voz alta: 1, 2…",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 2 vem o…",
      opcoes: [
        { nome: "1 (uma bola)", imagemUrl: bola, correta: false, quantidade: 1 },
        { nome: "3 (três corações)", imagemUrl: coracao, correta: true, quantidade: 3 },
        { nome: "5 (cinco maçãs)", imagemUrl: maca, correta: false, quantidade: 5 },
      ],
      feedbackAcerto: "Isso! 1, 2, 3 — TRÊS vem depois do DOIS!",
      feedbackErro: "Depois do 2 vem o 3. Fala em voz alta: 1, 2, 3…",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 3 vem o…",
      opcoes: [
        { nome: "4 (quatro joaninhas)", imagemUrl: joaninha, correta: true, quantidade: 4 },
        { nome: "2 (duas borboletas)", imagemUrl: borboleta, correta: false, quantidade: 2 },
        { nome: "5 (cinco flores)", imagemUrl: flor, correta: false, quantidade: 5 },
      ],
      feedbackAcerto: "QUATRO! Depois do 3 vem o 4!",
      feedbackErro: "1, 2, 3, 4… QUATRO vem depois do TRÊS!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 4 vem o…",
      opcoes: [
        { nome: "3 (três estrelas)", imagemUrl: estrela, correta: false, quantidade: 3 },
        { nome: "5 (cinco balões)", imagemUrl: balao, correta: true, quantidade: 5 },
        { nome: "1 (uma bola)", imagemUrl: bola, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "CINCO! Fechou a mão inteira!",
      feedbackErro: "1, 2, 3, 4, 5… CINCO vem depois do QUATRO!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · A escadinha dos números",
      convite:
        "Coloca 5 objetos em fileira. Aponta o primeiro (1), depois o segundo (2)… até o quinto (5). Pergunta: 'Depois do 3 vem qual?' A criança responde.",
      dicaAdulto:
        "Ordem estável (Gelman): a sequência 1-2-3-4-5 é sempre a mesma. Falar em voz alta ajuda a fixar. Isso é DIFERENTE de saber 'quanto tem'.",
    },
    {
      tipo: "celebracao",
      medalha: "Sabe a Ordem",
      mascoteUrl: mascote,
      falaFinal: "Você sabe a ORDEM dos números até 5!",
    },
  ],
  baseCientifica:
    "Princípio da ordem estável (Gelman & Gallistel) — a sequência é fixa.",
};

const dia05: AulaEI = {
  slug: "pip-f2-s1-d5-revisao-semana1",
  titulo: "Dia 5 · Contador de 5 (revisão)",
  icone: "🏅",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Fim da Semana 1 da Fase 2! Você já conta tocando e sabe a ordem. Bora provar!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: coracao,
      quantidade: 4,
      itemSingular: "coração",
      itemPlural: "corações",
      instrucaoAudio: "Toca em cada coração: UM, DOIS, TRÊS, QUATRO.",
      elogio: "Quatro corações!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 5,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Agora CINCO: UM, DOIS, TRÊS, QUATRO, CINCO.",
      elogio: "Cinco flores!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 3 vem o…",
      opcoes: [
        { nome: "2 bolas", imagemUrl: bola, correta: false, quantidade: 2 },
        { nome: "4 joaninhas", imagemUrl: joaninha, correta: true, quantidade: 4 },
        { nome: "1 borboleta", imagemUrl: borboleta, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "QUATRO!",
      feedbackErro: "1, 2, 3, 4 — QUATRO vem depois do TRÊS!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem CINCO?",
      opcoes: [
        { nome: "três estrelas", imagemUrl: estrela, correta: false, quantidade: 3 },
        { nome: "cinco maçãs", imagemUrl: maca, correta: true, quantidade: 5 },
        { nome: "quatro balões", imagemUrl: balao, correta: false, quantidade: 4 },
      ],
      feedbackAcerto: "Isso! CINCO maçãs!",
      feedbackErro: "CINCO tem cinco. Conta um por um!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara.",
      perguntaAudio: "Qual grupo tem MAIS bolas?",
      imagemUrl: bola,
      itemPlural: "bolas",
      alvo: "mais",
      opcoes: [
        { qtd: 5, correta: true },
        { qtd: 3, correta: false },
      ],
      feedbackAcerto: "CINCO é mais que TRÊS!",
      feedbackErro: "CINCO é maior. Conta pra confirmar!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Show do 5",
      convite:
        "A criança escolhe 5 brinquedos e conta tocando. Depois um adulto pergunta: 'depois do 2? depois do 4?' — ela responde.",
      dicaAdulto:
        "Marcadores da Semana 1: contar tocando até 5 sem pular, sem repetir e saber o número seguinte. Se firme, Semana 2 (contar 6–10) libera.",
    },
    {
      tipo: "celebracao",
      medalha: "Semana 1 · Contador de 5",
      mascoteUrl: mascote,
      falaFinal:
        "MEDALHA de Contador de 5! Vem aí a Semana 2: contar até DEZ!",
    },
  ],
  baseCientifica:
    "Revisão semanal — correspondência 1-a-1 e ordem estável até 5.",
};



// ============================================================
// SEMANA 2 · Contar até 10 (6, 7, 8, 9, 10)
// Base: contagem 1-a-1 estendida + cardinalidade (o último dito é o total).
// Âncora: 5 (mão cheia) + mais dedos da outra mão.
// ============================================================

const dia06: AulaEI = {
  slug: "pip-f2-s2-d6-contar-ate-6",
  titulo: "Dia 6 · Contar até 6",
  icone: "6️⃣",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana 2! Já sabemos até 5 (mão cheia). Hoje vamos passar do 5: chega o SEIS! É 5 e mais 1.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 5,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio: "Aquece: conta as CINCO bolas — UM, DOIS, TRÊS, QUATRO, CINCO.",
      elogio: "Cinco! Mão cheia!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 6,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio:
        "Agora SEIS estrelas. Toca uma por uma: UM, DOIS, TRÊS, QUATRO, CINCO, SEIS.",
      elogio: "SEIS! Passou do cinco!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 6,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio: "De novo, com joaninhas: até SEIS.",
      elogio: "Seis joaninhas!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem SEIS?",
      opcoes: [
        { nome: "cinco flores", imagemUrl: flor, correta: false, quantidade: 5 },
        { nome: "seis corações", imagemUrl: coracao, correta: true, quantidade: 6 },
        { nome: "quatro maçãs", imagemUrl: maca, correta: false, quantidade: 4 },
      ],
      feedbackAcerto: "Isso! SEIS corações!",
      feedbackErro: "SEIS é CINCO e mais UM. Conta um por um!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Seis coisinhas",
      convite:
        "Ache 6 tampinhas. Enfileira. A criança conta tocando: 1, 2, 3, 4, 5, 6. Pergunta: 'Quantos tem?' — resposta esperada: SEIS.",
      dicaAdulto:
        "Cardinalidade (Gelman): o ÚLTIMO número dito é o total. Se recontar quando você pergunta 'quantos?', ainda está firmando esse princípio.",
    },
    {
      tipo: "celebracao",
      medalha: "Contador de 6",
      mascoteUrl: mascote,
      falaFinal: "SEIS! Você já conta mais que a mão!",
    },
  ],
  baseCientifica:
    "Extensão da contagem 1-a-1 para além do 5 — ponte perceptual (Fuson).",
};

const dia07: AulaEI = {
  slug: "pip-f2-s2-d7-contar-ate-7",
  titulo: "Dia 7 · Contar até 7",
  icone: "7️⃣",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Hoje é o SETE! Cinco na mão cheia mais DOIS dedos da outra mão.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 6,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Aquece: SEIS flores — 1, 2, 3, 4, 5, 6.",
      elogio: "Seis!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: balao,
      quantidade: 7,
      itemSingular: "balão",
      itemPlural: "balões",
      instrucaoAudio:
        "Agora SETE balões. Toca cada um: 1, 2, 3, 4, 5, 6, 7.",
      elogio: "SETE! Nenhum pulou!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: borboleta,
      quantidade: 7,
      itemSingular: "borboleta",
      itemPlural: "borboletas",
      instrucaoAudio: "De novo, com borboletas: até SETE.",
      elogio: "Sete borboletas!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem SETE?",
      opcoes: [
        { nome: "seis maçãs", imagemUrl: maca, correta: false, quantidade: 6 },
        { nome: "sete estrelas", imagemUrl: estrela, correta: true, quantidade: 7 },
        { nome: "cinco bolas", imagemUrl: bola, correta: false, quantidade: 5 },
      ],
      feedbackAcerto: "Isso! SETE estrelas!",
      feedbackErro: "SETE é SEIS e mais UM. Conta tocando!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara os dois grupos.",
      perguntaAudio: "Qual grupo tem MAIS joaninhas?",
      imagemUrl: joaninha,
      itemPlural: "joaninhas",
      alvo: "mais",
      opcoes: [
        { qtd: 4, correta: false },
        { qtd: 7, correta: true },
      ],
      feedbackAcerto: "SETE é bem mais que QUATRO!",
      feedbackErro: "SETE é maior. Conta pra confirmar!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Sete pecinhas",
      convite:
        "Pega 7 blocos ou pecinhas. A criança conta tocando cada um. Depois pergunta: 'quantos tem?' — resposta: SETE.",
      dicaAdulto:
        "Se a criança recontar toda vez, tudo bem — o princípio da cardinalidade ainda está sendo interiorizado.",
    },
    {
      tipo: "celebracao",
      medalha: "Contador de 7",
      mascoteUrl: mascote,
      falaFinal: "SETE! Cinco dedos + dois. Muito bem!",
    },
  ],
  baseCientifica:
    "Contagem 1-a-1 até 7 + reforço de cardinalidade.",
};

const dia08: AulaEI = {
  slug: "pip-f2-s2-d8-contar-ate-8",
  titulo: "Dia 8 · Contar até 8",
  icone: "8️⃣",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "OITO hoje! Cinco na mão cheia mais TRÊS dedos. Vem contar!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: coracao,
      quantidade: 7,
      itemSingular: "coração",
      itemPlural: "corações",
      instrucaoAudio: "Aquece com SETE corações.",
      elogio: "Sete!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: maca,
      quantidade: 8,
      itemSingular: "maçã",
      itemPlural: "maçãs",
      instrucaoAudio:
        "Agora OITO maçãs. Toca cada uma: 1, 2, 3, 4, 5, 6, 7, 8.",
      elogio: "OITO maçãs!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 8,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio: "De novo, com estrelas: até OITO.",
      elogio: "Oito estrelas!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem OITO?",
      opcoes: [
        { nome: "sete balões", imagemUrl: balao, correta: false, quantidade: 7 },
        { nome: "oito joaninhas", imagemUrl: joaninha, correta: true, quantidade: 8 },
        { nome: "seis flores", imagemUrl: flor, correta: false, quantidade: 6 },
      ],
      feedbackAcerto: "Isso! OITO joaninhas!",
      feedbackErro: "OITO é SETE e mais UM. Conta tocando!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Oito passos",
      convite:
        "Andem juntos contando cada passo até 8. Depois: 8 uvas, 8 pedrinhas — qualquer coisa que der pra tocar.",
      dicaAdulto:
        "Abstração (Gelman): qualquer coisa pode ser contada — passos, sons, objetos. Variar o material fortalece o conceito.",
    },
    {
      tipo: "celebracao",
      medalha: "Contador de 8",
      mascoteUrl: mascote,
      falaFinal: "OITO! Cada vez mais longe!",
    },
  ],
  baseCientifica:
    "Contagem 1-a-1 até 8 + princípio da abstração (Gelman).",
};

const dia09: AulaEI = {
  slug: "pip-f2-s2-d9-contar-ate-9",
  titulo: "Dia 9 · Contar até 9",
  icone: "9️⃣",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "NOVE! Quase chegando na mão inteira DE NOVO. Falta só um pro DEZ.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 8,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio: "Aquece com OITO bolas.",
      elogio: "Oito!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 9,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio:
        "Agora NOVE flores. Toca cada uma: 1, 2, 3, 4, 5, 6, 7, 8, 9.",
      elogio: "NOVE flores!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: borboleta,
      quantidade: 9,
      itemSingular: "borboleta",
      itemPlural: "borboletas",
      instrucaoAudio: "De novo, com borboletas: até NOVE.",
      elogio: "Nove borboletas!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 8 vem o…",
      opcoes: [
        { nome: "7 (sete corações)", imagemUrl: coracao, correta: false, quantidade: 7 },
        { nome: "9 (nove balões)", imagemUrl: balao, correta: true, quantidade: 9 },
        { nome: "5 (cinco bolas)", imagemUrl: bola, correta: false, quantidade: 5 },
      ],
      feedbackAcerto: "NOVE vem depois do OITO!",
      feedbackErro: "1, 2, 3, 4, 5, 6, 7, 8, 9 — NOVE vem depois do OITO.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem NOVE?",
      opcoes: [
        { nome: "oito estrelas", imagemUrl: estrela, correta: false, quantidade: 8 },
        { nome: "nove maçãs", imagemUrl: maca, correta: true, quantidade: 9 },
        { nome: "sete joaninhas", imagemUrl: joaninha, correta: false, quantidade: 7 },
      ],
      feedbackAcerto: "Isso! NOVE maçãs!",
      feedbackErro: "Conta tocando cada uma até 9.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Nove batidas",
      convite:
        "Bate palma 9 vezes contando junto. Depois separa 9 objetos e conta tocando.",
      dicaAdulto:
        "Contar sons treina abstração e memória sequencial — importante para o próximo passo (DEZ).",
    },
    {
      tipo: "celebracao",
      medalha: "Contador de 9",
      mascoteUrl: mascote,
      falaFinal: "NOVE! Amanhã: DEZ!",
    },
  ],
  baseCientifica:
    "Contagem 1-a-1 até 9 + ordem estável estendida.",
};

const dia10: AulaEI = {
  slug: "pip-f2-s2-d10-contador-de-10",
  titulo: "Dia 10 · Contador de 10 (revisão)",
  icone: "🏅",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Chegou o DEZ! As DUAS mãos inteiras. Fim da Semana 2 — bora provar tudo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 10,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio:
        "Toca em cada estrela: 1, 2, 3, 4, 5, 6, 7, 8, 9, DEZ!",
      elogio: "DEZ estrelas! As duas mãos!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: coracao,
      quantidade: 10,
      itemSingular: "coração",
      itemPlural: "corações",
      instrucaoAudio: "De novo, com corações: até DEZ.",
      elogio: "Dez corações!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem DEZ?",
      opcoes: [
        { nome: "nove flores", imagemUrl: flor, correta: false, quantidade: 9 },
        { nome: "dez balões", imagemUrl: balao, correta: true, quantidade: 10 },
        { nome: "oito maçãs", imagemUrl: maca, correta: false, quantidade: 8 },
      ],
      feedbackAcerto: "Isso! DEZ balões!",
      feedbackErro: "DEZ é NOVE e mais UM. Conta tocando!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 6 vem o…",
      opcoes: [
        { nome: "7 (sete joaninhas)", imagemUrl: joaninha, correta: true, quantidade: 7 },
        { nome: "5 (cinco bolas)", imagemUrl: bola, correta: false, quantidade: 5 },
        { nome: "9 (nove borboletas)", imagemUrl: borboleta, correta: false, quantidade: 9 },
      ],
      feedbackAcerto: "SETE vem depois do SEIS!",
      feedbackErro: "1, 2, 3, 4, 5, 6, 7 — SETE vem depois do SEIS!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara.",
      perguntaAudio: "Qual grupo tem MAIS bolas?",
      imagemUrl: bola,
      itemPlural: "bolas",
      alvo: "mais",
      opcoes: [
        { qtd: 10, correta: true },
        { qtd: 6, correta: false },
      ],
      feedbackAcerto: "DEZ é bem mais que SEIS!",
      feedbackErro: "DEZ é maior. Conta pra confirmar!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Show do 10",
      convite:
        "A criança abre as DUAS mãos: 10 dedinhos. Conta tocando. Depois: 10 uvas, 10 blocos, 10 passos — tudo até 10.",
      dicaAdulto:
        "Marcadores da Semana 2: contar 1-a-1 até 10 sem pular, responder 'quantos tem?' sem recontar (cardinalidade) e saber o número seguinte. Firme? Fase 2 fechada, Fase 3 (cardinalidade avançada) libera.",
    },
    {
      tipo: "celebracao",
      medalha: "Semana 2 · Contador de 10",
      mascoteUrl: mascote,
      falaFinal:
        "MEDALHA de Contador de 10! Você conta as DUAS mãos inteiras!",
    },
  ],
  baseCientifica:
    "Revisão semanal — contagem 1-a-1 e cardinalidade até 10.",
};


// ============================================================
// SEMANA 3 · Mestre da Contagem
// Foco: cardinalidade sem recontar, contagem para trás (10→1),
// irrelevância da ordem (contar por qualquer lado dá o mesmo total).
// ============================================================

const dia11: AulaEI = {
  slug: "pip-f2-s3-d11-quantos-tem",
  titulo: "Dia 11 · Quantos tem? (sem recontar)",
  icone: "🎯",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana 3! Hoje o Pip te ensina o segredo dos contadores de verdade: o ÚLTIMO número que você diz é QUANTOS TEM. Não precisa contar de novo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 4,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio:
        "Conta as bolas: UM, DOIS, TRÊS, QUATRO. QUATRO! Esse foi o último — então tem QUATRO.",
      elogio: "Quatro! Não precisa contar de novo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 6,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio:
        "Conta: 1, 2, 3, 4, 5, 6. Tem SEIS. O último número é o total!",
      elogio: "Isso! SEIS!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "O Pip contou até OITO e parou. Quantas maçãs tem?",
      opcoes: [
        { nome: "seis", imagemUrl: maca, correta: false, quantidade: 6 },
        { nome: "oito", imagemUrl: maca, correta: true, quantidade: 8 },
        { nome: "sete", imagemUrl: maca, correta: false, quantidade: 7 },
      ],
      feedbackAcerto: "OITO! O último número dito é o total!",
      feedbackErro: "Se parou no OITO, tem OITO. Esse é o segredo!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "A gente contou até CINCO. Quantas flores tem?",
      opcoes: [
        { nome: "três", imagemUrl: flor, correta: false, quantidade: 3 },
        { nome: "cinco", imagemUrl: flor, correta: true, quantidade: 5 },
        { nome: "quatro", imagemUrl: flor, correta: false, quantidade: 4 },
      ],
      feedbackAcerto: "CINCO! O último é o total!",
      feedbackErro: "Contou até CINCO, então tem CINCO.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Quantos tem?",
      convite:
        "Coloca alguns objetos. A criança conta tocando. Quando terminar, pergunta 'quantos tem?' — o ideal é ela responder o último número SEM recontar.",
      dicaAdulto:
        "Cardinalidade (Gelman): saber que o último número dito É o total é a virada de chave da contagem. Se ela recontar, tudo bem — ainda está firmando.",
    },
    {
      tipo: "celebracao",
      medalha: "Sabe Quantos Tem",
      mascoteUrl: mascote,
      falaFinal: "O último número é QUANTOS TEM! Segredo desbloqueado!",
    },
  ],
  baseCientifica:
    "Princípio da cardinalidade (Gelman & Gallistel) — o último número dito é o total.",
};

const dia12: AulaEI = {
  slug: "pip-f2-s3-d12-contar-para-tras",
  titulo: "Dia 12 · Contar para trás (10 → 1)",
  icone: "🚀",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Foguete do Pip vai decolar! Mas antes precisa contar PARA TRÁS: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1… DECOLA!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 5,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio:
        "Aquece indo pra frente: 1, 2, 3, 4, 5.",
      elogio: "Cinco!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Antes do 3 vem o…",
      opcoes: [
        { nome: "2 (duas estrelas)", imagemUrl: estrela, correta: true, quantidade: 2 },
        { nome: "4 (quatro balões)", imagemUrl: balao, correta: false, quantidade: 4 },
        { nome: "5 (cinco maçãs)", imagemUrl: maca, correta: false, quantidade: 5 },
      ],
      feedbackAcerto: "DOIS! Antes do TRÊS vem o DOIS!",
      feedbackErro: "Contando pra trás: 3, 2, 1. DOIS vem antes do TRÊS.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Antes do 5 vem o…",
      opcoes: [
        { nome: "3 (três flores)", imagemUrl: flor, correta: false, quantidade: 3 },
        { nome: "4 (quatro corações)", imagemUrl: coracao, correta: true, quantidade: 4 },
        { nome: "6 (seis joaninhas)", imagemUrl: joaninha, correta: false, quantidade: 6 },
      ],
      feedbackAcerto: "QUATRO! Antes do 5 vem o 4!",
      feedbackErro: "5, 4, 3, 2, 1 — QUATRO vem antes do CINCO.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Antes do 8 vem o…",
      opcoes: [
        { nome: "6 (seis bolas)", imagemUrl: bola, correta: false, quantidade: 6 },
        { nome: "7 (sete borboletas)", imagemUrl: borboleta, correta: true, quantidade: 7 },
        { nome: "9 (nove maçãs)", imagemUrl: maca, correta: false, quantidade: 9 },
      ],
      feedbackAcerto: "SETE! Antes do 8 vem o 7!",
      feedbackErro: "8, 7, 6… SETE vem antes do OITO.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Antes do 10 vem o…",
      opcoes: [
        { nome: "8 (oito estrelas)", imagemUrl: estrela, correta: false, quantidade: 8 },
        { nome: "9 (nove balões)", imagemUrl: balao, correta: true, quantidade: 9 },
        { nome: "7 (sete flores)", imagemUrl: flor, correta: false, quantidade: 7 },
      ],
      feedbackAcerto: "NOVE! Antes do 10 vem o 9!",
      feedbackErro: "10, 9, 8… NOVE vem antes do DEZ.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Contagem regressiva",
      convite:
        "Brinca de foguete: contem juntos 10, 9, 8, 7, 6, 5, 4, 3, 2, 1… DECOLA! Repete algumas vezes.",
      dicaAdulto:
        "Contar para trás fortalece a sequência numérica e prepara subtração. Comece do 5 se 10 for difícil.",
    },
    {
      tipo: "celebracao",
      medalha: "Foguete do Pip",
      mascoteUrl: mascote,
      falaFinal: "Você já conta pra frente E pra trás!",
    },
  ],
  baseCientifica:
    "Contagem regressiva — pré-requisito para subtração (Fuson).",
};

const dia13: AulaEI = {
  slug: "pip-f2-s3-d13-tanto-faz-a-ordem",
  titulo: "Dia 13 · Tanto faz a ordem",
  icone: "🔄",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Segredo grande hoje: TANTO FAZ por onde começa a contar. Da esquerda, da direita, do meio — o TOTAL é sempre o mesmo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 5,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Conta as flores da esquerda pra direita.",
      elogio: "Cinco flores!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 5,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio:
        "Agora conta AS MESMAS flores começando pela outra ponta. Quantas dá?",
      elogio: "CINCO de novo! Tanto faz a ordem!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 7,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio: "Conta as sete joaninhas por qualquer lado.",
      elogio: "Sete!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "O Pip contou 6 maçãs. A Cate contou as MESMAS maçãs começando pelo outro lado. Quantas ela achou?",
      opcoes: [
        { nome: "cinco", imagemUrl: maca, correta: false, quantidade: 5 },
        { nome: "seis", imagemUrl: maca, correta: true, quantidade: 6 },
        { nome: "sete", imagemUrl: maca, correta: false, quantidade: 7 },
      ],
      feedbackAcerto: "SEIS! Tanto faz por onde começa!",
      feedbackErro: "As mesmas maçãs dão o MESMO total. SEIS!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "Tem 8 corações na mesa. Se você contar de trás pra frente, quantos vai dar?",
      opcoes: [
        { nome: "oito", imagemUrl: coracao, correta: true, quantidade: 8 },
        { nome: "sete", imagemUrl: coracao, correta: false, quantidade: 7 },
        { nome: "nove", imagemUrl: coracao, correta: false, quantidade: 9 },
      ],
      feedbackAcerto: "OITO! O total não muda!",
      feedbackErro: "Se tem 8, dá 8 — não importa a ordem.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Por qualquer lado",
      convite:
        "Enfileira 6 objetos. A criança conta da esquerda. Depois da direita. Depois do meio. Toda vez tem que dar SEIS!",
      dicaAdulto:
        "Irrelevância da ordem (Gelman): o total independe do ponto de partida. Isso libera a ideia de comutatividade (2+3=3+2) mais adiante.",
    },
    {
      tipo: "celebracao",
      medalha: "Tanto Faz",
      mascoteUrl: mascote,
      falaFinal: "O total é o total! Não muda!",
    },
  ],
  baseCientifica:
    "Princípio da irrelevância da ordem (Gelman & Gallistel).",
};

const dia14: AulaEI = {
  slug: "pip-f2-s3-d14-desafio-relampago",
  titulo: "Dia 14 · Desafio Relâmpago",
  icone: "⚡",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "DESAFIO RELÂMPAGO! Vou misturar tudo da Semana 3: quantos tem, o que vem antes e depois, e comparação. Bora?",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Contamos até 7. Quantos tem?",
      opcoes: [
        { nome: "seis", imagemUrl: bola, correta: false, quantidade: 6 },
        { nome: "sete", imagemUrl: bola, correta: true, quantidade: 7 },
        { nome: "oito", imagemUrl: bola, correta: false, quantidade: 8 },
      ],
      feedbackAcerto: "SETE! Último dito = total!",
      feedbackErro: "Se parou no 7, tem 7.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Antes do 6 vem o…",
      opcoes: [
        { nome: "4 (quatro joaninhas)", imagemUrl: joaninha, correta: false, quantidade: 4 },
        { nome: "5 (cinco estrelas)", imagemUrl: estrela, correta: true, quantidade: 5 },
        { nome: "7 (sete flores)", imagemUrl: flor, correta: false, quantidade: 7 },
      ],
      feedbackAcerto: "CINCO vem antes do SEIS!",
      feedbackErro: "6, 5, 4… CINCO vem antes do SEIS.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 7 vem o…",
      opcoes: [
        { nome: "8 (oito maçãs)", imagemUrl: maca, correta: true, quantidade: 8 },
        { nome: "6 (seis balões)", imagemUrl: balao, correta: false, quantidade: 6 },
        { nome: "10 (dez borboletas)", imagemUrl: borboleta, correta: false, quantidade: 10 },
      ],
      feedbackAcerto: "OITO! Depois do 7 vem o 8!",
      feedbackErro: "7, 8, 9… OITO vem depois do SETE.",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara os dois grupos.",
      perguntaAudio: "Qual grupo tem MENOS corações?",
      imagemUrl: coracao,
      itemPlural: "corações",
      alvo: "menos",
      opcoes: [
        { qtd: 3, correta: true },
        { qtd: 9, correta: false },
      ],
      feedbackAcerto: "TRÊS é menos que NOVE!",
      feedbackErro: "TRÊS é menor. Conta pra confirmar!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara.",
      perguntaAudio: "Qual grupo tem MAIS flores?",
      imagemUrl: flor,
      itemPlural: "flores",
      alvo: "mais",
      opcoes: [
        { qtd: 8, correta: true },
        { qtd: 4, correta: false },
      ],
      feedbackAcerto: "OITO é mais que QUATRO!",
      feedbackErro: "OITO é maior. Conta pra confirmar!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Rodada rápida",
      convite:
        "Adulto fala um número (ex.: 6). A criança responde: 'antes vem 5, depois vem 7'. Repete com 3, 5, 8, 9.",
      dicaAdulto:
        "Responder antes/depois rápido mostra que a sequência 1-10 está automatizada — pré-requisito para adição por contagem.",
    },
    {
      tipo: "celebracao",
      medalha: "Raio Contador",
      mascoteUrl: mascote,
      falaFinal: "Você contou como raio! Amanhã fecha a semana!",
    },
  ],
  baseCientifica:
    "Prática mista automatizando cardinalidade, sequência e comparação.",
};

const dia15: AulaEI = {
  slug: "pip-f2-s3-d15-mestre-da-contagem",
  titulo: "Dia 15 · Mestre da Contagem (revisão)",
  icone: "🏅",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Fim da Semana 3! Você já conta pra frente, pra trás, sabe QUANTOS TEM e que a ordem TANTO FAZ. Bora provar!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: balao,
      quantidade: 8,
      itemSingular: "balão",
      itemPlural: "balões",
      instrucaoAudio: "Conta OITO balões tocando em cada um.",
      elogio: "OITO!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Contamos até 9. Quantos tem?",
      opcoes: [
        { nome: "sete", imagemUrl: joaninha, correta: false, quantidade: 7 },
        { nome: "nove", imagemUrl: joaninha, correta: true, quantidade: 9 },
        { nome: "dez", imagemUrl: joaninha, correta: false, quantidade: 10 },
      ],
      feedbackAcerto: "NOVE! Último dito = total!",
      feedbackErro: "Se parou no 9, tem 9.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Antes do 4 vem o…",
      opcoes: [
        { nome: "3 (três corações)", imagemUrl: coracao, correta: true, quantidade: 3 },
        { nome: "5 (cinco estrelas)", imagemUrl: estrela, correta: false, quantidade: 5 },
        { nome: "2 (duas bolas)", imagemUrl: bola, correta: false, quantidade: 2 },
      ],
      feedbackAcerto: "TRÊS! Antes do 4 vem o 3!",
      feedbackErro: "4, 3, 2… TRÊS vem antes do QUATRO.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "A gente contou 7 flores pela esquerda. Contando pela direita, quantas dá?",
      opcoes: [
        { nome: "seis", imagemUrl: flor, correta: false, quantidade: 6 },
        { nome: "sete", imagemUrl: flor, correta: true, quantidade: 7 },
        { nome: "oito", imagemUrl: flor, correta: false, quantidade: 8 },
      ],
      feedbackAcerto: "SETE! Tanto faz o lado!",
      feedbackErro: "As mesmas flores dão o mesmo total. SETE!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara.",
      perguntaAudio: "Qual grupo tem MAIS maçãs?",
      imagemUrl: maca,
      itemPlural: "maçãs",
      alvo: "mais",
      opcoes: [
        { qtd: 9, correta: true },
        { qtd: 5, correta: false },
      ],
      feedbackAcerto: "NOVE é mais que CINCO!",
      feedbackErro: "NOVE é maior. Conta pra confirmar!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Prova de Mestre",
      convite:
        "1) A criança conta 10 objetos tocando. 2) Adulto pergunta 'quantos tem?' — ideal responder sem recontar. 3) Contam juntos regressivo: 10, 9, 8… 1.",
      dicaAdulto:
        "Marcadores da Semana 3: cardinalidade automática, contar regressivo até 10 e entender que o total não depende da ordem. Firme? Semana 4 (fechamento da Fase 2) libera.",
    },
    {
      tipo: "celebracao",
      medalha: "Semana 3 · Mestre da Contagem",
      mascoteUrl: mascote,
      falaFinal:
        "MEDALHA de Mestre da Contagem! Você domina os 5 segredos do Pip!",
    },
  ],
  baseCientifica:
    "Revisão semanal — cardinalidade, ordem estável reversa e irrelevância da ordem.",
};

// ============================================================
// SEMANA 4 · Formatura da Fase 2
// Foco: contextos do dia a dia + "quantos ao todo?" (juntar pequenos grupos)
// + prova final de contagem 1-10 + DIPLOMA da Fase 2.
// ============================================================

const dia16: AulaEI = {
  slug: "pip-f2-s4-d16-contar-no-dia-a-dia",
  titulo: "Dia 16 · Contar no dia a dia",
  icone: "🏠",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Última semana da Fase 2! Hoje contamos coisas da vida real: bolas, maçãs, balões. Qualquer coisa vira contagem!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: maca,
      quantidade: 4,
      itemSingular: "maçã",
      itemPlural: "maçãs",
      instrucaoAudio: "A mamãe comprou maçãs. Conta pra ela: quantas tem?",
      elogio: "QUATRO maçãs!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: balao,
      quantidade: 6,
      itemSingular: "balão",
      itemPlural: "balões",
      instrucaoAudio: "Balões da festa do Pip! Conta tocando em cada um.",
      elogio: "SEIS balões!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 8,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio: "Joaninhas no jardim. Conta todas!",
      elogio: "OITO joaninhas!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "Na cesta tem 5 flores. Você põe MAIS UMA. Qual grupo mostra quantas ficaram?",
      opcoes: [
        { nome: "cinco", imagemUrl: flor, correta: false, quantidade: 5 },
        { nome: "seis", imagemUrl: flor, correta: true, quantidade: 6 },
        { nome: "sete", imagemUrl: flor, correta: false, quantidade: 7 },
      ],
      feedbackAcerto: "SEIS! 5 e mais 1 dá 6!",
      feedbackErro: "5 e mais 1 dá 6. Conta pra confirmar!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Contando em casa",
      convite:
        "Escolhe 3 lugares da casa. Em cada um, contem coisas: 4 sapatos, 6 canecas, 8 talheres. Sempre pergunta 'quantos tem?' no final.",
      dicaAdulto:
        "Contextualizar contagem em objetos reais aumenta transferência (Clements & Sarama). Objetos diferentes reforçam abstração.",
    },
    {
      tipo: "celebracao",
      medalha: "Contador do Dia a Dia",
      mascoteUrl: mascote,
      falaFinal: "Você conta em qualquer lugar!",
    },
  ],
  baseCientifica:
    "Contextualização — contagem em objetos reais (Clements & Sarama).",
};

const dia17: AulaEI = {
  slug: "pip-f2-s4-d17-quantos-ao-todo",
  titulo: "Dia 17 · Quantos ao todo?",
  icone: "➕",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Segredo novo: JUNTAR dois grupinhos e contar TUDO. Isso é adição chegando devagarinho!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 3,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio: "Conta as bolas do primeiro grupo: 1, 2, 3.",
      elogio: "Três!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 5,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio:
        "Agora tem 3 bolas MAIS 2 bolas juntas. Conta TUDO: 1, 2, 3, 4, 5.",
      elogio: "CINCO ao todo! 3 e 2 dá 5!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Se juntar 2 corações e mais 2 corações, quantos ao todo?",
      opcoes: [
        { nome: "três", imagemUrl: coracao, correta: false, quantidade: 3 },
        { nome: "quatro", imagemUrl: coracao, correta: true, quantidade: 4 },
        { nome: "cinco", imagemUrl: coracao, correta: false, quantidade: 5 },
      ],
      feedbackAcerto: "QUATRO! 2 e 2 dá 4!",
      feedbackErro: "2 e 2 dá 4. Conta 1, 2, 3, 4!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "O Pip tem 4 balões. Ganhou mais 3. Quantos balões ele tem AO TODO?",
      opcoes: [
        { nome: "seis", imagemUrl: balao, correta: false, quantidade: 6 },
        { nome: "sete", imagemUrl: balao, correta: true, quantidade: 7 },
        { nome: "oito", imagemUrl: balao, correta: false, quantidade: 8 },
      ],
      feedbackAcerto: "SETE! 4 e mais 3 dá 7!",
      feedbackErro: "4 e mais 3 dá 7. Continua contando: 4… 5, 6, 7!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "5 estrelas e mais 1 estrela — quantas ao todo?",
      opcoes: [
        { nome: "cinco", imagemUrl: estrela, correta: false, quantidade: 5 },
        { nome: "seis", imagemUrl: estrela, correta: true, quantidade: 6 },
        { nome: "sete", imagemUrl: estrela, correta: false, quantidade: 7 },
      ],
      feedbackAcerto: "SEIS! 5 e mais 1 dá 6!",
      feedbackErro: "5 e mais 1 dá 6.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Juntando grupinhos",
      convite:
        "Coloca 2 uvas em um pratinho e 3 em outro. Pergunta: 'quantas AO TODO?' A criança junta e conta tudo. Repete com combinações diferentes até 10.",
      dicaAdulto:
        "Contar TUDO ('count all') é a primeira estratégia de adição (Carpenter & Moser). Depois vem 'contar a partir de' — mais adiante.",
    },
    {
      tipo: "celebracao",
      medalha: "Juntador de Grupos",
      mascoteUrl: mascote,
      falaFinal: "Você já JUNTA e conta ao todo!",
    },
  ],
  baseCientifica:
    "Estratégia 'count all' — porta de entrada para adição (Carpenter & Moser).",
};

const dia18: AulaEI = {
  slug: "pip-f2-s4-d18-prova-1-a-10",
  titulo: "Dia 18 · Prova do Pip (1 a 10)",
  icone: "🎯",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Prova do Pip! Vou misturar TUDO da Fase 2. Se passar, você recebe o DIPLOMA no Dia 20!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 7,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Conta as flores tocando em cada uma.",
      elogio: "SETE!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 5 vem o…",
      opcoes: [
        { nome: "6 (seis maçãs)", imagemUrl: maca, correta: true, quantidade: 6 },
        { nome: "4 (quatro joaninhas)", imagemUrl: joaninha, correta: false, quantidade: 4 },
        { nome: "8 (oito balões)", imagemUrl: balao, correta: false, quantidade: 8 },
      ],
      feedbackAcerto: "SEIS vem depois do CINCO!",
      feedbackErro: "5, 6, 7… SEIS vem depois do CINCO.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Antes do 9 vem o…",
      opcoes: [
        { nome: "7 (sete borboletas)", imagemUrl: borboleta, correta: false, quantidade: 7 },
        { nome: "8 (oito corações)", imagemUrl: coracao, correta: true, quantidade: 8 },
        { nome: "10 (dez estrelas)", imagemUrl: estrela, correta: false, quantidade: 10 },
      ],
      feedbackAcerto: "OITO! Antes do 9 vem o 8!",
      feedbackErro: "9, 8, 7… OITO vem antes do NOVE.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Contamos até 10. Quantos tem?",
      opcoes: [
        { nome: "nove", imagemUrl: bola, correta: false, quantidade: 9 },
        { nome: "dez", imagemUrl: bola, correta: true, quantidade: 10 },
        { nome: "oito", imagemUrl: bola, correta: false, quantidade: 8 },
      ],
      feedbackAcerto: "DEZ! Último dito = total!",
      feedbackErro: "Se parou no 10, tem 10.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "3 maçãs e mais 4 maçãs — quantas ao todo?",
      opcoes: [
        { nome: "seis", imagemUrl: maca, correta: false, quantidade: 6 },
        { nome: "sete", imagemUrl: maca, correta: true, quantidade: 7 },
        { nome: "oito", imagemUrl: maca, correta: false, quantidade: 8 },
      ],
      feedbackAcerto: "SETE! 3 e mais 4 dá 7!",
      feedbackErro: "Conta 1, 2, 3, 4, 5, 6, 7 — SETE!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara.",
      perguntaAudio: "Qual grupo tem MENOS estrelas?",
      imagemUrl: estrela,
      itemPlural: "estrelas",
      alvo: "menos",
      opcoes: [
        { qtd: 2, correta: true },
        { qtd: 9, correta: false },
      ],
      feedbackAcerto: "DOIS é menos que NOVE!",
      feedbackErro: "DOIS é menor. Conta pra confirmar!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Ensaio do diploma",
      convite:
        "Amanhã tem a festa. Hoje a criança treina: conta 10 objetos, diz o que vem antes e depois de 3, 5, 8 e junta dois grupinhos.",
      dicaAdulto:
        "Se algum item ainda titubear, volta 1 dia da semana correspondente antes do Dia 20.",
    },
    {
      tipo: "celebracao",
      medalha: "Prova do Pip",
      mascoteUrl: mascote,
      falaFinal: "Passou na prova! Amanhã tem festa!",
    },
  ],
  baseCientifica:
    "Avaliação integrativa — 5 princípios de Gelman + 'count all'.",
};

const dia19: AulaEI = {
  slug: "pip-f2-s4-d19-festa-do-pip",
  titulo: "Dia 19 · A festa do Pip",
  icone: "🎉",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Festa do Pip! Balões, bolos, presentes. Vamos contar tudo pra festa ficar perfeita!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: balao,
      quantidade: 9,
      itemSingular: "balão",
      itemPlural: "balões",
      instrucaoAudio: "Conta os balões da festa.",
      elogio: "NOVE balões!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Faltou UM balão pra dar 10. Quantos tem AGORA na festa?",
      opcoes: [
        { nome: "nove", imagemUrl: balao, correta: true, quantidade: 9 },
        { nome: "dez", imagemUrl: balao, correta: false, quantidade: 10 },
        { nome: "oito", imagemUrl: balao, correta: false, quantidade: 8 },
      ],
      feedbackAcerto: "NOVE! Falta 1 pra chegar em 10!",
      feedbackErro: "Se faltou 1 pra 10, tem NOVE.",
    },
    {
      tipo: "contarBolas",
      imagemUrl: coracao,
      quantidade: 6,
      itemSingular: "coração",
      itemPlural: "corações",
      instrucaoAudio: "Corações de decoração! Conta.",
      elogio: "SEIS!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "Chegaram 4 amiguinhos e depois mais 3. Quantos amiguinhos AO TODO?",
      opcoes: [
        { nome: "seis", imagemUrl: joaninha, correta: false, quantidade: 6 },
        { nome: "sete", imagemUrl: joaninha, correta: true, quantidade: 7 },
        { nome: "oito", imagemUrl: joaninha, correta: false, quantidade: 8 },
      ],
      feedbackAcerto: "SETE! 4 e mais 3 dá 7!",
      feedbackErro: "4 e mais 3 dá 7. Junta e conta tudo!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Sobraram 3 pedaços de bolo. Antes do 3 vem o…",
      opcoes: [
        { nome: "2 (dois)", imagemUrl: bola, correta: true, quantidade: 2 },
        { nome: "4 (quatro)", imagemUrl: bola, correta: false, quantidade: 4 },
        { nome: "1 (um)", imagemUrl: bola, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "DOIS! 3, 2, 1!",
      feedbackErro: "3, 2, 1 — DOIS vem antes do TRÊS.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Festa em casa",
      convite:
        "Simulem uma festa: contem convidados, pratos, colheres, doces. Cada coisa é uma contagem. É a última noite antes do DIPLOMA!",
      dicaAdulto:
        "Contexto festivo aumenta engajamento e memória (Bruner). Amanhã é o Dia 20 — celebre!",
    },
    {
      tipo: "celebracao",
      medalha: "Festeiro do Pip",
      mascoteUrl: mascote,
      falaFinal: "Festa perfeita! Amanhã é o DIPLOMA!",
    },
  ],
  baseCientifica:
    "Prática em contexto lúdico — engajamento e memória (Bruner).",
};

const dia20: AulaEI = {
  slug: "pip-f2-s4-d20-diploma-fase2",
  titulo: "Dia 20 · Diploma da Fase 2",
  icone: "🎓",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "DIA DO DIPLOMA! Você aprendeu os 5 SEGREDOS do Pip: contar tocando, ordem certa, o último é o total, tanto faz a ordem, e qualquer coisa pode ser contada. Bora fechar em grande estilo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 10,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio: "Prova de ouro: conta DEZ estrelas tocando em cada uma.",
      elogio: "DEZ! Você é MESTRE!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem CINCO?",
      opcoes: [
        { nome: "quatro flores", imagemUrl: flor, correta: false, quantidade: 4 },
        { nome: "cinco corações", imagemUrl: coracao, correta: true, quantidade: 5 },
        { nome: "seis maçãs", imagemUrl: maca, correta: false, quantidade: 6 },
      ],
      feedbackAcerto: "CINCO corações! Mão inteira!",
      feedbackErro: "CINCO tem cinco. Conta um por um!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Depois do 7 vem o…",
      opcoes: [
        { nome: "6 (seis bolas)", imagemUrl: bola, correta: false, quantidade: 6 },
        { nome: "8 (oito joaninhas)", imagemUrl: joaninha, correta: true, quantidade: 8 },
        { nome: "10 (dez balões)", imagemUrl: balao, correta: false, quantidade: 10 },
      ],
      feedbackAcerto: "OITO! Depois do 7 vem o 8!",
      feedbackErro: "7, 8, 9… OITO vem depois do SETE.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "3 balões e mais 2 balões — quantos AO TODO?",
      opcoes: [
        { nome: "quatro", imagemUrl: balao, correta: false, quantidade: 4 },
        { nome: "cinco", imagemUrl: balao, correta: true, quantidade: 5 },
        { nome: "seis", imagemUrl: balao, correta: false, quantidade: 6 },
      ],
      feedbackAcerto: "CINCO! 3 e mais 2 dá 5!",
      feedbackErro: "3 e mais 2 dá 5. Junta e conta tudo!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Última comparação!",
      perguntaAudio: "Qual grupo tem MAIS borboletas?",
      imagemUrl: borboleta,
      itemPlural: "borboletas",
      alvo: "mais",
      opcoes: [
        { qtd: 10, correta: true },
        { qtd: 4, correta: false },
      ],
      feedbackAcerto: "DEZ é bem mais que QUATRO!",
      feedbackErro: "DEZ é maior. Conta pra confirmar!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Cerimônia do diploma",
      convite:
        "É dia de festa! Imprima ou mostre o diploma para a criança. Peça pra ela contar 10 coisas na frente da família. Aplausos!",
      dicaAdulto:
        "Ritualizar a conquista consolida autoconfiança matemática (Dweck). Fase 3 (cardinalidade avançada e representação escrita dos números) libera na sequência.",
    },
    {
      tipo: "celebracao",
      medalha: "DIPLOMA · Contador do Pip",
      mascoteUrl: mascote,
      falaFinal:
        "DIPLOMA CONQUISTADO! Você é oficialmente CONTADOR DO PIP! Parabéns!",
    },
  ],
  baseCientifica:
    "Cerimônia de fechamento — autoconfiança matemática (Dweck).",
};


export const cursoContarComPipFase2: CursoEI = {
  slug: "contar-com-pip-f2",
  serie: "pre2",
  serieLabel: "Contar com Pip · Fase 2",
  titulo: "Fase 2 · Contagem 1-a-1 (até 10)",
  descricao:
    "Contar tocando em cada coisinha, sem pular e sem repetir. 5 princípios de Gelman.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#082f49",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "pip-f2-s1",
      numero: 1,
      titulo: "Semana 1 · Contador de 5",
      subtitulo: "Correspondência 1-a-1 e ordem estável até 5",
      aulas: [dia01, dia02, dia03, dia04, dia05],
    },
    {
      slug: "pip-f2-s2",
      numero: 2,
      titulo: "Semana 2 · Contador de 10",
      subtitulo: "Contagem 1-a-1 e cardinalidade de 6 até 10",
      aulas: [dia06, dia07, dia08, dia09, dia10],
    },
    {
      slug: "pip-f2-s3",
      numero: 3,
      titulo: "Semana 3 · Mestre da Contagem",
      subtitulo: "Cardinalidade, contagem regressiva e irrelevância da ordem",
      aulas: [dia11, dia12, dia13, dia14, dia15],
    },
    {
      slug: "pip-f2-s4",
      numero: 4,
      titulo: "Semana 4 · Formatura do Pip",
      subtitulo: "Contextos reais, juntar grupinhos e DIPLOMA da Fase 2",
      aulas: [dia16, dia17, dia18, dia19, dia20],
    },
  ],
};




export function getAulaContarComPipFase2(slug: string): AulaEI | undefined {
  for (const u of cursoContarComPipFase2.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
