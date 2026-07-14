import type { AulaGeoV1 } from "../../types";
import { url as imgInfograficoFluxo } from "@/assets/historia-3ano/infografico-campo-cidade.jpg.asset.json";
import { url as imgInfograficoMP } from "@/assets/historia-3ano/infografico-materia-prima.jpg.asset.json";
import { url as imgFeiraAntiga } from "@/assets/historia-3ano/feira-antiga-sepia.jpg.asset.json";
import { url as imgFeiraHoje } from "@/assets/historia-3ano/feira-livre-hoje.jpg.asset.json";
import { url as imgCaminhao } from "@/assets/historia-3ano/caminhao-carga.jpg.asset.json";
import { url as imgAlgodao } from "@/assets/historia-3ano/algodao-campo.jpg.asset.json";
import { url as imgFabrica } from "@/assets/historia-3ano/fabrica-textil.jpg.asset.json";
import { url as imgSupermercado } from "@/assets/historia-3ano/supermercado.jpg.asset.json";
import { url as imgVaca } from "@/assets/historia-3ano/vaca-leite.jpg.asset.json";
import { url as imgMorango } from "@/assets/historia-3ano/plantacao-morango.jpg.asset.json";
import { url as imgCampo } from "@/assets/historia-3ano/campo-real.jpg.asset.json";
import { url as imgCidade } from "@/assets/historia-3ano/cidade-real.jpg.asset.json";
import { url as imgLivro } from "@/assets/historia-3ano/livro-cidades.jpg.asset.json";
/**
 * História · 3º Ano · Unidade 2 · Aula 01
 * "O Campo e a Cidade: Vidas Conectadas"
 * Restaura a Página 2 do Grande Livro das Cidades: A Rota dos Alimentos.
 * Skin visual: fotografia real + infográfico técnico. Zero cartoon.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-campo-e-cidade",
  titulo: "O Campo e a Cidade: Vidas Conectadas",
  iconeTrilha: "🚛",
  bncc: ["EF03HI03", "EF03HI04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a fotografia. Você está vendo o momento exato em que a matéria-prima do CAMPO viaja pela estrada para chegar até a CIDADE.",
    mapaUrl: imgCaminhao,
    imagemDestaqueUrl: imgInfograficoFluxo,
    aurora:
      "Pequeno Historiador, o pão que você comeu hoje no café da manhã não nasceu na padaria. O trigo brotou numa lavoura a centenas de quilômetros dali. Como será que o CAMPO e a CIDADE conseguem trabalhar juntos todos os dias, sem parar?",
    falaFinal:
      "A resposta se chama INTERDEPENDÊNCIA: o campo produz o alimento e a matéria-prima; a cidade industrializa, distribui e oferece serviços. Um não vive sem o outro.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de eu explicar tudo, quero seu palpite de investigador. Olhando o fluxo entre campo e cidade, qual das duas frases é a mais correta?",
    pergunta: "Como o campo e a cidade se relacionam?",
    fotoUrl: imgInfograficoFluxo,
    opcoes: [
      {
        id: "dependencia",
        titulo: "Um depende do outro",
        subtitulo: "campo alimenta a cidade, cidade abastece o campo",
        emoji: "🔄",
        cor: "from-emerald-500 to-teal-700",
        fotoUrl: imgInfograficoMP,
      },
      {
        id: "separados",
        titulo: "Vivem separados",
        subtitulo: "cada um resolve tudo sozinho",
        emoji: "✂️",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgCidade,
      },
    ],
    respostaCerta: "dependencia",
    feedbackAcerto:
      "Correto. Campo e cidade formam uma REDE DE INTERDEPENDÊNCIA. O agricultor precisa do trator (feito na cidade); o morador da cidade precisa do arroz (plantado no campo).",
    feedbackErro:
      "Não vivem separados. Sem o campo, a cidade não come. Sem a cidade, o campo não tem ferramentas, hospital, escola de graduação. Os dois se sustentam mutuamente.",
    falaFinal:
      "Guarde essa ideia central: campo e cidade são PARCEIROS OBRIGATÓRIOS dentro do mesmo município e entre municípios diferentes.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três palavras técnicas que todo historiador do 3º ano precisa dominar quando estuda a economia do município. Cada caderno está aberto com foto real e definição.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "materia-prima",
        capa: "Matéria-prima",
        emoji: "🌾",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgAlgodao,
        conteudo:
          "MATÉRIA-PRIMA é o material natural retirado do campo (agricultura, pecuária, extração vegetal) que ainda vai ser transformado numa fábrica. Ex: algodão vira camiseta; leite vira queijo; tronco de árvore vira lápis.",
        exemplo: "Exemplo: o algodão colhido em Mato Grosso é matéria-prima. Depois de tecido, vira roupa.",
      },
      {
        id: "industrializacao",
        capa: "Industrialização",
        emoji: "🏭",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgFabrica,
        conteudo:
          "INDUSTRIALIZAÇÃO é o processo que acontece dentro da fábrica: máquinas e trabalhadores transformam a matéria-prima em PRODUTO acabado, pronto pra ser vendido. Costuma acontecer na zona urbana, perto de estradas e mão de obra.",
        exemplo: "Exemplo: na fábrica têxtil, o algodão vira fio, o fio vira tecido, o tecido vira camiseta.",
      },
      {
        id: "abastecimento",
        capa: "Abastecimento",
        emoji: "🚛",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgCaminhao,
        conteudo:
          "ABASTECIMENTO é o transporte e distribuição dos produtos. Caminhões, trens e barcos levam o alimento do campo para os supermercados e feiras da cidade. Sem estradas boas, não há abastecimento.",
        exemplo: "Exemplo: o morango colhido de manhã na fazenda chega no supermercado da cidade no mesmo dia por caminhão refrigerado.",
      },
    ],
    falaFinal:
      "Matéria-prima, Industrialização e Abastecimento: o vocabulário técnico da relação campo × cidade. Vamos usar essas três palavras o tempo inteiro.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o infográfico oficial da rota do alimento no Brasil. Toque em cada ponto pra eu explicar o que acontece em cada etapa da cadeia produtiva.",
    instrucao: "Toque em cada ponto do fluxo pra ouvir a explicação",
    mapaUrl: imgInfograficoFluxo,
    pontos: [
      {
        id: "campo",
        x: 18,
        y: 55,
        emoji: "🌱",
        cor: "from-emerald-600 to-emerald-800",
        fotoUrl: imgAlgodao,
        titulo: "1. CAMPO — produção",
        texto:
          "Tudo começa aqui. Agricultores e pecuaristas produzem a matéria-prima: grãos, frutas, verduras, leite, carne, algodão, madeira. É a etapa AGRÍCOLA da cadeia.",
      },
      {
        id: "transporte",
        x: 48,
        y: 55,
        emoji: "🚛",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgCaminhao,
        titulo: "2. TRANSPORTE — abastecimento",
        texto:
          "Caminhões, trens e barcos carregam a produção pelas rodovias. É o ABASTECIMENTO: sem transporte eficiente, o alimento estraga antes de chegar. O Brasil depende principalmente de caminhões.",
      },
      {
        id: "industria",
        x: 68,
        y: 45,
        emoji: "🏭",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgFabrica,
        titulo: "3. INDÚSTRIA — transformação",
        texto:
          "Nas fábricas urbanas, a matéria-prima vira produto: leite vira iogurte, tomate vira molho, algodão vira camiseta. É a INDUSTRIALIZAÇÃO. Gera empregos na cidade.",
      },
      {
        id: "consumo",
        x: 85,
        y: 65,
        emoji: "🛒",
        cor: "from-rose-600 to-rose-800",
        fotoUrl: imgSupermercado,
        titulo: "4. CONSUMO — comércio",
        texto:
          "O produto chega ao supermercado, à feira, à padaria e à sua casa. É o CONSUMO. Cada real gasto aqui volta em forma de renda para o agricultor, o motorista e o industrial.",
      },
    ],
    falaFinal:
      "Campo → Transporte → Indústria → Consumo. Essa é a cadeia produtiva que faz o Brasil funcionar todos os dias.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Três perguntas de verificação. Cada uma testa se você domina o vocabulário técnico da cadeia produtiva.",
    instrucao: "Toque no card correto pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "O leite tirado da vaca ainda dentro da fazenda é o quê?",
        fotoUrl: imgVaca,
        cards: [
          { id: "mp", emoji: "🌾", titulo: "Matéria-prima", cor: "from-emerald-500 to-emerald-700" },
          { id: "pi", emoji: "🏭", titulo: "Produto industrializado", cor: "from-slate-500 to-slate-700" },
          { id: "ab", emoji: "🚛", titulo: "Abastecimento", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "mp",
        feedbackAcerto:
          "Correto. Direto da vaca, o leite é MATÉRIA-PRIMA. Só vira produto industrializado depois de passar pela fábrica de laticínios.",
        feedbackErro:
          "Ainda não passou pela fábrica. Direto da vaca, o leite é matéria-prima.",
      },
      {
        id: "q2",
        pergunta: "Uma camiseta pronta pendurada na loja é o quê?",
        fotoUrl: imgFabrica,
        cards: [
          { id: "mp", emoji: "🌾", titulo: "Matéria-prima", cor: "from-emerald-500 to-emerald-700" },
          { id: "pi", emoji: "👕", titulo: "Produto industrializado", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "pi",
        feedbackAcerto:
          "Exato. A camiseta já passou pela fábrica têxtil (industrialização). É um PRODUTO INDUSTRIALIZADO.",
        feedbackErro:
          "Matéria-prima é o algodão bruto. A camiseta já foi tecida, cortada e costurada — é produto industrializado.",
      },
      {
        id: "q3",
        pergunta: "O que faz a matéria-prima chegar da fazenda até a fábrica?",
        fotoUrl: imgCaminhao,
        cards: [
          { id: "ab", emoji: "🚛", titulo: "O abastecimento (transporte)", cor: "from-amber-500 to-orange-700" },
          { id: "ma", emoji: "✨", titulo: "Aparece por mágica", cor: "from-rose-500 to-rose-700" },
        ],
        correta: "ab",
        feedbackAcerto:
          "Certeza. Sem caminhão, sem estrada, sem porto — não há abastecimento. É a etapa de logística.",
        feedbackErro:
          "Não é mágica. É o ABASTECIMENTO — o conjunto de estradas, caminhões e trens que movem a matéria-prima.",
      },
    ],
    falaFinal:
      "Radar afinado. Você já opera com o vocabulário técnico: matéria-prima, industrialização, abastecimento.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou ativar dois interruptores em cima do mesmo infográfico: um destaca o QUE O CAMPO ENVIA pra cidade, outro destaca O QUE A CIDADE ENVIA pro campo. Veja como a troca acontece nos dois sentidos.",
    instrucao: "Toque nos interruptores pra ver o que cada lado envia",
    mapaUrl: imgInfograficoFluxo,
    camadas: [
      {
        id: "campo-envia",
        rotulo: "Campo → Cidade",
        emoji: "🌾",
        cor: "from-emerald-600 to-emerald-800",
        rect: { x: 0, y: 30, w: 45, h: 55 },
        descricao:
          "O campo ENVIA: alimentos (arroz, feijão, leite, carne, frutas), matérias-primas (algodão, madeira, minério), fibras e insumos naturais. Sem o campo, a cidade passa fome em poucos dias.",
      },
      {
        id: "cidade-envia",
        rotulo: "Cidade → Campo",
        emoji: "🏭",
        cor: "from-slate-600 to-slate-800",
        rect: { x: 55, y: 30, w: 45, h: 55 },
        descricao:
          "A cidade ENVIA: tratores, adubos, sementes melhoradas, ferramentas industriais, roupas, eletrodomésticos, remédios, serviços de hospital especializado, universidade, banco e internet. Sem a cidade, o campo não moderniza.",
      },
    ],
    falaFinal:
      "Duas setas, um só sistema. É a ida e a volta que mantém o município vivo e produtivo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos rastrear uma camiseta desde o pé de algodão até a sua gaveta. Organize as 4 etapas na ordem correta da cadeia produtiva têxtil.",
    instrucao: "Toque nas etapas na ordem certa (do início ao fim)",
    pergunta: "Como o algodão vira camiseta?",
    paradas: [
      {
        id: "colheita",
        emoji: "🌱",
        rotulo: "1. Colheita no campo",
        fotoUrl: imgAlgodao,
        descricao:
          "Etapa 1: o algodão amadurece no campo. Colhedeira ou trabalhadores retiram o fardo bruto. É a matéria-prima na sua forma original.",
      },
      {
        id: "transporte",
        emoji: "🚛",
        rotulo: "2. Transporte pra fábrica",
        fotoUrl: imgCaminhao,
        descricao:
          "Etapa 2: caminhões carregam os fardos pela rodovia até a fábrica têxtil na cidade. É o abastecimento industrial.",
      },
      {
        id: "fabrica",
        emoji: "🏭",
        rotulo: "3. Industrialização",
        fotoUrl: imgFabrica,
        descricao:
          "Etapa 3: na fábrica, máquinas fiam o algodão em fio, tecem o fio em pano, cortam e costuram a camiseta. Matéria-prima virou produto.",
      },
      {
        id: "venda",
        emoji: "🛒",
        rotulo: "4. Loja / Consumo",
        fotoUrl: imgSupermercado,
        descricao:
          "Etapa 4: a camiseta pronta chega ao comércio urbano. Um consumidor compra, veste, e o dinheiro volta pra girar toda a cadeia de novo.",
      },
    ],
    ordemCerta: ["colheita", "transporte", "fabrica", "venda"],
    feedbackAcerto:
      "Cadeia completa. Colheita → Transporte → Fábrica → Consumo. Toda camiseta do mundo passa por essas 4 etapas.",
    feedbackErro:
      "Essa não é a próxima etapa. Pense: o que precisa acontecer ANTES da fábrica poder trabalhar? E o que só acontece DEPOIS de tudo estar pronto?",
    falaFinal:
      "Você acabou de mapear uma CADEIA PRODUTIVA. É assim que geógrafos e historiadores estudam a economia real do país.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Silêncio agora. Leia a Página 2 do Grande Livro das Cidades com seus próprios olhos e toque nas palavras destacadas quando quiser a definição.",
    tituloLivro: "📜 O Grande Livro das Cidades",
    subtitulo: "Página 2 — A Rota dos Alimentos",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O CAMPO e a CIDADE não vivem separados. Eles fazem parte de uma REDE DE INTERDEPENDÊNCIA: o campo produz a MATÉRIA-PRIMA (alimentos e insumos naturais) e envia para a cidade; a cidade industrializa, distribui e oferece serviços de volta ao campo.",
        chaves: ["matéria-prima", "interdependência"],
        definicoes: {
          "matéria-prima":
            "Material natural retirado do campo (agrícola ou extrativo) que ainda será transformado em produto na fábrica.",
          interdependência:
            "Situação em que dois lugares ou grupos DEPENDEM um do outro pra funcionar. Nenhum vive sozinho.",
        },
        fotoUrl: imgInfograficoFluxo,
      },
      {
        id: "p2",
        texto:
          "Dentro das fábricas urbanas acontece a INDUSTRIALIZAÇÃO: máquinas e trabalhadores transformam a matéria-prima em PRODUTO ACABADO. O algodão vira camiseta, o tomate vira molho, o leite vira queijo. Depois, o produto retorna às lojas e feiras.",
        chaves: ["industrialização", "produto acabado"],
        definicoes: {
          industrialização:
            "Processo de transformar matéria-prima em produto usando máquinas e trabalho humano dentro de uma fábrica.",
          "produto acabado":
            "Item pronto pra venda direta ao consumidor. Ex: camiseta, molho de tomate, iogurte.",
        },
        fotoUrl: imgInfograficoMP,
      },
      {
        id: "p3",
        texto:
          "Sem o ABASTECIMENTO — o transporte por caminhões, trens e barcos — nada disso funciona. As rodovias brasileiras carregam mais de 60% da carga do país todos os dias. Um bloqueio de estrada pode deixar supermercados VAZIOS em uma semana.",
        chaves: ["abastecimento", "rodovias"],
        definicoes: {
          abastecimento:
            "Transporte e distribuição da produção até os pontos de venda. Depende de estradas, caminhões e portos.",
          rodovias:
            "Estradas asfaltadas de longa distância que ligam cidades e estados. No Brasil, as principais têm nome (BR-101, BR-116).",
        },
        fotoUrl: imgCaminhao,
      },
      {
        id: "p4",
        texto:
          "Quando você paga por um pão na padaria, seu dinheiro se divide entre o AGRICULTOR (que plantou o trigo), o TRANSPORTADOR (que trouxe a farinha), o INDUSTRIAL (que moeu o trigo) e o COMERCIANTE (que assou e vendeu). É a CADEIA PRODUTIVA em ação.",
        chaves: ["cadeia produtiva"],
        definicoes: {
          "cadeia produtiva":
            "Sequência de etapas — produção, transporte, indústria e comércio — pela qual passa um produto até chegar ao consumidor.",
        },
        fotoUrl: imgFeiraHoje,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com suas próprias palavras, por que campo e cidade são parceiros obrigatórios.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de campo do historiador. Cada rodada mostra um item da economia. Você tem que classificar rápido: é MATÉRIA-PRIMA (bruta, do campo), é PRODUTO INDUSTRIALIZADO (transformado na fábrica) ou é SERVIÇO (que a cidade oferece)?",
    instrucao: "⏱️ Leia a pista e toque na classificação correta antes do tempo acabar",
    duracaoSegundos: 20,
    pecas: [
      { id: "mp", emoji: "🌾", rotulo: "Matéria-prima" },
      { id: "pi", emoji: "🏭", rotulo: "Produto industrializado" },
      { id: "sv", emoji: "🏥", rotulo: "Serviço urbano" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Leite direto da vaca", emoji: "🥛", cor: "from-emerald-600 to-emerald-800" },
        municipioB: { nome: "Ordenha na fazenda", emoji: "🐄", cor: "from-teal-500 to-emerald-700" },
        contexto:
          "Vaca ordenhada de manhã cedo, leite ainda quente sendo colocado no latão. Como classificamos?",
        pecaCertaId: "mp",
        fotoUrl: imgVaca,
        feedbackAcerto: "Correto. Direto da vaca = MATÉRIA-PRIMA. Ainda não passou por fábrica.",
        feedbackErro: "Leite direto da vaca é matéria-prima. Só vira produto industrializado após pasteurização e embalagem.",
      },
      {
        id: "r2",
        municipioA: { nome: "Iogurte de morango", emoji: "🍓", cor: "from-rose-500 to-pink-700" },
        municipioB: { nome: "Prateleira refrigerada", emoji: "❄️", cor: "from-sky-500 to-indigo-700" },
        contexto:
          "Pote de iogurte de morango na prateleira refrigerada do supermercado, com rótulo, prazo de validade, código de barras. Como classificamos?",
        pecaCertaId: "pi",
        fotoUrl: imgSupermercado,
        feedbackAcerto: "Correto. Iogurte já passou pela fábrica (pasteurização, adição de fermento, embalagem) — é PRODUTO INDUSTRIALIZADO.",
        feedbackErro: "Iogurte não sai pronto da vaca. É produto industrializado — passou por fábrica de laticínios.",
      },
      {
        id: "r3",
        municipioA: { nome: "Consulta médica no hospital", emoji: "🩺", cor: "from-slate-500 to-slate-700" },
        municipioB: { nome: "Atendimento pediátrico", emoji: "🏥", cor: "from-slate-600 to-slate-800" },
        contexto:
          "Um agricultor traz o filho pra consulta num hospital da cidade. Ele não sai com um produto na mão — sai com o filho tratado. Como classificamos?",
        pecaCertaId: "sv",
        fotoUrl: imgCidade,
        feedbackAcerto: "Correto. Atendimento médico é SERVIÇO URBANO — a cidade oferece serviços que o campo raramente tem.",
        feedbackErro: "Consulta médica não é produto material. É SERVIÇO — algo que a cidade oferece ao campo.",
      },
      {
        id: "r4",
        municipioA: { nome: "Fardo de algodão", emoji: "☁️", cor: "from-emerald-600 to-emerald-800" },
        municipioB: { nome: "Colheita mecanizada", emoji: "🌱", cor: "from-teal-500 to-emerald-700" },
        contexto:
          "Fardos brancos de algodão empilhados no pátio da fazenda, prontos pra serem carregados no caminhão. Como classificamos?",
        pecaCertaId: "mp",
        fotoUrl: imgAlgodao,
        feedbackAcerto: "Correto. Algodão bruto empilhado = MATÉRIA-PRIMA agrícola. Vira produto só na fábrica têxtil.",
        feedbackErro: "Algodão bruto ainda não foi tecido. É matéria-prima — a fábrica ainda vai transformar em fio, pano e camiseta.",
      },
    ],
    falaFinal:
      "Missão concluída. Você classifica corretamente qualquer item da economia: matéria-prima, produto industrializado ou serviço urbano.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos fechar a aula com uma comparação em duas fatias. De um lado, o que o CAMPO fornece. Do outro, o que a CIDADE oferece de volta. Toque em cada fatia pra revisar.",
    instrucao: "Toque nas fatias pra ouvir sobre cada lado da rede",
    fotoUrl: imgInfograficoFluxo,
    fatias: [
      {
        id: "campo",
        rotulo: "Campo fornece",
        emoji: "🌾",
        percentual: 50,
        cor: "#059669",
        descricao:
          "Do campo saem os alimentos frescos, os grãos, a carne, o leite, as fibras naturais (algodão, lã) e a madeira. Sem essa produção agrícola e pecuária, a cidade fica sem comida em poucos dias.",
        exemplos: ["Frutas, verduras e legumes", "Leite, carne e ovos", "Grãos: arroz, feijão, soja", "Algodão e madeira"],
        fotoUrl: imgCampo,
      },
      {
        id: "cidade",
        rotulo: "Cidade oferece",
        emoji: "🏭",
        percentual: 50,
        cor: "#475569",
        descricao:
          "A cidade oferece de volta: máquinas agrícolas (trator, colheitadeira), fertilizantes, produtos industrializados, hospitais especializados, universidades, bancos e internet. Sem esses serviços, o campo não moderniza.",
        exemplos: ["Trator, colheitadeira, sementes", "Roupas e eletrodomésticos", "Hospital e universidade", "Banco e internet"],
        fotoUrl: imgCidade,
      },
    ],
    falaFinal:
      "Duas fatias complementares. Uma não vive sem a outra. Juntas, formam a economia real do município e do país.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última etapa: 3 perguntas de certificação. Se acertar, você restaura a segunda página do Grande Livro das Cidades e ganha o Distintivo do Jovem Produtor.",
    instrucao: "Responda as 3 perguntas de certificação",
    fotoUrl: imgLivro,
    perguntas: [
      {
        id: "q1",
        pergunta: "Como chamamos os materiais naturais que a cidade retira do campo pra transformar em produtos nas fábricas?",
        fotoUrl: imgAlgodao,
        opcoes: [
          { id: "a", texto: "Matéria-prima.", correta: true },
          { id: "b", texto: "Produtos digitais." },
        ],
        feedbackAcerto:
          "Certificado. Matéria-prima é a base de tudo que consumimos. Sem ela, nenhuma fábrica funciona.",
        feedbackErro:
          "Produtos digitais são feitos de código. A resposta é MATÉRIA-PRIMA — o material bruto do campo que vira produto na fábrica.",
      },
      {
        id: "q2",
        pergunta: "Qual etapa da cadeia produtiva conecta o campo à cidade e faz o alimento chegar antes de estragar?",
        fotoUrl: imgCaminhao,
        opcoes: [
          { id: "a", texto: "O abastecimento (transporte por caminhões e rodovias).", correta: true },
          { id: "b", texto: "Nada. O alimento aparece direto no supermercado." },
        ],
        feedbackAcerto:
          "Correto. Abastecimento é a logística. Sem estradas boas, o Brasil pararia de comer.",
        feedbackErro:
          "Não aparece por mágica. É o ABASTECIMENTO — caminhões e rodovias — que move a produção do campo até a cidade.",
      },
      {
        id: "q3",
        pergunta: "Um agricultor precisa de trator novo. Ele vai encontrar essa máquina no campo ou na cidade?",
        fotoUrl: imgFabrica,
        opcoes: [
          { id: "a", texto: "Na cidade. Trator é fabricado na indústria urbana.", correta: true },
          { id: "b", texto: "No campo. Trator nasce nas fazendas." },
        ],
        feedbackAcerto:
          "Certificação concluída. É por isso que a cidade também abastece o campo — com máquinas, ferramentas e serviços.",
        feedbackErro:
          "Trator não nasce em fazenda. É fabricado por indústrias urbanas e vendido ao produtor rural — mais uma prova da interdependência.",
      },
    ],
    selo: {
      nome: "🚛 Distintivo do Jovem Produtor",
      subtitulo: "Segunda página do Grande Livro das Cidades restaurada",
      emoji: "🌾",
      cor: "from-emerald-400 via-teal-500 to-cyan-600",
      fotoUrl: imgLivro,
    },
    falaFinal:
      "Selo conquistado. A segunda página do Grande Livro das Cidades foi restaurada. Você agora entende como campo e cidade sustentam um ao outro.",
  },

  recompensa: { xp: 200, moedas: 100, medalha: "Jovem Produtor" },
};
