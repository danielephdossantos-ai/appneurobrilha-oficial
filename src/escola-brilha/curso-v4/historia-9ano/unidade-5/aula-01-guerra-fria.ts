import type { AulaGeoV1 } from "../../types";
import { url as imgMuro } from "@/assets/historia-9ano/u5-guerra-fria.jpg.asset.json";
import { url as imgLua } from "@/assets/historia-9ano/u5-corrida-espacial.jpg.asset.json";
import { url as imgArmas } from "@/assets/historia-9ano/u5-corrida-armas.jpg.asset.json";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-guerra-fria",
  titulo: "Guerra Fria (1947–1991)",
  iconeTrilha: "🧊",
  bncc: ["EF09HI13", "EF09HI14"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgMuro,
    imagemDestaqueUrl: imgLua,
    aurora:
      "1947. A 2ª Guerra acabou, mas os dois vencedores — EUA e URSS — não confiam um no outro. Começa a GUERRA FRIA: 44 anos de tensão sem confronto direto. Cada lado com bombas nucleares apontadas pro outro. Berlim rachada em duas por um MURO (1961). Corrida espacial, espionagem, guerras por procuração no Vietnã, Coreia e Cuba. Termina em 1991 com o fim da URSS.",
    falaFinal: "Nó 5: o mundo dividido em dois blocos por quatro décadas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Por que se chama 'Guerra FRIA' se EUA e URSS nunca se atacaram diretamente?",
    pergunta: "O que caracteriza uma GUERRA FRIA?",
    fotoUrl: imgMuro,
    opcoes: [
      { id: "ten", titulo: "TENSÃO SEM CONFRONTO DIRETO", subtitulo: "corrida armamentista, espionagem, blocos", emoji: "🧊", cor: "from-cyan-800 to-slate-950" },
      { id: "abr", titulo: "GUERRA ABERTA CONTÍNUA", subtitulo: "combates entre EUA e URSS", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "ten",
    feedbackAcerto: "Correto. EUA e URSS nunca se atacaram diretamente — a 'guerra' era diplomática, econômica, tecnológica e por procuração.",
    feedbackErro: "Não. Se houvesse combate direto entre as duas superpotências, teria virado a 3ª Guerra — provavelmente nuclear.",
    falaFinal: "Guerra fria = tensão máxima, tiro zero (entre as duas potências).",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave da Guerra Fria.",
    instrucao: "",
    cadernos: [
      { id: "bl", capa: "Bloco Ocidental × Oriental", emoji: "🌍", cor: "from-cyan-700 to-slate-900", fotoUrl: imgLua, conteudo: "OCIDENTAL: liderado pelos EUA, com aliados capitalistas (Europa Ocidental, Japão, Coreia do Sul). ORIENTAL: liderado pela URSS, com países socialistas (Europa Oriental, China, Cuba). Dois modelos econômicos opostos.", exemplo: "Exemplo: OTAN (1949) era a aliança militar do bloco ocidental; Pacto de Varsóvia (1955), do bloco oriental." },
      { id: "mu", capa: "Muro de Berlim", emoji: "🧱", cor: "from-slate-700 to-slate-900", fotoUrl: imgArmas, conteudo: "MURO DE BERLIM (1961–1989) dividiu a cidade em duas: Berlim Ocidental (capitalista) e Oriental (socialista). Foi o SÍMBOLO físico da Guerra Fria. Sua queda em 9 de novembro de 1989 anunciou o fim da URSS.", exemplo: "Exemplo: pelo menos 140 pessoas morreram tentando atravessar o muro em 28 anos. Sua queda foi transmitida ao vivo pro mundo todo." },
      { id: "ce", capa: "Corrida Espacial", emoji: "🚀", cor: "from-amber-700 to-slate-900", fotoUrl: imgMuro, conteudo: "CORRIDA ESPACIAL foi a disputa tecnológica entre EUA e URSS pelo espaço. URSS lançou o SPUTNIK (1957) e Iúri Gagárin foi ao espaço (1961). EUA responderam levando NEIL ARMSTRONG à LUA em 1969.", exemplo: "Exemplo: mais de 600 milhões de pessoas assistiram ao pouso na Lua ao vivo pela TV — foi a maior transmissão da história até então." },
      { id: "pp", capa: "Guerras por Procuração", emoji: "⚔️", cor: "from-teal-700 to-slate-900", fotoUrl: imgLua, conteudo: "GUERRAS POR PROCURAÇÃO eram conflitos onde EUA e URSS apoiavam lados opostos SEM se enfrentar diretamente. Ex.: Guerra da Coreia (1950–53), Vietnã (1955–75), Afeganistão (1979–89).", exemplo: "Exemplo: no Vietnã, EUA apoiaram o sul; URSS e China apoiaram o norte. Morreram 3 milhões de pessoas — mas EUA e URSS nunca se enfrentaram cara a cara." },
    ],
    falaFinal: "Blocos + Muro + Corrida Espacial + Guerras por procuração. Anatomia da Guerra Fria.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três frentes da Guerra Fria. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgMuro,
    pontos: [
      { id: "arm", x: 25, y: 30, emoji: "☢️", cor: "from-slate-700 to-slate-900", fotoUrl: imgLua, titulo: "CORRIDA NUCLEAR", texto: "EUA e URSS acumularam dezenas de milhares de ogivas nucleares. Doutrina MAD ('Destruição Mútua Assegurada') — se um atacar, ambos morrem." },
      { id: "esp", x: 55, y: 55, emoji: "🚀", cor: "from-amber-700 to-slate-900", fotoUrl: imgArmas, titulo: "CORRIDA ESPACIAL", texto: "Sputnik (URSS, 1957) → Gagárin no espaço (URSS, 1961) → Armstrong na Lua (EUA, 1969). Ciência virou propaganda ideológica." },
      { id: "ide", x: 80, y: 40, emoji: "📻", cor: "from-cyan-700 to-slate-900", fotoUrl: imgMuro, titulo: "GUERRA IDEOLÓGICA", texto: "Cinema, TV, esporte, cultura. Cada lado tentava mostrar que seu modelo era 'superior'. Rock era 'ocidental'; balé, 'oriental'." },
    ],
    falaFinal: "Frente nuclear + espacial + ideológica. Nunca houve guerra tão total sem uma bala.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Quais eram as duas superpotências da Guerra Fria?", fotoUrl: imgLua, cards: [{ id: "eu", emoji: "🇺🇸☭", titulo: "EUA e URSS", cor: "from-cyan-600 to-slate-900" }, { id: "af", emoji: "🇩🇪🇫🇷", titulo: "Alemanha e França", cor: "from-amber-600 to-slate-900" }, { id: "cj", emoji: "🇨🇳🇯🇵", titulo: "China e Japão", cor: "from-slate-600 to-slate-900" }], correta: "eu", feedbackAcerto: "Correto. EUA (capitalista) e URSS (socialista).", feedbackErro: "É EUA × URSS. Os outros eram aliados dos blocos." },
      { id: "q2", pergunta: "Em que ano CAIU o Muro de Berlim?", fotoUrl: imgMuro, cards: [{ id: "89", emoji: "🧱", titulo: "1989", cor: "from-teal-600 to-slate-900" }, { id: "61", emoji: "🔨", titulo: "1961", cor: "from-amber-600 to-slate-900" }, { id: "45", emoji: "🕊️", titulo: "1945", cor: "from-slate-600 to-slate-900" }], correta: "89", feedbackAcerto: "Correto. 9 de novembro de 1989.", feedbackErro: "É 1989 (queda). 1961 = quando o muro foi CONSTRUÍDO." },
      { id: "q3", pergunta: "Quem levou o primeiro homem à Lua (1969)?", fotoUrl: imgLua, cards: [{ id: "us", emoji: "🇺🇸", titulo: "EUA", cor: "from-teal-600 to-slate-900" }, { id: "ur", emoji: "☭", titulo: "URSS", cor: "from-amber-600 to-slate-900" }, { id: "cn", emoji: "🇨🇳", titulo: "China", cor: "from-slate-600 to-slate-900" }], correta: "us", feedbackAcerto: "Correto. Missão Apollo 11, com Neil Armstrong.", feedbackErro: "É EUA (Apollo 11). A URSS foi 1º no espaço, mas EUA foi 1º na Lua." },
    ],
    falaFinal: "Você já mapeia os blocos e as vitórias tecnológicas.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois blocos que dividiram o mundo.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgArmas,
    camadas: [
      { id: "oc", rotulo: "Bloco Ocidental (EUA)", emoji: "🇺🇸", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "Capitalismo, democracia liberal, OTAN (1949). Aliados: Europa Ocidental, Japão, Coreia do Sul, América Latina." },
      { id: "or", rotulo: "Bloco Oriental (URSS)", emoji: "☭", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Socialismo, partido único, Pacto de Varsóvia (1955). Aliados: Europa Oriental, China (até 1960), Cuba, Vietnã do Norte." },
    ],
    falaFinal: "Dois mundos. Dois modelos. Muros, aeroportos, esportes e músicas em campos opostos.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos da Guerra Fria.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 1947–1991",
    paradas: [
      { id: "otan", emoji: "🛡️", rotulo: "1. OTAN (1949)", fotoUrl: imgMuro, descricao: "Aliança militar do Ocidente." },
      { id: "muro", emoji: "🧱", rotulo: "2. Muro de Berlim construído (1961)", fotoUrl: imgLua, descricao: "Divide Berlim em duas." },
      { id: "lua", emoji: "🌕", rotulo: "3. Homem na Lua (1969)", fotoUrl: imgMuro, descricao: "EUA vencem a corrida espacial." },
      { id: "qm", emoji: "🕊️", rotulo: "4. Queda do Muro (1989)", fotoUrl: imgLua, descricao: "Prenúncio do fim da URSS (1991)." },
    ],
    ordemCerta: ["otan", "muro", "lua", "qm"],
    feedbackAcerto: "Perfeito. 40 anos de tensão em 4 marcos.",
    feedbackErro: "Comece pela OTAN (1949) e siga.",
    falaFinal: "4 marcos. 4 décadas. Um mundo bipolar.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 5 da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 5 — Guerra Fria",
    paragrafos: [
      { id: "p1", texto: "Depois de 1945 o mundo ficou dividido em dois blocos: OCIDENTAL, liderado pelos EUA (capitalismo, democracia liberal), e ORIENTAL, liderado pela URSS (socialismo, partido único). Essa disputa é a GUERRA FRIA (1947–1991) — nunca houve combate direto entre as duas superpotências.", chaves: ["Guerra Fria"], definicoes: { "Guerra Fria": "Período 1947–1991 de tensão entre EUA e URSS, sem confronto militar direto, com corrida armamentista e disputa ideológica." }, fotoUrl: imgArmas },
      { id: "p2", texto: "As alianças militares eram a OTAN (1949, Ocidente) e o PACTO DE VARSÓVIA (1955, Oriente). BERLIM ficou dividida em duas por um muro em 1961 — o símbolo mais famoso da Guerra Fria. Cada lado acumulou dezenas de milhares de OGIVAS NUCLEARES.", chaves: ["OTAN", "Muro de Berlim"], definicoes: { OTAN: "Organização do Tratado do Atlântico Norte (1949), aliança militar do bloco ocidental, liderada pelos EUA.", "Muro de Berlim": "Muro construído em 1961 que dividiu Berlim entre setores ocidental e oriental até sua queda em 1989." }, fotoUrl: imgMuro },
      { id: "p3", texto: "Sem poder atacar direto, os blocos disputaram tecnologia (CORRIDA ESPACIAL: Sputnik 1957 pela URSS, Homem na Lua 1969 pelos EUA) e travaram GUERRAS POR PROCURAÇÃO: Coreia (1950–53), Vietnã (1955–75), Afeganistão (1979–89). Milhões de mortos, mas nunca EUA × URSS diretamente.", chaves: ["Corrida Espacial"], definicoes: { "Corrida Espacial": "Disputa entre EUA e URSS para dominar a exploração do espaço, marcada pelo Sputnik (1957) e pela chegada à Lua (1969)." }, fotoUrl: imgLua },
      { id: "p4", texto: "Em 1989 o Muro de Berlim caiu. Em 1991 a URSS se dissolveu em 15 países independentes (Rússia, Ucrânia, Cazaquistão etc.). Os EUA emergiram como única superpotência — mas conflitos regionais (Iugoslávia, Oriente Médio) e ascensão da CHINA mostraram que o mundo unipolar duraria pouco.", chaves: ["Queda da URSS"], definicoes: { "Queda da URSS": "Dissolução da União Soviética em 1991, em 15 repúblicas independentes, marcando o fim da Guerra Fria." }, fotoUrl: imgMuro },
    ],
    falaFinal: "Leitura concluída. Você conecta 1945 → 1991 no fio da Guerra Fria.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada evento ao lado certo.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "oc", emoji: "🇺🇸", rotulo: "Ocidente (EUA)" },
      { id: "or", emoji: "☭", rotulo: "Oriente (URSS)" },
      { id: "fim", emoji: "🕊️", rotulo: "Fim da Guerra Fria" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "OTAN", emoji: "🛡️", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Aliança militar 1949", emoji: "🇺🇸", cor: "from-cyan-600 to-slate-900" }, contexto: "Bloco capitalista.", pecaCertaId: "oc", feedbackAcerto: "Correto. OTAN = Ocidente.", feedbackErro: "É Ocidente." },
      { id: "r2", municipioA: { nome: "Pacto de Varsóvia", emoji: "☭", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Aliança militar 1955", emoji: "🛡️", cor: "from-amber-600 to-slate-900" }, contexto: "Bloco socialista.", pecaCertaId: "or", feedbackAcerto: "Correto. Varsóvia = Oriente.", feedbackErro: "É Oriente." },
      { id: "r3", municipioA: { nome: "Queda do Muro (1989)", emoji: "🕊️", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Sinal do colapso da URSS", emoji: "🧱", cor: "from-teal-600 to-slate-900" }, contexto: "9 de novembro.", pecaCertaId: "fim", feedbackAcerto: "Correto. Marco do fim.", feedbackErro: "É Fim da Guerra Fria." },
      { id: "r4", municipioA: { nome: "Homem na Lua (1969)", emoji: "🌕", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Apollo 11", emoji: "🚀", cor: "from-cyan-600 to-slate-900" }, contexto: "Vitória tecnológica.", pecaCertaId: "oc", feedbackAcerto: "Correto. Lua = EUA (Ocidente).", feedbackErro: "É Ocidente." },
      { id: "r5", municipioA: { nome: "Sputnik (1957)", emoji: "🛰️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Primeiro satélite artificial", emoji: "📡", cor: "from-amber-600 to-slate-900" }, contexto: "Vitória espacial.", pecaCertaId: "or", feedbackAcerto: "Correto. Sputnik = URSS (Oriente).", feedbackErro: "É Oriente." },
      { id: "r6", municipioA: { nome: "Dissolução da URSS (1991)", emoji: "🌍", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "15 países independentes", emoji: "🕊️", cor: "from-teal-600 to-slate-900" }, contexto: "Fim da bipolaridade.", pecaCertaId: "fim", feedbackAcerto: "Correto. Fim oficial em 1991.", feedbackErro: "É Fim da Guerra Fria." },
    ],
    falaFinal: "6 rodadas. Você já separa Ocidente, Oriente e o fim.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Arsenal nuclear no auge da Guerra Fria (~1986).",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgLua,
    fatias: [
      { id: "us", rotulo: "EUA (~40%)", emoji: "🇺🇸", percentual: 40, cor: "#0f766e", descricao: "Cerca de 23 mil ogivas nucleares no pico. Suficiente para destruir o planeta várias vezes.", exemplos: [] },
      { id: "ur", rotulo: "URSS (~60%)", emoji: "☭", percentual: 60, cor: "#b45309", descricao: "Cerca de 40 mil ogivas nucleares no pico. Doutrina MAD: se um atacar, ambos morrem.", exemplos: [] },
    ],
    falaFinal: "Mais de 60 mil ogivas em duas mãos. Milagre que o mundo não explodiu.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgArmas,
    perguntas: [
      { id: "av1", pergunta: "A Guerra Fria opôs:", opcoes: [{ id: "a", texto: "EUA e URSS.", correta: true }, { id: "b", texto: "Alemanha e França.", correta: false }, { id: "c", texto: "China e Japão.", correta: false }], feedbackAcerto: "Correto. Capitalismo × Socialismo.", feedbackErro: "É EUA × URSS." },
      { id: "av2", pergunta: "O Muro de Berlim caiu em:", opcoes: [{ id: "a", texto: "1945.", correta: false }, { id: "b", texto: "1989.", correta: true }, { id: "c", texto: "2001.", correta: false }], feedbackAcerto: "Correto. 9 de novembro de 1989.", feedbackErro: "É 1989." },
      { id: "av3", pergunta: "A URSS foi dissolvida em:", opcoes: [{ id: "a", texto: "1961.", correta: false }, { id: "b", texto: "1991.", correta: true }, { id: "c", texto: "2020.", correta: false }], feedbackAcerto: "Correto. 15 países independentes.", feedbackErro: "É 1991." },
    ],
    selo: { nome: "Nó 5 da Teia", subtitulo: "Guerra Fria", emoji: "🧊", cor: "from-cyan-500 to-slate-900", fotoUrl: imgMuro },
    falaFinal: "Nó 5 destravado. O mundo saiu bipolar. Falta pouco pra chegar em 2026.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Nó 5 — Guerra Fria" },
};
