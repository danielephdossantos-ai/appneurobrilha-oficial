import type { AulaArteV1 } from "../../types";
import mapaAlhazen from "@/assets/arte-5ano/u2-mapa-alhazen.jpg";
import mapaVermeer from "@/assets/arte-5ano/u2-mapa-vermeer.jpg";
import mapaPinhole from "@/assets/arte-5ano/u2-mapa-pinhole.jpg";
import mapaEclipse from "@/assets/arte-5ano/u2-mapa-eclipse.jpg";
import vocabRetilinea from "@/assets/arte-5ano/u2-vocab-retilinea.jpg";
import vocabEstenopo from "@/assets/arte-5ano/u2-vocab-estenopo.jpg";
import vocabInversao from "@/assets/arte-5ano/u2-vocab-inversao.jpg";
import vocabFoco from "@/assets/arte-5ano/u2-vocab-foco.jpg";
import matCaixa from "@/assets/arte-5ano/u2-mat-caixa.jpg";
import matPapelVegetal from "@/assets/arte-5ano/u2-mat-papelvegetal.jpg";
import matAgulha from "@/assets/arte-5ano/u2-mat-agulha.jpg";
import matFita from "@/assets/arte-5ano/u2-mat-fita.jpg";
import qInversao from "@/assets/arte-5ano/u2-q-inversao.jpg";
import qVermeer from "@/assets/arte-5ano/u2-q-vermeer.jpg";
import qFoco from "@/assets/arte-5ano/u2-q-foco.jpg";
import passo1 from "@/assets/arte-5ano/u2-passo1.jpg";
import passo2 from "@/assets/arte-5ano/u2-passo2.jpg";
import passo3 from "@/assets/arte-5ano/u2-passo3.jpg";
import passo4 from "@/assets/arte-5ano/u2-passo4.jpg";
import passo5 from "@/assets/arte-5ano/u2-passo5.jpg";

