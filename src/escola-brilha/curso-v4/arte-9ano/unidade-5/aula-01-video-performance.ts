import type { AulaArteV1 } from "../../types";
import { url as vertical } from "@/assets/arte-9ano/u5-video-vertical.jpg.asset.json";
import { url as aldeia } from "@/assets/arte-9ano/u5-video-aldeia.jpg.asset.json";
import { url as storyboard } from "@/assets/arte-9ano/u5-storyboard.jpg.asset.json";
import { url as performance } from "@/assets/arte-9ano/u5-performance-terra.jpg.asset.json";
import { url as edicao } from "@/assets/arte-9ano/u5-edicao-video.jpg.asset.json";
import { url as entrevista } from "@/assets/arte-9ano/u5-entrevista-avo.jpg.asset.json";

export const aula01: AulaArteV1 = {
  slug: "aula-01-video-performance",
  titulo: "Vídeo-Performances, Memórias Digitais e Ativismo em Tela",
  iconeTrilha: "🎥",
  bncc: ["EF69AR30", "EF69AR31", "EF69AR32"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica", variante: "explorar",
    aurora: "Diretor da Performance! O app abriu uma linha do tempo com filmagens verticais e transmissões ao vivo. Na era dos smartphones, a CÂMERA virou palco. Toca em cada pista pra abrir o Arquivo da Vídeo-Arte.",
    titulo: "🎥 O Despertar da Câmera-Palco",
    instrucao: "Toca em cada pista",
    itens: [
      { emoji: "🎥", rotulo: "Vídeo-Performance", descricao: "Linguagem híbrida onde a ação corporal do artista é CONCEBIDA especificamente para ser capturada, editada e transmitida.", cor: "#7c3aed", fotoUrl: vertical },
      { emoji: "📢", rotulo: "Contranarrativa Audiovisual", descricao: "Produção de vídeos que DESAFIAM as histórias oficiais contadas pelos grandes canais de comunicação de massa.", cor: "#dc2626", fotoUrl: aldeia },
      { emoji: "🎬", rotulo: "Enquadramento Crítico", descricao: "Escolha consciente do corte visual — o que fica DENTRO e o que fica FORA da imagem define o peso político da cena.", cor: "#0891b2", fotoUrl: storyboard },
      { emoji: "📱", rotulo: "Auto-Registro Conceitual", descricao: "Uso do próprio smartphone para gravar performances curtas que viajam instantaneamente por fronteiras políticas.", cor: "#f97316", fotoUrl: performance },
    ],
    falaFinal: "Sua missão: virar Diretor da Performance — a câmera é seu palco.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de diretor.",
    perguntas: [
      { pergunta: "O coletivo 'Vídeo nas Aldeias' entrega câmeras a JOVENS INDÍGENAS para gravarem seus rituais. Qual é o objetivo político?", fotoUrl: aldeia, alternativas: [
        { texto: "Desconstruir o olhar estereotipado do cinema estrangeiro — os povos filmam a SI mesmos", correta: true },
        { texto: "Copiar exatamente o estilo dos documentários europeus antigos", correta: false },
      ], feedbackAcerto: "Perfeito! É contranarrativa audiovisual em ação.", feedbackErro: "O OPOSTO — a câmera na mão do próprio povo é resistência." },
      { pergunta: "Um vídeo fixo mostra mãos juntando TERRA misturada com plástico por 30 segundos, sem palavras. O que a obra ESCULPE?", fotoUrl: performance, alternativas: [
        { texto: "Uma performance audiovisual silenciosa sobre o sufocamento da natureza", correta: true },
        { texto: "Apenas um vídeo aleatório sem intenção poética alguma", correta: false },
      ], feedbackAcerto: "Isso! Silêncio + duração = performance conceitual.", feedbackErro: "Cada escolha (fixo, silêncio, terra+plástico) É intencional." },
      { pergunta: "O que a câmera VERTICAL do smartphone permite na arte contemporânea?", fotoUrl: vertical, alternativas: [
        { texto: "Distribuição instantânea global através das redes de transmissão", correta: true },
        { texto: "Nada — o formato vertical é sempre inferior ao horizontal", correta: false },
      ], feedbackAcerto: "Correto! O vertical é a linguagem nativa das redes.", feedbackErro: "O vertical é a NOVA linguagem — não é inferior, é diferente." },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do diretor.",
    cards: [
      { termo: "Vídeo-Performance", definicao: "Ação corporal concebida especificamente para ser gravada — depende da câmera para existir.", emoji: "🎥", cor: "#7c3aed", fotoUrl: vertical },
      { termo: "Contranarrativa", definicao: "Vídeos que desafiam ou oferecem ponto de vista alternativo às histórias oficiais dos grandes canais.", emoji: "📢", cor: "#dc2626", fotoUrl: aldeia },
      { termo: "Enquadramento Crítico", definicao: "Escolha do corte visual — define a carga emocional e política da cena.", emoji: "🎬", cor: "#0891b2", fotoUrl: storyboard },
      { termo: "Auto-Registro", definicao: "Uso do próprio smartphone para gravar performances conceituais curtas.", emoji: "📱", cor: "#f97316", fotoUrl: performance },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a câmera saiu do documentário e virou palco.",
    paragrafos: [
      "No 9º ano você aprende: a CÂMERA não é só registro — é palco. A ação do artista é CONCEBIDA para existir através dela. Isso se chama VÍDEO-PERFORMANCE.",
      "Marina Abramović fez performances que só existem porque a câmera as capturou. Sem o registro em vídeo, a obra sumiria no tempo. O vídeo é o corpo material da performance.",
      "No Brasil, o coletivo Vídeo nas Aldeias entrega câmeras digitais nas mãos de jovens cineastas INDÍGENAS desde os anos 1980. Eles mesmos filmam seus rituais, rotinas e lutas por terra. Isso desconstrói o olhar estereotipado do cinema estrangeiro.",
      "Isso se chama CONTRANARRATIVA AUDIOVISUAL: vídeos que desafiam as histórias oficiais contadas pelos grandes canais de comunicação. Quando o próprio povo filma, o ponto de vista muda tudo.",
      "A ferramenta central é o ENQUADRAMENTO CRÍTICO: a escolha consciente do que entra na imagem e do que fica de fora. Um close no rosto dá um peso. Um plano aberto da rua dá outro. O corte é político.",
      "Na era dos smartphones, cada estudante vira diretor: câmera vertical, 30 segundos, ação silenciosa. As redes globais transportam a obra instantaneamente através de fronteiras — o ativismo em tela é resistência poética coletiva.",
    ],
    pigmentos: [
      { nome: "Vídeo-Performance", hex: "#7c3aed", fonte: "Ação para a câmera", emoji: "🎥", fotoUrl: vertical },
      { nome: "Vídeo nas Aldeias", hex: "#dc2626", fonte: "Câmera na mão do povo", emoji: "📢", fotoUrl: aldeia },
      { nome: "Enquadramento", hex: "#0891b2", fonte: "Corte político consciente", emoji: "🎬", fotoUrl: storyboard },
      { nome: "Auto-Registro", hex: "#f97316", fonte: "Smartphone como palco", emoji: "📱", fotoUrl: performance },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o caderno do diretor!",
    perguntas: [
      { pergunta: "O que diferencia essencialmente uma VÍDEO-PERFORMANCE de um filme comercial?", fotoUrl: vertical, alternativas: [
        { texto: "Foca na ação corporal e conceitual do artista como obra estruturada para a câmera, sem buscar entretenimento de massa", correta: true },
        { texto: "É sempre gravada em preto e branco porque artistas não sabem usar câmeras coloridas", correta: false },
      ], feedbackAcerto: "Perfeito! Vídeo-performance é espelho crítico, não entretenimento.", feedbackErro: "Preto e branco é escolha estética — não limitação técnica." },
      { pergunta: "Por que o coletivo 'Vídeo nas Aldeias' é uma CONTRANARRATIVA?", fotoUrl: aldeia, alternativas: [
        { texto: "Os próprios indígenas filmam a si mesmos, quebrando o olhar estrangeiro estereotipado", correta: true },
        { texto: "Eles copiam exatamente o cinema comercial internacional", correta: false },
      ], feedbackAcerto: "Isso! Câmera na mão do povo = ponto de vista revolucionário.", feedbackErro: "Copiar é o CONTRÁRIO — contranarrativa é reinventar." },
      { pergunta: "O que define o ENQUADRAMENTO CRÍTICO?", fotoUrl: storyboard, alternativas: [
        { texto: "Escolha consciente do que fica DENTRO e o que fica FORA da imagem — define o peso político da cena", correta: true },
        { texto: "A câmera grava tudo automaticamente sem qualquer escolha do diretor", correta: false },
      ], feedbackAcerto: "Correto! O corte é a decisão política central.", feedbackErro: "Câmera não decide sozinha — o diretor SEMPRE escolhe." },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada vídeo pelo tipo!",
    animais: [
      { nome: "Vídeo curto vertical de mãos com terra e plástico", emoji: "📱", fotoUrl: performance, corAlvo: { nome: "Vídeo-Performance Ecológica", hex: "#7c3aed" }, opcoes: [{ nome: "Vídeo-Performance Ecológica", hex: "#7c3aed" }, { nome: "Propaganda de refrigerante", hex: "#78716c" }, { nome: "Novela de TV", hex: "#78716c" }], falaAcerto: "Isso! Silêncio + duração + tema = performance conceitual." },
      { nome: "Jovem indígena filmando ritual da própria aldeia", emoji: "📹", fotoUrl: aldeia, corAlvo: { nome: "Contranarrativa Audiovisual", hex: "#dc2626" }, opcoes: [{ nome: "Contranarrativa Audiovisual", hex: "#dc2626" }, { nome: "Documentário estrangeiro clássico", hex: "#78716c" }, { nome: "Filme de aventura Hollywood", hex: "#78716c" }], falaAcerto: "Correto! Vídeo nas Aldeias inverte quem tem a câmera." },
      { nome: "Entrevista de 1 minuto com a avó gravada no celular", emoji: "👵", fotoUrl: entrevista, corAlvo: { nome: "Memória Familiar Registrada", hex: "#f97316" }, opcoes: [{ nome: "Memória Familiar Registrada", hex: "#f97316" }, { nome: "Comercial de banco", hex: "#78716c" }, { nome: "Filme de terror", hex: "#78716c" }], falaAcerto: "Perfeito! O smartphone preserva memória com enquadramento crítico." },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos para criar sua vídeo-performance ativista.",
    passos: [
      { id: "p1", texto: "Escolho o TEMA crítico (natureza, memória, ansiedade)", emoji: "💡", ordem: 1, fotoUrl: performance },
      { id: "p2", texto: "Desenho o STORYBOARD com 3 quadros verticais mostrando cada cena", emoji: "🎬", ordem: 2, fotoUrl: storyboard },
      { id: "p3", texto: "Gravo os 3 planos com a câmera vertical do celular", emoji: "📱", ordem: 3, fotoUrl: vertical },
      { id: "p4", texto: "EDITO os cortes na timeline sincronizando com a batida do áudio", emoji: "🎛️", ordem: 4, fotoUrl: edicao },
      { id: "p5", texto: "Publico nas redes — a obra atravessa fronteiras instantaneamente", emoji: "🌐", ordem: 5, fotoUrl: entrevista },
    ],
    falaAcerto: "Sua vídeo-performance está no ar!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Diário do diretor da performance.",
    titulo: "Diário do Diretor da Performance",
    trechos: [
      { texto: "Sou diretor da performance. Minha ferramenta é a", palavraDestaque: "vídeo-performance", corDestaque: "#7c3aed" },
      { texto: "Quando meu vídeo desafia a história oficial, faço", palavraDestaque: "contranarrativa", corDestaque: "#dc2626" },
      { texto: "Todo corte é político — pratico o", palavraDestaque: "enquadramento crítico", corDestaque: "#0891b2" },
      { texto: "E com meu smartphone faço o", palavraDestaque: "auto-registro conceitual", corDestaque: "#f97316" },
      { texto: "que viaja pelas redes através de todas as fronteiras." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica", variante: "minijogo",
    aurora: "🎛️ O Editor de Cortes Poéticos! Corta trechos de vídeo antigos e sincroniza com as batidas do áudio.",
    titulo: "🎛️ Editor de Cortes",
    instrucao: "Sincronize imagem e som!",
    tempoSeg: 40,
    itens: [
      { emoji: "🎥", rotulo: "Câmera do diretor", cor: "#7c3aed", fotoUrl: vertical },
      { emoji: "📢", rotulo: "Vídeo aldeia", cor: "#dc2626", fotoUrl: aldeia },
      { emoji: "🎬", rotulo: "Storyboard", cor: "#0891b2", fotoUrl: storyboard },
      { emoji: "🌱", rotulo: "Performance ecológica", cor: "#16a34a", fotoUrl: performance },
      { emoji: "🎛️", rotulo: "Mesa de edição", cor: "#f97316", fotoUrl: edicao },
      { emoji: "👵", rotulo: "Memória familiar", cor: "#b45309", fotoUrl: entrevista },
    ],
    falaFinal: "Edição sincronizada!",
  },

  cena10_revisao: {
    tipo: "cenaTematica", variante: "revisar",
    aurora: "Consolida o arquivo cronológico.",
    titulo: "🎥 Caderno da Vídeo-Arte",
    itens: [
      { emoji: "🎥", rotulo: "Vídeo-Performance", descricao: "Ação corporal concebida para a câmera — sem o registro, a obra não existe.", cor: "#7c3aed", fotoUrl: vertical },
      { emoji: "📢", rotulo: "Vídeo nas Aldeias", descricao: "Coletivo brasileiro que entrega câmeras a jovens indígenas — contranarrativa audiovisual desde 1980.", cor: "#dc2626", fotoUrl: aldeia },
      { emoji: "🎬", rotulo: "Enquadramento Crítico", descricao: "Escolha consciente do que entra na imagem — o corte é decisão política.", cor: "#0891b2", fotoUrl: storyboard },
      { emoji: "🌱", rotulo: "Ativismo em Tela", descricao: "Performances curtas silenciosas que denunciam pelo silêncio e pela duração.", cor: "#16a34a", fotoUrl: performance },
      { emoji: "🎛️", rotulo: "Edição Poética", descricao: "Cortes sincronizados com batidas de áudio conceitual — o ritmo é linguagem.", cor: "#f97316", fotoUrl: edicao },
      { emoji: "👵", rotulo: "Memória Digital", descricao: "Entrevistas familiares registradas no celular preservam a história oral com enquadramento crítico.", cor: "#b45309", fotoUrl: entrevista },
    ],
    falaFinal: "O Arquivo Cronológico da Vídeo-Arte Viva RESTAURADO!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, diretor!",
    quiz: {
      pergunta: "O que diferencia essencialmente uma Vídeo-Performance contemporânea de um filme de cinema comercial tradicional?",
      alternativas: [
        { texto: "A vídeo-performance foca na ação corporal e conceitual do artista como obra direta estruturada para a câmera, sem buscar o entretenimento de massas", correta: true },
        { texto: "A vídeo-performance é sempre gravada sem cores porque os artistas contemporâneos não sabem usar câmeras modernas coloridas", correta: false },
      ],
      feedback: "Perfeito! O vídeo na arte contemporânea funciona como um espelho crítico e uma extensão do corpo que quebra os clichês da televisão comercial. Marina Abramović usa a câmera como registro obrigatório da performance; Vídeo nas Aldeias entrega a câmera aos próprios povos indígenas fazendo contranarrativa audiovisual. Todo corte é político.",
    },
    missaoFamilia: "🎥 O Diretor da Memória Familiar: escolha um familiar mais velho e faça uma mini-entrevista em vídeo (máximo 1 minuto). Peça uma lembrança da juventude que gostaria de guardar. Assistam juntos prestando atenção ao enquadramento!",
    recompensaTitulo: "🎥 O Arquivo Cronológico da Vídeo-Arte Viva RESTAURADO.",
    recompensaItem: "📹 Lente Cinematográfica de Captura Conceitual",
  },

  recompensa: { xp: 140, moedas: 70, medalha: "Lente de Captura Conceitual" },
};
