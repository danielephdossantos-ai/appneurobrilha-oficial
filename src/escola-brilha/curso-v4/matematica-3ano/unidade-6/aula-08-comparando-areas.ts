import type { AulaV4 } from "../../types";

export const aula08_comparandoAreas: AulaV4 = {
  slug: "u6-08-comparando-areas",
  titulo: "Qual Superfície Ocupa Mais?",
  iconeTrilha: "🟦",
  bncc: ["EF03MA21"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],
  momento01_motivacao: { titulo: "Pisos da cidade", historia: "Para saber qual piso cobre mais espaço, não basta olhar o contorno. Precisamos comparar a superfície ocupada: a área." },
  momento02_exploracao: { instrucao: "Imagine cada figura coberta por quadradinhos iguais.", cenas: [{ tipo: "texto", texto: "Figura A: 3 fileiras de 4 quadrados = 12 quadrados", destaque: true }, { tipo: "texto", texto: "Figura B: 2 fileiras de 5 quadrados = 10 quadrados" }] },
  momento03_descoberta: { perguntaGuia: "Como comparar sem depender do formato?", pista: "Cubra as figuras com a mesma unidade, sem buracos nem sobreposições.", revelacao: "A figura coberta por mais unidades iguais tem maior área." },
  momento04_explicacao: { titulo: "Comparar superfícies", etapas: [
    { texto: "Sobrepor uma figura à outra permite uma comparação direta.", exemploReal: { contexto: "Uma folha cobre totalmente a outra e ainda sobra uma faixa.", destaque: "A folha que sobra tem maior área." } },
    { texto: "Quando não podemos sobrepor, cobrimos as duas com quadrados do mesmo tamanho.", exemploReal: { contexto: "Uma figura usa 12 quadrados e outra usa 10.", destaque: "12 > 10, então a primeira tem maior área." } },
    { texto: "Figuras de formatos diferentes podem ter a mesma área.", exemploReal: { contexto: "Um retângulo 2 × 6 e outro 3 × 4 usam 12 quadrados.", destaque: "As duas áreas são iguais." } },
  ] },
  momento05_modelagem: { enunciado: "Compare uma figura com 4 fileiras de 3 quadrados e outra com 2 fileiras de 5.", passos: ["Primeira: 4 × 3 = 12 quadrados.", "Segunda: 2 × 5 = 10 quadrados.", "12 é maior que 10."], resposta: "A primeira figura tem maior área." },
  momento06_praticaGuiada: { enunciado: "Uma figura ocupa 15 quadrados e outra ocupa 12.", dica: "Compare a quantidade de unidades iguais.", interacao: { tipo: "escolhaVisual", pergunta: "Qual tem maior área?", opcoes: [{ nome: "A de 15 quadrados" }, { nome: "A de 12 quadrados" }, { nome: "São iguais" }], respostaCerta: "A de 15 quadrados", feedbackAcerto: "15 unidades cobrem mais superfície que 12.", feedbackErro: "As unidades são iguais; compare 15 e 12." } },
  momento07_praticaIndependente: { enunciado: "Um retângulo 2 × 4 e um quadrado com 8 unidades de área.", interacao: { tipo: "escolhaVisual", pergunta: "Compare as áreas:", opcoes: [{ nome: "São iguais" }, { nome: "O retângulo é maior" }, { nome: "O quadrado é maior" }], respostaCerta: "São iguais", feedbackAcerto: "2 × 4 = 8; ambos ocupam 8 unidades.", feedbackErro: "Conte as unidades: as duas figuras ocupam 8." } },
  momento08_aplicacao: { contexto: "Dois tapetes foram desenhados em malha quadriculada.", problema: "Um ocupa 18 quadrados e o outro 16. Qual cobre mais chão?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "O de 18 quadrados" }, { nome: "O de 16 quadrados" }, { nome: "Cobrem igual" }], respostaCerta: "O de 18 quadrados", feedbackAcerto: "18 > 16, portanto cobre mais superfície.", feedbackErro: "Compare o número de quadrados iguais." } },
  momento09_revisao: { pontos: ["Área é a superfície ocupada.", "Use unidades iguais.", "Não deixe buracos nem sobreposições."], miniDesafio: { tipo: "escolhaVisual", pergunta: "3 × 5 e 5 × 3 têm áreas:", opcoes: [{ nome: "Iguais" }, { nome: "Diferentes" }], respostaCerta: "Iguais", feedbackAcerto: "As duas têm 15 unidades de área.", feedbackErro: "3 × 5 e 5 × 3 valem 15." } },
  momento10_avaliacao: { perguntas: [
    { pergunta: "Qual tem maior área: 14 ou 11 quadrados iguais?", opcoes: ["14", "11", "Iguais"], correta: 0, feedbackAcerto: "14 unidades cobrem mais superfície.", feedbackErro: "Compare as quantidades de unidades iguais." },
    { pergunta: "Um retângulo 3 × 4 ocupa quantas unidades?", opcoes: ["12", "7", "14"], correta: 0, feedbackAcerto: "Três fileiras de quatro formam 12.", feedbackErro: "Calcule 3 × 4." },
    { pergunta: "Figuras diferentes podem ter a mesma área?", opcoes: ["Sim", "Não"], correta: 0, feedbackAcerto: "Sim, se ocuparem a mesma quantidade de unidades iguais.", feedbackErro: "O formato pode mudar sem mudar a superfície total." },
  ] },
  momento11_missaoFamilia: { titulo: "Medição com quadrados", materiais: ["Papel quadriculado", "Lápis"], passos: ["Desenhe duas figuras diferentes.", "Faça ambas ocuparem 12 quadrados.", "Conte e compare."], registro: "Fotografe as duas figuras de mesma área." },
  recompensa: { xp: 200, moedas: 100 },
};
