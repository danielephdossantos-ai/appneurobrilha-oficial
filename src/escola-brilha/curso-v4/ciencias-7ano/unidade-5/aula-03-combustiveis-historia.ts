import type { AulaGeoV1 } from "../../types";
import { url as laboratorioImg } from "@/assets/ciencias-7ano/u5-a1/laboratorio-quimica.jpg.asset.json";
import { url as moleculasImg } from "@/assets/ciencias-7ano/u5-a1/moleculas-atomos.jpg.asset.json";
import { url as transformacoesImg } from "@/assets/ciencias-7ano/u5-a1/transformacoes-materia.jpg.asset.json";

/**
 * Ciências · 7º Ano · Unidade 5 · Aula 03
 * "Combustíveis na História" — Departamento de Matéria e Transformações.
 */
export const aula03: AulaGeoV1 = {
  slug: "aula-03-combustiveis-na-historia",
  titulo: "Combustíveis na História",
  iconeTrilha: "⛽",
  recompensa: { xp: 140, moedas: 55, medalha: "Historiador da Energia" },
  bncc: ["EF07CI05"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Linha do tempo de máquinas térmicas. Toque para iniciar.",
    mapaUrl: laboratorioImg,
    imagemDestaqueUrl: transformacoesImg,
    aurora:
      "Departamento 5: Matéria. Missão: viajar pela história dos combustíveis — da lenha ao petróleo — e entender os avanços e os PROBLEMAS socioambientais que cada um trouxe.",
    falaFinal:
      "Cada combustível mudou a sociedade — e deixou uma conta ambiental para pagar depois.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "A Revolução Industrial (a partir de 1760) foi movida principalmente por qual combustível?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: transformacoesImg,
    opcoes: [
      { id: "carvao", titulo: "Carvão mineral", subtitulo: "movia máquinas a vapor", emoji: "⚫", cor: "from-slate-600 to-slate-900", fotoUrl: laboratorioImg },
      { id: "petroleo", titulo: "Petróleo", subtitulo: "já dominava as fábricas", emoji: "🛢️", cor: "from-amber-500 to-orange-700", fotoUrl: laboratorioImg },
      { id: "eletricidade", titulo: "Eletricidade", subtitulo: "energia limpa desde o início", emoji: "⚡", cor: "from-yellow-500 to-amber-700", fotoUrl: transformacoesImg },
    ],
    respostaCerta: "carvao",
    feedbackAcerto:
      "Correto. O CARVÃO MINERAL alimentava as máquinas a vapor de James Watt, movendo teares, trens e navios a partir de 1760.",
    feedbackErro:
      "Petróleo só se popularizou no fim do século 19; eletricidade em massa vem depois. A Revolução Industrial começou com CARVÃO e máquina a vapor.",
    falaFinal:
      "Carvão → petróleo → eletricidade (de fontes variadas). Cada troca de combustível reorganizou a economia mundial.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da história energética.",
    instrucao: "Vocabulário dos combustíveis",
    cadernos: [
      { id: "combustivel", capa: "COMBUSTÍVEL FÓSSIL", emoji: "🛢️", cor: "from-slate-600 to-slate-900", conteudo: "Formado ao longo de MILHÕES de anos pela decomposição de matéria orgânica sob pressão. Carvão, petróleo e gás natural são exemplos. Não é renovável em escala humana.", exemplo: "Ex.: gasolina, diesel, carvão mineral.", fotoUrl: laboratorioImg },
      { id: "maquinaVapor", capa: "MÁQUINA A VAPOR", emoji: "🚂", cor: "from-red-500 to-rose-700", conteudo: "Primeira máquina térmica em escala industrial. Queima carvão para gerar vapor, que move pistões. Motor da Revolução Industrial (1760-1840).", exemplo: "Ex.: locomotivas, teares mecânicos, navios a vapor.", fotoUrl: laboratorioImg },
      { id: "combustaoInterna", capa: "MOTOR DE COMBUSTÃO INTERNA", emoji: "🚗", cor: "from-amber-500 to-orange-700", conteudo: "Queima combustível DENTRO do próprio motor (gasolina/diesel), sem precisar de caldeira externa. Criado no fim do século 19, popularizou o automóvel.", exemplo: "Ex.: motor de carro, moto, caminhão.", fotoUrl: transformacoesImg },
      { id: "efeitoEstufa", capa: "EFEITO ESTUFA INTENSIFICADO", emoji: "🌡️", cor: "from-red-500 to-rose-700", conteudo: "Queimar combustíveis fósseis libera CO₂ em excesso, que retém calor na atmosfera e aumenta a temperatura média global — mudança climática.", exemplo: "Ex.: aquecimento global, derretimento de geleiras.", fotoUrl: transformacoesImg },
      { id: "renovavel", capa: "ENERGIA RENOVÁVEL", emoji: "🌞", cor: "from-emerald-500 to-teal-700", conteudo: "Fontes que se REPÕEM naturalmente em escala humana: sol, vento, água, biomassa. Alternativa aos fósseis para reduzir emissões.", exemplo: "Ex.: energia solar, eólica, etanol de cana.", fotoUrl: laboratorioImg, partes: [
        { titulo: "Solar", texto: "Painéis convertem luz do sol diretamente em eletricidade." },
        { titulo: "Eólica", texto: "Turbinas convertem o movimento do vento em eletricidade." },
        { titulo: "Etanol", texto: "Combustível líquido feito de cana-de-açúcar ou milho, usado em carros flex." },
        { titulo: "Limitação", texto: "Renováveis também têm impactos — construção de usinas, uso de terra, dependência do clima." },
      ] },
    ],
    falaFinal:
      "Combustível fóssil, máquina a vapor, combustão interna, efeito estufa, renovável. História e futuro da energia.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Linha do tempo energética. Toque em cada marco.",
    instrucao: "Toque nos pontos",
    mapaUrl: transformacoesImg,
    pontos: [
      { id: "lenha", x: 15, y: 80, emoji: "🪵", cor: "from-amber-700 to-orange-900", titulo: "Lenha (milênios)", texto: "Primeiro combustível da humanidade. Usada para cozinhar, aquecer e depois fundir metais. Ainda usada por bilhões de pessoas no mundo.", fotoUrl: laboratorioImg },
      { id: "carvao", x: 35, y: 55, emoji: "⚫", cor: "from-slate-600 to-slate-900", titulo: "Carvão mineral (a partir de 1760)", texto: "Moveu a Revolução Industrial. Poluição do ar nas cidades cresceu muito — Londres ficou famosa pela fumaça (smog).", fotoUrl: laboratorioImg },
      { id: "petroleo", x: 60, y: 40, emoji: "🛢️", cor: "from-amber-500 to-orange-700", titulo: "Petróleo (a partir de 1859)", texto: "Primeiro poço comercial nos EUA em 1859. Deu origem a gasolina, diesel, plástico. Motor de combustão interna populariza o automóvel.", fotoUrl: transformacoesImg },
      { id: "renovaveis", x: 85, y: 20, emoji: "🌞", cor: "from-emerald-500 to-teal-700", titulo: "Renováveis (crescendo desde 1990s)", texto: "Solar e eólica ficaram muito mais baratas. Ainda são minoria na matriz energética mundial, mas crescem rapidamente para reduzir emissões.", fotoUrl: transformacoesImg },
    ],
    falaFinal:
      "Cada combustível resolveu um problema e criou outro. A história da energia é história de trocas.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão sobre a história dos combustíveis.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual combustível moveu a Revolução Industrial?", fotoUrl: laboratorioImg,
        cards: [
          { id: "a", emoji: "⚫", titulo: "Carvão mineral", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🛢️", titulo: "Petróleo", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌞", titulo: "Energia solar", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Máquinas a vapor a carvão moveram fábricas, trens e navios a partir de 1760.",
        feedbackErro: "Petróleo e solar vieram DEPOIS. A Revolução Industrial começou com CARVÃO." },
      { id: "q2", pergunta: "O que caracteriza um combustível fóssil?", fotoUrl: transformacoesImg,
        cards: [
          { id: "a", emoji: "🛢️", titulo: "Levou milhões de anos para se formar", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌱", titulo: "Se repõe em poucos meses", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "💨", titulo: "Não libera nenhum gás ao queimar", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Fósseis levam milhões de anos para se formar — por isso não são renováveis em escala humana.",
        feedbackErro: "Fósseis NÃO se repõem rápido e SIM liberam CO₂ ao queimar. A característica-chave é o tempo de formação: milhões de anos." },
      { id: "q3", pergunta: "Um problema socioambiental ligado ao uso intenso de fósseis é...", fotoUrl: laboratorioImg,
        cards: [
          { id: "a", emoji: "🌡️", titulo: "Intensificação do efeito estufa e aquecimento global", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "❄️", titulo: "Resfriamento acelerado do planeta", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌈", titulo: "Nenhum problema relevante", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Excesso de CO₂ retém mais calor na atmosfera, elevando a temperatura média global.",
        feedbackErro: "O efeito é de AQUECIMENTO, não resfriamento — e é um problema muito relevante hoje." },
    ],
    falaFinal:
      "Você já entende avanços e custos de cada combustível ao longo da história.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Combustíveis se dividem em dois grandes territórios: FÓSSEIS (não renováveis) e RENOVÁVEIS (repõem-se naturalmente).",
    instrucao: "Toque nos interruptores",
    mapaUrl: transformacoesImg,
    camadas: [
      { id: "fosseis", rotulo: "Fósseis", emoji: "🛢️", cor: "from-slate-600 to-slate-900", rect: { x: 5, y: 5, w: 45, h: 90 }, descricao: "Carvão, petróleo, gás natural. Alta densidade de energia, mas não renováveis e grandes emissores de CO₂.", fotoUrl: laboratorioImg },
      { id: "renovaveis", rotulo: "Renováveis", emoji: "🌞", cor: "from-emerald-500 to-teal-700", rect: { x: 50, y: 5, w: 45, h: 90 }, descricao: "Solar, eólica, hidrelétrica, etanol. Repõem-se naturalmente, mas ainda enfrentam desafios de custo e armazenamento de energia.", fotoUrl: transformacoesImg },
    ],
    falaFinal:
      "A transição energética mundial é a troca gradual do lado esquerdo do mapa para o direito.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "A LINHA DO TEMPO dos combustíveis — ordene cronologicamente.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ordene do mais antigo ao mais recente:",
    paradas: [
      { id: "lenha", emoji: "🪵", rotulo: "1. Lenha", descricao: "Usada há milhares de anos.", fotoUrl: laboratorioImg },
      { id: "carvao", emoji: "⚫", rotulo: "2. Carvão mineral", descricao: "A partir de 1760, Revolução Industrial.", fotoUrl: laboratorioImg },
      { id: "petroleo", emoji: "🛢️", rotulo: "3. Petróleo", descricao: "Poço comercial em 1859.", fotoUrl: transformacoesImg },
      { id: "renovaveis", emoji: "🌞", rotulo: "4. Renováveis em expansão", descricao: "Solar e eólica crescem desde os anos 1990.", fotoUrl: transformacoesImg },
    ],
    ordemCerta: ["lenha", "carvao", "petroleo", "renovaveis"],
    feedbackAcerto:
      "Exato. Lenha → carvão → petróleo → renováveis. Cada etapa trouxe mais potência e mais impacto ambiental — até a busca recente por alternativas.",
    feedbackErro:
      "Do MAIS ANTIGO ao MAIS RECENTE: lenha → carvão mineral → petróleo → renováveis em expansão.",
    falaFinal:
      "A história energética é uma corrida entre mais potência e menos impacto ambiental.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório sobre a transição energética.",
    tituloLivro: "📓 Relatório · Matriz Energética Global",
    subtitulo: "Avanços e problemas socioambientais dos combustíveis",
    paragrafos: [
      { id: "p1", texto: "AVANÇOS: os combustíveis fósseis permitiram a industrialização, o transporte em massa e a eletrificação de cidades inteiras. Antes deles, quase toda energia vinha de força humana, animal ou lenha — muito mais limitada.", chaves: ["industrialização"], definicoes: { industrialização: "Processo histórico de substituição do trabalho manual por máquinas movidas a energia." }, fotoUrl: laboratorioImg },
      { id: "p2", texto: "PROBLEMAS: a queima de carvão e petróleo libera CO₂ e outros poluentes. Cidades industriais do século 19, como Londres, sofriam com SMOG (fumaça + neblina) que causava doenças respiratórias. Hoje, o problema principal é o aquecimento global — a temperatura média da Terra já subiu ~1,2°C desde a era pré-industrial.", chaves: ["smog", "aquecimento global"], definicoes: { smog: "Mistura de fumaça e neblina que reduz a qualidade do ar urbano.", "aquecimento global": "Aumento da temperatura média da Terra causado principalmente pelo excesso de gases de efeito estufa." }, fotoUrl: transformacoesImg },
      { id: "p3", texto: "TRANSIÇÃO: hoje, países investem em energia solar, eólica e biocombustíveis para reduzir emissões. O Brasil tem uma matriz elétrica com grande parte hidrelétrica e usa etanol da cana como alternativa à gasolina — um caso raro de país com boa participação renovável.", chaves: ["biocombustíveis"], definicoes: { biocombustíveis: "Combustíveis produzidos a partir de matéria orgânica, como cana-de-açúcar ou milho." }, fotoUrl: laboratorioImg },
    ],
    falaFinal:
      "Cada avanço tecnológico trouxe um custo ambiental. A transição energética busca equilibrar essa conta.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio: fóssil ou renovável?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 30,
    pecas: [
      { id: "fossil", emoji: "🛢️", rotulo: "Fóssil" },
      { id: "renovavel", emoji: "🌞", rotulo: "Renovável" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Carvão mineral", emoji: "⚫", cor: "from-slate-600 to-slate-900" }, municipioB: { nome: "Levou milhões de anos para se formar", emoji: "⏳", cor: "from-amber-700 to-orange-900" }, contexto: "Movia as máquinas a vapor.", pecaCertaId: "fossil", fotoUrl: laboratorioImg, feedbackAcerto: "FÓSSIL. Formação em milhões de anos = não renovável em escala humana.", feedbackErro: "Levar milhões de anos para se formar é característica de combustível FÓSSIL." },
      { id: "r2", municipioA: { nome: "Etanol de cana-de-açúcar", emoji: "🌾", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Nova safra em ~1 ano", emoji: "🔄", cor: "from-lime-500 to-emerald-700" }, contexto: "Usado em carros flex no Brasil.", pecaCertaId: "renovavel", fotoUrl: transformacoesImg, feedbackAcerto: "RENOVÁVEL. Se repõe em pouco tempo (uma safra) — diferente dos fósseis.", feedbackErro: "Se repõe em cerca de 1 ano (nova safra) = RENOVÁVEL, não fóssil." },
      { id: "r3", municipioA: { nome: "Painel solar", emoji: "🌞", cor: "from-yellow-500 to-amber-700" }, municipioB: { nome: "Converte luz do sol em eletricidade", emoji: "⚡", cor: "from-emerald-500 to-teal-700" }, contexto: "Fonte inesgotável em escala humana.", pecaCertaId: "renovavel", fotoUrl: transformacoesImg, feedbackAcerto: "RENOVÁVEL. O Sol continuará brilhando por bilhões de anos — fonte praticamente inesgotável.", feedbackErro: "Fonte solar não se esgota em escala humana = RENOVÁVEL." },
      { id: "r4", municipioA: { nome: "Petróleo", emoji: "🛢️", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Gera gasolina, diesel e plástico", emoji: "⛽", cor: "from-slate-600 to-slate-900" }, contexto: "Extraído de reservas subterrâneas formadas há milhões de anos.", pecaCertaId: "fossil", fotoUrl: laboratorioImg, feedbackAcerto: "FÓSSIL. Reservas subterrâneas antigas, não renováveis em escala humana.", feedbackErro: "Reservas formadas há milhões de anos = combustível FÓSSIL." },
    ],
    falaFinal:
      "Você já classifica fontes de energia rápido. Base para debater a transição energética.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Participação aproximada de fósseis vs. renováveis na matriz energética MUNDIAL atual.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: transformacoesImg,
    fatias: [
      { id: "fosseis", rotulo: "Combustíveis fósseis", emoji: "🛢️", percentual: 80, cor: "#475569", descricao: "Carvão, petróleo e gás natural ainda dominam a matriz energética global, apesar do crescimento das renováveis.", exemplos: ["Petróleo", "Carvão", "Gás natural"], fotoUrl: laboratorioImg },
      { id: "renovaveis", rotulo: "Fontes renováveis", emoji: "🌞", percentual: 20, cor: "#10b981", descricao: "Solar, eólica, hidrelétrica e biocombustíveis somados — crescendo rápido, mas ainda minoria mundial.", exemplos: ["Hidrelétricas", "Eólica", "Solar"], fotoUrl: transformacoesImg },
    ],
    falaFinal:
      "Apesar do avanço das renováveis, o mundo ainda depende majoritariamente de fósseis. A transição é lenta e desigual entre países.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão sobre combustíveis e história. 3 perguntas para receber sua Certificação de Historiador da Energia.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: laboratorioImg,
    selo: { nome: "Certificação · Historiador da Energia", subtitulo: "Departamento 5 · Combustíveis na História", emoji: "⛽", cor: "from-amber-500 to-orange-700" },
    perguntas: [
      { id: "q1", pergunta: "A Revolução Industrial foi movida principalmente por...", fotoUrl: laboratorioImg,
        opcoes: [
          { id: "a", texto: "Carvão mineral e máquinas a vapor", correta: true },
          { id: "b", texto: "Petróleo e motores de combustão interna" },
        ],
        feedbackAcerto: "Correto. Petróleo virou relevante décadas depois, no final do século 19.",
        feedbackErro: "Petróleo é POSTERIOR. A Revolução Industrial (1760) usou CARVÃO e máquina a vapor." },
      { id: "q2", pergunta: "Combustíveis fósseis não são renováveis porque...", fotoUrl: transformacoesImg,
        opcoes: [
          { id: "a", texto: "Levam milhões de anos para se formar novamente", correta: true },
          { id: "b", texto: "São ilegais de extrair" },
        ],
        feedbackAcerto: "Sim. O tempo de formação é o que torna a reposição inviável em escala humana.",
        feedbackErro: "Não é questão legal — é uma questão de TEMPO GEOLÓGICO de formação." },
      { id: "q3", pergunta: "Qual é um problema socioambiental ligado ao uso intenso de combustíveis fósseis?", fotoUrl: laboratorioImg,
        opcoes: [
          { id: "a", texto: "Aumento das emissões de CO₂ e aquecimento global", correta: true },
          { id: "b", texto: "Redução da temperatura média do planeta" },
        ],
        feedbackAcerto: "Correto. Excesso de CO₂ intensifica o efeito estufa natural, elevando a temperatura global.",
        feedbackErro: "O efeito observado é de AQUECIMENTO, não de resfriamento." },
    ],
    falaFinal:
      "Selo conquistado. A história dos combustíveis é a história dos avanços — e das contas ambientais — da humanidade.",
  },
};
