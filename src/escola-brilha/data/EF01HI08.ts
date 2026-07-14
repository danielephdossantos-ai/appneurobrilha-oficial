import type { Aula } from "../types";
import { url as festaImg } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as presenteImg } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as bandeirolaImg } from "@/assets/neuro-treino/objetos/bandeirola.png.asset.json";
import { url as bandeiraBrasilImg } from "@/assets/neuro-treino/objetos/bandeira-brasil.png.asset.json";
import { url as calendarioImg } from "@/assets/neuro-treino/objetos/calendario.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as familiaImg } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as familiaGrandeImg } from "@/assets/neuro-treino/objetos/familia-grande.png.asset.json";
import { url as criancasImg } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as professoraImg } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as patioImg } from "@/assets/neuro-treino/objetos/patio-escola.png.asset.json";
import { url as salaImg } from "@/assets/neuro-treino/objetos/sala-aula.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";

/**
 * EF01HI08 — História · 1º Ano
 * Missão: "As Festas Que Nos Unem".
 * Reconhecer o significado das comemorações e festas escolares,
 * diferenciando-as das datas festivas comemoradas no âmbito familiar
 * ou da comunidade.
 */
const aula: Aula = {
  codigo: "EF01HI08",
  ano: "1º Ano",
  disciplina: "História",
  titulo: "As Festas Que Nos Unem",

  narrativa: {
    titulo: "O Calendário Das Festas",
    contexto:
      "Brilha encontrou um CALENDÁRIO MÁGICO 📅✨. Cada data brilha de uma cor diferente: festas da ESCOLA 🏫, festas da FAMÍLIA 🎂 e festas da COMUNIDADE 🇧🇷.",
    problema:
      "A Coruja Sábia explicou: 'Cada festa tem um SIGNIFICADO. Umas acontecem na escola, outras em casa, outras no país inteiro. Ajude o Brilha a descobrir onde cada festa mora!'",
    convite: "Bora abrir o calendário e descobrir as festas do ano?",
  },

  conhecimentosPrevios: [
    "Reconhecer festas de aniversário e comemorações.",
    "Saber que existem datas especiais no ano.",
  ],

  missao:
    "Reconhecer festas da escola, da família e da comunidade, entendendo o significado de cada uma.",

  objetivos: [
    "Identificar festas típicas da ESCOLA.",
    "Identificar festas comemoradas em FAMÍLIA.",
    "Reconhecer festas da COMUNIDADE ou do país.",
    "Perceber que cada festa tem um significado.",
    "Valorizar diferentes formas de celebrar.",
  ],

  motivacao:
    "Festa é encontro, é alegria e é história — cada uma nos une de um jeito diferente! 🎉",

  explicacao:
    "🏫 Festas da ESCOLA: festa junina, feira de ciências, formatura, dia do estudante.\n🎂 Festas da FAMÍLIA: aniversários, Dia das Mães, Dia dos Pais, Natal em casa.\n🇧🇷 Festas da COMUNIDADE: Independência (7 de setembro), Carnaval, Festa do bairro.\n📅 Cada festa tem UM MOTIVO e um LUGAR pra acontecer.\n💛 Todas ajudam a gente a se lembrar de algo importante.",

  explicacoesNiveis: {
    nivel1: "Festa é encontro pra celebrar algo especial.",
    nivel2: "Existem festas na escola, em casa e na comunidade.",
    nivel3: "Cada festa tem um motivo pra existir.",
    nivel4: "Comemorar juntos fortalece a memória do grupo.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha viu balões coloridos, bolo e presentes em uma sala com só uma família. Que festa é essa?",
    passos: [
      "Bolo e presentes lembram aniversário.",
      "Só a família está reunida.",
      "É uma festa FAMILIAR.",
    ],
    resposta: "🎂 Aniversário — uma festa da FAMÍLIA!",
  },

  atividadeGuiada: {
    enunciado: "Uma FESTA JUNINA com bandeirinhas no pátio da escola é festa de quem?",
    resposta: "🏫 Da ESCOLA!",
    explicacao:
      "A festa junina na escola reúne alunos, professores e famílias — mas ela é organizada pela escola.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Essa festa acontece na:",
      opcoes: [
        { nome: "escola", imagemUrl: escolaImg },
        { nome: "casa", imagemUrl: casaImg },
        { nome: "familia", imagemUrl: familiaImg },
      ],
      respostaCerta: "escola",
    },
  },

  exercicios: [
    {
      enunciado: "O ANIVERSÁRIO em casa é festa de:",
      resposta: "🎂 FAMÍLIA — comemorada em casa com quem a gente ama.",
      dica: "Acontece dentro de casa, com bolo e presente.",
    },
    {
      enunciado: "A FESTA JUNINA na escola é festa da:",
      resposta: "🏫 ESCOLA — com bandeirinhas, comidas típicas e brincadeiras.",
      dica: "Acontece no pátio, com professores e alunos.",
    },
    {
      enunciado: "O 7 DE SETEMBRO é festa de:",
      resposta: "🇧🇷 COMUNIDADE e do PAÍS — a Independência do Brasil.",
      dica: "É uma data que acontece no país inteiro.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra onde cada festa acontece!",
    resposta: "Cada festa tem seu lugar e significado.",
    visual: {
      perguntas: [
        {
          pergunta: "Aniversário com a família é festa de:",
          opcoes: ["Família", "Escola", "País"],
          correta: 0,
          explicacao: "É uma festa FAMILIAR.",
          visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "🎂" },
        },
        {
          pergunta: "Festa junina no pátio da escola é festa da:",
          opcoes: ["Escola", "Família só", "País só"],
          correta: 0,
          explicacao: "Acontece na escola.",
          visual: { tipo: "itens", imagemUrl: bandeirolaImg, quantidade: 1, rotulo: "🎪" },
        },
        {
          pergunta: "7 de Setembro é festa da:",
          opcoes: ["Comunidade e do país", "Só da escola", "Só da família"],
          correta: 0,
          explicacao: "Independência é festa do país inteiro.",
          visual: { tipo: "itens", imagemUrl: bandeiraBrasilImg, quantidade: 1, rotulo: "🇧🇷" },
        },
        {
          pergunta: "Dia das Mães é comemorado principalmente:",
          opcoes: ["Na família", "Na escola só", "No país só"],
          correta: 0,
          explicacao: "É uma data familiar (celebrada em casa).",
          visual: { tipo: "itens", imagemUrl: maeImg, quantidade: 1, rotulo: "👩" },
        },
        {
          pergunta: "Todas as festas ajudam a:",
          opcoes: ["Lembrar algo importante", "Nada", "Só ganhar presente"],
          correta: 0,
          explicacao: "Toda festa tem um motivo pra existir.",
          visual: { tipo: "itens", imagemUrl: calendarioImg, quantidade: 1, rotulo: "📅" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🏫 Festas da ESCOLA: junina, formatura, feira.",
      "🎂 Festas da FAMÍLIA: aniversário, Dia das Mães, Natal em casa.",
      "🇧🇷 Festas da COMUNIDADE: 7 de setembro, Carnaval.",
      "📅 Cada festa tem um motivo e um lugar.",
      "💛 Comemorar juntos fortalece a memória.",
    ],
    dica: "Pergunte à sua família qual é a festa favorita deles.",
  },

  quiz: [
    {
      pergunta: "Uma festa comemora:",
      opcoes: ["Algo importante", "Nada", "Só bolo"],
      correta: 0,
      explicacao: "Toda festa tem um significado.",
      visual: { tipo: "itens", imagemUrl: festaImg, quantidade: 1, rotulo: "🎉" },
    },
    {
      pergunta: "Aniversário em casa é festa:",
      opcoes: ["Familiar", "Escolar", "Do país"],
      correta: 0,
      explicacao: "É uma comemoração da família.",
      visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "🎂" },
    },
    {
      pergunta: "Festa Junina no pátio da escola é festa:",
      opcoes: ["Da escola", "Só familiar", "De ninguém"],
      correta: 0,
      explicacao: "É organizada pela escola.",
      visual: { tipo: "itens", imagemUrl: bandeirolaImg, quantidade: 1, rotulo: "🎪" },
    },
    {
      pergunta: "7 de Setembro é festa:",
      opcoes: ["Da comunidade e do país", "Só da escola", "Só de uma família"],
      correta: 0,
      explicacao: "Independência é comemorada no país todo.",
      visual: { tipo: "itens", imagemUrl: bandeiraBrasilImg, quantidade: 1, rotulo: "🇧🇷" },
    },
    {
      pergunta: "Hoje aprendemos que cada festa:",
      opcoes: [
        "Tem um significado e um lugar",
        "É toda igual",
        "Não importa",
      ],
      correta: 0,
      explicacao: "Cada uma comemora algo diferente.",
      visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🦉" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Mestre das Festas! 📅 Item desbloqueado: Calendário Mágico do Brilha.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Muitas festas escolares — como a festa junina — misturam tradições que vieram de MUITO tempo atrás com o jeito de cada escola comemorar. Cada escola tem sua marca! 🎪",
  },

  interativas: [
    // APRENDENDO — lupa com festas
    {
      tipo: "lupa",
      titulo: "Calendário Das Festas",
      instrucao: "Toque em cada festa pra descobrir onde ela acontece.",
      itens: [
        {
          nome: "Aniversário",
          imagemUrl: boloImg,
          rotulo: "🎂 ANIVERSÁRIO",
          descoberta: "Festa da família — geralmente em casa, com bolo, música e amigos.",
        },
        {
          nome: "Festa Junina",
          imagemUrl: bandeirolaImg,
          rotulo: "🎪 FESTA JUNINA",
          descoberta: "Festa da escola — bandeirinhas, quadrilha, comidas típicas.",
        },
        {
          nome: "Presente",
          imagemUrl: presenteImg,
          rotulo: "🎁 PRESENTE",
          descoberta: "Muitas festas ganham presente — aniversário, Natal, Dia das Mães.",
        },
        {
          nome: "Independência",
          imagemUrl: bandeiraBrasilImg,
          rotulo: "🇧🇷 INDEPENDÊNCIA",
          descoberta: "Festa do país — 7 de setembro, comemorada por toda a comunidade.",
        },
        {
          nome: "Formatura",
          imagemUrl: escolaImg,
          rotulo: "🎓 FORMATURA",
          descoberta: "Festa da escola — celebra o fim de uma etapa dos estudos.",
        },
        {
          nome: "Reunião familiar",
          imagemUrl: familiaGrandeImg,
          rotulo: "👨‍👩‍👧 REUNIÃO",
          descoberta: "Festas de família reúnem várias gerações em casa.",
        },
      ],
    },

    // FASE 1 — Escolher figura: onde acontece essa festa
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Onde É Essa Festa?",
      instrucao: "A FESTA JUNINA com bandeirinhas no pátio é festa de qual lugar?",
      pergunta: "A FESTA JUNINA acontece:",
      opcoes: [
        { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA" },
        { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 CASA" },
        { nome: "País", imagemUrl: bandeiraBrasilImg, rotulo: "🇧🇷 PAÍS" },
      ],
      correta: 0,
      acerto: "🏫 Isso! A festa junina na escola reúne alunos e famílias no pátio.",
      erro: "As bandeirinhas e o pátio indicam que é festa da ESCOLA.",
    },

    // FASE 2 — Ligar festa ao lugar
    {
      tipo: "ligar",
      titulo: "Fase 2 · Cada Festa No Seu Lugar",
      instrucao: "Ligue cada festa ao LUGAR onde ela costuma acontecer.",
      pares: [
        { a: "🎂 ANIVERSÁRIO", b: "🏠 CASA", aImagem: boloImg, bImagem: casaImg },
        { a: "🎪 FESTA JUNINA", b: "🏫 ESCOLA", aImagem: bandeirolaImg, bImagem: escolaImg },
        { a: "🎓 FORMATURA", b: "🎨 PÁTIO", aImagem: professoraImg, bImagem: patioImg },
        { a: "🇧🇷 INDEPENDÊNCIA", b: "🌎 PAÍS", aImagem: bandeiraBrasilImg, bImagem: bandeiraBrasilImg },
      ],
    },

    // FASE 3 — Selecionar múltiplos: festas da ESCOLA
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 3 · Festas Da Escola",
      instrucao: "Toque em TODAS as festas que costumam acontecer na ESCOLA.",
      criterio: "É festa da escola 🏫",
      opcoes: [
        { nome: "Festa Junina", imagemUrl: bandeirolaImg, rotulo: "🎪 FESTA JUNINA", correto: true },
        { nome: "Formatura", imagemUrl: professoraImg, rotulo: "🎓 FORMATURA", correto: true },
        { nome: "Feira de ciências", imagemUrl: salaImg, rotulo: "🔬 FEIRA", correto: true },
        { nome: "Aniversário", imagemUrl: boloImg, rotulo: "❌ ANIVERSÁRIO (é da família)", correto: false },
        { nome: "Independência", imagemUrl: bandeiraBrasilImg, rotulo: "❌ 7 DE SETEMBRO (é do país)", correto: false },
      ],
      acerto: "🏫 Isso! Todas essas festas acontecem na escola.",
      erro: "Aniversário é da família e 7 de setembro é do país. Escolha só as festas ESCOLARES.",
    },

    // FASE 4 — Arrastar: 3 categorias de festa
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Escola, Família Ou País?",
      instrucao: "Arraste cada festa pra caixa certa: 🏫 ESCOLA, 🎂 FAMÍLIA ou 🇧🇷 PAÍS.",
      pares: [
        { item: "Festa Junina", alvo: "Escola", itemImagem: bandeirolaImg },
        { item: "Formatura", alvo: "Escola", itemImagem: professoraImg },
        { item: "Aniversário", alvo: "Família", itemImagem: boloImg },
        { item: "Dia das Mães", alvo: "Família", itemImagem: maeImg },
        { item: "Independência", alvo: "País", itemImagem: bandeiraBrasilImg },
      ],
      alvosVisuais: [
        { nome: "Escola", cor: "#10B981", imagemUrl: escolaImg, capacidade: 2 },
        { nome: "Família", cor: "#F59E0B", imagemUrl: familiaImg, capacidade: 2 },
        { nome: "País", cor: "#0EA5E9", imagemUrl: bandeiraBrasilImg, capacidade: 1 },
      ],
    },

    // FASE 5 — Álbum: minha festa favorita
    {
      tipo: "album",
      titulo: "Fase 5 · Minhas Festas Favoritas",
      instrucao:
        "Monte o SEU calendário! Todas as opções ficam liberadas — pode marcar MAIS de UMA em cada pergunta.",
      escolhas: [
        {
          label: "Festas da ESCOLA que você gosta",
          modo: "imagem",
          opcoes: [
            { nome: "Festa Junina", imagemUrl: bandeirolaImg, rotulo: "🎪 JUNINA" },
            { nome: "Formatura", imagemUrl: professoraImg, rotulo: "🎓 FORMATURA" },
            { nome: "Feira de ciências", imagemUrl: salaImg, rotulo: "🔬 FEIRA" },
            { nome: "Recreio especial", imagemUrl: patioImg, rotulo: "🎨 RECREIO" },
          ],
        },
        {
          label: "Festas da FAMÍLIA que você gosta",
          modo: "imagem",
          opcoes: [
            { nome: "Aniversário", imagemUrl: boloImg, rotulo: "🎂 ANIVERSÁRIO" },
            { nome: "Presente", imagemUrl: presenteImg, rotulo: "🎁 PRESENTE" },
            { nome: "Dia das Mães", imagemUrl: maeImg, rotulo: "💐 DAS MÃES" },
            { nome: "Reunião grande", imagemUrl: familiaGrandeImg, rotulo: "👨‍👩‍👧 REUNIÃO" },
          ],
        },
        {
          label: "Festas da COMUNIDADE que você conhece",
          modo: "imagem",
          opcoes: [
            { nome: "Independência", imagemUrl: bandeiraBrasilImg, rotulo: "🇧🇷 INDEPENDÊNCIA" },
            { nome: "Festa do bairro", imagemUrl: festaImg, rotulo: "🎉 DO BAIRRO" },
            { nome: "Carnaval", imagemUrl: bandeirolaImg, rotulo: "🎭 CARNAVAL" },
          ],
        },
      ],
      acerto: "📅 Calendário montado! O Brilha guardou suas festas favoritas.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Aniversário é festa:",
        opcoes: ["Familiar", "Escolar", "Do país"],
        correta: 0,
        explicacao: "Comemorado em casa com a família.",
        visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "🎂" },
      },
      {
        pergunta: "Festa Junina no pátio é:",
        opcoes: ["Escolar", "Familiar", "Do país"],
        correta: 0,
        explicacao: "Organizada pela escola.",
        visual: { tipo: "itens", imagemUrl: bandeirolaImg, quantidade: 1, rotulo: "🎪" },
      },
      {
        pergunta: "7 de Setembro é festa:",
        opcoes: ["Do país", "Só da escola", "Só de família"],
        correta: 0,
        explicacao: "Do país inteiro.",
        visual: { tipo: "itens", imagemUrl: bandeiraBrasilImg, quantidade: 1, rotulo: "🇧🇷" },
      },
    ],
    medio: [
      {
        pergunta: "Formatura acontece na:",
        opcoes: ["Escola", "Praia", "Rua"],
        correta: 0,
        explicacao: "É festa escolar.",
        visual: { tipo: "itens", imagemUrl: professoraImg, quantidade: 1, rotulo: "🎓" },
      },
      {
        pergunta: "Dia das Mães é comemorado:",
        opcoes: ["Em família", "Só em escola", "Nunca"],
        correta: 0,
        explicacao: "É uma data familiar.",
        visual: { tipo: "itens", imagemUrl: maeImg, quantidade: 1, rotulo: "💐" },
      },
      {
        pergunta: "Toda festa tem:",
        opcoes: ["Um significado", "Nada", "Só bolo"],
        correta: 0,
        explicacao: "Cada uma comemora algo.",
        visual: { tipo: "itens", imagemUrl: calendarioImg, quantidade: 1, rotulo: "📅" },
      },
    ],
    dificil: [
      {
        pergunta: "Festa Junina reúne:",
        opcoes: ["Escola e famílias", "Só o motorista", "Ninguém"],
        correta: 0,
        explicacao: "Reúne alunos, professores e famílias.",
        visual: { tipo: "itens", imagemUrl: patioImg, quantidade: 1, rotulo: "🎪" },
      },
      {
        pergunta: "Carnaval é festa:",
        opcoes: ["Da comunidade", "Só da escola", "Só de família"],
        correta: 0,
        explicacao: "Comunidade e cidade inteira.",
        visual: { tipo: "itens", imagemUrl: bandeirolaImg, quantidade: 1, rotulo: "🎭" },
      },
      {
        pergunta: "Comemorar juntos ajuda a:",
        opcoes: ["Fortalecer memórias", "Perder tempo", "Ficar sozinho"],
        correta: 0,
        explicacao: "Une o grupo.",
        visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "🤝" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Caça Às Festas Da Escola",
    objetivo:
      "Missão: encontre APENAS as festas da ESCOLA ⭐. Cada acerto acende uma estrela do calendário!",
    tempoSegundos: 90,
    elementos: [
      { nome: "Festa Junina", imagemUrl: bandeirolaImg, rotulo: "🎪 JUNINA" },
      { nome: "Formatura", imagemUrl: professoraImg, rotulo: "🎓 FORMATURA" },
      { nome: "Feira", imagemUrl: salaImg, rotulo: "🔬 FEIRA" },
      { nome: "Recreio", imagemUrl: patioImg, rotulo: "🎨 RECREIO" },
      { nome: "Estrela", imagemUrl: estrelaImg, rotulo: "⭐ DIA DO ESTUDANTE" },
    ],
    distratores: [
      { nome: "Aniversário", imagemUrl: boloImg, rotulo: "❌ ANIVERSÁRIO (família)" },
      { nome: "Independência", imagemUrl: bandeiraBrasilImg, rotulo: "❌ 7 SETEMBRO (país)" },
    ],
    acerto: "🏆 Calendário brilhando! Você é um MESTRE DAS FESTAS.",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · A Festa Favorita",
    instrucao:
      "Converse com a família sobre a festa favorita de cada um. Depois registre aqui!",
    registros: [
      { label: "Qual é a festa favorita da família?", tipo: "texto" },
      { label: "Ela é da escola, da família ou da comunidade?", tipo: "texto" },
      { label: "Por que ela é especial?", tipo: "texto" },
    ],
    permitirFoto: true,
  },
};

export default aula;
