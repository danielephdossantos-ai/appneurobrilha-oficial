import type { AulaGeoV1 } from "../../types";
import imgSuf from "@/assets/historia-5ano/sufragistas-brasil.jpg";
import imgCarteira from "@/assets/historia-5ano/carteira-trabalho.jpg";
import imgUrna from "@/assets/historia-5ano/urna-eletronica.jpg";
import imgConst from "@/assets/historia-5ano/constituicao-1988.jpg";
import imgTimeline from "@/assets/historia-5ano/timeline-voto-brasil.jpg";

/**
 * História · 5º Ano · Unidade 4 · Aula 01
 * "A Conquista dos Direitos Sociais e Políticos no Brasil"
 * Restaura a Página 4: O Mural das Conquistas.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-direitos-sociais",
  titulo: "A Conquista dos Direitos Sociais e Políticos",
  iconeTrilha: "✊",
  bncc: ["EF05HI04", "EF05HI05"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a LUPA sobre a fotografia. São mulheres brasileiras, nos anos 1930, marchando por um DIREITO que hoje parece óbvio: VOTAR.",
    mapaUrl: imgSuf,
    imagemDestaqueUrl: imgTimeline,
    aurora:
      "Pequeno Historiador, hoje qualquer brasileira maior de 16 anos pode votar. Mas até 1932 isso era PROIBIDO. Foi preciso muita coragem e décadas de manifestação pra mudar.",
    falaFinal: "Nesta aula você acende a quarta Tocha: O Mural das Conquistas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite de investigador: quem tinha direito de votar no Brasil no ano 1900?",
    pergunta: "Quem votava em 1900?",
    fotoUrl: imgUrna,
    opcoes: [
      { id: "poucos", titulo: "Só homens ricos e alfabetizados", subtitulo: "mulheres, pobres e analfabetos ficavam de fora", emoji: "🎩", cor: "from-amber-600 to-orange-800", fotoUrl: imgUrna },
      { id: "todos", titulo: "Todos os brasileiros já votavam", subtitulo: "voto universal desde a Independência", emoji: "🗳️", cor: "from-slate-500 to-slate-700", fotoUrl: imgSuf },
    ],
    respostaCerta: "poucos",
    feedbackAcerto: "Correto. Voto era CENSITÁRIO: só homens ricos, alfabetizados. Menos de 3% da população votava.",
    feedbackErro: "Não. Até 1932 mulheres não votavam. E analfabetos ficaram de fora até 1988.",
    falaFinal: "O voto foi AMPLIADO em várias etapas. Cada ampliação foi uma conquista de LUTAS sociais.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras técnicas dos direitos sociais brasileiros.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      { id: "suf", capa: "Sufrágio", emoji: "🗳️", cor: "from-emerald-600 to-teal-800", fotoUrl: imgSuf, conteudo: "SUFRÁGIO é o direito de VOTAR. Quando é RESTRITO (só ricos, só homens), chamamos censitário. Quando alcança TODOS os adultos, chamamos UNIVERSAL. Sufragistas foram mulheres que lutaram pelo voto feminino.", exemplo: "Exemplo: no Brasil, o voto feminino foi conquistado em 1932. O voto universal (incluindo analfabetos) só em 1988." },
      { id: "clt", capa: "CLT", emoji: "📘", cor: "from-amber-600 to-orange-800", fotoUrl: imgCarteira, conteudo: "CLT (Consolidação das Leis do Trabalho) é o conjunto de leis que protege os trabalhadores no Brasil. Criada em 1943 no governo de Getúlio Vargas. Garante salário mínimo, jornada de 8 horas, férias, descanso semanal e 13º salário.", exemplo: "Exemplo: quando seu pai ou mãe recebe férias remuneradas, isso vem da CLT." },
      { id: "greve", capa: "Movimento social", emoji: "✊", cor: "from-sky-600 to-blue-800", fotoUrl: imgSuf, conteudo: "MOVIMENTO SOCIAL é a união organizada de cidadãos pra reivindicar direitos ao governo. Podem ser greves, passeatas, abaixo-assinados. Foi assim que trabalhadores e mulheres conquistaram os direitos que temos hoje.", exemplo: "Exemplo: a Greve Geral de 1917 forçou o governo a começar a criar leis trabalhistas." },
    ],
    falaFinal: "Sufrágio + CLT + Movimento Social. Trio que explica as CONQUISTAS do povo brasileiro.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Este é o INFOGRÁFICO da conquista do voto no Brasil. Toque em cada marco.",
    instrucao: "Toque nos pontos da linha do tempo",
    mapaUrl: imgTimeline,
    pontos: [
      { id: "1891", x: 12, y: 30, emoji: "🎩", cor: "from-amber-600 to-orange-800", fotoUrl: imgConst, titulo: "1. 1891 — VOTO CENSITÁRIO", texto: "Só homens ricos e alfabetizados votavam. Menos de 3% da população brasileira." },
      { id: "1932", x: 40, y: 45, emoji: "👩", cor: "from-emerald-600 to-teal-800", fotoUrl: imgSuf, titulo: "2. 1932 — VOTO FEMININO", texto: "Movimento sufragista conquista o direito ao voto feminino. Bertha Lutz foi uma das principais líderes." },
      { id: "1943", x: 65, y: 60, emoji: "📘", cor: "from-sky-600 to-blue-800", fotoUrl: imgCarteira, titulo: "3. 1943 — CLT", texto: "Criação da CLT (Consolidação das Leis do Trabalho). Carteira de Trabalho, salário mínimo, 8 horas por dia, férias." },
      { id: "1988", x: 90, y: 75, emoji: "🇧🇷", cor: "from-emerald-600 to-teal-800", fotoUrl: imgConst, titulo: "4. 1988 — VOTO UNIVERSAL", texto: "Constituição Cidadã garante voto pra TODOS: alfabetizados e analfabetos, dos 16 aos 70 anos." },
    ],
    falaFinal: "1891 → 1932 → 1943 → 1988. Cada década ampliou os direitos de mais gente.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre as conquistas brasileiras.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Em qual ano as mulheres brasileiras conquistaram o direito de votar?", fotoUrl: imgSuf, cards: [{ id: "a", emoji: "📅", titulo: "1500", cor: "from-slate-500 to-slate-700" }, { id: "b", emoji: "📅", titulo: "1932", cor: "from-emerald-500 to-teal-700" }, { id: "c", emoji: "📅", titulo: "2010", cor: "from-amber-500 to-orange-700" }], correta: "b", feedbackAcerto: "Correto. 1932 — Bertha Lutz e o movimento sufragista.", feedbackErro: "Foi em 1932." },
      { id: "q2", pergunta: "Qual documento garante férias e salário mínimo aos trabalhadores brasileiros?", fotoUrl: imgCarteira, cards: [{ id: "a", emoji: "📘", titulo: "CLT", cor: "from-amber-500 to-orange-700" }, { id: "b", emoji: "📖", titulo: "Bíblia", cor: "from-slate-500 to-slate-700" }, { id: "c", emoji: "📕", titulo: "Dicionário", cor: "from-emerald-500 to-teal-700" }], correta: "a", feedbackAcerto: "Correto. CLT — Consolidação das Leis do Trabalho.", feedbackErro: "É a CLT (1943)." },
      { id: "q3", pergunta: "Quem podia votar no Brasil ANTES de 1988?", fotoUrl: imgConst, cards: [{ id: "a", emoji: "📚", titulo: "Só alfabetizados", cor: "from-amber-500 to-orange-700" }, { id: "b", emoji: "👥", titulo: "Todos os adultos", cor: "from-slate-500 to-slate-700" }, { id: "c", emoji: "🧒", titulo: "Só crianças", cor: "from-emerald-500 to-teal-700" }], correta: "a", feedbackAcerto: "Correto. Analfabetos foram excluídos até 1988.", feedbackErro: "Só alfabetizados. Analfabetos passaram a votar só em 1988." },
    ],
    falaFinal: "Você já domina os marcos das conquistas brasileiras.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois interruptores em cima do infográfico do voto.",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgTimeline,
    camadas: [
      { id: "antes", rotulo: "Voto restrito (1891-1987)", emoji: "🎩", cor: "from-amber-600 to-orange-800", rect: { x: 0, y: 10, w: 66, h: 80 }, descricao: "Voto RESTRITO. Excluía mulheres (até 1932), analfabetos (até 1988) e jovens (só a partir de 18)." },
      { id: "depois", rotulo: "Voto universal (1988+)", emoji: "🗳️", cor: "from-emerald-600 to-teal-800", rect: { x: 66, y: 10, w: 34, h: 80 }, descricao: "Voto UNIVERSAL. Todos brasileiros de 16 a 70 anos podem votar — alfabetizados ou não." },
    ],
    falaFinal: "Antes: exclusão. Depois: inclusão. Cada mudança foi uma LUTA conquistada.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as conquistas dos direitos no Brasil.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Cronologia das conquistas",
    paradas: [
      { id: "cens", emoji: "🎩", rotulo: "1. 1891 — Voto censitário", fotoUrl: imgConst, descricao: "Só homens ricos alfabetizados." },
      { id: "fem", emoji: "👩", rotulo: "2. 1932 — Voto feminino", fotoUrl: imgSuf, descricao: "Mulheres conquistam o voto." },
      { id: "clt", emoji: "📘", rotulo: "3. 1943 — CLT", fotoUrl: imgCarteira, descricao: "Direitos trabalhistas." },
      { id: "uni", emoji: "🇧🇷", rotulo: "4. 1988 — Voto universal", fotoUrl: imgConst, descricao: "Todos votam, incluindo analfabetos." },
    ],
    ordemCerta: ["cens", "fem", "clt", "uni"],
    feedbackAcerto: "Perfeito. Cada década ampliou a cidadania.",
    feedbackErro: "Essa não é a próxima. Pense na cronologia.",
    falaFinal: "Você acabou de mapear 100 anos de conquista de direitos no Brasil.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 4. Toque nas palavras destacadas.",
    tituloLivro: "📜 Memorial da Cidadania e dos Direitos",
    subtitulo: "Página 4 — O Mural das Conquistas",
    paragrafos: [
      { id: "p1", texto: "Até 1932, mulheres brasileiras NÃO PODIAM VOTAR. Movimentos SUFRAGISTAS, liderados por nomes como BERTHA LUTZ, marcharam durante décadas até o governo Vargas garantir o VOTO FEMININO em 1932.", chaves: ["Sufragistas"], definicoes: { Sufragistas: "Mulheres que lutaram pelo direito ao voto. No Brasil, principal marco em 1932." }, fotoUrl: imgSuf },
      { id: "p2", texto: "Em 1943, também no governo de Getúlio Vargas, foi criada a CLT (Consolidação das Leis do Trabalho). Trabalhadores passaram a ter CARTEIRA DE TRABALHO, salário mínimo, jornada de 8 horas, férias remuneradas e 13º salário.", chaves: ["CLT"], definicoes: { CLT: "Conjunto de leis trabalhistas do Brasil, criado em 1943. Garante salário, férias e jornada de 8 horas." }, fotoUrl: imgCarteira },
      { id: "p3", texto: "A CONSTITUIÇÃO DE 1988 fechou o ciclo: garantiu o VOTO UNIVERSAL — todos brasileiros de 16 a 70 anos podem votar, alfabetizados ou não. Hoje, a URNA ELETRÔNICA torna a votação rápida e segura.", chaves: ["Voto universal"], definicoes: { "Voto universal": "Direito ao voto para todos os cidadãos adultos, sem distinção de renda, gênero ou escolaridade. No Brasil desde 1988." }, fotoUrl: imgUrna },
    ],
    falaFinal: "Leitura concluída. Você já explica por que cada eleição é uma CONQUISTA histórica.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de conquistas! Cada rodada mostra um direito. Ele já EXISTIA antes de 1988 ou foi conquistado DEPOIS?",
    instrucao: "⏱️ Toque na resposta antes do tempo acabar",
    duracaoSegundos: 18,
    pecas: [
      { id: "a", emoji: "⏮️", rotulo: "Antes de 1988" },
      { id: "d", emoji: "⏭️", rotulo: "1988 em diante" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Voto feminino", emoji: "👩", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "1932", emoji: "📅", cor: "from-emerald-500 to-teal-700" }, contexto: "Direito de mulheres votarem.", pecaCertaId: "a", feedbackAcerto: "Correto. 1932 — antes de 1988.", feedbackErro: "Voto feminino: 1932, ANTES de 1988." },
      { id: "r2", municipioA: { nome: "Voto de analfabetos", emoji: "📚", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Constituição Cidadã", emoji: "📜", cor: "from-orange-500 to-red-700" }, contexto: "Quem não sabia ler passou a votar.", pecaCertaId: "d", feedbackAcerto: "Correto. 1988 — Constituição Cidadã.", feedbackErro: "Analfabetos votam desde 1988." },
      { id: "r3", municipioA: { nome: "CLT", emoji: "📘", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Carteira de Trabalho", emoji: "💼", cor: "from-emerald-500 to-teal-700" }, contexto: "Salário mínimo e férias.", pecaCertaId: "a", feedbackAcerto: "Correto. 1943 — antes de 1988.", feedbackErro: "CLT: 1943, ANTES de 1988." },
      { id: "r4", municipioA: { nome: "SUS (saúde gratuita)", emoji: "🏥", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Sistema Único", emoji: "💊", cor: "from-orange-500 to-red-700" }, contexto: "Atendimento hospitalar gratuito.", pecaCertaId: "d", feedbackAcerto: "Correto. SUS foi criado pela Constituição de 1988.", feedbackErro: "SUS = criado pela Constituição de 1988." },
      { id: "r5", municipioA: { nome: "Voto aos 16 anos", emoji: "🧑", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Facultativo", emoji: "🗳️", cor: "from-emerald-500 to-teal-700" }, contexto: "Adolescentes podem votar.", pecaCertaId: "d", feedbackAcerto: "Correto. Desde 1988.", feedbackErro: "Voto aos 16 anos: garantido pela Constituição de 1988." },
      { id: "r6", municipioA: { nome: "Voto censitário", emoji: "🎩", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Só ricos alfabetizados", emoji: "💰", cor: "from-orange-500 to-red-700" }, contexto: "Voto restrito por renda.", pecaCertaId: "a", feedbackAcerto: "Correto. Era o sistema antes das lutas do século XX.", feedbackErro: "Voto censitário existia ANTES de 1988 (foi abolido)." },
    ],
    falaFinal: "6 rodadas! Você já sabe o que veio ANTES e DEPOIS da Constituição Cidadã.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos direitos conquistados: quanto do Brasil de HOJE veio de LUTAS sociais?",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgConst,
    fatias: [
      { id: "pol", rotulo: "Direitos Políticos", emoji: "🗳️", percentual: 40, cor: "#0f766e", descricao: "Voto feminino (1932), voto do analfabeto (1988), voto aos 16 (1988). Todos vindos de movimentos sociais.", exemplos: ["👩 Sufragistas", "🇧🇷 Constituição Cidadã"] },
      { id: "soc", rotulo: "Direitos Sociais", emoji: "📘", percentual: 60, cor: "#b45309", descricao: "CLT (1943), férias, salário mínimo, SUS (1988), educação pública. Vieram de greves e mobilizações.", exemplos: ["📘 CLT", "🏥 SUS"] },
    ],
    falaFinal: "TUDO que temos hoje veio de LUTAS. Nada caiu do céu.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra ganhar o Selo do Voto Universal.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgTimeline,
    perguntas: [
      { id: "av1", pergunta: "Em qual ano as mulheres conquistaram o voto no Brasil?", opcoes: [{ id: "a", texto: "1500.", correta: false }, { id: "b", texto: "1932.", correta: true }, { id: "c", texto: "2010.", correta: false }], feedbackAcerto: "Correto! 1932.", feedbackErro: "Foi em 1932." },
      { id: "av2", pergunta: "Qual conjunto de leis criou salário mínimo, férias e jornada de 8 horas em 1943?", opcoes: [{ id: "a", texto: "CLT.", correta: true }, { id: "b", texto: "Bíblia.", correta: false }, { id: "c", texto: "Constituição Colonial.", correta: false }], feedbackAcerto: "Correto! CLT (1943).", feedbackErro: "É a CLT — Consolidação das Leis do Trabalho." },
      { id: "av3", pergunta: "A partir de qual Constituição analfabetos passaram a poder votar no Brasil?", opcoes: [{ id: "a", texto: "1824 (Império).", correta: false }, { id: "b", texto: "1988 (Cidadã).", correta: true }, { id: "c", texto: "1500 (Descobrimento).", correta: false }], feedbackAcerto: "Correto! Constituição Cidadã de 1988.", feedbackErro: "Foi a Constituição Cidadã de 1988." },
    ],
    selo: { nome: "Selo do Voto Universal", subtitulo: "Insígnia oficial do Memorial da Cidadania", emoji: "✊", cor: "from-emerald-400 to-teal-600", fotoUrl: imgSuf },
    falaFinal: "Página 4 restaurada. A quarta Tocha brilha: O Mural das Conquistas.",
  },

  recompensa: { xp: 450, moedas: 350, medalha: "Selo do Voto Universal" },
};
