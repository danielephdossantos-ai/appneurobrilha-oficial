import type { AulaGeoV1 } from "../../types";
import { url as commod } from "@/assets/geografia-7ano/commodities-agricolas.jpg.asset.json";
import { url as navio } from "@/assets/geografia-7ano/porto-container-brasil.jpg.asset.json";
import { url as brics } from "@/assets/geografia-7ano/brics-cupula.jpg.asset.json";
import { url as comercio } from "@/assets/geografia-7ano/mapa-mundi-comercio.jpg.asset.json";
/**
 * Geografia · 7º Ano · Unidade 7 · Aula 01
 * "Brasil no Mundo — Commodities e Geopolítica" — BNCC EF07GE07, EF07GE12
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-geopolitica-commodities",
  titulo: "Brasil no Mundo — Commodities e Geopolítica",
  iconeTrilha: "🌐",
  bncc: ["EF07GE07", "EF07GE12"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: brics,
    imagemDestaqueUrl: brics,
    aurora:
      "O Brasil é a 9ª maior economia do mundo. É um dos maiores produtores globais de SOJA (1º), MINÉRIO DE FERRO (2º), CAFÉ (1º), CARNE BOVINA (1º) e AÇÚCAR (1º). Mas TAMBÉM é um país que ainda depende MUITO de exportar COMMODITIES (matéria-prima crua) e importar produtos industrializados. Nossa balança comercial de 2023 foi 55% commodities. Isso nos coloca no BRICS (Brasil, Rússia, Índia, China, África do Sul, agora expandido) — grupo que busca alternativa à hegemonia dos EUA e Europa.",
    falaFinal: "9ª economia do mundo. 1ª em soja e carne. Mas ainda dependente de commodities.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta: qual país compra a MAIOR PARTE das exportações brasileiras hoje?",
    pergunta: "Maior parceiro comercial do Brasil:",
    opcoes: [
      { id: "chn", titulo: "CHINA (compra 30% do que exportamos)", subtitulo: "soja, minério, carne, petróleo", emoji: "🇨🇳", cor: "from-red-800 to-slate-950" },
      { id: "usa", titulo: "EUA (2º lugar)", subtitulo: "aviões, aço, café", emoji: "🇺🇸", cor: "from-sky-800 to-slate-950" },
    ],
    respostaCerta: "chn",
    feedbackAcerto:
      "Exato! CHINA compra 30% de tudo que o Brasil exporta. Basicamente: SOJA (pra alimentar 500 milhões de porcos), MINÉRIO DE FERRO (pra fazer aço), CARNE BOVINA e PETRÓLEO. EUA vem em 2º com só 11%.",
    feedbackErro:
      "EUA era o principal até 2009. Hoje é a CHINA (30% das exportações). Compra soja, minério, carne. Reviravolta gigante em 15 anos.",
    falaFinal: "Regra do séc. XXI: quando a China espirra, o PIB do Brasil pega gripe.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos da geopolítica brasileira. Cada card traz explicação, exemplo real e curiosidade.",
    instrucao: "",
    cadernos: [
      { id: "com", capa: "1. Commodities", emoji: "🌾", cor: "from-amber-800 to-orange-950",
        conteudo: "COMMODITIES são matérias-primas EM ESTADO BRUTO — soja em grão, minério de ferro, petróleo, café. Ao contrário de PRODUTOS INDUSTRIALIZADOS (celular, carro), commodities têm preço definido pelo mercado global.",
        exemplo: "Curiosidade: o Brasil exporta soja EM GRÃO, mas importa MARGARINA. Exporta minério de ferro, mas importa AÇO. Essa é a maldição do país exportador de commodities: vende barato, compra caro. Quem processa (industrializa) fica com a maior parte do lucro.",
        fotoUrl: commod },
      { id: "bal", capa: "2. Balança comercial", emoji: "⚖️", cor: "from-emerald-800 to-slate-950",
        conteudo: "BALANÇA COMERCIAL é a diferença entre o que um país EXPORTA e o que IMPORTA. Se exporta mais que importa: SUPERÁVIT (positivo). Se importa mais: DÉFICIT (negativo). Brasil teve superávit recorde em 2023: US$ 99 bilhões.",
        exemplo: "Curiosidade: 55% desse superávit veio de apenas 3 commodities: soja, minério de ferro e petróleo. Se caísse o preço internacional desses 3 produtos, o Brasil teria déficit imediato.",
        fotoUrl: navio },
      { id: "brics", capa: "3. BRICS", emoji: "🌍", cor: "from-sky-800 to-slate-950",
        conteudo: "BRICS é um bloco geopolítico formado originalmente por Brasil, Rússia, Índia, China e África do Sul. Em 2024 expandiu com Egito, Etiópia, Irã, EAU. Busca uma alternativa multipolar ao domínio ocidental (EUA + Europa).",
        exemplo: "Curiosidade: BRICS somados têm 45% da população mundial e 35% do PIB global. Criaram um banco próprio (NDB — Novo Banco de Desenvolvimento) e discutem usar moeda alternativa ao dólar para o comércio entre eles.",
        fotoUrl: brics },
      { id: "reind", capa: "4. Reindustrialização", emoji: "🏭", cor: "from-red-800 to-slate-950",
        conteudo: "REINDUSTRIALIZAÇÃO é o esforço para AUMENTAR a produção industrial de um país que se DESINDUSTRIALIZOU. O Brasil tinha 27% do PIB vindo da indústria em 1985; hoje só 11%. Perdemos indústrias pra China e outros países asiáticos.",
        exemplo: "Curiosidade: quando um país se desindustrializa, VIRA exportador de commodities de novo. Economistas chamam isso de 'REPRIMARIZAÇÃO' (voltar a ser primário/agrícola). O Brasil está passando por isso desde os anos 90.",
        fotoUrl: comercio },
    ],
    falaFinal: "Commodities, balança, BRICS, reindustrialização. 4 conceitos que definem o lugar do Brasil no mundo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Cada card é um POSICIONAMENTO do Brasil no mundo. Toque em cada um pra ver a foto real.",
    instrucao: "Toque nos 4 cards pra ouvir cada posição",
    mapaUrl: comercio,
    pontos: [
      { id: "prim", x: 20, y: 30, emoji: "🌾", cor: "from-amber-800 to-orange-950",
        titulo: "1º MUNDIAL — Soja, café, carne, açúcar",
        texto: "Brasil lidera a produção mundial de soja, café, carne bovina, açúcar e frango. Somos o 'CELEIRO DO MUNDO' — alimentamos 1 bilhão de pessoas por ano.",
        fotoUrl: commod },
      { id: "min", x: 55, y: 45, emoji: "⛰️", cor: "from-slate-700 to-slate-950",
        titulo: "2º MUNDIAL — Minério de ferro",
        texto: "Vale é a 2ª maior mineradora do mundo. Minério brasileiro vai principalmente pra China fazer aço. Único produto onde perdemos só pra Austrália.",
        fotoUrl: navio },
      { id: "brics", x: 45, y: 60, emoji: "🌐", cor: "from-emerald-800 to-slate-950",
        titulo: "BRICS — Multipolaridade global",
        texto: "Brasil como fundador do bloco. Cúpulas anuais discutem alternativa ao dólar, banco próprio (NDB), agenda climática comum. Contrapeso à hegemonia dos EUA.",
        fotoUrl: brics },
      { id: "des", x: 70, y: 75, emoji: "📉", cor: "from-red-800 to-slate-950",
        titulo: "Desafio — Desindustrialização",
        texto: "Indústria caiu de 27% do PIB (1985) para 11% (2024). Perdemos setores inteiros pra China. Debate sobre REINDUSTRIALIZAÇÃO é central pra economia.",
        fotoUrl: comercio },
    ],
    falaFinal: "1º em comida, 2º em minério, membro do BRICS, mas desindustrializado. Retrato do Brasil.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de analista internacional.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Maior parceiro comercial do Brasil hoje:",
        fotoUrl: navio,
        cards: [
          { id: "a", emoji: "🇨🇳", titulo: "China (30% das exportações)", cor: "from-red-800 to-slate-950" },
          { id: "b", emoji: "🇺🇸", titulo: "EUA", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🇦🇷", titulo: "Argentina", cor: "from-amber-800 to-orange-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! CHINA — 30% das exportações. Superou os EUA em 2009.",
        feedbackErro: "EUA era o 1º até 2009. Argentina é secundário. Hoje é a CHINA (30%)." },
      { id: "q2", pergunta: "COMMODITIES são:",
        fotoUrl: commod,
        cards: [
          { id: "a", emoji: "🌾", titulo: "Matérias-primas em estado bruto", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "📱", titulo: "Produtos tecnológicos", cor: "from-amber-800 to-orange-950" },
          { id: "c", emoji: "💊", titulo: "Medicamentos patenteados", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! Matérias-primas SEM processamento: soja, minério, petróleo, café.",
        feedbackErro: "Tecnologia e remédios são INDUSTRIALIZADOS. Commodities são MATÉRIAS-PRIMAS cruas." },
      { id: "q3", pergunta: "O que significa a sigla BRICS:",
        fotoUrl: brics,
        cards: [
          { id: "a", emoji: "🌍", titulo: "Brasil, Rússia, Índia, China, África do Sul", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇪🇺", titulo: "Bloco só de países europeus", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🏛️", titulo: "Órgão da ONU", cor: "from-amber-800 to-orange-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! BRICS: BRASIL, RÚSSIA, ÍNDIA, CHINA, ÁFRICA DO SUL.",
        feedbackErro: "Não é europeu nem ONU. É o bloco de 5 países emergentes (agora 9 com a expansão)." },
      { id: "q4", pergunta: "% do PIB brasileiro que vem da INDÚSTRIA hoje:",
        fotoUrl: comercio,
        cards: [
          { id: "a", emoji: "📉", titulo: "11% (caiu de 27% em 1985)", cor: "from-red-800 to-slate-950" },
          { id: "b", emoji: "📈", titulo: "50% (crescente)", cor: "from-emerald-800 to-slate-950" },
          { id: "c", emoji: "🏭", titulo: "80% (Brasil é industrial)", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! Só 11% — DESINDUSTRIALIZAÇÃO histórica.",
        feedbackErro: "Estamos DESINDUSTRIALIZANDO desde 1985. Caiu de 27% pra 11% do PIB." },
    ],
    falaFinal: "4 acertos = analista de comércio internacional em formação.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "As commodities brasileiras vêm de estados específicos. Marque os 4 estados líderes: SOJA (MT), MINÉRIO (MG), PETRÓLEO (RJ), CAFÉ (MG bônus... aqui use ES).",
    instrucao: "Acenda os 4 estados de commodities",
    missao: {
      tipo: "selecionar",
      siglas: ["MT", "MG", "RJ", "ES"],
      pergunta: "Quais estados lideram commodities de exportação?",
    },
    falaFinal:
      "MT (soja), MG (minério + café), RJ (petróleo), ES (café + minério). O ranking das commodities brasileiras.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como o Brasil se transforma em POTÊNCIA de commodities? Organize a trajetória.",
    instrucao: "Toque na ordem",
    pergunta: "Do Brasil colônia à potência agrícola:",
    paradas: [
      { id: "1", emoji: "🌾", rotulo: "1. Brasil colônia (1500-1822)",
        descricao: "Pau-brasil, açúcar, ouro, café. Brasil como fornecedor de matéria-prima pra Europa." },
      { id: "2", emoji: "🏭", rotulo: "2. Industrialização (1930-1980)",
        descricao: "Vargas, JK, Milagre Econômico. Indústria chega a 27% do PIB." },
      { id: "3", emoji: "📉", rotulo: "3. Desindustrialização (1985-hoje)",
        descricao: "China vira 'fábrica do mundo'. Brasil perde indústrias, volta pra commodities." },
      { id: "4", emoji: "🚢", rotulo: "4. Commodities boom (2000-hoje)",
        descricao: "China compra soja, minério, petróleo. Brasil vira potência agrícola global.", fotoUrl: navio },
      { id: "5", emoji: "🌐", rotulo: "5. BRICS + multipolaridade",
        descricao: "Brasil integra bloco alternativo. Discute moeda comum, banco próprio, geopolítica sem EUA.", fotoUrl: brics },
    ],
    ordemCerta: ["1", "2", "3", "4", "5"],
    feedbackAcerto: "Perfeito! 500 anos entre colônia, indústria e commodities.",
    feedbackErro: "Comece no Brasil colônia. Depois indústria, desindustrialização, commodities boom, BRICS.",
    falaFinal: "5 etapas. Uma história cíclica: da matéria-prima à indústria, e de volta à matéria-prima.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Brasil",
    subtitulo: "Capítulo 7 — Brasil no Mundo",
    paragrafos: [
      { id: "p1",
        texto: "O Brasil é o MAIOR exportador mundial de COMMODITIES agrícolas: soja, café, carne, açúcar e frango. Alimentamos 1 bilhão de pessoas.",
        chaves: ["COMMODITIES"],
        definicoes: {
          "COMMODITIES": "Matérias-primas em estado bruto com preço definido pelo mercado global. Brasil exporta principalmente commodities.",
        },
        fotoUrl: commod,
      },
      { id: "p2",
        texto: "A CHINA é hoje nosso maior parceiro comercial — compra 30% de tudo que exportamos. EUA vem em 2º com 11%. A BALANÇA COMERCIAL brasileira teve superávit recorde em 2023: US$ 99 bi.",
        chaves: ["CHINA", "BALANÇA COMERCIAL"],
        definicoes: {
          "CHINA": "Maior importadora de soja, minério de ferro e carne bovina do Brasil. Superou os EUA em 2009.",
          "BALANÇA COMERCIAL": "Diferença entre exportações e importações. Superávit = positivo; Déficit = negativo.",
        },
        fotoUrl: navio,
      },
      { id: "p3",
        texto: "O BRICS reúne Brasil, Rússia, Índia, China, África do Sul e novos membros. É um contrapeso geopolítico à HEGEMONIA dos EUA e Europa.",
        chaves: ["BRICS", "HEGEMONIA"],
        definicoes: {
          "BRICS": "Bloco geopolítico multipolar. 45% da população mundial, 35% do PIB global. Banco próprio (NDB).",
          "HEGEMONIA": "Domínio de um país ou grupo sobre os demais. EUA + Europa dominaram desde 1945.",
        },
        fotoUrl: brics,
      },
      { id: "p4",
        texto: "O Brasil passa por DESINDUSTRIALIZAÇÃO. Indústria caiu de 27% (1985) para 11% do PIB (2024). Debate atual: REINDUSTRIALIZAÇÃO ou aceitar ser potência agrícola?",
        chaves: ["DESINDUSTRIALIZAÇÃO", "REINDUSTRIALIZAÇÃO"],
        definicoes: {
          "DESINDUSTRIALIZAÇÃO": "Queda da participação da indústria na economia. Brasil perde fábricas pra Ásia.",
          "REINDUSTRIALIZAÇÃO": "Esforço para recuperar a indústria nacional. Debate atual do governo brasileiro.",
        },
        fotoUrl: comercio,
      },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "com", emoji: "", titulo: "Commodities", cor: "from-slate-800 to-slate-900" },
      { id: "bal", emoji: "", titulo: "Balança comercial", cor: "from-slate-800 to-slate-900" },
      { id: "brics", emoji: "", titulo: "BRICS", cor: "from-slate-800 to-slate-900" },
      { id: "reind", emoji: "", titulo: "Reindustrialização", cor: "from-slate-800 to-slate-900" },
      { id: "chn", emoji: "", titulo: "China", cor: "from-slate-800 to-slate-900" },
      { id: "des", emoji: "", titulo: "Desindustrialização", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito correto.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Matérias-primas em estado bruto (soja, minério, petróleo) com preço definido pelo mercado global.", cards, correta: "com",
          feedbackAcerto: "Isso. Matéria-prima crua = COMMODITIES.", feedbackErro: "São COMMODITIES. Brasil é o maior exportador do mundo em várias." },
        { id: "r2", pergunta: "Diferença entre o que um país exporta e o que importa.", cards, correta: "bal",
          feedbackAcerto: "Isso. Exportação − Importação = BALANÇA COMERCIAL.", feedbackErro: "É a BALANÇA COMERCIAL. Se positiva: superávit; se negativa: déficit." },
        { id: "r3", pergunta: "Bloco geopolítico com Brasil, Rússia, Índia, China e África do Sul.", cards, correta: "brics",
          feedbackAcerto: "Isso. 5 emergentes = BRICS.", feedbackErro: "É o BRICS. Bloco multipolar alternativo ao G7." },
        { id: "r4", pergunta: "Maior parceiro comercial do Brasil hoje — compra 30% de tudo que exportamos.", cards, correta: "chn",
          feedbackAcerto: "Isso. Maior comprador = CHINA.", feedbackErro: "É a CHINA. Superou os EUA em 2009." },
        { id: "r5", pergunta: "Queda da participação da indústria na economia — Brasil caiu de 27% (1985) pra 11% (2024).", cards, correta: "des",
          feedbackAcerto: "Isso. Queda da indústria = DESINDUSTRIALIZAÇÃO.", feedbackErro: "É a DESINDUSTRIALIZAÇÃO. Chinesa nos tirou várias fábricas." },
        { id: "r6", pergunta: "Esforço governamental para recuperar a indústria nacional após décadas de desindustrialização.", cards, correta: "reind",
          feedbackAcerto: "Isso. Recuperar indústria = REINDUSTRIALIZAÇÃO.", feedbackErro: "É a REINDUSTRIALIZAÇÃO. Debate atual do governo brasileiro." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Analista de geopolítica formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da balança comercial brasileira (2023): commodities × industrializados.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "com", rotulo: "Commodities (55%)", emoji: "🌾", percentual: 55, cor: "#b45309",
        descricao: "Soja, minério de ferro, petróleo, carne, café, açúcar. Vendidos crus.",
        exemplos: ["🌱 Soja", "⛰️ Minério", "🛢️ Petróleo"] },
      { id: "ind", rotulo: "Industrializados (45%)", emoji: "🏭", percentual: 45, cor: "#0284c7",
        descricao: "Aviões (Embraer), veículos, celulose, açúcar refinado, químicos. % ainda cadente.",
        exemplos: ["✈️ Embraer", "🚗 Veículos", "🧴 Papel/Celulose"] },
    ],
    falaFinal: "55% commodities. Brasil ainda muito dependente de vender matéria-prima crua.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Analista Geopolítico.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Maior parceiro comercial do Brasil hoje:",
        opcoes: [
          { id: "a", texto: "China", correta: true },
          { id: "b", texto: "EUA", correta: false },
          { id: "c", texto: "Argentina", correta: false },
        ],
        feedbackAcerto: "Isso! CHINA compra 30% das exportações brasileiras.",
        feedbackErro: "É a CHINA. Superou os EUA em 2009." },
      { id: "av2", pergunta: "COMMODITIES são:",
        opcoes: [
          { id: "a", texto: "Matérias-primas em estado bruto", correta: true },
          { id: "b", texto: "Produtos tecnológicos avançados", correta: false },
          { id: "c", texto: "Serviços digitais", correta: false },
        ],
        feedbackAcerto: "Isso! Soja, minério, petróleo, café — tudo cru.",
        feedbackErro: "Tecnologia e serviços são INDUSTRIALIZADOS. Commodities são matérias-primas cruas." },
      { id: "av3", pergunta: "BRICS reúne:",
        opcoes: [
          { id: "a", texto: "Brasil, Rússia, Índia, China, África do Sul", correta: true },
          { id: "b", texto: "Só países europeus", correta: false },
          { id: "c", texto: "Só países africanos", correta: false },
        ],
        feedbackAcerto: "Isso! BRASIL, RÚSSIA, ÍNDIA, CHINA, ÁFRICA DO SUL.",
        feedbackErro: "É um bloco multipolar: BRASIL + RÚSSIA + ÍNDIA + CHINA + ÁFRICA DO SUL." },
    ],
    selo: { nome: "Analista Geopolítico", subtitulo: "Insígnia do Explorador do Brasil", emoji: "🌐", cor: "from-emerald-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende o Brasil no mundo. CURSO CONCLUÍDO!",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Analista Geopolítico" },
};
