import type { AulaArteV1 } from "../../types";
import bauhausDessau from "@/assets/arte-7ano/u5-bauhaus-dessau.jpg";
import wassilyChair from "@/assets/arte-7ano/u5-wassily-chair.jpg";
import bauhausWorkshop from "@/assets/arte-7ano/u5-bauhaus-workshop.jpg";
import busStopMinimal from "@/assets/arte-7ano/u5-bus-stop-minimal.jpg";
import parqueBanco from "@/assets/arte-7ano/u5-parque-banco.jpg";
import abrigoSolar from "@/assets/arte-7ano/u5-abrigo-solar.jpg";
import lixeirasColoridas from "@/assets/arte-7ano/u5-lixeiras-coloridas.jpg";
import posteInteligente from "@/assets/arte-7ano/u5-poste-inteligente.jpg";
import bicicletario from "@/assets/arte-7ano/u5-bicicletario.jpg";
import cadeiraErgonomicaDiagrama from "@/assets/arte-7ano/u5-cadeira-ergonomica-diagrama.jpg";
import designIndustrialVistas from "@/assets/arte-7ano/u5-design-industrial-vistas.jpg";
import radioBraun from "@/assets/arte-7ano/u5-radio-braun.jpg";
import cadeiraEames from "@/assets/arte-7ano/u5-cadeira-eames.jpg";
import totemUrbano from "@/assets/arte-7ano/u5-totem-urbano.jpg";
import formaFuncao from "@/assets/arte-7ano/u5-forma-funcao.jpg";
import tubularSteel from "@/assets/arte-7ano/u5-tubular-steel.jpg";

