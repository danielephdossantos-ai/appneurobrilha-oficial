import type { AulaArteV1 } from "../../types";
import modemOld from "@/assets/arte-8ano/u6-modem-old.jpg";
import computerLab from "@/assets/arte-8ano/u6-computer-lab.jpg";
import crtMonitor from "@/assets/arte-8ano/u6-crt-monitor.jpg";
import htmlSource from "@/assets/arte-8ano/u6-html-source.jpg";
import keyboard from "@/assets/arte-8ano/u6-keyboard.jpg";
import chat90s from "@/assets/arte-8ano/u6-chat-90s.jpg";
import hyperlink from "@/assets/arte-8ano/u6-hyperlink.jpg";
import serverRoom from "@/assets/arte-8ano/u6-server-room.jpg";
import fiberOptics from "@/assets/arte-8ano/u6-fiber-optics.jpg";
import digitalCollage from "@/assets/arte-8ano/u6-digital-collage.jpg";
import telepresence from "@/assets/arte-8ano/u6-telepresence.jpg";
import meme from "@/assets/arte-8ano/u6-meme.jpg";

/**
 * Arte · 8º Ano · Unidade 6 · Aula 01 — "Net Art e Cultura de Rede: A Estética do Compartilhamento"
 * Metanarrativa: 🌐 Eco-Simulacros da Revolução Digital
 * Foco: net art dos anos 1990, cultura de rede, hipertexto, memes e remix como linguagem artística.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-net-art",
  titulo: "Net Art e Cultura de Rede — A Estética do Compartilhamento",
  iconeTrilha: "🌐",
  bncc: ["EF69AR01", "EF69AR04", "EF69AR31", "EF69AR32"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Ciber-Designer! O laboratório biomecânico se conectou a um CABO DE REDE gigante. O modem discou, a tela de tubo piscou e um mundo inteiro de páginas, links e memes apareceu. Bem-vindo à Net Art: a arte que nasce, vive e se espalha DENTRO da internet. Toca em cada pista.",
    titulo: "🌐 O Despertar da Rede",
    instrucao: "Toca em cada pista pra ativar o módulo Ciber-Rede",
    itens: [
      { emoji: "☎️", rotulo: "Modem discado (anos 1990)", descricao: "Nos anos 1990, conectar à internet fazia um som de bipes e chiados. A rede era LENTA, mas artistas já a usavam como espaço de criação.", cor: "#0891b2", fotoUrl: modemOld },
      { emoji: "🖥️", rotulo: "Net Art (Arte de Internet)", descricao: "Movimento artístico em que a OBRA só existe na rede: páginas web, e-mails, chats e hyperlinks viram material de criação.", cor: "#7c3aed", fotoUrl: crtMonitor },
      { emoji: "🔗", rotulo: "Hipertexto e Links", descricao: "Textos e imagens conectados por LINKS clicáveis: o público navega e monta seu próprio caminho de leitura pela obra.", cor: "#16a34a", fotoUrl: hyperlink },
      { emoji: "😂", rotulo: "Memes e Remix Digital", descricao: "Imagens, vídeos e frases que se espalham e se TRANSFORMAM em cada compartilhamento — uma nova forma de autoria coletiva.", cor: "#f97316", fotoUrl: meme },
    ],
    falaFinal: "Sua missão: entender como a internet virou galeria, museu e ateliê ao mesmo tempo.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de ciber-designer antes de entrar na rede!",
    perguntas: [
      {
        pergunta: "Um artista cria uma obra que só existe DENTRO de uma página de internet, com links que o público clica pra navegar. Que tipo de arte é essa?",
        fotoUrl: crtMonitor,
        alternativas: [
          { texto: "Net Art — a obra nasce, vive e só faz sentido DENTRO da rede", correta: true },
          { texto: "Escultura em mármore — obra física e estática de museu", correta: false },
        ],
        feedbackAcerto: "Perfeito! Net Art é a arte que usa a PRÓPRIA internet (páginas, links, e-mails) como suporte e obra.",
        feedbackErro: "Mármore é material físico tradicional. Aqui a obra só existe NA REDE — isso é Net Art.",
      },
      {
        pergunta: "Um meme viaja de perfil em perfil e cada pessoa modifica a imagem original com uma frase nova. O que esse processo representa?",
        fotoUrl: meme,
        alternativas: [
          { texto: "Remix e autoria coletiva — a obra se transforma a cada compartilhamento", correta: true },
          { texto: "Plágio proibido — ninguém pode alterar a imagem original", correta: false },
        ],
        feedbackAcerto: "Isso! Na cultura de rede, remixar e compartilhar É a forma de criação — autoria vira coletiva.",
        feedbackErro: "Na internet, remixar não é roubo: é a LINGUAGEM da cultura de rede, onde todos recriam juntos.",
      },
      {
        pergunta: "Uma pessoa clica em palavras sublinhadas de um texto e pula para outra página, montando seu próprio caminho de leitura. Como se chama essa estrutura?",
        fotoUrl: hyperlink,
        alternativas: [
          { texto: "Hipertexto — textos conectados por links que o leitor escolhe navegar", correta: true },
          { texto: "Texto linear impresso — só pode ser lido do início ao fim, em ordem fixa", correta: false },
        ],
        feedbackAcerto: "Excelente! O hipertexto quebra a leitura linear: cada pessoa cria seu próprio percurso pela obra.",
        feedbackErro: "Texto impresso é sempre linear. O hipertexto é o OPOSTO: caminhos múltiplos escolhidos por quem lê.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do ciber-designer de rede. Toca em cada verbete!",
    cards: [
      { termo: "Net Art (Arte de Internet)", definicao: "Movimento artístico surgido nos anos 1990 em que a obra só existe e faz sentido DENTRO da internet: páginas, e-mails, chats e navegadores.", emoji: "🖥️", cor: "#7c3aed", fotoUrl: crtMonitor },
      { termo: "Hipertexto", definicao: "Estrutura de texto com LINKS clicáveis que conectam páginas e conteúdos, permitindo que cada leitor monte seu próprio caminho de navegação.", emoji: "🔗", cor: "#16a34a", fotoUrl: hyperlink },
      { termo: "Cultura de Rede", definicao: "Conjunto de práticas, valores e estéticas nascidas da conexão global: compartilhamento, colaboração e viralização de conteúdo.", emoji: "🌐", cor: "#0891b2", fotoUrl: serverRoom },
      { termo: "Remix / Cultura Meme", definicao: "Prática de recriar, modificar e compartilhar imagens, vídeos ou frases, gerando autoria COLETIVA que se transforma a cada compartilhamento.", emoji: "😂", cor: "#f97316", fotoUrl: meme },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a INTERNET virou o novo suporte da arte contemporânea.",
    paragrafos: [
      "Depois do corpo, do vídeo e da luz virarem suportes de arte, chegou a vez da PRÓPRIA INTERNET. Nos anos 1990, quando o modem discado fazia barulho de chiado pra conectar, artistas começaram a criar obras que só existiam DENTRO da rede — a chamada NET ART.",
      "Diferente de uma pintura pendurada numa parede, a Net Art vive em páginas web, e-mails e chats. Ela pode mudar toda vez que alguém clica, comentar de volta com o público, ou até se autodestruir depois de um tempo. A obra não é um objeto fixo: é uma EXPERIÊNCIA em rede.",
      "O segredo por trás disso é o HIPERTEXTO: textos e imagens conectados por links azuis sublinhados. Em vez de ler uma história do início ao fim, o público CLICA e pula de página em página, escolhendo seu próprio caminho — cada pessoa monta uma versão diferente da obra.",
      "Com a popularização da internet, nasceu a CULTURA DE REDE: um jeito novo de criar baseado em compartilhar, comentar e remixar. Um meme, por exemplo, nasce de uma imagem e ganha vida própria: cada pessoa que o compartilha muda uma palavra, um detalhe — a autoria vira COLETIVA.",
      "Hoje, quando alguém remixa um vídeo, cria um meme ou monta uma colagem digital com imagens da internet, está usando a mesma lógica dos primeiros artistas de rede: a obra pertence a TODOS que a tocam, compartilham e transformam. A arte deixou de ser só individual pra virar uma REDE de autorias.",
    ],
    pigmentos: [
      { nome: "Net Art", hex: "#7c3aed", fonte: "Obra que só existe na internet", emoji: "🖥️", fotoUrl: crtMonitor },
      { nome: "Hipertexto", hex: "#16a34a", fonte: "Links que criam caminhos de leitura", emoji: "🔗", fotoUrl: hyperlink },
      { nome: "Cultura de Rede", hex: "#0891b2", fonte: "Compartilhar, comentar, remixar", emoji: "🌐", fotoUrl: serverRoom },
      { nome: "Remix / Meme", hex: "#f97316", fonte: "Autoria coletiva em transformação", emoji: "😂", fotoUrl: meme },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do ciber-designer de rede!",
    perguntas: [
      {
        pergunta: "O que torna uma obra de NET ART diferente de uma pintura tradicional?",
        fotoUrl: crtMonitor,
        alternativas: [
          { texto: "Ela só existe DENTRO da internet e pode mudar ou interagir com o público a cada clique", correta: true },
          { texto: "Ela é feita exclusivamente com tinta a óleo sobre tela, igual às pinturas clássicas", correta: false },
        ],
        feedbackAcerto: "Correto! A Net Art vive na rede — página, link e clique fazem parte da própria obra.",
        feedbackErro: "Tinta a óleo é técnica tradicional. A Net Art é DIGITAL e existe apenas dentro da internet.",
      },
      {
        pergunta: "Qual é a função do HIPERTEXTO numa obra de Net Art?",
        fotoUrl: hyperlink,
        alternativas: [
          { texto: "Conectar páginas por links, permitindo que cada pessoa monte seu próprio caminho de navegação", correta: true },
          { texto: "Obrigar todo mundo a ler o texto sempre na mesma ordem, do início ao fim", correta: false },
        ],
        feedbackAcerto: "Isso! O hipertexto quebra a linearidade — cada clique gera uma experiência única.",
        feedbackErro: "Isso é leitura linear tradicional. O hipertexto faz o OPOSTO: libera caminhos múltiplos.",
      },
      {
        pergunta: "Por que um MEME é considerado uma forma de autoria coletiva?",
        fotoUrl: meme,
        alternativas: [
          { texto: "Porque cada pessoa que compartilha pode remixar e transformar a obra, somando novas camadas de sentido", correta: true },
          { texto: "Porque só o criador original tem permissão de alterar ou compartilhar a imagem", correta: false },
        ],
        feedbackAcerto: "Perfeito! Na cultura de rede, remixar é criar junto — a autoria se espalha por toda a comunidade.",
        feedbackErro: "Pelo contrário: o meme vive justamente porque OUTRAS pessoas o remixam e recriam.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada obra pela LINGUAGEM da cultura de rede que ela usa!",
    animais: [
      {
        nome: "Página web com links que mudam a cada clique", emoji: "🖥️", fotoUrl: crtMonitor,
        corAlvo: { nome: "Net Art", hex: "#7c3aed" },
        opcoes: [
          { nome: "Net Art", hex: "#7c3aed" },
          { nome: "Escultura em Bronze", hex: "#78716c" },
          { nome: "Pintura a Óleo", hex: "#dc2626" },
        ],
        falaAcerto: "Isso! Obra que só existe na internet e reage ao clique = Net Art.",
      },
      {
        nome: "Texto sublinhado que leva a outra página", emoji: "🔗", fotoUrl: hyperlink,
        corAlvo: { nome: "Hipertexto", hex: "#16a34a" },
        opcoes: [
          { nome: "Hipertexto", hex: "#16a34a" },
          { nome: "Cultura de Rede", hex: "#0891b2" },
          { nome: "Remix", hex: "#f97316" },
        ],
        falaAcerto: "Correto! Link clicável que conecta conteúdos = hipertexto.",
      },
      {
        nome: "Imagem engraçada que muda de frase a cada compartilhamento", emoji: "😂", fotoUrl: meme,
        corAlvo: { nome: "Remix / Cultura Meme", hex: "#f97316" },
        opcoes: [
          { nome: "Remix / Cultura Meme", hex: "#f97316" },
          { nome: "Net Art", hex: "#7c3aed" },
          { nome: "Hipertexto", hex: "#16a34a" },
        ],
        falaAcerto: "Perfeito! Imagem que se transforma a cada compartilhamento = remix da cultura meme.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra criar a SUA primeira Obra Remixável em Rede.",
    passos: [
      { id: "p1", texto: "Escolho uma IMAGEM ou frase original pra ser o ponto de partida da obra", emoji: "🖼️", ordem: 1, fotoUrl: digitalCollage },
      { id: "p2", texto: "Recorto e colo elementos de OUTRAS fontes digitais, criando uma colagem híbrida", emoji: "✂️", ordem: 2, fotoUrl: htmlSource },
      { id: "p3", texto: "Adiciono um TEXTO ou frase de efeito que dialoga com a imagem, no estilo meme", emoji: "💬", ordem: 3, fotoUrl: chat90s },
      { id: "p4", texto: "Penso em como essa obra pode ser MODIFICADA por outras pessoas ao ser compartilhada", emoji: "🔁", ordem: 4, fotoUrl: fiberOptics },
      { id: "p5", texto: "Compartilho a obra e convido a turma a REMIXAR, criando uma corrente de autoria coletiva", emoji: "📤", ordem: 5, fotoUrl: keyboard },
    ],
    falaAcerto: "Você acabou de criar sua primeira Obra Remixável do Laboratório de Cultura de Rede!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do ciber-designer de rede. Toca nas palavras coloridas.",
    titulo: "Diário do Ciber-Designer de Rede",
    trechos: [
      { texto: "Sou ciber-designer de rede. Meu ateliê agora é a", palavraDestaque: "internet", corDestaque: "#0891b2" },
      { texto: "Quando crio uma obra que só existe online e reage ao clique, faço", palavraDestaque: "net art", corDestaque: "#7c3aed" },
      { texto: "Se conecto textos e imagens por links clicáveis, uso", palavraDestaque: "hipertexto", corDestaque: "#16a34a" },
      { texto: "Tudo isso faz parte da", palavraDestaque: "cultura de rede", corDestaque: "#0891b2" },
      { texto: "que valoriza compartilhar e comentar. Quando remixo uma imagem que todo mundo transforma, crio um", palavraDestaque: "meme", corDestaque: "#f97316" },
      { texto: "e viro parte de uma autoria coletiva que nunca para de se espalhar." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🔗 A Cadeia do Compartilhamento! Passa a obra adiante pela rede antes que o sinal caia.",
    titulo: "🔗 A Cadeia do Compartilhamento",
    instrucao: "Toca em cada elo pra repassar a obra pela rede antes do tempo acabar!",
    tempoSeg: 40,
    itens: [
      { emoji: "🖼️", rotulo: "Imagem original postada", cor: "#7c3aed" },
      { emoji: "💬", rotulo: "Comentário que modifica a frase", cor: "#0891b2" },
      { emoji: "🔁", rotulo: "Remix compartilhado por outro perfil", cor: "#16a34a" },
      { emoji: "😂", rotulo: "Meme viralizado na rede", cor: "#f59e0b" },
      { emoji: "🔗", rotulo: "Link levando pra nova página", cor: "#f97316" },
      { emoji: "🌐", rotulo: "Obra final espalhada pela rede", cor: "#dc2626" },
    ],
    falaFinal: "Cadeia completa! A obra se espalhou por toda a rede, transformada por cada mão que a tocou.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o Laboratório de Cultura de Rede. Toca em cada verbete pra consolidar!",
    titulo: "🌐 Caderno do Ciber-Designer de Rede",
    itens: [
      { emoji: "☎️", rotulo: "Internet dos anos 1990", descricao: "Modem discado, telas de tubo e as primeiras conexões que abriram espaço pra arte em rede.", cor: "#0891b2", fotoUrl: modemOld },
      { emoji: "🖥️", rotulo: "Net Art", descricao: "Movimento artístico em que a obra só existe e faz sentido dentro da internet — páginas, links e e-mails.", cor: "#7c3aed", fotoUrl: crtMonitor },
      { emoji: "🔗", rotulo: "Hipertexto", descricao: "Estrutura de links clicáveis que conecta conteúdos e permite caminhos de leitura escolhidos pelo público.", cor: "#16a34a", fotoUrl: hyperlink },
      { emoji: "🌐", rotulo: "Cultura de Rede", descricao: "Valores e práticas nascidas da conexão global: compartilhar, comentar e colaborar em tempo real.", cor: "#0891b2", fotoUrl: serverRoom },
      { emoji: "😂", rotulo: "Remix / Cultura Meme", descricao: "Prática de recriar e transformar imagens e vídeos, gerando autoria coletiva que se espalha pela rede.", cor: "#f97316", fotoUrl: meme },
      { emoji: "🧵", rotulo: "Fibra Óptica", descricao: "Cabos de luz que carregam dados a velocidades altíssimas, sustentando a rede que conecta o planeta.", cor: "#16a34a", fotoUrl: fiberOptics },
    ],
    falaFinal: "Laboratório de Cultura de Rede ATIVADO — mais um módulo dos Eco-Simulacros online!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, ciber-designer de rede!",
    quiz: {
      pergunta: "Um artista cria uma página de internet cujo conteúdo muda de acordo com os cliques do público, e convida outras pessoas a remixarem a obra compartilhando-a. Que características da arte contemporânea de rede estão presentes aqui?",
      alternativas: [
        { texto: "Net Art (a obra só existe na internet) + Cultura de Rede (compartilhamento e remix como autoria coletiva)", correta: true },
        { texto: "Escultura clássica em mármore, fixa e produzida por um único autor num ateliê fechado", correta: false },
      ],
      feedback: "Excelente! A NET ART é a linguagem da arte contemporânea em que a obra nasce, vive e se transforma DENTRO da internet, através de páginas, links e interações do público. Quando essa obra é compartilhada e remixada por várias pessoas, ela entra na CULTURA DE REDE, onde a autoria deixa de ser individual e passa a ser COLETIVA — cada compartilhamento soma uma nova camada de sentido. Escultura em mármore é o oposto: obra física, fixa, de autor único, sem interação nem remix.",
    },
    missaoFamilia:
      "📸 Missão Ciber-Rede em Família: com um adulto, crie uma OBRA REMIXÁVEL. Escolha uma imagem ou desenho, adicione uma frase de efeito no estilo meme, e pense em como ELA poderia ser modificada por outras pessoas se fosse compartilhada (cores diferentes, novo texto, novo recorte). Fotografe a obra e grave um áudio de 30s explicando como ela poderia viajar e se transformar em rede — mande pro álbum.",
    recompensaTitulo: "🌐 Laboratório de Cultura de Rede do Eco-Simulacro ATIVADO.",
    recompensaItem: "🔗 Elo de Fibra Óptica Luminescente + Selo de Autoria Coletiva",
  },

  recompensa: { xp: 130, moedas: 65, medalha: "Elo de Fibra Óptica Luminescente" },
};
