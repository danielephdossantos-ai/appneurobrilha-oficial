import type { UnidadeArte, ModoProfessor } from "../types";

const CORES_PRIMARIAS = ["#E63946", "#F1C40F", "#1D8FE1"];
const CORES_SECUNDARIAS = ["#F97316", "#22C55E", "#8B5CF6"];
const CORES_QUENTES = ["#E63946", "#F97316", "#F1C40F", "#EF4444", "#FB923C"];
const CORES_FRIAS = ["#1D8FE1", "#22C55E", "#8B5CF6", "#0EA5E9", "#14B8A6"];
const ARCO_IRIS = ["#E63946", "#F97316", "#F1C40F", "#22C55E", "#1D8FE1", "#4F46E5", "#8B5CF6"];

/* --------- Modo Professor da Aula 1 (padrão para reutilizar) --------- */
const MODO_PROFESSOR_AULA_1: ModoProfessor = {
  bncc: [
    { codigo: "EF15AR04", descricao: "Experimentar diferentes formas de expressão artística (desenho, pintura, colagem) fazendo uso sustentável de materiais, instrumentos, recursos e técnicas convencionais e não convencionais." },
    { codigo: "EF15AR05", descricao: "Experimentar a criação em artes visuais de modo individual, coletivo e colaborativo, explorando diferentes espaços da escola e da comunidade." },
    { codigo: "EF15AR02", descricao: "Explorar e reconhecer elementos constitutivos das artes visuais (ponto, linha, forma, cor, espaço, movimento etc.)." },
  ],
  objetivos: [
    "Identificar as três cores primárias (vermelho, amarelo, azul).",
    "Reconhecer cores presentes no cotidiano.",
    "Relacionar objetos às suas cores.",
    "Experimentar pintura digital e física.",
    "Desenvolver percepção visual e criatividade.",
  ],
  materiaisDigitais: [
    "Animações e imagens coloridas",
    "Ferramenta de pintura no canvas",
    "Áudio narrado e trilha musical",
    "Quiz interativo",
    "Jogo de arrastar cor no objeto",
  ],
  materiaisFisicos: [
    "Folha de papel branco",
    "Lápis de cor",
    "Giz de cera",
    "Tinta guache",
    "Pincel",
  ],
  adaptacoesTEA: [
    "Rotina visual constante — os 13 passos aparecem numerados e sempre na mesma ordem.",
    "Antecipe cada etapa em voz alta antes de iniciar (ex.: 'Agora vamos pintar').",
    "Reduza estímulos: desative o áudio (botão superior) se a criança demonstrar sobrecarga sensorial.",
    "Permita repetir a mesma etapa quantas vezes quiser antes de avançar.",
    "Aceite respostas curtas ou apontar em vez de falar.",
  ],
  adaptacoesTDAH: [
    "Divida a aula em 2 ou 3 sessões curtas (10 min cada) se a criança se dispersar.",
    "Reforço positivo imediato após cada acerto — comemore em voz alta.",
    "Use o mini-jogo (etapa 6) como pausa ativa entre as etapas mais longas.",
    "Ofereça escolha ('quer começar pelo desenho ou pela mistura?') para dar senso de controle.",
    "Não cobre precisão no traço; valorize o engajamento.",
  ],
  criteriosAvaliacao: [
    {
      criterio: "Reconhecimento das cores primárias",
      observavel: "A criança nomeia ou aponta corretamente vermelho, amarelo e azul.",
      consolidado: "Acerta as 3 rodadas da etapa de Exploração sem ajuda.",
    },
    {
      criterio: "Associação cor ↔ objeto",
      observavel: "A criança relaciona banana=amarelo, morango=vermelho, céu=azul.",
      consolidado: "Vence o Mini Game arrastando pelo menos 3 de 4 pares corretos.",
    },
    {
      criterio: "Expressão pela pintura",
      observavel: "A criança escolhe cores e preenche o desenho digital.",
      consolidado: "Produz uma pintura reconhecível e a salva no álbum.",
    },
    {
      criterio: "Percepção da cor no cotidiano",
      observavel: "Encontra objetos coloridos em casa (missão).",
      consolidado: "Registra pelo menos 1 foto ou marca como concluído.",
    },
  ],
  orientacoesPais: [
    "Sente ao lado da criança nas primeiras 2 aulas — depois deixe explorar sozinha.",
    "Não corrija a cor 'errada' na pintura livre; é expressão, não teste.",
    "Se a criança pular etapas, tudo bem. O importante é voltar ao encontro entre cor e mundo real.",
    "Aproveite a missão em casa para conversar: 'De que cor é essa maçã? E este brinquedo?'",
    "Guarde a foto do desenho no álbum — no fim do ano vira o Portfólio de Arte.",
  ],
  duracaoMin: [25, 35],
};

