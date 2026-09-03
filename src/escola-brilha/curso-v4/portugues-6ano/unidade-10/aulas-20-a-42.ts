import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

const criar = (numero: number, config: Parameters<typeof criarAulaConsolidacao>[0]) =>
  criarAulaConsolidacao({ ...config, slug: `aula-${numero}-${config.slug}` });

export const aula20 = criar(20, {
  slug: "leitura-critica-da-noticia", titulo: "Leitura Crítica da Notícia", icone: "📰",
  bncc: ["EF06LP01", "EF06LP02", "EF67LP03", "EF67LP06", "EF67LP08", "EF69LP03", "EF69LP16", "EF69LP17"],
  tema: "Notícia sob investigação", conceito: "fato central, gêneros jornalísticos, fontes e efeitos de edição",
  explicacao: "Ler criticamente uma notícia exige localizar o fato central e suas circunstâncias, reconhecer o gênero, comparar fontes e observar como título, ordem das informações, palavras, imagens e enquadramentos produzem maior ou menor parcialidade.",
  exemplo: "Dois portais informam a abertura de uma biblioteca: um destaca o acesso aos livros; outro, o atraso da obra.",
  exemploAnalisado: "O fato é o mesmo, mas o recorte, o título e a imagem orientam a atenção do leitor para aspectos diferentes.",
  pergunta: "O que permite avaliar melhor a confiabilidade da notícia?", opcoes: ["Comparar fontes, autoria, data e evidências", "Ler apenas o título", "Escolher a imagem mais chamativa"], resposta: 0,
  revisao: ["Notícia organiza fato e circunstâncias.", "Recortes e escolhas podem produzir parcialidade.", "Fontes e evidências precisam ser comparadas."],
  missao: "Compare duas notícias sobre o mesmo fato e registre semelhanças, diferenças e fontes usadas.",
});

export const aula21 = criar(21, {
  slug: "etica-e-multissemiose", titulo: "Ética e Multissemiose nas Redes", icone: "🧭",
  bncc: ["EF69LP01", "EF69LP05", "EF69LP11", "EF69LP19"],
  tema: "Comunicação responsável", conceito: "liberdade de expressão, respeito e sentidos de linguagens combinadas",
  explicacao: "A participação nas redes deve respeitar direitos. Em memes, charges, falas e vídeos, palavras, imagens, tom de voz e gestos constroem posicionamentos; analisá-los ajuda a distinguir crítica argumentada de ataque discriminatório.",
  exemplo: "Uma charge combina legenda e expressão facial para criticar o desperdício de água sem atacar um grupo de pessoas.",
  exemploAnalisado: "A crítica se dirige a uma prática e usa recursos visuais para reforçar o argumento, mantendo o respeito.",
  pergunta: "Qual participação é ética em um debate digital?", opcoes: ["Contestar a ideia com razões e respeito", "Atacar a pessoa", "Compartilhar sem compreender"], resposta: 0,
  revisao: ["Liberdade de expressão não autoriza discriminação.", "Imagem, palavra, voz e gesto produzem sentido.", "Argumentos devem tratar da ideia."],
  missao: "Analise uma postagem pública e explique como texto e imagem constroem o posicionamento.",
});

export const aula22 = criar(22, {
  slug: "publicidade-consciente", titulo: "Publicidade Consciente", icone: "📣",
  bncc: ["EF67LP07", "EF69LP02", "EF69LP04", "EF69LP09"],
  tema: "Laboratório da persuasão", conceito: "recursos persuasivos e planejamento de campanha",
  explicacao: "Peças publicitárias ajustam linguagem ao público e combinam slogan, imagem, seleção lexical e apelos. Uma campanha responsável define objetivo, público, suporte, argumento verificável e chamada para ação.",
  exemplo: "Campanha da escola: 'Traga sua garrafa: menos copos, mais cuidado', com dado sobre resíduos e ponto de coleta.",
  exemploAnalisado: "O slogan é breve, o benefício é explícito e o dado sustenta a proposta sem promessa enganosa.",
  pergunta: "Qual elemento fortalece uma campanha responsável?", opcoes: ["Argumento verificável adequado ao público", "Promessa impossível", "Informação sem fonte"], resposta: 0,
  revisao: ["Persuasão usa escolhas verbais e visuais.", "Campanha precisa de objetivo e público.", "Dados verificáveis aumentam a credibilidade."],
  missao: "Planeje uma campanha escolar com slogan, público, argumento e suporte de divulgação.",
});

