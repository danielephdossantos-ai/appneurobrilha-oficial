import type { Historia } from "./tipos";

const raposaOuvir: Historia = {
  id: "raposa-ouvir",
  numero: 1,
  titulo: "A Raposa que Aprendeu a Ouvir",
  tema: "Amizade",
  nivel: "Descobrir",
  emoji: "🦊",
  faixa: "3 a 5 anos",
  objetivo: "Ouvir com atenção, ampliar vocabulário e perceber sons iniciais das palavras.",
  personagens: "Fofa, a raposinha curiosa · Tico, o passarinho amigo",
  teatro: "Faça a carinha da Fofa quando ela escuta: mãozinha na orelha e olhos bem abertos!",
  aprendemos: {
    palavras: "orelha, silêncio, farfalhar, amigo",
    sons: "som inicial /f/ de Fofa · farfalhar das folhas",
    emocao: "paciência e amizade",
    habilidade: "atenção auditiva",
  },
  cenas: [
    {
      titulo: "A raposinha Fofa acorda",
      narracao:
        "Bom dia! A raposinha Fofa acordou na toca quentinha. Ela abriu os olhinhos e mexeu as orelhas: fru, fru!",
      textoVisual: "A Fofa acordou!",
      tocaveis: [
        { emoji: "🦊", rotulo: "Fofa", fala: "Bom dia! Eu sou a Fofa!", x: 30, y: 60 },
        { emoji: "☀️", rotulo: "Sol", fala: "Sol. O sol está brilhando!", x: 78, y: 20 },
      ],
      atividade: {
        pergunta: "O que a Fofa mexeu quando acordou?",
        opcoes: [
          { texto: "As orelhas", correta: true },
          { texto: "A mochila", correta: false },
          { texto: "O guarda-chuva", correta: false },
        ],
        acerto: "Isso! Ela mexeu as orelhinhas para ouvir o mundo.",
        dica: "Vamos tentar de novo. Escute: fru, fru! O que fica na cabecinha dela?",
      },
      habilidade: "Compreensão literal",
    },
    {
      titulo: "Um som misterioso",
      narracao:
        "De repente, Fofa ouviu um som: piu, piu, piu. Vinha de bem longe, atrás das árvores.",
      textoVisual: "Piu, piu, piu…",
      tocaveis: [
        { emoji: "🌳", rotulo: "Árvore", fala: "Árvore. As folhas fazem farfalhar!", x: 20, y: 30 },
        { emoji: "🐦", rotulo: "Som", fala: "Piu, piu! Quem será?", x: 70, y: 35 },
      ],
      atividade: {
        pergunta: "Quem faz piu, piu?",
        opcoes: [
          { texto: "Um passarinho", correta: true },
          { texto: "Um leão", correta: false },
          { texto: "Um carro", correta: false },
        ],
        acerto: "Muito bem! Piu, piu é som de passarinho.",
        dica: "Escute de novo o som bem fininho: piu, piu. É um bichinho que voa.",
      },
      habilidade: "Discriminação sonora",
    },
    {
      titulo: "O passarinho Tico",
      narracao:
        "Era o Tico, um passarinho azul. Ele estava tristinho, sentado no galho, de cabecinha baixa.",
      textoVisual: "Oi, eu sou o Tico.",
      tocaveis: [
        { emoji: "🐤", rotulo: "Tico", fala: "Oi… eu sou o Tico. Estou tristinho.", x: 60, y: 30 },
        { emoji: "🍃", rotulo: "Galho", fala: "Galho. O Tico está no galho.", x: 35, y: 45 },
      ],
      atividade: {
        pergunta: "Como o Tico está se sentindo?",
        opcoes: [
          { texto: "Tristinho", correta: true },
          { texto: "Com sono", correta: false },
          { texto: "Com fome", correta: false },
        ],
        acerto: "Você percebeu! A cabecinha baixa mostra tristeza.",
        dica: "Olhe a cabecinha dele bem baixinha. Que sentimento é esse?",
      },
      habilidade: "Interpretação de emoções",
    },
    {
      titulo: "Fofa fala, fala, fala",
      narracao:
        "A Fofa ficou tão animada que falou sem parar. O Tico abria o biquinho, mas não conseguia contar nada.",
      textoVisual: "Fofa falou, falou, falou!",
      tocaveis: [
        { emoji: "🦊", rotulo: "Fofa", fala: "Eu falo muito rápido, rápido, rápido!", x: 32, y: 55 },
        { emoji: "💬", rotulo: "Fala", fala: "Blá, blá, blá!", x: 62, y: 30 },
      ],
      atividade: {
        pergunta: "Por que o Tico não conseguia falar?",
        opcoes: [
          { texto: "A Fofa não parava de falar", correta: true },
          { texto: "O Tico dormiu", correta: false },
          { texto: "Estava chovendo", correta: false },
        ],
        acerto: "Isso mesmo! Para ouvir o amigo, a gente faz silêncio.",
        dica: "Pense: quando alguém fala sem parar, dá para o amigo contar a história?",
      },
      habilidade: "Inferência",
    },
    {
      titulo: "O segredo do silêncio",
      narracao:
        "A mamãe raposa ensinou: para ouvir um amigo, primeiro a gente faz silêncio. Shhhh…",
      textoVisual: "Shhhh… silêncio.",
      tocaveis: [
        { emoji: "🤫", rotulo: "Silêncio", fala: "Shhhh! Silêncio.", x: 50, y: 30 },
        { emoji: "🦊", rotulo: "Mamãe", fala: "Escute com as orelhas e com o coração.", x: 25, y: 60 },
      ],
      atividade: {
        pergunta: "Qual palavra começa com o mesmo som de Fofa?",
        opcoes: [
          { texto: "Folha", correta: true },
          { texto: "Bola", correta: false },
          { texto: "Sapo", correta: false },
        ],
        acerto: "Você percebeu o som /f/: Fofa, folha!",
        dica: "Diga bem devagar: ffffofa. Agora ffffolha. Sentiu o vento na boca?",
      },
      habilidade: "Consciência fonológica",
    },
    {
      titulo: "Tico conta a sua história",
      narracao:
        "Em silêncio, Fofa escutou. O Tico contou que perdeu a sua pena azul favorita perto do riacho.",
      textoVisual: "Perdi minha pena azul.",
      tocaveis: [
        { emoji: "🪶", rotulo: "Pena", fala: "Pena. A pena azul do Tico!", x: 68, y: 55 },
        { emoji: "💧", rotulo: "Riacho", fala: "Riacho. A água faz glub, glub.", x: 40, y: 72 },
      ],
      atividade: {
        pergunta: "O que o Tico perdeu?",
        opcoes: [
          { texto: "A pena azul", correta: true },
          { texto: "O chapéu", correta: false },
          { texto: "A bola", correta: false },
        ],
        acerto: "Certinho! Era a pena azul favorita dele.",
        dica: "Escute de novo: ele perdeu algo azul e bem leve, que veio da asinha.",
      },
      habilidade: "Memória auditiva",
    },
    {
      titulo: "Procurando juntos",
      narracao:
        "Os dois foram procurar. Olharam dentro do tronco, embaixo da folha e em cima da pedra.",
      textoVisual: "Dentro, embaixo, em cima!",
      tocaveis: [
        { emoji: "🪵", rotulo: "Tronco", fala: "Dentro do tronco!", x: 25, y: 60 },
        { emoji: "🍂", rotulo: "Folha", fala: "Embaixo da folha!", x: 55, y: 70 },
        { emoji: "🪨", rotulo: "Pedra", fala: "Em cima da pedra!", x: 80, y: 55 },
      ],
      atividade: {
        pergunta: "Onde eles olharam primeiro?",
        opcoes: [
          { texto: "Dentro do tronco", correta: true },
          { texto: "Em cima da pedra", correta: false },
          { texto: "No céu", correta: false },
        ],
        acerto: "Você lembrou da ordem: tronco, folha, pedra!",
        dica: "Vamos repetir juntos: dentro do… tronco! E depois embaixo da folha.",
      },
      habilidade: "Sequência e noções espaciais",
    },
    {
      titulo: "Contando as penas",
      narracao:
        "Perto do riacho havia penas espalhadas. Uma, duas, três penas! Mas só uma era azul.",
      textoVisual: "1, 2, 3 penas!",
      tocaveis: [
        { emoji: "🪶", rotulo: "Uma", fala: "Uma!", x: 30, y: 60 },
        { emoji: "🪶", rotulo: "Duas", fala: "Duas!", x: 52, y: 66 },
        { emoji: "🪶", rotulo: "Três", fala: "Três! Essa é azul!", x: 74, y: 58 },
      ],
      atividade: {
        pergunta: "Quantas penas eles encontraram?",
        opcoes: [
          { texto: "Três", correta: true },
          { texto: "Uma", correta: false },
          { texto: "Dez", correta: false },
        ],
        acerto: "Isso! Uma, duas, três. Três penas!",
        dica: "Vamos contar batendo palminhas em cada pena: um, dois…",
      },
      habilidade: "Contagem",
    },
    {
      titulo: "A pena voltou!",
      narracao:
        "O Tico abriu as asinhas de alegria. A pena azul estava de volta, e ele ganhou também uma amiga.",
      textoVisual: "Que alegria!",
      tocaveis: [
        { emoji: "🐤", rotulo: "Tico", fala: "Obrigado por me escutar!", x: 60, y: 40 },
        { emoji: "🪶", rotulo: "Pena azul", fala: "Pe-na a-zul.", x: 35, y: 58 },
      ],
      atividade: {
        pergunta: "Como o Tico está agora?",
        opcoes: [
          { texto: "Alegre", correta: true },
          { texto: "Tristinho", correta: false },
          { texto: "Com raiva", correta: false },
        ],
        acerto: "Sim! As asinhas abertas mostram alegria.",
        dica: "Olhe as asinhas bem abertas e o biquinho sorrindo.",
      },
      habilidade: "Interpretação",
    },
    {
      titulo: "O presente de ouvir",
      narracao:
        "No fim do dia, Fofa descobriu um presente novo: ouvir os amigos faz o coração ficar quentinho.",
      textoVisual: "Ouvir é um presente.",
      tocaveis: [
        { emoji: "🦊", rotulo: "Fofa", fala: "Agora eu escuto meus amigos!", x: 35, y: 55 },
        { emoji: "❤️", rotulo: "Coração", fala: "Coração quentinho!", x: 68, y: 40 },
      ],
      atividade: {
        pergunta: "O que a Fofa aprendeu na história?",
        opcoes: [
          { texto: "A ouvir os amigos", correta: true },
          { texto: "A correr rápido", correta: false },
          { texto: "A fazer bolo", correta: false },
        ],
        acerto: "Você entendeu a história toda! Ouvir é cuidar do amigo.",
        dica: "Lembre do segredo da mamãe raposa: primeiro a gente faz shhhh…",
      },
      habilidade: "Compreensão global",
    },
  ],
};

