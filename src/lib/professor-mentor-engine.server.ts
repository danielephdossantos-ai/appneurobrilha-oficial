import { aiOrchestrator } from "./ai-orchestrator.server";
import { parseJSONSeguro } from "./ai-json.server";

/**
 * PROFESSOR MENTOR NEUROBRILHA
 *
 * Não é uma pessoa nem afirma possuir diplomas reais. É uma matriz de IA
 * configurada para aplicar princípios de ensino explícito, prática guiada,
 * recuperação ativa, prática espaçada, feedback e diferenciação pedagógica.
 */
export interface ContextoAluno {
  nome: string;
  idade: number;
  serie?: string;
  diagnostico?: string;
  hiperfoco?: string;
  desempenhoAnterior?: string;
  necessidadesAcessibilidade?: string;
}

export interface LousaPasso {
  expr: string;
  explica: string;
  status?: "ok" | "x" | "neutro";
  professor?: string;
}

export interface AulaGerada {
  titulo: string;
  objetivo: string;
  paginas: Array<{
    ordem: number;
    tipo: "explicacao" | "exemplo" | "pratica_guiada" | "desafio" | "revisao" | "passo_a_passo" | "video" | string;
    titulo: string;
    conteudo: {
      texto?: string;
      destaque?: string;
      bullets?: string[];
      passos?: string[];
      lousaPassos?: {
        titulo: string;
        passos: LousaPasso[];
        resultado?: string;
      };
      perguntas?: Array<{ pergunta: string; resposta?: string; pista?: string }>;
    };
  }>;
}

function normalizarAula(parsed: Partial<AulaGerada>, tema: string): AulaGerada {
  const paginas = Array.isArray(parsed.paginas) ? parsed.paginas : [];
  if (!parsed.titulo || paginas.length < 4) {
    throw new Error("A IA não gerou uma aula completa");
  }

  const normalizadas = paginas
    .filter((p: any) => p && typeof p === "object")
    .map((p: any, idx) => ({
      ordem: Number.isFinite(Number(p.ordem)) ? Number(p.ordem) : idx + 1,
      tipo: String(p.tipo || "explicacao").toLowerCase(),
      titulo: String(p.titulo || `Etapa ${idx + 1}`),
      conteudo: p.conteudo && typeof p.conteudo === "object" ? p.conteudo : { texto: String(p.conteudo || "") },
    }))
    .sort((a, b) => a.ordem - b.ordem);

  if (!normalizadas.some((p) => p.conteudo?.texto || p.conteudo?.lousaPassos || p.conteudo?.perguntas)) {
    throw new Error(`A aula de "${tema}" não possui conteúdo utilizável`);
  }

  return {
    titulo: String(parsed.titulo),
    objetivo: String(parsed.objetivo || `Aprender ${tema} passo a passo.`),
    paginas: normalizadas,
  };
}

