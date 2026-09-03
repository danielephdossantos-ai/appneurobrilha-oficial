import type { AulaV4 } from "../../types";

export const aula08_equilibrioIgualdade: AulaV4 = {
  slug: "u2-08-equilibrio-igualdade",
  titulo: "Equilíbrio e Número Desconhecido",
  iconeTrilha: "⚖️",
  bncc: ["EF04MA13", "EF04MA14", "EF04MA15"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],
  momento01_motivacao: { titulo: "Balança numérica", historia: "Uma igualdade funciona como uma balança: os dois lados têm o mesmo valor. Se fizermos a mesma mudança nos dois lados, o equilíbrio permanece." },
  momento02_exploracao: { instrucao: "Observe o equilíbrio.", cenas: [{ tipo: "texto", texto: "18 + 7 = 25" }, { tipo: "texto", texto: "18 + 7 + 5 = 25 + 5", destaque: true }] },
  momento03_descoberta: { perguntaGuia: "Por que somar 5 aos dois lados mantém a igualdade?", pista: "Os dois valores aumentam na mesma quantidade.", revelacao: "Somar ou subtrair o mesmo número nos dois membros conserva a igualdade." },
  momento04_explicacao: { titulo: "Conservar e descobrir", etapas: [
    { texto: "A mesma operação nos dois lados mantém o equilíbrio.", exemploReal: { contexto: "30 = 30; retirando 8 dos dois lados, 22 = 22.", destaque: "A igualdade continua verdadeira." } },
    { texto: "Para achar um número desconhecido, desfaça a operação conhecida.", exemploReal: { contexto: "? + 17 = 45; calcule 45 − 17.", destaque: "? = 28, pois 28 + 17 = 45." } },
  ] },
  momento05_modelagem: { enunciado: "Descubra ? em 63 − ? = 25.", passos: ["O número retirado é a diferença entre 63 e 25.", "63 − 25 = 38.", "Confira: 63 − 38 = 25."], resposta: "? = 38" },
  momento06_praticaGuiada: { enunciado: "Complete ? + 26 = 70.", dica: "Desfaça a adição com uma subtração.", interacao: { tipo: "escolhaVisual", pergunta: "Qual número falta?", opcoes: [{ nome: "44" }, { nome: "96" }, { nome: "54" }], respostaCerta: "44", feedbackAcerto: "70 − 26 = 44 e 44 + 26 = 70.", feedbackErro: "Calcule a diferença entre o total 70 e a parcela conhecida 26." } },
  momento07_praticaIndependente: { enunciado: "Complete 8 × ? = 56.", interacao: { tipo: "escolhaVisual", pergunta: "Qual fator falta?", opcoes: [{ nome: "7" }, { nome: "48" }, { nome: "8" }], respostaCerta: "7", feedbackAcerto: "56 ÷ 8 = 7; a multiplicação confirma 8 × 7 = 56.", feedbackErro: "Use a operação inversa: divida 56 por 8." } },
  momento08_aplicacao: { contexto: "Uma caixa tinha uma quantidade desconhecida. Depois de receber 35 peças, ficou com 92.", problema: "Quantas peças havia antes?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "57" }, { nome: "127" }, { nome: "67" }], respostaCerta: "57", feedbackAcerto: "92 − 35 = 57; conferindo, 57 + 35 = 92.", feedbackErro: "Desfaça o acréscimo de 35: calcule 92 − 35." } },
  momento09_revisao: { pontos: ["Igual significa mesmo valor.", "Faça a mesma mudança nos dois lados.", "Use a operação inversa para encontrar o desconhecido."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "? + 34 = 80", opcoes: ["46", "114", "56"], correta: 0, feedbackAcerto: "80 − 34 = 46; portanto 46 + 34 = 80.", feedbackErro: "Subtraia a parcela conhecida do total: 80 − 34." },
    { pergunta: "72 − ? = 29", opcoes: ["43", "101", "53"], correta: 0, feedbackAcerto: "72 − 43 = 29, então o número desconhecido é 43.", feedbackErro: "A diferença entre 72 e 29 é 43." },
    { pergunta: "6 × ? = 54", opcoes: ["9", "48", "8"], correta: 0, feedbackAcerto: "54 ÷ 6 = 9; logo 6 × 9 = 54.", feedbackErro: "Use a divisão como operação inversa da multiplicação." },
  ] },
  momento11_missaoFamilia: { titulo: "Balança de contas", materiais: ["Papel", "Lápis"], passos: ["Escreva uma igualdade verdadeira.", "Some o mesmo número aos dois lados.", "Crie uma igualdade com número desconhecido e resolva."], registro: "Fotografe as três igualdades." },
  recompensa: { xp: 220, moedas: 110 },
};
