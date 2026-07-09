import type { AulaGeoV1 } from "../../types";
import mapaMunicipio from "@/assets/geografia-3ano/mapa-municipio.jpg";
import heroParceria from "@/assets/geografia-3ano/hero-parceria-total.jpg";
import mercadoMunicipal from "@/assets/geografia-3ano/mercado-municipal-diversidade.jpg";
import caminhoesRodovia from "@/assets/geografia-3ano/caminhoes-rodovia-municipio.jpg";
import familiaSupermercado from "@/assets/geografia-3ano/familia-supermercado-compras.jpg";
import feiranteCliente from "@/assets/geografia-3ano/feirante-cliente-conversando.jpg";

/**
 * Geografia · 3º Ano · Unidade 3 · Aula 04
 * "A Parceria que Alimenta o Município" — EF03GE03
 *
 * Aula de fechamento da Unidade 3. Brilha e Aurora amarram tudo:
 * leite, feira, pão — três rotas diferentes, um único ponto em
 * comum: campo e cidade dependem um do outro TODO DIA pra sua
 * família comer. Foco em interdependência total.
 */
export const aula04: AulaGeoV1 = {
  slug: "aula-04-parceria-que-alimenta",
  titulo: "A Parceria que Alimenta",
  iconeTrilha: "🤝",
  bncc: ["EF03GE03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA sobre o mapa. Hoje a gente fecha a Unidade 3: campo e cidade dando as mãos pra alimentar o município INTEIRO.",
    mapaUrl: mapaMunicipio,
    imagemDestaqueUrl: heroParceria,
    aurora:
      "Você já viu leite, feira e pão. Três rotas diferentes… mas TODAS provam a mesma coisa: sem essa parceria entre campo e cidade, ninguém come. Bora fechar a unidade em grande estilo!",
    falaFinal:
      "Se um lado parasse hoje, o município inteiro sentiria amanhã. Bora entender por quê.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite de encerramento: e se o CAMPO decidisse não mandar mais nada pra cidade por uma semana inteira?",
    pergunta: "O que aconteceria com o município?",
    opcoes: [
      {
        id: "nada",
        titulo: "Nada mudaria",
        subtitulo: "a cidade se vira sozinha",
        emoji: "🤷",
        cor: "from-slate-400 to-zinc-600",
      },
      {
        id: "faltaria",
        titulo: "Faltaria comida",
        subtitulo: "mercado, feira e padaria vazios",
        emoji: "🥺",
        cor: "from-rose-500 to-pink-700",
      },
    ],
    respostaCerta: "faltaria",
    feedbackAcerto:
      "Isso! Sem o campo mandando alimento, a cidade fica com prateleiras vazias em poucos dias. É dependência TOTAL.",
    feedbackErro:
      "Pensa: cidade tem prédio, asfalto e loja — mas não tem horta. Se o campo parar, o mercado esvazia rapidinho.",
    falaFinal:
      "Guarda esse susto. Bora ver por que essa parceria é vital.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Abre 4 cadernos. Cada um mostra UM lugar onde a parceria campo↔cidade acontece TODO DIA no seu município.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "rodovia",
        capa: "1. Rodovia",
        emoji: "🛣️",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "É a ESTRADA que liga o campo à cidade. Todo dia, milhares de caminhões passam levando leite, verdura, trigo, carne. Sem rodovia, o alimento não sai da fazenda.",
        exemplo:
          "Numa rodovia grande passam mais de 5 mil caminhões de comida por dia.",
        fotoUrl: caminhoesRodovia,
      },
      {
        id: "mercado-municipal",
        capa: "2. Mercado Municipal",
        emoji: "🏛️",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "É o prédio grande no centro da cidade onde chega comida de MUITOS lugares diferentes. Fruta do sítio, queijo da fazenda, peixe do rio — tudo num lugar só.",
        exemplo:
          "O Mercado Municipal de uma cidade média recebe 200 tipos de produto por dia.",
        fotoUrl: mercadoMunicipal,
      },
      {
        id: "feira",
        capa: "3. Feira do Bairro",
        emoji: "🍅",
        cor: "from-rose-500 to-pink-700",
        conteudo:
          "É onde você conhece o FEIRANTE pelo nome. Ele traz o que colheu no sítio direto pra sua rua. Mais barato e mais fresco que o supermercado.",
        exemplo:
          "Numa manhã de sábado, uma feira de bairro vende 3 toneladas de fruta.",
        fotoUrl: feiranteCliente,
      },
      {
        id: "supermercado",
        capa: "4. Supermercado",
        emoji: "🛒",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "É a loja gigante da cidade com prateleira de tudo. Recebe caminhões cheios do campo e da indústria. Sua família vai lá com o carrinho e leva a compra da semana.",
        exemplo:
          "Um supermercado grande recebe uns 30 caminhões por dia, do campo e das fábricas.",
        fotoUrl: familiaSupermercado,
      },
    ],
    falaFinal:
      "4 pontos de encontro: RODOVIA, MERCADO, FEIRA e SUPERMERCADO. Todos existem por causa da parceria campo↔cidade.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Marquei 4 pontos no mapa do município. Toca em cada balão pra Aurora te contar como a parceria acontece ali.",
    instrucao: "Toque em cada ponto pra abrir a página do diário",
    mapaUrl: mapaMunicipio,
    pontos: [
      {
        id: "p-rodovia",
        x: 42,
        y: 55,
        emoji: "🛣️",
        cor: "from-sky-500 to-blue-700",
        titulo: "Rodovia Campo-Cidade",
        texto:
          "É a artéria do município. Sem essa estrada, o leite azeda no sítio, o tomate estraga na horta e o pão nunca chega. Toda parceria começa no asfalto.",
        fotoUrl: caminhoesRodovia,
      },
      {
        id: "p-mercado",
        x: 68,
        y: 34,
        emoji: "🏛️",
        cor: "from-amber-500 to-orange-700",
        titulo: "Mercado Municipal",
        texto:
          "O coração da cidade. Um só prédio reúne fazendeiro, feirante, açougueiro, peixeiro. Cheiro de queijo, café, laranja madura. Ponto de encontro do município inteiro.",
        fotoUrl: mercadoMunicipal,
      },
      {
        id: "p-feira",
        x: 82,
        y: 20,
        emoji: "🍅",
        cor: "from-rose-500 to-pink-700",
        titulo: "Feira do Bairro",
        texto:
          "A parceria mais próxima da sua casa. O feirante te conhece, guarda a laranja mais bonita pra você, conta que o mamão veio do sítio dele. Campo e cidade viram amizade.",
        fotoUrl: feiranteCliente,
      },
      {
        id: "p-super",
        x: 55,
        y: 20,
        emoji: "🛒",
        cor: "from-emerald-500 to-green-700",
        titulo: "Supermercado",
        texto:
          "Prateleiras cheias, luz forte, carrinho de compras. Cada produto ali passou por MUITOS trabalhadores do campo, da fábrica e do transporte antes de chegar.",
        fotoUrl: familiaSupermercado,
      },
    ],
    falaFinal:
      "Percebeu? Rodovia, mercado, feira e supermercado — tudo é ponto de encontro entre campo e cidade. Todo dia, sem parar.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do explorador ligado! 3 perguntas pra revisar tudo que a Unidade 3 te mostrou.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual estrutura LIGA o campo à cidade e é usada por caminhões todo dia?",
        fotoUrl: caminhoesRodovia,
        cards: [
          { id: "rodovia", emoji: "🛣️", titulo: "Rodovia", cor: "from-sky-500 to-blue-700" },
          { id: "praca", emoji: "🌳", titulo: "Praça", cor: "from-emerald-500 to-green-700" },
          { id: "estadio", emoji: "🏟️", titulo: "Estádio", cor: "from-rose-500 to-pink-700" },
        ],
        correta: "rodovia",
        feedbackAcerto:
          "Isso! A RODOVIA 🛣️ é a artéria que leva alimento do campo pra cidade.",
        feedbackErro:
          "Pensa: onde os caminhões passam carregados de comida? Na RODOVIA 🛣️.",
      },
      {
        id: "q2",
        pergunta:
          "Se a rodovia FECHAR por causa de um deslizamento, o que acontece com o mercado da cidade?",
        fotoUrl: mercadoMunicipal,
        cards: [
          { id: "cheio", emoji: "📦", titulo: "Fica igual", cor: "from-emerald-500 to-green-700" },
          { id: "vazio", emoji: "🥺", titulo: "Vai esvaziando", cor: "from-rose-500 to-pink-700" },
          { id: "cresce", emoji: "🎉", titulo: "Vende mais", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "vazio",
        feedbackAcerto:
          "Exato! Sem caminhão chegando, o mercado esvazia 🥺 em poucos dias.",
        feedbackErro:
          "Repensa: sem caminhão trazendo alimento, não tem como o mercado ficar cheio.",
      },
      {
        id: "q3",
        pergunta:
          "Onde sua família encontra o FEIRANTE pelo nome, geralmente no sábado de manhã?",
        fotoUrl: feiranteCliente,
        cards: [
          { id: "feira", emoji: "🍅", titulo: "Feira do bairro", cor: "from-rose-500 to-pink-700" },
          { id: "shopping", emoji: "🛍️", titulo: "Shopping", cor: "from-slate-500 to-zinc-700" },
          { id: "banco", emoji: "🏦", titulo: "Banco", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "feira",
        feedbackAcerto:
          "Perfeito! Na FEIRA 🍅 do bairro, o feirante vira quase família.",
        feedbackErro:
          "Pensa: onde tem barraca listrada na rua no sábado? Na FEIRA 🍅 do bairro.",
      },
    ],
    falaFinal:
      "Radar afiado! Você já enxerga os pontos de encontro do município. Bora ver a troca completa.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Duas camadas pra fechar a unidade. Uma acende TUDO que o campo manda. A outra, TUDO que a cidade oferece de volta. Dá pra ver a parceria inteira.",
    instrucao: "Toque nos interruptores pra acender cada camada",
    mapaUrl: mapaMunicipio,
    camadas: [
      {
        id: "campo-total",
        rotulo: "Tudo que o CAMPO manda",
        emoji: "🌾",
        cor: "from-emerald-500 to-green-700",
        rect: { x: 5, y: 45, w: 45 , h: 50 },
        descricao:
          "Leite, queijo, ovos, alface, tomate, cenoura, laranja, banana, trigo, milho, carne, feijão. TUDO que vira comida de verdade sai do campo.",
      },
      {
        id: "cidade-total",
        rotulo: "Tudo que a CIDADE oferece",
        emoji: "🏙️",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 52, y: 10, w: 44, h: 58 },
        descricao:
          "Rodovia pra transportar, fábrica pra transformar, mercado pra vender, banco pra pagar, escola pros filhos, hospital pra saúde, energia elétrica, internet. Sem isso, o campo não funciona.",
      },
    ],
    falaFinal:
      "Duas camadas, uma parceria só. Campo alimenta a cidade. Cidade sustenta o campo. Ninguém sobra, ninguém sozinho.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Bora montar a rota do PRATO DO JANTAR. Toca em cada etapa na ordem: da fazenda até a comida quentinha na sua mesa.",
    instrucao: "Toque nas etapas na ORDEM certa",
    pergunta: "Como o jantar da sua família chega no prato?",
    paradas: [
      {
        id: "s1-fazenda",
        emoji: "🚜",
        rotulo: "Fazenda no campo",
        descricao:
          "O produtor colhe, ordenha, cria os animais. É o começo de tudo — sem ele, ninguém come.",
      },
      {
        id: "s2-caminhao",
        emoji: "🚛",
        rotulo: "Caminhão na rodovia",
        descricao:
          "O caminhão pega tudo na fazenda e leva pela rodovia até a cidade. Sem estrada, comida não anda.",
      },
      {
        id: "s3-mercado",
        emoji: "🏛️",
        rotulo: "Mercado ou feira",
        descricao:
          "Na cidade, mercado, feira e supermercado recebem tudo, organizam nas prateleiras e barracas.",
      },
      {
        id: "s4-familia",
        emoji: "🛒",
        rotulo: "Sua família comprando",
        descricao:
          "Sua família chega com sacola ou carrinho, escolhe, paga e leva pra casa.",
      },
      {
        id: "s5-mesa",
        emoji: "🍽️",
        rotulo: "Jantar na mesa",
        descricao:
          "Alguém cozinha, todo mundo senta junto e come. A parceria campo↔cidade termina AQUI, no seu prato.",
      },
    ],
    ordemCerta: ["s1-fazenda", "s2-caminhao", "s3-mercado", "s4-familia", "s5-mesa"],
    feedbackAcerto:
      "Rota do jantar completa! Do campo até seu prato, uma parceria enorme funcionando em silêncio.",
    feedbackErro:
      "Essa não é a próxima etapa. Pensa: FAZENDA → CAMINHÃO → MERCADO → COMPRA → MESA.",
    falaFinal:
      "Todo prato de jantar é uma prova de que o município funciona. Muita gente trabalhou pra chegar até você.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez, explorador! Eu fico caladinha. Você lê o Diário sozinho e toca nas palavras chave pra provar que fechou a unidade.",
    tituloLivro: "📔 Diário de Bordo do Balão",
    subtitulo: "Página 13 — A Parceria que Alimenta",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O CAMPO planta, colhe e cria. Sem essa mão que cuida da terra, a CIDADE não teria comida nas suas prateleiras. Toda refeição começa no campo.",
        chaves: ["campo", "colhe", "cidade"],
      },
      {
        id: "p2",
        texto:
          "As RODOVIAS ligam o campo à cidade. Caminhões passam dia e noite carregando LEITE, verdura, pão. Sem essa estrada, o alimento nunca chegaria a tempo.",
        chaves: ["rodovias", "caminhões", "leite"],
      },
      {
        id: "p3",
        texto:
          "Na cidade, MERCADO, FEIRA e SUPERMERCADO recebem tudo. Cada um do seu jeito: o mercado é o coração, a feira é o bairro, o supermercado é a compra grande.",
        chaves: ["mercado", "feira", "supermercado"],
      },
      {
        id: "p4",
        texto:
          "Sem CAMPO não tem comida. Sem CIDADE não tem onde vender. Essa PARCERIA acontece TODO dia — silenciosa, teimosa, essencial pro município existir.",
        chaves: ["campo", "cidade", "parceria"],
      },
    ],
    falaFinal:
      "Você leu sozinho e já sabe explicar por que o município é uma grande rede de parceria entre campo e cidade.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo final da Unidade 3! Cada rodada mostra uma PROFISSÃO da parceria campo↔cidade. Toca em quem faz aquele trabalho antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque no personagem certo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "produtor", emoji: "🌾", rotulo: "Produtor" },
      { id: "caminhoneiro", emoji: "🚛", rotulo: "Caminhoneiro" },
      { id: "feirante", emoji: "🍅", rotulo: "Feirante" },
      { id: "supermercadista", emoji: "🛒", rotulo: "Supermercadista" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Trator no sítio", emoji: "🚜", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Horta cuidada", emoji: "🥬", cor: "from-lime-400 to-emerald-600" },
        contexto:
          "Cuida da terra e da lavoura o dia inteiro. Colhe, ordenha, cria bicho. Quem é?",
        pecaCertaId: "produtor",
        feedbackAcerto: "Boa! É o PRODUTOR 🌾 — a raiz de toda a parceria.",
        feedbackErro:
          "Repara: quem trabalha na fazenda ou sítio é o PRODUTOR 🌾.",
      },
      {
        id: "r2",
        municipioA: { nome: "Cabine do caminhão", emoji: "🚛", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Rodovia longa", emoji: "🛣️", cor: "from-sky-400 to-indigo-600" },
        contexto:
          "Dirige o caminhão baú pela rodovia. Sai da fazenda de madrugada e chega na cidade cedinho. Quem é?",
        pecaCertaId: "caminhoneiro",
        feedbackAcerto:
          "Perfeito! É o CAMINHONEIRO 🚛 — a ponte de rodagem entre campo e cidade.",
        feedbackErro:
          "Pensa: quem passa a noite dirigindo pela rodovia é o CAMINHONEIRO 🚛.",
      },
      {
        id: "r3",
        municipioA: { nome: "Barraca colorida", emoji: "⛱️", cor: "from-rose-500 to-pink-700" },
        municipioB: { nome: "Balança e plaquinha", emoji: "⚖️", cor: "from-pink-400 to-rose-600" },
        contexto:
          "Monta a barraca na rua no sábado, empilha as frutas e conversa com cada cliente. Quem é?",
        pecaCertaId: "feirante",
        feedbackAcerto:
          "Isso! É o FEIRANTE 🍅 — o rosto conhecido da manhã de sábado.",
        feedbackErro:
          "Ops: quem monta barraca na rua e chama pelo nome é o FEIRANTE 🍅.",
      },
      {
        id: "r4",
        municipioA: { nome: "Caixa registradora", emoji: "💳", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Prateleiras cheias", emoji: "🛒", cor: "from-green-400 to-emerald-600" },
        contexto:
          "Recebe os caminhões, organiza nas prateleiras e atende as famílias que chegam com carrinho. Quem é?",
        pecaCertaId: "supermercadista",
        feedbackAcerto:
          "Perfeito! É o SUPERMERCADISTA 🛒 — quem cuida da loja grande da cidade.",
        feedbackErro:
          "Repensa: quem trabalha no SUPERMERCADO é o SUPERMERCADISTA 🛒.",
      },
      {
        id: "r5",
        municipioA: { nome: "Gado no pasto", emoji: "🐄", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Balde de leite", emoji: "🥛", cor: "from-lime-400 to-emerald-600" },
        contexto:
          "Acorda cedo, ordenha as vacas, cuida do curral. Quem é?",
        pecaCertaId: "produtor",
        feedbackAcerto:
          "Combo! O PRODUTOR 🌾 também é quem tira o leite todo amanhecer.",
        feedbackErro:
          "Pensa: quem cuida da vaca e ordenha é o PRODUTOR 🌾 rural.",
      },
      {
        id: "r6",
        municipioA: { nome: "Reposição de gôndola", emoji: "📦", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Corredor gelado", emoji: "❄️", cor: "from-green-400 to-emerald-600" },
        contexto:
          "Repõe as caixas de leite no corredor gelado e coloca preço nas prateleiras. Quem é?",
        pecaCertaId: "supermercadista",
        feedbackAcerto:
          "Perfeito! O SUPERMERCADISTA 🛒 organiza as prateleiras pra você achar tudo.",
        feedbackErro:
          "Atenção: quem organiza as prateleiras do supermercado é o SUPERMERCADISTA 🛒.",
      },
    ],
    falaFinal:
      "Minijogo relâmpago concluído! Você reconhece todos os personagens da parceria campo↔cidade num piscar.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Fechamento em pizza! Toca em cada fatia pra revisar o que aprendeu na Unidade 3 inteira — leite, feira e pão numa parceria só.",
    instrucao: "Toque em cada fatia pra ouvir a Aurora explicar",
    fatias: [
      {
        id: "fatia-campo",
        rotulo: "Campo (produz)",
        emoji: "🌾",
        percentual: 50,
        cor: "from-emerald-500 to-green-700",
        descricao:
          "O CAMPO é o começo de TUDO: leite da fazenda, verdura do sítio, trigo da lavoura. Sem essa mão que cuida da terra, a cidade não teria nada pra vender nem pra comer.",
        exemplos: ["Rota do Leite 🥛", "Feira do Bairro 🍅", "Rota do Pão 🥖"],
      },
      {
        id: "fatia-cidade",
        rotulo: "Cidade (transforma e vende)",
        emoji: "🏙️",
        percentual: 50,
        cor: "from-sky-500 to-indigo-700",
        descricao:
          "A CIDADE oferece rodovia, fábrica, mercado, feira, supermercado e padaria. Sem essa estrutura, o alimento do campo estragaria antes de chegar à sua mesa.",
        exemplos: ["Laticínio e moinho 🏭", "Mercado e feira 🏛️", "Supermercado do bairro 🛒"],
      },
    ],
    falaFinal:
      "Três rotas, uma verdade só: CAMPO e CIDADE dependem um do outro pra sua família comer. Isso é o município funcionando.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão da Unidade 3! 3 perguntas — se acertar, você vira Guardião da Parceria do Município.",
    instrucao: "Toque na resposta certa",
    perguntas: [
      {
        id: "av1",
        pergunta:
          "Qual frase resume MELHOR a Unidade 3 inteira?",
        opcoes: [
          { id: "a", texto: "Campo e cidade vivem separados e não precisam um do outro." },
          {
            id: "b",
            texto: "Campo e cidade são PARCEIROS: um planta, o outro vende, e juntos alimentam o município.",
            correta: true,
          },
        ],
        feedbackAcerto:
          "Exato! Toda a Unidade 3 provou isso: leite, feira e pão são histórias diferentes da MESMA parceria.",
        feedbackErro:
          "Repensa: leite, feira e pão — todos precisaram do campo E da cidade pra chegar até você.",
      },
      {
        id: "av2",
        pergunta:
          "Qual estrutura é ESSENCIAL pra ligar campo e cidade todos os dias?",
        opcoes: [
          {
            id: "a",
            texto: "A RODOVIA (estrada) — por onde os caminhões passam levando alimento sem parar.",
            correta: true,
          },
          { id: "b", texto: "O parquinho, porque tem espaço grande." },
        ],
        feedbackAcerto:
          "Isso! Sem rodovia, o alimento não sai da fazenda. É a artéria do município.",
        feedbackErro:
          "Pensa: pra caminhão andar carregado de comida, precisa de RODOVIA — não de parquinho.",
      },
      {
        id: "av3",
        pergunta:
          "Se o CAMPO decidisse não mandar mais nada pra cidade por uma semana, o que aconteceria?",
        opcoes: [
          { id: "a", texto: "Nada mudaria, a cidade tem loja de tudo mesmo." },
          {
            id: "b",
            texto: "Mercado, feira e padaria esvaziariam. As famílias ficariam sem comida fresca.",
            correta: true,
          },
        ],
        feedbackAcerto:
          "Perfeito! A cidade não fabrica alimento — só vende. Sem campo mandando, prateleira vazia rapidinho.",
        feedbackErro:
          "Lembra: cidade tem prédio, asfalto, loja. Mas o ALIMENTO nasce no campo. Sem ele, cidade passa fome.",
      },
    ],
    selo: {
      nome: "Guardião da Parceria",
      subtitulo: "Insígnia FINAL da Unidade 3 — Campo e Cidade Trabalham Juntos",
      emoji: "🤝",
      cor: "from-emerald-400 to-sky-500",
    },
    falaFinal:
      "Selo conquistado! Unidade 3 fechada com chave de ouro. Agora, cada refeição vai lembrar você da parceria enorme que existe entre o campo e a cidade.",
  },

  recompensa: {
    xp: 300,
    moedas: 180,
    medalha: "Guardião da Parceria do Município",
  },
};
