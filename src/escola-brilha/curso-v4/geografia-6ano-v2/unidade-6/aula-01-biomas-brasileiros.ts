import type { AulaGeoV1 } from "../../types";
import biomas from "@/assets/geografia-6ano/biomas-brasil.jpg";
import amaz from "@/assets/geografia-6ano/bioma-amazonia.jpg";
import cer from "@/assets/geografia-6ano/bioma-cerrado.jpg";
import caa from "@/assets/geografia-6ano/bioma-caatinga.jpg";
import mat from "@/assets/geografia-6ano/bioma-mata-atlantica.jpg";
import pam from "@/assets/geografia-6ano/bioma-pampa.jpg";
import pan from "@/assets/geografia-6ano/bioma-pantanal.jpg";

/**
 * Geografia · 6º Ano (PILOTO v2) · Unidade 6 · Aula 01
 * "Biomas Brasileiros" — BNCC EF06GE13
 * Padrão U1/U2.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-biomas-brasileiros",
  titulo: "Biomas Brasileiros",
  iconeTrilha: "🌳",
  bncc: ["EF06GE13"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: biomas,
    imagemDestaqueUrl: amaz,
    aurora:
      "O Brasil é MEGADIVERSO — abriga 20% de TODAS as espécies do planeta. Isso porque temos SEIS biomas diferentes, cada um com clima, solo e vida próprios: AMAZÔNIA (floresta tropical), CERRADO (savana), CAATINGA (semiárido), MATA ATLÂNTICA (floresta costeira), PAMPA (campos do sul) e PANTANAL (planície alagável). Só a Amazônia tem 40 mil espécies de plantas. Só o Cerrado tem 12 mil. Um único bioma nosso tem mais espécies que a Europa inteira.",
    falaFinal: "6 biomas = 6 laboratórios da natureza. Vamos conhecer cada um em detalhe.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Chuta antes: qual dos SEIS biomas ocupa a MAIOR parte do território brasileiro? Uma dica: ele começa na fronteira com a Colômbia e vai até o Maranhão.",
    pergunta: "O gigante do Brasil é:",
    opcoes: [
      { id: "amaz", titulo: "AMAZÔNIA", subtitulo: "floresta tropical úmida", emoji: "🌳", cor: "from-emerald-800 to-slate-950" },
      { id: "mata", titulo: "MATA ATLÂNTICA", subtitulo: "floresta costeira", emoji: "🌲", cor: "from-teal-800 to-slate-950" },
    ],
    respostaCerta: "amaz",
    feedbackAcerto:
      "Exato! A AMAZÔNIA ocupa 49% do território — quase METADE do Brasil. É a maior floresta tropical do mundo, com 40 mil espécies de plantas, 1.300 espécies de aves e 2.500 espécies de peixes.",
    feedbackErro:
      "Mata Atlântica cobre pouco hoje (13% do território original). AMAZÔNIA é o gigante: quase metade do Brasil, quase metade da América do Sul.",
    falaFinal: "Amazônia é o gigante verde. Guarde: 49% do Brasil.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras que todo biólogo usa. Cada card traz explicação, exemplo real e curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "bioma",
        capa: "1. Bioma",
        emoji: "🌿",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "BIOMA é um conjunto de ecossistemas com CLIMA, SOLO e VEGETAÇÃO parecidos, ocupando uma grande região. O Brasil tem SEIS biomas continentais + o costeiro.",
        exemplo:
          "Curiosidade: o conceito de 'bioma' só foi criado em 1916 pelo ecólogo americano Frederic Clements. Antes disso, cientistas classificavam a natureza só por vegetação — perdiam metade da história.",
        fotoUrl: amaz,
      },
      {
        id: "biodiv",
        capa: "2. Biodiversidade",
        emoji: "🐆",
        cor: "from-amber-800 to-orange-950",
        conteudo:
          "BIODIVERSIDADE é a variedade de vida em uma região — quantas espécies diferentes de plantas, animais, fungos e micróbios existem lá.",
        exemplo:
          "Curiosidade: numa ÚNICA árvore da Amazônia podem viver mais espécies de formigas que em toda a Grã-Bretanha. Um hectare de floresta amazônica tem até 300 espécies de árvores — na Europa tem 10.",
        fotoUrl: pan,
      },
      {
        id: "endemica",
        capa: "3. Espécie endêmica",
        emoji: "🦜",
        cor: "from-purple-800 to-fuchsia-950",
        conteudo:
          "ESPÉCIE ENDÊMICA é aquela que só existe NAQUELE lugar do mundo, em nenhum outro. Se aquele bioma some, a espécie some do planeta.",
        exemplo:
          "Curiosidade: o MICO-LEÃO-DOURADO é endêmico da Mata Atlântica. Em 1970 sobravam 200 na natureza. Hoje, graças a projetos de conservação, são cerca de 2.500. Continua ameaçado.",
        fotoUrl: mat,
      },
      {
        id: "desmate",
        capa: "4. Desmatamento",
        emoji: "🪓",
        cor: "from-red-800 to-slate-950",
        conteudo:
          "DESMATAMENTO é a destruição da vegetação nativa por corte ou queimada. Reduz biodiversidade, libera CO₂, seca rios e altera o clima.",
        exemplo:
          "Curiosidade: a MATA ATLÂNTICA já perdeu 88% de sua área original — restam só 12% do que existia em 1500. Ainda assim, esses 12% concentram 70% da população do Brasil.",
        fotoUrl: caa,
      },
    ],
    falaFinal: "Bioma, biodiversidade, endêmica, desmate. 4 palavras que decidem o futuro da natureza.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Cada card é um dos 6 biomas brasileiros. Toque em cada um pra ver a paisagem real e entender onde ele fica.",
    instrucao: "Toque nos 6 cards pra ouvir cada bioma",
    mapaUrl: biomas,
    pontos: [
      { id: "amaz", x: 25, y: 30, emoji: "🌳", cor: "from-emerald-800 to-slate-950",
        titulo: "AMAZÔNIA (49% do Brasil)",
        texto: "Maior floresta tropical do mundo. Rios gigantes, árvores de 60 m, milhões de espécies. Chove 2.500 mm por ano. Pulmão do planeta.",
        fotoUrl: amaz },
      { id: "cerra", x: 55, y: 55, emoji: "🌾", cor: "from-amber-800 to-orange-950",
        titulo: "CERRADO (24% do Brasil)",
        texto: "Savana brasileira. Árvores baixas e tortas, gramíneas. Chamado 'berço das águas' — nascentes de rios como Tocantins e São Francisco.",
        fotoUrl: cer },
      { id: "caat", x: 75, y: 45, emoji: "🌵", cor: "from-amber-800 to-orange-950",
        titulo: "CAATINGA (10% do Brasil)",
        texto: "Único bioma EXCLUSIVAMENTE brasileiro. Semiárido: cactos, plantas espinhosas, chuva rara mas vida adaptada e abundante.",
        fotoUrl: caa },
      { id: "mata", x: 75, y: 70, emoji: "🌲", cor: "from-teal-800 to-slate-950",
        titulo: "MATA ATLÂNTICA (13% do Brasil)",
        texto: "Floresta do litoral, do NE ao Sul. 88% já destruída. Concentra 70% da população do país e o mico-leão-dourado.",
        fotoUrl: mat },
      { id: "pamp", x: 50, y: 90, emoji: "🐎", cor: "from-lime-800 to-slate-950",
        titulo: "PAMPA (2% do Brasil)",
        texto: "Campos abertos do Rio Grande do Sul. Poucas árvores, muito capim. Terra do gaúcho, do gado de corte e do churrasco.",
        fotoUrl: pam },
      { id: "pant", x: 40, y: 65, emoji: "💧", cor: "from-sky-800 to-blue-950",
        titulo: "PANTANAL (2% do Brasil)",
        texto: "Maior planície alagável do mundo. Ecossistema misto. Onça, jacaré, tuiuiú, capivara — a maior concentração de vida animal das Américas.",
        fotoUrl: pan },
    ],
    falaFinal: "6 biomas, 6 caras do Brasil. Da Amazônia úmida ao Pampa aberto.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de biólogo pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Bioma EXCLUSIVAMENTE brasileiro (só existe aqui):",
        fotoUrl: caa,
        cards: [
          { id: "c", emoji: "🌵", titulo: "Caatinga", cor: "from-emerald-800 to-slate-950" },
          { id: "a", emoji: "🌳", titulo: "Amazônia", cor: "from-amber-800 to-orange-950" },
          { id: "m", emoji: "🌲", titulo: "Mata Atlântica", cor: "from-teal-800 to-slate-950" },
        ], correta: "c",
        feedbackAcerto: "Isso! CAATINGA só existe no Brasil. Único bioma 100% nosso.",
        feedbackErro: "Amazônia se estende por 9 países. Mata Atlântica vai até Argentina. Só a CAATINGA é 100% brasileira." },
      { id: "q2", pergunta: "Maior planície alagável do mundo:",
        fotoUrl: pan,
        cards: [
          { id: "p", emoji: "💧", titulo: "Pantanal", cor: "from-sky-800 to-blue-950" },
          { id: "a", emoji: "🌳", titulo: "Amazônia", cor: "from-emerald-800 to-slate-950" },
          { id: "pa", emoji: "🐎", titulo: "Pampa", cor: "from-lime-800 to-slate-950" },
        ], correta: "p",
        feedbackAcerto: "Isso! PANTANAL = maior planície alagável do mundo (150 mil km²).",
        feedbackErro: "Amazônia é floresta (não alaga o ano todo). Pampa é campo aberto. PANTANAL é a planície que alaga." },
      { id: "q3", pergunta: "Bioma mais AMEAÇADO do Brasil (88% já destruído):",
        fotoUrl: mat,
        cards: [
          { id: "ma", emoji: "🌲", titulo: "Mata Atlântica", cor: "from-emerald-800 to-slate-950" },
          { id: "am", emoji: "🌳", titulo: "Amazônia", cor: "from-amber-800 to-orange-950" },
          { id: "pa", emoji: "🐎", titulo: "Pampa", cor: "from-teal-800 to-slate-950" },
        ], correta: "ma",
        feedbackAcerto: "Isso! MATA ATLÂNTICA perdeu 88% da área original. Restam 12%.",
        feedbackErro: "Amazônia perdeu ~20%. Pampa ~50%. MATA ATLÂNTICA está mais destruída — 88%." },
      { id: "q4", pergunta: "Bioma conhecido como 'berço das águas' por abrigar nascentes de grandes rios:",
        fotoUrl: cer,
        cards: [
          { id: "ce", emoji: "🌾", titulo: "Cerrado", cor: "from-emerald-800 to-slate-950" },
          { id: "am", emoji: "🌳", titulo: "Amazônia", cor: "from-amber-800 to-orange-950" },
          { id: "ca", emoji: "🌵", titulo: "Caatinga", cor: "from-red-800 to-slate-950" },
        ], correta: "ce",
        feedbackAcerto: "Isso! CERRADO abriga nascentes de 8 das 12 bacias hidrográficas brasileiras.",
        feedbackErro: "Amazônia RECEBE água. Caatinga tem POUCA água. CERRADO é o berço das águas do Brasil." },
    ],
    falaFinal: "4 acertos = biólogo em formação.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A AMAZÔNIA LEGAL cobre 9 estados brasileiros. Marque os 7 estados da região Norte que fazem parte dela.",
    instrucao: "Acenda os 7 estados do Norte da Amazônia",
    missao: {
      tipo: "selecionar",
      siglas: ["AM", "PA", "AC", "RO", "RR", "AP", "TO"],
      pergunta: "Quais estados do Norte compõem a Amazônia?",
    },
    falaFinal:
      "AM, PA, AC, RO, RR, AP, TO. Mais MT (Centro-Oeste) e MA (Nordeste) fecham a Amazônia Legal. Um Brasil dentro do Brasil.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize os biomas do MAIOR pro MENOR em área do Brasil. Ajuda pensar em porcentagem.",
    instrucao: "Toque na ordem",
    pergunta: "Do maior pro menor bioma:",
    paradas: [
      { id: "am", emoji: "🌳", rotulo: "1. Amazônia (49%)",
        descricao: "Quase metade do território nacional.", fotoUrl: amaz },
      { id: "ce", emoji: "🌾", rotulo: "2. Cerrado (24%)",
        descricao: "Segundo maior. Domina o Centro-Oeste.", fotoUrl: cer },
      { id: "ma", emoji: "🌲", rotulo: "3. Mata Atlântica (13%)",
        descricao: "Litoral do NE ao Sul. Muito reduzida hoje.", fotoUrl: mat },
      { id: "ca", emoji: "🌵", rotulo: "4. Caatinga (10%)",
        descricao: "Sertão nordestino.", fotoUrl: caa },
      { id: "pa", emoji: "🐎", rotulo: "5. Pampa (2%)",
        descricao: "Campos do Rio Grande do Sul.", fotoUrl: pam },
      { id: "pt", emoji: "💧", rotulo: "6. Pantanal (2%)",
        descricao: "Planície alagável do Centro-Oeste.", fotoUrl: pan },
    ],
    ordemCerta: ["am", "ce", "ma", "ca", "pa", "pt"],
    feedbackAcerto: "Perfeito! Ranking correto dos biomas.",
    feedbackErro: "Amazônia domina (49%), Cerrado é o segundo (24%). Ordene por tamanho.",
    falaFinal: "Amazônia + Cerrado = 73% do Brasil. Assustador de tão grande.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição rápida.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo 6 — Biomas Brasileiros",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O Brasil tem SEIS BIOMAS continentais. A AMAZÔNIA é o maior, com 49% do território — quase metade do país. É a maior floresta tropical do planeta.",
        chaves: ["SEIS BIOMAS", "AMAZÔNIA", "FLORESTA TROPICAL"],
        definicoes: {
          "SEIS BIOMAS":
            "Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal. Cada um com clima, solo e vida próprios.",
          "AMAZÔNIA":
            "Bioma que ocupa 49% do Brasil. Maior floresta tropical do mundo, com rios gigantes e biodiversidade recorde.",
          "FLORESTA TROPICAL":
            "Formação vegetal com árvores altas (60 m), muitas camadas de copa, chuva o ano inteiro. Concentra 50% das espécies terrestres.",
        },
        fotoUrl: amaz,
      },
      {
        id: "p2",
        texto:
          "A CAATINGA é o único bioma EXCLUSIVAMENTE brasileiro. Vegetação de CACTOS e plantas espinhosas adaptadas à falta de água. Ocupa o sertão nordestino.",
        chaves: ["CAATINGA", "EXCLUSIVAMENTE", "CACTOS"],
        definicoes: {
          "CAATINGA":
            "Bioma semiárido do Nordeste. Vegetação seca, chuva concentrada em 3 meses do ano.",
          "EXCLUSIVAMENTE":
            "Não existe em nenhum outro país. Ex.: Amazônia se estende por 9 países, mas Caatinga só existe no Brasil.",
          "CACTOS":
            "Plantas com espinhos que armazenam água no caule. Adaptadas à seca. Ex.: mandacaru, xique-xique.",
        },
        fotoUrl: caa,
      },
      {
        id: "p3",
        texto:
          "A MATA ATLÂNTICA é o bioma MAIS AMEAÇADO — já perdeu 88% da área original. Restam só 12%, mas concentram 70% da POPULAÇÃO brasileira.",
        chaves: ["MATA ATLÂNTICA", "AMEAÇADO", "POPULAÇÃO"],
        definicoes: {
          "MATA ATLÂNTICA":
            "Floresta original do litoral, do RN até o RS. Casa do mico-leão-dourado.",
          "AMEAÇADO":
            "Perdeu 88% da área original por causa da colonização portuguesa e expansão das grandes cidades.",
          "POPULAÇÃO":
            "70% dos brasileiros vivem no que sobrou da Mata Atlântica (Rio, SP, Salvador, Recife estão sobre ela).",
        },
        fotoUrl: mat,
      },
      {
        id: "p4",
        texto:
          "O PANTANAL é a maior PLANÍCIE ALAGÁVEL do mundo. Ecossistema misto que junta influências da Amazônia, Cerrado e Chaco. Tem a maior concentração de VIDA ANIMAL das Américas.",
        chaves: ["PANTANAL", "PLANÍCIE ALAGÁVEL", "VIDA ANIMAL"],
        definicoes: {
          "PANTANAL":
            "Bioma alagável entre MT e MS. Cobre 150 mil km². Patrimônio Natural da Humanidade (Unesco).",
          "PLANÍCIE ALAGÁVEL":
            "Área plana que enche na cheia e seca na estiagem. Ciclo anual que sustenta enorme biodiversidade.",
          "VIDA ANIMAL":
            "Pantanal tem 656 espécies de aves, 325 de peixes, 159 de mamíferos. Casa da onça-pintada.",
        },
        fotoUrl: pan,
      },
    ],
    falaFinal: "Leu, marcou, entendeu? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "am", emoji: "", titulo: "Amazônia", cor: "from-slate-800 to-slate-900" },
      { id: "ce", emoji: "", titulo: "Cerrado", cor: "from-slate-800 to-slate-900" },
      { id: "ca", emoji: "", titulo: "Caatinga", cor: "from-slate-800 to-slate-900" },
      { id: "ma", emoji: "", titulo: "Mata Atlântica", cor: "from-slate-800 to-slate-900" },
      { id: "pa", emoji: "", titulo: "Pampa", cor: "from-slate-800 to-slate-900" },
      { id: "pt", emoji: "", titulo: "Pantanal", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o bioma brasileiro correspondente.",
      instrucao: "Escolha o bioma correto",
      perguntas: [
        { id: "r1", pergunta: "Planície gigante que alaga na cheia, cheia de onça-pintada, jacaré e tuiuiú, entre MT e MS. Que bioma é esse?", cards, correta: "pt",
          feedbackAcerto: "Isso. Planície alagável = PANTANAL.", feedbackErro: "É PANTANAL. Planície que alaga e concentra muita vida animal." },
        { id: "r2", pergunta: "Cactos como mandacaru e xique-xique, plantas espinhosas, chuva rara — no sertão nordestino. Que bioma?", cards, correta: "ca",
          feedbackAcerto: "Isso. Sertão nordestino com cactos = CAATINGA.", feedbackErro: "É CAATINGA. Único bioma exclusivamente brasileiro." },
        { id: "r3", pergunta: "Maior floresta tropical do mundo, chove quase todo dia, cortada pelo rio Amazonas. Que bioma?", cards, correta: "am",
          feedbackAcerto: "Isso. Floresta tropical gigante = AMAZÔNIA.", feedbackErro: "É AMAZÔNIA. Maior floresta tropical e maior biodiversidade do planeta." },
        { id: "r4", pergunta: "Savana com árvores baixas e tortas, gramíneas, no Centro-Oeste — Brasília fica nesse bioma. Que bioma?", cards, correta: "ce",
          feedbackAcerto: "Isso. Savana brasileira = CERRADO.", feedbackErro: "É CERRADO. Chamado de 'berço das águas' por abrigar nascentes." },
        { id: "r5", pergunta: "Floresta original do litoral brasileiro, onde vive o mico-leão-dourado — já teve 88% devastada. Que bioma?", cards, correta: "ma",
          feedbackAcerto: "Isso. Floresta do litoral = MATA ATLÂNTICA.", feedbackErro: "É MATA ATLÂNTICA. O bioma mais ameaçado do Brasil." },
        { id: "r6", pergunta: "Campos abertos com pouca árvore, no sul do país (RS), típicos da paisagem gaúcha. Que bioma?", cards, correta: "pa",
          feedbackAcerto: "Isso. Campos gaúchos = PAMPA.", feedbackErro: "É PAMPA. Campos abertos característicos do Rio Grande do Sul." },
      ],
      falaFinal: "6 perguntas, 6 biomas identificados. Biólogo de plantão.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos BIOMAS por área do Brasil.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "am", rotulo: "Amazônia (49%)", emoji: "🌳", percentual: 49, cor: "#059669",
        descricao: "Metade do país. Floresta tropical úmida com o maior rio do mundo em vazão.",
        exemplos: ["🌳 Castanheira", "🐆 Onça", "🐟 Pirarucu"] },
      { id: "ce", rotulo: "Cerrado (24%)", emoji: "🌾", percentual: 24, cor: "#d97706",
        descricao: "Savana brasileira. Berço das águas — nascentes de 8 bacias hidrográficas.",
        exemplos: ["🌳 Ipê", "🐺 Lobo-guará", "🦜 Arara"] },
      { id: "ma", rotulo: "Mata Atlântica (13%)", emoji: "🌲", percentual: 13, cor: "#0f766e",
        descricao: "Litoral do NE ao Sul. Só 12% da área original. Bioma mais ameaçado.",
        exemplos: ["🌲 Pau-brasil", "🐒 Mico", "🦜 Papagaio"] },
      { id: "ca", rotulo: "Caatinga (10%)", emoji: "🌵", percentual: 10, cor: "#b45309",
        descricao: "Sertão nordestino. Único bioma exclusivamente brasileiro.",
        exemplos: ["🌵 Mandacaru", "🦎 Lagartixa", "🐐 Cabra"] },
      { id: "resto", rotulo: "Pampa + Pantanal (4%)", emoji: "🐎", percentual: 4, cor: "#6b7280",
        descricao: "Menores biomas em área, mas com biodiversidade única.",
        exemplos: ["🐎 Cavalo", "🐊 Jacaré", "💧 Alagados"] },
    ],
    falaFinal: "1 bioma toma quase metade. Os outros 5 dividem o resto.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Biólogo Iniciante.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Quantos biomas o Brasil possui?",
        opcoes: [
          { id: "a", texto: "3 biomas", correta: false },
          { id: "b", texto: "6 biomas", correta: true },
          { id: "c", texto: "10 biomas", correta: false },
        ],
        feedbackAcerto: "Isso! 6 biomas continentais.",
        feedbackErro: "SEIS biomas: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa, Pantanal." },
      { id: "av2", pergunta: "Bioma EXCLUSIVO do Brasil (só existe aqui):",
        opcoes: [
          { id: "a", texto: "Amazônia", correta: false },
          { id: "b", texto: "Caatinga", correta: true },
          { id: "c", texto: "Mata Atlântica", correta: false },
        ],
        feedbackAcerto: "Isso! CAATINGA só existe no Brasil.",
        feedbackErro: "Amazônia e Mata Atlântica estão em outros países. Só a CAATINGA é 100% brasileira." },
      { id: "av3", pergunta: "Bioma MAIS destruído do Brasil:",
        opcoes: [
          { id: "a", texto: "Mata Atlântica (88% perdida)", correta: true },
          { id: "b", texto: "Amazônia", correta: false },
          { id: "c", texto: "Pampa", correta: false },
        ],
        feedbackAcerto: "Isso! MATA ATLÂNTICA perdeu 88% da área original.",
        feedbackErro: "Amazônia perdeu ~20%. Pampa ~50%. MATA ATLÂNTICA é o mais ameaçado (88%)." },
    ],
    selo: { nome: "Biólogo Iniciante", subtitulo: "Insígnia do Explorador Planetário", emoji: "🌳", cor: "from-emerald-800 to-slate-950" },
    falaFinal: "Insígnia biológica conquistada! Você já reconhece os 6 biomas brasileiros.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Biólogo Iniciante" },
};
