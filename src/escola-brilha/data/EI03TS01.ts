import type { Aula } from "../types";
import tamborImg from "@/assets/neuro-treino/objetos/tambor.png";
import chocalhoImg from "@/assets/neuro-treino/objetos/chocalho.png";
import palmasImg from "@/assets/neuro-treino/sentidos/palmas.png";
import cachorroImg from "@/assets/neuro-treino/objetos/cachorro.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import galoImg from "@/assets/neuro-treino/objetos/galo.png";
import sapoImg from "@/assets/neuro-treino/objetos/sapo.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";

/**
 * EI03TS01 — Traços, Sons, Cores e Formas
 * Aula 1: Sons que a gente cria
 */
const aula: Aula = {
  codigo: "EI03TS01",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Sons que a Gente Cria",

  narrativa: {
    titulo: "A floresta ficou muda",
    contexto: "Na floresta, o vento parou e nenhum som se ouve. Nem passarinho, nem sapo, nem tambor.",
    problema: "Pra devolver a MÚSICA da floresta, a gente precisa descobrir os sons dos objetos, das mãos e dos animais.",
    convite: "Vamos fazer barulho pra floresta acordar?",
  },

  conhecimentosPrevios: ["Já ouviu música.", "Sabe bater palma.", "Reconhece som de cachorro e gato."],

  missao: "Descobrir que TUDO faz som — objetos, o corpo e os animais — e usar esses sons pra brincar.",

  objetivos: [
    "Reconhecer sons de objetos e instrumentos.",
    "Produzir sons com o corpo (palma, pé, boca).",
    "Imitar sons de animais em brincadeiras.",
  ],

  explicacao: "SOM é tudo que a gente OUVE.\n\n• O TAMBOR faz TUM-TUM.\n• O CHOCALHO faz TCHIC-TCHIC.\n• As PALMAS fazem PLAF-PLAF.\n• O CACHORRO faz AU-AU.\n• O GATO faz MIAU.\n\nA gente pode brincar de fazer música com qualquer coisa: uma panela, uma lata, as mãos, os pés — tudo vira instrumento!",

  explicacaoAtiva: [
    { texto: "Olha o tambor! Bate nele: TUM-TUM-TUM!", imagem: tamborImg, imagemAlt: "Tambor" },
    { texto: "O chocalho balança e faz TCHIC-TCHIC.", imagem: chocalhoImg, imagemAlt: "Chocalho" },
    {
      texto: "E as suas mãos? Batem palma bem alto!",
      imagem: palmasImg,
      imagemAlt: "Mãos batendo palma",
      checagem: {
        pergunta: "Qual faz TUM-TUM quando a gente bate?",
        opcoes: ["Tambor", "Chocalho"],
        correta: 0,
        explicacao: "Isso! O tambor faz TUM-TUM grave.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Som é tudo que a gente ouve.",
    nivel2: "O tambor faz TUM, o chocalho faz TCHIC, a palma faz PLAF.",
    nivel3: "Cada coisa tem um som diferente — como cada pessoa tem uma voz.",
    nivel4: "Quando a gente junta vários sons no ritmo certo, vira MÚSICA.",
  },

  exemploResolvido: {
    enunciado: "Vamos contar os tambores da bandinha!",
    passos: ["Toque no primeiro tambor.", "Toque no segundo.", "Toque no terceiro. 1, 2, 3 tambores!"],
    resposta: "São 3 tambores prontos pra tocar TUM-TUM-TUM.",
    interativo: { tipo: "contagem", imagemUrl: tamborImg, quantidade: 3, nomeItem: "tambor", nomeItemPlural: "tambores", pergunta: "Quantos tambores estão na bandinha?" },
  },

  atividadeGuiada: {
    enunciado: "Qual instrumento faz TCHIC-TCHIC quando a gente balança?",
    resposta: "O chocalho.",
    explicacao: "O chocalho tem sementinhas dentro — quando balança, fazem TCHIC-TCHIC.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual faz TCHIC-TCHIC?",
      opcoes: [
        { nome: "Chocalho", imagemUrl: chocalhoImg },
        { nome: "Tambor", imagemUrl: tamborImg },
        { nome: "Palmas", imagemUrl: palmasImg },
      ],
      respostaCerta: "Chocalho",
    },
  },

  exercicios: [
    { enunciado: "🐶 Que som o cachorro faz?", resposta: "AU-AU!", dica: "Imita agora." },
    { enunciado: "🐔 E o galo, de manhã cedo?", resposta: "CÓ-CÓ-RI-CÓ!", dica: "Faz bem alto!" },
    { enunciado: "🖐️ Como a gente faz som SÓ com as mãos?", resposta: "Batendo palma.", dica: "PLAF-PLAF!" },
  ],

  desafio: {
    enunciado: "Desafio Brilha: cada bichinho tem seu som. Descubra quem faz cada barulho.",
    resposta: "Cachorro AU-AU, gato MIAU, galo CÓ-CÓ.",
    visual: {
      cena: [
        { personagem: "Cachorro", itemImagemUrl: cachorroImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Gato", itemImagemUrl: gatoImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Galo", itemImagemUrl: galoImg, quantidade: 1, cor: "#F87171" },
      ],
      perguntas: [
        { pergunta: "Quem faz AU-AU?", opcoes: ["Cachorro", "Gato"], correta: 0, explicacao: "O cachorro late AU-AU." },
        { pergunta: "Quem faz MIAU?", opcoes: ["Galo", "Gato"], correta: 1, explicacao: "O gato mia MIAU." },
        { pergunta: "Quem canta de manhã CÓ-CÓ-RI-CÓ?", opcoes: ["Galo", "Cachorro"], correta: 0, explicacao: "O galo canta cedo pra acordar todo mundo." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Tudo pode fazer som.",
      "O corpo é um instrumento (palma, pé, boca).",
      "Cada animal tem seu som.",
      "Vários sons juntos viram música.",
    ],
    dica: "Em casa: bata em uma panela e escute o som!",
  },

  quiz: [
    { pergunta: "Qual faz TUM-TUM?", opcoes: ["Tambor", "Chocalho"], correta: 0, explicacao: "O tambor é grave.", visual: { tipo: "itens", imagemUrl: tamborImg, quantidade: 1, rotulo: "Tambor" } },
    { pergunta: "Qual bicho faz COAX-COAX?", opcoes: ["Sapo", "Passarinho"], correta: 0, explicacao: "O sapo coaxa perto da lagoa.", visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "Sapo" } },
    { pergunta: "Quantas palmas você bate com 2 mãos?", opcoes: ["1", "2"], correta: 1, explicacao: "Cada mão bate uma vez — juntas fazem 1 palma, mas usam 2 mãos.", visual: { tipo: "itens", imagemUrl: palmasImg, quantidade: 2, rotulo: "Mãos" } },
  ],

  conclusao: "🏅 Você trouxe os SONS de volta pra floresta! Missão em Casa: bata palma no ritmo de uma música e chame a família pra dançar.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Os pássaros cantam de manhã pra dizer 'oi' uns pros outros — cada espécie tem uma canção diferente!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantos tambores?", instrucao: "Toque em cada tambor.", grupos: [{ imagemUrl: tamborImg, quantidade: 3, rotulo: "Tambores" }], pergunta: "Quantos tambores?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Isso! 3 tambores.", erro: "Conte: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Quantos chocalhos?", instrucao: "Toque em cada chocalho.", grupos: [{ imagemUrl: chocalhoImg, quantidade: 2, rotulo: "Chocalhos" }], pergunta: "Quantos chocalhos?", opcoes: ["1", "2", "3"], correta: 1, acerto: "Muito bem! 2 chocalhos.", erro: "Um, dois — são 2." },
    { tipo: "ligar", titulo: "Fase 3 · Som certo pra cada bicho", instrucao: "Ligue o bicho ao som dele.", pares: [
      { a: "Cachorro", b: "AU-AU", aImagem: cachorroImg, aQuantidade: 1 },
      { a: "Gato", b: "MIAU", aImagem: gatoImg, aQuantidade: 1 },
      { a: "Sapo", b: "COAX", aImagem: sapoImg, aQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Cada som no instrumento", instrucao: "Toque na estrela e depois no instrumento certo.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "Tambor", cor: "#F87171", capacidade: 1, imagemUrl: tamborImg },
      { nome: "Chocalho", cor: "#A78BFA", capacidade: 1, imagemUrl: chocalhoImg },
      { nome: "Palmas", cor: "#F472B6", capacidade: 1, imagemUrl: palmasImg },
    ], pares: [
      { item: "TUM-TUM", alvo: "Tambor" },
      { item: "TCHIC-TCHIC", alvo: "Chocalho" },
      { item: "PLAF-PLAF", alvo: "Palmas" },
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual bicho faz AU-AU?", opcoes: ["Cachorro", "Passarinho"], correta: 0, explicacao: "Cachorro late.", visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "Cachorro" } },
      { pergunta: "Qual bicho faz MIAU?", opcoes: ["Gato", "Sapo"], correta: 0, explicacao: "Gato mia.", visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "Gato" } },
    ],
    medio: [
      { pergunta: "Qual instrumento a gente BALANÇA pra fazer som?", opcoes: ["Chocalho", "Tambor"], correta: 0, explicacao: "Chocalho balança.", visual: { tipo: "itens", imagemUrl: chocalhoImg, quantidade: 1, rotulo: "Chocalho" } },
      { pergunta: "Qual instrumento a gente BATE?", opcoes: ["Tambor", "Chocalho"], correta: 0, explicacao: "Tambor bate.", visual: { tipo: "itens", imagemUrl: tamborImg, quantidade: 1, rotulo: "Tambor" } },
    ],
    dificil: [
      { pergunta: "Vários sons juntos, no ritmo, viram o quê?", opcoes: ["Música", "Silêncio"], correta: 0, explicacao: "Sons + ritmo = música!", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Música alegre" } },
      { pergunta: "O corpo pode ser instrumento?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Palma, pé no chão, boca — tudo faz som.", visual: { tipo: "itens", imagemUrl: palmasImg, quantidade: 2, rotulo: "Palmas" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03TS02", titulo: "Desenhar, pintar e criar" },
};

void passaroImg;

export default aula;
