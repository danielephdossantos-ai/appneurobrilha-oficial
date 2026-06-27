
-- 1) Limpar templates genéricos não-matemática e mapeamentos antigos
DELETE FROM bncc_template_map WHERE template_id IN (SELECT id FROM pedagogical_templates WHERE disciplina <> 'Matemática');
DELETE FROM pedagogical_templates WHERE disciplina <> 'Matemática';

-- 2) Sequência didática padrão (9 passos) reutilizada
-- Inserir templates ricos por disciplina/tema

INSERT INTO pedagogical_templates (slug, name, disciplina, serie, metodo, sequencia_didatica, exemplos, erros_comuns, pratica_guiada, exercicios, desafio, revisao, avaliacao, tags) VALUES

-- ============ LÍNGUA PORTUGUESA ============
('lp-analise-linguistica','LP — Análise Linguística (classes, concordância, ortografia)','Língua Portuguesa','1º ao 9º',
'Partir da observação de frases reais, identificar a estrutura, nomear a regra e aplicar em produção própria.',
'[{"step":"Motivação","detail":"Ler uma frase curta e provocar: por que essa palavra muda de forma?"},{"step":"Observação","detail":"Comparar pares de frases destacando a palavra-alvo (ex.: menino/meninos)."},{"step":"Explicação","detail":"Nomear a classe gramatical / regra com exemplo visual em quadro."},{"step":"Exemplo resolvido","detail":"Resolver uma frase modelo identificando a estrutura passo a passo."},{"step":"Prática guiada","detail":"Completar frases com apoio de dicas."},{"step":"Treino","detail":"Identificar/corrigir em 3 frases novas."},{"step":"Desafio","detail":"Reescrever um trecho aplicando a regra."},{"step":"Resumo","detail":"Mapa: o que é, como reconheço, exemplo."},{"step":"Domínio","detail":"Aplicar a regra na própria escrita."}]',
'[{"question":"Identifique o substantivo e o adjetivo em: \"O cachorro pequeno latiu alto.\"","resolution":[{"line":"Substantivo = nome de ser → cachorro"},{"line":"Adjetivo = característica do substantivo → pequeno"},{"line":"\"alto\" caracteriza o verbo latiu → advérbio"}],"answer":"Substantivo: cachorro; Adjetivo: pequeno","why":"Substantivo nomeia; adjetivo qualifica o substantivo."}]',
'[{"erro":"Confundir adjetivo com advérbio","correcao":"Pergunte: caracteriza um SER (adj.) ou uma AÇÃO (adv.)?"}]',
'[{"prompt":"Em \"As meninas alegres cantaram.\", qual é o adjetivo?","hint":"Procure a palavra que descreve as meninas.","options":[{"text":"alegres","isCorrect":true,"reason":"Caracteriza \"meninas\"."},{"text":"cantaram","isCorrect":false,"reason":"É verbo, indica ação."},{"text":"meninas","isCorrect":false,"reason":"É substantivo, nomeia o ser."}]}]',
'[{"prompt":"Classifique: livro, correr, bonito.","answer":"substantivo, verbo, adjetivo"},{"prompt":"Concordância: \"Os aluno___ chegou___.\"","answer":"Os alunos chegaram."},{"prompt":"Ortografia: viage_ ou viagem?","answer":"viagem (substantivo com m)"}]',
'[{"contexto":"Você é editor de um jornal escolar. Reescreva: \"as menina foi pra escola e estudo muito\" corrigindo concordância, ortografia e pontuação."}]',
'[{"ponto":"Substantivo nomeia, adjetivo qualifica, verbo indica ação."},{"ponto":"Concordância: artigo, substantivo e verbo se ajustam em número."},{"ponto":"Boa escrita = observar + revisar."}]',
'{"criterio":"Identifica classes e corrige concordância em frases novas."}',
'{"lp","analise","gramatica"}'),

('lp-leitura-compreensao','LP — Leitura e Compreensão de Texto','Língua Portuguesa','1º ao 9º',
'Ler com propósito: localizar informação, inferir, relacionar partes e avaliar o texto.',
'[{"step":"Motivação","detail":"Apresentar o título e prever do que trata o texto."},{"step":"Observação","detail":"Ler o texto identificando palavras-chave."},{"step":"Explicação","detail":"Mostrar 3 níveis de pergunta: localizar, inferir, opinar."},{"step":"Exemplo resolvido","detail":"Responder uma pergunta de cada tipo destacando trechos."},{"step":"Prática guiada","detail":"Responder com apoio do professor."},{"step":"Treino","detail":"3 perguntas independentes."},{"step":"Desafio","detail":"Criar uma pergunta inferencial sobre o texto."},{"step":"Resumo","detail":"Quadro: ideia central, fatos, conclusão."},{"step":"Domínio","detail":"Resumir o texto em 3 frases."}]',
'[{"question":"Texto: \"A formiga trabalhou todo o verão. No inverno, tinha comida.\" Qual a lição?","resolution":[{"line":"Localizar: o que ela fez no verão? Trabalhou."},{"line":"Inferir: por que ela tinha comida no inverno? Porque guardou."},{"line":"Lição: planejar evita falta."}],"answer":"Planejar/poupar evita dificuldades futuras."}]',
'[{"erro":"Responder com opinião quando a pergunta pede localizar","correcao":"Volte ao texto e copie o trecho exato."}]',
'[{"prompt":"\"O sol nasceu e Pedro acordou cedo.\" O que aconteceu primeiro?","hint":"Procure a ordem dos fatos.","options":[{"text":"O sol nasceu","isCorrect":true,"reason":"É a primeira ação relatada."},{"text":"Pedro acordou","isCorrect":false,"reason":"Acontece depois."},{"text":"Aconteceram juntos","isCorrect":false,"reason":"O \"e\" indica sequência."}]}]',
'[{"prompt":"Qual é a ideia central do texto que você leu?","answer":"Resposta com tema principal em 1 frase."},{"prompt":"Que palavra do texto significa \"feliz\"?","answer":"Procurar sinônimo no texto."},{"prompt":"Por que o personagem agiu assim? (inferência)","answer":"Justificar com pista do texto."}]',
'[{"contexto":"Leia uma notícia curta e escreva: 1 fato, 1 inferência, 1 opinião sua."}]',
'[{"ponto":"Localizar = está escrito."},{"ponto":"Inferir = nas entrelinhas."},{"ponto":"Opinar = com base no texto."}]',
'{"criterio":"Responde 3 tipos de pergunta com evidência."}',
'{"lp","leitura"}'),

