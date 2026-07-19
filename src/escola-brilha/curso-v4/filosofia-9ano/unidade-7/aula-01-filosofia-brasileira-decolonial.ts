import type { AulaGeoV1 } from "../../types";
import { url as freireImg } from "@/assets/filosofia-9ano/u7-freire.jpg.asset.json";

/**
 * Filosofia · 9º Ano · Unidade 7 · Aula 01
 * "Educar Para a Liberdade e Adiar o Fim do Mundo" — EF09FI07 (autoral)
 * Tema: Filosofia Brasileira e Decolonial — Paulo Freire e Ailton Krenak.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-filosofia-brasileira-decolonial",
  titulo: "Educar Para a Liberdade e Adiar o Fim do Mundo",
  iconeTrilha: "🌎",
  bncc: ["EF09FI07"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de investigar, olhe a cena.",
    mapaUrl: freireImg,
    imagemDestaqueUrl: freireImg,
    aurora:
      "Investigador, ápice da jornada. Filosofia não é só europeia — o Brasil pensa. Nesta imagem, Paulo Freire alfabetiza trabalhadores rurais no Nordeste dos anos 60: em 40 dias, adultos leem e escrevem — não decorando cartilha, mas discutindo A REALIDADE. Décadas depois, Ailton Krenak, líder indígena e filósofo, publica 'Ideias pra Adiar o Fim do Mundo': crítica radical à ideia moderna de HUMANIDADE e ao capitalismo que devora a Terra. Freire e Krenak: dois pensadores brasileiros que o mundo hoje lê pra sobreviver ao século XXI.",
    falaFinal:
      "Nesta aula, última do curso, você entra na filosofia brasileira e decolonial. Três chaves: educação libertadora, pensamento decolonial e adiar o fim do mundo.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: qual EDUCAÇÃO forma cidadãos críticos?",
    pergunta: "A escola que liberta é aquela que…",
    opcoes: [
      { id: "dialogo", titulo: "DIALOGA com a realidade dos alunos", subtitulo: "problemas concretos, palavras do mundo deles", emoji: "🗣️", cor: "from-emerald-400 to-teal-600" },
      { id: "deposito", titulo: "DEPOSITA conteúdos na cabeça", subtitulo: "aluno como banco, professor como caixa eletrônico", emoji: "🏦", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "dialogo",
    feedbackAcerto: "Boa. Paulo Freire chamou o modelo depósito de EDUCAÇÃO BANCÁRIA — e opôs a ele a educação dialógica libertadora.",
    feedbackErro: "'Depositar' é o que Freire mais criticou. Educação que liberta dialoga com o mundo do educando.",
    falaFinal: "Educação libertadora = diálogo com a realidade. Não é depósito.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave da filosofia brasileira e decolonial.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "bancaria", capa: "1. Educação bancária vs. libertadora (Freire)", emoji: "🏦", cor: "from-slate-500 to-gray-700", conteudo: "EDUCAÇÃO BANCÁRIA, pra Paulo Freire, trata o aluno como CONTA vazia onde o professor deposita conteúdos. Passiva, hierárquica, alienante. A EDUCAÇÃO LIBERTADORA parte do universo cultural do educando, dialoga sobre problemas reais e forma sujeitos capazes de LER O MUNDO — não só a palavra.", exemplo: "Ex.: em vez de decorar sílabas, discutir 'tijolo' com pedreiros pra entender trabalho, salário e cidade.", fotoUrl: freireImg },
      { id: "decolonial", capa: "2. Pensamento decolonial", emoji: "🌎", cor: "from-amber-500 to-orange-700", conteudo: "PENSAMENTO DECOLONIAL denuncia que a modernidade europeia se constituiu OCULTANDO a colonização — a exploração de África, América e Ásia. Ele desmonta o 'universal' que sempre foi particular (europeu, branco, masculino) e valoriza saberes indígenas, africanos e latino-americanos. É uma segunda descolonização: dos modos de pensar.", exemplo: "Ex.: perguntar por que a filosofia começa 'sempre' na Grécia e nunca em Tenochtitlán, Timbuktu ou Cuzco.", fotoUrl: freireImg },
      { id: "krenak", capa: "3. Adiar o fim do mundo (Krenak)", emoji: "🌱", cor: "from-emerald-500 to-teal-700", conteudo: "Ailton Krenak, filósofo indígena, denuncia a IDEIA MODERNA DE HUMANIDADE — aquela que separa humano de natureza e trata a Terra como mercadoria. Propõe pensar com os povos originários: rios, montanhas e florestas como parentes, não recursos. 'Adiar o fim do mundo' é resistir ao consumo predatório e sonhar outros modos de existir.", exemplo: "Ex.: pensar o Rio Doce (poluído por Mariana) como parente ferido — não como 'passivo ambiental'.", fotoUrl: freireImg },
    ],
    falaFinal: "Educação libertadora, decolonial, adiar o fim do mundo. As 3 alavancas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 marcos do pensamento brasileiro e decolonial.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: freireImg,
    pontos: [
      { id: "1963-angicos", x: 22, y: 30, emoji: "📚", cor: "from-emerald-500 to-teal-700", titulo: "1963 — Angicos, Rio Grande do Norte", texto: "Paulo Freire alfabetiza 300 trabalhadores rurais em 40 horas usando o MÉTODO PAULO FREIRE: palavras da realidade deles (tijolo, salário, colheita) viram porta de entrada pra ler o mundo." },
      { id: "1968-pedagogia", x: 74, y: 30, emoji: "📕", cor: "from-fuchsia-500 to-purple-700", titulo: "1968 — Pedagogia do Oprimido", texto: "Escrito no exílio chileno após o golpe de 1964, o livro se torna uma das obras mais lidas do mundo em educação. Denuncia a EDUCAÇÃO BANCÁRIA e propõe a educação dialógica libertadora." },
      { id: "1992-quijano", x: 26, y: 70, emoji: "🌎", cor: "from-amber-500 to-orange-700", titulo: "1992 — Colonialidade do poder (Aníbal Quijano)", texto: "O sociólogo peruano cunha COLONIALIDADE DO PODER: mesmo após independências políticas, seguimos colonizados nos modos de pensar, produzir saber e valorar corpos. Nasce o pensamento decolonial latino-americano." },
      { id: "2019-krenak", x: 76, y: 70, emoji: "🌱", cor: "from-red-500 to-rose-700", titulo: "2019 — Ideias pra Adiar o Fim do Mundo", texto: "Ailton Krenak publica coletânea de conferências denunciando a ideia moderna de humanidade que devora a Terra. Livro se torna referência global sobre crise climática e sabedoria indígena." },
    ],
    falaFinal: "1963 → 1968 → 1992 → 2019. O Brasil pensa o mundo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "EDUCAÇÃO BANCÁRIA, em Paulo Freire, é aquela que…", cards: [
        { id: "deposito", emoji: "🏦", titulo: "Trata o aluno como conta onde se depositam conteúdos", cor: "from-slate-500 to-gray-700" },
        { id: "dialogo", emoji: "🗣️", titulo: "Dialoga com o universo cultural do aluno", cor: "from-emerald-400 to-teal-600" },
        { id: "gratis", emoji: "🎁", titulo: "É a que oferece ensino sem cobrar mensalidade", cor: "from-amber-400 to-orange-600" },
      ], correta: "deposito", feedbackAcerto: "Isso. Modelo depósito — o oposto do que Freire defende.", feedbackErro: "Bancária = depósito. Diálogo é a libertadora." },
      { id: "q2", pergunta: "PENSAMENTO DECOLONIAL denuncia que…", cards: [
        { id: "universal", emoji: "🌎", titulo: "O 'universal' moderno sempre foi particular (europeu) e ocultou colonização", cor: "from-amber-500 to-orange-700" },
        { id: "tradicao", emoji: "⛪", titulo: "Só a tradição europeia produz filosofia legítima", cor: "from-slate-400 to-gray-600" },
        { id: "guerra", emoji: "⚔️", titulo: "Todos os países devem imitar o modelo europeu de guerra", cor: "from-red-400 to-rose-600" },
      ], correta: "universal", feedbackAcerto: "Perfeito. Decolonial = desmontar o falso universal.", feedbackErro: "Justamente o oposto: decolonial denuncia o falso universal europeu." },
      { id: "q3", pergunta: "ADIAR O FIM DO MUNDO, em Krenak, é…", cards: [
        { id: "resistir", emoji: "🌱", titulo: "Resistir ao consumo predatório e reconhecer a Terra como parente", cor: "from-emerald-500 to-teal-700" },
        { id: "tecnologia", emoji: "🚀", titulo: "Colonizar Marte e abandonar a Terra devastada", cor: "from-slate-400 to-gray-600" },
        { id: "religiao", emoji: "⛪", titulo: "Rezar mais forte para o apocalipse não vir", cor: "from-amber-400 to-orange-600" },
      ], correta: "resistir", feedbackAcerto: "Isso. Resistir e reconhecer parentesco com a Terra.", feedbackErro: "Não é fuga espacial nem oração passiva: é resistir e reconhecer parentesco." },
    ],
    falaFinal: "3 acertos = radar brasileiro-decolonial calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Freire e Krenak circulam por todo o país. Acenda 5 estados marcados por essas tradições.",
    instrucao: "Selecione 5 estados",
    missao: { tipo: "selecionar", siglas: ["PE", "SP", "MG", "RS", "AM"], pergunta: "Quais 5 estados marcam a pedagogia libertadora (PE), decolonial acadêmica (SP, MG, RS) e cosmovisões indígenas (AM)?" },
    falaFinal: "Recife (Freire), USP, UFMG, UFRGS e Amazonas (povos originários).",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "O método Paulo Freire. Ponha na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do universo cultural ao mundo transformado:",
    paradas: [
      { id: "levantamento", emoji: "👂", rotulo: "1. Levantar o universo vocabular", descricao: "Ouvir a comunidade e mapear as palavras que dizem sua vida." },
      { id: "geradoras", emoji: "🔑", rotulo: "2. Escolher palavras geradoras", descricao: "Selecionar palavras carregadas de sentido (tijolo, salário, terra)." },
      { id: "circulo", emoji: "🔄", rotulo: "3. Formar círculo de cultura", descricao: "Roda de diálogo onde a palavra é discutida junto com o problema real que ela nomeia." },
      { id: "codigo", emoji: "🔤", rotulo: "4. Decodificar a palavra", descricao: "Reconhecer sílabas e reescrever novas palavras a partir dela." },
      { id: "mundo", emoji: "🌍", rotulo: "5. Ler a palavra E o mundo", descricao: "Sujeito passa a nomear sua realidade — e a agir para transformá-la." },
    ],
    ordemCerta: ["levantamento", "geradoras", "circulo", "codigo", "mundo"],
    feedbackAcerto: "Exato. Levantamento → geradoras → círculo → decodificar → ler o mundo.",
    feedbackErro: "Ordem: levantamento, geradoras, círculo, decodificar, ler o mundo.",
    falaFinal: "5 passos. Método Paulo Freire completo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 7 — Brasil pensa o mundo",
    paragrafos: [
      { id: "p1", texto: "Filosofia não nasceu só na Grécia. O Brasil e a América Latina produziram pensamento próprio, muitas vezes silenciado. Paulo Freire, em 1963, alfabetizou 300 trabalhadores rurais em Angicos (RN) em 40 horas, usando palavras da vida deles. Em 1968, no exílio, escreve 'Pedagogia do Oprimido' — hoje uma das obras mais lidas do mundo em educação.", chaves: ["Paulo Freire", "Angicos"] },
      { id: "p2", texto: "Freire denuncia a EDUCAÇÃO BANCÁRIA — que trata alunos como contas onde se depositam conteúdos — e propõe a EDUCAÇÃO LIBERTADORA, dialógica, partindo do universo cultural do educando. Aprender a ler é aprender a LER O MUNDO. A palavra escrita só ganha sentido quando ajuda a nomear a realidade e transformá-la.", chaves: ["educação bancária", "ler o mundo"] },
      { id: "p3", texto: "Décadas depois, o pensamento decolonial latino-americano (Aníbal Quijano, María Lugones, Enrique Dussel, Silvia Rivera Cusicanqui) mostra que a modernidade europeia se constituiu OCULTANDO a colonização. Independência política não bastou: seguimos colonizados nos modos de pensar, produzir saber e valorar corpos. É preciso uma segunda descolonização — das ideias.", chaves: ["decolonial", "colonialidade"] },
      { id: "p4", texto: "Ailton Krenak, líder indígena e filósofo, publica em 2019 'Ideias pra Adiar o Fim do Mundo'. Denuncia a IDEIA MODERNA DE HUMANIDADE que separa humano de natureza e trata a Terra como mercadoria. Propõe pensar com os povos originários: rios, montanhas e florestas são parentes, não recursos. Filosofia brasileira em diálogo com a crise climática planetária.", chaves: ["Krenak", "adiar o fim"] },
    ],
    falaFinal: "Leu? Bora pro minijogo — o último do curso.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo RADAR BRASILEIRO! Qual conceito ilustra cada caso?",
    instrucao: "⏱️ Qual conceito é este?",
    duracaoSegundos: 15,
    pecas: [
      { id: "bancaria", emoji: "🏦", rotulo: "Educação bancária" },
      { id: "libertadora", emoji: "🗣️", rotulo: "Educação libertadora" },
      { id: "decolonial", emoji: "🌎", rotulo: "Pensamento decolonial" },
      { id: "adiar", emoji: "🌱", rotulo: "Adiar o fim do mundo" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'Professor dita, aluno copia, prova de decorar'", emoji: "📝", cor: "from-slate-400 to-gray-600" }, municipioB: { nome: "Aluno como conta a ser preenchida", emoji: "🏦", cor: "from-gray-400 to-slate-600" }, contexto: "Modelo criticado por Freire.", pecaCertaId: "bancaria", feedbackAcerto: "Isso. EDUCAÇÃO BANCÁRIA — passiva e alienante.", feedbackErro: "É EDUCAÇÃO BANCÁRIA: aluno como conta vazia." },
      { id: "r2", municipioA: { nome: "'Roda de conversa com pedreiros sobre a palavra «tijolo»'", emoji: "🧱", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Palavra que abre discussão sobre trabalho", emoji: "🗣️", cor: "from-teal-400 to-emerald-600" }, contexto: "Método Paulo Freire.", pecaCertaId: "libertadora", feedbackAcerto: "Perfeito. EDUCAÇÃO LIBERTADORA — palavra da realidade.", feedbackErro: "É EDUCAÇÃO LIBERTADORA: palavra geradora + diálogo." },
      { id: "r3", municipioA: { nome: "'Por que a filosofia começa sempre na Grécia?'", emoji: "🏛️", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Suspeitar do universal europeu", emoji: "🌎", cor: "from-orange-400 to-red-600" }, contexto: "Crítica decolonial.", pecaCertaId: "decolonial", feedbackAcerto: "Isso. PENSAMENTO DECOLONIAL — desmontar o falso universal.", feedbackErro: "É PENSAMENTO DECOLONIAL: desmontar o universal europeu." },
      { id: "r4", municipioA: { nome: "'Rio Doce, ferido por Mariana, é parente machucado, não passivo'", emoji: "🌊", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Natureza como parente, não recurso", emoji: "🌱", cor: "from-teal-400 to-emerald-600" }, contexto: "Krenak em ação.", pecaCertaId: "adiar", feedbackAcerto: "Perfeito. ADIAR O FIM DO MUNDO — parentesco com a Terra.", feedbackErro: "É ADIAR O FIM DO MUNDO: reconhecer a Terra como parente." },
      { id: "r5", municipioA: { nome: "'Currículo lê Kant mas nunca Krenak nem Freire'", emoji: "📚", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Silenciamento sistemático de vozes não-europeias", emoji: "🌎", cor: "from-orange-400 to-red-600" }, contexto: "Colonialidade do saber.", pecaCertaId: "decolonial", feedbackAcerto: "Isso. DECOLONIAL — questionar quem entra e quem fica de fora.", feedbackErro: "É DECOLONIAL: desnaturalizar quem entra no cânon." },
      { id: "r6", municipioA: { nome: "'Discutir o preço da farinha vira aula de matemática, história e cidadania'", emoji: "🌾", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Realidade como currículo vivo", emoji: "🗣️", cor: "from-teal-400 to-emerald-600" }, contexto: "Educação freireana viva.", pecaCertaId: "libertadora", feedbackAcerto: "Perfeito. EDUCAÇÃO LIBERTADORA — vida vira currículo.", feedbackErro: "É EDUCAÇÃO LIBERTADORA: realidade concreta vira aula." },
    ],
    falaFinal: "6 casos, 4 conceitos. Brasil e povos originários no seu radar.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: 2 modelos de educação — e 2 modelos de mundo.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "bancaria", rotulo: "BANCÁRIA / EXTRATIVISTA", emoji: "🏦", percentual: 50, cor: "#64748b", descricao: "Aluno = conta vazia. Terra = recurso. Ambas as lógicas tratam sujeito e natureza como PASSIVOS a serem preenchidos ou explorados. É o que Freire e Krenak recusam.", exemplos: ["📝 Decorar sem entender", "⛏️ Mina que devasta rio", "🛒 Terra como mercadoria"] },
      { id: "libertadora", rotulo: "LIBERTADORA / PARENTE", emoji: "🌱", percentual: 50, cor: "#10b981", descricao: "Aluno = sujeito que dialoga. Terra = parente vivo. Ambas afirmam a AGÊNCIA e a conexão. É a proposta de Freire + Krenak: educação que liberta e ecologia que reencanta.", exemplos: ["🗣️ Círculo de cultura", "🌳 Floresta como parente", "🤝 Saberes indígenas + escolares"] },
    ],
    falaFinal: "Bancária × libertadora / extrativa × parente. Escolha a 2ª.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia PENSADOR BRASILEIRO — e fechar o curso.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "EDUCAÇÃO LIBERTADORA, em Paulo Freire, é aquela que…", opcoes: [
        { id: "a", texto: "Parte do universo cultural do educando, dialoga sobre a realidade e forma sujeitos que leem palavra E mundo", correta: true },
        { id: "b", texto: "Deposita conteúdos prontos na cabeça do aluno passivo", correta: false },
        { id: "c", texto: "Oferece ensino sem cobrar mensalidade, sem discutir método", correta: false },
      ], feedbackAcerto: "Isso. Diálogo + realidade + leitura do mundo.", feedbackErro: "Depositar é bancária. Grátis não define método. Libertadora = diálogo com a realidade." },
      { id: "av2", pergunta: "PENSAMENTO DECOLONIAL denuncia principalmente que…", opcoes: [
        { id: "a", texto: "A modernidade europeia se constituiu ocultando a colonização e disfarçando o particular europeu de universal", correta: true },
        { id: "b", texto: "Só a filosofia europeia produz pensamento válido", correta: false },
        { id: "c", texto: "Todos os países devem seguir exatamente o modelo europeu", correta: false },
      ], feedbackAcerto: "Perfeito. Desmontar o falso universal e o silenciamento colonial.", feedbackErro: "O oposto: decolonial questiona o falso universal europeu." },
      { id: "av3", pergunta: "ADIAR O FIM DO MUNDO, em Ailton Krenak, é…", opcoes: [
        { id: "a", texto: "Resistir ao consumo predatório e pensar a Terra, rios e florestas como parentes, não recursos", correta: true },
        { id: "b", texto: "Colonizar outros planetas e abandonar a Terra já devastada", correta: false },
        { id: "c", texto: "Rezar mais para que o apocalipse não venha", correta: false },
      ], feedbackAcerto: "Isso. Resistir e reconhecer parentesco vivo com a Terra.", feedbackErro: "Nem fuga espacial nem oração passiva: é resistir e reconhecer parentesco." },
    ],
    selo: { nome: "Pensador Brasileiro", subtitulo: "Insígnia Freire & Krenak — Fim do Curso", emoji: "🌎", cor: "from-emerald-400 to-teal-700" },
    falaFinal:
      "Insígnia final conquistada! Investigador, você atravessou o século XX e o XXI — de Frankfurt a Krenak. Filosofia agora é sua ferramenta. Adiar o fim do mundo depende de gente como você.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Pensador Brasileiro" },
};
