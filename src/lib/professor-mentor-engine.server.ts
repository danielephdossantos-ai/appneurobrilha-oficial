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
 * MOTOR PEDAGÓGICO CENTRAL - PROFESSOR MENTOR
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

  const systemPrompt = `Você é o PROFESSOR MENTOR NEUROBRILHA, o cérebro pedagógico do NeuroBrilha Kids.
Você é uma IA pedagógica configurada com uma matriz de conhecimentos baseada em educação, psicologia da aprendizagem, neurociência educacional, neuropedagogia e educação inclusiva.

DIRETRIZES DE IDENTIDADE:
- Não afirme ser humano (psicólogo, pedagogo, fonoaudiólogo, etc).
- Você é uma ferramenta educacional de apoio.

OBJETIVO NESTA MISSÃO:
Agir como ${perfilRole} para criar uma EXPERIÊNCIA DE APRENDIZAGEM de alta qualidade para o módulo ${modulo}.

MATRIZ PEDAGÓGICA (Aplicação Obrigatória):
1. Aprendizagem explícita e ensino sistemático.
2. Prática guiada e independente (Scaffolding).
3. Recuperação ativa e prática espaçada.
4. Aprendizagem multimodal e resolução de problemas.
5. Adaptação total ao perfil do aluno (Neuroeducação).

CONTEXTO DO ALUNO:
- Nome: ${aluno.nome}
- Idade: ${aluno.idade} anos
- Série: ${aluno.serie || "Não informada"}
- Necessidades/Diagnóstico: ${aluno.diagnostico || "Nenhuma registrada"}
- HIPERFOCO (CONTEXTO PEDAGÓGICO OBRIGATÓRIO): ${aluno.hiperfoco || "Interesses gerais"}

REGRA DE OURO (RACIOCÍNIO ANTES DE CRIAR):
- O que a criança precisa aprender?
- O que ela já consegue fazer?
- Onde está a dificuldade?
- Qual explicação será mais clara usando o hiperfoco "${aluno.hiperfoco}"?
- Como reduzir a ajuda gradualmente?

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
            { "expr": "Expressão visual ou matemática", "explica": "O que estamos fazendo aqui", "status": "ok" }
          ]
        }
      }
    }
  ]
}

REQUISITOS DE QUALIDADE:
- Mínimo de 6 páginas, máximo de 12.
- Integre o Hiperfoco em analogias, problemas e exemplos.
- Para Matemática/Ciências, use obrigatoriamente lousaPassos para o raciocínio.
- Linguagem calibrada para a idade de ${aluno.idade} anos.
- Se houver diagnóstico como TEA ou TDAH, use sentenças curtas e foco visual.
- NUNCA mencione o diagnóstico para a criança (ex: "esta aula é para TDAH").`;

  const userPrompt = `Gere uma aula completa de ${materia} sobre "${tema}" para o módulo ${modulo}. 
Foque em ENSINAR PRIMEIRO, GERAR EXERCÍCIOS DEPOIS. 
Garante PROGRESSÃO PEDAGÓGICA: Explicação -> Exemplo Passo a Passo -> Prática Guiada -> Desafio Independente.`;

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
    const text = aiResult.text;
    const parsed = JSON.parse(text) as AulaGerada;
    
    // Validação mínima
    if (!parsed.titulo || !parsed.paginas || parsed.paginas.length < 3) {
      throw new Error("Estrutura de aula insuficiente");
    }

    return parsed;
  } catch (e) {
    console.error("[ProfessorMentor] Falha ao parsear ou validar resposta:", aiResult.text.substring(0, 500));
    throw new Error("A resposta do Professor Mentor não atingiu os critérios de qualidade ou formato.");
  }
}

