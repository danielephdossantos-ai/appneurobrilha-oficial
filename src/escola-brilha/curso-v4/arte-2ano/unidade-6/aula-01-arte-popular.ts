import type { AulaArteV1 } from "../../types";
import vocabArtesao from "@/assets/arte-2ano/u6-vocab-artesao.jpg";
import vocabCordel from "@/assets/arte-2ano/u6-vocab-cordel.jpg";
import vocabCeramica from "@/assets/arte-2ano/u6-vocab-ceramica.jpg";
import vocabCultura from "@/assets/arte-2ano/u6-vocab-cultura.jpg";
import pigCarranca from "@/assets/arte-2ano/u6-pig-carranca.jpg";
import pigBonecas from "@/assets/arte-2ano/u6-pig-bonecas.jpg";
import pigCordel from "@/assets/arte-2ano/u6-pig-cordel.jpg";
import pigBoi from "@/assets/arte-2ano/u6-pig-boi.jpg";
import animalBoi from "@/assets/arte-2ano/u6-animal-boi.jpg";
import animalCarranca from "@/assets/arte-2ano/u6-animal-carranca.jpg";
import animalBonecas from "@/assets/arte-2ano/u6-animal-bonecas.jpg";
import u6passo1 from "@/assets/arte-2ano/u6-passo1-barro.jpg";
import u6passo2 from "@/assets/arte-2ano/u6-passo2-amassar.jpg";
import u6passo3 from "@/assets/arte-2ano/u6-passo3-modelar.jpg";
import u6passo4 from "@/assets/arte-2ano/u6-passo4-secar.jpg";
import u6passo5 from "@/assets/arte-2ano/u6-passo5-pintar.jpg";


