import type { AulaGeoV1 } from "../../types";
import mapaMunicipio from "@/assets/geografia-3ano/mapa-municipio.jpg";
import heroTrigoPao from "@/assets/geografia-3ano/hero-trigo-pao.jpg";
import lavoura from "@/assets/geografia-3ano/lavoura-trigo-dourada.jpg";
import silo from "@/assets/geografia-3ano/silo-armazenagem-graos.jpg";
import moinho from "@/assets/geografia-3ano/moinho-farinha-industria.jpg";
import padaria from "@/assets/geografia-3ano/padaria-artesanal-paes.jpg";

/**
 * Geografia · 3º Ano · Unidade 3 · Aula 03
 * "Do Trigo ao Pão" — EF03GE03
 *
 * Brilha e Aurora seguem o TRIGO da lavoura até o pãozinho quente
 * da padaria do bairro. Mostra que, entre campo e cidade, tem uma
 * INDÚSTRIA (moinho) que transforma matéria-prima em farinha antes
 * do pão chegar na sua mesa.
 */
export const aula03: AulaGeoV1 = {
  slug: "aula-03-do-trigo-ao-pao",
  titulo: "Do Trigo ao Pão",
  iconeTrilha: "🥖",
  bncc: ["EF03GE03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA sobre o mapa. Hoje a gente vai seguir o TRIGO — da lavoura até o pãozinho quentinho da padaria do seu bairro.",
    mapaUrl: mapaMunicipio,
    imagemDestaqueUrl: heroTrigoPao,
    aurora:
      "Bom dia, explorador! Cheirinho de pão quente saindo do forno… mas você sabe DE ONDE vem esse pão? Ele começa lá longe, numa lavoura de trigo dourada. Vamos seguir?",
    falaFinal:
      "Do campo ao pão, tem 4 paradas — e uma delas é uma FÁBRICA. Bora ver como funciona!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido: pra virar pão, o trigo precisa passar por qual lugar antes de chegar na padaria?",
    pergunta: "O trigo colhido no campo vira pão como?",
    opcoes: [
      {
        id: "direto",
        titulo: "Vai direto",
        subtitulo: "da lavoura pra padaria",
        emoji: "🚫",
        cor: "from-rose-400 to-pink-600",
      },
      {
        id: "moinho",
        titulo: "Passa no MOINHO",
        subtitulo: "vira farinha, depois vai pra padaria",
        emoji: "🏭",
        cor: "from-amber-500 to-orange-700",
      },
    ],
    respostaCerta: "moinho",
    feedbackAcerto:
      "Isso! O trigo é DURO — precisa ser moído no moinho pra virar farinha. Só depois o padeiro faz o pão.",
    feedbackErro:
      "Pensa: você já mordeu um grão de trigo cru? É durinho! Precisa passar no MOINHO pra virar farinha macia.",
    falaFinal:
      "Guarda esse palpite. Bora ver cada parada do trigo até o pão.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Abre 4 cadernos. Cada um mostra UMA parada do trigo — desde a lavoura dourada até a prateleira quentinha da padaria.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "lavoura",
        capa: "1. Lavoura",
        emoji: "🌾",
        cor: "from-yellow-500 to-amber-700",
        conteudo:
          "É a PLANTAÇÃO de trigo no CAMPO. O agricultor prepara a terra, planta as sementes e espera meses até o trigo ficar DOURADO. Aí uma máquina colheitadeira colhe tudo.",
        exemplo:
          "Uma lavoura pequena colhe cerca de 3 toneladas de trigo por hectare.",
        fotoUrl: lavoura,
      },
      {
        id: "silo",
        capa: "2. Silo",
        emoji: "🏗️",
        cor: "from-slate-500 to-zinc-700",
        conteudo:
          "É o TANQUE GIGANTE de metal que ARMAZENA o trigo colhido, protegido da chuva e dos ratos. Um caminhão bem grande vem buscar o trigo e leva pro moinho.",
        exemplo:
          "Um silo grande guarda até 10 mil toneladas de grão de uma vez.",
        fotoUrl: silo,
      },
      {
        id: "moinho",
        capa: "3. Moinho",
        emoji: "🏭",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "É a FÁBRICA da farinha. Máquinas enormes MOEM os grãos de trigo até virar pó branco: a FARINHA. Trabalhadores de branco enchem sacos e mandam pra cidade.",
        exemplo:
          "Um moinho médio produz 200 toneladas de farinha por dia.",
        fotoUrl: moinho,
      },
      {
        id: "padaria",
        capa: "4. Padaria",
        emoji: "🥖",
        cor: "from-rose-500 to-red-700",
        conteudo:
          "É onde o PADEIRO recebe a farinha, mistura com água, sal e fermento, e ASSA no forno. De manhã cedo, a padaria enche de gente comprando pão quentinho.",
        exemplo:
          "Uma padaria de bairro assa uns 3 mil pãezinhos por dia.",
        fotoUrl: padaria,
      },
    ],
    falaFinal:
      "4 paradas: LAVOURA → SILO → MOINHO → PADARIA. Repara: aqui tem FÁBRICA no meio — o moinho — porque o trigo cru não vira pão sozinho.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Marquei os 4 lugares no mapa do município. Toca em cada balão pra Aurora te contar quem trabalha em cada parada da rota do pão.",
    instrucao: "Toque em cada ponto pra abrir a página do diário",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "p-lavoura",
        x: 12,
        y: 78,
        emoji: "🌾",
        cor: "from-yellow-500 to-amber-700",
        titulo: "Lavoura no Campo",
        texto:
          "O agricultor acorda cedo pra ver se o trigo já secou o bastante. Quando fica dourado, uma máquina enorme, a COLHEITADEIRA, corta tudo em um dia. Sem esse trabalho, ninguém come pão.",
        fotoUrl: lavoura,
      },
      {
        id: "p-silo",
        x: 32,
        y: 62,
        emoji: "🏗️",
        cor: "from-slate-500 to-zinc-700",
        titulo: "Silo de Armazenagem",
        texto:
          "Perto da lavoura tem os silos, tanques altos de metal. O trigo colhido fica ali guardado, sequinho. Um caminhão grande enche o baú e leva pra cidade, pro moinho.",
        fotoUrl: silo,
      },
      {
        id: "p-moinho",
        x: 58,
        y: 38,
        emoji: "🏭",
        cor: "from-amber-500 to-orange-700",
        titulo: "Moinho na Zona Industrial",
        texto:
          "Na zona industrial da cidade, máquinas enormes MOEM os grãos. Trabalhadores de uniforme branco e touca enchem sacos de farinha. Sai tanto pó branco no ar que parece nevar!",
        fotoUrl: moinho,
      },
      {
        id: "p-padaria",
        x: 84,
        y: 24,
        emoji: "🥖",
        cor: "from-rose-500 to-red-700",
        titulo: "Padaria do Bairro",
        texto:
          "5h da manhã: o padeiro já está mexendo a massa com farinha, água, sal e fermento. Bota no forno bem quente. Às 6h30, o cheirinho de pão fresco toma o bairro inteiro.",
        fotoUrl: padaria,
      },
    ],
    falaFinal:
      "Percebeu? Do agricultor no campo até o padeiro na cidade, MUITA gente trabalha pra que seu pãozinho de manhã exista.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do explorador ligado! 3 perguntas rápidas pra ver se você seguiu a rota do pão direitinho.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Onde o TRIGO é plantado e colhido dourado?",
        fotoUrl: lavoura,
        cards: [
          { id: "lavoura", emoji: "🌾", titulo: "Lavoura", cor: "from-yellow-500 to-amber-700" },
          { id: "moinho", emoji: "🏭", titulo: "Moinho", cor: "from-amber-500 to-orange-700" },
          { id: "padaria", emoji: "🥖", titulo: "Padaria", cor: "from-rose-500 to-red-700" },
        ],
        correta: "lavoura",
        feedbackAcerto:
          "Isso! Tudo começa na LAVOURA 🌾 — é lá que o trigo cresce dourado no campo.",
        feedbackErro:
          "Repara: trigo é planta. Planta cresce na TERRA da LAVOURA 🌾, no campo.",
      },
      {
        id: "q2",
        pergunta:
          "Em qual FÁBRICA o trigo é MOÍDO e vira farinha branquinha?",
        fotoUrl: moinho,
        cards: [
          { id: "silo", emoji: "🏗️", titulo: "Silo", cor: "from-slate-500 to-zinc-700" },
          { id: "moinho", emoji: "🏭", titulo: "Moinho", cor: "from-amber-500 to-orange-700" },
          { id: "padaria", emoji: "🥖", titulo: "Padaria", cor: "from-rose-500 to-red-700" },
        ],
        correta: "moinho",
        feedbackAcerto:
          "Perfeito! O MOINHO 🏭 é a fábrica que transforma o grão duro em farinha macia.",
        feedbackErro:
          "Pensa: fábrica que MÓI grão pra virar pó é o MOINHO 🏭.",
      },
      {
        id: "q3",
        pergunta:
          "Quem MISTURA a farinha com água e sal e ASSA o pãozinho quente?",
        fotoUrl: padaria,
        cards: [
          { id: "agricultor", emoji: "🌾", titulo: "Agricultor", cor: "from-yellow-500 to-amber-700" },
          { id: "moleiro", emoji: "🏭", titulo: "Moleiro", cor: "from-amber-500 to-orange-700" },
          { id: "padeiro", emoji: "🥖", titulo: "Padeiro", cor: "from-rose-500 to-red-700" },
        ],
        correta: "padeiro",
        feedbackAcerto:
          "Exato! O PADEIRO 🥖 é quem faz a massa e assa o pão fresquinho de cada manhã.",
        feedbackErro:
          "Repensa: quem trabalha no forno da PADARIA é o PADEIRO 🥖.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já sabe a rota inteira. Bora ver como campo e cidade fazem essa troca.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Duas camadas pra você comparar. Uma acende o que o CAMPO manda pra padaria. A outra acende o que a CIDADE oferece pra transformar trigo em pão.",
    instrucao: "Toque nos interruptores pra acender cada camada",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "campo-manda",
        rotulo: "Campo → Cidade",
        emoji: "🌾",
        cor: "from-yellow-500 to-amber-700",
        rect: { x: 6, y: 50, w: 40, h: 45 },
        descricao:
          "Do campo vem: trigo colhido, milho, aveia, centeio. É a MATÉRIA-PRIMA dourada que a cidade precisa pra fazer farinha, pão, bolo, biscoito.",
      },
      {
        id: "cidade-oferece",
        rotulo: "Cidade → Campo",
        emoji: "🏭",
        cor: "from-orange-500 to-red-700",
        rect: { x: 52, y: 12, w: 42, h: 55 },
        descricao:
          "A cidade oferece: moinho pra moer, padarias pra vender, caminhões pra transportar, energia elétrica pras máquinas, lojas de sementes e adubo. Sem isso, o trigo não chega ao pão.",
      },
    ],
    falaFinal:
      "Viu a troca? O campo manda o grão, a cidade transforma e vende. Um sem o outro, ninguém come pão de manhã.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Bora montar a ROTA do pão na ordem certa. Toca em cada parada na ordem que o trigo passa — da semente ao pãozinho.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Qual é a ROTA do trigo, da semente até o pãozinho?",
    paradas: [
      {
        id: "s1-plantio",
        emoji: "🌱",
        rotulo: "Plantio no campo",
        descricao:
          "O agricultor prepara a terra e planta as sementes de trigo. Espera meses até crescer.",
      },
      {
        id: "s2-colheita",
        emoji: "🌾",
        rotulo: "Colheita dourada",
        descricao:
          "Quando o trigo fica dourado, a colheitadeira corta tudo em um dia só.",
      },
      {
        id: "s3-silo",
        emoji: "🏗️",
        rotulo: "Silo e caminhão",
        descricao:
          "O trigo vai pro silo, fica guardado sequinho, depois um caminhão leva pro moinho.",
      },
      {
        id: "s4-moinho",
        emoji: "🏭",
        rotulo: "Moinho na cidade",
        descricao:
          "Máquinas enormes moem os grãos até virarem farinha branquinha. Sacos e sacos!",
      },
      {
        id: "s5-padaria",
        emoji: "🥖",
        rotulo: "Padaria do bairro",
        descricao:
          "O padeiro faz a massa com farinha, água, sal e fermento. Assa. Pão quentinho pronto!",
      },
    ],
    ordemCerta: ["s1-plantio", "s2-colheita", "s3-silo", "s4-moinho", "s5-padaria"],
    feedbackAcerto:
      "Rota do pão completa! Você seguiu direitinho, da semente ao pãozinho da padaria.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: PLANTIO → COLHEITA → SILO → MOINHO → PADARIA.",
    falaFinal:
      "Cada parada precisa da anterior. Se ninguém plantar, ninguém colhe. Se o moinho parar, o padeiro fica sem farinha.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, explorador! Eu fico caladinha. Você lê o Diário sozinho e toca nas palavras chave pra provar que entendeu.",
    tituloLivro: "📔 Diário de Bordo do Balão",
    subtitulo: "Página 12 — Do Trigo ao Pão",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Na LAVOURA do campo, o AGRICULTOR planta sementes de TRIGO. Meses depois, o trigo fica dourado e uma máquina colheitadeira COLHE tudo de uma vez.",
        chaves: ["lavoura", "agricultor", "trigo"],
      },
      {
        id: "p2",
        texto:
          "O grão vai pro SILO, um tanque enorme de metal. Um caminhão grande vem buscar e leva pro MOINHO na cidade, onde máquinas MOEM o trigo até virar FARINHA.",
        chaves: ["silo", "moinho", "farinha"],
      },
      {
        id: "p3",
        texto:
          "A farinha chega na PADARIA do bairro. O PADEIRO mistura com água, sal e fermento, faz a massa e ASSA no forno bem quente.",
        chaves: ["padaria", "padeiro", "assa"],
      },
      {
        id: "p4",
        texto:
          "De manhã cedo, o pão QUENTE sai do forno. Sem o CAMPO, sem a INDÚSTRIA e sem a padaria, ninguém tomaria café da manhã com pão fresquinho.",
        chaves: ["campo", "indústria", "quente"],
      },
    ],
    falaFinal:
      "Você leu sozinho e já sabe explicar por que o pão da sua mesa é uma parceria entre agricultor, moinho e padeiro.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do PERSONAGEM CERTO! Cada rodada mostra um trabalhador da rota do pão. Toca em quem faz aquele trabalho antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque no personagem certo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "agricultor", emoji: "🌾", rotulo: "Agricultor" },
      { id: "caminhoneiro", emoji: "🚛", rotulo: "Caminhoneiro" },
      { id: "moleiro", emoji: "🏭", rotulo: "Moleiro" },
      { id: "padeiro", emoji: "🥖", rotulo: "Padeiro" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Chapéu de palha", emoji: "🌾", cor: "from-yellow-500 to-amber-700" },
        municipioB: { nome: "Lavoura dourada", emoji: "🌱", cor: "from-lime-400 to-yellow-600" },
        contexto:
          "Prepara a terra, planta as sementes e cuida da lavoura de trigo por meses. Quem é?",
        pecaCertaId: "agricultor",
        feedbackAcerto: "Boa! É o AGRICULTOR 🌾 — o começo de toda a rota.",
        feedbackErro:
          "Repara: quem planta e cuida da terra é o AGRICULTOR 🌾, no campo.",
      },
      {
        id: "r2",
        municipioA: { nome: "Caminhão graneleiro", emoji: "🚛", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Estrada do silo", emoji: "🛣️", cor: "from-sky-400 to-indigo-600" },
        contexto:
          "Enche o baú do caminhão com trigo no silo e leva pra cidade, pro moinho. Quem é?",
        pecaCertaId: "caminhoneiro",
        feedbackAcerto:
          "Perfeito! É o CAMINHONEIRO 🚛 — a ponte entre silo e moinho.",
        feedbackErro:
          "Pensa: quem dirige o caminhão graneleiro é o CAMINHONEIRO 🚛.",
      },
      {
        id: "r3",
        municipioA: { nome: "Uniforme branco e touca", emoji: "🥽", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Máquinas do moinho", emoji: "⚙️", cor: "from-orange-400 to-amber-600" },
        contexto:
          "Trabalha na fábrica que MOÍ o trigo, controla as máquinas e ensaca farinha. Quem é?",
        pecaCertaId: "moleiro",
        feedbackAcerto:
          "Isso! É o MOLEIRO 🏭 — quem opera as máquinas do moinho.",
        feedbackErro:
          "Ops: quem trabalha dentro do moinho, ensacando farinha, é o MOLEIRO 🏭.",
      },
      {
        id: "r4",
        municipioA: { nome: "Avental branco", emoji: "🥖", cor: "from-rose-500 to-red-700" },
        municipioB: { nome: "Forno quente", emoji: "🔥", cor: "from-red-400 to-rose-600" },
        contexto:
          "Acorda às 4h da manhã, mistura a massa e assa o pão pra vender às 6h. Quem é?",
        pecaCertaId: "padeiro",
        feedbackAcerto:
          "Perfeito! É o PADEIRO 🥖 — quem enche o bairro de cheiro de pão fresco.",
        feedbackErro:
          "Repensa: quem faz o pão na padaria do bairro é o PADEIRO 🥖.",
      },
      {
        id: "r5",
        municipioA: { nome: "Colheitadeira gigante", emoji: "🚜", cor: "from-yellow-500 to-amber-700" },
        municipioB: { nome: "Trigo dourado", emoji: "🌾", cor: "from-lime-400 to-yellow-600" },
        contexto:
          "Sobe na colheitadeira quando o trigo está pronto e colhe hectares por dia. Quem é?",
        pecaCertaId: "agricultor",
        feedbackAcerto:
          "Combo! O AGRICULTOR 🌾 também dirige a colheitadeira na hora da colheita.",
        feedbackErro:
          "Pensa: quem opera a colheitadeira no campo é o AGRICULTOR 🌾.",
      },
      {
        id: "r6",
        municipioA: { nome: "Balança de ensacar", emoji: "⚖️", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Sacos de farinha", emoji: "🧂", cor: "from-orange-400 to-amber-600" },
        contexto:
          "Confere o peso de cada saco de farinha antes de sair do moinho. Quem é?",
        pecaCertaId: "moleiro",
        feedbackAcerto:
          "Perfeito! O MOLEIRO 🏭 garante que cada saco tenha o peso certo antes de virar pão.",
        feedbackErro:
          "Atenção: quem controla a produção dentro do moinho é o MOLEIRO 🏭.",
      },
    ],
    falaFinal:
      "Minijogo relâmpago concluído! Você reconhece cada personagem da rota do pão num piscar de olhos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Bora fechar com uma pizza do PÃO. Toca em cada fatia pra revisar o que o campo dá, o que a fábrica faz e o que a padaria entrega.",
    instrucao: "Toque em cada fatia pra ouvir a Aurora explicar",
    fatias: [
      {
        id: "fatia-campo",
        rotulo: "Campo (planta e colhe)",
        emoji: "🌾",
        percentual: 50,
        cor: "from-yellow-500 to-amber-700",
        descricao:
          "O CAMPO planta e colhe o trigo. É de lá que sai a MATÉRIA-PRIMA. Sem lavoura, não tem grão. Sem grão, não tem farinha nem pão na sua mesa.",
        exemplos: ["Sementes de trigo", "Colheita dourada", "Silos de armazenagem"],
      },
      {
        id: "fatia-cidade",
        rotulo: "Cidade (transforma e vende)",
        emoji: "🏭",
        percentual: 50,
        cor: "from-amber-500 to-red-700",
        descricao:
          "A CIDADE transforma e vende. O MOINHO moí o trigo em farinha, a PADARIA vira pão quentinho. Sem essas duas etapas, o grão nunca chegaria ao seu café da manhã.",
        exemplos: ["Moinho industrial", "Farinha ensacada", "Padaria do bairro"],
      },
    ],
    falaFinal:
      "Três fatias, uma rota só. Campo, indústria e padaria — cada um faz uma parte, e o pão só existe quando os três trabalham juntos.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão pra pegar o selo! 3 perguntas rápidas — se acertar, você vira Explorador da Rota do Pão.",
    instrucao: "Toque na resposta certa",
    perguntas: [
      {
        id: "av1",
        pergunta:
          "Por que o trigo do campo NÃO vai direto pra padaria virar pão?",
        opcoes: [
          { id: "a", texto: "Porque a padaria é longe demais do campo." },
          {
            id: "b",
            texto: "Porque o grão é duro. Precisa passar no MOINHO pra ser moído e virar farinha antes.",
            correta: true,
          },
        ],
        feedbackAcerto:
          "Exato! Grão de trigo cru é durinho — só depois do moinho vira farinha e o padeiro pode fazer a massa.",
        feedbackErro:
          "Pensa: você já mordeu um grão de trigo? Duro! Precisa MOER primeiro. Por isso o moinho existe.",
      },
      {
        id: "av2",
        pergunta:
          "Se todos os agricultores pararem de plantar trigo, o que acontece com a padaria do bairro?",
        opcoes: [
          {
            id: "a",
            texto: "A padaria fica sem farinha, sem pão, sem bolo. Sem CAMPO, a cidade não come.",
            correta: true,
          },
          { id: "b", texto: "Nada muda, porque a padaria fabrica a própria farinha." },
        ],
        feedbackAcerto:
          "Isso! Padaria não fabrica farinha — só assa. Sem campo, sem trigo, sem pão. Tudo começa na lavoura.",
        feedbackErro:
          "Repensa: padaria só faz o pão. A farinha vem do moinho, que vem do trigo, que vem do CAMPO.",
      },
      {
        id: "av3",
        pergunta:
          "Qual frase explica MELHOR a rota do pão?",
        opcoes: [
          { id: "a", texto: "O pão nasce pronto na padaria, sem precisar de campo nem de fábrica." },
          {
            id: "b",
            texto: "O pão é uma parceria: CAMPO produz o trigo, INDÚSTRIA vira farinha, PADARIA assa e vende.",
            correta: true,
          },
        ],
        feedbackAcerto:
          "Perfeito! Toda mordida de pão passou por três lugares e muitas mãos. É parceria pura.",
        feedbackErro:
          "Lembra da rota: LAVOURA → SILO → MOINHO → PADARIA. Três lugares diferentes, uma parceria só.",
      },
    ],
    selo: {
      nome: "Explorador da Rota do Pão",
      subtitulo: "Insígnia da Unidade 3 — Aula do Trigo ao Pão",
      emoji: "🥖",
      cor: "from-amber-400 to-rose-500",
    },
    falaFinal:
      "Selo conquistado! Agora, toda vez que morder um pão de manhã, vai lembrar do agricultor, do moleiro e do padeiro que trabalharam pra isso chegar na sua mesa.",
  },

  recompensa: {
    xp: 250,
    moedas: 150,
    medalha: "Explorador da Rota do Pão",
  },
};
