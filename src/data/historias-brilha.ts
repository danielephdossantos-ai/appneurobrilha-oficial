export type NivelHistoria = 1 | 2 | 3 | 4 | 5 | 6;

export type HistoriaBrilha = {
  id: string;
  nivel: NivelHistoria;
  titulo: string;
  habilidade: string;
  paragrafos: string[];
  pergunta: string;
  opcoes: string[];
  resposta: number;
  explicacao: string;
};

const personagens = [
  "Lia", "Caio", "Bia", "Davi", "Maya", "Ivo", "Nina",
  "Téo", "Luna", "Ravi", "Ceci", "Noah", "Pipa", "Pip",
];

const cenarios = [
  "jardim das cores", "biblioteca da praça", "horta da escola", "ilha dos sons",
  "museu das perguntas", "bosque das formas", "observatório", "cozinha experimental",
  "parque dos números", "cidade das letras", "laboratório de ideias", "trilha das nuvens",
  "fazenda solar", "ateliê de invenções",
];

const desafios = [
  "encontrar uma pista escondida", "organizar uma coleção", "ajudar um animal perdido",
  "descobrir de onde vinha um som", "preparar uma apresentação", "consertar uma pequena invenção",
  "plantar sementes na ordem certa", "decifrar uma mensagem", "medir um caminho",
  "separar objetos por suas características", "explicar uma descoberta", "montar um mapa",
  "resolver um enigma de palavras", "comparar duas soluções",
];

const habilidades = [
  "Frases curtas e leitura de palavras conhecidas",
  "Sequência de acontecimentos",
  "Localização de informação explícita",
  "Causa e consequência",
  "Inferência e vocabulário pelo contexto",
  "Interpretação, argumento e ideia principal",
] as const;

const finais = [
  "Ao conferir cada passo com calma, a resposta apareceu.",
  "O grupo ouviu todas as ideias e escolheu a solução mais segura.",
  "Uma tentativa não deu certo, mas a pista ajudou na segunda tentativa.",
  "Eles registraram a descoberta para poder explicá-la depois.",
  "No final, todos perceberam que observar era tão importante quanto responder.",
  "A solução surgiu quando compararam o que já sabiam com a nova pista.",
  "Cada pessoa fez uma parte, e o desafio ficou mais simples.",
] as const;

function criarHistoria(indice: number): HistoriaBrilha {
  const nivel = (Math.floor(indice / 17) + 1 > 6 ? 6 : Math.floor(indice / 17) + 1) as NivelHistoria;
  const personagem = personagens[indice % personagens.length];
  const parceiro = personagens[(indice * 5 + 3) % personagens.length];
  const cenario = cenarios[(indice * 3) % cenarios.length];
  const desafio = desafios[(indice * 5 + nivel) % desafios.length];
  const final = finais[(indice + nivel) % finais.length];
  const titulo = `${personagem} e ${cenario.replace(/^./, (letra) => letra.toUpperCase())}`;

  const textosPorNivel: Record<NivelHistoria, string[]> = {
    1: [
      `${personagem} foi ao ${cenario}.`,
      `${parceiro} chegou para ajudar a ${desafio}.`,
      final,
    ],
    2: [
      `${personagem} visitou o ${cenario} e encontrou um desafio: ${desafio}.`,
      `${parceiro} observou as pistas. Primeiro, os dois separaram o que já sabiam. Depois, fizeram um teste.`,
      final,
    ],
    3: [
      `Naquela manhã, ${personagem} entrou no ${cenario} com uma pergunta importante. Era preciso ${desafio}.`,
      `${parceiro} sugeriu começar pelas pistas mais claras. Eles anotaram a ordem dos acontecimentos e eliminaram uma resposta que não combinava com os fatos.`,
      `${final} Antes de ir embora, explicaram o caminho usado para chegar à conclusão.`,
    ],
    4: [
      `O ${cenario} parecia tranquilo, mas havia um problema esperando por ${personagem}: ${desafio}. Em vez de adivinhar, ${personagem} decidiu investigar.`,
      `${parceiro} encontrou uma informação que mudava a primeira hipótese. Juntos, compararam as evidências, refizeram uma etapa e perceberam a relação entre a pista e o resultado.`,
      `${final} A experiência mostrou que mudar de ideia diante de uma boa evidência também é aprender.`,
    ],
    5: [
      `Durante uma visita ao ${cenario}, ${personagem} recebeu a tarefa de ${desafio}. A solução mais rápida parecia evidente, porém uma pequena contradição chamou sua atenção.`,
      `${parceiro} propôs verificar a origem de cada pista. Ao organizar os dados em uma sequência, os dois distinguiram fatos, opiniões e possibilidades. Assim, construíram uma explicação coerente, sem ignorar o detalhe inesperado.`,
      `${final} O registro final incluiu a hipótese inicial, a evidência decisiva e o motivo da escolha.`,
    ],
    6: [
      `No ${cenario}, ${personagem} precisava ${desafio}. Embora a primeira alternativa parecesse convincente, ela não explicava todas as informações disponíveis.`,
      `${parceiro} defendeu outra hipótese e apresentou uma evidência. Em vez de escolher por preferência, eles estabeleceram critérios, analisaram consequências e identificaram qual argumento era sustentado pelo texto e qual dependia apenas de suposição.`,
      `${final} Ao apresentar a conclusão, reconheceram também o limite da descoberta e indicaram qual nova informação poderia confirmá-la.`,
    ],
  };

  return {
    id: `historia-${String(indice + 1).padStart(3, "0")}`,
    nivel,
    titulo,
    habilidade: habilidades[nivel - 1],
    paragrafos: textosPorNivel[nivel],
    pergunta: `Qual atitude ajudou ${personagem} e ${parceiro} a resolver o desafio?`,
    opcoes: [
      "Observar as pistas e verificar as ideias",
      "Escolher uma resposta sem ler",
      "Ignorar as informações diferentes",
    ],
    resposta: 0,
    explicacao: "A história mostra que observar, comparar e verificar as pistas levou à solução.",
  };
}

/** Acervo autoral: 98 leituras graduadas, distribuídas em seis níveis. */
export const HISTORIAS_BRILHA: HistoriaBrilha[] = Array.from({ length: 98 }, (_, indice) =>
  criarHistoria(indice),
);

export const TOTAL_HISTORIAS_BRILHA = HISTORIAS_BRILHA.length;
