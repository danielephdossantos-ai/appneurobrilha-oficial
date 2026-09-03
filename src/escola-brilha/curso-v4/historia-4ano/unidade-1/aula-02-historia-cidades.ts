import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-mudancas-permanencias-cidades", titulo: "História, Mudanças e Cidades", icone: "🏙️", bncc: ["EF04HI01", "EF04HI03"],
  tema: "ação humana, mudanças e permanências nas cidades", conceito: "A História estuda ações humanas no tempo e no espaço; cidades mudam por decisões, trabalho, conflitos, tecnologias e políticas, enquanto alguns usos, construções e memórias permanecem.",
  explicacao: "Comparar mapas, fotografias, relatos e edifícios permite identificar o que mudou, o que permaneceu e quem participou. Uma transformação pode beneficiar algumas pessoas e criar dificuldades para outras.",
  exemplo: "A abertura de uma avenida altera moradias, transporte e comércio. Fotos e depoimentos de moradores ajudam a avaliar ganhos, perdas e permanências.",
  vocabulario: ["mudança", "permanência", "ação histórica"], etapas: ["Escolher duas épocas", "Comparar fontes", "Identificar ações humanas", "Avaliar efeitos nos modos de vida"],
  questoes: [
    { pergunta: "A História é resultado principalmente de quê?", opcoes: ["Ações humanas no tempo e espaço", "Acasos sem pessoas", "Somente fenômenos naturais", "Uma única opinião"], correta: 0, explicacao: "Pessoas e grupos constroem processos históricos em contextos específicos." },
    { pergunta: "O que é permanência?", opcoes: ["Algo que continua entre períodos", "Tudo que desaparece", "Uma previsão", "Um boato"], correta: 0, explicacao: "Alguns elementos continuam mesmo quando outros mudam." },
    { pergunta: "Como avaliar uma mudança urbana?", opcoes: ["Comparando efeitos para grupos diferentes", "Ouvindo só um grupo", "Ignorando fontes", "Dizendo que toda mudança é boa"], correta: 0, explicacao: "Transformações têm efeitos diversos sobre habitantes." },
  ], missao: "Compare duas imagens de uma cidade e explique uma mudança, uma permanência, seus agentes e efeitos sobre moradores.",
});
