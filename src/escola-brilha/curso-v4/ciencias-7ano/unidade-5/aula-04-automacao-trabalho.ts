import type { AulaGeoV1 } from "../../types";
import { url as laboratorioImg } from "@/assets/ciencias-7ano/u5-a1/laboratorio-quimica.jpg.asset.json";
import { url as moleculasImg } from "@/assets/ciencias-7ano/u5-a1/moleculas-atomos.jpg.asset.json";
import { url as transformacoesImg } from "@/assets/ciencias-7ano/u5-a1/transformacoes-materia.jpg.asset.json";

/**
 * Ciências · 7º Ano · Unidade 5 · Aula 04
 * "Novos Materiais e Automação" — Departamento de Matéria e Transformações.
 */
export const aula04: AulaGeoV1 = {
  slug: "aula-04-novos-materiais-e-automacao",
  titulo: "Novos Materiais e Automação",
  iconeTrilha: "🤖",
  recompensa: { xp: 140, moedas: 55, medalha: "Engenheiro de Materiais Júnior" },
  bncc: ["EF07CI06"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada com novos materiais e robôs. Toque para iniciar.",
    mapaUrl: laboratorioImg,
    imagemDestaqueUrl: moleculasImg,
    aurora:
      "Departamento 5: Matéria. Nova missão: entender como novos MATERIAIS (química aplicada) e a AUTOMAÇÃO (robôs, informatização) estão transformando o trabalho humano — criando empregos novos e eliminando outros.",
    falaFinal:
      "Materiais novos não caem do céu: são criados por químicos que entendem átomos e moléculas — e mudam fábricas inteiras.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Uma fábrica de carros troca 200 trabalhadores da linha de montagem por 50 robôs programados. O que MAIS provavelmente acontece com os empregos dessa fábrica em 5 anos?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: laboratorioImg,
    opcoes: [
      { id: "somemtudo", titulo: "Todos os empregos somem", subtitulo: "robôs substituem 100%", emoji: "❌", cor: "from-rose-500 to-red-700", fotoUrl: laboratorioImg },
      { id: "mudamfuncao", titulo: "Empregos mudam de função", subtitulo: "menos operação manual, mais manutenção e programação", emoji: "🔧", cor: "from-emerald-500 to-teal-700", fotoUrl: transformacoesImg },
      { id: "nadamuda", titulo: "Nada muda no trabalho", subtitulo: "robôs só ajudam sem afetar cargos", emoji: "🟰", cor: "from-slate-500 to-slate-700", fotoUrl: laboratorioImg },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "mudamfuncao",
    feedbackAcerto:
      "Correto. A automação historicamente ELIMINA tarefas repetitivas, mas CRIA novas funções — técnicos de manutenção, programadores de robôs, analistas de dados da produção. O trabalho se transforma, não desaparece por completo.",
    feedbackErro:
      "Robôs não eliminam TODO trabalho humano — alguém precisa programar, manter e supervisionar as máquinas. E também não é 'nada muda': postos repetitivos diminuem enquanto surgem funções técnicas novas.",
    falaFinal:
      "Automação exige REQUALIFICAÇÃO: quem aprende a lidar com máquinas e dados se adapta; quem não aprende, fica para trás no mercado.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave sobre ciência de materiais e automação.",
    instrucao: "Vocabulário tecnológico",
    cadernos: [
      { id: "material", capa: "NOVO MATERIAL", emoji: "🧪", cor: "from-sky-500 to-cyan-700", conteudo: "Substância criada ou combinada em laboratório para ter propriedades específicas — mais leve, mais resistente, mais condutora. Resultado direto de pesquisa em química.", exemplo: "Ex.: fibra de carbono, grafeno, polímeros biodegradáveis.", fotoUrl: laboratorioImg },
      { id: "automacao", capa: "AUTOMAÇÃO", emoji: "🤖", cor: "from-indigo-500 to-purple-700", conteudo: "Uso de máquinas e sistemas programados para executar tarefas antes feitas por humanos, sem intervenção manual constante.", exemplo: "Ex.: braços robóticos soldando carros; caixas de autoatendimento.", fotoUrl: transformacoesImg },
      { id: "informatizacao", capa: "INFORMATIZAÇÃO", emoji: "💻", cor: "from-emerald-500 to-teal-700", conteudo: "Uso de computadores e softwares para organizar, processar e comunicar informações que antes eram feitas em papel ou manualmente.", exemplo: "Ex.: prontuário eletrônico, planilhas de estoque automáticas.", fotoUrl: laboratorioImg },
      { id: "requalificacao", capa: "REQUALIFICAÇÃO PROFISSIONAL", emoji: "📚", cor: "from-amber-500 to-orange-700", conteudo: "Processo de aprender novas habilidades quando a profissão original muda ou desaparece por causa da tecnologia.", exemplo: "Ex.: operário de linha de montagem que se torna técnico de manutenção de robôs.", fotoUrl: moleculasImg },
      { id: "polimero", capa: "POLÍMERO", emoji: "🔗", cor: "from-red-500 to-rose-700", conteudo: "Molécula gigante formada por muitas unidades repetidas (monômeros) ligadas em cadeia. Base de plásticos, tecidos sintéticos e novos materiais leves.", exemplo: "Ex.: PET das garrafas, nylon, silicone.", fotoUrl: moleculasImg, partes: [
        { titulo: "Monômero", texto: "Unidade química pequena que se repete formando o polímero." },
        { titulo: "Cadeia", texto: "Milhares de monômeros ligados formam uma molécula gigante." },
        { titulo: "Propriedade", texto: "A forma da cadeia define se o material é flexível, rígido ou elástico." },
        { titulo: "Aplicação", texto: "Polímeros substituem metal e vidro em peças que precisam ser leves e resistentes." },
      ] },
    ],
    falaFinal:
      "Material, automação, informatização, requalificação, polímero. Vocabulário da revolução tecnológica no trabalho.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Uma fábrica automatizada moderna. Toque em cada estação.",
    instrucao: "Toque nos pontos",
    mapaUrl: transformacoesImg,
    pontos: [
      { id: "robo", x: 30, y: 35, emoji: "🤖", cor: "from-indigo-500 to-purple-700", titulo: "Braço robótico", texto: "Executa tarefas repetitivas com precisão milimétrica 24 horas por dia — solda, pintura, montagem — sem cansar nem errar por distração.", fotoUrl: transformacoesImg },
      { id: "sensor", x: 60, y: 30, emoji: "📡", cor: "from-sky-500 to-cyan-700", titulo: "Sensores e câmeras", texto: "Monitoram qualidade em tempo real, detectando defeitos que o olho humano levaria mais tempo para notar.", fotoUrl: laboratorioImg },
      { id: "tecnico", x: 45, y: 65, emoji: "🔧", cor: "from-emerald-500 to-teal-700", titulo: "Técnico de manutenção", texto: "Profissão NOVA criada pela automação: humano que programa, calibra e conserta os robôs. Exige formação técnica específica.", fotoUrl: laboratorioImg },
      { id: "material", x: 75, y: 70, emoji: "🧪", cor: "from-red-500 to-rose-700", titulo: "Novo material leve", texto: "Peças de fibra de carbono ou polímero substituem aço em partes do produto, tornando-o mais leve e eficiente — fruto da química de materiais.", fotoUrl: moleculasImg },
    ],
    falaFinal:
      "Fábrica moderna: menos gente na linha, mas mais gente pensando, programando e criando materiais.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão sobre tecnologia e trabalho.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que é automação?", fotoUrl: transformacoesImg,
        cards: [
          { id: "a", emoji: "🤖", titulo: "Máquinas executando tarefas antes feitas por humanos", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "📚", titulo: "Ensinar novas profissões aos trabalhadores", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🧪", titulo: "Criar novos materiais em laboratório", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Automação = máquinas/sistemas fazendo tarefas manuais ou repetitivas.",
        feedbackErro: "Requalificação é aprender novas habilidades; novo material é química aplicada. AUTOMAÇÃO é substituir tarefa humana por máquina." },
      { id: "q2", pergunta: "Um polímero é...", fotoUrl: moleculasImg,
        cards: [
          { id: "a", emoji: "🔗", titulo: "Molécula gigante feita de unidades repetidas ligadas", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "⚛️", titulo: "Um único átomo isolado", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🤖", titulo: "Um tipo de robô industrial", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Polímero = cadeia de monômeros repetidos, como no plástico PET.",
        feedbackErro: "Polímero não é átomo isolado nem robô. É uma CADEIA de moléculas repetidas." },
      { id: "q3", pergunta: "Quando a automação elimina uma função de trabalho, o que geralmente acontece?", fotoUrl: laboratorioImg,
        cards: [
          { id: "a", emoji: "🔧", titulo: "Surgem novas funções técnicas, exigindo requalificação", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "❌", titulo: "Nenhum emprego novo é criado, sempre", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🟰", titulo: "A quantidade total de trabalho no mundo é fixa", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Historicamente, novas tecnologias criam funções técnicas novas — mas exigem aprendizado.",
        feedbackErro: "A automação também CRIA funções (manutenção, programação). O desafio real é a REQUALIFICAÇÃO de quem perdeu a função antiga." },
    ],
    falaFinal:
      "Você já entende como a química de materiais e a automação transformam o mundo do trabalho.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "O mundo do trabalho hoje se divide em duas zonas: tarefas AUTOMATIZÁVEIS (repetitivas, previsíveis) e tarefas que exigem CRIATIVIDADE E JULGAMENTO HUMANO.",
    instrucao: "Toque nos interruptores",
    mapaUrl: laboratorioImg,
    camadas: [
      { id: "automatizavel", rotulo: "Tarefas Automatizáveis", emoji: "🤖", cor: "from-indigo-500 to-purple-700", rect: { x: 5, y: 5, w: 45, h: 90 }, descricao: "Repetitivas, previsíveis, com regras fixas. Robôs e softwares fazem melhor e mais rápido. Ex.: montagem em linha, cálculos repetitivos, triagem de dados.", fotoUrl: transformacoesImg },
      { id: "humano", rotulo: "Tarefas Humanas", emoji: "🧠", cor: "from-emerald-500 to-teal-700", rect: { x: 50, y: 5, w: 45, h: 90 }, descricao: "Exigem criatividade, empatia, julgamento ético ou solução de problemas inéditos. Difíceis de programar. Ex.: cuidar de pacientes, criar novos designs, negociar.", fotoUrl: laboratorioImg },
    ],
    falaFinal:
      "Quanto mais uma tarefa é repetitiva e previsível, mais fácil de automatizar. Quanto mais exige julgamento humano, mais difícil.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "A HISTÓRIA da automação no trabalho — ordene os marcos.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ordene do mais antigo ao mais recente:",
    paradas: [
      { id: "revolucaoindustrial", emoji: "⚙️", rotulo: "1. Revolução Industrial", descricao: "Séc. XVIII: máquinas a vapor substituem trabalho manual em fábricas.", fotoUrl: laboratorioImg },
      { id: "linhamontagem", emoji: "🏭", rotulo: "2. Linha de montagem", descricao: "Início séc. XX: Ford padroniza produção em série.", fotoUrl: transformacoesImg },
      { id: "robotica", emoji: "🤖", rotulo: "3. Robótica industrial", descricao: "Décadas de 1960-80: primeiros robôs programáveis em fábricas.", fotoUrl: transformacoesImg },
      { id: "informatizacao", emoji: "💻", rotulo: "4. Informatização em massa", descricao: "Décadas de 1990-2020: computadores e internet em todo processo produtivo.", fotoUrl: laboratorioImg },
    ],
    ordemCerta: ["revolucaoindustrial", "linhamontagem", "robotica", "informatizacao"],
    feedbackAcerto:
      "Exato. Revolução Industrial → linha de montagem → robótica → informatização. Cada onda tecnológica mudou o tipo de trabalho disponível.",
    feedbackErro:
      "Ordem correta: primeiro vieram as máquinas a vapor, depois a linha de montagem, depois os robôs programáveis e por fim a informatização em massa.",
    falaFinal:
      "Cada revolução tecnológica eliminou profissões antigas e criou profissões que ninguém imaginava antes.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório sobre a modernização de uma fábrica.",
    tituloLivro: "📓 Relatório · Fábrica Municipal de Autopeças",
    subtitulo: "Cinco anos depois da automação",
    paragrafos: [
      { id: "p1", texto: "SITUAÇÃO ANTERIOR: em 2018, a fábrica empregava 320 operários na linha de montagem manual, realizando tarefas repetitivas de solda e encaixe de peças, com alto índice de lesões por esforço repetitivo.", chaves: ["lesões por esforço repetitivo"], definicoes: { "lesões por esforço repetitivo": "Problemas de saúde causados por movimentos repetidos por longos períodos." }, fotoUrl: laboratorioImg },
      { id: "p2", texto: "MUDANÇA: em 2020, a fábrica instalou 40 braços robóticos para soldagem e um sistema informatizado de controle de estoque. O número de operários na linha caiu para 90, mas surgiram 35 novas vagas de técnico de automação, programador de robôs e analista de dados de produção.", chaves: ["sistema informatizado"], definicoes: { "sistema informatizado": "Conjunto de programas de computador que organiza e controla processos automaticamente." }, fotoUrl: transformacoesImg },
      { id: "p3", texto: "RESULTADO: a produção aumentou 60% com menos acidentes de trabalho. Porém, muitos operários antigos precisaram de cursos de requalificação para conseguir as novas vagas técnicas — quem não se atualizou, ficou desempregado ou mudou de setor.", chaves: ["requalificação"], definicoes: { requalificação: "Processo de aprender novas habilidades exigidas pelo mercado de trabalho atualizado." }, fotoUrl: laboratorioImg },
    ],
    falaFinal:
      "Tecnologia não é boa nem má por si só — o impacto depende de como a sociedade prepara as pessoas para a mudança.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio: essa tarefa é FÁCIL ou DIFÍCIL de automatizar?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 30,
    pecas: [
      { id: "facil", emoji: "🤖", rotulo: "Fácil de automatizar" },
      { id: "dificil", emoji: "🧠", rotulo: "Difícil de automatizar" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Parafusar a mesma peça 1000 vezes por dia", emoji: "🔩", cor: "from-indigo-500 to-purple-700" }, municipioB: { nome: "Tarefa repetitiva e previsível", emoji: "🔁", cor: "from-slate-500 to-slate-700" }, contexto: "Linha de montagem de eletrônicos.", pecaCertaId: "facil", fotoUrl: transformacoesImg, feedbackAcerto: "FÁCIL. Movimento idêntico e repetido é ideal para robôs.", feedbackErro: "Tarefa idêntica repetida milhares de vezes é justamente o que robôs fazem melhor — é FÁCIL de automatizar." },
      { id: "r2", municipioA: { nome: "Consolar um paciente assustado", emoji: "🤍", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Exige empatia genuína", emoji: "🧠", cor: "from-rose-500 to-red-700" }, contexto: "Enfermagem hospitalar.", pecaCertaId: "dificil", fotoUrl: laboratorioImg, feedbackAcerto: "DIFÍCIL. Empatia e julgamento emocional ainda não são replicáveis por máquinas.", feedbackErro: "Não é uma tarefa mecânica e previsível — exige empatia humana genuína, por isso é DIFÍCIL de automatizar." },
      { id: "r3", municipioA: { nome: "Calcular o troco de uma compra", emoji: "🧮", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Cálculo matemático simples e fixo", emoji: "💻", cor: "from-cyan-500 to-blue-700" }, contexto: "Caixa de supermercado.", pecaCertaId: "facil", fotoUrl: transformacoesImg, feedbackAcerto: "FÁCIL. Cálculo é regra fixa — computadores fazem isso perfeitamente e sem erro.", feedbackErro: "Cálculo matemático segue regras fixas e claras — é uma das tarefas MAIS fáceis de automatizar." },
      { id: "r4", municipioA: { nome: "Criar o design inédito de um produto novo", emoji: "🎨", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Exige criatividade original", emoji: "💡", cor: "from-rose-500 to-red-700" }, contexto: "Departamento de design de uma empresa.", pecaCertaId: "dificil", fotoUrl: laboratorioImg, feedbackAcerto: "DIFÍCIL. Criar algo verdadeiramente novo exige criatividade que máquinas ainda não reproduzem plenamente.", feedbackErro: "Não é uma tarefa de regra fixa — exige criatividade original, por isso é DIFÍCIL de automatizar totalmente." },
    ],
    falaFinal:
      "Tarefas repetitivas e com regras claras: fáceis de automatizar. Tarefas criativas e empáticas: ainda dependem de humanos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Estimativa de como mudou a composição dos empregos em fábricas que se automatizaram nos últimos 10 anos.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: transformacoesImg,
    fatias: [
      { id: "manual", rotulo: "Trabalho manual repetitivo", emoji: "🖐️", percentual: 40, cor: "#64748b", descricao: "Caiu de cerca de 70% para 40% da força de trabalho fabril em uma década, substituído por robôs em tarefas repetitivas.", exemplos: ["Montagem manual", "Solda manual"], fotoUrl: transformacoesImg },
      { id: "tecnico", rotulo: "Funções técnicas e de supervisão", emoji: "🔧", percentual: 60, cor: "#10b981", descricao: "Subiu para cerca de 60%: técnicos de manutenção, programadores de robôs, analistas de dados de produção — funções que exigem formação especializada.", exemplos: ["Técnico de automação", "Analista de dados", "Programador industrial"], fotoUrl: laboratorioImg },
    ],
    falaFinal:
      "O trabalho fabril não desapareceu — ele MIGROU para funções mais técnicas, exigindo mais estudo e formação continuada.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão sobre materiais e automação. 3 perguntas para receber sua Certificação de Engenheiro de Materiais Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: laboratorioImg,
    selo: { nome: "Certificação · Engenheiro de Materiais Júnior", subtitulo: "Departamento 5 · Novos Materiais e Automação", emoji: "🤖", cor: "from-amber-500 to-orange-700" },
    perguntas: [
      { id: "q1", pergunta: "Um novo material como a fibra de carbono é resultado de...", fotoUrl: moleculasImg,
        opcoes: [
          { id: "a", texto: "Pesquisa em química que combina átomos para criar propriedades específicas", correta: true },
          { id: "b", texto: "Acaso, sem nenhuma pesquisa científica envolvida" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. Materiais novos surgem de estudo deliberado de estrutura atômica e molecular.",
        feedbackErro: "Não é acaso — é PESQUISA CIENTÍFICA deliberada em química de materiais." },
      { id: "q2", pergunta: "Quando a automação elimina uma tarefa repetitiva, o mais provável é que...", fotoUrl: transformacoesImg,
        opcoes: [
          { id: "a", texto: "Surjam funções técnicas novas exigindo requalificação dos trabalhadores", correta: true },
          { id: "b", texto: "Nenhuma outra função seja criada em lugar da antiga" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Sim. Historicamente automação cria novas funções técnicas, mas exige aprendizado.",
        feedbackErro: "A história mostra que novas funções SURGEM — o desafio é a REQUALIFICAÇÃO de quem perdeu a função antiga." },
      { id: "q3", pergunta: "Uma tarefa que exige empatia e criatividade original é...", fotoUrl: laboratorioImg,
        opcoes: [
          { id: "a", texto: "Difícil de automatizar totalmente", correta: true },
          { id: "b", texto: "Igualmente fácil de automatizar que uma tarefa repetitiva" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. Empatia e criatividade original ainda são domínio predominantemente humano.",
        feedbackErro: "Não é igual — tarefas com regra fixa são fáceis; tarefas com empatia/criatividade são DIFÍCEIS de automatizar." },
    ],
    falaFinal:
      "Selo conquistado. Fim do Departamento 5 — Matéria e Transformações.",
  },
};
