import type { AulaArteV1 } from "../../types";
import mapaHolbein from "@/assets/arte-5ano/u1-mapa-holbein.jpg";
import mapaStreet from "@/assets/arte-5ano/u1-mapa-street.jpg";
import mapaEspelho from "@/assets/arte-5ano/u1-mapa-espelho.jpg";
import mapaPare from "@/assets/arte-5ano/u1-mapa-pare.jpg";
import vocabMalha from "@/assets/arte-5ano/u1-vocab-malha.jpg";
import vocabPonto from "@/assets/arte-5ano/u1-vocab-ponto.jpg";
import vocabCatoptrica from "@/assets/arte-5ano/u1-vocab-catoptrica.jpg";
import vocabProjetiva from "@/assets/arte-5ano/u1-vocab-projetiva.jpg";
import matPapel from "@/assets/arte-5ano/u1-mat-papel.jpg";
import matCilindro from "@/assets/arte-5ano/u1-mat-cilindro.jpg";
import matGiz from "@/assets/arte-5ano/u1-mat-giz.jpg";
import matCelular from "@/assets/arte-5ano/u1-mat-celular.jpg";
import qPare from "@/assets/arte-5ano/u1-q-pare.jpg";
import qCranio from "@/assets/arte-5ano/u1-q-cranio.jpg";
import qCubo from "@/assets/arte-5ano/u1-q-cubo.jpg";
import passo1 from "@/assets/arte-5ano/u1-passo1.jpg";
import passo2 from "@/assets/arte-5ano/u1-passo2.jpg";
import passo3 from "@/assets/arte-5ano/u1-passo3.jpg";
import passo4 from "@/assets/arte-5ano/u1-passo4.jpg";
import passo5 from "@/assets/arte-5ano/u1-passo5.jpg";

