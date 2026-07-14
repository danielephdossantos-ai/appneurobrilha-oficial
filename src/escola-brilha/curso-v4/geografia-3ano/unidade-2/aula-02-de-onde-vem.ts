import type { AulaGeoV1 } from "../../types";
import { url as mapaMunicipio } from "@/assets/geografia-3ano/mapa-municipio.jpg.asset.json";
import { url as fotoFazenda } from "@/assets/geografia-3ano/origem-fazenda-leite.jpg.asset.json";
import { url as fotoHorta } from "@/assets/geografia-3ano/origem-horta.jpg.asset.json";
import { url as fotoRoca } from "@/assets/geografia-3ano/origem-roca-mandioca.jpg.asset.json";
import { url as fotoFeira } from "@/assets/geografia-3ano/origem-feira-cidade.jpg.asset.json";
import { url as rotaAlimentos } from "@/assets/geografia-3ano/rota-alimentos-campo-cidade.jpg.asset.json";
/**
 * Geografia · 3º Ano · Unidade 2 · Aula 02
 * "De Onde Vem Isso?" — EF03GE05
 *
 * Continua o Diário de Viagem Antropológico. Agora Brilha e Aurora
 * seguem 3 produtos (LEITE, VERDURA, FARINHA) do lugar de origem
 * (fazenda / horta / roça) até a feira da cidade, entendendo a rota
 * de produção e o valor do trabalho no campo.
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-de-onde-vem",
  titulo: "De Onde Vem Isso?",
  iconeTrilha: "🥛",
  bncc: ["EF03GE05"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste os BINÓCULOS sobre o mapa. Hoje a gente vai descobrir de ONDE vem cada coisa que aparece na feira da cidade.",
    mapaUrl: mapaMunicipio,
    imagemDestaqueUrl: rotaAlimentos,
    aurora:
      "Explorador, olha só: o leite do seu café, o alface do almoço e a farinha do pão viajaram MUITO antes de chegar em você. Vamos de balão seguir a rota deles!",
    falaFinal:
      "Cada pontinho piscando é um lugar de PRODUÇÃO — fazenda, horta ou roça. Bora subir de balão e descobrir a história de cada um.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido antes de decolar: quando você come um pão de queijo na cidade, tudo o que está nele veio da própria cidade?",
    pergunta: "Os alimentos da cidade nascem DENTRO da cidade?",
    opcoes: [
      {
        id: "cidade",
        titulo: "Sim, tudo vem da cidade",
        subtitulo: "da padaria mesmo",
        emoji: "🏙️",
        cor: "from-sky-400 to-indigo-600",
      },
      {
        id: "campo",
        titulo: "Não, quase tudo vem do CAMPO",
        subtitulo: "fazenda, horta, roça",
        emoji: "🚜",
        cor: "from-emerald-400 to-amber-500",
      },
    ],
    respostaCerta: "campo",
    feedbackAcerto:
      "Isso! O leite sai da FAZENDA, o queijo do LATICÍNIO, a farinha da ROÇA. A cidade só monta e vende — a matéria-prima vem quase toda do campo.",
    feedbackErro:
      "Quase! A padaria só ASSA o pão. O trigo, o leite e o ovo vêm do campo. A cidade quase nunca produz alimento — ela recebe, transforma e vende.",
    falaFinal:
      "Guarda esse palpite. Nas próximas cenas você vai VER a rota completa de 3 produtos que chegam na feira hoje.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Antes do primeiro pouso, abre 3 cadernos do diário. Cada palavra é uma peça pra você entender de onde vem tudo que a gente come.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "materia-prima",
        capa: "Matéria-prima",
        emoji: "🌾",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "É o ingrediente CRU que sai da natureza (leite da vaca, trigo do pé, mandioca do chão). Sem matéria-prima nenhum alimento fica pronto na cidade.",
        exemplo: "O leite é matéria-prima do queijo, do iogurte e da manteiga.",
        fotoUrl: fotoFazenda,
      },
      {
        id: "producao",
        capa: "Produção",
        emoji: "👐",
        cor: "from-emerald-500 to-lime-700",
        conteudo:
          "É o TRABALHO de quem cuida da terra e dos bichos pra tirar o alimento: o agricultor que planta, o vaqueiro que ordenha, o pescador que pesca.",
        exemplo: "Sem produção no campo, a feira da cidade fica vazia.",
        fotoUrl: fotoHorta,
      },
      {
        id: "circulacao",
        capa: "Circulação",
        emoji: "🚚",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "É a VIAGEM do alimento até chegar em você: caminhão, barco, moto ou caminhonete levam o produto da roça até o mercado, a feira e a sua casa.",
        exemplo: "O leite sai da fazenda de manhã e circula até virar café da tarde na cidade.",
        fotoUrl: fotoRoca,
      },
    ],
    falaFinal:
      "3 palavras no diário: MATÉRIA-PRIMA, PRODUÇÃO, CIRCULAÇÃO. Agora sim, bora seguir os produtos!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Nosso balão pousou em 3 lugares de produção do município. Toca em cada balão pra abrir a página do diário — com FOTO REAL e a história de cada rota.",
    instrucao: "Toque em cada ponto de pouso pra abrir a página do diário",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "fazenda",
        x: 25,
        y: 35,
        emoji: "🐄",
        cor: "from-emerald-400 to-lime-600",
        titulo: "Fazenda de Leite",
        texto:
          "Aqui, seu Antônio acorda às 4 da manhã pra ordenhar 12 vacas. O leite fresquinho vai pra um tanque gelado, sobe no caminhão às 7h e às 10h já está no laticínio da cidade virando queijo, iogurte e manteiga.",
        fotoUrl: fotoFazenda,
      },
      {
        id: "horta",
        x: 55,
        y: 65,
        emoji: "🥬",
        cor: "from-lime-500 to-emerald-600",
        titulo: "Horta Comunitária",
        texto:
          "Dona Rita cuida da horta com a família há 20 anos. Planta alface, tomate, cheiro-verde e couve na terra vermelha, colhe de manhã e vende direto pro restaurante e pra feira do centro — verdura do pé pra mesa em menos de 6 horas.",
        fotoUrl: fotoHorta,
      },
      {
        id: "roca",
        x: 75,
        y: 40,
        emoji: "🌽",
        cor: "from-amber-500 to-orange-600",
        titulo: "Roça de Mandioca",
        texto:
          "Na roça, seu Zé colhe mandioca e milho depois de 8 meses de plantio. Uma parte vira farinha na casa de farinha da comunidade; outra parte segue de caminhão pra padaria da cidade, onde vira pão de milho e bolo.",
        fotoUrl: fotoRoca,
      },
    ],
    falaFinal:
      "3 pontos de produção, 3 rotas diferentes — todos ALIMENTANDO o município. Nada do que a gente come cai do céu: alguém trabalhou pra isso chegar.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do explorador ligado! 3 perguntas rápidas pra ver se você já sabe de onde vem cada coisa da feira.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "De ONDE vem o leite fresquinho que vira queijo e iogurte?",
        fotoUrl: fotoFazenda,
        cards: [
          { id: "fazenda", emoji: "🐄", titulo: "Fazenda", cor: "from-emerald-400 to-lime-600" },
          { id: "horta", emoji: "🥬", titulo: "Horta", cor: "from-lime-500 to-emerald-600" },
          { id: "roca", emoji: "🌽", titulo: "Roça", cor: "from-amber-500 to-orange-600" },
        ],
        correta: "fazenda",
        feedbackAcerto: "Isso! Leite fresco vem da FAZENDA 🐄 — direto da vaca ordenhada de manhã cedo.",
        feedbackErro: "Quase! Leite fresco só sai da vaca — vem da FAZENDA 🐄, não da horta nem da roça.",
      },
      {
        id: "q2",
        pergunta: "Onde nasce o ALFACE, o TOMATE e o cheiro-verde da feira?",
        fotoUrl: fotoHorta,
        cards: [
          { id: "roca", emoji: "🌽", titulo: "Roça", cor: "from-amber-500 to-orange-600" },
          { id: "horta", emoji: "🥬", titulo: "Horta", cor: "from-lime-500 to-emerald-600" },
          { id: "fazenda", emoji: "🐄", titulo: "Fazenda", cor: "from-emerald-400 to-lime-600" },
        ],
        correta: "horta",
        feedbackAcerto: "Boa! Verdura e cheiro-verde nascem na HORTA 🥬 — plantação pequena, colhida à mão.",
        feedbackErro: "Repara: alface e tomate são de HORTA 🥬, não de roça grande nem de fazenda de gado.",
      },
      {
        id: "q3",
        pergunta: "De onde sai a MANDIOCA que vira farinha do pão da padaria?",
        fotoUrl: fotoRoca,
        cards: [
          { id: "fazenda", emoji: "🐄", titulo: "Fazenda", cor: "from-emerald-400 to-lime-600" },
          { id: "horta", emoji: "🥬", titulo: "Horta", cor: "from-lime-500 to-emerald-600" },
          { id: "roca", emoji: "🌽", titulo: "Roça", cor: "from-amber-500 to-orange-600" },
        ],
        correta: "roca",
        feedbackAcerto: "Exato! Mandioca e milho saem da ROÇA 🌽 — plantação grande no chão vermelho.",
        feedbackErro: "Ops! Mandioca é plantação grande — sai da ROÇA 🌽, não da horta e nem da fazenda de leite.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já sabe casar cada alimento com o lugar onde nasce. Bora ver como o campo e a cidade se ENCAIXAM.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Duas camadas fazem a comida chegar. Um interruptor acende a camada do CAMPO — onde tudo é produzido. O outro acende a CIDADE — onde tudo é vendido e transformado. Liga os dois pra ver a rota se completar.",
    instrucao: "Toque nos interruptores pra acender cada camada",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "campo-producao",
        rotulo: "Campo (Produção)",
        emoji: "🚜",
        cor: "from-emerald-500 to-amber-700",
        rect: { x: 8, y: 25, w: 45, h: 60 },
        descricao:
          "Camada da PRODUÇÃO: fazenda de leite, horta de verduras e roça de mandioca. É daqui que sai TODA a matéria-prima que a cidade vai transformar e vender.",
      },
      {
        id: "cidade-consumo",
        rotulo: "Cidade (Transformação e Venda)",
        emoji: "🏙️",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 55, y: 30, w: 40, h: 55 },
        descricao:
          "Camada da CIDADE: laticínio faz queijo, padaria faz pão, feira vende verdura fresca. A cidade RECEBE o alimento do campo, transforma e distribui pra todo mundo.",
      },
    ],
    falaFinal:
      "Viu? Sem CAMPO, a cidade não come. Sem CIDADE, o campo não vende. Cada camada precisa da outra pra fechar a rota do alimento.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Bora montar a ROTA DO LEITE? Vamos seguir o leite da vaca até o copo de café da manhã na cidade. Toca nas paradas na ORDEM certa.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como o leite da fazenda chega no seu café da manhã?",
    paradas: [
      {
        id: "vaca",
        emoji: "🐄",
        rotulo: "Vaca no pasto",
        descricao: "A vaca leiteira passa o dia no pasto, comendo capim e produzindo leite pra alimentar a bezerra e sobrar pra gente.",
      },
      {
        id: "ordenha",
        emoji: "🥛",
        rotulo: "Ordenha na fazenda",
        descricao: "De madrugada, seu Antônio ordenha as vacas e o leite vai pra um tanque gelado pra não estragar.",
      },
      {
        id: "caminhao",
        emoji: "🚚",
        rotulo: "Caminhão-tanque",
        descricao: "Um caminhão refrigerado passa cedo, leva o leite fresquinho até o laticínio da cidade.",
      },
      {
        id: "laticinio",
        emoji: "🏭",
        rotulo: "Laticínio na cidade",
        descricao: "No laticínio, o leite é fervido, embalado em caixa e transformado em queijo, iogurte e manteiga.",
      },
      {
        id: "mercado",
        emoji: "🛒",
        rotulo: "Mercado do bairro",
        descricao: "Do laticínio o leite vai pro mercado. Sua família compra, leva pra casa e coloca na geladeira.",
      },
      {
        id: "cafe",
        emoji: "☕",
        rotulo: "Café da manhã",
        descricao: "De manhã, o leite esquenta, mistura com café e vira o café com leite do seu dia. Rota fechada!",
      },
    ],
    ordemCerta: ["vaca", "ordenha", "caminhao", "laticinio", "mercado", "cafe"],
    feedbackAcerto: "Rota do leite completa! Da vaca até o café, sem pular etapa. Isso é PRODUÇÃO + CIRCULAÇÃO + CONSUMO.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: nasce na VACA, é ORDENHADA, sobe no CAMINHÃO, vira produto no LATICÍNIO, chega ao MERCADO e só depois vai pro seu CAFÉ.",
    falaFinal:
      "Percebeu quanta gente trabalha só pra um copo de leite chegar em você? Fazendeiro, motorista, operário do laticínio, atendente do mercado — tudo isso é uma rota do alimento.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, explorador! Eu fico caladinha. Você lê o Diário de Bordo sozinho e toca nas palavras chave pra provar que entendeu.",
    tituloLivro: "📔 Diário de Bordo do Balão",
    subtitulo: "Página 8 — De Onde Vem o que Comemos",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Quase tudo que a gente come na cidade começa no CAMPO. O leite sai da fazenda, a verdura da horta e a mandioca da roça. Sem produção rural, a cidade fica sem comida.",
        chaves: ["campo", "produção", "cidade"],
      },
      {
        id: "p2",
        texto:
          "Depois de colhido, o alimento precisa VIAJAR até chegar em você. Caminhão, barco e caminhonete fazem a circulação: da fazenda até o laticínio, do laticínio até o mercado, do mercado até a sua mesa.",
        chaves: ["viajar", "circulação", "mercado"],
      },
      {
        id: "p3",
        texto:
          "Na cidade, o alimento é TRANSFORMADO: o leite vira queijo no laticínio, a farinha vira pão na padaria, o tomate vira molho na fábrica. A cidade não produz matéria-prima, mas ela transforma e vende.",
        chaves: ["transformado", "laticínio", "padaria"],
      },
      {
        id: "p4",
        texto:
          "Por isso o CAMPO e a CIDADE precisam um do outro. O campo produz o alimento; a cidade transforma, vende e devolve dinheiro, escola e remédio pro campo. Os dois lados dependem um do outro pra viver bem.",
        chaves: ["campo", "cidade", "dependem"],
      },
    ],
    falaFinal:
      "Leitura de explorador! Você já sabe explicar SEM ajuda por que o campo e a cidade formam uma dupla que nunca se separa. Bora pro minijogo!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do BALÃO CARGUEIRO! Cada rodada mostra um alimento chegando na FEIRA da cidade. Lê a pista, olha as peças embaixo e toca no lugar de ORIGEM certo antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque no lugar de origem certo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "fazenda", emoji: "🐄", rotulo: "Fazenda" },
      { id: "horta", emoji: "🥬", rotulo: "Horta" },
      { id: "roca", emoji: "🌽", rotulo: "Roça" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Feira", emoji: "🛒", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Iogurte fresco", emoji: "🥛", cor: "from-slate-100 to-slate-300" },
        contexto:
          "Chegou um pote de IOGURTE FRESCO com etiqueta 'ordenhado hoje de madrugada'. De qual lugar de origem veio?",
        pecaCertaId: "fazenda",
        feedbackAcerto: "Combo! Iogurte fresco vem do leite da FAZENDA 🐄, ordenhado de madrugada.",
        feedbackErro: "Repara: iogurte é feito de leite — e leite vem da FAZENDA 🐄.",
      },
      {
        id: "r2",
        municipioA: { nome: "Feira", emoji: "🛒", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Pé de alface", emoji: "🥬", cor: "from-lime-400 to-emerald-600" },
        contexto: "Chegou um caixote de ALFACE colhido de manhã, ainda com terra vermelha na raiz. De onde vem?",
        pecaCertaId: "horta",
        feedbackAcerto: "Boa! Alface do pé, colhido de manhã, é direto da HORTA 🥬.",
        feedbackErro: "Ops! Alface é planta pequena de folha — só nasce na HORTA 🥬.",
      },
      {
        id: "r3",
        municipioA: { nome: "Feira", emoji: "🛒", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Farinha de mandioca", emoji: "🌾", cor: "from-amber-500 to-orange-600" },
        contexto: "Chegou um saco de FARINHA de mandioca torrada na casa de farinha da comunidade. De onde saiu a matéria-prima?",
        pecaCertaId: "roca",
        feedbackAcerto: "Isso! A mandioca é raiz grande — só sai da ROÇA 🌽.",
        feedbackErro: "Repensa: mandioca é raiz grande de plantação grande — vem da ROÇA 🌽.",
      },
      {
        id: "r4",
        municipioA: { nome: "Feira", emoji: "🛒", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Queijo minas", emoji: "🧀", cor: "from-slate-100 to-yellow-200" },
        contexto: "Chegou um QUEIJO minas branquinho embalado hoje cedo. De qual origem veio a matéria-prima dele?",
        pecaCertaId: "fazenda",
        feedbackAcerto: "Perfeito! Queijo é leite transformado — o leite sai da FAZENDA 🐄.",
        feedbackErro: "Atenção: queijo é feito de leite, e leite vem da FAZENDA 🐄.",
      },
      {
        id: "r5",
        municipioA: { nome: "Feira", emoji: "🛒", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Cheiro-verde", emoji: "🌿", cor: "from-lime-400 to-emerald-600" },
        contexto: "Chegou um maço de CHEIRO-VERDE (salsa e cebolinha) fresquinho, ainda molhado do orvalho. De onde vem?",
        pecaCertaId: "horta",
        feedbackAcerto: "Combo perfeito! Cheiro-verde é tempero de horta pequena — HORTA 🥬.",
        feedbackErro: "Repara: cheiro-verde é tempero delicado — cresce só na HORTA 🥬.",
      },
    ],
    falaFinal:
      "Explorador oficial de rotas! Você já sabe olhar um alimento e adivinhar de qual lugar do campo ele veio.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Bora olhar TUDO o que chega na feira da cidade como uma pizza dividida em 2 fatias — de um lado o CAMPO que produz, do outro a CIDADE que transforma e vende. Toca em cada fatia pra ouvir.",
    instrucao: "🍕 Toque nas fatias pra ouvir cada lado da rota",
    fatias: [
      {
        id: "fatia-campo",
        rotulo: "Campo (Fazenda + Horta + Roça)",
        emoji: "🚜",
        percentual: 70,
        cor: "#16a34a",
        descricao:
          "70% da comida que chega na feira NASCE no campo: leite e queijo vêm da FAZENDA, alface e tomate vêm da HORTA, mandioca e milho vêm da ROÇA. Sem o campo produzindo, a feira fica vazia.",
        exemplos: ["Leite da fazenda", "Alface da horta", "Mandioca da roça", "Queijo, ovo, farinha"],
      },
      {
        id: "fatia-cidade",
        rotulo: "Cidade (Transformação + Venda)",
        emoji: "🏙️",
        percentual: 30,
        cor: "#0ea5e9",
        descricao:
          "30% do trabalho é da CIDADE: o laticínio transforma leite em queijo, a padaria transforma farinha em pão, o mercado vende tudo pronto pra família levar pra casa. A cidade não produz a matéria-prima — ela transforma e entrega.",
        exemplos: ["Laticínio faz queijo", "Padaria faz pão", "Mercado vende", "Restaurante prepara"],
      },
    ],
    falaFinal:
      "Sacou? Campo + Cidade = 100% da comida na sua mesa. O campo faz nascer, a cidade transforma e entrega. Sem NENHUM dos dois lados, ninguém come.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última prova, explorador! 3 perguntas de rota do alimento pra ganhar sua insígnia de Rastreador de Alimentos.",
    instrucao: "Toque na resposta certa. Você tem 1 chance por pergunta.",
    perguntas: [
      {
        id: "p1",
        pergunta:
          "Sua mãe compra QUEIJO no mercado. Qual foi a rota mais provável do queijo até chegar em você?",
        opcoes: [
          { id: "a", texto: "Foi feito direto no mercado, do nada." },
          { id: "b", texto: "Vaca deu leite na fazenda → caminhão levou → laticínio transformou em queijo → mercado vendeu.", correta: true },
          { id: "c", texto: "Nasceu numa horta e virou queijo sozinho." },
        ],
        feedbackAcerto:
          "Isso! Queijo é LEITE TRANSFORMADO. A rota passa pela fazenda, pelo caminhão, pelo laticínio e só depois chega no mercado.",
        feedbackErro:
          "Repensa: queijo só existe porque a vaca deu leite na FAZENDA e o LATICÍNIO transformou. O mercado só é o final da rota.",
      },
      {
        id: "p2",
        pergunta: "O que é MATÉRIA-PRIMA?",
        opcoes: [
          { id: "a", texto: "É o alimento pronto que a gente compra no mercado." },
          { id: "b", texto: "É o ingrediente CRU que sai da natureza — como leite, mandioca, tomate — antes de virar produto.", correta: true },
          { id: "c", texto: "É o dinheiro que a gente paga na feira." },
        ],
        feedbackAcerto: "Perfeito! Matéria-prima é o ingrediente CRU. Leite, mandioca, trigo, tomate — todos são matéria-prima.",
        feedbackErro: "Quase! Matéria-prima é o ingrediente CRU que sai da natureza, antes de virar produto pronto na cidade.",
      },
      {
        id: "p3",
        pergunta: "Se um dia o CAMPO parasse de produzir, o que aconteceria com a cidade?",
        opcoes: [
          { id: "a", texto: "A feira, o mercado e a padaria ficariam vazios — a cidade passaria fome." , correta: true },
          { id: "b", texto: "Nada — a cidade produz a própria comida." },
          { id: "c", texto: "A cidade ficaria mais bonita." },
        ],
        feedbackAcerto:
          "Exato! A cidade DEPENDE do campo pra comer. Sem produção rural, feira e mercado ficariam vazios em pouco tempo.",
        feedbackErro:
          "Repensa: a cidade não produz alimento, ela só transforma e vende. Se o campo parasse, faltaria comida em todo canto.",
      },
    ],
    selo: {
      nome: "Rastreador de Alimentos",
      subtitulo: "Insígnia oficial do Atlas Municipal — Unidade 2, Aula 02",
      emoji: "🥛",
      cor: "from-amber-400 to-emerald-500",
    },
    falaFinal:
      "Segunda página do Volume 3 do Atlas desbloqueada! Você agora sabe olhar QUALQUER alimento e rastrear a rota dele até o campo.",
  },

  recompensa: { xp: 250, moedas: 150, medalha: "Rastreador de Alimentos" },
};

// Aviso: `fotoFeira` fica reservada pra ilustração futura da tela de conclusão.
void fotoFeira;
