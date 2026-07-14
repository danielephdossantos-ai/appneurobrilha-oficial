import type { AulaGeoV1 } from "../../types";
import placasImg from "@/assets/ciencias-8ano/u6/placas-tectonicas.jpg";
import camadasImg from "@/assets/ciencias-7ano/u6-a1/camadas-terra.jpg";
import sistemaSolarImg from "@/assets/ciencias-7ano/u6-a1/sistema-solar.jpg";
import galaxiasImg from "@/assets/ciencias-7ano/u6-a1/galaxias.jpg";
import vulcaoImg from "@/assets/ciencias-8ano/u6/vulcao-erupcao.jpg";
import atmosferaImg from "@/assets/ciencias-8ano/u6/atmosfera-camadas.jpg";
import viaLacteaImg from "@/assets/ciencias-8ano/u6/via-lactea.jpg";
import climaImg from "@/assets/ciencias-8ano/u6/mudanca-climatica.jpg";

/**
 * Ciências · 8º Ano · U6 · A01 — "Observatório Planetário"
 * Estrutura da Terra, placas tectônicas, atmosfera, clima e universo.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-observatorio-planetario",
  titulo: "Observatório Planetário",
  iconeTrilha: "🌍",
  recompensa: { xp: 140, moedas: 55, medalha: "Geocientista Júnior" },
  bncc: ["EF08CI11", "EF08CI13"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Observatório: globo terrestre 3D e planetário. Toque para iniciar.",
    mapaUrl: placasImg,
    imagemDestaqueUrl: sistemaSolarImg,
    aurora:
      "Setor 6: Observatório Planetário. Missão: entender que a Terra é um planeta VIVO — placas se movem, vulcões erupcionam, clima muda — dentro de um Universo em expansão.",
    falaFinal:
      "Do núcleo do nosso planeta às galáxias distantes: tudo é dinâmica cósmica.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Problema: por que o mapa mostra que a costa da AMÉRICA DO SUL 'encaixa' com a costa da ÁFRICA?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: placasImg,
    opcoes: [
      { id: "coincidencia", titulo: "Pura coincidência", subtitulo: "não significa nada", emoji: "🎲", cor: "from-slate-500 to-slate-700", fotoUrl: placasImg },
      { id: "deriva", titulo: "Já foram GRUDADOS", subtitulo: "e as placas se afastaram", emoji: "🧩", cor: "from-emerald-500 to-teal-700", fotoUrl: placasImg },
      { id: "erosao", titulo: "Erosão do mar", subtitulo: "esculpiu formatos parecidos", emoji: "🌊", cor: "from-red-500 to-rose-700", fotoUrl: placasImg },
    ],
    respostaCerta: "deriva",
    feedbackAcerto:
      "Correto. Alfred Wegener (1912): os continentes estavam GRUDADOS num supercontinente (Pangeia) e se afastaram. Depois confirmado pela tectônica de placas.",
    feedbackErro:
      "Não é coincidência nem erosão. Wegener percebeu que os continentes já estiveram JUNTOS. A tectônica de placas explica o movimento.",
    falaFinal:
      "As placas se movem alguns cm por ano — cerca da velocidade com que sua unha cresce.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da geologia e astronomia.",
    instrucao: "Vocabulário do Observatório",
    cadernos: [
      { id: "placas", capa: "PLACAS TECTÔNICAS", emoji: "🧩", cor: "from-amber-500 to-orange-700", conteudo: "Grandes blocos da crosta que 'flutuam' sobre o manto viscoso. Movem-se alguns cm/ano.", exemplo: "Ex.: Placa Sul-Americana, Placa Africana, Placa do Pacífico.", fotoUrl: placasImg },
      { id: "vulcao", capa: "VULCÃO", emoji: "🌋", cor: "from-red-500 to-rose-700", conteudo: "Abertura pela qual magma sobe do interior da Terra. Concentra-se nas bordas das placas.", exemplo: "Ex.: Círculo de Fogo do Pacífico concentra 75% dos vulcões ativos.", fotoUrl: placasImg },
      { id: "terremoto", capa: "TERREMOTO", emoji: "📉", cor: "from-slate-500 to-slate-700", conteudo: "Vibração da crosta causada por movimento das placas. Medido pela escala Richter.", exemplo: "Ex.: Falha de San Andreas (EUA); Chile; Japão.", fotoUrl: placasImg },
      { id: "atmosfera", capa: "ATMOSFERA", emoji: "🌫️", cor: "from-sky-500 to-cyan-700", conteudo: "Camada de gases ao redor da Terra: 78% N₂, 21% O₂, 1% outros. Protege da radiação e regula temperatura.", exemplo: "Ex.: sem ela, dia = 120 °C, noite = −180 °C.", fotoUrl: camadasImg },
      { id: "universo", capa: "UNIVERSO", emoji: "🌌", cor: "from-indigo-500 to-purple-700", conteudo: "Tudo o que existe: matéria, energia, espaço-tempo. Contém cerca de 2 trilhões de galáxias, cada uma com bilhões de estrelas.", exemplo: "Ex.: Via Láctea (nossa galáxia) tem ~200 bilhões de estrelas.", fotoUrl: galaxiasImg },
    ],
    falaFinal:
      "Placas, vulcões, terremotos, atmosfera, universo. Cinco chaves das geociências.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Camadas da Terra. Toque para investigar cada uma.",
    instrucao: "Toque nas camadas",
    mapaUrl: camadasImg,
    pontos: [
      { id: "crosta", x: 50, y: 15, emoji: "🪨", cor: "from-amber-500 to-orange-700", titulo: "Crosta", texto: "Camada externa e fina (5-70 km). Onde vivemos. Formada por continentes e fundo oceânico.", fotoUrl: placasImg },
      { id: "manto", x: 50, y: 40, emoji: "🌋", cor: "from-red-500 to-rose-700", titulo: "Manto", texto: "Cerca de 2.900 km de rocha semilíquida (magma). Correntes de convecção movem as placas.", fotoUrl: camadasImg },
      { id: "nucleo_ext", x: 50, y: 65, emoji: "🔥", cor: "from-orange-500 to-red-700", titulo: "Núcleo externo", texto: "Ferro e níquel LÍQUIDOS. Gera o campo magnético da Terra.", fotoUrl: camadasImg },
      { id: "nucleo_int", x: 50, y: 85, emoji: "⚫", cor: "from-slate-600 to-slate-800", titulo: "Núcleo interno", texto: "Ferro SÓLIDO a cerca de 5.500 °C. Pressão gigante impede que derreta.", fotoUrl: camadasImg },
    ],
    falaFinal:
      "Quatro camadas. A energia interna da Terra ainda vem da formação do planeta há 4,5 bilhões de anos.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "As placas tectônicas se MOVEM. Em qual velocidade?", fotoUrl: placasImg,
        cards: [
          { id: "a", emoji: "🐌", titulo: "Alguns cm por ano", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🚗", titulo: "Alguns km por dia", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "⚡", titulo: "Não se movem", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Alguns cm/ano — parecido com o crescimento da sua unha. Ao longo de milhões de anos, muda continentes.",
        feedbackErro: "Se fosse km/dia, sentiríamos. Placas se movem CENTÍMETROS por ANO — muito lento, mas contínuo." },
      { id: "q2", pergunta: "Qual GÁS é mais abundante na atmosfera?", fotoUrl: camadasImg,
        cards: [
          { id: "a", emoji: "🌬️", titulo: "Nitrogênio (78%)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💨", titulo: "Oxigênio (21%)", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔥", titulo: "Gás carbônico (~0,04%)", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Nitrogênio é o mais abundante — 78%.",
        feedbackErro: "Oxigênio é vital, mas só 21%. O CAMPEÃO em quantidade é o NITROGÊNIO (78%)." },
      { id: "q3", pergunta: "Nossa galáxia se chama...", fotoUrl: galaxiasImg,
        cards: [
          { id: "a", emoji: "🌌", titulo: "Via Láctea", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌀", titulo: "Andrômeda", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "⭐", titulo: "Alpha Centauri", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Via Láctea, com cerca de 200 bilhões de estrelas.",
        feedbackErro: "Andrômeda é galáxia VIZINHA. Alpha Centauri é estrela. Nossa galáxia = VIA LÁCTEA." },
    ],
    falaFinal:
      "Placas cm/ano, nitrogênio 78%, nossa galáxia = Via Láctea.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "As bordas de placas se dividem em duas grandes categorias. Toque nos interruptores.",
    instrucao: "Toque nos interruptores",
    mapaUrl: placasImg,
    camadas: [
      { id: "convergente", rotulo: "Borda Convergente", emoji: "💥", cor: "from-red-500 to-rose-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Placas se CHOCAM. Formam montanhas (Andes, Himalaia), vulcões e fossas oceânicas. Geram grandes terremotos.", fotoUrl: placasImg },
      { id: "divergente", rotulo: "Borda Divergente", emoji: "↔️", cor: "from-sky-500 to-cyan-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Placas se AFASTAM. Magma sobe e forma novo fundo oceânico. Ex.: Cordilheira Meso-Atlântica.", fotoUrl: placasImg },
    ],
    falaFinal:
      "Convergentes fazem montanhas; divergentes criam oceanos.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os OBJETOS do UNIVERSO — do menor ao maior.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Do menor ao maior:",
    paradas: [
      { id: "lua", emoji: "🌙", rotulo: "1. Lua", descricao: "Satélite natural da Terra.", fotoUrl: sistemaSolarImg },
      { id: "terra", emoji: "🌍", rotulo: "2. Terra", descricao: "Nosso planeta.", fotoUrl: sistemaSolarImg },
      { id: "sol", emoji: "☀️", rotulo: "3. Sol", descricao: "Estrela do sistema solar.", fotoUrl: sistemaSolarImg },
      { id: "galaxia", emoji: "🌌", rotulo: "4. Via Láctea", descricao: "Galáxia com ~200 bi de estrelas.", fotoUrl: galaxiasImg },
      { id: "universo", emoji: "🌠", rotulo: "5. Universo observável", descricao: "~2 trilhões de galáxias.", fotoUrl: galaxiasImg },
    ],
    ordemCerta: ["lua", "terra", "sol", "galaxia", "universo"],
    feedbackAcerto:
      "Perfeito. Do satélite ao universo observável — 5 escalas cósmicas.",
    feedbackErro:
      "Do menor: Lua → Terra → Sol → Via Láctea → Universo. Cada escala contém a anterior.",
    falaFinal:
      "Somos parte de uma hierarquia gigantesca de estruturas.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Observatório.",
    tituloLivro: "📓 Relatório · Terra Dinâmica e Aquecimento Global",
    subtitulo: "Um planeta vivo em transformação",
    paragrafos: [
      { id: "p1", texto: "TERRA DINÂMICA: a Terra é um planeta ATIVO. Placas tectônicas se movem, gerando vulcões, terremotos e novas montanhas. Isso libera CO₂ natural na atmosfera há bilhões de anos.", chaves: ["placas tectônicas"], definicoes: { "placas tectônicas": "Blocos rígidos que compõem a crosta terrestre." }, fotoUrl: placasImg },
      { id: "p2", texto: "ATMOSFERA E CLIMA: a atmosfera regula a temperatura via efeito estufa natural. Gases como CO₂ e vapor d'água retêm calor. Sem efeito estufa, a Terra seria congelada (~ −18 °C). COM efeito estufa natural: cerca de 15 °C.", chaves: ["efeito estufa"], definicoes: { "efeito estufa": "Retenção de calor pela atmosfera." }, fotoUrl: camadasImg },
      { id: "p3", texto: "AQUECIMENTO GLOBAL: a queima de combustíveis fósseis ADICIONOU muito CO₂ desde 1850. O planeta já aqueceu +1,2 °C em média. Consequências: geleiras derretem, mar sobe, extremos climáticos aumentam. Migrar para energias renováveis é URGENTE.", chaves: ["aquecimento global"], definicoes: { "aquecimento global": "Aumento anormal da temperatura média do planeta." }, fotoUrl: sistemaSolarImg },
    ],
    falaFinal:
      "Ciência mostra: Terra sempre mudou — mas nunca tão rápido quanto agora, por causa humana.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio: fenômeno da Terra, do Sistema Solar ou do Universo?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "terra", emoji: "🌍", rotulo: "Terra" },
      { id: "sistema", emoji: "☀️", rotulo: "Sistema Solar" },
      { id: "universo", emoji: "🌌", rotulo: "Universo" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Vulcão em erupção", emoji: "🌋", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Magma sobe pela crosta", emoji: "🔥", cor: "from-amber-500 to-orange-700" }, contexto: "Ocorre nas bordas de placas.", pecaCertaId: "terra", fotoUrl: placasImg, feedbackAcerto: "Terra. Fenômeno geológico local.", feedbackErro: "Vulcão é fenômeno da TERRA — dinâmica interna do planeta." },
      { id: "r2", municipioA: { nome: "Eclipse solar", emoji: "☀️", cor: "from-slate-500 to-slate-700" }, municipioB: { nome: "Lua cobre o Sol", emoji: "🌑", cor: "from-indigo-500 to-purple-700" }, contexto: "Sol, Lua e Terra alinhados.", pecaCertaId: "sistema", fotoUrl: sistemaSolarImg, feedbackAcerto: "Sistema Solar. Envolve Terra + Lua + Sol.", feedbackErro: "Envolve 3 corpos do SISTEMA SOLAR." },
      { id: "r3", municipioA: { nome: "Galáxia Andrômeda", emoji: "🌀", cor: "from-indigo-500 to-purple-700" }, municipioB: { nome: "Vizinha da Via Láctea", emoji: "🌌", cor: "from-fuchsia-500 to-pink-700" }, contexto: "A 2,5 milhões de anos-luz.", pecaCertaId: "universo", fotoUrl: galaxiasImg, feedbackAcerto: "Universo. Galáxia está fora do Sistema Solar.", feedbackErro: "Galáxia é objeto do UNIVERSO — muito além do Sistema Solar." },
      { id: "r4", municipioA: { nome: "Tsunami no Pacífico", emoji: "🌊", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Causado por terremoto", emoji: "📉", cor: "from-slate-500 to-slate-700" }, contexto: "Ondas gigantes após abalo submarino.", pecaCertaId: "terra", fotoUrl: placasImg, feedbackAcerto: "Terra. Consequência de tectônica.", feedbackErro: "Tsunami vem de terremoto submarino — fenômeno da TERRA." },
    ],
    falaFinal:
      "Você já organiza os fenômenos por escala.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "O Observatório integra dois olhares: para DENTRO da Terra (geologia) e para FORA (astronomia).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: placasImg,
    fatias: [
      { id: "dentro", rotulo: "Para dentro", emoji: "🌍", percentual: 50, cor: "#f97316", descricao: "Camadas da Terra, placas tectônicas, vulcões, terremotos, atmosfera e clima.", exemplos: ["Placas", "Vulcões", "Efeito estufa"], fotoUrl: placasImg },
      { id: "fora", rotulo: "Para fora", emoji: "🌌", percentual: 50, cor: "#6366f1", descricao: "Sistema Solar, Via Láctea, galáxias, universo em expansão desde o Big Bang.", exemplos: ["Sol", "Planetas", "Galáxias"], fotoUrl: galaxiasImg },
    ],
    falaFinal:
      "Olhar dentro e olhar fora são o mesmo gesto científico. Fim do Setor 6.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Setor 6. Responda 3 perguntas para sua Certificação de Geocientista Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: sistemaSolarImg,
    perguntas: [
      { id: "q1", pergunta: "Quem propôs a DERIVA CONTINENTAL em 1912?", fotoUrl: placasImg,
        opcoes: [
          { id: "a", texto: "Alfred Wegener", correta: true },
          { id: "b", texto: "Isaac Newton" },
        ],
        feedbackAcerto: "Sim. Wegener notou o encaixe dos continentes e fósseis idênticos em terras separadas.",
        feedbackErro: "Newton = gravidade. WEGENER propôs a deriva continental." },
      { id: "q2", pergunta: "A ATMOSFERA é composta principalmente por...", fotoUrl: camadasImg,
        opcoes: [
          { id: "a", texto: "78% nitrogênio + 21% oxigênio + 1% outros", correta: true },
          { id: "b", texto: "50% oxigênio + 50% CO₂" },
        ],
        feedbackAcerto: "Correto. Nitrogênio domina; oxigênio é vital, mas menor.",
        feedbackErro: "CO₂ é só ~0,04%. Composição real: 78% N₂, 21% O₂, 1% outros." },
      { id: "q3", pergunta: "Qual estrutura CONTÉM o Sistema Solar?", fotoUrl: galaxiasImg,
        opcoes: [
          { id: "a", texto: "A galáxia Via Láctea", correta: true },
          { id: "b", texto: "A galáxia Andrômeda" },
        ],
        feedbackAcerto: "Sim. Nosso Sol é uma das ~200 bi de estrelas da Via Láctea.",
        feedbackErro: "Andrômeda é galáxia vizinha. Estamos na VIA LÁCTEA." },
    ],
    selo: { nome: "Certificação · Geocientista Júnior", subtitulo: "Setor 6 · Terra, Clima e Universo", emoji: "🌍", cor: "from-sky-500 to-cyan-700" },
    falaFinal:
      "Setor 6 CONCLUÍDO. Próximo: Congresso Científico Integrador.",
  },
};
