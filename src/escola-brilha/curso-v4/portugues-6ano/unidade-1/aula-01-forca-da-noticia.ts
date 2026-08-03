import { AulaPortuguesV4 } from "../../types";

export const aula1: AulaPortuguesV4 = {
  id: "lp6-u1-a1",
  titulo: "A Força da Notícia",
  bncc: ["EF06LP01", "EF06LP02"],
  objetivo: "Analisar a estrutura e a função social de notícias e reportagens.",
  tipo: "teens",
  fase: 1,
  momento01_introducao: {
    titulo: "Extra! Extra!",
    texto: "Você já parou para pensar em como as informações chegam até nós? No 6º ano, vamos mergulhar no mundo do jornalismo.",
    imagem: "jornal-moderno",
    audio: "Bem-vindo ao 6º ano! Vamos investigar como as notícias são construídas."
  },
  momento02_explicacao: {
    titulo: "A Estrutura da Notícia",
    texto: "Uma notícia não é escrita de qualquer jeito. Ela segue a técnica da 'Pirâmide Invertida', onde o mais importante vem primeiro.",
    itens: [
      "Manchete: O título chamativo.",
      "Lide (Lead): O primeiro parágrafo que responde: Quem? O quê? Onde? Quando?",
      "Corpo: O detalhamento dos fatos."
    ],
    video: "https://example.com/noticia-6ano"
  },
  momento_ensinoVisual: {
    titulo: "O Mapa da Notícia",
    texto: "Veja como os elementos se organizam em um jornal digital.",
    tipo: "esquema",
    dados: {
      elementos: ["Manchete", "Lide", "Corpo", "Foto/Legenda"]
    }
  },
  momento03_curiosidade: {
    titulo: "Lupa do Investigador",
    texto: "Você sabia que a palavra 'Lide' vem do inglês 'Lead' (conduzir)? É ela quem conduz o leitor para o centro do acontecimento!",
    imagem: "lupa-teen"
  },
  momento04_pratica: {
    titulo: "Identificando o Lide",
    texto: "Leia este trecho e identifique qual parte responde 'Onde' e 'Quando'.",
    pergunta: "No último domingo, em Brasília, o festival de robótica reuniu 500 estudantes...",
    opcoes: ["No último domingo, em Brasília", "500 estudantes", "Festival de robótica"],
    correta: 0,
    dica: "Procure por informações de tempo e lugar.",
    reensino: "O 'Onde' indica o local (Brasília) e o 'Quando' indica o tempo (ultimo domingo)."
  },
  momento_escrita: {
    titulo: "Sua Primeira Manchete",
    textoProposta: "Crie uma manchete impactante para uma notícia sobre a descoberta de água em Marte.",
    ajuda: "Lembre-se: manchetes usam verbos no presente para dar sensação de atualidade.",
    ciclo_revisao: [
      "O verbo está no presente?",
      "É direta e objetiva?",
      "Desperta curiosidade?"
    ]
  },
  momento_fluencia: {
    texto: ["O jornalismo exige clareza e objetividade. Ao ler uma notícia, o profissional busca informar sem rodeios."],
    meta_wpm: 140
  },
  momento11_conclusao: {
    titulo: "Missão Cumprida",
    texto: "Agora você já sabe como as notícias se organizam. Na próxima aula, vamos falar sobre a opinião no jornalismo!",
    feedback: "Excelente! Você começou sua jornada no 6º ano com o olhar atento de um jornalista."
  }
};
