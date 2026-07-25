/**
 * Metodologias científicas de ensino de Matemática usadas do
 * 3º Ano ao Ensino Médio.
 *
 * Cada aula declara em `AulaV4.metodologias` as chaves que aplicou.
 * O PlayerV4 renderiza um rodapé "Base científica" com o nome curto,
 * a descrição em linguagem de professor e a cor de destaque.
 *
 * Ed. Infantil, 1º e 2º ano NÃO usam este módulo — continuam no
 * padrão visual concreto (frutas, agrupamentos com objetos).
 */
export type MetodologiaMat = {
  nome: string;         // rótulo curto exibido no card
  descricao: string;    // 1-2 linhas em linguagem clara (não-técnica)
  autores: string;      // referência histórica
  cor: string;          // cor de destaque do card
};

export const METODOLOGIAS_MAT: Record<string, MetodologiaMat> = {
  cpa: {
    nome: "CPA — Concreto → Pictórico → Abstrato",
    descricao:
      "A criança primeiro manipula o objeto, depois vê o desenho, depois lê o número escrito. A partir do 3º ano ficamos pouco no pictórico e passamos rápido pro número no papel.",
    autores: "Bruner · Método Singapore",
    cor: "#22d3ee",
  },
  polya: {
    nome: "Polya — 4 passos para resolver problemas",
    descricao:
      "Entender o problema · Planejar · Executar · Verificar. Todo problema-texto é resolvido nessa ordem, dita em voz alta.",
    autores: "George Pólya (1945)",
    cor: "#f59e0b",
  },
  kamii: {
    nome: "Kamii — construtivismo numérico",
    descricao:
      "A criança inventa a estratégia de cálculo dela ANTES de aprender o algoritmo escrito. Cálculo mental primeiro; conta armada depois, com sentido.",
    autores: "Constance Kamii (1985)",
    cor: "#a78bfa",
  },
  skemp: {
    nome: "Skemp — compreensão relacional",
    descricao:
      "Ensinamos o PORQUÊ, não só o COMO. Cada passo do algoritmo vem com uma justificativa (\"escrevo 1 e sobe 1 porque 11 tem 1 dezena\").",
    autores: "Richard Skemp (1976)",
    cor: "#34d399",
  },
  vergnaud: {
    nome: "Vergnaud — campos conceituais",
    descricao:
      "A sequência de aulas respeita os grandes campos: aditivo (soma/sub), multiplicativo (mult/div/proporção), álgebra, geometria — um por vez, do simples ao complexo.",
    autores: "Gérard Vergnaud",
    cor: "#f472b6",
  },
  rme: {
    nome: "RME — Matemática Realística",
    descricao:
      "O contexto é problema DO MUNDO, não decoração. Se a aula fala de troco, é troco de verdade; se fala de distância, é distância de verdade.",
    autores: "Hans Freudenthal · Instituto Freudenthal (NL)",
    cor: "#60a5fa",
  },
  vanHiele: {
    nome: "Van Hiele — níveis de geometria",
    descricao:
      "A geometria é ensinada em 5 níveis: visual → analítico → dedutivo informal → dedução formal → rigor. Cada aula respeita o nível do aluno.",
    autores: "Pierre e Dina van Hiele",
    cor: "#fb7185",
  },
  calculoMental: {
    nome: "Cálculo mental estruturado",
    descricao:
      "Estratégias explícitas: decomposição, complemento de 10, dobros, compensação. Só depois vem o algoritmo escrito.",
    autores: "Tradição francesa (ERMEL) · NCTM",
    cor: "#fbbf24",
  },
  algoritmoAberto: {
    nome: "Algoritmo aberto (ABN)",
    descricao:
      "A conta é escrita explicando cada passo em linguagem natural. A criança pode escolher o caminho — não existe uma única receita.",
    autores: "Método ABN · Jaime Martínez Montero",
    cor: "#c084fc",
  },
} as const;

export function metodologia(chave: string): MetodologiaMat | undefined {
  return METODOLOGIAS_MAT[chave];
}
