import type { AulaV4 } from "../../types";

export const aula08_fatosBasicos: AulaV4 = {
  slug: "u2-08-fatos-basicos",
  titulo: "Fatos que Ajudam a Calcular",
  iconeTrilha: "🧠",
  bncc: ["EF03MA04"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: { titulo: "Contas conhecidas", historia: "Alguns resultados conhecidos ajudam a descobrir outros sem decorar tudo. Se 6 + 4 = 10, então 60 + 40 = 100." },
  momento02_exploracao: { instrucao: "Observe como um fato conhecido gera outro.", cenas: [{ tipo: "texto", texto: "7 + 3 = 10 → 70 + 30 = 100", destaque: true }, { tipo: "texto", texto: "5 × 4 = 20 → 4 × 5 = 20" }] },
  momento03_descoberta: { perguntaGuia: "O que permanece igual nas contas relacionadas?", pista: "A relação entre as parcelas ou os fatores.", revelacao: "Podemos usar composição, decomposição e troca da ordem para calcular mentalmente." },
  momento04_explicacao: { titulo: "Construindo estratégias", etapas: [
    { texto: "Complete uma dezena: em 8 + 7, separe 7 em 2 + 5.", exemploReal: { contexto: "8 + 2 = 10 e 10 + 5 = 15.", destaque: "8 + 7 = 15." } },
    { texto: "Na adição e na multiplicação, trocar a ordem mantém o resultado.", exemploReal: { contexto: "3 + 9 = 9 + 3 e 4 × 6 = 6 × 4.", destaque: "A ordem pode facilitar o cálculo." } },
    { texto: "Use dobros conhecidos para resultados próximos.", exemploReal: { contexto: "6 + 6 = 12; então 6 + 7 é um a mais.", destaque: "6 + 7 = 13." } },
  ] },
  momento05_modelagem: { enunciado: "Calcule 9 + 6 mentalmente.", passos: ["Separe 6 em 1 + 5.", "9 + 1 completa 10.", "10 + 5 = 15."], resposta: "9 + 6 = 15" },
  momento06_praticaGuiada: { enunciado: "Se 8 + 8 = 16, quanto é 8 + 9?", dica: "É um a mais que o dobro.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "17" }, { nome: "16" }, { nome: "18" }], respostaCerta: "17", feedbackAcerto: "Isso: 16 + 1 = 17.", feedbackErro: "Parta de 8 + 8 = 16 e acrescente 1." } },
  momento07_praticaIndependente: { enunciado: "Use um fato conhecido: 7 + 3 = 10. Quanto é 70 + 30?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "100" }, { nome: "10" }, { nome: "90" }], respostaCerta: "100", feedbackAcerto: "Sete dezenas mais três dezenas formam dez dezenas: 100.", feedbackErro: "Conte dezenas: 7 D + 3 D = 10 D = 100." } },
  momento08_aplicacao: { contexto: "Há 6 mesas com 4 cadeiras em cada uma.", problema: "Quantas cadeiras há?", interacao: { tipo: "escolhaVisual", pergunta: "Use 4 × 6 ou 6 × 4.", opcoes: [{ nome: "24" }, { nome: "20" }, { nome: "10" }], respostaCerta: "24", feedbackAcerto: "4 × 6 = 6 × 4 = 24.", feedbackErro: "Some seis grupos de quatro: 4 + 4 + 4 + 4 + 4 + 4." } },
  momento09_revisao: { pontos: ["Complete dezenas.", "Use dobros.", "Relacione fatos conhecidos."], miniDesafio: { tipo: "escolhaVisual", pergunta: "Se 5 × 7 = 35, quanto é 7 × 5?", opcoes: [{ nome: "35" }, { nome: "12" }, { nome: "30" }], respostaCerta: "35", feedbackAcerto: "A troca da ordem dos fatores mantém o produto.", feedbackErro: "5 × 7 e 7 × 5 representam a mesma quantidade." } },
  momento10_avaliacao: { perguntas: [
    { pergunta: "Use 9 + 9 = 18. Quanto é 9 + 10?", opcoes: ["19", "18", "20"], correta: 0, feedbackAcerto: "É um a mais que 18.", feedbackErro: "9 + 10 é um a mais que 9 + 9." },
    { pergunta: "Quanto é 80 + 20?", opcoes: ["100", "10", "90"], correta: 0, feedbackAcerto: "8 dezenas + 2 dezenas = 10 dezenas.", feedbackErro: "Relacione com 8 + 2 = 10." },
    { pergunta: "Se 3 × 8 = 24, quanto é 8 × 3?", opcoes: ["24", "11", "21"], correta: 0, feedbackAcerto: "Trocar a ordem mantém o produto.", feedbackErro: "Os fatores trocaram de lugar, mas o total não mudou." },
  ] },
  momento11_missaoFamilia: { titulo: "Cartões de estratégias", materiais: ["Papel", "Lápis"], passos: ["Escreva cinco fatos conhecidos.", "Para cada um, crie uma conta relacionada.", "Explique a estratégia para alguém."], registro: "Fotografe os pares de contas." },
  recompensa: { xp: 200, moedas: 100 },
};
