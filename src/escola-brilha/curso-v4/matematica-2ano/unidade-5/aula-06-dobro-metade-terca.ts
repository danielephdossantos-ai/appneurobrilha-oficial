import type { AulaV4 } from "../../types";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";

export const aula06_dobroMetadeTerca: AulaV4 = {
  slug: "u5-06-dobro-metade-terca",
  titulo: "Dobro, Triplo, Metade e Terça Parte",
  iconeTrilha: "✌️",
  bncc: ["EF02MA08"],
  duracaoMin: 25,
  momento01_motivacao: { titulo: "A Partilha Justa", historia: "Brilha precisa repetir grupos e repartir coleções em partes iguais. Vamos descobrir dobro, triplo, metade e terça parte?", imagemUrl: estrela },
  momento02_exploracao: { instrucao: "Observe dois grupos de 4 estrelas e três grupos de 2 maçãs.", cenas: [
    { tipo: "grupoItens", imagemUrl: estrela, quantidade: 4, rotulo: "4" },
    { tipo: "grupoItens", imagemUrl: estrela, quantidade: 4, rotulo: "mais 4" },
    { tipo: "grupoItens", imagemUrl: maca, quantidade: 2, rotulo: "2" },
    { tipo: "grupoItens", imagemUrl: maca, quantidade: 2, rotulo: "mais 2" },
    { tipo: "grupoItens", imagemUrl: maca, quantidade: 2, rotulo: "mais 2" },
  ] },
  momento03_descoberta: { perguntaGuia: "O que muda quando repetimos ou repartimos grupos iguais?", pista: "Dobro usa 2 grupos iguais; triplo usa 3. Metade reparte em 2; terça parte reparte em 3.", revelacao: "Dobro de 4 = 8; triplo de 2 = 6. Metade de 8 = 4; terça parte de 6 = 2." },
  momento04_explicacao: { titulo: "Grupos iguais e partilhas iguais", etapas: [
    { texto: "Dobro é duas vezes a quantidade.", exemplo: "4 + 4 = 8." },
    { texto: "Triplo é três vezes a quantidade.", exemplo: "2 + 2 + 2 = 6." },
    { texto: "Metade é uma das duas partes iguais.", exemplo: "8 repartido em 2 grupos: 4 em cada." },
    { texto: "Terça parte é uma das três partes iguais.", exemplo: "6 repartido em 3 grupos: 2 em cada." },
  ] },
  momento05_modelagem: { enunciado: "EU FAÇO — terça parte de 12", passos: ["Formo 3 grupos iguais.", "Distribuo 12 itens: um para cada grupo por vez.", "Cada grupo recebe 4."], resposta: "A terça parte de 12 é 4.", visualUrl: maca },
  momento06_praticaGuiada: { enunciado: "NÓS FAZEMOS — qual é a metade de 10?", dica: "Faça dois grupos iguais.", interacao: { tipo: "contarQuiz", grupos: [{ imagemUrl: estrela, quantidade: 5, rotulo: "Parte 1" }, { imagemUrl: estrela, quantidade: 5, rotulo: "Parte 2" }], pergunta: "Quanto fica em cada parte?", opcoes: ["4", "5", "6"], correta: 1, feedbackAcerto: "Isso! 5 + 5 = 10.", feedbackErro: "Reparta 10 igualmente em dois grupos." } },
  momento07_praticaIndependente: { enunciado: "VOCÊ FAZ — qual é o triplo de 3?", interacao: { tipo: "contarQuiz", grupos: [{ imagemUrl: maca, quantidade: 3 }, { imagemUrl: maca, quantidade: 3 }, { imagemUrl: maca, quantidade: 3 }], pergunta: "3 + 3 + 3 = ?", opcoes: ["6", "9", "12"], correta: 1, feedbackAcerto: "Triplo de 3 é 9.", feedbackErro: "Some os três grupos iguais." } },
  momento08_aplicacao: { contexto: "Há 12 frutas para três cestas iguais.", problema: "Quantas frutas ficam em cada cesta?", interacao: { tipo: "contarQuiz", grupos: [{ imagemUrl: maca, quantidade: 4, rotulo: "Cada cesta" }], pergunta: "Qual é a terça parte de 12?", opcoes: ["3", "4", "6"], correta: 1, feedbackAcerto: "12 repartido em 3 partes dá 4.", feedbackErro: "Faça três grupos iguais." } },
  momento09_revisao: { pontos: ["Dobro: 2 grupos iguais.", "Triplo: 3 grupos iguais.", "Metade: repartir em 2 partes iguais.", "Terça parte: repartir em 3 partes iguais."], miniDesafio: { tipo: "contarQuiz", grupos: [{ imagemUrl: estrela, quantidade: 6 }], pergunta: "Metade de 12?", opcoes: ["4", "6", "8"], correta: 1, feedbackAcerto: "Certo: 6.", feedbackErro: "6 + 6 = 12." } },
  momento10_avaliacao: { perguntas: [
    { pergunta: "Dobro de 5?", opcoes: ["7", "10", "15"], correta: 1, feedbackAcerto: "5 + 5 = 10.", feedbackErro: "Use dois grupos de 5." },
    { pergunta: "Triplo de 4?", opcoes: ["8", "12", "16"], correta: 1, feedbackAcerto: "4 + 4 + 4 = 12.", feedbackErro: "Use três grupos de 4." },
    { pergunta: "Metade de 14?", opcoes: ["6", "7", "8"], correta: 1, feedbackAcerto: "7 + 7 = 14.", feedbackErro: "Divida em 2 grupos iguais." },
    { pergunta: "Terça parte de 15?", opcoes: ["3", "5", "6"], correta: 1, feedbackAcerto: "5 + 5 + 5 = 15.", feedbackErro: "Divida em 3 grupos iguais." },
    { pergunta: "Qual história representa metade?", opcoes: ["Repetir 2 vezes", "Repartir em 2 partes iguais", "Repartir em 3"], correta: 1, feedbackAcerto: "Metade é uma de duas partes iguais.", feedbackErro: "Procure duas partes iguais." },
  ] },
  momento11_missaoFamilia: { titulo: "Partilhas em casa", materiais: ["12 objetos seguros"], passos: ["Formem o dobro de 3.", "Separem 12 em duas partes iguais.", "Separem 12 em três partes iguais."], registro: "Desenho dos grupos formados." },
  recompensa: { xp: 240, moedas: 120, medalha: "Mestre das Partes Iguais" },
};
