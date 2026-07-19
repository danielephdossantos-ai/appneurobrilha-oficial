import type { AulaArteV1 } from "../../types";
import { url as bijari } from "@/assets/arte-9ano/u6-bijari-carrinho.jpg.asset.json";
import { url as mural } from "@/assets/arte-9ano/u6-coletivo-mural.jpg.asset.json";
import { url as espaco } from "@/assets/arte-9ano/u6-espaco-autogerido.jpg.asset.json";
import { url as fanzine } from "@/assets/arte-9ano/u6-fanzine.jpg.asset.json";
import { url as logo } from "@/assets/arte-9ano/u6-logo-coletivo.jpg.asset.json";
import { url as mutirao } from "@/assets/arte-9ano/u6-mutirao-familia.jpg.asset.json";

export const aula01: AulaArteV1 = {
  slug: "aula-01-coletivos",
  titulo: "Coletivos de Arte, Espaços Independentes e Redes de Colaboração",
  iconeTrilha: "🧩",
  bncc: ["EF69AR31", "EF69AR33", "EF69AR35"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica", variante: "explorar",
    aurora: "Articulador de Redes! Este distrito não tem chefe — grupos dividem ferramentas, tintas e ideias em galpões compartilhados. Você chegou nos COLETIVOS DE ARTE. Toca em cada pista pra abrir o Distrito Compartilhado.",
    titulo: "🧩 O Despertar dos Coletivos",
    instrucao: "Toca em cada pista",
    itens: [
      { emoji: "👥", rotulo: "Coletivo de Arte", descricao: "Grupo de artistas de formações diferentes que criam obras sob ASSINATURA COLETIVA, dividindo a autoria de forma igualitária.", cor: "#dc2626", fotoUrl: mural },
      { emoji: "🏗️", rotulo: "Espaço Autogerido", descricao: "Centros culturais e ateliês mantidos pelos próprios artistas, sem financiamento nem controle de grandes corporações.", cor: "#0891b2", fotoUrl: espaco },
      { emoji: "🤝", rotulo: "Estética Colaborativa", descricao: "Processo onde a obra final é fruto do DIÁLOGO direto e cooperação física entre vários indivíduos em prol de mensagem comum.", cor: "#7c3aed", fotoUrl: fanzine },
      { emoji: "🌱", rotulo: "Intervenção Bijari", descricao: "Coletivo paulistano que empurra CARRINHOS de supermercado com grama e árvores pelo centro — praças verdes móveis contra a especulação imobiliária.", cor: "#16a34a", fotoUrl: bijari },
    ],
    falaFinal: "Sua missão: virar Articulador de Redes — a força está na união.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olhar de articulador.",
    perguntas: [
      { pergunta: "O coletivo Bijari empurra CARRINHOS DE SUPERMERCADO com grama pelo asfalto. Qual é a crítica social?", fotoUrl: bijari, alternativas: [
        { texto: "Denuncia a falta de espaços verdes de lazer e a especulação imobiliária das cidades", correta: true },
        { texto: "Apenas transporta plantas do jardim para vender no supermercado", correta: false },
      ], feedbackAcerto: "Perfeito! Praças móveis instantâneas expõem o problema.", feedbackErro: "Não é venda — é INTERVENÇÃO crítica poética." },
      { pergunta: "Por que artistas se organizam em COLETIVOS em vez de trabalhar sozinhos?", fotoUrl: mural, alternativas: [
        { texto: "Unem saberes, descentralizam a autoria e ganham força política sem depender de galerias comerciais", correta: true },
        { texto: "Competem entre si para vender o quadro mais caro no final do ano", correta: false },
      ], feedbackAcerto: "Correto! Coletivos são resistência ao mercado tradicional.", feedbackErro: "Coletivo é o OPOSTO de competição — é cooperação política." },
      { pergunta: "O que caracteriza um ESPAÇO AUTOGERIDO?", fotoUrl: espaco, alternativas: [
        { texto: "Mantido pelos próprios artistas, sem controle de grandes corporações ou instituições rígidas", correta: true },
        { texto: "Financiado 100% por bancos internacionais que ditam o que expor", correta: false },
      ], feedbackAcerto: "Isso! Autogestão = liberdade criativa total.", feedbackErro: "Autogestão nega justamente o controle externo." },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do articulador de redes.",
    cards: [
      { termo: "Coletivo de Arte", definicao: "Grupo com assinatura coletiva e autoria igualitária dividida entre os membros.", emoji: "👥", cor: "#dc2626", fotoUrl: mural },
      { termo: "Espaço Autogerido", definicao: "Ateliê ou centro cultural mantido pelos próprios artistas, sem controle corporativo.", emoji: "🏗️", cor: "#0891b2", fotoUrl: espaco },
      { termo: "Estética Colaborativa", definicao: "Obra fruto do diálogo direto e cooperação física entre vários indivíduos.", emoji: "🤝", cor: "#7c3aed", fotoUrl: fanzine },
      { termo: "Intervenção Urbana", definicao: "Ação artística de coletivo no espaço público que denuncia problemas sociais concretos.", emoji: "🌱", cor: "#16a34a", fotoUrl: bijari },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como os artistas descobriram que a força está na união.",
    paragrafos: [
      "No fim do século XX, artistas perceberam que depender só de grandes galerias comerciais LIMITAVA a liberdade. A solução: unir-se em COLETIVOS DE ARTE autogeridos.",
      "Um coletivo tem ASSINATURA COLETIVA: a autoria é dividida igualmente entre todos os membros. Ninguém é 'o gênio' — todos são o gênio junto. Isso reconfigura o circuito artístico global.",
      "O coletivo paulistano Bijari é um exemplo brilhante. Eles acoplam estruturas de madeira e grama REAL sobre carrinhos de supermercado e saem empurrando pelo asfalto cinza do centro da cidade. Criam praças verdes móveis instantâneas.",
      "O objetivo é denunciar a FALTA de espaços de lazer e a especulação imobiliária. A intervenção dura poucas horas, mas o registro fotográfico viaja pelo mundo inteiro nas redes.",
      "As Mujeres Creando, coletivo de mulheres bolivianas, misturam grafite, poesia e ativismo feminista nas paredes de La Paz. A parede vira manifesto coletivo — não é obra de UMA autora, é obra de UMA CAUSA.",
      "Os coletivos também mantêm ESPAÇOS AUTOGERIDOS: galpões, ateliês compartilhados, centros culturais fora do controle de bancos ou governos. É liberdade criativa total — e é resistência.",
    ],
    pigmentos: [
      { nome: "Coletivo", hex: "#dc2626", fonte: "Assinatura coletiva igualitária", emoji: "👥", fotoUrl: mural },
      { nome: "Autogestão", hex: "#0891b2", fonte: "Espaço sem controle corporativo", emoji: "🏗️", fotoUrl: espaco },
      { nome: "Bijari", hex: "#16a34a", fonte: "Praças móveis de protesto", emoji: "🌱", fotoUrl: bijari },
      { nome: "Fanzine", hex: "#7c3aed", fonte: "Publicação comunitária colaborativa", emoji: "📖", fotoUrl: fanzine },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o caderno do articulador!",
    perguntas: [
      { pergunta: "Qual é o objetivo principal dos artistas ao formarem COLETIVOS DE ARTE?", fotoUrl: mural, alternativas: [
        { texto: "Unir saberes, descentralizar autoria e ganhar força política independente dos mercados tradicionais", correta: true },
        { texto: "Competir para vender individualmente o quadro mais caro do ano", correta: false },
      ], feedbackAcerto: "Maravilhoso! Coletivo é construção comunitária transformadora.", feedbackErro: "Competir é o OPOSTO — coletivo é cooperar." },
      { pergunta: "O que define ESPAÇO AUTOGERIDO?", fotoUrl: espaco, alternativas: [
        { texto: "Mantido e administrado pelos próprios artistas, sem controle de grandes corporações", correta: true },
        { texto: "Comandado por um único diretor internacional que decide tudo", correta: false },
      ], feedbackAcerto: "Correto! Autogestão = independência plena.", feedbackErro: "Diretor único é hierarquia — autogestão é horizontal." },
      { pergunta: "Por que a intervenção do Bijari com carrinhos verdes é ARTE POLÍTICA?", fotoUrl: bijari, alternativas: [
        { texto: "Denuncia a falta de espaços verdes de lazer nas cidades e a especulação imobiliária", correta: true },
        { texto: "Só quer chamar atenção sem nenhuma mensagem crítica clara", correta: false },
      ], feedbackAcerto: "Isso! Praça móvel = crítica urbanística concreta.", feedbackErro: "Toda intervenção do Bijari tem crítica social precisa." },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada ação coletiva!",
    animais: [
      { nome: "Carrinhos de supermercado com grama sendo empurrados pelo centro", emoji: "🌱", fotoUrl: bijari, corAlvo: { nome: "Intervenção Urbana Coletiva", hex: "#16a34a" }, opcoes: [{ nome: "Intervenção Urbana Coletiva", hex: "#16a34a" }, { nome: "Comércio de plantas", hex: "#78716c" }, { nome: "Instalação em museu privado", hex: "#78716c" }], falaAcerto: "Isso! Bijari denuncia especulação imobiliária." },
      { nome: "Grupo de jovens artistas pintando um mural gigante juntos", emoji: "🎨", fotoUrl: mural, corAlvo: { nome: "Coletivo Colaborativo", hex: "#dc2626" }, opcoes: [{ nome: "Coletivo Colaborativo", hex: "#dc2626" }, { nome: "Concurso individual", hex: "#78716c" }, { nome: "Aula convencional", hex: "#78716c" }], falaAcerto: "Correto! Assinatura coletiva igualitária." },
      { nome: "Ateliê compartilhado com múltiplos artistas trabalhando juntos", emoji: "🏗️", fotoUrl: espaco, corAlvo: { nome: "Espaço Autogerido", hex: "#0891b2" }, opcoes: [{ nome: "Espaço Autogerido", hex: "#0891b2" }, { nome: "Galeria corporativa", hex: "#78716c" }, { nome: "Museu governamental", hex: "#78716c" }], falaAcerto: "Perfeito! Autogestão sem controle externo." },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra fundar seu próprio coletivo.",
    passos: [
      { id: "p1", texto: "Reúno artistas de FORMAÇÕES diferentes (visual + música + poesia + design)", emoji: "👥", ordem: 1, fotoUrl: mural },
      { id: "p2", texto: "Escolhemos juntos o NOME e o manifesto de 3 regras centrais", emoji: "✍️", ordem: 2, fotoUrl: fanzine },
      { id: "p3", texto: "Desenhamos o LOGO/BRASÃO de união do coletivo", emoji: "🎯", ordem: 3, fotoUrl: logo },
      { id: "p4", texto: "Ocupamos um ESPAÇO AUTOGERIDO para trabalhar sem controle corporativo", emoji: "🏗️", ordem: 4, fotoUrl: espaco },
      { id: "p5", texto: "Realizamos a primeira INTERVENÇÃO urbana coletiva no bairro", emoji: "🌱", ordem: 5, fotoUrl: bijari },
    ],
    falaAcerto: "Coletivo fundado! A cidade nunca mais vai ser a mesma.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Diário do articulador de redes.",
    titulo: "Manifesto do Coletivo",
    trechos: [
      { texto: "Sou articulador de redes. Fundei um", palavraDestaque: "coletivo de arte", corDestaque: "#dc2626" },
      { texto: "Ocupamos um", palavraDestaque: "espaço autogerido", corDestaque: "#0891b2" },
      { texto: "Nossa produção nasce da", palavraDestaque: "estética colaborativa", corDestaque: "#7c3aed" },
      { texto: "E fazemos", palavraDestaque: "intervenções urbanas", corDestaque: "#16a34a" },
      { texto: "que denunciam problemas sociais concretos do bairro." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica", variante: "minijogo",
    aurora: "🕸️ A Teia da Colaboração! Conecta ateliês independentes espalhados pelo distrito para trocarem recursos.",
    titulo: "🕸️ Teia da Colaboração",
    instrucao: "Conecta os coletivos!",
    tempoSeg: 40,
    itens: [
      { emoji: "👥", rotulo: "Coletivo mural", cor: "#dc2626", fotoUrl: mural },
      { emoji: "🏗️", rotulo: "Espaço autogerido", cor: "#0891b2", fotoUrl: espaco },
      { emoji: "🌱", rotulo: "Bijari verde", cor: "#16a34a", fotoUrl: bijari },
      { emoji: "📖", rotulo: "Fanzine coletivo", cor: "#7c3aed", fotoUrl: fanzine },
      { emoji: "🎯", rotulo: "Logo do grupo", cor: "#f97316", fotoUrl: logo },
      { emoji: "🤝", rotulo: "Mutirão", cor: "#b45309", fotoUrl: mutirao },
    ],
    falaFinal: "Teia conectada! Recursos fluem sem sobrecarregar ninguém.",
  },

  cena10_revisao: {
    tipo: "cenaTematica", variante: "revisar",
    aurora: "Consolida o distrito compartilhado.",
    titulo: "🧩 Caderno dos Coletivos",
    itens: [
      { emoji: "👥", rotulo: "Coletivo de Arte", descricao: "Grupo com assinatura coletiva e autoria igualitária — ninguém é 'o gênio', todos são.", cor: "#dc2626", fotoUrl: mural },
      { emoji: "🏗️", rotulo: "Espaço Autogerido", descricao: "Ateliê compartilhado mantido pelos próprios artistas, sem controle corporativo.", cor: "#0891b2", fotoUrl: espaco },
      { emoji: "🌱", rotulo: "Bijari", descricao: "Coletivo paulistano de intervenções: praças móveis em carrinhos contra especulação imobiliária.", cor: "#16a34a", fotoUrl: bijari },
      { emoji: "📖", rotulo: "Fanzine Colaborativo", descricao: "Publicação comunitária feita a várias mãos misturando colagem, poesia e grafite.", cor: "#7c3aed", fotoUrl: fanzine },
      { emoji: "🎯", rotulo: "Manifesto Visual", descricao: "Logo e brasão de união que sintetizam graficamente as 3 regras do coletivo.", cor: "#f97316", fotoUrl: logo },
      { emoji: "🤝", rotulo: "Mutirão Criativo", descricao: "Dinâmica de organização coletiva — o resultado em grupo é sempre diferente do individual.", cor: "#b45309", fotoUrl: mutirao },
    ],
    falaFinal: "O Distrito Compartilhado dos Coletivos Livres RESTAURADO!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, articulador!",
    quiz: {
      pergunta: "Qual é o principal objetivo dos artistas contemporâneos ao organizarem suas produções em formato de 'Coletivos de Arte'?",
      alternativas: [
        { texto: "Unir diferentes saberes, descentralizar a autoria e ganhar força de impacto social e político de forma independente dos mercados tradicionais", correta: true },
        { texto: "Competir entre si para ver quem consegue vender o quadro individual mais caro no final do ano", correta: false },
      ],
      feedback: "Maravilhoso! A união em coletivos nos mostra que a arte é um processo de construção social e comunitária potente e transformadora. Bijari cria praças verdes móveis; Mujeres Creando ocupa paredes com grafite feminista; ateliês autogeridos mantêm a liberdade criativa longe do controle corporativo. Juntos, os artistas reconfiguram o circuito global.",
    },
    missaoFamilia: "🤝 O Mutirão Criativo de Organização: escolham uma tarefa em família (reorganizar estante por cores, montar mural de fotos, pintar vaso). Todos opinam e colocam a mão na massa juntos. Compare com o resultado individual!",
    recompensaTitulo: "🧩 O Distrito Compartilhado dos Coletivos Livres RESTAURADO.",
    recompensaItem: "🧩 O Eixo Conector de Projetos Autogeridos",
  },

  recompensa: { xp: 140, moedas: 70, medalha: "Eixo Conector de Projetos" },
};