export const aula23 = criar(23, {
  slug: "producao-jornalistica-multimidia", titulo: "Produção Jornalística Multimídia", icone: "🎥",
  bncc: ["EF67LP09", "EF69LP06", "EF69LP08", "EF69LP10", "EF69LP12"],
  tema: "Redação multimídia", conceito: "planejamento, produção, revisão e publicação jornalística",
  explicacao: "Uma produção jornalística define pauta, apura fontes, organiza roteiro e adapta texto, voz e imagem ao suporte. A revisão confere precisão, autoria, direitos de uso, clareza e adequação antes da publicação.",
  exemplo: "Podcast sobre a horta escolar: pauta, entrevista, roteiro com abertura e blocos, gravação e revisão das informações.",
  exemploAnalisado: "Cada etapa resolve uma necessidade: apurar antes de escrever, organizar antes de gravar e checar antes de publicar.",
  pergunta: "O que deve ocorrer antes da publicação?", opcoes: ["Checagem e revisão editorial", "Excluir as fontes", "Trocar fatos por boatos"], resposta: 0,
  revisao: ["Pauta orienta a apuração.", "O suporte muda a forma de apresentar.", "Revisão verifica conteúdo e linguagem."],
  missao: "Produza o roteiro de uma notícia de um minuto com fato, fonte, contexto e encerramento.",
});

export const aula24 = criar(24, {
  slug: "resenha-podcast-e-debate", titulo: "Resenha, Podcast e Debate", icone: "🎧",
  bncc: ["EF67LP11", "EF67LP12", "EF69LP13", "EF69LP14", "EF69LP15"],
  tema: "Opinião com fundamento", conceito: "planejamento de resenha e argumentação colaborativa",
  explicacao: "Resenhas e podcasts apresentam a obra ou tema, formulam uma avaliação e a sustentam com critérios e exemplos. Em debate, é preciso decompor a questão, ouvir, respeitar turnos e responder com argumentos e contra-argumentos coerentes.",
  exemplo: "A resenha recomenda o livro porque o narrador cria suspense com pistas distribuídas ao longo dos capítulos.",
  exemploAnalisado: "A opinião é sustentada por um critério literário e por uma evidência observável na obra.",
  pergunta: "Qual fala participa bem de um debate?", opcoes: ["Apresenta argumento e responde à ideia anterior", "Interrompe sem ouvir", "Repete uma opinião sem razão"], resposta: 0,
  revisao: ["Avaliação precisa de critério.", "Exemplos sustentam opiniões.", "Debate exige escuta e contra-argumentação."],
  missao: "Planeje uma resenha oral de dois minutos e inclua avaliação, critério e exemplo.",
});

export const aula25 = criar(25, {
  slug: "coesao-argumentativa", titulo: "Coesão na Argumentação", icone: "🧠",
  bncc: ["EF69LP18"], tema: "Engenharia do argumento", conceito: "recursos linguísticos para ligar tese, argumentos e conclusão",
  explicacao: "Textos argumentativos ficam mais claros quando conectores indicam causa, oposição, conclusão e exemplificação, e quando verbos e expressões mostram o grau de certeza do autor.",
  exemplo: "A biblioteca deve abrir no recreio, pois muitos estudantes não podem visitá-la depois da aula; portanto, o novo horário amplia o acesso.",
  exemploAnalisado: "Pois introduz a justificativa e portanto apresenta a conclusão decorrente dela.",
  pergunta: "Qual palavra introduz a conclusão?", opcoes: ["portanto", "pois", "biblioteca"], resposta: 0,
  revisao: ["A tese orienta o texto.", "Conectores explicitam relações lógicas.", "A conclusão deve decorrer dos argumentos."],
  missao: "Escreva um parágrafo com tese, justificativa e conclusão ligadas por conectores adequados.",
});

