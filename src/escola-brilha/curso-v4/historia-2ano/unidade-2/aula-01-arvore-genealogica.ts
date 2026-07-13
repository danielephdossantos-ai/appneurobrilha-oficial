import type { AulaGeoV1 } from "../../types";
import imgArvore from "@/assets/historia-2ano/arvore-genealogica-brilha.png";
import imgCaixa from "@/assets/historia-2ano/caixa-fotos-antigas.png";
import imgCertidao from "@/assets/historia-2ano/certidao-antiga.png";
import imgSapatinhos from "@/assets/historia-2ano/sapatinhos-bronze.png";
import imgMala from "@/assets/historia-2ano/mala-velha-objetos.png";
import imgTradicao from "@/assets/historia-2ano/tradicao-bolo-familia.png";
import imgAvos from "@/assets/historia-2ano/avos-familia.png";
import imgPais from "@/assets/historia-2ano/pais-familia.png";
import imgBrilhaCrianca from "@/assets/historia-2ano/presente-brilha-agora.png";
import imgFotoAntiga from "@/assets/historia-2ano/foto-antiga.png";

/**
 * História · 2º Ano · Unidade 2 · Aula 01
 * "Minha História e Minha Família" — EF02HI03 + EF02HI04
 *
 * Missão: Investigar as origens da família e montar a Sala 2 do Museu —
 * Árvore Genealógica + Álbum. Recompensa: Engrenagem de Prata.
 */

