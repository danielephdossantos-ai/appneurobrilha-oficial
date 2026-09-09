import type { AulaIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as estrelaBrilhante } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as jardim } from "@/assets/neuro-treino/objetos/jardim.png.asset.json";
import { url as dia } from "@/assets/neuro-treino/objetos/dia.png.asset.json";
import { url as noite } from "@/assets/neuro-treino/objetos/noite.png.asset.json";
import { url as vento } from "@/assets/neuro-treino/objetos/vento.png.asset.json";
import { url as agua } from "@/assets/neuro-treino/objetos/cristal-agua.png.asset.json";

/**
 * Semana 2 — The world outside (Natureza, céu e tempo).
 * Vocabulário-alvo: sun, cloud, sky · moon, star, night ·
 * rain, rainbow, water · tree, flower, leaf · weather review.
 * Mesmo esqueleto de 11 momentos.
 */

const aula06: AulaIng = {
  slug: "s2-a01-sunny-day",
  titulo: "Sunny day!",
  subtitulo: "Semana 2 · Dia 1",
  icone: "☀️",
  duracaoMin: 8,
  baseCientifica:
    "Vocabulário de tempo (weather) ancorado no que a criança vê pela janela — dual coding (Paivio 1986).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Look! Está um dia lindo lá fora. Hoje vamos aprender palavras do céu em inglês. Escuta: "Sun". "Sun" quer dizer SOL.',
      legenda: "Olhe pela janela junto com a criança.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: sol,
      versos: [
        { en: "Sun, sun, shiny sun!", pt: "Sol, sol, sol brilhante!", gesto: "☀️" },
        { en: "Cloud, cloud, in the sky!", pt: "Nuvem, nuvem, no céu!", gesto: "☁️" },
        { en: "Hello, sky! Hello, sun!", pt: "Olá, céu! Olá, sol!", gesto: "🙌" },
      ],
      legenda: "Levante os braços quando cantar 'sun'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "Sun", "Cloud", "Sky".',
      itens: [
        { en: "Sun", pt: "Sol", imagemUrl: sol },
        { en: "Cloud", pt: "Nuvem", imagemUrl: nuvem },
        { en: "Sky", pt: "Céu", imagemUrl: dia },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'De novo! Toca e repete alto: "Sun", "Cloud", "Sky".',
      itens: [
        { en: "Sun", pt: "Sol", imagemUrl: sol },
        { en: "Cloud", pt: "Nuvem", imagemUrl: nuvem },
        { en: "Sky", pt: "Céu", imagemUrl: dia },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Sun".',
      palavraAlvoEn: "Sun",
      opcoes: [
        { nome: "sol", imagemUrl: sol, correta: true },
        { nome: "nuvem", imagemUrl: nuvem, correta: false },
        { nome: "lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: 'Yes! O "Sun" é o sol brilhante.',
      feedbackErro: 'Escuta: "Sun" é o sol. Tenta a figura amarela brilhando.',
    },
    {
      tipo: "historiaEn",
      titulo: "A sunny morning",
      cenas: [
        { imagemUrl: sol, narracao: 'De manhãzinha o "sun" apareceu no "sky". Ficou tudo iluminado!' },
        { imagemUrl: nuvem, narracao: 'Passou uma "cloud" bem branquinha. Ela era fofa como algodão.' },
        { imagemUrl: dia, narracao: 'A criança olhou pra cima e disse: "Hello, sun! Hello, cloud!".' },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Cloud".',
      palavraAlvoEn: "Cloud",
      opcoes: [
        { nome: "nuvem", imagemUrl: nuvem, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "estrela", imagemUrl: estrela, correta: false },
      ],
      feedbackAcerto: 'Isso! "Cloud" é a nuvem branquinha.',
      feedbackErro: 'A "cloud" fica no céu, é branquinha. Tenta de novo.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: sol,
      convite:
        'Vá até a janela e olhe pra cima. Diga: "Sky!". Achou o sol? Grita: "Sun!". Se tiver nuvem: "Cloud!".',
      dica: "Faça um circulinho com as mãozinhas imitando o sol.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: dia,
      pergunta: 'Hoje tem "sun" no "sky"? Tem "cloud"? De que cor está o céu agora?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Sky reporter",
      convite:
        'Missão do dia: seja o repórter do céu! Aponte pra fora e diga pra família: "Sun!", "Cloud!" ou "Sky!". Fale 3 vezes cada.',
      dicaAdulto: "Vale fazer no quintal, na varanda ou na janela.",
    },
    {
      tipo: "celebracao",
      medalha: "Sunny Star",
      mascoteUrl: brilha,
      falaFinal: 'Great job! Você aprendeu "Sun", "Cloud" e "Sky". The sky is your friend!',
    },
  ],
};

const aula07: AulaIng = {
  slug: "s2-a02-moon-and-stars",
  titulo: "Moon and stars",
  subtitulo: "Semana 2 · Dia 2",
  icone: "🌙",
  duracaoMin: 8,
  baseCientifica:
    "Contraste dia/noite reforça categorização (Bloom 1956) — ajuda a criança a organizar o mundo em pares.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Quando o "sun" vai embora, chega a "night". No céu aparecem a "moon" e as "stars". Escuta: "Moon". "Star".',
      legenda: "Feche a luz do quarto se puder — ajuda a criança a sentir a noite.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: lua,
      versos: [
        { en: "Twinkle, twinkle, little star!", pt: "Brilha, brilha, estrelinha!", gesto: "⭐" },
        { en: "Moon, moon, in the sky!", pt: "Lua, lua, no céu!", gesto: "🌙" },
        { en: "Good night, good night!", pt: "Boa noite, boa noite!", gesto: "😴" },
      ],
      legenda: "Cante bem baixinho, como música de dormir.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "Moon", "Star", "Night".',
      itens: [
        { en: "Moon", pt: "Lua", imagemUrl: lua },
        { en: "Star", pt: "Estrela", imagemUrl: estrela },
        { en: "Night", pt: "Noite", imagemUrl: noite },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete comigo: "Moon", "Star", "Night".',
      itens: [
        { en: "Moon", pt: "Lua", imagemUrl: lua },
        { en: "Star", pt: "Estrela", imagemUrl: estrelaBrilhante },
        { en: "Night", pt: "Noite", imagemUrl: noite },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque na "Moon".',
      palavraAlvoEn: "Moon",
      opcoes: [
        { nome: "lua", imagemUrl: lua, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "estrela", imagemUrl: estrela, correta: false },
      ],
      feedbackAcerto: 'Yes! A "Moon" aparece de noite.',
      feedbackErro: 'A "Moon" é a lua. Ela é branquinha e redonda.',
    },
    {
      tipo: "historiaEn",
      titulo: "Goodnight, world",
      cenas: [
        { imagemUrl: sol, narracao: 'O "sun" se foi devagarinho. O céu ficou escuro.' },
        { imagemUrl: lua, narracao: 'Chegou a "moon" branquinha. Ela sorriu no céu.' },
        { imagemUrl: estrelaBrilhante, narracao: 'Uma, duas, três "stars" apareceram. Elas piscaram: "Twinkle, twinkle!".' },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque na "Star".',
      palavraAlvoEn: "Star",
      opcoes: [
        { nome: "estrela", imagemUrl: estrelaBrilhante, correta: true },
        { nome: "lua", imagemUrl: lua, correta: false },
        { nome: "nuvem", imagemUrl: nuvem, correta: false },
      ],
      feedbackAcerto: 'Twinkle, twinkle! Você achou a "Star".',
      feedbackErro: 'A "Star" pisca no céu de noite. Tenta a que brilha.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: estrelaBrilhante,
      convite:
        'Abre e fecha as mãozinhas fazendo estrela piscando. Diga: "Twinkle, twinkle, little star!". Depois: "Good night, moon!".',
      dica: "Vale deitar no chão e apontar pra imaginar o céu.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: noite,
      pergunta: 'Do que você gosta de fazer à "night"? Você já viu a "moon" pela janela?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Good night, family",
      convite:
        'Na hora de dormir, diga pra cada pessoa: "Good night, mommy!", "Good night, daddy!". Ao ver a lua: "Good night, moon!".',
      dicaAdulto: "Vira um ritual gostoso antes de apagar a luz.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Star",
      mascoteUrl: brilha,
      falaFinal: 'Excellent! Agora você conhece "Moon", "Star" e "Night". Sweet dreams!',
    },
  ],
};

const aula08: AulaIng = {
  slug: "s2-a03-rain-and-rainbow",
  titulo: "Rain and rainbow",
  subtitulo: "Semana 2 · Dia 3",
  icone: "🌈",
  duracaoMin: 8,
  baseCientifica:
    "Sequência causa-efeito (chove → arco-íris) sustenta previsão e narrativa (Bruner 1986).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Às vezes o céu chora — cai "rain"! Depois da chuva, se tiver sol, aparece um "rainbow". Que lindo!',
      legenda: "Se estiver chovendo agora, mostre pela janela.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: chuva,
      versos: [
        { en: "Rain, rain, falling down!", pt: "Chuva, chuva, caindo!", gesto: "💧" },
        { en: "Rainbow, rainbow, up so high!", pt: "Arco-íris, arco-íris, lá no alto!", gesto: "🌈" },
        { en: "Splash, splash, in the water!", pt: "Splash, splash, na água!", gesto: "🦆" },
      ],
      legenda: "Bata os dedinhos na mesa imitando gotas.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "Rain", "Rainbow", "Water".',
      itens: [
        { en: "Rain", pt: "Chuva", imagemUrl: chuva },
        { en: "Rainbow", pt: "Arco-íris", imagemUrl: arcoIris },
        { en: "Water", pt: "Água", imagemUrl: agua },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Mais uma vez: "Rain", "Rainbow", "Water". Muito bem!',
      itens: [
        { en: "Rain", pt: "Chuva", imagemUrl: chuva },
        { en: "Rainbow", pt: "Arco-íris", imagemUrl: arcoIris },
        { en: "Water", pt: "Água", imagemUrl: agua },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque na "Rain".',
      palavraAlvoEn: "Rain",
      opcoes: [
        { nome: "chuva", imagemUrl: chuva, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "arco-íris", imagemUrl: arcoIris, correta: false },
      ],
      feedbackAcerto: 'Splash! A "Rain" cai do céu.',
      feedbackErro: 'A "Rain" é a chuva. Ela desce em gotinhas.',
    },
    {
      tipo: "historiaEn",
      titulo: "After the rain",
      cenas: [
        { imagemUrl: nuvem, narracao: 'Uma "cloud" grande e cinza chegou no céu.' },
        { imagemUrl: chuva, narracao: 'E começou a "rain"! Plim, plim, plim — muita "water" caindo!' },
        { imagemUrl: arcoIris, narracao: 'A chuva parou. Voltou o "sun" e apareceu um "rainbow" enorme. Wow!' },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Rainbow".',
      palavraAlvoEn: "Rainbow",
      opcoes: [
        { nome: "arco-íris", imagemUrl: arcoIris, correta: true },
        { nome: "nuvem", imagemUrl: nuvem, correta: false },
        { nome: "chuva", imagemUrl: chuva, correta: false },
      ],
      feedbackAcerto: 'Yay! O "Rainbow" tem várias cores.',
      feedbackErro: 'O "Rainbow" aparece depois da chuva, com várias cores.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: arcoIris,
      convite:
        'Levante os braços fazendo curva de arco-íris no ar e diga: "Rainbow!". Depois mexa os dedinhos como chuva e diga: "Rain, rain!".',
      dica: "Vale imitar o barulho da chuva estalando os dedos.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: agua,
      pergunta: 'Você gosta de "rain"? O que dá vontade de fazer quando chove?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Rain hunter",
      convite:
        'Missão: da próxima vez que chover, corra até a janela e grita: "Rain! Rain!". Se aparecer arco-íris, chama a família: "Rainbow!".',
      dicaAdulto: "Combine que quem vir primeiro chama todo mundo.",
    },
    {
      tipo: "celebracao",
      medalha: "Rainbow Star",
      mascoteUrl: brilha,
      falaFinal: 'Wonderful! Você aprendeu "Rain", "Rainbow" e "Water". You are a rainbow of joy!',
    },
  ],
};

const aula09: AulaIng = {
  slug: "s2-a04-in-the-garden",
  titulo: "In the garden",
  subtitulo: "Semana 2 · Dia 4",
  icone: "🌳",
  duracaoMin: 8,
  baseCientifica:
    "Vocabulário concreto do ambiente natural com pistas sensoriais (cheirar, tocar) — aprendizado multimodal (Mayer 2005).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Vamos até o jardim! Lá tem "tree", tem "flower" e tem "leaf". Escuta: "Tree" é árvore. "Flower" é flor.',
      legenda: "Se tiver uma planta em casa, mostre pra criança.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: jardim,
      versos: [
        { en: "Tree, tree, big green tree!", pt: "Árvore, árvore, árvore verde grande!", gesto: "🌳" },
        { en: "Flower, flower, pretty flower!", pt: "Flor, flor, flor bonita!", gesto: "🌸" },
        { en: "In the garden, you and me!", pt: "No jardim, eu e você!", gesto: "🌿" },
      ],
      legenda: "Balance como uma árvore ao vento.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "Tree", "Flower", "Leaf".',
      itens: [
        { en: "Tree", pt: "Árvore", imagemUrl: arvore },
        { en: "Flower", pt: "Flor", imagemUrl: flor },
        { en: "Leaf", pt: "Folha", imagemUrl: girassol },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete alto: "Tree", "Flower", "Leaf".',
      itens: [
        { en: "Tree", pt: "Árvore", imagemUrl: arvore },
        { en: "Flower", pt: "Flor", imagemUrl: girassol },
        { en: "Leaf", pt: "Folha", imagemUrl: flor },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque na "Tree".',
      palavraAlvoEn: "Tree",
      opcoes: [
        { nome: "árvore", imagemUrl: arvore, correta: true },
        { nome: "flor", imagemUrl: flor, correta: false },
        { nome: "nuvem", imagemUrl: nuvem, correta: false },
      ],
      feedbackAcerto: 'Yes! A "Tree" é grande e verde.',
      feedbackErro: 'A "Tree" é a árvore. Ela é bem alta.',
    },
    {
      tipo: "historiaEn",
      titulo: "A walk in the garden",
      cenas: [
        { imagemUrl: arvore, narracao: 'A criança encontrou uma "tree" gigante no jardim.' },
        { imagemUrl: flor, narracao: 'Do lado da árvore tinha uma "flower" rosa cheirosinha. Sniff, sniff!' },
        { imagemUrl: girassol, narracao: 'O "wind" soprou e uma "leaf" caiu no chão devagarinho.' },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque na "Flower".',
      palavraAlvoEn: "Flower",
      opcoes: [
        { nome: "flor", imagemUrl: flor, correta: true },
        { nome: "árvore", imagemUrl: arvore, correta: false },
        { nome: "chuva", imagemUrl: chuva, correta: false },
      ],
      feedbackAcerto: 'Sniff, sniff! A "Flower" cheira bom.',
      feedbackErro: 'A "Flower" é a flor. Tem pétalas coloridas.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: arvore,
      convite:
        'Fique bem alto, braços pra cima, e diga: "I am a tree!". Depois cheire uma flor imaginária: "Flower, mmm!". Solte uma folha no chão: "Leaf!".',
      dica: "Vale ir até o quintal se tiver.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: jardim,
      pergunta: 'Tem alguma "tree" ou "flower" perto da sua casa? De que cor é?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Garden hunt",
      convite:
        'Missão: sair com a família e procurar 1 "tree", 1 "flower" e 1 "leaf". Fale o nome em inglês ao encontrar cada um.',
      dicaAdulto: "Vale tirar uma foto e colocar no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Garden Star",
      mascoteUrl: brilha,
      falaFinal: 'Beautiful! Você achou "Tree", "Flower" e "Leaf". You are a nature friend!',
    },
  ],
};

const aula10: AulaIng = {
  slug: "s2-a05-what-is-the-weather",
  titulo: "What's the weather?",
  subtitulo: "Semana 2 · Dia 5",
  icone: "🌤️",
  duracaoMin: 9,
  baseCientifica:
    "Revisão cumulativa (Ellis 2003) — retomar as 12 palavras da semana em contexto de pergunta real fixa a memória de longo prazo.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Última missão da semana! Vamos revisar tudo. Pergunta mágica de hoje: "What\'s the weather?" — Como está o tempo?',
      legenda: "Aponte pela janela ao perguntar.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: sol,
      versos: [
        { en: "Sunny, sunny, sunny day!", pt: "Ensolarado, ensolarado, dia ensolarado!", gesto: "☀️" },
        { en: "Rainy, rainy, rainy day!", pt: "Chuvoso, chuvoso, dia chuvoso!", gesto: "🌧️" },
        { en: "What's the weather? Look and say!", pt: "Como está o tempo? Olha e diz!", gesto: "🌤️" },
      ],
      legenda: "Aponte pra fora ao cantar a última linha.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Revisão! Toca em cada figura: "Sunny", "Cloudy", "Rainy".',
      itens: [
        { en: "Sunny", pt: "Ensolarado", imagemUrl: sol },
        { en: "Cloudy", pt: "Nublado", imagemUrl: nuvem },
        { en: "Rainy", pt: "Chuvoso", imagemUrl: chuva },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'E também: "Moon", "Star", "Rainbow".',
      itens: [
        { en: "Moon", pt: "Lua", imagemUrl: lua },
        { en: "Star", pt: "Estrela", imagemUrl: estrelaBrilhante },
        { en: "Rainbow", pt: "Arco-íris", imagemUrl: arcoIris },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Se está com "Sun" no céu, o dia está "Sunny". Toca no dia "Sunny".',
      palavraAlvoEn: "Sunny",
      opcoes: [
        { nome: "sol", imagemUrl: sol, correta: true },
        { nome: "chuva", imagemUrl: chuva, correta: false },
        { nome: "lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: 'Yes! Sunny day means sol brilhando.',
      feedbackErro: '"Sunny" tem "Sun" — sol. Tenta a figura do sol.',
    },
    {
      tipo: "historiaEn",
      titulo: "One week outside",
      cenas: [
        { imagemUrl: sol, narracao: 'Segunda foi "sunny" — muita luz e um "sky" azul.' },
        { imagemUrl: chuva, narracao: 'Quarta foi "rainy" — muita "rain" e depois um "rainbow"!' },
        { imagemUrl: lua, narracao: 'De "night", a "moon" apareceu com muitas "stars". Sweet dreams!' },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Rainy".',
      palavraAlvoEn: "Rainy",
      opcoes: [
        { nome: "chuva", imagemUrl: chuva, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "arco-íris", imagemUrl: arcoIris, correta: false },
      ],
      feedbackAcerto: 'Splash! "Rainy" day means muita chuva.',
      feedbackErro: '"Rainy" vem de "Rain" — chuva.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: vento,
      convite:
        'Vira o meteorologista! Olha pra janela e responde forte: "It is sunny!" ou "It is rainy!" ou "It is cloudy!".',
      dica: "Vale fazer com microfone imaginário na mão.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: jardim,
      pergunta: 'What\'s the weather today? Está "sunny", "cloudy" ou "rainy"? Fala o que você vê.',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Weather reporter",
      convite:
        'Missão da semana: seja o meteorologista da família por 3 dias seguidos. Toda manhã anuncie: "Today is sunny!" (ou cloudy, ou rainy).',
      dicaAdulto: "Vale desenhar o tempo em uma folha e colar na geladeira.",
    },
    {
      tipo: "celebracao",
      medalha: "Weather Star — Semana 2",
      mascoteUrl: brilha,
      falaFinal:
        'You did it! Semana 2 terminada! Você já sabe "Sun", "Cloud", "Sky", "Moon", "Star", "Night", "Rain", "Rainbow", "Water", "Tree", "Flower" e "Leaf". Amazing!',
    },
  ],
};

export const aulasMaternalSemana2: AulaIng[] = [aula06, aula07, aula08, aula09, aula10];
