import type { AulaGeoV1 } from "../../types";
import { url as mapaMunicipio } from "@/assets/geografia-3ano/mapa-municipio.jpg.asset.json";
import { url as heroSitioFeira } from "@/assets/geografia-3ano/hero-sitio-feira.jpg.asset.json";
import { url as colheita } from "@/assets/geografia-3ano/colheita-sitio-hortalicas.jpg.asset.json";
import { url as caminhonete } from "@/assets/geografia-3ano/caminhonete-hortalicas-estrada.jpg.asset.json";
import { url as entreposto } from "@/assets/geografia-3ano/entreposto-atacadista.jpg.asset.json";
import { url as feira } from "@/assets/geografia-3ano/feira-livre-bairro.jpg.asset.json";
/**
 * Geografia · 3º Ano · Unidade 3 · Aula 02
 * "A Feira do Bairro" — EF03GE03
 *
 * Brilha e Aurora seguem as FRUTAS e VERDURAS do sítio do pequeno
 * produtor até a barraca da feira livre do bairro. Mostra que a
 * parceria campo-cidade também acontece SEM fábrica no meio —
 * direto do sítio pra sua mesa.
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-feira-do-bairro",
  titulo: "A Feira do Bairro",
  iconeTrilha: "🍅",
  bncc: ["EF03GE03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste os BINÓCULOS sobre o mapa. Hoje a gente vai seguir a alface e o tomate do SÍTIO até a FEIRA do seu bairro.",
    mapaUrl: mapaMunicipio,
    imagemDestaqueUrl: heroSitioFeira,
    aurora:
      "Explorador, sabe aquela feira colorida que arma na rua no sábado de manhã? A alface, o tomate, a laranja… tudo isso saiu de um SÍTIO ontem à noite. Bora seguir esse caminho!",
    falaFinal:
      "Nem tudo do campo passa por fábrica. Às vezes, o alimento chega FRESQUINHO, direto do produtor pra sua sacola.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido: pra chegar da horta do sítio até a barraca da feira, o que precisa acontecer?",
    pergunta: "Como o tomate do sítio vira o tomate da feira?",
    opcoes: [
      {
        id: "magica",
        titulo: "Aparece na feira",
        subtitulo: "sem viagem nenhuma",
        emoji: "✨",
        cor: "from-pink-400 to-rose-600",
      },
      {
        id: "caminho",
        titulo: "Faz uma viagem",
        subtitulo: "sítio → caminhonete → entreposto → feira",
        emoji: "🛣️",
        cor: "from-emerald-500 to-green-700",
      },
    ],
    respostaCerta: "caminho",
    feedbackAcerto:
      "Isso mesmo! O tomate faz uma pequena viagem cheia de paradas. Cada uma tem gente trabalhando pra ele chegar fresco.",
    feedbackErro:
      "Pensa comigo: o tomate nasce na terra. Alguém colheu, alguém dirigiu, alguém arrumou. Tem viagem sim!",
    falaFinal:
      "Guarda esse palpite. Bora ver cada parada e quem faz o quê.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Antes de sair viajando, abre 4 cadernos. Cada um mostra UMA parada do caminho da feira — do SÍTIO até a sua BARRACA favorita.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "sitio",
        capa: "1. Sítio",
        emoji: "🌱",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "É onde tudo começa. O PEQUENO PRODUTOR planta alface, tomate, cenoura, couve. De manhã cedo, ele COLHE e coloca em caixotes de madeira, ainda molhados de orvalho.",
        exemplo:
          "Uma família de 4 pessoas cuida da horta e enche 20 caixotes por dia.",
        fotoUrl: colheita,
      },
      {
        id: "caminhonete",
        capa: "2. Caminhonete",
        emoji: "🛻",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "A CAMINHONETE do produtor (menor que um caminhão) leva os caixotes pela estrada rural. Como é feira do dia seguinte, ela viaja de MADRUGADA pra chegar cedo.",
        exemplo:
          "Uma caminhonete pequena carrega uns 30 caixotes de uma vez só.",
        fotoUrl: caminhonete,
      },
      {
        id: "entreposto",
        capa: "3. Entreposto",
        emoji: "🏬",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "É o MERCADO DOS FEIRANTES (CEASA), lá pelas 3h da manhã, na entrada da cidade. Vários sitiantes chegam com caminhonetes cheias. Os feirantes escolhem o que vão vender na feira.",
        exemplo:
          "Num entreposto grande passam mais de 500 caminhonetes por noite.",
        fotoUrl: entreposto,
      },
      {
        id: "feira",
        capa: "4. Feira Livre",
        emoji: "🍅",
        cor: "from-rose-500 to-pink-700",
        conteudo:
          "O FEIRANTE monta a BARRACA na rua do seu bairro bem cedo. Empilha as frutas e verduras bonitas, coloca o preço na plaquinha e espera a família chegar com a sacola de feira.",
        exemplo:
          "Uma feira pode ter 40 barracas e receber 2 mil pessoas numa manhã de sábado.",
        fotoUrl: feira,
      },
    ],
    falaFinal:
      "4 paradas: SÍTIO → CAMINHONETE → ENTREPOSTO → FEIRA. Repara: nessa rota não tem fábrica — vai FRESQUINHO do campo pra você.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Marquei os 4 lugares no mapa do município. Toca em cada balão pra Aurora te contar quem trabalha ali de madrugada.",
    instrucao: "Toque em cada ponto pra abrir a página do diário",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "p-sitio",
        x: 15,
        y: 72,
        emoji: "🌱",
        cor: "from-emerald-500 to-green-700",
        titulo: "Sítio no Campo",
        texto:
          "Na zona rural, a família toda ajuda: um planta, outro rega, outro colhe. De madrugada o pai já está lavando os caixotes de tomate. Sem essa família, a feira não existe.",
        fotoUrl: colheita,
      },
      {
        id: "p-estrada",
        x: 38,
        y: 58,
        emoji: "🛻",
        cor: "from-sky-500 to-blue-700",
        titulo: "Estrada de Madrugada",
        texto:
          "A caminhonete vai devagar pela estrada escura pra não machucar as frutas. O produtor dirige atento — se atrasar, o feirante compra de outro.",
        fotoUrl: caminhonete,
      },
      {
        id: "p-entreposto",
        x: 62,
        y: 38,
        emoji: "🏬",
        cor: "from-amber-500 to-orange-700",
        titulo: "Entreposto na Entrada da Cidade",
        texto:
          "Às 3h da manhã, sob luz forte, feirantes andam entre caixotes escolhendo o melhor. Cheiro de cebola, alface fresca, laranja madura no ar. Aqui campo e cidade se encontram.",
        fotoUrl: entreposto,
      },
      {
        id: "p-feira",
        x: 85,
        y: 22,
        emoji: "🍅",
        cor: "from-rose-500 to-pink-700",
        titulo: "Feira na Rua do Bairro",
        texto:
          "6h da manhã: barracas listradas montadas, plaquinhas com preço, feirante gritando ‘olha o tomate!’. Sua família chega com sacola de feira e conhece o feirante pelo nome.",
        fotoUrl: feira,
      },
    ],
    falaFinal:
      "Percebeu? De madrugada MUITA gente já está trabalhando pra que a sua feira de sábado exista. Um time silencioso, todo dia.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do explorador ligado! 3 perguntas rápidas pra ver se você entendeu o caminho da feira.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Onde nasce e é COLHIDA a alface que vai pra sua feira?",
        fotoUrl: colheita,
        cards: [
          { id: "sitio", emoji: "🌱", titulo: "Sítio", cor: "from-emerald-500 to-green-700" },
          { id: "entreposto", emoji: "🏬", titulo: "Entreposto", cor: "from-amber-500 to-orange-700" },
          { id: "feira", emoji: "🍅", titulo: "Feira", cor: "from-rose-500 to-pink-700" },
        ],
        correta: "sitio",
        feedbackAcerto:
          "Isso! Tudo começa no SÍTIO 🌱 — é lá que o pequeno produtor cuida da horta.",
        feedbackErro:
          "Repara: alface nasce na TERRA. E terra pra plantar tem no SÍTIO 🌱, na zona rural.",
      },
      {
        id: "q2",
        pergunta:
          "Onde os feirantes se encontram de madrugada pra ESCOLHER o que vão vender na feira?",
        fotoUrl: entreposto,
        cards: [
          { id: "sitio", emoji: "🌱", titulo: "Sítio", cor: "from-emerald-500 to-green-700" },
          { id: "entreposto", emoji: "🏬", titulo: "Entreposto (CEASA)", cor: "from-amber-500 to-orange-700" },
          { id: "casa", emoji: "🏠", titulo: "Casa deles", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "entreposto",
        feedbackAcerto:
          "Perfeito! O ENTREPOSTO 🏬 é o ponto de encontro entre produtores do campo e feirantes da cidade.",
        feedbackErro:
          "Pensa: cabe caminhonete, tem forklift, é enorme, funciona de madrugada. Isso é o ENTREPOSTO 🏬.",
      },
      {
        id: "q3",
        pergunta:
          "Quem monta a BARRACA na rua e vende a fruta pra sua família no sábado?",
        fotoUrl: feira,
        cards: [
          { id: "produtor", emoji: "🌱", titulo: "Produtor do sítio", cor: "from-emerald-500 to-green-700" },
          { id: "feirante", emoji: "🍅", titulo: "Feirante da feira", cor: "from-rose-500 to-pink-700" },
          { id: "motorista", emoji: "🛻", titulo: "Motorista", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "feirante",
        feedbackAcerto:
          "Exato! O FEIRANTE 🍅 é quem monta a barraca, coloca preço e conversa com os clientes.",
        feedbackErro:
          "Repensa: quem fica atrás da barraca gritando ‘olha o tomate!’ é o FEIRANTE 🍅.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já sabe o caminho todo. Bora ver como o campo e a cidade fazem essa troca.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Duas camadas pra você comparar. Uma acende o que o SÍTIO manda pra feira. A outra acende o que a CIDADE oferece pra que o sítio consiga produzir.",
    instrucao: "Toque nos interruptores pra acender cada camada",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "sitio-manda",
        rotulo: "Sítio → Feira",
        emoji: "🌱",
        cor: "from-emerald-500 to-green-700",
        rect: { x: 8, y: 48, w: 42, h: 45 },
        descricao:
          "Do sítio pra feira vai: alface, tomate, cenoura, couve, laranja, banana, mandioca, ovo caipira. Alimento FRESCO, sem passar por fábrica.",
      },
      {
        id: "cidade-oferece",
        rotulo: "Cidade → Sítio",
        emoji: "🏙️",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 55, y: 15, w: 40, h: 50 },
        descricao:
          "A cidade oferece: entreposto pra vender, feira montada nas ruas, banco, posto de gasolina pra caminhonete, loja de sementes e ferramentas. Sem isso, o sítio não escoa a produção.",
      },
    ],
    falaFinal:
      "Viu a troca? O sítio manda o alimento fresco, a cidade dá a estrutura pra vender. É parceria de novo — só que sem fábrica no meio.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Bora montar a ROTA da feira na ordem certa. Toca em cada parada na ordem que o tomate passa — do pé até a sua sacola.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Qual é a ROTA do tomate, do sítio até a feira do bairro?",
    paradas: [
      {
        id: "s1-colheita",
        emoji: "🌱",
        rotulo: "Colheita no sítio",
        descricao:
          "De manhã cedo, o produtor colhe os tomates maduros e enche os caixotes de madeira.",
      },
      {
        id: "s2-caminhonete",
        emoji: "🛻",
        rotulo: "Caminhonete na estrada",
        descricao:
          "De madrugada, a caminhonete carregada sai do sítio devagar rumo à cidade.",
      },
      {
        id: "s3-entreposto",
        emoji: "🏬",
        rotulo: "Entreposto (CEASA)",
        descricao:
          "Às 3h, o feirante escolhe os melhores caixotes de tomate no entreposto.",
      },
      {
        id: "s4-barraca",
        emoji: "🍅",
        rotulo: "Barraca da feira",
        descricao:
          "6h: o feirante monta a barraca na rua e empilha os tomates com preço.",
      },
      {
        id: "s5-sacola",
        emoji: "🛍️",
        rotulo: "Sua sacola de feira",
        descricao:
          "Sua família chega, escolhe o tomate mais bonito, paga e leva pra casa. Chegou!",
      },
    ],
    ordemCerta: ["s1-colheita", "s2-caminhonete", "s3-entreposto", "s4-barraca", "s5-sacola"],
    feedbackAcerto:
      "Rota da feira completa! Você seguiu direitinho, do sítio até sua sacola.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: COLHEITA → CAMINHONETE → ENTREPOSTO → BARRACA → SACOLA.",
    falaFinal:
      "Cada parada precisa da anterior. Se o produtor não colher, ninguém tem tomate. Se o feirante não montar barraca, sua família não compra.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, explorador! Eu fico caladinha. Você lê o Diário sozinho e toca nas palavras chave pra provar que entendeu.",
    tituloLivro: "📔 Diário de Bordo do Balão",
    subtitulo: "Página 11 — A Feira do Bairro",
    paragrafos: [
      {
        id: "p1",
        texto:
          "No SÍTIO, o pequeno produtor planta alface, tomate e cenoura. De manhã cedo, ele COLHE tudo e coloca em caixotes. Sem o sítio, a feira do bairro não existiria.",
        chaves: ["sítio", "produtor", "colhe"],
      },
      {
        id: "p2",
        texto:
          "A CAMINHONETE viaja de MADRUGADA pela estrada, cheia de caixotes de fruta e verdura. Ela precisa chegar cedinho no entreposto pra vender bem.",
        chaves: ["caminhonete", "madrugada", "estrada"],
      },
      {
        id: "p3",
        texto:
          "No ENTREPOSTO da cidade, os FEIRANTES escolhem os melhores caixotes. Depois cada um segue pra sua feira, monta a BARRACA e coloca as plaquinhas de preço.",
        chaves: ["entreposto", "feirantes", "barraca"],
      },
      {
        id: "p4",
        texto:
          "Quando sua família chega na FEIRA com a sacola, o alimento já viajou por várias mãos. Cada mão é uma parte da parceria entre CAMPO e CIDADE.",
        chaves: ["feira", "sacola", "parceria"],
      },
    ],
    falaFinal:
      "Você leu sozinho e já sabe explicar por que a feira é uma prova viva de que campo e cidade trabalham juntos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do PERSONAGEM CERTO! Cada rodada mostra um trabalhador da rota da feira. Toca em quem faz aquele trabalho antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque no personagem certo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "produtor", emoji: "🌱", rotulo: "Produtor" },
      { id: "motorista", emoji: "🛻", rotulo: "Motorista" },
      { id: "atacadista", emoji: "🏬", rotulo: "Atacadista" },
      { id: "feirante", emoji: "🍅", rotulo: "Feirante" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Enxada e chapéu", emoji: "🌾", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Horta de alface", emoji: "🥬", cor: "from-lime-400 to-emerald-600" },
        contexto:
          "Bem cedinho, usa chapéu, molha a horta e colhe alface pra encher os caixotes. Quem é?",
        pecaCertaId: "produtor",
        feedbackAcerto: "Boa! É o PRODUTOR 🌱 do sítio — a raiz de tudo.",
        feedbackErro:
          "Repara: quem cuida da horta e colhe é o PRODUTOR 🌱, no sítio.",
      },
      {
        id: "r2",
        municipioA: { nome: "Estrada escura", emoji: "🛣️", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Caminhonete cheia", emoji: "🛻", cor: "from-sky-400 to-indigo-600" },
        contexto:
          "3h da manhã, dirige uma caminhonete carregada de caixotes de tomate rumo à cidade. Quem é?",
        pecaCertaId: "motorista",
        feedbackAcerto:
          "Perfeito! É o MOTORISTA 🛻 — muitas vezes o próprio produtor dirigindo.",
        feedbackErro:
          "Pensa na estrada de madrugada: quem está no volante da caminhonete é o MOTORISTA 🛻.",
      },
      {
        id: "r3",
        municipioA: { nome: "Colete e prancheta", emoji: "📋", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Galpão do entreposto", emoji: "🏬", cor: "from-orange-400 to-amber-600" },
        contexto:
          "Trabalha no entreposto anotando caixotes que chegam, organizando fila de caminhonetes. Quem é?",
        pecaCertaId: "atacadista",
        feedbackAcerto:
          "Isso! É o ATACADISTA 🏬 — quem organiza o entreposto (CEASA).",
        feedbackErro:
          "Ops: colete, prancheta e galpão gigante é trabalho do ATACADISTA 🏬 do entreposto.",
      },
      {
        id: "r4",
        municipioA: { nome: "Barraca listrada", emoji: "⛱️", cor: "from-rose-500 to-pink-700" },
        municipioB: { nome: "Plaquinha com preço", emoji: "💰", cor: "from-pink-400 to-rose-600" },
        contexto:
          "Monta a barraca na rua às 6h, empilha as frutas bonitas e grita ‘olha a laranja!’. Quem é?",
        pecaCertaId: "feirante",
        feedbackAcerto:
          "Perfeito! É o FEIRANTE 🍅 — a estrela da manhã de sábado.",
        feedbackErro:
          "Repensa: quem atende sua família na feira do bairro é o FEIRANTE 🍅.",
      },
      {
        id: "r5",
        municipioA: { nome: "Sementes na terra", emoji: "🌰", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Regador na horta", emoji: "💧", cor: "from-lime-400 to-emerald-600" },
        contexto:
          "Planta as sementes, rega toda tarde, espera crescer. Quem faz isso?",
        pecaCertaId: "produtor",
        feedbackAcerto:
          "Combo! O PRODUTOR 🌱 planta, rega e colhe — trabalho de meses.",
        feedbackErro:
          "Pensa: quem cuida da planta desde semente é o PRODUTOR 🌱 do sítio.",
      },
      {
        id: "r6",
        municipioA: { nome: "Fila de caminhonetes", emoji: "🚦", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Forklift de caixotes", emoji: "🚜", cor: "from-orange-400 to-amber-600" },
        contexto:
          "De madrugada organiza a fila de descarga no galpão gigante da entrada da cidade. Quem é?",
        pecaCertaId: "atacadista",
        feedbackAcerto:
          "Perfeito! ATACADISTA 🏬 do entreposto coordena tudo antes do sol nascer.",
        feedbackErro:
          "Atenção: quem manda no galpão gigante do entreposto é o ATACADISTA 🏬.",
      },
    ],
    falaFinal:
      "Minijogo relâmpago concluído! Você reconhece cada personagem da rota da feira num piscar de olhos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Bora fechar com uma pizza da FEIRA. Toca em cada fatia pra revisar o que o campo dá e o que a cidade oferece.",
    instrucao: "Toque em cada fatia pra ouvir a Aurora explicar",
    fatias: [
      {
        id: "fatia-sitio",
        rotulo: "Sítio (Campo)",
        emoji: "🌱",
        percentual: 50,
        cor: "from-emerald-500 to-green-700",
        descricao:
          "O SÍTIO PLANTA E COLHE. É de lá que vem o alimento fresco, sem passar por fábrica. Sem o produtor, não tem tomate, alface, cenoura na feira.",
        exemplos: ["Alface e couve", "Tomate e cenoura", "Ovo caipira e laranja"],
      },
      {
        id: "fatia-feira",
        rotulo: "Feira (Cidade)",
        emoji: "🍅",
        percentual: 50,
        cor: "from-rose-500 to-pink-700",
        descricao:
          "A CIDADE OFERECE ONDE VENDER. Tem entreposto, feira montada nas ruas, feirante experiente, cliente comprando. Sem esse encontro, o sítio não consegue escoar o que produz.",
        exemplos: ["Entreposto (CEASA)", "Barracas na rua", "Feirantes e clientes"],
      },
    ],
    falaFinal:
      "Meio a meio! Sítio produz, cidade vende. Toda feira de sábado é essa parceria funcionando.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão pra pegar o selo! 3 perguntas rápidas — se acertar, você vira Explorador da Feira do Bairro.",
    instrucao: "Toque na resposta certa",
    perguntas: [
      {
        id: "av1",
        pergunta:
          "Se os pequenos produtores do campo pararem de plantar, o que acontece com a feira do bairro?",
        opcoes: [
          { id: "a", texto: "A feira continua igualzinha, porque as barracas fabricam sozinhas os tomates." },
          {
            id: "b",
            texto: "A feira fica vazia — sem alface, sem tomate, sem laranja. A cidade DEPENDE do sítio.",
            correta: true,
          },
        ],
        feedbackAcerto:
          "Exato! Sem sítio, não tem alimento fresco. A feira só existe porque o produtor colhe.",
        feedbackErro:
          "Pensa: barraca não fabrica tomate. Tomate nasce no sítio. Sem produtor, feira vazia.",
      },
      {
        id: "av2",
        pergunta:
          "Um produtor colheu 30 caixotes de tomate mas não tem onde vender. Qual serviço da CIDADE ajuda ele?",
        opcoes: [
          {
            id: "a",
            texto: "O ENTREPOSTO (CEASA) da cidade — lugar onde feirantes vão comprar de madrugada.",
            correta: true,
          },
          { id: "b", texto: "O parquinho do bairro, porque tem espaço grande." },
        ],
        feedbackAcerto:
          "Isso! O entreposto é a ponte. Sem ele, o produtor não encontra feirantes pra vender.",
        feedbackErro:
          "Repensa: parquinho é lazer. Quem organiza compra e venda de caixote é o ENTREPOSTO da cidade.",
      },
      {
        id: "av3",
        pergunta:
          "Qual frase explica MELHOR a feira do bairro?",
        opcoes: [
          { id: "a", texto: "A feira é da cidade e não tem nada a ver com o campo." },
          {
            id: "b",
            texto: "A feira é o ENCONTRO entre o campo (que produz) e a cidade (que oferece o espaço pra vender).",
            correta: true,
          },
        ],
        feedbackAcerto:
          "Perfeito! Toda feira é um encontro. Campo colhe, cidade acolhe, você compra.",
        feedbackErro:
          "Lembra da rota: sítio → caminhonete → entreposto → barraca → sua sacola. Isso é ENCONTRO entre campo e cidade.",
      },
    ],
    selo: {
      nome: "Explorador da Feira do Bairro",
      subtitulo: "Insígnia da Unidade 3 — Aula da Feira",
      emoji: "🍅",
      cor: "from-emerald-400 to-rose-500",
    },
    falaFinal:
      "Selo conquistado! Agora, toda vez que passar na feira de sábado, vai lembrar da madrugada inteira de trabalho que existe atrás de cada tomate.",
  },

  recompensa: {
    xp: 250,
    moedas: 150,
    medalha: "Explorador da Feira do Bairro",
  },
};