export const aula26 = criar(26, {
  slug: "direitos-normas-e-modalizacao", titulo: "Direitos, Normas e Modalização", icone: "⚖️",
  bncc: ["EF67LP15", "EF67LP16", "EF67LP17", "EF69LP20", "EF69LP21", "EF69LP27", "EF69LP28"],
  tema: "Leitura cidadã", conceito: "organização e linguagem de regras, direitos e deveres",
  explicacao: "Regulamentos, estatutos e cartas de direitos indicam quem deve agir, em que situação e com qual obrigação ou garantia. Verbos como deve, pode e é proibido modalizam obrigação, permissão e proibição.",
  exemplo: "O estudante pode usar a biblioteca no intervalo e deve devolver o livro na data registrada.",
  exemploAnalisado: "Pode expressa direito ou permissão; deve expressa obrigação e indica a condição de devolução.",
  pergunta: "Qual verbo indica obrigação?", opcoes: ["deve", "pode", "usar"], resposta: 0,
  revisao: ["Normas organizam direitos e deveres.", "A situação de aplicação precisa ser identificada.", "Modalizadores mostram obrigação, permissão ou proibição."],
  missao: "Leia uma regra escolar e identifique destinatário, direito ou dever e condição de aplicação.",
});

export const aula27 = criar(27, {
  slug: "solicitacoes-e-propostas", titulo: "Solicitações e Propostas", icone: "✉️",
  bncc: ["EF67LP19", "EF69LP22", "EF69LP23"], tema: "Intervenção na comunidade", conceito: "texto reivindicatório, propositivo e normativo",
  explicacao: "Uma solicitação cidadã apresenta problema verificável, destinatário competente, justificativa e pedido possível. Textos propositivos acrescentam ações, responsáveis e critérios; textos normativos usam formulações precisas.",
  exemplo: "À direção: solicitamos sinalização na escada, pois a faixa está apagada. Propomos pintura até sexta-feira e avaliação mensal.",
  exemploAnalisado: "Há destinatário, problema, evidência, pedido, prazo e forma de acompanhamento.",
  pergunta: "Qual parte torna a proposta verificável?", opcoes: ["Prazo e critério de acompanhamento", "Saudação isolada", "Adjetivo exagerado"], resposta: 0,
  revisao: ["Reivindicação precisa de sustentação.", "Proposta indica ação possível.", "Norma exige clareza e precisão."],
  missao: "Redija uma solicitação sobre uma melhoria real, com justificativa, proposta e destinatário.",
});

export const aula28 = criar(28, {
  slug: "assembleia-e-registro", titulo: "Assembleia, Debate e Registro", icone: "🗣️",
  bncc: ["EF69LP24", "EF69LP25", "EF69LP26"], tema: "Decisão coletiva", conceito: "discussão sustentada e tomada de notas",
  explicacao: "Em assembleias e debates, participantes apresentam posição, evidência e resposta às objeções. Notas eficientes registram tema, propostas, argumentos, decisões, responsáveis e prazos sem copiar tudo.",
  exemplo: "Tema: feira cultural. Proposta A: sábado. Argumento: famílias disponíveis. Decisão: consultar responsáveis até dia 10.",
  exemploAnalisado: "O registro separa proposta, justificativa e encaminhamento, permitindo acompanhar a decisão.",
  pergunta: "O que uma boa ata ou nota deve registrar?", opcoes: ["Decisões, responsáveis e prazos", "Cada palavra pronunciada", "Somente o título"], resposta: 0,
  revisao: ["Posição precisa de sustentação.", "Escuta permite responder ao argumento.", "Notas registram o essencial e os encaminhamentos."],
  missao: "Simule uma assembleia breve e produza notas com duas propostas e um encaminhamento.",
});

export const aula29 = criar(29, {
  slug: "pesquisa-e-fontes", titulo: "Pesquisa e Fontes Confiáveis", icone: "🔎",
  bncc: ["EF67LP21", "EF67LP26", "EF69LP29", "EF69LP30", "EF69LP32"], tema: "Investigação escolar", conceito: "recorte, seleção e comparação de fontes",
  explicacao: "Pesquisar começa com uma pergunta e um recorte. Fontes devem ser comparadas quanto a autoria, data, instituição, evidências e finalidade; hiperlinks ajudam a seguir referências, mas não substituem a avaliação crítica.",
  exemplo: "Pergunta: como reduzir o lixo da escola? Fontes: dados da coleta, entrevista com funcionários e página de órgão ambiental.",
  exemploAnalisado: "As fontes oferecem dados de naturezas diferentes e podem ser cruzadas para confirmar informações.",
  pergunta: "Qual critério ajuda a selecionar uma fonte?", opcoes: ["Autoria, atualidade e evidências", "Cor do site", "Primeiro resultado apenas"], resposta: 0,
  revisao: ["Pergunta define o recorte.", "Fontes precisam ser avaliadas e comparadas.", "Links devem ser lidos no contexto."],
  missao: "Escolha uma pergunta, localize três fontes e justifique por que cada uma é útil e confiável.",
});

