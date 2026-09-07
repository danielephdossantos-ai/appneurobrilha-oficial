import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

const criar = (numero: number, config: Parameters<typeof criarAulaConsolidacao>[0]) =>
  criarAulaConsolidacao({ ...config, slug: `aula-${numero}-${config.slug}` });

export const aula43 = criar(43, {
  slug: "jornalismo-em-rede", titulo: "Jornalismo em Rede", icone: "📰",
  bncc: ["EF67LP01", "EF67LP04", "EF67LP06", "EF67LP09", "EF67LP10", "EF67LP14"],
  tema: "Redação conectada", conceito: "hipertexto, fato, edição, notícia e entrevista",
  explicacao: "A notícia digital combina fato verificável, hierarquia de informações, escolhas lexicais, imagem e hiperlinks. Produzi-la exige pauta, apuração e revisão; entrevistar exige objetivo, pesquisa prévia, perguntas abertas e escuta.",
  exemplo: "Título: Escola inaugura laboratório. Link: relatório do projeto. Entrevista: 'Como o espaço será usado nas aulas?'.",
  exemploAnalisado: "O título informa o fato, o link oferece evidência e a pergunta aberta busca informação relevante.",
  pergunta: "Qual elemento fortalece a confiabilidade?", opcoes: ["Fonte verificável ligada ao fato", "Adjetivo exagerado", "Título sem apuração"], resposta: 0,
  revisao: ["Fato e opinião não são iguais.", "Edição produz efeitos de sentido.", "Notícia e entrevista exigem planejamento."],
  missao: "Planeje uma notícia com fato, fonte, hiperlink e duas perguntas de entrevista.",
});

export const aula44 = criar(44, {
  slug: "palavras-coesao-e-figuras", titulo: "Palavras, Coesão e Figuras", icone: "🔤",
  bncc: ["EF67LP32", "EF67LP34", "EF67LP35", "EF67LP36", "EF67LP37", "EF67LP38"],
  tema: "Oficina de revisão", conceito: "ortografia, formação, coesão, sequências e linguagem figurada",
  explicacao: "Revisar envolve conferir grafia, reconhecer prefixos, sufixos e palavras compostas, ligar ideias com retomadas e conectores e analisar como sequências descritivas, causais ou prescritivas e figuras de linguagem constroem sentidos.",
  exemplo: "A cidade despertou porque a feira começou cedo; portanto, os moradores reorganizaram o trânsito.",
  exemploAnalisado: "Despertou personifica a cidade; porque indica causa; portanto introduz consequência e mantém a coesão.",
  pergunta: "Qual expressão introduz a consequência?", opcoes: ["portanto", "porque", "cidade"], resposta: 0,
  revisao: ["Ortografia segue convenções.", "Coesão conecta partes.", "Figuras e sequências produzem efeitos."],
  missao: "Revise um parágrafo, destacando formação de palavras, dois elos coesivos e uma figura de linguagem.",
});

export const aula45 = criar(45, {
  slug: "etica-publicidade-e-humor", titulo: "Ética, Publicidade e Humor", icone: "🧭",
  bncc: ["EF69LP01", "EF69LP02", "EF69LP03", "EF69LP04", "EF69LP05"],
  tema: "Leitura crítica da mídia", conceito: "ética, notícia, publicidade e textos multissemióticos",
  explicacao: "Participação responsável distingue crítica de ataque discriminatório. Notícias organizam fato e circunstâncias; publicidade usa recursos persuasivos; memes, charges e vídeos combinam palavras e imagens, exigindo inferência e avaliação crítica.",
  exemplo: "Uma campanha mostra dados de economia de água e uma charge ironiza o desperdício sem atacar pessoas.",
  exemploAnalisado: "A campanha persuade com evidência; a charge critica uma prática pela combinação de legenda e imagem.",
  pergunta: "Qual leitura é crítica e ética?", opcoes: ["Analisa recursos e respeita direitos", "Compartilha sem conferir", "Ataca quem discorda"], resposta: 0,
  revisao: ["Expressão não autoriza discriminação.", "Fato central precisa ser localizado.", "Texto e imagem interagem."],
  missao: "Compare uma notícia e uma peça publicitária, identificando finalidade, recurso e evidência.",
});

