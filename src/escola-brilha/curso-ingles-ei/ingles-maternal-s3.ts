import type { AulaIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as vaca } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as porco } from "@/assets/neuro-treino/objetos/porco.png.asset.json";
import { url as ovelha } from "@/assets/neuro-treino/objetos/ovelha.png.asset.json";
import { url as galinha } from "@/assets/neuro-treino/objetos/galinha.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as tigre } from "@/assets/neuro-treino/objetos/tigre.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as agua } from "@/assets/neuro-treino/objetos/cristal-agua.png.asset.json";
import { url as jardim } from "@/assets/neuro-treino/objetos/jardim.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";

/**
 * Semana 3 — Animal friends.
 * Vocabulário-alvo: cow/pig/sheep · chicken/rabbit/fish ·
 * lion/tiger/bird · animal sounds review · favorite animal.
 * Mesmo esqueleto fixo de 11 momentos.
 */

const aula11: AulaIng = {
  slug: "s3-a01-farm-friends",
  titulo: "On the farm",
  subtitulo: "Semana 3 · Dia 1",
  icone: "🐄",
  duracaoMin: 8,
  baseCientifica:
    "Categorização semântica (fazenda) — Rosch 1978. Organiza a memória em rede em vez de palavras isoladas.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hoje vamos até a fazenda em inglês! Escuta: "farm". Vamos conhecer 3 amigos: "cow", "pig" e "sheep".',
      legenda: "Faça o som de cada animal com a criança.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: vaca,
      versos: [
        { en: "The cow says moo, moo, moo!", pt: "A vaca faz muu, muu, muu!", gesto: "🐄" },
        { en: "The pig says oink, oink!", pt: "O porco faz oinc, oinc!", gesto: "🐷" },
        { en: "The sheep says baa, baa!", pt: "A ovelhinha faz mééé!", gesto: "🐑" },
      ],
      legenda: "Faça o som de cada animal ao cantar.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada animal da fazenda: "Cow", "Pig", "Sheep".',
      itens: [
        { en: "Cow", pt: "Vaca", imagemUrl: vaca },
        { en: "Pig", pt: "Porco", imagemUrl: porco },
        { en: "Sheep", pt: "Ovelha", imagemUrl: ovelha },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'De novo, mais forte! "Cow", "Pig", "Sheep".',
      itens: [
        { en: "Cow", pt: "Vaca", imagemUrl: vaca },
        { en: "Pig", pt: "Porco", imagemUrl: porco },
        { en: "Sheep", pt: "Ovelha", imagemUrl: ovelha },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Cow". Quem faz muu?',
      palavraAlvoEn: "Cow",
      opcoes: [
        { nome: "vaca", imagemUrl: vaca, correta: true },
        { nome: "porco", imagemUrl: porco, correta: false },
        { nome: "ovelha", imagemUrl: ovelha, correta: false },
      ],
      feedbackAcerto: 'Isso! "Cow" faz moo, moo!',
      feedbackErro: 'Escuta: "Cow" faz muu. Toca na vaquinha.',
    },
    {
      tipo: "historiaEn",
      titulo: "A day at the farm",
      cenas: [
        {
          imagemUrl: vaca,
          narracao: 'A "cow" acorda e diz: "Moo! Good morning, farm!".',
        },
        {
          imagemUrl: porco,
          narracao: 'O "pig" corre pra lama e brinca: "Oink, oink! I love mud!".',
        },
        {
          imagemUrl: ovelha,
          narracao: 'A "sheep" caminha devagar e canta: "Baa, baa! Hello, friends!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Agora toque no "Pig". Quem faz oinc-oinc?',
      palavraAlvoEn: "Pig",
      opcoes: [
        { nome: "porco", imagemUrl: porco, correta: true },
        { nome: "vaca", imagemUrl: vaca, correta: false },
        { nome: "ovelha", imagemUrl: ovelha, correta: false },
      ],
      feedbackAcerto: 'Muito bem! "Pig" faz oink!',
      feedbackErro: 'O "Pig" adora lama. Toca no porquinho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: vaca,
      convite:
        'Faz de conta que você está na fazenda! Anda de quatro e diz: "I am a cow! Moo!". Depois: "I am a pig! Oink!". E: "I am a sheep! Baa!".',
      dica: "Vale usar o sofá como cerca da fazenda.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: jardim,
      pergunta:
        'Você já viu uma "cow", um "pig" ou uma "sheep" de verdade? Onde? Qual é o som que você mais gosta de imitar?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Farm sounds",
      convite:
        'Missão: mostre para o adulto 3 animais em livros ou fotos e diga em inglês: "cow", "pig", "sheep". Faça o som de cada um.',
      dicaAdulto: "Gravar áudio curto com os sons vira memória gostosa.",
    },
    {
      tipo: "celebracao",
      medalha: "Farm Star",
      mascoteUrl: brilha,
      falaFinal:
        'Wow! Você aprendeu 3 amigos da fazenda: "Cow", "Pig" e "Sheep". Great job!',
    },
  ],
};

const aula12: AulaIng = {
  slug: "s3-a02-in-the-yard",
  titulo: "In the yard",
  subtitulo: "Semana 3 · Dia 2",
  icone: "🐰",
  duracaoMin: 8,
  baseCientifica:
    "Aprender por proximidade — animais que a criança pode ver de perto (Krashen — comprehensible input).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Vamos ao quintal! No inglês: "yard". Lá tem uma "chicken", um "rabbit" e um "fish" nadando.',
      legenda: "Aponte para figuras enquanto escuta.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: coelho,
      versos: [
        { en: "The chicken says cluck, cluck!", pt: "A galinha faz có, có!", gesto: "🐔" },
        { en: "The rabbit hops, hop, hop!", pt: "O coelho pula, hop, hop!", gesto: "🐰" },
        { en: "The fish swims, splash, splash!", pt: "O peixe nada, splash!", gesto: "🐟" },
      ],
      legenda: "Pule quando cantar 'rabbit hops'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada bicho: "Chicken", "Rabbit", "Fish".',
      itens: [
        { en: "Chicken", pt: "Galinha", imagemUrl: galinha },
        { en: "Rabbit", pt: "Coelho", imagemUrl: coelho },
        { en: "Fish", pt: "Peixe", imagemUrl: peixe },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'De novo! "Chicken", "Rabbit", "Fish".',
      itens: [
        { en: "Chicken", pt: "Galinha", imagemUrl: galinha },
        { en: "Rabbit", pt: "Coelho", imagemUrl: coelho },
        { en: "Fish", pt: "Peixe", imagemUrl: peixe },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Rabbit". Quem pula?',
      palavraAlvoEn: "Rabbit",
      opcoes: [
        { nome: "coelho", imagemUrl: coelho, correta: true },
        { nome: "galinha", imagemUrl: galinha, correta: false },
        { nome: "peixe", imagemUrl: peixe, correta: false },
      ],
      feedbackAcerto: 'Isso! "Rabbit" hop, hop, hop!',
      feedbackErro: 'O "Rabbit" pula. Toca no coelhinho.',
    },
    {
      tipo: "historiaEn",
      titulo: "The little pond",
      cenas: [
        {
          imagemUrl: galinha,
          narracao: 'A "chicken" bota um ovinho e diz: "Cluck, cluck! Good morning!".',
        },
        {
          imagemUrl: coelho,
          narracao: 'O "rabbit" pula, pula: "Hop, hop! Where is my carrot?".',
        },
        {
          imagemUrl: peixe,
          narracao: 'No laguinho, o "fish" nada feliz: "Splash! Hello, friends!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Fish". Quem nada na água?',
      palavraAlvoEn: "Fish",
      opcoes: [
        { nome: "peixe", imagemUrl: peixe, correta: true },
        { nome: "coelho", imagemUrl: coelho, correta: false },
        { nome: "galinha", imagemUrl: galinha, correta: false },
      ],
      feedbackAcerto: 'Splash! "Fish" nada na água!',
      feedbackErro: 'O "Fish" vive na "water". Toca no peixinho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coelho,
      convite:
        'Agora imite! Pule como o "rabbit": "Hop, hop!". Nade com as mãos como o "fish": "Splash!". E bota as mãos na cintura como a "chicken": "Cluck, cluck!".',
      dica: "Vale fazer o percurso indo de um cômodo a outro imitando cada animal.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: agua,
      pergunta:
        'Você tem algum bichinho em casa ou no quintal? É "chicken", "rabbit", "fish" ou outro? Como ele faz?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Backyard hunt",
      convite:
        'Missão: procure com a família 1 bichinho de verdade (formiguinha, passarinho, gato) e diga em inglês o nome do animal que ele parece.',
      dicaAdulto: "Vale ir até o quintal ou a janela.",
    },
    {
      tipo: "celebracao",
      medalha: "Yard Star",
      mascoteUrl: brilha,
      falaFinal:
        'Amazing! Agora você conhece "Chicken", "Rabbit" e "Fish". Você é demais!',
    },
  ],
};

const aula13: AulaIng = {
  slug: "s3-a03-big-animals",
  titulo: "Big animals!",
  subtitulo: "Semana 3 · Dia 3",
  icone: "🦁",
  duracaoMin: 8,
  baseCientifica:
    "Contraste tamanho (big/small) — categorização visual ajuda formação de conceito (Bruner 1966).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Vamos ao zoo em inglês! No zoológico tem animais "big" — grandes! Escuta: "lion", "tiger", "bird".',
      legenda: "Abra os braços para mostrar 'big'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: leao,
      versos: [
        { en: "The lion says roar, roar, roar!", pt: "O leão faz raaar!", gesto: "🦁" },
        { en: "The tiger says grrr, grrr!", pt: "O tigre faz grrr!", gesto: "🐯" },
        { en: "The bird sings tweet, tweet!", pt: "O passarinho canta piu, piu!", gesto: "🐦" },
      ],
      legenda: "Ruja bem alto no 'lion'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada animal grande: "Lion", "Tiger", "Bird".',
      itens: [
        { en: "Lion", pt: "Leão", imagemUrl: leao },
        { en: "Tiger", pt: "Tigre", imagemUrl: tigre },
        { en: "Bird", pt: "Passarinho", imagemUrl: passaro },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'De novo! "Lion", "Tiger", "Bird".',
      itens: [
        { en: "Lion", pt: "Leão", imagemUrl: leao },
        { en: "Tiger", pt: "Tigre", imagemUrl: tigre },
        { en: "Bird", pt: "Passarinho", imagemUrl: passaro },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Lion". Quem tem a juba grande?',
      palavraAlvoEn: "Lion",
      opcoes: [
        { nome: "leão", imagemUrl: leao, correta: true },
        { nome: "tigre", imagemUrl: tigre, correta: false },
        { nome: "passarinho", imagemUrl: passaro, correta: false },
      ],
      feedbackAcerto: 'Roar! "Lion" é o rei da selva!',
      feedbackErro: 'O "Lion" tem juba grande. Toca no leão.',
    },
    {
      tipo: "historiaEn",
      titulo: "At the zoo",
      cenas: [
        {
          imagemUrl: leao,
          narracao: 'No zoo, o "lion" acorda e ruge bem forte: "Roar! I am the king!".',
        },
        {
          imagemUrl: tigre,
          narracao: 'O "tiger" corre pela grama e diz: "Grrr! I am fast!".',
        },
        {
          imagemUrl: passaro,
          narracao: 'Um "bird" pequenininho voa e canta: "Tweet, tweet! Hello, big friends!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Tiger". Quem tem listras?',
      palavraAlvoEn: "Tiger",
      opcoes: [
        { nome: "tigre", imagemUrl: tigre, correta: true },
        { nome: "leão", imagemUrl: leao, correta: false },
        { nome: "passarinho", imagemUrl: passaro, correta: false },
      ],
      feedbackAcerto: 'Grrr! "Tiger" tem listras!',
      feedbackErro: 'O "Tiger" tem listras pretas. Toca no tigre.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: leao,
      convite:
        'Vamos rugir! Faz cara de leão e diz: "I am a lion! Roar!". Depois: "I am a tiger! Grrr!". No fim voe como o "bird": "Tweet!".',
      dica: "Mostre as garras (mão) e ande de quatro.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: coracao,
      pergunta:
        'Qual animal grande você acha mais legal — "lion", "tiger" ou "bird"? Por quê?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Roar with me!",
      convite:
        'Missão: escolha 1 animal grande e faça o rugido com um adulto. Grite bem alto: "Roar!" ou "Grrr!". Depois diga o nome em inglês.',
      dicaAdulto: "Faça junto — vira brincadeira de imitar animais.",
    },
    {
      tipo: "celebracao",
      medalha: "Zoo Star",
      mascoteUrl: brilha,
      falaFinal:
        'Roar! Você aprendeu "Lion", "Tiger" e "Bird". Você é rei do inglês!',
    },
  ],
};

const aula14: AulaIng = {
  slug: "s3-a04-animal-sounds",
  titulo: "Animal sounds",
  subtitulo: "Semana 3 · Dia 4",
  icone: "🔊",
  duracaoMin: 8,
  baseCientifica:
    "Onomatopeia integra som + imagem + palavra (triple coding) — fixa vocabulário rapidamente (Perry 2015).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hoje é dia de sons! Cada bicho fala diferente em inglês. Escuta: "dog says woof", "cat says meow", "cow says moo".',
      legenda: "Encoraje a criança a repetir cada som.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: cachorro,
      versos: [
        { en: "Old MacDonald had a farm, E-I-E-I-O!", pt: "Seu Lobato tinha uma fazenda, ia-ia-ô!", gesto: "🎵" },
        { en: "With a woof, woof here, and a meow, meow there!", pt: "Com um au-au aqui, e um miau-miau ali!", gesto: "🐶🐱" },
        { en: "Moo, moo everywhere! E-I-E-I-O!", pt: "Muu, muu por toda parte!", gesto: "🐄" },
      ],
      legenda: "Bata palma no ritmo.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca e escuta o som: "Dog" faz woof, "Cat" faz meow, "Cow" faz moo.',
      itens: [
        { en: "Dog", pt: "Cachorro", imagemUrl: cachorro },
        { en: "Cat", pt: "Gato", imagemUrl: gato },
        { en: "Cow", pt: "Vaca", imagemUrl: vaca },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete: "Woof, woof — dog!", "Meow, meow — cat!", "Moo, moo — cow!".',
      itens: [
        { en: "Dog", pt: "Cachorro", imagemUrl: cachorro },
        { en: "Cat", pt: "Gato", imagemUrl: gato },
        { en: "Cow", pt: "Vaca", imagemUrl: vaca },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Quem faz "meow"? Toque na figura certa.',
      palavraAlvoEn: "Cat",
      opcoes: [
        { nome: "gato", imagemUrl: gato, correta: true },
        { nome: "cachorro", imagemUrl: cachorro, correta: false },
        { nome: "vaca", imagemUrl: vaca, correta: false },
      ],
      feedbackAcerto: 'Meow! "Cat" faz meow!',
      feedbackErro: 'Escuta: "meow, meow" é o gato — "cat".',
    },
    {
      tipo: "historiaEn",
      titulo: "Guess the sound",
      cenas: [
        {
          imagemUrl: cachorro,
          narracao: 'Escuta: "Woof, woof!". Quem é? É o "dog"! Muito bem!',
        },
        {
          imagemUrl: gato,
          narracao: 'Agora: "Meow, meow!". Quem é? É o "cat"!',
        },
        {
          imagemUrl: vaca,
          narracao: 'E este: "Moo, moo!". É a "cow"! Você é craque!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Quem faz "woof, woof"? Toque na figura certa.',
      palavraAlvoEn: "Dog",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "vaca", imagemUrl: vaca, correta: false },
      ],
      feedbackAcerto: 'Woof! "Dog" faz woof, woof!',
      feedbackErro: 'O "Dog" faz woof. Toca no cachorro.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: gato,
      convite:
        'Vira estátua de bicho! O adulto fala um som e você imita. "Woof!" → dog! "Meow!" → cat! "Moo!" → cow!',
      dica: "Vale trocar de papel — a criança fala o som e o adulto imita.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: passaro,
      pergunta:
        'Qual som de animal você acha mais engraçado — "woof", "meow" ou "moo"? Sabe outro som de bicho em inglês?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Sound game",
      convite:
        'Missão: com a família, um faz o som e o outro diz o nome em inglês. Trocar 3 vezes cada.',
      dicaAdulto: "Vale gravar áudios curtos e mandar para vovó/vovô.",
    },
    {
      tipo: "celebracao",
      medalha: "Sound Star",
      mascoteUrl: brilha,
      falaFinal:
        'Great! Você já sabe: "Dog woof", "Cat meow", "Cow moo". Você é um dicionário de bichos!',
    },
  ],
};

const aula15: AulaIng = {
  slug: "s3-a05-my-favorite-animal",
  titulo: "My favorite animal",
  subtitulo: "Semana 3 · Dia 5",
  icone: "💛",
  duracaoMin: 8,
  baseCientifica:
    "Escolha pessoal + reuso — meta-cognição inicial e revisão cumulativa consolidam vocabulário (Ellis 2003).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hoje você escolhe! Qual é o seu "favorite animal"? Vamos revisar todos os amigos da semana em inglês.',
      legenda: "Peça a criança para pensar no bichinho preferido.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: coracao,
      versos: [
        { en: "I love the dog, woof, woof!", pt: "Eu amo o cachorro!", gesto: "🐶" },
        { en: "I love the cat, meow, meow!", pt: "Eu amo o gato!", gesto: "🐱" },
        { en: "I love my favorite animal!", pt: "Eu amo o meu animal favorito!", gesto: "💛" },
      ],
      legenda: "Abrace-se ao cantar 'I love'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Revisão! Toca em cada amigo: "Cow", "Rabbit", "Lion".',
      itens: [
        { en: "Cow", pt: "Vaca", imagemUrl: vaca },
        { en: "Rabbit", pt: "Coelho", imagemUrl: coelho },
        { en: "Lion", pt: "Leão", imagemUrl: leao },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Mais 3 amigos: "Fish", "Tiger", "Sheep".',
      itens: [
        { en: "Fish", pt: "Peixe", imagemUrl: peixe },
        { en: "Tiger", pt: "Tigre", imagemUrl: tigre },
        { en: "Sheep", pt: "Ovelha", imagemUrl: ovelha },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Sheep". Quem faz mééé?',
      palavraAlvoEn: "Sheep",
      opcoes: [
        { nome: "ovelha", imagemUrl: ovelha, correta: true },
        { nome: "porco", imagemUrl: porco, correta: false },
        { nome: "galinha", imagemUrl: galinha, correta: false },
      ],
      feedbackAcerto: 'Baa! "Sheep" é a ovelhinha!',
      feedbackErro: 'A "Sheep" faz mééé. Toca na ovelhinha.',
    },
    {
      tipo: "historiaEn",
      titulo: "The big parade",
      cenas: [
        {
          imagemUrl: cachorro,
          narracao: 'Todos os animais fazem um desfile! O "dog" começa: "Woof! Follow me!".',
        },
        {
          imagemUrl: coelho,
          narracao: 'Depois vem o "rabbit" pulando: "Hop, hop!". E a "chicken": "Cluck!".',
        },
        {
          imagemUrl: leao,
          narracao: 'Por último, o "lion" ruge bem alto: "Roar! We are all friends!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Fish". Quem nada?',
      palavraAlvoEn: "Fish",
      opcoes: [
        { nome: "peixe", imagemUrl: peixe, correta: true },
        { nome: "passarinho", imagemUrl: passaro, correta: false },
        { nome: "tigre", imagemUrl: tigre, correta: false },
      ],
      feedbackAcerto: 'Splash! "Fish" nada!',
      feedbackErro: 'O "Fish" vive na água. Toca no peixinho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coracao,
      convite:
        'Agora escolhe seu favorito! Aponte pra uma figura e diga: "My favorite animal is... dog!" (ou cat, lion, rabbit — o que você mais amar).',
      dica: "Vale escolher mais de um.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: leao,
      pergunta:
        'Por que esse é o seu "favorite"? É porque ele é grande, pequeno, fofinho, engraçado? Conta pro adulto.',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Family favorites",
      convite:
        'Missão: pergunte para 3 pessoas da família qual é o "favorite animal" delas. Repita em inglês: "My mom loves the cat!".',
      dicaAdulto: "Anote as respostas — vira gráfico gostoso no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Animal Master — Semana 3",
      mascoteUrl: brilha,
      falaFinal:
        'You did it! Você conhece 10 animais em inglês! "Little Animal Master"! Amazing!',
    },
  ],
};

export const aulasMaternalSemana3: AulaIng[] = [aula11, aula12, aula13, aula14, aula15];
