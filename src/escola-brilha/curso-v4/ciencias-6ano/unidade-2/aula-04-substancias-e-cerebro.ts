import type { AulaGeoV1 } from "../../types";
import { url as bancadaImg } from "@/assets/ciencias-6ano/u2-a1/bancada-biologia.jpg.asset.json";
import { url as celulaImg } from "@/assets/ciencias-6ano/u2-a1/celula-vegetal.jpg.asset.json";
import { url as niveisImg } from "@/assets/ciencias-6ano/u2-a1/niveis-organizacao.jpg.asset.json";
import { url as sistemasImg } from "@/assets/ciencias-6ano/u2-a1/sistemas-corpo.jpg.asset.json";
import celulaVideo from "@/assets/ciencias-6ano/u2-a1/celula-vida.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 2 · Aula 04
 * "Substâncias e Cérebro" — Efeitos de substâncias psicoativas sobre o sistema nervoso (EF06CI10).
 */
export const aula04: AulaGeoV1 = {
  slug: "aula-04-substancias-e-cerebro",
  titulo: "Substâncias e Cérebro",
  iconeTrilha: "⚠️",
  recompensa: { xp: 130, moedas: 50, medalha: "Guardião do Cérebro" },
  bncc: ["EF06CI10"],
  duracaoMin: 35,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada de neurofarmacologia. Observe os modelos de sinapse.",
    mapaUrl: bancadaImg,
    imagemDestaqueUrl: celulaImg,
    aurora:
      "Programa 2, missão 4. Álcool, nicotina e outras substâncias psicoativas alteram diretamente as SINAPSES do cérebro. Hoje investigamos como isso acontece e por que faz tanto mal ao organismo em formação.",
    falaFinal:
      "Entender como essas substâncias agem no cérebro é a melhor defesa contra decisões perigosas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Situação-problema: uma pessoa consome bebida alcoólica e passa a ter fala embolada e reflexos lentos.",
    pergunta: "Qual sua HIPÓTESE — onde o álcool está agindo para causar isso?",
    fotoUrl: sistemasImg,
    opcoes: [
      { id: "snc", titulo: "No sistema nervoso central", subtitulo: "desacelera as sinapses", emoji: "🧠", cor: "from-red-500 to-rose-700", fotoUrl: sistemasImg },
      { id: "musculo", titulo: "Só nos músculos", subtitulo: "sem envolver o cérebro", emoji: "💪", cor: "from-amber-500 to-orange-700", fotoUrl: bancadaImg },
      { id: "nada", titulo: "Não afeta nada do corpo", subtitulo: "é só impressão", emoji: "❌", cor: "from-slate-500 to-slate-800", fotoUrl: bancadaImg },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "snc",
    feedbackAcerto:
      "Correto. O álcool é um DEPRESSOR do sistema nervoso central — reduz a velocidade das sinapses, atrasando fala, reflexos e julgamento.",
    feedbackErro:
      "Não é impressão nem efeito isolado nos músculos. O álcool age no SISTEMA NERVOSO CENTRAL, tornando as sinapses mais lentas.",
    falaFinal:
      "Substâncias psicoativas atuam justamente nas sinapses — o ponto de comunicação entre neurônios — alterando como o cérebro processa informação.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos essenciais sobre substâncias psicoativas e o cérebro.",
    instrucao: "Vocabulário da neurofarmacologia",
    cadernos: [
      { id: "psicoativa", capa: "SUBSTÂNCIA PSICOATIVA", emoji: "⚠️", cor: "from-red-500 to-rose-700", conteudo: "Substância que ALTERA o funcionamento do sistema nervoso central, modificando humor, percepção ou comportamento.", exemplo: "Ex.: álcool, nicotina, cafeína, cocaína.", fotoUrl: sistemasImg },
      { id: "depressora", capa: "DEPRESSORA", emoji: "🐢", cor: "from-indigo-500 to-purple-700", conteudo: "Substância que DIMINUI a atividade do sistema nervoso, deixando reações mais lentas e sonolência.", exemplo: "Ex.: álcool e alguns calmantes.", fotoUrl: sistemasImg },
      { id: "estimulante", capa: "ESTIMULANTE", emoji: "⚡", cor: "from-amber-500 to-orange-700", conteudo: "Substância que AUMENTA a atividade nervosa, elevando frequência cardíaca e sensação de energia.", exemplo: "Ex.: cafeína e nicotina.", fotoUrl: bancadaImg },
      { id: "dependencia", capa: "DEPENDÊNCIA", emoji: "🔗", cor: "from-slate-500 to-slate-700", conteudo: "Condição em que o cérebro se ADAPTA à substância e passa a exigir seu uso repetido, com sintomas ao parar.", exemplo: "Ex.: dependência de nicotina no tabagismo.", fotoUrl: celulaImg },
      { id: "cerebro_jovem", capa: "CÉREBRO EM FORMAÇÃO", emoji: "🧠", cor: "from-emerald-500 to-teal-700", conteudo: "Até cerca dos 25 anos, o cérebro ainda está se desenvolvendo — por isso é MAIS vulnerável aos efeitos de substâncias psicoativas. Veja no vídeo a atividade celular contínua desse desenvolvimento.", exemplo: "Ex.: uso precoce de álcool prejudica mais a memória.", videoUrl: celulaVideo.url },
    ],
    falaFinal: "Psicoativa, depressora, estimulante, dependência, cérebro em formação. Cinco conceitos para entender riscos reais.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Mapa dos efeitos de diferentes substâncias no corpo. Toque em cada ponto.",
    instrucao: "Toque em cada efeito",
    mapaUrl: sistemasImg,
    pontos: [
      { id: "alcool", x: 25, y: 40, emoji: "🍺", cor: "from-red-500 to-rose-700", titulo: "Álcool", texto: "Depressor do SNC. Reduz reflexos, coordenação e julgamento — por isso não se deve dirigir após consumir.", fotoUrl: sistemasImg },
      { id: "nicotina", x: 50, y: 30, emoji: "🚬", cor: "from-slate-500 to-slate-700", titulo: "Nicotina", texto: "Estimulante presente no cigarro. Gera forte dependência e afeta pulmões e vasos sanguíneos.", fotoUrl: bancadaImg },
      { id: "cafeina", x: 70, y: 55, emoji: "☕", cor: "from-amber-500 to-orange-700", titulo: "Cafeína", texto: "Estimulante leve e legal, mas em excesso causa insônia, ansiedade e taquicardia.", fotoUrl: bancadaImg },
      { id: "cerebro", x: 45, y: 75, emoji: "🧠", cor: "from-emerald-500 to-teal-700", titulo: "Cérebro adolescente", texto: "Ainda em desenvolvimento até os 25 anos — por isso sofre efeitos mais intensos e duradouros dessas substâncias.", fotoUrl: sistemasImg },
    ],
    falaFinal: "Cada substância age de um jeito, mas todas alteram diretamente o funcionamento das sinapses cerebrais.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Checkpoint técnico. 3 perguntas sobre substâncias psicoativas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que caracteriza uma substância DEPRESSORA do sistema nervoso?", fotoUrl: sistemasImg,
        cards: [
          { id: "a", emoji: "🐢", titulo: "Diminui a atividade nervosa e as reações", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "⚡", titulo: "Aumenta a energia e a frequência cardíaca", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🍬", titulo: "Não afeta o cérebro de forma alguma", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. Depressora DIMINUI a velocidade das sinapses — como o álcool.",
        feedbackErro: "Aumentar energia é ESTIMULANTE. Depressora faz o CONTRÁRIO: diminui a atividade nervosa." },
      { id: "q2", pergunta: "Por que o cérebro adolescente é mais vulnerável a substâncias psicoativas?", fotoUrl: celulaImg,
        cards: [
          { id: "a", emoji: "🧠", titulo: "Porque ainda está em desenvolvimento até os 25 anos", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🦴", titulo: "Porque os ossos ainda crescem", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "💪", titulo: "Porque os músculos são menores", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. O CÉREBRO em formação sofre efeitos mais intensos e duradouros das substâncias.",
        feedbackErro: "Ossos e músculos não são o foco aqui. É o CÉREBRO, ainda em desenvolvimento, que sofre mais." },
      { id: "q3", pergunta: "O que é dependência química?", fotoUrl: bancadaImg,
        cards: [
          { id: "a", emoji: "🔗", titulo: "O cérebro se adapta e passa a exigir a substância", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "☕", titulo: "Gostar muito do sabor de uma bebida", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🎲", titulo: "Um efeito aleatório sem explicação", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Perfeito. Dependência é uma ADAPTAÇÃO cerebral que gera necessidade de uso repetido.",
        feedbackErro: "Não é sobre sabor nem acaso. DEPENDÊNCIA é a adaptação do cérebro que exige uso contínuo." },
    ],
    falaFinal: "Depressora, estimulante, dependência — três conceitos-chave para entender os riscos reais dessas substâncias.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Substâncias psicoativas se dividem em dois grandes efeitos: DEPRESSORAS (desaceleram o SNC) e ESTIMULANTES (aceleram o SNC).",
    instrucao: "Toque nos interruptores",
    mapaUrl: sistemasImg,
    camadas: [
      { id: "depressoras", rotulo: "Depressoras", emoji: "🐢", cor: "from-indigo-500 to-purple-700", rect: { x: 2, y: 2, w: 96, h: 45 }, descricao: "Reduzem a velocidade das sinapses. Exemplo: álcool. Causam lentidão de reflexos e sonolência.", fotoUrl: sistemasImg },
      { id: "estimulantes", rotulo: "Estimulantes", emoji: "⚡", cor: "from-amber-500 to-orange-700", rect: { x: 2, y: 49, w: 96, h: 49 }, descricao: "Aumentam a atividade nervosa. Exemplo: nicotina e cafeína. Aceleram batimento cardíaco e energia.", fotoUrl: bancadaImg },
    ],
    falaFinal: "Duas famílias, efeitos opostos, mas ambas alteram o funcionamento normal do sistema nervoso.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Reconstrua o caminho de como uma substância psicoativa afeta o corpo.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Qual a sequência de ação de uma substância psicoativa no corpo?",
    paradas: [
      { id: "ingestao", emoji: "🍺", rotulo: "1. Consumo da substância", descricao: "A substância entra no corpo por ingestão, inalação ou outra via.", fotoUrl: sistemasImg },
      { id: "corrente", emoji: "🩸", rotulo: "2. Corrente sanguínea", descricao: "A substância é absorvida e circula pelo sangue.", fotoUrl: bancadaImg },
      { id: "cerebro", emoji: "🧠", rotulo: "3. Chegada ao cérebro", descricao: "A substância atravessa e atinge o sistema nervoso central.", fotoUrl: sistemasImg },
      { id: "sinapse", emoji: "⚡", rotulo: "4. Alteração das sinapses", descricao: "A comunicação entre neurônios é acelerada ou desacelerada.", fotoUrl: celulaImg },
      { id: "comportamento", emoji: "🙎", rotulo: "5. Mudança de comportamento", descricao: "Reflexos, humor ou julgamento são alterados observavelmente.", fotoUrl: sistemasImg },
    ],
    ordemCerta: ["ingestao", "corrente", "cerebro", "sinapse", "comportamento"],
    feedbackAcerto: "Exato. É o caminho real percorrido por qualquer substância psicoativa no organismo.",
    feedbackErro: "A ordem é: consumo → corrente sanguínea → chegada ao cérebro → alteração das sinapses → mudança de comportamento.",
    falaFinal: "Entender esse caminho ajuda a explicar por que os efeitos aparecem tão rápido após o consumo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Programa 2, missão 4.",
    tituloLivro: "📓 Relatório · Observação 16",
    subtitulo: "Efeitos comparados de álcool e cafeína no sistema nervoso",
    paragrafos: [
      { id: "p1", texto: "MÉTODO: comparamos relatos de efeito de duas substâncias psicoativas legais e comuns: álcool e cafeína. O álcool é classificado como DEPRESSOR; a cafeína, como ESTIMULANTE do sistema nervoso central.", chaves: ["depressor", "estimulante"], definicoes: { depressor: "Substância que reduz a atividade do sistema nervoso.", estimulante: "Substância que aumenta a atividade do sistema nervoso." }, fotoUrl: sistemasImg },
      { id: "p2", texto: "EVIDÊNCIA: voluntários relataram sonolência e reflexos lentos após álcool, e alerta e taquicardia após cafeína em excesso. Ambas alteram a velocidade das SINAPSES, só que em direções opostas.", chaves: ["sinapses"], definicoes: { sinapses: "Pontos de comunicação entre neurônios." }, fotoUrl: celulaImg },
      { id: "p3", texto: "CONCLUSÃO: mesmo substâncias LEGAIS e socialmente aceitas alteram o funcionamento do cérebro. O uso consciente e moderado é essencial, especialmente durante a adolescência, quando o cérebro ainda está em formação.", chaves: ["uso consciente"], definicoes: { "uso consciente": "Consumo informado e moderado, avaliando riscos." }, fotoUrl: sistemasImg },
    ],
    falaFinal: "Você acabou de ler um relatório real sobre neurofarmacologia básica.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Classifique a substância pela descrição do efeito.",
    instrucao: "⏱️ Escolha a resposta correta",
    duracaoSegundos: 25,
    pecas: [
      { id: "depressora", emoji: "🐢", rotulo: "Depressora" },
      { id: "estimulante", emoji: "⚡", rotulo: "Estimulante" },
      { id: "dependencia", emoji: "🔗", rotulo: "Dependência" },
      { id: "sinapse", emoji: "🧠", rotulo: "Sinapse alterada" },
      { id: "cerebro_jovem", emoji: "🌱", rotulo: "Cérebro em formação" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Deixa reflexos lentos", emoji: "🐢", cor: "from-indigo-500 to-purple-700" }, municipioB: { nome: "Efeito do álcool", emoji: "🍺", cor: "from-red-500 to-rose-700" }, contexto: "Substância que diminui a atividade do sistema nervoso central.", pecaCertaId: "depressora", fotoUrl: sistemasImg, feedbackAcerto: "DEPRESSORA — reduz a atividade nervosa.", feedbackErro: "Reflexos lentos e álcool = substância DEPRESSORA." },
      { id: "r2", municipioA: { nome: "Aumenta batimentos", emoji: "⚡", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Efeito da cafeína", emoji: "☕", cor: "from-orange-500 to-red-700" }, contexto: "Substância que acelera a atividade do sistema nervoso central.", pecaCertaId: "estimulante", fotoUrl: bancadaImg, feedbackAcerto: "ESTIMULANTE — acelera a atividade nervosa.", feedbackErro: "Aumentar batimentos e cafeína = substância ESTIMULANTE." },
      { id: "r3", municipioA: { nome: "Precisa usar sempre mais", emoji: "🔗", cor: "from-slate-500 to-slate-700" }, municipioB: { nome: "Adaptação do cérebro", emoji: "🧠", cor: "from-emerald-500 to-teal-700" }, contexto: "Condição em que o corpo passa a exigir a substância repetidamente.", pecaCertaId: "dependencia", fotoUrl: celulaImg, feedbackAcerto: "DEPENDÊNCIA — adaptação que exige uso contínuo.", feedbackErro: "Precisar usar sempre mais = DEPENDÊNCIA." },
    ],
    falaFinal: "Agora você identifica na hora os tipos de efeito das substâncias psicoativas.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Toda substância psicoativa se encaixa em duas grandes famílias de efeito: DEPRESSORAS e ESTIMULANTES.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: sistemasImg,
    fatias: [
      { id: "depressoras", rotulo: "Depressoras", emoji: "🐢", percentual: 50, cor: "#6366f1", descricao: "Reduzem a atividade do sistema nervoso, deixando reações mais lentas. Exemplo principal: o álcool.", exemplos: ["Álcool", "Alguns calmantes"], fotoUrl: sistemasImg },
      { id: "estimulantes", rotulo: "Estimulantes", emoji: "⚡", percentual: 50, cor: "#f59e0b", descricao: "Aumentam a atividade do sistema nervoso, elevando energia e frequência cardíaca. Exemplos: nicotina e cafeína.", exemplos: ["Nicotina", "Cafeína"], fotoUrl: bancadaImg },
    ],
    falaFinal: "Depressoras desaceleram, estimulantes aceleram — mas ambas alteram o funcionamento normal do cérebro.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão da semana. 3 perguntas e sua Certificação de Guardião do Cérebro é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: sistemasImg,
    perguntas: [
      { id: "q1", pergunta: "O que o álcool faz no sistema nervoso central?", fotoUrl: sistemasImg,
        opcoes: [
          { id: "a", texto: "Diminui a velocidade das sinapses (efeito depressor)", correta: true },
          { id: "b", texto: "Acelera os reflexos e a atenção" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. O álcool é DEPRESSOR — desacelera a comunicação entre neurônios.",
        feedbackErro: "Não acelera reflexos. O álcool é DEPRESSOR e desacelera as sinapses." },
      { id: "q2", pergunta: "Por que a nicotina é considerada estimulante?", fotoUrl: bancadaImg,
        opcoes: [
          { id: "a", texto: "Porque aumenta a atividade do sistema nervoso e a frequência cardíaca", correta: true },
          { id: "b", texto: "Porque causa sono profundo" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Sim. Nicotina AUMENTA a atividade nervosa, ao contrário de substâncias depressoras.",
        feedbackErro: "Sono profundo é efeito de depressora. Nicotina AUMENTA a atividade nervosa." },
      { id: "q3", pergunta: "Por que jovens são mais vulneráveis a substâncias psicoativas?", fotoUrl: celulaImg,
        opcoes: [
          { id: "a", texto: "Porque o cérebro ainda está em desenvolvimento até cerca de 25 anos", correta: true },
          { id: "b", texto: "Porque têm mais músculos que adultos" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Exato. O CÉREBRO em formação sofre efeitos mais intensos e duradouros.",
        feedbackErro: "Músculo não tem relação. O que importa é o CÉREBRO ainda em desenvolvimento." },
    ],
    selo: { nome: "Certificação de Guardião do Cérebro", subtitulo: "Academia Científica · Programa 2 · Missão 4 concluída", emoji: "⚠️", cor: "from-red-500 to-rose-700" },
    falaFinal: "Missão concluída. Você entende como substâncias psicoativas afetam o sistema nervoso e por que isso é um risco maior na adolescência.",
  },
};