export const aula30 = criar(30, {
  slug: "notas-resumo-e-topicos", titulo: "Notas, Resumo e Organização Tópica", icone: "📝",
  bncc: ["EF67LP22", "EF67LP24", "EF67LP25", "EF69LP31", "EF69LP34"], tema: "Síntese do conhecimento", conceito: "seleção de ideias essenciais e produção de resumo",
  explicacao: "Para resumir, identificamos tema, ideia principal e relações entre partes, grifamos apenas o essencial e organizamos tópicos do geral para o específico. O resumo reescreve com fidelidade, sem copiar blocos nem acrescentar opinião.",
  exemplo: "Texto: plantas precisam de luz, água e nutrientes. Nota: condições para crescimento — luz; água; nutrientes.",
  exemploAnalisado: "A nota conserva os conceitos centrais, elimina exemplos secundários e cria uma hierarquia clara.",
  pergunta: "O que caracteriza um resumo fiel?", opcoes: ["Ideias centrais reescritas com clareza", "Cópia integral", "Opiniões não presentes"], resposta: 0,
  revisao: ["Objetivo de leitura orienta o grifo.", "Tópicos mostram hierarquia.", "Resumo mantém o sentido do texto-base."],
  missao: "Faça notas de um texto curto e transforme-as em um resumo de três frases.",
});

export const aula31 = criar(31, {
  slug: "divulgacao-multissemiótica", titulo: "Divulgação Multissemiótica", icone: "📊",
  bncc: ["EF69LP33", "EF69LP35", "EF69LP36", "EF69LP37"], tema: "Conhecimento em vários formatos", conceito: "planejamento e produção de divulgação científica",
  explicacao: "Divulgação científica traduz conhecimento para um público definido. Texto, gráfico, esquema, imagem e áudio precisam se complementar. Planejar inclui selecionar dados, organizar explicações, citar fontes, revisar e adaptar ao suporte.",
  exemplo: "Infográfico sobre água: texto explica o consumo; gráfico compara setores; ícones mostram ações de economia.",
  exemploAnalisado: "Cada modo apresenta uma parte da informação e todos usam a mesma escala e fonte de dados.",
  pergunta: "Quando gráfico e texto funcionam bem juntos?", opcoes: ["Quando se complementam sem contradição", "Quando usam dados diferentes sem explicar", "Quando a imagem só ocupa espaço"], resposta: 0,
  revisao: ["Divulgação adapta sem distorcer.", "Modos semióticos devem se complementar.", "Fontes e revisão garantem confiabilidade."],
  missao: "Planeje um infográfico ou vídeo científico com público, dado, fonte e função de cada recurso visual.",
});

export const aula32 = criar(32, {
  slug: "seminario-e-entrevista", titulo: "Seminário e Entrevista de Pesquisa", icone: "🎤",
  bncc: ["EF69LP38", "EF69LP39", "EF69LP40", "EF69LP41"], tema: "Apresentação de pesquisa", conceito: "organização da fala, entrevista e recursos de apoio",
  explicacao: "Seminários organizam dados em abertura, desenvolvimento e síntese. Slides devem destacar, não duplicar, a fala. Entrevistas exigem recorte, pesquisa prévia, perguntas abertas e escuta para formular novas perguntas.",
  exemplo: "Slide: gráfico e título curto. Fala: explica tendência, fonte e possível causa. Entrevista: 'Que mudança você observou e por quê?'.",
  exemploAnalisado: "O visual apoia a explicação; a pergunta aberta permite resposta desenvolvida e nova investigação.",
  pergunta: "Qual slide apoia melhor uma apresentação?", opcoes: ["Pouco texto, dado legível e fonte", "Parágrafo inteiro em letra pequena", "Imagem sem relação"], resposta: 0,
  revisao: ["A fala precisa de sequência.", "Apoio visual destaca informações.", "Entrevista combina preparo e escuta."],
  missao: "Crie um slide e três perguntas abertas para apresentar uma pesquisa curta.",
});

