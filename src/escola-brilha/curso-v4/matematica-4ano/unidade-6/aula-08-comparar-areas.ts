import type { AulaV4 } from "../../types";

export const aula08_compararAreas: AulaV4 = {
  slug: "u6-08-comparar-areas",
  titulo: "Comparar áreas com quadradinhos",
  iconeTrilha: "🟦",
  bncc: ["EF04MA21"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp", "rme"],
  momento01_motivacao: { titulo: "Quanto espaço ocupa?", historia: "{NOME}, área é a medida da superfície ocupada por uma figura. Vamos cobrir figuras com quadradinhos iguais para descobrir qual ocupa mais espaço." },
  momento02_exploracao: { instrucao: "Conte unidades de área, sem deixar espaços nem sobrepor.", cenas: [
    { tipo: "texto", texto: "Uma figura coberta por 12 quadradinhos iguais tem área de 12 unidades quadradas.", destaque: true },
    { tipo: "texto", texto: "Para comparar corretamente, os quadradinhos usados nas duas figuras precisam ter o mesmo tamanho." },
  ] },
  momento03_descoberta: { perguntaGuia: "Uma figura mais comprida sempre tem área maior?", pista: "Cubra as duas com quadradinhos iguais e conte.", revelacao: "Não. O formato pode mudar sem mudar a área. A comparação depende da superfície coberta, não apenas do comprimento." },
  momento04_explicacao: { titulo: "Medir e comparar", etapas: [
    { texto: "Cubra cada figura usando a mesma unidade de área.", exemploReal: { contexto: "Figura A cobre 8 quadradinhos; figura B cobre 10.", destaque: "A figura B tem área maior." } },
    { texto: "Também podemos recortar uma figura e sobrepô-la à outra para comparar.", exemploReal: { contexto: "Se uma figura cabe dentro da outra e ainda sobra espaço, a de fora tem área maior.", destaque: "Sobreposição ajuda a comparar superfícies." } },
  ] },
  momento05_modelagem: { enunciado: "Um retângulo ocupa 3 fileiras de 4 quadradinhos.", passos: ["Conte 4 em cada fileira.", "São 3 fileiras: 4 + 4 + 4 = 12."], resposta: "12 unidades quadradas" },
  momento06_praticaGuiada: { enunciado: "A figura A cobre 9 quadradinhos e a B cobre 11 iguais. Qual tem maior área?", dica: "Compare as quantidades da mesma unidade.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "Figura B" }, { nome: "Figura A" }, { nome: "Áreas iguais" }, { nome: "Não é possível comparar" }], respostaCerta: "Figura B", feedbackAcerto: "🎯 11 unidades ocupam mais espaço que 9.", feedbackErro: "Os quadradinhos são iguais; compare 9 e 11." } },
  momento07_praticaIndependente: { enunciado: "Duas figuras diferentes cobrem 8 quadradinhos iguais cada uma. Como são suas áreas?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "São iguais" }, { nome: "A primeira é maior" }, { nome: "A segunda é maior" }, { nome: "Depende do formato" }], respostaCerta: "São iguais", feedbackAcerto: "🎯 Formatos diferentes podem ter a mesma área.", feedbackErro: "As duas cobrem 8 unidades iguais." } },
  momento08_aplicacao: { contexto: "Dois tapetes foram desenhados na mesma malha. Um cobre 15 quadrados e outro, 12.", problema: "Qual tapete cobre mais chão?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "O de 15 quadrados" }, { nome: "O de 12 quadrados" }, { nome: "Cobrem igual" }, { nome: "Nenhum" }], respostaCerta: "O de 15 quadrados", feedbackAcerto: "🎯 Ele cobre 3 unidades quadradas a mais.", feedbackErro: "Compare 15 com 12." } },
  momento09_revisao: { pontos: ["Área mede a superfície ocupada.", "Compare usando unidades do mesmo tamanho.", "Figuras diferentes podem ter áreas iguais."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "Uma figura cobre 14 quadradinhos iguais. Sua área é:", opcoes: ["14 unidades quadradas", "14 unidades de comprimento", "28 unidades quadradas"], correta: 0, feedbackAcerto: "🎉 14 unidades quadradas.", feedbackErro: "Conte a superfície coberta." },
    { pergunta: "A cobre 7 quadrados e B cobre 9 iguais. Maior área?", opcoes: ["B", "A", "Iguais"], correta: 0, feedbackAcerto: "🎉 B.", feedbackErro: "9 é maior que 7." },
    { pergunta: "Para comparar áreas por malha, as unidades devem ser:", opcoes: ["do mesmo tamanho", "de cores iguais", "de formatos diferentes"], correta: 0, feedbackAcerto: "🎉 Mesmo tamanho.", feedbackErro: "A unidade de comparação precisa ser a mesma." },
  ] },
  momento11_missaoFamilia: { titulo: "Mosaico de áreas", materiais: ["Papel quadriculado", "Lápis"], passos: ["Desenhe duas figuras diferentes com 12 quadradinhos cada.", "Pinte e confirme que as áreas são iguais."], registro: "📸 Foto das duas figuras." },
  recompensa: { xp: 220, moedas: 110 },
};