('lp-producao-textos','LP — Produção de Textos','Língua Portuguesa','1º ao 9º',
'Planejar → escrever → revisar. Estrutura clara: começo, meio e fim, com coesão.',
'[{"step":"Motivação","detail":"Definir gênero, leitor e propósito do texto."},{"step":"Observação","detail":"Ler um modelo do mesmo gênero e mapear sua estrutura."},{"step":"Explicação","detail":"Mostrar como se organiza: introdução, desenvolvimento, conclusão."},{"step":"Exemplo resolvido","detail":"Planejar um texto com tópicos antes de escrever."},{"step":"Prática guiada","detail":"Escrever a introdução juntos."},{"step":"Treino","detail":"Continuar o texto sozinho."},{"step":"Desafio","detail":"Adaptar o mesmo conteúdo para outro gênero."},{"step":"Resumo","detail":"Checklist: clareza, conectivos, pontuação, ortografia."},{"step":"Domínio","detail":"Revisar e reescrever a versão final."}]',
'[{"question":"Planeje uma narrativa: \"Um dia diferente na escola\".","resolution":[{"line":"Personagem: quem? Maria"},{"line":"Conflito: o que aconteceu? Sumiu a mochila"},{"line":"Resolução: como terminou? Encontrou no refeitório"}],"answer":"Plano com 3 partes: situação, conflito, desfecho."}]',
'[{"erro":"Escrever sem planejar","correcao":"Faça 3 tópicos antes de começar."},{"erro":"Frase muito longa sem pontuação","correcao":"Quebre em frases menores."}]',
'[{"prompt":"Qual conectivo liga melhor: \"Choveu muito. ___ a festa foi cancelada.\"?","hint":"Indica consequência.","options":[{"text":"Por isso","isCorrect":true,"reason":"Indica causa-consequência."},{"text":"Mas","isCorrect":false,"reason":"Oposição não cabe."},{"text":"Ou","isCorrect":false,"reason":"Alternativa não cabe."}]}]',
'[{"prompt":"Liste 3 tópicos para uma carta ao diretor.","answer":"Saudação, pedido com motivo, despedida."},{"prompt":"Revise: \"foi no parque e brinco muito.\"","answer":"Fui ao parque e brinquei muito."},{"prompt":"Crie um título para uma notícia sobre reciclagem.","answer":"Título curto e informativo."}]',
'[{"contexto":"Escreva uma carta de 6 linhas convidando alguém para uma feira de ciências, com data, local e motivo."}]',
'[{"ponto":"Planejar evita travar."},{"ponto":"Conectivos dão clareza."},{"ponto":"Revisar é parte de escrever."}]',
'{"criterio":"Produz texto coerente do gênero pedido."}',
'{"lp","producao"}'),

('lp-oralidade','LP — Oralidade e Escuta Ativa','Língua Portuguesa','1º ao 9º',
'Falar com clareza adequando linguagem ao contexto; ouvir registrando pontos-chave.',
'[{"step":"Motivação","detail":"Comparar: como falo com amigo x com diretor?"},{"step":"Observação","detail":"Assistir/ouvir um trecho e listar marcas de formalidade."},{"step":"Explicação","detail":"Registro formal x informal; volume, ritmo, escuta."},{"step":"Exemplo resolvido","detail":"Reformular uma fala informal em formal."},{"step":"Prática guiada","detail":"Apresentar 30s sobre tema dado, com apoio."},{"step":"Treino","detail":"Apresentar para a turma."},{"step":"Desafio","detail":"Debate curto seguindo regras de turno."},{"step":"Resumo","detail":"Checklist: olhar, pausa, vocabulário."},{"step":"Domínio","detail":"Avaliar fala de colega com critérios."}]',
'[{"question":"Reformule: \"Aí, ô professor, dá uma força aí?\"","resolution":[{"line":"Trocar gírias por palavras neutras."},{"line":"Acrescentar vocativo educado."}],"answer":"\"Professor, poderia me ajudar, por favor?\""}]',
'[{"erro":"Falar olhando para o chão","correcao":"Encare o público, fale devagar."}]',
'[{"prompt":"Qual é uma boa forma de iniciar uma apresentação?","hint":"Foco em saudação e tema.","options":[{"text":"\"Bom dia! Hoje vou falar sobre...\"","isCorrect":true,"reason":"Saúda e anuncia o tema."},{"text":"\"E aí pessoal, ó...\"","isCorrect":false,"reason":"Informal demais para apresentação."},{"text":"Começar direto sem saudação","isCorrect":false,"reason":"Falta acolhimento."}]}]',
'[{"prompt":"Cite 3 regras de escuta em um debate.","answer":"Esperar a vez, olhar para quem fala, anotar."},{"prompt":"Dê uma versão formal de \"tá osso\".","answer":"Está difícil."},{"prompt":"O que é vocativo?","answer":"Chamamento direto (Maria, professor...)."}]',
'[{"contexto":"Apresente em 1 minuto um livro que você leu, usando registro formal."}]',
'[{"ponto":"Adequar linguagem ao contexto."},{"ponto":"Escutar = ouvir + registrar."},{"ponto":"Postura comunica tanto quanto a palavra."}]',
'{"criterio":"Apresenta com clareza e escuta o colega."}',
'{"lp","oralidade"}'),