const abracoQuentinho: Historia = {
  id: "abraco-quentinho",
  numero: 2,
  titulo: "O Abraço que Esquentou o Dia",
  tema: "Emoções",
  nivel: "Descobrir",
  emoji: "🧸",
  faixa: "3 a 5 anos",
  objetivo: "Nomear emoções, ampliar vocabulário afetivo e perceber rimas simples.",
  personagens: "Bia, a menina do gorro vermelho · Urso Pipo, o ursinho de pelúcia",
  teatro: "Escolha uma emoção e faça a carinha dela no espelho: alegre, tristinho ou com medo!",
  aprendemos: {
    palavras: "abraço, saudade, coragem, colo",
    sons: "rimas: Bia e tia · pão e mão",
    emocao: "empatia e consolo",
    habilidade: "reconhecer emoções",
  },
  cenas: [
    {
      titulo: "Um dia cinzento",
      narracao: "A Bia acordou e o céu estava cinza. Plic, plic, a chuva batia na janela.",
      textoVisual: "Plic, plic, plic.",
      tocaveis: [
        { emoji: "🌧️", rotulo: "Chuva", fala: "Plic, plic! Chuva.", x: 70, y: 25 },
        { emoji: "👧", rotulo: "Bia", fala: "Oi, eu sou a Bia.", x: 32, y: 58 },
      ],
      atividade: {
        pergunta: "Que som a chuva faz na janela?",
        opcoes: [
          { texto: "Plic, plic", correta: true },
          { texto: "Miau", correta: false },
          { texto: "Tum, tum", correta: false },
        ],
        acerto: "Isso! Plic, plic é o som da chuvinha.",
        dica: "Escute de novo o som da água caindo bem fininho.",
      },
      habilidade: "Atenção auditiva",
    },
    {
      titulo: "Onde está o Pipo?",
      narracao: "A Bia procurou o ursinho Pipo, mas ele não estava na caminha.",
      textoVisual: "Cadê o Pipo?",
      tocaveis: [
        { emoji: "🛏️", rotulo: "Caminha", fala: "Caminha vazia.", x: 40, y: 62 },
        { emoji: "👀", rotulo: "Procurar", fala: "Vamos procurar juntos!", x: 70, y: 40 },
      ],
      atividade: {
        pergunta: "O que a Bia está procurando?",
        opcoes: [
          { texto: "O ursinho Pipo", correta: true },
          { texto: "O sapato", correta: false },
          { texto: "A merenda", correta: false },
        ],
        acerto: "Certinho! Ela procura o ursinho Pipo.",
        dica: "Escute o nome do amiguinho de pelúcia dela: Pi-po.",
      },
      habilidade: "Compreensão literal",
    },
    {
      titulo: "Saudade no peito",
      narracao: "Sem o Pipo, a Bia sentiu um aperto no peito. Isso tem nome: saudade.",
      textoVisual: "Saudade.",
      tocaveis: [
        { emoji: "💛", rotulo: "Peito", fala: "Sau-da-de.", x: 50, y: 50 },
        { emoji: "😔", rotulo: "Carinha", fala: "Tristinha.", x: 72, y: 38 },
      ],
      atividade: {
        pergunta: "Como se chama esse sentimento de sentir falta?",
        opcoes: [
          { texto: "Saudade", correta: true },
          { texto: "Fome", correta: false },
          { texto: "Sono", correta: false },
        ],
        acerto: "Você aprendeu uma palavra nova: saudade!",
        dica: "Vamos bater palmas nas sílabas: sau-da-de.",
      },
      habilidade: "Vocabulário afetivo",
    },
    {
      titulo: "A tia ajuda",
      narracao: "A tia da Bia chegou com um pão quentinho na mão e perguntou o que houve.",
      textoVisual: "Pão na mão.",
      tocaveis: [
        { emoji: "🥖", rotulo: "Pão", fala: "Pão. Pão rima com mão!", x: 62, y: 55 },
        { emoji: "👩", rotulo: "Tia", fala: "O que houve, Bia?", x: 30, y: 50 },
      ],
      atividade: {
        pergunta: "Qual palavra rima com pão?",
        opcoes: [
          { texto: "Mão", correta: true },
          { texto: "Gato", correta: false },
          { texto: "Livro", correta: false },
        ],
        acerto: "Isso! Pão e mão terminam com o mesmo som.",
        dica: "Fale devagar: pããão… mããão… gato. Quais dois terminam igual?",
      },
      habilidade: "Rimas",
    },
    {
      titulo: "Procurando pela casa",
      narracao: "Elas procuraram embaixo do sofá, dentro do cesto e atrás da porta.",
      textoVisual: "Embaixo, dentro, atrás.",
      tocaveis: [
        { emoji: "🛋️", rotulo: "Sofá", fala: "Embaixo do sofá!", x: 25, y: 62 },
        { emoji: "🧺", rotulo: "Cesto", fala: "Dentro do cesto!", x: 55, y: 68 },
        { emoji: "🚪", rotulo: "Porta", fala: "Atrás da porta!", x: 80, y: 50 },
      ],
      atividade: {
        pergunta: "Onde elas olharam por último?",
        opcoes: [
          { texto: "Atrás da porta", correta: true },
          { texto: "Embaixo do sofá", correta: false },
          { texto: "No jardim", correta: false },
        ],
        acerto: "Você lembrou da ordem certinha!",
        dica: "Repita comigo: sofá, cesto e… porta!",
      },
      habilidade: "Sequência",
    },
    {
      titulo: "Um pedacinho de orelha",
      narracao: "De repente, a Bia viu uma orelhinha marrom aparecendo na cadeira de balanço.",
      textoVisual: "Uma orelhinha!",
      tocaveis: [
        { emoji: "🧸", rotulo: "Orelha", fala: "É o Pipo!", x: 66, y: 45 },
        { emoji: "🪑", rotulo: "Cadeira", fala: "Cadeira de balanço.", x: 40, y: 62 },
      ],
      atividade: {
        pergunta: "De quem é a orelhinha marrom?",
        opcoes: [
          { texto: "Do ursinho Pipo", correta: true },
          { texto: "Da tia", correta: false },
          { texto: "Do cachorro", correta: false },
        ],
        acerto: "Sim! O Pipo estava escondidinho.",
        dica: "Pense em quem estava perdido nesta história.",
      },
      habilidade: "Previsão",
    },
    {
      titulo: "O abraço grande",
      narracao: "A Bia apertou o Pipo num abraço bem grande. O peito ficou quentinho outra vez.",
      textoVisual: "Abraço bem grande!",
      tocaveis: [
        { emoji: "🤗", rotulo: "Abraço", fala: "A-bra-ço!", x: 50, y: 48 },
        { emoji: "🧸", rotulo: "Pipo", fala: "Eu senti sua falta!", x: 72, y: 55 },
      ],
      atividade: {
        pergunta: "Quantas palminhas tem a palavra a-bra-ço?",
        opcoes: [
          { texto: "Três", correta: true },
          { texto: "Uma", correta: false },
          { texto: "Cinco", correta: false },
        ],
        acerto: "Isso! A-bra-ço: três palminhas.",
        dica: "Bata palmas comigo: a… bra… ço.",
      },
      habilidade: "Consciência silábica",
    },
    {
      titulo: "O sol apareceu",
      narracao: "A chuva parou e um raio de sol entrou pela janela, bem amarelinho.",
      textoVisual: "O sol chegou!",
      tocaveis: [
        { emoji: "☀️", rotulo: "Sol", fala: "Sol amarelo!", x: 74, y: 25 },
        { emoji: "🪟", rotulo: "Janela", fala: "Janela.", x: 45, y: 40 },
      ],
      atividade: {
        pergunta: "De que cor é o sol da janela?",
        opcoes: [
          { texto: "Amarelo", correta: true },
          { texto: "Verde", correta: false },
          { texto: "Roxo", correta: false },
        ],
        acerto: "Certinho! Um sol bem amarelinho.",
        dica: "Olhe a cor da luz que entrou: é a cor da banana.",
      },
      habilidade: "Cores",
    },
    {
      titulo: "Contando para a tia",
      narracao: "A Bia contou tudo para a tia: a saudade, a procura e o abraço.",
      textoVisual: "Eu vou contar!",
      tocaveis: [
        { emoji: "👧", rotulo: "Bia", fala: "Eu senti saudade e depois achei o Pipo!", x: 34, y: 55 },
        { emoji: "👩", rotulo: "Tia", fala: "Que bom te ouvir, Bia.", x: 66, y: 50 },
      ],
      atividade: {
        pergunta: "O que aconteceu primeiro na história?",
        opcoes: [
          { texto: "A Bia sentiu saudade", correta: true },
          { texto: "O abraço", correta: false },
          { texto: "O sol apareceu", correta: false },
        ],
        acerto: "Você contou a história na ordem certa!",
        dica: "Lembre do começo: o céu estava cinza e o Pipo não estava na caminha.",
      },
      habilidade: "Oralidade e sequência",
    },
    {
      titulo: "Quentinho por dentro",
      narracao: "Abraço é remédio de coração. Quando a gente abraça, o dia fica mais quentinho.",
      textoVisual: "Abraço aquece o dia.",
      tocaveis: [
        { emoji: "❤️", rotulo: "Coração", fala: "Quentinho!", x: 50, y: 42 },
        { emoji: "🧸", rotulo: "Pipo", fala: "Vamos abraçar de novo?", x: 72, y: 58 },
      ],
      atividade: {
        pergunta: "O que deixou o dia da Bia melhor?",
        opcoes: [
          { texto: "Um abraço", correta: true },
          { texto: "Um brinquedo novo", correta: false },
          { texto: "Um bolo", correta: false },
        ],
        acerto: "Isso mesmo! O abraço aqueceu o coração dela.",
        dica: "Pense no que ela fez quando encontrou o Pipo.",
      },
      habilidade: "Compreensão global",
    },
  ],
};

