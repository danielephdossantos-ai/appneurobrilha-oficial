import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";
export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-republica-pos-abolicao", titulo: "República e Protagonismo Negro", icone: "🗳️", bncc: ["EF09HI01", "EF09HI03", "EF09HI04"],
  tema: "emergência republicana e população negra no pós-abolição", conceito: "A República nasceu em 1889 com forte ação militar e participação popular limitada. No pós-abolição, a população negra enfrentou exclusões, mas criou associações, imprensa, culturas e movimentos de resistência.",
  explicacao: "A mudança de regime não eliminou concentração de poder, racismo nem barreiras de acesso a terra, escola e trabalho. Jornais negros, irmandades, clubes, artistas e organizações denunciaram discriminações e participaram da formação econômica, política e social do país.",
  exemplo: "A imprensa negra publicou reivindicações e debates sobre cidadania, mostrando protagonismo diante das políticas de exclusão.",
  vocabulario: ["República", "pós-abolição", "imprensa negra"], etapas: ["Contextualizar 1889", "Identificar permanências", "Localizar protagonismos", "Avaliar resultados"],
  questoes: [
    { pergunta: "Como ocorreu a Proclamação da República?", opcoes: ["Com protagonismo militar e participação popular restrita", "Por plebiscito nacional", "Por decisão portuguesa", "Com igualdade imediata"], correta: 0, explicacao: "O novo regime nasceu de disputas entre grupos políticos e militares." },
    { pergunta: "Como a população negra atuou no pós-abolição?", opcoes: ["Criou organizações, imprensa e formas de resistência", "Ficou sem ação histórica", "Recebeu terras automaticamente", "Foi excluída de toda produção cultural"], correta: 0, explicacao: "Fontes mostram protagonismos diversos." },
    { pergunta: "O que permaneceu após 1889?", opcoes: ["Desigualdades e concentração de poder", "A monarquia oficial", "Escravidão legal", "Ausência de conflitos"], correta: 0, explicacao: "Mudanças políticas convivem com permanências sociais." },
  ], missao: "Cruze uma fonte oficial e uma fonte da imprensa negra, registrando mudança, permanência e reivindicação.",
});