-- ============ CIÊNCIAS ============
('ci-vida-evolucao','Ciências — Vida e Evolução','Ciências','1º ao 9º',
'Observar seres vivos, levantar hipóteses, testar com evidências e concluir.',
'[{"step":"Motivação","detail":"Pergunta-problema: por que a planta cresce em direção à luz?"},{"step":"Observação","detail":"Observar imagens/seres reais e descrever características."},{"step":"Explicação","detail":"Apresentar conceito (célula, ecossistema, evolução) com esquema."},{"step":"Exemplo resolvido","detail":"Aplicar o conceito em um caso (cadeia alimentar do lago)."},{"step":"Prática guiada","detail":"Classificar seres por critério dado."},{"step":"Treino","detail":"3 exercícios de identificação/relação."},{"step":"Desafio","detail":"Prever o que acontece se um elo da cadeia desaparece."},{"step":"Resumo","detail":"Mapa conceitual: ser vivo → ambiente → relação."},{"step":"Domínio","detail":"Explicar com vocabulário científico."}]',
'[{"question":"Em uma cadeia: capim → coelho → raposa. O que acontece se sumir o coelho?","resolution":[{"line":"Capim cresce sem controle (produtor sem consumidor)."},{"line":"Raposa fica sem alimento e pode migrar/morrer."},{"line":"Desequilíbrio do ecossistema."}],"answer":"Capim aumenta, raposa diminui — desequilíbrio."}]',
'[{"erro":"Achar que planta come pela raiz","correcao":"Planta faz fotossíntese pelas folhas; raiz absorve água e sais."}]',
'[{"prompt":"Qual é um ser PRODUTOR?","hint":"Faz seu próprio alimento.","options":[{"text":"Árvore","isCorrect":true,"reason":"Faz fotossíntese."},{"text":"Leão","isCorrect":false,"reason":"É consumidor."},{"text":"Cogumelo","isCorrect":false,"reason":"É decompositor."}]}]',
'[{"prompt":"Classifique: onça, alface, fungo (produtor/consumidor/decompositor).","answer":"consumidor, produtor, decompositor"},{"prompt":"Cite 2 características dos seres vivos.","answer":"Nascem, crescem, reproduzem, morrem."},{"prompt":"O que é habitat?","answer":"Lugar onde o ser vivo vive."}]',
'[{"contexto":"Um lago foi poluído. Descreva 3 efeitos sobre peixes, plantas aquáticas e aves."}]',
'[{"ponto":"Seres vivos interagem entre si e com o ambiente."},{"ponto":"Cadeia alimentar transfere energia."},{"ponto":"Equilíbrio ecológico depende de cada elo."}]',
'{"criterio":"Explica relações ecológicas com evidência."}',
'{"ciencias","vida"}'),

('ci-materia-energia','Ciências — Matéria e Energia','Ciências','1º ao 9º',
'Investigar propriedades da matéria e transformações de energia com experimentos simples.',
'[{"step":"Motivação","detail":"Por que o gelo derrete? Para onde vai a água da poça?"},{"step":"Observação","detail":"Observar estados físicos e mudanças com exemplos."},{"step":"Explicação","detail":"Estados (sólido/líquido/gasoso) e mudanças (fusão, ebulição...)."},{"step":"Exemplo resolvido","detail":"Esquema do ciclo da água com setas."},{"step":"Prática guiada","detail":"Nomear a mudança ocorrida em cada situação."},{"step":"Treino","detail":"3 situações com identificação da transformação."},{"step":"Desafio","detail":"Explicar por que roupa seca no varal."},{"step":"Resumo","detail":"Quadro com nomes das mudanças."},{"step":"Domínio","detail":"Aplicar conceitos a fenômenos do cotidiano."}]',
'[{"question":"Água da chuva vira nuvem. Qual mudança?","resolution":[{"line":"Líquido → gasoso"},{"line":"Por aquecimento solar"},{"line":"Nome: evaporação"}],"answer":"Evaporação"}]',
'[{"erro":"Confundir derreter com evaporar","correcao":"Derreter = sólido→líquido; evaporar = líquido→gás."}]',
'[{"prompt":"Gelo virando água é qual mudança?","hint":"Sólido para líquido.","options":[{"text":"Fusão","isCorrect":true,"reason":"Sólido→líquido."},{"text":"Solidificação","isCorrect":false,"reason":"É o contrário."},{"text":"Evaporação","isCorrect":false,"reason":"Vai para gás."}]}]',
'[{"prompt":"Vapor virando gota na tampa da panela: nome?","answer":"Condensação"},{"prompt":"Cite 3 estados físicos.","answer":"Sólido, líquido, gasoso"},{"prompt":"Energia que vem do Sol chega como?","answer":"Luz e calor"}]',
'[{"contexto":"Explique o ciclo da água nomeando 4 mudanças de estado envolvidas."}]',
'[{"ponto":"Matéria muda de estado conforme energia recebida/perdida."},{"ponto":"Cada mudança tem nome."},{"ponto":"Energia se transforma, não desaparece."}]',
'{"criterio":"Identifica mudança de estado em situação nova."}',
'{"ciencias","materia"}'),

