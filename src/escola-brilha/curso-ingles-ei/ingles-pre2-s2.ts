import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as vento } from "@/assets/neuro-treino/objetos/vento.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as sombrinha } from "@/assets/neuro-treino/objetos/sombrinha.png.asset.json";
import { url as casaco } from "@/assets/neuro-treino/objetos/casaco.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as dia } from "@/assets/neuro-treino/objetos/dia.png.asset.json";
import { url as noite } from "@/assets/neuro-treino/objetos/noite.png.asset.json";

/**
 * Inglês EI — Pré II · Semana 2 · "Weather and time of day"
 * Salto: descrever o mundo com "It is..." (sunny, rainy, cloudy...).
 */

const aula01: AulaIng = {
  slug: "s2-a01-sunny",
  titulo: "It is sunny!",
  subtitulo: "Semana 2 · Dia 1",
  icone: "☀️",
  duracaoMin: 9,
  baseCientifica:
    "Frase existencial 'It is + adj' (Cameron 2001): estrutura curta e fixa que vira template para toda descrição do mundo.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Nova semana! Hoje a gente aprende a descrever o TEMPO. Olha lá fora — como está o dia? Se tem sol, a gente diz: "It is sunny!".',
      legenda: "Aponte pra janela ao ouvir 'sunny'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: sol,
      versos: [
        { en: "Sunny, sunny, it is sunny!", pt: "Ensolarado, dia ensolarado!", gesto: "☀️" },
        { en: "The sun is up, oh so bright!", pt: "O sol está no céu, brilhando!", gesto: "🌞" },
        { en: "Let us play outside today!", pt: "Vamos brincar lá fora!", gesto: "🥳" },
      ],
      legenda: "Abre os bracinhos como raios de sol.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "sun", "sunny day", "hot".',
      itens: [
        { en: "Sun", pt: "Sol", imagemUrl: sol },
        { en: "Sunny day", pt: "Dia ensolarado", imagemUrl: dia },
        { en: "It is hot!", pt: "Está quente!", imagemUrl: sombrinha },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete alto: "It is sunny!", "It is hot!".',
      itens: [
        { en: "Sun", pt: "Sol", imagemUrl: sol },
        { en: "Sunny day", pt: "Dia ensolarado", imagemUrl: dia },
        { en: "Hot!", pt: "Quente!", imagemUrl: sombrinha },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Quando "it is sunny", o que aparece no céu?',
      palavraAlvoEn: "Sunny",
      opcoes: [
        { nome: "sol brilhando", imagemUrl: sol, correta: true },
        { nome: "chuva", imagemUrl: chuva, correta: false },
        { nome: "lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: '"Sunny" — o sol está lá.',
      feedbackErro: '"Sunny" quer dizer com sol. Procura o sol.',
    },
    {
      tipo: "historiaEn",
      titulo: "A sunny picnic",
      cenas: [
        {
          imagemUrl: sol,
          narracao:
            'Sofia acorda e olha pela janela. "Mommy, it is sunny!". A família decide: hoje tem piquenique!',
        },
        {
          imagemUrl: flor,
          narracao:
            'Elas vão pro parque. Sofia diz: "It is hot! I want water.". Mamãe pega a garrafinha.',
        },
        {
          imagemUrl: sombrinha,
          narracao:
            'Elas sentam na sombra da árvore. Sofia sorri: "I love sunny days!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Qual dia é "sunny"? Toque no céu certo.',
      palavraAlvoEn: "It is sunny",
      opcoes: [
        { nome: "dia com sol", imagemUrl: dia, correta: true },
        { nome: "noite escura", imagemUrl: noite, correta: false },
        { nome: "chuva", imagemUrl: chuva, correta: false },
      ],
      feedbackAcerto: '"Sunny day!" — bem claro e quente!',
      feedbackErro: '"Sunny" é o dia com sol. À noite ou na chuva não é sunny.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: sol,
      convite:
        'Faz de conta que você é o sol! Estica os braços como raios e diga: "It is sunny! It is hot!".',
      dica: "Roda devagar como se fosse o sol no céu.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: dia,
      pergunta:
        'Olha lá fora agora. Como está o tempo? Se tiver sol, diga: "It is sunny!". O que você gosta de fazer em dia ensolarado?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Weather report",
      convite:
        'Missão: toda manhã dessa semana, olha o céu com a família e diga em inglês como está o tempo. Comece hoje: "Today it is ..." (sunny? cloudy?).',
      dicaAdulto: "Faça um cartaz com desenhos do sol/chuva/nuvem e marque cada dia.",
    },
    {
      tipo: "celebracao",
      medalha: "Sunny Star",
      mascoteUrl: buddy,
      falaFinal:
        'Great! Você já descreve o tempo em inglês. "It is sunny!" — o mundo fica mais claro em inglês!',
    },
  ],
};

const aula02: AulaIng = {
  slug: "s2-a02-rainy",
  titulo: "It is rainy!",
  subtitulo: "Semana 2 · Dia 2",
  icone: "🌧️",
  duracaoMin: 9,
  baseCientifica:
    "Contraste sunny/rainy (Nation 2001): opostos consolidam mais rápido que sinônimos.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi again! Ontem foi "sunny". Hoje é o contrário: "rainy"! Quando cai água do céu, a gente diz: "It is rainy!".',
      legenda: "Bata os dedos como pingos de chuva.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: chuva,
      versos: [
        { en: "Rain, rain, go away!", pt: "Chuva, chuva, vá embora!", gesto: "🌧️" },
        { en: "Come again another day!", pt: "Volta em outro dia!", gesto: "☔" },
        { en: "Little Sofia wants to play!", pt: "A pequena Sofia quer brincar!", gesto: "🥰" },
      ],
      legenda: "Cantiga tradicional inglesa — cante 2 vezes.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "rain", "rainy day", "umbrella".',
      itens: [
        { en: "Rain", pt: "Chuva", imagemUrl: chuva },
        { en: "Rainy day", pt: "Dia de chuva", imagemUrl: nuvem },
        { en: "Umbrella", pt: "Sombrinha", imagemUrl: sombrinha },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete alto: "It is rainy!", "I need my umbrella!".',
      itens: [
        { en: "Rain", pt: "Chuva", imagemUrl: chuva },
        { en: "Rainy day", pt: "Dia de chuva", imagemUrl: nuvem },
        { en: "Umbrella", pt: "Sombrinha", imagemUrl: sombrinha },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Quando "it is rainy", o que a gente precisa? Toque no objeto certo.',
      palavraAlvoEn: "Umbrella",
      opcoes: [
        { nome: "sombrinha", imagemUrl: sombrinha, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "estrela", imagemUrl: estrela, correta: false },
      ],
      feedbackAcerto: '"Umbrella!" — pra não molhar!',
      feedbackErro: 'Na chuva precisa de "umbrella" — sombrinha!',
    },
    {
      tipo: "historiaEn",
      titulo: "A rainy walk",
      cenas: [
        {
          imagemUrl: nuvem,
          narracao:
            'Sofia olha o céu. "Mommy, it is rainy!". Mamãe pega o "umbrella".',
        },
        {
          imagemUrl: sombrinha,
          narracao:
            'Elas saem juntas. Sofia pula nas poças: "Splash! Splash!". Ri muito!',
        },
        {
          imagemUrl: arcoIris,
          narracao:
            'De repente o sol volta e aparece um "rainbow"! Sofia diz: "Wow! Rainy days have surprises!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Qual dia NÃO é "rainy"? Toque no diferente.',
      palavraAlvoEn: "Rainy",
      opcoes: [
        { nome: "dia ensolarado", imagemUrl: dia, correta: true },
        { nome: "chuva", imagemUrl: chuva, correta: false },
        { nome: "nuvem escura", imagemUrl: nuvem, correta: false },
      ],
      feedbackAcerto: 'Isso! O dia com sol é "sunny", não "rainy".',
      feedbackErro: 'Escuta: "rainy" é dia de chuva. O ensolarado é diferente.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: chuva,
      convite:
        'Faz de conta que tá chovendo! Bata os dedos no chão fazendo "pitter-patter". Diz: "It is rainy! I need my umbrella!".',
      dica: "Abra um guarda-chuva imaginário em cima da cabeça.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: sombrinha,
      pergunta:
        'Você gosta de dia de chuva? O que você faz quando está "rainy"? Pula nas poças? Fica em casa? Assiste desenho?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Rainy day song",
      convite:
        'Missão: cante "Rain, rain, go away!" com a família. Se estiver chovendo, olhe a chuva pela janela e diga: "It is rainy!".',
      dicaAdulto: "Cantiga inglesa tradicional — pode aprender junto com a criança.",
    },
    {
      tipo: "celebracao",
      medalha: "Rainy Star",
      mascoteUrl: buddy,
      falaFinal:
        'Beautiful! Sunny ou rainy, você descreve o tempo em inglês. Congratulations!',
    },
  ],
};

const aula03: AulaIng = {
  slug: "s2-a03-cloudy-windy",
  titulo: "Cloudy and windy!",
  subtitulo: "Semana 2 · Dia 3",
  icone: "☁️",
  duracaoMin: 9,
  baseCientifica:
    "Expansão de campo semântico do tempo (Ellis 2002): 4-5 palavras compõem categoria completa de weather.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Hoje mais 2 palavras do tempo: "cloudy" (nublado, com nuvens) e "windy" (com vento). Ouça as nuvens passando devagar!',
      legenda: "Sopre o ar ao ouvir 'windy'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: nuvem,
      versos: [
        { en: "Cloudy, cloudy, in the sky!", pt: "Nublado, nublado, no céu!", gesto: "☁️" },
        { en: "Windy, windy, hair goes fly!", pt: "Ventoso, ventoso, cabelo voa!", gesto: "💨" },
        { en: "Let us wear a jacket, my!", pt: "Vamos usar um casaco!", gesto: "🧥" },
      ],
      legenda: "Balance como se o vento tivesse te empurrando.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "cloud", "cloudy", "windy", "jacket".',
      itens: [
        { en: "Cloud", pt: "Nuvem", imagemUrl: nuvem },
        { en: "Windy", pt: "Ventoso", imagemUrl: vento },
        { en: "Jacket", pt: "Casaco", imagemUrl: casaco },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais: "cloudy", "windy", "jacket".',
      itens: [
        { en: "Cloud", pt: "Nuvem", imagemUrl: nuvem },
        { en: "Windy", pt: "Ventoso", imagemUrl: vento },
        { en: "Jacket", pt: "Casaco", imagemUrl: casaco },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Quando "it is windy" e frio, o que a gente veste?',
      palavraAlvoEn: "Jacket",
      opcoes: [
        { nome: "casaco", imagemUrl: casaco, correta: true },
        { nome: "sombrinha", imagemUrl: sombrinha, correta: false },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: '"Jacket!" — pra ficar quentinho no vento.',
      feedbackErro: 'Quando venta e está frio, a gente veste "jacket" — casaco.',
    },
    {
      tipo: "historiaEn",
      titulo: "The windy afternoon",
      cenas: [
        {
          imagemUrl: nuvem,
          narracao:
            'Sofia olha o céu à tarde. Muitas nuvens! "Mommy, it is cloudy!". O sol está escondido.',
        },
        {
          imagemUrl: vento,
          narracao:
            'Começa a ventar forte. As folhas das árvores voam. "It is windy, mommy!".',
        },
        {
          imagemUrl: casaco,
          narracao:
            'Mamãe pega o casaco. "Put on your jacket, Sofia!". Sofia veste e sai brincar com o vento.',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"It is windy!" — qual imagem mostra o vento?',
      palavraAlvoEn: "Windy",
      opcoes: [
        { nome: "vento soprando", imagemUrl: vento, correta: true },
        { nome: "sol quente", imagemUrl: sol, correta: false },
        { nome: "chuva", imagemUrl: chuva, correta: false },
      ],
      feedbackAcerto: '"Windy!" — o ar mexendo tudo.',
      feedbackErro: '"Windy" é dia com muito vento.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: vento,
      convite:
        'Faz de conta que você é o vento! Sopra alto e balança os braços. Diz: "I am the wind! It is windy!".',
      dica: "Faça o barulho 'whoooosh!' com a boca.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: nuvem,
      pergunta:
        'Olha o céu agora. Está "cloudy"? Está "windy"? Tem alguma nuvem em forma engraçada?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Cloud watching",
      convite:
        'Missão: deita no gramado com a família e olha as nuvens 5 minutos. Diga em inglês: "It is cloudy!". Aponta as nuvens.',
      dicaAdulto: "Se der vento, aproveita pra falar 'Ooh, windy!' — reforça imersão.",
    },
    {
      tipo: "celebracao",
      medalha: "Cloudy Star",
      mascoteUrl: buddy,
      falaFinal:
        'Fantastic! Cloudy, windy, sunny, rainy — 4 palavras do tempo em inglês! Amazing!',
    },
  ],
};

const aula04: AulaIng = {
  slug: "s2-a04-day-night",
  titulo: "Day and night",
  subtitulo: "Semana 2 · Dia 4",
  icone: "🌗",
  duracaoMin: 9,
  baseCientifica:
    "Pares opostos temporais (Piaget): day/night organiza a noção de tempo em blocos concretos e claros.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Além do tempo, tem hora do dia: "day" (dia) e "night" (noite). Quando o sol aparece, "it is day". Quando a lua aparece, "it is night".',
      legenda: "Aponta pra cima ao ouvir sun/moon.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: sol,
      versos: [
        { en: "Day, day, sunny day!", pt: "Dia, dia, dia ensolarado!", gesto: "☀️" },
        { en: "Night, night, stars are bright!", pt: "Noite, noite, estrelas brilhando!", gesto: "⭐" },
        { en: "Good morning, good night!", pt: "Bom dia, boa noite!", gesto: "🌗" },
      ],
      legenda: "Mão pra cima no dia, dobrada no rosto na noite.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "day", "sun", "night", "moon", "star".',
      itens: [
        { en: "Day", pt: "Dia", imagemUrl: dia },
        { en: "Night", pt: "Noite", imagemUrl: noite },
        { en: "Moon", pt: "Lua", imagemUrl: lua },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete alto: "day", "night", "moon", "star".',
      itens: [
        { en: "Sun", pt: "Sol", imagemUrl: sol },
        { en: "Moon", pt: "Lua", imagemUrl: lua },
        { en: "Star", pt: "Estrela", imagemUrl: estrela },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Quando "it is night", o que aparece no céu?',
      palavraAlvoEn: "Night",
      opcoes: [
        { nome: "lua e noite", imagemUrl: lua, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "arco-íris", imagemUrl: arcoIris, correta: false },
      ],
      feedbackAcerto: '"Night!" — a lua aparece.',
      feedbackErro: 'Na "night" aparece a "moon", não o "sun".',
    },
    {
      tipo: "historiaEn",
      titulo: "Day to night",
      cenas: [
        {
          imagemUrl: sol,
          narracao:
            'De manhã Sofia acorda. "Good morning! It is day!". O sol brilha na janela.',
        },
        {
          imagemUrl: arvore,
          narracao:
            'O dia passa. Sofia brinca, come, aprende. O sol vai descendo devagar.',
        },
        {
          imagemUrl: lua,
          narracao:
            'De noite, aparece a "moon" e uma "star" brilhante. "Good night!". Sofia vai dormir.',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "day". Onde tá o sol brilhando?',
      palavraAlvoEn: "Day",
      opcoes: [
        { nome: "dia", imagemUrl: dia, correta: true },
        { nome: "noite", imagemUrl: noite, correta: false },
        { nome: "lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: '"Day!" — o sol brilhando.',
      feedbackErro: '"Day" é dia, com sol. "Night" é noite, com lua.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: estrela,
      convite:
        'Faz de conta que passa o dia inteiro! Comece com "Good morning!". Depois pule uma soneca. E termine com "Good night, star!".',
      dica: "Feche os olhinhos na noite.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: lua,
      pergunta:
        'Você gosta mais do dia ou da noite? De dia dá pra brincar lá fora. De noite tem estrelinha! Em inglês: "I like day" ou "I like night".',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Day and night routine",
      convite:
        'Missão: de manhã, diga "Good morning, family!". À noite, diga "Good night, family!". Uma frase em inglês pra abrir e fechar o dia.',
      dicaAdulto: "Vira ritual — em 2 semanas fica automático.",
    },
    {
      tipo: "celebracao",
      medalha: "Day-Night Star",
      mascoteUrl: buddy,
      falaFinal:
        'Beautiful! De manhã, à tarde, à noite — você fala inglês o dia inteiro agora! Amazing!',
    },
  ],
};

const aula05: AulaIng = {
  slug: "s2-a05-weather-review",
  titulo: "What's the weather today?",
  subtitulo: "Semana 2 · Dia 5",
  icone: "🌈",
  duracaoMin: 10,
  baseCientifica:
    "Revisão cumulativa (Ebbinghaus, Cepeda et al. 2006): retomar as 4 palavras da semana em uma única atividade dobra retenção.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Fim da Semana 2! Você já sabe descrever o TEMPO todo em inglês. Vamos revisar: sunny, rainy, cloudy, windy. E aprender a pergunta MÁGICA: "What is the weather today?".',
      legenda: "Aponte pra janela.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: arcoIris,
      versos: [
        { en: "Sunny, rainy, cloudy, windy!", pt: "Ensolarado, chuvoso, nublado, ventoso!", gesto: "🌦️" },
        { en: "What is the weather today?", pt: "Como está o tempo hoje?", gesto: "❓" },
        { en: "Look outside and tell me, hey!", pt: "Olha lá fora e me conta!", gesto: "🥳" },
      ],
      legenda: "Aponte pra janela a cada 'today'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Revisa tudo: "sunny", "rainy", "cloudy", "windy".',
      itens: [
        { en: "Sunny", pt: "Ensolarado", imagemUrl: sol },
        { en: "Rainy", pt: "Chuvoso", imagemUrl: chuva },
        { en: "Cloudy", pt: "Nublado", imagemUrl: nuvem },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Mais 3: "windy", "rainbow", "hot".',
      itens: [
        { en: "Windy", pt: "Ventoso", imagemUrl: vento },
        { en: "Rainbow", pt: "Arco-íris", imagemUrl: arcoIris },
        { en: "Umbrella", pt: "Sombrinha", imagemUrl: sombrinha },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Está chovendo e depois aparece sol. O que a gente vê no céu?',
      palavraAlvoEn: "Rainbow",
      opcoes: [
        { nome: "arco-íris", imagemUrl: arcoIris, correta: true },
        { nome: "lua", imagemUrl: lua, correta: false },
        { nome: "casaco", imagemUrl: casaco, correta: false },
      ],
      feedbackAcerto: '"Rainbow!" — o arco-íris aparece.',
      feedbackErro: 'Depois da chuva com sol, aparece um "rainbow" — arco-íris!',
    },
    {
      tipo: "historiaEn",
      titulo: "The whole week",
      cenas: [
        {
          imagemUrl: sol,
          narracao:
            'Segunda: "It is sunny!". Sofia foi ao parque. Terça: "It is rainy!". Sofia ficou em casa desenhando.',
        },
        {
          imagemUrl: nuvem,
          narracao:
            'Quarta: "It is cloudy!". Quinta: "It is windy!". Sofia soltou pipa!',
        },
        {
          imagemUrl: arcoIris,
          narracao:
            'Sexta: sol e chuva junto — apareceu um "rainbow!". Sofia gritou: "Look, mommy, rainbow!". Semana perfeita!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"What is the weather today?" Se está nublado, você toca qual?',
      palavraAlvoEn: "Cloudy",
      opcoes: [
        { nome: "nublado", imagemUrl: nuvem, correta: true },
        { nome: "ensolarado", imagemUrl: dia, correta: false },
        { nome: "noite", imagemUrl: noite, correta: false },
      ],
      feedbackAcerto: '"Cloudy today!" — muitas nuvens.',
      feedbackErro: '"Cloudy" é com nuvens, cobrindo o sol.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: buddy,
      convite:
        'Você é o repórter do tempo! Segura um microfone imaginário e diga bem alto: "Good morning! Today it is ..." — e conta como está lá fora!',
      dica: "Sorria pra câmera imaginária!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: arcoIris,
      pergunta:
        'Qual tempo você mais gosta? Sunny? Rainy? Cloudy? Windy? Todos têm coisa boa!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Weekly weather chart",
      convite:
        'Missão de formatura: faz um cartaz da semana com a família. 5 dias, 5 desenhos do tempo. Cada dia diz em inglês: "It is ...".',
      dicaAdulto: "Coloca no álbum de recordações — vira memória forte da Semana 2.",
    },
    {
      tipo: "celebracao",
      medalha: "Weather Star — Semana 2 Pré II",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Semana 2 fechada com 4 palavras do tempo dominadas! Você agora é o "weather reporter" da família! Congratulations!',
    },
  ],
};

export const semana2Pre2: AulaIng[] = [aula01, aula02, aula03, aula04, aula05];
