import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-lamarck-darwin-e-selecao", titulo: "Lamarck, Darwin e Seleção Natural", icone: "🐢", bncc: ["EF09CI10"],
  tema: "ideias evolucionistas", conceito: "Lamarck e Darwin explicaram a transformação das espécies de modos diferentes: uso e desuso com herança de caracteres adquiridos versus variação hereditária filtrada pela seleção natural.",
  explicacao: "Para Lamarck, o ambiente criaria necessidades e mudanças adquiridas seriam herdadas. Para Darwin, indivíduos já variam; os que têm características hereditárias vantajosas deixam mais descendentes. Evidências modernas apoiam a seleção natural e a genética explica a herança.",
  exemplo: "Girafas não alongaram o pescoço por esforço. Em populações com variação hereditária, as de pescoço mais longo conseguiram mais alimento e deixaram mais descendentes ao longo de gerações.",
  vocabulario: ["Lamarckismo", "Darwinismo", "seleção natural"], etapas: ["Identificar a explicação", "Comparar o papel do ambiente", "Verificar como ocorre a herança", "Confrontar com evidências"],
  questoes: [
    { pergunta: "Qual ideia caracteriza Darwin?", opcoes: ["Seleção natural sobre variações hereditárias", "Uso e desuso cria genes", "Indivíduos mudam porque desejam", "Todas as espécies são imutáveis"], correta: 0, explicacao: "A seleção favorece variantes hereditárias em determinado ambiente." },
    { pergunta: "O que diferencia a explicação de Lamarck?", opcoes: ["Herança de características adquiridas", "Segregação dos alelos", "Deriva continental", "Fusão nuclear"], correta: 0, explicacao: "Lamarck atribuía papel central ao uso e desuso e à herança do adquirido." },
    { pergunta: "A seleção natural atua sobre quê?", opcoes: ["Variações existentes na população", "Necessidades conscientes", "Mudanças planejadas", "Somente fósseis"], correta: 0, explicacao: "A variação vem antes; o ambiente influencia sucesso reprodutivo." },
  ], missao: "Compare duas explicações para uma adaptação e justifique qual é compatível com seleção natural e hereditariedade.",
});

export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-unidades-conservacao", titulo: "Unidades de Conservação e Biodiversidade", icone: "🏞️", bncc: ["EF09CI12"],
  tema: "conservação da biodiversidade", conceito: "Unidades de Conservação protegem espécies, habitats, água, solo e processos ecológicos; categorias de proteção integral e uso sustentável têm objetivos e regras diferentes.",
  explicacao: "Parques e reservas são criados com critérios ecológicos e sociais. Corredores conectam populações, zonas de amortecimento reduzem impactos e planos de manejo organizam pesquisa, visitação e uso de recursos.",
  exemplo: "Um parque pode proteger a nascente e restringir exploração, enquanto uma reserva extrativista concilia conservação com uso sustentável por comunidades tradicionais.",
  vocabulario: ["unidade de conservação", "proteção integral", "uso sustentável"], etapas: ["Mapear espécies e habitats", "Identificar ameaças", "Escolher categoria adequada", "Planejar manejo e participação social"],
  questoes: [
    { pergunta: "Qual é a função de uma unidade de conservação?", opcoes: ["Proteger biodiversidade e processos ecológicos", "Eliminar toda presença humana", "Substituir todas as cidades", "Produzir apenas madeira"], correta: 0, explicacao: "A proteção varia por categoria, mas conserva patrimônio natural." },
    { pergunta: "O que faz um corredor ecológico?", opcoes: ["Conecta habitats e populações", "Impede qualquer deslocamento", "Aumenta isolamento", "Remove vegetação"], correta: 0, explicacao: "A conexão favorece fluxo de organismos e genes." },
    { pergunta: "Por que considerar comunidades locais?", opcoes: ["Conservação exige conhecimento e participação social", "A ciência não usa dados locais", "Toda área tem a mesma regra", "Somente turistas decidem"], correta: 0, explicacao: "Decisões sustentáveis integram evidências ecológicas e realidade social." },
  ], missao: "Proponha uma unidade de conservação para uma área fictícia, justificando categoria, limites, manejo e participação comunitária.",
});
