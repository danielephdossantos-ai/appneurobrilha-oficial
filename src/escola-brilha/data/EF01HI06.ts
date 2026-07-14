import type { Aula } from "../types";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as familiaImg } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as familiaGrandeImg } from "@/assets/neuro-treino/objetos/familia-grande.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as paiImg } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as tiaImg } from "@/assets/neuro-treino/objetos/tia.png.asset.json";
import { url as avoHomemImg } from "@/assets/neuro-treino/objetos/avo-homem.png.asset.json";
import { url as avoMulherImg } from "@/assets/neuro-treino/objetos/avo-mulher.png.asset.json";
import { url as professoraImg } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as bibliotecarioImg } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as cozinheiraImg } from "@/assets/neuro-treino/objetos/cozinheira.png.asset.json";
import { url as faxineiroImg } from "@/assets/neuro-treino/objetos/funcionario-limpeza.png.asset.json";
import { url as cozinheiroFamiliaImg } from "@/assets/neuro-treino/objetos/cozinheiro-familia.png.asset.json";
import { url as salaImg } from "@/assets/neuro-treino/objetos/sala-aula.png.asset.json";
import { url as bibliotecaImg } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as refeitorioImg } from "@/assets/neuro-treino/objetos/refeitorio.png.asset.json";
import { url as patioImg } from "@/assets/neuro-treino/objetos/patio-escola.png.asset.json";
import { url as criancasImg } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * EF01HI06 — História · 1º Ano
 * Missão: "Cada Um Tem Sua História".
 * Conhecer as histórias da família e da escola e identificar o papel
 * desempenhado por diferentes sujeitos em diferentes espaços.
 */
