import type { Aula } from "../types";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as chuvaImg } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as ventoImg } from "@/assets/neuro-treino/objetos/vento.png.asset.json";
import { url as nuvemImg } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as casacoImg } from "@/assets/neuro-treino/objetos/casaco.png.asset.json";
import { url as camisetaImg } from "@/assets/neuro-treino/objetos/camiseta.png.asset.json";
import { url as sombrinhaImg } from "@/assets/neuro-treino/objetos/sombrinha.png.asset.json";
import { url as sopaImg } from "@/assets/neuro-treino/objetos/sopa.png.asset.json";
import { url as sorveteImg } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as sucoImg } from "@/assets/neuro-treino/objetos/suco.png.asset.json";
import { url as banaImg } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as bolaPraiaImg } from "@/assets/neuro-treino/objetos/bola-praia.png.asset.json";
import { url as pipaImg } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as familiaImg } from "@/assets/neuro-treino/objetos/familia-grande.png.asset.json";
import { url as geladeiraImg } from "@/assets/neuro-treino/objetos/geladeira.png.asset.json";
import { url as doceImg } from "@/assets/neuro-treino/objetos/doce.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as cerejeiraImg } from "@/assets/neuro-treino/objetos/cerejeira.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";

/**
 * EF01GE11 — Geografia · 1º Ano
 * Missão: "Estações E Cuidados"
 * Associar mudanças de vestuário e hábitos alimentares na comunidade
 * ao longo do ano, conforme variação de temperatura e umidade.
 */
