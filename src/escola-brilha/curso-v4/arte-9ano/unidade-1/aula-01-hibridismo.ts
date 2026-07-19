import type { AulaArteV1 } from "../../types";
import { url as varejao } from "@/assets/arte-9ano/u1-varejao.jpg.asset.json";
import { url as hibridismo } from "@/assets/arte-9ano/u1-hibridismo.jpg.asset.json";
import { url as bienal } from "@/assets/arte-9ano/u1-bienal.jpg.asset.json";
import { url as sincretismo } from "@/assets/arte-9ano/u1-sincretismo.jpg.asset.json";
import { url as colagemGrega } from "@/assets/arte-9ano/u1-colagem-grega.jpg.asset.json";
import { url as kente } from "@/assets/arte-9ano/u1-kente.jpg.asset.json";
import { url as marajoara } from "@/assets/arte-9ano/u1-marajoara.jpg.asset.json";
import { url as tenisHibrido } from "@/assets/arte-9ano/u1-tenis-hibrido.jpg.asset.json";
import { url as celloEletronico } from "@/assets/arte-9ano/u1-cello-eletronico.jpg.asset.json";
import { url as mascara } from "@/assets/arte-9ano/u1-mascara.jpg.asset.json";
import { url as texturaUrbana } from "@/assets/arte-9ano/u1-textura-urbana.jpg.asset.json";
import { url as pixels } from "@/assets/arte-9ano/u1-pixels.jpg.asset.json";
import { url as caldeirao } from "@/assets/arte-9ano/u1-caldeirao.jpg.asset.json";
import { url as pratoHibrido } from "@/assets/arte-9ano/u1-prato-hibrido.jpg.asset.json";
import { url as artistaJovem } from "@/assets/arte-9ano/u1-artista-jovem.jpg.asset.json";

