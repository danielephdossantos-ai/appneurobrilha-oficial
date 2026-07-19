import type { AulaArteV1 } from "../../types";
import __asset_cavernaLascaux from "@/assets/arte-6ano/u1-caverna-lascaux.jpg.asset.json";
const cavernaLascaux = __asset_cavernaLascaux.url;
import __asset_bisaoAltamira from "@/assets/arte-6ano/u1-bisao-altamira.jpg.asset.json";
const bisaoAltamira = __asset_bisaoAltamira.url;
import __asset_maosNegativo from "@/assets/arte-6ano/u1-maos-negativo.jpg.asset.json";
const maosNegativo = __asset_maosNegativo.url;
import __asset_pigmentosNaturais from "@/assets/arte-6ano/u1-pigmentos-naturais.jpg.asset.json";
const pigmentosNaturais = __asset_pigmentosNaturais.url;
import __asset_valeDosReis from "@/assets/arte-6ano/u6-vale-dos-reis.jpg.asset.json";
const valeDosReis = __asset_valeDosReis.url;
import __asset_entradaTumba from "@/assets/arte-6ano/u6-entrada-tumba.jpg.asset.json";
const entradaTumba = __asset_entradaTumba.url;
import __asset_stonehengeGeral from "@/assets/arte-6ano/u3m-stonehenge-geral.jpg.asset.json";
const stonehengeGeral = __asset_stonehengeGeral.url;
import __asset_arqueologo from "@/assets/arte-6ano/u3m-arqueologo.jpg.asset.json";
const arqueologo = __asset_arqueologo.url;
import codiceGrafismos from "@/assets/arte-6ano/u3-codice-grafismos.jpg";
import internetAbstracao from "@/assets/arte-6ano/u3-internet-abstracao.jpg";
import mascaraSanxingdui from "@/assets/arte-6ano/u5-mascara-sanxingdui.jpg";
import espadaBronze from "@/assets/arte-6ano/u5-espada-bronze.jpg";
import anelPrata from "@/assets/arte-6ano/u5-anel-prata.jpg";
import linhaSonora from "@/assets/arte-6ano/u2-linha-sonora.jpg";