const aula: Aula = {
  codigo: "EF01HI06",
  ano: "1º Ano",
  disciplina: "História",
  titulo: "Cada Um Tem Sua História",

  narrativa: {
    titulo: "O Álbum Das Histórias",
    contexto:
      "Brilha ganhou um ÁLBUM MÁGICO 📖✨ de presente da Coruja Sábia. Cada página conta a história de uma pessoa da FAMÍLIA ou da ESCOLA.",
    problema:
      "A Coruja explicou: 'Cada pessoa tem uma HISTÓRIA e um PAPEL — em casa, na escola e na comunidade. Ajude o Brilha a descobrir o que cada uma faz e por que é importante!'",
    convite: "Bora abrir o álbum e conhecer a história de cada um?",
  },

  conhecimentosPrevios: [
    "Reconhecer familiares próximos (mãe, pai, avós, tios).",
    "Reconhecer pessoas que trabalham na escola.",
  ],

  missao:
    "Reconhecer que cada pessoa tem uma história e um papel importante nos espaços em que convive — em casa, na escola e na comunidade.",

  objetivos: [
    "Conhecer histórias e papéis de familiares.",
    "Identificar profissionais que fazem a escola funcionar.",
    "Perceber que cada pessoa contribui de um jeito.",
    "Valorizar a história dos mais velhos.",
    "Respeitar o papel de cada um.",
  ],

  motivacao:
    "Cada pessoa é como uma ESTRELA — brilha do seu jeito e ajuda o mundo a funcionar. ⭐",

  explicacao:
    "👨‍👩‍👧 Na FAMÍLIA cada um tem um papel: cuidar, ensinar, brincar, ajudar.\n🏫 Na ESCOLA a professora ensina, o bibliotecário cuida dos livros, a cozinheira prepara a merenda.\n🏘️ Na COMUNIDADE existem vizinhos, comerciantes e amigos.\n📖 Todos têm uma HISTÓRIA que vale a pena conhecer.\n💛 Respeitar o papel do outro é respeitar a história dele.",

  explicacoesNiveis: {
    nivel1: "Cada pessoa tem uma história pra contar.",
    nivel2: "Em casa e na escola, cada um tem uma função.",
    nivel3: "Todas as funções são importantes.",
    nivel4: "Escutar quem tem mais experiência ajuda a aprender.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha viu a AVÓ cozinhando enquanto contava uma história antiga. Qual é o papel dela nesse momento?",
    passos: [
      "A avó está fazendo comida — CUIDA.",
      "Ela também está contando uma história — ENSINA.",
      "Ela ajuda a família de duas formas ao mesmo tempo.",
    ],
    resposta: "👵 A avó CUIDA e ENSINA — e a história dela é um presente!",
  },

  atividadeGuiada: {
    enunciado: "Quem ENSINA na escola?",
    resposta: "👩‍🏫 A PROFESSORA!",
    explicacao:
      "A professora tem o papel de ensinar. Cada dia ela mostra algo novo pras crianças.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Quem tem o papel de ENSINAR na escola?",
      opcoes: [
        { nome: "professora", imagemUrl: professoraImg },
        { nome: "cozinheira", imagemUrl: cozinheiraImg },
        { nome: "faxineiro", imagemUrl: faxineiroImg },
      ],
      respostaCerta: "professora",
    },
  },

  exercicios: [
    {
      enunciado: "Quem CUIDA e prepara a comida em casa costuma ser:",
      resposta: "👨‍🍳 Alguém da FAMÍLIA (mãe, pai, avô, avó, tio).",
      dica: "Pense em quem prepara a comida na sua casa.",
    },
    {
      enunciado: "Quem CUIDA dos livros na escola?",
      resposta: "📚 O BIBLIOTECÁRIO.",
      dica: "Fica na biblioteca, onde ficam os livros.",
    },
    {
      enunciado: "Quem faz a MERENDA na escola?",
      resposta: "🍎 A COZINHEIRA.",
      dica: "Trabalha no refeitório preparando a comida.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra o papel de cada um!",
    resposta: "Cada pessoa tem uma função importante.",
    visual: {
      perguntas: [
        {
          pergunta: "Quem ENSINA na sala de aula?",
          opcoes: ["Professora", "Cozinheira", "Motorista"],
          correta: 0,
          explicacao: "A professora ensina as crianças todos os dias.",
          visual: { tipo: "itens", imagemUrl: professoraImg, quantidade: 1, rotulo: "👩‍🏫" },
        },
        {
          pergunta: "Quem CUIDA da criança em casa?",
          opcoes: ["A família", "Ninguém", "A televisão"],
          correta: 0,
          explicacao: "Os familiares cuidam com carinho.",
          visual: { tipo: "itens", imagemUrl: familiaImg, quantidade: 1, rotulo: "👨‍👩‍👧" },
        },
        {
          pergunta: "Quem CONTA histórias antigas?",
          opcoes: ["Os avós", "O relógio", "A parede"],
          correta: 0,
          explicacao: "Os avós guardam muitas histórias pra contar.",
          visual: { tipo: "itens", imagemUrl: avoMulherImg, quantidade: 1, rotulo: "👵" },
        },
        {
          pergunta: "Quem PREPARA a merenda?",
          opcoes: ["A cozinheira", "A professora", "O aluno"],
          correta: 0,
          explicacao: "A cozinheira faz a comida com carinho no refeitório.",
          visual: { tipo: "itens", imagemUrl: cozinheiraImg, quantidade: 1, rotulo: "👩‍🍳" },
        },
        {
          pergunta: "Todos os papéis são importantes?",
          opcoes: ["Sim!", "Só o do professor", "Não"],
          correta: 0,
          explicacao: "Cada pessoa contribui do seu jeito.",
          visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "⭐" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "👨‍👩‍👧 Na família cada um tem um papel.",
      "🏫 Na escola cada profissional ajuda de um jeito.",
      "👵 Os mais velhos guardam muitas histórias.",
      "🤝 Respeitar o papel do outro é importante.",
      "⭐ Todos brilham juntos.",
    ],
    dica: "Pergunte à sua família: qual é a história favorita deles?",
  },

  quiz: [
    {
      pergunta: "Cada pessoa tem uma história?",
      opcoes: ["Sim", "Não", "Só os adultos"],
      correta: 0,
      explicacao: "Toda pessoa tem uma história — inclusive você!",
      visual: { tipo: "itens", imagemUrl: familiaGrandeImg, quantidade: 1, rotulo: "📖" },
    },
    {
      pergunta: "Na escola, quem ENSINA?",
      opcoes: ["A professora", "A merendeira", "O porteiro"],
      correta: 0,
      explicacao: "A professora tem o papel de ensinar.",
      visual: { tipo: "itens", imagemUrl: professoraImg, quantidade: 1, rotulo: "👩‍🏫" },
    },
    {
      pergunta: "Em casa, os AVÓS costumam:",
      opcoes: ["Contar histórias e cuidar", "Ir pra escola", "Ficar longe"],
      correta: 0,
      explicacao: "Os avós ensinam com histórias e carinho.",
      visual: { tipo: "itens", imagemUrl: avoHomemImg, quantidade: 1, rotulo: "👴" },
    },
    {
      pergunta: "Respeitar o papel dos outros é:",
      opcoes: ["Muito importante", "Bobagem", "Só às vezes"],
      correta: 0,
      explicacao: "Cada função ajuda o grupo a funcionar.",
      visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "🤝" },
    },
    {
      pergunta: "Hoje aprendemos sobre:",
      opcoes: [
        "As histórias e os papéis de cada um",
        "Só sobre brinquedos",
        "Só sobre comida",
      ],
      correta: 0,
      explicacao: "Cada pessoa tem uma história e um papel.",
      visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🦉" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Contador de Histórias! 📖 Item desbloqueado: Álbum das Histórias do Brilha.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Toda vez que alguém conta uma história, ela vira parte da nossa memória. Perguntar 'como era quando você era criança?' guarda a história da família pra sempre. 📖",
  },

  interativas: [
    // APRENDENDO — lupa com papéis
    {
      tipo: "lupa",
      titulo: "Álbum Das Histórias",
      instrucao: "Toque em cada pessoa pra descobrir a história e o papel dela.",
      itens: [
        {
          nome: "Mãe",
          imagemUrl: maeImg,
          rotulo: "👩 MÃE",
          descoberta: "A mãe cuida, ensina e brinca. Faz parte da história da família.",
        },
        {
          nome: "Pai",
          imagemUrl: paiImg,
          rotulo: "👨 PAI",
          descoberta: "O pai também cuida, ensina e brinca. Cada família é única.",
        },
        {
          nome: "Avó",
          imagemUrl: avoMulherImg,
          rotulo: "👵 AVÓ",
          descoberta: "A avó guarda muitas histórias antigas pra contar.",
        },
        {
          nome: "Avô",
          imagemUrl: avoHomemImg,
          rotulo: "👴 AVÔ",
          descoberta: "O avô ensina com paciência e histórias de quando era jovem.",
        },
        {
          nome: "Professora",
          imagemUrl: professoraImg,
          rotulo: "👩‍🏫 PROFESSORA",
          descoberta: "A professora ensina e cuida das crianças na escola.",
        },
        {
          nome: "Cozinheira",
          imagemUrl: cozinheiraImg,
          rotulo: "👩‍🍳 COZINHEIRA",
          descoberta: "A cozinheira prepara a merenda com carinho.",
        },
      ],
    },

    // FASE 1 — Papel em casa (escolher figura)
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Quem Faz O Quê Em Casa?",
      instrucao: "Quem CONTA histórias antigas da família?",
      pergunta: "Quem CONTA histórias antigas da família?",
      opcoes: [
        { nome: "Avó", imagemUrl: avoMulherImg, rotulo: "👵 AVÓ" },
        { nome: "Professora", imagemUrl: professoraImg, rotulo: "👩‍🏫 PROFESSORA" },
        { nome: "Bibliotecário", imagemUrl: bibliotecarioImg, rotulo: "📚 BIBLIOTECÁRIO" },
      ],
      correta: 0,
      acerto: "👵 Isso! A avó guarda muitas histórias da família.",
      erro: "Quem viveu há mais tempo tem mais histórias antigas pra contar.",
    },

    // FASE 2 — Ligar pessoa ao espaço/papel
    {
      tipo: "ligar",
      titulo: "Fase 2 · Cada Um No Seu Papel",
      instrucao: "Ligue cada pessoa ao espaço onde ela trabalha ou vive.",
      pares: [
        { a: "👩‍🏫 PROFESSORA", b: "🎒 SALA", aImagem: professoraImg, bImagem: salaImg },
        { a: "📚 BIBLIOTECÁRIO", b: "📖 BIBLIOTECA", aImagem: bibliotecarioImg, bImagem: bibliotecaImg },
        { a: "👩‍🍳 COZINHEIRA", b: "🍎 REFEITÓRIO", aImagem: cozinheiraImg, bImagem: refeitorioImg },
        { a: "👨‍👩‍👧 FAMÍLIA", b: "🏠 CASA", aImagem: familiaImg, bImagem: casaImg },
      ],
    },

    // FASE 3 — Selecionar múltiplos: quem cuida de você?
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 3 · Quem Cuida De Você?",
      instrucao:
        "Toque em TODAS as pessoas que podem cuidar de uma criança em diferentes espaços.",
      criterio: "Cuida e ajuda ✅",
      opcoes: [
        { nome: "Mãe", imagemUrl: maeImg, rotulo: "👩 MÃE", correto: true },
        { nome: "Pai", imagemUrl: paiImg, rotulo: "👨 PAI", correto: true },
        { nome: "Tia", imagemUrl: tiaImg, rotulo: "👩‍🦰 TIA", correto: true },
        { nome: "Avó", imagemUrl: avoMulherImg, rotulo: "👵 AVÓ", correto: true },
        { nome: "Professora", imagemUrl: professoraImg, rotulo: "👩‍🏫 PROFESSORA", correto: true },
      ],
      acerto: "💛 Isso! Muita gente ajuda a cuidar de você — cada um do seu jeito.",
      erro: "Todos essas pessoas ajudam a cuidar em algum espaço. Toque em todas!",
    },

    // FASE 4 — Arrastar pessoa pra espaço (casa vs escola)
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Casa Ou Escola?",
      instrucao: "Arraste cada pessoa pro lugar onde ela costuma trabalhar ou viver.",
      pares: [
        { item: "Mãe", alvo: "Casa", itemImagem: maeImg },
        { item: "Avô", alvo: "Casa", itemImagem: avoHomemImg },
        { item: "Cozinheiro família", alvo: "Casa", itemImagem: cozinheiroFamiliaImg },
        { item: "Professora", alvo: "Escola", itemImagem: professoraImg },
        { item: "Bibliotecário", alvo: "Escola", itemImagem: bibliotecarioImg },
        { item: "Faxineiro", alvo: "Escola", itemImagem: faxineiroImg },
      ],
      alvosVisuais: [
        { nome: "Casa", cor: "#F59E0B", imagemUrl: casaImg, capacidade: 3 },
        { nome: "Escola", cor: "#10B981", imagemUrl: escolaImg, capacidade: 3 },
      ],
    },

    // FASE 5 — Álbum: minha história
    {
      tipo: "album",
      titulo: "Fase 5 · Álbum Da Minha História",
      instrucao:
        "Monte o SEU álbum! Escolha quem faz parte da sua história em casa e na escola. Pode marcar MAIS de UMA opção!",
      escolhas: [
        {
          label: "Quem cuida de você em casa?",
          modo: "imagem",
          opcoes: [
            { nome: "Mãe", imagemUrl: maeImg, rotulo: "👩 MÃE" },
            { nome: "Pai", imagemUrl: paiImg, rotulo: "👨 PAI" },
            { nome: "Avó", imagemUrl: avoMulherImg, rotulo: "👵 AVÓ" },
            { nome: "Avô", imagemUrl: avoHomemImg, rotulo: "👴 AVÔ" },
            { nome: "Tia", imagemUrl: tiaImg, rotulo: "👩‍🦰 TIA" },
            { nome: "Família toda", imagemUrl: familiaGrandeImg, rotulo: "👨‍👩‍👧 TODA" },
          ],
        },
        {
          label: "Quem ajuda você na escola?",
          modo: "imagem",
          opcoes: [
            { nome: "Professora", imagemUrl: professoraImg, rotulo: "👩‍🏫 PROFESSORA" },
            { nome: "Bibliotecário", imagemUrl: bibliotecarioImg, rotulo: "📚 BIBLIOTECÁRIO" },
            { nome: "Cozinheira", imagemUrl: cozinheiraImg, rotulo: "👩‍🍳 COZINHEIRA" },
            { nome: "Faxineiro", imagemUrl: faxineiroImg, rotulo: "🧹 FAXINEIRO" },
          ],
        },
        {
          label: "Seu lugar favorito na escola",
          modo: "imagem",
          opcoes: [
            { nome: "Sala de aula", imagemUrl: salaImg, rotulo: "🎒 SALA" },
            { nome: "Biblioteca", imagemUrl: bibliotecaImg, rotulo: "📚 BIBLIOTECA" },
            { nome: "Refeitório", imagemUrl: refeitorioImg, rotulo: "🍎 REFEITÓRIO" },
            { nome: "Pátio", imagemUrl: patioImg, rotulo: "🎨 PÁTIO" },
          ],
        },
      ],
      acerto: "📖 Álbum montado! O Brilha guardou sua história com carinho.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Quem ENSINA na escola?",
        opcoes: ["Professora", "Motorista", "Aluno"],
        correta: 0,
        explicacao: "A professora tem o papel de ensinar.",
        visual: { tipo: "itens", imagemUrl: professoraImg, quantidade: 1, rotulo: "👩‍🏫" },
      },
      {
        pergunta: "Quem CUIDA em casa?",
        opcoes: ["A família", "A televisão", "A rua"],
        correta: 0,
        explicacao: "A família cuida com carinho.",
        visual: { tipo: "itens", imagemUrl: familiaImg, quantidade: 1, rotulo: "👨‍👩‍👧" },
      },
      {
        pergunta: "Quem faz a MERENDA?",
        opcoes: ["A cozinheira", "A professora", "O aluno"],
        correta: 0,
        explicacao: "A cozinheira trabalha no refeitório.",
        visual: { tipo: "itens", imagemUrl: cozinheiraImg, quantidade: 1, rotulo: "👩‍🍳" },
      },
    ],
    medio: [
      {
        pergunta: "Quem CONTA histórias antigas?",
        opcoes: ["Os avós", "A parede", "O relógio"],
        correta: 0,
        explicacao: "Os avós guardam histórias.",
        visual: { tipo: "itens", imagemUrl: avoMulherImg, quantidade: 1, rotulo: "👵" },
      },
      {
        pergunta: "Onde o BIBLIOTECÁRIO trabalha?",
        opcoes: ["Na biblioteca", "Na cozinha", "No pátio"],
        correta: 0,
        explicacao: "Ele cuida dos livros na biblioteca.",
        visual: { tipo: "itens", imagemUrl: bibliotecaImg, quantidade: 1, rotulo: "📚" },
      },
      {
        pergunta: "Cada pessoa tem:",
        opcoes: ["Uma história e um papel", "Nada importante", "Só um brinquedo"],
        correta: 0,
        explicacao: "Todos brilham do seu jeito.",
        visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "⭐" },
      },
    ],
    dificil: [
      {
        pergunta: "Respeitar o papel do outro é:",
        opcoes: ["Muito importante", "Bobagem", "Chato"],
        correta: 0,
        explicacao: "Respeitar mantém o grupo unido.",
        visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "🤝" },
      },
      {
        pergunta: "Perguntar aos mais velhos ajuda a:",
        opcoes: ["Conhecer a história da família", "Perder tempo", "Brigar"],
        correta: 0,
        explicacao: "Eles guardam as memórias.",
        visual: { tipo: "itens", imagemUrl: avoHomemImg, quantidade: 1, rotulo: "👴" },
      },
      {
        pergunta: "Na comunidade existem:",
        opcoes: ["Vizinhos, amigos e profissionais", "Só uma pessoa", "Ninguém"],
        correta: 0,
        explicacao: "Muita gente forma a comunidade.",
        visual: { tipo: "itens", imagemUrl: familiaGrandeImg, quantidade: 1, rotulo: "👨‍👩‍👧" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Caça Aos Papéis",
    objetivo:
      "Missão: encontre APENAS pessoas que ajudam na ESCOLA! Cada acerto acende uma estrela do álbum ⭐.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Professora", imagemUrl: professoraImg, rotulo: "👩‍🏫 PROFESSORA" },
      { nome: "Bibliotecário", imagemUrl: bibliotecarioImg, rotulo: "📚 BIBLIOTECÁRIO" },
      { nome: "Cozinheira", imagemUrl: cozinheiraImg, rotulo: "👩‍🍳 COZINHEIRA" },
      { nome: "Faxineiro", imagemUrl: faxineiroImg, rotulo: "🧹 FAXINEIRO" },
    ],
    distratores: [
      { nome: "Mãe", imagemUrl: maeImg, rotulo: "❌ MÃE (é da família)" },
      { nome: "Avô", imagemUrl: avoHomemImg, rotulo: "❌ AVÔ (é da família)" },
    ],
    acerto: "🏆 Álbum brilhando! Você é um verdadeiro CONTADOR DE HISTÓRIAS.",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Uma História Que Vale Ouro",
    instrucao:
      "Peça pra um familiar contar uma história especial da vida dele. Depois registre aqui com carinho!",
    registros: [
      { label: "Quem contou a história?", tipo: "texto" },
      { label: "Sobre o que era a história?", tipo: "texto" },
      { label: "O que você aprendeu com ela?", tipo: "texto" },
    ],
    permitirFoto: true,
  },
};

export default aula;
