import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula05 = criarAulaConsolidacao({
  slug: "aula-05-niveis-de-organizacao", titulo: "Níveis de Organização do Corpo", icone: "🧬", bncc: ["EF06CI06"],
  tema: "organização dos organismos", conceito: "Células semelhantes formam tecidos; tecidos formam órgãos; órgãos integrados formam sistemas; os sistemas constituem o organismo.",
  explicacao: "Cada nível possui funções próprias e depende dos demais. Células musculares formam tecido muscular, que participa de órgãos e sistemas responsáveis pelo movimento.",
  exemplo: "Célula muscular → tecido muscular → coração → sistema circulatório → organismo.",
  vocabulario: ["célula", "órgão", "sistema"], etapas: ["Célula", "Tecido", "Órgão", "Sistema e organismo"],
  questoes: [
    { pergunta: "Um conjunto de células semelhantes forma:", opcoes: ["Tecido", "Sistema", "Organismo", "Planeta"], correta: 0, explicacao: "Células semelhantes e coordenadas formam tecidos." },
    { pergunta: "Qual sequência vai do nível mais simples ao mais complexo?", opcoes: ["Célula, tecido, órgão, sistema", "Órgão, célula, sistema, tecido", "Sistema, tecido, célula, órgão", "Tecido, sistema, órgão, célula"], correta: 0, explicacao: "Os níveis se integram progressivamente." },
    { pergunta: "Por que um organismo é um arranjo complexo?", opcoes: ["Seus sistemas trabalham integrados", "Cada órgão funciona sempre sozinho", "Todos os tecidos são iguais", "Possui apenas um tipo de célula"], correta: 0, explicacao: "A vida depende da integração entre diferentes níveis e sistemas." },
  ], missao: "Monte um modelo relacionando célula, tecido, órgão, sistema e organismo.",
});

export const aula06 = criarAulaConsolidacao({
  slug: "aula-06-visao-e-lentes-corretivas", titulo: "Visão e Lentes Corretivas", icone: "👁️", bncc: ["EF06CI08"],
  tema: "funcionamento da visão", conceito: "O olho capta luz e forma imagens na retina; o nervo óptico leva sinais ao cérebro, que os interpreta.",
  explicacao: "Córnea e cristalino desviam a luz para focalizá-la na retina. Na miopia, lentes divergentes ajudam a focalizar objetos distantes; na hipermetropia, lentes convergentes ajudam a focalizar objetos próximos. A indicação correta depende de avaliação profissional.",
  exemplo: "Enxergar não é apenas receber luz: o cérebro interpreta formas, cores, profundidade e movimento.",
  vocabulario: ["retina", "cristalino", "lente corretiva"], etapas: ["Entrada da luz", "Focalização", "Sinal na retina", "Interpretação cerebral"],
  questoes: [
    { pergunta: "Onde a imagem luminosa é captada no olho?", opcoes: ["Retina", "Pálpebra", "Sobrancelha", "Ouvido"], correta: 0, explicacao: "A retina possui células sensíveis à luz." },
    { pergunta: "Quem interpreta os sinais enviados pelo olho?", opcoes: ["Cérebro", "Estômago", "Pulmão", "Osso"], correta: 0, explicacao: "O cérebro transforma sinais nervosos em percepção visual." },
    { pergunta: "Qual lente costuma corrigir miopia?", opcoes: ["Divergente", "Convergente", "Sem transparência", "Espelho plano"], correta: 0, explicacao: "A lente divergente ajusta o foco da luz no olho míope, conforme prescrição profissional." },
  ], missao: "Explique o caminho da luz até a interpretação cerebral e compare lentes convergentes e divergentes.",
});
