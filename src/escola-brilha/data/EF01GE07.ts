import type { Aula } from "../types";
import professoraImg from "@/assets/neuro-treino/objetos/professora.png";
import cozinheiraImg from "@/assets/neuro-treino/objetos/cozinheira.png";
import bibliotecarioImg from "@/assets/neuro-treino/objetos/bibliotecario.png";
import funcionarioLimpezaImg from "@/assets/neuro-treino/objetos/funcionario-limpeza.png";
import artesaoImg from "@/assets/neuro-treino/objetos/artesao.png";
import artistaImg from "@/assets/neuro-treino/objetos/artista.png";
import curadorImg from "@/assets/neuro-treino/objetos/curador.png";
import mercadoImg from "@/assets/neuro-treino/objetos/mercado.png";
import padariaImg from "@/assets/neuro-treino/objetos/padaria.png";
import postoSaudeImg from "@/assets/neuro-treino/objetos/posto-saude.png";
import escolaImg from "@/assets/neuro-treino/objetos/escola.png";
import bibliotecaImg from "@/assets/neuro-treino/objetos/biblioteca.png";
import museuImg from "@/assets/neuro-treino/objetos/museu.png";
import pracaImg from "@/assets/neuro-treino/objetos/praca.png";
import pontoOnibusImg from "@/assets/neuro-treino/objetos/ponto-onibus.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import mapaImg from "@/assets/neuro-treino/objetos/mapa.png";
import setaCimaImg from "@/assets/neuro-treino/objetos/seta-cima.png";
import setaDireitaImg from "@/assets/neuro-treino/objetos/seta-direita.png";
import panelaImg from "@/assets/neuro-treino/objetos/sopa.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import lapisImg from "@/assets/neuro-treino/objetos/lapis.png";
import pincelImg from "@/assets/neuro-treino/objetos/pincel.png";

/**
 * EF01GE07 — Geografia · 1º Ano
 * Missão: "A Vila dos Trabalhadores"
 * Descrever atividades de trabalho na comunidade e reconhecer
 * pontos de referência.
 */
