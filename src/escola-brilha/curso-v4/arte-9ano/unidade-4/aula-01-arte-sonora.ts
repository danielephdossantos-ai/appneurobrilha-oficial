import type { AulaArteV1 } from "../../types";
import { url as ponte } from "@/assets/arte-9ano/u4-philipsz-ponte.jpg.asset.json";
import { url as instalacao } from "@/assets/arte-9ano/u4-instalacao-sonora.jpg.asset.json";
import { url as partitura } from "@/assets/arte-9ano/u4-partitura-visual.jpg.asset.json";
import { url as cidade } from "@/assets/arte-9ano/u4-cidade-ruido.jpg.asset.json";
import { url as microfone } from "@/assets/arte-9ano/u4-microfone.jpg.asset.json";
import { url as silencio } from "@/assets/arte-9ano/u4-silencio-familia.jpg.asset.json";

export const aula01: AulaArteV1 = {
  slug: "aula-01-arte-sonora",
  titulo: "Instalações Sonoras, Paisagem Acústica e Arte Conceitual",
  iconeTrilha: "🔊",
  bncc: ["EF69AR22", "EF69AR24", "EF69AR31"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica", variante: "explorar",
    aurora: "Engenheiro de Paisagens Sonoras! As telas ficaram pretas — mas quando você fica em silêncio, começa a OUVIR pingos, tambores, sussurros e trânsito. Aqui o som É a escultura. Toca em cada pista pra ativar o Pavilhão Acústico.",
    titulo: "🔊 O Despertar da Escuta Ativa",
    instrucao: "Toca em cada pista",
    itens: [
      { emoji: "🔊", rotulo: "Arte Sonora (Sound Art)", descricao: "Linguagem interdisciplinar onde o som e a escuta ativa são o meio principal para criar experiências plásticas tridimensionais.", cor: "#0891b2", fotoUrl: instalacao },
      { emoji: "🏙️", rotulo: "Paisagem Sonora", descricao: "Conjunto de todos os sons que ocorrem em um ambiente (ruídos, natureza, falas), formando a identidade acústica daquele lugar.", cor: "#dc2626", fotoUrl: cidade },
      { emoji: "🎼", rotulo: "Escultura Invisível", descricao: "O som ESCULPE o espaço sem forma visível — a instalação existe pelos ouvidos, não pelos olhos.", cor: "#7c3aed", fotoUrl: ponte },
      { emoji: "🤫", rotulo: "Silêncio Conceitual", descricao: "Uso do silêncio ou sussurro como resistência artística contra o excesso de ruído industrializado das cidades modernas.", cor: "#0f766e", fotoUrl: silencio },
    ],
    falaFinal: "Sua missão: virar Engenheiro de Paisagens Sonoras — esculpir o espaço com frequências.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o ouvido crítico.",
    perguntas: [
      { pergunta: "Uma artista esconde alto-falantes sob uma PONTE de concreto e projeta sua voz cantando canções folclóricas. Qual é o efeito da obra?", fotoUrl: ponte, alternativas: [
        { texto: "Transforma o espaço cinza urbano em ambiente carregado de melancolia e memória poética", correta: true },
        { texto: "Apenas oculta as canções para que ninguém as escute", correta: false },
      ], feedbackAcerto: "Perfeito! Susan Philipsz esculpe o espaço com sua voz.", feedbackErro: "Não é esconder — é INVADIR poeticamente o espaço público." },
      { pergunta: "Uma sala de museu vazia e escura só toca dezenas de despertadores tocando ao mesmo tempo. O que a obra ESCULPE?", fotoUrl: instalacao, alternativas: [
        { texto: "Uma sensação de ansiedade e pressa usando apenas ondas sonoras", correta: true },
        { texto: "Nada — é só barulho aleatório sem intenção artística", correta: false },
      ], feedbackAcerto: "Isso! Som puro esculpe emoções tridimensionais.", feedbackErro: "Som + intenção = arte sonora conceitual." },
      { pergunta: "O barulho INDUSTRIAL constante das metrópoles se chama:", fotoUrl: cidade, alternativas: [
        { texto: "Poluição sonora — debate estético central da arte contemporânea", correta: true },
        { texto: "Trilha sonora comercial produzida pela cidade", correta: false },
      ], feedbackAcerto: "Correto! A arte sonora denuncia esse excesso.", feedbackErro: "Poluição sonora é involuntária — não é composição." },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do engenheiro de paisagens sonoras.",
    cards: [
      { termo: "Arte Sonora", definicao: "Linguagem artística onde o som e a escuta ativa são o meio principal da experiência plástica.", emoji: "🔊", cor: "#0891b2", fotoUrl: instalacao },
      { termo: "Paisagem Sonora", definicao: "Conjunto de sons que forma a identidade acústica de um ambiente específico.", emoji: "🏙️", cor: "#dc2626", fotoUrl: cidade },
      { termo: "Escultura Invisível", definicao: "Instalação que existe pelos ouvidos — o som molda o espaço sem forma visível.", emoji: "🎼", cor: "#7c3aed", fotoUrl: ponte },
      { termo: "Silêncio Conceitual", definicao: "Uso do silêncio como resistência artística ao excesso de ruído das cidades.", emoji: "🤫", cor: "#0f766e", fotoUrl: silencio },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como o som saiu da trilha musical e virou escultura tridimensional.",
    paragrafos: [
      "No 9º ano você descobre uma verdade: o som NÃO é o fundo de um quadro — o som É o próprio quadro. Isso se chama ARTE SONORA.",
      "Susan Philipsz, artista escocesa, instala alto-falantes escondidos sob pontes de concreto. Sua voz canta canções folclóricas antigas sobre o barulho da água e do trânsito. O cinza urbano ganha melancolia e memória poética.",
      "Murray Schafer criou o conceito de PAISAGEM SONORA (soundscape): o conjunto de sons — ruídos mecânicos, cantos de pássaros, falas humanas — que forma a identidade acústica de um lugar. Cada bairro tem sua paisagem sonora única.",
      "As metrópoles sofrem de POLUIÇÃO SONORA: excesso de ruído industrializado que agride o corpo e a mente. A arte sonora contemporânea denuncia esse caos usando o próprio som como ferramenta crítica.",
      "Uma sala vazia com dezenas de despertadores tocando esculpe ANSIEDADE. Um museu que só reproduz o som de uma geladeira antiga esculpe MEMÓRIA de casa. Não precisa de imagem — o som constrói a emoção.",
      "O oposto do ruído é o SILÊNCIO CONCEITUAL: um minuto de silêncio absoluto em uma sala revela sons ocultos (relógio, respiração, pássaros distantes) que a poluição sonora escondia. O silêncio também é obra.",
    ],
    pigmentos: [
      { nome: "Arte Sonora", hex: "#0891b2", fonte: "Som como escultura", emoji: "🔊", fotoUrl: instalacao },
      { nome: "Paisagem", hex: "#dc2626", fonte: "Identidade acústica de um lugar", emoji: "🏙️", fotoUrl: cidade },
      { nome: "Philipsz", hex: "#7c3aed", fonte: "Voz sob pontes urbanas", emoji: "🎼", fotoUrl: ponte },
      { nome: "Silêncio", hex: "#0f766e", fonte: "Resistência ao ruído", emoji: "🤫", fotoUrl: silencio },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o caderno acústico!",
    perguntas: [
      { pergunta: "O que diferencia ARTE SONORA de uma música comum de rádio?", fotoUrl: instalacao, alternativas: [
        { texto: "O som é o MEIO principal da experiência plástica tridimensional — esculpe o espaço", correta: true },
        { texto: "Não há diferença nenhuma entre as duas linguagens", correta: false },
      ], feedbackAcerto: "Correto! Arte sonora existe pra esculpir, não pra tocar em playlist.", feedbackErro: "Rádio entretém; arte sonora ESCULPE emoção tridimensional." },
      { pergunta: "Como podemos definir PAISAGEM SONORA?", fotoUrl: cidade, alternativas: [
        { texto: "Conjunto de manifestações sonoras que formam a identidade acústica de um ambiente", correta: true },
        { texto: "Quadro pintado com tinta acrílica retratando músicos", correta: false },
      ], feedbackAcerto: "Excelente! Cada lugar tem sua paisagem sonora única.", feedbackErro: "Quadro é imagem — paisagem sonora é SOM." },
      { pergunta: "Por que o silêncio conceitual é considerado arte contemporânea?", fotoUrl: silencio, alternativas: [
        { texto: "Revela sons ocultos escondidos pela poluição sonora — resistência estética", correta: true },
        { texto: "Ausência de conteúdo — não é arte", correta: false },
      ], feedbackAcerto: "Perfeito! O silêncio é composição intencional.", feedbackErro: "Silêncio escolhido é composição — não é ausência." },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada obra sonora!",
    animais: [
      { nome: "Voz cantando escondida sob uma ponte urbana", emoji: "🎼", fotoUrl: ponte, corAlvo: { nome: "Instalação Sonora Site-Specific", hex: "#7c3aed" }, opcoes: [{ nome: "Instalação Sonora Site-Specific", hex: "#7c3aed" }, { nome: "Show comercial", hex: "#78716c" }, { nome: "Trilha de filme", hex: "#78716c" }], falaAcerto: "Isso! Philipsz esculpe o espaço com voz." },
      { nome: "Sala escura com despertadores tocando ao mesmo tempo", emoji: "🔊", fotoUrl: instalacao, corAlvo: { nome: "Escultura Invisível", hex: "#0891b2" }, opcoes: [{ nome: "Escultura Invisível", hex: "#0891b2" }, { nome: "Pintura Renascentista", hex: "#78716c" }, { nome: "Aquarela", hex: "#78716c" }], falaAcerto: "Correto! Som esculpe ansiedade em 3D." },
      { nome: "Um minuto sem eletrônicos em casa", emoji: "🤫", fotoUrl: silencio, corAlvo: { nome: "Silêncio Conceitual", hex: "#0f766e" }, opcoes: [{ nome: "Silêncio Conceitual", hex: "#0f766e" }, { nome: "Barulho industrial", hex: "#dc2626" }, { nome: "Show de rock", hex: "#78716c" }], falaAcerto: "Perfeito! Silêncio como resistência estética." },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos para criar uma instalação sonora de protesto ecológico.",
    passos: [
      { id: "p1", texto: "Escolho o TEMA crítico (ex: desmatamento, poluição, ansiedade urbana)", emoji: "🌲", ordem: 1, fotoUrl: cidade },
      { id: "p2", texto: "Capto os 4 SONS principais com o microfone (motosserra, pássaro digital, batimento)", emoji: "🎤", ordem: 2, fotoUrl: microfone },
      { id: "p3", texto: "Desenho a PARTITURA visual: traços ondulados, blocos e pontos numa linha do tempo", emoji: "🎼", ordem: 3, fotoUrl: partitura },
      { id: "p4", texto: "Distribuo os ALTO-FALANTES pelo espaço para criar direção tridimensional do som", emoji: "🔊", ordem: 4, fotoUrl: instalacao },
      { id: "p5", texto: "Ativo a instalação — visitantes atravessam a escultura invisível", emoji: "🚶", ordem: 5, fotoUrl: ponte },
    ],
    falaAcerto: "Sua instalação sonora está pronta pra estrear!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do engenheiro sonoro.",
    titulo: "Diário do Engenheiro Acústico",
    trechos: [
      { texto: "Sou engenheiro de paisagens sonoras. Trabalho com", palavraDestaque: "arte sonora", corDestaque: "#0891b2" },
      { texto: "Cada bairro tem uma", palavraDestaque: "paisagem sonora", corDestaque: "#dc2626" },
      { texto: "própria. Combato a poluição sonora com o", palavraDestaque: "silêncio conceitual", corDestaque: "#0f766e" },
      { texto: "e crio", palavraDestaque: "esculturas invisíveis", corDestaque: "#7c3aed" },
      { texto: "que existem pelos ouvidos, não pelos olhos." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica", variante: "minijogo",
    aurora: "🎤 O Capturador de Ruídos Urbanos! Isola frequências de poluição sonora e transforma em notas musicais.",
    titulo: "🎤 O Capturador de Ruídos",
    instrucao: "Captura e organiza os sons!",
    tempoSeg: 40,
    itens: [
      { emoji: "🎤", rotulo: "Microfone", cor: "#0f766e", fotoUrl: microfone },
      { emoji: "🚗", rotulo: "Ruído de trânsito", cor: "#dc2626", fotoUrl: cidade },
      { emoji: "🎼", rotulo: "Partitura visual", cor: "#7c3aed", fotoUrl: partitura },
      { emoji: "🔊", rotulo: "Instalação", cor: "#0891b2", fotoUrl: instalacao },
      { emoji: "🌉", rotulo: "Ponte sonora", cor: "#f97316", fotoUrl: ponte },
      { emoji: "🤫", rotulo: "Silêncio", cor: "#78716c", fotoUrl: silencio },
    ],
    falaFinal: "Sinfonia generativa pronta!",
  },

  cena10_revisao: {
    tipo: "cenaTematica", variante: "revisar",
    aurora: "Consolida o caderno acústico!",
    titulo: "🔊 Caderno da Arte Sonora",
    itens: [
      { emoji: "🔊", rotulo: "Arte Sonora", descricao: "Som como meio principal — escultura tridimensional invisível que existe pelos ouvidos.", cor: "#0891b2", fotoUrl: instalacao },
      { emoji: "🏙️", rotulo: "Paisagem Sonora", descricao: "Identidade acústica de um lugar — conceito criado por Murray Schafer.", cor: "#dc2626", fotoUrl: cidade },
      { emoji: "🌉", rotulo: "Susan Philipsz", descricao: "Voz cantando escondida sob pontes urbanas — melancolia e memória no cinza da cidade.", cor: "#7c3aed", fotoUrl: ponte },
      { emoji: "🤫", rotulo: "Silêncio Conceitual", descricao: "Resistência estética ao excesso de ruído industrializado — o silêncio também é obra.", cor: "#0f766e", fotoUrl: silencio },
      { emoji: "🎼", rotulo: "Partitura Visual", descricao: "Anotação gráfica com traços, blocos e pontos representando sons numa linha do tempo.", cor: "#b45309", fotoUrl: partitura },
      { emoji: "🎤", rotulo: "Microfone de Captura", descricao: "Ferramenta central para gravar a paisagem sonora do bairro e transformar em obra.", cor: "#16a34a", fotoUrl: microfone },
    ],
    falaFinal: "Pavilhão Acústico do Códice RESTAURADO!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, engenheiro acústico!",
    quiz: {
      pergunta: "Como podemos definir o conceito de 'Paisagem Sonora' trabalhado pelos artistas contemporâneos?",
      alternativas: [
        { texto: "O conjunto de manifestações sonoras e ruídos característicos que formam a identidade de um ambiente específico", correta: true },
        { texto: "Um quadro pintado com tinta acrílica que retrata músicos tocando instrumentos na praia", correta: false },
      ],
      feedback: "Excelente! Ouvir o mundo criticamente é o primeiro passo para compreender como a arquitetura e a vida moderna afetam nossos corpos e mentes. Susan Philipsz usa a voz sob pontes; Murray Schafer criou o conceito de soundscape. A arte sonora contemporânea prova que o som ESCULPE o espaço sem imagem — a obra existe pelos ouvidos.",
    },
    missaoFamilia: "🤫 O Minuto do Silêncio Ativo: reúna a família, apague todos os aparelhos e fiquem 1 minuto em silêncio absoluto. Depois cada um lista 3 sons ocultos que ouviu (geladeira, pássaro, relógio). Registrem no álbum!",
    recompensaTitulo: "🔊 O Pavilhão Acústico do Códice RESTAURADO.",
    recompensaItem: "🎧 Sintonizador de Ondas de Escuta Ativa",
  },

  recompensa: { xp: 140, moedas: 70, medalha: "Sintonizador de Escuta Ativa" },
};
