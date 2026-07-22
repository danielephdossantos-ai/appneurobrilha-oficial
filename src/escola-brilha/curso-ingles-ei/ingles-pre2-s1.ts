import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as quadroTriste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as quadroSurpreso } from "@/assets/neuro-treino/objetos/quadro-surpreso.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as presente } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as compartilhar } from "@/assets/neuro-treino/objetos/compartilhar.png.asset.json";

/**
 * Inglês EI — Pré II (5–6 anos) · Semana 1 · "Say hello to the world!"
 *
 * Salto pedagógico: frases completas de saudação e apresentação.
 * "Hello, I am Sofia.", "What's your name?", "How are you?".
 * Formação de diálogo — a criança começa a conversar de verdade.
 */

const aula01: AulaIng = {
  slug: "s1-a01-hello-hi",
  titulo: "Hello and Hi!",
  subtitulo: "Semana 1 · Dia 1",
  icone: "👋",
  duracaoMin: 9,
  baseCientifica:
    "Rotinas de saudação (Wells 1985): fórmulas de abertura consolidam o inglês como língua de contato social e reduzem ansiedade linguística.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, my friend! Sou o Teacher Buddy. No Pré II a gente já FALA em inglês. Vamos começar pelas duas saudações mais usadas: "hello" e "hi". Acena a mão comigo!',
      legenda: "Acene com a mão a cada 'hello' ou 'hi'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: menino,
      versos: [
        { en: "Hello, hello, how do you do?", pt: "Olá, olá, como vai você?", gesto: "👋" },
        { en: "Hi, hi, nice to meet you!", pt: "Oi, oi, prazer em te conhecer!", gesto: "🤝" },
        { en: "Hey, hey, let's play today!", pt: "Ei, ei, vamos brincar hoje!", gesto: "🥳" },
      ],
      legenda: "Cumprimente 3 pessoas imaginárias — uma a cada verso.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada amigo pra dizer "olá": "Hello!", "Hi!", "Hey!".',
      itens: [
        { en: "Hello!", pt: "Olá!", imagemUrl: menino },
        { en: "Hi!", pt: "Oi!", imagemUrl: menina },
        { en: "Hey!", pt: "Ei!", imagemUrl: buddy },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais, bem alto: "Hello!", "Hi!", "Hey!".',
      itens: [
        { en: "Hello!", pt: "Olá!", imagemUrl: menino },
        { en: "Hi!", pt: "Oi!", imagemUrl: menina },
        { en: "Hey!", pt: "Ei!", imagemUrl: buddy },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Quem está dizendo "Hello"? Toque na pessoa acenando.',
      palavraAlvoEn: "Hello",
      opcoes: [
        { nome: "menina acenando", imagemUrl: menina, correta: true },
        { nome: "presente", imagemUrl: presente, correta: false },
        { nome: "coração", imagemUrl: coracao, correta: false },
      ],
      feedbackAcerto: 'Isso! Ela diz "Hello!" pra você.',
      feedbackErro: '"Hello" é uma pessoa cumprimentando. Procura o amigo que acena.',
    },
    {
      tipo: "historiaEn",
      titulo: "First day at school",
      cenas: [
        {
          imagemUrl: menina,
          narracao:
            'Sofia chega na escola. Vê uma amiga nova e diz: "Hello! I am Sofia.".',
        },
        {
          imagemUrl: menino,
          narracao:
            'A amiga acena de volta: "Hi! I am Lucas.". Os dois sorriem.',
        },
        {
          imagemUrl: abraco,
          narracao:
            'Eles se abraçam e dizem juntos: "Nice to meet you!". Começou uma amizade em inglês!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Qual gesto combina com "Hi"? Toque na imagem certa.',
      palavraAlvoEn: "Hi",
      opcoes: [
        { nome: "acenar", imagemUrl: menino, correta: true },
        { nome: "triste", imagemUrl: quadroTriste, correta: false },
        { nome: "surpreso", imagemUrl: quadroSurpreso, correta: false },
      ],
      feedbackAcerto: 'Perfeito! "Hi!" com a mãozinha.',
      feedbackErro: '"Hi" é oi — a gente acena, não fica triste!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Levanta e cumprimenta 3 coisas do seu quarto! Aponte pra cada uma e diga: "Hello, teddy!", "Hi, book!", "Hey, window!".',
      dica: "Fale bem alto e acene de verdade!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: sol,
      pergunta:
        'Como você cumprimenta seus amigos? Em português é "oi" ou "olá". Em inglês agora você sabe DUAS formas: "hello" e "hi". Qual você prefere?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Hello parade",
      convite:
        'Missão: cumprimente 5 pessoas ou brinquedos da família dizendo "Hello!" ou "Hi!". Aponte pra cada um.',
      dicaAdulto: "Adulto pode responder também em inglês — 'Hi, honey!' — pra virar diálogo.",
    },
    {
      tipo: "celebracao",
      medalha: "Hello Star",
      mascoteUrl: buddy,
      falaFinal:
        'Awesome! Você já sabe cumprimentar em inglês. "Hello, hello, hello, my friend!" — Congratulations!',
    },
  ],
};

const aula02: AulaIng = {
  slug: "s1-a02-name",
  titulo: "What's your name?",
  subtitulo: "Semana 1 · Dia 2",
  icone: "🧒",
  duracaoMin: 9,
  baseCientifica:
    "Personalização (Cameron 2001): quando a criança fala o próprio nome em inglês, o vínculo emocional com a língua se fortalece.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi again! Ontem foi "hello". Hoje a gente vai aprender a pergunta mais importante: "What is your name?". E a resposta é "I am..." — e você fala o seu nome!',
      legenda: "Aponte pra si mesmo ao ouvir 'I am'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: menina,
      versos: [
        { en: "What is your name? What is your name?", pt: "Qual é seu nome? Qual é seu nome?", gesto: "❓" },
        { en: "I am Sofia, I am Sofia!", pt: "Eu sou Sofia, eu sou Sofia!", gesto: "👧" },
        { en: "Nice to meet you, my friend!", pt: "Prazer em te conhecer, amigo!", gesto: "🤝" },
      ],
      legenda: "Troque 'Sofia' pelo seu nome real no segundo verso!",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada pessoa pra ouvir o nome: "I am Sofia.", "I am Lucas.", "I am Buddy.".',
      itens: [
        { en: "I am Sofia.", pt: "Eu sou a Sofia.", imagemUrl: menina },
        { en: "I am Lucas.", pt: "Eu sou o Lucas.", imagemUrl: menino },
        { en: "I am Buddy.", pt: "Eu sou o Buddy.", imagemUrl: buddy },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Agora repete alto o seu nome depois: "I am..." — fale o seu!',
      itens: [
        { en: "What is your name?", pt: "Qual é seu nome?", imagemUrl: buddy },
        { en: "I am...", pt: "Eu sou...", imagemUrl: menina },
        { en: "Nice to meet you!", pt: "Prazer em te conhecer!", imagemUrl: abraco },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "What is your name?". Qual imagem mostra uma criança se apresentando?',
      palavraAlvoEn: "What is your name?",
      opcoes: [
        { nome: "menina se apresentando", imagemUrl: menina, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: 'Isso! Ela responde: "I am Sofia.".',
      feedbackErro: '"What is your name?" é uma pergunta pra uma pessoa, não pro sol.',
    },
    {
      tipo: "historiaEn",
      titulo: "New friend at the park",
      cenas: [
        {
          imagemUrl: menina,
          narracao:
            'Sofia vai ao parque. Vê uma menina no balanço e chega perto: "Hello! What is your name?".',
        },
        {
          imagemUrl: menino,
          narracao:
            'A amiga sorri e responde: "Hi! I am Maya. What is your name?". Sofia diz: "I am Sofia!".',
        },
        {
          imagemUrl: abraco,
          narracao:
            'As duas dizem juntas: "Nice to meet you!". E saem correndo pra brincar. Nova amizade em inglês!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toca em quem tá se apresentando com "I am Lucas.".',
      palavraAlvoEn: "I am Lucas",
      opcoes: [
        { nome: "menino", imagemUrl: menino, correta: true },
        { nome: "menina", imagemUrl: menina, correta: false },
        { nome: "coração", imagemUrl: coracao, correta: false },
      ],
      feedbackAcerto: 'Perfeito! "I am Lucas." — o menino se apresenta.',
      feedbackErro: 'Escuta: "I am Lucas." — é o menino.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menina,
      convite:
        'Agora é sua vez! Fica em pé, aponta pra si e diga bem alto: "I am ..." — e fala o seu nome em inglês!',
      dica: "Repete 3 vezes: I am, I am, I am!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: buddy,
      pergunta:
        'Qual é o seu nome? Fale em inglês: "I am ...". E o nome da sua mamãe? "She is ...". E do papai? "He is ...".',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Family names in English",
      convite:
        'Missão: pergunte "What is your name?" pra 3 pessoas da família. Cada uma responde "I am ...". Depois todo mundo diz "Nice to meet you!".',
      dicaAdulto: "Combine em família de sempre responderem em inglês nessa semana — vira ritual.",
    },
    {
      tipo: "celebracao",
      medalha: "Name Star",
      mascoteUrl: buddy,
      falaFinal:
        'Fantastic! Você já sabe se apresentar em inglês. Nice to meet you, my friend!',
    },
  ],
};

const aula03: AulaIng = {
  slug: "s1-a03-how-are-you",
  titulo: "How are you?",
  subtitulo: "Semana 1 · Dia 3",
  icone: "😊",
  duracaoMin: 9,
  baseCientifica:
    "Vocabulário afetivo (Damasio, Immordino-Yang 2007): associar emoções às palavras em inglês ativa memória de longo prazo.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Hoje tem uma pergunta nova: "How are you?" — Como você está? A resposta pode ser "I am fine!", "I am great!" ou "So-so.".',
      legenda: "Faça polegar pra cima quando ouvir 'great'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: quadroAlegre,
      versos: [
        { en: "How are you? How are you?", pt: "Como você está?", gesto: "🤗" },
        { en: "I am fine, thank you!", pt: "Estou bem, obrigado!", gesto: "😊" },
        { en: "I am great, and you?", pt: "Estou ótimo, e você?", gesto: "👍" },
      ],
      legenda: "Balance a cabecinha alegremente.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada carinha: "I am fine.", "I am great!", "So-so.".',
      itens: [
        { en: "I am fine.", pt: "Estou bem.", imagemUrl: quadroAlegre },
        { en: "I am great!", pt: "Estou ótimo!", imagemUrl: abraco },
        { en: "So-so.", pt: "Mais ou menos.", imagemUrl: quadroSurpreso },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete alto: "I am fine!", "I am great!", "So-so.".',
      itens: [
        { en: "I am fine.", pt: "Estou bem.", imagemUrl: quadroAlegre },
        { en: "I am great!", pt: "Estou ótimo!", imagemUrl: abraco },
        { en: "So-so.", pt: "Mais ou menos.", imagemUrl: quadroSurpreso },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Qual carinha mostra "I am great!"? Toque na mais feliz.',
      palavraAlvoEn: "I am great",
      opcoes: [
        { nome: "abraço feliz", imagemUrl: abraco, correta: true },
        { nome: "triste", imagemUrl: quadroTriste, correta: false },
        { nome: "surpreso", imagemUrl: quadroSurpreso, correta: false },
      ],
      feedbackAcerto: 'Perfeito! "I am great!" — bem feliz!',
      feedbackErro: '"Great" é ótimo, muito feliz. Procura a carinha mais alegre.',
    },
    {
      tipo: "historiaEn",
      titulo: "Good morning talk",
      cenas: [
        {
          imagemUrl: menina,
          narracao:
            'De manhã, Sofia encontra Lucas. Ela diz: "Hello, Lucas! How are you?".',
        },
        {
          imagemUrl: menino,
          narracao:
            'Lucas sorri e responde: "I am great, Sofia! And you?". Sofia diz: "I am fine, thank you!".',
        },
        {
          imagemUrl: abraco,
          narracao:
            'Os dois se abraçam. Perguntar "How are you?" é jeito bonito de mostrar carinho.',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Se hoje você está bem, qual carinha você toca?',
      palavraAlvoEn: "I am fine",
      opcoes: [
        { nome: "sorridente", imagemUrl: quadroAlegre, correta: true },
        { nome: "triste", imagemUrl: quadroTriste, correta: false },
        { nome: "surpreso", imagemUrl: quadroSurpreso, correta: false },
      ],
      feedbackAcerto: '"I am fine!" — carinha bem.',
      feedbackErro: '"Fine" é bem. Procura o sorriso!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: buddy,
      convite:
        'Teacher Buddy pergunta: "How are you today?". Responda alto: "I am ..." — e diga como você tá! Fine? Great? So-so?',
      dica: "Faça polegar pra cima se estiver great!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: quadroAlegre,
      pergunta:
        'Como você tá agora? "I am fine"? "I am great"? "So-so"? E como você acha que a mamãe tá? Pergunta pra ela em inglês!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "How are you today?",
      convite:
        'Missão: durante o dia todo, pergunta "How are you?" pra 3 pessoas da casa. Cada uma responde em inglês.',
      dicaAdulto: "Cria o ritual do bom-dia em inglês — reforça repetição espaçada.",
    },
    {
      tipo: "celebracao",
      medalha: "Feelings Star",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Você já pergunta como o amigo está em inglês. "How are you?" — vira mágica de amizade!',
    },
  ],
};

const aula04: AulaIng = {
  slug: "s1-a04-goodbye",
  titulo: "Goodbye and see you!",
  subtitulo: "Semana 1 · Dia 4",
  icone: "👋",
  duracaoMin: 9,
  baseCientifica:
    "Fórmulas de encerramento (Halliday 1975): saudações de despedida completam o par adjacente de conversa e fecham a rotina social.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Toda conversa boa começa com "hello"… e termina com "goodbye"! Hoje a gente aprende 3 despedidas: "goodbye", "bye-bye" e "see you!".',
      legenda: "Acene devagar ao ouvir 'goodbye'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: menino,
      versos: [
        { en: "Goodbye, goodbye, my friend!", pt: "Tchau, tchau, meu amigo!", gesto: "👋" },
        { en: "Bye-bye, bye-bye, see you soon!", pt: "Tchau, tchau, até logo!", gesto: "😊" },
        { en: "Good night, sleep tight!", pt: "Boa noite, durma bem!", gesto: "🌙" },
      ],
      legenda: "Acene 3 vezes bem devagar.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "Goodbye!", "Bye-bye!", "Good night!".',
      itens: [
        { en: "Goodbye!", pt: "Tchau!", imagemUrl: menina },
        { en: "Bye-bye!", pt: "Tchau tchau!", imagemUrl: menino },
        { en: "Good night!", pt: "Boa noite!", imagemUrl: lua },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete alto: "Goodbye!", "See you!", "Good night!".',
      itens: [
        { en: "See you tomorrow!", pt: "Até amanhã!", imagemUrl: sol },
        { en: "See you soon!", pt: "Até logo!", imagemUrl: buddy },
        { en: "Good night!", pt: "Boa noite!", imagemUrl: lua },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Quando é hora de dormir, o que a gente diz? Toque na imagem certa.',
      palavraAlvoEn: "Good night",
      opcoes: [
        { nome: "lua da noite", imagemUrl: lua, correta: true },
        { nome: "sol do dia", imagemUrl: sol, correta: false },
        { nome: "coração", imagemUrl: coracao, correta: false },
      ],
      feedbackAcerto: '"Good night!" — a lua aparece e a gente vai dormir.',
      feedbackErro: '"Good night" é boa NOITE — quando aparece a lua.',
    },
    {
      tipo: "historiaEn",
      titulo: "End of the day",
      cenas: [
        {
          imagemUrl: menina,
          narracao:
            'Sofia termina de brincar. Ela acena pra Lucas: "Goodbye, Lucas! See you tomorrow!".',
        },
        {
          imagemUrl: menino,
          narracao:
            'Lucas responde: "Bye-bye, Sofia! See you soon!". Os dois riem.',
        },
        {
          imagemUrl: lua,
          narracao:
            'Em casa, na cama, mamãe apaga a luz e sussurra: "Good night, my love!". Sofia diz: "Good night, mommy!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque em quem tá acenando "Goodbye!".',
      palavraAlvoEn: "Goodbye",
      opcoes: [
        { nome: "menino acenando", imagemUrl: menino, correta: true },
        { nome: "coração", imagemUrl: coracao, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: 'Perfeito! "Goodbye!" com a mãozinha.',
      feedbackErro: '"Goodbye" é uma pessoa acenando pra ir embora.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: buddy,
      convite:
        'Faz de conta que tá indo embora. Acena pro celular e diga: "Goodbye, Buddy! See you tomorrow!".',
      dica: "Manda um beijinho também!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: lua,
      pergunta:
        'Como você diz tchau em casa? Pra mamãe? Pro papai? Agora você sabe em inglês: "Goodbye!" ou "See you!". Qual você vai usar hoje à noite?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Bye-bye ritual",
      convite:
        'Missão: à noite, diga "Good night!" pra cada pessoa da família antes de dormir. Ganha um beijo em inglês em troca!',
      dicaAdulto: "Adulto pode responder 'Sweet dreams, my love!' — introduz nova expressão.",
    },
    {
      tipo: "celebracao",
      medalha: "Goodbye Star",
      mascoteUrl: buddy,
      falaFinal:
        'Wonderful! Você já sabe começar E terminar uma conversa em inglês. Bye-bye for now, see you tomorrow!',
    },
  ],
};

const aula05: AulaIng = {
  slug: "s1-a05-please-thanks",
  titulo: "Please and Thank you!",
  subtitulo: "Semana 1 · Dia 5",
  icone: "🙏",
  duracaoMin: 10,
  baseCientifica:
    "Politeness formulas (Brown & Levinson 1987): fórmulas de cortesia são adquiridas cedo e transferem valor social direto entre línguas.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Fim da semana das saudações! Hoje as 3 palavras mágicas: "please" (por favor), "thank you" (obrigado) e "you\'re welcome" (de nada). Elas abrem todas as portas!',
      legenda: "Junte as mãos ao ouvir 'please'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: coracao,
      versos: [
        { en: "Please, please, please!", pt: "Por favor, por favor!", gesto: "🙏" },
        { en: "Thank you, thank you so much!", pt: "Obrigado, muito obrigado!", gesto: "😊" },
        { en: "You are welcome, my friend!", pt: "De nada, meu amigo!", gesto: "🤗" },
      ],
      legenda: "Faça reverência pequena a cada 'thank you'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "Please!", "Thank you!", "You are welcome!".',
      itens: [
        { en: "Please!", pt: "Por favor!", imagemUrl: menina },
        { en: "Thank you!", pt: "Obrigado!", imagemUrl: presente },
        { en: "You are welcome!", pt: "De nada!", imagemUrl: coracao },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais: "Please!", "Thank you!", "You are welcome!".',
      itens: [
        { en: "Please!", pt: "Por favor!", imagemUrl: menino },
        { en: "Thank you!", pt: "Obrigado!", imagemUrl: abraco },
        { en: "You are welcome!", pt: "De nada!", imagemUrl: compartilhar },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Alguém te deu um presente. O que você diz? Toque na resposta certa.',
      palavraAlvoEn: "Thank you",
      opcoes: [
        { nome: "presente com abraço", imagemUrl: presente, correta: true },
        { nome: "lua", imagemUrl: lua, correta: false },
        { nome: "triste", imagemUrl: quadroTriste, correta: false },
      ],
      feedbackAcerto: '"Thank you!" — sempre que a gente ganha algo.',
      feedbackErro: 'Quando ganhamos algo, dizemos "Thank you!" — obrigado.',
    },
    {
      tipo: "historiaEn",
      titulo: "The magic words",
      cenas: [
        {
          imagemUrl: menina,
          narracao:
            'Sofia quer suco. Ela pede: "Mommy, juice, please!". Mamãe sorri.',
        },
        {
          imagemUrl: presente,
          narracao:
            'Mamãe dá o suco. Sofia responde: "Thank you, mommy!". Mamãe fala: "You are welcome, honey!".',
        },
        {
          imagemUrl: coracao,
          narracao:
            'Essas 3 palavras são MÁGICAS. Quem usa, faz o mundo mais bonito! "Please, thank you, you are welcome!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Você pede algo pra alguém. Qual palavra é MÁGICA e faz a pessoa te ajudar?',
      palavraAlvoEn: "Please",
      opcoes: [
        { nome: "criança pedindo", imagemUrl: menina, correta: true },
        { nome: "triste", imagemUrl: quadroTriste, correta: false },
        { nome: "surpreso", imagemUrl: quadroSurpreso, correta: false },
      ],
      feedbackAcerto: '"Please!" — a palavra que abre portas.',
      feedbackErro: '"Please" quer dizer POR FAVOR — é a palavra mágica.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: abraco,
      convite:
        'Faz de conta que você quer um abraço. Pede em inglês: "Hug, please!". Depois recebe e diz: "Thank you!".',
      dica: "Faz com um brinquedo se estiver sozinho!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: coracao,
      pergunta:
        'Quantas vezes por dia você diz "obrigado"? Em inglês vira "thank you". Vamos combinar de usar 5 vezes hoje?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "5 magic words a day",
      convite:
        'Missão de formatura da Semana 1: use "please" e "thank you" 5 vezes com a família. Cada vez ganha um coração de recompensa!',
      dicaAdulto: "Marque com adesivos ou desenhos os corações — vira gráfico de motivação.",
    },
    {
      tipo: "celebracao",
      medalha: "Greetings Star — Semana 1 Pré II",
      mascoteUrl: buddy,
      falaFinal:
        'Congratulations! Você fechou a Semana 1 do Pré II! Já cumprimenta, se apresenta, pergunta como o amigo tá, se despede E fala as palavras mágicas! Amazing job!',
    },
  ],
};

export const semana1Pre2: AulaIng[] = [aula01, aula02, aula03, aula04, aula05];
