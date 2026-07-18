import type { AulaArteV1 } from "../../types";
import cantoKraho from "@/assets/arte-6ano/u2-canto-kraho.jpg";
import ancianoNarrando from "@/assets/arte-6ano/u2-anciao-narrando.jpg";
import avoCozinha from "@/assets/arte-6ano/u2-avo-cozinha.jpg";
import ribeirinha from "@/assets/arte-6ano/u2-ribeirinha.jpg";
import gravador from "@/assets/arte-6ano/u2-gravador.jpg";
import carta1910 from "@/assets/arte-6ano/u2-carta-1910.jpg";
import patrimonio from "@/assets/arte-6ano/u2-patrimonio-imaterial.jpg";
import etnoHistoriador from "@/assets/arte-6ano/u2-etno-historiador.jpg";
import ondaSonora from "@/assets/arte-6ano/u2-onda-sonora.jpg";
import feiraAntiga from "@/assets/arte-6ano/u2-feira-antiga.jpg";
import decreto from "@/assets/arte-6ano/u2-decreto.jpg";
import passoGravar from "@/assets/arte-6ano/u2-passo-gravar.jpg";
import cadernoNotas from "@/assets/arte-6ano/u2-caderno-notas.jpg";
import linhaSonora from "@/assets/arte-6ano/u2-linha-sonora.jpg";
import amuletoEco from "@/assets/arte-6ano/u2-amuleto-eco.jpg";

/**
 * Arte · 6º Ano · Unidade 1 · Aula 02 — "A Voz do Tempo"
 * Metanarrativa: 🧩 O Códice dos Impérios Perdidos
 * Fonte: Cantos rituais Krahô + Patrimônio Imaterial (Unesco)
 */
