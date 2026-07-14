import type { AulaGeoV1 } from "../../types";
import forcasImg from "@/assets/ciencias-8ano/u3/forcas-diagrama.jpg";
import maquinasImg from "@/assets/ciencias-8ano/u3/maquinas-simples.jpg";

/**
 * Ciências · 8º Ano · U3 · A01 — "Laboratório de Física"
 * Força, trabalho, máquinas simples e pressão.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-laboratorio-fisica",
  titulo: "Laboratório de Física",
  iconeTrilha: "⚙️",
  recompensa: { xp: 140, moedas: 55, medalha: "Físico Júnior" },
  bncc: ["EF08CI01", "EF08CI02"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada de física com plano inclinado. Toque para iniciar.",
    mapaUrl: forcasImg,
    imagemDestaqueUrl: maquinasImg,
    aurora:
      "Setor 3: Laboratório de Física. Missão: entender por que uma criança consegue levantar um adulto usando uma gangorra — a mágica das MÁQUINAS SIMPLES.",
    falaFinal:
      "Física é o estudo do que faz as coisas se moverem, pararem e mudarem.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Problema: você precisa subir uma caixa pesada num caminhão. Puxar por uma RAMPA ou LEVANTAR direto — qual exige MENOS força?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: forcasImg,
    opcoes: [
      { id: "rampa", titulo: "Rampa exige menos força", subtitulo: "mas percorre mais distância", emoji: "📐", cor: "from-emerald-500 to-teal-700", fotoUrl: forcasImg },
      { id: "levantar", titulo: "Levantar direto é melhor", subtitulo: "menos distância = menos esforço", emoji: "💪", cor: "from-red-500 to-rose-700", fotoUrl: forcasImg },
      { id: "igual", titulo: "Dá exatamente igual", subtitulo: "a caixa é a mesma", emoji: "🟰", cor: "from-slate-500 to-slate-700", fotoUrl: forcasImg },
    ],
    respostaCerta: "rampa",
    feedbackAcerto:
      "Correto. Rampa DIVIDE o trabalho em mais distância — força necessária cai. É um plano inclinado, uma das 6 máquinas simples.",
    feedbackErro:
      "Levantar direto exige força IGUAL ao peso. Rampa reduz a força — em troca, você percorre mais distância. Trabalho total é parecido.",
    falaFinal:
      "Máquinas simples não criam energia — REDISTRIBUEM força e distância.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da mecânica.",
    instrucao: "Vocabulário da física do cotidiano",
    cadernos: [
      { id: "forca", capa: "FORÇA", emoji: "💪", cor: "from-red-500 to-rose-700", conteudo: "Interação capaz de mudar o movimento ou deformar um corpo. Medida em NEWTONS (N). F = m · a.", exemplo: "Ex.: empurrar uma porta, gravidade puxando você.", fotoUrl: forcasImg },
      { id: "trabalho", capa: "TRABALHO", emoji: "⚙️", cor: "from-amber-500 to-orange-700", conteudo: "Energia transferida quando uma força DESLOCA um corpo. T = F · d. Medido em JOULES (J).", exemplo: "Ex.: erguer uma mochila de 10 N por 1 m = 10 J.", fotoUrl: maquinasImg },
      { id: "maquina", capa: "MÁQUINA SIMPLES", emoji: "🔧", cor: "from-sky-500 to-cyan-700", conteudo: "Dispositivo que MULTIPLICA força OU muda direção do esforço. Seis tipos: alavanca, roldana, plano inclinado, cunha, parafuso, roda-eixo.", exemplo: "Ex.: gangorra (alavanca), tesoura, rampa.", fotoUrl: maquinasImg },
      { id: "pressao", capa: "PRESSÃO", emoji: "📏", cor: "from-indigo-500 to-purple-700", conteudo: "Força aplicada por unidade de ÁREA. P = F / A. Medida em Pascal (Pa). Área menor = pressão maior.", exemplo: "Ex.: faca afiada corta; faca cega não.", fotoUrl: forcasImg },
      { id: "energia", capa: "ENERGIA", emoji: "⚡", cor: "from-emerald-500 to-teal-700", conteudo: "Capacidade de realizar trabalho. Conserva-se: só muda de forma (potencial → cinética → térmica…).", exemplo: "Ex.: água em cachoeira → turbina → eletricidade.", fotoUrl: maquinasImg },
    ],
    falaFinal:
      "Força, trabalho, máquina simples, pressão, energia. Vocabulário da mecânica.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Máquinas simples na bancada. Toque em cada uma.",
    instrucao: "Toque nas máquinas",
    mapaUrl: maquinasImg,
    pontos: [
      { id: "alavanca", x: 20, y: 40, emoji: "⚖️", cor: "from-amber-500 to-orange-700", titulo: "Alavanca", texto: "Barra que gira em um ponto de apoio. Multiplica força quando o braço da força é MAIOR que o braço da resistência.", fotoUrl: maquinasImg },
      { id: "roldana", x: 15, y: 78, emoji: "🎡", cor: "from-sky-500 to-cyan-700", titulo: "Roldana (polia)", texto: "Roda com sulco onde passa uma corda. Muda a direção da força. Sistemas de várias polias multiplicam força.", fotoUrl: maquinasImg },
      { id: "plano", x: 60, y: 50, emoji: "📐", cor: "from-emerald-500 to-teal-700", titulo: "Plano inclinado", texto: "Rampa. Reduz a força necessária para elevar um corpo — em troca de distância maior.", fotoUrl: forcasImg },
      { id: "parafuso", x: 80, y: 80, emoji: "🔩", cor: "from-red-500 to-rose-700", titulo: "Parafuso", texto: "Plano inclinado enrolado em cilindro. Transforma rotação em avanço linear com muita força.", fotoUrl: maquinasImg },
    ],
    falaFinal:
      "Todas essas máquinas obedecem à mesma regra: força × distância se conserva.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual a UNIDADE de força no SI?", fotoUrl: forcasImg,
        cards: [
          { id: "a", emoji: "⚖️", titulo: "Newton (N)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "⚡", titulo: "Joule (J)", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "⏱️", titulo: "Segundo (s)", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Newton = kg·m/s². Joule é energia; segundo é tempo.",
        feedbackErro: "Joule = energia. Segundo = tempo. Força = NEWTON." },
      { id: "q2", pergunta: "Como uma FACA AFIADA corta melhor que uma cega?", fotoUrl: forcasImg,
        cards: [
          { id: "a", emoji: "📏", titulo: "Área menor → pressão maior", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💪", titulo: "É mais pesada", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔥", titulo: "Fica mais quente", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Mesma força, área bem menor → pressão muito maior.",
        feedbackErro: "P = F/A. Área menor → pressão maior. Por isso agulha e faca cortam." },
      { id: "q3", pergunta: "Uma GANGORRA é uma máquina simples do tipo...", fotoUrl: maquinasImg,
        cards: [
          { id: "a", emoji: "⚖️", titulo: "Alavanca", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎡", titulo: "Roldana", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔩", titulo: "Parafuso", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Barra rígida com ponto de apoio central = alavanca.",
        feedbackErro: "Gangorra tem BARRA e PONTO DE APOIO — é ALAVANCA." },
    ],
    falaFinal:
      "Força em Newton, pressão = F/A, gangorra = alavanca. Prontos para o desafio.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Máquinas simples se dividem em duas grandes famílias. Toque nos interruptores.",
    instrucao: "Toque nos interruptores",
    mapaUrl: maquinasImg,
    camadas: [
      { id: "alav", rotulo: "Família da Alavanca", emoji: "⚖️", cor: "from-amber-500 to-orange-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Alavanca, roldana e roda-eixo. Trabalham com ROTAÇÃO em torno de um ponto ou eixo.", fotoUrl: maquinasImg },
      { id: "plano", rotulo: "Família do Plano Inclinado", emoji: "📐", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Plano inclinado, cunha e parafuso. Trabalham espalhando o esforço por uma DISTÂNCIA MAIOR.", fotoUrl: forcasImg },
    ],
    falaFinal:
      "Duas famílias, seis máquinas. Toda tecnologia complexa combina essas peças básicas.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as etapas para calcular o TRABALHO de erguer uma caixa.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Passo a passo:",
    paradas: [
      { id: "identificar", emoji: "🔍", rotulo: "1. Identificar a força", descricao: "Ex.: peso da caixa = 50 N.", fotoUrl: forcasImg },
      { id: "distancia", emoji: "📏", rotulo: "2. Medir o deslocamento", descricao: "Ex.: 2 m para cima.", fotoUrl: forcasImg },
      { id: "formula", emoji: "🧮", rotulo: "3. Aplicar T = F · d", descricao: "Multiplique força por distância.", fotoUrl: maquinasImg },
      { id: "calcular", emoji: "🎯", rotulo: "4. Calcular", descricao: "50 · 2 = 100.", fotoUrl: maquinasImg },
      { id: "unidade", emoji: "🏷️", rotulo: "5. Colocar unidade", descricao: "Resultado: 100 J (joules).", fotoUrl: maquinasImg },
    ],
    ordemCerta: ["identificar", "distancia", "formula", "calcular", "unidade"],
    feedbackAcerto:
      "Perfeito. Toda conta de física segue essa ordem: identificar → medir → fórmula → calcular → unidade.",
    feedbackErro:
      "Sem unidade no final, a resposta não é física — é só um número solto. Sempre inclua J, N, m, s…",
    falaFinal:
      "Boa disciplina de laboratório vale para toda a ciência.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Estudo experimental na bancada.",
    tituloLivro: "📓 Relatório · Plano Inclinado e Ganho Mecânico",
    subtitulo: "Por que rampa exige menos força que erguer direto",
    paragrafos: [
      { id: "p1", texto: "OBJETIVO: comparar a FORÇA necessária para elevar uma caixa de 100 N a 1 m de altura de duas maneiras: (A) puxando direto para cima; (B) empurrando por uma rampa de 2 m de comprimento.", chaves: ["força"], definicoes: { força: "Interação que muda o movimento; medida em Newtons." }, fotoUrl: forcasImg },
      { id: "p2", texto: "RESULTADO: em (A) precisamos aplicar 100 N na vertical. Em (B), na rampa, a força necessária cai para cerca de 50 N — MAS a caixa precisa percorrer 2 m em vez de 1 m. Trabalho total: 100 J nos dois casos.", chaves: ["trabalho"], definicoes: { trabalho: "T = F · d, em joules." }, fotoUrl: maquinasImg },
      { id: "p3", texto: "CONCLUSÃO: a máquina simples NÃO cria energia. Ela troca menos força por mais distância. Esse é o PRINCÍPIO GERAL de toda mecânica: energia se conserva. Rampas, alavancas e polias ajudam humanos a mover cargas grandes com músculos limitados.", chaves: ["princípio geral"], definicoes: { "princípio geral": "Conservação de energia — regra universal da física." }, fotoUrl: maquinasImg },
    ],
    falaFinal:
      "Máquina simples é economia inteligente, não mágica.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio: qual máquina simples está em cada ferramenta?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "alavanca", emoji: "⚖️", rotulo: "Alavanca" },
      { id: "plano", emoji: "📐", rotulo: "Plano inclinado" },
      { id: "roldana", emoji: "🎡", rotulo: "Roldana" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Rampa de skate", emoji: "🛹", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Sobe até altura", emoji: "⬆️", cor: "from-sky-500 to-cyan-700" }, contexto: "Superfície inclinada.", pecaCertaId: "plano", fotoUrl: forcasImg, feedbackAcerto: "Correto. Plano inclinado clássico.", feedbackErro: "Rampa = plano inclinado." },
      { id: "r2", municipioA: { nome: "Gangorra", emoji: "⚖️", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Ponto de apoio central", emoji: "🔺", cor: "from-red-500 to-rose-700" }, contexto: "Barra rígida girando em ponto de apoio.", pecaCertaId: "alavanca", fotoUrl: maquinasImg, feedbackAcerto: "Sim. Barra + apoio = alavanca.", feedbackErro: "Barra que gira em ponto de apoio = ALAVANCA." },
      { id: "r3", municipioA: { nome: "Guindaste levantando peso", emoji: "🏗️", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Roda com cabo", emoji: "🎡", cor: "from-indigo-500 to-purple-700" }, contexto: "Cabo passa por roda no alto.", pecaCertaId: "roldana", fotoUrl: maquinasImg, feedbackAcerto: "Correto. Roldana muda direção da força.", feedbackErro: "Roda com sulco onde passa cabo = ROLDANA." },
      { id: "r4", municipioA: { nome: "Tesoura", emoji: "✂️", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Duas lâminas + parafuso central", emoji: "⚖️", cor: "from-amber-500 to-orange-700" }, contexto: "Duas alavancas unidas.", pecaCertaId: "alavanca", fotoUrl: maquinasImg, feedbackAcerto: "Correto. Tesoura = dupla alavanca.", feedbackErro: "Tesoura = 2 ALAVANCAS unidas pelo parafuso." },
    ],
    falaFinal:
      "Você já lê a física escondida em objetos do dia a dia.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "A física do cotidiano se divide em duas grandes ideias: FORÇA (o que muda movimento) e ENERGIA (o que faz o trabalho).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: maquinasImg,
    fatias: [
      { id: "forca", rotulo: "Força & Pressão", emoji: "💪", percentual: 50, cor: "#ef4444", descricao: "Como o esforço se aplica: F = m·a, P = F/A. Máquinas simples multiplicam ou redirecionam força.", exemplos: ["Alavanca", "Faca (pressão)", "Peso"], fotoUrl: forcasImg },
      { id: "energia", rotulo: "Trabalho & Energia", emoji: "⚡", percentual: 50, cor: "#f59e0b", descricao: "Como a energia se transfere: T = F·d. Energia se conserva — só muda de forma.", exemplos: ["Elevar uma caixa", "Cachoeira → hidrelétrica"], fotoUrl: maquinasImg },
    ],
    falaFinal:
      "Força e energia são as duas metades da mecânica. Fim do Setor 3.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Setor 3. Responda 3 perguntas para sua Certificação de Físico Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: maquinasImg,
    perguntas: [
      { id: "q1", pergunta: "Qual a fórmula do TRABALHO em física?", fotoUrl: forcasImg,
        opcoes: [
          { id: "a", texto: "T = F · d (força vezes deslocamento)", correta: true },
          { id: "b", texto: "T = m · v (massa vezes velocidade)" },
        ],
        feedbackAcerto: "Sim. Trabalho em joules = força (N) × distância (m).",
        feedbackErro: "m · v é quantidade de movimento. TRABALHO = F · d." },
      { id: "q2", pergunta: "Por que uma AGULHA fura a pele com pouca força?", fotoUrl: forcasImg,
        opcoes: [
          { id: "a", texto: "Porque a área da ponta é minúscula → pressão gigante", correta: true },
          { id: "b", texto: "Porque a agulha é magnética" },
        ],
        feedbackAcerto: "Correto. P = F/A. Área quase zero → pressão altíssima.",
        feedbackErro: "Não é magnetismo. É PRESSÃO — área minúscula concentra a força." },
      { id: "q3", pergunta: "Máquinas simples CRIAM energia?", fotoUrl: maquinasImg,
        opcoes: [
          { id: "a", texto: "Não. Elas apenas trocam menos força por mais distância", correta: true },
          { id: "b", texto: "Sim, fabricam energia do nada" },
        ],
        feedbackAcerto: "Perfeito. Energia se CONSERVA — máquina só redistribui.",
        feedbackErro: "Energia NUNCA é criada. Só muda de forma ou se redistribui. Máquina simples ajuda humanos a aplicar força." },
    ],
    selo: { nome: "Certificação · Físico Júnior", subtitulo: "Setor 3 · Física do Cotidiano", emoji: "⚙️", cor: "from-amber-500 to-orange-700" },
    falaFinal:
      "Setor 3 CONCLUÍDO. Próximo: Laboratório de Química.",
  },
};
