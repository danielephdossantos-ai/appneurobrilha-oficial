import type { AulaGeoV1 } from "../../types";
import { url as imgImigrantes } from "@/assets/historia-3ano/imigrantes-navio.jpg.asset.json";
import { url as imgIndigena } from "@/assets/historia-3ano/indigena-tradicional.jpg.asset.json";
import { url as imgCapoeira } from "@/assets/historia-3ano/capoeira-roda.jpg.asset.json";
import { url as imgFeiraCultural } from "@/assets/historia-3ano/feira-cultural.jpg.asset.json";
import { url as imgInfografico } from "@/assets/historia-3ano/infografico-populacao.jpg.asset.json";
import { url as imgComidaTipica } from "@/assets/historia-3ano/comida-tipica.jpg.asset.json";
import { url as imgLivro } from "@/assets/historia-3ano/livro-cidades.jpg.asset.json";
/**
 * História · 3º Ano · Unidade 5 · Aula 01
 * "A Formação da População: Muitas Culturas"
 * Restaura a Página 5 do Grande Livro das Cidades: O Mosaico Cultural.
 * Visual: fotografia real de povos + infográfico Venn das origens.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-formacao-da-populacao",
  titulo: "A Formação da População: Muitas Culturas",
  iconeTrilha: "🌍",
  bncc: ["EF03HI09", "EF03HI10"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre esta fotografia sépia. Você está vendo IMIGRANTES europeus desembarcando no porto de Santos, no início do século XX, com malas de madeira e crianças pela mão.",
    mapaUrl: imgImigrantes,
    imagemDestaqueUrl: imgInfografico,
    aurora:
      "Pequeno Historiador, na feira cultural da escola tinha pastel, esfiha, acarajé e macarronada — tudo servido no mesmo dia. Por que o Brasil come tantas coisas diferentes? Por que falamos palavras vindas de tantas línguas?",
    falaFinal:
      "A resposta se chama FORMAÇÃO PLURIÉTNICA: nossa população nasceu do encontro de INDÍGENAS, AFRICANOS e IMIGRANTES europeus, asiáticos e árabes. Cada grupo deixou marcas profundas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes da explicação, palpite de investigador. A comida, a música e o vocabulário do Brasil vieram de onde?",
    pergunta: "Como se formou nossa cultura?",
    fotoUrl: imgInfografico,
    opcoes: [
      {
        id: "mistura",
        titulo: "Da mistura de vários povos",
        subtitulo: "indígena + africana + imigrante",
        emoji: "🌍",
        cor: "from-emerald-500 to-teal-700",
        fotoUrl: imgFeiraCultural,
      },
      {
        id: "unica",
        titulo: "De uma única origem",
        subtitulo: "só portuguesa",
        emoji: "🇵🇹",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgImigrantes,
      },
    ],
    respostaCerta: "mistura",
    feedbackAcerto:
      "Correto. Nossa cultura é MOSAICO. Portugueses trouxeram a língua, mas indígenas, africanos, italianos, japoneses e árabes moldaram comida, música, festa e vocabulário.",
    feedbackErro:
      "Não é única. É uma MISTURA de origens: povos indígenas (originários), africanos (trazidos escravizados) e imigrantes (que vieram depois). Cada grupo mudou o Brasil.",
    falaFinal:
      "Guarde a regra: a população brasileira é PLURIÉTNICA — muitas etnias, um só povo. É por isso que temos tanta variedade.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três palavras técnicas essenciais quando o historiador estuda a formação de um povo. Cada caderno já está aberto com foto real e definição.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "indigenas",
        capa: "Povos Indígenas",
        emoji: "🪶",
        cor: "from-green-600 to-emerald-800",
        fotoUrl: imgIndigena,
        conteudo:
          "POVOS INDÍGENAS são os PRIMEIROS habitantes do território que hoje chamamos de Brasil. Já viviam aqui há milhares de anos antes da chegada dos europeus. Deixaram nomes de lugares (Ipanema, Guarapari), alimentos (mandioca, milho, tapioca) e saberes sobre a floresta.",
        exemplo: "Exemplo: a palavra ABACAXI vem do Tupi. Os indígenas cultivavam a fruta muito antes de 1500.",
      },
      {
        id: "africanos",
        capa: "Povos Africanos",
        emoji: "🥁",
        cor: "from-orange-600 to-red-800",
        fotoUrl: imgCapoeira,
        conteudo:
          "POVOS AFRICANOS foram trazidos AO BRASIL FORÇADAMENTE, escravizados entre 1550 e 1888. Apesar dessa violência histórica, resistiram e enriqueceram a cultura com capoeira, samba, feijoada, palavras (moleque, cafuné) e religiões afro-brasileiras.",
        exemplo: "Exemplo: a CAPOEIRA nasceu como forma de defesa dos escravizados — hoje é patrimônio cultural imaterial.",
      },
      {
        id: "imigrantes",
        capa: "Imigrantes",
        emoji: "⛵",
        cor: "from-blue-600 to-indigo-800",
        fotoUrl: imgImigrantes,
        conteudo:
          "IMIGRANTES são pessoas que vieram VOLUNTARIAMENTE de outros países pra viver no Brasil, principalmente entre 1870 e 1950. Italianos, alemães, japoneses, árabes, poloneses. Trouxeram pizza, macarrão, sushi, esfiha, sanfona e novas técnicas de plantio.",
        exemplo: "Exemplo: São Paulo recebeu mais de 3 MILHÕES de italianos. Por isso a cidade é a maior consumidora de pizza do Brasil.",
      },
    ],
    falaFinal:
      "Indígenas, Africanos, Imigrantes: as TRÊS matrizes que formaram a população brasileira. Cada uma deixou marcas visíveis no seu dia a dia.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o infográfico da FORMAÇÃO DA POPULAÇÃO BRASILEIRA. Toque em cada ponto pra eu explicar o que aquela matriz cultural deixou pra nós.",
    instrucao: "Toque em cada ponto do infográfico pra ouvir a explicação",
    mapaUrl: imgInfografico,
    pontos: [
      {
        id: "indigena",
        x: 50,
        y: 20,
        emoji: "🪶",
        cor: "from-green-600 to-emerald-800",
        fotoUrl: imgIndigena,
        titulo: "1. INDÍGENAS — os primeiros habitantes",
        texto:
          "Já estavam aqui há 12.000 anos. Nos deixaram: mandioca, milho, tapioca, redes de dormir, nomes de rios e cidades (Tupi e Guarani), respeito profundo à natureza.",
      },
      {
        id: "africano",
        x: 20,
        y: 65,
        emoji: "🥁",
        cor: "from-orange-600 to-red-800",
        fotoUrl: imgCapoeira,
        titulo: "2. AFRICANOS — resistência cultural",
        texto:
          "Trazidos escravizados. Nos deixaram: capoeira, samba, feijoada, acarajé, berimbau, palavras (moleque, cafuné, quilombo), religiões afro (candomblé, umbanda).",
      },
      {
        id: "imigrante",
        x: 80,
        y: 65,
        emoji: "⛵",
        cor: "from-blue-600 to-indigo-800",
        fotoUrl: imgImigrantes,
        titulo: "3. IMIGRANTES — culturas do mundo",
        texto:
          "Italianos, japoneses, alemães, árabes vieram entre 1870 e 1950. Nos deixaram: pizza, macarrão, sushi, esfiha, arquitetura enxaimel, hashi, feiras étnicas.",
      },
      {
        id: "mistura",
        x: 50,
        y: 55,
        emoji: "🌍",
        cor: "from-purple-600 to-pink-800",
        fotoUrl: imgFeiraCultural,
        titulo: "4. POVO BRASILEIRO — o mosaico",
        texto:
          "No centro, o resultado: um povo PLURIÉTNICO. A mesma pessoa pode ter avó indígena, tataravô africano e bisavó italiana. Somos a mistura viva das três matrizes.",
      },
    ],
    falaFinal:
      "Indígena + Africano + Imigrante = Povo Brasileiro. É esse cruzamento que explica a variedade que você vê em qualquer feira, festa ou refeição.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Três perguntas de verificação. Cada uma testa se você associa corretamente a herança cultural à matriz de origem.",
    instrucao: "Toque no card correto pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "A palavra ABACAXI e o costume de comer TAPIOCA vieram de qual matriz?",
        fotoUrl: imgIndigena,
        cards: [
          { id: "in", emoji: "🪶", titulo: "Indígena", cor: "from-green-600 to-emerald-800" },
          { id: "af", emoji: "🥁", titulo: "Africana", cor: "from-orange-600 to-red-800" },
          { id: "im", emoji: "⛵", titulo: "Imigrante europeu", cor: "from-blue-600 to-indigo-800" },
        ],
        correta: "in",
        feedbackAcerto:
          "Correto. Abacaxi vem do TUPI; a tapioca é feita da mandioca — planta que os indígenas cultivam há milênios.",
        feedbackErro:
          "Mandioca e vocabulário Tupi vêm dos POVOS INDÍGENAS, os primeiros habitantes do território.",
      },
      {
        id: "q2",
        pergunta: "A CAPOEIRA e a FEIJOADA são heranças de qual matriz?",
        fotoUrl: imgCapoeira,
        cards: [
          { id: "in", emoji: "🪶", titulo: "Indígena", cor: "from-green-600 to-emerald-800" },
          { id: "af", emoji: "🥁", titulo: "Africana", cor: "from-orange-600 to-red-800" },
          { id: "im", emoji: "⛵", titulo: "Imigrante japonês", cor: "from-blue-600 to-indigo-800" },
        ],
        correta: "af",
        feedbackAcerto:
          "Exato. Capoeira nasceu como resistência dos escravizados; feijoada tem raízes na culinária africana. Herança AFRICANA.",
        feedbackErro:
          "Capoeira e feijoada nasceram da resistência dos povos AFRICANOS trazidos escravizados ao Brasil.",
      },
      {
        id: "q3",
        pergunta: "Comer com HASHI (palitinhos) e o costume de plantar arroz em grande escala vieram de quem?",
        fotoUrl: imgFeiraCultural,
        cards: [
          { id: "in", emoji: "🪶", titulo: "Indígena", cor: "from-green-600 to-emerald-800" },
          { id: "af", emoji: "🥁", titulo: "Africana", cor: "from-orange-600 to-red-800" },
          { id: "jp", emoji: "🍣", titulo: "Imigrante japonês", cor: "from-blue-600 to-indigo-800" },
        ],
        correta: "jp",
        feedbackAcerto:
          "Certeza. Os JAPONESES que chegaram a partir de 1908 trouxeram hashi, sushi e novas técnicas de cultivo de arroz.",
        feedbackErro:
          "Hashi e cultivo intensivo de arroz vieram dos IMIGRANTES JAPONESES que chegaram no início do século XX.",
      },
    ],
    falaFinal:
      "Radar afinado. Você já associa cada elemento cultural à matriz que o trouxe.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou ativar três interruptores em cima do mesmo infográfico: um pra INDÍGENA, um pra AFRICANO e um pra IMIGRANTE. Veja como cada matriz contribuiu com elementos únicos que hoje formam UM SÓ povo.",
    instrucao: "Toque nos interruptores pra ver cada matriz cultural",
    mapaUrl: imgInfografico,
    camadas: [
      {
        id: "indigena",
        rotulo: "Indígena",
        emoji: "🪶",
        cor: "from-green-600 to-emerald-800",
        rect: { x: 30, y: 0, w: 40, h: 45 },
        descricao:
          "MATRIZ INDÍGENA: mandioca, tapioca, milho, redes, nomes Tupi de lugares, saberes da floresta, ervas medicinais. Base da alimentação e do vocabulário geográfico do país.",
      },
      {
        id: "africana",
        rotulo: "Africana",
        emoji: "🥁",
        cor: "from-orange-600 to-red-800",
        rect: { x: 0, y: 40, w: 45, h: 55 },
        descricao:
          "MATRIZ AFRICANA: capoeira, samba, feijoada, acarajé, berimbau, palavras (moleque, cafuné), religiões afro. Base da música, da dança e de grande parte da culinária brasileira.",
      },
      {
        id: "imigrante",
        rotulo: "Imigrante",
        emoji: "⛵",
        cor: "from-blue-600 to-indigo-800",
        rect: { x: 55, y: 40, w: 45, h: 55 },
        descricao:
          "MATRIZ IMIGRANTE (europeus, asiáticos, árabes): pizza, macarrão, sushi, esfiha, sanfona, arquitetura enxaimel. Trouxeram novas indústrias e povoaram o Sul e o Sudeste no séc. XIX-XX.",
      },
    ],
    falaFinal:
      "Três camadas que se sobrepõem no centro: onde as três matrizes se encontram, nasce a IDENTIDADE BRASILEIRA.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos ordenar cronologicamente as ondas populacionais que formaram o Brasil. Da mais antiga pra mais recente.",
    instrucao: "Toque nas etapas na ordem certa (do mais antigo ao mais recente)",
    pergunta: "Como o povo brasileiro foi se formando?",
    paradas: [
      {
        id: "indigenas",
        emoji: "🪶",
        rotulo: "1. Povos originários (há 12.000 anos)",
        fotoUrl: imgIndigena,
        descricao:
          "Etapa 1: povos indígenas ocupam o território muito antes de qualquer europeu. Já eram milhões quando os portugueses chegaram em 1500.",
      },
      {
        id: "portugueses",
        emoji: "⛵",
        rotulo: "2. Colonização portuguesa (1500)",
        fotoUrl: imgImigrantes,
        descricao:
          "Etapa 2: portugueses chegam em 1500, iniciam colonização, trazem a língua, a religião católica e a estrutura da cidade colonial.",
      },
      {
        id: "africanos",
        emoji: "🥁",
        rotulo: "3. Africanos escravizados (1550-1888)",
        fotoUrl: imgCapoeira,
        descricao:
          "Etapa 3: entre 1550 e 1888, mais de 4 MILHÕES de africanos são trazidos escravizados. Formam a maior parte da população em várias regiões.",
      },
      {
        id: "imigracao",
        emoji: "🌍",
        rotulo: "4. Grande imigração (1870-1950)",
        fotoUrl: imgFeiraCultural,
        descricao:
          "Etapa 4: com o fim da escravidão, o Brasil recebe milhões de italianos, alemães, japoneses e árabes que vêm trabalhar em fazendas e cidades.",
      },
    ],
    ordemCerta: ["indigenas", "portugueses", "africanos", "imigracao"],
    feedbackAcerto:
      "Cronologia perfeita. Indígenas → Portugueses → Africanos → Imigrantes. Cada onda deixou marcas profundas na cultura de hoje.",
    feedbackErro:
      "Essa não é a próxima onda. Pense: quem já estava aqui ANTES de 1500? E quem só chegou DEPOIS que a escravidão acabou?",
    falaFinal:
      "Você acabou de mapear 500 ANOS DE FORMAÇÃO DE POVO. É assim que historiadores explicam a diversidade do Brasil.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Silêncio agora. Leia a Página 5 do Grande Livro das Cidades com seus próprios olhos e toque nas palavras destacadas quando quiser a definição.",
    tituloLivro: "📜 O Grande Livro das Cidades",
    subtitulo: "Página 5 — O Mosaico Cultural",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A população brasileira é um MOSAICO formado por três grandes matrizes históricas. A primeira são os POVOS INDÍGENAS, primeiros habitantes do território, que já viviam aqui há milhares de anos antes da chegada dos europeus.",
        chaves: ["mosaico", "povos indígenas"],
        definicoes: {
          mosaico:
            "Imagem formada por pedacinhos diferentes que, juntos, criam um todo colorido e único.",
          "povos indígenas":
            "Grupos originários do território brasileiro, presentes há mais de 12.000 anos antes da chegada portuguesa.",
        },
        fotoUrl: imgIndigena,
      },
      {
        id: "p2",
        texto:
          "A segunda matriz são os POVOS AFRICANOS, trazidos ao Brasil de forma FORÇADA entre 1550 e 1888, quando a escravidão foi finalmente abolida. Apesar da violência histórica, resistiram culturalmente e enriqueceram a alimentação, a música, a dança e o vocabulário brasileiro.",
        chaves: ["povos africanos", "escravidão"],
        definicoes: {
          "povos africanos":
            "Diferentes etnias trazidas do continente africano, sequestradas e escravizadas nas Américas entre 1550 e 1888.",
          escravidão:
            "Sistema em que pessoas eram tratadas como propriedade, sem liberdade nem direitos. Foi abolida no Brasil em 13 de maio de 1888.",
        },
        fotoUrl: imgCapoeira,
      },
      {
        id: "p3",
        texto:
          "A terceira matriz é a dos IMIGRANTES, pessoas que vieram VOLUNTARIAMENTE de outros países entre 1870 e 1950, principalmente italianos, alemães, japoneses, árabes e poloneses. Trouxeram novas comidas, novas religiões e novas técnicas de trabalho.",
        chaves: ["imigrantes", "imigração"],
        definicoes: {
          imigrantes:
            "Pessoas que se mudam do seu país de origem pra viver em outro país, buscando trabalho e melhores condições de vida.",
          imigração:
            "Movimento de entrada de estrangeiros num país. O Brasil recebeu milhões de imigrantes entre 1870 e 1950.",
        },
        fotoUrl: imgImigrantes,
      },
      {
        id: "p4",
        texto:
          "Do cruzamento dessas três matrizes nasceu o POVO BRASILEIRO — uma população PLURIÉTNICA. Por isso comemos pastel (imigrante), acarajé (africano) e tapioca (indígena) no mesmo dia. Por isso usamos palavras Tupi, africanas e italianas na mesma frase.",
        chaves: ["pluriétnica"],
        definicoes: {
          pluriétnica:
            "Formada por várias etnias diferentes. O povo brasileiro é pluriétnico porque une indígenas, africanos, europeus, asiáticos e árabes.",
        },
        fotoUrl: imgFeiraCultural,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com suas próprias palavras, por que o Brasil é tão diverso.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de campo do etno-historiador. Cada rodada mostra um elemento cultural. Você tem que classificar rápido a matriz de origem: INDÍGENA, AFRICANA ou IMIGRANTE.",
    instrucao: "⏱️ Leia a pista e toque na matriz correta antes do tempo acabar",
    duracaoSegundos: 20,
    pecas: [
      { id: "in", emoji: "🪶", rotulo: "Indígena" },
      { id: "af", emoji: "🥁", rotulo: "Africana" },
      { id: "im", emoji: "⛵", rotulo: "Imigrante" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Rede de dormir e tapioca", emoji: "🌿", cor: "from-green-600 to-emerald-800" },
        municipioB: { nome: "Costume herdado", emoji: "🪶", cor: "from-emerald-500 to-teal-700" },
        contexto:
          "Sesta na varanda em rede de algodão trançado; café com tapioca no lanche. De quem herdamos?",
        pecaCertaId: "in",
        fotoUrl: imgIndigena,
        feedbackAcerto: "Correto. Rede e mandioca (tapioca) são heranças INDÍGENAS milenares.",
        feedbackErro: "Redes e tapioca não vieram da Europa nem da África. Vieram dos povos INDÍGENAS.",
      },
      {
        id: "r2",
        municipioA: { nome: "Roda de capoeira", emoji: "🥁", cor: "from-orange-600 to-red-800" },
        municipioB: { nome: "Berimbau tocando", emoji: "🎵", cor: "from-amber-500 to-red-700" },
        contexto:
          "Círculo de pessoas de branco, dois jogadores no meio, música de berimbau. De qual matriz vem?",
        pecaCertaId: "af",
        fotoUrl: imgCapoeira,
        feedbackAcerto: "Correto. Capoeira é herança AFRICANA — nasceu como resistência dos escravizados.",
        feedbackErro: "Capoeira e berimbau vêm da matriz AFRICANA, criados como forma de resistência.",
      },
      {
        id: "r3",
        municipioA: { nome: "Pizza margherita e macarronada", emoji: "🍕", cor: "from-blue-600 to-indigo-800" },
        municipioB: { nome: "Sanfona italiana", emoji: "🎹", cor: "from-indigo-500 to-purple-700" },
        contexto:
          "Cantina no Bixiga, São Paulo. Massa fresca, molho de tomate, música de sanfona. De qual matriz?",
        pecaCertaId: "im",
        fotoUrl: imgFeiraCultural,
        feedbackAcerto: "Correto. Pizza, macarrão e sanfona são heranças dos IMIGRANTES italianos.",
        feedbackErro: "Não é indígena nem africana. Pizza e macarrão vieram com os IMIGRANTES italianos após 1870.",
      },
      {
        id: "r4",
        municipioA: { nome: "Nomes Tupi de cidades", emoji: "🏞️", cor: "from-green-600 to-emerald-800" },
        municipioB: { nome: "Ipanema, Guarapari, Paraty", emoji: "📍", cor: "from-emerald-500 to-teal-700" },
        contexto:
          "Praias, cidades e rios com nomes que vêm de uma língua muito antiga. De qual matriz?",
        pecaCertaId: "in",
        fotoUrl: imgIndigena,
        feedbackAcerto: "Correto. Ipanema, Guarapari, Paraty vêm do TUPI — herança linguística INDÍGENA.",
        feedbackErro: "Não são palavras europeias nem africanas. São TUPI — herança linguística dos povos INDÍGENAS.",
      },
    ],
    falaFinal:
      "Missão concluída. Você identifica corretamente a matriz cultural de qualquer elemento brasileiro.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos fechar a aula com duas fatias grandes: as raízes ANTIGAS do Brasil (indígena + africana) e as culturas dos IMIGRANTES que chegaram depois. Toque em cada uma pra revisar.",
    instrucao: "Toque nas fatias pra ouvir sobre cada bloco de heranças",
    fotoUrl: imgInfografico,
    fatias: [
      {
        id: "raizes",
        rotulo: "Raízes originais",
        emoji: "🪶🥁",
        percentual: 60,
        cor: "#16a34a",
        descricao:
          "Indígenas (primeiros habitantes) + africanos (trazidos escravizados) formam a base ancestral do Brasil. Deixaram alimentação (mandioca, feijoada), música (samba, berimbau), dança (capoeira), vocabulário (Tupi + africano) e religiões.",
        exemplos: ["Mandioca, tapioca (indígena)", "Capoeira, samba (africana)", "Nomes Tupi de cidades", "Feijoada e acarajé"],
        fotoUrl: imgIndigena,
      },
      {
        id: "imigrantes",
        rotulo: "Imigrantes (1870-1950)",
        emoji: "⛵",
        percentual: 40,
        cor: "#1e40af",
        descricao:
          "Italianos, japoneses, alemães, árabes vieram voluntariamente após o fim da escravidão. Trouxeram pizza, macarrão, sushi, esfiha, sanfona, arquitetura enxaimel e novas técnicas industriais.",
        exemplos: ["Pizza e macarrão (italianos)", "Sushi e hashi (japoneses)", "Esfiha e quibe (árabes)", "Enxaimel (alemães)"],
        fotoUrl: imgImigrantes,
      },
    ],
    falaFinal:
      "Duas grandes fatias, um só povo. As raízes ancestrais + a chegada dos imigrantes formam o Brasil que você conhece hoje.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última etapa: 3 perguntas de certificação. Se acertar, você restaura a quinta página do Grande Livro das Cidades e ganha a Insígnia da Diversidade Cultural.",
    instrucao: "Responda as 3 perguntas de certificação",
    fotoUrl: imgLivro,
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual é o nome do movimento de pessoas que deixam o seu país de origem voluntariamente pra viver e trabalhar em outro?",
        fotoUrl: imgImigrantes,
        opcoes: [
          { id: "a", texto: "Imigração.", correta: true },
          { id: "b", texto: "Navegação comercial." },
        ],
        feedbackAcerto:
          "Certificado. Imigração trouxe milhões de pessoas de várias nacionalidades ao Brasil entre 1870 e 1950.",
        feedbackErro:
          "Navegação comercial é sobre comércio de mercadorias. O movimento de pessoas se chama IMIGRAÇÃO.",
      },
      {
        id: "q2",
        pergunta: "A palavra ABACAXI, o costume de dormir em rede e o cultivo da mandioca vêm de qual matriz cultural?",
        fotoUrl: imgIndigena,
        opcoes: [
          { id: "a", texto: "Herança dos povos indígenas.", correta: true },
          { id: "b", texto: "Herança dos imigrantes alemães." },
        ],
        feedbackAcerto:
          "Correto. Vocabulário Tupi, rede e mandioca são heranças dos povos INDÍGENAS, primeiros habitantes do território.",
        feedbackErro:
          "Alemães trouxeram enxaimel e cerveja. Rede, tapioca e palavras Tupi são heranças INDÍGENAS.",
      },
      {
        id: "q3",
        pergunta: "A capoeira, a feijoada e o berimbau são heranças culturais de qual grupo?",
        fotoUrl: imgCapoeira,
        opcoes: [
          { id: "a", texto: "Dos povos africanos escravizados.", correta: true },
          { id: "b", texto: "Dos imigrantes japoneses." },
        ],
        feedbackAcerto:
          "Certificação concluída. Capoeira, feijoada e berimbau nasceram da resistência cultural dos povos AFRICANOS.",
        feedbackErro:
          "Japoneses trouxeram sushi e hashi. Capoeira, feijoada e berimbau vêm da matriz AFRICANA.",
      },
    ],
    selo: {
      nome: "🌍 Insígnia da Diversidade Cultural",
      subtitulo: "Quinta página do Grande Livro das Cidades restaurada",
      emoji: "🌍",
      cor: "from-green-400 via-orange-500 to-indigo-600",
      fotoUrl: imgLivro,
    },
    falaFinal:
      "Selo conquistado. A quinta página do Grande Livro das Cidades foi restaurada. Você agora entende de onde vem a diversidade do povo brasileiro.",
  },

  recompensa: { xp: 200, moedas: 100, medalha: "Guardião da Diversidade" },
};