('ci-terra-universo','Ciências — Terra e Universo','Ciências','1º ao 9º',
'Relacionar movimentos da Terra com fenômenos observáveis (dia/noite, estações, fases da Lua).',
'[{"step":"Motivação","detail":"Por que existe dia e noite?"},{"step":"Observação","detail":"Modelo: globo + lanterna."},{"step":"Explicação","detail":"Rotação (24h) → dia/noite; Translação (365d) → ano e estações."},{"step":"Exemplo resolvido","detail":"Mostrar com modelo qual lado está iluminado."},{"step":"Prática guiada","detail":"Indicar onde é dia/noite no esquema."},{"step":"Treino","detail":"3 perguntas sobre movimentos."},{"step":"Desafio","detail":"Explicar por que verão em um hemisfério = inverno no outro."},{"step":"Resumo","detail":"Tabela: movimento → tempo → consequência."},{"step":"Domínio","detail":"Aplicar a fenômenos novos (fases da Lua)."}]',
'[{"question":"Por que vemos diferentes fases da Lua?","resolution":[{"line":"Lua orbita a Terra."},{"line":"Sol ilumina sempre metade dela."},{"line":"Vemos partes diferentes iluminadas → fases."}],"answer":"Pela posição relativa Lua-Terra-Sol."}]',
'[{"erro":"Achar que o Sol gira em volta da Terra","correcao":"Quem gira é a Terra (rotação)."}]',
'[{"prompt":"O que causa o dia e a noite?","hint":"Movimento em 24h.","options":[{"text":"Rotação da Terra","isCorrect":true,"reason":"Gira em 24h em torno do próprio eixo."},{"text":"Translação","isCorrect":false,"reason":"Causa as estações."},{"text":"Movimento da Lua","isCorrect":false,"reason":"Causa as fases da Lua."}]}]',
'[{"prompt":"Quanto dura a translação?","answer":"365 dias (1 ano)"},{"prompt":"Cite as 4 estações.","answer":"Primavera, verão, outono, inverno"},{"prompt":"Astro luminoso ou iluminado: a Lua é?","answer":"Iluminada"}]',
'[{"contexto":"Em junho é verão no Hemisfério Norte. Explique por quê e o que ocorre no Hemisfério Sul."}]',
'[{"ponto":"Rotação → dia/noite."},{"ponto":"Translação + inclinação → estações."},{"ponto":"Fases da Lua = geometria Sol-Terra-Lua."}]',
'{"criterio":"Relaciona movimento e fenômeno corretamente."}',
'{"ciencias","astronomia"}'),

-- ============ HISTÓRIA ============
('hi-eu-comunidade','História — Eu, Família e Comunidade','História','1º ao 3º',
'Reconhecer-se como sujeito histórico: tempo pessoal, família, escola e bairro.',
'[{"step":"Motivação","detail":"Quem é você? De onde veio sua família?"},{"step":"Observação","detail":"Linha do tempo pessoal com fotos/eventos."},{"step":"Explicação","detail":"Tempo: ontem, hoje, amanhã; passado/presente."},{"step":"Exemplo resolvido","detail":"Organizar 3 eventos da vida em ordem."},{"step":"Prática guiada","detail":"Ordenar imagens em sequência temporal."},{"step":"Treino","detail":"3 atividades de ordem cronológica."},{"step":"Desafio","detail":"Entrevistar familiar sobre como era a escola antes."},{"step":"Resumo","detail":"Eu faço parte de uma história maior."},{"step":"Domínio","detail":"Contar a própria história em 3 fatos."}]',
'[{"question":"Coloque em ordem: 1) entrei na escola 2) nasci 3) aprendi a andar","resolution":[{"line":"Primeiro nascer"},{"line":"Depois andar"},{"line":"Depois ir à escola"}],"answer":"2 → 3 → 1"}]',
'[{"erro":"Confundir hoje com ontem","correcao":"Use marcador: ontem (passou), hoje (agora), amanhã (vai acontecer)."}]',
'[{"prompt":"O que aconteceu PRIMEIRO?","hint":"Pense na sequência da vida.","options":[{"text":"Nascer","isCorrect":true,"reason":"É o primeiro fato."},{"text":"Estudar","isCorrect":false,"reason":"Depois."},{"text":"Trabalhar","isCorrect":false,"reason":"Depois."}]}]',
'[{"prompt":"Cite 2 pessoas da sua família.","answer":"Resposta pessoal"},{"prompt":"Quem trabalha na sua escola?","answer":"Professores, diretor, equipe"},{"prompt":"O que tinha no bairro há 20 anos que hoje não tem?","answer":"Resposta com pesquisa"}]',
'[{"contexto":"Desenhe sua linha do tempo com 4 fatos importantes da sua vida."}]',
'[{"ponto":"Cada pessoa tem história."},{"ponto":"Tempo se organiza em antes/depois."},{"ponto":"Família e comunidade fazem parte da minha história."}]',
'{"criterio":"Organiza fatos em ordem cronológica."}',
'{"historia","anos-iniciais"}'),

