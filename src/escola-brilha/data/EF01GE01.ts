import type { Aula } from "../types";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import escolaImg from "@/assets/neuro-treino/objetos/escola.png";
import pracaImg from "@/assets/neuro-treino/objetos/praca.png";
import mercadoImg from "@/assets/neuro-treino/objetos/mercado.png";
import postoImg from "@/assets/neuro-treino/objetos/posto-saude.png";
import onibusImg from "@/assets/neuro-treino/objetos/ponto-onibus.png";
import mapaImg from "@/assets/neuro-treino/objetos/mapa.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import familiaImg from "@/assets/neuro-treino/objetos/familia-tradicional.png";

/**
 * EF01GE01 — Geografia · 1º Ano
 * Missão: "Exploradores do Meu Lugar".
 * Descrever características observadas dos lugares de vivência
 * (moradia, escola etc.) e identificar semelhanças e diferenças.
 */
const aula: Aula = {
  codigo: "EF01GE01",
  ano: "1º Ano",
  disciplina: "Geografia",
  titulo: "Exploradores do Meu Lugar",

  narrativa: {
    titulo: "O Mapa da Vila das Descobertas",
    contexto:
      "Brilha recebeu um MAPA MÁGICO 🗺️ da Vila das Descobertas, mas ele está incompleto! Faltam vários lugares importantes da comunidade.",
    problema:
      "A Coruja Sábia explicou: 'Conhecer os lugares onde vivemos nos ajuda a entender o mundo ao nosso redor. Vamos visitar CASA, ESCOLA, PRAÇA, MERCADO e POSTO DE SAÚDE pra reconstruir o mapa!'",
    convite: "Bora explorar cada cantinho da nossa comunidade?",
  },

  conhecimentosPrevios: [
    "Reconhecer a própria casa e a escola.",
    "Saber que existem lugares diferentes na rua.",
  ],

  missao:
    "Observar e reconhecer os lugares do cotidiano, entendendo a função de cada espaço da comunidade.",

  objetivos: [
    "Identificar lugares presentes no cotidiano.",
    "Reconhecer diferentes funções dos espaços.",
    "Observar características do lugar onde vive.",
    "Desenvolver noção de localização e pertencimento.",
    "Valorizar os espaços da comunidade.",
  ],

  motivacao:
    "Cada lugar da comunidade tem uma missão especial no dia a dia! 🗺️",

  explicacao:
    "🏠 CASA: lugar onde a gente mora, dorme e vive com a família.\n🏫 ESCOLA: lugar onde a gente aprende e faz amigos.\n🌳 PRAÇA: lugar pra brincar, passear e encontrar pessoas.\n🛒 MERCADO: lugar pra comprar alimentos e produtos.\n🏥 POSTO DE SAÚDE: lugar que cuida da nossa saúde.\n🚏 PONTO DE ÔNIBUS: lugar de esperar o transporte.",

  explicacoesNiveis: {
    nivel1: "Cada lugar tem um nome e uma função.",
    nivel2: "Casa, escola, mercado e posto fazem parte da comunidade.",
    nivel3: "A gente percorre vários lugares no caminho de casa pra escola.",
    nivel4: "Observar o entorno ajuda a se localizar melhor.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha precisa comprar frutas pra fazer uma vitamina. Pra qual lugar ele deve ir?",
    passos: [
      "Frutas e alimentos são vendidos em lojas.",
      "O lugar que vende alimentos é o MERCADO.",
      "Brilha vai ao mercado 🛒.",
    ],
    resposta: "🛒 Mercado — é onde compramos alimentos!",
  },

  atividadeGuiada: {
    enunciado: "Onde a gente MORA?",
    resposta: "🏠 Na CASA!",
    explicacao:
      "A casa é o lugar onde a família vive, dorme e passa tempo juntos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Onde você mora?",
      opcoes: [
        { nome: "casa", imagemUrl: casaImg },
        { nome: "escola", imagemUrl: escolaImg },
        { nome: "praca", imagemUrl: pracaImg },
      ],
      respostaCerta: "casa",
    },
  },

  exercicios: [
    {
      enunciado: "Onde a gente APRENDE a ler e escrever?",
      resposta: "🏫 Na ESCOLA — com professores e amigos.",
      dica: "Tem sala de aula, quadro e professora.",
    },
    {
      enunciado: "Onde podemos BRINCAR e passear ao ar livre?",
      resposta: "🌳 Na PRAÇA — com balanço, escorrega e árvores.",
      dica: "Tem bancos, árvores e brinquedos.",
    },
    {
      enunciado: "Onde cuidamos da nossa SAÚDE?",
      resposta: "🏥 No POSTO DE SAÚDE — com médicos e enfermeiros.",
      dica: "Tem médico e uma cruz vermelha.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra a função de cada lugar!",
    resposta: "Cada lugar da comunidade tem seu papel.",
    visual: {
      perguntas: [
        {
          pergunta: "Onde a gente MORA?",
          opcoes: ["Casa", "Mercado", "Escola"],
          correta: 0,
          explicacao: "A casa é o lugar da família.",
          visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" },
        },
        {
          pergunta: "Onde a gente ESTUDA?",
          opcoes: ["Escola", "Praça", "Mercado"],
          correta: 0,
          explicacao: "A escola é onde a gente aprende.",
          visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
        },
        {
          pergunta: "Onde COMPRAMOS comida?",
          opcoes: ["Mercado", "Posto de saúde", "Praça"],
          correta: 0,
          explicacao: "O mercado vende alimentos.",
          visual: { tipo: "itens", imagemUrl: mercadoImg, quantidade: 1, rotulo: "🛒" },
        },
        {
          pergunta: "Onde CUIDAMOS da saúde?",
          opcoes: ["Posto de saúde", "Praça", "Mercado"],
          correta: 0,
          explicacao: "No posto de saúde tem médico.",
          visual: { tipo: "itens", imagemUrl: postoImg, quantidade: 1, rotulo: "🏥" },
        },
        {
          pergunta: "Onde ESPERAMOS o ônibus?",
          opcoes: ["No ponto de ônibus", "Na escola", "Em casa"],
          correta: 0,
          explicacao: "O ponto de ônibus é feito pra isso.",
          visual: { tipo: "itens", imagemUrl: onibusImg, quantidade: 1, rotulo: "🚏" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🏠 CASA: onde moramos.",
      "🏫 ESCOLA: onde aprendemos.",
      "🌳 PRAÇA: onde brincamos.",
      "🛒 MERCADO: onde compramos alimentos.",
      "🏥 POSTO DE SAÚDE: onde cuidam da saúde.",
    ],
    dica: "Passeie com a família e observe cada lugar do bairro.",
  },

  quiz: [
    {
      pergunta: "Onde moramos?",
      opcoes: ["Na casa", "Na escola", "No mercado"],
      correta: 0,
      explicacao: "A casa é o lugar da família.",
      visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" },
    },
    {
      pergunta: "Onde aprendemos?",
      opcoes: ["Na escola", "Na praça", "No mercado"],
      correta: 0,
      explicacao: "A escola é o lugar de estudar.",
      visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
    },
    {
      pergunta: "Onde podemos brincar?",
      opcoes: ["Na praça", "No hospital", "No mercado"],
      correta: 0,
      explicacao: "A praça tem espaço pra brincar.",
      visual: { tipo: "itens", imagemUrl: pracaImg, quantidade: 1, rotulo: "🌳" },
    },
    {
      pergunta: "O mercado serve para:",
      opcoes: ["Comprar alimentos e produtos", "Estudar", "Dormir"],
      correta: 0,
      explicacao: "Vamos ao mercado comprar comida.",
      visual: { tipo: "itens", imagemUrl: mercadoImg, quantidade: 1, rotulo: "🛒" },
    },
    {
      pergunta: "Hoje aprendemos sobre:",
      opcoes: ["Os lugares do nosso cotidiano", "Apenas animais", "Apenas brinquedos"],
      correta: 0,
      explicacao: "Conhecemos vários lugares da comunidade.",
      visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "🗺️" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Explorador da Comunidade! 🗺️ Item desbloqueado: Mapa da Vila do Brilha.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Cada lugar da comunidade tem uma FUNÇÃO importante e ajuda as pessoas todos os dias. Sem o mercado, não teríamos onde comprar comida; sem o posto, não teríamos onde cuidar da saúde!",
  },

  interativas: [
    // APRENDENDO — lupa com lugares
    {
      tipo: "lupa",
      titulo: "Passeio Pela Comunidade",
      instrucao: "Toque em cada lugar pra descobrir pra que ele serve.",
      itens: [
        {
          nome: "Casa",
          imagemUrl: casaImg,
          rotulo: "🏠 CASA",
          descoberta: "É onde a gente mora, dorme e passa tempo com a família.",
        },
        {
          nome: "Escola",
          imagemUrl: escolaImg,
          rotulo: "🏫 ESCOLA",
          descoberta: "É onde aprendemos, fazemos amigos e vivemos novas experiências.",
        },
        {
          nome: "Praça",
          imagemUrl: pracaImg,
          rotulo: "🌳 PRAÇA",
          descoberta: "Um espaço pra brincar, passear e encontrar pessoas.",
        },
        {
          nome: "Mercado",
          imagemUrl: mercadoImg,
          rotulo: "🛒 MERCADO",
          descoberta: "Lugar pra comprar alimentos e outros produtos.",
        },
        {
          nome: "Posto de saúde",
          imagemUrl: postoImg,
          rotulo: "🏥 POSTO DE SAÚDE",
          descoberta: "Cuida da saúde das pessoas com médicos e enfermeiros.",
        },
        {
          nome: "Ponto de ônibus",
          imagemUrl: onibusImg,
          rotulo: "🚏 PONTO DE ÔNIBUS",
          descoberta: "Lugar pra esperar o ônibus com segurança.",
        },
      ],
    },

    // FASE 1 — Identifique o Lugar (escolherFigura)
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Identifique O Lugar",
      instrucao: "Toque no lugar onde você MORA.",
      pergunta: "Onde você mora?",
      opcoes: [
        { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 CASA" },
        { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA" },
        { nome: "Praça", imagemUrl: pracaImg, rotulo: "🌳 PRAÇA" },
      ],
      correta: 0,
      acerto: "🏠 Isso! A casa é onde moramos.",
      erro: "Escola é pra estudar e praça é pra brincar. A gente MORA na CASA.",
    },

    // FASE 2 — Ligar lugar → função
    {
      tipo: "ligar",
      titulo: "Fase 2 · Pra Que Serve Cada Lugar?",
      instrucao: "Ligue cada LUGAR à sua FUNÇÃO.",
      pares: [
        { a: "🏫 ESCOLA", b: "📚 APRENDER", aImagem: escolaImg, bImagem: corujaImg },
        { a: "🛒 MERCADO", b: "🥕 COMPRAR ALIMENTOS", aImagem: mercadoImg, bImagem: mercadoImg },
        { a: "🏥 POSTO", b: "❤️ CUIDAR DA SAÚDE", aImagem: postoImg, bImagem: postoImg },
        { a: "🌳 PRAÇA", b: "🎈 BRINCAR", aImagem: pracaImg, bImagem: pracaImg },
      ],
    },

    // FASE 3 — Selecionar múltiplos: o que existe no caminho
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 3 · O Que Tem No Meu Caminho?",
      instrucao:
        "Brilha vai da CASA 🏠 até a ESCOLA 🏫. Marque TUDO que ele pode encontrar no caminho.",
      criterio: "Existe no caminho pela comunidade 🚶",
      opcoes: [
        { nome: "Ponto de ônibus", imagemUrl: onibusImg, rotulo: "🚏 PONTO DE ÔNIBUS", correto: true },
        { nome: "Praça", imagemUrl: pracaImg, rotulo: "🌳 PRAÇA", correto: true },
        { nome: "Mercado", imagemUrl: mercadoImg, rotulo: "🛒 MERCADO", correto: true },
        { nome: "Posto", imagemUrl: postoImg, rotulo: "🏥 POSTO DE SAÚDE", correto: true },
        { nome: "Estrela", imagemUrl: estrelaImg, rotulo: "❌ ESTRELA (fica no céu)", correto: false },
      ],
      acerto: "🚶 Perfeito! Tudo isso a gente encontra andando pelo bairro.",
      erro: "A estrela fica no céu à noite, não no caminho. Escolha só os LUGARES da comunidade.",
    },

    // FASE 4 — Arrastar: organizando a comunidade (cada construção no lugar certo)
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Organizando A Comunidade",
      instrucao:
        "Arraste cada construção pra sua FUNÇÃO no mapa: 🏠 MORAR, 📚 APRENDER, 🥕 COMPRAR ou ❤️ CUIDAR.",
      pares: [
        { item: "Casa", alvo: "Morar", itemImagem: casaImg },
        { item: "Escola", alvo: "Aprender", itemImagem: escolaImg },
        { item: "Mercado", alvo: "Comprar", itemImagem: mercadoImg },
        { item: "Posto de saúde", alvo: "Cuidar", itemImagem: postoImg },
      ],
      alvosVisuais: [
        { nome: "Morar", cor: "#F59E0B", imagemUrl: casaImg, capacidade: 1 },
        { nome: "Aprender", cor: "#10B981", imagemUrl: escolaImg, capacidade: 1 },
        { nome: "Comprar", cor: "#EF4444", imagemUrl: mercadoImg, capacidade: 1 },
        { nome: "Cuidar", cor: "#0EA5E9", imagemUrl: postoImg, capacidade: 1 },
      ],
    },

    // FASE 5 — Álbum: monte MEU mapa (multi-select em cada pergunta)
    {
      tipo: "album",
      titulo: "Fase 5 · Meu Mapa",
      instrucao:
        "Monte o SEU mapa! Todas as opções ficam liberadas — pode marcar MAIS de UMA em cada pergunta.",
      escolhas: [
        {
          label: "Quem mora com você em casa?",
          modo: "imagem",
          opcoes: [
            { nome: "Família", imagemUrl: familiaImg, rotulo: "👨‍👩‍👧 FAMÍLIA" },
            { nome: "Só a mãe", imagemUrl: familiaImg, rotulo: "👩 MÃE" },
            { nome: "Só o pai", imagemUrl: familiaImg, rotulo: "👨 PAI" },
            { nome: "Avós", imagemUrl: familiaImg, rotulo: "👵 AVÓS" },
          ],
        },
        {
          label: "Qual é a SUA escola?",
          modo: "imagem",
          opcoes: [
            { nome: "Escola do bairro", imagemUrl: escolaImg, rotulo: "🏫 DO BAIRRO" },
            { nome: "Escola grande", imagemUrl: escolaImg, rotulo: "🏫 GRANDE" },
            { nome: "Escola pequena", imagemUrl: escolaImg, rotulo: "🏫 PEQUENA" },
          ],
        },
        {
          label: "Um LUGAR que você gosta de visitar",
          modo: "imagem",
          opcoes: [
            { nome: "Praça", imagemUrl: pracaImg, rotulo: "🌳 PRAÇA" },
            { nome: "Mercado", imagemUrl: mercadoImg, rotulo: "🛒 MERCADO" },
            { nome: "Posto de saúde", imagemUrl: postoImg, rotulo: "🏥 POSTO" },
            { nome: "Ponto de ônibus", imagemUrl: onibusImg, rotulo: "🚏 ÔNIBUS" },
          ],
        },
      ],
      acerto: "🗺️ Mapa completo! O Brilha guardou o SEU mapa no perfil.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Onde a gente mora?",
        opcoes: ["Na casa", "Na escola", "No mercado"],
        correta: 0,
        explicacao: "A casa é onde vive a família.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" },
      },
      {
        pergunta: "Onde a gente aprende?",
        opcoes: ["Na escola", "Na praça", "No mercado"],
        correta: 0,
        explicacao: "A escola é o lugar de estudar.",
        visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
      },
      {
        pergunta: "Onde a gente brinca ao ar livre?",
        opcoes: ["Na praça", "No posto", "No mercado"],
        correta: 0,
        explicacao: "A praça tem espaço pra brincar.",
        visual: { tipo: "itens", imagemUrl: pracaImg, quantidade: 1, rotulo: "🌳" },
      },
    ],
    medio: [
      {
        pergunta: "Onde compramos frutas?",
        opcoes: ["No mercado", "Na escola", "Em casa"],
        correta: 0,
        explicacao: "O mercado vende alimentos.",
        visual: { tipo: "itens", imagemUrl: mercadoImg, quantidade: 1, rotulo: "🛒" },
      },
      {
        pergunta: "Quando estamos doentes, vamos ao:",
        opcoes: ["Posto de saúde", "Mercado", "Praça"],
        correta: 0,
        explicacao: "O posto cuida da saúde.",
        visual: { tipo: "itens", imagemUrl: postoImg, quantidade: 1, rotulo: "🏥" },
      },
      {
        pergunta: "Pra pegar o ônibus, esperamos no:",
        opcoes: ["Ponto de ônibus", "Mercado", "Posto"],
        correta: 0,
        explicacao: "O ponto é feito pra isso.",
        visual: { tipo: "itens", imagemUrl: onibusImg, quantidade: 1, rotulo: "🚏" },
      },
    ],
    dificil: [
      {
        pergunta: "Cada lugar da comunidade tem:",
        opcoes: ["Uma função", "Nenhum uso", "Só um nome"],
        correta: 0,
        explicacao: "Cada um serve pra algo.",
        visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "🗺️" },
      },
      {
        pergunta: "No caminho de casa pra escola pode ter:",
        opcoes: ["Praça, mercado e posto", "Só o mar", "Nada"],
        correta: 0,
        explicacao: "A comunidade tem vários lugares.",
        visual: { tipo: "itens", imagemUrl: pracaImg, quantidade: 1, rotulo: "🌳" },
      },
      {
        pergunta: "Conhecer os lugares ajuda a gente a:",
        opcoes: ["Se localizar", "Ficar perdido", "Esquecer tudo"],
        correta: 0,
        explicacao: "Explorar dá noção do espaço.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🦉" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Caça Aos Lugares",
    objetivo:
      "Missão: encontre TODOS os lugares da comunidade em 90 segundos ⭐. Cada acerto acende uma parte do mapa!",
    tempoSegundos: 90,
    elementos: [
      { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 CASA" },
      { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA" },
      { nome: "Praça", imagemUrl: pracaImg, rotulo: "🌳 PRAÇA" },
      { nome: "Mercado", imagemUrl: mercadoImg, rotulo: "🛒 MERCADO" },
      { nome: "Posto de saúde", imagemUrl: postoImg, rotulo: "🏥 POSTO" },
      { nome: "Ponto de ônibus", imagemUrl: onibusImg, rotulo: "🚏 PONTO" },
    ],
    distratores: [
      { nome: "Estrela", imagemUrl: estrelaImg, rotulo: "❌ ESTRELA (do céu)" },
      { nome: "Coruja", imagemUrl: corujaImg, rotulo: "❌ CORUJA (é animal)" },
    ],
    acerto: "🏆 Mapa iluminado! Você é um EXPLORADOR DA COMUNIDADE.",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Passeio Pelo Bairro",
    instrucao:
      "Faça um pequeno passeio com um familiar pelo bairro. Depois registre aqui o que descobriu!",
    registros: [
      { label: "Três lugares que vocês visitaram", tipo: "texto" },
      { label: "Pra que cada lugar serve", tipo: "texto" },
      { label: "Qual foi o lugar de que você MAIS gostou?", tipo: "texto" },
    ],
    permitirFoto: true,
  },
};

export default aula;
