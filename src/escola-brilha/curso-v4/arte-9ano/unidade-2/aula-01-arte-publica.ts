import type { AulaArteV1 } from "../../types";
import { url as wodiczko } from "@/assets/arte-9ano/u2-wodiczko-projecao.jpg.asset.json";
import { url as jrOlho } from "@/assets/arte-9ano/u2-jr-olho-escada.jpg.asset.json";
import { url as mapping } from "@/assets/arte-9ano/u2-mapping-fachada.jpg.asset.json";
import { url as artivismo } from "@/assets/arte-9ano/u2-artivismo-floresta.jpg.asset.json";
import { url as projetor } from "@/assets/arte-9ano/u2-projetor.jpg.asset.json";
import { url as esplanada } from "@/assets/arte-9ano/u2-esplanada.jpg.asset.json";

export const aula01: AulaArteV1 = {
  slug: "aula-01-arte-publica",
  titulo: "Arte Pública, Ativismo de Escala e Intervenções Urbanas Globais",
  iconeTrilha: "🏛️",
  bncc: ["EF69AR31", "EF69AR32", "EF69AR33"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora: "Artivista Urbano! As projeções artísticas saíram das galerias e cobriram fachadas de arranha-céus. No 9º ano, a RUA e a ESCALA URBANA são mídias de disputa política e poética. Toca em cada pista pra ativar o Portal da Arte Pública.",
    titulo: "🏛️ O Despertar da Cidade-Tela",
    instrucao: "Toca em cada pista pra ativar o Portal",
    itens: [
      { emoji: "🏛️", rotulo: "Arte Pública / Site-Specific", descricao: "Obras planejadas e executadas ESPECIFICAMENTE para interagir com um espaço externo, integrando-se à arquitetura local e alterando a percepção pública daquele ambiente.", cor: "#0891b2", fotoUrl: esplanada },
      { emoji: "📽️", rotulo: "Projeção Mapeada (Mapping)", descricao: "Técnica que projeta imagens em superfícies 3D complexas (fachadas, colunas), ajustando os feixes de luz aos relevos da arquitetura original.", cor: "#7c3aed", fotoUrl: mapping },
      { emoji: "✊", rotulo: "Artivismo", descricao: "Aglutinação de arte + ativismo: a linguagem estética vira ferramenta de resistência, denúncia e transformação política.", cor: "#dc2626", fotoUrl: artivismo },
      { emoji: "👁️", rotulo: "Escala Monumental", descricao: "Projetos gigantes (olhos, rostos, mensagens) colados sobre escadarias e prédios: o transeunte vira parte da obra involuntariamente.", cor: "#f97316", fotoUrl: jrOlho },
    ],
    falaFinal: "Sua missão: virar Artivista Urbano — transformar a cidade em tela política e poética.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de artivista antes de subir o projetor.",
    perguntas: [
      {
        pergunta: "Um artista projeta imagens de rostos de refugiados sobre um monumento público de mármore. Qual é o objetivo POLÍTICO da obra?",
        fotoUrl: wodiczko,
        alternativas: [
          { texto: "Dar CORPO e VOZ hiperdimensionados aos marginalizados sobre a arquitetura do poder — expor traumas ocultos", correta: true },
          { texto: "Apenas decorar o prédio antigo com luzes coloridas bonitas", correta: false },
        ],
        feedbackAcerto: "Perfeito! A projeção força a cidade a confrontar suas contradições sociais.",
        feedbackErro: "Cuidado: escala monumental em arte pública NUNCA é só decoração — é denúncia.",
      },
      {
        pergunta: "Uma fotografia gigante de um OLHO é colada sobre uma escadaria pública. O que acontece quando o pedestre sobe os degraus?",
        fotoUrl: jrOlho,
        alternativas: [
          { texto: "A imagem se DISTORCE e se recompõe — o pedestre vira parte da obra participativa involuntária", correta: true },
          { texto: "Nada acontece: a imagem fica exatamente igual de todos os ângulos", correta: false },
        ],
        feedbackAcerto: "Isso! A escala urbana ativa a participação do corpo do transeunte.",
        feedbackErro: "A escada distorce a foto — é o efeito ANAMÓRFICO que a obra planejou.",
      },
      {
        pergunta: "Projetar imagem de uma FLORESTA QUEIMANDO sobre o Congresso Nacional durante uma votação ambiental é um ato de:",
        fotoUrl: artivismo,
        alternativas: [
          { texto: "Artivismo — arte + ativismo forçando o debate público de forma estética", correta: true },
          { texto: "Vandalismo destruidor sem qualquer conteúdo crítico ou artístico", correta: false },
        ],
        feedbackAcerto: "Correto! A arquitetura ganha uma pele política temporária.",
        feedbackErro: "Projeção não destrói o prédio — dá a ele uma mensagem crítica temporária.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do artivista.",
    cards: [
      { termo: "Arte Pública / Site-Specific", definicao: "Obras planejadas para interagir com um espaço externo específico, alterando a percepção daquele ambiente urbano.", emoji: "🏛️", cor: "#0891b2", fotoUrl: esplanada },
      { termo: "Projeção Mapeada", definicao: "Projeção de imagens em superfícies 3D (fachadas de igrejas, prédios), ajustada aos relevos e linhas da arquitetura.", emoji: "📽️", cor: "#7c3aed", fotoUrl: mapping },
      { termo: "Artivismo", definicao: "Arte + ativismo: linguagem estética usada deliberadamente como ferramenta de resistência e transformação política.", emoji: "✊", cor: "#dc2626", fotoUrl: artivismo },
      { termo: "Escala Monumental", definicao: "Proporções gigantescas que transformam prédios inteiros em tela e envolvem o pedestre na obra.", emoji: "👁️", cor: "#f97316", fotoUrl: jrOlho },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a arte contemporânea saiu do museu e ocupou a fachada dos arranha-céus.",
    paragrafos: [
      "No 9º ano a arte deixa de morar em salas brancas e ocupa a RUA. A cidade inteira vira tela e palco. Isso se chama ARTE PÚBLICA.",
      "Site-specific significa que a obra é planejada PARA aquele lugar exato: uma escadaria, uma fachada, uma praça. Fora dali, a obra perde sentido.",
      "A técnica principal é a PROJEÇÃO MAPEADA (mapping): feixes de luz digital são calibrados para se encaixarem com precisão milimétrica em colunas, janelas e relevos da arquitetura. O prédio ganha uma segunda pele temporária.",
      "Krzysztof Wodiczko, artista polonês, projeta imagens de olhos, mãos e rostos de refugiados ou veteranos sobre monumentos do poder estatal. O contraste força a cidade a confrontar traumas ocultos da sua própria história.",
      "O francês JR cola fotos GIGANTES de olhos e rostos em escadarias públicas: quando o pedestre sobe, a imagem se distorce e se recompõe. O corpo do transeunte vira parte da obra participativa involuntária.",
      "Quando arte encontra causa social, temos ARTIVISMO: florestas em chamas projetadas em prédios de governo durante votações ambientais. A arquitetura do poder ganha uma pele política temporária que força o debate público.",
    ],
    pigmentos: [
      { nome: "Arte Pública", hex: "#0891b2", fonte: "Site-specific na cidade", emoji: "🏛️", fotoUrl: esplanada },
      { nome: "Mapping", hex: "#7c3aed", fonte: "Projeção calibrada na fachada", emoji: "📽️", fotoUrl: mapping },
      { nome: "Artivismo", hex: "#dc2626", fonte: "Arte + ativismo político", emoji: "✊", fotoUrl: artivismo },
      { nome: "Escala JR", hex: "#f97316", fonte: "Fotos gigantes em escadarias", emoji: "👁️", fotoUrl: jrOlho },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o caderno do artivista!",
    perguntas: [
      {
        pergunta: "O que caracteriza uma obra Site-Specific?",
        fotoUrl: esplanada,
        alternativas: [
          { texto: "Foi PLANEJADA para aquele espaço específico e perde o sentido se levada para outro lugar", correta: true },
          { texto: "Pode ser instalada em qualquer museu do mundo com o mesmo efeito", correta: false },
        ],
        feedbackAcerto: "Correto! O lugar É parte da obra.",
        feedbackErro: "Site = lugar. A obra só existe COM aquele espaço.",
      },
      {
        pergunta: "Qual é a técnica que permite projetar imagens encaixadas em colunas e janelas de uma fachada?",
        fotoUrl: mapping,
        alternativas: [
          { texto: "Projeção Mapeada (Video Mapping)", correta: true },
          { texto: "Pintura a óleo em tela retangular", correta: false },
        ],
        feedbackAcerto: "Isso! Mapping calibra os feixes de luz aos relevos 3D.",
        feedbackErro: "Pintura fica na tela. Mapping é feito com projetores digitais.",
      },
      {
        pergunta: "Um coletivo cobre um prédio inteiro com projeções denunciando desmatamento. Isso é:",
        fotoUrl: artivismo,
        alternativas: [
          { texto: "Artivismo — arte + ativismo político", correta: true },
          { texto: "Iluminação comercial noturna sem intenção crítica", correta: false },
        ],
        feedbackAcerto: "Perfeito! A estética vira ferramenta política.",
        feedbackErro: "Iluminação comercial não denuncia — artivismo SIM.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada intervenção urbana pelo TIPO de arte pública!",
    animais: [
      { nome: "Rostos de refugiados projetados no palácio do governo", emoji: "👤", fotoUrl: wodiczko, corAlvo: { nome: "Artivismo Monumental", hex: "#dc2626" }, opcoes: [{ nome: "Artivismo Monumental", hex: "#dc2626" }, { nome: "Grafite Comercial", hex: "#78716c" }, { nome: "Escultura Clássica", hex: "#78716c" }], falaAcerto: "Isso! Wodiczko usa escala monumental para dar voz aos marginalizados." },
      { nome: "Fachada de igreja gótica com padrões geométricos coloridos projetados", emoji: "📽️", fotoUrl: mapping, corAlvo: { nome: "Video Mapping", hex: "#7c3aed" }, opcoes: [{ nome: "Video Mapping", hex: "#7c3aed" }, { nome: "Pintura Rupestre", hex: "#78716c" }, { nome: "Escultura Digital", hex: "#78716c" }], falaAcerto: "Correto! Os feixes se encaixam nas colunas e janelas — puro mapping." },
      { nome: "Foto gigante de um olho colada em toda a escadaria pública", emoji: "👁️", fotoUrl: jrOlho, corAlvo: { nome: "Escala JR / Anamorfose", hex: "#f97316" }, opcoes: [{ nome: "Escala JR / Anamorfose", hex: "#f97316" }, { nome: "Aquarela em Caderno", hex: "#78716c" }, { nome: "Cerâmica de Ateliê", hex: "#78716c" }], falaAcerto: "Perfeito! JR distorce a imagem para o pedestre completar." },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos para criar uma intervenção artivista.",
    passos: [
      { id: "p1", texto: "Escolho o PRÉDIO/MONUMENTO específico que carrega uma história política forte", emoji: "🏛️", ordem: 1, fotoUrl: esplanada },
      { id: "p2", texto: "Defino a MENSAGEM que quero forçar no debate público (ambiental, social, memória)", emoji: "✊", ordem: 2, fotoUrl: artivismo },
      { id: "p3", texto: "Preparo a IMAGEM ou vídeo digital e calibro os vértices ao relevo da fachada", emoji: "📽️", ordem: 3, fotoUrl: mapping },
      { id: "p4", texto: "Monto o PROJETOR de alta potência alinhado à arquitetura", emoji: "🔦", ordem: 4, fotoUrl: projetor },
      { id: "p5", texto: "Ativo a intervenção à noite — a cidade vira tela política durante horas", emoji: "🌃", ordem: 5, fotoUrl: wodiczko },
    ],
    falaAcerto: "Você acabou de planejar sua primeira intervenção urbana!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do artivista urbano.",
    titulo: "Diário do Artivista Urbano",
    trechos: [
      { texto: "Sou artivista urbano. Minha tela é a cidade e minha técnica é a", palavraDestaque: "projeção mapeada", corDestaque: "#7c3aed" },
      { texto: "Quando escolho um espaço específico, faço uma obra", palavraDestaque: "site-specific", corDestaque: "#0891b2" },
      { texto: "Uso a", palavraDestaque: "escala monumental", corDestaque: "#f97316" },
      { texto: "para fazer o pedestre virar parte da obra sem perceber. E quando cruzo arte com denúncia política, pratico o", palavraDestaque: "artivismo", corDestaque: "#dc2626" },
      { texto: ": a arquitetura ganha uma pele crítica temporária e a rua se transforma em debate coletivo." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 O Alinhador de Mapping! Ajusta os vértices da projeção para encaixar com precisão nas colunas do monumento.",
    titulo: "🎯 O Alinhador de Mapping",
    instrucao: "Encaixa cada elemento na fachada certa!",
    tempoSeg: 40,
    itens: [
      { emoji: "📽️", rotulo: "Projetor", cor: "#7c3aed", fotoUrl: projetor },
      { emoji: "🏛️", rotulo: "Fachada monumento", cor: "#0891b2", fotoUrl: esplanada },
      { emoji: "🎨", rotulo: "Padrão colorido", cor: "#f97316", fotoUrl: mapping },
      { emoji: "👁️", rotulo: "Olho gigante", cor: "#dc2626", fotoUrl: jrOlho },
      { emoji: "🌲", rotulo: "Floresta ativista", cor: "#16a34a", fotoUrl: artivismo },
      { emoji: "👤", rotulo: "Rosto refugiado", cor: "#78350f", fotoUrl: wodiczko },
    ],
    falaFinal: "Alinhamento perfeito! Sua intervenção está calibrada e pronta pra ativar.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Consolida o caderno do artivista!",
    titulo: "🏛️ Caderno da Arte Pública",
    itens: [
      { emoji: "🏛️", rotulo: "Arte Pública", descricao: "Obras site-specific que ocupam o espaço urbano e alteram a percepção coletiva daquele ambiente.", cor: "#0891b2", fotoUrl: esplanada },
      { emoji: "📽️", rotulo: "Video Mapping", descricao: "Projeção calibrada aos relevos 3D da arquitetura, criando uma segunda pele para o prédio.", cor: "#7c3aed", fotoUrl: mapping },
      { emoji: "✊", rotulo: "Artivismo", descricao: "Arte + ativismo: florestas em chamas em fachadas do governo, forçando o debate público de forma estética.", cor: "#dc2626", fotoUrl: artivismo },
      { emoji: "👁️", rotulo: "Escala JR", descricao: "Fotografias gigantes coladas em escadarias — a imagem se recompõe quando o pedestre sobe.", cor: "#f97316", fotoUrl: jrOlho },
      { emoji: "👤", rotulo: "Wodiczko", descricao: "Projeta rostos de refugiados em monumentos do poder — dá corpo hiperdimensionado aos marginalizados.", cor: "#78350f", fotoUrl: wodiczko },
      { emoji: "🔦", rotulo: "Projetor de Alta Potência", descricao: "Ferramenta central do artivista urbano — feixes de luz que transformam qualquer parede em tela crítica.", cor: "#0f766e", fotoUrl: projetor },
    ],
    falaFinal: "Portal da Arte Pública ATIVADO — segunda página do Códice aberta!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, artivista!",
    quiz: {
      pergunta: "Qual é a principal intenção do 'Artivismo' ao ocupar o espaço público com intervenções e projeções monumentais?",
      alternativas: [
        { texto: "Retirar a arte dos espaços restritos dos museus para provocar reflexões críticas e debates políticos diretamente no cotidiano dos cidadãos", correta: true },
        { texto: "Decorar a cidade com luzes coloridas apenas para deixá-la mais iluminada para o comércio noturno", correta: false },
      ],
      feedback: "Sensacional! A arte pública transforma o cidadão passivo que caminha pela rua em espectador CRÍTICO e engajado. Krzysztof Wodiczko projeta rostos de refugiados em monumentos do poder, JR cola fotos gigantes de olhos em escadarias — a arquitetura ganha uma pele política temporária que força o debate público. A rua vira galeria e a galeria vira debate.",
    },
    missaoFamilia: "📸 Cartografia dos Prédios-Tela: caminhem pelo bairro e escolham um muro cego ou fachada. Fotografem e discutam em família: 'Se pudéssemos projetar uma mensagem gigante ali hoje, qual seria o tema?'. Registrem no álbum!",
    recompensaTitulo: "🏛️ A Esplanada da Arte Pública Livre RESTAURADA.",
    recompensaItem: "🔦 Superprojetor de Lúmens Mapeados",
  },

  recompensa: { xp: 140, moedas: 70, medalha: "Superprojetor de Lúmens Mapeados" },
};
