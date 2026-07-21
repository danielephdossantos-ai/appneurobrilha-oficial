import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as pai } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as bebe } from "@/assets/neuro-treino/objetos/bebe.png.asset.json";
import { url as avoMulher } from "@/assets/neuro-treino/objetos/avo-mulher.png.asset.json";
import { url as avoHomem } from "@/assets/neuro-treino/objetos/avo-homem.png.asset.json";
import { url as familiaGrande } from "@/assets/neuro-treino/objetos/familia-grande.png.asset.json";
import { url as familiaAvos } from "@/assets/neuro-treino/objetos/familia-avos-neta.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as quadroTriste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as quadroSurpreso } from "@/assets/neuro-treino/objetos/quadro-surpreso.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";

/**
 * Inglês EI — Pré I · Semana 4 · "My family & feelings" + formatura Pré I.
 * Fecha o Pré I com vocabulário socioafetivo — mommy, daddy, happy, sad — e a medalha Little English Star.
 */

const aula01: AulaIng = {
  slug: "s4-a01-mommy-daddy",
  titulo: "Mommy and Daddy",
  subtitulo: "Semana 4 · Dia 1",
  icone: "👨‍👩‍👧",
  duracaoMin: 9,
  baseCientifica:
    "Ancoragem afetiva (Bowlby): palavras ligadas ao vínculo primário são adquiridas com prioridade e retidas por muito tempo.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje aprendemos as pessoas mais importantes: "mommy" e "daddy"! "Mommy" quer dizer MAMÃE. "Daddy" quer dizer PAPAI!',
      legenda: "Aponte pra mamãe/papai ao ouvir cada palavra.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: familiaGrande,
      versos: [
        { en: "Mommy, mommy, I love you!", pt: "Mamãe, mamãe, eu te amo!", gesto: "💗" },
        { en: "Daddy, daddy, I love you too!", pt: "Papai, papai, te amo também!", gesto: "💙" },
        { en: "Family, family, all together!", pt: "Família, família, todos juntos!", gesto: "👨‍👩‍👧" },
      ],
      legenda: "Mande beijo no ar em cada verso.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "mommy", "daddy", "family".',
      itens: [
        { en: "Mommy", pt: "Mamãe", imagemUrl: mae },
        { en: "Daddy", pt: "Papai", imagemUrl: pai },
        { en: "Family", pt: "Família", imagemUrl: familiaGrande },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais: "mommy!", "daddy!", "family!"',
      itens: [
        { en: "I love mommy", pt: "Eu amo mamãe", imagemUrl: mae },
        { en: "I love daddy", pt: "Eu amo papai", imagemUrl: pai },
        { en: "I love my family", pt: "Eu amo minha família", imagemUrl: familiaGrande },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque em "mommy". Onde está a mamãe?',
      palavraAlvoEn: "Mommy",
      opcoes: [
        { nome: "mãe", imagemUrl: mae, correta: true },
        { nome: "pai", imagemUrl: pai, correta: false },
        { nome: "bebê", imagemUrl: bebe, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Mommy" — mamãe!',
      feedbackErro: '"Mommy" é mamãe. Ache a mamãe!',
    },
    {
      tipo: "historiaEn",
      titulo: "Mommy, daddy, hug!",
      cenas: [
        {
          imagemUrl: mae,
          narracao:
            'De manhã, Sofia corre pra mamãe: "Good morning, mommy!". Grande beijo.',
        },
        {
          imagemUrl: pai,
          narracao:
            'Depois pro papai: "Good morning, daddy!". Ele levanta ela no ar.',
        },
        {
          imagemUrl: familiaGrande,
          narracao:
            'Café da manhã. Todos juntos: "My family!". Sofia sorri feliz.',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "daddy!". Onde está o papai?',
      palavraAlvoEn: "Daddy",
      opcoes: [
        { nome: "pai", imagemUrl: pai, correta: true },
        { nome: "mãe", imagemUrl: mae, correta: false },
        { nome: "família", imagemUrl: familiaGrande, correta: false },
      ],
      feedbackAcerto: 'Isso! "Daddy" — papai!',
      feedbackErro: '"Daddy" é papai. Aponta pro papai!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: abraco,
      convite:
        'Vai até a mamãe e diga: "I love you, mommy!" com um abraço. Depois no papai (ou responsável): "I love you, daddy!".',
      dica: "Abraço apertado + palavra na hora certa.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: familiaGrande,
      pergunta:
        'Quem mora com você? Fala em inglês: "mommy", "daddy", brother, sister?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Say I love you",
      convite:
        'Missão: diga "I love you, mommy!" e "I love you, daddy!" pelo menos 3 vezes hoje. Peça um abraço em troca!',
      dicaAdulto: "Tira uma foto do abraço e cola no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Family Star",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Você é uma "Family Star"! Sabe "mommy", "daddy" e "family"!',
    },
  ],
};

const aula02: AulaIng = {
  slug: "s4-a02-baby-grandma-grandpa",
  titulo: "Baby, grandma, grandpa",
  subtitulo: "Semana 4 · Dia 2",
  icone: "👵",
  duracaoMin: 9,
  baseCientifica:
    "Expansão de rede semântica (Nation 2001): agrupar familiares (baby, grandma, grandpa) fixa vocabulário por associação.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje mais familiares: "baby" (bebê), "grandma" (vovó) e "grandpa" (vovô)! Big family!',
      legenda: "Faça carinho no ar ao ouvir cada palavra.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: familiaAvos,
      versos: [
        { en: "Baby, baby, so tiny!", pt: "Bebê, bebê, tão pequeno!", gesto: "👶" },
        { en: "Grandma, grandpa, I love you!", pt: "Vovó, vovô, eu amo vocês!", gesto: "👵👴" },
        { en: "Family big and small!", pt: "Família grande e pequena!", gesto: "🤗" },
      ],
      legenda: "Balance como se ninasse um bebê.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "baby", "grandma", "grandpa".',
      itens: [
        { en: "Baby", pt: "Bebê", imagemUrl: bebe },
        { en: "Grandma", pt: "Vovó", imagemUrl: avoMulher },
        { en: "Grandpa", pt: "Vovô", imagemUrl: avoHomem },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais! "Baby!", "Grandma!", "Grandpa!"',
      itens: [
        { en: "Little baby", pt: "Bebezinho", imagemUrl: bebe },
        { en: "Grandma love", pt: "Amor de vovó", imagemUrl: avoMulher },
        { en: "Grandpa hug", pt: "Abraço de vovô", imagemUrl: avoHomem },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque em "baby". Onde está o bebê?',
      palavraAlvoEn: "Baby",
      opcoes: [
        { nome: "bebê", imagemUrl: bebe, correta: true },
        { nome: "vovó", imagemUrl: avoMulher, correta: false },
        { nome: "vovô", imagemUrl: avoHomem, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Baby" — bebê!',
      feedbackErro: '"Baby" é bebê. Bem pequenininho!',
    },
    {
      tipo: "historiaEn",
      titulo: "At grandma's house",
      cenas: [
        {
          imagemUrl: avoMulher,
          narracao:
            'Sofia vai na casa da vovó. "Hi, grandma!". A vovó dá um beijo.',
        },
        {
          imagemUrl: avoHomem,
          narracao:
            'O vovô está no quintal. "Hi, grandpa!". Ele mostra um bichinho.',
        },
        {
          imagemUrl: bebe,
          narracao:
            'Chega o priminho. É um "baby" pequenininho. Sofia sussurra: "Hi, baby!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "grandma!". Onde está a vovó?',
      palavraAlvoEn: "Grandma",
      opcoes: [
        { nome: "vovó", imagemUrl: avoMulher, correta: true },
        { nome: "vovô", imagemUrl: avoHomem, correta: false },
        { nome: "bebê", imagemUrl: bebe, correta: false },
      ],
      feedbackAcerto: 'Isso! "Grandma" — vovó!',
      feedbackErro: '"Grandma" é vovó. A mamãe da mamãe!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: familiaAvos,
      convite:
        'Faz de conta que você embala um "baby": balança os braços e canta baixinho: "Little baby, sleep sleep sleep...".',
      dica: "Voz bem docinha.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: familiaAvos,
      pergunta:
        'Você tem "grandma" e "grandpa"? Como eles se chamam? Você quer dar um "hug" hoje?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Call grandma!",
      convite:
        'Missão: liga (ou manda um vídeo) pra "grandma" ou "grandpa" e diz: "Hi, grandma! I love you!" em inglês!',
      dicaAdulto: "Grava um pedacinho e cola no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Big Family Star",
      mascoteUrl: buddy,
      falaFinal:
        'Wonderful! Sua família cresceu em inglês: "baby, grandma, grandpa"! You are a "Big Family Star"!',
    },
  ],
};

const aula03: AulaIng = {
  slug: "s4-a03-happy-sad",
  titulo: "Happy or sad?",
  subtitulo: "Semana 4 · Dia 3",
  icone: "😊",
  duracaoMin: 9,
  baseCientifica:
    "Emoções básicas universais (Ekman): 'happy' e 'sad' são reconhecidas facialmente antes dos 3 anos — perfeitas pra fixar bilinguemente.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje falamos de sentimentos. "Happy" quer dizer FELIZ. "Sad" quer dizer TRISTE. Que carinha você faz agora?',
      legenda: "Faça carinha feliz e depois triste.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: quadroAlegre,
      versos: [
        { en: "If you\'re happy, clap your hands!", pt: "Se está feliz, bate palma!", gesto: "😊" },
        { en: "If you\'re sad, hug your friend!", pt: "Se está triste, abraça o amigo!", gesto: "🤗" },
        { en: "Happy, sad, feelings okay!", pt: "Feliz, triste, sentimentos ok!", gesto: "💛" },
      ],
      legenda: "Faça carinha diferente em cada verso.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura e faz a cara: "happy", "sad", "surprised".',
      itens: [
        { en: "Happy", pt: "Feliz", imagemUrl: quadroAlegre },
        { en: "Sad", pt: "Triste", imagemUrl: quadroTriste },
        { en: "Surprised", pt: "Surpreso", imagemUrl: quadroSurpreso },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete: "I am happy!", "I am sad!", "I am surprised!"',
      itens: [
        { en: "I am happy", pt: "Estou feliz", imagemUrl: quadroAlegre },
        { en: "I am sad", pt: "Estou triste", imagemUrl: quadroTriste },
        { en: "I am surprised", pt: "Estou surpreso", imagemUrl: quadroSurpreso },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque em "happy". Qual carinha é feliz?',
      palavraAlvoEn: "Happy",
      opcoes: [
        { nome: "feliz", imagemUrl: quadroAlegre, correta: true },
        { nome: "triste", imagemUrl: quadroTriste, correta: false },
        { nome: "surpreso", imagemUrl: quadroSurpreso, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Happy" — feliz!',
      feedbackErro: '"Happy" é sorriso grande!',
    },
    {
      tipo: "historiaEn",
      titulo: "Happy, sad, happy again",
      cenas: [
        {
          imagemUrl: quadroAlegre,
          narracao:
            'Sofia ganha um balão. "I am happy!" ela grita, sorrindo.',
        },
        {
          imagemUrl: quadroTriste,
          narracao:
            'O balão voa embora. "Oh no... I am sad." Ela chora um pouquinho.',
        },
        {
          imagemUrl: abraco,
          narracao:
            'Mamãe dá um "big hug!". Sofia volta a sorrir: "I am happy again!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "sad!". Onde a carinha está triste?',
      palavraAlvoEn: "Sad",
      opcoes: [
        { nome: "triste", imagemUrl: quadroTriste, correta: true },
        { nome: "feliz", imagemUrl: quadroAlegre, correta: false },
        { nome: "surpreso", imagemUrl: quadroSurpreso, correta: false },
      ],
      feedbackAcerto: 'Isso! "Sad" — triste.',
      feedbackErro: '"Sad" é boquinha pra baixo.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coracao,
      convite:
        'Faz 3 carinhas: "happy" (sorriso!), "sad" (boquinha pra baixo), "surprised" (olhão!). Depois diga: "I am happy today!".',
      dica: "Use um espelho se tiver por perto.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: quadroAlegre,
      pergunta:
        'Como você está agora? "Happy"? "Sad"? "Surprised"? Fala pra família em inglês!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Feelings check-in",
      convite:
        'Missão: pergunta pra cada pessoa da família: "Are you happy or sad?". Escuta a resposta e dá "big hug!".',
      dicaAdulto: "Foto do momento e cola no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Feelings Star",
      mascoteUrl: buddy,
      falaFinal:
        'Wonderful! Você é uma "Feelings Star"! Sabe dizer "happy", "sad" e "surprised" em inglês!',
    },
  ],
};

const aula04: AulaIng = {
  slug: "s4-a04-i-love-you",
  titulo: "I love you!",
  subtitulo: "Semana 4 · Dia 4",
  icone: "💗",
  duracaoMin: 9,
  baseCientifica:
    "Frase-modelo afetiva (Ellis 2003): 'I love you' é 3 palavras juntas — a criança adquire como bloco (formulaic sequence) e usa em contexto real.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje a frase mais linda: "I love you!". "I love you" quer dizer EU TE AMO! Fala com o coração!',
      legenda: "Coloque as mãos no coração ao ouvir a frase.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: coracao,
      versos: [
        { en: "I love you, mommy!", pt: "Eu te amo, mamãe!", gesto: "💗" },
        { en: "I love you, daddy!", pt: "Eu te amo, papai!", gesto: "💙" },
        { en: "I love you, family!", pt: "Eu amo a família!", gesto: "🥰" },
      ],
      legenda: "Mande beijo em cada verso.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca e repete: "I love you!" em cada figura.',
      itens: [
        { en: "I love you, mommy", pt: "Amo você, mamãe", imagemUrl: mae },
        { en: "I love you, daddy", pt: "Amo você, papai", imagemUrl: pai },
        { en: "I love you, grandma", pt: "Amo você, vovó", imagemUrl: avoMulher },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Continua: "I love you, grandpa!", "I love you, baby!"',
      itens: [
        { en: "I love you, grandpa", pt: "Amo você, vovô", imagemUrl: avoHomem },
        { en: "I love you, baby", pt: "Amo você, bebê", imagemUrl: bebe },
        { en: "I love my family", pt: "Amo minha família", imagemUrl: familiaGrande },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "I love you, mommy!". Onde está a mamãe?',
      palavraAlvoEn: "Mommy",
      opcoes: [
        { nome: "mãe", imagemUrl: mae, correta: true },
        { nome: "vovó", imagemUrl: avoMulher, correta: false },
        { nome: "bebê", imagemUrl: bebe, correta: false },
      ],
      feedbackAcerto: 'Perfect! Fala pra mamãe agora: "I love you, mommy!"',
      feedbackErro: '"Mommy" é a mamãe.',
    },
    {
      tipo: "historiaEn",
      titulo: "Hearts everywhere",
      cenas: [
        {
          imagemUrl: coracao,
          narracao:
            'Sofia desenha um coração vermelho — um "red heart" pra mamãe. "I love you, mommy!".',
        },
        {
          imagemUrl: coracao,
          narracao:
            'Outro coração pro papai. "I love you, daddy!".',
        },
        {
          imagemUrl: familiaGrande,
          narracao:
            'No final, um coração ENORME pra família toda. "I love my family!". Todos sorriem.',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "I love you, grandpa!". Onde está o vovô?',
      palavraAlvoEn: "Grandpa",
      opcoes: [
        { nome: "vovô", imagemUrl: avoHomem, correta: true },
        { nome: "papai", imagemUrl: pai, correta: false },
        { nome: "bebê", imagemUrl: bebe, correta: false },
      ],
      feedbackAcerto: 'Isso! "I love you, grandpa!" é pro vovô.',
      feedbackErro: '"Grandpa" é vovô. O papai do papai!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coracao,
      convite:
        'Faz um coração com as duas mãos e vai dizendo alto pra cada pessoa da família: "I love you, mommy!", "I love you, daddy!", "I love you, grandma!".',
      dica: "Coração com os dedos, sorriso grande.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: familiaGrande,
      pergunta:
        'Quem você mais ama? Fala em inglês: "I love you, ___!". Pode incluir cachorrinho, boneca, tudo!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Say I love you 5 times",
      convite:
        'Missão: fala "I love you!" pra 5 pessoas diferentes hoje. Cada um vai ficar feliz demais!',
      dicaAdulto: "Vale videochamada com quem está longe. Cola foto/print no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Love Star",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Você sabe dizer a frase mais linda em inglês: "I love you!". You are a "Love Star"!',
    },
  ],
};

const aula05: AulaIng = {
  slug: "s4-a05-my-english-party",
  titulo: "My English party!",
  subtitulo: "Semana 4 · Dia 5 · Formatura Pré I",
  icone: "🎓",
  duracaoMin: 12,
  baseCientifica:
    "Revisão cumulativa festiva (Rohrer 2012): mistura de vocabulário de todas as semanas num contexto emocional (festa) força recuperação ativa e consolida memória de longo prazo.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, superstar! HOJE É FORMATURA DO PRÉ I! Você aprendeu cores, números, movimentos, família e sentimentos! Vamos fazer uma "English party" pra celebrar!',
      legenda: "Comece a festa com muita animação.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: bolo,
      versos: [
        { en: "Red, yellow, blue and green!", pt: "Vermelho, amarelo, azul e verde!", gesto: "🌈" },
        { en: "One, two, three, four, FIVE!", pt: "Um, dois, três, quatro, CINCO!", gesto: "🖐️" },
        { en: "I love mommy, I am happy!", pt: "Amo mamãe, estou feliz!", gesto: "💗" },
      ],
      legenda: "Canta e dança misturando tudo.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Grande revisão! Toca e fala: cores, números!',
      itens: [
        { en: "Red heart", pt: "Coração vermelho", imagemUrl: coracao },
        { en: "Five balloons", pt: "Cinco balões", imagemUrl: balao },
        { en: "Happy family", pt: "Família feliz", imagemUrl: familiaGrande },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Continua: família e sentimento!',
      itens: [
        { en: "Mommy", pt: "Mamãe", imagemUrl: mae },
        { en: "Daddy", pt: "Papai", imagemUrl: pai },
        { en: "I am happy", pt: "Estou feliz", imagemUrl: quadroAlegre },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "happy family!". Onde está a família feliz?',
      palavraAlvoEn: "Happy family",
      opcoes: [
        { nome: "família grande", imagemUrl: familiaGrande, correta: true },
        { nome: "carinha triste", imagemUrl: quadroTriste, correta: false },
        { nome: "balão", imagemUrl: balao, correta: false },
      ],
      feedbackAcerto: 'Yes! "Happy family" — família feliz!',
      feedbackErro: 'Escuta de novo: family + happy.',
    },
    {
      tipo: "historiaEn",
      titulo: "Sofia's English graduation",
      cenas: [
        {
          imagemUrl: bolo,
          narracao:
            'Sofia faz uma festa. Tem "cake", "balloons" e "family" toda reunida.',
        },
        {
          imagemUrl: balao,
          narracao:
            'Ela conta os balões: "one, two, three, four, five!". Mommy sorri.',
        },
        {
          imagemUrl: familiaGrande,
          narracao:
            'Todos gritam juntos: "Sofia is a Little English Star!". Big hug em família!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Última pergunta: qual é a "mommy"?',
      palavraAlvoEn: "Mommy",
      opcoes: [
        { nome: "mãe", imagemUrl: mae, correta: true },
        { nome: "vovô", imagemUrl: avoHomem, correta: false },
        { nome: "bebê", imagemUrl: bebe, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Mommy" — mamãe!',
      feedbackErro: '"Mommy" é mamãe. Fala pra ela: "I love you!".',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: bolo,
      convite:
        'Discurso de formatura! Levanta a mão e diga: "I am happy! I love my family! I know red, yellow, blue, green! I can count to five!". Depois: high five!',
      dica: "Voz de estrela, sorriso enorme.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: familiaGrande,
      pergunta:
        'O que você mais gostou do Pré I? Cor favorita? Movimento favorito? Fala tudo em inglês pra família!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "English party in family!",
      convite:
        'Missão de formatura: faz uma festinha rápida em casa. Bolo (ou fruta), balão (ou desenho), família junto. Todos batem "high five!" e você mostra tudo o que aprendeu em inglês!',
      dicaAdulto:
        "Grave 1 minuto da festinha e cole no álbum. Formatura oficial do Pré I!",
    },
    {
      tipo: "celebracao",
      medalha: "Little English Star — Pré I completo!",
      mascoteUrl: buddy,
      falaFinal:
        'Congratulations! Você TERMINOU o Pré I! Cores, números, movimentos, família, sentimentos — tudo em inglês! Você é uma "Little English Star"! I am so proud of you!',
    },
  ],
};

export const semana4Pre1: AulaIng[] = [aula01, aula02, aula03, aula04, aula05];
