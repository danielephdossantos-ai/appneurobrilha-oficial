/**
 * Geografia 9º Ano — Banco acadêmico Fund. 2 Avançado (ápice do EF2).
 * Foco: Geopolítica do mundo contemporâneo (Nova Ordem, UE, Rússia, China,
 * Oriente Médio, sustentabilidade global e Brasil no cenário mundial).
 * Reutiliza os tipos de `geografia-6ano/dados-fund2` — mesma engine (PlayerGeoV2).
 */

import type { UnidadeFund2 } from "../geografia-6ano/dados-fund2";

export const UNIDADES_9ANO: UnidadeFund2[] = [
  // ============================================================
  // UNIDADE 1 — Da Bipolaridade à Multipolaridade
  // ============================================================
  {
    unidade: 1,
    slug: "unidade-1-bipolar-multipolar",
    titulo: "Da Bipolaridade à Multipolaridade: A Nova Ordem Mundial",
    habilidade: "EF09GE01 / EF09GE02",
    introducao_academica:
      "O cenário geopolítico global mudou drasticamente no final do século XX. O colapso do bloco socialista transformou o mundo de uma disputa bipolarizada (EUA vs. URSS) para um arranjo complexo e multipolar, onde o poder não é medido apenas por ogivas nucleares, mas por capacidade tecnológica, estabilidade financeira e mercados consumidores.",
    conteudo_pedagogico: {
      conceito_chave: "Bipolaridade × Multipolaridade × Unipolaridade Militar",
      texto_teorico:
        "A ordem mundial não é fixa: ela é reconfigurada quando muda quem controla a economia, a tecnologia e as principais alianças militares. Entender a transição de 1945→1991→hoje é entender por que a política internacional funciona do jeito que funciona agora.",
      etapas_teoricas: [
        {
          titulo: "1. O Mundo Bipolar (Guerra Fria)",
          texto:
            "Entre 1945 e 1991, o planeta viveu a Guerra Fria, uma disputa ideológica, militar e tecnológica entre duas superpotências: os EUA (capitalista) e a União Soviética (socialista). O equilíbrio mundial baseava-se na Destruição Mútua Assegurada (MAD) através de arsenais atômicos.",
          exemplo_real:
            "O Muro de Berlim, erguido na Alemanha em 1961, não era apenas concreto: era o símbolo físico mais marcante da divisão do planeta entre o capitalismo ocidental e o socialismo soviético.",
          exemplos_extras: [
            "A corrida espacial (Sputnik 1957, Apollo 11 em 1969) foi bem mais que ciência: era propaganda geopolítica pura. Chegar primeiro à Lua mostrava ao mundo qual sistema — capitalista ou socialista — era 'superior' em ciência, engenharia e organização social.",
            "Conflitos como a Guerra do Vietnã (1955-1975), a Guerra da Coreia (1950-1953) e a Crise dos Mísseis de Cuba (1962) foram 'guerras por procuração': EUA e URSS não se enfrentaram diretamente para evitar o apocalipse nuclear, mas apoiavam lados opostos em conflitos regionais em outros continentes.",
          ],
        },
        {
          titulo: "2. A Nova Ordem Multipolar",
          texto:
            "Com a queda do Muro de Berlim (1989) e a desintegração da URSS (1991), nasceu a Nova Ordem Mundial. O poder militar cedeu espaço ao poder econômico. Surgiram múltiplos polos de poder e decisão no globo, como a União Europeia, o Japão e, mais recentemente, o grupo dos BRICS.",
          exemplo_real:
            "Em vez de duas bandeiras dominando tudo, as reuniões do G20 ou do Fórum Econômico Mundial reúnem chefes de Estado de vários continentes para decidir as regras do comércio, do clima e das finanças internacionais.",
          exemplos_extras: [
            "Os BRICS (Brasil, Rússia, Índia, China e África do Sul; ampliado desde 2024) foram criados para dar VOZ a economias emergentes que estavam fora do clube tradicional do G7. Somados, hoje respondem por mais de 30% do PIB mundial e mais de 40% da população global.",
            "O Fundo Monetário Internacional (FMI) e o Banco Mundial, criados em 1944 (Bretton Woods) sob liderança dos EUA, hoje são cobrados por dar mais peso de voto a economias emergentes — outra evidência de que a antiga unipolaridade financeira já não é aceita passivamente.",
          ],
        },
        {
          titulo: "3. A Unipolaridade Militar",
          texto:
            "Embora a economia mundial seja multipolar (com vários blocos fortes), no aspecto estritamente militar e de influência cultural, os Estados Unidos mantiveram por décadas uma liderança isolada (unipolaridade), projetando bases militares em todos os oceanos.",
          exemplo_real:
            "A indústria de Hollywood, os sistemas de GPS globais e o uso do Dólar como moeda padrão para comprar petróleo no mundo inteiro (petrodólar) são exemplos da projeção de poder econômico e cultural dos Estados Unidos.",
          exemplos_extras: [
            "Os EUA possuem cerca de 750 bases militares fora do seu território, distribuídas em mais de 80 países. Nenhuma outra nação da história teve projeção militar global comparável — nem o Império Romano, nem o Britânico.",
            "O 'soft power' (poder brando) americano — Netflix, Instagram, Google, McDonald's, universidades como Harvard e MIT — molda gostos, línguas e sonhos de bilhões de pessoas sem disparar um tiro. É poder cultural convertido em influência política.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Balança de poder global",
        descricao:
          "Compare, em três cenários (1945, 1991, hoje), como o poder militar, econômico e cultural se distribuiu entre as principais potências. Observe como a bipolaridade rígida deu lugar a uma teia complexa de alianças.",
        legenda:
          "Repare: hoje EUA lideram militarmente, mas dividem o palco econômico com China, UE e blocos emergentes. É por isso que o cenário é chamado de 'multipolar assimétrico'.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "♟️ ANALOGIA: Pense no cenário internacional como um tabuleiro de xadrez dinâmico. Na Guerra Fria, tínhamos apenas dois jogadores movimentando as peças. Na Nova Ordem Mundial, o jogo virou uma mesa redonda onde vários jogadores ricos tentam combinar jogadas, mas dois deles (EUA e China) têm as peças mais pesadas do tabuleiro.",
      exemplo_visual:
        "Linha do tempo comparativa: 1945-1991 (dois blocos rígidos, muro dividindo Berlim) → 1991-2001 (unipolaridade americana pós-URSS) → 2001-hoje (ascensão da China + BRICS + reafirmação russa = multipolaridade).",
      imagem_analise: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "O que caracterizou a Guerra Fria (1945–1991)?",
        opcoes: [
          {
            texto: "Uma disputa ideológica, militar e tecnológica entre EUA (capitalista) e URSS (socialista), sem confronto direto, baseada no medo mútuo do apocalipse nuclear.",
            correta: true,
            explicacao:
              "Exato. Foi 'fria' justamente porque as duas superpotências nunca se enfrentaram diretamente — o custo (aniquilação nuclear) era alto demais. Elas se enfrentavam por procuração em conflitos regionais.",
          },
          {
            texto: "Uma guerra convencional aberta entre EUA e URSS, com invasões diretas de territórios das duas potências.",
            correta: false,
            explicacao:
              "Não. Se tivesse havido confronto direto, teria sido uma 3ª Guerra Mundial — provavelmente nuclear. O termo 'fria' existe justamente porque o confronto direto NUNCA aconteceu.",
          },
          {
            texto: "Uma disputa exclusivamente econômica sem componente militar ou ideológico.",
            correta: false,
            explicacao:
              "Falso. A dimensão militar (corrida armamentista, OTAN × Pacto de Varsóvia) e ideológica (capitalismo × socialismo) foi central. A economia era apenas UMA das frentes.",
          },
        ],
      },
      {
        pergunta: "Por que dizemos que a Nova Ordem Mundial é MULTIPOLAR economicamente, mas UNIPOLAR militarmente?",
        opcoes: [
          {
            texto: "Porque, economicamente, existem vários polos fortes (EUA, UE, China, Japão, BRICS), mas militarmente os EUA ainda mantêm uma superioridade global isolada, com bases em mais de 80 países.",
            correta: true,
            explicacao:
              "Perfeito. Essa assimetria é uma das chaves para entender a política global do séc. XXI: negociar economia com muitos, mas ninguém rivaliza militarmente com os EUA em escala global.",
          },
          {
            texto: "Porque só existe UM polo econômico (os EUA), mas VÁRIOS polos militares no mundo.",
            correta: false,
            explicacao:
              "Inverso. Economicamente já não há um só líder — a China deve ultrapassar os EUA em PIB nominal nesta década. Militarmente, sim, os EUA seguem isolados no topo.",
          },
          {
            texto: "Porque o mundo voltou a ser bipolar após 2001, com EUA e Rússia disputando novamente a hegemonia.",
            correta: false,
            explicacao:
              "Não. A Rússia atual tem PIB menor que o do Brasil e não sustenta um bloco global à altura da antiga URSS. O rival estrutural dos EUA hoje é a China, não a Rússia.",
          },
        ],
      },
      {
        pergunta: "Qual grupo NÃO representa um polo econômico da multipolaridade contemporânea?",
        opcoes: [
          {
            texto: "Pacto de Varsóvia — aliança militar do bloco socialista.",
            correta: true,
            explicacao:
              "Correto. O Pacto de Varsóvia foi DISSOLVIDO em 1991 junto com a URSS. Não existe mais. Os polos atuais são G7, UE, BRICS ampliado, ASEAN, etc.",
          },
          {
            texto: "União Europeia (UE) — 27 países, mercado único e moeda comum (Euro).",
            correta: false,
            explicacao:
              "É sim um polo relevante — juntas, as economias da UE somam um PIB comparável ao dos EUA e da China.",
          },
          {
            texto: "BRICS ampliado — economias emergentes com peso demográfico e produtivo crescente.",
            correta: false,
            explicacao:
              "É um dos principais polos emergentes: respondem por mais de 40% da população mundial.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada evento/instituição no período histórico da ordem mundial correspondente.",
      categorias: [
        { id: "bipolar", titulo: "Mundo Bipolar (1945–1991)", cor: "cyan" },
        { id: "multipolar", titulo: "Nova Ordem Multipolar (1991–hoje)", cor: "amber" },
      ],
      cartoes: [
        { texto: "Muro de Berlim dividindo a Alemanha em capitalista e socialista.", categoriaId: "bipolar" },
        { texto: "Criação dos BRICS reunindo economias emergentes.", categoriaId: "multipolar" },
        { texto: "Crise dos Mísseis de Cuba entre EUA e URSS (1962).", categoriaId: "bipolar" },
        { texto: "Corrida por microchips e 5G entre EUA e China.", categoriaId: "multipolar" },
        { texto: "OTAN × Pacto de Varsóvia — alianças militares rivais.", categoriaId: "bipolar" },
        { texto: "Reuniões do G20 decidindo regras globais de comércio e clima.", categoriaId: "multipolar" },
      ],
    },

    desafio_critico: {
      pergunta:
        "A transição da Velha Ordem (Bipolar) para a Nova Ordem Mundial (Multipolar) alterou profundamente os critérios utilizados pelos analistas políticos para medir a importância e a influência de uma nação no cenário global. Qual critério passou a ser prioritário a partir da década de 1990?",
      opcoes: [
        {
          texto:
            "O desenvolvimento tecnológico, o PIB, o controle de mercados consumidores e a participação em blocos econômicos de integração regional.",
          correta: true,
        },
        {
          texto:
            "O tamanho absoluto do exército regular de infantaria e a quantidade total de ogivas nucleares estocadas em silos subterrâneos.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Sensacional! Na Nova Ordem Mundial, o conceito de poder foi reconfigurado. Ter indústrias de ponta, alta capacidade de inovação tecnológica e estabilidade econômica passou a ditar quem lidera as regras do jogo geopolítico internacional.",
    },
    recompensas: { xp: 700, moedas: 500, titulo: "Estrategista de Cenários Geopolíticos" },
  },

  // ============================================================
  // UNIDADE 2 — Integração Europeia
  // ============================================================
  {
    unidade: 2,
    slug: "unidade-2-uniao-europeia",
    titulo: "A Integração Europeia e seus Desafios Recentes",
    habilidade: "EF09GE06 / EF09GE07",
    introducao_academica:
      "A União Europeia é o mais ousado projeto de integração supranacional já construído. Nasceu para impedir que a Europa vivesse uma 3ª Guerra Mundial após dois conflitos devastadores no séc. XX. Hoje, é um bloco econômico com moeda única, cidadania comum e livre circulação — mas enfrenta crises que testam seus limites.",
    conteudo_pedagogico: {
      conceito_chave: "Etapas da integração, Zona do Euro, Brexit e crise migratória",
      texto_teorico:
        "A UE mostra que países historicamente inimigos (França × Alemanha) podem ceder soberania parcial em troca de paz, prosperidade e voz global. Mas cada crise (dívida grega, refugiados, Brexit, guerra na Ucrânia) revela também os limites dessa integração.",
      etapas_teoricas: [
        {
          titulo: "1. Origens: Da CECA à União Europeia",
          texto:
            "Após 1945, França e Alemanha decidiram integrar suas indústrias de carvão e aço (CECA, 1951) para tornar 'materialmente impossível' uma nova guerra. Esse embrião cresceu: CEE (1957) → União Europeia (Tratado de Maastricht, 1992) → Zona do Euro (1999/2002).",
          exemplo_real:
            "Cruzar de trem de Paris (França) para Berlim (Alemanha) hoje é como ir de São Paulo a Curitiba: sem passaporte, sem controle de fronteira, com a mesma moeda no bolso. Isso, em duas cidades que estavam bombardeando uma à outra 80 anos atrás, é uma revolução histórica.",
          exemplos_extras: [
            "O Espaço Schengen (1985) aboliu controles de passaporte entre 27 países europeus. Um cidadão pode morar em Portugal, trabalhar na Alemanha e passar o fim de semana na Itália sem apresentar documento em nenhuma fronteira.",
            "A cidadania europeia (Tratado de Maastricht) é um conceito inédito: você é cidadão do seu país E da UE simultaneamente. Pode votar em eleições locais em qualquer país-membro em que resida.",
          ],
        },
        {
          titulo: "2. A Zona do Euro e suas Fragilidades",
          texto:
            "20 dos 27 países da UE adotaram o Euro. Isso facilita o comércio, mas retira dos países a autonomia sobre a própria moeda: eles não podem desvalorizar o Euro para reequilibrar sua economia em crise. Isso explodiu na crise da dívida grega (2009-2015).",
          exemplo_real:
            "Se a Grécia ainda tivesse o Dracma, poderia ter desvalorizado a moeda para tornar seu turismo mais barato e sair da crise. Como estava presa ao Euro, teve que aplicar cortes brutais em salários e aposentadorias — a chamada 'austeridade' — sob supervisão do BCE, FMI e Comissão Europeia (a 'troika').",
          exemplos_extras: [
            "A crise mostrou uma assimetria: Alemanha e países do Norte (fortes, exportadores) se beneficiam do Euro; países do Sul (Grécia, Portugal, Itália, Espanha) sofrem porque não podem ajustar câmbio nem juros à sua realidade.",
            "Alguns membros importantes NUNCA adotaram o Euro: Suécia, Dinamarca e, quando ainda era membro, o Reino Unido. Justamente para manter autonomia monetária.",
          ],
        },
        {
          titulo: "3. Crise Migratória e Ascensão da Extrema-Direita",
          texto:
            "Guerras no Oriente Médio (Síria, Iraque, Afeganistão) e na África empurraram milhões de refugiados para a Europa entre 2015 e hoje. A UE se dividiu: alguns países acolheram (Alemanha, Suécia), outros fecharam fronteiras (Hungria, Polônia). Isso alimentou partidos nacionalistas anti-imigração.",
          exemplo_real:
            "Em 2015, a Alemanha de Angela Merkel acolheu mais de 1 milhão de refugiados sírios. Simultaneamente, a Hungria de Viktor Orbán construiu muros de arame farpado na fronteira com a Sérvia. Duas respostas opostas dentro do MESMO bloco.",
          exemplos_extras: [
            "A ascensão de partidos de extrema-direita eurocéticos (Le Pen na França, AfD na Alemanha, Meloni na Itália, Vox na Espanha) é em grande parte reação política à imigração e à percepção de perda de soberania nacional.",
            "O Brexit (2016-2020) foi o primeiro país a SAIR da UE. A campanha do 'Leave' venceu misturando temores sobre imigração, contribuições financeiras ao bloco e desejo de retomar controle regulatório — mostrando que a integração é reversível.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Mapa da UE: quem está dentro, quem entrou por último, quem saiu",
        descricao:
          "Visualize as ondas de ampliação (Leste Europeu em 2004), a Zona do Euro (marcada em amarelo), o Espaço Schengen e a saída do Reino Unido (Brexit).",
        legenda:
          "Repare: nem todo país da UE está na Zona do Euro; nem todo país do Espaço Schengen é da UE (Suíça e Noruega estão em Schengen sem serem UE).",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "🇪🇺 CURIOSIDADE HISTÓRICA: A UE ganhou o Prêmio Nobel da Paz em 2012. O júri norueguês reconheceu que a integração europeia transformou um continente que produziu as duas guerras mais mortíferas da história em uma zona de paz duradoura — algo inédito em 2 mil anos de história europeia.",
      exemplo_visual:
        "Diagrama de camadas concêntricas: núcleo (Zona do Euro, 20 países) → círculo intermediário (todos os 27 da UE) → círculo externo (Espaço Schengen, inclui Suíça e Noruega não-UE) → Reino Unido saindo do sistema.",
      imagem_analise: "https://images.unsplash.com/photo-1541882020-3d5b3d5e2b96?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Por que a CECA (1951) é considerada o embrião da União Europeia?",
        opcoes: [
          {
            texto: "Porque integrou justamente as indústrias de carvão e aço da França e Alemanha — insumos-chave para fabricar armas — tornando uma nova guerra materialmente inviável.",
            correta: true,
            explicacao:
              "Exato. Ao dividir o controle dos recursos usados para fazer canhões e tanques, os dois países se tornaram economicamente dependentes um do outro. Guerra ficou impossível.",
          },
          {
            texto: "Porque criou uma moeda única europeia já em 1951.",
            correta: false,
            explicacao:
              "Falso. O Euro só entrou em circulação em 2002 — 51 anos depois da CECA.",
          },
          {
            texto: "Porque unificou os exércitos europeus em uma única força militar.",
            correta: false,
            explicacao:
              "Não existe exército único europeu até hoje. A defesa continua nacional (ou via OTAN). A UE tem forças integradas apenas em missões pontuais.",
          },
        ],
      },
      {
        pergunta: "Qual foi a principal consequência de a Grécia estar na Zona do Euro durante a crise de 2009-2015?",
        opcoes: [
          {
            texto: "Ela perdeu autonomia monetária: não podia desvalorizar sua moeda para se recuperar, precisando aplicar austeridade fiscal sob supervisão da 'troika' (BCE, FMI, Comissão Europeia).",
            correta: true,
            explicacao:
              "Perfeito. É a grande lição da Zona do Euro: quem cede a moeda cede também instrumentos de ajuste. Se você não pode desvalorizar, precisa cortar salários — muito mais doloroso politicamente.",
          },
          {
            texto: "Ela foi expulsa imediatamente da UE por não pagar dívidas.",
            correta: false,
            explicacao:
              "Nunca foi expulsa. Recebeu resgates financeiros (bailouts) em troca de reformas.",
          },
          {
            texto: "Ela adotou o Dólar americano como nova moeda oficial.",
            correta: false,
            explicacao:
              "Nada disso. A Grécia continua na Zona do Euro até hoje.",
          },
        ],
      },
      {
        pergunta: "O que mostrou o Brexit (2016-2020) sobre o projeto europeu?",
        opcoes: [
          {
            texto: "Que a integração europeia é reversível e sensível a temas como imigração, soberania nacional e contribuições financeiras ao bloco.",
            correta: true,
            explicacao:
              "Correto. Nenhum tratado assegura que a UE é 'para sempre'. O Brexit ativou o Artigo 50 do Tratado da UE, que sempre previu a saída de membros.",
          },
          {
            texto: "Que o Reino Unido nunca havia sido membro da UE.",
            correta: false,
            explicacao:
              "Falso. Foi membro de 1973 a 2020 (47 anos).",
          },
          {
            texto: "Que a UE se dissolveu após 2020.",
            correta: false,
            explicacao:
              "Errado. A UE continua com 27 membros e ampliou-se após o Brexit (Croácia entrou em 2013; Ucrânia é candidata desde 2022).",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada país conforme sua posição em relação à União Europeia e à Zona do Euro.",
      categorias: [
        { id: "eurozona", titulo: "UE + Zona do Euro", cor: "amber" },
        { id: "ue_sem_euro", titulo: "UE sem Euro", cor: "cyan" },
        { id: "fora", titulo: "Fora da UE", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Alemanha — motor econômico do bloco, adotou o Euro em 2002.", categoriaId: "eurozona" },
        { texto: "Suécia — membro da UE mas manteve a Coroa Sueca como moeda.", categoriaId: "ue_sem_euro" },
        { texto: "Reino Unido — saiu da UE em 2020 pelo Brexit.", categoriaId: "fora" },
        { texto: "França — fundadora da CECA e do Euro.", categoriaId: "eurozona" },
        { texto: "Suíça — nunca foi UE, mas participa do Espaço Schengen.", categoriaId: "fora" },
        { texto: "Dinamarca — membro da UE que rejeitou o Euro em referendo.", categoriaId: "ue_sem_euro" },
      ],
    },

    desafio_critico: {
      pergunta:
        "A crise da dívida grega (2009-2015) e o Brexit (2016-2020) são frequentemente citados como testes de estresse do projeto europeu. Qual afirmação melhor sintetiza a lição estrutural desses dois eventos para a integração supranacional?",
      opcoes: [
        {
          texto:
            "A integração exige que países cedam parcelas de soberania (monetária, migratória, regulatória) em troca de benefícios coletivos, e essa cessão gera atritos permanentes entre a lógica supranacional e o sentimento nacional — tornando o projeto sempre inacabado e politicamente vulnerável.",
          correta: true,
        },
        {
          texto:
            "Os dois eventos comprovam que a integração europeia é um sucesso sem contradições e que a UE se tornou uma federação política plenamente consolidada, sem tensões internas relevantes.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente análise. Você entendeu a dialética central da UE: integração e soberania nacional puxam em direções opostas. Cada nova crise força a UE a escolher entre aprofundar a união (mais integração) ou recuar (renacionalizar competências). É por isso que analistas dizem que a UE 'só avança em crise' — e também que 'só recua em crise'.",
    },
    recompensas: { xp: 750, moedas: 550, titulo: "Analista da Integração Europeia" },
  },

  // ============================================================
  // UNIDADE 3 — Espaço Pós-Soviético
  // ============================================================
  {
    unidade: 3,
    slug: "unidade-3-pos-sovietico",
    titulo: "O Espaço Pós-Soviético: Rússia e Leste Europeu",
    habilidade: "EF09GE08 / EF09GE09",
    introducao_academica:
      "A dissolução da URSS em 1991 fragmentou o maior país já existente em 15 repúblicas independentes, criando uma nova geopolítica marcada por tensões étnicas, disputas por recursos energéticos e a difícil relação entre a Rússia e suas antigas repúblicas — que culminou na guerra na Ucrânia iniciada em 2014 e ampliada em 2022.",
    conteudo_pedagogico: {
      conceito_chave: "Fragmentação da URSS, expansão da OTAN e o poder energético russo",
      texto_teorico:
        "Entender o espaço pós-soviético é decifrar por que a Rússia se sente 'cercada' pelo Ocidente, por que gás e petróleo são armas políticas, e por que fronteiras artificiais criadas em Moscou explodem em conflitos étnicos décadas depois.",
      etapas_teoricas: [
        {
          titulo: "1. A Fragmentação da URSS (1991)",
          texto:
            "A URSS reunia 15 repúblicas sob controle centralizado de Moscou. Em dezembro de 1991, sob crise econômica e política, o país foi dissolvido. Surgiram 15 nações independentes: Rússia, Ucrânia, Belarus, três Bálticas (Estônia, Letônia, Lituânia), Cáucaso (Geórgia, Armênia, Azerbaijão) e cinco -stões da Ásia Central (Cazaquistão etc.).",
          exemplo_real:
            "A Rússia, sozinha, herdou 76% do território, 51% da população, todo o arsenal nuclear e o assento permanente da URSS no Conselho de Segurança da ONU. As outras 14 repúblicas começaram do zero como Estados.",
          exemplos_extras: [
            "Fronteiras internas soviéticas, traçadas administrativamente por Stalin e sucessores, viraram fronteiras internacionais da noite para o dia — sem levar em conta minorias étnicas. Isso criou 'russos étnicos' fora da Rússia (25 milhões espalhados pelas ex-repúblicas), fonte de conflitos até hoje.",
            "A dissolução foi assinada por Rússia, Ucrânia e Belarus em Belovezha (dez/1991), à revelia do presidente soviético Mikhail Gorbachev. Foi o fim de um Estado sem guerra civil ampla — feito raro na história de impérios.",
          ],
        },
        {
          titulo: "2. Expansão da OTAN a Leste",
          texto:
            "A OTAN (aliança militar ocidental criada em 1949 contra a URSS) NÃO foi dissolvida com o fim da Guerra Fria. Ao contrário: entre 1999 e 2020, incorporou 14 ex-países comunistas (Polônia, Hungria, República Tcheca, Bálticas, Romênia etc.). A Rússia interpreta isso como cerco e quebra de acordos verbais de 1990.",
          exemplo_real:
            "Em 2004, as três repúblicas bálticas (Estônia, Letônia, Lituânia) — ex-URSS — entraram na OTAN. Isso posicionou tropas aliadas dos EUA a poucos quilômetros de São Petersburgo. Do ponto de vista de Moscou, foi como se a URSS tivesse colocado bases militares no México nos anos 1960.",
          exemplos_extras: [
            "A adesão da Finlândia (2023) e Suécia (2024) à OTAN — após décadas de neutralidade — foi consequência direta da invasão russa da Ucrânia. Ironicamente, a guerra que a Rússia iniciou para impedir expansão da OTAN acabou dobrando a fronteira russo-OTAN.",
            "A Ucrânia e a Geórgia sinalizaram desejo de entrar na OTAN em 2008 (Cúpula de Bucareste). Isso é considerado por analistas como um dos gatilhos que levaram à guerra da Geórgia (2008), anexação da Crimeia (2014) e invasão russa (2022).",
          ],
        },
        {
          titulo: "3. Rússia: Superpotência Energética",
          texto:
            "A Rússia é o maior país do mundo (17 milhões de km²) e detém enormes reservas de gás natural, petróleo, minerais estratégicos (níquel, urânio) e florestas. Isso lhe dá poder de barganha: por décadas, foi o principal fornecedor de gás da Europa Ocidental, especialmente da Alemanha.",
          exemplo_real:
            "Antes de 2022, a Alemanha importava cerca de 55% do seu gás natural da Rússia via gasodutos como o Nord Stream. Isso dava a Moscou capacidade de pressionar politicamente cortando ou ameaçando cortar o fornecimento — o famoso 'chantagem do gás' em invernos rigorosos.",
          exemplos_extras: [
            "Após a invasão da Ucrânia (2022), a UE lançou um plano de emergência (REPowerEU) para se desvincular do gás russo até 2027. Diversificou fornecedores (EUA e Catar com gás liquefeito), acelerou renováveis e recolocou reatores nucleares em operação. O petróleo/gás russo redirecionou-se então para Índia e China.",
            "Os gasodutos Nord Stream 1 e 2, no fundo do Mar Báltico, foram sabotados em setembro de 2022 por explosões submarinas. A autoria ainda é motivo de disputa geopolítica — mas o fato simbolizou o fim de uma era: a Alemanha nunca mais dependeria estrategicamente do gás russo.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Mapa do espaço pós-soviético e expansão da OTAN",
        descricao:
          "Compare o mapa de 1990 (URSS + Pacto de Varsóvia como bloco unificado) com o mapa atual (15 países independentes + 14 deles ou seus vizinhos na OTAN).",
        legenda:
          "Repare como a fronteira da OTAN 'colou' na Rússia em 30 anos — do ponto de vista de Moscou, é o principal argumento de segurança nacional.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "⛽ INSIGHT ENERGÉTICO: Antes de 2022, alguns invernos europeus dependiam LITERALMENTE do humor do Kremlin. Se Moscou reduzisse o gás, cidades alemãs, italianas e polonesas teriam aquecimento racionado. Nenhum bloco econômico deveria ter tamanha dependência estratégica de um só fornecedor — mas foi exatamente o que aconteceu por 20 anos.",
      exemplo_visual:
        "Fluxograma: reservas de gás russas (Sibéria) → gasodutos transcontinentais → Alemanha/Itália/Polônia → dependência energética como alavanca política.",
      imagem_analise: "https://images.unsplash.com/photo-1523901018719-8ce5b986a41b?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Por que a Rússia herdou o assento permanente da URSS no Conselho de Segurança da ONU?",
        opcoes: [
          {
            texto: "Porque foi reconhecida como Estado sucessor da URSS: herdou território majoritário, arsenal nuclear e obrigações internacionais soviéticas.",
            correta: true,
            explicacao:
              "Correto. Um Estado sucessor herda direitos e deveres internacionais do Estado extinto. As outras 14 repúblicas foram tratadas como Estados novos.",
          },
          {
            texto: "Porque ganhou uma votação entre as ex-repúblicas soviéticas.",
            correta: false,
            explicacao:
              "Não houve votação. Foi reconhecimento diplomático dos demais membros da ONU.",
          },
          {
            texto: "Porque comprou o assento dos EUA.",
            correta: false,
            explicacao:
              "Assentos na ONU não são negociáveis financeiramente.",
          },
        ],
      },
      {
        pergunta: "Do ponto de vista russo, o que representou a expansão da OTAN em direção ao Leste Europeu?",
        opcoes: [
          {
            texto: "Um cerco militar percebido como ameaça direta à segurança nacional, aproximando bases da OTAN de fronteiras russas históricas.",
            correta: true,
            explicacao:
              "Exato. Para Moscou, ver bálticas e Polônia entrando na OTAN foi equivalente a ver tanques americanos a poucas horas de suas cidades. É a leitura russa oficial.",
          },
          {
            texto: "Um convite para a Rússia entrar também na OTAN.",
            correta: false,
            explicacao:
              "A Rússia nunca foi convidada como membro pleno. Chegou a ter status de 'parceria' nos anos 2000, mas nunca ingresso.",
          },
          {
            texto: "Um acordo comercial sem componente militar.",
            correta: false,
            explicacao:
              "A OTAN é uma aliança militar — o Artigo 5 obriga defesa mútua entre membros.",
          },
        ],
      },
      {
        pergunta: "Qual foi o impacto imediato da invasão russa da Ucrânia (2022) sobre a matriz energética europeia?",
        opcoes: [
          {
            texto: "Acelerou drasticamente a diversificação de fornecedores (EUA, Catar), o retorno de energia nuclear em alguns países e o investimento em renováveis, reduzindo a dependência do gás russo.",
            correta: true,
            explicacao:
              "Perfeito. A dependência energética virou vulnerabilidade estratégica em questão de semanas. Isso reorganizou a matriz europeia mais em 2 anos do que em 20.",
          },
          {
            texto: "Aumentou a dependência europeia do gás russo, com novos gasodutos sendo construídos.",
            correta: false,
            explicacao:
              "Inverso. O gasoduto Nord Stream 2 foi cancelado, e o Nord Stream 1 foi sabotado. A UE cortou drasticamente o consumo de gás russo.",
          },
          {
            texto: "Não teve efeito significativo na energia europeia.",
            correta: false,
            explicacao:
              "Falso. Foi o maior choque energético europeu desde a crise do petróleo de 1973.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada país conforme sua posição atual no antigo espaço soviético.",
      categorias: [
        { id: "otan", titulo: "Ex-soviético agora na OTAN", cor: "cyan" },
        { id: "aliado_rus", titulo: "Ainda aliado da Rússia", cor: "amber" },
        { id: "conflito", titulo: "Em conflito/disputa com a Rússia", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Estônia — república báltica, membro da OTAN desde 2004.", categoriaId: "otan" },
        { texto: "Belarus — vizinha da Rússia, aliada estratégica do Kremlin.", categoriaId: "aliado_rus" },
        { texto: "Ucrânia — invadida pela Rússia em 2022, candidata à UE.", categoriaId: "conflito" },
        { texto: "Lituânia — báltica, membro da OTAN e da UE.", categoriaId: "otan" },
        { texto: "Cazaquistão — parceiro econômico próximo da Rússia, membro da EAEU.", categoriaId: "aliado_rus" },
        { texto: "Geórgia — sofreu invasão russa em 2008, tem territórios ocupados (Ossétia do Sul).", categoriaId: "conflito" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Analistas de política internacional apontam a dependência europeia do gás russo, mantida por décadas, como um erro estratégico revelado pela guerra na Ucrânia em 2022. Qual é a lição geopolítica MAIS estrutural desse episódio?",
      opcoes: [
        {
          texto:
            "Segurança energética é indissociável de segurança nacional: concentrar fornecimento estratégico em um único país politicamente rival cria vulnerabilidades que podem ser exploradas em crises, com impacto direto sobre soberania econômica e liberdade de decisão política.",
          correta: true,
        },
        {
          texto:
            "A dependência energética entre países vizinhos é sempre segura e não gera riscos políticos relevantes, desde que haja contratos comerciais assinados entre empresas privadas.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente. Você compreendeu que geopolítica energética é um dos vetores mais importantes da política internacional contemporânea. Depender de fornecedor único é apostar que o cenário político permanecerá estável — aposta que raramente se sustenta em prazos longos. Por isso, hoje, matriz diversificada + renováveis + estoque estratégico viraram vocabulário obrigatório de qualquer país sério.",
    },
    recompensas: { xp: 800, moedas: 600, titulo: "Analista Geopolítico do Leste Europeu" },
  },

  // ============================================================
  // UNIDADE 4 — Ascensão Chinesa
  // ============================================================
  {
    unidade: 4,
    slug: "unidade-4-ascensao-chinesa",
    titulo: "A Ascensão Chinesa e a Nova Rota da Seda",
    habilidade: "EF09GE10 / EF09GE11",
    introducao_academica:
      "Em 40 anos, a China saiu de país agrário e pobre para segunda maior economia do mundo e principal parceira comercial de mais de 120 países. Sua estratégia é combinar mercado interno gigante, planejamento estatal de longo prazo e projeção global via infraestrutura (Belt & Road) — desafiando frontalmente a hegemonia americana.",
    conteudo_pedagogico: {
      conceito_chave: "Socialismo de mercado, Belt & Road Initiative e disputa tecnológica com EUA",
      texto_teorico:
        "A China combina traços aparentemente contraditórios: partido único comunista + capitalismo agressivo + planejamento estratégico de décadas. Entender esse modelo é essencial para ler o cenário geopolítico do séc. XXI.",
      etapas_teoricas: [
        {
          titulo: "1. O 'Socialismo de Mercado' Chinês",
          texto:
            "Em 1978, Deng Xiaoping iniciou reformas: 'não importa se o gato é preto ou branco, contanto que pegue ratos'. Criou Zonas Econômicas Especiais (Shenzhen), atraiu capital estrangeiro, permitiu propriedade privada — mantendo controle político total do Partido Comunista. O resultado: 800 milhões de pessoas saíram da pobreza em 40 anos.",
          exemplo_real:
            "Shenzhen era um vilarejo de pescadores em 1980, com 30 mil habitantes. Hoje é uma megacidade com mais de 17 milhões de pessoas, sede da Huawei, Tencent, BYD — comparável a Silicon Valley em produção de patentes. Foi feita 'do zero' como laboratório do capitalismo dentro do socialismo.",
          exemplos_extras: [
            "A China é o único caso da história de país que passou de renda baixa a média-alta em uma única geração, sem se democratizar politicamente. Isso desafiou a tese ocidental de que 'liberalização econômica leva à liberalização política'.",
            "A moeda chinesa (Yuan/Renminbi) ainda NÃO é totalmente conversível — o governo controla câmbio e fluxos de capital, evitando crises cambiais e mantendo autonomia. É o oposto da lógica neoliberal ocidental.",
          ],
        },
        {
          titulo: "2. A Nova Rota da Seda (Belt & Road Initiative)",
          texto:
            "Lançada em 2013 por Xi Jinping, a BRI é a maior iniciativa global de infraestrutura da história: portos, ferrovias, rodovias, oleodutos e cabos submarinos ligando China → Ásia Central → Oriente Médio → África → Europa. Envolve mais de 150 países e mais de US$ 1 trilhão em investimentos.",
          exemplo_real:
            "A China construiu (e financiou) o Porto de Pireus na Grécia, a Ferrovia Mombaça-Nairóbi no Quênia, e o Porto de Gwadar no Paquistão. Cada obra amplia a projeção comercial e geopolítica chinesa em pontos estratégicos do globo.",
          exemplos_extras: [
            "Críticos ocidentais chamam a BRI de 'armadilha da dívida': países pobres pegam empréstimos gigantes com a China e, quando não pagam, cedem controle da infraestrutura (caso emblemático: Sri Lanka cedeu porto de Hambantota por 99 anos em 2017).",
            "A resposta ocidental veio tarde: em 2022, G7 lançou o PGII (Partnership for Global Infrastructure and Investment) e a UE, a Global Gateway. Ambos são tentativas de oferecer alternativa ocidental à BRI — mas com valores muito menores.",
          ],
        },
        {
          titulo: "3. A Disputa Tecnológica com os EUA",
          texto:
            "A rivalidade EUA-China já não é sobre território ou ideologia: é sobre quem dominará as tecnologias do séc. XXI (chips avançados, inteligência artificial, 5G, computação quântica, biotecnologia). Os EUA impõem sanções bloqueando exportação de chips avançados à China; a China responde com autossuficiência forçada.",
          exemplo_real:
            "Em 2019, os EUA colocaram a Huawei em lista negra, proibindo empresas americanas de fornecer chips e software. A Huawei perdeu acesso ao Android completo do Google e teve que criar seu próprio sistema operacional (HarmonyOS). Guerra fria tecnológica em ação.",
          exemplos_extras: [
            "Taiwan é hoje o centro geopolítico mundial dos chips: a TSMC (Taiwan Semiconductor) fabrica 90% dos chips avançados do planeta. Um conflito EUA-China por Taiwan paralisaria a economia mundial em poucos meses — todo smartphone, carro e drone depende desses chips.",
            "A China lançou em 2015 o plano 'Made in China 2025' com meta de autossuficiência em 10 setores estratégicos (chips, aviação, robótica, biotecnologia). Foi visto pelos EUA como declaração de guerra tecnológica — e reação americana foi imediata.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Mapa da Nova Rota da Seda (BRI) e disputa por chips",
        descricao:
          "Visualize as duas rotas da BRI: terrestre (China → Ásia Central → Europa) e marítima (China → Sudeste Asiático → África → Mediterrâneo). Sobreponha a localização de Taiwan e da TSMC — o coração da disputa por chips.",
        legenda:
          "Repare: a BRI conecta a China a mercados que antes dependiam quase exclusivamente do comércio marítimo controlado por EUA/Reino Unido.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "🐉 INSIGHT DE PODER: A China é hoje o maior parceiro comercial de mais de 120 países — inclusive do Brasil, dos EUA, da Alemanha e do Japão. É a primeira vez desde o fim da 2ª Guerra que uma nação não-ocidental está no centro da economia global. Isso é uma mudança de EPOCA, não de conjuntura.",
      exemplo_visual:
        "Mapa mundial destacando: origem chinesa da BRI → portos financiados (Pireus, Gwadar, Hambantota) → cabo submarino Peace (China-Europa) → localização estratégica de Taiwan.",
      imagem_analise: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "O que caracteriza o 'socialismo de mercado' chinês?",
        opcoes: [
          {
            texto: "Combinação de controle político monopartidário do PCC com abertura econômica, propriedade privada e livre mercado em zonas específicas.",
            correta: true,
            explicacao:
              "Exato. A China separa política (fechada, controlada) de economia (aberta, capitalista) — algo que nenhum outro país sustentou em escala e duração comparáveis.",
          },
          {
            texto: "Sistema economicamente idêntico ao capitalismo dos EUA, com democracia liberal.",
            correta: false,
            explicacao:
              "Falso. Politicamente a China é regime de partido único, sem eleições multipartidárias.",
          },
          {
            texto: "Retorno ao modelo maoísta de coletivização total da terra e da indústria.",
            correta: false,
            explicacao:
              "Inverso. Deng Xiaoping abandonou o maoísmo econômico justamente para permitir crescimento via mercado.",
          },
        ],
      },
      {
        pergunta: "Qual é a principal função geopolítica da Belt & Road Initiative (BRI)?",
        opcoes: [
          {
            texto: "Ampliar a influência chinesa através de infraestrutura estratégica (portos, ferrovias, cabos), criando cadeias comerciais menos dependentes de rotas controladas pelos EUA.",
            correta: true,
            explicacao:
              "Correto. É poder projetado por concreto e trilhos, não por navios de guerra. Cada porto financiado é uma cabeça-de-ponte comercial e geopolítica.",
          },
          {
            texto: "Fornecer ajuda humanitária gratuita e sem contrapartidas aos países mais pobres.",
            correta: false,
            explicacao:
              "Não. São empréstimos comerciais com juros, geralmente com garantia de exploração da própria infraestrutura financiada.",
          },
          {
            texto: "Reproduzir turisticamente a Rota da Seda antiga como atração cultural.",
            correta: false,
            explicacao:
              "É uma referência simbólica ao passado, mas o objetivo é estritamente econômico-geopolítico.",
          },
        ],
      },
      {
        pergunta: "Por que Taiwan é chamada de 'epicentro geopolítico mundial dos chips'?",
        opcoes: [
          {
            texto: "Porque a TSMC (empresa taiwanesa) fabrica cerca de 90% dos chips avançados do mundo — insumo crítico para smartphones, carros, computadores e sistemas militares.",
            correta: true,
            explicacao:
              "Perfeito. Um conflito na região paralisaria a economia digital global. Por isso EUA, China, UE e Japão fazem esforços gigantes para relocalizar produção de chips.",
          },
          {
            texto: "Porque descobriu as maiores reservas mundiais de silício em suas montanhas.",
            correta: false,
            explicacao:
              "Falso. A vantagem não é matéria-prima, e sim engenharia avançada (know-how, maquinário ASML, décadas de investimento).",
          },
          {
            texto: "Porque é o único país produtor de chips do mundo.",
            correta: false,
            explicacao:
              "Existem outros produtores (Coreia do Sul, EUA, China), mas a TSMC domina o segmento AVANÇADO (chips abaixo de 5nm).",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada elemento como PARTE da estratégia chinesa ou PARTE da resposta americana à ascensão da China.",
      categorias: [
        { id: "china", titulo: "Estratégia Chinesa", cor: "amber" },
        { id: "eua", titulo: "Resposta Americana", cor: "cyan" },
      ],
      cartoes: [
        { texto: "Belt & Road Initiative (BRI) — infraestrutura global.", categoriaId: "china" },
        { texto: "CHIPS Act (2022) — subsídios para fabricar chips em solo americano.", categoriaId: "eua" },
        { texto: "Made in China 2025 — autossuficiência tecnológica.", categoriaId: "china" },
        { texto: "Sanções à Huawei bloqueando chips americanos.", categoriaId: "eua" },
        { texto: "AUKUS (aliança militar EUA-Reino Unido-Austrália no Pacífico).", categoriaId: "eua" },
        { texto: "Yuan digital (CBDC) para reduzir dependência do dólar.", categoriaId: "china" },
      ],
    },

    desafio_critico: {
      pergunta:
        "A ascensão chinesa é frequentemente descrita por analistas como o 'evento geopolítico mais importante do séc. XXI'. Qual afirmação sintetiza MELHOR o desafio estrutural que a China representa para a ordem mundial construída pelos EUA após 1945?",
      opcoes: [
        {
          texto:
            "A China desafia o modelo ocidental ao demonstrar que é possível conjugar crescimento econômico acelerado, capitalismo produtivo e presença global sem adotar democracia liberal — quebrando a expectativa ocidental de que desenvolvimento levaria inevitavelmente à convergência política com o modelo americano.",
          correta: true,
        },
        {
          texto:
            "A China representa apenas uma potência regional sem qualquer capacidade de projeção global, incapaz de rivalizar economicamente ou tecnologicamente com os EUA em qualquer setor relevante.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Perfeito. Você entendeu o cerne: a China não é apenas 'mais uma economia grande'. É uma proposta CIVILIZACIONAL alternativa à ocidental — que combina mercado + Estado forte + planejamento de longo prazo. Isso reabre um debate que a queda do Muro havia dado como encerrado: pode existir prosperidade sem democracia liberal? A resposta chinesa incomoda porque parece, empiricamente, que sim.",
    },
    recompensas: { xp: 850, moedas: 650, titulo: "Analista da Ascensão Chinesa" },
  },

  // ============================================================
  // UNIDADE 5 — Oriente Médio
  // ============================================================
  {
    unidade: 5,
    slug: "unidade-5-oriente-medio",
    titulo: "Oriente Médio: Petróleo, Religião e Fronteiras",
    habilidade: "EF09GE12 / EF09GE13",
    introducao_academica:
      "O Oriente Médio concentra as maiores reservas de petróleo do mundo, os três grandes monoteísmos (Judaísmo, Cristianismo, Islamismo) e fronteiras artificiais desenhadas por potências europeias no séc. XX. Essa combinação explosiva explica boa parte dos conflitos regionais que ocupam manchetes há mais de 70 anos.",
    conteudo_pedagogico: {
      conceito_chave: "Petróleo, fronteiras Sykes-Picot, conflito israelo-palestino e sunitas × xiitas",
      texto_teorico:
        "Entender o Oriente Médio exige superpor três camadas: recursos naturais (petróleo/gás), religião (divisões dentro do Islã e fé no monoteísmo abraâmico) e geopolítica externa (fronteiras coloniais + rivalidade EUA-Rússia-China na região).",
      etapas_teoricas: [
        {
          titulo: "1. Fronteiras Artificiais (Sykes-Picot, 1916)",
          texto:
            "Após a 1ª Guerra Mundial e a queda do Império Otomano, França e Reino Unido dividiram o Oriente Médio entre si em linhas retas no mapa (Acordo Sykes-Picot, 1916), ignorando divisões étnicas, tribais e religiosas. Criaram Iraque, Síria, Líbano, Jordânia — Estados que carregam essa herança conflituosa até hoje.",
          exemplo_real:
            "O Iraque foi criado juntando três regiões antes separadas do Império Otomano: curdos ao norte (predominantemente sunitas), árabes sunitas no centro e árabes xiitas ao sul. Três grupos com identidades distintas forçados em um único Estado — receita para as guerras civis vividas depois de 2003.",
          exemplos_extras: [
            "O povo curdo (cerca de 40 milhões) é dividido entre Turquia, Iraque, Irã e Síria. Nunca teve Estado próprio — mesmo sendo maior que muitos países da ONU. A promessa britânica de um Curdistão independente (Tratado de Sèvres, 1920) nunca se concretizou.",
            "A palavra 'Iraque' vem do árabe 'al-Iraq' — nome geográfico da região mesopotâmica. Mas o país Iraque como Estado moderno tem apenas cerca de 100 anos. É jovem, com fronteiras artificiais — o que ajuda a explicar sua fragilidade institucional.",
          ],
        },
        {
          titulo: "2. O Petróleo como Fator Estratégico",
          texto:
            "A região concentra cerca de 48% das reservas provadas mundiais de petróleo. Arábia Saudita, Irã, Iraque, Emirados, Kuwait e Catar formam um cinturão energético que alimenta a economia mundial. A OPEP (fundada em 1960) controla parcela decisiva dos preços globais.",
          exemplo_real:
            "Em 1973, os países árabes da OPEP embargaram petróleo aos países que apoiaram Israel na Guerra do Yom Kippur. O preço do barril quadruplicou, gerando a maior recessão global desde 1929. Foi a primeira vez que produtores 'periféricos' impuseram condições ao Ocidente rico.",
          exemplos_extras: [
            "Arábia Saudita e EUA firmaram em 1945 o 'Pacto do Quincy' (encontro entre o rei saudita Ibn Saud e o presidente Roosevelt): petróleo saudita → em troca de proteção militar americana. Esse pacto ainda estrutura a política externa dos EUA na região.",
            "A ascensão do 'fracking' (petróleo/gás de xisto) tornou os EUA o maior produtor mundial de petróleo desde 2018 — reduzindo sua dependência do Oriente Médio e alterando toda a lógica geopolítica regional.",
          ],
        },
        {
          titulo: "3. Conflitos e Divisões Religiosas",
          texto:
            "O Islã se divide majoritariamente em sunitas (85-90% dos muçulmanos) e xiitas (10-15%). Arábia Saudita lidera o mundo sunita; Irã lidera o xiita. Essa rivalidade se sobrepõe à disputa entre árabes e israelenses e alimenta guerras por procuração (Iêmen, Síria, Líbano). Israel e Palestina disputam o mesmo território sagrado desde 1948.",
          exemplo_real:
            "A Guerra Civil na Síria (2011-hoje) tornou-se um mosaico de disputas: governo Assad (aliado do Irã e da Rússia) × oposição sunita (apoiada por Arábia Saudita, Turquia, EUA), com Estado Islâmico surgindo no meio. Um conflito com sete ou oito 'lados' simultâneos.",
          exemplos_extras: [
            "O conflito Israel-Palestina é o mais duradouro do mundo contemporâneo. Começou com a partilha da ONU em 1947, virou guerras (1948, 1967, 1973), acordos falidos (Oslo, 1993) e, hoje, ciclos recorrentes de violência em Gaza e Cisjordânia.",
            "Os Acordos de Abraão (2020) marcaram normalização de relações entre Israel e países árabes (Emirados, Bahrein, Marrocos, Sudão), rompendo décadas de isolamento diplomático árabe a Israel. Foi uma reconfiguração histórica da diplomacia regional.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Mapa das camadas geopolíticas do Oriente Médio",
        descricao:
          "Superponha três mapas da mesma região: (1) fronteiras estatais atuais, (2) distribuição de sunitas × xiitas × outras minorias, (3) principais campos de petróleo e gás. Perceba como as três camadas raramente coincidem.",
        legenda:
          "Repare: quase todos os grandes conflitos regionais nascem de choque entre essas três camadas — fronteiras estatais que não respeitam nem religião nem controle de recursos.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "🛢️ INSIGHT ESTRATÉGICO: Cerca de 20% do petróleo mundial passa DIARIAMENTE pelo Estreito de Ormuz (entre Irã e Omã), um corredor marítimo com pouco mais de 30 km de largura no ponto mais estreito. Um bloqueio ali paralisa a economia global em semanas. É o gargalo geopolítico mais crítico do planeta.",
      exemplo_visual:
        "Mapa do Oriente Médio destacando: reservas de petróleo (cinturão saudita-iraquiano-iraniano), fronteiras de Sykes-Picot em linhas retas, e o Estreito de Ormuz.",
      imagem_analise: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Por que o Acordo Sykes-Picot (1916) é considerado uma das raízes históricas dos conflitos atuais no Oriente Médio?",
        opcoes: [
          {
            texto: "Porque desenhou fronteiras em linhas retas ignorando divisões étnicas, tribais e religiosas locais, criando Estados internamente instáveis por design.",
            correta: true,
            explicacao:
              "Exato. Iraque, Síria, Líbano e Jordânia carregam até hoje as tensões geradas por essa divisão colonial arbitrária.",
          },
          {
            texto: "Porque criou a OPEP e o cartel do petróleo.",
            correta: false,
            explicacao:
              "Falso. A OPEP foi criada em 1960 — 44 anos depois de Sykes-Picot — e por iniciativa dos próprios países produtores.",
          },
          {
            texto: "Porque unificou todo o Oriente Médio sob um único califado árabe.",
            correta: false,
            explicacao:
              "Inverso. Sykes-Picot fragmentou o Império Otomano em vários Estados — não unificou nada.",
          },
        ],
      },
      {
        pergunta: "O que caracteriza a rivalidade entre Arábia Saudita e Irã na geopolítica regional?",
        opcoes: [
          {
            texto: "Uma disputa por hegemonia regional que combina rivalidade religiosa (sunismo saudita × xiismo iraniano) e disputa por influência em conflitos (Iêmen, Síria, Líbano).",
            correta: true,
            explicacao:
              "Correto. É a principal 'guerra fria' regional do séc. XXI, travada indiretamente em vários países vizinhos.",
          },
          {
            texto: "Uma disputa apenas comercial, sem componente religioso ou militar.",
            correta: false,
            explicacao:
              "Falso. A dimensão religiosa (sunismo × xiismo) e militar (guerras por procuração) é central.",
          },
          {
            texto: "Uma aliança estratégica entre os dois países contra Israel.",
            correta: false,
            explicacao:
              "Inverso. Arábia Saudita e Irã são rivais estratégicos — chegaram a romper relações diplomáticas em 2016, restabelecidas em 2023 com mediação chinesa.",
          },
        ],
      },
      {
        pergunta: "Qual é a importância geopolítica do Estreito de Ormuz?",
        opcoes: [
          {
            texto: "Passam por ali cerca de 20% do petróleo mundial diariamente, tornando-o o gargalo marítimo mais crítico da economia global de energia.",
            correta: true,
            explicacao:
              "Perfeito. Um bloqueio de Ormuz elevaria o preço do barril a níveis catastróficos em dias. É por isso que EUA mantêm a 5ª Frota Naval permanentemente na região.",
          },
          {
            texto: "É onde estão localizadas as principais refinarias europeias de petróleo.",
            correta: false,
            explicacao:
              "Falso. As refinarias europeias estão na própria Europa. Ormuz é apenas o corredor de PASSAGEM do petróleo bruto.",
          },
          {
            texto: "É irrelevante geopoliticamente porque existem rotas alternativas.",
            correta: false,
            explicacao:
              "As alternativas (oleodutos terrestres) têm capacidade muito limitada frente ao volume que passa por Ormuz.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada país conforme seu alinhamento religioso majoritário e liderança regional.",
      categorias: [
        { id: "sunita", titulo: "Bloco Sunita (liderança saudita)", cor: "amber" },
        { id: "xiita", titulo: "Bloco Xiita (liderança iraniana)", cor: "cyan" },
        { id: "outros", titulo: "Outros (não-árabe/não-islâmico majoritário)", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Arábia Saudita — guardiã de Meca e Medina, monarquia sunita.", categoriaId: "sunita" },
        { texto: "Irã — república islâmica xiita desde 1979.", categoriaId: "xiita" },
        { texto: "Israel — Estado judaico criado em 1948.", categoriaId: "outros" },
        { texto: "Iraque — maioria da população é xiita.", categoriaId: "xiita" },
        { texto: "Egito — maior país árabe, majoritariamente sunita.", categoriaId: "sunita" },
        { texto: "Turquia — sunita majoritário, mas laica e não-árabe, membro da OTAN.", categoriaId: "outros" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Ao analisar os conflitos contemporâneos no Oriente Médio, especialistas destacam que reduzir suas causas apenas ao 'ódio religioso ancestral' é uma simplificação equivocada. Qual leitura MELHOR explica a persistência dos conflitos regionais?",
      opcoes: [
        {
          texto:
            "Os conflitos resultam da superposição de três camadas: fronteiras artificiais herdadas do colonialismo europeu, disputa por controle de petróleo e gás com peso na economia mundial, e rivalidades religiosas instrumentalizadas por regimes políticos para consolidar poder interno e projetar influência regional.",
          correta: true,
        },
        {
          texto:
            "Os conflitos são consequência exclusiva de diferenças religiosas milenares intransponíveis, sem qualquer relação com interesses econômicos, fronteiras coloniais ou disputas geopolíticas contemporâneas.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Sensacional. A análise geopolítica séria rejeita determinismos culturais/religiosos. Religião é UM dos vetores — não O vetor. Sem petróleo e sem fronteiras traçadas por Sykes-Picot, as mesmas divisões religiosas provavelmente não gerariam guerras da escala que geram. Ler geopolítica exige superpor camadas econômicas, políticas e culturais — nunca uma só.",
    },
    recompensas: { xp: 900, moedas: 700, titulo: "Analista do Oriente Médio" },
  },

  // ============================================================
  // UNIDADE 6 — Globalização Ambiental e Sustentabilidade
  // ============================================================
  {
    unidade: 6,
    slug: "unidade-6-sustentabilidade-global",
    titulo: "Globalização, Impactos Ambientais Globais e Sustentabilidade",
    habilidade: "EF09GE16 / EF09GE17",
    introducao_academica:
      "A globalização produtiva e a expansão do consumo geraram crises ambientais que ignoram fronteiras: mudança climática, perda de biodiversidade, poluição plástica dos oceanos, contaminação do ar. A resposta exige coordenação internacional — mas cada país negocia conforme seu desenvolvimento histórico e sua matriz energética.",
    conteudo_pedagogico: {
      conceito_chave: "Antropoceno, Acordo de Paris e responsabilidades comuns porém diferenciadas",
      texto_teorico:
        "A crise ambiental global é sistêmica: consumo em países ricos + produção em países emergentes + desmatamento em regiões periféricas se reforçam mutuamente. Nenhum país 'resolve' sozinho — mas negociar coordenação com 195 países é politicamente hercúleo.",
      etapas_teoricas: [
        {
          titulo: "1. Antropoceno: Uma Nova Era Geológica",
          texto:
            "Cientistas propõem chamar a era atual de Antropoceno: pela primeira vez, uma espécie (a humana) altera clima, oceanos, biomas e composição atmosférica em escala planetária. Concentração de CO₂ passou de 280 ppm (pré-industrial) para mais de 420 ppm hoje — patamar não visto há 3 milhões de anos.",
          exemplo_real:
            "Os últimos 10 anos foram os 10 mais quentes já registrados desde o início das medições em 1880. Ondas de calor letais, incêndios florestais recordes (Austrália 2020, Canadá 2023, Amazônia 2024) e derretimento acelerado das geleiras deixaram de ser previsão para virar rotina.",
          exemplos_extras: [
            "Se todo o gelo da Groenlândia derretesse, o nível dos oceanos subiria cerca de 7 metros — o suficiente para submergir grande parte de cidades como Nova York, Amsterdã, Xangai e Recife. É um evento de séculos, mas já iniciado.",
            "A acidificação dos oceanos (o CO₂ atmosférico é absorvido pela água) ameaça corais e cadeias alimentares marinhas. A Grande Barreira de Coral australiana perdeu mais de 50% de seus corais nos últimos 30 anos.",
          ],
        },
        {
          titulo: "2. Acordos Climáticos Internacionais",
          texto:
            "A humanidade tenta coordenar respostas desde Estocolmo (1972). Marcos: Rio-92 (Cúpula da Terra), Protocolo de Kyoto (1997), Acordo de Paris (2015 — meta de limitar aquecimento a 1,5°C acima do nível pré-industrial). As COPs (Conferências das Partes) anuais debatem metas e financiamento.",
          exemplo_real:
            "O Acordo de Paris (COP-21) foi assinado por 195 países. Cada um define suas próprias metas nacionais (NDCs). Os EUA saíram do acordo em 2020 (Trump) e voltaram em 2021 (Biden) — mostrando a fragilidade da governança climática frente a alternâncias políticas.",
          exemplos_extras: [
            "Nas COPs, o principal ponto de conflito é 'financiamento climático': países ricos prometeram US$ 100 bilhões/ano aos países em desenvolvimento para transição energética. A promessa (feita em Copenhague, 2009) foi cumprida com atraso e ainda é considerada insuficiente.",
            "A COP-27 (Egito, 2022) criou o fundo de 'perdas e danos' (loss and damage): países ricos financiam países pobres pelos danos já sofridos por eventos climáticos extremos. Foi vitória histórica das nações vulneráveis — mas a operacionalização ainda é lenta.",
          ],
        },
        {
          titulo: "3. Responsabilidades Comuns porém Diferenciadas",
          texto:
            "Princípio consagrado desde Rio-92: todos os países têm responsabilidade sobre o clima, MAS os ricos (industrializados há mais tempo) emitiram historicamente muito mais e devem cortar mais rápido. Países emergentes reivindicam direito ao desenvolvimento — sem repetir a trajetória suja dos ricos.",
          exemplo_real:
            "Os EUA emitiram historicamente cerca de 25% de todo o CO₂ acumulado na atmosfera desde 1750 — apesar de terem apenas 4% da população mundial. A Índia, com 18% da população, é responsável por menos de 3% das emissões históricas. Cobrar dos dois igual é injusto — daí o princípio da diferenciação.",
          exemplos_extras: [
            "O Brasil ocupa posição singular: matriz elétrica limpa (85% renovável — hidro, eólica, solar) mas grande emissor por desmatamento da Amazônia. Se controlasse o desmatamento zero, cortaria cerca de 50% das próprias emissões nacionais sem tocar em nada industrial.",
            "A China é hoje o MAIOR emissor absoluto do mundo — mas suas emissões PER CAPITA (por habitante) ainda são menores que as dos EUA e da Austrália. A China é também líder mundial em painéis solares, veículos elétricos e reflorestamento estatal — uma dualidade típica do país.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Emissões históricas × emissões atuais",
        descricao:
          "Compare dois mapas: 'quem emitiu historicamente' (EUA, Europa Ocidental, Rússia dominam) × 'quem emite hoje' (China domina, seguida por EUA e Índia). Isso explica o núcleo das disputas nas COPs.",
        legenda:
          "Repare: quem CAUSOU a crise climática (industrializados históricos) e quem mais SOFRE (países tropicais pobres) raramente são os mesmos — daí a demanda por justiça climática.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "🌍 INSIGHT DE JUSTIÇA CLIMÁTICA: Um cidadão médio dos EUA emite cerca de 14 toneladas de CO₂ por ano. Um cidadão indiano, cerca de 1,9 tonelada. Um cidadão da Etiópia, cerca de 0,15 tonelada. A crise é chamada 'global' — mas as responsabilidades são absolutamente desiguais. Por isso o princípio das 'responsabilidades comuns porém diferenciadas' é a espinha dorsal das negociações climáticas.",
      exemplo_visual:
        "Gráfico comparativo: emissões acumuladas 1750-hoje (EUA e Europa dominam) vs. emissões anuais atuais (China lidera) vs. emissões per capita (Qatar, EUA, Austrália lideram).",
      imagem_analise: "https://images.unsplash.com/photo-1569163139394-de4e5f43e4e3?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Por que cientistas propõem chamar a era atual de 'Antropoceno'?",
        opcoes: [
          {
            texto: "Porque, pela primeira vez, uma espécie (a humana) altera o sistema climático, os oceanos e a biosfera em escala planetária e geológica.",
            correta: true,
            explicacao:
              "Exato. Antropoceno = era do humano. Marca a primeira vez que uma espécie biológica se torna força geológica dominante do planeta.",
          },
          {
            texto: "Porque a Terra entrou em uma nova glaciação natural sem causa humana.",
            correta: false,
            explicacao:
              "Inverso. Estamos em aquecimento acelerado — não em glaciação — e as causas são majoritariamente antrópicas.",
          },
          {
            texto: "Porque os humanos foram extintos e outra espécie dominou.",
            correta: false,
            explicacao:
              "Falso. Antropoceno significa justamente o oposto: a era em que o ser humano é a força dominante.",
          },
        ],
      },
      {
        pergunta: "O que estabelece o princípio das 'responsabilidades comuns porém diferenciadas' (Rio-92)?",
        opcoes: [
          {
            texto: "Todos os países têm responsabilidade sobre o clima, mas os industrializados (responsáveis pela maior parte das emissões históricas) devem cortar mais rápido e financiar a transição dos mais pobres.",
            correta: true,
            explicacao:
              "Correto. É o princípio de JUSTIÇA CLIMÁTICA que estrutura toda a diplomacia ambiental desde 1992.",
          },
          {
            texto: "Todos os países devem cortar exatamente a mesma quantidade de emissões, sem diferenciação de renda ou histórico.",
            correta: false,
            explicacao:
              "Isso seria injusto: os países ricos causaram a crise; os pobres pagariam o mesmo custo sem terem contribuído para ela.",
          },
          {
            texto: "Apenas países pobres devem cortar emissões, poupando os ricos.",
            correta: false,
            explicacao:
              "Também injusto — e o inverso do princípio estabelecido nas convenções.",
          },
        ],
      },
      {
        pergunta: "Por que o Brasil ocupa posição singular na geopolítica climática?",
        opcoes: [
          {
            texto: "Tem matriz elétrica majoritariamente renovável, mas é grande emissor por desmatamento — controlar a Amazônia reduziria drasticamente suas emissões nacionais.",
            correta: true,
            explicacao:
              "Perfeito. É o único grande país em que o principal alvo climático é uso da terra, não indústria ou transporte.",
          },
          {
            texto: "É o maior emissor absoluto do mundo, à frente de China e EUA.",
            correta: false,
            explicacao:
              "Falso. Brasil é grande emissor por desmatamento, mas não lidera em termos absolutos globais (China lidera).",
          },
          {
            texto: "Não tem qualquer participação nas negociações climáticas internacionais.",
            correta: false,
            explicacao:
              "Inverso. Brasil sediou Rio-92 e é ator central em todas as COPs, especialmente por conta da Amazônia.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada iniciativa/acordo conforme sua natureza principal.",
      categorias: [
        { id: "acordo", titulo: "Acordo Internacional Climático", cor: "cyan" },
        { id: "solucao", titulo: "Solução Tecnológica/Setorial", cor: "amber" },
        { id: "conceito", titulo: "Conceito/Princípio Analítico", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Acordo de Paris (2015) — meta de 1,5°C.", categoriaId: "acordo" },
        { texto: "Painéis fotovoltaicos e turbinas eólicas.", categoriaId: "solucao" },
        { texto: "Antropoceno — nova era geológica humana.", categoriaId: "conceito" },
        { texto: "Protocolo de Kyoto (1997).", categoriaId: "acordo" },
        { texto: "Carros elétricos e baterias de lítio.", categoriaId: "solucao" },
        { texto: "Responsabilidades comuns porém diferenciadas.", categoriaId: "conceito" },
      ],
    },

    desafio_critico: {
      pergunta:
        "As negociações climáticas nas COPs têm sido frequentemente criticadas pela lentidão em relação à velocidade da crise. Qual afirmação MELHOR captura o dilema estrutural dessas negociações?",
      opcoes: [
        {
          texto:
            "Combater a crise climática exige coordenação global, mas cada país negocia conforme sua matriz energética, estágio de desenvolvimento e emissões históricas — resultando em compromissos voluntários frequentemente insuficientes frente à urgência científica, agravados pela ausência de mecanismos globais de coerção capazes de garantir cumprimento das metas.",
          correta: true,
        },
        {
          texto:
            "A lentidão das COPs se deve exclusivamente à má vontade dos cientistas, que resistem a apresentar dados climáticos claros aos governos, impedindo qualquer decisão internacional coordenada.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Sensacional. Você percebeu que o problema climático é tanto científico quanto POLÍTICO e INSTITUCIONAL. Não existe autoridade global capaz de OBRIGAR países a cumprir metas — só há acordos voluntários. Sem essa 'governança global' com força vinculante, cada país aposta que os outros farão o esforço enquanto ele próprio poupa custos. É um clássico dilema do prisioneiro em escala planetária.",
    },
    recompensas: { xp: 950, moedas: 750, titulo: "Analista de Sustentabilidade Global" },
  },

  // ============================================================
  // UNIDADE 7 — Brasil no Cenário Mundial (Consolidação)
  // ============================================================
  {
    unidade: 7,
    slug: "unidade-7-brasil-cenario-mundial",
    titulo: "O Brasil no Cenário Geopolítico e Econômico Mundial",
    habilidade: "Consolidação Geral · EF09GE",
    introducao_academica:
      "Fechamos o Fundamental 2 posicionando o Brasil no tabuleiro global. Somos a 9ª economia mundial, líder ambiental potencial (por conta da Amazônia e da matriz renovável), superpotência agrícola, membro dos BRICS e um dos maiores territórios do planeta — mas ainda enfrentamos desigualdade estrutural e dependência de commodities. Que Brasil queremos projetar no séc. XXI?",
    conteudo_pedagogico: {
      conceito_chave: "Potência regional × global, dependência de commodities e projeção ambiental",
      texto_teorico:
        "O Brasil é grande demais para ser periférico e pequeno demais para ser central. Essa condição de 'potência intermediária' molda toda a sua diplomacia: multilateralismo, defesa dos BRICS, protagonismo em clima e busca por assento permanente na ONU.",
      etapas_teoricas: [
        {
          titulo: "1. Brasil como Potência Regional e Global",
          texto:
            "Somos a maior economia da América Latina, quinto maior país do mundo em território (8,5 milhões de km²) e sétimo em população (~215 milhões). Isso nos dá peso automático em qualquer discussão continental — mas ainda somos periféricos frente a EUA, China e UE em capacidade tecnológica e financeira.",
          exemplo_real:
            "O Brasil sedia grandes iniciativas regionais (Mercosul, UNASUL histórica, agora em reformulação) e globais (COP-30 em 2025 em Belém, Cúpula do G20 em 2024). Somos convocados para 'mesas globais' — mas raramente definimos as regras do jogo. Somos formadores de opinião e mediadores.",
          exemplos_extras: [
            "O Brasil tenta há décadas um assento permanente no Conselho de Segurança da ONU (junto ao G4: Alemanha, Japão, Índia). O bloqueio principal vem de rivais regionais (Argentina, México, Paquistão) e da resistência dos atuais permanentes em ceder poder.",
            "Somos um dos poucos países capazes de fabricar aviões comerciais competitivos (Embraer é o 3º maior fabricante mundial, atrás de Boeing e Airbus). Também temos programa espacial próprio, produção nacional de vacinas e um sistema de saúde universal — características que a grande maioria dos países emergentes não tem.",
          ],
        },
        {
          titulo: "2. Superpotência Agrícola e Dependência de Commodities",
          texto:
            "Somos o maior exportador mundial de soja, café, açúcar, suco de laranja e carne bovina. Isso gera divisas, mas cria dependência de preços internacionais de commodities — que oscilam violentamente. Quando o preço da soja cai, o PIB brasileiro sente imediatamente.",
          exemplo_real:
            "A China compra sozinha cerca de 60% da soja exportada pelo Brasil. Essa concentração é vantagem (mercado gigante e previsível) mas também vulnerabilidade: qualquer atrito diplomático ou desaquecimento chinês afeta em cascata toda a economia brasileira do agronegócio.",
          exemplos_extras: [
            "A dependência de commodities gera fenômeno chamado 'reprimarização da economia': o país volta a exportar produtos primários (soja, minério, petróleo) em maior proporção que industrializados. Isso vulnerabiliza a economia e reduz empregos qualificados.",
            "O Brasil descobriu enormes reservas de petróleo no Pré-Sal (2007) e virou grande exportador. Ao mesmo tempo, tem matriz elétrica renovável de 85%. Somos, portanto, um dos poucos países que são ao mesmo tempo grandes produtores de petróleo E líderes em energia limpa — uma dualidade estratégica única.",
          ],
        },
        {
          titulo: "3. A Carta Ambiental e o Papel no Mundo",
          texto:
            "A Amazônia (60% em território brasileiro) é o maior ativo geopolítico do país no séc. XXI. Regula o clima global, abriga a maior biodiversidade do planeta e concentra grande parte da água doce mundial. Preservá-la é responsabilidade brasileira — e também instrumento de projeção internacional.",
          exemplo_real:
            "A COP-30 será realizada em Belém do Pará em novembro de 2025 — a primeira COP dentro da Amazônia. É oportunidade histórica para o Brasil apresentar ao mundo uma agenda ambiental positiva, com metas de desmatamento zero, transição justa e financiamento para bioeconomia amazônica.",
          exemplos_extras: [
            "Mais de 30 milhões de pessoas vivem na Amazônia brasileira. Preservação NÃO significa museu intocável: exige modelos de bioeconomia (açaí, castanha, óleos, turismo científico, biotecnologia) que gerem renda mantendo a floresta em pé — o oposto de pecuária extensiva e mineração ilegal.",
            "O Brasil já provou que consegue reduzir desmatamento: entre 2004 e 2012, o desmatamento amazônico caiu cerca de 80% (Plano PPCDAm). Voltou a subir depois, mas o histórico prova que a solução é possível com vontade política, monitoramento por satélite (INPE) e fiscalização (IBAMA/PF).",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Brasil no mapa global — parceiros, rivais e projeção",
        descricao:
          "Visualize os principais fluxos comerciais brasileiros (China, EUA, UE, Mercosul), a projeção diplomática (BRICS, G20, COPs) e os ativos estratégicos internos (Amazônia, Pré-Sal, agronegócio).",
        legenda:
          "Repare como o Brasil está simultaneamente inserido em 5 tabuleiros geopolíticos diferentes: latino-americano, BRICS, ambiental global, agroalimentar mundial e Atlântico Sul.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "🇧🇷 INSIGHT ESTRATÉGICO: O Brasil é o único país que reúne SIMULTANEAMENTE: maior floresta tropical (Amazônia), maior aquífero (Guarani/parte), maior potencial hidráulico da América, matriz elétrica majoritariamente limpa, produção agroalimentar de escala mundial, reservas de petróleo no Pré-Sal, e minerais críticos (nióbio, terras raras). Nenhum outro país concentra esse leque. A pergunta é: vamos usar isso como poder ou como maldição dos recursos?",
      exemplo_visual:
        "Mapa do Brasil destacando: Amazônia + Pré-Sal + zonas agrícolas do Cerrado + polo industrial de SP + Mercosul + fluxos comerciais para China e UE.",
      imagem_analise: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Por que o Brasil é classificado como 'potência intermediária' na geopolítica global?",
        opcoes: [
          {
            texto: "Porque é grande demais para ser periférico (território, população, PIB) mas ainda pequeno em capacidade tecnológica, militar e financeira comparado a EUA, China e UE.",
            correta: true,
            explicacao:
              "Perfeito. Somos convocados para mesas globais, mas raramente ditamos as regras. Isso define a diplomacia multilateral do Itamaraty há décadas.",
          },
          {
            texto: "Porque somos oficialmente uma superpotência ao lado de EUA e China.",
            correta: false,
            explicacao:
              "Ainda não. Somos potência regional na América Latina, mas não superpotência global no mesmo patamar.",
          },
          {
            texto: "Porque somos um país totalmente periférico sem qualquer relevância internacional.",
            correta: false,
            explicacao:
              "Inverso. Somos parte dos BRICS, do G20, temos assento no Conselho de Segurança da ONU rotativo várias vezes. Não somos periféricos.",
          },
        ],
      },
      {
        pergunta: "O que caracteriza a 'reprimarização' da economia brasileira?",
        opcoes: [
          {
            texto: "Aumento da participação de produtos primários (commodities agrícolas e minerais) na pauta de exportação, em detrimento de manufaturados industrializados.",
            correta: true,
            explicacao:
              "Correto. Isso vulnerabiliza a economia a preços internacionais e reduz empregos qualificados.",
          },
          {
            texto: "Aumento da industrialização de alta tecnologia no país.",
            correta: false,
            explicacao:
              "Inverso. Reprimarização é justamente a redução relativa da indústria de alta tecnologia.",
          },
          {
            texto: "Adoção do sistema republicano de governo pela primeira vez.",
            correta: false,
            explicacao:
              "Falso. 'Reprimarização' é conceito econômico, não político. Vem de 'produtos primários'.",
          },
        ],
      },
      {
        pergunta: "Por que a Amazônia é considerada o principal ATIVO GEOPOLÍTICO do Brasil no séc. XXI?",
        opcoes: [
          {
            texto: "Regula o clima global, abriga a maior biodiversidade do planeta, concentra parte enorme da água doce mundial e dá ao Brasil protagonismo natural em qualquer negociação ambiental internacional.",
            correta: true,
            explicacao:
              "Exato. Nenhum outro país tem esse peso natural nas negociações climáticas. É uma 'moeda de barganha' diplomática única.",
          },
          {
            texto: "Porque a Amazônia é rica em petróleo e gás natural mais que qualquer outra região do mundo.",
            correta: false,
            explicacao:
              "Falso. Amazônia tem petróleo (bacia do Solimões), mas o Pré-Sal (oceânico) é muito maior. O valor amazônico é biodiversidade + clima + água, não petróleo.",
          },
          {
            texto: "Porque é uma região vazia sem qualquer valor ambiental ou econômico.",
            correta: false,
            explicacao:
              "Inverso. É a região mais biodiversa do planeta, com mais de 30 milhões de habitantes.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada característica brasileira em VANTAGEM competitiva no cenário global ou VULNERABILIDADE estrutural.",
      categorias: [
        { id: "vantagem", titulo: "Vantagem Estratégica", cor: "amber" },
        { id: "vulnerabilidade", titulo: "Vulnerabilidade Estrutural", cor: "cyan" },
      ],
      cartoes: [
        { texto: "Matriz elétrica majoritariamente renovável (85%).", categoriaId: "vantagem" },
        { texto: "Dependência de commodities e preços internacionais voláteis.", categoriaId: "vulnerabilidade" },
        { texto: "Maior floresta tropical do mundo (Amazônia).", categoriaId: "vantagem" },
        { texto: "Alta desigualdade social e concentração de renda.", categoriaId: "vulnerabilidade" },
        { texto: "Concentração da pauta exportadora em poucos parceiros (China ~30%).", categoriaId: "vulnerabilidade" },
        { texto: "Maior parte da produção mundial de soja, café, laranja e carne bovina.", categoriaId: "vantagem" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Você acaba de concluir o Fundamental 2 de Geografia. Considerando a análise global desenvolvida (Nova Ordem, UE, Rússia, China, Oriente Médio, sustentabilidade) e a posição brasileira dentro dela, qual é a interpretação MAIS ESTRATÉGICA sobre o desafio central do Brasil no séc. XXI?",
      opcoes: [
        {
          texto:
            "O Brasil precisa converter seus ativos únicos (Amazônia, matriz renovável, agricultura de escala, biodiversidade, minerais críticos) em projeto nacional coerente, reduzindo dependência de commodities, ampliando complexidade tecnológica e ocupando protagonismo em pautas globais (clima, alimentação, biodiversidade) — sob risco de repetir o ciclo histórico de 'grande promessa que nunca se realiza plenamente'.",
          correta: true,
        },
        {
          texto:
            "O Brasil deve abandonar completamente qualquer participação em fóruns internacionais (BRICS, G20, COPs), adotar isolamento diplomático e depender exclusivamente de importações para questões estratégicas — mantendo sua posição periférica e evitando qualquer projeção global.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente. VOCÊ CONCLUIU O ENSINO FUNDAMENTAL 2 DE GEOGRAFIA. Você agora enxerga o mundo através de camadas — bipolaridade × multipolaridade, integração × soberania, dependência × autonomia, sustentabilidade × desenvolvimento. E entende que geopolítica não é 'coisa de país distante' — cada preço de café, cada gasoduto, cada COP decidida em outro continente afeta a sua vida diária. Esse é o olhar geográfico maduro. Parabéns. Você está pronto para o Ensino Médio.",
    },
    recompensas: { xp: 1500, moedas: 900, titulo: "Analista Geopolítico do Brasil Contemporâneo" },
  },
];

export function getUnidade9ano(slug: string): UnidadeFund2 | undefined {
  return UNIDADES_9ANO.find((u) => u.slug === slug);
}

export function getProximaUnidade9ano(slug: string): UnidadeFund2 | undefined {
  const i = UNIDADES_9ANO.findIndex((u) => u.slug === slug);
  return i >= 0 && i + 1 < UNIDADES_9ANO.length ? UNIDADES_9ANO[i + 1] : undefined;
}
