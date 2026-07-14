import type { AulaGeoV1 } from "../../types";
import circuitoImg from "@/assets/ciencias-8ano/u5/circuito-eletrico.jpg";
import painelImg from "@/assets/ciencias-8ano/u5/painel-solar.jpg";

/**
 * Ciências · 8º Ano · U5 · A01 — "Centro de Engenharia"
 * Energia elétrica, circuitos, consumo e fontes renováveis.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-centro-engenharia",
  titulo: "Centro de Engenharia",
  iconeTrilha: "⚡",
  recompensa: { xp: 140, moedas: 55, medalha: "Engenheiro Júnior" },
  bncc: ["EF08CI05", "EF08CI06"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada de eletrônica com circuito aceso. Toque para iniciar.",
    mapaUrl: circuitoImg,
    imagemDestaqueUrl: painelImg,
    aurora:
      "Setor 5: Centro de Engenharia. Missão: entender como a energia elétrica chega até sua casa, como usamos com consciência e por que precisamos migrar para fontes renováveis.",
    falaFinal:
      "Energia é o motor da civilização — mas nem toda energia é limpa.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Problema: numa casa comum, qual aparelho consome MAIS energia elétrica em uma hora ligado?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: circuitoImg,
    opcoes: [
      { id: "led", titulo: "Lâmpada LED (10 W)", subtitulo: "fica ligada muito tempo", emoji: "💡", cor: "from-slate-500 to-slate-700", fotoUrl: circuitoImg },
      { id: "chuveiro", titulo: "Chuveiro elétrico (5.500 W)", subtitulo: "esquenta água instantâneo", emoji: "🚿", cor: "from-emerald-500 to-teal-700", fotoUrl: painelImg },
      { id: "celular", titulo: "Celular carregando (5 W)", subtitulo: "cabo o dia inteiro", emoji: "📱", cor: "from-red-500 to-rose-700", fotoUrl: circuitoImg },
    ],
    respostaCerta: "chuveiro",
    feedbackAcerto:
      "Correto. Chuveiro é campeão: 5.500 W. Em 1 hora consome 5,5 kWh — o mesmo que 550 lâmpadas LED durante 1 hora.",
    feedbackErro:
      "Não é a lâmpada nem o celular. É o CHUVEIRO — 5.500 W. Aparelho de aquecimento sempre pesa muito na conta.",
    falaFinal:
      "Potência (W) × tempo (h) = consumo (kWh). É assim que a conta de luz calcula.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da energia elétrica.",
    instrucao: "Vocabulário do Centro de Engenharia",
    cadernos: [
      { id: "corrente", capa: "CORRENTE ELÉTRICA", emoji: "⚡", cor: "from-amber-500 to-yellow-700", conteudo: "Fluxo ordenado de ELÉTRONS por um condutor. Medida em AMPÈRE (A).", exemplo: "Ex.: fio de cobre conduz elétrons quando ligado a uma pilha.", fotoUrl: circuitoImg },
      { id: "tensao", capa: "TENSÃO (VOLTAGEM)", emoji: "🔌", cor: "from-indigo-500 to-purple-700", conteudo: "Diferença de potencial que 'empurra' os elétrons. Medida em VOLT (V). No Brasil: 127 V ou 220 V.", exemplo: "Ex.: pilha AA = 1,5 V. Tomada = 127 V ou 220 V.", fotoUrl: circuitoImg },
      { id: "potencia", capa: "POTÊNCIA", emoji: "💪", cor: "from-red-500 to-rose-700", conteudo: "Energia consumida por segundo. P = V · I. Medida em WATT (W).", exemplo: "Ex.: LED 10 W; chuveiro 5.500 W.", fotoUrl: circuitoImg },
      { id: "circuito", capa: "CIRCUITO", emoji: "🔁", cor: "from-sky-500 to-cyan-700", conteudo: "Caminho FECHADO onde a corrente circula. Precisa de fonte, condutores e componentes.", exemplo: "Ex.: pilha + fio + LED + interruptor.", fotoUrl: circuitoImg },
      { id: "renovavel", capa: "FONTE RENOVÁVEL", emoji: "🌞", cor: "from-emerald-500 to-teal-700", conteudo: "Fonte de energia que se REPÕE naturalmente e polui pouco. Solar, eólica, hidrelétrica, biomassa.", exemplo: "Ex.: painel solar transforma luz em eletricidade.", fotoUrl: painelImg },
    ],
    falaFinal:
      "Corrente, tensão, potência, circuito, renovável. Vocabulário do engenheiro.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Circuito real na bancada. Toque em cada componente.",
    instrucao: "Toque nos componentes",
    mapaUrl: circuitoImg,
    pontos: [
      { id: "bateria", x: 22, y: 55, emoji: "🔋", cor: "from-red-500 to-rose-700", titulo: "Bateria (fonte)", texto: "Fornece a TENSÃO — a energia que empurra os elétrons. Tem polo positivo (+) e negativo (−).", fotoUrl: circuitoImg },
      { id: "fio", x: 50, y: 30, emoji: "➰", cor: "from-amber-500 to-orange-700", titulo: "Fio condutor", texto: "Caminho por onde os elétrons circulam. Cobre é ótimo condutor.", fotoUrl: circuitoImg },
      { id: "led", x: 62, y: 50, emoji: "💡", cor: "from-yellow-500 to-amber-700", titulo: "LED (carga)", texto: "Componente que CONSOME energia — aqui, transforma em luz. Outras cargas: motor, resistência, alto-falante.", fotoUrl: circuitoImg },
      { id: "interruptor", x: 78, y: 70, emoji: "🔘", cor: "from-slate-500 to-slate-700", titulo: "Interruptor", texto: "Abre ou fecha o circuito. Aberto = sem corrente; fechado = corrente flui.", fotoUrl: circuitoImg },
    ],
    falaFinal:
      "Todo circuito tem fonte, condutor, carga e (idealmente) um controle.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "A UNIDADE de potência elétrica é...", fotoUrl: circuitoImg,
        cards: [
          { id: "a", emoji: "💪", titulo: "Watt (W)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔌", titulo: "Volt (V)", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "⚡", titulo: "Ampère (A)", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Watt. Volt = tensão. Ampère = corrente.",
        feedbackErro: "Tensão = V. Corrente = A. POTÊNCIA = W (Watt)." },
      { id: "q2", pergunta: "Qual dessas fontes é RENOVÁVEL?", fotoUrl: painelImg,
        cards: [
          { id: "a", emoji: "🌞", titulo: "Solar fotovoltaica", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🛢️", titulo: "Petróleo", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "⚫", titulo: "Carvão mineral", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Sol se renova todo dia. Petróleo e carvão levam milhões de anos para se formar.",
        feedbackErro: "Petróleo e carvão são FÓSSEIS — não se renovam. Solar SIM." },
      { id: "q3", pergunta: "Para calcular o CONSUMO de energia em kWh:", fotoUrl: circuitoImg,
        cards: [
          { id: "a", emoji: "🧮", titulo: "Potência (kW) × tempo (h)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔌", titulo: "Só a tensão em volts", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "📅", titulo: "Só o número de dias do mês", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. É assim que a conta de luz calcula.",
        feedbackErro: "Consumo (kWh) = POTÊNCIA em kW × TEMPO em horas." },
    ],
    falaFinal:
      "Watt = potência. Solar = renovável. kWh = kW × h.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "As fontes de energia se dividem em duas famílias. Toque nos interruptores.",
    instrucao: "Toque nos interruptores",
    mapaUrl: painelImg,
    camadas: [
      { id: "fosseis", rotulo: "Fósseis (Não-renováveis)", emoji: "🛢️", cor: "from-slate-500 to-slate-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Petróleo, carvão, gás natural. Emitem CO₂ (aquecimento global). Reserva finita.", fotoUrl: circuitoImg },
      { id: "renovaveis", rotulo: "Renováveis", emoji: "🌞", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Solar, eólica, hidrelétrica, biomassa, geotérmica. Reposição natural. Baixa emissão de CO₂.", fotoUrl: painelImg },
    ],
    falaFinal:
      "O futuro sustentável exige migrar dos fósseis para as renováveis.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene o CAMINHO DA ENERGIA — da usina até a lâmpada da sua casa.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Da geração ao uso:",
    paradas: [
      { id: "usina", emoji: "🏭", rotulo: "1. Usina geradora", descricao: "Hidrelétrica, solar, eólica, térmica.", fotoUrl: painelImg },
      { id: "transmissao", emoji: "⚡", rotulo: "2. Linhas de transmissão", descricao: "Torres de alta tensão levam energia por centenas de km.", fotoUrl: circuitoImg },
      { id: "subestacao", emoji: "🏢", rotulo: "3. Subestação", descricao: "Reduz a tensão para valores seguros.", fotoUrl: circuitoImg },
      { id: "distribuicao", emoji: "🏘️", rotulo: "4. Rede de distribuição", descricao: "Postes na rua até o transformador.", fotoUrl: circuitoImg },
      { id: "casa", emoji: "💡", rotulo: "5. Sua casa", descricao: "Medidor, disjuntor, tomadas e aparelhos.", fotoUrl: circuitoImg },
    ],
    ordemCerta: ["usina", "transmissao", "subestacao", "distribuicao", "casa"],
    feedbackAcerto:
      "Perfeito. Cinco etapas: usina → linhas → subestação → distribuição → casa.",
    feedbackErro:
      "Sempre da usina para a casa: gerar → transportar em alta tensão → reduzir → distribuir → consumir.",
    falaFinal:
      "Toda tomada é o fim de uma jornada de centenas de quilômetros.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Estudo de caso: casa sustentável.",
    tituloLivro: "📓 Projeto · Casa com Painéis Solares",
    subtitulo: "Como reduzir a conta de luz e emitir menos CO₂",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: uma família consome 400 kWh por mês. A tarifa é R$ 0,80 por kWh. A conta mensal fica em R$ 320. Além do custo, a geração termelétrica libera CO₂ (aquecimento global). Como reduzir?", chaves: ["termelétrica"], definicoes: { termelétrica: "Usina que queima combustível fóssil para gerar eletricidade." }, fotoUrl: circuitoImg },
      { id: "p2", texto: "SOLUÇÃO: instalar 8 PAINÉIS SOLARES no telhado. Cada painel gera cerca de 55 kWh/mês. Em dias de sol, os painéis alimentam a casa E o excedente vai para a rede (crédito na conta).", chaves: ["painéis solares"], definicoes: { "painéis solares": "Dispositivos fotovoltaicos que convertem luz em eletricidade." }, fotoUrl: painelImg },
      { id: "p3", texto: "RESULTADO: a família passa a gerar quase toda a energia que consome. Conta cai para menos de R$ 50. Investimento inicial se paga em ~5 anos. Reduz cerca de 3 toneladas de CO₂ por ano — o equivalente a plantar 20 árvores.", chaves: ["CO₂"], definicoes: { "CO₂": "Gás carbônico, principal responsável pelo aquecimento global." }, fotoUrl: painelImg },
    ],
    falaFinal:
      "Sustentabilidade começa em casa — com engenharia e escolhas conscientes.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio: fonte renovável, fóssil ou nuclear?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "renovavel", emoji: "🌞", rotulo: "Renovável" },
      { id: "fossil", emoji: "🛢️", rotulo: "Fóssil" },
      { id: "nuclear", emoji: "☢️", rotulo: "Nuclear" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Usina eólica", emoji: "🌬️", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Turbinas movidas pelo vento", emoji: "🎐", cor: "from-emerald-500 to-teal-700" }, contexto: "Aproveita vento contínuo.", pecaCertaId: "renovavel", fotoUrl: painelImg, feedbackAcerto: "Renovável. Vento não acaba.", feedbackErro: "Vento se renova sempre. RENOVÁVEL." },
      { id: "r2", municipioA: { nome: "Termelétrica a carvão", emoji: "⚫", cor: "from-slate-500 to-slate-700" }, municipioB: { nome: "Queima combustível", emoji: "🔥", cor: "from-red-500 to-rose-700" }, contexto: "Emite CO₂ na atmosfera.", pecaCertaId: "fossil", fotoUrl: circuitoImg, feedbackAcerto: "Fóssil. Carvão levou milhões de anos.", feedbackErro: "Carvão é FÓSSIL — não se renova em nossa escala de tempo." },
      { id: "r3", municipioA: { nome: "Angra 1 e 2", emoji: "☢️", cor: "from-amber-500 to-yellow-700" }, municipioB: { nome: "Fissão de urânio", emoji: "⚛️", cor: "from-red-500 to-rose-700" }, contexto: "Reator gera calor e vapor.", pecaCertaId: "nuclear", fotoUrl: circuitoImg, feedbackAcerto: "Nuclear. Baixo CO₂, mas gera lixo radioativo.", feedbackErro: "Urânio + fissão = NUCLEAR." },
      { id: "r4", municipioA: { nome: "Painel fotovoltaico", emoji: "🌞", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Luz → eletricidade", emoji: "💡", cor: "from-amber-500 to-yellow-700" }, contexto: "No telhado de uma casa.", pecaCertaId: "renovavel", fotoUrl: painelImg, feedbackAcerto: "Renovável. Sol se renova todo dia.", feedbackErro: "Solar SEMPRE é renovável." },
    ],
    falaFinal:
      "Você já classifica todo tipo de fonte de energia.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Energia e tecnologia se organizam em dois eixos: GERAÇÃO (de onde vem) e USO (como consumimos).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: circuitoImg,
    fatias: [
      { id: "geracao", rotulo: "Geração", emoji: "🏭", percentual: 50, cor: "#eab308", descricao: "Como produzimos eletricidade: hidro, solar, eólica, térmica, nuclear. Prioridade: renováveis + baixo CO₂.", exemplos: ["Painel solar", "Hidrelétrica", "Termelétrica"], fotoUrl: painelImg },
      { id: "uso", rotulo: "Uso Consciente", emoji: "💡", percentual: 50, cor: "#10b981", descricao: "Como consumimos: aparelhos eficientes, LED, evitar desperdício, monitorar kWh na conta.", exemplos: ["LED", "Selo Procel", "Banho curto"], fotoUrl: circuitoImg },
    ],
    falaFinal:
      "Geração limpa + uso consciente = sustentabilidade. Fim do Setor 5.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Setor 5. Responda 3 perguntas para sua Certificação de Engenheiro Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: circuitoImg,
    perguntas: [
      { id: "q1", pergunta: "O que é POTÊNCIA elétrica?", fotoUrl: circuitoImg,
        opcoes: [
          { id: "a", texto: "Energia consumida por unidade de tempo, medida em Watts", correta: true },
          { id: "b", texto: "A quantidade de fios em um aparelho" },
        ],
        feedbackAcerto: "Correto. P = V · I, medida em Watt.",
        feedbackErro: "Potência é energia por tempo, em WATTS. Não é número de fios." },
      { id: "q2", pergunta: "Uma lâmpada de 100 W ligada por 10 horas consome...", fotoUrl: circuitoImg,
        opcoes: [
          { id: "a", texto: "1 kWh (100 W × 10 h = 1.000 Wh = 1 kWh)", correta: true },
          { id: "b", texto: "10 kWh" },
        ],
        feedbackAcerto: "Perfeito. 100 W × 10 h = 1.000 Wh = 1 kWh.",
        feedbackErro: "Cuidado com a unidade: 100 W = 0,1 kW. 0,1 × 10 = 1 kWh." },
      { id: "q3", pergunta: "Por que priorizar fontes RENOVÁVEIS?", fotoUrl: painelImg,
        opcoes: [
          { id: "a", texto: "Emitem menos CO₂ e não se esgotam na natureza", correta: true },
          { id: "b", texto: "São mais bonitas" },
        ],
        feedbackAcerto: "Sim. Reduzem aquecimento global e garantem energia para o futuro.",
        feedbackErro: "Não é estética — é IMPACTO. Menos CO₂ e recurso inesgotável." },
    ],
    selo: { nome: "Certificação · Engenheiro Júnior", subtitulo: "Setor 5 · Energia e Tecnologia", emoji: "⚡", cor: "from-yellow-500 to-amber-700" },
    falaFinal:
      "Setor 5 CONCLUÍDO. Próximo: Observatório Planetário.",
  },
};
