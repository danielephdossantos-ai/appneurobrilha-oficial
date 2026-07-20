import type { CursoEI, AulaEI } from "./types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as galo } from "@/assets/neuro-treino/objetos/galo.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";

/**
 * Pré I (4-5 anos) — Unidade 1 · Aula 1
 * "As palavras da natureza" — sílabas, sons iniciais, história com 3 cenas.
 * BNCC: EI03EF01 · EI03EF04 · EI03EF06
 */
const aula01: AulaEI = {
  slug: "aula-01-palavras-natureza",
  titulo: "As palavras da natureza",
  icone: "🦋",
  bncc: ["EI03EF01", "EI03EF04", "EI03EF06"],
  duracaoMin: 12,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Oi amiguinho! Hoje vamos descobrir os sons das palavras da natureza. Vem comigo!",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: borboleta,
      versos: [
        "Borboleta, pequenina, voa, voa lá no céu.",
        "Bate as asas, colorida, come pólen, come mel.",
        "Bo-bo-le-ta! Bo-bo-le-ta! Vem brincar de esconder!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio:
        "Toca em cada imagem para ouvir. Repita comigo cada palavra.",
      itens: [
        { nome: "borboleta", imagemUrl: borboleta },
        { nome: "flor", imagemUrl: flor },
        { nome: "chuva", imagemUrl: chuva },
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual dessas palavras começa com o mesmo som de CASA?",
      referencia: { nome: "casa", imagemUrl: casa },
      opcoes: [
        { nome: "coelho", imagemUrl: coelho, correta: true },
        { nome: "borboleta", imagemUrl: borboleta, correta: false },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: "Isso! Casa e coelho começam com o som CÊ!",
      feedbackErro: "Vamos escutar de novo: CAAA-sa. Qual começa com CÊ?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Bate palma no ritmo da palavra:",
      palavra: "BOR-BO-LE-TA",
      silabas: 4,
      imagemUrl: borboleta,
      elogio: "Uau! Borboleta tem QUATRO palmas!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "O coelho e o arco-íris",
      cenas: [
        {
          imagemUrl: coelho,
          narracao: "Era uma vez um coelho branco chamado Nino. Ele adorava pular no jardim.",
        },
        {
          imagemUrl: chuva,
          narracao:
            "Numa manhã, uma chuva fininha caiu. Nino se escondeu debaixo de uma folha grande.",
        },
        {
          imagemUrl: arcoIris,
          narracao:
            "Quando a chuva parou, apareceu um arco-íris com sete cores. Nino ficou boquiaberto!",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O que apareceu no céu depois da chuva?",
      opcoes: [
        { nome: "arco-íris", imagemUrl: arcoIris, correta: true },
        { nome: "borboleta", imagemUrl: borboleta, correta: false },
        { nome: "pássaro", imagemUrl: passaro, correta: false },
      ],
      feedbackAcerto: "Isso! Apareceu um lindo ARCO-ÍRIS de sete cores!",
      feedbackErro: "Escuta de novo: depois da chuva, o Nino viu um ARCO-ÍRIS!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coelho,
      convite:
        "Agora você é o Nino! Pula como coelhinho três vezes bem alto: pula, pula, pula!",
      dica:
        "Contar 1-2-3 junto ajuda a criança a associar número, movimento e ritmo.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: arcoIris,
      pergunta: "Qual é a sua cor favorita do arco-íris? Fala pra gente!",
      exemplos: ["vermelho", "amarelo", "azul", "verde"],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Depois da próxima chuva, vá com um adulto até a janela procurar arco-íris ou pássaros!",
      dicaAdulto:
        "Nomeie em voz alta o que a criança apontar. Repetir palavras ligadas à experiência real fixa vocabulário.",
    },
    {
      tipo: "celebracao",
      medalha: "Amigo da Natureza",
      mascoteUrl: brilha,
      falaFinal:
        "Parabéns! Você ouviu histórias, bateu palma nas sílabas e conheceu a natureza!",
    },
  ],
};

/**
 * Pré I — Unidade 1 · Aula 2
 * "Os bichos falam" — sons dos animais, sílabas, discriminação auditiva.
 * BNCC: EI03EF01 · EI03EF04 · EI03EF06
 */
const aula02: AulaEI = {
  slug: "aula-02-bichos-falam",
  titulo: "Os bichos falam",
  icone: "🐸",
  bncc: ["EI03EF01", "EI03EF04", "EI03EF06"],
  duracaoMin: 12,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Amiguinho! Hoje o Brilha vai apresentar uma turma barulhenta: os BICHOS! Cada um fala do seu jeito.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: galo,
      versos: [
        "De manhã bem cedinho, o galo cantou.",
        "Có-có-ri-có! Có-có-ri-có! O sol acordou!",
        "O gato disse miau, o cachorro au-au.",
        "E o sapo lá no lago faz coax, coax!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada bichinho para ouvir o nome dele.",
      itens: [
        { nome: "sapo", imagemUrl: sapo },
        { nome: "galo", imagemUrl: galo },
        { nome: "abelha", imagemUrl: abelha },
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual dessas palavras começa com o mesmo som de SAPO?",
      referencia: { nome: "sapo", imagemUrl: sapo },
      opcoes: [
        { nome: "sol", imagemUrl: passaro, correta: false },
        { nome: "peixe", imagemUrl: peixe, correta: false },
        { nome: "sapato", imagemUrl: casa, correta: true },
      ],
      feedbackAcerto: "Isso! Sapo e sapato começam com o som ÉSSE!",
      feedbackErro: "Escuta: SAAA-po. Qual outra começa com o som ÉSSE?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Bate palma no ritmo desta palavra:",
      palavra: "CA-CHOR-RO",
      silabas: 3,
      imagemUrl: cachorro,
      elogio: "Boa! Cachorro tem TRÊS palmas!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "O sapo cantor",
      cenas: [
        {
          imagemUrl: sapo,
          narracao: "Era uma vez um sapo verde chamado Coa. Ele adorava cantar no lago à noite.",
        },
        {
          imagemUrl: abelha,
          narracao: "Uma abelha zumbindo passou e disse: 'Coa, seu canto é muito alto, não deixa a gente dormir!'",
        },
        {
          imagemUrl: passaro,
          narracao: "O pássaro sábio ensinou: 'Cada um tem sua hora de cantar!'. E Coa passou a cantar só à noite.",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Quem reclamou do canto alto do sapo?",
      opcoes: [
        { nome: "abelha", imagemUrl: abelha, correta: true },
        { nome: "cachorro", imagemUrl: cachorro, correta: false },
        { nome: "gato", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: "Isso mesmo! A ABELHA reclamou porque queria dormir!",
      feedbackErro: "Escuta de novo: quem passou zumbindo foi a ABELHA!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: sapo,
      convite:
        "Agora você é o sapo Coa! Agacha bem baixinho e pula alto três vezes fazendo COAX, COAX!",
      dica: "Combinar som, movimento e contagem trabalha coordenação e ritmo.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: cachorro,
      pergunta: "Você tem um bichinho em casa ou conhece um? Como ele se chama?",
      exemplos: [
        { nome: "cachorro", imagemUrl: cachorro },
        { nome: "gato", imagemUrl: gato },
        { nome: "peixinho", imagemUrl: peixe },
        { nome: "passarinho", imagemUrl: passaro },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Peça pra um adulto imitar 3 bichos DIFERENTES pra você adivinhar. Depois é a sua vez de imitar!",
      dicaAdulto:
        "Alterne bichos comuns (cachorro, gato) com bichos menos óbvios (leão, abelha, sapo). Reforça vocabulário e discriminação auditiva.",
    },
    {
      tipo: "celebracao",
      medalha: "Fala dos Bichos",
      mascoteUrl: brilha,
      falaFinal:
        "Você imitou o sapo, reconheceu o canto do galo e escutou a abelha! Você entende a fala dos bichos!",
    },
  ],
};

void bola; void arvore;

export const cursoPre1: CursoEI = {
  slug: "portugues-ei-pre1",
  serie: "pre1",
  serieLabel: "Pré I (4–5 anos)",
  titulo: "Códice das Palavras da Natureza",
  descricao:
    "A criança começa a perceber que as palavras têm PEDAÇOS (sílabas) e SONS. Histórias curtas, ritmo e imitação.",
  corPrimaria: "#a78bfa",
  corSecundaria: "#3b0764",
  mascoteUrl: brilha,
  unidades: [
    {
      slug: "unidade-1",
      numero: 1,
      titulo: "O Som das Palavras e o Ritmo do Corpo",
      subtitulo: "Escutar, imitar, imaginar",
      aulas: [aula01, aula02],
    },
  ],
};
