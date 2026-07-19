import type { AulaArteV1 } from "../../types";
import __asset_antesDepois from "@/assets/arte-7ano/u4-antes-depois.jpg.asset.json";
const antesDepois = __asset_antesDepois.url;
import __asset_azulejo from "@/assets/arte-7ano/u4-azulejo.jpg.asset.json";
const azulejo = __asset_azulejo.url;
import __asset_casaIluminada from "@/assets/arte-7ano/u4-casa-iluminada.jpg.asset.json";
const casaIluminada = __asset_casaIluminada.url;
import __asset_centroCultural from "@/assets/arte-7ano/u4-centro-cultural.jpg.asset.json";
const centroCultural = __asset_centroCultural.url;
import __asset_louvre from "@/assets/arte-7ano/u4-louvre.jpg.asset.json";
const louvre = __asset_louvre.url;
import __asset_museuOrsay from "@/assets/arte-7ano/u4-museu-orsay.jpg.asset.json";
const museuOrsay = __asset_museuOrsay.url;
import __asset_ouroPretoIgreja from "@/assets/arte-7ano/u4-ouro-preto-igreja.jpg.asset.json";
const ouroPretoIgreja = __asset_ouroPretoIgreja.url;
import __asset_pelourinho from "@/assets/arte-7ano/u4-pelourinho.jpg.asset.json";
const pelourinho = __asset_pelourinho.url;
import __asset_placaTombamento from "@/assets/arte-7ano/u4-placa-tombamento.jpg.asset.json";
const placaTombamento = __asset_placaTombamento.url;
import __asset_plantaRestauro from "@/assets/arte-7ano/u4-planta-restauro.jpg.asset.json";
const plantaRestauro = __asset_plantaRestauro.url;
import __asset_rampaAcessibilidade from "@/assets/arte-7ano/u4-rampa-acessibilidade.jpg.asset.json";
const rampaAcessibilidade = __asset_rampaAcessibilidade.url;
import __asset_restauroObra from "@/assets/arte-7ano/u4-restauro-obra.jpg.asset.json";
const restauroObra = __asset_restauroObra.url;
import __asset_restauroQuadro from "@/assets/arte-7ano/u4-restauro-quadro.jpg.asset.json";
const restauroQuadro = __asset_restauroQuadro.url;
import __asset_saoFranciscoOuro from "@/assets/arte-7ano/u4-sao-francisco-ouro.jpg.asset.json";
const saoFranciscoOuro = __asset_saoFranciscoOuro.url;
import __asset_vidroPedra from "@/assets/arte-7ano/u4-vidro-pedra.jpg.asset.json";
const vidroPedra = __asset_vidroPedra.url;

