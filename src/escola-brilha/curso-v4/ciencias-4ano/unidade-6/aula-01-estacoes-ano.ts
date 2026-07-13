import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png";
import orbitaImg from "@/assets/ciencias-4ano/u6-a1/terra-orbita.jpg";
import veraoImg from "@/assets/ciencias-4ano/u6-a1/verao.jpg";
import outonoImg from "@/assets/ciencias-4ano/u6-a1/outono.jpg";
import invernoImg from "@/assets/ciencias-4ano/u6-a1/inverno.jpg";
import primaveraImg from "@/assets/ciencias-4ano/u6-a1/primavera.jpg";
import calendarioImg from "@/assets/ciencias-4ano/u6-a1/calendario.jpg";

/**
 * Ciências · 4º Ano · Unidade 6 · Aula 01
 * "Calendário, Estações e Movimentos da Terra" — EF04CI11
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-estacoes-ano",
  titulo: "Estações do Ano",
  iconeTrilha: "🍂",
  bncc: ["EF04CI11"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pela órbita da Terra. Veja como as estações nascem.",
    mapaUrl: orbitaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Equipe, olha a Terra dando UMA VOLTA no sol. Essa volta demora 365 dias — um ANO. E como o eixo da Terra é INCLINADO, cada parte do planeta recebe mais ou menos sol em momentos diferentes. Nascem as 4 ESTAÇÕES.",
    falaFinal:
      "Estação não é sobre o sol chegar mais perto — é sobre a inclinação da Terra e a intensidade da luz que chega.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Por que faz mais CALOR no verão?",
    pergunta: "Hipótese: verão é quente porque...",
    fotoUrl: veraoImg,
    opcoes: [
      { id: "perto", titulo: "Terra fica mais PERTO do sol", subtitulo: "sol esquenta mais", emoji: "☀️", cor: "from-amber-500 to-orange-700" },
      { id: "inclinacao", titulo: "Nosso lado fica INCLINADO PRO sol", subtitulo: "recebe raios mais diretos", emoji: "🌍", cor: "from-emerald-500 to-green-700" },
      { id: "vento", titulo: "Ventos ficam mais quentes", subtitulo: "aquecem o país", emoji: "🌬️", cor: "from-cyan-500 to-sky-700" },
    ],
    respostaCerta: "inclinacao",
    feedbackAcerto:
      "Correto. A distância Terra-Sol quase não muda. O que muda é a INCLINAÇÃO. No verão nosso hemisfério pega raios DIRETOS. No inverno, raios INCLINADOS espalham a energia — menos calor.",
    feedbackErro:
      "Não é a distância. É a INCLINAÇÃO do planeta. Quando nosso lado fica virado pro sol, os raios chegam DIRETOS e concentram energia — dá verão.",
    falaFinal:
      "Ciência quebra intuição. O que parece 'perto/longe' é 'inclinado/reto'. Muito mais elegante.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave do calendário terrestre. Estuda cada caderno.",
    instrucao: "Vocabulário técnico das estações",
    cadernos: [
      {
        id: "translacao",
        capa: "TRANSLAÇÃO",
        emoji: "🌍",
        cor: "from-cyan-500 to-sky-700",
        conteudo: "Movimento da Terra ao redor do sol. Uma volta completa dura 365 dias e 6 horas — um ANO.",
        exemplo: "Ex.: a cada 4 anos temos ano bissexto (366 dias) pra compensar as 6 horas extras.",
        fotoUrl: orbitaImg,
      },
      {
        id: "verao",
        capa: "VERÃO",
        emoji: "☀️",
        cor: "from-amber-500 to-orange-700",
        conteudo: "Estação mais QUENTE. Nosso hemisfério recebe raios DIRETOS. Dias longos e noites curtas.",
        exemplo: "Ex.: no Brasil, verão vai de dezembro a março.",
        fotoUrl: veraoImg,
      },
      {
        id: "outono",
        capa: "OUTONO",
        emoji: "🍂",
        cor: "from-orange-600 to-red-800",
        conteudo: "Estação de TRANSIÇÃO. Fica mais fresco. Muitas árvores perdem folhas pra economizar água.",
        exemplo: "Ex.: no Brasil, outono vai de março a junho.",
        fotoUrl: outonoImg,
      },
      {
        id: "inverno",
        capa: "INVERNO",
        emoji: "❄️",
        cor: "from-slate-500 to-slate-800",
        conteudo: "Estação mais FRIA. Raios chegam INCLINADOS. Dias curtos e noites longas.",
        exemplo: "Ex.: no Brasil, inverno vai de junho a setembro. No Sul, pode nevar.",
        fotoUrl: invernoImg,
      },
      {
        id: "primavera",
        capa: "PRIMAVERA",
        emoji: "🌸",
        cor: "from-pink-500 to-fuchsia-700",
        conteudo: "Estação da RENOVAÇÃO. Plantas florescem, animais se reproduzem. Temperaturas amenas.",
        exemplo: "Ex.: no Brasil, primavera vai de setembro a dezembro.",
        fotoUrl: primaveraImg,
      },
    ],
    falaFinal: "Translação, verão, outono, inverno e primavera. O calendário biológico do planeta.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toca em cada estação da Terra pra ver o que muda.",
    instrucao: "Toque em cada estação",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: orbitaImg,
    pontos: [
      {
        id: "verao", x: 15, y: 50, emoji: "☀️", cor: "from-amber-500 to-orange-700",
        titulo: "Verão",
        texto: "Nosso hemisfério inclinado PRA o sol. Raios diretos = mais calor. Dias longos, noites curtas.",
        fotoUrl: veraoImg,
      },
      {
        id: "outono", x: 50, y: 15, emoji: "🍂", cor: "from-orange-600 to-red-800",
        titulo: "Outono",
        texto: "Transição verão→inverno. Temperaturas caem, folhas amarelam e caem. Menos chuva em muitas regiões.",
        fotoUrl: outonoImg,
      },
      {
        id: "inverno", x: 85, y: 50, emoji: "❄️", cor: "from-slate-500 to-slate-800",
        titulo: "Inverno",
        texto: "Nosso hemisfério inclinado LONGE do sol. Raios inclinados = menos calor. Dias curtos.",
        fotoUrl: invernoImg,
      },
      {
        id: "primavera", x: 50, y: 85, emoji: "🌸", cor: "from-pink-500 to-fuchsia-700",
        titulo: "Primavera",
        texto: "Transição inverno→verão. Aquece de novo, flores desabrocham, animais voltam a se reproduzir.",
        fotoUrl: primaveraImg,
      },
      {
        id: "orbita", x: 50, y: 50, emoji: "🌍", cor: "from-cyan-500 to-sky-700",
        titulo: "Órbita",
        texto: "365 dias pra dar uma volta completa. É por isso que temos um ANO. E as 4 estações se sucedem sempre na mesma ordem.",
        fotoUrl: orbitaImg,
      },
    ],
    falaFinal: "A Terra viaja e as estações mudam. Ciclo perfeito, ano após ano.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas técnicas de astronomia.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quanto tempo dura uma TRANSLAÇÃO da Terra?",
        fotoUrl: orbitaImg,
        cards: [
          { id: "a", emoji: "📆", titulo: "365 dias (1 ano)", cor: "from-cyan-500 to-sky-700" },
          { id: "b", emoji: "🕐", titulo: "24 horas (1 dia)", cor: "from-amber-500 to-orange-700" },
          { id: "c", emoji: "📅", titulo: "30 dias (1 mês)", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "a",
        feedbackAcerto: "Sim. Translação = 1 volta = 365 dias = 1 ano.",
        feedbackErro: "24h é rotação (giro em si). Translação = 365 dias, uma volta ao sol.",
      },
      {
        id: "q2",
        pergunta: "No VERÃO, os raios do sol chegam:",
        fotoUrl: veraoImg,
        cards: [
          { id: "a", emoji: "⬇️", titulo: "Diretos (concentrados)", cor: "from-amber-500 to-orange-700" },
          { id: "b", emoji: "↘️", titulo: "Inclinados (espalhados)", cor: "from-slate-500 to-slate-800" },
          { id: "c", emoji: "🚫", titulo: "Não chegam", cor: "from-red-500 to-rose-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Raios DIRETOS concentram energia = mais calor.",
        feedbackErro: "Verão = raios DIRETOS. Inverno = raios INCLINADOS. Diferença de intensidade.",
      },
      {
        id: "q3",
        pergunta: "Qual a ordem CORRETA das estações no Brasil?",
        fotoUrl: primaveraImg,
        cards: [
          { id: "a", emoji: "🌸", titulo: "Verão→Outono→Inverno→Primavera", cor: "from-emerald-500 to-green-700" },
          { id: "b", emoji: "❄️", titulo: "Inverno→Primavera→Verão→Outono", cor: "from-cyan-500 to-sky-700" },
          { id: "c", emoji: "🍂", titulo: "Outono→Verão→Inverno→Primavera", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Sim. No Brasil: dez–mar Verão, mar–jun Outono, jun–set Inverno, set–dez Primavera.",
        feedbackErro: "A ordem SEMPRE é: Verão → Outono → Inverno → Primavera → Verão de novo.",
      },
    ],
    falaFinal: "Você entende o calendário astronômico.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "A Terra faz DOIS movimentos ao mesmo tempo. Rotação gera dia/noite; translação gera ano/estações.",
    instrucao: "Toque nos interruptores",
    mapaUrl: orbitaImg,
    camadas: [
      {
        id: "rotacao",
        rotulo: "Rotação (dia/noite)",
        emoji: "🔄",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 5, y: 5, w: 90, h: 45 },
        descricao: "Terra gira em torno do próprio eixo. 24 HORAS = 1 dia. Um lado pega sol (dia), o outro sombra (noite).",
        fotoUrl: veraoImg,
      },
      {
        id: "translacao",
        rotulo: "Translação (ano/estações)",
        emoji: "🌍",
        cor: "from-cyan-500 to-sky-700",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao: "Terra circula o sol. 365 DIAS = 1 ano. A inclinação do eixo gera as 4 estações.",
        fotoUrl: orbitaImg,
      },
    ],
    falaFinal: "Dois movimentos simultâneos: um dá o dia, outro dá o ano.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Rota das estações no Brasil, começando pelo verão.",
    instrucao: "Toque nas paradas na ORDEM correta",
    pergunta: "Sequência das estações (Brasil, dez em diante):",
    paradas: [
      { id: "verao", emoji: "☀️", rotulo: "1. Verão", descricao: "Dez–Mar. Quente, dias longos, muita chuva no SE.", fotoUrl: veraoImg },
      { id: "outono", emoji: "🍂", rotulo: "2. Outono", descricao: "Mar–Jun. Esfria, folhas caem em algumas espécies.", fotoUrl: outonoImg },
      { id: "inverno", emoji: "❄️", rotulo: "3. Inverno", descricao: "Jun–Set. Estação mais fria, dias curtos.", fotoUrl: invernoImg },
      { id: "primavera", emoji: "🌸", rotulo: "4. Primavera", descricao: "Set–Dez. Aquece, flores desabrocham.", fotoUrl: primaveraImg },
    ],
    ordemCerta: ["verao", "outono", "inverno", "primavera"],
    feedbackAcerto: "Sequência do calendário brasileiro. Um ciclo completo de 365 dias.",
    feedbackErro: "Pensa: verão (quente) → outono (transição) → inverno (frio) → primavera (transição).",
    falaFinal: "As estações se sucedem sempre na mesma ordem. Ciência = padrão.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua leitura. Diário astronômico.",
    tituloLivro: "📓 Diário · Estudo das Estações",
    subtitulo: "Investigação: por que existem 4 estações",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A TERRA faz DOIS movimentos ao mesmo tempo. A ROTAÇÃO é o giro em torno do próprio eixo — dura 24 HORAS e cria o dia e a noite. A TRANSLAÇÃO é a volta ao redor do SOL — dura 365 DIAS e cria o ano com suas 4 estações.",
        chaves: ["rotação", "translação", "ano"],
        definicoes: {
          rotação: "Giro da Terra em torno de si mesma (dia/noite).",
          translação: "Volta da Terra ao redor do sol (ano).",
          ano: "Tempo que a Terra leva para dar uma volta completa no sol.",
        },
        fotoUrl: orbitaImg,
      },
      {
        id: "p2",
        texto:
          "O EIXO da Terra é INCLINADO (uns 23°). Por isso, ao longo do ano, cada hemisfério fica mais ou menos inclinado pro sol. Quando nosso hemisfério aponta PRO sol, os RAIOS chegam DIRETOS e concentram calor — é VERÃO. Quando aponta LONGE, os raios chegam INCLINADOS e espalham a energia — é INVERNO.",
        chaves: ["eixo inclinado", "raios diretos"],
        definicoes: {
          "eixo inclinado": "Linha imaginária que passa pelos polos, torta em 23°.",
          "raios diretos": "Luz do sol que bate quase perpendicular no chão.",
        },
        fotoUrl: veraoImg,
      },
      {
        id: "p3",
        texto:
          "As 4 ESTAÇÕES seguem sempre a mesma ordem: Verão, Outono, Inverno, Primavera. Cada uma dura cerca de 3 MESES. Elas afetam plantas (folhas caem no outono, flores no primavera), animais (migração, hibernação) e humanos (roupas, alimentação, agricultura).",
        chaves: ["estações", "3 meses"],
        definicoes: {
          estações: "Quatro fases do ano definidas por clima e inclinação solar.",
          "3 meses": "Duração aproximada de cada estação (~90 dias).",
        },
        fotoUrl: calendarioImg,
      },
    ],
    falaFinal: "Você entende por que o mundo tem estações — inclinação, não distância.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado. Identifica a estação certa em cada cena.",
    instrucao: "⏱️ Escolha a estação",
    duracaoSegundos: 20,
    pecas: [
      { id: "verao", emoji: "☀️", rotulo: "Verão" },
      { id: "outono", emoji: "🍂", rotulo: "Outono" },
      { id: "inverno", emoji: "❄️", rotulo: "Inverno" },
      { id: "primavera", emoji: "🌸", rotulo: "Primavera" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Praia lotada", emoji: "🏖️", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Janeiro no RJ", emoji: "☀️", cor: "from-yellow-400 to-orange-600" },
        contexto: "Rio de Janeiro em janeiro. Praias cheias, 35°C, sol forte.",
        pecaCertaId: "verao",
        fotoUrl: veraoImg,
        feedbackAcerto: "Sim. Janeiro = VERÃO no Brasil.",
        feedbackErro: "Janeiro no Brasil = pleno VERÃO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Folhas caindo", emoji: "🍁", cor: "from-orange-600 to-red-800" },
        municipioB: { nome: "Abril", emoji: "🌰", cor: "from-amber-700 to-yellow-900" },
        contexto: "Abril no sul do Brasil. Árvores com folhas amarelas e vermelhas caindo no chão.",
        pecaCertaId: "outono",
        fotoUrl: outonoImg,
        feedbackAcerto: "Correto. Folhas caindo = OUTONO.",
        feedbackErro: "Folhas caindo em abril = OUTONO (mar–jun).",
      },
      {
        id: "r3",
        municipioA: { nome: "Casaco pesado", emoji: "🧥", cor: "from-slate-500 to-slate-800" },
        municipioB: { nome: "Julho em Curitiba", emoji: "❄️", cor: "from-cyan-500 to-blue-800" },
        contexto: "Curitiba em julho. 5°C pela manhã, casaco necessário, dias curtos.",
        pecaCertaId: "inverno",
        fotoUrl: invernoImg,
        feedbackAcerto: "Sim. Frio + julho = INVERNO.",
        feedbackErro: "Julho no Brasil = pleno INVERNO (jun–set).",
      },
      {
        id: "r4",
        municipioA: { nome: "Flores desabrochando", emoji: "🌸", cor: "from-pink-500 to-fuchsia-700" },
        municipioB: { nome: "Outubro", emoji: "🌻", cor: "from-yellow-500 to-orange-600" },
        contexto: "Outubro em SP. Ipês floridos por toda a cidade, temperatura amena.",
        pecaCertaId: "primavera",
        fotoUrl: primaveraImg,
        feedbackAcerto: "Exato. Flores em outubro = PRIMAVERA.",
        feedbackErro: "Flores + outubro = PRIMAVERA (set–dez).",
      },
    ],
    falaFinal: "Você reconhece cada estação por pistas naturais.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "O ano se divide em duas grandes metades: METADE QUENTE e METADE FRIA.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: orbitaImg,
    fatias: [
      {
        id: "quente",
        rotulo: "Meio quente do ano",
        emoji: "☀️",
        percentual: 50,
        cor: "#ea580c",
        descricao: "Primavera + Verão. Setembro a março. Dias longos, calor, plantas crescem.",
        exemplos: ["Verão", "Primavera", "Dias longos"],
        fotoUrl: veraoImg,
      },
      {
        id: "frio",
        rotulo: "Meio frio do ano",
        emoji: "❄️",
        percentual: 50,
        cor: "#0284c7",
        descricao: "Outono + Inverno. Março a setembro. Dias curtos, frio, natureza descansa.",
        exemplos: ["Outono", "Inverno", "Dias curtos"],
        fotoUrl: invernoImg,
      },
    ],
    falaFinal: "Metade do ano é aquecendo, metade esfriando. A Terra é um pêndulo climático.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Missão final do ciclo terrestre.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      {
        id: "q1",
        pergunta: "Uma volta da Terra em torno do sol dura:",
        fotoUrl: orbitaImg,
        opcoes: [
          { id: "a", texto: "365 dias (1 ano)", correta: true },
          { id: "b", texto: "24 horas (1 dia)" },
        ],
        feedbackAcerto: "Sim. Translação = 365 dias.",
        feedbackErro: "24h é rotação. Translação = 1 ANO.",
      },
      {
        id: "q2",
        pergunta: "Verão é mais quente porque:",
        fotoUrl: veraoImg,
        opcoes: [
          { id: "a", texto: "Raios do sol chegam mais diretos", correta: true },
          { id: "b", texto: "A Terra fica bem mais perto do sol" },
        ],
        feedbackAcerto: "Correto. Inclinação, não distância.",
        feedbackErro: "Distância quase não muda. É a INCLINAÇÃO que gera raios diretos.",
      },
      {
        id: "q3",
        pergunta: "No Brasil, dezembro é:",
        fotoUrl: veraoImg,
        opcoes: [
          { id: "a", texto: "Verão", correta: true },
          { id: "b", texto: "Inverno" },
        ],
        feedbackAcerto: "Sim. Dezembro no Brasil = VERÃO.",
        feedbackErro: "No hemisfério SUL, dezembro é VERÃO.",
      },
    ],
    selo: {
      nome: "Selo das Estações",
      subtitulo: "Unidade 6 concluída · Astrônomo do Calendário",
      emoji: "📆",
      cor: "from-orange-400 via-pink-500 to-cyan-600",
    },
    falaFinal: "Selo das estações registrado. Próxima e última missão: ciclo da água e preservação.",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Cronista Astronômico" },
};
