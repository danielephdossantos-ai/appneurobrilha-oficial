import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Sistema 2×2 por substituição.
 * Formato: passo a passo interativo isolando 1 letra, substituindo,
 * resolvendo e VERIFICANDO nas duas equações.
 */
export const aula03_substituicao: AulaV4 = {
  slug: "u4-03-substituicao",
  titulo: "Sistema 2×2 — método da substituição",
  iconeTrilha: "🔄",
  bncc: ["EF08MA08"],
  duracaoMin: 28,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Duas incógnitas pedem duas equações",
    historia:
      "{NOME}, quando o problema tem 2 grandezas desconhecidas (x e y), 1 equação não basta — sobram infinitas soluções. Preciso de 2 equações formando um SISTEMA. O método da substituição isola uma letra numa equação e SUBSTITUI na outra.",
  },

  momento02_exploracao: {
    instrucao:
      "Veja a substituição funcionando em um sistema simples.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "I) x + y = 10     II) y = 2x + 1",
        passos: [
          { expr: "II já está isolada: y = 2x + 1", explica: "Não preciso mexer na II.", status: "neutro",
            professor: "Grande atalho: quando UMA das equações já tem uma letra sozinha em um lado, essa é a candidata natural para substituir. Aqui, a II já diz 'y = 2x + 1'." },
          { expr: "substituo y na I", explica: "Troco o y da I por (2x + 1).", status: "ok",
            professor: "Onde estava y na I, escrevo (2x + 1). SEMPRE use parênteses ao substituir — evita erros de sinal." },
          { expr: "x + (2x + 1) = 10", explica: "Ficou só com x.", status: "ok",
            professor: "Agora tenho uma equação de 1 incógnita — sei resolver." },
          { expr: "3x + 1 = 10", explica: "Junta termos.", status: "ok" },
          { expr: "3x = 9  →  x = 3", explica: "−1, ÷3.", status: "ok" },
          { expr: "volta na II: y = 2·3 + 1 = 7", explica: "Uso o x já achado.", status: "ok",
            professor: "Achei x = 3. Volto em qualquer uma das equações (mais fácil na II, que já está isolada). y = 2·3 + 1 = 7." },
          { expr: "confere na I: 3 + 7 = 10 ✅", explica: "Verifica NAS DUAS.", status: "ok",
            professor: "Confere nas DUAS equações. I: 3 + 7 = 10 ✅. II: 7 = 2·3 + 1 ✅. Solução (x, y) = (3, 7)." },
        ],
        fatorada: "(x, y) = (3, 7)",
        legenda: "Prova visual: isolar → substituir → resolver → voltar",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual letra isolo primeiro?",
    pista: "A que tem coeficiente 1 (não gera fração).",
    revelacao:
      "Estratégia: procure uma letra que apareça SOZINHA (coeficiente 1) em alguma equação. Isolando ela, a conta fica sem frações.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Escolha inteligente: I) 2x + y = 7   II) 3x + 4y = 13",
      passos: [
        { expr: "olho os coeficientes", explica: "Na I, o y tem coef 1.", status: "neutro",
          professor: "I: 2x + y = 7 → o y está com coeficiente 1 (invisível). Se eu isolar y, não aparece fração." },
        { expr: "isolo y na I", explica: "y = 7 − 2x.", status: "ok",
          professor: "Passo 2x pro outro lado (troca sinal): y = 7 − 2x. Limpo, sem frações." },
        { expr: "substituo na II", explica: "3x + 4·(7 − 2x) = 13.", status: "ok",
          professor: "Troco y por (7 − 2x). Cuidado: multiplico o 4 por DENTRO do parêntese." },
        { expr: "3x + 28 − 8x = 13", explica: "Distributiva.", status: "ok",
          professor: "4·7 = 28; 4·(−2x) = −8x." },
        { expr: "−5x = −15  →  x = 3", explica: "Junta e resolve.", status: "ok" },
        { expr: "y = 7 − 2·3 = 1", explica: "Volta.", status: "ok",
          professor: "Confere na II: 3·3 + 4·1 = 9 + 4 = 13. ✅ (x, y) = (3, 1)." },
      ],
      fatorada: "(x, y) = (3, 1)",
    },
  },

  momento04_explicacao: {
    titulo: "Substituição — passo a passo",
    etapas: [
      {
        texto: "Caso 1: uma letra JÁ isolada. Resolva I) 2x + y = 11;  II) y = x + 2.",
        exemploReal: {
          titulo: "🔎 Só substituir",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "I) 2x + y = 11     II) y = x + 2",
            passos: [
              { expr: "II na I: 2x + (x + 2) = 11", explica: "Troco y por (x + 2).", status: "ok",
                professor: "USE PARÊNTESES ao substituir — sempre." },
              { expr: "3x + 2 = 11", explica: "Junta termos.", status: "ok" },
              { expr: "3x = 9  →  x = 3", explica: "−2, ÷3.", status: "ok" },
              { expr: "y = 3 + 2 = 5", explica: "Volta na II.", status: "ok",
                professor: "Confere na I: 2·3 + 5 = 11 ✅." },
            ],
            fatorada: "(x, y) = (3, 5)",
          },
        },
      },
      {
        texto: "Caso 2: nenhuma isolada — eu isolo. I) x + y = 12;  II) x − y = 4.",
        exemploReal: {
          titulo: "🔎 Isola primeiro",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "I) x + y = 12     II) x − y = 4",
            passos: [
              { expr: "isolo x na I: x = 12 − y", explica: "Passo y pro outro lado.", status: "ok",
                professor: "Escolho isolar x na I porque tem coeficiente 1." },
              { expr: "substituo em II: (12 − y) − y = 4", explica: "Troco x por (12 − y).", status: "ok",
                professor: "PARÊNTESES importam. Não escreva 12 − y − y direto sem pensar no sinal." },
              { expr: "12 − 2y = 4", explica: "Junta termos.", status: "ok",
                professor: "−y − y = −2y." },
              { expr: "−2y = −8  →  y = 4", explica: "−12, ÷(−2).", status: "ok",
                professor: "Cuidado com o sinal ao dividir por número negativo." },
              { expr: "x = 12 − 4 = 8", explica: "Volta.", status: "ok",
                professor: "Confere: 8 + 4 = 12 ✅  e  8 − 4 = 4 ✅. Solução: (8, 4)." },
            ],
            fatorada: "(x, y) = (8, 4)",
          },
        },
      },
      {
        texto: "Caso 3: sistema impossível. Veja I) x + y = 3;  II) x + y = 5.",
        exemploReal: {
          titulo: "🔎 Quando não tem solução",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "I) x + y = 3     II) x + y = 5",
            passos: [
              { expr: "isolo em I: y = 3 − x", explica: "Padrão.", status: "ok" },
              { expr: "substituo em II: x + (3 − x) = 5", explica: "Troco y.", status: "ok" },
              { expr: "3 = 5 ❌", explica: "As duas letras sumiram e sobrou uma FALSIDADE.", status: "x",
                professor: "Quando o sistema não tem solução, as incógnitas se cancelam e sobra uma igualdade falsa (aqui 3 = 5). Significa que as duas equações são CONTRADITÓRIAS — não existe (x, y) que satisfaça as duas ao mesmo tempo." },
            ],
            falha: "Sistema IMPOSSÍVEL — sem solução.",
          },
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve I) x + y = 7;  II) y = x + 1. Clica Continuar.",
    resposta: "(x, y) = (3, 4)",
    passos: ["II na I: x + (x+1) = 7", "2x + 1 = 7", "x = 3, y = 4"],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) x + y = 7     II) y = x + 1",
      passos: [
        { expr: "II na I: x + (x + 1) = 7", explica: "Troca y por (x + 1).", status: "ok" },
        { expr: "2x + 1 = 7", explica: "Junta.", status: "ok" },
        { expr: "2x = 6  →  x = 3", explica: "−1, ÷2.", status: "ok" },
        { expr: "y = 3 + 1 = 4", explica: "Volta na II.", status: "ok",
          professor: "Confere: 3 + 4 = 7 ✅  e  4 = 3 + 1 ✅." },
      ],
      fatorada: "(x, y) = (3, 4)",
      legenda: "Modelagem",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: I) x + y = 8;  II) y = 2x − 1.",
    dica: "Substitui direto (II já isolada). x + (2x − 1) = 8.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) x + y = 8     II) y = 2x − 1",
      passos: [
        { expr: "x + (2x − 1) = 8", explica: "Substitui.", status: "ok" },
        { expr: "3x − 1 = 8", explica: "Junta.", status: "ok" },
        { expr: "3x = 9  →  x = 3", explica: "+1, ÷3.", status: "ok" },
        { expr: "y = 2·3 − 1 = 5", explica: "Volta.", status: "ok" },
      ],
      fatorada: "(x, y) = (3, 5)",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "3" }, { nome: "4" }, { nome: "5" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 x + (2x − 1) = 8 → 3x = 9 → x = 3.",
      feedbackErro:
        "Substitua y por (2x − 1) na I: x + (2x − 1) = 8 → 3x = 9 → x = 3.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: I) 2x + y = 11;  II) y = x + 2. Ache y.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) 2x + y = 11     II) y = x + 2",
      passos: [
        { expr: "2x + (x + 2) = 11", explica: "Substitui.", status: "ok" },
        { expr: "3x + 2 = 11", explica: "Junta.", status: "ok" },
        { expr: "3x = 9  →  x = 3", explica: "−2, ÷3.", status: "ok" },
        { expr: "y = 3 + 2 = 5", explica: "Volta na II.", status: "ok" },
      ],
      fatorada: "(x, y) = (3, 5)",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "y =",
      opcoes: [{ nome: "5" }, { nome: "3" }, { nome: "7" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 x = 3 → y = 3 + 2 = 5.",
      feedbackErro: "Depois de achar x = 3, use a II: y = x + 2 = 5.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Ana e Bruno juntos têm 30 anos. Ana tem 6 anos a MAIS que Bruno.",
    problema: "Quantos anos tem Bruno?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "I) a + b = 30     II) a = b + 6",
      passos: [
        { expr: "II: a = b + 6", explica: "'6 anos a mais' → soma.", status: "neutro",
          professor: "Chamo Bruno de b, Ana de a. 'Ana tem 6 a mais que Bruno' → a = b + 6." },
        { expr: "II na I: (b + 6) + b = 30", explica: "Substitui a.", status: "ok" },
        { expr: "2b + 6 = 30", explica: "Junta.", status: "ok" },
        { expr: "2b = 24  →  b = 12", explica: "−6, ÷2.", status: "ok" },
        { expr: "a = 12 + 6 = 18", explica: "Volta.", status: "ok",
          professor: "Confere: 12 + 18 = 30 ✅  e  18 − 12 = 6 ✅." },
      ],
      fatorada: "Bruno: 12 anos  |  Ana: 18 anos",
      legenda: "Aplicação — idades",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Bruno =",
      opcoes: [{ nome: "12" }, { nome: "18" }, { nome: "10" }],
      respostaCerta: "12",
      feedbackAcerto: "🎯 (b + 6) + b = 30 → b = 12.",
      feedbackErro:
        "'6 anos a mais' → a = b + 6. Substituindo em a + b = 30: (b+6) + b = 30 → b = 12.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Escolha a letra com coeficiente 1 para isolar — evita frações.",
      "Use PARÊNTESES ao substituir.",
      "Achou uma letra? Volte em qualquer equação e ache a outra.",
      "Confira NAS DUAS equações originais.",
      "3 = 5 ou algo impossível → sistema sem solução.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "I) x + y = 5;  II) y = x + 1. x =",
        opcoes: ["2", "3", "4"], correta: 0,
        feedbackAcerto: "🎉 x + (x+1) = 5 → 2x = 4 → x = 2.",
        feedbackErro: "Substitui y por (x+1): 2x + 1 = 5 → x = 2." },
      { pergunta: "I) x − y = 1;  II) x = y + 1. y = 3. Então x =",
        opcoes: ["4", "2", "3"], correta: 0,
        feedbackAcerto: "🎉 x = y + 1 = 3 + 1 = 4.",
        feedbackErro: "II já dá x direto: x = 3 + 1 = 4." },
      { pergunta: "I) 2x + y = 8;  II) y = x + 2. x =",
        opcoes: ["2", "3", "4"], correta: 0,
        feedbackAcerto: "🎉 2x + (x + 2) = 8 → 3x = 6 → x = 2.",
        feedbackErro: "Substitui: 2x + (x+2) = 8 → 3x = 6 → x = 2." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Detetive de duas incógnitas",
    materiais: ["Papel", "Lápis"],
    passos: [
      "Crie 2 problemas com 2 grandezas (idades; cédulas; preços).",
      "Escreva as 2 equações do sistema.",
      "Resolva por substituição mostrando: isola → substitui → resolve → volta → confere.",
    ],
    registro: "📸 Foto do caderno com os 2 sistemas resolvidos.",
  },

  recompensa: { xp: 190, moedas: 95 },
};
