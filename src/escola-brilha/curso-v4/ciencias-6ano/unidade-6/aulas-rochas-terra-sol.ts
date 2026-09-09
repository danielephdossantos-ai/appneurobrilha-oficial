import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-rochas-fosseis-tempo-geologico", titulo: "Rochas, Fósseis e Tempo Geológico", icone: "🪨", bncc: ["EF06CI12"],
  tema: "tipos de rocha e fósseis", conceito: "Rochas ígneas se formam do magma; sedimentares, do acúmulo e compactação de sedimentos; metamórficas, da transformação por pressão e calor.",
  explicacao: "Fósseis são vestígios ou restos preservados de seres do passado e aparecem principalmente em rochas sedimentares, cujas camadas registram diferentes períodos geológicos.",
  exemplo: "Camadas sedimentares mais profundas são geralmente mais antigas quando não foram reviradas, permitindo comparar períodos.",
  vocabulario: ["rocha sedimentar", "fóssil", "tempo geológico"], etapas: ["Observar textura", "Identificar formação", "Localizar camadas", "Relacionar fósseis e períodos"],
  questoes: [
    { pergunta: "Em qual rocha fósseis são encontrados com mais frequência?", opcoes: ["Sedimentar", "Magma líquido", "Metal puro", "Vidro industrial"], correta: 0, explicacao: "Sedimentos podem soterrar e preservar vestígios." },
    { pergunta: "Uma rocha formada pelo resfriamento do magma é:", opcoes: ["Ígnea", "Sedimentar", "Orgânica artificial", "Somente metamórfica"], correta: 0, explicacao: "Rochas ígneas resultam da solidificação de magma ou lava." },
    { pergunta: "O que as camadas com fósseis ajudam a estudar?", opcoes: ["Períodos geológicos", "Somente o clima de hoje", "A cor do laboratório", "A órbita da Lua"], correta: 0, explicacao: "Fósseis e camadas guardam evidências da história da Terra." },
  ], missao: "Classifique amostras e relacione fósseis sedimentares a diferentes períodos geológicos.",
});

export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-esfericidade-e-movimentos-da-terra", titulo: "Esfericidade e Movimentos da Terra", icone: "🌍", bncc: ["EF06CI13", "EF06CI14"],
  tema: "forma e movimentos da Terra", conceito: "Evidências como imagens espaciais, sombra terrestre em eclipses e objetos desaparecendo gradualmente no horizonte demonstram a esfericidade da Terra.",
  explicacao: "A rotação explica o ciclo diário e a mudança das sombras. A translação, junto à inclinação do eixo, altera a trajetória aparente do Sol e o comprimento das sombras em diferentes épocas do ano.",
  exemplo: "Um gnômon produz sombras com direção e comprimento diferentes conforme o horário e a estação, criando dados comparáveis.",
  vocabulario: ["esfericidade", "gnômon", "translação"], etapas: ["Selecionar evidências", "Registrar sombras", "Comparar horários", "Comparar épocas do ano"],
  questoes: [
    { pergunta: "Qual evidência apoia a esfericidade da Terra?", opcoes: ["Sombra curva da Terra em eclipse lunar", "Cor azul do céu", "Formato das nuvens", "Direção do vento"], correta: 0, explicacao: "A sombra curva é uma das evidências observáveis da forma terrestre." },
    { pergunta: "Por que a sombra do gnômon muda durante o dia?", opcoes: ["Rotação da Terra", "Cor da vara", "Fases da Lua", "Chuva subterrânea"], correta: 0, explicacao: "A rotação altera a posição aparente do Sol." },
    { pergunta: "O que explica diferenças sazonais nas sombras?", opcoes: ["Translação e inclinação do eixo", "Somente as nuvens", "A idade do gnômon", "A distância da vara ao chão"], correta: 0, explicacao: "A translação e a inclinação mudam a trajetória aparente do Sol ao longo do ano." },
  ], missao: "Reúna evidências da esfericidade e compare sombras de um gnômon em horários e épocas diferentes.",
});
