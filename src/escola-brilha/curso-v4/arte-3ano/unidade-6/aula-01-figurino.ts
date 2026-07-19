import type { AulaArteV1 } from "../../types";
import __asset_mapaBau from "@/assets/arte-3ano/u6-mapa-bau.jpg.asset.json";
const mapaBau = __asset_mapaBau.url;
import __asset_mapaMascara from "@/assets/arte-3ano/u6-mapa-mascara.jpg.asset.json";
const mapaMascara = __asset_mapaMascara.url;
import __asset_mapaCroqui from "@/assets/arte-3ano/u6-mapa-croqui.jpg.asset.json";
const mapaCroqui = __asset_mapaCroqui.url;
import __asset_mapaPalco from "@/assets/arte-3ano/u6-mapa-palco.jpg.asset.json";
const mapaPalco = __asset_mapaPalco.url;
import __asset_vocabFigurino from "@/assets/arte-3ano/u6-vocab-figurino.jpg.asset.json";
const vocabFigurino = __asset_vocabFigurino.url;
import __asset_vocabFigurinista from "@/assets/arte-3ano/u6-vocab-figurinista.jpg.asset.json";
const vocabFigurinista = __asset_vocabFigurinista.url;
import __asset_vocabAderecos from "@/assets/arte-3ano/u6-vocab-aderecos.jpg.asset.json";
const vocabAderecos = __asset_vocabAderecos.url;
import __asset_vocabPersonagem from "@/assets/arte-3ano/u6-vocab-personagem.jpg.asset.json";
const vocabPersonagem = __asset_vocabPersonagem.url;
import __asset_nosCoroa from "@/assets/arte-3ano/u6-nos-coroa.jpg.asset.json";
const nosCoroa = __asset_nosCoroa.url;
import __asset_nosPirata from "@/assets/arte-3ano/u6-nos-pirata.jpg.asset.json";
const nosPirata = __asset_nosPirata.url;
import __asset_nosJaleco from "@/assets/arte-3ano/u6-nos-jaleco.jpg.asset.json";
const nosJaleco = __asset_nosJaleco.url;
import __asset_passoMascara from "@/assets/arte-3ano/u6-passo-mascara.jpg.asset.json";
const passoMascara = __asset_passoMascara.url;

