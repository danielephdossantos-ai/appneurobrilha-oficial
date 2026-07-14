import type { Aula } from "../types";
import { url as bebeImg } from "@/assets/neuro-treino/objetos/bebe.png.asset.json";
import { url as meninoImg } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as casaAntigaImg } from "@/assets/neuro-treino/objetos/casa-antiga.png.asset.json";
import { url as casaModernaImg } from "@/assets/neuro-treino/objetos/casa-moderna.png.asset.json";
import { url as telefoneAntigoImg } from "@/assets/neuro-treino/objetos/telefone-antigo.png.asset.json";
import { url as celularImg } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as bicicletaAntigaImg } from "@/assets/neuro-treino/objetos/bicicleta-antiga.png.asset.json";
import { url as bicicletaModernaImg } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";
import { url as plantaPequenaImg } from "@/assets/neuro-treino/objetos/planta-pequena.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as radioAntigoImg } from "@/assets/neuro-treino/objetos/radio-antigo.png.asset.json";
import { url as tvModernaImg } from "@/assets/neuro-treino/objetos/tv-moderna.png.asset.json";
import { url as cameraAntigaImg } from "@/assets/neuro-treino/objetos/camera-antiga.png.asset.json";
import { url as relogioMagicoImg } from "@/assets/neuro-treino/objetos/relogio-magico.png.asset.json";
import { url as museuImg } from "@/assets/neuro-treino/objetos/museu.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as albumImg } from "@/assets/neuro-treino/objetos/album.png.asset.json";
import { url as presenteImg } from "@/assets/neuro-treino/objetos/presente.png.asset.json";

/**
 * EF01HI03 — História · 1º Ano
 * Missão: "As Mudanças do Tempo".
 * Descrever e distinguir os seus papéis e responsabilidades relacionados à
 * família, à escola e à comunidade — reconhecendo as transformações
 * (passado × presente) em pessoas, objetos e lugares.
 */
