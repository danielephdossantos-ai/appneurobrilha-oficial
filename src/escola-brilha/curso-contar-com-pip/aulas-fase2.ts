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

const mascote = brilha;

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
  ],
};


export function getAulaContarComPipFase2(slug: string): AulaEI | undefined {
  for (const u of cursoContarComPipFase2.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