export const aula46 = criar(46, {
  slug: "producao-midiatica", titulo: "Produção Midiática Completa", icone: "🎬",
  bncc: ["EF69LP06", "EF69LP07", "EF69LP08", "EF69LP09", "EF69LP10", "EF69LP11", "EF69LP12"],
  tema: "Estúdio editorial", conceito: "planejamento, produção, revisão e publicação em diferentes mídias",
  explicacao: "Produzir notícia, reportagem, podcast ou campanha exige situação comunicativa definida, pauta, fontes, roteiro e escolha de recursos verbais, sonoros e visuais. A edição verifica precisão, ética, autoria, linguagem e adequação ao suporte.",
  exemplo: "Podcast escolar: pauta sobre transporte, entrevista, roteiro em blocos, gravação, checagem e publicação.",
  exemploAnalisado: "Cada etapa atende ao gênero e ao público; a checagem ocorre antes da publicação.",
  pergunta: "Qual etapa confirma precisão e adequação?", opcoes: ["Revisão e edição", "Improviso sem fonte", "Publicação imediata"], resposta: 0,
  revisao: ["Contexto orienta escolhas.", "Mídias exigem recursos próprios.", "Edição verifica conteúdo e forma."],
  missao: "Crie um roteiro de um minuto com pauta, fonte, abertura, desenvolvimento e fechamento.",
});

export const aula47 = criar(47, {
  slug: "debate-argumentativo", titulo: "Debate Argumentativo", icone: "🗣️",
  bncc: ["EF69LP13", "EF69LP14", "EF69LP15", "EF69LP16", "EF69LP17", "EF69LP18", "EF69LP19"],
  tema: "Arena de ideias", conceito: "questão, tese, argumentos, contra-argumentos e efeitos da fala",
  explicacao: "Debater exige decompor a questão, ouvir, formular tese e apresentar evidências. Conectores organizam razões e conclusões; escolha lexical, modalização, voz, pausas e gestos influenciam como posições são percebidas.",
  exemplo: "A biblioteca deve abrir no intervalo, pois amplia o acesso; porém, será necessário organizar uma escala.",
  exemploAnalisado: "Há tese, justificativa e contraponto ligado por porém, sem apagar a posição principal.",
  pergunta: "Qual resposta fortalece um debate?", opcoes: ["Responder à ideia com evidência", "Interromper o colega", "Repetir sem justificar"], resposta: 0,
  revisao: ["Questões complexas podem ser decompostas.", "Argumentos exigem sustentação.", "Forma oral também produz sentido."],
  missao: "Prepare tese, dois argumentos e um contra-argumento para uma questão escolar.",
});

export const aula48 = criar(48, {
  slug: "normas-e-propostas", titulo: "Normas e Propostas Cidadãs", icone: "⚖️",
  bncc: ["EF69LP20", "EF69LP21", "EF69LP22", "EF69LP23"],
  tema: "Participação pública", conceito: "leitura de normas e produção reivindicatória, propositiva e normativa",
  explicacao: "Regulamentos apresentam direitos, deveres, destinatários e condições. Uma reivindicação responsável descreve problema e evidências; uma proposta indica ação, responsável e prazo; uma norma exige formulação precisa e verificável.",
  exemplo: "Solicitamos sinalização na escada. Propomos pintura até sexta-feira e inspeção mensal pela equipe responsável.",
  exemploAnalisado: "O texto identifica problema, pedido, ação, prazo e acompanhamento.",
  pergunta: "O que torna a proposta verificável?", opcoes: ["Ação, responsável e prazo", "Adjetivo exagerado", "Pedido sem contexto"], resposta: 0,
  revisao: ["Normas organizam direitos e deveres.", "Reivindicações precisam de evidência.", "Propostas definem encaminhamento."],
  missao: "Escreva uma proposta de melhoria com justificativa, responsável, prazo e critério de avaliação.",
});

