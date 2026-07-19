import type { AulaArteV1 } from "../../types";
import __asset_vocabSombra from "@/assets/arte-2ano/u5-vocab-sombra.jpg.asset.json";
const vocabSombra = __asset_vocabSombra.url;
import __asset_vocabSilhueta from "@/assets/arte-2ano/u5-vocab-silhueta.jpg.asset.json";
const vocabSilhueta = __asset_vocabSilhueta.url;
import __asset_vocabTela from "@/assets/arte-2ano/u5-vocab-tela.jpg.asset.json";
const vocabTela = __asset_vocabTela.url;
import __asset_vocabPersonagem from "@/assets/arte-2ano/u5-vocab-personagem.jpg.asset.json";
const vocabPersonagem = __asset_vocabPersonagem.url;
import __asset_pigDragao from "@/assets/arte-2ano/u5-pig-dragao.jpg.asset.json";
const pigDragao = __asset_pigDragao.url;
import __asset_pigPrincesa from "@/assets/arte-2ano/u5-pig-princesa.jpg.asset.json";
const pigPrincesa = __asset_pigPrincesa.url;
import __asset_pigArvore from "@/assets/arte-2ano/u5-pig-arvore.jpg.asset.json";
const pigArvore = __asset_pigArvore.url;
import __asset_pigTela from "@/assets/arte-2ano/u5-pig-tela.jpg.asset.json";
const pigTela = __asset_pigTela.url;
import __asset_animalGirafa from "@/assets/arte-2ano/u5-animal-girafa.jpg.asset.json";
const animalGirafa = __asset_animalGirafa.url;
import __asset_animalElefante5 from "@/assets/arte-2ano/u5-animal-elefante.jpg.asset.json";
const animalElefante5 = __asset_animalElefante5.url;
import __asset_animalMorcego from "@/assets/arte-2ano/u5-animal-morcego.jpg.asset.json";
const animalMorcego = __asset_animalMorcego.url;
import __asset_u5passo1 from "@/assets/arte-2ano/u5-passo1-lencol.jpg.asset.json";
const u5passo1 = __asset_u5passo1.url;
import __asset_u5passo2 from "@/assets/arte-2ano/u5-passo2-escuro.jpg.asset.json";
const u5passo2 = __asset_u5passo2.url;
import __asset_u5passo3 from "@/assets/arte-2ano/u5-passo3-lanterna.jpg.asset.json";
const u5passo3 = __asset_u5passo3.url;
import __asset_u5passo4 from "@/assets/arte-2ano/u5-passo4-bonecos.jpg.asset.json";
const u5passo4 = __asset_u5passo4.url;
import __asset_u5passo5 from "@/assets/arte-2ano/u5-passo5-historia.jpg.asset.json";
const u5passo5 = __asset_u5passo5.url;


