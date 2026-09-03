import type { AulaV4 } from "../../types";

export const aula08_padroesRestos: AulaV4 = {
  slug: "u4-08-padroes-restos",
  titulo: "Famílias com o Mesmo Resto",
  iconeTrilha: "🔍",
  bncc: ["EF04MA12"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],
  momento01_motivacao: { titulo: "O padrão das sobras", historia: "Ao dividir números por 4, alguns deixam resto 0, outros resto 1, 2 ou 3. Esses restos formam famílias com padrões regulares." },
  momento02_exploracao: { instrucao: "Divida por 4 e observe os restos.", cenas: [{ tipo: "texto", texto: "4, 8, 12, 16 → resto 0" }, { tipo: "texto", texto: "5, 9, 13, 17 → resto 1", destaque: true }, { tipo: "texto", texto: "6, 10, 14, 18 → resto 2" }] },
  momento03_descoberta: { perguntaGuia: "O que acontece quando somamos 4 a um número?", pista: "Acrescentamos um grupo completo do divisor.", revelacao: "Somar o divisor não muda o resto; por isso números separados por 4 pertencem à mesma família de resto." },
  momento04_explicacao: { titulo: "Regularidade dos restos", etapas: [
    { texto: "O resto é sempre menor que o divisor.", exemploReal: { contexto: "Na divisão por 4, os únicos restos possíveis são 0, 1, 2 e 3.", destaque: "Resto 4 formaria outro grupo completo." } },
    { texto: "Números que diferem pelo divisor deixam o mesmo resto.", exemploReal: { contexto: "7 ÷ 4 deixa resto 3; 11 ÷ 4 também deixa resto 3.", destaque: "7, 11, 15 e 19 formam uma família." } },
  ] },
  momento05_modelagem: { enunciado: "Encontre três números que deixam resto 2 na divisão por 5.", passos: ["Comece em 2.", "Some 5 a cada passo: 2, 7, 12.", "Confira: todos deixam resto 2."], resposta: "2, 7 e 12" },
  momento06_praticaGuiada: { enunciado: "6 e 10 deixam qual resto ao dividir por 4?", dica: "4 cabe uma vez em 6 e duas vezes em 10.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "Resto 2" }, { nome: "Resto 1" }, { nome: "Resto 0" }], respostaCerta: "Resto 2", feedbackAcerto: "6 = 4 + 2 e 10 = 8 + 2; ambos deixam resto 2.", feedbackErro: "Retire grupos completos de 4 e observe que sobram 2 unidades." } },
  momento07_praticaIndependente: { enunciado: "Qual número pertence à família de resto 1 na divisão por 3?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "10" }, { nome: "9" }, { nome: "11" }], respostaCerta: "10", feedbackAcerto: "10 = 3 × 3 + 1, então o resto é 1.", feedbackErro: "Divida cada opção por 3; 10 deixa exatamente uma unidade." } },
  momento08_aplicacao: { contexto: "Objetos serão colocados em caixas de 6.", problema: "Qual quantidade deixa resto 2?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "20" }, { nome: "18" }, { nome: "23" }], respostaCerta: "20", feedbackAcerto: "20 = 3 × 6 + 2; sobram 2 objetos.", feedbackErro: "Retire grupos de 6: de 20, sobram 2." } },
  momento09_revisao: { pontos: ["Resto menor que divisor.", "Somar o divisor conserva o resto.", "Famílias de restos formam sequências regulares."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "Qual deixa resto 1 ao dividir por 4?", opcoes: ["13", "12", "14"], correta: 0, feedbackAcerto: "13 = 3 × 4 + 1.", feedbackErro: "Procure um múltiplo de 4 e veja quanto sobra." },
    { pergunta: "Dividindo por 5, quais restos são possíveis?", opcoes: ["0, 1, 2, 3 e 4", "1, 2, 3, 4 e 5", "Somente 0"], correta: 0, feedbackAcerto: "Os restos vão de 0 até um a menos que o divisor 5.", feedbackErro: "O resto precisa ser menor que 5." },
    { pergunta: "8, 11, 14 e 17 deixam qual resto ao dividir por 3?", opcoes: ["2", "1", "0"], correta: 0, feedbackAcerto: "Cada número é dois a mais que um múltiplo de 3.", feedbackErro: "8 = 6 + 2; somar 3 mantém o resto 2." },
  ] },
  momento11_missaoFamilia: { titulo: "Tabela dos restos", materiais: ["Papel", "Lápis"], passos: ["Escolha um divisor entre 3 e 5.", "Divida dez números consecutivos.", "Agrupe os que deixam o mesmo resto."], registro: "Fotografe as famílias encontradas." },
  recompensa: { xp: 220, moedas: 110 },
};