/**
 * Arte · 7º Ano · Unidade 4 · Aula 01 — "O Patrimônio Histórico na Cidade do Futuro"
 * Metanarrativa: 🏛️ Crônicas das Cidades Suspensas
 * Foco: preservação, restauro, tombamento, Carta de Atenas, IPHAN, patrimônio material.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-patrimonio",
  titulo: "O Patrimônio Histórico na Cidade do Futuro — Preservação e Restauro",
  iconeTrilha: "🏛️",
  bncc: ["EF69AR04", "EF69AR05", "EF69AR31"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Diretor de Restauro! O Códice revelou um distrito antigo dentro da Cidade Suspensa: igrejas de ouro, azulejos rachados e placas esquecidas. Sua missão agora é diferente — não construir do zero, mas PRESERVAR o que já existe. Toca em cada pista pra entender o Patrimônio Histórico.",
    titulo: "🏛️ O Distrito Esquecido",
    instrucao: "Toca em cada pista pra ativar o módulo de preservação",
    itens: [
      { emoji: "⛪", rotulo: "Igreja de São Francisco, Ouro Preto", descricao: "Obra-prima do Aleijadinho: talha em ouro, curvas barrocas e séculos de história esculpidos em pedra-sabão. Patrimônio da Humanidade pela UNESCO.", cor: "#7c2d12", fotoUrl: saoFranciscoOuro },
      { emoji: "🏘️", rotulo: "Pelourinho, Salvador", descricao: "Casario colonial colorido que sobreviveu a séculos de abandono e foi RESTAURADO — hoje é Patrimônio Mundial e coração cultural da Bahia.", cor: "#dc2626", fotoUrl: pelourinho },
      { emoji: "🖼️", rotulo: "Restauro de uma pintura antiga", descricao: "Um restaurador trabalha milímetro a milímetro recuperando as cores originais de uma obra sem inventar nada novo — ciência e arte juntas.", cor: "#0f766e", fotoUrl: restauroQuadro },
      { emoji: "🏷️", rotulo: "Placa de Tombamento", descricao: "Uma plaquinha de bronze que muda tudo: aquele prédio agora é PROTEGIDO POR LEI e não pode ser demolido ou descaracterizado.", cor: "#0891b2", fotoUrl: placaTombamento },
      { emoji: "🖼️", rotulo: "Museu d'Orsay, Paris", descricao: "Uma antiga estação de trem virou um dos museus mais visitados do mundo — reuso adaptativo transforma patrimônio em novo uso sem apagar sua história.", cor: "#0f766e", fotoUrl: museuOrsay },
      { emoji: "🏢", rotulo: "Centro Cultural revitalizado", descricao: "Um antigo galpão industrial abandonado virou centro cultural vivo — preservação também é dar nova vida útil a construções esquecidas.", cor: "#dc2626", fotoUrl: centroCultural },
    ],
    falaFinal: "Você vai aprender que preservar o passado é também construir o futuro da cidade.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olhar de Diretor de Restauro antes de tocar em pedra antiga!",
    perguntas: [
      {
        pergunta: "Uma casa colonial de 200 anos está caindo aos pedaços numa cidade histórica. O que a equipe de restauro faz PRIMEIRO?",
        fotoUrl: antesDepois,
        alternativas: [
          { texto: "Estuda a história e a estrutura original antes de qualquer intervenção — restauro exige PESQUISA", correta: true },
          { texto: "Derruba tudo e constrói uma réplica nova de concreto, mais rápido e barato", correta: false },
        ],
        feedbackAcerto: "Exato! Restauro sempre começa com pesquisa histórica e técnica — nunca se improvisa sobre patrimônio.",
        feedbackErro: "Derrubar destrói a autenticidade histórica pra sempre. Restauro exige estudo antes de qualquer martelada.",
      },
      {
        pergunta: "O Museu do Louvre colocou uma pirâmide de VIDRO moderna bem no meio de um palácio do século XVI. Isso é um erro de preservação?",
        fotoUrl: louvre,
        alternativas: [
          { texto: "Não — é intervenção contemporânea RESPEITOSA: o novo se distingue do antigo sem destruí-lo", correta: true },
          { texto: "Sim — todo elemento novo deveria imitar o estilo antigo para não estragar a harmonia", correta: false },
        ],
        feedbackAcerto: "Isso! A Carta de Atenas defende que o novo deve ser DISTINGUÍVEL do antigo — sem falsificar história.",
        feedbackErro: "Imitar o estilo antigo cria uma falsificação histórica. O ideal é o contraste honesto entre épocas.",
      },
      {
        pergunta: "Um edifício antigo recebe uma placa oficial do governo dizendo que ele é 'tombado'. O que isso significa na prática?",
        fotoUrl: placaTombamento,
        alternativas: [
          { texto: "O prédio ganha PROTEÇÃO LEGAL: não pode ser demolido ou descaracterizado sem autorização do órgão de patrimônio", correta: true },
          { texto: "É só uma homenagem decorativa, sem nenhum efeito legal sobre o dono do imóvel", correta: false },
        ],
        feedbackAcerto: "Perfeito! Tombamento é ato jurídico — o Estado protege o bem por seu valor histórico e cultural.",
        feedbackErro: "Tombamento tem força de LEI: o proprietário perde o direito de demolir ou alterar livremente o imóvel.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do Diretor de Restauro. Toca em cada verbete!",
    cards: [
      { termo: "Patrimônio Histórico", definicao: "Bens materiais (prédios, praças, obras) e imateriais (festas, saberes) que uma sociedade decide preservar por seu valor histórico e cultural.", emoji: "🏛️", cor: "#7c2d12", fotoUrl: saoFranciscoOuro },
      { termo: "Tombamento", definicao: "Ato legal pelo qual o poder público reconhece e PROTEGE um bem histórico, impedindo demolição ou descaracterização sem autorização.", emoji: "🏷️", cor: "#0891b2", fotoUrl: placaTombamento },
      { termo: "IPHAN", definicao: "Instituto do Patrimônio Histórico e Artístico Nacional — órgão brasileiro responsável por identificar, proteger e restaurar o patrimônio do país.", emoji: "🇧🇷", cor: "#0f766e", fotoUrl: ouroPretoIgreja },
      { termo: "Carta de Atenas (1931)", definicao: "Documento internacional pioneiro que criou os princípios da preservação: pesquisar antes de intervir, e distinguir o novo do antigo.", emoji: "📜", cor: "#dc2626", fotoUrl: plantaRestauro },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como o mundo aprendeu a PROTEGER sua própria memória.",
    paragrafos: [
      "Toda cidade carrega camadas de tempo: prédios coloniais ao lado de arranha-céus, azulejos centenários perto de vidro e aço. O PATRIMÔNIO HISTÓRICO é essa memória construída — igrejas, casarões, praças, mas também festas e saberes que atravessam gerações.",
      "Em 1931, especialistas de vários países se reuniram na Grécia e assinaram a CARTA DE ATENAS, primeiro documento internacional sobre restauro. Ela estabeleceu duas regras de ouro: pesquisar profundamente a história e a técnica de construção ANTES de qualquer intervenção, e garantir que qualquer elemento NOVO seja claramente distinguível do original — nunca fingir que é antigo.",
      "No Brasil, quem cuida dessa missão é o IPHAN — Instituto do Patrimônio Histórico e Artístico Nacional, criado em 1937. Quando um bem é TOMBADO pelo IPHAN ou por órgãos estaduais e municipais, ele ganha proteção legal: o proprietário não pode demolir, pintar ou reformar livremente sem autorização técnica.",
      "Cidades como Ouro Preto e o Pelourinho de Salvador só existem hoje como as conhecemos porque foram tombadas e restauradas com rigor científico. Restauradores estudam pigmentos originais, técnicas de talha e argamassas antigas antes de tocar em qualquer superfície — é ciência e arte trabalhando juntas.",
      "E o futuro? A preservação moderna não significa congelar o tempo: significa integrar acessibilidade (rampas, elevadores), tecnologia e novos usos SEM apagar a história. A pirâmide de vidro do Louvre é o símbolo desse equilíbrio — o novo dialoga com o antigo sem se disfarçar dele.",
    ],
    pigmentos: [
      { nome: "Carta de Atenas", hex: "#dc2626", fonte: "Documento fundador do restauro moderno", emoji: "📜", fotoUrl: plantaRestauro },
      { nome: "IPHAN", hex: "#0f766e", fonte: "Órgão brasileiro de patrimônio", emoji: "🇧🇷", fotoUrl: ouroPretoIgreja },
      { nome: "Tombamento", hex: "#0891b2", fonte: "Proteção legal do bem histórico", emoji: "🏷️", fotoUrl: placaTombamento },
      { nome: "Contraste Antigo/Novo", hex: "#78716c", fonte: "Pirâmide de vidro sobre palácio antigo", emoji: "🔷", fotoUrl: vidroPedra },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do Diretor de Restauro!",
    perguntas: [
      {
        pergunta: "Qual foi o principal legado da Carta de Atenas de 1931 para a preservação de patrimônio?",
        fotoUrl: plantaRestauro,
        alternativas: [
          { texto: "Estabelecer que a intervenção deve ser pesquisada e o novo deve ser distinguível do antigo", correta: true },
          { texto: "Determinar que todo prédio com mais de 50 anos deve ser demolido", correta: false },
        ],
        feedbackAcerto: "Isso! A Carta de Atenas criou as bases éticas e técnicas do restauro moderno mundial.",
        feedbackErro: "Pelo contrário — a Carta de Atenas nasceu justamente para EVITAR demolições descuidadas de patrimônio.",
      },
      {
        pergunta: "Qual é a função do IPHAN no Brasil?",
        fotoUrl: ouroPretoIgreja,
        alternativas: [
          { texto: "Identificar, proteger e restaurar bens de valor histórico e cultural em todo o país", correta: true },
          { texto: "Construir prédios novos no lugar de construções antigas consideradas ultrapassadas", correta: false },
        ],
        feedbackAcerto: "Correto! O IPHAN é o guardião oficial do patrimônio material e imaterial brasileiro desde 1937.",
        feedbackErro: "O IPHAN existe justamente para PROTEGER o antigo, não para substituí-lo por construções novas.",
      },
      {
        pergunta: "Um imóvel tombado pode ser reformado ou pintado livremente pelo proprietário?",
        fotoUrl: placaTombamento,
        alternativas: [
          { texto: "Não — qualquer alteração precisa de autorização do órgão de patrimônio responsável", correta: true },
          { texto: "Sim — o tombamento é só uma honraria simbólica, sem consequências práticas", correta: false },
        ],
        feedbackAcerto: "Exato! O tombamento é uma restrição legal real: protege a autenticidade do bem por LEI.",
        feedbackErro: "O tombamento TEM força legal — alterar sem autorização é crime contra o patrimônio.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada cena pelo CONCEITO de preservação que ela representa!",
    animais: [
      {
        nome: "Igreja de talha dourada", emoji: "⛪", fotoUrl: saoFranciscoOuro,
        corAlvo: { nome: "Patrimônio Histórico", hex: "#7c2d12" },
        opcoes: [
          { nome: "Patrimônio Histórico", hex: "#7c2d12" },
          { nome: "Arquitetura Nova", hex: "#0891b2" },
          { nome: "Tombamento", hex: "#dc2626" },
        ],
        falaAcerto: "Isso! Obras como essa são Patrimônio Histórico protegido pela sua importância cultural.",
      },
      {
        nome: "Pirâmide de vidro sobre palácio antigo", emoji: "🔷", fotoUrl: vidroPedra,
        corAlvo: { nome: "Contraste Antigo/Moderno", hex: "#0891b2" },
        opcoes: [
          { nome: "Contraste Antigo/Moderno", hex: "#0891b2" },
          { nome: "Restauro Científico", hex: "#0f766e" },
          { nome: "Tombamento", hex: "#dc2626" },
        ],
        falaAcerto: "Correto! É o princípio da Carta de Atenas: o novo distinto do antigo, sem disfarces.",
      },
      {
        nome: "Restaurador limpando um quadro antigo", emoji: "🖌️", fotoUrl: restauroObra,
        corAlvo: { nome: "Restauro Científico", hex: "#0f766e" },
        opcoes: [
          { nome: "Restauro Científico", hex: "#0f766e" },
          { nome: "Patrimônio Histórico", hex: "#7c2d12" },
          { nome: "Contraste Antigo/Moderno", hex: "#0891b2" },
        ],
        falaAcerto: "Perfeito! Restauro exige técnica e pesquisa — é ciência trabalhando sobre arte.",
      },
      {
        nome: "Painel de azulejos históricos", emoji: "🧱", fotoUrl: azulejo,
        corAlvo: { nome: "Patrimônio Histórico", hex: "#7c2d12" },
        opcoes: [
          { nome: "Patrimônio Histórico", hex: "#7c2d12" },
          { nome: "Restauro Científico", hex: "#0f766e" },
          { nome: "Contraste Antigo/Moderno", hex: "#0891b2" },
        ],
        falaAcerto: "Isso! Azulejaria histórica é patrimônio artístico que exige conservação cuidadosa.",
      },
      {
        nome: "Casa colonial iluminada à noite", emoji: "🏠", fotoUrl: casaIluminada,
        corAlvo: { nome: "Patrimônio Histórico", hex: "#7c2d12" },
        opcoes: [
          { nome: "Patrimônio Histórico", hex: "#7c2d12" },
          { nome: "Tombamento", hex: "#0891b2" },
          { nome: "Restauro Científico", hex: "#0f766e" },
        ],
        falaAcerto: "Correto! Casas coloniais preservadas iluminam a memória viva da cidade.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos do restauro de um prédio histórico da SUA Cidade Suspensa.",
    passos: [
      { id: "p1", texto: "Pesquiso a história do prédio: fotos antigas, plantas originais e técnicas de construção da época", emoji: "📜", ordem: 1, fotoUrl: plantaRestauro },
      { id: "p2", texto: "Registro o estado atual, catalogando rachaduras, azulejos quebrados e partes perdidas", emoji: "📷", ordem: 2, fotoUrl: antesDepois },
      { id: "p3", texto: "Restauro com técnica científica: limpo, consolido e recupero cores originais sem inventar nada novo", emoji: "🖌️", ordem: 3, fotoUrl: restauroObra },
      { id: "p4", texto: "Integro acessibilidade (rampa) e infraestrutura moderna sem descaracterizar a fachada histórica", emoji: "♿", ordem: 4, fotoUrl: rampaAcessibilidade },
      { id: "p5", texto: "Solicito o tombamento oficial e instalo a placa — o prédio agora está protegido por lei para sempre", emoji: "🏷️", ordem: 5, fotoUrl: placaTombamento },
    ],
    falaAcerto: "Você acabou de restaurar o primeiro monumento do Distrito da Memória Preservada!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do Diretor de Restauro. Toca nas palavras coloridas.",
    titulo: "Diário do Diretor de Restauro",
    trechos: [
      { texto: "Sou Diretor de Restauro. Toda intervenção começa pela", palavraDestaque: "pesquisa histórica", corDestaque: "#dc2626" },
      { texto: "porque destruir sem entender é apagar memória. Sigo os princípios da", palavraDestaque: "Carta de Atenas", corDestaque: "#7c2d12" },
      { texto: "e trabalho junto ao", palavraDestaque: "IPHAN", corDestaque: "#0f766e" },
      { texto: "para proteger prédios com o", palavraDestaque: "tombamento", corDestaque: "#0891b2" },
      { texto: "O novo que eu adiciono é sempre", palavraDestaque: "distinguível do antigo", corDestaque: "#78716c" },
      { texto: "Preservar o passado é construir o futuro da cidade." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🖌️ O Mestre do Restauro! Toca em TODAS as ferramentas e detalhes históricos antes do tempo acabar.",
    titulo: "🖌️ O Mestre do Restauro",
    instrucao: "Recupere todos os elementos do monumento antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "📜", rotulo: "Planta original do arquiteto", cor: "#dc2626" },
      { emoji: "🖌️", rotulo: "Pincel de restauro fino", cor: "#0f766e" },
      { emoji: "🏷️", rotulo: "Placa de tombamento", cor: "#0891b2" },
      { emoji: "🧱", rotulo: "Azulejo original recuperado", cor: "#7c2d12" },
      { emoji: "♿", rotulo: "Rampa de acessibilidade integrada", cor: "#f59e0b" },
      { emoji: "🔷", rotulo: "Vidro contemporâneo respeitoso", cor: "#78716c" },
    ],
    falaFinal: "Restauro concluído! O Distrito da Memória Preservada está de pé — protegido para sempre.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a página do módulo Patrimônio Histórico. Toca em cada verbete!",
    titulo: "📓 Caderno do Diretor de Restauro",
    itens: [
      { emoji: "🏛️", rotulo: "Patrimônio Histórico", descricao: "Bens materiais e imateriais que uma sociedade preserva por seu valor histórico e cultural.", cor: "#7c2d12", fotoUrl: saoFranciscoOuro },
      { emoji: "📜", rotulo: "Carta de Atenas (1931)", descricao: "Documento fundador do restauro: pesquisar antes de intervir e distinguir o novo do antigo.", cor: "#dc2626", fotoUrl: plantaRestauro },
      { emoji: "🇧🇷", rotulo: "IPHAN", descricao: "Órgão brasileiro que identifica, protege e restaura o patrimônio nacional desde 1937.", cor: "#0f766e", fotoUrl: ouroPretoIgreja },
      { emoji: "🏷️", rotulo: "Tombamento", descricao: "Proteção legal que impede demolição ou descaracterização de um bem histórico.", cor: "#0891b2", fotoUrl: placaTombamento },
      { emoji: "🔷", rotulo: "Contraste Antigo/Moderno", descricao: "O novo dialoga com o antigo sem se disfarçar dele — como a pirâmide do Louvre.", cor: "#78716c", fotoUrl: vidroPedra },
      { emoji: "♿", rotulo: "Acessibilidade no Restauro", descricao: "Integrar rampas e tecnologia sem apagar a história do monumento.", cor: "#f59e0b", fotoUrl: rampaAcessibilidade },
    ],
    falaFinal: "Distrito da Memória Preservada RESTAURADO — Setor Histórico ativo na Cidade Suspensa!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, Diretor de Restauro!",
    quiz: {
      pergunta: "Um prédio antigo recebe o TOMBAMENTO pelo governo. O que isso significa, na prática, para quem é dono do imóvel?",
      alternativas: [
        { texto: "O bem passa a ter proteção legal: não pode ser demolido, pintado ou reformado sem autorização do órgão de patrimônio", correta: true },
        { texto: "Nada muda na prática — é apenas um título simbólico sem nenhuma força de lei", correta: false },
      ],
      feedback: "Exatamente! O TOMBAMENTO é um ato jurídico do poder público (como o IPHAN no Brasil) que reconhece o valor histórico, artístico ou cultural de um bem e o protege por LEI. A partir do tombamento, qualquer alteração — pintura, reforma, demolição — precisa de autorização técnica. É assim que cidades como Ouro Preto e o Pelourinho sobreviveram aos séculos: a lei garantiu que a memória da cidade não fosse apagada por interesses imediatos.",
    },
    missaoFamilia:
      "🏛️ Missão A História Guardada na Cidade: com um adulto, procure um prédio, praça ou monumento antigo perto de casa (pode ser uma igreja, uma casa colonial, um prédio público). Observem juntos: tem placa de tombamento? Quais detalhes mostram sua idade (materiais, estilo, desgaste)? Conversem sobre o que aconteceria se ele fosse demolido. Registrem no álbum uma foto do local com uma frase sobre por que ele merece ser preservado.",
    recompensaTitulo: "🏛️ Distrito da Memória Preservada restaurado — Setor Histórico da Cidade Suspensa.",
    recompensaItem: "📐 Escalímetro de Latão Antigo",
  },

  recompensa: { xp: 120, moedas: 60, medalha: "Escalímetro de Latão Antigo" },
};
