import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-grupos-e-perspectivas-locais", titulo: "Grupos e Perspectivas da História Local", icone: "🧩", bncc: ["EF03HI01", "EF03HI03"],
  tema: "grupos formadores e diferentes pontos de vista", conceito: "Povos indígenas, populações africanas e afro-brasileiras, migrantes internos, imigrantes e outros grupos participaram da formação de cidades e regiões, com experiências e perspectivas diferentes.",
  explicacao: "A formação local inclui cooperação, trocas, deslocamentos, desigualdades, resistências e conflitos. Não é correto reduzir a história a uma mistura harmoniosa nem tratar grupos como se todos pensassem igual.",
  exemplo: "A construção de uma estrada pode ser vista como acesso por alguns moradores e como ameaça ao território por uma comunidade tradicional. Fontes de ambos ajudam a comparar pontos de vista.",
  vocabulario: ["grupo populacional", "migração", "ponto de vista"], etapas: ["Identificar os grupos", "Localizar o acontecimento", "Ouvir diferentes fontes", "Comparar perspectivas"],
  questoes: [
    { pergunta: "Quem pode participar da formação de uma cidade?", opcoes: ["Muitos grupos em tempos diferentes", "Um único povo sempre", "Somente governantes", "Ninguém que migrou"], correta: 0, explicacao: "A história local resulta da participação de grupos diversos." },
    { pergunta: "Dois grupos podem interpretar um evento de modo diferente?", opcoes: ["Sim, conforme suas experiências", "Não, existe só uma opinião", "Só adultos têm ponto de vista", "Fontes não importam"], correta: 0, explicacao: "Comparar perspectivas é parte do estudo histórico." },
    { pergunta: "Qual abordagem é inadequada?", opcoes: ["Dizer que todos se misturaram sem conflitos", "Comparar fontes", "Reconhecer resistências", "Ouvir comunidades"], correta: 0, explicacao: "Essa simplificação apaga desigualdades, conflitos e protagonismos." },
  ], missao: "Investigue um evento local usando fontes de pelo menos dois grupos e registre convergências e diferenças de perspectiva.",
});