('hi-brasil-colonia-imperio','História — Brasil: Colônia e Império','História','5º ao 8º',
'Compreender chegada europeia, escravidão, independência e Império usando fontes.',
'[{"step":"Motivação","detail":"Por que falamos português no Brasil?"},{"step":"Observação","detail":"Analisar mapa das navegações e fontes (carta de Caminha)."},{"step":"Explicação","detail":"Colonização, economia (açúcar, ouro), trabalho escravizado, independência (1822), Império."},{"step":"Exemplo resolvido","detail":"Linha do tempo 1500-1889 com 5 marcos."},{"step":"Prática guiada","detail":"Relacionar evento à data."},{"step":"Treino","detail":"3 questões cronológicas e causais."},{"step":"Desafio","detail":"Comparar visão do colonizador e do colonizado."},{"step":"Resumo","detail":"Mapa: causa → fato → consequência."},{"step":"Domínio","detail":"Argumentar sobre legado da escravidão."}]',
'[{"question":"Por que a Independência ocorreu em 1822?","resolution":[{"line":"Família real veio em 1808 (fugindo de Napoleão)."},{"line":"Pressões internas e externas por autonomia."},{"line":"D. Pedro proclamou independência."}],"answer":"Soma de fatores internos e externos culminou em 1822."}]',
'[{"erro":"Achar que o Brasil foi \"descoberto\" vazio","correcao":"Já existiam povos indígenas com sociedades complexas."}]',
'[{"prompt":"Quem proclamou a Independência do Brasil?","hint":"Filho do rei de Portugal.","options":[{"text":"D. Pedro I","isCorrect":true,"reason":"Em 7/9/1822."},{"text":"Tiradentes","isCorrect":false,"reason":"Liderou a Inconfidência (antes)."},{"text":"D. João VI","isCorrect":false,"reason":"Era o pai, rei de Portugal."}]}]',
'[{"prompt":"Principal produto do período colonial inicial?","answer":"Açúcar (depois ouro)"},{"prompt":"O que foi a Lei Áurea?","answer":"Aboliu a escravidão em 1888"},{"prompt":"Cite um povo indígena.","answer":"Tupinambá, Guarani, Yanomami..."}]',
'[{"contexto":"Compare a vida de um senhor de engenho e de uma pessoa escravizada no séc. XVII em 5 frases."}]',
'[{"ponto":"Brasil colonial = economia exportadora + trabalho escravizado."},{"ponto":"Independência tem múltiplas causas."},{"ponto":"Legado social ainda hoje presente."}]',
'{"criterio":"Relaciona causas, fatos e consequências."}',
'{"historia","brasil"}'),

('hi-republica-seculoxx','História — República e Brasil no Século XX','História','8º e 9º',
'Analisar Proclamação, Era Vargas, ditadura e redemocratização com causas e consequências.',
'[{"step":"Motivação","detail":"Por que comemoramos a República em 15/11?"},{"step":"Observação","detail":"Imagens e charges de cada período."},{"step":"Explicação","detail":"Proclamação (1889), Vargas (1930-45), ditadura (1964-85), redemocratização."},{"step":"Exemplo resolvido","detail":"Linha do tempo com 5 eventos-chave."},{"step":"Prática guiada","detail":"Relacionar evento → presidente/contexto."},{"step":"Treino","detail":"3 questões de causa-consequência."},{"step":"Desafio","detail":"Avaliar conquistas da Constituição de 1988."},{"step":"Resumo","detail":"Tabela: período | característica | legado."},{"step":"Domínio","detail":"Argumentar sobre importância da democracia."}]',
'[{"question":"O que foi a Era Vargas?","resolution":[{"line":"Período 1930-1945 sob Getúlio Vargas."},{"line":"Centralização, CLT (1943), industrialização."},{"line":"Estado Novo (1937-45) foi ditatorial."}],"answer":"Período de centralização, trabalho regulamentado e parte autoritária."}]',
'[{"erro":"Confundir Vargas com a ditadura militar","correcao":"São períodos diferentes (1930-45 x 1964-85)."}]',
'[{"prompt":"Em que ano foi promulgada a atual Constituição?","hint":"Pós-redemocratização.","options":[{"text":"1988","isCorrect":true,"reason":"Constituição Cidadã."},{"text":"1964","isCorrect":false,"reason":"Início da ditadura."},{"text":"1822","isCorrect":false,"reason":"Independência."}]}]',
'[{"prompt":"O que foi a CLT?","answer":"Consolidação das Leis do Trabalho (1943)"},{"prompt":"Quanto durou a ditadura militar?","answer":"21 anos (1964-1985)"},{"prompt":"Cite um direito da Constituição de 1988.","answer":"Voto direto, saúde, educação..."}]',
'[{"contexto":"Compare liberdade de imprensa na ditadura e na democracia, dando 2 exemplos."}]',
'[{"ponto":"República não é sinônimo de democracia."},{"ponto":"Direitos foram conquistados ao longo do século."},{"ponto":"Democracia exige participação."}]',
'{"criterio":"Distingue períodos e seus legados."}',
'{"historia","republica"}'),

('hi-mundo-moderno-contemporaneo','História — Mundo Moderno e Contemporâneo','História','7º ao 9º',
'Renascimento, Revoluções, Guerras Mundiais e Globalização: causas e consequências.',
'[{"step":"Motivação","detail":"Como o mundo virou \"global\"?"},{"step":"Observação","detail":"Mapas de impérios e fluxos."},{"step":"Explicação","detail":"Renascimento → Revolução Industrial → I/II Guerras → Globalização."},{"step":"Exemplo resolvido","detail":"Esquema causa-efeito da I Guerra."},{"step":"Prática guiada","detail":"Ordenar 5 eventos do século XX."},{"step":"Treino","detail":"3 questões de relação."},{"step":"Desafio","detail":"Avaliar 2 impactos da globalização hoje."},{"step":"Resumo","detail":"Linha do tempo séc. XVI-XXI."},{"step":"Domínio","detail":"Argumentar com fonte."}]',
'[{"question":"O que provocou a I Guerra Mundial?","resolution":[{"line":"Disputas imperialistas + alianças militares."},{"line":"Estopim: assassinato em Sarajevo (1914)."},{"line":"Sistema de alianças puxou todos."}],"answer":"Tensões imperialistas + estopim em Sarajevo."}]',
'[{"erro":"Confundir I e II Guerra","correcao":"I: 1914-18 (alianças); II: 1939-45 (nazifascismo)."}]',
'[{"prompt":"Em que século ocorreu a Revolução Industrial?","hint":"Começou na Inglaterra.","options":[{"text":"XVIII","isCorrect":true,"reason":"Iniciou em meados do séc. XVIII."},{"text":"XV","isCorrect":false,"reason":"Foi o Renascimento."},{"text":"XX","isCorrect":false,"reason":"Foi a Globalização."}]}]',
'[{"prompt":"Cite 2 países do Eixo na II Guerra.","answer":"Alemanha, Itália, Japão"},{"prompt":"O que foi a Guerra Fria?","answer":"Disputa EUA x URSS (1947-1991)"},{"prompt":"Renascimento valorizou o quê?","answer":"Humanismo, ciência, arte clássica"}]',
'[{"contexto":"Liste 3 mudanças no cotidiano causadas pela Revolução Industrial."}]',
'[{"ponto":"História global se conecta."},{"ponto":"Cada época herda da anterior."},{"ponto":"Tecnologia transforma sociedade."}]',
'{"criterio":"Relaciona eventos do mundo moderno-contemporâneo."}',
'{"historia","mundo"}'),