const aula: Aula = {
  codigo: "EF01GE11",
  ano: "1º Ano",
  disciplina: "Geografia",
  titulo: "Estações E Cuidados",

  narrativa: {
    titulo: "Guarda-Roupa Que Muda",
    contexto:
      "Brilha abre o GUARDA-ROUPA 🧥 e a Coruja Sábia comenta: 'Percebeu que nem sempre a gente usa a mesma roupa? Nem come a mesma comida?'",
    problema:
      "Quando faz CALOR ☀️, todo mundo quer sorvete e camiseta. Quando esfria ❄️, sopinha e casaco. Bora descobrir POR QUÊ isso muda?",
    convite: "Vamos conhecer o segredo das ESTAÇÕES?",
  },

  conhecimentosPrevios: [
    "Reconhecer diferença entre quente e frio.",
    "Saber que existem roupas e comidas diferentes.",
  ],

  missao:
    "Associar mudanças no vestuário e nos hábitos alimentares às variações de temperatura da comunidade.",

  objetivos: [
    "Reconhecer roupas de calor e de frio.",
    "Identificar comidas de calor e de frio.",
    "Perceber que hábitos mudam com o tempo.",
    "Associar clima → escolhas do dia.",
    "Valorizar o autocuidado com o corpo.",
  ],

  motivacao: "Vestir e comer bem é UM JEITO de cuidar do CORPO 💚.",

  explicacao:
    "☀️ CALOR — roupa leve (camiseta), comida fresca (sorvete, fruta, suco).\n❄️ FRIO — casaco, gorro, comida quente (sopa, bolo, chocolate).\n🌧️ CHUVA — capa, sombrinha e comidas quentinhas.\nCada TEMPO pede um cuidado.",

  explicacoesNiveis: {
    nivel1: "Quando muda o TEMPO, muda a ROUPA e a COMIDA.",
    nivel2: "No calor usamos roupa leve e comida fresca.",
    nivel3: "No frio usamos casaco e comida quentinha.",
    nivel4: "Adaptar o vestuário e a alimentação é AUTOCUIDADO.",
  },

  exemploResolvido: {
    enunciado: "Está muito CALOR. Qual roupa usar?",
    passos: [
      "Sol forte = muito calor.",
      "Roupa leve refresca.",
      "Camiseta é ideal.",
    ],
    resposta: "👕 CAMISETA!",
  },

  atividadeGuiada: {
    enunciado: "Está FRIO. Qual COMIDA cai bem?",
    resposta: "🍲 SOPA quentinha!",
    explicacao: "Comida quente aquece o corpo por dentro.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é a COMIDA de FRIO?",
      opcoes: [
        { nome: "sopa", imagemUrl: sopaImg },
        { nome: "sorvete", imagemUrl: sorveteImg },
        { nome: "suco", imagemUrl: sucoImg },
      ],
      respostaCerta: "sopa",
    },
  },

  exercicios: [
    { enunciado: "No calor a gente usa…", resposta: "👕 Roupa LEVE.", dica: "Refresca o corpo." },
    { enunciado: "No frio a gente usa…", resposta: "🧥 CASACO.", dica: "Esquenta o corpo." },
    { enunciado: "Comida gelada é boa em…", resposta: "☀️ Dias QUENTES.", dica: "Refresca por dentro." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: escolha o CUIDADO certo pra cada tempo!",
    resposta: "Cada clima pede uma escolha.",
    visual: {
      perguntas: [
        {
          pergunta: "☀️ Dia de MUITO calor — escolha:",
          opcoes: ["Camiseta", "Casaco", "Cachecol"],
          correta: 0,
          explicacao: "Roupa leve.",
          visual: { tipo: "itens", imagemUrl: camisetaImg, quantidade: 1, rotulo: "👕" },
        },
        {
          pergunta: "❄️ Dia FRIO — escolha:",
          opcoes: ["Casaco", "Camiseta regata", "Chinelo"],
          correta: 0,
          explicacao: "Casaco esquenta.",
          visual: { tipo: "itens", imagemUrl: casacoImg, quantidade: 1, rotulo: "🧥" },
        },
        {
          pergunta: "🌧️ Dia CHUVOSO — leve:",
          opcoes: ["Sombrinha", "Boné", "Óculos escuros"],
          correta: 0,
          explicacao: "Protege da chuva.",
          visual: { tipo: "itens", imagemUrl: sombrinhaImg, quantidade: 1, rotulo: "☔" },
        },
        {
          pergunta: "🥵 Calor pede uma comida…",
          opcoes: ["Fresca (sorvete)", "Quentíssima", "Nada"],
          correta: 0,
          explicacao: "Refresca.",
          visual: { tipo: "itens", imagemUrl: sorveteImg, quantidade: 1, rotulo: "🍦" },
        },
        {
          pergunta: "🥶 Frio pede uma comida…",
          opcoes: ["Sopa quente", "Sorvete gelado", "Suco com gelo"],
          correta: 0,
          explicacao: "Sopa aquece.",
          visual: { tipo: "itens", imagemUrl: sopaImg, quantidade: 1, rotulo: "🍲" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "☀️ CALOR — camiseta e comida fresca.",
      "❄️ FRIO — casaco e comida quente.",
      "🌧️ CHUVA — sombrinha e agasalho.",
      "🍲 Cada estação tem seu SABOR.",
      "💚 Vestir bem é cuidar do corpo.",
    ],
    dica: "Antes de sair, veja o tempo e escolha a roupa que combina.",
  },

  quiz: [
    {
      pergunta: "No CALOR usamos…",
      opcoes: ["Camiseta leve", "Casaco pesado", "Cachecol"],
      correta: 0,
      explicacao: "Roupa leve.",
      visual: { tipo: "itens", imagemUrl: camisetaImg, quantidade: 1, rotulo: "👕" },
    },
    {
      pergunta: "No FRIO usamos…",
      opcoes: ["Casaco", "Regata", "Chinelo"],
      correta: 0,
      explicacao: "Aquece o corpo.",
      visual: { tipo: "itens", imagemUrl: casacoImg, quantidade: 1, rotulo: "🧥" },
    },
    {
      pergunta: "Comida boa pro CALOR:",
      opcoes: ["Sorvete e suco", "Só sopa", "Só chá quente"],
      correta: 0,
      explicacao: "Comida gelada refresca.",
      visual: { tipo: "itens", imagemUrl: sorveteImg, quantidade: 1, rotulo: "🍦" },
    },
    {
      pergunta: "Comida boa pro FRIO:",
      opcoes: ["Sopa quentinha", "Só sorvete", "Só picolé"],
      correta: 0,
      explicacao: "Quente aquece.",
      visual: { tipo: "itens", imagemUrl: sopaImg, quantidade: 1, rotulo: "🍲" },
    },
    {
      pergunta: "Adaptar roupa e comida é…",
      opcoes: ["Cuidar do corpo", "Perder tempo", "Não importa"],
      correta: 0,
      explicacao: "Autocuidado.",
      visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🦉" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião das Estações! 🧥 Item desbloqueado: Álbum das Estações do Brilha.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Em algumas partes do Brasil quase não faz FRIO ❄️ e em outras neva! Por isso as pessoas comem e se vestem de jeitos DIFERENTES em cada região 🇧🇷.",
  },

  interativas: [
    // APRENDENDO — lupa: roupas e comidas por tempo
    {
      tipo: "lupa",
      titulo: "Cuidados Com O Corpo",
      instrucao: "Toque em cada item pra ouvir quando usar.",
      itens: [
        { nome: "Casaco", imagemUrl: casacoImg, rotulo: "🧥 CASACO", descoberta: "Usado no FRIO — esquenta o corpinho." },
        { nome: "Camiseta", imagemUrl: camisetaImg, rotulo: "👕 CAMISETA", descoberta: "Usada no CALOR — deixa o corpo respirar." },
        { nome: "Sombrinha", imagemUrl: sombrinhaImg, rotulo: "☔ SOMBRINHA", descoberta: "Protege da CHUVA ou do sol forte." },
        { nome: "Sopa", imagemUrl: sopaImg, rotulo: "🍲 SOPA", descoberta: "Aquece por dentro nos dias FRIOS." },
        { nome: "Sorvete", imagemUrl: sorveteImg, rotulo: "🍦 SORVETE", descoberta: "Refresca nos dias QUENTES." },
        { nome: "Coruja Sábia", imagemUrl: corujaImg, rotulo: "🦉 CORUJA", descoberta: "Cada tempo pede um cuidado diferente." },
      ],
    },

    // FASE 1 — escolherFigura: roupa de frio
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Roupa Pro FRIO",
      instrucao: "Toque na roupa ideal pra um dia FRIO ❄️.",
      pergunta: "Qual usar no frio?",
      opcoes: [
        { nome: "casaco", imagemUrl: casacoImg, rotulo: "CASACO" },
        { nome: "camiseta", imagemUrl: camisetaImg, rotulo: "CAMISETA" },
        { nome: "sombrinha", imagemUrl: sombrinhaImg, rotulo: "SOMBRINHA" },
      ],
      correta: 0,
      acerto: "🧥 Aqueceu direitinho!",
      erro: "Essa é leve demais pro frio.",
    },

    // FASE 2 — ligar: clima ↔ escolha
    {
      tipo: "ligar",
      titulo: "Fase 2 · Cada Tempo, Um Cuidado",
      instrucao: "Ligue cada TEMPO à ESCOLHA certa.",
      pares: [
        { a: "☀️ Sol quente", b: "Camiseta e suco", aImagem: solImg },
        { a: "❄️ Frio", b: "Casaco e sopa", aImagem: casacoImg },
        { a: "🌧️ Chuva", b: "Sombrinha e chá", aImagem: chuvaImg },
        { a: "💨 Vento", b: "Blusa leve e pipa", aImagem: ventoImg },
      ],
    },

    // FASE 3 — arrastar: item ↔ calor/frio
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Calor Ou Frio?",
      instrucao: "Arraste cada ITEM pra CALOR ☀️ ou FRIO ❄️.",
      pares: [
        { item: "Camiseta", alvo: "Calor", itemImagem: camisetaImg },
        { item: "Sorvete", alvo: "Calor", itemImagem: sorveteImg },
        { item: "Suco gelado", alvo: "Calor", itemImagem: sucoImg },
        { item: "Bola de praia", alvo: "Calor", itemImagem: bolaPraiaImg },
        { item: "Casaco", alvo: "Frio", itemImagem: casacoImg },
        { item: "Sopa", alvo: "Frio", itemImagem: sopaImg },
        { item: "Bolo quentinho", alvo: "Frio", itemImagem: boloImg },
      ],
      alvosVisuais: [
        { nome: "Calor", cor: "#F59E0B", imagemUrl: solImg, capacidade: 4 },
        { nome: "Frio", cor: "#0EA5E9", imagemUrl: nuvemImg, capacidade: 3 },
      ],
    },

    // FASE 4 — selecionarMultiplos: roupa/comida de calor
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 4 · Kit Do CALOR",
      instrucao: "Marque tudo que combina com um dia de MUITO CALOR ☀️.",
      criterio: "Coisas de dia quente 🔥",
      opcoes: [
        { nome: "Camiseta", imagemUrl: camisetaImg, rotulo: "👕 CAMISETA", correto: true },
        { nome: "Sorvete", imagemUrl: sorveteImg, rotulo: "🍦 SORVETE", correto: true },
        { nome: "Suco gelado", imagemUrl: sucoImg, rotulo: "🥤 SUCO", correto: true },
        { nome: "Fruta fresquinha", imagemUrl: macaImg, rotulo: "🍎 FRUTA", correto: true },
        { nome: "Bola de praia", imagemUrl: bolaPraiaImg, rotulo: "🏐 PRAIA", correto: true },
        { nome: "Casaco pesado", imagemUrl: casacoImg, rotulo: "🧥 CASACO", correto: false },
        { nome: "Sopa fumegante", imagemUrl: sopaImg, rotulo: "🍲 SOPA", correto: false },
      ],
      acerto: "☀️ Kit de calor pronto!",
      erro: "Esse é de FRIO — não combina com dia quente.",
    },

    // FASE 5 — album: minhas escolhas
    {
      tipo: "album",
      titulo: "Fase 5 · Meu Álbum Das Estações",
      instrucao: "Monte seu álbum: o que você gosta em cada TEMPO!",
      escolhas: [
        {
          label: "No CALOR eu adoro…",
          modo: "imagem",
          opcoes: [
            { nome: "Sorvete", imagemUrl: sorveteImg, rotulo: "🍦" },
            { nome: "Suco", imagemUrl: sucoImg, rotulo: "🥤" },
            { nome: "Praia", imagemUrl: bolaPraiaImg, rotulo: "🏐" },
            { nome: "Pipa", imagemUrl: pipaImg, rotulo: "🪁" },
          ],
        },
        {
          label: "No FRIO eu adoro…",
          modo: "imagem",
          opcoes: [
            { nome: "Sopa", imagemUrl: sopaImg, rotulo: "🍲 SOPA" },
            { nome: "Casaco", imagemUrl: casacoImg, rotulo: "🧥 CASACO" },
            { nome: "Bolo quente", imagemUrl: boloImg, rotulo: "🍰 BOLO" },
            { nome: "Doce", imagemUrl: doceImg, rotulo: "🍬 DOCE" },
          ],
        },
        {
          label: "Fruta preferida do ano todo…",
          modo: "imagem",
          opcoes: [
            { nome: "Maçã", imagemUrl: macaImg, rotulo: "🍎 MAÇÃ" },
            { nome: "Banana", imagemUrl: banaImg, rotulo: "🍌 BANANA" },
          ],
        },
      ],
      acerto: "📔 Álbum das Estações salvo no Diário do Brilha!",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "No calor a roupa é…",
        opcoes: ["Leve", "Pesada", "Grossa"],
        correta: 0,
        explicacao: "Refresca.",
        visual: { tipo: "itens", imagemUrl: camisetaImg, quantidade: 1, rotulo: "👕" },
      },
      {
        pergunta: "No frio a roupa é…",
        opcoes: ["Casaco", "Regata", "Biquíni"],
        correta: 0,
        explicacao: "Aquece.",
        visual: { tipo: "itens", imagemUrl: casacoImg, quantidade: 1, rotulo: "🧥" },
      },
      {
        pergunta: "Sorvete é bom quando…",
        opcoes: ["Faz calor", "Faz frio", "Nunca"],
        correta: 0,
        explicacao: "Refresca.",
        visual: { tipo: "itens", imagemUrl: sorveteImg, quantidade: 1, rotulo: "🍦" },
      },
    ],
    medio: [
      {
        pergunta: "Sopa cai bem quando…",
        opcoes: ["Faz frio", "Faz muito calor", "Nunca"],
        correta: 0,
        explicacao: "Aquece.",
        visual: { tipo: "itens", imagemUrl: sopaImg, quantidade: 1, rotulo: "🍲" },
      },
      {
        pergunta: "Chuva pede…",
        opcoes: ["Sombrinha", "Regata", "Chinelo aberto"],
        correta: 0,
        explicacao: "Protege da água.",
        visual: { tipo: "itens", imagemUrl: sombrinhaImg, quantidade: 1, rotulo: "☔" },
      },
      {
        pergunta: "Adaptar comida ao tempo é…",
        opcoes: ["Cuidar do corpo", "Perder tempo", "Errado"],
        correta: 0,
        explicacao: "Autocuidado.",
        visual: { tipo: "itens", imagemUrl: geladeiraImg, quantidade: 1, rotulo: "🥶" },
      },
    ],
    dificil: [
      {
        pergunta: "Numa região MUITO fria…",
        opcoes: ["Comem mais comida quente", "Comem só picolé", "Não comem"],
        correta: 0,
        explicacao: "Sopa e caldo aquecem.",
        visual: { tipo: "itens", imagemUrl: sopaImg, quantidade: 1, rotulo: "🍲" },
      },
      {
        pergunta: "Regiões quentes têm mais…",
        opcoes: ["Roupa leve", "Casaco grosso", "Sapato de neve"],
        correta: 0,
        explicacao: "Refresca.",
        visual: { tipo: "itens", imagemUrl: camisetaImg, quantidade: 1, rotulo: "👕" },
      },
      {
        pergunta: "As pessoas mudam vestuário/comida porque…",
        opcoes: ["A temperatura muda no ano", "Nada muda", "Só por moda"],
        correta: 0,
        explicacao: "Adaptação ao clima.",
        visual: { tipo: "itens", imagemUrl: familiaImg, quantidade: 1, rotulo: "👨‍👩‍👧‍👦" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica Do Guarda-Roupa",
    objetivo:
      "Arraste cada item pro TEMPO certo antes do relógio parar ⏱️! Coloque roupas e comidas em CALOR ou FRIO.",
    tempoSegundos: 90,
    categorias: [
      { nome: "Calor", cor: "#F59E0B", emoji: "☀️" },
      { nome: "Frio", cor: "#0EA5E9", emoji: "❄️" },
    ],
    objetos: [
      { nome: "Camiseta", imagemUrl: camisetaImg, categoria: "Calor", rotulo: "👕" },
      { nome: "Sorvete", imagemUrl: sorveteImg, categoria: "Calor", rotulo: "🍦" },
      { nome: "Suco", imagemUrl: sucoImg, categoria: "Calor", rotulo: "🥤" },
      { nome: "Fruta", imagemUrl: macaImg, categoria: "Calor", rotulo: "🍎" },
      { nome: "Bola praia", imagemUrl: bolaPraiaImg, categoria: "Calor", rotulo: "🏐" },
      { nome: "Casaco", imagemUrl: casacoImg, categoria: "Frio", rotulo: "🧥" },
      { nome: "Sopa", imagemUrl: sopaImg, categoria: "Frio", rotulo: "🍲" },
      { nome: "Bolo quente", imagemUrl: boloImg, categoria: "Frio", rotulo: "🍰" },
      { nome: "Doce quente", imagemUrl: doceImg, categoria: "Frio", rotulo: "🍬" },
      { nome: "Sombrinha", imagemUrl: sombrinhaImg, categoria: "Frio", rotulo: "☔" },
    ],
    minAcertos: 8,
    acerto: "🧥 Guarda-roupa e cozinha prontos pra qualquer tempo!",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Cardápio Da Semana",
    instrucao:
      "Com a família, criem juntos um CARDÁPIO da semana pensando no clima. Escolham roupas e comidas pra cada dia.",
    registros: [
      { label: "Comida preferida pro calor", tipo: "texto" },
      { label: "Comida preferida pro frio", tipo: "texto" },
      { label: "Roupa favorita de calor", tipo: "texto" },
      { label: "Roupa favorita de frio", tipo: "texto" },
    ],
    permitirFoto: true,
  },
};

export default aula;
