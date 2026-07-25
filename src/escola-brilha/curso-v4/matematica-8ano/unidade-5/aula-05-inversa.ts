import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Grandezas inversamente proporcionais.
 * Passo a passo interativo mostrando o produto constante e o "multiplica em linha".
 * Professor cuida do erro clássico (cruzado em inversa).
 */
export const aula05_inversa: AulaV4 = {
  slug: "u5-05-inversa",
  titulo: "Grandezas inversamente proporcionais",
  iconeTrilha: "↕️",
  bncc: ["EF08MA13"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Quando um sobe, o outro desce",
    historia:
      "{NOME}, se 2 pessoas fazem uma tarefa em 6 horas, com 4 pessoas o serviço fica pronto em MENOS tempo — não mais. Grandezas que caminham em direções opostas são inversamente proporcionais e pedem uma regra diferente.",
  },

  momento02_exploracao: {
    instrucao: "Observe o PRODUTO em cada linha (pessoas × horas).",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "pessoas × horas",
        passos: [
          { expr: "2 pessoas · 6 h = 12", explica: "Linha 1.", status: "ok", professor: "12 pode ser interpretado como 12 horas-pessoa: o esforço total da tarefa." },
          { expr: "3 pessoas · 4 h = 12", explica: "Mesmo produto.", status: "ok", professor: "Mais pessoas, menos tempo — mas o total de horas-pessoa é o mesmo." },
          { expr: "4 pessoas · 3 h = 12", explica: "Ainda 12.", status: "ok", professor: "O produto se mantém constante." },
          { expr: "→ inversas: produto constante", explica: "Definição.", status: "ok", professor: "Se ao invés de dividir dá o mesmo produto, é inversa." },
        ],
        fatorada: "a · b = c · d",
        legenda: "Inversas: produto constante (não a razão)",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como resolver quando falta um valor?",
    pista: "Se o PRODUTO é constante, iguale os dois produtos: a·b = c·x.",
    revelacao: "Regra de três inversa: multiplica em LINHA (não em cruz).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Direta vs inversa",
      passos: [
        { expr: "Direta: a/b = c/x → cruzado", explica: "Razão constante.", status: "ok", professor: "Quando as duas sobem juntas." },
        { expr: "Inversa: a·b = c·x → em linha", explica: "Produto constante.", status: "ok", professor: "Quando uma sobe e a outra desce." },
        { expr: "Truque: 'inverta' a 2ª coluna", explica: "Depois multiplica cruzado.", status: "ok", professor: "É o mesmo resultado. Escolha o que preferir." },
      ],
    },
  },

  momento04_explicacao: {
    titulo: "Resolvendo com regra de três inversa",
    etapas: [
      {
        texto: "Caso 1 — 3 pintores levam 10 dias. Quantos dias levam 5 pintores?",
        exemploReal: {
          titulo: "🔎 Multiplica em linha",
          contexto: "Grandeza inversa clássica (pessoas × tempo).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3·10 = 5·x",
            passos: [
              { expr: "3 pintores → 10 dias", explica: "Linha 1.", status: "ok", professor: "Coloque as duas grandezas em colunas." },
              { expr: "5 pintores → x dias", explica: "Linha 2.", status: "ok", professor: "Teste do dobro: 5 é mais que 3 → dias precisam ser MENOS. Inversa." },
              { expr: "3 · 10 = 5 · x", explica: "Multiplica em linha.", status: "ok", professor: "Produto constante: o total de trabalho não muda." },
              { expr: "30 = 5x", explica: "Simplifica.", status: "ok", professor: "3·10 = 30." },
              { expr: "x = 30 ÷ 5 = 6", explica: "Isola x.", status: "ok", professor: "5 pintores → 6 dias. Confere: mais pintores, menos dias. ✅" },
            ],
            fatorada: "x = 6 dias",
          },
          destaque: "Sinais opostos = inversa.",
        },
      },
      {
        texto: "Caso 2 — Não caia na armadilha do cruzado.",
        exemploReal: {
          titulo: "🔎 Se aplicasse cruzado…",
          contexto: "Aviso — mesmo problema com regra ERRADA.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3/10 = 5/x → cruzado (ERRADO)",
            passos: [
              { expr: "3 · x = 10 · 5 = 50", explica: "Regra de três direta (aplicada por engano).", status: "erro", professor: "Cuidado! Isso só valeria se fosse direta." },
              { expr: "x = 50/3 ≈ 16,7 dias", explica: "Resultado sem sentido.", status: "erro", professor: "Mais pintores levariam MAIS dias? Impossível. Sempre teste o sentido." },
              { expr: "Regra certa: em linha", explica: "3·10 = 5·x → x = 6.", status: "ok", professor: "Guarde o teste do dobro para escolher a regra certa." },
            ],
          },
          destaque: "Antes de resolver, teste o sentido.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "4 máquinas fazem uma peça em 6 h. Em quantas horas 8 máquinas fazem?",
    resposta: "3 h",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4·6 = 8·x",
      passos: [
        { expr: "4 máq → 6 h; 8 máq → x h", explica: "Tabela.", status: "ok", professor: "Inversa: mais máquinas, menos tempo." },
        { expr: "4 · 6 = 8 · x", explica: "Em linha.", status: "ok", professor: "Produto constante." },
        { expr: "24 = 8x", explica: "Simplifica.", status: "ok", professor: "4·6 = 24." },
        { expr: "x = 3", explica: "Divido por 8.", status: "ok", professor: "8 máquinas fazem em 3 h." },
      ],
    },
    passos: ["4·6 = 8·x. 24 = 8x. x = 3."],
  },

  momento06_praticaGuiada: {
    enunciado: "2 operários levam 12 h. 3 operários levam:",
    dica: "Produto = produto. 2·12 = 3·x.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "h =",
      opcoes: [{ nome: "8 h" }, { nome: "6 h" }, { nome: "18 h" }],
      respostaCerta: "8 h",
      feedbackAcerto: "🎯 24/3.",
      feedbackErro: "2·12 = 24. 3·x = 24. x = 8.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "5 pedreiros levam 20 dias. 10 pedreiros:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "dias =",
      opcoes: [{ nome: "10" }, { nome: "40" }, { nome: "25" }],
      respostaCerta: "10",
      feedbackAcerto: "🎯 5·20 = 10·x.",
      feedbackErro: "Dobrei os pedreiros → dias caem pela metade. 100/10 = 10.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um carro a 60 km/h faz um trajeto em 4 h. Se aumentar a velocidade para 80 km/h:",
    problema: "Em quanto tempo fará o mesmo trajeto?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "60·4 = 80·x",
      passos: [
        { expr: "60 km/h → 4 h; 80 km/h → x h", explica: "Tabela.", status: "ok", professor: "Distância é a mesma (velocidade · tempo = distância)." },
        { expr: "Inversa: mais velocidade, menos tempo", explica: "Teste do dobro.", status: "ok", professor: "Se acelero, chego antes. Produto constante." },
        { expr: "60 · 4 = 80 · x", explica: "Em linha.", status: "ok", professor: "Ambos os lados representam a distância total." },
        { expr: "240 = 80x", explica: "Simplifica.", status: "ok", professor: "A distância é 240 km." },
        { expr: "x = 240 / 80 = 3 h", explica: "Isola x.", status: "ok", professor: "3 horas. Confere: 80·3 = 240. ✅" },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "h =",
      opcoes: [{ nome: "3 h" }, { nome: "3,5 h" }, { nome: "2 h" }],
      respostaCerta: "3 h",
      feedbackAcerto: "🎯 60·4 = 80·x.",
      feedbackErro: "Distância = 240 km. 240/80 = 3.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Inversa = produto constante (a·b = c·d).",
      "Uma sobe, a outra desce.",
      "Regra de três inversa: multiplica em LINHA, não em cruz.",
      "Antes de resolver, teste o sentido — 'se dobra, cai pela metade?'.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2·10 = 4·x. x =", opcoes: ["5", "8", "20"], correta: 0, feedbackAcerto: "🎉 20/4.", feedbackErro: "Isole x: ÷4." },
      { pergunta: "3 op fazem em 8 h. 6 op em:", opcoes: ["4 h", "16 h", "6 h"], correta: 0, feedbackAcerto: "🎉 Metade.", feedbackErro: "Inversa: dobra pessoas → cai pela metade." },
      { pergunta: "100 km/h leva 2 h. A 50 km/h:", opcoes: ["4 h", "1 h", "3 h"], correta: 0, feedbackAcerto: "🎉 Metade da velocidade, dobro do tempo.", feedbackErro: "Inversa: 100·2 = 50·x." },
      { pergunta: "Inversas têm produto:", opcoes: ["Constante", "Zero", "Crescente"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "É a definição." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Tempo e velocidade",
    materiais: ["Papel"],
    passos: [
      "Anote 3 situações da vida em que uma grandeza sobe e a outra desce.",
      "Exemplos: velocidade × tempo, pessoas × dias, torneiras × horas.",
      "Escolha uma e monte uma regra de três inversa completa.",
    ],
    registro: "📸 Foto da tabela e das contas.",
  },

  recompensa: { xp: 180, moedas: 90 },
};