export const aula33 = criar(33, {
  slug: "generos-cientificos-e-vozes", titulo: "Gêneros Científicos e Vozes no Texto", icone: "🧪",
  bncc: ["EF69LP42", "EF69LP43"], tema: "Arquitetura da explicação", conceito: "composição expositiva e citação de fontes",
  explicacao: "Verbete, relatório e artigo de divulgação organizam definição, descrição, causa, exemplo e comparação de modos diferentes. Citações diretas, paráfrases e verbos de dizer introduzem outras vozes e devem indicar a fonte.",
  exemplo: "Segundo o relatório da escola, o consumo caiu. O documento explica que a troca de torneiras contribuiu para o resultado.",
  exemploAnalisado: "Segundo introduz a fonte; explica que apresenta a informação em discurso indireto.",
  pergunta: "Por que indicar a fonte de uma informação?", opcoes: ["Para permitir verificação e reconhecer a autoria", "Para alongar o texto", "Para ocultar a origem"], resposta: 0,
  revisao: ["Cada gênero expositivo tem composição própria.", "Vozes podem ser citadas ou parafraseadas.", "A fonte deve ser identificada."],
  missao: "Escreva um parágrafo explicativo com uma paráfrase e indicação clara da fonte.",
});

export const aula34 = criar(34, {
  slug: "literatura-valores-e-partilha", titulo: "Literatura, Valores e Partilha", icone: "📚",
  bncc: ["EF67LP27", "EF69LP44", "EF69LP45", "EF69LP46", "EF69LP49"], tema: "Comunidade de leitores", conceito: "leitura crítica, diálogo entre artes e compartilhamento literário",
  explicacao: "Textos literários apresentam perspectivas e valores ligados a tempos e culturas. Compará-los com cinema, ilustração ou teatro permite observar recriações. Resenhas, clubes e indicações compartilham experiências com critérios e respeito.",
  exemplo: "Um conto e sua adaptação em quadrinhos mantêm o conflito, mas a HQ usa enquadramentos e cores para criar tensão.",
  exemploAnalisado: "A comparação reconhece o diálogo entre obras e explica um recurso específico da nova linguagem.",
  pergunta: "Qual comentário literário é crítico e fundamentado?", opcoes: ["Explica uma interpretação com elemento da obra", "Diz apenas 'gostei'", "Julga o leitor"], resposta: 0,
  revisao: ["Literatura expressa visões de mundo.", "Adaptações recriam por outros recursos.", "Partilha de leitura usa critérios e evidências."],
  missao: "Compare um texto literário e uma adaptação, registrando uma permanência e uma transformação.",
});

export const aula35 = criar(35, {
  slug: "narrativa-ficcional", titulo: "Engenharia da Narrativa Ficcional", icone: "🧱",
  bncc: ["EF69LP47", "EF69LP51"], tema: "Oficina de narrativa", conceito: "composição, foco narrativo e revisão da ficção",
  explicacao: "Narrativas articulam situação inicial, conflito, clímax e desfecho; narrador, tempo, espaço, personagens e discurso constroem o ponto de vista. Planejar, textualizar e revisar ajuda a manter coerência e produzir efeitos desejados.",
  exemplo: "Ao ouvir o alarme, Lia abriu a caixa; dentro, encontrou apenas um mapa com a rota apagada.",
  exemploAnalisado: "A ação inicia um conflito, limita a informação ao que Lia percebe e cria expectativa para a continuação.",
  pergunta: "Qual elemento movimenta a narrativa?", opcoes: ["O conflito enfrentado pela personagem", "A lista de palavras", "O título isolado"], resposta: 0,
  revisao: ["Conflito organiza a progressão.", "Foco narrativo controla informações.", "Revisão verifica coerência e efeito."],
  missao: "Planeje e escreva uma cena com conflito, ponto de vista definido e desfecho coerente.",
});

