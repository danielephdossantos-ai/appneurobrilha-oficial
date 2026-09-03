import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-comunidades-cidade-campo", titulo: "Comunidades da Cidade e do Campo", icone: "🏘️", bncc: ["EF03HI07", "EF03HI08"],
  tema: "modos de vida e papéis sociais em comunidades", conceito: "Comunidades urbanas e rurais têm semelhanças, diferenças e diversidade interna; pessoas exercem papéis sociais que mudam conforme época, lugar e necessidade.",
  explicacao: "Cidade e campo possuem famílias, trabalho, estudo, lazer e redes de ajuda, mas distâncias, ritmos, serviços e relação com a produção podem variar. Nenhum espaço é atrasado ou superior ao outro.",
  exemplo: "Uma criança rural pode usar internet e ônibus escolar; uma criança urbana pode participar de horta comunitária. Fontes antigas mostram que ambos os modos de vida mudaram.",
  vocabulario: ["comunidade", "modo de vida", "papel social"], etapas: ["Escolher as comunidades", "Comparar práticas", "Identificar papéis", "Localizar mudanças no tempo"],
  questoes: [
    { pergunta: "O que cidade e campo podem ter em comum?", opcoes: ["Famílias, trabalho, estudo e lazer", "Nenhuma pessoa", "Só fábricas", "Só plantações"], correta: 0, explicacao: "Os dois espaços têm vida social diversa." },
    { pergunta: "Qual afirmação evita preconceito?", opcoes: ["Campo e cidade são diferentes e interdependentes", "O campo é atrasado", "A cidade é sempre melhor", "Todas as comunidades são iguais"], correta: 0, explicacao: "Diferença não cria hierarquia." },
    { pergunta: "Os modos de vida mudam com o tempo?", opcoes: ["Sim, em ambos os espaços", "Só na cidade", "Só no campo", "Nunca"], correta: 0, explicacao: "Tecnologias, transportes e relações sociais mudam em diferentes comunidades." },
  ], missao: "Compare duas comunidades usando fontes do presente e do passado, apontando semelhanças, diferenças e papéis sociais.",
});

export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-trabalho-cidade-campo", titulo: "Trabalho na Cidade e no Campo", icone: "🧑‍🌾", bncc: ["EF03HI11"],
  tema: "trabalho urbano e rural e tecnologias", conceito: "Trabalhos urbanos e rurais usam saberes e tecnologias variados; ferramentas podem transformar tarefas, produtividade, segurança e relações entre pessoas.",
  explicacao: "No campo há agricultura, criação, extrativismo e serviços; na cidade há indústria, comércio, construção e muitos serviços. Tecnologias aparecem nos dois espaços e não eliminam automaticamente todas as profissões.",
  exemplo: "Sensores podem ajudar a irrigar uma plantação; sistemas digitais organizam entregas na cidade. Em ambos os casos, trabalhadores precisam aprender novos procedimentos.",
  vocabulario: ["trabalho rural", "trabalho urbano", "tecnologia"], etapas: ["Identificar a atividade", "Localizar o espaço", "Comparar ferramentas", "Avaliar mudanças no trabalho"],
  questoes: [
    { pergunta: "Tecnologia existe onde?", opcoes: ["Na cidade e no campo", "Somente em capitais", "Somente em fábricas", "Em nenhum trabalho"], correta: 0, explicacao: "Ferramentas e conhecimentos técnicos aparecem em ambos." },
    { pergunta: "Qual é um trabalho rural?", opcoes: ["Cultivo de alimentos", "Somente programação", "Somente venda em shopping", "Nenhum serviço"], correta: 0, explicacao: "A agricultura é uma atividade rural, embora conectada à cidade." },
    { pergunta: "Uma máquina sempre elimina a profissão?", opcoes: ["Não; pode modificar tarefas e exigir aprendizagem", "Sim, em todos os casos", "Nunca muda nada", "Só altera o clima"], correta: 0, explicacao: "Os efeitos variam conforme atividade e contexto." },
  ], missao: "Compare um trabalho urbano e um rural antes e depois de uma tecnologia, indicando mudanças e permanências.",
});