export const aula01: AulaGeoV1 = {
  slug: "aula-01-arvore-genealogica",
  titulo: "Minha História e Minha Família",
  iconeTrilha: "🌳",
  bncc: ["EF02HI03", "EF02HI04"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a caixa de fotos antigas. Procure pistas que provam que a família do Brilha vem de MUITO tempo atrás.",
    mapaUrl: imgCaixa,
    imagemDestaqueUrl: imgFotoAntiga,
    aurora:
      "Pequeno Historiador, o Brilha achou uma caixa de sapatos na casa da avó, cheia de fotos amareladas! Tinha uma foto de um menino igualzinho a ele — mas era a AVÓ dele quando era criança. Pega a lupa e investiga!",
    falaFinal:
      "Viu? Fotos sépia, roupas antigas, papel amarelado — a família tem HISTÓRIA. E toda história começa nos avós, bisavós, tataravós. É isso que a gente vai descobrir hoje.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de eu explicar, quero seu palpite de investigador. Qual documento prova quem foram os primeiros familiares que deram origem à sua história?",
    pergunta: "Qual documento conta quem são seus pais e avós?",
    fotoUrl: imgCertidao,
    opcoes: [
      {
        id: "certidao",
        titulo: "Certidão de nascimento",
        subtitulo: "papel oficial com o nome dos pais e avós",
        emoji: "📜",
        cor: "from-amber-400 to-orange-600",
        fotoUrl: imgCertidao,
      },
      {
        id: "sapatinho",
        titulo: "Sapatinho de bronze",
        subtitulo: "recordação bonita, mas sem nomes",
        emoji: "👟",
        cor: "from-yellow-500 to-amber-700",
        fotoUrl: imgSapatinhos,
      },
    ],
    respostaCerta: "certidao",
    feedbackAcerto:
      "Isso! Na certidão de nascimento estão escritos os nomes dos seus pais E dos seus avós — maternos e paternos.",
    feedbackErro:
      "Quase! O sapatinho é uma lembrança linda, mas quem PROVA os nomes da família é a certidão de nascimento.",
    falaFinal:
      "Guarda essa ideia: documento prova, objeto lembra. Agora vamos aprender as 3 palavras do historiador da família.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Todo Pequeno Historiador da família tem 3 cadernos abertos. Cada um guarda uma palavra importante.",
    instrucao: "Leia os cadernos abertos",
    cadernos: [
      {
        id: "geracao",
        capa: "Geração",
        emoji: "👨‍👩‍👧",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgArvore,
        conteudo:
          "Geração é cada 'andar' da família. Seus avós são uma geração, seus pais outra, e você a terceira. Cada geração tem uma idade parecida.",
        exemplo: "Vovó, mamãe, você = 3 gerações diferentes.",
      },
      {
        id: "arvore",
        capa: "Árvore Genealógica",
        emoji: "🌳",
        cor: "from-emerald-500 to-teal-700",
        fotoUrl: imgArvore,
        conteudo:
          "É um desenho em forma de árvore que mostra TODA a família junta. A raiz é os mais antigos (bisavós, avós), o tronco é os pais e os galhos de cima são as crianças.",
        exemplo: "Raiz: avós • Tronco: pais • Galhos: você e irmãos.",
      },
      {
        id: "tradicao",
        capa: "Tradição",
        emoji: "🎂",
        cor: "from-rose-500 to-pink-700",
        fotoUrl: imgTradicao,
        conteudo:
          "Tradição é um costume que passa de pais pra filhos por MUITOS anos. Uma receita, uma festa, uma música — coisas que a família repete e cuida junto.",
        exemplo: "O bolo de fubá da vovó é uma tradição da família.",
      },
    ],
    falaFinal:
      "Geração, Árvore Genealógica e Tradição — 3 palavras que o historiador da família usa toda hora.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Esta é a Árvore Genealógica do Brilha. Toca em cada balão que eu conto quem mora em cada galho.",
    instrucao: "Toque em cada balão pra ouvir a Aurora contar",
    mapaUrl: imgArvore,
    pontos: [
      {
        id: "raiz",
        x: 25,
        y: 82,
        emoji: "👵",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgAvos,
        titulo: "Raiz: Vovó e Vovô",
        texto:
          "Aqui na raiz da árvore moram os AVÓS. Eles são a geração mais antiga da casa. Guardam as histórias, as receitas e as fotos da família.",
      },
      {
        id: "tronco",
        x: 50,
        y: 55,
        emoji: "👩",
        cor: "from-emerald-500 to-teal-700",
        fotoUrl: imgPais,
        titulo: "Tronco: Mamãe e Papai",
        texto:
          "No meio, no tronco, ficam PAPAI e MAMÃE (e os tios). Eles são a geração do meio — filhos dos avós e pais das crianças.",
      },
      {
        id: "galhos",
        x: 75,
        y: 25,
        emoji: "🧒",
        cor: "from-sky-500 to-indigo-700",
        fotoUrl: imgBrilhaCrianca,
        titulo: "Galhos: Brilha e irmãos",
        texto:
          "Lá em cima, nos galhos novos, está o BRILHA e os irmãos dele. É a geração mais nova — onde a família começa uma memória novinha.",
      },
    ],
    falaFinal:
      "Raiz, tronco, galhos. Toda árvore genealógica funciona assim: do mais antigo pro mais novo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do historiador da família ligado! 3 perguntas — toca no card certo.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem mora na RAIZ da árvore genealógica?",
        fotoUrl: imgAvos,
        cards: [
          { id: "a", emoji: "👵", titulo: "Avós", cor: "from-amber-400 to-orange-600" },
          { id: "p", emoji: "👩", titulo: "Pais", cor: "from-emerald-400 to-teal-600" },
          { id: "c", emoji: "🧒", titulo: "Crianças", cor: "from-sky-400 to-indigo-600" },
        ],
        correta: "a",
        feedbackAcerto:
          "Isso! A raiz é dos AVÓS — a geração mais antiga da família.",
        feedbackErro:
          "Quase! A raiz é o começo da árvore. É onde moram os AVÓS.",
      },
      {
        id: "q2",
        pergunta: "Qual documento prova quem são seus pais e avós?",
        fotoUrl: imgCertidao,
        cards: [
          { id: "c", emoji: "📜", titulo: "Certidão", cor: "from-amber-400 to-orange-600" },
          { id: "f", emoji: "📸", titulo: "Foto antiga", cor: "from-emerald-400 to-teal-600" },
          { id: "s", emoji: "👟", titulo: "Sapatinho", cor: "from-sky-400 to-indigo-600" },
        ],
        correta: "c",
        feedbackAcerto:
          "Certeza! A certidão de nascimento tem os nomes escritos oficialmente.",
        feedbackErro:
          "Foto e sapatinho são recordações. Quem PROVA é a certidão de nascimento.",
      },
      {
        id: "q3",
        pergunta: "A receita de bolo que passa de vó pra mãe pra filha é o quê?",
        fotoUrl: imgTradicao,
        cards: [
          { id: "t", emoji: "🎂", titulo: "Tradição", cor: "from-amber-400 to-orange-600" },
          { id: "g", emoji: "👨‍👩‍👧", titulo: "Geração", cor: "from-emerald-400 to-teal-600" },
          { id: "a", emoji: "🌳", titulo: "Árvore", cor: "from-sky-400 to-indigo-600" },
        ],
        correta: "t",
        feedbackAcerto:
          "Combo! Costume que passa de pais pra filhos é TRADIÇÃO.",
        feedbackErro:
          "Pensa: um costume que se repete por muitos anos na família se chama TRADIÇÃO.",
      },
    ],
    falaFinal:
      "Radar afinado! Você já sabe ler uma árvore genealógica e reconhecer uma tradição.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou te dar dois interruptores pra iluminar a árvore da família: um acende a GERAÇÃO PASSADA (avós e bisavós) e o outro acende a GERAÇÃO PRESENTE (pais, tios e você).",
    instrucao: "Toque nos interruptores pra acender cada geração",
    mapaUrl: imgArvore,
    camadas: [
      {
        id: "passada",
        rotulo: "Geração Passada",
        emoji: "👵",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 5, y: 55, w: 90, h: 45 },
        descricao:
          "Aqui moram os AVÓS e BISAVÓS. Eles guardam as tradições, as histórias antigas e as receitas mais velhas da família.",
      },
      {
        id: "presente",
        rotulo: "Geração Presente",
        emoji: "👨‍👩‍👧",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 5, y: 5, w: 90, h: 50 },
        descricao:
          "Aqui moram PAIS, TIOS e VOCÊ. É onde novas memórias e fotos são feitas todos os dias.",
      },
    ],
    falaFinal:
      "Duas gerações iluminadas — e uma depende da outra. Sem raiz não tem galho.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos montar a árvore genealógica do MAIS ANTIGO pro MAIS NOVO. Toca em cada parada na ordem certa.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como a família cresce no tempo?",
    paradas: [
      {
        id: "avos",
        emoji: "👵",
        rotulo: "Avós",
        fotoUrl: imgAvos,
        descricao: "Primeiro vieram os AVÓS — geração mais antiga da família.",
      },
      {
        id: "pais",
        emoji: "👩",
        rotulo: "Pais",
        fotoUrl: imgPais,
        descricao: "Depois vieram os PAIS — filhos dos avós.",
      },
      {
        id: "brilha",
        emoji: "🧒",
        rotulo: "Brilha",
        fotoUrl: imgBrilhaCrianca,
        descricao: "Agora está o BRILHA — filho dos pais e neto dos avós.",
      },
    ],
    ordemCerta: ["avos", "pais", "brilha"],
    feedbackAcerto:
      "Árvore montada! Avós → Pais → Você. Assim toda família cresce no tempo.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: quem nasceu ANTES?",
    falaFinal:
      "Toda árvore genealógica caminha assim: dos mais antigos pros mais novos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua vez. Eu fico calada. Você lê o Diário da Família com seus próprios olhos.",
    tituloLivro: "📔 Diário do Pequeno Historiador da Família",
    subtitulo: "Página 2 — Minha história começou antes de mim",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Toda pessoa faz parte de uma família com várias gerações. Uma geração é cada 'andar' da família: seus avós são uma, seus pais são outra, e você é a mais nova.",
        chaves: ["geração", "família", "avós"],
        definicoes: {
          geração:
            "Geração é cada andar da família: pessoas que nasceram em uma época parecida.",
          família:
            "Família é o grupo de pessoas ligadas por parentesco, amor e história em comum.",
          avós:
            "Avós são os pais dos seus pais. Eles pertencem à geração mais antiga da casa.",
        },
        fotoUrl: imgArvore,
      },
      {
        id: "p2",
        texto:
          "A árvore genealógica é o desenho que organiza a família toda. Na raiz ficam os bisavós e avós, no tronco ficam pais e tios, e nos galhos ficam você e seus irmãos.",
        chaves: ["árvore genealógica", "raiz", "galhos"],
        definicoes: {
          "árvore genealógica":
            "Desenho em forma de árvore que mostra todas as gerações da família juntas.",
          raiz:
            "Parte de baixo da árvore, onde moram os familiares mais antigos.",
          galhos:
            "Parte de cima da árvore, onde moram as crianças da família.",
        },
        fotoUrl: imgArvore,
      },
      {
        id: "p3",
        texto:
          "A certidão de nascimento é o documento oficial que prova quem são seus pais e avós. Ela guarda os nomes que ligam você às outras gerações da família.",
        chaves: ["certidão de nascimento", "documento", "pais"],
        definicoes: {
          "certidão de nascimento":
            "Papel oficial com o nome dos seus pais e avós, feito quando você nasceu.",
          documento:
            "Papel que prova alguma coisa importante — como quem é sua família.",
          pais:
            "Pai e mãe: as pessoas que cuidam de você e são filhos dos seus avós.",
        },
        fotoUrl: imgCertidao,
      },
      {
        id: "p4",
        texto:
          "Cada família tem suas tradições — costumes que passam de pais para filhos. Pode ser uma receita, uma festa, uma música ou uma brincadeira. As tradições ligam o passado ao presente.",
        chaves: ["tradição", "costumes", "receita"],
        definicoes: {
          tradição:
            "Costume que a família repete por muitos anos, passando de geração em geração.",
          costumes:
            "Coisas que a família faz sempre do mesmo jeito, com carinho.",
          receita:
            "Modo de preparar uma comida. Muitas receitas antigas viram tradição da família.",
        },
        fotoUrl: imgTradicao,
      },
    ],
    falaFinal:
      "Leitura de historiador da família! Você já sabe: geração, árvore, documento e tradição.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Achado na Mala Velha do Vovô! Cada rodada mostra um objeto. Você lê e toca se ele conta a história da FAMÍLIA ou se é MODERNO fora de lugar!",
    instrucao: "⏱️ Leia o objeto e toque no cartão certo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "familia", emoji: "📸", rotulo: "Conta história da família" },
      { id: "moderno", emoji: "📱", rotulo: "Objeto moderno fora de lugar" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Álbum de fotos antigo", emoji: "📖", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Fotos sépia da vovó", emoji: "👵", cor: "from-yellow-600 to-amber-800" },
        contexto:
          "Um álbum grande, cheio de fotos amareladas da vovó quando era criança. Isso conta a história da família ou é moderno demais?",
        pecaCertaId: "familia",
        fotoUrl: imgCaixa,
        feedbackAcerto: "Combo! Álbum antigo é PISTA da história da família.",
        feedbackErro: "Repara: sépia e amareladas. Isso é PASSADO da família.",
      },
      {
        id: "r2",
        municipioA: { nome: "Fita cassete de vídeo", emoji: "📼", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "VHS do casamento", emoji: "💒", cor: "from-yellow-600 to-amber-800" },
        contexto:
          "Uma fita de vídeo grandona (VHS) com o casamento dos pais gravado. Isso é memória da família ou é moderno demais?",
        pecaCertaId: "familia",
        fotoUrl: imgMala,
        feedbackAcerto: "Isso! Fita VHS é PASSADO da família — memória guardada.",
        feedbackErro: "Fita VHS é MUITO antiga. Guardava memórias da família.",
      },
      {
        id: "r3",
        municipioA: { nome: "Relógio de bolso do vovô", emoji: "⏱️", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Corrente dourada antiga", emoji: "📿", cor: "from-yellow-600 to-amber-800" },
        contexto:
          "Um relógio de bolso dourado que o vovô carregava sempre. Herança de família ou objeto moderno?",
        pecaCertaId: "familia",
        fotoUrl: imgMala,
        feedbackAcerto: "Combo! Relógio de bolso é HERANÇA da família.",
        feedbackErro: "Relógio de bolso do vovô é HERANÇA — conta a história.",
      },
      {
        id: "r4",
        municipioA: { nome: "Tablet novinho", emoji: "📱", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Comprado hoje", emoji: "🛒", cor: "from-cyan-500 to-blue-700" },
        contexto:
          "Um tablet colorido, novinho, comprado esse ano. Achou dentro da mala velha do vovô. Faz sentido estar aí?",
        pecaCertaId: "moderno",
        fotoUrl: imgMala,
        feedbackAcerto:
          "Detetive esperto! Tablet é MODERNO — não pertence à mala antiga do vovô.",
        feedbackErro:
          "Repara: tablet é de agora, mala é do vovô. Está FORA de lugar.",
      },
    ],
    falaFinal:
      "Detetive de família aprovado! Você já sabe separar objeto antigo (memória) de objeto moderno.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos olhar a árvore genealógica dividida em duas fatias. De um lado, as GERAÇÕES ANTIGAS. Do outro, a GERAÇÃO NOVA. E no meio, a família inteira.",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada geração",
    fotoUrl: imgArvore,
    fatias: [
      {
        id: "antiga",
        rotulo: "Geração Antiga",
        emoji: "👵",
        percentual: 50,
        cor: "#f59e0b",
        descricao:
          "Bisavós e avós — os mais antigos. Guardam tradições, receitas, fotos e histórias que vêm de longe.",
        exemplos: ["Vovó e vovô", "Bisavós", "Fotos sépia e receitas antigas"],
        fotoUrl: imgAvos,
      },
      {
        id: "nova",
        rotulo: "Geração Nova",
        emoji: "🧒",
        percentual: 50,
        cor: "#6366f1",
        descricao:
          "Pais, tios e você — a família que vive AGORA. Criam memórias novas todo dia e recebem as tradições dos mais velhos.",
        exemplos: ["Papai e mamãe", "Tios", "Você e irmãos"],
        fotoUrl: imgPais,
      },
    ],
    falaFinal:
      "Duas fatias, uma árvore só. A família só existe porque as duas gerações estão juntas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão pra recuperar a Engrenagem de PRATA do Relógio do Tempo! 3 perguntas e o selo é seu.",
    instrucao: "Responda 3 perguntas rápidas pra ganhar o selo",
    fotoUrl: imgArvore,
    perguntas: [
      {
        id: "q1",
        pergunta:
          "Como se chama o desenho que organiza avós, pais e crianças da família?",
        fotoUrl: imgArvore,
        opcoes: [
          { id: "a", texto: "Árvore Genealógica", correta: true },
          { id: "b", texto: "Mapa do Tesouro" },
        ],
        feedbackAcerto:
          "Isso aí! Ela tem esse nome porque cresce a partir das RAÍZES da família.",
        feedbackErro:
          "Quase! O desenho da família se chama ÁRVORE GENEALÓGICA.",
      },
      {
        id: "q2",
        pergunta:
          "Qual documento prova oficialmente quem são seus pais e avós?",
        fotoUrl: imgCertidao,
        opcoes: [
          { id: "a", texto: "Certidão de nascimento", correta: true },
          { id: "b", texto: "Foto antiga" },
          { id: "c", texto: "Sapatinho de bronze" },
        ],
        feedbackAcerto: "Combo! A certidão tem os nomes escritos oficialmente.",
        feedbackErro: "Foto e sapatinho lembram. Só a CERTIDÃO prova.",
      },
      {
        id: "q3",
        pergunta:
          "A receita de bolo que passa da vovó pra mamãe e da mamãe pra você é uma…",
        fotoUrl: imgTradicao,
        opcoes: [
          { id: "a", texto: "Tradição da família", correta: true },
          { id: "b", texto: "Regra da escola" },
        ],
        feedbackAcerto:
          "Isso! Costume que passa de pais pra filhos é TRADIÇÃO.",
        feedbackErro:
          "Regra é da escola. O que passa de pais pra filhos é TRADIÇÃO.",
      },
    ],
    selo: {
      nome: "Engrenagem de Prata",
      subtitulo: "2 de 7 engrenagens do Relógio do Tempo recuperada",
      emoji: "⚙️",
      cor: "from-slate-300 to-slate-500",
      fotoUrl: imgArvore,
    },
    falaFinal:
      "Sala 2 do museu aberta: Álbum da Família! Segunda engrenagem no lugar — o Relógio do Tempo já anda melhor.",
  },

  recompensa: { xp: 300, moedas: 150, medalha: "Engrenagem de Prata" },
};
