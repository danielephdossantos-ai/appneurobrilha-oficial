import type { CursoIng, AulaIng, NivelIng } from "./types";
import { nivel1Pre1 } from "./ingles-pre1-n1";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as rosa } from "@/assets/neuro-treino/objetos/rosa.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as agua } from "@/assets/neuro-treino/objetos/cristal-agua.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as jardim } from "@/assets/neuro-treino/objetos/jardim.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";

/**
 * Inglês EI — Pré I (4–5 anos) · Semana 1 · "Colors around me"
 *
 * Salto pedagógico em relação ao Maternal:
 *  - Palavras-alvo agora são ATRIBUTOS (cores), não só objetos.
 *  - Frases-modelo curtas: "It is red.", "I see yellow.", "Blue like the sky.".
 *  - Ainda 100% oral. Cada palavra-alvo aparece 6× por aula.
 *  - Esqueleto fixo de 11 momentos (não muda).
 */

// ============================================================
// AULA 01 — Red like an apple
// ============================================================
const aula01: AulaIng = {
  slug: "s1-a01-red",
  titulo: "Red like an apple",
  subtitulo: "Semana 1 · Dia 1",
  icone: "🍎",
  duracaoMin: 9,
  baseCientifica:
    "Aquisição de atributos por ancoragem em objetos prototípicos (Rosch 1978). A cor 'red' é fixada por 3 exemplares vermelhos conhecidos: maçã, coração, rosa.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Sou o Teacher Buddy. Hoje vamos aprender uma cor superimportante: "red". "Red" quer dizer VERMELHO. Olha uma coisinha "red": esta maçã!',
      legenda: "Aponte para algo vermelho no ambiente ao ouvir 'red'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: maca,
      versos: [
        { en: "Red, red, red like an apple!", pt: "Vermelho, como uma maçã!", gesto: "🍎" },
        { en: "Red, red, red like my heart!", pt: "Vermelho, como meu coração!", gesto: "❤️" },
        { en: "I love red!", pt: "Eu amo vermelho!", gesto: "🥰" },
      ],
      legenda: "Bata palma no ritmo. Ouça 2 vezes.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio:
        'Toca em cada figura para ouvir. Todas são "red". Escuta: "red apple", "red heart", "red rose".',
      itens: [
        { en: "Red apple", pt: "Maçã vermelha", imagemUrl: maca },
        { en: "Red heart", pt: "Coração vermelho", imagemUrl: coracao },
        { en: "Red rose", pt: "Rosa vermelha", imagemUrl: rosa },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais, bem firme: "red", "red", "red".',
      itens: [
        { en: "Red apple", pt: "Maçã vermelha", imagemUrl: maca },
        { en: "Red heart", pt: "Coração vermelho", imagemUrl: coracao },
        { en: "Red rose", pt: "Rosa vermelha", imagemUrl: rosa },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta bem: qual figura NÃO é "red"? Toque na que é diferente.',
      palavraAlvoEn: "Red",
      opcoes: [
        { nome: "banana amarela", imagemUrl: banana, correta: true },
        { nome: "maçã vermelha", imagemUrl: maca, correta: false },
        { nome: "coração vermelho", imagemUrl: coracao, correta: false },
      ],
      feedbackAcerto: 'Isso! A banana é amarela, não é "red".',
      feedbackErro: 'Olha as cores: "red" é vermelho. A banana não é vermelha.',
    },
    {
      tipo: "historiaEn",
      titulo: "The red basket",
      cenas: [
        {
          imagemUrl: maca,
          narracao:
            'Sofia vai ao mercado. Ela pega uma "red apple" bem brilhante. E diz: "It is red!".',
        },
        {
          imagemUrl: rosa,
          narracao:
            'No caminho, Sofia vê uma flor no jardim. É uma "red rose". Ela sorri: "So pretty! Red!".',
        },
        {
          imagemUrl: coracao,
          narracao:
            'Em casa, Sofia dá a maçã pra mamãe e desenha um "red heart" pra ela. Mamãe fica feliz. "I love red!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque na "red rose". Onde está a rosa vermelha?',
      palavraAlvoEn: "Red rose",
      opcoes: [
        { nome: "rosa vermelha", imagemUrl: rosa, correta: true },
        { nome: "girassol amarelo", imagemUrl: girassol, correta: false },
        { nome: "árvore verde", imagemUrl: arvore, correta: false },
      ],
      feedbackAcerto: 'Perfeito! "Red rose" — a rosa é vermelha.',
      feedbackErro: 'Escuta: "red rose". Procura a flor vermelha.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: maca,
      convite:
        'Agora é a sua vez! Ache 3 coisinhas "red" perto de você. Aponte pra cada uma e diga bem alto: "It is red!". Vale roupa, brinquedo, comida.',
      dica: "Se não achar, pinte o dedo no ar imaginando vermelho.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: coracao,
      pergunta:
        'Qual é a sua fruta vermelha favorita? E de que cor é o seu coração quando você tá feliz? Aposto que é "red"!',
      exemplos: [
        'Maçã → "red apple".',
        'Melancia → "red watermelon".',
        'Morango → "red strawberry".',
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Red hunt at home",
      convite:
        'Missão: uma caça-ao-tesouro em casa. Ache 5 coisinhas "red" com a família. Para cada uma, aponte e diga: "It is red!".',
      dicaAdulto:
        "Adulto pode fotografar cada objeto e colar no álbum de recordações da criança.",
    },
    {
      tipo: "celebracao",
      medalha: "Red Star",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Você aprendeu sua primeira cor em inglês: "red". Você é uma "Red Star"! Congratulations!',
    },
  ],
};

// ============================================================
// AULA 02 — Yellow like the sun
// ============================================================
const aula02: AulaIng = {
  slug: "s1-a02-yellow",
  titulo: "Yellow like the sun",
  subtitulo: "Semana 1 · Dia 2",
  icone: "☀️",
  duracaoMin: 9,
  baseCientifica:
    "Contraste entre atributos (Nation 2001): apresentar 'yellow' logo após 'red' consolida o conceito de cor como categoria semântica separada.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hello again! Ontem foi "red". Hoje é a cor do sol: "yellow"! "Yellow" quer dizer AMARELO. Olha o sol lá em cima — "yellow"!',
      legenda: "Aponte pro sol pela janela ao ouvir 'yellow'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: sol,
      versos: [
        { en: "Yellow, yellow, yellow sun!", pt: "Amarelo, amarelo, sol amarelo!", gesto: "☀️" },
        { en: "Yellow, yellow, banana fun!", pt: "Amarelo, amarelo, banana divertida!", gesto: "🍌" },
        { en: "Shining bright, oh yes!", pt: "Brilhando forte, oba!", gesto: "✨" },
      ],
      legenda: "Balance o corpo e faça de conta que é o sol brilhando.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "yellow sun", "yellow banana", "yellow star".',
      itens: [
        { en: "Yellow sun", pt: "Sol amarelo", imagemUrl: sol },
        { en: "Yellow banana", pt: "Banana amarela", imagemUrl: banana },
        { en: "Yellow star", pt: "Estrela amarela", imagemUrl: estrela },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete alto: "yellow", "yellow", "yellow"!',
      itens: [
        { en: "Yellow sun", pt: "Sol amarelo", imagemUrl: sol },
        { en: "Yellow banana", pt: "Banana amarela", imagemUrl: banana },
        { en: "Yellow star", pt: "Estrela amarela", imagemUrl: estrela },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no que é "yellow". Qual é amarelo?',
      palavraAlvoEn: "Yellow",
      opcoes: [
        { nome: "girassol amarelo", imagemUrl: girassol, correta: true },
        { nome: "maçã vermelha", imagemUrl: maca, correta: false },
        { nome: "rosa vermelha", imagemUrl: rosa, correta: false },
      ],
      feedbackAcerto: 'Perfeito! O girassol é "yellow".',
      feedbackErro: 'Escuta: "yellow" é amarelo, cor do sol. Tenta de novo.',
    },
    {
      tipo: "historiaEn",
      titulo: "A yellow day",
      cenas: [
        {
          imagemUrl: sol,
          narracao:
            'De manhã, o "yellow sun" aparece no céu. Sofia acorda e diz: "Good morning, yellow sun!".',
        },
        {
          imagemUrl: banana,
          narracao:
            'Ela come uma "yellow banana" no café. "Yummy!". Aí pega uma flor "yellow" pra levar pra escola.',
        },
        {
          imagemUrl: estrela,
          narracao:
            'À noite, Sofia olha o céu e vê uma "yellow star" bem pequeninha. Ela sussurra: "Good night, yellow star!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Ache o que NÃO é "yellow". Qual é diferente?',
      palavraAlvoEn: "Yellow",
      opcoes: [
        { nome: "coração vermelho", imagemUrl: coracao, correta: true },
        { nome: "banana amarela", imagemUrl: banana, correta: false },
        { nome: "sol amarelo", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: 'Isso! O coração é "red", não é "yellow".',
      feedbackErro: 'Olha bem: "yellow" é amarelo. O coração é vermelho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: sol,
      convite:
        'Faz de conta que você é o sol. Abre os braços e brilha! Diga: "I am yellow! I am the sun!".',
      dica: "Estique os dedos como raios de sol.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: girassol,
      pergunta:
        'Qual coisinha "yellow" você já viu hoje? Roupa amarela? Fruta? Brinquedo? Aponta e fala em inglês!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Yellow at home",
      convite:
        'Missão: encontre 3 coisas amarelas em casa. Aponte pra cada uma e diga: "It is yellow!". Vale banana, milho, brinquedo.',
      dicaAdulto: "Peça pra criança colocar tudo junto e tirar uma foto amarela.",
    },
    {
      tipo: "celebracao",
      medalha: "Yellow Star",
      mascoteUrl: buddy,
      falaFinal:
        'Wonderful! Agora você sabe duas cores: "red" e "yellow". Você é uma "Yellow Star"!',
    },
  ],
};

// ============================================================
// AULA 03 — Blue like the sky
// ============================================================
const aula03: AulaIng = {
  slug: "s1-a03-blue",
  titulo: "Blue like the sky",
  subtitulo: "Semana 1 · Dia 3",
  icone: "💙",
  duracaoMin: 9,
  baseCientifica:
    "Ancoragem em elementos naturais universais (Rosch 1978): o céu, a água e o peixe fixam 'blue' com pouco esforço cognitivo.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, my friend! Hoje a cor é "blue"! "Blue" quer dizer AZUL. Olha o céu quando faz sol — "blue"!',
      legenda: "Peça à criança para apontar pro céu pela janela.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: nuvem,
      versos: [
        { en: "Blue, blue, blue sky!", pt: "Azul, azul, céu azul!", gesto: "☁️" },
        { en: "Blue, blue, blue sea!", pt: "Azul, azul, mar azul!", gesto: "🌊" },
        { en: "Fish, fish, swim swim swim!", pt: "Peixe, peixe, nada nada nada!", gesto: "🐟" },
      ],
      legenda: "Faça movimentos de onda com a mão.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "blue sky", "blue water", "blue fish".',
      itens: [
        { en: "Blue sky", pt: "Céu azul", imagemUrl: nuvem },
        { en: "Blue water", pt: "Água azul", imagemUrl: agua },
        { en: "Blue fish", pt: "Peixe azul", imagemUrl: peixe },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais: "blue", "blue", "blue".',
      itens: [
        { en: "Blue sky", pt: "Céu azul", imagemUrl: nuvem },
        { en: "Blue water", pt: "Água azul", imagemUrl: agua },
        { en: "Blue fish", pt: "Peixe azul", imagemUrl: peixe },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "blue fish". Onde está o peixinho azul?',
      palavraAlvoEn: "Blue fish",
      opcoes: [
        { nome: "peixe azul", imagemUrl: peixe, correta: true },
        { nome: "estrela amarela", imagemUrl: estrela, correta: false },
        { nome: "maçã vermelha", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Isso! O "blue fish" nada na água.',
      feedbackErro: 'Escuta: "blue fish" é o peixinho azul.',
    },
    {
      tipo: "historiaEn",
      titulo: "A day at the sea",
      cenas: [
        {
          imagemUrl: nuvem,
          narracao:
            'Sofia e a família vão à praia. O céu está "blue" e o sol brilha "yellow".',
        },
        {
          imagemUrl: agua,
          narracao:
            'Sofia mete os pezinhos na água. A água é fria e "blue". Ela ri!',
        },
        {
          imagemUrl: peixe,
          narracao:
            'De repente, Sofia vê um "blue fish" bem pequenininho. Ela sussurra: "Hi, blue fish!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Qual coisinha é "blue"? Toque na azul.',
      palavraAlvoEn: "Blue",
      opcoes: [
        { nome: "água azul", imagemUrl: agua, correta: true },
        { nome: "banana amarela", imagemUrl: banana, correta: false },
        { nome: "rosa vermelha", imagemUrl: rosa, correta: false },
      ],
      feedbackAcerto: 'Perfeito! A água é "blue".',
      feedbackErro: 'Escuta: "blue" é a cor do céu e da água.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: peixe,
      convite:
        'Faz de conta que você é um "blue fish". Junte as mãozinhas e faça movimento de nadar. Diga: "I am a blue fish!".',
      dica: "Solte bolhinha imaginária com a boquinha.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: agua,
      pergunta:
        'O que mais é "blue" na sua casa? Um copo? Um brinquedo? A camisa do papai? Aponta e fala em inglês!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Blue treasures",
      convite:
        'Missão: junte 3 objetos "blue" numa cestinha. Depois mostre pra família dizendo: "Look! Blue, blue, blue!".',
      dicaAdulto: "Fotografe a cestinha azul e coloque no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Blue Star",
      mascoteUrl: buddy,
      falaFinal:
        'Excellent! Já são três cores: "red", "yellow", "blue". Você é uma "Blue Star"!',
    },
  ],
};

// ============================================================
// AULA 04 — Green like a tree
// ============================================================
const aula04: AulaIng = {
  slug: "s1-a04-green",
  titulo: "Green like a tree",
  subtitulo: "Semana 1 · Dia 4",
  icone: "🌳",
  duracaoMin: 9,
  baseCientifica:
    "Categorização por ambiente: 'green' aparece no lugar natural da criança — quintal, árvore, planta. Contexto reduz carga cognitiva (Krashen 1982).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Hoje a cor é "green"! "Green" quer dizer VERDE. Olha a folha da árvore lá fora — "green"!',
      legenda: "Se possível, olhe uma planta de verdade.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: arvore,
      versos: [
        { en: "Green, green, green tree!", pt: "Verde, verde, árvore verde!", gesto: "🌳" },
        { en: "Green, green, in the garden!", pt: "Verde, verde, no jardim!", gesto: "🌿" },
        { en: "Nature is green!", pt: "A natureza é verde!", gesto: "🍃" },
      ],
      legenda: "Balance os braços como galhos ao vento.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "green tree", "green leaf", "green garden".',
      itens: [
        { en: "Green tree", pt: "Árvore verde", imagemUrl: arvore },
        { en: "Green leaf", pt: "Folha verde", imagemUrl: flor },
        { en: "Green garden", pt: "Jardim verde", imagemUrl: jardim },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais: "green", "green", "green".',
      itens: [
        { en: "Green tree", pt: "Árvore verde", imagemUrl: arvore },
        { en: "Green leaf", pt: "Folha verde", imagemUrl: flor },
        { en: "Green garden", pt: "Jardim verde", imagemUrl: jardim },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "green tree". Onde está a árvore verde?',
      palavraAlvoEn: "Green tree",
      opcoes: [
        { nome: "árvore verde", imagemUrl: arvore, correta: true },
        { nome: "sol amarelo", imagemUrl: sol, correta: false },
        { nome: "peixe azul", imagemUrl: peixe, correta: false },
      ],
      feedbackAcerto: 'Muito bem! A "green tree" tem folhas verdes.',
      feedbackErro: 'Escuta: "green tree" é a árvore verde.',
    },
    {
      tipo: "historiaEn",
      titulo: "In the green garden",
      cenas: [
        {
          imagemUrl: jardim,
          narracao:
            'Sofia entra no "green garden" com o vovô. Tem muitas plantas!',
        },
        {
          imagemUrl: arvore,
          narracao:
            'Uma "green tree" bem grande faz sombra. Sofia senta embaixo e diz: "So green!".',
        },
        {
          imagemUrl: flor,
          narracao:
            'Do lado, uma flor tem folhinha "green" pequenininha. Sofia toca de leve: "Hello, green!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Qual coisa NÃO é "green"? Toque na diferente.',
      palavraAlvoEn: "Green",
      opcoes: [
        { nome: "banana amarela", imagemUrl: banana, correta: true },
        { nome: "árvore verde", imagemUrl: arvore, correta: false },
        { nome: "jardim verde", imagemUrl: jardim, correta: false },
      ],
      feedbackAcerto: 'Isso! A banana é "yellow", não é "green".',
      feedbackErro: '"Green" é verde. A árvore e o jardim são verdes.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: arvore,
      convite:
        'Faz de conta que você é uma "green tree". Fica em pé, abre os braços como galhos e diga: "I am a green tree!".',
      dica: "Balance devagar como se fosse vento.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: jardim,
      pergunta:
        'Tem alguma plantinha "green" na sua casa? De que cor é a alface, o brócolis, a hortelã?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Green walk",
      convite:
        'Missão: dê uma voltinha no quintal, praça ou perto de casa com a família. Aponte pra cada coisa "green" que ver e diga: "Green!".',
      dicaAdulto: "Vale colher uma folhinha caída e colar no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Green Star",
      mascoteUrl: buddy,
      falaFinal:
        'Fantastic! Quatro cores agora: "red", "yellow", "blue", "green". Você é uma "Green Star"!',
    },
  ],
};

// ============================================================
// AULA 05 — Rainbow! (revisão + formatura Semana 1)
// ============================================================
const aula05: AulaIng = {
  slug: "s1-a05-rainbow",
  titulo: "Rainbow!",
  subtitulo: "Semana 1 · Dia 5",
  icone: "🌈",
  duracaoMin: 10,
  baseCientifica:
    "Revisão interlaçada (interleaved retrieval, Rohrer 2012): misturar as 4 cores num mesmo contexto força discriminação e consolida memória de longo prazo.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, superstar! Hoje é dia de "rainbow"! "Rainbow" quer dizer ARCO-ÍRIS. Todas as cores juntas: "red", "yellow", "blue", "green"!',
      legenda: "Faça um arco no ar com a mãozinha.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: arcoIris,
      versos: [
        { en: "Red and yellow, blue and green!", pt: "Vermelho e amarelo, azul e verde!", gesto: "🌈" },
        { en: "Rainbow, rainbow, in the sky!", pt: "Arco-íris, arco-íris no céu!", gesto: "☁️" },
        { en: "So many colors, hi hi hi!", pt: "Tantas cores, oi oi oi!", gesto: "🥳" },
      ],
      legenda: "Bata palma nas 4 cores da primeira linha.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio:
        'Revisão! Toca em cada cor: "red", "yellow", "blue", "green". Depois: "rainbow"!',
      itens: [
        { en: "Red", pt: "Vermelho", imagemUrl: maca },
        { en: "Yellow", pt: "Amarelo", imagemUrl: sol },
        { en: "Blue", pt: "Azul", imagemUrl: agua },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Continua: "green" e "rainbow"!',
      itens: [
        { en: "Green", pt: "Verde", imagemUrl: arvore },
        { en: "Rainbow", pt: "Arco-íris", imagemUrl: arcoIris },
        { en: "Colors", pt: "Cores", imagemUrl: balao },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "rainbow". Onde está o arco-íris?',
      palavraAlvoEn: "Rainbow",
      opcoes: [
        { nome: "arco-íris", imagemUrl: arcoIris, correta: true },
        { nome: "árvore verde", imagemUrl: arvore, correta: false },
        { nome: "sol amarelo", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: 'Perfeito! O "rainbow" tem todas as cores.',
      feedbackErro: 'Escuta: "rainbow" é o arco-íris, cheio de cor.',
    },
    {
      tipo: "historiaEn",
      titulo: "The rainbow after the rain",
      cenas: [
        {
          imagemUrl: chuva,
          narracao:
            'Chove, chove, chove. Sofia olha pela janela e vê a "rain".',
        },
        {
          imagemUrl: sol,
          narracao:
            'De repente, o "yellow sun" aparece de novo. A chuva vai embora.',
        },
        {
          imagemUrl: arcoIris,
          narracao:
            'E no céu aparece um "rainbow" enorme! "Red, yellow, blue, green" — todas as cores! Sofia grita: "So beautiful!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: qual figura é "green"? Só verde!',
      palavraAlvoEn: "Green",
      opcoes: [
        { nome: "árvore verde", imagemUrl: arvore, correta: true },
        { nome: "coração vermelho", imagemUrl: coracao, correta: false },
        { nome: "estrela amarela", imagemUrl: estrela, correta: false },
      ],
      feedbackAcerto: 'Isso! A árvore é "green".',
      feedbackErro: 'Escuta de novo: "green" é a cor da folha.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: arcoIris,
      convite:
        'Agora é a sua vez! Faça um "rainbow" com o dedo no ar. A cada cor diga bem alto: "Red! Yellow! Blue! Green!".',
      dica: "Termine com os braços pro alto: 'Rainbow!'.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: balao,
      pergunta:
        'Qual é a sua cor favorita? Você já viu um "rainbow" de verdade? Onde?',
      exemplos: [
        'Balões coloridos → "colorful balloons".',
        'Roupinha listrada → "colorful clothes".',
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Make a rainbow",
      convite:
        'Missão de formatura: com giz, tinta ou massinha, faça um "rainbow" bem grande com a família. Apontando pra cada cor, diga o nome em inglês.',
      dicaAdulto:
        "Tira foto do arco-íris pronto e coloca no álbum — é a formatura da Semana 1 do Pré I!",
    },
    {
      tipo: "celebracao",
      medalha: "Rainbow Star — Semana 1 Pré I",
      mascoteUrl: buddy,
      falaFinal:
        'You did it! Você terminou a Semana 1 do Pré I! Sabe "red", "yellow", "blue", "green" e "rainbow"! Você é uma "Rainbow Star"! Congratulations!',
    },
  ],
};

// ============================================================
// CURSO — Pré I
// ============================================================
import { semana2Pre1 } from "./ingles-pre1-s2";
import { semana3Pre1 } from "./ingles-pre1-s3";
import { semana4Pre1 } from "./ingles-pre1-s4";
import { n3Pre1_semana1 } from "./ingles-pre1-n3-s1";
import { n3Pre1_semana2 } from "./ingles-pre1-n3-s2";
import { n3Pre1_semana3 } from "./ingles-pre1-n3-s3";
import { n3Pre1_semana4 } from "./ingles-pre1-n3-s4";
import { n4Pre1_semana1 } from "./ingles-pre1-n4-s1";
import { n4Pre1_semana2 } from "./ingles-pre1-n4-s2";
import { n4Pre1_semana3 } from "./ingles-pre1-n4-s3";
import { n4Pre1_semana4 } from "./ingles-pre1-n4-s4";

const nivel2Pre1: NivelIng = {
  slug: "n2",
  numero: 2,
  titulo: "Nível 2 · First Words",
  subtitulo: "Cores, números, movimentos, família — 20 aulas",
  destravado: true,
  unidades: [
    {
      slug: "semana-1",
      numero: 1,
      titulo: "Semana 1 — Colors around me",
      subtitulo: "Red, yellow, blue, green e o rainbow!",
      aulas: [aula01, aula02, aula03, aula04, aula05],
    },
    {
      slug: "semana-2",
      numero: 2,
      titulo: "Semana 2 — Count with me!",
      subtitulo: "One, two, three, four, high five!",
      aulas: semana2Pre1,
    },
    {
      slug: "semana-3",
      numero: 3,
      titulo: "Semana 3 — Move with me!",
      subtitulo: "Jump, dance, wave, hug — TPR party!",
      aulas: semana3Pre1,
    },
    {
      slug: "semana-4",
      numero: 4,
      titulo: "Semana 4 — My family & feelings",
      subtitulo: "Mommy, daddy, happy, sad — formatura Little English Star!",
      aulas: semana4Pre1,
    },
  ],
};

const nivel3Pre1: NivelIng = {
  slug: "n3",
  numero: 3,
  titulo: "Nível 3 · I Can Say",
  subtitulo: "Perguntas e respostas curtas — 8 aulas",
  destravado: true,
  unidades: [n3Pre1_semana1, n3Pre1_semana2, n3Pre1_semana3, n3Pre1_semana4],
};

const nivel4Pre1: NivelIng = {
  slug: "n4",
  numero: 4,
  titulo: "Nível 4 · Little Storyteller",
  subtitulo: "Mini-histórias e frases encadeadas — 8 aulas",
  destravado: true,
  unidades: [n4Pre1_semana1, n4Pre1_semana2, n4Pre1_semana3, n4Pre1_semana4],
};

export const cursoInglesPre1: CursoIng = {
  slug: "ingles-ei-pre1",
  serie: "pre1",
  serieLabel: "Pré I (4–5 anos)",
  titulo: "My First English — Pré I",
  descricao:
    "4 níveis de progressão para 4–5 anos. Começa muito leve no Nível 1 (Baby English).",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#dbeafe",
  mascoteUrl: buddy,
  unidades: [],
  niveis: [nivel1Pre1, nivel2Pre1, nivel3Pre1, nivel4Pre1],
};
