import type { AulaGeoV1 } from "../../types";
import feiraImg from "@/assets/ciencias-6ano/u7-a1/feira-ciencias.jpg";
import equipeImg from "@/assets/ciencias-6ano/u7-a1/equipe-projeto.jpg";
import posterImg from "@/assets/ciencias-6ano/u7-a1/poster-cientifico.jpg";
import equipeVideo from "@/assets/ciencias-6ano/u7-a1/equipe-trabalhando.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 7 · Aula 01
 * "Projeto Integrador" — Aplicação de todos os programas (EF06CI06).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-projeto-integrador",
  titulo: "Projeto Integrador",
  iconeTrilha: "🎓",
  recompensa: { xp: 150, moedas: 60, medalha: "Cientista Formado" },
  bncc: ["EF06CI06"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Feira de ciências da Academia. Sua vez de apresentar.",
    mapaUrl: feiraImg,
    imagemDestaqueUrl: posterImg,
    aurora:
      "Programa final. Você passou por 6 laboratórios: método, célula, ecossistema, química, energia, planeta. Agora integra TUDO num único projeto e apresenta como cientista de verdade.",
    falaFinal: "Ciência não vive isolada. Um bom projeto costura biologia + química + física + geologia num só argumento.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Situação real: sua equipe recebeu 4 semanas pra investigar 'poluição do rio próximo à escola'. Qual etapa vem PRIMEIRO?",
    pergunta: "Qual sua HIPÓTESE — por onde começar?",
    fotoUrl: equipeImg,
    opcoes: [
      { id: "problema", titulo: "Definir problema + hipótese", subtitulo: "planejar antes de agir", emoji: "❓", cor: "from-emerald-500 to-teal-700", fotoUrl: equipeImg },
      { id: "coletar", titulo: "Sair coletando água já", subtitulo: "ir a campo direto", emoji: "🏃", cor: "from-red-500 to-rose-700", fotoUrl: equipeImg },
      { id: "poster", titulo: "Fazer o pôster primeiro", subtitulo: "estética antes de dado", emoji: "🎨", cor: "from-slate-500 to-slate-700", fotoUrl: posterImg },
    ],
    respostaCerta: "problema",
    feedbackAcerto:
      "Correto. Antes de coletar dado, VOCÊ precisa saber O QUE está tentando descobrir. Problema + hipótese primeiro.",
    feedbackErro:
      "Coletar sem plano vira bagunça. Fazer pôster sem dado é vazio. Problema + hipótese SEMPRE vêm primeiro.",
    falaFinal: "Método científico não é opcional em projeto real. É o esqueleto que segura tudo em pé.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco etapas de projeto científico integrador. Uma vem com vídeo de equipe real trabalhando junto.",
    instrucao: "Etapas do projeto",
    cadernos: [
      { id: "problema", capa: "PROBLEMA", emoji: "❓", cor: "from-sky-500 to-cyan-700", conteudo: "Pergunta específica que a pesquisa quer responder. Boa pergunta = projeto bom.", exemplo: "Ex.: 'A água do rio X está contaminada por esgoto?'", fotoUrl: equipeImg },
      { id: "equipe", capa: "EQUIPE", emoji: "👥", cor: "from-indigo-500 to-purple-700", conteudo: "Divisão de papéis: quem coleta, quem mede, quem analisa, quem escreve. Ciência é colaboração — veja no vídeo.", exemplo: "Ex.: 4 estudantes com funções complementares.", videoUrl: equipeVideo.url },
      { id: "dados", capa: "DADOS", emoji: "📏", cor: "from-emerald-500 to-teal-700", conteudo: "Medidas coletadas em campo E laboratório. Documentados com data, local e método.", exemplo: "Ex.: pH, oxigênio dissolvido, cor, odor.", fotoUrl: posterImg },
      { id: "analise", capa: "ANÁLISE", emoji: "📊", cor: "from-amber-500 to-orange-700", conteudo: "Transformar dados em gráficos, tabelas e comparações. Aqui a hipótese é CONFIRMADA ou REFUTADA.", exemplo: "Ex.: comparar pH do rio com padrão da OMS.", fotoUrl: posterImg },
      { id: "comunicacao", capa: "COMUNICAÇÃO", emoji: "📣", cor: "from-rose-500 to-pink-700", conteudo: "Apresentar resultados em pôster, apresentação ou relatório. Se ninguém entender, a pesquisa NÃO existe.", exemplo: "Ex.: pôster A3 + apresentação de 5 min.", fotoUrl: posterImg },
    ],
    falaFinal: "Problema, equipe, dados, análise, comunicação. Roteiro oficial de qualquer projeto científico.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "A feira de ciências oficial. Toque em cada elemento.",
    instrucao: "Toque nos elementos",
    mapaUrl: feiraImg,
    pontos: [
      { id: "poster", x: 30, y: 40, emoji: "📊", cor: "from-sky-500 to-cyan-700", titulo: "Pôster científico", texto: "Comunicação visual: título, hipótese, método, resultados, conclusão. Padrão internacional.", fotoUrl: posterImg },
      { id: "apresentador", x: 65, y: 55, emoji: "🎤", cor: "from-emerald-500 to-teal-700", titulo: "Apresentador", texto: "Explica o projeto para visitantes e jurados. Deve dominar cada dado — não decorar.", fotoUrl: feiraImg },
      { id: "publico", x: 85, y: 30, emoji: "👥", cor: "from-amber-500 to-orange-700", titulo: "Público visitante", texto: "Faz perguntas críticas. Boa apresentação SUPORTA a crítica — não a evita.", fotoUrl: feiraImg },
      { id: "jaleco", x: 60, y: 80, emoji: "🥼", cor: "from-indigo-500 to-purple-700", titulo: "Jaleco / postura", texto: "Uniforme + postura profissional comunicam RIGOR. Detalhe importa em ciência.", fotoUrl: feiraImg },
    ],
    falaFinal: "Feira de ciências reproduz um congresso científico real. Todo detalhe conta.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre projeto científico.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que caracteriza um BOM problema de pesquisa?", fotoUrl: equipeImg,
        cards: [
          { id: "a", emoji: "🎯", titulo: "Pergunta específica e RESPONSÁVEL com dados", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌍", titulo: "Pergunta gigante tipo 'o que é a vida?'", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🤷", titulo: "Qualquer pergunta serve", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. Pergunta específica + testável com dados = boa base.",
        feedbackErro: "Pergunta muito ampla NÃO se responde num projeto escolar. Foco em algo específico e testável." },
      { id: "q2", pergunta: "Por que fazer EQUIPE em vez de projeto individual?", fotoUrl: equipeImg,
        cards: [
          { id: "a", emoji: "🧠", titulo: "Diferentes olhares detectam erros e enriquecem análise", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎨", titulo: "Fica mais bonito visualmente", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "😴", titulo: "Pra fazer menos trabalho", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Ciência real é COLETIVA — revisão por pares detecta o que 1 pessoa não vê.",
        feedbackErro: "Equipe não é pra economizar trabalho — é pra ENRIQUECER análise e reduzir viés." },
      { id: "q3", pergunta: "Se sua HIPÓTESE for REFUTADA pelos dados, o que fazer?", fotoUrl: posterImg,
        cards: [
          { id: "a", emoji: "📝", titulo: "Publicar mesmo assim — refutar é resultado válido", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🗑️", titulo: "Jogar fora e recomeçar do zero", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🎭", titulo: "Manipular dados pra confirmar", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Perfeito. Refutar hipótese é RESULTADO CIENTÍFICO — evita que outros percam tempo com ela.",
        feedbackErro: "Manipular dados é FRAUDE. Refutar hipótese é resultado válido e útil pra ciência." },
    ],
    falaFinal: "Projeto científico é sobre INTEGRIDADE. Comunicar sempre o que os dados mostram — mesmo contrariando a intuição.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Todo projeto científico tem duas grandes zonas: BANCADA (planejamento + coleta + análise) e PALCO (comunicação + defesa).",
    instrucao: "Toque nos interruptores",
    mapaUrl: feiraImg,
    camadas: [
      { id: "bancada", rotulo: "Bancada", emoji: "🔬", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 50, h: 96 }, descricao: "Planejamento, experimentação, coleta e análise. Onde o conhecimento é CONSTRUÍDO.", fotoUrl: equipeImg },
      { id: "palco", rotulo: "Palco", emoji: "🎤", cor: "from-amber-500 to-orange-700", rect: { x: 52, y: 2, w: 46, h: 96 }, descricao: "Apresentação, pôster, defesa oral. Onde o conhecimento é COMUNICADO ao mundo.", fotoUrl: posterImg },
    ],
    falaFinal: "Bancada sem palco = pesquisa invisível. Palco sem bancada = show vazio. Precisa dos dois.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as fases oficiais de um projeto científico integrador.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Qual a sequência de um projeto?",
    paradas: [
      { id: "problema", emoji: "❓", rotulo: "1. Problema", descricao: "Definir pergunta específica de pesquisa.", fotoUrl: equipeImg },
      { id: "hipotese", emoji: "💭", rotulo: "2. Hipótese", descricao: "Formular resposta provisória testável.", fotoUrl: equipeImg },
      { id: "metodo", emoji: "🧪", rotulo: "3. Método", descricao: "Planejar como coletar dados com rigor.", fotoUrl: equipeImg },
      { id: "coleta", emoji: "📏", rotulo: "4. Coleta", descricao: "Executar em campo/laboratório.", fotoUrl: posterImg },
      { id: "analise", emoji: "📊", rotulo: "5. Análise", descricao: "Gráficos + comparações + conclusão.", fotoUrl: posterImg },
      { id: "comunicacao", emoji: "🎤", rotulo: "6. Comunicação", descricao: "Apresentar resultados publicamente.", fotoUrl: feiraImg },
    ],
    ordemCerta: ["problema", "hipotese", "metodo", "coleta", "analise", "comunicacao"],
    feedbackAcerto: "Exato. Sequência oficial adotada por cientistas do mundo inteiro.",
    feedbackErro: "Problema → hipótese → método → coleta → análise → comunicação. Nenhuma etapa pode pular a anterior.",
    falaFinal: "Essa sequência funciona da feira escolar ao artigo publicado em revista internacional.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório final do Programa 7.",
    tituloLivro: "📓 Relatório Final · Projeto Integrador",
    subtitulo: "Qualidade da água do córrego local — investigação multidisciplinar",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: 'O córrego atrás da escola está poluído por esgoto?' HIPÓTESE: o pH e o odor indicariam contaminação orgânica. MÉTODO: coleta em 3 pontos ao longo de 500m, análise com fita indicadora de pH, teste de odor com escala de 1-5 e observação visual.", chaves: ["hipótese", "método"], definicoes: { hipótese: "Resposta provisória testável.", método: "Passo a passo para responder ao problema." }, fotoUrl: equipeImg },
      { id: "p2", texto: "RESULTADO: pH médio = 5,8 (fora do padrão 6,5-8,5). Odor forte no ponto 2 (próximo a esgoto). Coloração escura em todos os pontos. Presença de espuma no ponto 3. Todos os indicadores APONTARAM contaminação.", chaves: ["pH", "padrão"], definicoes: { pH: "Escala que mede acidez (0-14).", padrão: "Valor considerado seguro por autoridades sanitárias." }, fotoUrl: posterImg },
      { id: "p3", texto: "CONCLUSÃO: os dados CONFIRMARAM a hipótese. O córrego apresenta EVIDÊNCIAS claras de poluição orgânica. Recomendação: comunicar a Prefeitura + Vigilância Sanitária. Projeto integra conhecimentos de química (pH), biologia (contaminação) e cidadania.", chaves: ["evidências", "cidadania"], definicoes: { evidências: "Dados que sustentam a conclusão.", cidadania: "Uso do conhecimento científico para ação social." }, fotoUrl: feiraImg },
    ],
    falaFinal: "Este é um projeto REAL — pode ser reproduzido em qualquer escola. Ciência que vira ação.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Identifique a ETAPA do projeto.",
    instrucao: "⏱️ Escolha a etapa correta",
    duracaoSegundos: 25,
    pecas: [
      { id: "problema", emoji: "❓", rotulo: "Problema" },
      { id: "hipotese", emoji: "💭", rotulo: "Hipótese" },
      { id: "coleta", emoji: "📏", rotulo: "Coleta" },
      { id: "analise", emoji: "📊", rotulo: "Análise" },
      { id: "comunicacao", emoji: "🎤", rotulo: "Comunicação" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Fita de pH no rio", emoji: "🧪", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Medindo em campo", emoji: "📏", cor: "from-emerald-500 to-teal-700" }, contexto: "A equipe está no córrego mergulhando fita de pH e anotando valores no caderno.", pecaCertaId: "coleta", fotoUrl: equipeImg, feedbackAcerto: "COLETA — registrando dados em campo.", feedbackErro: "Medir + registrar em campo = COLETA." },
      { id: "r2", municipioA: { nome: "Gráfico de barras", emoji: "📊", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Comparação com padrão", emoji: "📈", cor: "from-orange-500 to-red-700" }, contexto: "De volta ao laboratório, a equipe transforma os dados em gráficos e compara com padrões da OMS.", pecaCertaId: "analise", fotoUrl: posterImg, feedbackAcerto: "ANÁLISE — dados viram gráfico + comparação.", feedbackErro: "Transformar dado em gráfico = ANÁLISE." },
      { id: "r3", municipioA: { nome: "Pôster + apresentação", emoji: "🎤", cor: "from-rose-500 to-pink-700" }, municipioB: { nome: "Feira de ciências", emoji: "🎪", cor: "from-purple-500 to-pink-700" }, contexto: "Dia da feira: pôster montado, equipe apresenta para visitantes e responde perguntas.", pecaCertaId: "comunicacao", fotoUrl: feiraImg, feedbackAcerto: "COMUNICAÇÃO — apresentar para público.", feedbackErro: "Pôster + apresentação = COMUNICAÇÃO." },
    ],
    falaFinal: "Você já domina o ciclo completo de um projeto científico.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Todo projeto integrador tem duas grandes fases: PESQUISA (bancada, dados, análise) e ENTREGA (pôster, apresentação, defesa).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: feiraImg,
    fatias: [
      { id: "pesq", rotulo: "Pesquisa", emoji: "🔬", percentual: 70, cor: "#10b981", descricao: "70% do tempo do projeto: formular, planejar, coletar, medir, analisar. A parte SILENCIOSA da ciência.", exemplos: ["Definir problema", "Coletar dados", "Fazer gráficos"], fotoUrl: equipeImg },
      { id: "ent", rotulo: "Entrega", emoji: "🎤", percentual: 30, cor: "#f59e0b", descricao: "30% do tempo: preparar pôster, ensaiar apresentação, defender resultados. A parte VISÍVEL.", exemplos: ["Pôster", "Apresentação oral", "Defesa"], fotoUrl: posterImg },
    ],
    falaFinal: "70/30 é a proporção real. Muita gente inverte — e o projeto fica bonito por fora, oco por dentro.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão. 3 perguntas e sua Certificação de Cientista Formado é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: feiraImg,
    perguntas: [
      { id: "q1", pergunta: "Qual a PRIMEIRA etapa de um projeto científico?", fotoUrl: equipeImg,
        opcoes: [
          { id: "a", texto: "Definir problema e hipótese testável", correta: true },
          { id: "b", texto: "Fazer o pôster bonito" },
        ],
        feedbackAcerto: "Correto. Sem problema definido, não há projeto — só atividade.",
        feedbackErro: "Pôster é a última etapa (comunicação). PROBLEMA sempre vem primeiro." },
      { id: "q2", pergunta: "Se os dados REFUTAREM sua hipótese, o que você faz?", fotoUrl: posterImg,
        opcoes: [
          { id: "a", texto: "Publica assim mesmo — refutar é resultado válido", correta: true },
          { id: "b", texto: "Ajusta os dados para confirmar a hipótese" },
        ],
        feedbackAcerto: "Sim. Refutar hipótese é ciência funcionando — não fracasso.",
        feedbackErro: "Ajustar dados é FRAUDE científica. Refutar é resultado válido e útil." },
      { id: "q3", pergunta: "Por que projetos científicos costumam ser feitos em EQUIPE?", fotoUrl: equipeImg,
        opcoes: [
          { id: "a", texto: "Diferentes olhares detectam erros e enriquecem a análise", correta: true },
          { id: "b", texto: "Só pra dividir menos trabalho por pessoa" },
        ],
        feedbackAcerto: "Exato. Revisão por pares é o mecanismo mais forte da ciência moderna.",
        feedbackErro: "Não é sobre trabalho — é sobre REDUZIR ERRO e enriquecer análise." },
    ],
    selo: { nome: "Certificação de Cientista Formado", subtitulo: "Academia Científica · 7 Programas Concluídos", emoji: "🎓", cor: "from-purple-500 to-indigo-700" },
    falaFinal: "Formatura oficial. Você completou os 7 programas da Academia Científica. Agora é cientista com método próprio.",
  },
};
