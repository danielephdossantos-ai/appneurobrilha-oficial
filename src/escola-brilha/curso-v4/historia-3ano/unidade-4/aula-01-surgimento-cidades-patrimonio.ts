import type { AulaGeoV1 } from "../../types";
import { url as imgCentroHistorico } from "@/assets/historia-3ano/centro-historico.jpg.asset.json";
import { url as imgCasarao } from "@/assets/historia-3ano/casarao-tombado.jpg.asset.json";
import { url as imgMonumento } from "@/assets/historia-3ano/monumento-bronze.jpg.asset.json";
import { url as imgFestaFolclorica } from "@/assets/historia-3ano/festa-folclorica.jpg.asset.json";
import { url as imgComidaTipica } from "@/assets/historia-3ano/comida-tipica.jpg.asset.json";
import { url as imgInfografico } from "@/assets/historia-3ano/infografico-patrimonio.jpg.asset.json";
import { url as imgLinhaTempo } from "@/assets/historia-3ano/linha-tempo-municipio.jpg.asset.json";
import { url as imgLivro } from "@/assets/historia-3ano/livro-cidades.jpg.asset.json";
/**
 * História · 3º Ano · Unidade 4 · Aula 01
 * "O Surgimento das Cidades e o Patrimônio"
 * Restaura a Página 4 do Grande Livro das Cidades: A Linha do Tempo das Cidades.
 * Visual: fotografia real de patrimônio + infográfico técnico.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-surgimento-cidades-patrimonio",
  titulo: "O Surgimento das Cidades e o Patrimônio",
  iconeTrilha: "🏛️",
  bncc: ["EF03HI07", "EF03HI08"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre esta fotografia do centro histórico. Você está vendo casarões coloridos com MAIS DE 200 ANOS de idade — protegidos por lei pra nunca serem destruídos.",
    mapaUrl: imgCentroHistorico,
    imagemDestaqueUrl: imgInfografico,
    aurora:
      "Pequeno Historiador, essas casas coloridas viram gerações inteiras nascerem e morrerem. Se alguém tentar derrubá-las pra construir um shopping, é PROIBIDO. Por que a cidade protege prédios tão antigos em vez de modernizar tudo?",
    falaFinal:
      "A resposta se chama PATRIMÔNIO HISTÓRICO: são bens que guardam a MEMÓRIA da comunidade. Sem eles, o passado da cidade desaparece pra sempre.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes da explicação, palpite de investigador. Quando a prefeitura proíbe derrubar um casarão antigo, qual é o motivo principal?",
    pergunta: "Por que preservar prédios antigos?",
    fotoUrl: imgCasarao,
    opcoes: [
      {
        id: "memoria",
        titulo: "Guardar a memória",
        subtitulo: "história da cidade pras próximas gerações",
        emoji: "📜",
        cor: "from-teal-600 to-emerald-800",
        fotoUrl: imgCentroHistorico,
      },
      {
        id: "estetica",
        titulo: "Só porque é bonito",
        subtitulo: "questão de decoração da rua",
        emoji: "🎨",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgMonumento,
      },
    ],
    respostaCerta: "memoria",
    feedbackAcerto:
      "Correto. Não é decoração — é MEMÓRIA. Um casarão tombado conta como as pessoas viveram, o que construíam e como pensavam há 200 anos.",
    feedbackErro:
      "A beleza é só um efeito. O motivo real é PRESERVAR A MEMÓRIA da fundação da cidade. Sem esse prédio, o passado se perde.",
    falaFinal:
      "Guarde a regra: patrimônio protegido = memória preservada. É por isso que existe uma lei chamada TOMBAMENTO.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três palavras técnicas fundamentais quando o historiador estuda o passado das cidades. Cada caderno já está aberto com foto real e definição.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "material",
        capa: "Patrimônio Material",
        emoji: "🏛️",
        cor: "from-teal-600 to-emerald-800",
        fotoUrl: imgCasarao,
        conteudo:
          "PATRIMÔNIO MATERIAL é tudo que se pode TOCAR: prédios, monumentos, igrejas, praças, ruas de pedra, objetos de museu. É protegido por lei — ninguém pode derrubar ou alterar sem autorização oficial.",
        exemplo: "Exemplo: o CASARÃO TOMBADO da praça central. A fachada amarela não pode ser mudada.",
      },
      {
        id: "imaterial",
        capa: "Patrimônio Imaterial",
        emoji: "🎭",
        cor: "from-orange-500 to-red-700",
        fotoUrl: imgFestaFolclorica,
        conteudo:
          "PATRIMÔNIO IMATERIAL é o que NÃO se pega com a mão: festas, danças, músicas, receitas de comida, lendas, saberes passados de avó pra neto. Também é protegido — como parte viva da cultura.",
        exemplo: "Exemplo: a FESTA JUNINA e a receita do PÃO DE QUEIJO. Ninguém tomba um prédio — se tomba um jeito de fazer.",
      },
      {
        id: "tombamento",
        capa: "Tombamento",
        emoji: "📜",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgMonumento,
        conteudo:
          "TOMBAMENTO é a LEI que protege um patrimônio. Uma vez tombado, o bem entra num livro oficial (Livro do Tombo) e não pode ser destruído nem modificado sem autorização. Existe tombamento municipal, estadual e federal.",
        exemplo: "Exemplo: a cidade de OURO PRETO tem o centro histórico inteiro tombado pela UNESCO.",
      },
    ],
    falaFinal:
      "Material, Imaterial e Tombamento: o vocabulário técnico do patrimônio histórico. Vamos usar essas três palavras o tempo inteiro.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é um centro histórico brasileiro. Toque em cada ponto pra eu explicar por que aquele elemento é considerado patrimônio da cidade.",
    instrucao: "Toque em cada ponto do centro histórico pra ouvir a explicação",
    mapaUrl: imgCentroHistorico,
    pontos: [
      {
        id: "igreja",
        x: 50,
        y: 30,
        emoji: "⛪",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgCentroHistorico,
        titulo: "1. IGREJA colonial — patrimônio material",
        texto:
          "Torre branca do século XVIII. Foi o primeiro prédio de alvenaria da cidade. Está tombada — nem a cruz pode ser removida sem autorização.",
      },
      {
        id: "casaroes",
        x: 20,
        y: 60,
        emoji: "🏛️",
        cor: "from-teal-600 to-emerald-800",
        fotoUrl: imgCasarao,
        titulo: "2. CASARÕES coloridos — patrimônio material",
        texto:
          "Fachadas amarela, verde e vermelha originais do século XIX. As cores foram exigência da coroa portuguesa. Cada casarão tem uma placa de bronze com data de tombamento.",
      },
      {
        id: "rua",
        x: 50,
        y: 85,
        emoji: "🛤️",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgCentroHistorico,
        titulo: "3. RUA de pedra portuguesa",
        texto:
          "Calçamento feito à mão com pedras irregulares (paralelepípedo). Uma prefeitura moderna gostaria de asfaltar por cima — mas a lei do tombamento proíbe. Faz parte do conjunto histórico.",
      },
      {
        id: "praca",
        x: 80,
        y: 65,
        emoji: "🌳",
        cor: "from-green-600 to-emerald-800",
        fotoUrl: imgMonumento,
        titulo: "4. PRAÇA central com monumento",
        texto:
          "Ponto de encontro desde a fundação. Ali fica o monumento de bronze do fundador da cidade. A praça, o monumento e as árvores centenárias formam UM CONJUNTO tombado.",
      },
    ],
    falaFinal:
      "Igreja, casarões, rua de pedra e praça: quatro elementos, um só CONJUNTO HISTÓRICO. É a alma antiga da cidade — preservada por lei.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Três perguntas de verificação. Cada uma testa se você classifica corretamente um bem cultural.",
    instrucao: "Toque no card correto pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "A receita tradicional do doce de leite da vovó é o quê?",
        fotoUrl: imgComidaTipica,
        cards: [
          { id: "ma", emoji: "🏛️", titulo: "Patrimônio Material", cor: "from-teal-600 to-emerald-800" },
          { id: "im", emoji: "🎭", titulo: "Patrimônio Imaterial", cor: "from-orange-500 to-red-700" },
        ],
        correta: "im",
        feedbackAcerto:
          "Correto. Uma receita é um SABER — não se pega com a mão. É patrimônio IMATERIAL, protegido como cultura viva.",
        feedbackErro:
          "Receita não é um prédio. É um SABER passado de geração em geração — IMATERIAL.",
      },
      {
        id: "q2",
        pergunta: "O prédio da antiga estação de trem de 1890 é o quê?",
        fotoUrl: imgCasarao,
        cards: [
          { id: "ma", emoji: "🏛️", titulo: "Patrimônio Material", cor: "from-teal-600 to-emerald-800" },
          { id: "im", emoji: "🎭", titulo: "Patrimônio Imaterial", cor: "from-orange-500 to-red-700" },
        ],
        correta: "ma",
        feedbackAcerto:
          "Exato. Prédio se toca, se fotografa, ocupa espaço. É patrimônio MATERIAL, protegido pelo tombamento.",
        feedbackErro:
          "Prédio é físico — se pega com a mão. É MATERIAL.",
      },
      {
        id: "q3",
        pergunta: "Qual é o nome da LEI que protege um casarão histórico de ser derrubado?",
        fotoUrl: imgMonumento,
        cards: [
          { id: "to", emoji: "📜", titulo: "Tombamento", cor: "from-slate-600 to-slate-800" },
          { id: "mu", emoji: "🚧", titulo: "Multa de trânsito", cor: "from-red-500 to-red-700" },
        ],
        correta: "to",
        feedbackAcerto:
          "Certeza. TOMBAMENTO é o registro oficial que impede a destruição do bem histórico.",
        feedbackErro:
          "Multa de trânsito é outra coisa. A lei do patrimônio se chama TOMBAMENTO.",
      },
    ],
    falaFinal:
      "Radar afinado. Você classifica material x imaterial e reconhece o tombamento como a lei que protege.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou ativar dois interruptores em cima do infográfico do patrimônio: um destaca o PATRIMÔNIO MATERIAL (prédios), outro destaca o PATRIMÔNIO IMATERIAL (festas e saberes). Veja como cada um preserva a memória de um jeito diferente.",
    instrucao: "Toque nos interruptores pra ver cada tipo de patrimônio",
    mapaUrl: imgInfografico,
    camadas: [
      {
        id: "material",
        rotulo: "Material",
        emoji: "🏛️",
        cor: "from-teal-600 to-emerald-800",
        rect: { x: 0, y: 0, w: 50, h: 100 },
        descricao:
          "PATRIMÔNIO MATERIAL: casarões, igrejas, monumentos, ruas de pedra, objetos de museu. Bens FÍSICOS protegidos pelo tombamento. Sem eles, a cidade perde suas raízes visuais.",
      },
      {
        id: "imaterial",
        rotulo: "Imaterial",
        emoji: "🎭",
        cor: "from-orange-500 to-red-700",
        rect: { x: 50, y: 0, w: 50, h: 100 },
        descricao:
          "PATRIMÔNIO IMATERIAL: festas, danças, receitas, cantigas, lendas, saberes tradicionais. Bens VIVOS protegidos pelo registro. Sem eles, a cidade perde sua alma cultural.",
      },
    ],
    falaFinal:
      "Dois interruptores, uma só verdade: a cidade vive de PRÉDIOS antigos E de CULTURAS antigas. Preservar os dois é dever de todos.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos rastrear a evolução histórica de uma cidade brasileira. Organize as 4 fases da fundação ao presente.",
    instrucao: "Toque nas etapas na ordem certa (do início ao fim)",
    pergunta: "Como uma cidade brasileira típica surgiu?",
    paradas: [
      {
        id: "fundacao",
        emoji: "⛪",
        rotulo: "1. Fundação (séc. XVI-XVII)",
        fotoUrl: imgCentroHistorico,
        descricao:
          "Etapa 1: portugueses fundam vila em torno de uma igreja, um forte militar ou um rio. Casas de taipa, ruas de terra, poucas centenas de moradores.",
      },
      {
        id: "colonial",
        emoji: "🏛️",
        rotulo: "2. Cidade Colonial (séc. XVIII)",
        fotoUrl: imgCasarao,
        descricao:
          "Etapa 2: casarões de alvenaria pintados de cores vivas, praça central, câmara municipal. Nasce o CONJUNTO HISTÓRICO que hoje é tombado.",
      },
      {
        id: "imperio",
        emoji: "🗿",
        rotulo: "3. Império / República (séc. XIX)",
        fotoUrl: imgMonumento,
        descricao:
          "Etapa 3: chegam monumentos de bronze homenageando fundadores e heróis. As ruas ganham calçamento de pedra portuguesa. A cidade se torna referência regional.",
      },
      {
        id: "moderno",
        emoji: "🏙️",
        rotulo: "4. Cidade Moderna (séc. XX-XXI)",
        fotoUrl: imgInfografico,
        descricao:
          "Etapa 4: a cidade cresce em bairros novos com prédios e avenidas. O centro antigo é PROTEGIDO por lei — modernidade e patrimônio convivem lado a lado.",
      },
    ],
    ordemCerta: ["fundacao", "colonial", "imperio", "moderno"],
    feedbackAcerto:
      "Linha do tempo perfeita. Fundação → Colonial → Império → Moderno. Cada fase deixou marcas físicas que hoje são patrimônio.",
    feedbackErro:
      "Essa não é a próxima fase. Pense: o que veio ANTES dos casarões? E o que só existe no século XX?",
    falaFinal:
      "Você acabou de mapear 500 ANOS DE HISTÓRIA URBANA. É assim que historiadores estudam a formação de uma cidade.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Silêncio agora. Leia a Página 4 do Grande Livro das Cidades com seus próprios olhos e toque nas palavras destacadas quando quiser a definição.",
    tituloLivro: "📜 O Grande Livro das Cidades",
    subtitulo: "Página 4 — A Linha do Tempo das Cidades",
    paragrafos: [
      {
        id: "p1",
        texto:
          "As cidades brasileiras não surgiram do nada. Elas nasceram ao redor de RECURSOS NATURAIS (como rios) ou de ROTAS DE COMÉRCIO. A primeira construção costumava ser uma igreja ou um forte militar. Ao redor deles, casas de taipa foram sendo erguidas.",
        chaves: ["recursos naturais", "rotas de comércio"],
        definicoes: {
          "recursos naturais":
            "Elementos do ambiente (rio, mata, minério) que atraem gente pra viver e trabalhar num lugar.",
          "rotas de comércio":
            "Caminhos por onde mercadorias circulavam entre regiões, atraindo comerciantes, tropeiros e viajantes.",
        },
        fotoUrl: imgCentroHistorico,
      },
      {
        id: "p2",
        texto:
          "Com o tempo, essas vilas viraram cidades. Casarões coloniais foram construídos, praças foram criadas, monumentos de bronze foram erguidos. Chamamos essas construções antigas de PATRIMÔNIO MATERIAL — bens físicos que a cidade protege como sua memória.",
        chaves: ["patrimônio material"],
        definicoes: {
          "patrimônio material":
            "Bens FÍSICOS (prédios, monumentos, objetos) que se pode tocar e que são protegidos por lei porque contam a história da comunidade.",
        },
        fotoUrl: imgCasarao,
      },
      {
        id: "p3",
        texto:
          "Mas nem tudo o que a cidade preserva é feito de pedra. Festas juninas, receitas típicas, lendas locais e cantigas tradicionais formam o PATRIMÔNIO IMATERIAL — bens que vivem na MEMÓRIA e na PRÁTICA das pessoas, passados de geração em geração.",
        chaves: ["patrimônio imaterial"],
        definicoes: {
          "patrimônio imaterial":
            "Bens CULTURAIS (festas, danças, receitas, lendas) que não se pega com a mão, mas fazem parte da identidade do povo.",
        },
        fotoUrl: imgFestaFolclorica,
      },
      {
        id: "p4",
        texto:
          "Uma lei chamada TOMBAMENTO garante que nem casarões antigos nem festas tradicionais desapareçam. Uma vez tombado, o bem entra no Livro do Tombo e ninguém pode destruir. Cada município tem seus patrimônios; cidades como Ouro Preto e Salvador têm centros tombados pela UNESCO.",
        chaves: ["tombamento"],
        definicoes: {
          tombamento:
            "Ato oficial que protege um bem cultural por lei, impedindo sua destruição ou modificação sem autorização.",
        },
        fotoUrl: imgMonumento,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com suas próprias palavras, por que a cidade protege seu passado com tanto cuidado.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão do defensor do patrimônio. Cada rodada mostra um bem cultural. Você tem que classificar rápido: é MATERIAL (físico), é IMATERIAL (cultural) ou é uma AMEAÇA que precisa ser barrada?",
    instrucao: "⏱️ Leia a pista e toque na classificação correta antes do tempo acabar",
    duracaoSegundos: 20,
    pecas: [
      { id: "ma", emoji: "🏛️", rotulo: "Material" },
      { id: "im", emoji: "🎭", rotulo: "Imaterial" },
      { id: "am", emoji: "⚠️", rotulo: "Ameaça" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Festa Junina tradicional", emoji: "🎇", cor: "from-orange-500 to-red-700" },
        municipioB: { nome: "Quadrilha e comidas típicas", emoji: "🍿", cor: "from-yellow-500 to-orange-700" },
        contexto:
          "Praça enfeitada com bandeirolas, quadrilha dançando, pipoca e pé-de-moleque. Como classificamos?",
        pecaCertaId: "im",
        fotoUrl: imgFestaFolclorica,
        feedbackAcerto: "Correto. Festa é cultura viva = patrimônio IMATERIAL.",
        feedbackErro: "Festa não é prédio. É um SABER coletivo transmitido de geração em geração — IMATERIAL.",
      },
      {
        id: "r2",
        municipioA: { nome: "Casarão colonial de 1780", emoji: "🏛️", cor: "from-teal-600 to-emerald-800" },
        municipioB: { nome: "Fachada amarela tombada", emoji: "📜", cor: "from-emerald-500 to-teal-700" },
        contexto:
          "Prédio de dois andares com portas de madeira maciça, janelas coloniais e placa de bronze de tombamento. Como classificamos?",
        pecaCertaId: "ma",
        fotoUrl: imgCasarao,
        feedbackAcerto: "Correto. Prédio físico com tombamento = patrimônio MATERIAL.",
        feedbackErro: "Casarão se toca, se fotografa, ocupa lote de rua. É MATERIAL — protegido pelo tombamento.",
      },
      {
        id: "r3",
        municipioA: { nome: "Trator derrubando igreja de 1750", emoji: "🚜", cor: "from-red-600 to-red-800" },
        municipioB: { nome: "Obra sem autorização", emoji: "⚠️", cor: "from-orange-600 to-red-700" },
        contexto:
          "Máquina começa a derrubar uma igreja histórica sem alvará da prefeitura. O que fazer?",
        pecaCertaId: "am",
        fotoUrl: imgMonumento,
        feedbackAcerto: "Correto. É AMEAÇA — precisa ser barrada. Prédio tombado só pode ser mexido com autorização oficial.",
        feedbackErro: "Não é patrimônio pra ser protegido — é uma AMEAÇA ao patrimônio. Precisa ser barrada pela lei.",
      },
      {
        id: "r4",
        municipioA: { nome: "Receita centenária de pão de queijo", emoji: "🧀", cor: "from-yellow-500 to-orange-700" },
        municipioB: { nome: "Saber passado de vó pra neta", emoji: "👵", cor: "from-orange-500 to-amber-700" },
        contexto:
          "Receita anotada num caderno velho, ensinada há 4 gerações na mesma família mineira. Como classificamos?",
        pecaCertaId: "im",
        fotoUrl: imgComidaTipica,
        feedbackAcerto: "Correto. Receita é SABER cultural = patrimônio IMATERIAL.",
        feedbackErro: "Receita não é objeto — é conhecimento. É IMATERIAL, cultura viva da comunidade.",
      },
    ],
    falaFinal:
      "Missão concluída. Você classifica material, imaterial e reconhece ameaças ao patrimônio.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos fechar a aula com duas fatias. De um lado, o patrimônio MATERIAL. Do outro, o IMATERIAL. Toque em cada fatia pra revisar.",
    instrucao: "Toque nas fatias pra ouvir sobre cada tipo",
    fotoUrl: imgInfografico,
    fatias: [
      {
        id: "material",
        rotulo: "Material",
        emoji: "🏛️",
        percentual: 50,
        cor: "#0d9488",
        descricao:
          "Bens FÍSICOS protegidos pelo tombamento: casarões, igrejas, monumentos, praças, ruas de pedra, objetos de museu. Sem eles, a cidade perde suas raízes visuais.",
        exemplos: ["Casarão colonial", "Igreja histórica", "Monumento de bronze", "Rua de pedra portuguesa"],
        fotoUrl: imgCasarao,
      },
      {
        id: "imaterial",
        rotulo: "Imaterial",
        emoji: "🎭",
        percentual: 50,
        cor: "#c2410c",
        descricao:
          "Bens CULTURAIS protegidos pelo registro: festas, danças, músicas, receitas, lendas, saberes tradicionais. Sem eles, a cidade perde sua alma.",
        exemplos: ["Festa Junina", "Receita de pão de queijo", "Capoeira", "Lendas do folclore"],
        fotoUrl: imgFestaFolclorica,
      },
    ],
    falaFinal:
      "Duas fatias complementares. Material sem imaterial é ruína vazia. Imaterial sem material é lembrança sem palco. Juntos, formam a identidade da cidade.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última etapa: 3 perguntas de certificação. Se acertar, você restaura a quarta página do Grande Livro das Cidades e ganha a Medalha do Defensor do Patrimônio.",
    instrucao: "Responda as 3 perguntas de certificação",
    fotoUrl: imgLivro,
    perguntas: [
      {
        id: "q1",
        pergunta: "Como chamamos o conjunto de bens manifestados por festas, danças, músicas e receitas que fazem parte da cultura de um povo?",
        fotoUrl: imgFestaFolclorica,
        opcoes: [
          { id: "a", texto: "Patrimônio Imaterial.", correta: true },
          { id: "b", texto: "Patrimônio Financeiro." },
        ],
        feedbackAcerto:
          "Certificado. O patrimônio imaterial vive na memória e na prática cultural das pessoas.",
        feedbackErro:
          "Financeiro é sobre dinheiro. A resposta é IMATERIAL — cultura viva, festas, receitas, saberes.",
      },
      {
        id: "q2",
        pergunta: "Qual é o nome da lei oficial que protege um prédio histórico de ser derrubado ou modificado?",
        fotoUrl: imgCasarao,
        opcoes: [
          { id: "a", texto: "Tombamento.", correta: true },
          { id: "b", texto: "Reforma tributária." },
        ],
        feedbackAcerto:
          "Correto. Tombamento é o registro que garante a proteção legal do patrimônio material.",
        feedbackErro:
          "Reforma tributária é sobre impostos. A lei do patrimônio se chama TOMBAMENTO.",
      },
      {
        id: "q3",
        pergunta: "Uma prefeitura decide proibir que um casarão de 200 anos seja derrubado. Qual o principal motivo dessa decisão?",
        fotoUrl: imgCentroHistorico,
        opcoes: [
          { id: "a", texto: "Preservar a memória e a arquitetura da fundação da cidade.", correta: true },
          { id: "b", texto: "Porque o prédio é feio e ninguém gosta dele." },
        ],
        feedbackAcerto:
          "Certificação concluída. Preservar patrimônio é preservar a MEMÓRIA da comunidade pras próximas gerações.",
        feedbackErro:
          "Beleza é subjetiva. O motivo real é preservar a MEMÓRIA histórica da cidade.",
      },
    ],
    selo: {
      nome: "🏛️ Medalha do Defensor do Patrimônio",
      subtitulo: "Quarta página do Grande Livro das Cidades restaurada",
      emoji: "🏛️",
      cor: "from-teal-400 via-emerald-500 to-cyan-600",
      fotoUrl: imgLivro,
    },
    falaFinal:
      "Selo conquistado. A quarta página do Grande Livro das Cidades foi restaurada. Você agora entende como o passado da cidade é protegido no presente.",
  },

  recompensa: { xp: 200, moedas: 100, medalha: "Defensor do Patrimônio" },
};

export { imgLinhaTempo };