/**
 * Arte · 9º Ano · Unidade 1 · Aula 01
 * "Hibridismo Cultural e a Desconstrução de Fronteiras na Arte"
 * Metanarrativa: 🌐 Cosmopolitismo, Hibridismo e a Estética das Fronteiras.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-hibridismo-cultural",
  titulo: "Hibridismo Cultural e a Desconstrução de Fronteiras",
  iconeTrilha: "🌐",
  bncc: ["EF69AR01", "EF69AR04", "EF69AR05", "EF69AR31"],
  duracaoMin: 38,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Pensador Visual, chegamos ao último nível do Códice! No lugar das telas isoladas, veja uma TEIA gigantesca onde grafismos indígenas, batidas de hip-hop, mármore clássico e projeções de satélite se cruzam ao mesmo tempo. Bem-vindo ao Hibridismo Cultural. Toca em cada pista pra abrir o Portal das Confluências.",
    titulo: "🌐 O Despertar da Teia Cultural",
    instrucao: "Toca em cada pista pra ativar o Portal das Confluências",
    itens: [
      { emoji: "🌐", rotulo: "Hibridismo na Arte", descricao: "Mistura intencional de linguagens (pintura + performance + som) ou fusão de elementos de culturas distintas numa mesma obra, gerando um significado novo.", cor: "#0891b2", fotoUrl: hibridismo },
      { emoji: "🏛️", rotulo: "Descolonização Curatorial", descricao: "Movimento que RETIRA os padrões europeus e norte-americanos como únicos 'corretos' e integra produções indígenas, afro-diaspóricas e de povos historicamente marginalizados.", cor: "#dc2626", fotoUrl: bienal },
      { emoji: "✨", rotulo: "Sincretismo Visual", descricao: "União de símbolos, rituais e iconografias de culturas diferentes fundidos numa nova expressão estética.", cor: "#7c3aed", fotoUrl: sincretismo },
      { emoji: "🧱", rotulo: "Varal de Azulejos (Adriana Varejão)", descricao: "Painéis grossos que imitam azulejaria portuguesa tradicional, RACHADOS e cortados, revelando por baixo uma 'carne' orgânica fictícia: denúncia da mistura violenta de culturas no Brasil colonial.", cor: "#f97316", fotoUrl: varejao },
    ],
    falaFinal: "Sua missão: virar Pensador Visual e Curador Crítico — cruzar heranças ancestrais e linguagens globais numa mesma obra.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de curador crítico antes de entrar na Bienal.",
    perguntas: [
      {
        pergunta: "Uma artista brasileira pinta painéis que imitam AZULEJARIA portuguesa e depois faz cortes profundos, revelando uma 'carne' vermelha por baixo. Qual é a mensagem?",
        fotoUrl: varejao,
        alternativas: [
          { texto: "A azulejaria colonial esconde uma HISTÓRIA DE DOR e mistura violenta de culturas — o corte revela essa marca", correta: true },
          { texto: "É apenas uma experimentação técnica com massa acrílica, sem crítica histórica", correta: false },
        ],
        feedbackAcerto: "Perfeito! A obra denuncia o passado colonial e o hibridismo violento da formação do Brasil.",
        feedbackErro: "Cuidado: arte contemporânea NUNCA é só técnica. O corte fala da ferida colonial.",
      },
      {
        pergunta: "Uma bienal internacional expõe, LADO A LADO, obras europeias, indígenas amazônicas, africanas e asiáticas — com o MESMO peso curatorial. Que movimento isso representa?",
        fotoUrl: bienal,
        alternativas: [
          { texto: "Descolonização Curatorial — retira o padrão europeu como único 'correto'", correta: true },
          { texto: "Universalismo Renascentista — só valem as regras clássicas europeias", correta: false },
        ],
        feedbackAcerto: "Isso! A curadoria descolonial redistribui o poder de decidir o que é arte legítima.",
        feedbackErro: "O Renascimento centrava tudo na Europa. Aqui é o OPOSTO — vozes plurais no mesmo palco.",
      },
      {
        pergunta: "Um artista cruza um VIOLONCELO clássico com uma batida eletrônica de funk/trap. Que princípio ele aciona?",
        fotoUrl: celloEletronico,
        alternativas: [
          { texto: "Hibridismo — o contraste entre matrizes gera automaticamente uma nova mensagem estética", correta: true },
          { texto: "Purismo musical — instrumentos de culturas diferentes NUNCA devem se misturar", correta: false },
        ],
        feedbackAcerto: "Exato! A justaposição de matrizes é o motor do hibridismo contemporâneo.",
        feedbackErro: "O purismo é o que o hibridismo COMBATE. A mistura é a mensagem.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do Pensador Visual. Toca em cada verbete.",
    cards: [
      { termo: "Hibridismo na Arte", definicao: "Mistura intencional de linguagens artísticas (pintura + performance + som) ou fusão de elementos culturais distintos numa mesma obra, gerando novo significado.", emoji: "🌐", cor: "#0891b2", fotoUrl: hibridismo },
      { termo: "Descolonização Curatorial", definicao: "Movimento que retira os padrões europeus/norte-americanos como únicos legítimos e integra produções indígenas, afro-diaspóricas e de povos marginalizados.", emoji: "🏛️", cor: "#dc2626", fotoUrl: bienal },
      { termo: "Sincretismo Visual", definicao: "União de símbolos, rituais e iconografias religiosas/culturais diferentes fundidos numa nova expressão estética hibridizada.", emoji: "✨", cor: "#7c3aed", fotoUrl: sincretismo },
      { termo: "Justaposição Crítica", definicao: "Colocar lado a lado matrizes opostas (mármore + palha, cello + trap) pra que o CONTRASTE em si gere a mensagem da obra.", emoji: "🧩", cor: "#f97316", fotoUrl: colagemGrega },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a arte do século XXI derrubou as fronteiras entre culturas e mídias.",
    paragrafos: [
      "No 8º ano você usou o corpo como suporte digital. Agora, no 9º, damos o passo final: a arte contemporânea deixa de pertencer a UMA gaveta (uma técnica, um país, uma cultura) e vira uma TEIA global. Isso se chama HIBRIDISMO CULTURAL.",
      "Hibridismo é a mistura INTENCIONAL de linguagens (pintura + performance + som + código) ou de culturas (indígena + europeia + afro-diaspórica + oriental) numa mesma obra. O objetivo não é decorar — é gerar um SIGNIFICADO NOVO que nenhuma matriz sozinha daria conta.",
      "A artista brasileira Adriana Varejão, em 'Varal de Azulejos', pinta painéis grossos que imitam a azulejaria portuguesa tradicional. Em seguida, RACHA a superfície e revela por baixo uma 'carne' orgânica fictícia. A obra denuncia a mistura VIOLENTA do Brasil colonial: a beleza europeia por cima, a dor sob a pele.",
      "Nas bienais internacionais isso se traduz em DESCOLONIZAÇÃO CURATORIAL: obras indígenas, africanas, asiáticas e afro-diaspóricas passam a ocupar o mesmo espaço e o mesmo peso das obras europeias. Não são mais 'exotismo' na sala do fundo — são protagonistas.",
      "Uma variação disso é o SINCRETISMO VISUAL: símbolos religiosos e culturais diferentes se fundem em uma única expressão estética. Um mesmo altar pode reunir cruz, iconografia afro-brasileira e plumas indígenas — e a mistura é justamente a mensagem sobre a identidade híbrida do povo.",
      "Cosmopolitismo, hibridismo, descolonização, sincretismo: são as chaves com que o pensador visual de 2026 lê o mundo. A arte deixa de ser um objeto isolado e vira um mapa de identidades cruzadas.",
    ],
    pigmentos: [
      { nome: "Hibridismo", hex: "#0891b2", fonte: "Mistura de linguagens e culturas", emoji: "🌐", fotoUrl: hibridismo },
      { nome: "Descolonização", hex: "#dc2626", fonte: "Fim do padrão único europeu", emoji: "🏛️", fotoUrl: bienal },
      { nome: "Sincretismo", hex: "#7c3aed", fonte: "Fusão de símbolos culturais", emoji: "✨", fotoUrl: sincretismo },
      { nome: "Varejão", hex: "#f97316", fonte: "Azulejo rachado revelando 'carne'", emoji: "🧱", fotoUrl: varejao },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do curador crítico!",
    perguntas: [
      {
        pergunta: "Qual é o objetivo CENTRAL do hibridismo cultural na arte contemporânea?",
        fotoUrl: hibridismo,
        alternativas: [
          { texto: "Criar um SIGNIFICADO NOVO cruzando linguagens ou culturas que sozinhas não dariam conta", correta: true },
          { texto: "Provar que uma única cultura (europeia) é superior às outras", correta: false },
        ],
        feedbackAcerto: "Correto! A mistura gera uma leitura de mundo que nenhuma matriz isolada oferece.",
        feedbackErro: "Isso é o OPOSTO do hibridismo. O hibridismo horizontaliza as culturas.",
      },
      {
        pergunta: "O que define a Descolonização Curatorial numa grande bienal internacional?",
        fotoUrl: bienal,
        alternativas: [
          { texto: "Dar o mesmo espaço e peso a obras indígenas, africanas e asiáticas — retirando o padrão único europeu", correta: true },
          { texto: "Expor SOMENTE obras europeias e americanas, consideradas as únicas 'de nível'", correta: false },
        ],
        feedbackAcerto: "Isso! É a redistribuição do poder de decidir o que é arte legítima.",
        feedbackErro: "Esse era o modelo antigo. A descolonização quebra exatamente essa hierarquia.",
      },
      {
        pergunta: "O corte que revela 'carne' vermelha em 'Varal de Azulejos' de Adriana Varejão fala principalmente de quê?",
        fotoUrl: varejao,
        alternativas: [
          { texto: "Da FERIDA e da mistura violenta de culturas no passado colonial brasileiro", correta: true },
          { texto: "Apenas de uma escolha decorativa aleatória, sem crítica histórica", correta: false },
        ],
        feedbackAcerto: "Perfeito! A azulejaria é a pele europeia; a carne por baixo é a dor colonial.",
        feedbackErro: "Nenhum gesto em arte contemporânea é aleatório. Aqui o corte é DENÚNCIA.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada obra pela CATEGORIA da arte contemporânea que ela usa!",
    animais: [
      {
        nome: "Azulejo rachado com 'carne' por baixo", emoji: "🧱", fotoUrl: varejao,
        corAlvo: { nome: "Descolonização + Hibridismo", hex: "#f97316" },
        opcoes: [
          { nome: "Descolonização + Hibridismo", hex: "#f97316" },
          { nome: "Pintura Acadêmica", hex: "#78716c" },
          { nome: "Cultura Maker", hex: "#16a34a" },
        ],
        falaAcerto: "Isso! Varejão denuncia o passado colonial cruzando azulejo europeu e 'carne' orgânica.",
      },
      {
        nome: "Mármore grego envolvido em palha indígena", emoji: "🌾", fotoUrl: colagemGrega,
        corAlvo: { nome: "Justaposição Híbrida", hex: "#0891b2" },
        opcoes: [
          { nome: "Justaposição Híbrida", hex: "#0891b2" },
          { nome: "Wearable Art", hex: "#7c3aed" },
          { nome: "Pintura de Cavalete", hex: "#78716c" },
        ],
        falaAcerto: "Correto! Matriz europeia + matriz nativa lado a lado = hibridismo por justaposição.",
      },
      {
        nome: "Altar com cruz, símbolos afro e plumas indígenas", emoji: "✨", fotoUrl: sincretismo,
        corAlvo: { nome: "Sincretismo Visual", hex: "#7c3aed" },
        opcoes: [
          { nome: "Sincretismo Visual", hex: "#7c3aed" },
          { nome: "Descolonização", hex: "#dc2626" },
          { nome: "Performance", hex: "#dc2626" },
        ],
        falaAcerto: "Perfeito! Fusão de iconografias religiosas = sincretismo.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra criar o SEU projeto Artista Intercultural.",
    passos: [
      { id: "p1", texto: "Escolho um OBJETO cotidiano globalizado (tênis, celular, lata de refrigerante) e desenho o contorno no caderno", emoji: "👟", ordem: 1, fotoUrl: tenisHibrido },
      { id: "p2", texto: "Seleciono UMA matriz ancestral: grafismo marajoara, estampa Kente africana ou grafismo oriental", emoji: "🌍", ordem: 2, fotoUrl: kente },
      { id: "p3", texto: "PREENCHO o interior do objeto inteiro com o padrão geométrico ancestral escolhido", emoji: "🎨", ordem: 3, fotoUrl: marajoara },
      { id: "p4", texto: "Escrevo 3 linhas explicando como o desenho CONECTA o passado ancestral ao mundo globalizado atual", emoji: "✍️", ordem: 4, fotoUrl: artistaJovem },
      { id: "p5", texto: "Dou um TÍTULO à obra e assino como 'Artista Intercultural' — projeto híbrido pronto!", emoji: "🏷️", ordem: 5, fotoUrl: hibridismo },
    ],
    falaAcerto: "Você acabou de criar seu primeiro projeto de Arte Intercultural — pensador visual online!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do pensador visual. Toca nas palavras coloridas.",
    titulo: "Diário do Pensador Visual",
    trechos: [
      { texto: "Sou pensador visual. Minha ferramenta principal é o", palavraDestaque: "hibridismo cultural", corDestaque: "#0891b2" },
      { texto: "Quando cruzo matrizes de culturas diferentes numa obra, aciono a", palavraDestaque: "justaposição crítica", corDestaque: "#f97316" },
      { texto: "Se retiro o padrão europeu como único legítimo, pratico a", palavraDestaque: "descolonização curatorial", corDestaque: "#dc2626" },
      { texto: "Quando fundo símbolos religiosos ou rituais em uma nova estética, faço", palavraDestaque: "sincretismo visual", corDestaque: "#7c3aed" },
      { texto: "Assim, cada obra vira um mapa de identidades cruzadas — sou", palavraDestaque: "curador crítico", corDestaque: "#0f766e" },
      { texto: "do meu tempo, com o mundo inteiro no meu caderno." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🧪 O Alquimista de Mídias! Arrasta os elementos culturais pro caldeirão e combina de forma equilibrada pra gerar uma obra híbrida ESTÁVEL.",
    titulo: "🧪 O Alquimista de Mídias",
    instrucao: "Combina máscaras tradicionais, texturas urbanas e pixels digitais dentro do caldeirão!",
    tempoSeg: 45,
    itens: [
      { emoji: "🎭", rotulo: "Máscara ancestral (matriz tradicional)", cor: "#78350f", fotoUrl: mascara },
      { emoji: "🧵", rotulo: "Estampa Kente africana", cor: "#f59e0b", fotoUrl: kente },
      { emoji: "🏺", rotulo: "Grafismo marajoara", cor: "#b91c1c", fotoUrl: marajoara },
      { emoji: "🧱", rotulo: "Textura urbana / graffiti", cor: "#0f172a", fotoUrl: texturaUrbana },
      { emoji: "🟪", rotulo: "Pixels digitais", cor: "#7c3aed", fotoUrl: pixels },
      { emoji: "🪔", rotulo: "Caldeirão da fusão", cor: "#0891b2", fotoUrl: caldeirao },
    ],
    falaFinal: "Fusão estável! Você criou uma nova obra híbrida sem apagar nenhuma das matrizes.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o Portal das Confluências. Toca em cada verbete pra consolidar.",
    titulo: "🌐 Caderno do Pensador Visual",
    itens: [
      { emoji: "🌐", rotulo: "Hibridismo Cultural", descricao: "Mistura intencional de linguagens e culturas numa mesma obra pra gerar um significado novo.", cor: "#0891b2", fotoUrl: hibridismo },
      { emoji: "🏛️", rotulo: "Descolonização Curatorial", descricao: "Fim do padrão único europeu — obras indígenas, africanas e asiáticas ocupam o mesmo peso curatorial.", cor: "#dc2626", fotoUrl: bienal },
      { emoji: "✨", rotulo: "Sincretismo Visual", descricao: "Fusão de símbolos religiosos e culturais diferentes numa nova expressão estética.", cor: "#7c3aed", fotoUrl: sincretismo },
      { emoji: "🧱", rotulo: "Adriana Varejão", descricao: "Painéis de azulejaria portuguesa rachados que revelam 'carne' orgânica — denúncia do passado colonial brasileiro.", cor: "#f97316", fotoUrl: varejao },
      { emoji: "🧩", rotulo: "Justaposição Crítica", descricao: "Colocar matrizes opostas lado a lado (cello + trap, mármore + palha) pra que o contraste seja a mensagem.", cor: "#0f766e", fotoUrl: celloEletronico },
      { emoji: "👟", rotulo: "Arte Intercultural", descricao: "Projeto híbrido que preenche um objeto globalizado com padrões ancestrais (marajoara, Kente, oriental).", cor: "#b45309", fotoUrl: tenisHibrido },
    ],
    falaFinal: "Portal das Confluências ATIVADO — primeira página do Códice dos Cosmopolitismos aberta!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, pensador visual!",
    quiz: {
      pergunta: "O que MELHOR define o conceito de 'Hibridismo' na produção de arte do mundo contemporâneo?",
      alternativas: [
        { texto: "A mistura livre de diferentes mídias, técnicas, materiais e referências culturais que rompe com as barreiras tradicionais da arte", correta: true },
        { texto: "A obrigação de pintar quadros utilizando apenas uma única cor de tinta do início ao fim", correta: false },
      ],
      feedback: "Espetacular! O HIBRIDISMO reflete a nossa própria sociedade globalizada, onde identidades se cruzam e se transformam constantemente. Ele rompe fronteiras entre mídias (pintura + performance + som + código) e entre culturas (indígena + europeia + afro-diaspórica + oriental), criando obras que geram um significado novo — impossível de ser dito por uma única matriz isolada. Adriana Varejão, com 'Varal de Azulejos', é o exemplo perfeito: ao rachar a azulejaria portuguesa e revelar a 'carne' por baixo, ela denuncia a mistura violenta que forjou o Brasil.",
    },
    missaoFamilia:
      "📸 Inventário Híbrido da Casa: com a família, procurem OBJETOS que mostrem mistura de culturas — um prato que une ingredientes de países diferentes, uma música com ritmos misturados, um objeto de decoração com influências diversas. Fotografem 3 itens, gravem um áudio de 30s explicando como cada um representa o hibridismo cultural, e discutam como a HISTÓRIA da sua própria família também é híbrida. Mande pro álbum!",
    recompensaTitulo: "🌐 Portal das Confluências Culturais Mundiais RESTAURADO.",
    recompensaItem: "🖌️ Pincel de Fusão Intercultural + 🔍 Lente de Matriz Híbrida",
  },

  recompensa: { xp: 140, moedas: 70, medalha: "Pincel de Fusão Intercultural" },
};