export const unidade1: UnidadeArte = {
  slug: "unidade-1",
  numero: 1,
  titulo: "Descobrindo o Mundo das Cores",
  subtitulo: "As cores estão em todos os lugares",
  tema: "Cores",
  projeto: "Meu Primeiro Arco-Íris",
  corPrincipal: "#FF6B4A",
  emoji: "🎨",
  aulas: [
    // ============================================ AULA 01 (SPEB 1.0 completo)
    {
      slug: "aula-01-cores-primarias",
      numero: 1,
      eixoPrincipal: "visuais",
      titulo: "As Cores Estão em Toda Parte",
      subtitulo: "Vermelho, amarelo e azul — as três amigas mágicas",

      // 1 História de abertura — caixa mágica sem cor
      historia: [
        { emoji: "📦", fundo: "#EDEDED", texto: "Brilha acordou e encontrou uma caixa mágica... completamente sem cor! Todas as cores do mundo desapareceram." },
        { emoji: "😮", fundo: "#FBF6EC", texto: "Brilha disse: 'Hoje acordei e todas as cores desapareceram! Será que conseguimos encontrá-las novamente?'" },
        { emoji: "🌟", fundo: "#F1C40F", texto: "Lily respondeu: 'Vamos procurar as cores escondidas pelo mundo!'" },
        { emoji: "🎒", fundo: "#1D8FE1", texto: "Ben disse: 'Cada desafio vai devolver uma cor para a caixa mágica.'" },
        { emoji: "▶️", fundo: "#FBF6EC", texto: "Toque em 'Começar aventura' para ajudar a encontrar as cores perdidas!" },
      ],

      // 2 Descobrindo as cores
      descoberta: {
        titulo: "Descubra as cores",
        intro: "A tela está cinza. Toque no objeto para ver que cor ele tinha!",
        itens: [
          { nome: "maçã", emoji: "🍎", cor: "#E63946", corNome: "Vermelho" },
          { nome: "limão", emoji: "🍋", cor: "#F1C40F", corNome: "Amarelo" },
          { nome: "mirtilo", emoji: "🫐", cor: "#1D8FE1", corNome: "Azul" },
        ],
        fecho: "Vermelho, amarelo e azul são chamadas de cores PRIMÁRIAS!",
      },

      // 3 Explorar — tocar apenas nos objetos da cor pedida
      exploracao: {
        titulo: "Encontre a cor",
        rodadas: [
          {
            instrucao: "Toque apenas nos objetos VERMELHOS!",
            corAlvo: "#E63946", corAlvoNome: "vermelho",
            objetos: [
              { emoji: "🍎", cor: "#E63946", correto: true },
              { emoji: "🚗", cor: "#E63946", correto: true },
              { emoji: "🌹", cor: "#E63946", correto: true },
              { emoji: "🍓", cor: "#E63946", correto: true },
              { emoji: "🍋", cor: "#F1C40F", correto: false },
              { emoji: "🐟", cor: "#1D8FE1", correto: false },
            ],
          },
          {
            instrucao: "Agora toque apenas nos AMARELOS!",
            corAlvo: "#F1C40F", corAlvoNome: "amarelo",
            objetos: [
              { emoji: "🍌", cor: "#F1C40F", correto: true },
              { emoji: "🌻", cor: "#F1C40F", correto: true },
              { emoji: "🌟", cor: "#F1C40F", correto: true },
              { emoji: "🧀", cor: "#F1C40F", correto: true },
              { emoji: "🍎", cor: "#E63946", correto: false },
              { emoji: "🫐", cor: "#1D8FE1", correto: false },
            ],
          },
          {
            instrucao: "Por último, toque nos AZUIS!",
            corAlvo: "#1D8FE1", corAlvoNome: "azul",
            objetos: [
              { emoji: "🫐", cor: "#1D8FE1", correto: true },
              { emoji: "🐋", cor: "#1D8FE1", correto: true },
              { emoji: "🌊", cor: "#1D8FE1", correto: true },
              { emoji: "💙", cor: "#1D8FE1", correto: true },
              { emoji: "🍌", cor: "#F1C40F", correto: false },
              { emoji: "🌹", cor: "#E63946", correto: false },
            ],
          },
        ],
      },

      // 4 Pintura digital
      ferramenta: {
        brief: "Pinte o balão! Escolha vermelho, amarelo ou azul.",
        cores: CORES_PRIMARIAS,
      },

      // 5 Misturando cores
      mistura: {
        titulo: "Misturando cores",
        passos: [
          { corA: "#1D8FE1", corAEmoji: "🔵", corB: "#F1C40F", corBEmoji: "🟡", resultado: "#22C55E", resultadoNome: "Verde", resultadoEmoji: "🟢" },
          { corA: "#E63946", corAEmoji: "🔴", corB: "#F1C40F", corBEmoji: "🟡", resultado: "#F97316", resultadoNome: "Laranja", resultadoEmoji: "🟠" },
          { corA: "#E63946", corAEmoji: "🔴", corB: "#1D8FE1", corBEmoji: "🔵", resultado: "#8B5CF6", resultadoNome: "Roxo", resultadoEmoji: "🟣" },
        ],
      },

      // 6 Mini game de arrastar
      miniJogo: {
        titulo: "Devolva a cor para a caixa mágica",
        instrucao: "Arraste cada cor para o objeto certo!",
        pares: [
          { objetoEmoji: "🍌", objetoNome: "Banana", cor: "#F1C40F", corNome: "amarelo" },
          { objetoEmoji: "🌳", objetoNome: "Árvore", cor: "#22C55E", corNome: "verde" },
          { objetoEmoji: "☁️", objetoNome: "Nuvem no céu", cor: "#1D8FE1", corNome: "azul" },
          { objetoEmoji: "🍓", objetoNome: "Morango", cor: "#E63946", corNome: "vermelho" },
        ],
      },

      // 7 Música
      musica: {
        titulo: "Batida das três cores",
        padrao: ["palma", "palma", "pé", "palma", "palma", "pé", "boca", "silencio"],
        bpm: 90,
      },

      // 8 Missão em casa
      missaoCasa: {
        titulo: "Missão em casa",
        instrucao: "Agora encontre TRÊS objetos vermelhos na sua casa. Tire uma foto ou marque como concluído!",
        emoji: "🏠",
      },

      // 9 Atividade manual
      atividade: {
        titulo: "Atividade manual — sua fruta favorita",
        materiais: ["folha", "lápis de cor", "giz de cera ou tinta"],
        passos: [
          "Pegue folha, lápis, giz ou tinta.",
          "Pense na sua fruta favorita.",
          "Desenhe ela usando APENAS vermelho, amarelo ou azul.",
          "Depois tire uma foto e envie no botão de câmera.",
        ],
      },

      // 10 Curiosidade
      curiosidade: {
        titulo: "Você sabia?",
        fatos: [
          "O vermelho chama atenção — por isso as placas de PARE são vermelhas.",
          "O amarelo lembra o Sol e deixa a gente feliz.",
          "O azul lembra o céu e o mar, dá calma.",
        ],
      },

      // 11 Quiz
      quiz: {
        titulo: "Quiz das cores",
        perguntas: [
          {
            pergunta: "Qual destas é VERMELHA?",
            opcoes: [
              { label: "Morango", emoji: "🍓", cor: "#E63946", correto: true },
              { label: "Banana", emoji: "🍌", cor: "#F1C40F", correto: false },
              { label: "Mirtilo", emoji: "🫐", cor: "#1D8FE1", correto: false },
            ],
            explicacao: "O morango é vermelho! Como o coração ❤️.",
          },
          {
            pergunta: "Qual mistura faz VERDE?",
            opcoes: [
              { label: "Azul + Amarelo", emoji: "🔵🟡", correto: true },
              { label: "Vermelho + Amarelo", emoji: "🔴🟡", correto: false },
              { label: "Vermelho + Azul", emoji: "🔴🔵", correto: false },
            ],
            explicacao: "Azul + amarelo = verde! Como as folhas 🌿.",
          },
          {
            pergunta: "Qual é uma cor PRIMÁRIA?",
            opcoes: [
              { label: "Amarelo", emoji: "🟡", cor: "#F1C40F", correto: true },
              { label: "Verde", emoji: "🟢", cor: "#22C55E", correto: false },
              { label: "Laranja", emoji: "🟠", cor: "#F97316", correto: false },
            ],
            explicacao: "Amarelo é primária! Verde e laranja nascem de misturas.",
          },
        ],
      },

      // 12 Desafio final
      desafioFinal: {
        titulo: "Desafio Final",
        narrativa: "A caixa mágica ficou colorida novamente graças a você!",
        medalha: "🏅",
        nomeMedalha: "Caçador de Cores",
        xp: 50,
      },

      // 13 Relatório
      relatorio: [
        "Reconhece as três cores primárias (vermelho, amarelo, azul).",
        "Consegue nomear objetos coloridos ao redor.",
        "Experimentou pintura digital.",
        "Descobriu como nascem verde, laranja e roxo pela mistura.",
        "Registrou uma criação no álbum do Estúdio Brilha.",
      ],

      modoProfessor: MODO_PROFESSOR_AULA_1,
    },

    // ============================================ AULA 02 (formato antigo, preservada)
    {
      slug: "aula-02-mistura-de-cores",
      numero: 2,
      eixoPrincipal: "visuais",
      titulo: "Cores Que Nascem da Mistura",
      subtitulo: "Laranja, verde e roxo",
      historia: [
        { emoji: "🧪", fundo: "#FBF6EC", texto: "As três amigas de ontem descobriram uma coisa mágica: quando se abraçam, viram outra cor!" },
        { emoji: "🟠", fundo: "#F97316", texto: "Vermelho + Amarelo = LARANJA! A cor da abóbora e do pôr do sol." },
        { emoji: "🟢", fundo: "#22C55E", texto: "Amarelo + Azul = VERDE! A cor da grama e das folhas." },
        { emoji: "🟣", fundo: "#8B5CF6", texto: "Azul + Vermelho = ROXO! A cor da uva e das flores." },
        { emoji: "🎨", fundo: "#FBF6EC", texto: "Essas são as CORES SECUNDÁRIAS — nascem da mistura das primárias!" },
      ],
      atividade: {
        titulo: "Laboratório de cores",
        materiais: ["tinta guache OU giz molhado", "papel branco", "um pincel ou o dedo"],
        passos: [
          "Coloque um pouquinho de vermelho e amarelo no papel.",
          "Misture com o dedo. Que cor apareceu?",
          "Agora misture amarelo com azul.",
          "Por último, azul com vermelho.",
          "Guarde as três misturas — é o seu laboratório!",
        ],
      },
      video: { titulo: "Tinta misturando em câmera lenta", descricao: "Veja as cores se abraçando e virando novas cores." },
      ferramenta: { brief: "Pinte um sol laranja, uma folha verde e uma uva roxa.", cores: [...CORES_PRIMARIAS, ...CORES_SECUNDARIAS] },
      musica: { titulo: "Duetos das misturas", padrao: ["palma", "boca", "palma", "boca", "pé", "pé", "silencio", "palma"], bpm: 85 },
      teatro: { titulo: "Cena da mistura", emocao: "surpresa", emoji: "😲", fala: "Uau! Ficou uma cor nova! Que mágica!" },
      movimento: {
        titulo: "Corpo laranja, corpo verde, corpo roxo",
        poses: [
          { nome: "Salta alegre (laranja)", emoji: "🟠", segundos: 5 },
          { nome: "Cresce como árvore (verde)", emoji: "🟢", segundos: 5 },
          { nome: "Roda devagar (roxo)", emoji: "🟣", segundos: 5 },
        ],
      },
      jogo: {
        tipo: "combinarCores",
        titulo: "Que cor nasce?",
        dados: {
          rodadas: [
            { alvo: "laranja", cor: "#F97316", opcoes: CORES_SECUNDARIAS, dica: "vermelho + amarelo" },
            { alvo: "verde", cor: "#22C55E", opcoes: CORES_SECUNDARIAS, dica: "amarelo + azul" },
            { alvo: "roxo", cor: "#8B5CF6", opcoes: CORES_SECUNDARIAS, dica: "azul + vermelho" },
          ],
        },
      },
      registro: { pergunta: "Foto do seu laboratório de misturas!", tipo: "foto" },
      conquista: { medalha: "🧪", nome: "Pequeno Cientista das Cores", descricao: "Descobriu como nascem as cores secundárias!" },
      relatorio: [
        "Compreendeu a relação primária → secundária.",
        "Experimentou mistura de tintas na prática.",
        "Nomeou laranja, verde e roxo corretamente.",
      ],
    },

    // ============================================ AULA 03 (preservada)
    {
      slug: "aula-03-quentes-e-frias",
      numero: 3,
      eixoPrincipal: "integradas",
      titulo: "Cores Que Esquentam, Cores Que Esfriam",
      subtitulo: "Quentes vs frias",
      historia: [
        { emoji: "☀️", fundo: "#F97316", texto: "Algumas cores dão a sensação de calor: são as CORES QUENTES." },
        { emoji: "🔥", fundo: "#E63946", texto: "Vermelho, laranja e amarelo lembram o fogo, o sol, o outono." },
        { emoji: "❄️", fundo: "#1D8FE1", texto: "Outras dão calma e frescor: são as CORES FRIAS." },
        { emoji: "🌊", fundo: "#0EA5E9", texto: "Azul, verde e roxo lembram água, floresta e noite." },
        { emoji: "🎨", fundo: "#FBF6EC", texto: "Os artistas usam cores quentes para animar e cores frias para acalmar." },
      ],
      atividade: {
        titulo: "Divide sua paleta",
        materiais: ["papel", "lápis de cor de várias cores"],
        passos: [
          "Dobre a folha ao meio.",
          "Do lado esquerdo desenhe algo QUENTE: sol, fogo, pimenta...",
          "Do lado direito desenhe algo FRIO: rio, pinguim, gelo...",
          "Use só cores quentes de um lado e só frias do outro.",
        ],
      },
      video: { titulo: "Duas paisagens: deserto e polo", descricao: "Compare como o olho sente calor ou frio só pelas cores." },
      ferramenta: { brief: "Pinte um lado quente e um lado frio.", cores: [...CORES_QUENTES, ...CORES_FRIAS] },
      musica: { titulo: "Ritmo quente e ritmo frio", padrao: ["palma", "palma", "palma", "silencio", "boca", "silencio", "boca", "silencio"], bpm: 100 },
      teatro: { titulo: "Sou fogo, sou gelo", emocao: "contraste", emoji: "🔥", fala: "Agora eu sou fogo! Agora eu sou gelo... brrr!" },
      movimento: {
        titulo: "Aquece e esfria",
        poses: [
          { nome: "Corpo agitado (quente)", emoji: "🔥", segundos: 5 },
          { nome: "Corpo devagar (frio)", emoji: "❄️", segundos: 5 },
          { nome: "Congela!", emoji: "🧊", segundos: 3 },
        ],
      },
      jogo: {
        tipo: "combinarCores",
        titulo: "Quente ou fria?",
        dados: {
          rodadas: [
            { alvo: "QUENTE", cor: "#F97316", opcoes: ["#E63946", "#1D8FE1"], corCerta: "#E63946" },
            { alvo: "FRIA", cor: "#0EA5E9", opcoes: ["#F1C40F", "#22C55E"], corCerta: "#22C55E" },
            { alvo: "QUENTE", cor: "#EF4444", opcoes: ["#8B5CF6", "#F1C40F"], corCerta: "#F1C40F" },
            { alvo: "FRIA", cor: "#4F46E5", opcoes: ["#F97316", "#8B5CF6"], corCerta: "#8B5CF6" },
          ],
        },
      },
      registro: { pergunta: "Foto do seu desenho quente-e-frio!", tipo: "foto" },
      conquista: { medalha: "🌡️", nome: "Sensível às Cores", descricao: "Aprendeu que cor também é sensação!" },
      relatorio: [
        "Classifica cores em quentes e frias.",
        "Associa cores a sensações e paisagens.",
        "Trabalhou composição dividindo a folha.",
      ],
    },

    // ============================================ AULA 04 (preservada)
    {
      slug: "aula-04-meu-primeiro-arco-iris",
      numero: 4,
      eixoPrincipal: "integradas",
      titulo: "Projeto: Meu Primeiro Arco-Íris",
      subtitulo: "Juntar tudo que aprendeu",
      historia: [
        { emoji: "🌈", fundo: "#FBF6EC", texto: "Chegou o dia! Você já conhece cores primárias, secundárias, quentes e frias." },
        { emoji: "🎨", fundo: "#F1C40F", texto: "O arco-íris tem 7 cores nesta ordem: vermelho, laranja, amarelo, verde, azul, anil e violeta." },
        { emoji: "☁️", fundo: "#1D8FE1", texto: "Ele aparece quando o sol encontra a chuva no céu — é a natureza pintando!" },
        { emoji: "✨", fundo: "#8B5CF6", texto: "Hoje você vai pintar o SEU arco-íris e guardar no álbum do Estúdio Brilha." },
      ],
      atividade: {
        titulo: "Meu arco-íris",
        materiais: ["a ferramenta digital abaixo OU papel e lápis"],
        passos: [
          "Vá até a ferramenta de desenho.",
          "Pinte 7 faixas curvas, uma pra cada cor do arco-íris.",
          "Começa em vermelho, termina em violeta.",
          "Se quiser, adicione um sol e uma nuvem.",
          "Salve tirando foto no fim.",
        ],
      },
      video: { titulo: "Como um arco-íris se forma", descricao: "Chuva + sol = mágica no céu, explicado simples." },
      ferramenta: { brief: "Pinte um arco-íris com as 7 cores.", cores: ARCO_IRIS },
      musica: { titulo: "Canção do arco-íris", padrao: ["palma", "palma", "boca", "palma", "palma", "boca", "pé", "silencio"], bpm: 95 },
      teatro: { titulo: "Anuncia teu arco-íris", emocao: "orgulho", emoji: "🌈", fala: "Olha só! Eu pintei o meu primeiro arco-íris!" },
      movimento: {
        titulo: "Dança do arco-íris",
        poses: [
          { nome: "Faz arco com os braços", emoji: "🌈", segundos: 6 },
          { nome: "Roda como chuva", emoji: "🌧️", segundos: 5 },
          { nome: "Levanta como sol", emoji: "☀️", segundos: 5 },
        ],
      },
      jogo: { tipo: "combinarCores", titulo: "Ordem do arco-íris", dados: { modo: "ordenar", ordemCerta: ARCO_IRIS } },
      registro: { pergunta: "Foto do seu arco-íris pronto — vai pra sua Galeria!", tipo: "foto" },
      conquista: { medalha: "🌈", nome: "Mestre do Arco-Íris", descricao: "Completou o projeto da Unidade 1!" },
      relatorio: [
        "Concluiu a Unidade 1 — Cores.",
        "Aplicou todos os conceitos num projeto único.",
        "Produziu obra pessoal registrada no álbum.",
        "Pronto para a Unidade 2 — Formas e Desenhos.",
      ],
    },
  ],
};
