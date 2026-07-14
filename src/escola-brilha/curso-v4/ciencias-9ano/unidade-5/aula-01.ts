import type { AulaGeoV1 } from "../../types";
import viaLacteaImg from "@/assets/ciencias-8ano/u6/via-lactea.jpg";
import atmosferaImg from "@/assets/ciencias-8ano/u6/atmosfera-camadas.jpg";
import vulcaoImg from "@/assets/ciencias-8ano/u6/vulcao-erupcao.jpg";
import placasImg from "@/assets/ciencias-8ano/u6/placas-tectonicas.jpg";
import mudancaImg from "@/assets/ciencias-8ano/u6/mudanca-climatica.jpg";
import painelImg from "@/assets/ciencias-8ano/u5/painel-solar.jpg";

/**
 * Ciências · 9º Ano · U5 · A01 — "Observatório Espacial"
 * Universo, galáxias, Sistema Solar, satélites, tecnologias e clima.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-05-observatorio-espacial",
  titulo: "Observatório Espacial",
  iconeTrilha: "🔭",
  recompensa: { xp: 160, moedas: 65, medalha: "Astrônomo Júnior" },
  bncc: ["EF09CI14", "EF09CI15", "EF09CI16", "EF09CI17"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Sala do Observatório Espacial. Toque para iniciar.",
    mapaUrl: viaLacteaImg,
    imagemDestaqueUrl: atmosferaImg,
    aurora:
      "Instituto 5: Observatório Espacial. Vamos entender a origem do Universo, o Sistema Solar, os satélites que usamos todo dia e como o clima do planeta está mudando.",
    falaFinal: "Astronomia é a ciência mais antiga e ainda a mais surpreendente.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Problema: qual a idade estimada do UNIVERSO?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: viaLacteaImg,
    opcoes: [
      { id: "138", titulo: "~13,8 bilhões de anos", subtitulo: "modelo do Big Bang", emoji: "🌌", cor: "from-emerald-500 to-teal-700" },
      { id: "milhoes", titulo: "Alguns milhões de anos", subtitulo: "mesma escala dos dinossauros", emoji: "🦖", cor: "from-slate-500 to-slate-700" },
      { id: "eterno", titulo: "Sempre existiu", subtitulo: "não teve começo", emoji: "♾️", cor: "from-red-500 to-rose-700" },
    ],
    respostaCerta: "138",
    feedbackAcerto:
      "Correto. Medidas da radiação cósmica de fundo indicam ~13,8 Ga desde o Big Bang.",
    feedbackErro:
      "A idade do Universo é ~13,8 bilhões de anos (medidas da radiação cósmica de fundo, WMAP e Planck).",
    falaFinal: "13,8 bilhões de anos — muito mais que qualquer registro humano.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da astronomia.",
    instrucao: "Vocabulário do Observatório",
    cadernos: [
      { id: "big", capa: "BIG BANG", emoji: "💥", cor: "from-red-500 to-rose-700", conteudo: "Modelo que explica a expansão do Universo a partir de um estado ultradenso e ultraquente há ~13,8 Ga.", exemplo: "Ex.: comprovado pela radiação cósmica de fundo (Penzias e Wilson, 1965).", fotoUrl: viaLacteaImg },
      { id: "gal", capa: "GALÁXIA", emoji: "🌌", cor: "from-indigo-500 to-purple-700", conteudo: "Conjunto de bilhões de estrelas, gás, poeira e matéria escura ligados pela gravidade.", exemplo: "Ex.: Via Láctea (a nossa) e Andrômeda.", fotoUrl: viaLacteaImg },
      { id: "sis", capa: "SISTEMA SOLAR", emoji: "🪐", cor: "from-amber-500 to-orange-700", conteudo: "Sol + 8 planetas + luas + asteroides + cometas, unidos pela gravidade do Sol.", exemplo: "Ex.: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno.", fotoUrl: atmosferaImg },
      { id: "sat", capa: "SATÉLITE", emoji: "🛰️", cor: "from-sky-500 to-cyan-700", conteudo: "Corpo que orbita outro. Naturais (Lua) ou artificiais (GPS, meteorologia, comunicação).", exemplo: "Ex.: GPS depende de 24+ satélites em órbita.", fotoUrl: painelImg },
      { id: "cli", capa: "MUDANÇAS CLIMÁTICAS", emoji: "🌡️", cor: "from-emerald-500 to-teal-700", conteudo: "Alterações no clima planetário. Hoje aceleradas pelo aumento de CO₂ e metano (queima de combustíveis fósseis).", exemplo: "Ex.: aquecimento global, derretimento de geleiras, extremos climáticos.", fotoUrl: mudancaImg },
    ],
    falaFinal: "Big Bang, galáxias, Sistema Solar, satélites, clima. Panorama pronto.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Sistema Solar. Toque em cada astro.",
    instrucao: "Toque nos pontos",
    mapaUrl: atmosferaImg,
    pontos: [
      { id: "sol", x: 10, y: 50, emoji: "☀️", cor: "from-amber-500 to-orange-700", titulo: "Sol", texto: "Estrela do tipo anã amarela. Fusão de hidrogênio → hélio libera a energia que aquece a Terra.", fotoUrl: viaLacteaImg },
      { id: "ter", x: 40, y: 50, emoji: "🌍", cor: "from-emerald-500 to-teal-700", titulo: "Terra", texto: "Único planeta conhecido com água líquida e vida. Atmosfera + campo magnético nos protegem.", fotoUrl: atmosferaImg },
      { id: "mar", x: 55, y: 40, emoji: "🔴", cor: "from-red-500 to-rose-700", titulo: "Marte", texto: "Planeta vermelho. Alvo prioritário para exploração humana no séc. XXI.", fotoUrl: atmosferaImg },
      { id: "jup", x: 80, y: 55, emoji: "🪐", cor: "from-indigo-500 to-purple-700", titulo: "Júpiter", texto: "Maior planeta do Sistema Solar. Sua gravidade protege a Terra de asteroides.", fotoUrl: viaLacteaImg },
    ],
    falaFinal: "Cada corpo tem papel próprio no equilíbrio do Sistema Solar.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Nossa galáxia se chama:", fotoUrl: viaLacteaImg,
        cards: [
          { id: "a", emoji: "🌌", titulo: "Via Láctea", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌠", titulo: "Andrômeda", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "☀️", titulo: "Sistema Solar", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Via Láctea = ~200 bilhões de estrelas.",
        feedbackErro: "Nossa galáxia é a VIA LÁCTEA. Sistema Solar é uma pequena parte dela." },
      { id: "q2", pergunta: "Qual usa satélites artificiais?", fotoUrl: painelImg,
        cards: [
          { id: "a", emoji: "📍", titulo: "GPS, previsão do tempo e TV", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🕯️", titulo: "Lâmpadas incandescentes antigas", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🚲", titulo: "Bicicletas comuns", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Vivemos na era dos satélites.",
        feedbackErro: "GPS, previsão do tempo, TV por satélite — dependem TODOS de satélites em órbita." },
      { id: "q3", pergunta: "O principal gás causador do aquecimento global é:", fotoUrl: mudancaImg,
        cards: [
          { id: "a", emoji: "🏭", titulo: "CO₂ (dióxido de carbono)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💧", titulo: "H₂O pura", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "💨", titulo: "N₂ (nitrogênio)", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. CO₂ + metano são os principais gases de efeito estufa antropogênicos.",
        feedbackErro: "É o CO₂. Nitrogênio (78% do ar) e vapor d'água são naturais e não são o vilão principal." },
    ],
    falaFinal: "Via Láctea, satélites, CO₂ — panorama certo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Compare ESTRELA e PLANETA.",
    instrucao: "Toque nos interruptores",
    mapaUrl: viaLacteaImg,
    camadas: [
      { id: "est", rotulo: "Estrela", emoji: "⭐", cor: "from-amber-500 to-orange-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Corpo enorme que faz FUSÃO NUCLEAR e emite luz própria. Ex.: Sol.", fotoUrl: viaLacteaImg },
      { id: "pla", rotulo: "Planeta", emoji: "🌍", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Não emite luz própria — REFLETE. Orbita uma estrela e tem massa suficiente para ser esférico.", fotoUrl: atmosferaImg },
    ],
    falaFinal: "Estrelas brilham; planetas refletem.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as escalas do Universo (do menor ao maior).",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Do local ao cósmico:",
    paradas: [
      { id: "ter", emoji: "🌍", rotulo: "1. Terra", descricao: "12 mil km de diâmetro.", fotoUrl: atmosferaImg },
      { id: "sis", emoji: "🪐", rotulo: "2. Sistema Solar", descricao: "Sol + 8 planetas.", fotoUrl: viaLacteaImg },
      { id: "via", emoji: "🌌", rotulo: "3. Via Láctea", descricao: "~200 bilhões de estrelas.", fotoUrl: viaLacteaImg },
      { id: "uni", emoji: "♾️", rotulo: "4. Universo observável", descricao: "Bilhões de galáxias.", fotoUrl: viaLacteaImg },
    ],
    ordemCerta: ["ter", "sis", "via", "uni"],
    feedbackAcerto: "Perfeito. A Terra é uma partícula minúscula no cosmos.",
    feedbackErro: "Ordem: Terra ⊂ Sistema Solar ⊂ Via Láctea ⊂ Universo.",
    falaFinal: "Isso muda como olhamos para nós mesmos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Observatório.",
    tituloLivro: "📓 Relatório · Terra, Espaço e Clima",
    subtitulo: "Do cosmos ao aquecimento global",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: como sabemos que o Universo se expande? Porque Edwin HUBBLE (1929) mediu galáxias se afastando de nós. Retrocedendo essa expansão chegamos ao Big Bang.", chaves: ["Hubble"], definicoes: { Hubble: "Astrônomo americano; descobriu a expansão do Universo." }, fotoUrl: viaLacteaImg },
      { id: "p2", texto: "OBSERVAÇÃO: no séc. XX começamos a lançar SATÉLITES. Hoje dependemos deles para GPS, TV, internet, monitoramento de queimadas e clima.", chaves: ["satélites"], definicoes: { "satélites": "Objetos que orbitam a Terra ou outro corpo." }, fotoUrl: painelImg },
      { id: "p3", texto: "CONCLUSÃO: o mesmo planeta que aprendemos a observar do espaço está aquecendo. Desde 1880, +1,2 °C na temperatura média. Ciência mostra CAUSA (CO₂) e SOLUÇÃO (energia limpa).", chaves: ["CO₂"], definicoes: { "CO₂": "Dióxido de carbono — gás de efeito estufa." }, fotoUrl: mudancaImg },
    ],
    falaFinal: "Cosmos + satélites + clima: três frentes da ciência espacial atual.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Classifique: estrela, planeta ou satélite.",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "est", emoji: "⭐", rotulo: "Estrela" },
      { id: "pla", emoji: "🌍", rotulo: "Planeta" },
      { id: "sat", emoji: "🌙", rotulo: "Satélite" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Sol", emoji: "☀️", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Fusão nuclear própria", emoji: "⭐", cor: "from-emerald-500 to-teal-700" }, contexto: "Emite luz própria.", pecaCertaId: "est", fotoUrl: viaLacteaImg, feedbackAcerto: "Sim, o Sol é uma estrela.", feedbackErro: "Emite luz própria → ESTRELA." },
      { id: "r2", municipioA: { nome: "Vênus", emoji: "🟠", cor: "from-orange-500 to-red-700" }, municipioB: { nome: "Orbita o Sol; reflete luz", emoji: "🌍", cor: "from-emerald-500 to-teal-700" }, contexto: "Corpo esférico ao redor do Sol.", pecaCertaId: "pla", fotoUrl: atmosferaImg, feedbackAcerto: "Correto. Vênus é planeta.", feedbackErro: "Corpo orbitando o Sol, esférico → PLANETA." },
      { id: "r3", municipioA: { nome: "Lua", emoji: "🌕", cor: "from-slate-500 to-slate-700" }, municipioB: { nome: "Orbita a Terra", emoji: "🌙", cor: "from-emerald-500 to-teal-700" }, contexto: "Satélite natural.", pecaCertaId: "sat", fotoUrl: viaLacteaImg, feedbackAcerto: "Sim. Lua = satélite natural da Terra.", feedbackErro: "Corpo que orbita um planeta → SATÉLITE (natural)." },
      { id: "r4", municipioA: { nome: "GPS", emoji: "📡", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Aparelho em órbita da Terra", emoji: "🛰️", cor: "from-emerald-500 to-teal-700" }, contexto: "Feito por humanos.", pecaCertaId: "sat", fotoUrl: painelImg, feedbackAcerto: "Sim. Satélite artificial.", feedbackErro: "GPS é constelação de SATÉLITES artificiais." },
    ],
    falaFinal: "Estrela, planeta, satélite — categorias claras.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "A ciência espacial tem três missões: OBSERVAR, EXPLORAR e PROTEGER.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: viaLacteaImg,
    fatias: [
      { id: "obs", rotulo: "Observar", emoji: "🔭", percentual: 35, cor: "#1e40af", descricao: "Telescópios (Hubble, James Webb), radiotelescópios.", exemplos: ["Hubble", "James Webb", "ALMA"], fotoUrl: viaLacteaImg },
      { id: "exp", rotulo: "Explorar", emoji: "🚀", percentual: 30, cor: "#f59e0b", descricao: "Sondas, rovers em Marte, ISS.", exemplos: ["Curiosity", "Perseverance", "ISS"], fotoUrl: atmosferaImg },
      { id: "pro", rotulo: "Proteger", emoji: "🌍", percentual: 35, cor: "#10b981", descricao: "Monitorar clima, queimadas, ozônio, asteroides.", exemplos: ["INPE", "NASA GISS", "ESA"], fotoUrl: mudancaImg },
    ],
    falaFinal: "Observar, explorar, proteger. Fim do Instituto 5.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas para a Certificação de Astrônomo Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: viaLacteaImg,
    perguntas: [
      { id: "q1", pergunta: "O que o Big Bang descreve?", fotoUrl: viaLacteaImg,
        opcoes: [
          { id: "a", texto: "A expansão do Universo a partir de um estado inicial há ~13,8 Ga", correta: true },
          { id: "b", texto: "Uma explosão gigante numa galáxia próxima" },
        ],
        feedbackAcerto: "Correto. É a expansão do próprio ESPAÇO, não uma explosão localizada.",
        feedbackErro: "Big Bang = expansão do Universo há 13,8 Ga. Não é uma bomba num lugar." },
      { id: "q2", pergunta: "O que a Terra recebe do Sol e nos mantém vivos?", fotoUrl: atmosferaImg,
        opcoes: [
          { id: "a", texto: "Luz e calor (energia radiante)", correta: true },
          { id: "b", texto: "Oxigênio para respirar" },
        ],
        feedbackAcerto: "Sim. Oxigênio vem das plantas; do Sol vem energia radiante.",
        feedbackErro: "O Sol nos dá LUZ e CALOR. Oxigênio quem produz é a fotossíntese das plantas." },
      { id: "q3", pergunta: "As mudanças climáticas atuais são causadas principalmente por:", fotoUrl: mudancaImg,
        opcoes: [
          { id: "a", texto: "Aumento de CO₂ pela queima de combustíveis fósseis", correta: true },
          { id: "b", texto: "Chuvas de meteoros no séc. XX" },
        ],
        feedbackAcerto: "Perfeito. Consenso científico do IPCC.",
        feedbackErro: "É o CO₂ humano (fósseis + desmatamento) — consenso do IPCC." },
    ],
    selo: { nome: "Certificação · Astrônomo Júnior", subtitulo: "Instituto 5 · Observatório Espacial", emoji: "🔭", cor: "from-blue-500 to-indigo-700" },
    falaFinal: "Instituto 5 CONCLUÍDO. Próximo: Inovação Sustentável.",
  },
};
