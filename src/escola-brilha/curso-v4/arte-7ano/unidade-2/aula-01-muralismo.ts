import type { AulaArteV1 } from "../../types";
import diegoRivera from "@/assets/arte-7ano/u2-diego-rivera.jpg";
import siqueiros from "@/assets/arte-7ano/u2-siqueiros-mural.jpg";
import becoBatman from "@/assets/arte-7ano/u2-beco-batman.jpg";
import grafiteRua from "@/assets/arte-7ano/u2-grafite-rua-brasileira.jpg";
import stencilBanksy from "@/assets/arte-7ano/u2-stencil-banksy.jpg";
import comparacaoMuro from "@/assets/arte-7ano/u2-comparacao-muro.jpg";
import planejamentoComunitario from "@/assets/arte-7ano/u2-planejamento-comunitario.jpg";
import latasSpray from "@/assets/arte-7ano/u2-latas-spray.jpg";
import muralistaAndaime from "@/assets/arte-7ano/u2-muralista-andaime.jpg";
import pichacaoContraste from "@/assets/arte-7ano/u2-pichacao-contraste.jpg";
import muralPoluicao from "@/assets/arte-7ano/u2-mural-poluicao-natureza.jpg";
import muralDiversidade from "@/assets/arte-7ano/u2-mural-diversidade.jpg";
import favelaMural from "@/assets/arte-7ano/u2-favela-mural-colorido.jpg";
import fachadaTransformacao from "@/assets/arte-7ano/u2-fachada-transformacao.jpg";
import equipeMuralistas from "@/assets/arte-7ano/u2-equipe-muralistas.jpg";