/**
 * Arte · 6º Ano · Unidade 6 · Aula 01 — "O Códice Decifrado"
 * Metanarrativa: 🧩 O Códice dos Impérios Perdidos — FECHAMENTO DO CURSO
 * Fonte: Preservação digital contemporânea (LiDAR, fotogrametria, museus virtuais)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-codice-decifrado",
  titulo: "O Retorno ao Núcleo: O Códice Decifrado",
  iconeTrilha: "🧩",
  bncc: ["EF69AR01", "EF69AR05", "EF69AR32", "EF69AR35"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Investigador! Chegamos ao NÚCLEO do Códice — todas as páginas restauradas brilham ao mesmo tempo. Mas Brilha percebe algo assustador: os ORIGINAIS estão se esfarelando de verdade. Rochas rachando, línguas orais silenciando, tintas egípcias desbotando pra sempre. A arte do PASSADO só sobrevive com a tecnologia do FUTURO. Última investigação começa agora.",
    titulo: "🏺 O Núcleo em Perigo",
    instrucao: "Toca em cada pista sobre o patrimônio que está desaparecendo de verdade",
    itens: [
      { emoji: "🪨", rotulo: "Cavernas rachando", descricao: "Pinturas rupestres de 30 mil anos sofrem com umidade, turistas e o próprio tempo. Cada visita deixa CO2 e fungos que corroem o pigmento milimetricamente.", cor: "#7c2d12", fotoUrl: cavernaLascaux },
      { emoji: "🎨", rotulo: "Tintas egípcias sumindo", descricao: "Pigmentos minerais de tumbas milenares desbotam ao contato com luz e ar. O que resistiu 4 mil anos fechado pode sumir em poucas décadas exposto.", cor: "#f59e0b", fotoUrl: valeDosReis },
      { emoji: "🗣️", rotulo: "Línguas orais esquecidas", descricao: "Quando o último falante de uma língua morre sem registro, um universo inteiro de histórias, cantos e saberes desaparece PRA SEMPRE.", cor: "#dc2626", fotoUrl: codiceGrafismos },
      { emoji: "🏛️", rotulo: "Monumentos destruídos", descricao: "Guerras, terremotos e erosão já apagaram templos e cidades inteiras. Sem registro prévio, a reconstrução vira quase impossível.", cor: "#7c3aed", fotoUrl: stonehengeGeral },
    ],
    falaFinal: "Sua missão final: aprender como a TECNOLOGIA digital pode guardar a arte do passado para sempre.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra os sensores antes de escanear o patrimônio!",
    perguntas: [
      {
        pergunta: "Por que uma pintura rupestre de 30 mil anos corre risco HOJE, mesmo tendo sobrevivido tanto tempo escondida?",
        fotoUrl: cavernaLascaux,
        alternativas: [
          { texto: "Porque a exposição ao ar, luz, umidade e visitas humanas acelera a degradação que séculos fechados não causaram", correta: true },
          { texto: "Porque pinturas antigas têm prazo de validade marcado na rocha", correta: false },
        ],
        feedbackAcerto: "Exato! O equilíbrio que preservou a pintura por milênios se rompe assim que abrimos a caverna ao mundo — por isso a URGÊNCIA de escanear tudo digitalmente.",
        feedbackErro: "Não existe prazo de validade mágico. O problema é o CONTATO com o ambiente externo — luz, ar e visitantes aceleram o desgaste.",
      },
      {
        pergunta: "O que é a tecnologia LiDAR usada na preservação digital de patrimônios?",
        fotoUrl: arqueologo,
        alternativas: [
          { texto: "Um scanner a laser que dispara milhões de feixes por segundo pra criar um modelo 3D exato de um objeto ou lugar", correta: true },
          { texto: "Uma câmera comum que tira fotos em preto e branco", correta: false },
        ],
        feedbackAcerto: "Perfeito! LiDAR mede o tempo que cada feixe de laser leva pra voltar, criando uma 'nuvem de pontos' que reconstrói a forma real, milímetro por milímetro.",
        feedbackErro: "LiDAR vai muito além de foto simples: é um LASER que mapeia profundidade e forma em 3D com precisão milimétrica.",
      },
      {
        pergunta: "Se um monumento é totalmente destruído por um terremoto, o que permite RECONSTRUÍ-LO digitalmente depois?",
        fotoUrl: stonehengeGeral,
        alternativas: [
          { texto: "Escaneamentos 3D e fotografias feitos ANTES da destruição, guardados em banco de dados", correta: true },
          { texto: "A memória dos arqueólogos, que sempre lembram cada detalhe de cor", correta: false },
        ],
        feedbackAcerto: "Isso! Sem registro PRÉVIO em 3D, a reconstrução vira suposição. Por isso escanear hoje é proteger o amanhã.",
        feedbackErro: "Memória humana falha e se perde. É o REGISTRO DIGITAL prévio que garante uma reconstrução fiel.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do arqueólogo digital. Toca em cada verbete!",
    cards: [
      { termo: "Patrimônio Cultural", definicao: "Todo bem material ou imaterial que representa a identidade e a memória de um povo — cavernas, templos, línguas, festas. Precisa ser protegido para as próximas gerações.", emoji: "🏛️", cor: "#7c2d12", fotoUrl: valeDosReis },
      { termo: "Escaneamento 3D (LiDAR)", definicao: "Tecnologia a laser que dispara milhões de feixes por segundo e mede o retorno, criando uma cópia digital milimetricamente exata de um objeto ou espaço.", emoji: "📡", cor: "#06b6d4", fotoUrl: arqueologo },
      { termo: "Museu Virtual", definicao: "Espaço digital, acessível pelo celular ou computador, onde qualquer pessoa no mundo visita réplicas 3D de obras e sítios reais sem sair de casa.", emoji: "🖥️", cor: "#7c3aed", fotoUrl: internetAbstracao },
      { termo: "Fotogrametria", definicao: "Técnica que cruza dezenas de fotos do mesmo objeto em ângulos diferentes para que um software calcule sua forma em 3D.", emoji: "📸", cor: "#0ea5e9", fotoUrl: mascaraSanxingdui },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a tecnologia de HOJE salva a arte do passado.",
    paragrafos: [
      "Chegamos ao NÚCLEO do Códice. Todas as páginas que você restaurou — cavernas, vozes, símbolos, monumentos, metais e impérios — apontam pra um problema em comum: o ORIGINAL é frágil. Rocha racha, tinta desbota, voz silencia, metal enferruja. A arte do passado precisa da tecnologia do futuro pra sobreviver.",
      "A ferramenta mais poderosa dessa missão é o escaneamento 3D por LIDAR (Light Detection And Ranging). Um equipamento dispara MILHÕES de feixes de laser por segundo sobre uma superfície — uma parede de caverna, uma estátua, um templo inteiro. Cada feixe volta em um tempo diferente, e o computador calcula a distância exata de cada ponto, formando uma NUVEM DE PONTOS que reconstrói a forma real, milímetro por milímetro.",
      "Times de arqueólogos já escanearam cavernas rupestres inteiras — como Lascaux, na França — pra criar cópias digitais indestrutíveis. Assim, mesmo que a caverna original precise ser fechada ao público pra se proteger, todo mundo pode visitar a réplica digital idêntica, em ALTA definição, sem danificar NADA do original.",
      "O mesmo vale pra monumentos destruídos por guerras ou terremotos: se existia um escaneamento ou muitas fotos de ANTES da destruição, é possível reconstruir o monumento inteiro em 3D — e até imprimir peças físicas de reposição com essas medidas exatas.",
      "Isso cria os MUSEUS VIRTUAIS: plataformas onde qualquer pessoa, de qualquer lugar do mundo, visita em 360° o Louvre, as pirâmides ou as cavernas de Lascaux pelo celular. A arte deixa de pertencer só a quem pode viajar — ela vira patrimônio de TODA a humanidade, protegida em um banco de dados que nenhum terremoto, guerra ou tempo consegue apagar.",
    ],
    pigmentos: [
      { nome: "Laser LiDAR", hex: "#06b6d4", fonte: "Escaneamento 3D milimétrico de patrimônios", emoji: "📡", fotoUrl: arqueologo },
      { nome: "Nuvem de pontos", hex: "#0ea5e9", fonte: "Milhões de coordenadas que formam o modelo 3D", emoji: "🌐", fotoUrl: internetAbstracao },
      { nome: "Réplica digital", hex: "#7c3aed", fonte: "Cópia indestrutível da caverna ou monumento original", emoji: "🖥️", fotoUrl: cavernaLascaux },
      { nome: "Museu virtual", hex: "#f59e0b", fonte: "Acesso mundial a patrimônios protegidos", emoji: "🏛️", fotoUrl: valeDosReis },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica se o Núcleo do Códice está totalmente decifrado!",
    perguntas: [
      {
        pergunta: "Qual é a principal vantagem de criar uma RÉPLICA DIGITAL de uma caverna rupestre em vez de manter o turismo direto dentro dela?",
        fotoUrl: cavernaLascaux,
        alternativas: [
          { texto: "A réplica pode ser visitada por milhões de pessoas sem causar dano nenhum ao original, que fica protegido", correta: true },
          { texto: "A réplica é sempre mais bonita que a pintura original", correta: false },
        ],
        feedbackAcerto: "Exatamente! Esse é o dilema do turismo destrutivo — a réplica digital imersiva é a solução responsável.",
        feedbackErro: "Não é sobre beleza. É sobre PROTEÇÃO: o original é frágil, a réplica pode receber visitas ilimitadas sem risco.",
      },
      {
        pergunta: "Como funciona a FOTOGRAMETRIA na hora de registrar um objeto antigo em 3D?",
        fotoUrl: mascaraSanxingdui,
        alternativas: [
          { texto: "Um software cruza dezenas de fotos do objeto em ângulos diferentes e calcula os pontos em comum pra montar um modelo 3D", correta: true },
          { texto: "Basta uma única foto de frente pra criar o modelo 3D completo", correta: false },
        ],
        feedbackAcerto: "Isso! Quanto mais ângulos fotografados, mais preciso fica o modelo — geralmente são usadas 50 fotos ou mais.",
        feedbackErro: "Uma foto só não basta — é a COMPARAÇÃO entre muitos ângulos que permite calcular a profundidade e a forma real.",
      },
      {
        pergunta: "Um templo antigo é destruído por um terremoto. O que TORNA possível reconstruí-lo digitalmente depois?",
        fotoUrl: stonehengeGeral,
        alternativas: [
          { texto: "A existência de escaneamentos 3D ou muitas fotos feitas ANTES da destruição", correta: true },
          { texto: "Nada — templos destruídos são perdidos pra sempre, sem exceção", correta: false },
        ],
        feedbackAcerto: "Correto! Por isso arqueólogos correm pra escanear patrimônios em risco ANTES de qualquer tragédia acontecer.",
        feedbackErro: "Com registro prévio em 3D, a reconstrução digital — e até física — se torna possível. Nada de 'perdido pra sempre' se houver dado salvo.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada ferramenta no laboratório de preservação digital.",
    animais: [
      {
        nome: "Scanner a laser de caverna", emoji: "📡", fotoUrl: arqueologo,
        corAlvo: { nome: "Escaneamento 3D (LiDAR)", hex: "#06b6d4" },
        opcoes: [
          { nome: "Escaneamento 3D (LiDAR)", hex: "#06b6d4" },
          { nome: "Museu Virtual", hex: "#7c3aed" },
          { nome: "Patrimônio Cultural", hex: "#7c2d12" },
        ],
        falaAcerto: "Isso! Feixes de laser medindo distância = tecnologia LiDAR.",
      },
      {
        nome: "Plataforma 360° do Louvre online", emoji: "🖥️", fotoUrl: internetAbstracao,
        corAlvo: { nome: "Museu Virtual", hex: "#7c3aed" },
        opcoes: [
          { nome: "Museu Virtual", hex: "#7c3aed" },
          { nome: "Escaneamento 3D (LiDAR)", hex: "#06b6d4" },
          { nome: "Fotogrametria", hex: "#0ea5e9" },
        ],
        falaAcerto: "Perfeito! Acesso remoto e imersivo a obras reais = Museu Virtual.",
      },
      {
        nome: "Cavernas de Lascaux originais", emoji: "🏛️", fotoUrl: valeDosReis,
        corAlvo: { nome: "Patrimônio Cultural", hex: "#7c2d12" },
        opcoes: [
          { nome: "Patrimônio Cultural", hex: "#7c2d12" },
          { nome: "Museu Virtual", hex: "#7c3aed" },
          { nome: "Fotogrametria", hex: "#0ea5e9" },
        ],
        falaAcerto: "Correto! O bem real, físico e histórico é o Patrimônio Cultural em si.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos da FOTOGRAMETRIA — eu faço na sua frente, agora você organiza.",
    passos: [
      { id: "p1", texto: "ESCOLHO o objeto antigo a ser preservado (estátua, vaso, ferramenta)", emoji: "🏺", ordem: 1, fotoUrl: mascaraSanxingdui },
      { id: "p2", texto: "TIRO cerca de 50 fotos do objeto, girando em volta dele em ângulos diferentes", emoji: "📸", ordem: 2, fotoUrl: espadaBronze },
      { id: "p3", texto: "ENVIO todas as fotos pro software de fotogrametria", emoji: "💻", ordem: 3, fotoUrl: internetAbstracao },
      { id: "p4", texto: "O SOFTWARE cruza os pontos em comum entre as fotos e calcula a profundidade", emoji: "🧮", ordem: 4, fotoUrl: arqueologo },
      { id: "p5", texto: "NASCE o modelo 3D indestrutível, pronto pra virar peça de Museu Virtual", emoji: "🌐", ordem: 5, fotoUrl: linhaSonora },
    ],
    falaAcerto: "Você acabou de dominar a FOTOGRAMETRIA — o objeto físico pode até quebrar, mas o modelo 3D vive pra sempre!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do arqueólogo digital. Toca nas palavras coloridas.",
    titulo: "Diário do Arqueólogo Digital",
    trechos: [
      { texto: "Sou arqueólogo digital. Uso o", palavraDestaque: "escaneamento 3D (LiDAR)", corDestaque: "#06b6d4" },
      { texto: "e a", palavraDestaque: "fotogrametria", corDestaque: "#0ea5e9" },
      { texto: "pra proteger o", palavraDestaque: "patrimônio cultural", corDestaque: "#7c2d12" },
      { texto: "que está se esfarelando. Sei que visitar um sítio real demais pode DESTRUÍ-LO." },
      { texto: "Por isso crio réplicas digitais e Museus Virtuais — assim o mundo INTEIRO visita sem machucar nada. A tecnologia do futuro é a guardiã da arte do passado." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🧩 O Reconstrutor de Dados! Remonte todos os fragmentos digitais do templo danificado antes que o modelo 3D se perca.",
    titulo: "🧩 O Reconstrutor de Dados",
    instrucao: "Encaixe cada fragmento escaneado no lugar certo do templo em ruínas!",
    tempoSeg: 35,
    itens: [
      { emoji: "🧱", rotulo: "Fragmento da coluna leste", cor: "#7c2d12" },
      { emoji: "🗿", rotulo: "Fragmento do altar central", cor: "#dc2626" },
      { emoji: "📡", rotulo: "Nuvem de pontos LiDAR", cor: "#06b6d4" },
      { emoji: "🧩", rotulo: "Bloco da entrada principal", cor: "#f59e0b" },
      { emoji: "🖥️", rotulo: "Textura digital de restauro", cor: "#7c3aed" },
      { emoji: "🌐", rotulo: "Modelo 3D final", cor: "#0ea5e9" },
    ],
    falaFinal: "Templo reconstruído em dados! Nenhum fragmento se perdeu no banco digital.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o NÚCLEO do Códice. Toca em cada verbete final!",
    titulo: "🧩 Caderno do Códice Decifrado",
    itens: [
      { emoji: "🏛️", rotulo: "Patrimônio Cultural", descricao: "Bens materiais e imateriais que carregam a identidade de um povo. Frágeis e precisam de proteção ativa.", cor: "#7c2d12", fotoUrl: valeDosReis },
      { emoji: "📡", rotulo: "Escaneamento 3D (LiDAR)", descricao: "Laser que dispara milhões de feixes por segundo e cria cópias digitais exatas, milímetro por milímetro.", cor: "#06b6d4", fotoUrl: arqueologo },
      { emoji: "📸", rotulo: "Fotogrametria", descricao: "Dezenas de fotos cruzadas por software criam um modelo 3D indestrutível de qualquer objeto.", cor: "#0ea5e9", fotoUrl: mascaraSanxingdui },
      { emoji: "🖥️", rotulo: "Museu Virtual", descricao: "Réplica imersiva acessível ao mundo inteiro — solução responsável contra o turismo destrutivo.", cor: "#7c3aed", fotoUrl: internetAbstracao },
      { emoji: "🪨", rotulo: "Cavernas em risco", descricao: "Pinturas rupestres milenares ameaçadas por umidade, luz e visitas — hoje protegidas por escaneamento total.", cor: "#dc2626", fotoUrl: cavernaLascaux },
      { emoji: "🏺", rotulo: "Objetos de família", descricao: "Como um vaso ou anel antigo: também merecem registro técnico e história preservada, como um patrimônio pessoal.", cor: "#f59e0b", fotoUrl: anelPrata },
      { emoji: "🔑", rotulo: "Selo de Mestre Arqueólogo", descricao: "Sua recompensa final: o Códice inteiro decifrado, restaurado e protegido para sempre.", cor: "#7c3aed", fotoUrl: codiceGrafismos },
      { emoji: "🌐", rotulo: "Banco de dados eterno", descricao: "Diferente da rocha ou da tinta, um dado bem guardado em múltiplas cópias nunca se apaga.", cor: "#0ea5e9", fotoUrl: linhaSonora },
    ],
    falaFinal: "O CÓDICE DOS IMPÉRIOS PERDIDOS está inteiramente restaurado, arquivado e protegido!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Desafio Final do Detetive, Mestre Arqueólogo!",
    quiz: {
      pergunta: "Uma comunidade descobre uma pintura rupestre rara, mas sabe que o turismo em massa pode destruí-la em poucos anos. Qual é a solução mais RESPONSÁVEL, unindo preservação e acesso ao público?",
      alternativas: [
        { texto: "Escanear a caverna em 3D (LiDAR/fotogrametria) e criar uma réplica digital imersiva para visitação, protegendo o original", correta: true },
        { texto: "Fechar a caverna pra sempre e não deixar mais ninguém saber que ela existe", correta: false },
      ],
      feedback: "Perfeito, Investigador do Tempo! A réplica digital resolve o dilema: o mundo inteiro visita, aprende e se emociona, enquanto o ORIGINAL fica protegido intacto pelas próximas gerações. Você decifrou o Códice por completo!",
    },
    missaoFamilia:
      "🌐 Expedição ao Museu Virtual: Em família, escolham uma visita 360° online gratuita (por exemplo, o Louvre ou as Cavernas de Lascaux). Explorem por pelo menos 10 minutos e depois expliquem, em 5 linhas no app, como esse mapeamento científico (LiDAR ou fotogrametria) foi usado pra criar aquele passeio virtual e por que isso protege o patrimônio original.",
    recompensaTitulo: "🧩 O Códice dos Impérios Perdidos Inteiramente Restaurado, Arquivado e Protegido",
    recompensaItem: "🧩 Selo de Mestre Arqueólogo + Código Criptográfico do Códice Completo",
  },

  recompensa: { xp: 130, moedas: 65, medalha: "Selo de Mestre Arqueólogo" },
};
