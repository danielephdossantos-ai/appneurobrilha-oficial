import type { Aula } from "../types";
import familiaTradImg from "@/assets/neuro-treino/objetos/familia-tradicional.png";
import familiaGrandeImg from "@/assets/neuro-treino/objetos/familia-grande.png";
import familiaMaeFilhoImg from "@/assets/neuro-treino/objetos/familia-mae-filho.png";
import familiaPaiFilhoImg from "@/assets/neuro-treino/objetos/familia-pai-filho.png";
import familiaAvosImg from "@/assets/neuro-treino/objetos/familia-avos-neta.png";
import maeImg from "@/assets/neuro-treino/objetos/mae.png";
import paiImg from "@/assets/neuro-treino/objetos/pai.png";
import avoMulherImg from "@/assets/neuro-treino/objetos/avo-mulher.png";
import avoHomemImg from "@/assets/neuro-treino/objetos/avo-homem.png";
import tiaImg from "@/assets/neuro-treino/objetos/tia.png";
import casaAntigaImg from "@/assets/neuro-treino/objetos/casa-antiga.png";
import casaModernaImg from "@/assets/neuro-treino/objetos/casa-moderna.png";
import telefoneAntigoImg from "@/assets/neuro-treino/objetos/telefone-antigo.png";
import celularImg from "@/assets/neuro-treino/objetos/celular.png";
import relogioImg from "@/assets/neuro-treino/objetos/relogio-magico.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import criancasImg from "@/assets/neuro-treino/objetos/criancas-grupo.png";
import abracoImg from "@/assets/neuro-treino/objetos/abraco.png";
import ajudarImg from "@/assets/neuro-treino/objetos/ajudar.png";

/**
 * EF01HI07 — História · 1º Ano
 * Missão: "Famílias Que Mudam Com O Tempo".
 * Identificar mudanças e permanências nas formas de organização familiar.
 */
