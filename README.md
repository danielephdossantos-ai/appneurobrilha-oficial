#  NEUROBRILHA KIDS

Criar um app chamado NeuroBrilha Kids ele é uma

Plataforma de aprendizagem adaptativa para, crianças neurodivergentes

Para quem é: crianças com TDAH, TEA, dislexia, discalculia , dow entre outras e perfis típicos, do Maternal ao 9º ano.

O que entrega: ensino BNCC adaptado por perfil clínico, atividades terapêuticas, rotina diáriaestruturada, IA professora, suporte para famílias e relatórios para os pais.

Como funciona: tudo gira em torno de uma anamnese inicial e de um perfil de déficits por matériaque ajusta automaticamente o nível de explicação, o tempo de atenção e o estilo das atividades.

Documento gerado automaticamente a partir do mapa de funcionalidades, telas, hooks, edge functions etabelas do app.NeuroBrilha Kids · Relatório geral de sistemas

Página 2

1. Visão geralO NeuroBrilha Kids é um app educacional terapêutico que combina conteúdo da BNCC (BaseNacional Comum Curricular) com práticas clínicas validadas — ABA (Análise do ComportamentoAplicada), Orton-Gillingham para alfabetização, TEACCH para crianças no espectro autista eabordagem CRA (Concreto → Representacional → Abstrato) para matemática.Em vez de ser um banco genérico de exercícios, ele monta um perfil de aprendizagem para cadacriança e usa esse perfil em todas as telas: cada explicação, cada exercício e cada feedback são ajustados automaticamente.Pilares do produto•  Anamnese clínica. Avaliação inicial guiada que mapeia idade, série, hiperfoco, diagnóstico,atenção, leitura, escrita, matemática, autonomia e regulação emocional.•  Perfil neuro-adaptativo. Cada matéria tem nível de explicação 1–4 (concreto → abstrato),tempo de atenção em segundos e flags clínicas (troca letras, conta nos dedos, prefere áudio).•  Ensino BNCC. Conteúdo obrigatório por série, do Maternal ao 9º ano, com travas para não gerar conteúdo fora da idade.•  Reforço terapêutico. Atividades de fala, atenção, funções executivas, regulação emocional etreino visual sacádico.•  Suporte aos pais. Painel dos Pais, Terapeuta Brilha (IA), agenda, relatórios e tela de ajustefino dos déficits.•  Gamificação leve. Estrelas, conquistas, mascotes e loja — sem cronômetros, sem game over.NeuroBrilha Kids · Relatório geral de sistemas

Página 3

2. Anamnese e construção do perfilToda criança começa pela Anamnese (tela /anamnese/:childId). É um questionário em blocos quecaptura, em linguagem simples, como aquela criança aprende. Os dados não vão pra um lugarmorto — alimentam o sistema inteiro.O que é coletado•  Identidade: idade (2–15 anos) e ano escolar — gravados em children.•  Hiperfoco: tema de interesse intenso (animais, dinossauros, espaço, veículos, princesas,super-heróis, robôs, música).•  Diagnóstico: TDAH, TEA, dislexia, discalculia, múltiplo ou nenhum.•  Português: troca de letras, dificuldade com palavras longas, preferência por áudio,necessidade de apoio visual.•  Matemática: conta nos dedos, dificuldade com problemas escritos, tempo de atenção em minutos.•  Atenção e emocional: tempo de foco, regulação, autonomia.Para onde vai esse dado

Tabela

O que guarda

Quem usa

children

Idade, série, hiperfoco

Todas as telas

child_profiles

Scores 0–100 por área + alertas

Painel dos Pais, IA

escola_perfil_deficit

Nível 1–4 por matéria, tempo de atenção, flags clínicas, observações

Escola Brilha, mini-explicação,Ajuste fino

escola_nivel_historico

Cada subida/descida de nível commotivo

Painel dos Pais

anamnesis_responses

Respostas brutas para reanálise

Reset terapêutico, IA

Validador automáticoUm validador (anamneseValidator.ts) roda em cada visita ao Painel dos Pais e detectainconsistências (anamnese incompleta, perfil sem déficit cadastrado, tempo de atenção no padrãogenérico). Quando encontra erro, mostra um banner vermelho guiando a mãe para refazer ou ir até oAjuste fino.NeuroBrilha Kids · Relatório geral de sistemas

Página 4

3. Sistemas de ensinoO app entrega ensino por três frentes complementares, todas conectadas ao mesmo perfil dacriança.

