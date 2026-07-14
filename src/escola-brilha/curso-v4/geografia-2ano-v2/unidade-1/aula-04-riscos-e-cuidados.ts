import type { AulaGeoV1 } from "../../types";
import { url as mapaMunicipio } from "@/assets/geografia-3ano/mapa-municipio.jpg.asset.json";
import { url as feira } from "@/assets/geografia-3ano/feira-livre-bairro.jpg.asset.json";
/**
 * Geografia · 2º Ano (v2) · Unidade 1 · Aula 04
 * "Riscos e Cuidados no Lugar Onde Vivo" — EF02GE04
 */
export const aula04: AulaGeoV1 = {
  slug: "aula-04-riscos-e-cuidados",
  titulo: "Cuidando do Meu Lugar",
  iconeTrilha: "🛡️",
  bncc: ["EF02GE04"],
  duracaoMin: 18,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa: onde tem RISCO no lugar onde a gente vive? E como se CUIDAR?",
    mapaUrl: mapaMunicipio,
    aurora: "Oi, cartógrafo! Todo lugar tem CANTINHOS de RISCO. Nem sempre é medo — é ATENÇÃO. Passa a lupa: rua movimentada, escada, tomada, rio fundo. Bora identificar!",
    falaFinal: "RISCO é onde a gente precisa ter cuidado. Cartógrafo bom mapeia os riscos pra se proteger.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: o que a gente faz com um lugar de RISCO?",
    pergunta: "Como agir num lugar de risco?",
    opcoes: [
      { id: "ignorar", titulo: "Fingir que não existe", subtitulo: "e passar correndo", emoji: "🙈", cor: "from-slate-400 to-slate-600" },
      { id: "cuidar", titulo: "Conhecer e ter cuidado", subtitulo: "olhar, esperar, pedir ajuda", emoji: "🛡️", cor: "from-emerald-400 to-teal-600" },
    ],
    respostaCerta: "cuidar",
    feedbackAcerto: "Isso! CONHECER + CUIDAR — não precisa ter medo.",
    feedbackErro: "Ignorar aumenta o risco. Conhecer e cuidar diminui.",
    falaFinal: "Cartógrafo esperto: sabe onde tem risco E como se cuidar.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras da segurança. Toca em cada!",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "risco", capa: "Risco", emoji: "⚠️", cor: "from-amber-400 to-orange-600", conteudo: "É a CHANCE de acontecer algo ruim, como se machucar. Rua movimentada tem RISCO de atropelamento.", exemplo: "Correr descalço no piso molhado = RISCO de cair." },
      { id: "cuidado", capa: "Cuidado", emoji: "🛡️", cor: "from-sky-400 to-indigo-600", conteudo: "É a ATENÇÃO que a gente tem pra evitar o risco. Olhar antes de atravessar = CUIDADO.", exemplo: "Segurar a mão do adulto na rua = CUIDADO." },
      { id: "faixa", capa: "Faixa de Pedestre", emoji: "🚸", cor: "from-yellow-400 to-amber-600", conteudo: "São as LISTRAS BRANCAS na rua onde a gente atravessa. Carro DEVE parar.", exemplo: "Atravessar SEMPRE na FAIXA." },
      { id: "emergencia", capa: "Emergência", emoji: "🚨", cor: "from-red-400 to-rose-700", conteudo: "É um perigo GRANDE que a gente pede AJUDA. Números: 192 (ambulância), 193 (bombeiro), 190 (polícia).", exemplo: "Fogo, alguém desmaiou = EMERGÊNCIA." },
    ],
    falaFinal: "4 palavras que salvam! Bora usar.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Olha o mapa do bairro. Toca em cada balão de RISCO — e o CUIDADO que vai junto.",
    instrucao: "Toque nos balões",
    mapaUrl: mapaMunicipio,
    pontos: [
      { id: "rua", x: 60, y: 55, emoji: "🚗", cor: "from-red-400 to-rose-600", titulo: "Rua movimentada", texto: "Risco: atropelamento. Cuidado: atravessar SEMPRE na FAIXA, olhando pros DOIS lados." },
      { id: "rio", x: 30, y: 70, emoji: "🌊", cor: "from-cyan-400 to-blue-600", titulo: "Rio fundo", texto: "Risco: afogamento. Cuidado: nunca entrar SEM adulto e sem colete." },
      { id: "tomada", x: 75, y: 30, emoji: "🔌", cor: "from-amber-400 to-orange-600", titulo: "Tomada em casa", texto: "Risco: choque. Cuidado: NUNCA colocar dedo ou objeto na tomada." },
      { id: "chuva", x: 20, y: 25, emoji: "⛈️", cor: "from-slate-400 to-slate-700", titulo: "Chuva forte", texto: "Risco: enchente, deslizamento. Cuidado: ficar em casa, não brincar em bueiro." },
    ],
    falaFinal: "Todo lugar tem risco. Todo risco tem um CUIDADO. Aprendeu = está protegido.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Radar de segurança! 3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual o LUGAR CERTO pra atravessar a rua?",
        cards: [
          { id: "faixa", emoji: "🚸", titulo: "Na faixa de pedestre", cor: "from-emerald-400 to-teal-600" },
          { id: "meio", emoji: "🚗", titulo: "No meio da rua", cor: "from-red-400 to-rose-600" },
          { id: "esquina", emoji: "🏢", titulo: "Escondido atrás do carro", cor: "from-amber-400 to-orange-500" },
        ],
        correta: "faixa",
        feedbackAcerto: "Isso! Sempre na FAIXA 🚸.",
        feedbackErro: "Atravessar SEMPRE na FAIXA.",
      },
      {
        id: "q2",
        pergunta: "Se pega fogo em casa, você...",
        cards: [
          { id: "esconder", emoji: "🛏️", titulo: "Se esconde embaixo da cama", cor: "from-slate-400 to-slate-600" },
          { id: "sai", emoji: "🏃", titulo: "Sai correndo e chama 193 (bombeiro)", cor: "from-emerald-400 to-teal-600" },
          { id: "agua", emoji: "💧", titulo: "Tenta apagar sozinho", cor: "from-red-400 to-rose-600" },
        ],
        correta: "sai",
        feedbackAcerto: "Perfeito! SAIR + chamar o BOMBEIRO 193.",
        feedbackErro: "Fogo = SAIR de casa e chamar BOMBEIRO 193.",
      },
      {
        id: "q3",
        pergunta: "O número da AMBULÂNCIA é...",
        cards: [
          { id: "190", emoji: "🚔", titulo: "190 (polícia)", cor: "from-sky-400 to-indigo-600" },
          { id: "192", emoji: "🚑", titulo: "192 (ambulância)", cor: "from-red-400 to-rose-600" },
          { id: "193", emoji: "🚒", titulo: "193 (bombeiro)", cor: "from-amber-400 to-orange-500" },
        ],
        correta: "192",
        feedbackAcerto: "Boa! Ambulância = 192.",
        feedbackErro: "Ambulância = 192 🚑.",
      },
    ],
    falaFinal: "Radar de segurança forte! Você sabe se proteger.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Vou acender 2 CAMADAS: os RISCOS e os HERÓIS que ajudam. Liga as duas!",
    instrucao: "Toque nos interruptores",
    mapaUrl: mapaMunicipio,
    camadas: [
      { id: "riscos", rotulo: "Riscos do bairro", emoji: "⚠️", cor: "from-amber-500 to-rose-600", rect: { x: 10, y: 15, w: 40, h: 60 }, descricao: "Ruas movimentadas, rio fundo, tomadas, chuva forte. Lugares de ATENÇÃO." },
      { id: "herois", rotulo: "Heróis que ajudam", emoji: "🚒", cor: "from-red-500 to-orange-600", rect: { x: 55, y: 20, w: 40, h: 55 }, descricao: "Bombeiro (193), ambulância (192), polícia (190), guarda de trânsito, professor. Chame quando precisar!" },
    ],
    falaFinal: "Todo lugar tem risco E tem HERÓI pra ajudar. Você nunca está sozinho!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar como se ATRAVESSA a rua com segurança. 4 passos!",
    instrucao: "Toque na ordem certa",
    pergunta: "Como atravessar a rua com segurança?",
    paradas: [
      { id: "chega", emoji: "🚸", rotulo: "Chegar na faixa de pedestre", descricao: "Nunca no meio da rua. SEMPRE na faixa." },
      { id: "olhar", emoji: "👀", rotulo: "Olhar pros dois lados", descricao: "Esquerda, direita, esquerda de novo. Vê se vem carro?" },
      { id: "mao", emoji: "🤝", rotulo: "Dar a mão pro adulto", descricao: "Se estiver com adulto, segurar bem firme." },
      { id: "atravessar", emoji: "🚶", rotulo: "Atravessar sem correr", descricao: "Passo firme, olhando os carros. Nunca correndo." },
    ],
    ordemCerta: ["chega", "olhar", "mao", "atravessar"],
    feedbackAcerto: "Travessia perfeita! Você virou expert.",
    feedbackErro: "Pensa: faixa → olhar → mão do adulto → atravessar.",
    falaFinal: "4 passos que evitam acidente. Faz sempre assim!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez! Eu calo. Você lê e toca nas palavras.",
    tituloLivro: "📔 Diário do Cartógrafo",
    subtitulo: "Página 4 — Cuidando do Meu Lugar",
    paragrafos: [
      { id: "p1", texto: "RISCO é a chance de acontecer algo ruim. Rua movimentada tem risco de atropelamento. Rio fundo tem risco de afogar.", chaves: ["risco", "atropelamento"] },
      { id: "p2", texto: "CUIDADO é o que a gente faz pra evitar o risco. Atravessar na FAIXA. Nunca colocar dedo na TOMADA.", chaves: ["cuidado", "faixa", "tomada"] },
      { id: "p3", texto: "Em EMERGÊNCIA, a gente pede AJUDA: 192 (ambulância), 193 (bombeiro), 190 (polícia). Guarda esses números!", chaves: ["emergência", "192", "193", "190"] },
      { id: "p4", texto: "Cartógrafo bom conhece os RISCOS do seu lugar e sabe os CUIDADOS. Assim vive tranquilo, sem medo.", chaves: ["riscos", "cuidados"] },
    ],
    falaFinal: "Página fechada! Você já protege seu lugar sozinho.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "MISSÃO PROTEÇÃO! Cada rodada mostra uma cena. Escolha o CUIDADO certo antes do relógio!",
    instrucao: "⏱️ Escolha o cuidado certo!",
    duracaoSegundos: 15,
    pecas: [
      { id: "faixa", emoji: "🚸", rotulo: "Ir na faixa" },
      { id: "adulto", emoji: "🧑‍🦳", rotulo: "Chamar adulto" },
      { id: "192", emoji: "🚑", rotulo: "Ligar 192" },
      { id: "193", emoji: "🚒", rotulo: "Ligar 193" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Rua", emoji: "🚗", cor: "from-slate-500 to-slate-700" },
        municipioB: { nome: "Vai atravessar", emoji: "🚶", cor: "from-sky-400 to-indigo-500" },
        contexto: "Você precisa atravessar a rua movimentada. O que fazer?",
        pecaCertaId: "faixa",
        feedbackAcerto: "Sim! FAIXA 🚸.",
        feedbackErro: "Atravessar rua = usar FAIXA 🚸.",
      },
      {
        id: "r2",
        municipioA: { nome: "Casa", emoji: "🏠", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Fumaça!", emoji: "🔥", cor: "from-red-500 to-rose-700" },
        contexto: "Está saindo fumaça da cozinha. O que fazer?",
        pecaCertaId: "193",
        feedbackAcerto: "Isso! Sair + BOMBEIRO 193.",
        feedbackErro: "Fumaça/fogo = ligar 193 (BOMBEIRO).",
      },
      {
        id: "r3",
        municipioA: { nome: "Praça", emoji: "🌳", cor: "from-emerald-500 to-teal-700" },
        municipioB: { nome: "Idoso caiu", emoji: "🤕", cor: "from-red-400 to-rose-600" },
        contexto: "Um idoso caiu no chão da praça e está com muita dor.",
        pecaCertaId: "192",
        feedbackAcerto: "Perfeito! Ligar 192 (AMBULÂNCIA).",
        feedbackErro: "Machucado grave = 192 (AMBULÂNCIA).",
      },
      {
        id: "r4",
        municipioA: { nome: "Beira do rio", emoji: "🌊", cor: "from-cyan-500 to-blue-700" },
        municipioB: { nome: "Você sozinho", emoji: "🧒", cor: "from-amber-400 to-orange-500" },
        contexto: "Você está na beira do rio, sem adulto, e quer entrar na água.",
        pecaCertaId: "adulto",
        feedbackAcerto: "Sim! CHAMAR ADULTO antes.",
        feedbackErro: "Água + sem adulto = CHAMAR adulto antes.",
      },
    ],
    falaFinal: "Missão Proteção completa! Você já sabe a hora de agir.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Segurança é uma pizza de 2 fatias: eu me CUIDO + eu peço AJUDA. Toca em cada!",
    instrucao: "🍕 Toque nas fatias",
    fatias: [
      {
        id: "cuidar",
        rotulo: "Eu me cuido",
        emoji: "🛡️",
        percentual: 60,
        cor: "#10b981",
        descricao: "Atravessar na faixa, dar mão pro adulto, não mexer em tomada, usar cinto no carro.",
        exemplos: ["Faixa 🚸", "Mão do adulto 🤝", "Cinto no carro 💺"],
      },
      {
        id: "ajuda",
        rotulo: "Eu peço ajuda",
        emoji: "🚨",
        percentual: 40,
        cor: "#ef4444",
        descricao: "Quando é grande demais: 192 ambulância, 193 bombeiro, 190 polícia. Adulto próximo.",
        exemplos: ["192 🚑", "193 🚒", "190 🚔"],
      },
    ],
    falaFinal: "Cuidar + pedir ajuda = lugar seguro pra viver!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão da UNIDADE 1! 3 perguntas.",
    instrucao: "Escolha a resposta certa",
    perguntas: [
      {
        id: "p1",
        pergunta: "Qual é o número do BOMBEIRO?",
        opcoes: [
          { id: "a", texto: "190." },
          { id: "b", texto: "192." },
          { id: "c", texto: "193.", correta: true },
        ],
        feedbackAcerto: "Isso! Bombeiro = 193 🚒.",
        feedbackErro: "Bombeiro = 193. Ambulância = 192. Polícia = 190.",
      },
      {
        id: "p2",
        pergunta: "Como se atravessa a rua com segurança?",
        opcoes: [
          { id: "a", texto: "Correndo no meio dos carros." },
          { id: "b", texto: "Na FAIXA, olhando os dois lados, com adulto.", correta: true },
          { id: "c", texto: "Fechando os olhos." },
        ],
        feedbackAcerto: "Perfeito!",
        feedbackErro: "FAIXA + OLHAR + ADULTO.",
      },
      {
        id: "p3",
        pergunta: "CUIDADO serve pra...",
        opcoes: [
          { id: "a", texto: "Ficar com medo o tempo todo." },
          { id: "b", texto: "Evitar que o RISCO vire acidente.", correta: true },
          { id: "c", texto: "Não sair de casa." },
        ],
        feedbackAcerto: "Isso! Cuidado = prevenir o risco.",
        feedbackErro: "Cuidado EVITA que o risco vire acidente.",
      },
    ],
    selo: {
      nome: "Guardião do Lugar",
      subtitulo: "Insígnia final — Unidade 1",
      emoji: "🛡️",
      cor: "from-red-300 to-orange-500",
    },
    falaFinal: "Unidade 1 fechada! Você virou Pequeno Cartógrafo, Guardião da Convivência, Mestre das Profissões E Guardião do Lugar. Parabéns!",
  },

  recompensa: { xp: 100, moedas: 25, medalha: "Guardião do Lugar" },
};
