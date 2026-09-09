import type { Aula } from "../types";
import { url as familiaTradImg } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as familiaGrandeImg } from "@/assets/neuro-treino/objetos/familia-grande.png.asset.json";
import { url as familiaMaeFilhoImg } from "@/assets/neuro-treino/objetos/familia-mae-filho.png.asset.json";
import { url as familiaPaiFilhoImg } from "@/assets/neuro-treino/objetos/familia-pai-filho.png.asset.json";
import { url as familiaAvosImg } from "@/assets/neuro-treino/objetos/familia-avos-neta.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as paiImg } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as avoMulherImg } from "@/assets/neuro-treino/objetos/avo-mulher.png.asset.json";
import { url as avoHomemImg } from "@/assets/neuro-treino/objetos/avo-homem.png.asset.json";
import { url as tiaImg } from "@/assets/neuro-treino/objetos/tia.png.asset.json";
import { url as casaAntigaImg } from "@/assets/neuro-treino/objetos/casa-antiga.png.asset.json";
import { url as casaModernaImg } from "@/assets/neuro-treino/objetos/casa-moderna.png.asset.json";
import { url as telefoneAntigoImg } from "@/assets/neuro-treino/objetos/telefone-antigo.png.asset.json";
import { url as celularImg } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as relogioImg } from "@/assets/neuro-treino/objetos/relogio-magico.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as criancasImg } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as abracoImg } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as ajudarImg } from "@/assets/neuro-treino/objetos/ajudar.png.asset.json";

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
      "Brilha girou o RELÓGIO MÁGICO ⏰ e viu famílias grandes e pequenas em épocas diferentes, com variados modos de morar, trabalhar e dividir tarefas.",
    problema:
      "A Coruja Sábia explicou: 'As formas de organização familiar podem MUDAR, enquanto alguns vínculos, memórias ou tradições podem PERMANECER. Vamos investigar as fontes!'",
    convite: "Bora girar o relógio e ver como as famílias mudaram?",
  },

  conhecimentosPrevios: [
    "Reconhecer diferentes tipos de família.",
    "Perceber que existem famílias pequenas e grandes.",
  ],

  missao:
    "Identificar mudanças e permanências nas formas de organização familiar, comparando fontes e evitando tratar um único modelo de família como regra.",

  objetivos: [
    "Comparar famílias de antigamente com as de hoje.",
    "Identificar mudanças na forma de organização.",
    "Reconhecer permanências possíveis, como vínculos, responsabilidades e memórias.",
    "Valorizar diferentes configurações familiares.",
    "Respeitar todas as famílias.",
  ],

  motivacao:
    "Toda família é especial — seja grande, pequena, com muitos ou poucos. O que importa é o CARINHO! 💛",

  explicacao:
    "⏰ Em cada época e lugar existiram famílias grandes e pequenas, com diferentes pessoas e modos de viver.\n🏠 Fotografias, relatos e documentos ajudam a comparar essas organizações.\n🔄 O que pode MUDAR: quem mora junto, divisão de tarefas, hábitos e moradia.\n🧭 O que pode PERMANECER: vínculos, responsabilidades, sobrenomes, memórias ou tradições.\n🌈 Não existe um único modelo que represente todas as famílias.",

  explicacoesNiveis: {
    nivel1: "Toda família é feita de pessoas que se cuidam.",
    nivel2: "Existem famílias grandes e pequenas.",
    nivel3: "Fontes históricas mostram famílias variadas no passado e no presente.",
    nivel4: "Para comparar, observe quem vivia junto, as tarefas, os hábitos e as memórias.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha viu uma família ANTIGA com 3 gerações morando juntas e uma família de HOJE só com mãe e filha. Elas têm algo em comum?",
    passos: [
      "As duas famílias são diferentes em TAMANHO.",
      "As duas famílias CUIDAM umas das outras.",
      "Alguns vínculos e responsabilidades podem permanecer, mas isso precisa ser observado em cada história.",
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
      
        { nome: "outra-opcao-4", imagemUrl: familiaTradImg },],
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
    resposta: "Organizações podem mudar; fontes mostram o que permaneceu em cada caso.",
    visual: {
      perguntas: [
        {
          pergunta: "Uma família com a mãe e o filho é família?",
          opcoes: ["Sim", "Não", "Só às vezes", "Preciso observar melhor"],
          correta: 0,
          explicacao: "Toda configuração é família.",
          visual: { tipo: "itens", imagemUrl: familiaMaeFilhoImg, quantidade: 1, rotulo: "👩‍👦" },
        },
        {
          pergunta: "Antigamente as casas costumavam ter:",
          opcoes: ["Muita gente junta", "Uma pessoa só", "Só robôs", "Preciso observar melhor"],
          correta: 0,
          explicacao: "Famílias antigas eram grandes.",
          visual: { tipo: "itens", imagemUrl: casaAntigaImg, quantidade: 1, rotulo: "🏚️" },
        },
        {
          pergunta: "Uma família com AVÓ criando o neto é família?",
          opcoes: ["Sim, claro!", "Não é", "Só metade", "Preciso observar melhor"],
          correta: 0,
          explicacao: "Sim — o que importa é o cuidado.",
          visual: { tipo: "itens", imagemUrl: familiaAvosImg, quantidade: 1, rotulo: "👵" },
        },
        {
          pergunta: "O que PODE permanecer na história de uma família?",
          opcoes: ["Uma memória ou tradição", "Todo objeto", "Toda moradia", "Preciso observar melhor"],
          correta: 0,
          explicacao: "Memórias e tradições podem atravessar gerações, mas cada família tem uma história.",
          visual: { tipo: "itens", imagemUrl: abracoImg, quantidade: 1, rotulo: "🤗" },
        },
        {
          pergunta: "Todas as famílias merecem:",
          opcoes: ["Respeito", "Serem escondidas", "Ficar sem cuidado", "Preciso observar melhor"],
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
      "🧭 Memórias, vínculos, responsabilidades ou tradições PODEM permanecer.",
      "🤗 Toda família diferente é família.",
      "🌈 Respeito é o que segura tudo.",
    ],
    dica: "Pergunte pra alguém mais velho: como era a família dele quando criança?",
  },

  quiz: [
    {
      pergunta: "As famílias mudam com o tempo?",
      opcoes: ["Sim", "Não", "Só as pequenas", "Preciso observar melhor"],
      correta: 0,
      explicacao: "Elas mudam de tamanho e hábitos.",
      visual: { tipo: "itens", imagemUrl: relogioImg, quantidade: 1, rotulo: "⏰" },
    },
    {
      pergunta: "Antigamente as famílias eram mais:",
      opcoes: ["Grandes", "Pequenas", "Iguais", "Preciso observar melhor"],
      correta: 0,
      explicacao: "Moravam muitas pessoas juntas.",
      visual: { tipo: "itens", imagemUrl: familiaGrandeImg, quantidade: 1, rotulo: "👨‍👩‍👧‍👦" },
    },
    {
      pergunta: "Uma mãe sozinha com o filho é família?",
      opcoes: ["Sim", "Não", "Só se tiver pai", "Preciso observar melhor"],
      correta: 0,
      explicacao: "Toda configuração é família.",
      visual: { tipo: "itens", imagemUrl: familiaMaeFilhoImg, quantidade: 1, rotulo: "👩‍👦" },
    },
    {
      pergunta: "O que PODE permanecer entre gerações de uma família?",
      opcoes: ["Uma tradição ou memória", "O mesmo celular", "A mesma casa para todas", "Preciso observar melhor"],
      correta: 0,
      explicacao: "Uma fonte pode mostrar tradições e memórias preservadas entre gerações.",
      visual: { tipo: "itens", imagemUrl: abracoImg, quantidade: 1, rotulo: "💛" },
    },
    {
      pergunta: "Hoje aprendemos que as famílias:",
      opcoes: [
        "Podem mudar e também guardar algumas permanências",
        "São todas iguais",
        "Nunca mudaram",
       "Preciso observar melhor"],
      correta: 0,
      explicacao: "A comparação histórica identifica mudanças e permanências sem impor um único modelo.",
      visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🦉" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião das Famílias! ⏰ Item desbloqueado: Relógio das Famílias do Brilha.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Fotografias, cartas, certidões e relatos ajudam a descobrir como cada família se organizava em diferentes épocas e lugares. 🌈",
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
      itens: ["MÃE E FILHO", "TRADICIONAL", "GRANDE"],
      imagens: [
        { imagemUrl: familiaMaeFilhoImg, quantidade: 1, rotulo: "👩‍👦 2 pessoas", cor: "#F472B6" },
        { imagemUrl: familiaTradImg, quantidade: 1, rotulo: "👨‍👩‍👧 4 pessoas", cor: "#FBBF24" },
        { imagemUrl: familiaGrandeImg, quantidade: 1, rotulo: "👨‍👩‍👧‍👦 7 pessoas", cor: "#34D399" },
      ],
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
        "Toque no que PODE permanecer na história de uma família ao longo do tempo.",
      criterio: "Permanece 💛",
      opcoes: [
        { nome: "Amor", imagemUrl: abracoImg, rotulo: "🤗 AMOR", correto: true },
        { nome: "Ajudar", imagemUrl: ajudarImg, rotulo: "🤝 AJUDAR", correto: true },
        { nome: "Cuidado da mãe", imagemUrl: maeImg, rotulo: "👩 CUIDADO", correto: true },
        { nome: "Cuidado do pai", imagemUrl: paiImg, rotulo: "👨 CUIDADO", correto: true },
        { nome: "Celular", imagemUrl: celularImg, rotulo: "❌ CELULAR (é novo)", correto: false },
      ],
      acerto: "Isso! Vínculos e formas de cuidado podem permanecer em algumas histórias.",
      erro: "Objetos e moradias podem mudar; procure elementos que uma fonte mostre atravessando gerações.",
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
          
            { nome: "outra-opcao-4", imagemUrl: familiaTradImg },],
        },
        {
          label: "Como é a sua casa?",
          modo: "imagem",
          opcoes: [
            { nome: "Antiga", imagemUrl: casaAntigaImg, rotulo: "🏚️ ANTIGA" },
            { nome: "Moderna", imagemUrl: casaModernaImg, rotulo: "🏠 MODERNA" },
          
            { nome: "outra-opcao-3", imagemUrl: familiaTradImg },
            { nome: "outra-opcao-4", imagemUrl: familiaTradImg },],
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
        opcoes: ["Sim", "Não", "Só metade", "Preciso observar melhor"],
        correta: 0,
        explicacao: "Toda configuração é família.",
        visual: { tipo: "itens", imagemUrl: familiaMaeFilhoImg, quantidade: 1, rotulo: "👩‍👦" },
      },
      {
        pergunta: "Antigamente as famílias eram mais:",
        opcoes: ["Grandes", "Pequenas", "Nenhuma", "Preciso observar melhor"],
        correta: 0,
        explicacao: "Moravam muita gente junta.",
        visual: { tipo: "itens", imagemUrl: familiaGrandeImg, quantidade: 1, rotulo: "👨‍👩‍👧‍👦" },
      },
      {
        pergunta: "Um pai e um filho são família?",
        opcoes: ["Sim", "Não", "Só se tiver mãe", "Preciso observar melhor"],
        correta: 0,
        explicacao: "Sim, claro!",
        visual: { tipo: "itens", imagemUrl: familiaPaiFilhoImg, quantidade: 1, rotulo: "👨‍👦" },
      },
    ],
    medio: [
      {
        pergunta: "O que PODE permanecer em uma história familiar?",
        opcoes: ["Uma memória", "O mesmo celular", "A mesma casa para todos", "Preciso observar melhor"],
        correta: 0,
        explicacao: "Memórias podem ser preservadas e transmitidas.",
        visual: { tipo: "itens", imagemUrl: abracoImg, quantidade: 1, rotulo: "🤗" },
      },
      {
        pergunta: "Uma AVÓ criando o neto forma:",
        opcoes: ["Uma família", "Nada", "Uma escola", "Preciso observar melhor"],
        correta: 0,
        explicacao: "É uma família também.",
        visual: { tipo: "itens", imagemUrl: familiaAvosImg, quantidade: 1, rotulo: "👵" },
      },
      {
        pergunta: "As famílias de hoje são:",
        opcoes: ["De vários tamanhos", "Todas iguais", "Só grandes", "Preciso observar melhor"],
        correta: 0,
        explicacao: "Existe família de todo tamanho.",
        visual: { tipo: "itens", imagemUrl: familiaTradImg, quantidade: 1, rotulo: "👨‍👩‍👧" },
      },
    ],
    dificil: [
      {
        pergunta: "As famílias mudam com:",
        opcoes: ["O tempo", "Nunca", "Só no verão", "Preciso observar melhor"],
        correta: 0,
        explicacao: "Mudam de tamanho e hábitos ao longo do tempo.",
        visual: { tipo: "itens", imagemUrl: relogioImg, quantidade: 1, rotulo: "⏰" },
      },
      {
        pergunta: "Toda família merece:",
        opcoes: ["Respeito", "Escondido", "Ficar sem carinho", "Preciso observar melhor"],
        correta: 0,
        explicacao: "Respeito é essencial.",
        visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "💛" },
      },
      {
        pergunta: "O que PODE mudar na organização familiar?",
        opcoes: ["Quem mora junto e como divide tarefas", "A existência do passado", "Todas as memórias ao mesmo tempo", "Preciso observar melhor"],
        correta: 0,
        explicacao: "Moradia, composição e divisão de tarefas podem mudar conforme época e contexto.",
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