export const aula36 = criar(36, {
  slug: "texto-dramatico", titulo: "Do Conto ao Palco", icone: "🎭",
  bncc: ["EF67LP29", "EF69LP50", "EF69LP52"], tema: "Laboratório teatral", conceito: "estrutura, adaptação e representação de texto dramático",
  explicacao: "Texto dramático organiza personagens, atos, cenas, falas e indicações cênicas. Adaptar uma narrativa exige transformar narração em ações e diálogos; representar exige voz, gesto, espaço e ritmo coerentes com a cena.",
  exemplo: "[A luz diminui.] ANA: O mapa termina aqui. CAIO: Então precisamos escolher sem ele.",
  exemploAnalisado: "A indicação cênica orienta o ambiente e as falas transformam o impasse narrado em ação dramática.",
  pergunta: "Qual trecho orienta a encenação?", opcoes: ["[A luz diminui.]", "O título", "O número da página"], resposta: 0,
  revisao: ["Cena combina fala e ação.", "Rubrica orienta a representação.", "Adaptação preserva o núcleo e muda a forma."],
  missao: "Adapte um parágrafo narrativo para uma cena com duas falas e uma indicação cênica.",
});

export const aula37 = criar(37, {
  slug: "poesia-e-performance", titulo: "Poesia, Voz e Performance", icone: "🎙️",
  bncc: ["EF69LP48", "EF69LP53", "EF69LP54"], tema: "Som e sentido", conceito: "recursos poéticos, leitura expressiva e performance",
  explicacao: "Versos, ritmo, repetição, rima, pausas, imagens e figuras de linguagem produzem efeitos. Na leitura em voz alta, entonação, volume, gesto e velocidade devem nascer da interpretação, sem impedir a compreensão.",
  exemplo: "A chuva tamborila / no telhado sonolento.",
  exemploAnalisado: "Tamborila sugere som repetido; telhado sonolento personifica o espaço; pausas podem destacar as imagens.",
  pergunta: "Qual leitura valoriza o poema?", opcoes: ["Ritmo e pausas coerentes com o sentido", "Velocidade sem articulação", "Tom igual em todos os versos"], resposta: 0,
  revisao: ["Forma e sentido interagem.", "Figuras criam imagens e efeitos.", "Performance comunica uma interpretação."],
  missao: "Marque pausas e palavras de destaque em um poema curto e faça uma leitura expressiva.",
});

export const aula38 = criar(38, {
  slug: "ortografia-e-formacao", titulo: "Ortografia e Formação de Palavras", icone: "🔤",
  bncc: ["EF67LP32", "EF67LP34", "EF67LP35"], tema: "Oficina das palavras", conceito: "convenções ortográficas, prefixação, sufixação e composição",
  explicacao: "Escrever corretamente exige consultar regularidades e casos convencionais. Prefixos e sufixos formam palavras derivadas; a união de bases forma compostas. Prefixos de negação podem criar antônimos, conforme o uso registrado.",
  exemplo: "possível → impossível; feliz → felicidade; guarda + chuva → guarda-chuva.",
  exemploAnalisado: "Impossível recebe prefixo de negação; felicidade recebe sufixo; guarda-chuva combina duas bases.",
  pergunta: "Qual palavra é formada por composição?", opcoes: ["guarda-chuva", "impossível", "felicidade"], resposta: 0,
  revisao: ["Ortografia segue convenções.", "Afixos criam derivadas.", "Composição reúne bases."],
  missao: "Monte um quadro com duas palavras prefixadas, duas sufixadas e duas compostas, conferindo a grafia.",
});

export const aula39 = criar(39, {
  slug: "pontuacao-com-sentido", titulo: "Pontuação com Sentido", icone: "❗",
  bncc: ["EF67LP33"], tema: "Sinais que organizam", conceito: "pontuação adequada à estrutura e à intenção",
  explicacao: "Pontuação separa unidades, organiza enumerações, marca falas e ajuda a construir sentidos. Não se separa sujeito de verbo por vírgula; dois-pontos podem anunciar explicação, lista ou fala.",
  exemplo: "A equipe levou três itens: cartolina, canetas e fita. Depois, iniciou o painel.",
  exemploAnalisado: "Os dois-pontos anunciam a lista; as vírgulas separam itens e o adjunto deslocado 'Depois'.",
  pergunta: "Por que há dois-pontos na primeira frase?", opcoes: ["Para anunciar a enumeração", "Para separar sujeito e verbo", "Para encerrar uma pergunta"], resposta: 0,
  revisao: ["Pontuação reflete a estrutura.", "Vírgula separa itens e termos deslocados.", "Dois-pontos anunciam informação."],
  missao: "Revise um parágrafo próprio e explique o uso de três sinais de pontuação.",
});

