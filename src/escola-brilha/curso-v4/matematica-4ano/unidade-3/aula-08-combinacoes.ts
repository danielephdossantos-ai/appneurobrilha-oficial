import type { AulaV4 } from "../../types";

export const aula08_combinacoes: AulaV4 = {
  slug: "u3-08-combinacoes",
  titulo: "Quantas Combinações São Possíveis?",
  iconeTrilha: "🧩",
  bncc: ["EF04MA08"],
  duracaoMin: 22,
  metodologias: ["cpa", "vergnaud", "skemp"],
  momento01_motivacao: { titulo: "Montando escolhas", historia: "Há 3 camisetas e 2 bermudas disponíveis. Quantos conjuntos diferentes podem ser formados escolhendo uma peça de cada tipo?" },
  momento02_exploracao: { instrucao: "Organize todas as possibilidades sem repetir nem esquecer.", cenas: [{ tipo: "texto", texto: "Camiseta A: A1, A2" }, { tipo: "texto", texto: "Camiseta B: B1, B2" }, { tipo: "texto", texto: "Camiseta C: C1, C2", destaque: true }] },
  momento03_descoberta: { perguntaGuia: "Como contar sem listar tudo quando há muitas escolhas?", pista: "Cada uma das 3 camisetas combina com as 2 bermudas.", revelacao: "Multiplicamos as quantidades de opções independentes: 3 × 2 = 6 combinações." },
  momento04_explicacao: { titulo: "Princípio multiplicativo", etapas: [
    { texto: "Construa uma árvore ou tabela para enxergar todas as possibilidades.", exemploReal: { contexto: "2 sabores e 3 coberturas geram seis pares diferentes.", destaque: "2 × 3 = 6." } },
    { texto: "Multiplique o número de escolhas de cada etapa.", exemploReal: { contexto: "4 caminhos de ida e 2 caminhos de volta.", destaque: "4 × 2 = 8 maneiras de fazer o percurso." } },
  ] },
  momento05_modelagem: { enunciado: "Uma senha visual usa 1 de 3 formas e 1 de 4 cores. Quantas combinações?", passos: ["Cada forma pode receber 4 cores.", "São 3 grupos de 4.", "3 × 4 = 12."], resposta: "12 combinações" },
  momento06_praticaGuiada: { enunciado: "Há 2 tipos de pão e 3 recheios.", dica: "Cada pão combina com todos os recheios.", interacao: { tipo: "escolhaVisual", pergunta: "Quantos sanduíches diferentes?", opcoes: [{ nome: "6" }, { nome: "5" }, { nome: "8" }], respostaCerta: "6", feedbackAcerto: "Duas escolhas de pão vezes três recheios formam 6 combinações.", feedbackErro: "Liste os três recheios para cada um dos dois pães: 2 × 3 = 6." } },
  momento07_praticaIndependente: { enunciado: "Uma bandeira usa uma de 4 cores e um de 2 símbolos.", interacao: { tipo: "escolhaVisual", pergunta: "Quantas bandeiras diferentes?", opcoes: [{ nome: "8" }, { nome: "6" }, { nome: "4" }], respostaCerta: "8", feedbackAcerto: "Quatro cores vezes dois símbolos formam 8 bandeiras.", feedbackErro: "Cada cor combina com os dois símbolos: 4 × 2 = 8." } },
  momento08_aplicacao: { contexto: "Um passeio oferece 3 horários e 2 pontos de partida.", problema: "Quantas escolhas diferentes existem?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "6" }, { nome: "5" }, { nome: "3" }], respostaCerta: "6", feedbackAcerto: "Cada horário combina com dois pontos: 3 × 2 = 6.", feedbackErro: "Organize dois pontos para cada um dos três horários." } },
  momento09_revisao: { pontos: ["Identifique as etapas de escolha.", "Conte as opções de cada etapa.", "Multiplique sem repetir combinações."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "3 sucos e 4 tamanhos formam quantas escolhas?", opcoes: ["12", "7", "16"], correta: 0, feedbackAcerto: "Três sabores vezes quatro tamanhos formam 12 escolhas.", feedbackErro: "Cada sabor aparece nos quatro tamanhos: 3 × 4 = 12." },
    { pergunta: "2 capas e 5 adesivos formam quantas combinações?", opcoes: ["10", "7", "12"], correta: 0, feedbackAcerto: "Duas capas vezes cinco adesivos formam 10 combinações.", feedbackErro: "São cinco opções para cada uma das duas capas: 2 × 5 = 10." },
    { pergunta: "4 entradas e 3 saídas permitem quantos percursos?", opcoes: ["12", "7", "9"], correta: 0, feedbackAcerto: "Quatro entradas vezes três saídas formam 12 percursos.", feedbackErro: "Cada entrada pode ser combinada com três saídas: 4 × 3 = 12." },
  ] },
  momento11_missaoFamilia: { titulo: "Tabela de combinações", materiais: ["Papel", "Lápis"], passos: ["Escolha duas categorias de objetos.", "Liste 2 opções na primeira e 3 na segunda.", "Desenhe as 6 combinações."], registro: "Fotografe a tabela completa." },
  recompensa: { xp: 220, moedas: 110 },
};
