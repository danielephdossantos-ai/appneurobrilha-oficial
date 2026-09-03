import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-modernidade-e-conexoes", titulo: "Modernidade: Conexões e Exclusões", icone: "🌍", bncc: ["EF07HI01", "EF07HI02"],
  tema: "modernidade e conexões entre Europa, África e Américas", conceito: "Modernidade é um conceito histórico criado a partir de experiências europeias. Ele ajuda a estudar mudanças, mas pode excluir trajetórias de outros povos se for tratado como modelo universal.",
  explicacao: "Entre os séculos XV e XVIII, redes comerciais, migrações, conflitos e intercâmbios ligaram sociedades europeias, africanas e americanas. Essas relações não foram encontros entre um centro ativo e povos sem história: todos possuíam organizações próprias e agiram em relações marcadas também por desigualdades e dominação.",
  exemplo: "Produtos americanos transformaram alimentações em outros continentes, enquanto conhecimentos africanos e indígenas participaram da formação das sociedades coloniais.",
  vocabulario: ["modernidade", "conexão", "eurocentrismo"], etapas: ["Definir o conceito", "Identificar quem ele inclui", "Mapear conexões", "Analisar exclusões e poder"],
  questoes: [
    { pergunta: "Qual cuidado devemos ter com o conceito de modernidade?", opcoes: ["Não tratá-lo como experiência universal", "Usá-lo para apagar outros povos", "Considerá-lo uma lei natural", "Aplicá-lo sem contexto"], correta: 0, explicacao: "O conceito nasceu de um recorte histórico europeu." },
    { pergunta: "Como Europa, África e Américas se conectaram?", opcoes: ["Por redes de pessoas, produtos, ideias e conflitos", "Sem qualquer interação", "Apenas por turismo", "Somente depois do século XX"], correta: 0, explicacao: "As conexões foram múltiplas e desiguais." },
    { pergunta: "Povos africanos e americanos tinham histórias próprias antes dos europeus?", opcoes: ["Sim, com sociedades e trajetórias diversas", "Não", "Somente após 1500", "Apenas quando possuíam escrita alfabética"], correta: 0, explicacao: "A história não depende de reconhecimento europeu." },
  ], missao: "Monte uma rede com duas conexões entre continentes e indique um intercâmbio e uma desigualdade.",
});
