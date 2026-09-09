import type { AulaV4 } from "../../types";

/**
 * Aula 03 · U5 — Razões trigonométricas: seno, cosseno e tangente.
 */
export const aula03_razoesTrigonometricas: AulaV4 = {
  slug: "u5-03-razoes-trigonometricas",
  titulo: "Seno, Cosseno e Tangente",
  iconeTrilha: "📊",
  bncc: ["EF09MA13", "EF09MA14"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Três razões que medem qualquer ângulo",
    historia:
      "{NOME}, imagine medir a altura de um prédio sem subir nele — só olhando o ângulo até o topo e a distância até a base. Isso é possível com três ferramentas: seno, cosseno e tangente. Elas relacionam os ângulos de um triângulo retângulo com o tamanho dos seus lados. Vamos aprender?",
  },

  momento02_exploracao: {
    instrucao: "Observe o triângulo retângulo com o ângulo agudo θ (lê-se 'teta') marcado.",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "triangulo",
        mostrarAngulos: true,
        medidasLados: ["hipotenusa", "cateto oposto a θ", "cateto adjacente a θ"],
        legenda: "Em relação ao ângulo θ",
      },
      {
        tipo: "texto",
        texto: "🔑 Em relação ao ângulo θ escolhido: o CATETO OPOSTO é o lado 'na frente' dele; o CATETO ADJACENTE é o lado 'colado' nele (que não é a hipotenusa).",
      },
      {
        tipo: "tabela",
        titulo: "As três razões trigonométricas",
        cabecalhos: ["Razão", "Fórmula"],
        linhas: [
          { rotulo: "1", valores: ["seno (sen θ)", "cateto oposto ÷ hipotenusa"] },
          { rotulo: "2", valores: ["cosseno (cos θ)", "cateto adjacente ÷ hipotenusa"] },
          { rotulo: "3", valores: ["tangente (tg θ)", "cateto oposto ÷ cateto adjacente"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "No triângulo 3-4-5, com o ângulo θ oposto ao cateto 3, quanto vale sen θ?",
    pista: "sen θ = cateto oposto ÷ hipotenusa. O cateto oposto a θ é 3, e a hipotenusa é 5.",
    revelacao: "sen θ = 3 ÷ 5 = 0,6. Essa razão é sempre a MESMA para esse ângulo θ, não importa o tamanho do triângulo — só importa a forma!",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "sen θ no triângulo 3-4-5",
      passos: [
        { expr: "Cateto oposto a θ = 3", explica: "Identifico o lado 'na frente' do ângulo.", status: "neutro" },
        { expr: "Hipotenusa = 5", explica: "O maior lado.", status: "ok" },
        { expr: "sen θ = 3 ÷ 5 = 0,6", explica: "Divido oposto por hipotenusa.", status: "ok", professor: "Se você pegar um triângulo 6-8-10 (o dobro do 3-4-5), o ângulo θ é o MESMO, e sen θ = 6 ÷ 10 = 0,6 também! A razão depende só do ângulo, não do tamanho do triângulo." },
      ],
      fatorada: "sen θ = 0,6",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Definindo seno, cosseno e tangente",
    etapas: [
      {
        texto:
          "SENO de um ângulo agudo é a razão entre o cateto OPOSTO a esse ângulo e a hipotenusa: sen θ = oposto ÷ hipotenusa. O valor do seno está sempre entre 0 e 1.",
        exemploReal: {
          titulo: "🔎 Calculando o seno",
          contexto: "Triângulo retângulo com cateto oposto a θ = 8 cm e hipotenusa = 17 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "sen θ = 8 ÷ 17",
            passos: [
              { expr: "oposto = 8", explica: "Cateto na frente do ângulo θ.", status: "neutro" },
              { expr: "hipotenusa = 17", explica: "Maior lado do triângulo.", status: "ok" },
              { expr: "sen θ = 8 ÷ 17 ≈ 0,47", explica: "Divido oposto por hipotenusa.", status: "ok", professor: "Repare que o outro cateto (15, pelo terno 8-15-17) NÃO entra na conta do seno — só entra oposto e hipotenusa." },
            ],
            fatorada: "sen θ ≈ 0,47",
          },
          destaque: "sen θ = cateto oposto ÷ hipotenusa.",
        },
      },
      {
        texto:
          "COSSENO de um ângulo agudo é a razão entre o cateto ADJACENTE a esse ângulo e a hipotenusa: cos θ = adjacente ÷ hipotenusa. Também está sempre entre 0 e 1.",
        exemploReal: {
          titulo: "🔎 Calculando o cosseno",
          contexto: "Mesmo triângulo: cateto adjacente a θ = 15 cm e hipotenusa = 17 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "cos θ = 15 ÷ 17",
            passos: [
              { expr: "adjacente = 15", explica: "Cateto colado no ângulo θ (não a hipotenusa).", status: "neutro" },
              { expr: "hipotenusa = 17", explica: "Maior lado do triângulo.", status: "ok" },
              { expr: "cos θ = 15 ÷ 17 ≈ 0,88", explica: "Divido adjacente por hipotenusa.", status: "ok", professor: "Cuidado para não trocar oposto com adjacente: o oposto está 'na frente' do ângulo, o adjacente está 'colado' nele. Trocar os dois é o erro mais comum em trigonometria." },
            ],
            fatorada: "cos θ ≈ 0,88",
          },
          destaque: "cos θ = cateto adjacente ÷ hipotenusa.",
        },
      },
      {
        texto:
          "TANGENTE de um ângulo agudo é a razão entre o cateto oposto e o cateto adjacente: tg θ = oposto ÷ adjacente. Diferente de seno e cosseno, a tangente NÃO usa a hipotenusa e pode ser maior que 1.",
        exemploReal: {
          titulo: "🔎 Calculando a tangente",
          contexto: "Mesmo triângulo: cateto oposto = 8 cm e cateto adjacente = 15 cm.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "tg θ = 8 ÷ 15",
            passos: [
              { expr: "oposto = 8", explica: "Cateto na frente do ângulo θ.", status: "neutro" },
              { expr: "adjacente = 15", explica: "Cateto colado no ângulo θ.", status: "ok" },
              { expr: "tg θ = 8 ÷ 15 ≈ 0,53", explica: "Divido oposto por adjacente.", status: "ok", professor: "Uma forma de lembrar: tg θ = sen θ ÷ cos θ. Nesse caso, (8/17) ÷ (15/17) = 8/15. As três razões estão conectadas!" },
            ],
            fatorada: "tg θ ≈ 0,53",
          },
          destaque: "tg θ = cateto oposto ÷ cateto adjacente (sem hipotenusa).",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: num triângulo retângulo, o cateto oposto a θ é 6 cm, o adjacente é 8 cm e a hipotenusa é 10 cm. Calcule sen θ, cos θ e tg θ.",
    resposta: "sen θ = 0,6; cos θ = 0,8; tg θ = 0,75",
    visualMat: {
      tipo: "figuraPlana",
      forma: "triangulo",
      mostrarAngulos: true,
      medidasLados: ["hipotenusa = 10 cm", "oposto = 6 cm", "adjacente = 8 cm"],
      legenda: "Brilha resolve",
    },
    passos: [
      "sen θ = oposto ÷ hipotenusa = 6 ÷ 10 = 0,6.",
      "cos θ = adjacente ÷ hipotenusa = 8 ÷ 10 = 0,8.",
      "tg θ = oposto ÷ adjacente = 6 ÷ 8 = 0,75.",
    ],
    contaPassoAPasso: {
      operacao: "div",
      operandos: [6, 10],
      resultado: 0.6,
      passos: [
        { fala: "sen θ = 6 ÷ 10 = 0,6.", digito: 6 },
        { fala: "cos θ = 8 ÷ 10 = 0,8.", digito: 8 },
        { fala: "tg θ = 6 ÷ 8 = 0,75.", digito: 75 },
      ],
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: triângulo retângulo com cateto oposto a θ = 9 cm e hipotenusa = 15 cm. Qual é sen θ?",
    dica: "sen θ = cateto oposto ÷ hipotenusa. Divida 9 por 15.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "sen θ = 9 ÷ 15",
      passos: [
        { expr: "oposto = 9", explica: "Cateto na frente de θ.", status: "neutro" },
        { expr: "hipotenusa = 15", explica: "Maior lado.", status: "ok" },
      ],
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quanto é sen θ?",
      opcoes: [{ nome: "0,6" }, { nome: "1,67" }, { nome: "6" }],
      respostaCerta: "0,6",
      feedbackAcerto: "🎯 9 ÷ 15 = 0,6. Seno sempre fica entre 0 e 1.",
      feedbackErro: "sen θ = oposto ÷ hipotenusa = 9 ÷ 15 = 0,6. Confira: o resultado do seno nunca passa de 1.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: triângulo retângulo com cateto oposto a θ = 12 cm e cateto adjacente = 5 cm. Qual é tg θ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "tg θ = 12 ÷ 5",
      passos: [
        { expr: "oposto = 12", explica: "Cateto na frente de θ.", status: "neutro" },
        { expr: "adjacente = 5", explica: "Cateto colado em θ.", status: "ok" },
      ],
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quanto é tg θ?",
      opcoes: [{ nome: "2,4" }, { nome: "0,42" }, { nome: "60" }],
      respostaCerta: "2,4",
      feedbackAcerto: "🎯 tg θ = 12 ÷ 5 = 2,4. A tangente pode ser maior que 1!",
      feedbackErro: "tg θ = oposto ÷ adjacente = 12 ÷ 5 = 2,4. Diferente do seno e cosseno, a tangente pode passar de 1.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma rampa forma um ângulo θ com o chão. A altura da rampa é 3 m e o comprimento da rampa (hipotenusa) é 5 m.",
    problema: "Qual é o valor de sen θ dessa rampa?",
    visualMat: {
      tipo: "figuraPlana",
      forma: "triangulo",
      mostrarAngulos: true,
      medidasLados: ["5 m (rampa/hipotenusa)", "3 m (altura/oposto)", "4 m (base/adjacente)"],
      legenda: "Rampa de acesso",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Qual é sen θ?",
      opcoes: [{ nome: "0,6" }, { nome: "0,8" }, { nome: "1,67" }],
      respostaCerta: "0,6",
      feedbackAcerto: "🎯 sen θ = 3 ÷ 5 = 0,6 (altura ÷ comprimento da rampa).",
      feedbackErro: "sen θ = cateto oposto (altura = 3) ÷ hipotenusa (rampa = 5) = 0,6.",
    },
  },

  momento09_revisao: {
    pontos: [
      "sen θ = cateto oposto ÷ hipotenusa (sempre entre 0 e 1).",
      "cos θ = cateto adjacente ÷ hipotenusa (sempre entre 0 e 1).",
      "tg θ = cateto oposto ÷ cateto adjacente (pode ser maior que 1).",
      "Oposto: 'na frente' do ângulo. Adjacente: 'colado' no ângulo (não é a hipotenusa).",
      "A razão trigonométrica depende só do ÂNGULO, não do tamanho do triângulo.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "sen θ é a razão entre:",
        opcoes: ["cateto oposto e hipotenusa", "cateto adjacente e hipotenusa", "os dois catetos"],
        correta: 0,
        feedbackAcerto: "🎉 Seno usa o cateto oposto dividido pela hipotenusa.",
        feedbackErro: "sen θ = cateto oposto ÷ hipotenusa. Adjacente ÷ hipotenusa é o cosseno, não o seno.",
      },
      {
        pergunta: "Triângulo com oposto = 5 cm e hipotenusa = 13 cm. sen θ vale:",
        opcoes: ["≈ 0,38", "2,6", "8"],
        correta: 0,
        feedbackAcerto: "🎉 5 ÷ 13 ≈ 0,38.",
        feedbackErro: "sen θ = oposto ÷ hipotenusa = 5 ÷ 13 ≈ 0,38. Não faça hipotenusa ÷ oposto, é o inverso.",
      },
      {
        pergunta: "Triângulo com adjacente = 12 cm e hipotenusa = 13 cm. cos θ vale:",
        opcoes: ["≈ 0,92", "≈ 1,08", "144"],
        correta: 0,
        feedbackAcerto: "🎉 cos θ = 12 ÷ 13 ≈ 0,92.",
        feedbackErro: "cos θ = cateto adjacente ÷ hipotenusa = 12 ÷ 13 ≈ 0,92.",
      },
      {
        pergunta: "Triângulo com oposto = 4 cm e adjacente = 3 cm. tg θ vale:",
        opcoes: ["≈ 1,33", "0,75", "12"],
        correta: 0,
        feedbackAcerto: "🎉 tg θ = 4 ÷ 3 ≈ 1,33.",
        feedbackErro: "tg θ = oposto ÷ adjacente = 4 ÷ 3 ≈ 1,33. Não confunda com adjacente ÷ oposto (que daria 0,75).",
      },
      {
        pergunta: "Por que sen θ nunca é maior que 1?",
        opcoes: ["Porque o cateto oposto nunca é maior que a hipotenusa", "Porque o ângulo é sempre pequeno", "Porque a hipotenusa é sempre 1"],
        correta: 0,
        feedbackAcerto: "🎉 A hipotenusa é sempre o maior lado, então oposto ÷ hipotenusa nunca passa de 1.",
        feedbackErro: "Como a hipotenusa é sempre o maior lado do triângulo, dividir o cateto oposto (menor) por ela nunca dá mais que 1.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Trigonometria com objetos de casa",
    materiais: ["Régua", "Esquadro ou cartolina para fazer um triângulo retângulo", "Papel e caneta"],
    passos: [
      "Recorte um triângulo retângulo de cartolina com catetos 9 cm e 12 cm (hipotenusa 15 cm).",
      "Escolha um dos ângulos agudos e calcule sen, cos e tg desse ângulo.",
      "Explique para a família a diferença entre cateto oposto e cateto adjacente.",
    ],
    registro: "📸 Foto do triângulo com as três razões calculadas ao lado.",
  },
  recompensa: { xp: 230, moedas: 115, medalha: "Triangulador" },
};