-- ============ GEOGRAFIA ============
('ge-sujeito-lugar','Geografia — O Sujeito e seu Lugar no Mundo','Geografia','1º ao 5º',
'Reconhecer-se no espaço: casa, escola, bairro, cidade.',
'[{"step":"Motivação","detail":"Onde você mora? Como descreve seu bairro?"},{"step":"Observação","detail":"Mapa do bairro com pontos de referência."},{"step":"Explicação","detail":"Lugar, paisagem, referências espaciais (direita, esquerda, perto, longe)."},{"step":"Exemplo resolvido","detail":"Traçar trajeto casa-escola."},{"step":"Prática guiada","detail":"Marcar pontos no croqui."},{"step":"Treino","detail":"3 exercícios de localização."},{"step":"Desafio","detail":"Criar mapa do quarto com legenda."},{"step":"Resumo","detail":"Eu pertenço a um lugar com características."},{"step":"Domínio","detail":"Descrever um lugar com 4 elementos."}]',
'[{"question":"Como ir da escola até a padaria 2 quarteirões à direita?","resolution":[{"line":"Sair pela porta."},{"line":"Virar à direita."},{"line":"Andar 2 quadras."}],"answer":"Direita → 2 quadras."}]',
'[{"erro":"Confundir direita e esquerda no mapa","correcao":"Posicione-se mentalmente dentro do mapa."}]',
'[{"prompt":"O que é uma paisagem?","hint":"Tudo que vemos em um lugar.","options":[{"text":"Conjunto de elementos visíveis de um lugar","isCorrect":true,"reason":"Naturais + humanos."},{"text":"Só árvores","isCorrect":false,"reason":"Incompleto."},{"text":"Só edifícios","isCorrect":false,"reason":"Incompleto."}]}]',
'[{"prompt":"Cite 2 pontos de referência do seu bairro.","answer":"Resposta pessoal"},{"prompt":"O que é uma legenda em um mapa?","answer":"Explica os símbolos"},{"prompt":"Paisagem natural ou cultural: prédios?","answer":"Cultural"}]',
'[{"contexto":"Desenhe o croqui do trajeto casa-escola com 3 pontos de referência."}]',
'[{"ponto":"Lugar tem identidade."},{"ponto":"Mapa precisa de legenda."},{"ponto":"Eu sou parte do espaço."}]',
'{"criterio":"Localiza-se e representa espaço próximo."}',
'{"geografia","lugar"}'),

('ge-formas-representacao','Geografia — Formas de Representação e Cartografia','Geografia','3º ao 9º',
'Ler e construir mapas: legenda, escala, orientação (rosa dos ventos).',
'[{"step":"Motivação","detail":"Como o GPS sabe onde estamos?"},{"step":"Observação","detail":"Comparar foto aérea e mapa."},{"step":"Explicação","detail":"Elementos do mapa: título, legenda, escala, orientação."},{"step":"Exemplo resolvido","detail":"Calcular distância real com escala 1:1000."},{"step":"Prática guiada","detail":"Identificar elementos em mapa dado."},{"step":"Treino","detail":"3 mapas com perguntas."},{"step":"Desafio","detail":"Construir mapa simples com 4 elementos."},{"step":"Resumo","detail":"Mapa = redução proporcional do espaço."},{"step":"Domínio","detail":"Interpretar mapa novo."}]',
'[{"question":"Em um mapa 1:1000, 5 cm equivalem a quantos metros reais?","resolution":[{"line":"1 cm = 1000 cm = 10 m"},{"line":"5 cm = 50 m"}],"answer":"50 metros"}]',
'[{"erro":"Esquecer a escala","correcao":"Sem escala, não dá para medir distância real."}]',
'[{"prompt":"O Norte é representado normalmente?","hint":"Rosa dos ventos.","options":[{"text":"Para cima","isCorrect":true,"reason":"Convenção cartográfica."},{"text":"Para baixo","isCorrect":false,"reason":"Seria o Sul."},{"text":"À direita","isCorrect":false,"reason":"Seria o Leste."}]}]',
'[{"prompt":"O que é legenda?","answer":"Explica os símbolos do mapa"},{"prompt":"Cite os 4 pontos cardeais.","answer":"N, S, L, O"},{"prompt":"Escala 1:100 significa?","answer":"1 cm = 100 cm reais"}]',
'[{"contexto":"Crie a legenda de um mapa da escola com 5 símbolos diferentes."}]',
'[{"ponto":"Mapa precisa de título, legenda, escala, orientação."},{"ponto":"Escala converte tamanho real."},{"ponto":"Cartografia é linguagem visual."}]',
'{"criterio":"Lê e produz mapa com elementos obrigatórios."}',
'{"geografia","cartografia"}'),

