import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Problemas com sistemas.
 * Formato: tradução Português→sistema + passo a passo escolhendo o método
 * (substituição ou adição), com foco em situações reais.
 */
export const aula05_probSistemas: AulaV4 = {
  slug: "u4-05-prob-sistemas",
  titulo: "Problemas com sistemas",
  iconeTrilha: "🧠",
  bncc: ["EF08MA08"],
  duracaoMin: 28,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Do enunciado ao sistema — e ao valor real",
    historia:
      "{NOME}, problemas reais raramente já vêm escritos como sistema. Você TRADUZ cada frase em uma equação, monta o sistema, escolhe o método (substituição ou adição) e responde o que foi pedido — em frase, com unidade.",
  },

  momento02_exploracao: {
    instrucao:
      "Veja a tradução de uma cena real em duas equações.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "Padaria: 2 pães + 1 leite = R$ 8    |    3 pães + 2 leites = R$ 13",
        passos: [
          { expr: "define: p = pão, l = leite", explica: "Uma letra para cada preço.", status: "neutro",
            professor: "Cada grandeza desconhecida vira uma letra. Escolha letras que lembram (p de pão, l de leite) — ajuda a organizar." },
          { expr: "I) 2p + l = 8", explica: "'2 pães + 1 leite = R$ 8'.", status: "ok",
            professor: "Traduzo cada trecho. Quantidade multiplica o preço da unidade." },
          { expr: "II) 3p + 2l = 13", explica: "'3 pães + 2 leites = R$ 13'.", status: "ok" },
          { expr: "sistema pronto", explica: "Agora escolho o método.", status: "neutro",
            professor: "Escolha do método: aqui NENHUMA variável está isolada e OS COEFS DE l são simples (1 e 2). Método da ADIÇÃO fica limpo: multiplico I por (−2) para inverter o sinal do l." },
        ],
        fatorada: "I) 2p + l = 8     II) 3p + 2l = 13",
        legenda: "Prova visual: enunciado vira sistema",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual método usar?",
    pista:
      "Se uma variável já está ISOLADA em alguma equação → substituição. Se os coeficientes de uma letra são simples de igualar → adição.",
    revelacao:
      "Não existe 'certo' e 'errado' na escolha — só mais fácil e mais trabalhoso. Olhe a estrutura ANTES de calcular.",
    visualMat: {
      tipo: "tabela",
      titulo: "Qual método escolher?",
      cabecalhos: ["Situação", "Método", "Por quê"],
      linhas: [
        { rotulo: "1", valores: ["Alguma letra já isolada (y = ...)", "Substituição", "Zero trabalho de preparar"] },
        { rotulo: "2", valores: ["Coefs de uma letra opostos ou fáceis", "Adição", "Elimina direto"] },
        { rotulo: "3", valores: ["Nada isolado, coefs esquisitos", "Adição preparada", "Multiplica p/ gerar opostos"] },
      ],
    },
  },

  momento04_explicacao: {
    titulo: "Resolvendo o modelo da padaria",
    etapas: [
      {
        texto: "Adição preparada. I) 2p + l = 8;  II) 3p + 2l = 13.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "I) 2p + l = 8     II) 3p + 2l = 13",
            passos: [
              { expr: "quero eliminar l", explica: "Coefs: 1 e 2.", status: "neutro",
                professor: "Se eu multiplicar I por (−2), o coef de l vira −2, oposto ao +2 da II. Aí some." },
              { expr: "I × (−2): −4p − 2l = −16", explica: "Multiplico CADA termo.", status: "ok",
                professor: "Cuidado com o sinal em cada termo e com o lado direito." },
              { expr: "soma com II: −p = −3", explica: "l some.", status: "ok",
                professor: "Coluna p: −4p + 3p = −p. Coluna l: −2l + 2l = 0 ✅. Constante: −16 + 13 = −3." },
              { expr: "p = 3", explica: "÷(−1).", status: "ok" },
              { expr: "volta em I: 2·3 + l = 8  →  l = 2", explica: "", status: "ok",
                professor: "Confere na II: 3·3 + 2·2 = 9 + 4 = 13 ✅. Pão R$ 3, leite R$ 2." },
            ],
            fatorada: "Pão: R$ 3  |  Leite: R$ 2",
          },
        },
      },
      {
        texto: "Caso 2: substituição. I) a + b = 100;  II) a = b + 20.",
        exemploReal: {
          titulo: "🔎 Uma variável já isolada",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "I) a + b = 100     II) a = b + 20",
            passos: [
              { expr: "II já isolada", explica: "a = b + 20.", status: "neutro",
                professor: "Quando uma letra JÁ está sozinha em um lado, use substituição — é o caminho mais curto." },
              { expr: "II na I: (b + 20) + b = 100", explica: "Troca a por (b + 20).", status: "ok",
                professor: "PARÊNTESES sempre." },
              { expr: "2b + 20 = 100", explica: "Junta.", status: "ok" },
              { expr: "2b = 80  →  b = 40", explica: "", status: "ok" },
              { expr: "a = 40 + 20 = 60", explica: "Volta na II.", status: "ok",
                professor: "Confere na I: 40 + 60 = 100 ✅." },
            ],
            fatorada: "a = 60  |  b = 40",
          },
        },
      },
      {
        texto: "Caso 3: 'clássico galinhas e coelhos'. 30 cabeças e 80 pés.",
        exemploReal: {
          titulo: "🔎 Cabeças e pés",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "g + c = 30     2g + 4c = 80",
            passos: [
              { expr: "1 cabeça por bicho", explica: "g + c = total de bichos.", status: "neutro",
                professor: "Cada galinha tem 1 cabeça, cada coelho tem 1 cabeça. Total de cabeças = total de bichos: g + c = 30." },
              { expr: "galinha 2 pés, coelho 4 pés", explica: "2g + 4c = total de pés.", status: "neutro",
                professor: "Cada galinha tem 2 pés (2g); cada coelho tem 4 (4c). Soma total = 80." },
              { expr: "I × (−2): −2g − 2c = −60", explica: "Preparo para eliminar g.", status: "ok" },
              { expr: "soma com II: 2c = 20  →  c = 10", explica: "g some.", status: "ok" },
              { expr: "g = 30 − 10 = 20", explica: "Volta.", status: "ok",
                professor: "Confere: 20 galinhas × 2 pés + 10 coelhos × 4 pés = 40 + 40 = 80 ✅. 20 galinhas, 10 coelhos." },
            ],
            fatorada: "20 galinhas, 10 coelhos",
          },
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: 'Ana e Bruno têm juntos R$ 100. Ana tem R$ 20 a mais que Bruno.'",
    resposta: "Bruno R$ 40, Ana R$ 60",
    passos: ["a + b = 100", "a = b + 20", "b = 40, a = 60"],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) a + b = 100     II) a = b + 20",
      passos: [
        { expr: "II na I: (b + 20) + b = 100", explica: "Substituição.", status: "ok" },
        { expr: "2b + 20 = 100", explica: "Junta.", status: "ok" },
        { expr: "b = 40", explica: "−20, ÷2.", status: "ok" },
        { expr: "a = 40 + 20 = 60", explica: "Volta.", status: "ok",
          professor: "Confere: 40 + 60 = 100 ✅ e 60 − 40 = 20 ✅." },
      ],
      fatorada: "Bruno: R$ 40  |  Ana: R$ 60",
      legenda: "Modelagem",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: '2 refris + 1 salgado = R$ 15;  1 refri + 2 salgados = R$ 12'.",
    dica: "Adição preparada. Multiplique II por (−2) para eliminar o salgado.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) 2r + s = 15     II) r + 2s = 12",
      passos: [
        { expr: "II × (−2): −2r − 4s = −24", explica: "Preparo.", status: "ok" },
        { expr: "soma com I: −3s = −9  →  s = 3", explica: "r some.", status: "ok" },
        { expr: "volta em I: 2r + 3 = 15  →  r = 6", explica: "", status: "ok" },
      ],
      fatorada: "Refri: R$ 6  |  Salgado: R$ 3",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "1 refri =",
      opcoes: [{ nome: "R$ 6" }, { nome: "R$ 3" }, { nome: "R$ 4" }],
      respostaCerta: "R$ 6",
      feedbackAcerto: "🎯 Depois de eliminar s: r = 6.",
      feedbackErro:
        "Multiplique II por −2 e some com I. Elimina s → r = 6.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 'Numa fazenda há galinhas e coelhos. 30 cabeças e 80 pés.'",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) g + c = 30     II) 2g + 4c = 80",
      passos: [
        { expr: "I × (−2): −2g − 2c = −60", explica: "Preparo.", status: "ok" },
        { expr: "soma com II: 2c = 20  →  c = 10", explica: "g some.", status: "ok" },
        { expr: "g = 30 − 10 = 20", explica: "Volta.", status: "ok" },
      ],
      fatorada: "20 galinhas, 10 coelhos",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quantos coelhos?",
      opcoes: [{ nome: "10" }, { nome: "20" }, { nome: "15" }],
      respostaCerta: "10",
      feedbackAcerto: "🎯 2c = 20 → 10 coelhos.",
      feedbackErro:
        "Cada galinha tem 2 pés e cada coelho, 4. Sistema: g+c=30 e 2g+4c=80 → c = 10.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "No cinema: 2 ingressos + 1 pipoca custam R$ 55. 1 ingresso + 2 pipocas custam R$ 35.",
    problema: "Quanto custa 1 pipoca?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) 2i + p = 55     II) i + 2p = 35",
      passos: [
        { expr: "I × (−2): −4i − 2p = −110", explica: "Preparo.", status: "ok",
          professor: "Multiplico I por −2 para gerar coefs opostos em p (−2p vs +2p)." },
        { expr: "soma com II: −3i = −75  →  i = 25", explica: "p some.", status: "ok" },
        { expr: "volta em I: 50 + p = 55  →  p = 5", explica: "", status: "ok",
          professor: "Confere na II: 25 + 2·5 = 35 ✅. Ingresso R$ 25, pipoca R$ 5." },
      ],
      fatorada: "Ingresso: R$ 25  |  Pipoca: R$ 5",
      legenda: "Aplicação — cinema",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "1 pipoca =",
      opcoes: [{ nome: "R$ 5" }, { nome: "R$ 10" }, { nome: "R$ 15" }],
      respostaCerta: "R$ 5",
      feedbackAcerto: "🎯 I × (−2) + II → −3i = −75 → i = 25; p = 5.",
      feedbackErro:
        "Multiplique I por −2. Some com II: −3i = −75 → i = 25; volte em I para achar p = 5.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Traduza CADA frase em uma equação.",
      "Uma letra isolada → substituição. Coefs simples → adição.",
      "'a mais que' → soma. 'vezes' → multiplicação.",
      "Sempre volte à pergunta com FRASE completa e unidade (R$, anos, kg).",
      "Confira nas DUAS equações originais.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "I) x + y = 10;  II) x − y = 4. x =",
        opcoes: ["7", "3", "5"], correta: 0,
        feedbackAcerto: "🎉 Soma: 2x = 14 → x = 7.",
        feedbackErro: "Coefs de y opostos. Soma: 2x = 14 → x = 7." },
      { pergunta: "Dois números somam 20 e diferem por 4. Menor =",
        opcoes: ["8", "10", "12"], correta: 0,
        feedbackAcerto: "🎉 x + y = 20 e x − y = 4 → x = 12, y = 8. Menor = 8.",
        feedbackErro: "Soma dá 2x = 24 → x = 12; y = 8. Menor = 8." },
      { pergunta: "3 cadernos + 2 canetas = R$ 22;  2 cadernos + 3 canetas = R$ 23. Caneta =",
        opcoes: ["R$ 5", "R$ 4", "R$ 6"], correta: 0,
        feedbackAcerto: "🎉 Elimina cadernos: caneta = R$ 5.",
        feedbackErro:
          "Multiplique I por 2 e II por −3 (ou vice-versa) e some. Caneta = R$ 5." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Mercadinho de sistemas",
    materiais: ["Papel", "Lápis"],
    passos: [
      "Escreva 2 problemas com 2 produtos e 2 compras (ex.: '2 pães + 1 leite = R$ 8').",
      "Monte o sistema, escolha o método e resolva.",
      "Responda em frase com unidade e confira nas duas equações.",
    ],
    registro: "📸 Foto do caderno com os 2 sistemas resolvidos.",
  },

  recompensa: { xp: 200, moedas: 100 },
};