const aula: Aula = {
  codigo: "EF01HI03",
  ano: "1º Ano",
  disciplina: "História",
  titulo: "As Mudanças do Tempo",

  narrativa: {
    titulo: "O Relógio Mágico Da Floresta",
    contexto:
      "Brilha estava passeando pela Floresta Encantada quando encontrou um RELÓGIO MÁGICO ⏰ escondido entre as árvores!",
    problema:
      "A Coruja Sábia chegou voando e explicou: 'Esse relógio tem um segredo. Quando você gira os ponteiros, ele viaja entre o PASSADO e o PRESENTE. Mas ele perdeu os ponteiros — só quem descobrir como as coisas mudam com o tempo pode ajudar a consertá-lo!'",
    convite: "Bora viajar no tempo com o Brilha e devolver os ponteiros ao relógio?",
  },

  conhecimentosPrevios: [
    "Reconhecer que crescemos com o tempo.",
    "Saber que alguns objetos são antigos e outros modernos.",
  ],

  missao:
    "Perceber que pessoas, objetos, lugares e costumes mudam com o passar do tempo, compreendendo as diferenças entre passado e presente.",

  objetivos: [
    "Compreender que o TEMPO provoca mudanças.",
    "Identificar diferenças entre PASSADO e PRESENTE.",
    "Observar transformações na própria vida e no ambiente.",
    "Desenvolver a noção de continuidade e mudança.",
    "Valorizar a história das pessoas e dos lugares.",
  ],

  motivacao:
    "O tempo transforma TUDO — e conhecer o passado ajuda a entender por que o presente é do jeito que é. 🕰️",

  explicacao:
    "🕰️ PASSADO é tudo o que já aconteceu — coisas antigas.\n📅 PRESENTE é o AGORA — coisas atuais.\n👶 Pessoas mudam: bebês viram crianças, crianças viram adultos.\n🏠 Lugares mudam: casas antigas viram casas modernas.\n☎️ Objetos mudam: telefones com fio viraram celulares.\n🌱 Até as plantas mudam: uma sementinha vira uma árvore grande.",

  explicacoesNiveis: {
    nivel1: "Tudo muda com o tempo.",
    nivel2: "Antes era de um jeito. Agora é de outro. Isso é MUDANÇA.",
    nivel3: "Passado é o que já foi. Presente é o agora.",
    nivel4: "Olhar pro passado ajuda a entender o presente e cuidar do futuro.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha vê uma foto antiga: um telefone com FIO e um DISCO pra girar. Hoje ele usa um CELULAR. O que mudou?",
    passos: [
      "Antes: telefone com fio, ficava fixo em casa.",
      "Agora: celular sem fio, pode ir pra qualquer lugar.",
      "O objeto mudou — e o jeito de usar também.",
    ],
    resposta: "📱 O telefone MUDOU com o tempo. Isso é a passagem do PASSADO pro PRESENTE.",
  },

  atividadeGuiada: {
    enunciado: "Olha essa imagem: um CELULAR com aplicativos coloridos. Ela é do passado ou do presente?",
    resposta: "📅 Do PRESENTE!",
    explicacao:
      "Celulares são objetos ATUAIS. No passado as pessoas usavam telefones grandes com fio e disco pra ligar.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual dessas imagens é do PRESENTE?",
      opcoes: [
        { nome: "celular", imagemUrl: celularImg },
        { nome: "telefone", imagemUrl: telefoneAntigoImg },
        { nome: "radio", imagemUrl: radioAntigoImg },
      ],
      respostaCerta: "celular",
    },
  },

  exercicios: [
    {
      enunciado: "As pessoas mudam com o tempo?",
      resposta: "✅ SIM! Bebês crescem, viram crianças, depois adultos.",
      dica: "Você já foi bebê e hoje é criança — mudou.",
    },
    {
      enunciado: "Um TELEFONE COM DISCO é do passado ou do presente?",
      resposta: "🕰️ Do PASSADO. Hoje usamos celulares.",
      dica: "Antigamente os telefones tinham fio e ficavam fixos.",
    },
    {
      enunciado: "O que a gente pode observar no MUSEU?",
      resposta: "📷 Objetos ANTIGOS que contam a história das pessoas.",
      dica: "Museus guardam coisas do passado.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: identifique o que é do passado e o que é do presente!",
    resposta: "Passado × Presente — cada objeto tem seu tempo.",
    visual: {
      perguntas: [
        {
          pergunta: "Quem vem PRIMEIRO na vida?",
          opcoes: ["O bebê", "A criança", "O adulto"],
          correta: 0,
          explicacao: "Todo mundo começa bebê e depois cresce.",
          visual: { tipo: "itens", imagemUrl: bebeImg, quantidade: 1, rotulo: "👶" },
        },
        {
          pergunta: "Um TELEFONE COM DISCO representa:",
          opcoes: ["O passado", "O presente", "O futuro"],
          correta: 0,
          explicacao: "Telefones de disco são antigos — do passado.",
          visual: { tipo: "itens", imagemUrl: telefoneAntigoImg, quantidade: 1, rotulo: "☎️" },
        },
        {
          pergunta: "O CELULAR representa:",
          opcoes: ["O presente", "O passado", "Nenhum dos dois"],
          correta: 0,
          explicacao: "Celulares são objetos atuais — do presente.",
          visual: { tipo: "itens", imagemUrl: celularImg, quantidade: 1, rotulo: "📱" },
        },
        {
          pergunta: "Uma PLANTA PEQUENA pode se transformar em:",
          opcoes: ["Uma árvore grande", "Um carro", "Uma pedra"],
          correta: 0,
          explicacao: "Com o tempo, plantas crescem e viram árvores.",
          visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
        },
        {
          pergunta: "Nossa vida MUDA porque:",
          opcoes: ["Crescemos e vivemos novas experiências", "Ficamos iguais", "O tempo para"],
          correta: 0,
          explicacao: "O tempo faz a gente crescer e viver coisas novas.",
          visual: { tipo: "itens", imagemUrl: relogioMagicoImg, quantidade: 1, rotulo: "⏰" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🕰️ PASSADO = tudo o que já aconteceu.",
      "📅 PRESENTE = o AGORA.",
      "👶 Pessoas mudam: bebê → criança → adulto.",
      "🏠 Lugares e objetos também mudam com o tempo.",
      "🌳 Conhecer o passado ajuda a entender o presente.",
    ],
    dica: "Olha em volta: cada objeto tem uma HISTÓRIA de como chegou até aqui.",
  },

  quiz: [
    {
      pergunta: "Quem vem primeiro?",
      opcoes: ["O bebê", "A criança", "O adulto"],
      correta: 0,
      explicacao: "Todo mundo começa bebê.",
      visual: { tipo: "itens", imagemUrl: bebeImg, quantidade: 1, rotulo: "👶" },
    },
    {
      pergunta: "Os objetos podem mudar com o tempo?",
      opcoes: ["Sim", "Não", "Apenas os brinquedos"],
      correta: 0,
      explicacao: "Todos os objetos mudam — telefone, casa, bicicleta.",
      visual: { tipo: "itens", imagemUrl: telefoneAntigoImg, quantidade: 1, rotulo: "☎️" },
    },
    {
      pergunta: "O celular representa:",
      opcoes: ["O presente", "O passado", "Nenhum dos dois"],
      correta: 0,
      explicacao: "Celulares são do presente.",
      visual: { tipo: "itens", imagemUrl: celularImg, quantidade: 1, rotulo: "📱" },
    },
    {
      pergunta: "Nossa vida muda porque:",
      opcoes: ["Crescemos e vivemos novas experiências", "Ficamos sempre iguais", "O tempo para"],
      correta: 0,
      explicacao: "O tempo transforma tudo.",
      visual: { tipo: "itens", imagemUrl: meninoImg, quantidade: 1, rotulo: "🧒" },
    },
    {
      pergunta: "Hoje aprendemos sobre:",
      opcoes: [
        "As mudanças entre passado e presente",
        "Apenas matemática",
        "Apenas animais",
      ],
      correta: 0,
      explicacao: "A missão foi entender como o tempo transforma tudo.",
      visual: { tipo: "itens", imagemUrl: relogioMagicoImg, quantidade: 1, rotulo: "🕰️" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Explorador do Tempo! 🎁 Item desbloqueado: 🕰️ Relógio Mágico do Brilha. Você agora sabe viajar entre o passado e o presente!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O passado nos ajuda a entender como chegamos ao presente. Todos fazemos parte da história — e cada mudança começa com uma pessoa que teve uma boa ideia. 💡",
  },

  interativas: [
    // APRENDENDO — Pares de imagens: antigo ↔ moderno (ligar)
    {
      tipo: "ligar",
      titulo: "Antes E Depois",
      instrucao: "Ligue cada objeto do PASSADO ao seu par do PRESENTE.",
      pares: [
        { a: "☎️ TELEFONE ANTIGO", b: "📱 CELULAR", aImagem: telefoneAntigoImg, bImagem: celularImg },
        { a: "🏚️ CASA ANTIGA", b: "🏡 CASA MODERNA", aImagem: casaAntigaImg, bImagem: casaModernaImg },
        { a: "🚲 BICICLETA ANTIGA", b: "🚴 BICICLETA MODERNA", aImagem: bicicletaAntigaImg, bImagem: bicicletaModernaImg },
        { a: "📻 RÁDIO ANTIGO", b: "📺 TV MODERNA", aImagem: radioAntigoImg, bImagem: tvModernaImg },
      ],
    },

    // FASE 1 — Antes ou Agora? (selecionar apenas os do presente)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 1 · Antes Ou Agora?",
      instrucao: "Toque APENAS nas imagens que representam o PRESENTE (o agora).",
      criterio: "Presente 📅",
      opcoes: [
        { nome: "Celular", imagemUrl: celularImg, rotulo: "📱 CELULAR", correto: true },
        { nome: "TV moderna", imagemUrl: tvModernaImg, rotulo: "📺 TV MODERNA", correto: true },
        { nome: "Bicicleta moderna", imagemUrl: bicicletaModernaImg, rotulo: "🚴 BICICLETA MODERNA", correto: true },
        { nome: "Telefone antigo", imagemUrl: telefoneAntigoImg, rotulo: "☎️ TELEFONE ANTIGO", correto: false },
        { nome: "Rádio antigo", imagemUrl: radioAntigoImg, rotulo: "📻 RÁDIO ANTIGO", correto: false },
        { nome: "Câmera antiga", imagemUrl: cameraAntigaImg, rotulo: "📷 CÂMERA ANTIGA", correto: false },
      ],
      acerto: "📅 Isso! Esses objetos são do PRESENTE.",
      erro: "Os objetos antigos são do passado. Toque só nos atuais.",
    },

    // FASE 2 — O que mudou? (mostrar duas imagens, criança escolhe o que mudou)
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · O Que Mudou?",
      instrucao: "Olha essas duas imagens: uma PLANTA PEQUENA e uma ÁRVORE grande. O que aconteceu?",
      pergunta: "O que MUDOU com o tempo?",
      opcoes: [
        { nome: "CRESCEU", imagemUrl: arvoreImg, rotulo: "🌳 A PLANTA CRESCEU!" },
        { nome: "SUMIU", imagemUrl: plantaPequenaImg, rotulo: "❌ SUMIU" },
        { nome: "IGUAL", imagemUrl: casaAntigaImg, rotulo: "❌ FICOU IGUAL" },
      ],
      correta: 0,
      acerto: "🌳 Isso! A planta CRESCEU e virou uma árvore. O tempo transforma tudo!",
      erro: "Olha bem: a planta pequena virou uma árvore GRANDE. Ela cresceu com o tempo.",
    },

    // FASE 3 — Organize no tempo (arrastar cartões pra linha do tempo)
    {
      tipo: "ordenar",
      titulo: "Fase 3 · Organize No Tempo",
      instrucao: "Arraste os cartões pra ordem certa: o que aconteceu primeiro, depois e por último.",
      itens: ["NASCER", "IR PARA A ESCOLA", "FAZER ANIVERSÁRIO"],
      imagens: [
        { imagemUrl: bebeImg, quantidade: 1, rotulo: "👶 NASCER", cor: "#F472B6" },
        { imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫 ESCOLA", cor: "#34D399" },
        { imagemUrl: boloImg, quantidade: 1, rotulo: "🎂 ANIVERSÁRIO", cor: "#FBBF24" },
      ],
    },

    // FASE 4 — Museu do Tempo (selecionar apenas objetos do PASSADO)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 4 · Museu Do Tempo",
      instrucao:
        "Brilha entrou num MUSEU! Toque APENAS nos objetos do PASSADO — os antigos.",
      criterio: "Passado 🕰️",
      opcoes: [
        { nome: "Rádio antigo", imagemUrl: radioAntigoImg, rotulo: "📻 RÁDIO ANTIGO", correto: true },
        { nome: "Câmera antiga", imagemUrl: cameraAntigaImg, rotulo: "📷 CÂMERA ANTIGA", correto: true },
        { nome: "Telefone antigo", imagemUrl: telefoneAntigoImg, rotulo: "☎️ TELEFONE ANTIGO", correto: true },
        { nome: "Bicicleta antiga", imagemUrl: bicicletaAntigaImg, rotulo: "🚲 BICICLETA ANTIGA", correto: true },
        { nome: "TV moderna", imagemUrl: tvModernaImg, rotulo: "📺 TV MODERNA", correto: false },
        { nome: "Celular", imagemUrl: celularImg, rotulo: "📱 CELULAR", correto: false },
      ],
      acerto: "🏛️ Museu explorado! Você reconheceu todos os objetos do passado.",
      erro: "TV e celular são objetos do PRESENTE — não ficam no museu do tempo.",
    },

    // FASE 5 — Minha Linha do Tempo (álbum personalizado)
    {
      tipo: "album",
      titulo: "Fase 5 · Minha Linha Do Tempo",
      instrucao:
        "Monte a SUA linha do tempo! Escolha os momentos que fazem parte da sua história — o Brilha vai guardar no seu perfil.",
      escolhas: [
        {
          label: "Quando você NASCEU",
          modo: "imagem",
          opcoes: [
            { nome: "Bebê", imagemUrl: bebeImg, rotulo: "👶 NASCI" },
          ],
        },
        {
          label: "Um aniversário especial",
          modo: "imagem",
          opcoes: [
            { nome: "Bolo de aniversário", imagemUrl: boloImg, rotulo: "🎂 MEU ANIVERSÁRIO" },
            { nome: "Presente", imagemUrl: presenteImg, rotulo: "🎁 PRESENTE" },
          ],
        },
        {
          label: "Quando entrou na ESCOLA",
          modo: "imagem",
          opcoes: [
            { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ENTREI NA ESCOLA" },
          ],
        },
        {
          label: "Uma lembrança especial",
          modo: "imagem",
          opcoes: [
            { nome: "Álbum", imagemUrl: albumImg, rotulo: "📖 LEMBRANÇA" },
            { nome: "Presente", imagemUrl: presenteImg, rotulo: "🎁 PRESENTE" },
            { nome: "Bicicleta", imagemUrl: bicicletaModernaImg, rotulo: "🚴 BICICLETA" },
          ],
        },
      ],
      acerto: "🕰️ Sua linha do tempo está pronta! Essa é a SUA história.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "O CELULAR é do:",
        opcoes: ["Presente", "Passado", "Nem sei"],
        correta: 0,
        explicacao: "Celular é do presente — usado hoje.",
        visual: { tipo: "itens", imagemUrl: celularImg, quantidade: 1, rotulo: "📱" },
      },
      {
        pergunta: "O TELEFONE COM DISCO é do:",
        opcoes: ["Passado", "Presente", "Nem sei"],
        correta: 0,
        explicacao: "Telefone com disco é antigo — do passado.",
        visual: { tipo: "itens", imagemUrl: telefoneAntigoImg, quantidade: 1, rotulo: "☎️" },
      },
      {
        pergunta: "Uma sementinha pode virar:",
        opcoes: ["Uma árvore grande", "Uma pedra", "Um carro"],
        correta: 0,
        explicacao: "Com o tempo, a planta cresce e vira árvore.",
        visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
      },
    ],
    medio: [
      {
        pergunta: "As casas do PASSADO eram mais:",
        opcoes: ["Simples, de madeira", "Iguais às de hoje", "De vidro colorido"],
        correta: 0,
        explicacao: "Casas antigas costumavam ser mais simples e de madeira.",
        visual: { tipo: "itens", imagemUrl: casaAntigaImg, quantidade: 1, rotulo: "🏚️" },
      },
      {
        pergunta: "Um lugar que guarda objetos ANTIGOS é:",
        opcoes: ["Museu", "Supermercado", "Escola"],
        correta: 0,
        explicacao: "Museu guarda coisas do passado.",
        visual: { tipo: "itens", imagemUrl: museuImg, quantidade: 1, rotulo: "🏛️" },
      },
      {
        pergunta: "Uma bicicleta ANTIGA e uma MODERNA são:",
        opcoes: ["Diferentes — mudaram com o tempo", "Iguais", "A mesma coisa"],
        correta: 0,
        explicacao: "Objetos mudam de forma com o tempo.",
        visual: { tipo: "itens", imagemUrl: bicicletaAntigaImg, quantidade: 1, rotulo: "🚲" },
      },
    ],
    dificil: [
      {
        pergunta: "PASSADO significa:",
        opcoes: ["O que já aconteceu", "O agora", "O que vai acontecer"],
        correta: 0,
        explicacao: "Passado é o que já foi.",
        visual: { tipo: "itens", imagemUrl: relogioMagicoImg, quantidade: 1, rotulo: "🕰️" },
      },
      {
        pergunta: "PRESENTE significa:",
        opcoes: ["O agora", "O que já passou", "O amanhã"],
        correta: 0,
        explicacao: "Presente é o momento atual.",
        visual: { tipo: "itens", imagemUrl: celularImg, quantidade: 1, rotulo: "📅" },
      },
      {
        pergunta: "Conhecer o PASSADO ajuda a:",
        opcoes: ["Entender o presente", "Esquecer as coisas", "Ficar parado"],
        correta: 0,
        explicacao: "Olhar pro passado ajuda a entender de onde viemos.",
        visual: { tipo: "itens", imagemUrl: museuImg, quantidade: 1, rotulo: "🏛️" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Corrida Do Tempo",
    objetivo:
      "Os objetos passam correndo na esteira! Arraste rapidamente cada um pra coluna certa: 🕰️ PASSADO ou 📅 PRESENTE. Cada acerto faz o Relógio Mágico voltar a funcionar!",
    tempoSegundos: 90,
    categorias: [
      { nome: "PASSADO", cor: "#A16207", emoji: "🕰️" },
      { nome: "PRESENTE", cor: "#0EA5E9", emoji: "📅" },
    ],
    objetos: [
      { nome: "Telefone antigo", imagemUrl: telefoneAntigoImg, categoria: "PASSADO", rotulo: "☎️" },
      { nome: "Celular", imagemUrl: celularImg, categoria: "PRESENTE", rotulo: "📱" },
      { nome: "Rádio antigo", imagemUrl: radioAntigoImg, categoria: "PASSADO", rotulo: "📻" },
      { nome: "TV moderna", imagemUrl: tvModernaImg, categoria: "PRESENTE", rotulo: "📺" },
      { nome: "Câmera antiga", imagemUrl: cameraAntigaImg, categoria: "PASSADO", rotulo: "📷" },
      { nome: "Bicicleta antiga", imagemUrl: bicicletaAntigaImg, categoria: "PASSADO", rotulo: "🚲" },
      { nome: "Bicicleta moderna", imagemUrl: bicicletaModernaImg, categoria: "PRESENTE", rotulo: "🚴" },
      { nome: "Casa antiga", imagemUrl: casaAntigaImg, categoria: "PASSADO", rotulo: "🏚️" },
      { nome: "Casa moderna", imagemUrl: casaModernaImg, categoria: "PRESENTE", rotulo: "🏡" },
    ],
    minAcertos: 8,
    acerto: "🏆 Relógio consertado! Você é um verdadeiro EXPLORADOR DO TEMPO.",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · O Objeto Do Passado",
    instrucao:
      "Converse com um familiar e descubra um OBJETO ANTIGO que ele usava quando era criança. Depois registre aqui!",
    registros: [
      { label: "Nome do objeto antigo", tipo: "texto" },
      { label: "Pra que ele servia?", tipo: "texto" },
      { label: "Qual objeto usamos HOJE no lugar dele?", tipo: "texto" },
    ],
    permitirFoto: true,
  },
};

export default aula;
