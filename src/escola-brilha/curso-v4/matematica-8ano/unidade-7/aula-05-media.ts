import type { AulaV4 } from "../../types";

export const aula05_media: AulaV4 = {
  slug: "u7-05-media",
  titulo: "Média, moda e mediana",
  iconeTrilha: "📊",
  bncc: ["EF08MA25"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Resumir um monte de números",
    historia:
      "{NOME}, quando temos vários dados, 3 números resumem: MÉDIA, MODA e MEDIANA.",
  },
  momento02_exploracao: {
    instrucao: "Definições.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "3 tendências centrais",
        cabecalhos: ["Nome", "Como calcular"],
        linhas: [
          { rotulo: "Média", valores: ["soma ÷ quantidade"] },
          { rotulo: "Moda", valores: ["valor que mais aparece"] },
          { rotulo: "Mediana", valores: ["central (após ordenar)"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "E se tiver 2 centros?",
    pista: "Média dos dois.",
    revelacao: "Mediana com par: média dos 2 centrais.",
  },
  momento04_explicacao: {
    titulo: "Exemplos",
    etapas: [
      {
        texto: "Dados: 4, 6, 6, 8, 10.",
        exemploReal: {
          contexto: "5 valores",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Nome", "Valor"],
            linhas: [
              { rotulo: "Média", valores: ["34/5 = 6,8"] },
              { rotulo: "Moda", valores: ["6"] },
              { rotulo: "Mediana", valores: ["6"] },
            ],
          },
          destaque: "Cada uma diz algo diferente.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Notas 5, 7, 8, 8, 10. Média.",
    resposta: "7,6",
    visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Cálculo"], linhas: [{ rotulo: "1", valores: ["38/5", "7,6"] }] },
    passos: ["Soma 38. ÷5 = 7,6."],
  },
  momento06_praticaGuiada: {
    enunciado: "Moda de 2, 3, 3, 5, 7.",
    dica: "Mais aparece.",
    interacao: { tipo: "escolhaVisual", pergunta: "Moda:", opcoes: [{ nome: "3" }, { nome: "5" }, { nome: "2" }], respostaCerta: "3", feedbackAcerto: "🎯", feedbackErro: "Aparece 2 vezes." },
  },
  momento07_praticaIndependente: {
    enunciado: "Mediana de 1, 3, 5, 7, 9.",
    interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "5" }, { nome: "3" }, { nome: "7" }], respostaCerta: "5", feedbackAcerto: "🎯", feedbackErro: "Central." },
  },
  momento08_aplicacao: {
    contexto: "Notas da turma: 6, 7, 8, 9, 10.",
    problema: "Média:",
    interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "8" }, { nome: "7" }, { nome: "9" }], respostaCerta: "8", feedbackAcerto: "🎯", feedbackErro: "40/5." },
  },
  momento09_revisao: {
    pontos: ["Média = soma/quantidade.", "Moda = mais frequente.", "Mediana = central (ordene antes)."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Média de 2,4,6:", opcoes: ["4", "3", "6"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "12/3." },
      { pergunta: "Moda de 1,1,2:", opcoes: ["1", "2", "3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1 aparece 2×." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Estatístico",
    materiais: ["Papel"],
    passos: ["Colete 5 dados (idades).", "Calcule média/moda/mediana."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
