import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-fontes-temas-contemporaneos", titulo: "Fontes e Temas Contemporâneos", icone: "📰", bncc: ["EF05HI09"],
  tema: "comparação de pontos de vista e fontes", conceito: "Temas atuais exigem comparação de notícias, dados, testemunhos, documentos e produções digitais, identificando autoria, evidências, interesses e impactos sociais.",
  explicacao: "Uma postagem viral não basta. É preciso verificar data, fonte original, dados e outras perspectivas. Tecnologias ampliam acesso e participação, mas também espalham erros rapidamente.",
  exemplo: "Sobre acessibilidade, podemos comparar a lei, dados públicos, relatos de pessoas com deficiência e reportagem assinada antes de formular uma conclusão.",
  vocabulario: ["ponto de vista", "fonte confiável", "desinformação"], etapas: ["Definir o tema", "Identificar autoria", "Verificar evidências", "Comparar perspectivas e impactos"],
  questoes: [
    { pergunta: "Qual fonte merece mais confiança inicial?", opcoes: ["Documento identificado com dados verificáveis", "Mensagem sem autoria", "Boato repetido", "Imagem sem data"], correta: 0, explicacao: "Autoria e evidência permitem conferência." },
    { pergunta: "Dois pontos de vista devem ser comparados como?", opcoes: ["Pelas evidências e contexto", "Pelo número de curtidas", "Pela cor da página", "Sem ler"], correta: 0, explicacao: "Popularidade não substitui evidência." },
    { pergunta: "Qual risco das tecnologias de comunicação?", opcoes: ["Desinformação circular rapidamente", "Toda mensagem ser verdadeira", "Não existir autoria", "Dados nunca mudarem"], correta: 0, explicacao: "Velocidade exige verificação responsável." },
  ], missao: "Investigue um tema contemporâneo comparando quatro fontes identificadas e registrando pontos de vista, evidências e impactos.",
});