/**
 * Arte · 3º Ano · Unidade 6 · Aula 01 — "Figurino e Teatro"
 * (EF15AR18 / EF15AR19 / EF15AR21)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-figurino",
  titulo: "Figurino Teatral: A Arte de Virar Personagem",
  iconeTrilha: "🎭",
  bncc: ["EF15AR18", "EF15AR19", "EF15AR21"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Explorador! Chegamos nos bastidores de um teatro. Aqui tem um baú GIGANTE cheio de roupas, chapéus e máscaras. Cada peça transforma um ator numa PESSOA DIFERENTE. Toca em cada pista pra descobrir a mágica do figurino!",
    titulo: "🔍 O Baú dos Bastidores",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🎁", rotulo: "Baú de figurinos", descricao: "Um baú cheio de roupas de época, mantos, chapéus e adereços de todo tipo.", cor: "#b45309", fotoUrl: mapaBau },
      { emoji: "🎭", rotulo: "Máscara teatral (Grécia)", descricao: "Os gregos antigos usavam máscaras GIGANTES pra o público lá do fundo entender a emoção.", cor: "#eab308", fotoUrl: mapaMascara },
      { emoji: "📐", rotulo: "Croqui do figurinista", descricao: "Desenho detalhado de cada roupa antes de ser costurada, com cores e tecidos.", cor: "#7c3aed", fotoUrl: mapaCroqui },
      { emoji: "🎬", rotulo: "Palco iluminado", descricao: "O lugar onde tudo acontece. A luz + figurino + ator = MÁGICA.", cor: "#dc2626", fotoUrl: mapaPalco },
    ],
    falaFinal: "Um bom figurino não é só roupa — CONTA a história do personagem antes mesmo dele falar.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes de escolher uma roupa, treina o olho de figurinista!",
    perguntas: [
      {
        pergunta: "Pra que serve o FIGURINO no teatro?",
        fotoUrl: vocabFigurino,
        alternativas: [
          { texto: "Ajudar a construir o PERSONAGEM que o ator vai representar", correta: true },
          { texto: "Só decorar o palco", correta: false },
        ],
        feedbackAcerto: "Isso! Roupa certa = personagem convincente.",
        feedbackErro: "Não é decoração. Figurino MOSTRA quem é o personagem.",
      },
      {
        pergunta: "Quem DESENHA e escolhe todas as roupas de uma peça?",
        fotoUrl: vocabFigurinista,
        alternativas: [
          { texto: "O(a) FIGURINISTA", correta: true },
          { texto: "O motorista do teatro", correta: false },
        ],
        feedbackAcerto: "Certo! Figurinista é o artista das roupas do teatro.",
        feedbackErro: "Motorista dirige! Quem cria roupas é o(a) FIGURINISTA.",
      },
      {
        pergunta: "Coroa, espada, chapéu — como esses objetos são chamados no teatro?",
        fotoUrl: vocabAderecos,
        alternativas: [
          { texto: "ADEREÇOS", correta: true },
          { texto: "Materiais escolares", correta: false },
        ],
        feedbackAcerto: "Perfeito! Adereços = objetos usados pelos personagens.",
        feedbackErro: "Escola tem material. Teatro tem ADEREÇOS pra os personagens.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras do teatro — toca em cada uma pra desbloquear seu diário.",
    cards: [
      { termo: "Figurino", definicao: "A ROUPA usada pelo ator pra representar o personagem no palco.", emoji: "👑", cor: "#dc2626", fotoUrl: vocabFigurino },
      { termo: "Figurinista", definicao: "O ARTISTA que desenha e escolhe todas as roupas da peça.", emoji: "✂️", cor: "#7c3aed", fotoUrl: vocabFigurinista },
      { termo: "Adereços", definicao: "OBJETOS usados junto do figurino: coroa, espada, colar, óculos.", emoji: "🎁", cor: "#b45309", fotoUrl: vocabAderecos },
      { termo: "Personagem", definicao: "A PESSOA que o ator representa — com sua história e emoções.", emoji: "🎭", cor: "#eab308", fotoUrl: vocabPersonagem },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar como o figurinista trabalha. Presta atenção nas escolhas!",
    paragrafos: [
      "No teatro, o FIGURINO é a roupa que o ator veste pra se transformar em outro. Ele conta a história ANTES do ator falar: só de olhar, o público já sabe se é rei, ladrão ou médico.",
      "O FIGURINISTA lê a peça, pensa no personagem e desenha um CROQUI (desenho detalhado) de cada roupa. Depois escolhe tecidos, cores e adereços com muito cuidado.",
      "Na Grécia antiga (há 2.500 anos!), os atores usavam MÁSCARAS GIGANTES e sapatos de solado alto — assim, o público do fundo do teatro entendia a emoção e via os atores maiores.",
      "As CORES falam por si: vermelho lembra poder e paixão, preto lembra tristeza ou vilão, dourado lembra riqueza. Cada escolha do figurinista TEM UM SENTIDO.",
    ],
    pigmentos: [
      { nome: "Vermelho de rei/paixão", hex: "#dc2626", fonte: "Tinta natural de cochonilha", emoji: "❤️", fotoUrl: nosCoroa },
      { nome: "Dourado da riqueza", hex: "#eab308", fonte: "Fio de ouro ou tinta metálica", emoji: "🟡", fotoUrl: nosCoroa },
      { nome: "Preto do vilão/luto", hex: "#1f2937", fonte: "Tinta de carvão ou negro-de-fumo", emoji: "⚫", fotoUrl: nosPirata },
      { nome: "Branco do médico/pureza", hex: "#f9fafb", fonte: "Algodão cru sem tingir", emoji: "⚪", fotoUrl: nosJaleco },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o que ficou no caderno de expedição!",
    perguntas: [
      {
        pergunta: "Por que os atores gregos usavam MÁSCARAS GIGANTES?",
        fotoUrl: mapaMascara,
        alternativas: [
          { texto: "Pra o público do fundo do teatro ENXERGAR a emoção", correta: true },
          { texto: "Pra proteger da chuva", correta: false },
        ],
        feedbackAcerto: "Sim! Teatro era enorme — a máscara ampliava a expressão.",
        feedbackErro: "Não era pra chuva. Era pra o público LONGE ver a emoção.",
      },
      {
        pergunta: "O que o figurinista faz ANTES de costurar a roupa?",
        fotoUrl: mapaCroqui,
        alternativas: [
          { texto: "Desenha um CROQUI com todos os detalhes", correta: true },
          { texto: "Já sai comprando tecido no escuro", correta: false },
        ],
        feedbackAcerto: "Certo! Croqui = mapa da roupa antes de virar realidade.",
        feedbackErro: "Nada de improviso. Primeiro vem o CROQUI, depois o tecido.",
      },
      {
        pergunta: "Um personagem de REI num teatro provavelmente usa que cor?",
        fotoUrl: nosCoroa,
        alternativas: [
          { texto: "Vermelho ou dourado — cores de poder e riqueza", correta: true },
          { texto: "Cinza fosco simples", correta: false },
        ],
        feedbackAcerto: "Perfeito! Cores fortes MOSTRAM que ele é poderoso.",
        feedbackErro: "Cinza é simples. Rei pede cores fortes: vermelho, dourado, roxo.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada personagem pede uma paleta de cores diferente. Escolhe certo!",
    animais: [
      {
        nome: "Rei numa peça medieval", emoji: "👑", fotoUrl: nosCoroa,
        corAlvo: { nome: "Vermelho + dourado real", hex: "#dc2626" },
        opcoes: [
          { nome: "Cinza-cimento", hex: "#6b7280" },
          { nome: "Vermelho + dourado real", hex: "#dc2626" },
          { nome: "Verde-oliva militar", hex: "#65a30d" },
        ],
        falaAcerto: "Isso! Manto vermelho e coroa dourada — puro poder.",
      },
      {
        nome: "Personagem pirata do teatro", emoji: "🏴‍☠️", fotoUrl: nosPirata,
        corAlvo: { nome: "Preto + vermelho escuro", hex: "#1f2937" },
        opcoes: [
          { nome: "Rosa-bebê pastel", hex: "#f9a8d4" },
          { nome: "Preto + vermelho escuro", hex: "#1f2937" },
          { nome: "Amarelo brilhante", hex: "#facc15" },
        ],
        falaAcerto: "Certo! Preto do medo + vermelho do perigo = pirata.",
      },
      {
        nome: "Médico no consultório", emoji: "🩺", fotoUrl: nosJaleco,
        corAlvo: { nome: "Branco puro do jaleco", hex: "#f9fafb" },
        opcoes: [
          { nome: "Marrom-terra escuro", hex: "#78350f" },
          { nome: "Branco puro do jaleco", hex: "#f9fafb" },
          { nome: "Roxo brilhante", hex: "#a855f7" },
        ],
        falaAcerto: "Perfeito! Branco passa limpeza, cuidado e ciência.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 4 passos pra criar uma máscara teatral em casa — com papel!",
    passos: [
      { id: "p1", texto: "PENSO qual emoção minha máscara vai mostrar (alegria? medo?)", emoji: "💭", ordem: 1, fotoUrl: vocabPersonagem },
      { id: "p2", texto: "DESENHO os olhos, sobrancelhas e boca num papel-cartão", emoji: "✏️", ordem: 2, fotoUrl: passoMascara },
      { id: "p3", texto: "PINTO com cores fortes que combinem com a emoção", emoji: "🎨", ordem: 3, fotoUrl: mapaMascara },
      { id: "p4", texto: "RECORTO, amarro um cordão e vou pro palco caseiro!", emoji: "🎭", ordem: 4, fotoUrl: mapaPalco },
    ],
    falaAcerto: "Sua máscara está PRONTA! Já pode virar personagem em casa.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do explorador. Toca nas palavras coloridas pra ouvir.",
    titulo: "Diário do Explorador — Bastidores do Teatro",
    trechos: [
      { texto: "Entrei no camarim e vi todo o", palavraDestaque: "figurino", corDestaque: "#dc2626" },
      { texto: "Foi criado por uma", palavraDestaque: "figurinista", corDestaque: "#7c3aed" },
      { texto: "Junto do figurino ela colocou vários", palavraDestaque: "adereços", corDestaque: "#b45309" },
      { texto: "Tudo pra construir bem cada", palavraDestaque: "personagem", corDestaque: "#eab308" },
      { texto: "Sou um Explorador do Tempo — a página 6 está sendo restaurada!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎭 Camarim do Ator! Toca em CADA peça do figurino na ordem certa pra ficar pronto pra entrar no palco antes do tempo acabar.",
    titulo: "🎭 Camarim do Ator",
    instrucao: "Vista o personagem na ordem correta!",
    tempoSeg: 40,
    itens: [
      { emoji: "📖", rotulo: "Leio o texto do personagem", cor: "#78350f" },
      { emoji: "👕", rotulo: "Visto a roupa base", cor: "#0284c7" },
      { emoji: "👑", rotulo: "Coloco a coroa/chapéu", cor: "#eab308" },
      { emoji: "🎭", rotulo: "Adiciono a máscara ou maquiagem", cor: "#7c3aed" },
      { emoji: "⚔️", rotulo: "Pego os adereços na mão", cor: "#b45309" },
      { emoji: "🎬", rotulo: "Entro no palco!", cor: "#dc2626" },
    ],
    falaFinal: "Personagem PRONTO — cortina abre e o teatro começa!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da expedição repassando cada achado. Toca em cada verbete!",
    titulo: "📓 Caderno da Expedição do Teatro",
    itens: [
      { emoji: "👑", rotulo: "Figurino", descricao: "A roupa do personagem no palco.", cor: "#dc2626", fotoUrl: vocabFigurino },
      { emoji: "✂️", rotulo: "Figurinista", descricao: "Artista que cria as roupas do teatro.", cor: "#7c3aed", fotoUrl: vocabFigurinista },
      { emoji: "🎁", rotulo: "Adereços", descricao: "Objetos usados junto do figurino.", cor: "#b45309", fotoUrl: vocabAderecos },
      { emoji: "🎭", rotulo: "Personagem", descricao: "Pessoa que o ator representa.", cor: "#eab308", fotoUrl: vocabPersonagem },
      { emoji: "📐", rotulo: "Croqui", descricao: "Desenho da roupa antes de costurar.", cor: "#0284c7", fotoUrl: mapaCroqui },
      { emoji: "🎬", rotulo: "Palco", descricao: "Onde tudo acontece na peça.", cor: "#dc2626", fotoUrl: mapaPalco },
      { emoji: "🏛️", rotulo: "Máscara grega", descricao: "Grande, pra o público longe enxergar.", cor: "#eab308", fotoUrl: mapaMascara },
    ],
    falaFinal: "Página 6 do Atlas dos Exploradores DESBLOQUEADA — O Baú dos Personagens!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final — mostra que já é um figurinista de verdade!",
    quiz: {
      pergunta: "Qual é o papel do FIGURINO no teatro?",
      alternativas: [
        { texto: "Ajudar o público a ENTENDER quem é o personagem só de olhar", correta: true },
        { texto: "Servir só de decoração bonita", correta: false },
      ],
      feedback: "Excelente! O figurino é um ATALHO visual: só de ver a roupa, o público já sabe se aquele é um rei, um médico, um pirata. É a arte de CONTAR uma história com tecido e cor.",
    },
    missaoFamilia:
      "🎭 Detetives do Figurino: em família, escolham 1 personagem favorito (de filme, livro ou desenho) e montem uma FANTASIA com roupas que já têm em casa. Fotografem e conversem: como as escolhas ajudaram a construir o personagem?",
    recompensaTitulo: "📜 Página 6 restaurada — O Baú dos Personagens.",
    recompensaItem: "✂️ Tesoura do(a) Figurinista",
  },

  recompensa: { xp: 80, moedas: 40, medalha: "Tesoura do(a) Figurinista" },
};
