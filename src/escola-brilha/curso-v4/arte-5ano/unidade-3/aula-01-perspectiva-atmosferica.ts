import type { AulaArteV1 } from "../../types";
import motMonalisa from "@/assets/arte-5ano/u3-mot-monalisa.jpg";
import motDavinci from "@/assets/arte-5ano/u3-mot-davinci.jpg";
import motMontanhas from "@/assets/arte-5ano/u3-mot-montanhas.jpg";
import motCeu from "@/assets/arte-5ano/u3-mot-ceu.jpg";
import vocabSfumato from "@/assets/arte-5ano/u3-mot-monalisa.jpg";
import vocabPerspectiva from "@/assets/arte-5ano/u3-vocab-perspectiva.jpg";
import vocabContraste from "@/assets/arte-5ano/u3-vocab-contraste.jpg";
import vocabEspalhamento from "@/assets/arte-5ano/u3-vocab-espalhamento.jpg";
import matGuache from "@/assets/arte-5ano/u3-mat-guache-azul.jpg";
import matPincel from "@/assets/arte-5ano/u3-mat-pincel-seco.jpg";
import matReferencia from "@/assets/arte-5ano/u3-mat-referencia-fotos.jpg";
import matPapel from "@/assets/arte-5ano/u3-mat-papel-canson.jpg";
import qMonalisaDetalhe from "@/assets/arte-5ano/u3-q-monalisa-detalhe.jpg";
import qMontanhas4 from "@/assets/arte-5ano/u3-q-montanhas4camadas.jpg";
import qCeu from "@/assets/arte-5ano/u3-mot-ceu.jpg";
import passo1 from "@/assets/arte-5ano/u3-passo1.jpg";
import passo2 from "@/assets/arte-5ano/u3-passo2.jpg";
import passo3 from "@/assets/arte-5ano/u3-passo3.jpg";
import passo4 from "@/assets/arte-5ano/u3-passo4.jpg";

