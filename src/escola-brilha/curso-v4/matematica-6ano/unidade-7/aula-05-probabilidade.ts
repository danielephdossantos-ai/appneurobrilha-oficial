import type { AulaV4 } from "../../types";

export const aula05_probabilidade: AulaV4 = {
  slug: "u7-05-probabilidade", titulo: "Probabilidade por possibilidades", iconeTrilha: "🎲",
  bncc: ["EF06MA30"], duracaoMin: 22, metodologias: ["cpa", "skemp"],
  momento01_motivacao: { titulo: "O que pode acontecer?", historia: "{NOME}, probabilidade compara resultados favoráveis com todos os resultados possíveis de uma experiência. Não é adivinhação: primeiro descrevemos o espaço amostral." },
  momento02_exploracao: { instrucao: "Liste todos os resultados possíveis antes de calcular.", cenas: [
    { tipo: "texto", texto: "Em um dado comum, o espaço amostral é {1, 2, 3, 4, 5, 6}. Todos os seis resultados têm a mesma chance.", destaque: true },
    { tipo: "tabela", titulo: "Resultado par no dado", cabecalhos: ["Possíveis", "Favoráveis", "Probabilidade"], linhas: [{ rotulo: "Dado", valores: ["1, 2, 3, 4, 5, 6", "2, 4, 6", "3/6 = 1/2"] }] },
  ] },
  momento03_descoberta: { perguntaGuia: "Qual é a probabilidade de sortear uma ficha azul em uma caixa com 3 azuis e 2 verdes?", pista: "São 3 resultados favoráveis entre 5 fichas.", revelacao: "P(azul) = 3/5 = 0,6 = 60%, supondo fichas com a mesma chance de serem retiradas." },
  momento04_explicacao: { titulo: "Possíveis, favoráveis e chance", etapas: [
    { texto: "Espaço amostral é o conjunto de todos os resultados possíveis.", exemploReal: { contexto: "Moeda: cara ou coroa.", destaque: "Há dois resultados possíveis." } },
    { texto: "Em resultados equiprováveis, P(evento) = favoráveis ÷ possíveis.", exemploReal: { contexto: "No dado, sair número maior que 4: {5, 6}.", destaque: "2/6 = 1/3." } },
    { texto: "A probabilidade varia de 0 a 1, ou de 0% a 100%.", exemploReal: { contexto: "Impossível = 0; certo = 1.", destaque: "Quanto maior a probabilidade, maior a chance do evento." } },
  ] },
  momento05_modelagem: { enunciado: "Uma sacola tem cartões numerados de 1 a 10. Qual é a probabilidade de retirar um múltiplo de 3?", resposta: "3/10 = 30%", passos: ["Possíveis: 10 cartões.", "Favoráveis: 3, 6 e 9.", "P = 3/10 = 0,3 = 30%."] },
  momento06_praticaGuiada: { enunciado: "No dado, qual é a probabilidade de sair 6?", dica: "Um resultado favorável entre seis possíveis.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "1/6" }, { nome: "1/2" }, { nome: "5/6" }, { nome: "6" }], respostaCerta: "1/6", feedbackAcerto: "🎯 Apenas a face 6 é favorável.", feedbackErro: "Conte os resultados favoráveis e todos os possíveis." } },
  momento07_praticaIndependente: { enunciado: "Uma roleta tem quatro setores iguais: azul, verde, amarelo e vermelho. Probabilidade de azul ou verde?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "2/4 = 1/2" }, { nome: "1/4" }, { nome: "3/4" }, { nome: "4/2" }], respostaCerta: "2/4 = 1/2", feedbackAcerto: "🎯 Dois setores favoráveis em quatro.", feedbackErro: "Azul e verde são dois resultados favoráveis." } },
  momento08_aplicacao: { contexto: "Há 8 cartões iguais, numerados de 1 a 8.", problema: "Qual é a probabilidade de sortear um número ímpar?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "4/8 = 1/2" }, { nome: "3/8" }, { nome: "1/8" }, { nome: "8/4" }], respostaCerta: "4/8 = 1/2", feedbackAcerto: "🎯 Ímpares: 1, 3, 5 e 7.", feedbackErro: "Liste os quatro ímpares entre os oito cartões." } },
  momento09_revisao: { pontos: ["Liste o espaço amostral.", "Conte os resultados favoráveis.", "Em casos equiprováveis, divida favoráveis por possíveis.", "Confira se a resposta fica entre 0 e 1."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "Evento impossível tem probabilidade:", opcoes: ["0", "1", "1/2", "100"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Impossível corresponde a zero." },
    { pergunta: "Cara em uma moeda equilibrada:", opcoes: ["1/2", "1/3", "2", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Um favorável em dois possíveis." },
    { pergunta: "Número menor que 7 em um dado comum:", opcoes: ["1", "1/6", "5/6", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Todos os seis resultados são menores que 7." },
  ] },
  momento11_missaoFamilia: { titulo: "Experimento com fichas", materiais: ["Quatro fichas de papel numeradas de 1 a 4", "Um recipiente"], passos: ["Preveja a probabilidade de retirar um número par.", "Faça 20 retiradas, devolvendo a ficha após cada uma.", "Compare a frequência observada com a probabilidade prevista."], registro: "📸 Foto da tabela de resultados." },
  recompensa: { xp: 180, moedas: 95 },
};
