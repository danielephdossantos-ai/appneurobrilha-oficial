import type { AulaArteV1 } from "../../types";
import { url as mapa } from "@/assets/arte-9ano/u3-lauriano-mapa.jpg.asset.json";
import { url as retrato } from "@/assets/arte-9ano/u3-retrato-identitario.jpg.asset.json";
import { url as mascara } from "@/assets/arte-9ano/u3-mascara-ancestral.jpg.asset.json";
import { url as autoretrato } from "@/assets/arte-9ano/u3-autoretrato-palavras.jpg.asset.json";
import { url as museu } from "@/assets/arte-9ano/u3-museu-descolonizado.jpg.asset.json";
import { url as arvore } from "@/assets/arte-9ano/u3-arvore-identidades.jpg.asset.json";

export const aula01: AulaArteV1 = {
  slug: "aula-01-descolonizacao-imagens",
  titulo: "Corpo, Identidade e a Descolonização das Imagens",
  iconeTrilha: "👤",
  bncc: ["EF69AR01", "EF69AR04", "EF69AR05"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica", variante: "explorar",
    aurora: "Curador da Identidade! As estátuas antigas trazem traços de povos originários e matrizes africanas nunca vistos nos livros tradicionais. Você chegou na DESCOLONIZAÇÃO VISUAL. Toca em cada pista pra abrir o Portal dos Rostos Ancestrais.",
    titulo: "👤 O Despertar das Identidades Plurais",
    instrucao: "Toca em cada pista",
    itens: [
      { emoji: "🌍", rotulo: "Eurocentrismo", descricao: "Tendência de colocar a Europa como CENTRO e TOPO do desenvolvimento criativo do mundo — modelo antigo que a arte contemporânea combate.", cor: "#78716c", fotoUrl: museu },
      { emoji: "🎭", rotulo: "Descolonização da Arte", descricao: "Processo crítico que questiona e substitui visões coloniais eurocêntricas em museus, currículos e narrativas artísticas.", cor: "#dc2626", fotoUrl: mascara },
      { emoji: "👤", rotulo: "Performance Identitária", descricao: "Ação artística em que o criador usa o PRÓPRIO corpo, vestimentas e rituais para afirmar sua ancestralidade, gênero e pertencimento étnico.", cor: "#7c3aed", fotoUrl: retrato },
      { emoji: "🗺️", rotulo: "Recontextualização Histórica", descricao: "Jaime Lauriano desenha por cima de mapas coloniais os caminhos do tráfico de escravizados e os locais de resistência negra — denuncia o que foi apagado.", cor: "#b45309", fotoUrl: mapa },
    ],
    falaFinal: "Sua missão: virar Curador da Identidade — reescrever quem tem direito a ser protagonista nas telas.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de curador crítico.",
    perguntas: [
      { pergunta: "O que define o EUROCENTRISMO estético que a arte contemporânea COMBATE?", fotoUrl: museu, alternativas: [
        { texto: "Colocar a Europa como único centro e topo do desenvolvimento criativo mundial", correta: true },
        { texto: "Valorizar em igualdade obras indígenas, africanas e europeias", correta: false },
      ], feedbackAcerto: "Correto! Descolonizar é justamente quebrar esse padrão único.", feedbackErro: "Igualdade é o OPOSTO do eurocentrismo — é justamente a descolonização." },
      { pergunta: "Um artista desenha em CIMA de mapas coloniais os caminhos do tráfico de escravizados. Que estratégia ele usa?", fotoUrl: mapa, alternativas: [
        { texto: "Recontextualização histórica — denuncia o que foi apagado da história oficial", correta: true },
        { texto: "Restauração acadêmica — apenas conserta um mapa antigo", correta: false },
      ], feedbackAcerto: "Isso! Lauriano transforma o documento colonial em denúncia.", feedbackErro: "Não é conserto — é INTERVENÇÃO crítica que revela violência apagada." },
      { pergunta: "Uma artista se fotografa vestindo trajes ancestrais em POSTURAS de reis europeus. Qual é o efeito?", fotoUrl: retrato, alternativas: [
        { texto: "Subverte o poder da imagem clássica — o corpo marginalizado ocupa o lugar do topo", correta: true },
        { texto: "Imita apenas por diversão sem crítica alguma", correta: false },
      ], feedbackAcerto: "Perfeito! Performance identitária redistribui protagonismo.", feedbackErro: "Não é imitação — é OCUPAÇÃO crítica do lugar de poder." },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do curador crítico.",
    cards: [
      { termo: "Eurocentrismo", definicao: "Colocar a Europa como centro e topo da história da arte, ignorando outras matrizes culturais.", emoji: "🌍", cor: "#78716c", fotoUrl: museu },
      { termo: "Descolonização", definicao: "Questionar e substituir visões coloniais em museus, currículos e narrativas históricas.", emoji: "🎭", cor: "#dc2626", fotoUrl: mascara },
      { termo: "Performance Identitária", definicao: "Uso do próprio corpo e ritual pessoal para afirmar ancestralidade e pertencimento étnico-social.", emoji: "👤", cor: "#7c3aed", fotoUrl: retrato },
      { termo: "Recontextualização", definicao: "Reescrever mapas e imagens coloniais para revelar violências apagadas da história oficial.", emoji: "🗺️", cor: "#b45309", fotoUrl: mapa },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a arte contemporânea REESCREVE quem pode ser protagonista.",
    paragrafos: [
      "Durante SÉCULOS a arte ocidental impôs UM único padrão de beleza: europeu, branco, masculino. Outros corpos eram exotismo, coadjuvantes ou invisíveis. Isso se chama EUROCENTRISMO.",
      "A arte contemporânea faz o movimento CONTRÁRIO: a DESCOLONIZAÇÃO das imagens. Museus, currículos e livros passam a incluir produções indígenas, africanas, afro-diaspóricas e asiáticas com o MESMO peso das europeias.",
      "Zanele Muholi, fotógrafa sul-africana, produz autorretratos poderosos em preto e branco vestindo elementos da própria cultura. O corpo negro ocupa o lugar de nobreza que era reservado a reis europeus no século XIX.",
      "Jaime Lauriano, artista brasileiro, usa MAPAS ANTIGOS da época colonial e desenha por cima os caminhos do tráfico de escravizados e os locais de resistência negra. Denuncia visualmente estruturas de violência apagadas da história oficial.",
      "É a PERFORMANCE IDENTITÁRIA: o artista usa o próprio corpo, vestimentas e rituais para afirmar quem é. A obra deixa de retratar o outro e passa a ser AUTOAFIRMAÇÃO.",
      "Descolonizar a arte é democratizar o olhar: garantir que TODOS os corpos e todas as histórias tenham direito à representação digna, cada um contando sua própria história.",
    ],
    pigmentos: [
      { nome: "Descolonização", hex: "#dc2626", fonte: "Fim do padrão único europeu", emoji: "🎭", fotoUrl: mascara },
      { nome: "Muholi", hex: "#7c3aed", fonte: "Autorretrato identitário", emoji: "👤", fotoUrl: retrato },
      { nome: "Lauriano", hex: "#b45309", fonte: "Mapas coloniais reescritos", emoji: "🗺️", fotoUrl: mapa },
      { nome: "Museu Plural", hex: "#0891b2", fonte: "Todas as matrizes no mesmo peso", emoji: "🏛️", fotoUrl: museu },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o caderno do curador!",
    perguntas: [
      { pergunta: "O que a DESCOLONIZAÇÃO da arte propõe?", fotoUrl: mascara, alternativas: [
        { texto: "Incluir produções indígenas, africanas e asiáticas com o mesmo peso das europeias nos museus", correta: true },
        { texto: "Expor apenas obras europeias porque são as únicas legítimas", correta: false },
      ], feedbackAcerto: "Correto! Descolonização = pluralidade curatorial.", feedbackErro: "Isso era o modelo antigo. Descolonização quebra essa exclusividade." },
      { pergunta: "Qual é a estratégia de Jaime Lauriano ao usar mapas coloniais?", fotoUrl: mapa, alternativas: [
        { texto: "Desenha por cima rotas do tráfico e locais de resistência — denuncia o apagamento", correta: true },
        { texto: "Restaura o mapa para que fique igual ao original europeu", correta: false },
      ], feedbackAcerto: "Isso! Ele transforma documento em denúncia visual.", feedbackErro: "Não restaura — REESCREVE criticamente." },
      { pergunta: "O que é PERFORMANCE IDENTITÁRIA?", fotoUrl: retrato, alternativas: [
        { texto: "Uso do próprio corpo e rituais pessoais para afirmar ancestralidade e pertencimento", correta: true },
        { texto: "Repetição mecânica de gestos sem significado cultural", correta: false },
      ], feedbackAcerto: "Perfeito! O corpo é o suporte político da obra.", feedbackErro: "Performance identitária É carregada de significado ancestral." },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada obra pela estratégia descolonial!",
    animais: [
      { nome: "Mapa colonial com rotas do tráfico desenhadas por cima", emoji: "🗺️", fotoUrl: mapa, corAlvo: { nome: "Recontextualização", hex: "#b45309" }, opcoes: [{ nome: "Recontextualização", hex: "#b45309" }, { nome: "Pintura Acadêmica", hex: "#78716c" }, { nome: "Escultura Clássica", hex: "#78716c" }], falaAcerto: "Isso! Lauriano reescreve o documento colonial." },
      { nome: "Autorretrato preto e branco com turbante e joias tradicionais", emoji: "👤", fotoUrl: retrato, corAlvo: { nome: "Performance Identitária", hex: "#7c3aed" }, opcoes: [{ nome: "Performance Identitária", hex: "#7c3aed" }, { nome: "Publicidade Comercial", hex: "#78716c" }, { nome: "Retrato Renascentista", hex: "#78716c" }], falaAcerto: "Correto! Muholi afirma identidade pelo próprio corpo." },
      { nome: "Máscara indígena em posição central de sala principal do museu", emoji: "🎭", fotoUrl: mascara, corAlvo: { nome: "Curadoria Descolonial", hex: "#dc2626" }, opcoes: [{ nome: "Curadoria Descolonial", hex: "#dc2626" }, { nome: "Exotismo Colonial", hex: "#78716c" }, { nome: "Salão Europeu", hex: "#78716c" }], falaAcerto: "Perfeito! Sair da 'sala do fundo' e ocupar o centro é descolonizar." },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos para criar seu autorretrato descolonial.",
    passos: [
      { id: "p1", texto: "Investigo a história da MINHA família — origens, migrações, culturas", emoji: "🌳", ordem: 1, fotoUrl: arvore },
      { id: "p2", texto: "Desenho o CONTORNO do meu rosto no caderno", emoji: "👤", ordem: 2, fotoUrl: autoretrato },
      { id: "p3", texto: "PREENCHO o rosto com palavras, símbolos e traços culturais que me definem", emoji: "✍️", ordem: 3, fotoUrl: autoretrato },
      { id: "p4", texto: "Adiciono elementos das MATRIZES ancestrais (indígena, africana, europeia, oriental)", emoji: "🎭", ordem: 4, fotoUrl: mascara },
      { id: "p5", texto: "Dou um TÍTULO político forte ao autorretrato e assino como Curador da Identidade", emoji: "🏷️", ordem: 5, fotoUrl: retrato },
    ],
    falaAcerto: "Seu autorretrato descolonial está pronto!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do curador descolonial.",
    titulo: "Diário do Curador da Identidade",
    trechos: [
      { texto: "Sou curador da identidade. Rejeito o", palavraDestaque: "eurocentrismo", corDestaque: "#78716c" },
      { texto: "e pratico a", palavraDestaque: "descolonização visual", corDestaque: "#dc2626" },
      { texto: "Quando uso meu corpo para afirmar minha ancestralidade, faço", palavraDestaque: "performance identitária", corDestaque: "#7c3aed" },
      { texto: "Quando reescrevo documentos coloniais, pratico a", palavraDestaque: "recontextualização histórica", corDestaque: "#b45309" },
      { texto: "Assim garanto que TODOS os corpos e todas as histórias tenham representação digna." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica", variante: "minijogo",
    aurora: "🎨 O Acervo Descolonizado! Reorganiza a galeria retirando repetições eurocêntricas e abrindo espaço equilibrado.",
    titulo: "🎨 O Acervo Descolonizado",
    instrucao: "Distribua as obras com igualdade!",
    tempoSeg: 45,
    itens: [
      { emoji: "🎭", rotulo: "Máscara indígena", cor: "#dc2626", fotoUrl: mascara },
      { emoji: "👤", rotulo: "Autorretrato afro", cor: "#7c3aed", fotoUrl: retrato },
      { emoji: "🗺️", rotulo: "Mapa reescrito", cor: "#b45309", fotoUrl: mapa },
      { emoji: "🖼️", rotulo: "Autorretrato palavras", cor: "#0891b2", fotoUrl: autoretrato },
      { emoji: "🏛️", rotulo: "Sala equilibrada", cor: "#16a34a", fotoUrl: museu },
      { emoji: "🌳", rotulo: "Ancestralidades", cor: "#f97316", fotoUrl: arvore },
    ],
    falaFinal: "Acervo descolonizado! Todas as matrizes ocupam o mesmo palco.",
  },

  cena10_revisao: {
    tipo: "cenaTematica", variante: "revisar",
    aurora: "Consolida o caderno do curador descolonial!",
    titulo: "👤 Caderno das Identidades Plurais",
    itens: [
      { emoji: "🎭", rotulo: "Descolonização", descricao: "Fim do padrão único europeu — todas as matrizes ocupam o mesmo palco curatorial.", cor: "#dc2626", fotoUrl: mascara },
      { emoji: "👤", rotulo: "Muholi", descricao: "Autorretratos que colocam o corpo negro no lugar de nobreza clássica europeia.", cor: "#7c3aed", fotoUrl: retrato },
      { emoji: "🗺️", rotulo: "Lauriano", descricao: "Reescreve mapas coloniais denunciando violências apagadas da história oficial.", cor: "#b45309", fotoUrl: mapa },
      { emoji: "🏛️", rotulo: "Museu Descolonizado", descricao: "Sala principal com produções indígenas, africanas e asiáticas em igualdade curatorial.", cor: "#0891b2", fotoUrl: museu },
      { emoji: "✍️", rotulo: "Autorretrato Conceitual", descricao: "Contorno do rosto preenchido com palavras, símbolos e traços culturais pessoais.", cor: "#0f766e", fotoUrl: autoretrato },
      { emoji: "🌳", rotulo: "Árvore das Identidades", descricao: "Investigação familiar das origens migratórias, canções, palavras e costumes ancestrais.", cor: "#16a34a", fotoUrl: arvore },
    ],
    falaFinal: "Galeria dos Rostos Ancestrais Reescritos RESTAURADA — terceira página do Códice!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, curador!",
    quiz: {
      pergunta: "Qual é a importância de trazer a discussão sobre a 'Descolonização das Imagens' para as aulas de arte contemporânea?",
      alternativas: [
        { texto: "Permitir que múltiplas culturas e identidades históricas contem suas próprias histórias a partir de seus próprios pontos de vista, combatendo preconceitos históricos", correta: true },
        { texto: "Provar que as pinturas antigas de reis europeus eram feias e mal desenhadas", correta: false },
      ],
      feedback: "Excelente! Descolonizar a arte significa DEMOCRATIZAR o olhar e garantir que todos os corpos e histórias tenham direito à representação digna. Zanele Muholi coloca o corpo negro no lugar dos reis europeus; Jaime Lauriano reescreve mapas coloniais denunciando o tráfico. Não se trata de apagar a Europa — trata-se de ADICIONAR todas as vozes ao mesmo palco curatorial.",
    },
    missaoFamilia: "🌳 A Árvore das Identidades: conversem em família sobre as origens migratórias, étnicas ou regionais dos antepassados. Descubram canções, palavras, receitas ou costumes artísticos que atravessaram gerações. Registrem no álbum!",
    recompensaTitulo: "👤 A Galeria dos Rostos Ancestrais Reescritos RESTAURADA.",
    recompensaItem: "🪞 Espelho de Identidades Pluralistas",
  },

  recompensa: { xp: 140, moedas: 70, medalha: "Espelho de Identidades Pluralistas" },
};
