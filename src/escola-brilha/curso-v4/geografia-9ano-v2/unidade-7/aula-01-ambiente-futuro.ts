import type { AulaGeoV1 } from "../../types";
import eolica from "@/assets/geografia-9ano/eolica-oceano.jpg";
import ia from "@/assets/geografia-9ano/ia-datacenter.jpg";
import plastico from "@/assets/geografia-9ano/plastico-oceano.jpg";
import cidade from "@/assets/geografia-9ano/cidade-inteligente.jpg";

/**
 * Geografia · 9º Ano · Unidade 7 · Aula 01
 * "Meio Ambiente, Tecnologia e Futuro" — BNCC EF09GE17, EF09GE18
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-ambiente-futuro",
  titulo: "Meio Ambiente, Tecnologia e Futuro",
  iconeTrilha: "🌱",
  bncc: ["EF09GE17", "EF09GE18"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: eolica,
    imagemDestaqueUrl: eolica,
    aurora:
      "O planeta esquentou 1,2°C desde 1850. O CO₂ na atmosfera está no maior nível em 3 milhões de anos. Mas há resposta: em 2024, 30% da eletricidade mundial já veio de FONTES RENOVÁVEIS (eólica, solar, hidrelétrica). A INTELIGÊNCIA ARTIFICIAL virou nova fronteira — data centers consomem 4% da energia mundial. Enquanto isso, 8 milhões de toneladas de PLÁSTICO vão parar no oceano por ano. E as CIDADES INTELIGENTES são a promessa de futuro. Você vai herdar tudo isso.",
    falaFinal: "Clima, IA, plástico, cidade smart. O planeta em 2050 é seu problema.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: em quantos GRAUS o planeta já esquentou desde 1850?",
    pergunta: "Quanto o planeta aqueceu desde a Revolução Industrial?",
    opcoes: [
      { id: "01", titulo: "0,1°C — quase nada", subtitulo: "insignificante", emoji: "🌡️", cor: "from-blue-800 to-slate-950" },
      { id: "12", titulo: "1,2°C — significativo", subtitulo: "e acelerando", emoji: "🔥", cor: "from-red-800 to-slate-950" },
    ],
    respostaCerta: "12",
    feedbackAcerto:
      "Exato! 1,2°C desde 1850 — parece pouco, mas é gigante. Se passar de 1,5°C (previsto pra 2035), a Amazônia pode virar savana e recifes de coral morrem.",
    feedbackErro:
      "Não. Já subiu 1,2°C, não 0,1°C. Cada 0,1°C é catastrófico em escala planetária. A meta é ficar abaixo de 1,5°C.",
    falaFinal: "1,2°C = catástrofe em curso. Meta: parar em 1,5°C.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave do futuro. Explicação + exemplo real + curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "aq",
        capa: "1. Aquecimento global",
        emoji: "🌡️",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "AQUECIMENTO GLOBAL é o aumento da temperatura média do planeta causado pela emissão de GASES DE EFEITO ESTUFA (CO₂, metano). Queima de combustíveis fósseis (carvão, petróleo, gás) é a principal fonte. Consequências: derretimento de gelo, subida do mar, extremos climáticos.",
        exemplo:
          "Curiosidade: 2023 foi o ano MAIS QUENTE já registrado. E 2024 bateu esse recorde. Os 10 anos mais quentes da história foram TODOS depois de 2015. Não é ciclo natural — é acelerado pela ação humana desde a Revolução Industrial.",
        fotoUrl: eolica,
      },
      {
        id: "ren",
        capa: "2. Energias renováveis",
        emoji: "🌞",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "ENERGIAS RENOVÁVEIS vêm de fontes que não se esgotam: SOL (fotovoltaica), VENTO (eólica), ÁGUA (hidrelétrica), BIOMASSA e geotérmica. Não emitem CO₂. Em 2024, geraram 30% da eletricidade mundial. O Brasil é campeão: 85% da nossa eletricidade é renovável.",
        exemplo:
          "Curiosidade: a China é o maior produtor de painéis solares do mundo — faz 80% dos painéis do planeta. E instalou em 2023 mais capacidade solar do que todos os EUA acumularam em 30 anos. A transição energética acontece a passos gigantes.",
        fotoUrl: eolica,
      },
      {
        id: "ia",
        capa: "3. Inteligência Artificial",
        emoji: "🤖",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "INTELIGÊNCIA ARTIFICIAL (IA) são sistemas que imitam raciocínio humano: ChatGPT, tradutores, carros autônomos, diagnósticos médicos. Rodam em DATA CENTERS — prédios cheios de computadores que consomem 4% da eletricidade mundial (mais que a Itália inteira).",
        exemplo:
          "Curiosidade: treinar o GPT-4 (base do ChatGPT) consumiu mais energia que 100 CASAS em 100 anos. E gerou tanto CO₂ quanto 300 voos SP–Nova York. Cada pergunta que você faz ao ChatGPT usa 10x mais energia que uma busca no Google.",
        fotoUrl: ia,
      },
      {
        id: "pla",
        capa: "4. Plástico no oceano",
        emoji: "🐢",
        cor: "from-slate-700 to-slate-950",
        conteudo:
          "8 MILHÕES de toneladas de PLÁSTICO chegam ao oceano por ano. Mata 1 milhão de aves e 100 mil animais marinhos anualmente. Existe uma 'ilha' de plástico no Pacífico com 1,6 milhão de km² — 3x o tamanho da França.",
        exemplo:
          "Curiosidade: um estudo de 2023 encontrou MICROPLÁSTICO no sangue de 80% das pessoas testadas. Você come em média o equivalente a um CARTÃO DE CRÉDITO em plástico por semana — por água engarrafada, peixe, sal. É invisível, mas está em todo lugar.",
        fotoUrl: plastico,
      },
    ],
    falaFinal: "Aquecimento, renováveis, IA, plástico. 4 palavras = seu futuro.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 forças que moldam o futuro. Toque em cada card pra ver a imagem e ouvir.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: cidade,
    pontos: [
      { id: "eol", x: 20, y: 30, emoji: "🌬️", cor: "from-emerald-800 to-slate-950",
        titulo: "Eólica offshore",
        texto: "Turbinas no oceano geram energia limpa 24 horas. Dinamarca, Reino Unido, China lideram. O Brasil começou em 2024 no Ceará.",
        fotoUrl: eolica },
      { id: "ia", x: 55, y: 40, emoji: "🤖", cor: "from-sky-800 to-slate-950",
        titulo: "IA — nova revolução",
        texto: "ChatGPT, tradutores, carros autônomos. Data centers consomem 4% da eletricidade mundial. Vai transformar TODOS os empregos.",
        fotoUrl: ia },
      { id: "pla", x: 30, y: 70, emoji: "🐢", cor: "from-slate-700 to-slate-950",
        titulo: "Plástico no oceano",
        texto: "8 mi de toneladas por ano. Ilha de plástico 3x maior que a França. Microplástico no sangue humano.",
        fotoUrl: plastico },
      { id: "cid", x: 70, y: 75, emoji: "🏙️", cor: "from-green-800 to-slate-950",
        titulo: "Cidade inteligente",
        texto: "Cingapura, Copenhague, Songdo. Sensores, IA, transporte elétrico, arquitetura verde. O modelo do futuro.",
        fotoUrl: cidade },
    ],
    falaFinal: "Eólica, IA, plástico, smart city. 4 forças = 2050.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de futurista pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual é o principal GÁS causador do aquecimento global?",
        fotoUrl: eolica,
        cards: [
          { id: "a", emoji: "💨", titulo: "CO₂ (dióxido de carbono)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌫️", titulo: "Oxigênio (O₂)", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "💧", titulo: "Vapor d'água", cor: "from-slate-700 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. CO₂ da queima de combustíveis fósseis é o principal.",
        feedbackErro: "É o CO₂. O oxigênio é o que respiramos; vapor d'água é natural." },
      { id: "q2", pergunta: "Quanto por cento da eletricidade mundial já vem de fontes renováveis?",
        fotoUrl: eolica,
        cards: [
          { id: "a", emoji: "🌞", titulo: "Cerca de 30% (2024)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "1️⃣", titulo: "Só 1%", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "💯", titulo: "100%", cor: "from-slate-700 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 30% em 2024 — subiu de 20% em 2010. Cresce rápido.",
        feedbackErro: "É 30%. Não é 100% (ainda) nem só 1%. Cresce rápido, especialmente na China." },
      { id: "q3", pergunta: "Quantas toneladas de plástico vão parar no oceano por ano?",
        fotoUrl: plastico,
        cards: [
          { id: "a", emoji: "🐢", titulo: "8 milhões", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🥤", titulo: "8 mil", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🔢", titulo: "8 bilhões", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 8 MILHÕES por ano — equivalente a um caminhão de lixo por minuto.",
        feedbackErro: "São 8 MILHÕES. Um caminhão de lixo por minuto sendo jogado no mar." },
      { id: "q4", pergunta: "Quanto por cento da eletricidade mundial os DATA CENTERS de IA consomem?",
        fotoUrl: ia,
        cards: [
          { id: "a", emoji: "💻", titulo: "Cerca de 4%", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🔋", titulo: "0,001%", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "⚡", titulo: "Cerca de 90%", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 4% — mais que a Itália inteira. Vai dobrar até 2030.",
        feedbackErro: "É 4% — e subindo rápido. Mais que muitos países consomem." },
    ],
    falaFinal: "4 acertos = futurista iniciante.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil é potência em energia limpa. Os 3 estados que mais geram ENERGIA EÓLICA (turbinas de vento) são CE, RN e BA. Acenda os 3.",
    instrucao: "Acenda CE, RN e BA",
    missao: {
      tipo: "selecionar",
      siglas: ["CE", "RN", "BA"],
      pergunta: "Quais estados brasileiros lideram a energia eólica?",
    },
    falaFinal: "CE, RN e BA. O Nordeste gera 90% da nossa eólica — vento forte e constante.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize os 5 marcos ambientais e tecnológicos em ordem cronológica.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1972", emoji: "🌍", rotulo: "1. Conferência de Estocolmo (1972)",
        descricao: "1ª grande cúpula ambiental da ONU. Nasce a consciência ecológica global." },
      { id: "1992", emoji: "🌱", rotulo: "2. Rio-92 no Brasil (1992)",
        descricao: "Eco-92. 172 países criam Agenda 21 e convenção do clima." },
      { id: "2015", emoji: "📜", rotulo: "3. Acordo de Paris (2015)",
        descricao: "196 países se comprometem a limitar aquecimento a 1,5°C." },
      { id: "2022", emoji: "🤖", rotulo: "4. ChatGPT viraliza (2022)",
        descricao: "IA generativa vira mainstream. 100 milhões de usuários em 2 meses.", fotoUrl: ia },
      { id: "2023", emoji: "🌡️", rotulo: "5. Ano mais quente da história (2023)",
        descricao: "Temperatura média global bate recorde. Acordo de Paris em risco." },
    ],
    ordemCerta: ["1972", "1992", "2015", "2022", "2023"],
    feedbackAcerto: "Perfeito! 51 anos de história ambiental + tech em 5 marcos.",
    feedbackErro: "Estocolmo (1972), Rio-92, Paris (2015), ChatGPT (2022), recorde (2023).",
    falaFinal: "5 marcos = como fomos da consciência à urgência climática.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Planeta",
    subtitulo: "Capítulo 7 — Meio Ambiente, Tecnologia e Futuro",
    paragrafos: [
      { id: "p1",
        texto: "O AQUECIMENTO GLOBAL já elevou em 1,2°C a temperatura média do planeta. Causa: emissão de CO₂ da queima de COMBUSTÍVEIS FÓSSEIS. Se passar de 1,5°C, catástrofes viram permanentes.",
        chaves: ["AQUECIMENTO GLOBAL", "COMBUSTÍVEIS FÓSSEIS"],
        definicoes: {
          "AQUECIMENTO GLOBAL": "Aumento da temperatura média do planeta desde 1850. Já subiu 1,2°C. Meta do Acordo de Paris: não passar de 1,5°C.",
          "COMBUSTÍVEIS FÓSSEIS": "Carvão, petróleo e gás natural. Queimados, emitem CO₂. Responsáveis por 75% dos gases de efeito estufa.",
        },
        fotoUrl: eolica },
      { id: "p2",
        texto: "Em 2024, 30% da eletricidade mundial veio de ENERGIAS RENOVÁVEIS (SOLAR, EÓLICA, hidro). O Brasil chega a 85% — recorde mundial.",
        chaves: ["ENERGIAS RENOVÁVEIS", "SOLAR", "EÓLICA"],
        definicoes: {
          "ENERGIAS RENOVÁVEIS": "Fontes que não se esgotam: sol, vento, água, biomassa, geotérmica. Não emitem CO₂.",
          "SOLAR": "Painéis fotovoltaicos convertem luz em eletricidade. China faz 80% dos painéis do mundo.",
          "EÓLICA": "Turbinas convertem vento em eletricidade. Nordeste brasileiro é potência (CE, RN, BA).",
        },
        fotoUrl: eolica },
      { id: "p3",
        texto: "A INTELIGÊNCIA ARTIFICIAL (IA) é a nova revolução. Roda em DATA CENTERS que consomem 4% da eletricidade mundial. Vai transformar todos os empregos até 2035.",
        chaves: ["INTELIGÊNCIA ARTIFICIAL", "DATA CENTERS"],
        definicoes: {
          "INTELIGÊNCIA ARTIFICIAL": "Sistemas que imitam raciocínio humano. Exemplos: ChatGPT, tradutores, carros autônomos, diagnósticos.",
          "DATA CENTERS": "Prédios cheios de servidores que rodam IA e internet. Consomem 4% da eletricidade mundial (mais que a Itália).",
        },
        fotoUrl: ia },
      { id: "p4",
        texto: "8 milhões de toneladas de PLÁSTICO chegam ao oceano por ano. MICROPLÁSTICO já foi encontrado no sangue de 80% das pessoas. O futuro é reciclar mais ou ser envenenado.",
        chaves: ["PLÁSTICO", "MICROPLÁSTICO"],
        definicoes: {
          "PLÁSTICO": "Material feito de petróleo. Demora 500 anos para se decompor. 8 mi de toneladas vão ao mar por ano.",
          "MICROPLÁSTICO": "Fragmentos < 5mm. Encontrados em água, ar, sangue, cérebro. Impacto na saúde ainda em estudo.",
        },
        fotoUrl: plastico },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "aq", emoji: "", titulo: "Aquecimento global", cor: "from-slate-800 to-slate-900" },
      { id: "co2", emoji: "", titulo: "CO₂", cor: "from-slate-800 to-slate-900" },
      { id: "ren", emoji: "", titulo: "Renováveis", cor: "from-slate-800 to-slate-900" },
      { id: "ia", emoji: "", titulo: "Inteligência Artificial", cor: "from-slate-800 to-slate-900" },
      { id: "pla", emoji: "", titulo: "Plástico oceânico", cor: "from-slate-800 to-slate-900" },
      { id: "par", emoji: "", titulo: "Acordo de Paris", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito correto.",
      instrucao: "Escolha o correto",
      perguntas: [
        { id: "r1", pergunta: "Aumento de 1,2°C na temperatura média do planeta desde 1850.", cards, correta: "aq",
          feedbackAcerto: "Isso. 1,2°C = AQUECIMENTO GLOBAL.", feedbackErro: "É o AQUECIMENTO GLOBAL. Meta: parar em 1,5°C." },
        { id: "r2", pergunta: "Principal gás responsável pelo efeito estufa; vem da queima de combustíveis fósseis.", cards, correta: "co2",
          feedbackAcerto: "Isso. Gás do efeito estufa = CO₂.", feedbackErro: "É o CO₂ (dióxido de carbono). Responsável por 75% do efeito." },
        { id: "r3", pergunta: "Fontes de energia que não se esgotam: sol, vento, água, biomassa.", cards, correta: "ren",
          feedbackAcerto: "Isso. Não se esgotam = RENOVÁVEIS.", feedbackErro: "São as RENOVÁVEIS. Brasil = 85% da eletricidade." },
        { id: "r4", pergunta: "Sistemas como ChatGPT que consomem 4% da eletricidade mundial em data centers.", cards, correta: "ia",
          feedbackAcerto: "Isso. ChatGPT + data centers = IA.", feedbackErro: "É a IA. Vai dobrar consumo até 2030." },
        { id: "r5", pergunta: "8 milhões de toneladas por ano chegam ao mar; ilha 3x maior que a França no Pacífico.", cards, correta: "pla",
          feedbackAcerto: "Isso. 8 mi ton no mar = PLÁSTICO OCEÂNICO.", feedbackErro: "É o PLÁSTICO OCEÂNICO. 1 caminhão de lixo por minuto." },
        { id: "r6", pergunta: "Tratado climático de 2015 assinado por 196 países pra limitar aquecimento a 1,5°C.", cards, correta: "par",
          feedbackAcerto: "Isso. 2015 + 196 países = ACORDO DE PARIS.", feedbackErro: "É o ACORDO DE PARIS. Meta: limitar aquecimento a 1,5°C." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Futurista formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da matriz elétrica brasileira (2024): fontes de eletricidade do Brasil.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "ren", rotulo: "Renováveis (~85%)", emoji: "🌱", percentual: 85, cor: "#16a34a",
        descricao: "Hidrelétrica (55%), eólica (14%), solar (10%), biomassa (6%). Somos referência mundial.",
        exemplos: ["💧 Hidrelétrica", "🌬️ Eólica NE", "🌞 Solar"] },
      { id: "fos", rotulo: "Fósseis (~15%)", emoji: "🛢️", percentual: 15, cor: "#64748b",
        descricao: "Gás natural, carvão, óleo diesel. Usinas térmicas ligadas em anos secos.",
        exemplos: ["🔥 Gás natural", "⚡ Termelétrica", "🛢️ Diesel"] },
    ],
    falaFinal: "85% da eletricidade brasileira é limpa. Somos referência global.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Futurista.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Em quantos graus o planeta já esquentou desde 1850?",
        opcoes: [
          { id: "a", texto: "1,2°C", correta: true },
          { id: "b", texto: "0,1°C", correta: false },
          { id: "c", texto: "10°C", correta: false },
        ],
        feedbackAcerto: "Isso! 1,2°C — e acelerando.",
        feedbackErro: "É 1,2°C. Meta é ficar abaixo de 1,5°C." },
      { id: "av2", pergunta: "Quanto da eletricidade brasileira vem de fontes renováveis?",
        opcoes: [
          { id: "a", texto: "85%", correta: true },
          { id: "b", texto: "10%", correta: false },
          { id: "c", texto: "0%", correta: false },
        ],
        feedbackAcerto: "Isso! 85% — recorde mundial.",
        feedbackErro: "São 85%. O Brasil é referência global em matriz elétrica limpa." },
      { id: "av3", pergunta: "Quantas toneladas de plástico vão parar no oceano por ano?",
        opcoes: [
          { id: "a", texto: "8 milhões", correta: true },
          { id: "b", texto: "8 mil", correta: false },
          { id: "c", texto: "80 milhões", correta: false },
        ],
        feedbackAcerto: "Isso! 8 milhões — um caminhão de lixo por minuto.",
        feedbackErro: "São 8 MILHÕES. Um caminhão por minuto." },
    ],
    selo: { nome: "Futurista", subtitulo: "Insígnia do Explorador do Planeta", emoji: "🌱", cor: "from-emerald-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende o planeta que vai herdar.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Futurista" },
};
