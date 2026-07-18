import type { AulaArteV1 } from "../../types";
import fundicaoMetal from "@/assets/arte-6ano/u5-fundicao-metal.jpg";
import forjaFogo from "@/assets/arte-6ano/u5-forja-fogo.jpg";
import espadaBronze from "@/assets/arte-6ano/u5-espada-bronze.jpg";
import mascaraTaotie from "@/assets/arte-6ano/u5-mascara-taotie.jpg";
import mascaraSanxingdui from "@/assets/arte-6ano/u5-mascara-sanxingdui.jpg";
import vasoShang from "@/assets/arte-6ano/u5-vaso-shang.jpg";
import capaceteBronze from "@/assets/arte-6ano/u5-capacete-bronze.jpg";
import machadoBronze from "@/assets/arte-6ano/u5-machado-bronze.jpg";
import anelPrata from "@/assets/arte-6ano/u5-anel-prata.jpg";
import ceraPerdidaEtapas from "@/assets/arte-6ano/u5-cera-perdida-etapas.png";
import lingoteBronze from "@/assets/arte-6ano/u5-lingote-bronze.jpg";

/**
 * Arte · 6º Ano · Unidade 4 · Aula 01 — "A Estética dos Metais"
 * Metanarrativa: 🧩 O Códice dos Impérios Perdidos
 * Fonte: Idade dos Metais Europeia + Dinastia Shang (China Antiga, ~1600 a.C.)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-estetica-metais",
  titulo: "A Estética dos Metais: Fundição, Tecnologia e Identidade Visual",
  iconeTrilha: "⚒️",
  bncc: ["EF69AR04", "EF69AR05", "EF69AR31"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Investigador! Brilha achou uma câmara secreta do Códice cheia de brilho: ferramentas de bronze e ouro reluzentes, máscaras com rostos PERFEITOS e espadas com linhas entrelaçadas que parecem ter sido desenhadas por um deus. Como o ser humano passou de pedra lascada pra ISSO? Investiga cada peça da Idade dos Metais.",
    titulo: "⚒️ A Câmara do Brilho Eterno",
    instrucao: "Toca em cada pista sobre a arte que nasceu do fogo e do metal derretido",
    itens: [
      { emoji: "🔥", rotulo: "Forja em chamas", descricao: "Controlar o fogo pra derreter cobre, depois bronze e por fim ferro foi uma revolução tecnológica. Cada metal exigia mais temperatura e mais domínio da técnica.", cor: "#dc2626", fotoUrl: forjaFogo },
      { emoji: "⚔️", rotulo: "Espada de bronze entrelaçada", descricao: "Linhas geométricas perfeitas gravadas na lâmina não eram só decoração — mostravam o PODER de quem carregava a espada e a habilidade do artesão que a fundiu.", cor: "#a16207", fotoUrl: espadaBronze },
      { emoji: "👺", rotulo: "Máscara Taotie (Dinastia Shang)", descricao: "Rosto de monstro simétrico gravado em vasos e máscaras de bronze chinesas de ~1600 a.C. Representava proteção espiritual e o poder da dinastia.", cor: "#7c2d12", fotoUrl: mascaraTaotie },
      { emoji: "🏺", rotulo: "Vaso ritual Shang", descricao: "Vasos de bronze usados em cerimônias religiosas da China Antiga. Só a elite podia possuir peças assim — o metal era sinônimo de STATUS.", cor: "#b45309", fotoUrl: vasoShang },
    ],
    falaFinal: "Sua missão nesta página: descobrir como o metal derretido virou símbolo de PODER e IDENTIDADE.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olhar de fundidor antes de entrar na forja!",
    perguntas: [
      {
        pergunta: "Por que a Idade dos Metais é considerada uma revolução maior que a Idade da Pedra?",
        fotoUrl: fundicaoMetal,
        alternativas: [
          { texto: "Porque o metal podia ser derretido e MOLDADO em qualquer forma — a pedra só podia ser lascada", correta: true },
          { texto: "Porque o metal é mais bonito que a pedra", correta: false },
        ],
        feedbackAcerto: "Exato! Metal líquido preenche QUALQUER molde. Pedra bruta é rígida e só permite lascar — a liberdade de forma mudou tudo.",
        feedbackErro: "Não é sobre beleza. É sobre TECNOLOGIA: metal derretido pode virar qualquer forma; pedra não pode ser moldada, só lascada.",
      },
      {
        pergunta: "Na Dinastia Shang (China Antiga, ~1600 a.C.), quem podia ter objetos de bronze decorados como máscaras e vasos rituais?",
        fotoUrl: mascaraSanxingdui,
        alternativas: [
          { texto: "Principalmente a elite e a realeza — bronze era ornato de status e poder dinástico", correta: true },
          { texto: "Qualquer pessoa comum podia comprar em qualquer mercado", correta: false },
        ],
        feedbackAcerto: "Correto! Bronze era caro e difícil de produzir — só quem tinha poder político e religioso tinha acesso a essas peças.",
        feedbackErro: "Pense em quem controlava a metalurgia: era um recurso raro e caro, reservado à elite dinástica e religiosa.",
      },
      {
        pergunta: "O que é a técnica da cera perdida?",
        fotoUrl: ceraPerdidaEtapas,
        alternativas: [
          { texto: "Esculpir em cera, cobrir com barro, derreter a cera e despejar metal líquido no molde vazio", correta: true },
          { texto: "Derreter cera para acender tochas dentro da forja", correta: false },
        ],
        feedbackAcerto: "Isso! Cera → molde de barro → cera derrete e escoa → metal líquido ocupa o espaço vazio e vira a peça final.",
        feedbackErro: "Não tem nada a ver com tochas. É um processo de MOLDAGEM: a cera dá a forma, o barro guarda essa forma, e o metal a substitui.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do fundidor. Toca em cada verbete!",
    cards: [
      { termo: "Idade dos Metais", definicao: "Período em que a humanidade aprendeu a extrair e fundir cobre, bronze e ferro, substituindo ferramentas de pedra por peças moldáveis e mais resistentes.", emoji: "⚒️", cor: "#b45309", fotoUrl: fundicaoMetal },
      { termo: "Técnica da Cera Perdida", definicao: "Processo de fundição: esculpe-se em cera, cobre-se com barro, derrete-se a cera e despeja-se metal líquido no molde vazio.", emoji: "🕯️", cor: "#dc2626", fotoUrl: ceraPerdidaEtapas },
      { termo: "Ornato de Status", definicao: "Joias, armaduras e vasos decorados que mostravam o PODER e a posição social de quem os possuía — não eram só enfeite.", emoji: "👑", cor: "#a16207", fotoUrl: mascaraTaotie },
      { termo: "Dinastia Shang", definicao: "Primeira dinastia chinesa com registros de bronzes rituais (~1600 a.C.), famosa por vasos e máscaras com o padrão Taotie.", emoji: "🏺", cor: "#7c2d12", fotoUrl: vasoShang },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como o metal derretido virou linguagem de PODER.",
    paragrafos: [
      "Depois de milênios lascando pedra, o ser humano descobriu algo revolucionário: alguns minerais, quando aquecidos a temperaturas altíssimas, DERRETEM e podem ser MOLDADOS em qualquer formato. Primeiro veio o cobre, depois a mistura de cobre e estanho criou o BRONZE — mais duro e resistente — e por fim veio o ferro, que exigia forjas ainda mais quentes.",
      "Essa é a IDADE DOS METAIS. Diferente da pedra, que só pode ser lascada ou polida, o metal líquido PREENCHE qualquer molde. Isso abriu um mundo novo de formas: espadas com lâminas finas e curvas, joias delicadas, máscaras com detalhes perfeitos — coisas impossíveis de esculpir em pedra bruta.",
      "Para criar essas peças complexas, os artesãos antigos usavam a TÉCNICA DA CERA PERDIDA: esculpiam o objeto em cera, cobriam tudo com barro formando um molde, aqueciam até a cera derreter e escorrer por um canal, e então despejavam metal líquido no espaço vazio deixado pela cera. Quando o metal esfriava, quebravam o barro e revelavam a peça — idêntica ao modelo original de cera.",
      "Na China Antiga, a Dinastia Shang (por volta de 1600 a.C.) elevou essa técnica a um nível artístico impressionante: vasos rituais de bronze cobertos pelo padrão TAOTIE, um rosto de monstro simétrico que combinava olhos, chifres e presas. Essas peças não eram usadas no dia a dia — eram ORNATO DE STATUS, reservado à realeza e à elite religiosa, usado em cerimônias para se comunicar com os ancestrais.",
      "O mesmo aconteceu na Europa da Idade dos Metais: armaduras, capacetes e espadas de bronze com padrões entrelaçados mostravam a posição social do guerreiro. Quem controlava a metalurgia — o segredo de derreter e moldar metal — controlava também o PODER. Metal virou sinônimo de riqueza, proteção espiritual e identidade dinástica.",
    ],
    pigmentos: [
      { nome: "Bronze fundido", hex: "#b45309", fonte: "Liga de cobre e estanho da Idade dos Metais", emoji: "⚒️", fotoUrl: fundicaoMetal },
      { nome: "Máscara Taotie", hex: "#7c2d12", fonte: "Ornato ritual da Dinastia Shang (~1600 a.C.)", emoji: "👺", fotoUrl: mascaraTaotie },
      { nome: "Molde de cera derretida", hex: "#f59e0b", fonte: "Etapa central da técnica da cera perdida", emoji: "🕯️", fotoUrl: ceraPerdidaEtapas },
      { nome: "Espada entrelaçada", hex: "#78350f", fonte: "Arma-símbolo de status guerreiro", emoji: "⚔️", fotoUrl: espadaBronze },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica se o Códice registrou tudo sobre os metais!",
    perguntas: [
      {
        pergunta: "Qual é a principal diferença técnica entre trabalhar com PEDRA e trabalhar com METAL LÍQUIDO?",
        fotoUrl: fundicaoMetal,
        alternativas: [
          { texto: "Metal líquido preenche qualquer molde e permite formas complexas; a pedra bruta só pode ser lascada ou polida", correta: true },
          { texto: "Não existe diferença nenhuma, os dois materiais funcionam do mesmo jeito", correta: false },
        ],
        feedbackAcerto: "Isso! Essa liberdade de MOLDAGEM foi o que permitiu criar joias, máscaras e armas com detalhes impossíveis em pedra.",
        feedbackErro: "Existe sim uma diferença enorme: metal derretido é LÍQUIDO e se molda a qualquer forma; pedra é rígida e só permite lascar.",
      },
      {
        pergunta: "Na técnica da cera perdida, o que acontece com a cera durante o processo?",
        fotoUrl: ceraPerdidaEtapas,
        alternativas: [
          { texto: "Ela derrete e escoa para fora do molde de barro, deixando um espaço vazio que o metal líquido vai ocupar", correta: true },
          { texto: "Ela vira parte permanente da peça final, misturada ao metal", correta: false },
        ],
        feedbackAcerto: "Correto! Por isso o nome 'cera PERDIDA' — ela some no processo, dando lugar ao metal que assume sua forma exata.",
        feedbackErro: "A cera não fica na peça final — ela derrete e é 'perdida', abrindo espaço para o metal líquido tomar sua forma.",
      },
      {
        pergunta: "Por que vasos e máscaras de bronze da Dinastia Shang são chamados de 'ornato de status'?",
        fotoUrl: vasoShang,
        alternativas: [
          { texto: "Porque eram caros e difíceis de produzir, reservados à elite e usados para mostrar poder político e religioso", correta: true },
          { texto: "Porque qualquer camponês da época tinha um em casa para cozinhar", correta: false },
        ],
        feedbackAcerto: "Exato! Controlar a metalurgia era controlar o poder — só reis, nobres e sacerdotes tinham acesso a essas peças.",
        feedbackErro: "Pense em quem controlava a produção de bronze: era raro e caro, por isso virou símbolo de status da elite, não objeto comum.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada peça no quadrante certo da Forja de Identidades.",
    animais: [
      {
        nome: "Máscara Taotie de bronze", emoji: "👺", fotoUrl: mascaraTaotie,
        corAlvo: { nome: "Ornato de Status", hex: "#7c2d12" },
        opcoes: [
          { nome: "Ornato de Status", hex: "#7c2d12" },
          { nome: "Ferramenta Comum", hex: "#0ea5e9" },
          { nome: "Molde de Cera", hex: "#f59e0b" },
        ],
        falaAcerto: "Isso! Máscara ritual de elite = Ornato de Status puro.",
      },
      {
        nome: "Vaso ritual de bronze Shang", emoji: "🏺", fotoUrl: vasoShang,
        corAlvo: { nome: "Ornato de Status", hex: "#7c2d12" },
        opcoes: [
          { nome: "Ornato de Status", hex: "#7c2d12" },
          { nome: "Ferramenta Comum", hex: "#0ea5e9" },
          { nome: "Molde de Cera", hex: "#f59e0b" },
        ],
        falaAcerto: "Perfeito! Vaso usado em cerimônia dinástica = símbolo de poder.",
      },
      {
        nome: "Etapas da cera derretendo no barro", emoji: "🕯️", fotoUrl: ceraPerdidaEtapas,
        corAlvo: { nome: "Molde de Cera", hex: "#f59e0b" },
        opcoes: [
          { nome: "Molde de Cera", hex: "#f59e0b" },
          { nome: "Ornato de Status", hex: "#7c2d12" },
          { nome: "Ferramenta Comum", hex: "#0ea5e9" },
        ],
        falaAcerto: "Correto! Isso é a técnica de fundição, não o objeto final de status.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos da TÉCNICA DA CERA PERDIDA, do escultor ao objeto pronto.",
    passos: [
      { id: "p1", texto: "ESCULPO a peça desejada (máscara, joia, espada) em CERA macia", emoji: "🕯️", ordem: 1, fotoUrl: ceraPerdidaEtapas },
      { id: "p2", texto: "COBRE tudo com camadas de BARRO até formar um molde sólido em volta da cera", emoji: "🟤", ordem: 2, fotoUrl: vasoShang },
      { id: "p3", texto: "AQUEÇO o molde até a cera DERRETER e escorrer por um canal, deixando o espaço vazio", emoji: "🔥", ordem: 3, fotoUrl: forjaFogo },
      { id: "p4", texto: "DESPEJO metal líquido (bronze) dentro do molde vazio, preenchendo cada detalhe", emoji: "🧪", ordem: 4, fotoUrl: fundicaoMetal },
      { id: "p5", texto: "ESPERO esfriar, QUEBRO o barro e revelo a peça de metal idêntica ao modelo original", emoji: "⚒️", ordem: 5, fotoUrl: espadaBronze },
    ],
    falaAcerto: "Você acabou de dominar a TÉCNICA DA CERA PERDIDA — a mesma usada pelos artesãos Shang há 3600 anos!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do fundidor. Toca nas palavras coloridas.",
    titulo: "Diário do Fundidor",
    trechos: [
      { texto: "Sou fundidor. Domino o fogo pra transformar minério em", palavraDestaque: "bronze", corDestaque: "#b45309" },
      { texto: "Uso a", palavraDestaque: "técnica da cera perdida", corDestaque: "#f59e0b" },
      { texto: "para esculpir máscaras e vasos que viram", palavraDestaque: "ornato de status", corDestaque: "#7c2d12" },
      { texto: "Cada linha entrelaçada na minha peça não é só beleza — é PODER e IDENTIDADE gravados no metal." },
      { texto: "Quando o metal esfria e o barro quebra, uma nova era de possibilidades nasce diante dos meus olhos." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 A Forja da Cera Perdida! Controle a temperatura, derreta a cera no ponto exato e despeje o bronze sem bolhas de ar.",
    titulo: "🔥 A Forja da Cera Perdida",
    instrucao: "Ajuste a temperatura da forja virtual e finalize a fundição perfeita!",
    tempoSeg: 35,
    itens: [
      { emoji: "🕯️", rotulo: "Cera no ponto de derreter", cor: "#f59e0b" },
      { emoji: "🌡️", rotulo: "Temperatura ideal da forja", cor: "#dc2626" },
      { emoji: "🟤", rotulo: "Molde de barro selado", cor: "#78350f" },
      { emoji: "🧪", rotulo: "Bronze líquido sem bolhas", cor: "#b45309" },
      { emoji: "⚒️", rotulo: "Peça revelada e polida", cor: "#a16207" },
      { emoji: "👑", rotulo: "Selo de status dinástico", cor: "#7c2d12" },
    ],
    falaFinal: "Fundição perfeita! Você controlou o fogo como um verdadeiro artesão da Dinastia Shang.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a página do Códice sobre os Metais. Toca em cada verbete!",
    titulo: "📓 Caderno da Estética dos Metais",
    itens: [
      { emoji: "⚒️", rotulo: "Idade dos Metais", descricao: "Período de domínio do cobre, bronze e ferro — ferramentas e arte ganharam formas antes impossíveis em pedra.", cor: "#b45309", fotoUrl: fundicaoMetal },
      { emoji: "🕯️", rotulo: "Técnica da Cera Perdida", descricao: "Cera vira molde de barro; a cera derrete e escoa; o metal líquido preenche o vazio e assume a forma exata.", cor: "#f59e0b", fotoUrl: ceraPerdidaEtapas },
      { emoji: "👑", rotulo: "Ornato de Status", descricao: "Joias, máscaras e armaduras decoradas mostravam poder, identidade dinástica e posição social.", cor: "#7c2d12", fotoUrl: mascaraTaotie },
      { emoji: "🏺", rotulo: "Dinastia Shang", descricao: "China Antiga, ~1600 a.C. Vasos rituais de bronze com padrão Taotie usados pela elite em cerimônias.", cor: "#a16207", fotoUrl: vasoShang },
      { emoji: "⚔️", rotulo: "Armas e armaduras decoradas", descricao: "Espadas e capacetes com linhas entrelaçadas revelavam a posição do guerreiro na sociedade.", cor: "#78350f", fotoUrl: capaceteBronze },
      { emoji: "🪙", rotulo: "Metal líquido vs. pedra rígida", descricao: "Metal derretido preenche qualquer molde; a pedra bruta só pode ser lascada — foi uma revolução de possibilidades.", cor: "#dc2626", fotoUrl: machadoBronze },
      { emoji: "🏆", rotulo: "Lingote de Bronze Shang", descricao: "Sua recompensa: desbloqueia a página 'A Forja dos Símbolos de Poder' do Códice.", cor: "#f59e0b", fotoUrl: lingoteBronze },
      { emoji: "💍", rotulo: "Joia de metal precioso", descricao: "Anéis e adornos de prata e ouro completavam o conjunto de status ao lado das armas e vasos.", cor: "#0ea5e9", fotoUrl: anelPrata },
    ],
    falaFinal: "Página dos Metais RESTAURADA — 'A Forja dos Símbolos de Poder' desbloqueada!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Desafio do Fundidor, investigador!",
    quiz: {
      pergunta: "Por que a técnica da cera perdida foi tão importante para a arte da Idade dos Metais e da Dinastia Shang?",
      alternativas: [
        { texto: "Porque permitiu moldar detalhes complexos (rostos, padrões entrelaçados) em metal, algo impossível de esculpir em pedra bruta", correta: true },
        { texto: "Porque era a única forma de deixar objetos brilhantes e coloridos", correta: false },
      ],
      feedback: "Perfeito! A cera perdida deu liberdade total de FORMA: cera vira molde, molde vira metal — e assim nasceram máscaras Taotie, vasos rituais e espadas entrelaçadas cheias de detalhes que a pedra jamais permitiria.",
    },
    missaoFamilia:
      "⚒️ Missão Investigadores de Metais Domésticos: Percorra sua casa e encontre pelo menos 3 objetos de metal diferentes (cobre, inox, alumínio, prata, ferro). Para cada um, observe e anote: Que metal é? Tem alguma decoração, ranhura ou relevo? Ele mostra 'status' (é usado só em ocasiões especiais) ou é do dia a dia? No app, registre fotos dos objetos e escreva 5 linhas comparando: qual peça parece mais 'ornato de status' e qual é mais 'ferramenta comum' — e por quê.",
    recompensaTitulo: "📜 Página restaurada — A Forja dos Símbolos de Poder.",
    recompensaItem: "🥇 Lingote de Bronze da Alta Dinastia Shang",
  },

  recompensa: { xp: 110, moedas: 55, medalha: "Lingote de Bronze da Alta Dinastia Shang" },
};
