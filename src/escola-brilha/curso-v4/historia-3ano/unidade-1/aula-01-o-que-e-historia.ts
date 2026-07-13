import type { AulaGeoV1 } from "../../types";
import mesaHistoriador from "@/assets/historia-3ano/mesa-historiador-caixas.jpg";
import fotoAntigaFamilia from "@/assets/historia-3ano/foto-antiga-familia.jpg";
import cartaAntiga from "@/assets/historia-3ano/carta-antiga.jpg";
import relogioBolso from "@/assets/historia-3ano/relogio-bolso.jpg";
import brinquedoLata from "@/assets/historia-3ano/brinquedo-lata.jpg";
import conceitoFonte from "@/assets/historia-3ano/conceito-fonte.jpg";
import conceitoPassado from "@/assets/historia-3ano/conceito-passado.jpg";
import quizPessoasTempo from "@/assets/historia-3ano/quiz-pessoas-tempo.jpg";
import quizRoupaEpoca from "@/assets/historia-3ano/quiz-roupa-epoca.jpg";

/**
 * História · 3º Ano · Unidade 1 · Aula 01
 * "O Que é História?" — introdução ao pensamento histórico (EF03HI01)
 *
 * SPEB 1.0 · Fase 3 — 11 cenas do esqueleto oficial, reaproveitando
 * o engine PlayerGeoV1 com script/vocabulário do Investigador da
 * História (Aurora + Guardião da Memória).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-o-que-e-historia",
  titulo: "O Que é História?",
  iconeTrilha: "🔎",
  bncc: ["EF03HI01"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA do Historiador sobre a mesa. Você vai descobrir que os objetos guardam pistas do passado.",
    mapaUrl: mesaHistoriador,
    aurora:
      "Brilha, cheguei na Biblioteca do Tempo com o Guardião da Memória! Ele deixou caixas e objetos misteriosos sobre a mesa. Pega a Lupa do Historiador e passa devagar pra descobrir o que tem aí.",
    falaFinal:
      "Viu? Uma fotografia antiga, uma carta com selo, um relógio de bolso, um brinquedo de lata. TODOS eles contam histórias de pessoas que viveram antes. Isso é História: o estudo das pessoas ao longo do tempo.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de abrir tudo, quero seu palpite, investigador! Pra você, o que o historiador estuda de verdade?",
    pergunta: "O que o historiador estuda?",
    opcoes: [
      {
        id: "so-reis",
        titulo: "Só reis e guerras",
        subtitulo: "coisas de castelo",
        emoji: "👑",
        cor: "from-amber-400 to-rose-500",
      },
      {
        id: "pessoas-tempo",
        titulo: "Pessoas ao longo do tempo",
        subtitulo: "todo mundo, todo dia",
        emoji: "👨‍👩‍👧‍👦⏳",
        cor: "from-emerald-400 to-amber-500",
      },
    ],
    respostaCerta: "pessoas-tempo",
    feedbackAcerto:
      "Isso! História é sobre PESSOAS — reis, sim, mas também sua avó, o padeiro, a criança de outra época.",
    feedbackErro:
      "Quase! Reis aparecem, mas o historiador estuda TODAS as pessoas ao longo do tempo — não só a realeza.",
    falaFinal:
      "Guarda esse palpite. Nas próximas cenas você vai VER que a sua história e a da sua família também são História de verdade.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Todo historiador tem um caderno de anotações. Abri os meus com 4 palavras que a gente vai usar hoje — leia com calma, elas voltam nas próximas cenas.",
    instrucao: "Leia cada caderno com atenção",
    cadernos: [
      {
        id: "historia",
        capa: "História",
        emoji: "📜",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "É o estudo das PESSOAS ao longo do TEMPO — o que elas faziam, comiam, brincavam, sentiam.",
        exemplo: "A história da sua família também é História.",
        fotoUrl: fotoAntigaFamilia,
      },
      {
        id: "fonte",
        capa: "Fonte Histórica",
        emoji: "🗝️",
        cor: "from-sky-500 to-indigo-700",
        conteudo:
          "É qualquer PISTA que o passado deixou pra gente: foto, carta, objeto, música, prédio antigo, entrevista com um mais velho.",
        exemplo: "Uma foto do casamento da vovó é uma fonte histórica.",
        fotoUrl: conceitoFonte,
      },
      {
        id: "passado",
        capa: "Passado",
        emoji: "⏳",
        cor: "from-stone-500 to-stone-800",
        conteudo:
          "É tudo o que já aconteceu — de ontem, de anos atrás, de séculos atrás. É onde a História acontece.",
        exemplo: "Ontem já é passado. A infância do vovô também.",
        fotoUrl: conceitoPassado,
      },
      {
        id: "evidencia",
        capa: "Evidência",
        emoji: "🔎",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "É a PROVA que o historiador acha DENTRO de uma fonte. É o detalhe que confirma como as pessoas viviam.",
        exemplo: "Na foto, a roupa da vovó é evidência da moda daquela época.",
        fotoUrl: quizRoupaEpoca,
      },
    ],
    falaFinal:
      "Agora você tem as 4 palavras do historiador. Vamos usar TODAS elas nas próximas cenas!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Voltei à mesa da Biblioteca do Tempo. Toca em cada balão pra eu contar o que aquele objeto revela sobre o passado.",
    instrucao: "Toque em cada balão pra ouvir o Guardião",
    mapaUrl: mesaHistoriador,
    pontos: [
      {
        id: "foto",
        x: 25,
        y: 40,
        emoji: "📸",
        cor: "from-sky-400 to-indigo-600",
        titulo: "Fotografia Antiga",
        texto:
          "Uma FONTE visual. Mostra como as pessoas se vestiam, como cortavam o cabelo, quem estava na família. Evidência: a roupa e o penteado nos contam a época.",
        fotoUrl: fotoAntigaFamilia,
      },
      {
        id: "carta",
        x: 60,
        y: 30,
        emoji: "✉️",
        cor: "from-amber-400 to-orange-600",
        titulo: "Carta com Selo",
        texto:
          "Uma FONTE escrita. Alguém sentou pra contar novidades pra outra pessoa. Evidência: a letra, o selo e a data mostram onde e quando foi enviada.",
        fotoUrl: cartaAntiga,
      },
      {
        id: "relogio",
        x: 45,
        y: 65,
        emoji: "⏰",
        cor: "from-stone-500 to-stone-800",
        titulo: "Relógio de Bolso",
        texto:
          "Uma FONTE material. É um objeto que a pessoa carregava. Evidência: relógio de bolso mostra que naquela época não existia celular pra ver a hora.",
        fotoUrl: relogioBolso,
      },
      {
        id: "brinquedo",
        x: 80,
        y: 70,
        emoji: "🚂",
        cor: "from-rose-400 to-red-600",
        titulo: "Brinquedo de Lata",
        texto:
          "Também FONTE material. Mostra do que as crianças brincavam antes. Evidência: era feito de metal — hoje a maior parte dos brinquedos é de plástico.",
        fotoUrl: brinquedoLata,
      },
    ],
    falaFinal:
      "Viu como um objeto simples fala? Cada um deixa uma evidência. Historiador junta várias evidências pra montar a história.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Liguei o radar do investigador! Vou fazer 3 perguntas — escolha o card certo pra o radar pousar. Bora testar o que você aprendeu?",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual dessas coisas é uma FONTE HISTÓRICA?",
        cards: [
          { id: "foto", emoji: "📸", titulo: "Foto antiga da família", cor: "from-sky-400 to-indigo-600" },
          { id: "sonho", emoji: "💭", titulo: "Um sonho que você teve", cor: "from-fuchsia-400 to-purple-600" },
          { id: "chuva", emoji: "🌧️", titulo: "A chuva de amanhã", cor: "from-cyan-400 to-blue-600" },
        ],
        correta: "foto",
        feedbackAcerto:
          "Isso! Foto antiga é fonte: guarda pistas reais do passado.",
        feedbackErro:
          "Quase! Sonho e chuva de amanhã não deixam prova. Fonte é o que o PASSADO deixou — como a foto antiga.",
      },
      {
        id: "q2",
        pergunta: "O historiador estuda principalmente…",
        cards: [
          { id: "dinos", emoji: "🦖", titulo: "Dinossauros", cor: "from-lime-400 to-emerald-600" },
          { id: "pessoas", emoji: "👨‍👩‍👧", titulo: "Pessoas no tempo", cor: "from-amber-400 to-orange-600" },
          { id: "planetas", emoji: "🪐", titulo: "Planetas", cor: "from-indigo-400 to-violet-700" },
        ],
        correta: "pessoas",
        feedbackAcerto:
          "Boa! O historiador estuda PESSOAS ao longo do tempo — o que faziam, sentiam, criavam.",
        feedbackErro:
          "Não é aí. Dinossauro é da paleontologia, planeta é da astronomia. História é de PESSOAS.",
      },
      {
        id: "q3",
        pergunta: "A EVIDÊNCIA dentro de uma foto antiga pode ser…",
        cards: [
          { id: "roupa", emoji: "👗", titulo: "A roupa da época", cor: "from-rose-400 to-pink-600" },
          { id: "wifi", emoji: "📶", titulo: "O sinal do Wi-Fi", cor: "from-cyan-400 to-blue-600" },
          { id: "app", emoji: "📱", titulo: "O app do celular", cor: "from-slate-400 to-slate-700" },
        ],
        correta: "roupa",
        feedbackAcerto:
          "Exato! A roupa é evidência: mostra a moda e o costume daquela época.",
        feedbackErro:
          "Ainda não. Wi-Fi e app não existiam antigamente — não podem ser evidência dentro de foto antiga.",
      },
    ],
    falaFinal:
      "Radar afinado! Você já sabe reconhecer fonte, pessoas no tempo e evidência.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Toda mesa de historiador tem CAMADAS. Vou te dar dois interruptores: um acende os objetos do PASSADO, outro acende as coisas do HOJE. Liga os dois e compara!",
    instrucao: "Toque nos interruptores pra acender cada camada",
    mapaUrl: mesaHistoriador,
    camadas: [
      {
        id: "passado",
        rotulo: "Objetos do Passado",
        emoji: "⏳",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 8, y: 25, w: 55, h: 55 },
        descricao:
          "Foto antiga, carta com selo, relógio de bolso, brinquedo de lata. Marcas de gente que viveu antes de você.",
      },
      {
        id: "hoje",
        rotulo: "Coisas do Hoje",
        emoji: "📱",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 55, y: 55, w: 40, h: 40 },
        descricao:
          "Celular, foto digital, mensagem de voz, brinquedo de plástico. Um dia, tudo isso também vai virar fonte histórica pros historiadores do futuro.",
      },
    ],
    falaFinal:
      "Sacou? Passado e presente estão na mesma mesa. O que a gente usa hoje vai ser a fonte histórica de amanhã.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Como o historiador trabalha de verdade? Ele segue uma ORDEM. Vamos montar essa ordem juntos — toca nas paradas na sequência certa.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como o historiador transforma um objeto em conhecimento?",
    paradas: [
      {
        id: "observar",
        emoji: "👀",
        rotulo: "Observar",
        descricao: "Primeiro, o historiador OLHA com muita atenção a fonte — foto, carta, objeto.",
      },
      {
        id: "comparar",
        emoji: "⚖️",
        rotulo: "Comparar",
        descricao: "Depois, COMPARA com outras fontes parecidas pra ver se combina.",
      },
      {
        id: "hipotese",
        emoji: "💡",
        rotulo: "Levantar hipótese",
        descricao: "Aí ele faz um PALPITE explicando o que aconteceu naquela época.",
      },
      {
        id: "confirmar",
        emoji: "✅",
        rotulo: "Confirmar",
        descricao: "Por fim, CONFIRMA com mais evidências antes de contar como aconteceu.",
      },
    ],
    ordemCerta: ["observar", "comparar", "hipotese", "confirmar"],
    feedbackAcerto: "Ordem certa! Assim o historiador conta o passado com segurança.",
    feedbackErro:
      "Essa não é a próxima parada. Pensa: o que ele faz ANTES e o que faz DEPOIS dessa etapa?",
    falaFinal:
      "Viu? Historiador não chuta. Ele OBSERVA, COMPARA, faz HIPÓTESE e CONFIRMA. É trabalho de investigador.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua vez, investigador! Eu vou ficar CALADA. Você lê o Diário do Historiador com seus próprios olhos e vai TOCANDO nas palavras importantes conforme for lendo.",
    tituloLivro: "📔 Diário do Historiador",
    subtitulo: "Página 1 — O que é História?",
    paragrafos: [
      {
        id: "p1",
        texto:
          "História é o estudo das pessoas ao longo do tempo. Não é só de reis e rainhas — é da sua avó, do vizinho, das crianças que brincavam antes de você. Cada vida deixa marcas no passado.",
        chaves: ["História", "pessoas", "tempo", "passado"],
        definicoes: {
          "História":
            "É o estudo das PESSOAS ao longo do TEMPO. Historiador procura descobrir o que elas faziam, comiam, brincavam e sentiam.",
          "pessoas":
            "Todo mundo! Reis e rainhas, sim, mas também sua avó, o padeiro, o vizinho, a criança que morava aqui antes.",
          "tempo":
            "Todos os momentos que já se passaram — ontem, semana passada, cem anos atrás. O tempo é onde a história acontece.",
          "passado":
            "Tudo o que já aconteceu. Cada vida deixa MARCAS: fotos, objetos, histórias contadas. Essas marcas são as pistas do historiador.",
        },
      },
      {
        id: "p2",
        texto:
          "Pra estudar o passado, o historiador procura fontes. Uma fonte pode ser uma foto, uma carta, um objeto antigo, uma música ou até uma entrevista com alguém mais velho. Toda fonte guarda pistas.",
        chaves: ["fontes", "foto", "carta", "entrevista"],
        definicoes: {
          "fontes":
            "Qualquer PISTA que o passado deixou pra gente estudar: foto, carta, objeto, música, prédio antigo, história contada por alguém mais velho.",
          "foto":
            "Fonte VISUAL. Congela um momento do passado — mostra rostos, roupas, lugares, festas.",
          "carta":
            "Fonte ESCRITA. Alguém sentou pra contar novidades pra outra pessoa. Data e selo mostram onde e quando foi enviada.",
          "entrevista":
            "Fonte ORAL. É quando a gente pergunta e grava alguém mais velho contando o que viveu. A memória vira som.",
        },
      },
      {
        id: "p3",
        texto:
          "Dentro de cada fonte, o historiador procura evidências. A roupa numa foto, a letra numa carta, o material de um brinquedo — cada detalhe conta um pedacinho de como as pessoas viviam.",
        chaves: ["evidências", "roupa", "material", "detalhe"],
        definicoes: {
          "evidências":
            "É a PROVA que o historiador acha DENTRO de uma fonte. Um detalhe pequeno que confirma como as pessoas viviam.",
          "roupa":
            "A moda muda com o tempo. Numa foto antiga, a roupa mostra a época: chapéu, vestido longo, sapato de couro.",
          "material":
            "É de que a coisa é feita — lata, madeira, plástico. Brinquedo de lata é evidência de que veio de antes da era do plástico.",
          "detalhe":
            "É a pistinha pequena que passa despercebida. Historiador é caçador de detalhes: relógio na parede, letra da placa, corte de cabelo.",
        },
      },
      {
        id: "p4",
        texto:
          "Depois de observar e comparar várias fontes, o historiador conta essa história pra gente. Assim a memória das pessoas não se perde — vira conhecimento pra quem vem depois.",
        chaves: ["observar", "comparar", "memória", "conhecimento"],
        definicoes: {
          "observar":
            "OLHAR com muita atenção. É o primeiro passo do historiador: ver cada detalhe da fonte antes de tirar qualquer conclusão.",
          "comparar":
            "COLOCAR LADO A LADO duas ou mais fontes pra ver o que combina e o que não combina. Assim ele confirma se a história bate.",
          "memória":
            "É a lembrança das pessoas — do que viveram, sentiram, criaram. Sem historiador, muita memória se perderia com o tempo.",
          "conhecimento":
            "É o que a gente APRENDE. Quando o historiador conta o passado, essa memória vira conhecimento pra quem vem depois.",
        },
      },
    ],

    falaFinal:
      "Leitura de historiador profissional! Você já consegue explicar sozinho: História é pessoas + tempo + fontes + evidências.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Chegou o minijogo do investigador contra o tempo! Cada rodada mostra DUAS pessoas de épocas diferentes. Leia a pista e toque na FONTE certa pra descobrir a história — antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque na fonte certa antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "foto", emoji: "📸", rotulo: "Foto" },
      { id: "carta", emoji: "✉️", rotulo: "Carta" },
      { id: "objeto", emoji: "🧸", rotulo: "Objeto" },
      { id: "entrevista", emoji: "🎙️", rotulo: "Entrevista" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Vovó Antônia", emoji: "👵", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Você hoje", emoji: "🧒", cor: "from-sky-500 to-indigo-700" },
        contexto:
          "Você quer saber como era o casamento da vovó em 1970. Ela guardou uma imagem em preto e branco na parede. Qual fonte é essa?",
        pecaCertaId: "foto",
        feedbackAcerto: "Combo! FOTO 📸 é uma fonte visual — congela o momento do passado.",
        feedbackErro: "Repara: imagem pendurada na parede em preto e branco é FOTO 📸.",
      },
      {
        id: "r2",
        municipioA: { nome: "Bisavô Chico", emoji: "👴", cor: "from-stone-500 to-stone-800" },
        municipioB: { nome: "Vovó Antônia", emoji: "👵", cor: "from-amber-500 to-orange-700" },
        contexto:
          "Nos anos 1950 não tinha WhatsApp. Bisavô escreveu à mão pra vovó, colocou selo e mandou pelo correio. Que fonte é essa?",
        pecaCertaId: "carta",
        feedbackAcerto: "Boa! CARTA ✉️ é fonte escrita — mostra o que a pessoa contou.",
        feedbackErro: "Escrita à mão, com selo e correio? É CARTA ✉️.",
      },
      {
        id: "r3",
        municipioA: { nome: "Papai criança", emoji: "🧒", cor: "from-emerald-500 to-teal-700" },
        municipioB: { nome: "Você hoje", emoji: "🧒", cor: "from-sky-500 to-indigo-700" },
        contexto:
          "Você achou no sótão um carrinho de lata que o seu pai brincava. Não é foto, não é texto — é a coisa em si. Que tipo de fonte é?",
        pecaCertaId: "objeto",
        feedbackAcerto: "Isso! OBJETO 🧸 é fonte material — o próprio brinquedo é a pista.",
        feedbackErro: "A pista fala do brinquedo em si, na mão — é OBJETO 🧸.",
      },
      {
        id: "r4",
        municipioA: { nome: "Vovô Zé", emoji: "🧓", cor: "from-rose-500 to-red-700" },
        municipioB: { nome: "Você hoje", emoji: "🧒", cor: "from-sky-500 to-indigo-700" },
        contexto:
          "Você senta com o vovô, liga o gravador e pede: 'Conta como era sua escola.' Ele fala e você registra. Que fonte você criou?",
        pecaCertaId: "entrevista",
        feedbackAcerto: "Combo perfeito! ENTREVISTA 🎙️ é fonte oral — a memória vira som.",
        feedbackErro: "Gravar alguém contando a própria vida é ENTREVISTA 🎙️.",
      },
    ],
    falaFinal:
      "Investigador de fontes oficial! Você já sabe: fonte pode ser FOTO, CARTA, OBJETO ou ENTREVISTA — cada uma abre uma porta pro passado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Olha a mesa do historiador de cima, tipo pizza! Cada fatia é um TIPO de fonte. Toca em cada fatia pra ver quanto do trabalho vem de cada uma.",
    instrucao: "🍕 Toque nas fatias pra rever cada tipo de fonte",
    fatias: [
      {
        id: "escritas-visuais",
        rotulo: "Escritas + Visuais",
        emoji: "✉️📸",
        percentual: 65,
        cor: "#b45309",
        descricao:
          "Cerca de 65% do trabalho vem daqui: cartas, diários, jornais, livros antigos, fotografias, pinturas e desenhos. Tudo que ficou registrado em papel ou imagem.",
        exemplos: ["Carta com selo", "Diário da vovó", "Foto antiga", "Pintura na parede"],
      },
      {
        id: "orais-materiais",
        rotulo: "Orais + Materiais",
        emoji: "🎙️🧸",
        percentual: 35,
        cor: "#16a34a",
        descricao:
          "Os outros 35%: entrevistas com os mais velhos, causos, músicas passadas de boca em boca, além de objetos, brinquedos, ferramentas e prédios antigos que sobreviveram.",
        exemplos: ["Entrevista com vovô", "Causo de família", "Brinquedo de lata", "Casa antiga"],
      },
    ],
    falaFinal:
      "Sacou? Não tem UMA fonte só. O historiador junta várias — escritas, visuais, orais e materiais — pra contar o passado com segurança.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Chegou a hora da verdade, investigador! Responda 3 perguntas pra ganhar sua insígnia oficial.",
    instrucao: "Toque na resposta certa. Você tem 1 chance por pergunta.",
    perguntas: [
      {
        id: "p1",
        pergunta: "O que é HISTÓRIA?",
        opcoes: [
          { id: "a", texto: "Só as guerras de reis e rainhas." },
          { id: "b", texto: "O estudo das pessoas ao longo do tempo.", correta: true },
          { id: "c", texto: "A previsão do que vai acontecer amanhã." },
        ],
        feedbackAcerto: "Isso! História é sobre PESSOAS ao longo do tempo — todas, não só reis.",
        feedbackErro: "Quase! História estuda TODAS as pessoas no tempo, não só reis e nem o futuro.",
      },
      {
        id: "p2",
        pergunta: "Qual dessas coisas é uma FONTE HISTÓRICA?",
        opcoes: [
          { id: "a", texto: "Uma carta antiga guardada na gaveta.", correta: true },
          { id: "b", texto: "Um sonho que você teve ontem." },
          { id: "c", texto: "A previsão do tempo pra semana que vem." },
        ],
        feedbackAcerto: "Perfeito! Carta antiga é fonte: deixa pistas reais do passado.",
        feedbackErro: "Ops! Sonho e previsão não deixam prova. Fonte é o que o PASSADO deixou.",
      },
      {
        id: "p3",
        pergunta: "Qual é o passo que o historiador faz PRIMEIRO?",
        opcoes: [
          { id: "a", texto: "Confirmar com outras fontes." },
          { id: "b", texto: "Observar a fonte com atenção.", correta: true },
          { id: "c", texto: "Inventar uma história sem olhar nada." },
        ],
        feedbackAcerto: "Exato! Primeiro OBSERVAR. Depois comparar, levantar hipótese e confirmar.",
        feedbackErro:
          "Ainda não. Antes de comparar ou confirmar, o historiador OBSERVA a fonte com atenção.",
      },
    ],
    selo: {
      nome: "Aprendiz de Historiador",
      subtitulo: "Insígnia oficial do Livro das Memórias — Aula 01",
      emoji: "🔎",
      cor: "from-amber-300 to-orange-500",
    },
    falaFinal:
      "Sua primeira página do Livro das Memórias está pronta! Você já sabe o que é História, o que é fonte, o que é evidência e como o historiador trabalha.",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Aprendiz de Historiador" },
};
