import type { AulaArteV1 } from "../../types";
import { url as artistaHacker } from "@/assets/arte-8ano/u2-artista-hacker.jpg.asset.json";
import { url as blocosPixel } from "@/assets/arte-8ano/u2-blocos-pixel.jpg.asset.json";
import { url as codigoCorrompido } from "@/assets/arte-8ano/u2-codigo-corrompido.jpg.asset.json";
import { url as datamoshingVideo } from "@/assets/arte-8ano/u2-datamoshing-video.jpg.asset.json";
import { url as faixaCromatica } from "@/assets/arte-8ano/u2-faixa-cromatica.jpg.asset.json";
import { url as glitchCromatico } from "@/assets/arte-8ano/u2-glitch-cromatico.jpg.asset.json";
import { url as imasTv } from "@/assets/arte-8ano/u2-imas-tv.jpg.asset.json";
import { url as interferenciaSatelite } from "@/assets/arte-8ano/u2-interferencia-satelite.jpg.asset.json";
import { url as laboratorioVideoArte } from "@/assets/arte-8ano/u2-laboratorio-video-arte.jpg.asset.json";
import { url as monitorTubo } from "@/assets/arte-8ano/u2-monitor-tubo.jpg.asset.json";
import { url as namJunePaik } from "@/assets/arte-8ano/u2-nam-june-paik-tv-distorcida.jpg.asset.json";
import { url as passo1 } from "@/assets/arte-8ano/u2-passo1.jpg.asset.json";
import { url as passo2 } from "@/assets/arte-8ano/u2-passo2.jpg.asset.json";
import { url as passo3 } from "@/assets/arte-8ano/u2-passo3.jpg.asset.json";
import { url as passo4 } from "@/assets/arte-8ano/u2-passo4.jpg.asset.json";
import { url as passo5 } from "@/assets/arte-8ano/u2-passo5.jpg.asset.json";
import { url as pinturaClassicaDistorcida } from "@/assets/arte-8ano/u2-pintura-classica-distorcida.jpg.asset.json";
import { url as pixelsEstourados } from "@/assets/arte-8ano/u2-pixels-estourados.jpg.asset.json";
import { url as ranhurasRgb } from "@/assets/arte-8ano/u2-ranhuras-rgb.jpg.asset.json";

