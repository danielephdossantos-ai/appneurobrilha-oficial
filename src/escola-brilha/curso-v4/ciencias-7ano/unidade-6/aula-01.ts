import type { AulaGeoV1 } from "../../types";
import solarImg from "@/assets/ciencias-7ano/u6-a1/sistema-solar.jpg";
import terraImg from "@/assets/ciencias-7ano/u6-a1/camadas-terra.jpg";
import galaxiaImg from "@/assets/ciencias-7ano/u6-a1/galaxias.jpg";

/**
 * Ciências · 7º Ano · Unidade 6 · Aula 01
 * "Endereço Cósmico" — Departamento de Terra e Universo.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-endereco-cosmico",
  titulo: "Endereço Cósmico",
  iconeTrilha: "🌌",
  recompensa: { xp: 140, moedas: 55, medalha: "Astrônomo Júnior" },
  bncc: ["EF07CI13", "EF07CI14"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Imagem NASA do sistema solar. Toque para iniciar.",
    mapaUrl: solarImg,
    imagemDestaqueUrl: galaxiaImg,
    aurora:
      "Departamento 6: Terra e Universo. Missão: escrever seu ENDEREÇO CÓSMICO completo. Do CEP até a galáxia. E entender o planeta que você mora POR DENTRO.",
    falaFinal:
      "Você mora em Terra → Sistema Solar → Braço de Órion → Via Láctea → Grupo Local → Universo Observável.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Se o Sol some AGORA, quanto tempo até a Terra ficar escura? Formule sua hipótese.",
    pergunta: "Qual sua estimativa?",
    fotoUrl: solarImg,
    opcoes: [
      { id: "instantaneo", titulo: "Instantâneo", subtitulo: "escuridão imediata", emoji: "⚡", cor: "from-slate-500 to-slate-700", fotoUrl: solarImg },
      { id: "oito", titulo: "~8 minutos", subtitulo: "tempo da luz do Sol chegar", emoji: "☀️", cor: "from-emerald-500 to-teal-700", fotoUrl: solarImg },
      { id: "hora", titulo: "1 hora", subtitulo: "sistema solar é grande", emoji: "🕐", cor: "from-rose-500 to-red-700", fotoUrl: solarImg },
    ],
    respostaCerta: "oito",
    feedbackAcerto:
      "Correto. A luz viaja a 300 mil km/s, mas o Sol está a 150 milhões de km. Faz a conta: 8 min e 20 s. Toda luz do Sol que você vê hoje é do PASSADO.",
    feedbackErro:
      "A luz é RÁPIDA mas não instantânea. Sol está a 150 milhões de km. Luz leva ~8 min para chegar. Ou seja: se o Sol sumisse agora, veríamos ainda 8 minutos.",
    falaFinal:
      "Olhar para o céu é olhar para o passado. Estrelas distantes podem já ter morrido e ainda vemos sua luz.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco conceitos-chave da astronomia.",
    instrucao: "Vocabulário cósmico",
    cadernos: [
      { id: "estrela", capa: "ESTRELA", emoji: "☀️", cor: "from-yellow-500 to-orange-700", conteudo: "Esfera enorme de gás em FUSÃO NUCLEAR — hidrogênio se transforma em hélio liberando luz e calor. Sol é uma estrela comum.", exemplo: "Ex.: Sol, Sírius, Betelgeuse.", fotoUrl: solarImg },
      { id: "planeta", capa: "PLANETA", emoji: "🪐", cor: "from-sky-500 to-cyan-700", conteudo: "Corpo grande, esférico, que orbita uma estrela e 'limpou' sua órbita. NÃO produz luz — apenas reflete.", exemplo: "Ex.: Terra, Marte, Júpiter, Saturno.", fotoUrl: solarImg },
      { id: "satelite", capa: "SATÉLITE", emoji: "🌙", cor: "from-slate-500 to-slate-700", conteudo: "Corpo que orbita um planeta. Pode ser natural (Lua) ou artificial (ISS, telescópio Hubble).", exemplo: "Ex.: Lua orbita a Terra; Europa orbita Júpiter.", fotoUrl: solarImg },
      { id: "galaxia", capa: "GALÁXIA", emoji: "🌌", cor: "from-indigo-500 to-purple-700", conteudo: "Aglomerado GIGANTESCO de bilhões de estrelas + gás + poeira + matéria escura, ligado pela gravidade. Via Láctea = nossa galáxia.", exemplo: "Ex.: Via Láctea (~100 bilhões de estrelas), Andrômeda.", fotoUrl: galaxiaImg },
      { id: "camadas", capa: "CAMADAS DA TERRA", emoji: "🌍", cor: "from-amber-500 to-orange-700", conteudo: "A Terra tem estrutura em cebola: crosta (fina), manto (grosso, semilíquido), núcleo externo (líquido) e núcleo interno (sólido de ferro).", exemplo: "Ex.: crosta ~30 km; núcleo interno a ~5100 km de profundidade.", fotoUrl: terraImg, partes: [
        { titulo: "Crosta", texto: "Camada mais externa e mais fina. É onde vivemos. Continental (~30 km) ou oceânica (~7 km)." },
        { titulo: "Manto", texto: "Semilíquido, muito quente. Onde acontecem correntes de convecção que movem os continentes." },
        { titulo: "Núcleo externo", texto: "Líquido, feito de ferro e níquel. Seu movimento cria o campo magnético da Terra." },
        { titulo: "Núcleo interno", texto: "Sólido apesar do calor extremo (5000°C) — pressão gigante o mantém sólido." },
      ] },
    ],
    falaFinal:
      "Estrela, planeta, satélite, galáxia, camadas da Terra. Vocabulário do endereço cósmico.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "As camadas da Terra em corte. Toque para investigar.",
    instrucao: "Toque nas camadas",
    mapaUrl: terraImg,
    pontos: [
      { id: "crosta", x: 50, y: 15, emoji: "🌍", cor: "from-emerald-500 to-teal-700", titulo: "Crosta", texto: "Camada sólida onde vivemos. ~30 km em continentes, ~7 km em oceanos. Formada por placas tectônicas que se movem lentamente.", fotoUrl: terraImg },
      { id: "manto", x: 25, y: 50, emoji: "🌋", cor: "from-red-500 to-rose-700", titulo: "Manto", texto: "Camada mais volumosa. Semilíquido (magma). ~2900 km de espessura. Onde vulcões nascem e continentes se movem.", fotoUrl: terraImg },
      { id: "nucleoExt", x: 50, y: 60, emoji: "🔥", cor: "from-orange-500 to-amber-700", titulo: "Núcleo Externo", texto: "Ferro e níquel LÍQUIDOS. Seu movimento gera o CAMPO MAGNÉTICO que nos protege da radiação solar.", fotoUrl: terraImg },
      { id: "nucleoInt", x: 50, y: 80, emoji: "⚫", cor: "from-slate-600 to-slate-900", titulo: "Núcleo Interno", texto: "Sólido, feito de ferro puro. Temperatura ~5000°C (como a superfície do Sol). Pressão o mantém sólido.", fotoUrl: terraImg },
    ],
    falaFinal:
      "Da superfície ao centro: crosta, manto, núcleo externo, núcleo interno. 6371 km de raio.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão sobre o cosmos.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O Sol é...", fotoUrl: solarImg,
        cards: [
          { id: "a", emoji: "☀️", titulo: "Uma estrela (produz luz por fusão nuclear)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🪐", titulo: "Um planeta gigante", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌙", titulo: "Um satélite da Terra", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Sol = estrela = fusão nuclear = luz própria.",
        feedbackErro: "Planeta reflete luz. Sol PRODUZ luz. É uma ESTRELA." },
      { id: "q2", pergunta: "Nossa galáxia se chama...", fotoUrl: galaxiaImg,
        cards: [
          { id: "a", emoji: "🌌", titulo: "Via Láctea (~100 bilhões de estrelas)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌟", titulo: "Andrômeda", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "☀️", titulo: "Sistema Solar (que é bem menor)", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Via Láctea = nossa galáxia. Sol é uma estrela dela.",
        feedbackErro: "Andrômeda é a galáxia VIZINHA. Sistema Solar é o nosso bairro. Nossa GALÁXIA é a VIA LÁCTEA." },
      { id: "q3", pergunta: "Qual camada da Terra é RESPONSÁVEL pelo campo magnético?", fotoUrl: terraImg,
        cards: [
          { id: "a", emoji: "🔥", titulo: "Núcleo externo (ferro líquido em movimento)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌍", titulo: "Crosta (onde moramos)", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌋", titulo: "Manto", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Ferro líquido do núcleo externo gira e cria campo magnético.",
        feedbackErro: "Crosta e manto NÃO geram campo magnético. É o NÚCLEO EXTERNO (ferro líquido)." },
    ],
    falaFinal:
      "Você já conhece seu endereço cósmico e a estrutura do próprio planeta.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "O sistema solar tem dois grandes territórios: PLANETAS INTERNOS (rochosos, pequenos, quentes) e PLANETAS EXTERNOS (gasosos, gigantes, frios).",
    instrucao: "Toque nos interruptores",
    mapaUrl: solarImg,
    camadas: [
      { id: "internos", rotulo: "Planetas Rochosos", emoji: "🪨", cor: "from-amber-500 to-orange-700", rect: { x: 15, y: 40, w: 40, h: 40 }, descricao: "Mercúrio, Vênus, Terra, Marte. Pequenos, feitos de rocha, próximos do Sol.", fotoUrl: solarImg },
      { id: "externos", rotulo: "Gigantes Gasosos", emoji: "🪐", cor: "from-indigo-500 to-purple-700", rect: { x: 55, y: 40, w: 40, h: 40 }, descricao: "Júpiter, Saturno, Urano, Netuno. Enormes, feitos de gás, distantes e frios.", fotoUrl: solarImg },
    ],
    falaFinal:
      "Perto do Sol: pequeno e sólido. Longe do Sol: enorme e gasoso. Física impõe.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "SEU ENDEREÇO CÓSMICO — do menor ao maior.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ordene do local ao universal:",
    paradas: [
      { id: "terra", emoji: "🌍", rotulo: "1. Terra", descricao: "Nosso planeta.", fotoUrl: terraImg },
      { id: "solar", emoji: "☀️", rotulo: "2. Sistema Solar", descricao: "Sol + 8 planetas + luas + asteroides.", fotoUrl: solarImg },
      { id: "braco", emoji: "🌀", rotulo: "3. Braço de Órion", descricao: "Nosso bairro dentro da Via Láctea.", fotoUrl: galaxiaImg },
      { id: "galaxia", emoji: "🌌", rotulo: "4. Via Láctea", descricao: "Nossa galáxia.", fotoUrl: galaxiaImg },
      { id: "universo", emoji: "✨", rotulo: "5. Universo observável", descricao: "Tudo que conseguimos ver.", fotoUrl: galaxiaImg },
    ],
    ordemCerta: ["terra", "solar", "braco", "galaxia", "universo"],
    feedbackAcerto:
      "Exato. Terra → Solar → Braço → Galáxia → Universo. Cinco escalas.",
    feedbackErro:
      "Do MENOR ao MAIOR: Terra → Sistema Solar → Braço de Órion → Via Láctea → Universo.",
    falaFinal:
      "Escrevi seu endereço completo. Bem longe do CEP de casa.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório de observação astronômica.",
    tituloLivro: "📓 Relatório · Observação 12 — Céu Noturno",
    subtitulo: "O que sua vista vê e o que a ciência revela",
    paragrafos: [
      { id: "p1", texto: "OBSERVAÇÃO A OLHO NU: em uma noite escura sem poluição luminosa, você vê ~3000 estrelas. Todas estão na NOSSA galáxia (Via Láctea). A faixa esbranquiçada no céu — a 'Via Láctea' — são bilhões de estrelas TÃO distantes que se fundem em um borrão.", chaves: ["poluição luminosa"], definicoes: { "poluição luminosa": "Excesso de luz artificial que impede ver estrelas no céu urbano." }, fotoUrl: galaxiaImg },
      { id: "p2", texto: "OBSERVAÇÃO COM TELESCÓPIO: apontando para uma 'nuvem' entre estrelas, revela-se uma outra GALÁXIA completa (Andrômeda). Ela tem trilhões de estrelas — e está a 2,5 milhões de anos-luz de nós. A luz que chega no seu telescópio saiu de lá antes dos humanos existirem.", chaves: ["ano-luz"], definicoes: { "ano-luz": "Distância que a luz percorre em 1 ano (~9,5 trilhões de km)." }, fotoUrl: galaxiaImg },
      { id: "p3", texto: "CONCLUSÃO: o universo observável tem ~2 trilhões de galáxias. Cada uma com bilhões de estrelas. A maioria com planetas. A escala do cosmos é IMPOSSÍVEL de imaginar de verdade — só de calcular no papel.", chaves: ["universo observável"], definicoes: { "universo observável": "A parte do universo cuja luz teve tempo de chegar até nós desde o Big Bang." }, fotoUrl: galaxiaImg },
      ],
    falaFinal:
      "Olhar para o céu é olhar 13,8 bilhões de anos para trás. Astronomia é máquina do tempo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio de classificação astronômica.",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 30,
    pecas: [
      { id: "estrela", emoji: "☀️", rotulo: "Estrela" },
      { id: "planeta", emoji: "🪐", rotulo: "Planeta" },
      { id: "satelite", emoji: "🌙", rotulo: "Satélite" },
      { id: "galaxia", emoji: "🌌", rotulo: "Galáxia" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Sol", emoji: "☀️", cor: "from-yellow-500 to-orange-700" }, municipioB: { nome: "Produz luz por fusão nuclear", emoji: "⚡", cor: "from-amber-500 to-yellow-700" }, contexto: "Centro do nosso sistema.", pecaCertaId: "estrela", fotoUrl: solarImg, feedbackAcerto: "ESTRELA. Sol é uma estrela comum.", feedbackErro: "Produz luz própria = ESTRELA. Sol é estrela." },
      { id: "r2", municipioA: { nome: "Lua", emoji: "🌙", cor: "from-slate-400 to-slate-600" }, municipioB: { nome: "Orbita um planeta", emoji: "🔄", cor: "from-sky-500 to-cyan-700" }, contexto: "Vemos suas fases toda noite.", pecaCertaId: "satelite", fotoUrl: solarImg, feedbackAcerto: "SATÉLITE. Lua orbita a Terra.", feedbackErro: "Orbita um planeta = SATÉLITE. Lua é satélite natural." },
      { id: "r3", municipioA: { nome: "Marte", emoji: "🔴", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Orbita o Sol, corpo esférico rochoso", emoji: "🪨", cor: "from-orange-500 to-amber-700" }, contexto: "Chamado de Planeta Vermelho.", pecaCertaId: "planeta", fotoUrl: solarImg, feedbackAcerto: "PLANETA. Marte é o 4º planeta do Sol.", feedbackErro: "Orbita o Sol, esférico = PLANETA. Marte é planeta rochoso." },
      { id: "r4", municipioA: { nome: "Via Láctea", emoji: "🌌", cor: "from-indigo-500 to-purple-700" }, municipioB: { nome: "~100 bilhões de estrelas juntas", emoji: "✨", cor: "from-purple-500 to-violet-700" }, contexto: "Contém o nosso Sol e todo o sistema solar.", pecaCertaId: "galaxia", fotoUrl: galaxiaImg, feedbackAcerto: "GALÁXIA. Via Láctea é a nossa.", feedbackErro: "Bilhões de estrelas juntas = GALÁXIA. Via Láctea é nossa galáxia." },
    ],
    falaFinal:
      "Você classifica corpos cósmicos rápido. Isso é alfabetização astronômica.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Distribuição da MASSA no sistema solar. Um dado que surpreende.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: solarImg,
    fatias: [
      { id: "sol", rotulo: "Sol", emoji: "☀️", percentual: 99, cor: "#f59e0b", descricao: "O Sol sozinho contém 99,86% de toda a massa do sistema solar. Sem ele, nada teria órbita.", exemplos: ["Fusão de H em He", "Fonte de energia"], fotoUrl: solarImg },
      { id: "planetas", rotulo: "Planetas e resto", emoji: "🪐", percentual: 1, cor: "#0ea5e9", descricao: "Todos os planetas, luas, asteroides e cometas juntos são só 0,14% da massa.", exemplos: ["Júpiter (maior planeta)", "Terra (nosso lar)", "Asteroides"], fotoUrl: solarImg },
    ],
    falaFinal:
      "O Sol é o sistema solar. Tudo mais é migalha. Escala manda respeito.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Departamento 6. 3 perguntas para receber sua Certificação de Astrônomo Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: galaxiaImg,
    selo: { nome: "Certificação · Astrônomo Júnior", subtitulo: "Departamento 6 · Endereço Cósmico", emoji: "🌌", cor: "from-indigo-500 to-purple-700" },
    perguntas: [
      { id: "q1", pergunta: "Diferença essencial entre estrela e planeta:", fotoUrl: solarImg,
        opcoes: [
          { id: "a", texto: "Estrela produz luz própria; planeta apenas reflete", correta: true },
          { id: "b", texto: "Estrela é pequena; planeta é grande" },
        ],
        feedbackAcerto: "Correto. Estrela = fusão nuclear = luz própria. Planeta reflete.",
        feedbackErro: "Estrelas geralmente são MAIORES. A diferença real: luz PRÓPRIA vs REFLETIDA." },
      { id: "q2", pergunta: "Ordem CORRETA de menor a maior escala cósmica:", fotoUrl: galaxiaImg,
        opcoes: [
          { id: "a", texto: "Terra → Sistema Solar → Via Láctea → Universo", correta: true },
          { id: "b", texto: "Universo → Via Láctea → Terra → Sistema Solar" },
        ],
        feedbackAcerto: "Exato. Do menor endereço ao maior.",
        feedbackErro: "Do MENOR ao MAIOR: Terra → Sistema Solar → Via Láctea → Universo." },
      { id: "q3", pergunta: "A Terra tem estrutura em CAMADAS. Qual é a MAIS EXTERNA?", fotoUrl: terraImg,
        opcoes: [
          { id: "a", texto: "Crosta (onde vivemos)", correta: true },
          { id: "b", texto: "Núcleo interno (o mais profundo)" },
        ],
        feedbackAcerto: "Correto. Crosta é a camada mais fina e externa.",
        feedbackErro: "Núcleo interno é o MAIS PROFUNDO. Vivemos na CROSTA — a mais externa." },
    ],
    falaFinal:
      "Selo conquistado. Fim do Departamento 6 — Terra e Universo.",
  },
};
