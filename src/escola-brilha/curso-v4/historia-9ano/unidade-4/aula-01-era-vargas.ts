import type { AulaGeoV1 } from "../../types";
import imgVargas from "@/assets/historia-9ano/u4-era-vargas.jpg";
import imgTrab from "@/assets/historia-9ano/u4-trabalhadores-brasil.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-era-vargas",
  titulo: "Era Vargas (1930–1945)",
  iconeTrilha: "🏭",
  bncc: ["EF09HI10", "EF09HI11", "EF09HI12"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgTrab,
    imagemDestaqueUrl: imgVargas,
    aurora:
      "1930. Um golpe põe fim à República Velha (dos coronéis do café) e leva ao poder um gaúcho de 47 anos: GETÚLIO VARGAS. Ele governará por 15 anos seguidos — impulsiona a INDUSTRIALIZAÇÃO do Brasil, cria a CLT (Consolidação das Leis do Trabalho), implanta a ditadura do ESTADO NOVO (1937), mas também dá voto às mulheres. Personagem central e ambíguo do Brasil do século XX.",
    falaFinal: "Nó 4: o Brasil se moderniza sob um líder populista.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Vargas concentrou poderes, mas fez leis a favor dos trabalhadores urbanos. Como chamamos isso?",
    pergunta: "Que tipo de governo Vargas exerceu no Estado Novo (1937–45)?",
    fotoUrl: imgVargas,
    opcoes: [
      { id: "pop", titulo: "POPULISTA E AUTORITÁRIO", subtitulo: "concentra poder + dá benefícios aos trabalhadores", emoji: "📣", cor: "from-amber-800 to-slate-950" },
      { id: "dem", titulo: "DEMOCRACIA PARLAMENTAR", subtitulo: "muitos partidos, imprensa livre", emoji: "❌", cor: "from-teal-800 to-slate-950" },
    ],
    respostaCerta: "pop",
    feedbackAcerto: "Correto. POPULISMO: liderança forte que fala direto ao povo, entrega benefícios, mas concentra poder e cala oposição.",
    feedbackErro: "Não. No Estado Novo, Vargas fechou o Congresso, censurou a imprensa e perseguiu comunistas.",
    falaFinal: "Populismo autoritário: dá com uma mão, tira com a outra.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave da Era Vargas.",
    instrucao: "",
    cadernos: [
      { id: "rev30", capa: "Revolução de 1930", emoji: "🔫", cor: "from-teal-700 to-slate-900", fotoUrl: imgVargas, conteudo: "REVOLUÇÃO DE 1930 foi o golpe que tirou Washington Luís e levou Vargas ao poder. Encerrou a REPÚBLICA VELHA (dominada pelos cafeicultores paulistas e mineiros — a 'política do café com leite').", exemplo: "Exemplo: Vargas perdeu a eleição de 1930, mas subiu ao poder na marra, apoiado por militares e políticos gaúchos, mineiros e paraibanos." },
      { id: "clt", capa: "CLT (1943)", emoji: "📄", cor: "from-cyan-700 to-slate-900", fotoUrl: imgTrab, conteudo: "CLT (Consolidação das Leis do Trabalho) foi criada por Vargas em 1943. Garantiu carteira assinada, salário mínimo, jornada de 8h, férias remuneradas, aposentadoria e regras contra demissão sem justa causa.", exemplo: "Exemplo: até hoje a CLT rege boa parte das relações de trabalho no Brasil — foi o maior marco dos direitos trabalhistas do país." },
      { id: "en", capa: "Estado Novo", emoji: "⛓️", cor: "from-amber-700 to-slate-900", fotoUrl: imgVargas, conteudo: "ESTADO NOVO (1937–1945) foi a ditadura de Vargas: fechou o Congresso, extinguiu partidos, censurou imprensa (DIP), perseguiu comunistas e integralistas. Ao mesmo tempo criou o Ministério do Trabalho e a CLT.", exemplo: "Exemplo: em 1937 Vargas anunciou pelo rádio que o Congresso estava dissolvido — um golpe dentro do governo dele mesmo." },
      { id: "pop", capa: "Populismo", emoji: "📣", cor: "from-slate-700 to-slate-900", fotoUrl: imgTrab, conteudo: "POPULISMO é a estratégia política de um líder que fala DIRETO ao povo, distribui benefícios sociais e se apresenta como 'pai dos pobres', mas concentra poder e desmoraliza instituições democráticas.", exemplo: "Exemplo: Vargas era chamado de 'PAI DOS POBRES' pela CLT e das mulheres pelo voto (1932), mesmo governando como ditador entre 1937 e 1945." },
    ],
    falaFinal: "Revolução de 30 + CLT + Estado Novo + Populismo. O Brasil moderno começa aqui.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três conquistas sociais da Era Vargas.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgTrab,
    pontos: [
      { id: "vot", x: 25, y: 30, emoji: "🗳️", cor: "from-teal-700 to-slate-900", fotoUrl: imgVargas, titulo: "VOTO FEMININO (1932)", texto: "Vargas garantiu o direito de voto às mulheres brasileiras — o Brasil se tornou um dos primeiros países da América Latina a permitir voto feminino." },
      { id: "min", x: 55, y: 55, emoji: "💰", cor: "from-amber-700 to-slate-900", fotoUrl: imgTrab, titulo: "SALÁRIO MÍNIMO (1940)", texto: "Vargas criou o salário mínimo — um valor abaixo do qual nenhum trabalhador poderia receber. Junto veio a jornada de 8 horas." },
      { id: "csn", x: 80, y: 40, emoji: "🏭", cor: "from-cyan-700 to-slate-900", fotoUrl: imgTrab, titulo: "INDÚSTRIA DE BASE", texto: "Vargas criou empresas estatais como CSN (siderurgia, 1941), Vale do Rio Doce (mineração, 1942) e Petrobras (petróleo, depois em 1953). Base da indústria brasileira." },
    ],
    falaFinal: "Voto feminino + Salário mínimo + Indústria estatal. Brasil pisa no século XX.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Em que ano Vargas assumiu pela primeira vez?", fotoUrl: imgVargas, cards: [{ id: "1930", emoji: "🔫", titulo: "1930", cor: "from-teal-600 to-slate-900" }, { id: "1889", emoji: "👑", titulo: "1889", cor: "from-amber-600 to-slate-900" }, { id: "1945", emoji: "🕊️", titulo: "1945", cor: "from-slate-600 to-slate-900" }], correta: "1930", feedbackAcerto: "Correto. Revolução de 1930.", feedbackErro: "É 1930. 1889 = Proclamação da República; 1945 = QUEDA de Vargas." },
      { id: "q2", pergunta: "O ESTADO NOVO (ditadura de Vargas) começou em:", fotoUrl: imgVargas, cards: [{ id: "37", emoji: "⛓️", titulo: "1937", cor: "from-teal-600 to-slate-900" }, { id: "43", emoji: "📄", titulo: "1943", cor: "from-amber-600 to-slate-900" }, { id: "50", emoji: "🗳️", titulo: "1950", cor: "from-slate-600 to-slate-900" }], correta: "37", feedbackAcerto: "Correto. Golpe do Estado Novo em novembro de 1937.", feedbackErro: "É 1937 (Estado Novo). 1943 = CLT. 1950 = Vargas volta democraticamente." },
      { id: "q3", pergunta: "A CLT (leis trabalhistas) foi criada por Vargas em:", fotoUrl: imgTrab, cards: [{ id: "43", emoji: "📄", titulo: "1943", cor: "from-teal-600 to-slate-900" }, { id: "30", emoji: "🔫", titulo: "1930", cor: "from-amber-600 to-slate-900" }, { id: "88", emoji: "📜", titulo: "1988", cor: "from-slate-600 to-slate-900" }], correta: "43", feedbackAcerto: "Correto. 1943, em pleno Estado Novo.", feedbackErro: "É 1943. 1988 é a Constituição Cidadã (bem depois)." },
    ],
    falaFinal: "Você já mapeia a linha do tempo da Era Vargas.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Duas caras de Vargas: o modernizador e o autoritário.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgVargas,
    camadas: [
      { id: "mod", rotulo: "Vargas modernizador", emoji: "🏭", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "Voto feminino, CLT, salário mínimo, CSN, Vale, industrialização. 'Pai dos pobres.'", exemplos: [] },
      { id: "aut", rotulo: "Vargas autoritário", emoji: "⛓️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Estado Novo (1937), fecha Congresso, censura (DIP), perseguição a comunistas e opositores. 'Mãe dos ricos.'", exemplos: [] },
    ],
    falaFinal: "Vargas é os dois. Estudar história é aguentar essa contradição.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos da Era Vargas.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 1930–1945",
    paradas: [
      { id: "r30", emoji: "🔫", rotulo: "1. Revolução de 30", fotoUrl: imgVargas, descricao: "Vargas chega ao poder." },
      { id: "vot", emoji: "🗳️", rotulo: "2. Voto feminino (1932)", fotoUrl: imgVargas, descricao: "Mulheres passam a votar." },
      { id: "en", emoji: "⛓️", rotulo: "3. Estado Novo (1937)", fotoUrl: imgVargas, descricao: "Ditadura, Congresso fechado." },
      { id: "clt", emoji: "📄", rotulo: "4. CLT (1943)", fotoUrl: imgTrab, descricao: "Leis trabalhistas consolidadas." },
    ],
    ordemCerta: ["r30", "vot", "en", "clt"],
    feedbackAcerto: "Perfeito. 1930 → 1932 → 1937 → 1943.",
    feedbackErro: "Comece pela Revolução de 1930 e siga a cronologia.",
    falaFinal: "4 marcos. 13 anos que redesenharam o Brasil.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 4 da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 4 — Era Vargas",
    paragrafos: [
      { id: "p1", texto: "Em 1930, um golpe militar-político encerra a REPÚBLICA VELHA e leva GETÚLIO VARGAS ao poder. Começam 15 anos de governo Vargas — que redesenharão o Brasil urbano, industrial e trabalhista.", chaves: ["República Velha"], definicoes: { "República Velha": "Período 1889–1930, dominado pelos cafeicultores paulistas e pecuaristas mineiros (política do café com leite)." }, fotoUrl: imgVargas },
      { id: "p2", texto: "Vargas garantiu o VOTO FEMININO em 1932 — o Brasil se tornou um dos primeiros países da América Latina a permitir voto às mulheres. Também criou o Ministério do Trabalho, o salário mínimo (1940) e a CLT (1943), regulando as relações trabalhistas.", chaves: ["CLT"], definicoes: { CLT: "Consolidação das Leis do Trabalho (1943): carteira assinada, salário mínimo, jornada de 8h, férias e aposentadoria." }, fotoUrl: imgTrab },
      { id: "p3", texto: "Em 1937 Vargas deu um GOLPE dentro do próprio governo: fechou o Congresso, cancelou eleições, extinguiu partidos e implantou o ESTADO NOVO — uma ditadura com censura à imprensa (pelo DIP), polícia política e perseguição a comunistas e opositores.", chaves: ["Estado Novo"], definicoes: { "Estado Novo": "Ditadura de Vargas (1937–1945), com Congresso fechado, censura e perseguição política." }, fotoUrl: imgVargas },
      { id: "p4", texto: "Vargas também impulsionou a INDÚSTRIA DE BASE: CSN (siderurgia, 1941), Vale do Rio Doce (mineração, 1942). Foi chamado de 'PAI DOS POBRES' pela CLT e 'MÃE DOS RICOS' pelos empresários que se beneficiaram. Caiu em 1945 sob pressão militar depois do fim da 2ª Guerra.", chaves: ["Populismo"], definicoes: { Populismo: "Estilo político de liderança forte que fala direto ao povo, entrega benefícios e concentra poder." }, fotoUrl: imgTrab },
    ],
    falaFinal: "Leitura concluída. Você já entende o gigante contraditório da história brasileira.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada marco ao lado certo de Vargas.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "mod", emoji: "🏭", rotulo: "Modernizador" },
      { id: "aut", emoji: "⛓️", rotulo: "Autoritário" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "CLT (1943)", emoji: "📄", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Carteira assinada, salário mínimo", emoji: "💰", cor: "from-cyan-600 to-slate-900" }, contexto: "Leis trabalhistas.", pecaCertaId: "mod", feedbackAcerto: "Correto. CLT = lado modernizador.", feedbackErro: "É Modernizador." },
      { id: "r2", municipioA: { nome: "DIP (censura)", emoji: "📵", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Departamento de Imprensa e Propaganda", emoji: "🎙️", cor: "from-amber-600 to-slate-900" }, contexto: "Fiscaliza rádio e jornal.", pecaCertaId: "aut", feedbackAcerto: "Correto. DIP = lado autoritário.", feedbackErro: "É Autoritário." },
      { id: "r3", municipioA: { nome: "Voto feminino (1932)", emoji: "🗳️", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Mulheres passam a votar", emoji: "👩", cor: "from-cyan-600 to-slate-900" }, contexto: "Direito civil.", pecaCertaId: "mod", feedbackAcerto: "Correto. Voto feminino = modernizador.", feedbackErro: "É Modernizador." },
      { id: "r4", municipioA: { nome: "Estado Novo (1937)", emoji: "⛓️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Congresso fechado", emoji: "🏛️", cor: "from-amber-600 to-slate-900" }, contexto: "Golpe autoritário.", pecaCertaId: "aut", feedbackAcerto: "Correto. Estado Novo = autoritário.", feedbackErro: "É Autoritário." },
      { id: "r5", municipioA: { nome: "CSN (1941)", emoji: "🏭", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Siderurgia estatal", emoji: "⚙️", cor: "from-cyan-600 to-slate-900" }, contexto: "Indústria de base.", pecaCertaId: "mod", feedbackAcerto: "Correto. CSN = modernizador.", feedbackErro: "É Modernizador." },
      { id: "r6", municipioA: { nome: "Perseguição a comunistas", emoji: "🚔", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Prisão de opositores", emoji: "⛓️", cor: "from-amber-600 to-slate-900" }, contexto: "Ditadura política.", pecaCertaId: "aut", feedbackAcerto: "Correto. Repressão = autoritário.", feedbackErro: "É Autoritário." },
    ],
    falaFinal: "6 rodadas. Você já separa as duas caras de Vargas.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Brasil 1920 × Brasil 1945 — economia mudou.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgTrab,
    fatias: [
      { id: "agr", rotulo: "Agrícola (~70%)", emoji: "🌾", percentual: 70, cor: "#b45309", descricao: "Em 1920 o Brasil era majoritariamente rural, com economia baseada em café, açúcar, cacau. Poucas fábricas.", exemplos: [] },
      { id: "ind", rotulo: "Indústria/Serviços (~30%)", emoji: "🏭", percentual: 30, cor: "#0f766e", descricao: "Em 1945, depois da Era Vargas, a indústria (têxtil, siderurgia, alimentos) já respondia por parte importante da economia.", exemplos: [] },
    ],
    falaFinal: "Vargas empurrou o Brasil da fazenda para a fábrica.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgVargas,
    perguntas: [
      { id: "av1", pergunta: "A Revolução de 1930 encerrou:", opcoes: [{ id: "a", texto: "A República Velha (café com leite).", correta: true }, { id: "b", texto: "O Império do Brasil.", correta: false }, { id: "c", texto: "A ditadura militar.", correta: false }], feedbackAcerto: "Correto. Encerrou a República Velha e levou Vargas ao poder.", feedbackErro: "É a República Velha (café com leite)." },
      { id: "av2", pergunta: "O Estado Novo (1937–1945) foi:", opcoes: [{ id: "a", texto: "Uma democracia plena.", correta: false }, { id: "b", texto: "Uma ditadura com Congresso fechado e censura.", correta: true }, { id: "c", texto: "Uma monarquia constitucional.", correta: false }], feedbackAcerto: "Correto. Ditadura, com DIP censurando a imprensa.", feedbackErro: "É a ditadura de Vargas com Congresso fechado." },
      { id: "av3", pergunta: "A CLT (1943):", opcoes: [{ id: "a", texto: "Consolidou os direitos trabalhistas no Brasil.", correta: true }, { id: "b", texto: "Fechou o Congresso.", correta: false }, { id: "c", texto: "Aboliu a escravidão.", correta: false }], feedbackAcerto: "Correto. Carteira, salário mínimo, jornada de 8h, férias.", feedbackErro: "É a consolidação das leis trabalhistas." },
    ],
    selo: { nome: "Nó 4 da Teia", subtitulo: "Era Vargas", emoji: "🏭", cor: "from-emerald-500 to-slate-900", fotoUrl: imgVargas },
    falaFinal: "Nó 4 destravado. O Brasil moderno tem RG de 1930.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Nó 4 — Era Vargas" },
};
