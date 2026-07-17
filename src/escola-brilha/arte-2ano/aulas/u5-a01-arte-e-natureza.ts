import type { AulaArte } from "./u1-a01-cores-falam";

const aula: AulaArte = {
  id: "u5-a01-arte-e-natureza",
  ano: "2º Ano",
  unidade: 5,
  aula: 1,
  tituloUnidade: "Arte e Natureza",
  titulo: "A Natureza é uma Obra de Arte",
  duracaoMin: "45 a 60 min",
  objetivos: [
    "perceber cores e texturas da natureza",
    "usar elementos naturais como material de arte",
    "criar uma composição inspirada na natureza",
  ],
  etapas: [
    {
      tipo: "historia",
      titulo: "O Jardim Secreto da Brilha",
      icone: "lapis",
      texto:
        "A Brilha achou uma trilha no fundo do quintal. Cada folha, pedrinha e florzinha parecia pintada de propósito por um grande artista chamado NATUREZA. Vamos descobrir juntos as cores, as texturas e os desenhos que já existem lá fora!",
      lapis: [
        { cor: "verde",   hex: "#7FAE73", emocao: "Folhas",   frase: "Verde: o verde vivo das folhas." },
        { cor: "marrom",  hex: "#8B5A3C", emocao: "Terra",    frase: "Marrom: a terra e os troncos." },
        { cor: "amarelo", hex: "#F0C24A", emocao: "Sol",      frase: "Amarelo: o sol e as flores brilhando." },
        { cor: "azul",    hex: "#5A8FBF", emocao: "Céu",      frase: "Azul: o céu e a água do riacho." },
        { cor: "rosa",    hex: "#E88BA8", emocao: "Flores",   frase: "Rosa: as flores mais delicadas." },
      ],
      convite: "Vem passear no jardim comigo!",
    },
    {
      tipo: "observar-cores",
      titulo: "As Cores da Natureza",
      instrucao: "Olha cada paisagem e toca nas cores que a natureza pintou nela.",
      cenas: [
        { nome: "Floresta",   svg: "floresta",   coresPresentes: ["verde", "marrom", "amarelo"] },
        { nome: "Jardim",     svg: "jardim",     coresPresentes: ["verde", "rosa", "amarelo", "roxo"] },
        { nome: "Praia",      svg: "praia",      coresPresentes: ["azul", "amarelo", "branco"] },
        { nome: "Pôr do sol", svg: "por-do-sol", coresPresentes: ["laranja", "roxo", "marrom"] },
      ],
    },
    {
      tipo: "texturas",
      titulo: "Texturas do Jardim",
      instrucao: "Toca em cada elemento da natureza e descobra qual é a textura dele.",
      itens: [
        { nome: "Tronco da árvore", textura: "madeira", combina: "Áspero, com sulcos duros." },
        { nome: "Pedrinha do rio",  textura: "pedra",   combina: "Lisa e fria." },
        { nome: "Areia da praia",   textura: "areia",   combina: "Grãozinhos soltos que escorrem." },
        { nome: "Água do riacho",   textura: "agua",    combina: "Molhada, escorrega na mão." },
        { nome: "Folha macia",      textura: "folhas",  combina: "Verde, flexível, com nervuras." },
      ],
    },
    {
      tipo: "curiosidade",
      titulo: "Você Sabia?",
      texto:
        "Muitos artistas usam a natureza como MATERIAL: fazem tinta com terra, pincel com galhos, colagens com folhas. A arte com natureza chama-se Land Art.",
    },
    {
      tipo: "quiz",
      titulo: "O Que Você Aprendeu?",
      perguntas: [
        {
          pergunta: "Qual cor mais aparece em uma FLORESTA?",
          opcoes: ["Verde", "Roxo", "Preto"],
          correta: 0,
          explicacao: "Isso! O verde das folhas domina a floresta.",
        },
        {
          pergunta: "A textura de um TRONCO de árvore é…",
          opcoes: ["lisa como vidro", "áspera com sulcos", "molhada"],
          correta: 1,
          explicacao: "Muito bem! Tronco é áspero, com relevo.",
        },
        {
          pergunta: "Land Art é uma arte que usa…",
          opcoes: ["tinta industrial", "elementos da natureza", "computador"],
          correta: 1,
          explicacao: "Perfeito! Land Art usa folhas, pedras, areia — o que a natureza oferece.",
        },
      ],
    },
    {
      tipo: "atividade-manual",
      titulo: "Mandala Natural",
      instrucao:
        "Vamos criar uma mandala usando SÓ coisas da natureza. Peça ajuda para juntar os materiais lá fora.",
      materiais: [
        "Folhas de tamanhos e cores diferentes",
        "Pedrinhas, gravetos e sementes",
        "Uma pétala ou flor caída (nunca arrancada da planta viva)",
        "Um espaço plano no chão ou uma folha grande de papel",
      ],
      passos: [
        { n: 1, texto: "Escolha o CENTRO da mandala: uma pedrinha ou uma flor.", icone: "montagem" },
        { n: 2, texto: "Faça um círculo em volta com folhas iguais.",            icone: "desenho"  },
        { n: 3, texto: "Adicione outro círculo com pedrinhas ou sementes.",     icone: "desenho"  },
        { n: 4, texto: "Continue até sua mandala ficar bem colorida e cheia.",  icone: "desenho"  },
        { n: 5, texto: "Chame a família para ver antes do vento levar!",        icone: "pronto"   },
      ],
    },
    {
      tipo: "missao-casa",
      titulo: "Caça-Tesouros da Natureza",
      instrucao:
        "Saia com um adulto e junte 5 coisas diferentes da natureza (só as que estão no chão). Monte em cima de uma folha e tire uma foto.",
      ideias: [
        "🍂 Uma folha seca",
        "🪨 Uma pedrinha",
        "🌸 Uma pétala caída",
        "🌰 Uma semente ou galho",
        "🐚 Uma casquinha ou conchinha",
      ],
      cursoSlug: "arte-2ano",
      aulaSlug: "u5-a01-cacatesouros-natureza",
    },
    {
      tipo: "relatorio",
      titulo: "Artista da Natureza",
      texto:
        "Você percebeu que a natureza já é uma obra de arte pronta! Sempre que sair de casa, olha o chão, o céu, as folhas — tudo pode virar inspiração.",
    },
  ],
};

export default aula;
