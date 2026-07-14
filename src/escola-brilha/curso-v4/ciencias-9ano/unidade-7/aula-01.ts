import type { AulaGeoV1 } from "../../types";
import pesquisaImg from "@/assets/ciencias-8ano/u7/pesquisa-campo.jpg";
import graficosImg from "@/assets/ciencias-8ano/u7/graficos-dados.jpg";
import feiraImg from "@/assets/ciencias-8ano/u7/apresentacao-feira.jpg";
import equipeImg from "@/assets/ciencias-8ano/u7/equipe-laboratorio.jpg";

/**
 * Ciências · 9º Ano · U7 · A01 — "TCC Júnior · Feira de Ciências Virtual"
 * Pesquisa completa: problema, hipótese, experimento, dados, relatório.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-07-tcc-junior",
  titulo: "TCC Júnior · Feira de Ciências",
  iconeTrilha: "🎓",
  recompensa: { xp: 200, moedas: 100, medalha: "Pesquisador Certificado" },
  bncc: ["EF09CI13"],
  duracaoMin: 50,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Sala de defesa do TCC. Toque para iniciar.",
    mapaUrl: equipeImg,
    imagemDestaqueUrl: feiraImg,
    aurora:
      "Instituto 7: Missão Final. Você agora vai fazer uma pesquisa científica completa — do problema à apresentação. Bem-vindo à sua Feira de Ciências Virtual.",
    falaFinal: "Chegou a hora de ser cientista de verdade.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Problema: o que TODA pesquisa científica precisa ter no início?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: pesquisaImg,
    opcoes: [
      { id: "prob", titulo: "Uma PERGUNTA clara", subtitulo: "problema investigável", emoji: "❓", cor: "from-emerald-500 to-teal-700" },
      { id: "resp", titulo: "A resposta pronta", subtitulo: "assim já sabemos o resultado", emoji: "✅", cor: "from-slate-500 to-slate-700" },
      { id: "gra", titulo: "Um gráfico bonito", subtitulo: "sem precisar de dados", emoji: "📊", cor: "from-red-500 to-rose-700" },
    ],
    respostaCerta: "prob",
    feedbackAcerto:
      "Correto. Toda pesquisa nasce de uma PERGUNTA investigável. Sem pergunta, não há ciência.",
    feedbackErro:
      "Ciência começa com PERGUNTAS, não respostas. A pergunta guia todo o processo.",
    falaFinal: "Sem pergunta, não há pesquisa. Comece perguntando.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave do método científico.",
    instrucao: "Vocabulário do TCC",
    cadernos: [
      { id: "prob", capa: "PROBLEMA", emoji: "❓", cor: "from-red-500 to-rose-700", conteudo: "Pergunta CLARA e investigável que orienta a pesquisa. Deve ter recorte específico.", exemplo: "Ex.: 'A quantidade de luz afeta o crescimento do feijão?'", fotoUrl: pesquisaImg },
      { id: "hip", capa: "HIPÓTESE", emoji: "💡", cor: "from-amber-500 to-orange-700", conteudo: "Resposta possível ao problema, formulada ANTES do experimento. Precisa ser TESTÁVEL.", exemplo: "Ex.: 'Feijão cresce mais no sol do que na sombra.'", fotoUrl: pesquisaImg },
      { id: "exp", capa: "EXPERIMENTO", emoji: "🧪", cor: "from-sky-500 to-cyan-700", conteudo: "Teste controlado que compara variáveis. Precisa de GRUPO CONTROLE e VARIÁVEL manipulada.", exemplo: "Ex.: 5 feijões no sol + 5 no escuro; mesmo solo, mesma água.", fotoUrl: equipeImg },
      { id: "dad", capa: "DADOS", emoji: "📊", cor: "from-indigo-500 to-purple-700", conteudo: "Registros das medições feitas durante o experimento. Precisam ser organizados em tabelas e gráficos.", exemplo: "Ex.: altura em cm medida a cada 2 dias por 14 dias.", fotoUrl: graficosImg },
      { id: "con", capa: "CONCLUSÃO", emoji: "🎯", cor: "from-emerald-500 to-teal-700", conteudo: "Interpretação dos resultados: a hipótese foi CONFIRMADA ou REFUTADA? O que aprendemos?", exemplo: "Ex.: 'Hipótese confirmada: sol acelera crescimento em 40%.'", fotoUrl: feiraImg },
    ],
    falaFinal: "Problema → hipótese → experimento → dados → conclusão. Ciência!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Etapas do TCC. Toque em cada parada.",
    instrucao: "Toque nos pontos",
    mapaUrl: equipeImg,
    pontos: [
      { id: "esc", x: 15, y: 30, emoji: "🎯", cor: "from-red-500 to-rose-700", titulo: "1. Escolha do tema", texto: "Algo que te interessa e é investigável na prática.", fotoUrl: pesquisaImg },
      { id: "rev", x: 40, y: 40, emoji: "📚", cor: "from-amber-500 to-orange-700", titulo: "2. Revisão", texto: "Leia sobre o assunto antes de começar. O que já se sabe?", fotoUrl: equipeImg },
      { id: "pla", x: 65, y: 55, emoji: "🧪", cor: "from-sky-500 to-cyan-700", titulo: "3. Experimento", texto: "Planeje, execute, meça. Anote TUDO no caderno de campo.", fotoUrl: equipeImg },
      { id: "ana", x: 85, y: 75, emoji: "📊", cor: "from-emerald-500 to-teal-700", titulo: "4. Análise + apresentação", texto: "Faça gráficos, tire conclusões e apresente na Feira.", fotoUrl: feiraImg },
    ],
    falaFinal: "Quatro grandes etapas para uma pesquisa completa.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que é o GRUPO CONTROLE em um experimento?", fotoUrl: equipeImg,
        cards: [
          { id: "a", emoji: "🎯", titulo: "Grupo que NÃO recebe a variável testada — serve de comparação", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "👨‍🔬", titulo: "Grupo de cientistas que controla a sala", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🎮", titulo: "Grupo que controla o resultado com computador", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Sem controle, não há como saber se o efeito veio da variável testada.",
        feedbackErro: "Controle = grupo COMPARAÇÃO. Sem ele, o experimento não é conclusivo." },
      { id: "q2", pergunta: "Se a hipótese foi REFUTADA pelos dados, o experimento é:", fotoUrl: graficosImg,
        cards: [
          { id: "a", emoji: "✅", titulo: "Válido — ciência também aprende com hipóteses derrubadas", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "❌", titulo: "Fracasso — perdemos tempo", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🤷", titulo: "Precisa manipular os dados até dar certo", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Refutar uma hipótese também é conhecimento!",
        feedbackErro: "Ciência aprende também com hipóteses refutadas. NUNCA manipule dados." },
      { id: "q3", pergunta: "Em um relatório científico, os DADOS ficam onde?", fotoUrl: graficosImg,
        cards: [
          { id: "a", emoji: "📊", titulo: "Em tabelas e gráficos claros, com legenda", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🗣️", titulo: "Só na apresentação oral", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🤫", titulo: "Escondidos, para não confundir", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Tabelas e gráficos deixam os dados claros e verificáveis.",
        feedbackErro: "Dados vão em TABELAS e GRÁFICOS no relatório, sempre com legenda." },
    ],
    falaFinal: "Controle, refutação e gráficos — conceitos-chave.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Compare HIPÓTESE (antes) e CONCLUSÃO (depois).",
    instrucao: "Toque nos interruptores",
    mapaUrl: pesquisaImg,
    camadas: [
      { id: "hip", rotulo: "Hipótese", emoji: "💡", cor: "from-amber-500 to-orange-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "PALPITE educado formulado ANTES do experimento, com base em conhecimento prévio.", fotoUrl: pesquisaImg },
      { id: "con", rotulo: "Conclusão", emoji: "🎯", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Resposta apoiada em DADOS reais coletados. Confirma ou refuta a hipótese.", fotoUrl: feiraImg },
    ],
    falaFinal: "Hipótese é palpite; conclusão é evidência.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as etapas do método científico.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Do problema à divulgação:",
    paradas: [
      { id: "prob", emoji: "❓", rotulo: "1. Problema", descricao: "Formular a pergunta.", fotoUrl: pesquisaImg },
      { id: "rev", emoji: "📚", rotulo: "2. Revisão", descricao: "Ler sobre o tema.", fotoUrl: equipeImg },
      { id: "hip", emoji: "💡", rotulo: "3. Hipótese", descricao: "Propor resposta testável.", fotoUrl: pesquisaImg },
      { id: "exp", emoji: "🧪", rotulo: "4. Experimento", descricao: "Testar e coletar dados.", fotoUrl: equipeImg },
      { id: "ana", emoji: "📊", rotulo: "5. Análise", descricao: "Tabelas, gráficos, estatísticas.", fotoUrl: graficosImg },
      { id: "con", emoji: "🎯", rotulo: "6. Conclusão", descricao: "Confirmar/refutar hipótese.", fotoUrl: feiraImg },
      { id: "com", emoji: "📢", rotulo: "7. Comunicação", descricao: "Publicar/apresentar.", fotoUrl: feiraImg },
    ],
    ordemCerta: ["prob", "rev", "hip", "exp", "ana", "con", "com"],
    feedbackAcerto: "Perfeito. Método científico completo.",
    feedbackErro: "Ordem: problema → revisão → hipótese → experimento → análise → conclusão → comunicação.",
    falaFinal: "Você tem o roteiro completo do trabalho científico.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório final do TCC.",
    tituloLivro: "📓 Relatório · Meu TCC Júnior",
    subtitulo: "Como fazer uma pesquisa científica completa",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: escolha um tema que te curte. Pode ser plantas, água, alimentação, energia, saúde. O importante é ser INVESTIGÁVEL na sua realidade.", chaves: ["investigável"], definicoes: { "investigável": "Que pode ser testado com experimentos ou observações práticas." }, fotoUrl: pesquisaImg },
      { id: "p2", texto: "MÉTODO: planeje um experimento com GRUPO CONTROLE e GRUPO EXPERIMENTAL. Manipule uma variável por vez. Anote TUDO no caderno de campo — data, hora, medidas, observações.", chaves: ["variável"], definicoes: { "variável": "Fator que pode mudar e afetar o resultado." }, fotoUrl: equipeImg },
      { id: "p3", texto: "APRESENTAÇÃO: organize os dados em tabelas e gráficos. Escreva um RELATÓRIO com introdução, materiais, método, resultados e conclusão. Apresente na Feira com pôster ou vídeo curto.", chaves: ["relatório"], definicoes: { "relatório": "Documento escrito com todas as etapas da pesquisa." }, fotoUrl: feiraImg },
    ],
    falaFinal: "Um bom pesquisador prova o que diz — com dados e método.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Classifique cada frase na etapa correta.",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 45,
    pecas: [
      { id: "prob", emoji: "❓", rotulo: "Problema" },
      { id: "hip", emoji: "💡", rotulo: "Hipótese" },
      { id: "dad", emoji: "📊", rotulo: "Dado" },
      { id: "con", emoji: "🎯", rotulo: "Conclusão" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'A luz afeta o crescimento do feijão?'", emoji: "❓", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Pergunta inicial", emoji: "❓", cor: "from-emerald-500 to-teal-700" }, contexto: "Início da pesquisa.", pecaCertaId: "prob", fotoUrl: pesquisaImg, feedbackAcerto: "Sim. É a pergunta que guia tudo.", feedbackErro: "Pergunta = PROBLEMA da pesquisa." },
      { id: "r2", municipioA: { nome: "'Feijão cresce mais no sol'", emoji: "💡", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Resposta possível antes do teste", emoji: "💡", cor: "from-emerald-500 to-teal-700" }, contexto: "Palpite educado.", pecaCertaId: "hip", fotoUrl: pesquisaImg, feedbackAcerto: "Sim. Resposta possível = HIPÓTESE.", feedbackErro: "Resposta antes do experimento = HIPÓTESE." },
      { id: "r3", municipioA: { nome: "'Após 14 dias, altura média: 18 cm'", emoji: "📊", cor: "from-indigo-500 to-purple-700" }, municipioB: { nome: "Medida coletada", emoji: "📊", cor: "from-emerald-500 to-teal-700" }, contexto: "Registro numérico.", pecaCertaId: "dad", fotoUrl: graficosImg, feedbackAcerto: "Sim. Medição = DADO.", feedbackErro: "Medida coletada = DADO experimental." },
      { id: "r4", municipioA: { nome: "'Hipótese confirmada: sol acelera crescimento em 40%'", emoji: "🎯", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Interpretação final", emoji: "🎯", cor: "from-emerald-500 to-teal-700" }, contexto: "Fim do relatório.", pecaCertaId: "con", fotoUrl: feiraImg, feedbackAcerto: "Correto. Interpretação = CONCLUSÃO.", feedbackErro: "Interpretação final dos dados = CONCLUSÃO." },
    ],
    falaFinal: "Você domina o vocabulário de um pesquisador.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Um bom TCC tem três pilares: RIGOR, CLAREZA e RELEVÂNCIA.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: equipeImg,
    fatias: [
      { id: "rig", rotulo: "Rigor", emoji: "🎯", percentual: 40, cor: "#dc2626", descricao: "Método correto, controle, dados honestos, reproduzível.", exemplos: ["Controle", "Amostra", "Repetição"], fotoUrl: equipeImg },
      { id: "cla", rotulo: "Clareza", emoji: "📝", percentual: 30, cor: "#0891b2", descricao: "Relatório organizado, gráficos legendados, linguagem simples.", exemplos: ["Introdução", "Resultados", "Gráficos"], fotoUrl: graficosImg },
      { id: "rel", rotulo: "Relevância", emoji: "🌍", percentual: 30, cor: "#10b981", descricao: "Aplicação real, ligação com o cotidiano ou com a ciência atual.", exemplos: ["Cotidiano", "Saúde", "Ambiente"], fotoUrl: feiraImg },
    ],
    falaFinal: "Rigor + clareza + relevância = TCC Júnior de qualidade.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última avaliação do curso. 3 perguntas para a certificação de Pesquisador.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: feiraImg,
    perguntas: [
      { id: "q1", pergunta: "Qual a diferença entre HIPÓTESE e CONCLUSÃO?", fotoUrl: pesquisaImg,
        opcoes: [
          { id: "a", texto: "Hipótese é o palpite antes do experimento; conclusão vem dos dados coletados", correta: true },
          { id: "b", texto: "São a mesma coisa em nomes diferentes" },
        ],
        feedbackAcerto: "Correto. Hipótese propõe; conclusão comprova.",
        feedbackErro: "Hipótese = ANTES (palpite). Conclusão = DEPOIS (com base nos dados)." },
      { id: "q2", pergunta: "Para que serve o GRUPO CONTROLE?", fotoUrl: equipeImg,
        opcoes: [
          { id: "a", texto: "Comparar com o grupo experimental e isolar o efeito da variável testada", correta: true },
          { id: "b", texto: "Controlar o comportamento dos participantes" },
        ],
        feedbackAcerto: "Perfeito. Sem controle, não sabemos se o efeito veio da variável.",
        feedbackErro: "Controle = COMPARAÇÃO. Isola o efeito da variável estudada." },
      { id: "q3", pergunta: "O que faz uma pesquisa científica ser CONFIÁVEL?", fotoUrl: graficosImg,
        opcoes: [
          { id: "a", texto: "Método claro, dados honestos, resultados que outros podem repetir", correta: true },
          { id: "b", texto: "Só a opinião do pesquisador, sem experimentos" },
        ],
        feedbackAcerto: "Correto. Ciência = método + evidência + reprodutibilidade.",
        feedbackErro: "Confiabilidade = MÉTODO + DADOS + REPRODUTIBILIDADE. Não é opinião." },
    ],
    selo: { nome: "Certificação · Pesquisador do Centro Nacional", subtitulo: "TCC Júnior concluído com sucesso", emoji: "🎓", cor: "from-violet-500 to-purple-700" },
    falaFinal: "PARABÉNS! Você concluiu o 9º Ano de Ciências. Formação SPEB completa: do 1º ao 9º ano.",
  },
};