export const aula49 = criar(49, {
  slug: "discussao-e-registro-civico", titulo: "Discussão e Registro Cívico", icone: "🏛️",
  bncc: ["EF69LP24", "EF69LP25", "EF69LP26", "EF69LP27", "EF69LP28"],
  tema: "Decisão coletiva", conceito: "deliberação, tomada de notas e linguagem normativa",
  explicacao: "Discussões públicas exigem posição sustentada e respeito aos turnos. Notas registram propostas, argumentos, decisões e prazos. Textos normativos e jurídicos usam composição própria e modalizadores de obrigação, permissão e possibilidade.",
  exemplo: "Proposta A: ampliar o recreio. Argumento: melhorar convivência. Decisão: testar por uma semana; todos devem registrar ocorrências.",
  exemploAnalisado: "A nota separa proposta, razão e decisão; devem marca obrigação no encaminhamento.",
  pergunta: "O que uma boa nota de reunião preserva?", opcoes: ["Ideias centrais e encaminhamentos", "Cada palavra falada", "Somente nomes"], resposta: 0,
  revisao: ["Posição deve ser sustentada.", "Notas selecionam o essencial.", "Modalização expressa força normativa."],
  missao: "Registre uma discussão breve com duas propostas, argumentos e decisão final.",
});

export const aula50 = criar(50, {
  slug: "pesquisa-critica", titulo: "Pesquisa Crítica", icone: "🔎",
  bncc: ["EF69LP29", "EF69LP30", "EF69LP31", "EF69LP32", "EF69LP33", "EF69LP34"],
  tema: "Investigação do conhecimento", conceito: "contexto, comparação de fontes, seleção, organização e síntese",
  explicacao: "Pesquisar começa com questão e recorte. Fontes são comparadas por autoria, data, instituição, método e evidências. Pistas linguísticas mostram organização; grifos, notas, esquemas e infográficos selecionam e articulam informações relevantes.",
  exemplo: "Pergunta: como reduzir resíduos? Fontes: medição da escola, entrevista e relatório público; esquema: causas, dados, soluções.",
  exemploAnalisado: "As fontes são complementares e o esquema organiza dados de acordo com a pergunta.",
  pergunta: "Qual critério seleciona uma fonte confiável?", opcoes: ["Autoria, método e evidências", "Primeira posição na busca", "Aparência colorida"], resposta: 0,
  revisao: ["Recorte orienta a pesquisa.", "Fontes precisam ser comparadas.", "Síntese articula texto e recursos visuais."],
  missao: "Compare três fontes e organize as informações essenciais em esquema com indicação de origem.",
});

export const aula51 = criar(51, {
  slug: "divulgacao-cientifica-multimidia", titulo: "Divulgação Científica Multimídia", icone: "🧪",
  bncc: ["EF69LP35", "EF69LP36", "EF69LP37", "EF69LP38", "EF69LP39"],
  tema: "Ciência para o público", conceito: "planejamento, produção, apresentação e entrevista científica",
  explicacao: "Divulgação científica seleciona conceitos e dados, explica sem distorcer e cita fontes. Pode virar artigo, infográfico, vídeo ou painel. Entrevistas exigem recorte, pesquisa do convidado, perguntas abertas e escuta ativa.",
  exemplo: "Painel sobre energia: gráfico com fonte, explicação do conceito e entrevista com técnica da escola.",
  exemploAnalisado: "O gráfico apresenta evidência, o texto contextualiza e a entrevista amplia a investigação.",
  pergunta: "Qual prática mantém a precisão científica?", opcoes: ["Explicar dados e citar fontes", "Inventar resultados", "Ocultar o método"], resposta: 0,
  revisao: ["Divulgação adapta sem distorcer.", "Cada suporte exige planejamento.", "Entrevista combina preparo e escuta."],
  missao: "Planeje um painel científico com conceito, dado, fonte, recurso visual e pergunta de entrevista.",
});

