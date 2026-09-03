import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula04 = criarAulaConsolidacao({
  slug: "aula-04-constelacoes-e-mapas-do-ceu", titulo: "Constelações e Mapas do Céu", icone: "✨", bncc: ["EF05CI10"],
  tema: "constelações", conceito: "Constelações são padrões aparentes de estrelas, e mapas celestes ajudam a localizar esses padrões em diferentes épocas e horários.",
  explicacao: "O céu observado muda com o horário, o local e a época do ano. Para usar um mapa celeste, ajustamos data e direção, buscamos pontos de referência e comparamos o desenho do mapa com o céu real.",
  exemplo: "O Cruzeiro do Sul pode auxiliar na orientação no hemisfério sul, mas sua posição aparente muda ao longo da noite.",
  vocabulario: ["constelação", "mapa celeste", "observação"], etapas: ["Identificar data e horário", "Orientar o mapa", "Localizar estrelas de referência", "Registrar a observação"],
  questoes: [
    { pergunta: "Para que serve um mapa celeste?", opcoes: ["Localizar astros e constelações", "Medir a chuva", "Aumentar o brilho das estrelas", "Prever qualquer evento"], correta: 0, explicacao: "Mapas celestes representam posições aparentes dos astros para orientar observações." },
    { pergunta: "Por que o céu visível muda durante a noite?", opcoes: ["A Terra gira", "As estrelas apagam", "A Lua empurra as estrelas", "As nuvens movem o universo"], correta: 0, explicacao: "A rotação terrestre muda a parte do céu que observamos." },
    { pergunta: "Qual registro melhora uma observação do céu?", opcoes: ["Data, horário, direção e desenho", "Somente a cor do caderno", "Apenas um palpite", "Nenhuma anotação"], correta: 0, explicacao: "Registros permitem comparar observações feitas em momentos diferentes." },
  ], missao: "Use um mapa celeste para localizar e registrar uma constelação visível.",
});

export const aula05 = criarAulaConsolidacao({
  slug: "aula-05-rotacao-e-movimento-do-sol", titulo: "Rotação da Terra e Movimento Aparente do Sol", icone: "🌍", bncc: ["EF05CI11"],
  tema: "movimento diário do céu", conceito: "A rotação da Terra causa a alternância entre dia e noite e faz o Sol parecer atravessar o céu de leste para oeste.",
  explicacao: "A Terra gira de oeste para leste em cerca de 24 horas. Por isso, vemos o Sol nascer aproximadamente a leste, atingir maior altura e se pôr aproximadamente a oeste; as sombras mudam de direção e comprimento.",
  exemplo: "A sombra de uma haste costuma ser longa pela manhã, menor perto do meio do dia e longa novamente à tarde, apontando em direções diferentes.",
  vocabulario: ["rotação", "movimento aparente", "sombra"], etapas: ["Marcar uma haste", "Observar pela manhã", "Repetir ao meio do dia", "Comparar à tarde"],
  questoes: [
    { pergunta: "O que causa o dia e a noite?", opcoes: ["Rotação da Terra", "Fases da Lua", "Nuvens", "Estações do ano"], correta: 0, explicacao: "A rotação alterna as partes iluminada e não iluminada da Terra." },
    { pergunta: "Por que o Sol parece mudar de posição?", opcoes: ["Porque a Terra gira", "Porque o Sol contorna a Terra diariamente", "Porque as nuvens o empurram", "Porque a Lua o atrai"], correta: 0, explicacao: "O deslocamento diário do Sol no céu é aparente e resulta da rotação terrestre." },
    { pergunta: "Como uma sombra costuma mudar ao longo do dia?", opcoes: ["Direção e comprimento mudam", "Fica sempre igual", "Desaparece para sempre", "Aponta sempre para leste"], correta: 0, explicacao: "A posição aparente do Sol altera a direção e o comprimento da sombra." },
  ], missao: "Registre a sombra de uma haste em três horários e explique as mudanças pela rotação da Terra.",
});