/**
 * Arte · 7º Ano · Unidade 2 · Aula 01 — "A Cidade como Tela — Muralismo, Grafite e Intervenção Social"
 * Metanarrativa: 🎨 Crônicas das Cidades Suspensas
 * Foco: Muralismo Mexicano, grafite vs pichação, intervenção urbana como transformação social.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-muralismo",
  titulo: "A Cidade como Tela — Muralismo, Grafite e Intervenção Social",
  iconeTrilha: "🎨",
  bncc: ["EF69AR04", "EF69AR05", "EF69AR31"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Urbanista Visual! O Códice abriu o Distrito das Paredes Vivas: aqui, cada muro é uma TELA GIGANTE e cada rua é uma galeria a céu aberto. Sua missão agora é entender como o MURALISMO e o GRAFITE viraram ferramentas de transformação social. Toca em cada pista.",
    titulo: "🎨 O Distrito das Paredes Vivas",
    instrucao: "Toca em cada pista pra ativar o módulo do muralismo",
    itens: [
      { emoji: "🖼️", rotulo: "Mural de Diego Rivera", descricao: "No Palácio Nacional do México, Rivera pintou a HISTÓRIA de um povo inteiro numa parede gigante — arte pública que qualquer pessoa pode ver de graça.", cor: "#dc2626", fotoUrl: diegoRivera },
      { emoji: "🌀", rotulo: "Siqueiros e o dinamismo", descricao: "David Alfaro Siqueiros usava diagonais e cores fortes pra dar MOVIMENTO às figuras — o muralismo mexicano virou escola de arte engajada.", cor: "#b91c1c", fotoUrl: siqueiros },
      { emoji: "🦇", rotulo: "Beco do Batman", descricao: "Em São Paulo, um beco esquecido virou point turístico coberto de grafite. A arte de rua transformou o USO do espaço.", cor: "#7c2d12", fotoUrl: becoBatman },
      { emoji: "🏘️", rotulo: "Favela pintada", descricao: "Projetos como o da Dona Marta, no Rio, usam cor coletiva pra mudar a autoestima e a identidade visual de uma comunidade inteira.", cor: "#ea580c", fotoUrl: favelaMural },
    ],
    falaFinal: "Você vai aprender por que pintar um muro pode mudar a vida de um bairro inteiro.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho antes de pegar o spray!",
    perguntas: [
      {
        pergunta: "Nos anos 1920, o governo do México pagou artistas como Diego Rivera e Siqueiros pra pintar MURAIS GIGANTES em prédios públicos. Qual era o principal objetivo?",
        fotoUrl: diegoRivera,
        alternativas: [
          { texto: "Levar arte e educação histórica a um povo com pouco acesso a museus — arte pública e gratuita", correta: true },
          { texto: "Decorar prédios só pra impressionar turistas estrangeiros", correta: false },
        ],
        feedbackAcerto: "Isso! O Muralismo Mexicano nasceu como projeto EDUCATIVO e POLÍTICO — arte pra quem não entra em museu.",
        feedbackErro: "O foco não era turismo: era levar história e identidade nacional pra dentro da vida do povo comum.",
      },
      {
        pergunta: "Qual é a diferença essencial entre GRAFITE e PICHAÇÃO?",
        fotoUrl: pichacaoContraste,
        alternativas: [
          { texto: "Grafite busca comunicar uma mensagem visual elaborada; pichação é geralmente uma assinatura rápida, sem intenção estética", correta: true },
          { texto: "São exatamente a mesma coisa, só muda o nome", correta: false },
        ],
        feedbackAcerto: "Exato! Grafite tem intenção de composição e mensagem; pichação é marca territorial rápida.",
        feedbackErro: "Não são sinônimos: técnica, tempo de execução e intenção artística mudam tudo.",
      },
      {
        pergunta: "Uma comunidade pinta as casas de uma favela inteira com cores e padrões planejados. Que efeito social esse tipo de intervenção costuma gerar?",
        fotoUrl: favelaMural,
        alternativas: [
          { texto: "Fortalece a identidade e o orgulho do lugar, além de atrair visibilidade positiva", correta: true },
          { texto: "Não muda nada na vida dos moradores", correta: false },
        ],
        feedbackAcerto: "Perfeito! Cor coletiva vira ORGULHO DE PERTENCIMENTO — arte como ferramenta social real.",
        feedbackErro: "Projetos assim têm impacto direto na autoestima da comunidade e na forma como ela é vista de fora.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do Distrito das Paredes Vivas. Toca em cada verbete!",
    cards: [
      { termo: "Muralismo Mexicano", definicao: "Movimento artístico dos anos 1920 (Rivera, Siqueiros, Orozco) que usou paredes públicas pra contar a história e as lutas do povo mexicano.", emoji: "🖼️", cor: "#dc2626", fotoUrl: diegoRivera },
      { termo: "Grafite", definicao: "Arte urbana feita com spray, rolo ou pincel, com composição, cor e mensagem elaboradas — reconhecida como linguagem artística.", emoji: "🎨", cor: "#ea580c", fotoUrl: grafiteRua },
      { termo: "Pichação", definicao: "Escrita rápida (tag/assinatura) feita em espaços públicos, geralmente sem intenção estética elaborada — marca de presença territorial.", emoji: "✒️", cor: "#78716c", fotoUrl: pichacaoContraste },
      { termo: "Intervenção Social", definicao: "Ação artística feita para transformar a percepção, o uso ou o valor de um espaço e da comunidade que vive nele.", emoji: "🏘️", cor: "#b91c1c", fotoUrl: favelaMural },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como uma parede pode virar um grito coletivo.",
    paragrafos: [
      "No início do século 20, o governo mexicano teve uma ideia revolucionária: pagar artistas pra pintar as paredes de prédios públicos com cenas da HISTÓRIA e da LUTA do povo. Nascia o MURALISMO MEXICANO — um movimento liderado por Diego Rivera, David Alfaro Siqueiros e José Clemente Orozco.",
      "A escolha da parede não era acaso: diferente de um quadro em museu, o mural está ao alcance de QUALQUER PESSOA que passe na rua. É arte GRATUITA e ACESSÍVEL — a galeria virou a própria cidade. Siqueiros ainda inovou usando diagonais e ângulos ousados pra dar MOVIMENTO dramático às figuras pintadas.",
      "Décadas depois, uma nova linguagem de parede surgiu nas metrópoles: o GRAFITE. Com spray, o grafiteiro cria composições coloridas, letras estilizadas e personagens — sempre com uma intenção estética e, muitas vezes, uma mensagem social. É importante diferenciar o grafite da PICHAÇÃO: a pichação é geralmente uma assinatura rápida (tag), feita pra marcar presença territorial, sem o mesmo cuidado de composição.",
      "Em São Paulo, o Beco do Batman virou um símbolo: um beco esquecido, tomado por grafites, transformou-se em point turístico e cultural. No Rio, projetos em comunidades como a Dona Marta usaram COR COLETIVA pra pintar fachadas inteiras — mudando não só a paisagem, mas a AUTOESTIMA de quem mora ali.",
      "Esse é o poder da INTERVENÇÃO SOCIAL pela arte: uma parede cinza e esquecida pode virar espaço de memória, identidade e encontro. O muralismo e o grafite provam que a cidade inteira pode ser TELA — e que arte pública é também um ato de cidadania.",
    ],
    pigmentos: [
      { nome: "Muralismo Mexicano", hex: "#dc2626", fonte: "Rivera, Siqueiros, Orozco", emoji: "🖼️", fotoUrl: siqueiros },
      { nome: "Grafite", hex: "#ea580c", fonte: "Arte urbana com composição e mensagem", emoji: "🎨", fotoUrl: becoBatman },
      { nome: "Pichação", hex: "#78716c", fonte: "Assinatura territorial rápida", emoji: "✒️", fotoUrl: pichacaoContraste },
      { nome: "Cor Coletiva Comunitária", hex: "#b91c1c", fonte: "Identidade e autoestima do bairro", emoji: "🏘️", fotoUrl: favelaMural },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do artista urbano!",
    perguntas: [
      {
        pergunta: "Por que o mural, ao contrário do quadro de museu, é considerado uma forma de arte especialmente DEMOCRÁTICA?",
        fotoUrl: diegoRivera,
        alternativas: [
          { texto: "Porque está exposto na rua, acessível a QUALQUER pessoa, de graça, sem precisar de ingresso", correta: true },
          { texto: "Porque é sempre menor e mais barato de fazer que um quadro", correta: false },
        ],
        feedbackAcerto: "Correto! O acesso livre e gratuito é o que torna o muralismo uma arte verdadeiramente pública.",
        feedbackErro: "O tamanho ou custo não é o ponto — o que importa é o ACESSO livre de qualquer pessoa na rua.",
      },
      {
        pergunta: "Um grafite tem uma composição elaborada com cores e mensagem. Uma tag é só uma assinatura rápida. O que isso demonstra?",
        fotoUrl: grafiteRua,
        alternativas: [
          { texto: "A diferença de INTENÇÃO ARTÍSTICA entre grafite e pichação", correta: true },
          { texto: "Que grafite e pichação são sempre feitos pela mesma pessoa", correta: false },
        ],
        feedbackAcerto: "Isso! Intenção, tempo de execução e cuidado estético separam grafite de pichação.",
        feedbackErro: "Não é sobre quem faz — é sobre a INTENÇÃO e o cuidado estético empregados.",
      },
      {
        pergunta: "O que aconteceu com o Beco do Batman em São Paulo depois de ser tomado por grafites?",
        fotoUrl: becoBatman,
        alternativas: [
          { texto: "Virou ponto turístico e cultural, mudando a função social do espaço", correta: true },
          { texto: "Foi fechado ao público por causa da arte", correta: false },
        ],
        feedbackAcerto: "Perfeito! A arte urbana transformou um beco esquecido em atração cultural.",
        feedbackErro: "Pelo contrário: o grafite ATRAIU pessoas e deu nova vida ao espaço.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada obra pelo CONCEITO de arte urbana que ela representa!",
    animais: [
      {
        nome: "Mural histórico em prédio público", emoji: "🖼️", fotoUrl: diegoRivera,
        corAlvo: { nome: "Muralismo Mexicano", hex: "#dc2626" },
        opcoes: [
          { nome: "Muralismo Mexicano", hex: "#dc2626" },
          { nome: "Pichação", hex: "#78716c" },
          { nome: "Grafite", hex: "#ea580c" },
        ],
        falaAcerto: "Isso! Narrativa histórica em parede pública = Muralismo Mexicano.",
      },
      {
        nome: "Beco colorido com personagens estilizados", emoji: "🦇", fotoUrl: becoBatman,
        corAlvo: { nome: "Grafite", hex: "#ea580c" },
        opcoes: [
          { nome: "Grafite", hex: "#ea580c" },
          { nome: "Muralismo Mexicano", hex: "#dc2626" },
          { nome: "Cor Coletiva Comunitária", hex: "#b91c1c" },
        ],
        falaAcerto: "Correto! Composição elaborada com spray em espaço urbano = Grafite.",
      },
      {
        nome: "Fachadas de favela pintadas em conjunto", emoji: "🏘️", fotoUrl: favelaMural,
        corAlvo: { nome: "Cor Coletiva Comunitária", hex: "#b91c1c" },
        opcoes: [
          { nome: "Cor Coletiva Comunitária", hex: "#b91c1c" },
          { nome: "Pichação", hex: "#78716c" },
          { nome: "Grafite", hex: "#ea580c" },
        ],
        falaAcerto: "Perfeito! Pintura planejada em conjunto por moradores = Cor Coletiva Comunitária.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra planejar e pintar SEU mural comunitário.",
    passos: [
      { id: "p1", texto: "Escolho a parede e converso com a comunidade sobre qual MENSAGEM o mural deve contar", emoji: "🗣️", ordem: 1, fotoUrl: planejamentoComunitario },
      { id: "p2", texto: "Esboço a composição no papel, pensando em cores e no espaço disponível na parede", emoji: "✏️", ordem: 2, fotoUrl: comparacaoMuro },
      { id: "p3", texto: "Separo latas de spray e tintas nas cores planejadas", emoji: "🧴", ordem: 3, fotoUrl: latasSpray },
      { id: "p4", texto: "Subo no andaime e começo pelas formas grandes de fundo, depois os detalhes", emoji: "🪜", ordem: 4, fotoUrl: muralistaAndaime },
      { id: "p5", texto: "Finalizo com a equipe, revisamos contraste e assinamos o mural coletivamente", emoji: "🤝", ordem: 5, fotoUrl: equipeMuralistas },
    ],
    falaAcerto: "Você acabou de planejar e pintar o primeiro mural do Distrito das Paredes Vivas!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do artista urbano. Toca nas palavras coloridas.",
    titulo: "Diário do Artista Urbano",
    trechos: [
      { texto: "Sou artista urbano. Aprendi com o", palavraDestaque: "Muralismo Mexicano", corDestaque: "#dc2626" },
      { texto: "que uma parede pública pode contar história pra todo mundo, de graça. No meu bairro, uso", palavraDestaque: "grafite", corDestaque: "#ea580c" },
      { texto: "com composição pensada — diferente da", palavraDestaque: "pichação", corDestaque: "#78716c" },
      { texto: "que é só assinatura rápida. Quando a comunidade pinta junto, nasce a", palavraDestaque: "Cor Coletiva Comunitária", corDestaque: "#b91c1c" },
      { texto: "e o bairro inteiro ganha nova identidade. Arte de rua é", palavraDestaque: "Intervenção Social", corDestaque: "#7c2d12" },
      { texto: "em ação — e a cidade vira galeria de todos." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🖌️ Pintor de Fachadas! Toca em TODAS as ferramentas do mural antes do tempo acabar.",
    titulo: "🖌️ Pintor de Fachadas",
    instrucao: "Cubra toda a fachada cinza com cor antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "🧴", rotulo: "Lata de spray colorida", cor: "#dc2626" },
      { emoji: "🖌️", rotulo: "Pincel de fachada", cor: "#ea580c" },
      { emoji: "🪜", rotulo: "Andaime móvel", cor: "#78716c" },
      { emoji: "🎨", rotulo: "Paleta de cores comunitária", cor: "#b91c1c" },
      { emoji: "📐", rotulo: "Esboço de composição", cor: "#7c2d12" },
      { emoji: "🤝", rotulo: "Equipe de muralistas", cor: "#f59e0b" },
    ],
    falaFinal: "Fachada transformada! O muro cinza virou a primeira Parede Viva do Distrito.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a página do Distrito das Paredes Vivas. Toca em cada verbete!",
    titulo: "📓 Caderno do Artista Urbano",
    itens: [
      { emoji: "🖼️", rotulo: "Muralismo Mexicano", descricao: "Movimento dos anos 1920 que usou paredes públicas pra contar história e política ao povo, de forma acessível e gratuita.", cor: "#dc2626", fotoUrl: diegoRivera },
      { emoji: "🎨", rotulo: "Grafite", descricao: "Arte urbana com composição, cor e mensagem elaboradas — linguagem artística reconhecida.", cor: "#ea580c", fotoUrl: grafiteRua },
      { emoji: "✒️", rotulo: "Pichação", descricao: "Assinatura rápida (tag) em espaço público, geralmente sem intenção estética elaborada.", cor: "#78716c", fotoUrl: pichacaoContraste },
      { emoji: "🏘️", rotulo: "Intervenção Social", descricao: "Ação artística que transforma a percepção, o uso e o valor de um espaço e de uma comunidade.", cor: "#b91c1c", fotoUrl: favelaMural },
      { emoji: "🖌️", rotulo: "Stencil Urbano", descricao: "Técnica de gabarito vazado usada por artistas de rua pra reproduzir imagens rápidas e marcantes.", cor: "#7c2d12", fotoUrl: stencilBanksy },
      { emoji: "🧱", rotulo: "Fachada Transformada", descricao: "Um muro cinza que, através da arte, vira ponto de memória, identidade e encontro.", cor: "#dc2626", fotoUrl: fachadaTransformacao },
    ],
    falaFinal: "Distrito das Paredes Vivas RESTAURADO — Setor Muralista ativo!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, artista urbano!",
    quiz: {
      pergunta: "Uma escola pinta um mural gigante na parede externa, com uma mensagem sobre a comunidade, e QUALQUER pessoa da rua pode ver de graça, sem pagar ingresso. Que função social esse tipo de arte pública cumpre, e por que isso é diferente de uma pintura guardada em museu?",
      alternativas: [
        { texto: "Democratiza o acesso à arte: qualquer pessoa vê, sem barreira de ingresso ou horário — a rua vira galeria de todos", correta: true },
        { texto: "Não muda nada: arte em muro tem o mesmo alcance que arte em museu fechado", correta: false },
      ],
      feedback: "Excelente! Essa é a essência do Muralismo Mexicano e da arte urbana: ao ocupar um espaço PÚBLICO e ACESSÍVEL, a arte deixa de depender de ingresso, horário de funcionamento ou status social do visitante. Ela chega a quem passa pela rua todos os dias — e por isso pode ser usada como ferramenta de EDUCAÇÃO, MEMÓRIA e TRANSFORMAÇÃO SOCIAL de um jeito que a arte de museu, isolada, não consegue.",
    },
    missaoFamilia:
      "🗺️ Missão Mapeando a Galeria da Rua: com um adulto, saiam pelo bairro e fotografem 3 exemplos de arte ou intervenção no espaço público (mural, grafite, azulejo, escultura, até uma pichação). Depois, classifiquem juntos cada foto: é grafite, pichação ou intervenção comunitária? Registrem as fotos e a classificação no álbum de família.",
    recompensaTitulo: "🎨 Distrito das Paredes Vivas restaurado — Setor Muralista da Cidade Suspensa.",
    recompensaItem: "✨ Spray de Pigmento Luminescente",
  },

  recompensa: { xp: 120, moedas: 60, medalha: "Spray de Pigmento Luminescente" },
};
