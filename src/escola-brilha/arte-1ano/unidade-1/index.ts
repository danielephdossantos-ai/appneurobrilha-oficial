import type { UnidadeArte } from "../types";

const CORES_PRIMARIAS = ["#E63946", "#F1C40F", "#1D8FE1"]; // vermelho, amarelo, azul
const CORES_SECUNDARIAS = ["#F97316", "#22C55E", "#8B5CF6"]; // laranja, verde, roxo
const CORES_QUENTES = ["#E63946", "#F97316", "#F1C40F", "#EF4444", "#FB923C"];
const CORES_FRIAS = ["#1D8FE1", "#22C55E", "#8B5CF6", "#0EA5E9", "#14B8A6"];
const ARCO_IRIS = ["#E63946", "#F97316", "#F1C40F", "#22C55E", "#1D8FE1", "#4F46E5", "#8B5CF6"];

export const unidade1: UnidadeArte = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Descobrindo o Mundo das Cores",
  subtitulo: "As cores estão em todos os lugares",
  tema: "Cores",
  projeto: "Meu Primeiro Arco-Íris",
  corPrincipal: "#FF6B4A",
  emoji: "🎨",
  aulas: [
    // -------------------------------------------------------------- AULA 01
    {
      slug: "aula-01-cores-primarias",
      numero: 1,
      eixoPrincipal: "visuais",
      titulo: "As Três Amigas Coloridas",
      subtitulo: "Vermelho, amarelo e azul",
      historia: [
        { emoji: "🎨", fundo: "#FBF6EC", texto: "Bem-vindo ao Estúdio Brilha! Aqui a gente pinta, dança, canta e faz arte todo dia." },
        { emoji: "🔴", fundo: "#E63946", texto: "Esta é a Vermelha. Ela é quente, forte e alegre — como um coração batendo." },
        { emoji: "🟡", fundo: "#F1C40F", texto: "Esta é a Amarela. Ela é a cor do sol, brilha e ilumina tudo." },
        { emoji: "🔵", fundo: "#1D8FE1", texto: "E este é o Azul. Ele é calmo, do céu e do mar." },
        { emoji: "🌈", fundo: "#FBF6EC", texto: "Essas três amigas são chamadas de CORES PRIMÁRIAS. Quando a gente mistura elas, nasce o resto do mundo colorido!" },
      ],
      atividade: {
        titulo: "Caça às cores primárias",
        materiais: ["seus olhos", "um lápis", "uma folha"],
        passos: [
          "Olhe ao seu redor.",
          "Encontre alguma coisa VERMELHA. Diga em voz alta o nome dela.",
          "Agora encontre alguma coisa AMARELA.",
          "Por último, uma coisa AZUL.",
          "Desenhe as três coisas na sua folha, cada uma na cor certa!",
        ],
      },
      video: {
        titulo: "As três cores primárias na natureza",
        descricao: "Um passeio rápido por frutas, flores e céus mostrando vermelho, amarelo e azul.",
      },
      ferramenta: {
        brief: "Pinte três círculos: um vermelho, um amarelo e um azul.",
        cores: CORES_PRIMARIAS,
      },
      musica: {
        titulo: "Batida das três cores",
        padrao: ["palma", "palma", "pé", "palma", "palma", "pé", "boca", "silencio"],
        bpm: 90,
      },
      teatro: {
        titulo: "Vira a Vermelha!",
        emocao: "alegria forte",
        emoji: "🔴",
        fala: "Eu sou a Vermelha! Eu esquento tudo!",
      },
      movimento: {
        titulo: "Dança das cores",
        poses: [
          { nome: "Braços pra cima (sol amarelo)", emoji: "🌞", segundos: 5 },
          { nome: "Abraça o próprio corpo (vermelho)", emoji: "❤️", segundos: 5 },
          { nome: "Balança como onda (azul)", emoji: "🌊", segundos: 5 },
        ],
      },
      jogo: {
        tipo: "combinarCores",
        titulo: "Encontre a cor certa",
        dados: {
          rodadas: [
            { alvo: "vermelho", cor: "#E63946", opcoes: CORES_PRIMARIAS },
            { alvo: "amarelo", cor: "#F1C40F", opcoes: CORES_PRIMARIAS },
            { alvo: "azul", cor: "#1D8FE1", opcoes: CORES_PRIMARIAS },
          ],
        },
      },
      registro: { pergunta: "Tire uma foto do seu desenho das três cores!", tipo: "foto" },
      conquista: {
        medalha: "🎨",
        nome: "Primeira Paleta",
        descricao: "Você conheceu as três cores primárias!",
      },
      relatorio: [
        "Reconhece as três cores primárias (vermelho, amarelo, azul).",
        "Consegue nomear objetos coloridos ao redor.",
        "Praticou coordenação motora pintando círculos.",
        "Explorou ritmo simples com palmas e pés.",
      ],
    },
    // -------------------------------------------------------------- AULA 02
    {
      slug: "aula-02-mistura-de-cores",
      numero: 2,
      eixoPrincipal: "visuais",
      titulo: "Cores Que Nascem da Mistura",
      subtitulo: "Laranja, verde e roxo",
      historia: [
        { emoji: "🧪", fundo: "#FBF6EC", texto: "As três amigas de ontem descobriram uma coisa mágica: quando se abraçam, viram outra cor!" },
        { emoji: "🟠", fundo: "#F97316", texto: "Vermelho + Amarelo = LARANJA! A cor da abóbora e do pôr do sol." },
        { emoji: "🟢", fundo: "#22C55E", texto: "Amarelo + Azul = VERDE! A cor da grama e das folhas." },
        { emoji: "🟣", fundo: "#8B5CF6", texto: "Azul + Vermelho = ROXO! A cor da uva e das flores." },
        { emoji: "🎨", fundo: "#FBF6EC", texto: "Essas são as CORES SECUNDÁRIAS — nascem da mistura das primárias!" },
      ],
      atividade: {
        titulo: "Laboratório de cores",
        materiais: ["tinta guache OU giz molhado", "papel branco", "um pincel ou o dedo"],
        passos: [
          "Coloque um pouquinho de vermelho e amarelo no papel.",
          "Misture com o dedo. Que cor apareceu?",
          "Agora misture amarelo com azul.",
          "Por último, azul com vermelho.",
          "Guarde as três misturas — é o seu laboratório!",
        ],
      },
      video: {
        titulo: "Tinta misturando em câmera lenta",
        descricao: "Veja as cores se abraçando e virando novas cores.",
      },
      ferramenta: {
        brief: "Pinte um sol laranja, uma folha verde e uma uva roxa.",
        cores: [...CORES_PRIMARIAS, ...CORES_SECUNDARIAS],
      },
      musica: {
        titulo: "Duetos das misturas",
        padrao: ["palma", "boca", "palma", "boca", "pé", "pé", "silencio", "palma"],
        bpm: 85,
      },
      teatro: {
        titulo: "Cena da mistura",
        emocao: "surpresa",
        emoji: "😲",
        fala: "Uau! Ficou uma cor nova! Que mágica!",
      },
      movimento: {
        titulo: "Corpo laranja, corpo verde, corpo roxo",
        poses: [
          { nome: "Salta alegre (laranja)", emoji: "🟠", segundos: 5 },
          { nome: "Cresce como árvore (verde)", emoji: "🟢", segundos: 5 },
          { nome: "Roda devagar (roxo)", emoji: "🟣", segundos: 5 },
        ],
      },
      jogo: {
        tipo: "combinarCores",
        titulo: "Que cor nasce?",
        dados: {
          rodadas: [
            { alvo: "laranja", cor: "#F97316", opcoes: CORES_SECUNDARIAS, dica: "vermelho + amarelo" },
            { alvo: "verde", cor: "#22C55E", opcoes: CORES_SECUNDARIAS, dica: "amarelo + azul" },
            { alvo: "roxo", cor: "#8B5CF6", opcoes: CORES_SECUNDARIAS, dica: "azul + vermelho" },
          ],
        },
      },
      registro: { pergunta: "Foto do seu laboratório de misturas!", tipo: "foto" },
      conquista: {
        medalha: "🧪",
        nome: "Pequeno Cientista das Cores",
        descricao: "Descobriu como nascem as cores secundárias!",
      },
      relatorio: [
        "Compreendeu a relação primária → secundária.",
        "Experimentou mistura de tintas na prática.",
        "Nomeou laranja, verde e roxo corretamente.",
      ],
    },
    // -------------------------------------------------------------- AULA 03
    {
      slug: "aula-03-quentes-e-frias",
      numero: 3,
      eixoPrincipal: "integradas",
      titulo: "Cores Que Esquentam, Cores Que Esfriam",
      subtitulo: "Quentes vs frias",
      historia: [
        { emoji: "☀️", fundo: "#F97316", texto: "Algumas cores dão a sensação de calor: são as CORES QUENTES." },
        { emoji: "🔥", fundo: "#E63946", texto: "Vermelho, laranja e amarelo lembram o fogo, o sol, o outono." },
        { emoji: "❄️", fundo: "#1D8FE1", texto: "Outras dão calma e frescor: são as CORES FRIAS." },
        { emoji: "🌊", fundo: "#0EA5E9", texto: "Azul, verde e roxo lembram água, floresta e noite." },
        { emoji: "🎨", fundo: "#FBF6EC", texto: "Os artistas usam cores quentes para animar e cores frias para acalmar." },
      ],
      atividade: {
        titulo: "Divide sua paleta",
        materiais: ["papel", "lápis de cor de várias cores"],
        passos: [
          "Dobre a folha ao meio.",
          "Do lado esquerdo desenhe algo QUENTE: sol, fogo, pimenta...",
          "Do lado direito desenhe algo FRIO: rio, pinguim, gelo...",
          "Use só cores quentes de um lado e só frias do outro.",
        ],
      },
      video: {
        titulo: "Duas paisagens: deserto e polo",
        descricao: "Compare como o olho sente calor ou frio só pelas cores.",
      },
      ferramenta: {
        brief: "Pinte um lado quente e um lado frio.",
        cores: [...CORES_QUENTES, ...CORES_FRIAS],
      },
      musica: {
        titulo: "Ritmo quente e ritmo frio",
        padrao: ["palma", "palma", "palma", "silencio", "boca", "silencio", "boca", "silencio"],
        bpm: 100,
      },
      teatro: {
        titulo: "Sou fogo, sou gelo",
        emocao: "contraste",
        emoji: "🔥",
        fala: "Agora eu sou fogo! Agora eu sou gelo... brrr!",
      },
      movimento: {
        titulo: "Aquece e esfria",
        poses: [
          { nome: "Corpo agitado (quente)", emoji: "🔥", segundos: 5 },
          { nome: "Corpo devagar (frio)", emoji: "❄️", segundos: 5 },
          { nome: "Congela!", emoji: "🧊", segundos: 3 },
        ],
      },
      jogo: {
        tipo: "combinarCores",
        titulo: "Quente ou fria?",
        dados: {
          rodadas: [
            { alvo: "QUENTE", cor: "#F97316", opcoes: ["#E63946", "#1D8FE1"], corCerta: "#E63946" },
            { alvo: "FRIA", cor: "#0EA5E9", opcoes: ["#F1C40F", "#22C55E"], corCerta: "#22C55E" },
            { alvo: "QUENTE", cor: "#EF4444", opcoes: ["#8B5CF6", "#F1C40F"], corCerta: "#F1C40F" },
            { alvo: "FRIA", cor: "#4F46E5", opcoes: ["#F97316", "#8B5CF6"], corCerta: "#8B5CF6" },
          ],
        },
      },
      registro: { pergunta: "Foto do seu desenho quente-e-frio!", tipo: "foto" },
      conquista: {
        medalha: "🌡️",
        nome: "Sensível às Cores",
        descricao: "Aprendeu que cor também é sensação!",
      },
      relatorio: [
        "Classifica cores em quentes e frias.",
        "Associa cores a sensações e paisagens.",
        "Trabalhou composição dividindo a folha.",
      ],
    },
    // -------------------------------------------------------------- AULA 04 (Projeto)
    {
      slug: "aula-04-meu-primeiro-arco-iris",
      numero: 4,
      eixoPrincipal: "integradas",
      titulo: "Projeto: Meu Primeiro Arco-Íris",
      subtitulo: "Juntar tudo que aprendeu",
      historia: [
        { emoji: "🌈", fundo: "#FBF6EC", texto: "Chegou o dia! Você já conhece cores primárias, secundárias, quentes e frias." },
        { emoji: "🎨", fundo: "#F1C40F", texto: "O arco-íris tem 7 cores nesta ordem: vermelho, laranja, amarelo, verde, azul, anil e violeta." },
        { emoji: "☁️", fundo: "#1D8FE1", texto: "Ele aparece quando o sol encontra a chuva no céu — é a natureza pintando!" },
        { emoji: "✨", fundo: "#8B5CF6", texto: "Hoje você vai pintar o SEU arco-íris e guardar no álbum do Estúdio Brilha." },
      ],
      atividade: {
        titulo: "Meu arco-íris",
        materiais: ["a ferramenta digital abaixo OU papel e lápis"],
        passos: [
          "Vá até a ferramenta de desenho.",
          "Pinte 7 faixas curvas, uma pra cada cor do arco-íris.",
          "Começa em vermelho, termina em violeta.",
          "Se quiser, adicione um sol e uma nuvem.",
          "Salve tirando foto no fim.",
        ],
      },
      video: {
        titulo: "Como um arco-íris se forma",
        descricao: "Chuva + sol = mágica no céu, explicado simples.",
      },
      ferramenta: {
        brief: "Pinte um arco-íris com as 7 cores.",
        cores: ARCO_IRIS,
      },
      musica: {
        titulo: "Canção do arco-íris",
        padrao: ["palma", "palma", "boca", "palma", "palma", "boca", "pé", "silencio"],
        bpm: 95,
      },
      teatro: {
        titulo: "Anuncia teu arco-íris",
        emocao: "orgulho",
        emoji: "🌈",
        fala: "Olha só! Eu pintei o meu primeiro arco-íris!",
      },
      movimento: {
        titulo: "Dança do arco-íris",
        poses: [
          { nome: "Faz arco com os braços", emoji: "🌈", segundos: 6 },
          { nome: "Roda como chuva", emoji: "🌧️", segundos: 5 },
          { nome: "Levanta como sol", emoji: "☀️", segundos: 5 },
        ],
      },
      jogo: {
        tipo: "combinarCores",
        titulo: "Ordem do arco-íris",
        dados: {
          modo: "ordenar",
          ordemCerta: ARCO_IRIS,
        },
      },
      registro: { pergunta: "Foto do seu arco-íris pronto — vai pra sua Galeria!", tipo: "foto" },
      conquista: {
        medalha: "🌈",
        nome: "Mestre do Arco-Íris",
        descricao: "Completou o projeto da Unidade 1!",
      },
      relatorio: [
        "Concluiu a Unidade 1 — Cores.",
        "Aplicou todos os conceitos num projeto único.",
        "Produziu obra pessoal registrada no álbum.",
        "Pronto para a Unidade 2 — Formas e Desenhos.",
      ],
    },
  ],
};
