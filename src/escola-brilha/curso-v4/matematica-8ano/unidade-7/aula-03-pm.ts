import type { AulaV4 } from "../../types";

export const aula03_pm: AulaV4 = {
  slug: "u7-03-pm",
  titulo: "Princípio Multiplicativo",
  iconeTrilha: "🎲",
  bncc: ["EF08MA22"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Contando possibilidades",
    historia:
      "{NOME}, quantas combinações de camisa + calça você faz com 3 camisas e 2 calças? 3·2 = 6.",
  },
  momento02_exploracao: {
    instrucao: "Regra.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Princípio multiplicativo",
        cabecalhos: ["Etapa", "Escolhas"],
        linhas: [
          { rotulo: "1ª", valores: ["a"] },
          { rotulo: "2ª", valores: ["b"] },
          { rotulo: "Total", valores: ["a·b"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "E se forem 3 etapas?",
    pista: "Multiplica todas.",
    revelacao: "a · b · c.",
  },
  momento04_explicacao: {
    titulo: "Aplicação",
    etapas: [
      {
        texto: "Combos.",
        exemploReal: {
          contexto: "3 camisetas × 2 calças × 4 tênis",
          visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Cálculo"], linhas: [{ rotulo: "1", valores: ["3·2·4", "24"] }] },
          destaque: "24 combinações.",
        },
      },
      {
        texto: "Senhas.",
        exemploReal: {
          contexto: "PIN 4 dígitos (0–9)",
          visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Cálculo"], linhas: [{ rotulo: "1", valores: ["10⁴", "10.000"] }] },
          destaque: "10.000 possibilidades.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "5 sabores × 3 casquinhas.",
    resposta: "15",
    visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Valor"], linhas: [{ rotulo: "1", valores: ["5·3", "15"] }] },
    passos: ["5·3 = 15."],
  },
  momento06_praticaGuiada: {
    enunciado: "3 blusas × 4 saias.",
    dica: "Multiplica.",
    interacao: { tipo: "escolhaVisual", pergunta: "Total:", opcoes: [{ nome: "12" }, { nome: "7" }, { nome: "34" }], respostaCerta: "12", feedbackAcerto: "🎯", feedbackErro: "3·4." },
  },
  momento07_praticaIndependente: {
    enunciado: "PIN 3 dígitos (0–9):",
    interacao: { tipo: "escolhaVisual", pergunta: "Total:", opcoes: [{ nome: "1000" }, { nome: "30" }, { nome: "27" }], respostaCerta: "1000", feedbackAcerto: "🎯 10³.", feedbackErro: "10·10·10." },
  },
  momento08_aplicacao: {
    contexto: "Cardápio: 3 sucos, 4 lanches, 2 sobremesas.",
    problema: "Combos:",
    interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "24" }, { nome: "9" }, { nome: "36" }], respostaCerta: "24", feedbackAcerto: "🎯", feedbackErro: "3·4·2." },
  },
  momento09_revisao: {
    pontos: ["Multiplique as etapas.", "Serve pra combos e senhas."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2·5 possibilidades =", opcoes: ["10", "7", "25"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Multiplica." },
      { pergunta: "PIN 2 dig:", opcoes: ["100", "20", "10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "10²." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Guarda-roupa",
    materiais: ["Papel"],
    passos: ["Conte suas peças de roupa.", "Combos possíveis."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};