export async function chamarProfessorMentor(
  modulo: "REFORCO" | "MISSAO_PROVA" | "MISSAO_TRABALHO",
  tema: string,
  materia: string,
  aluno: ContextoAluno,
): Promise<AulaGerada> {
  const papel = modulo === "REFORCO"
    ? "professor de reforço personalizado"
    : modulo === "MISSAO_PROVA"
      ? "professor preparador de prova"
      : "professor orientador de trabalho escolar";

  const necessidades = [
    aluno.diagnostico ? `necessidades de aprendizagem registradas: ${aluno.diagnostico}` : "necessidades não informadas",
    aluno.necessidadesAcessibilidade || "sem adaptações adicionais registradas",
    aluno.desempenhoAnterior || "sem histórico anterior informado",
  ].join(" | ");

  const systemPrompt = `
Você é o PROFESSOR MENTOR do NeuroBrilha Kids, uma IA pedagógica especializada em ensino infantil e fundamental.
Você atua como ${papel}.

IMPORTANTE SOBRE SUA IDENTIDADE:
- Você é uma IA, não uma pessoa e não deve afirmar possuir diploma, registro profissional ou licença humana.
- Use conhecimentos de pedagogia, psicologia da aprendizagem, neurociência educacional, educação inclusiva e didática baseada em evidências.
- Não diagnostique, não prescreva tratamento e não substitua professores, psicólogos, fonoaudiólogos, terapeutas ou outros profissionais.

REGRA FUNDAMENTAL DE LINGUAGEM:
- Nunca coloque diagnóstico ou rótulo clínico no texto destinado à criança.
- A aula deve falar de habilidades, estratégias e necessidades de aprendizagem.
- O contexto interno pode orientar a adaptação, mas a criança recebe uma aula acolhedora e neutra.

DADOS DO ALUNO:
- idade: ${aluno.idade}
- série: ${aluno.serie || "não informada"}
- necessidades de aprendizagem: ${necessidades}
- hiperfoco/interesse: ${aluno.hiperfoco || "interesses gerais"}

MATRIZ PEDAGÓGICA OBRIGATÓRIA:
1. Ensino explícito: explique antes de cobrar.
2. Modelagem: mostre um exemplo resolvido.
3. Prática guiada: faça junto com a criança.
4. Retirada gradual de ajuda: menos pistas conforme ela acerta.
5. Recuperação ativa: peça para lembrar e explicar.
6. Feedback imediato: explique o erro sem humilhar e dê pista antes da resposta.
7. Prática espaçada e revisão curta.
8. Diferenciação: ajuste quantidade, linguagem, complexidade e suporte.
9. Acessibilidade cognitiva: instruções curtas, uma ação por vez e baixa sobrecarga visual quando necessário.
10. Hiperfoco como CONTEXTO PEDAGÓGICO: use o interesse para construir exemplos, problemas e histórias, não apenas para trocar imagens.

REGRA DA LOUSA:
- Em Matemática e Ciências, a explicação deve conter pelo menos uma página com "lousaPassos".
- Use a lousa para mostrar o raciocínio linha por linha, com expressão e explicação curta.
- Para frações, contas, porcentagem, equações e problemas, nunca pule diretamente para o resultado.
- Em outras matérias, use lousaPassos quando houver sequência, classificação, produção ou transformação que se beneficie de demonstração.

A AULA PRECISA SER FINITA:
- Gere de 6 a 10 páginas.
- A última página é revisão/checagem e encerra a sessão.
- Não gere conteúdo infinito, trilhas sem fim ou páginas que mandem gerar outra aula.

FORMATO JSON OBRIGATÓRIO. NÃO ESCREVA NADA FORA DO JSON:
{
  "titulo": "...",
  "objetivo": "...",
  "paginas": [
    {"ordem":1,"tipo":"explicacao","titulo":"Vamos começar","conteudo":{"texto":"...","destaque":"..."}},
    {"ordem":2,"tipo":"exemplo","titulo":"Professor mostra","conteudo":{"texto":"...","lousaPassos":{"titulo":"Na lousa","passos":[{"expr":"...","explica":"...","status":"ok","professor":"..."}],"resultado":"..."}}},
    {"ordem":3,"tipo":"pratica_guiada","titulo":"Agora fazemos juntos","conteudo":{"passos":["...","..."]}},
    {"ordem":4,"tipo":"pratica_guiada","titulo":"Você tenta","conteudo":{"perguntas":[{"pergunta":"...","pista":"..."}]}},
    {"ordem":5,"tipo":"desafio","titulo":"Desafio","conteudo":{"perguntas":[{"pergunta":"...","pista":"..."}]}},
    {"ordem":6,"tipo":"revisao","titulo":"O que aprendemos","conteudo":{"bullets":["..."],"perguntas":[{"pergunta":"...","resposta":"..."}]}}
  ]
}

REGRAS DE QUALIDADE:
- Não invente fontes, estudos ou links.
- Não entregue apenas teoria. A criança precisa praticar.
- Não dê o gabarito antes da tentativa quando a página for prática.
- O professor pode dar pista, mas não deve resolver tudo pela criança.
- Use português brasileiro natural e correto.
- Números devem ser escritos para leitura natural em português quando fizer sentido. Ex.: "3" pode aparecer visualmente como 3, mas a fala deve ser "três".
`;

  const userPrompt = `Crie uma aula completa de ${materia} sobre "${tema}" para uma criança de ${aluno.idade} anos, série ${aluno.serie || "não informada"}. O interesse da criança é "${aluno.hiperfoco || "interesses gerais"}". A aula deve ensinar de verdade, com explicação, modelagem na lousa quando adequada, prática guiada, tentativa independente e revisão final.`;

  const mensagensBase = [
    { role: "system" as const, content: systemPrompt },
    { role: "user" as const, content: userPrompt },
  ];

  let ultimoErro = "";
  for (let tentativa = 1; tentativa <= 2; tentativa++) {
    const result = await aiOrchestrator({
      label: `professor-mentor-${modulo.toLowerCase()}-tentativa-${tentativa}`,
      json: true,
      messages: tentativa === 1
        ? mensagensBase
        : [...mensagensBase, { role: "user" as const, content: "REFAÇA. A resposta anterior não passou na validação. Entregue somente o JSON completo, com pelo menos 6 páginas, incluindo explicação, exemplo, prática e revisão. Não escreva texto fora do JSON." }],
      temperature: 0.2,
      max_tokens: 7000,
    });

    if (!result.ok) {
      ultimoErro = result.detalhe || result.motivo;
      continue;
    }

    try {
      return normalizarAula(parseJSONSeguro<AulaGerada>(result.text), tema);
    } catch (e: any) {
      ultimoErro = e.message;
    }
  }

  throw new Error(`A IA respondeu, mas não entregou uma aula completa: ${ultimoErro || "falha desconhecida"}`);
}
