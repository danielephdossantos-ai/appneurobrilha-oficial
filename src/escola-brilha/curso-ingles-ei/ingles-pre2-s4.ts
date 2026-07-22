import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as sorvete } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as suco } from "@/assets/neuro-treino/objetos/suco.png.asset.json";
import { url as sopa } from "@/assets/neuro-treino/objetos/sopa.png.asset.json";
import { url as doce } from "@/assets/neuro-treino/objetos/doce.png.asset.json";
import { url as agua } from "@/assets/neuro-treino/objetos/cristal-agua.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as quadroTriste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as quadroSurpreso } from "@/assets/neuro-treino/objetos/quadro-surpreso.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as presente } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";

/**
 * Inglês EI — Pré II · Semana 4 · "Food, feelings and graduation"
 * Salto: "I like / I love" + comida e sentimentos. Formatura da Educação Infantil!
 */

const aula01: AulaIng = {
  slug: "s4-a01-i-like-fruit",
  titulo: "I like fruit!",
  subtitulo: "Semana 4 · Dia 1",
  icone: "🍎",
  duracaoMin: 9,
  baseCientifica:
    "Estrutura de preferência 'I like + X' (Ellis 2002): expressão pessoal que fixa vocabulário por relevância emocional.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Última semana do Pré II! Vamos falar de COMIDA. E aprender a estrutura mais importante: "I like ..." — Eu gosto de ... Bora?',
      legenda: "Aponte pra si mesmo ao ouvir 'I like'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: maca,
      versos: [
        { en: "I like apples, red and sweet!", pt: "Eu gosto de maçã, vermelha e doce!", gesto: "🍎" },
        { en: "I like bananas, yellow treat!", pt: "Eu gosto de banana, delícia amarela!", gesto: "🍌" },
        { en: "Fruit is yummy, fruit is neat!", pt: "Fruta é gostosa, fruta é legal!", gesto: "😋" },
      ],
      legenda: "Esfregue a barriga a cada 'yummy'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada fruta: "apple", "banana", "orange".',
      itens: [
        { en: "Apple", pt: "Maçã", imagemUrl: maca },
        { en: "Banana", pt: "Banana", imagemUrl: banana },
        { en: "Juice", pt: "Suco", imagemUrl: suco },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete: "I like apple! I like banana! I like juice!".',
      itens: [
        { en: "Apple", pt: "Maçã", imagemUrl: maca },
        { en: "Banana", pt: "Banana", imagemUrl: banana },
        { en: "Juice", pt: "Suco", imagemUrl: suco },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I like banana!" — qual é a banana?',
      palavraAlvoEn: "Banana",
      opcoes: [
        { nome: "banana amarela", imagemUrl: banana, correta: true },
        { nome: "maçã vermelha", imagemUrl: maca, correta: false },
        { nome: "sopa", imagemUrl: sopa, correta: false },
      ],
      feedbackAcerto: '"Banana!" — amarela e docinha.',
      feedbackErro: '"Banana" é a fruta amarela.',
    },
    {
      tipo: "historiaEn",
      titulo: "Snack time",
      cenas: [
        {
          imagemUrl: maca,
          narracao:
            'Mamãe leva uma cestinha. "What do you like, Sofia?". Sofia responde: "I like apple!".',
        },
        {
          imagemUrl: banana,
          narracao:
            'Lucas chega. "I like banana!". Cada um pega a fruta favorita.',
        },
        {
          imagemUrl: suco,
          narracao:
            'Depois tomam suco. "I like juice!". Que lanche gostoso!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Qual bebida a Sofia gosta? "I like ..." — toque na imagem.',
      palavraAlvoEn: "Juice",
      opcoes: [
        { nome: "suco", imagemUrl: suco, correta: true },
        { nome: "maçã", imagemUrl: maca, correta: false },
        { nome: "sopa", imagemUrl: sopa, correta: false },
      ],
      feedbackAcerto: '"Juice!" — bebida gostosa.',
      feedbackErro: '"Juice" é suco — bebida.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: maca,
      convite:
        'Faz de conta que tá comendo sua fruta favorita! Aponta pra boca e diga: "Yummy! I like ..." (banana? apple?). Depois esfrega a barriga!',
      dica: "Faz cara de 'delicious!' no fim.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: menina,
      pergunta:
        'Qual sua fruta favorita? Banana? Apple? Melancia? Fale em inglês: "I like ...". E qual você NÃO gosta?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Fruit party",
      convite:
        'Missão: no lanche hoje, mostre pra família 3 frutas. Diga em inglês: "I like apple! I like banana!". A família fala o que gosta também!',
      dicaAdulto: "Se acrescenta 1 fruta nova (kiwi, mango), amplia vocabulário.",
    },
    {
      tipo: "celebracao",
      medalha: "Fruit Star",
      mascoteUrl: buddy,
      falaFinal:
        'Yummy! Você já fala das suas frutas favoritas em inglês! Delicious job!',
    },
  ],
};

const aula02: AulaIng = {
  slug: "s4-a02-i-like-sweets",
  titulo: "I love sweets!",
  subtitulo: "Semana 4 · Dia 2",
  icone: "🍰",
  duracaoMin: 9,
  baseCientifica:
    "Escalada afetiva 'I like → I love' (Cameron 2001): intensidade emocional amplia o repertório expressivo.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Ontem foi "I like". Hoje ainda mais forte: "I love"! "Love" quer dizer amar. Quando gosta MUITO. E vamos falar de doces!',
      legenda: "Faça coração com as mãos ao ouvir 'love'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: bolo,
      versos: [
        { en: "I love cake, chocolate cake!", pt: "Eu amo bolo, bolo de chocolate!", gesto: "🎂" },
        { en: "I love ice cream, big and cold!", pt: "Amo sorvete, grande e gelado!", gesto: "🍦" },
        { en: "Sweets are yummy, so I am told!", pt: "Doces são gostosos, todo mundo diz!", gesto: "🥰" },
      ],
      legenda: "Bata palma no ritmo.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada doce: "cake", "ice cream", "candy".',
      itens: [
        { en: "Cake", pt: "Bolo", imagemUrl: bolo },
        { en: "Ice cream", pt: "Sorvete", imagemUrl: sorvete },
        { en: "Candy", pt: "Doce", imagemUrl: doce },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete: "I love cake! I love ice cream! I love candy!".',
      itens: [
        { en: "Cake", pt: "Bolo", imagemUrl: bolo },
        { en: "Ice cream", pt: "Sorvete", imagemUrl: sorvete },
        { en: "Candy", pt: "Doce", imagemUrl: doce },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I love ice cream!" — qual é o sorvete?',
      palavraAlvoEn: "Ice cream",
      opcoes: [
        { nome: "sorvete", imagemUrl: sorvete, correta: true },
        { nome: "bolo", imagemUrl: bolo, correta: false },
        { nome: "sopa", imagemUrl: sopa, correta: false },
      ],
      feedbackAcerto: '"Ice cream!" — gelado e docinho.',
      feedbackErro: '"Ice cream" é o sorvete gelado.',
    },
    {
      tipo: "historiaEn",
      titulo: "Birthday party",
      cenas: [
        {
          imagemUrl: bolo,
          narracao:
            'É aniversário! Tem um "cake" enorme. Sofia grita: "I love cake!".',
        },
        {
          imagemUrl: sorvete,
          narracao:
            'Depois tem "ice cream" pra cada amigo. Lucas: "I love ice cream!".',
        },
        {
          imagemUrl: presente,
          narracao:
            'No fim, todo mundo diz: "Thank you for the party! We love you!". Que festa feliz!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'No aniversário todo mundo canta e come "cake". Qual é?',
      palavraAlvoEn: "Cake",
      opcoes: [
        { nome: "bolo", imagemUrl: bolo, correta: true },
        { nome: "banana", imagemUrl: banana, correta: false },
        { nome: "sopa", imagemUrl: sopa, correta: false },
      ],
      feedbackAcerto: '"Cake!" — pra festa!',
      feedbackErro: '"Cake" é bolo — o rei da festa.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coracao,
      convite:
        'Faz de conta que ganha um doce enorme! Faz coração com as mãos e diga: "I LOVE cake! I LOVE ice cream!". Bem alto!',
      dica: "Grite 'yummy!' no final.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: bolo,
      pergunta:
        'Qual doce você MAIS ama? Bolo? Sorvete? Chocolate? Fala em inglês: "I love ...".',
    },
    {
      tipo: "missaoFamilia",
      titulo: "I love you day",
      convite:
        'Missão: hoje diga "I love you" pra 3 pessoas da família. Pode dizer também pro brinquedo, pro cachorro! "I love" tem muito poder!',
      dicaAdulto: "Reforçar 'I love you' fecha o dia com afeto — vira ritual noturno bonito.",
    },
    {
      tipo: "celebracao",
      medalha: "Love Star",
      mascoteUrl: buddy,
      falaFinal:
        'So sweet! Você fala "I love" com o coração todo agora. Amazing!',
    },
  ],
};

const aula03: AulaIng = {
  slug: "s4-a03-happy",
  titulo: "I am happy!",
  subtitulo: "Semana 4 · Dia 3",
  icone: "😊",
  duracaoMin: 9,
  baseCientifica:
    "Nomear emoções em L2 (Immordino-Yang 2007): fortalece regulação emocional pela distância que a segunda língua traz.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Hoje a gente aprende a falar como se SENTE. "I am happy!" quer dizer estou feliz. Faz cara de feliz comigo!',
      legenda: "Sorriso enorme ao ouvir 'happy'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: quadroAlegre,
      versos: [
        { en: "If you are happy, clap your hands!", pt: "Se você está feliz, bata palma!", gesto: "👏" },
        { en: "If you are happy, stomp your feet!", pt: "Se está feliz, bata o pé!", gesto: "👣" },
        { en: "If you are happy, shout hooray!", pt: "Se está feliz, grite hooray!", gesto: "🎉" },
      ],
      legenda: "Cantiga clássica — bata palma nos versos!",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada sentimento: "happy", "sad", "surprised".',
      itens: [
        { en: "Happy", pt: "Feliz", imagemUrl: quadroAlegre },
        { en: "Sad", pt: "Triste", imagemUrl: quadroTriste },
        { en: "Surprised", pt: "Surpreso", imagemUrl: quadroSurpreso },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete: "I am happy! I am sad! I am surprised!".',
      itens: [
        { en: "Happy", pt: "Feliz", imagemUrl: quadroAlegre },
        { en: "Sad", pt: "Triste", imagemUrl: quadroTriste },
        { en: "Surprised", pt: "Surpreso", imagemUrl: quadroSurpreso },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Qual carinha é "happy"? Toque nela.',
      palavraAlvoEn: "Happy",
      opcoes: [
        { nome: "feliz", imagemUrl: quadroAlegre, correta: true },
        { nome: "triste", imagemUrl: quadroTriste, correta: false },
        { nome: "surpreso", imagemUrl: quadroSurpreso, correta: false },
      ],
      feedbackAcerto: '"Happy!" — carinha alegre.',
      feedbackErro: '"Happy" é feliz — com sorriso grande.',
    },
    {
      tipo: "historiaEn",
      titulo: "Feelings day",
      cenas: [
        {
          imagemUrl: sol,
          narracao:
            'De manhã Sofia vê o sol. "I am happy!". Faz um sorriso enorme.',
        },
        {
          imagemUrl: quadroSurpreso,
          narracao:
            'Chega um presente! "Wow! I am surprised!". Ela abre com pressa.',
        },
        {
          imagemUrl: abraco,
          narracao:
            'É um ursinho! Sofia abraça: "Oh, I love it! I am so happy!". Coração cheinho.',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Sofia ganha um presente inesperado. Como ela se sente?',
      palavraAlvoEn: "Surprised",
      opcoes: [
        { nome: "surpreso", imagemUrl: quadroSurpreso, correta: true },
        { nome: "triste", imagemUrl: quadroTriste, correta: false },
        { nome: "sopa", imagemUrl: sopa, correta: false },
      ],
      feedbackAcerto: '"Surprised!" — cara de espanto bom!',
      feedbackErro: 'Quando aparece uma surpresa boa, a gente fica "surprised".',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: quadroAlegre,
      convite:
        'Faz 3 caras diferentes! Primeiro: "I am happy!" — sorrisão. Depois: "I am sad!" — biquinho. Depois: "I am surprised!" — boca de O!',
      dica: "Faz no espelho se tiver por perto.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: coracao,
      pergunta:
        'Como você se sente agora? "I am happy?", "I am sad?", "I am surprised?" Pode falar em inglês sem medo!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "How do you feel?",
      convite:
        'Missão: pergunte "How do you feel?" pra 3 pessoas da família. Cada uma responde em inglês: "I am happy!" ou outro sentimento.',
      dicaAdulto: "Cria momento de escuta afetiva — combina com ritual da noite.",
    },
    {
      tipo: "celebracao",
      medalha: "Happy Star",
      mascoteUrl: buddy,
      falaFinal:
        'Wonderful! Você fala dos seus sentimentos em inglês agora! Feelings + English = superpower!',
    },
  ],
};

const aula04: AulaIng = {
  slug: "s4-a04-i-love-you",
  titulo: "I love you!",
  subtitulo: "Semana 4 · Dia 4",
  icone: "❤️",
  duracaoMin: 9,
  baseCientifica:
    "Frase-âncora afetiva (Cameron 2001): 'I love you' fixa em memória permanente por vínculo emocional máximo.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, my dear friend! Hoje a frase MAIS BONITA do inglês: "I love you!". Quer dizer "eu te amo". A gente diz pra família, pros amigos, pro cachorrinho...',
      legenda: "Faça coração com as mãos.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: coracao,
      versos: [
        { en: "I love mommy, I love daddy!", pt: "Eu amo a mamãe, amo o papai!", gesto: "🤗" },
        { en: "I love you, I love you!", pt: "Eu te amo, eu te amo!", gesto: "❤️" },
        { en: "Love, love, love in every way!", pt: "Amor, amor, amor de todo jeito!", gesto: "🥰" },
      ],
      legenda: "Coração com a mão a cada 'love'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura de amor: "hug", "heart", "family".',
      itens: [
        { en: "Hug", pt: "Abraço", imagemUrl: abraco },
        { en: "Heart", pt: "Coração", imagemUrl: coracao },
        { en: "I love you!", pt: "Eu te amo!", imagemUrl: quadroAlegre },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete: "I love you! Big hug! My heart!".',
      itens: [
        { en: "Hug", pt: "Abraço", imagemUrl: abraco },
        { en: "Heart", pt: "Coração", imagemUrl: coracao },
        { en: "I love you!", pt: "Eu te amo!", imagemUrl: coracao },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'O que a gente dá quando ama muito? Toque na figura.',
      palavraAlvoEn: "Hug",
      opcoes: [
        { nome: "abraço", imagemUrl: abraco, correta: true },
        { nome: "sopa", imagemUrl: sopa, correta: false },
        { nome: "bolo", imagemUrl: bolo, correta: false },
      ],
      feedbackAcerto: '"Hug!" — abraço apertado!',
      feedbackErro: '"Hug" é abraço — o gesto do amor.',
    },
    {
      tipo: "historiaEn",
      titulo: "Family love",
      cenas: [
        {
          imagemUrl: abraco,
          narracao:
            'Sofia abraça a mamãe: "I love you, mommy!". Mamãe sorri e responde: "I love you too, my sweet!".',
        },
        {
          imagemUrl: coracao,
          narracao:
            'Depois pro papai: "I love you, daddy!". Papai levanta ela nos braços.',
        },
        {
          imagemUrl: quadroAlegre,
          narracao:
            'Toda a família junto: "We love our Sofia!". O coração fica quentinho.',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"I love you!" — qual figura combina?',
      palavraAlvoEn: "I love you",
      opcoes: [
        { nome: "coração", imagemUrl: coracao, correta: true },
        { nome: "sabonete", imagemUrl: sopa, correta: false },
        { nome: "banana", imagemUrl: banana, correta: false },
      ],
      feedbackAcerto: '"I love you!" — o coração fica cheinho.',
      feedbackErro: '"Love" combina com coração — o símbolo do amor.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: abraco,
      convite:
        'Dá um abração em alguém (ou num travesseiro!) e diga: "I love you!". Depois faz coração com os dedos!',
      dica: "Bem apertado, bem sincero!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: coracao,
      pergunta:
        'Pra quem você diria "I love you" hoje? Mamãe? Papai? Cachorro? Ursinho? Todos merecem!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "I love you round",
      convite:
        'Missão: diga "I love you" pra CADA pessoa da família hoje. Recebe um abraço em troca. Some quantos abraços conseguiu!',
      dicaAdulto: "Adulto responde 'I love you too, my love!' — reforça vínculo bilíngue.",
    },
    {
      tipo: "celebracao",
      medalha: "Love Heart Star",
      mascoteUrl: buddy,
      falaFinal:
        'So beautiful! Você sabe dizer a frase mais linda do mundo em inglês. "I love you!" — coração cheio!',
    },
  ],
};

const aula05: AulaIng = {
  slug: "s4-a05-graduation",
  titulo: "Graduation — Little English Explorer!",
  subtitulo: "Semana 4 · Dia 5 · Formatura da Educação Infantil",
  icone: "🎓",
  duracaoMin: 12,
  baseCientifica:
    "Encerramento com narrativa de conquista (Bruner 1990): rememorar o caminho todo consolida a identidade de 'falante de inglês'.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, my little English explorer! HOJE É DIA DE FORMATURA! Você fez o Maternal, Pré I e agora fecha o Pré II. Uma jornada linda! Vamos lembrar tudo?',
      legenda: "Fica em pé e alonga — dia especial!",
    },
    {
      tipo: "musicaEn",
      imagemUrl: arcoIris,
      versos: [
        { en: "Hello, hi, and how are you?", pt: "Olá, oi, como vai?", gesto: "👋" },
        { en: "Red and blue and yellow too!", pt: "Vermelho, azul e amarelo!", gesto: "🌈" },
        { en: "I can speak, I love English too!", pt: "Eu sei falar, eu amo inglês!", gesto: "🎓" },
      ],
      legenda: "Música-hino da formatura! Cante 2 vezes bem alto!",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Revisa: greetings, colors, weather, feelings.',
      itens: [
        { en: "Hello!", pt: "Olá!", imagemUrl: menina },
        { en: "How are you?", pt: "Como vai?", imagemUrl: buddy },
        { en: "I am happy!", pt: "Estou feliz!", imagemUrl: quadroAlegre },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Mais 3 do coração: "I like", "I love", "Thank you".',
      itens: [
        { en: "I like fruit", pt: "Gosto de fruta", imagemUrl: maca },
        { en: "I love you", pt: "Eu te amo", imagemUrl: coracao },
        { en: "Thank you", pt: "Obrigado", imagemUrl: presente },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Qual é a frase MAIS BONITA que você aprendeu?',
      palavraAlvoEn: "I love you",
      opcoes: [
        { nome: "coração", imagemUrl: coracao, correta: true },
        { nome: "sopa", imagemUrl: sopa, correta: false },
        { nome: "camiseta", imagemUrl: sorvete, correta: false },
      ],
      feedbackAcerto: '"I love you!" — a mais bonita de todas.',
      feedbackErro: 'A frase de OURO é "I love you!" — coração cheio.',
    },
    {
      tipo: "historiaEn",
      titulo: "Sofia's English journey",
      cenas: [
        {
          imagemUrl: sol,
          narracao:
            'Sofia começou dizendo "Hello!". Uma palavrinha só. Um passinho.',
        },
        {
          imagemUrl: arcoIris,
          narracao:
            'Depois cores, números, saudações, tempo, rotina, comida, sentimentos! Cada dia um pouquinho.',
        },
        {
          imagemUrl: quadroAlegre,
          narracao:
            'Hoje Sofia fala de tudo em inglês. E você TAMBÉM! Você é uma "Little English Explorer"! Congratulations!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'A carinha de quem acabou o Pré II. Feliz? Triste?',
      palavraAlvoEn: "Happy",
      opcoes: [
        { nome: "muito feliz", imagemUrl: quadroAlegre, correta: true },
        { nome: "triste", imagemUrl: quadroTriste, correta: false },
        { nome: "sopa", imagemUrl: sopa, correta: false },
      ],
      feedbackAcerto: '"So happy!" — orgulho!',
      feedbackErro: 'Formatura é dia MUITO happy!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: buddy,
      convite:
        'Faz o seu discurso de formatura! Levanta e diga: "Hello! I am ... (seu nome). I am happy. I love English. Thank you!". Bem alto!',
      dica: "Faz reverência no final!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: coracao,
      pergunta:
        'O que você MAIS gostou da trilha de inglês? A música? As histórias? O Teacher Buddy? Fala em inglês: "I love ...".',
    },
    {
      tipo: "missaoFamilia",
      titulo: "The great English show",
      convite:
        'Missão FINAL: monta um show pra família com TUDO que aprendeu. Cumprimente, se apresente, cante uma música, mostre uma cor, diga "I love you!". Ganha aplauso e foto no álbum!',
      dicaAdulto: "Grave em vídeo — memória inesquecível! Cola no álbum como diploma vivo.",
    },
    {
      tipo: "celebracao",
      medalha: "Little English Explorer — Diploma Pré II",
      mascoteUrl: buddy,
      falaFinal:
        'CONGRATULATIONS, my Little English Explorer! Você fechou toda a Educação Infantil em inglês! Maternal, Pré I e Pré II! Estou muito orgulhoso! Hip hip hooray! Bye-bye for now, see you at the next level!',
    },
  ],
};

export const semana4Pre2: AulaIng[] = [aula01, aula02, aula03, aula04, aula05];