export const aula52 = criar(52, {
  slug: "apresentacao-e-vozes-do-conhecimento", titulo: "Apresentação e Vozes do Conhecimento", icone: "📊",
  bncc: ["EF69LP40", "EF69LP41", "EF69LP42", "EF69LP43"],
  tema: "Comunicação acadêmica", conceito: "análise da fala, apoio visual, gêneros expositivos e citação",
  explicacao: "Apresentações eficientes organizam abertura, desenvolvimento e síntese; voz, pausas e gestos apoiam o sentido. Slides destacam dados legíveis. Verbetes, relatórios e artigos têm composição própria e introduzem fontes por citação ou paráfrase.",
  exemplo: "Segundo o relatório, o consumo caiu 12%. O slide mostra o gráfico; a fala explica período, fonte e causa provável.",
  exemploAnalisado: "A fonte é reconhecida, o visual mostra o dado e a fala oferece contexto sem apenas ler a tela.",
  pergunta: "Qual apoio visual funciona melhor?", opcoes: ["Dado legível com fonte", "Parágrafo inteiro pequeno", "Imagem sem relação"], resposta: 0,
  revisao: ["Corpo e voz participam da apresentação.", "Slides apoiam, não duplicam.", "Outras vozes devem ser identificadas."],
  missao: "Crie um slide com dado e fonte e prepare uma explicação oral de trinta segundos.",
});

export const aula53 = criar(53, {
  slug: "literatura-e-valores", titulo: "Literatura, Valores e Crítica", icone: "📚",
  bncc: ["EF69LP44", "EF69LP45", "EF69LP46"],
  tema: "Comunidade literária", conceito: "valores, crítica e compartilhamento de leitura",
  explicacao: "Obras literárias expressam visões de mundo ligadas a contextos. Comentários, resenhas, clubes e adaptações permitem comparar interpretações, avaliar obras com critérios e compartilhar experiências sem transformar preferência em verdade absoluta.",
  exemplo: "A resenha afirma que o conto questiona a desigualdade e sustenta a leitura pela oposição entre os espaços dos personagens.",
  exemploAnalisado: "A interpretação apresenta tema, critério e elemento do texto como evidência.",
  pergunta: "Qual comentário literário é fundamentado?", opcoes: ["Explica a interpretação com elemento da obra", "Diz apenas gostei", "Ataca outro leitor"], resposta: 0,
  revisao: ["Literatura expressa valores e perspectivas.", "Crítica usa critérios.", "Partilha respeita leituras diferentes."],
  missao: "Escreva uma recomendação literária com avaliação, critério e exemplo da obra.",
});

export const aula54 = criar(54, {
  slug: "narrativa-autoral", titulo: "Narrativa Autoral", icone: "✍️",
  bncc: ["EF69LP47", "EF69LP49", "EF69LP51"],
  tema: "Oficina de ficção", conceito: "composição narrativa, leitura autônoma e revisão autoral",
  explicacao: "Narrativas articulam situação inicial, conflito, clímax e desfecho; narrador, tempo, espaço e discurso controlam informações. Ler com envolvimento amplia repertório; planejar, escrever e revisar fortalece coerência e efeito.",
  exemplo: "Quando o relógio parou, Ravi percebeu que apenas sua sombra continuava andando.",
  exemploAnalisado: "O acontecimento rompe a normalidade, cria conflito e limita a percepção ao personagem.",
  pergunta: "Qual elemento impulsiona a narrativa?", opcoes: ["O conflito", "A lista de palavras", "A margem da página"], resposta: 0,
  revisao: ["Conflito organiza progressão.", "Ponto de vista controla informações.", "Revisão verifica coerência e efeito."],
  missao: "Escreva uma cena com conflito, foco narrativo definido e revisão por checklist.",
});

