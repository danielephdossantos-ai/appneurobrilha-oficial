import type { AulaArteV1 } from "../../types";
import { url as bienal } from "@/assets/arte-9ano/u7-bienal-sala.jpg.asset.json";
import { url as curador } from "@/assets/arte-9ano/u7-curador.jpg.asset.json";
import { url as mosaico } from "@/assets/arte-9ano/u7-mosaico-global.jpg.asset.json";
import { url as expografia } from "@/assets/arte-9ano/u7-expografia.jpg.asset.json";
import { url as codice } from "@/assets/arte-9ano/u7-codice-final.jpg.asset.json";
import { url as diploma } from "@/assets/arte-9ano/u7-diploma.jpg.asset.json";

export const aula01: AulaArteV1 = {
  slug: "aula-01-curadoria-final",
  titulo: "Curadoria Contemporânea, o Grande Mosaico Global e o Encerramento do Códice",
  iconeTrilha: "👑",
  bncc: ["EF69AR31", "EF69AR34", "EF69AR35"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "cenaTematica", variante: "explorar",
    aurora: "Grande Curador! Chegamos ao TOPO absoluto do Códice. Todas as unidades do 6º ao 9º ano flutuam ao redor em uma constelação perfeita. Você não venceu o jogo — você se tornou um PENSADOR CRÍTICO DO FUTURO. Toca em cada pista pra abrir a página final.",
    titulo: "👑 O Despertar do Grande Curador",
    instrucao: "Toca em cada pista",
    itens: [
      { emoji: "🎨", rotulo: "Curadoria de Arte", descricao: "Prática de pesquisar, selecionar e contextualizar criticamente um grupo de obras, criando uma linha narrativa e conceitual para o público.", cor: "#7c3aed", fotoUrl: curador },
      { emoji: "🏛️", rotulo: "Expografia", descricao: "Técnica de planejar a disposição física das obras: cores das paredes, luzes, altura dos textos e trajeto do visitante.", cor: "#0891b2", fotoUrl: expografia },
      { emoji: "🌐", rotulo: "Mosaico Global Contemporâneo", descricao: "A história da arte NÃO é linha reta — é mosaico infinito de culturas, tempos e mídias que coexistem e conversam simultaneamente.", cor: "#dc2626", fotoUrl: mosaico },
      { emoji: "📚", rotulo: "Códice Restaurado", descricao: "Todo o conhecimento acumulado nos 4 anos do Fund. 2 volta iluminado nas suas mãos pra brilhar as mentes da humanidade.", cor: "#f97316", fotoUrl: codice },
    ],
    falaFinal: "Sua missão FINAL: assinar a exposição de encerramento do Códice.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olhar do grande curador.",
    perguntas: [
      { pergunta: "Como MUDOU o papel do curador de arte na contemporaneidade?", fotoUrl: curador, alternativas: [
        { texto: "Deixou de escolher só obras bonitas e virou pensador social que costura obras por temas críticos urgentes", correta: true },
        { texto: "Continua exatamente igual: apenas pendura os quadros mais bonitos nas paredes brancas", correta: false },
      ], feedbackAcerto: "Perfeito! O curador contemporâneo é pensador político.", feedbackErro: "O curador antigo fazia isso — o contemporâneo faz MUITO mais." },
      { pergunta: "Um vaso indígena ao lado de uma tela digital com código gerando rios. Que conceito o curador ativou?", fotoUrl: mosaico, alternativas: [
        { texto: "Mosaico global — culturas, tempos e mídias diferentes conversam simultaneamente", correta: true },
        { texto: "Erro de exposição — deveria só expor obras da mesma época e cultura", correta: false },
      ], feedbackAcerto: "Correto! O contraste é a conversa conceitual.", feedbackErro: "Culturas diferentes DEVEM dialogar — é o coração da curadoria descolonial." },
      { pergunta: "O que EXPOGRAFIA planeja além das obras em si?", fotoUrl: expografia, alternativas: [
        { texto: "Cores das paredes, luzes, altura dos textos e trajeto do visitante pela sala", correta: true },
        { texto: "Nada — a expografia só escolhe qual quadro pendurar", correta: false },
      ], feedbackAcerto: "Isso! Expografia é design completo da experiência.", feedbackErro: "Expografia é MUITO mais do que pendurar — é planejar tudo." },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do grande curador.",
    cards: [
      { termo: "Curadoria", definicao: "Pesquisa, seleção e contextualização crítica de obras — criação de narrativa conceitual para o público.", emoji: "🎨", cor: "#7c3aed", fotoUrl: curador },
      { termo: "Expografia", definicao: "Design completo da sala: paredes, luzes, altura dos textos e trajeto do visitante.", emoji: "🏛️", cor: "#0891b2", fotoUrl: expografia },
      { termo: "Mosaico Global", definicao: "História da arte como mosaico infinito de culturas, tempos e mídias coexistindo.", emoji: "🌐", cor: "#dc2626", fotoUrl: mosaico },
      { termo: "Museu Sem Paredes", definicao: "Conceito de que a arte contemporânea rompe os limites físicos e temporais do museu tradicional.", emoji: "🌍", cor: "#f97316", fotoUrl: bienal },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta a síntese de toda a sua jornada dos 4 anos do Fund. 2.",
    paragrafos: [
      "Chegamos ao TOPO. No 6º ano você começou nas cavernas (marcas de mãos ancestrais). No 7º atravessou as cidades e a arquitetura da luz. No 8º vestiu o corpo com sensores digitais. No 9º descobriu o hibridismo global.",
      "Tudo se conecta na mesma grande TEIA da expressão humana. E o profissional que costura essa teia hoje se chama CURADOR CONTEMPORÂNEO.",
      "Antigamente o curador só escolhia os quadros mais bonitos e os pendurava em paredes brancas. Hoje o curador é um PENSADOR SOCIAL: escolhe um tema crítico urgente (racismo, crise climática, imigração) e costura obras de artistas de origens totalmente diferentes.",
      "A técnica de planejar a sala se chama EXPOGRAFIA. O curador decide a cor das paredes, o design das luzes, a altura em que os textos ficam pendurados e — mais importante — o TRAJETO que o visitante vai fazer pela sala.",
      "Um vaso de cerâmica indígena tradicional ao lado de uma tela digital que gera imagens de rios em código. A conversa conceitual sobre a PERMANÊNCIA da natureza através das eras aparece pelo CONTRASTE entre mídias.",
      "É o MOSAICO GLOBAL CONTEMPORÂNEO: a história da arte não é uma linha reta que caminha para frente — é um mosaico infinito de culturas, tempos e mídias que coexistem e conversam simultaneamente. Você aprendeu a costurar esse mosaico. Agora é sua vez de assinar a exposição.",
    ],
    pigmentos: [
      { nome: "Curadoria", hex: "#7c3aed", fonte: "Pensador social costurando obras", emoji: "🎨", fotoUrl: curador },
      { nome: "Expografia", hex: "#0891b2", fonte: "Design completo da sala", emoji: "🏛️", fotoUrl: expografia },
      { nome: "Mosaico Global", hex: "#dc2626", fonte: "Culturas coexistindo em conversa", emoji: "🌐", fotoUrl: mosaico },
      { nome: "Códice Final", hex: "#f97316", fonte: "4 anos de jornada consolidados", emoji: "📚", fotoUrl: codice },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere a curadoria final!",
    perguntas: [
      { pergunta: "Qual é o papel do CURADOR contemporâneo?", fotoUrl: curador, alternativas: [
        { texto: "Pensador social que escolhe um tema crítico urgente e costura obras de origens diferentes para gerar reflexão política", correta: true },
        { texto: "Só pendura os quadros mais bonitos em paredes brancas sem tema nem conceito", correta: false },
      ], feedbackAcerto: "Correto! O curador contemporâneo é filósofo em ação.", feedbackErro: "Isso era o modelo antigo — o contemporâneo é MUITO mais." },
      { pergunta: "O que a EXPOGRAFIA define?", fotoUrl: expografia, alternativas: [
        { texto: "Cores das paredes, luzes, altura dos textos e trajeto que o visitante fará pela sala", correta: true },
        { texto: "Só o preço de cada obra no mercado internacional", correta: false },
      ], feedbackAcerto: "Isso! Expografia é design completo da experiência.", feedbackErro: "Preço não é expografia — é mercado. Expografia é EXPERIÊNCIA." },
      { pergunta: "O que significa MOSAICO GLOBAL CONTEMPORÂNEO?", fotoUrl: mosaico, alternativas: [
        { texto: "A arte é um mosaico infinito de culturas, tempos e mídias coexistindo em conversa simultânea", correta: true },
        { texto: "A arte é uma linha reta que só caminha do passado europeu para o futuro europeu", correta: false },
      ], feedbackAcerto: "Perfeito! Descolonização + hibridismo = mosaico global.", feedbackErro: "Linha reta é eurocentrismo. Mosaico é descolonial." },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada elemento da sua exposição final!",
    animais: [
      { nome: "Vaso indígena ao lado de tela digital com código", emoji: "🌐", fotoUrl: mosaico, corAlvo: { nome: "Mosaico Global", hex: "#dc2626" }, opcoes: [{ nome: "Mosaico Global", hex: "#dc2626" }, { nome: "Sala eurocêntrica", hex: "#78716c" }, { nome: "Museu antigo", hex: "#78716c" }], falaAcerto: "Isso! Culturas e mídias conversando." },
      { nome: "Sala com paredes coloridas, luzes calibradas e caminho definido no chão", emoji: "🏛️", fotoUrl: expografia, corAlvo: { nome: "Expografia Planejada", hex: "#0891b2" }, opcoes: [{ nome: "Expografia Planejada", hex: "#0891b2" }, { nome: "Depósito de obras", hex: "#78716c" }, { nome: "Corredor vazio", hex: "#78716c" }], falaAcerto: "Correto! Design completo da experiência." },
      { nome: "Curador escolhendo obras que dialogam sobre crise climática", emoji: "🎨", fotoUrl: curador, corAlvo: { nome: "Curadoria Temática", hex: "#7c3aed" }, opcoes: [{ nome: "Curadoria Temática", hex: "#7c3aed" }, { nome: "Escolha aleatória", hex: "#78716c" }, { nome: "Fila comercial", hex: "#78716c" }], falaAcerto: "Perfeito! Curador contemporâneo = pensador social." },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos da SUA exposição final de encerramento.",
    passos: [
      { id: "p1", texto: "Reviso toda a jornada dos 4 anos: cavernas, cidades, corpos digitais e hibridismo global", emoji: "📚", ordem: 1, fotoUrl: codice },
      { id: "p2", texto: "Escolho um TEMA CRÍTICO urgente (memória, clima, identidade, tecnologia)", emoji: "🎯", ordem: 2, fotoUrl: curador },
      { id: "p3", texto: "Seleciono 3 OBRAS de diferentes anos que dialogam com o tema (indígena + digital + performance)", emoji: "🌐", ordem: 3, fotoUrl: mosaico },
      { id: "p4", texto: "Planejo a EXPOGRAFIA da sala: cores, luzes, textos, trajeto do visitante", emoji: "🏛️", ordem: 4, fotoUrl: expografia },
      { id: "p5", texto: "Assino a exposição como GRANDE CURADOR e recebo o Diploma de Curadoria Visual Crítica", emoji: "👑", ordem: 5, fotoUrl: diploma },
    ],
    falaAcerto: "Exposição final ASSINADA! O Códice está completo.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Diário final do grande curador.",
    titulo: "Diário do Grande Curador",
    trechos: [
      { texto: "Sou grande curador do meu tempo. Pratico a", palavraDestaque: "curadoria crítica", corDestaque: "#7c3aed" },
      { texto: "Planejo cada sala com", palavraDestaque: "expografia completa", corDestaque: "#0891b2" },
      { texto: "Costuro o", palavraDestaque: "mosaico global contemporâneo", corDestaque: "#dc2626" },
      { texto: "Assinei minha exposição final e recebi o", palavraDestaque: "Códice Restaurado", corDestaque: "#f97316" },
      { texto: "para iluminar as mentes da humanidade nas próximas gerações." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica", variante: "minijogo",
    aurora: "✨ A Sincronização do Códice Universal! Encaixa os 4 fragmentos sagrados (6º, 7º, 8º e 9º anos) na matriz de energia.",
    titulo: "✨ Sincronização do Códice",
    instrucao: "Une os 4 fragmentos!",
    tempoSeg: 50,
    itens: [
      { emoji: "🎨", rotulo: "Fragmento 6º ano (rupestre)", cor: "#78350f", fotoUrl: codice },
      { emoji: "🏛️", rotulo: "Fragmento 7º ano (cidades)", cor: "#0891b2", fotoUrl: expografia },
      { emoji: "🤖", rotulo: "Fragmento 8º ano (ciber)", cor: "#7c3aed", fotoUrl: mosaico },
      { emoji: "🌐", rotulo: "Fragmento 9º ano (hibridismo)", cor: "#dc2626", fotoUrl: bienal },
      { emoji: "👑", rotulo: "Coroa do curador", cor: "#f59e0b", fotoUrl: curador },
      { emoji: "📜", rotulo: "Diploma final", cor: "#16a34a", fotoUrl: diploma },
    ],
    falaFinal: "Códice sincronizado! Brilho dourado ativado nas 4 dimensões!",
  },

  cena10_revisao: {
    tipo: "cenaTematica", variante: "revisar",
    aurora: "Última revisão do Códice completo!",
    titulo: "👑 Códice dos 4 Anos Restaurado",
    itens: [
      { emoji: "🎨", rotulo: "Curadoria Contemporânea", descricao: "Pensador social que escolhe tema crítico e costura obras de origens diferentes.", cor: "#7c3aed", fotoUrl: curador },
      { emoji: "🏛️", rotulo: "Expografia", descricao: "Design completo da sala: paredes, luzes, textos e trajeto do visitante.", cor: "#0891b2", fotoUrl: expografia },
      { emoji: "🌐", rotulo: "Mosaico Global", descricao: "Culturas, tempos e mídias coexistindo em conversa simultânea — descolonização + hibridismo.", cor: "#dc2626", fotoUrl: mosaico },
      { emoji: "🏛️", rotulo: "Bienal Internacional", descricao: "Grande exposição temática global — modelo do curador social contemporâneo.", cor: "#f97316", fotoUrl: bienal },
      { emoji: "📚", rotulo: "Códice Restaurado", descricao: "4 anos de jornada consolidados em uma constelação de saberes plurais.", cor: "#b45309", fotoUrl: codice },
      { emoji: "🏆", rotulo: "Diploma Avançado", descricao: "Certificado de Curadoria Visual Crítica Global — fim vitorioso do Ensino Fundamental 2.", cor: "#16a34a", fotoUrl: diploma },
    ],
    falaFinal: "👑 O CÓDICE ESTÁ COMPLETO! Aplicativo em sincronia total.",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "MISSÃO FINAL DO ENSINO FUNDAMENTAL 2!",
    quiz: {
      pergunta: "Ao concluir toda a jornada dos quatro anos letivos no aplicativo de artes, qual é a principal lição que você leva sobre o papel da arte no mundo contemporâneo?",
      alternativas: [
        { texto: "A arte é uma linguagem viva, híbrida e plural que serve como ferramenta crítica fundamental para questionar a realidade, valorizar a diversidade humana e projetar futuros éticos e sustentáveis", correta: true },
        { texto: "A arte é apenas um passatempo decorativo que serve para preencher o tempo livre sem nenhuma relação com a sociedade ou com a tecnologia", correta: false },
      ],
      feedback: "PARABÉNS, Mestre Curador e Pensador Visual Crítico! 👑 O Códice das Artes está 100% Restaurado, Sincronizado e Protegido! Você completou com excelência máxima toda a matriz curricular do Ensino Fundamental II. Do 6º ano (cavernas rupestres) ao 9º ano (mosaico global híbrido), sua sensibilidade se expandiu: você aprendeu a LER, TRANSFORMAR e MUDAR o mundo através da estética crítica. FIM DA JORNADA — que o brilho da sua criatividade ilumine as próximas gerações! 🌟",
    },
    missaoFamilia: "🎓 A Cerimônia do Códice Restaurado: abra seu caderno diante da família. Mostre o mapa da sua exposição final e explique cada elemento criado. Celebrem juntos a conclusão deste ciclo escolar — como seu olhar sobre cidades, tecnologias, pessoas e cultura se expandiu!",
    recompensaTitulo: "👑 O CÓDICE DE ARTES COMPLETO ESTÁ RESTAURADO! Conhecimento salvo para as próximas gerações!",
    recompensaItem: "👑 Chave Mestra da Criatividade Infinita + 📜 Diploma Avançado de Curadoria Visual Crítica Global",
  },

  recompensa: { xp: 200, moedas: 100, medalha: "Chave Mestra da Criatividade Infinita" },
};