const aula: Aula = {
  codigo: "EF01GE07",
  ano: "1º Ano",
  disciplina: "Geografia",
  titulo: "A Vila Dos Trabalhadores",

  narrativa: {
    titulo: "Cada Um Faz Uma Parte",
    contexto:
      "Brilha acorda cedinho na Vila do Brilha 🌅 e escuta a Coruja Sábia dizer: 'Quantas pessoas trabalham pra nossa vila funcionar!'",
    problema:
      "A padeira faz o pão, o médico cuida da saúde, a professora ensina… mas onde CADA um trabalha? Brilha precisa achar o LOCAL de cada trabalhador usando os pontos de referência 🏘️.",
    convite: "Bora conhecer os TRABALHADORES da nossa vila?",
  },

  conhecimentosPrevios: [
    "Reconhecer profissões do dia a dia.",
    "Saber que cada lugar tem uma função.",
  ],

  missao:
    "Reconhecer atividades de trabalho da comunidade e localizar seus lugares por meio de pontos de referência.",

  objetivos: [
    "Identificar profissões da comunidade.",
    "Associar cada profissional ao local onde trabalha.",
    "Reconhecer pontos de referência do bairro.",
    "Valorizar o trabalho coletivo.",
    "Perceber a importância de cada função.",
  ],

  motivacao: "Cada trabalhador ajuda a fazer o dia da comunidade FUNCIONAR ✨.",

  explicacao:
    "👩‍🏫 PROFESSORA — trabalha na ESCOLA.\n👩‍🍳 PADEIRA — na PADARIA.\n👨‍⚕️ MÉDICO — no POSTO DE SAÚDE.\n📚 BIBLIOTECÁRIO — na BIBLIOTECA.\nCada lugar é um PONTO DE REFERÊNCIA que a gente usa pra se localizar.",

  explicacoesNiveis: {
    nivel1: "Cada trabalhador tem um LOCAL onde faz seu serviço.",
    nivel2: "Esses locais viram PONTOS DE REFERÊNCIA na comunidade.",
    nivel3: "Falamos 'perto da padaria' ou 'ao lado da escola' pra achar o caminho.",
    nivel4: "Sem esses trabalhos coletivos, a vila não funciona bem.",
  },

  exemploResolvido: {
    enunciado: "A PROFESSORA trabalha em qual lugar?",
    passos: [
      "Ela ENSINA as crianças.",
      "Precisa de sala de aula.",
      "Esse lugar é a ESCOLA.",
    ],
    resposta: "🏫 ESCOLA!",
  },

  atividadeGuiada: {
    enunciado: "Onde trabalha a PADEIRA?",
    resposta: "🥖 PADARIA!",
    explicacao: "É lá que os pães são feitos todo dia bem cedo.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é a PADARIA?",
      opcoes: [
        { nome: "padaria", imagemUrl: padariaImg },
        { nome: "escola", imagemUrl: escolaImg },
        { nome: "posto de saúde", imagemUrl: postoSaudeImg },
      ],
      respostaCerta: "padaria",
    },
  },

  exercicios: [
    { enunciado: "Onde trabalha o BIBLIOTECÁRIO?", resposta: "📚 BIBLIOTECA.", dica: "Cheio de livros." },
    { enunciado: "Onde trabalha o MÉDICO?", resposta: "🏥 POSTO DE SAÚDE.", dica: "Cuida da saúde." },
    { enunciado: "Onde compramos comida?", resposta: "🛒 MERCADO.", dica: "Tem prateleiras cheias." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra ONDE cada trabalhador está!",
    resposta: "Cada profissional tem seu ponto de referência.",
    visual: {
      perguntas: [
        {
          pergunta: "A PROFESSORA está na…",
          opcoes: ["Escola", "Padaria", "Praça"],
          correta: 0,
          explicacao: "Ensina os alunos.",
          visual: { tipo: "itens", imagemUrl: professoraImg, quantidade: 1, rotulo: "👩‍🏫" },
        },
        {
          pergunta: "A COZINHEIRA da padaria fica na…",
          opcoes: ["Padaria", "Escola", "Museu"],
          correta: 0,
          explicacao: "Prepara o pão fresquinho.",
          visual: { tipo: "itens", imagemUrl: cozinheiraImg, quantidade: 1, rotulo: "👩‍🍳" },
        },
        {
          pergunta: "O FUNCIONÁRIO DA LIMPEZA cuida da…",
          opcoes: ["Praça e ruas", "Nada", "Só de casa dele"],
          correta: 0,
          explicacao: "Mantém tudo limpo.",
          visual: { tipo: "itens", imagemUrl: funcionarioLimpezaImg, quantidade: 1, rotulo: "🧹" },
        },
        {
          pergunta: "O CURADOR trabalha em…",
          opcoes: ["Museu", "Padaria", "Ponto de ônibus"],
          correta: 0,
          explicacao: "Cuida das obras do museu.",
          visual: { tipo: "itens", imagemUrl: curadorImg, quantidade: 1, rotulo: "🖼️" },
        },
        {
          pergunta: "Pra pegar ônibus a gente vai no…",
          opcoes: ["Ponto de ônibus", "Mercado", "Escola"],
          correta: 0,
          explicacao: "Ponto de ônibus é referência.",
          visual: { tipo: "itens", imagemUrl: pontoOnibusImg, quantidade: 1, rotulo: "🚏" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "👩‍🏫 Professora → Escola.",
      "👩‍🍳 Padeira → Padaria.",
      "👨‍⚕️ Médico → Posto de saúde.",
      "📚 Bibliotecário → Biblioteca.",
      "🏘️ Cada lugar é um PONTO DE REFERÊNCIA.",
    ],
    dica: "Ao sair de casa, observe quantos trabalhadores diferentes você vê no caminho.",
  },

  quiz: [
    {
      pergunta: "Onde a PROFESSORA trabalha?",
      opcoes: ["Escola", "Museu", "Praça"],
      correta: 0,
      explicacao: "É onde ela ensina.",
      visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
    },
    {
      pergunta: "Quem faz o PÃO fresquinho?",
      opcoes: ["Padeira", "Médico", "Professora"],
      correta: 0,
      explicacao: "Padaria e padeira.",
      visual: { tipo: "itens", imagemUrl: cozinheiraImg, quantidade: 1, rotulo: "👩‍🍳" },
    },
    {
      pergunta: "Quem cuida quando estamos doentes?",
      opcoes: ["Médico no posto", "Bibliotecário", "Pedreiro"],
      correta: 0,
      explicacao: "No posto de saúde.",
      visual: { tipo: "itens", imagemUrl: postoSaudeImg, quantidade: 1, rotulo: "🏥" },
    },
    {
      pergunta: "PONTO DE REFERÊNCIA serve pra…",
      opcoes: ["Ajudar a se localizar", "Nada", "Comer"],
      correta: 0,
      explicacao: "Guia o caminho.",
      visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "🗺️" },
    },
    {
      pergunta: "O trabalho coletivo faz a vila…",
      opcoes: ["Funcionar bem", "Parar", "Ficar quieta"],
      correta: 0,
      explicacao: "Todos ajudam.",
      visual: { tipo: "itens", imagemUrl: pracaImg, quantidade: 1, rotulo: "🌳" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Amigo dos Trabalhadores! 🧰 Item desbloqueado: Álbum de Profissões do Bairro.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Muitos profissionais começam a trabalhar de MADRUGADA 🌙 pra nossa vila acordar pronta — como padeiros, feirantes e motoristas de ônibus 🚌.",
  },

  interativas: [
    // APRENDENDO — lupa: profissionais
    {
      tipo: "lupa",
      titulo: "Trabalhadores Da Nossa Vila",
      instrucao: "Toque em cada trabalhador 👷 pra ouvir o que ele faz.",
      itens: [
        {
          nome: "Professora",
          imagemUrl: professoraImg,
          rotulo: "👩‍🏫 PROFESSORA",
          descoberta: "Ensina, ajuda a aprender e cuida da turma na ESCOLA.",
        },
        {
          nome: "Padeira",
          imagemUrl: cozinheiraImg,
          rotulo: "👩‍🍳 PADEIRA",
          descoberta: "Faz o pão fresquinho na PADARIA todo dia bem cedo.",
        },
        {
          nome: "Bibliotecário",
          imagemUrl: bibliotecarioImg,
          rotulo: "📚 BIBLIOTECÁRIO",
          descoberta: "Cuida dos LIVROS e ajuda a encontrar as histórias.",
        },
        {
          nome: "Funcionário da limpeza",
          imagemUrl: funcionarioLimpezaImg,
          rotulo: "🧹 LIMPEZA",
          descoberta: "Mantém a rua e a praça sempre LIMPAS.",
        },
        {
          nome: "Curador",
          imagemUrl: curadorImg,
          rotulo: "🖼️ CURADOR",
          descoberta: "Cuida das obras do MUSEU pra todos visitarem.",
        },
        {
          nome: "Coruja Sábia",
          imagemUrl: corujaImg,
          rotulo: "🦉 CORUJA",
          descoberta: "Cada trabalho é essencial pra vila funcionar.",
        },
      ],
    },

    // FASE 1 — escolherFigura: onde trabalha a professora
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Onde É A ESCOLA?",
      instrucao: "Toque no lugar onde a PROFESSORA trabalha.",
      pergunta: "Onde é a ESCOLA? 🏫",
      opcoes: [
        { nome: "escola", imagemUrl: escolaImg, rotulo: "ESCOLA" },
        { nome: "padaria", imagemUrl: padariaImg, rotulo: "PADARIA" },
        { nome: "posto de saúde", imagemUrl: postoSaudeImg, rotulo: "POSTO" },
      ],
      correta: 0,
      acerto: "🎯 Professora trabalha na ESCOLA!",
      erro: "Esse não é o lugar da professora — tente de novo.",
    },

    // FASE 2 — ligar: profissional ↔ ferramenta
    {
      tipo: "ligar",
      titulo: "Fase 2 · Ferramentas De Trabalho",
      instrucao: "Ligue cada TRABALHADOR à FERRAMENTA que ele usa.",
      pares: [
        { a: "👩‍🏫 Professora", b: "Lápis e livro", aImagem: professoraImg },
        { a: "👩‍🍳 Cozinheira", b: "Panela", aImagem: cozinheiraImg },
        { a: "📚 Bibliotecário", b: "Livro", aImagem: bibliotecarioImg },
        { a: "🎨 Artista", b: "Pincel", aImagem: artistaImg },
      ],
    },

    // FASE 3 — arrastar: profissional ↔ local
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Cada Um No Seu Lugar",
      instrucao: "Arraste cada TRABALHADOR pro LOCAL onde ele trabalha 🏘️.",
      pares: [
        { item: "Professora", alvo: "Escola", itemImagem: professoraImg },
        { item: "Padeira", alvo: "Padaria", itemImagem: cozinheiraImg },
        { item: "Bibliotecário", alvo: "Biblioteca", itemImagem: bibliotecarioImg },
        { item: "Curador", alvo: "Museu", itemImagem: curadorImg },
        { item: "Artesão", alvo: "Praça", itemImagem: artesaoImg },
      ],
      alvosVisuais: [
        { nome: "Escola", cor: "#F59E0B", imagemUrl: escolaImg, capacidade: 1 },
        { nome: "Padaria", cor: "#EF4444", imagemUrl: padariaImg, capacidade: 1 },
        { nome: "Biblioteca", cor: "#8B5CF6", imagemUrl: bibliotecaImg, capacidade: 1 },
        { nome: "Museu", cor: "#0EA5E9", imagemUrl: museuImg, capacidade: 1 },
        { nome: "Praça", cor: "#22C55E", imagemUrl: pracaImg, capacidade: 1 },
      ],
      mapaFundo: mapaImg,
    },

    // FASE 4 — selecionarMultiplos: quem ajuda a comunidade
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 4 · Quem Ajuda A Comunidade",
      instrucao: "Marque TODOS que ajudam a comunidade com o trabalho deles.",
      criterio: "Trabalhadores da comunidade 👷",
      opcoes: [
        { nome: "Professora", imagemUrl: professoraImg, rotulo: "👩‍🏫 PROFESSORA", correto: true },
        { nome: "Padeira", imagemUrl: cozinheiraImg, rotulo: "👩‍🍳 PADEIRA", correto: true },
        { nome: "Médico", imagemUrl: postoSaudeImg, rotulo: "🏥 MÉDICO", correto: true },
        { nome: "Bibliotecário", imagemUrl: bibliotecarioImg, rotulo: "📚 BIBLIOTECÁRIO", correto: true },
        { nome: "Ponto de ônibus", imagemUrl: pontoOnibusImg, rotulo: "🚏 PONTO DE ÔNIBUS", correto: false },
        { nome: "Seta", imagemUrl: setaCimaImg, rotulo: "⬆️ SETA", correto: false },
      ],
      acerto: "🤝 Você reconheceu quem faz a vila funcionar!",
      erro: "Isso não é uma PESSOA que trabalha — procure os profissionais.",
    },

    // FASE 5 — album: profissão que quero conhecer
    {
      tipo: "album",
      titulo: "Fase 5 · Álbum Das Profissões",
      instrucao: "Monte seu álbum: escolha as profissões que você quer conhecer melhor!",
      escolhas: [
        {
          label: "Eu quero conhecer o trabalho de…",
          modo: "imagem",
          opcoes: [
            { nome: "Professora", imagemUrl: professoraImg, rotulo: "👩‍🏫" },
            { nome: "Padeira", imagemUrl: cozinheiraImg, rotulo: "👩‍🍳" },
            { nome: "Artista", imagemUrl: artistaImg, rotulo: "🎨" },
            { nome: "Artesão", imagemUrl: artesaoImg, rotulo: "🧑‍🎨" },
          ],
        },
        {
          label: "O lugar da vila que eu mais gosto…",
          modo: "imagem",
          opcoes: [
            { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA" },
            { nome: "Praça", imagemUrl: pracaImg, rotulo: "🌳 PRAÇA" },
            { nome: "Biblioteca", imagemUrl: bibliotecaImg, rotulo: "📚 BIBLIOTECA" },
            { nome: "Padaria", imagemUrl: padariaImg, rotulo: "🥖 PADARIA" },
          ],
        },
        {
          label: "Ferramenta que eu queria usar…",
          modo: "imagem",
          opcoes: [
            { nome: "Lápis", imagemUrl: lapisImg, rotulo: "✏️ LÁPIS" },
            { nome: "Pincel", imagemUrl: pincelImg, rotulo: "🖌️ PINCEL" },
            { nome: "Livro", imagemUrl: livroImg, rotulo: "📖 LIVRO" },
            { nome: "Panela", imagemUrl: panelaImg, rotulo: "🍲 PANELA" },
          ],
        },
      ],
      acerto: "🧰 Álbum das Profissões salvo no Diário do Brilha!",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Professora trabalha na…",
        opcoes: ["Escola", "Praça", "Padaria"],
        correta: 0,
        explicacao: "É onde ensina.",
        visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
      },
      {
        pergunta: "Padeira trabalha na…",
        opcoes: ["Padaria", "Escola", "Museu"],
        correta: 0,
        explicacao: "Faz o pão lá.",
        visual: { tipo: "itens", imagemUrl: padariaImg, quantidade: 1, rotulo: "🥖" },
      },
      {
        pergunta: "Bibliotecário fica na…",
        opcoes: ["Biblioteca", "Praça", "Ponto de ônibus"],
        correta: 0,
        explicacao: "Cuida dos livros.",
        visual: { tipo: "itens", imagemUrl: bibliotecaImg, quantidade: 1, rotulo: "📚" },
      },
    ],
    medio: [
      {
        pergunta: "Onde compramos comida?",
        opcoes: ["Mercado", "Escola", "Museu"],
        correta: 0,
        explicacao: "Prateleiras cheias.",
        visual: { tipo: "itens", imagemUrl: mercadoImg, quantidade: 1, rotulo: "🛒" },
      },
      {
        pergunta: "Ponto de ônibus é usado pra…",
        opcoes: ["Esperar o ônibus", "Dormir", "Comer"],
        correta: 0,
        explicacao: "Local de embarque.",
        visual: { tipo: "itens", imagemUrl: pontoOnibusImg, quantidade: 1, rotulo: "🚏" },
      },
      {
        pergunta: "O museu é lugar de…",
        opcoes: ["Ver obras e história", "Comprar comida", "Dormir"],
        correta: 0,
        explicacao: "Preserva a memória.",
        visual: { tipo: "itens", imagemUrl: museuImg, quantidade: 1, rotulo: "🖼️" },
      },
    ],
    dificil: [
      {
        pergunta: "Ponto de referência ajuda a…",
        opcoes: ["Localizar caminho", "Cozinhar", "Correr"],
        correta: 0,
        explicacao: "Guia a orientação.",
        visual: { tipo: "itens", imagemUrl: setaDireitaImg, quantidade: 1, rotulo: "➡️" },
      },
      {
        pergunta: "Trabalho da limpeza cuida…",
        opcoes: ["Da rua limpa", "Só de casa", "De nada"],
        correta: 0,
        explicacao: "Espaços comuns.",
        visual: { tipo: "itens", imagemUrl: funcionarioLimpezaImg, quantidade: 1, rotulo: "🧹" },
      },
      {
        pergunta: "Sem trabalhadores a vila…",
        opcoes: ["Não funciona bem", "Fica igual", "Melhora"],
        correta: 0,
        explicacao: "Trabalho coletivo é essencial.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🦉" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Caça Aos Trabalhadores",
    objetivo:
      "Encontre os 5 TRABALHADORES da vila em 90 segundos ⏱️. Cuidado com os distratores!",
    tempoSegundos: 90,
    elementos: [
      { nome: "Professora", imagemUrl: professoraImg, rotulo: "👩‍🏫" },
      { nome: "Padeira", imagemUrl: cozinheiraImg, rotulo: "👩‍🍳" },
      { nome: "Bibliotecário", imagemUrl: bibliotecarioImg, rotulo: "📚" },
      { nome: "Curador", imagemUrl: curadorImg, rotulo: "🖼️" },
      { nome: "Limpeza", imagemUrl: funcionarioLimpezaImg, rotulo: "🧹" },
    ],
    distratores: [
      { nome: "Ponto de ônibus", imagemUrl: pontoOnibusImg, rotulo: "🚏" },
      { nome: "Mapa", imagemUrl: mapaImg, rotulo: "🗺️" },
      { nome: "Praça", imagemUrl: pracaImg, rotulo: "🌳" },
      { nome: "Padaria", imagemUrl: padariaImg, rotulo: "🥖" },
    ],
    acerto: "🎉 Todos os trabalhadores foram encontrados! Vila funcionando!",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Trabalhadores Do Bairro",
    instrucao:
      "Andem pelo BAIRRO e observem 3 trabalhadores diferentes. Conversem sobre o que cada um faz e onde trabalha.",
    registros: [
      { label: "1º trabalhador e local", tipo: "texto" },
      { label: "2º trabalhador e local", tipo: "texto" },
      { label: "3º trabalhador e local", tipo: "texto" },
      { label: "Qual trabalho vocês agradeceram hoje", tipo: "texto" },
    ],
    permitirFoto: true,
  },

  proximaHabilidade: { codigo: "EF01GE08" },
};

export default aula;
