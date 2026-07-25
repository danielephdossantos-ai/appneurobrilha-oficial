import type { AulaV4 } from "../../types";

export const aula04_direta: AulaV4 = {
  slug: "u5-04-direta",
  titulo: "Grandezas diretamente proporcionais",
  iconeTrilha: "↗️",
  bncc: ["EF08MA12", "EF08MA13"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Sobe junto, desce junto",
    historia:
      "{NOME}, 1kg de arroz = R$ 5. 2kg = R$ 10. 3kg = R$ 15. Uma DOBRA, a outra DOBRA. Isso é direta.",
  },
  momento02_exploracao: {
    instrucao: "Tabela.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "kg de arroz × R$",
        cabecalhos: ["kg", "R$", "razão R$/kg"],
        linhas: [
          { rotulo: "1", valores: ["1", "5", "5"] },
          { rotulo: "2", valores: ["2", "10", "5"] },
          { rotulo: "3", valores: ["3", "15", "5"] },
        ],
      },
      { tipo: "texto", texto: "Razão constante = grandezas diretamente proporcionais.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como calcular?",
    pista: "Regra de três direta.",
    revelacao: "Multiplica em X (cruzado).",
  },
  momento04_explicacao: {
    titulo: "Regra de três direta",
    etapas: [
      {
        texto: "Monte a proporção.",
        exemploReal: {
          contexto: "5 kg de arroz = R$ 25. 8 kg = ?",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["kg", "R$"],
            linhas: [
              { rotulo: "1", valores: ["5", "25"] },
              { rotulo: "2", valores: ["8", "x"] },
            ],
          },
          destaque: "5·x = 25·8 → x = 40. R$ 40.",
        },
      },
      {
        texto: "Confira o sentido.",
        exemploReal: {
          contexto: "Se dobrar kg, o preço DOBRA → direta.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Sinal", "Direção"],
            linhas: [
              { rotulo: "↑", valores: ["kg sobe", "R$ sobe"] },
              { rotulo: "↓", valores: ["kg desce", "R$ desce"] },
            ],
          },
          destaque: "Sempre na mesma direção.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "3 canetas custam R$ 12. Quanto custam 7?",
    resposta: "R$ 28",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["canetas", "R$"],
      linhas: [
        { rotulo: "1", valores: ["3", "12"] },
        { rotulo: "2", valores: ["7", "x"] },
      ],
    },
    passos: ["3·x = 12·7.", "3x = 84.", "x = 28."],
  },
  momento06_praticaGuiada: {
    enunciado: "5 kg = R$ 20. 8 kg =",
    dica: "5·x=20·8.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 32" }, { nome: "R$ 25" }, { nome: "R$ 40" }],
      respostaCerta: "R$ 32",
      feedbackAcerto: "🎯",
      feedbackErro: "x = 160/5.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Uma torneira enche 6L em 4 min. Em 10 min:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "L =",
      opcoes: [{ nome: "15L" }, { nome: "12L" }, { nome: "20L" }],
      respostaCerta: "15L",
      feedbackAcerto: "🎯 4·x=6·10.",
      feedbackErro: "Direta.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um carro faz 12 km com 1 L. Vai fazer 90 km.",
    problema: "Litros:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "L =",
      opcoes: [{ nome: "7,5" }, { nome: "8" }, { nome: "9" }],
      respostaCerta: "7,5",
      feedbackAcerto: "🎯 12·x=1·90.",
      feedbackErro: "x = 90/12.",
    },
  },
  momento09_revisao: {
    pontos: ["Direta = razão constante.", "Regra de três: cruzado.", "Sobem/descem juntas."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1:2 e 3:x. x=", opcoes: ["6", "5", "4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Multiplica cruzado." },
      { pergunta: "10 em 20min → 15 em ?", opcoes: ["30min", "25min", "40min"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Direta." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Receitas",
    materiais: ["Papel"],
    passos: ["Pegue uma receita para 4 pessoas.", "Recalcule para 6."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
