import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png.asset.json";
import { url as gatoImg } from "@/assets/ciencias-3ano/u2/gato.jpg.asset.json";
import { url as passarinhoImg } from "@/assets/ciencias-3ano/u2/passarinho.jpg.asset.json";
import { url as borboletaImg } from "@/assets/ciencias-3ano/u2/borboleta.jpg.asset.json";
import { url as aranhaImg } from "@/assets/ciencias-3ano/u2/aranha.jpg.asset.json";
import { url as sapoImg } from "@/assets/ciencias-3ano/u2/sapo.jpg.asset.json";
import { url as esqueletoImg } from "@/assets/ciencias-3ano/u2/esqueleto.jpg.asset.json";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-vertebrados-invertebrados",
  titulo: "O Reino Animal",
  iconeTrilha: "🦴",
  bncc: ["EF03CI04"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pelos animais. Descubra a diferença invisível entre eles.",
    mapaUrl: esqueletoImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Guardião, o app está cercado de sons de bichos: passarinho cantando, abelha zumbindo, gato correndo. Nossa missão hoje é classificar os animais em dois grandes grupos usando um segredo: quem tem osso por dentro e quem não tem.",
    falaFinal:
      "Passe a mão nas suas costas. Sente uma linha de ossinhos? Essa é a coluna vertebral. Ela guarda a chave da nossa investigação.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Antes de olhar as respostas, faça sua HIPÓTESE de cientista.",
    pergunta: "Uma BORBOLETA tem coluna de ossos por dentro do corpo?",
    fotoUrl: borboletaImg,
    opcoes: [
      { id: "sim", titulo: "SIM", subtitulo: "tem osso por dentro", emoji: "🦴", cor: "from-emerald-500 to-green-700" },
      { id: "nao", titulo: "NÃO", subtitulo: "corpo mole por dentro", emoji: "🦋", cor: "from-amber-400 to-orange-600" },
      { id: "talvez", titulo: "NÃO SEI", subtitulo: "preciso investigar", emoji: "🤔", cor: "from-slate-500 to-slate-700" },
    ],
    respostaCerta: "nao",
    feedbackAcerto: "HIPÓTESE CONFIRMADA! Borboleta é INVERTEBRADO — corpo molinho por dentro, protegido só por uma casquinha por fora.",
    feedbackErro: "Olha bem: borboleta tem corpinho fino e mole. Nenhum osso. Ela é INVERTEBRADA.",
    falaFinal: "Bichos com esqueleto por dentro = VERTEBRADOS. Bichos sem esqueleto por dentro = INVERTEBRADOS.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras que todo Guardião da Biosfera precisa dominar.",
    instrucao: "Vocabulário do Reino Animal",
    cadernos: [
      {
        id: "vertebrado",
        capa: "VERTEBRADO",
        emoji: "🦴",
        cor: "from-emerald-500 to-green-700",
        conteudo: "Animal com COLUNA VERTEBRAL e esqueleto de osso ou cartilagem POR DENTRO do corpo.",
        exemplo: "Ex.: cachorro, gato, peixe, sapo, você e eu.",
        fotoUrl: esqueletoImg,
      },
      {
        id: "invertebrado",
        capa: "INVERTEBRADO",
        emoji: "🦋",
        cor: "from-amber-500 to-orange-700",
        conteudo: "Animal SEM coluna vertebral e SEM ossos por dentro. Formam a maioria dos animais do planeta.",
        exemplo: "Ex.: borboleta, aranha, minhoca, estrela-do-mar.",
        fotoUrl: borboletaImg,
      },
      {
        id: "classificacao",
        capa: "CLASSIFICAÇÃO",
        emoji: "🔬",
        cor: "from-sky-500 to-blue-700",
        conteudo: "Ato de ORGANIZAR os seres vivos em grupos com características parecidas para facilitar o estudo.",
        exemplo: "Ex.: cientistas dividem os bichos em grupos como aves, peixes, insetos.",
        fotoUrl: brilhaImg,
      },
    ],
    falaFinal: "Vertebrado, invertebrado e classificação. Anota essas três palavras — vamos usar o tempo todo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Este é um raio-X mágico do corpo humano. Toque em cada parte para entender o esqueleto.",
    instrucao: "Toque em cada parte do esqueleto",
    mapaUrl: esqueletoImg,
    pontos: [
      { id: "cranio", x: 50, y: 12, emoji: "🧠", cor: "from-slate-400 to-slate-700", titulo: "Crânio", texto: "Osso duro que protege o cérebro.", fotoUrl: esqueletoImg },
      { id: "coluna", x: 50, y: 45, emoji: "🦴", cor: "from-emerald-500 to-green-700", titulo: "Coluna vertebral", texto: "Linha de ossos no meio das costas. É o QUE DEFINE um vertebrado.", fotoUrl: esqueletoImg },
      { id: "costelas", x: 40, y: 35, emoji: "🫁", cor: "from-rose-500 to-pink-700", titulo: "Costelas", texto: "Ossos curvos que protegem o coração e os pulmões.", fotoUrl: esqueletoImg },
      { id: "pernas", x: 45, y: 85, emoji: "🦵", cor: "from-amber-600 to-orange-800", titulo: "Ossos das pernas", texto: "Sustentam nosso peso e nos permitem andar, correr, pular.", fotoUrl: esqueletoImg },
    ],
    falaFinal: "Todo vertebrado tem esse esqueleto interno. Sem ele, nosso corpo cairia igual saco de gelatina.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Checkpoint. Três perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1", pergunta: "O gato é vertebrado ou invertebrado?", fotoUrl: gatoImg,
        cards: [
          { id: "a", emoji: "🦴", titulo: "Vertebrado — tem esqueleto e coluna", cor: "from-emerald-500 to-green-700" },
          { id: "b", emoji: "🦋", titulo: "Invertebrado — corpo mole", cor: "from-amber-500 to-orange-700" },
          { id: "c", emoji: "❓", titulo: "Nenhum dos dois", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Gato tem esqueleto igual ao seu.",
        feedbackErro: "Passe a mão no lombo de um gato: dá pra sentir os ossinhos. VERTEBRADO.",
      },
      {
        id: "q2", pergunta: "A aranha é vertebrada ou invertebrada?", fotoUrl: aranhaImg,
        cards: [
          { id: "a", emoji: "🦴", titulo: "Vertebrada", cor: "from-emerald-500 to-green-700" },
          { id: "b", emoji: "🕷️", titulo: "Invertebrada — sem ossos internos", cor: "from-amber-500 to-orange-700" },
          { id: "c", emoji: "❓", titulo: "Depende do tamanho", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "b",
        feedbackAcerto: "Sim. Aranha é INVERTEBRADA — o que a sustenta é uma casca dura por fora.",
        feedbackErro: "Aranha não tem osso nenhum. É invertebrada.",
      },
      {
        id: "q3", pergunta: "O que TODO vertebrado tem?", fotoUrl: esqueletoImg,
        cards: [
          { id: "a", emoji: "🪶", titulo: "Penas coloridas", cor: "from-slate-500 to-slate-700" },
          { id: "b", emoji: "🦴", titulo: "Coluna vertebral e esqueleto por dentro", cor: "from-emerald-500 to-green-700" },
          { id: "c", emoji: "🐚", titulo: "Concha dura por fora", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "b",
        feedbackAcerto: "Correto. Coluna vertebral = marca registrada do vertebrado.",
        feedbackErro: "O que diferencia é ter COLUNA e ESQUELETO INTERNO.",
      },
    ],
    falaFinal: "Três acertos = você entendeu a regra da classificação. Bora aprofundar.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "O reino animal se divide em duas grandes camadas: com esqueleto interno e sem esqueleto interno.",
    instrucao: "Toque nos interruptores",
    mapaUrl: esqueletoImg,
    camadas: [
      { id: "vert", rotulo: "Vertebrados", emoji: "🦴", cor: "from-emerald-500 to-green-700", rect: { x: 2, y: 30, w: 47, h: 65 }, descricao: "Peixes, anfíbios, répteis, aves e mamíferos. Todos com coluna vertebral.", fotoUrl: sapoImg },
      { id: "invert", rotulo: "Invertebrados", emoji: "🦋", cor: "from-amber-500 to-orange-700", rect: { x: 50, y: 30, w: 48, h: 65 }, descricao: "Insetos, aracnídeos, moluscos, minhocas. São mais de 95% dos animais do planeta!", fotoUrl: aranhaImg },
    ],
    falaFinal: "Os invertebrados são maioria. Os vertebrados são famosos. Ambos importantes na biosfera.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar cinco animais do menor pro maior. Todos vertebrados!",
    instrucao: "Toque nas paradas na ordem correta",
    pergunta: "Ordem: do menor vertebrado ao maior",
    paradas: [
      { id: "peixinho", emoji: "🐟", rotulo: "1. Peixinho", descricao: "Pequeno vertebrado aquático.", fotoUrl: sapoImg },
      { id: "sapo", emoji: "🐸", rotulo: "2. Sapo", descricao: "Anfíbio vertebrado — vive na água e na terra.", fotoUrl: sapoImg },
      { id: "passaro", emoji: "🐦", rotulo: "3. Passarinho", descricao: "Ave vertebrada — ossos leves para voar.", fotoUrl: passarinhoImg },
      { id: "gato", emoji: "🐈", rotulo: "4. Gato", descricao: "Mamífero vertebrado de médio porte.", fotoUrl: gatoImg },
      { id: "humano", emoji: "🧍", rotulo: "5. Humano", descricao: "Mamífero vertebrado grande e inteligente.", fotoUrl: esqueletoImg },
    ],
    ordemCerta: ["peixinho", "sapo", "passaro", "gato", "humano"],
    feedbackAcerto: "Ordem certa! Vertebrados de todo tamanho — do peixinho ao humano.",
    feedbackErro: "Repense o tamanho: peixinho < sapo < pássaro < gato < humano.",
    falaFinal: "Diferentes formas, mesma característica: TODOS têm coluna vertebral.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez de ler. Vou ficar quietinha. Toque nas palavras destacadas se tiver dúvida.",
    tituloLivro: "🔬 Relatório da Expedição · Semana 2",
    subtitulo: "Investigação: como os cientistas classificam os animais",
    paragrafos: [
      {
        id: "p1",
        texto: "A equipe observou dois animais no quintal: um gato e uma borboleta. O gato tem uma COLUNA VERTEBRAL que sustenta seu corpo — é um VERTEBRADO. A borboleta é leve, mole por dentro e só tem uma casquinha por fora — é INVERTEBRADA.",
        chaves: ["coluna vertebral", "vertebrado", "invertebrada"],
        definicoes: {
          "coluna vertebral": "Linha de ossos que sustenta o corpo dos vertebrados.",
          vertebrado: "Animal que tem esqueleto interno e coluna.",
          invertebrada: "Animal sem esqueleto interno.",
        },
        fotoUrl: gatoImg,
      },
      {
        id: "p2",
        texto: "Os cientistas fazem CLASSIFICAÇÃO para organizar o estudo. Peixes, sapos, cobras, pássaros e mamíferos são todos vertebrados. Insetos, aranhas, minhocas, caracóis e estrelas-do-mar são invertebrados.",
        chaves: ["classificação"],
        definicoes: { "classificação": "Organizar seres vivos em grupos com características parecidas." },
        fotoUrl: brilhaImg,
      },
      {
        id: "p3",
        texto: "Alguns invertebrados usam CONCHAS ou CASCAS DURAS por fora para proteger seu corpo mole por dentro — como o caracol e o besouro. É um jeito diferente de se sustentar, sem ossos.",
        chaves: ["conchas"],
        definicoes: { conchas: "Casca dura que protege o corpo mole de alguns invertebrados." },
        fotoUrl: aranhaImg,
      },
    ],
    falaFinal: "Você leu um relatório de zoologia de verdade. Um cientista de 3º ano já sabe classificar animais!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "O Raio-X dos Bichos! Passe a lanterna e classifique cada animal antes do tempo acabar.",
    instrucao: "⏱️ Veja o animal e escolha VERTEBRADO ou INVERTEBRADO",
    duracaoSegundos: 25,
    pecas: [
      { id: "vert", emoji: "🦴", rotulo: "VERTEBRADO" },
      { id: "invert", emoji: "🦋", rotulo: "INVERTEBRADO" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Late e late", emoji: "🐕", cor: "from-emerald-500 to-green-700" }, municipioB: { nome: "Tem esqueleto", emoji: "🦴", cor: "from-emerald-500 to-green-700" }, contexto: "Cachorro correndo pelo quintal, forte e cheio de ossos.", pecaCertaId: "vert", fotoUrl: gatoImg, feedbackAcerto: "Sim! Cachorro é vertebrado.", feedbackErro: "Cachorro tem esqueleto = VERTEBRADO." },
      { id: "r2", municipioA: { nome: "Voa colorida", emoji: "🦋", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Corpo leve", emoji: "💫", cor: "from-amber-500 to-orange-700" }, contexto: "Borboleta pousa na flor com asas finas e corpo molinho.", pecaCertaId: "invert", fotoUrl: borboletaImg, feedbackAcerto: "Isso! Borboleta = INVERTEBRADO.", feedbackErro: "Borboleta não tem osso. INVERTEBRADA." },
      { id: "r3", municipioA: { nome: "Salta no charco", emoji: "🐸", cor: "from-emerald-500 to-green-700" }, municipioB: { nome: "Tem coluna", emoji: "🦴", cor: "from-emerald-500 to-green-700" }, contexto: "Sapo pulando na beira do rio com coluna vertebral bem definida.", pecaCertaId: "vert", fotoUrl: sapoImg, feedbackAcerto: "Correto. Sapo é VERTEBRADO.", feedbackErro: "Sapo tem esqueleto — VERTEBRADO." },
      { id: "r4", municipioA: { nome: "Tece teia", emoji: "🕷️", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Oito perninhas", emoji: "🕸️", cor: "from-amber-500 to-orange-700" }, contexto: "Aranha esperando na teia. Nenhum osso, corpo protegido por casquinha.", pecaCertaId: "invert", fotoUrl: aranhaImg, feedbackAcerto: "Exato! Aranha = INVERTEBRADO.", feedbackErro: "Aranha não tem esqueleto interno. INVERTEBRADA." },
      { id: "r5", municipioA: { nome: "Canta no galho", emoji: "🐦", cor: "from-emerald-500 to-green-700" }, municipioB: { nome: "Ossos leves", emoji: "🪶", cor: "from-emerald-500 to-green-700" }, contexto: "Passarinho pousado no galho — leves ossos ocos para poder voar.", pecaCertaId: "vert", fotoUrl: passarinhoImg, feedbackAcerto: "Sim. Pássaro é VERTEBRADO.", feedbackErro: "Aves têm esqueleto (ossos leves e ocos) — VERTEBRADAS." },
    ],
    falaFinal: "Você acabou de virar um Detetive dos Bichos! Vertebrado ou invertebrado no piscar de olho.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Curiosidade científica: dos animais do planeta, quem é maioria?",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: aranhaImg,
    fatias: [
      { id: "invert", rotulo: "Invertebrados", emoji: "🦋", percentual: 95, cor: "#f59e0b", descricao: "Insetos, aranhas, moluscos, vermes e mais. Cerca de 95% dos animais do mundo!", exemplos: ["Borboleta", "Aranha", "Minhoca", "Caracol"], fotoUrl: borboletaImg },
      { id: "vert", rotulo: "Vertebrados", emoji: "🦴", percentual: 5, cor: "#059669", descricao: "Peixes, anfíbios, répteis, aves e mamíferos. Apenas 5% — mas os mais estudados.", exemplos: ["Gato", "Sapo", "Passarinho", "Peixe"], fotoUrl: gatoImg },
    ],
    falaFinal: "Invertebrados são maioria absoluta na Terra. Impressionante, não é?",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão. Responda 3 perguntas e leve o emblema do Raio-X.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Uma aranha e um sapinho no jardim: como classifica?", fotoUrl: sapoImg,
        opcoes: [
          { id: "a", texto: "Aranha = invertebrado (sem ossos). Sapo = vertebrado (tem esqueleto).", correta: true },
          { id: "b", texto: "Os dois são vertebrados porque saltam." },
        ],
        feedbackAcerto: "Perfeito! Aprender a olhar a estrutura, não só o comportamento.",
        feedbackErro: "Saltar não define vertebrado. O que importa é ter COLUNA por dentro." },
      { id: "q2", pergunta: "O que diferencia um vertebrado de um invertebrado?", fotoUrl: esqueletoImg,
        opcoes: [
          { id: "a", texto: "Ter ou não ter coluna vertebral e esqueleto interno", correta: true },
          { id: "b", texto: "Ter ou não ter pelos coloridos" },
        ],
        feedbackAcerto: "Isso. Coluna e esqueleto interno = vertebrado.",
        feedbackErro: "Cor e pelo não classificam. O critério é ESQUELETO INTERNO." },
      { id: "q3", pergunta: "Qual grupo tem MAIS espécies no planeta?", fotoUrl: aranhaImg,
        opcoes: [
          { id: "a", texto: "Invertebrados — cerca de 95% dos animais", correta: true },
          { id: "b", texto: "Vertebrados — são a maioria" },
        ],
        feedbackAcerto: "Correto. Invertebrados são maioria absoluta.",
        feedbackErro: "Invertebrados são cerca de 95% de todas as espécies animais." },
    ],
    selo: { nome: "Emblema do Raio-X Zoológico", subtitulo: "Guardiões da Biosfera · Missão 2 concluída", emoji: "🦴", cor: "from-emerald-400 via-green-500 to-teal-700" },
    falaFinal: "Emblema conquistado. O bosque dos animais aliados voltou a brilhar!",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Raio-X Zoológico" },
};
