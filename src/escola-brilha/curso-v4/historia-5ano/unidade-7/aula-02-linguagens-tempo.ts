import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-linguagens-e-tempo", titulo: "Linguagens, Tecnologias e Tempos", icone: "🗓️", bncc: ["EF05HI06", "EF05HI08"],
  tema: "comunicação e marcação do tempo em diferentes sociedades", conceito: "Sociedades registram mensagens e organizam o tempo por oralidade, escrita, imagens, calendários, ciclos naturais e tecnologias; cada sistema possui significados sociais, políticos e culturais.",
  explicacao: "Escrita não torna um povo superior. Tradições orais preservam conhecimentos; calendários indígenas e africanos podem relacionar ciclos ambientais, atividades e celebrações. Tecnologias digitais mudam velocidade e alcance da comunicação.",
  exemplo: "Uma comunidade pode marcar épocas por chuvas, floração e posição de astros, enquanto também usa calendário oficial e celular em atividades cotidianas.",
  vocabulario: ["tradição oral", "calendário", "tecnologia da comunicação"], etapas: ["Identificar a linguagem", "Reconhecer o marcador temporal", "Analisar a finalidade", "Comparar significados sociais"],
  questoes: [
    { pergunta: "Tradição oral pode preservar história?", opcoes: ["Sim, por narrativas e ensinamentos", "Não, nunca", "Só se virar aplicativo", "Apenas números contam"], correta: 0, explicacao: "Oralidade é uma forma importante de memória e transmissão." },
    { pergunta: "Como diferentes povos podem marcar o tempo?", opcoes: ["Por ciclos naturais e calendários", "De um único modo mundial", "Sem observar mudanças", "Apenas por relógio digital"], correta: 0, explicacao: "Sistemas temporais respondem a práticas e conhecimentos diversos." },
    { pergunta: "O que tecnologias digitais transformam?", opcoes: ["Velocidade e alcance das mensagens", "O passado em futuro", "Toda informação em verdade", "A existência das culturas"], correta: 0, explicacao: "A circulação muda, mas ainda requer autoria e interpretação." },
  ], missao: "Compare duas formas de comunicação e dois sistemas de marcação do tempo, explicando seus significados culturais e sociais.",
});