const aula: Aula = {
  codigo: "EF01HI07",
  ano: "1º Ano",
  disciplina: "História",
  titulo: "Famílias Que Mudam Com O Tempo",

  narrativa: {
    titulo: "O Relógio Das Famílias",
    contexto:
      "Brilha girou o RELÓGIO MÁGICO ⏰ e viu famílias em épocas diferentes: antigamente muitas pessoas moravam juntas — hoje algumas famílias são pequenas, outras enormes.",
    problema:
      "A Coruja Sábia explicou: 'Famílias MUDAM com o tempo. Mas o AMOR e o cuidado PERMANECEM. Ajude o Brilha a descobrir o que muda e o que fica igual!'",
    convite: "Bora girar o relógio e ver como as famílias mudaram?",
  },

  conhecimentosPrevios: [
    "Reconhecer diferentes tipos de família.",
    "Perceber que existem famílias pequenas e grandes.",
  ],

  missao:
    "Perceber que as famílias mudam com o tempo — mas o AMOR, o CUIDADO e o RESPEITO permanecem.",

  objetivos: [
    "Comparar famílias de antigamente com as de hoje.",
    "Identificar mudanças na forma de organização.",
    "Reconhecer o que PERMANECE (amor, cuidado, união).",
    "Valorizar diferentes configurações familiares.",
    "Respeitar todas as famílias.",
  ],

  motivacao:
    "Toda família é especial — seja grande, pequena, com muitos ou poucos. O que importa é o CARINHO! 💛",

  explicacao:
    "⏰ Antigamente muitas famílias eram MUITO GRANDES — moravam avós, tios, primos, todos juntos.\n🏠 Hoje muitas famílias são MENORES — pai, mãe e filhos; ou só mãe e filhos; ou só pai e filhos; ou avós criando netos.\n💛 O que MUDA: o tamanho, os hábitos, as casas.\n🤗 O que PERMANECE: o amor, o cuidado, a união.\n🌈 Toda família diferente é uma família especial.",

  explicacoesNiveis: {
    nivel1: "Toda família é feita de pessoas que se cuidam.",
    nivel2: "Existem famílias grandes e pequenas.",
    nivel3: "Antigamente as famílias costumavam ser maiores.",
    nivel4: "O amor é o que permanece em qualquer época.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha viu uma família ANTIGA com 3 gerações morando juntas e uma família de HOJE só com mãe e filha. Elas têm algo em comum?",
    passos: [
      "As duas famílias são diferentes em TAMANHO.",
      "As duas famílias CUIDAM umas das outras.",
      "O que permanece é o AMOR.",
    ],
    resposta: "💛 Diferentes no tamanho, iguais no cuidado!",
  },

  atividadeGuiada: {
    enunciado: "Qual família é MAIOR?",
    resposta: "👨‍👩‍👧‍👦 A família grande — com avós, pais e filhos juntos!",
    explicacao:
      "Antigamente era comum famílias muito grandes morarem na mesma casa. Hoje elas também existem, mas são menos comuns.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual dessas famílias é a MAIOR?",
      opcoes: [
        { nome: "grande", imagemUrl: familiaGrandeImg },
        { nome: "mae-filho", imagemUrl: familiaMaeFilhoImg },
        { nome: "pai-filho", imagemUrl: familiaPaiFilhoImg },
      ],
      respostaCerta: "grande",
    },
  },

  exercicios: [
    {
      enunciado: "Uma família SÓ com a mãe e o filho também é família?",
      resposta: "👩‍👦 SIM! Toda família é família — o que importa é o amor.",
      dica: "Família se mede pelo carinho, não pelo tamanho.",
    },
    {
      enunciado: "Antigamente as famílias eram mais:",
      resposta: "👨‍👩‍👧‍👦 GRANDES — muita gente morava junta.",
      dica: "Pense em fotos antigas com muita gente na mesma casa.",
    },
    {
      enunciado: "O que PERMANECE em todas as famílias?",
      resposta: "💛 O AMOR, o CUIDADO e o RESPEITO.",
      dica: "Isso não muda com o tempo.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: identifique o que MUDA e o que PERMANECE.",
    resposta: "Muitas coisas mudam, mas o amor fica.",
    visual: {
      perguntas: [
        {
          pergunta: "Uma família com a mãe e o filho é família?",
          opcoes: ["Sim", "Não", "Só às vezes"],
          correta: 0,
          explicacao: "Toda configuração é família.",
          visual: { tipo: "itens", imagemUrl: familiaMaeFilhoImg, quantidade: 1, rotulo: "👩‍👦" },
        },
        {
          pergunta: "Antigamente as casas costumavam ter:",
          opcoes: ["Muita gente junta", "Uma pessoa só", "Só robôs"],
          correta: 0,
          explicacao: "Famílias antigas eram grandes.",
          visual: { tipo: "itens", imagemUrl: casaAntigaImg, quantidade: 1, rotulo: "🏚️" },
        },
        {
          pergunta: "Uma família com AVÓ criando o neto é família?",
          opcoes: ["Sim, claro!", "Não é", "Só metade"],
          correta: 0,
          explicacao: "Sim — o que importa é o cuidado.",
          visual: { tipo: "itens", imagemUrl: familiaAvosImg, quantidade: 1, rotulo: "👵" },
        },
        {
          pergunta: "O que NÃO muda em nenhuma família?",
          opcoes: ["O amor", "O celular", "A casa"],
          correta: 0,
          explicacao: "O amor permanece em qualquer época.",
          visual: { tipo: "itens", imagemUrl: abracoImg, quantidade: 1, rotulo: "🤗" },
        },
        {
          pergunta: "Todas as famílias merecem:",
          opcoes: ["Respeito", "Serem escondidas", "Ficar sem cuidado"],
          correta: 0,
          explicacao: "Toda família merece respeito.",
          visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "💛" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "⏰ Famílias antigas costumavam ser grandes.",
      "🏠 Famílias de hoje são de vários tamanhos.",
      "💛 O que PERMANECE: amor, cuidado, união.",
      "🤗 Toda família diferente é família.",
      "🌈 Respeito é o que segura tudo.",
    ],
    dica: "Pergunte pra alguém mais velho: como era a família dele quando criança?",
  },

  quiz: [
    {
      pergunta: "As famílias mudam com o tempo?",
      opcoes: ["Sim", "Não", "Só as pequenas"],
      correta: 0,
      explicacao: "Elas mudam de tamanho e hábitos.",
      visual: { tipo: "itens", imagemUrl: relogioImg, quantidade: 1, rotulo: "⏰" },
    },
    {
      pergunta: "Antigamente as famílias eram mais:",
      opcoes: ["Grandes", "Pequenas", "Iguais"],
      correta: 0,
      explicacao: "Moravam muitas pessoas juntas.",
      visual: { tipo: "itens", imagemUrl: familiaGrandeImg, quantidade: 1, rotulo: "👨‍👩‍👧‍👦" },
    },
    {
      pergunta: "Uma mãe sozinha com o filho é família?",
      opcoes: ["Sim", "Não", "Só se tiver pai"],
      correta: 0,
      explicacao: "Toda configuração é família.",
      visual: { tipo: "itens", imagemUrl: familiaMaeFilhoImg, quantidade: 1, rotulo: "👩‍👦" },
    },
    {
      pergunta: "O que PERMANECE em toda família?",
      opcoes: ["O amor", "O celular", "O carro"],
      correta: 0,
      explicacao: "O amor não muda com o tempo.",
      visual: { tipo: "itens", imagemUrl: abracoImg, quantidade: 1, rotulo: "💛" },
    },
    {
      pergunta: "Hoje aprendemos que as famílias:",
      opcoes: [
        "Mudam, mas o amor permanece",
        "São todas iguais",
        "Nunca mudaram",
      ],
      correta: 0,
      explicacao: "Mudam no tamanho, o amor fica.",
      visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🦉" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião das Famílias! ⏰ Item desbloqueado: Relógio das Famílias do Brilha.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Há 100 anos era comum famílias com 8, 10, até 12 filhos morando na mesma casa! Hoje as famílias são de todos os jeitos — e cada uma é única e especial. 🌈",
  },

  interativas: [
    // APRENDENDO — lupa com tipos de família
    {
      tipo: "lupa",
      titulo: "Relógio Das Famílias",
      instrucao: "Toque em cada família pra descobrir como ela se organiza.",
      itens: [
        {
          nome: "Família tradicional",
          imagemUrl: familiaTradImg,
          rotulo: "👨‍👩‍👧 PAI, MÃE E FILHOS",
          descoberta: "Uma configuração comum: pai, mãe e filhos morando juntos.",
        },
        {
          nome: "Família grande",
          imagemUrl: familiaGrandeImg,
          rotulo: "👨‍👩‍👧‍👦 MUITA GENTE",
          descoberta: "Antigamente era muito comum: avós, pais, tios e filhos na mesma casa.",
        },
        {
          nome: "Mãe e filho",
          imagemUrl: familiaMaeFilhoImg,
          rotulo: "👩‍👦 MÃE E FILHO",
          descoberta: "Uma mãe que cuida sozinha do filho também é uma família.",
        },
        {
          nome: "Pai e filho",
          imagemUrl: familiaPaiFilhoImg,
          rotulo: "👨‍👦 PAI E FILHO",
          descoberta: "Um pai que cuida sozinho do filho também é uma família.",
        },
        {
          nome: "Avós e neta",
          imagemUrl: familiaAvosImg,
          rotulo: "👵👴 AVÓS E NETA",
          descoberta: "Muitos avós criam os netos com muito amor.",
        },
      ],
    },

    // FASE 1 — Ordenar tamanho de família (do menor pro maior)
    {
      tipo: "ordenar",
      titulo: "Fase 1 · Do Menor Pro Maior",
      instrucao: "Toque nas famílias na ordem: MENOR ➜ MAIOR.",
      itens: [
        { nome: "Mãe e filho", imagemUrl: familiaMaeFilhoImg, rotulo: "👩‍👦 2 pessoas", ordem: 1 },
        { nome: "Família tradicional", imagemUrl: familiaTradImg, rotulo: "👨‍👩‍👧 4 pessoas", ordem: 2 },
        { nome: "Família grande", imagemUrl: familiaGrandeImg, rotulo: "👨‍👩‍👧‍👦 7 pessoas", ordem: 3 },
      ],
      acerto: "👏 Isso! As famílias vêm em vários tamanhos.",
      erro: "Conte quantas pessoas tem em cada família e ordene do menor pro maior.",
    },

    // FASE 2 — Selecionar múltiplos: TODAS são famílias
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 2 · Todas São Famílias?",
      instrucao:
        "Toque em TODAS as configurações que também são FAMÍLIAS. (Dica: todas são! 💛)",
      criterio: "É família ✅",
      opcoes: [
        { nome: "Pai, mãe e filhos", imagemUrl: familiaTradImg, rotulo: "👨‍👩‍👧 TRADICIONAL", correto: true },
        { nome: "Mãe e filho", imagemUrl: familiaMaeFilhoImg, rotulo: "👩‍👦 MÃE E FILHO", correto: true },
        { nome: "Pai e filho", imagemUrl: familiaPaiFilhoImg, rotulo: "👨‍👦 PAI E FILHO", correto: true },
        { nome: "Avós e neta", imagemUrl: familiaAvosImg, rotulo: "👵👴 AVÓS E NETA", correto: true },
        { nome: "Família grande", imagemUrl: familiaGrandeImg, rotulo: "👨‍👩‍👧‍👦 GRANDE", correto: true },
      ],
      acerto: "💛 Isso! Toda configuração é família — o que importa é o amor.",
      erro: "Todas essas são famílias. Toque em todas!",
    },

    // FASE 3 — Arrastar: ANTIGO x ATUAL
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Antigo Ou Atual?",
      instrucao: "Arraste cada objeto pra caixa certa: 🕰️ ANTIGO ou 📱 ATUAL.",
      pares: [
        { item: "Casa antiga", alvo: "Antigo", itemImagem: casaAntigaImg },
        { item: "Telefone antigo", alvo: "Antigo", itemImagem: telefoneAntigoImg },
        { item: "Casa moderna", alvo: "Atual", itemImagem: casaModernaImg },
        { item: "Celular", alvo: "Atual", itemImagem: celularImg },
      ],
      alvosVisuais: [
        { nome: "Antigo", cor: "#A16207", imagemUrl: casaAntigaImg, capacidade: 2 },
        { nome: "Atual", cor: "#0EA5E9", imagemUrl: celularImg, capacidade: 2 },
      ],
    },

    // FASE 4 — Selecionar múltiplos: o que PERMANECE
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 4 · O Que Sempre Fica",
      instrucao:
        "Toque em TUDO que PERMANECE em toda família — antigamente e hoje.",
      criterio: "Permanece 💛",
      opcoes: [
        { nome: "Amor", imagemUrl: abracoImg, rotulo: "🤗 AMOR", correto: true },
        { nome: "Ajudar", imagemUrl: ajudarImg, rotulo: "🤝 AJUDAR", correto: true },
        { nome: "Cuidado da mãe", imagemUrl: maeImg, rotulo: "👩 CUIDADO", correto: true },
        { nome: "Cuidado do pai", imagemUrl: paiImg, rotulo: "👨 CUIDADO", correto: true },
        { nome: "Celular", imagemUrl: celularImg, rotulo: "❌ CELULAR (é novo)", correto: false },
      ],
      acerto: "💛 Isso! O amor e o cuidado permanecem — o resto vai mudando.",
      erro: "O celular é atual. O que PERMANECE é o amor e o cuidado.",
    },

    // FASE 5 — Álbum: minha família hoje
    {
      tipo: "album",
      titulo: "Fase 5 · Minha Família Hoje",
      instrucao:
        "Monte o cartão da SUA família! Todas as opções ficam liberadas — pode marcar MAIS de UMA em cada pergunta.",
      escolhas: [
        {
          label: "Quem mora com você?",
          modo: "imagem",
          opcoes: [
            { nome: "Mãe", imagemUrl: maeImg, rotulo: "👩 MÃE" },
            { nome: "Pai", imagemUrl: paiImg, rotulo: "👨 PAI" },
            { nome: "Avó", imagemUrl: avoMulherImg, rotulo: "👵 AVÓ" },
            { nome: "Avô", imagemUrl: avoHomemImg, rotulo: "👴 AVÔ" },
            { nome: "Tia", imagemUrl: tiaImg, rotulo: "👩‍🦰 TIA" },
            { nome: "Irmãos", imagemUrl: criancasImg, rotulo: "🧒 IRMÃOS" },
          ],
        },
        {
          label: "O que sua família mais gosta de fazer junto?",
          modo: "imagem",
          opcoes: [
            { nome: "Abraçar", imagemUrl: abracoImg, rotulo: "🤗 ABRAÇAR" },
            { nome: "Ajudar", imagemUrl: ajudarImg, rotulo: "🤝 AJUDAR" },
            { nome: "Brincar", imagemUrl: criancasImg, rotulo: "🎈 BRINCAR" },
          ],
        },
        {
          label: "Como é a sua casa?",
          modo: "imagem",
          opcoes: [
            { nome: "Antiga", imagemUrl: casaAntigaImg, rotulo: "🏚️ ANTIGA" },
            { nome: "Moderna", imagemUrl: casaModernaImg, rotulo: "🏠 MODERNA" },
          ],
        },
      ],
      acerto: "💛 Cartão da família montado! O Brilha guardou com carinho.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Uma mãe sozinha com filho é família?",
        opcoes: ["Sim", "Não", "Só metade"],
        correta: 0,
        explicacao: "Toda configuração é família.",
        visual: { tipo: "itens", imagemUrl: familiaMaeFilhoImg, quantidade: 1, rotulo: "👩‍👦" },
      },
      {
        pergunta: "Antigamente as famílias eram mais:",
        opcoes: ["Grandes", "Pequenas", "Nenhuma"],
        correta: 0,
        explicacao: "Moravam muita gente junta.",
        visual: { tipo: "itens", imagemUrl: familiaGrandeImg, quantidade: 1, rotulo: "👨‍👩‍👧‍👦" },
      },
      {
        pergunta: "Um pai e um filho são família?",
        opcoes: ["Sim", "Não", "Só se tiver mãe"],
        correta: 0,
        explicacao: "Sim, claro!",
        visual: { tipo: "itens", imagemUrl: familiaPaiFilhoImg, quantidade: 1, rotulo: "👨‍👦" },
      },
    ],
    medio: [
      {
        pergunta: "O que PERMANECE em toda família?",
        opcoes: ["O amor", "O celular", "A casa"],
        correta: 0,
        explicacao: "O amor não muda.",
        visual: { tipo: "itens", imagemUrl: abracoImg, quantidade: 1, rotulo: "🤗" },
      },
      {
        pergunta: "Uma AVÓ criando o neto forma:",
        opcoes: ["Uma família", "Nada", "Uma escola"],
        correta: 0,
        explicacao: "É uma família também.",
        visual: { tipo: "itens", imagemUrl: familiaAvosImg, quantidade: 1, rotulo: "👵" },
      },
      {
        pergunta: "As famílias de hoje são:",
        opcoes: ["De vários tamanhos", "Todas iguais", "Só grandes"],
        correta: 0,
        explicacao: "Existe família de todo tamanho.",
        visual: { tipo: "itens", imagemUrl: familiaTradImg, quantidade: 1, rotulo: "👨‍👩‍👧" },
      },
    ],
    dificil: [
      {
        pergunta: "As famílias mudam com:",
        opcoes: ["O tempo", "Nunca", "Só no verão"],
        correta: 0,
        explicacao: "Mudam de tamanho e hábitos ao longo do tempo.",
        visual: { tipo: "itens", imagemUrl: relogioImg, quantidade: 1, rotulo: "⏰" },
      },
      {
        pergunta: "Toda família merece:",
        opcoes: ["Respeito", "Escondido", "Ficar sem carinho"],
        correta: 0,
        explicacao: "Respeito é essencial.",
        visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "💛" },
      },
      {
        pergunta: "O que MUDA nas famílias?",
        opcoes: ["Tamanho e hábitos", "O amor", "O cuidado"],
        correta: 0,
        explicacao: "O amor permanece; o resto muda.",
        visual: { tipo: "itens", imagemUrl: casaAntigaImg, quantidade: 1, rotulo: "🏚️" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Caça Às Famílias",
    objetivo:
      "Missão: encontre TODAS as configurações que também são FAMÍLIAS ⭐. Todas são!",
    tempoSegundos: 90,
    elementos: [
      { nome: "Tradicional", imagemUrl: familiaTradImg, rotulo: "👨‍👩‍👧 FAMÍLIA" },
      { nome: "Mãe e filho", imagemUrl: familiaMaeFilhoImg, rotulo: "👩‍👦 FAMÍLIA" },
      { nome: "Pai e filho", imagemUrl: familiaPaiFilhoImg, rotulo: "👨‍👦 FAMÍLIA" },
      { nome: "Avós e neta", imagemUrl: familiaAvosImg, rotulo: "👵👴 FAMÍLIA" },
      { nome: "Grande", imagemUrl: familiaGrandeImg, rotulo: "👨‍👩‍👧‍👦 FAMÍLIA" },
    ],
    distratores: [
      { nome: "Celular", imagemUrl: celularImg, rotulo: "❌ CELULAR" },
      { nome: "Casa", imagemUrl: casaModernaImg, rotulo: "❌ CASA (não é pessoa)" },
    ],
    acerto: "🏆 Relógio brilhando! Você é um GUARDIÃO DAS FAMÍLIAS.",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Antigamente E Hoje",
    instrucao:
      "Peça pra um adulto contar como era a família dele quando era criança. Compare com a sua e registre!",
    registros: [
      { label: "Quantas pessoas moravam na família dele/dela antigamente?", tipo: "texto" },
      { label: "Uma coisa que MUDOU:", tipo: "texto" },
      { label: "Uma coisa que PERMANECEU:", tipo: "texto" },
    ],
    permitirFoto: true,
  },
};

export default aula;
