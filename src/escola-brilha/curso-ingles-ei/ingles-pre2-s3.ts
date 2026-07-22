import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as camiseta } from "@/assets/neuro-treino/objetos/camiseta.png.asset.json";
import { url as casaco } from "@/assets/neuro-treino/objetos/casaco.png.asset.json";
import { url as toalha } from "@/assets/neuro-treino/objetos/toalha.png.asset.json";
import { url as sabonete } from "@/assets/neuro-treino/objetos/sabonete.png.asset.json";
import { url as banho } from "@/assets/neuro-treino/objetos/banho.png.asset.json";
import { url as escovarDentes } from "@/assets/neuro-treino/objetos/escovar-dentes.png.asset.json";
import { url as pente } from "@/assets/neuro-treino/objetos/pente.png.asset.json";
import { url as shampoo } from "@/assets/neuro-treino/objetos/shampoo.png.asset.json";
import { url as lavarMaos } from "@/assets/neuro-treino/objetos/lavar-maos.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";

/**
 * Inglês EI — Pré II · Semana 3 · "Getting ready — my clothes and routine"
 * Salto: rotina diária em inglês com "put on / wash / brush".
 */

const aula01: AulaIng = {
  slug: "s3-a01-clothes",
  titulo: "Put on your shirt!",
  subtitulo: "Semana 3 · Dia 1",
  icone: "👕",
  duracaoMin: 9,
  baseCientifica:
    "Ligação ação-linguagem (Asher TPR): 'put on' + peça de roupa fixa a ação com movimento real.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Semana da rotina! Toda manhã a gente veste roupa, né? Em inglês: "Put on your shirt!". "Shirt" é camiseta. "Put on" quer dizer VESTIR.',
      legenda: "Finja que veste uma camiseta invisível.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: camiseta,
      versos: [
        { en: "Put on, put on your shirt!", pt: "Vista, vista sua camiseta!", gesto: "👕" },
        { en: "Put on, put on your jacket!", pt: "Vista, vista seu casaco!", gesto: "🧥" },
        { en: "Ready, ready, let us go!", pt: "Pronto, pronto, vamos lá!", gesto: "🚀" },
      ],
      legenda: "Finja vestir cada peça no verso.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada roupa: "shirt", "jacket", "backpack".',
      itens: [
        { en: "Shirt", pt: "Camiseta", imagemUrl: camiseta },
        { en: "Jacket", pt: "Casaco", imagemUrl: casaco },
        { en: "Backpack", pt: "Mochila", imagemUrl: mochila },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete: "Put on your shirt! Put on your jacket!".',
      itens: [
        { en: "Shirt", pt: "Camiseta", imagemUrl: camiseta },
        { en: "Jacket", pt: "Casaco", imagemUrl: casaco },
        { en: "Backpack", pt: "Mochila", imagemUrl: mochila },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Put on your shirt!" — qual é a shirt?',
      palavraAlvoEn: "Shirt",
      opcoes: [
        { nome: "camiseta", imagemUrl: camiseta, correta: true },
        { nome: "mochila", imagemUrl: mochila, correta: false },
        { nome: "sabonete", imagemUrl: sabonete, correta: false },
      ],
      feedbackAcerto: '"Shirt!" — camiseta pra vestir.',
      feedbackErro: '"Shirt" é camiseta.',
    },
    {
      tipo: "historiaEn",
      titulo: "Morning routine",
      cenas: [
        {
          imagemUrl: sol,
          narracao:
            'Sofia acorda. Mamãe diz: "Good morning! Put on your shirt!". Sofia veste a camiseta favorita.',
        },
        {
          imagemUrl: casaco,
          narracao:
            'Está frio. Mamãe pega o casaco: "Put on your jacket, honey!". Sofia veste.',
        },
        {
          imagemUrl: mochila,
          narracao:
            'Última coisa: a mochila! "Put on your backpack! Let us go to school!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Tá frio. O que a Sofia vai vestir?',
      palavraAlvoEn: "Jacket",
      opcoes: [
        { nome: "casaco", imagemUrl: casaco, correta: true },
        { nome: "camiseta fininha", imagemUrl: camiseta, correta: false },
        { nome: "mochila", imagemUrl: mochila, correta: false },
      ],
      feedbackAcerto: '"Jacket!" — pra ficar quentinha.',
      feedbackErro: 'No frio veste "jacket" — casaco.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: camiseta,
      convite:
        'Faz de conta que tá se vestindo! Diga alto: "Put on my shirt!" e faz o movimento. Depois "Put on my jacket!". Por último "Put on my backpack!".',
      dica: "Cada peça 1 vez cada, bem lento!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: menina,
      pergunta:
        'Qual sua roupa favorita? Uma "shirt" colorida? Um "jacket" quentinho? Uma "backpack" bonita? Descreva pra mamãe em inglês!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Getting dressed race",
      convite:
        'Missão: amanhã de manhã, se vista dizendo em inglês cada peça: "Put on my ...". A família pode fazer junto — é uma corrida divertida!',
      dicaAdulto: "Adulto conta 'ready, set, go!' pra virar competição amorosa.",
    },
    {
      tipo: "celebracao",
      medalha: "Dressed Star",
      mascoteUrl: buddy,
      falaFinal:
        'Perfect! Você já se veste em inglês! "Put on your shirt!" — vira ritual da manhã!',
    },
  ],
};

const aula02: AulaIng = {
  slug: "s3-a02-wash-time",
  titulo: "Wash your hands!",
  subtitulo: "Semana 3 · Dia 2",
  icone: "🧼",
  duracaoMin: 9,
  baseCientifica:
    "Higiene em L2 (Cameron): rotina de saúde ensinada em inglês fixa mais fácil por ser diária.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Antes de comer, sempre "wash your hands!". "Wash" é lavar. "Hands" são mãos. Com "soap"! Vamos ensaiar?',
      legenda: "Esfregue as mãozinhas ao ouvir 'wash'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: lavarMaos,
      versos: [
        { en: "Wash, wash, wash your hands!", pt: "Lave, lave, lave as mãos!", gesto: "🧼" },
        { en: "Soap and water, clean and neat!", pt: "Sabonete e água, limpinho!", gesto: "💧" },
        { en: "Now we can eat!", pt: "Agora podemos comer!", gesto: "🍽️" },
      ],
      legenda: "Movimento circular com as mãos.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "hands", "soap", "water".',
      itens: [
        { en: "Wash hands", pt: "Lavar as mãos", imagemUrl: lavarMaos },
        { en: "Soap", pt: "Sabonete", imagemUrl: sabonete },
        { en: "Towel", pt: "Toalha", imagemUrl: toalha },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete: "Wash your hands! Use soap! Dry with towel!".',
      itens: [
        { en: "Wash hands", pt: "Lavar mãos", imagemUrl: lavarMaos },
        { en: "Soap", pt: "Sabonete", imagemUrl: sabonete },
        { en: "Towel", pt: "Toalha", imagemUrl: toalha },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Pra lavar as mãos, qual objeto a gente usa?',
      palavraAlvoEn: "Soap",
      opcoes: [
        { nome: "sabonete", imagemUrl: sabonete, correta: true },
        { nome: "mochila", imagemUrl: mochila, correta: false },
        { nome: "camiseta", imagemUrl: camiseta, correta: false },
      ],
      feedbackAcerto: '"Soap!" — pra fazer espuminha.',
      feedbackErro: 'Pra lavar mãos precisa de "soap" — sabonete.',
    },
    {
      tipo: "historiaEn",
      titulo: "Before lunch",
      cenas: [
        {
          imagemUrl: maca,
          narracao:
            'Sofia tá com fome. Mamãe diz: "Before you eat, wash your hands!".',
        },
        {
          imagemUrl: sabonete,
          narracao:
            'Sofia vai pro banheiro. Pega o "soap". Faz muita espuma!',
        },
        {
          imagemUrl: toalha,
          narracao:
            'Enxaguar e secar com a "towel". Mãos limpinhas! Agora sim: "Now I can eat!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Depois de lavar, o que a gente usa pra secar?',
      palavraAlvoEn: "Towel",
      opcoes: [
        { nome: "toalha", imagemUrl: toalha, correta: true },
        { nome: "sabonete", imagemUrl: sabonete, correta: false },
        { nome: "camiseta", imagemUrl: camiseta, correta: false },
      ],
      feedbackAcerto: '"Towel!" — pra secar.',
      feedbackErro: 'Depois de "wash", seca com "towel".',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: lavarMaos,
      convite:
        'Faz de conta que tá lavando as mãos! Esfregue palma com palma. Diga: "Wash, wash, wash my hands!". Cante 3 vezes lento!',
      dica: "20 segundos de lavagem — cante a música 2 vezes.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: sol,
      pergunta:
        'Quantas vezes por dia você lava as mãos? Antes de comer? Depois de brincar? Toda vez você pode falar em inglês: "Wash!".',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Wash your hands song",
      convite:
        'Missão: toda vez que lavar as mãos hoje, cante "Wash, wash, wash your hands!". A família canta junto!',
      dicaAdulto: "Vira hábito de saúde + rotina de inglês. Duplo ganho!",
    },
    {
      tipo: "celebracao",
      medalha: "Clean Star",
      mascoteUrl: buddy,
      falaFinal:
        'Wonderful! Mãos limpas e inglês afiado! Well done, my clean friend!',
    },
  ],
};

const aula03: AulaIng = {
  slug: "s3-a03-brush-teeth",
  titulo: "Brush your teeth!",
  subtitulo: "Semana 3 · Dia 3",
  icone: "🪥",
  duracaoMin: 9,
  baseCientifica:
    "Ação encadeada (TPR + rotina): 'brush teeth', 'brush hair' — o mesmo verbo em contextos diferentes generaliza.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Depois de comer, sempre "brush your teeth!". "Brush" é escovar. "Teeth" são dentes. Bora fazer o movimento?',
      legenda: "Escove o dedinho contra os dentinhos!",
    },
    {
      tipo: "musicaEn",
      imagemUrl: escovarDentes,
      versos: [
        { en: "Brush, brush, brush your teeth!", pt: "Escove, escove os dentes!", gesto: "🪥" },
        { en: "Up and down, side to side!", pt: "Pra cima e pra baixo, dos lados!", gesto: "↕️" },
        { en: "Smile bright, teeth shine!", pt: "Sorriso lindo, dentes brilhando!", gesto: "😁" },
      ],
      legenda: "Movimento de escovação com o dedo.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura: "teeth", "toothbrush", "hair", "comb".',
      itens: [
        { en: "Brush teeth", pt: "Escovar dentes", imagemUrl: escovarDentes },
        { en: "Comb", pt: "Pente", imagemUrl: pente },
        { en: "Shampoo", pt: "Xampu", imagemUrl: shampoo },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete: "Brush your teeth! Comb your hair!".',
      itens: [
        { en: "Brush teeth", pt: "Escovar dentes", imagemUrl: escovarDentes },
        { en: "Comb hair", pt: "Pentear cabelo", imagemUrl: pente },
        { en: "Shampoo", pt: "Xampu", imagemUrl: shampoo },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Brush your teeth" — qual objeto a gente usa?',
      palavraAlvoEn: "Toothbrush",
      opcoes: [
        { nome: "escova de dente", imagemUrl: escovarDentes, correta: true },
        { nome: "pente", imagemUrl: pente, correta: false },
        { nome: "toalha", imagemUrl: toalha, correta: false },
      ],
      feedbackAcerto: '"Toothbrush!" — pra dente branquinho.',
      feedbackErro: 'Pra escovar dente usa "toothbrush".',
    },
    {
      tipo: "historiaEn",
      titulo: "After breakfast",
      cenas: [
        {
          imagemUrl: maca,
          narracao:
            'Sofia comeu maçã no café. "Now brush your teeth, Sofia!".',
        },
        {
          imagemUrl: escovarDentes,
          narracao:
            'Ela escova cima, baixo, dos lados. "Up and down, side to side!".',
        },
        {
          imagemUrl: pente,
          narracao:
            'Depois "comb your hair!". Sofia se penteia. Está pronta pra escola!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Pra pentear o cabelo, qual objeto usa?',
      palavraAlvoEn: "Comb",
      opcoes: [
        { nome: "pente", imagemUrl: pente, correta: true },
        { nome: "sabonete", imagemUrl: sabonete, correta: false },
        { nome: "camiseta", imagemUrl: camiseta, correta: false },
      ],
      feedbackAcerto: '"Comb!" — pente pro cabelo.',
      feedbackErro: 'Pra pentear cabelo usa "comb".',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: escovarDentes,
      convite:
        'Faz de conta que tá escovando os dentes! Segure a escova invisível e diga: "Brush, brush, brush!". Depois: "Smile!" e mostra sorrisão!',
      dica: "Escova 2 minutos com a música.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: quadroAlegre,
      pergunta:
        'Você escova os dentes quantas vezes por dia? De manhã e à noite? Sabe cantar em inglês: "Brush, brush, brush your teeth!"?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Brush and smile",
      convite:
        'Missão: escove os dentes hoje cantando em inglês. Depois sorria pro espelho e diga: "My teeth are clean!".',
      dicaAdulto: "Coloca timer de 2 minutos e canta a música 2 vezes — dura o tempo certo!",
    },
    {
      tipo: "celebracao",
      medalha: "Brush Star",
      mascoteUrl: buddy,
      falaFinal:
        'Beautiful! Dentes limpinhos e inglês afinado! Amazing job!',
    },
  ],
};

const aula04: AulaIng = {
  slug: "s3-a04-bath-time",
  titulo: "Bath time!",
  subtitulo: "Semana 3 · Dia 4",
  icone: "🛁",
  duracaoMin: 9,
  baseCientifica:
    "Vocabulário em contexto de banho (Nation 2001): 4-5 palavras num evento único (banho) fixam por associação forte.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! À noite todo dia é "bath time"! Hora do banho. Com "water", "soap" e "shampoo". Vamos aprender?',
      legenda: "Faça de conta que joga água.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: banho,
      versos: [
        { en: "Bath time, bath time, splash splash splash!", pt: "Hora do banho, splash!", gesto: "💦" },
        { en: "Water, soap and shampoo!", pt: "Água, sabonete e xampu!", gesto: "🧴" },
        { en: "Clean, clean, clean like new!", pt: "Limpo, limpo, novinho!", gesto: "✨" },
      ],
      legenda: "Faça 'splash!' com as mãozinhas.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada objeto: "bath", "soap", "shampoo", "towel".',
      itens: [
        { en: "Bath", pt: "Banho", imagemUrl: banho },
        { en: "Shampoo", pt: "Xampu", imagemUrl: shampoo },
        { en: "Soap", pt: "Sabonete", imagemUrl: sabonete },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete: "Bath time! Splash! Clean!".',
      itens: [
        { en: "Bath", pt: "Banho", imagemUrl: banho },
        { en: "Shampoo", pt: "Xampu", imagemUrl: shampoo },
        { en: "Towel", pt: "Toalha", imagemUrl: toalha },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Pra lavar o cabelo, o que usa?',
      palavraAlvoEn: "Shampoo",
      opcoes: [
        { nome: "xampu", imagemUrl: shampoo, correta: true },
        { nome: "escova", imagemUrl: escovarDentes, correta: false },
        { nome: "camiseta", imagemUrl: camiseta, correta: false },
      ],
      feedbackAcerto: '"Shampoo!" — pra cabelo cheiroso.',
      feedbackErro: 'Cabelo lava com "shampoo".',
    },
    {
      tipo: "historiaEn",
      titulo: "Splashing fun",
      cenas: [
        {
          imagemUrl: banho,
          narracao:
            'À noite: "Bath time, Sofia!". Ela pula na banheira. "Splash!".',
        },
        {
          imagemUrl: shampoo,
          narracao:
            'Mamãe coloca "shampoo". Sofia faz penteado com espuma!',
        },
        {
          imagemUrl: toalha,
          narracao:
            'Sai da banheira, mamãe enrola na "towel" quentinha. "Clean and cozy!".',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Depois do banho, seca com o quê?',
      palavraAlvoEn: "Towel",
      opcoes: [
        { nome: "toalha", imagemUrl: toalha, correta: true },
        { nome: "pente", imagemUrl: pente, correta: false },
        { nome: "sabonete", imagemUrl: sabonete, correta: false },
      ],
      feedbackAcerto: '"Towel!" — pra secar quentinho.',
      feedbackErro: 'Depois do banho, "towel" seca o corpo.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: banho,
      convite:
        'Faz de conta que tá tomando banho! Esfrega os braços com sabonete invisível. Diga: "Bath time! Splash splash!".',
      dica: "Cante e balance de um lado pro outro.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: coracao,
      pergunta:
        'Você gosta de banho? Que brinquedo você leva? Um patinho? Um carrinho? Fala em inglês: "I love bath time!".',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Bath song",
      convite:
        'Missão: no banho hoje, cante "Bath time, splash splash splash!". A família pode responder do lado de fora!',
      dicaAdulto: "Vira brincadeira. Anti-choro pra crianças que resistem ao banho.",
    },
    {
      tipo: "celebracao",
      medalha: "Bath Star",
      mascoteUrl: buddy,
      falaFinal:
        'Splash-tastic! Você já sabe TODO o vocabulário do banho em inglês! Amazing!',
    },
  ],
};

const aula05: AulaIng = {
  slug: "s3-a05-ready-review",
  titulo: "I am ready!",
  subtitulo: "Semana 3 · Dia 5",
  icone: "🎒",
  duracaoMin: 10,
  baseCientifica:
    "Revisão cumulativa da rotina (Cepeda 2006): unir vestir + lavar + escovar + banho num único fluxo diário fecha a semana como script mental.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Fim da Semana 3! Você aprendeu a rotina TODA em inglês. Vamos revisar: put on, wash, brush, bath. E fechar com a frase mágica: "I am ready!".',
      legenda: "Faça polegar pra cima ao ouvir 'ready'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: buddy,
      versos: [
        { en: "Put on my shirt, wash my hands!", pt: "Visto a camiseta, lavo as mãos!", gesto: "👕" },
        { en: "Brush my teeth, comb my hair!", pt: "Escovo os dentes, penteio o cabelo!", gesto: "🪥" },
        { en: "I am ready, ready to go!", pt: "Estou pronto, pronto pra ir!", gesto: "🎒" },
      ],
      legenda: "Mime cada ação a cada verso.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Revisa: "shirt", "soap", "toothbrush", "shampoo".',
      itens: [
        { en: "Shirt", pt: "Camiseta", imagemUrl: camiseta },
        { en: "Soap", pt: "Sabonete", imagemUrl: sabonete },
        { en: "Toothbrush", pt: "Escova de dentes", imagemUrl: escovarDentes },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Mais 3: "towel", "comb", "backpack".',
      itens: [
        { en: "Towel", pt: "Toalha", imagemUrl: toalha },
        { en: "Comb", pt: "Pente", imagemUrl: pente },
        { en: "Backpack", pt: "Mochila", imagemUrl: mochila },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Última coisa antes de sair de casa: o que a Sofia veste?',
      palavraAlvoEn: "Backpack",
      opcoes: [
        { nome: "mochila", imagemUrl: mochila, correta: true },
        { nome: "sabonete", imagemUrl: sabonete, correta: false },
        { nome: "pente", imagemUrl: pente, correta: false },
      ],
      feedbackAcerto: '"Backpack!" — pronta pra escola.',
      feedbackErro: 'Última coisa antes de sair é vestir a "backpack".',
    },
    {
      tipo: "historiaEn",
      titulo: "The morning race",
      cenas: [
        {
          imagemUrl: banho,
          narracao:
            'Sofia acorda. "Bath! Wash hands! Brush teeth!". Tudo rapidinho!',
        },
        {
          imagemUrl: camiseta,
          narracao:
            '"Put on my shirt! Put on my jacket!". Cabelo penteado com "comb". Pronto!',
        },
        {
          imagemUrl: mochila,
          narracao:
            '"Put on my backpack!". Sofia sorri pra mamãe: "I am ready!". Vamos!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Depois de tudo pronto, o que a Sofia grita?',
      palavraAlvoEn: "I am ready",
      opcoes: [
        { nome: "carinha feliz", imagemUrl: quadroAlegre, correta: true },
        { nome: "sabonete", imagemUrl: sabonete, correta: false },
        { nome: "chuva", imagemUrl: shampoo, correta: false },
      ],
      feedbackAcerto: '"I am ready!" — bem feliz e pronta!',
      feedbackErro: 'Quando tá tudo pronto, a Sofia grita "I am ready!" bem alegre!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menino,
      convite:
        'Faz a rotina inteira em inglês! Sequência: "Wash! Brush! Put on! Backpack! I am ready!". 5 ações, 5 falas!',
      dica: "Pode virar corrida com irmão ou brinquedo.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: quadroAlegre,
      pergunta:
        'Qual parte da rotina você mais gosta? Banho? Escovar dente? Vestir a roupa favorita? Fala em inglês: "I love ...".',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Morning routine in English",
      convite:
        'Missão de formatura: amanhã de manhã, faça a rotina TODA em inglês. Comece com "Wash!" e termine com "I am ready!". A família participa!',
      dicaAdulto: "Foto do 'ready to go!' no álbum — memória forte da semana.",
    },
    {
      tipo: "celebracao",
      medalha: "Ready Star — Semana 3 Pré II",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Semana 3 fechada! Você tem a rotina TODA em inglês na cabeça! You are ready! Congratulations!',
    },
  ],
};

export const semana3Pre2: AulaIng[] = [aula01, aula02, aula03, aula04, aula05];
