import type { Aula } from "../types";
import maeImg from "@/assets/neuro-treino/objetos/mae.png";
import paiImg from "@/assets/neuro-treino/objetos/pai.png";
import avoMulherImg from "@/assets/neuro-treino/objetos/avo-mulher.png";
import avoHomemImg from "@/assets/neuro-treino/objetos/avo-homem.png";
import tiaImg from "@/assets/neuro-treino/objetos/tia.png";
import meninoImg from "@/assets/neuro-treino/objetos/menino.png";
import meninaImg from "@/assets/neuro-treino/objetos/menina.png";
import familiaTradicionalImg from "@/assets/neuro-treino/objetos/familia-tradicional.png";
import familiaMaeFilhoImg from "@/assets/neuro-treino/objetos/familia-mae-filho.png";
import familiaPaiFilhoImg from "@/assets/neuro-treino/objetos/familia-pai-filho.png";
import familiaAvosNetaImg from "@/assets/neuro-treino/objetos/familia-avos-neta.png";
import abracoImg from "@/assets/neuro-treino/objetos/abraco.png";
import ajudarImg from "@/assets/neuro-treino/objetos/ajudar.png";
import compartilharImg from "@/assets/neuro-treino/objetos/compartilhar.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import criancasGrupoImg from "@/assets/neuro-treino/objetos/criancas-grupo.png";

/**
 * EF01HI02 — História · 1º Ano
 * Missão: "Minha Família, Minha História".
 * Identificar a relação entre as suas histórias e as histórias
 * de sua família e de sua comunidade.
 */
