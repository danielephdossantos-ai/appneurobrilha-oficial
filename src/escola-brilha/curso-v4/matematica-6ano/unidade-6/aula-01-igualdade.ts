import type { AulaV4 } from "../../types";

export const aula01_igualdade: AulaV4 = {
  slug: "u6-01-propriedades-igualdade", titulo: "Igualdade em equilíbrio", iconeTrilha: "⚖️",
  bncc: ["EF06MA14"], duracaoMin: 22, metodologias: ["cpa", "skemp"],
  momento01_motivacao: { titulo: "Os dois lados precisam continuar iguais", historia: "{NOME}, uma igualdade funciona como uma balança: alterar somente um lado quebra o equilíbrio. Vamos descobrir quais transformações preservam a igualdade." },
  momento02_exploracao: { instrucao: "Observe o que acontece nos dois membros.", cenas: [
    { tipo: "texto", texto: "Se 8 + 4 = 12, então 8 + 4 + 3 = 12 + 3. Somar a mesma quantidade aos dois membros preserva a igualdade.", destaque: true },
    { tipo: "tabela", titulo: "Transformações equivalentes", cabecalhos: ["Igualdade", "Transformação", "Nova igualdade"], linhas: [
      { rotulo: "12 = 12", valores: ["12 = 12", "+5 nos dois membros", "17 = 17"] },
      { rotulo: "20 = 20", valores: ["20 = 20", "÷4 nos dois membros", "5 = 5"] },
    ] },
  ] },
  momento03_descoberta: { perguntaGuia: "Se 15 = 15, o que ocorre ao subtrair 6 dos dois membros?", pista: "Faça a mesma conta em cada lado.", revelacao: "15 − 6 = 15 − 6, portanto 9 = 9. A igualdade permanece verdadeira." },
  momento04_explicacao: { titulo: "Propriedades da igualdade", etapas: [
    { texto: "Somar ou subtrair o mesmo número nos dois membros preserva a igualdade.", exemploReal: { contexto: "x + 7 = 19; subtraia 7 dos dois membros.", destaque: "x + 7 − 7 = 19 − 7; logo x = 12." } },
    { texto: "Multiplicar os dois membros pelo mesmo número preserva a igualdade.", exemploReal: { contexto: "4 = 4; multiplicando ambos por 3.", destaque: "12 = 12." } },
    { texto: "Dividir os dois membros pelo mesmo número não nulo preserva a igualdade.", exemploReal: { contexto: "5x = 35; divida ambos por 5.", destaque: "x = 7. Não se divide por zero." } },
  ] },
  momento05_modelagem: { enunciado: "Determine x em x + 9 = 23.", resposta: "x = 14", passos: ["Subtraia 9 dos dois membros.", "x + 9 − 9 = 23 − 9.", "x = 14; confira: 14 + 9 = 23."] },
  momento06_praticaGuiada: { enunciado: "Determine x em x − 6 = 11.", dica: "Some 6 aos dois membros.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "17" }, { nome: "5" }, { nome: "66" }, { nome: "11" }], respostaCerta: "17", feedbackAcerto: "🎯 x − 6 + 6 = 11 + 6.", feedbackErro: "A mesma transformação precisa ocorrer nos dois membros." } },
  momento07_praticaIndependente: { enunciado: "Determine x em 4x = 28.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "7" }, { nome: "24" }, { nome: "32" }, { nome: "112" }], respostaCerta: "7", feedbackAcerto: "🎯 Divida os dois membros por 4.", feedbackErro: "4x ÷ 4 = 28 ÷ 4." } },
  momento08_aplicacao: { contexto: "Uma caixa e 5 livros pesam juntos 17 kg. Os 5 livros pesam 5 kg.", problema: "Qual é a massa da caixa?", interacao: { tipo: "escolhaVisual", pergunta: "x + 5 = 17:", opcoes: [{ nome: "12 kg" }, { nome: "22 kg" }, { nome: "5 kg" }, { nome: "17 kg" }], respostaCerta: "12 kg", feedbackAcerto: "🎯 Subtraindo 5 dos dois membros, x = 12.", feedbackErro: "17 − 5 = 12." } },
  momento09_revisao: { pontos: ["Uma igualdade possui dois membros.", "Faça a mesma operação nos dois membros.", "Na divisão, o divisor não pode ser zero.", "Sempre substitua o resultado para conferir."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "x + 8 = 20:", opcoes: ["12", "28", "8", "160"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Subtraia 8 dos dois membros." },
    { pergunta: "3x = 24:", opcoes: ["8", "21", "27", "72"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Divida os dois membros por 3." },
    { pergunta: "Qual ação preserva 10 = 10?", opcoes: ["Somar 4 nos dois membros", "Somar 4 em apenas um membro", "Apagar um membro", "Dividir somente o lado esquerdo"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "A transformação deve ser igual nos dois membros." },
  ] },
  momento11_missaoFamilia: { titulo: "Balança de igualdades", materiais: ["Papel e lápis"], passos: ["Crie três igualdades com valor desconhecido.", "Resolva registrando a operação nos dois membros.", "Confira substituindo o valor encontrado."], registro: "📸 Foto das resoluções." },
  recompensa: { xp: 170, moedas: 90 },
};
