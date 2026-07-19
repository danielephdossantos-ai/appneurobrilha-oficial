import type { AulaArteV1 } from "../../types";
import __asset_rebeccaHorn from "@/assets/arte-8ano/u1-rebecca-horn.jpg.asset.json";
const rebeccaHorn = __asset_rebeccaHorn.url;
import __asset_jaquetaLed from "@/assets/arte-8ano/u1-jaqueta-led.jpg.asset.json";
const jaquetaLed = __asset_jaquetaLed.url;
import __asset_arduinoDiy from "@/assets/arte-8ano/u1-arduino-diy.jpg.asset.json";
const arduinoDiy = __asset_arduinoDiy.url;
import __asset_performanceGaleria from "@/assets/arte-8ano/u1-performance-galeria.jpg.asset.json";
const performanceGaleria = __asset_performanceGaleria.url;
import __asset_oculosCobre from "@/assets/arte-8ano/u1-oculos-cobre.jpg.asset.json";
const oculosCobre = __asset_oculosCobre.url;
import __asset_jaquetaSensor from "@/assets/arte-8ano/u1-jaqueta-sensor.jpg.asset.json";
const jaquetaSensor = __asset_jaquetaSensor.url;
import __asset_luvaPoetica from "@/assets/arte-8ano/u1-luva-poetica.jpg.asset.json";
const luvaPoetica = __asset_luvaPoetica.url;
import __asset_corpoHibrido from "@/assets/arte-8ano/u1-corpo-hibrido.jpg.asset.json";
const corpoHibrido = __asset_corpoHibrido.url;
import __asset_circuitoFlexivel from "@/assets/arte-8ano/u1-circuito-flexivel.jpg.asset.json";
const circuitoFlexivel = __asset_circuitoFlexivel.url;
import __asset_solda from "@/assets/arte-8ano/u1-solda.jpg.asset.json";
const solda = __asset_solda.url;
import __asset_fibraOptica from "@/assets/arte-8ano/u1-fibra-optica.jpg.asset.json";
const fibraOptica = __asset_fibraOptica.url;
import __asset_makerSpace from "@/assets/arte-8ano/u1-maker-space.jpg.asset.json";
const makerSpace = __asset_makerSpace.url;
import __asset_materiaisReciclados from "@/assets/arte-8ano/u1-materiais-reciclados.jpg.asset.json";
const materiaisReciclados = __asset_materiaisReciclados.url;
import __asset_anatomiaBraco from "@/assets/arte-8ano/u1-anatomia-braco.jpg.asset.json";
const anatomiaBraco = __asset_anatomiaBraco.url;
import __asset_passo1 from "@/assets/arte-8ano/u1-passo1.jpg.asset.json";
const passo1 = __asset_passo1.url;
import __asset_passo2 from "@/assets/arte-8ano/u1-passo2.jpg.asset.json";
const passo2 = __asset_passo2.url;
import __asset_passo3 from "@/assets/arte-8ano/u1-passo3.jpg.asset.json";
const passo3 = __asset_passo3.url;
import __asset_passo4 from "@/assets/arte-8ano/u1-passo4.jpg.asset.json";
const passo4 = __asset_passo4.url;
import __asset_passo5 from "@/assets/arte-8ano/u1-passo5.jpg.asset.json";
const passo5 = __asset_passo5.url;
import __asset_ciberAtivista from "@/assets/arte-8ano/u1-ciber-ativista.jpg.asset.json";
const ciberAtivista = __asset_ciberAtivista.url;

