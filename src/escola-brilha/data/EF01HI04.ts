import type { Aula } from "../types";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as salaAulaImg } from "@/assets/neuro-treino/objetos/sala-aula.png.asset.json";
import { url as bibliotecaImg } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as patioImg } from "@/assets/neuro-treino/objetos/patio-escola.png.asset.json";
import { url as refeitorioImg } from "@/assets/neuro-treino/objetos/refeitorio.png.asset.json";
import { url as quadraImg } from "@/assets/neuro-treino/objetos/quadra-esportiva.png.asset.json";
import { url as professoraImg } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as bibliotecarioImg } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as cozinheiraImg } from "@/assets/neuro-treino/objetos/cozinheira.png.asset.json";
import { url as limpezaImg } from "@/assets/neuro-treino/objetos/funcionario-limpeza.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as mochilaImg } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as lapisImg } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as cadeiraImg } from "@/assets/neuro-treino/objetos/cadeira.png.asset.json";
import { url as lixeiraImg } from "@/assets/neuro-treino/objetos/lixeira.png.asset.json";
import { url as bolaPraiaImg } from "@/assets/neuro-treino/objetos/bola-praia.png.asset.json";
import { url as geladeiraImg } from "@/assets/neuro-treino/objetos/geladeira.png.asset.json";
import { url as compartilharImg } from "@/assets/neuro-treino/objetos/compartilhar.png.asset.json";
import { url as ajudarImg } from "@/assets/neuro-treino/objetos/ajudar.png.asset.json";
import { url as abracoImg } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as criancasImg } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";

/**
 * EF01HI04 — História · 1º Ano
 * Missão: "Os Guardiões da Escola".
 * Identificar diferenças entre os ambientes em que vive (doméstico, escolar, comunidade),
 * reconhecendo hábitos e regras — foco no ambiente ESCOLAR.
 */