('ge-conexoes-escalas','Geografia — Conexões e Escalas (local/global)','Geografia','5º ao 9º',
'Relacionar fenômenos em diferentes escalas: cidade, país, mundo.',
'[{"step":"Motivação","detail":"Café do café da manhã: de onde veio?"},{"step":"Observação","detail":"Mapa-múndi com fluxos comerciais."},{"step":"Explicação","detail":"Escalas geográficas e interdependência."},{"step":"Exemplo resolvido","detail":"Rastrear a cadeia do café (Brasil→mundo)."},{"step":"Prática guiada","detail":"Identificar origem de 3 produtos."},{"step":"Treino","detail":"3 perguntas multiescalares."},{"step":"Desafio","detail":"Analisar impacto local de fato global."},{"step":"Resumo","detail":"O local conecta-se ao global."},{"step":"Domínio","detail":"Explicar interdependência."}]',
'[{"question":"Por que crise em país produtor de petróleo afeta o Brasil?","resolution":[{"line":"Brasil importa derivados/depende de cotação."},{"line":"Preço sobe → combustível sobe → tudo sobe."}],"answer":"Mundo interligado: choque externo vira inflação local."}]',
'[{"erro":"Pensar que cada país é isolado","correcao":"Globalização interliga economias."}]',
'[{"prompt":"Globalização é:","hint":"Conexão entre lugares.","options":[{"text":"Maior integração entre países","isCorrect":true,"reason":"Fluxos de bens, pessoas e ideias."},{"text":"Cada país sozinho","isCorrect":false,"reason":"É o oposto."},{"text":"Volta ao isolamento","isCorrect":false,"reason":"Não é o conceito."}]}]',
'[{"prompt":"Cite 2 produtos importados consumidos no Brasil.","answer":"Eletrônicos, trigo, etc."},{"prompt":"Maior parceiro comercial do Brasil hoje?","answer":"China (atualmente)"},{"prompt":"O que é importação?","answer":"Comprar de outro país"}]',
'[{"contexto":"Liste 5 países de origem de itens que você usa em casa."}]',
'[{"ponto":"Tudo se conecta em escalas."},{"ponto":"Local sofre influência global."},{"ponto":"Comércio cria interdependência."}]',
'{"criterio":"Articula escalas local-global."}',
'{"geografia","escalas"}'),

('ge-natureza-ambiente','Geografia — Natureza, Ambiente e Qualidade de Vida','Geografia','3º ao 9º',
'Analisar relações sociedade-natureza e impactos ambientais.',
'[{"step":"Motivação","detail":"O que é desenvolvimento sustentável?"},{"step":"Observação","detail":"Imagens de áreas preservadas e degradadas."},{"step":"Explicação","detail":"Recursos naturais, biomas, impactos humanos."},{"step":"Exemplo resolvido","detail":"Caso: desmatamento na Amazônia → efeitos."},{"step":"Prática guiada","detail":"Identificar bioma por imagem."},{"step":"Treino","detail":"3 questões sobre biomas/impactos."},{"step":"Desafio","detail":"Propor 3 ações sustentáveis na escola."},{"step":"Resumo","detail":"Quadro: ação humana → consequência → solução."},{"step":"Domínio","detail":"Argumentar sobre sustentabilidade."}]',
'[{"question":"O que acontece quando uma floresta é desmatada?","resolution":[{"line":"Perda de biodiversidade."},{"line":"Solo erodido."},{"line":"Menos chuvas (ciclo da água)."}],"answer":"Cascata de impactos ambientais."}]',
'[{"erro":"Achar que reciclar resolve sozinho","correcao":"Reduzir e reusar vêm antes; é sistema."}]',
'[{"prompt":"Qual é o maior bioma brasileiro?","hint":"Floresta tropical.","options":[{"text":"Amazônia","isCorrect":true,"reason":"Maior em área."},{"text":"Cerrado","isCorrect":false,"reason":"É o segundo."},{"text":"Caatinga","isCorrect":false,"reason":"Menor que os anteriores."}]}]',
'[{"prompt":"Cite 3 biomas brasileiros.","answer":"Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa, Pantanal"},{"prompt":"O que é desmatamento?","answer":"Retirada da vegetação nativa"},{"prompt":"Cite 2 ações sustentáveis.","answer":"Reduzir consumo, separar resíduos..."}]',
'[{"contexto":"Crie um cartaz com 4 atitudes sustentáveis para sua escola."}]',
'[{"ponto":"Natureza tem limites."},{"ponto":"Cada bioma tem ecossistemas únicos."},{"ponto":"Sustentabilidade é responsabilidade coletiva."}]',
'{"criterio":"Relaciona ação humana e impacto ambiental."}',
'{"geografia","ambiente"}'),

('ge-mundo-trabalho','Geografia — Mundo do Trabalho e Cidades','Geografia','5º ao 9º',
'Analisar atividades econômicas, urbanização e desigualdades.',
'[{"step":"Motivação","detail":"Por que tantas pessoas se mudaram para a cidade?"},{"step":"Observação","detail":"Gráficos de urbanização do Brasil."},{"step":"Explicação","detail":"Setores (primário/secundário/terciário), êxodo rural, periferização."},{"step":"Exemplo resolvido","detail":"Caso: industrialização SP → migração NE-SE."},{"step":"Prática guiada","detail":"Classificar profissões por setor."},{"step":"Treino","detail":"3 questões sobre trabalho/cidades."},{"step":"Desafio","detail":"Propor 2 melhorias urbanas para sua cidade."},{"step":"Resumo","detail":"Trabalho organiza o espaço."},{"step":"Domínio","detail":"Explicar desigualdade socioespacial."}]',
'[{"question":"A que setor pertence um agricultor?","resolution":[{"line":"Setor primário = extração/agricultura."},{"line":"Setor secundário = indústria."},{"line":"Setor terciário = serviços."}],"answer":"Primário"}]',
'[{"erro":"Confundir setor secundário (indústria) com terciário (comércio)","correcao":"Indústria transforma matéria; comércio vende."}]',
'[{"prompt":"Professor pertence a qual setor?","hint":"Setor de serviços.","options":[{"text":"Terciário","isCorrect":true,"reason":"Educação é serviço."},{"text":"Primário","isCorrect":false,"reason":"Não é extração."},{"text":"Secundário","isCorrect":false,"reason":"Não é indústria."}]}]',
'[{"prompt":"O que é êxodo rural?","answer":"Migração do campo para a cidade"},{"prompt":"Cite uma desigualdade urbana.","answer":"Acesso a saneamento/transporte"},{"prompt":"Setor da pecuária?","answer":"Primário"}]',
'[{"contexto":"Analise sua cidade: cite 2 problemas urbanos e 1 solução possível."}]',
'[{"ponto":"Trabalho se organiza em setores."},{"ponto":"Cidades concentram oportunidades e problemas."},{"ponto":"Desigualdade socioespacial é desafio."}]',
'{"criterio":"Classifica setores e analisa cidade."}',
'{"geografia","trabalho"}');

