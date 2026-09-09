import type { AulaV4 } from "../../types";

export const aula09_igualdade: AulaV4 = {
  slug: "u2-09-igualdade",
  titulo: "Os Dois Lados da Igualdade",
  iconeTrilha: "⚖️",
  bncc: ["EF03MA11"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: { titulo: "Uma balança equilibrada", historia: "O sinal de igual não quer dizer apenas 'vem a resposta'. Ele afirma que os dois lados têm o mesmo valor." },
  momento02_exploracao: { instrucao: "Compare os valores dos dois lados.", cenas: [{ tipo: "texto", texto: "8 + 4 = 7 + 5", destaque: true }, { tipo: "texto", texto: "Os dois lados valem 12." }] },
  momento03_descoberta: { perguntaGuia: "O que o sinal = está dizendo?", pista: "Calcule os dois lados.", revelacao: "Uma igualdade é verdadeira quando os dois lados representam a mesma quantidade." },
  momento04_explicacao: { titulo: "Igual significa mesmo valor", etapas: [
    { texto: "Calcule cada lado separadamente.", exemploReal: { contexto: "9 + 6 = 10 + 5: ambos valem 15.", destaque: "A igualdade é verdadeira." } },
    { texto: "Para descobrir um número escondido, conserve o equilíbrio.", exemploReal: { contexto: "12 + 3 = 10 + ?; o lado esquerdo vale 15, então ? = 5.", destaque: "12 + 3 = 10 + 5." } },
    { texto: "Uma mesma quantidade pode ser decomposta de modos diferentes.", exemploReal: { contexto: "20 = 10 + 10 = 15 + 5.", destaque: "As escritas são equivalentes." } },
  ] },
  momento05_modelagem: { enunciado: "Complete 14 + 6 = 17 + ?.", passos: ["14 + 6 = 20.", "O outro lado também deve valer 20.", "17 precisa de 3 para chegar a 20."], resposta: "? = 3" },
  momento06_praticaGuiada: { enunciado: "Complete 8 + 7 = 10 + ?.", dica: "Descubra o valor do lado esquerdo.", interacao: { tipo: "escolhaVisual", pergunta: "Qual número equilibra?", opcoes: [{ nome: "5" }, { nome: "15" }, { nome: "3" }], respostaCerta: "5", feedbackAcerto: "8 + 7 e 10 + 5 valem 15.", feedbackErro: "8 + 7 = 15; para 10 chegar a 15 faltam 5." } },
  momento07_praticaIndependente: { enunciado: "Qual igualdade é verdadeira?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "9 + 4 = 8 + 5" }, { nome: "7 + 6 = 10 + 2" }, { nome: "15 = 9 + 5" }], respostaCerta: "9 + 4 = 8 + 5", feedbackAcerto: "Os dois lados valem 13.", feedbackErro: "Calcule os dois lados de cada igualdade." } },
  momento08_aplicacao: { contexto: "Duas caixas devem ter o mesmo total.", problema: "Uma tem 18 + 2 objetos. A outra tem 13 + quantos?", interacao: { tipo: "escolhaVisual", pergunta: "Complete:", opcoes: [{ nome: "7" }, { nome: "5" }, { nome: "20" }], respostaCerta: "7", feedbackAcerto: "18 + 2 = 20 e 13 + 7 = 20.", feedbackErro: "A segunda caixa precisa completar 20." } },
  momento09_revisao: { pontos: ["= significa mesmo valor.", "Calcule os dois lados.", "Mantenha o equilíbrio."], miniDesafio: { tipo: "escolhaVisual", pergunta: "30 = 24 + ?", opcoes: [{ nome: "6" }, { nome: "54" }, { nome: "4" }], respostaCerta: "6", feedbackAcerto: "24 + 6 = 30.", feedbackErro: "Descubra quanto falta de 24 até 30." } },
  momento10_avaliacao: { perguntas: [
    { pergunta: "Complete: 6 + 9 = 11 + ?", opcoes: ["4", "15", "5"], correta: 0, feedbackAcerto: "Ambos os lados valem 15.", feedbackErro: "6 + 9 = 15; de 11 até 15 faltam 4." },
    { pergunta: "Qual é verdadeira?", opcoes: ["12 + 8 = 15 + 5", "10 + 7 = 12 + 4", "18 = 9 + 8"], correta: 0, feedbackAcerto: "Os dois lados valem 20.", feedbackErro: "Calcule e compare os dois lados." },
    { pergunta: "25 = 19 + ?", opcoes: ["6", "44", "5"], correta: 0, feedbackAcerto: "19 + 6 = 25.", feedbackErro: "Conte de 19 até 25." },
  ] },
  momento11_missaoFamilia: { titulo: "Igualdades em cartões", materiais: ["Papel", "Lápis"], passos: ["Escreva um número-alvo.", "Crie duas contas com esse resultado.", "Coloque o sinal de igual entre elas."], registro: "Fotografe três igualdades verdadeiras." },
  recompensa: { xp: 200, moedas: 100 },
};