export const aula40 = criar(40, {
  slug: "oracao-e-periodo", titulo: "Oração, Período e Sintagmas", icone: "⚙️",
  bncc: ["EF06LP08", "EF06LP09", "EF06LP10"], tema: "Arquitetura da frase", conceito: "núcleo verbal, período simples ou composto e sintagmas",
  explicacao: "Oração se organiza em torno de um núcleo verbal; período pode ter uma oração ou várias. Sintagmas nominais têm núcleo nominal e sintagmas verbais têm núcleo verbal, formando blocos que desempenham funções.",
  exemplo: "Os jovens cientistas apresentaram o projeto e responderam às perguntas.",
  exemploAnalisado: "Há duas orações, com núcleos apresentaram e responderam; 'os jovens cientistas' é sintagma nominal.",
  pergunta: "Quantas orações há no exemplo?", opcoes: ["duas", "uma", "três"], resposta: 0,
  revisao: ["Verbo organiza a oração.", "Número de orações distingue períodos.", "Sintagmas formam blocos de sentido."],
  missao: "Separe três períodos em orações e identifique um sintagma nominal e um verbal em cada um.",
});

export const aula41 = criar(41, {
  slug: "concordancia-e-coesao", titulo: "Concordância e Coesão na Revisão", icone: "✅",
  bncc: ["EF06LP06", "EF06LP11", "EF06LP12", "EF67LP36"], tema: "Texto conectado e revisado", conceito: "concordância, coesão referencial e sequencial",
  explicacao: "Na revisão, verbo concorda com o núcleo do sujeito e nomes concordam em gênero e número. Pronomes, sinônimos e expressões retomam referentes; conectores ordenam ideias sem repetição ambígua.",
  exemplo: "As pesquisadoras apresentaram os resultados. Elas os explicaram com clareza e, depois, responderam às perguntas.",
  exemploAnalisado: "Apresentaram concorda com pesquisadoras; elas e os retomam termos; depois ordena as ações.",
  pergunta: "Qual palavra retoma 'as pesquisadoras'?", opcoes: ["Elas", "resultados", "depois"], resposta: 0,
  revisao: ["Concordância liga núcleos e formas.", "Retomadas evitam repetição.", "Conectores organizam sequência."],
  missao: "Revise um texto curto, corrigindo concordância e destacando três mecanismos de coesão.",
});

export const aula42 = criar(42, {
  slug: "sequencias-figuras-e-variedades", titulo: "Sequências, Figuras e Variedades", icone: "🌐",
  bncc: ["EF67LP37", "EF67LP38", "EF69LP55"], tema: "Língua em uso", conceito: "sequências textuais, figuras de linguagem e variação linguística",
  explicacao: "Textos combinam descrição, exposição, causa, prescrição e ordem de eventos. Figuras como comparação, metáfora e personificação ampliam sentidos. Variedades linguísticas são legítimas; a norma-padrão é uma variedade usada em situações formais, não medida de inteligência.",
  exemplo: "A cidade acordou cedo porque a feira começou às seis. No relatório: 'Instale as barracas antes da abertura'.",
  exemploAnalisado: "Acordou personifica a cidade; porque marca causa; a forma imperativa organiza uma prescrição.",
  pergunta: "Qual análise respeita a variação linguística?", opcoes: ["Adequar a linguagem à situação sem discriminar falantes", "Chamar uma variedade de inferior", "Usar sempre o mesmo registro"], resposta: 0,
  revisao: ["Sequências cumprem funções diferentes.", "Figuras produzem efeitos de sentido.", "Adequação não justifica preconceito linguístico."],
  missao: "Reescreva uma mensagem para contexto informal e formal e explique as escolhas sem julgar as variedades.",
});

export const aulas20a42 = [aula20, aula21, aula22, aula23, aula24, aula25, aula26, aula27, aula28, aula29, aula30, aula31, aula32, aula33, aula34, aula35, aula36, aula37, aula38, aula39, aula40, aula41, aula42];
