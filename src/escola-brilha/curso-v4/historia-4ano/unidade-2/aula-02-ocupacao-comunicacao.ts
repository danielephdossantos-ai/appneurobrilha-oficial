import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-ocupacao-transportes-comunicacao", titulo: "Ocupação, Natureza e Conexões", icone: "🚂", bncc: ["EF04HI05", "EF04HI06"],
  tema: "ocupação do campo, natureza, transportes e comunicação", conceito: "A ocupação do campo transforma paisagens e relações com a natureza; meios de transporte e comunicação conectam territórios e mudam a circulação de pessoas, mercadorias e informações.",
  explicacao: "Estradas, ferrovias, portos e redes digitais reduzem tempos de circulação, mas podem gerar desmatamento, deslocamentos e desigualdades. Agricultura e criação também variam conforme técnicas e cuidados com solo e água.",
  exemplo: "Uma ferrovia pode escoar alimentos e aproximar cidades, mas seu traçado precisa considerar comunidades, vegetação e rios. O telégrafo e depois a internet aceleraram mensagens.",
  vocabulario: ["ocupação territorial", "transporte", "comunicação"], etapas: ["Identificar a intervenção", "Observar transformação da natureza", "Comparar tempos de circulação", "Avaliar resultados sociais e ambientais"],
  questoes: [
    { pergunta: "O que pode ocorrer com a abertura de uma estrada rural?", opcoes: ["Mudanças na paisagem e circulação", "Nenhuma transformação", "Fim de toda comunicação", "Criação automática de rios"], correta: 0, explicacao: "A intervenção altera acesso, economia e ambiente." },
    { pergunta: "Qual meio acelerou mensagens a longa distância no século XIX?", opcoes: ["Telégrafo", "Carta levada a pé apenas", "Pintura rupestre", "Relógio de areia"], correta: 0, explicacao: "O telégrafo transmitia sinais por redes elétricas." },
    { pergunta: "Como avaliar uma obra de transporte?", opcoes: ["Considerando benefícios e impactos", "Olhando só a velocidade", "Ignorando moradores", "Desprezando a natureza"], correta: 0, explicacao: "A análise histórica inclui resultados sociais e ambientais." },
  ], missao: "Compare duas intervenções no campo e dois meios de comunicação, registrando mudanças, benefícios e impactos.",
});