3.1 Escola Brilha · BNCC do 2º ao 9º ano

Tela: /escola-brilha. Cobre Português, Matemática, Ciências, História e Geografia,seguindo a BNCC ano a ano.Fluxo por aula:•  Vídeo aula automática gerada por IA, sem tela de carregando.•  Botão “Prefiro ler o texto” para crianças que não respondem bem ao áudio.•  3 fases por exercício: ENSINO (explicação) → DEMONSTRAÇÃO (esquema visual)→ OPÇÕES (4 alternativas com scaffolding em 3 níveis).•  Liberação adaptativa do ciclo: ao acertar 80% e ainda haver tempo, o sistemaexpande +30 dias automaticamente, sem refazer anamnese.

3.2 Mundo Brilha · BNCC Pré-escolar

Tela: /neuro-treino/portugues-bncc e /matematica-bncc. Atividades curtas, lúdicas, para3–6 anos.Português Pré: Letra Inicial, Acha a Vogal, Junta Sílabas, Conta Sílabas, Letra que Some,Rima ou Não, Letra Final, Conta Letras, Sílaba do Meio, Forma Palavra.Matemática Pré: Conta Bichinhos, Maior ou Menor, Quem Vem Depois, Igual ou Diferente,Junta Bichinhos (soma), Tira Bichinhos (subtração), Conta até Dez, Antes/Depois, Dobro,Pares Iguais.Toda atividade começa por uma mini-aula animada narrada com visual concreto antes depedir resposta.NeuroBrilha Kids · Relatório geral de sistemas

Página 5

3.3 Neuro-Treino · reforço terapêutico

Tela: /neuro-treino. Reforça habilidades clínicas que sustentam o aprendizado escolar.•  Fala e Som: Sons Iniciais, Motorzinho dos Sons, Rimas, Pedacinhos da Palavra(consciência fonológica).•  Funções Executivas: Onde Está, Sequência e Padrão, Cadê o Par, Foco Total,Labirinto do Som.•  Atenção avançada: Foco Sustentado e Rastreamento Sacádico (treino visual paraleitura).•  Regulação emocional: Respira Flor, Termômetro dos Sentimentos, Cantinho daCalma, Como Eu Estou.

4. Sistema neuro-adaptativo de explicaçõesO coração pedagógico do app. O mesmo exercício é explicado de jeito diferente para cada perfilclínico, usando estratégias validadas na literatura.

Perfil

Estratégia

Tamanho daexplicação

O que muda

Padrão

Premium completa

60–110 palavras

Definição + porquê + aplicação

TDAH

Chunking

25–45 palavras

Frases curtas, exemplo antes da regra

Dislexia

Orton-Gillingham

35–60 palavras

Multissensorial, sílabas separadas

TEA

TEACCH

40–70 palavras

Linguagem 100% literal, passosnumerados

Discalculia

CRA

45–75 palavras

Concreto → Representacional →Abstrato

Misto

Combinação

30–50 palavras

Mistura adaptada por scores

A detecção é automática a partir de child_profiles + alertas da anamnese — nunca por escolhamanual ou cache. Cada perfil foi testado e validado caso a caso, incluindo o exercício “raizquadrada de 36”, e os resultados estão blindados contra alterações acidentais.4.1 Ajuste fino manualEm /ajuste-dificuldades/:childId, o responsável pode sobrescrever o que o sistema deduziu. Paracada matéria (Geral, Português, Matemática, Ciências, História, Geografia) ele controla:•  Nível de explicação 1 a 4: Concreto total → Visual guiado → Semi-abstrato → Abstrato. Cadanível tem descrição clara do que muda.•  Tempo de atenção em minutos: calibra a duração das sessões.NeuroBrilha Kids · Relatório geral de sistemas

Página 6

•  Flags clínicas: precisa de apoio visual, passo a passo, dificuldade com enunciado longo,prefere áudio, conta nos dedos, troca letras parecidas, dificuldade com palavras longas.•  Observações livres: o que a equipe deve saber sobre gostos, gatilhos e jeito da criançaaprender.4.2 Subida e descida automática de nívelO hook usePerfilEscola registra cada mudança em escola_nivel_historico com motivo (“5 acertosseguidos”, “criança pediu explicação mais simples”), permitindo ao Painel dos Pais mostrar aevolução real, não estimativas.NeuroBrilha Kids · Relatório geral de sistemas

Página 7

5. Protocolos clínicos aplicados

