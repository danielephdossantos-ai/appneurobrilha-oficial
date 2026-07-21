import type { AulaIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as suco } from "@/assets/neuro-treino/objetos/suco.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as sorvete } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as agua } from "@/assets/neuro-treino/objetos/cristal-agua.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as festa } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as presente } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as vela } from "@/assets/neuro-treino/objetos/vela.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";

/**
 * Semana 4 — Yummy party!
 * Vocabulário-alvo: ice cream/cake/juice · water/apple/banana ·
 * cake/candle/balloon · party/gift/balloon · thank you review.
 * Encerra o Maternal com festa de formatura.
 * Mesmo esqueleto fixo de 11 momentos.
 */

const aula16: AulaIng = {
  slug: "s4-a01-ice-cream-time",
  titulo: "Ice cream time!",
  subtitulo: "Semana 4 · Dia 1",
  icone: "🍦",
  duracaoMin: 8,
  baseCientifica:
    "Palavras ligadas a prazer (sorvete, suco) fixam com dopamina — motivação intrínseca (Berridge 2003).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hoje é dia de coisa gostosa! Escuta: "ice cream". "Ice cream" é sorvete! Yummy!',
      legenda: "Esfregue a barriga com a criança.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: sorvete,
      versos: [
        { en: "Ice cream, ice cream, yummy, yummy!", pt: "Sorvete, sorvete, gostoso!", gesto: "🍦" },
        { en: "Cake, cake, in my tummy!", pt: "Bolo, bolo, na barriguinha!", gesto: "🎂" },
        { en: "Juice, juice, glug, glug, glug!", pt: "Suco, suco, gluc, gluc!", gesto: "🥤" },
      ],
      legenda: "Faça movimento de tomar suco no fim.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada guloseima: "Ice cream", "Cake", "Juice".',
      itens: [
        { en: "Ice cream", pt: "Sorvete", imagemUrl: sorvete },
        { en: "Cake", pt: "Bolo", imagemUrl: bolo },
        { en: "Juice", pt: "Suco", imagemUrl: suco },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'De novo, com fome! "Ice cream", "Cake", "Juice".',
      itens: [
        { en: "Ice cream", pt: "Sorvete", imagemUrl: sorvete },
        { en: "Cake", pt: "Bolo", imagemUrl: bolo },
        { en: "Juice", pt: "Suco", imagemUrl: suco },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Ice cream". Qual é o sorvete?',
      palavraAlvoEn: "Ice cream",
      opcoes: [
        { nome: "sorvete", imagemUrl: sorvete, correta: true },
        { nome: "bolo", imagemUrl: bolo, correta: false },
        { nome: "suco", imagemUrl: suco, correta: false },
      ],
      feedbackAcerto: 'Yummy! "Ice cream" é sorvete!',
      feedbackErro: 'O "Ice cream" é geladinho. Toca no sorvete.',
    },
    {
      tipo: "historiaEn",
      titulo: "A yummy afternoon",
      cenas: [
        {
          imagemUrl: sorvete,
          narracao: 'A mommy diz: "Look! Ice cream!". A criança pula: "Yes! Ice cream!".',
        },
        {
          imagemUrl: bolo,
          narracao: 'Tem também um "cake" de chocolate. Que delícia!',
        },
        {
          imagemUrl: suco,
          narracao: 'Pra beber, um "juice" de laranja. Todos dizem: "Yummy!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Juice". O que a gente bebe?',
      palavraAlvoEn: "Juice",
      opcoes: [
        { nome: "suco", imagemUrl: suco, correta: true },
        { nome: "bolo", imagemUrl: bolo, correta: false },
        { nome: "sorvete", imagemUrl: sorvete, correta: false },
      ],
      feedbackAcerto: 'Glug, glug! "Juice" é suco!',
      feedbackErro: 'O "Juice" é pra beber. Toca no copo de suco.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: sorvete,
      convite:
        'Faz de conta que você tem um sorvetão! Lambe o ar e diz: "Mmm, ice cream!". Depois: "Mmm, cake!" e "Glug, juice!".',
      dica: "Use uma colher de brinquedo se tiver.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: coracao,
      pergunta:
        'Qual você prefere — "ice cream", "cake" ou "juice"? Que sabor você mais gosta?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Snack time!",
      convite:
        'Missão: no lanche, aponte para o que estiver na mesa e diga em inglês. Se tiver sorvete, grite: "Ice cream!". Tire uma foto pro álbum!',
      dicaAdulto: "Vale usar potes ou frutas de brinquedo.",
    },
    {
      tipo: "celebracao",
      medalha: "Yummy Star 2",
      mascoteUrl: brilha,
      falaFinal:
        'Yummy! Você aprendeu "Ice cream", "Cake" e "Juice". Delicious job!',
    },
  ],
};

const aula17: AulaIng = {
  slug: "s4-a02-drink-time",
  titulo: "Drink time!",
  subtitulo: "Semana 4 · Dia 2",
  icone: "💧",
  duracaoMin: 8,
  baseCientifica:
    "Rotina cotidiana (beber água) — vocabulary anchored in real routine, Krashen 1982.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Todo mundo precisa beber! Escuta: "water". "Water" é água. E "juice" é suco. Vamos aprender?',
      legenda: "Pegue um copo de verdade se puder.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: agua,
      versos: [
        { en: "Water, water, drink some water!", pt: "Água, água, bebe água!", gesto: "💧" },
        { en: "Juice, juice, sweet and yummy!", pt: "Suco, suco, docinho!", gesto: "🥤" },
        { en: "Apple, apple, crunch, crunch, crunch!", pt: "Maçã, maçã, crec, crec!", gesto: "🍎" },
      ],
      legenda: "Faça 'crec crec' com a boca ao cantar apple.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "Water", "Juice", "Apple".',
      itens: [
        { en: "Water", pt: "Água", imagemUrl: agua },
        { en: "Juice", pt: "Suco", imagemUrl: suco },
        { en: "Apple", pt: "Maçã", imagemUrl: maca },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete! "Water", "Juice", "Apple".',
      itens: [
        { en: "Water", pt: "Água", imagemUrl: agua },
        { en: "Juice", pt: "Suco", imagemUrl: suco },
        { en: "Apple", pt: "Maçã", imagemUrl: maca },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Water". Qual é a água?',
      palavraAlvoEn: "Water",
      opcoes: [
        { nome: "água", imagemUrl: agua, correta: true },
        { nome: "suco", imagemUrl: suco, correta: false },
        { nome: "maçã", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Isso! "Water" é água — muito importante!',
      feedbackErro: 'A "Water" é transparente. Toca na água.',
    },
    {
      tipo: "historiaEn",
      titulo: "I am thirsty!",
      cenas: [
        {
          imagemUrl: maca,
          narracao: 'A criança brinca muito e diz: "I am hungry!". Come uma "apple" crocante!',
        },
        {
          imagemUrl: agua,
          narracao: 'Depois: "I am thirsty!". A mommy traz "water": "Here, drink some water!".',
        },
        {
          imagemUrl: suco,
          narracao: 'À tarde, um "juice" bem geladinho. A criança diz: "Thank you, mommy!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Apple". Qual é vermelha e redonda?',
      palavraAlvoEn: "Apple",
      opcoes: [
        { nome: "maçã", imagemUrl: maca, correta: true },
        { nome: "banana", imagemUrl: banana, correta: false },
        { nome: "água", imagemUrl: agua, correta: false },
      ],
      feedbackAcerto: 'Crunch! "Apple" é maçã!',
      feedbackErro: 'A "Apple" é vermelhinha. Toca na maçã.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: agua,
      convite:
        'Pega um copo de verdade! Bebe e diz: "Mmm, water!". Depois faz de conta que é suco: "Yummy, juice!". Morde uma maçã: "Crunch, apple!".',
      dica: "Vale copo vazio se não puder molhar.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: familia,
      pergunta:
        'Você bebe mais "water" ou "juice"? Comeu alguma "apple" hoje? O que mais você come?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Drink up!",
      convite:
        'Missão: peça em inglês pra família. Diga: "Water, please!" pra pedir água. Ou "Juice, please!" pra pedir suco.',
      dicaAdulto: "Só entregue se a criança pedir em inglês — vira jogo.",
    },
    {
      tipo: "celebracao",
      medalha: "Water Star",
      mascoteUrl: brilha,
      falaFinal:
        'Wonderful! "Water", "Juice", "Apple" — 3 palavras novas! Cheers!',
    },
  ],
};

const aula18: AulaIng = {
  slug: "s4-a03-happy-birthday",
  titulo: "Happy birthday!",
  subtitulo: "Semana 4 · Dia 3",
  icone: "🎂",
  duracaoMin: 8,
  baseCientifica:
    "Ritual social universal (aniversário) — script conhecido facilita aquisição da fórmula em L2 (Wray 2002).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Tem festa! Em inglês a gente canta: "Happy birthday to you!". Vamos aprender: "cake", "candle", "balloon".',
      legenda: "Cante o parabéns em inglês para animar.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: bolo,
      versos: [
        { en: "Happy birthday to you!", pt: "Feliz aniversário pra você!", gesto: "🎂" },
        { en: "Happy birthday to you!", pt: "Feliz aniversário pra você!", gesto: "🎉" },
        { en: "Happy birthday, dear friend, happy birthday to you!", pt: "Feliz aniversário, amigo!", gesto: "💛" },
      ],
      legenda: "Bata palmas o tempo todo.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada item da festa: "Cake", "Candle", "Balloon".',
      itens: [
        { en: "Cake", pt: "Bolo", imagemUrl: bolo },
        { en: "Candle", pt: "Vela", imagemUrl: vela },
        { en: "Balloon", pt: "Balão", imagemUrl: balao },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'De novo! "Cake", "Candle", "Balloon".',
      itens: [
        { en: "Cake", pt: "Bolo", imagemUrl: bolo },
        { en: "Candle", pt: "Vela", imagemUrl: vela },
        { en: "Balloon", pt: "Balão", imagemUrl: balao },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Candle". Qual a gente assopra?',
      palavraAlvoEn: "Candle",
      opcoes: [
        { nome: "vela", imagemUrl: vela, correta: true },
        { nome: "bolo", imagemUrl: bolo, correta: false },
        { nome: "balão", imagemUrl: balao, correta: false },
      ],
      feedbackAcerto: 'Whoosh! A gente assopra a "candle"!',
      feedbackErro: 'A "Candle" tem chama. Toca na velinha.',
    },
    {
      tipo: "historiaEn",
      titulo: "Lily's birthday",
      cenas: [
        {
          imagemUrl: bolo,
          narracao: 'É aniversário da Lily! Ela vê o "cake" e sorri: "Wow! Big cake!".',
        },
        {
          imagemUrl: vela,
          narracao: 'Tem 4 "candles" acesas. Todos cantam: "Happy birthday to you!".',
        },
        {
          imagemUrl: balao,
          narracao: 'Lily assopra as "candles" e ganha um "balloon" azul. Que festa linda!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Balloon". Qual voa no ar?',
      palavraAlvoEn: "Balloon",
      opcoes: [
        { nome: "balão", imagemUrl: balao, correta: true },
        { nome: "vela", imagemUrl: vela, correta: false },
        { nome: "bolo", imagemUrl: bolo, correta: false },
      ],
      feedbackAcerto: 'Yay! "Balloon" voa no ar!',
      feedbackErro: 'O "Balloon" é cheio de ar. Toca no balão.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: bolo,
      convite:
        'Faz de conta que é seu aniversário! Assopra as "candles": "Whoosh!". Pega o "balloon": "Look, balloon!". E canta: "Happy birthday to me!".',
      dica: "Faça de conta com as mãos formando o bolo.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: coracao,
      pergunta:
        'Quantos aninhos você tem? Já teve "cake" e "balloon" no seu aniversário? Qual foi a cor do seu "balloon"?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Sing with me!",
      convite:
        'Missão: cante "Happy Birthday to you!" pra alguém da família — mesmo que não seja aniversário. Diga no fim: "Cake and balloon!".',
      dicaAdulto: "Grave um vídeo curtinho pro álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Birthday Star",
      mascoteUrl: brilha,
      falaFinal:
        'Yay! "Cake", "Candle" e "Balloon"! Você já sabe fazer festa em inglês!',
    },
  ],
};

const aula19: AulaIng = {
  slug: "s4-a04-party-time",
  titulo: "Party time!",
  subtitulo: "Semana 4 · Dia 4",
  icone: "🎉",
  duracaoMin: 8,
  baseCientifica:
    "Emoção positiva (festa) amplifica memorização — arousal + attention (Cahill & McGaugh 1998).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'É hora da festa! "Party" quer dizer festa. Todo mundo ganha um "gift" — presente! Vamos ver "balloon", "gift" e "party".',
      legenda: "Faça animação de festa com as mãos.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: festa,
      versos: [
        { en: "Party, party, let's have fun!", pt: "Festa, festa, vamos brincar!", gesto: "🎉" },
        { en: "Balloons up in the sky!", pt: "Balões lá no céu!", gesto: "🎈" },
        { en: "Gift, gift, open it up!", pt: "Presente, abre agora!", gesto: "🎁" },
      ],
      legenda: "Dance no ritmo com a criança.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "Party", "Balloon", "Gift".',
      itens: [
        { en: "Party", pt: "Festa", imagemUrl: festa },
        { en: "Balloon", pt: "Balão", imagemUrl: balao },
        { en: "Gift", pt: "Presente", imagemUrl: presente },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete! "Party", "Balloon", "Gift".',
      itens: [
        { en: "Party", pt: "Festa", imagemUrl: festa },
        { en: "Balloon", pt: "Balão", imagemUrl: balao },
        { en: "Gift", pt: "Presente", imagemUrl: presente },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Gift". Qual a gente abre com laço?',
      palavraAlvoEn: "Gift",
      opcoes: [
        { nome: "presente", imagemUrl: presente, correta: true },
        { nome: "balão", imagemUrl: balao, correta: false },
        { nome: "festa", imagemUrl: festa, correta: false },
      ],
      feedbackAcerto: 'Yay! "Gift" é presente!',
      feedbackErro: 'O "Gift" tem laço. Toca no presente.',
    },
    {
      tipo: "historiaEn",
      titulo: "The big party",
      cenas: [
        {
          imagemUrl: festa,
          narracao: 'Todos estão na "party"! Tem música e dança. "Let\'s have fun!".',
        },
        {
          imagemUrl: balao,
          narracao: 'Sobem 10 "balloons" coloridos: "Look! Balloons in the sky!".',
        },
        {
          imagemUrl: presente,
          narracao: 'Cada amigo ganha um "gift". Todos dizem: "Thank you! Yay!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Balloon". Qual sobe no ar?',
      palavraAlvoEn: "Balloon",
      opcoes: [
        { nome: "balão", imagemUrl: balao, correta: true },
        { nome: "presente", imagemUrl: presente, correta: false },
        { nome: "festa", imagemUrl: festa, correta: false },
      ],
      feedbackAcerto: 'Isso! "Balloon" voa!',
      feedbackErro: 'O "Balloon" é cheio de ar. Toca no balão.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: presente,
      convite:
        'Faz de conta que ganhou um presente! Rasga o papel e diz: "Wow! A gift!". Depois pega um balão imaginário: "Look, balloon!". E dança: "Party, party!".',
      dica: "Coloque uma musiquinha e dance junto.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: familia,
      pergunta:
        'Você gosta de "party"? Qual foi a festa mais legal que você já foi? Ganhou "gift"?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Little party at home",
      convite:
        'Missão: monte uma mini-festa em casa. Balão ou desenho de balão, música e uma comidinha. Diga: "This is my party!" e "Look, my balloon!".',
      dicaAdulto: "Vale usar bexiga de verdade. Registre no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Party Star",
      mascoteUrl: brilha,
      falaFinal:
        'Woohoo! "Party", "Balloon", "Gift"! Você é o rei/rainha da festa em inglês!',
    },
  ],
};

const aula20: AulaIng = {
  slug: "s4-a05-thank-you",
  titulo: "Thank you, English!",
  subtitulo: "Semana 4 · Dia 5 · Formatura",
  icone: "🎓",
  duracaoMin: 10,
  baseCientifica:
    "Revisão cumulativa massiva no fim (spaced retrieval, Karpicke & Roediger 2008) + fórmulas sociais (thank you / please).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Chegou o dia da formatura do Maternal! Hoje vamos dizer "thank you" — obrigado! E revisar tudo o que aprendemos em 4 semanas!',
      legenda: "Prepare palmas — é festa de fim de nível.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: coracao,
      versos: [
        { en: "Thank you, thank you, English is fun!", pt: "Obrigado, inglês é divertido!", gesto: "💛" },
        { en: "Hello, family, dog and cat!", pt: "Oi família, cachorro e gato!", gesto: "👋" },
        { en: "Party, cake, and lots of love!", pt: "Festa, bolo e muito amor!", gesto: "🎉" },
      ],
      legenda: "Cante forte no fim.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Revisão final! "Cake", "Balloon", "Gift".',
      itens: [
        { en: "Cake", pt: "Bolo", imagemUrl: bolo },
        { en: "Balloon", pt: "Balão", imagemUrl: balao },
        { en: "Gift", pt: "Presente", imagemUrl: presente },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Mais 3! "Water", "Ice cream", "Party".',
      itens: [
        { en: "Water", pt: "Água", imagemUrl: agua },
        { en: "Ice cream", pt: "Sorvete", imagemUrl: sorvete },
        { en: "Party", pt: "Festa", imagemUrl: festa },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Cake". Qual tem velinhas?',
      palavraAlvoEn: "Cake",
      opcoes: [
        { nome: "bolo", imagemUrl: bolo, correta: true },
        { nome: "sorvete", imagemUrl: sorvete, correta: false },
        { nome: "banana", imagemUrl: banana, correta: false },
      ],
      feedbackAcerto: 'Yay! "Cake" é bolo!',
      feedbackErro: 'O "Cake" tem cobertura e velinhas.',
    },
    {
      tipo: "historiaEn",
      titulo: "My English graduation",
      cenas: [
        {
          imagemUrl: festa,
          narracao: 'Hoje é festa da criança! Ela terminou 4 semanas de inglês. "Big party!".',
        },
        {
          imagemUrl: bolo,
          narracao: 'Tem "cake", tem "balloon", tem "gift". A família canta feliz!',
        },
        {
          imagemUrl: coracao,
          narracao: 'A criança diz: "Thank you, mommy! Thank you, daddy! Thank you, English!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Gift". Qual ganhamos com laço?',
      palavraAlvoEn: "Gift",
      opcoes: [
        { nome: "presente", imagemUrl: presente, correta: true },
        { nome: "vela", imagemUrl: vela, correta: false },
        { nome: "sorvete", imagemUrl: sorvete, correta: false },
      ],
      feedbackAcerto: '"Gift"! Presente com laço!',
      feedbackErro: 'O "Gift" tem laço colorido.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coracao,
      convite:
        'Agora é a formatura! Levante os braços e grite: "I speak English!". Depois: "Thank you, teacher!". E dança um pouco: "Party time!".',
      dica: "Faça uma pose de vitória com a criança.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: familia,
      pergunta:
        'Qual palavra em inglês você mais gostou nas 4 semanas? "Hello", "cake", "dog", "balloon"? Conta pro adulto.',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Show what you know!",
      convite:
        'Missão de formatura: apresente pra 3 pessoas da família 5 palavras que você aprendeu em inglês. Termine com: "Thank you!".',
      dicaAdulto: "Grave um vídeo bem grande — vira lembrança de fim do Maternal.",
    },
    {
      tipo: "celebracao",
      medalha: "Little English Star — Maternal Completo",
      mascoteUrl: brilha,
      falaFinal:
        'Congratulations! Você terminou o Maternal em inglês! 20 aulas, 60+ palavras. Você é oficialmente uma "Little English Star"! Amazing job!',
    },
  ],
};

export const aulasMaternalSemana4: AulaIng[] = [aula16, aula17, aula18, aula19, aula20];
