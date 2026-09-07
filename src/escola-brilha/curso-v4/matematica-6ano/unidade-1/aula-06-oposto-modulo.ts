import type { AulaV4 } from "../../types";

// Nome do arquivo e da exportação preservados para manter compatibilidade.
export const aula06_opostoModulo: AulaV4 = {
  slug: "u1-06-problemas-naturais",
  titulo: "Problemas com números naturais",
  iconeTrilha: "🧠",
  bncc: ["EF06MA03"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: { titulo: "Escolher antes de calcular", historia: "{NOME}, resolver não é procurar uma palavra mágica. Primeiro entendemos a situação, depois escolhemos as operações, calculamos e conferimos se a resposta faz sentido." },
  momento02_exploracao: { instrucao: "Use quatro perguntas para organizar o raciocínio.", cenas: [
    { tipo: "tabela", titulo: "Rota da resolução", cabecalhos: ["Etapa", "Pergunta"], linhas: [
      { rotulo: "1", valores: ["Entender", "O que já sei?"] }, { rotulo: "2", valores: ["Descobrir", "O que preciso encontrar?"] }, { rotulo: "3", valores: ["Planejar", "Como as quantidades se relacionam?"] }, { rotulo: "4", valores: ["Conferir", "A resposta faz sentido?"] },
    ] },
    { tipo: "texto", texto: "A mesma palavra pode aparecer em problemas diferentes. Leia a relação entre as quantidades.", destaque: true },
  ] },
  momento03_descoberta: { perguntaGuia: "Uma biblioteca tinha 1.250 livros, recebeu 375 e doou 120. Quantos ficaram?", pista: "Primeiro entram 375; depois saem 120.", revelacao: "1.250 + 375 = 1.625; 1.625 − 120 = 1.505 livros." },
  momento04_explicacao: { titulo: "Cálculo exato e estimativa", etapas: [
    { texto: "Modele a história com uma expressão.", exemploReal: { contexto: "1.250 + 375 − 120", destaque: "A expressão registra a ordem dos acontecimentos." } },
    { texto: "Estime antes para prever a grandeza.", exemploReal: { contexto: "1.250 ≈ 1.300; 375 ≈ 400; 120 ≈ 100.", destaque: "O resultado deve ficar perto de 1.600." } },
    { texto: "Calcule e verifique.", exemploReal: { contexto: "1.250 + 375 − 120 = 1.505.", destaque: "1.505 está perto da estimativa; o resultado é coerente." } },
  ] },
  momento05_modelagem: { enunciado: "Uma escola comprou 24 caixas com 36 lápis em cada uma e distribuiu 640. Quantos sobraram?", resposta: "224 lápis", passos: ["24 × 36 = 864 lápis.", "864 − 640 = 224 lápis.", "Conferência: 640 + 224 = 864."], visualMat: { tipo: "tabela", cabecalhos: ["Ação", "Cálculo", "Resultado"], linhas: [{ rotulo: "Comprar", valores: ["24 × 36", "864"] }, { rotulo: "Distribuir", valores: ["864 − 640", "224"] }] } },
  momento06_praticaGuiada: { enunciado: "945 cadernos foram divididos igualmente em 9 armários. Quantos em cada armário?", dica: "Divida o total pelo número de grupos iguais.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "105" }, { nome: "95" }, { nome: "115" }, { nome: "936" }], respostaCerta: "105", feedbackAcerto: "🎯 945 ÷ 9 = 105.", feedbackErro: "9 × 105 = 945." } },
  momento07_praticaIndependente: { enunciado: "Um auditório tem 18 fileiras com 25 lugares. Se 387 foram ocupados, quantos ficaram vazios?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "63" }, { nome: "450" }, { nome: "362" }, { nome: "43" }], respostaCerta: "63", feedbackAcerto: "🎯 18 × 25 = 450; 450 − 387 = 63.", feedbackErro: "Calcule o total e retire os lugares ocupados." } },
  momento08_aplicacao: { contexto: "Uma campanha separou 2.760 livros em caixas de 40.", problema: "Quantas caixas completas foram preenchidas?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "69 caixas" }, { nome: "68 caixas" }, { nome: "70 caixas" }, { nome: "27 caixas" }], respostaCerta: "69 caixas", feedbackAcerto: "🎯 2.760 ÷ 40 = 69.", feedbackErro: "40 × 69 = 2.760." } },
  momento09_revisao: { pontos: ["Entenda os dados e a pergunta antes de operar.", "Estime para prever a grandeza.", "Calcule e confira pela operação inversa ou pelo contexto."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "32 pacotes com 15 figurinhas totalizam:", opcoes: ["480", "470", "47", "2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "32 × 15 = 480." },
    { pergunta: "1.200 itens divididos em 30 grupos iguais:", opcoes: ["40", "30", "400", "1.170"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1.200 ÷ 30 = 40." },
    { pergunta: "Uma estimativa serve para:", opcoes: ["Prever e conferir a grandeza", "Substituir sempre o cálculo exato", "Escolher ao acaso", "Apagar os dados"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Ela ajuda a avaliar se o resultado é razoável." },
  ] },
  momento11_missaoFamilia: { titulo: "Problema do cotidiano", materiais: ["Papel e lápis"], passos: ["Crie um problema com duas operações e números naturais.", "Resolva mostrando dados, plano, cálculo e conferência.", "Peça a alguém da família para conferir."], registro: "📸 Foto da resolução." },
  recompensa: { xp: 170, moedas: 90 },
};