/**
 * Arte · 2º Ano · Unidade 6 · Aula 01 — "Arte Popular Brasileira"
 * (EF15AR03 / EF15AR06 / EF15AR25)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-arte-popular",
  titulo: "Arte Popular: as cores do meu Brasil",
  iconeTrilha: "🇧🇷",
  bncc: ["EF15AR03", "EF15AR06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Brilha, o Brasil é um museu ao ar livre! Cada região tem sua arte popular. Toca em cada uma pra conhecer!",
    titulo: "Viagem pela Arte Popular Brasileira",
    instrucao: "Toca em cada obra pra descobrir",
    itens: [
      { emoji: "🎨", rotulo: "Carrancas do São Francisco", descricao: "Cabeças de madeira colocadas na frente dos barcos pra espantar mau agouro.", cor: "#dc2626" },
      { emoji: "🏺", rotulo: "Cerâmica do Vale do Jequitinhonha", descricao: "Bonecas de barro feitas por mulheres em Minas Gerais.", cor: "#78350f" },
      { emoji: "📚", rotulo: "Xilogravura de Cordel", descricao: "Desenhos em preto e branco impressos em madeira no Nordeste.", cor: "#1f2937" },
      { emoji: "🪁", rotulo: "Bumba-meu-boi", descricao: "Boi de pano e festa colorida do Maranhão, Amazonas e Piauí.", cor: "#eab308" },
    ],
    falaFinal: "ARTE POPULAR é a arte feita pelo POVO — sem escola, com criatividade!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Treina o olho de brasileiro! O que combina com cada região?",
    perguntas: [
      {
        pergunta: "Quem faz a arte popular?",
        alternativas: [
          { texto: "O povo — artistas do dia a dia", correta: true },
          { texto: "Só pintores famosos e ricos", correta: false },
        ],
        feedbackAcerto: "Isso! Arte popular é feita por artesãos comuns.",
        feedbackErro: "Ao contrário! Arte popular é do POVO, não dos famosos.",
      },
      {
        pergunta: "Cordel é literatura de qual região?",
        alternativas: [
          { texto: "Sul", correta: false },
          { texto: "Nordeste", correta: true },
        ],
        feedbackAcerto: "Perfeito! Cordel é a poesia impressa do Nordeste.",
        feedbackErro: "É do NORDESTE! Cordel nasceu na Bahia e Pernambuco.",
      },
      {
        pergunta: "Bumba-meu-boi é uma…",
        alternativas: [
          { texto: "Festa com boi de pano e dança", correta: true },
          { texto: "Comida típica quente", correta: false },
        ],
        feedbackAcerto: "Sim! Bumba-meu-boi é festa com música, dança e o boi encantado.",
        feedbackErro: "Não é comida. É FESTA com um boi de pano que dança e ressuscita.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras da arte popular — toca em cada uma!",
    cards: [
      { termo: "Artesão", definicao: "Quem faz arte COM AS MÃOS — barro, madeira, palha, tecido.", emoji: "🧑‍🎨", cor: "#78350f", fotoUrl: vocabArtesao },
      { termo: "Cordel", definicao: "Livrinho de POESIA com xilogravura, pendurado em barbante no Nordeste.", emoji: "📚", cor: "#1f2937", fotoUrl: vocabCordel },
      { termo: "Cerâmica", definicao: "Arte de moldar o BARRO e depois queimar no forno pra ficar duro.", emoji: "🏺", cor: "#f97316", fotoUrl: vocabCeramica },
      { termo: "Cultura", definicao: "TUDO que um povo faz: música, comida, arte, festa, dança.", emoji: "🌎", cor: "#16a34a", fotoUrl: vocabCultura },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar sobre 4 grandes tesouros da arte popular brasileira.",
    paragrafos: [
      "No rio SÃO FRANCISCO, mestres do interior esculpiam CARRANCAS — cabeças fortes de madeira colocadas na proa dos barcos pra espantar mau olhado.",
      "No VALE DO JEQUITINHONHA, em Minas Gerais, mulheres artesãs modelam bonecas de barro pintadas com cores vivas e histórias da vida no campo.",
      "No NORDESTE, poetas escrevem CORDÉIS: histórias em rima ilustradas por xilogravura, uma técnica de imprimir com madeira entalhada.",
      "No MARANHÃO, todo mês de junho tem BUMBA-MEU-BOI: um boi de pano dança, morre e ressuscita, com música e cores explodindo pelas ruas.",
    ],
    pigmentos: [
      { nome: "Vermelho da carranca", hex: "#dc2626", fonte: "Madeira pintada", emoji: "🎭", fotoUrl: pigCarranca },
      { nome: "Barro do Jequitinhonha", hex: "#f97316", fonte: "Argila queimada", emoji: "🏺", fotoUrl: pigBonecas },
      { nome: "Preto do cordel", hex: "#1f2937", fonte: "Tinta na xilogravura", emoji: "📚", fotoUrl: pigCordel },
      { nome: "Fita do boi", hex: "#eab308", fonte: "Cetim colorido", emoji: "🪁", fotoUrl: pigBoi },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Mostra o que sabe, pequeno brasileirinho!",
    perguntas: [
      {
        pergunta: "Onde ficam as CARRANCAS na embarcação?",
        alternativas: [
          { texto: "Na proa (frente do barco)", correta: true },
          { texto: "Dentro do peixe pescado", correta: false },
        ],
        feedbackAcerto: "Isso! Carranca fica na frente, pra proteger o barco.",
        feedbackErro: "Carranca vai na PROA do barco (a frente), pra espantar mau agouro.",
      },
      {
        pergunta: "Xilogravura é feita com…",
        alternativas: [
          { texto: "Madeira entalhada e tinta", correta: true },
          { texto: "Tinta plástica em spray", correta: false },
        ],
        feedbackAcerto: "Certo! Entalha a madeira, passa tinta e imprime no papel.",
        feedbackErro: "Não é spray! É MADEIRA entalhada com tinta preta.",
      },
      {
        pergunta: "Cerâmica é feita com qual material?",
        alternativas: [
          { texto: "Barro (argila)", correta: true },
          { texto: "Vidro derretido", correta: false },
        ],
        feedbackAcerto: "Sim! Molda o barro molhado e queima no forno.",
        feedbackErro: "Vidro é outra arte. Cerâmica é feita com BARRO.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada arte é de uma região do Brasil. Acerta de onde vem!",
    animais: [
      {
        nome: "Bumba-meu-boi", emoji: "🐂", fotoUrl: animalBoi,
        corAlvo: { nome: "Maranhão (Nordeste)", hex: "#eab308" },
        opcoes: [
          { nome: "Rio Grande do Sul (Sul)", hex: "#16a34a" },
          { nome: "Maranhão (Nordeste)", hex: "#eab308" },
          { nome: "Amazonas (Norte)", hex: "#0ea5e9" },
        ],
        falaAcerto: "Bumba-meu-boi é a alma do Maranhão!",
      },
      {
        nome: "Carranca", emoji: "🎭", fotoUrl: animalCarranca,
        corAlvo: { nome: "Rio São Francisco (BA/PE)", hex: "#dc2626" },
        opcoes: [
          { nome: "Rio São Francisco (BA/PE)", hex: "#dc2626" },
          { nome: "Brasília (Centro-Oeste)", hex: "#f97316" },
          { nome: "Serra do Sul", hex: "#0ea5e9" },
        ],
        falaAcerto: "Rio São Francisco! Barqueiros usavam carrancas na proa.",
      },
      {
        nome: "Bonecas de barro", emoji: "🏺", fotoUrl: animalBonecas,
        corAlvo: { nome: "Vale do Jequitinhonha (MG)", hex: "#f97316" },
        opcoes: [
          { nome: "Vale do Jequitinhonha (MG)", hex: "#f97316" },
          { nome: "Rio de Janeiro (Sudeste)", hex: "#a855f7" },
          { nome: "Manaus (Norte)", hex: "#16a34a" },
        ],
        falaAcerto: "Minas Gerais, no Vale do Jequitinhonha!",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Toca nos passos NA ORDEM CERTA pra fazer uma boneca de barro como as do Jequitinhonha.",
    passos: [
      { id: "p1", texto: "Cavo o BARRO na beira do rio", emoji: "🌊", ordem: 1, fotoUrl: u6passo1 },
      { id: "p2", texto: "Amasso bem pra tirar as pedrinhas", emoji: "🖐️", ordem: 2, fotoUrl: u6passo2 },
      { id: "p3", texto: "MODELO o corpinho da boneca", emoji: "👧", ordem: 3, fotoUrl: u6passo3 },
      { id: "p4", texto: "Deixo SECAR no sol por um dia", emoji: "☀️", ordem: 4, fotoUrl: u6passo4 },
      { id: "p5", texto: "Queimo no forno e PINTO com cores fortes", emoji: "🎨", ordem: 5, fotoUrl: u6passo5 },
    ],
    falaAcerto: "Sua boneca virou obra de arte popular brasileira!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "VOCÊ agora lê o diário da pequena artesã. Toca nas palavras coloridas.",
    titulo: "Diário da Pequena Artesã",
    trechos: [
      { texto: "Aprendi a fazer boneca com o", palavraDestaque: "barro", corDestaque: "#f97316" },
      { texto: "O vovô me contou uma história de", palavraDestaque: "cordel", corDestaque: "#1f2937" },
      { texto: "No São Francisco, os barcos têm", palavraDestaque: "carrancas", corDestaque: "#dc2626" },
      { texto: "Sou uma pequena", palavraDestaque: "artesã", corDestaque: "#78350f" },
      { texto: "Vou espalhar a arte do Brasil pelo mundo!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Mapa do Brasil de Arte! Toque em CADA símbolo pra ganhar a bandeirinha da região!",
    titulo: "🇧🇷 Brasil de Arte",
    instrucao: "Toque em todos os tesouros culturais!",
    tempoSeg: 40,
    itens: [
      { emoji: "🎭", rotulo: "Carranca (BA/PE)", cor: "#dc2626" },
      { emoji: "🏺", rotulo: "Boneca (MG)", cor: "#f97316" },
      { emoji: "📚", rotulo: "Cordel (Nordeste)", cor: "#1f2937" },
      { emoji: "🐂", rotulo: "Bumba-boi (MA)", cor: "#eab308" },
      { emoji: "🪁", rotulo: "Frevo (PE)", cor: "#a855f7" },
      { emoji: "🎨", rotulo: "Renda de bilro (CE)", cor: "#f472b6" },
    ],
    falaFinal: "Você percorreu o Brasil todo pela arte popular!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Toca em cada expressão da arte popular pra revisar.",
    titulo: "🔁 Roda da Arte Popular",
    itens: [
      { emoji: "🧑‍🎨", rotulo: "Artesão", descricao: "Quem faz arte com as mãos.", cor: "#78350f" },
      { emoji: "🏺", rotulo: "Cerâmica", descricao: "Arte com barro modelado e queimado.", cor: "#f97316" },
      { emoji: "📚", rotulo: "Cordel", descricao: "Poesia nordestina com xilogravura.", cor: "#1f2937" },
      { emoji: "🎭", rotulo: "Carranca", descricao: "Cabeça de madeira na proa dos barcos.", cor: "#dc2626" },
      { emoji: "🐂", rotulo: "Bumba-boi", descricao: "Festa do boi encantado do Maranhão.", cor: "#eab308" },
      { emoji: "🇧🇷", rotulo: "Cultura Popular", descricao: "Arte feita pelo povo, sem escola formal.", cor: "#16a34a" },
    ],
    falaFinal: "Você agora é um pequeno GUARDIÃO da cultura brasileira!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última missão, guardião da cultura!",
    quiz: {
      pergunta: "O que é ARTE POPULAR?",
      alternativas: [
        { texto: "Arte feita pelo POVO, com criatividade e materiais simples", correta: true },
        { texto: "Arte só de pintores famosos que estudaram na Europa", correta: false },
      ],
      feedback: "Isso! Arte popular nasce das mãos do povo, das tradições, sem precisar de faculdade.",
    },
    missaoFamilia:
      "🇧🇷 Museu Brasileiro em Casa: peçam pra vovó ou vovô contar uma HISTÓRIA ou MÚSICA da terra de origem da família. Desenhem essa história como se fosse uma xilogravura (só preto e branco, com traços grossos).",
    recompensaTitulo: "🌈 Página 6 — O Museu do Brasil Popular restaurado!",
    recompensaItem: "🇧🇷 Bandeirinha do Guardião Cultural",
  },

  recompensa: { xp: 60, moedas: 30, medalha: "Bandeirinha Cultural" },
};