-- 3) Mapear códigos BNCC por unidade_temática e palavras-chave
DO $$
DECLARE r record; v_tid uuid; v_slug text;
BEGIN
  FOR r IN SELECT codigo, componente, unidade_tematica, habilidade FROM bncc_biblioteca 
           WHERE componente IN ('Língua Portuguesa','Ciências','História','Geografia') AND ativo = true
  LOOP
    v_slug := NULL;
    IF r.componente = 'Língua Portuguesa' THEN
      v_slug := CASE 
        WHEN r.unidade_tematica ILIKE '%análise%' OR r.unidade_tematica ILIKE '%analise%' THEN 'lp-analise-linguistica'
        WHEN r.unidade_tematica ILIKE '%leitura%' OR r.unidade_tematica ILIKE '%escuta%' THEN 'lp-leitura-compreensao'
        WHEN r.unidade_tematica ILIKE '%produção%' OR r.unidade_tematica ILIKE '%producao%' THEN 'lp-producao-textos'
        WHEN r.unidade_tematica ILIKE '%oralidade%' THEN 'lp-oralidade'
        ELSE 'lp-leitura-compreensao'
      END;
    ELSIF r.componente = 'Ciências' THEN
      v_slug := CASE
        WHEN r.unidade_tematica ILIKE '%vida%' OR r.unidade_tematica ILIKE '%evolu%' THEN 'ci-vida-evolucao'
        WHEN r.unidade_tematica ILIKE '%matéria%' OR r.unidade_tematica ILIKE '%materia%' OR r.unidade_tematica ILIKE '%energia%' THEN 'ci-materia-energia'
        WHEN r.unidade_tematica ILIKE '%terra%' OR r.unidade_tematica ILIKE '%universo%' THEN 'ci-terra-universo'
        ELSE 'ci-vida-evolucao'
      END;
    ELSIF r.componente = 'História' THEN
      v_slug := CASE
        WHEN r.unidade_tematica ILIKE '%mundo pessoal%' OR r.unidade_tematica ILIKE '%comunidade%' OR r.unidade_tematica ILIKE '%lugar em que vive%' OR r.unidade_tematica ILIKE '%espaço público%' OR r.unidade_tematica ILIKE '%registrar%' OR r.unidade_tematica ILIKE '%registros%' OR r.unidade_tematica ILIKE '%pessoas e os grupos%' THEN 'hi-eu-comunidade'
        WHEN r.unidade_tematica ILIKE '%colonial%' OR r.unidade_tematica ILIKE '%Brasil no século XIX%' OR r.unidade_tematica ILIKE '%independência%' OR r.unidade_tematica ILIKE '%mundo moderno%' OR r.unidade_tematica ILIKE '%Humanismo%' THEN 'hi-brasil-colonia-imperio'
        WHEN r.unidade_tematica ILIKE '%República%' OR r.unidade_tematica ILIKE '%ditadura%' OR r.unidade_tematica ILIKE '%redemocrat%' OR r.unidade_tematica ILIKE '%após 1946%' THEN 'hi-republica-seculoxx'
        ELSE 'hi-mundo-moderno-contemporaneo'
      END;
    ELSIF r.componente = 'Geografia' THEN
      v_slug := CASE
        WHEN r.unidade_tematica ILIKE '%sujeito%' OR r.unidade_tematica ILIKE '%lugar%' THEN 'ge-sujeito-lugar'
        WHEN r.unidade_tematica ILIKE '%representação%' OR r.unidade_tematica ILIKE '%representacao%' THEN 'ge-formas-representacao'
        WHEN r.unidade_tematica ILIKE '%conexões%' OR r.unidade_tematica ILIKE '%conexoes%' OR r.unidade_tematica ILIKE '%escala%' THEN 'ge-conexoes-escalas'
        WHEN r.unidade_tematica ILIKE '%natureza%' OR r.unidade_tematica ILIKE '%ambiente%' OR r.unidade_tematica ILIKE '%qualidade de vida%' THEN 'ge-natureza-ambiente'
        WHEN r.unidade_tematica ILIKE '%trabalho%' THEN 'ge-mundo-trabalho'
        ELSE 'ge-sujeito-lugar'
      END;
    END IF;

    IF v_slug IS NOT NULL THEN
      SELECT id INTO v_tid FROM pedagogical_templates WHERE slug = v_slug;
      IF v_tid IS NOT NULL THEN
        INSERT INTO bncc_template_map (bncc_code, template_id, priority)
        VALUES (r.codigo, v_tid, 1)
        ON CONFLICT DO NOTHING;
      END IF;
    END IF;
  END LOOP;
END $$;

-- 4) Limpar cache para forçar remontagem com novo template
DELETE FROM pedagogical_lessons_cache 
WHERE bncc_code IN (SELECT codigo FROM bncc_biblioteca WHERE componente IN ('Língua Portuguesa','Ciências','História','Geografia'));
