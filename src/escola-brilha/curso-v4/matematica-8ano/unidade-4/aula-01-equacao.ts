import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Equação do 1º grau (revisão avançada).
 * Formato: balança + passo a passo interativo, com o professor cuidando
 * de sinais opostos, MMC para frações e "conferir substituindo".
 */
export const aula01_equacao: AulaV4 = {
  slug: "u4-01-equacao",
  titulo: "Equação do 1º grau — revisão avançada",
  iconeTrilha: "⚖️",
  bncc: ["EF08MA07"],
  duracaoMin: 26,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "A balança em equilíbrio",
    historia:
      "{NOME}, uma equação é uma balança: o que está de um lado é IGUAL ao que está do outro. Regra de ouro: o que faço de um lado, faço IGUAL do outro. Hoje vamos ver equações com incógnita dos dois lados e com frações.",
  },

  momento02_exploracao: {
    instrucao:
      "Veja como a balança se mantém em equilíbrio quando aplicamos a mesma operação nos dois lados.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "3x + 5 = 20",
        passos: [
          {
            expr: "3x + 5 = 20",
            explica: "Equação original.",
            status: "neutro",
            professor:
              "Quero isolar o x. Estratégia: primeiro elimino o número solto do mesmo lado do x, depois divido pelo coeficiente.",
          },
          {
            expr: "3x + 5 − 5 = 20 − 5",
            explica: "Subtraio 5 dos DOIS lados.",
            status: "ok",
            professor:
              "Para tirar o +5 do lado esquerdo, subtraio 5. Mas a balança tem que continuar equilibrada — subtraio 5 do lado direito também. Isso é o 'passar pro outro lado com sinal trocado' bem explicado.",
          },
          {
            expr: "3x = 15",
            explica: "Simplifiquei os dois lados.",
            status: "ok",
            professor:
              "Do lado esquerdo: 5 − 5 = 0, sobrou 3x. Do lado direito: 20 − 5 = 15. Balança segue equilibrada.",
          },
          {
            expr: "3x ÷ 3 = 15 ÷ 3",
            explica: "Divido os dois lados por 3.",
            status: "ok",
            professor:
              "O 3 está MULTIPLICANDO x. Para desfazer, DIVIDO por 3 os dois lados.",
          },
          {
            expr: "x = 5",
            explica: "Solução.",
            status: "ok",
            professor:
              "Confere: 3·5 + 5 = 15 + 5 = 20. ✅ SEMPRE substitua no original para conferir.",
          },
        ],
        fatorada: "x = 5",
        legenda: "Prova da balança: mesma operação dos dois lados",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "E quando aparece x DOS DOIS lados?",
    pista: "Junte todos os x de um lado e todos os números do outro.",
    revelacao:
      "Estratégia universal: x com x, número com número — e mantenha a balança sempre em equilíbrio.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5x − 4 = 2x + 8",
      passos: [
        {
          expr: "5x − 2x − 4 = 2x − 2x + 8",
          explica: "Subtraio 2x dos dois lados para juntar os x.",
          status: "ok",
          professor:
            "Para tirar o 2x do lado direito, faço a operação oposta: −2x nos dois lados. Isso zera o 2x da direita e diminui o 5x da esquerda.",
        },
        {
          expr: "3x − 4 = 8",
          explica: "Do lado esquerdo sobrou 3x; da direita sobrou 8.",
          status: "ok",
          professor:
            "5x − 2x = 3x. 2x − 2x = 0. Simplifica.",
        },
        {
          expr: "3x = 12",
          explica: "Somo 4 nos dois lados.",
          status: "ok",
          professor:
            "Agora sumo com o −4 da esquerda: +4 nos dois lados. Do lado direito: 8 + 4 = 12.",
        },
        {
          expr: "x = 4",
          explica: "Divido por 3.",
          status: "ok",
          professor:
            "Confere no original: 5·4 − 4 = 20 − 4 = 16 e 2·4 + 8 = 8 + 8 = 16. Bateu. ✅",
        },
      ],
      fatorada: "x = 4",
    },
  },

  momento04_explicacao: {
    titulo: "Resolvendo equações — passo a passo",
    etapas: [
      {
        texto: "Caso 1: equação com parênteses. Resolva 2·(x + 3) = 14.",
        exemploReal: {
          titulo: "🔎 Distributiva primeiro",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2·(x + 3) = 14",
            passos: [
              { expr: "2·x + 2·3 = 14", explica: "Distributiva.", status: "ok",
                professor: "Antes de mais nada, distribuo o 2 no parêntese: 2·x + 2·3." },
              { expr: "2x + 6 = 14", explica: "Simplifico.", status: "ok",
                professor: "2·3 = 6. Ficou 2x + 6 = 14 — equação simples." },
              { expr: "2x = 8", explica: "−6 dos dois lados.", status: "ok",
                professor: "14 − 6 = 8. Subtraio o número solto do mesmo lado do x." },
              { expr: "x = 4", explica: "÷2.", status: "ok",
                professor: "Divido pelo coeficiente. Confere: 2·(4+3) = 2·7 = 14. ✅" },
            ],
            fatorada: "x = 4",
          },
        },
      },
      {
        texto: "Caso 2: com frações. Resolva x/2 + x/3 = 5.",
        exemploReal: {
          titulo: "🔎 Elimina denominador com MMC",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x/2 + x/3 = 5",
            passos: [
              { expr: "MMC(2, 3) = 6", explica: "Menor múltiplo comum dos denominadores.", status: "ok",
                professor: "Quando aparecem frações, multiplico TUDO pelo MMC dos denominadores. Isso zera as frações e a equação vira 'limpa'." },
              { expr: "6·(x/2) + 6·(x/3) = 6·5", explica: "Multiplico os 3 termos por 6.", status: "ok",
                professor: "Multiplico CADA termo, dos dois lados. Cuidado: não esqueça de multiplicar o 5 também." },
              { expr: "3x + 2x = 30", explica: "6/2 = 3;  6/3 = 2;  6·5 = 30.", status: "ok",
                professor: "Simplifico cada produto: 6·(x/2) = (6/2)·x = 3x. 6·(x/3) = 2x. 6·5 = 30." },
              { expr: "5x = 30", explica: "Soma os termos com x.", status: "ok",
                professor: "3x + 2x = 5x." },
              { expr: "x = 6", explica: "÷5.", status: "ok",
                professor: "Confere no original: 6/2 + 6/3 = 3 + 2 = 5. ✅" },
            ],
            fatorada: "x = 6",
          },
        },
      },
      {
        texto: "Caso 3: solução negativa. Resolva 4 − 2x = 10.",
        exemploReal: {
          titulo: "🔎 Cuidado com o sinal",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "4 − 2x = 10",
            passos: [
              { expr: "−2x = 10 − 4", explica: "Subtraio 4 dos dois lados.", status: "ok",
                professor: "Do lado esquerdo, 4 − 4 = 0, sobra −2x. Do lado direito: 10 − 4 = 6." },
              { expr: "−2x = 6", explica: "Cuidado: o coeficiente é NEGATIVO.", status: "neutro",
                professor: "O x está multiplicado por −2, não por 2. Ao dividir por −2, o SINAL do resultado muda." },
              { expr: "x = 6 ÷ (−2) = −3", explica: "Dividi por −2.", status: "ok",
                professor: "Positivo ÷ negativo = negativo. x = −3. Confere: 4 − 2·(−3) = 4 + 6 = 10. ✅" },
            ],
            fatorada: "x = −3",
          },
        },
      },
      {
        texto: "Armadilha: 'passar pro outro lado' NÃO é magia — é operação inversa.",
        exemploReal: {
          titulo: "🔎 O que muda de sinal",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Regra dos sinais ao passar de lado",
            passos: [
              { expr: "+5 vira −5", explica: "Estava somando → passa subtraindo.", status: "ok",
                professor: "Só termos que estão SOMANDO ou SUBTRAINDO trocam de sinal ao mudar de lado. Coeficiente que multiplica NÃO troca de sinal — vira divisão." },
              { expr: "·3 vira ÷3", explica: "Estava multiplicando → passa dividindo.", status: "ok",
                professor: "Erro clássico: 3x = 12 e escrever x = 12 − 3. NÃO! Como o 3 multiplica, ele passa DIVIDINDO: x = 12/3 = 4." },
              { expr: "÷5 vira ·5", explica: "Estava dividindo → passa multiplicando.", status: "ok",
                professor: "x/5 = 2 → x = 2·5 = 10." },
            ],
            fatorada: "Só soma/subtração troca de sinal. Multiplicação vira divisão e vice-versa.",
          },
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve 2x + 7 = 15 — clica Continuar.",
    resposta: "x = 4",
    passos: ["−7 dos dois lados", "2x = 8", "÷2", "x = 4"],
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2x + 7 = 15",
      passos: [
        { expr: "2x + 7 − 7 = 15 − 7", explica: "−7 dos dois lados.", status: "ok",
          professor: "Elimino o +7 subtraindo 7 dos dois lados." },
        { expr: "2x = 8", explica: "Simplifica.", status: "ok",
          professor: "15 − 7 = 8." },
        { expr: "x = 4", explica: "÷2.", status: "ok",
          professor: "Divido pelo coeficiente. Confere: 2·4 + 7 = 8 + 7 = 15. ✅" },
      ],
      fatorada: "x = 4",
      legenda: "Modelagem — Brilha resolve",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos juntos: resolva 3x − 2 = 10.",
    dica: "+2 dos dois lados; depois ÷3.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3x − 2 = 10",
      passos: [
        { expr: "3x = 12", explica: "+2 dos dois lados.", status: "ok" },
        { expr: "x = 4", explica: "÷3.", status: "ok" },
      ],
      fatorada: "x = 4",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "4" }, { nome: "3" }, { nome: "12" }],
      respostaCerta: "4",
      feedbackAcerto: "🎯 +2 dos dois lados → 3x = 12; ÷3 → x = 4.",
      feedbackErro: "Primeiro +2 dos dois lados (3x = 12), depois ÷3.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: resolva 4x + 1 = 2x + 9.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4x + 1 = 2x + 9",
      passos: [
        { expr: "4x − 2x + 1 = 9", explica: "Passo 2x para o outro lado (troca sinal).", status: "ok" },
        { expr: "2x + 1 = 9", explica: "Simplifica.", status: "ok" },
        { expr: "2x = 8", explica: "−1 dos dois lados.", status: "ok" },
        { expr: "x = 4", explica: "÷2.", status: "ok" },
      ],
      fatorada: "x = 4",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "4" }, { nome: "5" }, { nome: "2" }],
      respostaCerta: "4",
      feedbackAcerto: "🎯 Junta os x: 2x = 8 → x = 4.",
      feedbackErro: "Passa 2x pro lado esquerdo: 4x − 2x = 2x. Depois −1 e ÷2.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Bruno tinha R$ x no bolso. Gastou R$ 30 na feira e ainda ficou com R$ 45.",
    problema: "Quanto Bruno tinha no início?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x − 30 = 45",
      passos: [
        { expr: "define x", explica: "x = dinheiro inicial (R$).", status: "neutro",
          professor: "Sempre defina o que x representa. Aqui, x é o valor que Bruno tinha antes de gastar." },
        { expr: "monta equação", explica: "tinha − gastou = ficou.", status: "ok",
          professor: "Ele TINHA x, GASTOU 30 (subtrai), sobrou 45. Equação: x − 30 = 45." },
        { expr: "x = 45 + 30", explica: "+30 dos dois lados.", status: "ok",
          professor: "Elimino o −30 somando 30 dos dois lados." },
        { expr: "x = 75", explica: "Bruno tinha R$ 75.", status: "ok",
          professor: "Confere: 75 − 30 = 45. ✅ Bruno tinha R$ 75." },
      ],
      fatorada: "x = R$ 75",
      legenda: "Aplicação — dinheiro",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quanto Bruno tinha?",
      opcoes: [{ nome: "R$ 75" }, { nome: "R$ 15" }, { nome: "R$ 45" }],
      respostaCerta: "R$ 75",
      feedbackAcerto: "🎯 x − 30 = 45 → x = 75.",
      feedbackErro:
        "Se sobrou 45 depois de gastar 30, ele tinha 45 + 30 = 75.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Balança: o que faço de um lado, faço IGUAL do outro.",
      "Junta x com x, número com número (operação inversa).",
      "Soma/subtração troca sinal ao mudar de lado; multiplicação vira divisão e vice-versa.",
      "Frações: multiplique todos os termos pelo MMC dos denominadores.",
      "SEMPRE substitua no original para conferir.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "x + 3 = 10 → x =", opcoes: ["7", "13", "3"], correta: 0,
        feedbackAcerto: "🎉 −3 dos dois lados → x = 7.",
        feedbackErro: "Subtraia 3 dos dois lados: x = 10 − 3 = 7." },
      { pergunta: "2x = 14 → x =", opcoes: ["7", "12", "16"], correta: 0,
        feedbackAcerto: "🎉 ÷2 → x = 7.",
        feedbackErro: "O 2 multiplica x. Passa dividindo: 14/2 = 7." },
      { pergunta: "3x + 1 = 10 → x =", opcoes: ["3", "9", "11"], correta: 0,
        feedbackAcerto: "🎉 −1 (3x=9); ÷3 → x = 3.",
        feedbackErro: "Primeiro −1 dos dois lados (3x = 9); depois ÷3." },
      { pergunta: "x/2 + 3 = 7 → x =", opcoes: ["8", "5", "4"], correta: 0,
        feedbackAcerto: "🎉 −3 (x/2=4); ×2 → x = 8.",
        feedbackErro: "x/2 = 4 → x = 8 (o 2 divide, passa multiplicando)." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Balanças do dia",
    materiais: ["Papel", "Lápis"],
    passos: [
      "Crie 3 situações reais com uma incógnita (dinheiro, idade, distância).",
      "Escreva a equação, resolva mostrando os 3 passos e substitua para conferir.",
      "Marque com ✅ ou ❌ conforme a substituição bate.",
    ],
    registro: "📸 Foto do caderno com as 3 balanças resolvidas.",
  },

  recompensa: { xp: 180, moedas: 90 },
};
