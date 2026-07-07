import type { Aula } from "../types";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import escolaImg from "@/assets/neuro-treino/objetos/escola.png";
import pracaImg from "@/assets/neuro-treino/objetos/praca.png";
import mercadoImg from "@/assets/neuro-treino/objetos/mercado.png";
import postoImg from "@/assets/neuro-treino/objetos/posto-saude.png";
import onibusImg from "@/assets/neuro-treino/objetos/ponto-onibus.png";
import mapaImg from "@/assets/neuro-treino/objetos/mapa.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import bussolaImg from "@/assets/neuro-treino/objetos/bussola.png";
import padariaImg from "@/assets/neuro-treino/objetos/padaria.png";
import setaCima from "@/assets/neuro-treino/objetos/seta-cima.png";
import setaBaixo from "@/assets/neuro-treino/objetos/seta-baixo.png";
import setaEsq from "@/assets/neuro-treino/objetos/seta-esquerda.png";
import setaDir from "@/assets/neuro-treino/objetos/seta-direita.png";

/**
 * EF01GE02 — Geografia · 1º Ano
 * Missão: "Os Caminhos da Vila Encantada".
 * Descrever atividades que grupos sociais realizam nos lugares,
 * identificando caminhos, percursos e pontos de referência.
 */
const aula: Aula = {
  codigo: "EF01GE02",
  ano: "1º Ano",
  disciplina: "Geografia",
  titulo: "Os Caminhos da Vila Encantada",

  narrativa: {
    titulo: "A Bússola Mágica do Brilha",
    contexto:
      "Brilha precisa entregar uma MENSAGEM 📜 importante pra Coruja Sábia, mas existem VÁRIOS caminhos pela Vila Encantada!",
    problema:
      "A Coruja explicou: 'Alguns caminhos são CURTOS, outros LONGOS. Precisamos observar as REFERÊNCIAS pra chegar em segurança!' Cada caminho certo acende uma parte da BÚSSOLA 🧭.",
    convite: "Bora aprender a se localizar como um explorador de verdade?",
  },

  conhecimentosPrevios: [
    "Reconhecer a própria casa e a escola.",
    "Distinguir perto e longe em situações simples.",
  ],

  missao:
    "Identificar caminhos e pontos de referência do cotidiano, desenvolvendo a noção de localização espacial.",

  objetivos: [
    "Identificar caminhos do cotidiano.",
    "Reconhecer pontos de referência.",
    "Compreender noções de perto e longe.",
    "Desenvolver orientação espacial básica.",
    "Observar percursos entre diferentes lugares.",
  ],

  motivacao:
    "Um bom explorador OLHA em volta antes de escolher o caminho 🧭.",

  explicacao:
    "🗺️ CAMINHO: o trajeto que a gente faz pra ir de um lugar até outro.\n📍 PONTO DE REFERÊNCIA: coisa fácil de enxergar que ajuda a lembrar do caminho (árvore, ponto de ônibus, mercado…).\n📏 PERTO x LONGE: perto = pouquinho pra andar. Longe = bastante pra andar.\n🧭 DIREÇÕES: pra CIMA, pra BAIXO, pra ESQUERDA, pra DIREITA.",

  explicacoesNiveis: {
    nivel1: "Todo lugar tem um caminho que leva até ele.",
    nivel2: "Pontos de referência ajudam a lembrar o caminho.",
    nivel3: "Alguns lugares ficam perto, outros ficam longe.",
    nivel4: "Explorar com atenção evita a gente se perder.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha sai da CASA 🏠 e quer chegar na ESCOLA 🏫. No caminho passa por uma ÁRVORE 🌳 grande e por um PONTO DE ÔNIBUS 🚏. O que são a árvore e o ponto de ônibus?",
    passos: [
      "A árvore e o ponto são coisas fáceis de enxergar no caminho.",
      "Servem pra Brilha lembrar por onde passar.",
      "Isso se chama PONTO DE REFERÊNCIA 📍.",
    ],
    resposta: "🌳🚏 São pontos de referência — ajudam a se localizar!",
  },

  atividadeGuiada: {
    enunciado: "Qual desses é um bom PONTO DE REFERÊNCIA no caminho?",
    resposta: "🌳 A árvore grande!",
    explicacao:
      "Uma árvore grande é fácil de ver de longe — dá pra usar como referência pra achar o caminho.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual serve como REFERÊNCIA no caminho?",
      opcoes: [
        { nome: "arvore", imagemUrl: arvoreImg },
        { nome: "coruja", imagemUrl: corujaImg },
        { nome: "seta", imagemUrl: setaCima },
      ],
      respostaCerta: "arvore",
    },
  },

  exercicios: [
    {
      enunciado: "Se a praça está pertinho da casa, ela está PERTO ou LONGE?",
      resposta: "🌳 PERTO — dá pra ir andando rapidinho.",
      dica: "Pertinho = pouco tempo pra chegar.",
    },
    {
      enunciado: "Pra virar pra ESQUERDA usamos qual seta?",
      resposta: "⬅️ A seta pra esquerda.",
      dica: "Seta apontando pro lado da mão esquerda.",
    },
    {
      enunciado:
        "Pra Brilha achar a escola, ele deve OBSERVAR o caminho ou fechar os olhos?",
      resposta: "👀 OBSERVAR — assim vê as referências.",
      dica: "Explorador atento não se perde.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: prove que você conhece os caminhos!",
    resposta: "Um bom explorador usa referências pra se localizar.",
    visual: {
      perguntas: [
        {
          pergunta: "O que é um CAMINHO?",
          opcoes: ["Ligação entre um lugar e outro", "Só um brinquedo", "Só uma cor"],
          correta: 0,
          explicacao: "Caminho liga um ponto a outro.",
          visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "🗺️" },
        },
        {
          pergunta: "Uma ÁRVORE grande pode ser referência?",
          opcoes: ["Sim!", "Não", "Só à noite"],
          correta: 0,
          explicacao: "Referência = fácil de ver.",
          visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
        },
        {
          pergunta: "Se a padaria está a uma quadra, ela está…",
          opcoes: ["PERTO", "LONGE", "Invisível"],
          correta: 0,
          explicacao: "Uma quadra é pouco caminho.",
          visual: { tipo: "itens", imagemUrl: padariaImg, quantidade: 1, rotulo: "🥖" },
        },
        {
          pergunta: "⬆️ significa ir pra…",
          opcoes: ["CIMA / em frente", "Baixo", "Trás"],
          correta: 0,
          explicacao: "Seta pra cima = seguir em frente.",
          visual: { tipo: "itens", imagemUrl: setaCima, quantidade: 1, rotulo: "⬆️" },
        },
        {
          pergunta: "Pra não se perder, o explorador…",
          opcoes: ["Observa referências", "Fecha os olhos", "Anda sem olhar"],
          correta: 0,
          explicacao: "Olhar em volta é a chave.",
          visual: { tipo: "itens", imagemUrl: bussolaImg, quantidade: 1, rotulo: "🧭" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🗺️ CAMINHO: liga um lugar a outro.",
      "📍 REFERÊNCIA: ajuda a lembrar por onde passar.",
      "📏 PERTO/LONGE: distância entre dois lugares.",
      "🧭 DIREÇÕES: cima, baixo, esquerda e direita.",
      "👀 Explorador observa e não se perde.",
    ],
    dica: "Faça um passeio com a família observando as referências do bairro.",
  },

  quiz: [
    {
      pergunta: "Um caminho liga:",
      opcoes: ["Um lugar a outro", "Apenas brinquedos", "Apenas animais"],
      correta: 0,
      explicacao: "Caminho conecta dois lugares.",
      visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "🗺️" },
    },
    {
      pergunta: "A escola pode ser um ponto de referência?",
      opcoes: ["Sim", "Não", "Apenas às vezes"],
      correta: 0,
      explicacao: "É grande e fácil de identificar.",
      visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
    },
    {
      pergunta: "Para chegar a um lugar precisamos:",
      opcoes: ["Observar o percurso", "Fechar os olhos", "Andar sem direção"],
      correta: 0,
      explicacao: "Observar ajuda a se localizar.",
      visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "👀" },
    },
    {
      pergunta: "Uma árvore pode servir como referência?",
      opcoes: ["Sim", "Não", "Apenas à noite"],
      correta: 0,
      explicacao: "É fácil de enxergar de longe.",
      visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
    },
    {
      pergunta: "Hoje aprendemos sobre:",
      opcoes: ["Caminhos e localização", "Apenas números", "Apenas letras"],
      correta: 0,
      explicacao: "Percursos, referências e direções.",
      visual: { tipo: "itens", imagemUrl: bussolaImg, quantidade: 1, rotulo: "🧭" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Explorador dos Caminhos! 🧭 Item desbloqueado: Bússola Dourada do Brilha.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os PONTOS DE REFERÊNCIA ajudam as pessoas a encontrar caminhos e chegar aos lugares desejados. Sem eles, seria muito mais fácil se perder!",
  },

  interativas: [
    // APRENDENDO — lupa: apresentar o mapa da Vila
    {
      tipo: "lupa",
      titulo: "O Mapa Da Vila Encantada",
      instrucao: "Toque em cada lugar do mapa pra ouvir a explicação de Brilha.",
      itens: [
        {
          nome: "Casa",
          imagemUrl: casaImg,
          rotulo: "🏠 CASA",
          descoberta: "Ponto de partida do Brilha. Todo caminho começa em casa.",
        },
        {
          nome: "Escola",
          imagemUrl: escolaImg,
          rotulo: "🏫 ESCOLA",
          descoberta: "Todo dia muitas crianças fazem o caminho da casa até a escola.",
        },
        {
          nome: "Praça",
          imagemUrl: pracaImg,
          rotulo: "🌳 PRAÇA",
          descoberta: "Lugar de brincar. Fica pertinho da casa do Brilha.",
        },
        {
          nome: "Mercado",
          imagemUrl: mercadoImg,
          rotulo: "🛒 MERCADO",
          descoberta: "Ótima referência: é grande e fácil de ver de longe.",
        },
        {
          nome: "Posto de saúde",
          imagemUrl: postoImg,
          rotulo: "🏥 POSTO",
          descoberta: "Fica mais LONGE da casa. É preciso andar mais pra chegar.",
        },
      ],
    },

    // FASE 1 — Qual Caminho? (escolherFigura entre 2 percursos)
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Qual Caminho?",
      instrucao: "Brilha quer chegar na ESCOLA. Qual caminho leva até ela?",
      pergunta: "Qual caminho termina na ESCOLA 🏫?",
      opcoes: [
        { nome: "Caminho da escola", imagemUrl: escolaImg, rotulo: "🏠 ➡️ 🌳 ➡️ 🏫" },
        { nome: "Caminho do mercado", imagemUrl: mercadoImg, rotulo: "🏠 ➡️ 🚏 ➡️ 🛒" },
        { nome: "Caminho do posto", imagemUrl: postoImg, rotulo: "🏠 ➡️ 🚏 ➡️ 🏥" },
      ],
      correta: 0,
      acerto: "🏫 Isso! Esse caminho termina na ESCOLA.",
      erro: "Olhe pro final do caminho — ele precisa acabar na ESCOLA 🏫.",
    },

    // FASE 2 — Perto ou Longe? (ligar lugar → distância)
    {
      tipo: "ligar",
      titulo: "Fase 2 · Perto Ou Longe?",
      instrucao:
        "Cada lugar do bairro fica a uma distância da CASA 🏠. Ligue cada um em PERTO ou LONGE.",
      pares: [
        { a: "🌳 PRAÇA (na esquina)", b: "📏 PERTO", aImagem: pracaImg, bImagem: setaEsq },
        { a: "🥖 PADARIA (1 quadra)", b: "📏 PERTO", aImagem: padariaImg, bImagem: setaEsq },
        { a: "🏥 POSTO (bem longe)", b: "📏 LONGE", aImagem: postoImg, bImagem: setaDir },
        { a: "🛒 MERCADO (várias quadras)", b: "📏 LONGE", aImagem: mercadoImg, bImagem: setaDir },
      ],
    },

    // FASE 3 — Pontos de Referência (selecionarMultiplos)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 3 · Pontos De Referência",
      instrucao:
        "Brilha procura a escola. Marque TODOS os itens que servem como PONTO DE REFERÊNCIA no caminho.",
      criterio: "Serve como ponto de referência 📍",
      opcoes: [
        { nome: "Árvore grande", imagemUrl: arvoreImg, rotulo: "🌳 ÁRVORE", correto: true },
        { nome: "Ponto de ônibus", imagemUrl: onibusImg, rotulo: "🚏 PONTO DE ÔNIBUS", correto: true },
        { nome: "Mercado", imagemUrl: mercadoImg, rotulo: "🛒 MERCADO", correto: true },
        { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA", correto: true },
        { nome: "Coruja voando", imagemUrl: corujaImg, rotulo: "🦉 CORUJA (voa)", correto: false },
      ],
      acerto: "📍 Perfeito! Tudo isso é fácil de ver e ajuda a se localizar.",
      erro: "A coruja voa pra qualquer lugar — não fica parada. Escolha só os lugares FIXOS do caminho.",
    },

    // FASE 4 — Monte o Percurso (arrastar setas → alvos ordenados)
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Monte O Percurso",
      instrucao:
        "Leve Brilha da CASA 🏠 até a PRAÇA 🌳 arrastando cada seta pra sua etapa: 1º, 2º, 3º e 4º passo.",
      pares: [
        { item: "Suba a rua ⬆️", alvo: "1º passo", itemImagem: setaCima },
        { item: "Vire à direita ➡️", alvo: "2º passo", itemImagem: setaDir },
        { item: "Desça a ladeira ⬇️", alvo: "3º passo", itemImagem: setaBaixo },
        { item: "Vire à esquerda ⬅️", alvo: "4º passo", itemImagem: setaEsq },
      ],
      alvosVisuais: [
        { nome: "1º passo", cor: "#F59E0B", imagemUrl: casaImg, capacidade: 1 },
        { nome: "2º passo", cor: "#10B981", imagemUrl: arvoreImg, capacidade: 1 },
        { nome: "3º passo", cor: "#0EA5E9", imagemUrl: onibusImg, capacidade: 1 },
        { nome: "4º passo", cor: "#EF4444", imagemUrl: pracaImg, capacidade: 1 },
      ],
    },

    // FASE 5 — Meu Caminho (album multi-select)
    {
      tipo: "album",
      titulo: "Fase 5 · Meu Caminho",
      instrucao:
        "Monte o SEU caminho da casa até a escola! Todas as opções ficam liberadas — pode marcar MAIS de UMA em cada pergunta.",
      escolhas: [
        {
          label: "De onde você SAI?",
          modo: "imagem",
          opcoes: [
            { nome: "Minha casa", imagemUrl: casaImg, rotulo: "🏠 CASA" },
            { nome: "Casa dos avós", imagemUrl: casaImg, rotulo: "👵 CASA DOS AVÓS" },
          ],
        },
        {
          label: "Que REFERÊNCIAS você vê no caminho?",
          modo: "imagem",
          opcoes: [
            { nome: "Árvore", imagemUrl: arvoreImg, rotulo: "🌳 ÁRVORE" },
            { nome: "Padaria", imagemUrl: padariaImg, rotulo: "🥖 PADARIA" },
            { nome: "Mercado", imagemUrl: mercadoImg, rotulo: "🛒 MERCADO" },
            { nome: "Ponto de ônibus", imagemUrl: onibusImg, rotulo: "🚏 ÔNIBUS" },
            { nome: "Praça", imagemUrl: pracaImg, rotulo: "🌳 PRAÇA" },
          ],
        },
        {
          label: "Onde você CHEGA?",
          modo: "imagem",
          opcoes: [
            { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA" },
            { nome: "Posto de saúde", imagemUrl: postoImg, rotulo: "🏥 POSTO" },
          ],
        },
      ],
      acerto: "🧭 Caminho salvo! O Brilha guardou o SEU percurso no perfil.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Um caminho liga o quê?",
        opcoes: ["Um lugar a outro", "Só um brinquedo", "Nada"],
        correta: 0,
        explicacao: "Caminho conecta dois lugares.",
        visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "🗺️" },
      },
      {
        pergunta: "Uma árvore grande pode ser referência?",
        opcoes: ["Sim", "Não", "Só de noite"],
        correta: 0,
        explicacao: "É fácil de enxergar.",
        visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
      },
      {
        pergunta: "A praça na esquina está…",
        opcoes: ["PERTO", "LONGE", "Escondida"],
        correta: 0,
        explicacao: "Esquina = pouquinho pra andar.",
        visual: { tipo: "itens", imagemUrl: pracaImg, quantidade: 1, rotulo: "🌳" },
      },
    ],
    medio: [
      {
        pergunta: "⬆️ significa ir pra…",
        opcoes: ["CIMA / em frente", "Baixo", "Voltar"],
        correta: 0,
        explicacao: "Seta pra cima = em frente.",
        visual: { tipo: "itens", imagemUrl: setaCima, quantidade: 1, rotulo: "⬆️" },
      },
      {
        pergunta: "Qual é uma boa referência no bairro?",
        opcoes: ["O mercado grande", "Uma nuvem no céu", "Uma folha caindo"],
        correta: 0,
        explicacao: "Referência tem que ficar parada.",
        visual: { tipo: "itens", imagemUrl: mercadoImg, quantidade: 1, rotulo: "🛒" },
      },
      {
        pergunta: "Pra achar a escola o Brilha deve…",
        opcoes: ["Observar as referências", "Andar sem olhar", "Fechar os olhos"],
        correta: 0,
        explicacao: "Olhar em volta ajuda.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "👀" },
      },
    ],
    dificil: [
      {
        pergunta: "O posto de saúde fica LONGE. Pra chegar Brilha vai…",
        opcoes: ["Andar mais tempo", "Chegar em 1 passo", "Não sair de casa"],
        correta: 0,
        explicacao: "Longe = mais caminho.",
        visual: { tipo: "itens", imagemUrl: postoImg, quantidade: 1, rotulo: "🏥" },
      },
      {
        pergunta: "Se erramos uma direção, o que fazer?",
        opcoes: ["Voltar e observar as referências", "Continuar errado", "Correr sem olhar"],
        correta: 0,
        explicacao: "Explorador corrige a rota.",
        visual: { tipo: "itens", imagemUrl: bussolaImg, quantidade: 1, rotulo: "🧭" },
      },
      {
        pergunta: "Aprender os caminhos ajuda a gente a…",
        opcoes: ["Se localizar com segurança", "Se perder mais", "Ficar parado"],
        correta: 0,
        explicacao: "Localização = autonomia.",
        visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "🗺️" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Bússola Mágica",
    objetivo:
      "Missão: Brilha recebeu comandos! Toque em TODAS as setas de direção em 90 segundos ⭐. Cada acerto faz a bússola brilhar 🧭.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Seta pra cima", imagemUrl: setaCima, rotulo: "⬆️ CIMA" },
      { nome: "Seta pra baixo", imagemUrl: setaBaixo, rotulo: "⬇️ BAIXO" },
      { nome: "Seta pra esquerda", imagemUrl: setaEsq, rotulo: "⬅️ ESQUERDA" },
      { nome: "Seta pra direita", imagemUrl: setaDir, rotulo: "➡️ DIREITA" },
      { nome: "Bússola", imagemUrl: bussolaImg, rotulo: "🧭 BÚSSOLA" },
    ],
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Um Percurso De Verdade",
    passos: [
      "Escolham um caminho CURTO: casa → padaria, casa → praça ou casa → escola.",
      "Façam o percurso juntos e observem: quais lugares vocês passaram?",
      "Anotem quais REFERÊNCIAS 📍 apareceram e qual foi o destino final.",
    ],
    dica: "Peça pra criança apontar as referências enquanto vocês caminham.",
  },

  recompensas: {
    xp: 180,
    moedas: 100,
    medalha: "Explorador dos Caminhos",
    itemDesbloqueado: "🧭 Bússola Dourada do Brilha",
  },

  proximaHabilidade: "EF01GE03",
};

export default aula;
