import type { AulaGeoV1 } from "../../types";
import { url as bancadaImg } from "@/assets/ciencias-6ano/u2-a1/bancada-biologia.jpg.asset.json";
import { url as celulaImg } from "@/assets/ciencias-6ano/u2-a1/celula-vegetal.jpg.asset.json";
import { url as niveisImg } from "@/assets/ciencias-6ano/u2-a1/niveis-organizacao.jpg.asset.json";
import { url as sistemasImg } from "@/assets/ciencias-6ano/u2-a1/sistemas-corpo.jpg.asset.json";
import celulaVideo from "@/assets/ciencias-6ano/u2-a1/celula-vida.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 2 · Aula 02
 * "Comando Central" — Sistema nervoso e ações motoras/sensoriais (EF06CI07).
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-comando-central",
  titulo: "Comando Central",
  iconeTrilha: "🧠",
  recompensa: { xp: 120, moedas: 45, medalha: "Neurologista Júnior" },
  bncc: ["EF06CI07"],
  duracaoMin: 35,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada de neurociência. Analise os modelos do sistema nervoso.",
    mapaUrl: bancadaImg,
    imagemDestaqueUrl: sistemasImg,
    aurora:
      "Programa 2, missão 2. Quando você tira a mão de uma panela quente antes até de pensar — quem manda nessa reação relâmpago? O sistema nervoso. Hoje vamos investigar como ele comanda tudo que você sente e faz.",
    falaFinal:
      "Um único sistema comanda seus músculos, interpreta seus sentidos e toma decisões em milissegundos. Vamos entender essa rede elétrica viva.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Situação-problema: você encosta sem querer numa chapa quente. Sua mão se afasta ANTES de você perceber a dor conscientemente.",
    pergunta: "Qual sua HIPÓTESE — o que explica essa reação tão rápida?",
    fotoUrl: sistemasImg,
    opcoes: [
      { id: "reflexo", titulo: "Um arco reflexo na medula espinhal", subtitulo: "não passa pelo cérebro primeiro", emoji: "⚡", cor: "from-amber-500 to-orange-700", fotoUrl: sistemasImg },
      { id: "musculo", titulo: "O músculo decide sozinho", subtitulo: "sem nervos envolvidos", emoji: "💪", cor: "from-red-500 to-rose-700", fotoUrl: bancadaImg },
      { id: "sorte", titulo: "Foi coincidência", subtitulo: "não há explicação biológica", emoji: "🎲", cor: "from-slate-500 to-slate-800", fotoUrl: bancadaImg },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "reflexo",
    feedbackAcerto:
      "Correto. É um ARCO REFLEXO: o sinal vai do receptor de dor direto à medula espinhal, que já manda a resposta motora — o cérebro só é avisado DEPOIS.",
    feedbackErro:
      "Músculo não pensa sozinho e não é coincidência. É um ARCO REFLEXO: a medula espinhal responde antes mesmo do cérebro processar a dor.",
    falaFinal:
      "Reflexos existem para proteger seu corpo com velocidade máxima — a medula age antes que a informação alcance o cérebro consciente.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco conceitos-chave do sistema nervoso. Um vem com vídeo real mostrando atividade celular.",
    instrucao: "Vocabulário neural",
    cadernos: [
      { id: "neuronio", capa: "NEURÔNIO", emoji: "🧬", cor: "from-emerald-500 to-teal-700", conteudo: "Célula especializada em transmitir impulsos elétricos. Tem corpo, dendritos (recebem) e axônio (envia). É a unidade básica do sistema nervoso.", exemplo: "Ex.: o cérebro humano tem cerca de 86 bilhões de neurônios.", fotoUrl: celulaImg },
      { id: "snc", capa: "SISTEMA NERVOSO CENTRAL", emoji: "🧠", cor: "from-sky-500 to-cyan-700", conteudo: "Formado por encéfalo (cérebro, cerebelo, tronco encefálico) e medula espinhal. Processa informações e toma decisões.", exemplo: "Ex.: cérebro protegido pelo crânio; medula pela coluna vertebral.", fotoUrl: sistemasImg },
      { id: "snp", capa: "SISTEMA NERVOSO PERIFÉRICO", emoji: "🕸️", cor: "from-indigo-500 to-purple-700", conteudo: "Rede de NERVOS que conecta o SNC ao resto do corpo — órgãos, pele e músculos. Leva ordens e traz informações sensoriais.", exemplo: "Ex.: nervo ciático liga a medula à perna.", fotoUrl: sistemasImg },
      { id: "sinapse", capa: "SINAPSE", emoji: "⚡", cor: "from-amber-500 to-orange-700", conteudo: "Ponto de comunicação entre dois neurônios, feito por sinais elétricos e substâncias químicas (neurotransmissores). Veja no vídeo a atividade celular.", exemplo: "Ex.: leva menos de 1 milissegundo.", videoUrl: celulaVideo.url },
      { id: "reflexo", capa: "ARCO REFLEXO", emoji: "🦵", cor: "from-rose-500 to-pink-700", conteudo: "Resposta automática e rápida coordenada pela MEDULA ESPINHAL, sem esperar o processamento consciente do cérebro.", exemplo: "Ex.: piscar quando algo se aproxima do olho.", fotoUrl: niveisImg },
    ],
    falaFinal:
      "Neurônio, SNC, SNP, sinapse, reflexo. Com essas cinco palavras você já entende a lógica básica do sistema nervoso.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Mapa do corpo humano e suas conexões nervosas. Toque em cada ponto.",
    instrucao: "Toque em cada estrutura",
    mapaUrl: sistemasImg,
    pontos: [
      { id: "cerebro", x: 50, y: 20, emoji: "🧠", cor: "from-sky-500 to-cyan-700", titulo: "Cérebro", texto: "Processa pensamento, memória, linguagem e comanda movimentos voluntários. Maior parte do encéfalo.", fotoUrl: sistemasImg },
      { id: "cerebelo", x: 60, y: 25, emoji: "⚖️", cor: "from-emerald-500 to-teal-700", titulo: "Cerebelo", texto: "Coordena equilíbrio e precisão dos movimentos. Sem ele, você andaria cambaleando.", fotoUrl: sistemasImg },
      { id: "medula", x: 50, y: 55, emoji: "🦴", cor: "from-amber-500 to-orange-700", titulo: "Medula espinhal", texto: "Cabo de comunicação entre cérebro e corpo. Também comanda reflexos sozinha, sem esperar o cérebro.", fotoUrl: sistemasImg },
      { id: "nervos", x: 75, y: 75, emoji: "🕸️", cor: "from-indigo-500 to-purple-700", titulo: "Nervos periféricos", texto: "Levam ordens motoras aos músculos e trazem informações sensoriais (tato, dor, temperatura) de volta.", fotoUrl: bancadaImg },
    ],
    falaFinal:
      "Cérebro pensa, cerebelo equilibra, medula transmite e reage rápido, nervos conectam tudo ao corpo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Checkpoint técnico. 3 perguntas sobre o sistema nervoso.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual estrutura processa a informação de uma dor no dedo?", fotoUrl: sistemasImg,
        cards: [
          { id: "a", emoji: "🧠", titulo: "Sistema nervoso central (encéfalo e medula)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💪", titulo: "O próprio músculo do dedo", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🩸", titulo: "O sangue que circula ali", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. Dor é captada por receptores e processada pelo SNC — encéfalo e medula.",
        feedbackErro: "Músculo não processa dor, e sangue transporta oxigênio, não interpreta sinais. Quem processa é o SISTEMA NERVOSO CENTRAL." },
      { id: "q2", pergunta: "O que caracteriza um arco reflexo?", fotoUrl: sistemasImg,
        cards: [
          { id: "a", emoji: "⚡", titulo: "Resposta rápida comandada pela medula, sem esperar o cérebro", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🧠", titulo: "Decisão consciente e pensada", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "😴", titulo: "Ausência total de resposta nervosa", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. O reflexo é rápido justamente porque não espera o cérebro decidir — a medula já responde.",
        feedbackErro: "Reflexo não é pensado nem ausência de resposta. É uma resposta RÁPIDA comandada pela medula espinhal." },
      { id: "q3", pergunta: "Onde ocorre a comunicação química entre dois neurônios?", fotoUrl: celulaImg,
        cards: [
          { id: "a", emoji: "⚡", titulo: "Na sinapse", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🦴", titulo: "No osso", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🩹", titulo: "Na pele", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Perfeito. Sinapse é o ponto de contato onde neurotransmissores passam a mensagem adiante.",
        feedbackErro: "Osso e pele não fazem sinapse. A comunicação entre neurônios acontece na SINAPSE." },
    ],
    falaFinal: "Sistema nervoso central processa, medula reflete rápido, sinapses conectam tudo quimicamente.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "O sistema nervoso se divide em duas grandes zonas: CENTRAL (processa e decide) e PERIFÉRICA (conecta ao corpo todo).",
    instrucao: "Toque nos interruptores",
    mapaUrl: sistemasImg,
    camadas: [
      { id: "central", rotulo: "Sistema Central", emoji: "🧠", cor: "from-sky-500 to-cyan-700", rect: { x: 2, y: 2, w: 96, h: 40 }, descricao: "Encéfalo + medula espinhal. Recebe, processa e toma decisões — inclusive reflexos automáticos.", fotoUrl: sistemasImg },
      { id: "periferico", rotulo: "Sistema Periférico", emoji: "🕸️", cor: "from-indigo-500 to-purple-700", rect: { x: 2, y: 44, w: 96, h: 54 }, descricao: "Nervos que ligam o SNC aos músculos, pele e órgãos, levando ordens e trazendo sensações.", fotoUrl: bancadaImg },
    ],
    falaFinal: "Central decide, periférico executa e informa. Um sistema, duas metades trabalhando juntas.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Reconstrua o caminho de um estímulo sensorial até a resposta motora.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Qual a sequência de uma ação motora comandada por um estímulo?",
    paradas: [
      { id: "estimulo", emoji: "🔥", rotulo: "1. Estímulo", descricao: "Algo acontece: calor, som, luz, toque.", fotoUrl: bancadaImg },
      { id: "receptor", emoji: "👁️", rotulo: "2. Receptor sensorial", descricao: "Órgão do sentido capta o estímulo (pele, olho, ouvido...).", fotoUrl: sistemasImg },
      { id: "nervo_sensorial", emoji: "🕸️", rotulo: "3. Nervo sensorial", descricao: "Leva o sinal elétrico até o SNC.", fotoUrl: sistemasImg },
      { id: "processamento", emoji: "🧠", rotulo: "4. Processamento no SNC", descricao: "Encéfalo ou medula interpretam e decidem a resposta.", fotoUrl: sistemasImg },
      { id: "resposta", emoji: "💪", rotulo: "5. Resposta motora", descricao: "Nervo motor comanda o músculo a agir.", fotoUrl: bancadaImg },
    ],
    ordemCerta: ["estimulo", "receptor", "nervo_sensorial", "processamento", "resposta"],
    feedbackAcerto: "Exato. É o caminho oficial de um arco reflexo ou ação voluntária.",
    feedbackErro: "Primeiro o estímulo, depois o receptor capta, o nervo leva ao SNC, que processa e só então manda a resposta motora.",
    falaFinal: "Todo movimento — voluntário ou reflexo — segue essa mesma lógica de circuito.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia o relatório do Programa 2, missão 2.",
    tituloLivro: "📓 Relatório · Observação 12",
    subtitulo: "Tempo de reação em teste de reflexo patelar",
    paragrafos: [
      { id: "p1", texto: "MÉTODO: aplicamos uma leve batida no tendão abaixo do joelho de 10 voluntários. Em TODOS os casos, a perna se ESTICOU automaticamente, sem nenhum comando consciente do participante.", chaves: ["reflexo patelar", "tendão"], definicoes: { "reflexo patelar": "Resposta automática de extensão da perna ao bater no tendão do joelho.", tendão: "Estrutura que liga músculo ao osso." }, fotoUrl: sistemasImg },
      { id: "p2", texto: "EXPLICAÇÃO: o estímulo ativa um receptor no músculo, que envia sinal pela medula espinhal. A MEDULA já devolve a ordem motora, SEM esperar o cérebro. Esse é o mesmo circuito que afasta sua mão de algo quente.", chaves: ["medula espinhal", "circuito"], definicoes: { "medula espinhal": "Estrutura que conduz sinais e comanda reflexos.", circuito: "Caminho percorrido pelo sinal nervoso." }, fotoUrl: sistemasImg },
      { id: "p3", texto: "CONCLUSÃO: reflexos são mecanismos de PROTEÇÃO evoluídos para reagir mais rápido do que o pensamento consciente permitiria. Ganham tempo precioso em situações de risco.", chaves: ["proteção"], definicoes: { proteção: "Mecanismo que evita dano ao corpo." }, fotoUrl: niveisImg },
    ],
    falaFinal: "Você acabou de ler um relatório real de neurociência básica sobre reflexos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Identifique a estrutura ou função nervosa.",
    instrucao: "⏱️ Escolha a resposta correta",
    duracaoSegundos: 25,
    pecas: [
      { id: "neuronio", emoji: "🧬", rotulo: "Neurônio" },
      { id: "cerebro", emoji: "🧠", rotulo: "Cérebro" },
      { id: "medula", emoji: "🦴", rotulo: "Medula" },
      { id: "sinapse", emoji: "⚡", rotulo: "Sinapse" },
      { id: "nervo", emoji: "🕸️", rotulo: "Nervo" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Unidade básica", emoji: "🧬", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Transmite impulso elétrico", emoji: "⚡", cor: "from-sky-500 to-cyan-700" }, contexto: "Célula que forma toda a rede do sistema nervoso.", pecaCertaId: "neuronio", fotoUrl: celulaImg, feedbackAcerto: "NEURÔNIO — célula básica do sistema nervoso.", feedbackErro: "Unidade básica que transmite impulso = NEURÔNIO." },
      { id: "r2", municipioA: { nome: "Comanda reflexos", emoji: "🦴", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Dentro da coluna", emoji: "🩻", cor: "from-rose-500 to-pink-700" }, contexto: "Estrutura que responde a reflexos sem esperar o cérebro.", pecaCertaId: "medula", fotoUrl: sistemasImg, feedbackAcerto: "MEDULA ESPINHAL — comanda reflexos rapidamente.", feedbackErro: "Comanda reflexo e fica na coluna = MEDULA ESPINHAL." },
      { id: "r3", municipioA: { nome: "Ponto de contato", emoji: "⚡", cor: "from-indigo-500 to-purple-700" }, municipioB: { nome: "Entre dois neurônios", emoji: "🧬", cor: "from-emerald-500 to-teal-700" }, contexto: "Local onde ocorre a comunicação química entre células nervosas.", pecaCertaId: "sinapse", fotoUrl: celulaImg, feedbackAcerto: "SINAPSE — comunicação química entre neurônios.", feedbackErro: "Ponto de contato entre neurônios = SINAPSE." },
    ],
    falaFinal: "Você já identifica na hora as estruturas do sistema nervoso. Vocabulário de neurocientista.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "O sistema nervoso se divide em duas grandes funções: PROCESSAMENTO (SNC decide) e CONEXÃO (SNP transmite ao corpo).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: sistemasImg,
    fatias: [
      { id: "processamento", rotulo: "Processamento", emoji: "🧠", percentual: 55, cor: "#0ea5e9", descricao: "Encéfalo e medula espinhal recebem, interpretam e decidem as respostas do corpo, inclusive reflexos.", exemplos: ["Cérebro", "Cerebelo", "Medula espinhal"], fotoUrl: sistemasImg },
      { id: "conexao", rotulo: "Conexão", emoji: "🕸️", percentual: 45, cor: "#6366f1", descricao: "Nervos periféricos transportam sinais sensoriais e ordens motoras entre o SNC e o resto do corpo.", exemplos: ["Nervo ciático", "Nervos sensoriais da pele", "Nervos motores dos músculos"], fotoUrl: bancadaImg },
    ],
    falaFinal: "Processamento sem conexão não move nada. Conexão sem processamento age sem propósito. Precisam um do outro.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão da semana. 3 perguntas e sua Certificação de Neurologista Júnior é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: sistemasImg,
    perguntas: [
      { id: "q1", pergunta: "Qual estrutura permite reação rápida sem esperar o cérebro?", fotoUrl: sistemasImg,
        opcoes: [
          { id: "a", texto: "Medula espinhal, no arco reflexo", correta: true },
          { id: "b", texto: "O músculo, que age sozinho" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. A medula processa o arco reflexo antes do cérebro perceber.",
        feedbackErro: "Músculo não decide sozinho. É a MEDULA ESPINHAL que comanda o arco reflexo." },
      { id: "q2", pergunta: "O que é uma sinapse?", fotoUrl: celulaImg,
        opcoes: [
          { id: "a", texto: "Ponto de comunicação química/elétrica entre neurônios", correta: true },
          { id: "b", texto: "Um tipo de osso do crânio" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Sim. Sinapse é onde um neurônio passa a mensagem ao próximo.",
        feedbackErro: "Não é osso. SINAPSE é o ponto de comunicação entre neurônios." },
      { id: "q3", pergunta: "Qual a função do sistema nervoso periférico?", fotoUrl: bancadaImg,
        opcoes: [
          { id: "a", texto: "Conectar o SNC aos músculos e órgãos do corpo", correta: true },
          { id: "b", texto: "Produzir hormônios digestivos" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Exato. Os nervos periféricos são o elo entre o SNC e o restante do corpo.",
        feedbackErro: "Hormônios são do sistema endócrino. O SNP CONECTA o SNC ao corpo." },
    ],
    selo: { nome: "Certificação de Neurologista Júnior", subtitulo: "Academia Científica · Programa 2 · Missão 2 concluída", emoji: "🧠", cor: "from-sky-500 to-cyan-700" },
    falaFinal: "Missão concluída. Você entende como o sistema nervoso comanda ações motoras e sensoriais.",
  },
};
