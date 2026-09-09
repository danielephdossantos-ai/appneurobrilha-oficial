
-- =====================================================================
-- 1) NOVOS TEMPLATES DE CIÊNCIAS (específicos por tema BNCC 6º-9º)
-- =====================================================================

INSERT INTO public.pedagogical_templates
  (slug, name, disciplina, serie, metodo, sequencia_didatica, exemplos, erros_comuns, pratica_guiada, exercicios, desafio, revisao, avaliacao, tags)
VALUES

-- 1. Química aplicada (medicamentos, sintéticos, polímeros, plásticos)
('ci-quimica-aplicada', 'Ciências — Química Aplicada (medicamentos e materiais sintéticos)', 'Ciências', '6º-9º', 'investigação',
 $$[
   {"step":"Motivação","detail":"De onde vêm os medicamentos que tomamos? E o plástico das embalagens?"},
   {"step":"Observação","detail":"Comparar materiais naturais (algodão, madeira) com sintéticos (plástico, nylon, remédios)."},
   {"step":"Explicação","detail":"A ciência transforma matérias-primas (petróleo, plantas, minerais) em medicamentos e materiais sintéticos por reações químicas controladas em laboratórios e indústrias."},
   {"step":"Exemplo resolvido","detail":"Aspirina: extraída da casca do salgueiro (séc. XIX) → sintetizada em laboratório → produzida em massa pela indústria farmacêutica."},
   {"step":"Prática guiada","detail":"Classificar materiais do dia a dia entre naturais e sintéticos, indicando a aplicação."},
   {"step":"Treino","detail":"3 itens: polietileno, penicilina, lã — origem e função."},
   {"step":"Desafio","detail":"Listar 3 benefícios e 2 problemas ambientais dos materiais sintéticos."},
   {"step":"Resumo","detail":"Tecnologia química gera saúde e conforto, mas exige descarte responsável."},
   {"step":"Domínio","detail":"Associar produção científica ao desenvolvimento tecnológico."}
 ]$$::jsonb,
 $$[{"question":"De onde a indústria farmacêutica obtém o princípio ativo da aspirina?","answer":"Originalmente da casca do salgueiro, hoje sintetizada em laboratório.","resolution":[{"line":"Pesquisa identifica a substância na natureza."},{"line":"Química sintetiza a molécula em laboratório."},{"line":"Indústria produz em escala para distribuição."}]}]$$::jsonb,
 $$[{"erro":"Achar que medicamento e plástico vêm prontos da natureza."},{"erro":"Confundir natural com seguro e sintético com perigoso."}]$$::jsonb,
 $$[{"prompt":"O que diferencia um material sintético de um natural?","hint":"Pense em quem produziu.","options":[{"text":"Sintético é produzido por reações químicas controladas pelo ser humano.","reason":"Correto — é fabricado, não coletado.","isCorrect":true},{"text":"Sintético vem direto da natureza sem mudanças.","reason":"Esse é o material natural.","isCorrect":false},{"text":"Sintético é sempre tóxico.","reason":"Não — depende do uso e descarte.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite um material sintético usado em hospitais e diga sua função.","answer":"Luvas de látex/nitrilo — proteção contra contaminação."}]$$::jsonb,
 $${"contexto":"Explique como o desenvolvimento científico permite produzir medicamentos que salvam vidas, citando duas etapas do processo."}$$::jsonb,
 $$[{"ponto":"Ciência → tecnologia → produtos sintéticos."},{"ponto":"Medicamentos e plásticos são resultado de pesquisa química."},{"ponto":"Benefício social exige descarte responsável."}]$$::jsonb,
 $${}$$::jsonb,
 ARRAY['quimica','sintetico','medicamento','tecnologia']),

-- 2. Célula e organelas
('ci-celula-organelas', 'Ciências — Célula e Organelas', 'Ciências', '6º-9º', 'observação-modelo',
 $$[
   {"step":"Motivação","detail":"Tudo que é vivo é feito de células. Mas o que tem dentro de uma célula?"},
   {"step":"Observação","detail":"Imagens de microscópio: célula animal × vegetal."},
   {"step":"Explicação","detail":"Membrana controla entrada e saída; citoplasma abriga organelas; núcleo guarda o DNA; mitocôndria produz energia; cloroplasto (vegetal) faz fotossíntese."},
   {"step":"Exemplo resolvido","detail":"Comparação: animal não tem parede celular nem cloroplasto; vegetal tem ambos."},
   {"step":"Prática guiada","detail":"Identificar 3 organelas e suas funções em um esquema."},
   {"step":"Treino","detail":"Marcar V/F sobre funções de organelas."},
   {"step":"Desafio","detail":"Por que mitocôndria é chamada de usina de energia?"},
   {"step":"Resumo","detail":"Cada organela tem função específica; juntas mantêm a vida da célula."},
   {"step":"Domínio","detail":"Relacionar estrutura e função celular."}
 ]$$::jsonb,
 $$[{"question":"Qual organela produz energia para a célula?","answer":"Mitocôndria.","resolution":[{"line":"Mitocôndria realiza respiração celular."},{"line":"Converte glicose + O2 em ATP (energia)."},{"line":"Por isso é chamada usina de energia."}]}]$$::jsonb,
 $$[{"erro":"Achar que célula vegetal não tem mitocôndria."},{"erro":"Confundir núcleo com nucléolo."}]$$::jsonb,
 $$[{"prompt":"O que faz o núcleo da célula?","hint":"Lá fica o material genético.","options":[{"text":"Armazena o DNA e controla as funções celulares.","reason":"Correto.","isCorrect":true},{"text":"Produz energia.","reason":"Essa é a mitocôndria.","isCorrect":false},{"text":"Faz fotossíntese.","reason":"Essa é o cloroplasto.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma estrutura presente só em célula vegetal.","answer":"Parede celular (ou cloroplasto)."}]$$::jsonb,
 $${"contexto":"Desenhe ou descreva uma célula animal nomeando 4 organelas e suas funções."}$$::jsonb,
 $$[{"ponto":"Célula é unidade da vida."},{"ponto":"Organelas têm funções específicas."},{"ponto":"Vegetal × animal: parede e cloroplasto."}]$$::jsonb, $$ {}$$::jsonb,
 ARRAY['celula','organela','dna','mitocondria']),

-- 3. Corpo humano e sistemas
('ci-corpo-humano-sistemas', 'Ciências — Corpo Humano e Sistemas', 'Ciências', '6º-9º', 'modelagem',
 $$[
   {"step":"Motivação","detail":"Como o sanduíche que você comeu vira energia para correr?"},
   {"step":"Observação","detail":"Esquemas dos sistemas digestório, respiratório, circulatório."},
   {"step":"Explicação","detail":"Sistemas integrados: digestório quebra alimento, respiratório capta O2, circulatório distribui nutrientes e gases para todas as células."},
   {"step":"Exemplo resolvido","detail":"Glicose absorvida no intestino → sangue → célula → mitocôndria → energia."},
   {"step":"Prática guiada","detail":"Ordenar etapas do trajeto do alimento."},
   {"step":"Treino","detail":"Associar órgão à função (pulmão, coração, intestino)."},
   {"step":"Desafio","detail":"Por que o coração bate mais rápido na atividade física?"},
   {"step":"Resumo","detail":"Os sistemas trabalham juntos para manter o organismo vivo."},
   {"step":"Domínio","detail":"Explicar integração entre sistemas."}
 ]$$::jsonb,
 $$[{"question":"Qual é o caminho do O2 desde o ar até a célula?","answer":"Nariz → traqueia → pulmão → alvéolo → sangue → célula.","resolution":[{"line":"O ar entra pelas vias respiratórias."},{"line":"Nos alvéolos, O2 passa para o sangue."},{"line":"O coração bombeia até as células."}]}]$$::jsonb,
 $$[{"erro":"Confundir digestão com respiração."},{"erro":"Achar que o sangue só transporta oxigênio."}]$$::jsonb,
 $$[{"prompt":"Qual sistema distribui nutrientes pelo corpo?","hint":"Tem o coração como bomba.","options":[{"text":"Circulatório.","reason":"Correto.","isCorrect":true},{"text":"Digestório.","reason":"Esse faz a quebra do alimento.","isCorrect":false},{"text":"Nervoso.","reason":"Esse coordena respostas.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma função do sistema respiratório.","answer":"Captar oxigênio e eliminar gás carbônico."}]$$::jsonb,
 $${"contexto":"Explique como os sistemas digestório, respiratório e circulatório se integram para produzir energia."}$$::jsonb,
 $$[{"ponto":"Sistemas integrados sustentam a vida."},{"ponto":"Cada órgão tem função no conjunto."},{"ponto":"Energia depende de O2 + nutrientes."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['corpo','sistemas','orgaos','fisiologia']),

-- 4. Saúde, doenças, vacinas
('ci-saude-doencas-vacinas', 'Ciências — Saúde, Doenças e Vacinas', 'Ciências', '6º-9º', 'caso',
 $$[
   {"step":"Motivação","detail":"Por que tomamos vacina? Como o corpo combate doenças?"},
   {"step":"Observação","detail":"Linha do tempo: epidemias e impacto da vacinação."},
   {"step":"Explicação","detail":"Sistema imune produz anticorpos. Vacina apresenta antígeno enfraquecido → corpo aprende a se defender antes da doença real."},
   {"step":"Exemplo resolvido","detail":"Vacina da gripe: vírus inativado → produção de anticorpos → proteção."},
   {"step":"Prática guiada","detail":"Distinguir vírus, bactéria, vacina, antibiótico."},
   {"step":"Treino","detail":"3 situações: indicar prevenção adequada."},
   {"step":"Desafio","detail":"Por que vacinar muitas pessoas protege quem não pode tomar (imunidade coletiva)?"},
   {"step":"Resumo","detail":"Vacinação é a forma mais eficiente de prevenção de doenças infecciosas."},
   {"step":"Domínio","detail":"Argumentar sobre importância da vacinação coletiva."}
 ]$$::jsonb,
 $$[{"question":"Por que a vacina contra sarampo é importante mesmo se a doença está rara?","answer":"Porque mantém a imunidade coletiva e impede o retorno da doença.","resolution":[{"line":"Vacina ensina o corpo a se defender."},{"line":"Quanto mais pessoas vacinadas, menos vírus circula."},{"line":"Protege também quem não pode vacinar."}]}]$$::jsonb,
 $$[{"erro":"Achar que antibiótico cura virose."},{"erro":"Achar que vacina causa a doença."}]$$::jsonb,
 $$[{"prompt":"Vacina protege porque…","hint":"O que ela ensina ao corpo?","options":[{"text":"O corpo aprende a produzir anticorpos antes da doença real.","reason":"Correto.","isCorrect":true},{"text":"Mata todos os micróbios do corpo.","reason":"Não — é específica.","isCorrect":false},{"text":"Substitui a higiene.","reason":"Não substitui.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma doença evitada por vacina.","answer":"Sarampo, poliomielite, COVID-19, gripe, hepatite B etc."}]$$::jsonb,
 $${"contexto":"Explique imunidade coletiva e diga por que campanhas de vacinação devem alcançar a maioria da população."}$$::jsonb,
 $$[{"ponto":"Vacina = prevenção."},{"ponto":"Sistema imune produz anticorpos."},{"ponto":"Imunidade coletiva protege o grupo."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['saude','vacina','doenca','imunidade']),

-- 5. Reprodução e sexualidade
('ci-reproducao-sexualidade', 'Ciências — Reprodução, Puberdade e Sexualidade', 'Ciências', '6º-9º', 'discussão-orientada',
 $$[
   {"step":"Motivação","detail":"Por que o corpo muda na adolescência?"},
   {"step":"Observação","detail":"Quadro de mudanças físicas e emocionais na puberdade."},
   {"step":"Explicação","detail":"Hormônios desencadeiam puberdade. Sistema reprodutor masculino e feminino possibilitam a reprodução. ISTs são preveníveis com camisinha e vacinas (HPV)."},
   {"step":"Exemplo resolvido","detail":"Ciclo menstrual: ovulação → endométrio espesso → menstruação se não há fecundação."},
   {"step":"Prática guiada","detail":"Identificar mudanças puberais e métodos de prevenção."},
   {"step":"Treino","detail":"Associar método contraceptivo × prevenção de IST."},
   {"step":"Desafio","detail":"Por que camisinha é o único método que previne IST e gravidez ao mesmo tempo?"},
   {"step":"Resumo","detail":"Conhecimento do corpo permite escolhas saudáveis."},
   {"step":"Domínio","detail":"Discutir saúde sexual com base científica."}
 ]$$::jsonb,
 $$[{"question":"Qual método previne tanto gravidez quanto IST?","answer":"Preservativo (camisinha).","resolution":[{"line":"Pílula previne gravidez, não IST."},{"line":"Camisinha cria barreira física."},{"line":"Logo é o único de dupla proteção."}]}]$$::jsonb,
 $$[{"erro":"Achar que pílula protege de IST."},{"erro":"Confundir puberdade com adolescência (são fenômenos relacionados, mas distintos)."}]$$::jsonb,
 $$[{"prompt":"O que provoca as mudanças da puberdade?","hint":"Substâncias químicas do corpo.","options":[{"text":"Hormônios.","reason":"Correto.","isCorrect":true},{"text":"Vacinas.","reason":"Não.","isCorrect":false},{"text":"Dieta.","reason":"Dieta influencia o crescimento, não dispara a puberdade.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma IST que pode ser prevenida com vacina.","answer":"HPV (papilomavírus humano)."}]$$::jsonb,
 $${"contexto":"Explique por que conhecer o próprio corpo é essencial para escolhas saudáveis na adolescência."}$$::jsonb,
 $$[{"ponto":"Hormônios disparam mudanças."},{"ponto":"Camisinha = dupla proteção."},{"ponto":"Saúde sexual exige informação."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['reproducao','puberdade','sexualidade','ist']),

-- 6. Genética e hereditariedade
('ci-genetica-hereditariedade', 'Ciências — Genética e Hereditariedade', 'Ciências', '9º', 'modelagem',
 $$[
   {"step":"Motivação","detail":"Por que filhos se parecem com os pais?"},
   {"step":"Observação","detail":"Árvore genealógica com cor dos olhos."},
   {"step":"Explicação","detail":"DNA → genes → características. Cada pessoa herda um gene do pai e um da mãe. Alelos podem ser dominantes ou recessivos (Mendel)."},
   {"step":"Exemplo resolvido","detail":"Quadrado de Punnett: pais Aa × Aa → 25% AA, 50% Aa, 25% aa."},
   {"step":"Prática guiada","detail":"Prever cor de flor (Vv × vv)."},
   {"step":"Treino","detail":"3 cruzamentos mono-híbridos."},
   {"step":"Desafio","detail":"Como duas pessoas de olhos castanhos podem ter filho de olhos azuis?"},
   {"step":"Resumo","detail":"Hereditariedade obedece leis de Mendel; DNA carrega a informação."},
   {"step":"Domínio","detail":"Aplicar Mendel a casos simples."}
 ]$$::jsonb,
 $$[{"question":"Pais Aa × Aa — qual % de aa?","answer":"25%.","resolution":[{"line":"Montar Punnett."},{"line":"AA(1) Aa(2) aa(1)."},{"line":"1/4 = 25%."}]}]$$::jsonb,
 $$[{"erro":"Achar que dominante é sempre mais comum."},{"erro":"Esquecer que cada genitor contribui com 1 alelo."}]$$::jsonb,
 $$[{"prompt":"Quem descreveu as leis básicas da hereditariedade?","hint":"Monge austríaco.","options":[{"text":"Gregor Mendel.","reason":"Correto.","isCorrect":true},{"text":"Charles Darwin.","reason":"Esse é evolução.","isCorrect":false},{"text":"Louis Pasteur.","reason":"Esse é microbiologia.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Aa × aa: % de aa?","answer":"50%."}]$$::jsonb,
 $${"contexto":"Explique por que pais Aa × Aa podem ter filho aa mesmo sem mostrar a característica recessiva."}$$::jsonb,
 $$[{"ponto":"DNA carrega genes."},{"ponto":"Alelos dominante/recessivo."},{"ponto":"Punnett prevê proporções."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['genetica','hereditariedade','dna','mendel']),

-- 7. Evolução e biodiversidade
('ci-evolucao-biodiversidade', 'Ciências — Evolução e Biodiversidade', 'Ciências', '7º-9º', 'investigação',
 $$[
   {"step":"Motivação","detail":"Por que existem tantas espécies diferentes?"},
   {"step":"Observação","detail":"Tentilhões de Darwin: bicos diferentes, ilhas diferentes."},
   {"step":"Explicação","detail":"Seleção natural: indivíduos mais adaptados sobrevivem e deixam mais descendentes. Mutações geram variação; ambiente seleciona."},
   {"step":"Exemplo resolvido","detail":"Mariposas claras e escuras em árvores escurecidas pela poluição."},
   {"step":"Prática guiada","detail":"Identificar adaptação × ambiente em animais."},
   {"step":"Treino","detail":"3 casos de adaptação."},
   {"step":"Desafio","detail":"Por que bactérias se tornam resistentes a antibióticos?"},
   {"step":"Resumo","detail":"Evolução = mudança das espécies pelo tempo, guiada por seleção natural."},
   {"step":"Domínio","detail":"Explicar adaptação como vantagem reprodutiva."}
 ]$$::jsonb,
 $$[{"question":"Por que mariposas escuras aumentaram em árvores poluídas?","answer":"Porque ficaram camufladas e sobreviveram mais.","resolution":[{"line":"Ambiente mudou (árvores escuras)."},{"line":"Indivíduos escuros camuflam melhor."},{"line":"Sobrevivem mais e geram mais descendentes."}]}]$$::jsonb,
 $$[{"erro":"Achar que o indivíduo evolui no decorrer da vida."},{"erro":"Achar que necessidade gera mutação."}]$$::jsonb,
 $$[{"prompt":"O que é seleção natural?","hint":"Quem sobrevive mais.","options":[{"text":"Sobrevivência e reprodução diferencial dos mais adaptados.","reason":"Correto.","isCorrect":true},{"text":"Mudança proposital do indivíduo.","reason":"Não — é populacional.","isCorrect":false},{"text":"Escolha de espécies pelo homem.","reason":"Essa é seleção artificial.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite um cientista da teoria evolutiva.","answer":"Charles Darwin (ou Alfred Wallace)."}]$$::jsonb,
 $${"contexto":"Explique como o uso abusivo de antibióticos pode selecionar bactérias resistentes."}$$::jsonb,
 $$[{"ponto":"Variação + seleção = evolução."},{"ponto":"Adaptação é vantagem reprodutiva."},{"ponto":"Ambiente pressiona a seleção."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['evolucao','darwin','biodiversidade','selecao']),

-- 8. Ecologia e ecossistemas
('ci-ecologia-ecossistemas', 'Ciências — Ecologia e Ecossistemas', 'Ciências', '6º-9º', 'investigação',
 $$[
   {"step":"Motivação","detail":"O que acontece se sumirem as abelhas?"},
   {"step":"Observação","detail":"Cadeia alimentar de um bioma."},
   {"step":"Explicação","detail":"Produtores (plantas) → consumidores → decompositores. Energia flui em um sentido; matéria é reciclada."},
   {"step":"Exemplo resolvido","detail":"Capim → gafanhoto → sapo → cobra → fungos."},
   {"step":"Prática guiada","detail":"Classificar seres em níveis tróficos."},
   {"step":"Treino","detail":"Montar cadeia simples de 4 níveis."},
   {"step":"Desafio","detail":"Por que o desmatamento ameaça a água que bebemos?"},
   {"step":"Resumo","detail":"Tudo está conectado; perda de espécie afeta todo o ecossistema."},
   {"step":"Domínio","detail":"Argumentar sobre sustentabilidade."}
 ]$$::jsonb,
 $$[{"question":"Quem são os produtores em uma cadeia alimentar?","answer":"Plantas e algas (fazem fotossíntese).","resolution":[{"line":"Captam energia do sol."},{"line":"Produzem matéria orgânica."},{"line":"Sustentam toda a cadeia."}]}]$$::jsonb,
 $$[{"erro":"Achar que decompositores são consumidores no topo."},{"erro":"Inverter o sentido da energia."}]$$::jsonb,
 $$[{"prompt":"O que é decompositor?","hint":"Reciclam matéria.","options":[{"text":"Fungos e bactérias que decompõem matéria morta.","reason":"Correto.","isCorrect":true},{"text":"Animais predadores.","reason":"Esses são consumidores.","isCorrect":false},{"text":"Plantas.","reason":"Essas são produtoras.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite um bioma brasileiro.","answer":"Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa, Pantanal."}]$$::jsonb,
 $${"contexto":"Explique a importância dos polinizadores para a produção de alimentos."}$$::jsonb,
 $$[{"ponto":"Energia flui; matéria cicla."},{"ponto":"Cada nível depende do anterior."},{"ponto":"Biodiversidade sustenta o ecossistema."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['ecologia','ecossistema','cadeia','biodiversidade']),

-- 9. Astronomia / Sistema Solar
('ci-astronomia-sistema-solar', 'Ciências — Astronomia e Sistema Solar', 'Ciências', '6º-9º', 'modelagem',
 $$[
   {"step":"Motivação","detail":"Por que temos dia e noite? Por que as estações mudam?"},
   {"step":"Observação","detail":"Modelo do Sistema Solar: 8 planetas, Sol no centro."},
   {"step":"Explicação","detail":"Rotação (24h) causa dia/noite; translação (365d) + inclinação do eixo causam estações. Lua orbita a Terra e causa fases e marés."},
   {"step":"Exemplo resolvido","detail":"Verão no hemisfério sul = eixo inclinado em direção ao Sol."},
   {"step":"Prática guiada","detail":"Ordenar planetas do mais próximo ao mais distante do Sol."},
   {"step":"Treino","detail":"Associar movimento × fenômeno."},
   {"step":"Desafio","detail":"Por que no polo Norte há 6 meses de dia e 6 de noite?"},
   {"step":"Resumo","detail":"Movimentos da Terra explicam dia, noite e estações."},
   {"step":"Domínio","detail":"Aplicar modelo heliocêntrico."}
 ]$$::jsonb,
 $$[{"question":"O que causa as estações do ano?","answer":"Inclinação do eixo da Terra + translação.","resolution":[{"line":"Eixo inclinado 23,5°."},{"line":"Em cada época, um hemisfério recebe mais luz."},{"line":"Por isso há verão e inverno alternados."}]}]$$::jsonb,
 $$[{"erro":"Achar que estações dependem da distância Terra-Sol."},{"erro":"Confundir rotação com translação."}]$$::jsonb,
 $$[{"prompt":"O que causa dia e noite?","hint":"Movimento em 24h.","options":[{"text":"Rotação da Terra.","reason":"Correto.","isCorrect":true},{"text":"Translação.","reason":"Essa causa o ano e as estações.","isCorrect":false},{"text":"Movimento da Lua.","reason":"Não.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite um planeta gasoso.","answer":"Júpiter, Saturno, Urano ou Netuno."}]$$::jsonb,
 $${"contexto":"Explique como a inclinação do eixo da Terra produz as quatro estações."}$$::jsonb,
 $$[{"ponto":"Rotação = dia/noite."},{"ponto":"Translação + eixo = estações."},{"ponto":"Sistema Solar é heliocêntrico."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['astronomia','planeta','sistema-solar','estacoes']),

-- 10. Terra, clima e geologia
('ci-terra-clima-geologia', 'Ciências — Terra, Clima e Geologia', 'Ciências', '6º-9º', 'investigação',
 $$[
   {"step":"Motivação","detail":"Por que tem terremoto em algumas regiões e em outras não?"},
   {"step":"Observação","detail":"Mapa das placas tectônicas."},
   {"step":"Explicação","detail":"Terra tem crosta, manto e núcleo. Placas se movem, geram terremotos, vulcões e formam montanhas. Atmosfera regula clima; efeito estufa natural mantém temperatura habitável."},
   {"step":"Exemplo resolvido","detail":"Andes formados pelo encontro das placas Sul-americana e de Nazca."},
   {"step":"Prática guiada","detail":"Associar fenômeno × tipo de encontro de placa."},
   {"step":"Treino","detail":"Camadas da Terra na ordem."},
   {"step":"Desafio","detail":"Por que o aumento de CO2 intensifica o efeito estufa?"},
   {"step":"Resumo","detail":"Processos internos e atmosféricos moldam o planeta."},
   {"step":"Domínio","detail":"Relacionar atividade humana × clima."}
 ]$$::jsonb,
 $$[{"question":"O que ocorre quando duas placas tectônicas se chocam?","answer":"Formação de montanhas, terremotos e vulcões.","resolution":[{"line":"As placas se comprimem."},{"line":"A crosta enruga ou afunda."},{"line":"Forma cadeias e libera energia."}]}]$$::jsonb,
 $$[{"erro":"Achar que efeito estufa é sempre negativo."},{"erro":"Confundir tempo com clima."}]$$::jsonb,
 $$[{"prompt":"Qual gás é mais associado ao aquecimento global?","hint":"Liberado por queima de combustível.","options":[{"text":"Gás carbônico (CO2).","reason":"Correto.","isCorrect":true},{"text":"Oxigênio.","reason":"Não.","isCorrect":false},{"text":"Hélio.","reason":"Não.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma camada da Terra.","answer":"Crosta, manto ou núcleo."}]$$::jsonb,
 $${"contexto":"Explique como a ação humana intensifica o efeito estufa e o aquecimento global."}$$::jsonb,
 $$[{"ponto":"Terra é dinâmica."},{"ponto":"Placas geram fenômenos geológicos."},{"ponto":"Atmosfera regula o clima."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['terra','clima','tectonica','atmosfera']),

-- 11. Física - Energia e eletricidade
('ci-fisica-energia-eletricidade', 'Ciências — Energia e Eletricidade', 'Ciências', '8º-9º', 'experimentação',
 $$[
   {"step":"Motivação","detail":"De onde vem a energia da tomada?"},
   {"step":"Observação","detail":"Caminho: usina → linhas → poste → casa → aparelho."},
   {"step":"Explicação","detail":"Energia se transforma (cinética, elétrica, térmica…) e se conserva. Circuito elétrico tem fonte, fios, carga e interruptor. Tensão (V) × corrente (A) = potência (W)."},
   {"step":"Exemplo resolvido","detail":"Lâmpada de 60 W ligada por 2h consome 0,12 kWh."},
   {"step":"Prática guiada","detail":"Identificar transformações de energia em aparelhos."},
   {"step":"Treino","detail":"3 cálculos simples de consumo."},
   {"step":"Desafio","detail":"Como reduzir a conta de luz sem perder qualidade de vida?"},
   {"step":"Resumo","detail":"Energia se transforma, não desaparece; uso consciente economiza."},
   {"step":"Domínio","detail":"Aplicar potência × tempo = energia consumida."}
 ]$$::jsonb,
 $$[{"question":"Uma TV de 100 W ligada 5h consome quantos kWh?","answer":"0,5 kWh.","resolution":[{"line":"100 W × 5 h = 500 Wh."},{"line":"500 ÷ 1000 = 0,5 kWh."},{"line":"Esse é o consumo no período."}]}]$$::jsonb,
 $$[{"erro":"Confundir potência (W) com energia (kWh)."},{"erro":"Achar que energia desaparece."}]$$::jsonb,
 $$[{"prompt":"Qual aparelho transforma energia elétrica em luz e calor?","hint":"Está em quase toda casa.","options":[{"text":"Lâmpada incandescente.","reason":"Correto.","isCorrect":true},{"text":"Ventilador.","reason":"Esse gera movimento.","isCorrect":false},{"text":"Pilha.","reason":"Essa armazena energia química.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma fonte renovável de energia.","answer":"Solar, eólica, hidrelétrica, biomassa."}]$$::jsonb,
 $${"contexto":"Calcule o consumo mensal de um chuveiro de 5500 W usado 15 min/dia em 30 dias."}$$::jsonb,
 $$[{"ponto":"Energia se conserva e se transforma."},{"ponto":"Consumo = potência × tempo."},{"ponto":"Uso consciente reduz custo e impacto."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['energia','eletricidade','circuito','consumo']),

-- 12. Física - Movimento e força
('ci-fisica-movimento-forca', 'Ciências — Movimento, Força e Máquinas', 'Ciências', '9º', 'experimentação',
 $$[
   {"step":"Motivação","detail":"Por que uma alavanca facilita levantar peso?"},
   {"step":"Observação","detail":"Tipos de máquinas simples: alavanca, polia, plano inclinado."},
   {"step":"Explicação","detail":"Força produz aceleração (F=ma). Máquinas simples reduzem o esforço, mas não a energia total."},
   {"step":"Exemplo resolvido","detail":"Alavanca: ponto de apoio distante do peso multiplica a força."},
   {"step":"Prática guiada","detail":"Identificar tipo de máquina em ferramentas comuns."},
   {"step":"Treino","detail":"Resolver F=ma com valores simples."},
   {"step":"Desafio","detail":"Por que um caminhão precisa de mais força para parar do que um carro?"},
   {"step":"Resumo","detail":"Máquinas simples ampliam força; leis de Newton explicam o movimento."},
   {"step":"Domínio","detail":"Aplicar conceitos a situações do cotidiano."}
 ]$$::jsonb,
 $$[{"question":"F=ma. Massa 4 kg, aceleração 3 m/s². Qual a força?","answer":"12 N.","resolution":[{"line":"F = m × a."},{"line":"F = 4 × 3."},{"line":"F = 12 N."}]}]$$::jsonb,
 $$[{"erro":"Confundir massa com peso."},{"erro":"Achar que máquinas geram energia."}]$$::jsonb,
 $$[{"prompt":"Qual é uma máquina simples?","hint":"Reduz o esforço.","options":[{"text":"Alavanca.","reason":"Correto.","isCorrect":true},{"text":"Computador.","reason":"Não é simples.","isCorrect":false},{"text":"Liquidificador.","reason":"Não é simples.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Quem formulou as leis do movimento?","answer":"Isaac Newton."}]$$::jsonb,
 $${"contexto":"Explique por que abrir uma porta perto da maçaneta é mais fácil que perto da dobradiça."}$$::jsonb,
 $$[{"ponto":"F = m × a."},{"ponto":"Máquinas simples ampliam força."},{"ponto":"Energia se conserva."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['movimento','forca','newton','maquinas']),

-- 13. Misturas e separação
('ci-misturas-separacao', 'Ciências — Substâncias, Misturas e Separação', 'Ciências', '6º-7º', 'experimentação',
 $$[
   {"step":"Motivação","detail":"Como separar areia da água? E o sal?"},
   {"step":"Observação","detail":"Misturas homogêneas (água+sal) × heterogêneas (água+areia)."},
   {"step":"Explicação","detail":"Substância pura tem composição fixa. Mistura combina substâncias. Técnicas: filtração, decantação, destilação, evaporação."},
   {"step":"Exemplo resolvido","detail":"Areia + água → filtração; água + sal → destilação."},
   {"step":"Prática guiada","detail":"Escolher técnica adequada para cada mistura."},
   {"step":"Treino","detail":"3 casos com método correto."},
   {"step":"Desafio","detail":"Como obter água potável da água do mar?"},
   {"step":"Resumo","detail":"O método depende do tipo de mistura."},
   {"step":"Domínio","detail":"Justificar escolha de técnica de separação."}
 ]$$::jsonb,
 $$[{"question":"Como separar areia da água?","answer":"Filtração.","resolution":[{"line":"Areia não dissolve."},{"line":"Filtro retém o sólido."},{"line":"Água passa limpa."}]}]$$::jsonb,
 $$[{"erro":"Achar que toda mistura é heterogênea."},{"erro":"Confundir filtração com destilação."}]$$::jsonb,
 $$[{"prompt":"Água + sal é mistura…","hint":"Vê-se uma única fase?","options":[{"text":"Homogênea.","reason":"Correto.","isCorrect":true},{"text":"Heterogênea.","reason":"Não — você não vê duas fases.","isCorrect":false},{"text":"Substância pura.","reason":"Tem mais de uma substância.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma substância pura.","answer":"Água destilada, ouro puro, gás oxigênio."}]$$::jsonb,
 $${"contexto":"Descreva como você separaria uma mistura de areia, sal e água."}$$::jsonb,
 $$[{"ponto":"Substância × mistura."},{"ponto":"Métodos físicos de separação."},{"ponto":"Escolha depende do tipo."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['mistura','separacao','quimica','substancia']);


-- =====================================================================
-- 2) NOVOS TEMPLATES DE HISTÓRIA
-- =====================================================================
INSERT INTO public.pedagogical_templates
  (slug, name, disciplina, serie, metodo, sequencia_didatica, exemplos, erros_comuns, pratica_guiada, exercicios, desafio, revisao, avaliacao, tags)
VALUES
('hi-mundo-antigo', 'História — Mundo Antigo (Egito, Mesopotâmia, Grécia, Roma)', 'História', '6º', 'fontes',
 $$[
   {"step":"Motivação","detail":"Como as primeiras civilizações organizaram cidades, escrita e governo?"},
   {"step":"Observação","detail":"Mapa das primeiras civilizações ao longo de rios."},
   {"step":"Explicação","detail":"Mesopotâmia (Tigre/Eufrates), Egito (Nilo), Grécia (cidades-estado, democracia ateniense), Roma (república → império, direito)."},
   {"step":"Exemplo resolvido","detail":"Democracia em Atenas: cidadãos (homens livres) decidiam em assembleia — excluía mulheres e escravizados."},
   {"step":"Prática guiada","detail":"Associar civilização × contribuição (escrita, leis, democracia)."},
   {"step":"Treino","detail":"Linha do tempo simples."},
   {"step":"Desafio","detail":"Por que dizemos que vivemos heranças do mundo antigo?"},
   {"step":"Resumo","detail":"Cada civilização contribuiu para o que somos hoje."},
   {"step":"Domínio","detail":"Reconhecer continuidades e rupturas."}
 ]$$::jsonb,
 $$[{"question":"O que foi a democracia ateniense?","answer":"Sistema em que cidadãos decidiam em assembleia, sem incluir mulheres e escravizados.","resolution":[{"line":"Atenas no séc. V a.C."},{"line":"Cidadãos = homens livres adultos."},{"line":"Modelo restrito mas inspirador."}]}]$$::jsonb,
 $$[{"erro":"Achar que a democracia antiga era igual à atual."},{"erro":"Confundir Mesopotâmia com Egito."}]$$::jsonb,
 $$[{"prompt":"Onde surgiu a escrita cuneiforme?","hint":"Entre dois rios.","options":[{"text":"Mesopotâmia.","reason":"Correto.","isCorrect":true},{"text":"Grécia.","reason":"Não.","isCorrect":false},{"text":"Roma.","reason":"Não.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma herança romana presente hoje.","answer":"Direito, calendário, latim/línguas latinas."}]$$::jsonb,
 $${"contexto":"Compare democracia ateniense e democracia atual em dois pontos."}$$::jsonb,
 $$[{"ponto":"Civilizações dos rios."},{"ponto":"Escrita organiza sociedade."},{"ponto":"Heranças vivas hoje."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['antiguidade','egito','grecia','roma']),

('hi-idade-media', 'História — Idade Média (Feudalismo, Igreja, Islã)', 'História', '7º', 'fontes',
 $$[
   {"step":"Motivação","detail":"Como era viver em um feudo?"},
   {"step":"Observação","detail":"Esquema da sociedade feudal: clero, nobreza, servos."},
   {"step":"Explicação","detail":"Feudalismo: terra como base de riqueza; relações de vassalagem; forte papel da Igreja Católica. Islã se expande e cria centros culturais (Bagdá, Córdoba)."},
   {"step":"Exemplo resolvido","detail":"Servo trabalhava a terra do senhor em troca de proteção e parte da colheita."},
   {"step":"Prática guiada","detail":"Classificar pessoas em ordens feudais."},
   {"step":"Treino","detail":"V/F sobre características do feudalismo."},
   {"step":"Desafio","detail":"Por que as Cruzadas marcaram o fim gradual do feudalismo?"},
   {"step":"Resumo","detail":"Sociedade estratificada, terra como riqueza, Igreja como autoridade."},
   {"step":"Domínio","detail":"Comparar feudalismo × sociedade urbana atual."}
 ]$$::jsonb,
 $$[{"question":"Quem era o servo no feudalismo?","answer":"Trabalhador rural preso à terra do senhor feudal.","resolution":[{"line":"Não era escravo."},{"line":"Não podia deixar a terra."},{"line":"Devia parte da produção ao senhor."}]}]$$::jsonb,
 $$[{"erro":"Confundir servo com escravizado."},{"erro":"Achar que a Idade Média foi só atraso."}]$$::jsonb,
 $$[{"prompt":"No feudo, qual era a base econômica?","hint":"Atividade rural.","options":[{"text":"A terra e a agricultura.","reason":"Correto.","isCorrect":true},{"text":"O comércio internacional.","reason":"Era reduzido.","isCorrect":false},{"text":"A indústria.","reason":"Veio depois.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma contribuição do mundo islâmico medieval.","answer":"Álgebra, medicina, preservação de obras clássicas."}]$$::jsonb,
 $${"contexto":"Explique como a Igreja Católica organizava a vida na Europa medieval."}$$::jsonb,
 $$[{"ponto":"Feudalismo = terra + vassalagem."},{"ponto":"Igreja com forte poder."},{"ponto":"Islã: ciência e cultura."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['medieval','feudalismo','igreja','isla']),

('hi-revolucoes-modernidade', 'História — Revoluções e Modernidade (Industrial, Francesa, Americana)', 'História', '8º', 'fontes',
 $$[
   {"step":"Motivação","detail":"Por que o mundo mudou tanto entre 1750 e 1850?"},
   {"step":"Observação","detail":"Linha do tempo das revoluções."},
   {"step":"Explicação","detail":"Revolução Industrial: máquinas, fábricas, urbanização. Revolução Francesa (1789): liberdade, igualdade, fraternidade. Independência dos EUA (1776): primeira república moderna."},
   {"step":"Exemplo resolvido","detail":"Declaração dos Direitos do Homem e do Cidadão (1789) influencia constituições atuais."},
   {"step":"Prática guiada","detail":"Associar revolução × principal consequência."},
   {"step":"Treino","detail":"Linha do tempo com 3 eventos."},
   {"step":"Desafio","detail":"Como a Revolução Industrial transformou a vida do trabalhador?"},
   {"step":"Resumo","detail":"Revoluções políticas e econômicas moldaram o mundo contemporâneo."},
   {"step":"Domínio","detail":"Relacionar passado e presente."}
 ]$$::jsonb,
 $$[{"question":"Qual lema sintetiza a Revolução Francesa?","answer":"Liberdade, igualdade, fraternidade.","resolution":[{"line":"Surge em 1789."},{"line":"Combate privilégios da nobreza."},{"line":"Inspira movimentos no mundo todo."}]}]$$::jsonb,
 $$[{"erro":"Achar que a Revolução Industrial trouxe só benefícios."},{"erro":"Confundir Independência dos EUA com Revolução Francesa."}]$$::jsonb,
 $$[{"prompt":"O que marcou a Revolução Industrial?","hint":"Pense em máquinas e fábricas.","options":[{"text":"Produção em larga escala com máquinas a vapor.","reason":"Correto.","isCorrect":true},{"text":"Volta ao trabalho artesanal.","reason":"Foi o oposto.","isCorrect":false},{"text":"Fim do comércio.","reason":"Não.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma consequência social da industrialização.","answer":"Crescimento das cidades, condições duras de trabalho, surgimento do operariado."}]$$::jsonb,
 $${"contexto":"Explique por que a Revolução Francesa é considerada o início do mundo contemporâneo."}$$::jsonb,
 $$[{"ponto":"Industrial: máquinas, fábricas."},{"ponto":"Francesa: direitos humanos."},{"ponto":"EUA: república moderna."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['revolucao','industrial','francesa','modernidade']),

('hi-povos-originarios-africa', 'História — Povos Originários e África Pré-colonial', 'História', '6º-7º', 'fontes',
 $$[
   {"step":"Motivação","detail":"Quem vivia aqui antes da chegada dos europeus? E na África?"},
   {"step":"Observação","detail":"Mapa de povos indígenas brasileiros e reinos africanos."},
   {"step":"Explicação","detail":"Indígenas: diversidade de línguas, modos de vida, agricultura. África pré-colonial tinha grandes reinos (Mali, Songai, Congo) com escrita, comércio e ouro."},
   {"step":"Exemplo resolvido","detail":"Mansa Musa, do Mali, foi um dos homens mais ricos da história."},
   {"step":"Prática guiada","detail":"Associar povo × território × prática cultural."},
   {"step":"Treino","detail":"V/F sobre povos originários."},
   {"step":"Desafio","detail":"Por que é incorreto dizer que o Brasil foi descoberto?"},
   {"step":"Resumo","detail":"Existiam sociedades complexas antes da colonização."},
   {"step":"Domínio","detail":"Combater visão eurocêntrica."}
 ]$$::jsonb,
 $$[{"question":"Por que dizer que o Brasil foi descoberto é problemático?","answer":"Porque já existiam povos vivendo aqui há milhares de anos.","resolution":[{"line":"Indígenas habitavam o território."},{"line":"Tinham línguas, organização social e cultura."},{"line":"O termo correto é chegada/invasão."}]}]$$::jsonb,
 $$[{"erro":"Achar que África pré-colonial não tinha civilização."},{"erro":"Tratar indígenas como povo único."}]$$::jsonb,
 $$[{"prompt":"O que tinham em comum os reinos africanos pré-coloniais?","hint":"Organização e riqueza.","options":[{"text":"Cidades, comércio e organização política complexa.","reason":"Correto.","isCorrect":true},{"text":"Eram tribos isoladas sem organização.","reason":"Visão equivocada.","isCorrect":false},{"text":"Não conheciam metalurgia.","reason":"Conheciam — produziam ferro e ouro.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite um povo indígena brasileiro.","answer":"Tupinambá, Guarani, Yanomami, Pataxó, Kayapó etc."}]$$::jsonb,
 $${"contexto":"Argumente por que a história deve dar voz aos povos originários e africanos."}$$::jsonb,
 $$[{"ponto":"Havia povos antes da chegada europeia."},{"ponto":"África tinha grandes reinos."},{"ponto":"História = múltiplas vozes."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['indigena','africa','colonial','originarios']);


-- =====================================================================
-- 3) NOVOS TEMPLATES DE GEOGRAFIA
-- =====================================================================
INSERT INTO public.pedagogical_templates
  (slug, name, disciplina, serie, metodo, sequencia_didatica, exemplos, erros_comuns, pratica_guiada, exercicios, desafio, revisao, avaliacao, tags)
VALUES
('ge-globalizacao-economia', 'Geografia — Globalização e Economia Mundial', 'Geografia', '8º-9º', 'estudo-caso',
 $$[
   {"step":"Motivação","detail":"Por que seu tênis pode ter sido feito do outro lado do mundo?"},
   {"step":"Observação","detail":"Etiquetas: made in… Produtos que cruzam fronteiras."},
   {"step":"Explicação","detail":"Globalização: integração econômica, cultural e tecnológica entre países. Multinacionais escolhem onde produzir conforme custo. Bolsas, internet, transportes ampliam fluxos."},
   {"step":"Exemplo resolvido","detail":"Smartphone projetado nos EUA, fabricado na China, vendido no Brasil."},
   {"step":"Prática guiada","detail":"Rastrear origem de produtos do cotidiano."},
   {"step":"Treino","detail":"V/F sobre globalização."},
   {"step":"Desafio","detail":"Quais grupos ganham e quais perdem com a globalização?"},
   {"step":"Resumo","detail":"Mundo conectado traz oportunidades e desigualdades."},
   {"step":"Domínio","detail":"Analisar criticamente o fenômeno."}
 ]$$::jsonb,
 $$[{"question":"Por que uma multinacional fabrica em outro país?","answer":"Para reduzir custos (mão de obra, impostos, matéria-prima).","resolution":[{"line":"Busca por menor custo."},{"line":"Acesso a mercado local."},{"line":"Maior lucro global."}]}]$$::jsonb,
 $$[{"erro":"Achar que globalização beneficia todos igualmente."},{"erro":"Confundir globalização com internacionalização recente."}]$$::jsonb,
 $$[{"prompt":"O que é uma multinacional?","hint":"Atua em vários países.","options":[{"text":"Empresa que opera em vários países.","reason":"Correto.","isCorrect":true},{"text":"Empresa pública nacional.","reason":"Não.","isCorrect":false},{"text":"Empresa familiar.","reason":"Não.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma marca multinacional.","answer":"Nike, Apple, Samsung, Coca-Cola, Toyota etc."}]$$::jsonb,
 $${"contexto":"Explique como a globalização gera oportunidades e desigualdades regionais."}$$::jsonb,
 $$[{"ponto":"Mundo integrado."},{"ponto":"Multinacionais buscam menor custo."},{"ponto":"Vencedores e perdedores."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['globalizacao','economia','multinacional']),

('ge-populacao-migracoes', 'Geografia — População, Migrações e Demografia', 'Geografia', '7º-9º', 'analise-dados',
 $$[
   {"step":"Motivação","detail":"Por que pessoas migram?"},
   {"step":"Observação","detail":"Pirâmide etária de dois países (Brasil × Japão)."},
   {"step":"Explicação","detail":"Migração: deslocamento por motivos econômicos, ambientais, políticos. Demografia estuda população (natalidade, mortalidade, envelhecimento)."},
   {"step":"Exemplo resolvido","detail":"Brasil: pirâmide envelhecendo; menos jovens, mais idosos."},
   {"step":"Prática guiada","detail":"Ler pirâmide etária."},
   {"step":"Treino","detail":"Identificar tipo de migração em casos."},
   {"step":"Desafio","detail":"O que muda em um país que envelhece?"},
   {"step":"Resumo","detail":"População muda — políticas precisam acompanhar."},
   {"step":"Domínio","detail":"Interpretar dados demográficos."}
 ]$$::jsonb,
 $$[{"question":"O que indica uma pirâmide etária larga no topo?","answer":"População envelhecida.","resolution":[{"line":"Topo = idosos."},{"line":"Largo = muitos idosos."},{"line":"Indica envelhecimento."}]}]$$::jsonb,
 $$[{"erro":"Confundir migração com turismo."},{"erro":"Achar que envelhecimento é só problema."}]$$::jsonb,
 $$[{"prompt":"Migração forçada é causada por…","hint":"Não há escolha real.","options":[{"text":"Guerras, perseguições ou desastres.","reason":"Correto.","isCorrect":true},{"text":"Férias.","reason":"Não.","isCorrect":false},{"text":"Estudo no exterior.","reason":"Esse é voluntário.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma causa econômica de migração.","answer":"Busca por emprego, melhores salários."}]$$::jsonb,
 $${"contexto":"Analise por que o Brasil envelhece e quais políticas isso exige."}$$::jsonb,
 $$[{"ponto":"Migrações têm múltiplas causas."},{"ponto":"Pirâmide revela estrutura etária."},{"ponto":"Demografia orienta políticas."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['populacao','migracao','demografia']),

('ge-regioes-brasil', 'Geografia — Regiões do Brasil', 'Geografia', '6º-7º', 'estudo-caso',
 $$[
   {"step":"Motivação","detail":"Por que o Brasil é dividido em 5 regiões?"},
   {"step":"Observação","detail":"Mapa do Brasil com as regiões."},
   {"step":"Explicação","detail":"Divisão do IBGE: Norte, Nordeste, Centro-Oeste, Sudeste, Sul. Cada uma com características naturais, econômicas e culturais próprias."},
   {"step":"Exemplo resolvido","detail":"Sudeste: maior PIB, alta urbanização, indústria forte."},
   {"step":"Prática guiada","detail":"Associar região × característica."},
   {"step":"Treino","detail":"Identificar capital × região."},
   {"step":"Desafio","detail":"Por que o Nordeste enfrenta seca enquanto o Sul tem invernos rigorosos?"},
   {"step":"Resumo","detail":"Brasil é diverso; regiões expressam essa diversidade."},
   {"step":"Domínio","detail":"Reconhecer pluralidade brasileira."}
 ]$$::jsonb,
 $$[{"question":"Qual região concentra maior PIB do Brasil?","answer":"Sudeste.","resolution":[{"line":"Indústria forte."},{"line":"São Paulo, RJ, MG, ES."},{"line":"Maior produção econômica."}]}]$$::jsonb,
 $$[{"erro":"Confundir região Sul com Sudeste."},{"erro":"Tratar Nordeste como única realidade."}]$$::jsonb,
 $$[{"prompt":"A Floresta Amazônica está principalmente em qual região?","hint":"Norte do país.","options":[{"text":"Norte.","reason":"Correto.","isCorrect":true},{"text":"Sul.","reason":"Não.","isCorrect":false},{"text":"Sudeste.","reason":"Não.","isCorrect":false}]}]$$::jsonb,
 $$[{"prompt":"Cite uma característica cultural do Nordeste.","answer":"Forró, literatura de cordel, culinária com peixes e mandioca."}]$$::jsonb,
 $${"contexto":"Compare duas regiões brasileiras em clima, economia e cultura."}$$::jsonb,
 $$[{"ponto":"5 regiões — IBGE."},{"ponto":"Cada uma com identidade."},{"ponto":"Diversidade é riqueza."}]$$::jsonb, $${}$$::jsonb,
 ARRAY['brasil','regiao','ibge']);


-- =====================================================================
-- 4) REMAPEAMENTO POR PALAVRA-CHAVE — Ciências, História, Geografia (6º-9º)
-- =====================================================================

-- Remove mapeamentos antigos das disciplinas alvo (6º-9º) para refazer
DELETE FROM public.bncc_template_map m
USING public.bncc_biblioteca b
WHERE m.bncc_code = b.codigo
  AND b.ano BETWEEN 6 AND 9
  AND b.componente IN ('Ciências','História','Geografia');

-- Insere novo mapeamento: cada código vai ao template mais específico por keywords no texto da habilidade
WITH base AS (
  SELECT b.codigo, b.componente, lower(b.habilidade || ' ' || coalesce(b.unidade_tematica,'') || ' ' || coalesce(b.objeto_conhecimento,'')) AS texto
  FROM public.bncc_biblioteca b
  WHERE b.ano BETWEEN 6 AND 9
    AND b.componente IN ('Ciências','História','Geografia')
),
scored AS (
  SELECT codigo, componente, slug, priority FROM (
    SELECT codigo, componente,
      CASE
        -- CIÊNCIAS
        WHEN componente='Ciências' AND texto ~ '(medicament|sintetic|polimer|plastic|farmac|substancia sintetic|industria quimic)' THEN 'ci-quimica-aplicada'
        WHEN componente='Ciências' AND texto ~ '(celula|organela|nucleo celular|mitocondria|cloroplasto|membrana)' THEN 'ci-celula-organelas'
        WHEN componente='Ciências' AND texto ~ '(sistema digest|sistema respirat|sistema circulat|sistema nervos|sistema excret|orgaos do corpo|fisiologi|corpo humano)' THEN 'ci-corpo-humano-sistemas'
        WHEN componente='Ciências' AND texto ~ '(vacin|imuniz|doenc|infeccio|epidemi|saude publica|microorgan|virus|bacteri|antibiotic|prevenc)' THEN 'ci-saude-doencas-vacinas'
        WHEN componente='Ciências' AND texto ~ '(reproduc|puberd|sexual|contracep|gravidez|ist|menstruac|hormoni)' THEN 'ci-reproducao-sexualidade'
        WHEN componente='Ciências' AND texto ~ '(genetic|hereditari|dna|cromossom|mendel|heranca)' THEN 'ci-genetica-hereditariedade'
        WHEN componente='Ciências' AND texto ~ '(evoluc|selec.o natural|biodivers|darwin|adapta|especi)' THEN 'ci-evolucao-biodiversidade'
        WHEN componente='Ciências' AND texto ~ '(ecossist|cadeia alimentar|teia alimentar|bioma|sustentab|impacto ambient|preserva)' THEN 'ci-ecologia-ecossistemas'
        WHEN componente='Ciências' AND texto ~ '(astronomi|planeta|sistema solar|terra-lua-sol|estrela|galaxia|universo|estac.es do ano|fases da lua)' THEN 'ci-astronomia-sistema-solar'
        WHEN componente='Ciências' AND texto ~ '(placa tectonic|vulc|terremot|atmosfer|clima|aquecimento|efeito estufa|geologi|roch|solo)' THEN 'ci-terra-clima-geologia'
        WHEN componente='Ciências' AND texto ~ '(eletric|circuito|corrente eletric|tensao|potencia eletric|energia eletric|usina|consumo de energia)' THEN 'ci-fisica-energia-eletricidade'
        WHEN componente='Ciências' AND texto ~ '(movimento|forca|newton|maquinas simples|alavanca|veloci)' THEN 'ci-fisica-movimento-forca'
        WHEN componente='Ciências' AND texto ~ '(mistura|substanci|separa.o|filtra|destila|decanta|estado fisic)' THEN 'ci-misturas-separacao'
        WHEN componente='Ciências' AND texto ~ '(materia|energia|transforma.o)' THEN 'ci-materia-energia'
        WHEN componente='Ciências' AND texto ~ '(vida|ser vivo|organism)' THEN 'ci-vida-evolucao'
        WHEN componente='Ciências' THEN 'ci-terra-universo'

        -- HISTÓRIA
        WHEN componente='História' AND texto ~ '(egito|mesopotam|grec|atenas|esparta|roma|imperio romano|antigu)' THEN 'hi-mundo-antigo'
        WHEN componente='História' AND texto ~ '(feudal|medieval|igreja catolic|cruzad|isla|imperio bizantin|cavaleiro)' THEN 'hi-idade-media'
        WHEN componente='História' AND texto ~ '(revolu.o industrial|revolu.o frances|independencia dos estados unidos|iluminism|modernidad|capitalism)' THEN 'hi-revolucoes-modernidade'
        WHEN componente='História' AND texto ~ '(indigen|povos originari|africa|reino africano|escraviz|diaspora|afro)' THEN 'hi-povos-originarios-africa'
        WHEN componente='História' AND texto ~ '(colonia|colonial|imperio brasil|d. pedro|regenc|independencia do brasil)' THEN 'hi-brasil-colonia-imperio'
        WHEN componente='História' AND texto ~ '(republica|getulio|vargas|ditadura|seculo xx|guerra mundial|guerra fria|brasil contemporan)' THEN 'hi-republica-seculoxx'
        WHEN componente='História' AND texto ~ '(mundo moderno|renascimento|grandes navega|reforma protestant|absolut)' THEN 'hi-mundo-moderno-contemporaneo'
        WHEN componente='História' THEN 'hi-eu-comunidade'

        -- GEOGRAFIA
        WHEN componente='Geografia' AND texto ~ '(globaliz|multinacional|fluxos internacionais|economia mundial|capital financeir|mercado global)' THEN 'ge-globalizacao-economia'
        WHEN componente='Geografia' AND texto ~ '(populac|demograf|migrac|envelhecimento|piramide etaria|natalidade|mortalidade|refugiad)' THEN 'ge-populacao-migracoes'
        WHEN componente='Geografia' AND texto ~ '(regi.o do brasil|nordeste|sudeste|sul do brasil|centro-oeste|norte do brasil|estado brasileiro|ibge)' THEN 'ge-regioes-brasil'
        WHEN componente='Geografia' AND texto ~ '(mapa|cartografi|escala|projec.o|coordenad|representac.o do espaco)' THEN 'ge-formas-representacao'
        WHEN componente='Geografia' AND texto ~ '(natureza|ambient|sustentab|recursos naturais|qualidade de vida|preserva)' THEN 'ge-natureza-ambiente'
        WHEN componente='Geografia' AND texto ~ '(cidade|urban|trabalho|industri|emprego|setor econom)' THEN 'ge-mundo-trabalho'
        WHEN componente='Geografia' AND texto ~ '(local|global|escala|conex)' THEN 'ge-conexoes-escalas'
        WHEN componente='Geografia' THEN 'ge-sujeito-lugar'
      END AS slug,
      1 AS priority
    FROM base
  ) x
)
INSERT INTO public.bncc_template_map (bncc_code, template_id, priority)
SELECT s.codigo, t.id, s.priority
FROM scored s
JOIN public.pedagogical_templates t ON t.slug = s.slug
ON CONFLICT (bncc_code, template_id) DO NOTHING;


-- =====================================================================
-- 5) LIMPA CACHE PARA RECONSTRUÇÃO
-- =====================================================================
DELETE FROM public.pedagogical_lessons_cache c
USING public.bncc_biblioteca b
WHERE c.bncc_code = b.codigo
  AND b.ano BETWEEN 6 AND 9
  AND b.componente IN ('Ciências','História','Geografia');
