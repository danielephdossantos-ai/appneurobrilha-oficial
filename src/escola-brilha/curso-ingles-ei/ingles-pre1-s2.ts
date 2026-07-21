import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as presente } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as dado } from "@/assets/neuro-treino/objetos/dado.png.asset.json";

/**
 * Inglês EI — Pré I · Semana 2 · "Count with me!" (1–5)
 * Salto: subitizing bilíngue. Cada número aparece com quantidade real de imagens.
 */

const aula01: AulaIng = {
  slug: "s2-a01-one",
  titulo: "One sun!",
  subtitulo: "Semana 2 · Dia 1",
  icone: "1️⃣",
  duracaoMin: 9,
  baseCientifica:
    "Subitizing bilíngue (Kaufman 1949, Butterworth 2005): a criança reconhece 1 unidade sem contar. Ancorar 'one' num objeto único (o sol) fixa o número como conceito.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Hoje vamos contar em inglês! Vamos começar pelo "one". "One" quer dizer UM. Olha: só um solzinho no céu — "one sun"!',
      legenda: "Levante 1 dedinho ao ouvir 'one'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: sol,
      versos: [
        { en: "One, one, one sun!", pt: "Um, um, um sol!", gesto: "☀️" },
        { en: "One, one, one moon!", pt: "Um, um, uma lua!", gesto: "🌙" },
        { en: "Only one, my friend!", pt: "Só um, meu amigo!", gesto: "☝️" },
      ],
      legenda: "Erga 1 dedinho a cada 'one'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "one sun", "one moon", "one apple".',
      itens: [
        { en: "One sun", pt: "Um sol", imagemUrl: sol },
        { en: "One moon", pt: "Uma lua", imagemUrl: lua },
        { en: "One apple", pt: "Uma maçã", imagemUrl: maca },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais, bem firme: "one", "one", "one".',
      itens: [
        { en: "One sun", pt: "Um sol", imagemUrl: sol },
        { en: "One moon", pt: "Uma lua", imagemUrl: lua },
        { en: "One flower", pt: "Uma flor", imagemUrl: flor },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "one sun". Onde tem só um solzinho?',
      palavraAlvoEn: "One sun",
      opcoes: [
        { nome: "um sol", imagemUrl: sol, correta: true },
        { nome: "uma lua", imagemUrl: lua, correta: false },
        { nome: "uma flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: 'Perfect! "One sun" — um sol no céu.',
      feedbackErro: 'Escuta: "one sun". Procura o sol.',
    },
    {
      tipo: "historiaEn",
      titulo: "One special day",
      cenas: [
        {
          imagemUrl: sol,
          narracao:
            'Sofia acorda e vê "one sun" na janela. "Good morning, one sun!" ela diz.',
        },
        {
          imagemUrl: maca,
          narracao:
            'Na cozinha, tem "one apple" na mesa. Só uma. Sofia pega: "One apple for me!".',
        },
        {
          imagemUrl: lua,
          narracao:
            'De noite, aparece "one moon" bem brilhante. Sofia acena: "Bye bye, one moon!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no lugar que tem SÓ UMA coisinha. "One"!',
      palavraAlvoEn: "One",
      opcoes: [
        { nome: "uma flor", imagemUrl: flor, correta: true },
        { nome: "um sol", imagemUrl: sol, correta: false },
        { nome: "uma lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: 'Isso! Todas mostram "one". Ótima escolha!',
      feedbackErro: 'Olha bem: em todas tem só uma. "One" é UM.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: sol,
      convite:
        'Agora sua vez! Levante "one finger" bem alto e diga: "One! Just one!". Aponte pra 1 coisinha do seu quarto.',
      dica: "Um dedinho só, bem esticadinho.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: maca,
      pergunta:
        'O que você tem SÓ UM em casa? "One" cachorro? "One" mãe? "One" cama? Conta pro Teacher Buddy!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Find one!",
      convite:
        'Missão: ache 3 coisas que existem SÓ UMA em casa. Aponta pra cada e diz bem alto: "One!". Vale o relógio, a televisão, a geladeira.',
      dicaAdulto: "Fotografe o dedinho apontando pra 'one' e cole no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "One Star",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Você aprendeu seu primeiro número em inglês: "one"! Você é uma "One Star"!',
    },
  ],
};

const aula02: AulaIng = {
  slug: "s2-a02-two",
  titulo: "Two apples!",
  subtitulo: "Semana 2 · Dia 2",
  icone: "2️⃣",
  duracaoMin: 9,
  baseCientifica:
    "Subitizing 2 (Trick & Pylyshyn 1994): reconhecer 2 é automático. Ancorar em pares naturais (olhos, mãos, maçãs) consolida a categoria numérica.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi again! Ontem foi "one". Hoje é "two"! "Two" quer dizer DOIS. Olha suas mãos: "two hands"! Olha seus olhos: "two eyes"!',
      legenda: "Mostre 2 dedinhos e 2 mãos.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: maca,
      versos: [
        { en: "Two, two, two apples!", pt: "Dois, dois, duas maçãs!", gesto: "🍎🍎" },
        { en: "Two, two, two hands!", pt: "Dois, dois, duas mãos!", gesto: "🙌" },
        { en: "Clap clap, two claps!", pt: "Bate palma, duas palmas!", gesto: "👏" },
      ],
      legenda: "Bate 2 palminhas em cada 'two'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "two apples", "two stars", "two hearts".',
      itens: [
        { en: "Two apples", pt: "Duas maçãs", imagemUrl: maca },
        { en: "Two stars", pt: "Duas estrelas", imagemUrl: estrela },
        { en: "Two hearts", pt: "Dois corações", imagemUrl: coracao },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete bem alto: "two", "two", "two"!',
      itens: [
        { en: "Two balloons", pt: "Dois balões", imagemUrl: balao },
        { en: "Two flowers", pt: "Duas flores", imagemUrl: flor },
        { en: "Two apples", pt: "Duas maçãs", imagemUrl: maca },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "two apples". Onde estão as duas maçãs?',
      palavraAlvoEn: "Two apples",
      opcoes: [
        { nome: "duas maçãs", imagemUrl: maca, correta: true },
        { nome: "um sol", imagemUrl: sol, correta: false },
        { nome: "uma lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Two apples" — duas maçãs.',
      feedbackErro: 'Escuta: "two" é DOIS. Duas maçãs.',
    },
    {
      tipo: "historiaEn",
      titulo: "Two friends",
      cenas: [
        {
          imagemUrl: maca,
          narracao:
            'Sofia leva "two apples" pra escola: uma pra ela, uma pra amiga.',
        },
        {
          imagemUrl: coracao,
          narracao:
            'No recreio, elas desenham "two hearts" no chão. "One, two — two hearts!".',
        },
        {
          imagemUrl: balao,
          narracao:
            'Na saída, a mamãe dá "two balloons" — um vermelho e um azul. "Yay! Two balloons!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no que tem "two". Onde tem DOIS?',
      palavraAlvoEn: "Two",
      opcoes: [
        { nome: "dois corações", imagemUrl: coracao, correta: true },
        { nome: "um sol", imagemUrl: sol, correta: false },
        { nome: "uma flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: 'Isso! "Two hearts" — dois corações.',
      feedbackErro: '"Two" é DOIS. Ache o par!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: maca,
      convite:
        'Levante "two fingers" e bata "two claps": clap-clap! Depois diga: "Two! Two hands!".',
      dica: "2 palmas curtinhas e rápidas.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: coracao,
      pergunta:
        'De que tem "two" em você? "Two eyes"? "Two ears"? "Two hands"? Aponta cada um!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Two by two!",
      convite:
        'Missão: junte 3 pares em casa. Duas colheres, duas meias, dois brinquedos. Aponta e diz: "Two!".',
      dicaAdulto: "Cole no álbum uma foto dos pares organizados.",
    },
    {
      tipo: "celebracao",
      medalha: "Two Star",
      mascoteUrl: buddy,
      falaFinal:
        'Wonderful! Já sabe "one" e "two"! Você é uma "Two Star"!',
    },
  ],
};

const aula03: AulaIng = {
  slug: "s2-a03-three",
  titulo: "Three stars!",
  subtitulo: "Semana 2 · Dia 3",
  icone: "3️⃣",
  duracaoMin: 9,
  baseCientifica:
    "Subitizing 3 é o último número reconhecido sem contar (Feigenson 2004). Fixá-lo antes do 4 e 5 dá base sólida pro senso numérico.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje é dia de "three"! "Three" quer dizer TRÊS. Olha: três estrelinhas no céu — "three stars"!',
      legenda: "Mostre 3 dedinhos.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: estrela,
      versos: [
        { en: "One, two, three — three stars!", pt: "Um, dois, três — três estrelas!", gesto: "⭐⭐⭐" },
        { en: "One, two, three — three friends!", pt: "Um, dois, três — três amigos!", gesto: "🧒🧒🧒" },
        { en: "Count with me!", pt: "Conta comigo!", gesto: "🎵" },
      ],
      legenda: "Bata 3 palmas em cada verso.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "three stars", "three balloons", "three flowers".',
      itens: [
        { en: "Three stars", pt: "Três estrelas", imagemUrl: estrela },
        { en: "Three balloons", pt: "Três balões", imagemUrl: balao },
        { en: "Three flowers", pt: "Três flores", imagemUrl: flor },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Vamos contar juntos: "one, two, three"!',
      itens: [
        { en: "One", pt: "Um", imagemUrl: sol },
        { en: "Two", pt: "Dois", imagemUrl: maca },
        { en: "Three", pt: "Três", imagemUrl: estrela },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "three stars". Onde estão as três estrelinhas?',
      palavraAlvoEn: "Three stars",
      opcoes: [
        { nome: "três estrelas", imagemUrl: estrela, correta: true },
        { nome: "um sol", imagemUrl: sol, correta: false },
        { nome: "duas maçãs", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Isso! "Three stars" — três estrelas brilhando!',
      feedbackErro: '"Three" é TRÊS. Procura o grupo de 3.',
    },
    {
      tipo: "historiaEn",
      titulo: "Three little balloons",
      cenas: [
        {
          imagemUrl: balao,
          narracao:
            'Sofia ganha "three balloons": one red, one yellow, one blue. Ela sorri.',
        },
        {
          imagemUrl: flor,
          narracao:
            'No caminho pra casa, ela vê "three flowers" no jardim. "One, two, three!".',
        },
        {
          imagemUrl: estrela,
          narracao:
            'À noite, "three stars" piscam no céu. Sofia sussurra: "Good night, three stars!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no que tem "three". Onde tem TRÊS?',
      palavraAlvoEn: "Three",
      opcoes: [
        { nome: "três balões", imagemUrl: balao, correta: true },
        { nome: "um sol", imagemUrl: sol, correta: false },
        { nome: "duas maçãs", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Three balloons" — três balões!',
      feedbackErro: '"Three" é TRÊS. Ache o grupinho de 3.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: estrela,
      convite:
        'Bata "three claps": clap-clap-clap! Depois pule "three times" — one, two, three! Diga: "Three! I can count!".',
      dica: "3 palmas + 3 pulinhos.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: balao,
      pergunta:
        'Se eu te desse "three balloons", quais cores você escolheria? Red, yellow, blue, green?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Count to three!",
      convite:
        'Missão: ache 3 grupos de "three" em casa. Três colheres, três livros, três meias. Aponta e conta em inglês: "one, two, three!".',
      dicaAdulto: "Cole no álbum uma foto de cada grupinho.",
    },
    {
      tipo: "celebracao",
      medalha: "Three Star",
      mascoteUrl: buddy,
      falaFinal:
        'Excellent! One, two, three! Você é uma "Three Star"!',
    },
  ],
};

const aula04: AulaIng = {
  slug: "s2-a04-four",
  titulo: "Four hearts!",
  subtitulo: "Semana 2 · Dia 4",
  icone: "4️⃣",
  duracaoMin: 9,
  baseCientifica:
    "Contagem enumerativa (Gelman & Gallistel): a partir de 4 a criança deixa o subitizing e começa a CONTAR ponto a ponto. Introduzir 'four' com apontar dedo por dedo.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, superstar! Hoje é "four"! "Four" quer dizer QUATRO. Aponta com o dedinho: one, two, three, four!',
      legenda: "Mostre 4 dedinhos, um por um.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: coracao,
      versos: [
        { en: "One, two, three, four — four hearts!", pt: "Um, dois, três, quatro — quatro corações!", gesto: "❤️❤️❤️❤️" },
        { en: "Four little balloons flying high!", pt: "Quatro balões voando alto!", gesto: "🎈" },
        { en: "Count them all!", pt: "Conta todos!", gesto: "👆" },
      ],
      legenda: "Aponte 4 vezes com o dedinho.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "four hearts", "four stars", "four balloons".',
      itens: [
        { en: "Four hearts", pt: "Quatro corações", imagemUrl: coracao },
        { en: "Four stars", pt: "Quatro estrelas", imagemUrl: estrela },
        { en: "Four balloons", pt: "Quatro balões", imagemUrl: balao },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Vamos contar: "one, two, three, four"!',
      itens: [
        { en: "Three", pt: "Três", imagemUrl: estrela },
        { en: "Four", pt: "Quatro", imagemUrl: coracao },
        { en: "Four flowers", pt: "Quatro flores", imagemUrl: flor },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "four hearts". Onde estão os quatro corações?',
      palavraAlvoEn: "Four hearts",
      opcoes: [
        { nome: "quatro corações", imagemUrl: coracao, correta: true },
        { nome: "duas maçãs", imagemUrl: maca, correta: false },
        { nome: "um sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: 'Isso! "Four hearts" — quatro corações!',
      feedbackErro: '"Four" é QUATRO. Conta com o dedinho: 1, 2, 3, 4.',
    },
    {
      tipo: "historiaEn",
      titulo: "Four little friends",
      cenas: [
        {
          imagemUrl: presente,
          narracao:
            'Aniversário! Sofia ganha "four gifts". Ela conta: "one, two, three, four gifts!".',
        },
        {
          imagemUrl: balao,
          narracao:
            'No teto, "four balloons" — red, yellow, blue e green! Todas as cores!',
        },
        {
          imagemUrl: coracao,
          narracao:
            'Ela desenha "four hearts" pra família: um pro papai, um pra mamãe, um pro irmão, um pra ela.',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: qual figura mostra "four"?',
      palavraAlvoEn: "Four",
      opcoes: [
        { nome: "quatro balões", imagemUrl: balao, correta: true },
        { nome: "três estrelas", imagemUrl: estrela, correta: false },
        { nome: "duas maçãs", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Four balloons" — quatro balões!',
      feedbackErro: 'Conta com o dedinho: um, dois, três, quatro. "Four"!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coracao,
      convite:
        'Pule "four times": jump-jump-jump-jump! Depois conta os dedinhos de uma mão só (menos o polegar): "one, two, three, four!".',
      dica: "4 pulinhos, 4 dedinhos.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: presente,
      pergunta:
        'Quantas pessoas moram na sua casa? Conta em inglês! Você é "one", mamãe é "two"...',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Count to four!",
      convite:
        'Missão: junte "four" objetos iguais em casa. Quatro tampas, quatro moedas, quatro brinquedos. Aponta cada um: "one, two, three, four!".',
      dicaAdulto: "Cole a foto do grupinho de 4 no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Four Star",
      mascoteUrl: buddy,
      falaFinal:
        'Fantastic! One, two, three, four! Você é uma "Four Star"!',
    },
  ],
};

const aula05: AulaIng = {
  slug: "s2-a05-five",
  titulo: "High five!",
  subtitulo: "Semana 2 · Dia 5",
  icone: "🖐️",
  duracaoMin: 10,
  baseCientifica:
    "Ancoragem corporal (Butterworth 1999): 'five' se fixa naturalmente na mão. 'High five' associa número + gesto + emoção, memória máxima.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, my friend! Formatura da semana! Hoje é "five"! "Five" quer dizer CINCO. Abre a mão: "high five!". Cinco dedinhos!',
      legenda: "Erga a mão aberta e bate no ar.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: bola,
      versos: [
        { en: "One, two, three, four, FIVE!", pt: "Um, dois, três, quatro, CINCO!", gesto: "🖐️" },
        { en: "Give me five, high five!", pt: "Bate aqui, cinco em cima!", gesto: "✋" },
        { en: "I can count to five!", pt: "Eu conto até cinco!", gesto: "🥳" },
      ],
      legenda: "Bate 'high five' na mão de quem estiver perto.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura e conta: "one, two, three, four, five"!',
      itens: [
        { en: "One sun", pt: "Um sol", imagemUrl: sol },
        { en: "Two apples", pt: "Duas maçãs", imagemUrl: maca },
        { en: "Three stars", pt: "Três estrelas", imagemUrl: estrela },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Continua: "four" e "five"!',
      itens: [
        { en: "Four hearts", pt: "Quatro corações", imagemUrl: coracao },
        { en: "Five balls", pt: "Cinco bolas", imagemUrl: bola },
        { en: "High five!", pt: "Bate aqui!", gesto: "✋", imagemUrl: dado } as any,
      ].map(({ en, pt, imagemUrl }) => ({ en, pt, imagemUrl })),
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "five balls". Onde estão as cinco bolinhas?',
      palavraAlvoEn: "Five balls",
      opcoes: [
        { nome: "cinco bolas", imagemUrl: bola, correta: true },
        { nome: "três estrelas", imagemUrl: estrela, correta: false },
        { nome: "uma lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: 'Isso! "Five balls" — cinco bolas!',
      feedbackErro: 'Conta com o dedinho: um, dois, três, quatro, cinco. "Five"!',
    },
    {
      tipo: "historiaEn",
      titulo: "The high five party",
      cenas: [
        {
          imagemUrl: balao,
          narracao:
            'Sofia faz uma festinha. "Five friends" chegam: one, two, three, four, five!',
        },
        {
          imagemUrl: presente,
          narracao:
            'Cada um traz um presentinho. "Five gifts" na mesa! "So many!" ela diz.',
        },
        {
          imagemUrl: bola,
          narracao:
            'No final, todos batem "high five!" — cinco mãozinhas juntas no ar. "One, two, three, four, five — HIGH FIVE!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Qual mostra "five"? Onde tem CINCO?',
      palavraAlvoEn: "Five",
      opcoes: [
        { nome: "cinco bolas", imagemUrl: bola, correta: true },
        { nome: "quatro corações", imagemUrl: coracao, correta: false },
        { nome: "duas maçãs", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Five" — cinco!',
      feedbackErro: 'Conta com o dedinho da mão inteira: um, dois, três, quatro, cinco.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: bola,
      convite:
        'Abre a mão inteira e diga: "HIGH FIVE!". Bate na palma da mamãe, do papai, do irmão. Cada high five vale um "five!".',
      dica: "Sorriso grande + palma no alto.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: bola,
      pergunta:
        'Quantos anos você tem? Você conta na mão? Mostra em inglês: "one, two, three, four, five"!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "High five party!",
      convite:
        'Missão de formatura: bata "high five" com "five" pessoas diferentes hoje. Cada um você conta: "one, two, three, four, five!".',
      dicaAdulto:
        "Tira foto do 'high five' com cada pessoa e cola no álbum — formatura da Semana 2!",
    },
    {
      tipo: "celebracao",
      medalha: "High Five Star — Semana 2 Pré I",
      mascoteUrl: buddy,
      falaFinal:
        'You did it! One, two, three, four, FIVE! Você conta até cinco em inglês! Você é uma "High Five Star"! Give me five!',
    },
  ],
};

export const semana2Pre1: AulaIng[] = [aula01, aula02, aula03, aula04, aula05];
