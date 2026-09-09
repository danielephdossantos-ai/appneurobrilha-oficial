import type { AulaGeoV1 } from "../../types";
import { url as caverna } from "@/assets/filosofia-6ano/u6-caverna.jpg.asset.json";
import { url as saida } from "@/assets/filosofia-6ano/u6-saida-luz.jpg.asset.json";
import { url as platao } from "@/assets/filosofia-6ano/u6-platao.jpg.asset.json";

/**
 * Filosofia · 6º Ano · Unidade 6 · Aula 01
 * "A Caverna de Platão: verdade e aparência" — EF06FI06 (autoral).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-caverna-platao",
  titulo: "A Caverna de Platão",
  iconeTrilha: "🕯️",
  bncc: ["EF06FI06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olha essa caverna. Você pode estar dentro de uma agora.",
    mapaUrl: caverna,
    imagemDestaqueUrl: caverna,
    aurora:
      "Aprendiz, PLATÃO — discípulo de Sócrates — imaginou uma cena que virou a metáfora mais famosa da filosofia. Um grupo de pessoas presas desde criança dentro de uma caverna, olhando pra uma parede. Atrás delas, uma fogueira projeta SOMBRAS de objetos passando. Pra elas, aquelas sombras SÃO a realidade. Elas nunca viram nada diferente.",
    falaFinal:
      "Nesta aula você entra na CAVERNA — e aprende a diferença entre APARÊNCIA e REALIDADE que sustenta toda a filosofia.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: se alguém saísse da caverna, viesse pra luz, e voltasse pra contar aos outros — como seria recebido?",
    pergunta: "Como reagiriam os prisioneiros?",
    opcoes: [
      { id: "gratos", titulo: "GRATOS", subtitulo: "'obrigado! vamos sair juntos!'", emoji: "🙏", cor: "from-emerald-400 to-teal-600" },
      { id: "atacando", titulo: "ATACANDO", subtitulo: "'você enlouqueceu, cala a boca'", emoji: "😡", cor: "from-red-400 to-orange-600" },
      { id: "curiosos", titulo: "CURIOSOS", subtitulo: "'me explica direitinho, quero pensar'", emoji: "🤔", cor: "from-sky-400 to-blue-600" },
    ],
    respostaCerta: "atacando",
    feedbackAcerto: "Isso. Platão disse: os prisioneiros TENTARIAM MATÁ-LO. Sabia disso porque foi o que aconteceu com seu mestre Sócrates.",
    feedbackErro: "Platão foi realista: os prisioneiros ATACARIAM. Ninguém gosta de ouvir que sua 'realidade' é sombra — e Sócrates foi morto por dizer isso.",
    falaFinal: "Sair da caverna é bom pra quem sai. Voltar pra contar é PERIGOSO.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras da alegoria da caverna.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "aparencia", capa: "1. Aparência (Doxa)", emoji: "🌫️", cor: "from-slate-500 to-slate-700",
        conteudo: "DOXA é a palavra grega pra OPINIÃO ou APARÊNCIA — o que a maioria acha porque 'sempre foi assim'. É a sombra na parede da caverna: parece real, mas é reflexo, não coisa em si.",
        exemplo: "Ex.: acreditar que 'sucesso é ter muito seguidor' porque isso é o que todo mundo repete — doxa clássica.",
        fotoUrl: caverna },
      { id: "conhecimento", capa: "2. Conhecimento (Episteme)", emoji: "💡", cor: "from-amber-500 to-orange-700",
        conteudo: "EPISTEME é o conhecimento VERDADEIRO — o que se obtém saindo da caverna, subindo até a luz e vendo as coisas COMO SÃO, não como parecem. Exige esforço, argumento e paciência.",
        exemplo: "Ex.: em vez de repetir 'sucesso é seguidor', investigar: 'o que é sucesso?', 'pra quê sucesso?', 'quem define isso?'.",
        fotoUrl: saida },
      { id: "libertacao", capa: "3. Libertação", emoji: "⛓️", cor: "from-violet-500 to-purple-700",
        conteudo: "LIBERTAÇÃO é o processo — DOLOROSO — de se soltar das correntes, virar a cabeça, ver a fogueira, subir a rampa, sofrer com a luz forte e ENFIM entender. Ninguém liberta ninguém a força: a decisão é individual.",
        exemplo: "Ex.: perceber que uma crença sua (de família, de grupo, de época) não se sustenta quando você a testa — é o primeiro passo da libertação.",
        fotoUrl: platao },
    ],
    falaFinal: "Doxa → libertação → episteme. É o caminho do prisioneiro ao filósofo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos da alegoria da caverna. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: caverna,
    pontos: [
      { id: "prisao", x: 22, y: 30, emoji: "⛓️", cor: "from-slate-500 to-slate-700",
        titulo: "1. A prisão desde a infância",
        texto: "Presos desde criança, os prisioneiros estão amarrados olhando pra uma parede. Atrás deles, uma fogueira e objetos passando. Eles veem só as SOMBRAS projetadas. Pra eles, aquelas sombras SÃO a realidade — não conhecem outra coisa.",
        fotoUrl: caverna },
      { id: "solta", x: 70, y: 28, emoji: "🔓", cor: "from-amber-500 to-orange-700",
        titulo: "2. Um se solta e vira a cabeça",
        texto: "Um prisioneiro consegue se soltar. Vira a cabeça e vê a FOGUEIRA — a luz dói nos olhos. Vê os objetos e percebe: as sombras eram REFLEXO desses objetos. Primeira quebra de mundo. Muito difícil.",
        fotoUrl: platao },
      { id: "sobe", x: 28, y: 72, emoji: "🌅", cor: "from-yellow-500 to-orange-700",
        titulo: "3. Sobe até a luz do sol",
        texto: "Sobe uma rampa íngreme e sai da caverna. A luz do sol o cega. Aos poucos, enxerga as coisas REAIS — árvores, água, pessoas. Por último, olha o SOL — a fonte de tudo. Entende que a caverna era só um reflexo.",
        fotoUrl: saida },
      { id: "volta", x: 74, y: 74, emoji: "⚔️", cor: "from-red-500 to-orange-700",
        titulo: "4. Volta pra contar — e é atacado",
        texto: "Cheio de compaixão, volta pra contar aos outros. Mas depois da luz, mal enxerga as sombras. Os prisioneiros riem: 'ficou cego lá fora, coitado'. Se ele insiste em soltá-los, dizem que é perigoso — e o MATARIAM se pudessem. (Foi o que fizeram com Sócrates.)",
        fotoUrl: caverna },
    ],
    falaFinal: "4 momentos. A caverna é uma metáfora de qualquer situação em que uma pessoa se acostumou com aparências e chama isso de 'verdade'.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "As SOMBRAS na parede da caverna representam…", fotoUrl: caverna,
        cards: [
          { id: "aparencia", emoji: "🌫️", titulo: "As APARÊNCIAS (doxa) — o que a maioria toma como real sem investigar", cor: "from-slate-500 to-slate-700" },
          { id: "real", emoji: "🌍", titulo: "A realidade mais concreta possível", cor: "from-emerald-400 to-teal-600" },
          { id: "ficcao", emoji: "🎬", titulo: "Só filmes e desenho animado", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "aparencia",
        feedbackAcerto: "Isso. Sombras = doxa: parece real, mas é reflexo — não a coisa mesma.",
        feedbackErro: "Sombras representam APARÊNCIAS — opinião comum que a maioria toma como verdade sem examinar." },
      { id: "q2", pergunta: "Sair da caverna, segundo Platão, é um processo…", fotoUrl: saida,
        cards: [
          { id: "dificil", emoji: "🌅", titulo: "DIFÍCIL e doloroso — a luz da verdade cega antes de esclarecer", cor: "from-yellow-500 to-orange-700" },
          { id: "facil", emoji: "🎉", titulo: "Fácil e divertido pra quem tem coragem", cor: "from-amber-400 to-orange-600" },
          { id: "impossivel", emoji: "🚫", titulo: "Impossível — ninguém consegue", cor: "from-red-500 to-orange-700" },
        ],
        correta: "dificil",
        feedbackAcerto: "Perfeito. Verdade DÓI antes de esclarecer — mas depois vale muito.",
        feedbackErro: "É DIFÍCIL: soltar velhas certezas dói, e a luz nova cega antes de esclarecer." },
      { id: "q3", pergunta: "Por que quem VOLTA pra caverna corre perigo?", fotoUrl: platao,
        cards: [
          { id: "raiva", emoji: "😡", titulo: "Os presos NÃO querem ser incomodados nas suas certezas — atacam quem tenta libertar", cor: "from-red-500 to-orange-700" },
          { id: "escuro", emoji: "🌑", titulo: "Porque a caverna é sempre escura demais", cor: "from-slate-500 to-slate-700" },
          { id: "medo", emoji: "🕷️", titulo: "Porque tem animais perigosos lá dentro", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "raiva",
        feedbackAcerto: "Isso. Presos preferem a mentira confortável — e ATACAM quem tenta acordá-los. Foi o que fizeram com Sócrates.",
        feedbackErro: "O perigo são os PRESOS: preferem sombra confortável e ATACAM quem quer soltá-los. Foi o que aconteceu com Sócrates." },
    ],
    falaFinal: "Radar afinado. Você entende porque filosofia é ao mesmo tempo LIBERTADORA e PERIGOSA.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "A luta contra 'sombras' e desinformação continua hoje. Acenda 5 estados brasileiros com maior número de museus de ciência abertos ao público — luz contra caverna moderna.",
    instrucao: "Acenda 5 estados com forte rede de museus de ciência",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "MG", "DF", "RS"], pergunta: "5 estados com destaque em museus e centros de ciência acessíveis:" },
    falaFinal: "Catavento (SP), Museu do Amanhã (RJ), Espaço do Conhecimento (MG), CCBB Brasília (DF) e MCT/PUCRS (RS). Cavernas cedendo à luz da ciência.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma pessoa SAI de uma 'caverna' de crença comum? Coloque na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Passos da libertação platônica (versão moderna):",
    paradas: [
      { id: "duvida", emoji: "❓", rotulo: "1. DÚVIDA", descricao: "'Peraí. Por que todo mundo repete isso? Faz mesmo sentido?' — a corrente afrouxa." },
      { id: "olha", emoji: "👀", rotulo: "2. OLHA A FOGUEIRA", descricao: "Percebe QUEM produz as sombras — mídia, algoritmo, grupo, tradição. Vê a fonte da 'aparência'." },
      { id: "sobe", emoji: "🌅", rotulo: "3. SOBE A RAMPA", descricao: "Estuda, pesquisa, conversa com quem pensa diferente. É desconfortável." },
      { id: "ve", emoji: "☀️", rotulo: "4. VÊ A LUZ", descricao: "Enxerga a coisa de outro ângulo — a antiga 'verdade' se revela sombra." },
      { id: "volta", emoji: "🗣️", rotulo: "5. VOLTA E COMPARTILHA", descricao: "Tenta explicar aos outros com PACIÊNCIA — sabendo que vai ser mal recebido no começo." },
    ],
    ordemCerta: ["duvida", "olha", "sobe", "ve", "volta"],
    feedbackAcerto: "Exato. Dúvida → ver a fonte → estudar → enxergar → compartilhar com paciência.",
    feedbackErro: "A ordem é: 1) duvidar, 2) ver a fogueira/fonte, 3) subir a rampa (estudar), 4) ver a luz, 5) voltar e compartilhar com paciência.",
    falaFinal: "5 passos. É a alegoria da caverna aplicada ao século XXI.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Aprendiz",
    subtitulo: "Página 6 — A Caverna de Platão",
    paragrafos: [
      { id: "p1", texto: "PLATÃO (427–347 a.C.) foi discípulo de Sócrates e escreveu quase tudo em forma de DIÁLOGOS. No 'A República', livro VII, ele conta a ALEGORIA DA CAVERNA — talvez a metáfora mais famosa de toda a filosofia.", chaves: ["Platão", "alegoria da caverna"] },
      { id: "p2", texto: "A cena: prisioneiros amarrados desde a infância veem só sombras projetadas numa parede. Pra eles, as sombras SÃO a realidade — porque nunca conheceram outra. Um se solta, sobe, vê o sol, e volta pra contar. Os outros o RIDICULARIZAM e ameaçam matá-lo.", chaves: ["sombras", "sol"] },
      { id: "p3", texto: "O que a alegoria ensina: existe uma diferença radical entre APARÊNCIA (doxa) e VERDADE (episteme). A maioria das pessoas vive na doxa — repete o que ouve, sem investigar. Filosofar é ter coragem de subir a rampa — mesmo doendo, mesmo perdendo amigos.", chaves: ["doxa", "episteme"] },
      { id: "p4", texto: "A alegoria ainda funciona hoje: bolhas de rede social, notícias falsas, tradições nunca examinadas — são cavernas modernas. Sair não é fácil, e voltar pra tentar libertar os outros costuma render insulto, cancelamento e perda de vínculo. Mas é o preço da verdade.", chaves: ["cavernas modernas", "preço da verdade"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LEITOR DE CAVERNAS! Cada cena mostra uma situação — diga se é SOMBRA (doxa), FOGUEIRA (fonte da ilusão), LUZ (verdade investigada) ou PRISIONEIRO REVOLTADO.",
    instrucao: "⏱️ Que parte da caverna é essa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "sombra", emoji: "🌫️", rotulo: "Sombra (doxa)" },
      { id: "fogueira", emoji: "🔥", rotulo: "Fogueira (fonte)" },
      { id: "luz", emoji: "☀️", rotulo: "Luz (episteme)" },
      { id: "revolta", emoji: "😡", rotulo: "Prisioneiro revoltado" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'Todo mundo diz que sucesso é ter dinheiro — deve ser verdade'", emoji: "🌫️", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Repetição do senso comum sem exame", emoji: "👥", cor: "from-gray-400 to-slate-600" },
        contexto: "A pessoa aceita porque 'todo mundo diz'.", pecaCertaId: "sombra",
        feedbackAcerto: "Isso. SOMBRA — doxa pura. 'Todo mundo diz' não é argumento.",
        feedbackErro: "É SOMBRA (doxa): aceitar porque 'todo mundo repete' é olhar pra sombra na parede." },
      { id: "r2", municipioA: { nome: "'Estudei economia, história e psicologia — sucesso pra mim é vida com sentido, e defendo com argumento'", emoji: "☀️", cor: "from-yellow-400 to-orange-600" },
        municipioB: { nome: "Posição investigada, sustentada por estudo", emoji: "🔎", cor: "from-amber-400 to-orange-600" },
        contexto: "A pessoa subiu a rampa e formou visão própria.", pecaCertaId: "luz",
        feedbackAcerto: "Perfeito. LUZ — episteme, verdade investigada.",
        feedbackErro: "É LUZ (episteme): posição investigada, sustentada por estudo — não repetição." },
      { id: "r3", municipioA: { nome: "'O algoritmo só mostra pra mim vídeos que confirmam o que eu já pensava'", emoji: "🔥", cor: "from-orange-400 to-red-600" },
        municipioB: { nome: "Fonte que projeta sombras selecionadas", emoji: "📱", cor: "from-red-400 to-orange-600" },
        contexto: "É o que produz as 'sombras' na parede moderna.", pecaCertaId: "fogueira",
        feedbackAcerto: "Isso. FOGUEIRA moderna — o algoritmo produz as sombras da tua caverna.",
        feedbackErro: "É a FOGUEIRA: quem PRODUZ as sombras que você toma como real (aqui: o algoritmo)." },
      { id: "r4", municipioA: { nome: "'Cala a boca! Você está tentando me confundir com essas teorias, não quero saber!'", emoji: "😡", cor: "from-red-500 to-orange-700" },
        municipioB: { nome: "Rejeição raivosa da tentativa de libertação", emoji: "🚫", cor: "from-orange-500 to-red-700" },
        contexto: "Alguém tenta explicar; a pessoa se recusa a ouvir.", pecaCertaId: "revolta",
        feedbackAcerto: "Boa. PRISIONEIRO REVOLTADO — a caverna atacando quem tenta libertar.",
        feedbackErro: "É PRISIONEIRO REVOLTADO: preferir a sombra a ouvir o argumento. Foi o que atacou Sócrates." },
      { id: "r5", municipioA: { nome: "'Sempre foi assim, então deve continuar assim' (sobre uma tradição)", emoji: "🌫️", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Aparência sustentada só por hábito", emoji: "🕰️", cor: "from-gray-400 to-slate-600" },
        contexto: "Nenhuma justificativa além de 'sempre foi'.", pecaCertaId: "sombra",
        feedbackAcerto: "Isso. SOMBRA — 'sempre foi' é doxa disfarçada de fato.",
        feedbackErro: "É SOMBRA: 'sempre foi assim' é apenas hábito não examinado — doxa pura." },
      { id: "r6", municipioA: { nome: "'Comparei relatos de 5 fontes diferentes e cheguei à minha conclusão — posso justificar'", emoji: "☀️", cor: "from-yellow-400 to-orange-600" },
        municipioB: { nome: "Conclusão baseada em cruzamento e argumento", emoji: "🧠", cor: "from-amber-400 to-orange-600" },
        contexto: "Verdade construída com método e paciência.", pecaCertaId: "luz",
        feedbackAcerto: "Perfeito. LUZ — episteme, verdade investigada com método.",
        feedbackErro: "É LUZ: verdade investigada por cruzamento de fontes e argumento próprio." },
    ],
    falaFinal: "6 rodadas. Você mapeia sombra, fogueira, luz e prisioneiro revoltado — em qualquer caverna moderna.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: as 2 grandes atitudes diante do saber.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "doxa", rotulo: "DOXA (aparência aceita)", emoji: "🌫️", percentual: 50, cor: "#94a3b8",
        descricao: "Aceita a sombra sem investigar. 'Todo mundo diz', 'sempre foi assim', 'meu grupo pensa isso'. Cômoda, comum, coletiva. É a caverna — antiga e moderna.",
        exemplos: ["👥 'Todo mundo pensa assim'", "🕰️ 'Sempre foi'", "📱 'O algoritmo mostra'"] },
      { id: "episteme", rotulo: "EPISTEME (verdade investigada)", emoji: "☀️", percentual: 50, cor: "#f59e0b",
        descricao: "Sobe a rampa. Estuda, cruza fontes, aguenta contraexemplo, forma posição própria. Desconfortável, rara, individual. É a luz — antiga e moderna.",
        exemplos: ["🔎 Cruza fontes", "🧠 Estuda a fundo", "🗣️ Justifica com argumento"] },
    ],
    falaFinal: "Duas atitudes. Filosofia mora do lado da episteme.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia GUARDIÃO DA LUZ.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "O que representam as SOMBRAS na parede da caverna de Platão?",
        opcoes: [
          { id: "a", texto: "A realidade verdadeira das coisas", correta: false },
          { id: "b", texto: "As APARÊNCIAS (doxa) que a maioria toma como verdade sem investigar", correta: true },
          { id: "c", texto: "Só a escuridão comum de qualquer caverna", correta: false },
        ],
        feedbackAcerto: "Isso. Sombras = doxa: parece real, mas é reflexo.",
        feedbackErro: "Sombras representam APARÊNCIAS aceitas sem exame — opinião comum tomada como verdade." },
      { id: "av2", pergunta: "Sair da caverna, na alegoria, é uma imagem de:",
        opcoes: [
          { id: "a", texto: "Ir viver em outra cidade", correta: false },
          { id: "b", texto: "Buscar a VERDADE (episteme) com estudo, dúvida e argumento — mesmo doendo", correta: true },
          { id: "c", texto: "Ficar sozinho e desconectado da realidade", correta: false },
        ],
        feedbackAcerto: "Perfeito. É o processo INTELECTUAL da libertação — dolorido e libertador.",
        feedbackErro: "Sair da caverna é BUSCAR A VERDADE — estudar, duvidar, argumentar, mesmo doendo." },
      { id: "av3", pergunta: "Por que quem VOLTA pra caverna pra contar corre perigo?",
        opcoes: [
          { id: "a", texto: "Porque tropeça no escuro", correta: false },
          { id: "b", texto: "Porque os prisioneiros preferem a sombra confortável e ATACAM quem tenta libertar", correta: true },
          { id: "c", texto: "Porque a fogueira está apagada", correta: false },
        ],
        feedbackAcerto: "Isso. Foi o que fizeram com Sócrates. E é o que acontece hoje com quem contesta 'verdades' consolidadas.",
        feedbackErro: "O perigo são os PRESOS: eles preferem sombra confortável e atacam quem os quer libertar." },
    ],
    selo: { nome: "Guardião da Luz", subtitulo: "Insígnia da Alegoria da Caverna", emoji: "☀️", cor: "from-yellow-400 to-orange-700" },
    falaFinal: "Insígnia conquistada! Você sabe distinguir sombra de sol — e o preço dessa distinção.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Guardião da Luz" },
};
