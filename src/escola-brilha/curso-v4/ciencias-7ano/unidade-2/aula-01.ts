import type { AulaGeoV1 } from "../../types";
import { url as microorgImg } from "@/assets/ciencias-7ano/u2-a1/microorganismos.jpg.asset.json";
import { url as arvoreImg } from "@/assets/ciencias-7ano/u2-a1/arvore-filogenetica.jpg.asset.json";
import { url as especiesImg } from "@/assets/ciencias-7ano/u2-a1/especies-comparadas.jpg.asset.json";

/**
 * Ciências · 7º Ano · Unidade 2 · Aula 01
 * "Árvore da Vida" — Departamento de Diversidade Biológica.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-arvore-da-vida",
  titulo: "Árvore da Vida",
  iconeTrilha: "🌳",
  recompensa: { xp: 130, moedas: 50, medalha: "Taxonomista Júnior" },
  bncc: ["EF07CI08"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Placa de Petri sob microscópio. Toque para iniciar.",
    mapaUrl: microorgImg,
    imagemDestaqueUrl: arvoreImg,
    aurora:
      "Departamento 2: Diversidade Biológica. Missão: mapear os grandes grupos de seres vivos e entender por que a biologia os organiza em uma ÁRVORE — não em uma lista.",
    falaFinal:
      "Toda vida na Terra descende de um ancestral comum. A árvore da vida mostra as RAMIFICAÇÕES dessa história.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Uma bactéria, um cogumelo e um cachorro. Qual desses TRÊS é mais parecido com uma planta em termos de célula?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: especiesImg,
    opcoes: [
      { id: "bacteria", titulo: "Bactéria", subtitulo: "menor e mais simples", emoji: "🦠", cor: "from-rose-500 to-red-700", fotoUrl: microorgImg },
      { id: "cogumelo", titulo: "Cogumelo (fungo)", subtitulo: "fixo no solo, sem locomoção", emoji: "🍄", cor: "from-emerald-500 to-teal-700", fotoUrl: especiesImg },
      { id: "cachorro", titulo: "Cachorro", subtitulo: "ambos são multicelulares", emoji: "🐕", cor: "from-slate-500 to-slate-700", fotoUrl: especiesImg },
    ],
    respostaCerta: "cogumelo",
    feedbackAcerto:
      "Errado no óbvio, certo no científico: FUNGOS e PLANTAS parecem parecidos (fixos, sem locomoção), mas fungos são geneticamente MAIS PRÓXIMOS de animais que de plantas. Aparência engana.",
    feedbackErro:
      "Bactéria é MUITO diferente (não tem núcleo). Cachorro se move — parece oposto de planta. Mas o cogumelo, apesar de parecer planta, tem célula com parede de QUITINA (igual a insetos), não de celulose.",
    falaFinal:
      "Classificação moderna se baseia em DNA e ancestralidade — não em aparência. Essa é a virada da biologia.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco grupos-chave da árvore da vida. Cada um com uma célula ou corpo distinto.",
    instrucao: "Vocabulário taxonômico",
    cadernos: [
      { id: "bacterias", capa: "BACTÉRIAS", emoji: "🦠", cor: "from-rose-500 to-pink-700", conteudo: "Procariontes — SEM núcleo definido. Unicelulares. Vivem em TODOS os ambientes: solo, água, ar, dentro do seu intestino.", exemplo: "Ex.: E. coli, cianobactérias, lactobacilos do iogurte.", fotoUrl: microorgImg },
      { id: "protistas", capa: "PROTISTAS", emoji: "🔬", cor: "from-sky-500 to-cyan-700", conteudo: "Eucariontes unicelulares OU coloniais. Grupo diverso: alguns fazem fotossíntese (algas), outros caçam (protozoários).", exemplo: "Ex.: paramécio, amebas, algas microscópicas.", fotoUrl: microorgImg },
      { id: "fungos", capa: "FUNGOS", emoji: "🍄", cor: "from-amber-500 to-orange-700", conteudo: "Eucariontes com parede de QUITINA (igual insetos). Decompõem matéria orgânica — reciclam nutrientes na natureza.", exemplo: "Ex.: cogumelos, mofo, levedura do pão.", fotoUrl: especiesImg },
      { id: "plantas", capa: "PLANTAS", emoji: "🌿", cor: "from-emerald-500 to-green-700", conteudo: "Eucariontes multicelulares com CLOROFILA. Produzem seu próprio alimento por fotossíntese. Base de quase toda cadeia alimentar terrestre.", exemplo: "Ex.: samambaia, jatobá, milho, orquídea.", fotoUrl: especiesImg },
      { id: "animais", capa: "ANIMAIS", emoji: "🐆", cor: "from-red-500 to-rose-700", conteudo: "Eucariontes multicelulares HETEROTRÓFICOS — comem outros seres. Sem parede celular, geralmente com locomoção.", exemplo: "Ex.: onça-pintada, estrela-do-mar, humanos.", fotoUrl: especiesImg },
    ],
    falaFinal:
      "Cinco reinos clássicos: bactérias, protistas, fungos, plantas, animais. Vocabulário base da taxonomia.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "A árvore filogenética. Toque em cada ramo para investigar.",
    instrucao: "Toque nos ramos da árvore",
    mapaUrl: arvoreImg,
    pontos: [
      { id: "raiz", x: 20, y: 80, emoji: "🌱", cor: "from-slate-500 to-slate-700", titulo: "Ancestral comum", texto: "Há ~3,8 bilhões de anos surgiu a primeira célula. TODA vida atual descende dela. Por isso todos usamos DNA e as mesmas 20 aminoácidos.", fotoUrl: microorgImg },
      { id: "procariontes", x: 30, y: 55, emoji: "🦠", cor: "from-rose-500 to-red-700", titulo: "Procariontes", texto: "Bactérias e arqueias. Sem núcleo definido. Foram os únicos seres vivos por 2 bilhões de anos.", fotoUrl: microorgImg },
      { id: "eucariontes", x: 60, y: 50, emoji: "🔬", cor: "from-sky-500 to-cyan-700", titulo: "Eucariontes", texto: "Célula com núcleo. Surgiram ~2 bilhões de anos atrás. Deram origem a protistas, fungos, plantas e animais.", fotoUrl: arvoreImg },
      { id: "multicelulares", x: 80, y: 25, emoji: "🌳", cor: "from-emerald-500 to-teal-700", titulo: "Multicelulares", texto: "Plantas, fungos e animais complexos surgiram há ~600 milhões de anos. Corpos com tecidos e órgãos especializados.", fotoUrl: especiesImg },
    ],
    falaFinal:
      "Do simples ao complexo — 3,8 bilhões de anos de evolução em uma árvore só.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão sobre a diversidade.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual grupo é composto por PROCARIONTES (sem núcleo definido)?", fotoUrl: microorgImg,
        cards: [
          { id: "a", emoji: "🦠", titulo: "Bactérias", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🍄", titulo: "Fungos", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌿", titulo: "Plantas", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Só bactérias e arqueias são procariontes. Fungos, plantas e animais têm núcleo.",
        feedbackErro: "Fungos e plantas são EUCARIONTES (têm núcleo). Só bactérias/arqueias são procariontes." },
      { id: "q2", pergunta: "Qual grupo faz FOTOSSÍNTESE como fonte principal de energia?", fotoUrl: especiesImg,
        cards: [
          { id: "a", emoji: "🌿", titulo: "Plantas", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🍄", titulo: "Fungos", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🐆", titulo: "Animais", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Plantas têm clorofila. Fungos decompõem, animais comem outros seres.",
        feedbackErro: "Fungos decompõem matéria morta. Animais são heterotróficos. Só PLANTAS (e algas) fazem fotossíntese." },
      { id: "q3", pergunta: "A classificação moderna dos seres vivos se baseia principalmente em...", fotoUrl: arvoreImg,
        cards: [
          { id: "a", emoji: "🧬", titulo: "DNA e ancestralidade evolutiva", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "👁️", titulo: "Aparência externa dos animais", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "📏", titulo: "Tamanho do organismo", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. DNA revela parentesco real — o que aparência não mostra.",
        feedbackErro: "Aparência engana (baleia parece peixe, mas é mamífero). Ciência moderna usa DNA." },
    ],
    falaFinal:
      "Você já lê a árvore da vida. Próximo passo: entender POR DENTRO um desses grupos — o corpo humano.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Toda árvore da vida se divide em duas grandes zonas: MICROSCÓPICA (procariontes + protistas — invisíveis a olho nu) e MACROSCÓPICA (fungos, plantas e animais — visíveis).",
    instrucao: "Toque nos interruptores",
    mapaUrl: arvoreImg,
    camadas: [
      { id: "micro", rotulo: "Mundo Microscópico", emoji: "🦠", cor: "from-rose-500 to-red-700", rect: { x: 5, y: 45, w: 45, h: 50 }, descricao: "Bactérias, arqueias, protistas. Dominam a biosfera em número — há mais bactérias no seu intestino do que células humanas no seu corpo.", fotoUrl: microorgImg },
      { id: "macro", rotulo: "Mundo Macroscópico", emoji: "🌳", cor: "from-emerald-500 to-teal-700", rect: { x: 50, y: 10, w: 45, h: 60 }, descricao: "Fungos, plantas e animais. Corpos multicelulares complexos. Formam florestas, recifes, savanas — os ecossistemas visíveis.", fotoUrl: especiesImg },
    ],
    falaFinal:
      "Duas escalas da vida — ambas essenciais. Sem bactérias, nenhum ecossistema funciona.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "A LINHA DO TEMPO da vida na Terra. Ordene os grandes eventos.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ordene do mais antigo ao mais recente:",
    paradas: [
      { id: "bacterias", emoji: "🦠", rotulo: "1. Bactérias", descricao: "~3,8 bi de anos atrás. Primeiras células.", fotoUrl: microorgImg },
      { id: "eucariontes", emoji: "🔬", rotulo: "2. Eucariontes", descricao: "~2 bi de anos. Célula com núcleo.", fotoUrl: microorgImg },
      { id: "plantas", emoji: "🌿", rotulo: "3. Plantas terrestres", descricao: "~500 mi de anos. Vegetação coloniza o solo.", fotoUrl: especiesImg },
      { id: "dinossauros", emoji: "🦖", rotulo: "4. Dinossauros", descricao: "~230 mi de anos. Auge dos répteis.", fotoUrl: especiesImg },
      { id: "humanos", emoji: "🧍", rotulo: "5. Homo sapiens", descricao: "~300 mil anos. Espécie MUITO recente.", fotoUrl: especiesImg },
    ],
    ordemCerta: ["bacterias", "eucariontes", "plantas", "dinossauros", "humanos"],
    feedbackAcerto:
      "Exato. Bactérias há 3,8 bi. Humanos há 0,0003 bi. A vida existe há MUITO mais tempo que nós.",
    feedbackErro:
      "Do MAIS ANTIGO ao MAIS RECENTE: bactérias → eucariontes → plantas → dinossauros → humanos.",
    falaFinal:
      "99,99% da história da vida aconteceu ANTES de nós. Somos recém-chegados.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório sobre uma amostra do lago.",
    tituloLivro: "📓 Relatório · Amostra 07 — Água do Lago",
    subtitulo: "Análise microscópica de biodiversidade em uma gota",
    paragrafos: [
      { id: "p1", texto: "COLETA: obtivemos 5 mL de água do Lago Municipal, próximo à margem. A amostra apresentava coloração verde-clara e leve turbidez, sugerindo presença de MICRO-ORGANISMOS.", chaves: ["micro-organismos"], definicoes: { "micro-organismos": "Seres vivos só visíveis ao microscópio." }, fotoUrl: microorgImg },
      { id: "p2", texto: "OBSERVAÇÃO (aumento 400x): identificamos ao menos QUATRO grupos distintos na mesma gota — bactérias em forma de bastonete, cianobactérias verdes, paramécios (protistas) em movimento e fragmentos de algas verdes filamentosas.", chaves: ["cianobactérias", "paramécios"], definicoes: { "cianobactérias": "Bactérias que fazem fotossíntese — foram as primeiras a produzir oxigênio na Terra.", "paramécios": "Protistas unicelulares que nadam usando cílios." }, fotoUrl: microorgImg },
      { id: "p3", texto: "CONCLUSÃO: uma única gota de água contém MAIS DIVERSIDADE de reinos do que toda uma floresta a olho nu. A biodiversidade microscópica é o alicerce oculto de todo ecossistema aquático.", chaves: ["biodiversidade"], definicoes: { biodiversidade: "Variedade de formas de vida em um ambiente." }, fotoUrl: arvoreImg },
    ],
    falaFinal:
      "Uma gota d'água = mini-ecossistema. Ciência de campo em escala microscópica.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio de classificação. Em qual reino cada ser pertence?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 35,
    pecas: [
      { id: "bacteria", emoji: "🦠", rotulo: "Bactéria" },
      { id: "fungo", emoji: "🍄", rotulo: "Fungo" },
      { id: "planta", emoji: "🌿", rotulo: "Planta" },
      { id: "animal", emoji: "🐆", rotulo: "Animal" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Cogumelo shitake", emoji: "🍄", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Parede de quitina, decompositor", emoji: "🔬", cor: "from-yellow-500 to-amber-700" }, contexto: "Cresce em troncos apodrecidos.", pecaCertaId: "fungo", fotoUrl: especiesImg, feedbackAcerto: "FUNGO. Parede de quitina + heterotrófico + decompõe = reino Fungi.", feedbackErro: "Não é planta (sem clorofila) nem bactéria (é multicelular e eucarionte). É FUNGO." },
      { id: "r2", municipioA: { nome: "Lactobacillus do iogurte", emoji: "🥛", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Procarionte, unicelular", emoji: "🦠", cor: "from-rose-500 to-red-700" }, contexto: "Fermenta o leite transformando em iogurte.", pecaCertaId: "bacteria", fotoUrl: microorgImg, feedbackAcerto: "BACTÉRIA. Procarionte que faz fermentação láctica.", feedbackErro: "Sem núcleo = procarionte = BACTÉRIA. Não é fungo nem protista." },
      { id: "r3", municipioA: { nome: "Samambaia", emoji: "🌿", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Faz fotossíntese, tem clorofila", emoji: "☀️", cor: "from-yellow-500 to-amber-700" }, contexto: "Planta sem flores nem sementes.", pecaCertaId: "planta", fotoUrl: especiesImg, feedbackAcerto: "PLANTA. Fotossíntese + celulose = reino Plantae, mesmo sem flor.", feedbackErro: "Faz fotossíntese = PLANTA (mesmo sem flor). Samambaias são plantas antigas." },
      { id: "r4", municipioA: { nome: "Estrela-do-mar", emoji: "⭐", cor: "from-orange-500 to-red-700" }, municipioB: { nome: "Multicelular, sem clorofila, come outros", emoji: "🍽️", cor: "from-red-500 to-rose-700" }, contexto: "Vive em recifes marinhos, tem simetria pentarradial.", pecaCertaId: "animal", fotoUrl: especiesImg, feedbackAcerto: "ANIMAL. Multicelular heterotrófico sem parede celular = reino Animalia.", feedbackErro: "Não parece com bichos comuns, mas é ANIMAL (invertebrado). Come e não faz fotossíntese." },
    ],
    falaFinal:
      "Você classifica seres vivos em segundos. Habilidade base de qualquer biólogo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Distribuição estimada de ESPÉCIES descritas na Terra por grande grupo. Números aproximados da biologia moderna.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: arvoreImg,
    fatias: [
      { id: "animais", rotulo: "Animais", emoji: "🐆", percentual: 75, cor: "#ef4444", descricao: "~1,3 milhão de espécies descritas — sendo ~1 milhão só de INSETOS. Maior diversidade catalogada.", exemplos: ["Insetos", "Peixes", "Mamíferos"], fotoUrl: especiesImg },
      { id: "outros", rotulo: "Plantas + Fungos + Micróbios", emoji: "🌿", percentual: 25, cor: "#10b981", descricao: "Plantas (~300 mil espécies), fungos e microrganismos juntos. Base de todos os ecossistemas — a maioria ainda não catalogada.", exemplos: ["Samambaias", "Cogumelos", "Bactérias"], fotoUrl: microorgImg },
    ],
    falaFinal:
      "Insetos dominam o número de espécies. Bactérias dominam o número de INDIVÍDUOS. Escalas diferentes.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Departamento 2. Responda 3 perguntas para receber sua Certificação de Taxonomista Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: arvoreImg,
    selo: { nome: "Certificação · Taxonomista Júnior", subtitulo: "Departamento 2 · Árvore da Vida", emoji: "🌳", cor: "from-emerald-500 to-teal-700" },
    perguntas: [
      { id: "q1", pergunta: "Qual grupo NÃO tem núcleo definido em suas células?", fotoUrl: microorgImg,
        opcoes: [
          { id: "a", texto: "Bactérias (são procariontes)", correta: true },
          { id: "b", texto: "Plantas (são eucariontes complexas)" },
        ],
        feedbackAcerto: "Correto. Só bactérias e arqueias são procariontes — sem núcleo.",
        feedbackErro: "Plantas TÊM núcleo. Só bactérias/arqueias são procariontes." },
      { id: "q2", pergunta: "Fungos são MAIS parecidos geneticamente com...", fotoUrl: especiesImg,
        opcoes: [
          { id: "a", texto: "Animais (ancestral comum mais recente)", correta: true },
          { id: "b", texto: "Plantas (porque ambos são fixos no solo)" },
        ],
        feedbackAcerto: "Sim. DNA mostra: fungos e animais compartilham ancestral mais recente que fungos e plantas.",
        feedbackErro: "Aparência engana. DNA revela: FUNGOS estão mais próximos de ANIMAIS que de plantas." },
      { id: "q3", pergunta: "Qual foi o primeiro grande grupo a surgir na Terra?", fotoUrl: microorgImg,
        opcoes: [
          { id: "a", texto: "Bactérias (~3,8 bilhões de anos atrás)", correta: true },
          { id: "b", texto: "Plantas (surgiram junto com os animais)" },
        ],
        feedbackAcerto: "Exato. Bactérias foram os únicos seres vivos por 2 bilhões de anos.",
        feedbackErro: "Plantas surgiram MUITO depois (~500 milhões). Bactérias vieram primeiro (~3,8 bilhões)." },
    ],
    falaFinal:
      "Selo conquistado. Fim do Departamento 2 — Diversidade Biológica.",
  },
};
