import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-estados-e-transformacoes", titulo: "Estados da Matéria e Modelo de Partículas", icone: "🧊", bncc: ["EF09CI01"],
  tema: "estados físicos da matéria", conceito: "Sólidos, líquidos e gases diferem na organização, distância e movimento de suas partículas; mudanças de estado alteram energia e organização, não a identidade da substância.",
  explicacao: "No sólido, partículas vibram próximas e organizadas; no líquido, continuam próximas e deslizam; no gás, ficam afastadas e rápidas. Aquecer aumenta a agitação média; resfriar a reduz.",
  exemplo: "Ao derreter gelo, moléculas de água continuam sendo H₂O, mas ganham mobilidade. Na evaporação, ficam muito mais afastadas.",
  vocabulario: ["partícula", "mudança de estado", "energia térmica"], etapas: ["Observar o estado", "Representar partículas", "Indicar troca de energia", "Explicar a transformação"],
  questoes: [
    { pergunta: "Como ficam as partículas de um gás?", opcoes: ["Afastadas e em movimento intenso", "Fixas e ordenadas", "Sem movimento", "Transformadas em luz"], correta: 0, explicacao: "Gases ocupam o recipiente porque suas partículas se movem e estão afastadas." },
    { pergunta: "O que muda quando gelo derrete?", opcoes: ["Organização e movimento das partículas", "A água vira outro elemento", "Os átomos desaparecem", "A massa necessariamente dobra"], correta: 0, explicacao: "É transformação física: continua H₂O." },
    { pergunta: "Aquecer geralmente provoca o quê?", opcoes: ["Maior agitação das partículas", "Desaparecimento da matéria", "Criação de átomos", "Fim de toda energia"], correta: 0, explicacao: "A energia térmica altera o movimento microscópico." },
  ], missao: "Modele, com desenhos de partículas, fusão, vaporização e condensação de uma mesma substância.",
});

export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-proporcoes-nas-reacoes", titulo: "Proporções e Conservação nas Reações", icone: "⚖️", bncc: ["EF09CI02"],
  tema: "aspectos quantitativos das reações", conceito: "Em sistema fechado, a massa total se conserva e reagentes participam em proporções definidas pela equação química balanceada.",
  explicacao: "Coeficientes indicam proporções entre partículas ou mols. Em 2 H₂ + O₂ → 2 H₂O, duas porções de hidrogênio reagem com uma de oxigênio; excesso de um reagente pode sobrar.",
  exemplo: "Se uma reação fechada começa com 10 g de reagentes, os produtos totalizam 10 g. Se a proporção não for respeitada, parte do reagente fica sem reagir.",
  vocabulario: ["conservação da massa", "proporção", "reagente limitante"], etapas: ["Representar reagentes", "Balancear átomos", "Comparar proporções", "Conferir massa total"],
  questoes: [
    { pergunta: "Em sistema fechado, 25 g de reagentes formam quanto de produtos?", opcoes: ["25 g", "50 g", "12,5 g", "Massa zero"], correta: 0, explicacao: "A massa total se conserva." },
    { pergunta: "Em 2 H₂ + O₂ → 2 H₂O, qual é a proporção H₂:O₂?", opcoes: ["2:1", "1:2", "1:1", "3:1"], correta: 0, explicacao: "Os coeficientes fornecem a proporção entre quantidades de matéria." },
    { pergunta: "O que ocorre com reagente em excesso?", opcoes: ["Parte pode sobrar", "Vira energia infinita", "Desaparece", "Muda o número de prótons"], correta: 0, explicacao: "O reagente limitante acaba primeiro e restringe a formação de produto." },
  ], missao: "Use modelos de partículas e massas para verificar conservação e proporção em três reações representadas.",
});
