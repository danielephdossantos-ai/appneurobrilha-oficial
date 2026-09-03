import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula05 = criarAulaConsolidacao({
  slug: "aula-05-maquinas-simples", titulo: "Máquinas Simples no Cotidiano", icone: "⚙️", bncc: ["EF07CI01"],
  tema: "máquinas simples", conceito: "Alavancas, roldanas, rodas com eixo, planos inclinados, cunhas e parafusos modificam a direção ou a intensidade da força.",
  explicacao: "Máquinas simples não criam energia; elas tornam tarefas mais práticas ao trocar força por distância ou mudar a direção do esforço.",
  exemplo: "Uma rampa aumenta o caminho, mas reduz a força necessária para elevar uma carga; uma alavanca usa um ponto de apoio.",
  vocabulario: ["alavanca", "plano inclinado", "vantagem mecânica"], etapas: ["Identificar a tarefa", "Escolher a máquina", "Localizar apoio e força", "Testar e melhorar"],
  questoes: [
    { pergunta: "Qual máquina simples aparece numa rampa?", opcoes: ["Plano inclinado", "Roldana", "Cunha", "Parafuso"], correta: 0, explicacao: "A rampa é um plano inclinado." },
    { pergunta: "Qual é a função do ponto de apoio numa alavanca?", opcoes: ["Permitir a rotação da barra", "Criar energia", "Eliminar toda força", "Aquecer a carga"], correta: 0, explicacao: "A alavanca gira em torno do ponto de apoio." },
    { pergunta: "Uma máquina simples cria energia?", opcoes: ["Não, ela transforma a maneira de aplicar força", "Sim, sempre", "Somente à noite", "Apenas se for metálica"], correta: 0, explicacao: "Ela oferece vantagem mecânica sem criar energia." },
  ], missao: "Projete uma solução com máquina simples para mover um objeto com segurança.",
});

export const aula06 = criarAulaConsolidacao({
  slug: "aula-06-temperatura-calor-propagacao", titulo: "Temperatura, Calor e Propagação", icone: "🌡️", bncc: ["EF07CI02", "EF07CI03"],
  tema: "fenômenos térmicos", conceito: "Temperatura mede o estado térmico; calor é energia transferida por diferença de temperatura; sensação térmica depende também do corpo e do ambiente.",
  explicacao: "O calor se propaga por condução em contato, convecção pelo movimento de fluidos e radiação por ondas. Condutores transferem calor com facilidade; isolantes dificultam essa transferência.",
  exemplo: "O cabo isolante de uma panela reduz condução; água aquecida circula por convecção; o Sol aquece por radiação.",
  vocabulario: ["temperatura", "calor", "isolante"], etapas: ["Medir temperatura", "Identificar diferença térmica", "Reconhecer propagação", "Escolher material adequado"],
  questoes: [
    { pergunta: "Calor é:", opcoes: ["Energia em transferência", "A medida do termômetro", "Uma substância", "Apenas sensação da pele"], correta: 0, explicacao: "Calor flui quando há diferença de temperatura." },
    { pergunta: "O aquecimento pela luz do Sol ocorre principalmente por:", opcoes: ["Radiação", "Condução", "Convecção líquida", "Contato direto"], correta: 0, explicacao: "A radiação atravessa o espaço." },
    { pergunta: "Por que cabos de panela usam isolantes?", opcoes: ["Para reduzir a transferência de calor", "Para criar calor", "Para aumentar a chama", "Para medir pressão"], correta: 0, explicacao: "Isolantes dificultam a condução térmica." },
  ], missao: "Explique condução, convecção e radiação em equipamentos cotidianos.",
});
