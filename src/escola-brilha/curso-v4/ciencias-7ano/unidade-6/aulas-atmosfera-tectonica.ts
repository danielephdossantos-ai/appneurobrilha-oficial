import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-atmosfera-efeito-estufa-ozonio", titulo: "Atmosfera, Efeito Estufa e Ozônio", icone: "🌎", bncc: ["EF07CI12", "EF07CI13", "EF07CI14"],
  tema: "atmosfera terrestre", conceito: "O ar é mistura de gases, principalmente nitrogênio e oxigênio; sua composição pode ser alterada por processos naturais e atividades humanas.",
  explicacao: "O efeito estufa natural mantém temperatura compatível com a vida, mas seu aumento por emissões intensifica o aquecimento. A camada de ozônio absorve grande parte da radiação ultravioleta e é protegida por acordos que reduzem substâncias destruidoras de ozônio.",
  exemplo: "Queima de combustíveis aumenta gases de efeito estufa; redução de CFCs favoreceu a recuperação gradual da camada de ozônio.",
  vocabulario: ["atmosfera", "efeito estufa", "camada de ozônio"], etapas: ["Identificar gases", "Separar efeito natural e intensificado", "Reconhecer função do ozônio", "Propor ações coletivas"],
  questoes: [
    { pergunta: "Qual gás é mais abundante no ar?", opcoes: ["Nitrogênio", "Oxigênio", "Gás carbônico", "Ozônio"], correta: 0, explicacao: "O nitrogênio corresponde à maior parte do ar seco." },
    { pergunta: "Qual é a função do efeito estufa natural?", opcoes: ["Manter a Terra aquecida", "Eliminar toda radiação", "Produzir oxigênio", "Impedir chuvas"], correta: 0, explicacao: "Sem o efeito natural, a Terra seria muito mais fria." },
    { pergunta: "Por que a camada de ozônio é importante?", opcoes: ["Absorve parte da radiação ultravioleta", "Produz toda chuva", "Impede a rotação", "Cria continentes"], correta: 0, explicacao: "Ela reduz a radiação ultravioleta que chega à superfície." },
  ], missao: "Diferencie efeito estufa e camada de ozônio e proponha ações de proteção ambiental.",
});

export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-placas-tectonicas-deriva", titulo: "Placas Tectônicas e Deriva Continental", icone: "🌋", bncc: ["EF07CI15", "EF07CI16"],
  tema: "dinâmica das placas", conceito: "A litosfera é dividida em placas que se movem lentamente; seus limites concentram terremotos, vulcões e formação de montanhas.",
  explicacao: "O Brasil está no interior da Placa Sul-Americana, por isso grandes terremotos e vulcões ativos são raros. O encaixe das costas, fósseis e rochas semelhantes sustentam a antiga união entre América do Sul e África.",
  exemplo: "A distribuição de terremotos acompanha limites de placas, enquanto as costas brasileira e africana preservam formas e registros geológicos correspondentes.",
  vocabulario: ["placa tectônica", "deriva continental", "evidência geológica"], etapas: ["Mapear limites", "Localizar fenômenos", "Comparar costas", "Cruzar fósseis e rochas"],
  questoes: [
    { pergunta: "Onde grandes terremotos são mais frequentes?", opcoes: ["Nos limites de placas", "No centro de qualquer rio", "Somente nos polos", "Em todas as cidades igualmente"], correta: 0, explicacao: "Movimentos e tensões se concentram nos limites." },
    { pergunta: "Por que fenômenos tectônicos intensos são mais raros no Brasil?", opcoes: ["O país está no interior de uma placa", "Não existem rochas", "O oceano impede tudo", "O clima bloqueia terremotos"], correta: 0, explicacao: "O território está distante dos principais limites ativos." },
    { pergunta: "Qual evidência apoia a união antiga de América do Sul e África?", opcoes: ["Fósseis e rochas correspondentes", "Idiomas atuais", "Fases da Lua", "Direção dos ventos"], correta: 0, explicacao: "Registros geológicos semelhantes aparecem nos dois continentes." },
  ], missao: "Use mapas e evidências geológicas para explicar tectonismo e deriva continental.",
});
