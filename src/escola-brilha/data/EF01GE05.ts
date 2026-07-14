import type { Aula } from "../types";
import { url as cristalAguaImg } from "@/assets/neuro-treino/objetos/cristal-agua.png.asset.json";
import { url as cristalPlantaImg } from "@/assets/neuro-treino/objetos/cristal-planta.png.asset.json";
import { url as cristalSoloImg } from "@/assets/neuro-treino/objetos/cristal-solo.png.asset.json";
import { url as cristalArImg } from "@/assets/neuro-treino/objetos/cristal-ar.png.asset.json";
import { url as pedraImg } from "@/assets/neuro-treino/objetos/pedra.png.asset.json";
import { url as lagoImg } from "@/assets/neuro-treino/objetos/lago.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as nuvemImg } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as carroImg } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as predioImg } from "@/assets/neuro-treino/objetos/predio.png.asset.json";
import { url as passaroImg } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as peixeImg } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as borboletaImg } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as criancasImg } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as chuvaImg } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as jardimImg } from "@/assets/neuro-treino/objetos/jardim.png.asset.json";
import { url as regadorImg } from "@/assets/neuro-treino/objetos/regador.png.asset.json";
import { url as plantaImg } from "@/assets/neuro-treino/objetos/planta-pequena.png.asset.json";
import { url as lixeiraImg } from "@/assets/neuro-treino/objetos/lixeira.png.asset.json";
import { url as fogoImg } from "@/assets/neuro-treino/objetos/fogo.png.asset.json";
import { url as garrafaImg } from "@/assets/neuro-treino/objetos/garrafa.png.asset.json";

/**
 * EF01GE05 — Geografia · 1º Ano
 * Missão: "A Grande Expedição Da Natureza"
 * Reconhecer elementos naturais (água, plantas, solo, ar) e sua importância
 * pra vida das pessoas, animais e plantas.
 */
