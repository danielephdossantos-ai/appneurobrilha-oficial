import type { AulaV4 } from "../../types";

// Nome preservado para não quebrar o índice legado.
export const aula04_multDivFracoes: AulaV4 = {
  slug: "u4-04-fracao-de-quantidade",
  titulo: "Fração de uma quantidade",
  iconeTrilha: "🧩",
  bncc: ["EF06MA09"],
  duracaoMin: 23,
  metodologias: ["cpa", "skemp"],
  momento01_motivacao: { titulo: "Uma parte de um grupo", historia: "{NOME}, fração não representa apenas pedaços de uma figura. Ela também pode indicar uma parte de uma quantidade: 3/5 de uma turma, 2/3 de uma coleção ou 1/4 de um percurso." },
  momento02_exploracao: { instrucao: "Primeiro forme partes iguais; depois selecione quantas partes o numerador indica.", cenas: [
    { tipo: "texto", texto: "Em 3/4 de 20, o denominador 4 manda dividir 20 em 4 grupos iguais; o numerador 3 manda considerar 3 desses grupos.", destaque: true },
    { tipo: "tabela", titulo: "3/4 de 20", cabecalhos: ["Etapa", "Cálculo", "Resultado"], linhas: [{ rotulo: "Dividir", valores: ["20 ÷ 4", "5 em cada parte"] }, { rotulo: "Selecionar", valores: ["5 × 3", "15"] }] },
  ] },
  momento03_descoberta: { perguntaGuia: "Quanto é 2/5 de 30?", pista: "Divida 30 em 5 partes iguais e pegue 2.", revelacao: "30 ÷ 5 = 6; 6 × 2 = 12. Portanto, 2/5 de 30 é 12." },
  momento04_explicacao: { titulo: "Denominador divide; numerador multiplica", etapas: [
    { texto: "O denominador informa em quantas partes iguais a quantidade será separada.", exemploReal: { contexto: "1/6 de 42: 42 ÷ 6 = 7.", destaque: "Cada sexto de 42 contém 7 unidades." } },
    { texto: "O numerador informa quantas dessas partes serão consideradas.", exemploReal: { contexto: "5/6 de 42: cada parte vale 7; 7 × 5 = 35.", destaque: "5/6 de 42 = 35." } },
    { texto: "Confira comparando com o total.", exemploReal: { contexto: "Como 5/6 é menor que 1, o resultado 35 deve ser menor que 42.", destaque: "A comparação ajuda a detectar erros de cálculo." } },
  ] },
  momento05_modelagem: { enunciado: "Calcule 3/8 de 64.", resposta: "24", passos: ["Divida pelo denominador: 64 ÷ 8 = 8.", "Multiplique pelo numerador: 8 × 3 = 24.", "Confira: 3/8 é menor que a metade; 24 é menor que 32."] },
  momento06_praticaGuiada: { enunciado: "Quanto é 2/3 de 27?", dica: "27 ÷ 3; depois multiplique por 2.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "18" }, { nome: "9" }, { nome: "29" }, { nome: "54" }], respostaCerta: "18", feedbackAcerto: "🎯 27 ÷ 3 = 9; 9 × 2 = 18.", feedbackErro: "O denominador divide a quantidade; o numerador indica quantas partes usar." } },
  momento07_praticaIndependente: { enunciado: "Uma coleção tem 45 cartões. 4/5 estão organizados. Quantos?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "36" }, { nome: "9" }, { nome: "41" }, { nome: "180" }], respostaCerta: "36", feedbackAcerto: "🎯 45 ÷ 5 = 9; 9 × 4 = 36.", feedbackErro: "Forme cinco grupos de 9 e considere quatro grupos." } },
  momento08_aplicacao: { contexto: "Uma turma tem 32 estudantes. Três quartos entregaram um trabalho.", problema: "Quantos estudantes entregaram?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "24" }, { nome: "8" }, { nome: "29" }, { nome: "12" }], respostaCerta: "24", feedbackAcerto: "🎯 32 ÷ 4 × 3 = 24.", feedbackErro: "Cada quarto vale 8; três quartos valem 24." } },
  momento09_revisao: { pontos: ["Denominador: número de partes iguais.", "Numerador: quantidade de partes consideradas.", "Para calcular a/b de N: N ÷ b × a, quando a divisão é exata no contexto."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "1/4 de 80:", opcoes: ["20", "40", "16", "320"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "80 ÷ 4 = 20." },
    { pergunta: "3/5 de 50:", opcoes: ["30", "10", "53", "150"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "50 ÷ 5 × 3 = 30." },
    { pergunta: "7/10 de 90:", opcoes: ["63", "9", "70", "630"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "90 ÷ 10 × 7 = 63." },
  ] },
  momento11_missaoFamilia: { titulo: "Frações de coleções", materiais: ["Objetos seguros disponíveis em casa"], passos: ["Separe uma coleção com quantidade divisível por 2, 3 ou 4.", "Escolha uma fração dessa coleção.", "Mostre a divisão em partes iguais e registre o cálculo."], registro: "📸 Foto do agrupamento e do cálculo." },
  recompensa: { xp: 170, moedas: 90 },
};
