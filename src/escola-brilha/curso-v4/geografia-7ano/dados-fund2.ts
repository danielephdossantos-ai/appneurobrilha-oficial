/**
 * Geografia 7º Ano — Banco acadêmico Fund. 2 Avançado.
 * Foco: Brasil (formação, população, economia, regiões, geopolítica).
 * Reutiliza os tipos de `geografia-6ano/dados-fund2` — mesma engine (PlayerGeoV2).
 */

import type { UnidadeFund2 } from "../geografia-6ano/dados-fund2";

export const UNIDADES_7ANO: UnidadeFund2[] = [
  // ============================================================
  // UNIDADE 1 — Formação Territorial do Brasil e Fronteiras
  // ============================================================
  {
    unidade: 1,
    slug: "unidade-1-formacao-territorial",
    titulo: "Formação Territorial do Brasil e Fronteiras",
    habilidade: "EF07GE01 / EF07GE02",
    introducao_academica:
      "Por que o Brasil tem esse formato de continente, e não o pedacinho estreito que Portugal recebeu no Tratado de Tordesilhas? Vamos investigar como bandeirantes, tratados diplomáticos e disputas de fronteira desenharam, ao longo de 500 anos, o mapa do maior país da América do Sul.",
    conteudo_pedagogico: {
      conceito_chave: "Território, Tratados e Expansão das Fronteiras",
      texto_teorico:
        "O território brasileiro atual não caiu do céu: foi construído por etapas. Cada linha do mapa é resultado de negociação, guerra, colonização ou tratado. Entender essa formação é entender por que hoje o Brasil faz fronteira com quase todos os países da América do Sul.",
      etapas_teoricas: [
        {
          titulo: "Tordesilhas (1494) — a primeira linha imaginária",
          texto:
            "Antes mesmo do Brasil ser 'descoberto' pelos europeus, Portugal e Espanha assinaram o Tratado de Tordesilhas dividindo o mundo em duas metades por uma linha imaginária a 370 léguas de Cabo Verde. Tudo a leste era português; a oeste, espanhol. O Brasil original era só uma faixa litorânea que ia mais ou menos de Belém a Laguna (SC).",
          exemplo_real:
            "Se Tordesilhas tivesse valido até hoje, cidades como Manaus, Cuiabá, Porto Velho e Campo Grande seriam espanholas — não brasileiras. A linha passava aproximadamente onde hoje ficam Belém e Laguna.",
          exemplos_extras: [
            "O tratado foi mediado pelo Papa Alexandre VI. Naquele momento, a Igreja Católica tinha poder político para arbitrar disputas entre reinos cristãos. Nenhum país indígena, africano ou asiático foi consultado — o mundo foi 'dividido' entre dois reinos ibéricos.",
            "Portugal só concordou com Tordesilhas porque queria proteger sua rota para a Índia (contornando a África). Se tivessem aceitado a linha original proposta pelo Papa (Tratado de 1493), o Brasil praticamente não existiria — a linha passaria a leste até de Recife.",
          ],
        },
        {
          titulo: "Bandeirantes e a expansão para o Oeste (séc. XVII–XVIII)",
          texto:
            "Enquanto Espanha estava ocupada com suas colônias andinas (ouro e prata), grupos de bandeirantes paulistas invadiam o interior atrás de índios para escravizar e, depois, atrás de ouro. Essas expedições, saindo de São Paulo, foram ocupando terras oficialmente espanholas — criando um fato consumado que a diplomacia depois legalizaria.",
          exemplo_real:
            "Cidades como Cuiabá (MT), Goiás Velho (GO), Vila Bela (MT) e Vila Boa foram fundadas por bandeirantes em terras que, no papel, ainda eram espanholas. Foi essa ocupação física que garantiu, décadas depois, esses territórios ao Brasil.",
          exemplos_extras: [
            "O ciclo do ouro (final do séc. XVII e todo o séc. XVIII) empurrou milhares de pessoas para Minas Gerais, Goiás e Mato Grosso. Onde havia gente e cidade, o rei português reivindicava a terra. A mineração foi o motor demográfico da interiorização.",
            "A pecuária extensiva também ocupou o sertão nordestino e o Sul (pampas). Rebanhos precisavam de muito espaço, e cada fazenda avançando para o oeste 'esticava' a fronteira efetiva do país, mesmo sem exército.",
          ],
        },
        {
          titulo: "Uti possidetis e Tratado de Madri (1750) — legalizando a expansão",
          texto:
            "Em 1750, Portugal e Espanha renegociaram tudo pelo Tratado de Madri, aplicando o princípio jurídico do uti possidetis: 'quem ocupou, é dono'. Como Portugal já tinha bandeirantes, missões e cidades no interior, a Espanha reconheceu formalmente a expansão. Tordesilhas foi oficialmente rasgado. É por causa desse tratado que o Brasil tem seu formato continental atual.",
          exemplo_real:
            "O responsável português pelas negociações foi Alexandre de Gusmão, um diplomata brasileiro nascido em Santos (SP). Ele conhecia o interior e conseguiu convencer a Espanha a ceder territórios enormes em troca da Colônia do Sacramento (atual Uruguai).",
          exemplos_extras: [
            "Mesmo após Madri (1750), disputas continuaram. O Barão do Rio Branco (final do séc. XIX / início do XX) foi o grande diplomata que fechou as fronteiras modernas — resolveu na mesa (sem guerra) as disputas com Argentina, Bolívia, Peru, Colômbia e Guiana Francesa.",
            "O Acre foi o único território adquirido após a Independência: comprado da Bolívia em 1903 (Tratado de Petrópolis) por 2 milhões de libras esterlinas + a construção da ferrovia Madeira-Mamoré. Foi a última grande peça do quebra-cabeça territorial brasileiro.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Mapa histórico do território brasileiro",
        descricao:
          "Compare o Brasil 'de Tordesilhas' (uma faixa litorânea estreita) com o Brasil atual, e veja o papel dos bandeirantes e do Tratado de Madri na expansão para o Oeste.",
        legenda:
          "Observe: sem a interiorização feita pelos bandeirantes e sem a diplomacia de Alexandre de Gusmão e do Barão do Rio Branco, o Brasil seria um país pequeno, colado ao litoral.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "Abra o Google Maps e olhe as fronteiras do Brasil: 15.719 km terrestres. O Brasil faz fronteira com 10 países (todos da América do Sul, exceto Chile e Equador). Isso não é acaso — é resultado direto da expansão bandeirante + tratados diplomáticos. Nossos vizinhos, na sua maioria, são países hispânicos porque Portugal 'invadiu' progressivamente o antigo lado espanhol de Tordesilhas.",
      exemplo_visual:
        "Comparação lado a lado: o Brasil de Tordesilhas (1494) — uma faixa estreita colada ao Atlântico — versus o Brasil atual, resultado de 400 anos de expansão territorial e negociação diplomática.",
      imagem_analise: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Por que hoje falamos português em Manaus, se essa região era espanhola pelo Tratado de Tordesilhas?",
        opcoes: [
          {
            texto: "Porque bandeirantes e colonos portugueses ocuparam a região antes que a Espanha o fizesse, e o Tratado de Madri (1750) legalizou essa ocupação pelo princípio do uti possidetis.",
            correta: true,
            explicacao:
              "Correto. 'Uti possidetis' = 'quem ocupa, é dono'. Portugal criou fatos consumados no interior e depois negociou o reconhecimento diplomático. Manaus era espanhola no papel, mas portuguesa na prática.",
          },
          {
            texto: "Porque o Brasil venceu uma guerra contra a Espanha e conquistou a Amazônia à força.",
            correta: false,
            explicacao:
              "Não houve guerra Brasil × Espanha pela Amazônia. A expansão foi feita por ocupação demográfica (bandeirantes, missões, colonos) e depois legalizada por tratados diplomáticos — não por batalhas.",
          },
          {
            texto: "Porque o Tratado de Tordesilhas nunca existiu de verdade; é uma lenda.",
            correta: false,
            explicacao:
              "Tordesilhas existiu (1494) e vigorou por mais de 250 anos. Só foi substituído formalmente pelo Tratado de Madri (1750). Você pode inclusive ver o original em museus em Portugal e na Espanha.",
          },
        ],
      },
      {
        pergunta: "Qual foi o ÚLTIMO grande território incorporado ao Brasil após a Independência?",
        opcoes: [
          {
            texto: "O Acre, comprado da Bolívia em 1903 pelo Tratado de Petrópolis.",
            correta: true,
            explicacao:
              "Exato. O Acre foi negociado pelo Barão do Rio Branco em troca de 2 milhões de libras e a promessa da ferrovia Madeira-Mamoré. Foi a última grande peça do território brasileiro.",
          },
          {
            texto: "O Rio Grande do Sul, anexado após guerra contra o Uruguai em 1870.",
            correta: false,
            explicacao:
              "O RS já era parte do Brasil desde o período colonial (bem antes da Independência). A Guerra do Paraguai (1864-70) foi contra o Paraguai, não Uruguai, e não incorporou novo território.",
          },
          {
            texto: "O Amazonas, conquistado dos espanhóis no séc. XX.",
            correta: false,
            explicacao:
              "O Amazonas já era território consolidado pelo Tratado de Madri (1750), muito antes do séc. XX. E não houve conquista militar — a incorporação foi diplomática.",
          },
        ],
      },
      {
        pergunta: "O Brasil faz fronteira com quantos países da América do Sul?",
        opcoes: [
          {
            texto: "10 países — todos da AS, exceto Chile e Equador.",
            correta: true,
            explicacao:
              "Perfeito. Argentina, Uruguai, Paraguai, Bolívia, Peru, Colômbia, Venezuela, Guiana, Suriname e Guiana Francesa. É o país com mais fronteiras terrestres do continente (15.719 km).",
          },
          {
            texto: "5 países — só os vizinhos imediatos do Sul.",
            correta: false,
            explicacao:
              "São mais que isso. A extensão territorial do Brasil (5º maior país do mundo) faz fronteira com quase toda a AS. Você só ficou com os vizinhos do sul do país.",
          },
          {
            texto: "13 países — inclusive Chile e Equador.",
            correta: false,
            explicacao:
              "Chile e Equador são justamente as exceções: NÃO fazem fronteira com o Brasil. A cordilheira dos Andes separa geograficamente esses dois países da massa continental brasileira.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Cada evento pertence a UMA fase da formação territorial do Brasil. Classifique corretamente.",
      categorias: [
        { id: "tordesilhas", titulo: "Tordesilhas (1494)", cor: "cyan" },
        { id: "bandeirantes", titulo: "Expansão Bandeirante", cor: "amber" },
        { id: "diplomacia", titulo: "Tratados & Diplomacia", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Divisão do mundo por uma linha imaginária a 370 léguas de Cabo Verde.", categoriaId: "tordesilhas" },
        { texto: "Fundação de Cuiabá (MT) e Goiás Velho (GO) em terras oficialmente espanholas.", categoriaId: "bandeirantes" },
        { texto: "Aplicação do princípio 'uti possidetis' (quem ocupa, é dono) em 1750.", categoriaId: "diplomacia" },
        { texto: "Ciclo do ouro empurrando colonos para Minas Gerais e Mato Grosso.", categoriaId: "bandeirantes" },
        { texto: "Compra do Acre da Bolívia em 1903 pelo Barão do Rio Branco.", categoriaId: "diplomacia" },
        { texto: "Papa Alexandre VI mediando a divisão entre Portugal e Espanha.", categoriaId: "tordesilhas" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Um historiador afirma que 'o Brasil deve mais à ação dos bandeirantes do que às caravelas de Cabral'. Do ponto de vista da formação territorial, essa afirmação faz sentido porque:",
      opcoes: [
        {
          texto:
            "Cabral garantiu apenas a faixa litorânea prevista em Tordesilhas; foi a expansão bandeirante que ocupou fisicamente o interior e permitiu que tratados posteriores (como Madri, 1750) legalizassem o Brasil continental.",
          correta: true,
        },
        {
          texto:
            "Cabral nunca chegou ao Brasil; foram os bandeirantes que descobriram o país 100 anos depois.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente análise. Cabral (1500) deu o marco simbólico da posse portuguesa sobre a faixa de Tordesilhas. Mas o Brasil que existe hoje — com Amazônia, Centro-Oeste e Sul incorporados — só se tornou possível porque bandeirantes, missões jesuíticas, pecuaristas e mineradores ocuparam o interior. Sem essa expansão física, a diplomacia não teria como negociar o 'uti possidetis' no Tratado de Madri.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Cartógrafo da Formação Nacional" },
  },

  // ============================================================
  // UNIDADE 2 — Dinâmica Demográfica e Transição
  // ============================================================
  {
    unidade: 2,
    slug: "unidade-2-dinamica-demografica",
    titulo: "Dinâmica Demográfica e Transição",
    habilidade: "EF07GE03 / EF07GE04",
    introducao_academica:
      "Se você olhar as fotos de família dos seus avós, provavelmente eles tinham 5, 6, 8 irmãos. Hoje, um casal típico tem 1 ou 2 filhos. O que aconteceu com o Brasil em apenas duas gerações? Vamos investigar a transição demográfica: o processo que transformou o país de 'jovem e explosivo' em 'adulto e envelhecendo'.",
    conteudo_pedagogico: {
      conceito_chave: "Transição Demográfica, Pirâmide Etária e Envelhecimento",
      texto_teorico:
        "A demografia estuda como uma população cresce, envelhece e se move. Três taxas explicam quase tudo: natalidade (nascimentos), mortalidade (mortes) e migração. Quando essas taxas mudam, a estrutura etária muda — e a pirâmide populacional revela o retrato do país.",
      etapas_teoricas: [
        {
          titulo: "Taxa de Natalidade e Fecundidade — quantos filhos por mulher",
          texto:
            "A taxa de fecundidade mede a média de filhos por mulher em idade fértil. Em 1960 o Brasil tinha ~6,3 filhos por mulher. Em 2022, essa taxa caiu para ~1,6 — abaixo do 'nível de reposição' (2,1 filhos, o mínimo para manter a população estável sem migração). É a queda mais rápida já registrada em um grande país.",
          exemplo_real:
            "A cidade de São Paulo tem hoje uma taxa de fecundidade menor que a do Japão (~1,4 filho por mulher). Se essa tendência continuar sem imigração, em 60-70 anos a população da capital começará a diminuir em números absolutos.",
          exemplos_extras: [
            "Os principais fatores da queda foram: urbanização (na cidade filhos custam mais e trabalham menos), acesso a métodos contraceptivos (pílula anticoncepcional generalizada a partir dos anos 70), entrada da mulher no mercado de trabalho e aumento da escolaridade feminina.",
            "Existe uma correlação universal: quanto mais anos de estudo da mulher, menor a fecundidade. Mulheres com ensino superior no Brasil têm em média 1,1 filho; mulheres sem instrução têm ~3,8. A escolarização feminina é o método contraceptivo mais eficaz já inventado.",
          ],
        },
        {
          titulo: "Taxa de Mortalidade e Expectativa de Vida",
          texto:
            "Enquanto a natalidade caía, a mortalidade também caía — mas por outro motivo: saneamento básico, vacinas, antibióticos, SUS. A expectativa de vida ao nascer no Brasil passou de ~44 anos (1940) para ~76 anos (2022). Vivemos 32 anos a mais que nossos bisavós.",
          exemplo_real:
            "A mortalidade infantil (mortes de bebês antes de 1 ano) despencou de ~150 por mil (1940) para ~13 por mil (2022). Isso significa que uma família de hoje quase não perde bebês — o que também explica por que se tem menos filhos: você não precisa 'ter muitos para garantir que alguns sobrevivam'.",
          exemplos_extras: [
            "O Nordeste sempre teve mortalidade infantil bem maior que o Sul-Sudeste. A implementação do Programa Bolsa Família + Estratégia Saúde da Família (a partir de 2003) reduziu essa desigualdade dramaticamente — foi um dos maiores êxitos da política social brasileira.",
            "Ao contrário do que muita gente pensa, viver mais NÃO significa 'mais idosos que jovens' automaticamente. O envelhecimento só acontece quando também caem os nascimentos. Se todo mundo vive muito E nascem muitas crianças, a pirâmide continua jovem (é o caso da Nigéria, por exemplo).",
          ],
        },
        {
          titulo: "Pirâmide Etária — o retrato do país em um gráfico",
          texto:
            "A pirâmide etária mostra homens (esquerda) e mulheres (direita) por faixa de idade. Países jovens têm formato de pirâmide (base larga, topo estreito — muitas crianças). Países envelhecidos têm formato de barril ou pirâmide invertida (base estreita, topo largo). O Brasil está no meio da transição: a base já está encolhendo e o topo, engordando.",
          exemplo_real:
            "Em 2000, a base da pirâmide brasileira (crianças de 0-9 anos) representava 22% da população. Em 2022, caiu para 12%. Já a faixa dos idosos (60+) passou de 8% para 15%. Ainda somos um país adulto, mas envelhecendo rápido — mais rápido do que Europa e Japão envelheceram.",
          exemplos_extras: [
            "Consequência prática: em 2000, o Brasil tinha ~10 trabalhadores para cada aposentado. Em 2060, será ~3 para cada. Isso pressiona a Previdência Social — foi essa a base 'demográfica' das reformas previdenciárias dos anos recentes.",
            "O 'bônus demográfico' é a janela em que a maioria da população está em idade produtiva (15-64 anos), com poucas crianças e poucos idosos. Brasil viveu o auge desse bônus em ~2010-2025. Depois disso, o peso dos idosos aumenta. Países que aproveitam o bônus (como Coreia do Sul fez) crescem economicamente; os que não aproveitam, envelhecem pobres.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Transformação da pirâmide etária brasileira",
        descricao:
          "Compare as pirâmides etárias do Brasil em 1960 (base larga, país jovem), 2000 (transição) e 2050 (envelhecido). A transição demográfica em uma imagem.",
        legenda:
          "Observe: a base encolhe (menos crianças nascendo) e o topo se alarga (mais idosos vivendo mais). O 'bônus demográfico' é o momento em que a maioria está no meio — em idade produtiva.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "Pergunte para seus avós quantos irmãos eles tinham. Depois, quantos irmãos seus pais têm. E, por fim, quantos irmãos você tem. Você acabou de fazer, com sua família, uma amostra da transição demográfica brasileira: geração dos avós ~5-8 filhos, geração dos pais ~3-4, geração atual ~1-2. É a curva do país inteiro reproduzida em uma árvore genealógica.",
      exemplo_visual:
        "Superposição das pirâmides etárias brasileiras de 1970, 2000 e 2020 — a base (crianças) encolhe visualmente enquanto o topo (idosos) se expande.",
      imagem_analise: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Um país com pirâmide etária de base LARGA e topo ESTREITO indica:",
        opcoes: [
          {
            texto: "População jovem, com alta natalidade e baixa expectativa de vida.",
            correta: true,
            explicacao:
              "Correto. Base larga = muitas crianças nascendo. Topo estreito = poucos chegam à velhice. É o padrão de países em fase inicial da transição demográfica, como muitos países africanos hoje.",
          },
          {
            texto: "População envelhecida, com baixa natalidade e alta expectativa de vida.",
            correta: false,
            explicacao:
              "Isso descreve o formato oposto: base estreita + topo largo (pirâmide invertida ou barril). É o caso de Japão, Itália e Alemanha.",
          },
          {
            texto: "Uma população estável, sem crescimento nem envelhecimento.",
            correta: false,
            explicacao:
              "População estável tem formato de retângulo — todas as faixas etárias com tamanho parecido. A base larga indica claramente crescimento populacional.",
          },
        ],
      },
      {
        pergunta: "Qual foi o PRINCIPAL fator para a queda da taxa de fecundidade brasileira (de ~6 filhos em 1960 para ~1,6 em 2022)?",
        opcoes: [
          {
            texto: "Um conjunto de fatores combinados: urbanização, entrada da mulher no mercado de trabalho, contraceptivos e aumento da escolaridade feminina.",
            correta: true,
            explicacao:
              "Perfeito. Não foi uma única causa: foi a soma dessas transformações. A queda foi tão rápida que o Brasil bateu recorde mundial de velocidade de transição demográfica.",
          },
          {
            texto: "Uma política de 'filho único' obrigatória, imposta pelo governo brasileiro.",
            correta: false,
            explicacao:
              "Isso foi a China (1979-2015), não o Brasil. A queda brasileira foi 100% voluntária, resultado de mudanças sociais e econômicas — nunca houve imposição legal.",
          },
          {
            texto: "Grandes epidemias que reduziram a fertilidade das mulheres.",
            correta: false,
            explicacao:
              "Não há registro de epidemias com efeito populacional dessa magnitude no Brasil. A queda foi comportamental (escolhas de casais), não biológica.",
          },
        ],
      },
      {
        pergunta: "O que é o 'bônus demográfico'?",
        opcoes: [
          {
            texto: "Uma janela histórica em que a maioria da população está em idade produtiva (15-64 anos), com poucas crianças e poucos idosos dependentes.",
            correta: true,
            explicacao:
              "Isso mesmo. É a oportunidade econômica única de um país: mais gente trabalhando, menos gente dependendo. Se investir em educação e emprego, cresce; se não investir, perde a janela e envelhece pobre.",
          },
          {
            texto: "Um benefício em dinheiro que o governo paga por cada filho que uma família tem.",
            correta: false,
            explicacao:
              "Você misturou com auxílios sociais (Bolsa Família, salário-família). Bônus demográfico é um conceito da demografia econômica, não um pagamento.",
          },
          {
            texto: "Uma fase em que o país tem MUITO mais idosos que jovens, garantindo estabilidade.",
            correta: false,
            explicacao:
              "É o contrário. 'Bônus' é ter maioria em idade produtiva. Um país com maioria idosa tem PESO demográfico (mais aposentadorias, mais gastos com saúde), não bônus.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada afirmação em: causa da QUEDA DA NATALIDADE, causa da QUEDA DA MORTALIDADE, ou consequência do ENVELHECIMENTO.",
      categorias: [
        { id: "natalidade", titulo: "↓ Natalidade", cor: "cyan" },
        { id: "mortalidade", titulo: "↓ Mortalidade", cor: "amber" },
        { id: "envelhecimento", titulo: "→ Envelhecimento", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Uso generalizado da pílula anticoncepcional a partir dos anos 70.", categoriaId: "natalidade" },
        { texto: "Ampliação da rede de saneamento básico e vacinação em massa.", categoriaId: "mortalidade" },
        { texto: "Aumento da pressão sobre o sistema previdenciário (menos ativos por aposentado).", categoriaId: "envelhecimento" },
        { texto: "Entrada da mulher no mercado de trabalho e aumento da escolaridade feminina.", categoriaId: "natalidade" },
        { texto: "Criação do SUS e da Estratégia Saúde da Família.", categoriaId: "mortalidade" },
        { texto: "Crescimento acelerado do setor de saúde, cuidadores e produtos para 3ª idade.", categoriaId: "envelhecimento" },
      ],
    },

    desafio_critico: {
      pergunta:
        "O Brasil viveu recentemente o auge do 'bônus demográfico'. Segundo economistas, se essa janela não for aproveitada com investimentos em educação, ciência e geração de empregos qualificados, o país corre o risco de:",
      opcoes: [
        {
          texto:
            "'Envelhecer antes de enriquecer' — chegar ao envelhecimento populacional sem ter alcançado altos níveis de produtividade e renda per capita, como fizeram Japão e Coreia do Sul durante seus bônus.",
          correta: true,
        },
        {
          texto:
            "Ter uma explosão populacional descontrolada, com fome generalizada e escassez de recursos naturais em todas as regiões.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Perfeito. A expressão 'envelhecer antes de enriquecer' resume a angústia demográfica brasileira. Coreia do Sul aproveitou seu bônus (~1960-2000) investindo pesado em educação e indústria de alto valor — hoje é país rico e envelhecido. O Brasil corre o risco de chegar à mesma pirâmide envelhecida (~2040-2060) mas sem a renda que a Coreia acumulou. A janela existe e é matemática — o que fazemos dentro dela é decisão política.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Analista Demográfico Nacional" },
  },

  // ============================================================
  // UNIDADE 3 — Industrialização, Urbanização e Macrocefalia
  // ============================================================
  {
    unidade: 3,
    slug: "unidade-3-industrializacao-urbana",
    titulo: "Industrialização, Urbanização e Macrocefalia",
    habilidade: "EF07GE05 / EF07GE08",
    introducao_academica:
      "Em 1940, 70% dos brasileiros vivia no campo. Em 2022, mais de 85% mora em cidades. Nunca na história um país transferiu tanta gente para a cidade em tão pouco tempo. Vamos entender como a indústria mudou o Brasil — e por que essa migração criou 'cidades gigantes' que engolem tudo em volta.",
    conteudo_pedagogico: {
      conceito_chave: "Fases da Industrialização Brasileira, Êxodo Rural e Rede Urbana",
      texto_teorico:
        "Industrialização e urbanização andam juntas: a indústria precisa de mão-de-obra concentrada, então puxa gente do campo para a cidade. O Brasil viveu esse processo em três grandes fases, e o resultado foi uma rede urbana muito desigual, dominada por poucas metrópoles gigantes.",
      etapas_teoricas: [
        {
          titulo: "Fase 1: Substituição de Importações (1930-1955)",
          texto:
            "Até 1930, o Brasil era essencialmente agrário — exportava café e importava tudo o que consumia. Com a crise de 1929 e as guerras mundiais, importar ficou impossível. O governo Vargas começou a produzir aqui o que antes vinha de fora: tecidos, cimento, aço, açúcar refinado. Foi o começo da indústria de base brasileira, concentrada em São Paulo e Rio de Janeiro.",
          exemplo_real:
            "A Companhia Siderúrgica Nacional (CSN), inaugurada em 1946 em Volta Redonda (RJ), foi a primeira grande siderúrgica do país. Ela produzia o aço que antes tinha que ser importado da Inglaterra e dos EUA — permitindo a construção de fábricas, prédios e infraestrutura brasileira com insumos nacionais.",
          exemplos_extras: [
            "A concentração em SP e RJ não foi acaso: era onde havia capital acumulado do café, mão-de-obra imigrante (italianos, japoneses), infraestrutura de portos e ferrovias. A partir dali, o Sudeste virou o 'centro industrial' e as demais regiões, periferia econômica.",
            "O modelo de substituição de importações funcionou bem no início, mas gerou dependência: a indústria brasileira precisava de máquinas importadas para funcionar. Sempre que faltavam dólares, a indústria travava. Esse foi um dos gatilhos das crises dos anos 80.",
          ],
        },
        {
          titulo: "Fase 2: Internacionalização (JK e Ditadura, 1956-1980)",
          texto:
            "Com o Plano de Metas de JK ('50 anos em 5'), o Brasil abriu as portas para multinacionais: Volkswagen, Ford, GM, Willys se instalaram no ABC paulista para produzir carros. Depois, na ditadura militar (1964-85), veio o 'milagre econômico' com megaprojetos: Transamazônica, hidrelétricas (Itaipu), usinas nucleares. A indústria explodiu — e o êxodo rural também.",
          exemplo_real:
            "Entre 1960 e 1980, o Brasil foi de 45% para 68% urbano. Em apenas 20 anos, cerca de 27 milhões de pessoas deixaram o campo e foram para as cidades. É como se toda a população da Argentina de hoje tivesse migrado internamente. A cidade de São Paulo dobrou de tamanho.",
          exemplos_extras: [
            "O ABC Paulista (Santo André, São Bernardo, São Caetano) virou o coração industrial: onde as multinacionais montaram fábricas de automóveis. Essa região também foi o berço do movimento sindical moderno brasileiro (Lula começou ali como líder metalúrgico nos anos 70).",
            "A explosão urbana sem planejamento gerou o fenômeno das favelas em larga escala. Rocinha, Complexo do Alemão, Paraisópolis, Heliópolis — todas cresceram nesse período, abrigando quem migrou do campo mas não achou moradia nem emprego formal na cidade.",
          ],
        },
        {
          titulo: "Fase 3: Reestruturação e Macrocefalia Urbana (1980-hoje)",
          texto:
            "A partir dos anos 80, com a crise e a abertura comercial, muitas fábricas fecharam ou se mudaram. A indústria se desconcentrou (para o Sul e o interior de SP), mas o inchaço urbano continuou. Hoje o Brasil sofre de 'macrocefalia urbana': poucas metrópoles gigantes (SP, RJ, BH, Salvador, Fortaleza) concentram população, empregos e poder — enquanto milhares de cidades pequenas dependem delas.",
          exemplo_real:
            "A Região Metropolitana de São Paulo tem ~22 milhões de habitantes — quase 10% de todo o Brasil concentrado em uma única mancha urbana. Só ela tem mais gente que Portugal, Grécia ou Chile inteiros. É a macrocefalia: uma 'cabeça' urbana enorme em relação ao 'corpo' do país.",
          exemplos_extras: [
            "Cidades médias vêm crescendo mais rápido que as metrópoles: Ribeirão Preto, Campinas, Uberlândia, Joinville. Esse processo se chama 'desconcentração industrial' — empresas fogem do custo altíssimo das capitais e vão para cidades com boa infraestrutura mas terra e mão-de-obra mais baratas.",
            "A macrocefalia gera 'cidades-dormitório': lugares como Ferraz de Vasconcelos, Itapevi ou Franco da Rocha existem quase só para abrigar quem trabalha em São Paulo. As pessoas passam 3-4 horas por dia no transporte — problema urbano típico de rede desequilibrada.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Evolução da população urbana brasileira",
        descricao:
          "Gráfico da porcentagem urbana × rural entre 1940 e 2022. Acompanhe a inversão histórica: em 1940 éramos 70% rurais; hoje somos 85% urbanos.",
        legenda:
          "Observe: o ponto de virada ocorreu por volta de 1970, coincidindo com o 'milagre econômico' da ditadura militar e o auge da industrialização multinacional.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "Pegue uma foto de satélite atual da cidade de São Paulo no Google Earth. Você vê um MAR de casas indo até onde os olhos alcançam — Guarulhos, Osasco, Santo André, Diadema, Mogi das Cruzes tudo grudado. Agora imagine que em 1940 quase nada disso existia: eram fazendas de café, sítios, matas. Toda essa mancha cinza foi construída em 80 anos, empurrada pela indústria e pelo êxodo rural. É a industrialização brasileira materializada em concreto.",
      exemplo_visual:
        "Mapa mostrando as principais metrópoles brasileiras (SP, RJ, BH, Salvador, Fortaleza, Recife, Porto Alegre, Curitiba) e as áreas metropolitanas ao seu redor — evidenciando a macrocefalia urbana.",
      imagem_analise: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "O que caracteriza a política de 'substituição de importações' que Vargas implementou nos anos 1930-40?",
        opcoes: [
          {
            texto: "Produzir internamente no Brasil os produtos industriais que antes eram importados (tecidos, aço, cimento).",
            correta: true,
            explicacao:
              "Correto. A crise de 1929 e a guerra tornaram impossível continuar importando. O Brasil foi 'forçado' a se industrializar para substituir o que faltava. Vargas usou o Estado (CSN, Petrobras depois) para bancar essa transição.",
          },
          {
            texto: "Exportar café em maior quantidade para pagar as importações industriais.",
            correta: false,
            explicacao:
              "Isso é o modelo agroexportador ANTERIOR (1889-1930). A substituição de importações fez EXATAMENTE o contrário: parou de depender das exportações de café e começou a fabricar internamente.",
          },
          {
            texto: "Privatizar todas as indústrias estatais e abrir para multinacionais.",
            correta: false,
            explicacao:
              "Isso descreve políticas dos anos 1990 (Collor, FHC) — não a era Vargas. Nos anos 30-50, Vargas fez o oposto: criou estatais como CSN, Petrobras e Vale do Rio Doce.",
          },
        ],
      },
      {
        pergunta: "O que significa 'macrocefalia urbana' no contexto brasileiro?",
        opcoes: [
          {
            texto: "Poucas metrópoles gigantes concentram população e riqueza, enquanto milhares de cidades pequenas ficam economicamente dependentes delas.",
            correta: true,
            explicacao:
              "Perfeito. 'Macro' (grande) + 'cefalia' (cabeça): uma cabeça urbana desproporcional ao corpo do país. É o caso de SP, que sozinha tem quase 10% da população nacional.",
          },
          {
            texto: "Uma doença que atinge quem mora em cidades muito grandes por causa da poluição.",
            correta: false,
            explicacao:
              "Cuidado com a palavra: 'macrocefalia' aqui é uma metáfora urbana, não um diagnóstico médico. Vem do grego macro (grande) + cefalia (cabeça).",
          },
          {
            texto: "O crescimento equilibrado de cidades pequenas e médias no interior do Brasil.",
            correta: false,
            explicacao:
              "Isso é o OPOSTO de macrocefalia. Crescimento equilibrado da rede urbana é o que Brasil ideal precisaria — mas não é o que temos hoje.",
          },
        ],
      },
      {
        pergunta: "Por que a industrialização brasileira se concentrou em São Paulo e Rio de Janeiro nas primeiras décadas?",
        opcoes: [
          {
            texto: "Já havia ali capital acumulado do café, mão-de-obra imigrante disponível e infraestrutura de portos e ferrovias.",
            correta: true,
            explicacao:
              "Isso mesmo. A indústria não surge do zero: precisa de dinheiro, gente e logística. SP e RJ tinham os três, herdados do ciclo cafeeiro. Nordeste, por exemplo, não tinha nem capital nem ferrovias equivalentes.",
          },
          {
            texto: "Porque o governo militar dos anos 60 obrigou as fábricas a se instalarem no Sudeste.",
            correta: false,
            explicacao:
              "A concentração começou MUITO antes dos militares (desde 1930, com Vargas). E não foi por imposição — foi por acúmulo histórico de fatores econômicos. A ditadura, aliás, tentou desconcentrar (via SUDENE, Zona Franca de Manaus).",
          },
          {
            texto: "Porque só em SP e RJ existiam matérias-primas industriais como ferro e petróleo.",
            correta: false,
            explicacao:
              "Ao contrário: as principais minas de ferro estão em Minas Gerais (Carajás e Quadrilátero Ferrífero); petróleo, no Rio, mas também Bahia e mais recentemente pré-sal. A concentração foi por CAPITAL e INFRAESTRUTURA, não por matéria-prima local.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada fato em UMA das três fases da industrialização brasileira.",
      categorias: [
        { id: "vargas", titulo: "Fase 1: Vargas (1930-55)", cor: "cyan" },
        { id: "jk_militar", titulo: "Fase 2: JK/Militar (1956-80)", cor: "amber" },
        { id: "atual", titulo: "Fase 3: Reestruturação (80-hoje)", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Instalação da Companhia Siderúrgica Nacional (CSN) em Volta Redonda.", categoriaId: "vargas" },
        { texto: "Chegada da Volkswagen, Ford e GM ao ABC Paulista.", categoriaId: "jk_militar" },
        { texto: "Construção da hidrelétrica de Itaipu e da Transamazônica.", categoriaId: "jk_militar" },
        { texto: "Fechamento de fábricas e desconcentração industrial para o interior.", categoriaId: "atual" },
        { texto: "Criação da Petrobras como estatal estratégica.", categoriaId: "vargas" },
        { texto: "Crescimento de cidades médias como Campinas, Joinville e Uberlândia.", categoriaId: "atual" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Um urbanista analisa a Região Metropolitana de São Paulo e conclui que 'cidades como Ferraz de Vasconcelos, Franco da Rocha e Itapevi são cidades-dormitório'. O que essa expressão descreve como problema urbano estrutural?",
      opcoes: [
        {
          texto:
            "Municípios que concentram moradia mas não geram empregos: os moradores dependem de deslocamentos longos e diários (2-4 horas) até a metrópole central para trabalhar, sobrecarregando o transporte e reduzindo a qualidade de vida.",
          correta: true,
        },
        {
          texto:
            "Cidades onde a maioria da população passa o dia dormindo por causa do calor extremo típico do interior paulista.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente. 'Cidade-dormitório' é um sintoma clássico de rede urbana desequilibrada. A macrocefalia cria uma metrópole central hipertrofiada (SP) que acumula empregos e serviços — enquanto seu entorno vira uma coroa de cidades sem economia própria. As pessoas 'só voltam pra dormir'. É um problema de PLANEJAMENTO REGIONAL, não individual: precisaria desconcentrar empregos, melhorar transporte de massa e criar centralidades secundárias.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Analista Urbano-Industrial" },
  },

  // ============================================================
  // UNIDADE 4 — Complexo Geoeconômico do Centro-Sul
  // ============================================================
  {
    unidade: 4,
    slug: "unidade-4-complexo-centro-sul",
    titulo: "O Complexo Geoeconômico do Centro-Sul",
    habilidade: "EF07GE09 / EF07GE10",
    introducao_academica:
      "Se o Brasil fosse uma empresa, o Centro-Sul seria seu motor: concentra ~75% do PIB, quase toda a indústria pesada, o agronegócio de alta tecnologia e as principais universidades. Vamos entender como uma região que ocupa cerca de 25% do território virou a locomotiva econômica do país.",
    conteudo_pedagogico: {
      conceito_chave: "Complexos Regionais, Agronegócio Tecnificado e Rede Logística",
      texto_teorico:
        "A divisão regional oficial do IBGE (Norte, Nordeste, Sudeste, Sul, CO) é política-administrativa. Mas geografia econômica usa outro recorte: os TRÊS COMPLEXOS REGIONAIS (Centro-Sul, Nordeste, Amazônia), definidos pelas dinâmicas produtivas. O Centro-Sul reúne Sudeste, Sul e parte do Centro-Oeste — é o coração industrial, tecnológico e do agronegócio.",
      etapas_teoricas: [
        {
          titulo: "Sudeste — o coração industrial e financeiro",
          texto:
            "SP, RJ, MG e ES formam a região mais rica do Brasil. São Paulo é o polo industrial, financeiro e tecnológico (Bolsa B3, sede das grandes empresas, USP, Unicamp). Rio concentra a indústria naval e petrolífera (pré-sal). Minas é o maior produtor de ferro e leite. Espírito Santo tem porto de exportação (Tubarão) e siderurgia.",
          exemplo_real:
            "A cidade de São Paulo sozinha responde por ~10% do PIB brasileiro. Se fosse um país, teria PIB maior que o de Portugal, Grécia ou Hungria. Concentra a maior parte das sedes das 500 maiores empresas do Brasil.",
          exemplos_extras: [
            "O 'Vale do Silício brasileiro' fica em Campinas + São Carlos + São José dos Campos (interior de SP): universidades federais e estaduais (Unicamp, USP São Carlos, ITA), Embrapa Digital, empresas de tecnologia e a Embraer (3ª maior fabricante de aviões do mundo).",
            "MG tem uma dupla economia: no Sul e Triângulo, agroindústria moderna (café, leite, açúcar); no Norte e Vale do Jequitinhonha, ainda enfrenta pobreza semelhante à do Nordeste. Um mesmo estado com dois Brasis dentro.",
          ],
        },
        {
          titulo: "Sul — agroindústria tecnificada e pequena propriedade",
          texto:
            "PR, SC e RS formam a região mais desenvolvida em indicadores sociais (IDH). Diferente do Sudeste, o Sul tem estrutura fundiária mais equilibrada: predominam pequenas e médias propriedades familiares, herança da colonização por imigrantes europeus (alemães, italianos, poloneses). A indústria é forte (Curitiba tem polo automotivo, SC tem eletrodomésticos e tecidos, RS tem calçados).",
          exemplo_real:
            "Santa Catarina tem PIB per capita entre os mais altos do Brasil e desemprego historicamente baixo. O modelo de pequenas cidades industriais interligadas (Joinville, Blumenau, Chapecó, Criciúma) é o oposto da macrocefalia paulista.",
          exemplos_extras: [
            "O RS é o maior produtor de arroz e soja da região Sul, e cria a maior parte da carne bovina de qualidade do país. Sua economia sofre com secas cíclicas ligadas ao fenômeno La Niña — 2022-24 teve prejuízos bilionários na lavoura.",
            "O Paraná abriga o polo automotivo de Curitiba (Renault, Volvo, Audi) e também é o maior produtor nacional de frango. A hidrelétrica de Itaipu (fronteira com o Paraguai) gera ~10% da energia elétrica consumida no Brasil.",
          ],
        },
        {
          titulo: "Centro-Oeste — a nova fronteira agrícola tecnificada",
          texto:
            "GO, MT e MS + DF formam a região que cresceu MAIS nas últimas décadas. O Cerrado, antes visto como 'terra pobre', foi conquistado pela agropecuária moderna com uso intensivo de correção de solo (calcário), sementes melhoradas (Embrapa) e mecanização. Hoje MT é o maior produtor mundial de soja. Brasília, capital planejada, é o centro político.",
          exemplo_real:
            "Mato Grosso sozinho produz mais soja que a Argentina inteira. Cidades como Sorriso (MT) — que quase ninguém do Sudeste conhece — movimentam bilhões de dólares em commodities. O agronegócio do CO exporta majoritariamente para a China.",
          exemplos_extras: [
            "A Embrapa (Empresa Brasileira de Pesquisa Agropecuária) foi decisiva: desenvolveu variedades de soja adaptadas ao clima tropical do Cerrado nos anos 70-80. Sem essa pesquisa, o Brasil ainda seria importador de grãos.",
            "A expansão da fronteira agrícola no Cerrado tem custo ambiental alto: o bioma perdeu ~50% da vegetação original. O 'MATOPIBA' (fronteira entre MA, TO, PI e BA) é a nova zona de avanço da soja — hoje o desmatamento mais acelerado é ali, não na Amazônia.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Mapa do complexo Centro-Sul brasileiro",
        descricao:
          "Visualize a integração produtiva do Sudeste (indústria+finanças), Sul (agroindústria familiar) e Centro-Oeste (agronegócio de larga escala) — juntos formando ~75% do PIB brasileiro.",
        legenda:
          "Observe: essa não é apenas uma região rica; é uma rede integrada onde a soja do MT vira ração para o frango do PR, que é exportado pelo porto de Paranaguá.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "Abra o rótulo de qualquer produto industrializado brasileiro em uma feira ou mercado: leite Nestlé, biscoito Bauducco, cerveja Ambev, sabonete Natura, carro Volkswagen. Quase 100% deles têm fábrica ou sede social no Centro-Sul. Depois abra o app de agronegócio ou o noticiário: soja de MT, frango do PR, açúcar de SP, café de MG. É o mesmo Complexo Centro-Sul funcionando dos dois lados — indústria e agro integrados.",
      exemplo_visual:
        "Fluxograma da integração produtiva Centro-Sul: fazendas de soja do MT → esmagadoras de MG → indústria de rações no interior de SP → granjas de frango no PR → porto de Paranaguá → exportação.",
      imagem_analise: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Por que Mato Grosso, que era considerado 'sertão pobre' nos anos 60, virou o maior produtor mundial de soja em algumas décadas?",
        opcoes: [
          {
            texto: "A combinação de terra barata, clima favorável, mecanização e pesquisa agropecuária da Embrapa (variedades de soja para o Cerrado) transformou a região.",
            correta: true,
            explicacao:
              "Correto. Não foi 'só clima' ou 'só tecnologia' — foi a soma. A Embrapa desenvolveu soja tropical, o calcário corrigiu o solo ácido do Cerrado, e a mecanização em larga escala tornou tudo viável economicamente.",
          },
          {
            texto: "Uma decisão política do governo Vargas nos anos 40 obrigou os produtores a plantarem soja em MT.",
            correta: false,
            explicacao:
              "A soja em MT explodiu nos anos 80-90, décadas após Vargas. Também não houve imposição legal: a soja migrou para lá porque terra era barata e o clima+tecnologia permitiam produtividade recorde.",
          },
          {
            texto: "Porque o Cerrado é naturalmente muito fértil, mais que a Amazônia e o Nordeste.",
            correta: false,
            explicacao:
              "Ao contrário: o solo do Cerrado é NATURALMENTE ácido e pobre. Ele só virou produtivo depois da correção com calcário e adubação intensiva. Sem a tecnologia agrícola, seria improdutivo.",
          },
        ],
      },
      {
        pergunta: "Qual característica diferencia a estrutura fundiária do SUL da do resto do Brasil?",
        opcoes: [
          {
            texto: "Predomínio de pequenas e médias propriedades familiares, herança da colonização por imigrantes europeus (alemães, italianos, poloneses).",
            correta: true,
            explicacao:
              "Perfeito. Enquanto o Nordeste tem latifúndios canavieiros e o CO tem grandes fazendas de soja, o Sul se caracteriza por policultura em propriedades familiares — o que explica em parte seus altos IDHs.",
          },
          {
            texto: "Predomínio de latifúndios monocultores de cana-de-açúcar como no Nordeste.",
            correta: false,
            explicacao:
              "Essa é a estrutura do Nordeste litorâneo (Zona da Mata). O Sul tem exatamente o modelo OPOSTO: propriedades pequenas, com policultura diversificada.",
          },
          {
            texto: "Ausência total de indústria, sendo a economia sulista 100% agrícola.",
            correta: false,
            explicacao:
              "O Sul é uma das regiões MAIS industrializadas do país: Curitiba tem polo automotivo (Renault, Volvo), Joinville faz eletrodomésticos (WEG, Consul), Novo Hamburgo tem calçados. Agroindústria integrada.",
          },
        ],
      },
      {
        pergunta: "O 'Vale do Silício brasileiro', que concentra as principais empresas de tecnologia e centros de pesquisa, fica em:",
        opcoes: [
          {
            texto: "Interior de SP: eixo Campinas–São Carlos–São José dos Campos (Unicamp, USP, ITA, Embraer).",
            correta: true,
            explicacao:
              "Isso mesmo. É o polo científico-tecnológico mais forte do Brasil, formado por universidades públicas de excelência + Embrapa + Embraer + institutos de pesquisa. Rende também um ecossistema forte de startups.",
          },
          {
            texto: "Zona Franca de Manaus (AM), único polo tecnológico industrial do país.",
            correta: false,
            explicacao:
              "A Zona Franca de Manaus é polo de MONTAGEM industrial (celulares, TVs, motos), não de pesquisa/desenvolvimento. É diferente de um 'Vale do Silício', que exige universidades + P&D + startups.",
          },
          {
            texto: "Brasília (DF), por ser a capital e concentrar todas as decisões estratégicas.",
            correta: false,
            explicacao:
              "Brasília é o centro POLÍTICO, não tecnológico. O DF tem UnB e alguns institutos federais, mas não tem a escala industrial e universitária do interior paulista.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Cada característica pertence a UMA das três sub-regiões do complexo Centro-Sul. Classifique.",
      categorias: [
        { id: "sudeste", titulo: "Sudeste", cor: "cyan" },
        { id: "sul", titulo: "Sul", cor: "amber" },
        { id: "centro_oeste", titulo: "Centro-Oeste", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Maior polo financeiro do país, com a bolsa B3.", categoriaId: "sudeste" },
        { texto: "Maior produtor mundial de soja, com forte presença chinesa nas exportações.", categoriaId: "centro_oeste" },
        { texto: "Colonização por imigrantes europeus (alemães, italianos), estrutura fundiária familiar.", categoriaId: "sul" },
        { texto: "Sede da Embraer e da FIESP.", categoriaId: "sudeste" },
        { texto: "Cerrado tecnificado com uso intensivo de calcário e sementes da Embrapa.", categoriaId: "centro_oeste" },
        { texto: "Maior produtor de frango do país, com polo em Chapecó (SC).", categoriaId: "sul" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Um economista descreve o Complexo Centro-Sul como 'uma rede integrada onde a soja de MT vira ração para o frango do PR, que é exportado pelo porto de Paranaguá'. Que conceito geográfico está sendo aplicado nessa descrição?",
      opcoes: [
        {
          texto:
            "Integração produtiva regional — a divisão do trabalho entre sub-regiões complementares, com fluxos de matéria-prima, processamento, distribuição e exportação interconectados via infraestrutura logística.",
          correta: true,
        },
        {
          texto:
            "Autossuficiência regional — cada sub-região produz internamente tudo o que consome, sem depender das outras.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente. Integração produtiva regional é justamente o oposto de autossuficiência: as sub-regiões se ESPECIALIZAM em uma parte da cadeia (MT produz grão, PR processa em ração e cria frango, SP financia e exporta pelo porto de Paranaguá). Essa integração explica por que o Centro-Sul é tão poderoso: não é a soma de três regiões — é um sistema articulado, apoiado por rodovias, ferrovias e portos.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Analista do Motor Econômico Nacional" },
  },

  // ============================================================
  // UNIDADE 5 — Complexo do Nordeste e Sub-regiões
  // ============================================================
  {
    unidade: 5,
    slug: "unidade-5-complexo-nordeste",
    titulo: "O Complexo do Nordeste e as Quatro Sub-regiões",
    habilidade: "EF07GE10 / EF07GE11",
    introducao_academica:
      "'O Nordeste' não existe como bloco único — é uma colcha de retalhos com clima, economia e paisagens muito diferentes entre si. Vamos desmontar o estereótipo do 'sertão seco' e conhecer as quatro sub-regiões nordestinas: Zona da Mata, Agreste, Sertão e Meio-Norte.",
    conteudo_pedagogico: {
      conceito_chave: "As Quatro Sub-regiões do Nordeste (Zona da Mata, Agreste, Sertão, Meio-Norte)",
      texto_teorico:
        "O Nordeste tem 9 estados e cerca de 27% da população brasileira, mas ocupa apenas ~14% do PIB — uma das grandes desigualdades regionais do país. Dentro dele, no entanto, há realidades muito distintas. A divisão em sub-regiões (baseada em clima e vegetação) ajuda a entender essa heterogeneidade.",
      etapas_teoricas: [
        {
          titulo: "Zona da Mata — o Nordeste do açúcar e das capitais",
          texto:
            "Faixa litorânea úmida que vai do RN à BA. Clima tropical úmido, chuvas regulares. Foi a primeira área colonizada (séc. XVI) pelos portugueses para produção de açúcar com mão-de-obra escrava africana. Hoje concentra as capitais nordestinas (Salvador, Recife, Maceió, João Pessoa, Natal) e a maior parte da indústria e do turismo.",
          exemplo_real:
            "As praias mais famosas do Nordeste — Porto de Galinhas, Praia do Forte, Jericoacoara, Fernando de Noronha — estão na Zona da Mata ou próximas dela. É a sub-região que mais movimenta turismo e onde vivem quase todos os habitantes urbanos nordestinos.",
          exemplos_extras: [
            "Foi na Zona da Mata que o Brasil colonial montou os grandes engenhos de açúcar (séc. XVI-XVII). Essa herança fundiária persiste: até hoje há concentração de terra em grandes propriedades canavieiras, especialmente em PE e AL.",
            "Recife é a metrópole tradicional; Salvador foi a primeira capital do Brasil colonial. Hoje, o polo industrial mais dinâmico da Zona da Mata é o Complexo de Suape (PE) — refinaria da Petrobras, estaleiros e porto.",
          ],
        },
        {
          titulo: "Agreste — a zona de transição",
          texto:
            "Faixa estreita entre a Zona da Mata úmida e o Sertão seco. Clima e vegetação intermediários. É a sub-região da agricultura familiar diversificada e das feiras livres nordestinas — Caruaru (PE), Feira de Santana (BA), Campina Grande (PB). Também tem polos industriais surpreendentes.",
          exemplo_real:
            "Toritama (PE), no Agreste pernambucano, é conhecida como a 'capital brasileira do jeans': produz cerca de 20% de toda a calça jeans consumida no país. É uma economia local de dezenas de milhares de pequenas confecções — algo que ninguém imagina que existe no 'Nordeste rural'.",
          exemplos_extras: [
            "O Agreste tem clima mais ameno que o Sertão e mais seco que a Zona da Mata. Isso favorece a bovinocultura leiteira e a criação de aves — é uma das principais bacias leiteiras do NE.",
            "Culturalmente, o Agreste é o berço do forró e da música nordestina moderna. A festa de São João de Campina Grande (PB) e Caruaru (PE) é considerada a maior festa junina do mundo, movimentando milhões em turismo.",
          ],
        },
        {
          titulo: "Sertão — o coração semiárido",
          texto:
            "A maior sub-região em extensão. Clima semiárido, com chuvas concentradas em 3-4 meses e longa estiagem. Vegetação: caatinga. Historicamente ligado à pecuária extensiva e à agricultura de subsistência (feijão, milho, mandioca). Foi a região mais castigada pelas grandes secas cíclicas, que impulsionaram o êxodo para o Sudeste.",
          exemplo_real:
            "A transposição do Rio São Francisco (obra iniciada em 2007) leva água para o Sertão de PE, PB, CE e RN. É a maior obra hídrica da América Latina, tentando resolver problemas de abastecimento agravados por secas cada vez mais intensas.",
          exemplos_extras: [
            "O Sertão NÃO é 'terra improdutiva'. A fruticultura irrigada no Vale do São Francisco (Petrolina-PE / Juazeiro-BA) produz uvas, mangas e melões de altíssima qualidade exportados para a Europa. Prova que com água e tecnologia, o semiárido vira polo de exportação.",
            "A caatinga é o único bioma exclusivamente brasileiro. Adaptou-se ao clima seco: árvores baixas que perdem folhas na seca (caducifólias), cactos, xerófitas. Muitas espécies só existem ali — mandacaru, umbuzeiro, juazeiro.",
          ],
        },
        {
          titulo: "Meio-Norte — a transição para a Amazônia",
          texto:
            "Formado principalmente por Maranhão e Piauí (parte oeste). É a zona de transição entre o Sertão semiárido e a Amazônia úmida. Vegetação: mata dos cocais (com palmeiras como o babaçu e a carnaúba). Economia tradicionalmente baseada no extrativismo do babaçu e, mais recentemente, no avanço da fronteira agrícola (soja).",
          exemplo_real:
            "O sul do MA e o sudoeste do PI fazem parte do 'MATOPIBA' — a nova fronteira agrícola brasileira (Maranhão + Tocantins + Piauí + Bahia). Aqui é onde a soja está avançando mais rápido hoje, com desmatamento acelerado do Cerrado e da mata dos cocais.",
            exemplos_extras: [
              "As quebradeiras de coco babaçu são um símbolo do Meio-Norte: mulheres que extraem o coco para vender óleo, sabão e artesanato. Enfrentam conflitos com fazendeiros de soja que querem desmatar as áreas de babaçuais.",
              "Teresina (PI) e São Luís (MA) são as capitais do Meio-Norte. São Luís tem o Complexo Portuário de Itaqui, um dos mais importantes do país para exportação de soja e minério de ferro (vindo de Carajás pela Estrada de Ferro Carajás).",
            ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Mapa das quatro sub-regiões do Nordeste",
        descricao:
          "Visualize as faixas paralelas ao litoral: Zona da Mata (úmida), Agreste (transição), Sertão (semiárido) e Meio-Norte (transição para a Amazônia). Cada sub-região com clima, economia e história distintos.",
        legenda:
          "Observe: o Nordeste não é homogêneo. As sub-regiões se distribuem em faixas do litoral para o interior, seguindo o gradiente de umidade. Cada uma tem sua vocação econômica.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "Compare Salvador (Zona da Mata) com Petrolina (Sertão) no Google Maps: cerca de 500 km em linha reta, mas realidades totalmente diferentes. Salvador tem florestas úmidas, praias, chuvas o ano inteiro. Petrolina tem caatinga seca, vinhedos irrigados pelo Rio São Francisco, e chuvas concentradas em 3-4 meses. Duas 'Nordestes' completamente distintos dentro do mesmo bloco regional — sem entender essa diversidade, é impossível entender o Nordeste real.",
      exemplo_visual:
        "Faixas paralelas ao litoral nordestino mostrando o gradiente úmido→seco: Zona da Mata (verde escuro) → Agreste (verde claro) → Sertão (marrom) → Meio-Norte (transição verde-marrom).",
      imagem_analise: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "O estereótipo do 'Nordeste = sertão seco' é geograficamente incorreto porque:",
        opcoes: [
          {
            texto: "O Nordeste tem 4 sub-regiões distintas (Zona da Mata úmida, Agreste, Sertão semiárido e Meio-Norte), com climas e economias diferentes entre si.",
            correta: true,
            explicacao:
              "Correto. O Sertão é apenas UMA das quatro sub-regiões. As capitais e o turismo estão na Zona da Mata, que é úmida e verde. Generalizar 'Nordeste=sertão' apaga essa diversidade.",
          },
          {
            texto: "O Nordeste inteiro tem clima semiárido, mas com precipitação variável entre estados.",
            correta: false,
            explicacao:
              "Não. A Zona da Mata (RN, PB, PE, AL, SE, BA litorânea) tem clima ÚMIDO com chuvas abundantes o ano inteiro. Só o Sertão é semiárido.",
          },
          {
            texto: "Não há mais seca no Nordeste desde a transposição do São Francisco.",
            correta: false,
            explicacao:
              "A transposição ajuda regiões específicas, mas o problema da seca no Sertão continua. E a questão original não é sobre seca, é sobre a heterogeneidade da região.",
          },
        ],
      },
      {
        pergunta: "Toritama (PE) é chamada de 'capital brasileira do jeans' porque:",
        opcoes: [
          {
            texto: "Concentra milhares de pequenas confecções que produzem ~20% da calça jeans consumida no Brasil.",
            correta: true,
            explicacao:
              "Exato. É um polo industrial descentralizado no Agreste pernambucano, feito por micro e pequenas empresas familiares. Prova que existe indústria dinâmica no interior do NE, longe do estereótipo agrícola.",
          },
          {
            texto: "É onde ficam as sedes das grandes marcas internacionais como Levi's e Diesel.",
            correta: false,
            explicacao:
              "As marcas internacionais têm sede no exterior ou em SP. Toritama é polo de PRODUÇÃO em massa por micro empresas, não sede de marcas globais.",
          },
          {
            texto: "Foi a primeira cidade do mundo a fabricar jeans no séc. XIX.",
            correta: false,
            explicacao:
              "O jeans foi inventado nos EUA (Levi Strauss, 1873). Toritama virou polo produtivo brasileiro só no final do séc. XX, muito depois.",
          },
        ],
      },
      {
        pergunta: "A fruticultura irrigada no Vale do São Francisco (Petrolina-PE / Juazeiro-BA) desmonta que preconceito sobre o Sertão?",
        opcoes: [
          {
            texto: "Desmonta a ideia de que 'Sertão = terra improdutiva', mostrando que com irrigação e tecnologia é possível exportar uvas e mangas de alta qualidade para a Europa.",
            correta: true,
            explicacao:
              "Perfeito. O Sertão não é improdutivo — é limitado pela ÁGUA. Quando se resolve a escassez hídrica, a região se torna altamente produtiva. Petrolina/Juazeiro é referência mundial em fruticultura tropical.",
          },
          {
            texto: "Desmonta a ideia de que 'chove pouco no Sertão' — na verdade, chove muito por causa da irrigação.",
            correta: false,
            explicacao:
              "Confusão. Irrigação NÃO é chuva; é bombeamento de água do rio (São Francisco) para a lavoura. Continua chovendo pouco naturalmente no Sertão.",
          },
          {
            texto: "Desmonta a ideia de que o Nordeste é a região mais pobre do Brasil.",
            correta: false,
            explicacao:
              "Um polo de fruticultura não muda a estatística regional. O NE continua sendo a região com maiores desafios sociais. O que a fruticultura mostra é que o SERTÃO tem POTENCIAL — não que o NE já não é pobre.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Cada elemento pertence a UMA das quatro sub-regiões nordestinas. Classifique.",
      categorias: [
        { id: "mata", titulo: "Zona da Mata", cor: "emerald" },
        { id: "agreste", titulo: "Agreste", cor: "amber" },
        { id: "sertao", titulo: "Sertão", cor: "cyan" },
        { id: "meio_norte", titulo: "Meio-Norte", cor: "violet" },
      ],
      cartoes: [
        { texto: "Praias famosas como Porto de Galinhas e Praia do Forte.", categoriaId: "mata" },
        { texto: "Polo de jeans de Toritama e feira de Caruaru.", categoriaId: "agreste" },
        { texto: "Fruticultura irrigada em Petrolina-Juazeiro pelo Rio São Francisco.", categoriaId: "sertao" },
        { texto: "Extrativismo do babaçu e da carnaúba (mata dos cocais).", categoriaId: "meio_norte" },
        { texto: "Grandes engenhos históricos de cana-de-açúcar desde o séc. XVI.", categoriaId: "mata" },
        { texto: "Bioma exclusivo do Brasil: a Caatinga.", categoriaId: "sertao" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Um estudante afirma que 'o Nordeste é pobre porque só tem seca'. Do ponto de vista geográfico, essa explicação é incorreta porque:",
      opcoes: [
        {
          texto:
            "A pobreza do Nordeste tem causas históricas (concentração fundiária desde o ciclo do açúcar, exclusão política, êxodo de mão-de-obra qualificada) e estruturais — não apenas climáticas. Além disso, a maior parte da população nordestina vive na Zona da Mata úmida, não no Sertão seco.",
          correta: true,
        },
        {
          texto:
            "Na verdade não chove pouco no Sertão: chove tanto quanto em Manaus, só que em poucos meses concentrados.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente análise. Reduzir a pobreza nordestina à seca é 'determinismo geográfico' — teoria já superada. Regiões áridas do mundo (Israel, Emirados Árabes) são ricas quando têm políticas adequadas. O NE brasileiro carrega heranças coloniais (latifúndio canavieiro, escravidão, exclusão política) que explicam a desigualdade muito mais do que o clima. E ainda: a maioria dos nordestinos vive no LITORAL úmido, não no Sertão. Explicar pobreza só por clima é preguiçoso e apaga a história.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Cartógrafo do Nordeste Diverso" },
  },

  // ============================================================
  // UNIDADE 6 — Amazônia e Fronteiras Agrícolas
  // ============================================================
  {
    unidade: 6,
    slug: "unidade-6-amazonia-fronteiras",
    titulo: "A Amazônia e as Fronteiras Agrícolas",
    habilidade: "EF07GE11 / EF07GE12",
    introducao_academica:
      "A Amazônia guarda cerca de 20% da água doce do planeta, 1/3 da biodiversidade mundial e regula o clima da América do Sul. Ao mesmo tempo, sofre desmatamento acelerado por avanço da fronteira agrícola, mineração e obras de infraestrutura. Vamos entender o paradoxo amazônico: patrimônio global versus fronteira econômica.",
    conteudo_pedagogico: {
      conceito_chave: "Amazônia Legal, Arco do Desmatamento e Fronteira Agrícola",
      texto_teorico:
        "A Amazônia Legal — conceito jurídico-administrativo — abrange 9 estados brasileiros (AC, AM, AP, PA, RO, RR, TO, MT e oeste do MA) e cerca de 60% do território nacional. Mas nem toda ela é floresta densa: inclui Cerrado, transições e áreas já ocupadas. É onde se joga hoje o maior embate ambiental do planeta.",
      etapas_teoricas: [
        {
          titulo: "O que é a Amazônia Legal (e o que NÃO é)",
          texto:
            "A 'Amazônia Legal' foi criada em 1953 para fins de planejamento e financiamento público. É maior que a Amazônia biológica (a floresta em si): inclui áreas de Cerrado (parte do MT e do TO), transições e regiões já urbanizadas. Isso importa porque políticas de desmatamento se aplicam ao recorte legal, não só à floresta.",
          exemplo_real:
            "Manaus, Belém, Porto Velho e Cuiabá são todas capitais da Amazônia Legal. Mas Cuiabá está em plena região de Cerrado, não de floresta. Já Manaus está no coração da floresta densa. Confundir 'Amazônia' com 'floresta amazônica' leva a erros comuns em análises geográficas.",
          exemplos_extras: [
            "A Amazônia biológica (floresta amazônica em si) tem cerca de 5,5 milhões de km² e é dividida entre 9 países: Brasil (~60%), Peru (~13%), Colômbia (~7%) e outros. É um bioma transnacional — nenhum país 'possui' a Amazônia sozinho.",
            "Cerca de 24 milhões de pessoas vivem na Amazônia Legal, incluindo mais de 180 povos indígenas com terras demarcadas. A visão de 'Amazônia vazia' é falsa: é habitada há milênios e tem ecossistemas urbanos, ribeirinhos e indígenas complexos.",
          ],
        },
        {
          titulo: "Arco do Desmatamento — a linha de frente",
          texto:
            "O desmatamento não acontece de forma aleatória na Amazônia. Ele avança em uma faixa em formato de arco que vai do leste do PA passando pelo norte do MT até RO e sul do AM. Essa faixa se chama 'Arco do Desmatamento' e representa a fronteira onde a floresta encontra a pecuária, a soja e a mineração.",
          exemplo_real:
            "Cidades como Novo Progresso (PA), Sinop (MT) e Ariquemes (RO) estão no Arco do Desmatamento. São conhecidas pelo dinamismo econômico do agronegócio e também pelos maiores índices de desmatamento anual — publicados pelo INPE via satélite (sistema PRODES).",
          exemplos_extras: [
            "As causas principais do desmatamento são: expansão da pecuária extensiva (~65% das áreas desmatadas viram pasto), depois soja, garimpo (especialmente em terras indígenas Yanomami), extração ilegal de madeira e grilagem de terras públicas.",
            "O 'ciclo do desmatamento' geralmente segue esta ordem: madeireiros abrem estrada e cortam árvores nobres → pecuaristas ocupam com gado extensivo → depois do solo se degradar, chega soja mecanizada. Ou seja: o boi 'prepara terreno' para a soja.",
          ],
        },
        {
          titulo: "MATOPIBA — a nova fronteira agrícola",
          texto:
            "'MATOPIBA' é o acrônimo para MAranhão + TOcantins + PIauí + BAhia (parte oeste desses estados). É a nova área de expansão do agronegócio brasileiro, especialmente da soja. O foco do desmatamento nos últimos anos migrou parcialmente da Amazônia clássica para essa região de Cerrado, onde há menos fiscalização e proteção ambiental que a floresta.",
          exemplo_real:
            "Barreiras (BA) e Balsas (MA) viraram capitais do agronegócio no MATOPIBA. Movimentam bilhões em soja exportada pela ferrovia Norte-Sul e pelo Porto de Itaqui (MA). Boa parte dessa soja vai para a China, atendendo a demanda por ração para carne suína.",
          exemplos_extras: [
            "O Cerrado é o segundo maior bioma brasileiro e um dos mais ameaçados: já perdeu ~50% de sua vegetação original — mais que a Amazônia (~17% desmatada). Como o Cerrado é menos 'famoso' que a floresta, sua destruição recebe menos atenção midiática e menos proteção legal.",
            "A expansão do MATOPIBA impacta populações tradicionais: quebradeiras de coco babaçu, comunidades quilombolas, povos indígenas. Há muitos conflitos fundiários registrados pela CPT (Comissão Pastoral da Terra) — mortes por disputa de terra concentram-se nessa fronteira.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Mapa da Amazônia Legal, Arco do Desmatamento e MATOPIBA",
        descricao:
          "Visualize os limites da Amazônia Legal (9 estados), a faixa em formato de arco onde o desmatamento se concentra, e a nova fronteira do MATOPIBA no oeste do NE + norte do CO.",
        legenda:
          "Observe: o desmatamento avança em ondas — primeiro madeireiros, depois pecuária, depois soja. E migra: quando a Amazônia é fiscalizada, o foco vai para o Cerrado do MATOPIBA.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "Entre no site do INPE (Instituto Nacional de Pesquisas Espaciais) e olhe o 'DETER' — um sistema de monitoramento por satélite que publica alertas diários de desmatamento na Amazônia. Você pode ver, quase em tempo real, quantos km² foram derrubados no último mês, em qual município. É a Geografia acontecendo agora, em pixels de satélite — não apenas em livros de história.",
      exemplo_visual:
        "Mapa da Amazônia Legal com destaque para o 'Arco do Desmatamento' (faixa vermelha que corta do leste do PA até RO) e a região do MATOPIBA (círculo tracejado sobre MA-TO-PI-BA).",
      imagem_analise: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "Qual é a diferença entre 'Amazônia Legal' e 'floresta amazônica'?",
        opcoes: [
          {
            texto: "Amazônia Legal é um recorte jurídico-administrativo que inclui 9 estados brasileiros (~60% do território nacional), incluindo áreas de Cerrado. Floresta amazônica é o bioma biológico, menor e transnacional.",
            correta: true,
            explicacao:
              "Correto. Muita gente confunde. Cuiabá, por exemplo, está na Amazônia Legal mas em pleno Cerrado — não em floresta. Políticas ambientais precisam distinguir os dois conceitos.",
          },
          {
            texto: "São sinônimos: os dois se referem à mesma área geográfica.",
            correta: false,
            explicacao:
              "Não são. É uma distinção clássica de geografia brasileira. Legal = recorte político (feito em 1953). Floresta = bioma natural. Não coincidem 100%.",
          },
          {
            texto: "Floresta amazônica é maior que a Amazônia Legal, cobrindo toda a AS.",
            correta: false,
            explicacao:
              "Você inverteu. A Amazônia Legal brasileira é maior (~5 milhões km²) que a porção da floresta amazônica dentro do Brasil (~3,3 milhões km²). Legal inclui Cerrado e transições.",
          },
        ],
      },
      {
        pergunta: "O 'Arco do Desmatamento' é uma faixa que:",
        opcoes: [
          {
            texto: "Vai do leste do PA passando pelo norte do MT até RO e sul do AM — é onde a floresta encontra a fronteira agropecuária.",
            correta: true,
            explicacao:
              "Perfeito. É a linha de frente do desmatamento, monitorada por satélite pelo INPE (sistema PRODES). Cidades como Sinop (MT), Novo Progresso (PA) e Ariquemes (RO) estão nele.",
          },
          {
            texto: "Vai do RS ao Amapá, cobrindo todo o litoral brasileiro.",
            correta: false,
            explicacao:
              "Cuidado com a geografia. O Arco do Desmatamento é uma faixa INTERIOR na Amazônia, não litorânea. E cobre parte de PA, MT, RO e AM — não o Brasil todo.",
          },
          {
            texto: "É uma área de floresta preservada demarcada como parque nacional.",
            correta: false,
            explicacao:
              "É exatamente o OPOSTO: é a área com MAIOR desmatamento, não preservação. Parques nacionais são pontos dentro da Amazônia — não a definição do 'arco'.",
          },
        ],
      },
      {
        pergunta: "Por que o desmatamento no Cerrado (MATOPIBA) recebe MENOS atenção midiática que o da Amazônia, mesmo tendo destruído proporcionalmente MAIS área?",
        opcoes: [
          {
            texto: "Porque o Cerrado é menos 'famoso' internacionalmente que a floresta amazônica, tem menos apelo turístico e biodiversidade midiaticamente visível — apesar de igualmente crítico para o ciclo hídrico e a biodiversidade.",
            correta: true,
            explicacao:
              "Isso mesmo. Chama-se 'invisibilidade do Cerrado'. Como as imagens de floresta densa e onças-pintadas comovem mais que campos de savana, a mídia global foca na Amazônia. Resultado: Cerrado destrói mais e proibições legais chegam menos.",
          },
          {
            texto: "Porque o Cerrado tem menos importância ambiental que a Amazônia.",
            correta: false,
            explicacao:
              "Falso. O Cerrado abastece as principais bacias hidrográficas do Brasil (nascentes do São Francisco, Tocantins, Paraná). Sem Cerrado, secam os rios. É tão vital quanto a Amazônia — só menos midiático.",
          },
          {
            texto: "Porque no MATOPIBA praticamente não há desmatamento — os agricultores plantam soja em áreas já ocupadas.",
            correta: false,
            explicacao:
              "Ao contrário. O MATOPIBA lidera hoje o desmatamento do Cerrado no Brasil. É por isso que a questão faz sentido: destrói MAIS que a Amazônia, mas ganha menos manchete.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada afirmação em: CAUSA do desmatamento, CONSEQUÊNCIA ambiental, ou POLÍTICA de proteção.",
      categorias: [
        { id: "causa", titulo: "Causa do Desmatamento", cor: "amber" },
        { id: "consequencia", titulo: "Consequência Ambiental", cor: "cyan" },
        { id: "politica", titulo: "Política de Proteção", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Expansão da pecuária extensiva para conversão de floresta em pasto.", categoriaId: "causa" },
        { texto: "Redução do regime de chuvas em toda a América do Sul (rios voadores).", categoriaId: "consequencia" },
        { texto: "Demarcação de terras indígenas e criação de unidades de conservação.", categoriaId: "politica" },
        { texto: "Garimpo ilegal de ouro em terras indígenas Yanomami.", categoriaId: "causa" },
        { texto: "Perda de biodiversidade e extinção de espécies endêmicas.", categoriaId: "consequencia" },
        { texto: "Monitoramento por satélite do INPE (sistemas PRODES e DETER).", categoriaId: "politica" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Cientistas afirmam que a Amazônia funciona como 'ar-condicionado da América do Sul' porque produz os chamados 'rios voadores' — massas de ar úmido que a floresta transpira e que caem como chuva em outras regiões. Se o desmatamento continuar acelerado, qual é o risco geográfico principal?",
      opcoes: [
        {
          texto:
            "A savanização da Amazônia — a floresta perde a capacidade de reciclar umidade e transiciona para vegetação de savana; regiões distantes como Sudeste e Centro-Oeste sofrem redução de chuvas, afetando agricultura e abastecimento das cidades.",
          correta: true,
        },
        {
          texto:
            "A Amazônia vai congelar por causa da perda de calor, criando uma nova era do gelo na América do Sul.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Exato. A Amazônia libera ~20 bilhões de toneladas de água por dia na atmosfera via evapotranspiração — os 'rios voadores'. Esse fluxo, empurrado pelos ventos alísios, cai como chuva no Centro-Oeste (soja!) e Sudeste (SP!). Se a floresta virar savana (processo já em curso), esses fluxos enfraquecem — e o país inteiro sente. Preservar a Amazônia não é 'proteger uma floresta distante'; é garantir o abastecimento de água do próprio Sudeste. Geograficamente, todos ganhamos ou perdemos juntos.",
    },
    recompensas: { xp: 500, moedas: 300, titulo: "Guardião da Fronteira Amazônica" },
  },

  // ============================================================
  // UNIDADE 7 — Geopolítica e Commodities no Brasil Atual
  // ============================================================
  {
    unidade: 7,
    slug: "unidade-7-geopolitica-commodities",
    titulo: "Geopolítica e Commodities no Brasil Atual",
    habilidade: "Consolidação Geral",
    introducao_academica:
      "O Brasil é a 9ª maior economia do mundo, potência agrícola global e um dos principais fornecedores de matéria-prima para China e Europa. Mas ao mesmo tempo depende dessas exportações e sofre com a chamada 'reprimarização da economia'. Vamos consolidar tudo o que aprendemos analisando o Brasil no tabuleiro geopolítico global.",
    conteudo_pedagogico: {
      conceito_chave: "Balança Comercial, Reprimarização e Multilateralismo",
      texto_teorico:
        "O Brasil ocupa hoje uma posição paradoxal no mundo: potência agrícola e mineral (soja, milho, carne, ferro, petróleo), mas com indústria em relativa desindustrialização. Isso levanta um debate estratégico: seguir sendo 'fazenda e mina do mundo' ou reindustrializar? A resposta está atravessada pela geopolítica global — sobretudo pela ascensão da China.",
      etapas_teoricas: [
        {
          titulo: "Commodities — a base das exportações brasileiras",
          texto:
            "Commodities são produtos primários pouco processados (grãos, minérios, carne, petróleo bruto). Cerca de 60-70% das exportações brasileiras hoje são commodities. Os principais itens: soja, minério de ferro, petróleo, carne bovina e de frango, celulose e café. Isso gera dólares, mas em preço vulnerável às oscilações internacionais.",
          exemplo_real:
            "A soja sozinha representa ~15% de tudo o que o Brasil exporta em valor. Se a China (principal compradora) parar de importar por qualquer motivo (guerra, epidemia, política), a balança brasileira desaba. É uma dependência estratégica: alta rentabilidade + alto risco.",
          exemplos_extras: [
            "As commodities têm preço 'volátil' — sobem e descem rapidamente na Bolsa de Chicago (grãos) ou de Londres (minérios). Quando o preço da soja sobe, o PIB brasileiro sobe junto. Quando cai, o país entra em recessão. Isso torna nossa economia refém do mercado externo.",
            "Além disso, exportar commodities gera menos empregos e menos tecnologia que exportar produtos industrializados. Uma tonelada de aço é mais valiosa que uma tonelada de minério de ferro. Uma tonelada de carro é mais valiosa que uma tonelada de aço. É a chamada 'escada do valor agregado'.",
          ],
        },
        {
          titulo: "China — o principal parceiro comercial",
          texto:
            "Desde 2009, a China é a maior parceira comercial do Brasil, superando os EUA. Compra ~30% de tudo que exportamos (soja, ferro, carne, celulose). Em troca, vende ao Brasil produtos industrializados (celulares, máquinas, eletroeletrônicos). É uma relação típica 'centro-periferia' — nós fornecemos matéria-prima, eles fornecem tecnologia. Essa dependência tem consequências políticas.",
          exemplo_real:
            "Quase 70% da soja plantada em MT vai para a China alimentar os porcos que abastecem a mesa chinesa. Quase 60% do minério de ferro de Carajás vai para as siderúrgicas chinesas que produzem o aço dos prédios asiáticos. A economia dos dois países está profundamente entrelaçada.",
          exemplos_extras: [
            "O Brasil integra o BRICS (Brasil, Rússia, Índia, China, África do Sul, mais recentemente ampliado). É uma tentativa de organizar economias emergentes fora do eixo tradicional EUA-Europa. Discute alternativas ao dólar nas transações internacionais.",
            "A relação com a China cria dilemas geopolíticos. Ex.: quando os EUA pressionam o Brasil a rejeitar a tecnologia 5G da Huawei (empresa chinesa), o Brasil precisa escolher entre seus dois grandes parceiros — EUA (histórico) e China (atual). Escolhas assim moldam o futuro econômico.",
          ],
        },
        {
          titulo: "Reprimarização — o dilema do Brasil atual",
          texto:
            "'Reprimarização' significa voltar a depender da exportação de produtos primários (agrícolas e minerais) em vez de produtos industrializados. Nas décadas de 60-80, o Brasil tinha ambição de virar uma potência industrial ('Brasil grande'). Nas últimas décadas, a participação da indústria no PIB caiu de ~35% para ~11% — enquanto a agropecuária + mineração cresceram. Muitos economistas veem isso como retrocesso; outros, como uma vantagem competitiva natural.",
          exemplo_real:
            "Nos anos 1970-80, o Brasil produzia computadores, aviões (Embraer), navios, e tinha uma indústria eletrônica considerável. Hoje, com exceção da Embraer, quase toda essa capacidade tecnológica se perdeu. Compramos computadores da China, celulares da Coreia, TVs do Japão. A indústria minguou.",
          exemplos_extras: [
            "As causas apontadas da desindustrialização: câmbio historicamente valorizado (real forte encarece exportar produto industrializado), 'doença holandesa' (setor exportador de commodities aumenta câmbio e afunda indústria), abertura comercial mal calibrada nos anos 90, juros altos que encarecem investimento produtivo.",
            "Existe um caminho alternativo: agregar VALOR às commodities antes de exportar. Em vez de exportar soja em grão, exportar biodiesel; em vez de minério de ferro, aço; em vez de café verde, café torrado com marca brasileira. É a chamada 'reindustrialização verde e tecnológica' — um projeto ainda em construção.",
          ],
        },
      ],
      roteiro_visual_interativo: {
        foco: "Balança comercial brasileira — commodities × industrializados",
        descricao:
          "Gráfico da evolução da pauta de exportações brasileiras (1980-2024): a fatia de industrializados encolhe, a de commodities (soja, ferro, petróleo) cresce. É a reprimarização em uma imagem.",
        legenda:
          "Observe: em 1985, mais da metade das exportações eram manufaturados. Hoje, ~70% são commodities. A economia brasileira mudou de perfil, mesmo sem uma decisão política explícita.",
        tipo: "generico",
      },
      exemplo_pratico_visual:
        "Vá em um supermercado e olhe a origem dos produtos: TV = Coreia/China, celular = China/EUA, notebook = China, carro = maioria montada aqui mas com peças importadas, geladeira = Brasil ou México. Depois olhe o que o Brasil EXPORTA: soja, ferro, carne, café. Você acabou de ver a 'reprimarização' na prática — importamos tecnologia com alto valor agregado, exportamos matéria-prima. É o principal debate econômico do país hoje.",
      exemplo_visual:
        "Fluxo comercial Brasil-China: navios saindo do Porto de Santos e Itaqui carregados de soja e ferro, e voltando com contêineres cheios de eletrônicos, máquinas e produtos industriais.",
      imagem_analise: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=1200",
    },

    quiz_relampago: [
      {
        pergunta: "O que significa 'reprimarização da economia brasileira'?",
        opcoes: [
          {
            texto: "Aumento da dependência de exportações de produtos primários (agrícolas e minerais) em detrimento de produtos industrializados.",
            correta: true,
            explicacao:
              "Correto. 'Re' + 'primário': voltar a depender de produtos primários. É o que aconteceu nas últimas décadas — indústria minguou (de 35% para 11% do PIB) e commodities cresceram.",
          },
          {
            texto: "Adoção de tecnologias primárias como energia solar e biocombustíveis.",
            correta: false,
            explicacao:
              "Você confundiu 'primário' (referente ao setor primário da economia: agropecuária e extrativismo) com 'básico' ou 'inicial'. Reprimarização é sobre a pauta produtiva, não sobre tecnologia.",
          },
          {
            texto: "Fortalecimento da indústria nacional após décadas de dependência externa.",
            correta: false,
            explicacao:
              "É o OPOSTO. Reprimarização = enfraquecimento da indústria + fortalecimento do setor primário. Se fortalecesse a indústria, seria 'industrialização' ou 'reindustrialização'.",
          },
        ],
      },
      {
        pergunta: "Qual foi a mudança geopolítica mais significativa na balança comercial brasileira desde 2009?",
        opcoes: [
          {
            texto: "A China ultrapassou os EUA como principal parceiro comercial do Brasil, com destaque para as exportações de soja e minério de ferro.",
            correta: true,
            explicacao:
              "Exato. Até 2008, EUA era o maior comprador. Desde 2009, a China lidera — e a distância só cresce. Isso reorientou toda a política externa brasileira e criou dependências novas.",
          },
          {
            texto: "A União Europeia se tornou o principal comprador do Brasil, superando a China e os EUA juntos.",
            correta: false,
            explicacao:
              "A UE é importante (~15% das exportações), mas não é o maior parceiro. China (~30%) é isolada em primeiro. UE nunca ultrapassou.",
          },
          {
            texto: "O Brasil parou de exportar para a China por causa de disputas comerciais.",
            correta: false,
            explicacao:
              "Ao contrário: as exportações para a China só crescem. Não há disputa comercial relevante entre os dois países — a relação é considerada estratégica por ambos.",
          },
        ],
      },
      {
        pergunta: "Por que economistas alertam que exportar commodities gera menos desenvolvimento que exportar produtos industrializados?",
        opcoes: [
          {
            texto: "Produtos industrializados agregam mais valor por unidade, geram mais empregos qualificados e desenvolvem tecnologia nacional; commodities dependem de preços internacionais voláteis e criam poucos empregos.",
            correta: true,
            explicacao:
              "Perfeito. É a 'escada do valor agregado': quanto mais processado o produto, mais renda e emprego ele gera dentro do país. Vender minério de ferro é ok; vender aço é melhor; vender carro é melhor ainda.",
          },
          {
            texto: "Porque commodities apenas geram poluição e destruição ambiental, sem gerar dinheiro.",
            correta: false,
            explicacao:
              "Commodities GERAM muito dinheiro (~60% das exportações brasileiras). A crítica não é que 'não geram receita', mas que geram MENOS desenvolvimento por dólar exportado.",
          },
          {
            texto: "Porque os países ricos proíbem o Brasil de exportar commodities.",
            correta: false,
            explicacao:
              "Não há proibição. Ao contrário: EUA, UE e China ADORAM comprar commodities do Brasil (é matéria-prima barata para eles). A discussão não é 'proibição externa', é 'estratégia interna'.",
          },
        ],
      },
    ],

    mini_jogo: {
      tipo: "categorizar",
      instrucao:
        "Classifique cada elemento em: COMMODITY exportada, PRODUTO INDUSTRIAL importado, ou POLÍTICA/ATOR geopolítico.",
      categorias: [
        { id: "commodity", titulo: "Commodity Exportada", cor: "amber" },
        { id: "importado", titulo: "Produto Industrial Importado", cor: "cyan" },
        { id: "geopolitica", titulo: "Política / Ator Geopolítico", cor: "emerald" },
      ],
      cartoes: [
        { texto: "Soja em grão vendida à China para ração de porcos.", categoriaId: "commodity" },
        { texto: "Celulares e eletrônicos fabricados na Ásia.", categoriaId: "importado" },
        { texto: "BRICS — grupo de países emergentes buscando alternativas ao eixo EUA-Europa.", categoriaId: "geopolitica" },
        { texto: "Minério de ferro de Carajás exportado pelo Porto de Itaqui.", categoriaId: "commodity" },
        { texto: "Máquinas industriais compradas da Alemanha e do Japão.", categoriaId: "importado" },
        { texto: "Disputa geopolítica sobre a tecnologia 5G da Huawei (China) × EUA.", categoriaId: "geopolitica" },
      ],
    },

    desafio_critico: {
      pergunta:
        "Um economista argumenta: 'o Brasil pode escolher entre continuar sendo a fazenda e a mina do mundo, ou construir uma nova reindustrialização apoiada em ciência, tecnologia e valor agregado às commodities'. Do ponto de vista geográfico e estratégico, qual afirmação melhor descreve o desafio contido nessa escolha?",
      opcoes: [
        {
          texto:
            "É uma escolha estrutural: continuar reprimarizado dá curto-prazo (dólares fáceis via commodities) mas cria dependência de preços internacionais e gera poucos empregos qualificados; reindustrializar exige investimento massivo em educação, ciência e infraestrutura, mas gera desenvolvimento sustentável e soberania.",
          correta: true,
        },
        {
          texto:
            "Não há dilema real: basta parar de exportar commodities e o Brasil se torna automaticamente uma potência industrial em poucos anos.",
          correta: false,
        },
      ],
      explicacao_professor:
        "Excelente. É um dos maiores debates da geografia econômica brasileira. Reprimarização traz receita imediata, mas fragiliza o país no longo prazo (vulnerabilidade a preços, poucos empregos qualificados, baixa autonomia tecnológica). Reindustrialização é a estratégia usada por Coreia do Sul, China, Alemanha para se tornarem potências — mas exige décadas de investimento coordenado. Não existe escolha 'fácil'; existe uma escolha de futuro. Parabéns por concluir o 7º ano de Geografia — você agora tem ferramentas para participar desse debate.",
    },
    recompensas: { xp: 1500, moedas: 800, titulo: "Analista Geopolítico do Brasil Contemporâneo" },
  },
];

export function getUnidade7ano(slug: string): UnidadeFund2 | undefined {
  return UNIDADES_7ANO.find((u) => u.slug === slug);
}

export function getProximaUnidade7ano(slug: string): UnidadeFund2 | undefined {
  const i = UNIDADES_7ANO.findIndex((u) => u.slug === slug);
  return i >= 0 && i + 1 < UNIDADES_7ANO.length ? UNIDADES_7ANO[i + 1] : undefined;
}