const aula: Aula = {
  codigo: "EF01GE05",
  ano: "1º Ano",
  disciplina: "Geografia",
  titulo: "A Grande Expedição Da Natureza",

  narrativa: {
    titulo: "Os 4 Cristais Da Natureza",
    contexto:
      "Brilha recebe uma missão especial ✨: encontrar os QUATRO CRISTAIS DA NATUREZA — 💧 Água, 🌱 Plantas, 🪨 Solo e 🌬️ Ar — escondidos pelas paisagens.",
    problema:
      "A Coruja Sábia explica: 'A NATUREZA está em todo lugar e precisa de cuidado 💚'. Cada cristal encontrado devolve o brilho ao JARDIM ENCANTADO.",
    convite: "Bora ser um GUARDIÃO da Natureza?",
  },

  conhecimentosPrevios: [
    "Reconhecer elementos do dia a dia (água, plantas, ar).",
    "Perceber a diferença entre natureza e construção.",
  ],

  missao:
    "Identificar os elementos naturais essenciais pra vida e reconhecer atitudes de preservação ambiental.",

  objetivos: [
    "Identificar elementos naturais nas paisagens.",
    "Compreender a importância da água, solo, plantas e ar.",
    "Reconhecer a relação entre natureza e vida.",
    "Desenvolver atitudes de preservação.",
    "Observar a presença da natureza no cotidiano.",
  ],

  motivacao:
    "Cuidar da natureza é cuidar da VIDA 💚 — de todos os seres vivos.",

  explicacao:
    "💧 ÁGUA: beber, tomar banho, regar plantas.\n🌱 PLANTAS: dão oxigênio e alimento.\n🪨 SOLO: onde as plantas crescem.\n🌬️ AR: precisamos pra respirar.\nSem qualquer um deles, a vida fica difícil.",

  explicacoesNiveis: {
    nivel1: "Água, plantas, solo e ar são os 4 elementos da natureza.",
    nivel2: "Cada elemento tem uma função pra vida.",
    nivel3: "Quando poluímos, os elementos ficam ruins pros seres vivos.",
    nivel4: "Nossas atitudes ajudam ou prejudicam a natureza todo dia.",
  },

  exemploResolvido: {
    enunciado: "Uma planta murchou. Qual cristal ela precisa PRIMEIRO?",
    passos: [
      "Planta murcha = falta água.",
      "O SOLO segura ela em pé.",
      "Sem 💧 água, ela não vive.",
    ],
    resposta: "💧 ÁGUA!",
  },

  atividadeGuiada: {
    enunciado: "Qual desses é elemento da NATUREZA?",
    resposta: "☁️ NUVEM!",
    explicacao:
      "Nuvem se forma sozinha no céu — é da natureza. Carro e casa são feitos pelas pessoas.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é da natureza?",
      opcoes: [
        { nome: "nuvem", imagemUrl: nuvemImg },
        { nome: "carro", imagemUrl: carroImg },
        { nome: "casa", imagemUrl: casaImg },
      ],
      respostaCerta: "nuvem",
    },
  },

  exercicios: [
    {
      enunciado: "Pra que serve a ÁGUA?",
      resposta: "💧 Beber, cozinhar, cuidar da vida.",
      dica: "Todo ser vivo precisa de água.",
    },
    {
      enunciado: "Onde a planta cresce?",
      resposta: "🪨 No SOLO.",
      dica: "É onde a raiz se firma.",
    },
    {
      enunciado: "Pra que precisamos do AR?",
      resposta: "🌬️ Pra RESPIRAR.",
      dica: "Sem ar, ninguém vive.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: complete a coleta dos 4 cristais!",
    resposta: "Cada elemento é essencial pra vida.",
    visual: {
      perguntas: [
        {
          pergunta: "Qual cristal serve pra BEBER?",
          opcoes: ["Água", "Solo", "Ar"],
          correta: 0,
          explicacao: "Precisamos de água pra viver.",
          visual: { tipo: "itens", imagemUrl: cristalAguaImg, quantidade: 1, rotulo: "💧" },
        },
        {
          pergunta: "As PLANTAS produzem…",
          opcoes: ["Oxigênio e alimento", "Carros", "Prédios"],
          correta: 0,
          explicacao: "Plantas dão oxigênio e comida.",
          visual: { tipo: "itens", imagemUrl: cristalPlantaImg, quantidade: 1, rotulo: "🌱" },
        },
        {
          pergunta: "O SOLO serve pra…",
          opcoes: ["Sustentar as plantas", "Beber", "Voar"],
          correta: 0,
          explicacao: "As raízes seguram no solo.",
          visual: { tipo: "itens", imagemUrl: cristalSoloImg, quantidade: 1, rotulo: "🪨" },
        },
        {
          pergunta: "O AR é usado pra…",
          opcoes: ["Respirar", "Comer", "Cozinhar"],
          correta: 0,
          explicacao: "Todos precisam respirar.",
          visual: { tipo: "itens", imagemUrl: cristalArImg, quantidade: 1, rotulo: "🌬️" },
        },
        {
          pergunta: "Uma atitude que CUIDA da natureza:",
          opcoes: ["Plantar árvores", "Poluir rio", "Queimar lixo"],
          correta: 0,
          explicacao: "Plantar traz vida.",
          visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "💧 ÁGUA — pra beber e manter a vida.",
      "🌱 PLANTAS — dão oxigênio e alimento.",
      "🪨 SOLO — sustenta as plantas.",
      "🌬️ AR — precisamos pra respirar.",
      "💚 CUIDAR da natureza é dever de todos.",
    ],
    dica: "Hoje escolha UMA atitude: economizar água OU regar uma planta.",
  },

  quiz: [
    {
      pergunta: "Qual elemento é essencial pra BEBER?",
      opcoes: ["Água", "Pedra", "Areia"],
      correta: 0,
      explicacao: "Sem água não tem vida.",
      visual: { tipo: "itens", imagemUrl: cristalAguaImg, quantidade: 1, rotulo: "💧" },
    },
    {
      pergunta: "As plantas ajudam a:",
      opcoes: [
        "Produzir oxigênio e alimento",
        "Fabricar carros",
        "Construir prédios",
      ],
      correta: 0,
      explicacao: "Elas dão oxigênio e comida.",
      visual: { tipo: "itens", imagemUrl: cristalPlantaImg, quantidade: 1, rotulo: "🌱" },
    },
    {
      pergunta: "O AR é importante porque:",
      opcoes: [
        "Precisamos pra respirar",
        "Serve só pra pipas",
        "Não tem utilidade",
      ],
      correta: 0,
      explicacao: "Todos os seres vivos respiram.",
      visual: { tipo: "itens", imagemUrl: cristalArImg, quantidade: 1, rotulo: "🌬️" },
    },
    {
      pergunta: "Uma atitude que AJUDA a natureza é:",
      opcoes: ["Economizar água", "Jogar lixo no rio", "Queimar plantas"],
      correta: 0,
      explicacao: "Economizar cuida do planeta.",
      visual: { tipo: "itens", imagemUrl: regadorImg, quantidade: 1, rotulo: "💧" },
    },
    {
      pergunta: "Hoje aprendemos sobre:",
      opcoes: [
        "Os elementos naturais e sua importância",
        "Apenas construções",
        "Apenas brinquedos",
      ],
      correta: 0,
      explicacao: "Natureza é vida!",
      visual: { tipo: "itens", imagemUrl: jardimImg, quantidade: 1, rotulo: "🌼" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião da Natureza! 💎 Item desbloqueado: Coleção dos Cristais da Natureza.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Mesmo nas CIDADES 🏙️, a natureza segue essencial: árvores refrescam o ar, plantas dão oxigênio e a água é indispensável pra TODOS.",
  },

  interativas: [
    // APRENDENDO — lupa: 4 cristais
    {
      tipo: "lupa",
      titulo: "Os 4 Cristais Da Natureza",
      instrucao:
        "Toque em cada CRISTAL ✨ pra ouvir a explicação do Brilha.",
      itens: [
        {
          nome: "Cristal da Água",
          imagemUrl: cristalAguaImg,
          rotulo: "💧 ÁGUA",
          descoberta:
            "A água é essencial pra pessoas, animais e plantas. Use com cuidado, sem desperdiçar.",
        },
        {
          nome: "Cristal da Planta",
          imagemUrl: cristalPlantaImg,
          rotulo: "🌱 PLANTAS",
          descoberta:
            "As plantas produzem OXIGÊNIO e ALIMENTO. Elas dão vida ao planeta.",
        },
        {
          nome: "Cristal do Solo",
          imagemUrl: cristalSoloImg,
          rotulo: "🪨 SOLO",
          descoberta:
            "O solo sustenta as plantas — é onde a raiz cresce e segura.",
        },
        {
          nome: "Cristal do Ar",
          imagemUrl: cristalArImg,
          rotulo: "🌬️ AR",
          descoberta: "O ar é pra RESPIRAR — todo ser vivo precisa.",
        },
        {
          nome: "Coruja Sábia",
          imagemUrl: corujaImg,
          rotulo: "🦉 CORUJA",
          descoberta: "Cuidar da natureza é cuidar da nossa VIDA.",
        },
      ],
    },

    // FASE 1 — Encontre o Elemento Natural (selecionarMultiplos)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 1 · Encontre O Elemento Natural",
      instrucao:
        "Marque APENAS os elementos da NATUREZA. Cuidado com o que foi feito pelas pessoas!",
      criterio: "Elementos da natureza 🌿",
      opcoes: [
        { nome: "Água", imagemUrl: cristalAguaImg, rotulo: "💧 ÁGUA", correto: true },
        { nome: "Árvore", imagemUrl: arvoreImg, rotulo: "🌳 ÁRVORE", correto: true },
        { nome: "Nuvem", imagemUrl: nuvemImg, rotulo: "☁️ NUVEM", correto: true },
        { nome: "Sol", imagemUrl: solImg, rotulo: "☀️ SOL", correto: true },
        { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 CASA", correto: false },
        { nome: "Carro", imagemUrl: carroImg, rotulo: "🚗 CARRO", correto: false },
        { nome: "Prédio", imagemUrl: predioImg, rotulo: "🏢 PRÉDIO", correto: false },
      ],
      acerto: "✨ Cristal ativado! Você separou direitinho o que é da natureza.",
      erro: "Esse foi feito pelas pessoas — procure só o que nasce sozinho.",
    },

    // FASE 2 — Para Que Serve? (ligar: elemento ↔ função)
    {
      tipo: "ligar",
      titulo: "Fase 2 · Para Que Serve?",
      instrucao:
        "Cada elemento da natureza tem um SUPERPODER. Ligue cada CRISTAL à sua função ✨.",
      pares: [
        { a: "💧 Água", b: "Beber e manter a vida", aImagem: cristalAguaImg },
        { a: "🌱 Plantas", b: "Produzir oxigênio e alimento", aImagem: cristalPlantaImg },
        { a: "🪨 Solo", b: "Sustentar as plantas", aImagem: cristalSoloImg },
        { a: "🌬️ Ar", b: "Respirar", aImagem: cristalArImg },
      ],
    },

    // FASE 3 — Quem Precisa da Natureza? (arrastar: ser vivo → elemento)
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Quem Precisa Da Natureza?",
      instrucao:
        "Arraste cada SER VIVO pro ELEMENTO que ele mais precisa 💚. Cada acerto faz um cristal brilhar!",
      pares: [
        { item: "Pássaro 🐦", alvo: "Árvore", itemImagem: passaroImg },
        { item: "Peixe 🐟", alvo: "Água", itemImagem: peixeImg },
        { item: "Flor 🌼", alvo: "Solo", itemImagem: florImg },
        { item: "Criança 👧", alvo: "Ar", itemImagem: criancasImg },
      ],
      alvosVisuais: [
        { nome: "Árvore", cor: "#22C55E", imagemUrl: arvoreImg, capacidade: 1 },
        { nome: "Água", cor: "#0EA5E9", imagemUrl: cristalAguaImg, capacidade: 1 },
        { nome: "Solo", cor: "#A16207", imagemUrl: cristalSoloImg, capacidade: 1 },
        { nome: "Ar", cor: "#93C5FD", imagemUrl: cristalArImg, capacidade: 1 },
      ],
    },

    // FASE 4 — Missão Preservação (selecionarMultiplos: atitudes corretas)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 4 · Missão Preservação",
      instrucao:
        "Marque TODAS as atitudes que CUIDAM da natureza. Cuidado com as que fazem mal!",
      criterio: "Atitudes de preservação 💚",
      opcoes: [
        { nome: "Economizar água", imagemUrl: regadorImg, rotulo: "💧 ECONOMIZAR água", correto: true },
        { nome: "Plantar árvores", imagemUrl: arvoreImg, rotulo: "🌳 PLANTAR árvores", correto: true },
        { nome: "Cuidar das plantas", imagemUrl: plantaImg, rotulo: "🌱 CUIDAR das plantas", correto: true },
        { nome: "Jogar lixo certo", imagemUrl: lixeiraImg, rotulo: "🗑️ JOGAR lixo na lixeira", correto: true },
        { nome: "Queimar lixo", imagemUrl: fogoImg, rotulo: "❌ QUEIMAR lixo", correto: false },
        { nome: "Poluir rios", imagemUrl: garrafaImg, rotulo: "❌ POLUIR rios", correto: false },
      ],
      acerto: "💎 Cristais brilhando! Você é um verdadeiro guardião.",
      erro: "Essa atitude MACHUCA a natureza — escolha só o que cuida da vida.",
    },

    // FASE 5 — Jardim do Brilha (album: montar jardim)
    {
      tipo: "album",
      titulo: "Fase 5 · Jardim Do Brilha",
      instrucao:
        "Monte o SEU JARDIM ENCANTADO 🌼. Pode marcar MAIS DE UMA em cada grupo — o Brilha guarda no seu perfil ✨.",
      escolhas: [
        {
          label: "Nas PLANTAS do meu jardim eu quero…",
          modo: "imagem",
          opcoes: [
            { nome: "Árvores", imagemUrl: arvoreImg, rotulo: "🌳 ÁRVORES" },
            { nome: "Flores", imagemUrl: florImg, rotulo: "🌼 FLORES" },
            { nome: "Plantinhas", imagemUrl: plantaImg, rotulo: "🌱 PLANTINHAS" },
          ],
        },
        {
          label: "Na ÁGUA e SOLO eu quero…",
          modo: "imagem",
          opcoes: [
            { nome: "Lago", imagemUrl: lagoImg, rotulo: "💧 LAGO" },
            { nome: "Pedras", imagemUrl: pedraImg, rotulo: "🪨 PEDRAS" },
            { nome: "Chuva", imagemUrl: chuvaImg, rotulo: "🌧️ CHUVINHA" },
          ],
        },
        {
          label: "Que ANIMAIS visitam meu jardim…",
          modo: "imagem",
          opcoes: [
            { nome: "Borboletas", imagemUrl: borboletaImg, rotulo: "🦋 BORBOLETAS" },
            { nome: "Pássaros", imagemUrl: passaroImg, rotulo: "🐦 PÁSSAROS" },
            { nome: "Peixinhos", imagemUrl: peixeImg, rotulo: "🐟 PEIXINHOS" },
          ],
        },
      ],
      acerto: "🌼 Jardim Encantado salvo! O Brilha guardou no seu perfil.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Água serve pra…",
        opcoes: ["Beber", "Voar", "Escrever"],
        correta: 0,
        explicacao: "Todos precisam de água.",
        visual: { tipo: "itens", imagemUrl: cristalAguaImg, quantidade: 1, rotulo: "💧" },
      },
      {
        pergunta: "Planta é da…",
        opcoes: ["Natureza", "Construção", "Fábrica"],
        correta: 0,
        explicacao: "Nasce sozinha.",
        visual: { tipo: "itens", imagemUrl: cristalPlantaImg, quantidade: 1, rotulo: "🌱" },
      },
      {
        pergunta: "Sem AR a gente…",
        opcoes: ["Não respira", "Corre mais", "Fica alegre"],
        correta: 0,
        explicacao: "Ar é essencial.",
        visual: { tipo: "itens", imagemUrl: cristalArImg, quantidade: 1, rotulo: "🌬️" },
      },
    ],
    medio: [
      {
        pergunta: "As raízes das plantas ficam no…",
        opcoes: ["Solo", "Ar", "Céu"],
        correta: 0,
        explicacao: "Solo segura a planta.",
        visual: { tipo: "itens", imagemUrl: cristalSoloImg, quantidade: 1, rotulo: "🪨" },
      },
      {
        pergunta: "Peixinho vive no…",
        opcoes: ["Rio", "Deserto", "Prédio"],
        correta: 0,
        explicacao: "Peixe precisa de água.",
        visual: { tipo: "itens", imagemUrl: peixeImg, quantidade: 1, rotulo: "🐟" },
      },
      {
        pergunta: "Plantar árvore é atitude…",
        opcoes: ["Boa pra natureza", "Ruim", "Sem efeito"],
        correta: 0,
        explicacao: "Árvore ajuda o planeta.",
        visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
      },
    ],
    dificil: [
      {
        pergunta: "Jogar lixo no rio…",
        opcoes: ["Polui a água", "Ajuda os peixes", "Limpa o rio"],
        correta: 0,
        explicacao: "Poluição machuca a vida.",
        visual: { tipo: "itens", imagemUrl: garrafaImg, quantidade: 1, rotulo: "❌" },
      },
      {
        pergunta: "Mesmo na cidade, a natureza…",
        opcoes: ["Continua importante", "Não serve", "Some"],
        correta: 0,
        explicacao: "Árvores e água são essenciais em todo lugar.",
        visual: { tipo: "itens", imagemUrl: predioImg, quantidade: 1, rotulo: "🏙️" },
      },
      {
        pergunta: "Cuidar da natureza é dever de…",
        opcoes: ["Todos", "Só das crianças", "De ninguém"],
        correta: 0,
        explicacao: "Responsabilidade coletiva.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🤝" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Caça Aos Cristais",
    objetivo:
      "Encontre os 4 CRISTAIS DA NATUREZA em 90 segundos ✨! Cuidado com os distratores — ilumine o Jardim Encantado!",
    tempoSegundos: 90,
    elementos: [
      { nome: "Cristal da Água", imagemUrl: cristalAguaImg, rotulo: "💧" },
      { nome: "Cristal da Planta", imagemUrl: cristalPlantaImg, rotulo: "🌱" },
      { nome: "Cristal do Solo", imagemUrl: cristalSoloImg, rotulo: "🪨" },
      { nome: "Cristal do Ar", imagemUrl: cristalArImg, rotulo: "🌬️" },
    ],
    distratores: [
      { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠" },
      { nome: "Carro", imagemUrl: carroImg, rotulo: "🚗" },
      { nome: "Prédio", imagemUrl: predioImg, rotulo: "🏢" },
      { nome: "Garrafa", imagemUrl: garrafaImg, rotulo: "🥤" },
      { nome: "Pedra", imagemUrl: pedraImg, rotulo: "🪨" },
      { nome: "Lixeira", imagemUrl: lixeiraImg, rotulo: "🗑️" },
    ],
    acerto: "💎 4 cristais coletados! O Jardim Encantado voltou a brilhar!",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Expedição Da Natureza",
    instrucao:
      "Com um familiar, façam uma pequena CAMINHADA perto de casa procurando elementos da natureza. Registrem juntos as descobertas.",
    registros: [
      { label: "2 PLANTAS que vocês encontraram", tipo: "texto" },
      { label: "1 fonte de ÁGUA (rio, lago, torneira, chuva)", tipo: "texto" },
      { label: "1 ATITUDE que a família vai adotar pra cuidar da natureza", tipo: "texto" },
    ],
    permitirFoto: true,
  },

  proximaHabilidade: { codigo: "EF01GE06" },
};

export default aula;