/**
 * Arte · 5º Ano · Unidade 3 · Aula 01 — "A Perspectiva Atmosférica e o Hack do Cérebro"
 * Metanarrativa: 🏔️ O Códice das Névoas Distantes
 * Fonte histórica: Leonardo da Vinci — Sfumato, Mona Lisa (c. 1503-1506)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-perspectiva-atmosferica",
  titulo: "A Perspectiva Atmosférica e o Hack do Cérebro",
  iconeTrilha: "🏔️",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Explorador da Névoa! Brilha reparou numa coisa estranha: montanhas bem longe SEMPRE parecem azuladas e borradas, nunca verdes e nítidas feito as de perto. Isso é um HACK que Leonardo da Vinci descobriu há 500 anos. Toca em cada pista.",
    titulo: "🏔️ O Códice das Névoas Distantes",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🖼️", rotulo: "Mona Lisa (c. 1503-1506)", descricao: "Atrás do sorriso de Mona Lisa, Leonardo pintou montanhas cada vez mais azuis e borradas até sumirem no horizonte.", cor: "#1e3a8a", fotoUrl: motMonalisa },
      { emoji: "🧑‍🎨", rotulo: "Leonardo da Vinci", descricao: "Cientista e pintor renascentista. Estudou como o ar cheio de poeira e umidade muda as cores que enxergamos ao longe.", cor: "#60a5fa", fotoUrl: motDavinci },
      { emoji: "⛰️", rotulo: "Montanhas Azuladas de Verdade", descricao: "Fotografe qualquer serra distante: ela sempre aparece azul-acinzentada, nunca verde nítida como uma árvore perto de você.", cor: "#94a3b8", fotoUrl: motMontanhas },
      { emoji: "🌫️", rotulo: "Névoa no Horizonte", descricao: "Poeira, umidade e gotículas no ar espalham a luz azul entre seus olhos e as coisas distantes — é física pura virando arte.", cor: "#cbd5e1", fotoUrl: motCeu },
    ],
    falaFinal: "Você vai hackear a profundidade igual Leonardo da Vinci!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de explorador da névoa!",
    perguntas: [
      {
        pergunta: "Por que uma montanha bem distante parece azulada, mesmo sendo verde de perto?",
        fotoUrl: qMontanhas4,
        alternativas: [
          { texto: "O ar cheio de poeira e umidade espalha a luz azul entre nossos olhos e a montanha", correta: true },
          { texto: "Porque as montanhas distantes são feitas de pedra azul", correta: false },
        ],
        feedbackAcerto: "Perfeito! É a Perspectiva Atmosférica — a atmosfera espalha luz azul no caminho.",
        feedbackErro: "Não é a pedra que muda de cor 😄. É o AR entre você e a montanha espalhando luz azul.",
      },
      {
        pergunta: "No sfumato de Leonardo da Vinci, os contornos distantes ficam…",
        fotoUrl: qMonalisaDetalhe,
        alternativas: [
          { texto: "Borrados e enevoados, sem linhas duras", correta: true },
          { texto: "Mais escuros e com contorno preto grosso", correta: false },
        ],
        feedbackAcerto: "Isso! Sfumato significa 'esfumaçado' — sem linhas duras, tudo em transição suave.",
        feedbackErro: "Contorno preto grosso é o oposto do sfumato. Leonardo suavizava tudo como fumaça.",
      },
      {
        pergunta: "Quanto mais longe um objeto está, o CONTRASTE dele (claro x escuro) fica…",
        fotoUrl: qCeu,
        alternativas: [
          { texto: "Cada vez menor — os tons se aproximam do azul-acinzentado do céu", correta: true },
          { texto: "Cada vez maior — fica mais escuro e definido", correta: false },
        ],
        feedbackAcerto: "Correto! É o Contraste Decrescente: longe, tudo se funde num tom só.",
        feedbackErro: "É o contrário: longe, o contraste DIMINUI e tudo se aproxima do azul do céu.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do explorador da névoa. Toca em cada card!",
    cards: [
      { termo: "Sfumato", definicao: "Técnica de Leonardo da Vinci de esfumaçar contornos, sem linhas duras, criando transições suaves entre luz e sombra.", emoji: "🌫️", cor: "#1e3a8a", fotoUrl: vocabSfumato },
      { termo: "Perspectiva Atmosférica", definicao: "Técnica de pintar objetos distantes mais azulados, claros e borrados pra criar sensação de profundidade.", emoji: "🏔️", cor: "#60a5fa", fotoUrl: vocabPerspectiva },
      { termo: "Contraste Decrescente", definicao: "Quanto mais longe, menos diferença entre claro e escuro — tudo se aproxima do tom do céu.", emoji: "📉", cor: "#94a3b8", fotoUrl: vocabContraste },
      { termo: "Espalhamento da Luz Azul", definicao: "Poeira e umidade no ar espalham mais a luz azul que as outras cores, pintando o horizonte de azul.", emoji: "💨", cor: "#cbd5e1", fotoUrl: vocabEspalhamento },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a atmosfera virou um hack pro cérebro enxergar profundidade.",
    paragrafos: [
      "Nosso cérebro precisa de PISTAS pra entender que uma pintura plana tem profundidade. Leonardo da Vinci descobriu que o próprio AR nos dá essa pista de graça.",
      "O ar não é totalmente transparente: ele tem poeira, umidade e gotículas de água. Essas partículas ESPALHAM a luz azul muito mais do que as outras cores. Por isso o céu é azul, e por isso montanhas distantes ficam azuladas — tem uma camada de ar 'tingindo' tudo que está longe.",
      "Leonardo chamou essa técnica de PERSPECTIVA ATMOSFÉRICA (ou perspectiva tonal): objetos distantes ficam mais claros, mais azulados e com CONTRASTE DECRESCENTE — a diferença entre luz e sombra vai sumindo até tudo virar um tom só, quase igual ao céu.",
      "Na MONA LISA (c. 1503-1506), repare atrás do sorriso: existem trilhas, rochas e montanhas. As mais próximas têm cor quente e detalhe nítido; as mais distantes ficam azul pastel, borradas, quase se misturando ao céu. É o SFUMATO — técnica de esfumaçar contornos, sem linhas duras, como se tudo fosse pintado com fumaça.",
      "Hoje, qualquer fotógrafo ou pintor de paisagem usa o mesmo hack: quer dar profundidade? Pinta o que está perto com cores quentes e nítidas, e o que está longe com azul pastel esfumaçado.",
    ],
    pigmentos: [
      { nome: "Guache azul-pastel", hex: "#60a5fa", fonte: "Tom das camadas mais distantes", emoji: "🎨", fotoUrl: matGuache },
      { nome: "Pincel seco pra esfumaçar", hex: "#94a3b8", fonte: "Cria o efeito sfumato nas bordas", emoji: "🖌️", fotoUrl: matPincel },
      { nome: "Foto de referência de montanhas", hex: "#cbd5e1", fonte: "Observar como o azul aumenta com a distância", emoji: "📷", fotoUrl: matReferencia },
      { nome: "Papel de aquarela", hex: "#e2e8f0", fonte: "Superfície ideal pra transições suaves de tinta", emoji: "📄", fotoUrl: matPapel },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno do explorador da névoa!",
    perguntas: [
      {
        pergunta: "O que deixa o horizonte e as montanhas distantes com aparência azulada?",
        fotoUrl: motMontanhas,
        alternativas: [
          { texto: "Poeira e umidade no ar espalhando mais a luz azul no caminho até nossos olhos", correta: true },
          { texto: "A luz do sol que só ilumina de azul as coisas muito longe", correta: false },
        ],
        feedbackAcerto: "Perfeito! É o espalhamento da luz azul pela atmosfera — física virando pista visual.",
        feedbackErro: "O sol não muda de cor pra iluminar longe. É o AR espalhando luz azul no percurso.",
      },
      {
        pergunta: "Na Mona Lisa, como Leonardo pintou as montanhas mais distantes ao fundo?",
        fotoUrl: qMonalisaDetalhe,
        alternativas: [
          { texto: "Azuladas, claras e borradas, com contorno esfumaçado (sfumato)", correta: true },
          { texto: "Verde-escuras e com contorno preto bem grosso", correta: false },
        ],
        feedbackAcerto: "Isso! Sfumato + perspectiva atmosférica criam a sensação de profundidade infinita.",
        feedbackErro: "Contorno preto grosso deixaria tudo colado e sem profundidade. Leonardo usou azul e névoa.",
      },
      {
        pergunta: "O nome da técnica de 'esfumaçar' contornos sem linhas duras é…",
        fotoUrl: vocabSfumato,
        alternativas: [
          { texto: "Sfumato", correta: true },
          { texto: "Pontilhismo", correta: false },
        ],
        feedbackAcerto: "Fantástico! Sfumato vem do italiano 'fumo' (fumaça).",
        feedbackErro: "Pontilhismo é feito de pontinhos de cor. A técnica de esfumaçar contornos é o SFUMATO.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada camada de montanha usa um tom diferente. Combina certinho!",
    animais: [
      {
        nome: "Montanha bem perto (1ª camada)", emoji: "⛰️", fotoUrl: matReferencia,
        corAlvo: { nome: "Verde-marrom quente e nítido", hex: "#78350f" },
        opcoes: [
          { nome: "Verde-marrom quente e nítido", hex: "#78350f" },
          { nome: "Azul pastel esfumaçado", hex: "#60a5fa" },
          { nome: "Cinza quase branco", hex: "#e2e8f0" },
        ],
        falaAcerto: "Isso! Perto, cores quentes e contornos nítidos.",
      },
      {
        nome: "Montanha do meio (2ª/3ª camada)", emoji: "🏔️", fotoUrl: vocabPerspectiva,
        corAlvo: { nome: "Azul-acinzentado médio", hex: "#94a3b8" },
        opcoes: [
          { nome: "Azul-acinzentado médio", hex: "#94a3b8" },
          { nome: "Vermelho vivo", hex: "#dc2626" },
          { nome: "Amarelo forte", hex: "#facc15" },
        ],
        falaAcerto: "Perfeito! No meio do caminho, o contraste já vai diminuindo.",
      },
      {
        nome: "Montanha bem distante (última camada)", emoji: "🌫️", fotoUrl: qMontanhas4,
        corAlvo: { nome: "Azul pastel quase sumindo no céu", hex: "#cbd5e1" },
        opcoes: [
          { nome: "Azul pastel quase sumindo no céu", hex: "#cbd5e1" },
          { nome: "Preto sólido", hex: "#1f2937" },
          { nome: "Verde-escuro nítido", hex: "#166534" },
        ],
        falaAcerto: "Correto! Bem longe, tudo se funde ao tom pastel do horizonte.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os passos pra pintar SUA PRÓPRIA perspectiva atmosférica com 4 camadas de montanhas.",
    passos: [
      { id: "p1", texto: "OBSERVO uma foto de montanhas: perto colorido, longe azulado", emoji: "📷", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "PINTO a 1ª camada (mais perto) com cores quentes e bem nítidas", emoji: "🎨", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "PINTO a 2ª e 3ª camada cada vez mais azuladas e com menos contraste", emoji: "🖌️", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "PINTO a última camada em azul pastel bem clarinho, quase sumindo", emoji: "🌫️", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "ESFUMAÇO as bordas de longe com pincel seco, estilo sfumato", emoji: "💨", ordem: 5, fotoUrl: vocabSfumato },
    ],
    falaAcerto: "Sua paisagem tem profundidade de verdade, igual Leonardo da Vinci criava!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do explorador da névoa. Toca nas palavras coloridas.",
    titulo: "Diário do Explorador da Névoa",
    trechos: [
      { texto: "Sou um hacker do olhar. Uso a", palavraDestaque: "perspectiva atmosférica", corDestaque: "#1e3a8a" },
      { texto: "pra fazer o cérebro enxergar profundidade numa folha plana.", palavraDestaque: "profundidade", corDestaque: "#60a5fa" },
      { texto: "Quanto mais longe, menor o", palavraDestaque: "contraste decrescente", corDestaque: "#94a3b8" },
      { texto: "e mais forte o", palavraDestaque: "sfumato", corDestaque: "#cbd5e1" },
      { texto: "Leonardo da Vinci pintava assim atrás da Mona Lisa — e eu pinto igual!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 O Nebulizador Atmosférico! Toca em CADA nível de umidade/poeira antes do tempo acabar, do mais perto ao mais distante.",
    titulo: "🎯 O Nebulizador Atmosférico",
    instrucao: "Toque em todos os níveis de névoa antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "☀️", rotulo: "Camada 1: ar limpo, cor quente e nítida", cor: "#78350f" },
      { emoji: "🌤️", rotulo: "Camada 2: um pouco de poeira no ar", cor: "#a3b8cc" },
      { emoji: "🌥️", rotulo: "Camada 3: mais umidade, contraste caindo", cor: "#94a3b8" },
      { emoji: "🌫️", rotulo: "Camada 4: névoa densa, quase todo azul", cor: "#60a5fa" },
      { emoji: "💨", rotulo: "Horizonte: azul pastel se fundindo ao céu", cor: "#cbd5e1" },
      { emoji: "🖌️", rotulo: "Pincel seco esfumaçando a borda final", cor: "#1e3a8a" },
    ],
    falaFinal: "Névoa calibrada! Você domina o hack atmosférico de Leonardo.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da perspectiva atmosférica. Toca em cada verbete!",
    titulo: "📓 Caderno da Névoa Distante",
    itens: [
      { emoji: "🖼️", rotulo: "Mona Lisa (c. 1503-1506)", descricao: "Leonardo pintou montanhas cada vez mais azuis e borradas até sumirem no horizonte.", cor: "#1e3a8a", fotoUrl: motMonalisa },
      { emoji: "🌫️", rotulo: "Sfumato", descricao: "Técnica de esfumaçar contornos, sem linhas duras.", cor: "#60a5fa", fotoUrl: vocabSfumato },
      { emoji: "🏔️", rotulo: "Perspectiva Atmosférica", descricao: "Objetos distantes ficam mais azulados, claros e borrados.", cor: "#94a3b8", fotoUrl: vocabPerspectiva },
      { emoji: "📉", rotulo: "Contraste Decrescente", descricao: "Quanto mais longe, menor a diferença entre claro e escuro.", cor: "#cbd5e1", fotoUrl: vocabContraste },
      { emoji: "💨", rotulo: "Espalhamento da Luz Azul", descricao: "Poeira e umidade no ar espalham mais luz azul, pintando o horizonte.", cor: "#60a5fa", fotoUrl: vocabEspalhamento },
      { emoji: "⛰️", rotulo: "4 Camadas de Profundidade", descricao: "Do quente e nítido perto ao azul pastel esfumaçado longe.", cor: "#1e3a8a", fotoUrl: qMontanhas4 },
    ],
    falaFinal: "Nova página do Códice das Névoas Distantes DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, explorador da névoa!",
    quiz: {
      pergunta: "Por que as montanhas bem distantes no horizonte de uma cidade sempre parecem azuladas, mesmo sendo verdes ou cinzas de perto?",
      alternativas: [
        { texto: "Porque o ar cheio de poeira e umidade espalha mais a luz azul entre os nossos olhos e a montanha distante", correta: true },
        { texto: "Porque a Terra pinta as montanhas de azul quando ficam muito longe", correta: false },
      ],
      feedback: "Perfeito! É a Perspectiva Atmosférica que Leonardo da Vinci usou na Mona Lisa: quanto mais longe, mais azul e mais borrado — é física da atmosfera virando técnica de arte!",
    },
    missaoFamilia:
      "📸 Mapeando o Horizonte da Cidade: Vá com seus pais a um lugar alto ou uma janela com vista longa. Tire uma foto do horizonte e compare as cores: o que está perto (nítido, colorido) e o que está bem longe (azulado, borrado). Registrem no álbum da família!",
    recompensaTitulo: "📜 Nova página restaurada — O Códice das Névoas Distantes.",
    recompensaItem: "🧪 Frasco de Pigmento Azul de Lápis-Lazúli",
  },

  recompensa: { xp: 100, moedas: 50, medalha: "Frasco de Lápis-Lazúli" },
};
