import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { callGemini } from "./gemini.server";
import { getEscritaStatus, EscritaStatus } from "./motor-escrita.functions";
import { MOTOR_PEDAGOGICO } from "./motor-pedagogico-data";
import { extrairHiperfoco } from "./hiperfoco-utils";
import { supabase } from "@/integrations/supabase/client";

export const gerarAtividadeEscritaIA = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ childId: z.string() }).parse(d))
  .handler(async ({ data: { childId } }) => {
    // 1. Coletar Dados do Aluno (Contexto)
    const { data: profile } = await supabase
      .from("profiles")
      .select("*, anamnese_v2(*)")
      .eq("id", childId)
      .single();

    if (!profile) throw new Error("Perfil não encontrado");

    const status: EscritaStatus = await getEscritaStatus({ data: { childId } });
    const hiperfoco = extrairHiperfoco(profile);
    
    // Calcular idade
    const nascimento = profile.data_nascimento ? new Date(profile.data_nascimento) : new Date();
    const idade = new Date().getFullYear() - nascimento.getFullYear();
    const serie = profile.serie || "Não informada";

    const etapaAtual = MOTOR_PEDAGOGICO.find(e => e.nivel === status.nivel_atual);

    // 2. Construir Prompt do Professor Mentor
    const systemPrompt = `Você é o PROFESSOR MENTOR DE ESCRITA do NeuroBrilha Kids.
Sua missão é gerar a PRÓXIMA atividade de escrita perfeitamente adequada ao nível da criança.

REGRAS DE OURO:
1. IA NÃO cria atividades livremente. Você segue o motor pedagógico.
2. OBJETIVO PEDAGÓGICO PRIMEIRO. HIPERFOCO COMO CONTEXTO MOTIVACIONAL.
3. Se a criança domina uma habilidade, avance gradualmente. Se tem dificuldade, simplifique e dê mais apoio.
4. Mantenha revisão de habilidades anteriores.

CONTEXTO DO ALUNO:
- Nome: ${profile.nome}
- Idade: ${idade} anos
- Série: ${serie}
- Etapa de Alfabetização: ETAPA ${status.nivel_atual} - ${etapaAtual?.titulo}
- Objetivos desta Etapa: ${etapaAtual?.objetivos.join(", ")}
- Preferência de Letra: ${status.pref_letra}
- Pontos de Domínio: ${status.pontos_dominio} (acertos aumentam, erros diminuem)
- Hiperfoco (Contexto): ${hiperfoco || "Não definido"}

ESTRUTURA DA RESPOSTA (JSON):
{
  "tipo": "caderno" | "lousa" | "ditado" | "pre-escrita",
  "comando": "Instrução clara para a criança/pais",
  "conteudo": "A frase, palavra ou letra a ser escrita",
  "dica_pedagogica": "Breve orientação para o mentor/pai sobre como apoiar",
  "habilidade_foco": "Qual habilidade está sendo trabalhada agora",
  "audio_instrucao": "Texto que o Pip vai falar para explicar a atividade"
}

Se a criança estiver na ETAPA 1 ou 2, foque em traçados, letras isoladas e sons.
Se estiver na ETAPA 3 ou 4, foque em sílabas e palavras simples.
Use o hiperfoco (ex: ${hiperfoco}) para tornar o conteúdo interessante, mas sem fugir do nível (ex: se o nível é 'Letras', não peça para escrever 'Tiranossauro Rex', peça para identificar a letra 'D' de Dinossauro).`;

    const userPrompt = `Gere a próxima atividade ideal para ${profile.nome}. 
Considere que ele(a) está com ${status.pontos_dominio} pontos de domínio no nível ${status.nivel_atual}. 
Gere em JSON conforme a estrutura solicitada.`;

    const responseText = await callGemini({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      json: true,
      temperature: 0.6
    });

    try {
      return JSON.parse(responseText);
    } catch (e) {
      console.error("Erro ao parsear JSON do Gemini:", responseText);
      throw new Error("Erro na geração da atividade");
    }
  });
