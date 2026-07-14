import type { AulaGeoV1 } from "../../types";
import { url as bancadaImg } from "@/assets/ciencias-6ano/u5-a1/bancada-fisica.jpg.asset.json";
import { url as renovaveisImg } from "@/assets/ciencias-6ano/u5-a1/energias-renovaveis.jpg.asset.json";
import { url as luzImg } from "@/assets/ciencias-6ano/u5-a1/luz-eletrica.jpg.asset.json";
import { url as fotossinteseImg } from "@/assets/ciencias-6ano/u5-a1/fotossintese.jpg.asset.json";
import ledVideo from "@/assets/ciencias-6ano/u5-a1/led-acendendo.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 5 · Aula 01
 * "Estação de Energia" — Formas de energia e propagação da luz (EF06CI08).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-estacao-energia",
  titulo: "Estação de Energia",
  iconeTrilha: "⚡",
  recompensa: { xp: 120, moedas: 45, medalha: "Físico Júnior" },
  bncc: ["EF06CI08"],
  duracaoMin: 35,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada de física. Analise pêndulo, mola, bateria e LED.",
    mapaUrl: bancadaImg,
    imagemDestaqueUrl: luzImg,
    aurora:
      "Programa 5. Aqui investigamos ENERGIA — a capacidade de causar mudança. Ela nunca some: só muda de forma. Da fotossíntese ao seu celular, é sempre transformação.",
    falaFinal: "Energia é o que faz TUDO acontecer. Estudar suas formas é estudar como o mundo funciona.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Situação: uma placa solar captura sol, aciona um motor, que gira uma turbina, que acende uma lâmpada.",
    pergunta: "De onde vem, no fim das contas, a ENERGIA que acende a lâmpada?",
    fotoUrl: renovaveisImg,
    opcoes: [
      { id: "sol", titulo: "Do Sol", subtitulo: "energia solar transformada", emoji: "☀️", cor: "from-amber-500 to-orange-700", fotoUrl: renovaveisImg },
      { id: "motor", titulo: "Do motor", subtitulo: "surge do próprio motor", emoji: "⚙️", cor: "from-slate-500 to-slate-700", fotoUrl: bancadaImg },
      { id: "lampada", titulo: "Da lâmpada", subtitulo: "ela mesma cria luz", emoji: "💡", cor: "from-red-500 to-rose-700", fotoUrl: luzImg },
    ],
    respostaCerta: "sol",
    feedbackAcerto:
      "Correto. Energia NUNCA aparece do nada — só muda de forma. Solar → elétrica → mecânica → luz. A fonte original é o Sol.",
    feedbackErro:
      "Motor e lâmpada só TRANSFORMAM energia — não criam. A origem é o Sol. Princípio da Conservação da Energia.",
    falaFinal: "Lei da Conservação: energia não se cria nem se destrói, só se TRANSFORMA. Regra universal.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco formas de energia. Uma vem com vídeo real de LED acendendo — energia elétrica virando luz em tempo real.",
    instrucao: "Vocabulário de energia",
    cadernos: [
      { id: "cinetica", capa: "CINÉTICA", emoji: "🏃", cor: "from-sky-500 to-cyan-700", conteudo: "Energia do MOVIMENTO. Quanto mais rápido e mais massa, mais energia cinética.", exemplo: "Ex.: carro em movimento, água caindo em cachoeira.", fotoUrl: bancadaImg },
      { id: "potencial", capa: "POTENCIAL", emoji: "🏔️", cor: "from-indigo-500 to-purple-700", conteudo: "Energia ARMAZENADA por posição ou estado. Vira cinética quando liberada.", exemplo: "Ex.: pedra no alto do morro, mola comprimida.", fotoUrl: bancadaImg },
      { id: "termica", capa: "TÉRMICA", emoji: "🔥", cor: "from-red-500 to-rose-700", conteudo: "Energia do CALOR — do movimento das moléculas. Quanto mais quente, mais energia térmica.", exemplo: "Ex.: água fervendo, corpo humano a 37°C.", fotoUrl: bancadaImg },
      { id: "eletrica", capa: "ELÉTRICA", emoji: "⚡", cor: "from-amber-500 to-orange-700", conteudo: "Energia do movimento de ELÉTRONS num condutor. Veja no vídeo: bateria + fio + LED = luz.", exemplo: "Ex.: tomada, bateria, raio.", videoUrl: ledVideo.url },
      { id: "luminosa", capa: "LUMINOSA", emoji: "☀️", cor: "from-yellow-500 to-amber-700", conteudo: "Energia da LUZ (ondas eletromagnéticas visíveis). Viaja no vácuo a 300.000 km/s.", exemplo: "Ex.: sol, LED, chama de vela.", fotoUrl: luzImg },
    ],
    falaFinal: "Cinco formas — infinitas transformações. Isso resume a física da energia.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "A bancada de física em ação. Toque em cada componente.",
    instrucao: "Toque nos equipamentos",
    mapaUrl: bancadaImg,
    pontos: [
      { id: "led", x: 50, y: 30, emoji: "💡", cor: "from-amber-500 to-orange-700", titulo: "LED aceso", texto: "Diodo emissor de luz. Converte energia ELÉTRICA em LUMINOSA com alta eficiência.", fotoUrl: luzImg },
      { id: "mola", x: 45, y: 55, emoji: "🌀", cor: "from-indigo-500 to-purple-700", titulo: "Mola espiral", texto: "Comprimida = energia POTENCIAL elástica. Liberada = vira cinética instantaneamente.", fotoUrl: bancadaImg },
      { id: "bateria", x: 82, y: 65, emoji: "🔋", cor: "from-emerald-500 to-teal-700", titulo: "Bateria", texto: "Reserva energia QUÍMICA e converte em elétrica sob demanda. Fonte portátil.", fotoUrl: bancadaImg },
      { id: "base", x: 40, y: 78, emoji: "🔩", cor: "from-slate-500 to-slate-700", titulo: "Base de madeira", texto: "Suporte estrutural. Isolante — não conduz corrente elétrica, garantindo segurança.", fotoUrl: bancadaImg },
    ],
    falaFinal: "Cada peça tem função na conversão de energia. Física é observar a transformação acontecer.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de física básica.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Uma bola parada no alto de um morro tem qual tipo de energia?", fotoUrl: bancadaImg,
        cards: [
          { id: "a", emoji: "🏔️", titulo: "Potencial gravitacional", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🏃", titulo: "Cinética", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔥", titulo: "Térmica", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. Está PARADA mas em altura — energia armazenada por posição.",
        feedbackErro: "Parada = sem cinética. Altura = energia POTENCIAL gravitacional armazenada." },
      { id: "q2", pergunta: "Quando você fricciona as mãos, elas esquentam. Qual transformação ocorreu?", fotoUrl: bancadaImg,
        cards: [
          { id: "a", emoji: "🔄", titulo: "Cinética → Térmica", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "☀️", titulo: "Luminosa → Elétrica", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "❄️", titulo: "Térmica → Potencial", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Movimento (atrito) vira calor. Base do aquecimento por fricção.",
        feedbackErro: "Movimento gera atrito, atrito gera calor. Cinética → Térmica." },
      { id: "q3", pergunta: "A luz do Sol chega à Terra viajando de que forma?", fotoUrl: renovaveisImg,
        cards: [
          { id: "a", emoji: "🌊", titulo: "Como ondas eletromagnéticas no vácuo", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💨", titulo: "Precisa de ar para se propagar", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔌", titulo: "Por cabos invisíveis", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Luz é onda eletromagnética — viaja no vácuo do espaço a 300.000 km/s.",
        feedbackErro: "Luz NÃO precisa de meio. Atravessa o vácuo espacial — por isso enxergamos estrelas." },
    ],
    falaFinal: "Reconhecer forma de energia + transformação é a habilidade central da física.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Fontes de energia se dividem em duas grandes zonas: RENOVÁVEIS (não acabam) e NÃO RENOVÁVEIS (esgotam).",
    instrucao: "Toque nos interruptores",
    mapaUrl: renovaveisImg,
    camadas: [
      { id: "reno", rotulo: "Renováveis", emoji: "🌞", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 50 }, descricao: "Solar, eólica, hidrelétrica, biomassa. Se renovam no tempo — ideais para o futuro.", fotoUrl: renovaveisImg },
      { id: "nao", rotulo: "Não Renováveis", emoji: "🛢️", cor: "from-slate-500 to-slate-700", rect: { x: 2, y: 52, w: 96, h: 46 }, descricao: "Petróleo, carvão, gás natural. Se ESGOTAM. Emitem CO₂ e contribuem para o aquecimento global.", fotoUrl: bancadaImg },
    ],
    falaFinal: "Escolher a fonte é uma decisão CIENTÍFICA — e ambiental. Renovável é o caminho.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Trace a rota da energia — do Sol até a lâmpada da sua casa.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Como energia solar vira luz na lâmpada?",
    paradas: [
      { id: "sol", emoji: "☀️", rotulo: "1. Sol", descricao: "Fonte primária — libera energia luminosa e térmica.", fotoUrl: renovaveisImg },
      { id: "placa", emoji: "🔲", rotulo: "2. Placa solar", descricao: "Absorve luz e converte em corrente elétrica.", fotoUrl: renovaveisImg },
      { id: "fio", emoji: "🔌", rotulo: "3. Fio condutor", descricao: "Transporta a energia elétrica.", fotoUrl: bancadaImg },
      { id: "lampada", emoji: "💡", rotulo: "4. Lâmpada LED", descricao: "Converte energia elétrica em luz visível.", fotoUrl: luzImg },
    ],
    ordemCerta: ["sol", "placa", "fio", "lampada"],
    feedbackAcerto: "Exato. Cadeia de transformação: luminosa → elétrica → luminosa novamente.",
    feedbackErro: "Sol vem primeiro; lâmpada por último. Cada etapa transforma a energia numa nova forma.",
    falaFinal: "Toda vez que você acende uma luz LED alimentada por energia solar, executa essa cadeia.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Programa 5.",
    tituloLivro: "📓 Relatório · Estação Solar 07",
    subtitulo: "Rendimento de painéis fotovoltaicos em dia ensolarado",
    paragrafos: [
      { id: "p1", texto: "MÉTODO: instalamos 4 painéis fotovoltaicos de 400 W no telhado de uma escola. Medimos a potência elétrica gerada a cada 30 min ao longo de um dia ensolarado de 12h. Registramos temperatura, incidência solar e produção em kWh.", chaves: ["fotovoltaico", "potência"], definicoes: { fotovoltaico: "Que converte luz em eletricidade.", potência: "Quantidade de energia por unidade de tempo (medida em watts)." }, fotoUrl: renovaveisImg },
      { id: "p2", texto: "RESULTADO: pico de geração às 12h30 (~1500 W). Ao final do dia, produção total = 8,4 kWh — energia suficiente para acender 100 lâmpadas LED de 10 W por 8 horas. Toda a energia veio do SOL — nenhum combustível queimado.", chaves: ["kWh", "combustível"], definicoes: { kWh: "Quilowatt-hora — unidade de energia elétrica consumida ou gerada.", combustível: "Material que libera energia ao ser queimado." }, fotoUrl: luzImg },
      { id: "p3", texto: "CONCLUSÃO: energia solar é RENOVÁVEL, limpa e viável em escala escolar. Evidência de que a conversão fotovoltaica é uma solução real para reduzir dependência de combustíveis fósseis.", chaves: ["renovável", "fóssil"], definicoes: { renovável: "Fonte que se repõe naturalmente.", fóssil: "Combustível de origem antiga (petróleo, carvão, gás)." }, fotoUrl: renovaveisImg },
    ],
    falaFinal: "Você acabou de ler um estudo real de energia. É assim que engenheiros e físicos comunicam.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Identifique a FORMA de energia.",
    instrucao: "⏱️ Escolha a forma correta",
    duracaoSegundos: 25,
    pecas: [
      { id: "cinetica", emoji: "🏃", rotulo: "Cinética" },
      { id: "potencial", emoji: "🏔️", rotulo: "Potencial" },
      { id: "termica", emoji: "🔥", rotulo: "Térmica" },
      { id: "eletrica", emoji: "⚡", rotulo: "Elétrica" },
      { id: "luminosa", emoji: "☀️", rotulo: "Luminosa" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Carro a 80 km/h", emoji: "🚗", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Movimento", emoji: "🎯", cor: "from-emerald-500 to-teal-700" }, contexto: "Um carro se desloca a 80 km/h na rodovia.", pecaCertaId: "cinetica", fotoUrl: bancadaImg, feedbackAcerto: "CINÉTICA — energia do movimento.", feedbackErro: "Movimento em ação = CINÉTICA." },
      { id: "r2", municipioA: { nome: "Fogão aceso", emoji: "🔥", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Calor", emoji: "♨️", cor: "from-orange-500 to-amber-700" }, contexto: "Panela sobre fogão aceso aquece a água até ferver.", pecaCertaId: "termica", fotoUrl: bancadaImg, feedbackAcerto: "TÉRMICA — energia do calor.", feedbackErro: "Calor + temperatura = TÉRMICA." },
      { id: "r3", municipioA: { nome: "Lâmpada acesa", emoji: "💡", cor: "from-yellow-500 to-amber-700" }, municipioB: { nome: "Luz visível", emoji: "☀️", cor: "from-orange-500 to-red-700" }, contexto: "Lâmpada LED acesa iluminando o quarto.", pecaCertaId: "luminosa", fotoUrl: luzImg, feedbackAcerto: "LUMINOSA — energia da luz.", feedbackErro: "Luz visível = LUMINOSA." },
    ],
    falaFinal: "Você já classifica formas de energia na hora. Vocabulário de físico.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Energia se divide em duas grandes categorias: ARMAZENADA (potencial) e EM MOVIMENTO (cinética/térmica/elétrica/luminosa).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: bancadaImg,
    fatias: [
      { id: "armaz", rotulo: "Armazenada", emoji: "🏔️", percentual: 40, cor: "#6366f1", descricao: "Energia POTENCIAL — pronta para virar movimento. Está guardada por posição, química, elástica ou nuclear.", exemplos: ["Bateria carregada", "Pedra no alto", "Mola comprimida"], fotoUrl: bancadaImg },
      { id: "acao", rotulo: "Em Ação", emoji: "⚡", percentual: 60, cor: "#f59e0b", descricao: "Energia CINÉTICA e derivadas (térmica, elétrica, luminosa). Está acontecendo AGORA.", exemplos: ["Carro em movimento", "Fogão aceso", "LED brilhando"], fotoUrl: luzImg },
    ],
    falaFinal: "Toda transformação vai da armazenada pra ação — ou vice-versa. Física em uma frase.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão do Programa 5. 3 perguntas e sua Certificação de Físico Júnior é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: bancadaImg,
    perguntas: [
      { id: "q1", pergunta: "A Lei da Conservação da Energia diz que...", fotoUrl: renovaveisImg,
        opcoes: [
          { id: "a", texto: "Energia não se cria nem se destrói — apenas se transforma", correta: true },
          { id: "b", texto: "Energia pode surgir do nada em condições especiais" },
        ],
        feedbackAcerto: "Correto. Lei universal — vale para o universo inteiro.",
        feedbackErro: "Energia NUNCA surge do nada. Sempre vem de uma transformação anterior." },
      { id: "q2", pergunta: "Qual fonte de energia é RENOVÁVEL?", fotoUrl: renovaveisImg,
        opcoes: [
          { id: "a", texto: "Energia solar", correta: true },
          { id: "b", texto: "Petróleo" },
        ],
        feedbackAcerto: "Sim. Sol brilha há bilhões de anos — fonte inesgotável na escala humana.",
        feedbackErro: "Petróleo é FÓSSIL — leva milhões de anos para se formar. Não renovável." },
      { id: "q3", pergunta: "Ao acender um LED com uma bateria, ocorre qual sequência de transformações?", fotoUrl: luzImg,
        opcoes: [
          { id: "a", texto: "Química (bateria) → Elétrica (fio) → Luminosa (LED)", correta: true },
          { id: "b", texto: "Luminosa → Química → Elétrica" },
        ],
        feedbackAcerto: "Exato. Bateria armazena química, converte em elétrica, LED transforma em luz.",
        feedbackErro: "A ORIGEM é a bateria (química). O LED é o FIM (luminosa). A sequência é Química → Elétrica → Luminosa." },
    ],
    selo: { nome: "Certificação de Físico Júnior", subtitulo: "Academia Científica · Programa 5 concluído", emoji: "⚡", cor: "from-amber-500 to-yellow-700" },
    falaFinal: "Programa 5 concluído. Você entende formas e transformações de energia.",
  },
};
