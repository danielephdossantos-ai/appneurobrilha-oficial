import type { AulaArteV1 } from "../../types";
import stonehengeGeral from "@/assets/arte-6ano/u3m-stonehenge-geral.jpg";
import carnacAlinhamento from "@/assets/arte-6ano/u3m-carnac-alinhamento.jpg";
import trilito from "@/assets/arte-6ano/u3m-trilito.jpg";
import menir from "@/assets/arte-6ano/u3m-menir.jpg";
import dolmen from "@/assets/arte-6ano/u3m-dolmen.jpg";
import cromlech from "@/assets/arte-6ano/u3m-cromlech.jpg";
import solsticio from "@/assets/arte-6ano/u3m-solsticio.jpg";
import blocosConstrucao from "@/assets/arte-6ano/u3m-blocos-construcao.jpg";
import arqueologo from "@/assets/arte-6ano/u3m-arqueologo.jpg";
import nivelBolha from "@/assets/arte-6ano/u3m-nivel-bolha.jpg";
import prumo from "@/assets/arte-6ano/u3m-prumo.jpg";
import relogioSol from "@/assets/arte-6ano/u3m-relogio-sol.jpg";
import varaSombra from "@/assets/arte-6ano/u3m-vara-sombra.jpg";

/**
 * Arte · 6º Ano · Unidade 3 · Aula 01 — "A Geometria dos Monumentos"
 * Metanarrativa: 🧩 O Códice dos Impérios Perdidos
 * Fonte: Arquitetura megalítica — Stonehenge (Inglaterra) e Alinhamentos de Carnac (França)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-geometria-monumentos",
  titulo: "A Geometria dos Monumentos",
  iconeTrilha: "🗿",
  bncc: ["EF69AR04", "EF69AR05", "EF69AR31"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Investigador! Brilha abriu a TERCEIRA página do Códice e encontrou um círculo gigante de pedras erguidas em pé, na planície da Inglaterra. 'Aurora, como eles ergueram pedras de 25 toneladas SEM máquina nenhuma? E por que estão alinhadas com o sol?' Bem-vindo à Geometria Sagrada: quando arte, engenharia e astronomia viram a mesma coisa.",
    titulo: "🗿 O Círculo de Pedra",
    instrucao: "Toca em cada pista sobre os monumentos megalíticos",
    itens: [
      { emoji: "🪨", rotulo: "Stonehenge (Inglaterra)", descricao: "Círculo de pedras enormes erguido há cerca de 5 mil anos, sem cimento ou ferramentas de metal. Cada bloco pesa toneladas e foi transportado de dezenas de quilômetros.", cor: "#78716c", fotoUrl: stonehengeGeral },
      { emoji: "🧭", rotulo: "Alinhamentos de Carnac (França)", descricao: "Milhares de menires (pedras verticais) organizados em fileiras retas por quilômetros. Ninguém sabe o propósito exato, mas o alinhamento geométrico é perfeito.", cor: "#a8a29e", fotoUrl: carnacAlinhamento },
      { emoji: "☀️", rotulo: "Alinhamento com o solstício", descricao: "Em Stonehenge, no dia do solstício de verão, o sol nasce exatamente entre duas pedras específicas. O monumento funciona como um CALENDÁRIO astronômico de pedra.", cor: "#f59e0b", fotoUrl: solsticio },
      { emoji: "⚖️", rotulo: "Sistema trilítico", descricao: "Dois pilares verticais + uma viga horizontal por cima, encaixada por entalhes — sem cola, sem cimento. A física da gravidade é que segura tudo firme.", cor: "#dc2626", fotoUrl: trilito },
    ],
    falaFinal: "Sua missão nesta página: decifrar como a geometria transformou pedra bruta em espaço sagrado.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olhar de arquiteto megalítico antes de construir!",
    perguntas: [
      {
        pergunta: "Como os povos megalíticos conseguiam erguer pedras de várias toneladas SEM máquinas modernas?",
        fotoUrl: stonehengeGeral,
        alternativas: [
          { texto: "Usando cálculo, rampas, alavancas, cordas e MUITA gente trabalhando em equipe coordenada", correta: true },
          { texto: "Foi mágica, não existe explicação física para isso", correta: false },
        ],
        feedbackAcerto: "Exato! Engenharia coletiva: rampas de terra, troncos como roletes, alavancas e cordas — física pura aplicada com organização social.",
        feedbackErro: "Nada de mágica! Arqueólogos comprovaram: rampas, alavancas, roletes de madeira e centenas de pessoas coordenadas resolvem o problema com física.",
      },
      {
        pergunta: "O que é o SISTEMA TRILÍTICO usado em Stonehenge?",
        fotoUrl: trilito,
        alternativas: [
          { texto: "Dois pilares verticais sustentando uma viga horizontal encaixada por cima, como um portal", correta: true },
          { texto: "Três pedras empilhadas uma sobre a outra em linha reta", correta: false },
        ],
        feedbackAcerto: "Isso! Trilítico = três pedras: 2 de pé (pilares) + 1 deitada (viga/lintel) por cima, formando um arco retangular.",
        feedbackErro: "Não é empilhamento em linha. É uma estrutura de PORTAL: dois pilares verticais + uma viga horizontal encaixada no topo.",
      },
      {
        pergunta: "Por que Stonehenge é considerado também um instrumento ASTRONÔMICO?",
        fotoUrl: solsticio,
        alternativas: [
          { texto: "Porque suas pedras estão alinhadas para marcar o nascer do sol nos solstícios", correta: true },
          { texto: "Porque foi construído dentro de um observatório espacial", correta: false },
        ],
        feedbackAcerto: "Perfeito! O monumento marca com precisão os solstícios de verão e inverno — um calendário de pedra que organizava plantio, colheita e rituais.",
        feedbackErro: "Nada de observatório espacial! O alinhamento é geométrico e solar: as pedras marcam onde o sol nasce nos solstícios.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do arquiteto megalítico. Toca em cada verbete!",
    cards: [
      { termo: "Megalitismo", definicao: "Cultura pré-histórica que construiu monumentos com pedras enormes (mega = grande, lithos = pedra), sem cimento ou metal.", emoji: "🗿", cor: "#78716c", fotoUrl: stonehengeGeral },
      { termo: "Menir", definicao: "Pedra única, vertical, fincada isoladamente no chão. Pode marcar um território, um túmulo ou um ponto sagrado.", emoji: "🪨", cor: "#a8a29e", fotoUrl: menir },
      { termo: "Dólmen", definicao: "Câmara feita de pedras verticais cobertas por uma laje horizontal — geralmente usada como túmulo. É um trilítico em forma de mesa.", emoji: "⛩️", cor: "#7c2d12", fotoUrl: dolmen },
      { termo: "Sistema Trilítico", definicao: "Técnica de construção: dois pilares verticais sustentam uma viga horizontal encaixada por cima, distribuindo o peso pela gravidade.", emoji: "⚖️", cor: "#dc2626", fotoUrl: trilito },
      { termo: "Cromlech", definicao: "Conjunto de menires organizados em CÍRCULO, como Stonehenge. Frestas entre as pedras marcam a posição do sol em datas específicas.", emoji: "⭕", cor: "#0ea5e9", fotoUrl: cromlech },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como arqueólogos decifram a engenharia sagrada da pré-história.",
    paragrafos: [
      "Há cerca de 5 mil anos, antes da escrita e antes do metal, comunidades neolíticas ergueram monumentos de pedra tão precisos que ainda hoje intrigam engenheiros. Chamamos essa cultura de MEGALITISMO — da palavra grega para 'pedra grande'. Sem cimento, sem guindaste, sem roda de ferro: só física, cálculo e trabalho coletivo.",
      "A peça mais simples é o MENIR: uma única pedra vertical fincada no chão, sozinha, marcando um território ou um ponto sagrado da paisagem. Quando duas pedras verticais sustentam uma laje horizontal por cima, formando uma câmara, temos um DÓLMEN — geralmente usado como túmulo coletivo.",
      "A técnica que segura tudo isso de pé chama-se SISTEMA TRILÍTICO: dois pilares verticais recebem entalhes encaixados numa viga horizontal por cima. Não há cola nenhuma — é a GRAVIDADE distribuída entre os dois apoios que garante estabilidade. Quanto mais peso empurra pra baixo, mais firme fica o encaixe.",
      "Quando várias pedras verticais são organizadas em CÍRCULO, formam um CROMLECH — como o famoso Stonehenge, na Inglaterra. As frestas entre as pedras não são acaso: no dia do solstício de verão, o sol nasce exatamente alinhado ao centro do círculo. É arte, arquitetura e observatório astronômico ao mesmo tempo.",
      "Na França, os Alinhamentos de Carnac reúnem milhares de menires em fileiras retas por quilômetros de extensão — prova de que esses povos dominavam GEOMETRIA aplicada em larga escala, décadas antes de qualquer escrita conhecida. Estudar essas construções é decifrar como o ser humano transformou pedra bruta em espaço sagrado através do cálculo.",
    ],
    pigmentos: [
      { nome: "Pedra de Stonehenge", hex: "#78716c", fonte: "Arenito local (sarsen), Inglaterra", emoji: "🪨", fotoUrl: stonehengeGeral },
      { nome: "Menir de Carnac", hex: "#a8a29e", fonte: "Granito bretão, França", emoji: "🗿", fotoUrl: carnacAlinhamento },
      { nome: "Luz do solstício", hex: "#f59e0b", fonte: "Alinhamento solar sagrado", emoji: "☀️", fotoUrl: solsticio },
      { nome: "Encaixe trilítico", hex: "#dc2626", fonte: "Engenharia por gravidade", emoji: "⚖️", fotoUrl: trilito },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica se o Códice registrou toda a geometria sagrada!",
    perguntas: [
      {
        pergunta: "Qual é a diferença entre um MENIR e um DÓLMEN?",
        fotoUrl: menir,
        alternativas: [
          { texto: "Menir é uma pedra única vertical; dólmen é uma câmara com pedras verticais + uma laje horizontal por cima", correta: true },
          { texto: "São exatamente a mesma coisa, só com nomes diferentes em países diferentes", correta: false },
        ],
        feedbackAcerto: "Isso mesmo! Menir = uma pedra isolada. Dólmen = estrutura de câmara, geralmente funerária, com teto de pedra.",
        feedbackErro: "Não são a mesma coisa: o MENIR é uma pedra solitária vertical; o DÓLMEN é uma câmara com teto de laje horizontal.",
      },
      {
        pergunta: "Por que o SISTEMA TRILÍTICO se mantém de pé há milhares de anos sem cimento?",
        fotoUrl: trilito,
        alternativas: [
          { texto: "Porque o peso da viga horizontal é distribuído pela gravidade entre os dois pilares encaixados", correta: true },
          { texto: "Porque os povos antigos usavam um tipo de cola secreta que ninguém mais conhece", correta: false },
        ],
        feedbackAcerto: "Exato! Física pura: a gravidade empurra a viga pra baixo, travando o encaixe nos dois pilares — sem precisar de cola nenhuma.",
        feedbackErro: "Sem colas secretas! É engenharia por GRAVIDADE: o peso da viga trava o encaixe nos dois pilares verticais.",
      },
      {
        pergunta: "O que torna Stonehenge, além de monumento, um instrumento científico?",
        fotoUrl: cromlech,
        alternativas: [
          { texto: "O alinhamento do cromlech marca com precisão os solstícios de verão e inverno, como um calendário solar", correta: true },
          { texto: "Ele tem números escritos nas pedras indicando as datas do ano", correta: false },
        ],
        feedbackAcerto: "Isso mesmo! O cromlech de Stonehenge é alinhado para marcar o nascer do sol nos solstícios — funciona como calendário.",
        feedbackErro: "Não há números escritos. O que marca as datas é o ALINHAMENTO GEOMÉTRICO das pedras com o nascer do sol.",
      },
      {
        pergunta: "O que os Alinhamentos de Carnac provam sobre a geometria dos povos neolíticos?",
        fotoUrl: carnacAlinhamento,
        alternativas: [
          { texto: "Que dominavam cálculo geométrico em larga escala, organizando milhares de menires em fileiras retas", correta: true },
          { texto: "Que foram posicionados aleatoriamente sem nenhum planejamento", correta: false },
        ],
        feedbackAcerto: "Correto! Fileiras retas por quilômetros exigem planejamento geométrico avançado — nada de acaso.",
        feedbackErro: "Não é aleatório: as fileiras retas por quilômetros só existem com planejamento geométrico muito preciso.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada estrutura megalítica no quadrante certo do canteiro de obras.",
    animais: [
      {
        nome: "Pedra única fincada isolada", emoji: "🪨", fotoUrl: menir,
        corAlvo: { nome: "Menir", hex: "#a8a29e" },
        opcoes: [
          { nome: "Menir", hex: "#a8a29e" },
          { nome: "Dólmen", hex: "#7c2d12" },
          { nome: "Cromlech", hex: "#0ea5e9" },
        ],
        falaAcerto: "Isso! Uma pedra vertical solitária = Menir.",
      },
      {
        nome: "Câmara de pedras com laje por cima", emoji: "⛩️", fotoUrl: dolmen,
        corAlvo: { nome: "Dólmen", hex: "#7c2d12" },
        opcoes: [
          { nome: "Dólmen", hex: "#7c2d12" },
          { nome: "Menir", hex: "#a8a29e" },
          { nome: "Cromlech", hex: "#0ea5e9" },
        ],
        falaAcerto: "Perfeito! Câmara com teto de pedra = Dólmen, geralmente um túmulo.",
      },
      {
        nome: "Círculo de pedras alinhado ao sol", emoji: "⭕", fotoUrl: cromlech,
        corAlvo: { nome: "Cromlech", hex: "#0ea5e9" },
        opcoes: [
          { nome: "Cromlech", hex: "#0ea5e9" },
          { nome: "Menir", hex: "#a8a29e" },
          { nome: "Dólmen", hex: "#7c2d12" },
        ],
        falaAcerto: "Correto! Círculo de menires alinhado astronomicamente = Cromlech, como Stonehenge.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra construir um monumento megalítico como os arquitetos da pré-história.",
    passos: [
      { id: "p1", texto: "ESCOLHO o local sagrado observando por onde o sol nasce no solstício", emoji: "🧭", ordem: 1, fotoUrl: solsticio },
      { id: "p2", texto: "TRANSPORTO os blocos de pedra usando rampas, roletes de madeira e cordas", emoji: "🪨", ordem: 2, fotoUrl: blocosConstrucao },
      { id: "p3", texto: "ENTALHO encaixes nos pilares verticais para travar a viga horizontal", emoji: "🔨", ordem: 3, fotoUrl: trilito },
      { id: "p4", texto: "ERGO os dois pilares verticais usando alavancas e força coletiva", emoji: "⚖️", ordem: 4, fotoUrl: dolmen },
      { id: "p5", texto: "ENCAIXO a viga horizontal por cima, deixando a gravidade travar tudo", emoji: "🗿", ordem: 5, fotoUrl: stonehengeGeral },
    ],
    falaAcerto: "Você acabou de erguer um monumento trilítico — geometria e gravidade trabalhando juntas!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do arqueólogo megalítico. Toca nas palavras coloridas.",
    titulo: "Diário do Arqueólogo Megalítico",
    trechos: [
      { texto: "Sou arqueólogo. Estudo o", palavraDestaque: "megalitismo", corDestaque: "#78716c" },
      { texto: "através dos menires, dólmens e do", palavraDestaque: "sistema trilítico", corDestaque: "#dc2626" },
      { texto: "Descobri que um", palavraDestaque: "cromlech", corDestaque: "#0ea5e9" },
      { texto: "como Stonehenge não é só arte — é calendário solar de pedra, alinhado aos solstícios." },
      { texto: "Sem cimento, sem metal, só GEOMETRIA e GRAVIDADE. A engenharia mais antiga do mundo ainda está de pé." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 O Alinhamento dos Solstícios! Move os blocos megalíticos alinhando as sombras com os raios solares antes do tempo acabar.",
    titulo: "☀️ O Alinhamento dos Solstícios",
    instrucao: "Alinhe cada bloco de pedra com o raio de sol certo!",
    tempoSeg: 35,
    itens: [
      { emoji: "🪨", rotulo: "Menir alinhado ao nascer do sol", cor: "#a8a29e" },
      { emoji: "⛩️", rotulo: "Dólmen posicionado na sombra certa", cor: "#7c2d12" },
      { emoji: "⭕", rotulo: "Cromlech travado no solstício de verão", cor: "#0ea5e9" },
      { emoji: "⚖️", rotulo: "Trilito com viga encaixada por gravidade", cor: "#dc2626" },
      { emoji: "☀️", rotulo: "Raio de sol do solstício de inverno", cor: "#f59e0b" },
      { emoji: "🧭", rotulo: "Bloco geometricamente alinhado", cor: "#78716c" },
    ],
    falaFinal: "Alinhamento completo! Você calculou a geometria sagrada como os arquitetos neolíticos.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a terceira página do Códice. Toca em cada verbete!",
    titulo: "📓 Caderno da Geometria dos Monumentos",
    itens: [
      { emoji: "🗿", rotulo: "Megalitismo", descricao: "Cultura pré-histórica que construiu monumentos de pedra enorme, sem cimento ou metal.", cor: "#78716c", fotoUrl: stonehengeGeral },
      { emoji: "🪨", rotulo: "Menir", descricao: "Pedra única vertical fincada isoladamente, marcando território ou ponto sagrado.", cor: "#a8a29e", fotoUrl: menir },
      { emoji: "⛩️", rotulo: "Dólmen", descricao: "Câmara com pedras verticais cobertas por laje horizontal, usada como túmulo.", cor: "#7c2d12", fotoUrl: dolmen },
      { emoji: "⚖️", rotulo: "Sistema Trilítico", descricao: "Dois pilares verticais + viga horizontal encaixada. A gravidade distribui o peso e trava a estrutura.", cor: "#dc2626", fotoUrl: trilito },
      { emoji: "⭕", rotulo: "Cromlech", descricao: "Círculo de menires alinhado ao sol, como Stonehenge — calendário astronômico de pedra.", cor: "#0ea5e9", fotoUrl: cromlech },
      { emoji: "☀️", rotulo: "Alinhamento astronômico", descricao: "Frestas entre pedras marcam o nascer do sol nos solstícios de verão e inverno.", cor: "#f59e0b", fotoUrl: solsticio },
      { emoji: "🕵️", rotulo: "Arqueólogo megalítico", descricao: "Sua recompensa: Nível de Bolha e Prumo de Pedra, ferramentas do arqueólogo de campo.", cor: "#a8a29e", fotoUrl: arqueologo },
      { emoji: "🗺️", rotulo: "Mapa dos Alinhamentos Sagrados", descricao: "Sua página restaurada: mapa global dos monumentos megalíticos e seus alinhamentos solares.", cor: "#7c2d12", fotoUrl: carnacAlinhamento },
    ],
    falaFinal: "Terceira página do Códice dos Impérios Perdidos RESTAURADA — Mapa dos Alinhamentos Sagrados desbloqueado!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Desafio do Detetive, arqueólogo megalítico!",
    quiz: {
      pergunta: "Por que o SISTEMA TRILÍTICO de Stonehenge (dois pilares + uma viga horizontal) se mantém firme há milhares de anos SEM nenhum tipo de cimento ou cola?",
      alternativas: [
        { texto: "Porque a viga horizontal é encaixada por entalhes e o próprio peso, puxado pela gravidade, trava a estrutura contra os dois pilares", correta: true },
        { texto: "Porque as pedras foram derretidas e coladas por um processo químico secreto dos povos antigos", correta: false },
      ],
      feedback: "Perfeito! O segredo é FÍSICA pura: entalhes de encaixe + gravidade. Quanto mais peso empurra a viga pra baixo, mais firme ela trava nos pilares. Nada de química secreta — é geometria e engenharia aplicadas há 5 mil anos.",
    },
    missaoFamilia:
      "🌞 Missão Relógio de Sol de Stonehenge: Com a família, finque um bastão bem vertical num local ensolarado do quintal ou varanda. A cada 2 horas durante o dia, marque com uma pedrinha onde a SOMBRA da ponta do bastão cai no chão. No fim do dia, observe: as pedrinhas formam uma curva que mostra o caminho do sol — exatamente o princípio usado pelos povos megalíticos para alinhar seus monumentos! Registre no app uma foto do seu relógio de sol com as pedrinhas.",
    recompensaTitulo: "📜 Página 3 restaurada — O Mapa dos Alinhamentos Sagrados.",
    recompensaItem: "🔧 Nível de Bolha de Arqueólogo e Prumo de Pedra",
  },

  recompensa: { xp: 110, moedas: 55, medalha: "Prumo de Pedra" },
};
