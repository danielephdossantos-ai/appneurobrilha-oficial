import type { AulaV4 } from "../../types";

export const aula08_planificacoes: AulaV4 = {
  slug: "u7-08-planificacoes",
  titulo: "Planificações de sólidos geométricos",
  iconeTrilha: "📦",
  bncc: ["EF05MA16"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],
  momento01_motivacao: { titulo: "Abrindo uma caixa", historia: "{NOME}, uma planificação mostra no plano todas as faces de um sólido, conectadas de modo que possam ser dobradas para reconstruí-lo." },
  momento02_exploracao: { instrucao: "Relacione os sólidos às figuras planas de suas faces.", cenas: [
    { tipo: "texto", texto: "Cubo: 6 quadrados. Prisma triangular: 2 triângulos e 3 retângulos.", destaque: true },
    { tipo: "texto", texto: "Pirâmide de base quadrada: 1 quadrado e 4 triângulos." },
  ] },
  momento03_descoberta: { perguntaGuia: "Qualquer desenho com 6 quadrados forma um cubo?", pista: "Imagine as dobras e verifique se as faces fecham sem sobreposição.", revelacao: "Não. Os quadrados precisam estar conectados numa disposição que feche as seis faces sem sobrepor nenhuma." },
  momento04_explicacao: { titulo: "Do plano para o espaço", etapas: [
    { texto: "Identifique as faces e as arestas que se encontrarão depois da dobra.", exemploReal: { contexto: "No cubo, cada quadrado é uma face e seus lados formam arestas.", destaque: "6 faces, 12 arestas e 8 vértices." } },
    { texto: "A forma das bases ajuda a reconhecer prismas e pirâmides.", exemploReal: { contexto: "Duas bases triangulares iguais e três retângulos laterais.", destaque: "Prisma triangular." } },
  ] },
  momento05_modelagem: { enunciado: "Uma planificação tem 1 quadrado e 4 triângulos ligados aos lados do quadrado.", passos: ["O quadrado forma a base.", "Os triângulos formam as faces laterais e se encontram no topo."], resposta: "Pirâmide de base quadrada" },
  momento06_praticaGuiada: { enunciado: "Quais faces formam um prisma triangular?", dica: "Procure duas bases iguais.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "2 triângulos e 3 retângulos" }, { nome: "6 quadrados" }, { nome: "1 quadrado e 4 triângulos" }, { nome: "2 círculos e 1 retângulo" }], respostaCerta: "2 triângulos e 3 retângulos", feedbackAcerto: "🎯 Duas bases e três faces laterais.", feedbackErro: "O prisma triangular possui duas bases triangulares iguais." } },
  momento07_praticaIndependente: { enunciado: "Uma planificação válida de cubo deve ter:", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "6 quadrados" }, { nome: "4 quadrados" }, { nome: "6 triângulos" }, { nome: "2 círculos" }], respostaCerta: "6 quadrados", feedbackAcerto: "🎯 Uma face para cada lado do cubo.", feedbackErro: "O cubo possui seis faces quadradas." } },
  momento08_aplicacao: { contexto: "Uma embalagem aberta mostra 2 pentágonos iguais e 5 retângulos.", problema: "Qual sólido ela forma fechada?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "Prisma pentagonal" }, { nome: "Pirâmide pentagonal" }, { nome: "Cubo" }, { nome: "Prisma triangular" }], respostaCerta: "Prisma pentagonal", feedbackAcerto: "🎯 Duas bases pentagonais iguais indicam um prisma.", feedbackErro: "Prismas têm duas bases iguais e paralelas." } },
  momento09_revisao: { pontos: ["Planificação mostra as faces de um sólido no plano.", "As faces devem fechar sem faltar nem sobrepor.", "Prismas têm duas bases iguais; pirâmides têm uma base."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "A planificação de um cubo tem:", opcoes: ["6 quadrados", "8 quadrados", "4 triângulos"], correta: 0, feedbackAcerto: "🎉 6 quadrados.", feedbackErro: "Cada quadrado corresponde a uma face." },
    { pergunta: "1 quadrado e 4 triângulos formam:", opcoes: ["pirâmide de base quadrada", "cubo", "prisma triangular"], correta: 0, feedbackAcerto: "🎉 Pirâmide.", feedbackErro: "O quadrado é a base." },
    { pergunta: "Duas bases iguais e paralelas aparecem em:", opcoes: ["prismas", "pirâmides", "círculos"], correta: 0, feedbackAcerto: "🎉 Prismas.", feedbackErro: "A pirâmide possui uma base." },
  ] },
  momento11_missaoFamilia: { titulo: "Caixa planificada", materiais: ["Caixa de papel vazia", "Papel", "Lápis"], passos: ["Observe a caixa sem rasgar nem usar objetos cortantes.", "Desenhe como suas faces poderiam ficar abertas no papel.", "Identifique faces, arestas e vértices."], registro: "📸 Foto do desenho." },
  recompensa: { xp: 220, moedas: 110 },
};