export const aula02: AulaArteV1 = {
  slug: "aula-02-voz-do-tempo",
  titulo: "A Voz do Tempo",
  iconeTrilha: "🎙️",
  bncc: ["EF69AR01", "EF69AR31", "EF69AR32", "EF69AR33"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Investigador! Brilha abriu a SEGUNDA página do Códice — mas ela está EM BRANCO. Quando encosta o ouvido, escuta sussurros e estalos de fogueira. Nem toda arte pode ser tocada ou vista. Alguns povos guardaram séculos de história sem escrever UMA linha: usaram a VOZ. Investiga cada pista da tradição oral.",
    titulo: "🎙️ O Guardião Silencioso",
    instrucao: "Toca em cada pista sobre a arte que só existe quando é DITA",
    itens: [
      { emoji: "🔥", rotulo: "Cantos rituais Krahô", descricao: "Etnia indígena do Tocantins. Os anciãos cantam narrativas ao redor da fogueira. Se param de cantar, aquela arte desaparece PRA SEMPRE — não existe partitura.", cor: "#dc2626", fotoUrl: cantoKraho },
      { emoji: "👴", rotulo: "Anciãos = bibliotecas vivas", descricao: "Os mais velhos guardam regras, ciência, receitas e memória da comunidade INTEIRA na cabeça. Cada morte de um ancião é um arquivo que queima.", cor: "#7c2d12", fotoUrl: ancianoNarrando },
      { emoji: "🎭", rotulo: "Patrimônio Imaterial", descricao: "Festas populares, danças, técnicas de fazer comida ou artesanato. A UNESCO protege esses saberes porque são a IDENTIDADE de um povo — mas não cabem em caixa.", cor: "#f59e0b", fotoUrl: patrimonio },
      { emoji: "🌊", rotulo: "Lenda ribeirinha ameaçada", descricao: "Uma comunidade tem uma lenda sobre o surgimento do rio, contada só na voz. Mineradora chega, muda o curso do rio, jovens migram. A lenda pode ser PERDIDA.", cor: "#0ea5e9", fotoUrl: ribeirinha },
    ],
    falaFinal: "Sua missão nesta página: aprender a CAPTURAR o som do tempo antes que ele silencie.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o ouvido de etno-historiador antes de gravar!",
    perguntas: [
      {
        pergunta: "Por que uma fonte ORAL é considerada mais frágil que uma fonte visual ou material?",
        fotoUrl: ancianoNarrando,
        alternativas: [
          { texto: "Ela só existe no momento em que é dita — se ninguém repete, desaparece", correta: true },
          { texto: "Porque toda pessoa mais velha esquece o que fala", correta: false },
        ],
        feedbackAcerto: "Perfeito! Fonte oral é IMATERIAL: sem transmissão contínua, some. Já uma pintura na rocha atravessa 30 mil anos parada.",
        feedbackErro: "Não é sobre esquecimento. É sobre DEPENDÊNCIA da transmissão viva — sem alguém contando, a fonte não existe mais.",
      },
      {
        pergunta: "Um canto ritual indígena, uma dança de festa popular e uma receita passada por gerações são exemplos de…",
        fotoUrl: patrimonio,
        alternativas: [
          { texto: "Patrimônio Imaterial — saberes que não cabem numa caixa de museu", correta: true },
          { texto: "Patrimônio Material — porque envolvem corpo e comida", correta: false },
        ],
        feedbackAcerto: "Correto! A UNESCO criou essa categoria justamente pra proteger o que é VIVIDO, não guardado.",
        feedbackErro: "Cuidado: o critério não é ter corpo físico. É se o SABER está no objeto (material) ou na PRÁTICA viva (imaterial).",
      },
      {
        pergunta: "Uma comunidade ribeirinha tem uma lenda contada só oralmente. A mineradora muda o curso do rio e os jovens migram. Qual é o RISCO REAL?",
        fotoUrl: ribeirinha,
        alternativas: [
          { texto: "A lenda pode desaparecer, porque não há mais quem a conte às próximas gerações", correta: true },
          { texto: "Nenhum, lendas antigas se mantêm sozinhas na natureza", correta: false },
        ],
        feedbackAcerto: "Exato! Sem contexto e sem contadores, a fonte oral SILENCIA. Por isso etno-historiadores gravam e transcrevem antes que suma.",
        feedbackErro: "Lendas NÃO se mantêm sozinhas. Cultura oral precisa de VOZ humana viva — se corta o elo, corta a memória.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do etno-historiador. Toca em cada verbete!",
    cards: [
      { termo: "Fonte Oral", definicao: "Relatos falados, entrevistas, lendas de geração em geração, cantos rituais. Registra a história do ponto de vista de quem VIVEU.", emoji: "🎙️", cor: "#dc2626", fotoUrl: ancianoNarrando },
      { termo: "Patrimônio Imaterial", definicao: "Arte que não cabe em caixa: festas, danças, técnicas culinárias, artesanato. A UNESCO protege como identidade de um povo.", emoji: "🎭", cor: "#f59e0b", fotoUrl: patrimonio },
      { termo: "Tradição Oral", definicao: "Sistema em que uma cultura passa conhecimento SEM escrita — pai pra filho, ancião pra jovem. Sustenta impérios inteiros por séculos.", emoji: "🔥", cor: "#7c2d12", fotoUrl: cantoKraho },
      { termo: "Etno-historiador", definicao: "Cientista que estuda a cultura de um povo através dos RELATOS orais. Grava, transcreve e cruza com fontes materiais.", emoji: "🕵️", cor: "#0ea5e9", fotoUrl: etnoHistoriador },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como os etno-historiadores DECIFRAM culturas sem escrita.",
    paragrafos: [
      "Quando estudamos o passado de forma AVANÇADA, descobrimos que a história se divide entre o que é PALPÁVEL (dá pra tocar) e o que é VIVIDO (só existe na hora que acontece). Um bisão pintado numa rocha fica lá 30 mil anos parado. Um canto ritual dura só o tempo da voz.",
      "As FONTES ORAIS são os relatos falados: entrevistas, lendas contadas de geração em geração, cantos, depoimentos. Elas trazem a EMOÇÃO e os detalhes que os livros oficiais costumam apagar — porque quem conta viveu, sentiu, chorou.",
      "O PATRIMÔNIO IMATERIAL é a arte que não cabe em museu. Uma festa popular, uma dança tradicional, a técnica de fazer um doce típico ou um artesanato. A UNESCO protege esses saberes porque são a IDENTIDADE viva de um povo.",
      "Mas cuidado: uma fonte oral pode MUDAR. Quem conta um conto, aumenta (ou altera) um ponto. Por isso o investigador avançado NUNCA usa só a voz — ele CRUZA a fonte oral com fontes materiais e visuais pra descobrir as várias camadas da verdade.",
      "Se eu leio a receita de bolo num livro, tenho FONTE ESCRITA. Mas se sento na cozinha com minha avó e ela conta que aprendeu com a mãe dela porque era o único doce em tempo de seca — a receita ganha VOZ, contexto e peso emocional. Isso é transformar informação em MEMÓRIA VIVA.",
    ],
    pigmentos: [
      { nome: "Canto ritual Krahô", hex: "#dc2626", fonte: "Tradição oral indígena viva do Tocantins", emoji: "🔥", fotoUrl: cantoKraho },
      { nome: "Receita da avó", hex: "#f59e0b", fonte: "Patrimônio imaterial da família", emoji: "🥣", fotoUrl: avoCozinha },
      { nome: "Gravador digital", hex: "#7c3aed", fonte: "Ferramenta do etno-historiador moderno", emoji: "🎙️", fotoUrl: gravador },
      { nome: "Caderno de campo", hex: "#0ea5e9", fonte: "Onde a fala vira transcrição analisável", emoji: "📓", fotoUrl: cadernoNotas },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica se o Códice registrou tudo!",
    perguntas: [
      {
        pergunta: "Um historiador acha uma CARTA escrita por um soldado em 1910 e grava uma ENTREVISTA em áudio com a filha desse soldado em 2026. Qual é a diferença TÉCNICA entre as duas?",
        fotoUrl: carta1910,
        alternativas: [
          { texto: "A carta é fonte documental DIRETA do momento; a entrevista é fonte oral baseada na memória transmitida", correta: true },
          { texto: "Nenhuma — as duas dizem exatamente a mesma coisa sobre 1910", correta: false },
        ],
        feedbackAcerto: "Excelente! A carta capturou o momento EM 1910. A entrevista é MEMÓRIA de segunda mão — outra camada da verdade, igualmente valiosa mas diferente.",
        feedbackErro: "As duas NÃO dizem a mesma coisa. Uma é registro do fato; a outra é lembrança sobre o fato — cada uma revela uma camada.",
      },
      {
        pergunta: "Por que o etno-historiador NÃO deve confiar SÓ na fonte oral pra reconstruir uma cultura?",
        fotoUrl: etnoHistoriador,
        alternativas: [
          { texto: "Porque relatos orais podem mudar com o tempo — é preciso CRUZAR com fontes materiais e visuais", correta: true },
          { texto: "Porque idosos não sabem contar a história direito", correta: false },
        ],
        feedbackAcerto: "Perfeito! Cruzar fontes = método científico. Nunca confiar em UMA voz só, mesmo sendo verdadeira.",
        feedbackErro: "Zero desrespeito com os anciãos — eles são bibliotecas vivas. A questão é MÉTODO: toda fonte precisa ser CRUZADA com outras.",
      },
      {
        pergunta: "Uma comunidade perde seus anciãos sem que ninguém grave os cantos rituais. O que acontece com esse Patrimônio Imaterial?",
        fotoUrl: cantoKraho,
        alternativas: [
          { texto: "Ele desaparece pra sempre — não existe backup fora da voz humana viva", correta: true },
          { texto: "Fica guardado automaticamente no DNA da comunidade", correta: false },
        ],
        feedbackAcerto: "Trágico e verdadeiro. Por isso etno-historiadores correm contra o tempo pra gravar e transcrever.",
        feedbackErro: "Nada de DNA cultural automático 😅. Sem transmissão viva (ou registro), o saber some COMPLETAMENTE.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada fonte no quadrante certo do Gravador de Frequências.",
    animais: [
      {
        nome: "Canto ritual indígena Krahô", emoji: "🔥", fotoUrl: cantoKraho,
        corAlvo: { nome: "Tradição Oral", hex: "#dc2626" },
        opcoes: [
          { nome: "Tradição Oral", hex: "#dc2626" },
          { nome: "Paisagem Sonora", hex: "#0ea5e9" },
          { nome: "Fonte Documental Oficial", hex: "#1e3a8a" },
        ],
        falaAcerto: "Isso! Canto passado de ancião pra jovem = Tradição Oral pura.",
      },
      {
        nome: "Som de feira antiga (1920)", emoji: "🏪", fotoUrl: feiraAntiga,
        corAlvo: { nome: "Paisagem Sonora", hex: "#0ea5e9" },
        opcoes: [
          { nome: "Paisagem Sonora", hex: "#0ea5e9" },
          { nome: "Tradição Oral", hex: "#dc2626" },
          { nome: "Fonte Documental Oficial", hex: "#1e3a8a" },
        ],
        falaAcerto: "Perfeito! Ambiente sonoro de um lugar/época = Paisagem Sonora.",
      },
      {
        nome: "Leitura de um decreto real do rei", emoji: "📜", fotoUrl: decreto,
        corAlvo: { nome: "Fonte Documental Oficial", hex: "#1e3a8a" },
        opcoes: [
          { nome: "Fonte Documental Oficial", hex: "#1e3a8a" },
          { nome: "Tradição Oral", hex: "#dc2626" },
          { nome: "Paisagem Sonora", hex: "#0ea5e9" },
        ],
        falaAcerto: "Correto! Decreto vem de documento escrito pelo poder oficial — Fonte Documental.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra virar um ETNO-HISTORIADOR de verdade em casa.",
    passos: [
      { id: "p1", texto: "ESCOLHO uma pessoa mais velha da família (pais, avós, tios, vizinho)", emoji: "👴", ordem: 1, fotoUrl: ancianoNarrando },
      { id: "p2", texto: "PREPARO duas perguntas-chave sobre a infância ou uma tradição da pessoa", emoji: "❓", ordem: 2, fotoUrl: cadernoNotas },
      { id: "p3", texto: "PEÇO AUTORIZAÇÃO pra gravar o áudio (respeito é regra nº 1)", emoji: "🙏", ordem: 3, fotoUrl: avoCozinha },
      { id: "p4", texto: "GRAVO o relato ou anoto as palavras EXATAS que a pessoa usar", emoji: "🎙️", ordem: 4, fotoUrl: passoGravar },
      { id: "p5", texto: "ANALISO em 5 linhas o que o relato revela que NENHUM objeto ou foto mostraria", emoji: "📝", ordem: 5, fotoUrl: ondaSonora },
    ],
    falaAcerto: "Você acabou de virar um ETNO-HISTORIADOR — capturou memória viva antes que virasse silêncio!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do etno-historiador. Toca nas palavras coloridas.",
    titulo: "Diário do Etno-Historiador",
    trechos: [
      { texto: "Sou etno-historiador. Estudo o passado através das", palavraDestaque: "fontes orais", corDestaque: "#dc2626" },
      { texto: "e do", palavraDestaque: "patrimônio imaterial", corDestaque: "#f59e0b" },
      { texto: "Sei que a", palavraDestaque: "tradição oral", corDestaque: "#7c2d12" },
      { texto: "sustentou impérios inteiros sem alfabeto — mas some se ninguém CONTAR." },
      { texto: "Por isso GRAVO, TRANSCREVO e sempre CRUZO com fontes materiais. A memória viva é a arte mais frágil do mundo." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 Gravador de Frequências! Escave TODAS as fontes orais e imateriais antes que o silêncio chegue.",
    titulo: "🎙️ Gravador de Frequências",
    instrucao: "Capture todos os relatos e patrimônios vivos!",
    tempoSeg: 35,
    itens: [
      { emoji: "🔥", rotulo: "Canto ritual Krahô", cor: "#dc2626" },
      { emoji: "👴", rotulo: "Relato de ancião", cor: "#7c2d12" },
      { emoji: "🥣", rotulo: "Receita da avó (imaterial)", cor: "#f59e0b" },
      { emoji: "💃", rotulo: "Dança de festa popular", cor: "#a16207" },
      { emoji: "🎙️", rotulo: "Entrevista gravada", cor: "#7c3aed" },
      { emoji: "📓", rotulo: "Transcrição em caderno", cor: "#0ea5e9" },
    ],
    falaFinal: "Frequências capturadas! Você salvou memórias vivas de virarem silêncio total.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a segunda página do Códice. Toca em cada verbete!",
    titulo: "📓 Caderno da Voz do Tempo",
    itens: [
      { emoji: "🎙️", rotulo: "Fonte Oral", descricao: "Relatos falados, entrevistas, lendas, cantos rituais. História do ponto de vista de quem VIVEU.", cor: "#dc2626", fotoUrl: ancianoNarrando },
      { emoji: "🎭", rotulo: "Patrimônio Imaterial", descricao: "Festas, danças, técnicas de comida e artesanato. Protegido pela UNESCO como identidade viva.", cor: "#f59e0b", fotoUrl: patrimonio },
      { emoji: "🔥", rotulo: "Tradição Oral", descricao: "Cultura sem escrita, transmitida de geração em geração pela VOZ. Frágil mas poderosa.", cor: "#7c2d12", fotoUrl: cantoKraho },
      { emoji: "🕵️", rotulo: "Etno-historiador", descricao: "Cientista que grava, transcreve e cruza fontes orais com materiais e visuais.", cor: "#0ea5e9", fotoUrl: etnoHistoriador },
      { emoji: "📜", rotulo: "Cruzar as fontes", descricao: "Nunca confiar em UMA voz só. Oral + material + visual + documental = várias camadas da verdade.", cor: "#1e3a8a", fotoUrl: decreto },
      { emoji: "🌊", rotulo: "Risco do silêncio", descricao: "Sem transmissão viva ou registro, o Patrimônio Imaterial desaparece PRA SEMPRE.", cor: "#0ea5e9", fotoUrl: ribeirinha },
    ],
    falaFinal: "Segunda página do Códice dos Impérios Perdidos RESTAURADA — Linha do Tempo Sonora desbloqueada!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Desafio do Detetive, etno-historiador!",
    quiz: {
      pergunta: "Um historiador encontra uma CARTA escrita por um soldado em 1910 e grava uma ENTREVISTA em áudio com a filha desse soldado em 2026. Qual é a diferença TÉCNICA entre as duas fontes na análise da história?",
      alternativas: [
        { texto: "O diário/carta é fonte documental DIRETA do momento do fato; a entrevista é fonte oral baseada na MEMÓRIA e na transmissão familiar", correta: true },
        { texto: "Nenhuma, ambos dizem exatamente a mesma coisa sobre 1910", correta: false },
      ],
      feedback: "Perfeito! A carta capturou o momento EM 1910 — testemunho direto. A entrevista de 2026 é memória de SEGUNDA mão, filtrada pela família. As duas revelam camadas DIFERENTES da mesma história — o etno-historiador CRUZA as duas pra descobrir a verdade completa.",
    },
    missaoFamilia:
      "🎙️ Missão Etno-Historiador: Escolha uma pessoa mais velha (pais, avós, tios ou vizinho). Peça autorização e faça DUAS perguntas-chave: 1) 'Qual é a memória mais antiga que você tem de uma festa, música ou tradição?' 2) 'Existe algum objeto ou costume na nossa família que veio de muito longe?'. Grave o áudio OU anote as palavras exatas. No app, registre o áudio/foto do caderno e escreva 5 linhas: o que esse relato revelou sobre o passado que NENHUMA foto ou objeto material mostraria?",
    recompensaTitulo: "📜 Página 2 restaurada — A Linha do Tempo Sonora da humanidade.",
    recompensaItem: "🔮 Amuleto do Eco (desbloqueia arquivos de áudio ocultos do Códice)",
  },

  recompensa: { xp: 110, moedas: 55, medalha: "Amuleto do Eco" },
};
