import { criarAulaGeografia } from "../../geografia-3ano/criar-aula-geografia";
export const aula04 = criarAulaGeografia({
  slug: "aula-04-transportes-comunicacoes",
  titulo: "Transportes e Comunicações",
  icone: "🚆",
  bncc: "EF05GE06",
  tema: "transformações dos transportes e comunicações",
  conceito: "Transportes deslocam pessoas e mercadorias; comunicações movimentam informações.",
  explicacao:
    "Ferrovias, rodovias, aviões, internet e telefonia reduziram tempos e conectaram lugares, mas o acesso é desigual e há impactos ambientais.",
  exemplo: "Uma mensagem digital chega mais rápido que uma carta, mas depende de rede e energia.",
  vocabulario: ["transporte", "comunicação", "rede", "acesso"],
  etapas: ["Escolher o meio", "Comparar os tempos", "Analisar o alcance", "Avaliar impactos"],
  missao: "Compare um meio antigo e um atual.",
  questoes: [
    {
      pergunta: "O que transportes deslocam?",
      correta: "Pessoas e mercadorias",
      opcoes: ["Pessoas e mercadorias", "Somente ideias", "Apenas sinais", "Só energia"],
    },
    {
      pergunta: "Internet é meio de quê?",
      correta: "Comunicação",
      opcoes: ["Comunicação", "Relevo", "Agricultura", "Clima"],
    },
    {
      pergunta: "Toda população tem acesso igual?",
      correta: "Não, existem desigualdades de acesso",
      opcoes: [
        "Não, existem desigualdades de acesso",
        "Sim, sempre",
        "Só no campo",
        "Não existe internet",
      ],
    },
  ],
});