/**
 * Arte · 5º Ano · Unidade 2 · Aula 01 — "A Câmera Escura e a Engenharia da Luz"
 * Metanarrativa: 📷 A Matriz da Percepção Visual
 * Fonte histórica: Tratados Ópticos de Alhazen (séc. XI) + Vermeer (séc. XVII)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-camera-escura",
  titulo: "A Câmera Escura e a Engenharia da Luz",
  iconeTrilha: "📷",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Engenheiro da Luz! Brilha encontrou uma caixa de sapatos furada num quarto escuro. Do outro lado da parede, uma imagem do jardim aparece DE PONTA-CABEÇA dentro da caixa. Isso é CÂMERA ESCURA: a luz vira engenharia. Toca em cada pista.",
    titulo: "📷 A Matriz da Percepção",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "📜", rotulo: "Alhazen (séc. XI)", descricao: "O cientista árabe Ibn al-Haytham (Alhazen) escreveu tratados ópticos descrevendo como a luz atravessa um pequeno furo e projeta o mundo de cabeça pra baixo.", cor: "#78350f", fotoUrl: mapaAlhazen },
      { emoji: "🖼️", rotulo: "Vermeer (séc. XVII)", descricao: "O pintor holandês Johannes Vermeer usava uma câmera escura pra projetar a cena real na tela e copiar a luz com precisão fotográfica.", cor: "#b45309", fotoUrl: mapaVermeer },
      { emoji: "🕳️", rotulo: "O Estenopo (pinhole)", descricao: "Um furinho minúsculo, do tamanho certo, é a peça-chave: grande demais borra a imagem, pequeno demais escurece tudo.", cor: "#1e3a8a", fotoUrl: mapaPinhole },
      { emoji: "🌒", rotulo: "Eclipse projetado", descricao: "Em eclipses solares, um furo entre folhas de árvore projeta no chão várias luas crescentes — a mesma física do estenopo!", cor: "#f59e0b", fotoUrl: mapaEclipse },
    ],
    falaFinal: "Você vai dominar a engenharia da luz igual os grandes cientistas e pintores!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de engenheiro da luz!",
    perguntas: [
      {
        pergunta: "Por que a imagem dentro da câmera escura aparece de cabeça pra baixo?",
        fotoUrl: qInversao,
        alternativas: [
          { texto: "Porque a luz viaja em linha reta e os raios se cruzam ao passar pelo furo", correta: true },
          { texto: "Porque o furo tem um espelho escondido dentro", correta: false },
        ],
        feedbackAcerto: "Perfeito! Propagação retilínea da luz faz os raios se cruzarem no furo.",
        feedbackErro: "Não tem espelho nenhum! A luz viaja RETA e os raios se CRUZAM no estenopo, invertendo a imagem.",
      },
      {
        pergunta: "Vermeer usava a câmera escura pra…",
        fotoUrl: qVermeer,
        alternativas: [
          { texto: "Projetar a cena real na tela e copiar luz e sombra com precisão", correta: true },
          { texto: "Misturar tintas mais rápido", correta: false },
        ],
        feedbackAcerto: "Isso! A projeção óptica ajudava Vermeer a pintar com realismo fotográfico.",
        feedbackErro: "Nada a ver com misturar tinta. A câmera escura PROJETAVA a cena pra ele copiar.",
      },
      {
        pergunta: "O tamanho do estenopo (furo) afeta…",
        fotoUrl: mapaPinhole,
        alternativas: [
          { texto: "A nitidez e o brilho da imagem projetada", correta: true },
          { texto: "A cor da parede da caixa", correta: false },
        ],
        feedbackAcerto: "Correto! Furo pequeno = mais nítido e mais escuro; furo grande = mais brilho e mais borrado.",
        feedbackErro: "A cor da caixa não muda nada. O furo controla NITIDEZ x BRILHO da imagem.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário da engenharia da luz. Toca em cada card!",
    cards: [
      { termo: "Propagação Retilínea", definicao: "A luz sempre viaja em linha reta, a menos que algo a desvie. É essa lei que faz a câmera escura funcionar.", emoji: "📏", cor: "#1e3a8a", fotoUrl: vocabRetilinea },
      { termo: "Estenopo", definicao: "Furo minúsculo por onde a luz passa. Também chamado de 'pinhole'. É o coração óptico da câmera escura.", emoji: "🕳️", cor: "#b45309", fotoUrl: vocabEstenopo },
      { termo: "Inversão da Imagem", definicao: "Como os raios de luz se cruzam no furo, o que está em cima projeta embaixo e vice-versa.", emoji: "🙃", cor: "#78350f", fotoUrl: vocabInversao },
      { termo: "Foco e Brilho", definicao: "Equilíbrio entre diâmetro do furo, nitidez da imagem e quantidade de luz que entra na caixa.", emoji: "🔆", cor: "#f59e0b", fotoUrl: vocabFoco },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como um furo minúsculo virou a base da fotografia.",
    paragrafos: [
      "No século XI, o cientista árabe Alhazen (Ibn al-Haytham) escreveu tratados de óptica explicando como a luz viaja sempre em LINHA RETA — a PROPAGAÇÃO RETILÍNEA da luz.",
      "Ele observou que, ao passar por um furo minúsculo — o ESTENOPO —, os raios de luz vindos de cima da cena se cruzam e projetam embaixo do lado oposto, e os raios de baixo projetam em cima. É a INVERSÃO DA IMAGEM.",
      "Séculos depois, no XVII, o pintor holandês Johannes Vermeer usava uma câmera escura — um quarto ou caixa escura com um furo — pra projetar a cena real numa tela. Ele copiava luz, sombra e cor com precisão quase fotográfica.",
      "O segredo está no tamanho do furo: pequeno demais, a imagem fica nítida mas escura; grande demais, fica clara mas borrada. Encontrar o FOCO certo é equilibrar nitidez e brilho.",
      "Hoje construímos câmeras escuras com caixa de sapato preta e papel vegetal na tela — a mesma física de Alhazen, usada por Vermeer, ainda vive nas câmeras fotográficas modernas.",
    ],
    pigmentos: [
      { nome: "Caixa de sapato preta", hex: "#1f2937", fonte: "Corpo da câmera escura", emoji: "📦", fotoUrl: matCaixa },
      { nome: "Papel vegetal", hex: "#f5f5dc", fonte: "Tela onde a imagem invertida se projeta", emoji: "📄", fotoUrl: matPapelVegetal },
      { nome: "Agulha fina", hex: "#94a3b8", fonte: "Fura o estenopo com precisão", emoji: "📌", fotoUrl: matAgulha },
      { nome: "Fita isolante preta", hex: "#111827", fonte: "Veda a luz que não deve entrar", emoji: "🎞️", fotoUrl: matFita },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno do engenheiro da luz!",
    perguntas: [
      {
        pergunta: "Qual cientista do século XI descreveu a propagação retilínea da luz em tratados ópticos?",
        fotoUrl: mapaAlhazen,
        alternativas: [
          { texto: "Alhazen (Ibn al-Haytham)", correta: true },
          { texto: "Vermeer", correta: false },
        ],
        feedbackAcerto: "Perfeito! Alhazen é considerado o pai da óptica moderna.",
        feedbackErro: "Vermeer é o pintor que usou a técnica no XVII. Quem descreveu a física foi ALHAZEN.",
      },
      {
        pergunta: "Por que a imagem projetada pela câmera escura aparece invertida?",
        fotoUrl: qInversao,
        alternativas: [
          { texto: "Porque os raios de luz viajam em linha reta e se cruzam ao passar pelo estenopo", correta: true },
          { texto: "Porque a caixa de sapato é escura por dentro", correta: false },
        ],
        feedbackAcerto: "Isso! É a propagação retilínea cruzando os raios no furo.",
        feedbackErro: "A cor escura só evita reflexos indesejados. A INVERSÃO vem do cruzamento dos raios retos.",
      },
      {
        pergunta: "Vermeer usava a câmera escura como ferramenta para…",
        fotoUrl: qVermeer,
        alternativas: [
          { texto: "Projetar a cena real e copiar luz e proporção com precisão na pintura", correta: true },
          { texto: "Aquecer as tintas antes de pintar", correta: false },
        ],
        feedbackAcerto: "Fantástico! É a base da engenharia óptica aplicada à arte.",
        feedbackErro: "Nada de aquecer tinta! A câmera escura servia pra PROJETAR a cena real.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada exemplo usa um conceito da câmera escura. Combina certinho!",
    animais: [
      {
        nome: "Furo minúsculo na caixa", emoji: "🕳️", fotoUrl: mapaPinhole,
        corAlvo: { nome: "Estenopo (pinhole)", hex: "#1e3a8a" },
        opcoes: [
          { nome: "Estenopo (pinhole)", hex: "#1e3a8a" },
          { nome: "Cor-luz RGB", hex: "#dc2626" },
          { nome: "Anamorfose catóptrica", hex: "#64748b" },
        ],
        falaAcerto: "Isso! O furo minúsculo é o estenopo que projeta a imagem.",
      },
      {
        nome: "Imagem de ponta-cabeça na tela", emoji: "🙃", fotoUrl: vocabInversao,
        corAlvo: { nome: "Inversão da imagem", hex: "#78350f" },
        opcoes: [
          { nome: "Inversão da imagem", hex: "#78350f" },
          { nome: "Persistência retiniana", hex: "#0ea5e9" },
          { nome: "Pontilhismo", hex: "#a855f7" },
        ],
        falaAcerto: "Perfeito! Raios retos cruzados no furo invertem a cena.",
      },
      {
        nome: "Pintura de Vermeer com luz precisa", emoji: "🖼️", fotoUrl: mapaVermeer,
        corAlvo: { nome: "Câmera escura na pintura barroca", hex: "#b45309" },
        opcoes: [
          { nome: "Câmera escura na pintura barroca", hex: "#b45309" },
          { nome: "Linhas de fuga do Renascimento", hex: "#7c2d12" },
          { nome: "Vitral gótico", hex: "#f59e0b" },
        ],
        falaAcerto: "Correto! Vermeer projetava a cena real pra copiar com fidelidade.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra construir sua PRÓPRIA câmera escura.",
    passos: [
      { id: "p1", texto: "PINTO o interior de uma caixa de sapatos de preto fosco", emoji: "📦", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "FURO um lado da caixa com uma agulha, criando o estenopo", emoji: "📌", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "COLO papel vegetal no lado oposto, como tela de projeção", emoji: "📄", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "APONTO o furo pra uma cena bem iluminada lá fora", emoji: "🌞", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "OBSERVO no papel vegetal a imagem projetada de cabeça pra baixo!", emoji: "🙃", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Sua câmera escura funciona igualzinho à de Alhazen e Vermeer!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do engenheiro da luz. Toca nas palavras coloridas.",
    titulo: "Diário do Engenheiro da Luz",
    trechos: [
      { texto: "Sou um caçador de luz. Uso a", palavraDestaque: "propagação retilínea", corDestaque: "#1e3a8a" },
      { texto: "pra projetar imagens através de um", palavraDestaque: "estenopo", corDestaque: "#b45309" },
      { texto: "A imagem sempre aparece com", palavraDestaque: "inversão", corDestaque: "#78350f" },
      { texto: "No século XI, Alhazen já entendia isso; no XVII,", palavraDestaque: "Vermeer", corDestaque: "#b45309" },
      { texto: "Eu domino a engenharia da luz — igual os grandes mestres!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 O Foco de Vermeer! Toca em CADA componente do sistema óptico antes do tempo acabar.",
    titulo: "🎯 O Foco de Vermeer",
    instrucao: "Toque em todos os elementos antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🕳️", rotulo: "Estenopo ajustado", cor: "#1e3a8a" },
      { emoji: "📦", rotulo: "Caixa escura vedada", cor: "#78350f" },
      { emoji: "📄", rotulo: "Papel vegetal esticado", cor: "#f5f5dc" },
      { emoji: "🌞", rotulo: "Cena externa iluminada", cor: "#f59e0b" },
      { emoji: "🙃", rotulo: "Imagem invertida projetada", cor: "#b45309" },
      { emoji: "🔆", rotulo: "Equilíbrio nitidez x brilho", cor: "#dc2626" },
    ],
    falaFinal: "Foco perfeito! Você equilibrou nitidez e brilho como um mestre pintor.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da câmera escura. Toca em cada verbete!",
    titulo: "📓 Caderno da Câmera Escura",
    itens: [
      { emoji: "📜", rotulo: "Alhazen (séc. XI)", descricao: "Tratados ópticos descrevendo a propagação retilínea da luz.", cor: "#78350f", fotoUrl: mapaAlhazen },
      { emoji: "🖼️", rotulo: "Vermeer (séc. XVII)", descricao: "Usava a câmera escura pra projetar cenas e pintar com precisão.", cor: "#b45309", fotoUrl: mapaVermeer },
      { emoji: "🕳️", rotulo: "Estenopo", descricao: "Furo minúsculo que projeta a imagem — quanto menor, mais nítido.", cor: "#1e3a8a", fotoUrl: vocabEstenopo },
      { emoji: "🙃", rotulo: "Inversão da Imagem", descricao: "Raios de luz retos se cruzam no furo e invertem a cena projetada.", cor: "#78350f", fotoUrl: vocabInversao },
      { emoji: "🔆", rotulo: "Foco e Brilho", descricao: "Equilíbrio entre diâmetro do furo, nitidez e luminosidade da imagem.", cor: "#f59e0b", fotoUrl: vocabFoco },
      { emoji: "🌒", rotulo: "Eclipse projetado", descricao: "Furos entre folhas projetam luas crescentes no chão durante eclipses.", cor: "#dc2626", fotoUrl: mapaEclipse },
    ],
    falaFinal: "Segunda página do Atlas da Matriz da Percepção DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, engenheiro da luz!",
    quiz: {
      pergunta: "Por que a imagem projetada dentro de uma câmera escura aparece de cabeça pra baixo?",
      alternativas: [
        { texto: "Porque a luz viaja em linha reta (propagação retilínea) e os raios se cruzam ao passar pelo estenopo", correta: true },
        { texto: "Porque existe um espelho escondido dentro da caixa", correta: false },
      ],
      feedback: "Perfeito! A propagação retilínea da luz faz com que os raios vindos de cima e de baixo da cena se cruzem exatamente no estenopo, invertendo a imagem projetada. Alhazen descreveu isso no século XI, e Vermeer usou esse princípio para pintar com realismo no século XVII!",
    },
    missaoFamilia:
      "🕳️ O Quarto Escuro Fotográfico: Com seus pais, escureçam totalmente um quarto durante o dia e façam um furo de 1cm numa cortina ou papelão cobrindo a janela. Observem a parede oposta — o mundo lá fora vai aparecer projetado e invertido na parede! Registrem no álbum.",
    recompensaTitulo: "📜 Página 2 restaurada — O Desenho da Caixa Escura Central.",
    recompensaItem: "🔮 Lente de Vidro de Murano Convexo",
  },

  recompensa: { xp: 100, moedas: 50, medalha: "Lente de Vidro de Murano Convexo" },
};
