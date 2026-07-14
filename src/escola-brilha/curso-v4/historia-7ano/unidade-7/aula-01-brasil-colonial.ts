import type { AulaGeoV1 } from "../../types";
import { url as imgEngenho } from "@/assets/historia-7ano/u7-engenho.jpg.asset.json";
import { url as imgPalmares } from "@/assets/historia-7ano/u7-palmares.jpg.asset.json";
import { url as imgPao } from "@/assets/historia-7ano/u7-pao-acucar.jpg.asset.json";
import { url as imgInv } from "@/assets/historia-7ano/u7-inventario.jpg.asset.json";
import { url as imgInf } from "@/assets/historia-7ano/u7-infografico-engenho.jpg.asset.json";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-brasil-colonial",
  titulo: "O Brasil Colonial: Açúcar, Escravidão e Resistência",
  iconeTrilha: "🇧🇷",
  bncc: ["EF07HI13", "EF07HI14", "EF07HI15"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgEngenho,
    imagemDestaqueUrl: imgInf,
    aurora:
      "Um ENGENHO no Nordeste brasileiro, séc. XVII. Fumaça saindo das caldeiras, moendas trituradas por bois e por escravizados, e um senhor de engenho vivendo como rei em uma casa-grande. O AÇÚCAR movia a economia colonial — e a escravidão africana era o coração dessa máquina.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem 7 — final da Bússola: O Estandarte da Sociedade Colonial e da Resistência.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palmares, no interior de Pernambuco/Alagoas, resistiu por quase 100 anos como maior quilombo das Américas. Chegou a ter até 20 mil pessoas. Por que foi tão difícil de destruir?",
    pergunta: "Por que o Quilombo dos Palmares durou tanto tempo?",
    fotoUrl: imgPalmares,
    opcoes: [
      {
        id: "org",
        titulo: "ORGANIZAÇÃO POLÍTICA E MILITAR PRÓPRIA",
        subtitulo: "líderes como Zumbi, agricultura, defesa",
        emoji: "🛡️",
        cor: "from-teal-800 to-slate-950",
      },
      {
        id: "sor",
        titulo: "APENAS SORTE",
        subtitulo: "portugueses esqueceram dele",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "org",
    feedbackAcerto:
      "Correto. Palmares tinha ESTRUTURA COMPLEXA: agricultura, defesa organizada, líderes como Ganga Zumba e Zumbi, alianças com indígenas. Resistiu de ~1600 a 1695.",
    feedbackErro:
      "Não. Palmares durou tanto porque tinha ORGANIZAÇÃO POLÍTICA, ECONÔMICA e MILITAR complexa. Sob liderança de Ganga Zumba e depois Zumbi, chegou a 20 mil habitantes.",
    falaFinal:
      "Guarde: escravidão gerou resistência sofisticada. Quilombos não eram simples esconderijos.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave do Brasil Colonial.",
    instrucao: "",
    cadernos: [
      {
        id: "eng",
        capa: "Engenho de Açúcar",
        emoji: "🏭",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgEngenho,
        conteudo:
          "ENGENHO era o complexo agroindustrial que produzia AÇÚCAR no Brasil colonial. Incluía canavial, moenda (para triturar a cana), casa de caldeiras (para ferver o caldo) e senzala (moradia dos escravizados).",
        exemplo:
          "Exemplo: um engenho médio empregava mais de 100 escravizados africanos e produzia açúcar exportado para Portugal e revendido para toda a Europa. Enriqueceu senhores de engenho pernambucanos e baianos.",
      },
      {
        id: "esc",
        capa: "Escravidão Colonial",
        emoji: "⛓️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgInf,
        conteudo:
          "ESCRAVIDÃO COLONIAL foi o sistema em que milhões de africanos foram sequestrados, traficados pelo Atlântico e vendidos como propriedade privada no Brasil, Caribe e Américas. Base da economia colonial por quase 400 anos.",
        exemplo:
          "Exemplo: entre 1500 e 1888, cerca de 4,8 milhões de africanos foram trazidos ao Brasil — o maior destino da escravidão nas Américas. Perdiam nome, família, língua e religião ao serem vendidos.",
      },
      {
        id: "cap",
        capa: "Capitanias Hereditárias",
        emoji: "🗺️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgInv,
        conteudo:
          "CAPITANIAS HEREDITÁRIAS (1534) foram 15 faixas de terra distribuídas por Dom João III a 12 nobres portugueses (donatários) para colonizar o Brasil. A maioria fracassou; só Pernambuco e São Vicente prosperaram.",
        exemplo:
          "Exemplo: em 1548, diante do fracasso da maioria das capitanias, a Coroa criou o GOVERNO-GERAL, com Tomé de Sousa em Salvador (1549), centralizando a administração colonial.",
      },
      {
        id: "qui",
        capa: "Quilombos",
        emoji: "🛡️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgPalmares,
        conteudo:
          "QUILOMBOS eram comunidades formadas por escravizados fugitivos, indígenas e mestiços. Praticavam agricultura, mantinham religiosidade africana e resistiam militarmente. Palmares foi o maior.",
        exemplo:
          "Exemplo: o Quilombo dos Palmares (~1600-1695) chegou a ter 20 mil habitantes. Ganga Zumba e Zumbi foram seus líderes mais famosos. Zumbi foi executado em 1695 — hoje 20/11 é Dia da Consciência Negra.",
      },
    ],
    falaFinal:
      "Engenho + Escravidão + Capitanias + Quilombos. Quatro pilares do Brasil colonial.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico do engenho colonial. Toque nos pontos.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgInf,
    pontos: [
      {
        id: "cas",
        x: 20,
        y: 25,
        emoji: "🏛️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgEngenho,
        titulo: "CASA-GRANDE",
        texto:
          "Residência do senhor de engenho e sua família. Símbolo do poder social e econômico local. Grande, com capela, biblioteca e criadagem.",
      },
      {
        id: "sen",
        x: 20,
        y: 75,
        emoji: "⛓️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgInf,
        titulo: "SENZALA",
        texto:
          "Alojamento coletivo dos escravizados africanos. Pequeno, sem conforto, muitas vezes trancado à noite. Contrastava brutalmente com a casa-grande.",
      },
      {
        id: "moe",
        x: 70,
        y: 30,
        emoji: "⚙️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgEngenho,
        titulo: "MOENDA",
        texto:
          "Estrutura movida por bois (ou água) que espremia a cana e extraía o caldo. Perigosíssima: escravizados perdiam braços com frequência.",
      },
      {
        id: "cal",
        x: 70,
        y: 70,
        emoji: "🔥",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgEngenho,
        titulo: "CASA DE CALDEIRAS",
        texto:
          "Grandes tachos onde o caldo era fervido para virar melado e depois cristalizar em açúcar. Calor extremo, jornadas de 12 a 18 horas.",
      },
    ],
    falaFinal:
      "Um engenho = uma pequena sociedade escravista completa.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de historiador do Brasil colonial.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual foi o principal PRODUTO da economia do Brasil colonial no séc. XVI-XVII?",
        fotoUrl: imgEngenho,
        cards: [
          { id: "a", emoji: "🍬", titulo: "Açúcar", cor: "from-teal-600 to-slate-900" },
          { id: "s", emoji: "🎽", titulo: "Soja", cor: "from-amber-600 to-slate-900" },
          { id: "b", emoji: "🏭", titulo: "Automóveis", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. AÇÚCAR — base da economia colonial durante 200 anos.",
        feedbackErro: "É AÇÚCAR. Soja é atual; automóveis nem existiam.",
      },
      {
        id: "q2",
        pergunta: "Qual foi o SISTEMA de trabalho dominante no Brasil colonial?",
        fotoUrl: imgInf,
        cards: [
          { id: "e", emoji: "⛓️", titulo: "Escravidão africana", cor: "from-slate-600 to-slate-900" },
          { id: "s", emoji: "💰", titulo: "Trabalho assalariado", cor: "from-teal-600 to-slate-900" },
          { id: "v", emoji: "🤝", titulo: "Trabalho voluntário", cor: "from-amber-600 to-slate-900" },
        ],
        correta: "e",
        feedbackAcerto: "Correto. ESCRAVIDÃO AFRICANA — ~4,8 milhões de pessoas trazidas ao Brasil.",
        feedbackErro: "É a ESCRAVIDÃO AFRICANA. Trabalho assalariado só se generalizou após 1888.",
      },
      {
        id: "q3",
        pergunta: "Quem foi ZUMBI?",
        fotoUrl: imgPalmares,
        cards: [
          {
            id: "z",
            emoji: "🛡️",
            titulo: "Líder do Quilombo dos Palmares",
            cor: "from-teal-600 to-slate-900",
          },
          {
            id: "p",
            emoji: "👑",
            titulo: "Rei português da colônia",
            cor: "from-amber-600 to-slate-900",
          },
          {
            id: "d",
            emoji: "⛵",
            titulo: "Descobridor do Brasil",
            cor: "from-slate-600 to-slate-900",
          },
        ],
        correta: "z",
        feedbackAcerto: "Correto. ZUMBI DOS PALMARES — símbolo máximo da resistência negra.",
        feedbackErro: "É o LÍDER de Palmares. Cabral descobriu o Brasil; reis eram europeus.",
      },
    ],
    falaFinal: "Radar afiado. Você já entende o tripé colonial: açúcar + escravidão + resistência.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre o Brasil colonial. ELITE colonial × TRABALHO ESCRAVIZADO.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgInf,
    camadas: [
      {
        id: "eli",
        rotulo: "Elite colonial (~10%)",
        emoji: "👑",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 5, y: 10, w: 40, h: 45 },
        descricao:
          "Senhores de engenho, funcionários portugueses, altos religiosos, grandes comerciantes. Concentravam terras, engenhos e cargos administrativos.",
      },
      {
        id: "esc",
        rotulo: "Trabalhadores escravizados (~70%)",
        emoji: "⛓️",
        cor: "from-slate-700 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao:
          "Africanos escravizados e seus descendentes. Trabalhavam engenhos, minas, plantações e serviços urbanos. Base da economia colonial.",
      },
    ],
    falaFinal:
      "Pequena elite comandava. Grande maioria trabalhava sob violência estrutural.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo do Brasil colonial.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos do Brasil colonial",
    paradas: [
      {
        id: "cab",
        emoji: "⛵",
        rotulo: "1. Chegada de Cabral (1500)",
        fotoUrl: imgEngenho,
        descricao: "Frota portuguesa chega à Bahia.",
      },
      {
        id: "cap",
        emoji: "🗺️",
        rotulo: "2. Capitanias Hereditárias (1534)",
        fotoUrl: imgInv,
        descricao: "Divisão do Brasil em 15 lotes hereditários.",
      },
      {
        id: "gov",
        emoji: "🏛️",
        rotulo: "3. Governo-Geral em Salvador (1549)",
        fotoUrl: imgInv,
        descricao: "Centralização administrativa colonial.",
      },
      {
        id: "pal",
        emoji: "🛡️",
        rotulo: "4. Queda de Palmares (1695)",
        fotoUrl: imgPalmares,
        descricao: "Zumbi é morto; maior quilombo é destruído.",
      },
    ],
    ordemCerta: ["cab", "cap", "gov", "pal"],
    feedbackAcerto:
      "Perfeito. Chegada → Capitanias → Governo-Geral → Palmares. 195 anos.",
    feedbackErro: "Essa não é a próxima. As capitanias vieram antes do Governo-Geral.",
    falaFinal: "Do desembarque à queda de Palmares: quase 200 anos de colonização e resistência.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Página 7 (final) da Bússola. Toque nos termos técnicos.",
    tituloLivro: "🧭 A Bússola do Novo Mundo",
    subtitulo: "Página 7 — O Estandarte da Sociedade Colonial",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O BRASIL COLONIAL (1500-1822) foi estruturado por Portugal para EXPLORAR riquezas conforme o Pacto Colonial. A primeira grande atividade foi a extração do PAU-BRASIL. Depois vieram o AÇÚCAR (séc. XVI-XVII), o OURO (séc. XVIII) e o CAFÉ (séc. XIX).",
        chaves: ["Brasil Colonial", "Pacto Colonial"],
        definicoes: {
          "Brasil Colonial":
            "Período histórico brasileiro entre 1500 (chegada de Cabral) e 1822 (Independência). Cerca de 322 anos.",
          "Pacto Colonial":
            "Sistema mercantilista em que o Brasil só podia comerciar com Portugal, sua metrópole.",
        },
        fotoUrl: imgEngenho,
      },
      {
        id: "p2",
        texto:
          "Em 1534, o rei português dividiu o Brasil em CAPITANIAS HEREDITÁRIAS — 15 faixas de terra entregues a 12 nobres donatários. A maioria fracassou. Em 1549, foi criado o GOVERNO-GERAL, com sede em SALVADOR, sob Tomé de Sousa. A administração ficou mais centralizada.",
        chaves: ["Capitanias Hereditárias", "Governo-Geral"],
        definicoes: {
          "Capitanias Hereditárias":
            "Divisão do Brasil colonial em 15 faixas de terra distribuídas a 12 donatários portugueses.",
          "Governo-Geral":
            "Sistema administrativo criado em 1548-49. Sede em Salvador. Centralizou o poder colonial.",
        },
        fotoUrl: imgInv,
      },
      {
        id: "p3",
        texto:
          "A ECONOMIA AÇUCAREIRA no Nordeste tornou-se o coração colonial. Cada ENGENHO reunia canavial, casa de caldeiras, moenda, senzalas e casa-grande. Empregava mais de 100 escravizados AFRICANOS por unidade. O Brasil tornou-se o maior exportador mundial de açúcar por quase 200 anos.",
        chaves: ["Engenho"],
        definicoes: {
          Engenho:
            "Complexo agroindustrial produtor de açúcar. Reunia canavial, moenda, casa de caldeiras, senzala e casa-grande.",
        },
        fotoUrl: imgEngenho,
      },
      {
        id: "p4",
        texto:
          "Mas houve RESISTÊNCIA. QUILOMBOS foram comunidades de escravizados fugitivos. O maior foi PALMARES, no interior de Pernambuco/Alagoas. Durou de ~1600 a 1695. Teve até 20 mil habitantes. Foi liderado por Ganga Zumba e depois por ZUMBI, morto em 20/11/1695. Hoje é o Dia da Consciência Negra.",
        chaves: ["Quilombos", "Palmares"],
        definicoes: {
          Quilombos:
            "Comunidades organizadas por escravizados fugitivos, indígenas e mestiços em regiões afastadas.",
          Palmares:
            "Maior quilombo das Américas. Interior de Pernambuco/Alagoas. Existiu por quase um século.",
        },
        fotoUrl: imgPalmares,
      },
    ],
    falaFinal:
      "Leitura concluída. Você fechou a Bússola: da queda do feudo à formação do Brasil colonial.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão final. Classifique cada elemento em ECONOMIA, ADMINISTRAÇÃO, TRABALHO ou RESISTÊNCIA.",
    instrucao: "⏱️ Toque na categoria correta",
    duracaoSegundos: 26,
    pecas: [
      { id: "eco", emoji: "🍬", rotulo: "Economia" },
      { id: "adm", emoji: "🏛️", rotulo: "Administração" },
      { id: "tra", emoji: "⛓️", rotulo: "Trabalho" },
      { id: "res", emoji: "🛡️", rotulo: "Resistência" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Engenho de açúcar em Pernambuco", emoji: "🏭", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Produção agroexportadora", emoji: "🌾", cor: "from-amber-600 to-slate-900" },
        contexto: "Núcleo produtivo do Brasil colonial.",
        pecaCertaId: "eco",
        feedbackAcerto: "Correto. Engenho = ECONOMIA.",
        feedbackErro: "É ECONOMIA colonial.",
      },
      {
        id: "r2",
        municipioA: { nome: "Governo-Geral em Salvador (1549)", emoji: "🏛️", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Centralização administrativa", emoji: "📜", cor: "from-cyan-600 to-slate-900" },
        contexto: "Sede administrativa colonial.",
        pecaCertaId: "adm",
        feedbackAcerto: "Correto. Governo-Geral = ADMINISTRAÇÃO.",
        feedbackErro: "É ADMINISTRAÇÃO colonial.",
      },
      {
        id: "r3",
        municipioA: { nome: "Escravidão africana", emoji: "⛓️", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Trabalho compulsório", emoji: "🔗", cor: "from-slate-600 to-slate-900" },
        contexto: "Base da força de trabalho colonial.",
        pecaCertaId: "tra",
        feedbackAcerto: "Correto. Escravidão = TRABALHO.",
        feedbackErro: "É TRABALHO — escravidão foi a base laboral colonial.",
      },
      {
        id: "r4",
        municipioA: { nome: "Quilombo dos Palmares", emoji: "🛡️", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Comunidade de resistência", emoji: "✊", cor: "from-teal-600 to-slate-900" },
        contexto: "Maior forma organizada de resistência à escravidão.",
        pecaCertaId: "res",
        feedbackAcerto: "Correto. Palmares = RESISTÊNCIA.",
        feedbackErro: "É RESISTÊNCIA — Palmares foi o maior quilombo.",
      },
      {
        id: "r5",
        municipioA: { nome: "Capitanias Hereditárias (1534)", emoji: "🗺️", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Divisão administrativa colonial", emoji: "📋", cor: "from-cyan-600 to-slate-900" },
        contexto: "Sistema de doação de terras a nobres.",
        pecaCertaId: "adm",
        feedbackAcerto: "Correto. Capitanias = ADMINISTRAÇÃO.",
        feedbackErro: "É ADMINISTRAÇÃO colonial.",
      },
      {
        id: "r6",
        municipioA: { nome: "Zumbi dos Palmares", emoji: "✊", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Líder da resistência negra", emoji: "🛡️", cor: "from-teal-600 to-slate-900" },
        contexto: "Símbolo máximo da luta contra a escravidão.",
        pecaCertaId: "res",
        feedbackAcerto: "Correto. Zumbi = RESISTÊNCIA. 20/11 é Dia da Consciência Negra.",
        feedbackErro: "É RESISTÊNCIA — Zumbi é símbolo máximo da luta.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já lê o Brasil colonial em suas quatro dimensões estruturais.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da sociedade colonial brasileira: proporção entre elite colonial e trabalhadores escravizados.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgInf,
    fatias: [
      {
        id: "eli",
        rotulo: "Elite colonial (~10%)",
        emoji: "👑",
        percentual: 10,
        cor: "#b45309",
        descricao:
          "Senhores de engenho, funcionários portugueses, altos religiosos, grandes comerciantes. Concentravam terras, engenhos, cargos e capital.",
        exemplos: ["🏛️ Senhores", "👑 Governadores", "⛪ Alto clero"],
      },
      {
        id: "esc",
        rotulo: "Escravizados e trabalhadores pobres (~90%)",
        emoji: "⛓️",
        percentual: 90,
        cor: "#0f766e",
        descricao:
          "Africanos escravizados (a maioria absoluta), indígenas explorados, mestiços pobres, artesãos livres. Sustentavam toda a máquina econômica.",
        exemplos: ["⛓️ Escravizados", "🏹 Indígenas", "🛠️ Pobres livres"],
      },
    ],
    falaFinal:
      "Pequena elite privilegiada em cima. Maioria explorada embaixo. Essa desigualdade ecoa até hoje.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra fechar a Bússola do Novo Mundo.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgEngenho,
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual foi o principal PRODUTO exportado no Brasil colonial dos séculos XVI-XVII?",
        opcoes: [
          { id: "a", texto: "Soja.", correta: false },
          { id: "b", texto: "Açúcar.", correta: true },
          { id: "c", texto: "Café.", correta: false },
        ],
        feedbackAcerto: "Correto. AÇÚCAR foi o principal por cerca de 200 anos.",
        feedbackErro: "É o AÇÚCAR. Soja é atual; café só dominou no séc. XIX.",
      },
      {
        id: "av2",
        pergunta: "Qual foi o SISTEMA de trabalho dominante no Brasil colonial?",
        opcoes: [
          { id: "a", texto: "Escravidão africana.", correta: true },
          { id: "b", texto: "Trabalho assalariado moderno.", correta: false },
          { id: "c", texto: "Voluntariado.", correta: false },
        ],
        feedbackAcerto: "Correto. ESCRAVIDÃO AFRICANA — cerca de 4,8 milhões de pessoas trazidas.",
        feedbackErro: "É a ESCRAVIDÃO AFRICANA. Assalariado só se generalizou depois de 1888.",
      },
      {
        id: "av3",
        pergunta: "Qual foi o MAIOR quilombo das Américas?",
        opcoes: [
          { id: "a", texto: "Palmares (Pernambuco/Alagoas).", correta: true },
          { id: "b", texto: "Buraco do Tatu.", correta: false },
          { id: "c", texto: "Cabana da Bahia.", correta: false },
        ],
        feedbackAcerto: "Correto. PALMARES — quase 100 anos, até 20 mil habitantes, liderado por Zumbi.",
        feedbackErro: "É PALMARES — maior quilombo das Américas.",
      },
    ],
    selo: {
      nome: "Estandarte da Sociedade Colonial e da Resistência",
      subtitulo: "Engrenagem 7 — FINAL da Bússola",
      emoji: "🇧🇷",
      cor: "from-teal-500 to-slate-900",
      fotoUrl: imgPalmares,
    },
    falaFinal:
      "Bússola do Novo Mundo COMPLETA! Você atravessou o feudalismo, o renascimento, as reformas, o absolutismo, as navegações, a conquista e o Brasil colonial.",
  },

  recompensa: {
    xp: 800,
    moedas: 700,
    medalha: "Estandarte da Sociedade Colonial e da Resistência",
  },
};