/**
 * Arte · 8º Ano · Unidade 2 · Aula 01 — "A Estética do Erro: Glitch Art e a Crítica ao Controle Digital"
 * Metanarrativa: 🎭 Eco-Simulacros da Revolução Digital
 * Foco: Glitch Art, datamoshing, subversão tecnológica, Nam June Paik.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-glitch-art",
  titulo: "A Estética do Erro — Glitch Art e a Crítica ao Controle Digital",
  iconeTrilha: "📺",
  bncc: ["EF69AR01", "EF69AR04", "EF69AR31", "EF69AR32"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Ciber-Designer! O Laboratório Biomecânico TRAVOU — pixels estouraram na tela, linhas coloridas cortam a imagem e o sistema entrou em pane. Calma: isso não é defeito, é a próxima estação dos Eco-Simulacros! Bem-vinda(o) à Estética do Erro, onde a falha vira linguagem visual e PROTESTO contra o controle digital.",
    titulo: "📺 O Sistema que Travou de Propósito",
    instrucao: "Toca em cada pista pra decodificar o sinal corrompido",
    itens: [
      { emoji: "📺", rotulo: "Pane de sinal (sistema travando)", descricao: "Linhas coloridas, blocos de pixel estourados e cores fora do lugar: quando um sistema falha, a imagem se transforma numa paisagem visual completamente nova.", cor: "#dc2626", fotoUrl: pixelsEstourados },
      { emoji: "🐛", rotulo: "Glitch Art (arte do erro)", descricao: "Artistas usam o ERRO digital de propósito — corrompendo arquivos, código e sinal — pra questionar a busca pela perfeição técnica.", cor: "#7c3aed", fotoUrl: artistaHacker },
      { emoji: "🧲", rotulo: "Ímãs em TVs de tubo (1965)", descricao: "Um artista pioneiro colocava ímãs poderosos em cima de televisores de tubo e distorcia o sinal AO VIVO, criando pinturas de luz em movimento.", cor: "#0891b2", fotoUrl: namJunePaik },
      { emoji: "🎞️", rotulo: "Datamoshing (vídeo corrompido)", descricao: "Técnica de editar o CÓDIGO de um vídeo digital pra fazer quadros se misturarem, derreterem e se fundirem uns nos outros.", cor: "#16a34a", fotoUrl: datamoshingVideo },
    ],
    falaFinal: "Sua missão: entender que o erro pode ser uma FERRAMENTA de crítica e liberdade criativa — não um problema a consertar.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho antes de corromper o primeiro arquivo!",
    perguntas: [
      {
        pergunta: "Um artista abre a foto num BLOCO DE NOTAS, digita símbolos aleatórios no meio do código e salva de novo como imagem. O que costuma acontecer?",
        fotoUrl: codigoCorrompido,
        alternativas: [
          { texto: "A imagem ganha faixas coloridas e blocos de pixel distorcidos — um GLITCH CROMÁTICO controlado", correta: true },
          { texto: "A imagem fica exatamente igual, porque texto não afeta arquivos de foto", correta: false },
        ],
        feedbackAcerto: "Isso! Alterar o código-fonte do arquivo de imagem gera distorções visuais — a base técnica do glitch cromático.",
        feedbackErro: "Editar os bytes de uma imagem SEMPRE altera a decodificação das cores — por isso surgem as faixas e blocos.",
      },
      {
        pergunta: "Em 1965, um artista prendia ÍMÃS em cima de TVs de tubo ligadas. Qual era o objetivo dessa ação?",
        fotoUrl: imasTv,
        alternativas: [
          { texto: "Distorcer o sinal eletromagnético ao vivo, transformando a transmissão de TV numa pintura abstrata em movimento", correta: true },
          { texto: "Consertar a antena da televisão pra melhorar a recepção do sinal", correta: false },
        ],
        feedbackAcerto: "Perfeito! Nam June Paik usava ímãs pra INTERFERIR no feixe de elétrons e criar arte com o próprio erro do aparelho.",
        feedbackErro: "O ímã não conserta nada — ele DISTORCE o sinal de propósito, transformando defeito em pintura eletrônica.",
      },
      {
        pergunta: "No Datamoshing, o que acontece quando um artista mexe no código de compressão de um vídeo?",
        fotoUrl: datamoshingVideo,
        alternativas: [
          { texto: "Os quadros do vídeo se fundem, derretem e se misturam uns nos outros de forma imprevisível", correta: true },
          { texto: "O vídeo fica com resolução mais nítida e cores mais realistas", correta: false },
        ],
        feedbackAcerto: "Exato! O datamoshing corrompe a informação entre quadros, criando fusões visuais impossíveis de prever totalmente.",
        feedbackErro: "O datamoshing não melhora nitidez — ele PROVOCA fusões e derretimentos entre os quadros do vídeo.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do decodificador de sinal. Toca em cada verbete!",
    cards: [
      { termo: "Glitch Art", definicao: "Linguagem artística que usa o ERRO digital (falha de sinal, arquivo corrompido, bug de software) como material estético e forma de protesto contra a perfeição técnica.", emoji: "🐛", cor: "#7c3aed", fotoUrl: artistaHacker },
      { termo: "Datamoshing", definicao: "Técnica de corromper o código de compressão de um vídeo pra fazer quadros se fundirem, derreterem e se misturarem entre si.", emoji: "🎞️", cor: "#16a34a", fotoUrl: datamoshingVideo },
      { termo: "Subversão Tecnológica", definicao: "Usar uma tecnologia de um jeito OPOSTO ao que foi planejado — como travar um sistema de propósito — pra criticar o controle exercido por máquinas perfeitas.", emoji: "🧨", cor: "#dc2626", fotoUrl: interferenciaSatelite },
      { termo: "Pane de Sinal / Ranhuras RGB", definicao: "Distorção visual causada por interferência em transmissões de imagem, separando os canais Vermelho, Verde e Azul (RGB) em faixas coloridas.", emoji: "📡", cor: "#0891b2", fotoUrl: ranhurasRgb },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como o ERRO virou linguagem de protesto na arte digital.",
    paragrafos: [
      "Depois do corpo híbrido cheio de sensores impecáveis, os Eco-Simulacros nos jogam num território inesperado: o TERRITÓRIO DO ERRO. Aqui, travar não é problema — é técnica. Bem-vindo à GLITCH ART, a estética que transforma falha digital em obra de arte.",
      "Tudo começou muito antes dos computadores pessoais. Em 1965, um artista pioneiro colava ÍMÃS poderosos em cima de televisores de tubo ligados. O campo magnético distorcia o feixe de elétrons dentro do aparelho, e a imagem da TV virava uma pintura abstrata em movimento, ao vivo, sem nenhum software. Esse foi um dos primeiros gestos de VIDEOARTE da história.",
      "Hoje, a mesma ideia acontece no computador: um bloco de notas comum consegue abrir o CÓDIGO de um arquivo de foto. Ao digitar símbolos aleatórios no meio desse código e salvar de novo como imagem, os pixels se reorganizam de forma inesperada — nasce o GLITCH CROMÁTICO, com faixas de cor e blocos de pixel estourados.",
      "Quando o alvo é vídeo, a técnica se chama DATAMOSHING: mexendo no código de compressão entre um quadro e outro, o artista faz cenas inteiras se DERRETEREM umas nas outras, como se o tempo do vídeo tivesse rasgado.",
      "Por trás de toda essa estética existe uma ideia forte: a SUBVERSÃO TECNOLÓGICA. Vivemos numa sociedade obcecada por telas perfeitas, sinais sem interferência, softwares que nunca travam. A Glitch Art faz o oposto de propósito — ela questiona essa OBSESSÃO PELA PERFEIÇÃO, usando o erro como um ato de liberdade criativa e crítica ao controle que a tecnologia exerce sobre nós.",
    ],
    pigmentos: [
      { nome: "Glitch Art", hex: "#7c3aed", fonte: "O erro como material estético", emoji: "🐛", fotoUrl: artistaHacker },
      { nome: "Vídeo Arte Analógica", hex: "#0891b2", fonte: "Ímãs distorcendo o sinal de TV", emoji: "🧲", fotoUrl: namJunePaik },
      { nome: "Datamoshing", hex: "#16a34a", fonte: "Quadros de vídeo se fundindo", emoji: "🎞️", fotoUrl: datamoshingVideo },
      { nome: "Subversão Tecnológica", hex: "#dc2626", fonte: "Crítica à obsessão pela perfeição", emoji: "🧨", fotoUrl: interferenciaSatelite },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do decodificador de sinal!",
    perguntas: [
      {
        pergunta: "Qual é a diferença entre um erro ACIDENTAL de computador e a GLITCH ART?",
        fotoUrl: glitchCromatico,
        alternativas: [
          { texto: "Na Glitch Art, o erro é PROVOCADO DE PROPÓSITO pelo artista como escolha estética e crítica", correta: true },
          { texto: "Não existe diferença nenhuma — todo travamento de computador já é considerado arte", correta: false },
        ],
        feedbackAcerto: "Correto! A intenção do artista é o que transforma o bug num gesto artístico consciente.",
        feedbackErro: "Um travamento comum é só falha técnica. A Glitch Art existe quando o erro é ESCOLHIDO e usado com intenção.",
      },
      {
        pergunta: "Por que Nam June Paik usava ímãs em cima de TVs de tubo em 1965?",
        fotoUrl: imasTv,
        alternativas: [
          { texto: "Pra distorcer o sinal eletromagnético ao vivo e transformar a transmissão em pintura abstrata em movimento", correta: true },
          { texto: "Pra aumentar o volume do som da televisão sem usar o controle remoto", correta: false },
        ],
        feedbackAcerto: "Isso! Ele interferia no campo magnético do tubo pra criar imagem — um marco da videoarte.",
        feedbackErro: "Ímã não mexe em som. Ele distorce o FEIXE DE ELÉTRONS da imagem, criando a pintura eletrônica.",
      },
      {
        pergunta: "Qual é a crítica CENTRAL que a Glitch Art faz à sociedade digital?",
        fotoUrl: monitorTubo,
        alternativas: [
          { texto: "Questiona a obsessão pela perfeição técnica, usando o erro como liberdade criativa e forma de protesto", correta: true },
          { texto: "Defende que todos os computadores deveriam ser substituídos por máquinas de escrever antigas", correta: false },
        ],
        feedbackAcerto: "Perfeito! O glitch é uma forma de resistência estética ao controle e à perfeição impostos pela tecnologia.",
        feedbackErro: "A Glitch Art não é sobre voltar ao passado — é sobre QUESTIONAR o controle digital usando o próprio erro.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada obra pela TÉCNICA de Glitch Art que ela usa!",
    animais: [
      {
        nome: "Foto aberta no bloco de notas e recorrompida", emoji: "🐛", fotoUrl: glitchCromatico,
        corAlvo: { nome: "Glitch Cromático", hex: "#7c3aed" },
        opcoes: [
          { nome: "Glitch Cromático", hex: "#7c3aed" },
          { nome: "Datamoshing", hex: "#16a34a" },
          { nome: "Pintura Acadêmica", hex: "#78716c" },
        ],
        falaAcerto: "Isso! Editar o código de uma imagem estática gera o glitch cromático.",
      },
      {
        nome: "Ímãs distorcendo o sinal de uma TV de tubo", emoji: "🧲", fotoUrl: namJunePaik,
        corAlvo: { nome: "Vídeo Arte Analógica", hex: "#0891b2" },
        opcoes: [
          { nome: "Vídeo Arte Analógica", hex: "#0891b2" },
          { nome: "Glitch Cromático", hex: "#7c3aed" },
          { nome: "Escultura em Bronze", hex: "#78716c" },
        ],
        falaAcerto: "Correto! Interferência magnética no tubo catódico é videoarte analógica pioneira.",
      },
      {
        nome: "Cenas de vídeo se fundindo umas nas outras", emoji: "🎞️", fotoUrl: datamoshingVideo,
        corAlvo: { nome: "Datamoshing", hex: "#16a34a" },
        opcoes: [
          { nome: "Datamoshing", hex: "#16a34a" },
          { nome: "Vídeo Arte Analógica", hex: "#0891b2" },
          { nome: "Glitch Cromático", hex: "#7c3aed" },
        ],
        falaAcerto: "Perfeito! Corromper o código entre quadros de vídeo é datamoshing.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pro SEU autorretrato com pane de satélite.",
    passos: [
      { id: "p1", texto: "Tiro ou escolho uma FOTO de rosto com boa iluminação pra servir de base", emoji: "📷", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "Abro o arquivo de imagem num BLOCO DE NOTAS pra enxergar o código por trás dos pixels", emoji: "📝", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "Digito e apago pequenos trechos de código com cuidado, salvando cópias a cada tentativa", emoji: "⌨️", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "Escolho a versão com RANHURAS RGB mais interessantes, ampliando os pixels estourados", emoji: "🌈", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "Dou um TÍTULO à obra explicando qual crítica ao controle digital o autorretrato faz", emoji: "🏷️", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Você acabou de criar seu primeiro Autorretrato de Pane de Satélite!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do decodificador de sinal. Toca nas palavras coloridas.",
    titulo: "Diário do Decodificador de Sinal",
    trechos: [
      { texto: "Sou decodificador de sinal. Meu material favorito não é a tinta — é o", palavraDestaque: "erro digital", corDestaque: "#dc2626" },
      { texto: "Quando corrompo o código de uma foto, produzo", palavraDestaque: "glitch cromático", corDestaque: "#7c3aed" },
      { texto: "Se derreto os quadros de um vídeo, faço", palavraDestaque: "datamoshing", corDestaque: "#16a34a" },
      { texto: "Tudo isso começou com um pioneiro que usava", palavraDestaque: "ímãs em TVs de tubo", corDestaque: "#0891b2" },
      { texto: "pra distorcer sinal ao vivo. Hoje meu gesto é", palavraDestaque: "subversão tecnológica", corDestaque: "#f97316" },
      { texto: "porque questiono a obsessão pela perfeição usando o erro como liberdade criativa." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 O Corruptor de Código! Altera as linhas certas do código pra distorcer a pintura clássica SEM travar o sistema.",
    titulo: "🎯 O Corruptor de Código",
    instrucao: "Toca nas linhas de código certas pra glitchar a pintura antes que o sistema trave!",
    tempoSeg: 40,
    itens: [
      { emoji: "🖼️", rotulo: "Pintura clássica original", cor: "#78716c", fotoUrl: pinturaClassicaDistorcida },
      { emoji: "💻", rotulo: "Linha de código RGB", cor: "#7c3aed" },
      { emoji: "🔀", rotulo: "Bloco de pixel embaralhado", cor: "#f59e0b", fotoUrl: blocosPixel },
      { emoji: "🌈", rotulo: "Faixa cromática distorcida", cor: "#0891b2", fotoUrl: faixaCromatica },
      { emoji: "⚠️", rotulo: "Alerta de travamento total (evitar!)", cor: "#dc2626" },
      { emoji: "✅", rotulo: "Glitch estável e controlado", cor: "#16a34a" },
    ],
    falaFinal: "Código corrompido com sucesso! A pintura clássica virou uma obra glitch — sem travar o sistema.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o Decodificador de Sinal. Toca em cada verbete pra consolidar!",
    titulo: "🧪 Caderno do Decodificador de Sinal",
    itens: [
      { emoji: "🐛", rotulo: "Glitch Art", descricao: "Arte que usa o erro digital de propósito como material estético e forma de protesto contra a perfeição técnica.", cor: "#7c3aed", fotoUrl: artistaHacker },
      { emoji: "🧲", rotulo: "Nam June Paik e os Ímãs em TVs", descricao: "Em 1965, ímãs colados em TVs de tubo distorciam o sinal ao vivo — um marco pioneiro da videoarte.", cor: "#0891b2", fotoUrl: namJunePaik },
      { emoji: "🎞️", rotulo: "Datamoshing", descricao: "Técnica de corromper o código de compressão de vídeo pra fundir e derreter quadros entre si.", cor: "#16a34a", fotoUrl: datamoshingVideo },
      { emoji: "🧨", rotulo: "Subversão Tecnológica", descricao: "Usar a tecnologia de um jeito oposto ao planejado pra criticar o controle exercido pelas máquinas.", cor: "#dc2626", fotoUrl: interferenciaSatelite },
      { emoji: "📡", rotulo: "Ranhuras RGB", descricao: "Faixas coloridas separando os canais Vermelho, Verde e Azul — o visual clássico da pane de sinal.", cor: "#f59e0b", fotoUrl: ranhurasRgb },
      { emoji: "🖥️", rotulo: "Laboratório de Videoarte", descricao: "Espaço onde erro digital, sinal analógico e código se encontram pra virar experimentação artística.", cor: "#16a34a", fotoUrl: laboratorioVideoArte },
    ],
    falaFinal: "Decodificador de Sinal RGB Distorcido ATIVADO — segundo módulo dos Eco-Simulacros online!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, decodificador de sinal!",
    quiz: {
      pergunta: "Qual é a principal intenção CRÍTICA da Glitch Art dentro da arte contemporânea?",
      alternativas: [
        { texto: "Questionar a obsessão da sociedade pela perfeição técnica, usando o erro digital como forma de liberdade criativa", correta: true },
        { texto: "Ensinar as pessoas a consertar computadores e televisores velhos com defeito", correta: false },
      ],
      feedback: "Exato! A GLITCH ART não busca conserto nenhum — ela propõe o oposto: assumir o erro como escolha estética consciente pra questionar por que insistimos tanto em telas, sinais e softwares 'perfeitos'. Desde os ímãs de Nam June Paik nas TVs de tubo até o datamoshing digital de hoje, o glitch é um ato de SUBVERSÃO TECNOLÓGICA — a falha vira liberdade, não problema técnico a resolver.",
    },
    missaoFamilia:
      "📸 Missão O Bug Fotográfico Familiar: com um adulto, escolha uma câmera ou celular e fotografe uma cena da casa fazendo MOVIMENTOS BRUSCOS durante o clique (arrastando o celular, girando de leve, tremendo de propósito). Repita algumas vezes até conseguir uma foto com rastros de luz, borrões coloridos ou distorções interessantes. Escolha a melhor e dê um TÍTULO que explique qual crítica ao controle digital ela representa. Mande pro álbum da família.",
    recompensaTitulo: "📺 Decodificador de Sinal RGB Distorcido ATIVADO.",
    recompensaItem: "🖼️ A Galeria das Telas Fragmentadas",
  },

  recompensa: { xp: 130, moedas: 65, medalha: "Decodificador de Sinal RGB Distorcido" },
};
