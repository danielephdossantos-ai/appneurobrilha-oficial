import type { AulaGeoV1 } from "../../types";
import diarioImg from "@/assets/ciencias-4ano/u1-a1/diario-campo.jpg";
import microscopioImg from "@/assets/ciencias-4ano/u1-a1/microscopio-real.jpg";
import lupaImg from "@/assets/ciencias-4ano/u1-a1/lupa-campo.jpg";
import graficoImg from "@/assets/ciencias-4ano/u1-a1/grafico-plantas.jpg";
import mesaImg from "@/assets/ciencias-4ano/u1-a1/mesa-pesquisa.jpg";
import brilhaImg from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png";
import termometroImg from "@/assets/ciencias-4ano/u1-a1/termometro-real.jpg";
import reguaImg from "@/assets/ciencias-4ano/u1-a1/regua-real.jpg";
import tubosImg from "@/assets/ciencias-4ano/u1-a1/tubos-real.jpg";

/**
 * Ciências · 4º Ano · Unidade 1 · Aula 01
 * "Diário de Campo Científico" — método científico aplicado.
 *
 * Tom: Equipe de Pesquisa Científica. Aurora é orientadora, Brilha é
 * pesquisador júnior, o aluno faz parte da equipe. Sem fantasia — foco
 * em observação sistemática, dados, hipóteses testáveis e conclusão.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-diario-de-campo",
  titulo: "Diário de Campo Científico",
  iconeTrilha: "📓",
  bncc: ["EF04CI01"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a lupa pelo diário de campo. Encontre os elementos que todo cientista registra numa investigação.",
    mapaUrl: diarioImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Bem-vindo à Equipe de Pesquisa Escola Brilha. Sou a Aurora, orientadora da equipe. Este é o Brilha, nosso pesquisador júnior — e agora você também faz parte do time. Antes de qualquer descoberta, um cientista precisa de UM instrumento essencial: o diário de campo.",
    falaFinal:
      "No diário registramos observações, dados numéricos e desenhos. É a memória externa da equipe — sem ele, nenhuma descoberta pode ser verificada por outro cientista.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Toda investigação começa com uma HIPÓTESE — uma previsão baseada no que já sabemos. Não é chute: é raciocínio.",
    pergunta:
      "A equipe vai testar o crescimento de plantas em 3 condições de luz por 30 dias. Qual sua hipótese?",
    fotoUrl: graficoImg,
    opcoes: [
      {
        id: "sol",
        titulo: "SOL direto",
        subtitulo: "cresce mais alto",
        emoji: "☀️",
        cor: "from-amber-400 to-orange-600",
      },
      {
        id: "sombra",
        titulo: "SOMBRA",
        subtitulo: "cresce moderado",
        emoji: "🌤️",
        cor: "from-teal-400 to-emerald-600",
      },
      {
        id: "escuro",
        titulo: "ESCURO total",
        subtitulo: "quase não cresce",
        emoji: "🌑",
        cor: "from-slate-600 to-slate-900",
      },
    ],
    respostaCerta: "sol",
    feedbackAcerto:
      "HIPÓTESE CONFIRMADA pelos dados: 28 cm no sol, 14 cm na sombra, apenas 4 cm no escuro. Sua previsão bateu com o experimento.",
    feedbackErro:
      "Reveja o gráfico. A planta com mais LUZ (sol direto) atingiu 28 cm — o dobro da sombra e 7× mais que no escuro.",
    falaFinal:
      "Hipótese não precisa acertar. Precisa ser TESTÁVEL. Se os dados contradizem, a equipe revisa a hipótese — não os dados.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco termos técnicos que a equipe usa em toda investigação. Estuda cada um antes da próxima saída de campo.",
    instrucao: "Vocabulário técnico da pesquisa científica",
    cadernos: [
      {
        id: "observacao",
        capa: "OBSERVAÇÃO",
        emoji: "👁️",
        cor: "from-teal-500 to-emerald-700",
        conteudo:
          "Coleta sistemática de dados usando os sentidos e instrumentos (lupa, microscópio, termômetro).",
        exemplo: "Ex.: contar quantas formigas passam por uma folha em 5 minutos.",
        fotoUrl: lupaImg,
      },
      {
        id: "hipotese",
        capa: "HIPÓTESE",
        emoji: "💡",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "Previsão baseada em observações anteriores. Precisa poder ser testada e refutada.",
        exemplo: "Ex.: 'Plantas com mais luz crescem mais alto em 30 dias'.",
        fotoUrl: graficoImg,
      },
      {
        id: "experimento",
        capa: "EXPERIMENTO",
        emoji: "🧪",
        cor: "from-cyan-500 to-sky-700",
        conteudo:
          "Teste controlado — muda apenas UMA variável por vez e compara com um grupo controle.",
        exemplo: "Ex.: 3 vasos idênticos, mesma água, só muda a LUZ.",
        fotoUrl: mesaImg,
      },
      {
        id: "dados",
        capa: "DADOS",
        emoji: "📊",
        cor: "from-fuchsia-500 to-purple-700",
        conteudo:
          "Medições numéricas registradas no diário: altura, tempo, temperatura, quantidade.",
        exemplo: "Ex.: dia 15 — planta sol: 14 cm · planta escuro: 2 cm.",
        fotoUrl: diarioImg,
      },
      {
        id: "conclusao",
        capa: "CONCLUSÃO",
        emoji: "✅",
        cor: "from-emerald-500 to-green-800",
        conteudo:
          "Interpretação dos dados. Confirma ou refuta a hipótese e sugere próximas investigações.",
        exemplo: "Ex.: 'Luz é fator determinante no crescimento vegetal'.",
        fotoUrl: microscopioImg,
      },
    ],
    falaFinal:
      "Observação, hipótese, experimento, dados e conclusão. Esse é o vocabulário mínimo pra qualquer pesquisa científica séria.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Esta é a mesa de campo da equipe. Toca em cada instrumento pra saber a função científica dele.",
    instrucao: "Toque em cada instrumento",
    mapaUrl: mesaImg,
    pontos: [
      {
        id: "diario",
        x: 18, y: 55,
        emoji: "📓",
        cor: "from-teal-500 to-emerald-700",
        titulo: "Diário de campo",
        texto: "Registra observações, medições e desenhos com data. É a prova documental da pesquisa.",
        fotoUrl: diarioImg,
      },
      {
        id: "termometro",
        x: 45, y: 75,
        emoji: "🌡️",
        cor: "from-red-500 to-rose-700",
        titulo: "Termômetro",
        texto: "Mede temperatura em graus Celsius (°C). Fator ambiental que influencia seres vivos.",
        fotoUrl: termometroImg,
      },
      {
        id: "regua",
        x: 55, y: 70,
        emoji: "📏",
        cor: "from-slate-500 to-slate-700",
        titulo: "Régua",
        texto: "Mede comprimento em centímetros (cm). Padroniza os dados de crescimento.",
        fotoUrl: reguaImg,
      },
      {
        id: "lupa",
        x: 68, y: 55,
        emoji: "🔍",
        cor: "from-amber-500 to-orange-700",
        titulo: "Lupa",
        texto: "Amplia detalhes invisíveis a olho nu — nervuras, insetos, texturas.",
        fotoUrl: lupaImg,
      },
      {
        id: "tubos",
        x: 85, y: 55,
        emoji: "🧪",
        cor: "from-cyan-500 to-sky-700",
        titulo: "Tubos de amostra",
        texto: "Coletam e preservam material biológico do campo pra análise no laboratório.",
        fotoUrl: tubosImg,
      },
    ],
    falaFinal:
      "Cada instrumento gera um tipo de dado. Um cientista escolhe a ferramenta certa pra cada pergunta de pesquisa.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Checkpoint técnico. 3 perguntas — toca no card certo.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual é a diferença entre HIPÓTESE e CONCLUSÃO?",
        fotoUrl: graficoImg,
        cards: [
          { id: "a", emoji: "🎲", titulo: "São a mesma coisa", cor: "from-slate-500 to-slate-700" },
          { id: "b", emoji: "🔄", titulo: "Hipótese vem antes, conclusão depois dos dados", cor: "from-teal-500 to-emerald-700" },
          { id: "c", emoji: "❓", titulo: "Só cientistas famosos usam hipótese", cor: "from-red-500 to-rose-700" },
        ],
        correta: "b",
        feedbackAcerto: "Exato. HIPÓTESE é previsão ANTES do experimento; CONCLUSÃO é a análise DEPOIS dos dados.",
        feedbackErro: "Hipótese e conclusão são passos diferentes. Hipótese = previsão; conclusão = análise dos dados.",
      },
      {
        id: "q2",
        pergunta: "Num experimento, o que é um GRUPO CONTROLE?",
        fotoUrl: mesaImg,
        cards: [
          { id: "a", emoji: "🔬", titulo: "Grupo sem a variável testada, pra comparar", cor: "from-cyan-500 to-sky-700" },
          { id: "b", emoji: "👨‍🔬", titulo: "O cientista que controla o experimento", cor: "from-slate-500 to-slate-700" },
          { id: "c", emoji: "📋", titulo: "A lista de materiais", cor: "from-orange-500 to-red-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso. O grupo controle NÃO recebe a variável testada. Serve como referência de comparação.",
        feedbackErro: "Grupo controle é o grupo de comparação — sem a variável testada. Ex.: planta na sombra normal, sem alterar nada.",
      },
      {
        id: "q3",
        pergunta: "Se o resultado do experimento REFUTA sua hipótese, o que fazer?",
        fotoUrl: diarioImg,
        cards: [
          { id: "a", emoji: "✏️", titulo: "Mudar os dados pra bater com a hipótese", cor: "from-red-500 to-rose-700" },
          { id: "b", emoji: "📝", titulo: "Registrar honestamente e formular nova hipótese", cor: "from-emerald-500 to-green-700" },
          { id: "c", emoji: "🚮", titulo: "Descartar todo o experimento", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "b",
        feedbackAcerto: "Ciência real. Refutar uma hipótese é uma DESCOBERTA — leva à próxima pesquisa.",
        feedbackErro: "JAMAIS altere dados. Uma hipótese refutada é resultado válido — abre caminho pra nova investigação.",
      },
    ],
    falaFinal:
      "Você já domina os conceitos-chave. Agora é hora de aplicar em campo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Esta mesa tem duas zonas de trabalho. Uma pra COLETA (instrumentos de campo) e outra pra REGISTRO (diário e amostras). Liga cada camada.",
    instrucao: "Toque nos interruptores",
    mapaUrl: mesaImg,
    camadas: [
      {
        id: "registro",
        rotulo: "Zona de Registro",
        emoji: "📓",
        cor: "from-teal-500 to-emerald-700",
        rect: { x: 2, y: 30, w: 42, h: 65 },
        descricao:
          "Diário de campo aberto — anotações, desenhos e tabelas de dados. Documentação da investigação.",
        fotoUrl: diarioImg,
      },
      {
        id: "coleta",
        rotulo: "Zona de Coleta",
        emoji: "🔬",
        cor: "from-cyan-500 to-sky-700",
        rect: { x: 45, y: 30, w: 53, h: 65 },
        descricao:
          "Termômetro, régua, lupa e tubos de amostra. Instrumentos que geram os DADOS que vão pro diário.",
        fotoUrl: lupaImg,
      },
    ],
    falaFinal:
      "Coleta gera dados. Registro documenta. Sem uma das duas, não existe pesquisa científica reproduzível.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Monte a rota da investigação científica na ordem correta.",
    instrucao: "Toque nas paradas na ORDEM correta",
    pergunta: "Qual é a sequência do método científico?",
    paradas: [
      {
        id: "observar",
        emoji: "👁️",
        rotulo: "1. Observação",
        descricao: "Sair a campo, notar padrões e fazer perguntas de pesquisa.",
        fotoUrl: lupaImg,
      },
      {
        id: "hipotese",
        emoji: "💡",
        rotulo: "2. Hipótese",
        descricao: "Formular uma previsão testável baseada nas observações.",
        fotoUrl: graficoImg,
      },
      {
        id: "experimento",
        emoji: "🧪",
        rotulo: "3. Experimento",
        descricao: "Desenhar teste controlado, definir variáveis e grupo controle.",
        fotoUrl: mesaImg,
      },
      {
        id: "dados",
        emoji: "📊",
        rotulo: "4. Coleta de dados",
        descricao: "Medir, contar, registrar tudo no diário de campo com datas.",
        fotoUrl: diarioImg,
      },
      {
        id: "conclusao",
        emoji: "✅",
        rotulo: "5. Conclusão",
        descricao: "Analisar dados, confirmar ou refutar hipótese e comunicar.",
        fotoUrl: microscopioImg,
      },
    ],
    ordemCerta: ["observar", "hipotese", "experimento", "dados", "conclusao"],
    feedbackAcerto:
      "Rota completa. Toda pesquisa científica segue essa espinha dorsal — do NASA ao instituto de biologia da esquina.",
    feedbackErro:
      "Repense a ordem. Você precisa OBSERVAR antes de ter algo pra prever, e ter DADOS antes de concluir.",
    falaFinal:
      "Método científico não é fórmula mágica — é um jeito honesto e verificável de aprender sobre o mundo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua leitura autônoma. Fico em silêncio. Estuda o relatório da equipe.",
    tituloLivro: "📓 Relatório da Equipe · Semana 1",
    subtitulo: "Investigação: influência da luz no crescimento vegetal",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Nossa OBSERVAÇÃO inicial foi que plantas em ambientes escuros aparentam ser mais fracas. Formulamos a HIPÓTESE de que a luz solar é o principal fator no crescimento, e desenhamos um EXPERIMENTO com 3 grupos: sol direto, sombra e escuro total. Todos com a mesma quantidade de água e mesmo tipo de solo.",
        chaves: ["observação", "hipótese", "experimento", "variável"],
        definicoes: {
          observação: "Coleta sistemática de dados usando sentidos e instrumentos.",
          hipótese: "Previsão testável baseada em observações anteriores.",
          experimento: "Teste controlado que altera apenas uma variável.",
          variável: "Fator que pode mudar entre os grupos do experimento.",
        },
        fotoUrl: mesaImg,
      },
      {
        id: "p2",
        texto:
          "Após 30 dias medindo com régua e registrando no DIÁRIO DE CAMPO, obtivemos os seguintes DADOS: grupo sol atingiu 28 cm, grupo sombra 14 cm e grupo escuro apenas 4 cm. Todos os dados foram anotados com data e horário de cada medição.",
        chaves: ["diário de campo", "dados"],
        definicoes: {
          "diário de campo": "Caderno onde o cientista registra tudo o que observa e mede.",
          dados: "Medições numéricas coletadas durante o experimento.",
        },
        fotoUrl: graficoImg,
      },
      {
        id: "p3",
        texto:
          "CONCLUSÃO: os dados CONFIRMARAM a hipótese — quanto mais luz, maior o crescimento. Próxima investigação: será que existe um EXCESSO de luz que prejudica? Formularemos nova hipótese e desenharemos novo experimento na próxima expedição.",
        chaves: ["conclusão", "confirmaram"],
        definicoes: {
          conclusão: "Interpretação dos dados após o experimento.",
          confirmaram: "Quando os dados batem com a previsão da hipótese.",
        },
        fotoUrl: diarioImg,
      },
    ],
    falaFinal:
      "Você acabou de ler um relatório de pesquisa científica real. É assim que a ciência avança — uma investigação puxa a próxima.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Simulador de campo. Cada rodada mostra uma situação. Identifica qual passo do método científico é — antes do tempo esgotar.",
    instrucao: "⏱️ Leia a situação e escolha o passo científico",
    duracaoSegundos: 20,
    pecas: [
      { id: "observar", emoji: "👁️", rotulo: "Observação" },
      { id: "hipotese", emoji: "💡", rotulo: "Hipótese" },
      { id: "experimento", emoji: "🧪", rotulo: "Experimento" },
      { id: "dados", emoji: "📊", rotulo: "Coleta de dados" },
      { id: "conclusao", emoji: "✅", rotulo: "Conclusão" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Contar formigas", emoji: "🐜", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Registrar padrões", emoji: "👁️", cor: "from-teal-500 to-emerald-700" },
        contexto:
          "A equipe passa 20 minutos anotando quantas formigas passam por 3 folhas diferentes. Ainda não testa nada — só REGISTRA o que vê.",
        pecaCertaId: "observar",
        fotoUrl: lupaImg,
        feedbackAcerto: "Isso — coleta sistemática sem intervir é OBSERVAÇÃO.",
        feedbackErro: "A equipe só está OLHANDO e ANOTANDO. Isso é observação, não experimento.",
      },
      {
        id: "r2",
        municipioA: { nome: "Prever crescimento", emoji: "💡", cor: "from-amber-500 to-yellow-700" },
        municipioB: { nome: "'Acredito que...'", emoji: "🤔", cor: "from-orange-500 to-red-700" },
        contexto:
          "Brilha diz: 'Baseado no que observei, acredito que folhas ao sol têm MAIS formigas que folhas na sombra.'",
        pecaCertaId: "hipotese",
        fotoUrl: graficoImg,
        feedbackAcerto: "Perfeito. Previsão baseada em observação = HIPÓTESE.",
        feedbackErro: "Ainda não é dado nem conclusão — é uma previsão testável. HIPÓTESE.",
      },
      {
        id: "r3",
        municipioA: { nome: "Montar 3 vasos", emoji: "🪴", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Testar luz x sombra x escuro", emoji: "🧪", cor: "from-cyan-500 to-sky-700" },
        contexto:
          "A equipe prepara 3 vasos idênticos, com mesma terra e mesma água, mudando SÓ a exposição à luz.",
        pecaCertaId: "experimento",
        fotoUrl: mesaImg,
        feedbackAcerto: "Exato. Teste controlado alterando uma variável = EXPERIMENTO.",
        feedbackErro: "A equipe está MONTANDO o teste. Isso é EXPERIMENTO — a etapa de execução do método.",
      },
      {
        id: "r4",
        municipioA: { nome: "Medir com régua", emoji: "📏", cor: "from-slate-500 to-slate-700" },
        municipioB: { nome: "Anotar 28 cm", emoji: "📊", cor: "from-fuchsia-500 to-purple-700" },
        contexto:
          "A equipe mede a altura das plantas todo dia e registra no diário: '15/03 — vaso sol: 14 cm; vaso escuro: 2 cm'.",
        pecaCertaId: "dados",
        fotoUrl: diarioImg,
        feedbackAcerto: "Sim. Medir e registrar números = COLETA DE DADOS.",
        feedbackErro: "Medir e ANOTAR números com data é COLETA DE DADOS, não conclusão ainda.",
      },
      {
        id: "r5",
        municipioA: { nome: "Analisar gráfico", emoji: "📈", cor: "from-emerald-500 to-teal-700" },
        municipioB: { nome: "Confirmar hipótese", emoji: "✅", cor: "from-green-500 to-emerald-700" },
        contexto:
          "Após 30 dias, a equipe analisa: 'Os dados mostram que luz é fator determinante — hipótese CONFIRMADA'.",
        pecaCertaId: "conclusao",
        fotoUrl: microscopioImg,
        feedbackAcerto: "Perfeito. Interpretar dados e responder à hipótese = CONCLUSÃO.",
        feedbackErro: "Interpretar dados e responder se a hipótese foi confirmada é a CONCLUSÃO do método.",
      },
    ],
    falaFinal:
      "Você identifica cada etapa científica em qualquer situação — de campo ou de laboratório.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos ver a pesquisa científica dividida em duas grandes fases: PLANEJAMENTO (o que a equipe pensa antes) e EXECUÇÃO (o que faz na prática).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: mesaImg,
    fatias: [
      {
        id: "planejamento",
        rotulo: "Planejamento",
        emoji: "💡",
        percentual: 40,
        cor: "#f59e0b",
        descricao:
          "Antes de agir, a equipe OBSERVA padrões e formula uma HIPÓTESE clara e testável.",
        exemplos: ["Observar formigas nas folhas", "Perguntar: por quê?", "Formular hipótese"],
        fotoUrl: lupaImg,
      },
      {
        id: "execucao",
        rotulo: "Execução & Análise",
        emoji: "📊",
        percentual: 60,
        cor: "#0d9488",
        descricao:
          "Depois, a equipe DESENHA o experimento, COLETA dados por dias/semanas e CONCLUI com base nos números.",
        exemplos: ["Montar 3 vasos-teste", "Medir 30 dias seguidos", "Analisar gráfico e concluir"],
        fotoUrl: graficoImg,
      },
    ],
    falaFinal:
      "Planejar bem economiza tempo. Executar com rigor gera confiança nos resultados. Ciência é as duas coisas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão da expedição. Responde 3 perguntas técnicas e sua carteira de pesquisador é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      {
        id: "q1",
        pergunta: "O que caracteriza uma boa HIPÓTESE científica?",
        fotoUrl: graficoImg,
        opcoes: [
          { id: "a", texto: "Ser testável e baseada em observações", correta: true },
          { id: "b", texto: "Estar sempre certa desde o começo" },
        ],
        feedbackAcerto: "Correto. Hipótese boa é a que PODE ser testada e refutada — mesmo que se prove errada.",
        feedbackErro: "Hipótese não precisa estar certa. Precisa ser TESTÁVEL — isso é o que a torna científica.",
      },
      {
        id: "q2",
        pergunta: "Por que registrar tudo no diário de campo?",
        fotoUrl: diarioImg,
        opcoes: [
          { id: "a", texto: "Pra que outros cientistas possam verificar", correta: true },
          { id: "b", texto: "Só pra decorar o caderno" },
        ],
        feedbackAcerto: "Sim. Ciência só é ciência quando outros podem VERIFICAR e REPRODUZIR os resultados.",
        feedbackErro: "O diário é a prova documental. Sem ele, ninguém pode verificar sua pesquisa.",
      },
      {
        id: "q3",
        pergunta: "Se os dados refutarem sua hipótese, o que um cientista sério faz?",
        fotoUrl: microscopioImg,
        opcoes: [
          { id: "a", texto: "Publica os dados reais e formula nova hipótese", correta: true },
          { id: "b", texto: "Muda os dados pra bater com a hipótese" },
        ],
        feedbackAcerto: "Ciência de verdade. Dados alterados destroem toda a pesquisa e a credibilidade da equipe.",
        feedbackErro: "JAMAIS. Alterar dados é fraude científica. Refutar hipótese é resultado válido.",
      },
    ],
    selo: {
      nome: "Carteira de Pesquisador Júnior",
      subtitulo: "Equipe de Pesquisa Escola Brilha · Missão 1 concluída",
      emoji: "🎖️",
      cor: "from-teal-400 via-emerald-500 to-green-700",
    },
    falaFinal:
      "Sua carteira de pesquisador júnior está registrada. A equipe pode contar com você na próxima expedição.",
  },

  recompensa: {
    xp: 150,
    moedas: 30,
    medalha: "Pesquisador Júnior",
  },
};