const aula: Aula = {
  codigo: "EF01HI04",
  ano: "1º Ano",
  disciplina: "História",
  titulo: "Os Guardiões da Escola",

  narrativa: {
    titulo: "As Estrelas Da Escola Sumiram",
    contexto:
      "Brilha chegou animado à ESCOLA DAS ESTRELAS 🏫✨, mas assim que entrou percebeu que os símbolos da escola tinham DESAPARECIDO!",
    problema:
      "A Coruja Sábia chegou voando e explicou: 'A escola faz parte da nossa história. Pra recuperar as estrelas, você precisa conhecer cada espaço e descobrir quem faz a escola funcionar todos os dias.'",
    convite: "Bora ajudar o Brilha a devolver as estrelas pra Escola?",
  },

  conhecimentosPrevios: [
    "Saber que a escola é um lugar de aprender.",
    "Reconhecer o professor como alguém que ensina.",
  ],

  missao:
    "Reconhecer a escola como espaço de convivência, aprendizagem e construção da história de cada estudante, valorizando as pessoas que fazem parte desse ambiente.",

  objetivos: [
    "Reconhecer a escola como parte da sua história.",
    "Identificar diferentes espaços escolares.",
    "Compreender a importância das pessoas que trabalham na escola.",
    "Desenvolver atitudes de respeito e cooperação.",
    "Valorizar o ambiente escolar.",
  ],

  motivacao:
    "A escola é um lugar cheio de gente que cuida, ensina e ajuda — e cada um deles faz parte da SUA história. 🌟",

  explicacao:
    "🏫 SALA DE AULA é onde a gente aprende com o professor.\n📚 BIBLIOTECA é onde encontramos livros pra imaginar e descobrir.\n🎨 PÁTIO é onde brincamos e conversamos.\n🍽️ REFEITÓRIO é onde comemos.\n⚽ QUADRA é onde praticamos esportes.\n👩‍🏫 PROFESSORES ensinam. 👨‍🍳 COZINHEIRAS preparam a comida. 🧹 A EQUIPE DE LIMPEZA cuida da escola. 📚 BIBLIOTECÁRIO cuida dos livros.",

  explicacoesNiveis: {
    nivel1: "Escola é lugar de aprender e conviver.",
    nivel2: "Cada espaço da escola tem uma função diferente.",
    nivel3: "Muitas pessoas trabalham pra escola funcionar bem.",
    nivel4: "Respeitar e cooperar deixa a escola um lugar melhor pra todos.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha entrou num lugar cheio de livros, silencioso, com prateleiras. Que lugar é esse?",
    passos: [
      "Livros nas prateleiras.",
      "Silêncio pra ler.",
      "Um bibliotecário organizando.",
    ],
    resposta: "📚 É a BIBLIOTECA! Lugar de ler, imaginar e descobrir histórias.",
  },

  atividadeGuiada: {
    enunciado: "Onde lemos livros na escola?",
    resposta: "📚 Na BIBLIOTECA!",
    explicacao:
      "A biblioteca guarda livros pra estudar, ler e imaginar. É um espaço tranquilo pra descobrir novas histórias.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Onde a gente lê livros?",
      opcoes: [
        { nome: "biblioteca", imagemUrl: bibliotecaImg },
        { nome: "quadra", imagemUrl: quadraImg },
        { nome: "refeitorio", imagemUrl: refeitorioImg },
      ],
      respostaCerta: "biblioteca",
    },
  },

  exercicios: [
    {
      enunciado: "Onde fazemos as refeições na escola?",
      resposta: "🍽️ No REFEITÓRIO.",
      dica: "É o lugar da comida, das mesas e das bandejas.",
    },
    {
      enunciado: "Quem ensina as crianças na sala de aula?",
      resposta: "👩‍🏫 A PROFESSORA ou o PROFESSOR.",
      dica: "É a pessoa que explica e ajuda a aprender.",
    },
    {
      enunciado: "Compartilhar materiais com o colega é uma atitude:",
      resposta: "💖 BOA — mostra respeito e amizade.",
      dica: "Ajudar o colega deixa a escola melhor.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: recupere as estrelas identificando cada espaço e cada pessoa da escola!",
    resposta: "Cada espaço e cada pessoa importam pra escola funcionar.",
    visual: {
      perguntas: [
        {
          pergunta: "Onde APRENDEMOS com o professor?",
          opcoes: ["Sala de aula", "Refeitório", "Quadra"],
          correta: 0,
          explicacao: "Sala de aula é onde acontecem as aulas.",
          visual: { tipo: "itens", imagemUrl: salaAulaImg, quantidade: 1, rotulo: "🏫" },
        },
        {
          pergunta: "Onde LEMOS LIVROS?",
          opcoes: ["Biblioteca", "Quadra", "Refeitório"],
          correta: 0,
          explicacao: "A biblioteca é o espaço dos livros.",
          visual: { tipo: "itens", imagemUrl: bibliotecaImg, quantidade: 1, rotulo: "📚" },
        },
        {
          pergunta: "Onde FAZEMOS AS REFEIÇÕES?",
          opcoes: ["Refeitório", "Sala de aula", "Biblioteca"],
          correta: 0,
          explicacao: "No refeitório a gente come.",
          visual: { tipo: "itens", imagemUrl: refeitorioImg, quantidade: 1, rotulo: "🍽️" },
        },
        {
          pergunta: "Quem prepara a comida da escola?",
          opcoes: ["A cozinheira", "O motorista", "O piloto"],
          correta: 0,
          explicacao: "A cozinheira cuida da alimentação de todos.",
          visual: { tipo: "itens", imagemUrl: cozinheiraImg, quantidade: 1, rotulo: "👩‍🍳" },
        },
        {
          pergunta: "Uma atitude de RESPEITO na escola é:",
          opcoes: ["Compartilhar materiais", "Jogar lixo no chão", "Empurrar colegas"],
          correta: 0,
          explicacao: "Compartilhar mostra respeito e cuidado.",
          visual: { tipo: "itens", imagemUrl: compartilharImg, quantidade: 1, rotulo: "🤝" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🏫 A escola tem VÁRIOS espaços com funções diferentes.",
      "👩‍🏫 Muitas PESSOAS trabalham pra escola funcionar.",
      "📚 Na biblioteca lemos, no refeitório comemos, na quadra jogamos.",
      "🤝 Respeitar, cooperar e cuidar é o que faz a escola brilhar.",
      "🌟 A escola faz parte da NOSSA história.",
    ],
    dica: "Olha em volta na escola: cada canto e cada pessoa tem uma missão importante.",
  },

  quiz: [
    {
      pergunta: "Onde aprendemos com os professores?",
      opcoes: ["Na escola", "No supermercado", "No aeroporto"],
      correta: 0,
      explicacao: "A escola é o lugar de aprender.",
      visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
    },
    {
      pergunta: "Quem ajuda a ensinar os alunos?",
      opcoes: ["Professora ou professor", "Motorista", "Piloto"],
      correta: 0,
      explicacao: "Professores ensinam e ajudam a aprender.",
      visual: { tipo: "itens", imagemUrl: professoraImg, quantidade: 1, rotulo: "👩‍🏫" },
    },
    {
      pergunta: "Qual atitude demonstra respeito na escola?",
      opcoes: [
        "Compartilhar e cuidar dos materiais",
        "Jogar lixo no chão",
        "Empurrar os colegas",
      ],
      correta: 0,
      explicacao: "Compartilhar e cuidar é respeitar os outros.",
      visual: { tipo: "itens", imagemUrl: compartilharImg, quantidade: 1, rotulo: "🤝" },
    },
    {
      pergunta: "A biblioteca é um lugar para:",
      opcoes: ["Ler e pegar livros", "Jogar futebol", "Cozinhar"],
      correta: 0,
      explicacao: "Biblioteca guarda livros pra leitura.",
      visual: { tipo: "itens", imagemUrl: bibliotecaImg, quantidade: 1, rotulo: "📚" },
    },
    {
      pergunta: "Hoje aprendemos sobre:",
      opcoes: [
        "A importância da escola e das pessoas que trabalham nela",
        "Apenas brinquedos",
        "Apenas animais",
      ],
      correta: 0,
      explicacao: "A missão foi conhecer os espaços e as pessoas da escola.",
      visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Amigo da Escola! 🎁 Item desbloqueado: 🏫 Mini Escola do Brilha. Você recuperou todas as estrelas da Escola!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "A escola também faz parte da nossa história. Todos ajudam pra que ela seja um lugar seguro, organizado e cheio de aprendizagens. 🌟",
  },

  interativas: [
    // APRENDENDO — Passeio virtual: ligar espaços aos seus usos
    {
      tipo: "ligar",
      titulo: "Passeio Pela Escola",
      instrucao: "Ligue cada ESPAÇO da escola ao que a gente faz nele.",
      pares: [
        { a: "🏫 SALA DE AULA", b: "👩‍🏫 APRENDER", aImagem: salaAulaImg, bImagem: professoraImg },
        { a: "📚 BIBLIOTECA", b: "📖 LER LIVROS", aImagem: bibliotecaImg, bImagem: livroImg },
        { a: "🍽️ REFEITÓRIO", b: "👩‍🍳 COMER", aImagem: refeitorioImg, bImagem: cozinheiraImg },
        { a: "⚽ QUADRA", b: "🏀 ESPORTES", aImagem: quadraImg, bImagem: bolaPraiaImg },
      ],
    },

    // FASE 1 — Conhecendo os Espaços (escolher figura certa)
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Conhecendo Os Espaços",
      instrucao: "Toque na imagem certa!",
      pergunta: "ONDE lemos livros?",
      opcoes: [
        { nome: "Biblioteca", imagemUrl: bibliotecaImg, rotulo: "📚 BIBLIOTECA" },
        { nome: "Quadra", imagemUrl: quadraImg, rotulo: "⚽ QUADRA" },
        { nome: "Refeitório", imagemUrl: refeitorioImg, rotulo: "🍽️ REFEITÓRIO" },
      ],
      correta: 0,
      acerto: "📚 Isso! A biblioteca é o espaço dos livros.",
      erro: "Lembra: livros ficam guardados na BIBLIOTECA.",
    },

    // FASE 2 — Quem Trabalha Aqui? (ligar profissional ao local)
    {
      tipo: "ligar",
      titulo: "Fase 2 · Quem Trabalha Aqui?",
      instrucao: "Ligue cada PROFISSIONAL ao lugar onde ele trabalha.",
      pares: [
        { a: "👩‍🏫 PROFESSORA", b: "🏫 SALA DE AULA", aImagem: professoraImg, bImagem: salaAulaImg },
        { a: "📚 BIBLIOTECÁRIO", b: "📖 BIBLIOTECA", aImagem: bibliotecarioImg, bImagem: bibliotecaImg },
        { a: "👩‍🍳 COZINHEIRA", b: "🍽️ REFEITÓRIO", aImagem: cozinheiraImg, bImagem: refeitorioImg },
        { a: "🧹 EQUIPE DE LIMPEZA", b: "🏫 ESCOLA", aImagem: limpezaImg, bImagem: escolaImg },
      ],
    },

    // FASE 3 — Atitudes na Escola (selecionar apenas atitudes corretas)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 3 · Atitudes Na Escola",
      instrucao: "Toque APENAS nas atitudes CORRETAS na escola. Cada acerto ilumina uma estrela ⭐.",
      criterio: "Atitude correta 💛",
      opcoes: [
        { nome: "Compartilhar", imagemUrl: compartilharImg, rotulo: "✅ COMPARTILHAR MATERIAIS", correto: true },
        { nome: "Respeitar", imagemUrl: abracoImg, rotulo: "✅ RESPEITAR COLEGAS", correto: true },
        { nome: "Ouvir", imagemUrl: professoraImg, rotulo: "✅ OUVIR O PROFESSOR", correto: true },
        { nome: "Empurrar", imagemUrl: bolaPraiaImg, rotulo: "❌ EMPURRAR COLEGAS", correto: false },
        { nome: "Jogar lixo", imagemUrl: lixeiraImg, rotulo: "❌ JOGAR LIXO NO CHÃO", correto: false },
      ],
      acerto: "⭐ Você iluminou as estrelas da Escola com atitudes boas!",
      erro: "Empurrar e jogar lixo NÃO são atitudes boas. Escolha só as corretas.",
    },

    // FASE 4 — Missão Cooperação (arrastar tarefas de cuidado com a escola)
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Missão Cooperação",
      instrucao:
        "Arraste APENAS as tarefas que ajudam a cuidar da escola pra dentro do CORAÇÃO 💖.",
      pares: [
        { item: "Guardar livros", alvo: "Cuido da escola", itemImagem: livroImg },
        { item: "Organizar cadeiras", alvo: "Cuido da escola", itemImagem: cadeiraImg },
        { item: "Jogar lixo na lixeira", alvo: "Cuido da escola", itemImagem: lixeiraImg },
        { item: "Guardar materiais", alvo: "Cuido da escola", itemImagem: mochilaImg },
      ],
      alvosVisuais: [
        { nome: "Cuido da escola", cor: "#F472B6", imagemUrl: coracaoImg, capacidade: 4 },
      ],
    },

    // FASE 5 — Minha Escola (álbum personalizado)
    {
      tipo: "album",
      titulo: "Fase 5 · Minha Escola",
      instrucao:
        "Monte a SUA escola ideal! O Brilha vai guardar essa lembrança no seu perfil.",
      escolhas: [
        {
          label: "Sua SALA favorita",
          modo: "imagem",
          opcoes: [
            { nome: "Sala de aula", imagemUrl: salaAulaImg, rotulo: "🏫 SALA DE AULA" },
            { nome: "Biblioteca", imagemUrl: bibliotecaImg, rotulo: "📚 BIBLIOTECA" },
            { nome: "Pátio", imagemUrl: patioImg, rotulo: "🎨 PÁTIO" },
            { nome: "Quadra", imagemUrl: quadraImg, rotulo: "⚽ QUADRA" },
          ],
        },
        {
          label: "Sua ATIVIDADE favorita",
          modo: "imagem",
          opcoes: [
            { nome: "Ler livros", imagemUrl: livroImg, rotulo: "📖 LER" },
            { nome: "Desenhar", imagemUrl: lapisImg, rotulo: "✏️ DESENHAR" },
            { nome: "Esportes", imagemUrl: bolaPraiaImg, rotulo: "🏀 ESPORTES" },
            { nome: "Brincar", imagemUrl: criancasImg, rotulo: "🧒 BRINCAR" },
          ],
        },
        {
          label: "Pessoa que MAIS ajuda na escola",
          modo: "imagem",
          opcoes: [
            { nome: "Professora", imagemUrl: professoraImg, rotulo: "👩‍🏫 PROFESSORA" },
            { nome: "Bibliotecário", imagemUrl: bibliotecarioImg, rotulo: "📚 BIBLIOTECÁRIO" },
            { nome: "Cozinheira", imagemUrl: cozinheiraImg, rotulo: "👩‍🍳 COZINHEIRA" },
            { nome: "Equipe de limpeza", imagemUrl: limpezaImg, rotulo: "🧹 LIMPEZA" },
          ],
        },
      ],
      acerto: "🏫 Sua Escola do Brilha está pronta! Essa é a SUA história.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Onde APRENDEMOS na escola?",
        opcoes: ["Sala de aula", "Praia", "Aeroporto"],
        correta: 0,
        explicacao: "Sala de aula é o lugar de aprender.",
        visual: { tipo: "itens", imagemUrl: salaAulaImg, quantidade: 1, rotulo: "🏫" },
      },
      {
        pergunta: "Quem CUIDA dos livros da escola?",
        opcoes: ["Bibliotecário", "Motorista", "Piloto"],
        correta: 0,
        explicacao: "Bibliotecário cuida dos livros.",
        visual: { tipo: "itens", imagemUrl: bibliotecarioImg, quantidade: 1, rotulo: "📚" },
      },
      {
        pergunta: "Onde COMEMOS na escola?",
        opcoes: ["Refeitório", "Biblioteca", "Quadra"],
        correta: 0,
        explicacao: "No refeitório fazemos as refeições.",
        visual: { tipo: "itens", imagemUrl: refeitorioImg, quantidade: 1, rotulo: "🍽️" },
      },
    ],
    medio: [
      {
        pergunta: "Quem PREPARA a comida?",
        opcoes: ["A cozinheira", "O professor", "O aluno"],
        correta: 0,
        explicacao: "A cozinheira prepara a alimentação.",
        visual: { tipo: "itens", imagemUrl: cozinheiraImg, quantidade: 1, rotulo: "👩‍🍳" },
      },
      {
        pergunta: "Onde PRATICAMOS esportes?",
        opcoes: ["Quadra", "Biblioteca", "Refeitório"],
        correta: 0,
        explicacao: "Na quadra jogamos e nos movimentamos.",
        visual: { tipo: "itens", imagemUrl: quadraImg, quantidade: 1, rotulo: "⚽" },
      },
      {
        pergunta: "Jogar o lixo na LIXEIRA é uma atitude:",
        opcoes: ["Boa — cuida da escola", "Ruim", "Sem importância"],
        correta: 0,
        explicacao: "Cuidar da limpeza é respeitar todo mundo.",
        visual: { tipo: "itens", imagemUrl: lixeiraImg, quantidade: 1, rotulo: "🗑️" },
      },
    ],
    dificil: [
      {
        pergunta: "COOPERAR na escola significa:",
        opcoes: ["Ajudar uns aos outros", "Brigar", "Ficar parado"],
        correta: 0,
        explicacao: "Cooperar é ajudar em conjunto.",
        visual: { tipo: "itens", imagemUrl: ajudarImg, quantidade: 1, rotulo: "🤝" },
      },
      {
        pergunta: "RESPEITAR o professor mostra que:",
        opcoes: ["Valorizamos quem nos ensina", "Estamos com sono", "Não queremos aprender"],
        correta: 0,
        explicacao: "Respeitar é reconhecer o valor do outro.",
        visual: { tipo: "itens", imagemUrl: professoraImg, quantidade: 1, rotulo: "👩‍🏫" },
      },
      {
        pergunta: "A escola faz parte da sua HISTÓRIA porque:",
        opcoes: [
          "É onde aprendemos e vivemos momentos importantes",
          "Só serve pra passar o tempo",
          "Não faz diferença",
        ],
        correta: 0,
        explicacao: "Na escola construímos memórias e aprendizados.",
        visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Estrelas Da Escola",
    objetivo:
      "Os objetos aparecem rapidamente! Toque APENAS naqueles que pertencem à ESCOLA. Cada acerto recupera uma estrela ⭐.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Livro", imagemUrl: livroImg, rotulo: "📖 LIVRO" },
      { nome: "Mochila", imagemUrl: mochilaImg, rotulo: "🎒 MOCHILA" },
      { nome: "Lápis", imagemUrl: lapisImg, rotulo: "✏️ LÁPIS" },
      { nome: "Cadeira", imagemUrl: cadeiraImg, rotulo: "🪑 CADEIRA" },
      { nome: "Lixeira", imagemUrl: lixeiraImg, rotulo: "🗑️ LIXEIRA" },
      { nome: "Estrela", imagemUrl: estrelaImg, rotulo: "⭐ ESTRELA" },
    ],
    distratores: [
      { nome: "Bola de praia", imagemUrl: bolaPraiaImg, rotulo: "❌ BOLA DE PRAIA" },
      { nome: "Geladeira", imagemUrl: geladeiraImg, rotulo: "❌ GELADEIRA" },
    ],
    acerto: "🏆 Você recuperou todas as estrelas — é um verdadeiro AMIGO DA ESCOLA!",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · A Escola De Antigamente",
    instrucao:
      "Converse com um familiar sobre como era a escola quando ele estudava. Depois registre aqui!",
    registros: [
      { label: "Uma DIFERENÇA entre a escola de antigamente e a de hoje", tipo: "texto" },
      { label: "Uma SEMELHANÇA entre elas", tipo: "texto" },
      { label: "O que você MAIS gosta na sua escola", tipo: "texto" },
    ],
    permitirFoto: true,
  },
};

export default aula;
