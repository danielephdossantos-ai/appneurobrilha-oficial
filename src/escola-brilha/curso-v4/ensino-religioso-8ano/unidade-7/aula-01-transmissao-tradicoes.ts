import type { AulaGeoV1 } from "../../types";
import { url as transmissao } from "@/assets/ensino-religioso-8ano/u7-transmissao.jpg.asset.json";
import { url as ritos } from "@/assets/ensino-religioso-8ano/u7-ritos.jpg.asset.json";
import { url as doutrinas } from "@/assets/ensino-religioso-8ano/u3-doutrinas.jpg.asset.json";

/**
 * Ensino Religioso · 8º Ano · Unidade 7 · Aula 01
 * "Como as tradições se transmitem" — EF08ER07
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-transmissao-tradicoes",
  titulo: "Como as Tradições se Transmitem",
  iconeTrilha: "📜",
  bncc: ["EF08ER07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Uma avó ensinando o neto: assim uma tradição sobrevive séculos.",
    mapaUrl: transmissao,
    imagemDestaqueUrl: ritos,
    aurora:
      "Investigador, cada tradição religiosa tem MILHARES de anos. Como sobreviveu tanto tempo? Não foi por acidente. Toda tradição desenvolve FORMAS ORGANIZADAS de se passar adiante: livros sagrados, ritos, festas, escolas, líderes, arte, música, gastronomia, ensino em casa. Sem transmissão, nenhuma tradição vive.",
    falaFinal: "Toda tradição se organiza pra se transmitir. Hoje a gente investiga essas 5 grandes formas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: qual forma é MAIS importante pra transmitir uma tradição?",
    pergunta: "O que mais preserva uma tradição ao longo dos séculos?",
    opcoes: [
      { id: "livro", titulo: "Só os livros sagrados", subtitulo: "escrito é o principal", emoji: "📖", cor: "from-slate-400 to-gray-600" },
      { id: "conjunto", titulo: "TODAS as formas juntas", subtitulo: "livros + ritos + família + arte", emoji: "🕯️", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "conjunto",
    feedbackAcerto: "Isso! Livro sozinho vira letra morta. É o CONJUNTO que mantém a tradição viva.",
    feedbackErro: "Livros são importantes, mas sozinhos não bastam: são o conjunto com ritos, família, arte, ensino que mantém a tradição viva.",
    falaFinal: "É o conjunto. Nenhuma tradição sobrevive por um só caminho.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "tradicao", capa: "1. Tradição", emoji: "📜", cor: "from-amber-500 to-orange-700", conteudo: "TRADIÇÃO é aquilo que uma comunidade escolhe passar adiante, de geração em geração. Vem do latim tradere = 'entregar'. Não é o velho por ser velho; é o que a comunidade julga digno de ser guardado.", exemplo: "Ex.: rezar antes das refeições, celebrar o Natal, jejuar no Ramadã, saudar os ancestrais.", fotoUrl: transmissao },
      { id: "transmissao", capa: "2. Transmissão", emoji: "🔄", cor: "from-sky-500 to-blue-700", conteudo: "TRANSMISSÃO é o PROCESSO de passar a tradição adiante. Envolve pessoas (avós, líderes, professores), lugares (templos, casas, escolas), objetos (livros, símbolos) e tempo (festas anuais, ritos de passagem).", exemplo: "Ex.: batismo, bar mitzvah, primeira comunhão, iniciação no candomblé, quinze anos.", fotoUrl: ritos },
      { id: "instituicao", capa: "3. Instituição", emoji: "🏛️", cor: "from-purple-500 to-fuchsia-700", conteudo: "INSTITUIÇÃO religiosa é a organização formal que cuida da transmissão: igreja, terreiro, mesquita, sinagoga, templo, ONG. Tem regras, lideranças, calendário, formação de novos líderes.", exemplo: "Ex.: Igreja Católica, Assembleia de Deus, Congresso Nacional de Ilês de Candomblé.", fotoUrl: doutrinas },
    ],
    falaFinal: "Tradição, transmissão, instituição. Suas ferramentas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 grandes formas de transmissão — presentes em todas as tradições. Toque em cada balão.",
    instrucao: "Toque em cada balão",
    mapaUrl: transmissao,
    pontos: [
      { id: "textos", x: 20, y: 26, emoji: "📖", cor: "from-sky-500 to-blue-700", titulo: "1. TEXTOS sagrados", texto: "Bíblia, Torá, Alcorão, Vedas, Sutras, Bhagavad-gita. Guardam a doutrina fundamental. Passam-se por leitura, memorização, comentário.", fotoUrl: doutrinas },
      { id: "ritos", x: 72, y: 26, emoji: "🕯️", cor: "from-amber-500 to-orange-700", titulo: "2. RITOS e festas", texto: "Batismo, casamento, funeral, festas anuais (Páscoa, Natal, Ramadã, Yom Kippur, Diwali, festa de Iemanjá). Repetição no tempo que mantém a tradição viva.", fotoUrl: ritos },
      { id: "familia", x: 26, y: 68, emoji: "👨‍👩‍👧", cor: "from-emerald-500 to-green-700", titulo: "3. FAMÍLIA e comunidade", texto: "Avós que ensinam, pais que rezam com filhos, comunidade que celebra junto. É a forma mais antiga e potente — o que se aprende em casa dura a vida toda.", fotoUrl: transmissao },
      { id: "escolas", x: 74, y: 68, emoji: "🏫", cor: "from-purple-500 to-fuchsia-700", titulo: "4. ESCOLAS e formação de líderes", texto: "Seminários católicos, madraças islâmicas, ieshivas judaicas, mosteiros budistas, escolas dominicais evangélicas, cursos de babás e babalorixás no candomblé.", fotoUrl: doutrinas },
      { id: "arte", x: 50, y: 88, emoji: "🎨", cor: "from-red-500 to-rose-700", titulo: "5. ARTE, música, gastronomia", texto: "Ícones, esculturas, música gospel, mantras, cânticos gregorianos, samba de terreiro, arquitetura religiosa, culinária ritual. Ensinam pelos sentidos e pelo corpo.", fotoUrl: ritos },
    ],
    falaFinal: "5 canais. Todos operando ao mesmo tempo. É isso que preserva séculos de tradição.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "A palavra TRADIÇÃO vem do latim TRADERE, que significa:", fotoUrl: transmissao, cards: [
        { id: "velho", emoji: "🕰️", titulo: "Velho", cor: "from-slate-400 to-gray-600" },
        { id: "entregar", emoji: "🤝", titulo: "Entregar / passar adiante", cor: "from-amber-500 to-orange-700" },
        { id: "escrever", emoji: "✍️", titulo: "Escrever", cor: "from-red-500 to-rose-700" },
      ], correta: "entregar", feedbackAcerto: "Isso! Tradição = aquilo que se entrega às gerações seguintes.", feedbackErro: "TRADERE = ENTREGAR. Tradição é o que uma geração entrega à seguinte." },
      { id: "q2", pergunta: "A forma de transmissão MAIS antiga e potente é:", fotoUrl: ritos, cards: [
        { id: "livro", emoji: "📖", titulo: "Livros impressos", cor: "from-slate-400 to-gray-600" },
        { id: "familia", emoji: "👨‍👩‍👧", titulo: "Família e comunidade", cor: "from-emerald-500 to-green-700" },
        { id: "internet", emoji: "🌐", titulo: "Internet", cor: "from-red-500 to-rose-700" },
      ], correta: "familia", feedbackAcerto: "Perfeito! O que se aprende em casa dura a vida toda.", feedbackErro: "FAMÍLIA — mais antiga e potente. Livros vieram depois; internet é ontem." },
      { id: "q3", pergunta: "Uma tradição que se sustenta APENAS em um livro:", fotoUrl: doutrinas, cards: [
        { id: "eterna", emoji: "♾️", titulo: "Vive pra sempre", cor: "from-slate-400 to-gray-600" },
        { id: "fraca", emoji: "📉", titulo: "Fica fraca — sem ritos, família e comunidade tende a definhar", cor: "from-red-500 to-rose-700" },
        { id: "pura", emoji: "✨", titulo: "É mais pura", cor: "from-sky-500 to-blue-700" },
      ], correta: "fraca", feedbackAcerto: "Isso! Livro sem prática vira letra morta.", feedbackErro: "Fica FRACA. Sem ritos, família, arte e comunidade, a tradição definha." },
    ],
    falaFinal: "Radar da transmissão calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, ritos e festas religiosas viraram patrimônio cultural. Acenda 5 estados com festas religiosas famosas.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["PA", "BA", "SP", "MG", "RN"], pergunta: "5 estados de festas gigantes: Círio de Nazaré, Iemanjá, Nossa Senhora Aparecida, Congada, Santos Reis?" },
    falaFinal: "PA (Círio), BA (Iemanjá), SP (Aparecida), MG (Congada), RN (Santos Reis) — tradição viva.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma tradição SOBREVIVE séculos?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Do fundador à criança de hoje:",
    paradas: [
      { id: "origem", emoji: "🌱", rotulo: "1. ORIGEM (fundação)", descricao: "Um fundador, profeta ou comunidade formula uma experiência religiosa — em oralidade ou escrita." },
      { id: "textos", emoji: "📖", rotulo: "2. TEXTOS se formam", descricao: "Ensino é registrado em livros sagrados, memorizado, comentado por gerações." },
      { id: "ritos", emoji: "🕯️", rotulo: "3. RITOS se estabilizam", descricao: "Celebrações anuais e ritos de passagem viram calendário fixo — repetição no tempo." },
      { id: "instituicao", emoji: "🏛️", rotulo: "4. INSTITUIÇÃO se organiza", descricao: "Templo, igreja, escola, formação de líderes — estrutura duradoura." },
      { id: "casa", emoji: "👨‍👩‍👧", rotulo: "5. CASA transmite hoje", descricao: "Avós, pais e comunidade passam a tradição na infância — e o ciclo recomeça." },
    ],
    ordemCerta: ["origem", "textos", "ritos", "instituicao", "casa"],
    feedbackAcerto: "Perfeito! Origem → textos → ritos → instituição → casa.",
    feedbackErro: "A ordem: ORIGEM (fundação), TEXTOS se formam, RITOS se estabilizam, INSTITUIÇÃO se organiza, CASA transmite hoje.",
    falaFinal: "5 passos. É como milênios chegam vivos em nossos dias.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Última leitura do 8º ano.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 7 — Transmissão das tradições",
    paragrafos: [
      { id: "p1", texto: "TRADIÇÃO vem do latim TRADERE — 'entregar'. É aquilo que uma geração ENTREGA à seguinte, considerando digno de ser preservado.", chaves: ["tradere", "entregar"] },
      { id: "p2", texto: "Toda tradição religiosa desenvolveu CINCO grandes formas de se transmitir: (1) TEXTOS sagrados, (2) RITOS e festas, (3) FAMÍLIA e comunidade, (4) ESCOLAS e formação de líderes, (5) ARTE, música, gastronomia.", chaves: ["cinco formas"] },
      { id: "p3", texto: "Nenhuma dessas formas basta sozinha. Livro sem ritos vira letra morta. Ritos sem família se perdem. Família sem instituição não escala. A força está no CONJUNTO — todas operando juntas.", chaves: ["conjunto", "juntas"] },
      { id: "p4", texto: "Investigar como uma tradição se transmite ajuda a RESPEITAR sua sabedoria acumulada — mesmo sem ser dela. Cada festa, cada rito, cada livro é milhares de anos de esforço humano pra manter viva uma resposta ao mistério da existência.", chaves: ["respeitar", "sabedoria"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo final do ano.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo CANAL DE TRANSMISSÃO! Cada exemplo usa UM canal principal. Qual?",
    instrucao: "⏱️ Que forma de transmissão está em ação?",
    duracaoSegundos: 12,
    pecas: [
      { id: "tex", emoji: "📖", rotulo: "Textos sagrados" },
      { id: "rit", emoji: "🕯️", rotulo: "Ritos e festas" },
      { id: "fam", emoji: "👨‍👩‍👧", rotulo: "Família / comunidade" },
      { id: "esc", emoji: "🏫", rotulo: "Escolas / formação" },
      { id: "art", emoji: "🎨", rotulo: "Arte, música, comida" },
      { id: "mid", emoji: "📱", rotulo: "Mídia digital" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Ramadã", emoji: "🌙", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Um mês por ano", emoji: "🕯️", cor: "from-teal-400 to-emerald-600" }, contexto: "Muçulmanos do mundo inteiro jejuam todos os anos, no mesmo mês, há 1400 anos.", pecaCertaId: "rit", feedbackAcerto: "Isso! Rito anual repetido — canal poderoso.", feedbackErro: "É RITO — festa anual repetida há séculos preserva tradição." },
      { id: "r2", municipioA: { nome: "Avó rezando", emoji: "👵", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Ensina o neto", emoji: "🙏", cor: "from-yellow-400 to-amber-600" }, contexto: "Avó católica ensina ao neto a rezar o Pai-Nosso antes de dormir.", pecaCertaId: "fam", feedbackAcerto: "Perfeito! Família — canal mais antigo e potente.", feedbackErro: "É FAMÍLIA — transmissão em casa marca a vida toda." },
      { id: "r3", municipioA: { nome: "Seminário", emoji: "🎓", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Novos padres", emoji: "🏫", cor: "from-violet-400 to-purple-600" }, contexto: "Seminário católico forma novos padres em 8 anos de estudo intensivo.", pecaCertaId: "esc", feedbackAcerto: "Isso! Escola / formação de líderes.", feedbackErro: "É ESCOLA — seminários, madraças, ieshivas formam novos líderes." },
      { id: "r4", municipioA: { nome: "Vedas", emoji: "📖", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Milênios de leitura", emoji: "🕉️", cor: "from-indigo-400 to-blue-700" }, contexto: "Textos védicos são lidos e comentados no hinduísmo há mais de 3500 anos.", pecaCertaId: "tex", feedbackAcerto: "Perfeito! Textos sagrados — coluna vertebral doutrinária.", feedbackErro: "É TEXTO SAGRADO — livros antigos guardam a doutrina fundamental." },
      { id: "r5", municipioA: { nome: "Samba de terreiro", emoji: "🥁", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Acarajé", emoji: "🍽️", cor: "from-orange-400 to-red-600" }, contexto: "Comida ritual, música e dança preservam a tradição afro-brasileira dentro dos terreiros e nas ruas.", pecaCertaId: "art", feedbackAcerto: "Boa! Arte, música e gastronomia — sentidos que ensinam.", feedbackErro: "É ARTE / MÚSICA / COMIDA — sentidos e corpo aprendem junto." },
      { id: "r6", municipioA: { nome: "Podcast espírita", emoji: "🎙️", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Live no YouTube", emoji: "📱", cor: "from-teal-400 to-emerald-600" }, contexto: "Grupo espírita transmite estudos e palestras semanais pra milhares de pessoas via streaming.", pecaCertaId: "mid", feedbackAcerto: "Isso! Mídia digital — novo canal do séc. XXI.", feedbackErro: "É MÍDIA DIGITAL — novo canal poderoso de transmissão religiosa hoje." },
    ],
    falaFinal: "6 canais, 6 tradições vivas. Investigador da Convivência Pública completo!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza final: dois modos como as tradições se sustentam hoje.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "tradicional", rotulo: "CANAIS TRADICIONAIS (~65%)", emoji: "📜", percentual: 65, cor: "#f59e0b", descricao: "Textos, ritos, família, escolas confessionais, arte, música, festas. Milenar, comprovado, preserva a memória viva das tradições.", exemplos: ["📖 Textos", "🕯️ Ritos", "👨‍👩‍👧 Família", "🏫 Escolas"] },
      { id: "digitais", rotulo: "CANAIS DIGITAIS (~35%)", emoji: "📱", percentual: 35, cor: "#6366f1", descricao: "Podcasts, lives, redes sociais, cursos online, aplicativos religiosos. Alcançam quem está longe, mas dependem dos canais tradicionais pra ter profundidade.", exemplos: ["🎙️ Podcasts", "📺 Lives", "📱 Apps"] },
    ],
    falaFinal: "Tradicional + digital. É como as tradições atravessam o séc. XXI.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra fechar o 8º ano com a insígnia MESTRE DAS TRADIÇÕES.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "TRADIÇÃO, do latim tradere, significa:", opcoes: [
        { id: "a", texto: "Coisa velha", correta: false },
        { id: "b", texto: "Aquilo que se ENTREGA de uma geração à outra", correta: true },
        { id: "c", texto: "Escrita antiga", correta: false },
      ], feedbackAcerto: "Isso! Tradição é o que a comunidade escolhe entregar.", feedbackErro: "TRADERE = ENTREGAR. Tradição é o que uma geração escolhe passar adiante." },
      { id: "av2", pergunta: "Uma tradição sobrevive séculos porque:", opcoes: [
        { id: "a", texto: "Depende só de UM livro", correta: false },
        { id: "b", texto: "Usa VÁRIAS formas juntas: textos, ritos, família, escolas, arte", correta: true },
        { id: "c", texto: "Ninguém sabe, é magia", correta: false },
      ], feedbackAcerto: "Perfeito! É o conjunto que preserva a tradição viva.", feedbackErro: "Sobrevive porque usa VÁRIAS formas juntas — nenhuma sozinha basta." },
      { id: "av3", pergunta: "Investigar como as tradições se transmitem ajuda a:", opcoes: [
        { id: "a", texto: "Escolher a religião certa", correta: false },
        { id: "b", texto: "RESPEITAR a sabedoria acumulada em séculos, mesmo sem ser da tradição", correta: true },
        { id: "c", texto: "Provar que uma é melhor", correta: false },
      ], feedbackAcerto: "Isso! Compreender ajuda a respeitar sem precisar concordar.", feedbackErro: "Investigar ajuda a RESPEITAR a sabedoria acumulada — não a hierarquizar tradições." },
    ],
    selo: { nome: "Mestre das Tradições", subtitulo: "Insígnia Final — 8º Ano concluído", emoji: "📜", cor: "from-indigo-400 to-purple-600" },
    falaFinal: "8º ano fechado! Você é agora Investigador da Convivência Pública. No 9º ano: as religiões diante dos grandes desafios do mundo contemporâneo.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Mestre das Tradições" },
};