/**
 * Arte · 7º Ano · Unidade 5 · Aula 01 — "A Estética Industrial — Design de Objetos e o Mobiliário Urbano"
 * Metanarrativa: 🚀 Crônicas das Cidades Suspensas
 * Foco: Bauhaus, "a forma segue a função", design industrial, ergonomia, mobiliário urbano.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-design-industrial",
  titulo: "A Estética Industrial — Design de Objetos e o Mobiliário Urbano",
  iconeTrilha: "🪑",
  bncc: ["EF69AR04", "EF69AR05", "EF69AR31"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Designer Industrial! O Códice abriu o Setor de Design de Utilidades da Cidade Suspensa: aqui, TODO objeto — de um banco de praça a uma cadeira — nasce de um projeto. Sua missão é entender a ESTÉTICA INDUSTRIAL: forma, função e conforto trabalhando juntos. Toca em cada pista.",
    titulo: "🏭 O Setor de Design de Utilidades",
    instrucao: "Toca em cada pista pra ativar o módulo de design industrial",
    itens: [
      { emoji: "🏛️", rotulo: "Escola Bauhaus (Dessau)", descricao: "Em 1919, na Alemanha, nasceu a Bauhaus: escola que uniu arte, artesanato e indústria. Ali surgiu a ideia de que todo objeto do cotidiano poderia ser bem projetado.", cor: "#78716c", fotoUrl: bauhausDessau },
      { emoji: "🪑", rotulo: "Cadeira Wassily de Marcel Breuer", descricao: "Tubos de aço curvados como o guidão de bicicleta! Breuer criou uma cadeira leve, resistente e barata de produzir em série — design industrial em ação.", cor: "#0891b2", fotoUrl: wassilyChair },
      { emoji: "🚏", rotulo: "Ponto de ônibus minimalista", descricao: "Um simples ponto de ônibus é um objeto de design: precisa proteger da chuva, ser resistente e caber na paisagem urbana. Forma + função.", cor: "#0f766e", fotoUrl: busStopMinimal },
      { emoji: "🛠️", rotulo: "Ateliê da Bauhaus", descricao: "Estudantes da Bauhaus aprendiam a desenhar E a fabricar. Design não é só desenho bonito — é um objeto que FUNCIONA na vida real.", cor: "#dc2626", fotoUrl: bauhausWorkshop },
    ],
    falaFinal: "Você vai aprender por que 'a forma segue a função' virou a regra de ouro do design.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de designer antes de projetar seu primeiro objeto!",
    perguntas: [
      {
        pergunta: "Um banco de praça tem um encosto curvado que acompanha a curva das costas humanas. Por que os designers fazem isso?",
        fotoUrl: parqueBanco,
        alternativas: [
          { texto: "Ergonomia — a forma do objeto se adapta ao corpo humano para dar conforto", correta: true },
          { texto: "Só para decorar — a curva não tem nenhuma função prática", correta: false },
        ],
        feedbackAcerto: "Isso! Ergonomia é estudar como os objetos se encaixam no corpo humano com conforto e segurança.",
        feedbackErro: "Toda curva ergonômica tem uma FUNÇÃO: apoiar melhor a coluna. Design não é só estética.",
      },
      {
        pergunta: "Lixeiras públicas costumam ter cores diferentes (verde, azul, vermelho) para cada tipo de material. Qual é o objetivo desse design?",
        fotoUrl: lixeirasColoridas,
        alternativas: [
          { texto: "Comunicação visual: a cor indica a função de cada lixeira e facilita a separação do lixo", correta: true },
          { texto: "Nenhum: as cores são escolhidas aleatoriamente pela fábrica", correta: false },
        ],
        feedbackAcerto: "Exato! Cor também é FUNÇÃO no design — ela comunica informação sem precisar de palavras.",
        feedbackErro: "As cores não são acaso: elas comunicam a função de cada lixeira à distância.",
      },
      {
        pergunta: "A Bauhaus, escola alemã de 1919, defendia que um objeto bonito também precisava ser útil e barato de produzir em série. Que frase resume essa ideia?",
        fotoUrl: bauhausDessau,
        alternativas: [
          { texto: "'A forma segue a função' — o design nasce da utilidade do objeto", correta: true },
          { texto: "'A beleza não precisa servir para nada' — decoração pura", correta: false },
        ],
        feedbackAcerto: "Perfeito! Essa é a regra de ouro da Bauhaus e do design industrial moderno.",
        feedbackErro: "A Bauhaus rejeitava decoração inútil: cada elemento deveria ter uma FUNÇÃO clara.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do designer industrial. Toca em cada verbete!",
    cards: [
      { termo: "Bauhaus", definicao: "Escola alemã fundada em 1919 que uniu arte, artesanato e indústria, criando as bases do design moderno.", emoji: "🏛️", cor: "#78716c", fotoUrl: bauhausDessau },
      { termo: "Forma segue a função", definicao: "Princípio de design: a aparência de um objeto deve nascer da sua utilidade, sem enfeites desnecessários.", emoji: "⚙️", cor: "#0891b2", fotoUrl: formaFuncao },
      { termo: "Ergonomia", definicao: "Estudo de como os objetos se adaptam ao corpo humano, buscando conforto, segurança e eficiência de uso.", emoji: "🧍", cor: "#0f766e", fotoUrl: cadeiraErgonomicaDiagrama },
      { termo: "Mobiliário Urbano", definicao: "Conjunto de objetos de design instalados nas ruas para uso público: bancos, postes, pontos de ônibus, lixeiras.", emoji: "🏙️", cor: "#dc2626", fotoUrl: totemUrbano },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta a história de como o design passou a moldar a vida nas cidades.",
    paragrafos: [
      "Em 1919, na cidade alemã de Weimar, o arquiteto Walter Gropius fundou a BAUHAUS — uma escola revolucionária que uniu, pela primeira vez, ARTE, ARTESANATO e INDÚSTRIA sob o mesmo teto. Antes dela, objetos bonitos eram feitos à mão, um de cada vez, e objetos de fábrica eram feios e sem cuidado. A Bauhaus quis provar que dava para produzir em série SEM perder a beleza.",
      "O lema que resumiu esse pensamento ficou famoso: 'A FORMA SEGUE A FUNÇÃO'. Isso significa que o formato de um objeto deve nascer da sua utilidade — nada de enfeites que não servem para nada. Um exemplo perfeito é a Cadeira Wassily, criada por Marcel Breuer em 1925: tubos de aço curvados, leves e resistentes, inspirados no guidão da sua bicicleta. Bonita, funcional e fácil de produzir em massa.",
      "Esse pensamento se espalhou pelo mundo e virou base do DESIGN INDUSTRIAL — a área que projeta os objetos que usamos todos os dias, de rádios a cadeiras de escritório. Um bom designer sempre pensa na ERGONOMIA: como o corpo humano vai tocar, sentar ou segurar aquele objeto. Um banco com encosto curvado, um mouse que se encaixa na mão, um capacete que se ajusta à cabeça — tudo isso é ergonomia em ação.",
      "Nas cidades, esse cuidado ganha o nome de MOBILIÁRIO URBANO: os bancos de praça, os pontos de ônibus, os postes de luz, as lixeiras coloridas e os bicicletários são todos PROJETOS DE DESIGN pensados para funcionar bem no espaço público, resistir ao tempo e ainda ficar esteticamente coerentes com a paisagem da cidade.",
      "Hoje, o Setor de Design de Utilidades da Cidade Suspensa depende de você: cada objeto urbano precisa ser reprojetado unindo BELEZA, FUNÇÃO e CONFORTO — exatamente como ensinava a Bauhaus há mais de cem anos.",
    ],
    pigmentos: [
      { nome: "Bauhaus (1919)", hex: "#78716c", fonte: "Arte + artesanato + indústria", emoji: "🏛️", fotoUrl: bauhausDessau },
      { nome: "Forma segue a função", hex: "#0891b2", fonte: "Lema do design industrial", emoji: "⚙️", fotoUrl: formaFuncao },
      { nome: "Ergonomia", hex: "#0f766e", fonte: "O objeto se adapta ao corpo", emoji: "🧍", fotoUrl: cadeiraErgonomicaDiagrama },
      { nome: "Mobiliário Urbano", hex: "#dc2626", fonte: "Design nas ruas da cidade", emoji: "🏙️", fotoUrl: totemUrbano },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do designer industrial!",
    perguntas: [
      {
        pergunta: "Em que ano e país foi fundada a Bauhaus, escola que mudou o design mundial?",
        fotoUrl: bauhausDessau,
        alternativas: [
          { texto: "1919, na Alemanha", correta: true },
          { texto: "1950, no Brasil", correta: false },
        ],
        feedbackAcerto: "Isso! A Bauhaus nasceu em 1919 na Alemanha, fundada por Walter Gropius.",
        feedbackErro: "A Bauhaus é alemã e nasceu logo depois da Primeira Guerra Mundial, em 1919.",
      },
      {
        pergunta: "O que o princípio 'a forma segue a função' realmente defende?",
        fotoUrl: wassilyChair,
        alternativas: [
          { texto: "Que o formato de um objeto deve nascer da sua utilidade prática", correta: true },
          { texto: "Que a forma pode ser qualquer coisa, desde que seja cara", correta: false },
        ],
        feedbackAcerto: "Correto! Cada linha e curva de um bom design tem um PORQUÊ funcional.",
        feedbackErro: "O preço não tem nada a ver com o princípio — o que importa é a FUNÇÃO do objeto.",
      },
      {
        pergunta: "Por que a ergonomia é importante no design de um banco de praça ou de uma cadeira?",
        fotoUrl: cadeiraErgonomicaDiagrama,
        alternativas: [
          { texto: "Porque adapta o objeto ao corpo humano, trazendo conforto e evitando dores", correta: true },
          { texto: "Porque deixa o objeto mais caro sem nenhum benefício real", correta: false },
        ],
        feedbackAcerto: "Perfeito! Ergonomia = conforto + saúde no uso diário dos objetos.",
        feedbackErro: "Ergonomia tem função prática clara: proteger o corpo e melhorar o conforto.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada objeto pelo CONCEITO de design que ele representa!",
    animais: [
      {
        nome: "Cadeira Wassily (tubos de aço)", emoji: "🪑", fotoUrl: wassilyChair,
        corAlvo: { nome: "Design Industrial", hex: "#0891b2" },
        opcoes: [
          { nome: "Design Industrial", hex: "#0891b2" },
          { nome: "Mobiliário Urbano", hex: "#dc2626" },
          { nome: "Ergonomia", hex: "#0f766e" },
        ],
        falaAcerto: "Isso! Produção em série com tubos de aço curvados = ícone do Design Industrial.",
      },
      {
        nome: "Ponto de ônibus com abrigo solar", emoji: "🚏", fotoUrl: abrigoSolar,
        corAlvo: { nome: "Mobiliário Urbano", hex: "#dc2626" },
        opcoes: [
          { nome: "Mobiliário Urbano", hex: "#dc2626" },
          { nome: "Bauhaus", hex: "#78716c" },
          { nome: "Design Industrial", hex: "#0891b2" },
        ],
        falaAcerto: "Correto! Objeto de uso público na rua = Mobiliário Urbano.",
      },
      {
        nome: "Cadeira com encosto curvado ao corpo", emoji: "🧍", fotoUrl: cadeiraErgonomicaDiagrama,
        corAlvo: { nome: "Ergonomia", hex: "#0f766e" },
        opcoes: [
          { nome: "Ergonomia", hex: "#0f766e" },
          { nome: "Mobiliário Urbano", hex: "#dc2626" },
          { nome: "Bauhaus", hex: "#78716c" },
        ],
        falaAcerto: "Perfeito! Forma que se adapta ao corpo humano = Ergonomia.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra projetar UM objeto de mobiliário urbano pro Setor de Design de Utilidades.",
    passos: [
      { id: "p1", texto: "Defino a FUNÇÃO do objeto: para que ele vai servir? (ex: abrigar da chuva)", emoji: "🎯", ordem: 1, fotoUrl: designIndustrialVistas },
      { id: "p2", texto: "Esboço o objeto em três vistas: frente, lado e topo — o desenho técnico do designer", emoji: "📐", ordem: 2, fotoUrl: designIndustrialVistas },
      { id: "p3", texto: "Penso na ERGONOMIA: como o corpo humano vai usar esse objeto com conforto", emoji: "🧍", ordem: 3, fotoUrl: cadeiraErgonomicaDiagrama },
      { id: "p4", texto: "Escolho materiais resistentes ao tempo (aço, concreto, plástico reciclado)", emoji: "🔩", ordem: 4, fotoUrl: tubularSteel },
      { id: "p5", texto: "Finalizo com cores e acabamento que combinam com a paisagem urbana", emoji: "🎨", ordem: 5, fotoUrl: totemUrbano },
    ],
    falaAcerto: "Você acabou de projetar seu primeiro objeto pro Setor de Design de Utilidades!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do designer industrial. Toca nas palavras coloridas.",
    titulo: "Diário do Designer Industrial",
    trechos: [
      { texto: "Sou designer industrial. Tudo começou na", palavraDestaque: "Bauhaus", corDestaque: "#78716c" },
      { texto: "em 1919, quando arte e indústria se uniram. Ali nasceu o lema", palavraDestaque: "a forma segue a função", corDestaque: "#0891b2" },
      { texto: "Toda cadeira, todo banco, precisa pensar em", palavraDestaque: "ergonomia", corDestaque: "#0f766e" },
      { texto: "para se adaptar ao corpo humano. Nas ruas, viram", palavraDestaque: "mobiliário urbano", corDestaque: "#dc2626" },
      { texto: "— pontos de ônibus, lixeiras, postes. Design é isso: beleza e utilidade juntas." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🧰 O Estúdio Ergonométrico! Toca em TODAS as ferramentas do estúdio antes do tempo acabar.",
    titulo: "🧰 O Estúdio Ergonométrico",
    instrucao: "Reúna todas as ferramentas de design ergonômico antes do tempo acabar!",
    tempoSeg: 35,
    itens: [
      { emoji: "📐", rotulo: "Gabarito Geométrico", cor: "#0891b2" },
      { emoji: "🧍", rotulo: "Boneco de proporções humanas", cor: "#0f766e" },
      { emoji: "🪑", rotulo: "Molde de encosto curvado", cor: "#78716c" },
      { emoji: "🔩", rotulo: "Tubo de aço dobrável", cor: "#7c2d12" },
      { emoji: "🎨", rotulo: "Paleta de acabamento urbano", cor: "#dc2626" },
      { emoji: "💡", rotulo: "Sensor de luz do poste inteligente", cor: "#f59e0b" },
    ],
    falaFinal: "Estúdio Ergonométrico organizado! Pronto pra projetar objetos perfeitos.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a página do Setor de Design de Utilidades. Toca em cada verbete!",
    titulo: "📓 Caderno do Designer Industrial",
    itens: [
      { emoji: "🏛️", rotulo: "Bauhaus", descricao: "Escola alemã de 1919 que uniu arte, artesanato e indústria — base do design moderno.", cor: "#78716c", fotoUrl: bauhausDessau },
      { emoji: "⚙️", rotulo: "Forma segue a função", descricao: "O formato de um objeto deve nascer da sua utilidade — sem enfeites inúteis.", cor: "#0891b2", fotoUrl: formaFuncao },
      { emoji: "🧍", rotulo: "Ergonomia", descricao: "Estudo de como os objetos se adaptam ao corpo humano com conforto e segurança.", cor: "#0f766e", fotoUrl: cadeiraErgonomicaDiagrama },
      { emoji: "🏙️", rotulo: "Mobiliário Urbano", descricao: "Bancos, pontos de ônibus, postes e lixeiras: objetos de design pensados pro espaço público.", cor: "#dc2626", fotoUrl: totemUrbano },
      { emoji: "🪑", rotulo: "Cadeira Wassily", descricao: "Marcel Breuer usou tubos de aço curvados pra criar um ícone leve e produzido em série.", cor: "#7c2d12", fotoUrl: wassilyChair },
      { emoji: "📻", rotulo: "Design de produto (Braun)", descricao: "Rádios e objetos do dia a dia também são projetados com forma, função e simplicidade.", cor: "#0f172a", fotoUrl: radioBraun },
    ],
    falaFinal: "Setor de Design de Utilidades RESTAURADO — a Cidade Suspensa agora tem mobiliário funcional!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, designer industrial!",
    quiz: {
      pergunta: "Um objeto tem exatamente a forma necessária para cumprir sua função — sem enfeites que não servem para nada. Que princípio de design explica essa escolha?",
      alternativas: [
        { texto: "'A forma segue a função' — princípio criado na Bauhaus, base do design industrial moderno", correta: true },
        { texto: "'Quanto mais enfeite, melhor' — a beleza não precisa ter relação com o uso do objeto", correta: false },
      ],
      feedback: "Excelente! 'A forma segue a função' foi o lema que a Bauhaus (1919) espalhou pelo mundo: cada curva, material e detalhe de um objeto deve existir porque tem uma UTILIDADE real, seja de conforto (ergonomia), resistência ou comunicação visual. Foi esse pensamento que criou desde a Cadeira Wassily até os bancos e postes das nossas cidades hoje.",
    },
    missaoFamilia:
      "🏠 Missão Auditores de Design Doméstico: com um adulto, escolham JUNTOS 3 objetos da casa (uma cadeira, um utensílio de cozinha, uma luminária). Para cada um, respondam: Qual é a FUNÇÃO dele? A forma combina com essa função? Ele é confortável (ergonômico)? Registrem no álbum com foto de cada objeto e as respostas da auditoria.",
    recompensaTitulo: "🏭 Setor de Design de Utilidades restaurado na Cidade Suspensa.",
    recompensaItem: "📐 Gabarito Geométrico de Acrílico de Designer",
  },

  recompensa: { xp: 120, moedas: 60, medalha: "Gabarito Geométrico de Acrílico de Designer" },
};