/**
 * Arte · 5º Ano · Unidade 1 · Aula 01 — "A Geometria Secreta da Anamorfose"
 * Metanarrativa: 🧩 A Matriz da Percepção Visual
 * Fonte histórica: Hans Holbein — Os Embaixadores (1533)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-anamorfose",
  titulo: "A Geometria Secreta da Anamorfose",
  iconeTrilha: "🧩",
  bncc: ["EF15AR02", "EF15AR04", "EF15AR05"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Arquiteto da Percepção! Brilha achou um desenho no ateliê que de frente parece uma mancha borrada — mas olhado de raspão vira uma CAVEIRA 3D. Isso é ANAMORFOSE: matemática pra entortar a realidade. Toca em cada pista.",
    titulo: "🧩 A Matriz da Percepção",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🎨", rotulo: "Os Embaixadores (1533)", descricao: "Hans Holbein escondeu um crânio esticado aos pés dos dois embaixadores. Só aparece se você cola o olho na borda direita do quadro.", cor: "#7c2d12", fotoUrl: mapaHolbein },
      { emoji: "🛣️", rotulo: "Street Art 3D", descricao: "Artistas desenham no chão figuras super esticadas. De um ângulo secreto, o desenho salta em 3D como se fosse real.", cor: "#0ea5e9", fotoUrl: mapaStreet },
      { emoji: "🪞", rotulo: "Anamorfose de Espelho", descricao: "Desenho circular distorcido só faz sentido com um espelho CILÍNDRICO no centro — o reflexo corrige os ângulos.", cor: "#64748b", fotoUrl: mapaEspelho },
      { emoji: "🛑", rotulo: "PARE no asfalto", descricao: "Engenheiros pintam a palavra ESTICADA no chão. De dentro do carro, o motorista vê na proporção normal.", cor: "#dc2626", fotoUrl: mapaPare },
    ],
    falaFinal: "Você vai hackear o espaço físico igual os mestres renascentistas!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de arquiteto da percepção!",
    perguntas: [
      {
        pergunta: "Por que a palavra PARE é pintada esticada no asfalto?",
        fotoUrl: qPare,
        alternativas: [
          { texto: "Pra o motorista, olhando em ângulo baixo, ver a palavra em proporção NORMAL", correta: true },
          { texto: "Porque a tinta encolhe com o tempo", correta: false },
        ],
        feedbackAcerto: "Perfeito! É anamorfose óptica aplicada à segurança do trânsito.",
        feedbackErro: "Nada a ver com encolher tinta 😄. É ANAMORFOSE — o ângulo do motorista consertar a proporção.",
      },
      {
        pergunta: "Na pintura Os Embaixadores, a mancha diagonal aos pés dos homens é…",
        fotoUrl: qCranio,
        alternativas: [
          { texto: "Um crânio humano só visível de um ângulo lateral secreto", correta: true },
          { texto: "Um erro do pintor que ficou por engano", correta: false },
        ],
        feedbackAcerto: "Isso! Holbein escondeu o crânio como mensagem secreta sobre a mortalidade.",
        feedbackErro: "Holbein é um dos maiores mestres — nada foi por engano. É uma anamorfose PROPOSITAL.",
      },
      {
        pergunta: "A anamorfose CATÓPTRICA precisa de…",
        fotoUrl: mapaEspelho,
        alternativas: [
          { texto: "Um espelho cilíndrico ou cônico no centro do desenho", correta: true },
          { texto: "Uma lupa de aumentar", correta: false },
        ],
        feedbackAcerto: "Correto! O reflexo no cilindro corrige a distorção circular.",
        feedbackErro: "Lupa só aumenta — não conserta distorção. Precisa de espelho CILÍNDRICO.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário da geometria projetiva. Toca em cada card!",
    cards: [
      { termo: "Malha Projetiva", definicao: "Grade quadriculada esticada em forma de leque. Base matemática de toda anamorfose óptica.", emoji: "🧮", cor: "#1e3a8a", fotoUrl: vocabMalha },
      { termo: "Ponto de Vista Secreto", definicao: "Único ângulo (às vezes só 1 grau!) em que a imagem distorcida se reconstrói corretamente na retina.", emoji: "👁️", cor: "#0ea5e9", fotoUrl: vocabPonto },
      { termo: "Anamorfose Catóptrica", definicao: "Imagem circular distorcida que só faz sentido refletida num espelho cilíndrico ou cônico.", emoji: "🪞", cor: "#64748b", fotoUrl: vocabCatoptrica },
      { termo: "Geometria Projetiva", definicao: "Ramo da matemática que estuda como formas se deformam quando projetadas em ângulos diferentes.", emoji: "📐", cor: "#7c2d12", fotoUrl: vocabProjetiva },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a geometria virou mensagem secreta na pintura.",
    paragrafos: [
      "Nosso cérebro está acostumado a ver o mundo em ângulos retos. A ANAMORFOSE quebra essa lógica de propósito, usando GEOMETRIA PROJETIVA pra distorcer imagens.",
      "Na ANAMORFOSE ÓPTICA, o desenho é esticado numa malha projetiva (linhas que abrem em leque). Olhado de frente, vira uma mancha. Olhado do ponto de vista secreto — em ângulo bem inclinado — a retina achata as linhas e reconstrói a proporção.",
      "Na ANAMORFOSE CATÓPTRICA, a imagem é distorcida em círculo. Só faz sentido com um espelho cilíndrico ou cônico no centro. O metal reflete corrigindo os ângulos.",
      "Em 1533, Hans Holbein pintou OS EMBAIXADORES: dois homens ricos, cheios de instrumentos científicos. Mas escondeu um crânio anamórfico aos pés deles — mensagem oculta sobre a mortalidade. Só se vê colando o olho na borda lateral direita.",
      "Hoje, engenheiros de trânsito usam a MESMA técnica. A palavra PARE no asfalto é pintada esticada. Como o motorista olha de dentro do carro em ângulo baixo, ele lê a palavra em proporção perfeita.",
    ],
    pigmentos: [
      { nome: "Papel + lápis + régua", hex: "#facc15", fonte: "Base do arquiteto da percepção", emoji: "📐", fotoUrl: matPapel },
      { nome: "Cilindro cromado", hex: "#64748b", fonte: "Espelho pra anamorfose catóptrica", emoji: "🪞", fotoUrl: matCilindro },
      { nome: "Giz colorido de calçada", hex: "#ec4899", fonte: "Street art 3D no chão", emoji: "🖍️", fotoUrl: matGiz },
      { nome: "Câmera do celular", hex: "#1f2937", fonte: "Registra do ponto de vista secreto", emoji: "📱", fotoUrl: matCelular },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o que ficou no caderno do arquiteto!",
    perguntas: [
      {
        pergunta: "Onde encontramos a Anamorfose Óptica aplicada no dia a dia pra garantir segurança?",
        fotoUrl: qPare,
        alternativas: [
          { texto: "Nas palavras pintadas esticadas no asfalto (PARE, faixa de pedestre)", correta: true },
          { texto: "Nos outdoors de fotografia das avenidas", correta: false },
        ],
        feedbackAcerto: "Perfeito! O engenheiro de trânsito usa anamorfose pra o motorista ler sem distorção.",
        feedbackErro: "Outdoor é imagem normal, sem distorção. A anamorfose está no ASFALTO — nas letras esticadas.",
      },
      {
        pergunta: "Em Os Embaixadores (Holbein, 1533), como você enxerga o crânio secreto?",
        fotoUrl: qCranio,
        alternativas: [
          { texto: "Colando o olho na borda lateral direita da pintura", correta: true },
          { texto: "Olhando de frente, bem no centro", correta: false },
        ],
        feedbackAcerto: "Isso! Só o ângulo lateral extremo reconstrói o crânio.",
        feedbackErro: "De frente é só mancha borrada. O crânio aparece do LADO, em ângulo inclinado.",
      },
      {
        pergunta: "A palavra que descreve linhas se abrindo em leque como raios é…",
        fotoUrl: vocabProjetiva,
        alternativas: [
          { texto: "Geometria Projetiva", correta: true },
          { texto: "Simetria Radial", correta: false },
        ],
        feedbackAcerto: "Fantástico! É a base matemática da anamorfose óptica.",
        feedbackErro: "Simetria radial é diferente — são espelhos em volta de um centro. Aqui é PROJETIVA.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada exemplo usa um tipo de anamorfose. Combina certinho!",
    animais: [
      {
        nome: "Crânio de Holbein", emoji: "💀", fotoUrl: qCranio,
        corAlvo: { nome: "Anamorfose Óptica de perspectiva", hex: "#7c2d12" },
        opcoes: [
          { nome: "Anamorfose Óptica de perspectiva", hex: "#7c2d12" },
          { nome: "Cor-luz RGB", hex: "#dc2626" },
          { nome: "Persistência retiniana", hex: "#0ea5e9" },
        ],
        falaAcerto: "Isso! Crânio esticado por malha projetiva — só se decodifica do lado.",
      },
      {
        nome: "Cubo 3D de giz na calçada", emoji: "🎲", fotoUrl: qCubo,
        corAlvo: { nome: "Street art anamórfica de chão", hex: "#0ea5e9" },
        opcoes: [
          { nome: "Street art anamórfica de chão", hex: "#0ea5e9" },
          { nome: "Chiaroscuro barroco", hex: "#1f2937" },
          { nome: "Pontilhismo de Seurat", hex: "#a855f7" },
        ],
        falaAcerto: "Perfeito! Giz esticado que salta em 3D do único ângulo certo.",
      },
      {
        nome: "PARE pintado no asfalto", emoji: "🛑", fotoUrl: qPare,
        corAlvo: { nome: "Anamorfose de engenharia de trânsito", hex: "#dc2626" },
        opcoes: [
          { nome: "Anamorfose de engenharia de trânsito", hex: "#dc2626" },
          { nome: "Linhas de fuga do Renascimento", hex: "#78350f" },
          { nome: "Vitral gótico", hex: "#f59e0b" },
        ],
        falaAcerto: "Correto! Letra esticada que o motorista lê em proporção normal.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra construir sua PRÓPRIA anamorfose óptica.",
    passos: [
      { id: "p1", texto: "DESENHO uma malha quadriculada 4x4 pequena no topo da folha", emoji: "📐", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "DENTRO da malha quadrada, desenho uma forma simples (estrela ou olho)", emoji: "⭐", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "LOGO ABAIXO, desenho uma malha projetiva: linhas verticais se abrindo em leque", emoji: "🧮", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "TRANSFIRO o desenho quadrado por quadrado pra grade esticada", emoji: "✏️", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "OLHO de raspão, quase 180°, e vejo o desenho se consertar magicamente!", emoji: "👁️", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Sua anamorfose funciona igualzinho às dos mestres do século XVI!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do arquiteto da percepção. Toca nas palavras coloridas.",
    titulo: "Diário do Arquiteto da Percepção",
    trechos: [
      { texto: "Sou um hacker do espaço. Uso a", palavraDestaque: "geometria projetiva", corDestaque: "#7c2d12" },
      { texto: "pra criar imagens que só fazem sentido de um", palavraDestaque: "ponto de vista secreto", corDestaque: "#0ea5e9" },
      { texto: "Se uso espelho cilíndrico, chamo de", palavraDestaque: "anamorfose catóptrica", corDestaque: "#64748b" },
      { texto: "Em 1533, Holbein escondeu um crânio nos", palavraDestaque: "Embaixadores", corDestaque: "#7c2d12" },
      { texto: "Eu entorto a realidade — igual os grandes mestres!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 Decodificador de Holbein! Toca em CADA componente do sistema anamórfico antes do tempo acabar.",
    titulo: "🎯 Decodificador de Holbein",
    instrucao: "Toque em todos os elementos antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🧮", rotulo: "Malha projetiva em leque", cor: "#1e3a8a" },
      { emoji: "⭐", rotulo: "Forma original no quadrado", cor: "#facc15" },
      { emoji: "🖍️", rotulo: "Lápis e régua do traçado", cor: "#ec4899" },
      { emoji: "👁️", rotulo: "Ponto de vista secreto (1°)", cor: "#0ea5e9" },
      { emoji: "🪞", rotulo: "Espelho cilíndrico cromado", cor: "#64748b" },
      { emoji: "💀", rotulo: "Crânio anamórfico revelado", cor: "#7c2d12" },
    ],
    falaFinal: "Código decifrado! Você desbloqueou o segredo dos embaixadores.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da anamorfose. Toca em cada verbete!",
    titulo: "📓 Caderno da Anamorfose",
    itens: [
      { emoji: "🎨", rotulo: "Os Embaixadores (1533)", descricao: "Holbein escondeu um crânio anamórfico como mensagem sobre mortalidade.", cor: "#7c2d12", fotoUrl: mapaHolbein },
      { emoji: "🧮", rotulo: "Malha Projetiva", descricao: "Grade esticada em leque. Base matemática da anamorfose óptica.", cor: "#1e3a8a", fotoUrl: vocabMalha },
      { emoji: "👁️", rotulo: "Ponto de Vista Secreto", descricao: "Único ângulo em que a imagem reconstrói a proporção correta.", cor: "#0ea5e9", fotoUrl: vocabPonto },
      { emoji: "🪞", rotulo: "Anamorfose Catóptrica", descricao: "Precisa de espelho cilíndrico no centro pra decodificar.", cor: "#64748b", fotoUrl: mapaEspelho },
      { emoji: "🛑", rotulo: "Aplicação no Trânsito", descricao: "PARE esticado no asfalto — motorista lê em proporção normal.", cor: "#dc2626", fotoUrl: mapaPare },
      { emoji: "🎲", rotulo: "Street Art 3D", descricao: "Giz esticado que salta do chão em 3D do ângulo certo.", cor: "#ec4899", fotoUrl: mapaStreet },
    ],
    falaFinal: "Primeira página do Atlas da Matriz da Percepção DESBLOQUEADA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, arquiteto da percepção!",
    quiz: {
      pergunta: "Onde encontramos a aplicação prática da Anamorfose Óptica no nosso dia a dia pra garantir a segurança das pessoas?",
      alternativas: [
        { texto: "Nas palavras pintadas de forma esticada no asfalto das ruas (como as faixas de pedestre e o 'PARE')", correta: true },
        { texto: "Nos outdoors de fotografia nas avenidas", correta: false },
      ],
      feedback: "Perfeito! A engenharia de trânsito usa a anamorfose pra o motorista ver a mensagem sem distorção de dentro do veículo. A mesma matemática de Holbein em 1533 salva vidas nas ruas hoje!",
    },
    missaoFamilia:
      "📸 O Giz Tridimensional: Vá ao quintal ou calçada com seus pais. Usem giz colorido pra desenhar um quadrado bem esticado no chão. Tirem uma foto de um ponto bem baixo — o desenho vai parecer um CUBO REAL saindo do chão. Registrem no álbum!",
    recompensaTitulo: "📜 Página 1 restaurada — O Código Oculto dos Embaixadores.",
    recompensaItem: "🪞 Cilindro Cromado de Reflexão Óptica",
  },

  recompensa: { xp: 100, moedas: 50, medalha: "Cilindro Cromado" },
};
