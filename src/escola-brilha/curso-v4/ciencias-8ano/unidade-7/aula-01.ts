import type { AulaGeoV1 } from "../../types";
import { url as congressoImg } from "@/assets/ciencias-7ano/u7-a1/painel-congresso.jpg.asset.json";
import { url as palcoImg } from "@/assets/ciencias-7ano/u7-a1/palco-apresentacao.jpg.asset.json";
import { url as posterImg } from "@/assets/ciencias-7ano/u7-a1/poster-cientifico.jpg.asset.json";
import { url as campoImg } from "@/assets/ciencias-8ano/u7/pesquisa-campo.jpg.asset.json";
import { url as graficosImg } from "@/assets/ciencias-8ano/u7/graficos-dados.jpg.asset.json";
import { url as feiraImg } from "@/assets/ciencias-8ano/u7/apresentacao-feira.jpg.asset.json";
import { url as equipeImg } from "@/assets/ciencias-8ano/u7/equipe-laboratorio.jpg.asset.json";

/**
 * Ciências · 8º Ano · U7 · A01 — "Projeto Científico Integrador"
 * Método científico integrando Biologia, Física, Química e Geociências.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-projeto-cientifico",
  titulo: "Projeto Científico Integrador",
  iconeTrilha: "🏆",
  recompensa: { xp: 160, moedas: 70, medalha: "Cientista Formado" },
  bncc: ["EF08CI13"],
  duracaoMin: 50,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Palco do Congresso Científico. Toque para iniciar.",
    mapaUrl: palcoImg,
    imagemDestaqueUrl: posterImg,
    aurora:
      "Setor 7: Congresso Científico do Instituto. Sua missão final: integrar tudo — Biologia, Física, Química e Geociências — em uma investigação sobre um problema REAL do seu município.",
    falaFinal:
      "Um bom cientista escolhe uma pergunta, investiga com rigor e apresenta com clareza.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Problema: qual dessas perguntas é uma BOA PERGUNTA CIENTÍFICA para investigar em campo?",
    pergunta: "Formule sua escolha:",
    fotoUrl: campoImg,
    opcoes: [
      { id: "opiniao", titulo: "'Qual a melhor cor?'", subtitulo: "opinião, não fato", emoji: "🎨", cor: "from-slate-500 to-slate-700", fotoUrl: congressoImg },
      { id: "boa", titulo: "'A ilha de calor no bairro X é maior que no parque?'", subtitulo: "mensurável, comparável", emoji: "🌡️", cor: "from-emerald-500 to-teal-700", fotoUrl: congressoImg },
      { id: "impossivel", titulo: "'Existe vida em outra galáxia?'", subtitulo: "sem instrumentos do 8º ano", emoji: "🛸", cor: "from-red-500 to-rose-700", fotoUrl: congressoImg },
    ],
    respostaCerta: "boa",
    feedbackAcerto:
      "Correto. Uma boa pergunta científica é MENSURÁVEL, COMPARÁVEL e possível de investigar com recursos disponíveis.",
    feedbackErro:
      "Opinião não é ciência. Perguntas impossíveis não permitem coleta. Boa pergunta = mensurável e comparável, aqui e agora.",
    falaFinal:
      "Toda pesquisa começa com uma pergunta bem formulada.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave do método científico.",
    instrucao: "Vocabulário do pesquisador",
    cadernos: [
      { id: "hipotese", capa: "HIPÓTESE", emoji: "💡", cor: "from-amber-500 to-yellow-700", conteudo: "Resposta provisória à pergunta de pesquisa. Precisa ser TESTÁVEL. Pode ser confirmada ou refutada.", exemplo: "Ex.: 'Suponho que o bairro X é 3 °C mais quente que o parque.'", fotoUrl: posterImg },
      { id: "variavel", capa: "VARIÁVEL", emoji: "📊", cor: "from-indigo-500 to-purple-700", conteudo: "Elemento que MUDA no experimento. Dependente (o que medimos) e independente (o que controlamos).", exemplo: "Ex.: temperatura (dependente) muda conforme local (independente).", fotoUrl: posterImg },
      { id: "dados", capa: "DADOS", emoji: "📈", cor: "from-emerald-500 to-teal-700", conteudo: "Medidas ou observações coletadas. Organizados em tabelas e gráficos para análise.", exemplo: "Ex.: 15 medições de temperatura por local.", fotoUrl: posterImg },
      { id: "controle", capa: "CONTROLE", emoji: "⚖️", cor: "from-sky-500 to-cyan-700", conteudo: "Grupo ou condição de comparação. Sem controle, não há como saber se a hipótese explica o resultado.", exemplo: "Ex.: parque = controle; bairro urbano = teste.", fotoUrl: congressoImg },
      { id: "relatorio", capa: "RELATÓRIO", emoji: "📝", cor: "from-red-500 to-rose-700", conteudo: "Documento com: introdução, objetivo, hipótese, método, resultados, discussão, conclusão e referências.", exemplo: "Ex.: pôster ou artigo científico.", fotoUrl: posterImg },
    ],
    falaFinal:
      "Hipótese, variável, dados, controle, relatório. Cinco pilares do método científico.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Pôster científico organizado. Toque em cada seção.",
    instrucao: "Toque nas seções do pôster",
    mapaUrl: posterImg,
    pontos: [
      { id: "titulo", x: 50, y: 10, emoji: "📌", cor: "from-red-500 to-rose-700", titulo: "Título", texto: "Curto e direto. Diz o QUE a pesquisa investiga.", fotoUrl: posterImg },
      { id: "intro", x: 22, y: 35, emoji: "📖", cor: "from-amber-500 to-orange-700", titulo: "Introdução + Hipótese", texto: "Contextualiza o problema e apresenta a resposta provisória a ser testada.", fotoUrl: posterImg },
      { id: "metodo", x: 22, y: 65, emoji: "🔬", cor: "from-emerald-500 to-teal-700", titulo: "Método", texto: "Como você fez? Materiais, passos, número de medidas. Precisa ser reprodutível.", fotoUrl: posterImg },
      { id: "resultados", x: 75, y: 50, emoji: "📊", cor: "from-sky-500 to-cyan-700", titulo: "Resultados + Discussão", texto: "Tabelas, gráficos e interpretação. Confirma ou refuta a hipótese?", fotoUrl: posterImg },
    ],
    falaFinal:
      "Um bom pôster é lido em 3 minutos e responde: o quê, como, o que descobriu.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre método científico.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que caracteriza uma boa HIPÓTESE?", fotoUrl: posterImg,
        cards: [
          { id: "a", emoji: "🧪", titulo: "Ser testável (pode ser confirmada ou refutada)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "❤️", titulo: "Ser bonita", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🎯", titulo: "Sempre estar certa", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Se não pode ser testada, não é hipótese científica.",
        feedbackErro: "Hipótese pode ESTAR ERRADA — o importante é ser TESTÁVEL." },
      { id: "q2", pergunta: "Sem um GRUPO CONTROLE, o que perdemos?", fotoUrl: congressoImg,
        cards: [
          { id: "a", emoji: "⚖️", titulo: "A base de comparação", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎨", titulo: "A estética do pôster", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "⏰", titulo: "O tempo do experimento", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Sem controle, não sabemos se o efeito veio do que testamos ou de outra causa.",
        feedbackErro: "Controle = base para COMPARAR. Sem ele, o resultado não prova nada." },
      { id: "q3", pergunta: "A melhor forma de mostrar 15 medidas de temperatura é...", fotoUrl: posterImg,
        cards: [
          { id: "a", emoji: "📊", titulo: "Um gráfico + tabela", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "📝", titulo: "Uma longa lista de números em texto corrido", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🎨", titulo: "Um desenho artístico", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Gráfico e tabela revelam padrões que texto esconde.",
        feedbackErro: "Dados quantitativos pedem TABELA + GRÁFICO. Texto corrido esconde padrões." },
    ],
    falaFinal:
      "Testável, com controle e visualizada. Assim a ciência comunica.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Um projeto científico envolve dois momentos. Toque nos interruptores.",
    instrucao: "Toque nos interruptores",
    mapaUrl: congressoImg,
    camadas: [
      { id: "investigar", rotulo: "Investigar", emoji: "🔬", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Pergunta → hipótese → método → coleta → análise. Silencioso, cuidadoso, com registro no Caderno de Pesquisa.", fotoUrl: posterImg },
      { id: "comunicar", rotulo: "Comunicar", emoji: "🎤", cor: "from-red-500 to-rose-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Pôster + apresentação oral. Ciência que não é compartilhada não avança conhecimento coletivo.", fotoUrl: palcoImg },
    ],
    falaFinal:
      "Investigação sem comunicação é incompleta. Ciência é diálogo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as ETAPAS do projeto científico.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Do começo à apresentação:",
    paradas: [
      { id: "pergunta", emoji: "❓", rotulo: "1. Pergunta", descricao: "O que quero descobrir?", fotoUrl: posterImg },
      { id: "hipotese", emoji: "💡", rotulo: "2. Hipótese", descricao: "Resposta provisória testável.", fotoUrl: posterImg },
      { id: "metodo", emoji: "🔬", rotulo: "3. Método + coleta", descricao: "Planejar e coletar dados.", fotoUrl: posterImg },
      { id: "analise", emoji: "📊", rotulo: "4. Análise", descricao: "Tabelas, gráficos e discussão.", fotoUrl: posterImg },
      { id: "apresentar", emoji: "🎤", rotulo: "5. Apresentação", descricao: "Congresso: pôster + fala.", fotoUrl: palcoImg },
    ],
    ordemCerta: ["pergunta", "hipotese", "metodo", "analise", "apresentar"],
    feedbackAcerto:
      "Perfeito. Pergunta → hipótese → método → análise → apresentação.",
    feedbackErro:
      "Sequência: pergunta → hipótese → método → análise → apresentação. Cada etapa depende da anterior.",
    falaFinal:
      "Método científico é um caminho — cinco degraus.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Modelo de projeto integrador.",
    tituloLivro: "📓 Projeto Modelo · Ilhas de Calor na Cidade",
    subtitulo: "Como um bairro sem árvores fica mais quente que um parque",
    paragrafos: [
      { id: "p1", texto: "PERGUNTA: 'A temperatura em ruas asfaltadas sem arborização é maior que dentro do parque municipal, na mesma hora?' HIPÓTESE: sim, cerca de 3-5 °C, porque o asfalto absorve mais radiação solar e há menos evapotranspiração.", chaves: ["evapotranspiração"], definicoes: { evapotranspiração: "Evaporação da água pelas plantas, que resfria o ar." }, fotoUrl: posterImg },
      { id: "p2", texto: "MÉTODO: com um termômetro digital, medimos temperatura em 5 pontos do bairro asfaltado e 5 pontos do parque, sempre às 14h, por 5 dias consecutivos. Registramos também umidade e observamos vegetação. Total: 50 medições.", chaves: ["termômetro digital"], definicoes: { "termômetro digital": "Instrumento que mede temperatura com precisão de décimos." }, fotoUrl: posterImg },
      { id: "p3", texto: "RESULTADO: bairro = média 34,8 °C. Parque = 30,1 °C. Diferença: +4,7 °C — CONFIRMA a hipótese. DISCUSSÃO: árvores reduzem temperatura via sombra e evapotranspiração. RECOMENDAÇÃO: plantar árvores nas ruas mais quentes reduz calor, poluição e melhora saúde pública.", chaves: ["ilha de calor"], definicoes: { "ilha de calor": "Fenômeno em que áreas urbanas ficam mais quentes que áreas verdes." }, fotoUrl: palcoImg },
    ],
    falaFinal:
      "Um projeto pequeno, executado com rigor, gera conhecimento aplicável.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio final: qual etapa do método científico?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 45,
    pecas: [
      { id: "hipotese", emoji: "💡", rotulo: "Hipótese" },
      { id: "metodo", emoji: "🔬", rotulo: "Método/Coleta" },
      { id: "analise", emoji: "📊", rotulo: "Análise" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'Acredito que...'", emoji: "💭", cor: "from-amber-500 to-yellow-700" }, municipioB: { nome: "Resposta provisória", emoji: "💡", cor: "from-emerald-500 to-teal-700" }, contexto: "Antes de fazer experimento.", pecaCertaId: "hipotese", fotoUrl: posterImg, feedbackAcerto: "Hipótese. Palpite testável.", feedbackErro: "Palpite ANTES do experimento = HIPÓTESE." },
      { id: "r2", municipioA: { nome: "50 medições de temperatura", emoji: "🌡️", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Passos padronizados", emoji: "📋", cor: "from-indigo-500 to-purple-700" }, contexto: "Termômetro em 10 pontos, 5 dias.", pecaCertaId: "metodo", fotoUrl: posterImg, feedbackAcerto: "Método e coleta.", feedbackErro: "Coletar dados seguindo protocolo = MÉTODO." },
      { id: "r3", municipioA: { nome: "Gráfico de barras", emoji: "📊", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Comparação de médias", emoji: "🧮", cor: "from-amber-500 to-orange-700" }, contexto: "Depois de coletar.", pecaCertaId: "analise", fotoUrl: posterImg, feedbackAcerto: "Análise. Interpretar os dados.", feedbackErro: "Interpretar dados coletados = ANÁLISE." },
      { id: "r4", municipioA: { nome: "'Se o asfalto retém calor...'", emoji: "🛣️", cor: "from-slate-500 to-slate-700" }, municipioB: { nome: "Explicação testável", emoji: "🎯", cor: "from-emerald-500 to-teal-700" }, contexto: "Antes de medir.", pecaCertaId: "hipotese", fotoUrl: posterImg, feedbackAcerto: "Hipótese.", feedbackErro: "Explicação antes de coletar = HIPÓTESE." },
    ],
    falaFinal:
      "Você já reconhece cada etapa do método em ação.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Um projeto científico do 8º ano se apoia em dois pilares: RIGOR (método) e COMUNICAÇÃO (relato).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: congressoImg,
    fatias: [
      { id: "rigor", rotulo: "Rigor", emoji: "🔬", percentual: 50, cor: "#8b5cf6", descricao: "Método claro, hipótese testável, controle, medições repetidas, registro fiel.", exemplos: ["Hipótese", "Controle", "Repetição"], fotoUrl: posterImg },
      { id: "comunicacao", rotulo: "Comunicação", emoji: "🎤", percentual: 50, cor: "#f43f5e", descricao: "Pôster claro, gráfico bem feito, apresentação oral em ritmo humano, referências.", exemplos: ["Pôster", "Gráfico", "Fala"], fotoUrl: palcoImg },
    ],
    falaFinal:
      "Rigor + comunicação = ciência aberta. Fim do Setor 7.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Instituto. Responda 3 perguntas para sua Certificação de Cientista Formado.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: palcoImg,
    perguntas: [
      { id: "q1", pergunta: "Uma hipótese pode ser REFUTADA?", fotoUrl: posterImg,
        opcoes: [
          { id: "a", texto: "Sim — e isso ainda é ciência de qualidade", correta: true },
          { id: "b", texto: "Não — hipótese sempre precisa estar certa" },
        ],
        feedbackAcerto: "Correto. Refutar uma hipótese é resultado científico legítimo. Descartar hipóteses erradas é como a ciência avança.",
        feedbackErro: "Ciência é FALSIFICÁVEL. Refutar hipótese é resultado válido e importante." },
      { id: "q2", pergunta: "Qual a MELHOR forma de mostrar 30 medidas numéricas?", fotoUrl: posterImg,
        opcoes: [
          { id: "a", texto: "Tabela + gráfico + comentário", correta: true },
          { id: "b", texto: "Texto corrido citando os 30 valores um a um" },
        ],
        feedbackAcerto: "Sim. Dados quantitativos pedem TABELA e GRÁFICO — leitura rápida e visual.",
        feedbackErro: "Nunca escreva 30 números em texto corrido. Use tabela e gráfico." },
      { id: "q3", pergunta: "Ao apresentar seu projeto, qual atitude é essencial?", fotoUrl: palcoImg,
        opcoes: [
          { id: "a", texto: "Ser HONESTO sobre resultados, mesmo se refutaram a hipótese", correta: true },
          { id: "b", texto: "Esconder resultados que não bateram com a hipótese" },
        ],
        feedbackAcerto: "Perfeito. Integridade é o coração da ciência. Falsificar dados destrói toda a pesquisa.",
        feedbackErro: "NUNCA esconda dados. Ciência exige HONESTIDADE — mesmo quando os dados refutam a hipótese." },
    ],
    selo: { nome: "Certificação · Cientista Formado", subtitulo: "Instituto de Ciências Aplicadas · 8º Ano Concluído", emoji: "🏆", cor: "from-violet-500 to-purple-700" },
    falaFinal:
      "CURSO CONCLUÍDO. Você percorreu os 7 setores do Instituto — do DNA ao Universo. Parabéns, Cientista.",
  },
};
