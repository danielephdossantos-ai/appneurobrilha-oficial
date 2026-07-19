import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png.asset.json";
import { url as humosoImg } from "@/assets/ciencias-3ano/u1-a1/solo-humoso.jpg.asset.json";
import { url as arenosoImg } from "@/assets/ciencias-3ano/u1-a1/solo-arenoso.jpg.asset.json";
import { url as minhocaImg } from "@/assets/ciencias-3ano/u1-a1/minhoca.jpg.asset.json";
import { url as organicaImg } from "@/assets/ciencias-3ano/u1-a1/materia-organica.jpg.asset.json";
import { url as lupaImg } from "@/assets/ciencias-3ano/u1-a1/lupa-solo.jpg.asset.json";
import { url as permeaImg } from "@/assets/ciencias-3ano/u1-a1/permeabilidade.jpg.asset.json";
import { url as hortaImg } from "@/assets/ciencias-3ano/u1-a1/horta-comunitaria.jpg.asset.json";
import { url as raizesImg } from "@/assets/ciencias-3ano/u1-a1/vaso-raizes.jpg.asset.json";
import { url as potinhoImg } from "@/assets/ciencias-3ano/u1-a1/componentes-solo.jpg.asset.json";

/**
 * Ciências · 3º Ano · Unidade 1 · Aula 01
 * "A Terra sob Nossos Pés: A Composição do Solo"
 *
 * Tom: Guardiões da Biosfera. Aurora orientadora, Brilha explorador júnior,
 * aluno é o Cientista Investigador. Foco: solo vivo, componentes,
 * permeabilidade e o papel das minhocas.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-composicao-solo",
  titulo: "A Terra sob Nossos Pés",
  iconeTrilha: "🌱",
  bncc: ["EF03CI09"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a lupa pelo canteiro. Encontre pistas de que o solo não é só 'terra preta'.",
    mapaUrl: hortaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Bem-vindo aos Guardiões da Biosfera! Sou a Aurora e este é o Brilha, seu parceiro de expedição. Nossa missão hoje é entender uma coisa que fica bem embaixo dos nossos pés — mas que é a base de quase toda a vida na Terra: o SOLO.",
    falaFinal:
      "Uma parte da horta está seca e cheia de areia; a outra, verde e cheia de vida. A diferença está no solo. Vamos descobrir por quê.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de qualquer descoberta, um cientista faz uma HIPÓTESE — um palpite baseado no que já observou.",
    pergunta:
      "Se eu jogar um copo de água em cada solo, em qual a água some MAIS RÁPIDO?",
    fotoUrl: permeaImg,
    opcoes: [
      {
        id: "areia",
        titulo: "SOLO ARENOSO",
        subtitulo: "grãos grandes, seco",
        emoji: "🏖️",
        cor: "from-amber-400 to-orange-600",
      },
      {
        id: "humoso",
        titulo: "SOLO HUMOSO",
        subtitulo: "escuro, cheio de folhas",
        emoji: "🌱",
        cor: "from-emerald-500 to-green-700",
      },
      {
        id: "iguais",
        titulo: "OS DOIS IGUAIS",
        subtitulo: "não muda nada",
        emoji: "🤷",
        cor: "from-slate-500 to-slate-700",
      },
    ],
    respostaCerta: "areia",
    feedbackAcerto:
      "HIPÓTESE CONFIRMADA! Na areia os grãos são grandes, então a água escorre entre eles quase na hora. No solo humoso, a matéria orgânica segura a umidade.",
    feedbackErro:
      "Olha bem os dois: a areia tem grãos grandes e soltos, então a água passa fácil. O solo humoso segura a água pra planta beber.",
    falaFinal:
      "Isso se chama PERMEABILIDADE — a capacidade que o solo tem de deixar a água passar. É uma propriedade científica bem importante.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro palavras que todo Guardião da Biosfera precisa conhecer. Estuda uma por uma.",
    instrucao: "Vocabulário técnico do solo",
    cadernos: [
      {
        id: "solo",
        capa: "SOLO",
        emoji: "🌍",
        cor: "from-amber-600 to-orange-800",
        conteudo:
          "Camada superficial da Terra onde as plantas crescem e onde muitos animais vivem. É uma mistura VIVA de rochas quebradinhas, água, ar e restos de seres vivos.",
        exemplo: "Ex.: o chão da horta, do jardim, da floresta.",
        fotoUrl: humosoImg,
      },
      {
        id: "organica",
        capa: "MATÉRIA ORGÂNICA",
        emoji: "🍂",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "Restos de plantas e animais mortos que se misturam à terra. Vira alimento (nutrientes) pra planta crescer forte.",
        exemplo: "Ex.: folha seca que cai, fruta apodrecida, cascas de vegetais.",
        fotoUrl: organicaImg,
      },
      {
        id: "permeabilidade",
        capa: "PERMEABILIDADE",
        emoji: "💧",
        cor: "from-cyan-500 to-sky-700",
        conteudo:
          "Capacidade do solo deixar a água passar. Areia = alta (água some rápido). Argila = baixa (segura muita água).",
        exemplo: "Ex.: água some rápido na areia da praia; empoça no barro.",
        fotoUrl: permeaImg,
      },
      {
        id: "minhoca",
        capa: "MINHOCA",
        emoji: "🪱",
        cor: "from-rose-500 to-pink-700",
        conteudo:
          "Animalzinho que cava túneis no solo. Deixa entrar AR e ÁGUA, e ainda produz nutriente enquanto come folha morta. Trator natural da terra.",
        exemplo: "Ex.: 1 minhoca cava até 5 metros de túnel por semana.",
        fotoUrl: minhocaImg,
      },
    ],
    falaFinal:
      "Solo, matéria orgânica, permeabilidade e minhoca. Guarda essas quatro palavras — vamos usá-las o tempo todo na expedição.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é um pote de vidro cheio de solo saudável. Toca em cada componente pra saber sua função.",
    instrucao: "Toque em cada componente",
    mapaUrl: potinhoImg,
    pontos: [
      {
        id: "folhas",
        x: 35, y: 30,
        emoji: "🍂",
        cor: "from-emerald-500 to-green-700",
        titulo: "Folhas secas",
        texto: "Matéria orgânica. Ao se decompor, vira nutriente que alimenta as plantas.",
        fotoUrl: organicaImg,
      },
      {
        id: "terra",
        x: 50, y: 55,
        emoji: "🟫",
        cor: "from-amber-700 to-stone-800",
        titulo: "Terra escura (húmus)",
        texto: "Rocha quebrada há milhares de anos + matéria orgânica = solo fértil.",
        fotoUrl: humosoImg,
      },
      {
        id: "raiz",
        x: 55, y: 40,
        emoji: "🌱",
        cor: "from-lime-500 to-green-700",
        titulo: "Raiz da planta",
        texto: "Suga a água e os nutrientes do solo pra planta crescer.",
        fotoUrl: raizesImg,
      },
      {
        id: "pedras",
        x: 50, y: 85,
        emoji: "🪨",
        cor: "from-slate-500 to-slate-700",
        titulo: "Pedrinhas",
        texto: "Rochas em decomposição — a matéria-prima que forma o solo bem devagar.",
        fotoUrl: potinhoImg,
      },
      {
        id: "ar",
        x: 20, y: 40,
        emoji: "💨",
        cor: "from-sky-400 to-blue-600",
        titulo: "Ar entre os grãos",
        texto: "Sim! Tem ar dentro do solo. As raízes e as minhocas precisam respirar.",
        fotoUrl: lupaImg,
      },
    ],
    falaFinal:
      "Solo saudável é uma verdadeira comunidade: matéria orgânica, água, ar, minerais e seres vivos trabalhando juntos.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Checkpoint da expedição. 3 perguntas — toca no card certo.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O solo é feito só de terra preta?",
        fotoUrl: potinhoImg,
        cards: [
          { id: "a", emoji: "✅", titulo: "Não — é rocha, água, ar, matéria orgânica e seres vivos", cor: "from-emerald-500 to-green-700" },
          { id: "b", emoji: "🟫", titulo: "Sim, só terra e nada mais", cor: "from-slate-500 to-slate-700" },
          { id: "c", emoji: "💧", titulo: "É feito só de água", cor: "from-cyan-500 to-sky-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso. Solo é uma MISTURA VIVA — não é só terra, é um ecossistema.",
        feedbackErro: "Solo é mistura: pedrinhas, água, ar, folha morta e bichinhos. Nunca só terra.",
      },
      {
        id: "q2",
        pergunta: "Por que a minhoca é amiga do agricultor?",
        fotoUrl: minhocaImg,
        cards: [
          { id: "a", emoji: "🪱", titulo: "Cava túneis, deixa entrar ar e água, e produz nutriente", cor: "from-rose-500 to-pink-700" },
          { id: "b", emoji: "🥗", titulo: "Come as plantas todas", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "😴", titulo: "Só dorme na terra", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "a",
        feedbackAcerto: "Perfeito. A minhoca é um trator natural — sem ela, o solo fica compactado e seco.",
        feedbackErro: "Minhoca NÃO come planta viva. Come folha morta e cava túneis que oxigenam o solo.",
      },
      {
        id: "q3",
        pergunta: "Qual solo segura MAIS água pra planta beber?",
        fotoUrl: permeaImg,
        cards: [
          { id: "a", emoji: "🏖️", titulo: "Areia da praia", cor: "from-amber-500 to-orange-700" },
          { id: "b", emoji: "🌱", titulo: "Solo humoso da horta", cor: "from-emerald-500 to-green-700" },
          { id: "c", emoji: "🪨", titulo: "Só pedra", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "b",
        feedbackAcerto: "Sim. Matéria orgânica funciona como esponja — segura a água por muito mais tempo.",
        feedbackErro: "Na areia a água some rápido. No solo humoso, a matéria orgânica prende a umidade.",
      },
    ],
    falaFinal:
      "Três acertos = você entendeu o esqueleto do assunto. Vamos aprofundar em como as partes se organizam.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "O solo tem duas grandes zonas: a parte NÃO-VIVA (mineral) e a parte VIVA (biológica). Liga cada camada pra ver as duas.",
    instrucao: "Toque nos interruptores",
    mapaUrl: humosoImg,
    camadas: [
      {
        id: "mineral",
        rotulo: "Parte mineral",
        emoji: "🪨",
        cor: "from-amber-600 to-stone-800",
        rect: { x: 2, y: 30, w: 47, h: 65 },
        descricao:
          "Rocha quebrada em pedacinhos ao longo de milhares de anos: areia, silte e argila. É a base do solo.",
        fotoUrl: arenosoImg,
      },
      {
        id: "biologica",
        rotulo: "Parte viva e orgânica",
        emoji: "🪱",
        cor: "from-emerald-500 to-green-700",
        rect: { x: 50, y: 30, w: 48, h: 65 },
        descricao:
          "Minhocas, formigas, fungos, bactérias e restos de folha. Deixa o solo fértil e respirável.",
        fotoUrl: minhocaImg,
      },
    ],
    falaFinal:
      "Sem a parte mineral não há estrutura. Sem a parte viva não há vida. Solo saudável precisa das duas.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Como a folha que cai no chão vira alimento pra próxima planta? Monte o ciclo na ordem certa.",
    instrucao: "Toque nas paradas na ORDEM correta",
    pergunta: "Ciclo da matéria orgânica no solo",
    paradas: [
      {
        id: "cai",
        emoji: "🍂",
        rotulo: "1. Folha cai",
        descricao: "No outono, folhas amarelas caem da árvore e cobrem o chão.",
        fotoUrl: organicaImg,
      },
      {
        id: "come",
        emoji: "🪱",
        rotulo: "2. Minhoca come",
        descricao: "Minhocas, fungos e bactérias começam a comer e quebrar a folha.",
        fotoUrl: minhocaImg,
      },
      {
        id: "humus",
        emoji: "🟫",
        rotulo: "3. Vira húmus",
        descricao: "A folha se transforma em uma terra escura riquíssima chamada húmus.",
        fotoUrl: humosoImg,
      },
      {
        id: "raiz",
        emoji: "🌱",
        rotulo: "4. Raiz absorve",
        descricao: "A raiz da nova planta suga água e nutrientes do húmus.",
        fotoUrl: raizesImg,
      },
      {
        id: "nasce",
        emoji: "🌳",
        rotulo: "5. Nova vida",
        descricao: "A planta cresce forte, dá frutos, e um dia solta folhas de novo. Ciclo recomeça.",
        fotoUrl: hortaImg,
      },
    ],
    ordemCerta: ["cai", "come", "humus", "raiz", "nasce"],
    feedbackAcerto:
      "Ciclo completo! Nada se perde na natureza — tudo vira alimento pro próximo ser vivo.",
    feedbackErro:
      "Repense: a folha CAI antes da minhoca comer, e vira HÚMUS antes da raiz absorver.",
    falaFinal:
      "Esse ciclo se chama DECOMPOSIÇÃO. É o motor invisível que mantém a Biosfera funcionando.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez de ler sozinho. Vou ficar em silêncio. Toca nas palavras destacadas se tiver dúvida.",
    tituloLivro: "🔬 Relatório da Expedição · Semana 1",
    subtitulo: "Investigação: o que faz um solo ser saudável?",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A equipe abriu um potinho transparente com terra da horta comunitária. Com a LUPA, conseguimos ver que o SOLO não é uma coisa só: tem pedrinhas, folhas secas, umidade e até bichinhos bem pequenos que quase não dá pra ver a olho nu.",
        chaves: ["lupa", "solo"],
        definicoes: {
          lupa: "Instrumento que amplia detalhes pequenos demais pro olho.",
          solo: "Camada da Terra onde as plantas crescem — mistura de rocha, água, ar e seres vivos.",
        },
        fotoUrl: lupaImg,
      },
      {
        id: "p2",
        texto:
          "Testamos dois tipos de solo. O SOLO ARENOSO deixou a água passar em segundos — baixa PERMEABILIDADE de retenção. Já o SOLO HUMOSO segurou a água por muito tempo, graças à MATÉRIA ORGÂNICA (folhas mortas) que funciona como esponja.",
        chaves: ["permeabilidade", "matéria orgânica"],
        definicoes: {
          permeabilidade: "Capacidade do solo deixar a água passar.",
          "matéria orgânica": "Restos de plantas e animais que se decompõem no solo.",
        },
        fotoUrl: permeaImg,
      },
      {
        id: "p3",
        texto:
          "Observamos uma MINHOCA cavando túneis na terra. Ela come folha morta e devolve pro solo um adubo riquíssimo. Sem esses trabalhadores invisíveis, o solo ficaria duro, seco e sem vida. Por isso a chamamos de guardiã da biosfera.",
        chaves: ["minhoca"],
        definicoes: {
          minhoca: "Animal que cava túneis no solo e produz nutrientes. Amiga do agricultor.",
        },
        fotoUrl: minhocaImg,
      },
    ],
    falaFinal:
      "Você leu um relatório científico de verdade. Um cientista de 3º ano já sabe o que faz um solo ser saudável.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Simulador de campo. Cada rodada mostra uma cena — identifica o que a natureza está fazendo antes do tempo acabar!",
    instrucao: "⏱️ Leia a cena e escolha a peça certa",
    duracaoSegundos: 22,
    pecas: [
      { id: "solo", emoji: "🌍", rotulo: "Solo" },
      { id: "organica", emoji: "🍂", rotulo: "Matéria orgânica" },
      { id: "permeabilidade", emoji: "💧", rotulo: "Permeabilidade" },
      { id: "minhoca", emoji: "🪱", rotulo: "Minhoca" },
      { id: "humus", emoji: "🟫", rotulo: "Húmus (solo fértil)" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Copo d'água na areia", emoji: "🏖️", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Água some em 3 segundos", emoji: "⏱️", cor: "from-cyan-500 to-sky-700" },
        contexto:
          "A equipe joga um copo de água no solo arenoso da praia. A água desaparece quase na hora.",
        pecaCertaId: "permeabilidade",
        fotoUrl: permeaImg,
        feedbackAcerto: "Isso! Água passando rápido = alta PERMEABILIDADE.",
        feedbackErro: "A água atravessando o solo se chama PERMEABILIDADE.",
      },
      {
        id: "r2",
        municipioA: { nome: "Cava túnel na terra", emoji: "🪱", cor: "from-rose-500 to-pink-700" },
        municipioB: { nome: "Oxigena o solo", emoji: "💨", cor: "from-sky-400 to-blue-600" },
        contexto:
          "Um bichinho comprido e rosado abre um túnel na terra escura. Ar e água entram atrás dele.",
        pecaCertaId: "minhoca",
        fotoUrl: minhocaImg,
        feedbackAcerto: "Exato. A MINHOCA é o trator natural do solo.",
        feedbackErro: "Só a minhoca cava túneis desse jeito no solo.",
      },
      {
        id: "r3",
        municipioA: { nome: "Folha seca no chão", emoji: "🍂", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Vira comida da planta", emoji: "🌱", cor: "from-emerald-500 to-green-700" },
        contexto:
          "A folha caiu, apodreceu e virou parte da terra. Agora alimenta a nova plantinha.",
        pecaCertaId: "organica",
        fotoUrl: organicaImg,
        feedbackAcerto: "Sim. Restos de vida que viram alimento = MATÉRIA ORGÂNICA.",
        feedbackErro: "Toda planta e animal morto que se decompõe é MATÉRIA ORGÂNICA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Terra escura fofinha", emoji: "🟫", cor: "from-amber-700 to-stone-800" },
        municipioB: { nome: "Planta cresce forte", emoji: "🌳", cor: "from-emerald-500 to-green-700" },
        contexto:
          "Depois de muita matéria orgânica se decompondo, o solo virou uma terra escura e riquíssima.",
        pecaCertaId: "humus",
        fotoUrl: humosoImg,
        feedbackAcerto: "Correto! Essa terra fértil se chama HÚMUS.",
        feedbackErro: "A terra escura, fértil, formada por decomposição, é o HÚMUS.",
      },
      {
        id: "r5",
        municipioA: { nome: "Chão da floresta", emoji: "🌍", cor: "from-amber-600 to-stone-800" },
        municipioB: { nome: "Mistura viva", emoji: "🌱", cor: "from-emerald-500 to-green-700" },
        contexto:
          "Um lugar cheio de pedrinhas, ar, água, raízes e bichinhos. Base de quase toda a vida da Terra.",
        pecaCertaId: "solo",
        fotoUrl: potinhoImg,
        feedbackAcerto: "Perfeito. Essa mistura viva se chama SOLO.",
        feedbackErro: "A mistura de rocha, água, ar e vida é o SOLO.",
      },
    ],
    falaFinal:
      "Você identifica cada elemento do solo. Tá pronto pra sair do laboratório e ir a campo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos ver o solo dividido em duas grandes partes: o que NÃO É VIVO e o que É VIVO.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: humosoImg,
    fatias: [
      {
        id: "naoVivo",
        rotulo: "Parte não-viva",
        emoji: "🪨",
        percentual: 55,
        cor: "#b45309",
        descricao:
          "Pedrinhas, areia, argila, água e ar. A estrutura mineral que sustenta o solo.",
        exemplos: ["Areia da praia", "Argila do rio", "Ar entre os grãos", "Água da chuva"],
        fotoUrl: arenosoImg,
      },
      {
        id: "vivo",
        rotulo: "Parte viva",
        emoji: "🪱",
        percentual: 45,
        cor: "#059669",
        descricao:
          "Minhocas, fungos, bactérias, raízes e restos de folha em decomposição. Onde acontece a vida.",
        exemplos: ["Minhocas", "Folhas mortas", "Raízes", "Fungos e bactérias"],
        fotoUrl: minhocaImg,
      },
    ],
    falaFinal:
      "Parte não-viva dá estrutura. Parte viva dá vida. As duas juntas fazem o SOLO SAUDÁVEL.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão da unidade. Responda 3 perguntas e ganhe o emblema de Guardião da Terra.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      {
        id: "q1",
        pergunta: "Por que as minhocas são chamadas de amigas do solo?",
        fotoUrl: minhocaImg,
        opcoes: [
          { id: "a", texto: "Cavam túneis, deixam entrar ar e água e produzem nutrientes", correta: true },
          { id: "b", texto: "Porque comem todas as plantas da horta" },
        ],
        feedbackAcerto: "Correto. Minhoca é engenheira do solo — sem ela, a terra vira pedra.",
        feedbackErro: "Minhoca NÃO come planta viva. Ela come folha morta e melhora o solo.",
      },
      {
        id: "q2",
        pergunta: "O que é PERMEABILIDADE?",
        fotoUrl: permeaImg,
        opcoes: [
          { id: "a", texto: "A capacidade do solo deixar a água passar", correta: true },
          { id: "b", texto: "A cor que o solo tem" },
        ],
        feedbackAcerto: "Isso. Areia = alta permeabilidade. Argila = baixa. Húmus = média (ideal pra planta).",
        feedbackErro: "Permeabilidade fala de ÁGUA passando pelo solo, não de cor.",
      },
      {
        id: "q3",
        pergunta: "O solo saudável é feito só de terra preta?",
        fotoUrl: potinhoImg,
        opcoes: [
          { id: "a", texto: "Não — é rocha, água, ar, matéria orgânica e seres vivos", correta: true },
          { id: "b", texto: "Sim, só terra preta e nada mais" },
        ],
        feedbackAcerto: "Exato. Solo é uma comunidade viva — não é só terra, é ecossistema.",
        feedbackErro: "Solo é mistura de vários componentes. Nunca só terra preta.",
      },
    ],
    selo: {
      nome: "Emblema Protetor da Terra",
      subtitulo: "Guardiões da Biosfera · Missão 1 concluída",
      emoji: "🌱",
      cor: "from-emerald-400 via-green-500 to-teal-700",
    },
    falaFinal:
      "Seu emblema de Protetor da Terra está registrado. A horta comunitária foi restaurada. Próxima missão logo mais.",
  },

  recompensa: {
    xp: 150,
    moedas: 30,
    medalha: "Guardião da Terra",
  },
};
