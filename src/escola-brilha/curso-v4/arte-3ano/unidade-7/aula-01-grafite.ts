import type { AulaArteV1 } from "../../types";
import mapaMural from "@/assets/arte-3ano/u7-mapa-mural.jpg";
import mapaSpray from "@/assets/arte-3ano/u7-mapa-spray.jpg";
import mapaGrafiteiro from "@/assets/arte-3ano/u7-mapa-grafiteiro.jpg";
import mapaCaverna from "@/assets/arte-3ano/u7-mapa-caverna.jpg";
import vocabGrafite from "@/assets/arte-3ano/u7-vocab-grafite.jpg";
import vocabMuralismo from "@/assets/arte-3ano/u7-vocab-muralismo.jpg";
import vocabEstencil from "@/assets/arte-3ano/u7-vocab-estencil.jpg";
import vocabUrbano from "@/assets/arte-3ano/u7-vocab-urbano.jpg";
import nosRupestre from "@/assets/arte-3ano/u7-nos-rupestre.jpg";
import nosGrafiteUrbano from "@/assets/arte-3ano/u7-nos-grafite-urbano.jpg";
import nosCacada from "@/assets/arte-3ano/u7-nos-cacada.jpg";
import passoEsboco from "@/assets/arte-3ano/u7-passo-esboco.jpg";

