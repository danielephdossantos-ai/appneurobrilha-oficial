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
  ],
};

export function getAulaContarComPipFase2(slug: string): AulaEI | undefined {
  for (const u of cursoContarComPipFase2.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
