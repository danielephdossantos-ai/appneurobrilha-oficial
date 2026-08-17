import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { callGemini } from "./gemini.server";
import { getEscritaStatus, EscritaStatus } from "./motor-escrita.functions";
import { MOTOR_PEDAGOGICO } from "./motor-pedagogico-data";
import { extrairHiperfoco } from "./hiperfoco-utils";
import { supabase } from "@/integrations/supabase/client";

// Tipagem da atividade na biblioteca
export interface AtividadeEscritaBiblioteca {
  tipo: "caderno" | "lousa" | "ditado" | "pre-escrita";
  comando: string;
  conteudo: string;
  dica_pedagogica: string;
  habilidade_foco: string;
  audio_instrucao: string;
  objetivo?: string;
  metodologia?: string;
  bncc_codes?: string[];
}

export const gerarAtividadeEscritaIA = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ childId: z.string() }).parse(d))
  .handler(async ({ data: { childId } }) => {
    // 1. Coletar Dados da Criança (Contexto)
    const { data: child } = await supabase
      .from("children")
      .select("*, anamnese_v2(*)")
      .eq("id", childId)
      .single();

    if (!child) throw new Error("Criança não encontrada");

    const status: EscritaStatus = await getEscritaStatus({ data: { childId } });
    const hiperfoco = extrairHiperfoco(child);
    const idade = child.idade || 0;
    const serie = child.serie || "Não informada";
    const etapaAtual = MOTOR_PEDAGOGICO.find(e => e.nivel === status.nivel_atual);

    if (!etapaAtual) throw new Error("Etapa pedagógica não encontrada");

    // ==========================================
    // FASE 4 - BUSCA NA BIBLIOTECA VIVA
    // ==========================================
    
    // Tenta encontrar uma atividade compatível já existente
    // Prioriza: Nível exato + Hiperfoco compatível + Mesma preferência de letra
    const { data: atividadesCompatíveis } = await supabase
      .from("biblioteca_escrita")
      .select("*")
      .eq("nivel", status.nivel_atual)
      .eq("tipo_letra", status.pref_letra)
      .eq("status_validacao", "aprovada")
      .contains("hiperfoco_compativel", hiperfoco ? [hiperfoco] : [])
      .order("uso_contagem", { ascending: true })
      .limit(1);

    if (atividadesCompatíveis && atividadesCompatíveis.length > 0) {
      const atividade = atividadesCompatíveis[0];
      
      // Incrementa uso
      await supabase
        .from("biblioteca_escrita")
        .update({ uso_contagem: (atividade.uso_contagem || 0) + 1 })
        .eq("id", atividade.id);

      return {
        tipo: atividade.tipo,
        comando: atividade.comando,
        conteudo: atividade.conteudo,
        dica_pedagogica: atividade.dica_pedagogica,
        habilidade_foco: atividade.habilidade_foco,
        audio_instrucao: atividade.audio_instrucao,
        from_library: true
      };
    }

    // Se não encontrou com hiperfoco, tenta sem hiperfoco (genérica)
    const { data: atividadesGenericas } = await supabase
      .from("biblioteca_escrita")
      .select("*")
      .eq("nivel", status.nivel_atual)
      .eq("tipo_letra", status.pref_letra)
      .eq("status_validacao", "aprovada")
      .order("uso_contagem", { ascending: true })
      .limit(1);

    if (atividadesGenericas && atividadesGenericas.length > 0) {
      const atividade = atividadesGenericas[0];
      await supabase
        .from("biblioteca_escrita")
        .update({ uso_contagem: (atividade.uso_contagem || 0) + 1 })
        .eq("id", atividade.id);

      return {
        tipo: atividade.tipo,
        comando: atividade.comando,
        conteudo: atividade.conteudo,
        dica_pedagogica: atividade.dica_pedagogica,
        habilidade_foco: atividade.habilidade_foco,
        audio_instrucao: atividade.audio_instrucao,
        from_library: true
      };
    }

    // ==========================================
    // GERAÇÃO VIA GEMINI (Se não houver na biblioteca)
    // ==========================================

    const systemPrompt = `Você é o PROFESSOR MENTOR DE ESCRITA do NeuroBrilha Kids.
Sua missão é gerar a PRÓXIMA atividade de escrita perfeitamente adequada ao nível da criança.

REGRAS DE OURO:
1. IA NÃO cria atividades livremente. Você segue o motor pedagógico.
2. OBJETIVO PEDAGÓGICO PRIMEIRO. HIPERFOCO COMO CONTEXTO MOTIVACIONAL.
3. Se a criança domina uma habilidade, avance gradualmente. Se tem dificuldade, simplifique e dê mais apoio.
4. Mantenha revisão de habilidades anteriores.
5. VALIDAR ESTRUTURA, IDADE, ETAPA E SEGURANÇA.

CONTEXTO DO ALUNO:
- Nome: ${child.nome}
- Idade: ${idade} anos
- Série: ${serie}
- Etapa de Alfabetização: ETAPA ${status.nivel_atual} - ${etapaAtual.titulo}
- Objetivos desta Etapa: ${etapaAtual.objetivos.join(", ")}
- Preferência de Letra: ${status.pref_letra}
- Pontos de Domínio: ${status.pontos_dominio}
- Hiperfoco (Contexto): ${hiperfoco || "Não definido"}

ESTRUTURA DA RESPOSTA (JSON):
{
  "titulo": "Nome curto da atividade",
  "tipo": "caderno" | "lousa" | "ditado" | "pre-escrita",
  "comando": "Instrução clara para a criança/pais",
  "conteudo": "A frase, palavra ou letra a ser escrita",
  "dica_pedagogica": "Breve orientação para o mentor/pai sobre como apoiar",
  "habilidade_foco": "Qual habilidade está sendo trabalhada agora",
  "audio_instrucao": "Texto que o Pip vai falar para explicar a atividade",
  "objetivo": "Objetivo pedagógico detalhado",
  "metodologia": "Metodologia utilizada (ex: multissensorial, fônica)",
  "bncc_codes": ["EF01LP01", ...],
  "hiperfoco_compativel": ["${hiperfoco || ''}"]
}

Se a criança estiver na ETAPA 1 ou 2, foque em traçados, letras isoladas e sons.
Se estiver na ETAPA 3 ou 4, foque em sílabas e palavras simples.
Use o hiperfoco (ex: ${hiperfoco}) para tornar o conteúdo interessante, mas sem fugir do nível.`;

    const userPrompt = `Gere a próxima atividade ideal para ${child.nome}. 
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
      const atividade = JSON.parse(responseText);
      
      // Salva na Biblioteca Viva para reuso
      const hash = btoa(`${atividade.tipo}-${atividade.conteudo}-${status.nivel_atual}-${status.pref_letra}`).slice(0, 100);
      
      await supabase
        .from("biblioteca_escrita")
        .upsert({
          titulo: atividade.titulo || "Atividade de Escrita",
          conteudo: atividade.conteudo,
          comando: atividade.comando,
          tipo: atividade.tipo,
          dica_pedagogica: atividade.dica_pedagogica,
          habilidade_foco: atividade.habilidade_foco,
          audio_instrucao: atividade.audio_instrucao,
          nivel: status.nivel_atual,
          etapa_titulo: etapaAtual.titulo,
          idade_min: Math.max(0, idade - 1),
          idade_max: idade + 1,
          serie: serie,
          tipo_letra: status.pref_letra,
          objetivo: atividade.objetivo,
          metodologia: atividade.metodologia,
          bncc_codes: atividade.bncc_codes,
          hiperfoco_compativel: hiperfoco ? [hiperfoco] : [],
          hash_conteudo: hash,
          uso_contagem: 1
        }, { onConflict: 'hash_conteudo' });

      return atividade;
    } catch (e) {
      console.error("Erro ao processar atividade do Gemini:", responseText);
      throw new Error("Erro na geração da atividade");
    }
  });