/**
 * Arte · 2º Ano · Unidade 5 · Aula 01 — "Teatro de Sombras"
 * (EF15AR18 / EF15AR19 / EF15AR21)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-teatro-sombras",
  titulo: "Teatro de Sombras: histórias na parede",
  iconeTrilha: "🎭",
  bncc: ["EF15AR18", "EF15AR19"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Brilha, apaga a luz! Com uma lanterna e as suas mãos, dá pra criar animais gigantes na parede. Toca em cada sombra pra descobrir qual é o bicho!",
    titulo: "Zoo de Sombras",
    instrucao: "Toca em cada sombra pra descobrir o animal",
    itens: [
      { emoji: "🐕", rotulo: "Cachorro", descricao: "Mãos juntas, dedinhos formando as orelhas e o focinho.", cor: "#78350f" },
      { emoji: "🦋", rotulo: "Borboleta", descricao: "Mãos cruzadas com os polegares presos e dedos abertos.", cor: "#a855f7" },
      { emoji: "🐦", rotulo: "Passarinho", descricao: "Polegares juntos e mãos batendo como asas.", cor: "#0ea5e9" },
      { emoji: "🐰", rotulo: "Coelho", descricao: "Dois dedos pra cima = orelhas do coelho pulando.", cor: "#f472b6" },
    ],
    falaFinal: "TEATRO DE SOMBRAS: sua mão vira personagem só com uma luz atrás.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes do espetáculo, treina o OLHO. Como funciona a sombra?",
    perguntas: [
      {
        pergunta: "Pra ter sombra, o que precisa ter na sala?",
        alternativas: [
          { texto: "Uma LUZ e um objeto na frente", correta: true },
          { texto: "Só um objeto sozinho", correta: false },
        ],
        feedbackAcerto: "Isso! Sem luz, não existe sombra.",
        feedbackErro: "Precisa de LUZ! Sombra é a luz sendo bloqueada pelo objeto.",
      },
      {
        pergunta: "Se eu levo o objeto pra PERTO da luz, a sombra fica…",
        alternativas: [
          { texto: "Menor", correta: false },
          { texto: "Maior", correta: true },
        ],
        feedbackAcerto: "Perfeito! Perto da luz = sombra GIGANTE.",
        feedbackErro: "Ao contrário! Perto da luz, a sombra fica MAIOR.",
      },
      {
        pergunta: "Que cor sempre tem a sombra?",
        alternativas: [
          { texto: "Escura (preta ou cinza)", correta: true },
          { texto: "Colorida como arco-íris", correta: false },
        ],
        feedbackAcerto: "Sim! Sombra é escura porque a luz não passa por ali.",
        feedbackErro: "Sombra sempre é ESCURA. Arco-íris é a luz colorida.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras do teatreiro de sombras — toca em cada uma!",
    cards: [
      { termo: "Sombra", definicao: "É a marca ESCURA que aparece quando um objeto tampa a luz.", emoji: "🌑", cor: "#1f2937", fotoUrl: vocabSombra },
      { termo: "Silhueta", definicao: "O CONTORNO escuro do personagem, sem detalhes.", emoji: "👤", cor: "#374151", fotoUrl: vocabSilhueta },
      { termo: "Tela", definicao: "Pano branco ou parede clara onde a sombra aparece.", emoji: "🖼️", cor: "#f3f4f6", fotoUrl: vocabTela },
      { termo: "Personagem", definicao: "Quem age no teatro — pode ser bicho, pessoa ou monstro!", emoji: "🎭", cor: "#a855f7", fotoUrl: vocabPersonagem },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar de onde vem o Teatro de Sombras — é uma tradição de MUITOS SÉCULOS!",
    paragrafos: [
      "Há mais de 2 mil anos, na CHINA e na INDONÉSIA, artistas contavam histórias esticando um pano branco enorme.",
      "Atrás do pano acendiam LAMPARINAS. E entre a luz e o pano moviam bonecos recortados em couro.",
      "As sombras dos bonecos apareciam no pano — e a plateia via reis, dragões, princesas voando!",
      "Hoje, com uma lanterna do celular e um lençol, VOCÊ pode fazer o mesmo teatro milenar dentro de casa!",
    ],
    pigmentos: [
      { nome: "Sombra do dragão", hex: "#1f2937", fonte: "Boneca de couro", emoji: "🐉", fotoUrl: pigDragao },
      { nome: "Sombra da princesa", hex: "#374151", fonte: "Contorno delicado", emoji: "👸", fotoUrl: pigPrincesa },
      { nome: "Sombra de árvore", hex: "#4b5563", fonte: "Galhos recortados", emoji: "🌳", fotoUrl: pigArvore },
      { nome: "Fundo da tela", hex: "#f3f4f6", fonte: "Pano branco iluminado", emoji: "🖼️", fotoUrl: pigTela },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Mostra o que aprendeu, pequeno bonequeiro de sombras!",
    perguntas: [
      {
        pergunta: "De onde vem o Teatro de Sombras mais antigo?",
        alternativas: [
          { texto: "China e Indonésia", correta: true },
          { texto: "Estados Unidos e Canadá", correta: false },
        ],
        feedbackAcerto: "Isso! Nasceu no Oriente, há mais de 2 mil anos.",
        feedbackErro: "Nasceu MUITO antes dos EUA existirem — na China e Indonésia.",
      },
      {
        pergunta: "O que faz aparecer a sombra na tela?",
        alternativas: [
          { texto: "A luz sendo BLOQUEADA pelo boneco", correta: true },
          { texto: "Uma tinta preta invisível", correta: false },
        ],
        feedbackAcerto: "Certo! O boneco tampa a luz e forma a sombra.",
        feedbackErro: "Não tem tinta. A sombra é a LUZ TAMPADA pelo boneco.",
      },
      {
        pergunta: "Silhueta significa…",
        alternativas: [
          { texto: "O contorno escuro sem detalhes", correta: true },
          { texto: "Uma dança dos índios", correta: false },
        ],
        feedbackAcerto: "Sim! Silhueta = o formato escuro que a sombra mostra.",
        feedbackErro: "Silhueta é o CONTORNO escuro, o formato da sombra.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada silhueta é um personagem. Descobre qual bicho é!",
    animais: [
      {
        nome: "Silhueta com longo pescoço", emoji: "🦒", fotoUrl: animalGirafa,
        corAlvo: { nome: "Girafa", hex: "#eab308" },
        opcoes: [
          { nome: "Sapo", hex: "#16a34a" },
          { nome: "Girafa", hex: "#eab308" },
          { nome: "Peixe", hex: "#0ea5e9" },
        ],
        falaAcerto: "Girafa! O pescoço enorme é a marca dela.",
      },
      {
        nome: "Silhueta com tromba", emoji: "🐘", fotoUrl: animalElefante5,
        corAlvo: { nome: "Elefante", hex: "#6b7280" },
        opcoes: [
          { nome: "Cavalo", hex: "#78350f" },
          { nome: "Coelho", hex: "#f472b6" },
          { nome: "Elefante", hex: "#6b7280" },
        ],
        falaAcerto: "Elefante! A tromba é o detalhe que denuncia.",
      },
      {
        nome: "Silhueta com asas grandes", emoji: "🦇", fotoUrl: animalMorcego,
        corAlvo: { nome: "Morcego", hex: "#1f2937" },
        opcoes: [
          { nome: "Formiga", hex: "#78350f" },
          { nome: "Morcego", hex: "#1f2937" },
          { nome: "Peixe", hex: "#0ea5e9" },
        ],
        falaAcerto: "Morcego! As asas de couro fazem uma sombra assustadora.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Toca nos passos NA ORDEM CERTA pra montar seu teatro de sombras em casa.",
    passos: [
      { id: "p1", texto: "Escolho um LENÇOL branco e estico entre duas cadeiras", emoji: "🛏️", ordem: 1, fotoUrl: u5passo1 },
      { id: "p2", texto: "Apago a luz do quarto pra ficar escurinho", emoji: "🌑", ordem: 2, fotoUrl: u5passo2 },
      { id: "p3", texto: "Ligo uma LANTERNA atrás do lençol", emoji: "🔦", ordem: 3, fotoUrl: u5passo3 },
      { id: "p4", texto: "Faço bonecos de PAPEL recortados no palito", emoji: "🎭", ordem: 4, fotoUrl: u5passo4 },
      { id: "p5", texto: "Movo os bonecos e conto a HISTÓRIA!", emoji: "📖", ordem: 5, fotoUrl: u5passo5 },
    ],
    falaAcerto: "Seu teatro tá pronto! É hora de vender ingressos pra família!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do bonequeiro! Toca nas palavras coloridas.",
    titulo: "Diário do Bonequeiro de Sombras",
    trechos: [
      { texto: "Estiquei o lençol e liguei a", palavraDestaque: "lanterna", corDestaque: "#eab308" },
      { texto: "Meu boneco de papel virou uma", palavraDestaque: "silhueta", corDestaque: "#374151" },
      { texto: "No pano branco apareceu a", palavraDestaque: "sombra", corDestaque: "#1f2937" },
      { texto: "Meu primo virou o", palavraDestaque: "personagem", corDestaque: "#a855f7" },
      { texto: "A vovó bateu palmas no fim!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Adivinha-Sombra! Toca em CADA silhueta pra descobrir todos os personagens antes do tempo acabar!",
    titulo: "🎭 Adivinha a Sombra",
    instrucao: "Toque em todas as silhuetas!",
    tempoSeg: 40,
    itens: [
      { emoji: "🐕", rotulo: "Cachorro", cor: "#78350f" },
      { emoji: "🐰", rotulo: "Coelho", cor: "#f472b6" },
      { emoji: "🦋", rotulo: "Borboleta", cor: "#a855f7" },
      { emoji: "🐦", rotulo: "Pássaro", cor: "#0ea5e9" },
      { emoji: "🐍", rotulo: "Cobra", cor: "#16a34a" },
      { emoji: "🦌", rotulo: "Veado", cor: "#eab308" },
    ],
    falaFinal: "Você acertou todas! Já dá pra ser diretor do Teatro de Sombras!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Toca em cada peça do teatro pra lembrar tudo.",
    titulo: "🔁 Roda do Teatro de Sombras",
    itens: [
      { emoji: "🔦", rotulo: "Luz", descricao: "Sem ela não existe sombra.", cor: "#eab308" },
      { emoji: "🌑", rotulo: "Sombra", descricao: "Marca escura de quem tampa a luz.", cor: "#1f2937" },
      { emoji: "👤", rotulo: "Silhueta", descricao: "Contorno escuro do personagem.", cor: "#374151" },
      { emoji: "🖼️", rotulo: "Tela", descricao: "Lençol branco onde a sombra aparece.", cor: "#f3f4f6" },
      { emoji: "🎭", rotulo: "Personagem", descricao: "Quem vive a história.", cor: "#a855f7" },
      { emoji: "📖", rotulo: "História", descricao: "O que os personagens vivem no palco.", cor: "#dc2626" },
    ],
    falaFinal: "Agora você é diretor do teatro milenar das sombras!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última missão, bonequeiro!",
    quiz: {
      pergunta: "O que precisa ter na sala pra aparecer uma SOMBRA?",
      alternativas: [
        { texto: "Uma LUZ e um objeto que bloqueia essa luz", correta: true },
        { texto: "Uma tinta preta e um pincel", correta: false },
      ],
      feedback: "Isso! Sombra = luz sendo tampada. Sem luz, sombra não existe.",
    },
    missaoFamilia:
      "🎭 Sessão de Cinema Milenar: façam em família um TEATRO DE SOMBRAS! Lençol branco, lanterna do celular e bonecos de papel recortados no palito. Cada um cria um personagem e juntos contam uma história curta.",
    recompensaTitulo: "🌈 Página 5 — O Palácio das Sombras Chinesas restaurado!",
    recompensaItem: "🎭 Lanterna Mágica do Bonequeiro",
  },

  recompensa: { xp: 60, moedas: 30, medalha: "Lanterna do Bonequeiro" },
};