const aula: Aula = {
  codigo: "EF01HI02",
  ano: "1º Ano",
  disciplina: "História",
  titulo: "Minha Família, Minha História",

  narrativa: {
    titulo: "Cartas Da Vila Da Memória",
    contexto:
      "Brilha recebeu várias CARTAS vindas da Vila da Memória! ✉️ Cada carta conta a história de uma FAMÍLIA diferente.",
    problema:
      "A Coruja Sábia chegou voando e disse: 'Nem todas as famílias são iguais. O que torna uma família especial é o CUIDADO, o CARINHO e o RESPEITO entre as pessoas.' Cada carta lida ilumina uma ESTRELA da Árvore das Famílias.",
    convite: "Bora ler as cartas com o Brilha e iluminar a Árvore das Famílias?",
  },

  conhecimentosPrevios: [
    "Saber quem mora com você.",
    "Reconhecer palavras como mãe, pai, avó, avô e irmão.",
  ],

  missao:
    "Reconhecer que as famílias podem ser diferentes entre si, valorizando os vínculos afetivos, o respeito às diferenças e a importância das pessoas que fazem parte da sua história.",

  objetivos: [
    "Reconhecer diferentes formas de organização familiar.",
    "Identificar pessoas importantes da própria convivência.",
    "Compreender que cada família possui sua própria história.",
    "Desenvolver respeito pelas diferenças.",
    "Fortalecer o sentimento de pertencimento.",
  ],

  motivacao:
    "Sua família é única — do jeitinho que ela é. Grande, pequena, com muitos ou poucos, o que importa é o AMOR que existe dentro dela. 💖",

  explicacao:
    "👨‍👩‍👧 Existem famílias formadas por MÃE, PAI e filhos.\n👩‍👦 Existem famílias com só a MÃE e seus filhos.\n👨‍👦 Existem famílias com só o PAI e seus filhos.\n👵👴 Existem crianças que moram com os AVÓS.\n💖 O que faz uma família ser família é o CUIDADO, o CARINHO e o RESPEITO — não o tamanho, nem quem mora junto.",

  explicacoesNiveis: {
    nivel1: "Toda família é diferente. Toda família é especial.",
    nivel2: "Tem família com mãe, pai, avós, tios ou responsáveis. Todas são famílias de verdade.",
    nivel3: "O que faz uma família é o amor e o cuidado — não o número de pessoas.",
    nivel4: "Respeitar famílias diferentes da sua ajuda todo mundo a se sentir acolhido.",
  },

  exemploResolvido: {
    enunciado:
      "A Lila mora só com a AVÓ. O Beto mora com a MÃE e o PAI. Os dois têm família?",
    passos: [
      "Lila mora com quem cuida dela → a avó.",
      "Beto mora com quem cuida dele → mãe e pai.",
      "Nos dois casos existem pessoas cuidando e amando as crianças.",
    ],
    resposta: "✅ SIM! Os dois têm família — só que de jeitos diferentes.",
  },

  atividadeGuiada: {
    enunciado:
      "Olha essa imagem: uma avó e um avô com a netinha deles. Isso é uma família?",
    resposta: "✅ SIM, é uma família!",
    explicacao:
      "Quando alguém cuida, ama e protege uma criança, isso já é FAMÍLIA — mesmo que sejam só os avós.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual dessas imagens mostra uma FAMÍLIA?",
      opcoes: [
        { nome: "familia", imagemUrl: familiaAvosNetaImg },
        { nome: "bola", imagemUrl: bolaImg },
        { nome: "casa", imagemUrl: casaImg },
      ],
      respostaCerta: "familia",
    },
  },

  exercicios: [
    {
      enunciado: "Quem pode fazer parte de uma família?",
      resposta: "👨 Pai, 👩 mãe, 👵 avó, 👴 avô, 👧 irmãos, 👩 tios e responsáveis.",
      dica: "Qualquer pessoa que cuida da criança pode ser família.",
    },
    {
      enunciado: "O que faz uma família ser especial?",
      resposta: "💖 O amor, o cuidado e o respeito.",
      dica: "Não é o tamanho da casa nem quantas pessoas moram juntas.",
    },
    {
      enunciado: "Duas famílias diferentes podem ser as duas famílias?",
      resposta: "✅ Sim! Cada família tem o seu jeito.",
      dica: "Existem muitos tipos de família — todos são válidos.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: reconhecer as diferentes famílias e o que as une!",
    resposta: "Todas são famílias — o que une é o amor.",
    visual: {
      perguntas: [
        {
          pergunta: "Mãe, pai e filha morando juntos. Isso é uma família?",
          opcoes: ["Sim", "Não", "Só às vezes"],
          correta: 0,
          explicacao: "Mãe, pai e filhos formam uma família.",
          visual: { tipo: "itens", imagemUrl: familiaTradicionalImg, quantidade: 1, rotulo: "👨‍👩‍👧" },
        },
        {
          pergunta: "Uma mãe morando só com o filho. Isso é uma família?",
          opcoes: ["Sim", "Não", "Só se tiver o pai"],
          correta: 0,
          explicacao: "Mãe e filho já formam uma família.",
          visual: { tipo: "itens", imagemUrl: familiaMaeFilhoImg, quantidade: 1, rotulo: "👩‍👦" },
        },
        {
          pergunta: "Uma criança que mora com os AVÓS tem família?",
          opcoes: ["Sim", "Não", "Só a mãe é família"],
          correta: 0,
          explicacao: "Quem cuida e ama a criança é família.",
          visual: { tipo: "itens", imagemUrl: familiaAvosNetaImg, quantidade: 1, rotulo: "👵👴" },
        },
        {
          pergunta: "O que é MAIS importante em uma família?",
          opcoes: ["Amor e respeito", "Casa grande", "Muitos brinquedos"],
          correta: 0,
          explicacao: "O que faz família é o afeto, não os objetos.",
          visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "💖" },
        },
        {
          pergunta: "Devemos respeitar famílias diferentes da nossa?",
          opcoes: ["Sim, sempre", "Não", "Só se forem iguais"],
          correta: 0,
          explicacao: "Toda família merece respeito.",
          visual: { tipo: "itens", imagemUrl: abracoImg, quantidade: 1, rotulo: "🤗" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "👨‍👩‍👧 Existem MUITOS tipos de família.",
      "💖 O que faz família é o amor, o cuidado e o respeito.",
      "👵👴 Avós, tios e responsáveis também são família.",
      "🌳 Cada família tem sua PRÓPRIA história.",
      "🤝 Respeitar famílias diferentes é importante.",
    ],
    dica: "Se tem alguém que cuida de você com carinho — isso é família.",
  },

  quiz: [
    {
      pergunta: "Todas as famílias são iguais?",
      opcoes: ["Não", "Sim", "Apenas algumas"],
      correta: 0,
      explicacao: "Cada família é diferente — e isso é bonito.",
      visual: { tipo: "itens", imagemUrl: familiaTradicionalImg, quantidade: 1, rotulo: "👨‍👩‍👧" },
    },
    {
      pergunta: "O que é MAIS importante em uma família?",
      opcoes: ["Amor, cuidado e respeito", "Ter uma casa grande", "Ter muitos brinquedos"],
      correta: 0,
      explicacao: "O que faz família é o afeto.",
      visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "💖" },
    },
    {
      pergunta: "Os avós podem fazer parte da família?",
      opcoes: ["Sim", "Não", "Apenas às vezes"],
      correta: 0,
      explicacao: "Avós também são família.",
      visual: { tipo: "itens", imagemUrl: familiaAvosNetaImg, quantidade: 1, rotulo: "👵👴" },
    },
    {
      pergunta: "Devemos respeitar famílias diferentes da nossa?",
      opcoes: ["Sim", "Não", "Apenas algumas"],
      correta: 0,
      explicacao: "Toda família merece respeito.",
      visual: { tipo: "itens", imagemUrl: abracoImg, quantidade: 1, rotulo: "🤗" },
    },
    {
      pergunta: "Hoje aprendemos que:",
      opcoes: [
        "Cada família possui sua própria história",
        "Todas as famílias são iguais",
        "Só existe um tipo de família",
      ],
      correta: 0,
      explicacao: "Cada família tem sua história — e todas são especiais.",
      visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Amigo da Família! 🎁 Item desbloqueado: 🌳 Árvore das Memórias. Você aprendeu que cada família é única — e a sua também!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Em todo lugar do mundo existem famílias DIFERENTES. Algumas são grandes, outras pequenas — mas todas têm uma coisa em comum: o RESPEITO faz todas elas serem importantes. 💖",
  },

  interativas: [
    // APRENDENDO — Brilha apresenta diferentes famílias (lupa: toca → narração/história/curiosidade)
    {
      tipo: "lupa",
      titulo: "Cartas Da Vila Da Memória",
      instrucao: "Toque em cada família e leia a carta que o Brilha recebeu.",
      itens: [
        {
          nome: "Mãe, pai e filha",
          imagemUrl: familiaTradicionalImg,
          rotulo: "👨‍👩‍👧 MÃE, PAI E FILHA",
          descoberta:
            "Muitas famílias são formadas por mãe, pai e filhos. Eles cuidam uns dos outros todos os dias.",
        },
        {
          nome: "Mãe e filho",
          imagemUrl: familiaMaeFilhoImg,
          rotulo: "👩‍👦 MÃE E FILHO",
          descoberta:
            "Algumas famílias são só a mãe com seus filhos. E isso também é uma família cheia de amor.",
        },
        {
          nome: "Pai e filho",
          imagemUrl: familiaPaiFilhoImg,
          rotulo: "👨‍👦 PAI E FILHO",
          descoberta:
            "Outras famílias são só o pai com seus filhos. O que importa é o carinho, não o tamanho.",
        },
        {
          nome: "Avós e neta",
          imagemUrl: familiaAvosNetaImg,
          rotulo: "👵👴 AVÓS E NETA",
          descoberta:
            "Algumas crianças moram com os avós. O importante é receber amor, cuidado e proteção.",
        },
      ],
      acerto: "✉️ Todas as cartas lidas! Cada família tem sua história — e todas são especiais.",
    },

    // FASE 1 — Quem faz parte? (selecionar TODAS as pessoas que podem ser família)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 1 · Quem Faz Parte?",
      instrucao: "Toque em cada pessoa que PODE fazer parte de uma família. Todas podem!",
      criterio: "Pode ser família 💖",
      opcoes: [
        { nome: "Mãe", imagemUrl: maeImg, rotulo: "👩 MÃE", correto: true },
        { nome: "Pai", imagemUrl: paiImg, rotulo: "👨 PAI", correto: true },
        { nome: "Avó", imagemUrl: avoMulherImg, rotulo: "👵 AVÓ", correto: true },
        { nome: "Avô", imagemUrl: avoHomemImg, rotulo: "👴 AVÔ", correto: true },
        { nome: "Criança", imagemUrl: meninoImg, rotulo: "🧒 CRIANÇA", correto: true },
        { nome: "Tia", imagemUrl: tiaImg, rotulo: "👩 TIA", correto: true },
      ],
      acerto: "💖 Isso! TODOS podem fazer parte de uma família.",
      erro: "Todas essas pessoas podem ser família — toque em todas!",
    },

    // FASE 2 — Cada família é especial (mostrar 2 famílias diferentes → as duas SÃO família)
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Cada Família É Especial",
      instrucao: "Olha essas duas famílias diferentes. Elas são famílias?",
      pergunta: "As duas são famílias?",
      opcoes: [
        { nome: "SIM", imagemUrl: coracaoImg, rotulo: "✅ SIM, as duas são famílias!" },
        { nome: "NAO", imagemUrl: casaImg, rotulo: "❌ NÃO" },
      ],
      correta: 0,
      acerto: "💖 Isso! As duas SÃO famílias — cada uma do seu jeito.",
      erro: "Toda família é uma família — não importa o tamanho ou quem mora junto.",
    },

    // FASE 3 — Pessoas importantes (arrastar apenas quem cuida da criança pro coração)
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Pessoas Importantes",
      instrucao: "Arraste APENAS as pessoas que cuidam de você para dentro do CORAÇÃO 💖.",
      pares: [
        { item: "Mãe", alvo: "Cuida de mim", itemImagem: maeImg },
        { item: "Pai", alvo: "Cuida de mim", itemImagem: paiImg },
        { item: "Avó", alvo: "Cuida de mim", itemImagem: avoMulherImg },
        { item: "Avô", alvo: "Cuida de mim", itemImagem: avoHomemImg },
        { item: "Tia", alvo: "Cuida de mim", itemImagem: tiaImg },
      ],
      alvosVisuais: [
        { nome: "Cuida de mim", cor: "#F472B6", imagemUrl: coracaoImg, capacidade: 5 },
      ],
    },

    // FASE 4 — Minha casa (identificar atitudes: ✅ boas × ❌ brigar)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 4 · Minha Casa",
      instrucao:
        "Na sua casa, toque APENAS nas atitudes que fazem a família crescer feliz. Cada atitude boa faz a ÁRVORE DAS FAMÍLIAS brilhar!",
      criterio: "Atitude boa em casa 🌳",
      opcoes: [
        { nome: "Ajudar", imagemUrl: ajudarImg, rotulo: "✅ AJUDAR A GUARDAR OS BRINQUEDOS", correto: true },
        { nome: "Respeitar", imagemUrl: abracoImg, rotulo: "✅ RESPEITAR OS FAMILIARES", correto: true },
        { nome: "Compartilhar", imagemUrl: compartilharImg, rotulo: "✅ COMPARTILHAR", correto: true },
        { nome: "Brigar", imagemUrl: estrelaImg, rotulo: "❌ BRIGAR SEM MOTIVO", correto: false },
      ],
      acerto: "🌳 A Árvore das Famílias cresceu com as suas atitudes boas!",
      erro: "Brigar sem motivo NÃO faz a família crescer feliz. Escolha só as atitudes boas.",
    },

    // FASE 5 — Árvore da Minha História (álbum personalizado)
    {
      tipo: "album",
      titulo: "Fase 5 · Árvore Da Minha História",
      instrucao:
        "Monte a SUA Árvore da História! Escolha quem faz parte dela — o Brilha vai guardar no seu perfil.",
      escolhas: [
        {
          label: "Quem mora com você?",
          modo: "imagem",
          opcoes: [
            { nome: "Mãe", imagemUrl: maeImg, rotulo: "👩 MÃE" },
            { nome: "Pai", imagemUrl: paiImg, rotulo: "👨 PAI" },
            { nome: "Avó", imagemUrl: avoMulherImg, rotulo: "👵 AVÓ" },
            { nome: "Avô", imagemUrl: avoHomemImg, rotulo: "👴 AVÔ" },
          ],
        },
        {
          label: "Quem você gosta de visitar?",
          modo: "imagem",
          opcoes: [
            { nome: "Avós", imagemUrl: familiaAvosNetaImg, rotulo: "👵👴 AVÓS" },
            { nome: "Tia", imagemUrl: tiaImg, rotulo: "👩 TIA" },
            { nome: "Amigos", imagemUrl: criancasGrupoImg, rotulo: "👦 AMIGOS" },
          ],
        },
        {
          label: "Quem faz parte da sua história?",
          modo: "imagem",
          opcoes: [
            { nome: "Família completa", imagemUrl: familiaTradicionalImg, rotulo: "👨‍👩‍👧 FAMÍLIA" },
            { nome: "Mãe e filho", imagemUrl: familiaMaeFilhoImg, rotulo: "👩‍👦 MÃE E FILHO" },
            { nome: "Pai e filho", imagemUrl: familiaPaiFilhoImg, rotulo: "👨‍👦 PAI E FILHO" },
            { nome: "Avós e neta", imagemUrl: familiaAvosNetaImg, rotulo: "👵👴 AVÓS E NETA" },
          ],
        },
      ],
      acerto: "🌳 Sua Árvore das Memórias está linda! Essa é a SUA família.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "A MÃE pode fazer parte da família?",
        opcoes: ["Sim", "Não", "Só se tiver o pai junto"],
        correta: 0,
        explicacao: "A mãe faz parte da família.",
        visual: { tipo: "itens", imagemUrl: maeImg, quantidade: 1, rotulo: "👩" },
      },
      {
        pergunta: "Quem cuida da criança pode ser chamado de família?",
        opcoes: ["Sim", "Não", "Só a mãe"],
        correta: 0,
        explicacao: "Quem cuida, ama e protege é família.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "💖" },
      },
      {
        pergunta: "Uma casa com AVÓS e neta é uma família?",
        opcoes: ["Sim", "Não", "Só se a mãe estiver"],
        correta: 0,
        explicacao: "Avós e neta formam uma família.",
        visual: { tipo: "itens", imagemUrl: familiaAvosNetaImg, quantidade: 1, rotulo: "👵👴" },
      },
    ],
    medio: [
      {
        pergunta: "Qual dessas atitudes ajuda a família?",
        opcoes: ["Ajudar em casa", "Brigar sempre", "Gritar"],
        correta: 0,
        explicacao: "Ajudar faz a família crescer feliz.",
        visual: { tipo: "itens", imagemUrl: ajudarImg, quantidade: 1, rotulo: "🤝" },
      },
      {
        pergunta: "Duas famílias diferentes podem ser as duas famílias?",
        opcoes: ["Sim", "Não", "Só se forem iguais"],
        correta: 0,
        explicacao: "Cada família tem seu jeito — todas são famílias.",
        visual: { tipo: "itens", imagemUrl: familiaMaeFilhoImg, quantidade: 1, rotulo: "👩‍👦" },
      },
      {
        pergunta: "O que devemos fazer com famílias diferentes da nossa?",
        opcoes: ["Respeitar", "Rir", "Ignorar"],
        correta: 0,
        explicacao: "Toda família merece respeito.",
        visual: { tipo: "itens", imagemUrl: abracoImg, quantidade: 1, rotulo: "🤗" },
      },
    ],
    dificil: [
      {
        pergunta: "O que faz uma família ser FAMÍLIA?",
        opcoes: ["Amor, cuidado e respeito", "O tamanho da casa", "O número de pessoas"],
        correta: 0,
        explicacao: "O afeto é o que faz uma família.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "💖" },
      },
      {
        pergunta: "Cada família tem uma HISTÓRIA:",
        opcoes: ["Própria e diferente", "Igual às outras", "Sem história"],
        correta: 0,
        explicacao: "Cada família tem sua própria história.",
        visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
      },
      {
        pergunta: "Fazer parte de uma família é:",
        opcoes: ["Sentir-se cuidado e amado", "Morar sozinho", "Ter muitos brinquedos"],
        correta: 0,
        explicacao: "Pertencer é sentir que faz parte de um lar com afeto.",
        visual: { tipo: "itens", imagemUrl: familiaTradicionalImg, quantidade: 1, rotulo: "👨‍👩‍👧" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Estrelas Da Família",
    objetivo:
      "As estrelas apareceram pelo céu! Cada uma tem uma atitude. Toque APENAS nas estrelas com atitudes de RESPEITO e CARINHO. Complete o céu sem cometer erros!",
    tempoSegundos: 90,
    elementos: [
      { nome: "Abraçar", imagemUrl: abracoImg, rotulo: "⭐ ABRAÇAR" },
      { nome: "Ajudar", imagemUrl: ajudarImg, rotulo: "⭐ AJUDAR" },
      { nome: "Compartilhar", imagemUrl: compartilharImg, rotulo: "⭐ COMPARTILHAR" },
      { nome: "Respeitar", imagemUrl: coracaoImg, rotulo: "⭐ RESPEITAR" },
    ],
    distratores: [
      { nome: "Empurrar", imagemUrl: estrelaImg, rotulo: "❌ EMPURRAR" },
      { nome: "Gritar", imagemUrl: estrelaImg, rotulo: "❌ GRITAR" },
    ],
    acerto: "🏆 Céu completo! Você é um verdadeiro AMIGO DA FAMÍLIA.",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Uma Lembrança Especial",
    instrucao:
      "Converse com um familiar sobre uma LEMBRANÇA ESPECIAL da família. Depois registre aqui no aplicativo!",
    registros: [
      { label: "Quem contou a história pra você?", tipo: "texto" },
      { label: "Qual foi a lembrança?", tipo: "texto" },
      { label: "O que você aprendeu?", tipo: "texto" },
    ],
    permitirFoto: true,
  },
};

export default aula;
