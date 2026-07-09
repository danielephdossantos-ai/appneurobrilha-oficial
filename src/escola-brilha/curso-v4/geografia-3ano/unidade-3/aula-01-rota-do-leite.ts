import type { AulaGeoV1 } from "../../types";
import mapaMunicipio from "@/assets/geografia-3ano/mapa-municipio.jpg";
import heroCampoCidade from "@/assets/geografia-3ano/campo-cidade-trabalham-juntos.jpg";
import ordenha from "@/assets/geografia-3ano/ordenha-manha-fazenda.jpg";
import caminhao from "@/assets/geografia-3ano/caminhao-leite-estrada.jpg";
import fabrica from "@/assets/geografia-3ano/fabrica-pasteurizacao-leite.jpg";
import mercado from "@/assets/geografia-3ano/prateleira-leite-mercado.jpg";

/**
 * Geografia · 3º Ano · Unidade 3 · Aula 01
 * "A Rota do Leite" — EF03GE03
 *
 * Brilha e Aurora seguem o leite do café da manhã pelo caminho que ele
 * fez até chegar na caixinha: fazenda → caminhão resfriado → indústria
 * → mercado. Descobre-se que campo e cidade DEPENDEM um do outro.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-rota-do-leite",
  titulo: "A Rota do Leite",
  iconeTrilha: "🥛",
  bncc: ["EF03GE03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste os BINÓCULOS sobre o mapa. Hoje a gente vai seguir o leite do seu café da manhã — do CAMPO até a CIDADE.",
    mapaUrl: mapaMunicipio,
    imagemDestaqueUrl: heroCampoCidade,
    aurora:
      "Explorador, olha só: o leite do seu café, o queijo do lanche, o iogurte da geladeira… tudo isso viajou MUITO antes de chegar em você. Vamos de balão seguir a rota do leite!",
    falaFinal:
      "Campo e cidade não vivem separados. Um trabalha PRO outro todo dia. Bora descobrir como o caminho do leite prova isso.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido, explorador: pra chegar da vaca até a caixinha do mercado, o leite precisa passar por quantos lugares?",
    pergunta: "Quantos lugares diferentes o leite atravessa antes de chegar em casa?",
    opcoes: [
      {
        id: "direto",
        titulo: "Vai DIRETO",
        subtitulo: "da vaca pro mercado, sem parada",
        emoji: "🐄",
        cor: "from-emerald-400 to-green-600",
      },
      {
        id: "varios",
        titulo: "Vários lugares",
        subtitulo: "fazenda, caminhão, fábrica e mercado",
        emoji: "🛣️",
        cor: "from-sky-500 to-indigo-700",
      },
    ],
    respostaCerta: "varios",
    feedbackAcerto:
      "Isso mesmo! O leite passa por PELO MENOS 4 lugares até chegar na sua casa. Cada parada tem gente trabalhando pra você.",
    feedbackErro:
      "Pensa comigo: o leite sai quente da vaca. Pra chegar frio e limpinho na caixinha, ele precisa parar em VÁRIOS lugares no caminho.",
    falaFinal:
      "Guarda esse palpite. Bora ver cada parada e descobrir quem trabalha em cada uma.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Antes de sair viajando, abre 4 cadernos. Cada um mostra UMA parada do caminho do leite — do CAMPO até a CIDADE.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "fazenda",
        capa: "1. Fazenda",
        emoji: "🐄",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "É onde tudo começa. No CAMPO, o produtor rural cuida da vaca, dá comida boa, água limpa e faz a ORDENHA — tira o leite bem cedinho da manhã.",
        exemplo: "O leite sai quentinho da vaca e vai pro tanque gelado da fazenda.",
        fotoUrl: ordenha,
      },
      {
        id: "transporte",
        capa: "2. Transporte",
        emoji: "🚛",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "O caminhão RESFRIADO (com geladeira dentro) leva o leite da fazenda até a fábrica. Ele viaja pela estrada, ligando o campo à cidade sem deixar o leite estragar.",
        exemplo: "Um caminhão-tanque prateado pode levar milhares de litros de uma vez só.",
        fotoUrl: caminhao,
      },
      {
        id: "industria",
        capa: "3. Indústria",
        emoji: "🏭",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "Na FÁBRICA da cidade, o leite é PASTEURIZADO (aquecido bem rápido pra matar germes) e depois colocado dentro das caixinhas. Trabalhadores usam touca e jaleco pra manter tudo limpinho.",
        exemplo: "Uma fábrica pode encher milhares de caixinhas em uma única hora.",
        fotoUrl: fabrica,
      },
      {
        id: "mercado",
        capa: "4. Mercado",
        emoji: "🛒",
        cor: "from-rose-500 to-pink-700",
        conteudo:
          "As caixinhas chegam nas prateleiras REFRIGERADAS do mercado da cidade. Aí sua família compra, leva pra casa e coloca no café da manhã.",
        exemplo: "Da fazenda até a sua geladeira, o leite pode ter viajado mais de 100 km!",
        fotoUrl: mercado,
      },
    ],
    falaFinal:
      "4 paradas: FAZENDA → CAMINHÃO → FÁBRICA → MERCADO. Cada uma tem gente do campo OU da cidade fazendo sua parte.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Marquei os 4 lugares no mapa do município. Toca em cada balão pra Aurora te contar quem trabalha ali.",
    instrucao: "Toque em cada ponto pra abrir a página do diário",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "p-fazenda",
        x: 18,
        y: 65,
        emoji: "🐄",
        cor: "from-emerald-500 to-green-700",
        titulo: "Fazenda no Campo",
        texto:
          "Aqui na zona rural, o produtor acorda antes do sol nascer, faz a ordenha e enche o tanque de resfriamento. Sem o campo, nem começa o café da manhã da cidade.",
        fotoUrl: ordenha,
      },
      {
        id: "p-estrada",
        x: 40,
        y: 55,
        emoji: "🚛",
        cor: "from-sky-500 to-blue-700",
        titulo: "Estrada entre Campo e Cidade",
        texto:
          "O caminhoneiro liga o motor cedinho, pega o leite no tanque da fazenda e dirige pela estrada. É ele que costura o campo na cidade todo dia.",
        fotoUrl: caminhao,
      },
      {
        id: "p-fabrica",
        x: 60,
        y: 35,
        emoji: "🏭",
        cor: "from-amber-500 to-orange-700",
        titulo: "Indústria na Cidade",
        texto:
          "Na fábrica da cidade, operadores de máquina pasteurizam o leite e enchem as caixinhas. Sem o campo, essa fábrica não teria o que embalar.",
        fotoUrl: fabrica,
      },
      {
        id: "p-mercado",
        x: 82,
        y: 25,
        emoji: "🛒",
        cor: "from-rose-500 to-pink-700",
        titulo: "Mercado no Bairro",
        texto:
          "O repositor coloca as caixinhas geladas na prateleira. O caixa registra a compra. Sua família leva pra casa. Cidade e campo se encontram aqui, no seu café.",
        fotoUrl: mercado,
      },
    ],
    falaFinal:
      "Percebeu? Em CADA parada tem alguém trabalhando pra você. O caminho do leite é o caminho do trabalho de MUITA gente.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do explorador ligado! 3 perguntas rápidas pra ver se você entendeu quem faz o quê em cada parada.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Em qual parada o leite SAI da vaca pela primeira vez?",
        fotoUrl: ordenha,
        cards: [
          { id: "fazenda", emoji: "🐄", titulo: "Fazenda", cor: "from-emerald-500 to-green-700" },
          { id: "fabrica", emoji: "🏭", titulo: "Fábrica", cor: "from-amber-500 to-orange-700" },
          { id: "mercado", emoji: "🛒", titulo: "Mercado", cor: "from-rose-500 to-pink-700" },
        ],
        correta: "fazenda",
        feedbackAcerto: "Isso! Tudo começa na FAZENDA 🐄 — é lá que a vaca é ordenhada bem cedinho.",
        feedbackErro: "Repara: o leite SAI da vaca. E a vaca vive na FAZENDA 🐄, no campo.",
      },
      {
        id: "q2",
        pergunta: "Quem LIGA o campo à cidade, levando o leite frio pela estrada?",
        fotoUrl: caminhao,
        cards: [
          { id: "fabrica", emoji: "🏭", titulo: "Fábrica", cor: "from-amber-500 to-orange-700" },
          { id: "caminhao", emoji: "🚛", titulo: "Caminhão resfriado", cor: "from-sky-500 to-blue-700" },
          { id: "mercado", emoji: "🛒", titulo: "Mercado", cor: "from-rose-500 to-pink-700" },
        ],
        correta: "caminhao",
        feedbackAcerto:
          "Perfeito! O CAMINHÃO 🚛 é a ponte entre o campo e a cidade. Sem ele, o leite não chega.",
        feedbackErro:
          "Pensa na estrada: quem viaja da fazenda até a fábrica é o CAMINHÃO 🚛 resfriado.",
      },
      {
        id: "q3",
        pergunta: "Onde o leite é PASTEURIZADO e colocado dentro da caixinha?",
        fotoUrl: fabrica,
        cards: [
          { id: "mercado", emoji: "🛒", titulo: "Mercado", cor: "from-rose-500 to-pink-700" },
          { id: "fazenda", emoji: "🐄", titulo: "Fazenda", cor: "from-emerald-500 to-green-700" },
          { id: "fabrica", emoji: "🏭", titulo: "Fábrica", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "fabrica",
        feedbackAcerto: "Exato! A FÁBRICA 🏭 pasteuriza e enche as caixinhas — é a indústria da cidade.",
        feedbackErro:
          "Repensa: quem tem máquina grande pra aquecer o leite e encher caixinha é a FÁBRICA 🏭.",
      },
    ],
    falaFinal:
      "Radar afiado, explorador! Você já sabe quem faz cada trabalho. Bora entender como campo e cidade se AJUDAM.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Duas camadas pra você comparar. Um interruptor acende o que o CAMPO manda pra cidade. O outro acende o que a CIDADE devolve pro campo. Liga os dois pra ver a troca.",
    instrucao: "Toque nos interruptores pra acender cada camada",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "campo-manda",
        rotulo: "Campo → Cidade",
        emoji: "🌾",
        cor: "from-emerald-500 to-green-700",
        rect: { x: 8, y: 45, w: 40, h: 45 },
        descricao:
          "Do campo pra cidade vai: LEITE, verduras, carne, frutas, ovos, café, farinha. Sem o campo, o mercado da cidade fica vazio e ninguém come.",
      },
      {
        id: "cidade-manda",
        rotulo: "Cidade → Campo",
        emoji: "🏙️",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 55, y: 20, w: 40, h: 45 },
        descricao:
          "Da cidade pro campo vai: caminhões, remédio da vaca, ração, tratores, energia elétrica, escola, hospital e a fábrica que embala. Sem a cidade, o campo não consegue vender o que produz.",
      },
    ],
    falaFinal:
      "Viu a troca? Campo produz o alimento, cidade dá a estrutura pra chegar até você. Um NÃO vive sem o outro.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Bora montar a ROTA do leite na ordem certa. Toca em cada parada na ordem que o leite passa — da vaca até seu café.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Qual é a ROTA do leite, do campo até sua casa?",
    paradas: [
      {
        id: "s1-vaca",
        emoji: "🐄",
        rotulo: "Ordenha na fazenda",
        descricao: "Cedinho, o produtor tira o leite da vaca e coloca no tanque gelado da fazenda.",
      },
      {
        id: "s2-caminhao",
        emoji: "🚛",
        rotulo: "Caminhão resfriado",
        descricao:
          "O caminhão-tanque pega o leite frio na fazenda e viaja pela estrada rumo à fábrica.",
      },
      {
        id: "s3-fabrica",
        emoji: "🏭",
        rotulo: "Fábrica pasteuriza",
        descricao: "Na fábrica da cidade, o leite é pasteurizado e colocado nas caixinhas.",
      },
      {
        id: "s4-loja",
        emoji: "🛒",
        rotulo: "Prateleira do mercado",
        descricao:
          "As caixinhas viajam de outro caminhão até o mercado do bairro e vão pra prateleira gelada.",
      },
      {
        id: "s5-casa",
        emoji: "🍶",
        rotulo: "Seu café da manhã",
        descricao:
          "Sua família compra, leva pra casa, coloca na geladeira e você toma no café. Chegou!",
      },
    ],
    ordemCerta: ["s1-vaca", "s2-caminhao", "s3-fabrica", "s4-loja", "s5-casa"],
    feedbackAcerto: "Rota do leite completa! Você seguiu direitinho, do campo à cidade.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: ORDENHA → CAMINHÃO → FÁBRICA → MERCADO → SUA CASA.",
    falaFinal:
      "Cada parada precisa da anterior. Se uma falhar, o leite não chega. É um TIME entre campo e cidade.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, explorador! Eu fico caladinha. Você lê o Diário sozinho e toca nas palavras chave pra provar que entendeu.",
    tituloLivro: "📔 Diário de Bordo do Balão",
    subtitulo: "Página 10 — Campo e Cidade Trabalham Juntos",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O CAMPO produz o que a gente come: leite, verdura, fruta, carne, farinha. Sem o campo, a cidade fica com o mercado vazio e sem café da manhã.",
        chaves: ["campo", "produz", "mercado"],
      },
      {
        id: "p2",
        texto:
          "A CIDADE não fica devendo. Ela manda pro campo os TRATORES, a energia elétrica, o remédio da vaca e as fábricas que embalam o alimento pra durar mais.",
        chaves: ["cidade", "tratores", "fábricas"],
      },
      {
        id: "p3",
        texto:
          "Entre os dois, tem o CAMINHÃO. Ele é a ponte que corre pela estrada levando o leite de manhã e trazendo a ração de tarde. Sem ele, um lado não alcança o outro.",
        chaves: ["caminhão", "ponte", "estrada"],
      },
      {
        id: "p4",
        texto:
          "Por isso, campo e cidade são PARCEIROS. Um não vive sem o outro. Toda vez que você toma um copo de leite, você prova essa parceria.",
        chaves: ["parceiros", "leite", "parceria"],
      },
    ],
    falaFinal:
      "Você leu sozinho e já sabe explicar por que campo e cidade dependem um do outro. Bora pro minijogo!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do PARCEIRO CERTO! Cada rodada mostra uma situação. Toca em quem produziu ou entregou aquilo antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque no parceiro certo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "campo", emoji: "🌾", rotulo: "Campo" },
      { id: "caminhao", emoji: "🚛", rotulo: "Caminhão" },
      { id: "fabrica", emoji: "🏭", rotulo: "Fábrica" },
      { id: "mercado", emoji: "🛒", rotulo: "Mercado" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Ordenha", emoji: "🐄", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Vaca leiteira", emoji: "🥛", cor: "from-lime-400 to-emerald-600" },
        contexto:
          "Cedinho, alguém tirou o leite da vaca e encheu o tanque gelado da fazenda. Onde isso aconteceu?",
        pecaCertaId: "campo",
        feedbackAcerto: "Boa! Ordenha é lá no CAMPO 🌾, na fazenda.",
        feedbackErro: "Repara: quem tem vaca é o CAMPO 🌾 — fazenda fica na zona rural.",
      },
      {
        id: "r2",
        municipioA: { nome: "Estrada BR-101", emoji: "🛣️", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Tanque prateado", emoji: "🚛", cor: "from-sky-400 to-indigo-600" },
        contexto:
          "Um veículo grande, prateado e com geladeira dentro está viajando pela estrada com milhares de litros de leite. Quem é?",
        pecaCertaId: "caminhao",
        feedbackAcerto: "Perfeito! É o CAMINHÃO 🚛 resfriado — a ponte entre campo e cidade.",
        feedbackErro: "Pensa na estrada: quem carrega leite frio a longa distância é o CAMINHÃO 🚛.",
      },
      {
        id: "r3",
        municipioA: { nome: "Máquinas grandes", emoji: "⚙️", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Trabalhadores de touca", emoji: "🥼", cor: "from-orange-400 to-amber-600" },
        contexto:
          "Trabalhadores de touca e jaleco operam máquinas que pasteurizam e enchem caixinhas. Onde estão?",
        pecaCertaId: "fabrica",
        feedbackAcerto: "Combo! Pasteurizar e embalar é na FÁBRICA 🏭 da cidade.",
        feedbackErro: "Ops: touca, jaleco e máquina de encher caixinha = FÁBRICA 🏭.",
      },
      {
        id: "r4",
        municipioA: { nome: "Prateleira gelada", emoji: "🧊", cor: "from-rose-500 to-pink-700" },
        municipioB: { nome: "Carrinho de compras", emoji: "🛒", cor: "from-pink-400 to-rose-600" },
        contexto:
          "Sua família encontra as caixinhas geladas numa prateleira, pega uma e coloca no carrinho. Que parada é essa?",
        pecaCertaId: "mercado",
        feedbackAcerto: "Isso! Prateleira gelada e carrinho de compras é MERCADO 🛒.",
        feedbackErro: "Repensa: onde se compra caixinha de leite? No MERCADO 🛒 do bairro.",
      },
      {
        id: "r5",
        municipioA: { nome: "Ração pra vaca", emoji: "🌽", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Sacos empilhados", emoji: "🏭", cor: "from-yellow-400 to-amber-600" },
        contexto:
          "Sacos de ração foram feitos numa fábrica e agora vão VOLTAR pro produtor alimentar as vacas. Quem faz a ração?",
        pecaCertaId: "fabrica",
        feedbackAcerto: "Perfeito! A cidade tem a FÁBRICA 🏭 que produz a ração — e devolve pro campo.",
        feedbackErro: "Atenção: quem tem máquina pra fazer saco de ração é a FÁBRICA 🏭 da cidade.",
      },
      {
        id: "r6",
        municipioA: { nome: "Trator novo", emoji: "🚜", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Chega na fazenda", emoji: "🌾", cor: "from-lime-400 to-emerald-600" },
        contexto:
          "Um trator novo saiu da cidade e foi entregue na fazenda. Quem levou ele pela estrada?",
        pecaCertaId: "caminhao",
        feedbackAcerto: "Combo! CAMINHÃO 🚛 leva alimento pra cidade E máquina pro campo.",
        feedbackErro: "Pensa: quem viaja pela estrada carregando coisa grande é o CAMINHÃO 🚛.",
      },
    ],
    falaFinal:
      "Minijogo relâmpago concluído! Você reconhece cada parceiro do time campo-cidade num piscar de olhos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Bora fechar com uma pizza da PARCERIA. Toca em cada fatia pra revisar o que cada lado faz pelo outro.",
    instrucao: "Toque em cada fatia pra ouvir a Aurora explicar",
    fatias: [
      {
        id: "fatia-campo",
        rotulo: "Campo",
        emoji: "🌾",
        percentual: 50,
        cor: "from-emerald-500 to-green-700",
        descricao:
          "O CAMPO PRODUZ. É lá que nasce o alimento, o leite, a fruta, a carne. Sem o campo, a cidade não come.",
        exemplos: ["Leite da fazenda", "Frutas e verduras", "Carne, ovos, farinha"],
      },
      {
        id: "fatia-cidade",
        rotulo: "Cidade",
        emoji: "🏙️",
        percentual: 50,
        cor: "from-sky-500 to-indigo-700",
        descricao:
          "A CIDADE TRANSFORMA E ENTREGA. Fábrica embala, caminhão transporta, mercado vende, hospital cuida. Sem a cidade, o campo não vende nem recebe ajuda.",
        exemplos: ["Fábricas, caminhões", "Mercados, hospitais", "Tratores e ração"],
      },
    ],
    falaFinal:
      "Meio a meio! Nenhum lado é mais importante. A parceria é 50/50 — todo dia, em cada café da manhã.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão pra pegar o selo! 3 perguntas rápidas — se acertar, você vira Parceiro Oficial do Campo e da Cidade.",
    instrucao: "Toque na resposta certa",
    perguntas: [
      {
        id: "av1",
        pergunta:
          "Se os caminhões do campo não conseguirem chegar à cidade, o que acontece com o café da manhã?",
        opcoes: [
          { id: "a", texto: "A cidade fabrica suas próprias frutas usando asfalto." },
          {
            id: "b",
            texto: "As pessoas na cidade ficam sem alimentos frescos, porque a cidade DEPENDE do campo.",
            correta: true,
          },
        ],
        feedbackAcerto:
          "Exato! O campo alimenta a cidade. Se o caminhão parar, o mercado esvazia rápido.",
        feedbackErro:
          "Pensa comigo: cidade não tem vaca nem plantação. Sem caminhão, o alimento não chega e o mercado fica vazio.",
      },
      {
        id: "av2",
        pergunta:
          "O produtor da fazenda ficou sem energia elétrica e sem trator novo. Quem devia mandar essas coisas pra ele?",
        opcoes: [
          { id: "a", texto: "A CIDADE — que tem fábrica de trator, hospital e rede de energia.", correta: true },
          { id: "b", texto: "Outra fazenda vizinha, porque a cidade não ajuda o campo em nada." },
        ],
        feedbackAcerto:
          "Isso! A cidade DEVOLVE pro campo: energia, trator, ração, remédio da vaca. É uma troca.",
        feedbackErro:
          "Repensa: fazenda vizinha não fabrica trator. Quem tem fábrica, hospital e rede elétrica é a CIDADE.",
      },
      {
        id: "av3",
        pergunta:
          "Qual frase explica MELHOR a relação entre campo e cidade?",
        opcoes: [
          { id: "a", texto: "Um vive sem o outro tranquilamente." },
          {
            id: "b",
            texto: "Campo e cidade são PARCEIROS: um produz o alimento, o outro transporta, transforma e vende.",
            correta: true,
          },
        ],
        feedbackAcerto:
          "Perfeito! Parceria é a palavra. Toda vez que você toma leite, você prova essa parceria.",
        feedbackErro:
          "Lembra da rota do leite: fazenda → caminhão → fábrica → mercado. Cada etapa DEPENDE da outra. Isso é PARCERIA.",
      },
    ],
    selo: {
      nome: "Parceiro do Campo e da Cidade",
      subtitulo: "Insígnia oficial da Unidade 3 — Rota do Leite",
      emoji: "🥛",
      cor: "from-emerald-400 to-sky-500",
    },
    falaFinal:
      "Selo conquistado! Agora, toda vez que você tomar leite, vai lembrar da rota completa e do time que trabalhou pra ele chegar.",
  },

  recompensa: {
    xp: 250,
    moedas: 150,
    medalha: "Parceiro do Campo e da Cidade",
  },
};