export const aula55 = criar(55, {
  slug: "poesia-voz-e-sentido", titulo: "Poesia, Voz e Sentido", icone: "🎙️",
  bncc: ["EF69LP48", "EF69LP53", "EF69LP54"],
  tema: "Performance poética", conceito: "recursos expressivos, leitura oral e efeitos paralinguísticos",
  explicacao: "Em poemas, verso, ritmo, rima, repetição, imagens e figuras constroem sentidos. Na leitura oral, entonação, pausas, volume, velocidade, postura e gesto devem comunicar uma interpretação clara.",
  exemplo: "A noite costura estrelas / no tecido do céu.",
  exemploAnalisado: "Costura cria metáfora visual; uma pausa entre versos destaca a transformação imaginada.",
  pergunta: "Qual leitura valoriza o poema?", opcoes: ["Pausas e entonação ligadas ao sentido", "Velocidade sem articulação", "Tom igual sem interpretação"], resposta: 0,
  revisao: ["Forma e sentido interagem.", "Figuras criam imagens.", "Performance revela interpretação."],
  missao: "Marque pausas e ênfases em um poema curto e apresente sua leitura expressiva.",
});

export const aula56 = criar(56, {
  slug: "texto-teatral-em-cena", titulo: "Texto Teatral em Cena", icone: "🎭",
  bncc: ["EF69LP50", "EF69LP52"],
  tema: "Da narrativa ao palco", conceito: "adaptação e representação dramática",
  explicacao: "Adaptar uma narrativa para teatro exige transformar narração em ações, falas, cenas e rubricas. Na representação, voz, gesto, movimento, cenário e ritmo constroem personagens e conflitos de maneira coerente.",
  exemplo: "[A luz pisca.] LIA: O sinal veio da sala vazia. TOM: Então por que a porta está aberta?",
  exemploAnalisado: "A rubrica cria ambiente e o diálogo apresenta o conflito por ação, sem narrador explicando tudo.",
  pergunta: "Qual trecho orienta a encenação?", opcoes: ["[A luz pisca.]", "O número da página", "O nome do arquivo"], resposta: 0,
  revisao: ["Rubricas orientam cena.", "Falas transformam narração em ação.", "Corpo e voz constroem personagem."],
  missao: "Adapte um parágrafo narrativo para uma cena com rubrica, diálogo e conflito.",
});

export const aula57 = criar(57, {
  slug: "variacao-e-norma", titulo: "Variação e Norma em Contexto", icone: "🌐",
  bncc: ["EF69LP55", "EF69LP56"],
  tema: "Língua e diversidade", conceito: "variedades linguísticas, norma-padrão e adequação",
  explicacao: "A língua varia conforme região, grupo, época e situação. Nenhuma variedade torna alguém menos capaz. A norma-padrão é necessária em determinados contextos formais; usar regras de modo consciente significa adequar a linguagem sem preconceito.",
  exemplo: "Mensagem a um amigo: 'A gente se fala'. Relatório formal: 'Conversaremos após a reunião'.",
  exemploAnalisado: "As formas atendem a situações diferentes; a mudança de registro não autoriza julgar o falante.",
  pergunta: "O que é adequação linguística?", opcoes: ["Escolher o registro conforme a situação", "Proibir variedades regionais", "Usar sempre a mesma forma"], resposta: 0,
  revisao: ["Toda língua apresenta variação.", "Norma-padrão é um registro social.", "Adequação deve ocorrer sem discriminação."],
  missao: "Reescreva uma mensagem para contexto informal e formal e explique as escolhas com respeito às variedades.",
});

export const aulas43a57 = [aula43, aula44, aula45, aula46, aula47, aula48, aula49, aula50, aula51, aula52, aula53, aula54, aula55, aula56, aula57];
