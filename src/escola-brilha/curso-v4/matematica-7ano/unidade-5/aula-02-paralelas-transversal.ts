import type { AulaV4 } from "../../types";

/** Aula 02 · U5 — Retas paralelas cortadas por uma transversal. */
export const aula02_paralelasTransversal: AulaV4 = {
  slug: "u5-02-paralelas-transversal",
  titulo: "O Cruzamento das Paralelas",
  iconeTrilha: "🛤️",
  bncc: ["EF07MA23", "EF07MA24"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Trilhos e a rua que corta",
    historia:
      "{NOME}, dois trilhos de trem nunca se encontram: são paralelos. Quando uma estrada corta os dois, aparecem oito ângulos — e o incrível é que só existem DOIS valores diferentes entre eles. Hoje você descobre por que, e passa a resolver esses exercícios em segundos.",
  },

  momento02_exploracao: {
    instrucao: "Duas retas paralelas cortadas por uma transversal formam 8 ângulos com nomes próprios.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Os pares e o que acontece com eles",
        cabecalhos: ["Par", "Posição", "Relação"],
        linhas: [
          { rotulo: "1", valores: ["Correspondentes", "mesmo lado, andares diferentes", "iguais"] },
          { rotulo: "2", valores: ["Alternos internos", "lados opostos, entre as paralelas", "iguais"] },
          { rotulo: "3", valores: ["Alternos externos", "lados opostos, fora das paralelas", "iguais"] },
          { rotulo: "4", valores: ["Colaterais internos", "mesmo lado, entre as paralelas", "somam 180°"] },
          { rotulo: "5", valores: ["Opostos pelo vértice", "mesmo cruzamento, em frente", "iguais"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Atalho seguro: só existem dois valores, um agudo e um obtuso, e eles somam 180°. Se o ângulo tem a mesma 'cara' (mesma abertura), é igual; se tem cara diferente, é suplementar." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Se um dos oito ângulos mede 65°, quanto medem todos os outros?",
    pista: "Só há dois valores possíveis, e eles fecham 180°.",
    revelacao: "Quatro ângulos medem 65° e os outros quatro medem 115°, porque 65 + 115 = 180.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Os 8 ângulos a partir de 65°",
      passos: [
        { expr: "ângulo dado = 65° (agudo)", explica: "Ponto de partida.", status: "neutro" },
        { expr: "obtuso = 180° − 65° = 115°", explica: "O par colateral.", status: "ok" },
        { expr: "4 ângulos de 65° e 4 de 115°", explica: "Distribuição.", status: "ok" },
        { expr: "4·65 + 4·115 = 260 + 460 = 720°", explica: "Confere: 2 cruzamentos × 360°.", status: "ok", professor: "Cada cruzamento gera uma volta completa de 360°. Como há dois cruzamentos, a soma dos oito ângulos é sempre 720°. É um bom teste de conferência." },
      ],
      fatorada: "65° e 115°",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Correspondentes, alternos e colaterais",
    etapas: [
      {
        texto: "CORRESPONDENTES são iguais: ocupam a mesma posição em cada cruzamento.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "x é correspondente a um ângulo de 78°",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x correspondente a 78°",
            passos: [
              { expr: "correspondentes ⇒ iguais", explica: "Propriedade.", status: "neutro" },
              { expr: "x = 78°", explica: "Resposta direta.", status: "ok" },
            ],
            fatorada: "x = 78°",
          },
          destaque: "Correspondentes: copiar a medida.",
        },
      },
      {
        texto: "ALTERNOS INTERNOS também são iguais: ficam entre as paralelas, em lados opostos da transversal.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Encontrar x, alterno interno de 3x − 40°",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x = 3x − 40°",
            passos: [
              { expr: "alternos internos ⇒ iguais", explica: "Monto a equação.", status: "neutro" },
              { expr: "x = 3x − 40", explica: "Equação.", status: "ok" },
              { expr: "x − 3x = −40", explica: "Junto os x.", status: "ok" },
              { expr: "−2x = −40", explica: "Reduzo.", status: "ok" },
              { expr: "x = 20°", explica: "Divido por −2.", status: "ok", professor: "Conferindo: 3 · 20 − 40 = 20. Os dois ângulos medem 20°, como a propriedade exige." },
            ],
            fatorada: "x = 20°",
          },
          destaque: "Iguais ⇒ igualo as expressões.",
        },
      },
      {
        texto: "COLATERAIS INTERNOS somam 180°: ficam entre as paralelas, do MESMO lado da transversal.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Colaterais internos: 2x e x + 30°",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2x + (x + 30) = 180",
            passos: [
              { expr: "colaterais ⇒ somam 180°", explica: "Monto a equação.", status: "neutro" },
              { expr: "2x + x + 30 = 180", explica: "Elimino o parêntese.", status: "ok" },
              { expr: "3x = 150", explica: "Reduzo e passo o 30.", status: "ok" },
              { expr: "x = 50", explica: "Divido por 3.", status: "ok" },
              { expr: "ângulos: 100° e 80°", explica: "Substituo.", status: "ok" },
              { expr: "Erro comum: igualar 2x = x + 30", explica: "Colaterais NÃO são iguais.", status: "x", professor: "O erro mais frequente é aplicar 'iguais' a todo par. Antes de montar, identifique se o par está do mesmo lado (soma 180°) ou em lados opostos (iguais)." },
            ],
            fatorada: "100° e 80°",
          },
          destaque: "Mesmo lado ⇒ soma 180°.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: r ∥ s cortadas por uma transversal. Um ângulo mede 4x + 10 e seu correspondente mede 90 − x. Encontre x e os ângulos.",
    resposta: "x = 16, ângulos de 74°",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4x + 10 = 90 − x",
      passos: [
        { expr: "correspondentes ⇒ iguais", explica: "Propriedade.", status: "neutro" },
        { expr: "4x + 10 = 90 − x", explica: "Equação.", status: "ok" },
        { expr: "4x + x = 90 − 10", explica: "Letras de um lado, números do outro.", status: "ok" },
        { expr: "5x = 80", explica: "Reduzo.", status: "ok" },
        { expr: "x = 16", explica: "Divido por 5.", status: "ok" },
        { expr: "4·16 + 10 = 74° e 90 − 16 = 74° ✓", explica: "Verificação.", status: "ok", professor: "As duas expressões precisam dar o MESMO número. Quando isso acontece, o valor de x está certo com certeza." },
      ],
      fatorada: "x = 16 → ângulos de 74°",
      legenda: "Brilha resolve",
    },
    passos: ["Identifico o par (correspondentes).", "Igualo as expressões.", "Resolvo a equação.", "Substituo e confiro nas duas expressões."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: r ∥ s. Um ângulo mede 118°. Quanto mede seu colateral interno?",
    dica: "Colaterais internos somam 180°.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "118° + x = 180°",
      passos: [
        { expr: "x = 180° − 118°", explica: "Operação inversa.", status: "neutro" },
        { expr: "x = 62°", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "62°",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "62°" }, { nome: "118°" }, { nome: "72°" }],
      respostaCerta: "62°",
      feedbackAcerto: "🎯 118 + 62 = 180.",
      feedbackErro: "118° seria a resposta para pares IGUAIS (correspondentes ou alternos). Colateral interno é do mesmo lado, então soma 180°: 180 − 118 = 62°.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: dois alternos externos medem 2x e x + 45. Quanto vale x?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2x = x + 45",
      passos: [
        { expr: "alternos externos ⇒ iguais", explica: "Propriedade.", status: "neutro" },
        { expr: "2x − x = 45", explica: "Junto os x.", status: "ok" },
        { expr: "x = 45", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "x = 45",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "45" }, { nome: "60" }, { nome: "135" }],
      respostaCerta: "45",
      feedbackAcerto: "🎯 2 · 45 = 90 e 45 + 45 = 90. Iguais.",
      feedbackErro: "Alternos externos são IGUAIS, então a equação é 2x = x + 45, que dá x = 45. O valor 60 viria de somar 180°, o que não vale para esse par.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Numa cidade, a Rua das Palmeiras e a Rua do Sol são paralelas. A Avenida Central corta as duas em diagonal. Na esquina da Rua das Palmeiras, o ângulo da calçada mede 55°.",
    problema: "Qual é o ângulo correspondente na esquina da Rua do Sol?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Esquinas correspondentes",
      passos: [
        { expr: "ruas paralelas + avenida transversal", explica: "Situação geométrica.", status: "neutro" },
        { expr: "esquinas na mesma posição ⇒ correspondentes", explica: "Identifico o par.", status: "ok" },
        { expr: "ângulo = 55°", explica: "Correspondentes são iguais.", status: "ok", professor: "É por isso que quarteirões paralelos cortados pela mesma avenida têm esquinas com o mesmo formato — a geometria garante a repetição do ângulo." },
      ],
      fatorada: "55°",
      legenda: "Aplicação — malha urbana",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o ângulo:",
      opcoes: [{ nome: "55°" }, { nome: "125°" }, { nome: "35°" }],
      respostaCerta: "55°",
      feedbackAcerto: "🎯 Correspondentes são congruentes.",
      feedbackErro: "125° é o ângulo suplementar, da outra esquina do mesmo cruzamento. O correspondente mantém a medida: 55°.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Paralelas + transversal geram 8 ângulos e só 2 medidas diferentes.",
      "Correspondentes, alternos internos e alternos externos: IGUAIS.",
      "Colaterais internos e externos: somam 180°.",
      "As duas medidas sempre somam 180°.",
      "Soma dos oito ângulos = 720°.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Alternos internos são:", opcoes: ["iguais", "somam 180°", "somam 90°"], correta: 0, feedbackAcerto: "🎉 Lados opostos da transversal ⇒ iguais.", feedbackErro: "Quem soma 180° são os colaterais (mesmo lado). Alternos ficam em lados opostos e por isso são congruentes." },
      { pergunta: "Um ângulo mede 105°. Seu colateral interno mede:", opcoes: ["75°", "105°", "85°"], correta: 0, feedbackAcerto: "🎉 180 − 105 = 75.", feedbackErro: "Colaterais internos são suplementares: 180 − 105 = 75°." },
      { pergunta: "Se um dos 8 ângulos mede 90°, todos os outros medem:", opcoes: ["90°", "45°", "180°"], correta: 0, feedbackAcerto: "🎉 A transversal é perpendicular às paralelas.", feedbackErro: "Como as duas medidas somam 180° e uma vale 90°, a outra também vale 90°. Todos os oito ficam retos." },
      { pergunta: "Correspondentes medem 3x e x + 20. Então x vale:", opcoes: ["10", "40", "50"], correta: 0, feedbackAcerto: "🎉 3x = x + 20 ⇒ 2x = 20 ⇒ x = 10.", feedbackErro: "Correspondentes são iguais: 3x = x + 20. Passando x para a esquerda, 2x = 20 e x = 10." },
      { pergunta: "A soma dos 8 ângulos formados é:", opcoes: ["720°", "360°", "540°"], correta: 0, feedbackAcerto: "🎉 Dois cruzamentos × 360°.", feedbackErro: "Cada cruzamento fecha uma volta de 360°. Como são dois cruzamentos, 2 × 360 = 720°." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Paralelas na rua de casa",
    materiais: ["Celular", "Papel", "Régua"],
    passos: [
      "Fotografe um lugar com duas linhas paralelas cortadas por outra (faixa de pedestre, grade, piso).",
      "Desenhe o esquema no papel e marque um ângulo.",
      "Calcule os outros e escreva as duas medidas encontradas.",
    ],
    registro: "📸 Foto do local com o desenho dos ângulos calculados.",
  },
  recompensa: { xp: 235, moedas: 120, medalha: "Leitor de Paralelas" },
};
