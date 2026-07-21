import type { CursoIng, AulaIng } from "./types";
import { aulasMaternalSemana2 } from "./ingles-maternal-s2";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as pai } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as bebe } from "@/assets/neuro-treino/objetos/bebe.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as suco } from "@/assets/neuro-treino/objetos/suco.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as ursinho } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";

/**
 * Inglês EI — Maternal (3–4 anos)
 *
 * Método SPEB adaptado a EI (Semana 1 · 5 aulas):
 *  - Foco em ORALIDADE: escutar → imitar → brincar. Nunca ler palavras.
 *  - Cada palavra-alvo aparece 6× ao longo da aula (repetição espaçada
 *    curta, Ellis 2003; Nation 2001).
 *  - Narração em PT com a palavra-alvo entre "aspas" para acionar
 *    a voz nativa en-US do player.
 */

// ============================================================
// AULA 01 — Hello, friend!
// ============================================================
const aula01: AulaIng = {
  slug: "s1-a01-hello-friend",
  titulo: 'Hello, friend!',
  subtitulo: "Semana 1 · Dia 1",
  icone: "👋",
  duracaoMin: 8,
  baseCientifica:
    "Introdução afetiva de saudação (routines-based instruction, Krashen 1982) + input compreensível com apoio visual.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Oi! Eu sou o Brilha. Hoje vamos aprender a cumprimentar em inglês. Escuta comigo: "Hello!". "Hello" quer dizer OLÁ.',
      legenda: "Sente-se ao lado da criança e acene junto quando ouvir 'Hello'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: menino,
      versos: [
        { en: "Hello, hello, how are you?", pt: "Olá, olá, como você está?", gesto: "👋" },
        { en: "I am fine, thank you!", pt: "Eu estou bem, obrigado!", gesto: "😊" },
        { en: "Hi, hi, hi!", pt: "Oi, oi, oi!", gesto: "🙌" },
      ],
      legenda: "Cante batendo palma. Ouça 2 vezes.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio:
        'Toca em cada figura para ouvir a palavra em inglês. Escuta: "Hello", "Hi", "Bye".',
      itens: [
        { en: "Hello", pt: "Olá", imagemUrl: menino },
        { en: "Hi", pt: "Oi", imagemUrl: menina },
        { en: "Bye", pt: "Tchau", imagemUrl: abraco },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais! Toca de novo e repete alto: "Hello", "Hi", "Bye".',
      itens: [
        { en: "Hello", pt: "Olá", imagemUrl: menino },
        { en: "Hi", pt: "Oi", imagemUrl: menina },
        { en: "Bye", pt: "Tchau", imagemUrl: abraco },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Ouça bem e toque na figura que mostra alguém dizendo "Hello!".',
      palavraAlvoEn: "Hello",
      opcoes: [
        { nome: "menino acenando", imagemUrl: menino, correta: true },
        { nome: "abraço de despedida", imagemUrl: abraco, correta: false },
        { nome: "gato", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: 'Perfeito! Ele acena e diz "Hello!".',
      feedbackErro: 'Quase! "Hello" é o cumprimento. Tenta a criança que acena.',
    },
    {
      tipo: "historiaEn",
      titulo: "Lily meets a friend",
      cenas: [
        {
          imagemUrl: menina,
          narracao:
            'Esta é a Lily. Ela chega no parque e vê uma amiga. Lily levanta a mão e diz: "Hello!".',
        },
        {
          imagemUrl: menino,
          narracao:
            'A amiga dela, chamada Tom, sorri e responde: "Hi, Lily!". Que legal!',
        },
        {
          imagemUrl: abraco,
          narracao:
            'No final, quando a mamãe chama, Lily acena e diz: "Bye, Tom!". Tom também: "Bye, Lily!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Quando a mamãe chama para ir embora, o que a gente diz? Toque em quem diz "Bye!".',
      palavraAlvoEn: "Bye",
      opcoes: [
        { nome: "acenando tchau", imagemUrl: abraco, correta: true },
        { nome: "menina", imagemUrl: menina, correta: false },
        { nome: "cachorro", imagemUrl: cachorro, correta: false },
      ],
      feedbackAcerto: 'Isso! Quando vai embora a gente diz "Bye!".',
      feedbackErro: 'Ouça de novo: "Bye" é tchau. Procure quem está se despedindo.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menino,
      convite:
        'Agora é a sua vez! Acene com a mãozinha e diga bem alto: "Hello!". Depois: "Hi!". E no final: "Bye, bye!".',
      dica: "Sorria e olhe nos olhos do adulto ao dizer.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: familia,
      pergunta:
        'Como você cumprimenta o vovô, a titia, ou o seu amiguinho da escola? Podemos usar "Hello" com eles também?',
      exemplos: [
        'Quando encontrar alguém: "Hello!" ou "Hi!".',
        'Quando se despedir: "Bye!" ou "Bye, bye!".',
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Hello, family!",
      convite:
        'Missão em casa: cumprimente 3 pessoas da família em inglês. Diga "Hello, mom!", "Hello, dad!", "Hello, grandma!".',
      dicaAdulto: "Peça para cada pessoa responder também em inglês para virar brincadeira.",
    },
    {
      tipo: "celebracao",
      medalha: "Hello Star",
      mascoteUrl: brilha,
      falaFinal:
        'Muito bem! Você já sabe dizer "Hello", "Hi" e "Bye". Você é uma estrela do inglês!',
    },
  ],
};

// ============================================================
// AULA 02 — My family
// ============================================================
const aula02: AulaIng = {
  slug: "s1-a02-my-family",
  titulo: "My family",
  subtitulo: "Semana 1 · Dia 2",
  icone: "👨‍👩‍👧",
  duracaoMin: 8,
  baseCientifica:
    "Vocabulário familiar (imediato ao contexto da criança) — TPR + repetição espaçada (Asher 1977; Nation 2001).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Oi de novo! Hoje vamos aprender quem faz parte da sua família em inglês. Escuta: "family". Quer dizer FAMÍLIA.',
      legenda: "Aponte para fotos da família enquanto ouve.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: familia,
      versos: [
        { en: "Mommy, mommy, I love you.", pt: "Mamãe, mamãe, eu te amo.", gesto: "💗" },
        { en: "Daddy, daddy, I love you too.", pt: "Papai, papai, eu te amo também.", gesto: "💙" },
        { en: "Baby, baby, so cute!", pt: "Bebê, bebê, tão fofinho!", gesto: "👶" },
      ],
      legenda: "Aponte para você e para o adulto ao cantar.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada foto para ouvir: "Mommy", "Daddy", "Baby".',
      itens: [
        { en: "Mommy", pt: "Mamãe", imagemUrl: mae },
        { en: "Daddy", pt: "Papai", imagemUrl: pai },
        { en: "Baby", pt: "Bebê", imagemUrl: bebe },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete comigo: "Mommy", "Daddy", "Baby". Muito bem!',
      itens: [
        { en: "Mommy", pt: "Mamãe", imagemUrl: mae },
        { en: "Daddy", pt: "Papai", imagemUrl: pai },
        { en: "Baby", pt: "Bebê", imagemUrl: bebe },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Mommy". Quem é a mamãe?',
      palavraAlvoEn: "Mommy",
      opcoes: [
        { nome: "mãe", imagemUrl: mae, correta: true },
        { nome: "pai", imagemUrl: pai, correta: false },
        { nome: "bebê", imagemUrl: bebe, correta: false },
      ],
      feedbackAcerto: 'Isso! "Mommy" é a mamãe.',
      feedbackErro: 'Ouça de novo: "Mommy". Escolha a figura da mamãe.',
    },
    {
      tipo: "historiaEn",
      titulo: "My family at home",
      cenas: [
        {
          imagemUrl: mae,
          narracao: 'A "mommy" está fazendo o café. Ela diz: "Good morning, baby!".',
        },
        {
          imagemUrl: pai,
          narracao: 'O "daddy" chega e dá um abraço. Ele diz: "Hello, my family!".',
        },
        {
          imagemUrl: bebe,
          narracao: 'O "baby" ri feliz. Todos juntos formam a "family". Que família linda!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Agora toque no "Daddy". Quem é o papai?',
      palavraAlvoEn: "Daddy",
      opcoes: [
        { nome: "pai", imagemUrl: pai, correta: true },
        { nome: "mãe", imagemUrl: mae, correta: false },
        { nome: "bebê", imagemUrl: bebe, correta: false },
      ],
      feedbackAcerto: 'Muito bem! "Daddy" é o papai.',
      feedbackErro: 'Escuta: "Daddy" é o papai. Tenta a figura do papai.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: familia,
      convite:
        'Agora é a sua vez! Aponte para os adultos da sua casa e diga: "Mommy!" ou "Daddy!". Se tiver um irmãozinho pequeno, diga: "Baby!".',
      dica: "Vale abraçar cada um ao apontar.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: coracao,
      pergunta:
        'Quem mora com você? Quantas pessoas tem na sua "family"? Todo mundo tem uma "mommy" ou "daddy" em casa?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Meet my family!",
      convite:
        'Missão: apresente cada pessoa da sua família em inglês. Fale: "This is my mommy.", "This is my daddy.".',
      dicaAdulto: "Grave um vídeo curto e coloque no álbum de recordações.",
    },
    {
      tipo: "celebracao",
      medalha: "Family Star",
      mascoteUrl: brilha,
      falaFinal:
        'Você aprendeu 3 palavras novas: "Mommy", "Daddy" e "Baby". Sua família ficou orgulhosa!',
    },
  ],
};

// ============================================================
// AULA 03 — Yummy! (comida)
// ============================================================
const aula03: AulaIng = {
  slug: "s1-a03-yummy",
  titulo: "Yummy!",
  subtitulo: "Semana 1 · Dia 3",
  icone: "🍎",
  duracaoMin: 8,
  baseCientifica:
    "Vocabulário do cotidiano com ancoragem sensorial (Paivio 1986 — dual coding). Palavras conectadas a experiências reais fixam melhor.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hoje vamos falar de comidinha gostosa! Quando uma comida está deliciosa, em inglês a gente diz: "Yummy!". Repete: "Yummy!".',
      legenda: "Esfregue a barriga ao dizer 'Yummy'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: maca,
      versos: [
        { en: "Apple, apple, red apple!", pt: "Maçã, maçã, maçã vermelha!", gesto: "🍎" },
        { en: "Banana, banana, yellow banana!", pt: "Banana, banana, banana amarela!", gesto: "🍌" },
        { en: "Yummy, yummy in my tummy!", pt: "Gostoso, gostoso na minha barriga!", gesto: "😋" },
      ],
      legenda: "Bata palma no ritmo. Ouça 2 vezes.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada comidinha: "Apple", "Banana", "Cake".',
      itens: [
        { en: "Apple", pt: "Maçã", imagemUrl: maca },
        { en: "Banana", pt: "Banana", imagemUrl: banana },
        { en: "Cake", pt: "Bolo", imagemUrl: bolo },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais! "Apple", "Banana", "Cake".',
      itens: [
        { en: "Apple", pt: "Maçã", imagemUrl: maca },
        { en: "Banana", pt: "Banana", imagemUrl: banana },
        { en: "Cake", pt: "Bolo", imagemUrl: bolo },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Apple". Qual é a maçã?',
      palavraAlvoEn: "Apple",
      opcoes: [
        { nome: "maçã", imagemUrl: maca, correta: true },
        { nome: "banana", imagemUrl: banana, correta: false },
        { nome: "bolo", imagemUrl: bolo, correta: false },
      ],
      feedbackAcerto: 'Perfeito! "Apple" é maçã.',
      feedbackErro: 'Escuta: "Apple" é vermelhinha e redonda. Escolhe a maçã.',
    },
    {
      tipo: "historiaEn",
      titulo: "The tea party",
      cenas: [
        {
          imagemUrl: mae,
          narracao: 'A "mommy" prepara um lanche. Ela pega uma "apple" bem vermelha.',
        },
        {
          imagemUrl: banana,
          narracao: 'Ela também pega uma "banana" amarelinha. E um pedacinho de "cake"!',
        },
        {
          imagemUrl: suco,
          narracao: 'Todo mundo come e diz: "Yummy!". Que lanche gostoso!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Banana". Qual é amarelinha?',
      palavraAlvoEn: "Banana",
      opcoes: [
        { nome: "banana", imagemUrl: banana, correta: true },
        { nome: "maçã", imagemUrl: maca, correta: false },
        { nome: "bolo", imagemUrl: bolo, correta: false },
      ],
      feedbackAcerto: 'Isso mesmo! "Banana" é a amarelinha.',
      feedbackErro: 'A "Banana" é amarela e comprida. Tenta de novo.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: maca,
      convite:
        'Faz de conta que você está comendo. Morda o ar e diga: "Mmm, apple!", "Mmm, banana!", "Mmm, cake!". No final: "Yummy!".',
      dica: "Esfregue a barriga ao dizer 'Yummy'.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: bolo,
      pergunta:
        'Qual é a sua comidinha favorita? É "apple", "banana", "cake" ou outra coisa? Sabe como fala em inglês?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "In the kitchen",
      convite:
        'Missão: vá até a cozinha com o adulto. Aponte para cada fruta e diga o nome em inglês. Se tiver, tire uma foto do lanche e coloque no álbum.',
      dicaAdulto: "Vale usar frutas de brinquedo se não tiver de verdade.",
    },
    {
      tipo: "celebracao",
      medalha: "Yummy Star",
      mascoteUrl: brilha,
      falaFinal:
        'Você já sabe pedir comida em inglês: "Apple", "Banana", "Cake". Yummy!',
    },
  ],
};

// ============================================================
// AULA 04 — My friends: animals
// ============================================================
const aula04: AulaIng = {
  slug: "s1-a04-animals",
  titulo: "My friends: animals",
  subtitulo: "Semana 1 · Dia 4",
  icone: "🐶",
  duracaoMin: 8,
  baseCientifica:
    "Animais são universalmente motivadores em EI (interesse intrínseco). Onomatopeia acopla som ao significado (Perry 2015).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hoje vamos conhecer 3 amigos animais em inglês. Escuta: "dog", "cat", "bird". Vamos ver quem é quem?',
      legenda: "Estimule a criança a fazer o som de cada animal.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: cachorro,
      versos: [
        { en: "The dog says woof, woof, woof!", pt: "O cachorro faz au, au, au!", gesto: "🐶" },
        { en: "The cat says meow, meow!", pt: "O gato faz miau, miau!", gesto: "🐱" },
        { en: "The bird says tweet, tweet!", pt: "O passarinho faz piu, piu!", gesto: "🐦" },
      ],
      legenda: "Faça o som de cada animal junto com a criança.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada animal: "Dog", "Cat", "Bird".',
      itens: [
        { en: "Dog", pt: "Cachorro", imagemUrl: cachorro },
        { en: "Cat", pt: "Gato", imagemUrl: gato },
        { en: "Bird", pt: "Passarinho", imagemUrl: passaro },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'De novo, mais firme! "Dog", "Cat", "Bird".',
      itens: [
        { en: "Dog", pt: "Cachorro", imagemUrl: cachorro },
        { en: "Cat", pt: "Gato", imagemUrl: gato },
        { en: "Bird", pt: "Passarinho", imagemUrl: passaro },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Dog". Quem faz au-au?',
      palavraAlvoEn: "Dog",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "passarinho", imagemUrl: passaro, correta: false },
      ],
      feedbackAcerto: 'Isso! "Dog" faz woof, woof!',
      feedbackErro: 'Escuta: "Dog" faz au-au. Escolhe o cachorrinho.',
    },
    {
      tipo: "historiaEn",
      titulo: "Three little friends",
      cenas: [
        {
          imagemUrl: cachorro,
          narracao: 'Este é o "dog" Max. Ele adora correr no parque. Woof, woof!',
        },
        {
          imagemUrl: gato,
          narracao: 'Esta é a "cat" Mia. Ela pula na árvore. Meow, meow!',
        },
        {
          imagemUrl: passaro,
          narracao: 'E lá em cima, o "bird" Kiki canta bem bonito. Tweet, tweet! Os três são amigos.',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Agora toque no "Cat". Quem faz miau?',
      palavraAlvoEn: "Cat",
      opcoes: [
        { nome: "gato", imagemUrl: gato, correta: true },
        { nome: "cachorro", imagemUrl: cachorro, correta: false },
        { nome: "coelho", imagemUrl: coelho, correta: false },
      ],
      feedbackAcerto: 'Muito bem! "Cat" faz meow.',
      feedbackErro: 'A "Cat" faz miau. Procura o gatinho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: passaro,
      convite:
        'Agora é você! Faz de conta que é um "dog": woof, woof! Depois um "cat": meow! No final um "bird": tweet, tweet! Voa com os bracinhos!',
      dica: "Vale correr, pular e voar.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: cachorro,
      pergunta:
        'Você tem um "dog" ou uma "cat" em casa? Ou já viu um "bird" na janela? Como ele se chama?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Meet an animal",
      convite:
        'Missão: procure um animal (de brinquedo, foto ou de verdade) e mostre para a família. Diga: "This is my dog." ou "This is a cat.".',
      dicaAdulto: "Se não tiver bicho, use um livro ou desenho.",
    },
    {
      tipo: "celebracao",
      medalha: "Animal Star",
      mascoteUrl: brilha,
      falaFinal:
        'Você aprendeu 3 amigos: "Dog", "Cat" e "Bird". Os animais adoraram te conhecer!',
    },
  ],
};

// ============================================================
// AULA 05 — My toys (fecha a semana com medalha)
// ============================================================
const aula05: AulaIng = {
  slug: "s1-a05-my-toys",
  titulo: "My toys",
  subtitulo: "Semana 1 · Dia 5 · Formatura",
  icone: "🎈",
  duracaoMin: 9,
  baseCientifica:
    "Retrieval practice na 5ª aula (Karpicke & Roediger 2008) — revisita 'Hello', 'Family', 'Yummy' e 'Animals' numa festa temática de brinquedos.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Última aula da semana! Hoje vamos brincar com "toys" — brinquedos! Escuta: "toys". E tem uma medalha te esperando no final.',
      legenda: "Prepare 2-3 brinquedos ao lado (bola, carrinho, ursinho).",
    },
    {
      tipo: "musicaEn",
      imagemUrl: bola,
      versos: [
        { en: "Ball, ball, bouncing ball!", pt: "Bola, bola, bola pulando!", gesto: "⚽" },
        { en: "Car, car, driving car!", pt: "Carro, carro, carrinho andando!", gesto: "🚗" },
        { en: "Balloon, balloon, up in the sky!", pt: "Balão, balão, lá no céu!", gesto: "🎈" },
      ],
      legenda: "Aponte para brinquedos reais ao cantar.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada brinquedo: "Ball", "Car", "Balloon".',
      itens: [
        { en: "Ball", pt: "Bola", imagemUrl: bola },
        { en: "Car", pt: "Carro", imagemUrl: carro },
        { en: "Balloon", pt: "Balão", imagemUrl: balao },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Revisão da semana! Escuta: "Hello", "Mommy", "Apple", "Dog".',
      itens: [
        { en: "Hello", pt: "Olá", imagemUrl: menino },
        { en: "Mommy", pt: "Mamãe", imagemUrl: mae },
        { en: "Dog", pt: "Cachorro", imagemUrl: cachorro },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque na "Ball". Qual é a bola?',
      palavraAlvoEn: "Ball",
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "balão", imagemUrl: balao, correta: false },
        { nome: "carro", imagemUrl: carro, correta: false },
      ],
      feedbackAcerto: 'Isso! "Ball" é bola.',
      feedbackErro: '"Ball" é redondinha e pula. Tenta de novo.',
    },
    {
      tipo: "historiaEn",
      titulo: "Playtime!",
      cenas: [
        {
          imagemUrl: bola,
          narracao: 'A "mommy" pega uma "ball" grande. Ela diz: "Let\'s play!".',
        },
        {
          imagemUrl: carro,
          narracao: 'O "daddy" pega um "car" vermelho. O carrinho corre no chão. Vroom, vroom!',
        },
        {
          imagemUrl: balao,
          narracao: 'E de repente, um "balloon" sobe alto no céu. Todo mundo grita: "Yay!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque no "Car". Qual é o carrinho?',
      palavraAlvoEn: "Car",
      opcoes: [
        { nome: "carro", imagemUrl: carro, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "ursinho", imagemUrl: ursinho, correta: false },
      ],
      feedbackAcerto: 'Perfeito! "Car" faz vroom, vroom!',
      feedbackErro: 'O "Car" anda no chão. Escolhe o carrinho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: balao,
      convite:
        'Pega um brinquedo de verdade e mostra para a família. Diga: "This is my ball!" ou "This is my car!". Se soltar um "balloon" no ar, grita: "Balloon, balloon!".',
      dica: "Vale usar qualquer brinquedo que tiver em casa.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: ursinho,
      pergunta:
        'Qual é o seu "toy" favorito? É uma "ball", um "car", um "balloon" ou outro? Sabe falar em inglês?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Show and tell",
      convite:
        'Missão de formatura: junte seus 3 brinquedos favoritos e apresente para a família em inglês. Fale: "This is my ball.", "This is my car.", "This is my toy.".',
      dicaAdulto: "Grave um vídeo curto — vira memória de fim da Semana 1.",
    },
    {
      tipo: "celebracao",
      medalha: "Little English Star — Semana 1",
      mascoteUrl: brilha,
      falaFinal:
        'You did it! Você terminou a Semana 1! Já sabe: "Hello", "Family", "Yummy", "Animals" e "Toys". Você é uma "Little English Star"! Congratulations!',
    },
  ],
};

// ============================================================
// CURSO
// ============================================================
export const cursoInglesMaternal: CursoIng = {
  slug: "ingles-ei-maternal",
  serie: "maternal",
  serieLabel: "Maternal (3–4 anos)",
  titulo: "My First English — Maternal",
  descricao:
    "Trilha de 4 semanas com 20 missões orais. Aprendizado por imagem, música e imitação — sem leitura.",
  corPrimaria: "#7c3aed",
  corSecundaria: "#fce7f3",
  mascoteUrl: brilha,
  unidades: [
    {
      slug: "semana-1",
      numero: 1,
      titulo: "Semana 1 — Hello, my world!",
      subtitulo: "Cumprimentos, família, comida, animais e brinquedos",
      aulas: [aula01, aula02, aula03, aula04, aula05],
    },
    {
      slug: "semana-2",
      numero: 2,
      titulo: "Semana 2 — The world outside",
      subtitulo: "Sol, lua, chuva, arco-íris e jardim",
      aulas: aulasMaternalSemana2,
    },
  ],
};