Consciência fonológica · alfabetização

•  Foco no fonema (som), nunca no nome da letra. “Mmmmm-acaco” em vez de “Ême”.•  Onomatopeias pedagógicas ligando cada som a contexto real (B → abelha, S →serpente).•  Botão “Ouvir de novo” sempre disponível para fixação auditiva.•  Por quê: crianças com dislexia precisam associar som ao símbolo, não decorarnomes.

Método ABA · Ajuda Esvaecida

•  1º erro: dica visual (objeto certo brilha, errados ficam translúcidos).•  2º erro: reduz o número de opções.•  3º erro: mostra a resposta com explicação, sem nunca dizer “errado”.•  Reforço positivo imediato a cada acerto, em voz e visual.•  Nunca há Game Over. O app sempre simplifica.

Multissensorial (VAKT)

•  Toda atividade combina Visual (cores, formas), Auditivo (narração) e Cinestésico(toque, arrastar).•  Por quê: ativação simultânea de múltiplas vias sensoriais aumenta retenção emcérebros neurodivergentes.

Acessibilidade cognitiva

•  Poucos elementos por tela (anti-distração TDAH e TEA).•  Cores de fundo suaves (sensibilidade sensorial).•  Sem cronômetros — tempo limite gera ansiedade.•  Tipografia Nunito, peso 600–900, alvos de toque grandes (48px).NeuroBrilha Kids · Relatório geral de sistemas

Página 8

6. Sistema de Hiperfoco terapêuticoO hiperfoco da criança (interesse intenso e repetido) deixa de ser um “problema a ser controlado” evira combustível pedagógico. Configurado em /config-terapeutica, ele adapta:•  Aberturas das atividades — “Olha que dinossauro chegou pra te ajudar!”.•  Reforços positivos temáticos a cada acerto.•  Apoio emocional ao errar, no tema preferido.•  Personagem de apoio recorrente nas telas.Temas suportados: animais, dinossauros, espaço, veículos, princesas, super-heróis, robôs, música.

7. Rotina diária e Jornada 365O app não solta a criança no caos de menus. Ele conduz:

Jornada 365

Tela: /jornada-365. Estrutura blocos diários de aprendizagem (estrutura: bloco ativo →pausa ativa → próximo bloco), com perfil adaptado salvo em jornada_365_sessoes.•  Cada bloco respeita o tempo de atenção definido no Ajuste Fino.•  Pausas ativas terapêuticas entre blocos (respiração, alongamento).•  Progresso 365 dias persistente, com retomada de onde parou.

Rotina e Rotina de Estudos

Telas: /rotina (visual para a criança) e /rotina-estudo (configuração para os pais).•  Tarefas com horário e categoria salvas em schedule_tasks.•  Lembretes via overlay nativo Android e notificações.•  Hook useSmartRoutine sugere atividades alinhadas ao perfil.

Trilhas de especialista

Tela: /trilha/:trilhaId. Sequências curadas para temas específicos (alfabetização, raciocíniológico, regulação) com progressão gravada em trilha_especialista_progresso.NeuroBrilha Kids · Relatório geral de sistemas

Página 9

8. Inteligência artificial em camadasO app usa o Lovable AI Gateway (Gemini e GPT) através de edge functions próprias, cada umacom contexto e proteção específicos:

Função

Para quem

O que faz

ai-professor

Crianças

Gera atividades BNCC respeitando série ehabilidade

mini-explicacao-exercicio

Crianças

Explicação adaptada ao perfil neuro

gerar-explicacao-aula

Crianças

Vídeo aula automática do tema escolhido

gerar-explicacao-didatica

Crianças

Explicações didáticas curtas no contexto daresposta

gerar-atividade-bncc

Crianças

Lote infinito de exercícios BNCC sob demanda

scene-matcher

Crianças

Casa cenário ilustrado com o trecho da história

ai-study

Crianças/Pais

Sessão guiada de estudo por matéria

ai-teacher

Crianças

Professora virtual interativa

therapist-chat

Pais

Terapeuta Brilha — orientação clínica

parent-help

Pais

Ajuda contextual sobre como usar o app

school-help

Pais/Escola

Suporte de dúvidas escolares

Todas as funções recebem o perfil_neuro da criança (perfil + flags + nível de explicação) para que oconteúdo seja gerado já no formato certo, sem precisar de pós-edição.NeuroBrilha Kids · Relatório geral de sistemas

Página 10