/**
 * Arte · 3º Ano · Unidade 7 · Aula 01 — "Grafite e Muralismo"
 * (EF15AR01 / EF15AR03 / EF15AR26)
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-grafite",
  titulo: "Grafite e Muralismo: A Cidade Vira Galeria",
  iconeTrilha: "🎨",
  bncc: ["EF15AR01", "EF15AR03", "EF15AR26"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Explorador! Fecha a expedição no centro da cidade. Olha só pra essas paredes ENORMES cheias de desenhos coloridos. A rua virou museu! Toca em cada pista pra descobrir a arte urbana que atravessa milênios.",
    titulo: "🔍 A Cidade-Galeria",
    instrucao: "Toca em cada pista pra investigar",
    itens: [
      { emoji: "🏙️", rotulo: "Mural gigante num prédio", descricao: "Uma pintura que ocupa a parede INTEIRA de um edifício — todo mundo pode ver.", cor: "#0284c7", fotoUrl: mapaMural },
      { emoji: "🎨", rotulo: "Lata de spray", descricao: "Tinta líquida que sai como neblina — permite pintar áreas GRANDES bem rápido.", cor: "#dc2626", fotoUrl: mapaSpray },
      { emoji: "🧑\u200d🎨", rotulo: "Grafiteiro trabalhando", descricao: "Artista de rua com máscara e capacete — a segurança vem primeiro.", cor: "#7c3aed", fotoUrl: mapaGrafiteiro },
      { emoji: "🖐️", rotulo: "Pintura rupestre (caverna)", descricao: "Os PRIMEIROS grafites da história — há 30.000 anos, dentro das cavernas!", cor: "#b45309", fotoUrl: mapaCaverna },
    ],
    falaFinal: "Grafitar já era feito na CAVERNA — o ser humano SEMPRE quis marcar as paredes com arte.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Antes de pegar a lata, treina o olho de muralista!",
    perguntas: [
      {
        pergunta: "Qual dessas obras é um MURAL?",
        fotoUrl: mapaMural,
        alternativas: [
          { texto: "Uma pintura enorme na parede de um prédio", correta: true },
          { texto: "Um desenho no caderno", correta: false },
        ],
        feedbackAcerto: "Isso! Mural = pintura grande na parede pública.",
        feedbackErro: "Caderno é pequeno e pessoal. Mural é GRANDE e público.",
      },
      {
        pergunta: "Qual foi o PRIMEIRO tipo de grafite da história?",
        fotoUrl: mapaCaverna,
        alternativas: [
          { texto: "As pinturas RUPESTRES nas cavernas", correta: true },
          { texto: "As placas de trânsito modernas", correta: false },
        ],
        feedbackAcerto: "Certo! Homem das cavernas já pintava paredes há milhares de anos.",
        feedbackErro: "Placas são de agora. As pinturas rupestres têm 30.000 anos!",
      },
      {
        pergunta: "Qual ferramenta o grafiteiro moderno usa MAIS?",
        fotoUrl: mapaSpray,
        alternativas: [
          { texto: "Lata de spray", correta: true },
          { texto: "Caneta esferográfica", correta: false },
        ],
        feedbackAcerto: "Perfeito! Spray cobre áreas grandes rápido e com cores fortes.",
        feedbackErro: "Caneta é pequena. Grafiteiro precisa do SPRAY pra parede grande.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras da arte urbana — toca em cada uma pra desbloquear seu diário.",
    cards: [
      { termo: "Grafite", definicao: "Arte feita com SPRAY em muros e paredes urbanas — com autorização vira arte oficial.", emoji: "🎨", cor: "#dc2626", fotoUrl: vocabGrafite },
      { termo: "Muralismo", definicao: "Pintura GIGANTE em paredes públicas — conta histórias da comunidade.", emoji: "🏙️", cor: "#0284c7", fotoUrl: vocabMuralismo },
      { termo: "Estêncil", definicao: "Molde de papel VAZADO — passa spray por cima e a figura fica marcada.", emoji: "🦋", cor: "#7c3aed", fotoUrl: vocabEstencil },
      { termo: "Arte Urbana", definicao: "TODA arte feita na rua: grafite, mural, adesivo, escultura pública.", emoji: "🏢", cor: "#4b5563", fotoUrl: vocabUrbano },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Vou te contar como a arte pulou da caverna pra parede da esquina. Presta atenção na história!",
    paragrafos: [
      "Há 30.000 anos, na Europa e no Brasil (Serra da Capivara), pessoas pintavam BICHOS e MÃOS nas paredes das cavernas. Era o primeiro tipo de grafite da história.",
      "Muito depois, no México, artistas como Diego Rivera criaram o MURALISMO: pinturas GIGANTES em prédios públicos contando a história do povo. Todo mundo podia ver, de graça.",
      "Nos anos 1970, jovens de Nova York inventaram o GRAFITE moderno com SPRAY. Foi das ruas de lá pro mundo inteiro. Hoje São Paulo é uma das capitais do grafite!",
      "Os brasileiros Eduardo Kobra e OSGEMEOS pintam murais gigantescos em prédios do mundo todo, com rostos e cores que representam nossa cultura e nossa gente.",
    ],
    pigmentos: [
      { nome: "Ocre-vermelho rupestre", hex: "#b45309", fonte: "Terra vermelha misturada com gordura", emoji: "🟠", fotoUrl: nosRupestre },
      { nome: "Azul-elétrico do spray", hex: "#2563eb", fonte: "Tinta acrílica em aerossol", emoji: "🟦", fotoUrl: nosGrafiteUrbano },
      { nome: "Amarelo Kobra", hex: "#facc15", fonte: "Tinta acrílica de alta pigmentação", emoji: "🟡", fotoUrl: mapaMural },
      { nome: "Preto do contorno", hex: "#1f2937", fonte: "Spray de contorno grosso", emoji: "⚫", fotoUrl: vocabGrafite },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Confere o que ficou no caderno de expedição!",
    perguntas: [
      {
        pergunta: "Quem foi um dos MAIORES muralistas da história moderna?",
        fotoUrl: vocabMuralismo,
        alternativas: [
          { texto: "Diego Rivera, no México", correta: true },
          { texto: "Um piloto de avião", correta: false },
        ],
        feedbackAcerto: "Sim! Rivera pintou paredes gigantes contando a história do povo mexicano.",
        feedbackErro: "Avião não pinta parede. Rivera foi o MURALISTA gigante do México.",
      },
      {
        pergunta: "Um ESTÊNCIL funciona como…",
        fotoUrl: vocabEstencil,
        alternativas: [
          { texto: "Um MOLDE vazado — a tinta atravessa e desenha a figura", correta: true },
          { texto: "Um pincel comum", correta: false },
        ],
        feedbackAcerto: "Certo! Papel com desenho recortado + spray = figura perfeita.",
        feedbackErro: "Pincel é outra coisa. Estêncil é o MOLDE que a tinta atravessa.",
      },
      {
        pergunta: "Qual cidade brasileira é uma das CAPITAIS mundiais do grafite hoje?",
        fotoUrl: nosGrafiteUrbano,
        alternativas: [
          { texto: "São Paulo", correta: true },
          { texto: "Nenhuma cidade brasileira grafita", correta: false },
        ],
        feedbackAcerto: "Perfeito! Beco do Batman e milhares de muros — SP é referência mundial.",
        feedbackErro: "Brasil grafita MUITO. São Paulo é referência mundial.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Cada tipo de arte urbana usa uma paleta. Descobre a cor certa pra cada um!",
    animais: [
      {
        nome: "Pintura rupestre da Serra da Capivara", emoji: "🖐️", fotoUrl: nosRupestre,
        corAlvo: { nome: "Vermelho-ocre da terra", hex: "#b45309" },
        opcoes: [
          { nome: "Verde-neon fluorescente", hex: "#84cc16" },
          { nome: "Vermelho-ocre da terra", hex: "#b45309" },
          { nome: "Rosa-chiclete", hex: "#ec4899" },
        ],
        falaAcerto: "Isso! Terra vermelha era o único pigmento disponível na caverna.",
      },
      {
        nome: "Grafite moderno de spray", emoji: "🎨", fotoUrl: nosGrafiteUrbano,
        corAlvo: { nome: "Azul + rosa + amarelo elétricos", hex: "#2563eb" },
        opcoes: [
          { nome: "Marrom-terra opaco", hex: "#78350f" },
          { nome: "Azul + rosa + amarelo elétricos", hex: "#2563eb" },
          { nome: "Cinza escuro fosco", hex: "#374151" },
        ],
        falaAcerto: "Perfeito! Grafite adora cores VIBRANTES pra chamar atenção.",
      },
      {
        nome: "Cena de caça rupestre", emoji: "🏹", fotoUrl: nosCacada,
        corAlvo: { nome: "Marrom + vermelho-tijolo naturais", hex: "#78350f" },
        opcoes: [
          { nome: "Roxo-lilás pastel", hex: "#c084fc" },
          { nome: "Marrom + vermelho-tijolo naturais", hex: "#78350f" },
          { nome: "Amarelo-canário puro", hex: "#facc15" },
        ],
        falaAcerto: "Certo! Cores da terra — únicas disponíveis há milhares de anos.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 4 passos pra fazer TEU mural em casa — no papel gigante!",
    passos: [
      { id: "p1", texto: "PENSO na mensagem: o que quero contar pro mundo?", emoji: "💭", ordem: 1, fotoUrl: vocabMuralismo },
      { id: "p2", texto: "ESBOÇO em folha pequena, planejando cores e formas", emoji: "✏️", ordem: 2, fotoUrl: passoEsboco },
      { id: "p3", texto: "AMPLIO o desenho numa folha GIGANTE (papel-pardo)", emoji: "📄", ordem: 3, fotoUrl: mapaMural },
      { id: "p4", texto: "PINTO com tintas coloridas — meu mural está no ar!", emoji: "🎨", ordem: 4, fotoUrl: nosGrafiteUrbano },
    ],
    falaAcerto: "Teu mural está PRONTO! A parede virou tua galeria pessoal.",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do explorador. Toca nas palavras coloridas pra ouvir.",
    titulo: "Diário do Explorador — Beco do Batman",
    trechos: [
      { texto: "Andei pelas ruas e vi um enorme", palavraDestaque: "grafite", corDestaque: "#dc2626" },
      { texto: "Também vi uma parede inteira com um", palavraDestaque: "muralismo", corDestaque: "#0284c7" },
      { texto: "Uma figura repetida foi feita com um", palavraDestaque: "estêncil", corDestaque: "#7c3aed" },
      { texto: "Todas essas expressões formam a arte", palavraDestaque: "urbana", corDestaque: "#4b5563" },
      { texto: "Sou um Explorador do Tempo — a página 7 está sendo restaurada!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎨 Muro do Beco! Toca em CADA elemento na ordem certa pra criar teu grafite completo antes do tempo acabar.",
    titulo: "🎨 Muro do Beco",
    instrucao: "Monte seu grafite na ordem correta!",
    tempoSeg: 40,
    itens: [
      { emoji: "🧢", rotulo: "Coloco máscara e proteção", cor: "#4b5563" },
      { emoji: "✏️", rotulo: "Faço o esboço no muro", cor: "#78350f" },
      { emoji: "🟥", rotulo: "Preencho as cores base com spray", cor: "#dc2626" },
      { emoji: "🟦", rotulo: "Adiciono as cores secundárias", cor: "#2563eb" },
      { emoji: "⬛", rotulo: "Faço o contorno preto", cor: "#1f2937" },
      { emoji: "✍️", rotulo: "Assino minha obra", cor: "#eab308" },
    ],
    falaFinal: "Grafite completo, assinado e no muro — arte urbana no ar!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o caderno da expedição repassando cada achado. Toca em cada verbete!",
    titulo: "📓 Caderno da Expedição Urbana",
    itens: [
      { emoji: "🎨", rotulo: "Grafite", descricao: "Arte com spray em muros da cidade.", cor: "#dc2626", fotoUrl: vocabGrafite },
      { emoji: "🏙️", rotulo: "Muralismo", descricao: "Pintura gigante em prédios públicos.", cor: "#0284c7", fotoUrl: vocabMuralismo },
      { emoji: "🦋", rotulo: "Estêncil", descricao: "Molde vazado que imprime figuras.", cor: "#7c3aed", fotoUrl: vocabEstencil },
      { emoji: "🏢", rotulo: "Arte Urbana", descricao: "Toda arte feita na rua.", cor: "#4b5563", fotoUrl: vocabUrbano },
      { emoji: "🖐️", rotulo: "Pintura Rupestre", descricao: "Primeiro grafite: 30.000 anos atrás.", cor: "#b45309", fotoUrl: nosRupestre },
      { emoji: "🇧🇷", rotulo: "Grafite Brasileiro", descricao: "Kobra e OSGEMEOS conquistando o mundo.", cor: "#facc15", fotoUrl: mapaMural },
      { emoji: "📖", rotulo: "Atlas COMPLETO", descricao: "7 páginas restauradas — expedição encerrada!", cor: "#7c3aed", fotoUrl: mapaMural },
    ],
    falaFinal: "PÁGINA 7 do Atlas dos Exploradores DESBLOQUEADA — A Cidade-Galeria! Terminou a expedição do 3º Ano!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão FINAL da expedição — mostra que virou um mestre da arte urbana!",
    quiz: {
      pergunta: "O que os primeiros humanos das CAVERNAS têm em comum com os grafiteiros de HOJE?",
      alternativas: [
        { texto: "Ambos pintam nas PAREDES pra contar histórias e marcar presença", correta: true },
        { texto: "Nada em comum, são coisas totalmente diferentes", correta: false },
      ],
      feedback: "PERFEITO, Explorador! Há 30.000 anos os humanos já pintavam paredes de cavernas com mãos e bichos. Hoje pintam paredes de prédios com spray. O DESEJO é o mesmo: contar quem somos, o que sentimos, marcar nosso lugar no mundo. A arte urbana é a filha mais nova das pinturas rupestres!",
    },
    missaoFamilia:
      "🎨 Detetives da Arte Urbana: em família, deem uma volta pelo bairro e fotografem 3 grafites diferentes que encontrarem. Depois, escolham 1 e desenhem juntos uma nova versão em papel-pardo, com o significado que a família decidir.",
    recompensaTitulo: "📜 Atlas COMPLETO — 7 páginas restauradas! Explorador Formado!",
    recompensaItem: "🏆 Medalha de OURO do Explorador do Tempo e do Espaço",
  },

  recompensa: { xp: 100, moedas: 60, medalha: "Explorador do Tempo e do Espaço" },
};