/**
 * Arte · 8º Ano · Unidade 1 · Aula 01 — "O Corpo Híbrido: Arte e Tecnologia Vestível"
 * Metanarrativa: 🎭 Eco-Simulacros da Revolução Digital
 * Foco: arte contemporânea, wearable art, performance, cultura maker/DIY.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-corpo-hibrido",
  titulo: "O Corpo Híbrido — Arte e Tecnologia Vestível",
  iconeTrilha: "🎭",
  bncc: ["EF69AR01", "EF69AR04", "EF69AR31", "EF69AR32"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Ciber-Designer! As telas holográficas do 7º ano se fundiram em fibra óptica e circuitos flexíveis que reagem à sua pele. O mapa da cidade sumiu — no lugar, o desenho do CORPO HUMANO. Bem-vindo aos Eco-Simulacros: aqui o corpo vira o laboratório da arte. Toca em cada pista.",
    titulo: "🎭 O Despertar da Segunda Pele",
    instrucao: "Toca em cada pista pra ativar o módulo Ciber-Maker",
    itens: [
      { emoji: "🧬", rotulo: "Corpo Híbrido (biológico + digital)", descricao: "O corpo humano atravessado por circuitos, sensores e fibras: a arte contemporânea investiga a fronteira entre o que é biológico e o que é tecnológico.", cor: "#f97316", fotoUrl: corpoHibrido },
      { emoji: "🖐️", rotulo: "Próteses poéticas (anos 1970)", descricao: "Uma artista contemporânea colocou extensões gigantes de madeira em cada dedo. Não conseguia mais tocar nada normalmente — a percepção de espaço e tato foi COMPLETAMENTE reprogramada.", cor: "#0891b2", fotoUrl: rebeccaHorn },
      { emoji: "💡", rotulo: "Wearable Art (Arte Vestível)", descricao: "Roupas com sensores, LEDs e circuitos que respondem a luz, som e movimento. O vestuário deixa de ser proteção e vira obra de arte INTERATIVA.", cor: "#7c3aed", fotoUrl: jaquetaLed },
      { emoji: "🔧", rotulo: "Cultura Maker / DIY", descricao: "Do It Yourself: qualquer pessoa pode construir, modificar e consertar seus próprios dispositivos usando Arduino, materiais reciclados e hardware livre.", cor: "#16a34a", fotoUrl: makerSpace },
    ],
    falaFinal: "Sua missão: criar extensões pro corpo que misturem biologia e tecnologia, questionando o planeta na era digital.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de ciber-designer antes de pegar o ferro de solda!",
    perguntas: [
      {
        pergunta: "Uma artista coloca EXTENSÕES DE MADEIRA gigantes nos próprios dedos e não consegue mais pegar objetos normalmente. Qual é o objetivo POÉTICO dessa obra?",
        fotoUrl: rebeccaHorn,
        alternativas: [
          { texto: "Quebrar o AUTOMATISMO do dia a dia e fazer o público repensar tato, espaço e limites do corpo", correta: true },
          { texto: "Apenas mostrar habilidade em marcenaria — sem intenção crítica", correta: false },
        ],
        feedbackAcerto: "Perfeito! A prótese poética estranha o corpo e nos força a REFLETIR sobre o que damos como natural.",
        feedbackErro: "Cuidado: arte contemporânea NUNCA é só técnica. A prótese existe pra provocar reflexão sobre o corpo e a percepção.",
      },
      {
        pergunta: "Uma jaqueta tem sensores de proximidade: quando alguém chega perto, ela infla e acende luzes de alerta. Que tipo de arte é esse?",
        fotoUrl: jaquetaSensor,
        alternativas: [
          { texto: "Tecnologia Vestível (Wearable Art) — a roupa vira obra INTERATIVA que discute o espaço pessoal", correta: true },
          { texto: "Escultura clássica em bronze — obra estática sem tecnologia", correta: false },
        ],
        feedbackAcerto: "Isso! Wearable Art integra eletrônica ao vestuário pra criar arte que responde ao ambiente e ao público.",
        feedbackErro: "Escultura em bronze é imóvel. Aqui a roupa REAGE — é wearable art contemporâneo.",
      },
      {
        pergunta: "Uma pessoa monta seu próprio circuito com Arduino, fios reciclados e um LED. Que subcultura tecnológica ela pratica?",
        fotoUrl: arduinoDiy,
        alternativas: [
          { texto: "Cultura Maker / DIY (Do It Yourself) — qualquer um pode construir e modificar seus dispositivos", correta: true },
          { texto: "Consumo passivo — só empresas grandes podem fabricar eletrônicos", correta: false },
        ],
        feedbackAcerto: "Excelente! A filosofia DIY dá autonomia técnica e artística pra quem sempre foi só consumidor.",
        feedbackErro: "A cultura maker é o OPOSTO do consumo passivo: ela devolve o poder de criar hardware pras pessoas comuns.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do ciber-designer. Toca em cada verbete!",
    cards: [
      { termo: "Wearable Art (Arte Vestível)", definicao: "Roupas ou adereços com sensores, LEDs e circuitos que respondem a estímulos (luz, som, batimento) e transformam o vestuário em obra INTERATIVA.", emoji: "💡", cor: "#7c3aed", fotoUrl: jaquetaLed },
      { termo: "Cultura Maker / DIY", definicao: "Filosofia Do It Yourself: qualquer pessoa constrói, modifica e conserta dispositivos usando hardware livre (Arduino) e materiais reciclados.", emoji: "🔧", cor: "#16a34a", fotoUrl: makerSpace },
      { termo: "Performance Artística", definicao: "Linguagem da arte contemporânea em que o CORPO do artista (e suas ações) é a obra principal, num tempo e espaço específicos, gerando estranhamento.", emoji: "🎭", cor: "#dc2626", fotoUrl: performanceGaleria },
      { termo: "Prótese Poética", definicao: "Extensão do corpo (dedos, braços, cabeça) usada em performance pra QUEBRAR o automatismo e fazer o público repensar percepção e limites físicos.", emoji: "🖐️", cor: "#0891b2", fotoUrl: rebeccaHorn },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como o CORPO virou o novo suporte da arte contemporânea.",
    paragrafos: [
      "Depois de séculos pintando telas e esculpindo mármore, a arte contemporânea deu um passo radical: transformou o PRÓPRIO CORPO em obra. Não mais um retrato do corpo — o corpo AGORA é o material, o pincel e a galeria.",
      "Nos anos 1970, uma artista alemã construiu extensões gigantes de madeira e as prendeu nos próprios dedos. Ao tentar pegar objetos, percebia que a mesa estava LONGE DEMAIS, que o café escorria. A obra é essa: uma PRÓTESE POÉTICA que quebra o automatismo do gesto cotidiano e faz o público repensar tato, distância e limite.",
      "Da prótese analógica para o CIRCUITO: hoje falamos em WEARABLE ART — roupas equipadas com sensores, LEDs e fibras ópticas que reagem à luz, ao som e à aproximação. Um casaco pode inflar quando alguém invade seu espaço pessoal, e uma luva pode acender quando toca a terra úmida.",
      "Por trás de toda essa tecnologia vestível está a CULTURA MAKER: a filosofia Do It Yourself (DIY). Com placas Arduino, hardware livre e materiais reciclados, qualquer pessoa vira engenheira e artista ao mesmo tempo. Ninguém precisa esperar uma indústria pra criar sua segunda pele.",
      "Quando um artista sobe numa galeria vestindo um capacete cheio de antenas e interage com o público em tempo real, ele faz PERFORMANCE — a linguagem da arte contemporânea em que a AÇÃO é a obra. E se essa performance discute reciclagem, isolamento digital ou colapso ambiental, ela vira também ATIVISMO ESTÉTICO. Ciber-designer é isso: arte, ciência e crítica social no mesmo corpo.",
    ],
    pigmentos: [
      { nome: "Prótese Poética", hex: "#0891b2", fonte: "Extensão que estranha o corpo", emoji: "🖐️", fotoUrl: rebeccaHorn },
      { nome: "Wearable Art", hex: "#7c3aed", fonte: "Roupa que reage ao ambiente", emoji: "💡", fotoUrl: jaquetaLed },
      { nome: "Cultura Maker (DIY)", hex: "#16a34a", fonte: "Hardware livre + reciclagem", emoji: "🔧", fotoUrl: arduinoDiy },
      { nome: "Performance", hex: "#dc2626", fonte: "Corpo como obra em ação", emoji: "🎭", fotoUrl: performanceGaleria },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do ciber-designer!",
    perguntas: [
      {
        pergunta: "O que diferencia uma jaqueta comum de uma peça de WEARABLE ART?",
        fotoUrl: jaquetaLed,
        alternativas: [
          { texto: "A wearable tem sensores, LEDs ou circuitos INTEGRADOS que reagem ao ambiente (luz, som, toque)", correta: true },
          { texto: "A wearable é apenas mais cara, mas funciona exatamente igual a uma jaqueta normal", correta: false },
        ],
        feedbackAcerto: "Correto! O elemento eletrônico interativo é o que transforma vestuário em ARTE.",
        feedbackErro: "Preço não define wearable — o que define é a integração de eletrônica INTERATIVA na roupa.",
      },
      {
        pergunta: "Qual é o valor CENTRAL da Cultura Maker / DIY?",
        fotoUrl: makerSpace,
        alternativas: [
          { texto: "Autonomia: qualquer pessoa pode construir, modificar e consertar seus próprios dispositivos", correta: true },
          { texto: "Só engenheiros formados podem mexer em eletrônica — as pessoas comuns devem só comprar", correta: false },
        ],
        feedbackAcerto: "Isso! DIY é resistência ao consumo passivo — o poder de fabricar volta pras pessoas.",
        feedbackErro: "Esse é o modelo que a cultura maker COMBATE. O DIY diz o oposto: todo mundo pode ser criador de tecnologia.",
      },
      {
        pergunta: "Um artista veste uma escultura tecnológica e INTERAGE com o público numa galeria em tempo real. Que linguagem ele usa?",
        fotoUrl: performanceGaleria,
        alternativas: [
          { texto: "Performance Artística com Tecnologia Vestível — o corpo em ação é a obra", correta: true },
          { texto: "Pintura acadêmica de cavalete — arte tradicional em tela", correta: false },
        ],
        feedbackAcerto: "Perfeito! Performance + wearable = uma das linguagens mais fortes da arte contemporânea.",
        feedbackErro: "Cavalete é tradição do século XIX. Aqui a obra é o próprio corpo agindo — é performance.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada obra pela LINGUAGEM da arte contemporânea que ela usa!",
    animais: [
      {
        nome: "Extensões de madeira nos dedos", emoji: "🖐️", fotoUrl: rebeccaHorn,
        corAlvo: { nome: "Prótese Poética", hex: "#0891b2" },
        opcoes: [
          { nome: "Prótese Poética", hex: "#0891b2" },
          { nome: "Cultura Maker", hex: "#16a34a" },
          { nome: "Pintura Acadêmica", hex: "#78716c" },
        ],
        falaAcerto: "Isso! Extensão corporal que estranha o gesto = prótese poética.",
      },
      {
        nome: "Jaqueta com LEDs e fibra óptica", emoji: "💡", fotoUrl: jaquetaLed,
        corAlvo: { nome: "Wearable Art", hex: "#7c3aed" },
        opcoes: [
          { nome: "Wearable Art", hex: "#7c3aed" },
          { nome: "Performance", hex: "#dc2626" },
          { nome: "Escultura em Bronze", hex: "#78716c" },
        ],
        falaAcerto: "Correto! Circuitos e LEDs integrados ao tecido = arte vestível.",
      },
      {
        nome: "Ativista com capacete de antenas na rua", emoji: "🎭", fotoUrl: ciberAtivista,
        corAlvo: { nome: "Performance + Ativismo", hex: "#dc2626" },
        opcoes: [
          { nome: "Performance + Ativismo", hex: "#dc2626" },
          { nome: "Wearable Art", hex: "#7c3aed" },
          { nome: "Prótese Poética", hex: "#0891b2" },
        ],
        falaAcerto: "Perfeito! Corpo em ação + crítica social = performance ativista.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra projetar a SUA primeira Extensão Corporal Poética.",
    passos: [
      { id: "p1", texto: "Desenho a base ANATÔMICA da parte do corpo escolhida (mão, braço, cabeça) em papel quadriculado", emoji: "✋", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "Esboço por cima a ESTRUTURA VESTÍVEL — luva, elmo ou ombreira acoplada à anatomia", emoji: "🧤", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "Puxo linhas técnicas em vermelho apontando ONDE ficam os sensores e componentes fictícios", emoji: "📝", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "Colorizo indicando LEDs, fios de cobre e como a peça REAGE ao ambiente (luz, toque, som)", emoji: "🎨", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "Dou um TÍTULO pra obra e escrevo a crítica social/ecológica que ela faz — está pronta!", emoji: "🏷️", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Você acabou de projetar a primeira Extensão Corporal Poética do Laboratório Biomecânico!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do ciber-designer. Toca nas palavras coloridas.",
    titulo: "Diário do Ciber-Designer",
    trechos: [
      { texto: "Sou ciber-designer. Meu suporte não é a tela — é o", palavraDestaque: "corpo humano", corDestaque: "#f97316" },
      { texto: "Quando visto um objeto que estranha o gesto, faço uma", palavraDestaque: "prótese poética", corDestaque: "#0891b2" },
      { texto: "Se integro sensores e LEDs ao tecido, o resultado é", palavraDestaque: "wearable art", corDestaque: "#7c3aed" },
      { texto: "Nada disso seria possível sem a", palavraDestaque: "cultura maker", corDestaque: "#16a34a" },
      { texto: "que me dá autonomia via Arduino e reciclagem. Ao subir na galeria e agir, tudo vira", palavraDestaque: "performance", corDestaque: "#dc2626" },
      { texto: "e, quando o corpo denuncia o mundo, também vira ativismo estético." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 A Forja do Circuito Estético! Solda TODOS os componentes na placa flexível antes do tempo acabar.",
    titulo: "🎯 A Forja do Circuito Estético",
    instrucao: "Solda cada trilha de cobre nos sensores certos antes do tempo acabar!",
    tempoSeg: 40,
    itens: [
      { emoji: "🔥", rotulo: "Ferro de solda quente", cor: "#dc2626" },
      { emoji: "🟠", rotulo: "Trilha de cobre flexível", cor: "#f97316" },
      { emoji: "💡", rotulo: "LED de luz simétrica", cor: "#f59e0b" },
      { emoji: "👁️", rotulo: "Sensor de luz (LDR)", cor: "#7c3aed" },
      { emoji: "🔋", rotulo: "Bateria coin (3V)", cor: "#16a34a" },
      { emoji: "🧵", rotulo: "Fibra óptica luminescente", cor: "#0891b2" },
    ],
    falaFinal: "Circuito estável! O casaco holográfico brilha de forma simétrica.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o Laboratório Biomecânico. Toca em cada verbete pra consolidar!",
    titulo: "🧪 Caderno do Ciber-Designer",
    itens: [
      { emoji: "🧬", rotulo: "Corpo Híbrido", descricao: "Corpo biológico atravessado por circuitos e sensores — o novo suporte da arte contemporânea.", cor: "#f97316", fotoUrl: corpoHibrido },
      { emoji: "🖐️", rotulo: "Prótese Poética", descricao: "Extensão corporal que quebra o automatismo do gesto e força o público a repensar percepção e limites.", cor: "#0891b2", fotoUrl: rebeccaHorn },
      { emoji: "💡", rotulo: "Wearable Art", descricao: "Roupa/adereço com sensores, LEDs e circuitos que reagem a luz, som e proximidade. Vestuário como obra interativa.", cor: "#7c3aed", fotoUrl: jaquetaLed },
      { emoji: "🔧", rotulo: "Cultura Maker / DIY", descricao: "Filosofia Do It Yourself: hardware livre (Arduino) + materiais reciclados dão autonomia técnica e artística.", cor: "#16a34a", fotoUrl: arduinoDiy },
      { emoji: "🎭", rotulo: "Performance Artística", descricao: "O corpo em ação num tempo/espaço específicos é a obra. Gera estranhamento e reflexão no público.", cor: "#dc2626", fotoUrl: performanceGaleria },
      { emoji: "♻️", rotulo: "Materiais Reciclados", descricao: "Circuitos velhos, capacitores, fios de cobre viram matéria-prima da nova arte — crítica ecológica embutida.", cor: "#7c2d12", fotoUrl: materiaisReciclados },
    ],
    falaFinal: "Laboratório Biomecânico ATIVADO — primeiro módulo dos Eco-Simulacros online!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, ciber-designer!",
    quiz: {
      pergunta: "Na arte contemporânea, quando um artista usa o próprio corpo com adereços tecnológicos pra interagir com o público em uma galeria, qual LINGUAGEM artística ele está utilizando?",
      alternativas: [
        { texto: "Performance Artística com Tecnologia Vestível (Wearable) — o corpo em ação é a obra", correta: true },
        { texto: "Pintura Acadêmica de Cavalete — arte tradicional em tela", correta: false },
      ],
      feedback: "Excelente! A PERFORMANCE ARTÍSTICA é a linguagem da arte contemporânea em que o próprio corpo do artista (e suas ações) é a obra principal, num tempo e espaço específicos. Quando esse corpo é aumentado por WEARABLE ART (sensores, LEDs, circuitos flexíveis integrados à roupa), a obra ganha camadas de interatividade e discute nossa relação com a tecnologia e o ambiente. Pintura de cavalete é a antítese: obra estática, produzida no ateliê pra ser contemplada de longe.",
    },
    missaoFamilia:
      "📸 Missão Ciber-Maker em Família: com um adulto, projete no caderno uma EXTENSÃO CORPORAL POÉTICA (luva, elmo, ombreira). Faça o desenho anatômico da parte do corpo, esboce a estrutura vestível, aponte com linhas técnicas ONDE ficariam sensores e componentes, e dê um TÍTULO com a crítica social ou ecológica da obra. Fotografe e grave um áudio de 30s explicando a intenção da peça — mande pro álbum.",
    recompensaTitulo: "🎭 Laboratório Biomecânico do Eco-Simulacro ATIVADO.",
    recompensaItem: "🎛️ Microchip Ativador Gráfico + Fios de Fibra Luminescente",
  },

  recompensa: { xp: 130, moedas: 65, medalha: "Microchip Ativador Gráfico" },
};
