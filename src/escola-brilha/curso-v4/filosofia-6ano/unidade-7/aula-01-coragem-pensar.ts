import type { AulaGeoV1 } from "../../types";
import { url as lendo } from "@/assets/filosofia-6ano/u7-jovem-lendo.jpg.asset.json";
import { url as coragem } from "@/assets/filosofia-6ano/u7-coragem-perguntar.jpg.asset.json";
import { url as caderno } from "@/assets/filosofia-6ano/u7-caderno-perguntas.jpg.asset.json";

/**
 * Filosofia · 6º Ano · Unidade 7 · Aula 01
 * "Coragem de Pensar por Si" — EF06FI07 (autoral). Fechamento do ano.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-coragem-pensar",
  titulo: "Coragem de Pensar por Si",
  iconeTrilha: "🦁",
  bncc: ["EF06FI07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olha esse caderno. Ele guarda um ATO de coragem.",
    mapaUrl: caderno,
    imagemDestaqueUrl: caderno,
    aurora:
      "Aprendiz, em 1784, um filósofo alemão chamado IMMANUEL KANT escreveu uma frase-lema que atravessou os séculos: SAPERE AUDE! — 'ouse saber, atreva-se a usar teu próprio entendimento'. Pra ele, o problema da humanidade não é falta de inteligência: é falta de CORAGEM de pensar sem depender de tutor.",
    falaFinal:
      "Nesta aula — fechamento do ano — você entende por que filosofia é, antes de tudo, um ato de CORAGEM.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: por que a maioria das pessoas prefere que OUTRO pense por elas?",
    pergunta: "Por que é mais fácil deixar outro pensar por mim?",
    opcoes: [
      { id: "burro", titulo: "PORQUE SÃO BURRAS", subtitulo: "não conseguem pensar", emoji: "🤷", cor: "from-slate-400 to-gray-600" },
      { id: "cansaco", titulo: "PORQUE DÁ TRABALHO", subtitulo: "e comodismo pesa", emoji: "🛋️", cor: "from-amber-400 to-orange-600" },
      { id: "medo", titulo: "PORQUE DÁ MEDO", subtitulo: "de errar, ser criticado, se isolar", emoji: "😰", cor: "from-violet-400 to-purple-600" },
    ],
    respostaCerta: "medo",
    feedbackAcerto: "Isso é Kant puro. Ele diz: NÃO É FALTA de inteligência — é COMODISMO + MEDO. Pensar sozinho expõe. Repetir é seguro.",
    feedbackErro: "Kant diz que NÃO é falta de inteligência. É medo (de errar, ser criticado, se isolar) e comodismo. Pensar sozinho custa caro.",
    falaFinal: "Não é burrice — é medo. E medo se enfrenta com CORAGEM.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave da autonomia intelectual.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "menoridade", capa: "1. Menoridade", emoji: "👶", cor: "from-slate-500 to-slate-700",
        conteudo: "MENORIDADE, pra Kant, é a incapacidade de usar o próprio entendimento sem a direção de OUTRO — pais, professores, líderes, algoritmos. E o pior: uma menoridade que a própria pessoa mantém por preguiça e medo, não por falta de idade.",
        exemplo: "Ex.: adulto que só repete o que a família ou o grupo dele diz, sem nunca examinar, vive em menoridade intelectual.",
        fotoUrl: caderno },
      { id: "autonomia", capa: "2. Autonomia", emoji: "🧭", cor: "from-emerald-500 to-teal-700",
        conteudo: "AUTONOMIA é dar a si mesmo a própria lei do pensar. Não é 'faço o que quero' — é PENSAR pelo próprio esforço, checar as ideias, aceitar quando o argumento do outro é melhor. É o oposto da menoridade.",
        exemplo: "Ex.: mudar de ideia porque OUVIU um argumento melhor é autonomia. Mudar porque o grupo mudou é menoridade.",
        fotoUrl: coragem },
      { id: "sapere", capa: "3. Sapere Aude", emoji: "🦁", cor: "from-amber-500 to-orange-700",
        conteudo: "SAPERE AUDE (sá-pe-re áu-de) — do latim: 'ouse saber, atreva-se a usar teu entendimento'. É o LEMA da filosofia moderna e, no fundo, de todo o Ensino Médio e adulto que virá pela frente.",
        exemplo: "Ex.: numa reunião de família, quando você diz 'espera — eu penso diferente por esse motivo aqui', você aplica sapere aude.",
        fotoUrl: lendo },
    ],
    falaFinal: "Menoridade → autonomia. E o passe entre as duas se chama SAPERE AUDE.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 obstáculos que TRAVAM o pensamento próprio + como enfrentar. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: coragem,
    pontos: [
      { id: "medo", x: 22, y: 32, emoji: "😰", cor: "from-violet-500 to-purple-700",
        titulo: "1. MEDO de errar",
        texto: "'E se eu falar bobagem?' Kant: melhor bobagem PENSADA POR VOCÊ do que verdade REPETIDA sem entender. Errar é parte do processo — o problema é NÃO tentar.",
        fotoUrl: caderno },
      { id: "grupo", x: 70, y: 28, emoji: "👥", cor: "from-red-500 to-orange-700",
        titulo: "2. PRESSÃO do grupo",
        texto: "'Se eu discordar da turma, fico de fora.' É real — pertencer importa. Mas se você NUNCA discorda, você não é um membro, é um eco. Escolher batalhas com sabedoria não é covardia; é estratégia.",
        fotoUrl: coragem },
      { id: "tutor", x: 28, y: 72, emoji: "🎓", cor: "from-slate-500 to-slate-700",
        titulo: "3. TUTORES automáticos",
        texto: "Kant lista: 'o livro que pensa por mim, o médico que julga meu regime, o padre que decide minha consciência'. Hoje some: ALGORITMO. Delegar toda decisão pra outro é confortável — e é menoridade.",
        fotoUrl: lendo },
      { id: "coragem", x: 74, y: 74, emoji: "🦁", cor: "from-amber-500 to-orange-700",
        titulo: "4. A RESPOSTA: coragem PACIENTE",
        texto: "Não é bater de frente com todo mundo. É AGUENTAR o desconforto de perguntar 'por quê?' quando você quer só engolir a resposta pronta. Coragem intelectual se treina — uma pergunta por vez.",
        fotoUrl: coragem },
    ],
    falaFinal: "3 obstáculos + 1 resposta. Coragem paciente é a chave.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Kant chama de MENORIDADE…", fotoUrl: caderno,
        cards: [
          { id: "kant", emoji: "👶", titulo: "Não usar o próprio entendimento por preguiça ou medo", cor: "from-slate-500 to-slate-700" },
          { id: "idade", emoji: "🎂", titulo: "Ter menos de 18 anos", cor: "from-amber-400 to-orange-600" },
          { id: "escola", emoji: "🎒", titulo: "Estar matriculado na escola", cor: "from-sky-400 to-blue-600" },
        ],
        correta: "kant",
        feedbackAcerto: "Isso. Menoridade intelectual não tem idade — é RECUSAR pensar por si.",
        feedbackErro: "Menoridade em Kant não é idade civil — é RECUSAR usar o próprio entendimento por preguiça ou medo." },
      { id: "q2", pergunta: "SAPERE AUDE significa…", fotoUrl: lendo,
        cards: [
          { id: "ousa", emoji: "🦁", titulo: "'Ouse saber' — tenha coragem de pensar por si", cor: "from-amber-500 to-orange-700" },
          { id: "cala", emoji: "🤐", titulo: "'Cala e obedece'", cor: "from-slate-400 to-gray-600" },
          { id: "estuda", emoji: "📖", titulo: "'Estude muito e memorize'", cor: "from-sky-400 to-blue-600" },
        ],
        correta: "ousa",
        feedbackAcerto: "Perfeito. Não é obedecer nem só decorar — é OUSAR pensar por si.",
        feedbackErro: "É 'OUSE SABER' — tenha coragem de usar teu próprio entendimento. Kant, 1784." },
      { id: "q3", pergunta: "Mudar de ideia porque ESCUTOU um argumento melhor é sinal de:", fotoUrl: coragem,
        cards: [
          { id: "autonomia", emoji: "🧭", titulo: "AUTONOMIA — você reconhece razão superior", cor: "from-emerald-500 to-teal-700" },
          { id: "fraqueza", emoji: "🍃", titulo: "Fraqueza — você não tem opinião firme", cor: "from-slate-400 to-gray-600" },
          { id: "traicao", emoji: "🚫", titulo: "Traição ao seu grupo original", cor: "from-red-400 to-orange-600" },
        ],
        correta: "autonomia",
        feedbackAcerto: "Isso. Firmeza não é teimar — é seguir o MELHOR argumento, venha de onde vier.",
        feedbackErro: "É AUTONOMIA: quem muda por ARGUMENTO melhor pensa por si. Quem NUNCA muda é teimoso, não firme." },
    ],
    falaFinal: "Radar afinado. Você distingue autonomia de teimosia e de servidão.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Autonomia intelectual exige EDUCAÇÃO acessível. Acenda 5 estados brasileiros com maior número de bibliotecas públicas ativas.",
    instrucao: "Acenda 5 estados com mais bibliotecas públicas",
    missao: { tipo: "selecionar", siglas: ["SP", "MG", "RJ", "BA", "RS"], pergunta: "5 estados com maior número de bibliotecas públicas ativas no Brasil:" },
    falaFinal: "SP, MG, RJ, BA e RS lideram a rede de bibliotecas públicas. Cada uma delas é uma porta de saída da menoridade.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como se TREINA a coragem de pensar por si, na prática? Coloque na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "5 passos pra sair da menoridade intelectual:",
    paradas: [
      { id: "pergunta", emoji: "❓", rotulo: "1. FAÇA UMA PERGUNTA SILENCIOSA", descricao: "Quando alguém afirma algo, PERGUNTE em silêncio: 'como ele sabe? qual a evidência?'." },
      { id: "estudo", emoji: "📚", rotulo: "2. ESTUDE UM POUCO", descricao: "Antes de opinar em público, invista 20 minutos pra ler algo além do primeiro resultado." },
      { id: "diga", emoji: "🗣️", rotulo: "3. DIGA A PERGUNTA EM VOZ ALTA", descricao: "'Posso perguntar de onde veio essa informação?' — sem agressão, com curiosidade real." },
      { id: "aguenta", emoji: "🦁", rotulo: "4. AGUENTE O DESCONFORTO", descricao: "Vai ter olhar torto, silêncio, resposta rude. Respire. Foi coragem, não ataque." },
      { id: "muda", emoji: "🧭", rotulo: "5. MUDE SE OUVIR ARGUMENTO MELHOR", descricao: "Autonomia não é teimosia. Se o outro trouxer razão superior, atualize. Isso é MADUREZA." },
    ],
    ordemCerta: ["pergunta", "estudo", "diga", "aguenta", "muda"],
    feedbackAcerto: "Exato. Pergunta interna → estudo → pergunta pública → coragem → atualização. É o treino da autonomia.",
    feedbackErro: "A ordem é: 1) pergunta silenciosa, 2) estudo, 3) pergunta pública, 4) aguentar desconforto, 5) mudar se houver argumento melhor.",
    falaFinal: "5 passos. Uma pergunta por dia — o resto vem.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção — é a última leitura do ano.",
    tituloLivro: "📔 Caderno do Aprendiz",
    subtitulo: "Página 7 — Sapere Aude!",
    paragrafos: [
      { id: "p1", texto: "Em 1784, IMMANUEL KANT escreveu um ensaio curto e explosivo: 'O que é o Esclarecimento?'. A resposta ficou eterna: ESCLARECIMENTO é a saída do ser humano da MENORIDADE que ele mesmo se impôs. Menoridade = incapacidade de usar o próprio entendimento sem tutor.", chaves: ["Kant", "esclarecimento", "menoridade"] },
      { id: "p2", texto: "E qual o lema disso tudo? SAPERE AUDE! 'Ouse saber, atreva-se a usar teu próprio entendimento!'. Não é 'seja rebelde', não é 'discorde de tudo': é ASSUMIR o esforço de pensar por si, checar, argumentar e atualizar quando aparece razão melhor.", chaves: ["sapere aude", "autonomia"] },
      { id: "p3", texto: "Sair da menoridade custa. Kant admite: preguiça e MEDO são poderosos. É mais confortável deixar o livro pensar por você, o médico julgar teu regime, o algoritmo escolher o que você vê. O problema: aos poucos, você para de exercer o próprio entendimento — e ele atrofia.", chaves: ["preguiça e medo", "atrofia"] },
      { id: "p4", texto: "Este ano você conheceu ESPANTO, PRÉ-SOCRÁTICOS, SÓCRATES, ARGUMENTO, AMIZADE VIRTUOSA e a CAVERNA de Platão. Todos convergem AQUI: viver como aprendiz do espanto é escolher, todo dia, a coragem de pensar por si. Bem-vindo — a filosofia começa agora.", chaves: ["coragem", "pensar por si"] },
    ],
    falaFinal: "Leu? Bora pro minijogo final do ano.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo AUDITOR DE AUTONOMIA! Cada cena mostra uma atitude — diga se é MENORIDADE, AUTONOMIA, TEIMOSIA ou SERVIDÃO AO GRUPO.",
    instrucao: "⏱️ Que postura é essa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "menoridade", emoji: "👶", rotulo: "Menoridade" },
      { id: "autonomia", emoji: "🧭", rotulo: "Autonomia" },
      { id: "teimosia", emoji: "🗿", rotulo: "Teimosia" },
      { id: "servidao", emoji: "👥", rotulo: "Servidão ao grupo" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'Meu tio disse, então é assim. Não vou nem verificar'", emoji: "👶", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Delegação total a um tutor", emoji: "🎓", cor: "from-gray-400 to-slate-600" },
        contexto: "A pessoa dispensa checar por si mesma.", pecaCertaId: "menoridade",
        feedbackAcerto: "Isso. MENORIDADE — outro pensa, você repete.",
        feedbackErro: "É MENORIDADE: delegar tudo a um tutor sem checar. Kant chama isso de servidão auto-imposta." },
      { id: "r2", municipioA: { nome: "'Achava X. Você trouxe dado forte pra Y. Vou atualizar minha visão'", emoji: "🧭", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Muda a partir de ARGUMENTO", emoji: "🔄", cor: "from-teal-400 to-emerald-600" },
        contexto: "Reconhece razão superior e ajusta a posição.", pecaCertaId: "autonomia",
        feedbackAcerto: "Perfeito. AUTONOMIA — segue o melhor argumento, não o ego.",
        feedbackErro: "É AUTONOMIA: mudar por ARGUMENTO melhor é maturidade, não fraqueza." },
      { id: "r3", municipioA: { nome: "'Já dei 3 argumentos contrários e ele nem responde — só insiste que está certo'", emoji: "🗿", cor: "from-slate-500 to-slate-700" },
        municipioB: { nome: "Recusa exame diante de argumento sólido", emoji: "🚫", cor: "from-gray-500 to-slate-700" },
        contexto: "Insiste sem considerar as razões apresentadas.", pecaCertaId: "teimosia",
        feedbackAcerto: "Boa. TEIMOSIA — o oposto de autonomia. Ego trava a razão.",
        feedbackErro: "É TEIMOSIA: recusar argumento sólido só pra não ceder. Autonomia AGUENTA ser corrigida." },
      { id: "r4", municipioA: { nome: "'A turma toda passou a odiar essa banda — eu vou junto pra não ficar de fora'", emoji: "👥", cor: "from-red-400 to-orange-600" },
        municipioB: { nome: "Muda pra caber, não por argumento", emoji: "🚪", cor: "from-orange-400 to-red-600" },
        contexto: "A mudança acompanha o humor do grupo.", pecaCertaId: "servidao",
        feedbackAcerto: "Isso. SERVIDÃO AO GRUPO — pertencer venceu o pensar.",
        feedbackErro: "É SERVIDÃO AO GRUPO: mudar pra caber, sem argumento novo. Menoridade coletiva." },
      { id: "r5", municipioA: { nome: "'Antes de opinar, pesquisei em 3 fontes diferentes'", emoji: "🧭", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Checagem antes de tomar posição", emoji: "🔎", cor: "from-teal-400 to-emerald-600" },
        contexto: "Investiga em vez de repetir o senso comum.", pecaCertaId: "autonomia",
        feedbackAcerto: "Perfeito. AUTONOMIA — sapere aude aplicado.",
        feedbackErro: "É AUTONOMIA: checar antes de opinar é o gesto básico do sapere aude." },
      { id: "r6", municipioA: { nome: "'Não pesquiso porque o algoritmo já me mostra o que preciso saber'", emoji: "👶", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Delegação da mente ao algoritmo", emoji: "📱", cor: "from-gray-400 to-slate-600" },
        contexto: "Renuncia ao próprio entendimento em favor da máquina.", pecaCertaId: "menoridade",
        feedbackAcerto: "Isso. MENORIDADE MODERNA — o tutor virou algoritmo, mas continua tutor.",
        feedbackErro: "É MENORIDADE MODERNA: entregar o próprio entendimento a um tutor (aqui, o algoritmo)." },
    ],
    falaFinal: "6 rodadas. Você reconhece menoridade, autonomia, teimosia e servidão — em si e nos outros.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: as 2 grandes vidas intelectuais possíveis.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "menoridade", rotulo: "MENORIDADE (outro pensa por você)", emoji: "👶", percentual: 50, cor: "#94a3b8",
        descricao: "Deixa família, grupo, líder ou algoritmo pensarem por você. Cômodo, seguro, comum. O preço: a mente atrofia e você repete sem entender. Fica na caverna, olhando as sombras.",
        exemplos: ["📱 'O algoritmo decide'", "👥 'Meu grupo já respondeu'", "🎓 'Meu tutor sabe'"] },
      { id: "autonomia", rotulo: "AUTONOMIA (você pensa por si)", emoji: "🦁", percentual: 50, cor: "#f59e0b",
        descricao: "Assume o esforço de perguntar, checar, argumentar, aguentar desconforto e mudar quando aparece razão melhor. Custoso, expõe, mas AMPLIA. Você sai da caverna e ainda ajuda outros a saírem.",
        exemplos: ["❓ Pergunta 'como sabe?'", "🔎 Checa fontes", "🧭 Muda por argumento"] },
    ],
    falaFinal: "Duas vidas possíveis. Filosofia é a segunda — e o ano inteiro te preparou pra ela.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia SAPERE AUDE — a mais importante do ano.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "SAPERE AUDE, lema de Kant, significa:",
        opcoes: [
          { id: "a", texto: "'Cale e obedeça sempre'", correta: false },
          { id: "b", texto: "'Ouse saber — tenha coragem de usar teu próprio entendimento'", correta: true },
          { id: "c", texto: "'Estude muito e memorize'", correta: false },
        ],
        feedbackAcerto: "Isso. Ousadia intelectual, não rebeldia gratuita nem memorização passiva.",
        feedbackErro: "SAPERE AUDE = 'OUSE SABER'. Coragem de PENSAR por si, não de memorizar nem de obedecer." },
      { id: "av2", pergunta: "MENORIDADE, para Kant, é:",
        opcoes: [
          { id: "a", texto: "Ter menos de 18 anos", correta: false },
          { id: "b", texto: "Não usar o próprio entendimento por preguiça ou medo — não tem idade civil", correta: true },
          { id: "c", texto: "Estudar em escola pública", correta: false },
        ],
        feedbackAcerto: "Perfeito. Menoridade em Kant é INTELECTUAL — pode acometer adulto de qualquer idade.",
        feedbackErro: "Menoridade em Kant não tem idade — é a RECUSA de usar o próprio entendimento." },
      { id: "av3", pergunta: "Mudar de ideia porque OUVIU um argumento melhor é sinal de:",
        opcoes: [
          { id: "a", texto: "Fraqueza — falta de opinião firme", correta: false },
          { id: "b", texto: "AUTONOMIA — seguir a melhor razão, não o ego", correta: true },
          { id: "c", texto: "Traição ao grupo original", correta: false },
        ],
        feedbackAcerto: "Isso. Firmeza não é teimar; é seguir o melhor argumento. Autonomia madura.",
        feedbackErro: "É AUTONOMIA: mudar por RAZÃO melhor é maduro. Teimar por ego é fraqueza." },
    ],
    selo: { nome: "Sapere Aude", subtitulo: "Insígnia da Autonomia Intelectual", emoji: "🦁", cor: "from-amber-400 to-orange-700" },
    falaFinal: "Insígnia FINAL conquistada! Você não é mais aprendiz do espanto — você é APRENDIZ DE FILÓSOFO. Até o 7º ano.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Sapere Aude" },
};