9. Suporte à famíliaTudo que envolve dados sensíveis ou configuração fica protegido por PIN do responsável.

Painel dos Pais · /painel-pais

•  Status diário: tempo de uso, sequência (streak), estrelas, fases concluídas.•  Banner de validação: mostra problemas que impedem o app de entregar exercícioscertos.•  Perfil de Desenvolvimento: radar com leitura, escrita, matemática, atenção,linguagem, autonomia, emocional e social.•  Painel Nível Escola: nível atual por matéria + histórico de mudanças.•  Atalhos: Relatório, Perfil, Ajuste fino, Agenda, Rotinas, Hiperfoco, Configurações,Terapeuta Brilha.•  Reset terapêutico controlado: permite refazer a anamnese a cada 90 dias, comtentativas registradas em tentativas_ciclo.

Terapeuta Brilha · /terapeuta-brilha

Chat com IA especializada em neurodesenvolvimento. Recebe o perfil da criança comocontexto e responde dúvidas dos pais sobre comportamento, regulação, estratégiascaseiras e quando procurar ajuda profissional.

Agenda · /agenda

•  Compromissos de terapia, médicos, remédios e tarefas escolares.•  Categorias coloridas, horário, profissional responsável e lembretes.•  Persiste em schedule_tasks com RLS por responsável.

Relatórios

•  /relatorio: evolução geral, acertos vs erros, tempo por categoria.•  /relatorio-rotina: aderência à rotina configurada.•  Exportável em PDF (módulo pdfReport.ts).

Ajuda do Responsável · /ajuda-responsavel

Centro de ajuda contextual com tutoriais, perguntas frequentes e contato com a equipe.NeuroBrilha Kids · Relatório geral de sistemas

Página 11

10. Segurança e privacidade•  RLS (Row Level Security) em todas as tabelas: cada responsável só enxerga dados dospróprios filhos.•  Roles separadas (parent, therapist, admin) numa tabela isolada user_roles — nunca no perfil— para evitar escalonamento de privilégios.•  PIN do responsável protege Painel dos Pais, Configurações, Ajuste fino, Agenda e Relatórios.•  Auth gerenciada com refresh automático, sessão persistente, reset de senha próprio.•  Códigos de convite com expiração para liberar acesso controlado.•  Sem coleta de dados desnecessária: o app só pede o que vai usar para adaptar aexperiência.

11. Como esses sistemas ajudam nodesenvolvimentoPara a criança•  Aprende no ritmo dela. O nível de explicação e o tempo de atenção são respeitados em cadaexercício, sem comparação com colegas.•  Não se sente “errada”. A escada de scaffolding (dica → menos opções → explicação)substitui o castigo do erro pelo reforço da tentativa.•  Constrói consciência fonológica de verdade. O foco em fonemas e onomatopeias ataca araiz da dislexia, não o sintoma.•  Vê matemática antes de calcular. O método CRA garante que o número só apareça depois doobjeto e do desenho, atacando a discalculia.•  Treina regulação emocional em paralelo com conteúdo escolar — Respira Flor, Termômetro,Cantinho da Calma fazem parte da rotina, não são extras.•  Usa o hiperfoco como ponte em vez de barreira: dinossauros, espaço ou princesas viramveículo do conteúdo.Para os pais•  Param de adivinhar: o Painel dos Pais mostra em números o que antes era “acho que ele andamais agitado”.•  Ajustam sem programar. O Ajuste Fino transforma observação clínica (“ele lê devagarpalavras grandes”) em configuração que muda o app.•  Têm um terapeuta de bolso para tirar dúvidas que normalmente ficariam até a próximaconsulta.•  Documentam evolução com relatórios prontos para levar para escola, neuropediatra, fono oupsicopedagoga.•  Controlam tempo e categorias com a tabela content_controls — o app obedece o que afamília decide.NeuroBrilha Kids · Relatório geral de sistemas

Página 12

Para a escola e equipe terapêutica•  Conteúdo BNCC garante alinhamento com o que a escola está cobrando.•  Histórico de níveis documenta evolução pedagógica para reuniões.•  Observações por matéria servem de comunicação entre família e equipe multiprofissional.

NEXT_PUBLIC_SUPABASE_URL=https://ddorojtdlhuagphwkkof.supabase.co

NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_NYInKfK6YJnsBJlHbHYEhQ_Y8UyRSH5

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://adapt-a-bright.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/738b446f-6367-4c09-8b01-4de1c15fd9db).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
