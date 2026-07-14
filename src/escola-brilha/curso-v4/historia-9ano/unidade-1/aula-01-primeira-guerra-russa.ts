import type { AulaGeoV1 } from "../../types";
import { url as imgTrin } from "@/assets/historia-9ano/u1-trincheiras.jpg.asset.json";
import { url as imgRev } from "@/assets/historia-9ano/u1-revolucao-russa.jpg.asset.json";
import { url as imgTrincDet } from "@/assets/historia-9ano/u1-trincheiras-detalhe.jpg.asset.json";
import { url as imgLenin } from "@/assets/historia-9ano/u1-lenin-discurso.jpg.asset.json";
import { url as imgTanque } from "@/assets/historia-9ano/u1-tanque-primeira-guerra.jpg.asset.json";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-primeira-guerra-russa",
  titulo: "Trincheiras e Revolução (1914–1917)",
  iconeTrilha: "⚔️",
  bncc: ["EF09HI01", "EF09HI02", "EF09HI03"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgTrin,
    imagemDestaqueUrl: imgRev,
    aurora:
      "1914. A Europa das potências imperialistas explode. Alianças, corrida armamentista e nacionalismo levam ao maior conflito já visto até então: a PRIMEIRA GUERRA MUNDIAL. Trincheiras, gás venenoso, metralhadoras — 4 anos de horror. No meio da guerra, o Império Russo desmorona: em 1917, os bolcheviques tomam o poder e criam o primeiro Estado socialista da história.",
    falaFinal: "Nó 1 da Teia do Tempo Presente: guerra industrial + revolução socialista.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "A Europa de 1914 era um barril de pólvora. O que estourou o pavio?",
    pergunta: "O que deu início direto à Primeira Guerra Mundial?",
    fotoUrl: imgTrincDet,
    opcoes: [
      {
        id: "atent",
        titulo: "ATENTADO EM SARAJEVO",
        subtitulo: "assassinato do herdeiro austríaco (1914)",
        emoji: "💥",
        cor: "from-teal-800 to-slate-950",
      },
      {
        id: "eco",
        titulo: "CRISE DE 1929",
        subtitulo: "quebra da Bolsa de NY",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "atent",
    feedbackAcerto:
      "Correto. O assassinato do arquiduque Francisco Ferdinando em Sarajevo (junho/1914) acionou o sistema de alianças e mergulhou a Europa na guerra.",
    feedbackErro:
      "Não. A Crise de 1929 vem depois. O estopim foi o atentado de Sarajevo em 1914.",
    falaFinal: "Um tiro em Sarajevo. Uma guerra de 4 anos.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave da Primeira Guerra e da Revolução Russa.",
    instrucao: "",
    cadernos: [
      {
        id: "trin",
        capa: "Guerra de Trincheiras",
        emoji: "⚔️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgLenin,
        conteudo:
          "GUERRA DE TRINCHEIRAS foi o modo de lutar da 1ª Guerra na Frente Ocidental: soldados enfiados em valas cavadas no chão por meses, sob bombardeios, gás venenoso e frio. Avanços mediam poucos metros e custavam milhares de mortos.",
        exemplo:
          "Exemplo: a Batalha de Verdun (1916) durou 10 meses e matou cerca de 700 mil soldados — pra a frente mudar quase nada de lugar.",
      },
      {
        id: "alian",
        capa: "Sistema de Alianças",
        emoji: "🕸️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgTanque,
        conteudo:
          "ALIANÇAS eram tratados que obrigavam países a entrar em guerra se um aliado fosse atacado. Em 1914, Europa estava dividida em TRÍPLICE ENTENTE (França, Reino Unido, Rússia) e TRÍPLICE ALIANÇA (Alemanha, Áustria-Hungria, Itália).",
        exemplo:
          "Exemplo: o atentado de Sarajevo era um assunto Áustria × Sérvia — mas as alianças arrastaram meia Europa para o conflito em semanas.",
      },
      {
        id: "bolch",
        capa: "Bolcheviques",
        emoji: "☭",
        cor: "from-red-800 to-slate-900",
        fotoUrl: imgTrin,
        conteudo:
          "BOLCHEVIQUES eram o partido comunista liderado por LÊNIN. Defendiam derrubar o czar, tirar a Rússia da guerra e dar as fábricas aos operários e a terra aos camponeses. Tomaram o poder em outubro de 1917.",
        exemplo:
          "Exemplo: o lema era 'PAZ, PÃO E TERRA' — três coisas que o povo russo, faminto e cansado da guerra, queria imediatamente.",
      },
      {
        id: "urss",
        capa: "URSS",
        emoji: "🌍",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgRev,
        conteudo:
          "URSS (União das Repúblicas Socialistas Soviéticas) foi o Estado criado em 1922 depois da Revolução Russa. Primeiro país socialista da história — fábricas e terras eram do Estado, não de particulares.",
        exemplo:
          "Exemplo: a URSS durou 69 anos (1922–1991) e virou uma das duas superpotências do século XX, ao lado dos EUA.",
      },
    ],
    falaFinal: "Trincheiras + Alianças + Bolcheviques + URSS. Nó do século XX.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico das causas da Primeira Guerra. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgTrincDet,
    pontos: [
      {
        id: "imp",
        x: 20,
        y: 30,
        emoji: "🌍",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgLenin,
        titulo: "IMPERIALISMO",
        texto:
          "As potências europeias disputavam colônias na África e Ásia. Sobrou pouco — e Alemanha (unificada só em 1871) chegou atrasada. Tensão constante por mercados e matérias-primas.",
      },
      {
        id: "nac",
        x: 55,
        y: 55,
        emoji: "🚩",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgTanque,
        titulo: "NACIONALISMO",
        texto:
          "Cada país se achava superior aos outros. Franceses queriam a Alsácia-Lorena de volta; sérvios queriam unir os eslavos; alemães queriam 'um lugar ao sol'.",
      },
      {
        id: "cor",
        x: 80,
        y: 35,
        emoji: "🔫",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgTrin,
        titulo: "CORRIDA ARMAMENTISTA",
        texto:
          "Entre 1900 e 1914 as potências dobraram gastos com Exército e Marinha. Metralhadoras, encouraçados, submarinos — tudo pronto pra usar.",
      },
    ],
    falaFinal:
      "Imperialismo + Nacionalismo + Corrida armamentista + Alianças. O barril estava cheio antes de 1914.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de historiador da 1ª Guerra.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem liderou a Revolução Bolchevique de outubro de 1917?",
        fotoUrl: imgRev,
        cards: [
          { id: "l", emoji: "☭", titulo: "Lênin", cor: "from-red-700 to-slate-900" },
          { id: "s", emoji: "🎖️", titulo: "Stálin", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "👑", titulo: "Czar Nicolau II", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "l",
        feedbackAcerto: "Correto. LÊNIN liderou os bolcheviques em 1917.",
        feedbackErro: "É Lênin. Stálin veio depois; o czar foi DEPOSTO pela revolução.",
      },
      {
        id: "q2",
        pergunta: "Qual foi o LEMA dos bolcheviques em 1917?",
        fotoUrl: imgTrincDet,
        cards: [
          { id: "p", emoji: "🍞", titulo: "Paz, Pão e Terra", cor: "from-teal-600 to-slate-900" },
          { id: "d", emoji: "👑", titulo: "Deus e Rei", cor: "from-amber-600 to-slate-900" },
          { id: "o", emoji: "⚒️", titulo: "Trabalho e Ordem", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "p",
        feedbackAcerto: "Correto. PAZ (sair da guerra), PÃO (fim da fome) e TERRA (aos camponeses).",
        feedbackErro: "É 'Paz, Pão e Terra' — três coisas que o povo russo queria imediatamente.",
      },
      {
        id: "q3",
        pergunta: "Em que ano terminou a Primeira Guerra Mundial?",
        fotoUrl: imgLenin,
        cards: [
          { id: "1918", emoji: "🕊️", titulo: "1918", cor: "from-teal-600 to-slate-900" },
          { id: "1917", emoji: "☭", titulo: "1917", cor: "from-amber-600 to-slate-900" },
          { id: "1939", emoji: "⚔️", titulo: "1939", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "1918",
        feedbackAcerto: "Correto. Fim em 11 de novembro de 1918 (Armistício).",
        feedbackErro: "É 1918. Em 1917 saiu a Rússia; 1939 é o INÍCIO da 2ª Guerra.",
      },
    ],
    falaFinal: "Você já mapeia o nó 1914–1918.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois lados da Primeira Guerra.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgTanque,
    camadas: [
      {
        id: "ent",
        rotulo: "Tríplice Entente",
        emoji: "🇫🇷",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 5, y: 10, w: 90, h: 40 },
        descricao:
          "FRANÇA + REINO UNIDO + RÚSSIA (até 1917) + ITÁLIA (depois de 1915) + EUA (depois de 1917). Venceram a guerra.",
      },
      {
        id: "ali",
        rotulo: "Tríplice Aliança / Impérios Centrais",
        emoji: "🇩🇪",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao:
          "ALEMANHA + ÁUSTRIA-HUNGRIA + IMPÉRIO OTOMANO. Perderam. Alemanha foi punida no Tratado de Versalhes com reparações pesadíssimas.",
      },
    ],
    falaFinal: "Dois blocos. Um vence, um paga a conta. Versalhes prepara o rancor que vira a 2ª Guerra.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos de 1914 a 1918.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos da 1ª Guerra e da Revolução Russa",
    paradas: [
      { id: "sar", emoji: "💥", rotulo: "1. Sarajevo (1914)", fotoUrl: imgTrin, descricao: "Assassinato do arquiduque austríaco." },
      { id: "trin", emoji: "⚔️", rotulo: "2. Trincheiras (1915–16)", fotoUrl: imgRev, descricao: "Verdun, Somme — mortandade sem avanços." },
      { id: "rev", emoji: "☭", rotulo: "3. Revolução Russa (1917)", fotoUrl: imgTrincDet, descricao: "Bolcheviques tomam o poder; Rússia sai da guerra." },
      { id: "arm", emoji: "🕊️", rotulo: "4. Armistício (1918)", fotoUrl: imgLenin, descricao: "Alemanha se rende; fim da guerra em 11/11/1918." },
    ],
    ordemCerta: ["sar", "trin", "rev", "arm"],
    feedbackAcerto: "Perfeito. 1914 → 1918. Quatro anos que mudaram o planeta.",
    feedbackErro: "Comece pelo estopim (Sarajevo) e siga a cronologia.",
    falaFinal: "4 marcos. 4 anos. Mundo inteiro reorganizado.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 1 da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 1 — Trincheiras e Revolução",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Entre 1914 e 1918 o mundo viveu a PRIMEIRA GUERRA MUNDIAL. Foi a primeira guerra INDUSTRIAL da história — metralhadoras, gás venenoso, tanques e aviões substituíram a cavalaria. Cerca de 10 milhões de soldados morreram, a maioria nas TRINCHEIRAS da Frente Ocidental.",
        chaves: ["Primeira Guerra Mundial", "Trincheiras"],
        definicoes: {
          "Primeira Guerra Mundial":
            "Conflito de 1914 a 1918 envolvendo as principais potências europeias, EUA e colônias, com cerca de 10 milhões de mortos.",
          "Trincheiras":
            "Valas cavadas no chão onde soldados viviam por meses, marca da Frente Ocidental.",
        },
        fotoUrl: imgTanque,
      },
      {
        id: "p2",
        texto:
          "As causas profundas foram IMPERIALISMO (disputa por colônias), NACIONALISMO (cada país se achando superior), CORRIDA ARMAMENTISTA e sistema de ALIANÇAS. O estopim foi o assassinato do arquiduque austríaco em Sarajevo (junho/1914).",
        chaves: ["Imperialismo", "Alianças"],
        definicoes: {
          Imperialismo: "Disputa das potências europeias por colônias e mercados na África e Ásia.",
          "Alianças": "Tratados que obrigavam países a entrar em guerra se um aliado fosse atacado.",
        },
        fotoUrl: imgTrin,
      },
      {
        id: "p3",
        texto:
          "Em 1917, no meio da guerra, o Império Russo colapsou. Os BOLCHEVIQUES, liderados por LÊNIN, tomaram o poder em outubro com o lema 'PAZ, PÃO E TERRA'. Tiraram a Rússia da guerra e criaram o primeiro Estado socialista da história — a futura URSS (1922).",
        chaves: ["Bolcheviques"],
        definicoes: {
          Bolcheviques: "Partido comunista russo liderado por Lênin que tomou o poder em outubro de 1917.",
        },
        fotoUrl: imgRev,
      },
      {
        id: "p4",
        texto:
          "A guerra terminou em novembro de 1918 com a rendição alemã. O Tratado de VERSALHES (1919) culpou a Alemanha, exigiu reparações pesadíssimas e humilhou o país. Esse rancor alimentou o nazismo duas décadas depois — a Teia do Tempo Presente começa aqui.",
        chaves: ["Versalhes"],
        definicoes: {
          Versalhes:
            "Tratado de paz (1919) que culpou a Alemanha pela guerra e impôs reparações que geraram enorme ressentimento.",
        },
        fotoUrl: imgTrincDet,
      },
    ],
    falaFinal: "Leitura concluída. Você já conecta 1ª Guerra → Revolução Russa → sementes da 2ª Guerra.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador. Associe cada evento ao lado certo.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "ent", emoji: "🇫🇷", rotulo: "Entente (vencedores)" },
      { id: "ali", emoji: "🇩🇪", rotulo: "Impérios Centrais" },
      { id: "urss", emoji: "☭", rotulo: "Revolução Russa" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "França", emoji: "🇫🇷", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Vence em 1918", emoji: "🏆", cor: "from-cyan-600 to-slate-900" }, contexto: "Aliada dos britânicos.", pecaCertaId: "ent", feedbackAcerto: "Correto. França = Entente.", feedbackErro: "É Entente." },
      { id: "r2", municipioA: { nome: "Alemanha", emoji: "🇩🇪", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Assina Versalhes", emoji: "📜", cor: "from-amber-600 to-slate-900" }, contexto: "Punida com reparações.", pecaCertaId: "ali", feedbackAcerto: "Correto. Alemanha = Impérios Centrais.", feedbackErro: "É Impérios Centrais." },
      { id: "r3", municipioA: { nome: "Lênin", emoji: "☭", cor: "from-red-700 to-slate-900" }, municipioB: { nome: "Paz, Pão e Terra", emoji: "🍞", cor: "from-red-600 to-slate-900" }, contexto: "Outubro de 1917.", pecaCertaId: "urss", feedbackAcerto: "Correto. Lênin = Revolução Russa.", feedbackErro: "É Revolução Russa." },
      { id: "r4", municipioA: { nome: "Reino Unido", emoji: "🇬🇧", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Marinha mais forte", emoji: "⚓", cor: "from-cyan-600 to-slate-900" }, contexto: "Bloqueio naval à Alemanha.", pecaCertaId: "ent", feedbackAcerto: "Correto. Reino Unido = Entente.", feedbackErro: "É Entente." },
      { id: "r5", municipioA: { nome: "Áustria-Hungria", emoji: "🇦🇹", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Império dividido no fim", emoji: "🗺️", cor: "from-amber-600 to-slate-900" }, contexto: "Fim: dividido em vários países.", pecaCertaId: "ali", feedbackAcerto: "Correto. Áustria-Hungria = Impérios Centrais.", feedbackErro: "É Impérios Centrais." },
      { id: "r6", municipioA: { nome: "URSS (1922)", emoji: "🌍", cor: "from-red-700 to-slate-900" }, municipioB: { nome: "1º Estado socialista", emoji: "🏛️", cor: "from-red-600 to-slate-900" }, contexto: "Consequência direta de 1917.", pecaCertaId: "urss", feedbackAcerto: "Correto. URSS nasce da Revolução Russa.", feedbackErro: "É Revolução Russa." },
    ],
    falaFinal: "6 rodadas. Você já associa cada peça ao seu lado histórico.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Mortos militares da 1ª Guerra — proporção aproximada por bloco.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgLenin,
    fatias: [
      {
        id: "ent",
        rotulo: "Entente (~55%)",
        emoji: "🇫🇷",
        percentual: 55,
        cor: "#0f766e",
        descricao: "Rússia, França, Reino Unido, EUA, Itália e outros aliados. Cerca de 5,5 milhões de soldados mortos.",
        exemplos: ["🇷🇺 Rússia", "🇫🇷 França", "🇬🇧 Reino Unido"],
      },
      {
        id: "ali",
        rotulo: "Impérios Centrais (~45%)",
        emoji: "🇩🇪",
        percentual: 45,
        cor: "#b45309",
        descricao: "Alemanha, Áustria-Hungria e Império Otomano. Cerca de 4,5 milhões de soldados mortos.",
        exemplos: ["🇩🇪 Alemanha", "🇦🇹 Áustria-Hungria", "🇹🇷 Otomanos"],
      },
    ],
    falaFinal: "10 milhões de soldados mortos. Primeira guerra industrial da história.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear o Nó 1 da Teia.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgTanque,
    perguntas: [
      {
        id: "av1",
        pergunta: "O estopim direto da Primeira Guerra Mundial foi:",
        opcoes: [
          { id: "a", texto: "A Crise de 1929.", correta: false },
          { id: "b", texto: "O atentado de Sarajevo (1914).", correta: true },
          { id: "c", texto: "A invasão da Polônia.", correta: false },
        ],
        feedbackAcerto: "Correto. Sarajevo (junho/1914) acionou as alianças.",
        feedbackErro: "É Sarajevo (1914). 1929 e Polônia vêm depois.",
      },
      {
        id: "av2",
        pergunta: "O lema dos bolcheviques em 1917 era:",
        opcoes: [
          { id: "a", texto: "'Deus, Rei e Pátria'.", correta: false },
          { id: "b", texto: "'Paz, Pão e Terra'.", correta: true },
          { id: "c", texto: "'Ordem e Progresso'.", correta: false },
        ],
        feedbackAcerto: "Correto. Paz (sair da guerra), Pão (comida), Terra (aos camponeses).",
        feedbackErro: "É 'Paz, Pão e Terra' — lema de Lênin.",
      },
      {
        id: "av3",
        pergunta: "O Tratado de Versalhes (1919):",
        opcoes: [
          { id: "a", texto: "Punia duramente a Alemanha com reparações.", correta: true },
          { id: "b", texto: "Criou a URSS.", correta: false },
          { id: "c", texto: "Deu colônias novas à Rússia.", correta: false },
        ],
        feedbackAcerto: "Correto. O rancor de Versalhes alimentou o nazismo duas décadas depois.",
        feedbackErro: "É a punição à Alemanha — origem do ressentimento que gera a 2ª Guerra.",
      },
    ],
    selo: {
      nome: "Nó 1 da Teia",
      subtitulo: "Trincheiras e Revolução",
      emoji: "⚔️",
      cor: "from-teal-500 to-slate-900",
      fotoUrl: imgTrin,
    },
    falaFinal: "Nó 1 destravado. A Teia do Tempo Presente começou a se tecer.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Nó 1 — Trincheiras e Revolução" },
};
