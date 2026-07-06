import type { Aula } from "../types";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import princesaImg from "@/assets/neuro-treino/objetos/princesa.png";
import heroiImg from "@/assets/neuro-treino/objetos/heroi.png";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import esquiloImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import cachorroImg from "@/assets/neuro-treino/objetos/cachorro.png";
import felizImg from "@/assets/neuro-treino/emocoes/feliz.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";

const aula: Aula = {
  codigo: "EI03EO02",
  ano: "Educação Infantil",
  disciplina: "O Eu, o Outro e o Nós",
  titulo: "Minha Família",

  narrativa: {
    titulo: "A Casa do Brilha",
    contexto:
      "O Brilha voltou correndo pra casa depois de brincar. Dentro da toca tinha a mamãe esquilo, o papai esquilo, o irmãozinho e até o cachorrinho da família.",
    problema:
      "Mas hoje o Brilha quer contar pra você TODA a família dele — e pedir pra você mostrar a sua também!",
    convite: "Vamos conhecer a família do Brilha e depois falar da sua?",
  },

  conhecimentosPrevios: [
    "Reconhecer os rostos da própria família.",
    "Chamar as pessoas de casa pelo nome ou apelido.",
    "Entender que família é quem cuida da gente.",
  ],

  missao:
    "Descobrir quem faz parte da SUA família e da família do Brilha — e por que família é quem cuida da gente.",

  objetivos: [
    "Identificar pessoas importantes do convívio.",
    "Contar quantas pessoas moram na sua casa.",
    "Reconhecer que existem famílias diferentes.",
    "Perceber os cuidados que a família tem com você.",
  ],

  motivacao:
    "Toda família é diferente — algumas são grandes, outras pequenas. Algumas têm cachorro, outras têm gato. O que importa é o AMOR de quem cuida da gente.",

  explicacao:
    "A FAMÍLIA é o grupo de pessoas que te ama e cuida de você:\n\n• Pode ter mamãe, papai, irmãos, avós.\n• Pode ter só um adulto ou vários.\n• Pode ter primos, tios, padrinhos.\n• Até bichinhos de estimação fazem parte!\n\nCada família tem o SEU jeito — e todo jeito é válido, desde que tenha amor.",

  explicacoesNiveis: {
    nivel1: "Família é quem te ama e cuida de você.",
    nivel2: "Na casa do Brilha moram 4: mamãe, papai, irmão e o cachorro.",
    nivel3: "Toda família é diferente — igual o desenho da sua casa.",
    nivel4: "Na hora do jantar você senta com quem? Essa é sua família.",
  },

  exemploResolvido: {
    enunciado:
      "Toque em cada membro da família do Brilha e conte quantos são.",
    passos: [
      "Toque na mamãe, no papai, no irmãozinho e no cachorrinho.",
      "Conte em voz alta: 1, 2, 3, 4.",
      "A família do Brilha tem 4 integrantes!",
    ],
    resposta: "4 integrantes — mamãe, papai, irmão e cachorro.",
    interativo: {
      tipo: "contagem",
      imagemUrl: coracaoImg,
      quantidade: 4,
      nomeItem: "coração",
      nomeItemPlural: "corações",
      pergunta: "Quantos corações moram na casa do Brilha?",
    },
  },

  atividadeGuiada: {
    enunciado:
      "A Dona Coelha quer arrumar a mesa do jantar. Toque em cada pessoa da família dela e conte quantos pratos vão precisar.",
    resposta: "3 pratos — mamãe coelha, papai coelho e o filhotinho.",
    explicacao:
      "Contar quantas pessoas moram em casa ajuda a gente a se organizar: quantos pratos, quantas camas, quantas escovas de dente.",
    visual: {
      tipo: "grupos",
      pergunta:
        "Toque em cada membro da família e conte quantos pratos a Dona Coelha vai colocar.",
      imagemUrl: coracaoImg,
      itemSingular: "prato",
      itemPlural: "pratos",
      quantidadeGrupos: 1,
      itensPorGrupo: 3,
      opcoes: [2, 3, 4],
      correta: 1,
    },
  },

  exercicios: [
    {
      enunciado:
        "🏠 Onde a família mora junto?",
      resposta: "Na casa — o lugar onde a gente se sente seguro.",
      dica: "Toque na figura da casa.",
    },
    {
      enunciado:
        "❤️ O que a família dá pra gente todo dia?",
      resposta: "Amor, comida, cuidado e carinho.",
      dica: "Escolha o coração.",
    },
    {
      enunciado:
        "🐶 O cachorrinho pode ser da família?",
      resposta: "Pode SIM! Bichinhos de estimação também são família.",
      dica: "Se ele mora com você, ele conta.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: monte a família do Brilha! Quantos moram na casa dele e o que a família dá pra ele?",
    resposta:
      "4 moram na casa (mamãe, papai, irmão, cachorro) e a família dá AMOR.",
    visual: {
      cena: [
        { personagem: "Mamãe", itemImagemUrl: princesaImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Papai", itemImagemUrl: heroiImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Irmãozinho", itemImagemUrl: ursinhoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Cachorrinho", itemImagemUrl: cachorroImg, quantidade: 1, cor: "#FB923C" },
      ],
      perguntas: [
        {
          pergunta: "Quantos moram na casa do Brilha?",
          opcoes: ["2", "3", "4"],
          correta: 2,
          explicacao: "São 4: mamãe, papai, irmão e cachorrinho.",
        },
        {
          pergunta: "O cachorro faz parte da família?",
          opcoes: ["Sim", "Não"],
          correta: 0,
          explicacao: "Sim! Bichinhos que moram com a gente são família.",
        },
        {
          pergunta: "O que a família dá todo dia?",
          opcoes: ["Amor", "Brinquedo novo", "Dinheiro"],
          correta: 0,
          explicacao: "O mais importante é o AMOR — mostrado no coração.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Família é quem cuida da gente com amor.",
      "Cada família é diferente — não existe família 'certa'.",
      "Bichinhos de estimação também fazem parte.",
      "Contar quem mora na sua casa ajuda a se organizar.",
    ],
    dica: "Antes de dormir, dê um abraço em quem mora com você.",
  },

  quiz: [
    {
      pergunta: "Quem cuida de você em casa?",
      opcoes: ["Sua família", "Um estranho", "O vento"],
      correta: 0,
      explicacao: "A família é quem cuida da gente.",
    },
    {
      pergunta: "Toque na CASA — o lugar onde a família mora.",
      opcoes: ["Casa", "Bolo", "Coração"],
      correta: 0,
      explicacao: "A casa é onde a família mora junta.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" },
          { imagemUrl: boloImg, quantidade: 1, rotulo: "Bolo" },
          { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" },
        ],
      },
    },
    {
      pergunta: "Quantos corações têm nessa família de 3?",
      opcoes: ["1", "2", "3"],
      correta: 2,
      explicacao: "Cada pessoa tem um coração cheio de amor — são 3.",
      visual: {
        tipo: "itens",
        imagemUrl: coracaoImg,
        quantidade: 3,
        rotulo: "Corações da família",
      },
    },
    {
      pergunta: "Bichinho de estimação é família?",
      opcoes: ["Sim", "Não", "Só o cachorro"],
      correta: 0,
      explicacao: "SIM — todo bicho que mora com a gente é família.",
    },
  ],

  conclusao:
    "🏅 Adesivo de Coração conquistado! Você aprendeu que família é quem te ama. Missão em Casa: desenhe (ou aponte) todo mundo que mora com você e conte quantos são.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Existem famílias com 2 pessoas, com 10 pessoas, com avó, sem avó, com dois pais, com uma mãe... Nenhuma é 'mais família' que outra. TODAS têm amor.",
  },

  interativas: [
    {
      tipo: "arrastar",
      titulo: "Fase 1 · Quem mora na casa do Brilha?",
      instrucao: "Arraste cada pessoa/bichinho pra dentro da casa.",
      pares: [
        { item: "Mamãe", alvo: "Casa", itemImagem: princesaImg },
        { item: "Papai", alvo: "Casa", itemImagem: heroiImg },
        { item: "Irmão", alvo: "Casa", itemImagem: ursinhoImg },
        { item: "Cachorrinho", alvo: "Casa", itemImagem: cachorroImg },
      ],
      alvosVisuais: [{ nome: "Casa", cor: "#60A5FA", capacidade: 4, imagemUrl: casaImg }],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Quantos corações na família?",
      instrucao: "Cada pessoa tem 1 coração. Conte os corações.",
      grupos: [{ imagemUrl: coracaoImg, quantidade: 4, rotulo: "Família do Brilha" }],
      pergunta: "Quantos corações moram na casa?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "Isso! 4 corações cheios de amor.",
      erro: "Aponte um coração por vez.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Quem gosta do quê?",
      instrucao: "Ligue cada pessoa da família ao que ela adora.",
      pares: [
        { a: "Mamãe", b: "Bolo", aImagem: princesaImg, aQuantidade: 1, bImagem: boloImg, bQuantidade: 1 },
        { a: "Papai", b: "Presente", aImagem: heroiImg, aQuantidade: 1, bImagem: presenteImg, bQuantidade: 1 },
        { a: "Irmão", b: "Ursinho", aImagem: ursinhoImg, aQuantidade: 1, bImagem: ursinhoImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Toque na CASA.",
        opcoes: ["Casa", "Coração", "Bolo"],
        correta: 0,
        explicacao: "A casa é o lugar da família.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" },
            { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" },
            { imagemUrl: boloImg, quantidade: 1, rotulo: "Bolo" },
          ],
        },
      },
      {
        pergunta: "Quantos moram nesta família?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "3 pessoas moram juntas.",
        visual: {
          tipo: "itens",
          imagemUrl: coracaoImg,
          quantidade: 3,
          rotulo: "Família de 3",
        },
      },
    ],
    medio: [
      {
        pergunta:
          "O gatinho da Dona Coelha mora com ela. Ele é da família?",
        opcoes: ["Sim", "Não"],
        correta: 0,
        explicacao: "Sim — bichos que moram com a gente são família.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "Gatinho" },
            { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Amor" },
          ],
        },
      },
      {
        pergunta: "Uma família tem 2 crianças e 2 adultos. Quantos são?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "2 + 2 = 4 pessoas.",
        visual: {
          tipo: "itens",
          imagemUrl: coracaoImg,
          quantidade: 4,
          rotulo: "Família de 4",
        },
      },
    ],
    dificil: [
      {
        pergunta:
          "Na casa do Brilha tem mamãe, papai, irmão e o cachorro. Quantos são ao todo?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "4 no total, contando o cachorrinho.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: princesaImg, quantidade: 1, rotulo: "Mamãe" },
            { imagemUrl: heroiImg, quantidade: 1, rotulo: "Papai" },
            { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "Irmão" },
            { imagemUrl: cachorroImg, quantidade: 1, rotulo: "Cachorrinho" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EI03EO03",
    titulo: "Conviver e brincar com amigos",
  },
};

void esquiloImg;
void felizImg;

export default aula;
