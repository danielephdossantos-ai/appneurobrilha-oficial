import type { AulaGeoV1 } from "../../types";
import { url as bancadaImg } from "@/assets/ciencias-6ano/u2-a1/bancada-biologia.jpg.asset.json";
import { url as celulaImg } from "@/assets/ciencias-6ano/u2-a1/celula-vegetal.jpg.asset.json";
import { url as niveisImg } from "@/assets/ciencias-6ano/u2-a1/niveis-organizacao.jpg.asset.json";
import { url as sistemasImg } from "@/assets/ciencias-6ano/u2-a1/sistemas-corpo.jpg.asset.json";
import celulaVideo from "@/assets/ciencias-6ano/u2-a1/celula-vida.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 2 · Aula 03
 * "Corpo em Ação" — Sistemas muscular, ósseo e nervoso integrados (EF06CI09).
 */
export const aula03: AulaGeoV1 = {
  slug: "aula-03-corpo-em-acao",
  titulo: "Corpo em Ação",
  iconeTrilha: "🏃",
  recompensa: { xp: 130, moedas: 50, medalha: "Fisiologista Júnior" },
  bncc: ["EF06CI09"],
  duracaoMin: 35,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada de fisiologia. Analise os modelos do movimento humano.",
    mapaUrl: bancadaImg,
    imagemDestaqueUrl: sistemasImg,
    aurora:
      "Programa 2, missão 3. Chutar uma bola parece simples, mas envolve três sistemas trabalhando juntos ao mesmo tempo: ossos, músculos e nervos. Hoje vamos ver essa parceria em ação.",
    falaFinal:
      "Nenhum sistema do corpo age sozinho. Ossos, músculos e nervos formam uma equipe integrada para cada movimento que você faz.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Situação-problema: você decide chutar uma bola. O cérebro manda o comando — mas o QUE realmente move a perna?",
    pergunta: "Qual sua HIPÓTESE — o que faz a perna se mover de fato?",
    fotoUrl: sistemasImg,
    opcoes: [
      { id: "musculo_osso", titulo: "Músculo se contrai e move o osso", subtitulo: "sistema muscular + ósseo juntos", emoji: "💪", cor: "from-red-500 to-rose-700", fotoUrl: sistemasImg },
      { id: "osso_solo", titulo: "O osso se move sozinho", subtitulo: "sem ajuda de músculo", emoji: "🦴", cor: "from-slate-500 to-slate-800", fotoUrl: bancadaImg },
      { id: "pele", titulo: "A pele empurra a perna", subtitulo: "força vem de fora", emoji: "🖐️", cor: "from-amber-500 to-orange-700", fotoUrl: bancadaImg },
    ],
    respostaCerta: "musculo_osso",
    feedbackAcerto:
      "Correto. O nervo motor avisa o MÚSCULO, ele se CONTRAI e puxa o OSSO ao qual está fixado pelo tendão — assim a perna se move.",
    feedbackErro:
      "Osso não se move por conta própria e pele não gera força de movimento. É o MÚSCULO contraindo que move o OSSO — com ordem vinda do sistema nervoso.",
    falaFinal:
      "Movimento é sempre trabalho em EQUIPE: nervo comanda, músculo contrai, osso se desloca como uma alavanca.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos que explicam como o corpo se move de forma integrada.",
    instrucao: "Vocabulário do movimento",
    cadernos: [
      { id: "osso", capa: "OSSO", emoji: "🦴", cor: "from-slate-500 to-slate-700", conteudo: "Estrutura rígida que forma o esqueleto. Serve de apoio, protege órgãos e funciona como ALAVANCA para o movimento.", exemplo: "Ex.: o corpo humano adulto tem 206 ossos.", fotoUrl: sistemasImg },
      { id: "musculo", capa: "MÚSCULO", emoji: "💪", cor: "from-red-500 to-rose-700", conteudo: "Tecido capaz de CONTRAIR e RELAXAR. Ao se contrair, puxa o osso ao qual está ligado, gerando movimento.", exemplo: "Ex.: bíceps contrai para dobrar o braço.", fotoUrl: bancadaImg },
      { id: "tendao", capa: "TENDÃO", emoji: "🔗", cor: "from-amber-500 to-orange-700", conteudo: "Estrutura resistente que LIGA o músculo ao osso, transmitindo a força da contração.", exemplo: "Ex.: tendão de Aquiles liga músculo da panturrilha ao calcanhar.", fotoUrl: niveisImg },
      { id: "articulacao", capa: "ARTICULAÇÃO", emoji: "🦵", cor: "from-emerald-500 to-teal-700", conteudo: "Ponto de encontro entre dois ossos que permite o MOVIMENTO. Pode ser fixa, semimóvel ou móvel.", exemplo: "Ex.: joelho e cotovelo são articulações móveis.", fotoUrl: sistemasImg },
      { id: "integracao", capa: "INTEGRAÇÃO", emoji: "🧠", cor: "from-indigo-500 to-purple-700", conteudo: "O sistema nervoso comanda o músculo, o músculo move o osso pela articulação. Veja no vídeo a atividade celular contínua que sustenta tudo isso.", exemplo: "Ex.: correr envolve nervo + músculo + osso simultaneamente.", videoUrl: celulaVideo.url },
    ],
    falaFinal: "Osso, músculo, tendão, articulação, integração. Cinco peças que, juntas, fazem você correr, pular e escrever.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Mapa do corpo em movimento. Toque em cada estrutura envolvida.",
    instrucao: "Toque em cada estrutura",
    mapaUrl: sistemasImg,
    pontos: [
      { id: "cerebro", x: 50, y: 15, emoji: "🧠", cor: "from-sky-500 to-cyan-700", titulo: "Cérebro", texto: "Decide o movimento e envia a ordem pelo nervo motor.", fotoUrl: sistemasImg },
      { id: "musculo", x: 30, y: 55, emoji: "💪", cor: "from-red-500 to-rose-700", titulo: "Músculo do braço", texto: "Recebe o sinal nervoso e se contrai, encurtando-se.", fotoUrl: bancadaImg },
      { id: "tendao", x: 40, y: 65, emoji: "🔗", cor: "from-amber-500 to-orange-700", titulo: "Tendão", texto: "Transmite a força da contração muscular diretamente ao osso.", fotoUrl: niveisImg },
      { id: "osso", x: 60, y: 80, emoji: "🦴", cor: "from-slate-500 to-slate-700", titulo: "Osso do antebraço", texto: "Se desloca pela articulação do cotovelo, completando o movimento.", fotoUrl: sistemasImg },
    ],
    falaFinal: "Cérebro decide, músculo contrai, tendão transmite, osso se move. Uma cadeia perfeita de comando.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Checkpoint técnico. 3 perguntas sobre a integração dos sistemas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que liga o músculo ao osso?", fotoUrl: sistemasImg,
        cards: [
          { id: "a", emoji: "🔗", titulo: "Tendão", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🩸", titulo: "Veia", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🕸️", titulo: "Nervo", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. TENDÃO é a estrutura que transmite a força do músculo ao osso.",
        feedbackErro: "Veia transporta sangue e nervo transmite sinal elétrico. Quem LIGA músculo a osso é o TENDÃO." },
      { id: "q2", pergunta: "Quem inicia o comando para o músculo se contrair?", fotoUrl: sistemasImg,
        cards: [
          { id: "a", emoji: "🧠", titulo: "Sistema nervoso", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🦴", titulo: "O próprio osso", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🩹", titulo: "A pele", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. O SISTEMA NERVOSO envia o sinal elétrico que ativa a contração muscular.",
        feedbackErro: "Osso e pele não comandam contração. É o SISTEMA NERVOSO que dá a ordem inicial." },
      { id: "q3", pergunta: "O que é uma articulação?", fotoUrl: sistemasImg,
        cards: [
          { id: "a", emoji: "🦵", titulo: "Ponto de encontro entre ossos que permite movimento", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💪", titulo: "Um tipo de músculo", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔗", titulo: "Um tipo de tendão", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Perfeito. Articulação conecta ossos e permite o movimento entre eles.",
        feedbackErro: "Não é músculo nem tendão. ARTICULAÇÃO é o ponto entre dois ossos que permite movimento." },
    ],
    falaFinal: "Nervo comanda, tendão liga, articulação permite. Cada peça tem função exata na equipe do movimento.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "O movimento humano depende de duas frentes: COMANDO (sistema nervoso decide e envia ordem) e EXECUÇÃO (músculos e ossos realizam o movimento).",
    instrucao: "Toque nos interruptores",
    mapaUrl: sistemasImg,
    camadas: [
      { id: "comando", rotulo: "Comando", emoji: "🧠", cor: "from-sky-500 to-cyan-700", rect: { x: 2, y: 2, w: 96, h: 35 }, descricao: "Sistema nervoso decide o movimento e envia o sinal elétrico pelos nervos motores.", fotoUrl: sistemasImg },
      { id: "execucao", rotulo: "Execução", emoji: "💪", cor: "from-red-500 to-rose-700", rect: { x: 2, y: 39, w: 96, h: 59 }, descricao: "Músculos se contraem, tendões transmitem força e ossos se movem pelas articulações.", fotoUrl: bancadaImg },
    ],
    falaFinal: "Comando sem execução é só ideia. Execução sem comando é caos. O corpo precisa das duas etapas.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Reconstrua a cadeia completa de um movimento voluntário, do pensamento ao deslocamento do osso.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Qual a sequência de um movimento voluntário completo?",
    paradas: [
      { id: "decisao", emoji: "🧠", rotulo: "1. Decisão no cérebro", descricao: "O cérebro decide realizar o movimento.", fotoUrl: sistemasImg },
      { id: "nervo_motor", emoji: "🕸️", rotulo: "2. Sinal pelo nervo motor", descricao: "O impulso elétrico viaja até o músculo.", fotoUrl: sistemasImg },
      { id: "contracao", emoji: "💪", rotulo: "3. Contração muscular", descricao: "O músculo recebe o sinal e se contrai.", fotoUrl: bancadaImg },
      { id: "tendao", emoji: "🔗", rotulo: "4. Tração pelo tendão", descricao: "A força é transmitida ao osso pelo tendão.", fotoUrl: niveisImg },
      { id: "deslocamento", emoji: "🦴", rotulo: "5. Deslocamento do osso", descricao: "O osso se move pela articulação, completando o movimento.", fotoUrl: sistemasImg },
    ],
    ordemCerta: ["decisao", "nervo_motor", "contracao", "tendao", "deslocamento"],
    feedbackAcerto: "Exato. Essa é a cadeia real de qualquer movimento voluntário do corpo.",
    feedbackErro: "A ordem é: decisão no cérebro → sinal pelo nervo → contração muscular → tração pelo tendão → deslocamento do osso.",
    falaFinal: "Cinco etapas, uma fração de segundo. O corpo integra sistemas com precisão impressionante.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Programa 2, missão 3.",
    tituloLivro: "📓 Relatório · Observação 14",
    subtitulo: "Análise do movimento de flexão do cotovelo",
    paragrafos: [
      { id: "p1", texto: "MÉTODO: observamos um voluntário flexionando o cotovelo repetidamente. Identificamos que o BÍCEPS se CONTRAI e encurta, enquanto o TRÍCEPS relaxa e se alonga do lado opposto do braço.", chaves: ["bíceps", "tríceps"], definicoes: { bíceps: "Músculo da frente do braço que flexiona o cotovelo.", tríceps: "Músculo de trás do braço que estende o cotovelo." }, fotoUrl: bancadaImg },
      { id: "p2", texto: "EXPLICAÇÃO: os músculos trabalham em PARES ANTAGÔNICOS — quando um contrai, o outro relaxa. Essa contração é comandada por sinais do sistema nervoso e transmitida ao osso pelos TENDÕES fixados nas extremidades.", chaves: ["pares antagônicos", "tendões"], definicoes: { "pares antagônicos": "Dois músculos que fazem movimentos opostos, um contraindo enquanto o outro relaxa.", tendões: "Estruturas que ligam músculo a osso." }, fotoUrl: sistemasImg },
      { id: "p3", texto: "CONCLUSÃO: nenhum movimento acontece com um sistema isolado. O SISTEMA NERVOSO comanda, o MUSCULAR executa a força e o ÓSSEO fornece a estrutura que se desloca. Os três formam uma unidade funcional.", chaves: ["unidade funcional"], definicoes: { "unidade funcional": "Conjunto de sistemas trabalhando juntos para uma função comum." }, fotoUrl: niveisImg },
    ],
    falaFinal: "Você acabou de ler um relatório real sobre fisiologia do movimento humano.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Identifique a estrutura pela função descrita.",
    instrucao: "⏱️ Escolha a resposta correta",
    duracaoSegundos: 25,
    pecas: [
      { id: "osso", emoji: "🦴", rotulo: "Osso" },
      { id: "musculo", emoji: "💪", rotulo: "Músculo" },
      { id: "tendao", emoji: "🔗", rotulo: "Tendão" },
      { id: "articulacao", emoji: "🦵", rotulo: "Articulação" },
      { id: "nervo", emoji: "🕸️", rotulo: "Nervo" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Contrai e relaxa", emoji: "💪", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Gera a força", emoji: "⚡", cor: "from-amber-500 to-orange-700" }, contexto: "Tecido que produz a força necessária para mover o corpo.", pecaCertaId: "musculo", fotoUrl: bancadaImg, feedbackAcerto: "MÚSCULO — gera força por contração.", feedbackErro: "Quem contrai e gera força = MÚSCULO." },
      { id: "r2", municipioA: { nome: "Liga músculo a osso", emoji: "🔗", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Transmite a força", emoji: "➡️", cor: "from-emerald-500 to-teal-700" }, contexto: "Estrutura resistente que conecta o músculo diretamente ao osso.", pecaCertaId: "tendao", fotoUrl: niveisImg, feedbackAcerto: "TENDÃO — transmite a força do músculo ao osso.", feedbackErro: "Liga músculo ao osso = TENDÃO." },
      { id: "r3", municipioA: { nome: "Permite dobrar", emoji: "🦵", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Entre dois ossos", emoji: "🦴", cor: "from-slate-500 to-slate-700" }, contexto: "Ponto onde dois ossos se encontram e permitem movimento entre eles.", pecaCertaId: "articulacao", fotoUrl: sistemasImg, feedbackAcerto: "ARTICULAÇÃO — permite o movimento entre ossos.", feedbackErro: "Encontro entre ossos com movimento = ARTICULAÇÃO." },
    ],
    falaFinal: "Você já domina o vocabulário da fisiologia do movimento.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "O movimento voluntário depende de duas grandes contribuições: COMANDO NERVOSO (decide e ordena) e ESTRUTURA MECÂNICA (músculo, tendão e osso executam).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: sistemasImg,
    fatias: [
      { id: "comando", rotulo: "Comando Nervoso", emoji: "🧠", percentual: 40, cor: "#0ea5e9", descricao: "Sistema nervoso decide o movimento e envia o sinal elétrico que ativa os músculos.", exemplos: ["Cérebro", "Medula espinhal", "Nervos motores"], fotoUrl: sistemasImg },
      { id: "estrutura", rotulo: "Estrutura Mecânica", emoji: "🦴", percentual: 60, cor: "#ef4444", descricao: "Músculos, tendões e ossos transformam o sinal nervoso em movimento real do corpo.", exemplos: ["Músculo bíceps", "Tendão de Aquiles", "Osso do fêmur"], fotoUrl: bancadaImg },
    ],
    falaFinal: "Comando sem estrutura não move nada. Estrutura sem comando fica parada. Os dois juntos criam o movimento.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão da semana. 3 perguntas e sua Certificação de Fisiologista Júnior é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: sistemasImg,
    perguntas: [
      { id: "q1", pergunta: "Qual estrutura transmite a força do músculo ao osso?", fotoUrl: niveisImg,
        opcoes: [
          { id: "a", texto: "O tendão", correta: true },
          { id: "b", texto: "A veia" },
        ],
        feedbackAcerto: "Correto. TENDÃO conecta músculo a osso e transmite a força da contração.",
        feedbackErro: "Veia transporta sangue. Quem liga músculo a osso é o TENDÃO." },
      { id: "q2", pergunta: "Quem dá a ordem inicial para o músculo se mover?", fotoUrl: sistemasImg,
        opcoes: [
          { id: "a", texto: "O sistema nervoso", correta: true },
          { id: "b", texto: "O próprio osso" },
        ],
        feedbackAcerto: "Sim. O SISTEMA NERVOSO envia o sinal que inicia a contração muscular.",
        feedbackErro: "Osso não comanda nada por conta própria. A ordem vem do SISTEMA NERVOSO." },
      { id: "q3", pergunta: "Por que os três sistemas (nervoso, muscular, ósseo) são chamados de integrados?", fotoUrl: bancadaImg,
        opcoes: [
          { id: "a", texto: "Porque trabalham juntos para produzir cada movimento do corpo", correta: true },
          { id: "b", texto: "Porque funcionam de forma totalmente independente" },
        ],
        feedbackAcerto: "Exato. Nenhum dos três produz movimento completo sozinho — precisam trabalhar em conjunto.",
        feedbackErro: "Eles NÃO são independentes. Cada movimento depende dos três sistemas trabalhando JUNTOS." },
    ],
    selo: { nome: "Certificação de Fisiologista Júnior", subtitulo: "Academia Científica · Programa 2 · Missão 3 concluída", emoji: "🏃", cor: "from-red-500 to-rose-700" },
    falaFinal: "Missão concluída. Você entende como sistemas nervoso, muscular e ósseo trabalham em equipe.",
  },
};
