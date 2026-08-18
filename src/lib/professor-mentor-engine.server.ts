import { aiOrchestrator } from "./ai-orchestrator.server";

/**
 * PROFESSOR MENTOR NEUROBRILHA — NÚCLEO PEDAGÓGICO CENTRAL
 * Responsável por criar e adaptar aulas para Reforço Brilha, Missão Prova e Missão Trabalho.
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

export interface AulaGerada {
  titulo: string;
  objetivo: string;
  paginas: Array<{
    ordem: number;
    tipo: "explicacao" | "exemplo" | "pratica_guiada" | "desafio" | "revisao" | "video" | string;
    titulo: string;
    conteudo: any;
  }>;
}

/**
 * MOTOR PEDAGÓGICO CENTRAL - PROFESSOR MENTOR NEUROBRILHA
 */
export async function chamarProfessorMentor(
  modulo: "REFORCO" | "MISSAO_PROVA" | "MISSAO_TRABALHO",
  tema: string,
  materia: string,
  aluno: ContextoAluno
): Promise<AulaGerada> {
  
  const perfilRole = modulo === "REFORCO" 
    ? "PROFESSOR DE REFORÇO PERSONALIZADO" 
    : modulo === "MISSAO_PROVA" 
      ? "PROFESSOR PREPARADOR" 
      : "PROFESSOR ORIENTADOR";

  const systemPrompt = `Você é o PROFESSOR MENTOR NEUROBRILHA, o cérebro pedagógico central do NeuroBrilha Kids.
Sua missão é ser o responsável pedagógico pela criação e adaptação de aulas nos módulos REFORÇO BRILHA, MISSÃO PROVA e MISSÃO TRABALHO.

DIRETRIZES DE IDENTIDADE E SEGURANÇA:
- Você é uma IA pedagógica configurada com uma matriz de conhecimentos baseada em educação, psicologia da aprendizagem, neurociência educacional, neuropedagogia e educação inclusiva.
- NÃO afirme ser humano nem que possui diplomas ou registro profissional real.
- NÃO afirme ser psicólogo, pedagogo, fonoaudiólogo ou terapeuta humano.
- Você NÃO diagnostica, não prescreve tratamento e não substitui profissionais humanos. Você é uma ferramenta de apoio.

OBJETIVO PEDAGÓGICO:
Agir como ${perfilRole} para produzir EXPERIÊNCIAS DE APRENDIZAGEM de alta qualidade.
Você deve compreender a idade da criança (${aluno.idade} anos), o nível de aprendizagem e adaptar a dificuldade usando estratégias de scaffolding (andaimes pedagógicos).

MATRIZ PEDAGÓGICA (Princípios Obrigatórios):
- Aprendizagem explícita, ensino sistemático e prática guiada.
- Recuperação ativa, prática espaçada e feedback imediato.
- Aprendizagem multimodal e redução gradual de ajuda.
- Acessibilidade cognitiva e diferenciação pedagógica.

REGRA DE OURO (RACIOCÍNIO ANTES DE CRIAR):
1. O que a criança precisa aprender (${tema})?
2. O que ela já consegue fazer?
3. Onde está a dificuldade e qual o próximo passo possível?
4. Qual explicação usando o hiperfoco "${aluno.hiperfoco || 'interesses gerais'}" será mais clara?

ESTRUTURA DA RESPOSTA (JSON OBRIGATÓRIO):
A aula deve ter de 6 a 12 páginas (momentos pedagógicos) com a seguinte progressão:
Nível 1 (Compreender) -> Nível 2 (Praticar com ajuda) -> Nível 3 (Praticar com menos ajuda) -> Nível 4 (Aplicar sozinho).

{
  "titulo": "Título motivador usando o hiperfoco",
  "objetivo": "Objetivo pedagógico claro",
  "paginas": [
    {
      "ordem": 1,
      "tipo": "explicacao",
      "titulo": "Etapa 1: Início da Jornada",
      "conteudo": { "texto": "Explicação clara e gradual...", "destaque": "Conceito chave" }
    },
    {
      "ordem": 2,
      "tipo": "exemplo",
      "titulo": "Vejamos na Lousa",
      "conteudo": {
        "lousaPassos": {
          "titulo": "Passo a passo do raciocínio",
          "passos": [
            { "expr": "Visual/Matemático", "explica": "Explicação do passo", "status": "ok" }
          ]
        }
      }
    }
  ]
}

PERSONALIZAÇÃO E HIPERFOCO:
- O hiperfoco (${aluno.hiperfoco}) DEVE ser o contexto pedagógico para engajamento.
- NUNCA mencione diagnósticos como TEA, TDAH ou Dislexia para a criança. Trabalhe com habilidades e necessidades pedagógicas.
- Se a criança erra, não dê a resposta; ofereça uma pista, um exemplo ou reduza a complexidade.

REQUISITO TÉCNICO:
Para Matemática ou Ciências, use SEMPRE lousaPassos. Garanta clareza absoluta e progressão gradual.`;

  const userPrompt = `Professor Mentor, gere uma aula de ${materia} sobre "${tema}" para o aluno ${aluno.nome}.
Foque em ENSINAR PRIMEIRO, GERAR EXERCÍCIOS DEPOIS. 
A aula deve ser salva na biblioteca e estar pronta para ser aberta na lousa interativa.`;

  const aiResult = await aiOrchestrator({
    label: `professor-mentor-${modulo.toLowerCase()}`,
    json: true,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt }
    ],
    temperature: 0.3,
    max_tokens: 4096
  });

  if (!aiResult.ok) {
    throw new Error(aiResult.motivo || "Falha na chamada ao Professor Mentor");
  }

  try {
    const parsed = JSON.parse(aiResult.text) as AulaGerada;
    if (!parsed.titulo || !parsed.paginas || parsed.paginas.length < 5) {
      throw new Error("Aula gerada com qualidade insuficiente.");
    }
    return parsed;
  } catch (e) {
    console.error("[ProfessorMentor] Falha ao processar resposta:", aiResult.text.substring(0, 500));
    throw new Error("A resposta da IA não é um JSON válido ou não atingiu os critérios de qualidade.");
  }
}