const sementeDeLu: Historia = {
  id: "semente-de-lu",
  numero: 3,
  titulo: "A Semente de Lú",
  tema: "Natureza",
  nivel: "Aprender",
  emoji: "🌱",
  faixa: "4 a 6 anos",
  objetivo: "Compreender a sequência do crescimento de uma planta e explorar sílabas iniciais.",
  personagens: "Lú, a menina jardineira · Dona Joaninha, a ajudante do jardim",
  teatro: "Faça de conta que você é a sementinha: agache, cresça devagar e abra os braços como folhas!",
  aprendemos: {
    palavras: "semente, raiz, brotar, regador",
    sons: "sílaba inicial SE de semente · sons do jardim",
    emocao: "paciência e cuidado",
    habilidade: "sequência lógica",
  },
  cenas: [
    {
      titulo: "Uma sementinha na mão",
      narracao: "A Lú ganhou uma sementinha pequenininha. Cabia toda na palma da mão.",
      textoVisual: "Uma sementinha.",
      tocaveis: [
        { emoji: "🌰", rotulo: "Semente", fala: "Se-men-te.", x: 52, y: 55 },
        { emoji: "👧", rotulo: "Lú", fala: "Oi! Eu sou a Lú.", x: 26, y: 58 },
      ],
      atividade: {
        pergunta: "Com qual sílaba começa a palavra semente?",
        opcoes: [
          { texto: "SE", correta: true },
          { texto: "BO", correta: false },
          { texto: "MI", correta: false },
        ],
        acerto: "Você ouviu bem: SE-men-te!",
        dica: "Fale devagar e escute só o comecinho: se… men… te.",
      },
      habilidade: "Sílaba inicial",
    },
    {
      titulo: "Cavando a terra",
      narracao: "Com a colherzinha, a Lú cavou um buraco pequeno na terra fofa.",
      textoVisual: "Cava, cava!",
      tocaveis: [
        { emoji: "🥄", rotulo: "Colher", fala: "Colher de jardim.", x: 62, y: 60 },
        { emoji: "🟤", rotulo: "Terra", fala: "Terra fofa!", x: 40, y: 72 },
      ],
      atividade: {
        pergunta: "Onde a semente precisa ir?",
        opcoes: [
          { texto: "Dentro da terra", correta: true },
          { texto: "Em cima do telhado", correta: false },
          { texto: "Dentro do copo vazio", correta: false },
        ],
        acerto: "Isso! A semente cresce dentro da terra.",
        dica: "Pense onde ficam as raízes das plantinhas.",
      },
      habilidade: "Noção espacial: dentro",
    },
    {
      titulo: "Água no regador",
      narracao: "A Lú encheu o regador. Ploc, ploc, as gotinhas caíram na terra.",
      textoVisual: "Ploc, ploc!",
      tocaveis: [
        { emoji: "🪣", rotulo: "Regador", fala: "Regador cheio!", x: 66, y: 45 },
        { emoji: "💧", rotulo: "Gotas", fala: "Ploc, ploc!", x: 45, y: 65 },
      ],
      atividade: {
        pergunta: "O regador está cheio ou vazio?",
        opcoes: [
          { texto: "Cheio", correta: true },
          { texto: "Vazio", correta: false },
          { texto: "Quebrado", correta: false },
        ],
        acerto: "Certinho! Cheio de água para a planta beber.",
        dica: "Olhe a água saindo: quando sai muita água, o regador está…",
      },
      habilidade: "Cheio e vazio",
    },
    {
      titulo: "Esperar dá trabalho",
      narracao: "No outro dia, nada apareceu. A Lú suspirou: esperar dá um pouquinho de trabalho.",
      textoVisual: "Ainda não nasceu…",
      tocaveis: [
        { emoji: "😕", rotulo: "Lú", fala: "Será que vai nascer?", x: 32, y: 50 },
        { emoji: "🟤", rotulo: "Terra", fala: "Shh, a semente está trabalhando.", x: 58, y: 70 },
      ],
      atividade: {
        pergunta: "O que a Lú precisa ter?",
        opcoes: [
          { texto: "Paciência", correta: true },
          { texto: "Pressa", correta: false },
          { texto: "Raiva", correta: false },
        ],
        acerto: "Sim! Plantinha cresce devagar, com paciência.",
        dica: "A planta não nasce num dia. O que a gente precisa ter para esperar?",
      },
      habilidade: "Socioemocional",
    },
    {
      titulo: "Dona Joaninha explica",
      narracao:
        "Dona Joaninha pousou numa folha e contou: primeiro nasce a raiz, escondida na terra.",
      textoVisual: "Primeiro a raiz.",
      tocaveis: [
        { emoji: "🐞", rotulo: "Joaninha", fala: "Primeiro vem a raiz!", x: 68, y: 38 },
        { emoji: "🌿", rotulo: "Raiz", fala: "Ra-iz.", x: 42, y: 72 },
      ],
      atividade: {
        pergunta: "O que nasce primeiro na plantinha?",
        opcoes: [
          { texto: "A raiz", correta: true },
          { texto: "A flor", correta: false },
          { texto: "A fruta", correta: false },
        ],
        acerto: "Isso! A raiz vem primeiro, bem escondida.",
        dica: "Escute a Dona Joaninha de novo: primeiro nasce a…",
      },
      habilidade: "Sequência lógica",
    },
    {
      titulo: "O brotinho apareceu",
      narracao: "Na manhã seguinte, um brotinho verde saiu da terra. Oi, mundo!",
      textoVisual: "Nasceu um brotinho!",
      tocaveis: [
        { emoji: "🌱", rotulo: "Broto", fala: "Bro-to!", x: 50, y: 60 },
        { emoji: "👧", rotulo: "Lú", fala: "Que alegria!", x: 26, y: 55 },
      ],
      atividade: {
        pergunta: "De que cor é o brotinho?",
        opcoes: [
          { texto: "Verde", correta: true },
          { texto: "Azul", correta: false },
          { texto: "Preto", correta: false },
        ],
        acerto: "Certinho! Um brotinho bem verdinho.",
        dica: "É a cor das folhas das árvores.",
      },
      habilidade: "Percepção visual",
    },
    {
      titulo: "Contando as folhas",
      narracao: "Passaram os dias e as folhas foram chegando: uma, duas, três, quatro!",
      textoVisual: "1, 2, 3, 4 folhas.",
      tocaveis: [
        { emoji: "🍃", rotulo: "Folha 1", fala: "Uma!", x: 32, y: 55 },
        { emoji: "🍃", rotulo: "Folha 2", fala: "Duas!", x: 50, y: 48 },
        { emoji: "🍃", rotulo: "Folha 3", fala: "Três!", x: 66, y: 55 },
        { emoji: "🍃", rotulo: "Folha 4", fala: "Quatro!", x: 80, y: 62 },
      ],
      atividade: {
        pergunta: "Quantas folhas a plantinha tem?",
        opcoes: [
          { texto: "Quatro", correta: true },
          { texto: "Duas", correta: false },
          { texto: "Oito", correta: false },
        ],
        acerto: "Você contou muito bem: quatro folhas!",
        dica: "Toque em cada folha e conte comigo: um, dois, três…",
      },
      habilidade: "Contagem",
    },
    {
      titulo: "Sol e sombra",
      narracao: "A Lú levou o vasinho para o sol. Plantas gostam de luz para crescer fortes.",
      textoVisual: "Planta gosta de sol.",
      tocaveis: [
        { emoji: "☀️", rotulo: "Sol", fala: "Luz do sol!", x: 76, y: 22 },
        { emoji: "🪴", rotulo: "Vaso", fala: "Vasinho no sol.", x: 45, y: 60 },
      ],
      atividade: {
        pergunta: "Do que a plantinha precisa para crescer?",
        opcoes: [
          { texto: "Água e sol", correta: true },
          { texto: "Chocolate", correta: false },
          { texto: "Escuro total", correta: false },
        ],
        acerto: "Isso! Água, sol e cuidado.",
        dica: "Lembre do regador e da luz que entrou na janela.",
      },
      habilidade: "Conhecimento do mundo",
    },
    {
      titulo: "A primeira flor",
      narracao: "Um dia, pluf! Abriu uma flor amarela, do tamanho da mãozinha da Lú.",
      textoVisual: "Uma flor amarela!",
      tocaveis: [
        { emoji: "🌼", rotulo: "Flor", fala: "Flor amarela!", x: 54, y: 45 },
        { emoji: "🐞", rotulo: "Joaninha", fala: "Eu avisei que ia crescer!", x: 76, y: 55 },
      ],
      atividade: {
        pergunta: "O que veio depois das folhas?",
        opcoes: [
          { texto: "A flor", correta: true },
          { texto: "A raiz", correta: false },
          { texto: "A semente na mão", correta: false },
        ],
        acerto: "Perfeito: raiz, broto, folhas e flor!",
        dica: "Vamos lembrar a ordem: raiz, broto, folhas e depois…",
      },
      habilidade: "Sequência lógica",
    },
    {
      titulo: "Quem cuida, faz crescer",
      narracao: "A Lú descobriu: com água, sol e paciência, até a menor sementinha vira flor.",
      textoVisual: "Cuidar faz crescer.",
      tocaveis: [
        { emoji: "🌼", rotulo: "Flor", fala: "Obrigada por cuidar de mim!", x: 56, y: 48 },
        { emoji: "👧", rotulo: "Lú", fala: "Eu tive paciência!", x: 28, y: 55 },
      ],
      atividade: {
        pergunta: "O que a Lú aprendeu?",
        opcoes: [
          { texto: "Que cuidar com paciência faz crescer", correta: true },
          { texto: "Que plantas crescem num minuto", correta: false },
          { texto: "Que flor nasce antes da raiz", correta: false },
        ],
        acerto: "Você entendeu a história inteirinha!",
        dica: "Pense em quanto tempo a plantinha levou para virar flor.",
      },
      habilidade: "Compreensão global",
    },
  ],
};

export const historias: Record<string, Historia> = {
  [raposaOuvir.id]: raposaOuvir,
  [abracoQuentinho.id]: abracoQuentinho,
  [sementeDeLu.id]: sementeDeLu,
};
