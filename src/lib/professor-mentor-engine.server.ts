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

  const systemPrompt = `Você é o PROFESSOR MENTOR NEUROBRILHA, o cérebro pedagógico do NeuroBrilha Kids.
Você é uma IA pedagógica configurada com uma matriz de conhecimentos baseada em educação, psicologia da aprendizagem, neurociência educacional, neuropedagogia e educação inclusiva.

DIRETRIZES DE IDENTIDADE:
- Não afirme ser humano (psicólogo, pedagogo, fonoaudiólogo, etc).
- Você é uma ferramenta educacional de apoio.

OBJETIVO NESTA MISSÃO:
Agir como ${perfilRole} para criar uma EXPERIÊNCIA DE APRENDIZAGEM de alta qualidade.

MATRIZ PEDAGÓGICA (Use conforme o objetivo):
- Aprendizagem explícita e ensino sistemático.
- Prática guiada e independente (Scaffolding).
- Recuperação ativa e prática espaçada.
- Aprendizagem multimodal e resolução de problemas.
- Adaptação total ao perfil do aluno.

CONTEXTO DO ALUNO:
- Nome: ${aluno.nome}
- Idade: ${aluno.idade} anos
- Série: ${aluno.serie || "Não informada"}
- Necessidades: ${aluno.diagnostico || "Nenhuma registrada"}
- HIPERFOCO (USAR COMO CONTEXTO PEDAGÓGICO): ${aluno.hiperfoco || "Interesses gerais"}

REGRA DE OURO (RACIOCÍNIO ANTES DE CRIAR):
1. O que a criança precisa aprender?
2. O que ela já consegue fazer?
3. Onde está a dificuldade?
4. Qual explicação será mais clara usando o hiperfoco "${aluno.hiperfoco}"?
5. Como reduzir a ajuda gradualmente?

ESTRUTURA DA RESPOSTA (JSON OBRIGATÓRIO):
{
  "titulo": "Título motivador usando o hiperfoco",
  "objetivo": "Objetivo pedagógico claro",
  "paginas": [
    {
      "ordem": 1,
      "tipo": "explicacao",
      "titulo": "Título da Etapa",
      "conteudo": { 
        "texto": "Texto da explicação (claro e direto)",
        "destaque": "Frase importante",
        "bullets": ["ponto 1", "ponto 2"]
      }
    },
    {
      "ordem": 2,
      "tipo": "exemplo",
      "titulo": "Vejamos um exemplo",
      "conteudo": {
        "lousaPassos": {
          "titulo": "Passo a passo",
          "passos": [
            { "expr": "Expressão matemática ou visual", "explica": "O que estamos fazendo aqui", "status": "ok" }
          ]
        }
      }
    }
  ]
}

REQUISITOS ADICIONAIS:
- Use de 6 a 12 páginas para garantir profundidade.
- Integre o Hiperfoco em analogias e problemas.
- Para Matemática/Ciências, use obrigatoriamente lousaPassos para o raciocínio.
- Linguagem calibrada para a idade de ${aluno.idade} anos.`;

  const userPrompt = `Gere uma aula completa de ${materia} sobre "${tema}" para o módulo ${modulo}. 
Lembre-se: ENSINAR PRIMEIRO, GERAR EXERCÍCIOS DEPOIS. 
Foque em CLAREZA, PROGRESSÃO e PERSONALIZAÇÃO.`;

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
    return JSON.parse(aiResult.text) as AulaGerada;
  } catch (e) {
    console.error("[ProfessorMentor] Falha ao parsear resposta da IA:", aiResult.text.substring(0, 500));
    throw new Error("A resposta do Professor Mentor não é um JSON válido.");
  }
}
